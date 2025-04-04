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
    "2BkvhgtVSx2NuapdBUQBb2JUkAXzQw9puvrJDaug2HkVGdi8QX6nXbZ6P8ArnqJF4VdDoQQiK6okLaTey4HdKJR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58LsdyaLNJ33pdfwjre43LWnSZLVaG9v4kPTn5bB3wXBdpmPZ559VJXYExQdunDDrdAYEb8pQC5iFTHh27gwcknp",
  "key1": "4KVxbTE4aicQuiCoUd2VZqB4dzrLmee1pyEDrrDQxS7HJAMP3viEJpE5uy7uwWWmxQRKMFxF17fd649esEc5hh8k",
  "key2": "3eCitzd1TnzRcSbojPiy61j56n1mrTppviS3jnGEh53Ne8bU7WCBhUpmhiN9bQXDtN143b5aci52kDB2U4dMJQqt",
  "key3": "4FeA5fZH1EfdWPzc2P361hZ1PsgH9jQSbmfWCxepC243qEGNzVfD8e7c6S4iA6gsJfDacdmZfBTY8fVtTnWKd81u",
  "key4": "2bSRkk5BD1zZG1yTS6JvypJT1Wkq7HSv4z9dX4ErPrqSUiSQZTJ7NpFPsGxqQcdx4jqGJ1j3ZPfkwq1zzEX23hBf",
  "key5": "3P7qn4Ez1dW4qEWyGZJjFfoLgBk9XjL4ZYH4ZwWh3BvQZ9bPWuYtsSPwVsgTSEwqfnqoT6hckvGdRTyMjDNuvcqT",
  "key6": "33aBjMD5puhN1jZwGPeq7zkRQmZ5ike8Qa1rQaGiZDLuuYJ1B6g7LDbPmwNeKhnJXia1EEp3ayV6GcNQZaaY5ou9",
  "key7": "uNFKFN91Hk9cbCAn36GLYb5jZpPvM8KPoNGHEL2z3yJMmuHWg5umRDQop9TEz8J1HMUaCAfuEav27gZiRXmt4Ky",
  "key8": "4nuyatHwbraktFH5gY7CqGk5c3ukEDtLXGoCYhD2NAX4guf8y3edx9W5jFXMsuVyM16mry6MdpCjy6fw2rv2UPqz",
  "key9": "3v4aaR1VRKV7FK84PpuVrJnNsST1wvxjmyUQxdgBi7iAgpU4XaDEEJ53Nj9dEXU73pzjd9vh5uxkguLvAcq79eq",
  "key10": "2uWkzhxaYYd7ZWx7eMM2W4txG39QhDSbKKXivXCwJi9dRG18LntgRpVLpgBLMZnW5Fbn7NqX6Lhfv74mRNBEDRbY",
  "key11": "5jgx7b6ZN3cZZgjpBRbW78ZCoLEoQRN3Aja7wSDbebaf9XopjtDmeHqNRhx5Js47nzgpcqztsgHxeu9Tovx2t1wd",
  "key12": "55XESzQEe7iFL6qLPUeMPxJeYrDaHigJzCEJQHDiivWxXH5v7ktfYwV1NWEj7sAvaWNL3rhMKLo9SpLdyG7Q6aiT",
  "key13": "4Ap8uXgWA222Q92KRqKdCsXgbXQa3Z6dN98CX6uqHuawkG1bRBd4VMB6UxuQ1B1k1Pjn7xHLLKadLRU4sDr1k9fh",
  "key14": "66W4bBf6ZyXC1N8u8M1zYMyn3EFNWDr8QnUMBS53u7DMfgVbRATp6jkvS1nCFWZJaEAUgv4KDoE1cHcRUaKFfPLU",
  "key15": "2hyXQi5XD5J5yxKBqKg5RomzyXfkz6ABzTmj2hMmJNawvi3EsZ1gSGStTdd89VmhGtggyvE9BRj9X3p4AofMTfgm",
  "key16": "5KGEEG8aKtYW9kGFBuWfQSrStTSWe9PXskRJ6NjHDWoJJ8jq478EDSqT1tujFW9sQhMZnCE7PnXVrAP97XQffqq5",
  "key17": "4Ank6XDgFoN9phQDcAzxhD617pzAMG8jktKExHFnpK47czCFeAEw5S5veHsdmTcRei8zeYWsUGPybovszq7rmpvg",
  "key18": "3TLFah1za7Bk2SJD1dTqVcpmHTQ1WQLfxms4YFUwaYaEeowHsVHwR91ArAgEJVqze7fTn4qUaqsFJCGLajQV91m2",
  "key19": "mdNcH3zDtNVHvM4uGSXzcA8rEGzDLkFuBo9YPULHUscjftYLBQKSgDJ5PWR2vAjdVfQ1xW4BrfUYjFt9Jk47fHP",
  "key20": "4LfoZ3uS5sB7CK8Vq8dsqZQjjY8YFRVR1tDV76EstzyCoDomQoNx8yaNNVzC51u29wy9rPPgX9YFDrJ2KyDCZziM",
  "key21": "2TELPUwoimLjT3B337P7fdaWo3n7vdyrR8PLJDYZymHkSbdXMekw9qJj9bgHe3PPWoJiG48wJ5BFcFWoQX7Xv8X9",
  "key22": "4gjSSQ1U2uDdS3HwW7LFkeAykj2BRtfBEQJPdPusj6y4N246ukwHiwxCK2HSsiRMZGGYcc3iWoZjHLqxwVPr7jJz",
  "key23": "3tMbxyXSCENQFauR7ZniLp83NBqtgB99LFK4rALJp7inJvthNrWExy1hZ5HLreT24hwKKjQVB2KDrZqLB3Rhfsfi",
  "key24": "iHcpUUTBxpFLbwu48Kiyg4cyuMJGR19xyPkpPfJmyFG3G3dkZDYFoV7tygQETUPkwESFzAsfCDiv6KeFSJuhiXR",
  "key25": "4x2YQaornx1EbLedZavCAdX1SVJzwQ22dg5Lmdv9eoJDLRWzPqLZqUvutjt1e9HihTbWfg6fwqFuSQRTJwodvkum",
  "key26": "h5CxpvnGxy2TAbj4MaodiLmGYSD9pYfkbFHwKHnkPKAxdwbs2rKBT6fYGYPYiDiJzwtqvZvYnW47v4turvFjUDW",
  "key27": "3gDTeqDYsB96y7T1JBHpvVH3K8pcLJaHPqJs2vxDcJuA7SsUEhdnrA6Czg11y25q7CZhjNiJoFhxro3LY8RKkBRb",
  "key28": "2aJDJK7YT5xFnzWEmmp8m9b2TjxciLsYzTW2PTVz5k7ZFkQVSXRZMSaGha6G9xNUo4cxPcXJLeyqwcqZcUByRkwa",
  "key29": "5BfcPRY8kk467DfoaSPK9YrhuQiQ1GWmz1MjmehfpzRUtHY5oiN8xPzu4ZdtNoMP1WTR9ANyQZyRYKKEucFTv1tc",
  "key30": "53xdzqh9BCh89kmm8JHR68peMnmLWdmzNtQMkyvMaG4UeNVcKE3fWeKSMH6LsvoY8UaX3gMKFEYGxsCkv9hrhkD9",
  "key31": "2pCyngk5pqnkphbbxXvAZukfVKryFpq3QAWdv3voeNnjeMsGC7ogYi7CyXdNf8zcmatsGAPys3US3pR1jWCk9w55",
  "key32": "5NG62XpxxoFprfA153zLfUirjJy4VWS7sfmySgT4JkskifuvPQj2Hfq34Ukzkn3MbqUp7JxN6FSM79bnUG3anvuM"
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
