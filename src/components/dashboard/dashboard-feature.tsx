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
    "35roRm4DQ53PmqtJQ3oyqd7AjMJwDNh22kWej6PDPKyDdVBiGHT5RsteTK4VhR5rgNAwzAaxCmoK1MVj3sUZKFSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MWoqRZfsh9iG7Nf5uq4hnFQQmmowD8HLiF8svwTn53zg9s9tvYvga2opHkdCxf2Hqwx6oeuXN8NLX22jQcL3mE3",
  "key1": "MwGrphHhGxtKaCxznWpzadMJSUxx7ZpoTyDi6tJHa5QfQCVEYYH4UmCb7UCnQ6C74AYJqfjeL7nyjJKixfn3dmK",
  "key2": "PzGfUgt3CSB9zbsdYNKks4J6h3yg68UJaqo8cNGmfbLQfpcv7zZnLSo2GYNTpPoPbtysbYzKmn5L4U7LsEe3X3T",
  "key3": "23VrDAsbQ6o7Vr6RBhyvnp5q2fmNtCYVi2n7b4YV44wdkcHXui6C5heVtAxSB4WwpYMY6o8djpqaSSd9R96iVDrL",
  "key4": "57DwB6XNKUunCUnENjkpjWZg7ocjWSYrWYNcSy8SRAVuE5V768vX7MhMKH2yMwFcLwpbimBzhERtMZdyLzhZesvc",
  "key5": "5kVFUXAFhfSQiTd8qamhMJuNAt2Fpaveo25FdR9kF3hDusY6ZBmMhQ69ZqVSWaKxPkF2V395TU9o56X8AaUuT668",
  "key6": "UsU3PATAejHdUkxFSeTxMYBFzqiTkhfomqmNtau5fD2EB59rJoVD2fZ72JHeNhyfhw4y2EtAnGVrF7hNgNhX57L",
  "key7": "2hQJ4M9sCeT22Th4RuGjzYjF5w1Ay6cVPeu6WZKKSzixDgxkXe7KYMP7Pyqt8CYwnXitepBoRMqKDWXfUwfbjZN5",
  "key8": "57DhyGmJExb434ERaucSumWNR4HyFq7gANb2gKJFywNWxDxWNtWNZSaJYuaxAd1kFVZQAa3sipwhWY821L7NNK3k",
  "key9": "3MY5qfYhNsdniuzNvCgcQczE9Scnd3bXhBcuz7W9kWRQ1ZP9rQsdXuDaq7XSeUKwvXCAJ8XDp1GaiXpApDippRpo",
  "key10": "5Luqu8J3PdgNRxfdjh2qto68NNejJb1nJt4G49URhoaTVUBTKAe92bP4uv2eBV9LMv99Vj2McAQJMkLng6zBps6Z",
  "key11": "5UZxRdMktGz9QzT9y7xeBbgXgA6Fyxtn3WFFij66JDZ5Gr1ZrrHLwQuTgjXRr46fv1PZ9zvQsoY8QHpyq5pEMH9W",
  "key12": "42GW4ywyxSmxnHsTUP8xE9AgnLqxbSqeQPfBSbf74JdC6YEvoQnyzRBRZ3gdtH11eWKLtjk9JaVJzFLwtRXX13Uh",
  "key13": "5xhGpHeLTVgEZtLy69su9J6oJPz7epfs71yGowK5pGzcq6jB5KrXDSqui9jmuBzjyHAxmyE89CnKXVPUBtGf81c9",
  "key14": "2PNCny5ZnUbogoCk7XGW3prGabkfakZWgZgETgQYsNW4srskiD8rjrFbGFB3GgsF5HCZhVraDxC9KpYcphyZQFe8",
  "key15": "4cVkQvMZfEA42BQLo1MEtT4Xx5v9MfsVDEAfRJdjCKTs3KS4oVz4NiodMqgdTZ4jXRU4nJ1dpv7k9KJk2BormY8U",
  "key16": "5ZpxmZN9FzxbSD4uTPvZbUrcZCmXY1uAwh1oBvUtZfZqXoVJrcgB8pTBbUn9qEuzbNwPmgYZSGYRvLUY2r7MN6CZ",
  "key17": "4wH8RvZkzWHLyEbeQBzeVr4XNY1Z8YkH6tWFSV3CUjrpfbVqK31ow8DCwEgR8k8ZxXcbKFXTjbbGggS2xdcVxXTL",
  "key18": "5FdBBNAZsA7AEBWt9q4JcX6bL5Zdec7YiyJatgWrPVKafNgwhzj4U6oRNEBQw7g4QWCqazqtRmqJuJUqfAExjP37",
  "key19": "3X2x4Xhpcsi2J8HT48DJCnyecitaChy4kxrriUiCwepXxDVJJrd6mqxM55YJVaTU8uUazYpBJDJzQfRdm2ZdGz6W",
  "key20": "5o4kSuotwuQywmm7xiAwTpYwCPnB1wLyVGwuYkjP94cB85zo2qTR9SRzqqvCSj8QfEVtDcEsoWM2XMmtzEetv4Ud",
  "key21": "RNUj6A159ghA1bGuH1bk5MpTcW51r3nzzWgqdjtXjpkHvWZv15fks2SYFstvKp4UCj6YhcSgN3ZGg1pgWUQy9jY",
  "key22": "2pPWvSAqMu82hi44bmi7yaLoQWSQwoP6UimEdnsJZNx8Wa8WssY9FF4qW5XX5jfmf6gJRraPZimEoADSMG5WrsA5",
  "key23": "5cM1iyHYbXVnMnBEZmjLsRT4dQnSwEwUbrMF9kbr5h1egaghHZG7jfe3Sj1RPe6d5E38aUbgpeirjD8z1FBFaFwp",
  "key24": "4GdDCUoxAHMVo8Muq1yTZLGJaaXPgGXf4XZLFcZkjLyy7hJqQSWh8q7wiU8gbLk1PoPu45j2khhLC7AYZnAewsfq",
  "key25": "4QWc454KGmmMKzZMRJbwgfajFFx9HDVj2niQxrrBtc4f4KVHGyPqcmxgkQQHJXk7CRFssChqB2VDnntSipJhSAEM",
  "key26": "46QpEaGtbWoTqZcN6qj6jD7FCMCDSHh4bLvzWKpdqtE7pL3sNufQSi4BnQHJ6jeu3Xw8fx4bcZDYMXg23Uu9GG3Z",
  "key27": "4pkSAFWC9uD1efbTwi7u7BGdpAU7A4Lqf8qo8BrLDbKUs2so8Z2NtHFMAuTZHoN3EgoTuxDjRLcSxDvwqAAYkr79",
  "key28": "4f5gt9d7qgftW3CK9PMruTrXVrJyWcnaEz5LDQuvxmHNFGtr2AtPXx3d4TN9YgYHCXU876n9xyoSKP7JQPEEaNoe",
  "key29": "3KQPfuxAv7YZRd7wieDxETrSeT3XNs5f45VPC9p8ePBwS179qCDtyb5McmGJ1aa9jCQThvvaHBnwTYbkZH9rnkFr",
  "key30": "3qWzBarKk9RUmvf413rhq8J4z7JRtjQ6YnUvm9FECDxrjxVYAx9HwRpFiwqLpjxHq1stZ8siPsuCmhFmNJwkE1z5",
  "key31": "4sx1cG8hpRWCvPyo8rfqpwRQR1FoJdBQZeUfGrh6pEeDk3pvaLEVer52rbe1NDhM3d7tXHDzjBDmwroeo1HuqANc",
  "key32": "qWr8a2ZwgHJc1awQXjm4SSDf36xeNfgSWhSVZA6FQ1SaiQtARcbXeHGmdtTXsyaa1oBKizqZ93wmRVsTUb8FwVe",
  "key33": "yzdezgRctB1atuP4PyZXka8so12cC5hazB28yWGhi42juL5yW3VgztcsNi9Mfcsq7DXBxxq2Wvnd9DunWeZzxA4",
  "key34": "X1PjyyR4DN5b5h9egvq3LVTBq1hKepWrwxFMmyirwU7EXAGUgVZxywFAXVaJtRThL2e1BmBVMj6nEcLYZDgGtV1",
  "key35": "2NL18ndAMgRfFctazw7SPZpXrfVgHVSP7DBcX9TaQKzdbDbiBjAfmDSsdzsSpsuFGVrgqf3aeWWbm2NBspWN1Yqp",
  "key36": "4LUUkwvPgPVCJSrZp7hyLbr4jADsa7wxQxRL9nCwQdSxVMe3BSYRiwYZCvHfHFsiVukoFUsUfkC2hKuz73Dwbxft",
  "key37": "3Zw9b2ZPtQmKf4sZ2bRWPQzwriV1BmsX1qXD53EU5BJ4BH1gSnfM89hUXLBEj5jMZYgpGeSBSginSMzkFY6VU29A",
  "key38": "3F9y83MPVkjMKUYiK1pAFy9fFmVQyhEF5qPrraCz6CEdwsdyUeDM6vrnpUUJaLsYk5LxFR162kfHtXyGozfTe7Xt",
  "key39": "3bUNcJxJe79zK9FY7wTxZpAmkgCTZuHanjqFqXHoS3K4K2mA3UonMSTkbC4JLFLpB8YA837emFsaLiJ1WV9RKRMP",
  "key40": "5jM4TCh6qtSyFNoXs76zkuqrWYbEJDkncrdz3zARuLhhpnP4jAffEWhWLTZAyvgAsxSTMKqf9WvFdTAy4V473GLe",
  "key41": "32TCeiNroXSAHooWpQAbSkXQorgCMR4ngTafbUxTf5YYSwAtSuNecT1jjgsnr5mASPZ7e5oC9U71HXueCHdtrwg1",
  "key42": "3mzuvEUiwBGwwxFtMr3qyHuBHWG8dRkcTQpqVMquJvNSWSZ8SFx4YAYZd2YXtFFpymr3gvCZ74BrjLrxcGySJWgJ",
  "key43": "ey1doauN7cHVzPQ3DuQk6mvKo9BdDtfqgKPtWm25czdwL9YnNqNuZLAzESu1ZySpz5LkW8P64Sj3jcCbKCiMfiU",
  "key44": "4ApFFX1jA2JtU548BdsqJokaHFvBaXrWZmKhdAbf5br1XE9WZDbtrTERWLuJ5ZaUbaMe3LzUJ4xZ7AAMwYmoFkzP",
  "key45": "27MQi9RANzJ6iqapQBBh7pp4gjhXRgwdQAEiF7ANAnTeAbkWSwruACeJAgeAQtAGAjP8NxfsoRBB2LEMcxZeWWHJ",
  "key46": "2wHk5xxozw2ixBV6zqucmkd2AvSopJzY3VPVkY6P31NXE7Qvj8h85PazmxZDFWvXPZssT4KFSXwhtkyjBG5MXGfH",
  "key47": "wzQ5cbHh9RLzMQrAWtoPegHtERCuhwRdvxRCMFm2QbPJF9oSU7qzrSpARuisey9zHa93KNyzF3jQozbhXYrzyXr"
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
