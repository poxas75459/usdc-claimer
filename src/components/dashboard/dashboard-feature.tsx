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
    "5VYn88ZTx6hQrwSvno5mF5WCX5DwnCC2v4ZuGu5uCbddhTTMwt7tUrRkCL2d8UpM6K2n91zidL8ywr17Mv2GsRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28BEfbirLdW9ct4DsxkrwTVVdTqE9abK5pesdypSqUnXbzqGLN8eV5Nj5JCwoWfs4EJEyENDAQjTmoaxYEcyfTeW",
  "key1": "uXHdCC55oTCs2T7dn86DcQmsoXpxLe5MaeJmThuGc8aY8BWCy2KEPND688Hnrr5BNvUXTE3hRqoiH9zGDrhTAwF",
  "key2": "31VADXoUG1Fa8eQt1ASzxHRm9cSpxMcGVifQU6ebyZBxJsjnFdxKxt9JbuyxUJU4BurGEajcG5hMr9FeH8gerAQv",
  "key3": "U8Si1shbbZD1tAFwA9LFMPyAVi7evPn7iuxKfW1qE9vvRkg2pbnhnFSNuFoUT71Sek5kL7rEwinwc8RSjRDLcvL",
  "key4": "5TTp3jnMyw1Uh34ZVMUorNbkUu9gdr6W6tGbZ4H4pTj3nBZdAS1w35apbqnuayjdpurkZ6KwJbyYEQP5UXyEkcB5",
  "key5": "2k7i9vzqVizcEcVXitHqJ65XvrGDV4rwDSMEWPiVq2XQTRJWbwFFPJqS9ihyh2MnVzkE3tiNwPszD73YAqdHZRna",
  "key6": "vsQF9Dc65DvVNyCqVRhPEZiwqQckzaMQM3Xd8E5kJLjUzRTHvhufLvrQ5RDaEFuKGLSk2YV7B7yETiaqXrWE2ST",
  "key7": "5g9ghh8UfRyGbpvVfRLuPrdGky5CrMY9898C4t3ykQ6NspLUtQUkY6XuUmXGd7q3o8jX1CAyYhDxzVwPXRrGAcFr",
  "key8": "3RgFxYcRtBdNn4nds4dBUEcxZYiqhVDFNd7Fs55rchYowrA6DpZTLMmvDZTSksXEUiMtkgryFociGU1Qz7XQuU3n",
  "key9": "5BYUqFhtDooN9X4MVJXSQsihaq9oWkj1P4j6m5T8Zi96jiTyfCSTpYzEYsgNn6kkDyQ71s2jRnhPAkxTfrC5K7Qp",
  "key10": "5Sm45tfjuYrmcYaN6vM6Ausx4Mryku6CYBfqsiE4enbmwkodKthyQagvgY7G9nWyziiw4dkgGEe3x9HgsBh6X746",
  "key11": "3NkHQQ6uLycN4XTFN98UkLMFEHMx1TKVWyRUVpspQme1gE643DMF7szJkViXGL8Uxsa465KbiTZxN9Ghux99W8MB",
  "key12": "5qoCR4sdsCD3v1GSbqNNqKpqraQzqho8GakXnyodUtujdTzWvn8JthiSxpUK3uorkEXXvdG5JuK8AYyEcxuFhA5M",
  "key13": "81THfHxuYpwB5gLC2h9emgHnSoQHNKzzgMdiU8T8aw6zfc3X62P6gLenDYGZqpJ6UJXmR4GKMVWjx2P68Piic7j",
  "key14": "5V5auCCUdf2Q8i994nvQtnbTer8Ka8NnxBc56SLG3uyDDfP3ZP3f5EzTutRhXNT6JADZL8EaP7CrK2BK9XgVeK9R",
  "key15": "2sL81pVXUMkocWhobog2eBEzcdKbJwTtPecuWrzhBYVqtBqAx9xEawzpPQidKgo6YCedj6F8hdmiGUiPYoP56SpB",
  "key16": "2ore4ssWLzSei18kg77ffmaDpXnQk5RAV9PLbXiWxYV71UtYeaXtauc2a4whT9HVj6zEj125dF4tr1M2w1HW2kvf",
  "key17": "3DNJcKGYqqD2QSEpvcX1FeNk5vaA7PwcMpAAHKkBp5qguFbLcEcm2jRw1RCctMg1NMu4omzofEP7H5rFz53erjdJ",
  "key18": "5dQ8SR2sFSLqkwG53dBeowsuPX6qUpKuDHRkjHaa2QmtLPaPqBnmUdnHCBGCHcNJdYMX6ouYDYYtzhkbK64NPnZ",
  "key19": "2y24wXLMGQ4VfrEo1KuPcogxh6dN13QmxfCGttvYiJUEGXp93DDRf49c6ABh1nRaBBigqJFbWGjKYUziLeRdQrxj",
  "key20": "578j57bs4HZCAJx7LJPBefZnvsv2ZartC7ZgD6uqTVMnehNwKP3YF4ag7JmuDq4867yKjKkoheMkTvZsdtMAj7x7",
  "key21": "2jW7iDqY5HeJdA1BfEapcsu2f8bX1xqsJCPxt1rJwpYJ1Fx2kcM5BMXM5iQxmBYtoHg3Yc6sfN7VxEekwNGbGrH9",
  "key22": "675e23X2u1JEWKuny9tttvnmEEZYSJ1Uvgyf86ATL7ABU4HyhzJgQmwgydDivigqKYDf9PFhe8HCq1kVDhXasNse",
  "key23": "2VuH48NsZh9wLeCtSw16umxrF3GnYKqZTwNdnM6xQCqLV7o2mjQsimu7D1vRVzrZ5y2vUDu9PKJULipapMQVEGKU",
  "key24": "4k8WfKnViLUEWWFB3o2qBae5a1CFa8kQvh6qeV6srxSfoV8f65DniHg9Q9HfTTrsu3RN3szxLLdn2BS6K5jX8oF8",
  "key25": "56oxKTE7ZYZnmw2TxZEqBXhZoYG7zeFs7Mv9SgqZVsnFgJYQpiAG5JGSK8VEMi9M59uaB5roJ3Vsqfrq5rLGy3qY",
  "key26": "5VhKPcWa8PzxBCoBhUmmpjrsSdKkSeBUPAA1Pm641ym4quRinnhvdM6LxLDQZp5NKq1HBfEXbQbtS7LacMWkwqLR",
  "key27": "2wFKbjhp9KkH1YHwei87LNteM5CZmCAWJBYo1DRbAX1gWGFjjRiVs8Ssn3aSZ84AHBHSnxWuy93Mr5HST6KWfhXW",
  "key28": "czxyumsTsYXx9vZcNJqN1pXE5mD9jpPNzYA1zLA8wje1FBZy51jf6ootywxUiZbMcc3tPG8PqkQnrRrNMuTHjXk",
  "key29": "3puVvHR1zv3uMqtb6BE9CAW9FUaZaJRRa5BCoZVBBzosqd6agbpU3R47sCNat7KgQSTfw6Y7W6SBkRckF7WjxbLz",
  "key30": "qzJm4WgK3CFB8LugDxppbtGXRr8LXQKBMiZYgUSCt3HeFd4XGLgBGTjwnQo8PMPVdpQjSWG1VEfu2w9RmCDQvn2",
  "key31": "5URiVsBV8g8witrRfMCZDeRPftRcgg839amPs9cTCXQRYgog8Pxy5wU3NbuC7BpacYZtQvCe1isc2wfkmfENWPXi",
  "key32": "4Rv9zxuP63oCsPjGJJzS6ZYH5AXhKVeKo1xU4yNh8Q2kFEGPxGFMMctE4zRCSZT9RYSDR6ttTjDhQXrFgYfZzbZB",
  "key33": "3JCzmM9tEFeW3iNa59NqF77qUdb1nFiw7cNAcnGhspWwiYD2cggC5m1UKCc4NDXdK8kUAi4Vx6wsjFfH3bZqKnph",
  "key34": "3XReD8y1wugsQD5FnM55VuhAqtdacZ3xemBqKvwhc42GjDcC7Ph42nN5sWBHch4DJeP4ShEPxT1uxGqJ2skrBU3H",
  "key35": "25VXW1GjpTqpP8kkEQXT9HShPVd6XjSR2239uLbzD5L3hgyQNstBVKGQams7T1QGq2eLNdrVAN7Ts6xb5hqxBkWY",
  "key36": "3NNMAQkNNpWF7jHt9Z3U5zGYuAinECnQCuaL41EWooq7KzDBBKZrkoWTDj4heLutKjfZ3MMZboQnHtcvMwkFxML1",
  "key37": "5DxA33kg183UsAmC1EvHnSUGs3DxdL6Vm5qPDMKTHtEz2j5PnsLo1m2uUZMvsLCTAP2ZjY8n47HazXgyNF8bPTHZ",
  "key38": "4TSnckUsxdByyWmmJQP6mnyB4wXaCiefmNbwTyUs15tb8ikpEWnN3fQfo6XxWhzHUX3ZXQBjjK8iQUCKVrP56Fhu",
  "key39": "4xqFu1oqFrECzrSGEj6J5Y1J5w8ZWPgjPjynnP1V33HyyCdyZPRV2BE6rSatgV5NxrfS7cT9hSvo7y1zN32Jt4qo",
  "key40": "3fX9CDZLEhbkh2HPoHNxrMxsgvFij6H3nhoEQqkDJJcTiHcr59M4PH4LcLCBWJ7vezsbLGrSdVrBb8UWgQKbo2Sy",
  "key41": "37gBYkJ7mCpdYaRfDqywwkCetks1BNsnkjBTRDX1QShX9xa1ZYk7xUi2owPBDpZm4nyqhyULY5kB4NMp7E3Xm1YR",
  "key42": "4ri4S4Tpbj2kHAsyx771vQM7xrqZGsz28bGhZgxpVMvUoRHW7w7rNzzA7YS9P1ePfkfg43zUkYpmegWZ4oTKfwTG",
  "key43": "4tE4DbvyfteEqMhBgu5vQ1FkABsm9Ry1CGYegoQM61SjJswkq53RkSceCNPQiZYbjs94VAMGUDgbupR6pQGdsk12",
  "key44": "2xHGgV9y4hevaomtDbpfLB2YXgJPYyNeK3aCwqKhG2HQVSqYW2oxGgVHiq9P9WCBK5xHk6XPtTiLeeymzFLLhKtt",
  "key45": "kgEvYdoqXnUWajVeokbRSiuF3aT2vNuwUZ7SMZQZ9SL5J7cCT62URHnWTBeaNhXUVGyDqQhfynx51j6u2YG1wt2",
  "key46": "4dJwSjJSzo532XyLHXavgzzfhXwvmvgbdZVu8LX8EgAvMaptf4hQUTR8DfAFQ5S1tj7ZfFSGx1EM24gS8Np9agt3",
  "key47": "3UsPqpiBwLffLR7uq66r4dPKUxzCJAWKXYfM6RDAAfkqNm6R1WMfYq1ZmLUbFfSw7Wv54oBVk9F86Wt8u9rpFcJD",
  "key48": "5xPTeWrbVpyXE8N9fvPJ5hxdSs8FWikBEr2kVr8eLnj6HEnc7LnUV3LP7oDfZ59GjmViozZfivDRxDGWcpNu2zfW"
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
