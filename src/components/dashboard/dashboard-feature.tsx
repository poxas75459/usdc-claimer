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
    "bU5A8DPx7zfdFahHAVdEH9jEP6Tyb7hmvKocVTi3iH5wthQUhQYN4eVNCdb7STX7j3nCHYLUgrSziu9ecTvoD48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A5XZABwXxqBYvXgFovoyLZHbEVDAwBmBby8vwYDfHhJSnfa2K3KQjouybAoK5jVEfBBNH5yf88EAegwkGqFtcqh",
  "key1": "3E8cJ2vbBhjb48nvwurGan7atr3bBYaZV9eQ82LVs5nnP9E3etghWt89RgxQJmKMDQeq2FZJfb5oBomWf8pHk5Et",
  "key2": "5tKMUsUXyoXpPvZAy4o7QG2ck3rQorWZ2iEYdhTvntRZ18h9mH1tes1QVP3fk9HpjDWj5Hze3ibUnZRCYWQi1zrc",
  "key3": "h8DVd4cvxagSsoXpVAeFSHgiXL2cCfxKD2GBEUogxAkU9KTYFteAfwCxxVt6ZxZLrN6g5EsFSeBJxjR1KxDpBY5",
  "key4": "Xb94QNmBLJm12hR6jLZCcsTk5C8coZSc13x3N3nErrqd693JxAfFo71NYpYtMYEvqivnqXNt9fdheuyP5BkNUSH",
  "key5": "5V2RS4iUtHqHe3BTec47BR7jmPhvmLDiuoR6CdbDkyLS8CGNENs9J3pCbFbSKXMe8ZPi9A3ypmde6GTbsDRjdHhi",
  "key6": "5rEjtvK4YPW7g6n7Y5BGYyH1uX5geNGZ8x811KXt3fxywMxLYaKPhnTuWjvJkmc5hyEYuVnjVY8s3BTwQYwda3KP",
  "key7": "5CnwmBrusxkaJVeNee8DWpMgfFJu2fWRpznqmL4YKDJjbZzwkWDQEUPBGq8rrpcn8cbDRxh5XxrjtKvgShpbtDFm",
  "key8": "mRmU8rqERMRSiErFbWSnrapAEYh16rr3FrYQnzDwh662fferj9fQEY8RwAFU6Est843av128v5C7Bs8heZs6uv3",
  "key9": "4eE61ipVXfXcvX9DWZWqLw28ag4fXcSKZShszuVTAfU8XHonzbeAYqUUTjDWELYTCJJKkR7kyro3mJS7SKSxpGQb",
  "key10": "47wuTnvDUguqe1Ch1k9SyNJKNVfShC5UFgsGm46u6vu2ZyNQ72oVESxgv1ouHrhzdmrUKqWHkU41VzvkrtmmdyJn",
  "key11": "3gd5UNMogS5BnKxq9gsenXmraXvRxJEGSkGa1Pv782wSBKRwPHTgVZtrCDvjb7X9svWk4v5Rxf95BntCk74dEPSv",
  "key12": "3Ns22XV9Ticns6CpGyfyjHzY3CqQ4csoCBLHEQA1xoaYvYC3CrJNMopJ4yr8t9tnDHLSPNsq1JUyuyT6WsVitj3o",
  "key13": "485Z5fjxYAE4EMs3SpC54X7R3XDEStMtnEA7pa6NPypWjrSk2cZMjSYSsV2VxNA1GMmHv2M2iRQVn5cJ6DiiCCHa",
  "key14": "22Q6o2hiumEmbnw3B8kXDU6j2JjZTLivGzgeRLBxtDukMkWbkxiYjp4mFyf5JueAc31p77nk6ZSkVDoyzE8BVEaj",
  "key15": "3bZFeLTmpwriGX6BL2t85ZdcBLLPB65LEfDsoiWdfqiD9mdLkpYCUnXtAifbsHmf1MMARRV6hHGeDZr32irMBVBm",
  "key16": "4TG37iZ5epNKK9b757hyBSiRHsroys4N4VESqktNsKSjfg61pGnND73fq6uH3XyE5ri5V95BHT7sGrgeC1tXuy1",
  "key17": "iCNV4pJ33fCiAoVF6gCbW9BmDpTpLvkJGcxmhV2w9sDU7FiFyfArE2vkoyZJrng2PKfWUQeay3VBrBoEzw2Bojx",
  "key18": "4oJfQgCbSowpUBGbaXaWab3AYig2zWA4V8fcsYaJ4eFbWUcUuQRqztNJ6mG6QcbdyvjMa9Xr2Yb9MPbSMeauF2hZ",
  "key19": "iLsneco9ne4dVaxFVmT4Yo5fffMpk69Y4fxwQ4aTGkLPSgEEtd453KpAaQR1BHH61C79ahoMfzvYnrUMuT5ZnR9",
  "key20": "2x2kX2JmZvD2MjXJ8e8LpjPFeJyvHTWAgjpxQiTQmK6Dr31vxsSW5eTZHZzEcHq3krFppLeEPXLAz6C1GToQ8HLs",
  "key21": "2w4iwxjmA6Hw8BCwwbKxHJtzpNi4vJSLjVhGJd2L4Cwgr7Z75XWMNuKDSwzVKpFyroEyw56Tz76nfqiYRuuSowFu",
  "key22": "5eCeybtGzUkVqihQ7yUCZCM9WEP78aVvLDKSb344MTHncENiuqHEh1P9Kr9e9GfxsRVR77CthdZ1irjY3rqdH5nU",
  "key23": "3deukcGCrMWDho3Fi9sRif25ZKUfmJdYABXk4WzzSBTLZNRo4v1k45A7s8FLPpMiR3wtJ9ooFwmGtrtjoCuSGTdV",
  "key24": "5APndw2WLiHCx6h3PM6S2tiniS4m85QpPU9SHpXdgha44qFV3538WTemRaSU2Y8wpk13rd1Srw5UQ9jhCpinZUAU",
  "key25": "2XS6PcFffNV9PsxFQxRjmucnWnsU8bq5hRupFgQmrNQ2egWbEEnPkH1uTvsbyTZ416nCYbWfEtGKYSMeWz952VQg"
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
