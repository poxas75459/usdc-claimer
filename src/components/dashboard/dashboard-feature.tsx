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
    "ssG6N5p2uKWFU5QMwMVe9QZ1G54qeEhLcigzqQUQLEzBqC2rRQQsaPMsRjVPSkox5Hsmbo7M9r4Prurd61ikwb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53JReUD72nJs2ZNeCu4qMTe6iG4oXjbTjHcETKbWPwQM7eHYKPFxup1G7vjSU6oBSfp8y6sHzPw8sCrugyY2EN3a",
  "key1": "4JSYo6WA3Q3FjCYevF1WD53uLtAVfSyiV8juq58choQ839kPyTJLKyvoXuMS2GbkMFpxofNUj8ecaMtcNcfsr6HU",
  "key2": "2QBZuVU4rknmp9rGkjm1rauWSupsWrXJbb4hBp3eZLupzaGRtNShGKEFkPu7xQqi6A3RvGpqKE1ChabCYfXHczhU",
  "key3": "2EwRjUJNGZTZ4dfHKXYYLqk7HohK6fwVcCaQHVmT6ZFXk5fGv1dJfu5aCihzRf7ai5WTBa2CCPdFxRKFZaahbrtG",
  "key4": "3dXi5c8Q7egxW1qq8z7izWjGB4jh7VnoYSuo5RaAJCW2N28CszNy56dbTTZKS8XgCCzQmSV4b6g67karR7GPsdGM",
  "key5": "2VvyY85DKqpBm1iaRwmqEytZSVFvub392C4JBKV2NPQgokjNT32SfYzmrBSxRPxv2yZwA3i8W19D8FskAyRMtYGV",
  "key6": "3vvKZaWTuFi7CfTg1SvBWBXw3nAnWBdbdRzcggPnHUmA168fFQktUi37ZUuKf27mkMV9JHVLBodJc6qGCPudx1Uf",
  "key7": "2Gzzg2STkubqsxGuY78WomEwM3nJwriPdEFTdLGr47Stqc2H9tLdXn9AHY1iqcHScW9ubYFnSkLeyQqCguyu7ssy",
  "key8": "37PW4pauopHVXg5CDm2A7cGSDUdW9V2ipFb8njxuUukruakobyFHBM8KVtzgzaAbt8C9SW3MQCQY9t7MnECSJnUA",
  "key9": "64TyApeFiAJA2jfmh9AYbB8rZHyQq9aEqR2feCLiY13UtDBQaiWo1u9tBixTZwisWmeBau8DvUL5osWKV2Ch3u3X",
  "key10": "5Vz6hBn2G9KPZdJCkSok2SaynPgk9NAqGp9Y55HMJRbRRSvrABu9qnqQ3b28LeQ9NVVZErWYsddWkCmk8563vStP",
  "key11": "4HUyiELuzBWod3BMPCcXPMgVpkuzxKAdzAwQ1KMQbGFb1GcaLuqyF3wKV5PKyVrypGs9FW2vjdMPNST3KVYhWc4r",
  "key12": "4cRaNDs2gcdehqq3AgSKtpPBedTAk1seQGgJDQvTqeXXC8FvB3nwfMS1WFjH9soGwieJVePSa6YfFVYabeDZrqhY",
  "key13": "4t2HEDJQzchmmgoci9Yb2WwjTwNpEEsZB6m18G7paaujv6qea8LyicPk56qzBpMmSYTR2cUa5DFQeD9knbieDfDp",
  "key14": "5ZvN8EtYcYwBaYfpavUjR6NRkmfTEhuwxVrJYqs22NLSyr5cbRW6DxwGcwtsomhFYML3bEx4qChqVPBDfXSDDYDt",
  "key15": "4gnoiAcfAurhvDssNvTccZUKHTjvJWqVwm614wqAQFYs2Wg3TBQ4fH5XHmpehpXqFyKQ5XFmGuZ8EinK1cVquB1z",
  "key16": "5MkJMvKC8kXVFhjGNEwq9H7Ldp4Ev97J3Sw9HusRbKB3kVByWGZWmqq3SLqn88NPwjujtAii6efnUr4veUFLE767",
  "key17": "614n8N7zfcNr3FjBgVEFXXHfXBTrzdV3L2P3ePZuFuzpTeQn8iTG3c6ByyALXr1bp4GhTKbYnWQD2LEjYTHd1vUY",
  "key18": "t4iBLaaqF4JBexkHJiiTJkDHCcVPytQtHY2z1quGTfGJi1Wt7RjFz1eGLxY2epJ5BpBLGkwGow9c3oVkquBNrPq",
  "key19": "3XmGVDQPP4zmoMFf7x1yydTFqRdoAW87benwDtGRCWJqnLnNwLmtcYGCJX7CCegXzBrxxsjXggyHeZy6bt5CwD68",
  "key20": "77rh596Kv8uFhfvCDSSE9CNE7yMeaJ95PYNRKbt1MUqPpYytc1vBmAch65YoPoh9zLbVLkifSPE27JQpnRwLwBQ",
  "key21": "5TwRhaaPQdxHXbCcoCSmwzV1g8URFtu2rFPcARGWZbehRWAE6VcoWR6JUHePo3Nd8XStSrHjdUpb4K7J1JuzCsbV",
  "key22": "4FTPWtNo9LdAhRqR8rXQkAN76LAuzPt3UtepXh362Uq8agWEGYUnAFRuiUWdVLXRt1yPJptHKHa5RSQT71b1ctJG",
  "key23": "3Nv5YZHhRh2vr3mrFCaiQKKpfV4VqyZPF89S5tTCTvpZqvZYkjqNu8rAH37xPs6rCvEHmPZ7QuthxMMha3mxSvrn",
  "key24": "s1gt5M2cJrDFeCcPRNasYuVEiXrtNwKhvXqdy1x3nUJJ6nihTimVigJ7Ms5Ycib1dRnShbDKnmTibKGYaXSMtqP",
  "key25": "2h9SoMtPEjanvGkFUxRRojvHnYdzXbw211RLcVhmwGjbNVH2TJx73T9YJybG2spXcornQFoTUD2CZNXTJcFhwYZU",
  "key26": "PpN178kb9aXsP6xHhZvvebhBZAxXddtNQuAt7mNKKnTAaZuJpN2WJhoL7oCzjgQEyCPq1xip8XgnoZ9xxCD6LhV",
  "key27": "5jFcN9HEQTCgSzXPVrVg9VSr58T7BAfPvAYrraBzVvsjXt9hE7bcyCVYanRqcchivY22jXDEjZzRM2PrSCTmwrXn",
  "key28": "aAJPTtjUjMd68ufZDmXiZ5ekpgV2S6o3upACiXEW5Kw5KcN8rTZv9nRRic1qqQAn2SjoxJuTH6z43QoCz2CPmkX",
  "key29": "2izhqFTeGMoy8PniPgNkkkkHMBk7vszwP5HL2dfDP3CAx8GmKxphJrYkha6agjEk8DJvWZBWBALr5tHmBNWSLa4m",
  "key30": "4GRM6Jd4V4XaMm7ereGp4QsBgnQmdfSDqu3Z6HjcuHqPPzfYEreXr4kChu8kx64GjVvwuj7kyZRgf411vbcpgT5u",
  "key31": "2GJbaFaRUbzaBRzsM5mfZoG7arvHSoEchpivUpr9jm45T5n7H57LzR7JEAnAwDmx6ikrDcereKkN5sXdJb7nriNp",
  "key32": "QwU7JCknTKeaMXY9xmkQ4EFt7KbrjnpENvAjQVqL6G5X5vovkbH9wU5DqR5V4mCNxK6oWMpE81w2SbbcovY8VFW",
  "key33": "5mq7usT6vXt5irjQRG7t1VrVZ488P8b1SbSjbDe4rh1i3N3HJFqVfi4hjEdnnZLMPyFtxTVZtYHLGaH6MrWjE5oz",
  "key34": "5Fg6nPiFvtFJXYVEm6vJNRpE3doWY9BdSswj7sWgQY4VJ3ZHLXczHiJ1yhL94xe3Uto8TaoezLEAXH2kDNdUsGzs",
  "key35": "5VqL3YvV63sqzjHvtf2eu7iyBdM9i98SdLfyXaCjW7QrRaScDN62aGt8YP7mKxfyDk7C4jR1RT9NT23squDXEt8n",
  "key36": "2VEdXP1opJUja5DrPYyNy8qu5vRsYv3RtNv4FEo3cSSvqcZ9ejyYnFuXVxbFe5BHUMvfdYp8DmKrnRkmXNM9NeGT",
  "key37": "3NroxvshKTsMZv73ffSo8XQatxwXABCh3euzGrRQpnh7fs9SnZ89HxsPwXdAhipYNKBbN1wfmoYfTJ4eGUrEBM3a",
  "key38": "4bApgsJkymALr8HRjA29tavGo7ckGE6iKftVJtTbcdxPv8rzj7E6Z2nK7w2pQWoik4AvzZnLeyFPxf7s5f97h1iX",
  "key39": "3Ff9HQV3EGsLFPQ5vnF8jyFQ4aBmJcWetrDNbt8ZiPkKPnzhgu7xuXhuYQs13d25sVQPQRmTq3gzR6RwnM7seJ4Y",
  "key40": "3wjdHYyBdV8PPbTEZqBrZxMAh6kdLDMHbEo2doYBbp7j7PTzeUTtqbtJCVAUopPH4fRr7Tgh77sPJSuw6YKE32CD",
  "key41": "3vCx59TeWtEQaVMZLyDCnkCaUUxWmcp1X7QSkfv3NVb3dPg6rgoKGokydwdt1gLykDe61PxUZKz5px4iii92kfSC",
  "key42": "67mCa9ANXwJquSXrmHRjTN2HH4CNb1FVekDzJWtZLRuNz2DfyDnaAQVZSrX6A9pnUsoTo94HWoiwgcupjhDY2ymu",
  "key43": "2YcGks8sPVXwjKXjg16JmBez1WvN3Cyw4NQy1ziafRv64n313YXFhNRk6r2PveXVXveNX3qaZbiWseLDvUhF8BpC",
  "key44": "yRYQFveT5xQrfZdfbqdHNd9TwJwfKCdrDvAx3yv46kjL8jf6dFfzHypNXhXR632af6S7CarZX53ruPFBwmMoDHy",
  "key45": "5CK2hU6Sh9yYu6JsQRZn5fuQcuuf8S116teMa5Sf55y7fqBPEXr5znEJfNGuGhVXKS2FEEFcXtXSb1FQUuym4kzN",
  "key46": "hBZnWibHnjnv6hM1JgSwfxmZKca11d41nmK8g2c6xug3zLxxESecwoVDKEBBjWm12DW2hZSUUHx6itHNYqbLJvo",
  "key47": "bkiQSTNuJCaG1rork21W91BXnELfU5pZDik6hByS7MSXTZDR9v8mqT2ECPV5rFvtU5dHKEUcT8kJSFhhGG5Tkxy",
  "key48": "41HuBx2xUxCVfsz8F8ALWGvvafHeJN5DoK24wsUsYPDKdfzfH2DvAx9fHUFxkFJ8zFzCaoqXRmucYMgg7xwzvViy",
  "key49": "3dNpRDi2sdSEZGACW7dQvMbvvzqxvEWNirg6X5cbqfXYpTLatA4iKSLHP5c9SwoDQu7HA8ZQhotDDiHrEfHpaVd7"
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
