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
    "3ovUbrujAbiMRZWzBzsqY5GQUbHXg7Nee6Wf3hZ9EriMJY6T9x5hWWYhLgCbL5sX1N1GBDtzTPqRrqJCmernQZe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R1Y7rqHzyCHR4tp11Df7w7SzbqAcmeJi32NEkmmKGsX1EEuNxSqWAkmk1zJSvCYvEq9uLWaPmBk7FvQyyfjiwo5",
  "key1": "5mYaFmRwiJmwbbEaFcb1RJsrf7nTuAzNTkJvid1BphkbbnCtJJtQJiLiv7faMmmW9arEt9Sc45JiRuvSbC4yhJVc",
  "key2": "4SXtdaPhWzHu4pzfQPyKCmVdYmPJtnJ9FoHBBkS3ed7T1W6BMix5E3CSHdyFgi3FkxcWzq6rqoFN2yWKwzbnfmsx",
  "key3": "26YFqRDNNQv3JZj6vGZY45PDwKrBWH3fwVFqhN6D7DCUZ1d1RJyd6KiYUnsoz5qZGpu4gFbTJqGuCdStgpbpQG3x",
  "key4": "SYc5D9avUXzkkt8YjsNo8J1qTGyi4z1wV7uoaCdCa4y1smL85FkRZ3dTyq4LJkNyF63rYnYSVSE3SPj8ShLtEBA",
  "key5": "4BHeK1sCwruY7bcpBmfVQmJpK1owWxgvURyUQ68Tf6Dx25diTffYWEJeVfmJwpshUoEiq8vo7oktgiBSjcqn8deY",
  "key6": "4AuPpHCu5xPtziKsCJcZmgXcHsU5Bd8JBrH9XczVRZ2KMok6DvAv3cJRH1ahuuHHrYpjMPvxkyAhauPxy8CJtG5r",
  "key7": "vzesapcD7ewsH2zYwfDq2HfeWDTYjfgoXko4BAyYg7XW6AHXA92Q825xuMospTQhkzkryUqwiEeyZ1R3o7qu53d",
  "key8": "32DeKC6XSM4S8TRoyCbKGB5tkeQeq1LxZUkVPM7zoChKKnZzCMpGPpncpXvmGxe9a8DV2nsRatacZGenWwpcqETb",
  "key9": "5UCbTbKMFrhPiZZ4wBBQgvMMyErWERHaqbRvvKYyM3iWnRZqQqWxFfjjsQ3g6g4ar1nddtdj4SQTQ9JSw3NYKw2d",
  "key10": "FcPbbjWbDWhsr89VnvYAzDjNinv6FDWh6QwN4AFnebWmfYH7fJY6pmGCzA33YTi8p1j9hTnZ6rzh5h1LyJGzNqB",
  "key11": "4xn6eCeuAT2rRCZxMTL2mHCjhCs2HYn6XRTuTErWGGse9BYKvkPw6sdswtyWkLR3aA3XVCiBBsiXQrwYv47PtASZ",
  "key12": "5zdYD696RmgCtwaHcXGRcFrhtPxBu1edWQ7P3q6n7y9wgp2o4RDRveyCYGUhS2P3P1Zc3t3ZsuyDD8PRAEgJFWVX",
  "key13": "65QJLCuYxFS5KAdgqzQe1kVKLJe6eQvxuzPUkLPLtDUcCteCRZ7ThrEgAptnn1SsBinktDJgwxoAtdojeeuTeTkw",
  "key14": "2XcvQpCzPPi8abRkQqBDsjxCDZybCfEeRnWcDgQFDxHdso9HgzXpGLo5fjwjebQxYZbcdAWjS4SmwAZknKdW8wvg",
  "key15": "2h9kiA5B2FGncr9SNqTGG52RvJJjbYB5Pyv17mfhxHcxX8MRK9mKUHgQHkTGyBVda3dSmaDMaWy7mgQKr29YVKGm",
  "key16": "mcEcLFFfa8KiTffvwcQcJkqgtX6Jo5zwfjRa4qP1PFpTy9A6JGz8NidoWGpbBfebxYXTxhmpVPbxuT3h4dSpRkT",
  "key17": "4gga2f67TbdRkyFVSc74d8GgaJXkVvdhys1xjtAQztwMwUpBz4yxTEuLHpnSc4QWjNYx83Qb1W6SqroLHGMtLsp6",
  "key18": "5XdhuZLTULfbzmtXaSuqpNW2YmbZBGXexH898572jJcB9URBTo8fNjn5qVttLZ7z7ts2vDR2rbHFfTKd1P5EPRWW",
  "key19": "321Nr4w5aoCBafKp7hzFqBfkZhqrC3RyAJHi9dLYKkpHQh62QdhCQqYz58tBoqy9SWr1rMw9Ak8QxRnXiC8mfHfs",
  "key20": "3MyjSXXWHqxmTZ5BkJ5KSZv6PpmTc41ddZvMiPTWe794TsP3Hx8iL91fbRzwdWmA5DT5QVZSN8rBKfL8HurxYXLS",
  "key21": "64upzdoRSaArPtarLS1gk9K9F6ScEXo7q5cj3Vpus5a1nzetLBD4x1RrDCW3uy1CwoUbFWvtdMM582ako8ep5rod",
  "key22": "2vo8PH76AmW83F5jsW1wZvMB5aPk5qYf2omdwHAEhRDcaVxvvYakbfiwMoiNEkuxsg9UBNoFUtpF5gKsVkGWWZTt",
  "key23": "3zxvEFtHmYKS9qwSjxMJwfXypqk6UQnjmqjH3nsiyY1MdSVc6G31UDDW1VyvDCA8AG37GzfEDxUXehxFAMpgSCQV",
  "key24": "5BSZfvuCsuFAD8sXmkyLYZkWNYWxLYRijKXe9XGegw1Waqbpbf3BzAZimA83Wt154kJKziRPXkxRUK5GgDB4TKvt",
  "key25": "2rBWzepyeSpskNvGGMqKATa9opgNDzqCGWRw6U3KSsmZjXu5T4eWMFKfavLDMaD7EhiaqsurMdAWcUqQ1UCGKhzS",
  "key26": "51uJJgRmvHYBg8tMzMdk153DkdVPncKWUhxfE3K8WNrgHV6WaxyQ7Wr3fzyRhhX7cZ4tWTU6yVqBxqZxmD1SgrCu",
  "key27": "5ECjACgZTwWyGdRB7xJMehRFa5tVomxWwX7MJbkTuyxZnqU1DQQTGjLLCtKgeJHJsmNGhYZu4D9wXdfkxgXXXY4p",
  "key28": "2WvgjMKP7teXorMArw2tHnfeeZQRJ8Nr6sYW7SaT33zehxavsx6zJVTUkcuDgtFvcYYxi2o8YgCpDVJpaUSnQe4L",
  "key29": "4QuzGwjgtBbocTQLJtkX7p8FXVYg4m5K47bk4WXduwoNyB9TESdFH4mUVDz1djFvgh6V4xXMPN34F5AUbf1EfyqT",
  "key30": "J8sNejpJsToYhAcSsxgthGHfMk57n3pm55AM4b9cVrrnvHnqxc8zKfgAVSnTpX6B5q1yxqPsRPxfJE8apxfiwTm",
  "key31": "3ambLGXKTqtVjMNhEVxgkTbu1Cbs1H1oomG6DjFxbE93aa68inTWjrgySoaZ33ddQb1yT4MszQeRGHgmsgasCxa3"
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
