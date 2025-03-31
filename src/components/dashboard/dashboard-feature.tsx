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
    "2Z5HZUFyxmCMdu4cVRoNRtKE3rDW7jAadfCzNEuipkyYxNqrqpiZjy6BCHKutb53NcdYRptswdFAm7wr4vqAQFbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qNGHu6XEfYBPHZjP5gDhwdcrKEygvAutavAy1swVkKpaPR4AS58RZ5duCs8Vqw35kqGW217So6H1hh5pvE3QArE",
  "key1": "4KdrwGree7V1oirwV85PYmsQ4LVSJsnoLFNEUjk8ryrsnF2QNiJ2prwvo3wUjxaB8LJ7UJvKEXsnyeToDv2jd1Wu",
  "key2": "59riwnWYveUtzkJHCGGj6hT8U48BBfdYvToPmQN8x2J6CTwWVYc24fswYEQoMWZ41xRynLwhnZRJFdTJSsp12z13",
  "key3": "3xPVg7rbSrj374sJiNbp8D9bFUjgJnh9y4SMPvCtzqaH557pYzw5vc72RM3NZGrGakpVw1ahS5gTWRQ4aWq5eE7t",
  "key4": "4MV2Bjx7RvXNTX22NZMzRsHPs8E3rzbCKaoaW4wbfnirv6JGxyTTuFR8fuwqj9WozBtoAC224urbkh9HJ31nda6F",
  "key5": "4YP8JU4V1SjqkpukjohaykPQxuiiAURj2WNUxLVbfimLvy3zUm4xmyzeP1BAWVxZugfKKGtcDpkavBY77m51X634",
  "key6": "4vUrYgxpJdagP2D7BsAJRSpiY6mPokAuwJm8jYzMMD3HDk76zNVgj7wXnQwCxiJUgEjsUQx3c2ZkV37jfneppsMq",
  "key7": "3KKL8TPBpk4zK73CZNVAcaWiMaWoCVzXZiRn4eQZuiRzWhqCL1kGn3kLYzeD7i7cLam1rWuQfSg4txPbrdawNure",
  "key8": "4Y2GRBhaHZySED45mE7f3B2EHkQ94UdZUsqwijzVfPP8BDFdgP2bU3YmU5VUYefHYXRmk5zexhu37sC7aR6Aqwnd",
  "key9": "5R42tanniZXc4ZMy2KEzvBRnxUD9fPzta87q5RQrD21gTjdgcCAUnVUHJSXyokirPFSm5wBBSoB3pp9U5bEPDBQo",
  "key10": "55jqm4Tgr3XwD1cYtn5pRukaqnKBqjfRA7YTXwphuG8B8jQFrS9Yf7TUKfegurFarVMz6wMGkrbt8BFaDysKKatW",
  "key11": "ZNQHCf79MTfPoEbcRopv159YGCETHWBn3Y5HCYHUh8CqAP1aiPyH8o4iunRSvnYxJn8gJXYd4zqh9ma7mcBphzj",
  "key12": "5k4C4MEGFZ9VnjxkN24qbBbHhrtJYZUCXAdWASmMydy6YGsxwGRAWKHECPpMY6EmpAyVt4MrJ6xcHEonkWz2rfaL",
  "key13": "3dv456aWX7C2wXtugVxpQvtPQJSpXvGjgEvbMyDoVGjdfGVxTPiKrYK6hWiS5ihFiLe6kQRJzGZkb8s1X8DcQ1U9",
  "key14": "3oRTazKS7UJ5gQfFYuVP5LboQmoAPivyhq9KuwLE8PuuP6aKNnrrPoAKSXsBymqHerGFYHC6ja9xTBYy2RpRbmvQ",
  "key15": "4HaJSCD4JwWUt57fTwUBXny5dtWKJ95PrKMMVYZ3BiYFwW13Kgi2kkq54GQn3Smey5dwB7giY4vbCMzSwTppVvHe",
  "key16": "47BXHHN8HPvwANd4AeQVydNeEukaRM3Jhwjabp76gSrxZobD9CZbxLXi9JNYMqWhGEqT5GwDk6e4k59w9QponAoL",
  "key17": "5hpXpq5VNccXJUL3QHTiYLA6rcsUCLiKjpEjYLbhGMzy4fFMkLcL1MuxvCQZx2Sy6kUKJ4zmBvgpLLzh19wJNpig",
  "key18": "4avPBBM6to82vLqwELSWGaBJ92Lis7ctxTYRiTsy5NvQQ9RRivEbukqpojSnZuAHqzDvUFc5xz5UhsZ7dkTX93Ui",
  "key19": "2SvU1e9AjDFQqaUoxGsbqjjQiJfHZrhPNxju12QahMirb7wf1Nz3yieVh4czH4eTdzGKJqSF73VUpLug72Ua2T8o",
  "key20": "8sMTvz5kYijEryv56zJRSuek6fSvGWF2sXD384inbjuLACVLXCGDxyUsH4TpgMx7F7ZNoHCYc2FjbG8rQGik2A7",
  "key21": "5aVS4HwB7FU4RdqAzRqY3HVme13cc7vstoZLsaPmRaALpAZSiVnh3mXap7STWwF7WJ4ij729eh2yd5gaUEKywNq7",
  "key22": "66StSiTzPw6UqGZZKho49RYAEo4Ajj93dLjNCBfXnuaCPmZ1fWPimt1a5ojFTySt9Tu4eNhooejtmxRwcjA2uh2X",
  "key23": "5hg7jb1x8gz1FsAup5JSbtd1Sc3Ef8xV7sjwvXKzFDET4rqXPbsZAerjXcvjnnPvQRCWv1hePx74pg57ybMa6Fkf",
  "key24": "3YoviThPht2V7uF7Rhr6csCDqsv62BWTZdt16hMkMeXgYYmxYShVckgFjsPUvHdfBgjuyg7p9tfUxff7ChhvbEYU",
  "key25": "2XyFLtyVrxQ3DKiV8QUfH43u4jRJjgcXq9umoSThg5LpW7rRPWSGpiy2mN3bdVGZzxdSPbqjVqjPqMFBUsQk7WtA",
  "key26": "28Z3YLsUx2k8v9kTf1h9NAnnCz5fG8ejkd1ysTkkqNorDYoyep76zcgrBgYx2Ud4N11pkcqGYK9sMmNUXAW9Lm5i",
  "key27": "5hAwaFELx8e7rEAzyjPpmS76gkYZSQJwSuaa7qJdAJ2Z8SRs3wdiUNs2wxKP54FvDYU1eTuSPhehgCx5PCFFrJHb",
  "key28": "5dP8LRZXCV79CHxQMLRtgo8DLhHzVUcPh8d6yvJFjZtUBPY5qX18Uvt9k2LLSTC1MqAm2Dk12FPrPzP4rmYV7NKk",
  "key29": "4Mj9T43hNMpGKrPep4pgvXGsesg2s63GTQQiFUQzb99Qn7H6j76BaF2UpsACf84pj8sUN4XWonaMr6ypuCJr83zP",
  "key30": "ZLQ8u93pXWbEdNdQjKzBMgQYUsdBhFPM2NWSpcBQC2zWWjDEkEXeYkj6xdUSz91nwTUMNarkvthJPEarCpyC24Q",
  "key31": "2CMbG9eJ6x5U3P9PzdJS6QEt72Qa5sJZhtsS7Nbotk9U3G3pwSobS1pgHwbzpbxVPSddP6EXcwo3WwswB2MjPaDz",
  "key32": "4TdLC9FWaThy2w2oqzHi9qSf936UUvrryfGCovfXBwBbVkpFKSgyCHz5Rky6TwTfQpUWd8PVrXDs68FRfbyP4zPg",
  "key33": "5uivsXoWNRdnkrhBetMrazuVS93dEtfXKJxiUVQuMZjkKEjmFcUwyjgHumqq67vR9he7RQr5DgaaMS55DKqChg1U",
  "key34": "2LMGzB7fjrpJbHUKXkex8qG6WbDjL3Du1J8SgFi2kVPDuSsA25y16aj5VZZBBDmKnfuTgakDQPh7p5gsXDuX2Nex",
  "key35": "3L2dBwFZb918QAMhGCSoLnayafufLjM84sVwQvxGXamFyAqvQ2KTm7xwNbYPKSjMhuzSLPb96WNX4LmUCGs1Ur2E",
  "key36": "3L9Qm7MwrUX32A2HZFtMuLG7ypaL3xtNxmWzRpckeRRJyTCRMt8bp5pJE9zb9mVACN1pD9bFdnvmyAmMj9cQvTCC",
  "key37": "2Pxise72BS1Tzj82EXdJSGLkHGnbmqFYBdNMPND1hQS5pWkU9JGyJJmcjuGSjiRtD2ZBowaqaj8mNezqWTyH62mm"
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
