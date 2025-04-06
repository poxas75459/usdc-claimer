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
    "c8Fgu1HA36Ui4f39Jn2GYpivNBULDnS3Wb1egMB2chRFXuLSpEmsSRfDatHpnRpZ3yXaWn96CTwK78NhJBekJeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43EzNMCKnUAxvt7WVzZzS4Kuw1EhC3DgpWAkAjA3FVZjQduLEfz58g2i6ohFHynbNWiNBaiMQd9eTasVwDA116PD",
  "key1": "3poZaqfuzZSWTdNCEDx9kPZhg1AbavKiU8jaaAfEJSJZBoBynL2wQ5RJb3zF57ikgsRw9F4rP5PJL6twJNoFeKYy",
  "key2": "2eTzmMHE4wnsUyyMp1naaCMniaFmGH6zJvVLpsvUH96pH5tx16tAFma5HHqWDQdN53S7w5PVfiJjHPSPkgXFDaXJ",
  "key3": "3GQM51GidvkEhGaqtXEStQgpWHGYqAXFwG8qghjtDiyWroUnT1VudftUrwAjgGH3kBrw3vYxuvQsLHK1FYhvFums",
  "key4": "eTZ1hSpWvNAe8V5kpGyK6KyguP27qdYy3S9hjALszKbANBVip7V45daT6KRQCSCBXqaYctjeW1eQpn7XhUXvjqj",
  "key5": "HTo1v9EpbJYj4ShLAFihfDcG9v8mMXop4MUMZfCCefaXLHyqXvL78fg1LkiBHDUy9T4VHUmUos1VVNs5utULYXb",
  "key6": "zsLJspzQZpEaUUnXiC2ZjkbsvQ2gdvUHApJ1LKuogBXefb5Q2gqMzzJgxQHWyts1aEA7hrnGaWkSjTtEsJoggwk",
  "key7": "54vTd6HK2gWiqxPWHHnXGVtX9oSSGCtftj9FCya5W46k7AGTaS42thWr2kyA5R2SFfaMzkzpfthE8p1KynaGR4Xo",
  "key8": "5Gj2NbGijN97Y7jFUw8c8MKZrnYRTs994wydJAq4vZzhpJKpUooopxiV9Mv5LaeUtzjYwh3jKu8fFc1AgXSwjsUu",
  "key9": "3cKZGHjrznaGhcg4LRq41Q3Y5hH8twjMT8HVeNreKzm7HfG1JtYUTPSehEhrCdZBuhHqmX7B422GArFP2YhcQWZV",
  "key10": "5NX5oY6fkrB1rWLKAsfqe6usdjJh8T5FwGxbaxbczUM7sPC54vojXUzGiTBM6B5frHnxbjPz6aEkg2UYAuhERSEL",
  "key11": "2ty41Lv82NUVs4ong5rJ5t9oJc5g4VFHcjDvq7y9udVqyegetecEhXZZSmHiWcHzwCNrwn4rCAYCbxDNpYS4WNfb",
  "key12": "58rAXYkf8tDaEkoTs9hkfVVSjmwUxWMfJvRN2vQ19S3YLr4ayMzwdLsBRjXhtLjhwQGCwGnk15g6kjVgAE4Da12B",
  "key13": "54Rb6FTZ73KBMw65Ckq7b3XF2TZrN1DcS58yNWbswU6BPkBJXPMsd5BeCxs92muF3DSVkwE3RAo8cNgse5LKbPzX",
  "key14": "3HVWcoA7bEpWMqzrCo2six8UFQJtTXKopKvTXQndAJibWjRFwZac2nmuvYT5WExjwL62arnc7QKGZa7T8WbQ9oin",
  "key15": "2Kr6Hb1c2o2FR7QNjRzJ6Fq9aVcmpTiEdLf51kqPMy7hASd5YgtpceakUAPNL7xdZBCkmE2tLyB5onXSL5dtdFZs",
  "key16": "2AzfkMHdZaZT3PHJDHHZgj2RmWCYGLLJ5fqjZPvRrjzuP6PcJEDwdZEd5tUwYJToZe3jmhGWHcJXKN2KCrkePKnR",
  "key17": "5TfDzaKfT5jPLAEanZSUEbBv9gmLXfeGC6hQybaYKrQQSiyzKcHog9pqgDE5S99bHKeZHSfhBmdFTQckg4koW3AL",
  "key18": "5yCVos3oN93ApuCiAmteuy7GeB1CmCjmLAy6JMkdhaH51crdAqx3esT9xRmGke7YUw9B7ABwGK6nkN6jFgkyhDEG",
  "key19": "66PL3if6hg2NEHnrsdE5dcUEsPJaqh2C4kAmixscUNXXB9MGXdU1yTmUz8AGbdHuGxrXRsYTa1WhKusFFdacuMwd",
  "key20": "3ccHAzckMLsCQXrmPbZFhpoJMiGCwLu84MkoW16W9BWJBA9gKDV9cyFMpixgujXWEbYLYb8d7QnegdY5BgxRz5P6",
  "key21": "2gGC8BZpfQ38Q3eTenMUdHZJ82NucHc1S7n7j5hDk23tMwxHoWZmrnFkS592dkLqxt4tC5JTbFuNBF1TZAg2JZC7",
  "key22": "3cM5Y1T5koxVKCRbgbCaDnFwEfAijiBgUMGDejVkEcTDyUbC8u4dcuq7kU8MUc9ecxQznqUrn1qn5uKW9hgH4ix1",
  "key23": "WSPv7sVr9h9NYc6RPsxkGHvHiZG7bD6jifycZ1St6m8q1zQy2Zy7ct8wNEy5LQ7jhCYT5x4QcQkxtCH26gYD6KF",
  "key24": "2BVGvJuBy62QPBoMjYEoNW965ifr34MiRDefsUyqDCreWrwgw4kEmvAr47NZfbrKuMESNP72CVKnTsbGMsUBCqKs",
  "key25": "4VVkuyQrYEqSdyjnRNp2R3R26oaDTJcn12RbiQ5opRwNL9KUMEibcDUwLCVpJkihZssKa1M2wr58yPKn7dHNz6vi",
  "key26": "2yraeXXv4MpBp1iSG4sJZQcpymC6MXic5XDQzFrQN3UDAxZqsqKenNwd8tDjWhx2FFgSsBxRgQf6Wihk1auJGvPb",
  "key27": "3deA7Q6ePdbZZ2Go2uMtz6vQRNK4tUCgS5wFUU8ZVLxvzd98BBYBhQg84VA7mH3YRd1vXEn8tjzrFWrGit3XYoxU",
  "key28": "5n2TM7ddwMKtFJ9qC5uHVPzQsd9yR4hWmbFPZMYTDTxJ3fE38HAFQg8VBGiVBCebpJ7PBURhgeQ2qc2JchQcgvK2",
  "key29": "5aUoELz69XkzJokYLB3Uu3juaxX2yky178Yvt7WtbPmM1P3kX71EzZCBDWnjCvuuGVTEpyY3vtBjp3dvyM7r6s2z",
  "key30": "BEcsrQAqVhPgd3KrYksbNFYLyXyrU3fziBdNR4jPfzbGzBCLJCq4mGSGXFzoLh3BAZrsHJZd1EKEqvjjTUWUpG6",
  "key31": "5r378bvdiuhuAXp4hU6chDpm2MXhfpCqMqb4EvKiCprKTV9mZwKmYaAm6T66HxCUyJckrF9KT544FAVse4GP3qDY",
  "key32": "3TuCtYb3WsYt9N3p1FCpFp1hf1U2RJeSo6A42QUNoiwxpzmXVBZSd5uNXa9cxUSz9r6ha3oYxZjzWiabyocTh6ok",
  "key33": "3abLFQQSjhUMz1QetrENjsETX5HSr7eFRhP8J2EE9FH13R64AzTyiiAHZHuPjJ7vQrpcv3crq3pgy3KxT6nViTz4",
  "key34": "AQ2tXKf1bnbrd3e6jeGyTDRABCtN1AFmzgSwvAmt9ChgZXtcsZvmby9Fvh9pQSpfiAKxfMHnLcdaV3ynpDirbmg",
  "key35": "22Dz4fquwLTGyExtAHybqKoWyLt1oiGwnbFHJph6Fh8Zd5xNfU5QmJwJazGtyzioY2pNywHkAWcjPsNpTGMuMywz",
  "key36": "2vZNFoQH7QTTx2ckD1XntbNTZVojcR5GtY8mU8fRbFGNxTmDtGKMbe3fjQ1vLNjmx2oFSo6w86MiaxiU5ttZM4Z6",
  "key37": "5wGk7MEiedsgjMCYyL8XkFTsK6Ldp6YeTJiKWYJ6pEqKtRtDD2BhrS7FzQfJ1XBFnHVY1MnxfXXutDh7aTHXWPCg"
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
