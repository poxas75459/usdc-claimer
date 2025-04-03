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
    "yWL1V2HiYdUQeW3Px4CCpfihJzZj8SDtbCpxVyP9teTBZ8B4KZq76gsL5VyeX9RtZT4TM2BNu4f95ANHJAWUaDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wg7Yn5yzk8ui8cUUrQo2CKgDf5Z8DHYEBSbzDFmpsV8NCqfNfT7EZdZWMmh2ANdp1ymGBmCwarRzBi9ZoGFAjk",
  "key1": "2vU2fL7hyL6g6RSyJTwehrKgNDJxyZzVuWqaVV4qzrwXrs3MQp5JLxrazrbUFPnLtg3DHWYEoJyJggbtyEy73sGz",
  "key2": "3oprobo6Xhkc7dvU4ScgnJLrwTgaLQMd311qjkg8tvmAQBPeimEBUC7dGvRnL7TRndzHqrfU7Ykaw5JhCcJ945DY",
  "key3": "4QiK9BVKXBC2839A5Kb4MK6t8ETPHrYP5XvaQ6UPAa9J9zvKGrzNfwTxA1dohYp7FsQzShpdJPmaTBR7HfYgssvL",
  "key4": "5rpJNdzCWu8k8fQbusxVFsyGwNJaNcBk62BDfyLFQFeQVeWE4EasSJXj8WYZYjwj6GocF7DAaYqhY7LVD1GkwDYr",
  "key5": "2HVhM68pDLosQBer4MBjErWjDaMEmdos18Cf13DX5WNfKfGhiZTPKADxtUEtCeBzr2iKVgiTAvMgTvYSGgzKAvh3",
  "key6": "E2m1YDfM5pxC5HFVsTYonbrnAohhd2FqheiL51ant1rnqRUHnkogBxPvz9bNdUtYEZzScrQ6ZNZtV2hb4jmxpA2",
  "key7": "5SbirCaskw2rTR4gsDoT2MAi5V74rqpASCpdeEkq9XUA5JmxJa7UhQxFBJFYZBdqwYFCCgy8wwvpJvduRA2hdhNH",
  "key8": "2c9URtFq6sk8NCn2YaA7PR1jnydV8WeC6Rpq1aGykLcvqkQRVp46c2et9mQGSunWfDi3rDQa53stnxTswQf2dkK7",
  "key9": "5iL5sXFuy8prKcmW3JqVDSHmxpS6JNJmowLz59PNu6wXvXfxnt6cNshnbMkALHVMY8YJNrgL3ycJLnsmL82RrV7v",
  "key10": "54i36oXoa8qp33BADCyqa8swjMD3C6ZenXanyAGKmCHdMkCuknuENtHAmbLK1zV5DL3SKnDdRktdGLma2DvLE7a5",
  "key11": "42qc1wXoMJgg6n93B529Au6LvsRsCnKCjd4vszmJQUBqNA9YsCaky61nSSKk4mWe9Fni5vEbWo3xmXhT7u8HAqRJ",
  "key12": "54La73zun293aCtfCXeMVTRhAdXMxHoYJeSYFKQoBcC6ExXW8XUFoHrWknRMrzrJGsSZi5uebj31J5CkNhNuEk5a",
  "key13": "5qt6TXtMvhu7hi3WUePoukYyf3Z3ceaREpAjqrvNQsJqm8MQCHg4kp2df99LCeL26NYFA9F2se4kENoy4isQtEwN",
  "key14": "5HU2hjRRZRnY7Lr2fopCQZu128UqCyxnpACKrwHgVMdYaDzWdkgAH29BxRik9wZkfHXdHbtMLKVvyBWanAkd3kPx",
  "key15": "22hjZRrmwMsfapPDUwjAaUX1kSoXS2ACcWFnfqBqf8UJZHEs8V27NwBhbqQzTXceGE7T4Gih52qBiDYqjJKsN1FV",
  "key16": "2PBku8PvSb2Bghxr6aQyXCxFPJnfkto7upMWoMLCmiM1NvCqdiwKnF5CeWEzApU1979eMyeDdvBB15kHM9uEucxk",
  "key17": "itncUrz7dmhAk1UzX6tkpjQcVb13g8nQWZfucQRka1KowbfZQYWnB398usYn5CHk7Mz848VKtZH3hSVcAeZmw2a",
  "key18": "39iPUeYADwYoijNENzd732FBWpM1HLs4JFJ8uQbPZuW7ikvy61ZWm4i75a343PvzY9TQepD8qaYWpyKJt3Xy9z8Y",
  "key19": "4EDCtqUrRSQmTpXVyakiMYCTB9Armi3rDVHRTNZHCCfk5HiksJW58ZVPLjQMq7QMiLXerMTQxdEbdV1us4mv3gqh",
  "key20": "62CuFmkDzuGsTAGNc5ws4TDEg9zHDKnCbPwAMAi1UeNrwquKSdBJoY6P5VjAp8ahJ79cNbp4pVQNkcgk6tzTeW15",
  "key21": "5zqcPeH1DQamTSe99oXJYDM37geyPDThuJCqRM37gaZyLCryoSE3FWgvB2CEB36zr91AtV5ie5JunpHu14bnFewq",
  "key22": "4v8UiobQiRSpPypchuvS4H9qFQnVj5j1BkssNkLRDTQFJWgtPmD1FgsJm81ULdUkfntBh8FYAC5CRQvFHoGBvxFq",
  "key23": "3F3UxtL2z2DiGnrefNL4aQmg6fBAdQdErTiVupVLQtQok8467YXqm54xrfJ6CS6PbLcGkgN2ZTXXGmuzQg2oug2W",
  "key24": "2a9MyHMYi4bC5mP1ZntDUVKWzHezzYTdqZXqQoLv9A8JJuTSdwmZYFv48uV7xkQEzDgBxo49jGyVWWhyRCwSkkNw",
  "key25": "3umZuuwkGkTSotvyozGRMrPzCXZLoQLuoXrNW1w1qP36DVMC8ADrrXh38sZvVP2JFUzremGMGHxCXCjh7FhGWWBo",
  "key26": "5s8hxx51tMqUkJLVAKdN4pubpZ67N1pn4vvT5S2R9WxAyzVVwh6MT56XpVZYqtxqhTARWAWBzmVn9XUwE5sGeV5H",
  "key27": "2VYCUiVr3y8rBcXGT16MkK6xR8Wgk69fy421ptY4jfKwHhsERHg5DYDe4oG9RX6ukcEJ795sstdc5HzmKSwtSf25",
  "key28": "3itgNWT8yxXEAtnycsYcUuySv9LA7FcTm4cFctTBmQwaDBRC9x3UZg4WLrVp7LgoxHFuFF7P2BwmSBDWSdeGsQt8",
  "key29": "4bGD56R17D2bZnaAr6oAePgMzB8X7EH6FLtXcZDLCgHxkJnotEWqbNgX4KDgUX4FkTkWhQN7HjtquLTzVQUR7ntR"
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
