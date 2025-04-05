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
    "oyt1cd3XEfVkxiGV368G8QWN6LyVFhWmonRAq7AzAkBoK5cN6YyV987q7s3HXr8mu6P18ZNxGsS9KuQgsDSgd7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48pmrJAcqh17w6xf5QGmmFK2yGAYYbAceBz8S9NtGoq8T2WgTb42qAq3HUD52EntavQ78YH7KV4aX98iAvoG98k8",
  "key1": "5HTTAxBfRDKmX9FfkjfPHc4KQYni5i76QxJMRZRdUC86ax2Cj8xsUnSE9T5kRcr4LPEhMiwugn5USazEV2iEieuq",
  "key2": "5dunpkpuigJsLBnC4yaWfipNXJchuSxYSEXCWGAhomLscQuCYbjjjBNSZUTtHVAtodKU4uqWmnKswQvftocLBTM6",
  "key3": "rbRoL1GvGVUp8gfeLCkUJ2wAeRrKmH5261qQ1P4gLjC2KdPAs8Lr4uTYir3qEUV6f8LQYgG7j5pR18h8YCCZk6Z",
  "key4": "5RjGQkNNgYJLgeVho5vMzGAX4TCMShW8mWFVoG7AurYGGS8VYMTWnStxihfdHC6kBNF7ZZUy8KEBbEhempcV82Ah",
  "key5": "5TbjY4hZTxaMDz29aJjEyaGzDSjj2kKcyxFkYMvy2STxMUSmy8edi9BJirjLuQz6g8gHyc55Zr1Yn9WgrojKtpS9",
  "key6": "29NEjYFfoD7q8Eab2t1VzQL4RcQYbJ1DCw9R1eVyy6vjXsri2NqV9Tba4x8ouXNzpuLfbsdFrKxfMpeyoukJdS5n",
  "key7": "3zMYJPJkNUxS2AdVHBNF9Yxr941pY4AA79iCjrq5Yg6Jh4NpT9M7seJ2GQhuXrLbKFFBrNFB63gDfg6eAs3qfnq5",
  "key8": "ojENrAtZAYfRf3NwWPbega5sXDWWQZGbHBghCXWCeWKjEyCmZsvPktpgE6eGnU5hgvpmLuXfD6pQWEPLGEcnVBo",
  "key9": "51jvodUFGcqEnxDrS8899t6ytmHMNkPrevRZSPvcjatBiisfYig1TDWjnXjjNZTFacgEdVaQmcFkWWpuTqHy1LQF",
  "key10": "xY7TzpimfZnbwVGefgXgGNxj73qJCFeQMUnqeyzBaK3EaQ5EndgVdVpeCuMRVQPtY4YrED5C3brxbedACNM8fdQ",
  "key11": "5Ca8KuuRdf5XnnKivCuudVWrnEE3HyDKbwbsd1v9eXgyLXuhy8c2gXmdkDFGjTLuiwTTNxHtFBYrz2grtVqkt2KF",
  "key12": "urzrzapnS4ZTY9enxR2jDcFSqmQ8Ju1difF4LXWnLXrsZjFdAaQX3ni4oZ1S2zu4iqxAq8jDcueEwJQodJuVzZh",
  "key13": "51GW4Qxvv3xoarmDBRrbMa3Ggu8ad2kLqyGLGoyjubXMMcVa6otho4kjr7rH13me77FVnx5MtiCA9YGyLnL8Pa5v",
  "key14": "YQGucqVLHvnHYtpbiKtaJa6RsXjChyD8XxmyDxkK12vw69t47X1XgTqKAiUFfW6Gt6E7X2PmAonedAAMbAoMKEV",
  "key15": "2JXK8cQLS39zqwbAwUWo1aLnp9bkLneeXDZ7hxr5SamgSiYiowPShe1hLwfkszL48CixPoiVoCZAaBNeMLGddc2k",
  "key16": "caL72Uv1AXZRZENknmJchicrxcx8c2DWJKDXDYmFU3U56NPqNUzXwo9QkkuEbFGBKArVrmyUnd4yqJwfwHgmZ7b",
  "key17": "4ewUYSmzs6k8Nx7kPcDHsiAgmfyQhWrXDotTENzMLCpkQNwvweynSGKZq6bRCgSDSzM1YAgwMQZ6n7HxVvyGVsoT",
  "key18": "VHzPSC4TdvzyawgBcTUmaa6J8mpZ8wbbnCFmxGS7ixTbCpXEsrzxbFvRBfLECbS2ERTtrW1oMFayAggwAuNPVC7",
  "key19": "33oRvJVmXYETvYGXEAwpzAsVPSqT6pNx4SU8N3XLQo9pgdnorN9PmopXxWJR6CAnDae8fQUrLHSXqXVqrncqEEVG",
  "key20": "3KJaApkjFTq25KE6f8VvYbYhxFqFY6CFi2vCm3GreAaFuyLP4zMim6yFhgZk2wM92pKUcA5vAwckqpn1p3UfRgsK",
  "key21": "3MrCMQxLcEATPmhv7RdXbJjjCZr6GZo4WGz8zvLFLm3qjwE1Uo5McCC2KjRqaneGjQUNCep3TAyVJpQyPwNBzCgU",
  "key22": "5taCHKtj4umb4NrqhRSpGVS55rgUFGe9MmjjQpffdVw2P33tA3rAK6xCGLGVZKuv87vNY8umAtMcXg1PWRXVx6uB",
  "key23": "1S3CgjyHafvVL5RRTgqrmK7TLNrnbsQuT2rnWDUP9aUWYhX7GYCxeihySyC4EPxLX6j4aeaWT6h4muqNViqVHY8",
  "key24": "34ZaYtvKGeJbSLVUwbpkMJX3YancddRXZy2MXr8VV9FEnyNS4GKEud9MEfKc2SEzBEDksk8Wo3ZZHWd1nGRZ91Yy",
  "key25": "5ifhe6fAC9x7iYn8zbwvscAWTQtcfyoB91QPVLDPjHyjdSBN6TsifkNoxBiLqp3MkTRJUGZRJ6wLF3yoc71QDYXz",
  "key26": "3eCchHtqgNY4GcfNjefydXtidJbgDTaQVoEfKYTb5ABQ3nQn1AKrbi2seSzddnoa1krHukMB9gKT2uCCbQTrKUqv",
  "key27": "zroFhcb1yZyvHbU8CStV4mvUssrRDqaAvqN6MjRCzvUeECJ1yytXXK1wnY7EsuxsTSSaorHgZhysYNkpXSpgMJE",
  "key28": "2ZBz5wBvu4i7YH5pkgkYYA2UJAjgAeEUQymRMFGqPMrxCkt7Je5iuGnk6zjPM4TBuKmUAJCh8thcsushU3dri1d3",
  "key29": "39nxXBuosPS47JFcosFgbVpJsyPX4kqAQ6W7DsoSnzNx96cbbPhzYbZZk8zsH1WBFZzmdCAMLb6udNMkM1VsnFyn",
  "key30": "3L7HZPBTh2jKhzrB9CQRyAWVzxAwMveVXmtGM4xtTwCKSBG6rhX5dUjxNC4mcLTpe6yNJsTY5hRQKWL8B13VhCfp",
  "key31": "4d9NWHRKTaPctsgkFQUexvTgJKDHNCwcWXrbezFkvpxJajP9NenjPth4ChHsEPx3aYqp1UAniyS2vRdG3VeNHRH4",
  "key32": "2TTZ5H9qJF55Wp4noWn3EiRR2Xhsdq4rmMibJpnBHf2oM3tQqDCYSMFkqJjePcvhEQqYpJCEPFAiPHkiZViVXMLz",
  "key33": "4YCvZwMTqnqEM9oB7jaSQaS2hEkFLSu49HbdSR6ESesdnBYWpt6PRC2ja8waweVTXcyVkb5t18hJ84Q3fHTvWHCg",
  "key34": "a1ELLftxFvfhrmEMyz8NsQHenaChD2TAzQDEvrqGBCm9XzGuyXKTrTpe9ZxteSbaFDYwSwYu2f7n8Pf3ESCeDia"
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
