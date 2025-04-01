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
    "5jNvzDjTWFPSw9UUNVVuLCsdgMb1BrVaTBqb76kcs5dCiRriSYuw9vLTtnUt2BmCgBZx8nJvQTBu3UmwoEEP9zUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ad5ThVfeGZPaNdymEstpzrLvaTVPw5khvQja1HdbMrdw4w2NMdXayizsmNwgXkbneXbndGs9hqjRYcftfjAcj64",
  "key1": "5eE9zxyGiyXbCsAxtpZ8RNmCBcvdNFagC6BAvkUxaLt7f3fjYv16iG8gu5mYhVsCF1vNASNspAmHBzLZ3XM7vPMV",
  "key2": "4PqTFib54ri8zmFbNk7bwYyQhYUza93DFx2BhBEB92p9mZrGrWt3m5EQvZuKNJP6xLDWPkQjHDss2Ey85FKzLXVj",
  "key3": "47uUVYqKYQKJjsnr4dXSViTW3y3zxf6Gs2yTZaGgiJktuUGW6hQRTV83ZZnaLxZXemq82pZ25DNZ6inAr9VXr9UP",
  "key4": "3apwAf3JFGkaGsM6zeurGfNerTTsVanMvDU2dDEKfN5emZaDPv5SwKiSyhxMhCWqD1XFdgttnDkXqEFP35tCpfXh",
  "key5": "4b8FB8XZKACASSyCZTBCTEbJJfWmk6byLrhQL5sthYeWipAJT3pUkciyD5b6c2357jcRvi5uTMtJhyjb1oiGBMym",
  "key6": "3JVcFnBMmLMNX3ME5efpqHdufNvcwEdFa5AMZbBWUq7eEXsFz81hPLYpX27EH3GobTTxa2ewWbceqMxw31Pdq8tT",
  "key7": "c4FDJMdNkx4V25Hndi6Sz3gD3J2cG9a5KcNrUBwyCR2WATno7s4btTqaksFdJbFEu5yHbzPDWv3YTgEFw2MBxbX",
  "key8": "4Pcwz4yzycz5zmvMsQ5Nyj8JRbvmNTar2t9FpppfMvDm3Gwa6YtmvPKqXNq2V3PNk67MhPyRFzFx1GhmqFyo1wza",
  "key9": "5y3Xm2wJHVAfgi7SVNmFWMFapz6ueUkuH1zAEJcdaACHwxP7MCE8Dtv3esnqi9fgNq41tbZbQFbWq7gEk1seBCT2",
  "key10": "2Xurxk5C3BrJgT1bZAdUgQZiZouk3YCss5ytjyj7vyGZbT39vNkLEFJnpZ9QCUvd5gbtSW7CmsJnzUi76jQd9Dyz",
  "key11": "4R8A7N9aZ7q9X1QDAnUw5RmBHARkeqXQD8tw8pu61eFi9usZT2uyskAMYgZZyQwCEfVnLcNBcZ1jzEcHDMEGMZYA",
  "key12": "4zYsNdrJ2zJhqqWUwWL5vUNbXmNrvpCuGFLawjyMZWKKJAHsziZUezdoyJaSwiNh9JdWrESpkkNHuvMci2tCYfJ8",
  "key13": "ctdWHfqR9WvjVs3anmMPA9MxHwa7tYJpwEitDuqCcmsRAPabNRVgjMnzv47EmVZXneU8iGL1DdE8yJuTJgvYUTp",
  "key14": "3vefe5FzZ8vyD8ESZ8fccMcpT7jCmE5Fe5EUp5corYvrEpshyBBtEZ3iKV4kLG9KjKhTYg5VxwxZDb5zH8AQ4kEo",
  "key15": "49fPMuM1uCEbn6qwoWVQWwZGpK9aj5bSfRkvuNtGEnmsu8BdU1uhXHmrAmB4wGboCjqsJRnNkJzLfQs7nsgNPcKp",
  "key16": "65UgResSb4g2YraMtP57WfqLQuyLYwDBHsjNj4JCsqYSrJTAR2PJQbNxLft5vn9TH3NrrZM66GFMfiYxAro1xzQG",
  "key17": "2Hz6mfq6WQKbJVMG7fniy2Z5kndvpbdZ17VyR9MAeKNhfe8Y2cMgkWEH9Em96nVaYxB1wrsBUhDmTvaMQ68Kq9D6",
  "key18": "3RX4iiwyneGSCcAAs58hDgAPHXd1GBCPuTmyrpC174ZPGbK33tjWugT41aRxLKKFtK5fizTZzQkfkWTQAc3aPgQv",
  "key19": "3d14VaJpu7zf3DXjySdafsMXwCxqrDuWf2K8qsFze28EqZRnmqZRgaQHb1KHBkV4YcHs9fBeusv2u53xMH8vvS6G",
  "key20": "4q5Ju5Wzt2mm1NR8FyCWpuv57m4dXPHWbeUBRVL9w1qjB5DcYfqYHnLcN6PNMDBb1VxdtSo4y3pNrZwa8xdcnFcm",
  "key21": "2phnwHZNC9Gxp3HiRgpAuTg3FEA6fSJM7m9c2mNY2pbQNCfqV4Ry1UNPSerwvL4w1GcwbHUjnzqYGSUahgTL6Nz7",
  "key22": "51Ks3b6Tw28emkaCiiUXrvtJK4NDBPbU6Qwae8pask2GgHL2hrzar9iXsZGUHc4Fw7nhp1w61sF79fngkDeQWhna",
  "key23": "58THrZusEXs2wxCHkjVVqDAyT7ZQQdNFw8LcLKP6Tfae63Lzsat1tdWHura4eG1UTB9Sn1S8YJaLBGX8b6ijrWvi",
  "key24": "2c2TVz9kjNNagjeWY7XBAQBw7PNV2bGHj4ETzd7fyKVGKK6Auwd7BPLeBxcM4u2siHjWMW1q96K6v3r8kyFrzTXT",
  "key25": "Xt1rxu62KKR5CBiB1arHRMs6yXYx6SkU1tAf8qxbXG4T4M5JvFy6GKBauz7X8hEpcKfYohfkJMn8yYvaaSWkrXe",
  "key26": "4fT5HzApd9msdrKSWTzg5AYQW3qLo9yTjce7ufd3Cp5T4kHzCpziXdeeGabdJayTmFMmCqahghkfvyAqYi6gQBu3"
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
