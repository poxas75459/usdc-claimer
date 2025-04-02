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
    "anWTx64psyfMnDebaCj93wqqp35eWjYUzZcvXx5zAT1QZ9g5zgvoHyGdMhNjSHFD9BMUPEEMhhLQiLt1Hvb4gGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DwnWsTUUU74TTFHh3Dj5Zm4HDyXgQgcfAXj7jcKzg2kd7Qnph7WhRDkBUG36huzXoLKm5F61wjjVNaHTWjCgeD3",
  "key1": "3YuQA6zByu4PEQ9qeQpcDVDXmxLL1bpUu5HoBvfQVVSwwF4SKD4fqejNdyMkPcX7biCpcDvvEtoY9pPxJwNTSZpZ",
  "key2": "4mMXZguKKEYdy5wy4N3d7vfHLpski4urPo2nk7BQ3JRgA1B5LCgizCjsVSUQ23MJKBWVXoKRFATaDgMS8bFBWtCn",
  "key3": "1suWiNmfUxdyJjKCwrd4fqcKUc9uGDWy74eV6HaD5pf653jQSDT8dipJCAhF1SrpDEd6HRMhj5CUJQnDmm23hZu",
  "key4": "2Px2jHTbr8BVqscsWhCwZtNsnonwXuS3aW19hZjzz3tSuoWRvGdxAof6GY9x8fUEy26cWw1VKj1F2MquS9vGBADR",
  "key5": "bFGzdtwz9XPjTFec968MiqyS5q8EozHSMMUg5dgQ8KeVEyugzHzhNd94ScyR8BaQTvT9zRVK5XZDMaxVkyMX2NV",
  "key6": "5XRrKdvYr8DUKYnF1jpQkgksnxY2N8qkqAVNdKx3Qg5Km59SwcXbTpy8bt9GHEKsUUecU64LPrRbqJCSSER4ySAh",
  "key7": "3BoXvaVaNKd6bt7YLod9qYMbekoGCdTDjSY2wT3NB2K8MZWzZ2Uxnof1jFU8st3jTm8gp4wg5Mwcum87ukVaVKVd",
  "key8": "2xPj9urdHj1UdVgEqV266MtP7MABSQDEFjsbrUVkJ3p6pAtwJKoJHjpiGaFxUUZVhHAdii1rneTkQMhUvfTgRKo6",
  "key9": "5BrXSipz2zfgtxURVUUDEUztfsEQS1kMRBXX6TQJPaEGreFVXcPc5xs1XU49x6fMHVCGnCar6bhmrR5RsHj1X6W2",
  "key10": "JS4b5qkLTZQvL182ZAtagfQzXDzPHCCg63sN6EmW1AuSNTekuczc75mXjq8YSyA4pDEuoAciL4b4pJboZHFM3uT",
  "key11": "hszH4egSEiJ1xtaoT4yhbLNzEYGAXL7Z8o7sbJPZG3W6Mzk9HJtgDCzfuxwJKq4CoRKWB9p7h3xQPHojZVVrART",
  "key12": "3yg7j6QKi94T5Erk6Sefp6NuXYT4cA6JkoqVpxyykSZgQ8YvrjeBJKFXQkMcDwzYTqiDZ3GQMv9Uf9e6nnBMUFdf",
  "key13": "5mqQpM6AKHDcTmSDgpYD5zpuK5dEKhc15nktECz1aSGjT1cx1zD9VcrjxCD6nWYtgWwW3ZQh7W2pZ3h7bsKVHnHv",
  "key14": "5BuZpD7su5PisDs4c9BWHUPTJEK4qGV3BZ99raCUZRsMuoHnVpGijf481rVHUJcRADYNY79RNn4ikdjjJoc6KzQJ",
  "key15": "3T9vhTwKTAVndxMi11CLnrNiYJxX5YKnQVppAAk2AVwmjR3ar4CoSbg7f5srRB1hPDUZEBY2xjQHDwRp2c86WdUf",
  "key16": "pGFXU8QXpxq6C3ebcN3vzhpxrFd5LQkVk8qhez7mQefi79NibTL6amhyud72G3Hmo2iWb1RjQyZeqdNeXPjBW3L",
  "key17": "3xdQq7bkYFsZfF1L7Zd26W9fyK1u5LgoTj4kX9aG6FYw5gUq1Z5JS6Rh8LDuy5rjNja6CotDSVi96cKrUQgvupU8",
  "key18": "2XjhTLMpPvK35NTs5y687jwS3Zgkk4AHiqL7uA1mnowSmv2KrQiexpCCxxjpnkRR6mroGySsFLRM2ZMMxqh75xxp",
  "key19": "2uNs4Nb7JmeUVpCf2NezEeJ7KViFbDvi8nm3qRiXzGXfGPxY6gMcpMdCzRU1wqJFG6LrQun6WxWZB97FLqRUGdUy",
  "key20": "2gobWb41oBynqM3SwZj85HTLkLszmDywpQydVMpX6xjVuL3jrNMuuN7j4nPJ8XS2AMncVq3GQrXV4SeXSHmZz2T8",
  "key21": "3EH4hHGAnmQLWFa8Y4bp7gCPVCdrzQ4Y3sX15YpqnYPWAqpJ5mVz9bhyPPyaceQwsz6Mj1e6M6KLni7Sgj9kKbVy",
  "key22": "5yytDvY3USpVYt2cCkriDtAM6vzbHgin1GmsHqUskXhYmvkYZoGiHs3YFgvwJsQw1vFgja9bX638jdPNyvoYtgog",
  "key23": "2xKWoC7jmFQ1GPFFZQ1cLJrSJkD3TjUJL6mTqn2wwKFL7jqgCN68P13TfjAGpAtfCwLYUNW2r8XLDTGh6ib1TtnK",
  "key24": "3YPdGSX7ugNHA6pDkQ1t85qYAof6RFQZbUFqbgscHF5Vdexn42LdDRgGMSN5JT15TjB2LA5bCdhNSwXGuTH5wjLq",
  "key25": "2zNyuvMcCCCsnUvvNuX5kk1K3rNC2eLmTd9j2kHwvxqhWYgYuZANcEQvgGmKBGNvz78MGMuXt8AYtZYR99TzaXZU",
  "key26": "56VevuGybAuTMXWbB6259SJujHJNesLmTKGM8P8BzY59iPCVgWn4Z6T3f8xDq5hPk4T1t7vZ3sbpfqJUQSsq9S5k",
  "key27": "5H3EwqmZFBb4VUjgjFGxXzvCpMyjc9KacbFAWkdLBWghDtTjBPJeFzGS9KiZixPBYWYKKDRi3PZMCcekGwbpiQpW",
  "key28": "2nxfsNw2BBuQXmxQPz1kTN3CMQME7vyy4TnT2N6UY5PxGrsen3pNcZSsJSVKSG8hpufgqw2cQhycEDJ9bKXoiTqV",
  "key29": "HkpgNKk3Vw4MeV1Jm7YXBuybxP1LpDK7oqfLTRUCEcAuqmBKh9UDVJ4JGS6MT9K5DPpEwJpWnRDSjb2rmsGA7QM",
  "key30": "4XbbkPcVDcYAHCXqKPS5L2ktck1GfwoTXjcYsiL48TY6SFqpoXgvbf6AZq1ctKio45d7iW3hoNBbh22dkR6fApic",
  "key31": "33GEmc9Rdhau2JhFbhVNbGvZPjiA4dBBsgjKWZTjCZdbD77Fiou6iWTXzSW5yz85JGafGpDY6yYiALHf41Uo9gVc",
  "key32": "37tL1voFR3YTNV9CTRz6tqrv1n2LFoLak5LVFMdF8vatRYqjqDVa9XUykNNXfs7ekZ5y3yhz5Z6SuNGEUcgP4AiY",
  "key33": "2og1ss9CXhyFQftyK3iTUsUJ9tzErUWcxzWFGZhZEt7UFNCLfAjgGTXhtqCUfwWQmeY7CoCb8sUyaQsX1Wqs7vL6",
  "key34": "36tsaCLE6aTv1FNiGFfvg56h1KwBJ6Qt3yenbjGvQarDk1HLvb1fUskNYHoZ76qLP9vugARUspBzWNKPkXFijieB",
  "key35": "3JpzfBhDxHRyKXr3Eup6VYGUc45DxnGFpTz2bnpV232DdmnfjWfeh6uNmnXiBRY4JYNPmfi2t2u6pgBC4SkLkakB",
  "key36": "5R8JwfjFfEypj95kqvV3j4XQohBnpVmQYX6A2x3soZ5UWgrqUFRg4yEGSexfyA2SYgsJS9AbZnE9u7qJqciaqZ7n",
  "key37": "8NiisUDhqsa2zXGFqrXA2wfyn2BGKJAUjFMVYzcereXFNwCieRZxL2wCVRmMevtZ5ZtBoPDYFkQLY7uBChQebHo",
  "key38": "bhs2HVTZRn1cGtXdE2nYS1zYgE2LPnN3KeQTrbQjCPGYqd7kPCZYkHk5W9WVJgCDou6CBZwiPMmzgN9jKw8Ykm4",
  "key39": "651UH896yZ1Pu1krusC91ayxyKCaG4UdAk9CDZoxhTBajgDDeK1N2VVws21i8NjtaXGh7LJBjyd4Rjj27kcxVroH",
  "key40": "25929ZzysyeiiG16c5wzF9jYVy4bHf1tEEhdRGCLsVGzq5uRGiwjap9eP6hevR54XJrZbk21NHk7X3kmcyArM3PU",
  "key41": "3FZTSrKS6kTQdFdv8ewyxtdTzGWdfRS37VW97RXYU9s8gNK6ii4dhz5TiD6ZCvzQLUqDNFZZRHA5fSkUY7Cc1AJx",
  "key42": "21J1yZoSdgoBj9mNrNNi4iUTVWYMEhwcep1B2v1sAv2BwSRjd4R1v9E23Ka6QGehFq3qkYtmmtyutmVLMWVzQm7U",
  "key43": "2JNozVUho4YTmtmzmfrBry82utmeJcBGpEpa7bLndih446rVH2d8xEPApJQauJ5uaFQTvXUeqYWT8G8VwT7yFMe8",
  "key44": "4fsDunf695VMVVB7jeR8KwyLnGLjwpMp7izCANvLRuV8s5cYVLzrUvSDaVvXhrwUfqLF5ExPbUuHzhsmSpoPe8Hf",
  "key45": "32VwTniZisWWPbudW1DWDqjbsCup3UiTkNy5xZDAQVHotdSKPSpkCnk299gsx6rJxZFCJHcSkhxLCGTtxxUZNJky",
  "key46": "5R4cDfbWLaWGUkrhQ8w6k54fbVdbEByfLoQc6FWcEEkgcNwgdUtgW2DYwHkHJ2Ek4v2ed4WxLamX3enPE9Q4n8x9"
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
