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
    "5GiF2XaySpaHuavCFSfvmW5TakdxGhrnbpGQT1Up7zmoXyu6FkEAr7pzD6pnmmnqrMozaXdMfDesgoxZxRPBYd8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ryy1VA67j4wpLubZUZQPpNi2RvGdDHjniGPzHi42YZHEiZKwtzo7H9vAAZGda3UGBkcUh6Cj9gFQHgUvQQDAsC8",
  "key1": "61jGvGnk15wb7ZPN6JRCCQfM2SFqu9HEHomwYsRtNRRGmbfRu4LcDMUrGTbLHwoSCJmKzJd5SZGtfV6TFZyUKdbs",
  "key2": "2MePRKsndMHgZfD2xkpJQXkBErr2FsKmubv7jR2iQTQwAEfwkkHK2yMnhUzgniqz96RVA5987Te1WaDHTzLUYfjS",
  "key3": "i76Hsdw7wr1cHBdPzgmgb9Aiv67MpryMEm2jgUenYHRVeRoE8UoVuCt6VuFj3kff6gLd2ZoK1MUyiAve717YAKh",
  "key4": "4WB1q5cKAv9sW3Dw5xfoAdhp2jtir8xSMyypC46wgX7vNSSaRqWWunW3egSp9nSYzUbBjDr97R9mu7DpNzhexCK6",
  "key5": "2xwMVYtYEeGPpFaPX53ycNmz3nSR8EVqMnwkUeDjcWgmxiiBez6SDYbuA7ftMDFKCAfB18LKHA1EyexJRUabEQmM",
  "key6": "4CS2H6fu2pFioPjUS3m5ARgBCvPbz7RimEYqxFTp3oxybMrMFt2e79AhwXq3Vf3T5XDZkoApLPK5nyKfCQBFvBtx",
  "key7": "Q1AkPriTfhAbUQVdMTQXz3uFw7eYSA7z9cyNncpSuwSX9eJgYGiNkhkBBuBYNLaeEhYFu5euTDyzLMTUYDmQmyA",
  "key8": "3Hvtb99RKgeKYcXNmLZRzhPGe1KhJhsutWwcAkmW9GZt49irzSGhpPQVFyzainfuM9L3zaJCY1LeymF9qgefnSdG",
  "key9": "6GYAmyZgonyuSWyunNvMLDzz4s1hoVGRWduv4gHXWCRqvQ9xc8hvGGNhamtByBDjU6vc8weuQAyXdn3BWAiapjJ",
  "key10": "oPCWVcCEuNT8mYWtMuEyiyA3Wcb4vPkYX2t7JiFaJ6at1Vu7WVtAsWCE3MykudewSvKKT9d3L1jhxixEJLJU2AT",
  "key11": "37kGRRPc5Fsdm1dhVb5NfZMsFbCu6BetnwAuYuVJ16LZqNfTbQACcqLZZApHp5YB48pAJu4xKeBpbkFrkLnHSN38",
  "key12": "2YLhLVTaFBsSq5eDai6TfXuDbyM11tNuFyPDYE6jAiTBG8r7MWFh4vYdgek1boM7g8WUFxgZBZgGMJyANtDZKAj7",
  "key13": "25r6NX1xceazMiShpU4mjeFBSys6SZb98zokAszdQ7RkPXsxyxDmMA3kxSeRhCyrCkV5KpsfGkrs4MTp11RjWfVP",
  "key14": "XM2pKs5GLSpoLDpcTcbqxc4fJb4bpB9LZ3L6RqyP39BRsdrWYHjMaG2bNtiMQByttLWX96JctEBJxSAi51SsXJn",
  "key15": "3VgTRbnrDe38XqZw8uKenWi7TrpSWBnkxktGeUwmwDBCHqn8brtBGa18RHzCBTdvoj4wP1ZMWos8aNL5xmZDgX2q",
  "key16": "5fMhqqpzT7uMatTtVi4nj7yCqGXfJcr266AsjEpGe8B1rgViHSv6JnogxPNMRZ3Cm5HLA8aR8pxm7AXPtRh2J7jQ",
  "key17": "36u2W5bLAZ6KEFAueyjMgZQWFC6NiEacMtgH19b7Pu2HyK5mAQbDyMMMfx94uWoyoGHa11sVkkH1PHdanQufRVU4",
  "key18": "37A9w2RsU6N69QWVyUU2f2fFzGnTWogxM9qYsGSZQVt4mcm3cAPxLoVhsw6ibF9uzv1h19zF8jVwP3mcTpVTBveT",
  "key19": "w2B5XzSrXxS65ZGSFjub47AYqjtTYAxggcH6vWsNvrwfE9Qejh7HC3X8f9ULzxpD8yW7r2ow7vV2p1vSVgLWzGh",
  "key20": "3xZAy9BfFPwXgp3hA1prte7TvRiKtmFcDsYja2jsNCC5hYUnUxhD15xQhpbJrfrajEicfbDNcoVDaf58RSzZFHtD",
  "key21": "3nWECtNHKRHoc9dvNpyERGT1GUAFjpjmyjFVkSveVg4A6vaH5MjwMpAnDcskKzL16nERtKf9hzKbgMq2Xwgas2P8",
  "key22": "sUKuAt5MPuA9MRpiAuxJ8PHrX17CppD7ZXj68E5dGPu2eEhAaSZngQAP7qGNDTZLJoHacrhLqDQRcLdhYPaPsfR",
  "key23": "2qjWKbq4htiueLEyU69ULmEJkNT2YRfWWHo6fv7VyeuFCAfRBQXjJAXyz2DTbEmA3RSkxvpBpMARe99xMN3Qwh8V",
  "key24": "4wBHngbCnpqdzggK7p8WwSR478mUob7w8XDYmksCXwvJp19meCzvLZs5UbrN1f2KZRZsGPRA4DwagNp7PULS5hPR",
  "key25": "5nZhHdmHM2ZgYbEdPe3BZzHrvh9JQojHpB88qspqY4ZDKvnPv4qgYwCVdnnXkWQaxKuxFWNCH9J3fENMrUutii7s",
  "key26": "4HtyTCpPwaTMxsipWQkDPZFyUufLXeTD8tYhi1rSNZzxbHJ6x2uZJEdwzaW1siPyj2uYADXUFwud223QVvdtx4g6",
  "key27": "4VZfcb8eHsrhPTrRdbubYQcKfJHTXNaHKB8LeDgCbML1tAD1jy6Y8uxSj3VCWm4tetVkrNyYc2z6Nvsrx9ZuUed8"
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
