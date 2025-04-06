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
    "2JyJ463TpVGBt9EW6eTmaChMAW78iW1BSQmNyKKUNDsa8T7iUziLE4Un8LQAfCFqKCNXwm1wzseYSyTe6Y19ZFTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51nFmFfhgYSakxLBHtn78cmtNvVbh8ccCvRcE2YrhtG8i98Z7TsKAyPMWjRQPCoZxZMkYRcLt446moNstAstZBtM",
  "key1": "3TgdgeFyuW81FaCmAGje3JPJrNWQZi5yQEifCti3VZrzDfU2P7o2jj5iNGCmxuJApgdqsQwJFup6wC28WsfK8TY2",
  "key2": "4kN8kQFBg6ykJKZ5RyT8xZPTTRY1cqvKufUhKwoVowgU5uK165yFtnV1E34zn7pYX1dZ74277n18gTTzEM996YgU",
  "key3": "4inD1GzQ9sg9gWm65s1n4oNZCW2tJTTGRvhcygGr4VR4Uzm5zPVFqvfC7TgT7aJaUuzoPdhhv7XVaqBCGAZxwcaW",
  "key4": "4QzbvvFZ3zRoxX6njmsqDRUKHbxKPr4DkN5rTDCkumGthmSXXJWQcaHJ3gHouFkRUB8AkqcNeJqdUkPsktyrnKwM",
  "key5": "2G74YxkRpp1CLpgLZARQq8cyh617iFhVRZq49ZHTWBn7jSX8JJhiPUmx1GxWbEu6Gbqp3Zo4qeGHwU1hvqHnAsrH",
  "key6": "5RAYmn6o3C3sn7XfPk2vLsttsfoGMQmw9cb1KzTJeuFTXzVawSasg36w8ELPs63T43eTKopUXBUEWJ3ZE6GMCYA",
  "key7": "YokrL8u5oK9cxkuWrd9GgX9wsHCGmzqJkrx4qUM7vwLBxWwqQC4LSAvDs4AH1o8zBPBFjXkUkP8eqyEhPEBWP3e",
  "key8": "2VVA4Dr6jYmiaSAkVpngWVmW4pf5X1N33cd4WaNJnHb7G6D6bhx2HHwfT42V7J2bADj14qnfFEkTKtra8yTQYgvP",
  "key9": "2GgdLsxziSvvWK5XYKBnhFZsVm8biFeQ5buWjew4R3FovYtgaPXy6UPm4jLaM9wDtuDPaVXYm5os9566bWhBwLav",
  "key10": "4gGZcm67zYuuFuQZd8j36TtBc6UpCPP21XgVnMQ2yF24x78xppCTE8YzubRQSHpx8mwFWffAMKdw3CQZatadtyEk",
  "key11": "5gSmneVVidPAk8DaVqiMWW28ke9Svna2Xi3o9gTLxRKdhWob5g3uVAAH15Ef3Yao1oTb1Gdmr42cAgT3mBU1Xkqw",
  "key12": "37qcJsAQZUyGwgZtur52GoRMg2pRm5PVxJgPC7SwAT5skidoVSnZ4u2YRy9F9mDVBpZVHhYNJ4eb7pP7d28uSYBx",
  "key13": "VbRVubgvKk3YKV5Mia763ZBnFg3HoCgqMPmUgKYF1v2KNR76ik3UvZdy2eLqRAuuLHrFoSqSKfzBVuGhLuuT3xo",
  "key14": "4taaP5pS22qcsv5sXR7pt5RoT2F6Jh12a62oUaKHkuBj5pbeuYFWmKzL1SBJ2UQXwrt17Ea5wTuGZd73hccTQmF3",
  "key15": "YvCCWWaUbobbPqG6CB5BNgWsX9eC9mYimgQkgc6VHuTgK4S6Hdjoj1bXbBFEhaXSSBotrRYxA2R2bUULWt9auBg",
  "key16": "3QrbFPsVewavkJ5K5SeNHbQgFCpWZEdnDZ3FBa9tw6zoWNTS1yWNf73Ysghujth2JM8J4ATwsciZwYhCq357kvmu",
  "key17": "2JY3fxMy4qTcouyyUwRLcyLboKP373MHfhm3ipoZFQ3jLpA7ECbne1asbevpHVBXwCU8pgcE8rNWVKJrha82GvcA",
  "key18": "5NkR71c29kWnz4MkaXnTzecGLsGnTvPpRnfNkqXjjVVJyu74y6hMmRXfUaNFE3Hr7bbZJPPpENZfDN1jZKWVe4Gb",
  "key19": "nq1ju7ZnzaaWJbQ45ifWykDdu1DQLQLfzDAiy7t6CVE4F5m2ikaFsWwAY9GRKazNn92432R8qBPbG4RPiJz52sZ",
  "key20": "3wbtGzVW17JdwyKFJKP5pBykWXDY81ww34KMNPQfmR47qhQa6h9grhwhoEe19GgEeVd2EnNb2FcLEdvBAe9yiB4S",
  "key21": "2DPrAWq18ZQtMcpGSWQaVakQS8uL9dck18CQqRLDbHKQENKCF9u8F5W5KbuS71hoCU5B52y8ptqTbn7AE3SWPfNE",
  "key22": "4ooQ5Q8jhUZjJrMBsRcLPZmQuM3ZX11naVQCxyCXtnCBg1jSbctmYd5wyHAEGdubyF5breU4wzENH5KcdTPAM3cC",
  "key23": "3AaZpNuGWcK2EY1JH8MzcMVSJ3GhKDjqupzxXaMGd4MBQnAhVqwB67m6RsRyMt6x7wGwCj7DAnKKPNrwPEqeAJkk",
  "key24": "3V96So9VLA6n3KcFPigbddBA426VgKifsUTHSzCqbNkssQamHsC5nTq8UPJrPNgWykvaEPPnRupkXNMENacA8RSA",
  "key25": "2sMkHaB242bYtVwHepMwkw7ZqnfS4GdVUa9n7Av3bmnvMpL9BAnGp7Bz3EDDsnLhW3nHU8xhWLCkicpVBvz6LHjn",
  "key26": "32pMqtFoFFLXHZtRmo44EjRg6jTtYUYo5CCwDeWUmdCfwVNbspLdRNRULFbLwtgwWqPQMgoXmbMJRF8pLdzqodYQ",
  "key27": "5T3jRe2KXkwwJZx5gghytt9s9k5YSvbGYfdEgGrwCfquNUQ3VtLXmHYaHV1sbn1wLSHejjo3QDz7DjMpr9kby67h",
  "key28": "4bKVprcy7thMd6Ge3AqvJwgZAwMzYPCgdE5zyJTevRPzKSqPv4PMXN6BhNYGh75bTkM86Yc1iyhihUpudr5rS8t9",
  "key29": "64y1AWKHBp7bSJkD9RnK9pBZs9Ut4kBuuWeFU51YAe18A8Wg8jJhArAVTbquAFojTuwxtrPGKCjTt4hivFS6Rvmg",
  "key30": "2UULG8LvLLyYihiFN11a2FrdzdtNMG5FgtivYy6CdwFJf9hZ28vvBD6VccRxfFFu1suU84hjWDWpq8XUDrirrfre",
  "key31": "2pK5PFDXrQqKwYQvJRtqZfL2BJzCNw6X5Rog8umtu9rZzkPB7dZQe4z6wW6wkWvRijK92LdkfxGLyDzLHvNnmGXs",
  "key32": "3zgwHq5VpBgK7XiXpa1LtP1DoVV95yka93ZABvenmrLTJuN3HbeL25hqGQV2p3ckwgZ42998EV1cvzWbQAn2ZN7Z",
  "key33": "qyYW6tuJNgjtMYtfRt5Nij8UZjhj1yH43qcUKFuPhFSYfPAJUYqvoSuiwNuX8ybXqj37z1ZH1CHii8S9zZqVzyr",
  "key34": "2ktn1vMSiPqfqCQceoF7Hp4SozUHAYqWUa3QZkQhvDnnRy16tX6xVfmtjjiBMXCdnvPHgMWpkkLd6uo4uC5AvCPX",
  "key35": "21GDjmH8pJZVpPeH7fpSwCMf2AMKwbfEUYTaSFpvdRhDp4s8BGQqAtCvnF7pq8qJpGAkcyKF6EXCHH8hef8pnqyZ",
  "key36": "57M1aaQyy6zgmiPF9SM2ingzyCUeNJaY8tpNdyRHwkd53hxfRnzYNcuuiEbMyvW7y6xxZM3A5MmGEFmkN4W2y4Hd",
  "key37": "5bwv8XwpGHSWk7XkCm1wrPhx2FHkFteRi2VukviR5WHYvpvfymJgFvXQa5Sm4CKptMWYfvi5VixETpgHCT24NmZY",
  "key38": "4hF6w9UxBZ3S5Cvi7EtFVx84Kj4T1RpMb5NRxX6j8hNSBM9B8bvg3VZYzDcU48iCzUNYop2LY71rgbzBHFiMC7wJ",
  "key39": "41js8zbT6QYudQYribZEVxJXQjzC9PVFz4rB1sEtWTNp9e4r8VqAiLU6gRQMNhZkTHaAmns9pM6SYKPuit96nprz",
  "key40": "54VpangrGoaEbMX9jNoh6SPdawcqhqDxoeKqdCCYwjQESKLegnVEodY4PywZ3GFpWdiZr7fwkjb3NwDQMXCjdPC",
  "key41": "48TXTZ2hct9jh6UtX6ZRNurS7uq1GvcTzG6AZHXVHAZgC4NojBxDz2GT9G5cxqS9tfJip9deAa9m6SqBhBJf6zyD",
  "key42": "2YpTU3wfrFTsRL3nLQYuJ4pcpGJHqoB95e35K38rnnycNbWvwzAXhfTybScfJr3GT3BJyL88e3im9YNF1obCiPs3"
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
