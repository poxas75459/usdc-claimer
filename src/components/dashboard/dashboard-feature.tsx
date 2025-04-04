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
    "5RNqYKHidYz3qvUMkZ5Ukb4GCRJevraqNR1fcXuFyd3G9c8q5z7anUNbbbWN8oda9aQodAzdzoxgFotqSx8r97PA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fgVQwDuzwHnA8ib5dXNjRZ9tzufTXobUtuBy8qDgb3knPnxMVgGJm3oWC2wc7f6yUkqVSDeyywDk8NsTvM2Sexk",
  "key1": "4KUtVLKZW2ChE4ocMizvQwgvF114xEEDxV97rX3rCbuGGAfpYQHkkh7Upv2te1xqy8gfmHeotAXEYv1xV33gFo6D",
  "key2": "3UrtHEERBFYRoUkfvk5X9BVJKWM7pc2qfE9o8w6kZQuA9ZicT2homKCZUu9TkMBuwZkn7nkyv1Ut6CxwBLmv9ud5",
  "key3": "3tWXC8DRJA66uLrJ4Fw2VZSEXLdNKoY2cCv39t63uaCnjMM2hok7Jp35yE5eCyTJcLr4QQRkLsKcHQg1Zs1Ehamb",
  "key4": "64nWCb4JtNej8YxSwHkg5zpVKitQ8cm3nCsSmpUEYNFCyUmvhqX2cJA3ut8QTuBSc327BEdUyzP1WtEecr1XiTJA",
  "key5": "5PjKjfcPTzUNVJy42ugVeTqCQejdMvitmGhxicSQdBWxh6obRRHxag2FZzPoeqWPZ7YeAC1TmHJrybJBJm2GZnJS",
  "key6": "v22uHxWz2893eTdk4eA4B3Xt198KV4NDHE6dMYbGjUjd9HwdoXzTMsRKHqQNEkc6MYLm7sMQjhtzXUDi5LsksHP",
  "key7": "3qWFMwrJ31HSKUX4DngTwtbMFwgMy9FgJBEZ5sgvonui7dbBjFnm5qBCUV9eSkbFUPbHbG5cz8M9k9eAm5BvFdx",
  "key8": "3KkzNVu5rfyD7GumzLGzxXZG4qBgU1JSkgUdPwBkuAxgwCNvXo1gkHL8ncCbkbq2uFTatGTWapTyr9AJfTMm2PQf",
  "key9": "ten2TW9rSLQwxmv9BWTwznKmhiFb32BzVb6A5oNKATbuBgKpyt9YYR6zGyBVzTBPeW84y38PkHe3QZBTJ73jXiV",
  "key10": "56TMVR5n8XJRssZ3R5VBCDX8S3j6vHCnpwKnrxn5HMmqSAMrPbhLK2kTyTQE38uBR6iY6wgCBhLdFiRobxXPs4yS",
  "key11": "pbm42u1THECA9VRs33Q4S2WC5q4vCzKCmLYVzXaurnhpezPhJ4BjaUsCEgPhADvuzARyrX8GYZvmCQPXVwzctuU",
  "key12": "qiQ7mbfmf2F9VfXNavJ8wnBtD48TZs62r7oBV4MTjKntPCrhkT78DZNqrF1s65taUwsBMzAtuX9ssrfS42Ucjz6",
  "key13": "4P75rniBkmb1xRNyniiCgwVUpPG6jvfkHVqTo1tJzvHYRNUvnCRGZzZ9NGRQmGzsHpV5ksfNKEXdKn7Ps4eGpzgn",
  "key14": "3y7dewbuEPCipXLa5KvsbpdB797ma5vBNjZPrX5Q4knK2kMABpWYzV3S6w6EkNJRPj51565cZhzNaY7VjEGqagav",
  "key15": "55v3NVcoLMrVNhukSu1X3svNfc3f8HwTCLpPQzeK9AzFh4cW1xP8PU1RLTPepqFq6NBN2qmFicHPzSK6TFFoHm4X",
  "key16": "rNKERe9tLbzibdQwyS5oDP5zB2yDZcXmuwXNKQV1xpzUBpwRpYSGDKv273HEFe6uiahHqqBUDduC8U6h3yECaEB",
  "key17": "4rVTGKTf1X9zvkcScpVxYKk4zhPfhM5fq2J3mDNR2dSYRWLvZU7vxnx6JKpRnDSMn3ttPUztEpuLFAzxPGmB4pHB",
  "key18": "5kcu7cjjy2n9wihyayuDFdr9z6PnMsxbtqb98265WwthyZcqWEXK1EiK2t1ZcotZs5K56ucg2m7aCZ8WxcS7VPT4",
  "key19": "5N8wbJGBEg2HhiVSyhgBHro99JGXE2HziVJTGSdbdCRGoGW6BLTVRgCqRpeAUASibUqM6pF7n3CrKTh4iU2BgGZt",
  "key20": "31qi4yeMtmKMaKpPN3T48eD5CvwkGjziHoZhVniXbXNHbgsy3YxibMsKmNc3UHRSxTa4cCWMpKaTsQEvXavQ8Vgk",
  "key21": "64UDr9jU6avUzrtwkntRgwdwXoLWyZAdAbo6DMbt65PqDHwfngBLkMB7uStRMESeVcA7gHUHXEdxwkziCcVStSNF",
  "key22": "3uMnmQozBqbJLTtic2rrERoXkx6tALseDqzkFG5H4U5qdKUNwP33iFFQEZjhnZ4gqmW53X6GAjSFDTf93ks8ABee",
  "key23": "5i7BAfVk9pkm7xj51j3Q3bk7FzD8TF2nWdNjTRKbPjyfnHSnKXjPFYdQuhGW3Xgr5Aevuaf5QPtc1vB9XVHEmyJh",
  "key24": "5ZvH7ouQ4Sg8XZ1JhzVFGmHLXYx2j64tSXY1JtHH4Bu28BFjTRaMHQSmLkYBBsHu1BfWwymLA8E7kNPTYkqBBES5",
  "key25": "tomSCdoT2g3BKBV69qdyxZod3fm4UQHZAi78zakENmb3EjiasW9spKNC3znmw1BHDs2uxCiHbY5h3sgD2vxkSAw",
  "key26": "4aVfRaaNeTpbWQukCEBBeVhj9GRKfRVpFCRdkexgirhPTdsh5GhGf4tGLWwAhm1oW3wobLPteu8z5azSBwEArPME",
  "key27": "2c3aLkYnDEvMTGm9YWGFdNzHZVcYaLvx6grso6R3PjWZ6Emna8wPuLkLYawAbTaCsZwjbPyQ2DnDpAwJrpvydHAn",
  "key28": "2wQLCAeKcdHFnztDbgSAsBZfCtwT7qJPKGXqSscCsG7VH5NqvDYnanf3ndi9ebTeK9K5hcXBYJm6wu4C1iPWX86u",
  "key29": "3tvy11Qm7PLW5kHpdztGeczQZYPCAbpQdRCrVUxEuWpnf4XL8q7YUp21Wj7N5pp4JZV2kWArYpB8QQTqc3WVgRJY",
  "key30": "4yefSKcHYv5o6cz8oHN641Wuyhzatz6EoZV2YKLM7SnQp2Dnc7MHsTP4F7py2tFCGHiQVY8hHNfxfsDv1dwGBkrY",
  "key31": "3H3Z5nxZQkNc89DjjiNLhRcKH65Ku9fUScrMC8ZacQVxM2gaNdeLECdQjYUSP5WBGrmmHFigBDfADb9GvUs1rbho",
  "key32": "4Y8LcB9SxmAPWgsD2AFyNKbeDMB4HZVdTGUXZmeu41zvVcX84FCHViVCoWDfQAKKHWARNebEW5eRN5mf2dwGevRS",
  "key33": "2TTQujFExWUt22kxjBtvnSwgnwg2oCDaAq1jj5UEy4Ez7TVGF8vYUMucCmRpGHWgbP3hqh1o7waT7cdcq59yZWCw",
  "key34": "4514VnotSy7tRxQDr8Q1ZA5mXNg8YJgeVAryGmnCAD7EXHqANqobPua64QYVYPJtfPzwFmVC7XpWu4EL82Tgr3qe",
  "key35": "4gtUrURh6MPddnwqxa9V9Nuqdr3R5Sx5DViCiM9cg82TfwUXRQVKoLK5w6pW2EM9RmFjQCxowFA4uoys3qbe6828",
  "key36": "2i1tpZyN8fZokLBxfErn1tcHaFJS8frLnMbCBvQe5ieDWmCcszSuPeLFftcDNZ5gUDJhR5ybWnjst8SsGvtB3AXS",
  "key37": "YUp8EGr9oB4YchgC2e163dZBsZfjX6359jSytKsJ9CcYCMrQmrXCx3g1hJEqb7rtSwDKbdDPuqvAGRzuQGpkqT4"
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
