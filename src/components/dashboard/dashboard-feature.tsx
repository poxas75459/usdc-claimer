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
    "3UDDihLoy8C2bFzZHtrJjQnNoipzwnBrCffsTFRGVupK5KSywy92KFVBYogoK6fs4r5yy4sopWkhxBB4k46FJNvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eRE12CkNeBAJq8AmrifByyyBKfnjBWEjkrLWZo77nb7NkMK2fBg9ERyajNpLSZdYXBm7yDrAXRdKgJWBH53JpgA",
  "key1": "5vtZXGQcG1mtVNa6xS3QgqHddwT73Vgw7hQq4abBgaKkcnEzPNVAbCJB526TK9tSJxUM24XQ4pUdw6T91w4cQveR",
  "key2": "5NViB8RD7GefwXraPJKG1R3vr9pi6zj4KzKZ6PiG8HCM3inUJeJW1L7sQT4STfiiNmR6FRFfh8tiVp9wCfCGPKkW",
  "key3": "4G6UEKu3BjmG5v8a6t2qknybrN5h19L8YPqbd7JbiiJ7tDzLsWBcyRcqwSkptVq8xULh684iBVyXj9dGpyZDiREa",
  "key4": "55WFtYnYd1o4Dmmfzskk7ovHtuLoff1BhMayR4nnCWrihpRRtnFoYhqTsiMxmyJMrfyMbuuoTeGVKS2WJvVtfohX",
  "key5": "38WXna5QY9118akbG8EMCe3xxyjkt1ScKnovimndAxwTq84wexQF8VW7bgU87ZQfqy4CpqnxRgrLcFBdRZgxRgwe",
  "key6": "ufAsPGPtWbF6YwKZ3EdwrceTjHYwk2jcc9BZZKWM7hQykcKifaBMeYK4S2S1YG36jC14qkRWPCWgWdSc5FGTEUx",
  "key7": "3pM8izzbahqBWVkyDFgDeYEc83k85dCq8iDhC1qvb1eWwQz2fwZj5yBYyQYjY3cxkXxcMyDv4QCJqXaamiKgitHY",
  "key8": "2cd1Fc84w9FwL6jpP5AFcpcMBR5UTQyVY6Sc5Vw9PXhH6DEJTaJgWCiyop6T4hqoaJZqW1EWbRm5MFpTxPXbXMRL",
  "key9": "5m8DLXdiQg64VHnZ9wwULBZDx9c44UZCv8W2XawNCieQ8DqiuRc27h4G9ihAgaa4dzcAKU7UUcUto5FWBtkTJEgP",
  "key10": "2ubeWdp4TZgqNGL5GFf5hY6BRXEGdJMg7UHoSrL5cZ7xSXiM5K7EeNVikAQ4MNn53YhVycsBykfcvWbC9B3nLDFB",
  "key11": "3qM76BVv9fDxY76FeENmmAXEeFNBeu3QEeTiHbjR5VM7V5MQpx3hHsetsgy9Cr6pQX9xL6kZcRHUubuBf6tuVGgY",
  "key12": "4XdNZtDMdKTwN8anQetFykWBuqF615wzykxhByeZYqXQfQGSz6a9sJjjLXyNKdzc9usUHVaSnxDTKW1MRDE4Co7E",
  "key13": "EpZhkBQ9Rb7Lzfx679CU5Aa57WKzG7dwR536u7UJ8bS8yLk5WXR9HHahzSUK9MC2C5rNVYTyvu6xshpuFF8GHsc",
  "key14": "oaFUzQNxNqVxyo8EAVZH3CorqfqBPJbbw17uT2NSqCR4WSHRjE2ie4effJsPRuVXNmRFzs2Pbwj3J3mGA8ktwFT",
  "key15": "tizZAb6odptRw8anLc99Zhix8eXWp61H5LGkYUwbXQgJS8FivLRzDLSnx3uWmGvVmPNmYie4hu7Yg5pWqLgpSwu",
  "key16": "5ANKgcUpvrRv6MfR7McfUCRio98br2zP7UVGTRX7A6ATgoXgY5475Zrk1EDacXVWNriv28aJ7yWXrqcPMG7k3ELd",
  "key17": "2njr85q8MfRJALXr8LpHcBqJoz6UgKruGxqSxkx9WriZzohLGfNpAKsUcW1eoM8n9P3zMJJvrs5EmcvKQUoiDwjZ",
  "key18": "3PvPrT6Gy5dLmWrmgtsFhNBiHDqbCEdPmBXdjzy6YnM1BxtuNSn5DuV4XaptM2bt4fbsjJhyV7pETjzxKEeiWa1w",
  "key19": "2oCU9y2DmACEaK6Piwr7TcbnFfS1mazyLZeKyc9467bLoaprFwDdobzcrSRfDrYzJRPceZKuYReY7ckt4qqUc7Qh",
  "key20": "3hZKapJZ6Z76f9oTxgSbT8XGLNAfSMUBCJonjHN9zdkpnL3kg9YEzsSyACAAptyfii86gkVg3GaUPE2Y8v86zqNS",
  "key21": "4bgBE718K84Q5CR9XPnt5LixmtxSLkmt5iByXbiJp7vFLKwKWNwAyxC9NGcj7AiRfBNNd4ytBysmSm2MGtg1poLZ",
  "key22": "42NrABytchhh9Bz91L3ARPkw3HLYahLYfXYm24FrGx4xK7EhEnn8iUKafRSKeUWWdq7EfFZnNyKpuMMh1kWgA3G6",
  "key23": "3DMHBSrXNjE7JsydERaaTTpjsEgCffWGxiSNWTGzEGtrQtywvia89jVNVLct4DRjGrHjbxMCJ77YLSdyPcxfBeEb",
  "key24": "2manjfd4zJjpN3ZA4pyFpKR1ocjfNdwZRh58X8Z8VC3bGZqSJke4qo2JYEUZcMkMTTe89AtwszcaqWS9SYnZRmXv",
  "key25": "52wToXDX5FTCr1EEuhpjwHERRz1B5y6Uyp3dnbPozG1MELao4mme91zS9FNuYwSgaFFyEpwDweng63Apo1vp8Ffn",
  "key26": "26ABveiD49gy62pqipfNELZ6yDNDqBtye6kxnn2VMvRJ5J1TgGqgxDiUrVSU1DRpJHVFDMMxhkSNcvuX7kDfDAq6",
  "key27": "3YaCv9rAjwDngL4XLwhxoJSKZHXH2saZRCWL7oi1TkcBKSaGMN1w8cTkGh8LpAnL7gvRGLJ4uF6ujQPQpAnNMVcn",
  "key28": "61hN9JEhA2xYVbJFF4wXjXsU2d6WxkgBzKUdbv7Hzxz6KwYe5kU3s9jv2DTN8mVUVyszM8sv4bMHBwXtRzZayXYA",
  "key29": "5ALCecR4rNBFzkbTqC2GiYtnzQ3Nmrw2ujidZf7NopHFATysKFU5spLMKmPsvL8Fir3NmFJMNgsXQoBWFj92BxbP",
  "key30": "17Rzrn1q8w1NyKVfNcN7DQtFy1mkqNMMxzkWJcXrXmx9qFJdbbuTUx75zjmgBjGyFxamQNzc7RpHSJQEUiyvEhz",
  "key31": "4Ds3RvUcA7Mkgc1dtwrZ7pHyorbqCnYsqri3Wa75HdPGsjBP3QG7iWncu4h83amku2S58vSrcFfgJZBZtHz4NYam",
  "key32": "2pJH7V45xXPU451kJ1fdgh75L3yni51TSqUeDQNJgbH8phicMiJbKZPBYwiqR9mipt6MCeiZ5rkk1pUNgUYVBofX",
  "key33": "3RvE4XgwQpWW1R7KnEiaao322hz46AcGJWUtaTGrsEbrAN9cfhTrjpUWC4ZbSfQ4ygjCAqxAwCj3dEKkqUkAvgoq",
  "key34": "2R97GMp6EWNLgqMiF37PoWYFhZqvSBqzxBuxMm5n6nRnYfpjPYo8KxbnjhwVKMziwSrNqCyEFv5sTDrZweECj3v5",
  "key35": "2zDgPAwmSC9qQKB3kUC65PYSSBGwW8YHXorCDcSq4G246AoyXxRWSnjZVw5RFPn9Tfh7XxT2JVQFoJCY34uWyhLx",
  "key36": "4fasYHDd9aK9kpayuKMKLianoXGDPqXxvzB4eCR1VgSq2onD9KGEeGTMZbaFPYHxe7rEKQGGSL6EdEjFJeECk58K",
  "key37": "2xZ54B1vzhyEFvTY5tE7RRmjj8kHjesX1ANz2W6nG2p4hnDcm4TiA4LZs6BroqdAfx3ApPf1sDno1udbTZZ97AUa",
  "key38": "2XfzpfSH1H39ZJwgrBzJATrhzsSJmmxQWpK4abLQ92RryMYbGcP98v5S8zzrQEPtbB6sv2u3gxEz4uWp8Ay68VeC",
  "key39": "5eeTCdGWFB8oCUwR5U8nZfHh7zHNSgz57FyPEDvc9mxAJySH7zLs4T5oUgbUuAJZQr5kN846TEWga7A7tFdgdfnh",
  "key40": "21MonFu5AFuqZtAV16yCaJDMt6Tc8JWtYEvDjnK9RB2e4yr8xNq6uZ3PaA4D5mdFXCrgLfZp8giJsyEtKEBAp8Nu",
  "key41": "2eukG72ogBwq7HV3YyTmnQj5nQUPpKZHfqfiFgoJjSRH414NqHkqsjTuR9iMzwFF2UDxcrCumQqnLNtwaUVatbEB",
  "key42": "3th9EuGgSghhFptuQbH97tXVmaUmM9iAiQHU7NEBEmkbP2PxAyGeJHfziVRVbbtU8giU9C75jGgtvQZzUEdB3thP",
  "key43": "5LUdnu7rLCGmzykKnYjMineGMj8ZvWLgDjyhQSGX58N9uBw1EJPE1t6HbCG9b8e58pf387iPGdHAashxoUCqoSFn"
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
