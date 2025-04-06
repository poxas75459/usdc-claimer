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
    "j8QLK8Aihp1hkM6ZoVUd1ShpPtK1vGLnVL69bCHFZDD5JhLmJo2Ks9eWfPdeAmD6XQ4hS7EFmN1HeHQMhfS2tfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AogkUA14bj7Rdu5hd8kXefxEFwBJ1iK9BoxXfEcjgeUh4SCeNLeLi8d3gAq2DrrEK3qr1g17W5LwKcFATyZknVM",
  "key1": "5P2MPMQcuuz9ChWam9K2bfq5fkYi1teEycMEVpKdK6Qzz6xmYUHVi7QaqBBfwgptZ9xeXQ4Eebo7AP2VzDaNVx8c",
  "key2": "fPdqRXf7JwRt4Jjof5iSeqNkKbJsvtRcgzedKUJJKd8v8maeLq1pQhDJpzYwEhz66oMx8MyU9XsqUvTVSBA5wz1",
  "key3": "5ZPHSkumNEUkV7rtbmubv6mBFwMv8YnnNU93gtYzakEjaLfEfQFEKbvzqjZnfe4HqHVwXMcBh3V5GdoGaMBFck2k",
  "key4": "4r6PiD1xrN6Vm3ekrY6dHTHZ3U7cUa5dPktM3HJuap1eAJnfRvF6PiBi5ioy63Jt2QNwmELuDkPHaJBK8Db38qAw",
  "key5": "3uYM6d9kVGRcKQWMMmAhJYEFj7UmUQWB18DbabwidwQx63xXcfjPBjzv5AFDxmpBkHa8DSoiuUWdK8RpXvxcUWdT",
  "key6": "41amTm7m65zghp79GhUrrYbFE8GDXRPMAFCFQuVW8BeCmwkSCNiULWPep2xFPj3kA1veUV4Fa5YMZuUw5EHAok9U",
  "key7": "4Xt6s6o9zo78md9qWZPiuirDgPiz55WoRAwGZoYp8DTxtL9Ja7vyYGezuJ842twQEFNXstjKVJCFPX5RWVFfvDpj",
  "key8": "2cw8DwyQVGBL64c4TibwgmNHTxhiufV4ZosuD2eu4zQEDyNq335TFsuSuFg6PvAoARz9L8cejUeK6J3WT9412dt8",
  "key9": "5D2cQBN7gJTaDStqzmNFe1DRWaEpivnepJENBtMujy2fsRR75JD2hT9F6HaqytfNszQ1rXYdenr2cRk2Lao3k3gF",
  "key10": "21LKz6zFm8XfSYzKMPHggp52yN5gwUbztWngefxFnSgg9ErSdgUfjjQ1FQdfqmj9Bp7TGbD9H8VPRix4BSRdrxSE",
  "key11": "52SJxwPAK7HXrG9ze1gwQX9eHLGCoJzb4sM47waht3MCzFrW2QMxHYumUsSSQcfMxgEQAQiWtDoW9t1dXJ34BDYs",
  "key12": "5L6MYJcuyK2Te3tvWp2iKjgpXzAyacx5kJ4iEZajvtpuz17zvsw2bF2w1xNzWBPAZovgcvZY4SS65XbaGdT4qTgb",
  "key13": "2CM6RgFzvXy6q7Gu3kPsCnTpv56H5WNhp1fFnKoeVzeAzBgBonRxRq1gzB1rrnCnzPrfNT5B14DfjUo7yqoB4Mfv",
  "key14": "yH4MDnB9ViFp2jZ5efLFaqLWALvyMGrmFogi929Fa2yZ958ksxMw6zwiCcPfo1GndSZBicS3UdnDyYgaM9NNr9v",
  "key15": "kwFxpUXwgd5z7pzSVUsm3pN4U7QeyUynysdNRBMPbLbnPed6xT44Tv4YUSCauE5dYCsZn5qFKoCvnwiwczwNtLj",
  "key16": "4Ammm8q3V3NBxeqiiaL98RV7sGXri6Xegy7duLqnn7BqvGXAbGM2MP2dPrriaePPfijC3Yqr7RVgviSJygEwuSr8",
  "key17": "5z1r3WM38qyEvMpGSYminMbNFZ6KXHnredA4tjwF7akXMttKpVVUX6Kfz4zsqF29u8WdrUZYnPxBx73gJ5BaJSQN",
  "key18": "5DUKsALeBAoJocgJguGmEySoU1gQ7brm5gLBjX9Zhh4SewCPHbNLK9e5ePTz4RUh6DNh2WDE8K2VGjkTXHT4hwqY",
  "key19": "4qB7RUY2wMm7KiBV72gbehuojPE782mArWeUZjhzWu2DDZJttw9kGczSczyvMUTY2maC9TXZjc7uociLFwKPNVd6",
  "key20": "3xR5Cn1cDspisuRWZX2uKNomBaXuX6o3QAVBeKQ5rWvRd5w2jDgtT5fNUe1PYsG1a8VxHi7HCJ3vtXM2WpJdKieg",
  "key21": "3A4L3uuWEconpm4pSEh9bTzmYuLQc6EGRrvA2kJgkZzo5J129PCi8BPZPbUEALSjFGYwQmgN8twqXEQ99DvHqYcZ",
  "key22": "5WjKtyCeS96B6AiQtrRWKMzLswNQQSRkuj4U9mJRTs69sZ1GBogATr18jwH7XMJGwMdKXhSL8p5n9iQBKPscFYjg",
  "key23": "25ZBFoeK1Znh2Vs9FX1yiywwiHGmvtnhjswvz1htEU99bdZodY9CYdL3jP6TJZ324Bi8PJR4gcZfUN6PecrHzdDL",
  "key24": "2wKDfvjKiz8BsTs8Q75i6MUft7PizjAi7PGUVoaMzva7nzUHmSt1XoWZZS6xLhjUmdJ7XgEYqqgUKgMWCeq9WLRt",
  "key25": "43etqXx2AkYUiqAy7BbPdXNCd4fMwFt5vLofPBHWuuMkfcnE1GUz2fJLjunruFaTtBJ2kXJas2UrtGmoBmR3u7ai",
  "key26": "5sQf1f3PvjfBoSddPcpERAkXybu3aN55zgoKdPifSkMneifRosP7wcad5H1EjHuytUGk818RaJwtkUTn4hCbDBht",
  "key27": "4jQRPUEnSCxX88cKGXigXokeyrUNdYBoy8ty85SMFWMxqUBijaeX6yTvJ1Sq6GGRVFFhxmS1RprsHGCbmrLYHDNB",
  "key28": "71ScKJj8w7i5JqEAr5ZXQKAvvjfFGVNqbsSWcgosixXRHQMpczpjARrDH339uutf9aZ5ee6xCridiYfaAYLNDDj",
  "key29": "5gbzAyqPbSzsRHfDiizhCpkm4wLMNNLjWbeJbjLh64pHeTyCxC81jFjaoFdpfeaDzS6PPTAb5Laphen2ERdwQzB5",
  "key30": "4fGqU3EGsamxWBzNQ9nZKxXyHhXJMFkMoQLeZgNZYCJgsychm7HVcgGsfkw3Mvs6u2yMvcehz9gfyuobtzc4r7Yo",
  "key31": "4pGNhU84s8342X73UP6GTA24hTg1xd7YaBurjP8otbQERrSqzipy1omUHkxs6iAunFuEzT8k99NQhLA6CCEhwHDx",
  "key32": "3Sf71VWEpkMnoXVKavL1T72f9RwvZfLKCdu8JDDNDt8q9AWZtnZT14gvCpZbJZgSgR5UjRRfAdhVLPBEKLpPCbtD",
  "key33": "4DfFY9p4TwEtcQ7VPmvVsDppd2EgJNoFRHW6pyqezqJem8pVDeUzQmre651ede61QeyW7umW557rbDse9q9XQQeA",
  "key34": "5tDALAnLBMUYkycL8S1FFEMXmhZCLbjvD6ZgZamcyPsNNqBiGSVV133KovJ4RuZnDJdHZB6eAvNA9BvsYvBPgaqo",
  "key35": "FqDKQLBEWvjg7wMi8R47ZYy35EphVvm2kkvCHdN9zBvgNrKBwkT7tXaY8BZh47WZ3zXBF9v4DPwvBNyLPVe5mCS",
  "key36": "58GLCeMueJhVADBTT1nGapMRSxaxo1nrbCS6hKmRxrHUhbvuw1JSE25ry6Mqn4rLTBBmeeKWyHgytX978PUkUUWs",
  "key37": "3JG6sL5z685KqAaGj7ZWpo8R3aef43VdMM2sJtwP12RjBV77zg5GaKVdcYuh9BfDUNccSfWtaTcdV9Ng1N44GAKp",
  "key38": "2cNQb3t92B8v6LeUVhsm4UMy7m2WCp5y4Dcjs7RxtR8gdFSnN4toQg7Wc1XdrXGDxPbrQRvpGDqqzL5WBGsg3fXh",
  "key39": "2NuavRGKjLWWzZPeyGjqZDouqf4RLmC5SBsEj3vC1PUEBMaXB87Pnbi6ziVgCsTEAUkJFHKnXdNrVMfK98iBtWSb",
  "key40": "4mMX16g1vKXQx1Uk7BBrhwQuzgWEKLnZtJnFB1bNPbPjzvX9Scgt8SScgoSUe15i2LSmeR5H7r2U14MJMHZX964W",
  "key41": "3DqxEhcjGbmXeMATSSU5ASEdyCWjb1xQQgyxtaqUjDB6U79J91zj6uhTtr7yPHRpBvuG6H7BKQAMmaqTFpDxJntk",
  "key42": "DK4zZo7zkx5CWRBjqNGgpPE9mciiMBErBdMeTeeNz9JcxTwFAPCe5gJbMJExeec7ePd5X3cLanMcYyv8xF4oyX7",
  "key43": "5ZmfNoLdpJQqS3sK98pV5zZnrfGqKdLsKoHvNKY2TzFZToYGumY4J6WSkW3cfcQfby447Xf2x8NqwD3fX6wG8NnF",
  "key44": "3trtgSd5HX9ngHY22DL9Vi95MUpKVVxBA8T8UDMPbz9HVF8LjkVdc4QtwTLnQxDid6pjS4YMy8b8ryc6iGNky1rQ"
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
