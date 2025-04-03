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
    "549vE1UhR1ZfG8k5Czoj9ncoo1o4R9foFrx68JBbJBpk3ULw6GBkBP12t8MuyvDNqz2jmPWBKPEs9zBecjqu6xGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "abUffsoWsAbjEs8aMG2dB5tJ8n3NCRvmLEXuK2YgPhXdUULapsbgWbxRpcoTS8cKqDHvbyUZGS1vo5HNAQnzV1b",
  "key1": "UJrw7wEH1nvtbkSgvy7PUKp2ZWuLgCrXgqHv9E9EBbiau3nBGrvH9KxmwnPCmDitUfJ1hZxyq84oSXG4DM7u4YF",
  "key2": "q1j1hqMJy3ANPuXjKKgKAhkErpHVf4w6757ZtERaE1NJDMALUp8Ax9giZ4cbXvAQ9Rcadce8qfgths2UGqd8CF5",
  "key3": "jp9NV6sjbpvPPSA8HJxPKC7gK2g4Kcp4EEtGdSHap9Zo7jNT4nQQw15CZPwPuD2srxVx6hvwbVe5a6RW7K1PjLX",
  "key4": "3eiC7XbcRR3NVW1GvkFQ6TirwG5N4aYKqwJyRNpniajSPE8rcW6xx3o3SrSbBqmJqprr9hLZ349QjecAXfgNLXHo",
  "key5": "3N44X1riTWvaQm984Kt3FsWUrzEG9o8wYgr4kYsDCfAUhnsxuwYP6k1rurgj29SWVwTVVapeBotCkRo85DC9sg5o",
  "key6": "2dDvHXmsE2Qunk1GXo6koATnRWKD2TxwBhdt6BGmD8xTEdnLB19yuGPYMKc6ShboaetreExP77WZqQnQcaYs44JY",
  "key7": "GXmE9qfDqws1ejJpPmSbzjjDmBMeZLxkXHt6SprwWAPcxARpmUNXLYDkZUiaSUBiQgsf4LExd6s6xqzAR7wWBKf",
  "key8": "jYqpCYZzzjUjZ5vpMzaWw7p5RTqPHFtv1vbMChCYocWWcwt24yHYJbCCrVgDc4oErSTzsoUEvZpD7TkAkDFQBd9",
  "key9": "3JwWA9XpkTwftn9eV1pMPFqN35UpZGaGyY4fJNGDT4Q8fLJyQHiJoUkXudvet18k6csk9CzKD1BCKG2VfEBdUXGq",
  "key10": "2E1tZRszZuT9tDCDg5WCioYxVhUaSnvjZaiTMEPtCkYf5WVM1zZoPhMhLE5oJxYaNxYLDiCR1UP4pEGoWQmgJwdX",
  "key11": "3szQUxvwF2CBgmqx2viHBEgTvB9Uwj4uXBYiA8BqVso1Gvw5Jtr44e54sGdSk5CQdeXaiiZKYf8aQ9zUVJeKsrdD",
  "key12": "5KE5rxNxDE93mRtDwut44U2oNUks3zokv43vvDfM2DhBn5QmaAqqJNWn6JHKsSjsBmHnsTGFN1iRQfZqsv8ptzdf",
  "key13": "MfkTgniCuQ5LFZD6M1rBHbgViiS7c1yevhjmNmx8cPTDFG9xchuUqoKgnmLbVbqR7VsS71nWKwU3i4CcRLgt4P2",
  "key14": "2Rng55m1onVomTM89pSfrNBEWfGE1qtSMPgaKRuEbPeMfL2WFpk5KAjGR7gtLLBqmMG9pUNKcDkCgFGwQNCaqWuh",
  "key15": "3rDXq9Y2r5jFwapreXQoiD5tGaKaHZvTYSWDYck8kAAw781yWcLMVibLE8hMThYE3622AtYqn9Pb77qEnomwtRy5",
  "key16": "4uwESDAos5GFpxkapn3S2pygBve1DoUF1wZ9viXUrmHwKNLSd7uyw53KRBHvrZFJXcfEEReu2gw5hL7x65pJvRmr",
  "key17": "3GkoYWgGd6XxBehKdn9NjEHhXxfHHXNCpPvPrhyiYUqRNHgzcSUNpf5idcTG3Xnt6xJT4gPAWurQ7cWGiSipfWTd",
  "key18": "5H3gPDq9275Z11XseKYAbED8jUVKXn4v4d67EDEEdwuHAnMPRYtgwEbqUG9oQ6ovvFoBkXhU1bHJxnEQmNjEvFi9",
  "key19": "2okdwokT7qtGfwJZ6EBmKHaH8KdBcp4HmHUSBR6Mn8eJQVYrwwZ9yZMKezoXzBTKZ5h74B8wdPhY8eYJX26MnRWk",
  "key20": "GEKF1BWjKtLeTmaXdwQqGVcMTUofDRyMc4hnC9i8r2YPAGRbwKGg8JNefbP5mh8PzK4DLTZ6zKUqpemdH5HgKHa",
  "key21": "Y9cxH5D2hzQWe8D8pALVotRUhiQGFQfcu2e4e7MptrsWj4nfLB9B1kMTQ1XaphVBmyLqew8bMmrvhtVLu2nht6J",
  "key22": "2x48EAjHJknUkz5JQP2hPcB4MJ5y9yQJrdcuPCcNxCTnd5LUDYUCCgc93rhnw5q4eSEpvJJeSrZchSQt3ENfjAtj",
  "key23": "ptrPhLNNEDihHbNYyjcq9tHxLMoEcD4rsHe5RCk9tnX6YyqiNLX7mgVuGTZYb8MRsRr1JCYnphxU9bRuM5bY3zJ",
  "key24": "4NEVBdoKqLE2f8ub51kgDiPcsWtkP4ZH1exXZ1Dc2uQciuyEWSkVeaoZoTau7nGur76YoJvNkvnQkY33A2S6AQUR",
  "key25": "Jt3EiCrkL7qagup1kLhCqX1fPb9VzBbY8ckGsJ6trYjgxRNC1YrFFb9Ao2Lrb6vxBKSqNncKN8G4CV3aQn7H5Uj",
  "key26": "65pyoFbBg6YbLL6zXfZQ3e8RkXt61wMWQATavPwMMFrL4AW9JGQmruW8GzwiPhYF2roGMrX5frfDYm4Mocps2dMs",
  "key27": "3qykZc1kceDzgF1EKNWe5cKnXzm3ZdC3p9rAeCrWmN5PoqZw8HmC6YSVfXYgE6p6QRykZTf2azRUHZdtUBNxpJFh",
  "key28": "4ZeBdEs94CVirnHPEg9bfZAYjK3Sku6EQZ6PFkSkY45dcwp8xa5UhtLt8AWoL7Hogr7GYArQz3WKfuuVTZfySxWC",
  "key29": "C9oqmvpcGNC68pLzhvVpY8gtkEV7pjGXGbfn79bxks35yxC4996992EjmghTz7GEe1aayQ8nmuCqpseLrA2BC4W",
  "key30": "24w6gDrNzMSkxz6sL2wSijY8FoeC4vFiBqdrmvpECpxDdYbLMxrorvxnpk1scfaeaYnA3TXC3hD5Wrc5NaNxA6J2",
  "key31": "3L78sfQYJrqVe2aeeok3D7vtqBKKU3btbRecAg6mUUaPjGQ6yFyGA5m2bZ7koYT2durju1PzXQoyUdZqnjFJhEcd",
  "key32": "jSTwLBvhwoSnkQNsLuFG33epiZhbb419jwo3HF7VusurpkKn6go9TpvNysDeBqjZVkAShzKBQ2Rhb7aG3KyRhUm",
  "key33": "Ype6cAfYr9Pw4sigoV8sqTUcnRseHAshcdvVSypUWqMcsawtXEDHUreVT1oMFZE2qXDvJQose4xfkyhNFY4K3ti",
  "key34": "5WN2VX8JivJE4tpz97vdB1EfPF4Xw3jgBff2NXS8CSt612Cktsm9fk6GoUAwaFgnFaqQRUv25mTikeAXsGudvtRs",
  "key35": "63aErRrqxVVP8sPsC4UpeEYF1gMFtmpNnVvgRfmN8LMsj2Bu4XfHbSjbpbdeHjMAZqp1SzFUWSyqEdrddCYUnbAw",
  "key36": "5xspWKgTz1aN46q1Ubbsgq7hYfsM4cdfmG4zsggTSGwvfm77vuJ79yP3nFddTdY4eHUTfTqyqmvEajF4YXmadafX",
  "key37": "3gpJrhYSBK2DN9BuXk6d1y6K5AKzxPiZ7F6R5JYXiNApwvNdMYrYvdUyT54NuXs41pPfXuBNSqM7j7XfQ4KhsXV5",
  "key38": "4DNbS7BVka98G2m7Kea8633ZNqrvKYQ95ADRdD13uVXQamdyjVhEi9p85vg6DkmvcwFpAoL4zEVWtrzrhKG3Cfqy",
  "key39": "2R8jNhHU9tic7PUNipgT6QEo9g2qvSQXY6Drb6qrUZGXi4Ap9iyKtMVvMXjyqbjJqmbayZ7fPDwKWJziBrNBkBsp",
  "key40": "2Ch3Mt3kCqQKeDWkjZPFs5LqnvkuozzFFYZ2TpNFdeXSftS4VZPn6XGM1F9FmHNMxvdy1iRfW7Q6aBKVjBAhTAsx"
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
