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
    "5zyeZTCvYSbJMMKsVnMoqPuYkNw9FxAbpwUFVUWZ3Xsw74euM8tUYKhkzuJERkvs8BWYD9YmoT4TFiDZnyLaFtus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Npj6cLAgcWf13VFpFpiQdYbgstdG9jGfH6nqAjQRSdyn1PoMLm1TQgzgyVkjDdWo2iQ5mVXMJ2EaxvUkNGQW1JV",
  "key1": "3WsSfjsT5eoJqFeAvDHAi4ytjFSRhTkpn1bhauokbq2XvTjmu9ULUYhfrWoosFC6V4mSV6T6H1GjS2ywxxar8Wjn",
  "key2": "4PbvcuxJ2kMw8xuEgL4SHNvg3m1tN4NamCwN6Fn6LTfnoKGGAKpsdpmBBvXw9HsAUWLxgDcu4W8p5okCZPmRLHV5",
  "key3": "dUCibtsoBm4sEyHXRmVn3jLQseGgpLCpHk8GBjy1FLpWgffHzmYWK8rriVptyM5nUpFsM5nbxviDppNfJygj4Fj",
  "key4": "4kJsZH7Xj7dovY6GTgiky8Vm3Q3SzwFKEEEQhujW5xWdX8waXQ9G6amSSGMbueLk2iWC7tY2zr5EVdH6ekpXBmxn",
  "key5": "5J5rtJaMSw6MFTMovHNYL4VJScVsmBvU8Cz7bZ4Npf5eGmvRLyqqhBQf2Hz8idPHgGHo2VEhd8vB2hGsfFhbihxy",
  "key6": "26i8a2mQDN57y7GJbijKjJnRJevaMFrfJy7ZR4t8HpkcnJYYBGkTUhvS6io3qku5wuCeV42fVkc5fYSvF96Yz9TF",
  "key7": "5LU1HUEjnVKZxvSPUTPRxnVa1P97BTtFGL57XnD1DyTekHcYqKJvUgqsuvVsot3j3D2y9P8r3pUWkrAZgfQknGBR",
  "key8": "r5En6HPes4KcbpQQTrq5gfUDQWtjxcntofShdS4qkSna5bAugZpgK58fEER2TKXw2pLBFQQyLFWHAtB1KumHPaJ",
  "key9": "5vFsQWTXeLzaxk9rAHrV6FXeoub8yL3aoF8tYL1AjYM1wVGGa2bQtbTWYMhDzPABKRzqjYygqAv9UPE2tKtTkhmd",
  "key10": "2BHH6Yqrs9qtu8PH9ZkvMe1fgRMPf8hMWQyBHhSZvCiCjm4eadmoNtkhK852j8y9dmdQH4E3uLovXCnUET3Zathk",
  "key11": "5avgxxDa64JWvx6okUJrdRnLwdAUcHairCf4v4di73vhPd7rvF9ZWMAxauAJYnGScWjajuiwYsXJFm4i3b1Jn47n",
  "key12": "49FvrVZ6hQTxpQQkKe8K4xKvDX4YyYaKEVCczxEoKKvU1RgZSHz18HoV8QF6z6gPnpr5uCqo2hkPR4RVDmwiAzvB",
  "key13": "2TZxmtvdYtbvnLu1929btoDKaaBEyic5ow6yCQiR5q4osDnFf7cszcDXFEKBCoBuCiAEuUNpos4Gvx86VgqV3jvM",
  "key14": "3kE7W3aPh9qizmvpseb1iEnVaz6JabEAHdCfhopkdPYwGBr6mG1XN53qnAVSHRSMDDD16NKtqx97aSLiS7TY41c4",
  "key15": "CLKTZT7b5FiVooVb3VptaH8UFX5CHM6qELm1x1RR7kENGAQaoJHDTUzZscEgnz77ixKNLbfV4dbJ7fz2ei1LmcW",
  "key16": "28hReakeVJjksycE6mCFq9krGaSydJtQNeL4HPoAaFzpA6kaKVSmnsQMg8S6UTdAnP48EGaswH6v3ej1tV9B4dZZ",
  "key17": "5nPWHpW3rqWu95XRWWtpauJrKCrmbrCzrKHie2SWV1uy7UNt3CQhB99mXhHm6yTEAZJ5iMbsVurJQEoynQgRkqyL",
  "key18": "5B3UV2aJQkECwPXfLb6QynTDeZiUoBmx4GDuXt7BAKZGwrSK5bFoFBnHMt8yWjGPLub3xsb8zjWQYohG4UY9sWbZ",
  "key19": "5MeRdWbFnTvk4QhNggfLVLmYoYVqg5zjUFvCR4GyXJEGGpYVkU8pGxR94k6nCgjYYmdAauZEifDTGcoBFr7KfzBY",
  "key20": "2YNK86tsnW2omAQdcFRF9gbCrkmUUgawmrzmq8mZv4tN8Xayweu25mw7FkVqsK4KGt5hGEGZXo2spzj6bXHfAJvw",
  "key21": "2sRzTVutMakaJYU76ijnimFLfC14oE9r3PFM27avyoctgCL25NmdStQXsrNEySv5UKP9YFbyCYhWskS4ViJ8QrMW",
  "key22": "6MpC43ruwXChaRq67rGAbfUcgJVAHNf6qUWMz3hA21shq9X7DR445uSYkSHZnPB5ZcfZ1E9kxfnB9QhF4Z15QhE",
  "key23": "5dg8kjuLCFvUcYTdq5sLy7uAzkUrq25t6U897NcHzQ6PXGmXJqPfeSWz8HsNngkNCxgCz2tLmCGR2y9X2bfgukw9",
  "key24": "34bKas3MQDucRuDzagRpMA8PafhMJcGzZQfQ9uvDfpQy9HD7fJ8a9Av7BTiLnkCgrvZH4ScXsgEJTT6SUCn33LaE",
  "key25": "33zqCBYq4BL2tiSvyyLvJujvuwfpQhKdRjJ6UPMY2RcZX8BHyNixxrP9ovcjLqipvfh1RryYzYJqmg8xbzmZqxoD",
  "key26": "4aYhgLDpstUSTVcaSBmAbFxnwfS66GhSTWha64Zp2cDsKo3KSprmEza1ipv9FJeTV51YdmyUNogD5nJncRWAPaCD",
  "key27": "5ALngCTE4RmyM4mCgcMMMyLeVYjkasJkgoqt1PUfEMpJzLyB3j7rVxwyuLyo6de6qxCB3FAPazVS8cCr4oKRvYKc",
  "key28": "2jTwmoujHuCmg2r8gm4hePgapb3rK4EpXscx8ft8UcK3XVENghGBbai8ZNGYMybhFtLh11VJkmDqX6ahw4hLi8W7",
  "key29": "3ujqUW8WaSfYiRu22wgtSSjfW1nbKPyUdT38hPhuZcrghHTcsQq5QuFvqQUjPWT4XWRwEEyXDnLEWpiAkK7h49uj",
  "key30": "Gxvc9S2tGQpbLSMRviYijBgnfNp1Ev9TPsVqArFGCV3MrAVq7vbVky8xgksEUBPrSHwX6mFGMzJj1HXyXRUqDEf",
  "key31": "4QSPFdMJ2SygGCNfXHcWBY2Ko3agvqGDdfL6JezJm5ued3UZDQurfh8mBE6APnpyJ49Q3sxSBxvzoWoiHcQsEAXz",
  "key32": "4ftHmnaAxVbqeDm6gG1K4nDVvtAteHm3it1akvpSTBBkcvNG7D2LwuhhSQJEFAjkwS6zvzNndeHD2WR79we6ajzF",
  "key33": "5nkveGJzvGdJLfhKGzthCiBFTeTL5vMmoujZTQbQ6mkn6bXBwPmv3TF9xPsDsiX6fvqW9uSD2GBHYbdgQYSM8TSj",
  "key34": "4f4PrreQdTMTUFZWod6KMBRk9Ncyya1dn4GMesCVFKUou3RHV2PEExM3jUwPXVNxexfzSC7VSE2cLhyktuBCA8M7",
  "key35": "3XedUbsukPcpLnnfAXoqka9F67Y1R4i98VQs5B3bLjGvnzkHddc1TfXPaj91zZhzvZfbzxhbgFX5t6fss8oKArT",
  "key36": "441nz7zFpPBc47zFYAvJDdcBHrqFBMvPQgK2mkagmaYKjRceMGJZPHaJY4SNZDyVfxKjyY9Nzh6Xc2hEzLkwen2s",
  "key37": "4kipEXx7QvZe5uVPFcUHF4AjbNATftoeqMyth8PdBUr3K8fPVc1XXVueQorHaxZCSnnpqFFDPiEVof5CdUS8BKiF",
  "key38": "2m2GEeBBNfL83jZ8A87eSrX8txQfb5NvUEYu7Xc6HAJaQjooELieC64ZKN4RfDj1kzVn7oz2wk4NAwA9gC4FVnpx"
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
