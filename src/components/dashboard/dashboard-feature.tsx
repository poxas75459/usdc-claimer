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
    "3snSGNNRekt6D9iyvhzxdeB1tnW67qbDDRPk4RBwFhs6rBz4Su5LVRkhHQZaoAqEVLwH1kttxe3KwcvUXmQkcKEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KSNcrcmK2U1ffastyehbqi7QQBDp8wvq6t3qWFnbdxTp3iEXjKBw4LNJPJjsb5je2FTWQjj4GaeLdHQFRM3N9ch",
  "key1": "3hSTYGbPkwpxEN7LhGEkBYYzQWYguBfLHydXErshq5RNFWFL148UhLfTPFmXNcMowGaubPPemb4d434oqRg5MovC",
  "key2": "5C6DLje3FHBcJ5GwSdexCmXQEeaX5LQKkNLhGyb91MVK5dUgTTkaTVemEuyTkZS5iN9hJTkpUKpdbAG628fDcgAW",
  "key3": "9LgwhpAURLNVrboUtGXugrdZB6a1LL9RFmvcXKf5MaKwZqGxDwB1ypaF7inUnvjAYtaaap6BcrKndiVUq5rBPCw",
  "key4": "3uuY8SxDshcFEWof7ofzEVkfnv2xzUn7K4cJHmTP3c5QnN7kHigc3fbBveCsRwkGtQsHhDYWEtEDzeDzAvAqNPip",
  "key5": "ZjN8oCpxxSVZNH1Mafq1DSpK5iCjZmnAHqtptMe4v1TUtPbHCkt8mg4LDkt5RBBxnZf6YFVr7ntDXLf5SAWeH8s",
  "key6": "5bDHtyMVkTzNRoTi9Ynm5y5K5JfVkvkDZW66QZPacp28aqVNPYVbQWDKPvt9n4eUcEc7A5ygyx8KqzGwLSmeQ5NV",
  "key7": "5hw4W7pHkJC1KGvWms1WNTJvfYypcUGbi4KHAQCZLVehpE9heoge7eTabT4YSge4X8Zy7BHGGjzGZninXR7CdyMU",
  "key8": "4vavbQVGyTdsNJESpHpaDsJdsQSMKqJ4SwHQQ8H1phxPbZPByih1MmZTwVf7ddL5BAWsfoDbXr7Dmf9eHQGT7AiT",
  "key9": "2mb5KMSptJTNGVEeteqftybrentj9H1oNaRMffHA3y56nm6PYW7H2Q6Br4AVtkJaHkrLzPLYLwiygxg4GQQXeDJV",
  "key10": "3qB4pMTZTi5i5cvZjwntpJDdQgMmtWU8X6SCqhPCUxq3G47Ni3YRKtAe2RX2z9P5MNxYp34rErcQhKV9r63VCgLi",
  "key11": "5h2RAEFDvhEHF33Gnk8cqs8MmQstbVs3CRPEvReRD4oyBtWcBWt3tpYg68FjKXKGLyUDcSAp8f4GzJPErJ8B77MS",
  "key12": "5xjodHKT8o4XjgNjqc23zzjg2EYLTpQ3MGX8j1AqbvMfeaLqajDvEpajBK3enEgub72EuQKTXtvQqhxADoc2NVJ6",
  "key13": "4PPkb9FTrETfQC8jqqiPq5bCZv9Lh4bESg6azKBYV8WFheYABJHryX82r74XVBBzQDvhTeS77s9LSStprySXVErG",
  "key14": "3mzBqhEa9KvaKmRqvtXthNXAnZ6wSVoynAoJ2SiWYsbeut1vnot67tsvhaa9WDn1hHyHeCZiNs13kdU7HNT7MT7r",
  "key15": "5cV97U21psEyuVZYVU18KV3v3qnAaVXR2hYt3mWLfdwPwyqxiJ3ZDFU5j3QiL6rq9mvWLqLkX9ybHWuP4yAA3dKE",
  "key16": "5K9GrXmDFGddUchgt1Nf4Gggw88yad8payJtbpDiPqdJgmTyU3n4egwVzwLRivmRay8duBrbDZxNUB6AHMwXkbt2",
  "key17": "616VwxmrZsprwTBN1LNBhHdidnyZiQ4uoof8xfdfgbvNi7EWzJkQMFwa6jEfewYDJQc21CGyMRGVm9V1cevTn5Fb",
  "key18": "5xsBNgTWeHkjdE3YmKMoKC4PLwZGoJ862VYFLsuqgUtnPBN6sHNQFZiUEw9nVwbccR4k6jzLJNQgV8nMPL7pQ889",
  "key19": "VkUCJsEZBZMtdETZ1BT8DJg8AeWaZ88gcrh9Dy56t8oFDdpF7cSVKiuuGk2FF9PHggqtLHcZpBnv9sxvrxhoZzT",
  "key20": "4mkDCv6STQaBebp1scPN9ADqRGngBMeoBRT9R1saxGEdq3QHXrjhhL5DSpoC8woGDC3PLdHRmacUHU4RutkUPkp2",
  "key21": "SohEdizhFf5kjCi15QEB9fqGehtW1sduBTJ68cpYyw1jnNnoYQuMgLgJzDr2968YCAM9MkVW5H4auV2CQhcnPf9",
  "key22": "4v77nw3sbtiAwDuYVPBPFKvisiK7fMtXheKjHMFbxYeM1Qpd2JRyvpRdrrF5RU4prFz2N7PZEjsSFuf7TWNdvhao",
  "key23": "yGKy22L6JUGd9sTnHj1gvff5iaJqgCJrmDbHqeu36smV1PSnN6TpKznhoT1beNqxzS6NtHazyBPMpKvXCqc8aVG",
  "key24": "4rzpCcUJ1wVuR3torgRD8SFemJWcVSibhg31XKKJhjJCSACWAVyXzFsQEpvqNd1jU4dNG1b8Z6bYLVazDB8yUxsb",
  "key25": "4YrQMZ8mfi74ETFPQJ57WeHPkKocMGikH8K4A6ASSaxoFqz9tFnuvsBBcG7eho8zN3PPsuY6fERc3qiKpr98g14W",
  "key26": "3EbefEW9KRRLggGu9jewShVwPDG99vr82GsA9xbFyDWf2F8ydG3jqWFRx3QW5nY8TC5rYvz2qsaEvhDF95bp6zLN",
  "key27": "3ephCCcUjnsEqe6TCQuMWtvoeVxurEKernRaydbAmJEE44TF8jhxGNWAoaLgN5YwJVgqnnhgwSY2KtaPEJ6Bx41L",
  "key28": "28NMLVRavnzrxSSnVsvngSepQQSM3cfAW7o78AQKe3ACaTY75aLp5N7jYfUJxJLTJMwAzLxkXBJqXsipVcvHamXk",
  "key29": "5yCPmNq5SYpM5EPdoPAaokpNEhJQF2J3gHBFWRKZLeYYpssfhXScKNNVZvyn2ZvwN9XAEHpjzWrqiDtv5V4dgn2p",
  "key30": "5gnbERPUb8Yrki4Z3FMAJjp3srDSDFKaX94umzCWb93zpGf6N2oy9f2cVjN7TeWsm3pyh1iYEpvnNfujCHdL8Sa7",
  "key31": "3AP3p35Ai3YU1EYihKXE4cvB8ceENNsw8eFNeiRuPKYDic646rjtmH4sYw4qvRzb7npTCECH42kW8JEXFPp77LRF",
  "key32": "5VFp9BybZz3BtjgEBUqUdn3Nsd13phTDHks2N48SRFkCH5TuT3FpQhLqV1JmsBveT2XQdxcdMS6BBmUvYa4M6o5c",
  "key33": "6Fv2sHxeihmoiY2eGfkjjUZyZKa2sEcrcQdSkWxWftf2UVPpM6W5jm4zMqdHRRfPzohsY7w8tXomE7C5aYSTAYB",
  "key34": "5fPwJYU2jwxmVszXFhT4DPqtxAXGHkeCuyj3fYTYtU6XxtzYPNh8xfTTWgRiFvuKQbePa7F6Tc7b58vh4pXZNAyA",
  "key35": "61WbTmS5zZxm2SnxpaMyZqfGm1NFTxPNnLTVrbL6KD17PzYg1eCa9XuQvk8fKxp4bBWCqC2trxNPdxcKEcVscmgb",
  "key36": "3y9xRtzFwgnc2gSryTHVTzFi5x3idSb3BZAUR1BTWw4nYFRpbnq3TUg9wi2aoCPpyx7QcS3jZpoNZsHa6UDchpyL",
  "key37": "25nQ675WfkGCqHTyPLA9gWN6P5kXEeZrCbVRmRNPtRBRnA8JaoesoPQMo7kJLYEQxp6UdDeZJukbqNTtZGgpTsT6"
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
