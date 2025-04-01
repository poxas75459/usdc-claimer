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
    "ZLmWxiunY6q2FPiZSomK8197Hx5XQLdSnqREbYyvmajgXC7NHn1hXiipjnGNDfhFChcriFThQwGxr4WfXXW74Sh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y89B12DndAKep2Q7i6djaBWHjXXVs5JxDMs2sFWdExZi7JBZQ6EZcmXw8kaEQeBFPsZni8yoTDsaMXbxgT3hbMS",
  "key1": "3YE28rr1zCrFJ5fD9QQ1udfS4UMtSgpygFKmHXuwUUA3MH6dDxbxN7RkSRK6qPuctT8Sod2CZNaHAz6F6GewYNrS",
  "key2": "4Xt3467CvbavFfw4Zijd1pXjRfHvhJokdrs9cvHyXVZ1A82XYGi5uzDEFuoswzNWBFhfiWasfmpbbUBYGaLaGXdB",
  "key3": "fWURz2mbQdy4XfUfSJJysawpcRD7Q9MNfRN6uDf7pUv7tP6XKbK8T7kFFHdMxCsTvqAEhYoD4dozyeYNg6VdkRV",
  "key4": "5Ny3vLB16yqKsiJg1nHXY2T6ykW5NzLV1sCxTa9ePJ9ZYZUnei99V87ex5rk56d14XpH4KpviNgGJJFj5NTMSWL2",
  "key5": "2swe4vdEyhe4QLEyoFBth2JGy2bW33seMoZ55myeSarfPnVzGScUUJGQBYvzGVob6C5wWmuESZKNSBa22HCcRaH7",
  "key6": "2jL8ThLmNDo7eFXjCFGqb4c4CRhV8erqpFsku1namyziAv4PrqW3m8x2CZ3wpfNwgKw2d4TMGP1WndHbv3kxfB7s",
  "key7": "2yUE79HBRb4DEv7q1FRhfQLwmt7imsppcrbaCZwxD7mrhhDKxiP3Ffb2H3KGQS49zW8fKTutaWcfELJ8UzDJqUwY",
  "key8": "5nRZxFeJ8nEuq2i5sRL57L8mWnEP2Jvkeuw7Caj7Suo1QDHrf4ESp2Tqd3PsJPkxV6wcxpLeA51JjkEk8UVUANLX",
  "key9": "4oAoDvu9GmbVz4DjeTinpRfgN81Y8MHmojt5B9abTzD5nAhmuf4HLFVp4TiFNGZNa1XY2Q1BojPEYPxwiJteUFaK",
  "key10": "46My1UK4ErG9A89YTpxL3NRJQdV7fD7wpj2JbJP54KJH21sgPssdwVz9oNX8qiHCS59zrzC5YRZcA6FSpNf2MLZP",
  "key11": "8huKN8BeLixKR453EM9tV4xKSyEHuRHxWmjp3LmqNcLwxuz53m4MGrrZZRpsZ3UGJM8VZ45eQ8ejW9cYb6c19Ta",
  "key12": "RXhgfwMLUuUbj81LTCfG3LsRfR3WWJGopP8dGQmx8cSSc6qMGuBERayTjgwPBR1b3NuGW9GcbQM8QTa2amvcy8m",
  "key13": "53ihhCJ3Ep3uMoBGdniuAqBLFGpPmv4cgecivLaUjurnk9bvsGveAPF1WjJuJnxh8yLoDbpy7s1is45hKFn17UvC",
  "key14": "3CAaNxLKefS8bgQ1zdDXTJjZkCSXikpaMZ3nTsQL3X2Vv7usMf73wCndJW9Ge4HgL1ebrukhASHYrumcbsnBbnrh",
  "key15": "2hgtL4BJUq8C5kBEoWG9nYjCnHx4E4uaVTdBFrGPfebcegXaExVjWDpvFFmacjzzMijU9Spu4fifzseUsrEsorv7",
  "key16": "5VXXzx193fCaMFoZ3P3xyfYkHaeiD2qLUrCVCiPu9c8iMMXJ32CfyKYc1L21fsxpi9arRWMKQbkfA7QuTrda4oer",
  "key17": "3wALkTjgsX8T4cig4jRWFH8JjoHVCFrKZTLwqXK2bUf1mktmXqCJ6Jgubx1seFk42LPEmLjuPiJXFY27Tsa55XFa",
  "key18": "2fg6razq4U2aWhkXLxLhjGS78v4apPsEmSpLrJo99uwNoFsvAKjAr1uYMosjCct97iggJFGQvtNvGNXqpjGTC5nm",
  "key19": "rhM2Y4Pdp5V1kMMg9p5LhhKHRdQodmDYuAqF3YXejUd19gPbFRHuVWZG51WH2rFnwqvFqSGXqxwTv42RxsYveno",
  "key20": "XN6ga2W1KwfdkgJqf3UQQnWC5mriiPkHBDYSzLuWvhkYCeLLpTo9pSBQLuaP5zF1v8Kz3HGLAvG5xQ1Eku9aUYS",
  "key21": "Syjt1wHgTcvszFxBNFBQSdVXNFni5acF6xfvtqcYmNrV3ZJdqjYppEVJnSxSsKsM4kDqzQDyqNy7zMZdNjt5DVQ",
  "key22": "3PvapNAYnJ2frkn5VWau2pXzwRjc5jXXJ7LBn4R4MRxJT1kD5iQ3Mv2SfdfhXZ4jFwem4uoSDk7H7x47fUjNHoCZ",
  "key23": "4oyPrPqAVhUCy5ALojLXqccSvvApyS8cKk79MvorsUmjgbodgGVRK9SkJJSHaoe2iPgifEtDnrTo6tZ1oRALtday",
  "key24": "3ThwBjvyVB4Bf3HwBrk3QXwWMnboaa5zjLhV3euAvXKBN752UQPPxTiSvhMyZi8gkKNGgi2qmUhBJWhaARR8w1o5",
  "key25": "2HBFhLEkooLTeouJSYCGjKC2YUjLsv1ia5Vy9H9GLEoQza2h1TDy3ruHjo3U6FAQaSEXMzCM7STNxgzB7Ke2a5Dc"
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
