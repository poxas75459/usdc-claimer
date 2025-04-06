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
    "3zdH4hT6dkp7TAZeYtGGT8piVkFkYKjZpa8LUQZVAztzvkJuEnLQXFHgKKhGRAYxbkgziAZTSJbsddGVH6f9F6jB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KBuQNohjhUEVCsU1KbL9NWkC6brxNLda8s8XhyBdeHaYxrNrq5cByyyxnunha7UayFkCrgvth16Vm2shQYQnvDT",
  "key1": "3T4nMGDiU9k7Lj7wRRpGUD1JLwrjjWH54BghWXbrnNCn3ZPXeeLRXaKGk2xdXhNTkdCdCz1qcwsReYXZeEwuRaBs",
  "key2": "2rhr6jBCs6EDEQbHvZ91N9H7Sci26eEHzeCYcgRd37FsAuioquv2twXqe1d6pMv9d71UpfnoJ65uRyVwgNBtutYA",
  "key3": "39LN6hQoHRuPyG3CJDWp8M9fAXcZ9SihttZkoXxGV3sDojMeqNTe8aBYx2KeYnfHWf26Qm75iH2bBUYqw5zpF2dm",
  "key4": "2Zhexx6YJRbRRPA3BxhKPhejQXj4YfWJ8aw8obJ5TMczQGNmtBvNAhfue2CTGZo6sgNTt1Yv8kSNkPZfqN32oeKK",
  "key5": "65UajGr7XL38ezXu7m1y6PvhQzqsbT4yZY5isfpXjcRxLQk9o4qshCuY87jGiEwBme86muoLwUCKnDewa7VSx37J",
  "key6": "jAXoxnCxexDxryoTJXki8m4a8Syat27czfGm1DK4yrGFQbvjKSf2pU5oBZEbNkuAQTx6AUwcHyPBnAJPPtzz6ak",
  "key7": "5LHdhJe6wx9zJ6ebrD5gAGuvCYi21rZDJksivU7JgYmEDsxHGmXcyS7NvzwFsTSEFTQzGC8FonAybRjvLWYRLqKH",
  "key8": "3r24p1F5Ue6XoTxvvTXvCukiKSHqP41zKv8fBKWB2d1u6fA6f4LQC52EbQBUZxiCetLmafXSyiCdX2xT1jMutZoT",
  "key9": "3dwkxcy7Ft7DfSZiDuZoHAiSVf3Y6dkbNcNLKiAaMXHktBfFUvocoYUCvVY7jkLBsNurXQMJH2ztPqB5jrc7zAXT",
  "key10": "4kktRdXWqXoULQGgnHKmE5VAAY69454tr21WAR2djM69aeLYHrEBu5A2dDFPA15i4RqrXsPToSh6cAN8exxXQZpt",
  "key11": "5BLBdAE67iFM7PRF7RGZwyV7JCQGUZkwg33gAr36XQLh7MwsE6MyCv8HLaXVDnNNru7VkjzecG3S1eACsPqFFZHV",
  "key12": "24pacBGKJKHz5YcotdKFJnBHV4wq6YBJLvaz6YXddk8gxujfBT93hmu1jbXDeWQYkieMZfpXvYGxrwBC1CnEqFSZ",
  "key13": "24dbFLEwpaU7R6Yk2gsXwmhGD59zoUtD3hbmAgdo3YTtkiGJcCZomU62MTCZQ7J7Q4w5w1A1nW7KA77FvR2P1Ljs",
  "key14": "4hg9zEpy2ApzmpwFRyoSM1nqtp8jeeXEwp6ejaFvki4xj5FLYs1SWyksrvKDTaS5LLwEcJMJBnE8kWAiAPDU3wf4",
  "key15": "3Yhb12SFpHtqscazCuphgPY9WVPT7ewPz85ayCEs3d5ZNZyWCp9CkYP4YUgtaVo9Q8tTunqZGB54CrMoCPzLyKY4",
  "key16": "3wY4QLc4Dt2xCEXL1oCH15YumFEgoqKCFkDKhnecHm32ZbdVC2RHBe5oVGe6KnvWwbBPjgkdd8eByJtxLEozfziC",
  "key17": "2st3CYMKLhbSYPaZPNrvYwFzm2JmdekKdCdpkAzLWrTB8vjiE9sxA6ZyGBqcgt1aFmhEP4FhzzuSqcejAgs5mKNL",
  "key18": "2UvyXh7poDJCstXDjS6rNu3WdLC73LeB3N9zWVunrgPpKd7L1th6SzeQwLwChYYU6po51ZKgHikeuHH5LNnL1mWW",
  "key19": "DJNL3E3fGUn8nB9EMMsrtQihWZ74E3DU57uomZp5owaWWuy9fkD6Cb76DU3S2LeH5gvxMSdwREAv1xRSGFWmQoE",
  "key20": "2KmVSwLUZbqm4tCboaFtssSw3GxMy4AVAAtvkFZdh9phxrcTSL9aF6puSTjumfsoYED5NWZ6CSu16d5Rt3iDqQ5M",
  "key21": "4iRV8toAN9ghJizhjL3VEe2dLzPRbYzrQNyebbVQHtvjBa8nGjrfCwviBgBYNEamz5pM9TijixCCMNuCKhfzE6gq",
  "key22": "57oEd39J6xD319R4cyrQhVSee3LAUgWs3Lg39tHpeEonL3BVoQorv7FMaMYmPZApN3jwKTS7CrftgBzabysJiWgp",
  "key23": "4UXBxkXSEiHqZ1Eb8p4mJk5WxM96cG8DnmzoShf5RgeVhe8jcSNsg8wJGwBz6WEimVHobbVgBryQU7EnF93Hiq4G",
  "key24": "3Emz32dnUDXaQXtoPxJBs4jzJe2uwH1bqNRP2badoMMfD8vJX7c4GkHYxqRzLKEJSsHeJDH2JwZ1ALNPRxQeoZuQ",
  "key25": "2bPWm8tenMFjG4uZbjFDzZdYK2ZZ6wX34DEnrENi6prrCN5a5VaE1BSLbEuibG8nNZnJcCeWczquzMCPq8yDjt27",
  "key26": "3aZsWYM7TKZSK5JzMAxzR2NyVrqVCRZb97RiXXiDUFgARv6ykA2X3Ry5LSZJtDD6xXEgYMfykH5LxthvnK8sRVCU",
  "key27": "66b1NucgHR4AmmjdwnXyqUzimVSedqjFnrKtSAADtDdrfVko68xU5KQoxeVrjXPFEgAkkPgZcD4bCQtMgHoDyrNb",
  "key28": "2yvPTpcKxTR9bb9uXc5GwJpWZoEeViphoTQwvv6kLR4GDedxZ8M7SeGik2W1Jr1vdkQbveiZhCoT21Y1depmf3zB",
  "key29": "2HsxchXAbWh36dmmhzXuCuTvZ1Tyavz524nVbDsqYszdawkeDjDyWhobmwk9u4FbWvDjumnMXGfyFhD8Xx3xmnYk",
  "key30": "5spk3w6y1xuUkKFYFtLuBJzDDcyW8Q6Eg5DLi2qZurfvMQf6gm3sWEzhwBuFggTGxp76JeeQYzvui7b5XNzGLnpw",
  "key31": "5Pe1h7Bt3R8FvmzJCbbFkJvgY1i235GhBs5hxEFTfoypFFHJoHgVLrwzE1TgBHGXuTMg2ZrqzwjPEQ5pkXRBpKTb",
  "key32": "T7ByiYUXs1fNHSeHaqKBxnh3djDpMtjdN1HE2QTvy6zAjopnaFKvdpxu4TZN6Gab7dJHc4iS5PeHuH3CPYTKnQx",
  "key33": "2615Qssp4A7fwLD78P4hPfZ1d6AXaqDKcKAYSHmdmFGka53jgiuzyhBBYEHARCZUFPiPB5xzwUMawZ2WNkqqw4uV",
  "key34": "2t7Ysfcdpjj1bqVPQDtM2MrV9xLxLAto8knysH13XcaGewAhzWLrqjHqF2oRh2A5jJpPx663zEePWMsawhDGwKwB",
  "key35": "2QuesjGPCPaU3USJQQiUXY5ddS5wnnSycpXgnwp64AJcRgCU8WpeDaAL45QeVq1FMeoFyaXVCbBfk61V95GWzQzS",
  "key36": "3CV6PqCC9wUDsXkLeXDzq6ER3ZXAsFEEDf6nrAeTpbYBE37Eso9B4qVJfHuanyjJ8vfx3Q5CAwiai77LRVbn9BBA",
  "key37": "5gbdQMKBTEdL9728KZHHw5JF6zxTtx3CcCubJZ1vzEJGcgVMsqp6fMmcnWEWtB5dRjvhZ178YpQjCN3Wy8a5Jd6A",
  "key38": "5iH1arX8emT9JzjmLPY4es2JjS9FHvVfZTu8yJdFuqoftPGFZDyLVakBdpkccrHynJmcwSPdXMcXiNff5hMaa5zt",
  "key39": "2mGRabhNnVWUJESwKntT6rpu2epK54jEwwgKnYMK2VL6ixbeEHZxfp48s8ffh5G9jX5yCaTDMhuudeDyS89QyXvi",
  "key40": "bu6EMeadYU5gqaMfYS94zxKPcBznJspo1rzASL9pKqcvJdSnSRrCkFK5W4nNm76bzMqgYm4PAiA9Nq8tZV3WADh",
  "key41": "3t6GkSEsCFim8pxs3NKEo2yuWqZiQhuHc8G96dTs8dQpfmrm12xV7pdeCTXGxiCHybFSPASzYjeMX6DWEn97ovCF",
  "key42": "4Eye3tZfa7rEEXivX8ddcLu6qgk1W6SV9rjdfLbLfDVR6Krmmf4aPdUZKJenkyTb3y8fufhLEEJ3rCKPgt1w69Bh",
  "key43": "3CZPbvmhr12s96XUiQjJpDiaxXuazpEiE9ZShtZHmKtP9hMeFUSPc9J34kRSPYkq23c41bTfCBsL8jtkfcPAmArE",
  "key44": "457vNhEnfEp6BtPFaKuj4sbpKWaaRxncUQn4MeU1ATH4mWFJLrWczSCPcnJwumQ7MgzYndZuUEkuYG88n9waVPSR",
  "key45": "121CrMy5SZrwiot5ByCjWi5dzTr7Epg91KXAMRtH9DU11tQ8risB96PNFXQxd83Eg4zw1RBcDSyXP2XMQ8qHnVo3",
  "key46": "5f2MCfJZzqPps4SsmVDSg5qJrDy1BeMYMb9VJGC4TzLryk5Gr4nPM3LS7AFUSEuxuTb7HewtNbKAnheAVo5fTeyt",
  "key47": "5aTXFtxbrUMgYLG8sQgkgZ4uQh24fSRkKwKsNsEYtPfg8Am2xR3S4khhtDkeuohvsaZVSCJxqN9g2KhDemnw69bt"
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
