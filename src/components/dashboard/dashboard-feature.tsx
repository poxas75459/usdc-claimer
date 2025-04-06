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
    "nJcFpFAJ1JCGNGghJ3NrbuVpwUTHjDx3EhviaAtVTjymQosgKkukoucnRK8NrvqBb2krjKGyQD8Vfpb2SeqtzHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CWwefyAURNgjHuzsXUMcPTKDPq9CHRQbCfPBnoUNzEBh9KFZag5Yxg1yYMPSTZp4aegmqDz8NoCUnHKopXiFtxV",
  "key1": "5jtrGgPr4T1XFuX346bmsSkU5NvveUPm9xb9DZDdzUnTafm1ww9JPfLQtfRfe2Jjknx5mtfPwupBUeMDsV5itj5x",
  "key2": "4eDsYByNahcvAn46GtvhhaeeRdrUdWyz1treb36jfE9sCXoELsp6YcbuNZK47pMJV7HJq4apanaHCaiZmLXBSDCW",
  "key3": "24Y8KGQkdTHwRiGT7BG8rdTA3bEQKqXFmtUJL6P6qiAaodC6rn6ktqFUFfGgVcHHSPnjdmY9zBnpfYvxuri5wvYp",
  "key4": "46xYr6ZcGPRt4vD2EJjNTYhwTLSfhptHnZNkghqGG1LZ9tNDSEDpUkmVNj1gaEnUgV9o297uq5E9oAiA99ThrvHB",
  "key5": "4go6ZdYFZaZ9HhxaAnyw6FPRk2qMPiy5VMTZwePaJBGa8CvzQyoPRn4zNybNQni3asrUf4mQy6Sdv1uenwtJrTUn",
  "key6": "22vcd1hFyUdMwnAtiFQmtt7ZKTbfXyf5mF3WTceUom4yTqW5KwE5yYZdCmkVUrByJXwmnz4abafCXCCTY5M312Hg",
  "key7": "4EivCSxptVqGPATtm4oXcPXvdsznu15ZgFDpqToykV2Cx1vk7AeTB6SLohHR1tTKncn5Ccyy1XYrBMwTKhF3REJN",
  "key8": "4fAa59qU85uBuCL8RVoBDzbmrvCNcqkYPFPz6SQxmKLjKtC3vigyVMzFEXnHREayi1JPLYxpYANBWZYSHuC3o5op",
  "key9": "5ZZbD5B7HsE5e8QqcjgoyzAaScPn41tg6ZYPAyjP9jCJwrcuG4bYUM3US1a17axXxPfaWwFk9A17mnsC1EXJZS1r",
  "key10": "5bmSu4ex4RPUB5mNMpbGWt2i3zeHgSpYuPC9yFjkeZPcrgqmXuCNEEgVsDU1d4KAo8BPTvxS1d7X4VsKScVWaA9Z",
  "key11": "7ZEBn3m118tfuyfP1cHKwUtE4WZHyeBk12SAAmpUc2zGQCS8CwwYBBxTNiCUc7145vhQRZAzthF2N9uh1iCGaDe",
  "key12": "3XrozKJadYxzYU9878pytXYrMZX36CCdXiJmKcHMiiHRjS7r8UkrBrKJ8yjSxmrHgBrB9NBDuwkGj6jJ35WaGuFj",
  "key13": "3YpSdq4SqKr995rz33JQb9ApKTuuDhau3bSZJ1QtmCoxFDMmSt3ayKJ9vB2q4o7hjwCtABHzmUws2QrqpzaFC49p",
  "key14": "4WT1SHVFUv4vqXBBx543nbjYKQPhTU8USwZoYGijQg5tkNk6DoLW2bbYiMRBHk1fsmnTpMdAAYNeDkSHZeus3Soq",
  "key15": "2TN3YByJ1iD7YRzsa4yxsAhJ6SKjcqDTfbE4SYVh2kHa1Pe3xLrpmckVgwYPNkKGyMKEWvEsgbJidrYf9yERjwYX",
  "key16": "CLB8N2c65kHNzAdSzP8e9vPepTJPX62GCs47D1DpES1PakijwAW1NKRUE7a7V54NMzsoZn9XiGY6iwUPGQeSSdW",
  "key17": "4CaLZgHuZnZVQr7nuNsLeV1ZGtcXbDRWWGTwMvD5EXFaTTxvyN3M495Gzaeg3vxb32Qyet3iejPkHhLJCdXHZAma",
  "key18": "2qqJ9Vr2ZH4CbdLSib9e4AjBhS7m8dSuMshpQtkXJZgSDQ5UcDkvmvWYSBxaNoooKnGeJrqwHBjcRYv8sZvoFauV",
  "key19": "3w3SrjxohzjFAf7wPDQCJrLvWHoRLyicTHXYz8cJ2Yej56wmxusQqG7Nctyv6Y59R9VH8NvVAdjXL3WYyxjuDu8o",
  "key20": "5i5YzPEXhRKzNAaS7gSdAXSweehiABfVNCdGT8tL4krmBmP8eYdX4oW5mNVxnnBUDeeNzFNoMGJz4Lw3auYTbCep",
  "key21": "54DduutNSh7b1ctizWUKqPCMtzPLBEMPJ9nLzNz4LfRcJQmk3F7xhzGmJnEa7st58qL2ByLfKisnXzRwNkSvEGNq",
  "key22": "2oS5f8DHSTygvg99S52GvkmeJSbS74bRYKWuUxnEjseoVuz2NzyiZHdKKNfBZDqSwRApaCkFy3gawqnH4YoCpfJZ",
  "key23": "2NyvZbxHYvk8EkfdA46NSPtfFC7SuC6zDW19HSvd1TPQnPWBeUWiEM5aJzijmwp6tcwraP2Cn8RvWbZ7ePZNbpmS",
  "key24": "4UNerV6Vrjd7vjDkTgEkqbS7TyjHgzZeksSQHam4qpBD5PbVx8KaCGguYoZQJv8YenYi7jbfL8NNf2onV2K7ArYP",
  "key25": "4JGFdtzsq2sGmwoZ4gcZJLFYM4T1n2eGDcJUFJe8a2aUtWsPZGUPbEQ1KMHddKNo5ABAPMPdJAeQG6Mp3v6ocFAA",
  "key26": "3Qsh9nNTyqf24fsuY6h7HjsBMDkLyHyhQHh89F5tQnFAtc3pzfu9e53X2ta9EvKQEagy8g6TxzuvnXiHM4BtJGBa",
  "key27": "2XagWsnpEtdZiDVgbgW5FuSxJVCTcKXoDu8GDdSRx5uLidycd5LUvuHQvm2iKoJjAEauGCAVUvBhsaM4nSCzcFj2",
  "key28": "oci6QUxyZcKYeh9b14ARU1NFMZeLr4HiqbBELSzjTZxtDXLT5GoU5s211srXfXN1hd6BVVkrJUXPXRp5qcVxn1n",
  "key29": "6TJGp3UPP8JE9y8buC2NNvufFqabNCCJQPhC1HN2qF3AencCAEsxfTfYNb1fUVo4QB1AaSYUGFZLgcLKEFLfjDW",
  "key30": "2dDC8RypMcas1NHkbMCPuG1w95RNB4znr89QFH1w6Jy4QaFzjBMko1tuD8FNDt18aNRVqRWCrWnjSsRSbgzn61yr"
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
