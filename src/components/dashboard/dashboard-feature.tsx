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
    "wazZWAZkVHCwQvHAc4HT5U9zprttf6aCfjHcWqE6Uk5k6tm1wCr1SxFZTEJt2aY92oMsFWrZogs6zABy5vBy4js"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "676tLhpVp7sbQeptZdw2o2YcJm1AHh9GCFDvZKm22n95AEEzRHyn9TzXhzwqxzXpNsKWLua5FRbSR2NWNKdZnAcr",
  "key1": "3Yz32knm3sn7vQWyv2hi1dBuS9sFT1Q1GVUkwnggnnMMpt4cYb8vtyaN6six6DCeurfB5kzxTmV4j1rofLua2JuA",
  "key2": "5Tpmno7q8GvwPeREoiEqNdC6AgWESiBtWKumgZVmdNRagaJfmqVTBuHHDS54hc6FKZFh2JZUF66BN2ffjkHsNSLT",
  "key3": "oiB164M5cnQWPRVUysFjfpmZEvo4oADkgQXYHeDFouUeGadtmaXNhUirMa6HxKdu6nYMrW8qF1bmJvC86d2T22j",
  "key4": "2Es2Q5KtGknLvGce4qT9YW47xAwwpuZFmMWnRyacRNxbX4ve8nZAPFWnoVVojNgvHVZp1BdssAhCzucrQeAK1c9j",
  "key5": "2eNvpTr58rzstFuzr44N9PyTTEYc1qZfpjjwYExK9SyLi8BQijT8cdZxKWeHNkKPCtn3wLWSYiufZMiqw1iiDAWj",
  "key6": "24gSoBgGxuXgF8fDQ9bX1fYyGFHM2q5q5mXeQcJeSVNAjRujFfWWB9KPVYLqoWTn3QaepJ1XVF1yeBaEpfBmqzGQ",
  "key7": "sdFK5vUKsjD2AjbmasaGxrXSmYNX6d8HAhnpEw4HtLm6wg6WAFqPhJkXEHQDp3C7aztA1wQ4Z2bPv3FmByd4juq",
  "key8": "24b1TwaYSoihiFbXXmgfZg6dJdKPQAHvFgxsAUuQSPJF7AjZm5DGgGXScStLD1VwJccKJXpBgi5fHyiMJsc9Vbi6",
  "key9": "4iGTX1fyygEzGhUhAubHhRosjbJbieyamvtGWW7RaExyYfeB2giVPQsCwKiyXRRCPZ9KnrJnbeCFr8CnJ7Xpi4Jc",
  "key10": "45nxjSbrTRQjmkFZnCRmjK4NC4J8K51w3iUS64m44yzGa4FaJ6hUjS6cS28NbB1RYnTshj5hiBMqsFiMxD7VXNMd",
  "key11": "63e6kMw9omVYP9JmojCGHUV9TwSdbWud2gt5auMPD7SEMaH1GXevtUpy3RAGcP2iPSeSKtRpBYJZ5JRKhYTsgf9B",
  "key12": "4SA6yjruq7GQLfc9LgfWANXfMr3bceT1KeKmCVfMzE92JFjG5GKvhRSKzvZ2GmDAVtaCcEqeJZXLgUWPLkku1uaZ",
  "key13": "5ABu6r9vvZm7PLaZRKqL7YVT9iFxavmdEXD4pHBcaozmdeAtyUPoPXe5zNdtbwc8q6haJLnX11AQ3t58CnWcXiMU",
  "key14": "4pKiFDBJLS93yRiHUoLj8oonJvocwkRTGNgtyNfAQ8df1WQkBZHvF46YHpHVpX2yGWXexysQWCUz5Bq6pXKE8e4f",
  "key15": "borgu9WAJT8PJkaEqFNpyf94BAWZXjB1eLD3vMJd1WTf8BkZmkLaPEn1keVbX9ED1v2mSpqcbrLsEqNvqHoXwxp",
  "key16": "3JMbjmsZ1bo6E9BcBs6KNW3J3eqDnNLfrdV17d3n9V6vjgy89BsvCbJV8bNJb39jyfyfXN66MX8KZugzp6gY6PpX",
  "key17": "31ixGNpBYFzZe5iJWmk47NV2Dqfqcwni8xgpPvf7PPmju46d1DF7KMynWF1LetojJALXsbyUTtKkUcTn5mjPB8VG",
  "key18": "322tjBpmgjHWQdWPbqj847WMXYHJprrCtorczmpSHnYVd6xbmAnaC1fBsVHihDxuYSRrYUkkt2V9vtoNoy863ztP",
  "key19": "5mKNgoa7Hm7Ux7WUWsVXTZPrhV3SPvA436ZVKbxPBqeHSNkP3vXUzGvh1PeVEusvbGQU95BMi2515xZPaRwYEYhD",
  "key20": "2UsiVqAbq9TsEYHgFy3QhgkAiu8JQaxfnAbbGfvvayHGPPyjQa2Fm4hVXuA5HuFaj4xjWUg64oehB7apAtEvMFDu",
  "key21": "5DyR74oVdvko4DV43iu86gr2v5nH6HMRW9nHL35Pmw7jhdtZWDXiqJM3ixjfAMBka9fH9xJSH4MrYXoAkbH4dkUh",
  "key22": "2HG4fEPVn6V8YTqjnxZZXLJd9e7WDh32qnbJz6zP8jWt5r3MXFkf69vrXurRYViQ1N6gHzuE5sanQtSw5iH7fQ7a",
  "key23": "21CTQmBuMAdaRwtqntyTW812gofrx7txEPmkbduwsggUHMr54ohjiETPM65vXNTpZSXZq5RaftwQyTb6EVvg2DHz",
  "key24": "422RmMgmBgzxoK6raxLh9eJNy8HYMSUfhiv5hwsXFiKhgin9qgB1w7udPNdgL9B2z3BEDiPpapsGzsF6x5rdtvpc",
  "key25": "5akSiFDbaxJoyhRq5rXKpXqSeoPAuHYTnu1QAL6oUepN9B3zjtrhQmutTsSHVf3a7Z2D5tYr8PanaWQgPQVQUY8F",
  "key26": "5iYtKcSoHzKvjRsLpfaqhyeEq5xTY85J7EhjzHK1rboKJnnouJadafvLuemZMkTvWR3qj3zRWrLzywwg2UaF8pVu",
  "key27": "2TGrkzC2Av7UzhgDnLV6UFqQfrD52HbR69W45QEHinA3A67TEdbKyGjcfHBqnZ8BDP5aNuqnzkBwgwsPaCcFMt8L",
  "key28": "3n1K5xh6EfUMj6tGgukfNqK6R7v8szi4rsF8YcVTbCCHaKu45p15FaFP8ijVDZGH5pwPWZC5VBmrCGPFDt7ugqFx",
  "key29": "TTqBJjTmQad7gEK6ehthKYzz4uRCfa32zgyNPyoh2hshsYvDqD2VBz8bricZ8HhDx1eFLi6dvpkLuhS4HFkppcj",
  "key30": "2zBb5zDkvqYXSLXanyWvX3U8hxN8Dmx8Dpk3Z4fo2WpdfHBwWwFyPQT61tVaDm59VWhpiPcU2Y9Yw1EB9kh6FbAn",
  "key31": "2P37unHhgHVL3X1XenuDMd1Cq6fUQEBQG122JVhwHbuR2UgAFmFDtVhYvfh1d8zif3aYuU2UqCXfsVDNy79DCgXQ",
  "key32": "3nWCbyoFWXvpjeabFSsQz7qbmjuMWr8ZVBFAztSfx3yB2QADGbikL3quamSfGbNzDfu5NrsGmLmJ2wWXoAk9XBTA",
  "key33": "3QtfpR7aqDazZ3LHWRE1UyAer6nNWGZ6zr8KyZ8Zm8kuR7LtuKRygBSU6oYdMg25XQdgyZTG5ZHnGtte5qHNc9uv",
  "key34": "3uDV9TNc9GjzVADBYQ8wETYXNvooqoyhi4UeNmj5GfEJftEWUb1nexAmnT5vdsF5QTwTsN6Am22xVi2RVuXhMSfS",
  "key35": "5air85zw8kKT2pzj3xVdpnZmnEZ1Gphc5Pt8tRM2nDuPFerLtvGTognUDTmps47HSNUmaaiLQ9GNznEx7zMbpVrK",
  "key36": "45q1jRaze6DedD2EbDpFdH4dGqesbhRDNVLUSug6Tib9KfDwKPFpbFy4aWdrxvkExT6EfzFApgJeqTofFRAFv9dZ",
  "key37": "TCJtJP3YrbMfeTuipgVNdzrSinHNEHVKqjQ1eZWGc9agAMd2NBLkPgwDm8qrmVeAAnWu2qAndudQzzn6VYVhYSD",
  "key38": "54EJ1i2GL4iqxY2D9MrpG98Hg2UpkjHSAKLhX1fEcoeR8zxAkumE4b1ZXiL2eGPsx8NQVw6K7GFReyNCMQkc7FCU",
  "key39": "4eZE7h3LqfJv3GWeXVjGyBJUVx8PcY3jkadVEpeyw45YmQTV3zUbySjERLsqVTa49pE7UxDoHxWvR24AhxtfWyHe",
  "key40": "5EoUuFh5Mc3u9WSzM75PeDTyFhmyz4bk1by3aYNapj67N5Z7wd55vnuWmzYMuhNjWsN3C1EScywNHtsP7wERXChY",
  "key41": "42zJ1e8qUrYDFjAex5aPjyDr4GmWYNMwRzPoJPsR9LdLw5rxGd5LuK4qjtBsgYjp92BNLUUdZocVC1wK67ZbrWR8",
  "key42": "3DrmyE7dGiZj4yZXtWmswqRvuCHKHYaMRMmCy2cG5Z9i5fyiPd8oDRKJuvbrhjeNFKVbgFfCcUqXgbhrFVa5vKR1",
  "key43": "3jvDCJyrcqbuScJGMuoyPf3XZkNc9iJyPb3y2j8TctrPP5h4T8kawcgRmheydhqGADiJHeeCewqyGqD9X6YVfLFW",
  "key44": "3HP8XcDUir9VaBCTEcSc4WJjdn9JyqHpXKsTNiCGM6B4SRoLvZEvtFwEpERetoYJeqFyJ9LFuuzdDJLS3CCa2dKX",
  "key45": "31D7T83qqrGiwsa1pVU5UKVenu5szP365qywrB45VSEFaJLb11uWZSCY7QPNpUxgxPTZrVjaJm5DAQVoTmEmGxoj",
  "key46": "4vvnK7qzbDz6DG6NbLcFJ7eUiQf8XjMTS1C1LaCcGmgMdVLZEfBGJSLg7f4eX9N8YL88pLAmDGJQ92zWnzKw6LXT",
  "key47": "2VKnAgGi3CJTAMXG4im4D9K7gZnEnVwBdSGUVCX9NjLkKcrA59CXHhCagfZSfpeNRKryRwQENcY9MY5uSGFTB2MS"
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
