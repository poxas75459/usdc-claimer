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
    "E5VuGhpcSQci69UVmKxmF1vzMoo1do2JsYgMMsVs2RLXaZn1wPzDr7L2E5iqwgTwDfALMu5YkYfZJRWhvAqdPv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y6xS6dednud3UZE5BCPveMbqyQctXAAtTuMrj69u2vyh4yEPus3Ebgw8JTcgYkB38M4bJPur6f51MR61zam6WgG",
  "key1": "MfBQVoqqcvmch3qixBP4W5vh4Y7syRf5gMMbKQZGREG77qruCsJAjruC5itGCy4WbLuL7j2Y5NGBuGZhRa1sjT1",
  "key2": "ZXZ3Wqg9H4xp4JWZUEEy5WRHMHHTrRcBZvNfsQ9eEcupBPZYiHCf3kySh57tKRc5ajEcYjhf6rzHLxsKJcXgXj4",
  "key3": "3yKUzTjLPMosdJgtiQPhpnuH8PBgxzEyXuxgXwq9HMuFDKuX5nvgTcawXwuAN5fggkJKXkFhtsug9weHe9rrokAK",
  "key4": "4q37AfFZXf2eodQbWRhxD5Cc3Ff49AMoAaq5bc2jjArFMNUxZVK6b7BsGEk6u7xk7SSygntzEnF3ma7aaPqxAQiE",
  "key5": "5LAxv544NorP3gaair79tRWpsLApTFN28KA2xZF3HcNLbrzwacQbKMLG2AwwZGatWBVQVBqWrEwwe5JGhAPVZiRU",
  "key6": "2855mV8wr8tPBq12geaDfB2zgs4iJHU3Kyz699oj75Nk2DKa4D56nJ5uMtDGgwYJhXAxxRQTZG7jPigUXoSu7CfE",
  "key7": "3KFPU2mVkN82Jo5hTJZVGu3jjG9qA5urip852Ag3KiAH7NbWXnP4xh7bjwCNswmbvuuTXqjNy43r4EgS33ahtZpo",
  "key8": "5YKJk4pqEVQTwL5fjjEK1CoyRPZHKSQKDmbMJjiKZJT6qZq4LiwW4ekFZzfNZkt76E1if9sUkxT7jcspS4H3dok9",
  "key9": "2yXqVrTpY3JoqjmDvPdCchD2oTNoodYMgUtNYbZVRT4GmCtwMjTX99HyGXRnQjUxvMzXcWHgvodM9sk7mZov7UZj",
  "key10": "5DLzeqmkCaTz7WZdj7aB8Qgy4zWrrp1ba3TM7XMTqiHEpXcTsWrdkP9e29nET1V1MngsMe8NnvBoHaYAAqGGC454",
  "key11": "4JeipjAmVSJx1DRCmrEQCTySsqc2i4ip86LE9yJVQiHx2Qe82LSvcWS977gjeBvpRxRYkbuJNsDBGTFdWJmqMHqN",
  "key12": "2eUFqPuBDfzAfKJnduGxQHfqc9pF4swbdkDeXFm7k12eW9BcSxsZRLKUpymauiMFVmDyVNxj1dis5ZPMzBYVDbDz",
  "key13": "2ksgDDvrp2iEQ1Vj5LQb7RcsWawdCX9u15Zcz1y95wTz3uvkQk5Yw6DEqEYActC92S8DeUxwcbMyUgarQYoWc9QY",
  "key14": "4L8k9Fzx45HKYEJjywV2XtWuCCJ2LgT2dVDuSSEFq5P3B1nCQ9EZXEHzpkxk73hRPcZ3MSoWDjV98aH5dnK1yrfu",
  "key15": "3FQ5XMmfrZx6tq6iXrB14kkVB6ewQQw2UkEnTHVJwahpgVoxMStdRuHwhUEb5Yt1MmMWyDLbbmfqmZGKED21a2nx",
  "key16": "3HK8DMmLjyKs7cKQPUrknAVFjQrNNEjvJStNiCaUfPNqnQ9a5r5YzUmvXXyWKQpvDqfUcDdqH9Rsarhxpsmdj32Y",
  "key17": "SECJnZwv967rd1k4sPNmDDDhWCwcTHEVKDk5aRBU6oC1nhCuvu2QKsxRbE1W5Uz6FXajdSxUV1GioYQfDocLzPS",
  "key18": "SqSeBvJWH5X94XAy25a8vaDLs2qp8UAV2Mrpu5acKxTvHWhcJPoEP9npW1fQN8isnudj55p87nNa2x3HJGVSwiv",
  "key19": "3ZEUSyr3D7hwcs1Gee48bwRtc8wJXfstHLAtc4MZ3fkKsbCoxH75UxGSmppaYi26fshGkzuE54i2HFcgvrHdo4Kq",
  "key20": "3BL3bq2oRn8a4fkaRUTYYbGLdSK9bbavBbCfGWmmx8oymVoWoNfUepHQBGaUtmTPyG9umBJDuQQ4KrsU8k5gfFHo",
  "key21": "5FfsAFyv3Z2jzCrv8hZa7ieSvQK2U8pRXKD9oShT1PAPjPwcwuD8WAR9mC2n7bXbHxsAsrGzDUXSoggJWnabDAoV",
  "key22": "5g8k8qswdVR7Etr8mjWUG78XvaRaLE8Qy47VWCG4yEr8vKKDwDwj29Tq7gpUxaRdaS83jMe5nJJTttdnxLE3Ecc",
  "key23": "3TQuS1Tz6ducpzB4kZqYW6Xmn8hCuEyikhwr4ZvqjFnbBZicUn7Qg6wdiLBPdMdBNK68niLZgNhJoez1u4C9EJot",
  "key24": "2gank59cZB8BTz3MdZmuwaxYdLEBZeL1seG8WxB2ZaVvt2CnoD2zFoLRQ99wfS5Ukck2wCGCDKjmwgss1AzPhMNB",
  "key25": "5qANZoAWYq7yzf2yLCdP5QSprdRCyPDqcqXcCTH7Rj6aCvHN1k9Fmk3BBe2x4pabGF1C9yj2VPCNRfQPfKsDWzxN",
  "key26": "2KMtKPENVTKgLe7WP1gB6P87wv5Xc8KSV59zwfnL66QVWY7TbiN2SsQQkQHtaeGq2m6FDjQQsST5fLr2bsuHMcM5",
  "key27": "3qnRoABzKVr5ojiZCVSmdR1JGZaSXasataPJC35VtRFh8gMP97BXrGbdvetjQ6ayH4UhmomCM8AUMhyPxviL3yvJ",
  "key28": "2xUdfDPsEK8SRuWeL2vWKWDGDdFxgC26fzbsKwUn9vXhgxbv9mLkpBAFPrGVX2fCjbQffNwSsHkSGAvN6GbFS9QJ",
  "key29": "32HFFjFDqLvPENGQJPzS8TPzkqJDcYHyrqd2K2eSeTao1Qg21faSWjZioBC5yMYAdn3ZJxj8Keik3pPxfXqgEZND",
  "key30": "Uzjg4ASSuM8bL9fiAGstVKGTeMo3qvKxgojU2EZxhqvq8KkbR5EiMZUYasbYghJT6sUQgHwhFuSpPXk8mehmk3i",
  "key31": "3vbsqVewv8mkDmFTos1nWrgXh2k4estorTnnTMSkVxZgaSgZ5uRWu2Zy5rZeEiWzAMw4Kf1d9un4uT5YThiw1U9L",
  "key32": "3d8jBggTieAi5pxpsBWA9s5FM7tMskv5xFamdtFbbzdvvYWo92NPG64LCigHc83DR5hZgHBgXnsaqA21sh4Paeay",
  "key33": "9DyK5L6KaNPktGfw2gaZVRR1XF1H1bYDN7RATBStNfU3xBzvqRGMep9pr5wDPY9WUCG8hfDGG5Jv3XnSEVKQdMV",
  "key34": "5n9efWceYm4EtuzQykvrXXkGRqzMgiZzrxBqSGL8dsLh8KudBDYinxbohgrqvavKdsakNzvtMNZBkrTxKV614Ydf",
  "key35": "4cvPkRZd5oWo5iMFpN27tP2p1sNjz6YhKGbSafCWiGCAe3rk1GB5WjeY8eGYHeGWDSufF7es5Wsy3DdFXKteZB2D",
  "key36": "2Tv23GRMLNSqPFmha9DTXpBxiydY9rLg5kMoP9VqYmnoqLd9yzRcmrShe7YXimmiEVGhnpww3G2jJAccjTmzXqAv",
  "key37": "55R82YVStgRKsFZf6TeoDaGhN2Sxrujv1Fi3ef51q7BDh1HxjwvHzqP96Gaf2rDSXTmco4Qo7DjSgq9EbzKfTM91",
  "key38": "3KXC28HZvbFyH7cGcnzB35Pt4qY94CjQaGZDaDYHui8CJFWT3wtQn8R849eXQiYh7ue28dsa5Uee4RPbX3cwzTn3",
  "key39": "4hrMF69b8LAHhM5jQjC2fkghrPA5oU9PxmBJbqLerYGuWPCTkheNfckHWJmD4bxECUvtEb9zExkpFiGtAgRB9bvd",
  "key40": "VFT9QdPUGezaHm5xW8YiK4cuhLjUARR3HP2BHVc3CyU5Mg4TkBkyHtnU18XXWJdVUg2r14ZweTY2Ve95H3yukvU",
  "key41": "58gCtFyPJQcJTkmCyTS2Y6PxSsMw4nB6gWxtPLJzdVcqYHXRsavagDqVqVNpiz2bUb2iyT92mtQ2Tf3VwcBqyoEG",
  "key42": "2uyDTnq1L3RWvszq6AxfrUGAF1z19gcKPH9yPDZFbYD1xN9ApBRXoDBNp1cNay2HWasZgWTQN3xwm1d29ZdxLL6D",
  "key43": "3FBLYUKgo2UHhYnf6LJXWqbuinAD2dEfkBdxYh6qMze5XapzrerDTVXnUNTrj1gd4SDbqrC7hDmyMPsAc5xSMoZn",
  "key44": "2K6ZFkgfN3dQbh3e9EhWNHzjuYpymQgTL3i4ibrnV9fXJEetsyhrQ1nzKC8Cma8sYcLpiwgetprZaB9qteV82pna",
  "key45": "3kXrRuRsH6PwbZ8HLgyaMi6UN7czKVsudn1usSPd1YykMKgWHiDBfJSAoM54A9Y2cYcW1p34Pt9S8HeR6VcXavde",
  "key46": "55xxJEUEuSEttje4nt9sWLViH3TbF6QKzos2xgfjKfsAnpy1NPjDWWGi18sboYPCCXgRead3iL4KMACjSkrM3h7B",
  "key47": "2KPGQ64ktVEn1CryvLf3cKfG1meAHgrY5qbdxt2NuBC96TEjastf95Zv4fwQwzEdNE2BnVXVr1T28nQfQkTjAthq",
  "key48": "5jU2BFPU2vyJ9zLowMGXpDoGA2zN9jndDbcQiYNevFp7ZMGeVpDWoejcPziEtKGxmtNWSvhUPmFoXNRbSFRZApcU",
  "key49": "5WVwULHNM218N5oTZjKdPTP1pTsj1rXwSVGW1fUoYQQmvoFiS43GEejJgHpjG3FqJ87RBxfy8bA56CCVAxurgAyc"
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
