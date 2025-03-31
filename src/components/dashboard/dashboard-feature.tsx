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
    "2pBp6vjogk2Z3KP3b4i2ayhCcF4nNVAzCq1hcKPGx1zwmTt3mCsMYAL1YdPFLE9aCDHVotKSVjjxHqaWNUwJMAkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GvM3mhKerftbeMdDQudtXYjTxqjKBXTEcqA3RS2cYf8sx6dXgHakn3K6myJHDRbQJNPp9mxBPpuryy3y42ap9Gs",
  "key1": "5GX6FRt1pTB982anJ2z2PPwx1GAHzgxujLWFwonXzENmHC8a63E2Cr1fmZezRfx5HN6ZQ6KrWgB4Xn1rZWnhDRdw",
  "key2": "5jbqdYVnDW69vp27BiB9VUDFJ9GCYsaBHfRZbQ3N42VTUjvxgS3V7GU3QnHGWA6YdUBtj73EscLs7uesiMXkQiuc",
  "key3": "4suG2AJMujryPBbeE4UTo9DA7G1hJSZwR4VjNWpyQuHJpTKWqkDh699wguXwwSLo6K42JkXrbz9Ufye96grY7VWp",
  "key4": "uxnBvCHBa8cqEQgQJZa6YvXVLBEZG7chn3XDZdAPeQbCCCXLRMxkohYqHkdGBoekPnqLwkg3txUx4xv3QwcEboq",
  "key5": "4oWLVEtNdk8zqsLk5FSXkj8MMKhmfznS3WE68YUDzg17y814RBpga3f3SFULmi6xYXkpTGeeMr796TgGqkUs3pXz",
  "key6": "uYPFodqjE5HfVEtaoUBRobLZXqgCmdp55sY9jcLyfrFgQ88pMpHBUKMsg6dFYfUvyMdj7orxNpt3452cQMdJqT4",
  "key7": "F9ryfpVcgbkbfuGNGQT6scBssA3epT3CiFagR1YeG4ek53rXo3cNQVFZyYNaB43ovMvJKFpoVcJ85fAV1Adhpus",
  "key8": "3MG3se5Vbjnybkdj9K74mphpxh8KoBNZaYJFdpaUzNooCba4qZgRRgCyfheMhUhjcA5qQ33R48C1FnmjQ6Qjrq6D",
  "key9": "52RSJZaJGwGtKQsunR4iCwh4EQkmwMfonqpxbDn1PTweJAhAu6RpTCwDGdjmrRN6vGBmLLnmHZXriocxJh2auzqV",
  "key10": "5ATic3KbZ1fuWZMgruv2M9xRbTvYZWFUwD4kyqc6iQ9V9A5yAJ3j6rJTcdXHcYTU3Me6fXfPQg5zPw6jRJtZWgQ5",
  "key11": "Zx2thfwBbqknq1Sr6x1CyFxzMs2j5T69nacL8ztQG1ehsdRyqSKJKrfAXGfn1dGG7dVAziMtb7o1z3KrgbxPkHT",
  "key12": "QGdof7gtHWwhee6qLantkwHsoZ1kqRYdcCimx1D8isDobdKBmswYjEWyUyqkKEozPG86GDgQSNg4UxVuc2pVvdC",
  "key13": "5AN2chjRwEd7TthRmxuCjpSsf9ddg8MtkESJ64bfBgZarPzSLBqRiYtkpU4bwKJmLJRMdTP5Q8c4VkjYXbgv9GHn",
  "key14": "4mzLQpHR2U59fpsXJH2CZCcRrPFJ1WhnXTq7D7STsXftUNVnesUGcyY4JEbAB28Hj5Z6EBWthW72Ki7Ur6GBMhxC",
  "key15": "5iKbi1eq3CMYSzNsBweZQEN3X4sApLekxBnpu7J2N7UTscZX4YVkU3xMrnBq7E3S8vtHbXgcH5dFgfMk36tAMAPw",
  "key16": "5gkGphNZZDJwdcXj6gEetnTfMCggN9hVUVaGaA4NtvuNi6qWcJGnZymuP6JTMC8bUcmFrZ98W4D3F3p487as9GWe",
  "key17": "43syDS5jz8B14VYQJtsZUqidbth8UBHz2yWbFGoYTJUZwPTjVQFLrUA8pTCmYAMJJBs4UKtz8rwgxQRtzRj5UiBP",
  "key18": "ecvGuGPeXq8hPaCz6xgEsVuYFVZHzcjXPPBzB7cj1BnqimRXwNfGoaAEKegZMFZhJ7CY136c7tcoL9QJ8bKPXev",
  "key19": "2tj2YqMaAe7ARXP1kH5g3e3RuwuiShTto51V5LBKBnDwC3KXUJv46dXuvoir2xF4wRQqZnQHjZGNeMciQToUxPwN",
  "key20": "5f7kAzRt3q4DQRqxxFzPB2Ryt2ki657m6zawk6TKoAHeS4nJd4c55NFoRhX1Z32EjG7xi1S3XJfpDGZjoHqUYBRj",
  "key21": "42qmJYjhvNX5RDytrj6iUxBm4CfqVaswjt4gSwMsdonyAruGvXypHAb9Fs1br63nEa5QapLZjY9ojEZjXkztet7L",
  "key22": "4c4xdu5ueKiYhVSp6bC96YTyk4i9M8K95PqXLQJ9TBCzpqQoubNhpmb2FdJLwkecYhbSNCsVu8NVLuxX1MRAQp2m",
  "key23": "57EfmvE5qWr3ug17xiXXWeCfsz6FVqtLAeDoXV1zNsywNqRq53QmgVaQFzq9qLwPY1DkpwWdJYy24nqMJufwbnbv",
  "key24": "5oBhBUWauFp82wiuqtUdcrX5aLHRKu5W5iHA7Kn1FhGqhwbqmJLff1jjTW3kVrk5DQEaKsKHU83P6vZymH4SSUKB",
  "key25": "4uzidjiTui8ekvwHiE9B4DFQ4CAUEUn1PHUWeKVseCY5dRsgomX5rLgKbaMrGkLq7pW7DbKU59NN3G64rYYMWzM2",
  "key26": "64actwSPCWk2q2Pgr1zU6us4ecJ5gZocZATPz8986yAoNZGSfU2DfJ4djMBPx7wKrBxYqNLSqd66eGLbePsSh8Lp",
  "key27": "3cgHEeH61AKqF8ELekWJL2ZdoC1Ank534VjooBnYypxjSeAApDsXwH73Y5JgCQ1Y6uHRUnVDCjk6vJJTn3aqWbnH",
  "key28": "3htsuXBeDBagLSHvo8MMTiiV2B6K9Lwfsu2i1n7o4KwyktXKTzRH5xzb8NnDta1NeL8WBtSAUCbns8NWZu5kw5F",
  "key29": "29rTQqhUMA4Dwb8twJ4HySM3rt8FjtuE8G7neBsfFBbC5XsT9bYXWUcK2477u4WeqhmEnUMRWK6dpNY2JvmJJxWQ"
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
