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
    "5M43pu56wwQs1ZUs63WxZsbggRTB1zKRS8ZTE8jqiJvGSJUaqmXSkdRS9sXhacp8pK7zKKmYaNqS5RbgHciZ1oXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58UoFwe8Do6SKGaKDfunDyaNPUnvd8AjYhgU3XskgWZSQK7iuEYbKjHyKB3L4y68ijaP9NLe8fCEp3Aodu7hjrKo",
  "key1": "5gADMDQsCYZ2CZmpL29HL3yJF5JQUTKb4TojbHjWyF1W9NdkvuZzXmsUvfPSDa5jq43PwUUTFLYnugsdamrbsx6E",
  "key2": "4r3aScZrjBqmyAKi4dYCxQVZTj9o4cx9Ax5NywKuYpsKhLWUFeJ88dvvTz8fTs2SvUjQkzKq5oSSbNeW7Lux1haC",
  "key3": "bbfn2P6d6w2a5aZiTXyXiQCvc8kK9FPiT99tvmemBuDYNQke9FSEesjJV7mXxLW2aUgNpae6RktEYP9WaX2ngux",
  "key4": "2THqJTVkcrHX8YvqWLPu49ohPks1CNCPVFsNK4C8yw7UjB8pGW8D1VkzsakDwmr8GDeTygztHh1Z4ZLGeED52VTb",
  "key5": "5TMTDnD2DnQGaKEFRMWnCZo6g93h4RVhWDgEoRf6ce3pLSBi7zJsxL4e7iPGbHr6RCNUJHJRjRcUCiLuAHvyfMbg",
  "key6": "429q6tms3aL4qNT5wi7HgUXsZMfsEmm5L1CifpR2Cr2TZ1N93c38cx9nTh7XeXNHRTE3FwvBVYcQ7DSVSzpQiUoP",
  "key7": "3JdsseBgdNwNg7GndUXbXtB4CACZb3pRYU23ygiZaG3613oyhpt3LiW4DPy7HU2mAdmtbDjqtqiCptS8nRAgFLgr",
  "key8": "ikUkUCRwHjpXCFCuJf9WSvPuC5k92apmMvm2W3zAaojrPvEPVuBLdVQNb5hAqB4zjXZUHWvewn7PcwcQTJTZuf6",
  "key9": "5H4Nsoi7CQgFJTobGKRi7h7w7vAmhcr6DGozLtnarTMZ24psupjvQCamW2mvkd7sh9o71in4mbGaqvUPoAkCjjFz",
  "key10": "4mZ4wDCYeM7L5WeqF8Jh6YNpacZT3u4f6wuGkxiBuVKsG1NWkwb8ueAz7s8BSgcWbwgfBvoryyMxaicuYgc8c7Bm",
  "key11": "5Ywi7QFYfjh7jMiGQ2wkAiESAGoXudRJZM3cHYXhTunGz19FdiLKZsm1FpRAwp4H8DSKzhSMpRHPY9pqmCH7xKGX",
  "key12": "3qorkxa4NqPBiVHYAfp4sm8LMuFrTk9erS4Da2W4MZMacohAAArLiY7Zgu2NwezQcX1WojnkW9BmWVRkvyQbDqiC",
  "key13": "2v38MNfdEe8pt1jr9D5g8FY3SkKsQBoPuezHT1pEfpaBrc3HPFSS5QmK5wTUh99FtPXuZGunTxppJojtASbyQZwM",
  "key14": "2qkW9Hfe1oecCJVmZTRHiBtQu6kkJpnCzSiq44R6u3a3jMSpMKk6SN2gMM2NqZkLBGidGVQBRm1yHtyaCsARjYvd",
  "key15": "61YzZfpUDZCGiLehBbwuD8YqJzqjM2jAUqxEitV5PdGpeFTf9pmPhLLevkntKczDesyaDQ4eSQY13KQZCqhLrxhV",
  "key16": "5rJxbuNMY4v9U5xSdLZkUmRZqxxkVtwJRfSGqq27K4apLbvziEDq5LorR1CKWPPLTqXutwTKiqAXeEDgXknpkoHB",
  "key17": "475VkxpwU5U9bpHJcWuSQrWucB3u6ZRhy4ub49eSzXXc9Big1G5sR44LvZoxS3sfhdHS5cp7PJsvoJFSFP3VaJH7",
  "key18": "4xm5iJDFNjigEVQmiSykTHsHmjpS6TyGk2B8UbvtyB6J9mKe1XG9rnhzTL7JL2hf2QF83pTtPfxcFEPgyGR2ky4b",
  "key19": "2qcW7QFv5t52CYdxAtZP5s5wAGQuCusj8nRKPp6ZfDVZRKcUU6CPAgS6v8My92mBf4RyExuFCETgJnPuqkUbXaCV",
  "key20": "NMGNULafNpdFfpQAMzrfMrxTLXdPD1qMo9fb6GPuPX81JpkDb76c7zeK4mnUvKsQnszidvpz7nHKMUGEkZiqKi7",
  "key21": "3B2SXNh3n1NrxrVKysJNVgNZU8z9JajFLkd6i5ZUVTSy15gXwXNn4j5s9quCDXqmCARiCB5eaB54VkoXyetD2wyY",
  "key22": "4iGnDKjYra1FC5mX9p5o3LDP6dcEwDmzWuGYDG6by84RfyvSvh2YqZbanaVGy42aXZoPXjuCVjQbxteATV2qs4oC",
  "key23": "2hqW8BkBLgG3Ke4NpAffCUwWJuMLrXbcG3p8ai7pd5s3QGc9wNg6iAVvopR6Xwx96wSTYN7TNXYGfhWE8zzNLxZ",
  "key24": "2FCJukFRTQ1iaSaQ66KVJSY4Bq3pztdjtVFjLgy3KMXbiSUf83XvmaNS4qQmQ8gEmd1WaBGnvrgjHdGg7yFjugf1",
  "key25": "2BdLptojKHqGVwWGkLhLC7fhHFtorr2ZgAh7swB86vDXAih8QBLExNgeUsQmzc2jnijntFpmdSdTnt7wn4btCaYZ",
  "key26": "3vJnSTQCHxS5hxTS5MULjPwZX9XrM6eu5EU3a6no4bVUAw6vhtq6BNjnvkG57SLfP3SSwvJB6z7tYH8mFzBxA1WP",
  "key27": "2MHdXCzMyGifqMSDSfuZJ4XA2rCKbtdao2AhYweF5s4iD1ifQsmo41fDuSBSisBU4vq9szJdAYu5SjWzGhJAa1sV",
  "key28": "3FTM4V85rtXpimxXxu63UmSGgQmUUnAUkrjXnJGLxLFkerzKXdNXXQnVhJYE1uotjJXcGu9De3rVYMRtxffSCuH6",
  "key29": "4UfbHfJj2Rz6aMkrm5ja716N7cPSanEUdSAutuXXmBTUn4PURu554oCN6HRzTJaDuUHcLFcFQNiz3ZngJ8nFQgUK"
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
