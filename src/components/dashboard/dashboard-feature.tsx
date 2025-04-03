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
    "5FK2giiZDRQbQX3km9KmNuLpdFmCQzJjQe1xFzhxbbBpph9Smxox7akQ3pPSgzTj2QHvjrJWUo3E9WiLh5xdR3XY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hZXw7Ev1MKzs3rvrDbMDqtwfKYUZmES2uNzpddVQuZmnA3Kz2qWMoHgUjd5Y9WzpLAFvTYEvgB8RyqA7HXutBWE",
  "key1": "3sLeCpNr2VX78SYzVdjrBtprh6hwYaauhpZTzCoXgi3rdE1TiA61Hdm551uEbY8pcdLwY9LqHh8nQrgJkQvoAuqA",
  "key2": "3Pg3q2FMRRf1PsSWQmSrR4tjuvzrbaprn4V1uV5B2qHGsGGSCfHgHAp3YWbeTDA5ViMGLVepR5W5BRCpUZst4ikX",
  "key3": "3kGGDnWv2JFhr3p2mHx9ShYRaYzvtHehrvCsMFp5GsYbBLtoifB8eSD6AvS8v5mFBUJv1EhpsexcPdQ2dDqQogB7",
  "key4": "5F2NufGbG9QgcyHfaXWRmv89Zqjyz4f46JrkjtLQd5DVFHuiAHJuZmYjuNB9ChDi9XisScFvTN6usjqtp1xppNKK",
  "key5": "5cfQXV42tSM214P6cVkRdFCy9rpsfEnjQsugeYiuckA5tc9XgKz5QsCE3WAnniYRddmFPtAkfNCry42Y3o4d7j1q",
  "key6": "4vARk1U4wcEarUSi6ddH4nxYWmY7gGeuZWC5LuZnvtrR4MPABzi72zCHq2SCEBGbCzW2mLtCSJGqhCYWq6icKTqC",
  "key7": "2Lf46Evff64NaeD8FgqCJnuA9XuUL5ZrU3cFzm4h6CXQb3Ar47oQYvyjSqvie8HLKjVGVbFYBc14VfL1fotprLKv",
  "key8": "5FyJ9xCzgTKjePt4XcdpVLa2K3ZpDYrGyPC6pEUv1c8CSpd2fsVyq2JDaZGxpByDoYwJgyWPuyX6NFF3ALr6Qya8",
  "key9": "4GKxkTufBPHgBrZRTVHBxPx8x28grVezYVAoVxokXHH5tN8vSwg8Qdm6pLUeVudiabVJoxnhVoGBEcMfWH8BeufH",
  "key10": "5J4wuRp9hiEVGq4sVV87pDajRQbkS8QW6BhAA2TEC1eq7gvYLSaeu4CxGm4vzgYewtDE1eAMP5Ce3B1dAPRLqssD",
  "key11": "bxWopgLDSiEdLtmB1u1urV4XUXYiU2FMHGttb1fziQRxQquyNw7NBkYxQpiLTWbE1Rg64ySYv4RChg5CJGwuJp3",
  "key12": "4nUEY8QBPTRxDnmCg3bTFcDKSuNiVSSBstixAbrDukkTwZxV16Xs5hQY9fgnNsTKaAAkRDqFKRuSPxX6QEkRKG74",
  "key13": "2wfYx4GbnmxLY4XgRyW1ZkDLhzVUDyME5KZJ4GhqUhA1FsnkpUBa9f2AnLyy5gFWt74AmAkhrUWF3C892uhXCV68",
  "key14": "62w2imK18mMmL7s7MH5ZeV6Lpif1zH8qJ1A59tuan8B66aADdX3KmANYwBArmkFpcz37ZBwPZPYrDSsJ6bnQnL1y",
  "key15": "3TLXsopiNSowidoidYDUw3R4PsZX1BTZ7dMBnR3Zw6A9uxMZ33fWCz27o4Q8Ut4oAFWt6bkw2gZoDbTtY831tpTy",
  "key16": "3rBZxLuZKenLzCwdkfS4SYqbELkRKYXd99CzmViJbPnY2FnRbCUQHDRvam5DJJoSc7yXB9XECzj3P969NgcUHesB",
  "key17": "4DbTcwJvaEBKFC6tRq2zAsYEVj4vwzjbWD5AEj1kXHYpGSDobPs1Tsgum7AFUCG9ZNsrfQ8EKBshWHsdR5u33Fjj",
  "key18": "ESVqQdGx4AA4M8vqBBPHhgVSUpW1azYdwqzYSmQtnXDQGrqCmfTnx6kisf4KY2NVpy2DQKvPX3k4NYznDrb6SW4",
  "key19": "cbJJDiWXRrbEy9RYS5EoZYL9YRhv8CVVoerWT5cTBqzp5ZAgBnJCmX76c4Qgw9VpoSGabJMp2gBLAPnov9tWnif",
  "key20": "3Tn2pao8WV4zsP3Ut9jqBuF3YRKKFME4eCgmrJf7ZpKqSLU3QFinBMYYdy9SkhqwfWq684dG8LEGNNLm2vKou3Rs",
  "key21": "4Den6FXWB5JiWm44oP6nk8c4V88bNh9JPs98LjouUnbUE9anvX9YYfCKqxB4W2Xbi8R2vgrBSup5pngKggdSGjXE",
  "key22": "3xDdvXLfZZthorfNeMjmgiuq59yXDtpN6fKPhkYVp6Ln71HmFMzUQKbYwJfMAE5TUdhpHhNuMdqyyosYfRwGNFcu",
  "key23": "2AJid5sbYDPazNzhL1syMpLD7hjtzf2L5tietyhBXjsiCEV6t9qkuuzwTZALCf95ELdGwqCwoZASvDaU9oaGbveW",
  "key24": "d1fV3zmhjWE4sa247USR6uevqz95oBFFaNumEJgHjsaGDQ4Cp2jhu7HWPnBPUnFHXRVdi9jHCZw61SUJQZVFL7o",
  "key25": "ukyKYPATBvEU3L1HAG37384Aff3kRyDviVCmaWoxJX2ssHGitY4FH4etCNGwWJ2i62ih65Qt59wLkFcY61eyScG",
  "key26": "2mLJfm9sZAkvTyc3XPp8hGJo7HXNZnVfDr5mEkBWPv1KGagY4V5wnWc4rjwksmjqT3rFyfdeh4UD3k1jgogsJpyj",
  "key27": "2Axeca99VHvMbT8e7hEV4bMiSXJuvhpW93MDKazqB1X15cUQ8VKprcqhGfbNNdzrjcDPEEjPiiV9RRYz8Ebzq7Wx",
  "key28": "5otdpgXF9FcJWXv6RMedWweDewVJPbhnzML8sremkTSQu1JmqgHk3Spu71rrshTXPySojuRpVrDnoWUZfL9RfRpE",
  "key29": "CJ6P4y7qaTuZPR3CTDchVEpAngptp3yfUbkQSKebC4mhm1WVeFCdyV4N5TQ4MdX58hBvUJsBGLziEpNHinzuJYx",
  "key30": "3qF4jom3wMrkLDbNA7zXPjj2J8L1DggqCBziGyerLaFapQpdtZ3e2i1JFB6CXdW4dK7XvbcL2GvGAc746McyzxwF",
  "key31": "48LLKvbiEVpi5ZhMAF4EHu23zohRLX1jpT47ji84f9WEgsMRJ9SJX5HR63DdtnAHazcckdAMC24TcH87wnFvC3RE",
  "key32": "3TKazqoj11QE2EAPgpP61T4rjfAac3T5CTGHdzZrzu1p3oqDgfUaGKngS2GcAS3kFxqdtEYuWS1UeaCpy8URBzzW",
  "key33": "5f28En9gss1mdw2TVSoVXQPvGGhp31tc5PV1duSqhmh6K77hPP26k8vTJ1HZ4Q4yU63HT87So4D922VEKh2MrPh4",
  "key34": "3icArCRfXvfW3cSv6ywaayYtueq6652XKbBrydLiFpReQ17XX4sifpZRyM7iinrTcCDi1R2dip9zKpVh5iDC2cAj",
  "key35": "NbVQkAWjv9ThHPnAanDPtaNgBZ7dzj3XeDv4BxC3WDfFSQk3SLuQLZm4CSyZWj6K5PQUe7N4rKAcqjo3zgfKpL4",
  "key36": "2dZSZAKoPPRj5XUpHRvs1qXmwQpYrhgq85nM5MxEvT2679UgSVwaxxj95atV1pUpRAwotLtd5tjCVy8QmQnPJJiF",
  "key37": "3AwkJBqjBtC3jbEmL7TBfXZqdifRxJqevaA9iG5YTQUEqx3Ehotozk3uFDLhufWEUjSd93GkApVvtY1tp3fS11y1",
  "key38": "2m7M3rkdx73Sh9UqTooe7L5ZqRB7ABdP5Sa6axLaJNtH2vEPv6i68cmBzFCJEk9oQXubZYxT8ctAzTzFyGbneCmC"
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
