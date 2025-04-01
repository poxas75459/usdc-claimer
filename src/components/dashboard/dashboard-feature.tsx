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
    "2WFWw52gfXZgn39wiRCk7nuHLqvKX8YJbmSKxV8vshoUQ9MgyFdd2P6BGhqN68cP4NM6SK4zMsEoaqSGay6xx6rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J19RqVf9sHY8eQ4KAZp4aCE5yH9mSs2Z67P1scWAZ2vn7HF3WwBvRVQcRTx5r2m5SAQYQ8rbQRVQN9b4zFUnoxn",
  "key1": "5uB8bv5opjsGnRotZeHuGfttV3xqdB19dZQhaUva1V1xDy49tMDGbk7MapZcooto6zgaHKpSgXr8FjFQdaCkX3bM",
  "key2": "2W6Hc4vaV6wvPAdG3CwdGq3XH8KEBotLCcwGCaLP2WtFrRyqq2u1KnNy7KXDy7ncBNQrpNiaoR7uVtGkffVawAdh",
  "key3": "4SHd6YzC2xsMgrGZ4hNXXb5mX1jJHQ2NoF652riYyHVSomYYmyhugUVqBYo6pK1dMYn1uaTy8UCQRMefTtcXP7Ze",
  "key4": "5iDdDmQcFDuJ9kn7j7BE5vNAXKEDaS3ZU9gBuRtsoqinEbtG6BUEXTYNZxEQ3oT5EXsfnJEPwJbzsJbm5EAahpSD",
  "key5": "8sSy8mVzwS8LoMycUkP5qeBnZ77YWHAwzF6YsAQAivkXJBUe7AVfL6G4AfyUBAngAaACMf3UWnCeffn5XpxHeJ3",
  "key6": "4arqfwL8v239NVoGTwSfK7qR58YHCaBHshW66z5dQCLu5SwpsJJ2wEcdKhEeY1UeYz5jTsJztKiz6RrnxDp2WKXf",
  "key7": "5PBnFPvqYPXtRcrsFQGD7nTpszXRAKJto9dVzJx9uymnMxF9qG5KeX74ALLHUZWQ7k8k4gYeajcdFbkCi3U7rmbu",
  "key8": "24njp4F2FRCfZjfCMFbPN2aUkZPJXYzRUejbXTfkeTa8Z57wq42Zh74K9cR3GCwk2HhdAHhi2Nt6myCfXjd2MTLm",
  "key9": "4QCSnEku9kHmQbY8yNtaofxKucFsyZsKCmD9eJW3Z1pqjd8usp4irpLRaZGghnX67d4sSXyoggqEfUHcY8chy6o1",
  "key10": "RQ3UDxaJ66sstuJyh4vdSvHmGYvTn4ic3fu3BmAohLp7TfJ3gGHs6Y3cBT7NvdCShUBE5v6UcMrmUC5zJzTB7ZS",
  "key11": "4fjU3j3wbXnMLRvFWWhhGMuR9SBtmdA3R5jFfVHLTTsY7dffbN8YLs1cxGDu8H3xj2P3RH82YfYUvMdN5BswxwjG",
  "key12": "X62Q2GPepULZHVz2BfuYMFPqj2vGvCBPoUsxYHHhRBMeGCBk29KK7wPuXmxbvbhrQf7FXoEmfK7FBrQfvxGXqx3",
  "key13": "5t5ycP8fmfDhQXLR8CFo3VcjwvsXFK4YSSYuBH3LCxKppdQo57JCtjN31mHyDFxAvjPCfhmoWASrqgXcvbVZrHge",
  "key14": "61E3PnVGLkMzECrXANySWLPqYGfFzwQaZH1g49WbK4qvpCMtVTAosJsAhFLCvg7qy8GVEH9ekpsT6AR5NoDUCjuL",
  "key15": "4ig7xDzGerBr3uSc7323TikUNnYdo2utuQcyMZ5KX4JpYXM8DBDGWam4Bppr9vh4uab3FCqxozXLkqBCVVWDZJQM",
  "key16": "1CWMeU4WyUYcZjwYz824PrDK5mTcJYGGQDsa6a5AVSiGduNuCj8m7mBLny4CUpwbUCuSVdHiUHm5a7BvvqmFtk3",
  "key17": "6y1p3vPTcziqwZ3Z8Yn814QQ4FEJviyWx3mGb3535bSUfwk7RQSP6SFRjXYF4d7tamQBCPXCf84KNRiZSzjKQhq",
  "key18": "2PA2JFLvZ8wnhFXytUT67AvV2Sp6ATJopk4vukpi2FPSdxRvxyHidemCSMoH3h1iZzrCSgYW4xgXZweXoHdX57AA",
  "key19": "ZYKRzeHSN7BU2zWEG6o29iPtnJYukPkcp6mzCMdhZQPSTFXWpLVDpyuryHsi3LE43VgPsTymGruWg6udZmFpgrZ",
  "key20": "4bYyf3hokbxQjoh3oDbBVz4QZHB5tjTdgwG1LjC1tQ1KzDDmrbfYxtGJ88CmH5aLbVpvnSv9yAZg3w8juD2wVxBp",
  "key21": "4FaMKX4mzp8CHCEnDZKYr6pfyR2NN1pdEF1jeHnQTJMrivoihUVVxdEk7pbdQxYr1FEkpbLx5WJ6yZhDLyFrzRyz",
  "key22": "2qpadF7Vg2BK6B8uYnWz2C4mY4nv7D2jdR1uVpeLznDGaqYEUgvPeQMv9CtZCuNw3nGchzB51X3rHsHsgwLWtrYC",
  "key23": "3naFrBpdCzNgzL4vVLEmdo94mKo6RMZV7gHsvo3pcbPiAbyetN7LjvxejLan8VHEZhysEfBeDK3bJHuiHfwDkspT",
  "key24": "38vjyj7v9qaMKdyPAfFE7nR3qBGYKoxT1cNugHJn72tQY5RN5J62MwzesTowEqRBTRYw5z7FkuMA6s5jnWUe5A2h",
  "key25": "2cPB5jnZaHFHUAKCo3NbiHoiP6sCQ8pcjbGhfupnDfbWM77TWSr88G41e8HPQq7u3SBq264sUtck7bdfu9KnwFuP",
  "key26": "5915rTDHouXw58B2vuAznHUFW3t8BFvgLFxQ49qXEGyQfBctunsXC1SxeNiLkTaozNxTbRbAGxPPwKinsGPsy2ng",
  "key27": "5YK5oebNu9UwKiMGjM4vkfVXANQymdq1PqyArLWo2QDGBsf9KmoddpdBMvXesnRxvv677edekN7cN8HTCuSjf4nt",
  "key28": "5Z4SykCZPCajHPtnXW9owgCmVWmyceSMPSwauJrQgSnif7TjD2h4CQBYVJptn1vnrxkM2AYsTWqgQrkemXtiTSj3",
  "key29": "4hawmGmfxC4Gx1DeJgd2fALo4jggpmhQLmktGEDSq7gmDT1mLqk8QnHntH6XKyFjiqoJ28ouHQte7XArMSrRA2R",
  "key30": "akTayp3u4wEwrmpVr4u16XDcgdLMNBM2ru63SEmH4H6EgBjAEy2rVBfp6NNQ83xnPKfQvvNtCMrgwKHpcPiNrNC",
  "key31": "5Ef1XZ3DhJURfc9QVnReUBzLrftjoUbvGVEAStMiQG7Bi2q46NrZN6qhW2YBdiC5YxKFbF9PuVeVGjczHadwc1mR",
  "key32": "2AYnKg9PxzKQ9pqRRaJWs8ZfckuVagg1tPAkF8x4T9hpnvxWzy468zu19zAuBm1LgnHDnL8TeifrK29iNzcK6U8e",
  "key33": "2mP8TuM3NoreJ2rZJ6Qw1MZFR3zD6HpbX3SieDT9hgQqCr78i4GS8uLQYf2zqBaqkHpadYKGUDEwUMubj5biAFEv",
  "key34": "21L9A9jjw2yceGBDs9KSCGxjCgMf5ftB2cFtVyQ9AzP99Rxi6gkTii6fcohuXAWW1YiJCMmxRCEUgDEBisJnVxs1",
  "key35": "4PDQx8H45d7xaKZq49VoUpaVcwjK2nhvAMsPvugeU9ciz8skCrBSUVdQBTq9PiBu7zFub7ipTsrExU1EFeh2zH3R",
  "key36": "3z6eUR3o2UYCaTffRBc1mXNKEMtSoEGbWheS5jAkrNjnB2VuQSDGgKeWJGKywxZGs9SsNWjeoy5KasryTo9v11kF",
  "key37": "3WSJ29QaBVtkgEy9Yc8TMuFGi1XhkGRnRusfaFA4o5LsxCRK7upffr7iCECRJk87UtD41DvGE38aG2Fh8dZ61Qxa",
  "key38": "5dkUQPHjpNikYrytwx95ebCaeuwtcMisdsigeAdFgqMgzs4L5zKx7qzVEvK2gjiGSnZd3yTR4W3ht4MvKrBEgmUt",
  "key39": "29pG5gbZrFB28VQfBFt7WYmVNoW9T14qNFHfL8QAPrbDf7RJvCTSAkPxgyFZHEx5DqU836FfQ4vNw4jqR44rZAyw"
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
