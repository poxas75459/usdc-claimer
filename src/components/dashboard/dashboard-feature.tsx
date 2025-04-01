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
    "2E7ArvvtoCmkn78hTvBVuq7DJ3eBeC8ZFg2snMtuZyX1fhtjPdXLgEWshqEss8ckAwX6tseyUadKVMfXmeoXPoVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VamEcELvy7GkBv4iiKrXdURTzjGXskWBL1R4obf5Aypd4fDmAda4jveeZ5XJspn8csgPneE4hNRt3DY2EBfL5G3",
  "key1": "2X5REZr5WXoNi2UYRHzMYJRBzCY5Mw8nPzYFt9BR5o9zRSgyqpWd9qhcLGYjuJ7jjuVRAatUec7LZvD2vTqWwAYQ",
  "key2": "2usqGyg9RLo1cP6vu3KokXNeL55t9q11RHQMCvREJwYQRmHzVmGKemyGrnS9f5Sve9FKJyQgvxTAQfoZCjx3co6S",
  "key3": "2uhQWxCeaF9Xmk7t249PgKMotsJdmDqWfKSdbrLaceuN2fWzEUVggUDkY9MbekKGb6sBeqGYg11siMr3sLCN3cqC",
  "key4": "38YSbwVjWKpT7gpTYjZY7LL2rwc6UqzYDRLsL958Ap9rt1pAGMYNHEvB3pvFmFU8scx3L5SxtHbMADco93VPxcXV",
  "key5": "3LvuzRhgCSydEq3ofdeehQhirNLwpB7JTS5aUKV1UrzQ37G4yQXQktzvrvWnmhSY6zxwKwFJrXRjiW4c5vQVHhzv",
  "key6": "55RRN7WswWPhVMCc4Eokgw1iR52koKCELjcNRNgmupUhKRvVYki9sPfiwJ5ZGkRz89BVscE2XnLLXBe9YD7pHi87",
  "key7": "2Z5CJ4fNqcWPqMdpRWUjwXicwJS84qcKE15y8TKoYDyWnbvKmWpWaJdxx7eGagx61j9b7vR4cxEU9PSN22Q6vKTB",
  "key8": "59HNMFR9sCzCDkPVooruTrRVDgLzmbNFztJDmbjiYKMC1STE8hBUvy6QQ3E72wQhy7Xrp7yAYstrGnBmkUFtZTrK",
  "key9": "28grNHoPWk2CrNwPY3pAttxspGzksNDo2pXVmkcnSyHzKnmfxsqVUcdv6c1vBG69fAty74wG5jATRrfPbhzb8n58",
  "key10": "5E1NCD8gyZA9SvXW2vvXgEzjCN9WyccmAupuunVdDo7htTNzNoYvhVXHyiADodyu4ZcMY447mxMmBX5f19hGWLRA",
  "key11": "2XabEygQdgX7rVF1TmnkRX9GKuK6Fksxf4T6wWRL1a2nzF9eN3ULNQ9aMVmoeAW5vfwAEutUDsCTygLqc29BCo43",
  "key12": "21X5C8qCRqZagYHwdxyPA5Usm1MTA7r6JD2Nkg3Qho9B7bsAhBZmbS9Q46JhFa1utf2dpy8CKDfTikv55vTxvjpi",
  "key13": "5ugGZxQLhqVr6bBGk8W3FSGNn6ch45bxd71TMnnTHTzWUm4amLpBzFLpjhfn717cs3KGJYbTkjp3sb5MBeWPCoEy",
  "key14": "4jsrXaDMgvXMdae3QLo1zAq4q8koBjxzvP4vcxiUwxTX6mBmaNzj38ZSxTS3fRJ41WjhRKS1U2F8xebPGuaUvXjF",
  "key15": "4vSodxd1HVArWHoNe9JbNYfxFYRmkTnbxJ8ippXAuXwW4wZw7MwdJhCTKpX9LtKMR4n2tWdANFmuj5dKdgc7pMWG",
  "key16": "5MBZy63VGknihboLNikP5Swczc4oGYQpV39SGSaUsvSjvVUZ5UUQR1B5HQ8Pi6rDSukQe6T98YPf5D5jVmxLUL5u",
  "key17": "3UhoAmZUeaxR6QFE8Hu97NJ2TThSVgQedSQ2RHZsNYYWcBcARfKf3TiCga22kzmJLavqdPdHocGNtneK1wje7YvR",
  "key18": "3LXa9oRYgMn6HVJoV4FoX4VZRQHXvWBfLRmuM3SR2jnFqsLvK5BuW5Ccs67yP6QvmUJMrhXXyLqc6RmmkkQ5qrtk",
  "key19": "34Me4NyMMVhFfhhRWZ4AkuF7t9vxvjCG4ABFXeh2AVpVtp5g2i9ZHUinrDQ1xuyjaz87TQcbKCZAxK3zY2dbQv9d",
  "key20": "5hcSTtzPYetGPa4n212nCQw6bFgoakYeHvrgDv46ASegkxnfqQj5bsQzC4HuyudkTD5srHeuck96Fr7xKMYr2HU5",
  "key21": "3W9ZLxGB1rc4cFV8aFLkE1SCpXf2wXcspsy28y3H9LLy9KErbr2eRCjSHeQiTPp8uns6x8GigSQs65XDtcnmV2LR",
  "key22": "S7KN1SMkdEFmVAk7N2g89WkohjCjgAnpMTaLxnLxF8yQirNKUXMWmkWjh8GMmgyViVtmq5uvfjnZ9XTp9si6z1x",
  "key23": "27ynHesAS5HM2AMCxUCWP7HQWqRsE2SgMVFtR4PRXxB9HjH4SyxKZdEjkHT7UGCj6DW8CFUX79s1tL86TtcBpyTm",
  "key24": "3DizhehxZLZzpxovSKWa8MGVhXcrDYX9YxsPxsykVhaqZmmwqbJCNcM4ZAu9MPdk67KqxFP68RhqoKXz1aVWt6Kh",
  "key25": "3cGmv9zQoSkGcQt652Ss7541gEMjK5rQHGrrjFY6sw5qC6QjYpYLTXCNE8YD1aSAhD5WrYp3dE3wc9RCyxMLQXg2",
  "key26": "eqFAbKzP9NYVtAECrQVQxhK4qjFFrQ2ZBHBAvV3XeFUzCUEN7G2p1Yf3iCGMRCXtquYTJTLP2e2ND6CWrYiuzhJ",
  "key27": "3HygEywV42shLbSz2PpdiHNgkWoL6xVuKPrTGFaBPCoHtMKzvx6QSCmLxkFs5boVABFLrpAEoGJKZPpUUckWmRZb",
  "key28": "35QcRiMzpcxY41cqbmupaEvscTJKD61MBAeLiYH2HTbBMdXy5eBX8N4kXs1S2x13drriuDPc6SyouW66y19s8MFr",
  "key29": "vNL88gsW3Le1mkNuTJSHLvZ9vZjqTLsSA2PwDLtXnCdtuaukF53k2XATrc4iqNdZ5ojLC7sWxV3a7aCaGXP5qyV",
  "key30": "3FXM4TH3rk71qnhMYuMWqrhw6JPrMu2yWqvqDqASxTuSnZHFQHuSk2bCmpHVBPFF4sjZjVs4h6187YAVfqgEbQ5j",
  "key31": "3ENYmTdaGDGfSvFd67vRpWWM8tzQrcj11fSmaUPBGpixBq3Q228yzaZrNxL71e8enY5yx5f7JXvpS8YDGpYUjo4h",
  "key32": "boaVtoVpiMRzrd6DcS7UfAcFGSYBW34ZJGdbDgsapvquLkKZQJy272Ajn8b2UdC62arQ7UsY6fh43i2VN6hy16Y",
  "key33": "4NsQqQkVPSHvKfohFJVaKzVbCh4VhjDTdQKVBQHZzpP2gMDVhkbJaS6ReWrmuRrzeBFroZbyf5GdivmXHosx4rBh",
  "key34": "41YnKGR8tNeBSA918W6jVQa95NaXKYLKWzrzq2o5zv95o1pbknbxa8yvEpcdcwViPFhqtLwyKCNFKMTvzdHn2HoY"
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
