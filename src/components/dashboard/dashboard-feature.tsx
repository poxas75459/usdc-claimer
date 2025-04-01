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
    "2cnngaM4T8fHoH6akKKAGB4pim9Bk79ax45MGn89yNNEteTn4ouL6q8FxBnfZnsN9K22cF13Zxfn4c6nsxSXfSS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZgmP2XCkKLVQKUYzHhJtBi4KqBrKU1mmKy9imcragXvXc6yFPmuYpTwWCtvzuFmBJohFm8UdBdGzXBTp3645aBM",
  "key1": "4FYHUgvVfjQfuweqvniUA12AeAGGg8KjhJruLg6jiq2NNF6VRYofbHGT3grrTL6D6BDbXoS67ydbTUzS69ef5ow6",
  "key2": "2x77SaQrJTwWTTB12MtNVXVo3YeaGtcGCSQsMhCMhEdPHvJvAqARHxi8Cu3KxfRAi9LgthZxrFwqTicBnwAZ1TMF",
  "key3": "66oF2mNXpBYe6pvPAg6g4rVEaD8T9AAGmdNikfjvAEaLawF1Gqv9HPpJ22zerkiwk1T1ofQuA6CvFivwrZPgJxb3",
  "key4": "3eYqmyKvviF8q6guoYXRJCDShgvKKyGKUdTdaJFd9vtdsnLEvsvhyP73yHcFAZwVT17B8UuZY9jQYkXDC543XQ8Y",
  "key5": "2K6PXjRW6iByqzk7JR7zquYPwNN3SEGmewrSdYwQhmdUaWZ4H3VHHBv1xMLnogb1sJ2GiyF39CCxkUJYeZ5r58aG",
  "key6": "64W9vgQ7rzBH7mJ9dyhRLCn8o6Dw54s1hu3zJYW49JMG4YEUpVZ3UiGUjiMVF9TsFDDLvKocRPB57rYtvpR4zZM8",
  "key7": "63JqJqBK1cFhFVmFUFGaQmM5mFQgBBcmxkCz4ytYfp15jQ9QFVWoZfThoi7JYmBHVHLsccxuqqRgcE7nY6SBg1Jh",
  "key8": "4xwDuhCyAe4qHibLaQ6rBiKubKnUSD8EuLBNsRj8mBZyhVffR4sizorGErfbp9DoSGuww86PCaETxuQ4kb5b475X",
  "key9": "55XwzXNx5AG3hVDVpBuwGEAfNKyLDWA8czuEyd1vUfLX2QcuSExnyCsebCkB4wBHjthCUjnHAFjZJQgm4Gm9Mdmi",
  "key10": "5vN3Xgrfp654dg5a3UJP5jfSW8qAPQRXDYkahiw8RG2UcQ6HQ9UMipnCWKRhnoHYZhH9V73MdEC6exKWrvHEdBHP",
  "key11": "gQ965zNf3Lm5iLUVa887k5xgjNHeLmjKid3uppp5v6t4m3SdtZ54m56qcz7n7bNao5BNYLzwBdpcBoZX11WD8iX",
  "key12": "2ittjDTLaBNnsKpaA8SNJrFPhBnv6eDQkFb9BB8u4k4GLHe3mnJBAqx9gKxTakfXFEAtt55HbkijD5S2EXwV18mQ",
  "key13": "2K7pUDPetZjRZS8ykXGzat3kY8awC8zZ68S1xQcRFyjxM9yTWeGRW5nJ2U51LRmbctFS1JBqsYyP8fr1pto8G7gS",
  "key14": "h8KBaf9H3wrsqkFP4K5BrPyWaR9APWF3AttrPysFkeYYuAEEn4XL8eTbANA99UB7nHepgk55o2TsCqAeKXRRpRk",
  "key15": "3ZNJrJSB2CwgAZFvmiaGtERdnpmh1LkreYTJfHNxhoRZG3qCveYyBMwfNmq7nbzK5BYhfBznzZpnyA2XeQxACb8a",
  "key16": "voHJ1kGb8yHcdxcB7HMG1LdADnfcnPCcuKePYsFzsh4FZDcPUrLVDGt1bwhuc9YiH3zJZmymrCUuByMTPBTBMmH",
  "key17": "KaVQPdT7LFJrZynomUGRPJSDExY83DDFT39mCw3tfYGZKqzVL2aXbo8tTcQfKW73h9zaZVRcn5pQ4Vgot2VJcNZ",
  "key18": "4mW8tUeRgFBQkNqNR2FqfRb4KGooXQmyYeGtmPFJ2PhNdNvYWz5v3k2aPEGX2AE377j94dok83WJgiUQPZiMkjhu",
  "key19": "JoHyGv95chaVK3pP6buPAHoMfkcNyj9GRN7sgFahDEkxWASm3XjvyrV7WZCoPig3dL27dLRZqKbQ8mvAk1vohGC",
  "key20": "2VfmygK2T9yrmLCRoE6BPAqRofCpE2FzsX4zhNg3orCMSSbbh87bCUL8eiTU8iV9L2g4mrizhncYyekdkHtk5Epr",
  "key21": "3bbL9JcLwvLD9pmQgnaXAX7bGjGXdzWQSZTPuV6aUNMjXMUwkRnJiUUGRGszXgz7gmyegUGTjm6VBXJSGLYhLM8z",
  "key22": "5FxWHRqs7HC9pMq6cDzUoxh7Ypzx8AyFiWAMcR2sqrNUF989tcybYpPhtk8wt5Sd1MezmJ9oKc9XJGAJsUGbcvF8",
  "key23": "HVGLYZZ91AAeE8GGQBF4p6qJYEf5hZ6hQfnU4ZtonD2Na5M84Xz8v5HwLbuQiE58ExB8bHgiGN4ntXa5YVzsCVn",
  "key24": "28G3eaY4z3wAnBRFhwBpXHNdCkehLfX8mpRYXraMpoQTVm97Su9PYcf5HT9GnwQPGAWvLA6GSWDsZbCbYotAJjaG"
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
