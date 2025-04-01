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
    "5Dds1YnwUdyzL93EhyvbBNAH3wARptS4Q3cw5xqK2xCWoKECL2614eykv3MRtBfCsXQUpqjD5Mt2Etdfqf26t4wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EfT4qww1uxS2q21FhJhxjLdq6smSfPXyFGvKwm9pFUR4vn19fYyTM6FzsmyHDsoEA6V5JQBqqvUXHbik7WAHunD",
  "key1": "7PHHNL5VHjmjNRKESbSGXttjaUPGsGLt3u3RpqnBTaHekf8qteKENxDZbovLDx4Qd2i9mCwbG5Wn8HWEu4DHaGB",
  "key2": "sq9qEi1nm29PwmRvsoJHBdwbTGUfFgEb3H3ist3nFa3bYxXR9F4cEAHypc6av3kScpgjAKSxSAwHMspBuJsMGUE",
  "key3": "LX1eDwWAschFy4hyHVK5ERTfogQhYyZ6RpqxcxnmDoGTHsTfhjLeyCgdJs9kLVgzr2VAwTcFDuyLaLaJFZk7m18",
  "key4": "5aoRMPDgv3jahn9KRw3a4WBmwAaJvsvsWqnvV2Qpiuf26aY5nrHuij92j5bW184hHbQXq9FT7pAHZ9qHF8yBBjEr",
  "key5": "3rEdvAQsjHJqPCVM8scDCscUgfhVtqfceYcKYhnvUYjffCvpLEZYiuTcAoy5TEwuM1uSg57GaVcBaNi2CbuZ1BKy",
  "key6": "4NCr4PBe2RAQP5t6WURsZ8a4H5BHX8yKf767Ww2VtyEokM9E8YxVj9ZuwwDskd48coeJjsS7L2VRCVksaKvLsRQK",
  "key7": "Uv43aHrzQ3zpZu14w4GD31donyr5gA8tkrvM7TMkThh9ngp93b4pFGENdZV88Byp2ZVLPgo1NXWnwHJmqJfBeiD",
  "key8": "3xHJHomyS4gA2oFZCNBpf5jteQWqa4RLmgAL2RSa7FUBphM9SQbjR4JixmL6roUxBTQSax3AGXAvANdd45xgHXzM",
  "key9": "mxbFWmk5s1bJ7FyJiPqpr76dHAM5Yzmhhth6XFr6E4wSoscst12fcQSvasxv9t8QwZseZWgYXWHoNRUaNVDuduH",
  "key10": "4DKCXGTGtKEp3S9ehzyRXkwXvm3gpmCGYh2v7kGb5QpWw5akWqU3kB1pzhsA4EgoYGjNa1yQ466RkeKFJn6rF4QF",
  "key11": "3rMmzTMjKnjiyR2o7UwxruofLVK9CgHcxpLMqucnu2rtZQzYuPbS6ba5fDCVqFP5ppHKPmvhXb9P9qE1GxXnPe17",
  "key12": "2SH3d2KpQiYoXr3NEzBPLi1x3yFSnJhMTUd9CcbYEZ1m4itb5H6PXUMjKG9noKHUVYc4AAygxXBbF6PsGdvb9Vf",
  "key13": "4g5eNQPWRYsg2gKgKdTeg8e1tk71j1hXogmbdM4ZXKzRnsgL2f4bjwwDyMhhT1L96sm1kqkEVWgSFoF2c4pQY9oJ",
  "key14": "azuHU15Whk91eDaSF8G3j6pLqwJvik737JNiRfDvahVhMoGQSfgmbULur14uPWYbRTKaJ4Mx9YggSmp5YtdDBnQ",
  "key15": "575s5jwMLMWosrFSsfDYPUSman3fU6KFHHuaxjaZ77pWfymp7PBH87kMbnvgHTaL2PRJ9HscopSXEuZPtUVpSV5T",
  "key16": "2Rg5xtndpwrtTZJ8UUzcJumJ9jhXfF5NkoUxwbYG9qwz36udodxsFg5i9K7B4qWApC3VR3r1TK14ZH4FnUkxjbcD",
  "key17": "4rZqFroyiBgti8wXqmGFU2ZYiVwGRiB3b9FwFuLqBXp7ThFq15Ew4MyNRfu4ssbj6dAu9uYsFcUr7YWhDXruT3sp",
  "key18": "3Eo87j6zPG8FfoqfdD8UX2nopkfhoWSUkKVAUqFzMDaZL6Jp5HUs7Pz4ZebaUoJeLmzdudt7HWUbvMkofeNAXMK6",
  "key19": "oZWPiAEzfYzKbvWLwawTc1Kr543hAMQU6S4QgJPWLjRBDxzhgHYYjX13RfNKZSA1kBs5W6PkvUwPbFSoKMPqzh4",
  "key20": "5p4W8tYjFNQesstfuC5dfmD1mhB7oPm4ixHGiFH9VZMRFkg9JzsNzKWHWnvL7Lq9Jn2x47KRdkky2jqFXLYdoevy",
  "key21": "33A2z2EzMNvJsKm1Mcb5NVuSJEEk5gKvn7nJL3xDMZtsKokdJx2mi4df29i6czMYR1NyqxTjw5gdZEVN5nD482bj",
  "key22": "2oPtDHnge1kt6LtUU3Ac4Lt1nTeu8MZaLXHiDpebd2qft1QkKNNMyCkMJRJab9mUWLf2akZuyuUUAstzVETyFHdz",
  "key23": "5SKpzUXCzoLB3vGqRGHrwyjrj7GJwZM1SbPQXo2tv5coAmyi1MDq69PywHFcmTiz29v9vRM1DUXfTYt5MwxXqsCd",
  "key24": "24cGLKb5oAdKhspeyZ1tBetPa81nFGy4NQVuqySNGrZbc35Y6quZw5U2trNyjVwnjsRKpc3yyWZkdYbeUpqRuXJo",
  "key25": "2LTWXApr3wc66BhRH2PYTrLQ2g9LS7y6jFpMik8nLxUWQkuxGtzDNPwhhf6yVkiw3ZEKwEriJszwP9yX2NATEiV3",
  "key26": "5euS8XvpRhiWYsSY7uN4jfCfRKoM5MSRJGWLRWHfzga9gpcsHaqroN6unaF3qkuRcYfRBHW12PzJqzJycM5aCn99",
  "key27": "4rDMRvC9hy9CbCdjC1wt3smbUudvZs7Va8X98atkag3AzxLY7AxkTLAeFK4hn1pQhVmaPRguH68wB4JfihkcXm2M",
  "key28": "4UmkK126pLKooncomAJq9E6QKSJUbabwjVE4nWSffkEyGLJWSnFmHPT8d6bJkbHmMiDCq1uCgbatJGCgMVMqgEVe",
  "key29": "3kiq4QrnFYpvT8NRhUFCwKNksjYAoe8xssPiv9bBd6zwzj2SrxVMcTxrde8hSAbUJ9U1E7xvaTeriSfTqL8Zoepk"
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
