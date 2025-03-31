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
    "49cBVpgQp42Qxf4bnw4aap4T7inYAVH8jzmRbDUrC13pbEEdysjcCk5YpGoZF9LRGZwSYDwxuio56u41iozppMrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qtzFDu89Ycna6cMoPjGvWHv46CLaGVbVhSzTWSYKbK4MPPWcFdfru4FXWEfuq75AHr1Dnw89nvwH7rFwQriYTDc",
  "key1": "5zyXnfHeCa794mc95DXmkFqAUcbd4CtywmZhM1jydRvU9rSmU7tT2KD1j91PGMaqKzsbFzuzoEo2jbxVTArGBUFG",
  "key2": "4cjiL2JVioW92L1YF4m3METnyK16gy6FJNZFE5B7niLgYEE99BqSPvJFoYnnX7WwP5GsuoakFw1W5MaRwfLHfzzC",
  "key3": "43bHVZRHrqzkAk3uH2uX9L6xPZi9kZAQXDCdNyB58se4wvuGLhu58EoLAo3d7X8KMcPjR7cjNA99mf72boD91seD",
  "key4": "26MHDZSsVSKmsfxV7Wv2YUaXqJ7jP6fCxUAhHY9e5gJYhButZER7mFDU1kcA3YJjV7qFTmZmNPU2LWZVbaVojoaH",
  "key5": "5AgRYGiHcbiS2EssKg2M77ade4EPMkYV1eiCxtjtpSFZ9QTGbxecRCvmDKc3fSWnbsys7AuJHQqEAcDrNhK1ESpV",
  "key6": "4J7hixM97a9kMch7o8qm2A5bEJE8inNNfYL5XXjdQ6gdiHgTFhNw872MSFmQuVSSoLPTrmjt9cm2LJi9JkS2r4EA",
  "key7": "3Lj56R4uWe7E4RNrY98BUTDhC35FQoHs4piCtygWFu3hMKs37mB3nc3kxBiPYRkFWPMNWBG2L8YjaDNygqX4wtuY",
  "key8": "Xz8DbKNHpaTt8HHh2HRe6EPdEXGdg1ejCbCCziGec2UY15PGhpgu4uGnq52Y9xZ3u15kkSiGogo63Q2J6dzKHg3",
  "key9": "2uQk1CBnSbq1NH55nHg87m1JJHE7oX4ghZzGKSGD21zCqLvZw61o1s3gW13PL2fhWHmYJfYaQg19TK9gYSywQwpa",
  "key10": "24HetLrBgEybLHYLkjpdwssvJuARZPUrTCJjRUW9U89eGrcnpxnx8K1t2PFvH3GPAsSzHKYbU9o3e2sW4duxrMMo",
  "key11": "2Wfw7NtmQWojk6toppkTkyJGEcTFF8Pr7QpTxEX9gWezf1eennXBzL6DSMj5hScnn6zpXN9j7tABt37Q9qw1LGhp",
  "key12": "2jkKerPQ6Sjxwa8Qo7vtWQXUyN87Z9Bgm6nY2zsSXHYFAdcCU5ScEMwiJ3HC8bQXYFwcTWbs1BLNb6pfqRbVhVBw",
  "key13": "4iJBv4foQAiCa1YhCGjxbm64Z9zCD9itPMppntAcAYqrMVVRFFSLA3ZTYa528YBRS6hV68PJGdwctJ5uxkwXX6AL",
  "key14": "66ER8arAiNjwGscTA81TVUxtTRxg8VMVkXy1vzmft3JVtnJvkHt8p9vkufHLcgigRB1xjn36raudxBkZtAP7Lzd9",
  "key15": "2YwXowdx6jiUuG1UHH7oHWmwq5uotEbvWPLJkR5rPjnKzuqckCa6AN4h7PTsPfvEhbgwQU7jSZFZbMgKMN7QQDxV",
  "key16": "456aGhsmf3Q2NnMbu6jp1SR1zMtfCsBfhxpRCn7zgj3KVcrHR7KuhLkVjdvvkLHYP33YvgnyzejkBxdWWoNZBzRm",
  "key17": "3FCvvdHgwLQ9zKp7e1wGdWbd8cWgiBUDRGXjz6Hd59JXyTfH4eaUMnoWR7anCQ8veW1vUL94z1oBkncgoh1m9Vqs",
  "key18": "4tqw5CmAqhHHJb5m4sRuebkzs1piW5VCCX6KVPc51SJjY6hGUbZ4NqeQbihw5XMoXg2EcNTYB6383WemQqDZsUyd",
  "key19": "5kySNWahVpuzyeAssry8DXr6rT1ngEfr5red6pypBW8Gg5pnbyGagT6S6kyqkHEc6BJejjA8dhwYezHLohdPeNQi",
  "key20": "4PsMbzbkFPMVEYN1TcVS4Bs6XPxf7eirH5LW8pWEL8gWuSVSvb3tmVrntw9jGvNLFWofTM1p7dPquDN9czAuXVaZ",
  "key21": "5NCUUd8B7uEMLuUXgE4K9HQYKZycYbxkmb42UHhDS3KUP9GkXQBz8U2LKT2GNXo19YUgsm7StMPL6VJ7KNb3mf2z",
  "key22": "5NgkhYZVrrWweoXw4NDCnK2BZAvFSv4rBvqehXiNyy3PzC5x3SSr9NHXfexbbj32ZkwBuvfdD6ZGpc4JzyzqE8q3",
  "key23": "4kSN9rNWjMthwHN8Ff1oPUv6Sq8G323rJFXHeowELNBjKkmBU7vN6jLeiv7NBCzKR7qsdQZx9qCRcwTBnv5E79Hp",
  "key24": "5gUVkAREJemENxtjZVkCMg3rbr4BFsjaimTwEWyzb27r4KrzV3Cbr3Mxyu6E8RevVU3bRBNUZVshymT5RACZ9R6H",
  "key25": "2VbEiQ9LaeDz9mBhyiQacM8drc2zHxLjbDatexxBHcj4czgY9su4euBWdZ7B6Bz4QSWKQF7vLPb71G3KrirGREib",
  "key26": "63rX57PXcppSDGB2SQb3gFS3JYriuFEveNTQVj3CghPMAKmt87yRrw1y4ptvJqcF4MGfzh33zzhbkRQ9j3TZ4pSB",
  "key27": "2vwtZPkiQoCWRAh2fXhAu6UMLn6FoS5LALdA3YdtrFYmazcbKb6Z8j5cvuNzrBWvNBi5XqvZit7vj8KWed4R9xac",
  "key28": "52cJpHLjACyr2ZLqYPBoBUbYq53FxPDGtpBs87pAv5RPMqqc2cgBWDchJpmSoYq7cVixDPCh86npZcPhtnuRAkJc",
  "key29": "2o1cc2AFbVskQbhY1sZgBjpkJYhJ4GJ83nD7kmXpDns17r1ywJNkMz8j36Un8ndgmshgRDtwYXZZXtSsD8UpeFVu",
  "key30": "2WRqvmegp5dU9EAM6CniELBac5TkGn2qP9wv3JLyArhKcRtVFAksCJhd542ViJeKVyRu7jVou2fNV9ehQqezq1kn",
  "key31": "2aZtA3ymbuHU59Lj4oFUkgbHwXv7B9tMg3g1uhuU8V1NeqxGSdLFdNNvi4GGc2VC3ByhDohvPC4zDDQzoBsTYgg1",
  "key32": "4BDw9dEqv6tBZw6wrkK2WsDnMPrkhs1JDo7HHff7Kdgmc2oVFngwuUyGt9jE4Hk49woXzfeqfoKAuce8fR4oAk3D",
  "key33": "3YqNkJykJ4roSRefj2A7WkT2gy2yPGt5s6T3F1c11Uh6mJYbtp8LBYXaLxLHLR9XaujrL1EYpoABnPGJzAcQxE6C",
  "key34": "4BFwJkM1gzJU8aQaZSbWEW9QH1g353EUGubQUUe3tJBKuG6H4n6YeGz3KkppLEwc697ezYVWAWVWjTSVfjokLR8D",
  "key35": "LwMaPZbskfptT1xfchmqiRtKRTJDKw61vW5XsLxnef5FAzVZzpEMJzWN6fbxWVp6ERxr6xfBvtKnWqapKi8gSA3",
  "key36": "5iC3zMx2qAeuiT8bkD9bd6B7oHiZUjhWE8d7wnnDFa7hXJa4rVyuVqAQ7peBgABAVCYs7wkcMcuG1aMRSkhsotE4",
  "key37": "3a5xNaki9y5TQdLUywXuQsUrhFomtoEAfXGDebH2w9ggdnEED6pf69UA83t3ULNd7HUUy3x71EkuzdNBNV8y1kBr",
  "key38": "cfuuhQ4VhacaqfqEg7nLiiXVkgcQdBic3CKJQNdDv5pZ3Dyk67c9jN5ZzpgGqX6H2ruQ6YpUSvq7T8MYqnVZj6n",
  "key39": "2Eyawb19RRAcMz2z5P4CXay4EEwXvXQZ3MXGER5mizNNkrA5iWfhYHXwc6f5txCcTp2p4ifSG9HXGZvQY1HAKkNb",
  "key40": "2dWsqjKYyHP8YbQdkZir9yo16Ri9U9eWBv2xgK2rCJ65MvmUWnCvLt8a9GvQ1RadSCga1QqZ3Ph2VQgPt3EykRfN",
  "key41": "wejftAakqnv1rgMC6CGQaWHSr67b2mMqcXnEBjf1WiEK1kMMmpzWebAXDqUWQhx7hF5ZhoNiB8fpTLZ9Gyphhw2",
  "key42": "22g44pf6MX8FeVqTRScpaYpDBs3stQA5dqAg9T6eRhThuWw24mEau3kP64DSCAQDWLwduw27r21APThxoMB1uDPb",
  "key43": "3mezzeAYuVnujmiEXEZhgRuEXgwKV6nsszhkFPgSS81rviUdWAkzWXCSTWhkPQKoN8V69gHoYYAXoUeNVk59JQRG"
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
