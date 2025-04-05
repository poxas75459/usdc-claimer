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
    "4YWEp4eDVnkYZRbVqBsM6xj8SgonJhMCaMZSXsiRFxwMN9VZC3RnV9JnxC6nYejh4jJL5jjKVXz6iejvKmBgCeps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bgfmR6df8F9G6ozNZtuNnWvf2hkVkZwLz22YFrY1VhD1KxJSyQtwArdVbpywCbkZW9iGKKg8GyaVNpEZ8umS19z",
  "key1": "2BNnMRRTncHjkLk5KTdwnS7qj6sQcSFrETBqMa8aKLN1GiRrLK7yEn5ULALChig9xGtJP4nXDkwvHgmLiMTkMLAF",
  "key2": "63VueS6ceSMmhB18eUqigwSBjE2qMZ7uGum9P7o8HK4Q1NQYhpgfrsqxSuJAFjiqPmuHUivvqDJKfCkVLgQa6xYe",
  "key3": "3d2ejbovYVbvVHnJ2nQX1c6SLWWCtP34s6MnEPr64CeSDssEwrf2emMtNXMyKF5Z4aLEUyJS1D2g4BhPnuNhHfQz",
  "key4": "3RMbK2oWazX1RE1PyPjHNZ8tbCqNtbpfpCZnvh64rx67jDgY1bGZoQKCerHdhwgNFARQ22uyiw68RD59nPYd47qP",
  "key5": "4Jr9rr7Az4xxQFDaCR5i6wc9haTcKof1c1YJ4VaYZaupGcE7YEZY2QWrUWBsBRUDkY8eDjPZggj2GeZduTDBgbqF",
  "key6": "518pi1sJSgPMdfgWzCCsH2MDZHL3EV7g6CQ9E96mzUbvkM4HyZnQnLePhXKfQA3PXJNqXosQXk71EjPRryiEfiwE",
  "key7": "3wLSDnrxwKWHvqMLZgXTGgb8Ht248DcmeAoSC3M5n6LWMNj2hFQQDE8FjuUviRWJNHDrRy3KZsTdGtvgr62nPNSR",
  "key8": "GnjnLbqQvSV9y3Vkjm73XnXwe2cebSp3iaHcQ86EETKagHFynnaCMx5SP29PMbhGdhTiAzvfxDyUbHXggTwSBgf",
  "key9": "a5pXBmu9TNM3dq9XRmLXqcsZtMy7ZgvLHoX2Wdv8JCwV5EWUX5fSMW5R9rgLU6C7kkgprm4THJmoQiZAroWuroz",
  "key10": "4gjafgD5EBumyqyVDaWDNZppobQhfRsSXE7F5CeJ5pNwc3PRE3kgQqTdbsAY48cTfJPs5pK1RukFkAvdpE7eMR5X",
  "key11": "31yNKo4QNJy7gpRJFMautRuCRb7XRYHW5STtEfbx786oErDBizYoXMsS7yt4nN8bK4gif46cTQwihAaVafnkXZe8",
  "key12": "3nCh1wTnT4SpymVP8C7iSbo2sccqKFXdrbv17KTSjZRSqKuhy2xdHhxDQ7SqkHWEfzT6GZZUPq8a5V2gvj54jSAN",
  "key13": "2rieJX6vu8GMnkyJoXD9J8bRBxL4p8BioCLvs5ifhiNzb8kzxjtZmQjsQotEPtSzZtvWcnxCGsenypxASBwtjY8q",
  "key14": "4d3iYgLPyT11mvvAn7Seogp1epv48XQ7BNTTpQ475LeWesWSqLKdB51RBdRi9xtzrNkL8z3YAXyWpU9MF7qGJrfF",
  "key15": "qkJUgyjfV9eTmzfroKtvX7igp8KdE2RH5H2P8KQvRp3rRFGXm2fm2NQU1uuwmH7cVYa8oE72HAQCUWjSdFUeTLQ",
  "key16": "42qBk45JFMG31d7VFYkcPsFpCet58Gr4Kasz27uVnwvHka1faGGXiC1KAoWcKNbMqJps7fFKbRb46qv4EVgD8DD4",
  "key17": "3NddmsaoNLCEkRWzxiWFTeP5RtG9qVv3M2kcUAeMEc2ngkjwnwq2UW9JroeCyAT2yfjTUKUkGLTx8YD8BD3nHqtw",
  "key18": "4ryzpaKZYcLXnCRajQ3x3ZeEqNNcf1NG4d83YtBWELmgzeyp8b1JsE5BLqTWJFsAz6qgZ5dax2SkXkEZMkRitZs5",
  "key19": "4ahwBQs58jdL5LoLKErjKhbc2fuvvZxDBamBxgu5pd8LzARGYKUpLyrmyaz7S4PxYvWWw7TEBEeDVdYkscfcptb9",
  "key20": "CjJHfAW1tsQZnTY9iDqLPEwcgtsP8bu7WPausV9spFUB6iGFcbNjUrSa4DJWo76TbiLXjfqBV4TPQHy341B2fCw",
  "key21": "4pxgGetwAxhykzzymKPCz2ic8TEqhhAK2zr7JS7n8C8JRLaoRCtMXL6KG4TGh4qyMxe53GgWXzZrLN73eA3W1Gzf",
  "key22": "a1ea1BdeuNL6fzF2s23yq1rKzh3HG7NrnYnTauaTR4SroHLVPB3SAgVN2ekhmQPEKq76xNWqLtuVTRt4kX7ohL7",
  "key23": "3VKiwGwpTMjpT7hRowQKRGYaGHPHYv2uVMLgVEFMFsMT8zaeSdsP2SKEgoKF2bY1Z37JGvZTG17PVquZmmKzqNuV",
  "key24": "5tVWaUoXPLX2VBcH8H2KipcWv7XKfive5s9s9M5TN1dsuWoDyFyRHZjh4oG8y2oyFk26NZzDJRL7EugH5TYLwe1R",
  "key25": "3fcMdUQgs4DinaMqK3w1uj5PeQi9aw86hzMaqXxnSeU3fs2RV4uuERZbxWpibik8t8hJdmVKXDzqoy2qYd1DSQ6j",
  "key26": "3aEmz4a91YTWWvV7zrgrzhwGMdRyE7swvMsYGF8RMjkSM3dHvJ5UhZAqbYX8Gf8XzC4xK58TMGUG4HrdSDDY94Wq",
  "key27": "1juaEXy6w1B2xbda9TqwA45kYNuyGuUnS6ALQzLzbEzf8Fk9t76eRp6zy72hARZVG9X8JDAzxpe71zjNCstG41t",
  "key28": "5HzQwLCYgwJ8sheezbCdrpLB7PFgwXPc31H6r9yy1cTkZuSfqfZuP69MmVAXUso6zXgVkD2ocXvNurCvBcp5WCTU",
  "key29": "2FumAL3QkBgi4F9ijKYxH38GMxzaBnGjWDw9tYdeGMdSqah8LSPkNztyzsmm7vvUojmDfVMQjDFkgfGCzPngnAMC",
  "key30": "3H75pbm6rAyE4zwRZ8YAqT8QYwjY2hM5Am94CjQi8Uzsq8BaSJGBMEFCfoiUrmsMDMD1VrbQkMQjKVLHynHdb4Kg",
  "key31": "4f3SdGYtg3pdG7Aq22dnn1AUahivQyTKLtQPkCmz6NhkHe6UxsNRui6B2M9EamFStVWD2tS2ZS7jG43kZNwP54Mx",
  "key32": "3EnD6oAw1HNYw3FzKhWqBgxLa9a5C6oA1GBEqySdVnh2A78pnuX58aywnmM23o1SC4yQBypP4MQ57PbXyYKF2DzF",
  "key33": "2kJUPFNgnwTpzzpTPa8f4w3A3SDtMxJc287nAmdgDCPhEjWftn5hhu4zbL4tk198ayG59Dzqf1QfbknqP4PGhWux",
  "key34": "KcAH87nunrGjLRV5Gc35ZjBbxPFawtQnng6eS331P91j3zy7oTWZLiL2cV71bdGveGqstHTMen9oTVrNDB667Pw",
  "key35": "5NDpQTtHFnrux7TwmtAWpFUBbVeJCX73p6gRAdswgSufWUJbgmX4YWazGTzVsms7yevK8XpGTPvyqaoTisk5c6B2",
  "key36": "3eFxh1rUEWNSEFh8ngCqdFesyrjPwUj5pvCRjRJQJMDfQtJc79eMcp71iYWxA6fboZnowgui8bkpjYn36SzxJpaq",
  "key37": "3ghpXP98A5o2TCm2946eGpdgKAPwge3gZjCn3sxkcbq7g6E2UEMiuvZwfAoabu5JCuV2SxpSR1B5CVgiUXTKPg8z",
  "key38": "26qkJro9HDsnsNz5zdrMK7b2VM2AudHFEuuvwRon2UsdG5pxFx68f2xyC6xh8Bk5hREJmXKFxF8JRcB2g8uf6wYD",
  "key39": "3xynBs5RRmN2piVATHjsTMu4MhmTwAb2vaEGDQhUsKRzd3fVUGZJ17SqBE1eJHkBXQReB5WkqHFKDFeaQdiPHF7h",
  "key40": "622wcxkDVcNQg7beUE8R927g219gUo1JeAPN1ChMKovfeY4pxzAgAStKLEvcbxcCMDr9vvbpcbD4akaMNfQzDzYR",
  "key41": "4NZsqg9oUtem5zVVPCuN5y2Uo2f2j1swSu9zbXqxsmekt2wiWvh8EYNLkZjAkuermkTyattD9Zk1TXyyaoZosMQ4",
  "key42": "3K3FUDMB2CzGxQ7vTtNNqPhGCurLwdq4QToGcPyrC8hYGknnuTNF14mXdxLCRJhnW7vguZrw88YtNHvaSAdnUSbR",
  "key43": "2LrtnC4e4czVXWwbsGpiFYyZxzYP7sGEbf7SrMbm4TJ8NLjBxsr5ZDpuLh9PyR2tthkufo6b9ReGA6izBPBF59Fg",
  "key44": "313p1YefYxttyRrTcMzzm4Loc1bvkYMnsBH7XnRsoSjMzK84y4SJbK2cFEMonfjnrGtYz44SaS6MC9CHH8Aa9TJN",
  "key45": "5UUR7vdpjWqrW6mqcL3PRs7QpwVZKgniFHAH3j68E1HWTtQQzMv4qSFPXXYztuuzwwSzcT4m2ZfRnv8NAGszBQxZ",
  "key46": "5fTjxqtxBBp6u5HDkphJ4Z1EzMB31ZgxBnYDJmreMiVuaHcJAx5hzfLyje12iDMMT6tJoHUKkuoMASbf9Wy6WVni",
  "key47": "4m9cjjDwPZRGRp4WY5ZyCSRx83dtNkvZAaBWHnT35kDsE2JMLwUfcLwupLc87mPf1Nio73x9rQnNG17YWCDFTMcf",
  "key48": "2x5RJRB2RFTHt1kDovhsxTrQEKZu3KpeRZUELUtX9a7XSBjvvauPkDta1tHLKtKCZxA2sFjHYE29EXn4wrvBdo7y"
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
