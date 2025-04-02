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
    "21tHBHBgCXXUQqNXCp5qEpUHS1disaZs2HPSERSJS9hZGNh4WAycP4424g2N8BvbhSiQM3UpemDpHrhmTDKBh8aB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TvVfSKhMGQYGk7TDKiA4AJWMYkdQT3v7R3ivf79v9wAaX6RnUicdpLG6MeMsXZ4Fe4xouVbuSAm5quFkuxEpyTr",
  "key1": "2s849LHrXrMQZrfuPNwLHssUecKJrWJS3BciQhGdhYxi8yRMx77CEr9B1949fBcFH9H3DD7nDinELEUygNKqaKB",
  "key2": "2THgF5hheD9FWjqWHxgXFjkRAwkrT2hXQQt2owRZoXwgvydooGfDMfZzqvaQisGYeBjfJrewobHBPenzM77Wvk9T",
  "key3": "2t7Kc3EEnnzNUY19Qx5b49HayCXeLybqmNrw5MNXd637XGYQi2ut7BpRGMsBsFgnB31AiYpjZsG5fyu6fnHjPNFX",
  "key4": "3R8Wq6s48fHhMRrJiP1UFvj8gBb7qvBuLqNN8PnE57Dvp1QYeCRKLL5BGrtLGGrgsnEj9WfPeBWqEGUampxPNVro",
  "key5": "3DZV6JNCWVY4WVnqwSaRxuiiJqkR3QAKuJeYrQTeGWo8wXLRff5Mh6gTpdJsTbi7AmcTNqNNVH9fsP3fonZkNLRg",
  "key6": "3rLoKA5qQveagVZxdcri18nxtcBJHA429mJ2vLDvxcTZnQeo8R6e2FfgYonLsaNzAnJtHZ833G68Pcv6d67qtZW7",
  "key7": "UdsGx6LJyrFL3SmjYFV1p46cZG8CwETwwfFi2WZEfnHjjwmmBxo9kTXkQCViGKvQ5uQkXF6eL2eFc1KsHSTFNVe",
  "key8": "5Mxj4SiuAkdfY4c4rxF8fsu4sM1VggwGSZHv9N1hNRhwAyDef4yujCqgDaaLmZadk9HPZZ67iX48ba1QhnFdBXk9",
  "key9": "3msuXaHxN27BRzQSwqsAxhhsufAb479Pm5m4U5cFpzbQL8wicKG7ys2u5h1PfswWXqJDT4BSRoXTGTMTm9c79rZ9",
  "key10": "3DbnonGJpXgq7HZpMdBfjTAdJ1gqpauVQjG696xJScn6rKoYxsY7PVLTC374iVwRbc499NPpkE6QkVawmzqsMdiA",
  "key11": "55tmjMuRSPBwghb8f9YoLhXKqHCVA6AGHom5m1uvbm2RVy8uFsELPPYmXmyJdvSjCQJF6z9s7yMPW5DWnBLWZH6b",
  "key12": "2AUwvF36hGohJjYK5J2ExXqm9zPApEZsbWDECKRaKvjfrZQHZXz8sM7gfXWMPtUPNBtq7RDKd67rFQZoVmdq9rSe",
  "key13": "44Cu78XwpHwuQxLHoinfKQyg9GkDGY1stykBdAvCgud9yMr64AH188TFLTHTqn9EYrAfAsyEpDEne242gRGNTF9R",
  "key14": "7ToPjkqGkkj5hQKvgUN4uoPzGSgDTUHj2azgB4zfYXiGcEHtU1md3rWUyj4DvMUEhAtN3DrvomJ6noQqRJiiCAa",
  "key15": "5Zwkq4hUnaNSRG3LhMGDB5136fc8ahnbPoUhbmDuu5AVx1Gc32jEYdHrjYafFC7GccB8k5xSWvZ3U7yMBYtrsZoD",
  "key16": "42GqacmcoU3TLt5Faxs8GhzQ4P8NZSuiVvXuEfy99xpeoZzGM6GCpgSQFUQB11tNnjoE6G8g7CYTPQXTDZ2UJVeJ",
  "key17": "5BtJY83pak1ADp4vLA5vj3sy2NdvmyodFbh7cU1r68EV3UTv6rqmW9gDWb8ZAJ8nv9DHp1mGx5aABa8UbsdRe1RC",
  "key18": "2gY9XRpJEyq7n4gTg1e7hx5AyidqVMFbihpYJEGKtiDEU71CC6BDH2t2EHrpXJnxxXNeUeVbE1ZmMC9PKVEnws13",
  "key19": "2TGh5RWJmaTR9jSLT9PSXBynvUckLXmY8c227dZiKbZUwjUjKnJYXWKctTxSpsNFogWQLCvuwXDvEayH3oAqXSv8",
  "key20": "3Qio3mi1oJFPAm6fTYYnJf99VGjBfMWHEX4h3jFeNUoL7YmXALCrzHsKgta1GyXYD6Q7dPs7grHriD6p6LMhRVbT",
  "key21": "nHLT6F8qHwaBiiyPgHmX2Vdzk45cwkUwFnd8edtGcrsqEyrp2i21bkBnb72sqBLST6V2uL1f9mDWQ2L4K8CEa7c",
  "key22": "2T1aTy7gfBP6BuZRE4E8rfkZdL95cB2BVzRbxTh2eCCJ8SabEqiidDeHVErvCTR1BXnXKTJ2RbdoNbPpRUZKzamp",
  "key23": "3WdMM4PZ57exgaHi2XWBHchnTexCYDM5WRGy8c5W7bCaJ6E6j5VknDVwQFj5epKRymbFcaicHug7MoA8u7CpS5YJ",
  "key24": "dhMTGrU12BrykiLvMGwB8YQyjYpQDQ7sinDjnKiJNKMWx9SKeebjU672kXN7b3PCTWRcv1Q6dBuqFbEVvnRiRi6",
  "key25": "LKhFEUVJ8gYBXcoCs9EjJgdiQuZSKMbHDZ7Yr2CMTNZo3HxPqsTL24V5k6Dxu4398Ut1UnZZ35oDJKijdLxMnv2",
  "key26": "2R9JSK6dQRapxBKJC33N3o8RYya3DbLNWvddGBcLxniHNvgfr39Da8hVaf888ZXWumrQnW7xTw5qrzND774TE6f2",
  "key27": "5XF7c1YWT6w14vd3dr73urvcVBBtTDrVp8dUjyyNe9UgXqxhKcQmC1iPKW4PU9m8C3yv6t1987pNt69tvHB27RKZ",
  "key28": "PYBPNnUxvDGNWZqx4CsjqDFRYnkEejTBN3s6UoTz3sJq7oCjnQrgXjGw3Aq8SJzQcuasHdDL8Jo2FSne6XGxH6J",
  "key29": "2D7jHkHrqGpZNaHqUFx3QkvMMT3RJ1JtV8nKpDXtmaJPwMdC6P8gk6SeVzYu4evPX7K8ZKHeA1nE3kfT5Vuuohym",
  "key30": "3tNBqDPz7rdrSLCihxHn2Nd646jpR3T3Gg6GL5wSBEX4ppELNJGFZ3NpF4bLGrwxgDeRPaZUMdZZfYjv1Cgj8Pen",
  "key31": "45Ymfmha3muQKcrV7FJdrQ9BgNLz9U3ELRAsyHuSwbsM5JwcD7jfhqYneJnJzj3oWhsiwdWhxYFrsG8836qeSLbs",
  "key32": "2yWeTahbaAPeQjxd4PH4oy3iwEsx2uyVbHxq3AmS983dvE8ewQkyXfsX8DNrsnUV4wPPeGkiAQYWzm8x9XXJii5J",
  "key33": "651hvs3vTHk2Kxfy7Xcig51H8eb2wZm67m1CgxCzjepekvQKvwvkHJ8jrVZydndVS65dJiWiPE8mRdFu64WdCSu4",
  "key34": "wKXzosSvyrMKpWKkVfSyhABPxxqgixLM41CuR3kZitzWAwmtqPnFRHzLKdST2MBnRqmX4CVCvoJiBAiuskYSCU9",
  "key35": "5AV8LS4Siai9ombdKeDrm5w1R5FndnZQqb7b7Bv7b3LF3UWV55ynU881CUdxQ8LGi2XDvr4Cb4vTLtLYkmxGfirk"
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
