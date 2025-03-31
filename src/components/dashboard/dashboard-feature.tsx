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
    "2nqY3BaMZVZ9puWx3ArLMDVQGLaMoSM84kqRgpkJTbf82f6EZkDr9eRGQN3KYUs5S6X8GG8oNuXxTGJkGnQJg3mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zdAFbkYsisnGUrLhVboERDJgo3fpniXDNBzqioqe5t35xYQ5LgmJwVQGEU1xjP7WQAW84WykdrD5cdessrjDcwD",
  "key1": "2CGcrF1FcLCPtWEzmUsKHaSGJ3S7RnA5ayJeYT4jD68PcL1EPBAKup6ktK9zANUky1gNNMXsr86wa982GCSGYQgi",
  "key2": "4UCdnmFzUhWTknnG67vM1qLYLkUGSTXbH6gEjCYPBe4gL834fnuL66QTU4hdVPnN3fyzbDAFRhcbrJYc7PuprCY3",
  "key3": "3asyVbQfYwa9wvLwee3TE3jwY5Q3FLGped3acjAJca8bjnsP4nk2Ax51MD1572qcvZngFJBaSStcctWdomsxeDnR",
  "key4": "4DZUAqoXUjmQeHfWLtuwUzVm1W2LeTqstbs8e5t9p6WT9jqzhhBReJZKweLUKPDaJhXRRt4sFXYAd5hVba4MRSu6",
  "key5": "47ziV7mvpeuhcf5Bzr6Q9Mk8GdXQFUuEaUv2j6LFBHFt2X6aRFnhtEHaE39ut9buaSp18uD5FV1audotvGjy6EZw",
  "key6": "5auAsV2yJEzrbGnAhSCEX5Bj1zrkSmcfX9JNi9SzG9ci92PQBabp8zKHhDgVQPTKAkeAKRW3JyUuHn1ifgu8Wzgo",
  "key7": "3qpF71FNeEVgdzjYjwvtLXC9PqwQ2XWj7WwUryRM38i9pReLPKt8dp59wjRTrxPS3QVPPhyWwbQ7Fq4RgofxZeym",
  "key8": "4R3m6qJfvpUjTS292pPjS6fZeRZDrQsbH9YnEvB59THut6ggJBdDps2PNTs112USvR7BFCAj8g43FkbFvK9jgdeQ",
  "key9": "3SFxBS2ok2qdMPGs3q79nUNaDZkyt3d4hQNSXkVLhK6tvjPuCAafWNsvZF8VYkpTzf8D9TfNKkgxbpecJ7J3UTqa",
  "key10": "MDvyRABEsBJgHkiCz5CdnGk3GAPoDb37UaunJcKoYKbGT6qNwz8HMUTkHyEdwGJLeLYaSsQqmxhG9jvsepyi3Wf",
  "key11": "3roBZdxFHqL4zFdyRgjEMR7MVr5iGkNqUZHJow7NfYaKDEbfbEd8Zv9W2MpDww6oafP23S7D7DCZY5NM6uHdzZRE",
  "key12": "4rPR5fnkV79rU11VKwbVK5RQdYTy75TXsuVKsSWd7ToRg7CzzkjcRTfC2gNKWDqLk3GkZpEbnEJe4y7o8F638GFM",
  "key13": "vFiJzhnjuCRKYLfr9mnLPp8QDamAPEyXSusnPxoRwsU6EvTGTmtLSXijcswK8cfBP8zTPNTkWC3TYyL5NLpA1y7",
  "key14": "3eLUZJqeUMzciJoWD4D1ZehX48Zpqz6jsvuCWD9zcWcfiTVsRju9Jo3TG1GWxD8uypBwFF64oSvG2Wm3E36FJE3G",
  "key15": "2pHgpki5G9NWAVME3hzoyGvYSbeCgkqWKGF2qLNBYYbRwgcLwEBdjtJjd1GmiaPHFLQbja9SAwGcxVyiouyEdUNK",
  "key16": "RdYhREtsWFzd8pVzYz9Su4DKXmNLvcBNq98PQbSTVmUC1pYvjgxyi442ErQ56hWu7qkBFjiSpQDprpVL14CTDgN",
  "key17": "5zjKMAocnCs5wbKWWzsFtCqXNYJvQGo1uGMBWHS4c4BD6V9D4wfb39hi2vmGjZLBeWZqbfhKrdHBngPPNQCNDGBx",
  "key18": "3338oELYF9Yw87R29MvV9eWs9jr3BsNrKpTk2DLYjZZNGxENTHppmSKRZM1vCCZC4XxwKckGGFZSoyJ2mTY8Rtmw",
  "key19": "VtipEgnXX46Qx2JGbY7T7vvCeY4Ag6MQhyuVfGKebCq1mzQCWiKANy7pZjxoP5qWKRbNyd3TS7fqti4o9mpeeum",
  "key20": "4Jan45dbbJEQnyXXobDeBti4sAwEPULN7htDLoRcmMSir3ALJx47Fgg3HAxWrkCnxJDcpuuvT39Cfy4bzAE4FGNF",
  "key21": "2VtSAadyFRBLJYCUzVJdYkZfYKu7HJyytZXn4tXdV1kjTckHaLzi9yXHXxT9QdS4f5Qi9ZtVU5w2wLeQ9qGqn1ZF",
  "key22": "2gDfch2Zo4Y6ni5uqac6FaYL6kwDmrJSfaypFphLe9ETUvJQy8d1F4mqhDzQ2B3h9DjG9iUHFKuh2MTw9skxfhow",
  "key23": "2JFVDqpJ684Ft9DU5Ydc2gchsaMRaBu5Ds5yKaUavuwZ2zC5n3GdH9eLCyrzgZpyh7oqDF9W2mChkYQg6LkpugWy",
  "key24": "4pAmA2Q9zCPRqBqL8J1jJtLyYGkQ3sAvALquHYGXFto69dTBjUFeGHPEtRF8XLRk414B3FLLDByjngUKm4r6yRmP",
  "key25": "39i7wGWmgdKMrvf1Zc8EnqYCtFwBze57U6QADPrzVvYiXywwCZSgvHHSnr8wjpYs98mYumPNVqVmhQuMkW4p9W1u",
  "key26": "2cW5egNE55bGhYkmzyiB7Gh8Gzh1dMxh2Vkc5Zumx2Ge6un1EJBHCw2fmsmqgxcpjrVSHHWzZtySWsPD3Nw6K8jS",
  "key27": "2YqFULJyh2XbNZEkssYxt88QcQa8mBBLKsRsAzyHbpganSqvzcYVBYfHFBhS9p529H9wFmH36LtFAEfjzALzZXU7",
  "key28": "23qkrbASqxfqYwRinsbxQic2wdgdUe9pjEXf8DTkYzoy38d2Uup1FcmXD4zPjANVyEukScLfwQRhvpBPCmxQtSs2",
  "key29": "284S52xVjucywoibZ6GoMhw7FRqw4YSASTPDPWHsAWksmQq2RSDBoExNtYpZLGZuyAhrnZMmWUH9GPRxGJiXUqee",
  "key30": "5waWme3qE1exHLehusfDgzzMf4iQ9rdx6jspNw9Z3sUoeKMMdXCpVU7Qt3Qa2NQcNtHEZ111GW3bKBMAd8Mr7SXf",
  "key31": "5pSK45axKADJ1K763QG6M1uEGbxWpbsw3osaoSWyQiHQFboZV7gLy7Yuy21ranVPWLSfXKbnNEympMDGjSPQd3K9",
  "key32": "4kQLbGpyYg5wVTBVCT5yauQcZYY6VNTifsLsXfqqS4yXouKGHBPaM5mXXhqeECv1Vxz1VY9NSznyPjNpNHjsy7LC",
  "key33": "pkFrRg9NdxNksEnssC3KciepCkJ7XsgNxeMUYeMqRDJB7Qgn4GpC8BTTzYrQeNKznqqnuccs2o19gybxFnDWRMh",
  "key34": "4nMNGeNhGAgQiMTjRwkM2xgrzXRcnAGrs3uADTUmH3iZ2DANouvFhmWgVKga94bLVkePcbhJzAwE3K8ScPkE4ScC",
  "key35": "5z78XQk6Y1PvnXfFTy8mrM47L94ZVenYAJBAF64A5Sm4D36gEjXSdJQ91TZ4ffpPXx6GtAQaqe3fPXMC4hxvWdPs",
  "key36": "DJX9R9HLCtUmBVW2w4N5qjQCMFSuXebc183hr6nMPqBWgBRx28imCjia9SDqrQwvTEyZm8KehXYiYAPga8K8Wny",
  "key37": "FaWPeHZSDm3DFaaqwaYj4oGgZPYTNXwjVib5rwHo8nvQm2moFG83kRHTae9DgeT5xAEGqHMuMVQYwkfLd8zSn8z",
  "key38": "3dBczQWdznCFyzKQs4ndj7BNXLzjbHDUhVaBw6JyN7GbNUFjj7qGfYANdy2ieVLwwEUSQ1Mft36wHhBFVNbMLTAv",
  "key39": "STaccB3iWA2cM4iyVDekkZtVuqXtNw2GpG3siQiY3MSuaMZawsH6jNY8VM5cQbmz2CmfZU8QcxT98dXhYcm4vNB"
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
