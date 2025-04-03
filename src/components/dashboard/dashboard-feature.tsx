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
    "5Ed1D5kpU9vaKsxd8yniPuJ4woWLSMaTLjLMPDpCc8HTy8NkergJe13c3WrurbtCsZg6mcMKsFg7c4aEmUzqvuhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u1cjmev4GD1KPpWv2oKoZ5wbuqhMrspEVvkViKQgcxh8EF17TNBGbjQf7iwXxyMrdn1jybbd19z24kjeBW9HrYu",
  "key1": "sqymJqEGWDjAHPWJf6HwvfgAC8zEDBw9fgvbv2FUbXryk5NLxbSFhXtHvMpR8WPMYZhS2QgaaWkJENKx1aubhDK",
  "key2": "38fCqc5UvNsqx5yQwBFbWmkXJZxHMV7BFUnwgTd88sn9e1jk1or7C6kDTXgks1gi81yFRoXKMNgATZG6DZfaMFna",
  "key3": "39854xF6TvTVfeqzVWEahhpqRfFys4XK6pQw1xbKMrpaPTHk4CEuc3rgrFDw9bqrrb47xkpFGjnaVNkSF7xJXjMr",
  "key4": "oCtjxPcG6Pw5U7MnEe3hFr9h3f5eZrZehN4G8FmKf4Tfqx4hCosrSmS5uQzS2hdBp5dRJc89CZqKeejknT1rkWX",
  "key5": "2onkRXQzVRRLgJXdGGY7BFDBtnE2eMfx9wRQ8DoSjYrbYvUuzWodPuJNopqUnZw7V2xpJ3EZETKtun9tLgMGc6mS",
  "key6": "5STT1nBgrB2eaF3FDSAuee9J2hWzSmtAbNgihpmGJpMbFJETxHK5t59npbmxCWcije74fCrSnFUkiPDbhbEBPsvQ",
  "key7": "noq3Us3rvvTCu9qSeQpV4WHNuSi1h2GHE2o3JdEZTyGnu7Y4bNkrbKBWApF1FBNX15SrQWRBYQqFqVDAppgzbFR",
  "key8": "5mb5WjccJ8KHMYPFkt8vvErdGR53Yref8gZuMjvkhsxcNyqnL1uxtBuodKckgoezwdceGTS8dEc2UdoPy6YHanp",
  "key9": "jn9vVhDzwPuW7phH6uRQdmAwyqchv61gqoQQ82rQAZrFWeyyGRouuS6gGAaaudjACcYu7shuTvymbhbPmxXLmy3",
  "key10": "5ejFUAXo5PfcDZZsT2Z1VUZ8wU1BmmhHnKPZkjrbfiiKG7KU5xPXwHqY1wFCsUXBqDTmdN2oWmHWrc5DosBrP9VL",
  "key11": "ViX5htgnuMXdiHxFNVsZfKY3dmeynjDAwx5Uv8hjxwWM2XD4cfUPvrUZpkj8RKvJic2qZaYQw946JdPhUy2Soog",
  "key12": "G9AwvCdKoqfYhKXAvQq18uoh6rypv57iVJQHh6sRsihaH28obEDZpxxg7cPJ6hXZ4VRnnsJHwVKSx3estVkaCQ6",
  "key13": "2TCFo4Ewb1KM2CFkMzJtw2os1ovi3Tc7yG9CmRXpZ474Gha9zP5xxJySZPLCKMhUiRqWAYWrZy12uwgEThXE7djS",
  "key14": "2WD9vTjDU78w6WSqeypCGHovdGpmyyS9MsuFL8LPQi4gUoDhMzkrRhnTQGNeLRAiisfqjsKZuDjzvwWaTgrYfvhk",
  "key15": "2XqPGLd7HPn378SdxhCca5bghgnzXNfKLffruuoyXrBsJ3GveDgDKbnXF1zjXT8hbyNsjAhoNXwVSpUC9MHQE7u5",
  "key16": "3n5jqtaKQFsFVxgfJNQs8Fk6kBWRm7Q4BpVc4uLHaDwLV9uThY2SgDTmdin6KKNTLzZ3pa5ZuQKUmMRW7KDg9KdJ",
  "key17": "5sRyVeb384mEg9Bp8bvk5S7pLBX3ZGDqpV5pben5NHEzz8ScYKjZ7N47548wPWsmcXQGGVTustRYyeAtTRZkhyox",
  "key18": "2Mqh1FsYu5g7Qa6X2zNufQfb965kb39wyd2CLrhaY7yXuNFKJiA8wBcbxQbedyesrqqjQ2v1WnPKbMuWTsXrPPUz",
  "key19": "375Ctwsr6LSCH8C7NJAcxtdpud4u5vFX8Kaq3pVmxXp2yAY54J7Zm5mDUbrjQwyDmiMn5kqzQkRfVnzDn4rVdqHZ",
  "key20": "RxzRZY4hWxaUrAbPcFMUpBxvPYRntmgjyNE5Rb91kr2S1d4DGy2sfeT9qQmRs7HMukFi3NhfiNVfLBxTr3Ejcbb",
  "key21": "46opFBFsEd1bFkev74JooSoitEin4EAe7Qq7eoqZSS7EqyGKqfqpedD3kxzKX9rDA9duabeEJw9LCVc7dStEsN8q",
  "key22": "49juYjqS3yqtBSoqCp2hc4QycUozpXyMpNGwhsy4sdwDzXLG9icWpjTAxH3NgQ6YBhLwpK1HSYED8YCk5sETXrdF",
  "key23": "a8Ntatmu4WfWkuibJxXXKy7MVNWgd8E1XmrdoP9FesJMgSrtqvife5Bx7tH46zFnGBDHSFncdijEarYYTRvJeds",
  "key24": "3JTtpZg8FgVj3Q5C2cmmCkp5X7UfE914tLx2JqP5CxHSbxxYTjfSxgLmmEiGBQXekvEoXXFC6pRFmEpFCinAjinC",
  "key25": "2GGNdf39ScRTtt5jYLzj9BDuWp45M66MbfFf4tNW9fpzFyn7xYssQsb1wqSp2yeP319LKag9tnX6A9XSB9QkVRpE",
  "key26": "2NaTYWMWpRgRPT19zRzT6Y53onGj8UUyBw6ttqJUp4D7ABnEsueDnPDtNXU6DxP9rzwrbL8ZDavuZ5pDXrGTCTpr",
  "key27": "4JcJmpWSePo73DTFuqwGqtY31DUQB6MsxPej75gyo3f4VBJHfSuCd6jwkxYSavrJRt6SiYXGvnBJWCW4QmJBJ6td",
  "key28": "btL6kpKQVeCdSKkRbjZNytLCiLU8q6AXFByeAauUEfSUMoMkLiNjFquKCu3DKLa7PSVLX9evHeQZ5LEASsknXgK",
  "key29": "5dj1a36ABCD1FbcA7K7QwAma59vGrMww5NRxeF1MN338Yce6sP7UExoa3A1Do5ib4GUVb76pmE2p7bLccWKr5D5",
  "key30": "3GCZF89my871iPdtey1bsREXp3YmPN2AiXUkcGYZwUgCC1aZd1igZc999yh3RhxfXjgStKywW7AVdSQavQATZUBW",
  "key31": "5YtxAdXZDCYrDJdAsVnzWpwbqZnmkJuATAd9hznC3YStSqzf5NiKkN7vcecY75xdUjzBNKdQbmxChyEnYMX1WudP",
  "key32": "3bgtgtEAA8uVbAcHsSWGnwKFS4HigkzTLQuyS1U6VLMPBHktzJxoz3r5X8oe8HgwAPXL5WQDEmAaFhuB58hwYyWD",
  "key33": "3HeHQ1h2AY4D6sgmRTjYCUXuHEAScCWeUDDjfXkWMukjHsvXJwZRtLM1yZqSSRxu8dmuZ1nLGWLLE5KwxA7D2TbT",
  "key34": "3FroYvTxFNW3YLow3rWiddLi9gibhcR2tm7PoC1cdVH6SUkQPY1p1Su2MnUwUD9YgTG5VcRpQ2e4XKMoUyd7adWB",
  "key35": "2VXZGAAB1SSmWABkyrKXce7xLvj6q43mkAgZEE6CjNCZjXtnNR6GUfqW2M7zeyaiyu2fQUHkpNaaHn1oVTkffy9X",
  "key36": "3gN1djTtjzRpo9uqvaecMMnMmhVyuudr319PB7KUyam8HoECwFAaZb4sCmeHxa96kf8yfznXB1xwcgAXYDHkBoff",
  "key37": "6Ta5xQZgWGmzG9Fq52mzs532hR28YnEkioUJbU1Zwngb5YwDqePeJzzuJ8iwoEBjVXomgtdMukeComVKWC5CUrJ",
  "key38": "sUj9hibayM4SHPNbFLBDq6P1Gee2NQ2FHJfzjyNGrYTxg2WnqSTsCHvjcvybURz42dzd5uM9ScfrwpxpbLNLn8n",
  "key39": "2bgx3dPca1L8MSBNiCuyptDbdCKfuE2LsuCdokdWA3ktUuVYGp6o1886m3U9fs8c1vMaxZ7qWKvAY4A9TeVYhNU8",
  "key40": "34c7jBdoCeVVmaQdSupSptocn2iMQAJzMrEqV3FJwkzBQymfinsG1gB1EsHFDPSge1vcSWxexEha3ZPqH7vkKzP5",
  "key41": "3uma4i5EfB9JQHWvxpmAkpQ1E6ByXWSYXJLfe5qHPAnZbucnNDoEwNiNYXswh3YdXwqoaANcCt7EYgszZdh8i2Lv",
  "key42": "22uFGtNL9G5h5hVWLvoDfVya9PUmG5J6jjWCtbJ1qrLXQQaesHxbMrcaQBqgnw2hyV8fK2uXY4L1Hdqh7cKeFjHA",
  "key43": "5JmNZuEiPtuxMNESwrh1sAmrdSQ3HMcjFZ1ZajktnAMT7zvPe4hVuMvxyud9VViEj9Dgwzx3qR2MEoZZX86SoiZx"
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
