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
    "2vDy1rGHsxuWSGmc4VPcb8XcTXafAoH2hcD3w4wEn2vqviqJnD5ekX4TPWa6eQ1r3q9wqsrs7PzupnZHkBeepQ69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yMiHBeHx2icQpiyk61WLq7Q69DXq8mdWFde7Ex6mDiYUiksUQxxwsDcvMuVHZcAGPSWLTPTCLNKuVhbUeTNAv4n",
  "key1": "2UvxUR5DW2u6kB49XTTXXFy1j797fkq8tqjMKN2HuGH2ZTxQ1rkiGFeHzNB7CqTgRnfH7jFsgDtALBJFr6rHm8bN",
  "key2": "38KyTmYrsNdGoUfhxzYZVCApByX5FSdkHBXWxTvSwPgiuFH66AhzVqDLLkNmc8sA8egmzWbKy56rACsf7R7V3F27",
  "key3": "616rpQFKD6nSRLwjurWmGuXdPDRAbuY7thYHLejH4CnAnvtmM83TtAoCawXuRwRteN1eRsUpLJHQoX2feA8v98sk",
  "key4": "2wBNtCX6w7MaG3zhub3MxQhxkuzfxfjvbVKsRfTjqRk3HifbY8dP15efuccaXuMLucYVbYVWHC4qxrwsiSjw9HGQ",
  "key5": "246C2SYo5Dj6GJt3qctyuWpQzgDtpZH1DPfTJgazAvPUk8QP95E1SDLiHPGrErjYdZhQTYf2hoB1BYkWx892jdm6",
  "key6": "323s6VzTabaZZYAozP29r5oCoXuh77RecQMPa7K7Nd6axGJwu7J5m8pNYyMHyzRiotP5mocjmyVuGw5anPjyB2yP",
  "key7": "5eVEMCkueXuT7if7jCjAAksfgFPdd7kMd86dt1dCWB5uQ5gVyjnTaUsSTo9nuBCZS7XkuqukqQsTmX6VFhmj7V8v",
  "key8": "21iD5qSrdcHgdrGKot8UdpZT9Yao1HDg8CP14qWZXGicmBXqqLddGswWWuzV7aAvQLRvH2uvRMrtyf73DTnTWXCp",
  "key9": "3JJtpBtJL5911FrTLKirbi1EjeCvTcDdTwtRZ3WvDNygwNizMQsKJUPEdsG4XrncYVMGJnX8RixfU88uTDhLsGoS",
  "key10": "MghVSbJz4rbCNMniuPQBwF2MaDkYDp72pUTDGBw9fm9S17jf32HSrAumiorihimj2yw85b7VbtKAJmNoXuDYNnk",
  "key11": "5tpHV6ML7JM7cHVi1goLYx5PhcHUMDyLmmD9gUEij4RBNaKQ2ueMyvWYb6kq5ZQMgHpkmj7drK6NoViB3gJuVgf3",
  "key12": "4mreXWacJGpPrzcTcN24vico9y35JE6t3FVcQzw8pKUyZgpdmxjXYPkJDrCGLaDWh3PudrDsEnCgzpz44uRn5ZEs",
  "key13": "2jbtfJxi6FNpGAXxf8eueeLwPuGajuw2CuGSQLro4egrNpJqyti8QrQgAEWYCrxPDuNZtbrKWB3eWmwUk6S323pg",
  "key14": "cafbDYoP5aGBvSS8eZrgP4eJ4PUmWqJasmYnhEZpjuXgUGGFpxKRxqCgfF6BLEiNYnfZFfFzCLAvdLs4viHfHeu",
  "key15": "2VpDFn9C53C1bFkuj8FF7Z98x8wDfzBY9LXuerjYGHJMsNkGxZUqagjX69XozkYsZWwT9Hm7ewNxVGxPcAH73Kb",
  "key16": "4DoqrxpyYpZQVgLCvxdG2VLu5g5wULKF5GQoHXu1jb8Zh1x7NPJZXqRqDdPCAz2howCDXNKPJd4Qp9zj3NcSSrFd",
  "key17": "56uwLXMTQnh614E6PAyHVtxCMSWdi6wA37LSMU6CwpBvqjgc7m6zcos3LLSaXJsUofDVvsLHg7MLwiiqshBPu1xL",
  "key18": "wkTjEMGUNXkEibHFnb4aHYRrsTHKB2Tx778N12ix7pWRPFkHCeEFBhmSbtpH3YJZxNUqMSYpmUDnSkWG65EnG5e",
  "key19": "GDHa7GcLxoKnstdhCkiEapcUSzU2tDVPfJrSGCwgseb1sL7FdYqmDd3gyfhe7ytBAKBYVLk2dyvsowPR5jXEdQc",
  "key20": "2GRamNNmyyThLXK53sQqCG41MnM8aZH11U1n8qewkpn5KbvTKsZ9Dx7VqdNB7XsdoK5MpmRaHmSFb7vLMT61Q4dq",
  "key21": "2tTvM8vrmyBzXEXLFGzqMmmGg4zkm1pMoCiRZ92jygTBd2MYB4DGrmLNVRSS8juQS3P9dAZcoS5QA6CUPVHPXf9L",
  "key22": "5LKyfxDSc4RpspDKnF8i2gDg6bhsZYV8dipUYsTPF1wLjieH3UaV1KRnsr8VzPiHCBPJR15wt6PrCKd6ahC4mooq",
  "key23": "5QMmNDAAakfJks68ZZ5iqE3RhbGNVTGG7fT2EauCVNSJ6ucQxyVrzeRBjkFrSdt3unty1aYdB4skLdWsVLF4dFLm",
  "key24": "BRVpfCewkSNd7oS2hRqKxt7aXoaCjE3KmFnPR1WJ3H1JxMMKt3fKvRAZi5tmXGs9Ft9hxUP1g9LPG87niqhY3cF",
  "key25": "tK1NvwvDnDorR6HtypGsj1zvaSzjDovb2o34aKAhhkveZ19YJSBdpkrutMdeSCrBFd2FMxMMuvahhNi8P3vM8qX",
  "key26": "b8Nv5TyjgBUrgcWRJGjYJsihRz4DoiDJGcaKgheGkoseBsHAwwY4s46nXveU3rjmMHEcWHoEHmLKv4vGTysaEh3",
  "key27": "eufbqeRhRztme23fkwCUt5dw8dcbrLUJ5Q2gWN6t1aBrKpX2T3GeBXAzewNTu7YYeoEwwQ4Ua8fC5qk4yQ8fWxR",
  "key28": "qJuKXvtb71EE671ks9c8wYQJwH4sWfE3RvTj4k7ERUfHioWeoLVZTETtxu4wePMCje3kXcRhQDFFsrmsW2wg5T5",
  "key29": "ux5t59okYrz9NhaoekRD8QnwGNphLtKCFNP6Ln4aptyrzZaSYDuCrKyuhPdB1NXaxPAVqS32HrGkrGuYbmZaYRR",
  "key30": "2xfdtjenG7FSATLV4CeAoEEHM8SctDZHs1JDh9XfJEZG8PnY1jyFKq7pJkj4jwLABhEhwAahY9JQpWWz8sYugzLu",
  "key31": "2Cfgd7rvTJXH5LvUp8nHtWRfBDYmp3LvtHuoL2Z8qAewQyi1iqHxhoDWJNT6tR8da1AthYqXvePP2jkJx5FnzMfG",
  "key32": "42EDPXWe4QvmzSuco8L8eQPe92Ac2iUJz5ncgZfRSNpWwrF6DmN9mh1Z2Gr1cLRUjcPrtUsvhbqjFFi7YC8Dzh6k",
  "key33": "5FzB2TKDVrSgL9eLFhPE3oivSn7wxzzHdNYKedHq1XdyU9pZ75DDNz44KJ7T9svBcdnPziNMPgPv7HZgF6qcCk5V",
  "key34": "23HD4bbV7pZcruWGUKnkzG8DH5GZPx84RfedVuPgcfPPwushGfrWt6beZGuNZ1VYoS77xSqXhu3YidrbZ6C6Naoc",
  "key35": "56mn3i4ABY13yYcWuok4m7dVYQ7wy4sAWwPZDnHPy4wbVQYLW15r2dV5PwuWKVu3EDFXCCmZwCUjUT1WTFqZ6amr"
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
