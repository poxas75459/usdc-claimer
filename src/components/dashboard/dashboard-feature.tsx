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
    "3AKBnD79AwMYh6sKsw7MbnzxUUJWAdcetYeBSEXP5KHaRrSZqqisJFmPFNqoHsAuAtwUCFqhTdHFiBtjsboGGrQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ABdR7fgtF2CQYLSf5bFaEe6Mcm1MCh625TSsYLbD6TjtbyJA7JhHoTpw4yBhsnuiBdXiCoKypzcPKVkeLa955qP",
  "key1": "34FHcznoJRWy3ynBnFRDJ2GzEek2SESqDVPmc4gLuPHewo9wbUo8QTwnGha9fDnVoZi64pUfQNpmWYTF5TziuAZm",
  "key2": "56Px6cxoKJkYAq71sYbXGsntZJgtw1NGvB7gXFaTGTVPWfYptfdrqb4d2PypxbVD4JDDyxfMXUP87paMF5vAqskb",
  "key3": "2yugKtQjvrng56MT2cDrASRibcYr8padtQp1mk4qZ3z1zYa6W6xqNcNikJiQVWVi1QnpgJyNdQdXZ4ZDUVF93Ea4",
  "key4": "5UbCTXNm6SgMWeQqi9hJk61n2hGSoFuTnHmjbcHECamn99N3GagSLTTTyQdiD1QyB8WuHtgQkQFDPbiXi3gh28ox",
  "key5": "4X5gs7NEm3EF7dwhmsCrAJ7tvu2YtGr6NYiZmAEvUXcotSPAK4pVQhfMnWCPysBAjz4ZuF4vAyu6nKZuppHZWoE6",
  "key6": "3Zdv8qvGkEEvNTLfDi5xBbK3xnV9vnu8YCqcwDaGcJ7Wcfs11XnkVY7q1JXyUJFApbEN1pei2LJCrYSivaMrpJwG",
  "key7": "4V1P6X5WeDN4cZUbNEEZVhSRQ6Zc8rRzGCRBZtve5MB3RJqRQYqphcxbw83bRe8iYJyWy8b4GGtuqd81USp5yR7M",
  "key8": "669dFHBJhz7FFaHRqwkdQQLKT3mWA539hkhW8eh3oQbf5H2BhyyhXszkCmW6usYBBmatJUyXWW8NnqwWHxCC8s9B",
  "key9": "3t7CJTQFiD7CVHXdwHoXT43kbNAYZJZg3rqvmeAxdCnmzGg5Rft9zXyA8q2kdLiZZ85HiV1cEFJPpmhUVaBEdZC7",
  "key10": "3CqQh2V55aVzQuZN4k5xXzyjaQUd8o1xxUhpFYb1hebPWPaw9hCXS73Sn8f1UW45yBRVpG9D1ap8rBnUJHhhfsri",
  "key11": "5suLsB4VEB2r7Xx83zmoXZcmrD1vo1aFR5ed2tw8STWrtegD7aK9vPL8REksWVvbmDuGxSYkDQ8DZyRG5BieitUV",
  "key12": "5YeQfmWFb9Z5CmoX9dCZtSaQC72fZL7xD8s5LAoCUPhzYKvsvQxePV52HDR6U7d8Wofk1kSzsTKQLYZyhHStjZMo",
  "key13": "AiZPr99rPsurt4b3XvUJdMxp477x8C5pjSEYtm2TKvxsFJ4UzcM6su65aHjTH2kMfjfmHNRtMih3vTDM1gAjS6o",
  "key14": "28nsBaVC6qU4PKzzzZuKJJrA8nKRUncSAGB8GB6YKLWzmXVn6gTdcEQzYGQwwabApFQqwYrU9bnDmwN45FAd8Vri",
  "key15": "2r7hu6eH4FJWaR3kLJD63PJUUa99b1fyQ1KJKXfYKDMYSJcsTNEfUamQXgxrnAEJpf85cPsgLpWzdLZjYyyo9XWm",
  "key16": "3Qkp3tR9Qvqh4Lw2jvCQUxvrLFMbAP5jwuR5EAmZqsNpEzpY3BKeVCZaqadoU35fgFu7W25fPRqTxqAyXejfc2Hh",
  "key17": "ZPsqX51TphRHBi1T8pHBZvUQrxAZ8XTQvftAmo3n93545FgWne6NHUXeTYe9QbfqXZiSYaZXAEiYPJYji3m7F99",
  "key18": "3fxSDg31rZv1TmZ5px1WGzeMKHgcubkEV8S4ycChGjvLSWHFtVZhMQPdQzuyTGodxX2tK22pD4J628fLTNvxFZiK",
  "key19": "5f5ud6LU13TYZrXdzCVRFGZJTPX1SkyGKkcJv2smgNFj5GczGcoXfQp4asTaPo3SoDNDDD8y1CDWoufvq2CQZoLJ",
  "key20": "5yBwWuMTWWZcsMrmkAwErvt3FW9P3g7MXTAn7vxkWusUPK4MsHVuPRD69uyvnaaNHJApZYUB6m9LcXcV5yJ7Htjr",
  "key21": "5ApywCt3g3cCjLDnsj9rbkouy1vwLhN5Gr6VRfkFf6ehgbcUoP79hCcma5y2Xa5MYh6UmDyjUppePePKcvkbUnPQ",
  "key22": "26qzRvVP2nFCBjVhAkjZcqaTpkEZFsWytbwgmELxRLkzJTfCdRiQSnddkM6JpkjCr67dAiKdiX2ax1v7Cw9hWoKT",
  "key23": "66Xd26mAnPhDYBLoyGhRXiBU977V1BgJJEP1G6nN7dFvyQYoWXcHJe55TA8sa8u6hy7pwRfm9wWZVkhQnsCRz7Xj",
  "key24": "7y7AEfJoccJtdtoxRfFZTdbCksLzr6AtX5b7JPemEQvrRFsE8i2rgDCwTJtyujfrU7ZZgM7bDGnMtmRgpXfRRyk",
  "key25": "55i7spSNGVbmquexoJdb6WvV3JiFZmgDVVFnw2TL95rVksoD2vMouf11J9F4JoPYsCXzoahALEFBY97ZcaXwY8Qi",
  "key26": "54GpvracQK9LjNZNYDSwFSeiCz1VdD5cWshQqk4Pz6yJ3zzk51T6ENVnNVUuHEAt6wRmr1wrqNtGAfphCNF5ygXf"
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
