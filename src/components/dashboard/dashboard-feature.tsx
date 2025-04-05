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
    "5SEJfBtvD1FYAUjbBMQNEbU9QnzygTufbfm82U8Db7LytWicRhyuxLAy9q3BSEjn3rCcZgudk7NAvWLHKwGQYjiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pmXj9uRLZLwDNspsWuwph7wZLUxSSqk5uQ2QD6wBJzRgMuxEfFi8siP5nuzAukPjzgdx4NW9dZBUyxPWhHMze5M",
  "key1": "2zD8xY7AUQQ6LBDABops9ZT9UacWswesZHoJXTjRB5N9vnGhA95fyxsZqnuN53h9SXVaF5smAQ4hJdJDXBaesnZk",
  "key2": "3b4JuCAabe9S8P7xLATcxbWnJ3wh3ZoTzX1h3dsbvYTV4KyHYRwT4V1bJfJQMXLjpKZEu9yfnVY15HsSz61AtYy5",
  "key3": "WN1kovTPwSQzNBPypP2kv1LSAVSJsgm3waNESeeGQqqKsob7nwFUruGBA1CTnEzAESmGkLN2kk2j1ztE3FFQoDR",
  "key4": "59HaU8yD4qAKnkoxJfpJU2XvtNPKUN9E428H65bvJkmggs2fNMN4yk7cpWoYHkEeEPtUbACEQkdyqBx19XTEhKtu",
  "key5": "4BqBnbCfiuL1Dr2e6CDBTU9uATMYowX8tJ3r7o9Sw32mGDNwFUu4GikxhF1UzECm6LBJP8o4nmm4jTLrfTxEA4Wt",
  "key6": "4AD2wve9SvsF24NqkrZdzCvA7XcVgvKBfshLNQwPGcvhfmcfPA7i6PSLohUZ3FWN4Wm2txnnPcCz2HBqLVxCq73J",
  "key7": "5oetLAHb47573cgstksHWezffTZ2bXnWCcphjqKXL211SY1xcXV9fvcZE9eqLjFGV2CH9oMaJHjc1hL1y3rYTSmM",
  "key8": "3eEsoNefFxPjUJ9PN9qN6SNLbDrYbjLZNebyY6e1pGdiMi5KwkgoXJJ98PYhNHGZcbpS3rxtTtUphbfoiYSvQiry",
  "key9": "5FTHPZY6dmNH8rrqfQgjUrmYKqfYj19btG1VuKFCHPrbX8MiruJzHs3pBMCmR3NFFCeKkKiRGL7UCRMf2dUdGmuq",
  "key10": "4qunhwWQcyFMxbjC5gxu9y9zLTmBVPgXgSBr5ttZuj1J4VAjJfexXzEVJcyz8Su1DhT5BV3RoQkNDrzzR1q3UL86",
  "key11": "2JtcWBtigXVd7qiwTbzvyqRwmris6myR8NasMEFabmuxtCKaVJcVbCcvFxZCeJ9Vv898tx9uUapbVJHUVjtEF6Rf",
  "key12": "5hpGTmrAfHv8tYoLPeU8XwTmSqm9PVVuADF6ayJyn6CaRw3Vm5hku5kKUPdEhxSJWEr5CGqEL9bmw414NkmKBM33",
  "key13": "3hUbz1RQcvNJ4s4D5EPnoX4KoDJF1QTp5v2vWLF4g9CihpgLPHzbLoakVvfmzdNAhunYqMaSFEtdrxoCz6qLXyFt",
  "key14": "2UiWhQ2bTeQZHBGJN9w9NSL4vgWvDPN2jCbVPAbRvQ8NL4rm1UUJz1QXQdZQUUJqaduXbuKQPzwk7npWivD9SbpF",
  "key15": "59GgTNa9ESLYz8Zgpicw3DSmQ1SUwHQu5E7pU3Xrw1VxsU2M8qJAxwCPWvcdybNEYWVeZKTFuVvdmM2KvVL9LWqH",
  "key16": "4vwd9DX7wAQNJpunYSmJdz7fJ9Au4Fvp2W3U9DNSyatDhd6Q7FdYrdGnKMP4G38FYta779tmZCPa4SRoP4Dj7aay",
  "key17": "ioBFSgCn4dcSz1o37Dab5mtHEZzZys3oX5UavyxS5SftEZYppMJE8Ps48fsiiGWdp8GovoUXuyiMspcUx8RSaeC",
  "key18": "3Bdvx6ZSpiHJknkbR8XK9dDDyNhHEUPycPVtZ2WKmEG1tdXHqGxdJqEqby9tWFQ4yzUatcaLYRw3ZdTHvRe3yA5q",
  "key19": "3rqNgsFMpWtJz9Z3rT76ijLnuQuewXBYTqFUAf3D6FgvApgAYMC1nxdF3Z22Z3RVY1TFFdTjhhRmuPqTYTunjz6q",
  "key20": "3MGT5shG3MVwJUHEMvViMEbaa5qhBEPhshXtwqzxdTPdAMRrFynLHaAdsdYSauixAc7HzbwqJdAPejHoKsdLrMG",
  "key21": "4EpQ3Snj63aZD6sQQhk6TKP8e5fmkUYQ4uRWyhyDTvaYTNsFZd8UmW5eqLX5rVPLxfB9dy7vSzxKJwtpiFLK6CkQ",
  "key22": "3P9gNy1cavStkCVqNYSzUJLrVXzBYr1tabghbzkKKeuCeKouJBsdgkyzkHgak9WKBZd9yUzYzgvVSVimzwbvP79T",
  "key23": "4ZncmddcvM1oefPs97Vce12jCMDX7PyiN2VvdECojV3C2bH7rEx2YgJUfokbUcXPyKA6axaQcfMqvJcp8oLsT98f",
  "key24": "5kwP5mUrPzoib4o8yQ6DYFt21Gzn7ykxR9qKhGbb4fHRnJWmtAe5wwVdDuVUvMaUuGLkTQjF6HWAXqvJG3DvACBk",
  "key25": "4n4VA7vvXpahd7QKBd3knPNNHwkxmbSXPVxcAXqm8faHaHpeGHCeJVX5ZYtRE6mEwPCZ79jym3Gr7Lu9dXKQ8R4",
  "key26": "2sosxnKQo7jJQnZ7KvGgStNLxdkQg48ozTdwe1AvAmz1NPHLUZxqwKtBChhyBgjepHC999LhvqXWrvwfvWVBSEy3",
  "key27": "2ddK24FFHptoJSak6AoxLnbxaFQjjYYZKnYGbujPdy3LDAVETZ4AiVKWD6ePG1ZRgY76BUDngiLVVvbmiHm3P9ad",
  "key28": "3GsZJW19VEgVp2WgJXcnmdo5rgq4e7gNZYjDBpk9yRtXUYi5MyuFrWiFsptNvUWCQodpUtpFvUmSnPDHTahKnRHf",
  "key29": "7NjWVdXdNN5PBfumnDHzShz25X77t2QL5rnFacEYjWpTBzUA1fHR3hZdS68SpPSSRKYCDZkUJYcLNYich5zmgYZ",
  "key30": "4LPTbcyU7V46sokG3eXAa3xJFMwdd82YntfQWGErCqs91kLnjy7obnGgVi1Ed1SMJkn3CyvQXETDuCm3xhJKgxLz",
  "key31": "52crm6jjohPFk7fGPGA8in8m3TPHB8LY7Xnpm3bHLxeRSn23LE95jMEaJ4yCV9x8ZJCoJ8arsmdzREZHLToGu2mq",
  "key32": "61zkhCKjz1z34wXAD4rJNPA9Sqk4s5M5yVMq9rQteBdiW7GGPX5ifH7pxSZ7HymRhcQvKUDY7cJHXsqokmYdL5oX",
  "key33": "3E5w9LKJXnNQv91KvN4ir6WNFjPP6SKfhXpqBvsnT2sepVaFLGSyTcP3U3okJj3jc3VvpiZSn6dazbJLPnUmbfUL",
  "key34": "2jQzFz1crUvBP7SjY2RVkhDooZwZbAWrLySASH2LXZ8f2Bd43fo8qvoyNRE7cAWBLdSK5L43CJdG5XuKeP77tZdM",
  "key35": "4fC3NPiZKszkbVvjD51RemeAqmC54o812AXZRkpVaBb98nExPy2G6iumZRK8wz8wxgbwVzhf8vXiosWDdLErzNVN",
  "key36": "3zfz8X8ySQVXy4dBUFMK6wfANnuR8oiCN9GoKX8q3ruiUt2v85i3Sr1joSSqiob84wK7eMZokKHoV5wwNHw6CSVZ",
  "key37": "5rvqmd36Cn7qnaxj9HgjE52spp9ZyTQV25sigQkWc8bJ2x68BV88HN9sTbb6zYroPVrv4vyCKZ3DaSsWaX3iNn6Q"
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
