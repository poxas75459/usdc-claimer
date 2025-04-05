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
    "2pJkJGwmRiTTXSeeXSVeTRQb8EZ3taLtRmDPez2x8RgvH3bVx3RNZxFpsmPnMW3dV6HqPBKk5coUTQ1FCwNpyLxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fnJ5138QkfVPmAEpEWh2gVtVJ4LSa99fM8CdKMsWGA9pDHfcvLVddxF1KNygJsGVMWnjF7zGFfFSgooTdk89x8r",
  "key1": "3ESJjtC5WweNm2FHQD4Kyym4wXAgoLM4g8PpUEUJ3xXTr6qS4Zom4wS7QAJ4sejmcdK6Hyz1cs7r5VQCkMiAYFLL",
  "key2": "2mJyUQzBfY6tNu5xScnJtYhw1PN7VMh5jQq8S4upPrWsUafbgCQAKhBF8Xx8L8hvWj2qPrhExBPWskoTrbwscoHW",
  "key3": "N7pQQRvUhyhvZrTH1rvnwcXTDD3jQ5yyqNWpTB3f1pLCBSC9KHh5yPrmeb74QfRHfDBQZL7Y1yhgamLuzozJHFW",
  "key4": "xtcFsZ71t4V3y6UfN1gvd2ibouuRTyqbez6YGWGzSPPpERLD6JhcxhqmM2p5fxwdPRwfMMDAResBANRGNNqjQ7v",
  "key5": "3MQ89efZiDWoBcgcsF5PBzZLx2qBzovJmdcPhA3MuMX6WV33euLNmD6XT6R99ZeL4ccsKAPnxGv9R384kfxZbPMz",
  "key6": "2LuJD65Hg7GazASbTpPwovbCrbC1LmWCJnrXJxSzyxpm6rxLFKsqvf2kn35eEJEa41sxHaM447fDKK6fMNdfPERX",
  "key7": "cuHektUbooq5zjnPe5BJhY6LUqzv2dopN3ojHgGC7syB4zhYwAxLAt7NKFEhyjVKewd6fGbqDbYomxFqZqadVNK",
  "key8": "3Q4YjWUArF5eSwUGnn1H9cxqaMGGd8FGiqHWo46FtRurmXC77AW5fXDrw7oNXNYMadaTbCLqJBFqovtAhBniTFiC",
  "key9": "5NEDVaEGxuxhMzPRJjkgFT9itcB5zJJnrR1FstqYgS9pxCHYQErHvPBEe4K9xCmrmr91kv9m3PFAUWGSSdJUdiiB",
  "key10": "29AmdhgC7LRtqcFXQqoeFBCbmHzYFxBY93b9TfuLKKEHuViTeUuefiCiCDR5S3bwAB38vb4btiPEaw1QvgBV8eTR",
  "key11": "3bisLVgBQkr3XUJMUmNwaP4Ukv6RoHJHGA76UC6Df4nxr5RGV3T3M1DezYwK2k8NnBbd1iw7zQMiemYzcuiiDffz",
  "key12": "bGBMvcBYzPbxCX86bJQEk92EBtN6d8gwKvGYhwNwUfDBgKN4FMDwnknwQLC9R9ahhGeo6tFeMfZKrtZyoQKibu4",
  "key13": "5k4fh7Piep53vowe1Npz2UykdrtPAWX5SZiBhV1PyscfS5sKAW6whM4AkCJXBSAnKcbfWc7XgFS1jWs2X4fFpwyA",
  "key14": "3TedmXaTVbdpQoG7Qq1i9c4sKyFbSD2H1GxsDydvjjKsUtZAgYUeyYVkJCyazLd85FPqike6F2xHRbm1vw4CYSXJ",
  "key15": "3dsPGRUrgWtQWTmsowSQNdrbQ9d938qiTx7F8Px21aDKXa8VZWXoD5x6B8x4uvLj4ZAVRfrcnCtDap4Wioux1Dux",
  "key16": "2BxS7atedw9UMQSsdVm77nuQRdCW6zZSW3nRYp4x8naSDPMyDJHUjdVeWTihjj4tMnCyPiJMrkYjEmFLYTxrWBU6",
  "key17": "ZJLC3Ar2Xc1WdfTPukAjhLjQPSDtdtNpXeP8cTffKM1JkU4sM2BmvDiiqfaMeiLMkGBkNFGQiQ7vsfFB4WnQY8j",
  "key18": "3CB5HezW6NTSaYKZYJGUW7BjKtdA1AGFgzKvaPu6uiqgEEJVk8x6bjkjNGMHUrzeEZbi7LBhCYSk7zLh7rrygRYr",
  "key19": "3JLgYkaxaUB1Bo2pE38X89pQ7pdTRvATFPBfEFvP6NqeF87QouSXfCZmHZzpZzr2QTEeDKVVqTi18B8mZS1BL87S",
  "key20": "4gczSpPFx2FnDqjFSkUpthxqmjBpHH6L6H6uFoEETSEpWhXSWMu7RHYEgeHFpxjpmNXosuZKMMBRA74yaEgFzLZD",
  "key21": "TZCaV8eZjZkqAfsov6tToKkzv1roCtVW3uT3sNXbbVPbHXtyrf1rT3WrWpcA5JfLng4gaN5ZtDV5vfP11FqVNfd",
  "key22": "4wPoUexdJPAMdFQ3V1RGMPUrt8RADUF9oEVHfkAdPh7UA3NREwfsvfQt2D43Cb7uPAhjpATLxywGxsCYpRiAwodB",
  "key23": "3SRmsa23Mh7REn5y79qxEsfM4Xk4uKmY3bsEVBeHAZ6xu24AgHF27mowNZXECT1SbWFSthfUp6NKacKqXvYQ7fff",
  "key24": "4s8hkB5v1V6WX9ZBuQGh436tnNH1dLCKeZvLtKteYVdjFTvLLqHmgCMH5A6Q9FCXRhwV5DRBGJQ7i5YLEUUs8G45",
  "key25": "5ihXavPNcgYjGkQR2CVw5MfeHnQWJo2M9NooBU6rGK6JXuD6ofqMD3X7ejWnKgR798e6DRCuiazKYM6n5F9JDRc1",
  "key26": "24pT8dwiNxjn1VNd5Gz9eayuMUiVYdysN4qApCMDXmUUJgzgpRawHMcczQhigX35QLQAmHwD6dwuH8HPgftdwkuj",
  "key27": "4dLm2RJarduZnZpQwVshowuYrWxn14u6UhmC7jZmtSZdTHPYtWxyBUw9Vq3fV5CQj6CiUANa75jJPZVLUm6kvPAs",
  "key28": "5yggGohvXiinM2rcdm9xZx5Vfc5snC5zQQzeVN6BopwGNfDoHrXYtp5ykVPtWtQtQgjm3eeWaET3j24s6A1RGeBx",
  "key29": "2Y4wdneGAZpaUACcXak1D9qp2hpYE9XP2GFjyNJW1gJwLNeF3TS9RoziusRUEzWS3878H4kaByuheoA9Cxyz6BXW",
  "key30": "4BMDanNsLGqRAewF31837rWs6R3rp5oVRCuuBbTv38BewoXdDMFsJmi9wmKQBWg3hLedbVNhUiHLzmkKzZ9Wgc61",
  "key31": "5QFonayqJ4rQqV8dWscWoQWd8SxmG7SK5XcBv9uDnvra8wZpTtZtEvHXxbde9PXFhUBkjvBozfBpBk9VnEQ73b3n",
  "key32": "5qnBr8gMB2E5LZBMEPsgtiErMTNWyKQYZJBDHRH4a7TJKPY4sTW8Y9U1ZKDpNoXMUV3XM7FwM24NNDKPmtV7VmTw",
  "key33": "2NSZMLgNLzG8LhWP3dAWyPJqsFB72XGAx8RJwXCujbVkpC7wo7kkXrmnstU2Lkt8NaXPMyxHEJUdWeJfpsyZbNsw",
  "key34": "J3HTfXQ1wLz8LHotMSwNN8t1xBT4hEAa6L86vErkc13PtuVU6ZodPtmwuw54RBL8Hsv1CsPF2YiEB4uhK3rQo7H",
  "key35": "4FeX76uvxCrTkyqr1egYjeVE5zRruVcW9ZrgiXjN1D1AdeQmtHtvbNjPsgvngDfR1Z79RYRFftPvrpzqQTuaY3kp",
  "key36": "4zaYvQpgGB3YvBNCEe83DsPGXmSGF4K45tYT3cmovrcczeH1HDKkzGFHfw7FFMNXDjv4XoA519ViXMXhKSAp8u8a",
  "key37": "AWUJ7ehC2C3XQRNtKSox4wo5oD3S6rAS5Jz7iox1kQUyePPEuEsRFvWxDn2Z3chKVsTHF1jVoVNPKqDvi2HJjFn",
  "key38": "2USyM7trDGSdFS9nEee5bwSTb1LwfyjWanRtM9pBnG1omR4dEk3CPnuKK1rREDY3L6b7VmYJhsKV2ige9HcfCtCQ",
  "key39": "4mipki4s2KRteP5hbMARqVgu9ijPdZ9ekUC6UdZGA3J6PqmcHr98VbeD8yrqB95Eiw39hAvhhcffygAsen1pS8Br",
  "key40": "83LBJbhAbvYPZurVu2ga2UDnP5hihJD1oPVak5xUXA1BN3YRsc35tpmULYYRt7rgyCExTkeb8KYLL5inCfr2KfL",
  "key41": "3GKJUhXhPCZmFcgyVaBNHipoMj8mX6fKkGZD9cfx1gFbpiwCgTXe1Du3RZuvobjYUF7VdYuQzbbT1HqAVsGRTpqd",
  "key42": "35yimZLgRfubhRK2L9ZFWzrjeLh4Bx1eZtTPWun7ztGhvgBuLnHYXX9ZGS19DGExcUFwutaoieJ9W7KwY8YN7kiF",
  "key43": "5uSuaE8nxWywwv67WYur8WgvKQnrzkrLUdxD5vL5YDqgtBUZufL3KxW3PTu8TbuY53T4w7qExLRRmqiyx2h1r3UR",
  "key44": "5onrAczkXk6KP8TJuQbpCmKTVYY6ZZ149rNKJfnzpToHqexnDVUjwHbFgB7bQajHkLJm2ePPfdHRv5Fds2xhJ9jm",
  "key45": "2VB8htspWxHPRGzwVTPeJDjoZz5QxyGj764WXsV2pDMoRysoU8iQYP5YyhMaHzCn8kt3M1wbe4drZAvGfWTtKsYE",
  "key46": "AhZywUVK9FAPm7ng8bMoC3wsejo2uWs129As4uGyF4231tkrp7ioCsY1ARTdbZwwvLNU4w5ZUwvxWsxKA8epcQ3"
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
