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
    "vT6v2fTK39EYAZKa9RKVj3aiETokYAvHgkmugrT1jWSTSiV1bmgmEJUk3ncaHFdj4fJDynWGvTXfxLP4Nqgexk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4APavMVqAkMb6sjwjbKwqjCd3gTKTWpgg3KNMqDSfwtvogQpNp8DYoxdiJvNg8EDRVCU8MTmANWd64D51DeLsbdu",
  "key1": "5XXqAqpg23JUZEaXrGAQC9gteQ7jJ5N3iz7cvbZ4SRVz4r99nv7eraKxg5Fes48Ta3x4n3fdpuW3HYHM8Ur9Dqme",
  "key2": "5owyvQnw1UneNxtD42LQukLjzSqbbUV5u82W7sSUEwN6ewTaJeL2VHuattUseEq8yNFBcirYJ3p3BbMkPrtkNzLS",
  "key3": "F2XrNeQ7U2WtNu456xx65hNnQAq7ThdEGTCTX4Y5wg4Pku4ZSY83nD8JTfSrA5SLCmGcr4CqcjqNREs6nfKEwo5",
  "key4": "avEzYEaAPFLSK8KHFJw6JJs8mHCUogx6m9ih41wa7u5HGV4NHFAweyaYkEosu9qzTG9HgX4LiGBLw5uWmbpSwwc",
  "key5": "4ZuVpziqDxaGi6LvzKJyKXP3mVQy1sishivEm6oN1JZzXkz7gPvMLanJ24ax7pjxQ9TKeB6hsHVgyKD8XF6D9yeC",
  "key6": "53tbmU4but4fG5zyfGxtJUsxD94Wr6X75hJBZAX66CH8vyaJfKZMyn8hT4nt8Mn9Akc8xEc9rN5zCapBDAdRyRr",
  "key7": "49bXu9YV4qUwuWP586NhnW7BzZWV2UirnwUYJnrSZSpkNKK4EGEupEdYUft1d7iNzjQU4iAXBBYWYvexNsHwurPA",
  "key8": "5NBaWSu2WNn2b6zveymzTfoYNpndr5ovCPDfDxFbfPA3dbcbLFfeCeJza71EQGTeVxaAiUuqLpd8nbfj9LWZ7ojy",
  "key9": "5brZXq1PwJPeU9KZxBn829wbnhzWSC3S4kd775TzqWu8uuArjjsTcKqgXJTGykHD4VP71rPSmKz1RK8neYcsVM3V",
  "key10": "56cyjKEvLnDNrZcTNL6MkKJHCs6zT6KHJ2PJkGSTfiP1cgreLSNWAa16KptWhyDKGgY2ASavZjsqpx4hMqDtseEb",
  "key11": "2tvG1jTVe4ihvZTEbKiLhz7WvGJdof9DzpzK6HwYuFeLkExgNaAP64nzdCKuLiDRotwQFPh1U8gxpwFFtQVYpRQD",
  "key12": "2J4u84FoKv1JFHZp7UiKkBPYrv8Fvk5xjsA7LkWbr8jmqTJXemhEncCHP2zvHUWyYAK7e65942Dwqooi5DsAWrFn",
  "key13": "2LGbgfdheJdbrfE4nU2sLWdfCtiJbDL1YU6ptS3pVE8U9bkfdK3c2Nb3zNWHvyi12wKgmewxUndGze4CZs39B4Tq",
  "key14": "3PrWuVyWw8gBdYupje1N6cNEvgnicE7etpLbe3nfFD7MNd225awoPrHYjFWQ1LPtPbxCL7W1MnA3ove5AxaqXiMm",
  "key15": "4eNZiccWXRVWwdmkv61Bq42rjZazsvkW2C1UqbAzcnwiDKiFh1ETsFSCMbHesqQQFRS4LPVCSN22ktTZuPWTPVtS",
  "key16": "VZTqsYFb4U55ZDEGQ4FgmJtLtPgza3p4cKBHqKNzgeYm9rAg7kLnRMvS5kYHWmtQoT8CPo4gnGPpmgx8d9mHrmf",
  "key17": "3bpAZXAT6NTSKNGmk7dudPC95zj7koYEJx8Dis4J2g7Wr2ZMPZq87geTJ8G9VqAcjR4fwXEna51GzT1mf6XNwczT",
  "key18": "iFcf4n59fnNmaJM939Lxhs4bzKVyq7joHWerFdwQapgUsZkidqfhAEtfM7vUtQKUSDVwSm53WNzeLNfr5JXDXkp",
  "key19": "2G81n5c9EVNJddn3NpujYbBScRWMCjPA8eddYdRV1m4u5coWdGHApsoM9HzEdtAwTWemxdoj3MsqsuWJ7qbnAuC",
  "key20": "5YwGJXBQmUXXio15v9BQ4i9Knzx7kbg2Hi36yCHFRxPZFEuUfQm7mdkgBbqRrvfZHqEZ5uaQ2WgXfAzJkMQSDoeY",
  "key21": "3SrtnWpXju9qZs6MVMQDjECfAPHfTvq5GCJjEudqgX7ohz7VeBs8YvsXkcRCNxcyXTwFNBQ5pSpUT6ZmxpWrXR58",
  "key22": "28FkUcFd66LK8WhJgk2bkWF2D5WSm5nZ5X5HuY1kZwnStAh4NxhAztzroKt93HCeeWs3eQY7xukTkQbM5NUZWBMr",
  "key23": "4fZs5LqUAVJaJEgCv2jhgxhsFYjZcHvgory2ucrHfvDm6umWAvzQ7hGoyhDHUGGHBWkC823kS3RKWUXnuXW81ZAv",
  "key24": "2fB71GVwwVXZrWHemAq5duakuzSM5oxXx4De7Chx5F2gQxSgtUBw6ouqRi1e9oJQzCv9XGjPsMSvxDjsQXY1Z8s6",
  "key25": "4BaBbYYvMZES5nYiiqb37FQBvs5foeh8ZMXN6J2yECDNyQR57VrvwFVK54fJaG1kmoTWkkLweCBCPFkj4HvdwoSd",
  "key26": "2BSrcvv1LcYCaAoikjTiCnfzFtnoD6AKqPPmfWw3bxPQCJ9wJCB5LNJax9fqGY1e33r7FYss9NpM9tmUK2C2Xoo4",
  "key27": "2zqhD8HLYwi7783gGtRW2zPgJ88tmwKfYi5mhfrFVZJDPGPQU6fNWU1D6zLs7kaPYHX8miB361eAhZr2LpTHtUiB",
  "key28": "yBfAETFUWQpwUj5RSJkVMVrjmF4dnVJH1kuW7kFTdsvqekmY2emJNpGrgVrCGXbESd6xU5Yfhi4PgPVRVk4q2nm",
  "key29": "4P7FUFFP2mp9yhmWQKh2yxQ8goW4zsdL9iYKEjUx9RUdwsAv3FZhAHs86oZ2yDvWrtHgAigovmodAZAoUfhsSUMh",
  "key30": "4zKL27rvu3MHXXc3gutmmEprag3DyFLQhP1CwDE1SFBuyXfbSKYJbmEV6o7YdV9EftuEfyBPYCs1qTT55i4Fq7iZ",
  "key31": "2YhATgKxQxdyWuh5Vo8sDaAFCF4zGfVynLnXfoRPfR3V6zSJBNgAsxDyydL5YARVBErgNE1ZwiXa6b2Ni78p8Uzf",
  "key32": "31bBo3b16LPi6fVd5PzCyz2CHzRi2JwAEZdnkisKsHMH9FtArW8o8f1rCxnjHXmWFqPfhHqoiDdyFmUHd32xawom",
  "key33": "3mn4TMpz3byKKJZZ3JNqGRsdF6MQQfxdzC9wzV7XRvR84vCBGqevy3PwJDiqX2yEFT7SUCoWKsWqUwyC6G6KN4Ve",
  "key34": "3EXJemeSzvob1viMp8UoVmN5vg9EVnUbAtkHJEzrvmyYc6B5LC4hdjShGA5783naHciJ8HMxTPzE4ZxoFNhTV8HX",
  "key35": "2iZ3oe3SRwRrwYGkq1T6Pjh93dKN6vP4LkeXdeH16454boNB1ugg7NEVeenjSDbWkkmWYH16xq9GtzrJNa8NoY2u",
  "key36": "Gehf6bP4TkX5o1R5B4z4813KY9PUhfAWLaauB6LajfZWMBS116RzHrF9s8ktMchkD4HUt6dwFaG4PURJKq5xMjM",
  "key37": "4xKcxuEamdzSQrmSCKJKEXRA6gP6ZjaPLnHSyxnwFew5Wm41RsfnYf6qLXDJ3MNomHomAeQhGo6sfC9mEW3r2apa",
  "key38": "3yo5qGHqWRQBQYaAxVFfvgs4qUda3SBjjMSJP1CqAyuyfJ5qFKYHySPDowuy3YUEzdyUsQC86H55NPcf9GBEFLbo",
  "key39": "3pw85uPaMQ8WVETEF9bmkBQBLQ3TRKg8k7tERBUYXD8isVtz3BMexz3CHT1htmmja2bQoLprJhLnX4tjSHoX5iwW",
  "key40": "35JnuGcsPQiUMrJRLZBMdVj6wDHsxMkuyc55TEiVG8gtVJseJBU4h4SgqwnsYTgJ4CdeEuqerskT2eXDajZWXJH1",
  "key41": "5GvTpdjdFcC9EVzyTA798cejt3i7kTqWDt4zKtocesZASaSrvzmLAgE7ejtyzoPZNyH5dwZySovwoZj3it39aoa2",
  "key42": "5cUy7RAeYyt3HFJwzft2YR4iwon4EM3GqfDiWc67Emfr91oQxmwtm2Ty4LN9xUxMvizL1FGWTycVQqN2aRsQyxdC",
  "key43": "4PuY7uDJcmANWtvSwEz5PgEzsdQrQoCvH9ngRRwqqhBkKG8BquCboMEu9TxveDoDkEqTjYv4HCnfqZqUf18MM7HD",
  "key44": "4ycf1D3J1U3KxKniQR7GPdNwcsJC2ANAFxJsoG4QGgXUjPyFqFNSPZaKYfGLocwg2bBs6sTBAVdGAVtA9noy8MiV",
  "key45": "4FREjQNW6J7YU8c7Fj9QsyHrHNHBxzWMbALqdWjQM2RTfeZwD9Kd5kuo2kcoxqoX1kjWdcvC2kgRC2v3uHXTj2WZ"
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
