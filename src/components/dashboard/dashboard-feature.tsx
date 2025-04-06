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
    "gL1HPgQp92EydypVRM7X4Qr6d4c9SBAXjBvbYYedShyGsM2zPGWW2fjKFBYvp4F1CvKz5Gir3ZryYjDsSjFVnmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z1LYRoqHsoxH6qrNQtPSkGuv3VyuigAJijVbDjtUTmZbQgPbm478noY3hPRdU7uyBVGEDaxKKdsu41iuRvQJbNw",
  "key1": "284HUQFcFeVBYJ4WJVY3wR2t5CDZ8nyYakfTwuYpmkwvGMikyZWTzct6ECpNGg8mL4VexHpntyjCwvuWVhXJh6i4",
  "key2": "2Z25Davt4MpUqbGn6rdszVfXZ1kEpgah5bvcPkKAdDnikT8LZ4BQWkB7xMXsvC9msXe6EM8Dqpy3E3Kpd4nf6wmA",
  "key3": "2joH1h5BAR5xsaicqoX2nabMSwtdDFBuKBrJSmsZTQB1h6e7VzfqGBRv4dDwqUDwkqWNWWGXsYuMrAbGorF96KCN",
  "key4": "4VZSCY9d5yY37bv2XiiDaSCBwN1r9As6vywMLwxiNxmJAbthzU2UXnLJKbCfwQUjtUswYXASCGKX5aZCS9mCJCMS",
  "key5": "DifkBrXJr77QEzkpZNg7DpDTt5UA1QiWtEqW9hfXgRLSZpBmi9BcP4LsFzNfTXa2vqD2girYoidwRyXJSYrE7fd",
  "key6": "Rnd9jWaWZHJgEQnfvB92bY2jrvQ9STLKfmdkEuhUNnrr5HyLLAC2KXMGfeQZUt98ywTy4sePUFVorto9Es5Xvaq",
  "key7": "4QWfKK21SsTU9uCSGvNpZVCmPbcyAgZKMf7xe4cZBZ5KjnHoygpCpG8zFUF4YssMAjmzm6cJ4QhCTtHvwkpvmAUi",
  "key8": "qs9oM3bNvpU17o6CrB1HA9Sg45EfyxK1Eq49RZmJ7RQodKsvbN7Whdy2y367sQJ1JFnhkhot2wXtf6csvhDr5qy",
  "key9": "2z4SpuuZ6jSA8iawkCH6XR2uqziLRVk7NUwAfghHrBEB7n4NC8CX4MeCGXv2YJdegZWJiGMUk1tMwxWGDn2nwmfW",
  "key10": "392wu6NCNyfDDPpfWjKsv3TEZ9vKofyRNd96Hc46TDgyA7PJfQ5f5GtnPYiRBtCuMuTV2aBZuSnsRY7tCMoJnG66",
  "key11": "5KxcDjf9suNEhZQy2DNfx6cNGDLAGrfzundNTqvHE7ghF4DGVx2Pdr7qBUhokSn1rx43UTirdBDo6jZictxCY8AK",
  "key12": "5kc4Qc7EP8WEY7Urc6Xps2rVigGMv5UFaj3ZSXbcY5THDiRtTzBfzc4L2DSx14WhK5LWta1xkKscw5ct2EQxzZmA",
  "key13": "2M8oX44PbQuMvc4NSjHigzUj2b171LbkfQnr66XePXFyKnB2yhPYaTbzavhmZG7gww8ShCvKqGm4Tv6PnffJY9sV",
  "key14": "5B6iD73HwSJx2YfMk83kX3hPVmeECsMz3DG8wbakbGhLGK6Eqrm99hJmBGeLJm8xtN2QBKCBEEgdyTjjqooFiJMf",
  "key15": "55s3skGzRgNpDn1Pz8hAqKF5YrEv1omwd4TEZQQmvWKAASWDAnzT6NJftFezYXsAR1thZoHnnEuXmMmCNJyS2Qk2",
  "key16": "55FWTkXFXBz5ixtiABtY1Xkm8jCjA6vJBJDxHu7SKEgGuoJcSav5Yg8EuVonzTvdg39Tvcz83xFHuoDtNNRr2G6e",
  "key17": "4aas26f624mhNBcaR2e5ECXYZrWBqDdAy5RkVti1fcUR66NkGESWZLWLGten3vwfpqEYq63Sk4r91oqheMLmbjaE",
  "key18": "QFKxAvsJ7QeZLdfJ4Xkx9PUPJeKnBFFZ73byLPT1KT7gYRDLmpt9W4op5HMSrhpeNP9DBdGA5Skm4QE5k9iWjKv",
  "key19": "5q1PEBwvuQb1SJsLQXFmjTSPRsK6uJxGkXwvWRtp3bhXMyNsfVJdkfkr1gZvq5fJT4B8Lr99XW4E8Q6LAo18bbss",
  "key20": "2wrvY1xKrXqKA3458NPcQePgkWW1pneJRXE5MS36AnzBBXmpcj3B1Lme4X4VXqx2gDMd1KjJ2rRFZEqiCd4MpRrB",
  "key21": "2c7kTDQtvuHUFFUhp4YG5u7MSs16pAnHMYnWNtsu1iLQC1xZEojvmixp9F6434QriPpLwA7A7f4oT4PuybxjE8Pv",
  "key22": "4qzCGGVHnTczqRBFvq5LxL6mMkG6wwhQgH4h54M837XHD1aDGWhM74ornJLn79yDTb6yv4mktnSfjY4Cj6GFq8z1",
  "key23": "2CGpkc1ZYSQjGDW7VEQD3WEx7qwGyX15TA8aiiA31KCBWbBKMbAMzoTDZsZ7JSaZNgiGH4D7YjhE66XbRP8jMDUe",
  "key24": "FZEbMap2n4kuGJQqbG4WRKMqy7QjdtKrxjgUZv3m6V4sxV2yh2rtFHWqHC1TFiFXWrykNehNFAWxYXKtZEnfQgh",
  "key25": "3RwiabCDWQkhnoAjicXEw9usrgzXFX3Gvso1vVzvXmctGv9hqYWqLCsqnAuKfkYEZ7kwmKedrPwxKK5RUyYvQ9Ae",
  "key26": "5xp2ojk1XqJq8KLrCsW5YA8HxrVomqgUcaNGcUuFYELLFhUaxwR5va1yKkYw2wdu3ryQM4KuYWsMQU3AF7qXj4WC",
  "key27": "rbHvffHgJQybpeQVWeMz1jWtg5SVnmy7SXMwrMn72QqV9ZrQBxsTpSzoYfU5qwsZYz5aTJYoxuM3ZrPz7nY1EkE",
  "key28": "4fcu9uasaS9psgeoLwR1HfwnH1e6S6PPpyx53taAnJ3MBA2RdMvRvy58ismf7gwavkZyyvTLNDqXqgRmL4BFtmYs",
  "key29": "5VbmKAhDDRxzCVCvNBdJeLMWVYuUuLE28JZSAxzvs6q4RB7gKUJQq3tVQbTyFzFowUMAZrTTa94hXn55bxPtcgxd",
  "key30": "5Q7jgtbboPDMC65vwshgMnyboMFb1xGEPWZtL3uoBPVtqkMyynsU3SBf1ds1UQnoasXuZQCCzuvE37TmoaqgDanP",
  "key31": "TGx1GrCN4BBu6QLsVU2TxBJkvunHLRkDKCD2WoLe9XFACeVb75H5NDdQnmWgyP1Tuz9df3yxsvqZEtPw1Gh6ZqZ",
  "key32": "5uFmcmw5zBYgqxWqpmECkNcpeHzT6nHnbp2DQZA9RXQfkmUynXEuVpSX8GZ5BTgCfZKjPMfSi17fspZPt7nRJYzs"
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
