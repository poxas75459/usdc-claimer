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
    "46ZfAncJfg95BQefAbZj8ReG14qih5nNY93v2M56riHmNAQqNZRAq3TXuvQeeeuRnt6HgpWN2dvwi8bEN9sGUhfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JueELfNRZ4PULPwVfdu3viFEfiycqdpfiyjs5G8YTsqwPKvXQyiApQ9E4Ccd1Nj9wrY9dpjBnYqXCHhXiP3ASC6",
  "key1": "5iz98rriR7dR1F9vHBJhzsLHvwDEp7Lj6MQmopxPZ6FTeG2oy8wm8nuFJprWdVejAVwyPsStASY8rEQNjkSQQwXw",
  "key2": "LC29Un1qCBGZbhD4g23fEjenqWWb6EbnXfkmXdJzRDVJKadr9V3cuuA2rKwJEXDS4AQKkP6ZTinYybwJqXvR8RB",
  "key3": "5PyK76tUT1pebVNo3ky9TUiW4qioULaacfCKSKmjdasyP31Cj6EoEt4vEnJhqVCueXSuGZhEQQuyMhzQWCdqQQMk",
  "key4": "4khtfdigsTtFebKz64eaYbRKis8miihndCdRmBqH4xoQDk6bqZCH1gv7NWCK2FNhvb5T7C6cnSSnjEGJNiGCFnMa",
  "key5": "4mDgRaAEBXzPBLghmgL4vWQNeuZvj1k7EpNFY8aHo12NsZYRq9Z2qADazk3hQzG9UXwj3Qr8hh5DLJenFw5sDjrG",
  "key6": "yUjXNdTKG7y3cdETr4jofHdhenUYQR1yahBMrwosp5sYrvNQNuq2woruAypCWZJjzPns5yZnH4vhwwP15AHxW6d",
  "key7": "2y48jLzWjFkaAo1Pdk9q53DrMtMq196f3Ho5Z7R4CHtXDGggD3enzmBGtFFiaFMP3k6i3WXs3JXsXCs4GFcbvwX6",
  "key8": "wjmt9jn1A47wkBCkeKnEQXroXeRAM7SD2f6KYxGc82uMZUzoCx4B56b1LvBQsKKgAcvpMfVMpy1R6YacMeMsKu2",
  "key9": "3S8KRrFAe9wbDME6aMD5qQJGfWM1wJAsXBtvab9knY5cfznFp1eDbHz9qB2v7qMRtPxboiYxcRp5ZTw2cVzxxtA",
  "key10": "3PyRGpfvxNz3FeKf3ZiC8ry4LwESAgueYHLoARNYZbCZRVm4EYtDUmGYBw4RcYKPkcvNSzmqVzdGAjE9z7kD99N3",
  "key11": "PNs1hz4gNpfmF8ytLt5kLa4qboJw3MgBpVb5LDFom8NzCEbwQoNQ2YqW71DHFZ4GQEeSdwo4QY5bXrCdQZaHC4b",
  "key12": "4K3SRd3HAmaaZPcfSPkooSsjaDqAA9dmPVzyQahPKMQ6U9LfW3bQM11LMrTMSjgLTY92W19BdqW7sHcNNsaGXzpZ",
  "key13": "31XiacgRCyKxdNhSV9QxXgsUQz3FrNGKPAGF8u47xD6R7LQd1URSkrrkca2UYUxQXYWXQU9P8TJ5RnpKUnAPK2fs",
  "key14": "2vZriYCKuTx31CSKUqCSo4s5RhdvtUNuu6btSMhXJBcM1iZHbDPnEjojANL1WqGWurDSXtf33eNsuAnnkKVu9sH",
  "key15": "3bJRoHrMASHvzkWazxp7MvoGfjbsvZVtreVXkRXxMNXoea4oLoVi5bpXeXHXz45fa4jipyFBM4HyWZkDbUK1BfqC",
  "key16": "2FyDfH8paExgtMnaEau78opMhBLi35NDuMvuYFME3esTSpk6evF7ntk8UbPLixRNCxE9fhfNM9YpQu4QcuuE662Q",
  "key17": "31USD7nse6YYaxcX88gGpZje8sLAjFPiS4Hm13ZpniVPpqb5u9mz5iyjsVqg9ZV8ZRi5y7346DAEEbLGiJLvmER",
  "key18": "5PU8n4RwUfJWMBXVCpepWmJpZUNx9ArgwXWZBc87AqVwhiUaxrCSafNqfqBvaDoDRobEf2eeoZEkaEZVHZCDMEsy",
  "key19": "4Cnq4zXASHqCkJ8vRHverNdNvGWCEgtTDcTwCErVXz84Htayac89bxkSbHVCpzgU6GfX38ABUbSx5h8vkN2JJakd",
  "key20": "2AG1N4fw6QurhYX93yWfKcKWvEzqtX8buEd7fLLsFHY6BVrN5qjbYAtgYpqeKEuGp5FumxDzTLM3ieiWzSazUD5k",
  "key21": "5RU7ozvVmcsDqq9V9cgRsTdt7AhRdWhfyU7gcoVg3UhL9QScRDMgzJLCSeTy28cbCsVSaL28FRthn62b4YsijBXU",
  "key22": "2wcUq6oY7CQ5pd2Tb5SYLNsvfXPptuXxosiPvksBLbozZURXLbomec8zAYqobLHtPjyE7z9vXZWZM9k7xBFZyc1x",
  "key23": "zNuRNWFi3jWc8aYLtqykULYq4En6553DyKJCQ9krrQ5ZhgEUEmzcUbFcEZkLzHdYyEAdHtcPfTeX2hm61ZCc8yr",
  "key24": "5TBT4aCaLDczQJW6tSZ3XMFp4GrJZE9mpQt8DfhWRQytjQstSV19MYaRZYQ82VjNhZnpUvUXqm7T8tVRaXRQEmf9",
  "key25": "3XPkgJqiFsEGgbAndA1XXn66ewVtVjocLVEjaiCU9UfwzJ8s7BWUDkBSARRwQY8AAHhhwBsgsmZikZjL6hKxrwED",
  "key26": "HpDZbTtDkacU7eQYvg6yrZC268ALWX5nVScKfZWNECjWXN7iGh8cDB3rZDcLejoVgpQLKaKM1WMNL33VCFPq2Dx",
  "key27": "57skkfdwZ88tgLptqTBPvZnhZ9NW6c1UNeYPvocY3RJs8nTaag6Gt5yw1jVx5GyKnoKqXevyXqbjqKZnxMjDLdrG",
  "key28": "3LQveVfV9syzbcM4jqK6hFUxMA7NXXXxfd7R89zud4ybF9zsXDJz1W6XhGQb5HQDLWor4yui1FK9JuWWHFpQJQdt",
  "key29": "4cxLxv7rtnsk8UNJZQL9sVVGV6JakhSoJsZ6fnUKTkZeduLGeQ8BBSjKtsVoEgbR2gH5BwfHxWmZfUZQN4Uroo6k",
  "key30": "2iRR1nRuQoYERjs7jRzq5Lm7pYFZywxpcARufAyQxntmRA7yRCoVfMNXRTpVWkGNUmpMPiXrZjcKu9FvKDP1b4cP",
  "key31": "5tKZo9RhPN2GiRQBUtJb7m8MSq2z5oKwUwY9TuHh65hoyhmdeG3aCoMm9hKofZDdXdVp23w8e7ZEdN9AwYFXPw4u",
  "key32": "D69TcaPqNNH5J8FtnFN6e9Uy88J72vqPBgU3j73fDph3rHzWrMcqTqghAk8uvLnfxjgBHt2wk4JarGzQyBmZWjE",
  "key33": "3euk1NEVGhFN9e6BW8NGLQAurWsVFrXjiQLfvoq4kxPqo4W2d2zrAieK9EqQevjWdVzZh1ga6bfLdA1vDkUGPVbx",
  "key34": "5W6s5dFtjVBS7muThyDuZGddHUEL7RF1RMNAKiMxVuUtGFcnC6tZEqtkRz1wQ9B8y95PS6vf1DPycHrHAsRXMHgv",
  "key35": "3AGgFxeTcNTaa2DzoLk83aZZ5rLZWCErWtFG2KCeUogeaaDRPo6cPvmCDiMbp1SnvEQvdosSWoMmjyFtzK8e5n7n",
  "key36": "4GULKSaoyvNkDNVH5LFLsRHrvx1FE6NS3fCDy1NjJEV2E3bX5j4sz34LvzXyCmFPw3wSd3AWy9RNeVLLw8dJcsVN",
  "key37": "3gYScVd5YWLkSXBQVupqwARxY6f3CuJmSLVkWvAobyvohE2zQ5ykxPAtNW5LKHND37Kxm3AodqaTmgNvEk7RNPi6",
  "key38": "5XtiG6oE9jCKLJKwBRBv4VHTPft12JRjd3o1gcEdDCodV3oVz4f1NgrhVvC58kTvs86kWPmPJFJBhAH4MxQoSguT",
  "key39": "483k33dLjSVhLmN3xuoiskfCZvy4ym2rJ4D3bY9CkJXNvxEaaEoKDLK67LXoXnbeWXtP3FUAiYeZxANwoWqxR2q6",
  "key40": "5zUqdZ8sQJvWusEFwSysgwiLcbQoLViCEkCJ4vabFMxNJVftcLLzj7SHHwxuEpUxDC7H1hVGxy2aBHdFuGBuWDcW",
  "key41": "46kVWjHZLdKZUCbQVGEvvExqc3XBqAxtNnb1NJmHQ2tmbDgjMhGDViMfU6Ls2jFPNHhHxNYBkLbwwPx6soLv2pEM",
  "key42": "5zQpWYjAeDmEeZQHRmK4Y6vSGX6hPH3Pfqw7TCRtX148sZxniKAkupqm4rFKGRy7QZhPuocuRaHSNw5c8fqjsR8w",
  "key43": "5DwXt8MfJJ8bqFN6J7Cof6ZnQ6wtXYYE1P262EunGbUNWhyJTZGRQ1vsrS2NMwZ1G5dEwgE6AcCDeitDyy6Zqnp6",
  "key44": "hCSeAHGsLeFxEwbFjHKvVJnqL3QuWgJP48q2sBA1uaKiXC6WjZxGi7jdM8dix7vJzVi8nFveNudfrEBrsMhD5j4"
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
