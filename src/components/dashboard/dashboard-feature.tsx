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
    "2VyKwk2ZJbJw7LaNpSXFy6NSnNUFJSyAkkTYmMwVbR7yHDq6Yx6mcKQ1A4vLriiR7CdMcCvJpQDpMa64eC8LTh6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J2zRZziKQmaSrNoLh48jgksP2VfPrfVLAgWgQn7j7b8ZVcoLFuGAh2uCoeng2GiGoGg5gtaF3AW6AwawHQ7zeoE",
  "key1": "3fsSc7yTsBxLqcq17s92oeHgdM3ubH3bUmbzEY8tpGocKDarqvZNUihxJKo8rshyGHt75xgCSaomFQvSveK9Txg2",
  "key2": "45RAf419HdSma78qeGddBwxU3yar9X28dzAEyCFpnBT6iHcTnPR21GmWbGbrbPsbHCJ7h2R6Tfif2fwFgbhBgUtD",
  "key3": "4HevYMqpuSYQqiGKo5AS2RjTVrbkJLPnrCsV7RukZNFMESXXheTt7DvRcjKViDSkdjfyP9dUgZ6Befz5JWWQQABx",
  "key4": "47DkGyxMyPhdKyT4L16Et1JgRjEQw7wKATq1vEb2czrgHYA5XgcMGaZ6vTQK8P5Qp51fj1XAjvc3vRnxBbG6Yr5c",
  "key5": "2D1yYf8eUqr2rQyhXvb9SdyBtEdpuKz8PGEPY3Nj3H2xqJwNxFScthq4KtdNjkPEM1FMLmqS6E968nzzMrCTPJ9g",
  "key6": "596VeRAtq1auEuao6XQcHkqvSknrvgWVGSSWsJ4V7MMSLAQTCTCvEoVDjuPbVFE5DwbRBXoPLj2sVwfGGiZ6Jayd",
  "key7": "2Q2AK56wmRwBEnFE3dYWpFQ8td8dM5FCEsGQE1FJrGT7g13eXAXRB6LcvNhSaZQTUph5sRzsYJTYTPPN7jmJkExo",
  "key8": "44NkgXc1eCqFkj5HsKiFVAqse58zrDXJphFqenu7CbWxeq5B2zhoSE1tvpN2BPCzmZ99qKZDPXGYGMg4wByDEip3",
  "key9": "4caZdF37e8oiRD6oPWPg7b7PMfEwJc8Zd7jKCP3daNoNCTLbaW5PpBAkmSr9wo9ZgJbb4ZdZWvQ28UhDWrpbARwu",
  "key10": "2DBt7RmB5Ybanu5WAKZsYwwBd2Z8trTvzbLcHpRPPvWrZjZX9oUD6mgX5wMZkuwKJ8DtT2Vobh4BAwvsmyoC7aQ1",
  "key11": "4vFPEzmQLrSTtWYYAKkr6ttRE9dndGLFdL8SeXHRuEnzczHGsgMFbuYPPcEjHm1mtQijqJNSfAXGgB5ctdxDTqA3",
  "key12": "3H8hgnALZRWfFL8KzZgE1pqz7Mx9edETsfbnVaNmPRYqwxZPchma3PPxfoYSzw9VnKSHZPyC5rCpj2TE5gdpE8Xv",
  "key13": "431QCwB3Q6GdCEyoeB2xNTuhmVPwxyzt3cVNesLituCmTA2GE2ABfPPNqpMW4uuNXwTdc5E1Sy8adFUpSxBnxBrD",
  "key14": "w3M9YyY7Gzfn7bUoSFNG4TuLdfjq1AxA9DJZEGKZx9X6U3gtHSCBCwk7sHwx3DhbbP1bqpZkmdNHqH1sWm8KNfR",
  "key15": "2GAWaUQmU4o7LTrkM2UDeBgT2zhmQsdP8umSbPUbUFndcCULirhJF5PcPBQbhKCREzmx8NKRvv8kqprgjivA4YWK",
  "key16": "3bMPTyp5yHbabx3FvuhxtAxk815cT4LizHXZAiGCufYps45BXxAx2AZGJNkCBLxDtQ8suKrt47kynfj8zo6pirtj",
  "key17": "5KBwpSoBNxaBAth8WbAcdnL6x83VfJ9AHdh6RCTADHJofCM7xnwhPQ4NUyMGGuHQ1wgQM9cYtdsTEV4kWBmg6Hh1",
  "key18": "2f5XACXueA7BXg93BuGaQWYCxLfe4AmyYQyWFYa12szoPw49EarCqw9tQoSKYLP7yXdLGax9tZCsUzvym7oFKZhQ",
  "key19": "G4S6hyaWmF14dxyJk7ur56TAJnfVS5QY1ej1Sj66SHrzFkQyq3zjJ4RsnUMVuuD3rFcyMG3cr7Xnrq768JXzwmH",
  "key20": "3NcR8tsUvXVpunMf8mMMShoGwQi96yUAANSgyqT2Tv85zVf5dbNo6sVmPViXcXWUZFJnhL1DjX8m6LtCRxsk8yLz",
  "key21": "51EoT8AVbqWXGEVV87Pd6B33F6YinYfw19JgTi9NayVUfyLgwCq27jcdMJc4qVoMYcMjHjZYkuAE8U73tuEUuwiS",
  "key22": "4hHBddx5bPvnETs7JLxxYQcyy9cXcKdC5HEpHvno5NTyLSvEedfhZJ5no55EPFqLdAMchogesD7PEWsV7hvp8mWh",
  "key23": "39rmqyY2XxBsLDvN7V7n7LNUo3z2zfMN8A3ApxTTxhBMVFnLTE7UJkhnrG3B98Qm3NX6vsRTVBpJVf3JJHbTcKi4",
  "key24": "RGkQpgGJqQYXSeNcr5gcKRxSTf2CkzUAwQA4rFjjVrsFAYKdAxQBc655CRJ9ZraD7E2MhmsNkSdgTnSXcVrVq4f",
  "key25": "2HKQc74ee3o9qXYXGjXtwoYD1mRey6XwT5sDmzAiojHwBUDBfJZfunvDcCRBnUawTBxvPnNTxUpQQuwEp77dbCnD",
  "key26": "4AAuupspgakS7kGoHTrPJULfA6ikA6KGyyrqt6iQobvNTvxZZ4efketQw2PvPzAnUmTHg1UgCGc7ycf7a4fY16M5",
  "key27": "2xkDhTWGBGZzovqCqynrc3T5GYw3G6NC1GnBWkGQycBVeWxgy4puUbNwwKAeYeCF1tYbffhc7c5WimgkS6Jmigyz",
  "key28": "24M4oDp5B3DeGgCFtGR4HYGhG6s7q7AbwtM6sAVT6wS8EwUQKzmkeWN9zX8RFVNqQmznVpYWSjhDWUqv27f2Yp5c",
  "key29": "674W85KHj23dJPwySYrBS9hiCTgydmBuQQyLgZ9uZB3PDRGPSMUnuXtbokXRfhJFVKZ5Qn54LMAxubRSvJAyGjrN",
  "key30": "sJAoRGiBiUvXrwJBPoVncdHWmKhrzMx2zZgjbXoP7sJxq9wWkNts9iMtS8VUyQST1goEv4QqGhRzfyumhocXG6f",
  "key31": "5aDphT5UfqTJxDWydCsT31X3JpE22jEkHVDaW5Ydb1tkbRCZnSd6SyLB4pxR4Xrswa4cEeiFH5UtdNdkNXj7ZpLR",
  "key32": "5fvDbkCaVFtKis7cEfFSTeMwynhbJzuoqV6BEtKuMcVbqUo3YSVTFYeUfp4oK3nN6vVEwSY7uCMd2ad1s8jUTT87",
  "key33": "3r3NYKEHLZbDbAcvQpue7KxDtnftnhGHc1NUqrXHmPC7gsMriNoL9dThmU6eWCzgDiQBDv1J1rFQBqcu4WuEJ8hi",
  "key34": "4TdHxsqv53tmAebnEDcVC6waKESRDwS6sGtSAthyxhxUF2FUpZCSvTZx6DAzcP9ssXctW4stY54f3StznhSc8UJT",
  "key35": "hYuuDQV6z3ipTT3Zy8Zsqw5WJ3WWubrS3nZaY55LKaBTPv2znSjXECqPuNfoApLdmweahiNgWFkXdiSpoCnrmna",
  "key36": "dE2coytW1NhFVapxu5hSzE5dXuehuG4WQQ5Y1w1XvDZgeQNH1HoPAQLuLYYCHCQ1m1dYLVHfBhHkzpEVXc3GGoJ",
  "key37": "387oR9j5jiGzZPokN6wjuqUzam8Fa2XZg4FnuPy728hi2Skx39VQRjoBiEfLUsKLWPJLJN6BbMsZUHdixJtzNsQK",
  "key38": "5cbxWUvajaV3pQcLz3TL4FAP1jtnrqzxNQSx7XK5kBB6FLobweEcHAKEVQu8eZ1T4x4zwq4RUyZTrSX3VjNFanYh",
  "key39": "Dn2cd14GASmddqyKf1Xb87ZH3TL2kdxkBjmcLbizwAoYK7pLJwT2QEJRuDhekNtg3LzTeVki9BC1nQptYHUWMV4",
  "key40": "3u5aRSVAQvk546yBptzVM7fzbbNnpW4rcADpZRdVyxWDEw6HSXZfPKuSYjPimsX74ee84aXvim4jJWFUn9o1kQAr",
  "key41": "4hBvCrbaZDHutepvPk7vnCyWQKNkkwwRxZ5CXAfjn5WAYkt8CeZ35pRF2iqTirsUANM5jmzHNzZEGfdVpVuH99DF",
  "key42": "24oyUnXyw9LgACrwRCkRmr6X4hW5CAawZ44iKucUZkC6yJabCrTbDWFHaqjY5mKDqEdJdfWaMZRhfsDnUZ7cb54r",
  "key43": "3eQnhzJ3NwAVKqBYwtdbN9hYVrQVFSupEa1miBSYCtgjTN1QYPtFwWbQRUuJnsW43cknqnFXhnYmj1DjbXFg5Bus",
  "key44": "3QCcF47VRENQ2KGGpduBjLWL58eMdr33NFMAGmAXQrqbjf7LyusQXAbaKwdH2yD4T8aNXahyoR1p2Ne9roKe1Es6"
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
