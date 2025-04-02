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
    "4ucvwt6ber5C8nDZRLYHeaxH1TYG34M8i6kM7GxRnBsAHDCwmCqkSoY8HQJVw4CvV9fDtTMgmhnycXLMSFBn5cs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o2BH7Ws4TALRVcqFv916ZCXx2o3z6buLhuAZzAWxt79WcGDsNFjDdfE5GJ4bG1m1zAkgKXJwFmiN4V3woJFeNee",
  "key1": "2VaheMLkLq7kJCdq1HKnZD7ZN8g8sFYTWt5FifXsPnUmd6R9XUhdofew6JCeVrSDUHc2xDCzdMWjQC3VVLHJrJRF",
  "key2": "2La1AggsgzpeAQGgq1eXRkT52mzKLDxwjPXsAARVxqMxc66MXzRWKEcNf6nNok3wrGB8FFfZgxx41AGdnQtr3bF1",
  "key3": "2WhWsgaNvwNr8YjBfnUkUqjJwB5ycsBXFioEm7PruZnZn6sw4RqVrJV6TSdCdfgHTfhExm4uAcbLnuN19d71u2rk",
  "key4": "zopAapU5ZXHsLD6s8FwA1Eoojcq62X8H6ZpELqPkMJunGVXCQyJLS8HsiNmpAVhGuqxZgYKNgb6R63ipXA1jBkZ",
  "key5": "VDLjDfosLuAKacbL1681ksbNE5X5QzkXKFv4gAtgvS93Bnw7cguRNF1C4MXicoyGx262FQN7KPdJoZWTKtcXuxP",
  "key6": "2T7qHVUqi66ub9KT8ksTWg8wLCHXM2EHA14SM8sfWqFh5U3UpL2diP28MmG8pbx9Pp49u9ZDvvYbFtsk2TfrfWQ9",
  "key7": "5HJzjrKgsvV5qZMRXxUgEFhztTiotMy1GxCmGwDMf8XGECzJCcZDJ1E7a3np2QmXTnnjBGEx3qAGnquRY1oBofD5",
  "key8": "8iZct7mrkTuKs4gCG5dUgR7VLFsvyAaT5fMbsSgFKDCyaZnmHnSTjzrUQSMzmrjHD4B5JqXgZswjocQzvWTnwQC",
  "key9": "2Wk1zgFDSt6WHmMjJigukYUaG96BeFtBCfQKmn1TnorLpvJKemeKGjcSJ1yY8eUYPpdCwWmnxoxuY9jgYPoVgrCg",
  "key10": "5fa9GHZgw2izNr1ZT7wvw85gM9me6v8PeLHksghZjwdBn8EPmUK551CcaARxtZz8Dxop6aBoRhb24nzL7GQaFxuK",
  "key11": "2JMKtZ4A8HeQJgkDMwVKyrB5sfcoNGS3NbhP6aMZryTtrQFeBJXtyrSi4HDj81jWVFT7ybbx1ZPi5cLQd9cMX2Bi",
  "key12": "67mTiPPfEbkv4gCagFMiLJUT5vgcNJ4aCVRDPCQ4MGMVHsSfvX3hdQPWUFv5Js4k6nK35WYF4WwdRdubYQhdyJAQ",
  "key13": "4mGdSZBiMwSFrD8fQp4Rst6J6g8otTpo4iVSVkoABkRasSSspQKEWXWNDQDLcYfLbMqv46drDXw6X8poA2WqzcGM",
  "key14": "JgF4yRGy6on3Q99esYw1pmYHxiRYG6VtYoR7pC5kafnpXgbXEspFcbH5SNpy9WupPiYGyCE3b91NE7hPtjLZWtU",
  "key15": "35yCt9PnpG9Z2vZU3aLczGLCBhUNUTNtb51guv9X3c8pjp7e49dBCrJMQw4ETDdHkCP1aa8iC7ThJKdaLj2gcpAb",
  "key16": "5b2dLfh1FvuLtK2ihp5gWMxgDpi9VmoKhMZojYsVxcGUNoDQhkDwJHPt7zZVRevLxzuRTSRvwrhJpAVbQc8zvuWe",
  "key17": "5iVbKBeUBYeJuHAiy2sQCBREHxsMF2TnAv2vGzfdbeGb33jkhrA1tVKAU6U6QAbKbXpCkANhiZxeXSsDPYcddUDX",
  "key18": "3nhbHBwShawQ46Yfq3BLzfuwC3zoCdYp8xZqU1kupK1ceSu3Y5vP8iDSegoSQQdaT4TRrwFeAU3XZVUJjZMdyRY7",
  "key19": "5N2gknhjTwqprarrtqwACsFmEeBkL8nuS81kp4pHQ1XCyASrL9iT1c36HY9CpQmkAJr3iCmqRN5gqPyBpdzVg8t7",
  "key20": "2BZ3Vr1uebHdFUm56FjudcbRE1rChAABzqaYSZEAkLRdcwgxYz4Ww9PVd6uhT9ZZoDQSJ23Dac5Lffoz3cyLEfWh",
  "key21": "26H9rUFeEgjnwEWCHEL5pxZkmUGX8M3i23FP1yCTn95gPzJb69saJXbRA7gi9F4iiKH2E4VG4HkVVsbm5phf3t7u",
  "key22": "3i5tyf64sLnwidYusxP5NawMV3cHd75mA1VRBn9jBMbcGM8DrkkBJofeP154ABj2MvdZ87NBgH7mRTMk18THr84p",
  "key23": "2E9naGyJbct2yNYriwPtj4Ned7mrbSZLxaP4JWPZu6zBP72xjH9uMX78wQC4AaBTZybJSkzvBD6WVyYqA7ZJexAp",
  "key24": "4WNKRuVmxZfuf4GNHrCkTWTW44Cb4RUiswx5EEWjjkWDtu35oHLvfLiFLXQKH5c2pnZfp2pHRDj5RjkD4eaQ6AGe",
  "key25": "3WCXWMj7qW9vaM2jVp3MMw2ioRpMzjgR9bdA7RfveCwfEGziTrT9KC3NFjmHpTn1UzJdPcnJxLoQPKx9UpmrEb2E",
  "key26": "5RiNtj9BXoapY31Rg8fu6MnK59fuiX9dqBknpZEBzuEVscG2NEhNMzYZJi3382rhVmv42AMoUrjBxeUV2QCcvofX"
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
