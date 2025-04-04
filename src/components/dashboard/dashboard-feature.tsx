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
    "4JzfNXWa6K8TD428P4qWHvCY5zoNyYuDBhKBqhU1v8MAA1Kqaqd9Mrz2CAnXMNGwUD9xztqWBjaaPmikepMaJzWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cE1Fj8qhddBZhK9H8UArVRFCRQfWDnP58gP2ZdPQJiVQU3xFrawQN8tvwRnK3ySvQmpTzuHogxPFgMYjoSrReWx",
  "key1": "4sgwnoxFWSDXjDypZppmZudxKdmAdfN7G3TmKJuN9wG8FZ2oaBPWZc9FHNKVDZEkfZNyDfZhCy93qgHWJRcwxhB8",
  "key2": "55xqaFteNVpk398qjSPePFr96n1Qt6QwhGz224AK1qAEMCxcZmT7oC2P34mUnKaCQToZbgg7NugtUr9ex72c9gcQ",
  "key3": "3uR3pgNr7oK4LAjBLAYbuWWr7aBzKZKbekHd8UcvG4tRCQS1RWQCtfSRzzJJdDQmAPwKwQEvzgB1YguTdBrTTFAF",
  "key4": "4Rbu4Hxo4RarFXD14Mvj2cAkQVFTCUBEx1nvvsc2wcypb8mcHmRkRbj557Hxw5yFRnBjTUhHYuDxqp2DfBBd7R3K",
  "key5": "4E2M6yAtn1ymYVQaj4uH7xbdABiVEta7X2h2XTnDQpGU9APvsc1S3pGhrh7NMpmbc1k4ErDPefmsEPFeJGzoPPtF",
  "key6": "3SeFuww4KvhPk9RhfiJUbL3NvKsybFBxDYGSYaGTg55kEPMBQVPBpEumysG2YJjzkkbBHYQkgnqs5QgG4R4GohqG",
  "key7": "3q6vfxkHhAqrbDNqd8QwhbAjTLQ2LZK6ypkcyKbGHVx7RZ6Ca8C2GwKHa7SPRpMxpd5mBwZgK34uXAs8noYkkQfK",
  "key8": "55WzXMZPSwZf9Jgix5PW4NH7hnSx8jUBXK4Z1FuGdd4rGyHQWKjT4a1nPagN5RJXdpAkHUnHQAceTMS1sYtNDYgX",
  "key9": "5XycjNH11onumMtRjQbcbpZeKUxorSC9RRhKFDDrDK2q4CGreBajrequsHQCbcKCpcpyQXpMXzz2zF6QhqfDpUxc",
  "key10": "3bdQrPoPMqYxHK4GVUD8HyFn224pKx4KAWCXvWincoRQwcfsid7txvU44yyywXbMaof2KQsUNbTWiKVFiShBWN59",
  "key11": "2aszwGingWYnvWh1reV7FW3qHXCdJYaVd8KQ8fmwLzVJer2EGxWP6SumK7y1znTNMKb6FtkPBmWeS4jmqydHZYZf",
  "key12": "4Y9R1JPzD9Pnf2Q6TpgMi7cKAwZwqzMp8QUVt23bhwWsNvMmyLZhE9JfzVeeYo37kJYeVSdzYgFpsSH2LdBzDFKS",
  "key13": "5RHBswJLfQiuPXsvVb4fHU5K7PJzJv9fDL12x1QLV1kkqAc5FFY1axUe5sSSjaE7fR8Smt6e8eszdKkt68GsoSK6",
  "key14": "A8sZXCE7mxat2aYmQrdq6W1YvPwFEdedujaJeio72PrGad2E17Vbrc9tcpU9x3gea9vNdGjefPVPjeD16fBykya",
  "key15": "5rwZVB5UZXvsTbLSk16N9WR1ppaNhtQMeYSQ7ktyhnEFAG1p4zW4Ha5Ps6gpcap8w4ky2gPCV8HXcfwtA1VKaDLo",
  "key16": "4fT9K9b1UcyhxgqHqFqZLB58oRdgMcWF71gpgqBCb8igpXzwMGiopcvVvz4ioGBuXtF37AYX94iGaYYkqsgXZ9TM",
  "key17": "3TgFFygWq8U9xtphQjox7UHbJvq4gJoZ7QP7hEYAfhAUGNjz9UJrMb4dCoRTJs2D1LRg37t1T3M8rofyDNcwjpu5",
  "key18": "4Mb44qekdSrTLRKqH6moBX4srNe6VALXxVqFhFRnnWuWM7khRXw7frngfLNWRVavY22mVbFrVJeDQvv7AgAESjwi",
  "key19": "CWUMJgsjiGBmNYDnGYctcnMEqeVJEXo5gyscGyMTB7KzLYm56QoajjBN7aJfuLFL1zXi3agTKo22gwa6SQf8ZL3",
  "key20": "5bMTweuWRpb5L9TDPPzoyPsjGgDFMdtRgCYfFVJjrC2XXz2aBMuuPHtumK1rKCGzCF9xWVvMSaKGvYcCFo7uw4Ft",
  "key21": "39g1zU36Stzgbw4y9mNBNoM2tsXGiCmuQczheYCPP38fn2QChYFUCCXYkPnEQFK1Rpvkk2jwD2soKKw1q9KVFqri",
  "key22": "55R5AnEfP9hhHjUSx7c7H8oTyyw1dGcDBpKx76cbDX9uUngrjEtMn1GqoZpFaxV1zA8rnQsHzMQYFAy8VxSwZ3t",
  "key23": "mMRBqzvA7kRYgAHVnxkkeJLQ7K6U11KfhpJEo8oxPjurGyTNvJ9vAUbSLkTjtaD6Xn2USMJ6KWFPgNxToEweebn",
  "key24": "LxCqauRbdnrDdZEdb56De2WDgwgxRuXFTVox3o9ja332HxNxrWqmZSBbS1Rw8781sKYqFW2shq1Kk4BUAkEsjF3",
  "key25": "PCnu18nEZqwYYMBFEx2CkQumGged8EJoBKwH4eyNnFyD9XJpctMorSpNJQQLknimtPwyvucezP9XnprCkQaVZJm",
  "key26": "52SAPLo4uxzMmaVSriwizxevfju2tgMgcjPfrVAc6ymVNX12kX4UBmrim3okq1iw4mAbLs5jrvmVY9m5ZXr43eTZ",
  "key27": "3G7KpE69ERoAPngzmNwYhjaWvDN1EVYF948XbtAjNASpmTUPLQP3xzMMXwVNU2yuEd7sTXJDaEjnsnyutC5Kf7Bc",
  "key28": "652BuJ5YL99zeh8hhQXtscD48gyqnvQLqxGC1K5tGfcDLqNqHQqkao7ymaYLU21GCcryw9sNDp7nXr3sRTWDKsED",
  "key29": "jUZEyF9d1jzzQiQL9Faa2dDQvUMjJ1LPCKHwVfZhidDm48TvzWdUvsAKxMECZL8RK8Q8HbnSTW4RSbvutcPkSig"
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
