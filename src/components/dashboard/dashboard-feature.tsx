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
    "3D74btYGK8ynHtaGaRFYU2BiA52xt5KcFip82qGhxjV2rCEWHMtWLmcyahLSJDRFjHkzkQPxr4TrBpDNDg95DTeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nrda3886cmATPhyNsLYwi6gvHUS8cD96dMjasZ85PNTHAE8yGx4wSDKFyhadCADjZd6ZJMGrZStngTq7nxaJtGF",
  "key1": "JNfAu5Wx6UwSwALfUNzQkaCvJDWqHTgj4ZVceYsZ2Fdz9tYgUWGrqBma3Nq8EtLWMSea6FbkVZQG3yrHDU4AbNt",
  "key2": "6nLMPgoGHzeodg92iXHxi6twv1fdcoxErU3sYEFUpqRqQXUzLisqvtJuHScuXWjPcRnqcXtyxYUVaXcXrcnaLGW",
  "key3": "N3cM9N9sNWtFSHgRic2ode2FdeoAPgvVkiBBGmbycwHN7RVa9GLDoqtPnxLSGSv6mswzgSfpg8Jss2nRJkY5QDW",
  "key4": "Ldtts37gNXhLZGBdEvDHh1hZY3x9ARDpJJiEop4oLS6Y3Ed9S2enMvsbdKTNsKmAngoy4wXrY5ziCG8395uktXC",
  "key5": "2ftPsy5kL55JExDXZTBm8ZNuaRRGWCoXnVDWT5Nv5P3bWdRUZ3BHt4rGJu46FNqx1EkvbRQCjAnQzHd6kLekWvWL",
  "key6": "VnNQSR2EAr2at1Rb8gRtSGdc6EH3srfvRdpwS5PA3Lmn3vwjycLKPKa3adm2UzfANpiGa9kk5hrsM3HeoWMHtcV",
  "key7": "ysqoAXijvCnCUxfbMvy8NMQDvwUbi695LQFwCGpijKetU1FRD9QXNNubm5Tvbn3KhVXvboG9h19c5uQTL9XrcoU",
  "key8": "5SrjWYYc4uBVJGfcNnStofQvfzs67jJXU6Z1CZpXo5SbxcVFszqzfWygpVkJiWauKPtQ7TMBMgZXWH1oeM829QQT",
  "key9": "5GtrQ3z84WowfEVY26uzrtKw1jkh98oUDVFhQgG1LZ7b51Bg6dLS4t58TCW6buWRFidAukLtXi6oGq2RcRzcAvBP",
  "key10": "drHcgZMVq6GRN8DdXqAScY8ZWeH8A8v6cbMKyBrSEK9jx8Vo1xkxkPURrx1aKoeZprQxzU6TvodgDjPbXGxbjAW",
  "key11": "3PmTRceJZ8Pz32eJsrAYaQ2sJAjjDxUv4mfJqfQTACQz9XxVLvzD7DnSqe1o68EKtxAtiv7kCoPhhDhSKhsNNDGt",
  "key12": "qANXXvj14zqKKP6hEZwZ1WzfTfBjWFysh46BL15NRSBQe6ZqrDpzpFCJXTWLgaX2m779EWaEgUjzmHNwMgfe7pe",
  "key13": "3HduhdDXbfFzdRoS2TZhKkC7E95nuCic8dw9Yn9x9mghRuEZhhwGZ7D9AcVMKAfxPH8hrTtSuSELRb8h4XpYkVeY",
  "key14": "4JvjZMEMG9c6tdVLz2vYtxmjevZgGjv9oRgygKC9EfbyCt3LeSioBYGpaQ25eo1Bjf6XiJCmfZkvhPbre2Qb877s",
  "key15": "4hrSiAeoSkKv3UYnm82GGJkQXaoibdbxgWHGgCFNWjf4FX2766QeJfKPiZ9ognvhMEXKkTUjVyihmWXUcQC6kS2r",
  "key16": "3Unfeonyoov1p9WkCnMuAjctoDiYJTBX5FFsevyaEDW2xSVK8UrzBLJRjdJ2NRtmNsmMtPeMEYNMDcnShgWVJ7dS",
  "key17": "54916pcKDVQhreSvRPFTNXUiBENsnD8abPXkCKM9HqiwuxFMCGWSAknz5zaYw5kcuBCcZqBfFXmsAnS7Cy1aZf6o",
  "key18": "3mQraxtrVjZcLsyYrCuqm5SHHYw6Q5WDNsAA7YXBWUW9XcfzeygbEFdLPDNf2U8tinaak65zGt5YoXxVze3YVgeH",
  "key19": "4kszYF9rn83nwedUv3McYPbqWDNS4kRHgf3mggKYbe6BA1yexqBpTx2U2B2b8PwWrGNjjaQgKg6qWz51ZX8MzoKi",
  "key20": "3tjunUL4RXXYi8vaFpLwiHyAnXc6b6DorgCX3ooTCeTte5nh8LfextHHYj4HYSfuYZQqdi5HGYw4AmNpQsjQGqmC",
  "key21": "3h5ptewACKBNykDcA66pTZtmy8pWZFFguDhtgJsQiSMG54kJcgMSGeEcb4P4XvvhpimasAaYjwhnSdB4MZeJAeLh",
  "key22": "Lm7TtA3bTmpv2xW3Ad1RsdQ4iakajZDYuoHUotbEYCURVj7otKtftA1cGgjJippJ2YaPZkbcsJPDbofZT3JPMhF",
  "key23": "65SoVFi1cMMWcwsCaB6rPEyK3S3PqgVKN7DJYJGPCyqYGSnQCEb2Z8k54rSzus9WSakexuoQzTcPcCR2PGEvUARV",
  "key24": "HHsiofp6VL7RZT7gapfJQCr9mJsFjrS19pUUFsWrhG8cNvfE2zz7BZMWDz6sh2KSiWscPYr5G2RHf4BtzXeVgRP",
  "key25": "YRJNF6CEq9KxNZHrHd6Didk189t69scm2xUJs3Jo9Gjmdg9zM1LxMrUUPecYv4EpZ4157Jq8Wrh7vQNaKB5rTvV",
  "key26": "33fTkMoHCtnTSnzsCpWWU6AWRoFYrrFd4CC9nWHWBA3Qcn3xfZApM5YT9EPjXxe62cf8dHpvKyqzWGoZcsXHzq9i",
  "key27": "4jmYK8N7gmU6TEjGAKjHSiS8C8nVrcLv3Td9oeZEGJF2iWgQpa2JP7mbVvrdZQUHxcLzwkpiRDb3E8ssPXK35Rr7",
  "key28": "25D72Zn1fwt9E9dcTNVEwVzF1rGaKHMtfhLztsvodUzoyap7tijTcMVwfH7wt7TUrKUxcQyu63v71qhVLJW8v9VH",
  "key29": "FzCjUcXUhhC4QeWPYaVkvCqhYGsecqQHfhcrDuPfqmHa7WbAEaEbHjTFKhUvrFDZUvkADj6KhPZtPKcQ1aCJDRw",
  "key30": "38W3DZFB2aY4ajZyVXBqnfLAenbfRbieqehcetqkWdDMQPbDe3itvQyNkHdc65gACkRcVdZ2rXGiWtokwrZUjXdt",
  "key31": "sNXje3ji11ZKWjj1GeFp4rtenNAiUqaedChy2vmWLMtTixC65hbMETtVhVDxhHQ6qLy8pQaqEKc7igDAe1K3ZwM",
  "key32": "5tzBtK5eJaNZtXsbf8fGSKgXXQdqtYc7qY4f7CrkcjSErQmwzwHWAp2WWEnTJtbY96DDcMU7sUmArqm1sBbLpmWY",
  "key33": "5856CdzcHje2tMq8YvHRJQCCoYZxWkoXvTT2jLkxDjispbfZcmtfnpzrYmJq33r6fJziEMDkWC81idQQG3tPeyMB",
  "key34": "55bSRsicG2KQH3Ke318kX4CpxiPZ8PmawibiUqEKEsuKPXhAj1r49DXQEBqMQA2x4Sr1ePpaZVorbxNrCyt6hMQM",
  "key35": "5P1uAGfLkuQfhE5VzDeS36W4TiXzaWx4e4rTVKnsTkDw4Pr2eYiVM65vdd7fXCpxtMvMez5LaQ3keZKB9m3VVJNf",
  "key36": "b8h6JNaJwihahEnKnpYEUVVSdU9u68uBxZxj8yDRM3EePkLAhdQn9yPDfmGAkRKMDEeFQTu92dNHSfjdmwFpyQK",
  "key37": "2zMvvGq2bxCbcLcsrm44xgz8AAxthSEwz4CaXFVePEDDjfSe7NZFd6jbaefcfRL6PMYDWqSvH2sKAJPAjzxkbYps",
  "key38": "4ZC3jU1v3RiU8zfHKcynccxSzXvefAjZBonS7TcJtmRLKuajYWpNWPiBm3r2wPKjsVvY2ZHp8f2Bm5owu3JpjVop",
  "key39": "67HbjDWb2aVK5iwcJyzrhfDa2kGq1HcoxqvTi6tDKk2Q37TWgKuGHCg4xXxk3BTuVbeERC4GUYDpk2Vcapd1CEkb",
  "key40": "4QzksLbZopWP8ZqCf9V1YT1wm9D8ykj7azuCCSzFDNzZpvWf1YGsHGkPMCx6bNpKnxUkSrqSAD7gbEErpZ4enaYf",
  "key41": "3eW7dheA4UNoaMVXsWNzXpAqGHbpqqJ8SgLrxUsnZagi3DcUjsFRi9A4hdjwiUBce426h3W5hk1cycu7MZ3Kv1Eo",
  "key42": "24iPpYVzKwK5AwcaKuhZtaaDuavEi1xBXxKv6Vdj4GmWzJxfVQz1rHvpKAQS9kLR3LAhJ3hzy3wLs5RD7tF3Bjuh"
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
