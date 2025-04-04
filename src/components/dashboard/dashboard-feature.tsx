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
    "yUXMUCprAifZ6gzt9iiFti6Cr5QDk1Kg7SM3VEk754GiV8o5LztJCQkBRjyzrTvQ1v5YejpkxJM7dYtm3TbNBAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wN1erdHvgFqt4Vkyw5DbFFAuA35Wq7Jt8WNe4ikPctzCsCaajKjLfMpv9zbfhGuDAoSqCnAGDBV1T2p5nT8XTbG",
  "key1": "2fxfXxNYFt5UZtqWBNncDgNF9neVdezzGkZDjvvA6cxejEtk4As88mMxvSyC8PmWZQGMA2FrWtBp4LzKhEw1kG8o",
  "key2": "4SKxjAucFFPUrQnCT4VxJGYqqzx724gd4m2fNcBacUcNP5M9ReQbq95UEUxa4Nco4auCdN3DPsPmFVucTjTQH454",
  "key3": "3Cz6Q9H4Vo4zMCvCJCRhmKWhAe4TgnZfdzEXrpyTWrJTsXG7hYbgN5oJjhaZWgecGV1gEkD6jXqdRDNpsy8S4qtV",
  "key4": "2BETGHyPytUgLNHmME3JCKCj96SY7yFpV6Du7suqGEDNzaDTAs5z2KuNMKPru2uuMNHieGxFSSwiZzahyeUtqS5m",
  "key5": "2buVRek7qyTXWYY3MPRJ1A2XsMJE9erS5Gxrge4TtNToQPfgSxVG5JbWq7oPeTtLD9Dj56A1wJA8j5PkZ6DNZD7x",
  "key6": "3aHatENGSKqDtVYowsvHy9HAyoYFMduq9SBiDKVe2uYdtzTeHTg9YGcXRh5ZtwMjwZQdnP3N8xz7ZQSgDUu2Yjpw",
  "key7": "sQhcGPFyfbhyeDKA6DmiXpv89E1aK8Zb2SpsQHxuSerLt8WTvaBEqoDetmnmMqaDyJYQxfi5RvD6Ee6jELgQvUu",
  "key8": "4iGV3bTzDNydtNNTc13pV45UFtmmZZ2H2ZYDoBkRnTEo6Y1YfcwNFTSDNq42LuPhD8VG9ebh6Ax23Zi3ZSAJVywy",
  "key9": "2gySCKY61ZrRD8F6UdTCMBhpXwXorekUDb4yf3sMpzUeMfungrtY5MZaiGe7tMyhLoyoQa2S8GazDp2N3XPJeSpD",
  "key10": "4Pc2xBsyUxTcYWuPyojYBTSzQvVQtPVFkFLP859eC8MuvDwXzHSwUiuogPV8PgfQzpb2phWTMdLUF7FBTnUqR5R5",
  "key11": "2msCgf6bsGxqvKtRedrPGS2DVTcofVE5X4BtTMmJbDVg3E4KQGQcxJjwYa3bwdZn5nVFtR37rRvbgvAXUJMxV3z2",
  "key12": "363xERxrs5WmWBNGp5oGQSisMhU2sk9ajNT7i95jW4FWBPGvCGLZCwkq1e6wNfApTk5UsXGKrWvmvo1eM2W3XMJJ",
  "key13": "5ffnoRdPs4Eg85WcMQ9Xqyv4Cp9ucP7pQMxGg5MbLmtpDdkSMW7dXJkrh8vpvZtaNXSTYjP1qKWYuZsiKtCyvABb",
  "key14": "xnDAy2886rn898nAGjUJRcDe3JdnSt9Fs8HKyCKQ7sLggjguBiYwrxetNLvDzvwAvurPoyAx4K4cy4xouX6BXJh",
  "key15": "647TpttwWWRKxaogELUrXE5vFsDsSB3SX11gQvcvQDgaqjZr4iYWxeobxJp4fAtSMWMhrQ4jEqtTNgELaDqcF2Qa",
  "key16": "rSLzvbNHBA1NBCnQaTigRByyptAyEX5PvCBqgUVirsFeSC5i8ehVfdpuaY1xpYLk72GS48P4uAXZyFjkbZjk9H5",
  "key17": "5ZPrZpJMaC9iFGRpYqU6qMhvkEd1aQDCz7jQ4zjJgrp1dvrFjuqPXsVefezgM9Upkdfw88ZGAgdyTv7QKXz2RxGF",
  "key18": "4v2Y2neH3RekrZ1c64hrV37oWUQaLXgmGPvU4hGyUChaKjSF8HcHSFm5zmGLXUYczyrhnJo2k7c1VkGqNZdsT3Sj",
  "key19": "4PgEEBeD8DVYy8Mm7st68RSDKmUTciUwBCxfjkPtKZjbTGMd6CdWU7KMXriaPPUxYEdCXTYt1Q9Nt5oByxjZ5pW7",
  "key20": "26K89cL1dUbhYWwtxbcc8CD85bmyxZGqYCWGL39cvuwyEAvHaaVmQCupersdhVGgfmyEox2Uq2qpqDiRArAHS2YJ",
  "key21": "4czq1yDmsjD87mdzSyDHQEMwWgPjR7hYL3q18v5PG6DRehXWKeRrPgJ6wbKG94ArxPdhM1jZNYTsz5hrJJPz298Q",
  "key22": "5Yv18EH2Ysb7kFPAUTBMkriGLiwARQyK9bgLSwrJ7aMVKs9D785HVJQ3sk7YvgZ6HyycsBu4CZTGX4cqszkZwo9X",
  "key23": "BWJ3vfL7y81BtJ5rjxgWe8LVr8eeLdwR6tgfy3yoZs9Gtuxidhbm6ct7Kk2uJXscUN3DuZC5DFVFq1Q22eojyjn",
  "key24": "3gVTEz73Goqo4KfwFXPgAgZhCWUvZoHTmK5gZNSksTeBvu5ZrAjRhEixizehWN7QTwfJQzamRsiDPZAoSKome97G",
  "key25": "5zJfJ8tvASNQA7XbBm4M1sELvteGiyD6rXs5Q35HRbrbWNPdZV4AXJYU9eHnarmZ1sMzdyQ7tZ46M7Yfv2XNvEJW",
  "key26": "LaNiUy5E8gX5c1K5fRyqwEZUEi5GN5L5punL4SPWaSaMHenGyfxXENkXkmXUdFzTd4gMSBV64C9deZcHwmRG2A1",
  "key27": "3XBN3v8dSUecUBQqtq18sjqhrnnwEh4Qq6jdnuY43heFVnuTb2imXk7QYPVkyqTZsPsPXvYTPJH199W3RWkhcV8a",
  "key28": "2vWpXUiC7q2wCMtFAZ7U3fVKVRQMNCWmBmDnCEq3R9jaB7xPYZJEHuB6Hqo5ySqbnKyEwh8J6Fq1FiC1xMo1NwPm",
  "key29": "454vaFWzhVwzWG1rhxzzYkff5SqS7VykCBwjrMjjkv8mTqUdcFTiDdUqpQHz7ZjsZXT3wyUUrfm1uVK8QpxDy6GC",
  "key30": "3NyWfAmP75yfykqHYgwpfLV72pbE6jN7vx6u1BV7pPgEVKaL7FnJU5YBuWgGRkdQxYo2tw7XVszRjCRAX1BxU6gL",
  "key31": "2MvLbfG3dh36tNoGizYMjiY7Dsg98nZYchKSQP7TgLPUQSaurSQCePfQ4EkQSeLhebAKJnQ8KEpeTADGf8wEw9So",
  "key32": "55GZpZhmV5W1LXi61aeFncPm614aM6FvQD8ufBf5Nttn4vonNuiW8fSkFyVirznhAiUnmit9TtxuYqKsuDyfJYUq",
  "key33": "4yMHRXVf4PCyYvAWkxrZeGk8KWLjcsy1wccsf8dn4UCgjBfgSMxJmvuZ8xDMUJkgcEjE4vkSKxS2sryBHQ5LxJbf",
  "key34": "3dTGRSFC69C6wF5B2sNyMz4Qa9e9ruT8RsyjBHDHBgFYZVfB8Xz7SNZeWisufhZP6np4YMEJfrggunvazj8X5Z1F",
  "key35": "2qZEXtrbbhH2DH6TS7av6cSoBiTLmVgphqsLQSa7thU3agxBDQ1s2Mr4w46MP3hca6cBHB3DnYEQ3JLAZpJL313U",
  "key36": "Sibt1snBMTLuefLRG8xFa9XRiE6it9KqfZk9KQj6Hm2gg8wxmFd4NKr2vboo2t7VDyCtDFdBzH9JCQfQ49YgNN5",
  "key37": "3gr81ngT4wzsfjL81TXk4j87Pk5d9e5xEzujsk7gAbo3NSoauo89fbnVuYrywYBDCcpkmNDr6b1SHm3GBca8CxZo",
  "key38": "WJ3F3HjoZbS98e8SfA7rgcLCx6G4gikJFbwimW3GvU1SGDCxLa1yVVezhdkgrbZYyYJsSk6uCeKysvRmVCArCoV"
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
