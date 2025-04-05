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
    "41fqqtQgtTwzrzHs3qNH6g4ARQESvhWw7wGBpACpRgpN8otPeLGKcdPLTuRpicPf9gyMynfP7132tAqgu2BJMB6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWwAn698nRAQ28wkxosQLw8Y8u2ZXaDA4srJPEE6b25iQLNwWgoeJVVHZAQUZ3HJLeUrTTYLajZ1u2op3SoqVNx",
  "key1": "4G8VAoSmixugXN9RFF1uxEddexBrtcGCwG3euHowq5jXAqnez25MJXYMJV5Lm4iKixhfY4y6Fys4GVS11DeKGuPy",
  "key2": "EjDJXR5B4HBmHZxsG2XhzcqomKpph8sJCv5X57Ya6tAkCWWigk1bdWNZSCQuNV65ufnrhViwvpDge84pmM81uvc",
  "key3": "45Lt8XVK5AFz8V4E8ERWyduSPwa9FHjzDUKfyrF4un7UKmyaeSAetrZJ8Mic1HkZZhX9K5eekxuB6fXj2UGotHCa",
  "key4": "2YiBztd7u6NcMu3tXPShd6EV9hnhR1ejHtmwpTrfoa9caWkqrsZHGcEm7JctDG9tiAakW4HjS7oBSEtWEnFX8rUr",
  "key5": "4EgWhuVidq9i53Yy5NLWLvJ4AcnJDJcoizVafneKU4Ds9CEnQsGj6eKjX92hwhULvfAGYavQAsB8DjhcqbH9NhUE",
  "key6": "4g7RP8QidfgHhdWxSxQBXd8vAvStMHJM2agrcXwhYsHrASAnQFqmQpz4N6wFiingeykVC2vn6EiQqtyhn6gRb1gD",
  "key7": "rr5bj15r5HPwj5fczJESQmmqW3sfLBov7vyHZUydSdbdCSYWZ3KJqDB7eL9CPcWPLqkfRgPsrXNgfueX67DUtXL",
  "key8": "5i9ZNLTk7ajSPsWMuST5KCxmkgXZ3nqmkavM5GSbbvfTcomEZ7SJX7U5EhLpFb18nkbfbzdtiNyUuW9vjpU1Tj9E",
  "key9": "moGKdmV4cqQeP1TCXf8tTB34bFAgnsthufXJK8LbXfryAa6aK3qrBBFnjDJv22YAQKN5vLuJ7EEpHsteYo61tEW",
  "key10": "2Wkp35e4oUqu7p9VKXB5TW7QNXsKmmXDspTEVF61H8TU5vEeMTktTE3R3phzzWDUhJPsebueFfgnJdMKfiPSc2z1",
  "key11": "4pNiVQDbiST88VMzBU7sx5QocdL1SpjotpgmZi1gvg1am1K42wMVKRtQyNz6WX5cYrVQ6zbnDZtYn7UYaYMjEVja",
  "key12": "2bCq8KUcdpUcJNq6nvMPf5YysomRrUGDJ4TsJBuMDiGphW7ChvxCCUA7Q7pX4hia4ugB6o379B4Ny2MuaZTrJkaM",
  "key13": "4aJsT5omWkrpGkzCou8Cyttg3H1sGXdh7fXnGVqbMj2XJKZ4gKYdYBccee7sBMSyUHYX7cLbnc6dGgy4EFzSGmJW",
  "key14": "5iSmegwFMNAe7VGbc8qzd8TX2kHMFs6CkG9vPCMdKWb21GvCfd2qWm7GVz5jTktGyoc3xKPUU2fw4Gowq6N9bxy9",
  "key15": "2FkCdFYMeayuRbncWrDAanfL2a4LZt1VS9jo2DrfnkQmj8MHNBBLMByjq9TPhUAhwuLQT35zV1dGTYjyKYXFt4ZZ",
  "key16": "34MisQaCfKznqv6SUZ23S3NU6TqdKu2ZiKjZdRRpLrXHasqjUspgS52nRb2FM8Zg5emMESANuWPRhEnnJ3YFTQQa",
  "key17": "3aS89vJiLDW8pnQsxUHTYmg2tJshU6nHGh1yrYPPWHjLBZi3WsoE8sptXUDTTbidDNmxMw3To9K3WU2cSNW3z4uu",
  "key18": "2gs5yivXN4yxmp3GtBaWTYZKm56ofEtT4eR3kr4ASe7m8EPRhcr2yfsJyVnPFZyBf6Qw2bJp5PKYxztwCjVGshDh",
  "key19": "5sPhUThf5FB6z1MHc74GeCp31ViJYPJmcFwJ88H2zV8Nsk9Yyw9KA46q9k3tEYXi26F64zNsATsv32FkjtYMak3V",
  "key20": "uK3HWvuVXQhfEsDtkie5RHm5AZCCMbnHmNQFxBP9Nse7V2mpV3wnrzJr1ASWERJUZ9qo3HmhWvzWczq2xWn6to4",
  "key21": "4GTDEJCR61J56v9Y7E73J1YuCVrr5FMBHBZbJJs5hA85y2tTjSCyZjrhpDXJF8y27tesixcSRc1W56bowf51Ywwh",
  "key22": "4feMDU2pdbSgk4HktwZJPs8g6anw9S5U76XtUnXEQhc7cGQNrGvExM9MQBfjBA7wsGRZgM6zJwMjebY8GFz4HWBU",
  "key23": "3d7Co4a3uQXuTiDGowqX5MZ1THBf91MQqEmjjBxDZ3mP7x7odqUWeFDW6wHkj2SkiQLKWtAt39nefJefiHqRhUer",
  "key24": "4LsM45WUJYkJ9drBjmTzWYy35Ztm4wH6e7Q8LaDZDPUix3TgUiSDhUnpyEyEdY8PqtCu54Mtb6hxbDQgJsD4oLQG",
  "key25": "RCbtYofSo9U9M3KW439ic9aActJRrjr2giYRRZJuCFL6LUqT8s6t8G15TNvv4X1W7BPBqjmPsUyBYSwsEEFoMwT",
  "key26": "5vr52V62iY13UZxJ4UWPZ6Yhib8buan8DeBUAAVW23w4TFE93FMjgsE1qdKTZMjTQT54jCi1xYhkXgKA9CsnVGjL",
  "key27": "3N1qJJbqVhougHuY4tKfuja6YFkg45ad29XFdPoM2W9gPLFKXu9hJnDWvAPzcSXxhdmwaJarAgUmRbbhCkMq9EMR",
  "key28": "5f7FFNtYU7et5XQRKtUMXkmTQorrXpaqVyWzfayMw7jkJVvCeXpg26DXe4cqfou8jcJCwoc2grtqkifPkj5ZFLxh",
  "key29": "3yQkS7Nep52n7osew1M5xsydAcQTBfbH5UoAhJUF91QuhJrWE12LLMricC2PJnQEsivECK4ZDcnJhJgQqZnNs9oR",
  "key30": "mdH6a7NvsU3DQqQKBBiKKmvY1GT7QBQB1PjNSjiQSovG91QvUpaLoKH5mGJKFZEuqv67U1Zn2zp7xaY3kU9cd2U",
  "key31": "25WVeS4FeAjAQJ2gxBnJBY1SdNjoYxgEt6kRAsyjWk6X126qhx2MMi5jFvdwdkiKpKrLM5Ws8uWSkuWbQj5hZ5H8",
  "key32": "5EZo4B5GMH1r7SPRuTbZdbBNYxWEECWEaTao3CbiuaTgXW5gTKAj8PmVQG4Bf8V6v58MLG2KCqVM4v4zgzVxpkzn",
  "key33": "63THQMUhXTykYkmdMvNoWdNEUH9pF38qAZXARe2fe1CbF1sbLQGgpubPtrVDymbEjEi38YXQyt5H4CWdBXKGqqbi"
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
