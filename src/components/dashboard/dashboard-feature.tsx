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
    "2cLX4gCy4KQZuwKNd1DY4pSweLcgsq5XEzz7nfohEoQech3VmV5yZDKA7MFQTCm7nNAgrE6MzjCxZzFJPPHaDYVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41PtwnAHaf5q29DZSUgFF16p692mxuuz3jAaQv2WWt81LgwqGJybp2hqUgW7b69N4eRankbL7KsR3UT8t4R6L7Q8",
  "key1": "3bqPokkAo1m4owZoN6TPH7LBSmn7sqaCXNa1Y5QijqZCoksXyP8B7QyCqrKB5ybcZpkMKj6kN3Ax9uomuAxiRCXz",
  "key2": "oQnogymwMStk61qCrv3x2qjfTJbLRGgoiuuU6j6DPvqNNBYqRFXXHFxAqSNV3kk8x7fhz8JjkCAfWYRfJw7aPba",
  "key3": "3UcvtrhpU5FqrAfxvgVWJPjwPnFG5TgBDjK11bFoJxQwDEGDWW59Kocb4DfBJ7RN28y5gQFFRZg4oWTE4S5CqE7A",
  "key4": "5zzfD8rYpeFydyUbm4RPm52gKTYNXWLYb2G8pteLhsVLunTE8d1zM4AqgHg1MMT2zt5vULH4kXNy5RzU33yLVLCw",
  "key5": "2zKyBkxtMFMgVaerLshJJiu18Z6Ro6xPnUgejVW1VogSCrUzUd4cwuBXQz5zc8NYKMsP1xsqKvgXAYZfnW6Zwoq",
  "key6": "rtWVtd87qgCGHEuB5kAtfwZ2jH1UnmPsVG7QJjhG64P6jWX7Q37mnPyL2gZCPtyDyaxcXCUoPxx9rirMrysebqV",
  "key7": "3LFPRgZe4vjyfjXj3wL9FWDkyFRu6kWGnjdW5zx6v1jjdFWzKZ2XtY3ee51iCsxaCWkYGN1AGiyf5z9ZBHsqw4Mt",
  "key8": "4cb7qUFwZ54CcKep2ZnS4oY5ukL4BhbdKGGbBLgQZMrSU53i7Qwzoxry3UVd9RZn2gvoJZHXbA2GoFWQ1r9ytmnL",
  "key9": "5HTjjUJppvwNKgG4GQTrSPed1UjaPZt7pducSWRTUDMvuKtYdzhSAqqf8vEcGtviKWHpFYXpuTJaL1t7MP7aY7Ds",
  "key10": "3KTiBUem7oNgntrsK5umSybJaZgJyhnQMNbsRPpcPrFhEewoBZtw8kYyX4TKpGAJd5ULDomoqRGcjvW6awcSLzJn",
  "key11": "4YgrdZQDA3Y4ViGmUp4wf2E3aLxfEpdxfKzSjqqtC14JRNtsNVWZvuuvSSchGcHsCxTugzb3jfEQ71gHm29T6bik",
  "key12": "afMDGzcL7stdbf3ko7jjkC4HCywvsuHjph8sRQ5fCoj8MLwudJBrHUJ5Gz47mFqtCeQY5wvrU952thLCxhe2CkJ",
  "key13": "3mjhyXM8RcqixcEBsWMhWNEKeYydt7cBdjSv3kbqSoqSzV8PGZTaogrgtSXJa9Qdyd2RfgT3kF75f4uTsbDWFP5R",
  "key14": "EkkfXYofif6B3i7pm6naLazkposHiGhBXz9b1gWSAWaVnyN9rDSvEbWvLt9S73ztzqeWxkCx1xkXKHZtxaUReQL",
  "key15": "5PB46s4nrZXwjDZUPqkLQBXYThw9UzJymDMaj3Jq5M6DYLQYuC8FXgviAzLwFYNneskBNoZqHgMG5BfmwzrJdyki",
  "key16": "2QY3iyjWKbjtgZc5UhWd2FFPZ2GnmdZDm3fHhgb3CanswUPYXX2Fcfn7N5SjNHs42Ze7fX9LA3VNt3UMN1tLn8tc",
  "key17": "3QQa45Fuonrt2BdGoNtR4JosvSJ58oL1XBfiCFqN1evBVuj3pLNtD2KiQV8ueJHc24A26iYbuLu7q4GqmHbyYLLx",
  "key18": "5DBFWGBpdCPcEmkiByg7jPoEp3K2No6DrWtGMyHtNdMdZ3BuU28anjJpWj1LDBNDtuYsZFwWLbdQ1xgt9nJiQhHR",
  "key19": "4xzjH552DLHwwvMJQiG2zQh5Q1NWYQaN5TyHvaBWYv3Gh3pbyjjm834WobcVbyjRQLgLzPtB23UvLdo6ohBBJQYs",
  "key20": "3KKu1xh2pokjJ3vgJVp5TS21snQ77oqHRYLdF8u3KirtYf76wFUsEmTHHUHWgYvgu4ZHUyWo9WFwS43qHN1X1NmP",
  "key21": "5H9Dw5dzASjR41AAHcvJP4HFxkPJW3s8hJTQSDc4GWvvmXFz4TKEjmEo2VCB3GjX5W1YHcjughWEFNFHqGUvP3EZ",
  "key22": "p5fsgSYyCr7QSMyxAaYKVHAtxyb2Hm7m1vpn7H8C93TqUNyynaV4mnoP2jsvr5eLpyVuytMr79KcB9QWYrsBgZW",
  "key23": "2uMbyoiWN5RinahrHSgFAYe13Ci2zL2sSau4jjv3FFjRUyfdT4CWj6o8pQ6WfXyWNz9Phpd2bgNo9dYpH3ye4UPr",
  "key24": "AtocK2gK92eWx3Q2QXvqbGwr1C1wrDzok6KUuMkzvtkRxrZEvbNKSokVkURPAe6fTyamt1RPr7eNimRzYPEJRFa",
  "key25": "39wLgAzDW9f2d66aaJrynVJm1spy6w7vxvtiMTxBtRM6ZqfQWDAse9LKcR2czRxDFEc1nJeZpb5mhUdiaWUrUSTp",
  "key26": "43EyEtTMeXePpbbQx4vcAbBxFTUms1iyRiQtwtiiFkQuA1SUgXavUEsmgoQWJp8QrRRywiUjx5nwDUFfwGCg8dVp",
  "key27": "3XGSB96Ek53JvVfeZTiGnarVbtZDaFeAwwofBZbDe865q4Hm9UDLZsBQpsUhGRjmTPan4QuJF4rDBVW2WX41XG2a",
  "key28": "4v5G6sbq597QDzysbviXy8prnBY5HLmUJ6gPtQW41GLRWKebDZHATvFxuWqUve3GZ6r1DAs9N2yDt3pDWhLjEJMw",
  "key29": "2HY4n4kHsvRZmu6fR6okWLuoBcmJkfUk5q7GLhkgQoBd7gC6e1EnzJ1iQXHyo2wLPaJgpSApWEz4jKG7pfZEhJWX",
  "key30": "U8ZDwTMasadqWVDadbgdQj5C49uQXLdwUtiUTFiZ3h1F5NYhtBVEG5r2u71bxVwCRYQKysrMMhE1bnUW1bqvJM9",
  "key31": "f4MsFeBEMSLhsgFZW4cw5ZEfgN5rdyiANR3TuniJQKPNhpnFsBXvN8seJm3C24Mq6s7SuyV26NRyZe9BvUXgHzp",
  "key32": "2Q1aTjAedSfBszRimSYrWCvFj6fs1PqDX1dVLhqP2AhYuLBvf9C5hgi4qMHLPbu7ni5orKoxft9Z6vYQYwTZ3oCk",
  "key33": "2t6Uq4tgWMJyaktkfCigz2mvQBxH4zni6bY5o1GGEQaFKohNyqDnSgMb6YcGsW8EZKsdFML683ndBuiaB8Nccqgr",
  "key34": "5h4fH6MLCxuL9powYxVr6imGVaMacvboDvHg1mpBEneX16vmE8GmhSSrwyznoKpW7qGVWSjL9aYFV9hPFcZx1y5X",
  "key35": "21fnPAsCnLbTnhzXWGpPjk86spEGCCDpWJ5Kmw5huYePNTNEZCSvzzZcgjQJL5gnZkSDx799Td3XADDNESe6hQKf",
  "key36": "3xuNqm1e1MzRM1kFGnR23jpnQfPRrG6RjMKokn1yaRLA81AcS6vMtyicAknB8sqHYaviyW6cnMv7wzxziUFhHNUp",
  "key37": "1yGLkPp2DodTbFQtx4x6td2X7g6esMKK7RavyWrCzNusAfy1eRjTwhHq9H4Qz4ymBZLvVWTxPjWNuVxz2sgJmWh",
  "key38": "VbyHxGfbprG1kvHW4pYXpzNbCKjysEVo2nqvEj6iZR135YT6GdRwMq1GTpmsCDdNLx8y3RDb6qteeUMXf82m5zZ"
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
