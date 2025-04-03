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
    "4ctbT8Ptie9JZqqGVAWgdfY7GDacLJwiEiRX6b3s4wPLCeUczxXSJXiLKvVFvpFfMmewaEjU43EG5C8RXpbvsjmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24UXXsECp49dpTvRBnKycpqVPCJLxCMHaUM5vsMs6cmtchfczrHwdSNxiEYJ6m9NwQWEKnsTNQRD9WTw8RHcna1c",
  "key1": "4CTghkBHmPYtWbnA8pSY9fHCSHCoWkDEk9vC6rWMXzQq2kQBVEeJWYAaCFrjRaKAtEJv3QhYq1onXWkMCgueXG3R",
  "key2": "2XjPVt9xKo81x8XCHgnGwLvcTqB69YC8Y73y9NYuNQav3YScDPD1gYw4tEB8yegpkKG59JA6j6pU9eJY1njtDcNM",
  "key3": "3HsFFZMrs7jfyqPXXQc8RiPj3yoaL6vzBwNTwAm2cPBRHV12rX1ZhoPM1Lsxhdio7GxHYjQpnnwUfRdHjxPZXQb7",
  "key4": "59kBFbZN4gadHff7tKsCfyLBfSWSfHubvMe7pGTUxMwMfrQF62YUFBKoJkEKeA1c6Jn664hL4Av9ABAmGxbaB7Yv",
  "key5": "iNBTcLUkZuRr1URcutnvoC2a4T8o4yDKNkGULMzLwBwbmz6xeqPZvjYrpmFkUcPv1uq9XuLNKHftWuiJ3qGAdXT",
  "key6": "4RM9NtaKw9mNqEX5NTu7kLjgiYPCxABwpAmz3Bh817WhrPaAn8JCuHSn7qHPBUGgxgtzQksBcz7b37KMeJW4M9Xq",
  "key7": "528YX4J9SXbpLEKs8NXkggL6Bwg9EmqAQc1AS2jgEiU1H2WZ7HBtxD5kbDkEhQq8MuzUkikWrgfkjnwPWxkgAhBt",
  "key8": "4tXsoS88RvwiV6UwcxpGspCZ9WiuuTtjjszRCxvkPDes8WikCkG5PABMwQCj3KWT3pa3GtJACqwCAcFkZwXxtvjF",
  "key9": "5EfCbYx1hKGSxWfmz9QcLGkXCrLAJfhrLBbEA9De4q371EnFm7KRVwMtd5ovuGDof4aH5geKu9mxcUTzvCZFhMDH",
  "key10": "8Dv5DiHFQqnbumXQu2snfeE5tuFRgCiz3pb1kQpMvCjud6QbSE6GNKBS6BBAschrXVZTYZmSDwzeWMh4TL1STcd",
  "key11": "2pHmdqpNZNay63kTniXVYhTPRtBvqZs1xrfDy4cRRMxLD5gJ51gMw89uTrZCZGjpVfaTWJPDU5MiWLtHpBC1nB8i",
  "key12": "5gJJiqsGJSCdai7dN1KukZ1PMf4VNdUAKdgMsqFYo3V7BDQ3d3dbnUYo8XfcykkxYPSxCzWYFgTy62ZLQmSmo6pm",
  "key13": "3FbfNoF5gEHDaEPaDXe4PSNnE1myjAEx3S9XbrSs6sN78VU1vQrn2Hpy548DrWSvRCk4HL8ikkfA5Ttpx983YEc8",
  "key14": "5VzhdfRv7uWJe9FxorMsdvKuFQtMKNYNYJdXwbSdVAEFheAimoocfGV2p8d2NVPHKuQGrRc2ntXRRLUUEU4DTCwZ",
  "key15": "vz649EtrFMCjGozfCXC1hDvCNfSE6w6bXQGHFQMEKQZczdUxYQDjzBhyY5DEPByjxqi9uEiEHW4XfWmfxvU3wnq",
  "key16": "2Zu7m6YcwKmTuEu4YLRykN3WVVWcnS4vcRDRFF8NRE6vs2c9PwmkrAVvGrYmBbA8qL6x1rMp1YiTCXpwFeTuEtNL",
  "key17": "2yMcmbQLc7sMpicL2kuWy96nSvDGkSuNi6q8ij3DF2HT1UKDPsVpoKEjt1Ravd5bb7CyqPmniDctSqSWpne19LUQ",
  "key18": "32b5vae5YMoXgww8u7wJpWZcHVfrqw8SyQmmsRUPqywdch11CpSY9beTtHqvVuYCrPaZBSV9cQ8ivzW6ZULMNBqm",
  "key19": "4KVuaHTj4U2yTxUCM3nwnCvNsEMxgPJ3zaH6Z3TvpLbjFUTjXLea9hc6cSFSgU7Ew7kEya8QFZAabqFoB9vMz8BD",
  "key20": "3N6Bq6GjwYZH32wCrYVib8hehi4CXoBBM7dtqdLrBj1hHAfLuSQsvVxsBJkdpsDWLSxAZ6y3obCAZ8efUgzkRKHT",
  "key21": "2f2Vhdny7Jh8zMo8U4AR7RMQodk98u4WDepJ1kgnnGcezid3jb6y2AzK3w5pBLSGcbnJkcAuYu7kGgDJdrnjZfp1",
  "key22": "2RqyoFReEo2pg87U5souRpW7stFFy5iTvn5oQmdvsh5aVfrTZSNwHWj148mGp3aAHtLgPpGMuvmxhh9ZKrzfy794",
  "key23": "3BJ8WGaYKL6Mzus1d8CScVbzEM8ghWGNA9qgvzvoQYoQsDEeZ6aNNA8mvVzq7RD33hXiZtFkXnSa3DQ94TTGYedo",
  "key24": "3TaDzmrmxkbkQytep33cmEMsXN3dsbzc8xzbczqWUaZ5hADMfuDCvncArmEK5ZgXH32K819KxvuKZXMrUwvxhXT2",
  "key25": "hi8Vba6hSuABGfKV8gHfeDVEAnS6uTaaT55nRzJZyt5nLs9wAG6nEf4Vkfp14gAMUx8kmNLW4UPxLJvtaQRK48K",
  "key26": "3c7X55RBKuqCe4EaupkakDqgspCcc8FqW8Ub1CNV49ZPwRMAVLwvRHcqSjZqF1B84UeGQMDn62qBr9tMP6W9rFZu",
  "key27": "5QcojgLB1bVL2i1StfiKYTngWXn5ZC9EvDbp8q4mZZtWLRShiLUTQpQoEk2HS42Ju4dXRrGVP9YtLNySQnjTnH7T"
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
