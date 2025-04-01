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
    "5Buqkx5Cgc97KfAiq43ksfQhGBceKsXykfUJbnMKy8BVRq4jitSnYdhBmaC63kaLiA5ixqgfy2Rz3ZCbokbt5CHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MT5gvPJRh2Dwj8hJ3wnLsAxawfYGu4awNgqANfWtodUqzjrtBkjZbFqNCG2X4UVB9kPfLUabzLW2Gb9BEmD259y",
  "key1": "L2SZ4ch22nAeBhzsBoHTkmM6Ym5N5cwGyANjYZFrn4yEEt6h2uzer2QmF6iDN8cavTd3QCCQwVrdLhwssaZQCEe",
  "key2": "4v5quB7EHYsL7i2yRRbAkUjLxHRpjgrzDyjVkqropx2X8BGnn18bKZVKdA1HEFL1vKnn7M2jdmGsXsEspeehdoFf",
  "key3": "5t2DBnaK9z7dncRqtqnWZbr9sLYaJw3ZVhXsMzRBFrsMwHRAqRKGmDivYicPt1ZDLWWPBh5DbQB8agWuXta4hXmH",
  "key4": "4re4XSMEy8Ejng3CW3rqk7CLseosiQAkrbHCJTW2zjJLDN7qNumGsHmKurJkM2KU8Ujda6mXE4grWuA4ijAKTvcb",
  "key5": "4Qtda9fgcknpUMVRXyyAH1DJYnFSqvPBaDbAFViJaC5hMFU23rwWvG3xnUr4QFqhiRizy3v5sLUGcejJKS1ceKH",
  "key6": "4JgWRHEkfnx8SfNH5Z2ixz3Xoc1qRnJHSzKyK8Jxih6JfvAsGPt3j4KnsS2GDQ6Tcx4hJAiwtZJJLnGckRz6fmf",
  "key7": "3i2v6NH1roiishwrVZuC84imyeHCKLdQK8MBFQu7mVqxUTY6pALTS94XMfNHZHGX3ETXNdeSD9SYHbyeWUN5caga",
  "key8": "2JEQg6jyFewnQKxNUz2gfx7Y46rvGanVmqUZ9RBVQW8pnBV3AvJpHR7qphVCSsLzvfGEh4ph2AkaARsgsCp3kgdH",
  "key9": "2jH8BPjHgrueyMa7i8ZCgpRqM32MiAe9qjoVkQaKeLfxZ9dzp6UpUx3EtCNxNaPeu5U78cRjbBCFwk24aesgFqG7",
  "key10": "5gWDgJrNxVw8Wzvaiuf15bdnBitQY8nMmXiVdLyr1GirrRD1D2kHmRYYxndtHNDdPFPmbjXogCpKyd6LjPrzWp5x",
  "key11": "AR3hGmKZgVH2aMFWUdAJunFPSTe1ZUDJwUyPpfcHfNHyfFoT2KvwBM5WBT4WtbRo4AqBzWPdy1nh2pdkBMFpjt7",
  "key12": "3QjZGmniqsu6greMq3dE2V4T43GU4VCKmBnHdoowLnCxxttk5BUxQCoit5bUSXm322yVH1dqkP1Pu8R4BYgj9FWv",
  "key13": "2C1jRx6b3pY5GNKVnMvYCudabJ4Lf3NsnBorcYueFR78F427YJKSm31CtLwGYsEXCfrx2wYKhZeMEFVd1BH8Esgd",
  "key14": "4UUAEbnTH3J1RSZ3DnvEZqE39gJCSQapFyHS91E2AVZJ3oBGf8y9VPZgzNd2VUPKdpmiUrq1ZsqykjZfAYJQeu31",
  "key15": "21ht7p94t6WYRpKvB4EmBkmULfRbkdmaWqGzKfA5CuG4Nqy68ov8KEz8Fg23CJwaLhDRKUtmoELXbWURDmkGSSqu",
  "key16": "4jWhdhniDSfHupFd3VZyEgppUEfcjKQGkZX5SMADHrEeGrQLFGXUqVVxZcCySEDWdomR69Z7Xn88nXrSErj3AVMv",
  "key17": "3MGCVQc995Ubmciw3DuabDQSHmPxxED32bHFQMgMw66Ss24siBggkWu7LC2Hz4aEumX8J1xD2a9iynu5etfZTtEV",
  "key18": "5iNhf37naMjr8UMdGdRT9BUWHienGLjUTEjiDexRoJ7MKWJKyuuG5e5Nadf1V9bzYCNoPoZSeJdcZ2fjWAXvBHLT",
  "key19": "4CVDx2UE94TjGb8r5tsUFuzS3yxXyKd6QfBzBV7oe7hE5an39KLJn7fs56VEyTzbiaxXuQTtPZ9jEmh9hTCGnVpF",
  "key20": "2LNggLnxddmM9VbSS7YqxMomFrDo5MiW4BcfqQ243fwzeyNoq5gkz64LjGz4RPUnmpRgKp8qbEgWf7U4MdHv1VVp",
  "key21": "4SSAcLpVXm4uqdVpma11Kfewj6GHaAfe725QfRyJGywud1zbgzZukBoMzEosSHRNKPhA9tz5idAggg8swGTikjHc",
  "key22": "2UnqEanbFckxnnm2CSFaMomxyiFa7MbCwDakwxTru9Cq4fjZmQbtpuYQLiLdUaRqnnxiMRriFkFmRfvwV2EqkhY8",
  "key23": "5xhzhistjXMBRLzF9swK3Srj8o8WqZ9aNMuJUT7jK5p7i32zBQEFzTivjBmZi5526SJwbSobxUgfuTE3tcWpB9cf",
  "key24": "5kWxLGKze5bfU2saBDoMhwbWJNNK9F1GJVdB7oNwKxENvkR48WRNmv3dezJR2pp5raYwik2MDRvsswzJ2zXeFv7B",
  "key25": "49eVYvMuJYZTS3amYnWDbKRpkkpnDmxYdhp1ArVSuo5xe5HkMkMD5mmFEvBBEHQzSmF9M8fF4gUhmKsnJkKij6sn",
  "key26": "2dXKuSuqNaLBCTV5skKBssgNqJqL9anDFbGpaYvrJtwpRLyrzeA6KeDoyWCxdN1hbUNPjDNsjdF6dQo7gMrFideH",
  "key27": "3CgFUEp1P5NSMSbbwvfatjk6FoMVfPdg8Qf1opfNALggpn9qcL1qdvgWzvTLgnWR55fivgKvw3ivQe6jCTPEuG2R",
  "key28": "fwRG31jJ2uXtHq9UwfQD2iDdWHiQu1gwwGoMkU1WC9JqM4u6v2j1jDx7VThw1SkXjsE77xVYaXieMjkCENrDH3Z",
  "key29": "2c2EuiQtnVBUoTCZ9Cd5AZQSvD5ziMXNpDySF6cMocypcoYowMwRrFtE83gs1exHb34FJLZYz5wcsvbVGpWdBags",
  "key30": "2RtrHJj157Qzs1w6R8LHJiR3Mow9Km9T8cZUhSpFtUSK1EPXshdUcL1bz9TG4wUeqERxMAAjPfBadnnBQXqqCWn2",
  "key31": "5vNv6ocBMWqSgtNwEEpcfK5u4KoSvL8UvRBwdcgJiDsNsuSRQxSx6GPPMvmMhmvBSFVcZ31WALHAfP52LJcpJpRz",
  "key32": "5LQKUc9oDQ3sJWLjDkZRfwygt4KZMyAp3m9P8hJhaKzPBiB1A5ud2FhLx5En4tgnbKqtX5aZegrLJ7VsQXPU3zRs",
  "key33": "5Lj8okapRK8dYh8hWedT5prRWaAniGTEBEYidzAs4We6hmGAJBVpsiadkbQQt8kMz9TzwUPzxsJVDNqaoxuxJm6T",
  "key34": "4GxVkU6yuwrcjcSyfDu7NTTXairxo8tz5sYPTXsENMMyXnJecjX7jmU23hZSVNKuncj2pizwMkE1csvWHuMaVbRe",
  "key35": "2TtfDSmrDfC9Qkj9huLqVeQ6avbuS1Nu1vx3WnxYvrK2f55z9scwAuYmi9pRZ2aEax41QphPv6psRd2tyTdyAyfP",
  "key36": "2vSWvRSfqsjpE4KZPrq1e7sgkPTJQrTLPKDzwDge99ATn1T2aufSAuok9fMbE9ViwCD7hm3kVjNjerry1BRjhYwr",
  "key37": "5Nfb56uEQjmuFkCLHi2tQiFXwqV1j1h3DXUTCDSku49MvbTfVbeZNgy66zELVxH4kXUQLJTVFAa8XmraG5JbvpKN",
  "key38": "2mEjQxKajYgrHrVg51nYELRnF81mGYx3TkHLzCyLgaFQtcjEdYDhrwuZ2PsGjFo1kjqf7DW8ZaHZcEtvQnELAQSL",
  "key39": "3iPfYSMjp8DNhGurNfeU5tJ5ygwRLMgVdZu5kLQDfZX3QoXNVATYzVQW7dWnHG8Fd1DVePNhcqQk6bTa11JPNCNR",
  "key40": "2gRP14HnkkTd9qcvz5neWCU5fYi3z3NzSL4JgbvjSxnzp5QSrirQxspYr9GDT41USt1BKbxbD9tsTVF7QHRD9FZF"
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
