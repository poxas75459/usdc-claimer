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
    "4wJB2yh3XxLbsN5fb8Vvr6c58HuERYaVHSpifLcA2wZe2EpbDJcEJbDHhfmKxyz6R1AK8gVxGuH2qjnKB9bemmgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XuuT8zPCXUTkJGvhBcgcszcmZk6D18jx5dh5fm5x5rfPj4YU8pT2j4q8LG93KomUoYU8R4V5dUkMbKC9Q3eRdYH",
  "key1": "3z7pnaTvr7CJz7cJBRv7UUhBJLQMqfQEQbkdMgo9nDW31Wew7tVQwphBE9saxm3rXjFGk4pzsmhA2xakhXfEWPo2",
  "key2": "4iDz8aZCYyNCjsC8dEEu1xU4yZV68wu6gu7hodfwpM7ToJdLo8BJFpZEYD3co6TiB7ZAWtNNgNsrUh4wSDj1d96w",
  "key3": "FnAddGTyCBYSQFStBYyGUzQLTypgckKkHGKQDgKFQfCeezREx5pvzsLVpnqjECAYARZkqKAh8PySLhTuGQEPqXN",
  "key4": "5v4cFhaF37L4Kc9V11Pm5Nhsb5YdAZtw3SSTXj3NfuzbuKcgTKVLdZ4U1oGgb4wHiN1a68aMcQUYSrvZRhxJwvGk",
  "key5": "4B6rpUNjxiwn4Keax387qTC4JJmrxXxHv16HhyFvWmW7HXHRusRoMuRiDdxjJtVoZUnz6BFxDbVHYtFFV7hVc5JW",
  "key6": "3nmhKXDaEEABnD7C2WGvARnubST1Rz3hZuCgVhDuuuRCpegpYpKQ1XTjDxzRi4dfZLhKZEg3M7kR7Jr2Q6VEyn1Y",
  "key7": "3eHwgqYs9H5MgkECucJJjGTyx8gvNGK5gtkz3E8hgu6VGnjQT6jzwWgUhy83oLEZpyQRAFeZtobWhDb3sTeTe3DE",
  "key8": "SK8scSmGsgxB3hZGacUjfD5GJyBeHPDzvzMtMZ9NnZdpecxoeDYtw2wZiSp7Xc9DLNjGr4wGCxpqyZina8dHwZW",
  "key9": "4SzbrtsLB4USzAdu2LWchBjVJ1B9KVqxZZw78eGaymY6MBYFQmtjvwxEM3gbtK5URaAf8gVkUz76a5fEBbF612tf",
  "key10": "54AY2eVu3wa2ZaEo2UKra6BZPu2u6FKusMRXSSTG7tvmDBdKk8uhCsBeG1TKeN9ovhLfVQANaNWFPATbYmvZMvZ3",
  "key11": "3GALoCUygrQiLiP92v9dds8ov2dPkMocuCS8k6om1jBpqWY8zsHBkdXWQSjC7wkErYkauBvPVXfaF8PVNfXmpqtC",
  "key12": "5U8RvwgZU6jzUtVrUukDejF91NsCbuW4r3X7DAhZy5ozr5TKutugVbg1YRBjKmqYNKkQ6AWJDxTWHotjNcqegf6s",
  "key13": "2VLA7pSUDoFmCo47L1heD5vJgrApyA3iqizWsHQsfZ14DdV1z6TzVMtcXAwsxtFVuXvWCaxyMmh2vEbHSfWvz78S",
  "key14": "VfucEj5uoXX3urFsNvcjSeoF3JEvzgZCoXhJowb35j2Hk3eoEetJTtJtVmRvSsU6dzdgEqVnsJKYmJRCtf5fQYi",
  "key15": "5cQC5Lq2YsZrzDEst3qRBL8vStq2MDGJxXrm7H6D1ttfPSMj5ttqBqhHfAf9M5SzGo2Wxjm6pMCNPSy7zrigJijs",
  "key16": "53ipNGKL1dsrg8FULQmaVuvSs6UP24NbvCGCw2ysPiqzrDvQacSx1NQvEXgxU2j6pdMxhn19iRUdjdwZyiF6wzA1",
  "key17": "51rWYoNsncx5GEARnsqodkgNue2Y4S9jBHkXHeXunxpx1UYUKK5eaYcdxmtZjPLbbX5uG5wyygMgVPuZBfuAdzBc",
  "key18": "4VwT124yooXyrLvBPUZVDAYXp5MPYtFke4TQ2piL2M3bxUvHp3UbeQuYGiCy4jq7fhxuFKXpbuZMjumsCqT1hmuw",
  "key19": "WY9uw3ZexFPv7sEg3j7uXZtyeU1wQRK1X4ecAGk4CNugZZ7DCP638RJbtkondAiXdcXueFb24eXy2rmYi7P2b6o",
  "key20": "4mc6j7kSCcJAcitFgzVK39QZzeXbnoR8jxdPu2boQzieypBYJJxsQu8JRvdnCcUR8yk7kQWPqHWx1WbzJGB4PU18",
  "key21": "5g14T5A6WHabVfvt2sFSCXwwusWo5bzJvysP3pN3Ad8DEjb6pPnJf1KEcMdTLG4kLbn13HUTgUZqBBPeNth6KbhU",
  "key22": "2fmY5CuXZBBhF13it5nycyvXjHFKRfDPByqbZKLsMy8LRwuDAQbvSp2aDKGFt3M573byqQuV7VYtmC1kbrcNWrTa",
  "key23": "5hBxtdqT58m4vZX93KdWdMqi2qVkgiGTm8bEFR9VwdmUFUuDLzpgQBaGd1f6jY8TN6zRwDBZwfJBFJuVfyqwsvtu",
  "key24": "3mhoR26HS19x8bhyay1rynbu7rjTdTepDJP5Bi7R9nPZwX9HX6uRvhPm71UGaGQT6JXyZmhnyhXd9A4dbo9KJha6",
  "key25": "i5z4TVojiod8GeQAVAL8SLJhCTmBqPozByBq65WJuB2jU6rVRp1NbW9bT51smDiiJ3nR4iiyLsJ7qDRLH3YK72J",
  "key26": "2KQq5dmVe4VaQAf9DbzVmaAEUs9sbHqYHqCYoK9VqnKZPZNrF2jKdMeVcghji986PKW9Z8ANSX8ZTTG1hxD17a3D",
  "key27": "5qrh3k7GMn3f2ZqNaRnw1BDrf8wQ1UcVgKA7YaGnsu5BLErNtTeX1Dy6u9K3GoSdsZozcH4SE8TPdHzurchhzrBQ",
  "key28": "3RFEcr16ZVKzme8rpTFmYyHWfEWTzpo6nTAHHAjBmXgQFJsbspCkdw2rb5W4e37t8EDuQ5VhiFuPcemZobpgwqJe",
  "key29": "3BBcmKUxH7VE14STuSniXXabb8dgc516NqNFDiKT2SZhbkAwZ3dDJq4JmTFDzKiTFhnzJb2EB9QabZGJGgCbJ1j9",
  "key30": "34KbtgKB1AbLpZ5nHCvE1egcz1VYSh8d2Hjajy7mQXpooXwmJ4Q91UP7AtMxc1e6K1p7RHp9mCh9dwnotGagvnHm",
  "key31": "5iToKbwWcyQcjVFiWMGp8a9dovMfk6iynZjb1Xapudmwf4fc6Qq8Z1MKxQw6p5vhX52hGkE7q3BoxDikKZqucJEf",
  "key32": "3oxVhadD1jtYMt8b2YZiJQHjuxnweZ6AgAbmmqYUx3FTbyVxfSCZGig6AHR4wPof7XFYyVoFju58D8L1XCMCd6SR",
  "key33": "xdnqo5qHZJx4APkwEJ2H7RmJ2zDAf3YoCXJihqvqSdxBEVwzjye2yyoeeHwiz3w3MhBVjteQdpbBPMMExCApMSb",
  "key34": "4mkkzaT522eW1PZSxUpVVathWXRpbDiQKgKMVdkh2SUDZ1rUxsJiS6ZKW2kgomZZ9dNUypcmoqwKpTrfXZsUJovQ",
  "key35": "KMGev9gJtCxQjSx63TkkhXCqWU8HP1w46YKBPFycD7jDARPnkwWaHtTFxs5xCLP3o7VSPrR6ceYJRcLKtgvvMYM",
  "key36": "n2NTrLQo5achmAiJX4nE6geVMpVPaGRk7NnP3GGuejkpmy3Nto9BeYFBtZ7iAJTwb7AgbmuqhurEmcx778iefMQ"
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
