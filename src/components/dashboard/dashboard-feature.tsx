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
    "2Yd6hnqtP3NwrHHwPxmNPTqXj7WUFyHuQa3zDw7gaJsuRMzbB7oRwkCmKKXPJKVuVJP9zRxbKfKcsdZEi3bfcM9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wc6aXUdi5x5gJiGYzVdzWRqFireVdzePNk4Xkj7wDvgzRpZLf6ZXKHWxCTdGr3mqsdDeG5XzyU9CbncEnLRQXPi",
  "key1": "33zwe1trNGkrhU2xk6u4HE7t7a1Wj4ywB2SuJCaBPL9xR8zYKggBfsTMHP22EZpStLTJvez19E6v4LPe2er8gV1m",
  "key2": "xtfHmN9PmJpkDJfMvQxxKf4eB5GEyckGXvy8nvmpaRbkN179YmEmhF6TuJWoBdaULVaGsW3ximuZ5J1YCQLB5RW",
  "key3": "82NR5yURXa29FbvkpXziWtMLNfwBpjfEg2UnLu7GYfyxWpGVM1u4k76YrpgH818WcEsJnBAEFknGgSzxTgVB2n1",
  "key4": "3bKEjs9WtFu8RAyVmpkm8EW7REcdcUGRQv55zGw2FrKR9m9d96NHw4sUpgZkeKXSKCMUpbajUpM34xLGpz5kpRrB",
  "key5": "2dhDG9N29vobvQ717EfPNhM1QRsKK6rUC3oBu6RnUAkkaxUndwVfGkVF3wGKDCjXse7dhMGKbvm5owMqVhhWxKxS",
  "key6": "xZeqBJAxfU1v7iVXfKpYfUWPCCdG92TUNahWjM3F4QshAVLu3zb6mMkTyRU5r2wfHoXg2ZE6KK9fyufvf8ddRwq",
  "key7": "4Csw2nyZ1VReTpfsPh2b9Z5JEC9oyLx1hpiMdBaMp16CLuF6PjpBes2zMXfbtj4agZx89bUhsdcuzv71h6ttEqHz",
  "key8": "5mukzodBd1QC9Fn19mH9xXvk5r4k1KFEv9YrCzcQwiFtHWekb4v3v7QGdNdv7uJpEUP7fv8pdcxK2nUoNNADxsA9",
  "key9": "3V3ENThVkZVHWsYogP44JDQQpzqKXvNeubFZ9NavgqEsvSccohJ99kq122MLeS2ppNyAjGJ1yoALPoDJ7RLuzTbM",
  "key10": "2an6V8toFVMRp5wa9n94kZ7WKDaXnUvgqPhYxdSJ4JxP8FPQcTnLJKXv4AZDFCcp24QpdLYRyrU8dRuVwdvrCLLp",
  "key11": "26UEZd9vZK96NXquzWYTQLp5tAHWxxCfCNuvWv1QoUGFWRmqaxaFfaRT7V9zD9WdVVAQAfsuoLMsTYrqJwLb5NFA",
  "key12": "397QZH6Bxdko8C4HeLSJZ1GfgXPaqUu3TmbPm7CeG6tWmyGZt4ZFSvwnUBxXUs1AjepapN5mCMPR9M3yGJi5vGFp",
  "key13": "3VJgV8sQcR2BkBLaizwtfRFPtttt5RHaq6eMqtwXZPwDs1z13QWad7MPQTABzvBee4JkNgLmqhsEHoyuN5fidvyd",
  "key14": "5iwQjjPNW6rLZ8a5oMLQsYfKDbak9x7715s499tz9HeRAcFjEmpWmgTqAhetxXY6V2B9ENaPhd1qTxdbD8iJM1pe",
  "key15": "43oQZp4MHZ3JQLmKTnTK9NZQyRACJgj3DyvXRmBNP4fQR2RzwYQoyVXKru9xhMMmtUw4vbKEQdKeZSGDM5chueWz",
  "key16": "4v1RvXZmMRxrGpkiwfLVUqgB5D3EE48Pmj9QMJc69Z2GgnsXYesiADCD4woQWZXxFwPjV7YP1WiACrUgeWwkmKCJ",
  "key17": "iWYRQcDbS4mN4JpkccD1k4FBhXYqEUf5gFxcyRisezTFnLc9av89XTEbjdUdkozn2i5CLXUgyYDUKUaKVcRgnqp",
  "key18": "3SLz1V2BWeHj3taLM611mWnq4PCM27izjv8f4JwkEzQ6qeyGvVYw61NEcAcWawUDdFc7ZjTij4x6WNhRzdKNbizJ",
  "key19": "55BmNoFx3MmrXxKiqUUj3vmzMZxhnouUPcLHCQpAP3KbrZB9ZSu6vpD9RCv8dwDvKNhNF4dbHbGRPrtiFanngjFG",
  "key20": "4mBazAJi8rNwTiX2fUnSL8k7XSWBeba2PCWHcbE3uYueaKvGW2CoPcWWWUi7EHWjsLv6SLkLbQNCFP5TNU6RLLt6",
  "key21": "23TeGombbmff9FVomEXDFRf7J4BUUQvBJi5z6vzFZu9Dzi49z4hRFyfP8MmzHyXijEADRDZfhfjqEpt7aUCHoMcL",
  "key22": "5JkT7jVDWRgoXgwH6VkZTH9BjSXt6HCN3EvUYbMd8AUygeTR7WLAHq16kcyEzzpGFKhA3z7N1uHxqXVLTxEdfUf4",
  "key23": "cbPFBNtT9iWhEeyfbrbpij4etEuuj8YCGDcTXtTuLxw7TrmjEbrAVvYJ7Rz7iJSm8HdfB6nzFGHYa3FqEuaR2Dy",
  "key24": "LABTAZDAwNVwsBbMBncBy5iGQURAtAW7spvnz5qe3PoTWQTSHZitt2LPKi9qGDtCGMNaRhqxFzjRJojqBZ7qJzF",
  "key25": "2ihTbBuEkAUpvATXhenS3NH7ki9FmroAiv5g45RzEV4yEPmTzJ19UyHYoSZzPv4Yaj4HoHjZ53DhJdTz1MR68BWV",
  "key26": "48NDw4sAgw2TCaZy7VAah987NAJg58WZ2Y4Qe1kGX3FuSLSdnhaVT7wGTKDdLiMWbngNGmaffqoMNiVAEAGzhh8H",
  "key27": "2pTsagPD59p9zVL2pYZyA2Usd38FAXKViLpqLGAyQfNavVaR6VHbgfgZqCuqztRSAQ1RWSYDcsuyVkNWWHERMXJc",
  "key28": "5QwCAd3WUdw97jms8Qc66EuY53UkyrR5TSiNcUuz7C5TuSmxdozWAcxtLVuFjiEBsk7bqHYUELYdVmuyeYfUNokK",
  "key29": "3GKbkLjouCTUu76PfZByijD8PSs1N8j3rcHP3tZ8LNsPGh7GttqX2UWeeKVEw8Jv6TyXTiL2u1wSadev6JZNAVqG",
  "key30": "4MzvorYwEpRWvcHcNDLQRDMzcpqoXnWpA4QJpTUSmSKhCUGzEBosAdAXRpUXdMujEjzCEkCxPSKSiKcTkdTTxfQa",
  "key31": "4mfXojNqUFnLRi3mxX8qiALQZSSwpuYmridahWPNQFoZ7s2JkoNB5VFSzMECo8XUjmv4hrRqyvhNSzYeSv6tvbND",
  "key32": "3eyAdKsnVbMvhXR3VhvL1uYLSTqzajPLPALPGMUBshCGMnNCbaCzXtZdUBFnJQMK5ep5tqKtQyxX5VHmj8fKJoxQ",
  "key33": "4YYhLWSuQUGTExCWqoQ4xfYG7NZh87472MrbpPwt38Xb4PhM2pSaeDjPrkmaZbzkVTZzCm24sceYcmmcXAGLtRb6",
  "key34": "26N8Tc3BPLAbFY8b9DXFLdziLkPncYc6Sq5HgWammhL6SvngbozVmxVkG6jqPQQ2CNgwgotPqGb7XJEWZQECr62q",
  "key35": "493dyPVee7AusiHQv3xVMoSSrDZ7J37MfDpMXwhEukENNVJNq9QriwfQUkmAtGh88AWt49XP6oj6P34RAh9c986J",
  "key36": "2rGJsF7R4mcWUbAG9CF1B8nrWT3J3STQSsGue7LGcdtJ8J8EUNVTEr7wnSdFJm8KY4Z1GDdfBVsf8KMWY9yVituW",
  "key37": "5SDkG9dqQeSPGtp7copCSSjV4hnyEXwL738L5jLyThtmDbTjd3PNjdJXWSTJRVj43ofKfg8mNhkWNyhGDxMkRQSQ",
  "key38": "3ZNWEQ6VPu1U9bT2AU9CJT2menWhRUt91n8QRunC6a7FmonfSRszWkVA764DvMd8DXyn9YwR1DxTAB1v2hcgateX",
  "key39": "211mEtTEfcf4o2yjvnssKKvNsNJZV7G1t92LQhdCLLdueuoPg64RjGGLds4okrgjEZjjrrkjMHZ3SJRxvnq3Y842",
  "key40": "4b5fxmivQpSgqgrj42UQYXX7p5fncEfYjySzi5ajgH1xBpe8rHmLYa96WDAPVieCvcMbzRDi4Z5tcqtXK8QzNBaF",
  "key41": "35Z9VTammNMSxaP4p3VEkSXQgFi8iHLfPxSyrbxKKELSY9Sd5sJu1dQEBwwcK621HENe9kdE6Q2WHWeTPkjY642n",
  "key42": "5zrxF4coBUywrUw4pZZtH5XTF6eowYjLcKRfDAUWp5VjYZu8vBYcRgM1XorCM8o3L4fG5dPq816wNEDQFnDZ9wuh",
  "key43": "3urfNaVvfNHvDWZDGkjPRojMRKmP8ubEwSs296Ln9sa5iw7sZ4hyfUXMHrGMTW1f6ShkxX9ucZBZgZgjq6m8v1D1",
  "key44": "4P89DWfK7N9NRgkY3sjBPyknxVu58Rf4r69uudnXmiaTtvWDjugUw81AXhBNtWcAdhLqC8zKs6HyUCiMwKEv1MMU",
  "key45": "ngKCta9kqECUQvPZtiKkTqahd1vPLwaerzPFpXb9cMdngcTDpCAwsLAfTmuLPSqcfU33HjvgEPxxrHWWvgrkziY",
  "key46": "65LafLvJnUp3ArVgdgYCLpbS6she4Qs8Gsy8j7zfYKzyAz5itH43pm28BA94zDVGpnpzDE4FVoLBo6mR2xMAA1Md",
  "key47": "5KUamXM3ACtUMVKF79Mm4hkRAY4xroxGY73u6YTgbnFdKSW8KZh1T6TxR44bAuizkdjET4tkBGKsrmT2g5LzQArT",
  "key48": "5hn5puu2rPJQojdhAPd8gpsESZfCW4KP35Ggs9axsoq1kNNEkggtBZAsKa4yMhKnXjWRhLsZYyBMg2EsbaMGHMEx",
  "key49": "44xwK3qXA9jR8haniwgE2JFG3BjAzdt75mdDBSfhP1prCdC9v6xW7oAq1JuWf7aCoySW17e25mSFkRb2FLXVaEYf"
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
