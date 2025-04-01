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
    "25oGPM81xc7CHG9MNbm5yvUS9tcHKFYAsh4MFkBTh5UkFM5khBEZESaS9eBL9ANDhK5oS2CSNx6AYJRBzoMvgWnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VPmzrwJyBrip4dUJmHX27y1NNfEN1QLKj885cWchBjRXsJWATcyTewCmVG1nFJf3vjSHykALYMJHiSiLnezkCKS",
  "key1": "5qYz8AvHBUMaMk8tnxconK73ZvhNhEwQXfUMgAqFDJBi6Zrkuuy2s4u7usSFohm7Jt2XiAjt8Md6gfhEmJcSLGsg",
  "key2": "38CjR3k4aa931v3WRt7j4yY1C88X5XnPKQ6aaDAujykPYqpAhfzg4TX22dfsh7C6YMVh8qZwSncLTcYhvBZrgaEc",
  "key3": "4t3rCfe65aBJCzqW5QRQh9TS6PE7JzX3Y1i8dnwfWo2hrB3f7UZw1HkmeBoqYVddW53ZsTas6v6Afbv9yKqhdgYX",
  "key4": "2VTRNt6gtDaf9nPcNYggHA7araKqcm2LLVPbBQKPxpZNQBynXBb92YGnye2LSzavuT3kdWKhwWeZt6N23Kw6BaiJ",
  "key5": "2hEvLzWF5YtqQAaU1kcuPU1ACv2uKvsdHyUBS1UKYtP8HGxdG3KGajbffVHMjqomYrcbSDhV7G6bmJcQLmp6nRe3",
  "key6": "21WwCjqg2xuoP1sRMSxh82m139YnjuWzeDnoHR4ikyDxEvScLcS4cZ6XnJnvcwqK5CvcVtw2bUETxniukDMCvipV",
  "key7": "31u2M1vhLzwYedBn1vFGHXf8quLVCi2RVRVccXfXfiToGT3AcqQPCjRZTMKW8ctbxCdhCAr5GGmVf8wPCoH2uViW",
  "key8": "4WUj2U6V8pp3uNyazGCrkrUaFp4P4KQ9zMkK8H5QdSYVboWtN9bodingzMexV9CGNfKzQM1bRKPbcf8jCeQ9LciG",
  "key9": "58aB8xiDsCHhsMYEiASr8RrnVSE69NYLagY7uS2Si1fcHxA9Y45wpnzYrYZb4Y3z9qtAtR4GuDxsMZDST6HgQNxL",
  "key10": "5ZNbYxo5w24LDjQ796mP2jahS6WUbJT5bC4oEvTYVDsSt9zf6ZHACNYnXmNs5sotpqx61Fyir1hzJXP8uTX111wf",
  "key11": "3WQ6onRx2V2zCXMPuYdwT2FCb2XF9esuYBbztHtAVPHLGg4Gd9tE9R4FdPunt5dVfN8uWHALAnF8FGyjVWP3hpCU",
  "key12": "4wGAVADEC16tTU4iUedmwWxET5o89fKWDcw9B3FUBx3uq9qxctPnmbyaw4SJLifDz6WGknsXsvYsj8h18nJboqfe",
  "key13": "59bjdpVh1uJNAevL7Eryj8p3cgNU94owAjZ8gf6K6PcWKFP4Ay79q779RoyvSp8UngnKHyF7ySp3csknhSmLjGvH",
  "key14": "4G9GwSQTsPH2dT1F6jkVzyvAn4C8KoxU5rdskhWWcCFZSw9bSPZ7AYhFuLZQCJPjvWZ9tyhQqwsthP8S4M8bbHsz",
  "key15": "3utJ3szDH9JZ57BefY4Z68Z71PcK19YF2DnZyb9K4srptNH3CH8oaLy58GHAyUfJyCCkQ7VN8tifjEeHuRvQRMrg",
  "key16": "5EMbD4gmbV6ELJBqp8kEbe3ycz2AGNyjvN9g6P4M3qWxkQnhY5pARscRRwzxM5iKnLTYE9rt3f4LGRZ8oH53Tow6",
  "key17": "3NdGTkEoCFNc6NTGtATzSCFN3kK234DBETcdzhJ3c4Yzb3mwHPg6LguaobJPMXNoyKaJGtFT4XtiCYxGWA22SNtA",
  "key18": "Bm3Yz2kunYFxZccJrXyYE5hHnYW6xKfxKdD68XgoVdTfrALzXakmetiiEJepCM8iAF9qasiDc4HYeNRTHB5L7f1",
  "key19": "3pFAsEDz3uaeVoF3oormHFqgdhugGqHdMpW6bnEthSGuUeEdi2Fh9B4tCg37SuJt3PXYDyosKzS4us1gPNFZqYaE",
  "key20": "39X3hVVSvS3AqydEAFrxXEVB2L55mGdZepa5M7cnmGZtDHB4hpMmdpNxwZT46pbw4sw3YoCeF2S8BvqoShvwsUxb",
  "key21": "5umFEaus9xYAE9TG2raovKMwyPjuqRwMKXE2jB4FK7HAVDFLCXN5j6eT3ed1sN3i8cdwQbue8WLLmyZgkd4E721W",
  "key22": "5UazDec6UpmygdcPzpq8ppbM3uVZJdSV2tWe418vBgXAcfohHuqX5MQf6MVC8o2joDXzz6atyzp89Fbs6rMfVAVA",
  "key23": "5FkNQWJkikbLtMbYqGFeD3zEF6D9D8SaPJs14hqMBnMZKp6grvbmg45F53enMycH1fgqyiEXKJK3B9oX1GbSEf4v",
  "key24": "4TxXPbH1Ge4CkjtMStAJZ1t9eatCGjgAJiA1U8j4rbErWuNvgHepdUkKxjTMbZBKjjFp6vq9nh1o56gRqUGkRnVA",
  "key25": "5JbpnNvnf4Ri9MLqBx8AgC4JNLZyQ6QMFfdbnpSPdaMsCTZdHn7cQYTi8MKo37nwHTorYA2kwgB6xJzJ1E2fYtqg",
  "key26": "5k7urwfKTdtdbcpv9kb2piohqge36ahoYcjWhjAHegFvFATj6VmLqJnzCT39vVYRr8RKenPKp2EamfGU49mR5vCm",
  "key27": "GUJg8kwpQJgQ7sh3ffPHm7wBqcbUDjvYwbMfJMs3sxLCpe1X8Vrym4CLkFAczGPV9AoxkE4KkbpCMBCu35XA1SV",
  "key28": "SHVPqgtbXMLUooi4yqEpGgrY7VkoGvjqCU8qfJp7w6HMDZmLW6WTrQF9fYfx12Wb942omuPSeXLQSNQdC9pA4uB",
  "key29": "Y6TLMmpzw5BtbCJN4HnQTK81SrviSKZ7XV6urRgMFSCC83Wea7x1nuKVvqUgwwaSEV3MaqxQwfGFn8k95WJ77sD",
  "key30": "4N69dikyRLYU4QYQTviHggyt5bKtwGCtAtrSs8dfwcwP744FLbjRvP7SGemAqJHqFQiv4cKfyhN75RLUYyLdshBo",
  "key31": "497N4tbCbAh4fk1aCLnhZdE4kYanH5xEBjQHUoBTP2TTvpVxgwvxiNKpUBQRWzUyUUoN7HrvAmaMis3A9Cg5N8Xr",
  "key32": "2qEfLpv73W4pJn1wNKwGUk2qn19U2jLTXYrTsRdq55boWa7eUiUXst73YpaeyJtuH9VTd5V6WMZ2DZFRFBh5osHz",
  "key33": "4Si72vLGgnW4tjhQNz48YgsKXH4z5ZhLpEd1vqyxkyDRqNbLBYcCnWRAtwLqGKfxHAz3wFt4jFy3tKLKaPPto84c",
  "key34": "2xR7z9jq6nZ3zUZeDSXkHh9D46q5PKZ5vYsS75yBK3Nogu8VqNArigiC2Py32fTogMxEfS9SSrLnjCPfM14WpELN",
  "key35": "2W8KmFPRudv23d1rfRkoBFZTKQejssnnh7QbQwWtttdDpabEcrPYkEKtt9G2gRUR9sKaPFiJ8H3qfCQeLMammBT4",
  "key36": "4YAbfEnfYEm8R3avUNj1BHk8NE81PkJ6yS6DLsSh6rYyhPW2kz8sW3LG9M6KuvhTA91UuDd2NwkDH1Zf27z3yp1X",
  "key37": "GudsCLi2wM9pHP2Jp2EsyQ7wNSYvAo7dwC43rzxu5hh4STrGyB1MrzSgTqhSYbWSrBUgUcor8kEhHntxwRrjwUf",
  "key38": "3g96G1wpNVGcLEm34aGYRx6A2waKtym25xdMac6zxPYMyGX3DKRP4cHSGHqhT92LbwxyDwKyrR2vxoM1VcFhbtt9"
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
