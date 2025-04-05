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
    "2wmYnxUtUF9cznQd7KHKM2kPZZRg92uxtMd1365MM555c9oh6H4vrg399HuconZqn9WBEvx55UouAkQBpFhkJ21n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XB98imrFtZfpFfMnn3wAVFhQAXQvvgnPdBANep2NJ9DpCNBto2Prcg8XkGxGM9eDzZBQnKoRH6pZ8DcxkfX58uY",
  "key1": "4MR1U2TWcih4T1fhr3uMyMTvuc5zJgaAQh6GmEtdyi2prnVQq25DEeQHvuF75hTB31j4y6tQNKKLMDEsLRQe8UP1",
  "key2": "4b1UEhU1oTWZUaqHZnE6derfB3ToPoEtdFcHZdPpfPErad9B13dHkhGetrwdeRzpdZwAkCixY45StDJasWhcLNXf",
  "key3": "54GyP7HfubhekioxKw7zp7SJ8kq4Wyr3zZjSewkzMP3UcbyJeVc43GXvB1rhd4yaW3NAHbEM3onWYjwEShwK8s1o",
  "key4": "2BnQLvhM3q8zguEJuTSceMf9V5B8FEJXW94svSdpRFryhBX586KwKuahDqHP6dCrB8dFFxhiCVvgtCedkkit1hpq",
  "key5": "2QsVfDCxiCmVuu9L3rGmfsTZ6kBUru7pbe8em3DTzYSkEgQwfsBbToA4RzS6Pe4tyVo9BvhMiRb4xvLKYxA4GpSE",
  "key6": "4Hah1ibeoBygf1pmVLGezguJFmyjJ5kK1EtzD1fB5LeX5Fd35Q6VG5hYhnwE8kxkEDfLBFdiSRsfYx64h6sLRAes",
  "key7": "3r5SFvCdEJyBRRceiH4FGkzV526zTjaeKtA2JQuB6d9GGQUgh7mkCtWV944DqDN7Ay8nX5EvLBacxhmSnZhQvbth",
  "key8": "5i4GHFGd2Gf4H91ktAn7qXH3C9UF4FCAYA84fsCvddebjDovoo6SCkqkgEtjEDNq8vhduk7dY5VR8NzF1AacaE8K",
  "key9": "2XTVGo1dGLUUC4gCJnCoeDxwHYM7NyxvjPjMWEX3RmSxenyQh8oTzRMtjW9aRa11iS9Ak9FGcNwbCNkbxkYp42F3",
  "key10": "4CHpuMtDiupqzkBspyrzPQMMyqyVk2yu8cP9TtHshJNDTqA1w6FVotcLz6fB4m3z8SCsAuhx15TvSxyp1S7Ggw9q",
  "key11": "67Sy9W56sNbtDTJ3vqq7MDJwkw26Hyvix2ZgvUpNK5UQdXupf1ThgnZK57D7HLW2PbRQhU2xH9tNakWFCSYMdFGE",
  "key12": "5nwNUKL6LSE5kaNZ47f5hfmjiHAt4ci4bYngHFTC6oMcQbgemn9dfP33SvgchZ2Lonm5qWx9CbioocSkS2brEAT",
  "key13": "3HgNw7hGH2JQTwg6bWWmWNop1MiG6uhEtkur9z5ss6EeFNGPHkpcy2L9wLSSSsiWUmdBmmUZfWp8xgvhuWd3Bk4Y",
  "key14": "37LvgMcnWP4gPtfGYTNBZXZVRAcoXtTvRiidCC7GXMZ8Akt7ZKQmjCzxUtmfdCaFFWMPfU3R5538UwLVS3FRvnnq",
  "key15": "3sC7sfDxafPMFbwAku8QBUnxBA64hfUiboGFi6LbJPMU2d76UttukczoJowQxRZSQXpoyCv2uWHCktTCZw9GH1ar",
  "key16": "28wEZQPFTVdBx2C9jYF19SdRZEP7VKoTgPoVKLhhyQMAVkceuyFXDARb1XuYMWCaR1s9ZgDiKNNXgB1eHMZeqMp1",
  "key17": "5b6rNhgpXCG1VPYwa4ahWb1v4mQcLShUNEddyARmoqNFqnkLZfDMWetagxByRGGiec8yyna9pDLniFjdVEu4DA7",
  "key18": "2qESB432stN2AHwsTX23W895xMfdZez3p5ufUp1K8rVqivCiCmotfMPGTgMH8jpK6dE4Z4h3YqzsvqRq6DGMiz6b",
  "key19": "61kbUMa7cBRgDAuwzg5Hifd2V5rZQrzHxsh7JRVdfaaK6hrbVa2XqscuTs5iFPVtnFLPBAGNCFBfh2o5AySx4a1L",
  "key20": "4GV7pp4Aeq9uhybU1K5xjPTZ3DAcGHXHHRTWNuswn7rnK6aLWFNmZd4WQGirkvmMXLidhJVmrT9muM1PLdxoUC79",
  "key21": "627acEnA2RucAZT4RDKowy2VwMVTZfJ7WBEi89gH2R65hruydH84WbzXyZzhbeKGK3pANT2qHHZTQjZvVnMoN4HV",
  "key22": "4BjdTGYyQKXYDGErrWR3SbZZ1wdn8wDgfSDTmEuJnFXNc3vZZGkDqNAqzG5qpQCFwsFf5J2q2YZQSLihd8JLwv6i",
  "key23": "2WAFgJTwZDS2fLtkp8QNdmfYGB2mMEpdzG3zYbCojSc4tL4bxreXckfNF2AjWHdruLudXFwx2DJURrhsgu4Qtkmi",
  "key24": "5vMcYJanSRJ7SUCwkovY46jwpL2ZVUdRrq8q8ToJx5r4KT5HttiM2zQMZF4sa2oANuh63gD33eebYQReLQYivah4",
  "key25": "4C4HSzyjJyxcNk7uQSJP3nhe7TazFZihHec9iyqhaTAAgRuovMVAe3dwcT232Xo1Xhx48YVWpbj2imZuQTTwKrGH",
  "key26": "5S7j2agryX8wvfd4gc6tcWw8sC4FqmFJCkphQg3cq2s5FBMHDuqhQZKsfCxQLcDZuvTJkvfmroAubB5hAFfUWUGq",
  "key27": "fRAj9P9vZfGB2u93tjUrdptk4aZokCUG1fST4gDr8usUaQT7mcJMBQrbSBsLcXEqCPEfCnfP5JScgZQpbh7vGQd",
  "key28": "2Ktqgp8cGoX6EWdq4XA5NZbMQJEgqeTKGic4aLkJoPBUUdkFGk6PfjgkLmVYcu51Kv8TGvoQR6KQ8TGMLL2HP8ut",
  "key29": "RvgQGMKcAsezZVPZ6LJDX17SVm2qrWxXht5KxnS8FBQcTR65wgXyeM9NCnhYEvSFzazEoxrSu2M9z29xFH2BaTy",
  "key30": "3cC6fySYmoqBfXGv9yEQafpdEyRHSMS9g3FATMisvLdf6HLtQYeHyvBgyVsgGYtdjs7MeP6Es1xn7ocBhcBGmqye",
  "key31": "3totZiuUhyPTV4mE6P4nPMfx5piGHxuhdQykiwMS7BQshzXDaELXrda3vHEpMoJiTZBSvUNmdkh8NQhSVTWu1yfR",
  "key32": "4a9Y72saPt91BLRrRPhgr9hg9agcH18s7LY8pTpAM3UM1G1ZfJx6vpDAFu3qddSNNEN8M6nUyV4ELcrgbTohDiQJ",
  "key33": "5WbNsLsnKiLfGDkQxJxvoZGdtjp4NB753E5aGPrzNFFTBAc2cT4JBgTMaofr8mz3ievotKR3HMT764cq9594ZcCh",
  "key34": "2dT4hULasKtwYeqBDEu9qMWQQhj5cgvmqdLMWbmZiSyeqzVc3bJB2ekKyyZioMnQXJ8WqoRFX6QXEWNsaiofKmaJ",
  "key35": "2xS7dKm6dza1jAqS77JsWCeCXF4CVuR3hxyTPzC1MVFpuixRQBc8APVeSmHeRPy2QBvJFiv4PVwKszF7vX96RLSW",
  "key36": "3JUgDMFgKFVG9Fed3LtDhvHL5VqsM8pUq5B2yGiGZRs14bD8peHNSZKX5Q5yqs67eQLU9A3mmkogXmrLmq9ebtop",
  "key37": "5HCGwhSRUMwMj1dVN3hWuok7fqAJ6ueenuzsTXu2rcidxbcw9PgUPpmnB6KNsE7DDaaRER75kHdoTyTQXpguZj69",
  "key38": "4BDcof8k8X1cU4rG7NhVJFXVkAhkcJSENkRfeDeQ68TCcKo1JCyB16cCqYzhrA69qNKmAVPoBPND4ZyTboZwXNLw",
  "key39": "66Y5BRiwyGgtbyX88UbFWqvQsqf1D8LxrkdHRhnuwRfr9s1mu7ymAbCARhf2oo3hqhwQRjt25E1xW2fvGK5vLFh2",
  "key40": "3pxtAGBU93kzyA94gdT8SBZF7ECdFu6CbSYbdJ4MQjvEVcnyjJgts27TtKTCwGLfsvP6iY27dfC7xEk2ypNuQbX",
  "key41": "2bsY4q8tfdcVnZSoWv5WbGR3goAgAB4kkaZchNdayonMoqJyGhZwpugLSz2c5CULaPoCBrs7qTHMxbGSWUUtqyRM"
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
