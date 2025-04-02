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
    "2KVrfm5KrFyJsUuXiaNivK3xKVewPECnBbgNXkRNc27NYZTUL6rm6tgFw9NnHMpieLPvckGNWK8xPjne6kjZd3f5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66z1oq9tCnZDiwyujaPsNrXdmwMaJrvtQyyEyApZd4uGBSStcHFDmkuJ8oWsTiNFfzAh99QPfRfcgX4k1CGEEgJ9",
  "key1": "2Ney1a7hh6ZJMxpMBrWi9rieZSNqYArU94YcDwGRWuSiyG688kbadNKe31rSJiuF32AEGr3ExE4dpDJF3sN8JZnu",
  "key2": "3T2mkJGw1UKqXLf4QfD9aKmsg5WuaLcjG9627kJhczjSNoaUgudJ61UJNN9k25n148E9FC6cbJF63Lc3VVFsatg2",
  "key3": "34qHgx8QcjJ4dq97pCF8ao8DU4JjZidsMgtAHDRVN2E1sgQq1JaFt9jukD9xAPtk1GcifkmPbLDg6ugQTsKucJnz",
  "key4": "24hZXbDQLfPGVu9vXt9ZnHvc5Qxyv4znTGLukASomT6pg8GxJBAe46sP8nafiHRCUJU3jXJpb4gSrYugwRwkfDdr",
  "key5": "WC65SD9Z2WjBFwLX7xcorovagdLe9hj7PhYSsEytHHnbYFwq2sSD4Ur89CVRH3AMCj4iCztKmXFr6vPBiZm5L6P",
  "key6": "QAnxZ2ur43qjamJZgo5KgJVXQKyvqqXf7RS8qi2t2ss4CwZGHwQSqMR77WemtcykZDZ5rYwAjYUDXp4YUjH6JM6",
  "key7": "C87CLQY7b7TDK47pgwvast2n4XomfR7oPAqQ2K4D1yk8j222nAWH5Up8dzEGJNT2k3DCS2AAEGMxZiW7N43FPX6",
  "key8": "5kMd8yJizcYjJzcnPEUT5XgS7bBirkEjDeg7jA38T5H8pkfpR8jb53ncMDakSQB3SbrGEzmWogwkeoHSZyNDsA2o",
  "key9": "3q1WsMfd2DUBLCoRA2jYsRfHPC19bcZzpHv8BaeNr5ED92jx2w2Gqg5SRGLTQjdDnGbMVCGEkJFY1zhMfEtnxUtj",
  "key10": "Mv5wMyNAK3v3r2EkVSmN5hD6ioaZQ1Py6fueKs4twubGVkvBbEgtY5zjCrumCDNVSJDrQDcDjvHC6dgD1WoPhGt",
  "key11": "4mYyfK9WEFLoBUzJ2Sa62n6YGwuUv2q4M7AxCmQN8WYzy5WoLq3Bh99eUe3PjQrEU1yMcWrofqkQ8MrcBzk9TfYw",
  "key12": "KLNMJxoLbexKwbuYcxpnAsXMxpcsGtT1v1DMGtRdCVHsdPmwpnz1rBy1Yv2nvPmet5mkgRp13cofPfVxBtRK7iq",
  "key13": "56oAP4eE2NpwVN51BbErN2FbeTJAMbNzr6g64ZgFdcqonwGKGFTKZQHKnQPYnNH8br4kQ6Tb7u1dTZxPCb41meXh",
  "key14": "2bVUcJvAo2vWXe1U7K1v78noj9LLWxBgpuA9AeKs9DWxD3rTKwMSxr4JFmvkeNNzkPra9iHftwB5xfDXZRrugvos",
  "key15": "43XhVHEJgK3S73HhRM7ZDphMTAuHQBsSjtpfrefY4ESBShmG1XJsA7gtKStqdxmAZvf7Pz5guQCqnZwBgCDCqApD",
  "key16": "25U7GkAobu4zCx1Wid85kA4VU4oZbPifzVrXJApZTySUDH1N5A1tbphtq6eTeW1H1wX5JnUbPoBZXaXzjeexUrrs",
  "key17": "3S2qmiaxnMCn5pLty4h65Sfy7AAA8ZWa7zuLCzYwvPg5kHVT2cbSf2vqDZb3Zs2dPAq3i5d9xbQsqu9BPG3Emje7",
  "key18": "25VseizXCrSkJ7mXYAKnT2pqUguTfs5cswUW3QgpYjo7hafvpbnpAst3txPGAy5KrxZhsUn4t8S6BUEJcf6m9BaB",
  "key19": "4dea2Rwx5Y6gAdh7ydUjoQG1EMfPUvD4LZW4W8GT3x5FWb1FxahskHrk4WokkjE14Jxn3S4Ref7v4RTdaiHSaKcw",
  "key20": "ug32XHSb3Fii2ksZXbsqZSJMcWy2onHKJM281zw1r3Nda4fKnWHNdkcLZx69PNqWTD9WJFdFzDiCfMuaqF4zvMT",
  "key21": "59EWE5Ms7fmrhZvhbMYKgEQcCPat7tBEojBQwjAakYW1JgG1ayjKroX7bpfEPSyuarAapsy71wjttfzC7WdFbhG1",
  "key22": "DYmF1vdnzgYgXVB3kU2dnjyY1nBdWy5bt5bKd2MxL9xXmX42K1SNyweF4gK3ytxBY9YcH6k3Ht8rUz5DNj9FGuQ",
  "key23": "2iSPHcLooasQgtJCSfejndPWQ2zLMsyaEQJDuYS7zeXP2UtyifGorn2WYfQwQRhtcLkwsY4TbyZ1iSkRhYL937RN",
  "key24": "3gE9HpkHPq7A31ZezE1KoG9TgBhbYQ48EQPKrgig7kSc7AHQzRL3rhMMWJtUUk5nQVQuBCguuBt5VcWmievhdTbu",
  "key25": "5F3vkno52dyrWnM4R18WGAALD5JaL7tZZx1Ac5Q7AvvQPzcD2JNu6Zb6XjjRUGuetd111J35SyUPYVddqVwGQQgD",
  "key26": "2YMGxzSooM3qFzGskujZUwDdtF5K9CmZpzNHgCL4sPjnobmR4xys59w9JiSRF1LpxpyBBviMmNMgX2pdymhZUxfi",
  "key27": "2SyWD9SaFW41sj41VXsQXGckBuHu3Km6YhHVy3ZS3YdCHWdnc3MnXAzfrA51mgiPF5YMqewoN5m4kDfFsNJGAauL",
  "key28": "mCHD7gCyFXkRaZNWfo6TsosbZu4NpJ9Yn2TZiyWY8vXCBsCQX6fqhSYKRC9YMDU4PjePTgkS7zCHxkcJRNfDh96",
  "key29": "4sK8zDURxenzG3EZPTZ8rPxmBtoRadwX9deAc5W6uAzNv3xbPnQ7ETvQCdM8nobq52XekANJ2uyfdu7dRtGbULTP",
  "key30": "5mGtSDzR5GAtoDSrTy4dNUFL16p4HgESygigtkFHT9HYpu3Xoz9qxnX1QPSLjJ4Ntp8Zmf8sQrDM4ib78EJqxsok",
  "key31": "39WUGmFPwhu1u2fZmmVJFgzvRGwD7omZepoJLz6svffKd9gUpPKwoYFWxRfj5Diwih9RGKotLEPso4iWqS39EYmy",
  "key32": "35dxiyXHqqdwrcqM9dkBXNbgZMMTYjrmCgtm8QjG6gw5XCHD1WSTsx47V4Y6Fb55psdnNwoEDJwxLoWE1N5A9Wh1",
  "key33": "2gkYepa5oSxJybiZP2ApxiQSy6WFCCFnoccqxQHpnCE9DdRZkRbboU82tZcvki1yWCXLaRXJbeGrsWrq3gbGEws3",
  "key34": "4nNJrpaaXvcsqtbrzhgzjfT2C5pFrnDJUiCa6sLp2WLUG3fPNUw32naeyQhGg1WhXvshwwusdyze2Med7apfAXdR",
  "key35": "2MAQfNhadQaRo6sRNcL3248A2hiHmSR3vYNMUxEPYrJB6dF1c4P6FJHepaUDzeXqscqd2WMkR6oHJorzLtZBFd9e",
  "key36": "5b85vqwznpow3d9Bo1hF1iKPzmgcD9tMKvninUkLzHP8NB7UwAopJZLW9gD8xVCaFq5a498EvKenduUUAocfowND",
  "key37": "5wnq67qyo6bHsQThX5nVSMp6ptZmnQUB6VexKNRo46oMtteh7LkzGuTtoEvXnTNL3PX4S3ib6KHfsPTtqFASYKBA"
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
