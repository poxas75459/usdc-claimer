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
    "5uCNcTvqqSz4FK3omQxRySLnn2JmaYqAC4CvKu26L7C22Bka417GZ26y8gqd77aQFADD4SmpiX84o4D3wCGeweJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nvyXhGp7v6EAE9659UkxNr5StepxkHdWpfrYF5DanJacz9FiFPegsGB3x43NsX7dwZ3UZ9JjPV1xttxAZ54DrFM",
  "key1": "4VD1SBarRnnTaMKhtjm45BjMzz8MLU6CskiRQAUoZbWQNvxoinFhgRKN7cPYqtv8ErN5oGWZZyC2m6UgGgiGeLCi",
  "key2": "3Z63RxVEUsQqWd2LSvrATM3gB6GioK1UxFqoim6zwY4oq6izXHuwZeSXgpNhJpR3x9W5c5vXdaoD76FqjdNmRjz1",
  "key3": "5iWShFK29b5kpWpf4vLJfeA3w3WCoh4HFB9a7gNQENAECJzVCynS5qLMAEYK2xJssrRgNNrZhUU8wAYTXd1xHZpA",
  "key4": "4bXhcxNAFAy2PqYwtK8tWA5u6YeqHX62SAnG9ZnWqX3avF3HUUMV5ycv9RMZH7yrMxsPLBCvWnNBDVqZ74E3X19q",
  "key5": "5WS6Zw2VEDQyZc4Ta6XJiSH93Dp7eW9yFTUg9Q9aspbHmFJSUDmfMJw5Becaoi5aSnPXL1rQwWh3EbzHKPaa3fgj",
  "key6": "2vKasGPgNkzhKVMqzTYmHChnYWBAZanuGfpJjs5RL6QWpvKcMBQNdfh4dSxWhBsEL5Znq51HbP6rhXJVzwYebFyT",
  "key7": "5isJQ151pKQdUu7AoxnCWMjUJH8odurDhdUH2ikYSdqQ36Ndk9phaA5iZBNsqgbb8bufisCRCssQT57WByzZ2xEQ",
  "key8": "5Axm2rCApdjZYmjUUA9da2Cpq5G6tMcysdDZUAuMqmH6nuForaKwtBX63PcYT9yc2sJehXChJXZ4Y6DCXkKKbTZt",
  "key9": "2JikSw3rkRSctS1k34gbQRGspTVJmYCwH1gsdttfcZcyX4UGRsBAukHwc6WSL3FU6UsyRMiNCZa8uw5DoErocdEZ",
  "key10": "5oSC2Z9XArcbYM55DZw3pyJD9wXPRTt4wKWhXCdxix7r8n7Ej9emz9j5CJpv2hDkUJbgoTqfcoyyxXHJGFopXL4",
  "key11": "4HuVx7SevDGPnH5U7NwfkH2FCbj4inytshWd4fanqTJptWKnQsSBFKvK4UTXQiNL4qTo3xKaNk4NA3MWFMA5bhWk",
  "key12": "38cMwZeEjzGjw9vNUuGZ66YVifjoxqyDXo9H2xubVKLdYYdesM1vJcdCVpwEec9o5rMMsf6YqEdz6JvqQ7ctSVha",
  "key13": "iFKxbQLbTcghbTUebnckkJbqQ31kAtvrsX3qu7kQF4fYdCHCsY86u6XB5tEiQsyiPomGhNdLUyKLLgGhomTJCMB",
  "key14": "3JVCqmvyYRFhueiwddczS4uEvjU85k5J7KCYBELY2n5MW8hPFrKG5UTr9GwPdV4Nq3bqkuY9WpQ6n9g62JR6WgtX",
  "key15": "35NeQwrSPsgBq3jfmCqP5CBtLpE8EXfF9fTdHa96ZhjsiR5T2MvbxqTqcHhYsn9WW2YhkpruGWsBhEjNt2sQHk5Y",
  "key16": "2rHYm5J8ynGL46ntL9Bskuha3PSh8NMEJkskRUivGbU8ZQfdXDrB2MTPUxo7v4tWXi891bD3PnyNSZ5jAzSWTHAh",
  "key17": "5Y6A1WpvKM1A46gS8hXh2WjJPAM2oFGQecPG6bxaXT9qaqAN4zP3zADxKiJW1f9fJ82eXp26HjMdG2cA4r3pbV1P",
  "key18": "2mXq3KiiAoLN3psw3vZ8UJXu7exVnfSrXjjYTRPD6RpHejsqN53XuMhNQi3XrbhLZQK4K1C1T65A1G1quYDRgF5X",
  "key19": "5h9H5nKEtrGQBtNFomuwUhDuj1goXApJ7aoB1JbtZgqY25vUQFSpkLjKbyxbx4JpjVGBvLyKNB9Fxj9F2gqFUuQk",
  "key20": "3GDwCB5idRCed82woqYqr9oqoM4xM7q1wBn1xXzPoE8yFuy7xZMAPiyeaBtfycpeWnpPwWh1ZaKYUoWqz67Mfdgq",
  "key21": "3H1U9TshSBP6XGgZXfpLNXSoRaf5W7W8x3td2EevLVqrAc3jQwZzZ6UqpqAHeWWFFEen1x2kYx3Ey3Ff8wmB6mom",
  "key22": "5Kju7EEbCXKEJFTPY5obMXqkbgGtn9oBs6j4X48tbtxVQ2YqNhvLqssXHPPCTBMG2hGnDAuhTwiwF2NgxoS9EPce",
  "key23": "62aa5JJUSSuXP1n3GxAuVfgXQape2XJZyHFLBAp6ShTqktfS8JnvWW8WH7cGCh23uMHeu8GmRzwuGHeKiEWAAra1",
  "key24": "bm2MDh9moCX5jip1h6AmjWQWpiALGBv42aZ3DSrv3D7XpDwwBQ22S3MLNMLnKtG8tprg4uWUd5RJdpJG8LPFHBn",
  "key25": "28XDP1piJiwLga4LmaBaYEDaQjMwyxuJ86aAokquYJjYaVaqZycqtBr4dyKgebGNUMPzDfFp6TRrX8o7PZyCjTup",
  "key26": "26wJVEmbMRMQr5DHfCodgbDPhAGMhcKDaMr7md5Fbf2ArdARah1ZZMT6BfYGM23691GqwA8HCvmLjuPoA8zudcdB",
  "key27": "5gBbLKmQdsvfzdgVb7XLVLtyHehTFPKGVinF8ytxryGZ67e5i8UAuydwy762b38uJW2jcJbHtZfGavvJDjN2mY72",
  "key28": "4DYuzVqk8f7HtiCZhgTy7RUA4zEUcK4jSFFbTXtH4UaLwDLDegNeogqqLt6iHtHXKTs59DxDE5ZFhKg4fB7ZGkoU",
  "key29": "4BtXmaNezDT9THVgy7YkzPCiV9Az3sExR497YuE2c9E6gZJtGc5NRFL3q8256wPuWoPFYGuE8vGmFSeUpwhKmWgH",
  "key30": "8AmUAzixNsf4o49vWfVKbRupYXinV1RYjEaB2HSMUq4r5thD2ERUHtio9fNKh3Q3pQHzKDRZvfPzaPqmsH75SLH",
  "key31": "NDptoMW2eUKyxi6PVhFnYVbZfDshbG15pz9fiyksXRbH7HVwNb6TfU1NuVn64F3kZVAyZmKZubtG6yJh2xzJLe8",
  "key32": "5dKyz6n5mHrdrhthc8kWXY2iRJB9Ly7if52TsrQjMjFEYpYkV5un6VvoUbbgDHNbcvSstc5a1sRaTFPkg9VAf7RJ",
  "key33": "5csRpgeqS95xmgGbG8h95jtqs2cLG2KY1SXHeackF7hZTjx4ydUKH6FxQi9TDVffGyDT51G86TnDv1tffsq6ynLi"
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
