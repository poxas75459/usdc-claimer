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
    "3qAChqAZfWPJPbs92FgbWPZtep94Fi7qwt6y19ZGkJPtKhT2ChMbpH1G8yEXnhwWvkFWBMDdsw7qsrmeMUCFqA1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h51xGTV41DunWAuUyeZ3f48tNh79zoqw8HZE9FdZ4ktqggZVaaMZHknCYjrDfSLt8sYnGCKNJhA9rAKyHQSd9bj",
  "key1": "TnpgsrSfjut2MasFsnbDFyRsnUCm95W2Pf4hvuRHsBCaRcwTGALpQDrrhF3QxTMjE8Z2tGS1sybxYUfBXmb82eC",
  "key2": "2mBSLRAfpgC4KC7WBwQKLcTnxHgR7QCqHxEWik1AkUYPpZd1wy3VsszCRJck3F9WvGkWHnFGeoFoVY5i4iutaNam",
  "key3": "4oS37GpJ7Vbv6ufmc4tczoGowyzJLoRTNzFrNid2xoQiRrVT4NuPXvQ3GteWU6DyDvmq8qmakfB1RL1RADCyBtSM",
  "key4": "25kkBoSH9ZMqx4hRqVXLre8JnoMwVybDqHLLJMpXQCFRWAcGY5ZNF1K5qBteFRvNgk6z4YCPgWhgkvUFojM3KwqC",
  "key5": "5kKZUfcWhAgB9u52dTkcr9v3eU11ZrozCCqfh2Fm7k56YRRmWGdEYqec7G2x6WWj2Hv5gg223qXrnNopDGfN6sKP",
  "key6": "2gx74sPvEbk7r7yyWAt8fvJgt1VkdjsVE7joQzNTGLhoG5P3MhTyTe9AZXwdussa8s3MuMhswkTFvJdhRtYtjVWA",
  "key7": "4xftW9DVNW44113NcxWphBNUnqm7JfywqahtVewHFHDemgmSqhPDSQs4rfMuC28wxDfSFAh4ojNx8ZuQwtTLi86m",
  "key8": "4qKMHsjbbL95CD28FKmjk71C5s2QQCwCTWsJdHuZPtePYeDS9sd84VAzZvRzkNsWQHEsqch9swtbWE1cvhifTpZe",
  "key9": "5cvfJRyD7iZUXVh4onmvnWuMXeKXtvPnPpDfgciBxBcoRprrLPv7ctiqxaDba34VXafkE57NTqLsF74Cd9xRLcTT",
  "key10": "WfRXSDQtZmZfuMsFen6KbGCQ9KRKF2GS2SdurAwHtbCbyrqmwogFZU3A3M851GgcQmhAtzUwe5igkccEAidg9u2",
  "key11": "55D7BFM4uXUL6nAz2gB27T9CL7Gops4s5F7DmL7e35KqXzamh2kcfyKHQAUBamsVWYq2Hs4o1JU4ovKCh42w9N7G",
  "key12": "5oAukqqCyemsxVGLfehhKv7ya8b53b6dsSWu1WHqTnoXucsneSkPjbccsvmdHmvXMeyyGrE7Z5hrocNsjn62UUEV",
  "key13": "2TNVdnKYpuac3D3z1Q4U7EPEAXrtJkM6BpJgbBHXe32uvKKyUfDNsbRqvTk8vHdMtpXYeSzCxB3iwaDL3hM5mUTf",
  "key14": "2toLYMd6z6WK2WGgVz3gCSVAoiEcpzD11Z4FVwLKNnNH23v64kfhemzGFZE4bJSZ7R9VMWxUxnCLU47FNvfu7EeZ",
  "key15": "ZiMT1KXvzBV7hosCS69mTQm3UvWpuiJsewY2qtmKVPhjSLiWNN5BjQxR5RNLzL6qszN2eTgwEiFdD7MWTSKA4uG",
  "key16": "wbgh9k4hhnUFaEnzYY3YgrPQGLZKuejgMc6bSQkgpvYf1fCsx73LAazfuyUEi38hJrXFvxAJA4H5fUVPyedn9gS",
  "key17": "5b2uP4Z96zGe7aoJJYWiQ8H3C6LxUEmGvrTBC4r4M9UPPQkk34WKWR1GePhGKgjF8eAurrgDEudiQ1zYWEZRSwpk",
  "key18": "51acAFi8SLuXFVtBUnmmXt59fCUkkFKAKXAuvNunvjsYoiwXtaMeczCdvGbbN9NMWgjSUKkw7LhYeoqMj85aU5z5",
  "key19": "34Cj5ghuvH6dyw3RB5v3SmqTJ5ZXKzC9vntvScteoDfRBWVAoSyKEkxPxz12SVLuqHwDvHYvAnF298diTZufy4Kc",
  "key20": "3f2CPE4yiDmryn68YrCe9V4eGbGi85qKu46EEJef4C7pY835D3PjfNg2sqFB4tTaqpj73hmkgyJAUhV1k6SdsF7W",
  "key21": "4BbD5LXs8eZiPnDxNAqeX2Am6ZR3d9auqT8CMF6RfFQURzpkZ6Yq8N2zf8Wf76NFaiXbcD8LBTuZNZniTan2N6DB",
  "key22": "3m4PR53tExrVBhnzEf8WvsCPYPPVqakvNxqnECh5sQdQzTcjBdQTdmJvCctKqvnHLWcAodoLHTtWRtfV8Sj1oEFK",
  "key23": "4yUFgnCWZvMZ45wSC5cKkMxQAeiFchQXPuFzcZfMfSnCqrP6JrrPFrQfemWRvHGBxNnRnNu9bFjFEJaU9LLthVQF",
  "key24": "C5DiogdHV7rPjLnYRf9CeKWrFh6fmgrXvmHENshfAEztDx4NyjE7byFn9zkAG3GUHisFpnpgQxSgAKbxsRaRDkv",
  "key25": "2EsNwU1yDUUthvNbnqiMd1mLy4rHQ4nSV9Aj3LwgnQ5gPHBf7k4edJAQsGEQvr3kYSxMmiY2fXJazeLodMz7GVLP",
  "key26": "39eWcP2vhzMCJ9Nu5Bp4Kn5HD6BZVXwnbZfZ39exu5b1do99Sn29RHbP48oxhu5oawfnUfo7Lz2qCYbQbK2vYxq8",
  "key27": "4KhyzFXrezeUEmAujaa4Re7ZKJ5v64CJkGDJepK9cHTcMRX5fuBSX5Cemhyk6zjg5JRetNxpQUchbseq54grMVMj"
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
