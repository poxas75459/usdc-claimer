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
    "9VBp984EBxfpBE95y3sBoRGZ2h6Vsxte81yFhjFFpLkrNaniBjoxo9Ak92XwtanLe6iECjspYxwmNPwoRpPmiGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KY1UN1hZhUAmauwtJR2tg4VWF64wthodaCvuCMLdAjpKhSJ5V8yFdTP5CynXrcHTxWGKounnDMqvj8cvqYqhgZ2",
  "key1": "3ZxLernWNmzAF1CaAJ6QtjSUNGA2E3qWhNdnVyp1jXfemxqkoXzW6HcgGgoyiw8i4wHYYjrPhVRVEoRRLfPbUme",
  "key2": "2VGqejprMDy7NKGAgYW1siY5qMKWHor5kHHCGkgNQ4ifs5UdEJDH6kSpmNMQreZyufnCtTrZfp3pkHv9MTiGcK7k",
  "key3": "2d8swYvgNtjdGMn4vg1x7PWDPzz9s3xCefP4C1mVaZAxcTJs7RRN54FmqRxDi4CP4TArCp3R76nfZQ9NY4ZL1Nra",
  "key4": "4auH7Ew1ciPHicS4aZnsdAdtsgmHaHH7eWsRFthdxYnG1Du1KzYSGz5JERjbKut72GReYRwBc91ZvzWA9avAvzKg",
  "key5": "3N931njk7kDDoeXoMb2c1QMwyk3k9ukRrSDAgcf1s4rPXErUKawtD1EuCJfeckbHfCH6BqT6bqA7UiszJUQdD9R9",
  "key6": "3grSQ67JMkeNDc8EKqvuiAj6e7pCnXXKmfAy6uzxcDvJN9iTxtu7stLEBdYv1wBZJM6Y6xkUAE3SRkFEDoapkVu8",
  "key7": "avoKyJMe1eXFnhcMGYGEXuTxemHxBgiYYwWPTDU93z1bWSesAWairkN2Vc13F4ynYkWLyqYrj5FN3ykm2nurAdp",
  "key8": "3QH5dgyXV6fTBAHL3hLwEU3RiiUTfxuJXUxLK3yXYuwBBUrahu74rNq25QxKaV6ygNqs6zKgyGJePXRKnHxRLXdw",
  "key9": "3iMF2ge64f3PiEdU5vNQmRjfsSXiWALHUFpnGK7VBP2gvnqo9vbHp9y6i9rypjTPKxmaQCmLm51Ruk6eNbf86gMH",
  "key10": "22hMNVNXpNngNN3P79E3X7RyGprQZQUwzwXcYhHtEPf1GE7oafdc3oab7U3hDwmzwgoCngXHBTGWJTxsDqetbivz",
  "key11": "4tHeB69ujdNqGExTfxneATCXHvb3yDTdFio882BXsonKYH8DT7tAWZRetYZn8aeNhrvMLdsYsKTY3v4wZbEfAzZW",
  "key12": "62T8cAKdNuqAgpUBc4honXBK5caBTbs4Aq4q35j3TF7trq3auxdnitVyA7eXYuyqeNMfB1XozeL7Wm8zvNxEcnm3",
  "key13": "5U7Zci1bboqP2z5H7tNiL6LSkZT8HnosgDDNNFeGWCYEPrLKPnhkM3MVATpqT7CVa1fi6tNmHJg1bJ2Nz8AgtoN9",
  "key14": "3VD2vkB6daNkmdZjCVBYuJcidH5WcAGU7mcqQawjnDzDf2u1QPZFWR8jnG5gxZvDvyLt7mHh32MhBHEDoLrfTLtK",
  "key15": "sRBbazWdUcCGwbN5LcHtqpvnnT6Y4bhWGC8wTaGHN2AgBqHbkyiKdDqa46S7oPK8ruZYzrd7yoYT71rF2NfUb5F",
  "key16": "3q6twp26oEo5CMuddzGhSgYY1ye6v7V6Dy8qaXC8MoqqhwmumJsYY3PpskikY7G2EnDeL9TuS46Lf4E8yai1Ddmj",
  "key17": "5Urp2ZnEa9gXmFXcZsFU6mKeAiDcousjkVZ9n4oUoM3mSGM25WKoXnndbU4Sv7hjtdEtuRbCptpSexSbu5HqZK4J",
  "key18": "2xdxx5o9NCtmPrLo5hj3h6URmG2GHQJaoDUgQMsP1fCATJKkC8R1EVNk6pJBJ837CBAEaRUHZqNFhzAZNEku8RPN",
  "key19": "2cAmf8qzZ9EZJjziuxUKQU2QqnNyEctgPoPn212eaw76wPzSGidE4b4dBHtexN7LK3Rn4TwFUHA3VD9SGf8WMWUn",
  "key20": "2NUzuBshzYNwweqZmtp6qVoLF4vfhseCzVb4n2ePxv3k6oWi3SQwaZf8zwFcQBtef8NxjSCbtRdxhGo3i6E1aZtK",
  "key21": "5NrNkCnPV6EPVMFFBkGKYwJ3kppQXjiAWLSNYFRZmsnfoL3soD75nt5qYt9wvqPomo9VUzU64sRxzdckGq4gEDqC",
  "key22": "595sFqTimWiHVqG1ZoT1PUvFHbSR7ceBAUW76V8wQmYMQz4Xz6JyxUBCdYBgkmgbuA5XcicBKdSxd9Ese3zmj3cg",
  "key23": "3owRpYKZhwsVgyophxzETiW9DDpNLu4mVrYkQmMQ5ZCtsxuguv5chnW4eax5iMwuuJmvPEkW8DbnG4ThjF4uWJxu",
  "key24": "4H6ifemx5XMXwFqEvEGYqKNCjmCrYvP1ucdj7dmR4C8uoLwFm4mZAsdqJ9a6LTF7SPRw2ZChPouZbKJDNKkzra4q",
  "key25": "5vxkhFr9baEq6CAoSaYFdjrXYh1rANKTNKR7fFaBRr9MvQyr61fTvfQdmyWh6oUTeD6q8azxA3noCKGrGsFhfVaL",
  "key26": "5zGFRmTeGdEQ7ir99jFdBA1ShmNJ38aN97TPsP2bfs9WKfZLEGajAsMC7GUhSDzz4d7yZfAfKHS951gBYaBw347w",
  "key27": "2GcDRzVnvoRpydM5t3bVKhLQNFeCWy4y8ae8tbPVqTeDFqapdzV96KLyfQM8CMx9MjszCP6rNXgUWy3hZpkVfL2K",
  "key28": "3SDrC9jgUNvUKrGiUEwq2qwDJtoJBxuCtNow486LdnwECfx7xzNPFKsdVWdiNvn4P575L4W1aTEMrVrYkWZu61ri",
  "key29": "2TxGhKd2dGfrdKUSy5MpqXjGLGDiAZZJ5xdntgratcNteAxZhDLJM2pmmiXCM7n1g6SQc3e5ZtfUDm5v9hTdTFrn",
  "key30": "3KXb1k5BgNjHsoKnuUvAb9cXEmPpGoGkVSBmcis4UGGXiiMz9R2V5gc2fWVyg5HMuvvVnnEeH1xCvPLEYXjs1cuP",
  "key31": "3oSJcHYRnqKhd5YS4SyBxUqcafPLH1hPNNzZYnpSh7hAELNiwqvynRBQtKNQ1smozFBv6A94s2GVd55UsnEjvKZn",
  "key32": "vsNt4BSQJBJyHdfBUMqTTTDS131NGwdnGiHPkKbamiVzzGdZfTbTZsvovwra9FTxfL8rMqwX4kzdciZY9EY4yXM",
  "key33": "4pdcD5hYaqjkRB4MroJUSA4bQbL4chUVSQr3cgFQyZxEBHGRvEFpxamV7UGbKDkVerPMKduKfR18Z2WggnCds8i5",
  "key34": "5jG5Jae2t7Qymi4sHV8sBd9p28dDfsFAcynz2eqKBS98MAvQiX1bAujLPSRqWw5PV2c6vdLoTqrHJrPJyRdZfZmB",
  "key35": "3w7nusyvde8Yy2DiXXUburTAYexjsmCPFiEPvfiNL9s46BGXj5hB5iwSNgBfTRt7cz2dvye62b6MViUQtu9djits",
  "key36": "5cu4LJkcsoQE3jiV99oDs4YMQwGgPW6ELcHkZCCFPrcVJnahKrdCCMBXGmdfJrLQJ5GVCww4YszjRJebVvArxRXz",
  "key37": "zVL8jCAoqtCKxNfeAVAJYeY4snfTMM9SkVYWTFfJb4FBJeD63hyHieKH1BexEqLQsKeUBEimC8RDPrdb38DuJ95",
  "key38": "65jRnzPLPX7EuREMBT3qK76NHjuEMcaL3LdYMghkZGiFwCqsf7H1VTRxaatyXUdUuEiFchJ3i1P84HQK9bn4mkE",
  "key39": "2g3rnhQhNg8bZtSirE6SoUP3fGqtA5HzknRS3k2LK6aXtEzuUpYW9cedPWZJNXVRNuFWsVXSmE7aGQ1ru69UxN63",
  "key40": "jVvTUqn1TM5akS7iy3hFp4PoNbPWpQEvVX7gkbaxCSpBuFBf8k85SAYgjGUNhM2B6inBE87TKkHuYhDowjmhEBR",
  "key41": "5oE96FxY6zKsT5A5ujiFFiSW3mpomCxdp1eSuX7YLz6ACGNBNAceywwBhuKsS9pyiJ14Y3swnNr11bxXQkkLo9W9",
  "key42": "4Fgt7St9nUD2dLmrgDS46a1S2ryUrpjoknMEkEQY4vsskikUrkTWmi7R7gyAvgSF3Hs9gio3Pw1JnatV8Y6SEHQH",
  "key43": "PUBTEC7WUXZGs8XR7CJmtgRCfjefZFYhMk4dicVGrvdGjLvzWgqkUsm2cS1jdu5eCP3tybGzjngrqV3tMvUrSMX"
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
