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
    "3vtX6yWNemRyWxz1a9Keiehh2uxud642TyEnfZYX7ERJLQuLrDnq7kU9732ksyMbxTJnA3HC1NvCXn4wwWAEW3j1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mME8Q9soqE37w2MkzwBtazPQT7Dd27n8WwU2yVvAmokPM4JYPRTa9MKbNioVpJpJAU3y1Y2M1bR3cB8rS7JoLFy",
  "key1": "fXwCozMKXAnsaHzD8HpPUbFomkeWTkFXSRRBsAXkk3GC1Nh28a8HKFoficfZa5JZ3KGQX3SKAHA4H4RWy5Yqjk8",
  "key2": "43Emyp8j1N94mrm3R3j854riGs8dgty9rgHm2W2xM3if51RpeDSwfDe5TbtyFw8UF42ZSowmucu4nz5TRz4MEgQ",
  "key3": "2oCfeUPjBjK3hWtrr72V8WC8ejuzkGZYoxpkcoBPExXUrQStD16HEkEJhDKUBju4sgXFSGHjF1XQKoZ64AEM99YG",
  "key4": "4NAS73DLpRDPHDNF4ukjRdSTjVTE4sHNFmhoudiWqsgUfqnqajBbz4DxWp4XCVJEe8RQAjRR4Z3nzft9vGwww9Mg",
  "key5": "5R19L1gwowzyKjpEZHot8PwYVWqN1EajMCSb9H7WMfVqSnqbygaMsUHHSMtbdmRE8fiMULWAaBmpcW9q6yJY9wLT",
  "key6": "3GHHCvAWCY56mGSpDEU6Vr4jpwPtLftB33stmDQNT2XBba43B43TruW8gWJM3AkizzxzbYnknLkV6hNsW91aYtP1",
  "key7": "3mxnuivud84wHRgxxGMn5AimFpxdZU7EDajvxSk2AAiESrAKUUJY6GLrGb2KPBKhVcy1sptHveqpmcYS8U7PSgMW",
  "key8": "2Jt9MKtrvFnuYC5LCrmjnCC7CLseiNYhqKpXxFcqLxvWN1aZX8EQBywZGJUuu7ZmRNSkhsvC5iPn2QqzhhAASdvd",
  "key9": "5o6dZNvpZWGzrQ9aT47KcHAkWy8uakRfw8HMx1vDgecYxMSFEcBduH8q2Yf3FPKGwUU9XmCqYfMdgcVQUq7Mbyes",
  "key10": "a784Jn2Dq4xCqS41ez15MQJUwKz6VsY1kkszHWk92oSJCDsqHS6VoQHsLCgYUfQa834fSmaSwrAcPYNAP6r6UR6",
  "key11": "5ssstNvhk3h5hFuRQhC8BXjk4T1q1umjEQDumUwjgScjT7ykr84cX5jRgESxNAtLPcxRVLLXophkqLqUcBLnQ91s",
  "key12": "5kDW8idLnLs6oP2V3f6mpyFdnib1JhQeAu4AKwUCra5PxMTFS9rwyStjjm22tp97zsr7M4rgREuqjDcbNppEnHvv",
  "key13": "2yUnB3A2LYCHfuroD15QWeCC3iZtwccd1hA1dz7nn3jzZGpZk5AwibpKP8nksPXmPdgMpQXDAEyCtuRadjkJsAxD",
  "key14": "2rpKWDMnaZz8RYDMnYC7d1sbEGYFPsMezCVCZXTfPRkEzF5vsjfYu8CEjmRw5cEGF4XkD8kJkXVvXBtitDpetM7U",
  "key15": "6ABfKQaf6BbFWdh1TMaZGTPRAi6XMKZaVgbZwpdBVTeAcKQWAZ3rNLu65q216zfe36Jjo5D68GWKMHiwxe6HLwq",
  "key16": "5oSrHuZ6E2LhEuEkVYga231V5NWMCyq9hXf15Cuyk3KkEEq2Fxcqz5Sx4x3Lu3mrvob8b8UNPQFGFeV36npXyk74",
  "key17": "3Bpm34DKATA7Se3CPZ4Sp6v4iBNJFR76NBsWXB1ArMu1NYb2WJobnMuJ5xdVfy4u9VXKNrr6KeQgFXawrRZZXYqt",
  "key18": "5MYvao5NHt71zDLEkBQRp2vHn4eKvWQD9KjbFa3bC6CMiRR9rk2uAZGnPcGLi2B3CJA6459UJCogRMiHwj7JZTXc",
  "key19": "51mNksM3DqUuiEvDiKEivakedKFoKuLPg5hkXaaMM7kcf6k2LQQTXysPHjjiYnT8i9Uxg72BsQRRJt5rAijhVHVn",
  "key20": "21EQETATzm7C94Tbt1hZfhFiBHAtgBhXDAkG6ibuhG9iveXsy4JgsarKKEggWyoBm5fVtPysabxEHzdq46MYFDdV",
  "key21": "bQdLpdMS4Mz8HtzDwLqK8JwTGwa9TG4j5mtJpRtTy7BPHVEjhBWaP3HuKqD3V33HVoiWodS7SjbQ5U6NhL5kWFi",
  "key22": "3DDCM2ArXUQCPopvG9zF2Xuz3fr62yFyQfL1R5pSY3fuJNL388YAqzKbAudcsL7JMkwRSdfJrQL115XN9vQNCA83",
  "key23": "oCjHtCEtVj5PjDWjiHbDgiRsb164xPs7w94y2yviYiTLimPs3RUfUmvfyHifP8cmVLWvwyj2kYG9gsGLvukHVUU",
  "key24": "52bgqZGFkBGt9AHmyapXr3ZqbpXAK1rbqUqzz6venqq1gGtLhQ6jdwCWBkCwRQMH4UAu7pYfzBbfscfM727aP5i7",
  "key25": "4Nv8Dcbc5FJQQcWTKH88LRUNPinYMjR8gEGAreKtxUN2pvpL5x7JbVocp5n6gzes9T4TJM98cygKKhEnYNbJaP5a",
  "key26": "hxYsHLLEChj9E8Jk2ncKJBYt6qykMbGCvVua2vfzduxm6KjGetRbc5n6AH6QE1SWPdBpjFDWRQhmWhpYjbtCdiv",
  "key27": "54DcjXp5FMz6b4AQBLF78V8u8ySNxjeiKqJiWf4XYXP5CxNTUYfrJbGAKPzLHREUXSVh3oWFu6M67k6PSQzPNstM",
  "key28": "MMqgH7xC6GEDtMUwQCh4aw2y6wtCLgnhu5931vfU9E6FjKMvGNWKq3w9CoNMVtN3zRspQc7rbvteb1KC9PSSKmH",
  "key29": "581XmSmsngu5NnrwbcTPvUJJo265BxRfuph9K2t9rjuys8gEpLJzmZaxpN9REufPt16QiCTX5cTpd1i4Nkkthrbk",
  "key30": "2NKmzPxjpAFpFHzGbR3s1AnEKZJoT6E6LhwJhMUdQtTLRn92JMY2CKfyTBgG5wztntJ1HQSt1buWX4y7yBjJSfjx",
  "key31": "2iHv5zjazWqheYeQFF6VU43QqQGL2VMpmfNqs6MvLkZcJ2tR2mwp2UmnSQYpo4KhQUTQShPh1fN3EjKD2n1J1fac",
  "key32": "5LXyt2BcLXNG2ezkJncWqy2bYohszEsPgnGggKQD7Ywf3tt7NAgnqDnFqMkhCpUbVuSrVqNkvN8SJqdVDRSEy14i",
  "key33": "5m96NSdL7ykmFnGzTMtrjriRpgfCB6udnMEdVjTGLK7HvFEw6JLhC6BnnEkrFwub7C4YP68eynMTWakwrdN6L5cb",
  "key34": "2UTUP6Dy1vB2kPD5d32Fj5tVmFzSFzsqmxFG3UY5XSqsBHfCkZ9RLUmYmu1dXxiAzpQgSpeAZSPntESiJELftatH",
  "key35": "53X9BfyCHYZ3LDsJsStwK7UgXPSUTvikoCp39MJvxN1T5JU3QXmpbbTJH956aYoHWnezfXFf6WotSgDfjeXs3xzP",
  "key36": "5wzRn8cW8aQi2g4HYNrj7k9g4UB7gALiJpt3A9Q2aTCvqjUDe1MsdhnhVb4eXwmCKaU8hzgHy23nZqd6JWeTPKwS",
  "key37": "5rxqqfoaHRxBfqBdg5q3NPRsZ9U4C8oyFJGu3YZEmQna9r2ocLCZYT77QDjpsC4f3V1HKqs3ZJJ3TpmKjsqF1BfV",
  "key38": "4KgexEMW5NQND6kRgxxL4XhqNcJAbUj2Nkztsb9TBddRQ3A8mtnxBLbPpvnDUZo1tcQxRnqCfVpokcZT8FnagzHd",
  "key39": "5ByDWX7F1JPhWmJf6z6vESr5kWT77D35bwH3ccVN3xZEBtyQ7yjLsFNCbD4CnKSdM4abz9qgk2BPCnBrnxzNat2U",
  "key40": "5Dwx1kYhon31K2Ksi56bf2tzLif3GPLarYGExvVP2SjSBpXQv4EpEZWPPG2a5RYaipdtweDK4kSLavoW6d7xFpkv",
  "key41": "45g95KeFAEVNDgBWGJXnjzw32kvNSEhZnsPyCMCdfWe1QKSFc8Vn4F8YBr7AoaiDgvYzYUNdX2GZFKCLhe3t45rG",
  "key42": "4iuH2Ld6ZPPQyizA9nHXqwKz9c4rwt7i2f7YCreag42MEGe1uoNwTgz7Ft55U8cTFugYHX3dXHGxRLWufs7LAieR"
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
