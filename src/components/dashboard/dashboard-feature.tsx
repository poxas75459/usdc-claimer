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
    "LvXuUrSZp6NYFnof59U4MwC7QvgjQR5yHiefqHkmAFRNn8KfVLp9ZRMVY2s1KCvDsAz32yThGJWua8CJeic6MK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Np77oh227F762pM45d7X4ZWBjZuf5MvU2KsZE6YfWG4YSzLqTkLqBr1nbfuYzRxnCsxjG6guWNvBYrJfiPuiQJ7",
  "key1": "62c5DPbbem3Cfnehh3kv16xFFkZY8NLmSoZJpbjxxb3vRjXsQWhznQagLdxRUPsbWXj4TUA2UBpJ5Z58uDidJhHs",
  "key2": "qDFX9tJuxtY9P7zAjdyZJmx6UkTuqRs5EYHRo4y2tGHkx6tHWJVCxCfBfrvC1zT1qJxiFNZ7DMpvwg75Za8BzUh",
  "key3": "5pdQDfUjhm56KF28kBkDc2W8YiKuoasypKchEwRet5hemZfc4RwL4Hn9wM4hKn9143gUHq4CHzy8H5uGiFStuHui",
  "key4": "5qdgUi1C6fn6ipd3k5Ud5EEhj3JafF4gw5CECc4Ai6TwZjXwa87csmuF1jXXZNJJoTNGbK1L8KtMdrpsvoZsNp6a",
  "key5": "5U3Y59hjhvoejbPS6a6t8fiDA9LLxN83robfiHLBBxXVPnA4ybYBDVtW4bFpY5kmXcbFFBnFKjyjpR6UvsUo7tYr",
  "key6": "3jKcEMZR3L2AcaEnKJ8taBEBePDKcNks5Pa5Y2sxVJeoUniTcDdQDMNK47Mq9fjpUG8Nvtd6qqPk1NEMvXtZvfgD",
  "key7": "5cgqK71BCpKbo4YsTSbretsxGbjL9cTJWPSArLL5Sa8M9pjyHzznWAW2qTP1Wk6rkDn2FJmGBn3euzwpWt9o71re",
  "key8": "2xuP6YBYJGYHHkRN9WMfsdeh9QRx3H2YYJpuWuS2hy3TKqktubJLQ9w11JbKDGTkuREFHAPzyZ9wBVxLGVMR6s7",
  "key9": "KMGRPQ1gT3wDwNBUhgbVAjmvav7PRZiwGzD76pDs1AdmyqHHUivxDRtKy2iBRXpNJQJjN4dWoADWu1SRRBGnLco",
  "key10": "2W5q3CLaB9ZAep3QShWrnppTjucLCAbeTeR2tfPmpMPVcWCQEffGojkffVfhKXm1uMC4ARuFURJf2Rqvq9JZGqFj",
  "key11": "3VJdDN9v5JRjTQpReXg92Cxksic6sxVWuFyxrvHqedTytQAMYVwqEaqFKZmBtWY2gtvqPBwbhSELTDDriMPC7hHk",
  "key12": "5pdmuBFqSw1N8VzepzwwfjQwmunp6Ae99KH6M7NmZ4Bho634iHKUexn26wBsTssD6nuoL3Z7Wj4DtFNY2Dhmjdd3",
  "key13": "2bHNycXWYkPszfMrG8Rk9vvpNbi2dEVHTNYdN2S99MbQ5wB8gkqpxhLHkHUpCZkSmHQqBoU1u2xntbcsGCBcxyq8",
  "key14": "4v3JdLBv5yfcZ9ExpQatRvd8bYBT8ytqw4V5VSUnquvpY4k4K5FweuYvAWD99WTEJ92jzz4my9v1MbFnFBLQ7cGy",
  "key15": "43X6YcVRVq5hiyzbNgP9obezHHC6qh9eBhDgtdyPMXTdfiUU3hWbUSMtY2jqB4PYeBasi7M6GLBS6fnjnafcYvu1",
  "key16": "USehFY8rYixNozstyuQZut8F54RscyGJYkBouLe5LQcFWjKjcU4fFAb8pjGzrHTDaRzRa8HTDSU6NiD96CeGKGP",
  "key17": "5KytUMp8jueNMXQQXrwhdS97w3TbHrEcCALGjtgfy1TckCmff9JRk59aZsNZiV8NiKNy6hoETZAhBrcSVrkaitxe",
  "key18": "54J2E5vc9T6v7GgrgZTEMB6u8hZQcjoXzYsAUgoJAoN9i3dozAFWnips5BQDBa2sWyL4ZPGjyxaZJQAKxV7rkt9f",
  "key19": "4QtoCMbkEDHaroKHuBwPav4b64HFgNPg4yiemHejPXCoTTY9A64KQRZfwDqYmrV89bycCcn4uEoT3z6RVuJEPWf4",
  "key20": "375Ww8nvs4D7fddGbPQqtdKhXEivGm43LEJkFnydFTaVXkvyf8mcmrjK2pv8z4zDTSKsCHS4oFnTirJ3ntGgF8Nx",
  "key21": "4148sXS3i9Q6DneKwfAQ32dtHTwf3ycycpBUCLSFuJaykaayCBT7uErNpMUyxJyJsgeYrUMcisVCieUwNSTsLiba",
  "key22": "3Cm3eG2UiK6qZaT2qhtQSbYLbdVLkC1uQRakPQLWQYvn19CmRRcCsEgDdxkggrZtAEGuJRoH62sG14v17v1J2cLy",
  "key23": "3UkJCzxdwmdy8yB6vroUDF2FnYJ2uyKuDmUYN3KiP367oFVwHD59BvHhFZQ1Q9NBTcLFvg1X3siXK3XByTCqbuXg",
  "key24": "5dUzXmtXPiV9tiDa2vbd1bxGe1WUMN99w2z7CHbBCQg4ZjVTd5aD1xkH7kHnQTWWMVikTKzowTJdio8p2YGYTAaF",
  "key25": "5NBv7k3AVpZzfe2jWhNvxuLB4koDvvD5SQNhNfJFwdTUGKvJRPQM7BNfbgvjtMuYiAoePxiFSHYuAxyWNbQfonxo",
  "key26": "3cvNpp6JWKzBQFUiXEupfxCoWwxNyJCmgLA3ExDeD376PErf9dS64ZvxSbRU1ujdPmAwKrB6iaZKa7gKwqSKs3gu",
  "key27": "3Q2SPnDqZcUB45mtnythD2QD6gQ5gKEiUmnaZrJxxiZTkDV5uhkAaPke63dUjsR2kmTX4ckmVs2FT51yVv11iqV8",
  "key28": "2Pz1BZPhee1AYAWXC1U6Lzyhd5a95m1vhbyJBrbPMCwEBqUCCqzgeZrdgNM4EpYT18t1wmmzx71CjvcwhLk4Vt8G",
  "key29": "2HqJuh8W5scUjjBkao4LMm1yGNZmov5jSM7RErzvYVJAeV2P8xWUBM7KnNbTFW4XWrs3wv3fT2HmpiHZ4XH8xsQV",
  "key30": "2Xo2sgUPJRXyK1AGd3iT5NfL88xxuxQvK9pE7k4Ho1WjWpKFNMjdDWJirV3WaMkR81SXanAVJJAG2UJCkENpNNq"
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
