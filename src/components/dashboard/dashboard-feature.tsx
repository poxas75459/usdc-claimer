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
    "3BJmPLi3eoAY5whuFvy5GbokohEdme1A1UpQub7neQMdSympak3PRAyDVEznJfK13ZSXgShpTLoERFvwB2p1TsvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u4kkWmvvCzxGZ2mnpxUSBRccK6u5iSQDNAC4WWaF45RcYU6y2CWGeD9hcP6vD9xaVHKSe6EZ3E6d8NFVYubzWdj",
  "key1": "2J7Jb4c7v8Ve5RU6VEpTZpz8KjnGUy7mu54t8Gydi3WYtk9wBTBYYGNUU8bGyPirowfqt63Va8MMLgCPbCrBnaXt",
  "key2": "2a2akutwdqUEuzKmZZFXz3bNfEXU2R4DAgJS2AWgPR3wREi7djm9xzhETW4BqXYT8VwPuaSEjbg29kNRxG4ErxEN",
  "key3": "4zRfcCTrry9SkGTxKuYW9MTYmPAxht8gQZyWDD3jHKGuMDp3SN8UGVYXri34gVCo5FmVWfB3u674AG7o7T3DNF2T",
  "key4": "2hhNVjwhXzszik3ZknGVdzTh2dwJRv5osQ2bR9ZTyR6BjoDB39oKTnznNnLxLycwD6ta389GLn2AuYZbRRoBh8ww",
  "key5": "2EVPMUp9stFb8pfVLT2dugBVwS9snQw8vogoAY6HRGFvQdWSAH9BvgoCnAMiF6jHcVjFbnFTZ2yRJNMsT23rFZUg",
  "key6": "3mzFApfvi3evLvmsUPiLUJyrMRJ81kECFR6QuH6h4aF4RukMkr7iLBAsRrZqLrvp2HSpW73NMLxCDebqc1Qf9DYX",
  "key7": "PaWXbXCBEr7vTHrk9jXtxqb2mEVjCqwjGJmBaZ2UDVDzMaqUtQRDfyTFbPDfZd5wopB9BfqoYg85SgvGT4CwjP3",
  "key8": "2L9Rj1GYLou6Rih6CaTyWChtqVxdMk5HiYvSKVGKGWTmdVippHPQXxTvjq3wYgXvjt6Wb76N1HPuMvdRcYUnUGeM",
  "key9": "2nnLyY7xohE7gb8v5L5hNUUMptDkGkPp94PrcFSAguDt7n1h6K63XxEuEqDnFwWktmU3hTuMWq8drX46Ja9J8YfE",
  "key10": "4YZbakKMpGm3cG4NCwThhtyC9ZsqinzLbzJdfAs395Gk9SJyR4XpvXCiT8pHfdrsxeLby7vu1NWVGm71DzQrTEWa",
  "key11": "4b9SnqNJrv73VxjxPmmjauMMq1rz2gtbn5qwoRMVaLpG9WY1L2HZvbVSK8U4xayfwbAbehWBj6UKMf84aPKTMRdB",
  "key12": "5zCBxDUVF1eZekhFB1TKMXKHgnCStQurrE8tZnPx9SzHSpDccF4u5P6Z4w2aqo8xMZyDoC99AUDezp8EiTRfWznf",
  "key13": "5Hy2TgaWwwAexAf9PYcGfcW6cviiSExLGnJxJc39uBK7d4mpHK3cPpiVGrx9jM73CKWyFvmnN1caSei1FTNnbcmv",
  "key14": "5isj9uG37i9QKBY5d6gTDr1dXMp6yXSiQGNtqojEA8pG56dAYv3WDJMiMHvksLGutxDidjzDEC4wMzkf88ybqLUa",
  "key15": "5XHcgKfseZcjAY2LYWE3e4c9KE687HTv3TcqAtdxx4bg8XmGJ7ATANYsNDsBvV753go74aDhbRt4wMsWmMDyaxbM",
  "key16": "618fH4joRwyYsrEJCvGW25JunYXBNbMw4M28xppn3tBQ153WHFh6T4xPR9gJNP9sH6enPhK6soZ4kYXnpXrMLdDH",
  "key17": "4KnJmwqLdSYFWvHe1wepxa9ypiPHd4Hjk7ePK9yH3x4whobkv6ZcFQ2UahZbesjAn3e18Nvotxy2y6bqk4mVLWZz",
  "key18": "63FADCPP2XSi4ehBXZ3peDuCBanc4nQGfY1ucfuU75Tickzv4W92Kc9ApZmhUxwNf1P2kR1CbptGFDTSKoK349ES",
  "key19": "3Zoq8LhCdYQ1bqfbVtwxZBdSZtY18TaCtsrAycsTQ74CWiYPDRRWs7MZDP8R5Q7eZrWzEnGwqLFJ4jshwDVH8jaW",
  "key20": "5Eh7sso9n6GCuhpiEPv6WL8hwfBAGaxE84Cx48h7bSYNJ1NMM4iGFvMNX7H1MAXePbmGxzD82REmojn7oKohAjpj",
  "key21": "3Wqb5NTR5WPmcFf4Bvmw17drdEvCAi7q5tvm6rQ7wDBNME3KkBbvEQCRvZxREKwzzojU6D1fAQrEFgSDQH52DoSP",
  "key22": "3KJjWZwKMGtsL8viaGm9UT9iF51soX4WkCzrVd9XQW5nLezYVQD6zRdN2xKueTcMoFv2DumvmauHWJnS6waQQbUk",
  "key23": "2DwperL66KioErxxuGUm8bWuVi2P8Q5ZK9PpU9sE7t8BbpDcL1mhANMn2RFScfS3QXME5BMqyDtJjS3GFrQ5Q4LL",
  "key24": "5qpcxbHEpgfw1GqDT3T47RNtNArQ359WjWGEJjy8vMRVReKGrs6VvQHHeSqQBqUGR1sSzJFKFeEwxwN1W5wSSgai"
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
