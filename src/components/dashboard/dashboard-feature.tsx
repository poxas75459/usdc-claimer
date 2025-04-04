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
    "2EQBKR8g2GLqsbAsK3Q4q6VuaeHD4YPmTGZt7HXj1GXDgHL7PUxv7LiGCkRAzCPwPHipWBg3ia3YskwU7CvTt6su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gBSuCEWdMKbteoPgzFrSzmNMyrtraynVjoc4zH5FivCv6DTySGDAFdQ39We138p21P9BxWt11kS3B4VEEVAdz59",
  "key1": "4xJGHdtgmHfsYmSUyTYub9quPxwcqXzQaZBsisjnsVmLbV7vJkioMTSugj7DYe7fD9BMd6wLRpxGfsjQTAiKctS4",
  "key2": "2RRAsBSs2CyBUFN9FUaXdYmEuB2ydcjHctU9fL2E3GT45Y3PHu2WgSpoGXAtudrgJqshg9kjerNB7yDXCHcJj7ad",
  "key3": "3o4P9zXFc7nEAR96b7SFhuPMQLYaEQ3zcUoW3SD7ufRWN5ynUgo7BhtDXo1Xq7pYJrD8G1VvDQL23wDahJUt3NMT",
  "key4": "5PE8XtR71jKjXjm54odDPULE8bA9YzwRwSLmsFwjfszHxwmy45b5LWzRneqsyKVgzuQ6ssnsjNobaF5RqKxuM4QT",
  "key5": "4y6xWT3yvND1cev7uw5qJW8ZRC5ZMzpXJSWDbEubo5hiCkGxGXZ9cwXw4a4UpUiMehjQzqx2LUf9v9FTL8oQqX2i",
  "key6": "4NdqmBPtxfBR9soXVkDrPd3TBZv8j6hSWdZcuhPJFqoJiqkxbaCiN37W5HUeHjhC1gebnZ5FLwn9TGBPhTyB11yu",
  "key7": "3upZRRWh5JFijuS9SeFoR6GxihuofyZQxskB1r4CBVqy1CtTe8tkvE5DFNtQSbREn9LDv9hb7mvzNU94q6tjphAS",
  "key8": "5noWCxABnNB1ivxHjMLqrDpL1DmVuJP6ypcU428Ab2h4KFTEeCHzUfYMeoZ9P2MuxB9ige1bNkShPzib1PPXgN4y",
  "key9": "2xzCspFMQNPfBTA9sNFydexFZgLemK3C4KP2Q8j5Vnr9VJ7vHNavrJ5As5f7Niu2zyw9HQ6GXo8yNyfStF6fDhcB",
  "key10": "4KuoFsx63wEdkVC2Wxs2hbEFVwKPXpjWYCVP81F22ao2Lf1egA2bSNnmaUz9MKK15Uc41YTCTVvzZEwUDMYK6gQ6",
  "key11": "42ekqnjD6dX3yaqDR1UGqN64wctrRVVK58B3pceVaA6rkX2VMoh8DGyHXNnLSczXVvxBTb1MGr8bcJcnyDQQrLQB",
  "key12": "5QhBH8RmHQWmVMzyyFjhL6Ezha9ey6oDMvqtkyZjtv4QxoPNjpssRR7BCfCt9pGm7YyBbNJA97MSDM7XxFSH3nXt",
  "key13": "5odDeBJoScdrwSJi2mb9e2AoeECiLrw6xeZHUDReXgEehJ8Ncjnr9tbKHEhtGS1XpbhzQp4V4rd5T8KNoeJGVCWA",
  "key14": "277mmV9tfb4vxhXmFpsST1YbGJKJX3j8W8V7KamoBrY3G3FXArpBFFBmPfdRQQBMouBtyKiR7mRGd7dhP5datFX1",
  "key15": "4kr2GTxfTJJDcbkfUFFQmxah4HeQjz4Rm8KtaF8ZJk1ZaUCbKvHZvbg6kPhrRULYZs23NnR3REK7VpjZVg9syTtA",
  "key16": "3B9wUkjfwNfnp8SccCWCtKCpWyFVskYgahMfhovoTFCgHG4TZq8x12UKRzq8a355nUnvhhDn5vjwXbdqj9wQmq7T",
  "key17": "3soQRreiQUvd8J5oSKhDCcKbfqPUwW9NPwMTQrLnqHvbjgjzEaKbaFx8pnmhdgdan1p9mgRrnT4AXQuodNrp3LJg",
  "key18": "3sBHXojLzUGHVwe61KHqrsxN9nDPDRdYmWi6XsFdKvAP3EMooyjEFdSfuLoYdS4b7sF9jM7V8NxhjMzKfPq3i6CK",
  "key19": "4e83AWBi9EjcamCpLnV8ND2y5jhZYrj3z6tpL6jCdTFEW7bHi6qV3Hrp3ihyj6XFSZB4jY4mcBXKFC7yPBLZb5x7",
  "key20": "3tAnNBhNbB8JCTTYY7AGpFPXwPvqTGt6jCCzn7fJggcRVEKVrQg6xe25ydFZUgCZKYeRt5UvkzWrKGvvrQ7RnsPy",
  "key21": "6375Nq1EAoacbtnGYZT1RikZk1QgZrbHFtFy77LubJtLXWgfyjMYq7o86NELyVp9W824rYBshRM2gpqxXAc1Dtz8",
  "key22": "XgXJrjZcQeqSzhDyUDpQXKw7GNPby5YzmWPd5R9vEZZsKQnzsromZ7cjFTmnPTD3w4ucyVdiaU9EPjAobJVQn8L",
  "key23": "2UYU3yGod1na55J7cfS8bHBFPPwesz48ZuLaZTQLsp4KXe5GqPo9YEjoomd799Ky843BPYhTJFA2fJjSfeE1Vo1j",
  "key24": "2S3v4eMnap5PDgdo8W8GbhsdSvv8Z6TocWS4eeByfxkThkDm2Shxd2a4Sqfs9N6YuF7usnrgBDMVv4tnSQNBqZsi",
  "key25": "542FosC9SxmWKtckn9cacweCDkVif2P6mTNQRLht2ejdwB5mKiyfqpq2x3aCFwhekWg4wCNzKtyeDz16EBKXANpa",
  "key26": "53D7bdKCxTNNLrqSmogRFq6bpmrV692Y3X4wQqTbYTAPixKdMhRnqwBpM8TXxMM75kpzbXnYiiiWddcyfM6hD8bW",
  "key27": "4grDUVSPHQcyv1tbwN4TLEvmESNtehbJT9abYAEp8AVKddx37S2x73T1gwR4EhLHRKcoPhnGXabr2kdKoKmb3ANG",
  "key28": "5Wj6orgJgfBefejwoH2VGcTX1FMe1DwgtQ9r97CfFYFEKYv1TVdD7yZJo2bdJvdhwKE7QMup4WzYY9PdEU1WvawV",
  "key29": "47PC8QV3WTQG1NEUWpSS6Hzmn15WJW3L2YxeNsRGTwyoojvkZHgqrsRUBW56nTyBAXvM9CcguHGsKfLxUL1Et38f",
  "key30": "64VBzurW8aCUyBXzSJDSi3BHeW9NbhJbq28bwi7wq6EL8gBBhGp31FAuCC7v7pPrjfBwSSR1FFuCVBac9WKZZYEs",
  "key31": "61NwiWSZXfJmXRr7AonHXMPegjS47oFEKiQu3bh41iafbvtDup4haH5eWE2K38bQpEsaDjDsn1rT7PP59WQxZ3ZP",
  "key32": "4hevKAwdqvNiRyABY6xz3jt4ffvoWebKqxXCoyc2nRWFqBkSAGy8C3MKDVqR25z59nXLweJ3kX6HNgqt5EakzPYJ",
  "key33": "3bU1Ju2boXMuuAsABYpmaQZHDDXtBcABcxqnCaQywy5zJMSKG5nneFkTavrvGydKBiJFTctZQcPfiaqCgx15PyhD",
  "key34": "5AeaT4j6QtZTWrPXunB14BTpVdHgVrowwJpyjrnW6YoKibCCAaBHSUf6JUzcMwCxCLGb9hFZAJ7gyJgeUQw855RN",
  "key35": "3iDVGY9j6SVtFg1uaxdkBLnDMTWxdxzc3sdDPJirvSrwP6GUtdpE9uBgQc1HHgB3gaJF4z2LQwUgLTov2Q4jTZiH",
  "key36": "rgb6GKfDZ1Buz7YyEKm9wUHqWf4iSVKZeCWdkE9Vp8LFhUnd61xaVizza4PFTq1U8CcPGAN8Bj4FCEm9Twr5EeJ",
  "key37": "5iAeYL7NG3GXkv9r6pSLBxG3DFvH2uMGufsxv2ofTTC6MXA9UYdFf7LPv9reRXFm7bGXc5mbUeD2uzEcSwDhKVJb"
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
