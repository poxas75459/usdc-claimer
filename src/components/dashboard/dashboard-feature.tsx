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
    "2yGmGXuU4JbBLdrvK6CTbuSvvD8uoZ3npPd74ZTY1J8cuJuF5mWZAEoHGF9pApK2Tg8Pb8ZfoMac9eMcft7bdnmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CMzYsp9JCpQzVjyonpKTq7cjLgXMBsUkU3RvHfuMAaPhi2F4LUeX8YJ3H9Er8iRJSXufvhJLtAxK3yCPfysc768",
  "key1": "394sJkagpTY9E9YDwxFFT3dhqDg9pvhtwERHYFoQzBTt9VKr1cfRBjbycDuv1vmqzY61n7QSXetSVx3BXqqSYgHj",
  "key2": "2MpsmqgaKXCEczveE7Aog24PhKPyVvVfcRXD6RQBCFgqPEdPasrQLXvqTB5DEMK3QETzZsbzmKJMMtTjBxjYQjh1",
  "key3": "2hU71HqJ9wiDdeRSH1dguvCMKmyubyDyDcNZHQHx5ub4rQkiviV47SDQBS44WEzP89EMZGmump9pjitYGXXVaBgU",
  "key4": "4TPiaYguhSpYqU1ohFw2qYBssX3SP6HRPt2FWXSiauCFhwGiPje5aEWWMkWzFQiS5prqN4vdbSRFFMiJa3znou6D",
  "key5": "5oMpFCZ7m32Cpn5LrhEz2Yj3x6wSya3QAdYCAX9qmbsR76PSKQnFSvFX4ocoqMH9Qv4Zzj5fUbyTcMdoGHxhw3Vk",
  "key6": "2ys68AXLWxN3NKsgdvygJVuNVFAbjvZSLNYQKDiBQtTC1yYiPFn1NAUvRZWjRVKQk1Dyeiq6XZJqfbKConzFKqJw",
  "key7": "sf986NNc6HaW1pqjpqjxDPkNXrHyJSYiyAdofnkw2nQbTVnQvPKd3rC9ohJsESY49cbJ1D8GmBoN87cWGXMrEWP",
  "key8": "3GukJnQZ5hz4fhfxoy1724uHyMwsG7g4MqEJ7V1jwTFNEuwz2brXr3sbL3bjSJoMrajW3QztMx6PxQH1B1sA85zg",
  "key9": "3cvprBvDLU1RvJYU1sMpQ3N22qgvom4LJP5F1J68rxL1kr6ehHkYusczqmqbcRwNckbSTrfioTS3tLhPZso2XQBX",
  "key10": "3wU1Ax3F943khLrQEQUcTFrAZ6Sys2QpVainZpwXFD6TWFAjHabF1iLhLi7BxNfqCnipT5kgjyyZq5UpZx6PMms",
  "key11": "55HyZa3By6SnPmJEd7qcLpTiK2KbAoT9ZWGz5RLLZFGWK1Ps2iqgL5mQebeDZ5k3HHXfFP5o63iTzF3oroaoUXAr",
  "key12": "4U7ZSHXFcn89RBWztEhb9BXXSc6WLuJAruSsrWbofnN9DhNjaMGGqCvoV6rYLEmQAQ6Th8yqwk4iexRtJgpKTgss",
  "key13": "5xJoPy4EStjNwZMSx49Dk4TGvmN2YawjBKKcGgvbCMjG4baFduto5bTYSf4UJPPYbyhYiizrf9L4AMYyxKian2gJ",
  "key14": "2SwwAXMB4NDxy7Jpc9tj52JEEe1f6gXTHKh4uCNCPKA7fJAcZZ32gKPjzgYiVVdfcFbjZmmBz2rfrdUnZzg1kwrG",
  "key15": "5QaqUaP7E13AWjYQdmbYD2LcG1E7cTfUwtEus23etiue9zbfjSeir9v2FnwMe8N9dnBecr7ikGRY9S2qYLdoM1Tx",
  "key16": "2dL9ukuDp2rYoUhVPsGQA2WraC6fX5NSKMNJTmq6vx82QGRJwxtRYq4t8sfKRfBumcyrpa1CrFhJ5sWmJurMbhaB",
  "key17": "uo1gWhhTifBb14rzeTeiP9bENT7YT9GXCNDNy5CqbyEbV2Ejo4ALyy9byPpnKBtkyuA4uHgpSCFUKVBAEMKSKvj",
  "key18": "nQpGDWMWWaZcH4LyRus8JgJoJnJquMDYmG2YHKjxSWKCrQbqqDsYgV3XFvHmrMYY3xdPjJetPFXPM1Mv1gZYUzw",
  "key19": "2rMKiZkWowMutjB5trtJ9XAsyiZC6Sq9b5LF4ifSrAbREJv5MTKj12kkSwzHJ2VK8XqMk6c2oxBodUPmH7Pvsij8",
  "key20": "4hSo19kiRie2B3sjohdkcNP7qW1x9QLKoErE4jZ4aGpXN8Tt5qvm8QbzX8GQCtCQBCAkAKWYpEEkKuZZjExXwaQA",
  "key21": "3SwwKaDqXxHWnNQfDUfpLftaEQHCiswm5wwhKMh2qTc1Pf3Juu3LpGABRiq2PzF74KWXx58ajqb34JvzxjFMxjfq",
  "key22": "38iGHngnsaLzputDZbZYN1BxDug7eowzkKZVvrUZkhottu339HMh4FHyR5qpPweajrysC3ToCmKHgjq3NVn58rcJ",
  "key23": "497wv9tnXJvDfsNuJMVrfZGkfU9MUackspNCEvzAmcMCj85bcgkHdRow2tpxTo8H3P8QMP4Vwnz7sP9fP5CfLmts",
  "key24": "21ootW9poM33t1bc8dqYwS4kEziaikqSoGuhyJHiJzPQdJxcTjuuepycdQz6Uf6jtCoHcb1Av2hEWoF4rB419JoM",
  "key25": "4z2ycwgbPMLUAupy8fmNhtW97yv79QLkE8KwggCKZQ8QdQ4RnD54vpnmFgZ5nePwiF3xHPmzkkRkqoufRYKzHWGV",
  "key26": "3wZWVZCuqvsoeKwULwjS7SkJD8WpmU7CsZEkyssDxBLCEzCttimqSiJ9SzRuPx3r8a2w6vu5UhDTAJ1gCD3i7m6Q",
  "key27": "5dXJDHWCM2gwKsEYLrvYxjWQVSoEi731A1XJQJUvRCifJM83BQRA22KBWAjGnYip3KcUjxDspouB7Z2D5KT8TQm7",
  "key28": "3LNTKoYiTts6UjQBXkfARpXX2Vj4iGJ4QvbRA7fBZS9HAPyDk83FX9zucjzKLG27pWbym8JtdeNTUruPcvuqrYbk",
  "key29": "2BVVQGExAyEZT4Ps5EJq9J4bJFGjiznN2Rz5NVuFYJmAMSDpzYXXXtoZ4mAWQGebcyHqeEcyTMeTN5T8gTif3mxf",
  "key30": "AqTpRxKcoRTM37DkiE6F8PMN5rVQyNNSvtsihsRT1xtArZrq4Dwk9YS8x3RcuW5J21DUQnGnGN3h6WeJDbzX9Um",
  "key31": "2VwiuBE4LzMMWpZvWRkZ8pCPQH9HpHSdoYasyXUdKfaxBARnzBCc99awqC25HTyR6UVK88TPSZW6QMNHxHXGHX1U",
  "key32": "4HSzesWCny4ui3QZ7Gaep7KhjaxedgaTbHg4dsumVY8bGY3ssnogGQ2UoSwDVDoEaY8dXeqUNy96553DFZrr3cRc",
  "key33": "2ieuTGLyRYuhe5xwAjmnA3mmCMKGChZ6kVT6VyZAuRFc1RXxdVXwseJ1vkdoxw6tTgYk4a2cuTekpRADQaam3wBc",
  "key34": "4VWXVVcRm98KLZrdLEZhj85b3voSWHc5btk3ZTnLHsSZu8YytJNBMqPppTPiJHZ1iZHGfqMVvc6XUkxMapLSHARe",
  "key35": "2DbayNusP3CE1wPgrMC1NXg91PtyvFVsi3Kw7su2LdZTcokNfazsawYKtjFMoq1vL1UFWsj6cGkkzNTLmvYxMQyn",
  "key36": "5UsvmS5JNPa4VGNsfVcJViNdGydkRPKtsYWmNKZE3GE4Rat7cftzL2gsomTmwLzmUFBMYaUnsPM3zzEoPDtKeqoP",
  "key37": "3NdDKtYX1ngLTorhWTLokxKqUon6crUP7jmjbXgCSGrMRvdyEFBgBaRCsAzUjwfUB9pjQ4sF3JaegPMNGcr9Ej9y",
  "key38": "3dAgvqgLhDcZo7j6pQZjhSpmebjejuDwFUuSikfQpEgVb7XK98cksVNFkTjekD8jf7g8uxDPfszsfBSNzJH9MULg",
  "key39": "WiurYEUwcXFRrVtw6b9N3d9W9D5zM3L5tDeoqi7eRQpkuQAMGYicBFdRc9fqUkyQu6T5eGPzN1J7wUNz1a41JGN",
  "key40": "5DES9EspvWSPuz61ejtidVRdw4iZWHbybidLDwi1rxuQVnpUEaxKevUGz25hwaizAH8p82NxdAuFvAD7yZMXKRfy",
  "key41": "3V7oMeqALXJJ5pQGUSxvMMeupUvFTgQxHYFWpZHiw57vpRHYcizCx9C4bAVJR5zdNN5GygmVaJVTTkQntoiJtok",
  "key42": "3NQ9bo4gcAX57YotrXUkvS4PnCbg8BZU1zRGPDXT3KL4Az58a6HF7tuJejcqA4xEyVpAYdrZUTPpwfbKrBSTJfNW",
  "key43": "27QpfUZKrH4ogAWjFLtcm3AGdbvy5WBk6iM5jm8muHcMmwdYsMDoA9cJYdGdsL8rY92A1wGGnCfTx27fkdc2Ebo6",
  "key44": "5WGvApwhA9xHWH1LKDxNjoLAUUZiMre4SvAusSoggb93kYNThVUWdQ7oiuXddJceSUdVGG4rurQoXb3qTpoRG4ur",
  "key45": "4VhjRqPp9D5NhA2VFH7dgTpYRTLLkjMP6FYXbwY2tJ1NgoLBjG1ScmCky6XNiy3LWKB5kRQkNTHJRitJUh2Q4CYd"
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
