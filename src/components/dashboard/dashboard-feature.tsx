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
    "aDdyREQCj2wFKyp1khE5SBEvNPVeYdHNZCoCGu8Eh8ofxPb8QkWrVudYvao7kFzvmB88mTwAzaXu1ijBW7LPYUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "312xrZ5LabHkG8z73vbR5upduRse9EffLb48r9rcuXkSYmiJpU8MrJSTSVATaKyZmAthntT7TscV5MaEkhuSiHis",
  "key1": "2TDKCF9HMZMM8dSpvpqTNina2u6QiW921mHGVHQY5SsgDMJhaaLHCALFLLaFiCQ6MhJPykuLNHVTpY8Bor7xDJ3j",
  "key2": "SYiKYdm8KKtctBdNt523Cz2JDz45PdxqFLTQqFVqMfCcQBFGn3YXAvoK5oPFBiQPUNjNfhKRXpQ4o9Ev1UuJ6wY",
  "key3": "67Q8g2om2kfC9kPVr2v3izdgyQKiZ6EvJFXNbqwg241yxiCoQjGvEz832XeajAPoWnJgstNUBtn7PPZa1uMPcYP3",
  "key4": "58jsxKRv2q4emTTTjEfRCsYqbWbLfqhXgYdRqmghBMwL9A5LZBkSpLqzeKg11sFyJLWXAYarx7jso3GwB2tZexVr",
  "key5": "5PPsj4S9qBYrDyMaQvmoWa4oTJE4LQqZQ9fyotxSoFXmJswHQDFHzVj6XbQxr3ViM3V3bXaQaF5SXEmDM3gHxQmb",
  "key6": "3qTocBgiEpLoP3dz1HKcWvdSYryLhM1wxYrrMKVEDZeS7KSrhrzfs4tYDGbsy2x2DyyLHceejtPtDa9Gwo9yvUoj",
  "key7": "2mgkGCwMJhk2APaCWd49JfPFCPDHeJHAJWGsKGMg1GuBc25V15WPkzwZxq1EbW71XKz3tM2J9BrA9wKmqSgdKq5Y",
  "key8": "37rkt72uzgQEz8Kux72RVrQ5krTqvJTjXjF4Bfr18L8Svoj3pPhxZfYLFY8FVJQajgFNZWwJhoVi4cBmkD1D6aXL",
  "key9": "45NE7X9hb2AioV5g5mJ63KefWFxJtVHQowX8yitbqWG4F94RymeAi8VwJt9Rj62gnRroFaW6wuNCikpUEqAKv3dA",
  "key10": "4VuyUYNJdijPYtgNWYD5jWQLukq5MaModHkjwDvu9skyykioxoKrMvnVhSNT3CaYGRVasL8oLtgHcFFCwpHc8NjL",
  "key11": "4UmP2qy1yj7zqwo8vePPv3ANFcigHVikfRLEcNyjc1cR4vWEMNMd8s5eX9ZuKjrzNkWjRKaSqv44NJ8KPwVoa64",
  "key12": "2VtUPFADT7cu58r2E7mBkRrnMu8p6LFtmZi8gGrkSrDv3BX1YUCfvMY8tfMkiFRFJQp7MKLSeNYrTv8mtiuH1R9Y",
  "key13": "2tpFP3gQu2MvTWcjbU5aZH8cZ2vwzrjgDh8yVhEF5Wv8fbggY1znBBLdYYBN6pYw5La7Ejv1iFdV4gVRrWpxiXwY",
  "key14": "37TW2MhTccCAaxuVJZjrho9CcuQy3snDZMKGaZRzQYxS6eFDMFCCF3RYgFpEZLAEt65zzKja1TjP1ZjAwr9kfkMv",
  "key15": "35ZfpRhS4etZjkatg4o14UNnEfCdo1zDhy7DZSkPzHKJf5xMMtPqevKzdjhtDnGerU55kj8NrXnLfqcubLZYeEQk",
  "key16": "R3Syb5GMcQ9Tb4JHbLEcckFEEABDWtzcR2V44tofJuh6jsdZbY68xfcLmqXjEhwiSq1JCfZ2wjwUP6fcLGg8zjr",
  "key17": "qf7kVPEeaCSBPbSQg1ZJ28V5P4hEhiZFhWaa1DXB81ozpanNqPz3pxvjM7Qt78JpmBTQQKnn1NZcdXMUvVNdCxh",
  "key18": "4N1evaVHqqZJhaCwjk2vhBmpo1BtvES5X3Risxfgj5rwLBT1Dq6smJBgyD2jmvT6HnEvqgE6RtFACRWhSooNPgLU",
  "key19": "5HxEUeQiPhc5hrkgcXpJQy9XQPTy2fzhNhh7RXqNM3hC1ppNDX8JZ8WLFHvHdGWdMS1oCf8JvfGDb7pLhdYXhgKh",
  "key20": "ZBGkcfu8iAb8aQTEZRANx6TWKpibYXUGsB7WAv8DF8PZxP1KevieVjRThLfcByQWSPQDppcapGupcMqRPpi8cwm",
  "key21": "4Pbcqy1Zx2iWUV2tn38jsGVxVZGpuEk3Jpp6JCdtkAxnXhVEmEb9r4P7Tvw3eoNZpG8Bfndxt6qicTPX1YXRUzVx",
  "key22": "4qknjUjprzSRCAtMi5HF9HxjudBXWWEpf6E4GtLjFYf4VWjrbyi28BsLaZu1zsw7v3jw6utWoGE4tQnpMMrwC3pq",
  "key23": "3w5ovdZJvx1qMrs4wibhTs6nMLQNrfDZKdXWvWVHpTDgucpkPwSktmQa2uWYqWgpKDzYphDThQGeCY3Pq7Yxz5hV",
  "key24": "2tafnvXUUCXAM2TNqCbdgpfxTuwsQYg25reHqxCBTj95wjNY4xtJLQMZ8YmxcnWMHieBw6dNkeemNkJoGQ6zkPbd",
  "key25": "2qF2T1SUwdeWev8xsb4XZ733hgGsvLvQAUy69wqTNSAPZhnCsAu9wJMmPbAHAKWDTwBySPGUhpCyybAAiQU1tsfs",
  "key26": "PThXo1cVcFKn9MyPEkBefrT6dq1s4Jc45ERVgyB5nFup28PfgUkVSjdrP9oeCLZT3cwSv6z77A57iMrkhcuCEZR",
  "key27": "5DzQXa5hS2E7DPMDEZpziKB75gFDYwui7fHxq7noVgmKTsem4bbaKAszqxjzLmdCgiGE59E4KB7WPVvBjzAoqbsV",
  "key28": "4jD1kg6DsaEPpjomFwa11LzDoMJACAZhGwGhhp5GTyKZtvpwzGLfPkjwkgGCBYDmZLNG4CxhoSzT1r4m7CB9NwJH",
  "key29": "5DMBpyqmvNCQ8kX3YjGkNKzza6P1VY4dZy7M2KUYhSstTjTR6pHZmpyW8beQyvuP15CVfSm2ez7MSA2mYPDrst2i",
  "key30": "xzeTHu1e14bt3iRyfmBDvGTCFJidz5rYdnxP6u5s9vZXnUzXZaTRumXzcSCERngDvbeURKQfm6Hvn5iBjHWiMdH",
  "key31": "Ngo8G2un4jFL7BRix2vWMWMdLLALafmWn4Q9JyELXdNs4KxpoLvGUB27ndPydrUP6QxXJFvUqeYBVQAg3JWJ9r2",
  "key32": "4UJfZakxRhTjJs5S6DzUJEbUH5ACnphrcoH5oYvSrawzDr7rdUuyaQLNozidWqufM5vLZsXn3YnLz2AFpWsiyodR",
  "key33": "22AKHZuZ22HW65KkZvuaKAoiLwhsS5o8emPMfFni4K8oYXDpxJfiEKfCYjJo2CBUZ4zQ9wiKf6sA3twrDd6ShR99",
  "key34": "46m5d3587t8E5b86yhrM6bb2AWYujWcS2KP9uXvhdy9R5mtsAhPAECip2vTkUXphga232HorySfynLcHQezKKday",
  "key35": "4Dh2mbxcWahaE77TZppbcJt7RgPwXExQZby94dfXq8J78PwbG6G8Goi3Qwatq4J7vVmDsTKVPYhYHuyTQsPQWz38",
  "key36": "573GMAEMb311FdLjcR4bGvJypAsoG1k3YwZpsKcyp4Sc8RjESGsbY2yLCRuUoW6FfM2uR7RUnCfn8X68q8EcyCnE",
  "key37": "4jfVLEnNCSpUYXaHQku8eAwVoh8Srk9CsfxojsoBCjD3jfZxaPrZdRmLaKJhY6iQywvS1T3o4W5JPeYk4GfNubV7",
  "key38": "54rZ8F8SG87b9V4iySuiaNYoAwkwjcip9vkJvfiTeshRrL9L54rf4uXfR5EfGQbm1NQ13u9pvpMBvUXPzkyu3uiS",
  "key39": "28KjiYysLLcp2WYWRqTLnWs53zzTaUTi3DPThXRuwUnxZEDRbtadu9q15FSb9BopZM89Mjn4RRKBP5HMaFXPqpKQ",
  "key40": "2JeH158VSfnt2gnhUiwHgJc5EJCW1MgKYxU7zojH9zkLrceaZARd9hDW7dH2jQPf7unn3JSh6xeqfUsSSCprDbsS"
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
