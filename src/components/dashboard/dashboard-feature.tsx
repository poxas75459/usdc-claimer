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
    "5CgZZjxznkiJJ4g6KKCFY6eKSnNq5hKj3mnKTC1aQFFCdiw9dFnL6h6ntfjbR7cxwCpG8oJQGToureU8EM55kDGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6i6B2aucUtFFZj5gMicGU8gEcug6pc2Vq6yeWZkhpVGBr2JS52uLcYXfkEG16vmXwvCgNVm5Hde3GgxhJxYdjUY",
  "key1": "2dKnFDi8kYH472rUkXvX8ws19Ez8b6CQ1WF89sdvviBpcCuH2uTKNGT6Lk9vyGt62f2CophE4Q5r9ZL6ziQsPVLk",
  "key2": "VLNwysQvqYseRWSWqiKizQLz8LjJDjtc4VWTDrJkZvncK4tkpveC8NFbLfQKBFAoUxp24JiXTesEYMmjWuZjVfs",
  "key3": "2Ha8V88sTzuef212otoXxpn1zxpB1CJpcWwigJ1zUr9HrU5DabZhUqSdrddzBcDzrBsTvz9HH5znjNk8XhjJH1Ch",
  "key4": "5a3zPzzru19LFx9hZTvkAATfRNn8viX12ny7THBYXB3TiNZAPKQ5ZwHLygUTJiysaDctTV7Tw8qFmNZQacv3twNu",
  "key5": "3rxkdiBBMxYh17xETKGUJcM5vwKDmymGSrY3rhZpMXXbfJB5PyY3AmhRtjv7yAz1GdQxzbD2iLbiYdCZzf2fiQr7",
  "key6": "cHveoTpj4cJVV8Ya7AiqT9PZiew8oG69B7oALm2tPmbGNd3gsbqm7t6CYSEDejK8vjM2J4HAix1JpFk4nZ7zG6e",
  "key7": "3vhwksApo5ThfvVTsh7PrM2jNmG23BPnEBqnHmwJTPa7pQNnsqsyaEBRCTqXQzdGk2JUNHLnZFmyWW8nQKLr9shS",
  "key8": "4vGK45wSrVASFeVCQnDzfgUX73hKhkaZftfLL2GQ4ggZEbZSygh33gKDfARLvLGP4XhENB3VhRJKxeT2iChHZp8M",
  "key9": "5vXzGDitKUnG4imFN5w7QG5VUU6we4bSEJaayAzUmY9hxQH1i1FQxUZT8iHUUyqcs4wmrdZgwUXsbMPLkttvvzgN",
  "key10": "2BfbnnJEitSiad8o3vSCFNTp11gCwBy1VbNQorWA3GAEsoZoeuN9xXTTFrayFF7sqSczZsAiqpxZQXtFqatugyoR",
  "key11": "DKZaFfNZen1GGhof1Qg4JWYBGgiQR4i1UEmcbKVWQbMwaM7nS9f6UhzaosCrLFwp7sTCmCrsR1iR5WCnBEAWEKM",
  "key12": "3CswQ344Y4NVFHLqmFYDSsLTqCFK68PoWk6kBrNtuygZqR5DJYWPHVS8jjUbRQ8fCUt6xoCyzDj5GuHJ97JMd9qe",
  "key13": "3pLvVK3JvBsuWXnACiwvn5WD2Uo6WQXzJCzzxcz9AH2Qs324mPdrd7aJETG12BKzfoZWCB71srDvQ5iFUaCuXBc9",
  "key14": "2A83FqZ8Pe6RC4CpirfmGVVdFiDsyxS5Q3wbBhm1HfviGGu5gA7qAqbBQezRJb2xCw9bdzQLkfhhuuUoxvtMf9Q2",
  "key15": "5oEysfTHTzEpQzrCrrmEVrHV57hpKhbXgFeu6RZmqAiMhR5E53SUJPugn6jsRjsn21TRTJs5FEWYXdb2yvPSztJu",
  "key16": "4Z5ysuQs6gKfXDjKjS6EWJr7v6xugeh52eJdsocmKEBQMzAdyDihwry2nKsePzQQwjECe9ov5tMdB3YUJJJErv8i",
  "key17": "4PBgw2yL7ffSEquvmKaT2qLu8NvFWW6dyuuUv16H6kAUTK6oZzHo1KidamNCw7zZMTEWx9Q7HEaMR7oj2br8c7LM",
  "key18": "46LnsCHuXRBT28c5myjP9D8E6gD5WMt1DSgreSpjwYDmQofEkLWmQxkPXEveRsS5hAehSxe2yXKwnHXCkWf8YupF",
  "key19": "kJyN5QWrdNCEZuZGCUzCfnQ2qXX6tmnhREHxJBwDX4Juksx6uF8zXJwm7jZAaWXbYPushx45GC1Zf5dtaWPYb9e",
  "key20": "21oAKgkhny1KtkGWYbXMj7dxS6xD1kKmnUy4d19z8J5YMzgCG7qrgrYewB6Fyv9NU29GkvBfD1yEFTLxE4xhSnxn",
  "key21": "CUtxWrNY9Z8XdZhFPNZytSfRvRizBhbHKSk5BVN6fG4KmotntZeAfwTRyZA8ZW1ab7DWYV7NwpyKM47ubESYGTi",
  "key22": "3QL3ifbVct3h55BatMkmSYYWhsHsgZDAbJyR4A26cgiLi1EZcn1mAEoVZG5oc5xYJ3wZBtHFBgn3PEynhKU622h8",
  "key23": "3wCRXdp2xk9AC9P7FP9WZVVhFyBuMt74ibmMtbkBY3wFBoaSaKZas2ZVyVqX3iyjcs953DVEVuHwCJ4eGiYa3cvg",
  "key24": "3BwZ17c2q8iSpsChNMgrwVmGGHGbvwvpXBcmkof2XJeCrdBvmmCbcEowYPxV8rvP5AsLfDbhDr5boeh9semBaZjK",
  "key25": "5a569pSC2E4Hw8G58Mbu4xfXihmZ5spawB96tueVjZgTtCUZRsvvYHnZmVVZhtRvUs3Hc5E4NPHtCL2LsvQfZrB9",
  "key26": "QJxgJQj8xKFcUk48WovTp7XzzBSfRZMiHKBfQj85NDEPoukVnqrh2ChKNRmxubaWw71fX3PjUkGSWBEVB7MR9nm",
  "key27": "3LZCfZQ5BD8Pnxcu6mjpQ3kosKKYWms8iuznpQmFjo8kpFe74rbZhNy1XPTVzmBHTSa9i28hrybWB3VNxyDph5qd"
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
