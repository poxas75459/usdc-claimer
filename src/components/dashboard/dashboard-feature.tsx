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
    "3RKevpantrDPLP2BwYJzUPfgXXaXzF3w4Kix5F2xkG8KCZ8VX2ceWFk6r3cwdy34HkLLf8ZdvvjJa9w1H82GuWsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AcAqMiuWPqS89889beTrqrWTACP1wLJ6E73HggxqCJ78vHobJJdJYmZYtbXCBfEGYku1xwJLcXQs5axpQr1KtgG",
  "key1": "5Ca8dFhEd6Wv2t3DqyyPkM1EG2qG1xnWMifaN73QzA1zs6H1LsZWSehrFw9CwUTAzoCP1nPe31a9VuyWGNagYuN2",
  "key2": "487nRePAMeFZjvk2pwUG4RumUoUeSoCTxr4fREdixFP3D2q44fQovt8D7UuQi4VjYTCPncWRTUGcRPEhDQ3Ww52s",
  "key3": "23PiUiRWYSaWidn63YnGvY1975UZEtwerK6AnKudHM4dYNF6B532X2jLssbQGTBcKtXQR4jGwB63iJLHvYa7Rj8x",
  "key4": "4PfYNHNH6A1W6FseKcP6NZxUb5uAmNuUNzqJtWtGoUZwPmfpmaN9VJHAPTNLf6mirtZy9AYH6tSdLpAW6fCqq1ZV",
  "key5": "gNrinRgtcwubr2x4yqewNyeVKVtQJ2HiDqaR4ELBso6mdbLCsW2LmbKcxzKq6jZwxKU7KX9zgyUT8M2rqa8CL1w",
  "key6": "4DjYQbH46g7zyZutGBqhZFbX6TiUg6r1Hi6jWY5QX6ramiLF7938kLhYYdpqEwB3Kp2ZHTmUtNX7vsMnoZ7KhWZg",
  "key7": "3wtdetBi4bihXjxFP9EB8vKD5zocyuuWKf15K4YURHE99SZb5pRtEJM5gLEZF7J4RP9jYk5kEwTPsDwDUwvA9mjs",
  "key8": "61TmnjcVGkT8frNwLHsV2HMPN4h3MyB6GMB3jj6QcXSc9UtgRPnPif9Fxmv5LTgtCD69d17NYgugETma3U9u5CfV",
  "key9": "2pztpkkF9mhGzZeEGvv9fD4EGADr97mxcV3hAJDf4S9WtWHUw6QrtwNGRGzQP21S4rRxxptUVmmQVUY4DRGXCs8v",
  "key10": "4Pa74MDUB16k1btBjfWMard7u5yvD8Q3ZNq4PojdYFB9R1qh5UyypfvqrFwVC99QNYhpW9K33shF8AGAsEjDEzS4",
  "key11": "7Wu3THVPpZK7ukpexZntDMFBQncnn4wPPRVdqHCiM3rUaW2NYTDCc5Nz5UoT2ATfXYbToD1H31YScaw26QeBvEK",
  "key12": "2yEfYWEKZcKRBKfVap1aJn66FkxRyQaZ3vYyfZeSeKdP9GNYNodZrtCwppM9FsYKhZyt7sNaAPwTfSV4bez7bCTK",
  "key13": "4pHTQBLVYpxaXzMrvq8EcAtshwRLH7mDTKwY4p1vKXBWU2jT6v7LkxsETsGxJCc49T9teqXBrVtyMTPnycYW8374",
  "key14": "49KayMKErE9w9y36YN9eZvCiPwpoXkRGA9AUuYtj3VcKpoVkaDm5DZL3mqwRtk1oVghwBSjQcTZLB67YMZecoGHq",
  "key15": "2v33TGWBsQFzrr4CbzGiHYEg3qL1Lj6vK9S1KjK8wZKEp6XaEie3tCuSV4QWZLyaGhNY8tYog9qX7JSPYCh1uuRh",
  "key16": "4d8Q3iPqx8GFWxPH2zYsXbjS4SF2Hhat9Fxpyet69iSbktadohKyDVJnoatVD91TE7egbck8opP1sphMKzM9Q16J",
  "key17": "2L2Pf8RnRuJTeWnQMyeFH15N7eHV3vDABYeeL72yeaJefacM3tw4xa4RsZ8pZbrz1Vzutrf67c2agoqLatuPmWss",
  "key18": "4odyJcksEZsD19Yeetwx2gA8TozqpRqMCGP6jJkAH9CJK49CSHH4Agg7mkYPxTZuWudQJhNw797Hc1wL6ytpT4kP",
  "key19": "34u6SwTy5MozHpMnw2DRp3dN4SbN2BNtuU3xeMFyLwMbs2AHDTKRwFDJxAZDiWTdDHWbTM81RGadSLvYUpBnbbYt",
  "key20": "3Nm3EyYeSJAumjKkjjBHnfGwFubifHEpkuLPDUzD3Hy4ZtBCCHRGPxSfJcd8yC5NN98XU2CJZedmhJg7zdRiF4h",
  "key21": "4ge4AMuFhDHHAd7CMmThVN2jg1XcUA3GvqefKYzJXLiPVmtzEQXom1YW6FDyCWFNsuvAfxG2druv7JsrkNahXL1C",
  "key22": "qJBZor5TzsJ63RgGn2asEo4Rgr4o8f6gRG6ip42m6adFxvVYA3oVsyMv75ixY6e6WEY5h847AtGa5bdJezAbNWR",
  "key23": "3iwKemLPxUyHKSTSGAWwFxwb78A3UFhxkj5DDPVxNXfHrJjmoeMNganaxbe3tGaqebV4mwC1PCx1kkLtJa4WNE2i",
  "key24": "5uv6J4Z25PcnMdpoAjjsRqL2W7i9WRAF8FGn7ZQ1qUFi39GAEPN8RtzY7sRmstyQkAih9YUiqevdSz8qS9QAbqm4",
  "key25": "4Tbq3pDnYj3psV37HV7n6upJNM3k6mNG1Tmd7avNYYhMWKrR99ZqAVhSRbgC7VoCAjn8wF4vjG3gmkvsshVtJYH",
  "key26": "hURWgXhHUoiCxDvHtNoGFsiFJZLueZFVbrSbdCrUfprQ8Lsq1HT3aWvtnc2PkaKxFcA2VVs6uCVWkMrhzrvL5n5",
  "key27": "36YCtNZZiPnhkdaeVcSKCFwYcenAeNPTZUWu9ZhQBbC2E4wr5mXMvu2hB8b7jqJReYceuuavY1PPUW6ctCdRSAu7",
  "key28": "5Xscyp8YQZPXACjgCaNfrEGx2uTx9TYHAPFTuYnXit9U6fUu6jq2uZTD2jvEXpYKJPWqNBhRpvy4Ndb83DJ4xFwC",
  "key29": "2MhMzD4SFZzMWRnZjMMntkmvpT7tAoeuMq68zA6cCuhQjREXWC7aX4v66C2XPLJ2hYgjw4MWX8FuysaSQZpfyowD",
  "key30": "26DFYupVurGXjnPitVHboJacDyxoPaNTPFsBA7cS2x24HHEz5LUzw7VggiE4jEDWEywph5jfofPfWeLJgb3t4J8T",
  "key31": "YHp4UYYK61y2x4aAzn7k5UiSUdXDqL9hS3QX8g1BG7h4PuibaFSZBmJcWWgDCzsNKP97CmLoLu9aNuvgFNfLepU",
  "key32": "3DbguB93PPmuifpvgT7ExF1LaWJf9L7TYxD2CDaY6jMx8umQShoDRyeT8ek9p5UbjC7UozyAHzF42J5uYfgdX8DQ",
  "key33": "24fRuoN3YHLE7WLjqnwdrgTfCTcfCmNXNoRWANTeR5cWuqS1UjVpLCtWx61zXV3M66uY8QrqGwFngCWBn8HqyoSz",
  "key34": "22CTnT1AqLbWzRFgKmxmZDxSo2RMKMLtgQyF2PQkbWJHS7TguoW2XfpsQyhT51DwzMh2Yj4BfCQd9MEzezTwAR47",
  "key35": "5goLH8dY8iM8ziFsnit7eJCZk32xDRWMEUaH8x8e3RHn8LeLdGwb4zEbjuJc4ddWWHHLJDVLf7b7HDuWkBEBWLk6",
  "key36": "kfi24E4cw4NDS9XZ1cgN2p5WSfR57MAswPZXk9ZsYrJWPYzmW8cewVkrHL5KHz5HjmsUhZZtcVvdce1jCeVCikd",
  "key37": "5h942uk8ygeX4VUgmARbGSpbcMJuZ6j4n9yXVF9WAmUcL4gwpivkc5o4J84FTm6uGz1bvqy4J8makpjUqMBxG7D3",
  "key38": "3bQmNKNohuAconeSXc6rAxefhLsmm9cWJHpAn233738tWNx1skyiPz4mKDmNm2RWQSAtqCWSE5b6vkC63hHsCB6L",
  "key39": "3qUyMqHfxiCD7r9xqiQGQZ4gM1odGrHuGuvrXneE5PvuSheVgpu8KKa8vwnrQ2Bhk9hrMhuaj8u2QC4Grdtz7hCF"
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
