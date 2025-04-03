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
    "2dRYaA6wLExgerQYZ6EWspnjXZNswjUJRruiCF8fv5cyxVSKZY16tjBoEZjLqkWJZyup51pMcZ6hRywFKT5cCN1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oRG37wGVzMWBeA8ErUr1uhFtZrd4p2YsAYHj1ZhmwdHYfWiVjiLXiNeKPYmwjn7f7wpduan4AKqPeaFBmUDQWiF",
  "key1": "tXfrCEnLKQwf5qDyP82riAfunmMoK6ywxsvADeijr7KpAxdPBaEJXxH97tLHNVhfKVGY7EfdU7D9UFWtRBGCNK1",
  "key2": "5RwvfJDKb9Nvs661ec82tjtpXXcqtuUKzJBaiY2VW3DjNgjXrTTB1o56DpSYBENAswFBn55LTX7yp65c4kvwsY9D",
  "key3": "4NGQGCsF3KA1xYxLKj9Gc1EURyrz1AE5da1daTXAkYcHRPExjMWFSGuAT6TVep2YbHyrxLoKcnm7x2gixaWT8yGE",
  "key4": "2LV49TqmKigWQS9cj3c2ej31fbiCGeWwDmGEmDzDCmBpAje6eNi7PmyS2iEvqnchRgJJw3SBTDTfDqvdvSXVhf19",
  "key5": "irAU87DpvGqTbtZiSqMpWyW7zKt3QrnQ8qx8qio2w4xtu2d2XCB26ED6wCPXwVgikdJQvWWHHvGPue4s4gUR1Mp",
  "key6": "iVLArBswR6tswZwXS7gWqV8ac7CCosDXGw5FSeN2Hmu4wMbYZzoQwneo3cgNYpWeJkaY4Aw7Cytj74UHw4SL75k",
  "key7": "5529uzZgde4sVfZdMU7gHWBpnoQsH6hVoZd9SD7DfZnjYDwcD6bNfc8kQ39i1wGDXn45D1UuysKvjVdPXgjzWrVo",
  "key8": "4EiQZaVfcYSGGPWw6CFpUEpdvYUK5oJPaWaZDohjnG74qZ8PD6zjEkgHHjeRbMnvaSxD6dSNmeEV5HkZTXEjFzS9",
  "key9": "3FCDf5CnDkRU6KC8Cg8ybKv5uiSkxwcM6hvL3B7tfs6ZWuotZMZ5gCL4E3mPVazqk4WQPbx2oywMxf4BHYBpmskH",
  "key10": "2MVHsdqdPFWmxwscrSiRV4qajpS6EyXMFv78CnJYper1qwmgYAywYThbqaUooevCz1pSGN7VmyQ1LuUG4j24RKxk",
  "key11": "2ejZnGNCTiRfQ9ejoMM5UoMnNFNz9xyGU6bwXK1NT4Cm69dQV9qyZ4WPB59PjB2T7J7CPwcmASXEpwTGZkqifTpG",
  "key12": "2LmrvMcJ8KjkBcGAbvyEmoRtKLHnL4Y6LdSJajNMjxtWMjhTQnaNVuALy6Zu43Brdmi3ejM3XA6nrQyjrg4vMmZU",
  "key13": "45DeDWXJtw3KUuDkyH9tziGAuFAgSDeue1qTanghc2DADgsEPkHnKFZWsVku7vheXH9QwJRprErnka2vyaZkV4tp",
  "key14": "3DVdtBCN8Sgcw772rU2cbQYanJrypBwiCEWS3rResFB7JoQvN5x4R8Ma6DhYYbEU7NjZokvGroD7yCy3HTzLFrc8",
  "key15": "yS1GiASAyTANSDKeZ1MFyc5Z6pQxcXWe56xzSfaqr57uDN4Bmg8iLq9cH6yZEgjVT2yz1BuuYgzYhb6DaVq6utF",
  "key16": "VUNTDfJVAzKSVreoayQP1DPkJLQpxFAFNqYXP1jA72JjcDT6RdxuWtvj53oiSwqFycPuXiPNs9uaxtp9NstwsBS",
  "key17": "4yz21RYUje7wDF4v96B6RtfuiVRgQyvLhwo5rP5tzoJpGaHpbEfg7zkL7NmcKgHoN1ptA9XByeYcZdZtFxQ41z7x",
  "key18": "BQnDSWwCEv311Uo2W7rdC6Ua1RuoU4A1S28GCzNoth5P9WPVn3Zx7j8kgSVpL4evrZ71FYsUQ7HGg8GTAND6pk1",
  "key19": "4sKfEZEUdjyY5QuJgfg4C1g4UTQNqXpDxG2ar9a8hfPm28HWPNKZKX3CmCv92utyS4swd13BBzzjtyi4LwaCtGGa",
  "key20": "9E1em4AYhdmVX4CAP5GtWe6YryaRooTcqPoQCCAMw74TwC2NNkyfjw97rJHyvfKZFFc6eRdP6L1BthgQnrD2FbH",
  "key21": "54KnGN5Zk5zXG67HkegVnN87GdRCeWVVZ5QeJxHwQyDZR7XS9UU8T9upXm1vqZ1Gx63Wa2p1zxCC4BbUaJh9bsHK",
  "key22": "5v6YqC122mQ1T1nm7cEKanuMshJusFvgbfizXR5mRHNQSpTyC5J2sGsnHLzzSiQdTuxZzDCRQZgyV8XZKauzdoyy",
  "key23": "2jsnvfhEqDwdFNLPqqdTmnY6EwH7UZ3f2GF8Dnt6A5H39XMsaEmxnffU5kN4zEb2M7kqQSaGTFZ4HsE9UmPdCgxJ",
  "key24": "5xL2nW1a7SNvEEZL1ZSd9g4TBKyPZiGJ81ovZSoJzFWSVJZmRj3TJAbXNGmRGzR2EEWARcrESXtxPCUmkhRcdgB5",
  "key25": "235ah7BaqcPxuycGkqfkajd3jffMT6QK3VyCBArvWEWFpS587npTafV2HXb2MszpUFAbZUDK5bwfHa8n1dxoGmVw",
  "key26": "GaQg2Vv1nUpEsmRujx96PZBqjSQmifCmHHvVdARCkAfmt5kHCCKug3usuZ74kM4NqJ1Uam7RSaSM8iP1oUt4DwB",
  "key27": "5rM5gm3cEk9bkvcgtgBS2VL68M476i9vU3to168sDvc8ai57RufNHXzcycS2hxZSjjDpmr4WbBzYvotEGoeByxkG",
  "key28": "RhAs9PKnERFmRSM1cYjZSnd6BJobqXajWfaeayeRvrixNxCKiK66mVEVbVexKxtCrHAMK18z7ZkGHWTf8YAtXad",
  "key29": "44WuqWqcK9w6hFvmkwgBHiB6iyGGYNFNcErBuyqkfX1QPQeZRhP4B27jYKQuq5ytWp5NpUcVAZZymoUiR7xCw9fn",
  "key30": "3GzaWbhxjWT7YESCfWt5EeDJhsWQ2ryrMq53v6YeCrXe7yqCYxGtUwTfsxHLZtYVtZWWQvJGKjWA9nK85YTVJc5x",
  "key31": "4xqEykJNYndADt6sKHWHSTxAZzCeGNSgu5ShiT5SdoyAMQ9H97C1aNLMAZG2Hp9gEwE46PhRAKbs7Wd43eYWdm3j",
  "key32": "2iTFeyYSYqEstW8BjXCxmvwpaioAn58dw8yFfSwS4wnFssMSRyNZDzNZqNHD4iZ9aqdP3d8vXbwmWX6ZKT4wczSC",
  "key33": "4fbgbJV4Si3HagMi2NdwWv2fad89FRvV3xyULVehiDiMDQXoEZtny4dK4AJDswzmyNZtmU2EGUC5V7DWvEhyGp6P",
  "key34": "4fh5Y37C2xuGy1uRqjbJernoHXPvaJ4UFnDb3AxoishUehHKiwkGW8qtnKxdGSRhcX3vH43cWShfmDrPGpT44y6Q",
  "key35": "4mnn2d53mruPCL5th2gjmQyzj2fKPzztAu5FDyp6DRg8rjh7mnzk7jnrLRcNfAbNSKLDAitCqH8VwS8ii6u8xivo",
  "key36": "2MZVFT2HopqXhdMTPqqzzjhhRQ5xB7MkJCnqVPiSwChw8p7bqLxKEmnEJa2quyU6eWcYq5m9kgJuXvfsomDRhyRG",
  "key37": "2ZBBHnMkHK6DDrSCF8rnABUcGKx7jR9CsUkSrNYrRmKiK8uffXAWLLWCJwscQzk6k57yiwiJye8SZWGoFrjpBu4i",
  "key38": "2wHREAXdKWncp6z6C6mxN7iwznKp7soeNEHj8Ufkr1nBai9z8NHc6bh6t4G7i73PkEvyn5XisoGdFhKAnXdJnyf6",
  "key39": "3SmJxVMpCYDAFKBC4uayba1TiW6kpWsC1qarmBMpS85PwmcYt74U5nUnePmucCD2eGXa6nawxR5oPaAXf9ZA1Sy3",
  "key40": "5rZMcQtyWB9aqnexWeoVPq26uBoFYXpYbdoMhHJRW7N1sX86JsB27Aqizf9gsTTVPxuqb2sEPPTgXEZVnv73TxES",
  "key41": "aKDBqUq9qf4cCThVDaAym6P994iLG8m4BGCTYyP6q3vNLHdimHSjNWjgQzzgd66XqmeEczCSvrBHv4EzqtnGt82",
  "key42": "63XMKPmrdJPxHYA6Fz9xmwSWhyURY82F5UocYHb439cQpitWDqsAMz4foTjh2s1tyhLfzyBgsBngnY2PUn2vPVNE",
  "key43": "5KwAXEpdrMeJPXq8VF77ppjmTXD7KV96R46diRMYMr9h5sJYshVJSGTik929ERXCtomCv5mkuZQsp78kpCnVVsFv",
  "key44": "2kPF8iTN6Ajm21NBeHa1fiQQXw5S5oKFFYZA9TrSKVoBRFYsmrE4LeTHBrop4RGbohDgzFjerPcDCYkaaETMun81",
  "key45": "4kEyPHssas5Zd6S2pV5M6QPAyswLMZU4kECgUBkCsSeAQsvsYjETfLci9tCmJu6rdbj169Dqbg4jp9b9yi7h4tFt",
  "key46": "4sjc2PvZb8NaE86X8EF8ZKSuNiQxQz1q7QL8QYEFFcB1w6e8EnEyqyjSK1PjmxqBBQLYMM8Q4hBm8Y7kbygMm2oC",
  "key47": "45jtDTvLgpmQoLfdAxsf4aEN5QzHQk5qoJFqjEDfffdq1V5Z515WVtnshKfcFxn7jVfqRaTngGBUtwHmX7qXP6ed"
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
