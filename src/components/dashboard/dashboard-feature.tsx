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
    "3x441naD96rB1HgZVb42SxjJ4za8ykXFDVKx5ppi1PJGKq4Jvo7YbqB6FaBgeqJkywG8wcBYXeiLZzpN6XX55PC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hyWTnCAQJsdfZJ146pTnssLsVcy82ZYoxeN4U5b8inZqjvq3jFWm2F2McEeJkfgTGy797uG3wqsjgUM9rX1GXmq",
  "key1": "2rKhK7iAsz6PXNGQ3U2fP2C69WAzHvX2zDxn4EXHDEBxPNxUsEFgcE1S3AmqdjDkrYXNMtQCRHcwgvgifRvcUgNq",
  "key2": "iDkcsug5RQdWwopHUetKVAZwpgcP2wo4jULsH1Vvbp16FBCx4gnTcAoaNHjnptwUxEQEco9Z11HVKMf6RASPXUp",
  "key3": "6Puy2pcfUndMUKXZf2Xn6T61EPitt4XQNBjHcpAq6bvTU5q1unw6EFeTzqTeKnT9mPuoaGQ1WZnhdt3sQ9Atho9",
  "key4": "2jXYbNbnEiqCzSXQmWdidNTMTwhNkTFgEyT8X6YNsrPwYmh65ZPUoxA7HyZEMAGfeME2phQtFX1qhRUWMkZfdLtf",
  "key5": "4n2sj6JgJf92Y2Qdbgc9qMo7jPBZ1hJ3dhfu94CWRzrPk1PuseTsZAo79uVN29A1iGqKmDF9a3WovxfkhoRshgEH",
  "key6": "t7zUUcmTxbC97TBpmguDaAAtmAA3SFT6kNgVZdbzpy9PDxZ9g5fHPRf2o3Pt7msfBfidPS4qbrawWbNJUbYGEFZ",
  "key7": "bQYyeFWDfd1i68GRrnZupQPkCZVT9Lu7x3kxxCkSD4GErhUPU8UMcaeQJCo7hz1aoZGTkk593UDzQPNjQ7zUaR9",
  "key8": "3YT12SQupttdn9Y7AgQsonPM4PPeSuxsU7yr1jVAMeVygFSU3qnhsvvTDqXzNmZ1UzGowHfVfqAPiwj9dviD1evR",
  "key9": "gBowCf3dUiExygsP3Z9MF6tmamaVXth3KPiVDnxwbL3Mt5BvhfEazW2EJRtJBsiTh3GZ68Eo2sMS482SVd1aQ9B",
  "key10": "5SAUBG3H3J3WMg3Ra9Fpe4Wthp7rhRA3gw4Ppu5vcafLq52YGTL3x7vZA9jqJd7iUtakbTkjJWXmwLPWXurFFXdW",
  "key11": "nMWQFEHzQz4yrLwQ4J2ojezT2zTBhCCoVWZSRkNCXpxbb9WQ95UeVG72Yb2BjkhkcUfV1Mpg8iJCcYVzwQxoK7y",
  "key12": "2rEEppUmx1GbWQH8haoc4MweJmRsPkMdy8TKJnALJsrbpNyABTetovaPDDQjFKitsXZZguVwSVUqGb9E8Bi9h1Vo",
  "key13": "2g9wCCkNcrseYYktp2h4RNYmrUpWuUdzww12xsu2zwcFKunWiCUZ9pD8EycG21wxNYd4FzbFebEWttvKP6hcZaA",
  "key14": "2bLLgo3PiX4XGAobmEYrbnhjB8q6ir7Y7ZJFYCAZe3Kdq3odfR6wkLxqrFjaohSSwv1f6kMscrF7swckygRjBaDp",
  "key15": "337j7PXqp8Yg132VNuRPqzP4Jchct7rztog37HDDhd9wEPaWYaYnW9fZ69jon8KWcGAZB6GkvikyafF28e4F4S1h",
  "key16": "Djj2SNhuWXFcVGwSRtBe6jLLZqBfe58v3XGwtkTM3akUwzsBxHzd9SSnrvQS4hYSixrShdhM3fzdTYQezLcQsMh",
  "key17": "SbWvmnseyZwbpRdfj3rKDS1ggExk8WSj8c5d1q8r2SsDuRakYvaCJaRr3kH6JV1W8G7Apn2UWnjPcnACh5PHs8Q",
  "key18": "3MgNaBZPoSh97eRy7PThpMUWZSuFjUSD51TzegSkLsLcMXHjXCjBYeE16mpiePdarGqnbiUeQ8NmRv7idzfQwCa7",
  "key19": "2RmJzJpjU7Xg6WKPJ7n1SSraoF7W8N7yYXjTBQ6zxtvA8xk2T6yz6z51Mwb9bjZnZKVRvmTV54LK7DNhp5mDLgam",
  "key20": "4HBt6kiUAu5jShwiJMC6neww1UQtNfMDe1VesdHpbkjEBFiRcL4PgMA3ML9Wx6nvz1sGPPXPyyZLzVZhWbxf6jvj",
  "key21": "KhSLQtQ5Mgh5TXJAfwDM6qZYDWraj7GqaC7CiRZHeQjTmeotb9oWJ1XwjKRbVaRzr7HTRXFPmHTbWMQ3dBMYbuL",
  "key22": "45BdAaPczVKCiVC4ArPCA9M6FiU6TzrsgMHdHYVU5x2WAUkCAbub4DXR6XknnFTRGrBgQpDxGm6LpJgmSoTstpMx",
  "key23": "54TBkx5gG5N76EH9URhiXYoGLkAUXSjB3bedwTFQpw3c4rvPUJT34F29oER2o34jaysbKafye4jrEExiXtLQaMgJ",
  "key24": "2NHwXaLDoS3NnD53z8upPvHAWPM9rTYgGcdrVZnGBM5b6cuHWsXr9u4vrk1f1JwrERZ4H5JXgPuepkxjjRCCY4ck",
  "key25": "3oKyaRw4GzCawqU76oMp6Xth5QGMoK9VXhUmZB5fm2DfQA37oV2gg9sGDDMbuQZaWKsMiWN2uEfsWLZTg5CwJ83G",
  "key26": "2yuFjbqnQAtRkM55KHJRHarFmCe4n7bERkkDPRzm5ieS8pXAhsarD2niJS35FjpcyQZKN3Dk3fEoRV2fm9y156HK",
  "key27": "3p44EbscaF3ak79CoioVmF7mXKX7H82R6WhQ8G4ioa8bVSesS6aonRFr37ZSmRPhJKipqAA99GsUtPXuL4EeKXo1",
  "key28": "LgZvwcEcASkEDHcpjUdKUaizTU6fB9Fo6gPj8AYqtsQFH6UoER1Z8hgH7AEqKgrAwazbQqFc9tHHjJ4YRbnDBES",
  "key29": "3bzKtGyMozMXFu1J5hrfWEgU8qY6SAwJcgnij95h6T1McLd1gQCCwLUBrEi5tBVRXBXbkw6NUMaU1ucgXGPnrhhe",
  "key30": "5DYnHJjV21Sh7irR6ZfozwzeN7d7AnrkgFgrKvYnHvcsfZs7mxbe5AJ1s9RaukVpMZ16F3AUrz5hnf2fvUgXvMYY",
  "key31": "32dWLoKp8B1HHQQqDsp7DPZHdZMe2HVKHqkh91CgK5dDwYhBjgX1F8HnBTXc4TCY7oeZnrztyWpeSFeVwbt7rw6x",
  "key32": "4R43VNmAWJC3t3XKxZ9hqSC6ChprfuQSEayxEXaJ1vxa8iDzHjkUAccq2G3adbQVR8wwWKqKTSWhYJHD44jkZEvL",
  "key33": "2i7M1AHjZTvDfFpt1vMRfHhSJZkjkevPa2vE52nvToSWpMa6fpoh4Ftjw9sK9gDEdMLnAVgnxGSxGLCifWHTontP",
  "key34": "2MU2uY6rdCKtU1J73Q6BHU1wDpsq7tVJDGe4MpEAuh3NHwv5zTjZjXKkGTNVUcbyrrhnNGsDMNUxVPTrv3WggsvZ",
  "key35": "Kq5P39PTrwecX3KmbZWjucEtBRG7NwqJGQqmb6zk3SPAeDCeiFzC8UuC66qBu7VLY9cJqrUzSqpjD1JxBj8mjGX",
  "key36": "4otMZjWo4LHtzX1mDWYGUZA8hUy11HKy4bj4gQsHJXDvbVyHCiBJeRoPgiFgqGdYdmqFxC9uWkSca3XKuhCgikv6",
  "key37": "2UTWxnqFd9ppE6XZyMfqZ9YXYVeeTVkzr122A88HRhLYz7YgUZF9gWUwrinUzdX5xkgearFoVsEeBWZBCVtgFFVN",
  "key38": "fzdToDxyZgkG4UVUuZz476tw9og4wUmdDHbxthx92X2mTPABAgAfpv9fkJ5ZTGt446Az4xphCjebjFBciX6XMBj",
  "key39": "2P127dhH8tjmaJbx4NiYV7c2AhSTqvfCv7gQn89EiD3Y4j8qp453U3HMUijxwVgbF32y6vCv7huEtk9X7fw8xKAD",
  "key40": "DjWLBG1T7s4NLG3Q8swcZH7WenQ5Wz2nHNj3Qpj2TFadqeoq6D16bnJkHiN6MNdN6nSsW4f83oigyAANfkwbeei"
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
