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
    "fznbqVZ3HuZwVnqvWu8LinKYGvwU7o4JSVUhMfXMcfoMrvNkktoCt34Qk5KWqYPrqAh5DMcos1uvddMuvMwsT4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QFjtvxtHofryNj4ed7c7BFJxuwVRXG3doEjiju8jTZWD7xCXYptrMC5KzjR2eUemNiau4Lq8NparEpr2HLgnfuk",
  "key1": "4DByfoaZcJ2KC2QyDKMFVCpHzBJHYLstueatzQZXZVH8SvEfEos317Wo3hY9c3yLZTbjM8vnLeXvZVgfRPey3A1Y",
  "key2": "4ZWcXDVkN2PPDSr9uTUdx2DkUTP7dWtEzkUGFQEJFmszwr1EygiorM2VnEXycWxxYBKSbeip7zDERn6CsvCsuTA4",
  "key3": "2kykVn5XZ29imQUZUYUpphkctRwUp5U2ChV1EArZ36jqP5XM1RkkubmiiC4zcmQFHC9yvnovN11ehRxSbnZaeYKv",
  "key4": "5kPyZrBKftsBWWrgKYrssjcCpALzsXjpDffFPohYqDbf14jLMxxdesWdHowoSavELs8kBqJHRBpwGDDnWs41PvBd",
  "key5": "2yws69RHGPk7RuE32zckJrUw7jzJ8LHehFjRHfuJHjEX64KJeizhx6v8nrunofZjD6qLpUcZzjV6G9qCoiBNaQZ1",
  "key6": "3cadhsghq3r6hZWTzkfgwhYphjgLzYRABk3iUQ9QaPzszBJQy2fFeDGDmCqRVm3aEpEGrSYE8f9XrJ4J6jer5BYp",
  "key7": "3TK5PMrL6QjZScMFascTAdhsQUe2hSkDztJW16jg5TQEoVVgvAGhCsvpsYiXjm2FB2vKTjZrFd4FRA21aWXsPvmB",
  "key8": "2fzk4DP2SFwJGxxeUfdEWVHNUj47BcBfNDZY1KerNVyVwpVKcphg1fVhMcNBbAa7fCTphqcYRJRRhX43NDTo5BfD",
  "key9": "5Pu4KyWYbQP6nuS56uJ1WeSJ2Q1t5rKLt44zveXBmUt8YQadp1XLLVgJYois6nyDqAJfmQW4n8nSAyiZRjR5L9m8",
  "key10": "3drv3MGP6p54H5YdjAojPYbNgB2viwadm9MuUPXgzYGh1EyCuXZbZTJ6Y3ixwHVGpBiW5vvRSnD1RHzkQXtNzXzS",
  "key11": "5bbcWoGvokj4K5S2BoTRnwsG8MrMHPvA1Q4KuHyPnMdjMsmFjeYPWvARdvo6fgEUAPwD2T7M5GAmREqs2e4HPk8J",
  "key12": "4x45Nk6FV1C5tXEGEdb9g9hG7jUZ7anLUCAnJ2yjf4jLmMdhoZNYWCiYayVmRpuB5CqMM9hat7Vx5AbxNHHgzoVL",
  "key13": "4BZXU71pmsp2HCdAnmqS7EqNn3TbLc1qhJ2jjFDoGRRSBqka3ATUFiYdS6dERA7GiJaLrrqpetvHR1QrrqkYFeyu",
  "key14": "5cykwppJ8yJBzvzkdMNdbvqEx77LHmzUiNJ4Dgq8cxvQSS5G95ewpS7co7GPBjFGnSecfFDfLRQv8fNi9Fe1gY9k",
  "key15": "5znTBEz7pqUPpDpALX3i2b44xRUgJDVKhUGkBgN6SAhiBT8yyQN7g3bVtWknvPH3No9KgXiN6wSo5p9teDEvaJF1",
  "key16": "ok7CBqYsoDvXcf6HpswUqHCofw6zgz1MhgQGZSFuxU5jr5iPyZEpUec6cAFBoRjbGSBqRwGfiE7ViXcc6CK7eZN",
  "key17": "2yt2vB8rcFaCRENBo21UQTo7kSC5Yj5fn1My2Tj8NLFHXUicxyvj2zyLZHAamJcfrp2VcmoLiwy7ZPfkqfF1pq5Q",
  "key18": "3ww5fkHeeRMxnUuWniQ1Y8QA2ZcAfvyXc7tV5eh1MG1GjTNZhiGvMwaB4DZdbr9nYJHxE2th2RYghUDoaBAJoSFU",
  "key19": "49t5J9xJbckW6f8hVD3PA4HBNk1WV1GpBQfXmDFEkFvcJDUJ2Gn4j8mmEYKULifgpeUf7ZD6sMXZBMWQq1WpxLdb",
  "key20": "mtPUneQtMaZuZSFEa1qt6mUQ15mcB6e4NuQdh3CZmyXekEvij2fh5iwrs9Z88o5qXg57t58WXjDW4zLt4RbFwCp",
  "key21": "nLk3P54Zy1q8CKTSy9s3m86VWxGT4b8GwStnFgnKDTwSFhjU4ZTscziBad355f1Xaxa3KZByXABun9EibCggkEN",
  "key22": "3DQfkGjmoyWVaVVg5Aj651hhCJE3x5gNuzUPY8ALuRPkYnQq9wJWZZyZr2BNfF618TEhWtYMx8QR2ZHsNQRYt9UN",
  "key23": "p4eA5TC6tTptaJTwtpwnYG2ytewQPNt7hxe72weUN388AgYGNvJxWmGvshR4kvX52o4vS6suu4C2vimaxe26BXS",
  "key24": "5Di44gD6GmmxQokHeJqnCLPZ53PZwp5P33XSEKy7vsaaffhTLQZexEFKMqRRkEPSB7Jdew6XCCsqP63F5F5jsdsj",
  "key25": "4ptaB4Ys1ozZQjAXiciXfTG8jHEN8TA9m8R6pzQu1NNY4xKcV7N1LdPcna56MDLaVnSD2d2fEimqm1iex4dN9HPL",
  "key26": "29YKbRFJ2yyyEswBwJPKDWbKEMb7TczArdNp3z2puyKpWyuHtsmwtVcLjBocfXH3RXKUqht2bqqks4ZxZduKJqTH",
  "key27": "4GipxgJL4ViLPE1vVUtcFUWWFaHkzJWBxAoQL47RffH8STU1zRosUcYKfPcH9wD9A9pwvx5VNPDejiLfdffFXN27",
  "key28": "4T1wuTipdZfpKeXZiFXzyAyKskvake1NvtVWEB2qyBPjzJApV6ZSBgxUoAj87zZzbJzkkvWV4yos2MQp9WVDYYfQ",
  "key29": "3eNt7b4XZpLUjDTydjx7UgqhFmM6N5jXvrFrWxQad9aRuQJZx63QvR1xd8AUgfniB3jiPJW2hsnRG8xEJaTRnZGd",
  "key30": "4B3NV1MwVDocMfSzDf7aS3Uvv7za5WhnSvAbRuPBtXp1nHseUdbbdpST6vrwFCK757EoBbFWrGXt8PMzYVLfqjKn"
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
