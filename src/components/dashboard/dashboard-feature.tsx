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
    "55Xh2iCjot8LUdEUadt6Nt8Pp2WTNBdXsT52rqumLqahAX8Z9WvWx4n8co9saRp1Gc5F3B8rJK56JgKmBFKmid4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SVmgvDqZjqNw9TP9bJTaA7Ht5b7ZJnS6Zby1cAxfUFkA2HyivxG646Krb9M74cFUEyRF4w7dpK4wP1ztpremxTa",
  "key1": "3izrTJKEB2FsvfCtTCYmwUKo6Es9Hjg76XiNnVn1rHRa2gejwhDHaqLf5Gi2zTYMWjcEbWxa1wjUWN65CWz7mSsz",
  "key2": "ncYR8v21TpHasFVArktFceVFiCrZpkGQwvmcpnhHg93NxEmC7xL92RLeiy14mdARTUGEpyti8BEoNmNSdaW3eHg",
  "key3": "4Cn2wt1ikHgmmPGtdwGyXo9JcphJ5WpE6zemh2uHYNGNdAU37PiXZLW1fdq8hqr3wDixjL8iEEam59PRsyc3hKAY",
  "key4": "4Nra4tkroD2NFRLVMybcVSBZuXsXrkNvJk6RVztJhryWtLUKC7gMf3Je8TJmRi9ek65a337723waX8onHan6FNw4",
  "key5": "3YGEWCSN2vCK2xxECJAW2DCqJYkMmHTaj9UvsmD1E3Dc52fD3KTJbWzfqnjx3isqBTNtSaVqfsCRi4X4uHPvGgMv",
  "key6": "4YJqX72brqqP2LuTBZ6BFqzpR7xqYJULU6K8mzdLVj8n6Apz1Q1yDKzkLDWiTesHTUUnsk2encw9qo7pYU7JW1jm",
  "key7": "644uK8RVwYE9qrEwnueechibrSTWcrxTYHHKLn6XMCjSaG9LjxnZUkxTkw6owe8zWKbiv6gpuNw65tKUXqTMzwwC",
  "key8": "EaJZtGYCQipBTRTLLo3SgWdC5VteRBUcCNkKNRqLmMD5TARmrmCKYzeBnjwWvNY9bTXcay8hRopYzUM7RJfc9Tk",
  "key9": "2QB8PgZauDVKG1hxL5qA95qV4wi5ZH1DY6JFN3E8fjNNSscfSK7V6WwJpJkmKZ2zb7ZuLfJo5dEGYpA4CbS8wMYY",
  "key10": "wuXYwULH1mpoCkPJLNqYgHNz14bhHAa6peb1YFAys1VZSNgZ9rkHJA91dtvawz5tSQs6nVvbUAKUsjQpq5BZPCx",
  "key11": "DYnKqB5jFm6FaXNig3SB2ue1gYLTWgyo4mMkbmPaBfUwFGevM7dFTRwmYudbQx1cpezSPoNMZfpsr723jeizGEt",
  "key12": "3fktT8fHoWTvKWRhbPUGfgpo4uSvaq2CFvGcvwKFKCTdVsaE4eHi7uiYodwEfzky5cYwyrVpUmi3EXiu5G6NeP2W",
  "key13": "2SgKWSUoXAVNLZK43sFB343j1Ynd9R4Lb9ftm2LCZGqf5Nm9FP82V6csE2tyKaoMAXKGeiCi6mK7wUGzUZ29jbPY",
  "key14": "9izbHJXdU7etvS3Kja26NfhG1rRxpfvQ8dTwnGTNWMkfk8yPiWqQAJ2eLiLRnftBvJkmz4cWSPiMtXdzT9NzYfx",
  "key15": "Ryp5jKcWibavNiSdChQwYj3nzqmMKt7neWGygXcc4i9k78pjCP9LGZegw9zKvqN6fvcfpV5bXNiejNCqaZ4XV4Z",
  "key16": "522egLrNhKnPZUgVfZ9aebofMB1KqjVsPSemAX5bHKb3PhAox57ukNMApwN6MApN63ZLACxB9L9S4S1mooGj2yfs",
  "key17": "5djYmQECPyow3eaNzM71JYxtVYZ1SuwFQAZgYgwXgJZDnoGAfdkLR3AFryBjLnc1smxA7kjGNR8gQJiNFe5wMXSE",
  "key18": "4SVMP1UVtUPyRKgjcRSuAy81GgTERTq1sfdWtqPKei8QLh5SgnNJTHG9mY6PC7JrRfB8z8j2w3PkKqmXnAscfHh6",
  "key19": "3S6q23dnBtPZPfCQ275hkjwnrA6mAX2xcb1VWWqFZNmq4S8ihCK8znWqDFVmejewntY4fcCruTDRBHHvdAjhteWm",
  "key20": "5be1mggTvBaPJtJWwtUp2ZTfVB3i2ZRMkwCfdNDjyYGJ3qe7grBazSFktgaV4kEqpAArSGJmeBWuirJ92znKXobL",
  "key21": "3U9WvdxwxF8jMrWy9qAibdc8Zed9DnpS38KnaNoZvJMYuWNxBNLaXwSnUA2iagaj5KkxBxBwaEf4aynDhr8SsnzW",
  "key22": "ecEWqQx78p4toQbYHh5P78mwAAfcNfuqSeCSVqZ4EeKU91y7qiAAcVatVTJBJQqTZ9bqsiSBquLEmxnx7buVvap",
  "key23": "2YMBMHZhMsjUnYDgtEouQyHwYMELE1123nnq258e9noFZ91DoFC97x9Tf4c6JaMyLhev6pC1mpLuELTvArPwndiX",
  "key24": "5euiSLnD11Zw88iQnd4o73DfwUejqnpTBZGXjMVxeRG1f5E1icSRDSzqCf853YYF24nxgkD91EBLkreub4xBtJpf",
  "key25": "56oX4By9s2LXDadD3SnxEYjM6j6L5qPfM8C8EHtriwpdd93TSgnKYpAavb5daikHuGx8x7FvLkwGZ9meGhJQ94YV",
  "key26": "5dA4b1bkuP3erT2GVQk5rurCs96zmDTMAv6HGwwDotgfNJC5sGYznUEKmbwpjT2zEXkZEoSk4HhAmzVr4VK4ZLUk",
  "key27": "5sZiGM5hyqSvzUEn9E51jkNV8QAMAVPPBd45JypbASfh8gDWkLRnWX1nxvHMDS1EGnRRez5u86pHf8oRuyqEnqqs",
  "key28": "3KgdY2WZH3WCkZotAxqTt4VBj3PmfZo9YbWdpuPHc9dB2pzLyEhGtMVk5R5i9Ra9MY96tP2gmVnwCyp4ZD69qQq1",
  "key29": "4XYB1moQFy2nNcsKmzi699Ag5SJAE2H191KCAaH3AprkcaKHrhbSWgrypyEN8bmuQu9EmNTRoE9hP2gaGYtvF83X",
  "key30": "52AJWcM9SBZZ4j9Kafu6Tq5dR2gTb1yNUEVqbgJ8D4ueaV87PHGAJgZidEeS58mPcriHjLb8WtSz677bDQ5o7keD",
  "key31": "4b9kH3pi3iqRdrP13EnWFKuaPsCqdA84P7cPz1HN31YTyZLAvmJrWAJuAzjGvu9DSo2h6qUuNDQRDnxBbQb22Aes"
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
