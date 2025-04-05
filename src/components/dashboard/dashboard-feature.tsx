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
    "3EEGWwTN3oDLQ5qqT8GGGn2sBDdkpUAGwDV6gXAMGdMACvmbGtUpGtwdTcmqD8nxnkYPMdxRbME5Xypzp4AekmG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Byh6DUeSZvPejimrfThVCt6XvCbX43zBRXXBPuJ21Ls8U21sjrgBWbUy12xnbTCSTpoaiMKxzQRmFSxDiKjetW1",
  "key1": "5ksyCfeFKMTQMKFtFtJhbgvQA3w25aeduRzhXLzr9HCyevSka6inKEhm3uYh9D8iJweax85h7Mcev6WdvTo6szuk",
  "key2": "3FjdJ1UFyTNP7Kp8Qo76ADBuetfHbZtEyk2d7fbqEZmzhMqdUmmA3La8kp3va3M2D6X8cD7f7iX7EmH3EnxsAKGe",
  "key3": "3TvRgBZeznBYrjsUHagcewVjasbfrNbCqJu1besTBeq1CTFAkSunT682kn6H9kdDVp1mJdBFZi9oYXELJXZmcYg9",
  "key4": "4LBDrpuyMX37Fhap6PDAJWtboTv7629NiQCf6D2EgiSm17775d5e6aJ56SUYwm2QmY4oyhHMF9NCWhqXhzXQXC8x",
  "key5": "5B1iD1gpvdnsV3WNTRKuHzS442PYj2m1b1PVeDtsRv9zjKzQnpCY525CE1xUeKe6XNc3sKNHrngkJdkdWXQF1Mdi",
  "key6": "ms9iwEufA7wVPD4hdysDhdTiNmnvppjx44wPprdbLn1KWMGn5v4VwkupZB8HqtQABHsZcomKLEc8GbKPXgWJ16K",
  "key7": "3KJWgGwUmCxjRjypV5P5kryJfyPAMTVfbaQpKCKR4pmYbpZzSxcnmeRZMMRKLBnHtt4UBXDgpbLDHFyaMjTCAfPY",
  "key8": "3CXmaHXvkP5m7ba2UCUF8zEDXMtS9UksrES48V7MG3cb8xniBWKgFAbeihbbA4i3AubZe7cmTRnc9GUJ2WSooUVK",
  "key9": "LYtnyzy1gUZQ6maqaGjbXnT7S3yeMwSdTDGM6pN6LPzXDHLKEamzb75B7qe6uvq6UsbkcXjEtw8Qg9TeVU5HmeL",
  "key10": "2Ub7wuHXXyBdTXUB8Y4AjgiXBNtTT2X6brNYwU2n3UMeY1kCzEEtgsXBiiPJnGKdjsW2GHQuvj2rRFfyLT9rFLb",
  "key11": "2cXdhHRNvEpwhQtGg8V7NYzUihe6dmKCaTPakmgTuBR7fbv6kTann7heenemThSZZqmVMUZLGiScZmk1zr9DFiz5",
  "key12": "5YTY8EQVr7KYBvfQDVwDCjdWLJJMtBFmePd6biJubiGVshu3DT9t7q6mWv6bBiep8QiAYcLFZcy3iCMZbFdHbsBo",
  "key13": "5ArcYXcY1WoH4ahdFwJeS7wy1fZSZ6hHcm18xmiWa95egDvhvYnHNguwvPpzNsLFMksVBKPJejBYWjCFjUGAAryg",
  "key14": "2Dk1HRQxro7f3JLeyQTeqAhvaMWhSR12shRRGj2qTnM66xWpE4eP3fhuXNzyMerpQ82ChEAbS1Zdqi3TwDAytnwW",
  "key15": "5kHdBw9LLDNCkchuAyumrtKSZ4A6nppG7HmBNpz9YPmgXAT7QRWk37Nf23s4XZTqDvkmPWDpiHQweBvRkBrpit42",
  "key16": "5dqJm23mqq9shgXtXyV759MPNJbH1AJ14QAsHCFDQtWr6975EafdS2jn6JRMC4eUWJfz6oSUDPb1PQ51RXHEGwj7",
  "key17": "EKbQdohAusjrg98wBcZcX6YPv44g73ZfZS4tqkhzH5Gf8QxG4Pvj2SUTE4ziv35wbGQFf8WCdEawvh2hpAGHsoy",
  "key18": "SV3251zWxVHfTYo9TB1ZSVyGk3dTGPNfsuJkfiE9LfvXHHtGFB6RtEjKT634FRoui4RumTtVCJpi3HBv6DWwpNQ",
  "key19": "5cTRmKZFBRm2jw51SmGDREUhNMM7gJTavrheE2vFGnffWiQdo65PeAi6TmFLgnN4DiiH5wZKepUXX4GUqgYJPbRk",
  "key20": "mXREXooGM6kvd4a3zzqqxXrbNdYTe2Ayt1TSFBMnmWm5DYzqECQVx5bCpf73x2UwWLULKJNvuqiePxgcDjvVzWf",
  "key21": "59Q9t2eNFAfinqi8656GNfE9ScxYc922SMNKQn29DLofCrn4ic9rWyQkUFyxaxmKJmzvhv9QuBaMS6qsGCZ9EX7i",
  "key22": "32AiJBxGSrw8jnyagjhfguBzf4nYfyHzhJZTKXEZVE9iWkus9XQEPEtgDcSaZUJFXtJws4LGrowzTxJi3SqtHgqc",
  "key23": "57kTvmxJPoWyD2aouDVnq2fkJ19yXZo91Ypki7BCMZSYUT1tpG6RGYx7zYvWYSpJAWCeW5TSry5YxvtRTHc468ej",
  "key24": "5v9QHqwYyUesZFn9VjVDkHzCnNtXL6q5F7sn7qQh5kLNncVHDwcNZPtRTHbsFK8KpSqWpcQJA5o9tKZXvDgPYF2V"
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
