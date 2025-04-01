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
    "4JFs2qgt3DbpEnKHrDrYDRn1Pcoz9NTY1Gxrcs7vpHngLKhgaQs2sDyMV9nm5JevSW7GyzcnU7D2YNaenmedsQX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KYLVhc7c4FWbqqzRZ1e2UmbpLhALprXNK3pMJpXpV34bYfSU7JHTRwGkydp578sb45Lbnm6299pX2pnLttYYecE",
  "key1": "3yPtkkYoVUJ8tf8ecD2wmUXjjHVAu3hZUy4My6iGPuYquW8H4mA1JuGAX6Fn9yEMJc9cNMSRrmQjd3QQuZ1BfGzt",
  "key2": "2iFS5voPrRQqDJ4KvN7A7nBz7Ykx7GJBzRStkXJpzCr5m9oT2Yt7g8AKMMqNTtktC4Lm62SVZ87wSUBRemi4XBSq",
  "key3": "4MiidNEkt5T9rtasiy6bHb1K5kWkkZzuqaSykt9y73AuvAykrRUjbkXfd7DqQw7tYhY1EszfjbFyyGyV7AukvTDr",
  "key4": "5UZF21bw1W5RCBSjkab53tKL81zUpMRwctykg1SH956QBPtVQ2JuxMWXXK3U797nFATt4d3HnPKcnEGNiGWiJTWi",
  "key5": "3UXZUmfNagead8Gmt2kKJA6rHuBNKdJG8G1fpx7ozNofuEXxqdpMCCrajGs14fd5NUwJqXRxadsRyJdswN6s37Ka",
  "key6": "4uA9d5rFELnoKzT7bJGeyMoWQnQ7d4J8J3fdRk8Hkx7g3a6MEGZBbg6tAaHbbe5HMD8Awc6hiFoLNtaKRiJwjP1c",
  "key7": "4KkqDSCPje8sz7BrnygE4fUzcZDvAMkYecRbJwWQiV9qG3TKeUfF6YqyQ7KqfJhXHLTWvqsvjYfakSXGcYXo5Ec",
  "key8": "3YZcZPpbC5SQxLaf9hjJSGEHSLe3NkThHWe5kvhbp1uUA3hSEZo8nQvxTCLYeC4Gtoh8eccikzdJt5s1Kn2F68q4",
  "key9": "5CqHnBJu4nuXxu7gZPE7yszoncCSgYaTqy7CtALL3MVz3RbjxS3FWAAidmfwzmXct3tonNtu8dHcd32Eex34SrgA",
  "key10": "5QXjQTACZfDx3ucjBknDfH1yw1zyLpVrn8aYWs93zR15ByPjxinhdzy2tuFeJtkN2fWVo9pSfp9nEscMWbWLpEnG",
  "key11": "3gvYfae1ZFwgMe3LSFeDjQ6E4zJwzwJNGxoBBA2SN5A2Sy4x2TXy4HTdBhKqUj89sMGxXyHS6a55aNwEghtfP65R",
  "key12": "4kPGRDSCVEDohbHgpFgq4JTsdRpfgfp8cHYmAfYDuSGAeeM4aA9E6q8mpLdvCHJyRgiJPTamBFEetXKJMdk6Wspp",
  "key13": "5FkcSGytYLiVhk5T3UEdJ8oaTw78ChBMeEJvJwKusxhmeTphxMTEs7DFeuLZYrYsC8KKj4V9rbSAk2jkRDKNKBLc",
  "key14": "929bQj5yGTRX3jtAXJf7w2JZSoRDsXj5FUT67tEanH4nRHDmQUifiWmW8v8HB7fH7RuMvsfH2VfEfHGFcgfvzSU",
  "key15": "2uaFjo5w12oq65m8vZKTB3ecN6WMUNNTCccLQnDLaJps5pZRHTmhhFxWqag6XuPy7ZkFvh5CvALHCaa3icBBZXwD",
  "key16": "2fYZSVArVfpinxvkrkemFRtLxKknxCDVwxkFdyFNXfWNiFLG56qu2iyLcYzWb8s39u8f2VDQSdxQqNkEQhLpJGzy",
  "key17": "5eyPRMFwrV5Mtm8c4TUL7Qo24p6XxBwr7Drb5xmYfg3cN5ZqJuJBW5QausfkhrXHQeg1JpJCHq8gHsy5mykphR3n",
  "key18": "4YRkJaXPkjwLhhMo94i5mRVG4Cb2Su4qAPWDrB9fL8JfRkp9jkC2zNnUu3bVuyjdRr3wszTd7USejbkzrPTWdnwV",
  "key19": "4MsVvzsvbLwWjBzy1sxtbF8Uk37Wga5ewVDceQFJ1WndfcSvgjPjdWfKoQZomoDmBByBr18e9976koAqnFYWNWoS",
  "key20": "5PohEUkxoF3ZuFRKRZg4EkEXWEEasJJnHKs4ujS7YoBUxSRdbQt2zpC3aoudupkvvAbSNceUwJLAVLDdX77qGFwz",
  "key21": "2V5WhhF4ggp3ZZ6Hk4iVBaGiqYy6mr8GNpXwSLxBTM6HBHXJkr3DZVSDzsGgDgJaUqrj7WAuT14LF8ddmVkPepcb",
  "key22": "4aUgWvbQPL7FtySeWGV2uxqhmuSnXMJwzgVhUB6nm7L7yU4ymfnk8UmHu7TjCgNUUdicWUbdHayixnuzkbXBL7MH",
  "key23": "5UQ9XhLhQiMCYuw6ZhBGSRZCeNxMCpMLaZFRWmt7W4KHwzXyYDTncCUADc9eP47qJmFuzA6ahkgxJSJesy6JaEZP",
  "key24": "3dWcRFBwftjZ42otkZZyNTuMUY9DJEtVYk5et8vywGgEFgi5zNUs8ycJSLTjMway9DvF4HhUCLkbzB7izUWMbyT5",
  "key25": "3YG96dbQP7zUQZzPi3X9i9q37zjBHVBS3vczAwkEYc79ihjSprSi1XQr2RH4M7amtxexmFZk8BFHmymo16yqNnMF",
  "key26": "FtYRd3qayCz1ytkz2tR4Rd3xK1Sp8FamkqaRkFoNWY3UTJ9JKAi19aLwfVcUWu95L9XvB3oWYSQDDgpUM9XMWEC",
  "key27": "1EiJ86g4fbTwbBeEGmYHyPt3r2tqJ65W4UogjcJFkJimsMXBr6yRVcZv6kheLe2n9qhtob6rhLGbPJ8R3vuFusz",
  "key28": "3oXcvnysmVno52v13akodLETSeAj12wAhtF8kUrnhQ7HLMYxt2CeQuD1mEJjEXVyh9cS3HayGENLyN4FE5mrz8XM",
  "key29": "26F6y3bm2RZgwVW2981RRRYsrjrPEVnj3P9Bi1ZL4pfM9NsXhuJ23bsHGyBvfifp1LDUz38C2UA5corABAL7Zr43",
  "key30": "4ryF3E9KZrpumPYYgRMMt1NqozncWRWZdY7X9qELhF5KgvdSy3h6cbCn3dXvS5s8prZoDgS9birpBNYyg2cUpnK5",
  "key31": "2Jh2AN46yWLg4r8H8BkTKH67rTaHFpBB43jt5ZjNHGnWpf2pzEgnAqB9Zswys2Jt42n8Wd87U2Ci3YN9CLW95pip",
  "key32": "2DrisGNuYkxqCqjKcPhTcCLFJaii3Ek6Z7KgmGXomfxqqvpikAgpC64ytABXfvDhKT8cHo7rS5HDx1BSxQ7yWJEK",
  "key33": "3wbggHEYZwhtyK7mfGyXxkx2CSoeDLz1e2czXv4TGvpQLrm8pRLp3oo9yWrgXwvJkK56z1ztkxdAzFvXycxB1yx7",
  "key34": "3zMng4bGERykCe32FMc2FcPcdvMXvsyMuxtKA8MqsUnodAvxYbguuLLGhuW5VqCtyY4AZk87DAwyCSoh3KooFbfm",
  "key35": "Fysy2He2Wt6YZ3TP798fHPdmEZCSi3rp2o8szBWBb97fULEXvWMhLjhRoig7eBTsdurkR34xbTjuSyNYFHPdUJ4",
  "key36": "2e4qyQPKqDJUL8anM1BB3W91i3pupE6hJTpbsa5d5tUaZyjoz8LTGdDYzHys3nyLXnp1pXz4EYfJRCHqwJ4EiWXm",
  "key37": "3Efu7MXm8N9vFUQbBewtmfEjdk8ocoFmF8J9biq9hfcxgf4PF8mZEmiwEvRKPiVMRAKgNfPVaiVxQd8vFohR9AVS",
  "key38": "3zWMzE2fLC4cLeJspv5F7UuzmVjdYZWMvwD99cVpMpWemn7eNj6Nh3vdobC1V4guoU3ZrcjNBjasS6AC8S3jGhSX",
  "key39": "aVKDphB8UBodmjo789CZoYGYdeLhxuUvUbZYMySmAFkUQbWcYSWdJUh9tFZvYe34S2cVxtKySh5UV28DLV21Sf4",
  "key40": "2NeozR2SR2CoGSUtERhnZEGTkXkSiDEDGbe3caR2TvqafyE9LBnnmd5CjGozx4e3UvXtu6BBGf91T3an6Kjhvkym",
  "key41": "4eo6EUYSDwevQj56ggTYTZzk8GdQ1CFbwSoHXLXnASegt5f6SKw19cFYZK6dVie9ftRgdogqoXYWGfPiMs6LTd5t",
  "key42": "4qZFj3u3FVaSdYypuqTe5qFWgG4DJi58NQq5FmGiBDR8HsdWt4YfyAfxaWaoTbrfRH6x5L5nSvHn8sfJJzKhfguk"
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
