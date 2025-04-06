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
    "bjSAyCNggeoPtmEh6Z8benCSh7FyWo74NGA7QjuLPoQzGdv1dx3vmX9Qhm72b8QQjXMMHda571tZYs74vuwgD74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CaaqfL7Jwwqb2FqPnB9JNTxhTGS71VBGwsiomecExjfbbjpkxZDQMkAeEWytdxFAzvPaEdDVyjCwELWJhHr8SvY",
  "key1": "3S4hkKYZjRvnQGz1Lk9UCjpbd8AW2Xf8EDrBeujBeRiHFGcAxec8Cyok2iisQHf4iEraaMMpfQWpFy63MUjnwcuU",
  "key2": "3YKgDYfE8AYoN2MmEoXvRH8M7582yCcWu5ia8sbnQJAHUYQmM2x3GHJJciDohG3rfSXQyiJ5B1HqepTTJtkA8i8b",
  "key3": "3LFY6zr5etshL2qssoB4qoBebv743qpcX7YhTvAxPt9hRX9Y3CbkKja8Q6sTFa7nMib3hHYPorGsm9h8XKvkXddF",
  "key4": "Hrkm7eHe9iLzgrRjKDM1noCr9HRoTDTG5n25u2nfGJeWpcpz12nehhTdxg3MXsq3HZ1g7iVZS2GCaucs9uSJXp9",
  "key5": "AQrcoL9WwEj2hQLW4XByNMHxk6RSPJ4Jt48aSreyvDUHY1szLFE7BEqPm786TbxsTESfE9NUebe8m2nbLemPqKi",
  "key6": "376eeDkNEB5LqVziMkjKeY1Au2VFnH6dWvMCLPScqih88YCf4cbKUvgE5GgmgraqWw2hoTDf59S9F2rDkQwhvEpm",
  "key7": "2AyAnaR9Y5NnbhcpNyjzexZRZ7MxT1LYPainDoYfR4eeaSBghT4wmVxeq3BQW7CUt1sCk2msGxXf2XLgX38nAYg",
  "key8": "KpEYkMsmiJDXAemjSPPTRdPi6RDEGBxFdanzcNrZaX6WY76hgK3fr4aCXKaaRq2siC9CGpD14e4oHmR18XxcGhc",
  "key9": "2336obNHJcnRb4bRg95m39YvgawjakJthGegj6dtdfoTP56Gx9Hpk47owCBEUVdh5xBiqxq1ABTivehzc7Kw9ckx",
  "key10": "3shanycJxzK2QYv2XjmxAqximfpZyuDSSfzv3EJhsX82vJPY8QiCL3rcA6KE8aH7ZwX8Q1inm6D1cHUXHA15Hsd8",
  "key11": "5vAAchtBQpwW8RWyTsCA3v7MjJmGvYnXKSZRBkLjV2rvLUUG6gL8JYMYk2nUwtWgNpasvGdjSdF1b2eHNK4nQ3Ss",
  "key12": "58f62Dbv98sN1hBWfP538iSRhu7ePxSyybHekXFdc8mGHFMDZPnh961ZRwgEvZm8jMYtVth3wEqpFE3SgAKd85Tt",
  "key13": "21qE4v6MZuwxtNnTS14kj6ffPadhh5svtwKfNErtHtgHdkkjYedyYpN885jiPUv89smNJPQFAY84oAaoUhysidfJ",
  "key14": "3TrkaUA4yRxdZPcukGbwiNJHVAWqxMZVAnXXcmS19p1SwjVUbYhdVYUpeSQPJWs2pUuocdt9W7NxbTnjt2Q3g6hj",
  "key15": "2ej1nintYMq1s5nVXJsCpCfaJAwVyTzivvXZPCD7NZcZzZ1BsxfXSh3ve9668HpnuX1hvUfUkYRTe5ZtYBe1HHFz",
  "key16": "3R1Dr2cyNpq86kmjqCywYqDDUSe7wSzzFNcVBEjsLrZpJMe566zaK47D4CtzyL8CkMjquRuEYgRPLRARzEf58Qn1",
  "key17": "4gn9LxgGrqoR8yzHbsFyKYbHYBCSQ6Hb9Q8BSqjZQzRi8j76yKyGK8zS5rtJZsapeFhZCvptfAHFUPyS9tqycUCE",
  "key18": "5Zwpe6uBk8KjKGRkqL5KYkjPueNhMsXBMErL4j5mRngP9MSPZPQue63TPGoYdTHbtWHniGnUG9jnABwgUh39u3Xt",
  "key19": "2wDVbjXRakcwHz6EDCHPhBdmwvgUXdvBFVzkEC5va1gUgQ4qEfkWeF5R3YCdiQJohqc3LRp79vp3JTSK9jBhjQ4q",
  "key20": "4AgYMP1KU8JZ4KhYVTMFuNZaWGCiXazcnDJqfhzcHv8H17jJvSU5G7sYDJLNDCn5xuqSWFSZkmP9T1CeEWC9PWkP",
  "key21": "5opHWsfc4dSE1XHMERnGMYGmTB2nCurWxiqk6J669k2PiYuSeUencqRmMvDrooqMBBbxdKimNWmH2Lx4CjSwrfjF",
  "key22": "4QfhcrKCJsTmf2f2xmk3hrPKMqdbadvtHvw8PKtMY3Ba2tQ4iGMvdi7ymq5da7pzCmFhpX7B5SD4uaAqN6XtkBHu",
  "key23": "5qNRjxU7B3gL82skcLdHcAauoqCrzyifcMEa29WE2p8CrjP5HEXud6PvznQpTZFdLktsjpzxM3QHMbujcefkTqV2",
  "key24": "3ZehCiiFqJMEvci6TqeYof7Mq2TkHYXVaSg8FgBkBzhpfCo1Cf6Q8V3L59GBbayVCDJadDSTVmpYkLhvEnbZzG36",
  "key25": "5v9GhFzqgb1YUdtrL4yWCMNVW29veiftDpqxcj9kKEd7rSazEgxhspPaPAr58Eh2fFpjymob5kGuet76dk1VRWz6",
  "key26": "5qaw1f3oYmUZTNR2nHwrVKscdwf7Wm6eXtTbXbCVDiBSBYzbH8fF6UWc7ks9uPeZuTMgPLMqXKYPLXshVNuQbSUE",
  "key27": "55hhKF3WRKMTTsrZSCgmyLnd2eGPeBSAoWctrzmHSymyMPWyBhHaTix2eveBdutKxLzRyUwZs83Pw2PkFS6dKhSC",
  "key28": "4BXTKpQ1VM2wGNTLf52BZDRvMUjku1hv4xTYszauo7hES8EapnF1g1X7gQijdntWpuXe8jPVYkHRpRFh2JZE2SEe",
  "key29": "3E4Sq2QroQVX2E5aHAxH7jVazXp67p5wNz1eYkYDoKwcJ8PCByoMawwqpGt73SEpj4xmMzMDTqra6usaJPmkfm85",
  "key30": "67AnsbLVQT8UiTxTbXW3dsGZcJehzDzZZhmnNe1TDa7D7PKd1toyaH6bM2HQ262mtjtCYnqn1kHvmTyM7gzK5HGs",
  "key31": "35Lr7sb7kM6RHKeR3bNAUW7761vtwFQ5YFP15MhY2YAUmuMziSoRqq3Ci3xPH4RKL9S8QwaTLMUeqqzMVzfDKY8A",
  "key32": "597DHc2m7t82cCBg4dQgtSuGHe4ia9ykMkxrgs5kdV9gab9worpefaBGQqQAsN3fA3dWNFmVrJzqoNYhYny4RDED",
  "key33": "2Qkb6ZdSmYsSGZGAQbYe4BVnHX3vmkZwm3tZL9hYjRAU56bgxbJHNon3Qm7WBcPchZx2WbCtVbBtA4DpvKmdoaKJ",
  "key34": "33ozfT74h4RSUs8iFstTz1zUnJRB2hw3JToifnWEQL5i8xLAb524MiwA3wfkGkovqhsB9P4MV6BiLE7Ds6ngPdVG",
  "key35": "4PwanRnH1Yhi2tifApmemJmZVYKRroQBnmXugrFDdGa8cbgR2AT22L5wXD9R28UVSQbqVSrf3ZP4eHVGK92W7oEa",
  "key36": "dBBsGnfiYJG988qsh7om7Lf7Z1ahMcZZ62hrmAuE31XuR6MWBSLep2SzdXpqXgxMxefjn3yQY9S1sQpjpdox1NY",
  "key37": "4KNNj4T5h9iUGw4WbjK8VtL5cu1RRexPJq8C1YbcSJTjZJQcwboNH2crAV36NTr1ztRZRMyeGksaC3sa9MfCEizk",
  "key38": "41qMZEV6atmVhg3NEoRAgDGDYmmZMocetnK6Rq4JUZAr25feyea3YYZ9KY33YPo6egk8HcHiw7cVEynXSDkww5XU",
  "key39": "344Ni1pkRK2R954uYxx619dhttwgZzDV8Um4Kv23s9WwX5kCHzfNJ5x6ZmxJpkmdR9jvDqKXPVf2L4334cvQZxNk",
  "key40": "iknQsMoHWAjgadPeZp4BXp3iuzxtZPQv7NstSj7ZLa9yn1ye51z6UfeDYdYgZ3Fbk5esjtePsPuHEV64QmkUeJP"
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
