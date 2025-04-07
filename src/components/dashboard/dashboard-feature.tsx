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
    "2i4YKFQeizUF5foFUtw1J7KCqM3y5mReQSAwkFWtwXxxZAdWnnJEv4eRWwf3anvoy8Kexui5SLLQHvnKBBcbkigE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oUeXpS8WYDNbeH8yW5NiD6mKnB55S27JvnhDdLa84gWzPXxDaPbygQXFNQjzrjwctyNKYdug9E79YhMaBfTkmqJ",
  "key1": "5rw27R8qUADQruGAAUmCDVzrRZHXzjXTU55XtTXUudtXCMTPEswUmeN7gXbBaWEy8Sr7v4FYrmzcUR1PLeSmvppd",
  "key2": "2qE31Dw3THKLWwp6pWhJV4PLi4J3BXHjVUmKmbqZzKVuHiin894kz6kDT1trT8kE6NQLKznonqE7spKqSDsdbuiD",
  "key3": "bD4WqkmZstnU5m1BE3BhefPX16cQ5UBp5h3PZfNdRhu8wLTYARL4YhxLUWwJ9hy7qtie6TWzRP7voWGGDSijJ78",
  "key4": "556gW6T7U6BJk4txxRu3Jcsts4XAurAVrCf6HRCGqtg2UuppCFJ2ePVKGjo1ZdkbyFgxiuNumuQ29qtWGSe6vEkc",
  "key5": "35uUPmnxRKVQqG3xftRqhHJvKk9HVJgxH6yLMrQmeCpPyzfSfxhqWzU7y5PTC9QtCM8jxxctUeCW6YdKE2tbFmTg",
  "key6": "2XY7wK5BrXuLt4Q8iCmNN4RT7ZW6zzZ9uWZcRNTreWb3vpjQGocApa4L2edwkJizukj4DCHnwiT8JpRd5dxxr4Aa",
  "key7": "Tt34SrUrj66WAc8ccek4DzcS6BjvMGe77RffT2qqZuUcKFPknAEPB67yi3wVNyDqbGcaKfTsdmnbmw1qxvoPbrB",
  "key8": "dHqHc1m2zKPHb9BFvcs9MYQ3mZt5KHh3kmJXHAbTPi3FYWmynzfPS3MDwT9dXtAazQGbkJsdvUfRAmnVmv4mb1w",
  "key9": "RKJL2DRK8ktHE7vrZeVSNaz93maCEHDvUMRJnRfvHLcBQXKXd44Vz3BYeGB1sbGs7ukohS7Sq8M8GLR2APXqJ3G",
  "key10": "kdD8SoFFwp1Y7HMRrcY6c1W31S7R6zPB6a3u4KjQ5ynBp9DGkySHcTohxYPAADfo95Rznqq9EEVgbDcU8z7iYas",
  "key11": "4RmHg5f3ocE5QJ8bHvmwtAtPNUyh7AEwCvgqW2jx3VrXFiaW5D11JnGUBnsRoVV5TwBTSbDBhJPRMNn8HhgrTzAU",
  "key12": "4CzZgcPH4HYLtVzuxyp7sx4ioyeVitHkLapn4R1UwULqEyM3Br2SxT586rRqYbJ5fq8Ss2TjDtnxZxwZQXe5dWC9",
  "key13": "2CnoBjmVRr4u6Tv8SNYDJ9mBxrnkGG3zVqtYbhpzbr2LiGz9qt21QvPgB9sx7aCHc9rA8k7fyT7ZANbAwnYsdvhX",
  "key14": "4Rwvw5j7Au4peE29Gar8yxngRsqmqU5pdnZXy9i3xhWtCPvJQUfFaxnxGbotW51Xkc3e3HfzomZsAcC67hxbemBi",
  "key15": "y4fbFNepVPsgnaa92nb4WkFx357civo9hqGDPRwF5ZfymiGrzKFyyRzk86qfhi8brqSzkD8vEXkYLPTrWEc5g1A",
  "key16": "39iiXeqvLejvnM2z3FptozNKEsGn1ovuYv2FXncX1zh2GTr5W7FSpmQfrKdWiqE9XRfh7UkPhP865okxfb4DpwXC",
  "key17": "626F2p4fXn7aiUJATQ5DXQbG1wFLivo8NPk7UTtVuURQtA78fN7qwuXDm19Jkcd54YaF5KMwJqsJ3SjBvT8HtdnN",
  "key18": "2ZLzsVJZNMe8ewYsSG5Q66VSTMCexRNKwZTBJfSpes2fLkWP6R94H3hjHcygPiudVDxRqtWwy5VmKisVVmFHfwUb",
  "key19": "4GiU3LnCYUzvpJhdnHbprXu2QDJa4W1nVZvqg8tNMqRuAdkuvq1QzwZtE5niLhKspouDU2eB9YhF7PZw7shP4zC5",
  "key20": "2yfRGLSmSRqPC83qpQUCwQp5zs8AWMJcGR7CGHkQNsRWu6NmKWMJ8qnWwBmvqrSfox1SRhoHdQUfKUqj5BmGKrHP",
  "key21": "sgrSdiYSHk1AKaeeYb4AaDqW4FvvERjH7D4S8rt9C6GgvGmcnxXy3ud6kyNB7qC1kw2JA273M6jE3nZ5zNtnK4a",
  "key22": "3phZfD54cnehMf7xEHJ3oLcrPkBZZkpUJGMtt4EvtYa2BF1QfrhKsr3iDX7XYvqUWDrFSSTTSbQDtCDczK4sXX3q",
  "key23": "3rHTHVQW547m57peKFmhoxjrSztxkmE7SUvMGAQLjTgWWCZ69fhrfs1naZB2onmoHh87NrZXmKZDTQBtWD2xSK1t",
  "key24": "2t3Sv8qxdVuMJYyGAQHeBxXfyxBeQTcohE5zxszh6Bm74fQEUdnLpY4U4oUoDuruogdnXoYv9AnAGjUEryhTXGN",
  "key25": "2CaEejuA3Xv5HEqJuraHybo4f2HLzikZPehV3Ldbknr9HcRz7xDfBFWofo1uLX4cwfLwiF2niMJ8B9EndLuNPyDq",
  "key26": "24hbkaaFtPFeuEpBpp7N5DBjinfmsbD1W3gpypC43GvNa8EkCeX2ByvJ1bwyfxH5t1hZbjXj3Pikk3nXGHhJ7e1h",
  "key27": "4HDxstpq7LTQjQZGoMZ4wTDQbbqba4U2z9XBPtLXPuEqQFQccsNWqSdik2Y4k2jaRhKzMb6KpmBLafxP6pFKsZ6f",
  "key28": "58gkxuaQ1vGtZWxpKb7P9PkyV1fLDVsSLzeWimVomEEt6TGiRjoedV7VMc3UcY2PiqKcYyvwukku1kSTKu5jvmdT",
  "key29": "niBb9zsuQpA6wmHgk31pY3rq72cm2nQ6LYtYUimWsAuv72e8HkWxgnkNyKtifoxEkht2WojU1y5yLCmhxeRuAAR",
  "key30": "3P6WiHVABMgZQeaUmmvGRVFLWhza7pjTizoKxFUgB8jZL7m4HF9LpuKoS59oA1jiPZ1o53kvKGwDGXtwzTntYbAN",
  "key31": "u8L95tQjyCZrj9FNtMUstqGVtQ1T7nLmz9QbG4evndiN5o7GkkZ6tu3xU8mKvRWN9bnoPB7L9mbhAPjCkRDPXEL",
  "key32": "4xNwCNsqM1whE8DSumyeemJNTHYe99f52iMseR4T5YeaJeTDcPwGBhkpZvsWqhb23CkcZGSmDXiQDEmFgLoBb19h",
  "key33": "5QPZ3ztxyZaMsdFsgVCxA2HszuXBeVfSFhK5SA4imhsLx8gjmKr7bG6aQXEgN8RwCnt7peBwdCmg27Z9MWnnJ4Q5",
  "key34": "2Fa4Gyrhwr4sX49ANvR6oMiKozgqwseXrt1B3KWQFqiRTYCQPzgCteWfzd1HWrGbg6BRcJwgYDjStJeKiHGYaRin",
  "key35": "2gVyeX5ja6BJxevC6EP9UhxCk95GimzBnUrsCZB2APP6fv7TnmJTGiUojbGg4einWamuBSn6r1NKiKfFvvvUWQvF",
  "key36": "5nQYeHK7GzbtKMZawVVoLG9XpDm6J3aUMQSzx4wwFpQNBPkwV8kHJtTWxeKDREkXy8TGRsiQDHqJd8t5eSeD3g7a",
  "key37": "5yfNcRMn2rgBK5UXfb4oUSucisGhjeGCENfiGEMXE8LQUszgXFQHNY2nM6cJ4ZqAB3stAMg5D7KuswEnBfJTQ68a",
  "key38": "qAk874mSxe8soo2nyfvibdMbyTYzCs7D9ZJXe2eCJ4iG6s8heJdTh4G7xUeedbxUCUZqMoNJznzoN2U5dpgVYCU",
  "key39": "5eYcRCVtQiFhx61eQHB8cYkUenfk45PLjR7bknKZu5fJbwtsAUMafsvDQgYNjC6tmL5cXhFiv6k7wMNbopdTHzDp",
  "key40": "uPuDqCS37RRZRPw7jdD6EAJ1fFFMX4zoQhxTLQPNWMzb6tMD7sqyaJd92kkoNcz1RkjiJmYxjFHcDJ1jW5s3Sbz",
  "key41": "5Ws7PUoKJYrUG6VkEUTYn1ev6uxuEYiYARUx7Y9f5MXUkuFFR1VXK4xzqfhHxi6XXfbLmDy1AdwpahT8grsziepK"
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
