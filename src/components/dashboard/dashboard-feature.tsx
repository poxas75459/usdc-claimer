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
    "3zr2CNmzGaNwdqrzXxqTeUgsHNrbQdtER963UZ6P3kqoN8xLhh4u94wmBqAEv7qZ75MokmoE9o7eaYqdKa4J53hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XSzzFG4PLRJAoNx5f4A87HstVUYPnUqeTwmysCRvsYgtzJikRjpv4Bbcuhp8HqGMco6eLfvkoSemTxUjJvruopm",
  "key1": "TgJDVGWzmxGRTLyEGQFPbb9DTpZAHxLbjaUyXFkHBuoDcW4RL4yyrBN6j37jH3muewuB4ozuAHLUxAFnx4bx69T",
  "key2": "549xCWwB9nt88rdqyYFrQ5awsMzPWcCkvGRJ5T58TG5D55Urbp3JmMH2RfbK6mH1Dz6FV7P78mYNQsVpPBUSpyie",
  "key3": "2YSTM8dGJREe6Yq66SDz9BXDjmxYWeJfCwJboRExdSKWNf1wC92nGcuR9zZ3Qrd5JaRdXPdcE463KMsdwg6fksLQ",
  "key4": "2SHZ64wXHX8cSwWdtum9Gi67m2zkFRgn62eHZ4m7U9Bwiz9h2V6XYmrED7bjJ232MVCjskyBhJPJEA8T7oRvFmQf",
  "key5": "5QQzhg1njd9TXeEtvoHx6cSrVenAr2X92RvyXL4WVzvR5KQHzvwshCkX5hhPuEyyRZcxpDMGGkJCFjL5PYebbY4w",
  "key6": "5ADvSUfpj2QLs9sQx2RKhcTTfHYaTofDW9FsyPU5nKEMHAk13yZpdVu5tBuGACNZmAxx5oCjnL8hoBjuFumZ2brD",
  "key7": "VDEXy1YyPE63VTKEeSybCM2p9r7QH6oAsFFPJUL9572cciYrBDLU8U8ZrHXyvVaCvXkMg98JYrteojbPdgqipdt",
  "key8": "4dPHPWSiw7dWoXDwEQTadNsSCTXUsQTG7noWdKhxx4AicSN62cLJnDiq1K2VjhB6mUsNXHKWQhycXAVLwC84uoEn",
  "key9": "nQhLncjCeaH79JxyQi6PytiwavuMP9D4CRgCqw4mA3Ch5PfWyP6RK7NCryTTziJRqyDBLAu5w9nSodkL8XqXKb2",
  "key10": "3PxizWJAQ5J3VQEscLXV9yHBS91pEzuFYeEm3m4E1YshRHbtWhSgVsXQjyFEHwWfNS7HH7wCykUD8xG9rBtcwjra",
  "key11": "4juB8bBueNRBRMCaXpTc9japbGkK8yyK87x82Rgtiwo3XCf5qTsyDeWTWL7KHLStnkDg7s2biNSo8FhpJnK4tjqP",
  "key12": "4KGNCsKEF5FNJnaZEqU8bPiHPBNvkv5QjhbHCePXrQpASfXdM4UYfQJSaRZF7V8ZkVFxJJrxCUfSGzHCVq3nHSwk",
  "key13": "ZJh2AHyBkSD4j2ttWYXaKBABziDmEabBUmRidiJWv8EkQTT1fyS2LQLC6gWRm9xQV1t3aPUBmd78NdMYUQbQx81",
  "key14": "2xJmEbGJjMVJivorNYKM7uqcvxFhCAV8uGUdCHA7jxfAcfiNWpVkB4N8Ny7SKrCNPWHxKq6t5wyZeLGgdM1N7gWj",
  "key15": "2PeEpxCTPBg5SkChqxjYhpQZGG3P2e4kQPNYbzzuGj3k7kAmhcYGR69aQjKWYmAYbgP8pBEFSVPX5sfqf1ACkDhf",
  "key16": "3HD9ToxPze4d22ATE7fr6Wf6snp95xURuuurrAXZCVpDb96zTBXPUgjEshptGTWM46vXnHLDLbKS9E5pwUYDMyK5",
  "key17": "acYjh1h9r8edSAGCYPa3167MEoqpQYrVwiPPMVuB6UseGPnvypWjRrwVuygpopLV6g1ZrHC9ci4p9n4ey8unhpL",
  "key18": "psCHhFJF2fBDL7hHBuLcwPKTV4UHxAZmC9Qqk6yy8nxJjx81tzHoTWHZxF7s5eJMKpp9hDFzfLSqfmf3xbm1BEo",
  "key19": "5FtXuxbuRDLecDxrSz9jSW155aasizig2eZ11AxKZ91eYP6UNq4qSKvFkxC2Cc3ph1ngpoYMTr6K7DkehXaXeqpJ",
  "key20": "4iJqo5AmJtnb8XTCUQCUpgx4MqdaNV2Cd4Rj5MnT8RxHsq19XYwy6RK3FyQiJU6dZDLrQiFjuY4nL1xakzZP8UQw",
  "key21": "57jzonWqnDuMEcHzDhWvNdNJ9hSesXu1hvYt87g5AHVKzxXAYgA7v4vH87mJjuQVUVQ37UVEbePCsUd3xzBcbodV",
  "key22": "296M5cuaTMPcx18tJqJQ6pvzQqGH29NYsBtvE5QKiAb3neawTuMTAVEoFe28HybcEbtEn2q2SeDVGPkzTpbze2br",
  "key23": "3S2jA6LDWqA8cRXgc5LWFjJyENDRXLD8Tp1Le8BT8MmVEMYMce4cUjsyjqURuGmdoo9HYKXv8FXpNhSaMkyL4RQh",
  "key24": "5ct9emRaghCS6E2z78HBMpZKAQM1qnyJg3UU7b3nCNidtE2TYrncaAgqmpNuq6cynp6jYiVcrMuVkPwy1RvpbAna",
  "key25": "2CQtR8GbKqeoWyL3rt32bTNNQrRCg1rU1WwsGdeb8mfEhoqpAWeMQdrKKK7Bbdpt23ggi9Qij7mc71ymUa67tiXJ",
  "key26": "4RELRr5s1HaNJ9EGjeiWaQBQrc762g6a6CyyYtJuVPgNz7oJLEUJh6ZZAm4jNk8NmzeH4mtL1nuMqzn1W4Z4papm",
  "key27": "CRpKKm3e3xKHm3G86rQTHPZ5e8qPeVVRqKC2tvQex2kkziQ9BjV7ToApJ4KF8fF196w6ZJmuwo6pRCvGLwgY6Hc",
  "key28": "3DPuiqrFCQcrPKqbezYmxmtmG8FTvr21fiwv5qxcshHYmAgZv17y4vLbs6SN4FDBJ3a91EExnaKGLDeWEtWa9fnj",
  "key29": "3Wc5C37tB8FHRqQQXuqbV22EYCmtx8ksM3DeUc5wr4kP6QxehJN56z2GPanaP6CgKNiJ1gtRpHhzEXXGw7F531HE",
  "key30": "3ShpRsh8JFLsJzYwGSZbWhRLoVmXwjMjL5yMx5oRxmqP45CsQG6JZjqnrBD4TMw4UbaL3VuGtJakiwkQMmm6c8cA",
  "key31": "2kkZGNkiCnCvyBh6n4YgqgcDZoHZLPkrShU7RWPKww5i9XzBRtDqZgtywdNCNT6sD6kxR1EijVwKP24bj3MpTgAo",
  "key32": "4hT6ZgBK5tUFvNz7z5sswbDXtiNbyQ1SUprU7Pk35diQpq5yH5jRdhenyXLPc8ar7uCVG5pusL8QDXnqp2RajWNJ",
  "key33": "4hmAzgPfmvjzngDpxHkoXnbXJxuaCVYgnT1eAgnTFhz5XDoCQffhdGSxVhkCowv5CoaP8TELyzVsRAQYggMC2yAw",
  "key34": "kAM7VH8A4GjuY4BtczkWfSEFcwDssP5UDf42AR1wa2ewS4JstSndHvkKNepccvgDBW1qnifAbdX341f2fcprdhT",
  "key35": "5nNXGgNmjT1N4d6npqiMWHFCz6m8CRD437iZB3U1ZYpg1jiufZk77vCYW2sXpuK3rv94BfaehtQn3RhdYVGTcfYJ",
  "key36": "psnrixY3bxRME9qWruDTEaHPqmdFx1qt9RKczWY77SLis64C54ESbsjq3FdEBx4GxUYkPznJGg65Kd7voxhxBs2",
  "key37": "5zQRsLNPCMiNLqEbPBQgx1prxLX6VxiecVJpySyRNkAvWKZGCPmU2L27Rgvur3qESTcQuS2fwvgxARCbU5Nhpjzw",
  "key38": "3ZU84pY316v2VZP9vecby6tDpywzHQh5Fi1gTu1mEWHAxtVsHtX8xWHG3nKndnRHdPJ5GmeXW1gXX2G1cFPddHXA",
  "key39": "3QtqP3xZD2pkQG7APAtAAoETpXnMHirvvVddRwD3cE55BPgo7J6EtkpCddC1PSsURcokSy88UGJT8iKVVSzUNg2G",
  "key40": "2ARviZSjdCk1etDec5FHvRTs6pE3eAjYMJ77BTAP74zf5x88HrotNgbSwuZCuu5HWX1shxcmwAQ9UXF6m2Tojip5",
  "key41": "2pPEnrrNKB2qKGBbQVNhaYDH71oF1Zfee4PfhMRXNv4LNa9ek5B4LbnWyc6xwCs5iLGhzpj5AbzwfbotFhi4y61q",
  "key42": "44C8waLidiDoAkzX7hVw5T8cEmAfGRMSUcvoDdGEGzCPM11kVAhRe1tdwGc6VQx3ptCJaKymGysN3ABeo3cD6t1s",
  "key43": "3eAom2zp8XCRYddZ8aMy1KSV9HmRLaLxaALE1j1HxrpoEu1WsZQ9gjzmqdb4E2zBxXDSfw6j3HR9aMo7XscKndg9",
  "key44": "qUDSbwcKYgfyZWSk46QkviEJhYkCg4m5U5GoyfqFd2LjZsY6W9FWXWYvSdzjUJP3rzRkw6LSFJxySjZ3QtBSz54",
  "key45": "3Yo1qniW5Esz6kKRFNQXPV6UjvwqusagcqABztxwY5ttEcciDiKuTfqsmsY2aegehFrKuqLHxL4KLGWq3m4uXuKm",
  "key46": "2tUovNzDqE9v4Qx89ffLoPUeRugzDgGNLDYhTetcCRec2cQHiB888pMoZBrZUFdqhSSbe1A2DC8E6U6xLLnbXhF9",
  "key47": "3GHGQEFKAbnDg1gTSDLwDi4VSKJRna4VUgv17xkqQ4WQgXFfCWz3wSjTJk4QWyW3MZGP5BJXzzuvbwKcQHD6dX4K",
  "key48": "3Lh4MJngKVYDUtgzUDxtynbtXruh1RhTrdAWUfCKgJPj1w6AP3oshTnXQWHPvsVRgeZrwFb8wciFZaWnTCCJ1VLv",
  "key49": "5yGzPMpygDq5A4hReApNYeDKZLMr5BiYvQ8XGRq9g8ZPJZEmLA5HwkqMo7HcBqEcGw1UD7DiNFT7e9tLuCm5YtQm"
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
