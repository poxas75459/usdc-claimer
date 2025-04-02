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
    "3FMxLjQMDnfe14TYVHdpW3m1bVojqZfZuZiZvTat6sz7fyGP1qJX1VqJTpziMVYTkxR9EAZMf87JJ8PBnTgQnjVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5spZBtSuyCgCunFWUSb2PnxXUYLHYNrnWJfiFKHvBHioZxeCXmsL1fDbmRk4gfvkS6EBoUvxtKjtBEfvwfkmJQ28",
  "key1": "XY9wqCjW4SnfA5hpirD8vPZ5Vfw7t8DS1XZUDxrKZJ7EsHEge673bRJ2sAaSWUqiRjiSfQWoUgMXmTB7R5zHhXG",
  "key2": "2nLXhX9XFLK6aac1rAiuLxKx432RN8uvthxG844NfKTjxXMfNiSLKCdhMeMimdSqWHCX12h8ytSdC5BceWZXpcQJ",
  "key3": "3iGWpQYQJCVzwBUxVfCUEqhYP4jL5DEsFpbmRC2fM93YP9fJgZQ2jncvAtMRgVpkyBMjXGTtQtCVyrb57A5wZJCA",
  "key4": "J2TKcNxnwgyHGAjwBTb1NcHbUoucE7ohMxrQBcMzHzbhYLEh8ihgGq2rcx8TwYc9ArMmJYY4kcrsBSvWLRLtUHp",
  "key5": "28YBnQqaw9ULuNHkLafFJPmX7TvjiFZcCMYpJReSzagSE2sXyrq67TgCGVFaTma2NNWSpUg4kyvRKc4LNQEVpdQA",
  "key6": "2cHG4h4i1FDgMpCd24JSt6TiLQqC1hKJnUSvnY2kyPqG3EKe7FEnhUDZ5r8gXgPKbbyMR7Un4uBs5wXeeisvGKUT",
  "key7": "Uzt1JdEXSH7PUS1PKYhtrPZZFWpevm8FjMTYqpEanTdLncqUDPuxEU1RR2r1T7gtZGMS39pEjNSWGkHjjzNJdq6",
  "key8": "5hwXUnoDSicsCy4YLeQyp1dwvwgFhZZMBok4rhmzaCekb1vcPvUeDk97MyZWcr8z73oYRU2BzN1X3zakLAWgJdBy",
  "key9": "2xEVn177BXgh3SJFVFw5Jpc3ERuauK84ABXyLC6zD2zuPzevP6M5rKALGW9tZ3CCnDh7gz3DY2w971AxKNaDEt2L",
  "key10": "56aftxVEm4B4PLssBJThxrBbCjGbxrXew2Nxgm5DJBAqPY7U32uePaurZUpgFwGa3gv8fTRhXAfEYUsm9pDFy3Fa",
  "key11": "43LHGq7eai6h7UBdzXShcTP2koZgiff56FPELBehdMRwJsWCDxiqQSY4brez4eDKwboUNEPsGNFUPse9DFqqe5QZ",
  "key12": "4JNbswXLLg6A6YryuD1kgp2j9cpa7vKToeFcwZkW3QQwSXRv3QVKnDkY1wtbS52KiyZA5bGTeh5W1mxXEHgh12Jk",
  "key13": "2FwLtEfg8u45C5arkLXaZM5MrD1B82dG9qAsth1zFsNMEfMtmLQjqTxZ459FzgE6tdNdrZi5XA9JYprod72NpzY9",
  "key14": "2SQqmNFvzpRbsCQBY9VXz2Cjo5SLcA41j4FN4VC34aH4ioGYscvpKo5Ya74hP1xRGLNFKd8GbMWeQodY4Bi6rdQ4",
  "key15": "bBU86JC5JHrKnkyA5RadHnDbA67REMTexq6XK7s4TpCb5yKJhe7bbcs9WbRqWrDaZbS3Uq9L6xWuivdXGqvyKTM",
  "key16": "2Tu2Hsb3Pa5TGnYoKJhC98iebkQ9sqJWBUv2BpCpud4g7sZxJdM4K6mRhMBi6ZktiswgKacg9Za5rjZ8GyvXM6gf",
  "key17": "4ZVHqYy2a8MX71kQ7KBUni854XyJ9R27ooES4A7UuT5PMh9HsTW99yuzS7d7wEZBbfsSk2BmQi3BonhYHyxLXnrQ",
  "key18": "3k1q33xwvejTRyQpJeLwy4NM8SJxokFKLvmcxipT2zMcBWXMZFSqa3BBqHAw7zpR15x19opYWZyPQxCNJo9fu83T",
  "key19": "2XjU42RPtuKXp1VDHZhYUE8bxRkki4DtYetAwncHzHoxjMWh2CUjyEoU8svjTZ9AujosbJCE2os711hBghaALsif",
  "key20": "3SnvqUQEcBhMo5S99UMKjj3ZhaTTUTdxP7KyPyVvwsTQkkuZVtVryGzsxSAcVMirBhAWC2rS6WEzf7e72zabJarB",
  "key21": "2Pc6mAAdv2cEEXDo1Q8F8ZHcAZFxJDC8UXCUfUFUnCfLW1aEZ6uBi5JzCHAR9uniVrt2NUS1SEY8vKyuVALEKwB6",
  "key22": "5bNT19hFewqktsm21rZ3PKqstsFW9AzkQD7ZT8k4g3dRd5eeo9xKNp4b3h5vDbYyfN4RKmByfWVw5gT9693RmFw9",
  "key23": "4QLefq6gzr34H4ryxL5X2kkPeDKhLVdY8iULQkr6aQ9GAH49JEGsnbbwnn6WHteQWgMHRfEE5QDDMZjEYecqYBB4",
  "key24": "3bB1gUsdSGMtf8TdLeZdrpYkobQDonMVaWgnLBPGoXnYQm12VjJdLg4mjAwvZSaPJ2dpdncWFnKMN5e7xCe88rAq"
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
