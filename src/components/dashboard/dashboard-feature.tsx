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
    "5P5iSBMnCnqBxf6qpbvWCh3qxmScQ6KWE1g1Ko3KczGkiWuEDGrxQJtcfYVuGKMHvcGQmu8Vwzafw2EuauKLRCSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iSQU5bP1VqNri3DTnH7w3ts2zeAz744hUEm3zSKMSccs7nA7niic9srAgm67aBzYrf4gZ4bbiCoE1x7CnkSuj83",
  "key1": "3rPH8YuvubZFtzjeCrYiCo4s6jbMrTpuJumHXfsia5XxM9gpYd7TtpEZq5Vs6QqZ4sfztMwAMuwxJdrr6rgZC1fm",
  "key2": "4zYcGtzDAbpRDocv4CM38Cb1EowYW9JrVHVKFHujhzUSwXq3BMNhWM8gc6KviLbiWCxfAZZJX58WeP43BLPwJChH",
  "key3": "RoEzkETs47x63VYcPUb1fUjaspu6fmvASujd5ta1SqeD3cZAx8xtWgnnCRkeC9CwXoc6EyVGiCFKpdq59NCLGwN",
  "key4": "5LRgCn7AQtVRRmBMSy2aWsgxSyKqQekfXR1GvUQvgn1V7UnDprkqQZUMznx8Y1HqUqBznEbVmspkqsde7zUy8tcE",
  "key5": "2BTBibQvQ78XNLCVDGpGbzJZqomWfGTV78tV75JpFY9vGJt5qsWCqJePUkyS4hWvQHxKeFVuHWjAThTHCYgrbDok",
  "key6": "2n3GUf6Gy9zcw8wRf43EJwaJR8GXT3waqKeh6m2y2TvHwogWhpAhtY7q2PgkxU3xvvgNsnyQjVWzXBYrE5axmtRK",
  "key7": "4vdjxSB6n7KpgRnVuKsLArn1sxf1E3h7MXgdvPdNqfakitppwHvEVzShb8sKRr3icZZVx1mhNy4Yrt3hZQgn9scf",
  "key8": "4HCPpW9De1PERnSZsmbQThee5pHEdcpVGg1uy6qgM54MpZxqjPuUE8cGhfYmiLzLWdioHDVbvnBnF4f6khucWroM",
  "key9": "4GUCMA8qSd8cuuWcJDiQ9sSTDw7dxtMNJtHxLKiXFGfKp6MXkrc5hGEeq8GnpGLC1QkELvZncatXNnUdmJS17UMf",
  "key10": "3qU2JFgRpwLYFzNzA6y3y1zCT1ui3Q9cvY5fuAaJcRdoFx3hqcMAtSs1SQ4M3qrhHnQptC7tqPD433K8dam6izDB",
  "key11": "5DSB3Nj6fNNSoxGLuDXxJ8ydx16q2WLMLG2zfvSFbRea19oUVyHzHTuFAy1yVD3heXfwSpwoBpyP8qgf4RLdkx3a",
  "key12": "Wpv1eNPb2TEJ6fpkTEA81cGLLLStv7HUtVBpvnt3jRXTo8cpBK1WLp4sDK4xyZVWcEv6bHfeMx7M6oy2GnyaQNu",
  "key13": "4qRfHwR4RTx2LTyfFc9gNtXZRucUgkqzGYpfgyKpfkBYmQFSintQzrJbMzt4TwNTd66ZWksXcj74LKaqeg3jUYyF",
  "key14": "3jAtZVvj43dZ2sKN8sYQ1DMQdwBHmTwdgDJt4s5syNLoJvKrM3qHvEpgbNWmCwYPGcShWwYchJrsv2xPs55xsGvC",
  "key15": "2k5CyjdMprPENd5k2r4HU5mui1b84eaRf1K7SVsctP7ZKTbipqpYC8KPMunje4DbU4QFLEi7fcHrqyJw8wv7tv99",
  "key16": "2P4xAojoXBRFm4E6u6ESrNF4jaKSWybXXExhT2C1Npjjmx6moWKr2x8vbRdqRt3dctf9n394GjAkFoSeXu1fUpZu",
  "key17": "UzmkAodTWm6VVjF2KdADSi8XzJUy7e5Dr7FkHXZiWwsSBVpzSbaW5sHaWi49L6YKhoSEv1XABmpuHmqmdypvUFd",
  "key18": "5eQ1j9wb23Q4q3txDfJ3uu3ZiiD5F1rYKmPmMdJdKkpudcnxR3n7tUCGrHYMoGAShQ4TUhfRqb3AXWXKb1UHW1Dd",
  "key19": "5rdLtMHnYn2MiP8gtL6igxSMQ8Wo5Z8thPJQmyGBEBBvamZu9En4SYj7t299cmsMiQmodVBwY6vEbsivoKaMDqBM",
  "key20": "SjNNjzkwh2btPhqmbbvHy2rRNrDfPRZNbUbVNcXbM6QaNX9smBiHsDJ6TDiGxk1Npgy7XZXJ2Ai8sxeWC7tLcdj",
  "key21": "39a8vX683fmUxggU7GZhYujFAnF8mwFqpZdvX2sBkFzPJoEvM9VKAV6mH7MoASznFMiRQHtjwZqkv5CAGbwHQ1EP",
  "key22": "2qew11YHZngR8VEmjupZjPuZnrsEVL9TW9kKjH2eJVmHVrJnKiLLrWnY91HqLLzt4WjsnVL2tN1xYEspH91YY3eM",
  "key23": "3pq7HwR8tMiKLabDehXEkZSPse8L7GUC6JLmkkaMs2WLLxQLRJbnDN9QgXVvCxdEESuKhvUDoKaxk6FmRey9N26s",
  "key24": "V8MpFth1ibs2K4WUDeBiW9qCS8CDk5DWTkiHBZAbqtUvTURQy3548kMXTgZPA7UM4BJM7U26HqPP5D17Kdfe2Ni",
  "key25": "3pD1RAGFrygKnKQrPUFWbAvKFjgrgUkrtqVJXGPctGGrbbMQMMuHkr2sHz2g3oQR8T1xhZLiMZ8PVsA7yLH19zX8",
  "key26": "4fhSkWzBmSU9F53NzqKmrjQBxRHbpySRpeV8TaNRCdLc3J4sW1go6KNbH3PeYcq31wZCGwJDMh2yteGzLzTWpfta",
  "key27": "4mX4Y9pV4PxNi5RK1mb5QX6c2jfAuFmgHfHYMYL8viYYCe1dA3cA369UP1QpfF16yHYg1RFQNcWmKDd1E6hEaczS",
  "key28": "4Q9Z6phKj3JYq2w3PVRjUYpC6mLurzL4BaeroR8DkYNz3NQKbPBPq4dXSbRwZEr7uu2JuFVUGFnu1ZqhdndMrWpR",
  "key29": "56u8HJFGtCuAbLZLTFx53CFqTYu12tpQZyqLgP6xaPGv8TfkhzaGfCva9qDpWbtPPf5pK4QhqgAn4JpVf23zvuCU",
  "key30": "YVU1knXjNJCXWcMhUkHdBeD22TPRVQieF4H6kFhBzNKpYRHpAamqcciMn5NQUWumntbBHvUtuQbGc9p4gonAdmv",
  "key31": "4bMX3RhWWNdnC5RUQqfJMceBdaShCt48SHMJLFPaEUfjuCyvACFW4hfwkwqUHUotxaVp6AhKxJLJr7wX4MrtZRc3",
  "key32": "FovhdugJbAm89264YoUENjkmdy1p44DLqvqbMXFCnffZQ7pAwLowtREB6BtTWwMyQQYSBjrRZkGpoEh91DUfQwE",
  "key33": "5Jpt3R5VGgB3pb8h2iL2tecHzTFP8ycyjabqaGbwPGtfxpkwUBQWAGf6V5Uk4JdQJvCZBxB71nFRNL2u1YGq8VHW",
  "key34": "87MaUVuS6iNkrK4kuQL9eAa6jsBv5pNcjJbZrpDxysKikKyGyao2b38Fu9va3wXbpcisFoEheGwMRVUWV8tuUac",
  "key35": "4jmunF5SVh1pR815pF5thDKp8gUZE6gjTZj5AGTToUBpB4A3NsYUfUBoqaFyaoqoS8kqL5WMYV558uoPZHHFYS9M",
  "key36": "5U9PYJHoV6sMri1SvN7GCENhP8bW5kw23ESYX52VYZy6o1gEznJJjXRiSWd1oLEwtRbkvRQbazJYPqCuZMzhmX82",
  "key37": "64z85r5S8RJSsiToE6vS2fp8C9L2V8ju1mHcVLQLKfskHvJWSpqwjLHuTHveb1jKsHa8bQemXMr4bCLwDsyoNdF",
  "key38": "5pqq5X4LhHn5tvR1BAQ9dyspRVH9Vo1ae4VDWypmVuuzrVXDxhAdWVG2Vz52QRLKhUmH5NrRdLHori3GEENzjzWE",
  "key39": "GLhggXGPrAE3KYkaEozsKXtxDz5o4ugMrrenAs3qnKrsoYRygfinJPZJkc1ftzRr4bftpEwagxkX2UFcYbppPhu"
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
