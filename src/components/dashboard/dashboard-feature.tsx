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
    "4KAoGBUHZFPy2w4eLxPYwcX1vqUorB3i6tVteFNfAyNQKkhgzUuJjhgTxGTc7t5Lzy6UvMFJjwUyMwtrc1siGQup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HcwZr3q1bbAeTSsNu6cWq5Kx5ra1Dvx6BJDyhrZkRg11T9jr6cmyvCWNA2Ld3XjDHNcKnYQhuDsu2aM3BmobrCv",
  "key1": "4E68akWcP5wqxn9kCzsviqVh42zQ8puuVnbQhApVLKAfKz5pXjox9ABNDV9g6MpJAzyWQDwnrsomGHDCoJ5YYbwq",
  "key2": "5RdgsdUHsJXVzc8hcdPFdPq6Y4iyQcxJsNXQDn86YXKkd6nB5SWQtkCXDBsRZhFxxKQtraeDV7JLzXFGjWbxk8Wo",
  "key3": "27ZdjEUB8BtpeRvzxURFUrASLRRY7oJrdnJ73YGUzkdEkUd5QNLJqZb5u84qkzhcnuH673zC8Dt6Mzk9916UkmDk",
  "key4": "5wCiB23YYMc4aZoKJz2LHWswvty4UCVrwy86rULsNANG1A5zJDd5Unwvt72oAHtoiJd9tGxHk7V2sSJUA6wcuJcr",
  "key5": "53pGVnz69cbWEXAkx54WeRsUNqN8HRrV1U3StzuDbTG66xVxXU4aiqTqSzB1Qy4D3APjh3GyJeR4jSSjZZJ31XM5",
  "key6": "bKPyB7fpZujfCRAUZSfTN4E9nx1hWhsP8YWkTMnr2GoQzjapZxwdAo2ynbg6VfJGPvbss82qyth9VMgVi62Y9Fp",
  "key7": "73Nmq61sorTsEx5bY1E9nnCkobiUM7immCCFzLRxSkP5Na7qS5QsJYH4DCniNukAkbEJYmpPjP3Z35QGiNAU8sN",
  "key8": "4QYx83NAfg6CRfLFKpG95YErfDM2DnXu4m6r7J7skP45aL9PdbRh8MDr2oZt7tRbnsgehMpegbjgd26B116AywHj",
  "key9": "GLGLdwEYME1nnKNpwxhf4M2rF9U6PV46ykhSsQvX5uZEM23bYTVN4qG1wPTbrWs1t7hUkoBc3e7LXxm7GgZuA9D",
  "key10": "5cgXd1qVzAL4Zv76rSQ5XFRrd3DtVfXqkedNdC1v3kmAQvUVub8GnUWidyrJEyUj2sC46NdFeXpDVYcHoX8wqrdd",
  "key11": "5a7MwxpRpykj8M7SdtAPoi6x8cmMHyN2r8wJHiiQLNjoYd69RUqMEz1Jwes5FFY3YbFYCLZPpmFGA5f6CDo4JSVQ",
  "key12": "51UYMzynM3s2LJGVivXVCUKJvLj6kqLQ36xsi3V3b2iEjQ17QZ3AZvjc14XUzstdh45m1nRHtbx49qRvDLvWc7NC",
  "key13": "45uDoP8waLgJ7sBpfzrSVSL3ZEXqvoq5XntixGNEs7XsxzeNBXEgn4xCn3rsiwFFc8zVrQw5b4CLBchKEX6iVeZw",
  "key14": "dLo6K9arpiRoTEgYXaGeZkY3UP32n7gYfapFQPAqaJ27JcfBmcLqf4MHeXxLT7KEpixe3UiWssk9zuC1f18jj4L",
  "key15": "4PU1quZ1H5r4TKpEQwbC7XrfvQKYqfnQ8kivZeCQ4xzwYWCmEi4R3TGuaAeRymajKqv636Y976yzZ76BDgqnLu6a",
  "key16": "2ujhfDp87D1zfi1hH9DBHch5LEdupB5e6Dczs7PbJD5ATSswsPT68bgL8VDvVzoLaNHSL4GaPzd2QCeZxXsxsHwi",
  "key17": "5XAU1jaSr5hPoUVAgvi4VSTdgLXCXxX7SzywjoSe1oTxXy1hXARk5JcTbvgMnqRZ2cMrxoDQzh2yaDAt1xzRRVYg",
  "key18": "hsm4VYHbQU3VyDzehccWwkauU2TjsMttaRV5bXWJ7vyk32F1gbvvzG5teqoNQDvBKCurga6e8uMZfhkf2Zyg2we",
  "key19": "L7Bpd7nrhhfcxWug4JgUBJekzgFaswMGPSZMhM1PMAW4P8DWrkaWgfqFiXZUP5uW7dWtP94TEJNiLfcNNpT1hFc",
  "key20": "8puTrA6UzDvDe4eXWNjQ5son1nqRxYUHRd9jy8UfaH6ZwQSwNLQKYN13qPjy5V7VztZGGTgEq9LEuotXzTdebWy",
  "key21": "5hQW8G75cRLjkR6pXTdhFcRfh1uyLzMMg2rbFivtfA2wz9Mn54wPr4GPi4Qaed1JzGoXWzh7k47Wy9KxDGnENq58",
  "key22": "5GN3ZS5RKunjoRbciw8kZruVP8FhTSi7jk3b8StJXfQv9aDBpcbPSBJ5EiXTGzKNbPueRVusrGNw35gs8Xdt73vr",
  "key23": "4TRRBrJbKFfVn84csYZ72E8SWcSkmcgfE9yMT7c6D3wjbvPEVu2kgo77BxJnSLE8kH4H5Gi9Fp89vGC5CTYGusDw",
  "key24": "3XX6GxWGbFXVgUdzXPEdHC8kTRkH2MZeakRSSktpGYHi6vy1K8A3gedkxTFSCzNnSQ6w8jcuZTJ8PbrYLGFtUGyZ",
  "key25": "3MyNVjgJaPWbNN2gXia8kxV7yVfrrMpTnMFx4aYUskhGk2hhWJ9fMcEBs9Y4rwj4iyk5D6hr7ajGN79PjsNkZePj",
  "key26": "5oJQFdjAxu9V3kwkbx9HcC88QSQNfygMr46agNh6a64tcvwCUtUiCrKXQ1RY6bCsP3iyzPHf3JQtVTiyyHhPrqPq",
  "key27": "FTkx4rfBCvrCsFrEdvpWqm9H3cDyppU2P36Mzd2dNsbdERFThunwXD8ZmKfXtoxAszuB2GDZAa4iwSjHRb28Ps2",
  "key28": "2VKgaDiFqbwFW2KpskL9vr8xe3hJieLKdDSC5DHpEcfMjcnpPf9eb6PoNa4fDFgBpC4BsJmauhHKD1URjrfNi267"
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
