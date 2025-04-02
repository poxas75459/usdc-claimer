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
    "5Zd8ag7QgpMGuHbQYyop3ReEwTkxR8dWRRWfBLgnfiKgmyQxiFuBh1AB8XVNKvVtLgkVWyyo7PsvZiikx3Ec4dNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ew6h3ymvymRMiJ5NKsnam6jyeZkZenD24CTH4Lih9rwzo5epAvsbdnJ147jvxM5sR3EqrBX8jsoxdXM1fWKnCBw",
  "key1": "4iS3ytthdJyqaUuj2vSjuezLPX5533275gkmJZmVf4rcNBaNzjM5viAGVCh72sAAG2RvHGutyzN579mhC3nftHdg",
  "key2": "28wLes67DF5iUgP4GhHE8Edu5QjG94y2xwA5ZiPEbvF6S9VSutWyM7HikC4GKv1ti4ui4RaFzafdABThyGTeXcRs",
  "key3": "4gvXjw12i6VAUhLkiQCJqSgPaWnQVAMJpNMcc7pvHCoT3fbosSWJH7ABJfnisMJQTZMDvACMNypXLAikGgTN4rDg",
  "key4": "5p2CLTSNdYta7JkYe3pCSoMkbBE7PQWJ6R6ZGuqL1F2FNhvx1Hc3iTUPr1Kjm4vCbsfnRTLQU2XywJ3YexPqG7Xa",
  "key5": "4GVQ2NNVgxBuzYCak7VK3Cn1bXcN3qPZu5JPPbXtYNTQRmb9Z3fQ3HSyhhFTiSUTceHLCvBQYBiWHwQcD95symVW",
  "key6": "5r7YGQoaPcAs33vRu1aETk7qhNn3vmKgYrerKe6zGz372GfXN2hSmEKCvvX46ww9X9zvsZuchZRNxqvYdMNa3Yq4",
  "key7": "4L5yR6xDji6wPg3RM7dJohQeoGKwpCY9sCLPahqZfXsjMAy4L1KHxamLxBCBuYJkTEfrk6d337kfgEhCNJbtPaUq",
  "key8": "5QhANUahZsoub6By3zZo4N1MG2US5UZaXWnEm9mRBGLbod2Lfx5pQCmniemNMJAU465G8VJ2VwzbMHVzDaxgeLtD",
  "key9": "2YRrHRD8zZtbbqerChFD4oe1yp25Wyz4vmZfxYXRewGKyR5cfQyY9Z86WAeBahLS6maom3SEatvNGo27Q7eibXKU",
  "key10": "Pg4YgHRSgfnd9mS1qMMHg37x2L2yZukdXVrXBgESLQxVm8C68aAZZD4RZ9T1TeEirbnrQ483qwr2Y1zXfmKvFsa",
  "key11": "5rT82zg8eJxd4Po4tvgEv5xsgzFd4Z4X9T9Sj4utgBqX8fNiAnQebArbkP4rL8n7ushR7Ta4fN4JdD5WtVuAQnBc",
  "key12": "4rQHj25jmVbgJCL2hWsKqVM9ufUgqdbS8WqtNUHbktRDy3iP7tbixMvA1hNmuVHFmZEKxhiUDtKkGFiLDitoffAX",
  "key13": "26ho6GwbHULBq4bv93vhS1Fec1CfX5799YXZmKChVzQSg9KvCkDgBjGAjPU1HsYJTBRYnJNtZFdpLvFPNKVdhmcb",
  "key14": "65eARfWw2iEE8gydLvsSLo9idLWDgn9SW9mPnyc43ZgATSmESNSTfeyjJMEF6bw4mZ8P15rHNPGRi3p9bpffrtEQ",
  "key15": "jipuGaSeD3obgJP4QvoZZ8YBSbpTjegPSwVLqG312yZJz2icZMWgk7uYJfbbq8Hj1xHkkcDDGanmBpZfKs3s9wb",
  "key16": "3PWD6SHXFEqK4PgNpfCmHFyvDQGkgdb3Tq1QUhnfJtRBapJWDPq95jzGSBfDvTuZKYGuivU4Wk2BfKnqUYRyWVum",
  "key17": "5HNuoyNYAPE5SLDuoZxvZs1kRkMRP5uwjazQFGPGpv3N76f3SS21SvV3Dt7s7vipMNeQLkvSMKaktvayqVVZb76Z",
  "key18": "3Bb2aKbzvLWoWGP2jDTAJJsf2KFQo5B9gyPqAwQb1viUB6ckeion18hiq3xak4jAWkWKLFnis3R29ss3X1zMZEaV",
  "key19": "5QibagGt299xz3ssyFEA4vyKYExAuXv6B6zQUXTyhJCgoL85Yd8UmbcAdcfSUdqp2SdBzusXA74BhrEtuGAW92fE",
  "key20": "3CSciAJcYQKhuA9ssySYfq2TFt54QCQ7t5NsiX8faoMyLzFeKZLFqWJvG5itWFHQAyTqyJk3Cfq5XcBAvv8ZHEz8",
  "key21": "2smdyGMrH122oAsYGarCZYceXNbr4gyptVMkfX5L5F7pHQmjwsa3pAux2WegSuHvRQapK4EwLTcDedPvtimW9GYB",
  "key22": "5KyWWfMZkHesSxSmLqmq7GvzhpxpHSHU2qqxJJTtetD4vWwCdFVvCkQPy48U1XGHH3GJjD3p7dAHdeC9L82Bwd5g",
  "key23": "66aF7n3qooVioKL7LDifbAYxpJ7qRQbyKXmzXEkXuGamuQNR6RoR8iXz2DiVryaEomuYRuGKhYDsc6VzWB2WR1CG",
  "key24": "4TzvQKQYJprZ5jR95vDYefqnFZfHWbnk9ddaNwV4WpNZYps4wnBF2QYHHS7CjaRM74RuCmjro1cXG8LctxLFEgCQ",
  "key25": "3mhDWcXUFVyMrP7moXmoA4ZNWQPi4XL7Vxowo7CGKjV4acqccZ1yvLR16gQtZHNYALtCwCF51omEkv7mABVvLKUU",
  "key26": "4BPPSmH9uCpC75PYgAkMkrt3SbDcsTghEg4i1VGNemmNFYjMDdjeYTL6ESmTYuwe2q51YCA6ZZGH7ZSA5fEz7QNx",
  "key27": "5jwdMwhFfsN7oGapK534ANskhikumqFUoZNZ2CP65sW6RrxUrqhAfgEsrSxQSErYeFGtQvGegb5yua5WPvyAMDQw",
  "key28": "gmF7z1C9rx2AqcbnCQSQZmhtkrTjGMmp1vgS9wfDP2gBW2pAm32VKAUPqKo2Y4dvuwPwZAaY9jjFUeFCcUu6SSH",
  "key29": "5R5X4NPeV3Q3t6kdsWAYoLrLbdvsSko4KzCQtYWJ9ARs9Sz4AquH6QfDJwaiGDgv2KxKdEjjKUFKzbUsX9zDdGJC"
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
