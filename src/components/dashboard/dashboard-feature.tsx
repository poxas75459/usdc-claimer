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
    "5XMhTmyXjbBUJYcyyFLEmCtqvcEhrUnzyxzGKbRMepmbYBcjx26FoAFQLfmZKjqFM7r7HQ9ZdazMbQHBEREh4FJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54C3wqox68HDucWMvNAntsUeygjHXBevjMufdhYZ9e4y6Y1mfxMHVah5Q8TY9acwDGsTbUUebcTkzzcZqjnENNnK",
  "key1": "2esucyUugNqGxTBzYXkzQfzAPVkLpzG7LqnecHRUVhhZEJzjRGn33s32fUvaftR3cS1UGVf1keWZneLeU2eBTDD4",
  "key2": "2FqgzFEvbkiHbJC92PMdYHGjPs7fpkcVXQh4RnB31xsG3pFQ4SG4nhK5aKiMCsL4wqVVaiDiraVgxwYq1cXjgvEu",
  "key3": "3M4dyU62QKGjfrtyopXgK37QHwVZJj7Hv4zBdqYg1KVeouHrLytVZkh8Zg4ohxeWk68vLJYZoB4qKMFgVsXtPk83",
  "key4": "9Y8iNHTi9oe4cDbmPaWBaCs5iZ4f3PKLq86MpeT4oDd9MpYNDQFpK64HDtCADsHHAWuZVpwneRQ1ggtgwqYkkQf",
  "key5": "3JFN2U79CosRGFtgvSJCqghiceuUijSWBPzcmkWwQDjqiKcN6aCa8VF8gzL8Pm6qiH1SZLm5cEbm9ij2FyQv5Cr1",
  "key6": "5jFxVYcXVqTDUf62mWvQvSiC2SfSCbzLN6JgXv5PZzmr8guw1hamchc1D5j31ZDP7VYDrWSt5eqXXTAgN9uAJR34",
  "key7": "SfDtPHNJDqf9JPAPQqKJzM4vFridoywA4osBcqJBZHyeMjCptiScFgdW2C6zZ95yyBrHt8VhKux9iDbGqP3qfzH",
  "key8": "2yS3Jq6hQbSX9JnwkpLkUwpAjJcLiZtwQh2QWjQTCxK7XWkqRGCwgi9i1uXsxsdRrh7A4wQY1VVPffondFZCuYtT",
  "key9": "2q2VdznjXD64eqNddDUdDxrXjYTvRS13519JiCgAevjagBqGGe8jFNz9iViKWYqFTJkspBASEWqhtWPSaZpEQPj8",
  "key10": "2upumxAYdjecESSohTDrubnrWC4X7Ga8oT5VSJKJD4yhK35gwHxch34YTqCpAsbZ4NCmYYhV3jNUMTnAS4zJXg3X",
  "key11": "63vgiN7jrHmGPgGeqFUhbpwgUMcV9d9g6viVMsYUN6dVqtHNUq8soF64WaZh9dJwCFT15RAKbuRD4MQ4GaTa5rhX",
  "key12": "4Td4rZmwQFDcueUBiRqTuKsZSBybq6kdyfFLxb1PRWdC3r2hUFR7XD7sZLb49172VnCBnMuGEuCFFJqgwSZtRJGV",
  "key13": "7hFuEcQeR3onLdqcWARTt4tmGkEX5rMJgD1HsJHgB7UhANFCNjBJUUwJ4eiqReVr5B7STBS1Q4F85vm6KgpY9rD",
  "key14": "2PXxB6BMU81cVbXtFzb1RfawoxuJ529y39nkzqfQBkpfV1GXLYJ253yV1sfnpKHXeXEEdaHrBvZVD9nr4ppArgGH",
  "key15": "3i1pYg1ZZVU4iEewymVTmAyXC3fSsYxadE2YK5gQuVRAYCc183DVh2GzfDWLaAK9tTVmZFj1Q8C9X9QJf2GMb1u7",
  "key16": "44n31Hx8vwbGS5C5pTbGR3xefTtRLFRk3AMLQsCHhTVyqUoqhtfeSvX1sdg3kN98CWmLLjTjav1KqJutSggpMSQX",
  "key17": "3xhVAsVyDRWCsQY5NqZh6tswXZ9vaXpjCLq2617jry6SExeeP67aV1MrCn2EYPfYxofDZB1NNYQoCEciDG1DRyWM",
  "key18": "3pCuXBcj4beizkMCS23bJQrqPDobVy6nXZ6wRm2xVynJ5JxywHnReC8TqJAAMbFV9E4Eq6EF93GXVAEzUXWBoKrc",
  "key19": "5CojTzvweUhoTnwe8LJhb8JAJNBJmiLiP7GMaC9YeVcPxmQRiT7MyyTcvMwxGTHAbdvFSnzypAT8eKStcUehdxdf",
  "key20": "3kQn5sPbWXooqQe34TLNMM9YM35YrSGYzAgMfUhpVpPu93ReWBrkPRU6ScykRb4iHe7WkqGE6TqMQjqt3bhQENP9",
  "key21": "4KRLC7sbDTcXwsmWVDmgVxUVd3PumCDX8Dt9F9UkSY9oyphfctr1enZKVX6dtbmzVxV8R5zsvHoEm8QhNJzb7f9z",
  "key22": "5Vr26GvSQC5RFsbmN65iHDYM3NgeQ6RwaQRdgNo8vm8KmVV7Gw7RYHhoKVqFg9KFS29vDC2FXfhvoRU1Nbni941V",
  "key23": "5S5BUTHwEzpFRF2QFr1Z2NA3fJeu9jVSEQepSGfwVkPWjaomz9S9QfqzfyH29dybZnvqcXLAV9LSuB8jKPjdPXcK",
  "key24": "3PLAxWcoXBMgRKZA3qGBAVreNixaL93yfG8LJYgELtdu7Zc1Zit5miTt5EPx6bmb2iJRUs6BoCZD9ozwQfm46f1i",
  "key25": "25XD5w5NcYbvaJN4QJ7RvtvZH964C4DxhRQTyWetqPABDk9LNqAjfDvffqDb37Th32qw8UbkraGc2FDXt2jP1sJU",
  "key26": "4mAVYVXtF92ZK1qe7QcHwadC26LBsw856izxTZC5AJvoxhdV7xYjoYwFkxkmBKnWtjpkPk4N5WM28BxCDEtdw9ZL",
  "key27": "3vyCh1eUgRAbMvJcYfMJ6Cv8Vaj6ZFq1XE4jE6wcQCoyTxjemz5HF87ieVz6N53GLEsy7zLhwhwGsSiqzWCCokDw",
  "key28": "3RaCCaSSkQNZSrfouMWWyqZQaxjms1etkQ357V9DZYqbaHZEU6HVy5ZDvBjqv96G7iYrqHMLQPQNjpNMLzWTvcBd",
  "key29": "2vBgyAnLLnBG7SeyrxfhSr78AXh7s4nJsey48ue92Dn1hsx6i6XaCENB8NUocZxrHzkz5rkDLtTNgCfXGMmbL18E",
  "key30": "okBAnxNr5Hyry1Ri6dq5S3WnBoCyZJbMtTTz48pzhnGKhsK7ieL1f1f1MxktMZR6kH8PZEpYAgDgnwxaQHkrfLr",
  "key31": "wKFbLNDSPpGoqmKX4ZrcKv3dGMRyKvKr3yHCqzTeiAR6vN9CakVskRQGfty7WqLhvrkJy7FmtGKjoPDFAiXwxGX",
  "key32": "4UDJaw6MWhMK57nquSNuXNeHTZPhv9hT6S7NBrHvadvRTSDwbnfYynx6FpeakENqiHtteKkYtLyt5zxXyzj15J1B",
  "key33": "2MmvUQMwd3GZp49w2kL8CSK1tcDaRQHL6dYjmbsncoHaesTJghT2KBCYdkrfCmjH6FEp1fBN7om6NpZzcbkY4kW1",
  "key34": "47uFzPYt1tfc4HoShGqZQ2JCPx19jkkbJbQthUDC1mVnB5buKKjk71eD1bnRfyghpWVvqTPHsRRJ316AArCrhq11",
  "key35": "5Vz8D6kjsqkbViHQgo74PB38LNhQ6ozQjbLDzE31zTW8yoEkoPeQYKsE9DjTHU8DrWtdX1PbJS5Neuoscuxb1vpo",
  "key36": "58PxWWiFrksHJVBhQ6DLKygpUMmJ8xCYqDFKbtML4NuPZGXdDeUqdaJADViTPnh3RdAczbUarx5DhGYdcW2KtqQk",
  "key37": "2EWfhqptLt8Ut7fQdbyx5JzBrgbuJ3TqmF7zGWHnsFchkQ5WbE9whksXRm59PFLPxGywQN2esM1LJgjZmhsTQDoh",
  "key38": "Yu38atvAeXW5zDp5Y5C5Yd99FK6S3vGtHtyhA2rUHMcDmm8L5TQtArn9VkHcfPZqJhefCTRh4MGDNmoLpVhEJCy",
  "key39": "4CXCjLQS812qFW4eW6TzkzuMoPJTrWi9tMUTNXuiL71SjMTJs6XembB9NvjE4bYipwP6eA8ZEtef9ktwh1Rn4avS",
  "key40": "3jHjQ3vHTi6Z7gLkX83ThexnyN8c6o14146du5LT8UtiLhrxv6kGHjv7ndfRuGf1GfZLstWcuDdHF4iHdZZvwB12",
  "key41": "5Ae2FdNGALqeY3LFjnaQPRDVuik1RgE7qbizEojj8d5YXfLhNXaMQdhuLyuVejaHYrxr2f7koT5wuKuHvB38ViAg",
  "key42": "2LXY3xnPvyZy8puXCwGUFeUKBBrgrAF6XKau8UUZVZaAaEeMzfBhRCg5g3BJGUkXqFDT57sLcj4STczTwVm6Fvdp",
  "key43": "2EPt2a3NrjH1gKrAMDn5PAaoH4woPBiMgesrMb8KGMQbGGeY3kw9jKZyTbFXQ3JjkKb1iSxPUr5LVyokXkhc7pwP",
  "key44": "DbXXkVVpAj5hXQgY3H5uybZ6VkyunsBXEJi5G4Xhg1itRXUrCeeJAMkZvTnukfdu9j3aAPK9TFnbWZQDfgm6J5Y",
  "key45": "21MW3wAEpM4Pxhhbh4xshDWSrFXKKMa7UNk5csF8BLJjvaH3ovdoeT2H8jF1YkdckHWKLtvvugofSiD3qXrEjP1G",
  "key46": "31A42hu6zYCRmsonaHyA8RpHVBcYoPiiyEbHaDdqEAkzYJec3ARRtLn3mLT2xQF3cZgSWH78evpPsqjnXGpPhXcf",
  "key47": "3NDAgETpEEYsRwMRAvyZ5ERyEzVXxw9QXXGR3sWFPmFpL77MLTSaXJGJgRUs8NJcogKWFeSoBDvwdk7DFZgJZd4g",
  "key48": "2LEsgqbxgoPWgSfLXF5Zkv3X327eiT7gbdoKdmAVRvTdPRtY1zZRtiLStWKn8izLiaezG35sbe2vkZrTQGZkP24s"
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
