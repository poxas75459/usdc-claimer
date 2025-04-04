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
    "5h61KByLF6ns99YvBhCdZgM2hBsfd8tTmjfjjMTnYWXDWiLufnbeGhCUaVLoeocfcwHnkdp8eD9o9KX1ENKTdhr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JzvsPHvaViPf6o1KCB3DJ4HVN3yLCcCUTMZrH7UdPsBpTVLhbkutbz4Vw4yuCefm6NfyhJhGULbhLYrcpkRyCGW",
  "key1": "2Q7NjBcGVkSKQLgQUVW6qNpSF9E5HUrfvrv7YwzrjZUisxfWvzeCCu8HMymFLG5a2p1thV5i31draLtQS3e5skgF",
  "key2": "2kL5924VMovdnEHFiEznX6Phv6zHC1so6Kefzo1rZgeqthmPQovaKL8Ju8XrfsgW8n2JUAUUBijXZK4o4yYiwrSs",
  "key3": "3qFwKbQepQfPAoqozZX9YmkzmUuoGsd5d4HHV55T2sZut1JkfukERXGGt4tAk8KAHbQcFvCHhgu5AxicZEMGCmzM",
  "key4": "3wYmDz7JPhSjJHkjjXjwAotxUNtuMGbi3yPmnvBw5Bas3SnwPyPH7sWEUKaqANmBXnQUxShUQuhm46dtsiVWtEof",
  "key5": "5gQkwBqHpgAM5LEidJR5hpLTNdc8VKMobYmZHmkeCfmS8x8diDnwmqkwhZY8mji6FBKYRnnZszWms1EeceNUVSBD",
  "key6": "2LNvUZ8HGp4usLb4tv2Qtbo5cnF7FjbcrAjvTM84YxUkMZbAfvpVkovwwXn7yTbrjXCtDU8Ygs6L3cDKLUkgFSst",
  "key7": "5GDJ14AykYfjyEPYHfiJBhWcfDvYkcvU1rGcJL9kBBvhVg1xmyyQTwZ1cDYYUy1ArawaAVxm9MrrzeVEuzwY55os",
  "key8": "nh5FYDnf3MzysXH3t92hzBPLoE2Cf6URgJ439dD7tS1G78AYsthXqFEvD5qH6zLULAV9Epnj6BniidwME282t4a",
  "key9": "eRyKVNVAnGjDwLVn2HmEB4ZUBsySdofSJMnyd493wNWCtcV7bcWKzPwLCBn9CFPB3RW3TL2gKoC8ZEBbMXE2AtC",
  "key10": "4eQ8TMrXqYycVQJQtKmH21puzqRhHaPpTRsDykYwmarFwQgn93nBw5TFtEsNfRFP6TfyuEvH2ZsyoEAS6ThtKpUm",
  "key11": "61MHtQ9tJ4zcPqxBgq7fTtzr2ZhapTXonMsF1nVDwQZFNQqer4Mi2GmGrxccFuHcJBWZcrvA9ZgwuiupCq3NRvcL",
  "key12": "tbdtuxjW9GAwbAw5SsFXJcZ3evemkDaUpEV9zgg2tieBrejgy85jLxCqZP55cuNKuFHksVNoFZC2kJKTiviwREL",
  "key13": "3LzLRdtzt7a58G6Dw4qEX42tTaA9WpP5snDxYqjy6gx2VmhsiX9qsrXBRC7tZoWCkXhbFbZ9PwJCrZLiUwTBjt79",
  "key14": "2LLD9p4zNiZ8pG6eifSkHayvifaGmfFnfU5GgqRBtaBUKibarUpdJGTw5QLR46e5qf3psRTqFxHDQFD9jqxxCHKU",
  "key15": "3XtHxMsDP14xjXTXVFzRQghTcZn2vCAgMXp2egM6sfFdBNNvHTcgAjyobCNoGBGW79tmoGQTUEkmRGVDeNHhvg2n",
  "key16": "2wbSdQ62wPrFuZB9dQLVxfCsvkRfeVdjgxhd7kmSXZqrQrQVCdSsAHvzQcMe39Ed5GCsPnHifPWTF5R8ZpaQbTYp",
  "key17": "EReUra7dx2MV8urKpmVzQf8QnDWMyaXWTUXqur2i9RybQZjbEnhSWXvQXcjmBw4byZR8XhPMvyLc4wGNQBET8Y8",
  "key18": "3DiaQLMhWEmYB1WFh6ZT3jTtVtp843uC4P6gLW7rijjuBZhRkn5XPW9WLJcNtyfbTosCbREVRphVgGS78CZWJCuB",
  "key19": "4gxKLKd41xV46UTC9j1socibMTFWpdrRinyBUykLXBduFyJdDF9EBAoiMhf8iA3gvMCdqhwqVm5NUCLJwrV2LcVB",
  "key20": "3nccrNRcRp7gdCHCe9cQPptB7jNKiez1W6ShDF514YjQgMnxwVYotPTp6h6XYNBNJViMx4qQmpwHayHZ3ELbwoSD",
  "key21": "3XP8UwSxJYvwdoBPEevHuGvkfaBVpVvWH1yVvS1XEJJdwk8QfvHoaSGUnnTqeoBbkN3Lncjmmm9kWuPQqgABdy26",
  "key22": "5cEdpDbZ3cuwyPmet4b4DjEHTqNnMSqABYvxTZSVFyULwtDvaprHTZvMN8zmYCDpScFDhMFsJJrAqDKAapsF4KMv",
  "key23": "3Ac5kt8TBgFPv9cigvz8E7hxYipbPX2noYgNf1EFsXRCtzP6AHSo4E6DYeu2wwkrQo66YNA8MLPPo6PhYy5XWhVj",
  "key24": "4BFhJhVTzk1knLZwjuTj2Ha5h36v5ui1zQ76tzaMPowJPaCExojjmw4XGHpQhNKPK69616nsuNzBm974dtrj1roc",
  "key25": "4JQnafMHwsj6PQcVqxz8yipPPQq21yhHshS1WtrJSuQZkHJgAoFVF9kcvruyzGF5srTzEEWpkX4dmUwkGKRCoKr5",
  "key26": "uMrpSQrACqx1cjiMNaJcrdLChtrb5xDHu77am2vNA3GPC8aDc6JHN9QTbzmjucQgjzoWe3Mi73Lo4sZTnGgukCt",
  "key27": "5aUtETk4NwFB7bVRxTTq1kmsrPVbRM64zfaGxyEkpQGuka8hvNdrfr5uGLP2KBC3xMRayjbmSHeXbxgxVA3CZmuP",
  "key28": "4dfTx7czJVC2rZdWXh2eeLfMPgi5A9bYsgWaAggwk4qvshEKk3YH3dGi6sL3MH8c8g8GgdysB2CzP3uXBYhRe3C3",
  "key29": "5M8QGbhzp4Uvkp9X9bJ89SVPZzqseHtkj8W8aeNL9dpVjMJNe4YS87J5Mx2SimXaMC1rrFkyw13n67kTVaWAbi1T",
  "key30": "5qx72rHY8iHWUDGVU3ixSKAbhkmnWJ9smfbdbuiZo5q4AfmKFc3uKAkjkjjVQZ1Q1D5vQ4UApAqKr4GAEQe5gbka",
  "key31": "2pHtGTR5Bfeef9ofxZ5DUWQg3PsbSZCkWDtBZXoizBZTkUY3hnZbJNWKxAuQusGun718J7xR2wpzXxScqXkZUFGR",
  "key32": "3P9uexB3ZoDBHJN6pXx4giUQFy3kM34o9prVG5mUh2sbeDc1dj5aivgi24Kiavk6UoTppexoEjig3EY7zBMZiR6u",
  "key33": "MfQfwYMhbj1j96hPCX5bcL7iwFK5KBwnRwvunNRiNhdGDeDPL9rwB7BRfQaWocViX4CumHhohQS4zuhFXsJ9k4T",
  "key34": "dno44T4JnK2misPm6SxNJ9zfqpmmohkZqUCiFfYpnndn7QGqf5VMi1yP5wyqS4ocyPotpHY6biygXFF1Xft5pXz"
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
