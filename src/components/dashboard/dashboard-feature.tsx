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
    "2fYCv89NqtG9bSAv6TH5u37LEDYKCjHTJsNLJQwQM7UM4PyvxYx5WUuJf4MADjgYH978pqTuBbQ4PFa8cSZ2YCtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tEFFpB9dAqrLQKbq3sDzxgSNG2fVXb6L2dj56NGRKQtKbVacvJAaZkm5eBwUDzZovjFSb1MEH6rSe7rMYZn1BxU",
  "key1": "Tfksft2PvbDq7B5yf4XG4GXxQ46Dh8r73UkHDsC8xwXuosMXLpJs6rHwrtGcPMTzgiUr2xc9W86XQ6jCUKjHTLo",
  "key2": "284LKsN4RKDhWFnx5p1f78y9RoLad6HgMCLnDoUjDUYkRExRZmAauTy86J4SnM9dTp3teGiLdj6VyFkV8vhmNoP3",
  "key3": "5uMPox78RW328i1gbtrZeGKb5Dq8KtXuhnfBb4LyMkZFcRpgXyEceoSmwWjunDhbkjoPDDpfaYEdaNgUQFhVg7xY",
  "key4": "v5PRk1XUSdJQTohoMyPLP7U6ptFKfKAXb24x9KLYNrLh4xdYHSAL3GCWGyuJgnDT6X8nNmUTgzbSYeE2WYkYTLX",
  "key5": "53cCNdXgkUvGVSq4P9tqRaY4N9nKC7VFgZVYxcZrAu4qwbo9fpX6jc5tPMvmJtJufoEDFiDDHkj3ibQSReyux58A",
  "key6": "4wGHK7ggY4tLpdwUzTR1VjDuFdLKurmS2W7sfe8CDGRyetAC1W9t1THjXuUCiYkXA9BhhqwGztdgxZLWoHaN2vSy",
  "key7": "5d8STct7rUNqmsP2ozzdZ2KjRS2BsRb89nL4Ys1memddd2QNiBoaGzbBbiDZmiqLikqNHh7QZ8aJckvfv7jqWhTM",
  "key8": "3e1xRUYeQuYVnPdrEsqJBxrja2aQDJVDGYGiWoDJ8fBYbdMRmGCPWwDgfiddgxB3Xuyvsc19Lt1qbjobEN2YbHiM",
  "key9": "5cwtPThM8nVoJ8tysFeYADxj1fxSRhFLiCTo8wcbMKSSLgiDhGPCAuLq5UiBC3iWyj6wW83V2T7Y31gByDpU8sN8",
  "key10": "skfiLJsckrge617uMqZJbHzxZSct9auS3XbMEqZYRL8uAFfEt51fjdhrtU4sA1a8BSes3oZYmE62GFS95QnhNRd",
  "key11": "66yqwABNkuSuviWpfnYdAbkD3BesqgeVLi2bUnemWarKmXFzKP3dqF9TQSDC6Y7Wo8nufJzhs1FLTYK2TqPB9kvn",
  "key12": "2bokW2YpetdgUsk9fd1RUPjwdaRCEqCfWwur34o7oGn5u6pDTrWmYpWcorJPwc8Frv3qups4txVxnqsCrxFRXq5J",
  "key13": "65EQik19nCPQ1rSMANQCb84kRWRshkgxmWKHuAFwGNNZbXLyGoKMdY22APncpe5yKXFD1KnnSWU4FSXaTE53qRbV",
  "key14": "5bweFX4N5zUDKWPJCbdApWqJ9TdBC1NodvZFGLMGUTymGiwz1X4cnqkXd7ri8M1vHNUXhkdKPRpBHUrXKxknULsp",
  "key15": "4pymSZpcKeiyL8n1fJC1Gu4FL6vQwWLaN8XZgswnXUUGShMUuhkvHW4djAxPJjTZsZ6skK9S6Fg2u29VW5ftX81Q",
  "key16": "5dDF4iqiC64f7FuSH3egcKqDBtFVy1fJ6qaPvoahkBps7a8kgj8F95FqU1EfUvFuupc6KMNsL37WbAwJEopXX7q3",
  "key17": "3xFgocUesWiVvHhMCBf4DeFG27mmYFHTs8uTYfLrXX6fUgzi8j6vnHXTKYiL4ZMCa5EkPhSFT9Hwvvt7opDANJFM",
  "key18": "59b2sk9JrLtuKZdr4B3jxMbBCo9JSnzcpDukkEcvBXDAqFWBojWzZTVgGhbJoHMZa1eeMxx5TtVRjkETB4dkoJfe",
  "key19": "2XtTvhfz9iBmxjNUfY2EMbpfduw3U3mWZoNZ4e4yCaTET5FCBYerebRZ5oeYjPwrE3r2mm6Am6RQEqenyuGv31sp",
  "key20": "fYjbK61W4CDeLLHkW2qddWC6LwXeXuXkHyCGWi17fwCxSXfEnfNoob7x9NagS6d28xVDZHeTdXj3wf6n5VANoKg",
  "key21": "3azPeYd2Cs35brpNUN72GoTxqieWJZaN3uUGCgCYqmqXLzqpYcBydTqiQXx3oKVE63VEkKYpik9h6tkQJM1972nn",
  "key22": "5HtxUQhPNWxG6kRzi85uzXEU9zUZxF4NhYrEh88uNgV1eMPRPbEJRxuujmGUCjcD8qA5dPwLAWAESsQegnv2jPZK",
  "key23": "5C88y8ZyiJUTMo81pGxxCtEt32oHYbjWciZX469ggURkyKp25TniJd7KGBPkXX5EV6qVqEg9jL17SzjeCtZDbiMq",
  "key24": "5jEPq1cjgYRzYBBwjVQ8N45q4FaTLzUywN57sM1SJrmgKpFxQ89Vyp1DZmCjViWRRuVB9baev1QiFuvU5fSo5bXV",
  "key25": "rRBvSQ6Nj6yMnL2HT1qnXWEgnAmRWEo7x1JWPfThqrhZy7mouLyrLs6CyRXAPyMfrRpk3Pnb39fVqPSVTwdpL9J",
  "key26": "27gamQKMWi7Wi2X2AGqBinxSHnAaBVtpsaN9B6RuenHLKmPJiSqZJAPd8uLLbSnrAGJhDsipqGtU3Gvh3BzDs5sh",
  "key27": "4s1Xw8JjGFS1qzrnThTRs3FnNpM8mNEWz8Qrz1JYBvUuwNxRnnRXNRkAdJ84g3DQnCeGdKsrtY5iyZPfbbxY6APc",
  "key28": "2eFsuhMNRPxtfum6n6ACWJRP4yXVMooq4nw816r2J2pMhFu8hSgMvvypU74oMT6tfJcCkDBSSyZ49AUyex8CCXoD",
  "key29": "5tD73sKftynPDTfXhndxmZkvtiuGyMfRupkZmo9erhMmuBsD4Vm71uPdSUYtnJ7VV9Gvwk3sY88BVSGq6zyn8zdt",
  "key30": "5dwXnqmzD6zC7NbodhFnc3pzQgtEGFq9v7HLvrQENBpasSm3FUDeiKPzMgksWYAwr6PietfTdfvsvA2bxy8SCf69",
  "key31": "5uuGtgBbZMwsPneRfBqXuDKXzE5tiHfvciaLjXDyMB1hbbB4Hre6oxd6ajpBbTGb63skzuhu1X3r94ZCSKvByoTV",
  "key32": "4vQ6CHbQxHB522jtbrjJb8d42PepEp4ZaQUGdeVM5jdLKRPPVAKQHeb5kA4fTUiBzWKR91CM6xpBkcp2TG8o1tPJ",
  "key33": "4VZBtWAxRtB5bV8FtAtrD1i3i92C7sQrmRxv5nztjhhBoXysmCrEPqTLQ6hNkuRJVrS6QAapNGkkDvUfvMuoCbaQ",
  "key34": "MuRvReUwpExdHNrcPbEQMxomU61CCUcpHy1vwkHyJ3jdUvaPNXPRcL4qDybwXA9d7PbKqzqcGvu9Bp8gXZwRfqe",
  "key35": "4hdUZbDUUAuGENLK6qiH2Uop1nfSNA54FDCWuNVLkvvXWz856nzPvx9X88QqdTgBhxs5aRwRRRK7RuxJxKNKMnK2",
  "key36": "8ShoGKexhJRdCWrUccxm2vELy71u2VC2aGHLenc8R8UdzZBo8S3G4XvqHEotjxdQvUkzY4EhvZwYV6Q974XW8az",
  "key37": "9sf9JpMCR36KMZ4ABKLiDxjgbwES7btiZf7AnLT3E43zhzrf1w3SxvK1TTfQcJPNmwEJ56cP6iAvTZnsdztyrx5"
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
