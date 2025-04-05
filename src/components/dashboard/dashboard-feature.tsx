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
    "5e1xLhV2cqhM8qag8DsTApkNqPdo4F4rD5ZCCrZovYsfT8JXBzfSCWJhXLCLjiuQLavDdxX1yJjfkDkTEgv6bwCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gD8ae5qQGroXWfMLuVxFpfpt4bFQC8ZSfgcsnxu7XQ8KqGB8XEoCXQ9wK5mUMCCePHw5Am7MGVrz3pCh4eeoyLd",
  "key1": "2XMaEfPt4MRATgyuMRruqks7XTRRNgYf1d1xpN3uivZsoYp3YE4ztxEgAEaBFB5gXdtjqXL1dLxiY7YRSW4TK6h1",
  "key2": "5XLXhFSNe7u5NgLyh1pFR2RcD26tg7r1TDi2ZVaLgT6BLU1caZfdUA3supADhh2BaA9T9hkqnkRHATzrEPK3bEvJ",
  "key3": "3fGX9RSrLceh3d1cKgXKmtJPabrwnQcUN8cSK72CoNFgUuELNFAsiAojcN9b8u94ZHQDZooTARe6tBj6oCzc4EUT",
  "key4": "3gdaFpX2UF8MzSZR2MS2hdbNLwpbmsY2QPppZX4xxNN4e4Lwy1BSb911sYe9WNM9ByPpBRjLnjGQYN5NgXnupGGT",
  "key5": "34tJrhbNT3adNvr8ai7LvKaeVSutZGLALCBQ314tNmp2cjCkGbciF1TE3HruG5mCeuwoQm44rLxpAFjV6YxsuFAw",
  "key6": "gGd4kjTmRpghq6TbwBHVtPknfMLQtTt9eCrge1bZm5d2KSDrw2FBW8btsnSJgtYkzcE4nNum1jt3vuUiQDTvkyQ",
  "key7": "58uqvWShjf3vMsBKWc3TF19CyaFqfxY4f7E6o35D88SRaubH3iyWV5jHVQaa6N186oCZn28Lrd912WSh9vdnPfus",
  "key8": "3ZBjSX1tSWoDjW6vRs2YrP9KFfkF7Jacowzx5buwmTCcZbPG6EDRgzQNQKW4nZodqk7CxLZ616KUnaiTMbUiNah7",
  "key9": "5eSg4daGQ5A4VFMZ5PBANp1a11vbzGvdyoEqHcDKudLzzzgjPwz9yz6cJex3XHctoH1s4TSCTBszufgo2ftQyv4q",
  "key10": "2VhBUWijeLhG5Xg6jCcWYeECqCiiBeDt9hqFTML85qN5dKsNpkdzFV1BMo9YDEHc5X1zChETj7TiH4g4aMCQQU2",
  "key11": "44oP9P9zCo8J1FTiViTQSucWyxv2nvTZ6h64GRh3RVsEVaEPCuTWGa3jCLR5tuyprqKEaXkUZm7CQHgJyatJkCRc",
  "key12": "3Z7hYb4wUY6N5755nfzU84ErydZK9DSCf39CtkNDF65FyBvAu4hULgw9FKeKYmW5MPbu5rjmXAEaQeVwVLgCVu2R",
  "key13": "hcATxYYdyxqRvUGWR3eqxxDKYdBkL5XUG5WBEh16wU9AjZnTAkXi5pP3eLwuHh45YEB3X9qboBXrFSz9k3kVbg1",
  "key14": "5nf6auYwsCw1yBzW3qqsGPKVMtVtGaAtWMfgiNDGRfSeQVzwiGbrxn17ugL3ztVz5PSTtdAcBx4AdmSUbBnP3gqq",
  "key15": "28k8rKfV4LoSSwxbCvCx8mPCmq9BJFt2Zy7XMMW6a5iX7vvfQUHyJSR2fgGe7p7AuSv4JApGjZP58WabfgeunbfY",
  "key16": "3t8R9ZzyoDYkJK7BTTCWbgeCjrd4nehq6do1oVj47SnoMBZfDXwHKHd2xHPztXbBeL7yvWQtZrHMWueuL8EQq8pd",
  "key17": "2eaPHCwDjUNgQff3Qw9G2ma1zRseYNndoiWGP9Bpz7HXA7gapa94S1kRSeGpFGx6dXkbzozaHTp4xyd437tSexzA",
  "key18": "5EFzxUY3Mec1GJFCLkNoxHrKdyiQDcokEhbfZ7nMgNbZqfQBM2bLwKhxEs4y1pJhZURiNgN8e8XJZkQv5eaThnyJ",
  "key19": "4vtfdbT5BUpVD2ArFYJBLRbAkHro1VdD7F7zHQ6vLPW8ML7G9Y4bSqXjEGnzPDuYDbEsnMMXsdQREXRRiGzwqTYV",
  "key20": "5ehArtwmgaZokHjRLMMtVZd5EpCot2LvNU1nTR3KkK5GPanw3fE5puYRAT8BN7D4Hw5f8uzQhzaAQ1XR54NJ6fzW",
  "key21": "4fHPJD8Spihf6Emt4A2yaQQauKvbTDLuhw9oMhsR6pL4C9mvEyLb79quYrewdqVBxyLmf8GbG8z6Q8dVWYDWKU8H",
  "key22": "5HqFG4p8jsqcVNz8p7dNetNJNVV7zoT9s9RxghHNnTTBdokVFanjf77rYEtNyejuecMdMgVXfbnKHbecHtZGC5GR",
  "key23": "5g3vUiy7beQb4V4KzgGJVjt1XVsu75ejg1vdFbEVoZekbYXmyYXbB6KY38JSTztu5dZm7J5JsBKuHu5DnBUsQWrH",
  "key24": "5YGhkZd4KgFs7AqZ6qRHTKdTu5NzVK3khkone2w7bCQfENmugvej7Tv1qpLroF1d3gSirCzD6qjMzUfmVhHBuXMp",
  "key25": "4P6n1nshQ4BqxLZH3h6C3oZRQgi9XwQTpqsNb8akxh3wU5TB5e5cYzcJhG2BA8FTax9iSgrB1MKUDXFSfXfqJFdg",
  "key26": "4dduWmye2QXFhURGUdGiubUELKAtQHQysjMod7knfdEvVU2TTYomqcFioscvSKzgePhxiB8zVonkPTj6FBgJR1fb",
  "key27": "5GwWwL9i5EEJ3MFqvviRCav58DtyJJM52Z4YipK68i1xaFXBrKh5M5U2wvQCVTa8B1oHia145obx7pR7RaJMxQt4",
  "key28": "2KCtWqUr5HUTXSM1aod66mGJ27yo2L2BW3MVycsrFsKjD2LH9qSCUPEkxjTiaKNoJb1tN2iDbp4hyiE1Fcz8bM7N",
  "key29": "2VrCf4BVTqj9Zo6xbuP4Ky4o3gu2uPU1WydcBmzUsPC1neFPim9pv99vQqTqhtmjevmKc6EMuxngoAHYuK9UcZ1J",
  "key30": "48apZV6aAVDkaq14PeAKLCYZW5CYYqP8G1qdxUYBoqAo3k1uQbfcuN5kgoBvxKoSmVVA4ydD528p3rDgZQFug76Y",
  "key31": "4KHL2EZYqY3sYSSu7wC8W9ptxgR4HcABUpjdKUVj9nroaiHTnwCYfCyuVTnknx7x3a4U6dr7zY8wwyd2xmrpr9za",
  "key32": "3UWYBSFqsrvE8g7QPYnEBW9pwVGPeF4LxBX2ZzeRUdmwxouMwh6WBgWU5BrBjfm4bqRK7uaDnQrY2zWUm5XMDxB4",
  "key33": "8dzfQ1hmnGVYrKbXWc7eSpQTMiuGSXbG5o86i849gG2BdzAFtdZZx683eZRumEW6j2gSdXEL4x4tyoTDhdtgS3c",
  "key34": "5MY1aGSZTY2nFio27mLYpfK1xV1amUWwDu2kkBiMucetN1UoPeR7v89Y6cu7a5RUCbHZi23vJxAbDHCetzXYxVZ",
  "key35": "4CmyFzGfwTTXdxbQq6GsxfNMkwLUB63thUxpuvBeSfUchiuxZM9aBockyK5JFY7ag57D7T1LoFKmuuEcy1a5fHMW",
  "key36": "51L43jsHxQPLJkfoBh1Nct2iAWtbo4pGqGHQSLWJdZJStrPghKMLqLgj44AxXoHtcD2oFxjKLonCZbJcr2qG6bHz",
  "key37": "i98zh654sK6itHzBE7fJgeFisZConAtNjT21ni2pT14D3J65LbCVpuPRwk8q2QmZHnRB6uVtVeU7P74MBRc7guX",
  "key38": "5GcKGUFDGdd4GXBFjXusKR5wB5YyWyYHSbke5JzF1fYkJfM2ugAhBHda1JNTTrvmCQ5KzWbRG5zZ8YJW8kDdRGin",
  "key39": "3zp4W2Q9CNPKX3SjYG9mvWNDAQv87KuJhwc6m72Sjwb1WYvpXgeaA5PHUTN5R36idwN3JX9FrMFjxC7pgW9DYKQt",
  "key40": "VPL1vJ49fha9ysnbGVA2cuBrJ2F15pvMqC3bGoELnYq4VJHQG6NSzkNXaeEGmctAmeG5ivvhGoRcgurduY8nTCC",
  "key41": "2RXtL1YnmrykukpUc7U5nE2hfX5xbGUHhSVXqu3f2XfoudzmTFu1JfhCrD7kt4smRuDDCEHa6hmYuexfWJhpfT63",
  "key42": "3NwsynXqMBVXsjq9L9vpLBnLvd8wtDY5XetfumoU1zzCJJ4u1EQgBofEM9p3khVtZ45ePCpDPJDvC3QRDWFyTGBp",
  "key43": "3fa9FQxKRXdfoAnqXuajUkffBK2oYEUsXSuYpM9cCdHBNekCSXJmhiwUuzzjwMMkWy28MqHfbk7hDXrt8yNBGwbc",
  "key44": "4qYxJTqhxDHfMurepkrdyVRWasJggpUvoKxuqcVnMb96KaSToFvYTo3NU2bdCXpRGTDdjz4ApdjqV9MGrCGGBZcw",
  "key45": "PAFFco9pRBRcT3nVpwihhJgU3yWBw5AGhDtMVBXo2TmGDNZndTmrzFLmas4sivjDwNN1PfejhmkhqL5ioWPM7xn",
  "key46": "58XArZZYr61DWp9p3MVP2kUAD1i1sCF1kPwmGTteJcdEpjSRyp5DuVapHewdjn2DG5qk4sK7o7Qn6JXmqVjRz3SM",
  "key47": "3Km97AFABNTy52MJD3E3UfHtknyG7buqsvVSEabntyS3HHKPQ4i6iLUF4ZgTmLbHdYh2GLS9jbVZmH4V1xpNhAoo"
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
