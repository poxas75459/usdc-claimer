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
    "3vYvjqpXe8UVkaMMKsjxo1Pc7PyBD2D2RBHJnvnfcH39XtRV4L7TUUiUa3QdESm2d6fDhedkGg4ex5BmNtGYFwUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZcKvfdxcJJGqKQYJbYut4tKWM2JrtK9MwwMJEEKFtLLN4aoDBqhrkgFWJueANGdHnXtAxvYMDTJDmFQgBv4WYAN",
  "key1": "5gtZqpakr9Nb6RvAQY3BAPumKtBGY3Hiqkov1Pwqmsh1LwVUjzVpTdJgSypMRjb6kGe7kd94asPmA7oQe4oF4Gmi",
  "key2": "4m9pLs7qqtEJSshPKLjNcNrLGpMZoZe7PuQWS4CTV3RHKCSgjvWJD6VZ1hUA7MnLL2q6rriGzuk4xiuMjQjw4Wgq",
  "key3": "4v8zL3JHEHvaucqox9vSDRL8DksjgEf2kzjzT9AUBvi97mYRQc317RZuNTubVFcPBprYi9yHtUx1kpVh2egHpVSV",
  "key4": "5J9vGSDdYLoFQujothNqwMZYdGdS5HY1whiSeMmQLpfWbT7bE9WeSZxFN16mSqBeinS6obS3CBtv1A3USXNes2Cy",
  "key5": "5XwS7BocSr4B9AsixagrT65mZWTpuL95UoJMXQkwSTVTGAzo7dnenyxe5VEkF7pGrHkWWWKhhBqxvj4djbVWrRwt",
  "key6": "4HrLm6YkXwZSNyDsGjQE6bNxagxrB7moSYQNSqJm4p8zL6JAGxbQW83vvnxieAYHFoHFFVpAX8noPtDDV3tuPnZJ",
  "key7": "WqjVSe9WMZcaUnMDZQqkfB1PcEaBefao2QJJjuFeWyg4jQvfHWK6HokfHgSdjGidkFR3x8SsXeemjeGU3DpkGbQ",
  "key8": "cSJcVMKYha6S5HAPLV8uPHtwGwvkTVHm977jgN8PuvmfyAxrdkAnzq1mode9cYxdUVRpdniPaZyxh9baKX6gDRu",
  "key9": "252CbeSx3mJJksDZbk85tPzJ6QvK2f9MUThkoAZHXxBfFaLcT4Bh1KuKArERRMk4Axf84eY7iBPbF9We8uQnbDgh",
  "key10": "3Dy9UgroougRyMWibmASizEQYC8H39a84K4jAFPJ4CoePnWe1YAaE1saKsJAV3iSvxtVT26fyvyZNTVxGbSwKTFd",
  "key11": "49R759qfxcWQtRAEh5NRCnknKvRSrWaQz6uo2Pg25MjyJQvBxGCbe1iYXYE4KwtMvJ5ys6vrUjX18A5GcLn3ZZiq",
  "key12": "Ba7eQVVPQoRYtaYgugfwDX5NDcFis2YN4oHRVEg4ybauQpRhVMjsGutNhcxLmeaKVu9BuMdZCRuskvqG3EeBhxj",
  "key13": "4tthcCudqUxUHgveGRgRZ19EBqQQUzzr2yYou2ZB3maAHGsEnAQY8XDG2UQ3WySReMa2XkjTkvLgsPCqdNssLfwE",
  "key14": "3Fh9r2VrDUHWnUF5gG2ozfhrz5xVWfh4vUpVGBmXCg9mk4NXRw37i3gQuMpxpwerFGnDuSF1mwXv32mwNSjXGash",
  "key15": "3wH8GNa7aHCq1GK1fEhyMQ22kpHdQV6q8FzNkGnqnvWuzoKWfuWt8mTc2on7tSGHZi19ZAskDX1pjdgnva7WM2r5",
  "key16": "65XQfRLbenzJei2Cuoh5ohVtk8dqGay1EzbFYsCVmCqb4Wc4xQBYPjV3upL2JaTNCpoQeRh9XEnNXzU23f3mmnuW",
  "key17": "2n5qqdXqaHGM3nFAhNv7FJJV79GT7t2Vgt3zvP46pEgmbWGofuXdVjKj4hpAA5WDYdes8K7oyAqrYzEC7GyMKjXv",
  "key18": "2aHfeD2KxH5BdeiYmTJejdpg5y6knDmv18FBz8S3iQ6cswKqPxTvYrW1LnnrFm9tgV9GULyr8uh2LLnebiNNLfAo",
  "key19": "7wvfKYLg4kVJPfMqVVH6r9ssHk7roV8ZGFrLDhYRPKLGRtazvuatHKvq8CKremAXRKT198TzivtTH2GwJfwtmjZ",
  "key20": "W34UXdvbnJVtqwndejuqDuPSZwkJD9FFRkdzEJEyaWdWYhT7sQrjBhdh8ZXNW2jw7RUFxrnt6dh85KCzhDnZs2V",
  "key21": "5RccpgQfkrVw4Y6TmkV4gBiamKuQ5GjAAa5hYSwDdB6Svt716t3xLB5cfk3eiFddkyDBpYZVz46pz7LvfpTCFZsM",
  "key22": "2FMdXnAzY2zMqbLvwzrEAxaLcxsRDR5JFDKxPEVnw3AfWbZaAdA3dwPPfanbc1Vx5JFAr8Umc9ADEcxKSyyihpQy",
  "key23": "3awTwVpWeNPDkpTzJchtDgp8Pg3ZjywW5LQypJaw3oGqkmD4nL1DBsoHH2uxseXUdkSywmNPXvb8xhxUYerPJKNG",
  "key24": "2gJ4HpEB4MUS8L6e5bKsor92xsu9iQSG4qZY8BZKmE7fVXScFjHHKc8tWSVp5cGia3FAPvmzFuGYKW1i6dZHmEXY",
  "key25": "2inzXEa2h1KWx1YyYNFQM4fDMNTiefxtM4UsNcDgA4wGPwGGgmhB83DgqMgyepCocTZQziM3dCPQo4vzrCLkQGTi",
  "key26": "5EgzgZAGWt9a9PjnfSqQJbQVAvr9AgVSsy2tRzuut7YeZKHfWr1aVfa6Ponvet2wdNPyfU3xbnn4csZrFVRuccQo"
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
