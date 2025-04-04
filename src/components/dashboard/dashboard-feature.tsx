/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5oQ3o73WJT1GDDUBzFjjZbLSTivfD9CseUkBB888guvy8t8i9kgQxCg4DSow8RkaLq44LuUU1dsWtVk2yAsZCqPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QTEoJJtqkS7oJvr2ryqPGACzKXP8iEzoaFN6WhBeKqD7m3NRnAMoJaprC38FXboHZ8D5FHxRqNwZhWtw4CjVwxc",
  "key1": "2T8tPKEf56KrPEHAo65H35osB59gv5H9sdEVTrZGr4v3xMGGnM7JJWDjhFvJ3ABFtM4FHEGBoahV4Qd9YvFrYsVe",
  "key2": "yJwEwj9fpkUsTU29FDkr1cTtNu5eUEJa1qNaoF2inQAh8Wu6iSjA8EUUecXH2YZZZX5Uq2NQahDHGd6TizwGFa3",
  "key3": "3Vhjg3SUcqBzh6iR85kK2BF5vLNzYp4oYxCwnyiyX4KphHQh9JBc2Y1iH9ajREeDAYN6mDUVFL2aiZ6fCWKofusy",
  "key4": "5Q8keMXNArtDc2Hey3paEcK9nJsMXS4FzWgGeu8FqXpPx6wRCbrEXkHAVxBnTdBvTc2Z9f6j6Sa9o6nppjF1DPe5",
  "key5": "45KdhPesJHc96WjbXZxeVmTbr6sHhamr6zLww6wrf1BjdS5MKRgtTAseAABVocvK9CypCRt85D7UY6rLZtVENfrc",
  "key6": "2LYC2nTicEp4Nos6XMqBmiFC1ydJRH1cmMoBpmVgKL6cCQvkCm18SxZMJ99SR4Sj6znRXL2MyF25QmHzdCKGU4PV",
  "key7": "5zwg32iDNkFxejAdTBjvJMYWg2oFViVE82p3L1YK8HspAecXvyq5odstpRrnMvcshEBnLMGLBRX4PMjVUw5iWvR2",
  "key8": "3bXky4AFkEkjKFU9baLLNPhQEmo6ksMDwYrfidQX4qHoQb9Eg4DZAGJuFQjrGFtFverWvkrqSYX3qrq1zq3ZKVyV",
  "key9": "2249B4RGmnsKftZPj16VmukahGYEmfo9PHxBTsP81QshaAmJR8JnhtP5uTPiEsKVdZ6ycsLBo9WHfJk1ZbU9QQnJ",
  "key10": "2wzzRe9pSacRGXLSLFEAjKP3qYxP3Pmqhbbi17rxe7atL3HwnYURy25z5kfsWb6TpwJzF3uQcEoUNwyb2qDYkyVe",
  "key11": "3tWoEAdouYm5rLzspYhqowQMNRRwT3bSxYfVE3JdVDEKxqo8Fj4k7D5U6qAsirUw5YCnP7gkBDdc4SfCLnbRvXgL",
  "key12": "Kr2oQgFBtq4YGNHXat7mdRMGfi7ij5cWc5biy8dw2HBt7Xa4qoNoB1wgf6k2dDoEnYTWHWmKBWJGLejQpAJ2mxB",
  "key13": "3XZqQkMVxANqZuZi3RbGBco29PR1aLvzmE8vfwmA4q87jwW9RDaYWfexPVq4w2ueTuc7zcnxZqL9kWUgWaRa35Bo",
  "key14": "4aqAtum2WYCphmj61KZ9cnDJ3c4F9Ptu6XJgGhE7hScWNPPkN3chPMFxxZz683MXSLNgnAyCzXu53Md1Yr6aC47L",
  "key15": "2rBbULCcjTNusbWVfYbqwm9z1j5VdizrkyU4oB6hrALSTzxrs4cqqKrkFeSRRv3oAeqxQWMW7CbH2vgiQbSLqerE",
  "key16": "3eTQjscnVNjVCKVM8Z8hAckXtLHP4gvWh6Fcd9RfcEcjE9iHUSVeE2mbcUq6cdKBznrJKY1iSQtnkxZySFMxF7d2",
  "key17": "gztDw3xT9bhMT9JFoPymiCKNRNsyMwpJ5uKeihVDKC2kRK1hiev8oyBraRmAy7VxGfj5Ag7SAEmo2Sje8GVjdQY",
  "key18": "3C7yvowtoCJgJEFMTdurhRDeDGSPJ6Fh7oTLi2bZsYZjw95MDwP7K4PRTZi2poPtMy83GVyZh7hwLtCfXy42GybZ",
  "key19": "2bxYYmbTAaYvxra7NC2mjHF6EVScfVWUp5LTZFEy7EAqUopzvRVqtV3rLvvBLZzmZ6tgeRsCDTeT97HX1m6zRWZX",
  "key20": "5To2o9g1mJtK8DQvxqMAtQ5fqHRmZnUPJBUXF5tdqFiJgw1HfosRuhKUsMQGd6j7QFaSysiDt59LEHWNk6tZ5qni",
  "key21": "2HjUzhawyHqyycLJ2sGkZwHQ2GQfVtxg3SGdPrtQvTZcQJegFe2Df3CBJTMT6Mfm1suqSk87hg3zVfAxwB3CcGXh",
  "key22": "3TS5oKL6Xc3EQdoW39yMst1VZJVHQoFiGGoPxeL47P3xkn1tsmQjhbZcRqobc9D7B2M2yNaf8fkZw8qudosiFh4F",
  "key23": "2ycVpssdgjSqYzMsk2h6wubfKHef7V9oPVoYasxVNaL8WefFNH24W4J8rjHx2B8wYVXBqDQcbMkPjLSDgy9bKbks",
  "key24": "2eiNTB5DU87u75w1ebbfZTXSRtDc7fEQKzJntckeLJMg6cCxidAn1zdK8uY5qRwjudKe9m697kz8RRV7z6KbkVgz",
  "key25": "4fHwbhBjoyryXidfp4dMH5QYES5CSsXrW7V9mj1nbmCcf7ErXmfWGz1zD3tGaB8zeSmwMesbihHp7sMabSRcKwAv",
  "key26": "34FimLiYXRm2fCWZ7oaEFU9P5LgyVWsaT55N7nuwfA89k46WQk1Q4QXXQKqejXoKZFbvcxKVJFHhZuuMtMgDxkKk",
  "key27": "4vsbQLa671c14ERHMnPuNea4zwfeLyJmL1kCvYHBnkURMxWhbvn5FHatnPF95NRJtZoJxMMsG22i4JSuYPRM7c1A",
  "key28": "5SnAkgR4ppkgCMZsbLfaocyds6AVcqGuQqVsLUUVoU5thbkAANiHkkv5eR7erHQ27Jme6YTkucim7o4mzHv1R2dG",
  "key29": "63p78VUPi5ueKo762yqdVzc3V273xw4KQs8rL6p3dJc1hUSoQjue7G14yV6GWHpsUyc2cJKXnu6cRybYrEMdK5fM",
  "key30": "2yXmzRq8cKb5vjhVXedpAA3WhhVQdtuXj4adu54Vf45ULZ7XAKEUcNwdui5rDkXw6szJSTcNuLdBcDehYuBK6wMf",
  "key31": "3CuRZi7fS4qK6ZX7ZTfX44aUd5gMAhTY9vpp8hnZ82ZRCfuEijPkwCGeEvH8ck9MfaYEEtoMKZ73BpksUoiQKHNJ",
  "key32": "3K16o3GxgR8ATZvhWutwH89BQ5LJ7dDnSyfTw93Kk8SNmV4ZQcQWyfW93mfke8gTwfFRuZanBWAENaRuKa1viVia",
  "key33": "2xUgbYCWw1bEUXcmGYVZYrU5NdwHV6RRQ6pd1Zcu6J8uy8mLjTjNVFrqSBLgoeMrhvJvWtWD8M7TCWaNyVPYWvb2"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
