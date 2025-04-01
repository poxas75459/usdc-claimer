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
    "4GRTGFqZCe14hFscJDs7jXxLkmPKYLBaMzur4s2xSv9dASSQQGXC8LwJfEUeauYQFMf9CBFTP3rRu6pd3KLpE9Lr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YxYw7cfWdHmcdEpsFz1XKy43DqwKuVfU7Lj3R6k9pWmX6P9DXPY2r7HHes8iBzRq3Hv6mJdjvKXPDhEt7icxng9",
  "key1": "5w11v3HZvwCkhaYrQYj4mQ4zEvAkeaV3HRo3jKZkqSgz22EcHkiFENh62mTDNsTE5YJKEtErAeHh8oejfKNZxhpi",
  "key2": "N8eCiWaYD4qzUWXVqiGwVkBLRtqfZFwpC45zRFPqaNnMWHQLRvmkk5fZEE4yDVxQkERhXMumndewceEM49sA8LK",
  "key3": "J3Lx94zhx53n5vbXiRmS5vmLojLMZuLBBZehxCevWEvaYcGicmpVciUQ6vxrhAsyxh9HGi4XsKKuH5jV9fY5r4S",
  "key4": "eXtjZfd2G1g6qe4d79j11putoeEBxxMxh4hcbbZEMF4q6W7AqLpZig6tUm7fchzrjLf2FLy17vq3a11abDrqdTA",
  "key5": "3aufncrezYJ2zCM3JU2whUU4bxM7NnttnLNW2kCUXNv1adMymxbz4WoEeaA21NHquwfjju8w93r3PFNpYb9wNvpK",
  "key6": "3skG4KfZFHk1xWdu6GRo2a1eWkPc5Nw5N2KL1jQfLSDbXAsX5pmdqDdi6kLQiYtfWs4SHmbBfLTabDW2Jb3Lcd2c",
  "key7": "2EDFo7JamBkHC9MS4Wk5QYu9RfnjpFGpiaQXz3GvcnNxnks43z143AAWTTfkUpQAnPHia1EizubXR79TjgzhRfkf",
  "key8": "2SNgrajRbCjWsxgr3nmCEJ4suHe9b7njZ5NdKN8hfYJwr7TPEMor4zFuVkVVFBGLLUPaKMa6VZLGX17EsnNg1h5D",
  "key9": "2Fakgom6vqE4nMehRth66WLgJ8bhGJJavF4cnDr61nAryTS67ifTSiRJ5ak2eBaPNiDse3TPaZjxQWVqeMykUGJk",
  "key10": "5sY8sf5M7MWv6C7d11reyYmvBx8DbrUWxciRsaG5uNftMbmx4GWWnn6vL7DFpfY9EBmmQd4puvjPzd179HSS1VNU",
  "key11": "5cpPcg9kas2dbW2EeW3oFPaMopvQ6qD9R2uiNB4msuKjmdX48YuWGNMLxd4PHMf7FhWtaqQe7ByYbi9ppEJD6iHM",
  "key12": "4kSPX6WBKDgQRVjCDnVAwHpGqJQzfuu1BhHzzzqoFKzHxvSEEBodb7VNZnL7bUtWFpSSCacpB4CVTJSQAbp4NJhz",
  "key13": "5uQ4EcBv4Gy9QMVk76X8r3iKqgDvTvSNzQu4KptrPZmS3kByptBYyn3yusNGQwC2AWaWGS9s5tL6edMaGQLw6wRT",
  "key14": "661brZGLsJptSJRYNKzJGdeoQVHESi2zWqb8L8bn3CMSUj4XbF8rsJ8xevypxGPZEo2GM4DUWC7HFLRJ8r9G84V1",
  "key15": "3HKm7Uh1Eqb6824yXJ3qtHgwQnnaPVrHbdqHpuniWfd9RcmL7wTk32F2FdgrpbGMPGMwu5WLFAXsc4EXnoyYLs11",
  "key16": "3ADtpGj3Vsc96Z5iQpTTadMnkU4E7dkqDSVzTy84jTPB2odBdZ4Gafk6HCjw8ZaDT8p38LprWq6xMVvwPM5LPPGr",
  "key17": "3Jy3hLKcoc2fCKnfuUdho45UjFMs5KPaKdiWX25JXukFnWq73HkvSNGshD14UyGQfMMtqjFNoqRxY2WNioqSvjcK",
  "key18": "b3AyXgHnBQzgEE5wZDiKqtJTW1N1ECJRXXZQCKtLYKE9DPbuLWmjmjXhri31UKuguMUJuCqvA2GX4D35MEY9HTN",
  "key19": "3Yew5bqKn4nGEdXCVbYWEu4aSK1XZDDDsgWyjbmuFKgiPw4yKicpdJSQQrAA342cpJb6LUVZHRuxGQ8fbuXRQ9MT",
  "key20": "4iWWd9pL8poJnQbKirh85S9is23r6f9NiozLVuUd999yzLqL3FaUWk8wc4kt4wod3Yyh7TSbPtGmcL9qwzaxecBT",
  "key21": "3gG1DqrtEvjzZoHp5NQzUbW3V9594W9shAp6zAHMAxAoc6r2v8BQyL35tNij2kKJBYyYGqWCPvoYLzZ6m31vq7sZ",
  "key22": "5QghpgVrU7VWYzSzKqL1SoHpFrR337U1BZDqYAH64vxgYZt765cP85XX47t2NUCdCB6srD9aGvcg48zJLFJgU5yt",
  "key23": "4UvYEuZfXHbxzHVfCN7rfUZhde9qiuEMAEkqxVRrFXnDthrWCPaGqL9enEn6GPYE8QFucwn9n4NufFGjWggaXgmb",
  "key24": "4pXr77zC5Fux856d81dEh3LVzGtttgMuixiASbXsxtqmMnh4xfQ28amLLzEu3WvnDBKQ78tbpMNYKdC15rnJquJf",
  "key25": "5oTPQu3W4rzPxMy8Y3bdtmF2MNXcvFzs8tkbzyRZBR9AXQq1d7N3KnzrxgFBbBFH6SvLpSctvVZbAkyBgnAh7PRN",
  "key26": "3QjfVQfiy9C91u8tzKxigKuPq3JtgZZ9u8Jue8g2Zq3TsBacFGjs27oQBUXjho63YhL26GaFBq678L1dQrjjRHoh",
  "key27": "X5eEydjCNhmYD22cFxEN883z9ESijGfZbDmfU6uPg9SB37Gf1zVJ15ZnQgfB5UnmV1UKmgjrQgxbqHVArLfsDdZ",
  "key28": "2vpeAkegAmzgqZpjG1Po7UHo1j4YLVnKzzoyzSBVXE7KA7YHpkHVzUD1nyc7rKBhgedPaGd83hx8m9zNu8pdkSNm",
  "key29": "2MqkdGVL9QoUGZJEtsDXyHBsAxEuVtyEokSqdGq3biMvVkqQkB15tp9wSdTtwYNf7jZUTMs8hEdLv9yK51zPK5gh",
  "key30": "bB8or7xkEMoukSxs3zxU5EyMwGAzdeYeygdWM5m46Ck5P7rfBBerce8gjF377vCpmCFRjPYHNseXsBB6ZE7BRiH",
  "key31": "5QQLVvb2N8aXovsNxuDL91yXUNTJhnRGhBDz5YpTUfQqqFCJkThBHZUB5Q7oya3Z9YBxYoSpSi6ACo63q3nqKkFH",
  "key32": "AJQcEr9hy4Rmk2uvEUa6kqbS77vadmDSoWUnNyAqmghvxJ7C5MXntS7kc7rkJvQKENNibo6jhSjfykyx9NmFLs2",
  "key33": "4QfuzbDrvDkXr6pefkvLiLxDm8d84bSsBdLofvRKS7rPN4ewrkqkxM9MP1tvUKuiiJy5GTkM4W4nJF2aknP1t23z",
  "key34": "3q2CyWk5K86qNsxHrpQemhgRRpnCsjaagePecHfx9UEJj9LJ3cYadXBq89t6AJ8ikPU695b9gSgd6RScupGbCmX3",
  "key35": "aALf9gMwsZVw7oqooGwLPo9r83xejUfkzAKESan5nubhRJphuxzkq4BbQt8rbxTNJiQZdmJ1HeKup6WEtCczrBo",
  "key36": "4bBTy9jT6nU8MawPdmaYo22xs8Pd2DkJV9VKv7pXouGkhh3ybXCWK34NVe8GhR9PvcGJwM5nsWpEv5uZQLPgujK4",
  "key37": "5jiFQEpHyNDZdkqfQSVmRaWRWPraReogAAeN61hHbS9y6ZGXgU2S5bRgGEY2kKYmdYkKevrgY4w6HFKWca5UcJbA",
  "key38": "21y2cXwmYtduXaLfwa4UkJQBWuSHtfM7nz1im9Cxh5KEu1ezeMzPGB7ecDvrwXKz5SNockXzVB4D4fhdaQJ5gUy9",
  "key39": "3iqoLSepfex27iRhyMrZqXBsiqiVEPaJfC8wkmdviWXodss6gcwttsFCCSPhSp2MMANhF3x2R7tfpSQ4gQXdJCxL",
  "key40": "4A9qXnP59Jd13mr1Xw5oPfWwYy5jrMBxWLRBabRsM1LLZbbtNQdWKpwnJh4QgCQiajwMxmgEfWT3kT2VQR593CFE",
  "key41": "fqh9jxNydrvdANjZRb6vtURWiDg7CYrMTVrd7pBeydYs8EecEZqj1PcsE5GxahW62AaYCsCDhSsqqYDKidynruC",
  "key42": "du1DjRgaAA6QPApswXTVY1F4PREPpfW3u9rnUN7r28AyF8HgEYK4NuM68xqepcBicitaxbe9QaTd4onJhe3T1Zu",
  "key43": "2rM1jjhVZgTJtp1Sg5rSFuLfY76L4J2LBdeMgY3p4RvjuiQnQyJcxDzKU9cXAzzEQsArqBFWVHUbBiWCZ2NkqfpX",
  "key44": "5bAvjEaexELBc8sMJtQ1g3dza6hcKMohYP7ytECJDvP4D5gScHXeef8SwggXuSdU679rH1M3FXKmQUYAptx6Gcv8",
  "key45": "5mpEYH53GKwnejx9FCQQMFo86PoBj5QXgrHrHdikt3Q5y6pswRbVooAaZjdMicvgFRmYt7CYs1k4eUM1WDCudEEW"
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
