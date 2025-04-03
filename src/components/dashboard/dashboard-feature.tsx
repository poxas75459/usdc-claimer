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
    "3jrKV4xS9hXHAmSLBAZnoku3ZSNwUhpdRg4agCg1yJ9F38zLULkHungwcmzoCPaYV34uyJDULvyroW5MSV2jwbha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NdWPk6QpwrP2Yp4oRrQu7bsXmFEXYL9uQwjr75LV8CJTRDX8NWLcTo8WYxkZbzaa7Gy999aSjwGADa559vnT1wf",
  "key1": "5GrGG87YhutJf2kBMzszybQo8cRAMLHTmcBDudAoME8zLrk4gYkbxV8SnZnjhe8GZHfJZUmRYBB4VAh2vK34xSfT",
  "key2": "3Drn45FjCumnCYcAjaWfJKb55qeLxR3852w38uBBSyiae2W8igRsbyCdXj8qsm5ew51Q1MravwoT3jGsFssbuXPg",
  "key3": "56ma6RUWD8nP46xfcHwE5RN3x9rD8ZHVoxMtRFbo1nSuigPALsFWWFdNipj2PrLiRM8ZrTdSo3jXKM2DjRKPCagm",
  "key4": "cqLQ8sF8CBKP62UWksPJEpSqtY4z9zZ1icotzA4fUorHdQfz122VDTnFe9hrS53kr8nRhgSGCMtJ5rYLqWntasw",
  "key5": "3JHUAkqPguMbf6raRNcC4xH6jMRtDJC9fyrqoyPwXqN9AJosoNiwL9vmXVYQM5tKgY4TXZHmRkqXUYPwErtLmggs",
  "key6": "SY9HM4Jpme4V3Btag9rAUa3V1waYNMCyJQJ8VAj7tzG1A4ukYD4VskyUaKT37N5ap2ZxGSDszTMFjBaaiWPPUGR",
  "key7": "42SsYWsZD447PHabHECf1pxAQERB9UAPyfwa31nz9sZKqStbdnKAnyvgKMSWsjvEmNtzham9mbMksCUCKy5UyK4Z",
  "key8": "4jex9G9nsMqip3doFyVRQToTXYUEwXywdJawwLvyJAGjH4UpjjcGJCF8F7j1pbMNQSnkoi92PTN3fveGDqU2yHwQ",
  "key9": "2FGp34vCmhsGMtyhF99EVARvUPdvLnagQF12f5T84crwXq5mfWLMEd9m3phHjyXVdSraPCqERxnaMYFQi1EvYh5j",
  "key10": "59dNebrMayCwYTQArzBpagcNb1Ns7CUiAmjAx6gHz1VKo9yqvyoHEEGkgH9vsXeSKNpMEZ2XhQiN3VWgKP9ZTKuM",
  "key11": "3qd5KkJg78UhvzmJ2coQPUEpBHj6uEaET6EjJt9mYEH1hsk237hyTZDGuMT9HkrDA7QMphmdDgMkMt77tBisMvkL",
  "key12": "4MSg7geceQ3gjWBDvaiNJDiJzH6imBmMhwNKSetW58nkD565Vn2fJX9X9AJHKSzeEjVah8R1F2uULHxcehYomGQF",
  "key13": "3zpfFEFZaaNjjRvuczS8tnrLZLQa4Swwjh7GfbBNLBo83abMXcf9WBvgLNeS1x5M7ZPJfkGKpzBmVX3HL4w4fLNb",
  "key14": "4BYHUT3oBpEisfbLmQGUfcN9A56zY4WHeNyhPdusvgNYd9yQyWECkaSQvMJ3WCji2cL58wk27uZaJHrHCrdBKLkc",
  "key15": "4kXRFcpPhvpwDfigL4YnepxZf4k5MQGYQbGX2VpxSe9nQi5Lzf6WccfsUW96U9aMUSS5FwG4QhUQ5YyCqna9MsYD",
  "key16": "9uFexAA7iQyMPAifx9xy2EBBzd6VWZ84CSvKsLLKy1FQ5b3HZgYDsG3gQ3ojCgayR4D8iqyKoVxLDzaXYxuempz",
  "key17": "5Jw37Qw8TUZA3r7ZXtZz31PzMBXaFStN7YqFG6BVGb8rc6FwBLeNyJWRMYCTEJBF1CJUdyMHA99FWGnxdBc52nzS",
  "key18": "5gHYWSj5BgZH6V7XSwbaiYpxhd28N2ddJaaeZmEdHSLb8WQ4CJUxTrjHJ7w66RLyTRyrkBKAvzJ2R6KdVedaN3yY",
  "key19": "45wqemzNBgoisMa6RwyuBZQ3YPTY4Ji6Rv1CbUM7Peq5btTQeqAm3gh12PNo3VG5BYiQRgh4EGzKbpME2hbRzkyf",
  "key20": "gJ8BpVyETczAT87chTHB45RKcZa2XX5oAmi8q49mzh3YGMuBrKr8PCrR5FbAHRVaEBxgvHcBSz6ZH1PiEpiaXVF",
  "key21": "3b7d7Unpc7Ngg4obtxVbbPK7BvcH2RsWapzr9sYQGFPGLmPQEcv9MnnhGS6QupRfmoRqN9mphHK1gtR46zx34yNM",
  "key22": "3dRMraL9ZJQV9WnEsKzscGCgmnj9vN6ESExf6UmbTeFb9Gr4uizVHuCv6o2LWHZino7AWHc7vmNeMLyqnv27TxWX",
  "key23": "4LCJGj6Zh9vv7tRG5aaqMN1sZyCe9GCMknKKSnNnZACCmUXu3AuR9Porj8vbv89KhszgYCYs57sF9aRq9VX2rRe",
  "key24": "4bWw93r79evo8UEwoZ3mJ7zoFt84XpnsJZNTpVuJ64hkctK2qBPJxiDjXco4M3ryuxaXZqetFuJuqkkiseFxBdwb",
  "key25": "4EiYg31VQVPDQL8khX78diz4NFMDSsZakpe8kePxBsxjCzkZraSZ11doWHyRLQdQ5CqHMyrs8BiT8QyFAGEuB3aA",
  "key26": "5tpjFdzwWZdkJfRP3Ygx3HrJRPTsXXs2DufZ9uK12vo3DBxTxXK6xq88MV8SKJATtPrKcGgPVbYtYTbPYTjXMK2n",
  "key27": "GwtgjEzLq7ZawdeSkmcKoukJadEmqti1F34gA18gKbpvcnK8LU3RA4MFoDrpKFpELAtbbVXjPULFxwYi4WDy9bQ",
  "key28": "2zP1csHouYjQj1kaEKxvA6SB5LeWL74xEc9abcDAYzZJ5FDc92L8D7isBhjwnXGC5qDjZrmQjtkJ3n2GEoAGK1He"
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
