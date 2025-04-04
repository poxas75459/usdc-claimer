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
    "9xUjoxbENtJLwoBZGFN4wCwU3mKbBkJiEL6VP2vNeAAk1Tbib3xssEr2rtyiiqPgr7DtE6cg9YL6amQUSTz6EN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BTMLbcPJU7jMCnSzXWb5cbHewQRHMiugHVZEXd4rzq67eVVs3AprRb8hAENvk5u6odMeLnMwxFugDKZzn7CDHJN",
  "key1": "2VvCQjXudTqcBAou6k94vQ4zfbN7dw4PyLoKG461zH6P3QYwiWP6arU7aMWpYuR1mmt8HZz8yzGVSyYXFG11jAag",
  "key2": "499kBhhe5HamDx4keuYKq5Z5qdgnAABtrnvGfQSv5S5MsQEqZa8YZz2EenyDy7BFPcQ9Pc8bHCuTYZuZoEPpVa1G",
  "key3": "4Hin8CGVMc9UdWyeC6YTWYCyLjC5Wk9AC5FZMcW4BZQFjSq1YYcyvGccvFm7GteScxX9QudxLoirP9C3QLNk1fHN",
  "key4": "3cFmb4Za4bJd6mCeMLhBFnykd1NRRqaJNSmAfRYWBLpFMRkzwYxA6zaqRAyLcdau2q37t98gWPEULNusYm3byjun",
  "key5": "5Xa9DgQWZJqRwW2AxGC8PzvHnG7BK9uifhe6VrBDjUe8mjMFsLiJntgB9mkJTTwBribLYa3BYckfYpcpbGF6LSZp",
  "key6": "54Z4gzV7rcc8rRrqRp28vy4rXiiWFvH9obWmGx9WMxnZTnr9RzZHzxveq6WEGdeYYe575rBJxnJuKTqovdTaLCdC",
  "key7": "42Nu8u9yX9n6xEKVLaK4L5UPGBWUehE7S6sLD8j9mFcawsd4RBZZzU4BsGmDpwRn9fHpsAsGeJUYk25mFxVEXcMe",
  "key8": "jetHRH2SdZGob7VSumdYLYLUftdnQaEyd4v5JffQZUSE7XvJJyQqftgPT8PH7o9RRuZpYmCQ9TwY8bG517H4YcD",
  "key9": "54r8JckqhXdV4GKVa9XZzk4jiGZp2wTNrKisp46SK6qR2kLyKdf7DhoyxsuNFXsK4GM2fhkEqUv269HYujxursa1",
  "key10": "24RmQmtqhEvRCCSU1w17xHJe1RYKJwCJ51hBxe6tTdbnJheanTFtguj9YctNnSvwUJawwWoM65t1RxxSVJpFYtJU",
  "key11": "3smRCgXGCABE1xaWAtCH6rYMJdocngpsYNyuQ89uGrDFqgvLWNoq3XR9fETzpwy9d1H9JwbRyJ3FwTgHFqhxjP5F",
  "key12": "3Jto3sAXdj34gV7oAzuRWdH962hpP4PEhLCUVqJnvtMSj7koxYngBHCMU8SSGTTbW594EFRSeQaS7KQkuHiW8gbf",
  "key13": "AG3ETQgLgjWvb6fWFYYkYACfEv4izJ2YgW7bvQdaqp7L1Mc7tvrbG3EFpjoLEQkyTXP2EujToBZHoPjUahyV6Vx",
  "key14": "5DD96B4z5cTdCpn2xe292BfcAFvkY8xrdPoHKFdNHd3nUMbzuN9mdH36FR5KiX3FijWKY3YvcmVifSgK4oFLL5W2",
  "key15": "bcdmX5W1Yq1Z8FBDFVmRHkMADEKp9L8mqrdqtQcS9t4vQssfsMsw28bcF6d65mwxDBfBXZCbx4Kbh8EQaPAeGXs",
  "key16": "3UYmDAQbKiw8GUcnmtTma5cBRz3JvgJjctBHRDfzXrpXkjM2zf92sMk59es7iPooYfK2wUFzZF3vgtxWbwEbBjgo",
  "key17": "3AnHvq3R4TzsCYuyGkPwGzvbsDVPFcRXw4hkK9cuhdPuq3gBY5CfsHR4qUUoCWBE1RtCbpdvMU57vw6EzNWYxeW9",
  "key18": "4daTv9Jmq9k8tsWHdj6phE2Eew8GcCdJ8u2AsBc1oyWRj8Ze189jZqUGgigtZa2pka6yst4HoiR943xfcCsG5SqD",
  "key19": "2dd9JXvxkcwgqr3WPEguZBf2YNnJuY19UDd1KMLVncuXooU7H26k4CvyGd6UFEcKiQcLgcWvNscAV132DjtaXNsX",
  "key20": "27ghTw4vwSQG59zgKPn3sPAWES68nWkrKPfbmE8dpsxPaE5A3ybL38u8FtNy6h9D3knKSbBDgM3QkC5BKMrmpvxF",
  "key21": "23DTMd9LytQLwV56TBprU7KmXQYLdZAAaghnaehoiCg68iYhe1pKTv3Q1qQLZC7xL26NyjjMtWzGseXDWwxVahoZ",
  "key22": "3XUpDREAHuetn9VabQ9ve49HVrQDTHYmHExrNMhQdF5tXg2hMmMDnd9vmpMSLkNcp3XMyXkvfyof1torMPwXLV3J",
  "key23": "2oqhTiBPotK6nBm8KXiYwHBVtrDc9QuemMQVJ4cmxyQFjmMnzMHgX2CCzoq5e4RRFHznfJsLgvQfAjaSeQY7BBTG",
  "key24": "4b3oDzVRukQhm5KspVwAsZfR8vrSL7pvkbhERNHdiYWLo6Txcr879mLnTFVKkVwKp12jkJRLgfiKaaE6wkw4NoN7",
  "key25": "54HxQah1i543yQocexPuRb6zhu3icycD4Re6nfY9EkU4K2ZZdTnxtS1CTJKLPB11ttyKCYsTDprFs8fg7UuaxAFR",
  "key26": "nskwrF1NFRK3K9iqr2acKtZKQNUoYZAAiamqtXExuFPyt5bMmUMNsihVThFiYhPhrqHz2bDxWXJbntUrYuJMqTg",
  "key27": "4dH2TCxY73TaYfVngbHrMS2y615TnkR3PEermL6B2zrwW9tav9CigwmF5EKFknbLeHXngRwyDThttJQa7vzMHUnx",
  "key28": "UNLnR2G9kTDr9CL1sgfmkJBnfbx4zRLxXQtf52VgoMBhZe3Jkvw7SwisEVvqHER72Nj6LQhGsTshaPgGoHBzs3G",
  "key29": "2s1z6ko3sV5PEPhWQ58X5nmJtQ3V9hshPFqhuBgX59ZZZfqSCRSbcCqNANtPKuuJHscsaoRP5bquZtT2h5mp91e6",
  "key30": "hDaYVVqS2WaTdCvpfXAhrJB6w4ov1ye4Y2MRQU4ZddBioJizWeRe3r4m2UupURBHpVabTP77wGRNVQR3Q2NzuNP",
  "key31": "4hxtxc6kJ36ejQohTU3BqQ2xGv3atDLntyY3JnVWxKaoejGcG1GDDq6vkfSZytgD21kejU43Ga2x5CXpaDctMHUe",
  "key32": "3xe4SCdGhQVyuhw4pkGb2TCidLdKSceuXAghSJViGTpwcm1PEK9F9znC1ea41qihqLkDZMtdaHpqouhPvjXBfgpP",
  "key33": "5NtEBbhPLus48mJ8KKtq1yVMRHNjZQRfMMVe1bygKffgCnzTVFHcSAerRsAYfEXjR7NYVc2KwRHqFGK78DMwy39i",
  "key34": "5GzVabnM9opqAxoMkhxfCTqwpWhNKFLV7ZMkLff2fAScVjLTPwMKChbmHJQbPgsFQ7B2YpXyaEJHowndhu6L1yQs",
  "key35": "59ob3aHuKA6MQvDpczihXYBx1VG5F3pVT7suTvuZiuvJamURCqJtZLGNVUaAMpwAkMVLNjTPS6NqWvaMEYFC4GCj",
  "key36": "5yssh7E65gyioWWYyazcjDrFGGUKqLZFSPBRANbtrVYsFcRPcY3gXopAoAzGDAgq7RXLFXVvFJN7knKqzDiAXvng",
  "key37": "5hK1UJrbLVaqpmgF2ydWkLGFSoAFj9p8HHrr6Gs5sfzKoWTHpJESbJTibwuUxeUQMWwfynhwFHJS4c1gF2GoW8We",
  "key38": "54vQMPeNRgdf5t3JtYCmamCoHErn4uckMaHFqyiYcU2G8vZLCS7MJZBN9h4fGpBEDkFm1MZKrdqBShHMESRNGV3B",
  "key39": "4kkCgiakdHBbUFo95PpUenTup51TQ7wt1TRYcxj4DCypnHm5rk3LknTx6CCix7ApKDme8Xfdsj41dWsyRuvYX3CG",
  "key40": "29vEVxLaoFyGvfVKPrFnTPuyjqKHxFBVwnYfaHv8FuLrMSoumfsAi6PKtss1uru7gjEZUw5F9eVgR12R8RTEcKsE",
  "key41": "5MkBVDSDTxiYKzx2gXHRjeiFdcQUhm2MM4PVLX97qHs9dJsNgW1PREaBxR6PosyRUD6XhuCaSDP9dqAvs2YU2YN5",
  "key42": "2zA9d2B9hE1bHCjDUciU8ihvqnMnAZyv4yNj9yAvAxGLinDTQXvoR5Au3o399DwUthRLACRh82bKFuiUCiMXBmJF",
  "key43": "2pnyZzR1iHVNaXNd3xWYeqxJURgKEdf95gYqdzQPVtqmkC1CS9e4MYCcfbp2LdGdaZAxatwzvYdXKMXoFek2GmVr"
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
