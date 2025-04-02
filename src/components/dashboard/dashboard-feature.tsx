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
    "5HUyG8UWurRXLrdJK3QdNxAm8mUUowkkGMdZ14tvUDSeh6SDTVVRVx8H3dLZV1jmkNAWpcf6iLBYcSch5127QHRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MUdCsqbrxfDXbyDgq8iCSu2LajSzyVgy1RnhLDrKsLKWXeNByCMZDhVVc9ka8CoQyqABSNDKRJyTysx6xHZiwDL",
  "key1": "1eUMCC1GBoyio2RLAzZMh9uHNUXiMAPx2AbtcUvb2zikVLgZ5i5mJUAHksx5w83o6E4sjfRrooD8Wbg8n5S5bUp",
  "key2": "5wEuzfHqk17EkuiXN1oERRY57vXbWcCwwWtJ7yUfU3xB8haLKPL4QPP2gZRUXT9FhE2LKeDnAqwSQPKpKKuyLTpt",
  "key3": "4r6JUxp7gBBzVLTNY7iqQicYtW18CvRyZkM5bVUoAVAjxn2qZNnXGwEwjRUxJ2a5FUrQiaEKzSa1PZ7qKtCDRdPY",
  "key4": "BozEDq1ribjox7QSpXCs6RAHEWKi77J2moPxWSZsiDL1svRcA7KLoeEHk3cDDaPKU5JFhRo1bQyHJ4SQcyFjdbH",
  "key5": "3L8JfuRQVACiNxoay3E4YTYTbjXdhh9pdKZz1TcdqcAuCnzwcH1DrgqSbUexUYbXyotWgGKpnHHxfVLTjdqYgzhc",
  "key6": "312UQ5tuSFEm8Q8DJjWtr8qwPLXStoVk7QXUvnZ9V7JUxq38MPrQzbp4YmdGT8BtSG6MmuzWCqia6HeXHVAjLSyQ",
  "key7": "BMBL45rYRuPtNV5LNyQ5Rmm8WJwjsmZzuh8cpRcQ3Vg7n9cA2eKJJtfrHpjoQyJggN4akYg3n3eDwCbneviuQz1",
  "key8": "54Wi2cTLMFiEc65NpespCVJwsi1LHgXe9V2CELX8dhhzA9YDR3rrtB621KTvPqzBJukFW84LkBLsaD8TFD5YCYTE",
  "key9": "4Z9Mpdh3wQHjHig1ZefdvWDknpBgyxDx9KW4SDUbZNLDw2cC8LVat58nojDkvcxWqWBVixgmiBDvUXfgBh39be5r",
  "key10": "5cQLQ9RGBCwTBPgCUEuFqHEXdfcvjERP8yEKkvsmQuhMX99BqXtCZGgi54rHFZkSr4bmPamTBgYJfedF5HeFHdEF",
  "key11": "4D4Kdm5YXK9nsGKDxiKZGDTw6vv4pCFqkuug6gZRrTfv1tyg1dezTuZ1zE7rKgDgFbKpbfRu2sV8MXvnepjLnj9Y",
  "key12": "28TXXRQeguL3WMuN6MSbgcNC9m4KqVVrf62KKXSK64eQgHSAJ6gfA5gs6K63GtLTxupq8JMDnpN25aFaABvi2Aud",
  "key13": "4piqv7P6mSfaHZND2CYTKWUcUbASp9V9pXm9uutDyS8ZnFNGBy9ihKvdfxrA2svYD3iRSycTijCNyxgYxmEL41A4",
  "key14": "5wr19smq9P1YpPRAiw8psJCoor6VyQf3zxfX3Kgvjr1x7Xsu7tRvi4R3FrWM16yLLssAKAvMfYWya9qTrFEJMNMo",
  "key15": "3r9dmZDMkfpRb18yqpYsmfhz4poLCaDHqY1jcb5w9DW6vfmNGQ4wfXnkZ9Pub5indxQy6g71V3PiMawdTHNtFtz3",
  "key16": "5vZbkLDgfYrJZZuURRSEwQZUBFPjR7oqkBmCBxpt6Dw5UbZ1QXjiuyxxfAZNHCJtk7175Qkz7D5BcsMNkBHdVe8k",
  "key17": "5Ut5pkEQonTovbozy4vGivet541UcqAQUp6VfsAxwoquSY642eoVA3HG8x3NHBMXZ85XT3QkWPo2kS64rNmN2U1Q",
  "key18": "5XPauEq9pVNu8XSmGmt6WDhQFPZzXa3Jc9pL48XZtQ6hRBC9Aoavynw789U2E3U896GqQv8rnAdYbwYu3m6vi83e",
  "key19": "43EWPgmfoGMvzYTLWdTEQQepyseYNCKstqAnzyUvHvEZSHwA5xqikTCmtQPLMRDNQc9tjbTVFWuTQjZMLHNanwX6",
  "key20": "2yW1ojFFiy9afJ7ToSoHgwnLYmewiZEZXUyzSV9tugZuHPJH32VT4iGZCgtGawYiKUjUH8DwiGmmH2wn65Zpgcai",
  "key21": "5FCGeqE8thgDvk5ro3Q3jyJ17JGUvFnCoNSrSLGKCLw9ZUNZFkPwdp5iHrTH3ZfDzEZBNJ89C9HohAdVAcuqhzfS",
  "key22": "52B79Wh95H1jt5kAUx2puCBvj94jQzmFJwA8KL33WSe8j5tKYggkPePmEN7yH1iyQsmQouY2JuuwU3hwtbD7GESS",
  "key23": "4bWyDqefWPvGtyqeUrTbdzpULAHhyg4mXzhtcHx6ScEjx7ZjbFXMP97e5a1mk4SQGPrmdqY1xVmmPoU3KGmt6CKR",
  "key24": "txhdGZ7G7hBB4SrVfmQXC1mKxXizeyFrrZDMXxhmecMvJyucRUAEQQdnWcfuciPSzNuMzKuTVtFWiECVtpkUewE"
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
