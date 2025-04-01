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
    "4XDT78kz7sNnPZdMqcQVENJPTFa8cvEphQEzH99bq2AmYCdeEjTgDc73vgXsFdZYcsKLUuw7qioQyHMoS9wLBbaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UTG96WWWJGPLASBsjymuERoVp1eZFPc9huaJkb5GzgC5PW2su7wBsxww44CRrAiN4gB2mkV944rbwPLDinKL34n",
  "key1": "sYbrrE8z6EFAuPL42QX4CPSAXdJ6YC2KVJkyUnxqqoYQb52aPDUCg29cHh7kwXXywtVjPqR9mCFKmnSLif9Vnjx",
  "key2": "3smEeJnqgh4qf6HJfsfNkoLtxpdXKGeJiYHw2A58NZ4rCKqZqjmF7W8nLjb5D8waF2zLn7XgL7UvpFgV7SvsfNWB",
  "key3": "2TzcqAqjgnYwHoPTWbEUjKEjV9BgRMmqVNqeyMmDXVXATomjcS43NmcfV9RJgyFZQejPQmFoDZoEmbTxMjdYPaLd",
  "key4": "fK6QCDJ1Q7rUFaeLQu8yGDdd65TnM3c6jPTkWFkYPpcMSbJu7RZho6f127xdXyzjACAGyDVuH2tVpkK6YAnPCui",
  "key5": "5pfBDnn4UpsKPvn3k4mnf78bmwSucSD3nPJsrcHSpftUU5vGkwE4FK2Miew1UPa3fNdbx5zfyVn5oSUPW656Nysn",
  "key6": "64ns2X4RbDYtcaoixh1hnXFpzWTRTrhasLAFBN9dD4M2Sk89M8GEPM54cNQpy4WYAbHafeVbfxVnBXsyuoreXoou",
  "key7": "hqfuiXSZikgxyRJkNxpqmc9XzFDUdzagatRyP4ETVqnqCcmRqzyqrrL7Fsudstx32RUfQHLT7k71vRKNVpRWCzb",
  "key8": "5sFxXovuGZpQHgx341ic6dEQSeGoPX8JaJvvFwFWc3V62fkfbnUxYcRpXZvQcN7amFW1eZGmPHzm6J8JcXLgqsXp",
  "key9": "diap9ZgNPthttGKFfetZ4hwDbmAMzotYUqBKpHz41xa6R4LEWTZXDhPp1iK38rEoBQxBxXDWQbJVoMFivxTayaq",
  "key10": "LKN5br8gtL6B9HUEfjt3u4McVTAGNNj59H8fCZHudVTzLzeN6XKRuwn3ouEqrVCjjNMJpTkks1TLeH2frzL1Tnf",
  "key11": "55QXFcbYpBx9ztvvPBP7zkjc4JBwAdGtGM4LbpV9wovGRBxXgLB8TYVaxkBp7ewGAfTd1zs7nqRi6YSpnsdiJdmn",
  "key12": "3kXBrbvLXRYjvjZGsHLgsRhWRyPGPitLxzAC9TX38a8yKFNe24YKMXk8SKMMFGQSH2NHgE4MzmtE8rkYaEp64gJZ",
  "key13": "2gjKa2QUsXwVaEmte99beDLH2erB7vUfiodBBK31GpRgbWA8GcJoXJg8nRUqX7ZKbp3HfsYvEiMXXBw3feixK4i6",
  "key14": "3bMN24SSpcT2dyDUAE5JBQPiayhUUd5eMHqFkCzZx2xyUgTXoLuYBfyBwnoAV9hjAoQYepqanf4nNeyPzbi5g57A",
  "key15": "9DtzH9eSHMsjWQvkF7oCJDM1dHTfF4j4pm4DMwmvmgeY2QVyXaQpRxMYwLEprqSLipbstHrft5f1H9YspfydTio",
  "key16": "fTFXYp8UdSKpz71shAEXg8aXNG474qLqkZ8jZsiCpNqTbmgLA3wZgTU7B11geRAxQFRPuGpunLG9cuKEE17zWDH",
  "key17": "5s1CrhCbRJ4sXhvCPwcmJn2mMZTeNVrZLrNdzn1xYAmL8BTSrsF2L6fopsiPjsijUK6RK4jZNdfnAMBNY5mM9T6P",
  "key18": "stcjNLfG4Ma1b95Dk9J3z2aH3WpDcDLEzieEtAWxjpBygCifBBcPmrhqTpqE6EGK9Z3LqEpr2E1tQLWNmXkNd4u",
  "key19": "ENiyoZyPgwcvWcCXtbzDdsfmatnufGbUWyMLHgRd9EshmgmpqLmWfYqUEKb4ZrE6CYwHQQBqwrC67FWnNNkzbhC",
  "key20": "5v5PxUW35mQE6ScxGrwpoE7dTV4Zmhn9F36CCHSfUnQHrxSbbV9RXqVox61ZZn8fjCW1Hmyn2whZeqUDoR9bGefi",
  "key21": "2f9kJsfmGu68XFPiGSFrbAsLLXDqNiTbHVSmDeAcBTiCNNvwdqxoW9MRefZJgAFP8p7UAHU5FLFcoZCR4DjBmHMD",
  "key22": "5AmJpUTYGRaPdfyXCJ3FaVWBT8Bu3D4ZV3fTW6jXPzoVUugvYyWh7LpEZNdAXnW9N4tmDa55dU2mDum6d1zqfKJr",
  "key23": "4C3kcQK3irHxJ2HZcNpvc57WUxVGcszQN6H1vt7ZqAB8sQk8A3Co1ejgFGvV4hc6XkiTH4NqMA9q79ZHPaZXFUVL",
  "key24": "2rYhuwLAZtgEGxVjxCL99He8hPQRspDLC8xq53471NqJxXSStxTYQcLYFccKqpXr1aTPQzxmCVLsCQnebvYGaf8F"
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
