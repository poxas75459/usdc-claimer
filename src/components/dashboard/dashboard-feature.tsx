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
    "G6k5By7BgibmSU47CjLMy8JjDuNgN6uosz2smN3F2GXgdhbSUQcCBXF8EzSBi2cRzwZPNM5jRGaVRuWwDVwrCwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nBqb3jvFi4yQzPzC8jhNBMcvUaPsDWBdCSX7f4JtP5muDSQZJhcC3aCF32pjR4V75Fngxw8EoRBv5yUscrfGHWq",
  "key1": "3S3VsU1fYxksdTxTr5gEaCqNkwFWrdV15dKA6BtgikA7XiuYkDhvpjDNn66x2fdajPL5CSgb1MectLxkA2yqakAq",
  "key2": "57jTViTHzAXq1LAKKG5EaC3nJ4XkFqJMz8QJQsQeXigf7qQ9cPDPW8ALETTnJ4fsrDeH7a5vUiYdg47tyQ5SQNXX",
  "key3": "3yX41TuFR132RrW8F1zR7SQGdhxDsZcuij6Nak3ePFvruAEfzVy8J7rVxW6Qc5HiC8PVHE6AVRbynSsNmcM36uLW",
  "key4": "5u1633c6VGu41rYbqbPq64BZGzdEenRwvQmkEmLNFrTrUi4Yc9iTiR32kAapCZkEFMDAwZ7ghDQMY13ZLR8urZ3t",
  "key5": "aNC3ZpE7dV3PkfJFcUMjkGthbDK3siwvM37WSvaj3fX1aY2PKJU72qNQkHfK3mwpEz12JTs4vH5XtfXeXCWSqfp",
  "key6": "CXM6baw6mxsmaDTP7fzFryzCms7NEKfBLMon9tN1jPhpfkMSWTSsSD7SE25LL8GvCXZhULm7cD9NvPUbZGASA7p",
  "key7": "2DLvSvZ6UK29odamq4D48SkUTVFBp8tmZ57kD8a7yBvtb2eC245KXKTunzM4M9MdA6jDf8Jxeyi4ByiKBkahG8Pd",
  "key8": "5fiUcQ4q2kx9Cp45ukfjNixvGq6FGT4NSFHYttD25WvM25SEEG11ADPtewzd9SG2i39FixfwZuwrH7zS9yFV87ci",
  "key9": "4HDyv6pZm4NQoYZ4EzxhmjAdHsnDGDpaKrUvKj73Ln24oq18kc73JngKzhYWdFBmL3NUgZTPwXbRW8tZdQgZF5zX",
  "key10": "2F8hF9bwDNC6Cmju6d8aKqQUvTEvXKuHY1nMBsbBCi6AskRgY6EThnKhKWMQhosew3niHevnX3bcKqCYnkWNczp9",
  "key11": "4t8n6QFYrsSFy4jxv4dHjw1vQGJdWSVEYfdu1su13ya8wibFqwJbLumJvChw8QYXXXqZAZQuetA7rjJCoBZpmmqb",
  "key12": "4tLHxmB3ykirtp38w2zQFYwjaK3GPoWg9K9Ejsx6YGKHNwWX4nHEV4gNyPhuirTkWKYXFjofaVCig2pae6MU9JH5",
  "key13": "4q9shZjcRTDLUgDR71m97Vo4HUuqbg7MQAK9rXckEHQzyUzvUmwFSrqaM6W4xnqRJn2V3epARFt56DxFWGQrUdn5",
  "key14": "4M5Dc85Y2QFWt9aZb416SKqtJhKMcrgxHNx6b4mEcwy2Me2Ha1kfMwKMd66QRqyGVYSeb2gdVA4JcfPo7mUNGQjv",
  "key15": "3EAMpKVYDjyKUW1ZUVq68F98Qhn1a1xJSTu6ytkJxz7gop5asp4S7Ms2YyCAUGxFLb627jD3B7hnMiiR8QEMtGd5",
  "key16": "3AiysWpFPJ2G2bRmaAxPKMJCjp5PSUmY2tKS8JoLgi3tJTzttymZSr3y5Xp7P32HSAAyEDEaiJR36RjRfGi5QQLP",
  "key17": "63V7jrxSb3RwxAoNxXYHsipisvQyT6V4p824XUAHeqp9QFDNG9vamtUC9zQYNmPic9ftvVFjTo3guvqhqiT5jDT2",
  "key18": "5QJ9UBEu2DjQqMBkMyziV7YGKZ7ey7ih3Bp9G4D2FzXTYeAAuM64MWhBVfUWr4bk1XknDEofKe5xQWzuxTd1jFL2",
  "key19": "45QXAusDrQXaaBtFLFid1pNMPDcNCCBbXyb4HG74gg6mq9NmmRKT6ZYZe1cdKa7ngojJGv8oywyrFi17dE4QqLfe",
  "key20": "3mCcWmya7kGHvuHr8BqtJF3hJ9FCovpXJLgFnhD4N1aX7bTKBGBsTu8rm7TU4CnXDRiGeMmvnzBufDF796n2hDU6",
  "key21": "2HgAepXVGYBmJjef64cBjVkSnn21dktRPBcstYk3iSbMcYnwQ4Fi1PiDf2ydhDP38unuMyNhJN7xLoniGKTAKMDD",
  "key22": "4Qm4dPJBTjP2MBfgvaFYsTzSGk7AmehvACSoCtTWfpdxoh9ZE2NZQQc5Y1UWtfkF27YFPryDhroiyg8euyTPHTgj",
  "key23": "6FEguGUiTrWNS3SvGPTwC5TDkqKGy69GoPNx2719KJnZwhkgcQsiqhRLFEjycUtPUFZ8Hd3keqbdXAtLT9rBTph",
  "key24": "4p2rrX8JS6LCMvSydrc9HkoFh4pjKLD7UWF138vgyzhq2nnjCCskkNiGwznfshAr732gcnZuibjGx5ALHpCivx5U",
  "key25": "b9quz7DWCYJn9eDuHLDpeC4mk9FSjt1MgR1jymMjtdT38BtEAA83JBPicVmtS4nER5Gc7KXN1raiRcxyNLdDDuK",
  "key26": "31m4Heso36ArabLPiogRzhnqxFgy469b4Q6L5mYkquN1UNQ2eCdUoeATFbrrC65S1AeR6cf4r717iKu3ezUMh3j4",
  "key27": "8aho7rbzXqT6XMSBzozQRQUjdVqAnHRtSCvPwhuhQwBCnKcPVF7wXiMWhUoiH73YfEbFA45k7Ar9Q5o4CJNJsr3",
  "key28": "5JoqTZYvhQaas3MYLdDkh1qFGUGEHjnVv4Y1Skf8mCs5Bh4LVRqQpACporjqEBRTPvg4ZrSNL2FkH7a8kqaww4DD",
  "key29": "5vM5XcbdtE8rSY7U3Ht9ffQ4TR4hGKyY4wtXycCzNTW4r2xBi2eYakEdZVHA1NZ9PUrEmahkdgo7DrW9Kf5coQuw",
  "key30": "5eGRU8JjfiRozur3mhKRsFgokUCJoWPzZqxg1ykjmdo4kkvPZw3tfpUzde5ab5dZaWWBjMRXd1G4dn6gX8FyPL7J"
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
