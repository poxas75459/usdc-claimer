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
    "5Eao12T588XbNWVBLXLqujAKQVmxy8PWZryG41VcrCEuPYQPTzfYrzdH2G3goKyyGe26SmJ9gAX6j7UC6AfVtYwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jKRsRNEiNMbfAmimjr1ZkYmrq1r1FpyeZSgwc8xGkJxvF8etVyyDbJJRBB9SjGaJchGtXj7otWrmHKny4s37c8z",
  "key1": "2vFukappx3BdBjhGCgfwUoskxhuiAP1CgiHLCMqRSSrXxpYCZSd6f5e1N7SSSXEaTV49WpVR6BnPzmX89WTMTam",
  "key2": "3YCuZL7uSwcwABF5tR1STwo7KkAxx1T6RhtfFV9bk5YbCgAY9nPc6QwtTYMFff3MfqqK8w13kEL3BC7LxSvfaz1A",
  "key3": "4Q2zSmsrhTy2xZYh5noucniCLjLfLdhbtuXap32D7KA3FBejvphn9BGGotJetwC45dvS8kcNJkFJ5vBGHLxDXf2W",
  "key4": "Yyci7EqDdsgQp3YvSjT3ghfoLnBn8zQVNhDtjJ4ks7fivdyusu3yaAM8WbJP6sqyCou9GpjWPfbWzmkrtpMtnb6",
  "key5": "28uqtr5uapsr4kRhGFWVjiZwyUymLaVwdd82igYWpc25JRMTLoJ6CZHftKBMKrAZdhQ1ZyQtdBENNo66Sqc2wk1X",
  "key6": "bgTHvvM8h4jAGScMyWossESobMCVvL7jpeLxtmV2cX8s6QPYifnmsfd6jTeT9u2x49vy2YFJdnCAqyVTVwHz4U5",
  "key7": "4qxa1p7CzrVKK6hFpmefPYWMwmKYsEt3VifrE1sCHZ8PfhLEZbG22MtxxzF7d6G16qca4dboJB59KZXwWSe7SUwK",
  "key8": "3Vj4kwWVxc2APFu1p1wCp4B5Buv7K9BrVC6cB4WkznJMDgCFxqquyNaG9QdiNYSSHFPYUkUxreRdN9qJf5ihz339",
  "key9": "2evQLtt4Gb3rqMBQxL3gRwuhZvtDRdMwVNLwWAznimWD2Vq7xFTEyEGjLiB2VhNwcPDN7wG4Zb7EKg56kg6aveaX",
  "key10": "4n8nATcWKb55t1BZqBrcfNTL9PWUm5Xh7s9ntBz8aa7xZU3A9UZGXVNynQP7jNAgvFBWzFtRiu3YibGQN7KXTQy3",
  "key11": "2YoyKpn4f4yMcpSddyBDub9Ry8tAWkqiLde2MfhfxTkKMgLLeqgxYsZGRfDFPV4ZpdNdbkU29aWGSCjGfuKdgHje",
  "key12": "9fiwJWizjZxeUYCFGe5RDW1ysK2ouw3yx3RAQX46nC25LQ44RJ8ksk1c3ougq4BJEqX5MYJrxWkzsvNeovZu9ty",
  "key13": "3hHsqpDf2YMy6upFqjcz52P5qmm8sYkHwo76yJ4TUYk2wDNVnMXwcnLPpyfvb6uHr6xnXZcy7W8rb2f5UeocZHUg",
  "key14": "4V649WuMS52G7SvfTWMgrNPvmDPy3KTGQbshrYjXZsUjVidJcpmZud7j1mt31rsd3whqrJEW1k1gX4YcjCdKFKqd",
  "key15": "2cebQpE6A66DGvJ8cMVrjr2ATcSMsiquV3yQj4rf1TPmSD7yjZGEPfU8vgW4YRH6vM1uESibHjkNAwRQFkk3ReQV",
  "key16": "4J6eewsMgJXbduELQ8NoKPa2mqzuSzDGzL6rAwZPb981CzRof5YB7Vc4SR4n1Jti5iq9ZWZQxpTZL72w6DJh6dZ",
  "key17": "3f2a56UPCEXagWnoN5oot6H41zX6VQ4PAdKeoNUJ2zvZY1DUJ1gHt43Egv9gER39yBrqjFbF1AfNbAzPVeJF2pNJ",
  "key18": "PKsTDGbVqogMSwAmEMpRdGA8VdhSQqP2j8YeSZD6VSp6fgTugQUwf7XDXqQMxtgckKaZP1LKqGtt2wYAoytCaeF",
  "key19": "fpbWV24jtP4cVLeBxrzGpBHdXN3DCmq7upjicefAfSoJzeYNL7kZPEhL83sJ6P1VGuoCD3X2G9yHKb8WHcqD6Kk",
  "key20": "o8qhcA5UeWEUjtmCLSmXkjTtuQWWXRFeGbRgUAjDBfUuUV1EuPMTeN3nmb1wh1QozVU3J5mBWWT2FnjGo9G3Urw",
  "key21": "22MAtTP72dk3kBKiGTwe1w2imp66c977HJxPbuLcmgZFb7bwnsqVmx9K5tKsZCuQMqnQgeN6r9HCfXZF9XU7hNy3",
  "key22": "2f8RmNnsSMJ2eqbFphZqufeZw7sL5d5cV3NFxcAKVWzae7ADXqfVd26X2RDwon2EQCA13aRanpYAFRRNdeqWDA6v",
  "key23": "48LaDQAEjthKRANJPKzqET1ub6Wb2mtA7hVdGTvNRcBSGZ9gsdraRRMdwtiBvG49Ce7dP6simgZcckfbpKNwpugL",
  "key24": "4Cas2g5bt7sNAYUyrp9woQktE8JMn7pzvWRDDrYb1DB43J73e7UZU1R5acjSq9jDGuPV9Myexe8vsAPJVedmcdv2",
  "key25": "2JfBRtweoSco3MB1zgHnUfJYcZWrxATeNkt7qE9J6qpnnKZN5bBTbtgRhjk3yhfakBXcoT1MzrJVVdiEo8Sdspts",
  "key26": "3trbypETz26VnKRvXo3vJ2aHCRhRFLpv38eYPnvZ4oyiitkXDwNAiXKppWQ6Fxsysig1N6o5Q3W7gsQ34z292rJw",
  "key27": "2xG5BKKroXyA3aG3JZSQNd47PvWdWqoQP2docDdkeXAV4gTqm5RoV7BvjcdGSy1A87gSiSrxDtk1DXEio1uLCQQQ",
  "key28": "52mvCCCmFGTwkeafJuUhLYRxUbmeNzazMG2dHpGj27Ay2TocxKqtW5chRYSd3y7h4JCWR8aPdZNcQYhsibQG1vJc",
  "key29": "J61W2j87wAGJ5tK1wAa6hHN3goT3Mq8icQnzBFFnd5CtNArfUq9mo5FUxEjmU8SSxPUM2RMeXFcn2uSgxTBZLEx",
  "key30": "5WKCbcRNHVicth34SygZ1TcGs9buCPPUNSGgMwUyJoNfsoUpmFFw4miMvjFTxn17apzfU7tD7MWw6EjWMvGa3HAL",
  "key31": "PhwYQ4kqmH5k3ezr8bfLvvm7TJW5nBrqFrztemoc2K7cYDbhP6qEbamWW9iiM7kTQEHrnN7R1voSzABhvrxZvJR",
  "key32": "5DJN2ehaPkypjpx67FNch7W1X4sTT73LYLKHrriMuhwN36myFsEsdqJavybuoSKwvX4F2qnWM5jHgG6ckRLLcr8J",
  "key33": "3g3uGK6FDFBN3kbLcwJcYTqnyTjfRVQJKBB8Q5cPzb5Rokur13UvVnFXKPxPa4eh78jdW8CQgjCggpNeDKto9Z3g",
  "key34": "5RAiHGs8oZMe7vRjsSuhRmqzwDK3AMyjqoUBBQc45qpAep1uawTbDeR7BDgAArHKWNeg6qk6tV54RwWZjPdDciXR",
  "key35": "63wKvpoSZwdmU8QzkuyfgRP2aMh1aFU1wEieuweV8hnA7axzuFbZyXi4uYXenW1BJXnksJsYGf8zJ1YagJS4JeMt",
  "key36": "2pak1mAyRPvifxHyNT4U59JEgxQtQzikohAFCvKqT8XH9jsyUkmyVuvLSqBSuUAs1SHdLyjYzQJw3UwV9ruEgwid",
  "key37": "2Q5zpgomCxzjerDU7M8wRdUoZeQYDc1SfLVfAumcqbTvbziRcE4YSVQEABr7NTiYmLRqYdmZkoCixi5CbxsTwbba",
  "key38": "3ituEcgQC1KRksPRbobWwcBMfmiMcaBNyVHPx9QmT3JzjsMqB139KJMmtsfEZf1DNEYJCGNFBKRV9myyPBg4W3ug",
  "key39": "46sK4Ezp6cciM3zg19y8MqeniUdcKdtyRQf98gQDVnqL9AqkGbKPwyTupwJJSWkrCH4B86uzLH4AeBLDp1unHgsr",
  "key40": "3wThNeGUu8cQBXGrrXFDpzcijakTpTbTiAdmtxS1BYjHv4EmPKfAwCR9es22qLW96585RxV13veB5afnJCUc5a5y",
  "key41": "5a4yzbaDWeZE9yjY5BkfDgm7HoeikzGSh9aFQSNWPkKjo2GSXuNnM8ooxpqtNYSGHKVVizEQxERKRh6ycdtTNR4T"
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
