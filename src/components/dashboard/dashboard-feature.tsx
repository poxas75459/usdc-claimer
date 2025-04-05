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
    "2ptta1xCpP4iJr5dRVLtVZ2M3S8o2nup5drhXZQrUpYNV5dUMeACSYxX9XpW4zkZ6A3tU1T9hfpwuYmiZpDPCnqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tAMkVKh77Nv98uf9gw5VGGcCym4nAvzASfjwNnxWbX4EiP1tRFU9BqCe7aXsrn8RCj7s2dbhnfJCLMYHCCSjncJ",
  "key1": "8xyUuJ6HQAjkRjoRT3nFnQLY3sVj4Fa39tZ7jFWo79iJ573qz9k7YDGE6x6GTweJntgUGyggnvbnE7hWwH4nKgQ",
  "key2": "Q3dmxJxe7xmtPn5NiPhiZgVkayWQpGs9nuBkjJ9fYf6GewgvEk9bCUYJvKkm3NoDMT8agW5tkrkGziULzeCNMa7",
  "key3": "5FtCfRBFFZHXLmRpfBxYYrRVFvQkdHw2k9Z1gxQqY4AhZvun7hGdPRrmnawMTMffLFAc2Rq7z2pMa1JTovBXUCuY",
  "key4": "552HhGfgMGLwkxpHQrFSGUqD6BQhwz1pVebph3x9nSdpu9pPxMEbXjkPAGAsFV1f3a2XENA5gbuH6bkodKpAdHqs",
  "key5": "3nygNFpPjR64uBWQXM8FJwZ13UnJ45D2HaM5qo7SYX5p9ZEKBLQN35DPutWvvNSVhuB5zyPweVoCQUXUFoWA1FF7",
  "key6": "5rYwEtxVk3w7jdWqRkREnLUzZC72FJThZV5LG2QBte8bT25EVQtWveBvEqQuDxG5TiRhWdHj1ppydbZ7YmkRJRw4",
  "key7": "62poabideD4TZHJzBCTPHszfWR9zrW1hNTEPcn6mPV7A8rNis2F82rYocmDGHzgfJrPBJfrWkmURydRQRDTdD48y",
  "key8": "5A9N19ongvewde4PjAJUkqVZR38Ugrayia2EfSieq82qnPrpYo5Wawrt3F7dGG9VcA6zWDgZqn14Yz5qkarF3uXP",
  "key9": "4Wcg3E4NrxTCXCmMfGcZNyeoqUc2Atwpuyrh4caRXPwBDMns3ePctcqj6cgwnAeckpRkKvnb337yGLHiAE9kTMVs",
  "key10": "3mdVmbBWUAKXYhaXp6GUwNcbzQd8t58ChnvsgwUtjcG1Tc58Xroq47iqVMkSk4MbcDPMVFV4MiiD8xSCGLboh4T",
  "key11": "542S7FDBV4A3fxJHVCRBdE18RvMi9r6vjC6ZHShEbRDvHeWZu4s752yhAPJs87h7UVDGxyQgUcyheCet7AcckLjT",
  "key12": "48ZmJu7gML2Cs3Stt8BAwmUmtMP9fw7jDjRAd3bR8YbuTdnDL2cqLgzcENcYYupPBA1Tu61YemyAaocsFvVHPLE4",
  "key13": "4ooSCTWfCAZ1qkTooHpmEYqXLuv5jKJrERUQnXs8Zk7Q3jppHbeKMCXMBi71hRwFy9RfmoX1f7qzCgEgZJz74UCL",
  "key14": "4WHCiaoHe4zetrePtdKRFViDDPWq3ETXs9QCE15LLYAdihJYr6eJhaS3sFAJv2zsqe9yGYEaFdJBuYDNY2CC1xHF",
  "key15": "5NtmAwFzSuZQQUpdpyHUnJgp78rFQCxww9rzFQmVnjhbznxwjFD21HmyHt2tCH46wBWaS3FbawEyCUmYyF8iM489",
  "key16": "4BXqhDEwjsyvLPxPp5JTbwjdhLRp6rEQWHT6mKpxH3BR1arnm28JtvVA1PVnUfmv4rjCXFaMMUrH9KAR8DHyN9VD",
  "key17": "3ZJY9BruamvAV6uXrcn7G3qaaYrjQyn3L5smrci49HHmN4TLgyBQgd86iFRtG559mtDbv2tb5jtxWcLiR3cYaMks",
  "key18": "4x5ZNG2vV4mjCrb8DpSiYhyNjx6Jc5r1p5FyLtKgq9i6Mu3kXRqvkk2QEc7BYRKRRcbJXigWKXgvQ7Hv1N6gvuDy",
  "key19": "4MP25SjrLtptbXYZniT6vQqWTiTyrLgXKcBPFp4iy6UFzPUrGLzQGxF4tx7YWWmPT92yFfdfWY84E2QCYsME73P3",
  "key20": "5H4cCAGfucrL2Dp7vbx2t2TSUsCX5SazS5Kmzot3uLcckGCPLMafp7rmW2URaw1ZoyCHsBcrP6YzNgJertH9p7P1",
  "key21": "3VDAEeTLgBvxjWo8eX8S3NnzHdjrmET4VN8V9KuUWX4qouewboNRayzA3gfkPAaZG6cms7FZQVa4wjTXeJcYPhNx",
  "key22": "4dsZD8H1epdvarkfUTYPoKKivDkXtVKhcNAoGrVVPSKhxaZoghVJUkJgzY121ctTpRu5Es26CCuw898YBHn9pdzK",
  "key23": "4LPe5ovYBUNVa55HLLsU5ijqJ9AjL5j1uWMgUouUzXCQTQdzhv5fJ7jc4Bgq9afRHZbq8ZiNRSTRFHnTy9ngsUsc",
  "key24": "4JLJ4oCQHoyd2h3FPwanfokviJuNTj64HYLfp3Q73f5xBVUQsSLRAD4RUDKcbTG6bAWGZbp8vfcqwtoMs41nydP2",
  "key25": "67KgsSegjeMEfwJqYwfgQF7WZ12EJXECDfLFsJ9UXwqz551R88gT8ae9KF3pW3gTe2wvGSBV1V33e1bywhqs4dGj",
  "key26": "D31Znohe4iXYvn4yYre3ifmt2rJ98kAcwF1q9NzMLFtRwgqrz4EFafy1M1zyzdRF7c3F6GRLwxbB3kcysHQYNnR",
  "key27": "5DgAUqDeuejxvd5EJuaPuZL5UymLYsbpfYYQsJMmEiBPSywSvc3FHm29timBsfbL5dPD5mSxgGnQuMnnExxtHGTy",
  "key28": "4L3RFk2K44NcUS8dGUpdPnpZrDsPnJkMD4tgGTqks9vaReLnN84x5LgUxZDJPQxwU5CRwrNmPd8GSRPDJ579nTfs",
  "key29": "4ktNWdYwvfEWucJcmyDNd3Ee4KfrBYD49gpR28x3q8z5GufLF7Uv2m3D8Ukcr8my2JvZ3wFKiC5q52eWz7Qhbf2P"
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
