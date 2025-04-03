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
    "33L2YYbu9QvUytbaJBCuSvaJwAXcSb5kon7EgcA5agRie6moysL2ZtZ51D5kFYADANef9b6DuprRaUZHa4qtdXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vrfURoe3NMzk35nkM1doZyLxnsbKjnUfimmDGgZsECxafhntotc8H4Pqk3u14s6gTDB6awpMMM1b6npsLqBi3e9",
  "key1": "bH7a4Cd51pL7oyDMEra9eMDt1iubumdXUakgy5YRA5QDZWYtrPMqKEBZw1UmZR44sXxgchxHDHJoyaZz42a7rzH",
  "key2": "e1sktbKnYAetz6SZGxyzFAzBom8mEnVGaBotcSq7BCmXmrpvFb8xsphFY2cF9TAYM6nn3oHgEQ3Tw3nsjKzRDsg",
  "key3": "5w5ZgGS2aDeRehYaCQQ1mMzCReNU2XnoVdyTnk61cqnCRBUZFPXsdQNKeBkJHUqQZcJsv7v9QaQKn3A8kwQvxoU4",
  "key4": "5bWzS3bQGq5Ynhn4XHgBcs1YVvvQLXSwWKDjTUHhVegdCjEUrScEGTfNYxjPLZAAKqRfPmgDY9ouKgU3k41j5dpw",
  "key5": "2Uxeq9NNqKrfHRJqSV2cHibd4KMev1TkGp9hKADw7gX58cxKuYrriTmTsdXRqmKUHQvg9rXFryeqtp9pbCaXPG1J",
  "key6": "3xmmg4Rrqi1UeBsJ26V6bLZMivCSBL7gTtXtXMaa6XQmn9nKJdZQXhQUp57pB5EauEsGQcejbmJhfaaPmgR1FKvg",
  "key7": "4QoTUcb2nxEL33NMcP8HZdFn9jsuy7sjHr1UeC9CPTtNPZWeU6abrPwH9vQyixEMFM2NHTaXWdRfZfrdiBwJpM27",
  "key8": "4RnD4NGWoJpdm2ZfJuU7TmeP7ixdbWNJHSB2TrHk2L6s5mdbNbk4nhWQ9k2PzDGsqZCCgxv17oF4UbmdxZp6thuj",
  "key9": "389iXrctAGMB65KgcwF38MAysG9pCzU8de6svqESWHyQtSaED6k1fmXjJ4RgAKfzTZWhhjNNkiB4skB8dUXxvcDz",
  "key10": "2Pzh4iAP9inZYG36RWjjgFaSZNj1YoYdYQ3iEvcmJUzk9A1j7FeggWDigT6yrxw99RgZ9NqcxqDAkwtU1MNCXGh",
  "key11": "2NQNADhejB46jhd9LcXepRHWXnMsNQyD1mVDrxtYVWY7AkXLrFn1uJSEoMpTayh9xYevsRSwZsqHoVt4SHbMkaKi",
  "key12": "2SJp5aWfDJ2WqoAPD22x9538Kh1FwHkAEjaJjUHaAYcH71q7zvBsSShu6YM7K3iUpYFLspkbWaNvspvih3HJ3bLF",
  "key13": "3Z3oUyjhcxYNmECCt6CcJ7VioYQgjY8WXisVhiZQ37Hmnk2DQNVFLBP6tcYaS3LSiF9VVRQVXwumoQjQbfHFVWMw",
  "key14": "5HYuZtqKhhJimKsJyrLCP6s471rEd5bYAqCstwDsmCR4GuwicxGvPcvHcrFPpU4Z9xtpbyGzDUwtVYHyogwVmWpF",
  "key15": "2RhVJrDXasRtJLM5ALpbaZax11i3TNYqDxg1xzZ2Qrc4m2RG35DY7E2uiRuVVFgrQeVQtfHsNn7Si4nCPvQ5bGma",
  "key16": "4BUZUodYYEWMRpsFEDdztdT99ncWnSUBswiVQ5FJxg1hquZ6vWRJdfiCeUL59uNr2PizgK9dKaRnvWYQPHFmDwHe",
  "key17": "5KrYtrGvsYPYV3aK3YwrbfQGBT5Vb9FrBdPqEiQaUwAeVGZSfBuCBcDPVWsnbqxjubQSsTLEcLivnued6MJzLjPp",
  "key18": "4XLa88xSqvC6Kd4ZSPf1ErxQzbrbCd6Ax83G8rkoAqTQdoPuCvDCiJfCgjzLAbfgDiGyBsXuj1rB5LTYSo8b4sWP",
  "key19": "5if17QQ3L28adKTSMkAf7g7GaMYLvTH9QcTPeReVN4vgWkV4swsMjxnyh9inQtzd88Y6ugNo1GDDiJCYRPZVD9NK",
  "key20": "EKafDCfrEiRAX1ocEEiC9UJ1RJBiasDRJnc735cQ3QtAPfhfpNRPQAhi5ZmyQUfDdxRWqUZhcq87ubJqmstXV7f",
  "key21": "376taZ7Yv7fryfQprj1EAngV9y51ZYpyd81vtvgiJMTsAH5q7Yw5Fptu6YLtFzp2LwGX1DE7ujd87x9bdGoNh6k",
  "key22": "1GBwGmWC7p7j28znezBVyjDBnxL8hzmFzxWvViGLemRig8KWpiFgyqUSN7jiCY3pQPMCEQk8WNDP5qKUSembD4A",
  "key23": "2jN27HKcS15YMfYPX8V6CpDdeHVm7QSHG1vA3MgQyXeS81F4uJT7XbrE5zYZHkWk2XQMfwdJoSVnfGGMbGftQHrD",
  "key24": "3ozhKkFF9R7kb25EvriNmBx8KdzMF4M9XsknmFNd5zK4Wj7rMKumYebZkV8gcRYQrF2D55W9coPYrRZV1AV27sQN",
  "key25": "4b42Nn6YNNnBURuqWSaycFJf4m5CU74AnUY1PazD5cWWMXxrZgb1GWSFAm37gJvQzG9Bsrsaqd6iJHvZvfVDuXrb",
  "key26": "5FbpFBgYHR1umqUDyvBB7UFPEPdD5jKASSFY8HHJ4S9YpKp8wGSwcUNahxLXcKaTjmWr9Kg76ksZ4Np2icPortuN"
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
