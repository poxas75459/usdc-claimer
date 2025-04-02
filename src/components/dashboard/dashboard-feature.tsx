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
    "3MVUjQbEXuHBNanLifan3kpdjfLny361mbFcwVrfre4nRpu4ML5CLtL6hsNQiwsdhZB9k8TV8LP2dEou1LhY9kF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nuxKh898s66QELBPkUVBjAxWpyJLLtqpjMDwsKBBxEDT9SAppEmzGK44NvvM5sXwsYwuVBiFTwbmKvR5rrCVqfT",
  "key1": "5XkqsvbQaK2hrxpqkcdYbq8ykZ7JuVhpwvgMsFyBmpWdTVdMzm8Andd7maiYPA7XEpL2rWf8mqbvytcHLBFaWcMA",
  "key2": "2adAun4hk7EpsRVBEFkfyK7mgzgQun67uScHVpGBi2ng69nD4FKj3HFDafb7DbDhVxhbcKYnBvRkeZUbzjAUPQRx",
  "key3": "RtHTXqQHctqQvTYr6JcvGbM3YXiCRmANxNsTGxRd5LKegTP8ix4Nb461DNZi3cgCfK2XZBvU71ocR9ts22UNuPj",
  "key4": "3aofmsqJCditStD1pdtJjJgJLdn6SifQenigAzspmuukyozH31C1bH6GeBSw58dM9u9gzH8cZccenCq1KKM5Qeo4",
  "key5": "3LmWYPxobhvBt65zxuXsaDZus5n2m2o9VXVJ7qr2X5VvVjmtZpSvMiSudW2gAvSfzq29j56E25QterTgoSAE8VVG",
  "key6": "WTEuErA89yXhbGBbtEjgEVdEPDyBYjVQj5pxh7hE3SwhUCrjLFteMFdAj7SagMwwLUrYyn3Btf62e3WP29D16BP",
  "key7": "GbrBNohHYV9c6Ei9Mib7qWbsEkAUhzsuCMKSugecVEDcKgG1uW4Juoa2randXsGLjDn3sowLUtAGr1CkHY5WEKp",
  "key8": "4jSfoK7EogeGWpxLGkXV2q1gwccPpKWh1QHiUmYh1ULk9iDnJ9DVr797ByT59aYcerMELrnBTxwpCdQFVi3yE79M",
  "key9": "224jrtHUv6wNp2ete4tKyMzwjkmzCc1zUewnnsLyM8z4fLERTNchqGfJ4P8SimS5YzUN6Zmo23XSNREacYifLwvH",
  "key10": "47Tp14vyWHsro2w5mbT282W7N1z8pbubQwAc4tSsp2nGQtzxrJonRKToDwbah7viNVCoWr1EGHw4v4LFWAURDgPW",
  "key11": "5Zh4SU8yLqJ8qDQBvNumWUpds9vmTK4mvwbhX5TdeEVDz1XhVPYHh8iF2ZgvKciqexFANR7YjWr7wrQEFC7DYzDN",
  "key12": "2EHAp2cYBqm7rgcYrxyUjZmKo4dVwg5cy2xmqmrVaHNLaGs93Hr3LZAtLPR8owS48D5SYC4YvKC3dLwyzECmgXPx",
  "key13": "eaZiPuPqJXBoVY7EvnzpLiwLnHKfeVcMKb3vpYc8bLpoVRrsyggoi7k9dWsoSk9ume2XjnvnuXyNmRaAwAUKPRJ",
  "key14": "Bo4HDXvidRDwjGSmGqPL9btn63DSS2w6kktZMbxS3sWe16rjEsGqddvJ9mhqCbS8DYNzrJpTg9nCTgyLZhCkZZK",
  "key15": "35XrrrmPZc5zgAZX9NeQ35VzdSDxeU9FcteZq3vp7UGh7Pq6WZjhiq4fXkSS3NGVP7kAh7FH97PtmZFqzrc2DxGr",
  "key16": "58fzgXPu9ga3cEDsfHJLk793BDUAiNQzw9wm7QafNgYj5PFUdrHJppE4KLRCLA8L1qqfV1p5rvA7Ke7hNubCje2w",
  "key17": "3NjGe2ipDmnC2LraWyaRmbPEZizS53QTAP12Sg64BtMt4rSc2ZVquPRY9vLr5ZoAXfMBUj8vC4esULHnFPYZmWx4",
  "key18": "9Ftzw3v7ib2haZE2UgZzWw4jErtqsu7EyCoDUpcKVBKGDR5h3RwovLYAL68Hw5bgUMPdr9ahbWyK7yi3azHYDkN",
  "key19": "LgECWaALi3bnFH2sV5qKHDHRgoBtHHozLxd1pBCgguXm86pxZQq3zc3whc7ft6BpGbZs4rtkfbSHzo91HmCUp9r",
  "key20": "3JrTojrYug5ZoauEq5268QEsjzLEp5QXzRo1dGqJLwUXSAZ8SZuHC6JutLkEozx9ny3fNZ85ifbiMAUE1DKsgbHY",
  "key21": "5QLjQTpza6FKt4pJZbUaX911iuY9mwoNTyQuJrMgeytymwgtWvNFUcDqszdwUcFMyEDPR1r6YKRCtsgPadJ4MPCD",
  "key22": "3DMgY3e1r7uY3ufvnN8qLkkKkNfsPUUX9VkJFzoV4ax1ZQ7LeFtMfbNZsLEaURU9eij2vTHnJdEWCXFdQqywkKdB",
  "key23": "5t46ZqgkwLseJBtTH88baUi8ueP9UtjyaCBNmLASkTecduBJdCsKGZuyj3NeQqGAUKBVi3YD8EsFR6gMzWaJW34q",
  "key24": "MJTdKKqt1mEH86xFPboXCTpuvjDjQhnSXTeofPoN5NWYNDyyaxPfKAq6V6XPXbC3AKoJDLzrrFUp35ZFJJj2JDi",
  "key25": "AFQ57doP6SAZkXi7HA2PyPXEhy4V3849bhfGL2Zy2q2UqDyCzAXTTR1Tx1ZXEHTJNc9GcyMgs476CdXWvpDkuvp",
  "key26": "54bAwkemqdbebGuoTjtHZVsDV6QGAsAWbwfUrgSkaAq8x6S7PtGCBsG95C7KsMPWwFNyBiykrs1xiMWEktLZqxTm",
  "key27": "5oBownNHbhfndHLNuA3skrBZctJYBo5DZvJNoqf3X8d1QoKyobHyrevABzMvkvzddx5QHzftiseN11cgRyoQwtLH",
  "key28": "2iRcRwJzzma12uVL4XBfJiPEPohTKFB9tRUhrbu1FMRNtaUZSZe61mow6aBhT1V16byZmr2FAzsnsoCUo6gz6wBs",
  "key29": "28yAKfnX7wqp51NJh1Y2UUJmy4u7pTLnH9CWjQ9Ej3hVZwYakWne1h1VtawjerMKvrX93yW8MWEdxYC4RRMLkzpp",
  "key30": "26Wb4JHk1g7PkxgTZXiffbizjxZP7MzpSWPk8y4Kd1trczfTpse8pL6o4rZQVJenuSJUyDmCdjNNPmLGGUQbTQw6",
  "key31": "GPz5piETnvtHevRAjMLsMbujXRKXYbH3V9rkgZZSwSca4THHTt7sLr6tTb7MswurJrLoKywrnkkZwAxumxfbBiz",
  "key32": "2w7GJFqKpfs8kckhaWRaoTQAczaUGBejoPaLZhtMYjUQPuF1ntpVqydxsd7FojWNDxnyckJjQVCq9Co9m1Zmfhw",
  "key33": "GUi1bzXMLbJLhpkWXhTn1M2wVr2s5KECFjvvjyaHkJqvqiq3GVgeYQ8Qz496PVwDv19BpECHacD632izzSnzsrS",
  "key34": "2hSna5KmJnftgwKumgyZUmFTWACRm8sRFStftDz2Q9Y6g2K54LwkZoe54Bf4RBe4pFJrAEDMuwkS27dFa6xSPPX1",
  "key35": "16jLEAcHSyHTvCsJjhtWPTFQRWV9su5dHnndUWfgSsmDcw4v4jeF5fsQBvwwuihRRG1AqyewfXBke7pQTerXBQL",
  "key36": "5CDyzTiP5ffVmMm93zzq5DtGZEMx4648jKFT682YKyAsytEE749889o6cbgXcHRPuPf8SC4iYQNMk3L1uwQ1QacS"
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
