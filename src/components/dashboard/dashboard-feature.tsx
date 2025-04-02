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
    "2dJ8UsZovcoWsqczEegsoet5n3W7obk5W9KccieyWmnT2gR1HVHjKkDsAUQd2o18M8BmdAHsbhcheUpkP8hwWMWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tpvRutgunh7iQ4NmnbSbrJCdJJ8X7CJG6U64Ukeff4JCwvhQHGb61Lcmh3iggJkuT1d6JiudKPfbHYuYYQMRuNt",
  "key1": "4X37MZ8nm5DDPDH9uhr3tJYNfCsX4ApTnuUbejktaLJzt4V1ZfyoMuUfpZU3bYoW1DmtuuJ6kTVqkmcuxetqu1Ry",
  "key2": "1xXBv2PXYhSAQSSB7xvPdfzJFQq3JKABJKmSAcE1p4BcrJKrUBFtq4BEnzk6RHg8GCpYxmob2XXyeDW6AG8PFnJ",
  "key3": "KKA9Cz95VgVhiX1r2kKZ8BoXUXJy1hNb11FPbrA3jcz3hyP8wpamPDCECR9YMUi5BWr8yCEURD6owd53FnZGNJL",
  "key4": "44k3K6BbRStAhiwrhnRm55fSAEbjsE3KWCpU3FxLNZuGDZ6jqqiXvqwaRexGPXZVM1EjmxNGncy2R4vKu6bj3uJN",
  "key5": "2np4xXYT4ix2EFb3FhPRKrmoAMJ81RpDcRuAyndHehyN1QgXr3KMdtuUGVxD7oo3bSU2eptxC24mawh43VyKbykm",
  "key6": "2aFA5zfVvDtztJfCwy3zAEB4ssemaD8vsyn3wJNc7JqLA9tKqhednhc4EgQG5tUQz4TKH1RL6ufMz8sF43PBnwah",
  "key7": "3eDHDCQoXt2QN2q1PsvBiDxLi87EqsgiJRhnWCNzo4MKuP4upCekU43HiqoHexqXWWCwxepkzfL3jaUEwGP3gdyg",
  "key8": "3jE7zF8ZJpJmnyR1SrUYEdWCUWyFTPKMJoxF4NwtcaGwJd49WjqfCCLcUH6mdK5kZnqCEY5cx2qetkEmD69zf58B",
  "key9": "2HJctyCcGK4Y3w7B5TCT1pgxJpZEimjcaw345dT3eD1nNPb4DJUUBXJGpzuvRhPBdS8CmLoZ2DsbXu8VuRZnFDqe",
  "key10": "2ppw9fHZq7E7NekYTuKVVsoZrguBQYM2kdRRvCZjidTyXZ1yFn5PXm36gnGLRdT21LrkpxD7Sk4nR9vCTmXdp1vt",
  "key11": "mqvXQenAGyyFgmuXqJrtnCi6iKTFij1NodWaid5m4nkLoNn47ePG7cbTSBTPRsNm1y5x5gvRbVt5pzUozFkVziK",
  "key12": "smvE4rYBvHKmSkFqWxM1D4kkRmt9wphoxZsrk4e3XwiFNfox5ANv3HxZKbQ3T15yYo6szV8K3vbpsDuWaqpdcWx",
  "key13": "2vWQE464tmYhNbFKw1X4UjD8t4vp5xiLu5uoygiFjfdu3awnMkqAmhgW55KssNgzkvcv4TEpBH6k3fVvD4vq1D99",
  "key14": "5R4Jh8fdHW1GdwYDmbedkpTbMARuAPnZMKX2cs6JzrKubsyBTz2b8tUd2FkajGVaef4Z8ABiKzScRL6g8WCn9J7x",
  "key15": "4yvCWsmVCnaZcrp6vHpR1UaniKMADNBJ35anvPaWvZuvxk8VcM99aJyaCPwv81JVRoZW1FSfCdEyikcM7WM6qgPc",
  "key16": "4fLMooXYN8nTmKw8tAkZn3VhDczwezyFDgAK9vj3HS8msSfd5g1ic716HfhCsqT81pFWsQFTjgEGr3Dwdbx5yKqo",
  "key17": "5xJBYoGRwdfwVQUEJ4F6rqtdjfYy8iRaNCwu7SgGEwLLDU8B36GbkuDBWReb4iE83SEUNmsHEvkkoFijQFmCnTSW",
  "key18": "HvBQiU5CMPiM82eawwEVzgxBXuRGRp3GRcUwJfVWX7whCaRHkFZc92baZ2sU4UBcHt5ZmfiKCsRwyYffwA7TH7f",
  "key19": "47PDVyaqgVGPQxkmABJrCGsb8fuaPvu6XUyBAB1rZjWxSMxdqxBUq1KPSKV3NeYNygjChzYwHCZ9z9Z6FfLCch6j",
  "key20": "S6da57m68G6Yt37ivJbnPQL6RwFjVUSdrwYqi1JqyvmV689L8FYKd1FyrizMc52Mco765FXEL6mLGVNQfoSVwFm",
  "key21": "2XwhHo2f3jxWqHBhFvhy46CKa2BgGxdCoTTJSZ9YWBovwFpGYjZUUH3apVgBbgSSjfQYyzf8V81bv7J3fSNAqSXr",
  "key22": "271daqip5GBcEqQdt5CLyjHzGj2E19tt5DNmavdVrfSqRWjdNGK3JuZx55Uq4HsCb19nTpADeNyvStiudx7dS1va",
  "key23": "5RAdfsKD6YtiqUaUy7qQurLMFEAR9zXgG5Pkao3uyQHJT5SbmyZ2yue6AXTfUczpV799uLN2Adux3wJjRwSnWcqH",
  "key24": "67R4gFaVTCfXPYkWCVs9Kzpqw3nPWXXtZt6FRXAqaKQ5DTCJucZ2tCS2Xr5V7ykESuJkirWrCQzowEkxke2VjwM1",
  "key25": "5jYJXetLr9FGEw3mjZLaPG5ZJNPcnTMZd4JJTQFiK9d1xKUxJHCQYxsVhxST6mbCLecQuz2KEysszmbntczfJJ32",
  "key26": "2nXfCTMbw2JiXJTMmKWKP5gecxZZZqdEv1DqWhuCFozj87zyquxXETt6f1DpeQXJBCTWjQSjtiTMhT3u6AutDBjR",
  "key27": "5xGvVkCRrR1M5dcPuMQ1SEc5muqCbchZ5M9sKd8FZyMG28kCheRfeEqDP3RSsfsFxJdv2ToJcLwUwPyGWH3PeuHS",
  "key28": "5X3mE1GZ5RNJQitgxnjDmdUzttUS2mbtQZ4CeSsGW3ZwM12qjE8TNMmmkKKrUeD6xu8v8Lv3XTAXKYHGnMYy4zGk",
  "key29": "245QhM29eNZ8YWHhQAKSJ8X67Mu5HiH3XJuAZympouz6oeQ5r2y15aRTcjGYkoaF3qJmBkm6MmVb68DcPNTUZGgf",
  "key30": "iZbs1tberruRo62S8awSXm6ki3PgPNp7AqvcVHJz1m9wU4zju6ChZHAkxFjvfwsc7bZ2c1R2UJic25UnT5VyRUf",
  "key31": "2skSc8Kt4y8omPbTf3C3roCWuop27hE2PYGRsUSzPPzc3Pe1riThn4mBLCkRishbV8yBoQ4Wf6mBumxi7JDbNaWi"
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
