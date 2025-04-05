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
    "5rDjuuBH7AaDuP5veSiHvbUhZsPgjizthxG3ywEjH3WC9Xu6ddUMK9tAbiezpmGSqC4BWMXWFHu72fqPCsmreRvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LKofVeLUEufU7DL2PV6UazcZ4XWG2j9m6hEFuSobZR9H84GeDhmMAeR1QM1k7PmMP3P1V1KTArFM64FDrEW85g1",
  "key1": "5QNJLtHdUviiSo8uUjzeYpUK2jQxtp7povaBRuz8hzW5E8UKgWMTL91FeqnGyPwzA8f5pRYB7MAqGfQEy7AKLDAQ",
  "key2": "KWBM7EYycxfoKY6zesfxpBJhKRmL67hR9fVexkVwkmEdT7zr9NQauMYmpcAMDu81JF75FcoEFCopq2295SuWmm2",
  "key3": "2ZGmViEM5cFtqsvPXv9sFDh1QgsxcsZdCBJV7SrcKS7G4XcTjW7fMZGbBKub8eS45ChaomZsYsYsDnPQaSvA6NTj",
  "key4": "5oWRNkXfsGfRZ5MQjQfyxQtsbTYLHRrqGPapPrDh23wEF6yfo8XkjYbUikY4o6sBCgkWuBMdUJsAbh5muqxuVpQc",
  "key5": "4iUSxKePxZsHCSkFxhpQKzwDnM2GfeR1xJTpDXwWErsWT2gKVCvQhXrE8EDsyk6yhS2Y2SK3UxKba2AzZ3QETUwc",
  "key6": "R9Eukkq2BeW7AifHGcjUc5LMXHWJrdkjijjVtcTAij6evo5adGXzQr4okG6eSAcnn5otdUmGuTJiySaZEB6cWuD",
  "key7": "5QjSAeYQEfptF9ufxgxedBnGSqGXA4TbiSaYVR6aUfbRL2L7ezSfDmRjxn2U7GzQZgAmzEUdsmmjdRhdMazAfiJu",
  "key8": "5YWEaWbN563DVFpeSJrqrLSbJ4tnm91Uxw7bXpZCwccvXeFMovp4hSvjvhW8HV6gAyiFEX1EtDfvVDLB3tUsMVTK",
  "key9": "4e7oHHePa79J38UfCr6QpWi7sVboQyzW3Mi7mAj84jP1cThh5CwTfJBjKEnRfaUbSt5pLBmMMx28Q5ei6q7CFQiK",
  "key10": "5Thq8znz1e8fcfhmRZ72rxcGEcHHHUkPCz4LdKJ6rSjqff4gVRqJcgSPdxBRUSKoAiMMUJVpTcdWrYDUKGYrQzBW",
  "key11": "2Wj3Wkt5FzXUC4CQE5rhFx3484tTSramJ9s5THC7hjsNb2crFKUq1pCsbEH6Mm1WGni7B5P4q9TXGCLFRgyNEN9u",
  "key12": "52HeVjQbYssm7we9YHondMo3zfwcC48MBjDT762gSArf6MqjwUpR4c7eWxkYHFQMHoJyDbowMmqipTqoj1jcizuU",
  "key13": "5vAJfkHxgTUsXLznwsCCa5AbuSdGyxfEofwzf2KR9zrBHFiNR34j1f3b9CpWjg7kyifpsXxAW14rRb1H3NUX95Ca",
  "key14": "5Z1q8oPfBbfvJPZ34tBzmjNYgqoSS6opR1LRuupNTDWVWDX41KjPsSz9YAD28gAZLdxM95uyjh87sv72p8qcYSfr",
  "key15": "44KMWQHHYTp1zts9BVQp1BNsPPqoXP3wycKTv1as58bjfgVx2Ztv22xpw6Q6diN3uZUMVh5W1T1R6wtbKZS6gfcr",
  "key16": "3HKYcXSnsThKSkSExnx3DprTgHZ8tEKnmCt8mCzNUFNmb8qikXAmEr75syT6grTBmBJpJXcQNUfPsu3Ck52BoFra",
  "key17": "5z17yhA8TAPqGFVShJ9wLXW5JJDdKsSLuWidtDvpCZQXr31fm59VB2RPoNszH8zGkudFYHn3v9UnS8r5ixMTzRwx",
  "key18": "3g7VZRk1uaGEAKxjQF4GLjmbdueHTo3RVxsV9g8eXJREHjkXFK6bYobDX7x7A2vndpEt2FdRWMJ6i3ZPaRZigtsS",
  "key19": "WmaBxEq1LBJmmLLPrtvWiDXxE9BW3PvU313Y481NxDFAnSYsabtdUDLEUQfGutt8nm6yVfRqdq7NvdCr8MxLyWE",
  "key20": "3a7KMnaXSHeMEUGnU3HUBPqZ3FAHkxE9Kj1BxQP9XqMXacE5A1mCmshPQqkySjqwNHnQFUyrTYuRW48VpYzup1ES",
  "key21": "56KVZEfHH6wNdzEffoXqWum5EKwee7JzNzCsUDkaWgBzUQpNMAvS4KxibdjV464fauDzqjijnEzJaKvCj4AG93ZY",
  "key22": "4x7tX8bwRDR5iLbSVxNUUKrts5ibAk9iv9cKMMm1aQdcygyThcqr5Apz6PrShoGQeDbL3zy4GHZ6kpo3MyPKHXue",
  "key23": "63zwpGvUBJXWaAsimN9sS2gK4373qcF3EZSpTw1kbhYCRyQwnpRQXY4tPoiRep3zAptZggEyuR2ikT3QyzYA5QLM",
  "key24": "58HkKS7tepWQGPcpgpoY1qKjSYKe5ntkTZqhpR5DifxLWMNu5NMPzVr198ksy1pquG6Wym3zxcDVB5Ta5SCb7rEk"
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
