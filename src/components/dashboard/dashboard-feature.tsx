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
    "3xmq6SnrajPbGmJmWs7uSzomGPAHnFbSywETt8qd2KJXN4YA5h4jvApsfBWDNibuRWzP2CcKffXWzCo9KVtUbZLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m3zeKur3pmkTVXarFttNwAGutFTBpwm7748sG3xpdYmEtxcPjxXCaQptfRTdiA1rgtZeDb1MMijufWoXR2hJBjB",
  "key1": "3xeeVj4RHCuBfQXqs8ztjMjW6SwKiN7jXAKfXnsGBQhWRpvcMSFTRkePGYcAeCYYnmhWcj4JwZPFtUDYr5rhyWtW",
  "key2": "3Z8Z2c4gps5d6XbjFFst1PmGpMaq8SBCepVjpgz6YXZv2ckuTq8QTu1rM2ANFSXfmuvSeN8Fg3wv7NSdrQTYscy7",
  "key3": "rxLtwe74mAhDb6uGevGJR4ggbmGehYKFU7kUZPghb78pKWEsRoscvFP4R3zucv3qnai2cYXZNV49GV7kuTYppFu",
  "key4": "BiMcgSfqPXWX5sHNhJ1akQ8jVtYa2fdYqQQ2DhWksP1YWUFqZwjseHRHDHhY3ZniQ15grjcDegGxgF4E4htB6dU",
  "key5": "4k2QefH3byh4gbNJ7sKgxaN2NcvKeC9krr1WvtmJNhy2jgH9ctuZ6kvRz939SQVABEcG1PJA8bejELd4yQPoBLPx",
  "key6": "3xfF8x7Y3ueyktW7QXU9zcAE2oESh5Jgoy8EYLf9mXnu5QyS1ReGKy9vxec4bWyfVr8J62sSZCXxLEcvcXuBcwEB",
  "key7": "3JGoWAk4UcpZsf3B1TQp1bFSEKqq1fEQ81VXDHK8bZ9u9uRkVpFDbGm8uzCk4TP7notWZeJFmgumfprLR8XS6Ffb",
  "key8": "44EA1KVUqmM6gCx5Ebh2GNDfArvkj7xM2AZSgFZPTgpWWo11fCRMqF19J6Vj5FYCfhPuE7FM7sEzYvNpVUCLqhwn",
  "key9": "5R6AtUZd3QwKSWJYq55pMU3pEMBMzdhNmsYKKNggtVzNo89BCfsCyfPQJTR5ChTi9koQN7HYitFxF12y9cv88Vh9",
  "key10": "636yuu7iiUh76agU844jcxpMVTriTCpGyusCCE75gEhpSPTvDk52Rq6yXwivnPGSZr7ordQ1kFsvWk1MXx9vifDW",
  "key11": "3DhC8PWJxQ2EPqsACSUwwg5Tc6vqKXZhy7SPuMDeh7xjYJXcyjW3dsx9acwyMnR1LtnffdX2qBSm5nnzj1Fv31sk",
  "key12": "4oHReqLPicJ6BQ81BRUt4cwwAvb78t5dtPPMRKP45RuuwFLLiYfuaBecPQvxt46QQVcLECi472utHEnN5cxNmSt9",
  "key13": "RZKx1H9sKoefkCaC4hSD3x7r4QjWa5FfJFNxvBpvQvAFr1kjHj5JBAiGonSqFUhWGdw2NFyeUAFwa3LV1qAegEA",
  "key14": "RZgqL4DAwRD3EkU4i6hdvziHhg7ixVdGDRrpiAUdzCPUKHdy99izSM59g4YEY1ZYKeMpBvyuHF8G3g1uvvdj16W",
  "key15": "PQNSqJ8AULPrRfqHnX2fFYTq9NBGqAwwE1odnqgpyuc1aM4qxPRtipnBrjVMi3ocWzrASsH1VbnBbNxynF3Jj19",
  "key16": "2ZvcTqopF6KJYCxiDkapjHe92enDtcPVNE39pBU5bQiq5ULTFFTF9q4oUwRrySJMX3tkqwTqoAawoU7x3aZyYApz",
  "key17": "2CAgx9t4FwGBR4uxAvCFJMg5tL6ZGcPqW8wfa1P1pYqAtKyp394nQdjLVpdypiLykDK9rwKewiYxHqTeRkv5R2dz",
  "key18": "5oUbp92u6X9cK5he99p8keRJoLfnvgPK6Ke34hko1uwDydoYF5vbhM2KSFfdThdTebTsU4j3dBbAehH7igQqJAgn",
  "key19": "5KBWFpJr9irHBowu31aLT6GPiXAVn8XKhsi1LNeJBqmasJLGDnEVZ9TpwLzKF1kpVy7ZRTuD3JcDHoJqesvnBrQ1",
  "key20": "5k7HQbWUj3HM2MBrveTEjY5xxEa6tiiWxVXt4no8jN91t41kK3Lk1yY2AzAuwrnP7BcRXWkktFvD2woVGHDZ7jqE",
  "key21": "51u2r7tXnf4xd1bxbQ8SF4pi7S5ko7BRjRWpShXRf2xBcPi4qcmVx9kKrFzQ6MghC2CFa51h1znhK1BcvqpMgucj",
  "key22": "2at6MokiuJAQebG5DMb1LmFHL9QTxMbQFJJ5TsVp24TVpvebMhzfRgS7FmGcFkwkxxsGMLT8KcaCZiktgdrMLvce",
  "key23": "55EC5QGa33Q4fAk14CD2oD3uG1DKqTWErcNECbppDTcNuCNsXModX71hMWsau6w25kvHNEiHSi8YmMExUUqyGsv5",
  "key24": "5hry7oyPWMowKHKCsVnj5uXNP5SyexpF3LxBF2EacwgzjR3nSo5Bvs3CdFEyLqa6zsvnzdRYrJNDTBZ3gQZRLPpr",
  "key25": "4ucdPHaJZuT4uQWAvPE3CTVQ4vfHVZ1sCjXWbbyGH3ZZq3JV9TKcmDXsVjFGxeYPhEx4QdD5j5V4VWWhKmbtPpmC",
  "key26": "2sPRqz1mK4oQxf5vxVTLtFSwiDHHC1D6tJtDKJ8amX5Dp99MQQymCbFYLVsxhd4ebmq9uSM6E5HkRF1YpvAvyEBk",
  "key27": "4D2Gy1UNe7QyDegbwDENyhYUHcEmsQBPKmK4FrMukxpvKNvtUmfSNhuP2xw9upVTcomx9QmLmJiN41LB8cQ7j3fc",
  "key28": "25xPAYoN454QYPvMRPL6LAkzisB7aAzea3LtvopaZr3D9inRr7ZFxDLh2LrNUjazeiRLVC5Y5ZrSpbNdAe1c1F98",
  "key29": "zN5y82RuQWw5TyygJdKwLs22AyDBPw54kNitiorGvYrVNcNoapLUYwnQQxhNN7eSeTaKY2tTjLTh2h8WyeK2Fgj",
  "key30": "2CwkefcyAEDrswGnRMQ1n73C7P3fogQCWZ3v2LYnLrcH7Ca8BLypbt63431tiFJwUJNL4BXv1EVr5S3JuaTDpHn4",
  "key31": "p2NztYLMaf2jcBe1XfzDPjXUZDEUpTkZ6PDFfs8XJWN9gc84XZU8MPzewUMWrAUJMg5bgn2Cr9btgNatFTo6xGF",
  "key32": "3AvTND5Aq8ha46p75iSy3rwoNFLFvYb4MEBhegECr2a97ruXcZGngb1jtxoQmzufMUapJbF2aseiwBuwm4Gk1NUH",
  "key33": "3UujRS8bWcRitoqCMSdwX3razKZ4wWwy132aEcABSNg7uz8hYBZ61vUzYtJZgbvEhCQcWTuBfkj3DuN5GSEjiHbd",
  "key34": "39YJVh8uzuvrZvRECB2jSSYurmoij5hyzaDcMJF9JzxLjt4B1Ahyoygys7M9MxeD7akLx76wWmvfyWiSskX4M7Zn",
  "key35": "5DSkhLTtc1YgX869i25c8LYWyy7Ceh3NMEvE24DKY5dtkTmjmvv6ad5DkGcvU2vmwXxMuuNVrofcDa4fkWHLMrNh",
  "key36": "24RE3aZBg4UcYFoG4tmzgHXNQuDeQQUNaNuZcrfcCgJFKQ1dHQE5mAX5CieZHzuAoJhvXDLEycdjUfQzsfqmKcEX"
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
