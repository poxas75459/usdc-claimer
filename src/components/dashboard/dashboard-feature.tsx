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
    "3u5Uox8qKVJnp1eMRVsLduuPmCxwM3CrELDdMNTZ611CMsxMMdE62Ljm1BNJ1UaE2dFSqR5MhNQkFs5f2F2NwjaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cXAY8WtkZjuwa5JVtzewqQW8JARxaLhtk9rCd1PCXurJWFc4FBmtoHDjoDPNzyYKgtPb3GpRmZzSU7X2LXABQDb",
  "key1": "622dpLJPQ7XyJqtDTmVk5trngNCcLmgRZ7qUkgxzPV6g6ucz77zisRBYFzKsrkQEkmbgHSzMpxErvLCVNucdwEL3",
  "key2": "4opkzZtNCufCdFVTWBEvXEfyp7n3r8RRV9KUdTWvm7tDCES4ruorKbCUz3gHDM78D77Zv5fEHuVQLDyomCXASZ31",
  "key3": "BAaopdNhGWKSUGeuRchpUbHUxsZtdxAyeXPht8dZFHSNzL9mLZWAihpYXdyXJowSpDj8tZAXAfhHLZhnA98gvsH",
  "key4": "5MrkDjMhToKryVk7tKWhTC9vMsVbarYHxr9AZ3eeZCHNyVc4xVLZk2zKgWbDthU3mA1ZLc7htYMXCngW6J4ChLm5",
  "key5": "9gFJCLGisipUKYXZoTLzJBq4ySrFAAJQgwcE3SehTfepiLwwnwYwAD1ugVsZHbM6UVARWZDMY5VmziCqJoNDAUZ",
  "key6": "49pjHXRWCDknAnXczfwpvVznedTfR1DLe623ePhpQbJmnrnM3sdbQ9PCpdTNkRWjbmydBcokfEXJ3GL8Zu3gQLic",
  "key7": "rnNnJKTtiFi5Huq8oEbi21uELs9JGo2t4Cx8eRZs8Ky7kzxdzWEA1KB7EvXDpxE6tNJNriisVPfYBhuUQaq6vqG",
  "key8": "5jNQeHrdr2PegzcmL4mSBP4UHGog2uuo9DDYkNsCTvcfKzBPwFXb6BdsZkhh6nDXVMYwhDp1EwhDJPVd3XmmAkXW",
  "key9": "3wFyiqPwiKYjjqBd2rc3i3XhoSaegG8UUGYtd8Fke7AG1Mgyom3v9YdA2Jn6RH6QyuhLt8RHB42tnr5VTmSfWNi2",
  "key10": "3zMptfqmwGXdZE5DeZ53jn8gbf9fdSswUysMb71rW4ZZgqQgfx3oy8ZsyuCK4dkhpwpWZXgFvSvXE6SXuzkwka2e",
  "key11": "4n3vU347XZ2KVY1K2YV2wvMQDaTAn7vbmrGh7G89Di2xzBpJJCkhUtozM9fC4NoBjnw6EoTkwsM9sgNwGN5Ma7jF",
  "key12": "4Ta3UQXNNEd1JhsyjML89oAJFmwrrHddNyHX1M7pGawm44oDTjtdxfzVrmLWtxnVAptFo36T8ihYiKarzg2coJct",
  "key13": "4k3GiVTFtwgrfktG5P9q1595BQqArcrVYyDLEgu3fa41PCKzGvC14QH4cxU3h2DAQZwPSVBzryKZT1eRy7GtjLpG",
  "key14": "5EXvv5yp6FNFggzGtjYK4Zm7YpSs3CY6hbXQQFMGwTokr84NPGyAG3Yw5F1GMzRHdcyWu7UcSPxjKFyHDg8Kk1Bj",
  "key15": "3D1b3usRUp5ZFzrPcBkhPGxJeGsMooHAknTzNqydiWF5XKvZ9fcdhTbTzRxLWiBdnDPEmCt3wPRgeoaXbQcaW3Zn",
  "key16": "3J8jvwqYJw6TbbHJ7Ho7uRmno5BhB2FPe7yA4iAw152R1GFzZznhghDEcggmFkY8U3yM3wSZMFtKTTDNnDHW6FFp",
  "key17": "29SaxGZCtMugcNRytoVFQDoNsv3j3Yd9ov51DqZtTabAoQFcMigwobwHEqMqYu5F5fJFXXHdVsCRc8wQ7e6Z7zum",
  "key18": "42Gdk36ztTZ1xqmJ3o7YuGE5g28isxHGZP3MuooV4iYpXkCNbyXpBpDeN4ramf1Xn51dTgD8zrVoUvW7kaHkrnCJ",
  "key19": "3ryaycY6n4FkimFXKqtw8Q5879fZWXCrN9f8jhgQPSNrwzym27B1sAaX5DvjQjxxjLVDZHjqMAxvpFheJF7GRrJS",
  "key20": "4dsM98tCyvhMdxej7iF6HW82QwevLR7MczB17z4PWXaQZimy6SwcfWZURGjrPgfdvnTPtbzx5tLRXTADjW3iMjT7",
  "key21": "4Jxmkt7DKUQPNnTaBnVHAwwz5xWDaEpWd8r3hAhJF9NuCEYdnwNguPTFXtjX6hvWHmiTh9QhUx28DZBrkjrBDPLQ",
  "key22": "3DQCiJShh1nGwPZPDvJWJLEzPyDRJVVTuXLXuAC4EhVjgKp8XwXv2mkcDxsZayb1CM5zPsVKkURTMjSNzw1wUq5N",
  "key23": "5jY9pvLr1CdXMBWGzEtMB9qnwKJi17ZLYDvnKvjzZeNU1J5tBDd3yeCH7T9E9zHiLkQjcbNPnRBZmSeWYVTX4MEg",
  "key24": "2XAEjyahwnoCiCYdnPvfSTmsyzkz2RQhA7NAZLEUifqxv2SyvxhY2RwurMcjFSCW6tEK2czsrzxLvMumWU9wqSMf",
  "key25": "1uB4ZZ9HJwWtyiBHFBmBPqH6XUiAAB5oenxNbs9iqz7ptJdGcW6Yy7dJaNcy5VfU8fJnNa6Dpsm2Sp7AH6k3HyM",
  "key26": "m2rHDXCqUjb9BWgXKTtKdsAjLFGBWaLmeJTvKiok69C3L1NvzGCqWb9xsNmriUG2aXP569kFqGTNDJADJ2Sg6Yj",
  "key27": "mp4kr2eWL6G2zGLAxe1tPiu5R5m5K17veaFLmxU4NcDWo8jru3csCW3CnmsfNgwF4JdfoyYrTwV3PfbPN3hhtse",
  "key28": "5A5Coai6VDLZWrFBV5s1adYQiq8dM6uBK19HZd1GmxV2wBxsqVCygiPbwNvLokdaYi2wc5uaYuyQfaWo5NPuykJU",
  "key29": "4YTzZEftwUn6UJEpiG1HRhn4F3WFsCsQWGYd8LAxLEHkWDtvPcQkczppbUcnhWVdZ9WEELM6SFhGvRJj7Pjout95",
  "key30": "2D89aNSKQzARQ3Fa3rr1Wggx4AaNdkHpymYuw4xKLQZCGzqzEu22ktdjvGqwU7XJL8XaGLNcmxFZyrrvAR4g1spm",
  "key31": "58vXXZFytRkM64hdqTc6yezy6HNgPND6xthwZg7yF97p7FevGHZLU8xVwAVhFFw9CncwbXYrerpoyXcXET7QSqTj",
  "key32": "36BSsFdKb8yARpfFutW6DFX75jmkGU9zYY4hZnLUpycFwiZTtsGGdLQV4F8K7fD22hSAaukDaBBuKiwLx2ycbWjC",
  "key33": "3q7YZYCqNw6gyiAWAMuGsy2pwPyger9BFBQB78XsWEH66YM6ceX1mFkBCQMqRmqXjBdkNjjgVKV3p6FrUpeYW7op",
  "key34": "2nsEpwsMNWzFN3Sgf4rL42xzP6BahLCDPhSyqBTihfVfghn3t3RCuz9H5gQGk6UTVHeDayPH1Fv3qBtKW9dgsSsQ",
  "key35": "2Md7BaRj9SZ125dQsuP61zA87doAQX8xLboj8cpnEoucYcXUB9QyzrtPqd8YyiuJveMow7CTAJ5cBwSV4QTofi2Q",
  "key36": "4LrLgdHAnb2JCXaqkdudBUPatGjKituCQ6AwT968mv4jakMnTuwpDjCcoUpqVWputy96DpfEQpmxLW84JEusTdeD",
  "key37": "iL7H9LC7GfrKEq52CFiPV1JrStJz2pfYXYGZGPBnQfKTnbVokU2NG2TN3RHyBiw6fCfuvMpvNrdGNy9SE8xf3H2"
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
