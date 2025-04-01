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
    "yB9BLhACdqRy5XFY2G9WwQXSRVx3ggQoqEHAe1w7dHp3iTk49Hft7xMYs7fY8mffCbijcXz8dGKiLEdYq3qraNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q9VkTq12HNjFGmBsY1jNrvRPpBnmsz8r2Cw12WYW1KxPcTr24vru94DP447tBXEuqFQQYSTVfDMbK9i7keZd5WH",
  "key1": "3M7BojWWRjtz5jfuUJz4NKybErAWm6h5Txk6NwhBxSbmaD8CxunHs4KAmBiet1sfByxcbgbfEutLHNgmbGJwMbKb",
  "key2": "64DNgrwJREXnrDK93fcxyuv5DX3TPHj7xmTDRzeTESrqDfKbWBokXt8FftLiaCJKcR2Qx8HigM4336a9ZdUJMB1u",
  "key3": "2irmAV7XMXcYqWgFjzya6HHEA5V9RbtZwiE1NQVxe52qiv5C6LWAEcjyR8i1GTG5LfEDRYhTo3sYwYzh3gNJpKYx",
  "key4": "5fPE9i5W18MX7Geg1kDfYgyeER41m5X9pXN9M4hYu29S4sUq3VwBW5eF4rwdcntr3sJLHbEDuoDk3sq8S7sDetgK",
  "key5": "3poysvJJadsAAjY5XumiLAqrmAre5mYe5RqSAvPD5HXx1aYu4nSABKH4ikVmH8iYLVA5BdKvTb8xAp3HZcxS7YEu",
  "key6": "3B8iWtdjWohomGwA6PemG4Aib4JLfFD1U31mK7CZm24znJWR33YAnM583Vw5yQJ1J1fZCtK7EYejbWmk1wu7WGLL",
  "key7": "34BLrXQtNaHDB68MGMVzfHKbXSsraBtAHt4s9DTBBaDvNBCim3ygtyhLpeY6dYTLPingXLZahVJEK1Xf8arxCdJM",
  "key8": "Jt3R1Ug6pQbKfbeSA6nWudPLwbMz585AL7VRQ8C4cRVGFErQLVF7oEJhP1sdAjvsXaWT6fxYRPKPjQxyFMM6YMa",
  "key9": "3PrEuq6QeNJpy2d3yVJbzmVVWpAGJgqL18Et5GCWY5bwRg3i2MB1NSwMofQM1K5p1AmGkpJh5JmoA1ppmyTBc49C",
  "key10": "4ozD86MxmiqKjkcC1YiM1MuYKCCpVY1CLqJPTWKEEbsh8DGWunHuT3xYCrCNHhXaV1YARTnuwKwjkGy1hiVisSSY",
  "key11": "Rk55tixxyvkedbP5GGbzV2fTCtbsJknz7iQGLjMVBfwXFpKt6nFxLB5FDKGwzJdhgEEmJtvaoSf512EtAvD1EbV",
  "key12": "VQtUWeowW8SoiXTVx1ed79WRBkjHvzRKHE23QDN8XqTfAhmbHZ4UbKhJPWT4nYc7cw4S5PGM1cJYdaou5Qt1q4A",
  "key13": "3tiQEjFbUuJi6SLnacN4dKZiqf4B6qyYNZDj163XkZkVUgokhXUNQ4DKaw7ZcQCgsv8zEQGxKo4BCpzRBjnLLJwg",
  "key14": "2dPKRmxK8F4HLQokuw1UomRbMS4E82rMeJzWSxUmh3X9B7MdGkGPsQjMPfgefPM4Xog9gigYHCDNdT7enFajQLvo",
  "key15": "2qHUUvtN5w4WSqUFGHh8z7txWWnRKMYA1m6djq8Nz6UPNUwkbd99Pb5C8dqs2NcWuRqwchbysyCJAWUhLZZqGDHd",
  "key16": "4YRZxELCPXMutgH8ziwkJ52p7PCRnA2mRXEuo7X7TX4LqwtXZrGXXaY83Pj7KbaHEBMGJyYLYPjRfhNcnTKivDSZ",
  "key17": "sYD7SjPhJ2fwmTNJuRQo2wXcUcp49MfzUsA5RQYb4nxBpmEBtJqvb7FRmzaoUEXsc51FXi2iHVxZkNECJa1iL9Z",
  "key18": "34ahZrETHw7gnuMjiZi8LyYEn9RhitEkYcRf3ixbFx1ZdQqxewSeRuafTupXwN5Whukt2w29vQLRkfWECR82s8tp",
  "key19": "48M2tVt4QVkvnYWo1Y5G6BuySapYMBBv136Zi34BdWM5FrGcYHXLiGXaqyeM3Uno6wgeqQ2zGaYoLLrCfCU4Vhn",
  "key20": "4SYoHy2J4EV9zghBLqWMNYZiW1rGezPeT2JFU2Zd4dYrNuUuQh1ViM2M7seMYqqzNQ29zjTA37wVUvPbVzrY5B87",
  "key21": "3Tx51KDUiNiYtgGhu3agsh9NaBcv41Nap6bAg8Jak9uW2E2aK1tFbb9YpD3vgAXAWoyPCxUPCk1bPXnCWDmeLd86",
  "key22": "2U5g53KXQQ71MsQHg5mZ7tGVi29Z4UDo4yTGArDXphiKxtFqQ89a7a4fFwhjJo3nksgjgVAtY6gfi6XWzWJ1KfcF",
  "key23": "2JzG8Rw5Tq5tnCnGJ9rgjEUdAnCxWUqkmHgBB8KoURciV7LRaqg9JNqkNFxrHAJqmpNAgnj6HcFCDWiTSBu2FKn1",
  "key24": "nrRqwEEfcwU4LgrfrMePkKprU5jYTXvAAUAtCxstRBCFCbGUknwT1LWzPAQu6KtFwSWFmbtcHWqNV7EoXjAa5aX",
  "key25": "4RvYnwRBmVh2k8EAr73m9MbrwhKNw344et6mYaYrU5WDg6Do5z2zsBJvTAWS1wLKQs3JSA9mHDC9fy2ei2CBXsxw",
  "key26": "4igfQsBWM2ujrvaPCw85MypFT1yncGzfFHxHqFsy9ZrfzURKfSYtF1YAVxXQnMcknGxARDZWMpW1LiVmyxbDgdM3",
  "key27": "vbuXLC3cEv86vz839wCfquRL138KP6WePCNBmTbf2LMi6sz97HwFHQKwpHq5XX8jXJNsJC5gi4UzZvFibT81iqG",
  "key28": "3j4Sg6cNoYxmV7CS1S2pVkvexHa5BC1XxCVyycnFgiax6nYzcpg98m7b57aEpgfNDcTTa2htdBJ3W4X3fXVZUnXN",
  "key29": "5MgSKqLPX2cgQNcWpDyDBMhm8z51ZuXycdyHedwWMvSnXCYQFoGdFbutM4RgaSE7j9TePV7GedJoFxXTNDJUc1PL",
  "key30": "x3rmMfFvg8M8TBQdmU1ogqurHhtaELb3a5fKVfv98SnF2RjfW16RnD2G8X6SyxDyqqHQ6YA9BtbPnMsx7gb7gua"
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
