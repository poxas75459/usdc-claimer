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
    "3iYkMG5pXcuUqJEUF33PgjVya4YqH2Nc3nUP9b8DKAFkAdQ7aDtVR9B1DLdaVvJeEQBBjYNTZSqhQWXPfGYH3FaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SAAmq2ru36e6qjHexvYUR3gB2rym41biwRz43k6vDYX8kBpHnsHGzbLAcYbUZY8YLCpkJ9LMeYxYm8NMUwJTq64",
  "key1": "mpFSm8qE21HaDPWxwL2SBcte5TzGgWGRXULG1CSx3xhsHbZZ2YwnVvmbZnWVj1DfxjdcNjTkS8qEy6jmv68LRxG",
  "key2": "2HDiuyyRpir7xQAqT7BUnxzCfL5YuZytqqgoQ9YcHbBbAtH7DFaiasWPnb4qDf1M69Wh1Fu1tnPQw7aNG6dVAe5y",
  "key3": "2QZJDnYkcrUAXdRgh8311fdpPFjitZxo2CDJKKgE8oaHEcsV2q7r84CjzeoGtSqhqyBo9VavBMwXfLhhcKLPDT54",
  "key4": "4agApbk5htdGPYhNh327j6kHBwrXsZ1Zr44b88Z7QGksg5iPF6KQcjVJxnNCdL1xEGnqiJDuwZD1vLZ4XeEkp19y",
  "key5": "3zapteQpsvsqgDizssba91kmVV4NE8Tio2Ljuggp7E5bmvoJDHzzeyScbZhi2a4Cjoxu4pNnAQzW7mQZqUvDzQRw",
  "key6": "3hwSwvv9No8Db7ye6KzwSNCagBQzSK8qBEUyi7UNUQptVDUYBSmTY9ntSUqv5QNJtPPV22RWvExhX9Tn5ESr1NmP",
  "key7": "4VPr67NmhLMnt624HnEDNpvXjDCKXSy7ZHY1pXQhwAdnTFd3pX3j4Gy3N4NQ5A9xcsZtUkmG1wpjd2iSDb5z6Tsu",
  "key8": "475wxjJFpZPRbi76qntPxrnZRqJ8bFpScFqrZK7KAeD7GEcsn6sYM8gYa7n1LKB1YJy1oKXTe1p1Xs89PreRjRcN",
  "key9": "34QD573h8E9cLHxGMRw7Zk1x1XpQS4ogrWBkU2xhtKSTiTxig9rPfpSymNJHUhk5UeU5a16mJ9rcKwqbyqagGh7T",
  "key10": "4UGCurNEJ1VrqzU6L7X5wrsVgUK4sWvMSvqC3EGyXn5dMcHwCcyFNi8nK1grNFdxSLU58CrjWh4GT6dRAYDtm8uF",
  "key11": "3xFsfm39yCyVxpLQppz1kzZcyEdaBY4PVushNoBvgE9J5fiiRto3vdRZMNEZZgYMg72VRyYcgZ9F9axRbYGfepGK",
  "key12": "5Rio18zgQySgPWYSKiHe9GkBgriNcUoztabS3Ff9zgnkipaCmMazfTnBf1xcpPLkEVD6sYduJx8dDFSxWrWbKbvw",
  "key13": "JDCL9N1oUSweWfGtaqifmgNRWuYW2ir3ttYpX8WNvAAMmXzuDYUR4WUSV6JcMPvxR7c5jQgxWqMsxZG8jCPYusw",
  "key14": "4D95Lc7wBYdr3jAu1Rwhc4GbfKcykauVqPP6STEkQ8NwSZRiPxRw8AmE9vNJ1BM4xfhdTeEo6kFkB4hDnmTafqRh",
  "key15": "5uTAwoip8FvYvBN6yS8gZwn7DGZP6dxEx41pNbvBrUZe2EDkXXzujFiLgeJ1WZLYoMjZqrmbPZXu2hoiK6n3HbMR",
  "key16": "3wDw9rVdzQgigZJsmZLFRLvm235wifHuPop3PLmsjufrxTeRAaBr2C5kNBqVc9kon5QM5iqSQ9YSECHdnLfJABbd",
  "key17": "2zHubv6A3xkrPLGEHzGvpero1ymN5v6MmEGhPdcwe39LfpZBPebNH8gkjSGo2bnLWzFKmk7ip2vnnXmHvDftenSb",
  "key18": "2odGs3hYph97J7ZBHMBDsZYMDVisYE77n3gBcqR6nR9pTHcx8xP8wNvdXZgaeEXKAZzz7cMJrb869Tsb3hu7jevD",
  "key19": "wq42dNSYdWbmx53e3p3bmbd6SKCmZwCfFTGZxZv6y1iNdM7J9UnxDCRW53MgG76Cr2iBNNVQxci1nVayamPxHVQ",
  "key20": "3j47GWX3hFQmaKnhcwaGZ69x1hDqisSH9T5z9XpX78RHFDGSjBdKZ3sFyNwuZvsgS7TrmoQH5qBBJXtbEJAPkwoc",
  "key21": "5tfpgh7A8nRGPibTVrm7RcMuG4ebxsVYucBXcDrqEqm4qWjtJjVgXpSczCXo8tK2VHbMtBJMEjfApBDzARuCdLXy",
  "key22": "3p5MebZkdeYuwywPjmZGFMtsbf6YsoS3cr9njfKXWGvwPuMUUQvXAMiPRsz7yuCg3AArw1XniEmzHZWGJbALkUn2",
  "key23": "5b9kvDaa9C25Sxe8NW4HEgvduWWiJe6bNQ7TvFBEd4PZUfohsKQfvvg8bFDDDM5XwCN3zK68mZzKJDeXgXuHFaSs",
  "key24": "36sA3fhfZLNd1G39hKjr7nGePWYq3NGt28FyjqDKhqMauJa1dDuRYPREwqSWMSig6H7uYk2czTtiZQ841oGJn95t"
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
