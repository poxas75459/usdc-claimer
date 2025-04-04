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
    "2a5XJdbYJFWho7M5jXLEbf2Wsdt8rYeT3a6CxtpJwYYZYmcJZbqexW8ZzHb8RgamYcDMo3FgqBpZejqd2ieUC15J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3swspPHhQ3SqcfHxN6pbSvFQJtZhG46MWzCWLygyBfSgaV7duqsCNMxSUWgBePevLuyPYBpbsMEywn6XxSMLGCtg",
  "key1": "5M3psLmrU6QNRsuPuxCuny6TBzeoFVhAfMTSXpVinVRff7wJVGfSMd5sj8C4sa3FrQ13EkuHZhqvbBSHrkpZFQSu",
  "key2": "4XXna8NjdWfGakUcqf4wX1gRR2nvqqRQon9j2xu7HGtPmVKj3hKxjsqg7oAJSSMDS8C3wQ1GnoYxMCag53Pkp8zQ",
  "key3": "448hLAVKWqnnwTjpUm3YmQeEvbf3o5ric3XxPV62LRqL7zwTx3Sm48ybfhtz164PXzSM3qdTxPL6yWKn75CWURVa",
  "key4": "5eSFaTfjvFABqGyLaxEVtnjs2LoTd4ZikQ7uWrVoshwCVJCjFgL3eL4sGA1ckrxUyt6DQD2kWhnobDyzJ2DYBy6u",
  "key5": "2fNW2SG8EEgtv2uyXa7zvjF2Dgh6fyEN5e1hHjPcFNd6u7KhFWKvxnJmKengeqU8rZdBu1AZEaNmkuMtU67mCZ6e",
  "key6": "5MhDJ9BBc4R2hDi8XVqzQ9ZqfKhrSU3S2i8jaVFXEhKy2XH5qb3pA4JzeTTNTjU9XSwKdmuzcvv6cFpbtHSCCEeD",
  "key7": "3Kn88xHWWZdJ8a2AFcRj4JN6Wcb8FYSeA31njBi9w9V5T1mbrAUEvDKTLfR6MASnwXimPHtVrSwwsVp7E13HhZZ4",
  "key8": "4RE1H7AnSpbaiy4yV2yfn4zqGJfyEvbyPx2QuqXsH6mBP1SvBcG3cZWMwoXmLBie36rsMriKK2AZATNnWX4tLPM2",
  "key9": "2vjwc7qD5wTR1wZgEWiVycWCEbeu9hH4G41bHTo5RvfxArT8mfqqzKZwqcZs3dSeapVXVY5AkU4KbcG1okgZYuVx",
  "key10": "uUyK5zQxbrS51W27GDWAXS8kYDPeNbFW5MqrhSGn9ugyB9FNWUU3XNDiVSYBiY4csPLrWYcfEQAiE9wW63ApH6d",
  "key11": "2Wv15LARADZsygEKf6mTGUoN5iRV3dnXC9ZAn5VUQfCH7TSt9nCuCAh9hRtsHpkVWh8vf4zpdpW1TMzB5rc4EDm8",
  "key12": "5qVKWG9Sohw1W5Q8CJEv7pp3gGJJimHF8M2xcQf4J4he3kD2nQbP3BWRW7FBFSXcgY5cFsK3jyHzm2rYfL4nrb4f",
  "key13": "5J4JDe9MreFWLr7B9edi1ZJo2Lg8phFvZQJHQm34EPyCfDzc8z5dFpQwFzuRmpVrbeMHb18qDHXmGzeE3wUk1mXj",
  "key14": "EFxFf7P5kwkjqoVb5YD6azGGJaw5w2wmpabsNoq4yASwU8ufnjvKS3Rcnxa1KHt1brrAxoDK2F36LfP73kb6yyz",
  "key15": "4BNdmz1PsSuP6tD5aqSEfzqjWuxFzrdnJdZdXZuueMdCPpr4UZz1x14EH2N4zcrhKnAtrpvdzWvoxtm726r2wKHz",
  "key16": "sWyujUsHEK9HNCj8T3JK13sjDvdjJrCbfdntfZPdp6KzPmhFn27cqvECDq14V4Gkmg5ABDdyM6S7ycrgA2J95m1",
  "key17": "4aQDrM9zJp2yFHU7dYkTVUqUj4RvpAsJnyxLc5PqaDT17QT3Gd3TmaWAvRdbpP7dLQrUJWBWbTNRYJpfjqeyxZdB",
  "key18": "34Svj6sxiLFEnFags8wFEUrRHyjGFCAV4wCoVadFaNUy671AxbiDMxUCGYuKfyZze2uMy8ryGuHmEZEuT7Hhyvm9",
  "key19": "3EvZKLLoEkMAvcFsGquncm5kDntRvsgkpDW3nNXVs8g3w4Q2MjfC5aPuP3pKm4PxNCuApeDbDpNhMtgH18DLGWr2",
  "key20": "2LxM4MrinrK7WWqNUPR8p8XQW4PUtbMeExqbi2CQiNirk5tT3tN36W3QBCzrH5emVvwW4SB4rjmLvKspUshCDXjW",
  "key21": "5Wq3Xm7imYjHZW3vNvt49YmVCm2FA8ZUymBeL9Qbm6gPZ2Yhq4i6pQkkvBECibsBCGBjc5FcgNWoTwtEBBibnzso",
  "key22": "3xShfMxfG2nnxU2Emi4oDeGX67BvqJdkNN9FZgLzUpKyTKYGBx5iVs4kWPz2JxsomRQU5pNWRQAUfUt7rZQDPr4E",
  "key23": "3eUfLd6fDomq3dujxojCq5aadohBaPotzxoHFTRL4iBQ8Ch5YBv28TbskzikyvnuKcQSA4pGjAuC9oTnhiiqQbQn",
  "key24": "3JcCMLEG7LkCnP9GU3f5uRhty51SKoD3TP9s4HjtGenxpz9FNDauni3a2WvoafBM63koWWs5PCzLmQKbLZ5iEmM9",
  "key25": "2ZasGd5SmeF5SvnoKcak2DUAh4sMbuUrWeG5R1J1BDu3Vem3N1xgbCKWew5ZZTngbc6LcN68yh7VphkzodFke6qo",
  "key26": "3qsFhpGknquhQiWwnLMW7SK3DQmUM9vDdJudDCF981pAGq6Kgi8Vb1ur9ksUuGTJ9GVESTPu5Vp98dzTogsY9h7Q",
  "key27": "214YfZWeXP9uneyZJLgMPGu7218kXJ2tN5pbjapNC3sfhrBWpZXqe6MvLdeYVYrsMQYhihiuYxvDt4yK7fxCWqtc",
  "key28": "35boRkUrdMPJyKSkA9QMRny2H3GSgLKaQjEoQr1EPvyzukwu413U71B1VbM7hFNZ67TSEmRe8R7ndusy8D5RZrhQ",
  "key29": "4s3S73EQ691MzsnDJ4LwfCzWjTNSo8aDn3dbdGBpRyU9M4ibtAMFnosajwt9D11yU1qhPHXXEarv8bnKMMCSPYic",
  "key30": "4VDvgcMgAUp8JzRY1HgsEUDK76VR7vFUh5VBXqSz4oC1WU3Gn2qHT6iJKmTMho7kcZ7jJumxMXR1wykBRtmWmXHU",
  "key31": "3UKVg1V8T44CRyRApvZzz5pm5si3egbe7y3N1uTzPqRqCF8T4auRanLPmW3VYToEv6JMWYhnjrnZJ9PcMKHf2v4",
  "key32": "27kCDLLwiGJ1YXSvrPbMjiLQHyZ3SQARrsjZeoZtYgoFpaxTx32KF7bSwtVgAXFbGN2V4psHfGpgxkdqk7Ztg8GZ",
  "key33": "rDxYfBTkNRQGEqBgMzbLvoxBEq2NEaNaA9oko871s5GikaFLmXdV6tomyLPPBDumMSyFEYosVwG3iDfp6BmDeh2",
  "key34": "4oyUkud7inKfUYYj1fjK5NukJor8q1Zt8ChJF4bzvvCmFGwVzfA5jUStoFLABBd1mCeqQzv1nfD3aKDFuSh9qiB",
  "key35": "KawycZ8vELcKZxUjrxuVXwwvbRUfWDpZKga9eCSzk6NofCLEDyoLnqAp7JAvDbbx5wBHFarjvrPPfABpUjv7KUt",
  "key36": "3EKY1h3wZgsfykTHqgpaEodKQYx2jast7jnNQJBhuqGHxFmvFJEsMTT2aurbL2McDiLLu5maooqk6VaF3sjUJr7w",
  "key37": "eMrCrMFKS8k1FmLAXpVyVKcRJxaDUVS9YGzs8Exoq9ccpDgkGHczF8zyXUpwkQMHNsNLaNgkxqqUrmVYD7xLvPo",
  "key38": "3idGexo1GkWpBLL8aKuRcxd5133iwkhi9fqewVdGs3kd2Btb9KJdwcAL5ZabxDexkfUwtSHHFLVENEDDoYEUVFbP",
  "key39": "5ia8qxnSoxsNHYxGzsRbfSDUxDcHXGanagCTCsLEUGvAwtQXX74DsBAjpeY4XMYbrYTcZ9rZ3VYFfxaegi2k9WF1",
  "key40": "3pL8Ddt9gbvN6RViwJ73xsryHiLFkT84hyPyg4Nu84fm5oyuMNhtKRkYuzzj9gc2aZyBkiKMT5HcRL9yTFJZ2LSy",
  "key41": "3TQusSH1oXV3VPeMf49ApRhtJjWrVBs2gCr2ByPaX9aEyGJCBEBjWzKpGp2frph7PUJCRfB4CAWShiX6bRXquUay",
  "key42": "5Nvbj1y8wdGQtTABvhfaC81QcfMSuoDkDpN4skoqZtnaJufCDVoLD638rj69Bz5sLwVygz2JMvPF8a5WZPybmA36",
  "key43": "51LmQdJQ9HT9Lz5vEz5Za7M8MNsMDW19Q3cpot5rLbS3smzqnVZva2EWzysHcXcBJ12ELm8oP82WvknAh9mV2PSq",
  "key44": "2MeynwVSnv2tvyiRJCh9Y5CZzjPdDy6UQhVdMdTvd66HguFBePYVhmMTmo667fjCppRfhqgEZuYMoxM7GtJoPx4g"
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
