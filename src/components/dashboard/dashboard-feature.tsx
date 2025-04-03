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
    "4snoR4tRSwM2WrXGH9nfGTvarmB7ZtsH6fKUHRWq84ZEDK18rfyKtDC7jDbHFNuEeVhMfi7wKHudNTLL8PBr7b1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ueHAyHkzyK3tv48eL4AhfATo5u42xmrdZuFdfJGXHK2JtAcsgur7PB4R2AR4vTEH7iY4WxKhC7bqzAZXCEMMq1v",
  "key1": "4gVdbBqdgWLPbCkhJ9WWXxb6UY1Gfubu3j48ATmxYLpeK4MQaHgobQi8HYUur2tp3etAnADXvrfoZeHRM17zS6kc",
  "key2": "25Xjo7By4MHqQev26fMsGbx5eJN9DyGinp6QzhZkfDK2xVuGtLLZ54aorroVzU8JZieXd4ESmf3XabFFXEuc95Cm",
  "key3": "G9NuJj5AE1TWe3pWq6qyRffv4aLWwzyNtuuMtqjnBYE3gGnW2mHyNFtHMxD4v5x5okT18CGBMCs5UkvEf7WPGSk",
  "key4": "2QvWiZRuZm4pmdz13P4YJCAXg9YK4cPtEkWyNVCP5wpjGLCnAnWD7sVqv3LmfUfScNaoaGECpLa1WT7A679M6Zqp",
  "key5": "2Wx2GnE5ushDpkPEuTzuSvtaPXUS4panF6TwsCSgsipVCUcmMsBwJYj77g9n39AAM9bxssBgoMF4dE7P4Mxkm8yv",
  "key6": "3L5NEFWbXNjpkwb59exohEYuex1KGU75aKdxuRWnSBgSi6HtiQwKNxDn3h6YRTKcijMHj5HYho2Buv3J4zdNJXtD",
  "key7": "BxxwHzXJxQkx9ttXKptFDMhBXVVXDA8TnFZuXzYXV9fAcwr4wMbr9mFp3VUUXaYJaaaN91o8QWgqnC6yQFZgmva",
  "key8": "3YSvyhdAgDSjHuZXiX92mMW7mPzfh79fncQPbyPA4HpiuqgVrRtCKFr7YYzVqaCc66EnYEpuQ9Rx1VMtHweBs7DK",
  "key9": "Y4er83FAestTR8BZAWTM5bvrNPXgoKoUPxJswpydLZfGXehAzqtDFHfmchTaPmB3ghHaW1f1pifaEArMXfu7aBL",
  "key10": "3V4JJUXDw3zf3AJbxGDKDpHBsbdKbk6KFppkGwk16e8tBg31hVneAF3MpzfqyUn3qqADVEEPwT2hAAnoc9Ff9VmY",
  "key11": "2NUWShhtKvHdviTSfygug75uhApKKJPVUu2Szah2Rf1Z7fq1b2ahD1UjzUgSoNf5TAJMKp4mTwBNPKM1zjMjFomT",
  "key12": "5yCDdEB7TbQTH4SAbJVBQW7pLgqJYMcWkYuREwG4wZCvYkV4xN8fRDgWLWZLf8sng8JRDcdv3QiewDiufwZc8QGp",
  "key13": "29X57DPHBBzushAXWfQmrAwcUR3ZNxFd6LzA17zpU3PYMGCDxR3wQFPHSHDDfLqxbKf7ABo3jWSaptWLVxSYAWvz",
  "key14": "yF81PBRV2vVFupjn9HU76hEG2sNo7cmHnDB8NWA6CthmaPEhpJw1jhDPcs5EzZx1pWiTLx1xcamQr5z4u9kfBBD",
  "key15": "62TCPXgopeRGAAHYVjkPMp5ZhX9AhaokTtrQwbc7xmtue37cU37A6Z2PeJ8ouaEx1cxEDofTXNqy2RMSFLDACy2J",
  "key16": "UZJsh8mTJ6Kwhnbn8wTTnfXw9FpA5x8g8H6TPuyrchBdMuBmpCk8sEEJVmSZguNKQEDhW8REQmT8rdimKwHeLjh",
  "key17": "672DxegEykGhf2yYVcGb8b4zo6qPctCyj3kbMEZBNhwiFfNdCNg5JVmYpKrWrBUcn1qWgfETwgMDSTTJcDAMXAyM",
  "key18": "217Yu1rrCLcQvDd9JKLXDrvPqKjUCpLZqRSK9YGbwnB8e9CKsRcYsZYZpcuGJiqGXRP8k4hcuBRhrPduvU6RYKLa",
  "key19": "5QShgMxQLrZH4zpsx4jR5hhASXEEiJHmpxXkww85HYhT2NoXbVGFZensEzTYxEW7RQgkmUoZ2ApChCj1bjNa4h8v",
  "key20": "2vYwU3hG1bov82HcFBWL7aTymbVDrhAEXvJRkekVmJpgrs48z7NncQwo6tn1YrQcjMDVhZG26DwMpmpX33xvghus",
  "key21": "2duS3r3WkKrKv3TK4MBrLuwRuiGnsU4VZjXEegNENMJckaokcW8fDsjohpMhjiXCd1eJhtH2Qwmv3LCkHggMyMoq",
  "key22": "4jhLFSjiLyuDqHozqAkh6ahmBVBfP9YBrFZBnaiXchnNcjMhTwgiCtpbeFVmXVf35FV9j2U1BtPrCfyUWUCfG3u3",
  "key23": "ocS2YgfrQhboF1a3n7JGLnNQNwRjjSQt5dxNukPm5EEH4dwTsprY69tPjJQeVT8e6YkKhd2sjaXSQ3DdG9uJGJR",
  "key24": "2b6G81hkpT65gFU3jQfH2RRcZnseWgawXZA5amx36wFSLfiiudEUFozV8pK34Xc2nyChhFnWS6SSLu2o1zCLD4ai",
  "key25": "5gcEMq3oPV97igXZreeGRV3FM4U5pk14AgZg3i3hX3UxRciqqEvBuz6TSyLM21uJxGkkK2PKaBUaN3ZaXYUSVVZA",
  "key26": "3qMNMxi6xdT4B781JMVydANmGRTgnXtfj6snixeXNF2GpssqgspmKgKNsyNxXkxuVABHxxaM3FUSzMdq1YtUxNhF",
  "key27": "bUJwbDrK58HTq9ee1gbpJq2AhMmpn8Q4y19esRRwgKBmXqPZPtmZ43L2Pex4RZXhAXJ9Unrf2PQ2qmSZ6inGFwu",
  "key28": "3iW6vzovv9W3Y6gXJXjY1pWT3t9gcVoEduZn2uhJjKDfQHLYSFXyrUVEdbyurk8wHBJKtxZUvtsCBTVGwqnvFYid",
  "key29": "3HAogpMuuEpCNAZkpNe2JzcuuhxGMsyiiPcC5o5BnrZopYcwcBRku8Qz2yCrc1mz7yF1Bw1L2uFY4rPi5aKvfnoF",
  "key30": "4nCCLFRb2GDs6uCG81u31HrHCeZRodbNGkuAqK4GxQKrAcLek7mEEMbaaj9t5xuNXEGCVBxeejeUArMvEghpJCDo",
  "key31": "569V5mKUGXev7NHF66qDq928deKWJB9oL6seBPhE5dJBf2qRVdDU1qbPZtkTSgKakuU4Zg7tNXLeS6qJD4gB3Nfq",
  "key32": "X42LUEhGta1YNr5YvBjG1KNwQewFA7e4VHaomKYs2f4UxK1brHRE985W7mdtq9nM9uxYQyQ6NAo6Ubs11ku97J6",
  "key33": "4LKMHuxdfoX1hwtTnRH4fb4gqLquwxKNoBnSoseH4zju3CsgCeT4SRZf2XSbReNiz9SdWXoNjsn6viJqAUCc36zt",
  "key34": "4FB1iefE5rAoSgChQE6tWFxqije8DnmoLBJ3jjskofypahQK3FiLi6tn6rDpvSYNnMP9Z2kFJ2fZYTcQjKyYxuPG",
  "key35": "5VBFygYDN5f2nnB6U3wjxNYeLbGskVaFgmNsBSA42T5UEK3ZsifW4yS7rajVoAAFCCntLp5YxbLpKioYjwLMoB9c",
  "key36": "5FaQ9yDnAfUVn5JzVAqSGRMoFJhNVMd6XzNBwgXge9iVQB4kVobo5DRLP7oVmEaQLh6v8JMd41VwBW2QRFPNWLpu",
  "key37": "5URvvUxHxnW5dm85tuYE4gKMkbpP99M19YAZWcFe9fimT9pzVjNMAFQs9k697rDACLNQKMNzFtTL3AnU2CuNdjyc",
  "key38": "27QwmiVbGdM8R8sdGLqtK1jkUsJKYpC4DC8cYsAgzzWFo2jwhNR92a6v9AAjhDRDLQrMz9ege6kujCs3GrGYi6j8",
  "key39": "4s7GjhYb4uF7QJS1kV51G1j6yx4w1YNm9L45M8pmVbpCX3XnJdo6LsL7MXWuuZgEHsKs2KrWPFYLBTbuBJhtBoPZ",
  "key40": "oHPnxPySHcfecs5L8EbtFFpjqcgXVLuAgL5fyydMuyCnSBmmRfu1ccxmBFCYeyvuZKDMcRsS4RyXLrydFDPmyWg",
  "key41": "4M16cvDxpaMy8zMZgYrMoToHkaRzzpVjBBBSP9kwxXQeqBeo926zqWRj6cJB681Y8HWRMJpppzye4Z8qqYBVzPRC",
  "key42": "2L74uyyu1yaP6BE2nzRzU7Nzf1eTFc3bqk7pMdoP5Jjr1kTwuDvBHgoHrNR36UQARbNQgMArMTDGxGHVCBxHG3jF",
  "key43": "RLNYAyatWoti37qADA7TyxXnxNqQ279pQ34ddrYQ4JDiu8SS372btnVfRgBBzC2FoVk1xT5cg4zsreJ43Lg5QAC",
  "key44": "5ojBcfZEBQQXCHVjUKoNuhdyXMRUexaSFvwx9qujMfg5uZsNzB7fkVFerXFMWQWrFe5dgizT4FJ6htNVHByk5jcK",
  "key45": "3qqN9Px5um6EF2w39G8Q4SKMM7TCk4y4GNWFxsMEXL3JbRD7h9rpZLTK68pWfNVvgdv7gpQ6EYx4e1CMxXbh56ft",
  "key46": "5EuSKqaE4nSmDCMGKn75zTaV5nyz3ZoHCtsGdpY1VPkpiPQctX8i6XBC6H7DJTnNxN2TFMd19UDU2nDcQpRqRzB",
  "key47": "44oKBq62hhFcgmdsjwCQxEdXhqPSpAiXsZetyNJfkkqzBSotkVjWXm9dXXUzy7g4Uy3SNWyp7JNMtVbNynkvsN42"
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
