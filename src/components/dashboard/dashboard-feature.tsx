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
    "s5y8LSw3XHWL6Pfdr5fsEiNzVy6WwBrbodfqmfDUy88zGUW9gPwfUtJks2AZwaVaPyhAJWxcGcafrZV2NQScLdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PtGn8Uw2pPkzqXNehyLZEamegiD1rcwP2KCk9mek4NyqQarPE7bhxJMxu9WSVGQQGLaLY4HrdbKzf6vxiZ7pG5m",
  "key1": "35NLBU2YRhaM3aXeg7RCD663A3HtBcpXrAYiot5iDhszpzZAmkFo1TFsXuqQiuwczVUTd3DCZMKNqCf6rwEohhe7",
  "key2": "4jkWzEodRzA7BNn8QGBbXgm2wv3Y9Kh9c2gmCJn5ffQDC8nM1TensjJbP3jBfrNjaUdqU3xdwQ5ATUsEawDm1eM",
  "key3": "5fDgTs2Yf9D76ZcWwZoYy82igk26ECpnS4h5eycSiFyVBWQXsbwp7gLpTfTdmETvYUbmxnjTz19avqkieSzioYhz",
  "key4": "4zm3uQN7eFNKCkKa8XM7xSVW4R1zn42UzxT94gnrhdLogNyknNsxBUUfsFtQcC3rUUvWaREf8fNznii8yx8c6UzF",
  "key5": "higxk15wVKEKi5aAi2iBjDEeyk5ayscrXL39p31mUad2g6AwSH8YeD6asTHKtPNKBoc7aA621Bt5SasNTNJoZy1",
  "key6": "2RmLysm37scjxhTm7hGWHseh2nvjFoDJovLmSjSub9sfeqxbHhGSN9bZVHVNy5VpNmS8yPmjXLK7RVQkp94JfatT",
  "key7": "3ehEmEFEmXr9X1HYJpQ3xSyKGL5VJmha6fwmyV87Zg2SGP4KQfrybqbV3Kb3HqwZCw8Nd7Lo7xksU2qmkVPapDFp",
  "key8": "2qdFxg8Ax4KqUYJixpnwY5FqwbAetsWLmxaU7o1Dxx1rYkGHLrU1QNdZoMpRBPGuzBTZWptGaPF3qUD6SK4PnYR1",
  "key9": "2VEUfhM9Cp2fpo5cTdjLNYJrYCMPNJrhJ1DqsiHVQAGceLN8BjV72oSHgWUBvMT1cv6XSFuCbWY24xkT2bBTGvbt",
  "key10": "3gaxmsPCN9e7RkcT2bhyS64ogKecocfgzDcxdRqM6BpEVL66QXiRhyFjmdqM8BEqmtxFwvMb18YvYid1ssqGzyGA",
  "key11": "4HfsE956zocZWELnSxAzYtBXnyjnuQuq8dTQpXXecH2GayNfLxEsUoj3d4tLZYcQCn1pBe3xquR6R2VActhMxaFC",
  "key12": "nkiHwTQEEXwNzs2qK9TB9cdFWTXQBeHmSshXP4sBGFG952ae6WebSSxG8UFjuPzAibSVS4xJLKnLpw7cYwEF2Ro",
  "key13": "XJPP1KP6dPjiMwfSkxdoQt6hJBwsZ2Ej179WPTLsh84nJu9gHX1JvJej2TwiJdRsR2CNbyx95ox1TmZ7k7oT7ZG",
  "key14": "i48qk8PsCeR96HSvLGNyJyPy1PhTVsSbKLNPpqoMzE6oZUNAfcDppq4dHJCduLzwqpwHQP7J26XqHdPQhqPKVHD",
  "key15": "43oFX5A8fxPZTCkiwDg958nZmrWAihEv9nmxRkzTCgFK8Jo3j9p7eqtdDM13ev85G1idE7bqtvQkxGQaCNNBMhDP",
  "key16": "4ouaJXSowakVQkApo9MGAp9d5zNk52vWvPoJKznf9S7DP9FWBeV2vTk3KHCFPSfaJbuXRxQyjUXWUSbfdjDsruTS",
  "key17": "5EqNESX4ZkVWK8cwSTaKSZ7mA1P47eZ8BDWpHzQPCgjAmRepARQPGLA5fV9kryi7ziJdEgprYXGz4CSsYhVbzYyo",
  "key18": "iv1Sa8KTcfZ2gVhpFps58rHUHwmcxwcM4hf5i6ZhvfW9qZ4qBL81cDP3cYMN6W3HDsj9B3xG5Wdjz4kmfPJKA4T",
  "key19": "5zGAZ8BLh7vCqPKm2HbYgigdGf1NUACWMA8txjykD2cTu1YaMsFHUGX7WBeWucd4ZJgPDDM449MwRGw4KwdGU69L",
  "key20": "m1ZhRvYbPdQMzGHDqTxix6wyVrh4gmPuzwZd2UqmExz85a9pX1UsNxT43ENs71c95u1fgd98fPDBYLjWHez1Wem",
  "key21": "2RTj3Ae2QqVNhs5c2Xwp5jo2ARkwfL2cqosRBANxVu9quDQKcbazrwbsttzDgeBvNRvyj9yV7eeHca3QFJJpH6DD",
  "key22": "5v5mbdhV8o9pdfr4Fz7R1qe1CqaDaWFtpRTuiX13quBskDEZwsCY4xqBU6J1tAcmzdUsrYb494W65dmK9a2oWqmx",
  "key23": "4s8LhVaLMJ8fhm5rRby6ZvhR6f4WKpsCynhipf4RD1FF1c1rWjs92NnmnexsZeqGMp3GmuHDC8TRYKyojBQDbhWL",
  "key24": "267cGnLizvyTTCeaYT998pDqwm9Laq42h22mqMXpByi7JYkRz5u1igYCSCULGjS7LBiY8EF8m2XNhhaJHRbosQLL",
  "key25": "HBRawhqfFwPjFcxGNBWeLLdMFCg8Hbey9THE93ZkkqVWdaDjahTMYeayTBVyiKkgYCu8rLQVVLX5fJ5cgCGZqPi",
  "key26": "5wuA5isvpJhQA6aTToJQoqUAaNzvCMVGY8J4U5sWqGsTzuG2Vs28X1fiD8rkFqVbksaYz8nAHMXxzVJfuh3tGSLU",
  "key27": "bzf7vMUpcgjd6PHPTtLC5dFrY3cXbCne9wzKhK9x9ox8kosCE4svLsWQjq7SBEYP8TA7GapkG69UhksmTiHfnz7"
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
