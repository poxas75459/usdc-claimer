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
    "2QWSYKyVdV2bWENfAeA6MYQg2ZMgZLbNx7d6tcieEU6euzEjxzW5emE1mhYAMecQdyRSjUBi2tK23enZ8UfcXt86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YbJfyEacgFrP7wjbK83BqRnFyzFEy6w8t1p6EYg4YXE3VkKXgbPFTPwWJBbzyBWdEjr9CJ23YYvnchp6P7dQbzY",
  "key1": "5NYgUv9L1KMHSnz7Ajo2QT4uznArpfcPF5zcTijHWLauLExH1vGMDc69FsiaSgM8RUFnJiGkRtZmPxEiXfTFyBdH",
  "key2": "4b9WdMRhNWatNL8ePnwiLCjqSJEFgPax4Xbs1ZX7R9GC9PyDGn9qiwdER3q7KJez978bb6EEzvzXJaKeTmDhHtfa",
  "key3": "2N4FcRa8ui3kN1g1T22X6x1WbGP9Q462vbAJ1wdwLNKYHAkJ2Ssbqn55i4zFCXdHMSRbUy3inUhMpgLsHhHSrZAS",
  "key4": "5h7uq5G9ZLCZDK7fJEJ9cnEdPeLCLHPCpZNT7L5qv4cRFJXd8Lb2spJt8ZtsmoQiD8Yi1vPGfJtbpFApBogr4gr2",
  "key5": "22a7TwK74yWFq4bThmM9utQ2AwhRyqqcZVQoR577bKZfmF6rc6uqnpCmVGEHz5bsDozXQnHQY7HDDqBBa6MshydN",
  "key6": "BaVxcr83xhgFdtKhiAHaKb71p8BEz3nRYjf7k33vs1w6NakTK5yXJy9L3eM7V6WKPCPdLbT3kE7Wzp2ChWrmYJ5",
  "key7": "2S6X4m7M5nTT4CytjiBk1hnM1uKhvrmJCny7kR4KrGKDiBPbNkZqYrGpuSTYKm9udtdSnoYXwCNg8Tu3ohNmiLmS",
  "key8": "4MziPR5bR2BrvzUA8bfWnoKDaBpL1F64vnybgQNrgHFtmLaVPnfmDLkRAkFyzYpocdY9KPb3wMMDPW7JtJkoUGGq",
  "key9": "5niJuQKnEhPjW1xz5WxUhjJ4uJuYXcssDrumSnwZNyBxeHrdcmpbyaQK7Pj6BcYVpJ2U13ctat7RPS44HJmreC5p",
  "key10": "35kEg5AqMEAdA9DEphJdxPZRg6CJzoEaLntL7kXA8Cf9jotozXyKSR6iajoCvevqJX1YwJtPqsVTxWvhvWys1FFy",
  "key11": "4xDMrLNa6emZn3WYdaBX7uZjcf6sZSKBoCJpAUNc7hrkesppYCHj4K4sAX2m1xeLXWpw14ckdpS4HiRHWnSUWgRM",
  "key12": "2MZ6sNxbetV9qWxa8sddpfcUA2hoJ2D5JMUrubDU9QuX7LcwbwLumR6yEiBPQVhxQRsgTEc1vxxNSWVVtMcFf69b",
  "key13": "4BYm7Pq4kv5oDSMCmE8Q52C5kM9rmhob6wiZ5gVhgqeUAKmPkSqpRcNBmRK4YjXzffuScDNugKHVAVwJsu6fQX65",
  "key14": "3Yt5d5A6qXQPn3ALXGVr4Gv4kL53DWT1pQ3TooVXW893VjxFeQtjftP5PNhuAXXpr8RPELR85t7ghBGLp5SGqE6M",
  "key15": "9eVhZDfrbFq4FmLN3j3KLc3sp3GdbdcJieWDEvSPUFvveZ7knzSuE13nBZbHSV3Pog1wgnAb5RTm9vzs4YWh6JZ",
  "key16": "zLTeu3xEC8Jadk1hMgkGMo5mcB95dmCbdhZeRoxMpAm1i46xWBvgo7CzDrEctv6m5JPYULR1kDpS86S9Fh2fm5K",
  "key17": "4mevSrsfYteZSa69joGgskLvSyRGeHThpeME5USUqXBeLjtkHuXKe5kogz6idcEV6YGzPbES7qjRSASQhtUQFwyi",
  "key18": "5VGuASKnSFLS6YhxCptB32EZsxTA6rX4qVfWnPheBQkZ68hyfE6oKZTQg3pcPjprVWBMLaJ28cD5LKURjJKG6oFV",
  "key19": "22bCX2WW65VjGw4YE8cYvvXeMfBqFHuMniVA8ZruntWCAMzLJpm5sXAyNMvhn652MS8u7TEHrL9PHTTMzPoNELAt",
  "key20": "4NZ8FxhheUuHzR4QwKJxVGHo7RYDppE5sfYBSyXdDuFtZMTu2FRDMbnzpTk9vbswtRprtzr2YTUojqiSGfcaRwNj",
  "key21": "3YbQQcRBebNn8wGbLaKNMgtZWCQAJQPAMqXFDU368oKRPNUgT14yD64snUKcKMuQy5v6vG4NJEmiKNKKtR6UFFQj",
  "key22": "tTy6FyXp2zQ81Zmuk6afwEmeraohmHnEhRuZRX9B8keCMbnQ7yPv5AjLejQ7haKdq14WPMeK6RqJXyan3LRXXcR",
  "key23": "57ZVKEsk7QKPchwusW63XdDjtw2i5NPHGKAUMN3eu7tauS36DoEuKaMX5A2Hh9AD9N6pfDmiuTyA8M6DjFoHTgGF",
  "key24": "5ivPJvxzk3cY3VVige7X1d8pAxoDZLP61Y1B2T6YpKEFg8nCf2LeHG6egDDa3EuXHKnWfp1MiezWtnZgevDXNJqf",
  "key25": "dsbAC4sWcxerxxtAbyDQKMd4zm5NQt4yxagQDK473WbhcVKZ5jqTj6ZJxVF1gg6kY1MhFBqqb4aNE7qNCYsn6m8",
  "key26": "4yFZQsHzb5YTfMgijFsHEmnfVoJdacvqehAGELKf3fndMLeHr2StXE4Bai8HPznGWDXoQTU3R4RYYGgYFeMEieKV",
  "key27": "5AzAV47wfyUGFh9cFzdBWRQ9HN8JXYqnezVcZsDxriuX1TxwwAfR1qP6W1gjmtbimUYXiXcwt7fm3T6eGGzbVemV",
  "key28": "3Grx1CCZGnMni1HvzJ7e85TsPJuPoRtaLGK3zShaA6E1oA2oYS6gGescvdQy718Da3mrZUsZLLTF5WVRMVL4nASj",
  "key29": "zsdZrBRyNDM2mxokquQVW51YN7aeE31P8jUnmKhhoqJHDkvYV3dozyAMhQoA65vme9QBx9xJgNp8uq6nCiLShNR",
  "key30": "4GiYzzTKYLZxFrhtPgbwsaFhgX5AxH3tEnz2HGxt6uYNBSqJLqzan3c75xtoM5vXG7J5SxLxSjKQ5vkwTURKW8ud",
  "key31": "26ZwAi8EhAwPqxC6e3cZ3mwjqM7MFzdVcNKh9rCyQQjTkKCBdpMrd45inzZpb3RP8d7ogrXmFZZJLXUqV7JstcdZ",
  "key32": "57zon3VhCNBmi8rxbxzrzkycHRD2xAoRZJvUDpFHujpMaz1zSEA6L5a5cwonvHKJtLhJfk4sv27yySejoU94DiZs",
  "key33": "5iKMXwrBAmw6PuhghHbQWx6gdXif19kWB9GBXmrgp2yrd3fep5ByMTjdsQgxqrySTpM21Sk4rugcAW9xf4jJdrFK",
  "key34": "cdwvD6WQvJDAC4QvbD63bYkq4mh8opfvvVyyKtXNq3uaaoELrbKc77GUspLzG62sZE6M8Fs599tqdUJujsaPWsa",
  "key35": "2rJDNLppgvRZqsc87BWhb9virqRSzR3rkFpSioFjLpyEFXss2CWq4DwSbKJD7EnTJEAuzm7uTF19DaEGk6aofhRj",
  "key36": "2CHv44eLVMv5SGsNwUJJ7JZs3czbdg1ZM7YfMrZYWzToEa6xiuAzJNy6LpNgLTSyr3BYZSRULLBRwiPpaJBpUodV",
  "key37": "2wjnjE3a1yciwMtmzxYqDjWP7HtADbyyVGKBNfvtwRw6NCGN9rDRy79NMhRCXeBDC1RzPU6xVvYkndcxhmYAhNFX",
  "key38": "3wGdA25Y1osvT8DEnLcMG6sUrP8W44Kqf4r1T62PkJHxNR9djn7TqfB8rM3CgD9v7AesEBJqHoiJwE4gWkwrYP2",
  "key39": "5xkVFMi1h5HgzGFUMpLc2VjqHxHZvN522mzGG4ytktCDoRxNAYQ69AMwwvswJUy4u3HHEBiRSDXXUsPZQUjSGi5C",
  "key40": "47hhhS3SKpeCg6snb9KzwuSx6RVF3HysmofJaHwvsA5sGKZFNH9JZ5cEZa5A3eWK7n4dVU8mjEfHEz5Nr7hZSuTi",
  "key41": "2CVKneUBG9maRUDovG25KhpBVH52hc4xQmSQRRbwh5Cshu6EFXsYS8cJCPTbwxDkAGBGiKVt1xytsXBSCN1WrinB",
  "key42": "4Zrbd8THMJZaCkrKMu7jSTWMRdETC7rpexPRPiAWr1UKRYacxPW3fjagcFFLFhSFGH2tTJ4NjjFnFd2Nt6HX5oEY"
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
