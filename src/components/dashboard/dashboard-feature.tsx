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
    "mBvgmkHeY87YRB21WZ9kcDASsmXskcFNmkAzw9HXjmAe6b3zAEGL8RjAkjcScTJHTrYfMAzLpaghKNu2oQzpfYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ca5WdXYyfoRWBcDBXUyaGueuTsgxxTCdF9YAZMM6ZghS49EP8Ek1sJ8mTiSPuRhXDr7e8syicyCbry7ecZTrTNc",
  "key1": "2USSriwFmSp5tdiDa31s2RYMVW9RsFkMznaemdseyi91L7iJyg5dvTKotQEJVKwgGErBmFVTENm7uKR2DZxVXT6o",
  "key2": "7C3LY8MJerSP73iiH8ih71BkDs1BNciUuEJisHAhuAWQDFBqGSABpPyxAU6Hf6nmR4UWeicddQFtHmFx1PekASn",
  "key3": "2NkosX4o6ey9mMMeLDfkCyUTGwsM8iBDsxMvHPjttpjpxJUzbUxjBL2aYNG6XM8EN1kqoyUuDCm5EvEXi8v2y8Sn",
  "key4": "5ziy7DaZccgoJzhGJLg15jw1YL9SPyCcHSSm17fCtoTg6T1ciVLbPD8Y1euKuRrsy9Vz55PqyS4Hkk7c7ACT2gxW",
  "key5": "2GA1HMcrpJ7PbQ6xeqsWzESymrkJNU27fNYkFtcnBSTJ8MyokLn9vWucKcyKtHceUZH5cT8BKPM7nVpneiuEHhRA",
  "key6": "5ju39D1KRc3RThQCNAF97ncXDDyxp7XUEWXEEiHJrCMGTcgCgZLVGgP51GVgNwY6FQhScfpRyqWCwU5pBP1nQjvo",
  "key7": "3GC849E95ZiaVp8aQh1vcrzq8WSxnHCPzDKnXSan2D48kQT6EuvhFcvFgenGW1oFx227246Z1XCokjGh21SSJdgR",
  "key8": "42973xTA3jmb9FLKumupTrjjuSX2zrwKxgaF7EuhVurfvwyaZG7QRJKCwfsBD7mJuCunZVKkpbLjU93tB1dthh2T",
  "key9": "3DC6JNnCsT4j19FvsKwqEYMK6m8dyyyaLCHkmxYiLvfxDsgjRqZ1d67XqybxsZaUEGrAkdYDYHMZpmwt4C2nGqog",
  "key10": "YMFbSHEscsfSMiVh4LLbxhEjZvWCo7wvUX2FSpoZDLSrtJsTFj91YBrMBLod9UenScJp4feCubg1JndUkMMYaDZ",
  "key11": "5aEewHuSQgFfJxdt9YNhNWBPv8qeSzMaCahDsQMrVLSBVjbbHGi4ifUDrUjeTm92jtEWC1aHpUp41MnUKTpw6Gnf",
  "key12": "5SmrckySpwQQLFeCtxn1WfYPSRqt85ak2AQBXXpF3grrDpKNvczZ1sqm34F8SUCKci9Hefp2wbXAvrQY1M1QbkMN",
  "key13": "3F3b8f67e31PRUduAXGieATi8ht6egLSYE8Mr9Qdj6EP7cFDXDX1npFDDZk2XLVUiFdoXeJ3C4D2M55NVg7bWvca",
  "key14": "66uZQoB3dScyjiynmAzGf5UrE3NUDp9aMDXqpKg1yDr8mzv4fCLSuX2MK8tP59okfbFtp2UmRTJCsvU3d44KGaqP",
  "key15": "5gARQfefgasojZXsNt3QwULhBasTVEZ2Tk7iJqiEWuEGSpZ7dzi9K57toHEDiAEiNdqVV6pLz3VTYvvQJSSPm6MJ",
  "key16": "26DLCpW1n2LdFnNULNzpBYBMYyWH9AY829Y8GfNwA5jW2E8VknTzmTXnr8gKv352bFFuDbgJ7AZcTod3M1yU4G35",
  "key17": "5W1uKENhxyXGr4XR8iSDT9dKcTkGmj93rkkQ84yX1GJP3P3PNtCp2ihXpKKWTVS67KNu9eqsx7SL2FUdTbXdNfMC",
  "key18": "2ReEzJdagQmEbpCJzvQH4QA9t8KLBrjkfJspP4jc8YEEaiy11Uq19KS8iFfvLNt69A1VqzcztysxwUoWsogaSwbG",
  "key19": "47xkdHLccY1wpNUskBeGGHVmPTA9CeWsKWCiVUCYq816Jx8Ekw6dZQKCyuZ8AV31GaxaQSAnebfNDJkUXx1PVrnJ",
  "key20": "5jchgE8iS2B7gpZE6nM8Z4wbbBA41zZ1rLxj98wnbSuMoFGDcj88671cjL8GJ65kYM2RyVH77u7XH2h1SA9RVa7g",
  "key21": "3Wt3Zt3W1hzJoh8MXurXHGYsq24ae41GKwgSnU8LQnpy5XS9sbF1nJ2vnKitxvDXyGzSrJLhwkRXhZw9JXwZsgm2",
  "key22": "3VegCoSsTpUbK5HXPoB9h3bTWdSZ2qPyYh3oqt2pcV7JgMqQuqTchTAYZZhhCKJYGBeJCipicwLWZEESXUngHLCu",
  "key23": "H8CsHENxNYwJXeVYBV7L977ZkNm9Hme6dRiExzD47odUCedrMisXiYXQCkDXtGfdE3xdaXB6Njd1grFxgKZqTYz",
  "key24": "K1Ap6JKRVN474KawTDbK4e4ofBAiCw6zSvFyrfCWeuXjDgGLeeEs3eGTPsV25UwBZnp2ePCZpTraXMi2YLSeYnE",
  "key25": "4husnkzewgPCJjonLNTK36LKXCspjtYGFhxR3czVxq2htWtQa7pyGcoe7uqrRknXfv9oZqoELH25UjkXThSD4QuD",
  "key26": "ExTHzMS5zuMn9RtXiuHgPCXa9W5ZQee2aaZNM1yen2Y4k3Ludo3rVoKAYBy26KEeazBVegU9YuqFj7GikKvKCFz",
  "key27": "5hdRuSfjiA5iGQn692M224s2NL49eBo93p8fdDDsGHTY22ka6KoufDXQo3bo9hsSDuvUYst8mM5easQKtQGw2pkA",
  "key28": "5qNboRNo7GmJ2HKePcWTiMFYCrek56zgysnsJfAtoo9UszAjkpzFTZMCBLSsjqu3BGFVKLf18zQYSBHC9ti4DGKy",
  "key29": "5pk9eucUyJ7aEwyJ8bEVeW4Yhr12efV5cYgppX2UsyDeo527ufcjkGEJQYJTyf4M8CYWdwt3fk85aBJ8CsUtdii1",
  "key30": "64SjK3ZU6j4R2x1PgFcredyFhg8jFvqhAWDtth3v3ri8v3oN2b6tHWTC9JTpDDx25vjeSDAX6FQ7xUCUvQGYZRGt",
  "key31": "nEEHHfQPLAXk8SNBkzpELRAJNDcnS9EqdA2g6ZSw5EkhSeGCQ434X3YcY4qTf213v8YE7UKuTasoTiHDNBfBPH5",
  "key32": "4Yxh4uRSbKrdxdgQZduhC5mRa9f5Q84jySjnVXKnQq64kcGhdEnJiQTA3kyr1vDSFfevpAhkaqPgwKTtgyzVAv5y",
  "key33": "31jZSmcwdiGMWtozhTgNiE9SwjmcRKwtC62iBR13DidFBJHryVLZZAWv3VNpZMPrTngQdyuinmuk4uzGW29H7GvN",
  "key34": "3Es3PKcmfrmwykcvtSAQTPam6rdq8NappJJPdhDeGs6octkAqXDruR6ZhDyXsuef3pTHpvrj2u6h6R6fJBSc4FMF"
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
