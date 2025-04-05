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
    "54Z3zREBGX2VvL64gYVZbKPD5RNHu9ST25fgA3Z1RTwBH5UXzbc2dHFVBrm9ggVyxUtCFVSuj44P1sbJK6tebHRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rev7ukhnkVqeAE6W7nwyWxHCvasPPM9EdEabSEEvBwKpXUw9t2CtrUcQa48JdtFZem5Zibc3FH14XzQhBuyntGv",
  "key1": "55bjHh5mpLC2gEtW8ZCGSDWSSBZ6w3dWmDuUbFsautBRmm5JsG39ASSYk47QYhYdhWyVC4LF6No2XWgj4TqtMkW8",
  "key2": "3V7zznF1TecxGYKgfiLXYxoR4wmEeZs6VmTweBTamWxSsdZgeHAMYLJBESpHVkCPPy93RAtob4tzMskFdj1PjGGt",
  "key3": "3b1kVghATyEUepknj8haXZxGLg48qJvLZRom1hE8RvUoHR8hWw3S2Zhwj3xdeqJbhyW9MCjHbMRaxhEAFLNKsE7T",
  "key4": "5UjhrXXXpSaLykx4TsrsDZtoFymXoz8ncd27DDLbN2a2KZYoj4CnC8xFnwMjbVzk4b1xm7RVRn61hHpVLbAFKvE7",
  "key5": "5eQv1NgH1rfx4iXFKRsaE3hWTKW19SR8xMB8zf74hy9ou5bC1ZT27HBmPJaFQ2yZzuCSELiDb9di7Ju5kYC3nEAG",
  "key6": "32RwsAazZGeTor7RrosLXunp4TDBpDUPTZJPtAm8tH6dR228k5iEsRYAz9cbq2mUuhtJ5nsm5aVBiEkxXZwU4Zpi",
  "key7": "FKL5B66SP2QDpLZn61EGn1JC36A66n9ZndJUPgxKX1KBhLyHWYjxzQaRuu4QRDkuC42LeecGGgbuZyieh5Whk5q",
  "key8": "513vT2skxUJ9z57o19Z57E2doZqaCa8y1siPZatiERJXEq1qoi13X7sgHCRKLueUuVBVpoFjJtUTSYN5SBs1jGvR",
  "key9": "5w3TTCC8H3vKNJTMQGs6XGTBHMyitqDeYdKDGVNdau8XKdqfZmodPEjzrjfrskVQBU5F6XTJRsL5Nu39HCcPmU7P",
  "key10": "34rds3oNGLwMDhenB46YmbwXx5EzTUyUeGUPBRML91MqkZWpvp7yGxXMpkzox8Zy6w4yDbqYx4RfGQNYbEggpVmV",
  "key11": "VEXNhKdMCMeB4exTEz1xyyZX5AjVaeMErVk5rLcraTzwpizVMim8iNik58ahaFHCit5E4QwyPTMxxzDv7ucRgSa",
  "key12": "4sm1Fp24oQahRwUxa1hpNffCSuAVqKhsoGRZkZRnp2GpNkVbjw6CgvgjHc3oei1q2EHMoskSo5GXUoDvgmBXPWmh",
  "key13": "4Tnc2hWCg1LZnwgz7xgzW3KikDXVdUwTFxa8BYozM1bT4oVQJXg4MKBgtKLeKfyBiKDF3e88qfkD6f4QAYsKBLkG",
  "key14": "3jbwo4cKiUxV2ypnheuCWEwYv5HiP6v7T1SyD2cWFMRzDT55yDGiR7EcHV5FKoGF3SMCZiqSPv3HjvztLeJHpuHF",
  "key15": "3SP2yACiQ5TAV4t99gs1KdesaPAEW9mzLPnSYWK7AqVkgjbzq9yQ8ZLUQ88ZgEaVNDs42jTfXN6uoSMcsV4izGZq",
  "key16": "3Dbvjs5A4jmHgMGKC6P3uAZjuhAEDh7EiMYzykHGmxWWnSsvSnqFBGHxkE2Rryt32ZEKyqEURT6KQ1M5SbSXTT4y",
  "key17": "5FNe3eVbaZA91Nb4gjeJ35EcKmE5vKzqBwfuPjxJvK5NGoFyqJ3YoFij4DpF2tiJnA7wCXg8oVkYmd3pdswXMiW1",
  "key18": "Y8ghJZmf8S9FYSJ954BzDnGM1NqVKbZ5ERSoVixK87zX4aSjdKEJPcM29y2i9FKTqV7g759DwqZPWk3oatT1iT5",
  "key19": "59szHSSUoMeMweTztj1Qitb2Dcmgcxz6oREm39H9X8FspRFQH6WQWCFG6YFcgfAt6PZVja1icGMkFmJxtfsLdtUW",
  "key20": "2BucTS62tZ3D65f1LhWiFebs8xoUTWTto7skXwinkqxW6JTbq8QeSsZXFBNFkYJxHu1J25PCKY4tAqHji7VcC6JZ",
  "key21": "53qqEBLyu7hDPZgQRJUSTrVAo9hFQS8z5Yd8gbVZB1PDe2ZdoGVzKzC6zHwSTdyWncaQTWDcK7xhUMpGewFGWzNK",
  "key22": "5jQSofn5VagTXWpz25HbHNp1twBXkpHxaBDMipAzC6c4jZyRBPvdHWDfNMvHhQgq22Ws8ejDBwBu66MgwnyJnBEQ",
  "key23": "sGnc1p2pCBpz6nd4G4b8zfzfb8iXknhdSnRyZKhuEQUYpbMWXjs4QAVrnWy1HJQp97sWmhdXFr1f64zZfsZRaoq",
  "key24": "sXfk4aDFwXFCgYHNT5FDctezXVkCjNLJNpq2Z2z6ToA1iWghXHNMvmTSDCant2dX95tkidZ9KT8qi3gDAa24HzN",
  "key25": "3WNXzzKwhyeZY5LzfHQPnRvjjamb8KyBDecpHVioqZicJ6iHfwMuN5tK3jzQTUKAdHmcVqBZ6yU2Q7eeUdDjmpA7",
  "key26": "3NLxKu6KFaXyTHuEifzokY6k7tbRRg1H72sqHjZxv7pAs78N4y3SJ6buAysxZvEkw7z3gSA5qYh5vK7ve13Fsi6c",
  "key27": "3Y2H79Xg7mEjHzi8fW2XqCDBrA2RyoNKze25B3t5BxMSSgkSxPJZG7oPDtZH29MVR6Sd1PnqsyszEJBzjS5CiSDc",
  "key28": "4oFAXfu6ru3f6BERYvoE1bbjjPuSB25Tn1XyDd9T4xybbZC5mv3gXTg1iQDSbgDKfS5FpyD6petg1ibff4KXHQVj",
  "key29": "2exQuKK7Ypjb5aVMo9uHj6beLXkd3Vnut7EXqzmSBSJ8bgq3Fd38VskWJ46gZtUEVDQ3fJXJjQ2mExDRJ9hscfdS",
  "key30": "WSca1DPTRLVboeqiuHbuckus6AYPFuiGZGepWSWGcXfFc6sCrfKR2Vv8SdNn1Th8umoqDKyPjnUK9cWhPQZAAUp",
  "key31": "VQkFZUb8w9p6geHVtPYyzV67TxvLWS3X9TzaC5tyYGfNGo4U6s3rQGHxUtAbPyn9WQrBn3v1bL3m3g7koi1HEGv",
  "key32": "2cL9ss27mJEuhgd8Mdjt8M77s9aXVT3eQwUnaHtm8sZrPuEcDTnSYzLEMkTMbDwJaZ9wFJLyAcR6jN22tQurP9h3",
  "key33": "dYA2FHJVEhg8geN9nc88tyKzLADEXuSeRugFRpvWNkS1Jniy98kkjBH76y6Y8xXMxAH1WXwKWDghy7YxWSb6HyB"
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
