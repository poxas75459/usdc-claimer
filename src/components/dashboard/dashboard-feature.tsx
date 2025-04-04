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
    "2UbfEyVLCXwjEKAcPEJeRRA8uw4HLRYTz3XW3JwrY9M86p3sULMUgrRC119fLuNcAeLC1CHdZD9fmUffycQvwvw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uBrejdgEBGRKLY4M8X9Td85eGx2oECCNazyPJa1ptbgUNu4oj3mcgojyBakVidA9mnrTNsDDGjki4pqqU5o1cca",
  "key1": "ekZj6dvjaScFbvFxugGzibhPGbfQ9fKiMzsKagEUqTjJxjakM13MuxAb5jWg2WYtKTTbi4YS4fUJHzEjbcRDjnN",
  "key2": "3NUsT7wxMCpB594GfxbSTPjoTF9Dvr9qRjBaZEavcfxg4TbogUbMaqF2vWZvFWouWt59tZxzWRgigFeRf9rBadAB",
  "key3": "p3eKy5R3y78zPGGFRKTcN7ebRjJjLpmw25ns6dBxqtzqj4XbW5hSMv35GGSyBSmJvodFjcwFbis1zN6xqguZiPY",
  "key4": "t7H7HxyZQ6czvJPDUmzraNmtr391CzxydXP6CCMwG1qvk7rHPUPwXJFLK9FNCvLqzuJ5s6wWop15LMm8ZbavGEj",
  "key5": "M44Gs8eahxoyzghpkMc7jvUXNmQXXnpaFGRs1GvLMGHyoz4vLvqMn2BNefxt1qFYEncPMp21vAtnEqoDJeufX42",
  "key6": "4RJad2RKy9UFJ79Vbbso78GTx7DTKDFNFdPMxqF4N83SyrSVhgd4kCqM3494CQww27FXVzUK1sDTwTuyy8mpuAGJ",
  "key7": "4g7Yypnjj5bNt5jVPUww9dtYU99PjCPMhYHZZSZrq6621nLztYLCBzNsayZwNGxwMXdGHLL1BasGaLp1dACrpStM",
  "key8": "3nDWVvUNeFpR95CoTkB7DCoAonZG1KsFsaGP856JeeqXCenitKbDTVJXT9n19Kc5NzQ96QWyzxcqKXJUc7PkUQZL",
  "key9": "32PaXg4bhHsjkzApuEDUEPhyFZAfa7AXVRmREVV2T6kVX8n6Jjg8ZotTZCdDy3aBARRfCejC3Kqxu7qjpXHssGmc",
  "key10": "4uLupDm3LSZWyEytf24meC4yizdyvZVYPweBZs3T5Noiv1yk9XnL4NA2bHCTa9ENDJrWCEVFB26fJEiZnhZXHX5n",
  "key11": "3MQwj71rVw3UdAuuQtXm2uGSmhtVrDvPdCe3gBvGBmdkaPCQbYXNMwACKP6Qebtku9zrFfqq2cyLknZbWUCH8bMG",
  "key12": "2TSNmXYUxrBM7ezZXwFSCHFvCFxAxwprUW9UuuGBfB8gki1Qr6RY6CjocurzzM8fwrAh8FUU6Z41wCJiZ9GH6fUH",
  "key13": "hm2JPBbY1Db6D81sPNZw5Ekd9E7SbXY5CTaqVrdj6mAAUMBdwZFyEo4beFVZUvXGW1PwZRvi2HSvJbv6uKkJCMu",
  "key14": "2wssJNFdWp35NH1XqHYCH4yx7d2TkqGogeuZWLXgDdibb16KRpSrQhum9gDa6hUzBHAKXT3G2nkkymibFECEZffk",
  "key15": "2XTVd6xMJARVDuM5fofePkUabygH6KY8uUYSHqDLD5Z1DdtyWyjdP6QCEohQj59kABULVL1Y4PenGfT2FD7YwK4e",
  "key16": "2MaEMzGJWS5KnwMqzu2ufcyGkRJwZYyz5q7ityNhgqW9tJLTKwR42R6MjYVfAgphtNoN7x9ePa1UNeT6Hu6ifrnc",
  "key17": "2avHb1DqnLiVwDFXoujBF65fiXQH7vcnFKybBTpVEFvMHWL8Q5qXEJtwbtiFDqENTKiqJEW7hw4Y4EmFHwJh6sQk",
  "key18": "4wocB33TZFA7eZQ9Jr26sY6D7CH6szRDbSQZG9NpUTaNjXACsPk2kU2a9jeZdmiUSjuni4PX8khrFL1HrVVoYUcv",
  "key19": "5y3nZKd3CeRJjaBWQuvgni7538LTiCsQpLhpaUaFsS3u4e33XBjuzAAwzaPzcqWtXiz871hzZPZr7vfVq4KXKetF",
  "key20": "2HzFZ8DGSkWnC6ajHuQvmFf45PPsGmtvT28diABry84pCPK7p72ENAbCDK9NU1LNs3SgcsqRxR1V8UqhdZWcs1EJ",
  "key21": "47tp8ALD3shx5WnGe2dHt2BLbRgT8LKQ2sZrkbdQEKDaWmEfernviqknYCo2vGfzzVt8Ky1qFvqUiMgarPUnXvnr",
  "key22": "4bjtQawjM6yfwUBkFHbEzoyjQ9d9EG95szU88DBZZuwq4pPRprpgnnjspgSNRS7gnWMioXpNC7N4yiBEqLEKzDZL",
  "key23": "2hoYZXUi9HwuNraGrTodnfax8aW662F6adhkMVN3Gmo95zvs7LGqPYir3yKTr3fkRPMgyymwnRkoyRSuZ53qzixc",
  "key24": "5uHFQHQGD4PY7A4K6wQ7dWoQocXhrYwWN6FYMMPZ1qenW4nTnxa4GNpcCmP8k9KaYUrRaLBuEyPcmFXpwygW9qtH",
  "key25": "WPw3czaQZh4P51ENmu18EWZqCA2Ho562yGRe5uEJ914gVBjiXAXMmWM795hfmhhWZcAc3s4cFfhpfnDNxSJ5QX3",
  "key26": "6WuR4Zu9Wa7tYVF88kXoREqyo5qNLyBxxSYcJK639fZrJh5yGQfBagPbuynKghmyhqizC1NnwNuMDMKvzsNfLtK",
  "key27": "24Re86JVshQE56GHvYbWpZWMhqiPZDojCRPZYYZMbKcKw3QjycjFGkc4tDbKwUvTmpr92FhWw3EX4MJsNXQ4VpUp",
  "key28": "5HPAPnp15MXNSxQSPDn891sBYiEovLq1LAexQRRgDPa7SdsbZJ2y6aynfCBtJcDbCuRbGn5TozXmSTH7mgKuD3ze",
  "key29": "2NUvQzvx9tTrg2nwetUzBMTSDhx2S61KdnejGUNp2n4h9PPsh1TXxZD21ieb4vsuHJ95xEqro6n1VGddmTVMNxSq"
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
