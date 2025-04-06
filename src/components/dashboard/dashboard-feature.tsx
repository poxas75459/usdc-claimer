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
    "4VCUSjKQxR4uWK1dUPQVHXS3moHK142bL2phTpDz696APBB1Pwgh11MWtgty7bqFt1wgRpVSiviUiMiQq2m6o3Hi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p15gVt6rnm5aqgnNoW2uSJz9BB8KB2ZCeMkCJmDhYgX13BHbA7Qad4J7UCiaswsSY1Q1FQpoM9nREPC2WkPHYG5",
  "key1": "5LRwcH1dQFX1jawRkK79qswbTheNsWJS3g43WcsrgYZvbddLS17b1WrMSgomBTqgr99gAeSPgf2VHHbCzUMontdY",
  "key2": "65grbz5Ye4Wwex8vJDiQELBijoWnyJpkqNgA7qC51YkmnLJbznrJwbBAmXSHqtcrg14xpZ6RkPkKfMfyMfbyTGJ3",
  "key3": "4H6gbYyoFUWuNoruqdxeW4YcRdFxBSFQGj5LQodMxp6cspzubHm5vwUbb1bBjG9xXYdjPX9CiRPQa9bmKZ1pi3cu",
  "key4": "4eyZahtndLTnfpwxbNtcnrFJJLLq4jtR9wtgv12LMBVMtoGDi2AzYNmbknXHzyYcc3x3Da2FM2wwpdj63mR6Z4AU",
  "key5": "4WuZEHCjdkprrucPVMbfnMUpoBZQJ7pZFCjJvWmH5nmHvNa6pVugd2gFqpGkAWSq5ABeAp2AGAkAQ4TNv6CnXoff",
  "key6": "4LkgN5AfZFoQ6i4DSGtavVEQ4YnSy6SFzCX9KG22A3ngwwade1m9bjTWiQuvPJHke3YCjzbwArAMnYbMRgS8mZDg",
  "key7": "5RHx6SzGPEncZF4UWPK15qdA4mygojf1hjDCs1919YraLLFMGvmyEm7orq9RNTJ3RisNDxdqCGAzHgvwSX8tziMp",
  "key8": "4CQWjMfphP7oFLnkMCeZ3SRVwdFbnENAk3Ea21786rCAmwL41Xi8CafVh16FSaDnJCmX3XMHfr289z8jaacmo9qv",
  "key9": "2dwEF6n1WxHz3b2CaZ8DtGspVM8jgEGjxPvBqSUUoFS2zUgNF9KPur8Za1jMc7BvCzBTd1ZySBV3FZWwPPU1hjca",
  "key10": "24mSxeuYbGe221w2jEqSifKrUXtMLV5rtaua1yoXGrU1SVbWPw8FRZiQvfFCSJvCHFyo4WZiuPgPGxAjZkLf5EYj",
  "key11": "42vHxPC4gzcEQn89wD42Erx9jaLVqshVfVsWh8jqKirEKN4ok59A98M16hccTisqqX2dUV1o8x3va6aixZkkmAwM",
  "key12": "LTrrrrdZsYK6n5gyFiQYAgrRoL1Miy3sJjJDqTuazJ3ZhUJ5CG6RQaK4xCQ2vcsLALZLy4zbDQRaL6uamDVTppo",
  "key13": "5q7qXxmBdr9ZvMS563dC6s1bpnAchiCrEUR5r46nK5LziJrKMTj6RaPSeJVyeW76S911BPZQGcUBFmHMe6FfRPvN",
  "key14": "5tSPssDMdismQzy1v7Px5nvpKVQS7YFJ9HhgET8gjmtsnnZ82jCHG8DUar1LArhDdxcxPKQhJvwvfwnTL4TrocB8",
  "key15": "3EAbyAGqW5hbHxKQc68GnWtAtrJnutqWqkSBCCPk1859R46tFLxigmj3k5JqjtX2ontrsaJg9U8TDAwG63SaNYiG",
  "key16": "2L3zA7ftWtPV1iEdFbGjXebc18ucNxdxVyYyy17Z198TxYYcFcCUxWtGUocNrRzXRpBTLs35yLB6kwMvtaPuKJzx",
  "key17": "yAZoKbwxW2VyNhxAu9ToCYvr3fGTgfiHESqRnqzYAdo6zmTEBEBef689JYvQMPm3j3mSwrP8cbnWc6EfYbDTM8c",
  "key18": "61cdHxt6ZPHRyp6X4xj7BoDF3Xk7XN7XwUprdGF8DVz4fU95spdgsY8PMfV5Ly8ctigLVyoZpDbLiYt3iKxtW5VK",
  "key19": "31jrgJ1v4rhTYfnCHT7bSDZwdDuiieFy4ZDDhjxxSTKXTBvpGvYevE54wGcLWbu1kyrWeWn8JGfCZ8YUnHXhJs9q",
  "key20": "3aTexWr7d83C88sHzfMCy7Ps3H2UdECdqu7wCxRNd1YSDncJNocdtMK8K6CR9bWacfsrAvvrsQo5gD8LoesABXh5",
  "key21": "47RY9riRkEbqTpGCXCFn5szky3JKAeAFPu9FByXnyE8BTRNAmgNNgWnEHZv3TSEFXad74qgHPBmZkknavRTDWAsP",
  "key22": "2usCcqq8r9mEgdwGzCKmTm6q2gNZf2GXCdCs8tytciJ9Et5dYDofsVWVYWDjDKDpRChiPXXP9Hq1Y3ew5t7zjhHQ",
  "key23": "2ktBE4UiA7J3MpLEjJHC6MivfLfnau9edw6xCzkx79HBP4Qz6qmKpfWf6TvsvFUS7RrX49h8vJSgVj2SdeGWxudp",
  "key24": "2LapwHCX91TnexB64cKuEkgGByLh5Nj8YqwptNEsSnjLnjC5Xu1A6CE38ppyupWhr88by3441LhiyZsJfF1Rsbep",
  "key25": "5KmP1EsREQYU3jwJ7b8bHmQFYjG8449SGnHo89ikeBmYWmpAQkFs9Brwe11UMr6G7JrhMZdnsvAobYp4H5tqttpt",
  "key26": "2GwuWk9idL16b9gUevN4TZmuzSJ34EEjCuKHLgyxbtpMYxSFTKN2EMNLAcjA13nhPqQ5GAHNHawFDbE9ZdXSx2oT",
  "key27": "2MVdETDsCdFE9FUQ2Y4FsgqRLtoufn34cZLvYdWgyS5GPFLbfwzrTFHBdnBdw18fuYYqq3i3UmfztzCuT7cErk6P",
  "key28": "3gEeodYbHzFvekdiQvnVt47YpJ73HNdwsXpCQdt6CsyH9zjWciAuJbAATQ9R1PtA3Edj3dx47jLtpk71nuf92wAz",
  "key29": "5DwY98ojw8phMUDo2yvDRGG3i2ZdmpmydRxrRLm8YNBiv3cTghPZnoxmQKYKxgfpQLqvSRsCMqXVHp5jX3hcuLrH",
  "key30": "4qY9bT2fyqsvktoWfaAhSrN6TBeeXepBNbpg8ZQ9Yin3MsZPcs9VAGiRJxehzAAhXdKyamVJvcUvQzmfAXkFXzRq",
  "key31": "2dFTghcMuzY84HSsSxTrroBMcwFh4G9gP2f5FquHvVLTtDLWn32Pws7XpszqCjofzkXg1P55o1S4vky9VcXqFHzv",
  "key32": "24rPDY84RZH9GKkXAhego7nWoKK6fFtEVyLMtnc6YEmg4guqitfbULMHXTvVXm5AYrrMbH8AN7Yo1TLKixuXEmgc",
  "key33": "4TW1eAAUJA6s4cKH1MH5kKTED1bxWXKaVjHrApwm3B7cks1RJr6XQG9DKr1gBThTcAbH6D3ojLC1ddDVAwC1Lvmi",
  "key34": "4SAdSjQFwHa7pB48XistTw88ZARM7tJPDCR1EHpe8y28EYgEuvoxQ2zPDC6GX8tAqsdiSUKnNnfytGtS9eBPHxWe",
  "key35": "4zpZYTyH1L8iVunZeGUapf5Me59dJvjkdXMYX6yzszF8XQM53rnV2Jw6aa7UQrFPVjYRqjCBipH9FraxPoJMgCaa",
  "key36": "2jWtYUADyzXyTQZErhLVNBq6a6R6Y7MhhUff15JBSvzv3gnVpX6pDT53sSK9iyEkZX54nwzDwNig6fcb3Kjf7Lfa",
  "key37": "3aYB3qhntEcFk9m5Wawp6GtDxQYgbAcCtZhP8zpUXRpgSyoaz2ATZHr59jw5qLdq4zPeQsSmo2TaVzMoM9VXRrRg",
  "key38": "o26q4TfLqtpAZwzuwboesewi6gRS9U8KTLDW9MLGkbcngcLcGJyQVPbT8UGhCLezununiWMuUrc1t5GS96uPvUK",
  "key39": "5z9zWcuEp3dHBBWvZDwr3P1dZgkHuoTQqNLAJe52LiT2EqdgHtBMYGDqJTBvGj9dGPFgW5wivcqr45KnZenwu4FC",
  "key40": "2GdSGor7kKTGKt8v95YwT5eRQbDSGGSFtqx4UnuQZ8hPbgh286pheZeYj2R7HNLhGTU3RDLBHy2kqEXpX7Zjt1Pv",
  "key41": "3CHg6ZZ6ni8ofynsKMur5CwAqBgoSUhWsRfeyXLnmqtRw14KxmFqb8wvUuioL2k9gsKPWaJRE4sjz5vtok2gqB2S",
  "key42": "5ciFnvyZ1yFMxn1MQSykLQJyQ4LMVMUqbQ6W5F4PgZCbwtPDD4D54BR8fQfoKWuRQFqn3aMfJhV3r6iSYWCAT8KR",
  "key43": "2QzeTJ23yt6yqgb4dQEXLmn5NTagacvqHZSRgf26UBjzh7a4P368uTebPKi7cfUvtpwMvmZJxiLiBUBvn3STya6Z"
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
