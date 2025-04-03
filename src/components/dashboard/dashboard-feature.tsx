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
    "5k8Y5yzVmWVWWQXUtsNfjnpGVDFu6YfRypvcWavv459udRVwuxbRj386U8szUd5y7WoXWZHDDBoHuPQNiQnjiEvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LewjxYKWGiQn9duqSWNTpDaFqxhochkdNgFVHTqkA4rma1EJLt1aJbbXH8scKytpD5ftCgr5WZ3ca5fJi5HsHVK",
  "key1": "5UfYamh7djy7urZyeBQxKk5kRxCvZeKDufWBEuMxkBmrDHj7KxVtixqfTnkvhs2E9u34ryBRgzUMBAZHG45dC5pu",
  "key2": "6HBC797jP63e4k6ymp76meaJ6PBUtX1j3CJ6PtQzvigD5mTMEfmapC1e21xfLJvwnLmqWAY7APprN9C9ppx2fdd",
  "key3": "7ZZoDqoZ1h6HvMNhyTry6qgJc5NjE77UhZkmedWk5B598aJjfBKqdxL7smF83UhRuzaUqSGAjUgyKDiXAyNcdNA",
  "key4": "4FcyVuPmXa7qxLX4pFRoUU4rEMtGpDPM3M6Tpv4XrCvf7kDBuwVQsVVot4nLaAJbGAyHjxbxnkEb9mfmoTi456Nx",
  "key5": "5qqmboAd8emTCXoWDsmSBdbihtcVAF5wAasfh8TP33UyxACKHFYnEVG2mpZNDPV2nP4dcsN3mZAiZAzWy9WJSMRd",
  "key6": "2u9spWdqjCUos897T3KMyoozfK7nD49ehNrQf6yrRSRyD3WzCMzgKodQ2VmpntWxRFsZ4YYpeA6fV1aSZrWsLUhx",
  "key7": "nDvD6sS9YBNBAqLSX5KaWNSoMfkyPJCZmZVawFQXf6gUkKGfkMcUUPfZgFDjKxn4ScCKF1d44d6dvRxYU57ZkbF",
  "key8": "3Ubo7Y8NQ63zcJemHJNSb67YhGu6KVHt6VTQmXpWQ3BiokxYESBGRbeMmPQmtGbDmoghNQiYeTPqC8mWREKNdEAW",
  "key9": "2V78EZcvCM89SR4wrd1tGY8u67BAKBCJ4w4CTRrJwqHN83LaV1xhW9Rh68xRmufUKAaEfkNXTY2t2gkzmb9HUdwS",
  "key10": "4P5S6bKZ7dAXRrA74EY5r5aCoxuJSUFwXuDKt48AK6U3i8QGd6o8LeGUVEVLRkgwBsaTC85haZPhyoFKcxNzQfeQ",
  "key11": "2WjS2ZYnnsUSk9t2axp1b1gWErDtTZbQ4F6gBrr5ZjXNFD6dQc1vyPCVjELZzk2CtYxzFAqkS1tXc82pcapNHMkg",
  "key12": "43WfzpW1cvt4afWGPBp6TVcabry7extEHvgRB32CLQm1Tttf5SuK2BUsTUNgMPKZzk3guaXEA4Tb2RsgRnTyHriq",
  "key13": "5zBQ16ZnStgYappbPjp3JgE5McPMtqDxEdeEtbc82EFZQhyGVTxbTaHaSN18FuCDzDvTTHU8XdF2yarMBS8b5ykp",
  "key14": "5nB4LBLQjzEhxsCJuXqP8zBVYQXs82rkEEkieYJP7SfNhu1LXL2kopySdJ7YZXbeK3ro5wcSmq9Yw7KMZm9cycjA",
  "key15": "2fotUoKBuWgSRHgERkLLn8kqjqz6hus7tKU4cwGLLiyzcyM1S76cm8aHw3oQCPQekWia8UJVdwEmMi7iJ44A86tk",
  "key16": "2jg4GBbNxcz1k2AczYRauYi3kQPQBBXuBgy8QKnZWL2xy7sUGeNUq3M4ougXdUnVV1LmJVDREJzsLogd4Fmc6Key",
  "key17": "4QhpXQkEgtGSy9Qsgr2eqdvLUUPHK3rVvZdCjX57gqKkc2G8VPb589uijWc8azqGZAR6U93Qpf9wNwSjSuvPDPyP",
  "key18": "4PiQjaJCpwFfVvHtat7oNge2J987PYVNMTqFVsjfLpjfByqAj1KqSRp4tQLAUyK5rWB49D3WQ9pBLDYGvCohdM83",
  "key19": "3AJCWacEdsNU2jz9XxsJvnkMsJDrZUaHPyYPBgP2KjALN1KPuDx7khL7n8U4hqrHq3GmWPuewwVpUfWP39RyvLED",
  "key20": "4HXC3dzvFDP1PVkSQn8U2nNFxQAoFFzFC1sKrVEFGRSFwVKnzRhw2mFNhZX6RzF1UZQ8Vd37v3j2dNH8BZQACjw",
  "key21": "51zHrkmd4KM13CpsCNSb4WNUytVFsLcjBvRzyH6PmjyrA6p1zf7knSmcezvgZEvtMJVKy3kn7Eg4K4UaCHhjSasQ",
  "key22": "3AfhxWAENL5gjcXDpSKofGWxRjmkEsfzfd9y2YXAeVWXLFeGkFiMpQDHAfcCiV1XoXxuSthM1Eqhf8972tHVxcLE",
  "key23": "3ohkotLpQDX8CQkgGw1RSCi62kyuscGJYm6h4PUf7GhM52yXFipaTkyWoGHHmxncM9eQCcpgxLn4saoED3KqjFha",
  "key24": "3aagrgzC6rPSsdopXPDa1dH1RYD4pDQbg1VdNpK2yb9DKKW6Tz71CYpK2PwyMnQ4srJDHrvaw37MNNpxsF8My1yV",
  "key25": "2jafYaKHRDiGiwcsfStdubMP8xw1K58PJYMMG9thmLXdQHvD1xYx7N4zRjsHS4S93YRszchPraW5DGH9MNTKm6n1",
  "key26": "2FxxoQiaEvxFM9moekbVbDwRSuCxYU4v2uKNpw2YpKdcMBPdcDPkSUossp9KS5FG8S3CVhdHzCSn1c83UCRxRyn3",
  "key27": "4gryWefXh6nuUUye8kKXwjYkspxN87aKSzpzpAeLhRA4YJXv5vLAciZfeCMLgnaNA9gEoeMwjD9sJxoCXX1juGYk",
  "key28": "5p2PnmLscEqHNjZfSk9E1Nguqw9ieH5vXyjsxQC4F3y6FD14hsM4aviuVbLVigTKQHFGDGKhc8rfSfVuXn9LyLZD",
  "key29": "jcSttPNdTvJvGBWqy2KCVCokLne4gxfeycA56az23u9fvp8sq8a3H9RDu58WF5L1CU9WecF6sEhHgsXBw9aEr7V",
  "key30": "5RsyzUBTfSzMyEbeq2t5ZgPLPdap61fPfPmDpHjuU5LQa23uvmuYLLLK6vuMpgDZtxQqFyADEqirad567C3YjM7b",
  "key31": "2g7kyB1BQsmCJ9bsPzYNvGkfYQUv8SU4A2JS5UUZdQNYjB2kqPqszBKA7j8knocNn9jgHnU6Y4sLgwh3xbkPRHQx",
  "key32": "3EmPb9Ur8BStVP3jSDJ7XzJTKAJZeN35bZ1ofBcgwToyXTN2nj2CY1d4bKUXyxEJGQTnSKmffKUFQHFJVgtPwoU",
  "key33": "66FSkXsukuBHmbbsuNeQtxVhgqSfca8DmamL1eyUC43Jo3YnjBWvWqQkq6m873eX16GZ7ca3nPSombmsxJUAA9Q5",
  "key34": "RSeQ9TSUsp7QKmLeWSz7fBKkiaeqnyJ22gojcdP3PkqRAUq6YL4Z8Gd4iYtmCX8UNTVgNSFPKKdxHorgJkR8pb6",
  "key35": "58MSmYX82JSpXeJEyqd4r8tHjBR8rLYfygMwE8FdskDzWqCKDraDEHxj6qmiv8SNWWysw9soww6Xnh5vFucXvJQz",
  "key36": "65vF3bZW8NmYApmSEV4EPyyqdybaqy26qb2iEWpccLbHMhYnMbZFG3BmEv78uApGAd6G7d7kxi73yY8jARXaP382",
  "key37": "4j7AhU3orwros1exzCbjH5FW5ovmL5sqVSTcvX6wwsV5yuyp89WiEGgWekqUgTYQXBELu4fsizHoYvUpV6exzCgj",
  "key38": "2EjQRhgEp74fjcJqJwiB1mzkJdHnReqnvXRnuewzKhcivoT6QxDWjMEfAkrt3wuxk15swzAsCKkBRXZkepQ2YnMf",
  "key39": "cyceLcA87CmBSUAzXDQP8XCNLkecfArER9DCarUubkLJ8Vg7wP32FXetZJ4veNsvHnDiXBNFqaNBuR8qDLy2Lgx",
  "key40": "5MGzWDRscPnkACBCzrZp2dBtXpEzAcoVXAF82UCLv7oqxMRavv8YEp76zkSnNsYAmJWS8G2t1DUVjqhEZuCLPmEu",
  "key41": "9yE8xmBVERdmZvBVRjb1N9dqrYN5arZuwjTeKTAFDRqWCJQDdPZWW9u6nzXdK8gVMWN3XX71VtYKFFz2fosZKTg",
  "key42": "2PKiSZYdzdrLCJefWSRsCtMJQPFoL4jMdzTADqh8DK8d4FHbLMQ6yZGmUnhWV2JoynRacP76bnpsQQrW6dUyN9wx",
  "key43": "UWaSz25gsB1zmbhi3Fr4msqf31YNHfZX2yqP4YWtrX5vkFkdiEhwqZm2UXQc7ZDnqKXQv7Zn3LFkHmYqw9GXjHh",
  "key44": "2pnUEdne87HjSbMnXXGjqufPiN9cc7LFhCPz1ZZ5dC1UgDYHAsynacEyXquDujNZ8Re6NQSbfH2icCEEjtXAZHFz"
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
