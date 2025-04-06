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
    "4dHz1u5kJwoxftBPLDiToRV7pi4QzyFWwmQEqXUhSPwVkaoMNJaAQmND2cE3UUXCBaLbe7bY3jcTRPGCvC2NdRvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JNMKL1uGGW7xTprmkwPRPYZ2uRQKY45V7zdQDdF43i1XSC2774tBQjV3x8ToAf1vnzaFU6UR1TT1dtn6GLANQi1",
  "key1": "4NjVTawVpWvv7ure1jKPpjVp2KMRF8TZnWjuG5d7Yrf6jtsEKaeL8fx6ZWfs8sobtZHZeeMKUaqwDF2AwGhPhm8p",
  "key2": "3b15xx8sbr8C631f6sZUwK9iyFr7tUDiFDXj8xnYBXK37zuXT3t3SYs96MA6W5a5QKDq8YpVXK83qEUaxLreP6eL",
  "key3": "Catgm8VKsUsHdMgvbWb83xhkZ5ZhZPpD87n3p8TYAbMRk336JwTW6zTeebWvcn3VFTudbYAydkGjDiAia3XrXyF",
  "key4": "4djztuhUPA9zjdz52R1Ks2prJMsyrtYX7As8vSmdtKZhw47e6UKXBqZXAZ7Zxh1T5UeyuNBsr5kTNbHHLLhFhYYx",
  "key5": "65ZreGHzJ9aod6VxfgMff636Nt1LppkrZs83VS4uWY8h6MrmQChg7dqeEx8jCFxTAAiTPQUkcuymDLfEXrv3oCik",
  "key6": "5pjhCdDoqGi2c6dCy5GUYGWWqw6F3LingDi9Zfhr8vcDuRPxxA8jDbossQqqupgSiecAH6LMnb6jgM5gye81NYf2",
  "key7": "5Bj6EZpQyk76KtZzUnz95ayTosdyrkDgBRXXgaed7ACHLarEYgz8suvQ56ja5PR6j1bb1bgn2J3RT2zv4Tobzgwi",
  "key8": "3W8xFHbDBTVABnkFBK2Qg8qA7YwtQCyagtzaZca69TD56egJreFQx8dQRKZXqWKPp4U8vuvU8QyNqkZNNC9DBga2",
  "key9": "61cixg58sSnLzbjAer3dvWWmkpsewdzXsZUyh9itWSnZUdhYAX9wP1seupAgvSTj9E9ozYfqBSLCma7ZRRu8ocBb",
  "key10": "2HDDANheNTSw9YdKQ5JJgSHcaW8sZorTwnRM6JRPCiYfFGCqiUdiwVWoDtf6x5MXt2tiXkVqWwKsGgBMNRDfL7sP",
  "key11": "5aynSQx7AB6fqafVXsyDH4eBQTrG7YTwa4N9wvEfkhZa3etLoaV4WEw8zhisk2oKUEhNmqYwe75Zj3wKqaeBqGAp",
  "key12": "5Z3kLBGkS7t5v5Ah1QBzB6RjaUDySEeXoNHNecvsEuXNLs9Ra7d8Maeb562WySJQ4QcTm6RBaiKJr7NBPBc8Yxec",
  "key13": "3kDXtDsjoLa1whE39KHQHbnNVk2xNNXqVx8E8ZAnBgTjGy1gacVeL8HgHN4YoEpqNF6xyw3XP3C5mE4cpwGEeYRy",
  "key14": "31ctC1MPoW1BieyjrKkfuG1dr6TREGZtRpveUQyNyLPSB2D8LkiPNE1qZWSZ5YK6Ts6YSFX8QNkJw2qqD9MGPoND",
  "key15": "2bhb6hacVcyBcnKPXJZ2FNeuGPbrCM2bRRMytme2HfJVhKCXXqZbxKyYJg6wJJRDk7dUjBNgJdhcfXTGKzxL9Kft",
  "key16": "3SjVGkG15Lu7GpwFSWd9V1FDRXe4JcCwMCMdrTPjgugQQYTzLuntSewzmWFeTo1CrgXehkWxJRKGpTVXDFNqcFFR",
  "key17": "ydTmrnccFnsPMkXQoqCFU39Uef59azsAtD9rhnunJPs66HgTG5tZfpr1NhEhxMfQVGnBmoBo7n7pZy3ReHPrvzu",
  "key18": "5C1Cn28N2M3xoKJkae9C2os3yUnSUxgafth7ANbSakDpbABgXvUkMEFC6RdzEmfM61PYgLcYuGdj971XtPao2dKZ",
  "key19": "3C2yhWieLVsnG6qW37NHEnKyLSbp7MQ5Czrg5rmK6WCihWnuHUt5Jj5AQD3Gsp2YouK185B3jNGQFYftViaiyZv5",
  "key20": "5iTGqEvTAcTFm596msxoN1pzyfe6uTV3XVZdee57MngaGLeoF5NEEsFRNuNvN3R2hTtgaiVu11VJiYCyed9dMeSM",
  "key21": "39uuQUpcxzMxJNvfnWT79FKvvx733hfWP33Uzft1hagoarMomfstT6XBEE5a3QgPTZX3F5iR9MHh4LAgfdzBgxZC",
  "key22": "5Y3Smcv1c5Hyzuoui1oNNS2CCgsPXK6ArdKTypoqwKmczpyi7e2Wfdvjo2zMbaVqgnPi7GYzK7sD2muV4izpRuNG",
  "key23": "2kUib5XNMs7KBdyaJbaR9K8VY9gh7AXA84C5vVnRvEf3CiJcrokYseEMRPZ9BEiX6R8RexRJ2w2334KQnp3sh2tn",
  "key24": "5Gz17pJhSH9LwuVCF4KoN8qQ6KVeAJDgzeG2AAUt6ByKqar68AMQ5iHxFBtnH3RQnSJXqjVfLq22N8VFRLmwUqxk",
  "key25": "2bXqW2jRgKAupQeYt2Kx5pMMLN9jYSUC6nn61kw3iAoeoxkfffFFSwn7vBNATupEEZAAgDER89eXJvzS5fdMkndr",
  "key26": "4wWAqFfReZawH3sCM4EPUMxCv6nkKQ1t4E5ndkPCoKZD9y5ZcFCTALbY5U4UoD16Ajbo1G7fz1FUjQKrxgybuiMD",
  "key27": "5Vij46AbFr8fHthAuGHWwSqXKNxx2h98dACQghDQPJHZLfEN89Hm1do6dHewwfk9gwnbY1Y2xSbC1acjBWVi1wob",
  "key28": "2DdgBiYF8LScTmL1TRwYGFViMAW8Chv7DcCowYXrYkN63h84JR7DNVg7pnkejCv5Nc1WqZY1gFXpkyaw7mD5g8gm",
  "key29": "36KkyCTDdcYErYZbPDiz9DvyVmjv9Aq5ZNpWM4v8caxcHQ3NdNq5KwBDR464XjYDgYHC5UbkRnZY1ZkdeXVKXoPN",
  "key30": "kR91WqeGTNXo4isrRBwWQUekCwm2rHnbk2c2SKePCtLAGxtYRbYAP9VQ43Cy7MynS3qCatDDJdGommzV3HSG9zG",
  "key31": "KRnhME9DaAGEC1Te8hU61p2oXDkHZppsh8HrCjVynN1x7hfwFWJyXH9yTQSRhaY2z8mVAC5oh4cGquTmcRPahH4",
  "key32": "5vJ6LD7eNPwYu6U3dWhQco2TYFDrPMkioYaUKrJDeXMHqNxGnzDQjgSqiddtXwmfrk9UyeJ8RJnD5h7z2jXKSDdU",
  "key33": "gfr3d3WESAe78iQPAyiGQ7WxRP4yrSmgqFweREF6nFgx4d995sNarQzrwC6eMsZLHVeX1ozcTjba3NuRKkKx8KG",
  "key34": "hpijXcsfri36YtS1DrrmjCZT98fc11y8tVvz7a9b85Zq6kUdNRQNhGz5Bkntdkfj59RXrsWtnts3U8eFVHGhUL7",
  "key35": "22dwXvtCLByYEuVw4pob87FuuB2Sr23LeiuEkSLqhG9twX499qh9y8tPqA71g16z5wvb6tkJ7HRUTpL4Nk3fUf63",
  "key36": "5bPHLZSLJNgFtw8DZKrXQ9bBQPUFCNsKMQp5bcErMz7CV3WNmttmpjBZisci8XQ2mX2PX6cj5FamiPWcK8SxG16W",
  "key37": "33XWSGyhygDx3gEVy87jEXwHV7EGV2RiZhEjFSkDZ1Z2TPbTy7cmHsDiNfU91YKCn3Zu3LBQmQdscxoTMJ4uH8AG"
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
