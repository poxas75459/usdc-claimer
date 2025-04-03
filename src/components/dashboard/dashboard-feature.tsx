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
    "3xNzNvfW7d5SMXVrYsbzQb2jghXrNmXUDibR9UtwvmcbUGt6oUwGWo1pxSJ2aHrwANJd1BNupHNnneokTsfpRD8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FkWSErUFMtnHmznjaZvAKZwWjv9h3weetVaqQZbNQgwhnW3rFd7TndDBuvdmXqwHrvtie2pKKQ9DANf9qTJuZ8s",
  "key1": "zZiCGKAKs2TzBaXu5suMM1BYVbrD7ZurLD223Y4VfubS8vufXzreG3JL9fp38Cax1wfZC3S7gE4YrSdMBEWRGyu",
  "key2": "56CVjUD4YuUGpcUTkXhDeP8vNTaz5YR4Exr2DDXmspQmgF2wEnXmPnnuxaFZyLcBU7S9GwRr4EXv9vqBc2UDd4NY",
  "key3": "2YWpaLTm99FGaHwBNyVxubUHj1eRKeVAuTxcmSMum21xttjJPNJVAwkFxccnGwUbBNrZB45nMvXPj7KiZvbVViv4",
  "key4": "4G5HknMje8tJ9zZfFJ84kobJQo6Yoc9p5NMPKmnaRCPFy6CMVKQUAEKA2vTutJRDfxA2jsbmgZFA8Aa3A7yxkPZ2",
  "key5": "2CQo6Guz2uh65o5RJ2bUJazXdMH19ji9SaaGQi66wSkCLdxJD2ByqSHd9cZfyTqU9FkvERmS5ATFGdCJ41EstxjV",
  "key6": "2keXfwqPwWSuCkfWiBChNJkoi4aJ9ZqrZhw41M6TuPWEHyLXfiLNTPjv62RkoDo4ca6bT8Nwo6XZe5y1gyvNezFC",
  "key7": "355QMoc4wFtddgTToAoVKDLcB8kJvJcaDDkRyqwzGi53bkU8N2KAGiS6KTnSrrB3ZUX8gsdH1EH6YG8iFu4f1CAT",
  "key8": "3ZE5obiSh2rCQ8vUH2NBcN2osoVBgxBw3Y5N8L2tkyv6DmiawfJNSSXEHMxgGmAQSx6qkGbkAKWwuJb6zpjAKGf1",
  "key9": "21VLMBEYB5oZ9hPtizp4z93TFdNpmXP13EGPwcnLBrNH4PY6U85ctsgejMRerj2fJ4WjCrDMJUa9u1yyeD9nSoHX",
  "key10": "66xHdz5pYhBEFf6tqmPNNki8XMPTTFsk83vU8u3ywk3iigS4QZbuRNoq2i2BaTuAvrZorWXtL2BrtQKwP2hpFypp",
  "key11": "yWygfAmvvuY4gx56a7cT4d4uaC4qvhNbXtP5FokLZdnRgUmMJ1wrJHhYbF9NuxnYB2YfBCv1akKjHJEVJPHRFiy",
  "key12": "D9CNRGuy3KdsMq2yZdPFM3rwUsE1e8pprMVhwCRAWyLZVbLeKrihHWj6k48tacAyUryKcbhJbGKUZsXCzizu7fx",
  "key13": "5Znw5fDUjKhHqYLNuPY4BGo4ezXwUGm28yUaDnedsTK716yJkMhzJC8qnUrTG5vj5h1QNGHbLFeGrQ69mkUw8HHg",
  "key14": "1c3VdUFpNA7BNFLBf9ykkE7xS5eh7MqfAJrgDSX81D8eEDDuKryvJLm9cTFvYT8FkT7GNs7bhB6w2dwvtgcpGxW",
  "key15": "ZCHhHBVJz3UzUniYd4xetaLxmxv8S1YmGHVD3nxvFYxbGL6UN2nDSaxZb2Jyo18VdgDAd3kAMTEeRSGoC2VvYFg",
  "key16": "4Uxj5V9S9vGxLBFKXZaT8d3fNgqnYQJP6BscAdU6pHBTbKX1R1r9bgL67ytHU3UjwTu2onspscp6ufik5WbgS4GM",
  "key17": "2CL363WamcGMK3LCSHpftSJ1G5MRahvz5UFkiMLVRcuhmxJzCE89aQkoV2S29vQPTnzKZLrDY1JyE9344sozPFGc",
  "key18": "2TCHVnMsyk1GR9tZUY1DRKJoE3xEwdDSAP5Xs8tBqt7BhSrrLT8HftTf7tSyep4w3LsvYKgBURgY9afkqEuYpkD9",
  "key19": "5VN6FpK1TDXvwP6a8p5dRZad1D1LjUYKxfFxWymKrxmfQzEv7X2C1sr5wetfxJLMnmXcC5tXXBLU2JZkeTJk26L",
  "key20": "3f4sFsB7hMhZ8yDBbsySrebRoMdwCQ3aqf62eYymgsNgokHxYWUGqNkKAGvVJF5sGeQHk2e8jD7qL9D9Hfp97ZT1",
  "key21": "2NuFJaCRnPKRaJggXSiZFYsH5ppNSw7Ed6Lm4iE4L72vxbqnrWpfxt15UE3VY9YsU8VHpWqG5NAZsqVmtE9Z7fub",
  "key22": "e4vXzmpRiStiyGqmyMkQMFdfkKXBU7urFi8Gw4FsfMc5WWUMsLdi7RV4tJhsJ5dU3xdeaxskBb9JCU1tikeMwNn",
  "key23": "2FSS4DCR3YcuwakWG9K8FLFiFWJW7TGcrnVA8ML9YGQ2M2iguRN3AAUC41u2qCJj7fnWtjHakDydA2D8eobBguoj",
  "key24": "5h6PwxWNUKHauY19dx41KY3EiBRMuq8F7nx6Y94JymPv2FrJWm1yxnguncDVow49WDWKwaKSfQ7udtVuJfdGp6xy",
  "key25": "3uJwvGpJNxqL71wM1e8TUYwLmx27oaTxxuqzQUWVNFVwD9tmLoTNGb24Y4vv3nBV2q5AKLw8GbP4eD3nopgFm7q6",
  "key26": "53pe25RrtcbCkGSr6hCPUJTuREBi1bnpdTt8rwsB5oqhuuLTmntimAdqfR627C9TVUBqmwfMnbSsWSU1UevkCWiL",
  "key27": "2oRN1RGgYJPurfTE5SQqVXtMP1NpyYNwGirvwa1CkK4FGgBG9kPKzjhQszWipKoyaND2B3wvz9nN8zoDxRpNVc1",
  "key28": "2Brgs8rSgK2a9ZjbnC1ASLMqqpjXgD22x5bg2y8je98gdh6qVN5eujL77RsKmPfU5n8ZzLtgoD88dN7cjBRAvFeU",
  "key29": "64HRi1MdeXgJeFG5RuiCzmnzzV6Qoyr43XJcVAUsamvA7DkzY3DuDg3z9btTEetjXuSaRHQnKFAGm5TMF5N4vU7U",
  "key30": "tdoDCSKzHxdCFqGPAQ2DhNSZx6EyexUPTwpYKAPw3Xgzhd6CBGoyt97vWRwS3V8XkPPmt5txka7ng7gPULCTsBV",
  "key31": "muwrXYeU1P4z5W34z1uVJioNk9Myb88S4rqPBVq9rugndZPq64mdrUGS2MGooqj7Z8mGYPBjxygLBUv8P4ZDa1W",
  "key32": "45GYSS1saXyxcXFgnRaXFgNWP1UwALmxnGNmaKhvxyHQjSTtw2NMNVvNiY8pC7u3eimK2Q6iFU1B2FKFeocjQz8a",
  "key33": "4GfLGa62uN8NytWDqqMW6E5oEUEcYiTKguHaaLrCnJsSh6YtEcikNXkNNi8VNTS7sG8FBXweF1Xa9cZUzstqgiBS",
  "key34": "2YYDXsThapEB7qodMfm5V49vLcwp1VEtfb7avmt6zRpgtY2AEt7q9YAmk9t4SAWPZTp3q2s5F8Yzp595Cjj5GrP7",
  "key35": "uNFqw6uK4swT69QsbK9fXD9WGg3SLXgDrR6PBFVKicAdkTMiCAqNmifjjfN6zaR5fgBrDM6WxUH4FMucF4GLeeK",
  "key36": "2eWBq6ajKWiKggphg9aNtXAcUhTJRSeopRaxeZkECA6Ett8VooHXFCDSgnJ1byUHKLxHAXeBfgqupKM5yRwSxuZZ",
  "key37": "4mDaNjuHF4QXtTPHbiA8VU7DDPuF4NR4BgzmCz8fJw8bZFz2pFNZjyRjBrzuUne8yRFnXDq1s9jYZ8dA65cqKWBV",
  "key38": "YcLmBDoc364evnLT39eLWZ32GfNbhHAiqtch15erJZa94NVzoXz2LTjhQzEcVBAdXeFkpVRacEKT7gunupWFTf7",
  "key39": "5zHjAqg74AzuRqy5SJEhRAXxAUQFDSJXQGBxyuvRCobLkBWMeFqmEhtfw4WebUeEfsVUkTwiY33sRyK1Ud2uNXnV",
  "key40": "5Lj1VtgkbaqKgwr2KXmJqwSBBSHDdPUjHqT9wkxGLtYcLpwmgvfCvBMfjWP5srDoNnhHfjxxTQ1Tx8qG8VWvxKrX",
  "key41": "ZGsUVZ6vuHrQ7tFWTDSdvhXsBpoGVgZ5LaK3fvLbHyMvYXtQhFXEfW38jeeemA9P58hgCFGpdVS5UiB6BdvvA8T",
  "key42": "428V9KYRYbD6Kguv2FF1KMMjKxZ4jZdNMiEYzp9nK6vPMH2W4AcC3SZ7YGUziUnyfuxCNznysKQ7uksdSj6UHy4G",
  "key43": "2gLRejVnUTTzmk6bQ8Kx7dJTiGwScmMc9DK2fkkrbHnZghX5WR5VgMGroZVJUhqMqwn5XQJRovhgeNb6A1fZKuFN",
  "key44": "ESXJ1PTabL2Ei9WbAXuqJMuFC5o6ST53g7KCkUYs59HQsQcQQViuHVBBKnFs6pRvu62kYeeRykmR7b1zEgPFv7o",
  "key45": "irbwS8oDBwrKz5inuTt6zTaeBJe87EEdg5uzpTYokTkFNgSkveGmXpnPafAmFyPCPfJh7UWoZwn8dgspSrrviR6",
  "key46": "5MZNhumnK85khurZmcP5PhhUTTRFtqVTRkCs6UTgUUFa9XEdKVasB8zzELDZeX8xfnpkshCRmAjA8PvodZnqkHMf"
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
