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
    "2E2tnTsAMgWPgi4qAQtScu72XAiwC1888yc1Q6m9FksCdikj6fC11UEcZhyq1DrcXcLEUNvpU8QUeDCESfKPKpjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A6YBa7suZ1rfaLgidexyV3i32PuwRkS8E7cehta4hP7fnc6KAp7f6dn6yWsWNYQqiapQp55AhA7fW38tdA9krzX",
  "key1": "2ck7QTnci3Hmf3TAVYoVExUg5vTWs5QegLSoi9rbtGYLUhug39rZzDTTpRDvCQTzJE7LxrdgHeuHZP69rvp58ez9",
  "key2": "38m4tyYAdhfz6eu9NHeHjwyvENdqYMm1TtvUYukPUgnbryGMDJYhE7bvrQsUxDZDfyaq8FT8Nm1nKiGJfbpoLo3a",
  "key3": "4NYstYXVUj39qCjL5QEctbjUJHdDU8snXL8rbP9Sz6fDrmZ3sAesiiLNGFa5sRzqzkejqCJGJfYismKLbQCmXiak",
  "key4": "5aZzF3WPi8YrskSVtgDhF4YEtmRqj6sup8rEHXLxJf7JgSyobYAyNBYfTwPz59zxna2U7xQh3mmnveGHSpQJupCs",
  "key5": "5quzvmZpFQ7FU5F4gPuX3KaNsCwE9YAyD2HSJVCnb6b6hvRuBHHPwx1o1VUEr2UFjL3aVatHuLwHSXSD7G4dtuN6",
  "key6": "5LEbKSApbgJ2QygBTJm8EMcKEzaFkRmoWAak1VPc7CVx6ade9EkLAy2CVLHKxo53NBbFThprz55DT6jx2HUCk6TC",
  "key7": "d9JnttuLYgf2ND8AVBwG8bj34VNDAxuvNX78Jqc8ZJ37apTrHmXYoxKp5x33qhiB9vtG27BAAazx2z4QQJBM562",
  "key8": "4TJp1vHnX5iYA14SnbuhTJPCESord58p4JBBTkTqcxc8JaRKt22gQhehKzH26fD3uHQdvbbGi4CPxUNq658zRqbW",
  "key9": "3wb9ou1xdRyP8acG4TbJ2aCKmwmnmKfpyktyPrGDBdBNSQmJyGgBHywJKRpxQrsrp2sXdpBTEGbQjYvqQJYUyhGG",
  "key10": "tzSGCt7SDhMR4uNy1VZg779KvjRJiQf63s6PCazcTUP1wcXapPRJJX7MjHRDb277nM18zrMVXPHbCZfUS1JVvTH",
  "key11": "zsiqfxBLYXw1T1R7UsNBpsP6hxw3nhDwGgxEx4iZS9dwL22LyCzw8H5H1y2fMuce1Xgg8gFZHsC2ZaCh3HQehcj",
  "key12": "4A4dq15BzYxE9FjzFHtkemhLSTmiZA71SBti6KwbvqpParovgowKpy8doNNh48SRpSVChjLDp8sAmu2D591dGUc7",
  "key13": "RHXS4aGb2Y7dsLSWuNhvoQ5WXvYvA9Eqc9CAHdp46FYjMZbvhwrrV351kTetD9sNSPQVmMYQkxF79dEy5Z7Yk7H",
  "key14": "3vTCBkyyTA5JKYStjaW24Yk8iTKyZdFNKqZV2MyncSuAaaqdBoXaHRDipRpZtjkAahFHPkX6VhSFbQuH1JkxeEnR",
  "key15": "2JJiKNtdyTBMXgigEgJXnximgDYLtfiC4jJkWM3YjT2vec5WZYhpRVwJbYTUS9q8Gac1qxt3f2m2nTz8shubKZEX",
  "key16": "3Zm24Ezjii6Za1t1MnzhYaG9r1kPamg66ocQBecm9RfJXEFdXaMbgJZFFLUhyvYvmVk1sgAh5qpLgupM65ATUGrM",
  "key17": "5SPetomo8zPLvz7bG5DWTrYE8e2H3xp43TJ5azgL17kX9anfP6US9u8p3Lqx8kgsdQXCn4f1t7y4ZevRhrqL1Mza",
  "key18": "obqs9eQHQEzG9uttkgigb53yJGwWfEBgkRAkH93QCKR3Gv3CVsyApVt8X24odvvfsq1voWsCz4Z8UfHdLa4cd2e",
  "key19": "25gLnWMHjBc7AhsE1VfgzG6TmoiPptcqiNuKv3AZaqMJeUxKUhGY3Ekqjs22S7TCPfLymJRWJGiZE1aoy76JLhUG",
  "key20": "ekRr9Hy7U5JVqwMnHusVdCMEGLBidE6AUGc6mkYCZNXTrmK1czQT9bCptqUYrBywkG9NPUZ9MD86F8cwj9MfecL",
  "key21": "5UjKjVtMNs1LzUxQRetTh7xH6bGoZczEvydh32bTXecTbhYtW6D6d2HpkjbUbEExZ7dVy6fXjHCrbLrodtRnYCX3",
  "key22": "5vxLJneh46SQpmkRBuzQfDnkrsDKoCSUBvgNLHDeYDF1nfteJYa5YQi6GW1dB4wGDfwwPW5qhuS8vDSL8Dip4osS",
  "key23": "4BXLFCBhqNQFg7HN7GzDpJDYffSjMNsCbxpkaNekRVLKYN1RCABFsnYggCfQwS3eT8HBY9QVa9vwaZqgw5CTAt7L",
  "key24": "2nNAxSXDmJ29xbAqdHoafUBWpGzbMQADR8TKUmD5Dwo11bmeBZ9q6Tzq9jMKCD192hiRxrE8u4JVvXpx4TGztMfV",
  "key25": "2QpNmzoXviXs9TE6W4UQQ4ZQbcwtKdc6CeZezo6LZN1bauT9DBtbvUAow9MKa2ftQESUctwcUc36rQVMKeW7BRpG",
  "key26": "GKJ43wqMJY9V3RskUZcQQuhTnusgNKwTsBjMApzHVcNLZrya1eQE8rSacwH8JXaAWJb9W8Yb51o9k18YdGNmHgc",
  "key27": "2Fex5v1TuHyYekQ9EWvsCRAz33fchFKoo4o3csKd4zaww4DDQPCfctkpcv9TPWe3cJpWiJdM9fyorwjPJD6BCEFG",
  "key28": "ECHjjtNumnfBqYnKf6aNhPtFZHCF1bw6Pb85gSTi7jhfm9t1pG2dLR6vocs7DHbqtY5DqfXQY3bi3Q7igh836zm",
  "key29": "eMVUtst8AkizEcXUjKoqLqCL4p6irmCsXd2h8zhthUknPDJLu86QTZgEpbXXmCsC59bt9HkNW5wu9Cv6cLmFeKp"
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
