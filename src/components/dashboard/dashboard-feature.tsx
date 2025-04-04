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
    "b8mME4288oTjmnBLEfzaRC9VUKLD3H5j3c2yqZ31ZbFA6iYxwScwUoi8GQpcY9GJosUtQyh4FQN4kzLvwiWvppA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q5wDUM2stw2gTfbqudCfc1XR7JdPGCQoFV5UgzBiSannDze7FfVF3Ei22MWxXymgGUkXum1MWLcDceVJh77jjSX",
  "key1": "5hYpvvFjS7Ybt4pBGqohMGi1RZ231W59keJAPkYyAVEdjsb5BzanQZnanEKLSk4pE85xpSCUhLUL5f2qNhVgAqjd",
  "key2": "2wDQkeoWRnURCGEFVcbSUDBvPmPPvjyAEDqjq4pggXhNNEZhaKda5d99dFZgUTLJgbsMtr9Borg4zZB5zsRSQLxm",
  "key3": "Y4Csih6sS9va2aaddgthFygPHqQLwTUpR65mnp8aDPEGjfVxeESinZ4caSzS9X5hDxrhpWcrh7gVWrGBxQvhtQo",
  "key4": "2M1UGWzNi1er1ujr6wdLRzU92TYxoyTmzQEyWTBHkvEQNvYVKEZkte6Y5THsCXFe4PzXPEbo8Wq15gVGLTtyU95P",
  "key5": "3DqN5Sr7WoeTG7SSDkeBhJvcEVN1QDqnV7fbxNnbih28s6SmgfdPhCk77k6bhzJu9v5oVYzVTUAYtxKjUWSVTgK",
  "key6": "3UF3LdbgjxgAJGjwKt1o4f2T4WviXtvHiVGz1FtcNyzNBpLhkMiFWzDzizDryj39rcDeichP9QuLbusWW9kkMZV6",
  "key7": "5TKCqyvibSXGj9FVUwfLPJtcvuUpHMXyPiLmTzqtGCEc4hkahWc1dQJp9DdTfrGY8H17aFDz8tVPvqWq6xVKQJ24",
  "key8": "5b84CXEDyZGUbt3kc7d6jVE8GJchKc1NLgwzCtunb1N3WKGNdbXEmvVnkAgAYLXVzVhPxchfAsFb2rPoyoWgvBaP",
  "key9": "f3PbpPrsbqP2smNVUjwdWX4zLxZANhMRS5fsP9gFjb3YMnqdGHMdFUMQHvbywaoSLD19j8tGSrzpK4NPAwdyVVz",
  "key10": "3k9MjimZhWL47hkmcRuttx7N98MwsWr4b5WBtMDeykWJ7QAXn6QnY7hUbqaho3jMG6Y9qkzsM9ZmD1veWrW4Wdxu",
  "key11": "3Q96cFgo2LKwKsyacnMFai4DGEqjgkvPNMBpgtpobf8DVSLjbMGfRHkuN9qkVLzDtqpnV5CUGi6uDtzXMh67wJ4r",
  "key12": "4FYcE8JCWTL2GA5d4FJhAzSyv7EP9PNVRsbf1pK1AeYqnfxK3hXQSycKfcQji9VK7q1FEX1erjhZFhWRuHaSP2jF",
  "key13": "5W4bQMMiBJK5NJxno82wuVAadZ7SFCmeK1oqfwhRL5ACM2HFbMQ5YYSo7mquCeFfqfQ6oFL2AFibkaY3EdUCXcT9",
  "key14": "SXo2vVJxkQY3xNPDfhkaRfKo38YiFstxbRnRD7J93r8u28bkJofMLJykNk3nUL7tnMfgGFMQk2f6woEE7U5tUBL",
  "key15": "315yyQi4vAGsTXB9eBLgF8ykxTGxPDuExiFcE86mhft1UaDPMXRuZ5HRQtLysZYwbxifrq2o6cbLAK3JZZRY7QFX",
  "key16": "4f2wqVjLRVJcp6RSzJbLRTRa593WxBt6UJqMMGUqDVpPX3RXUfdCujVN8gbH6rRz3s4XYc27NexNSNvvDSKcQDby",
  "key17": "MoPHP3xHpQMbd2WhzXYgiVW9VSJgrbEJr5zp5DuDL8SmvXHW6AJbU3aasJnhVydgNXbVb4di5aAFowp2eNzw5b1",
  "key18": "4KX28CD5689GCfRkd42jknwd1Zb1iU4iRB7SAfDEJsAmPL7L5f5HAAoyPccFgsh9wo7X8fAumwjqyZ94x5S7mSLi",
  "key19": "32r8egZ6MSyp6Xy9h7cfYWWP1TmmSQ8tmMCrtx4gtymC48CYCmGbfaUQGr71MccgLDtH3f4pUbpfem5XhWZAWQpc",
  "key20": "3tq8dRk91KrSKma6yFYJCjtsKSzfHHZD3gbFgTu2aHH1eNji8kpAEg5zKToq5cVarmc3c4amiAthaYVeyDU4eem3",
  "key21": "5DKiuD4YkPSbSCzZJzLaVkbHWihvuSCdUHmB3Bh7MMeVEnZAvyXHSa1U8nQbus4a5GDj4bfX4ikbXd7QnrPbYKdp",
  "key22": "5L2nGmTWtwwi2mJJhBkFy7U7PezhEVTyhFzUNycD7Xu7v8vGM1VC4im62vnqmE8cCCEEXY8mGGCSYJyRr9mmzuSF",
  "key23": "2qNgCht5NWqw4JwRkTsgJuhZ9jhQkwLojRnF2s491ySaqjW2NhZnxC2L3885HuezVaLXN2jWBWYaptpEF1YzkzSc",
  "key24": "34JHwt3J2FLESS8DF5RUY7Te25omzQadYuQRj28pbxpvemf2G5teN2qhz1xiXEd1txYYKHeCaMErakXP87Y7QGso",
  "key25": "3imkBTB3GSaCVsqBEVdZDNvjcC8VkYRptacgsBNnVgDoTzfBCxjnABpWpcHaewysAFM79Fz1vgn7SSNXBbr2V45q",
  "key26": "3xeoYtbjFfeaAenGWXzwNMVrdTW7mjZNLukbqr6Y7u4LXjor1cineo59hsT3aon3z8dRzkqXxgDExepEQuiwTWUC",
  "key27": "57JLLr1CMo3unmgkdCxgw53PYecG4qhGxkZJPrhEPJJwyFFnEdhhMtigzSMhn8fMSBcEMpzSt3SZ5UM8gm3FvH1y"
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
