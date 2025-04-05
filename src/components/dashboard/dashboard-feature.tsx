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
    "4Fssamoa82R6qcPhxZ2wb6Na2GUvCVjuC5UobwHc3PoVnz6tQh1onjkapcHgqm5V4v3F9axwS2ieSohz5aww9v1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CXQUJdJMfz4rRuqwBBCKKbSW5AbBg3nJFhPcEzgsbRKCVmukxVFnLNUmmiKxFQrnnw4MEQ4z4HGDqNgyQcv2Twv",
  "key1": "5x7YMKsbRepUSnGDxRRyLWMy4BdsgdE9PuQY61YpWVPVigy4v6t2NfsqUZ7LmJkuxK6pCjFhhfcLkwx5zNvY72t",
  "key2": "4VgZha2yRMXgAE7VztdkPHd9tWx6h6ax86UzFXhUemPNUrrYGnqPyqZnw9tJRvwm24vw2oTuUHWvVwHCndpykoMr",
  "key3": "2jiA7DVBFKXRpfpAZCRZM6rpSwP9ELwjyMWtPwVkDHxwP2XrFB4iivuwfX6QpjogLmv2xBC46f9GwwiJRtVgC3RL",
  "key4": "4N9UM5UwKt9oDB1ShZLeefadQYzYaBjW67DYzLpqmq6PnsdzaQqdp3bGp1gpCkttDMMV5uPbkPnBTUVQnquvfLUw",
  "key5": "3LXDV1ktzWQWZW96wUz7Nf9MyxMboohFGw6JZGmZfbRUuPMvTREwaTDg4DQ3pHD4jznztKvJfxd1SWrZatDtMBTA",
  "key6": "4SiRGpdj8xLho8PaUrHwCpn25ZEoEoRivrKLn7WPiUzYrDnbLM5YwfwrFd3oW1fatVjjtmt7WHSrEjAyFjm1FegD",
  "key7": "5Qfih2M7MUNUZd2yE1g1uHCC1MLDrUMXBoWMRoPM491zybikoEbjNukTZxxoyAzNdo2j5GQCZ7LEeyXiJbQcy4Nu",
  "key8": "4fNqaaVRdTQ4CVfWLbhaPx31PiAYrrWwPuvEN7K9jrMQKzen9E5LWTr6p1UCr8UcF2yBpJWmKAa51QLtunnE6XNN",
  "key9": "4DTvs6WrBFoyGi4wnLjHKjcxeXn85J26UWVT8tZtnszS5DY9uPYxKaD1NTMoHLa2Wpdnx1CRdgnwUEug7t1cZa2B",
  "key10": "jyMs6AyTzTL3K15jfmZpwQgBneRiMRAcqWnwvKhSN1XF8kmGcrqjhh6eYDMggcvsW6XxvZCCCNHmtLPdLhSVy5T",
  "key11": "3xh5HqX3f9xBZenf8AVnKmyQni2RoxpzxarQ1jyumR9J5Skwa7WzQ9MBef3p8E3FDqTvTMhGo3EuBsZLfoD8p3Yh",
  "key12": "3zrmhhhSwWdA6rcbbWFhUGhZXz3u86R1PECWsx3ujD46am5mkh7zUeKnWi2MtW5dDCYiUNZRwo3uVdDVe8tLA6cY",
  "key13": "5qvWCfLbAmb1FwDwquNo3kGSKNjK5tuU7BMoGa2B2a5jA7qCADQcZfmVn7mxyW2x25YSfqX8qeG1YuWhU2fcrBjz",
  "key14": "kgNYvTNW3R6RfGWnxXCo8iXDqzEdymKPqYrZeFtz3K2v51TXM8s1fNxnzS8ZPiBL4ZiE6eiNmoKcyHEeAAngEUt",
  "key15": "3NSS2h5GUcGk5B8KPQ7rzVuJiEEYqLGPuEGmvqGu6gyJGmg9e6kkfcxjGtzTSJfcVYWeAeZ7Z3LzVfXKLscDtEu9",
  "key16": "5EsPvof5GHx86aGM5PZjNYtDVvbkAG3nc535ZcStRzkNov2Lz9vABjQrb2Y1322KbWYwhH8BmZGBrqW84XBoh2YC",
  "key17": "tdqRo97P1c5TnXMaZW6sHc6vbkLTe3jqCCeMaemxaKRXBYPzfvwZYmJm36kRvJAt7vAX8jepsRozkJqSkphng4t",
  "key18": "2QGr6cWxPb7MnEvUAjxe6okE1ThGAXFcpK7HjxEUz8HBBZd6uN5Vx6d7ERhkLFGbXHJEMQejxvLfyDzQgNSRSKP1",
  "key19": "22XR2pxtqdJax6QLNT1h3ZyF9ptMGK5xE5aKsosEp2YBRLTcPKpxHsziR5fLYDx3JLvt58SYZBCwM5PLtqC2jFJ3",
  "key20": "5gYwvz31C4LLJSVAzdBN7urPu2N4tsCMAcbQ7iLhnoFDsX1xUC1EoWkTF7FmHRCvLfd9YKCLfd1RDLvLaqArcHCo",
  "key21": "3aohWdBvrkrfBA1Rhnutk2PEzCPJiSU5QzrdBD9RySX8w1C4MjzSB9RAe43WDdVWMbqXbuRahuD9bZHoScyn4KLZ",
  "key22": "Fr87uxE1m3sBxrnKgRH41NP5HqJgVF3hLeQp8mgMGoBr7R5B1p69JWMuqtByG18CAJkJM6oJ2f9skEh2qNUAfza",
  "key23": "8682x6ZoUyR5iCE16yeKi9iGwbotqNnZwWZ2MdzzPpYm7WHzNedQmofsWWpnigaZdTZ7rgoGkzGD3weURk7z1kc",
  "key24": "WDoBgy5JmfvM2sSRJKXL85oJQ4UYqVb5wQ4frcqsrQzb6CtW7Se8agCFTnGsZszUgZGcnN4dnQTfuqLEUFLGS5x",
  "key25": "5WHR2enYGWRhki4KY9hd4LGjd6c1sDKF4y5LdExRAGwEXp9eHBpx1PPHKQWqaRhuJRywYtkYNWv48QuiB3yaEEYd",
  "key26": "4QE4S7Z1vTXwBvMBknb22ccAWZiMhAYEqwTyFRYQRTWxXa78pch84vxZPMHSGn2EjkbyhbWnc7F97kuqxhDjuJqc"
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
