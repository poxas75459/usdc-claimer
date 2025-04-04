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
    "5bNV8FK8KSxFXTAvZV3k3sJydncC5q82PHCYj4EbagkHi2ayH4XcygWj5EnfGBXeCyi2BmbqJhS9tnWskJBCyCVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67gdoqHY9vQzS2cpNnrMXZ1DSrTv1N1jx8XHKrmtPRi822pCDi8srB9Ewpa68YrmM8c3HX8peYVnuNXQqTGJoV88",
  "key1": "3G1MQ6e2foATnKUSrBJSgciNjn6AcxQdJVytsXBNVdZHi4fAkg4QqSKBPdHme1xGHLhL3qaFpBddTEBsZ9H8sBD6",
  "key2": "FwgPE4beb4SbuKbYaP2cd4SqQwGCjbhy5mbLbVnXhJUidZGqgNYvB1eyWp7HdV4SYUxDpqLuWSCT1DGHc3oXybG",
  "key3": "4BZ8APY5ZPZsuEKgDAJiEJFHus49fLiwHaKhoBN7Hux9NzDAmErvLTr13CLi1goNZuoLJgfeV2kGbpopoXqVTbrV",
  "key4": "4Yz4baWMqey4AJS8yFXieQvAKyFBFUUW6vh4dfYqjEnSnXPKDrB5GbL5spefnTtrf8jU7HTX2xa1ZnwK3qphZa3R",
  "key5": "5XKG9rtVc3MyZz4KoeVaxURHhLhYp7z1kpn8Pza7hJoZ8PibKTygg28s47V2bJaqxzpxyetDo97nDM2ZM8ki4RP7",
  "key6": "kvFznu6wbNRLDBk6ThgB97sHpK2PSLMzDPCXPwvkBu93sTyoAfLebRAmekPdw2T8YwercUekxpYixmtZewMkabT",
  "key7": "aTrWYQkg37JNaMAY15hn4ctfacpqd2ZCygiHBcZTwesEnQ8j6sk4BAjHoKnXKams2kswvkHP4coyoTfcLfR4QNW",
  "key8": "4J3cUiXGWag3ZDJjYWGU4YYWCnec32SN7m9Y7yEVD47d3UCsUsGJtd7QQZ5ZdhoQa8k8L9C6sLnSkNEEkQiFTbSH",
  "key9": "2AHZBaq1mHXvBQJjoXtNKCtzvxHkeQJppsd97WeLo7Dq2c3DjYfyjW17wUW8Vm5tEN4HsB1B6p4FaCAci5NFHPym",
  "key10": "2cdgSR2f6gmAMinE1KHPCyCdQasoYr1z5GHGDjL6DhygrAU93n6VaVzhHiRtFbbowYh2ySQu6L2C7P9GGvdTtN4W",
  "key11": "55TcbscgghH6WQBonNjERoRWVYrmEuR3ChKGu2p5WhWXcNNqnQscsprYATiZc5iKSs2i4TAbQWDDZDWBZuB9RPuv",
  "key12": "MqrbcVGt2nZisPbCgPS672cAPz2TxZVAoeXV9Y8fvkF62M1o6uafyfjt6JHRNDZSrjyvXjxPGfmRY5255gh1Wee",
  "key13": "5dAdRCbaq51YuKzURx8jNVGG5VgFshHCdbdkgKGuRjMRLAG3Jv272sQquX5AoCo62APX6ehbpUs5xfdKixBnCSQd",
  "key14": "4fYjtHUaQVSauGQzuiJTDHYnyEmAKy2jawxBwm42h4NXq5Tj6nL8x1vy1qUtmzjSeBAeRBJHGZH5q6tAFgmSuxdF",
  "key15": "RGP3uiiVQYVMcbtX7gdsWmD2BicYEyjcYwRBG8pbqQeZrSaYSvdZxWEk2PyV2vTrguPCiFZrjvLKAKG65QeeurL",
  "key16": "2WovyCeDRr6xfP5jm49SrzkTcYeQbQpAQ4ayFRCRUhdCS7SwC4TzzwAW85WH4GDL2MQrZo679ngcr3rx31d2Xqi3",
  "key17": "5SuvJzLod2M9v5sZXn9m95h8uUtZcYbMRbr1bF84xoySGWF8L2gfmYvWXaLCxsjQn4pPnBjNZ8iZMS5ps1UoJiC4",
  "key18": "2uxCtks55zXQTEDdSxYkprXECkp6vRimDtAVVr4j4VNCBwBoxunUrqceWSdWomkrSGBjieyWcravTNiunVSD8UPd",
  "key19": "2np49hAFEeUraFkpCGig7SAPwUGE7AxGW2pa6x9dbCyPssX4dmLMbKugq1T6C5mVE4XzaR249sjEBX4Su7ZvwY25",
  "key20": "3DHJeHCGXb5BzpvaRKkbSW1qdbJNRiopnQuanDivtDbNJKHxwSaB1npxEvBzhxyX9qdhUxrBhjPrTrR8WFHxYx6Y",
  "key21": "4MCtNe1jjRUGWNdhnFHtwZuzHDkhnEJuveR97Un8BD34PTdDD5Z9w1M8rcR6GNtibvdN7FBKRCRb6paNZQhjg8Xr",
  "key22": "9iLFSprmSDDtCqsWTgrUn889hQhLRnoCGRdifxiAE3Svpz7Ni8mHxgouWfuK6MwovDCR5UWTpQzj7nG257EFoGW",
  "key23": "4wNjszkU6Zvv98Vuvbbzumw4HFUTDgLBFrNTBZUEckZJwqGd4tgszNKgAdjWHSKnAX4w7GqZRGCijdw9HwEHiznM",
  "key24": "55KxATCZxAfr54gBp1hVwVdv7pDhz9du8T6o7SndwLAvoHWy46cZT4howreKw6cv95ZGqv911x976gAx8LowKcge",
  "key25": "j3TcwM3sTzJWrUbGboAYoxkDHRuZ8nPGubjsvmuf5A1QqraH8t7PTYniMxZqhDB5EGQko2g6YAmf6HQavikYMZT",
  "key26": "3rT3t6hnty1HhhbiBNUuwBkqFm6FxXzVQuhNiiKvPWTT44Jf61aMwSxNMGS754Yx1MRdhuVjqfiHsy6zmoda5skc",
  "key27": "34JozPy4cqj6CPTcKQ5iFvUBiVzyVcDpBeYHRBx5izSoZEDUREFr9h9gzmZw5nXNzuPNhBLHZU6JoSQP95vEWuPy",
  "key28": "5CCawv4UfKczRVFsotbWYcbxvsFtEPqWaNo4Xj3URehjXmUL6VgzjHEqX5Aqc17Pyh2vJ8AKk1nLmUe4h5sAxGxW",
  "key29": "5JJ45zqfuWHqizTG1Jyaub629dC56dgUBw6AGuqQCUmQsJ1ziTfX2j4r2nzHymTPb4MnnBEgrDQMr9g4S6r1UwLx"
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
