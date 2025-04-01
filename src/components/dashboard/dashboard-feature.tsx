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
    "2xHVZwa8cBMsZif4Q27ec7vh1fF37G6GpN9tQ1SxEfMcARqpNM1w31LxDHqpUG3GtYg3UgKWCVGQ3d9nRDkum8Dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iaHxQVaxVWWT4qK3keXHUDscddz3Ti3N2uYeqMDF9RN9amKvvsNz8JcuCjsCQFWG2ses8BtszUmZvudmeqqmVXe",
  "key1": "5cnhzxJrLZFQztzzSU86ZBSaSP6pHvcvz66eYTt3cwJDS4tf2zKzZaBqNnYo1xjEcmTDFrND8uey2tHbpnzpQLAc",
  "key2": "27DJZa2wGxeH8CHhA6cFvE1jKcgedW76oT2hERRR55Miv6LDc4KgzmCfJy2qCEZv1t9uZZRnPJehfunR8E1t4TN3",
  "key3": "4b5uvXrxpoSLc47BhZ3pbsPczpkRiPEuCw5o1i9GvMztzNDjuUQPpr9Gv5azYHNSVw9ZHqpDDNPmN2fAzszZWyLg",
  "key4": "2RU9LsCgipS7XVS8Sa6Ziv8tRM15osjDGfZ93in6SeWZfBy3xpb3VVBjdAJpwsHmJix3nENW5gyTXKtS9jb3URP9",
  "key5": "2qAWRLwRsj9cU1i1D166wfFFxRVrpJmF89K4VBQ9rqu5iLhN3muEmhdANeF7XQnnUXnR3nj3gjh7Q6ZLNVmMRfrQ",
  "key6": "3ktGJoMiuxq3XFhR7gaT2NUfDHawuQDEkqmbWhdaBhzVTUNtPbxuXKVKCY1xJHRC5THDhKLVW5vaxjvGgBqtKDTf",
  "key7": "yqJ16TxwtaWpVQPXnd7ABw3MTDKzvsxCH1PNh1gcpu2tGXeXjVnQhhKAqPKGsaEWnSiJeQmFLmSJUhEdaHYtmJQ",
  "key8": "27GuAHrEvjb5EK3RN84YQrhn7QnZB8g5ZDS83vv6BdFnizL6HcAAyH4QYM2hGMgnVbdKConntNcfGc4fGrcwCp6J",
  "key9": "2dN5yGGQsREZ4zig6JU9vZLfMPc7cg9Q5ZxTqphRmLnQmzz4nbdhkk3WMmi5qsQeMuPyvLAsMzDvisexPxvSKogw",
  "key10": "4zas1f7wKGFDaBnUn7XkXWu8Y1b7MDgutvt1VpVAxJAvm67BWSscjNMgcFdtMqhaX6E5r7zN9VJRoSSzb7HtJDqg",
  "key11": "4WRrZwJ1k3VmxxkPz4qTEoGyRrVhutR76rVhjiqCdsWvz4pPV5RXiPzs8btfAp4AmVBnxTJtdreUKHurBURCDuYp",
  "key12": "3yUpVMZxDvWgNeAN79waTiA4ELYi1NH2Eosb2xqJfFw9fTqDvCd5mGpxSs4fbVWMTjnYL6cv1ieffhUG9jkwQEAu",
  "key13": "5XwDXhi9G35aFhoh46TPGnvNbY4D16mSyqndVyRYn1rBnZQgTJbSB1xNXTMDHesZfb8AQbWo818AjPDB2qvwZjSa",
  "key14": "556Ez1CHq2yjScDTsMNdVcUEqavtcxHPM4dWvgYtmHUzWxcBndSmsfAkFrpBZRu33FDZRQUoLfs2Vu18dvyVUsjP",
  "key15": "5Tqcc2AyoogimiLPaYzRmZEXfXS9AMMnN8X4TN6YKC75FSebzsVdh3HodTGPMwbTuqZXgrGGoiejA3VgBdA7NYCB",
  "key16": "3opuebd26KCF7HeiV6GenRQhrnswBPm4A4JC81LcFFo7EPp25uZMM2b5qNCB6nw8aKSNbHmx8bqRXdtuiMMXTPcp",
  "key17": "5tY2ctSL2SjPwYFd2Pm1r5q4ndzNBxiGg2dobc72ScBs1Zsfd3sPb8qkMsBJV7M5cm2AKocSKH3pxU1cHfq5fQTA",
  "key18": "4Ti9yF9qPLgzws8asVt89Z5npejcmnVXz5cosSM5VwK4nQpE57tocpnXe1dR3TVj4e23jatj1tqQ3vNpZd9ZDSmo",
  "key19": "eSR9UKb2CwCVf456cxv94yZ68qfJQJppP8aRhpk2AHmiohba8HaXYx8cDUTnmhCpHtk1noFU5kbNAGcUgtg9GcC",
  "key20": "4o217LwQ2aM6785ZjxNAyxUPi2G24wp84w6CZGeE5DCYp6ThPiAEiAzhGtUXg5XoHgVQZmXaTyZVZdWejCJHmjyH",
  "key21": "37N9ePBVxexsm9HhMhgoMdeGCwhTsaiktsSydYoBpirE44CEG8iiD1X82gVCMukeNmAiwPzHA8YYY4EoJwiFb1QR",
  "key22": "2GjKsZtFbviCfub2sjSesRz6AMVq3PdWQi1nD8XRo6tK7Er737mXmF5mmv2edq9SF23Aynw3gfNf9f1CpABf9GkR",
  "key23": "4A8frZhaKGx5CyQjDge2hub9F3WrCuCGKLVMLmkeBZiodsKNDmnpTHBZCxQetqHHPT5iTyAs3xRGLwH9yjVZftwZ",
  "key24": "5kUWpfXzQ9nPaACaCr43zZH8xA83BmUdLwjqDTLuiUruQ57579bDqvEXsTySPm9xR5KyYuNw4MP3454s7skAGoER",
  "key25": "3ahGWbC6SLutTfV2VE1JneEQKys2GBQpVZ9YdbuEZCh4FB8ALZDKrGUp9FHYAxwkFDUQCoyoMHFitfLbvnLVGdyw",
  "key26": "4ZZvLCttsk2BEeLR4rHqiaVHZynoJgDN5WTP4LkJTZkzjaWs7A5nYXFEDx3frygAigpJGaRRUQBdKcgu4skEA94K",
  "key27": "5MburRrGYHD2CsJ6PhJoij9pAcvuqFCuQcJdvZDwU2BTNswqgguidXPbYnBGzkg3B64y4AwU7o5DyKj823ZXkgxN",
  "key28": "469MATPYYFyPzUFbH2aBX6DC8TLvAMJqmK6QLbxXtgz3ktiN3seCtqunAUbkR4X5qmBHFCyrnUSaTzu7nJDpJrNs",
  "key29": "4ajWuxuHZrWevxyGsUKHjfY8UD5ft7gxQ5z9BPdSFYhH9sM1Zw1jwPGwZJcbHs9rT7ppwkXuEisCzqdVgrTnGB2i",
  "key30": "2X7YoH4boyXsT7pRN7sRYb8SXfkbdiWzLEynYwDcDKyxEEpAmUr1Z2eUmq86wocLnXCGzNVZRqr6JZq5aidxxHvB"
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
