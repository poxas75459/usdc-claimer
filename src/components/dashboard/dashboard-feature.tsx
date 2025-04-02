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
    "4E37ASaxwkAoRTuUJeQc76TXWwWorfcGqjnZUCJkoyAQrQ2xnTxDBkC6EswyqxPRQAMESRDcVjmtm1c1QbNAExeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WoDADQgMUjMM83kLaWb1GfXT7rYiEBfcwyYj2kjxjHWWxb65rVsHqRvWe7zeJWv1rDNpjSoiBWYUXFeHkoceUEG",
  "key1": "9o1HwmfGBXNEUDQ63d1LdNQJmG8fkqqkr3yLExnna8DqPcact97xcWRd8AhDsnXVgb2V6dnMHaSCcpWmobfXYT4",
  "key2": "38d7hETGXWcJp1nBcdXBLHJGJe7cbNpTPsZ6soApStfAFLBFaXcysNBRRvq4D57Lt2B61b7S3xrKtYidvEAbjcRG",
  "key3": "2F61VonW8gMMC58DpoyArgunGUKh3VfQcFE8aaCAB9xhKthnEzaNKHRCtYC3tPTjpStufAGPEBo4XPnNMKPRDJZB",
  "key4": "T7QQZgXSqB6vf2j5QjPA3Q9DiPGppspnRjXhDUBzqGq4antdLeb1rJTpPwLkAVyJSvUvmwZWwFut3yPtQnbp9G1",
  "key5": "23SKcUFEt4uZ5toyhtDvhcE8RbruVD8idm4Ln766r4uqtWe1QBb8Wn5d27EHyfVm8eKLjqyKJzbXvGBjFUgn4g3G",
  "key6": "2SZwhQjGoPG4mx3XzxG9V7Mowmuxz9tQ3NQUhNg6pAQrrpsS53Xyp4A5Ne4qYpi4wew9xLGiaaErmVokpRQqCqj4",
  "key7": "mePs2au2reXfsJMBZVYCmcm6CB1j3mGo9YJ1DzVsWzVCrTw8Bmr4T6JMBi2Ktomhm9UZ4d4tKMu67bPePkgCA1B",
  "key8": "5wubuMPm9wZ9KDpDdjLZAAc72T4H4n735zxTtu51qducN1MB7qdyjARrBx6L8yfDQJ4Ws89K3Se6dZWY4Xotmsg6",
  "key9": "5thys7b8Zu3HBQyWfW22i9xp1mtSi9a6v5dJAjQvALWJmrtNEtrpp28ohoMVQGDRDXoobhZWhoNCDw4qJyJmXysx",
  "key10": "2yZdyYnUpfyhuiBZ18JVzKF8nonviDWmNYZqWZ63mhxnqyfaCNyW4JMLhoZm4s5qwAf41442YLnZgYk9VP1fL1ik",
  "key11": "nqdR1Wcc4jNg15LChAELVcNzemnKfjXZDSbsTiALGLDfG1XUr5o1FwrxEw3sRBkNZ1mmZiL4MCso1r59iL7K4HB",
  "key12": "2NMryMZa9CMTuWeLwBfj5uo83Vsq632jz9KsCA4yNmnZzDM9WLGh7hDkcKz7PgZRHamwgFDBW9JeUEcuZXksM7GE",
  "key13": "54MFSeULdyUEBw7HW6Cfo9ofYrhHM2m7kgo7AyuZeRwL8AJE2xJH3UR1XxWn1v3m4WjBcTZTKGYZJEGAM2Qw4rFb",
  "key14": "3SseHwRKboJ4nZSDH5ikueYZaYYfMXmhLJ99hyRuwVMenivYbyNHg2ZKsv5jEmXCJJVNk8nerxKHDWbdhvMMWGnU",
  "key15": "618GMEizaChoXVqAXdB1TehHvdV8Akh7Gjm87bA8ZLyiEqMDEyUDE7cEEqoz7yRAj1cwQnpQDXAKVYgzs9tGLYP2",
  "key16": "7iqmJc716P6ev7L44f19Hz48h5swsvYbwERYegkwaWTTDoZYdxjKHMGXWxXviA48NaS3BVjFB2umV77G1iMW1Hm",
  "key17": "4ReCPBhXdCv1mkC8zUkXyDYbTrpK97yYRj9giSwTjzV5oKkRAF2BKZKrtKoR7CEre1ZnsQ41SMuoD4oW33ZRe2F6",
  "key18": "2fDeYBG5u2ZF5Th1vDNwSYJGGHWHTgzF6vsHJ3QQnimqGecVaK4BkWo6j1mQLQ9Bypn5HnnkeoMcv72z5r9rb33b",
  "key19": "3VrC8xmRxBY7VGqcLTzxwnqpsf32BLgmYBHDBFHtvAUDrsGx1f6Gb9uXWFCH7pJ19kVoFrVZYuL4B4QRVLPmzq8C",
  "key20": "sNUWF6AvLJfYdf2B68LkeBEc6utAj6vfH65hdLywjTgotToKRoeR5rcge7bVzpWjNviYXCmFvnUoc7yuQC6SXei",
  "key21": "22SotXt2T2s4SsUfa5yGMu9YujcuZ59kW4xVJSornuTs2Q2hf1E6NuXpGiBWhniRwKNXSN9pk5TKfPWVz7vs4Q38",
  "key22": "dVZjnQbaAmLpXfTCVDuHMZ4nNbx3EtKoXUwg2QBPsQ9RQqDhYEZg3zaTPpGKPPZCCxJWUPcxf7HufXF4GN2MLEt",
  "key23": "5S3qzQ1hDV4E8z5sHokQbwZHjDHpAhRKd8NmG4Ub4igVnXLiEPRLbTB11o6ecifKvJZQHx6Sysm9YEs3321yfKig",
  "key24": "64nJjQJQFDPQbWLU5jyaGeXvxMYhALy3CpRxyj1qj2BHNcP3WjvaCrh5TxXK4zAm2sBr3Zk2TJgqxtA4PxH2TWCT",
  "key25": "5AHvFKJ1zwkeJ77n8kXcpPUpyCF4KZ63qe3Ys8drUSmGMgXLyWEczt7NYk2CQpGqaRyrx7S3h827iQP88WMXffFi",
  "key26": "kenRXYvQjfzgaZKPNh7G71VNH1KP2YdyU4Yz4GN5dKSVBTXXZVTCoMDQCnULhvA9UnN9wQyj73m2TAGiRDFW1rA",
  "key27": "2ftCszY1bVXjgKbHQjdGVjGvKBZHznTxGkQfN2kmaPCjBKTn8vNBhBh1pRKYoecxFVRvY78Xt677dS9PzXiEjUNF",
  "key28": "5V5JENemDkEZc14sR81Rk4NtgLjpxgFfaebhJ77zhHk5NSQ4X4JH3iVtiwemoBV2iPEF4BUd7Umg2CymR7ZvMmSY",
  "key29": "2ofLJDphMxe45BbwkMLfrLt8xhaqrP42S9mD4CCRdhn2Mvw4PESNfATwanyhmdt6Y3JNLdLC5KniiUTv4viRaTqL",
  "key30": "5zw2RPAEHYxgakDr5ymMarAnmCkrq9ZhrwgaymBmF9YAi3o3PqgpSjzTVwQ8xHM1yTHWMaPromf2QD4rPa2pzfY7",
  "key31": "4y7PfV1M7WQpumWqkAaL4pKbPQDMoNwt8bbEqkzHgAGoDR11V5QVM9pnA6hrYPCqvSCih9eNWSXb4Ug3DdJQgkVL",
  "key32": "5yn3pm1Q8zg3EGPAiV4hHWqtHSBYvJDCAhJ7aFrsLrD2u25uswzhFW9YkRW9UcET7wXBBPXD2GPM9eHre4hTPoje"
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
