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
    "56qM1kj5aLLbJvGR7G6pmSUmRumzpL55AYsyL8NvEWVjrsNY4TKyomnuzCvHKjD4LWTztPeoW6iMTkEHW8FdRSaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LbMgcLR1z4bqnqfPRDWxXzqt1vtkWha2Rwjb5fyYMaAXhL4wmBxXCjv1xgXBtbTvFJQEdZHsnuXgDqWm8JwXZ4C",
  "key1": "3CKpCxwHAMdvXTu836XssjVncyihrNHJv3JVwM5odUQ7p41mEiouYcYBB6rbrKhCKU4bYRN7JH6U7R3dfewwymbr",
  "key2": "3FJjhXMcS6VEz3891w3r6fcQynK55PwieutkJ575yGFz82qnwuK41DVHUyrnk4CbAMB6uksTdqH9Y66R1hL9fPJo",
  "key3": "6m4UsGNYbQckKDvsRCo2htELA6psXcDq3nhFQhatHcdjSJ2L7qgAQiPm2swaLNRu5vtLHW5VMAVYUT6Q2okJc7c",
  "key4": "2HjP2a9eg8XQo99GAqts7m2hUtrFviTdD2bxjJWaAZjEzX41f6PAiKEoM4k3kVY5beC4aTMPGiC7vyYPHawS8BUS",
  "key5": "4EBEQsch2PQhCstM84TKX2CXXnoYf8RSGKg7arCn2f6u9yakBCjsFfRCJdma6FGZwPtF9vHK4GVGQhszaNuo9V1t",
  "key6": "3Ygk8HJKdT14NGRGgvpygaCaYYXaXRWMxKemvX48BvvCGNiJKKKJBHEd8ryb9u7a2hFQhDgeFPBoJrhqiZ2Se1xv",
  "key7": "4Q9T6ii5v2yGCBgBegYDG8skEvQGob3zdvHV2j5EFuduHJuzDkMpYvnMs6NsHuPUVsrZEQnSSXfJxEuvbFj2bven",
  "key8": "211ZWKR3D8jyW4bsP9f77B2MrFgRXe5mVtXfFkgy8NRywJco9uT4h6ECczsW1mKT575KmaqNQqbjFSogLTxNRjTd",
  "key9": "3mYvV3gXLi42nu4khNYb5okgh7akgHuNvAdBhXhvBJnigWSRyojj8gE4v2FnjY4fcKVgptk8epr7c4XFNV9mEeiR",
  "key10": "44MYx4vbjsQnb4yEHdS7D9PLasgh8xZtNvfkvbCsgN2ziUCe6FU3nJGgQAAGhmfLC65K12V8zyJ1dtvMN4EwfFNy",
  "key11": "2Bw7iVBrpum4xgVW7FsZBXcpWyUSQgNL4CiQhMo8taNtqgBsQanmpcEgf49Q8GyBixAHabiWcyVW3ybXbExvw3FP",
  "key12": "4emKZGAdhDYYx9ywDwRKxy3AUAPMzdjoBPQHN6smpdwPSzq2yEo1sbe2y6Q6FkkD9Da67v81daNoBSEpPWNXc4gD",
  "key13": "2p1ZRtVCQpcL9ATVqKZN4d8V76GmVC7op17Jwxn3ubRiacvTX2zQzE8ZxBH5M279iRQQkMsDpzr4qeWTZbQUZwrA",
  "key14": "4nW2VV7KLYUrzwEJn67LyFZzGBCGS3AWE69jm6Hk6hyaFvT2cDWVibxQSCjXkwxnjFet8XAdoneGnfp35W5wRCC5",
  "key15": "2nMyc7pnDFHaoZgJLjqUQ8t9u3SdUKsE1Brz42PPaukXnKgNbd5XGPoST7dNCifFMzruJPwcLpg8MVSqyqJEMynn",
  "key16": "4DXetLENkKaNbKR72M9N49iUhXBbrP2ojq6ufRL1Pwi2V62jFe8VMzHNEkZtpU8vudkfg52AWfi38KZfsUerDfcu",
  "key17": "2hrv7M5BATt2b7RXLRPxgneQo8tngKnrcHvtzKYMUeU2CyVhR4m9SMp7WJvzaHiDbExzfjwMuMkWTQJfXxkTFKTn",
  "key18": "4P3hjsiMphGd3WaQ2NN9yvhmWRJ7vUQRRLnxECmUGXMcvT94Li36SfvfHYuC6jXkVvMQhUGg6riLyD6DUPD2MUi5",
  "key19": "62BMdbtU8VPgDMLZHV5Ap8gtZWtaUPSZoNDWA85NpKfZMSxGZjpLtKPLjPYyXnhg6WzeU2kcbfMscfK7UHdjx7mH",
  "key20": "2XC2G4hJ5kMiEEkJF5wMLgq57hL7FiCMwgA8jjUv92gVSxTmEcfvK6cWQZ96JbuQvUGEZFh9Md78qJF6R4PGe7nW",
  "key21": "4VPB26RdiK7iYYu7NswkQYPLQDp7E5jaTJ9dqtkNPqKvZTV6bTH2Hqa6rC3SYumXgSTRY8JtDYaEDbmcPw8CDcYB",
  "key22": "2h9tYk72NiVSkRaxr48mpA5DZ6C5AU4iUgrcbW45Rfbj3aJzyPbboHy6RoDura8PiF77JcEhD5gFZay4Kq6N12yx",
  "key23": "4HjcEanzEsttE4GN1EkxSZHE4erWV3RdAT2u79eW2ocE3iyxUAn2CynfGMJBjPSELcSrgzNaeaJA8JvqbJ1zRCbc",
  "key24": "2mGarbLAKEoE7SrhHYitaarurWd5ugb2Ja1g4sLxGVTaYkwA97pT4aLF3HVfwGLBXSCscfjAnLtHe45jBpB1Vizo"
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
