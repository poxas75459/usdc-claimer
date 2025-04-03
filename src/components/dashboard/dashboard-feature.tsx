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
    "4kB8qTgAbPHZ1vWMCE5jNAmY5UJ6Yc2cj3aUnXKN8A8nwGYTLUQdTmKmz61Eh55Nmds74sif5VPYqXvqmeGXyMMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rnX4rjeT65cTZ5PShEijzszP8WYeyVi2RBhvuy7u4YLJ4eAuszQrTJYV2WhSn4ky1Y9KDRPkycQo24LGCphTV38",
  "key1": "2cFqXcpFbjEyYBaC5C2VmcG2nzvx6qfpLEZmmV12axRizcpBEieEDpjfmCawsLyakwsCkZuNeXxmdXxZ5EDri8Km",
  "key2": "2mMoBV1y5rtPdcQjsJLcxNcAJ3Qnr5Mk8gJxxCF1FEZ4Dp6bv7HGyvmrvFtpqo7T6zijq9JBLrVGdZkkVhmZ2eX3",
  "key3": "4KDKovzK3Qh4rEX74ESr1RLoZ6zRwPRGZJ2PLK61vwJaLgoEBWeEpDzWzUtRnymVtTEEyFP5J9MYAQu5N5yGuoMK",
  "key4": "2TJNAhbjaY7odE4u58xnFJdrPyctZb3gGFUAtDW88S5R6be443tTu9y1zpoRt8p3RZyQSttBVrqYanS716YQfizw",
  "key5": "4hDrpK16zkSSe8bWQuJ1H4UAUnwpjBkcEJ1kK1YUT1HeM2sSLYeqN7xoHJ1CSa6ogvi2YVEzBSQvXdibWJUrA4gc",
  "key6": "rpZHG52b1bWW7W2kbQxQWfW4zXUoXcxpNjSn17x9cb5SUprT4UA6ywUh5Vu2wXULRrERzhseCthfJrrqeMqXikE",
  "key7": "4Z5qtCedXM9K7Sk1NgvUaNGisGJJZVAp3gBqQQmf4Y1kT6qij7FnQtjtd5c7ucphjbPj5zqshRQGrqkBikTdA63u",
  "key8": "52NXGrDjoDU1CFWaFzhgsbnM8RCRxeKBXHRzd9uvXDSM6DsH4FtDZumpC33h5n7jZH3ZrXMDw1DWtAfQdBq5uEDi",
  "key9": "3ptjcuNo5uVpDGNgmgA8CUpbCitkMdSAKxHaiKKwY4fscRyuw57ysNb8BuzQ9ebZsg8vdkU4DRrbqK6HooXyp2Gr",
  "key10": "3JYzNRwGvefHmup4obJLq1apitEDZv9Noz3CcYh5e5WCdhufs456fDzmU7qdbCVMvtf2J4p8j6w4BXNx9Ju3cB7R",
  "key11": "3Z7xfaxzs6jSNoxQdPw6bJmiDMY5AcbugzXFuqiYiyto2RHtMkXixkc1cUtxrQ86WTTubgVXUSYfomgLrNSBNCxt",
  "key12": "oLK9tRaK7i6mPj4mJbDwMqi221ziDjgRTkNHvat7qXKbVbEmJKftiHEQiZjxu1g3gveqTGnxweHSoH5zPm34b4g",
  "key13": "56jKPZEaGGDvtwoAErjatPGS497UKA5RBngoK7moyTL5q5yaNGB6XAEckQtm5wS4NKexsPwaRaeVCU1sai5m9f6x",
  "key14": "4gwagiscsqG8weRRv4FuzdYLgNFrU32CVPmeoXp3JyESfozrf8671MpJmfXx9U2oxo3GEcXD1Z5GriWNm4H7LPMu",
  "key15": "5bJBuyNpqj28iYqyAL2ErxAcJCq9m5upFEL6GSsFuqr26kwm6i9M4D6eUBBwhXBaSvwksusEsoSUi2B3Hsy4c1HK",
  "key16": "3ZaEiRUy66M9847S8dJJRpTB7TVz3PPa8ibeykdUUmwnoKELSvGkN4aZy9ruDS6sty7yqoh9RNp1KkEmpqw6PJjy",
  "key17": "41b7u5yAWrVsdhtQb4EJDRcgCasUBFyXdkHFS7uXuarqFsL3N1QABjnU7gqXsz2in6uN6jBLmVUF57LmLfXoJAP7",
  "key18": "MRGwTWVd9Leav6RsWaiVpptmnC8q32jbBcWDtnaa5RWGWp6jqYVqx9E3fZNvQAERhGcsZf7hMzdvxYop4MYCch2",
  "key19": "3gKJLM4F6F51cMBh1rSpD9mdQ6gHQa3Ecx2TmRgcS9QTxQHZw7J4asYMNq6gKeyEExr5fhPYSCyzqyZdah7kChms",
  "key20": "353SEcHSZgFzLS7XfLJ5Dn99aP2ns4DKQe45tVERYG3jU7Bhc8P57gcxJDUwyY68L3NsRjcUPc85ynj1WXG1rc3n",
  "key21": "3tdYVcfKuWXgqzeh9aFkctKLBWwyeuBeGGJrGhkMrsFFRFKpFAxXnnCKjmgoCbMEBXasHh4kzomwSYcKXn8u6Hn3",
  "key22": "4oDuhYrLCxY8twCGDg3vXFx4xJ7BQ4opBU7SYB24ohhjL6m9TRiST6RjyJqH9jMPM1zVQqxXiusPY2uNK5bFW3PL",
  "key23": "3n7wnhDxu39LFh2t4ZDUGpXXgummMFqq2ocHYhR51NKWVhD6HLQdfw7oTywir6dZuPpk89YtF3RUSthNvgGyArcY",
  "key24": "61ciNZm8NSRSRGRgDRD7CGHDJmWefQw2mMWJyA2971uydCiovbEyXQz5qz2dDnXnp6Hmsc2xH49kUi4zonCW8yGe",
  "key25": "5CvVPfLBrDRbRuXvc89jLoz5mCprjbNaPLmGxXGXudJ5zTKHFH1uXQSnFDmouA27Mbh1z3UNXKjYj9f7W7eBL6oM",
  "key26": "W9KxmpXSxeAo1wNj3v5ZXwag3Z9FztkGrgjW1oPciotp3Bznnu1WcTmwTGJfHytyQJuSKBCSaMUPAJKxuj8KMez",
  "key27": "UDyqY15fec7JKe6V1vKQqDgbet4dhGarqWkTSjZCt1Qpr2k1U6cuv2kPU11QTFYGypvZYTmEWM3dtckXN6HnkuM",
  "key28": "3GKMWNXbRu1FVC4pPWjS1pGFR7BDbmCXSfPLBeHY8HKj5ZaaC4JfDizy3uWb5ATUhsjBHNUcJ3yUhnrH9QpW54Qv",
  "key29": "2aJekothJtfLSf5hA3Z2xpAdvdtzXUiDQqZduN9LCEHp1AVX8StEGzVisQ5UoagPjwdj9tZo7sAh1Xc3fLUcNQLD",
  "key30": "38E7fYqEtAULbQL8tZHGptX9ePNnXoyWLJf6hGWqR5U2ofDtjbAf8eiFTvjgP6GJiJJ3n5P7Mp7n6B9QHmsWD9mH",
  "key31": "j9Npbfanr9mQPRX2bE5qLgvtg4FrQE5sGwx3amjht9meFKvWxh19S5UZqkVA6q8Grfy3SaqHwn2uhJaQscz1euG",
  "key32": "59Vhg7qrJbY498jQWkpEnj7jfQpqGcfhdXBtVb1Gc5GyHLGnH5ewaetMNdj4FNq3MJrKw1UU4oo6wzsSu5kEpYox",
  "key33": "67PVzkNk7i3gAaDunb8wFjTZKxWLxixiaGi3MnWWEzhRezo1BsJhM8DsVUeZPEGWE1sw4ZQbfz1HCqwq3CBKgPJM",
  "key34": "4UqfZakzwetBJLrBrWND6k94iLyBJNy2qWFUggrywgd6xDKtEyd8eyi9heRdoWY27AU6i5sezVZiNVCjJuJZSHed",
  "key35": "5CgArLYdKaJxLWmoSfKUeLaxaBLoH1dPLi9Gse4Uz1neWW7BwFMMn2VSMN7M7ziMyNpGBZoG6daGmRgyJifzHcTd",
  "key36": "8Xay4kyPawKXddo9cQ8yFrNQwxcNNxDRXT8gso5FQwy8BfLUXGcoo1TmNg7SubWFAM4pJ7aVpKYKUH5CE3MFd92",
  "key37": "2CUKrpoTHbosyxxG7WDJdXJYiyr3QFMes9ESaxarqE4pBYdDtLYJuBx7DvyRQbQaX6MixyxJA8qJawvpNF2gQcSh",
  "key38": "52sti5nuw2eU4mpkrsQp5YgSPPMPUazrM3HttSdHGSBZSHUrURV3xFwm62Qnac1Hwe93EQMQHxZjMppHRc5dbqVq",
  "key39": "4Nu3eoxsHmJ7snUUpJ3smbDfh7wAX29TxVGGc5cM2vh7J1ehJcwgejFacFDdMVRGogfShYHqNBLtRFCETdh4o43d",
  "key40": "3bcpfLUf8zBoBisDu2DqUBJen9jcoZZjWobc9t5GnqQfq5JB5mZkroHrGHcii7cfqX89hd46kfxQ4VxVUb4DMaim",
  "key41": "2UtpWYLb1y14FysXVbzXiWRY93ENWMMPH5U7PxUZqZQSHDUiMLCK9XFcAygozeHiZYpJEWa7fKSPNwmEuKqxmQRg",
  "key42": "2oEU3afvz8K6GzD9nU2u5GyDp7jPgzzKMSbjFwRxxqgV8KWVaVZPYNPB3fimFBiTeh1QxZ3DpTfdNSGrkWS1wtw4",
  "key43": "4m1ZPWPDbX5uDBsgGGSae7batL4kq3JFoREcmRa1iAw5bnAahzbW3bMCYbGfmVYfdJ3PpSksgUvS4Gdgda3JNGzo",
  "key44": "3enL8dwM9vk2NMNVMUmfTN8eeWBrDgXqJ4Qm37EPJGcuNhAyNi1AVdF7jS2NwFpgyLuHs7FS5hV7WnhLUjiJ7U7C",
  "key45": "3q2ZEHn7uNQNrSFCeYTr6gweaCjPxdPVGyW1b5WU1XvzmH8rqkSU8vxpJDtrMhHnkHsodNBmDLbdQgoAMtNnxqts",
  "key46": "51KtEJiK7SLG1gT6mKDboECpEyQsa4P7sx3sjCzuGykRMq9oud2YxWuQRCgQzCUwJ3zrF5d5comQAaYN1a2c3iUE",
  "key47": "2PKb3KmMPHfTLUWn2Hy8FfgMzFybVGmfPt37WSiyGuEhYnKJzPq2Cq96P5fef2D8zTTxCNp13dktfgeUt2cEY3aq",
  "key48": "L5ob3hCMhkhF98j9mriScDHp6b2rXV7TJMAL9Q4TJhYbpeby2MPPKP9dc41HEVLRLHkRq9R6LTTwRg4Up7qWCeo",
  "key49": "5rqXiZwYf2dxxjJoqCQxcUV6Ezhn8W28xjagmVLN6GahoWGJbftuR5aMoTenVXJTLU8QJXrFU6rhckPBfpjMjsXK"
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
