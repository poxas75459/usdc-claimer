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
    "2Bo3s1Qa4qFEogkFV3LBzd9xsHYsMKgt1g5M1yVwMW6FyPHpP2juGcF4cqo3KZS6wWgTxBNH3Abv7wS2BjHjGZYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q7e6DRWyDeQw16igAPdptGy8kaEBHehZVz2UmJf5FfyEdwpZxxnygdbtJTtNsw2vu9qxx7CRsmfzRUpgbX8C53d",
  "key1": "5cy5k4fJjKE7G6uAWczfjMRVpWfqifkKGQXLEVd22P9YgThvDTxYPHs595v7suXWY5miNWWUDWWKnkdHEXb4TNsb",
  "key2": "cUbGaePKiQJ8hf3JqagGcxbU44vY3u6woERdHUuyiz2Yw79beMbDqG9SHmUB5w1geJGrUqhcqoYbTVXMVN61tgs",
  "key3": "3hsqUTfJG7HsZWx28E97RgjPybaVp4GWf7ASvpbHUsJ7gqwFs3Q85ZadtLKcSrVp7w8mViXbM94Cmxo9B3G6NTJq",
  "key4": "2uZXF8hppQKvBd9ohuN2RoWKaGb7goBgW5LxY75SFF6A2R3duxe9GeizAEF8M346gcijfFoQZkHiAKqJSwWJe56S",
  "key5": "61aELceKkeU6UiWt7ip7vvmcqqjksVFLjx6r1ACAUemP1FkwGuTGUfBSza7PtMpLVpTwMnQG6gux13h5XQ2QSxzu",
  "key6": "ybADn3PmDQHnPfpACzV31iJtCVabATDZ4SsQse5J4UHUZ8J9SRuq8eotpAYxcMPGgtfbLHBDFRH4kr7zr734Rkg",
  "key7": "i9mAYyUTAAgpurRovoEdUki4bCe8KDDFGta5fMgcyERJjiVFS7ob8Qo1DBVKS5w7o7PZFf9L9hbTz5WZ2jG2NQR",
  "key8": "5CCmq54j1iYcR1GFNUe69oirNWuaMQKB2ETPqy8WAaACK4q8tu97gCo3XtRnDsT6K6xPzerMYQgZPyCEFomKxXWK",
  "key9": "4qrBFr33rrD1FD6RF1DGN42BGwZbdRf7aFzrsW6UJMorCeQ56rMXLw6c6vQkDHo2ytCvBzWNVKrJ1xCY2RzNpyKX",
  "key10": "4Ry5S4YgtT8ew2ZTM6TbfxKqkoPDsn8BNbjHAjpXfQrCYbo2XC6Bm4sT4X11tV3uAewmuFUzeKU8nJMkHJyB2CAQ",
  "key11": "29uRRPFNm2GLV1t7M3ESU9v5qSW4FHCjE9iGn4HVxsM4cWspmFgyoF3phcvz86r4jWEZeynjVKXotvK9SANEtJfR",
  "key12": "2BgXf5dLKziptM6oy86cfuBTLY8o6KqFTTQW1MZL1z14dFVXsWG3zuNUeT7BHNyWyGG6XzfcUa6HcKFu9qo8Lx6",
  "key13": "2qwbroZmws2Vn6rHz984CxsUDbEdB5bS7H5Rha29qdd4QSr2rqCdeDqHRJtfvBp8sp6FoZC9wRBPEyYTSPkpC2AJ",
  "key14": "355yRgUHgMWnGwHAtWVacYSn8kyDsz4Zn5e6kYUaEUPc3Pd2nfhcdxcU4DPu8H7iwdndc8DByDHjQgF5qmdP84A1",
  "key15": "53MCMPyXRd1WGMZZw3SG7EGxZ87oVSQNqAdR2nGzKqXZyu1YaVa74E3c6Dm8cZ6abXENFDPonLz8Jnb7H2tiM4UX",
  "key16": "4d5vbN6sA29PEJycXed1sykPsQeyeVUb8QkJW82qdBA2ASxJryA8QtEWkfeK5LBHMdTpJsBoSSGNNyAU7KcUpqD",
  "key17": "U5mCHAhB2LZVqvTQijp4ZUgBQuAijfDd8ogZrTd6BGqEWkpnzRDRqiVnjGgPy6aWtLDYV7PvDF8fAxmLWvFM6Mb",
  "key18": "5ZGMBWHyxFwwFxy2zxxrd2nM7nNZDswT6xRSBDtgpKZQxKHNCzvepD2QJYfnMyZt6kiE6saZ8X7KUEwFbpt5rb5a",
  "key19": "3fqzAChpiVN7ppTXTbdHfqWdGN8hc6F14wDzq5wKZSYJLcPyuDWU4c7tPDDeSBA8ZU4dCtEGVuZnDXGF437QGrE4",
  "key20": "4BxZLXd83WYC31VBVJYP9Dh4T88Xy2oV8F2mW2wehtJxB1uMWT5B4f2kpjzzU7HwLPQJzt4A7TNdcsZk5MU6Vvcr",
  "key21": "9YBirGMMGEZQE79Hq8PgWgfvsLWE7XuhP9Pxq4j5QUM51aEEmmEoHzMJEtP1XgpWPHmRdyGLb6uGvx1M3o7AGEB",
  "key22": "657zNXWkdJhXh5wJyNBAYBPV4VtJiy7j7CRPpYr7juFWrcUxHY7MuJZMKqyuHpQHRmpDJofD7kqtbwYnfNvMa5Ky",
  "key23": "2fqz2T4c2xoq9rJuZrYPfAdLMiMsaXoBKJ6EzAWBN3MtoZdkBXMKj5w8krE7GkPKMhNPc1gfYtuojqFCfxxY4WY3",
  "key24": "5bgkqzhEAd7gq2pX4gCnhyZJjz84hiAA1fAo9NVSbThPo5gUGei7uUW4WzT7PvcGmNKgpgwi5XK66veiXfcQbBCw",
  "key25": "MwAbaXTukwhGBNmt6kFqia8darYNifNwGRkJrZGam16Rkw2V9JAsAX4WTqjthRj9fYrPe7AJ6fmmvW2EdhoaKkS",
  "key26": "3YP5288v6wTsJDWTkqUweaitoMY1cYPAzsGZxmrDna74QxmK5vADfcyghkRNKR5oKsitVX5SYum2v2WUyyKr5XbA",
  "key27": "2RjdMKejMePB9Gi3oFFHTaD2pVU6FBwRjoxrMJsbT6f2PqEC3eLDt49M77EnUVpBxYpFR8FEdVskDLJKQq11zK8n",
  "key28": "4j9XZsYEdzmmbjYqQATEnXsxgJyPBBF2mQ4tmrf3siNDwxC2tnSm6c1MJMPFnfziteUU7UNgpVpZrrQtByH84nRG",
  "key29": "5xEp5QyYjBSRiVVjrXH3dPt92Lcaw3fkX1VEAq8aT1L8sy42vFeDugn1CBNCoVwbNsY7uHLB8eXRhR6JLpmb87PB",
  "key30": "3ePtV2dqbCqquMrWUh9yb2FMheaPgRpEnyGU6RqZtGkH1tjH9zATwhcRZYAcGqSB9aWj43894zAi8QuMKDXNWCyJ",
  "key31": "4iGBd9yV4S6AshMjWYyVCoocQEx1Nfp2ZsVv3r9du4Rs4Fg1V5D9Q6f8THt3UvcFeejWHEan5dViYSv5McpwNhA1",
  "key32": "4T73cGfabhF9ihbEKsxUqyaw9Ce51563cgRXJqnFdt3tqjPYbHrA3JY7nhGAwZRjgjjiKmb7CwhLWJmfxLKFNKmb",
  "key33": "rCSD3xVWdD9x9ukAPaAgwgJ9EEAfjmGJcLgtmFuMxdz4PTZsu8MZ2NM6mpYEH75t732TPG587maR2k5db3rs7Hf",
  "key34": "4JSKYGa5XzHPb5LpxPXPN84Vc7ckkcgMR4nEJqWX7nsPHLJrtMbrSfM3mpPLfKSdrXQXFJadJCD5Sygz363b2ube",
  "key35": "5SWKoE7nJtCGsighvgE1dXnZ8QLuLnswRa3WcF6jcCeWHdLnY6smt9rT1axyiwBwb3mJiXHxVXVAna9FPiQk23Wo",
  "key36": "fiYsrsmPLyRDJxYuE4e8wxy3npmi4h1SefZgCsNshjv79KTxJPJZBmiTrXjBjpM5YVbEb86P97tHHxbCezW91kQ"
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
