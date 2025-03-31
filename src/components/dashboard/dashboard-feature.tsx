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
    "449ZeGPbuL6rRLdcGTkCpLWegbCAfm1JJcwEgc5KYFJpkWXRzS5dxYwsPx6ZfkBz2xVTmHKUHJUGJkg8wjwVqwE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XDwWYcMndW3NPHDUF9ZTQmAQ1f6s1zicocCGQyXAei2p8DbdMZ9ujMnrgQxxBbW7ry1yonmwvkpPZ856siFKyHz",
  "key1": "3B6szacqDcSyaoinpqqg6MMWd3PD6vcvd2ttBT1urHodbzRkMit2pB8ymD33Sm7wqna4HqTfuvPmGcBMMdB8GWnB",
  "key2": "4TRcfJBrZ1ZEN1MWWVfcaw8Nuttzj13CeguFyvzLxhzY2xVUpRaw44eaECxGTsJ5jh3jwGBuj8RRW9no1Jc8Rp4C",
  "key3": "3kceJWGvfpaTjXLtgrgyUpWHfu5WUm5F5aLJfvpFWQym9VVXRdKN8SX1h4HbQUVexhNnZuhoAzVyzCqAXXczRj9q",
  "key4": "4pN6mSeDS228xU6Lr9ofX6BZfa9sCK2rBGdTMkv81HgiMw9wDaUsXbL8nPZ8SAE7KkpSZr6x6MjZt1WQeJJbcu2w",
  "key5": "2vVcSBwFNPCYHiSFnBQX8xt56eHQhCEQWihdnjMbZqPaDeDc7LsGkWeDT8tJikRq4kh67N94JUzERvDNnCBUv3Pi",
  "key6": "2fcDWtptVVqf75B58FrNgA3MW4awAnQDg7pMPFhwkLbAEes1a6bvdkoXa4T5TEcX74teR9EYtCoy2heZrajdWeAi",
  "key7": "3AKSDDhs4KZ2PDLhu5EmLawGmZcA3hxa7WjeFJdSjvAoPhdRrtSU967iQMhXCNBeXr7fXnctzVSCgMrCHgVet1KE",
  "key8": "3Dz2bTFfbJNELgzw4h28v8RAj53N3Lkyu5zMRQHGKbf4xY7sqXnY5ap8A1JLkB8qFnKfpEMkg3TRMkYYMQxAR6wH",
  "key9": "4GV1MNahPqJp66JykAm68g239Pc3EdBunMDxLzzZCHW3ZLZ3NBK2rhDG3nVZiGVZpGKhGwiFJBR3rz5MGwrZPe95",
  "key10": "2m69neGfA2d44KxZeLkbvPeQLGoTDPs9NAJ3G73zSUXvUtmhCsUpn2F2nmu4A8QpoLMRYtn5UG2QH5gWJBEGBhKH",
  "key11": "3Av3e4aD4euM4uEEcjpwFrmD4eEddwewoCiGMdEqnd5D6w6TDe9K1ZPP27XGLL5JiaG5hejY6YjtiXrPAbMQkH7B",
  "key12": "3R2U9TcMNHHjwE29APPRkmX2xhNEYnzGMMRvkrv5vDcGZEp61wsqN5M2LTwdxW7PrmSnhsLeWe6xdzWq1Cn3sNNm",
  "key13": "4dxD1hXFQg3AKEfipfUk1YFBDfc91T44QSjBbgiBrWuEWpQJEqewNY9VVteFnkqJ3RH49sfc9GEcStNtTofC59EP",
  "key14": "AbrbnEqFHgc8xoxAoB2DenVcYg3zmwRQ7K9TXbZtjSHVwVVbtBTYn3VdPi21Ti87mtYBz52ARaqx1RcwdavqeJ3",
  "key15": "r8bdVDJ9KyWVrZJf4iX9THmm8itXdeuvkU1CGZaqhCkf7DpLewV33esFGMLkvEAWopo3QV14QZhu57XcS6Rboxp",
  "key16": "4pdQXEt3gYgNZr7oKBGG3rEjaGTGqSMLp83JhqxAwo4xSy4A2oQXgspvSp86Pju4DdjJW1a8m3tpweapFarHVao9",
  "key17": "3W8iWq14K5WsumNTAwd6Wv2DVdXMpjkmkJFrSKtZR7RQGsfEMAEKDDm6r3us3WSmNgp98NsFb2sEymjS3GoKCAQ1",
  "key18": "2NddsBRfvYekbeQWo2L5B8uFZZNpNeRDd5U8VkiVHwpq2tRAT7MYxY3K71wW4cMkckr6yYTHc6g6Mben4Cw7ZBWG",
  "key19": "3KJKcukeczmJovxPr3GasBuv8qG8vStjZPfqxvL7DgzdVAh3hABN7eCgBYypWXPXbeQRxjSZTPLZqtr34Y4m8cue",
  "key20": "3qzCNHy2y4nK6X7TPmHZMSWvpfHHVxdaLd8WxFqj6bB88wbBbFMwDwUXeZSqaccEhEQHY5msvG99kwtjSSfmaGJ4",
  "key21": "4qbc2rzMtmbV9hpiBRNxcHGEpbZu4z3jAuw3cdWcookaXsTHdjzWKxhkSoqEwKKFVcD3RNAm7bASmmhcP9Qvx6mH",
  "key22": "3uE3D5q88hNcZ9SiecsPAQb58wgvc3hPJUK1acoBPmQfYjnwAYprDF7FjjjRYXS56WN8MH1xq1ryRJ9YvMHH8dQn",
  "key23": "XgDsLj2STrSjyimn5Bt1yg6tHNqiWdHWatKd4rYWXHT5pLeGkjBsTNym7RqqrVur4MfM6iRwvXcusyeYZsQJwus",
  "key24": "ZYq9qf4hJbUndMvWysatNRhW59SqLxG5Y8xTUdvJJ3sqs1nNYyeLaCkUqUshQokq4CDUwQmoDTBswFc8yqWMTES",
  "key25": "4ZpN6GQECf9PJVz9yCEpeXJCTWRECoVmnwmPjNfHw7ghVRQfDftmeAN3ZhdsCEsX8n836Z4bn1X9zpFaFPjunbro"
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
