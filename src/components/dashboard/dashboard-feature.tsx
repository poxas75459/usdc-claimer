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
    "9enSpq8VpvDeNKJzB1jc6p4zgoSLeaki9yFVopa2yGGtCTwmGRyQHnJx8SrvFYuuNEpChtHymKK6UnAHjPr3LxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7EX4m33UvZaTUNPHpVLCkUoQHJdACzuqihEogufBJhyXrcm1yCMbCNWWjzZL9aF3enZJBp6KhDGmdcGFMZncz1w",
  "key1": "di8hKY2nbEYJRmSht8iYxSixZKSz66pvhhf5bYqiBX53LqZss6a9CD6qLpK4cHnD3e8KZhw54VgmycH9ppeUiWo",
  "key2": "614JufBoPu2WK12kvGujX35Za9vpna3wEgDzinmFgKs894W1YqUCpNjgRHhi23orFjx4XnzuG5pkW5o3MUJHXAQk",
  "key3": "3pewFr6dAiFaNCDE9T3fQp9seG8KR7kXeYzQt1rghuVBtWdYzFa7aQ2dtcVGgGppKCgVP8bcpVWAWRadz5WEs3WD",
  "key4": "3Gdua4kM6ho3wU5qhbzR7N8tvfpYoKqWjb6TdJAHfvYef9MEE7MtMhYj6d837a5LnenTzyipsZp9JcHpomt5ssSC",
  "key5": "2nEQJesq53SLgvTKJuu7K1HUQG4CCRAPNnp8xDBBoYqYuyiXEMH3XfMvCNi1heP21K2hzcwpfyChJaLPqVBE2WAQ",
  "key6": "dXc1fhghzMga6kvAUH4KbwQM5qBhiFLYymXgR6zSwHQC4SWUaCMwTp9Mj4zTLmGpN3oAaR3z5WSexZ7CrMvXurF",
  "key7": "4wwKa1yoUHpEBD7znsy9G2AK1Eh1dmzBGZvSNZn79JGQ1mRWEP2p9jkT2dkSDdDudXnGvpGHKArmTpvgpbjp1SHa",
  "key8": "34YkXzZmVumLojjSzamZF44hnmZ26m8uTsKHDnhzKzgbbVsPMg6qjZ9ZuiUWduAPbo98twhQYz2xxbEmMqMvM87d",
  "key9": "2YUZCEWBQHNNeS1jZyki8P3opGHe8GbtZiLZzwt2qfYymhsNM8smomnxauABKa4xW33oZEw2qZKhKnux6WqRDrb2",
  "key10": "3zChD9UYa7cCARmVfRPqQQ9YCN3ZeLABcDUFQR8k92UsG7Gx4QrUptEyEdgRNeFbNpSVVS8TrZ9u3JU1Swsiu4Jc",
  "key11": "4mTCtga1XgMhYL6DQkxUFo5qdFeVAzZcdtNyqRnj3rDwRZn5Rq8EPL178AzEqDpJKARy8pw2SBt4n7krZMXaNFeF",
  "key12": "3kakJbdKX5xKd1NNH5HUpA9nTJUtND671FimbVpX9XDRWp3y95QEHFjjL5YSakiPXaEeUbgQC84L8MsWdx89jGD5",
  "key13": "4ZmRpoLEFHk4v7bqNdwq8h4cpzGp9c6X7yeSiUBJ4GTaqYTbXqiDhxAMxDTqB5vsh4qnjZ1jsd1cmKrdU76Cj2oi",
  "key14": "Phc9ReLMTsjubzWc9MQEzVWna2tVns4J2AxZfxboht2rWDbUKyYbQit7AK99QvHd6aH47pyT6ZykDooXiXmETv8",
  "key15": "2shGSTXVZ6ihYAs5Ta6jANniCaMzD36c4x6AhWZ9EUGXPciRNa98tbThkKwHSqAQrHt1p4E34w6JyAa6ComNNrzH",
  "key16": "4hurxHdpKynh8PvWGx9pjyiCdvjV3NF9CUobBYjX2vDJeYLZ3wEBVXuoxzhWrv66RAywr49FYdQhSvaG9xjS9CVx",
  "key17": "4LK4NBJzjHy5wNSWy55mTP9DDxTRoPLbXRDEUXNnGXrAp8dBetSgZSeT1tp5AyU5eRZBkkR68EndEH82SHp8w93X",
  "key18": "2qBVKXmbUG89WW8LWESDyMvvD9BhicgQwP3UmCgasXZsG2vG4naQTyR8K85Te58coyMA6qFoQXB72HEonTiNttZP",
  "key19": "b5RzyYtVE8eb2RpdZGthVK84Vfh7VZSJ57yqEtemwDHbv6NVb92DbKQLvzqnC6uAGEb53WKt9jZBNfzU4kKQ2dr",
  "key20": "5VRgRYs9NnTWBJFLWmHszvaddzHEF3XWkQmV1p2M6tfdWWaqRijyRdoRSeQcvUZtgVsqu6nYpwXjck6cERMiPPEd",
  "key21": "2jZ3tfpe24f5eCJKm7zqrGqWa3tTFQ2CeLpCtN3Xw4Gn7tc1rNQsoq8darNPM7dQM3Avo3oLi1tp4BWBgukimxaF",
  "key22": "5nSBjRMmvoe5jDNszfZB3T8ymK7AKGZLzRh27q1PdNume16KWoUL1uJNkDZeJDCRr46KE5tpHHxGx3oHdqKU4iQG",
  "key23": "3MZmpxB93x11rVL6R2VYs1mhWj6tDkgJ7yeasXCNnAhT9Yspeca4CbNaqFgJNJpyV1YWBPQDPAEro4JvcVfnkGTq",
  "key24": "BiPkun8qqAbmT3yXLs3VzACAJ4ujGTzSwZLv5DgJhKokMLDBRSqtKa9g9DWrs1JVFV8J1FCuy4ZBz3Usb1msLi1",
  "key25": "4Sp4kEFwrBgbx4uApUwWm44KAYjM5wyrHqQEBY2MRQVEtxwPCUH9fWHD4BLgSZydwFjAxshooDcb7JvQCyrmctV5",
  "key26": "5scULm9pTE4rDHHd1gDTdCp9XeMdTgVzHLjpEtHqFUTLvTDcxNEKJHQg9Steh3AE6wQzWbRvX7YaWESXyLGCSg5s",
  "key27": "2oZzXHyz2CzPY9Gf7B9xyJQ7PzZh8yc3VeCzZ7boPH6bnCVa1tYMJWuzACZBDWqDpaARBRVzqzaxPKwXmTV8ufDh",
  "key28": "3cgdGm7c3q3Wu31TyzbWVXUGX13rWxSmfCszjXvtxbXmYXEpKmczS4kufr3Ltiu4EECtnD1RNoGk1HuxAnu2Up1T",
  "key29": "64yLGPe4KUw7g9vK7k7SJdnALyq79zZhDqsRCznejpvMqBUAg5SBywmfuhZCmC2YoqtXG4yvpbY1TJmR64WUWXN3",
  "key30": "2MwTPC23hNKvJuB2Bpb9Jbm6yg75Q7BNDrBjKoJo4XMfzg3SRwjAr3gR9aD8cxfewS3kQMxGebsJKZdn2fbr6i5r",
  "key31": "4n9QeqxGNGSEMkRQjj87fgisQovtsyjMFMs1pWpYBCz99BMCJJbmpZ24KidgUVE5XnDEdjmwsgqUD9jkcyWwMCdF",
  "key32": "4wvNTggbArg6dM5qq7rZwGssW3cN6mymhp7q16xven2kBqaMMqtTyTqd5NGsCWfTub2PQU8ScHVWc66iQtepq8SW",
  "key33": "ocJxV4wvQk8LqwozJjnk664VtTwmGidCsYCQn9JJM2af98UyBs3UnzpShu9TRQ7bKsr8NCp5eLZ2qxJd3YRiQno",
  "key34": "5VDX5ijZetvsEw5rPcGjbwVmwxE3AJXqFHhcbLzU1TthsPaMxYWVwKL5y1BvT8c7C6QSvfQeke2Dqhmq4hNYniBT",
  "key35": "47MDdtc6JyXV21ZTQjkvHVVjycHY8JBscWeeeze9MGLv9Hd6kd25FGm6r32cuRe75HfEdeL1mc7fH1sgHGvTXYTc",
  "key36": "2vxmyczwf4xzfPGiEGkU8ttR3knjj5y3ZdLZKryfZcFbcXhwE2gPhEuX6v1pZczMciTEs1GWDTKz6B8BuCuMqFFm",
  "key37": "2q5bqzoSY5NbtqU5Ajq5fGyK5N1NZDLtk27mT48D373ZVMP3Uy9iDFL387441bGC3TLBenkVec7fQKPToBAhCNvY",
  "key38": "yF2v6cfo1N4gEu95Lwf7gCVsKwhDYNBwQvmtugP68z19uPezDkz33vPsMCQGj1WavWoNsbKDUjZ3gRCDxdCqxzb",
  "key39": "5xryyhta4bcc7siqnLLtVtS9wqjaEDQNoteFZadn4JJpf11SNi7RXEtPUGCU5KVxW1dr5yWFx1xjDCtPGP9tZm9D"
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
