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
    "4BiV3jbzbpkib7cL5PpM9KDMd3Z8Fou2G36dGipxKCQNCqcnbSvT4BC4ohMncXtzQVs9yqKSh7zPWMUaoYUk31B6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d8vkmEjoCwkvvfJfYc9kZw7L9BWt6fz9QDtyc2YPgiEoHXfhJRgTP1UmErkidYBVhTb1VqrN9YUeN39PrBnnWbV",
  "key1": "1cbQiLrYzksqc1U9XegsLrWtDExmQ1nUaa7ASKh2eA3TvG3GgPnwmrG7n1MV37SVtf5AtdrPmZjsWihPg1gqX3L",
  "key2": "C9fKmmTpzoq5YbDhburDcHqcgBE4VNCN9YRMXsZXoERzh9sFeiSHhocKzTKoE5VT5YzuH3Rtp55rBgVMDVrVtYw",
  "key3": "5s1oy5R63Hj2ESrF1MAgYJCESvggCyDiDno8ryVA8i5MmkPoDx8t6LuiFJJ81rauafWvDCgqyeQHNqwSpXeoCbs5",
  "key4": "3goM8cLRgPmLv7KCyzsJ5SQVh2GwpDBc5VRLfunoKt6ESc7Sezw9f5HCjU8bpfU3RUECqrMptrfoZ1UiXpQiqk4f",
  "key5": "3hbb6k7k3zNgRWwke6cVyHkFz2rHVFoYAG182Lct9FrZN9kCBsApvnpCAsdbPZtLVCNQJk6SpGWUzkkLQHtS8cdR",
  "key6": "2YGPw8Xo4no5XfRQoWnn1zUdfdKXUGyDEkTLCknvSrZgT17VCLeJi9q5qSmiYXuadAtWtFaR1WPtPvrECJhhAHUM",
  "key7": "yCHKHkJebsGX4WYVbo1MXuSEPfYUvmGSdhMjYzgeyGQBqDgobA6uuAUpUEkgD5nc3UunsV9FJWtCDq3XNtfHj6a",
  "key8": "2nuuFSFYHzn1wnhck1ukGY4qo78gLVtghRYTUnqHcGtZDJa45taN5mkY4c5mBRdAhjgJKP8jMS5L7ekCQmPYrMA9",
  "key9": "sRstUdv89EEdgTFiwHHo4UduBro2dcDNrKuKmHP8fRDs9FnhwYkr7LHcrBr45ophuJKCgv5dLyXzcp1y8CxnkbL",
  "key10": "5ytWDNAHqZxjuUSWbvxSoxCCJx54S2aZHreZPd6oxNmVuZ6fbDm8cvj3wqbVgFik5FXAhDjJufWwAfrACbKUdtHm",
  "key11": "5fv6dQtMwuN4aWjBdHn7zn8iLAnLS8PaGJkw9TZvEzoRBeemM9Nm59Ns1UC7kZc4KegTNRygSuqxPCmx9ZDxVbj1",
  "key12": "4CKvnbHBGzKoahFBgAyaVyE9tm8tdYgjQYydGtiW6EQNXqb3TxY1JtVcrqhqFndCekWQbTakSHFboa9rS5CdnV7g",
  "key13": "mFo4BvgaBh2rPb5GRzgGSiyFkDWuFsL9YU2rPhDqYMN2SjsFbk95gxXDe16xozJpapcmydKheG9U95jyF6qBoe5",
  "key14": "5wh4Kyj8ygxrfDjNUDX7Jthjdzpz76BTxgzwfsNHKhJBG2JaZX8KYxJhAzo5DPEWjDzaMJmiq6rhpmeyQevYtiXb",
  "key15": "HZSe5MUekaXeZUnKzMCB64Pw5bx82vrvss2a6WKoPPEpgiT8FhjVy5PRspj3doT14XnsxA1MjVsJ5o3nxpqpA31",
  "key16": "2FPJJr81sZGs8txUoHUV54gw2HkPZoQUhhTkhgFCgsx5Hx7KHcZ88ZKEM2zTYPntqpkoKfhSsG7SfCPVNppUdhRZ",
  "key17": "2iGwqyUGgpwVAaAyxMpDehmnKLq4k5SNs7f3i4neAzogb6EADdjNHUpkRwmLdCLTahtfc6phVRk2iAfKHuG8nTzf",
  "key18": "4BpyGZHkuHHuuv4szZEZyE8PnXkihCEkSphFAyMtbuBFKkfTqjCZptMSNdeaJg7LLgydHcSC245MfjuLQAqyBy8P",
  "key19": "5wFFJgiG8rwbRDA9mcbGXfogNekNfiJ2ssu8FERavvJ5MgsYKNt6j8CJthyYgeVerb8J5sp44ZAdQWGsGcLkW3PC",
  "key20": "5vbosBj2Dt1bw9Z722XCFKLiJKcVHzuYxvaGt25tCy3qR2yuAXetiyW238xH8dY6dUjtTPw2BDj5pzka2uDbe8YS",
  "key21": "5EaXg1QkkigWjzpiiGMAvoCzCrwPfzcpzFSfmAC4KKGuPhCQSS1mdKdsrBhWbmKPvdkB3HtQd8K7JUBw9qmA9Djm",
  "key22": "3gEVSyqhxcidAmjhcQsP4SRFKhFTzCMcEWv52eviRSTUprzbJ7YAD87FsZi5Cqoeuo5zm3xeM1ZL3KeUgmwbbqEd",
  "key23": "25b8WgLLVTefHSiK66yvX51woU2b7mHpEubc4L59k4NsZL2pCKdtKAmFwACumLJKkmKzL3Wv1BA8YjJ9n6hn944b",
  "key24": "2enpXESZyckS6rQzfpesvFcqcnzoPhhkoHNuEZqxNR22wUPhi2RuzqgV1Yb3f8xVus45hhjXGhgEirU4GTajGfbe",
  "key25": "44eu5xy1v1433KvLbo4rjuMMq2Ky3yvZXXdn14s78a2o4n6krWiQm8rrFTQyuAFuG6qEWPNdY6FL4k84UDZihmBV",
  "key26": "popcEHmCMzbjzWiD8gF1SmafheamjErnint5umXDdP2WXNPYmcwqhLuwCKX66jnpP6h7D2giABuYV8oG2V1HevK",
  "key27": "53HJveyyymcU3THwzduZgWP16WKj8Yp72n8sLywWGsURv4vrT7UCDDMJ8b78xGstAdrW5PtgtpAWQV64dc55TE4A",
  "key28": "pgRHacjRyxHDwWPnNRYFqrd1A3gJU4mB7xzw65kkqT4ZxfPPWpCrfHdidmf2ZHhya1UDsQwDwukZxXkSuaEhpEQ",
  "key29": "iCYWxeKwUynrtfMdBdtotTUtgTeCHz9EB6jtrYj5jokMd9uTg71XEDLMtuTi1t3hEoqrJhofiKPjteeh78dV4st",
  "key30": "5x116FQ4kfdvZKbu9rdmR6J1d5RFn8VaNGWSxWVawE8PERwyaVT6pcLizzxLiGWqfMZxoLoHw3Ea5QmecknyeV8J",
  "key31": "3s92Dr7zvniEiVSSEdm1BZgPNMW2HebZ2gfUYcJymaGgLskzEWQC9N2JzkWGxZkToioVxNPd3pKh1N9tCLg64bpX",
  "key32": "qemrtAqFKcoQB3QBajD8VpFadgASL9kvZewSPituasDp3Sii65hTy9GiYqtyYUY8jemAdPkwjuh3zyBLwAmpeZd",
  "key33": "3gKBy44UqqhdpFfDPGWYmwNnERGQSa3USLst55r5wp9aojcZMGeK4DgYSheAPiFPMzMeQ4ZUWinj1RHTM4u7QavZ",
  "key34": "4dqEhfqaYaxtkrvuPDyqCCzkFkJRnH9itgFsopXeLBLZfmTSz1rGHwVgJx7BYAT5ggNoHG4nsaBMuYwWiBcnJeJR",
  "key35": "5nfrzRof98AzTadGuZgsdCMVNNDoFioLePTBTmhZDB4DPTAdaYj7xGJ1qN6ddMhFvanJrsxUMGZGWGzLkPn7D6nu",
  "key36": "29nCvzMLjW6DkA2Xj9S3WgcTZRzC5xQSKQKSQ34Kj97PgkgGroXDtifGKYjaf17Nw3xRn4kHTupd9jaB43Vfabgh",
  "key37": "cUHyR5Ug8s6SfX3Fz1udULqp7kVfXhKRi5pEoKkdDiBRVDU6tzXy2aUW2P18VdYpGFaA9CxekDzaUXNjB7Vwteu",
  "key38": "2wGeGqmhQnGeMJam6NTkRCBonCATCVzF96VnvfuryUyiC9TYTCChkFoaPJHH4d216fRSEXufM5ihEdZMLT9rUXYw",
  "key39": "5SdsddNKfcNzirZY8Gf61kH1THKdHWX5HqBBvjQ5wgUH27zZmfxAzAMzxARShUVBAYkpFXoPhTK1sfPn99k1RPEn",
  "key40": "5SMsFKzne89X3Mt22gSDJJfdTWuefmnqAPnx4XM4S3qaW7dAXDBM9tKk7MWWFeQgiA2p933QsXsuF64Ktw9AoWkB",
  "key41": "YF9pZwa8HeutwR1X2ijuQaN9EosXndRMjeNFcJWnv9jyhhRpae19C4Yh2jKmCx2Ax948bCR5DVThiM88PjW42Gk",
  "key42": "2Nt98QBfHix3BFHLme32cEfN4m2T3YKxcB28DMud8526LTWbM5bg5mHaT4PqZeKgcmxgQmnhxWYdLeiQv2krH8Ye",
  "key43": "gjgMEwa8Swc3KniEfr5dCFRehbNxzmyndENQ7KPp6FscR4mrnYibUtY9WKpie1HEfZbeF9R4jxr4eHy9h5dSLEW"
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
