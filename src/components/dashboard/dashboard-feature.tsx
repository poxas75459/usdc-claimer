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
    "zCnTM2TEHfwaadoECekAsrfCbdXVqC5FVjchiH5To3G2BCoE7MX2iuDBjWzqV2P4jCoVy3uQEuuHjhbAq8Mk6NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jgwe4NfNc2cExf6KS65Sswpntn83nELmGGL61duPkWSGFfAUEzXYmxUCwqYucLojHHHALqbgrjTY3YM8HjgSsVZ",
  "key1": "3auTWPsq9CzzrvnFXozHGAvQjfwdTY1jaxCBeDwkjLHZ2ZjKGwkQrEZ4WCyZSJSEJApCA2WwssbdHQijHp4RLH8n",
  "key2": "5evr5qKoVtf4aFEZKrTiNbuqGYo6tScPqaaonpCigV1e74Y92MZG6ntAdYktJTRioUn6GjMrs4ur4HRF4daPzRFG",
  "key3": "4ytzUCBZUW4pj8p8vRMLk1tmDmeGW9ZMX1DRwK3SiKiBhAyggafteKyT2crqMPCUuRN1Bso8upFeywHNsAQ1u5gT",
  "key4": "21ucxTA9ZvHnWaBK7SUxUtnnag5dfh7jUe59uWPQ8iSeF1f4z2Fv1S75cSfco8uqNGkF9AXSFMVWSf1crFZAkTyS",
  "key5": "2HBT44DeixN6bgt81Z3BcvhybhegJy2MyuRcAtuyw2DZjnEqZBcPJqJZd8pE2sTEtz3dWEW8yBdMRXcGe6nvS6Yn",
  "key6": "3U77fQntyu7RejgweUucJf6yrfprZNainPst6kjYuPfEBuohLGW9TvqR4LNupmk32ytKnn91juHfX2yynTX2FAuQ",
  "key7": "3FpNUoSq2z1Z3n8SUjn3XvSPcPyFbg1YqxYZVMGiaVpC9jZ4k6dYsgpmf5gTbrSDQyWJwRzk2xF4Yb9wMmbkKp88",
  "key8": "3JjWppsQc9xNvKZ1qhQ56EVhsY8BD68i319yMhf8pEADGg14G5xjrTGgkvUXYU9nptJ8n6gYoLoWAkit1A3K7JND",
  "key9": "3mNRz6ztiHm3Mw43JaDJbmxjoXsg4hEqVMeNtaE8Cq59AygvmyT6NsP8koK3UKcUnEMsxRcUspNScc26kkikYuuK",
  "key10": "3TeUjFN5FAYErV6tjaSzbDKZL8rBYCLRmrMVjD9dMTKgUw44USVHsmY3XZ5sk2cfmFNntaRofxWyTJA7kwXiQxD8",
  "key11": "5naVh8XMyUVnWwMDcdnT54vyqDihr52Rxx66ywGCSPBk6yGw6iBxm4dLcru4mNkGnMJkyJH3ua8JTY7xHcWSMmhi",
  "key12": "hSUAJdwMtCk3pngTM1AbNeUGoMUdQqouFm3oGebcCFw1baZ9ZA4cwyhzd4RwsDgxNZ5s8Xx6jeiHo6t11dAPWqQ",
  "key13": "j4aaLfnjKTSVtV3XwU9tY3ZN3biwHwh1iyb4kyoidnANZRY4uY6nKyctFtvnSR2xh5oLhxp6mFPDRBjWmVp7DFj",
  "key14": "4DnCL7dqj6NNFy9z99aBhVPSPMW5KfPZCz5VEhcP2BZsYx6RNJcE2ZnAohNJf3xq6cKuT4JTTQPRNCMLPtt8kg4u",
  "key15": "5vhCkQ4ov6h5BTSEHxfM7QeopNpkkzV6yG3Ae7A16zGWP3Hqrce2Uihx5xusD2Rse7CYqmjPXZWdCqN2rTmjiCPg",
  "key16": "2WerWpwmVCD7t4GL49FUsCai65tqBJ89BKKEySXKhHFsuUZq1xUm6kg2zpNYvos2fP21SWkhBioh8sDCru73xYDP",
  "key17": "pT8ZGCBRpNW2qv3AP55jHkuX8qkJ196jChQEv99ZbafnGexXKB7Njhjkm3rmNXLAhEbGR3CencLVKHJfnYpX5cM",
  "key18": "4iRGJ5mMdMVMEeVhLSQ4B1AAdAvn59viMcqzG87dfdJXasbMzTT4qGowgssh1xwetxonkr3Ph7DQb5m8VzVp8xnS",
  "key19": "Ny1KrB2mG9xDLw2W4L38CnXWbGUs6XUU4H71SwddkXkwFjmfJ2Yapc1Dcam8HJByFmpg3J81aTS7jJyE2T9ZLcm",
  "key20": "2iWBRQ3erCL6QYFezGdwSUawgaktATFYM4qX5XCL2Cqp7dzAhLYgJBmBkXAfA7zuuSXvqQ1h1YHBQQ5wD6zgzh9a",
  "key21": "3q35GEd8Cw5xzudLPfPevAB5VzbmKPLJa22jkibNQXWeNXFrkuWDf6pwMQJ3qoG4nd2Q3icrLKzLBpT54w3ZfiCf",
  "key22": "5e89w6jZfJJBebf7R8sos2tFC6VT4u9tCX9AXG5Nt7dwM8dmpyMwCgYSP8pBaahZZeZrE5RsaHjrVQX64QVa2D6Q",
  "key23": "2EUgH53UqBwCdnwA2cmyds6br9HUck6uJZ7W9MCp8Y1Bvi8Nnqo3zD2hojZpdTeK9dcc7M88tHfaJfd7UNM2miEu",
  "key24": "DmuDHAeL9phydsFyj2opX5nuyektu9UQgQucykxDgjrVGXHJ9ezB4BFShGrr2Ru7GUX6ma79xNHJAAjkTZpdwJT",
  "key25": "62Ej9dTpTzTmCPv1M5peJmutKz4GfvybaspFNLWY3QMKq79MyPVPPJvUSzHqLyuHRnVRHUKzQnRK8w6PfbM5Ba7r",
  "key26": "C9Yj8G1jugWiuRHdmKtD9kz3f9zcGQfvobgBtpvHhp74GEdK4VzZ5fLddLbtDcduyC7JXvYPi53rvrQdrGTi26t",
  "key27": "3KoBiZ9Zw4sUZo7oP6nTWUEVtqhyvBv7wjJXnVux3CuSaKW1C5JHiyK42u48RgBcTpMJA6JUFLhfXxDxe5iZRkYd",
  "key28": "5vSjsHGPoXWRXsUKRR9F6hopTABVEyD3Uzr88a5yM923t4yZjow1kKhi9FNqsDdzRseroRUrTHXetCWqKdn7imrr",
  "key29": "5kdmCJVT46Xa5eYA4vv7YHsBcERVEY2UtFv7iw8YijxLLhGeB7aD9eAGiphgrSKVnxudzwREMrYqDyXrcmPmWDnt",
  "key30": "52gqP4tjkNMbcF4pmFs4TTbfq5KP5UKqJNZwJe8RWfdM6n2RrGfY8q66qwL1ochCvXywrKrYSieY5fLLKT5Crmsw",
  "key31": "3f2yWN7mvK9FGPNg6z9kRNycQp5BC2fRiQiEycebLU2SnCHKPHXG5dRcT1GVoPWo62fQXs4BHvSRfYRW1xiPsVpp",
  "key32": "MkyPSxDpgyhHeXXwPrapFE289F7r898pMhi7CC4CjVQAEVKxpJumRBLfBg7E7qNtem5ntLSzh4aPNu8fEiBEN8A",
  "key33": "586JZugPQnVU1qLFg4oNdLxEsDk3YiCWMgNcMe5R9zqBJvj5kYjzCNVjggka9omwmxPcgJR8M42HaeCe7i9Lu7J7",
  "key34": "4HPxm4zwSWe1mEmKufFE1ujN25qDKRPQW2FFcmbMitEBiYcGX9YVckQ4e51nJuD6z5mZb2N2YuYQ3zwkC3A3xXbu",
  "key35": "5cGaHtqQyh4jxDuTf5RVvwhYQY8sP3hcE6ZwuDQBhRUjGjkHKZTtn71w6ebyPcbYQUP5TS84thERFhFBLq6Fbpra",
  "key36": "ZPNeev3uAi2F8ePa9gk8vGgCqXW2zf8X94dD6JBvrLaQHnSSKuLVcDCaXa7D9WvGYq7Ep7HN1rPRF3jy5CDD8Nr",
  "key37": "2fTvW9Mwvrhx6uBZBmNnKxowqHvhWhqtBUFmtwqe3QYFY29TN2QVwJUGfujbrnz2ui8pZKmWyz4KYmnxe5N2ysoq"
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
