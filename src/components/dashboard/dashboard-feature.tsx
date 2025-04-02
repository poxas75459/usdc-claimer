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
    "jZzGfvzZpznQnxPPHcKvp482BEfkwU3dE5zw52SXj39KfTpdjFqyDrmUxZtVwBfJUJ13HDXeewztaXPiue6LGQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rFLs1bxWKzqdaywXmeRhtniUqAZCGibWZZWBVuEfdS25dHCFvtPMunnLihL23BJ47ZFdpUTrrkm4KCPBW6LCcrn",
  "key1": "gqzF4ynJ8771mmxHgFWcP4gb9i7RtheM24TEbywVzCUdPhAA69SfQdWReH7fSS5jAt55n4GduYg3V1d1Cir7R3v",
  "key2": "5GvYi5jzQLhiXYy5Z3WJ1HVpArjF1sQ3xRs8euSWVb5rwtBjMvJzSk12TkhciED5Zhyt4tjsYy4m8bwQKUnxZJ7X",
  "key3": "4RyU9a9KmXZXW8ZmCVRVb7jpdVZ91jRnbQYKKJpctCQhGkwwTXzoFZUUEqvXwHb8Wobx3c879J29ZgTmXESfctCp",
  "key4": "3ARA64xoLCEwi9LhSEZNQzRUMpiXdhMqfecp2QDgSUihtu7HHbwRA232stUZXY4DgymSRwz9d2pEY9xwEdcy7bqJ",
  "key5": "31xDaqFpiWYpaiDGCeUY2ATT5S7RZeLZURZMuxUbunsT8o76pjZQr9HJcbgu5Z1252VLAnnk9N91RYwep5pufNHX",
  "key6": "4WCT5VhJpTVT8Hhmu39SAkNMbH4EAidFtmD7xo2nDzieK4vCDTjGpUEhPNCAq8t9Kw2rGFEeqDhQt6GjSVPyViFp",
  "key7": "5ZqxBQLxzWYTiuiX8h4RG9M7Mitj2p9GV5ZtWEWhURUaZAh7GF7zr6KARz4yzr8JcX3t7yxwNrbJJYVSuoysz1ho",
  "key8": "2moo9b5Ru3Ju6egS4TtJ3RevD6T88SjD5fV8AmqaJpvRbJQpJh9rp8LsmFby7xPetsTTUdhUBuMmAv5pmqAbbQSK",
  "key9": "5AbcTTCwW4p5CM99F63a7krjihdjKWgUpaT8J7DUKLCojfESqbqCBFywK85LL8SDRyXrLtcRE5PZybATmCW2QDvt",
  "key10": "3WpNaJfr1PpdkMTxkqZU37t81KMwYg4X73UxH3W8EDp5uqXyRsGGTMDyqyw3borwWk4x24L9HKpPyCtz1HzsLKbs",
  "key11": "5Ycr8VNPrzwPAJ3hhLSXxN8em3djGwB22YH5iwWTip8L7ZJ5DZWhJDbcobQKAkL8HMqRJrdV3m4ZdUyA1eESjkV4",
  "key12": "5fyMr6Cu5svRzJ5hUq73csqtq9jJzTiiGQ87hXo9iHWjNj79zcdRsTgjrUUgkEKe8i1i4MvQ3SNVUoebnMWRLL4j",
  "key13": "QqCfRSDJm1s4pSLMw32rU7gBd2HsfhwXiwGHJvhzBbYx9RtkbndendKhWWbL3YQ7TjmFLBMVC4GUxunYBR94gpd",
  "key14": "5VF3cY4fbGcgApaVQgMWTQfeVkZaR2Mx5HDEkRYLhTwQnHnCK9Vfa3oCDtBCqNNWCUXTKYLAu84HfKfYHzWTzjSd",
  "key15": "4MUbnT3wWpJaSNT9LQQN5pF31nvn4fJ645VHNJf5zUcFpL6ZRdLstfVxwwXnBGyQa7VLSE4ctGQV7ygSs2y7j8Qi",
  "key16": "KsaPu88ua5kAvUaHAkKsWuGcSqGcFP72k5Dt9a2UdMf6cB4GU6urVZrVCs46MJ4eUZQEeZWEbBpF5nNMdaZ3Yu4",
  "key17": "5JVhkgmeeAscXsHk3ThiwpLryH8rswUN2aRbQkMs78EsYGPz5rhp8AZmMaP8KFRgx87MDqRAT1LJTnWvTBj4pLGs",
  "key18": "4f9QVyp4ZrxoX33fhrDLbvBo2yY6zb1r9y2euXQbcLDBG57Mc35jaYeMGB41PnAyab4XwwmasiETLZPDpH9WjCtQ",
  "key19": "aK5Tm7fBux9Rsv978rEMAsHymCMj34mPUAtyNNGoJR8eT4cS8MWMnWAxq65fNM82oYeUDHKU1yMoL2scQmafmrS",
  "key20": "4R5Dd2oBGJhxANMRgaN9iz5aJn3UWpnSr61yTR7AUg4MbWtcXrVed4zvYYb8ttbjCJCnwehyscZTfBeksYfQgXVU",
  "key21": "2HR7ZWiG25MJBiGx54tjXMNnx1fPyUX5ry21xX8cDPL11MPWrB2jccBGpoa9yZcTp5dV3RHZkVWNr3wy6Kf4m2qR",
  "key22": "3Eq3ZJzEbHUm6KLdPzyPSTQjWF1h7R5F5WWAVcHKwTCwpLXjdyuBHBtzSzchmyhZmay4eD5TY1K2aEGax5wcRqaD",
  "key23": "5MhVNfVFjRojVduCJAHEXzEwxykwj5DC7BB6qQePfPbo1nH5wY2Yrjc8H4MjS24JfDU8BxKmoq6VySzB3rYHAa1s",
  "key24": "4eYjAVd3kFT3n7P61NqUEALz1HCwSRxEZ1r5wNgiZTJcaxstf5f1vnukYeUoqnS9YrfbrPoD4E16VEQz5PwdG3xG",
  "key25": "64bdsBhLorxshk5tGNbLAuDGmBDeBi4qpmT7aNf9smkEX9E1J7bdEqCPjJ3xeFqPZvjJwuAuEmgobpwcxJsRzqi",
  "key26": "SnxYWX5XAKnN953Ed8TUpBVLpeXJz2pZeyHJqbeySvvatWmgcdDfCaWDoXjTA5MAsof9ckw4uhpeAb1YvLmh1t8",
  "key27": "34JHesJ7rvrNFUicUnsgLCxmpgLCppLmYoqKGtQBsswUB7CDbzoYat7k3QdHARw5qBMkFBo1J5NGkFPjMDUiRpPH",
  "key28": "5bZoJMpeNe7gH2mgtMwFPdc1hEXPjD9juJskCuh9ZPyRoW4JpmiEJ8VMsWEeatDFQurynPUm1APiBac2BuiW5ndP",
  "key29": "3NGhUqgkzGRBAm5qbKiEXpKCzgaDuggZ4VVxUSP9qmRfxUhRVaxCKrCHsnMZA9A3NQz5hD6Haou4EMkpHhnfHTxR",
  "key30": "4y6eWugofHAhJS1wdXs6bRWmfH8zAXEi6QkJNjugRVZrKJX7droqCQnqpRyEugMCf3vn9Wwb4Z4B43QYfGkq9YJs",
  "key31": "61HojMsEwRvDxs4r8R2RtVzK9GtMcbddcVkioRfa3nSw3GtZcAqvWSnvnMtCp7ExBbgxHZdbxTL8GCQtTB6xnQR3",
  "key32": "49kohkht7eqDBbc3bJgnppjqjf54CNkwPCRbzGpSVhZ4EAxRC9rS6pzHr8jeoqjmB41SQZSMrX8rYU3MyDdEJ2TV",
  "key33": "2C5YHEzY3Sh3snN5BFeo1PVMw9VFkTnpmQYzWmKswSHh3Apyw7C7aZw8NbRw23ZNBNZ1Yw3ptMyn18AstSJjWoVQ",
  "key34": "4AgMZaMB3SLg1EbpmK7MyxznZYMyuQjBYsEPJfMMw2LPb7Fs25GtF9seFWgV9VzM3FaZD9ftAZTekncpaaTm4rvz",
  "key35": "3AgJiHvRahmnQrKC7eUEmWRRmgdXV5qgoNoJzRTrg8bXakLFzkc9zKmFNXGrboPMH1ruWVnkhZeQQPKgUyb9CKHt",
  "key36": "4WfvMC9egNbnm5vUt2HBFwasU1X6moBbovzCeMivQpPkpY71ooReerwA2SwLRtp9U2dAJPhmh863aS12eCUmtKE2",
  "key37": "229Un5XNjeyNDyoXM4sdbriM36vTkJtGnYBMuxH3eFahkJfYaQfg3QWJpdxFp4LvLN7fD25XjYsXQvKKVn6qeXoV",
  "key38": "25MnwGmYrqvwjsG4JwayQgkdimFBTadaeMjrPfwhnjF5JTeFBZnv2wwShjGTEhkf3rfRhh7uE4N6NRaR56ch57eE",
  "key39": "WfJmXmPXSKNdPpgm7Fr5qBYyCHQgiAmyzoX9DMWnayNRo2WCn9z13ZAmesmGW8XEJ6GzbPNndSkJzf3TgJEFSUB",
  "key40": "63nvCZ6AgsuCKfaRgVHrqQSiRnF6MgTipiBmabgotdCkUYyzkUG8BJ4ZcYbEa98gNcBUnF9pgEia55HB64pZPKfB",
  "key41": "5PrE1qAHVEedB6Rw66Auf4wLdE6BmPQ49K5BK5aV7C7xAYECkB51NXTyM4eJY2xoLvYWAA34iWQYaG1UotpAqTQD",
  "key42": "GRZERj9qUixQdMup31i9ySN3eAEYX2uVPdhNQPDW5EzeQ4cmrkNzZHk8qgWL9Fy82TZfHAB1d1WPsyRoEKVZG1w"
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
