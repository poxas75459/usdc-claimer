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
    "4Y8tW4BffxGj4cQ3MKgfcu8csHWRor89MTQgXywZMXnNQT1U1GtPfZpZmC52gF58Cv6gqZukj4gFxtumpJadJqNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ncLwqyLEc9CZe3GomKVAj83NuKtHsRuj2LEPSRxmf9FzsjcJstCq9bUXJG9mNDSeycL12Cs62uvcELzXedamTqm",
  "key1": "4UHz5DySSNtcJrhwiVDwZ4oXXaB5ycTpg3cD28XV65qh9TE442ca2UGc77Pdwesfg1vNbTpjkAwvdoXcz9TN23Dc",
  "key2": "xPLeZq7wtfqgUSPRMx8691QyyMgTRX3Gvxmzco7cccxrdWwvpr2LuKk1SUepATNNtE8zc58YcGWrcCka291coZe",
  "key3": "z7AEuHK76yFhEVYzC1kWvcm1BrMGmpa9ABtJnR838sK9B3Qxsr5V3U4eViThqNfNjGk1mo2kVhQ8L4BHGuhX9nL",
  "key4": "5Fek1BUHch6VsE7mZFbwvef3rP1x7eQPjdsnGtLcpBz8UvFiJ4wNrf4nUrAjjMDuEBcf3GExQ1E8ohPkBmJcNsYp",
  "key5": "5eLEFMAZeTjZZ9fRbfevCH2UgoQKjA8yQAd6Y9UHkmbja4g1bJMzeQUQ1oE1Z593H8zQvjHvJWodfpyoDg5PUNux",
  "key6": "5bPNaYpXpksF7NFLsKXhFUt15rYEB3jDLCdxWtepLZxwQiQ56djH9MJmrigT6dfVthUSP25WjxXvvUjStnVV925F",
  "key7": "3N2ahHVcUhH8m9jZhojDP93kfheoNTSw7piKEeq1gSnRsAL3izYAoTuDGfoVM225VjirBB7Pi4KYxf725UkHMUkR",
  "key8": "kDzVnU5t2yqRnLio2X3GhctgLxP1SEmVeQ3hdmv5uQL1xjA5JspMBUDmkH8Mk1xqbgKQJjrGPRwBZa8gddRdRaG",
  "key9": "42ycseVnz4pYuLZwFdKJcLfCpViP6jBufFdJt4gpw8bM2Kb7teaxqjjf5iK6B99LZtg3YFjHkSDH7VS9pNjY3xeX",
  "key10": "JWh1GgQwuHXTUdwYsDRjyCLEnMcAmAmWi1tUs6D79mHNHfw9q5HTFqmw52wkiXRjxaAnWBibYRhVMJttqHdBQD8",
  "key11": "5B5B5vgTMNm7L92hqK2oFq6n7ckpjpYWM7j4tR5J83S8bNrM3d1JE5FiWB3UFFxNce2E8Dyiw7xv8wUZiuRm7B21",
  "key12": "52WBtqxFpfs7iC6sGoAvHMJyyEeNe2BZA7Wo2Tp7sH8xti4sJbH8rJfhf3zLE1CdKNFuR2RBeijtEFBgM9ccZasN",
  "key13": "4gYXYou2aMzdHbGSCuuf7twwm9pxqghccLdzDe4UqG7gV6BH1svMxQY9Gni75pC1yxsyPCTsr2sGhBTHLWBJfZHU",
  "key14": "3VPNE3c3kT5wkMJc1vHhbPc57yxdany3JgXeitECAJ34FJ5bV876QjxmkCf5shrjFJAH98vz7Zos5ryQfpXuBFJM",
  "key15": "5VmGTjCr1VkhxocS8zeAMAwGdx65zAL8Rk7rkwN2yecpfvztpmvc4rvpsrM8MtxJo3D2NVo3WkZGxhCxvqhox7FG",
  "key16": "5Y57QbmZFcb5ohd1VL1n1MYZym4wYxfQr9KEnwkT7REZ5vYoY8FZRf61mGrtZQmN6fLvpPVVYadR8mQrJpub8tVc",
  "key17": "ipD4RqNP3qKvZmYqgufvwNhtpMThPwKUekPTLXRggevgqNQkppyhbuSMZXHUBSCbWaX7xtn44jK47pVH154mzeJ",
  "key18": "GeyUYa6kLLqZqawBiT7t17cPvktjsxTpbCH8Wa7yyj6xUqydDQoyUYfStDy1k5XeF6P3ZNMtZb8ebDRGt4Lm7dK",
  "key19": "5w283cnsdKDHxW9bfX3hMxCcubH9HuMqaSEn3LdRRZv3Vx3bC8aGKi2etSUApJR3Bfu7XkTwC3b1LPafED6DjCGV",
  "key20": "5eD74gJ9xQbyjMGqZJRfKfeybYz9rGJpSXbSoRrkDVpcnQwehA7KiY6U8CpmEjx5Rqdn48Gbo8hB1CE1ZMm9XcjZ",
  "key21": "4nUYGwkgz294rh8ZkE5tqBJXLW7tuY8q9mnsBMjawcRyxrvjA84Vzj2Kfs2zh31YGQoShfcXrh9EUipbRvoZPyiU",
  "key22": "4C5tUEa3skyVvrHwvHd9ADP8dQpjK8h1Wj7rUGod71fzCMzYiFAMJqkWymTSRDboCK2CKZT7xcKWydLFVF7aCgMQ",
  "key23": "3Sh5TRGaKHjZZ2EzxUukELchLUCT6S44uANQyh2TaKZvp8aX7chHGFsUMqNQYxpcecoLeaTXxQqikUJteBFfr8op",
  "key24": "2MRKkWZYrLfjp1BbbzGNf2UkK8mn7FwYLr3AhP7gE5bPvJqk3PGw28vk4ZZpTeLYtcSHskcuABQYx12AAiEndvq",
  "key25": "41XMfF4ShkAvmyYtZ38AK9aruQinuoxSdFk74pdYNPb8Q7oRgKFrumMS4s9y8yH7CWo92pcxSrzdqcaR3kv7VpWV",
  "key26": "128Dsev5fedaFLKHBUD1UXoRQWmNLnXCY8qsWMJ2zzwAriuxkxEzFGrwq2BuwMD5QEJGZZaFHPvT6E47cmpLaZR7",
  "key27": "24jTuD7NewXNdwWHTbzKomDmKesFBkwj8HDWSSBpMtbNVSem5Gnz991nq7zySM2N7awXvZqzM1TxRmgGxjqdxS1M",
  "key28": "BGXNoqtweSR9fBt1X485btBqBTMkn4AwK7FHPYK5XuAAg1W9xZULdjmMvHqk5En7CDbu48q4kvi5LEf2PpisAAZ",
  "key29": "BdA3jJ3rgEHyNYiHQAtqmTR7wNVCENPycHQVEHMp6Yq8kAKNm6kvVXf7TDfVy61N9ui95NdZP39Ps9Jqyve5aFf",
  "key30": "57XV9FZeDAWk6voY5oPm11xRonW6qiVxyaZKTN8v3shS1a1LJX73XDay3U3DxDY6hcMu6EC44vxtxzZXGFREBN6H",
  "key31": "4k5gfWwPPFgzVLgsjTtUw8ueqxJc7k5XU4drsYV8wsgGyVhLXh19xE1EAYkc448NMEWLenPh5QoxnvENDmCosgn9",
  "key32": "4gh3MWj4mxV7TTz8zKF4bCqdmxNjvT89e6dwLbWmx4FJWkFxBue6ZU8i8z1izXz2YzLjr6jDgCTBySC5QaFaLdsp",
  "key33": "4ARybwE2tCh7ukaxUycw9EXzeoHtKG4EsAsssFoLzhiEbfSDZyn6uZyZWChUVsxnUbfusYcKVWQX7KxHHZqmsPPQ",
  "key34": "3Hngb2VwZX7iTBGaDTrPYZgYiwwvUknMNHYubGumQSDdup9bKWGH1TQP5jats4UJuHBLBj8KdbRtbwv5J4c83X93",
  "key35": "5rVBrXrUQKesBWvX8VWJjMbK1Mkyea6iE4YGXt6gDM9Uvtf6y3zx8UT2L7huCNCft2KtTtxNEs3tm3xhSGah1zV3",
  "key36": "2ASUrXfsfyVEhk1XMMdcFuhNNYSKkiYdsRkzPTqBVB7dkWo9ZoDnCeeS1JQQ81XRCUNUNhhkxLZ7WzFWZRF5w9gR",
  "key37": "5GnoC5h4oM3HBQHUrZfJv59n55VYeDMekoGc4tuhuTvpFazdLay1af6RvGRQcdsVPfEej1nXFxBZik8NwRZrn4AN",
  "key38": "4NFLu5twngoLCzASNzL6VAYr4WkpHoBmy4nyTUUwY6LLJXQYQfFrDbgwHeqWHTPzMzjtJTyKc6ASCR1TjVS7gaEq",
  "key39": "4Nh7zLzsPP4svnmmSrEFKmndyMeCnE7D94ASoLxGhkmAoLFHZR3KhpFVMmjZescbUjTj73Mo9jxfBqARWAzgBgzn",
  "key40": "238K1AN4KoR3kWJmG3sy2YRJnpujZJw6Nk3VtFEzURoS7b5h46oNs6GRA1uNYGxWzxbFFpC7DcBUxjEKdKcoynj4",
  "key41": "2e3qimyMgfqiKCoEAYAw9XRhRHgVcYb5b7oNg8h6AuVt9gUn4XcsR85HNvkQGiB7UvustpVmkvG6X3BKeVbMAtBE",
  "key42": "3wy4Meo9Y7QbCEu7FMT7hALvu1rDMVcAWgZ9SKnKBq7LxzxSyvvLnNBo6GysKRLJVCjbtyt5JtCh8PFpSs2zjEuS",
  "key43": "4ZR35JbPU2hfFHJ7v1xf48E1GygAnv7fAUnh6Dujkp7nfMwyxqaG4ixw92CWReTzBYxRPc7A55j7tddBSf9GBabn",
  "key44": "3zyDFHtEZtpSTSwS5XXiQ3SutEV2J1K8bhnc4wark2i9LUofd6SwjEhyVYazgCWijoy7RAN5MC6jrtkvwYsi5Yov",
  "key45": "2xzrLWxr4Mo4Gk1Qo7iqbr7UR9SQeKRpifqujuJEabvyGWXoPHxyFHtDzUc48MYizHSp3HMbRSky6f8NGhipQ1Bp",
  "key46": "xzAPsR5Ka7AzFFrW8JhEZbCbyLq97YZ412QCSUezngVdUQfx5Qmn9YjSwoy1BmocGieytCU2UQMVz6UJAGbhmJz"
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
