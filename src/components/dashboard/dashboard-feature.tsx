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
    "4pYAPLMQhfMDdGaR9Ks2MZ5Lz5yowFiD4VNFPoSMmVak2kiG8yubdd3xy6tCxykV5SAxDgLZqP65KmwfvW7Qsnr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nZ5YXy1T1xqHgMVNKP2k2k3oVjhsKRV96eJ1jpXuJURB3o8xJVMqriWrcQg6w9K1hKnc2hWDSCWxJRU79tK19jX",
  "key1": "29CXRp8RGrpHG7TNiPPvncUVah6FLm9HDmu9puTeGrqxf7nbGPsjLjsSbmmPmL5m6BmRdw9M8FSEdbq1R3WBskkx",
  "key2": "3suLrP8W5RwVqHmYDemLoEagZsZJ3vW3V3in49jG1i2Lr2EqESrNH41hPexZSpcizuKqqzdQBLM26bh5w99Vq9ti",
  "key3": "z5zGRLHXp5qfHiDxeM9c5CfuRz899g77rkXHyBSFz5yRBBNwKVcESmMeDnz4ziLje88oiLtz8sxuBV29wWp1UN3",
  "key4": "4CqLrjYnr7Lc5x97HjcGDXTbcUeHg5cjYiobY23PfhQDtdUbyC4p7ojE3ZXfFgE1Mciqx7P56EW2XPsn62yHNGCw",
  "key5": "4zAsHnYnKwKZS53yp2fztVwhokB2XUWy1WzVbCHS3g7DNJ3dsjGeBaGx8C2poL8LC6QTPPYZgG7hDdphukWcjr1P",
  "key6": "39wMQ3W6AwEdNrZh4WXZwqyAy2Sd4rSWtHDBzb3jZvPZgiyEGGmS71e4P8BzKduDuqrZzUWm2BgL8Lq4SckaVRG",
  "key7": "5fhCorJVzgZxyUiD7LDUFXsXEjsoz97LWRVFAww6ECZU7jqzDqCTRPjbvLsU25p2igcGP5i1EB1FJVfMdQStsiJw",
  "key8": "2LZ9bCayJUdWtzqMZaxUAGwLi2rohLcbUU9L2c6pH9DQVjfup1u6SuyCzxML1th2C8qN15P3XQraR527nLxJYw5h",
  "key9": "4tFPScqMoMo3vQcdDYR8yqYoJupCzvtr8UZrFQmpbemon1WoGfdVScrmxQsYSww2yEjWv56sCbaLvgRn2S78Dkad",
  "key10": "vd7rKASP5VuB3ZQjo6QWMAcLs3mJodXxeeJkM9dzvfBhRSudhe6zWMvAgh8ykD7WXQLY8gNT41stHEybHPUhMb3",
  "key11": "4KygsAUQhwNvWWPmUNLQrciLRxsXF24EdAo2Rv3DuS3f1XtYLeX7KREMMZfXPnh93Xso5tFpd7nSJZmVnKfinzBs",
  "key12": "ZZTN3ghz7taCMpucjCbrzP26JK12ZjhtBt56bJCGzvsDkwe6J7mm6kHms6GAbiDWcbjUgQkuY2gyYJqPshPPFz6",
  "key13": "3KapXu4q4c4JxaUd1ypMbytRH7QbBdRep9j7wRunKCthHmemGMveGuMjh13dWZifUHxNhfL6i8uQ9hGNhC6ZMod4",
  "key14": "5nXpho8vob32axAEioChr4Wy4SYFb8SqmhRDxC2BccirpD2SvKTJxN7yS1pZxVUar8LZUFQ6xUi9q3tYKFLGYpuq",
  "key15": "5CRwRWX7WetUZnY9vhWJfQBHuEwrzkRbfs9xVrQu7svsrgeNyESprvtqoas4SkauD1qDtz2nUJgBaMyAY3E55H35",
  "key16": "37h2bvbWG5chnhqDm6XVEy2jaz5XAdP61S6BTFSu4zdLtJtpk5LbakyifJARkWNdVjA5pxYWqqYPYviWnK5BeWbi",
  "key17": "64ywZe3dDFkLnQ1FcpwTZT34avn7Z98YPB8J8YmLtuG9QZoRroF2nLVDwpyvYWvvszpJnak942ckPqtvp7XBSHCV",
  "key18": "5idTJCTCjZKtZq9AJ3Z2f1o99b1gbPwfd6S8uXehZVEbY4Tdt2ZQz6D5ERnwP5a2f76rcnqgc7WrnhdxwgUVhZPB",
  "key19": "NK1fSgJHYtNqqr7hQUyKiiyTnRX3FnXVmEEEV9YDUD6WkDDYZE4fwgpyx2CmqqVos5opE4qDTWWggSHpP17xYbu",
  "key20": "2w5PEb8DKXZD9fYo6VXnFoju1YSVPo941bNVwyN9DsJAhPijrtSnUJ3p6brtUe7TGAmrNBDypEwUhm8Pie9WMKBJ",
  "key21": "3j97moBDGCk27gnnqxRz5C1iD5jkVsXwR9crMGZydPprd3NNMd1J21KVUNHUTngFVPfiYJi1tmwsNoAtEmVZgHhH",
  "key22": "4HxDPCbG6uxMwcxVMDy2yCPfZB96CWy4xUkr3hhbQFg9KV8NQ3NAiDDWFymF8rMLBxr2yg24upCxHwDrfEXw1r77",
  "key23": "4k2pEXCUHZ3uPBvuPSkK5vYRuh2fxjDEGZkWzAqqzTjYVyY2TmXWVvH3E3FQLsVBXriPMidhUp6N6qEmdBn9vjKz",
  "key24": "nFrxB4s2nnVopZC6Y7U6v4iTLpwrmsfKZVQ5r8j79GGb4ZPDbb2Vjg2WL6R4or99D11C4DgW91aUF1twAi5Xgof",
  "key25": "5Gmgudu9SFQiqBEp4q2xsFcjk57fmFFKLboQE3LyE7fE8Pc1i7tfYMCyMXSkiU72tEyttDcnEB9oxr5CAXfxSfaB",
  "key26": "LvFLwCskS7wKspuysKzjqRNcMwXpesR7ymUXeYqUAoybnN5FzpdHyJDEw5j48VsCvyxep1hxz84nmPJWrsR1MCt",
  "key27": "42DVLeKGn3ifthTpd1PLvRFLvfypEMFCNeuLCx6G1VvpsXnSZdT5tRB9n15JTF6nseAPVycQgyY1SdJzwRqoLSNw",
  "key28": "58T72Cp5Tqi4kGHPCayyJU4a9kzvGjzKKYhLJinLMmP5gG6wqzXRBrn3Wmt2yY9zdSyLABiKVmnXrGLeunC8gagL",
  "key29": "3ZW4j5siuAeFRc7QCnPHTZttzAneTg3A847KojZp23fVnaRr6Pw5VWBJa325jbLAUcwcSFuJx4vxGhxtAiVo6w1t",
  "key30": "65yQJBpZUh1M7if7krLfSEA5sobFdJ9DkrpMsMVs7C1wBQ7p3tLd2WfwwTbcqkL3uZmSsaJ8ip6HACPnkrYpbqGp",
  "key31": "5qY9ZZCeb7RHvvEzXVhpcBhZnjsiECb3XgkxmquVfMz56CbtGrNXT26o78EjFrcpCfBtjfkKPbzdhJPXsj9DxjnE",
  "key32": "4kGvRUP7giBVaSkK7aAmeZHtdoy4NHHiRfMEoowcB5ehWxeAzjXwvi6CxCXPQWcRMCBKp78nYdQRkdVLGabpYyBC",
  "key33": "64zq253NQb8FShw5v5nWhhPxQqtFtvkuUh2XtAWRs3YPLoL8NG8hM5HmwiTJU3obbeZTu5f478zmrkp2KV2xKX8V",
  "key34": "yWfMBWS1Sp36SK225wWVzKh96Wu6SoSKSUnwZsgQpA1c1uZ1JsGyUgaWCqEJCVAAdgiYqW1Ls8YXqimxYcxVVEg",
  "key35": "5P8jbXHCP3Mjtvo3ZC12cVxisvV4NJ9K1yacoA6MAPSE3buCXrXQkRaT1DoHxNmimAHKjwXustdyWbDH1ybdKBin",
  "key36": "3sTAnTcj7xf2L854kRGAcJYsLCZWkFd5MwZAGonQBKjCwF6hTW6BEjX5TPBWm9LVH6QEL8BoR7TbuqyLvLckGDHn",
  "key37": "3a7Pe2mASo9H9pwY2TdhkWJrpYHE81h8eRGWQ1PnDWLLu4GEm5JYQK8MdSqqkYf5ZtE7DmX8BJe13tkmRELy8SCg",
  "key38": "2XEuRrbFLWh9czeQPoFQm4FeYA7GAZoS8FfGQa1kxuwiF2Fp8XghBUVRQWvGjpQCnteC7m9cfsHdLDG4w6WhZXpE",
  "key39": "4rdtwYEVGPjL9E47WjMnYTZP9zFDdg1Qc34tqVHpKjDyEcDax9c7zdmyXd6ZwziwLFxXSXmnPd7j5PDJYEBH7vdn",
  "key40": "2HHAwhK5F44fV1fAsP7NK4HBrTHm5xFfLWFwbidT8L94VTMhENLGuhfdTTi1b7SaMkjjsdcEPspnck31RzFnZ3R",
  "key41": "3GnfS52d4hQcfxxgRywbQbunNKe7xejkM6BaMWiqpVzhSBvtuyNvoYRb38XN4KQQAWZiBeffsdmTEjt7Uffaiwwy",
  "key42": "Yg1ngVrMP1pzm2h1xDsnT364cTwUHiFqw58CxiTCsaok2GWB2RWkjQw2JotAW7KcmosgiwLLNWHJ4x8W7xj8tpo",
  "key43": "5HA2SJ6mUDm9MWwkdQFfXgEaGTSq1DvhHxEDKwMNrC23uVLsGbNTT6RAmDs5bSak2owcH7GrhobwoPhKCLjJuXau",
  "key44": "3xYmAqdS9GLeNEa7gMtwtSPEvPbobLSbbSir5MoALoAx5R4epvxxZsBEPSj38M2NZfiKoiwF1CnWMUcjnkWAyceD",
  "key45": "2JSM5W4dFsyhdsDyiRd5zFRSwkbdzmvzNiV72bDxrzrXD2mKGr64Yqe8jRszxw9zi9eTXAwHe1nYeK9h4qpQf88w",
  "key46": "46qPt2tWKCnnWMKqYC78kbbU3k1YLjbKUYenEFdsAAhfmbfVdBUfCMdSyVWGumGDc7uanwCd1zBmnCw2sFLHwQkA",
  "key47": "4nvX59DCtZMAk5GG6wshEjb7HnNs4V2Y39TAhK6atLx5KPR9AB3hHfjuQj31TDckH7eUfyTUSbvUUCtNGBTHaMZN",
  "key48": "5mD6qNeyAcnfYueTwzkGmAeuD7ZuqPqJXWfyrWzX9Rc4hduLZDzLtdRF8eoMWXaVMdTXWSsfeafrks84YERzK4PE",
  "key49": "3U7kGA53D7UPbppHfSBZCMuKkvpZVdbpUHburomhcz3zWGTwPhGzjLmJ96BzcXtW9bZN6Mur4LJugqfHhJdsHbrN"
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
