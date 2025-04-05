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
    "4s6mLdJjJdkYcDcoVYEzU9aDfJQwyrePteTnYt2RZ7J9LdM3ju8Au6PzaeeGypCTE9aCQijC8EfgvZV4SZhYgT4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "273tLYDApvQs4Aqie1Cwub1pF5cF2avk2a4BzWNJLMrDJhf2UXzS2WH5WNTPt5guc9qicdpiSKVqCzLSxkbCqgzL",
  "key1": "5Requt8NKrf1KAL1DuCqvpmNcX8pbYJFoDEUqs7xMjpPxoDzBPfBzkj4Sysmi3zTzENZ9HBrVTgX4ggxTDSSpc4c",
  "key2": "2jSYEnEWmc8P4Yc2EBWd7AFHp4ugqQPN41JxntTJjkwQ6L8SC2wTcXam4zwDGac53AbkfcPVhCcnGvpgXbGvZvDG",
  "key3": "RG4KbFcGFjY8g3YjVmEK3uhfnW1VhLHWVzf3mDudeHxPmkvEsdWgpnhdAzVZ7opjbNavmfyy7XCsr8ZJh7kxTj3",
  "key4": "47ob8BorKvkwkNDuc7k5bTBNaCZtdYTZ2qMN2ggeQrKbPvuR5qjNFDwgiVMGD6LWNQFb7SrUmsFYmeCRUqxffwon",
  "key5": "125xhEgTBkkipAUF6wsmTFESfCDBEN1BJc1pkN8suVV7uFZycxDFxgajREt2Y66KcxFCPhZV4ardd69fLG74wJVp",
  "key6": "3wSUiDuF5SZTnszjnNKZHw4kxs1y52xPVf5vpgALGpv28V4Z98YxJqsaRMtyzEErvLQ9Az3n9kyMqjGNkhQxRw38",
  "key7": "4YDF6n31uebFutGkkta2Dj49dg1cx1p61B9BWckdZAguJWumU4FcsN31d3LNYBmKhXwRCgUJyQqP9UobB7amfXyp",
  "key8": "4erSzLESqUQWoMsSzXwzfVwHVFvCFKxwE8si1Kux6kTraSYQcobgNmRmeMT5UsbfBvPdVEQLLCF3Ne342fuuvzAV",
  "key9": "3tkAdfq6CMGQFxYWc5jZmVoGyNZjkM4FFZvsY2XmJrwY1MsWJRfzzhNtHvFZwwZZFcayrzFy6n97J1d8p2FeZHT",
  "key10": "2zoefWWbFsYUBBRkmHVDmsZPLnrtT4tUwz8dm7RrRsseey2sQHG1A3fqZmkx5JaJyGXq1pmd96yrkcXRE3uS9iXz",
  "key11": "4dYMExHRfMTizzQMHaZWKqMi1mznqXSXr4fYnPLiZFYNnJigdmMZVwx393muFpWKaNuZRiNVNKv9ZbzLTK1ZUL2L",
  "key12": "xuyA8Edr1iQ3m9VBRtMLBLpfrEtXUykiHADvsA87B8hfT9qj2tkSJ6JGj6YGQgakmWCEaqvgjadeD6u694mbEbD",
  "key13": "FZAtBk6dR4fjUmHgjTA1aghZcoHHqzcfQk1Lv8ECqrVqsmLMyFZwMJU6azYUW5L94QvGyX7NRR8NVvVMJt8whxe",
  "key14": "37Dv5STgdsqVZD9ocVZdsUhtKoNNSKd19JnqdFvxqKAzukpv4JXRSinKuhtnnuk85GErU8jkoKYgx3Dob4DVfCVr",
  "key15": "wjC9ZvkwUX4jQJ7VRURjxRNY71aA8boKEF6Y6ht8Wmbcdnuf2rtJp72noFxgGybqLCr1p5PJCkzXZRvdrALQvYM",
  "key16": "2F6Qwy8umXbqQJqgmF4PfmzskzrZ9cjaHMrSQxqVJrsiQRos9SGqhKZMw8j9Ka5um79k7THdPbZGdgpL72xMsHDd",
  "key17": "4sPco4Y5Dwk1gPs3kdnrygVTnzxnG1HerectKELkAxPDDX7AGJJ2H511xkoH44rDNqZn5Wfx51ADGGMU34ELXHjZ",
  "key18": "2PcRfQZASUGGAY5utYRMmbmvuDq7nU73KgemD3PNynJGppjCy5ytUabMbs56U45NBRkgJtBaeDQSRdhXcFXYvjrx",
  "key19": "uiBwysH5n6yhezkQEMLeKXMpdYecJkGinHnNizzKyEMdA1QPTMFKGAwbR5KAFhB1p2xCjqZveMypQkcBhruuqTC",
  "key20": "uJYjgJKYvkDzNaSn8eDAehmQZ1kjPYsvSazKBkPanvtYhyXewdxUs92iTKLwCDK9gqjoKyNsiPpML4XJ22JqZgJ",
  "key21": "2RLLq5UXtT51uiHx6AiB7dwgnJFHD3V5kHhc2CB3QTXx4TbKsTEEyka4dYkCx6SZNco433WHxDHvbX8PUbQ3oFoL",
  "key22": "5Umm6gAcwL7QXs6BWYRFCP7rZdeJsQpqjbnc9x8CwyY7jfiiFDCAwApq9HTybNejpzHohDkhSqiawsL1rYnytGmv",
  "key23": "Vo5i7DyS1zMtzT1pDYBYKTCGemPFJVL5xKBdRRvFduYnCBUqDLNxri3D5b8f4c5h2jNUGNbKmTietnno1n1Ea5S",
  "key24": "KBA1X8J9nTjFT18yW2hEi8bb9MKe6pSG5rjM86aEkeRUfsUGSZh82UZWzjJVbP933EyaBmzc7XCyd7PUadKWx8h",
  "key25": "5dA2QzVefEBWQn6j31WqnJiRxXQzQnzZwJRmA4ZUsSf1tJXKit5NKFaJesMTBXU4F3KSfdwFmgkiwscv7N5GZ6RV",
  "key26": "5G9VeWfyLU4e79mLxTbazxZVsFDHdNb8x7TfbMUdtMLhN6bpbnTHFnQD71a59w4kx2H2Eyrxh1a78QXQ323dhGp1",
  "key27": "8YHRT9YCLNTPaux1V839LnCHHpDbppxkmNswuA8FKeoPANd9PrjoKEMf1x1A3WA3u54cqNo7xXLNTJMNdbrN1Kp",
  "key28": "5J42d9hqFBP3QfktgPkx991o9KCooPmCZqFCV4Vak3NDAkG3i8nPBcz57Rhw6Zu1kJEoW1BopACZdYFPcf5QW5gF",
  "key29": "4hAS9rPYhVUJ4KCduYQS39kHxxxu7HVeg5sGkGKVC8G1gnQtVDreYnmhyYxwahELUb7bu7gTsz2kmSYZgMWadgET"
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
