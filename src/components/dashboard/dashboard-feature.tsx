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
    "4jb15VqMd1ZmY11cg2cYt7c5tSiSgFtonyZPj7s2qgwKQ1hZQ5cjt4ZiBu3FD9oyN1EnXr4tRBJBoyWBhwzAjLo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JQJZkZ7pu5Pvqi188NhFskNvCA48VrSyAJQLyjaZpq5hcmfqzvynFhwGwBh2AzvFxwJTNBcVZ8qTkrVJSyqysG",
  "key1": "VsZ4ZteqM27kD2AAJBLikrnkFKP717yBDooVAsHUkwdZsGAkJ55pfvjGTEBs5TMMNny8tTPhW3vvBQEeoee6RTn",
  "key2": "6p3VUjTYm5Rcx34hzv7WuA6MYyvfCZSUN7VgjcmWK4NH42q2PrPhKvbKatH526hdjqA6yc3eQhgrToZBmXUgoq8",
  "key3": "5mqQfAgTBMhUXMAznyEpX23ZqeRPVuWUJEhWFogaP4UduV2Gj9PUNBuRT3j8m73WuT28BEqSXx1rhtjMtA8B4RoS",
  "key4": "4j2R3KTTPNFq8MKhrzoQxqKfsVPxHWxfN8soZh918P92vsygzTdV5rt92vxN9STkstjQncqpXcyvsF6jqH5G6hQK",
  "key5": "PE8KZSEnUJXn9Bd7bTBhhNqtebLxFjb91AMCYVQqpEWtYagyNwXLcF5sSDhh74kA4iB4fqZFPvcRamy4GDHnBwv",
  "key6": "382gpMXS5RYazWkEKyrJAKggh4A5AEKxppHTWbvKtKXpobcR9xF5YRBHJdQgxQtLV8NWC4nVJ4fJaWeWeBeYxAfw",
  "key7": "54afLN1yYyWNvsTLyCnMKRXVevuQxVxk8wVqyAXcejkU8rUwoBmKhhCpPC5x8k21K9RQZszNoEABEj6vuePgTZyc",
  "key8": "4zLpHr5oNUvgmZLBVf2sTACXFBX7swautxrkLw4o3vCirnnhcrdtFhK9mfBnd94WHUymafv6s4boDdSoTY5C1r1K",
  "key9": "34w2M2kG7gotwACkTYMSBcaWi9VkJXn1sqAxaUk5BGj5nEDwRTyiPXt4QCF58yTGQ2gUJN9WCGpvTNtCcvr9K7Rg",
  "key10": "5gYCkgUSaSUxAA1192EPySQdA9YfcmZucJnvLT35skyzrdRszv3hiEBtAURZLouYTwUsG2aGzvT3quYfbFrr6BG7",
  "key11": "3CeR5snue8rypWDCu3wvZckkjhVC3dq8FXphHBfZwwUpAVqCwtDkkeQ3xGWkLD8LyFifKcgdiXvB1MM2P9qeLnMt",
  "key12": "3qWUE47TN56aHYrnPaPDKDEF3vsXJtaDK7izbYnKUDYM3y1STs58qTADmjcs5dhoUmn82o6En7QFpM38NUUP2gki",
  "key13": "zuYcvsmoYk6sRkMCtZFHrM2EynAi7kLGyg4sHStnGFmLEawyc6tY1y9e8DmTBH7pqu2JjSAAUVprY4NxUP1HHjz",
  "key14": "5RSufTAHt4NAQKeNT31Xyv7LHj8sNoa7zCY8eHS6sWAiLTdejCKqLeCRzgGcUpohKMy4i5o3eLu13r25n4h2UYe6",
  "key15": "4jSU9gJ3thwErAbaEsCWU6tueccq26bTg7iUT36gdLpAbAqqhiKfgFR4rmu2f4hHdwU44dVbKQtydDRd4jcSNS6t",
  "key16": "nUZyuhzJxtJbXREWJSjsPK8syzucEFfQu5pSLedRP8NnB7gkySzMduJmfWNYqi8vxAbnnPPk6YgiiANeFmgbG5W",
  "key17": "58pcd4jimgPqNCMoRALqURBbHfEMFVW5ztDtiDv7V1TBagrgDz5pzBLtfc6cr7F1cNTmAEVxn1iqMd7ZBUsvgAaY",
  "key18": "5cowtJAXnJ8Jj1WaygMuPKXecWtwW7nb6fDSnpCCZttTfJPF3DhMgNe3iY9DWkZ6kLWsVzPVFbBQ4SH1mjrYwKNP",
  "key19": "2xfdhmyNz6bQRtzY3EHok4RhA9PzFwar6LdzwTowXEhFFGg4mJrF4GZYv6GR97wKa88eCxdFekUunGJsD2E3Cosx",
  "key20": "3PZrWGJmuZq6tsZhizPh9p8WBFB8rGDtnP5hvdvCo8Eebk1ju8VfQjdQBEQWjMCm3HbrCo8wE4dPB7GmFaMoWiyR",
  "key21": "5UwSs6KQEWRehstbsfW2qiVYLVrVPCERAUEsx6kCHXBSrnE4KyYWBqsAetRyXsMCLcBJmCb3NUQtARaE3qia3a5y",
  "key22": "5TojcCP2kVdTMmpDXsTLdS7orFhfCFGCFFimaTGMtUTdLYTcErXGG9VRYWgZDqPyhZnW4vf9z9FL2zsmU6WLR55V",
  "key23": "5nNjZgQXedbZf1FkKHYKomTkVYSB7hfNFVeTr3ysfwGukpA1FWMhQWfeu7q9drBNABJjynMNgEWA6TBwUia4aqsu",
  "key24": "5v7by1tv2KQPMX5gkeyo7UU8vijV5YHgTYh3ACWAdvy52KcKsRcwP7gg3TBktxmcjHazf7ob3QQh5FqQnuauoAyU",
  "key25": "5eFhJVSY5KhDFnBzj2GyiWzALhSj3JzKxRgSZXWRLLc9HoJqdRDY4G2rjxQmKBAH3FubWKQSHBYkXTdHu7FuXgUk",
  "key26": "5ZV8NLkZhiej6N9aUUSvCZeaqsFW5pogbEonYQTkEnAX95bQoraVLSVsF6Db9JLa8QX5QzvQJq5XMj7uG5FUcbrT",
  "key27": "32Yc5mtiPx43tN9GoT32uKevmAA577b83ThE8AAnesyppuUwEcWwuWmgPgNoGgZ4RDuMNP8GqbSAeM7upvwLAv2D",
  "key28": "4cN7jToo1WoUVUUFozGZNmkQzHpfmpqJQ3ejmKH1CJ3CYQTV9mCJfGxGpSk9iohebCgP5YEk8RnrwFGhWPYJs76a",
  "key29": "jfuhdN1FLuWU3LEnRryXQMP8tojd6jxBx342Ec3G1BMQVmw8nUCvWRWvUM3KdHYCT2QzhPHusnecRZRxQzv6gah",
  "key30": "4ujFEzkNDkZvDrtHpGzajFvfktFMpeJwXuDGtfXVCPPJzsgaeKxmSWUVJ1FqJ1JidVWMW9UrGmbxG8H2VVLw6oNi",
  "key31": "kEW66Q1w1XF5iZ7Py43Drp6zRKaDmNwsGaM4rW6566byzZi55vBdp3eScpjECMdGMkcA1VPKxrLNqUCdDqLoXiT",
  "key32": "5CJY2Lsg6KqiyiA9F6QewgCrLR8isHan1fUem1cqhPUEcd6cKHHgECGWtA6VT6uK59R46kxGXnymGqC8wdTWaL77",
  "key33": "2NL6Q6KY195JQRfWuTR8nGL68wwZcEo55zh7wZn93oT3XHUNjk4uq2uwAwevukBg96uJiGuj452LYr4MpojMmdpR",
  "key34": "5kejHmwaHu5mKo64rcELPrLM4eookEL6zPnwPoW47WCp3uWRrcN1yRPbiJSUEDuEfJFfn3UZnK7UcVYt4sPpAmbK",
  "key35": "3m3Kxm5ikXr9RHUoPLbNVLF34L1CkTjQjHTvCYQ8VV8zxExAtQJ7FQD66ZFrbCyhvUgy5uxtHKcwvjPBy4UXDH38",
  "key36": "5KAy5HA6L3FnUDqXu6RfPKPZnGuzGTYvti2Noa9CLCXZVcBahT6AeiBN5pEmWvv7L8apbmT3UdARMHtuatakqhLM",
  "key37": "3mTnaMR8STiVieQNa93G8X8HCgEASkWAzkjXP4vXPLaBfJViQXLnWqSWXtxJhA8BQyqCgD6pdBirK2ok7V7tFDMh",
  "key38": "5USqznFDUpHNwSuaQkZUZNBqWWrKCq8Xyv1Dsg2oJrPD5gcutkp7NUzF5yK2wBav4kvkN71KxgkBL82DqKV2Udv",
  "key39": "2nwu7HRviWvXuFJSDDvnxJKT3h2vn1b7EeomP8rXS4Rh8fQWmRzD6oSmxQ3rmfTTiR8v1kEUuiQL2seESjDqMbvT",
  "key40": "5KhqgNc7Sr2TtPdBXFJtjozH4vejdGnDDHwPCrE4kSkLuGTExRAQdUqj9LXgr8RuRyZa4q2BPEnDwwa6YjRSeWwq",
  "key41": "2o7kspbeoEC38n7zXXH9eH69mEmqsQSZoPopkBQSW5w64YXhGkU1rXjoRMZfKfJP2tX5kxh4nsCbSFXtfscPKrf2",
  "key42": "4GK4yAYu3pgTrhCyg6VfNQNWzBG5DhiqYDEm2MUuqijTwaF7UqpCzTf1UE2HmN6qJwrAP92ZffZZsKsy8V8QM36r",
  "key43": "P1osRxqpTNnSWUKayvy4q3YJmMqv5awDYmEhNKixnZZfsFUNTQnrtPcxDCYuVnojekTavAHGwPCditqM6QzcSZ6",
  "key44": "3UQNSbwazPqHGwumQjxvnR3rjTFR5m3NAe2iBVoBTYBVBbBcBVF8ehEdXzZLueJo3KhRMHtnVcohCkj5fTxiGHKp",
  "key45": "kjgnThX5ujbt3isAqGAudjcQ6dprzXvCuQgJ7KimhfGj7TiAzRxpUBkF679wSfuedJdSjVyggqTerpQgnKHA9SL",
  "key46": "2EbovpLSgkYwnydX8jnCouuEwZ4y9E9k3DJonn5LprmLPbsur2xMUgBdBSzyLff3bQR3tUA1fr8LcRJ4iEFRXu7t",
  "key47": "4N126Mr9JCw6hPqgobzUVbSrMw8GosJ3dkLRaHqpfp5gyBhvMuthe6fjCFPzuvZ69D1jDQXLQR3juXWcbtQVPuL8"
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
