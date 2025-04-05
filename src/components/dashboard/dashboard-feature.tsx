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
    "5kxbMaonTBXrkY5EKsUHYL4ckDdYRhq21TjcBUq7wDDrULPRhdf7gzQgSUaNN4p7LAVrP3LvwekTWhhCvAcsKA41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "chbkQrQJoLMk41zsRKVj9V7XqyjLs6anTonMLh9SpVY88B1viambozsbMJgybkz4eEX2jbLg6suqj4UNLQ3sUNq",
  "key1": "2VPBP3sRL38oPDX7p4tqAskdz9PwLd66hUEBqYjGphCQ3L4MWRZmf3kkK176xEAQxSE9RDxL9dAkcJbC13Nx7Xjn",
  "key2": "2D7RHGz8Y4RUS3ZVyYayP9rgxUSr3BW8RFF818MRwmLRboSBNjZDDNRii2QtvTKiTPKztU1iXjeB6W34CWrxp4NS",
  "key3": "2ZpgQ24EGM56bpDBUKv3oPEwDrQeWmtF334Yn3zZgD1ZkuYRNgn4s7GoJSrbQESnQRM4ndd1AYgs2sBkSsG2uVTy",
  "key4": "4YF5FD1PjczXa3fNorZjuxuup6o42ACE8sBL4PQcgNzCsZ15wwDW68DXYeg2wotwxoqs69TXqUzXC7nazbfBCWcz",
  "key5": "5W6qfrsxMor9q7r1XKzVDCxw96BdMXiYWQSk49RVXEpzUqECX69ciuTqb8aE7BZLTvwe84RzdvnJLc6Hh8jBeCbq",
  "key6": "YL6drebHB6iWfLqsUJUwPczy8FTqi98T1ecWjjBRT3LouM3SaLeP6gem2xGCRcdrBTk55zUjNfTSAtV5HXqnAmJ",
  "key7": "552MyTe45p78B4KqunVTdNXb85J8jX6eJeCS9Ls8AEj3LFNb8VE6GWiMGePaSai4sn5zD2875fG6YAcKMr6e9F9U",
  "key8": "2KcJ1Cy2ttCdvkamKyDx4VeBQeY92sQ5ccRqZ4pYv5izbCY6etjucjmzsWHS72ZR6dfLXGN7bfGdEz528dymoraT",
  "key9": "5VoH3asYDRgEiBwZYvKrZ5xZE5SGpPftgdptWXiLjY1xFaHndqGtBH8EuubbudNHAosDzNYbGZrkJhkWhcox5Vtv",
  "key10": "hjRzquVcxMjmzaRCJNCA1JwUAxYpnWnvQAAeQXtMV2whmZQnnCvkewbjoeBdDNr7ntUYtjMvtLt7bhFsHudYzqS",
  "key11": "3j1ZDGaQvQAvdgesq1Vg51XXey5mQoLK22opDTdyXHbdZJRhEAYpoxdfVSGaU4RbfpvNh3UaUhx24kJs7SHmXp5P",
  "key12": "3xcXHXdAt662s4EPVFXZSo6Q8YJjbfajf3tiaNTiPR4Ry4bEGJGo6dTna2RyJhP3REJ6YNhLrvpUgPkG154r35aA",
  "key13": "56wn7rAHcuK1RB6m8GhCLK5Zty8QT9swdRQ1KWJ6aDbH72mYk7E3PLQ831hTuhnKUAbBPviig1AXQ7UjZry6gWwB",
  "key14": "2LdFELNvqwLVUXykeYbFFDjAnyFRpXUsUos5mpfbKCk2Mu6F3WXtt74V9quZDn5Rob5KKNZTVJpU5syEkx4LP66o",
  "key15": "3Wb9kGdQZCVjpG6yHsbzwynjbmgsDt51ot3wiux4EYLG6iG3zWxwRWAJ6CfsHLYS8LpEr5gPv51SQgRJePL2A4Qr",
  "key16": "zd8xTt7ijiBGz5q6P8sf2FMPUietigSeTE2wZJEFhDDTLoTNVxZmf38jMTDyzVkbpmtCyTPwoTZqzSabgHgygb5",
  "key17": "2QVTSu8nvpqs5QVTzJ2EGRn7zAJLohjSSvZiKusoikMEuX33YG2ySEKVpA5NYRXta5NUTMPhTSFwZPFNZdvRTC68",
  "key18": "5j17X5H9NqUcfd33dqyfEGEM19TroczcGX9mp28bmqrN9UwPaQG37wJrS4dQXoJHbecMMsoMEZaST9T7jPHXXKfS",
  "key19": "2MZjpSbaMUAPvevK5D7KD6tSuUtPRL2ZGHYiGvyM2pTEqVPQEb2wA6fKYrnpxWzPoLUiL3ZUmAxCa9tX6xf6nsTy",
  "key20": "2NZZpG2MBT7eY241DruvrE67TtiMTNMkwPyipCEBkH43rAhYnT5EgmkPAiMmXWe6XF5Xqc4dtVvxbYd3UP2K7u4N",
  "key21": "2hqvM6EyQCvgwYkP6rPHbMLMqsxhPb6ue4bvFhAnmMZ8JzgqFAunTi5CNLtPRVCZxedtyFw5gBJyJSTL41MdKw4Q",
  "key22": "2xT5Fc9sAGUzvy4D29sTWuBNiFb2M9n8kfDG1WnFHwZwgE7xqcEGN8saQZmM61j2bN2pT8Mhf9mpPCA495jJYou1",
  "key23": "XtU1Pdfi4zFKDb9qJzVnpR2NE8vE1PGNyxuqCdeBbtYSaizXqxCe1NygnNZS6bFo3UUKo8mVMkeSefg1bzCFqVC",
  "key24": "3Hr7GvGh947QXjfYyUbLm2o1B4r5ftcuwQZNdBq6Hg4V7ixELptrxhDuR3YQViogGo81hK4aoSZWpLqyj4QneyBE",
  "key25": "48q4Go17xGeYQh5MUwHfcJrczcdysvKiNNpjgKfwqDKzfWTQRCQQQRx6Rzxrz7m1GsF8vLy9viwbbEpt2jFSSsD6",
  "key26": "4FmLvbSMdAJrsMCZ5YM629k3TeedHfV54vrA62akoXuMkScDuVT3J3UNMWpPar5racnMpHB6eBD8AzUMSXMUcB15"
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
