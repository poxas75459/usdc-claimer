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
    "4TkhLyW2b6BwbNmyRCaysXjzcWt6B1svMdGCU4vK6eYnAPdSs33LJGxWSLuMU15mjSwTCir5jMyd2eDEYLtiNvTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kbtJ9JNupNLRLiV5YLJWzXASMkHJBNKUJgwYRMBSiHLU6pcE6xgBGFLztqUA4H7qS2zUc6WQJfatPKG5tmTXdaA",
  "key1": "3hz65g5ki4bVKDTTnvmVcAYGk4AoZx2pcg1AwRgcJzy74EkXyFhXsk3ERXEyEQDSQuxzmqAqDdARKAkRUbFigfBz",
  "key2": "2HZtpYTqmApFnAw7aTMEKB4L3xZp83HfcbWWiSWBBF9hefNEcj6qBK1VdABiw7T93qhxqduW2FPTEZsZ8ngW5rVv",
  "key3": "X1oeHTzXMb1qGZz3MnMnfm3V6QsjrYY2FpVr3czkaBU4x2sKRNeyhPWa6XRvEAuh86JnDNhdFUJziTf7BLDhDho",
  "key4": "4vnF7iHgaDc4pMyPFk1JrMgAPKffGiymjGySvJcx3snwgETfF4MqphHJNUUJugy7fTQpNpZDMPo83g23XhPsggV8",
  "key5": "2zutixggwE5GySga8nicyaXwtrvYENtiB7Q9jrYP1fzeT1CDzfjg1rjoi4sV3bXzxZwWbwBkKRPvwJfwPgSy79mU",
  "key6": "64NLYzGN9w857hdquum9t1W5Shkv1azMerx9Y9YfTugvueWMNeaEvbYUPPabSfR2qYaDzdrvfXZbgVVJYiW5n1jC",
  "key7": "4ZFSHsrdywbToVgEMHx6sMg3bGMtfjWpXUvrPXqCpdFSNufUdj5zyGthHLVUrJHgRdjWHcxo3EHJYUK6AJDh3U8i",
  "key8": "5ArNeosDeyhzCB9YxtC13arGKgH3yjwfTUWwhUzjratocyXV55ZpzYW2gL9gRrifK9cCck8Urk9gyuNG6oXcmP2Q",
  "key9": "4mmyrNzer5eKVyAX5vQMpDYFSm9F4xbG7bEE6bhyFam7BCktrY4TWrNzDYCadVktQvH7s9HgfEEKTL5DayUsgieh",
  "key10": "c5iDvewuKSJHf8wH28qj5Ne6Lwy9onc2QA1J9FaFuVL8ZizdcZWnRWBowsmjSnJJUja5j9K8xfdsjLNWVRjztGv",
  "key11": "3jy7nSjZDZC6nWgVV69YSFUyqpxRBqHendt8sDXQoh6JjSFUy6YhJcdHGfUu6JvCmbJpWenzcAMfYsfWytrSec52",
  "key12": "51PvLG7xCNKYNAEpqHMK4T2NqrSszPgYofcAhEKpYbvUQN9dAaMNmqQkpHCJ2ap7afk6c53b4Q421tQVATRNNcMQ",
  "key13": "sV1s54oBeUGKLoRuBJwyzsxAJNJWdCpQXidNv3vhi1KADgz6GS4WwG6W2xS5ZTfmP4dL85ntaxEuLDvjX4ofeGs",
  "key14": "2cgB2sedTX4zDxTL7b6u9uf5adZm7Rp5FVcTJca72gLixW3DZTLbiSA3mdNxsC5RTr7gcwrc61wWmRN9F3aSLHSC",
  "key15": "5KfzE2R9FmeHCHaipiS7fhM6A29jU22h5Fb9riKoVpf3FWndM1RbFcY7k4DPyF5HiLFV2buLF5odRA2iwWHsuNqK",
  "key16": "g8xXuksTCqYZcxo4Yy5Znyoszj9juXNYEmfCW1s1aEZwBPT9Bb8UqtWD2RbppJeWEXsHbeQzyrzFUqokpSMDvkV",
  "key17": "V94bkVUbZJBoTtWn745iGu5UrwkUE692U7cgn9wbDieueCPUYNaDnYsqqaWNjdQRY4ktYP8RLduEhGwzjHLB5mB",
  "key18": "3so8cQCJEjjbaF4hGP5FSFir73SVXX3V51T7Y5KRBFYofCXh1Ckfo1qqSBM7YU3iARos3R1CfNpiZkTdCsmsbFnB",
  "key19": "4bdiR14V8LGFgBEJA3KNL3Gz9M2YttVPcY6kkoJ5fBShdaUsbCgChAh7MehwoJSsZbtdhfK13a8oCB8c6g4DXp2w",
  "key20": "3w6jZdmtKFWFhzoM5YR76zGHtpyhsjZy22tu2dXbe5SdNBdAsUwYJnxjotjZ7K9fSQD5Cq7KmUjCNusLtcfrw7y3",
  "key21": "4gdwqzMHukk6Gej6A1teF3D2wrxsa5BkMSAr9DhCPENAi9xkYS6npbBXgtmS4YUHU2Z312KiCkomyiCg1cK9LzBA",
  "key22": "4TwzvmEh6rBKfCxBte8FUiv3x3MRv4Y8QV7eeKQixLPrhGdBqCkm9y1A1ocUXapyhYY2buKpNEa5TZR7XrgX3qzP",
  "key23": "3iwGNp9JyemiTDtuJgWBrXcJWmG7d2TuNVdLuzQEB13AQGoDaWt75SYZGu63U7DswkAgKpZf9zYrxMQeptpJ1Tys",
  "key24": "3JRzbV7bQb8NFf1NsMmQBwg31hGkVQzqLg6qpCFsQiwHFTr1UTAGi9CmUrpyY1hXL18XRRbEFBemDRVon9K1oPsx",
  "key25": "2yAUypNdTTaihoy8sF8UEnXh8QpdCRhB2FKao78UNHdMii36fqJBw69FttnGZTrSqjUBRuuwPQVRk3AasWZYYnUC",
  "key26": "34pXugXu6BJyf5fpzFLVZpr1twL9c2cEpsamxoCgYLAgq7zpt8iJKP4qH57Bz9xP77W9CD9uA1BP5FS3qWFiJYFs",
  "key27": "2anAB78y4AGYNqjtQwf9vBHbeG9mgpZj8WPVTiyVn9Kv7ZBUA2BkKBQXEiVP5LDTzxRk3nhxqSNMkZNZCBdbia74",
  "key28": "56XBvCsWe93NYmth8UsVEt1hmiANYemxtiUANaDFBsRzEGioNyoV1rNWV9wMGauwjegnstYNvRd9edq6jVDPA39u",
  "key29": "4vzAKRgYigMv5WEFtFoCKyf6sbaacHjTeMgxz9pCBHj53LRVbZEKeGeUTamJoWhxbp93RsEoJ6LuTftTJAPX5ADi",
  "key30": "2vFu9Am9guENPh8yxpQWzqs8TiU6V4rXu45BmigT1bkWLAAHa5Modgm5cJujnATsJKyVJi6etkDEBaNb6tt37Vri",
  "key31": "64n6fV7aiboYkkZN5AMai7oSuWshxro8jUvzngsNEFDLPiutZQ7DDFUZMUnczczBQeTG9uUG4sDtH8sCzh33UCui",
  "key32": "4T2dbXdZkoZEDFeXreSc5Awc9QWTsayCzyv1MmoQ8ww4p7d6cyuG1P58KYxS5tBNmBU27xnPXz2jtWYYoi88Lkvy",
  "key33": "41QMUtm7s2Q5jfyeHq5C4RcdcBz2e4FyBfjd6qshmHK3w1fGGoopDE9YUXkWDiySm5dpZCLHQcxdawpxeDafaeY8",
  "key34": "SX77KHzBw9Ax5Yt3xYPa76vaSq52S3JiJytvTBH1uhFEMioDyjQXxpTGERbXugVT9vZWgiS1iwU8s2A9bHibav1",
  "key35": "26MwsUdbDTK3TS1JNvbDgEudokeVJMYGjb2ZeGecCL1FEND3JXh6uLXtUNfGLVsZnJUNuKLMwEs6RykYyJBhkSr3",
  "key36": "p4eRTqyghCMZowCMMuYNM77sJbyNCUfm2eTr61KAzSujYo8sDTwF2VsMMT4eun4phGqVEWZgqwDHWr52uWWnAtp",
  "key37": "4xLgF3T6ovrEkQZC4RFjVkUREqKTVDAKuMx1XUnZKVMSzu2rZkbocdTFegSYvWjswQd6PrFyTKo2VnRVpGbfkFAT",
  "key38": "57XGKTXRSkwRyjGGzSPTWSpAwuD2FUJ9GKk4P8TJpHWBU8coxLBnArjYx8jMiBfYEBayMWHzUpkHZDkc9Duvskwt",
  "key39": "3MCr4Z48x5NTb8xmaFYMB72MFoNo3GQHN2yqUxDmA5qe5puywfDM1x3FyDLtBqUSncoaAWD86vXLnCDBUhjdYHWY",
  "key40": "2rGoRkrN2tRcaKLp5Lqc55fvWkCBMR9MR3nqFRbhfaJYWtfgKKgApyb3tgEJ3aVqEpsmJduX2Mqsqyw6Gtrk2phr",
  "key41": "53PzZs8sUEL7TLXmJku53r1HjRN4Qd2eL9SucWEszsB2Un3uCuoWbPrR7VTMQWyx5vBQhYX46ZPmCRDKHqXyiLG6",
  "key42": "5oXwXABdzrTU626wvCVVP5DAMrrHHH7xB8p8pWXc2QjF2HSYF7XTK4mQ6fXtabt5hTLpsAKHQEe7Tvc6E1C3La2G",
  "key43": "5MQ7diwx329bHMavsbxbSixTG4AAStoVcMcsY5i3EaxSFcx8v27drUNfA1Uex7kEtjqmWzL8EdWHA1VpHAHp9Laq",
  "key44": "3WPepjqHJqHrQnxvCfetAZ13PTtPsYUNtic3JrSgCqckMTs24hXDAiksCjMXVjk2b7zRDx4jDxoCtgPPwesJXXEQ",
  "key45": "3NNm4hG2b8q4vpqNHfFtEjwBehSw4g3CLzRpZs9FvMepUP8zGj6RFLvjt4Mgux8XjFAN56EhQThyKfTMucbmLw3Q",
  "key46": "3jWeWJ2Ly3w7NAwQuCF1BV3tmeTmigiwG7DSETF4tdDNLEFkvqXXrPZtd8tPZ9n1SKa3R6zbhCtFHuhU3dqfZWij",
  "key47": "4eqwkdnshcimhPpLTt1ZDn31ZfMt937E4bpPxAGM78LYXNdJFpQrUpu8n2JUw7SZM9jTdMZehrneFMGvnBJJ4ieH"
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
