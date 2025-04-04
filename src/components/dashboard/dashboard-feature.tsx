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
    "25YfpS8o2QB3nxgP6d7k4q2nEUtAiTwknE5XHruMVbLAtUUP9FtcgAyN1QbH2XFCG9bNqVGsgogkhziSBqR7eGHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29v1Yt4ySXpuntCEYxtz2WT6rhDqGJWm8auYNy3UQBWAzRRUML5PZy9hn35ui8KGcLcF1M8sViEyFikpwm2TnwTt",
  "key1": "2QzskKrp8cpjZp7Fuyxdjt3JNWveB6cHpHQrYf7smgK6V85SwaHtM1YCtAU1AtV2kzPeY9PgSasNk8bA7xMWm9Cz",
  "key2": "3KNQVxH6iLpGWUqK7gC8D9UKERgTgaqPTf7r8Ydesu9gPn2a6ftUeZVtz835wHWGAUJWM2VMBtujjsrNa88tVpKC",
  "key3": "4yhSe61JNUVH5PzjaGaP8xijtx8Uw78mfFh6qXBKvrjb66fsDEZ22FyYPf48spcc5h9H1bvNaRLc4ZVRGu66Js3s",
  "key4": "5T97qUtGFXyQcUZtqgSenXzLtrKtbJP6vuz8VQbucgpwpAS1FxjduvvhiFe2XdHvaZqKhPjkoxUVuAdQ28AaTyPp",
  "key5": "3tJnHJ1uJvHRJUaKQY7xNrFGVnUpmNkuSSWBzbzmWRkx3Yn8XHpegSyX2qqksNZSH6beBBjKZh6DqKWHJWRexA7W",
  "key6": "2PodsoXwgP1rgejeQDjt2d1uwDUMzqo8mugsJfSdxxa2dGE7BcncvtWy7zQ37r19HeSEHXHw77D8XyJ98JS9WY7j",
  "key7": "4FoFuM7mrey6XATMnBGoyKDthTPXxV2xeD7kLMuktQfFQ7bHHzzW36WdjDeZpKiaqDGXNZftktEnDoS9i67XtxTT",
  "key8": "2BoUyLM3AH6KzETFB3T6KDTcdeEHdasq9thqZVW5WUZk4hUWciVTjLFyW8fyp44GFc2LX59MfxrFWaijsq4svPd9",
  "key9": "5NHZrbBywY6sYMR2iX9y32cTWi6eKucuvLE3rotmBcak6bigjGvdA8DyA27KGcSrBEd6QWnGc7DEpTmvm7A6M3MH",
  "key10": "35H3odA285ECUAefU4Gk5MTnAeHXSaZhbKfiuxMoQ4RRKYPA2cnzr5nEn2fEbZGdui4SAsd83kP9nnRxyHNND5Y2",
  "key11": "4YKmCtXjjHhQwm3uz6vqwfDwxS2iBQQHUFJwfs5h4u3HLJCcnowtxiwAHsCj9BQqpxZ7J4JwLf1whX4i4nAWyKJq",
  "key12": "5hcK5ZNKr4YRYwEjSCqWpQ1jTnHNqaEzGukUcuMsSN5NcMPAutA7dcgNCyEUTkwxGRQKt9uVLD4kvkF1V2Nt6iK2",
  "key13": "3CwgodJnPSaEkzsYyNEVFn48hm7DoD7US5WVopmu8CAUUP8Szyjjfaq9KZTfeUeN1xSMKE1VxXXvfrDFX9yEBfHH",
  "key14": "3gtzP7WMTqopHiDc3yiJSsfGJWLxq5MbSNenZc18WramV4dNDfcW47rnQvPhsDaXW8yPBo6QzJ3TNL5zMAgYqJfi",
  "key15": "5xvZL8Xp99uJ6Pn8NMG3QZSAwRUNCY74Kz6Rg29gXaSW29BfTmBbXXfySnUV4aFbZxnZa2gJXwfYg9Q82RQ9C5gE",
  "key16": "47TnTGvCUfBxfxogRuNAWVRk4tLpUsQ2qVUmGUgLSHHffND8iHmJ28T5VT7jQbmxmWnimX84UAuHxuifuufzQVNz",
  "key17": "5AfwVB25mcwdktCFzRiYSu2W3uBwJmxgMLmUMKrQLisGqNTBWBooSPKubSpLyiRksKqYXqmxjumQS1APyA3PfYZj",
  "key18": "yMLvkduuTxFFfoRoDivMZz3yV6L8GUYSByomo41sPErKC1EhngCeCis3TUDaPj3kgkjAFKnsxw3CqKyJfc8GVpL",
  "key19": "5JMxngh8cMfhNLiVvP2NDHqtsaY5LWZNNQHZDDUpZjKhVQcRn2Hk7xqVfutfJjeWQqMbd2puy8ZRkuBKruF3GuN2",
  "key20": "2CRSQnnMKhKVQkKL4d8WM5NeUpBsqE3KFd6ZX7vAQUX1UmcyLAmS2PSndhwpjBsAhLR8fCcckU9kpubAaJvpFUai",
  "key21": "31jT8g16CnSi8N4RC62YgysMnZJzuw3Txn1jy9CCCf3QVEBHyPTkfBkKWgxvYA2bzhYLvaijsZxbdeq1q9LA5HSg",
  "key22": "4nuVQLEpaUVh6LjJmD5TFAe9nWvDsCa8nPFz5ckg6r2i3TKcdJ2tcSAq8WdfSg4gQXjm35bR7ya6UE4fsnK7Hqeo",
  "key23": "3xLJBHQvrHDhp6154zoCQgJJx5AcCt1jdBT8VWsiFPbXq7BEJDmfShF1Sjo5YpS2N6ewwnTfNxZ7Q46WWL8jqedX",
  "key24": "3z9qoPxZBV8H7fFFGRPxAnC2XfccZ6bVVrat4bSwmzs32mXM5cNSmEbRVkkzDBo1BxiJTinaVhzk4C8iUBSRivWF",
  "key25": "5B1xmj78BgfE145D2y6MfwmehCdnCH4zp3sXUJtYpUJq1fzhQGJZGBHcJNKVsUzqajpQ64W6xqfnhzFEEEJhh4YG",
  "key26": "89vLevQCfLfyV5erRXwuiyRiBJM8phW5cTkDHnGPXmP3Zw5HYgsX44FekuwsJewVz41LZSstqWToBhgF4K9A2N4",
  "key27": "4oekcGKvyvEseHyZmY1wQPi3Hkv3kjJoQJK77wKdFhusU1RbLBq63m7nihHs1Q977We8WwdMmfkTf1cWwGjJaMTP",
  "key28": "4JJTm7urXht53c9EphKU31wWxgNvkG2G95G8iFkfj2kX41FnTznn8To6HH8je46ebBVAwAXK4ufZMf7xXGEcHkYv",
  "key29": "3Ea5pEdnGmofGWcnxYwhataB9jPsWxKaAY2m5BSRMo18hX526Gkg2T1C5XDSEwTr7Gd5V1qg7GU6RZoiCk6wvnMM",
  "key30": "5fKBbeKH1yXAvNRfhBjHqrzKbNDhpHyk2CipMJTcavYh1GSq1D1aYb4pEA8EDnsfVNX4KnypuU3FhWJhNkg1uob",
  "key31": "5brkPWdMTeX8ZNtkRPfHkAVpDQuiY2Pw7xbL9phKZdf8hazt8C9iJrZki3vNahmEV1vnPaYAHdEFGkSLWFSEWYBi",
  "key32": "5Z151gtWMgCBFvFiJ7uHcpehtb7et826Erm9yRbgZEhWhspGq6oreACz5LZfZR966PzgKRPyXppFWiFVj4qKQALx",
  "key33": "2G5uNibfiJmhmvvFMtnp7F6AcsmMczgRzDf55aU54DhE9wzjQQovwjiwKk4JdKGpWa7eDHiq4ok7SAxxriLhcSgE",
  "key34": "5YgMjfCdKRZf7ky6PmtrFc7mF9S2HLkLtLXStt6g1q56efkbpdkpRw6PpftYw2WckivYVNyLM2pfxgvjaLsNH2AZ",
  "key35": "5p3zrruRyPbskajm2KSa8oG5K6Sfbhbn84dvZ9Dz6KzeL9mLYysmovxQPJL4fnipTkZCmhaa9XVnpWM2ZCsMhhpw",
  "key36": "3jAsakucYNgrghvg59YbmQnqEVBb2t6vWuh4ht2MMHr2Amv5bh5YbY85B7RfVYeqfcNaWuHhywT7ZrmV5FK9uRJp",
  "key37": "5Z3UCeBnTzJ7jHniNFCfzhQTnueHdte3gUD8Xs9zD782ULA9Eodz4eWhbHbXs9vmem5Gy5i9zr4GcxWcMuMUyZ9h",
  "key38": "4odjzunyuCDDksa3CvJ1N9Zs8i24Mh8mmk1mrbEH6SrfkJVZGjnJC2C5gxG9E8YMAJNKSe4cqpUuHTqoARsLeASk",
  "key39": "snqCbTonY74pz2MMDChac27vAouS31hT4LTu5brcoVmrUj41xFT4JqB193z46o1pmLMnoKUkHHz5UdSVwyFg2pu",
  "key40": "fPsjhPHCbup1QMMfFjesktJKSKnVYV24ZWvVPzMPXGF8dRq2mta81zauoMVdh253443C3BDCsHztHRE8HiDDV7D",
  "key41": "4i8nJac8L9jSxVXsJVxDUgU1VfqgEVTYfqZdzmJS2kh13wRxPepVDiBSkgbdBEBG5RrKFAPXVbiLBuiP1stbvvmV",
  "key42": "37D6EJj47y7MskDhEJ8Lmwd8iD3buQSdNmF13efKpQKZME71nMyzvMQNA4br2EgFwFkuBPNutABbXEHrL14EHfFr",
  "key43": "4Ur3nhwMWbWpnzCUiQ1TxM3NPXhB81JkUwJiZvbftt4fSTrdwjCPPJ7yeWyAWSKSUEnzg8mC9VVYKe7SkTc3hBti"
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
