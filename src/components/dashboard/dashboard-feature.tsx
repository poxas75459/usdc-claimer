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
    "cSTb1MT7apjx4ndrs7wekvTMpfw1nAWEBfCLGVvejNCmD4yzxtk3xBj5npHpKPAcGLokoAoSFYnxSPWVYbQBWwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49jtZFJFJkjBG9fZjFJ7FnMxvqMjDJjfEhn2Yw7AZW2qTPq9cmCDxEAqQrbLnUAjCmxHJxLFMfcX9J6zSNYyCWFe",
  "key1": "51E1T6oxUtFfBhBHUuNtqPz3sAMs7jHDw6hjJwPpnuJZtvS1GNbG7KQfdBjtqu2ouCTFF8Xc1VW2rboQMpXtUngw",
  "key2": "4Yr2vDQcY4cRQhxX9FxwR9RrSoLGMunCKZ6JsnvCLPKCPdfG1Xoja7qZz4c86j2fwKqgnPFaX2arwTYMzLLy7Zj7",
  "key3": "21GfccycAd7YALgKVHJ5b4nWPQWLB7pvucXN9yv8gHCvd6FkkC7AZrYbkw23xpXYBE92zDE55imCxoKxPNRkDHL8",
  "key4": "5cUe4Jw89ymXRg7KZ7Pham9xxK7PxtdR9VwH9Y9BJo9ecZRHc9BBgH1HtU6SVgx8noatvVGrP9bLgyAkYDKG7AVE",
  "key5": "3zpf3YUxwhaHC7Bf1es8dUH3ykuXsTGwDtbZLzp1fNiyU93G18mc2PqmW4jC5GPdb2nPnDeguTb23ZXQ9zfLmgUN",
  "key6": "4aw7KPDGbBWCzmLjkyC8PoY8WY46Yd9SBUztdjTSohpYeZPvTa7SZzEBTW2Ac4wLh4fvq6Q79NxnHyiAUGTMZ5V7",
  "key7": "5EKKD3LV5tkfsvkpcNAgjVWZ3hSbhU5WuhWj9azpdoXzeDF7w7LLZsB5XMtnoTovEcKbZErbid8pWJmFXN3NnNPR",
  "key8": "toEcN6ErEU96V6NAL3MQAECZVPdMqK5nfjDjV2ZtWomTdrRq1TpJtt6tzkoWB68nit5oxDDXee8ABH9zHh8E6cE",
  "key9": "2c9ar77bdRxDTiRtGpz8GnpCDr8fFzYa3rKRh3UKXX26k4nziV1yKKxfwKhLZkrFA8gy1rPcPNqwt8XUQcw2r6dF",
  "key10": "4j6VcaUyzrGLvbfUgYXwzYzMUskYU83mxSqc38Z7guFM4SJKxpqFrPqRnAR2bk9iVed4Rbs4yvvwLiyArybrFeJM",
  "key11": "tujsXSgw25KjccahNPYASC996dg1882YCE1RmbNFjzeWLUzCXXksbwWYC3GZkq98KpqhhjFzybKcHyXA6XA7ts9",
  "key12": "49yF5Hw3piWdnWDpCyV4WxgGNKnmD1tAfUvQnCjkW9xXhyDzy7CdEL8ZLLp36QJ63tbrVietxAGpfPHTMmX1jiK9",
  "key13": "3mKjmp5B9HZ2w7fstYJFDUgNBV1hLxdfPdeEnGAhFDN95Cp84BucFqX2e3X8zdMQahQ2VtBYEN461ARt9R2VLnRT",
  "key14": "3jxdenbu8yKbAtbgVyBVBF9jaiGZVtZ93w8ya4S7HEpZr4KJEGrXPUgMjVULnq93ZG6Toi6GSZy2FGnUxpSuQ1AD",
  "key15": "3SaS1mKV7jKp6mBo2kAWgQBzLWUTYtfXFbyLbvC5Kf62fWPMJ7v5884uZWYKMZfELjTvkSG7Higj91MhBpS6exVj",
  "key16": "5LYFYGDZ536pj2YXPaiJgXv7oishjqs6dXKG3fk55JK4d9mqBDpmGq7tcrCN8fPLGPTqqNosMh8Ttykv8DvJ76fR",
  "key17": "FKTsnEKmKdjAHuveGD6yMd5fYu63nch29wRnmDQqoAhEHAKQ4RhCcokRgBaVpKgZjSLGEZjq8CnkqVetwcVzFa9",
  "key18": "JqqXJAuMzwUJGaQKZHpy9WVkSWow76yZbH4UCQ2oSo3x9xk2p4E6Nfiq6C4poao7L3Hmq4D4uzqx6mpVGsVhJaT",
  "key19": "Td1gF4Uw9m6BD7YNf5vw5C5rShppmAfXrHs29yQmrU8cYkS5r9GrBnT5udciPqXhM9uTXqhadhKWs1EyLQyGiZK",
  "key20": "y4V1QsdQeLUbDr1s4qkvLJf1KGRKFaiBPsU89EP9m5eW8jHUT3HVHqvGo2MJdaehbmy6XwRixbPjECuUXi5LKMH",
  "key21": "2Mvict91x7S7g2HgbPPxWmE4H8MXoVae5vuDcA74tsRLSys5KRkKAFidfef38QJEY3fHoF96jAGjsaTnEWVSNci8",
  "key22": "mkVTAfSFPuMxecSJGg2YVUioTPG2cmNiezRt7KfuoCBskuy6KN84arQZBpE7TJKrpC3HEUyLuSHWJgfqLT5KwKG",
  "key23": "3sKvokzhyWuna3ozMTBzN7N6szTZFobaBhCErKbfJPn3VmBrs63vCHNVLFvfFYx6xi37gdiJtLLB1kc1otJmfSx",
  "key24": "5Lviku316SDC2EuVLxLYhkK2TJKw3tE7K5QzcbuzBmrcF4VUu3NuoAPyVD9Tjz4yZ29NLddXynpi2PciKUPCbCHe",
  "key25": "2wgenEkgcpnXYLuE1KGjizwdZ7xyg2Mr1w7wjGGpVG4iEXV3q8cChJ3WGKBBDgQDPtnDsT2LvZsQgFjGMoktrYei",
  "key26": "4vRVrD6waNpp4cEHviD51fmvTHWsFyVR3rsNGkUpB1sUYT18VEuv477wzQ378g5eYSHng7WvuiRXiQMSSPm3pJCG",
  "key27": "u2N5xYkUZJR9dckdKQKF7adPescLjS3sptG4sVBK9b6422gDtiuwaHCLQ3e6zsiBcrTt4ReJJkBZdti21H5cdyt",
  "key28": "4cLDmGHfSuX3ZYTSqwxs4r5T8bRRDrcJt3LUcpvYtqF1kRtj7XfXQo4Xdf8RHu9Bmz1CiPxqYHCzfYEoEUh8aLpL",
  "key29": "5u71o6dQjUatvAxGK6CtorqAspQGDv4bFTsUj9mV5wSvqEYCRGQQRtH9nKyJRFVKCYYrzt4zZHXupSoJ1BFsjZA",
  "key30": "5TvF6WobGkuPs3k2JGvRAZut7JJuGNjs7xEC68a1LcLwyNguT278zd45VGUPnQJq6ALksc6YFpfzFNioestF9f9u",
  "key31": "3aCPgkewh1F2Jp2K5aXfDoW4Lggu8iB7LrWHaxGTrBFVJ1GY3cgSZygXygcn6frbdSMpA9c8JbHnihjVpa3fNmHw",
  "key32": "3vgLhXtzQkiNPJGrNUQqpCapzBLuTfn3tTA1xgHeugb5dpzYckZDdMvyqVEoeCkfBQXSVWYAdofTbRJe41PqNS4F",
  "key33": "3sforZZTjMj8Bk7MTrbiTUL1w63D1zSuMXdUvsMbpv2gw6N6Cv1kKVhieSwYa9CpqrfNAunNvpGmoWXyx3JAbykR",
  "key34": "62s3whxwZPMVafuepFsYkCNPfTQEHcg5YCfvyE3Gztz6FwbfTHpyJ54KTpj44q8EfWszyDyfgt34AmkLgqm1K8Vg",
  "key35": "eF4DYKT1MNaLhN8SSnRznhUsiaG94GiSkWn8MQPr8g1bcoH7N39oZQC3ZSbMchHJkQX91opVrx5P8JmyC9wrDo1",
  "key36": "5Wbn74fNTbafHxHq11VnKwb8tTuCJmadsdt9UmUZmMQ59ryMr6AQEu3NVtPi7yN2SiVkyDqCxCEqFmT9FmZN9rse",
  "key37": "3HG2MjEu5WX1A5QxSVLFdQWEdEcCrBzftc4gzCL93xrkhW6usfDRyrhJgq3BCajFU4zJkEARpdQdo6qEFyKJ2H5v",
  "key38": "5Lutd4D4uTyY1DLWwtY7UYqJLZSfFPkUgVxxs6dQEFMcZabPBB587YyACL19HrNih7c1YPyty6SWRKGyzkjY44Y",
  "key39": "Lth8pHgvRnSHfeM2eCT8wQmrYCEseGbYAPeHKCuF2minBQ5hWb5s5YVXbnQuJQWpbgVCE2LQdKwdHLdhzHj5XTf",
  "key40": "q3zKAH8Y5EzdJxWDTvDQnMBwMGisJDJ4BtMU1gjLZPuKBk4qM9wZbHdH7U43rHS7k7WrkAZ97SLbkdVbnvjWohc",
  "key41": "2bh9VdusEL6mGAenZztmkNkPCcHARxRQ7AYTZjj6sAWcKpsn3qq2KpEbR4fdoubtcQqZpd4yabg13DPNyMEbNwY9"
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
