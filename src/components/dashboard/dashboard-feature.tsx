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
    "yFvVPHMz1SXvvt7yR3kR6iyiAfssc66nfTCmX19sFC3JmHydJfpPem2szmZeQXZBvbrWMaVnPd6zmdfLZAiLEdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ss7bfmnvi4aEBmS3tY7X6oDCmAXXTovFaEAP5CATwxuh1p72Ni9obufKz7CAPDpWwpCPnAKfYzJifvnixTgvjrR",
  "key1": "3TjCGjKigke3QJccjX5rA8vy4kkqWXyefwWgNexzamScWasiZsWYtWdLDzsa2ZCxYxN2wgEzUsxu1BJdbzr1Hr61",
  "key2": "56X9fZYGVXB1SZVYCNGmBAfr2f2w9Tj9HrmyCtM5A1ppYprmeSFvSDA8auhumuuBQerkC74RiUKsEtGJ3rZxkxEs",
  "key3": "4JmJxXAYJrYawn1EFoMw5eYiYAw9Vdw68BXdPPTPRHbaVPL5KVH53VLsWB5RZ9gNWU7B7eU76xEZTCj58ENyxcX1",
  "key4": "5aVtEDagCmZhKqEghbngteG7Ez9TKWSuHQQaMfnfsvdMaBt6mKCeBeCH8L49QiDa7oGrk82RMjQQ1h3W4dBDuKUc",
  "key5": "2EMnB4snKPdSxig6ySiaRsAyykfAqya32zxCmnL1JsJPrUZ1msdjzL4PPWX4PDMjNn9tnojdGed4HmrVdQx7GGPV",
  "key6": "4fgHWAPNvaztCEhcGdK7BTTxYzCPBU77pjGagnLrbnADcPvfPwMK5FWDfTVdxUpUacGRrgKRfFnUg66NtDVypz83",
  "key7": "3h6iSZ6jDHtMxGxNWeNRnzBiRzRCn2Qoz55eyRcozHfm4jN98pcBRPxUqQLHDiPJfFVV5aCP2Ag1sLPDq9fwCaPw",
  "key8": "8PPpDLLRHkPo2HfJst2m8v9cqC3gQEadXG6vkZ9dmUvRF24fpsmosURPHzPhgs1vxAmpKLf8ZYHmYvBdDbjRBY4",
  "key9": "4V6KFW6k49FGWTkzGtfLEKBeBbb3yTaN4nL5aGGJcDhgTuejxGvnmHm6Xj2kCrmgEAL9a3CsSCqvLDGo6rhVaiyP",
  "key10": "uwJwh9NqRgFTMPhmF7ARj4XMkmqHcZemQ83Hipec8GxdpvgVEfg6WzwMWpiwBZbw9EomRMfydjGdju6g5DuWn1s",
  "key11": "4AijmnrHr1gLXG84CD9q1aZJcbbTZDRdFoUjF1RLGfmCKewi12Mayg4MQasbQuXLa3uCv244Wmi21oyHzsEbe5wE",
  "key12": "55eB371CcUof3aN7mvTgCHhstHYLzFnMqZKa8TjxGcXpPfJjxYrrtSNpTnkuPK7DYTy7oqPYEQZMtnFyhfcNdZZj",
  "key13": "2XhTM6LFc5EVro5LzmD798kp3UWVonKGadBr2wNxPpzgoMNcbRKaRtj7y7qGaUnTDYd8ZS8qY3urD2cqt1y2YXAN",
  "key14": "cayeJY8PpQtcM9Fkoh4ZbGNdPEsTHEGZU8f2B8DiMxUv7ekFtYXs85AEPDw9QG5XZCD4DfabeCGe9tTNZAuwwcc",
  "key15": "Q62REpVwx4P3KqzGLPuskRmjjc3cV4fZYauioUcKGRL4XbZzLEtLKj1h75HjEiMVKCw1kpPSELwLktEYUeGVrnr",
  "key16": "5YooCr38Pf6HjRdTE36EAVzja9E3wo79QH2MuQJVZU81Q5vyDcEExrVZDkiwzsdTaWqawU6snid9jPwVgAruT1AW",
  "key17": "45Uw5JQfqY5yQrKN9pk8dFAHWawEUyh9hDnFgM15n89EMbjYU58pe2SSpvf2bXRbF4kvmMbmZ2qNHXUF2jVLtBqv",
  "key18": "4sGxjisWwExfWC3qYHpcgr3rqk9WAcbKb31g9WqqyrnaXEAHGt9E9ykpWwZWwCaHdWVc3fwxW5sR3Pw7GZFNEhtQ",
  "key19": "3zbUs6fyBDGuhDZSFi14HQ42qLRANykcVmV5wG6WVyUJ1Udhn6cGTzWYM7QZKh6gAYsZJVRDC9gCUD5iYRjVGM77",
  "key20": "3637rDAPLYAhXinsua7hK3T9AMQ9AxqSbzUNTgeBFwHCLzC8we9LfkGYZXy5ojVY1qefZp1ivvaNk2krTiD6KDF2",
  "key21": "5WdaWcQ2DU8WB1e9xYtLKh9oSYepRUiPhQnWfZ5anP7adqcvt758A3pTLoKRS8cGeR1Rbz9qsZJsBcSU3TaZgTxn",
  "key22": "4S2ZrsdzsWZ6daSczS459K79hWJExhzUxpdzeW7kXmbBDYUC7Har2uuPn6xorL8M9gNL9nTx7ZSidvxmFsK4eYBG",
  "key23": "5Srs94ZjHQyE3xpp4UVtnZrwHZU98bhbxkeVEQrbzvcWJSmgRdrUG9bHeRajamYgWgnGTdfiWoNx63GYBspErcaX",
  "key24": "2qdhPZyayns7Qxbxa9EgFqAXuoP5GXq5HpTqvy5dnnQPVWv5nu5HpaGK1qomBPcZW4KxanvQdugvZnPodjmbxYxN",
  "key25": "3Np6Dgd7eg7HjspHTKjEbsbJVmKJfRYsUFbs7FAkdamXd4mTEtRE3c8qERCZExNhzNQhGMaeSbE3q3mJiJh9os4y",
  "key26": "3yEFT1E9FJAQcL26p5PvM9m1GiHv6mW9zjj3EBU8j225fdtJz9Zia2pqQzKmUM2vmzpmKLYKfxdyrdugx4XPTVzq",
  "key27": "5UeQHHNZLC7TeSMJ7xUhHPMcGMxPQMRcPavaedjpEah73ypy4SGSebMa4dPBUmidfC9n87GunSq35XYoMgfPM3P1",
  "key28": "3vzTYxCeydB3SaQMZFx8pvZt8EMSNzgnGuXhuf7YvYzBpZNtLqYMZHEx5YU69zp2VD1V4rfVYAkorDkirkAw9ZUZ",
  "key29": "fvngmKQ18J23dbAsnXAAhqym6BmXQzLu5gQc8i2Fw9fyk43e5m3AxzoZnhW31McJzwTXmQ1QdUGPbP4Mh9mN2ex",
  "key30": "2AeFTtiWv2ka5MmXy5UFfPDR7yRUkA6XbxrNTAgf37vDKVj1D3o2xAi2cpCUDQ7BVe9GaKsj7vFtCpEWgoV5roge",
  "key31": "3dGbLSNF2iMeDNs3QRmJyiLnU3zHnCRYHhkv2H7r2oBVgUm2PFpxHsgqcwVAZufSZa7LG8ULVRNJSdQeUryqKvaA",
  "key32": "2JiNExEVLBNHacJGYQZtEgLjWuBygYAxnmX9t65MSS2unvmy9xY31GRdvtXktA4sgjugyzqMauEsCvFJWPNkLFW2",
  "key33": "54LgFYk7VQnUbXf8mm3JauaRBG2BLuqB2tULoy9d4nbSHnzH265b6YFYgWYj8HLc5X7Avm1QCKXwzYLKmG8GoQHb",
  "key34": "57PzSFUquy3piPMg27hLm43jLQ9drMp8zzgruPeHqoGY1StiP851xJJW8AgFutevv3fkxAgtVTYRM8SoRYoU2buR",
  "key35": "bcBPDpLdzDDQbHvtcKpCktEKNBRSXP3WwPQ9YU6fB9RTTcUBpS4iKiVrKrphgXAGzfc2DpbmBwKqpxpvDSNt8Fp",
  "key36": "tmASkeMo4SExnC4T6ZnhyQxwv3xvnKCwApBJrjX56o8mALXn4i5TVWXCVBMm7FVUtBnCesGt3trHLK5FCnLb8Te",
  "key37": "37N1AfD7ZbMKRpka5JtuMEVbx7EHkhUyZjwGaDN1JcHCAivfvw7KE7pyQSYYasopMw1zogAGPy1eBBDhPzVWLqKP",
  "key38": "2huxFwDuXp1X11rTFMRzHhWaxPbooD5mbT3kk1s2Gna8gydkSzQXeZsA3fEaTFAyVgAJBY35Zjvf9kHAYk4pXcbY",
  "key39": "3XAWBdgX1bQjWRiBB1Er7JR6dHHmNxECLsnBYTtLTocVCq35zufcxJgM3SHXU9nEZ34HP7Xsxnp7efTJhvcsdtYu",
  "key40": "3HPm2ZehJZmA4Lq8qVQaeox84gFbAtxMePP6CftSZAgMKtA9d3oSFh6y5R2ojaNY6KruKcaotyG7299oRWGyCQ39",
  "key41": "32Env3eDVeniCweP7Du5pJPNWgWaYwSGBTia2RMcYpmtpfmLgjCSpxUgRzkkFowr5kDG8eGR9vwKcfXpfiW9N6Gm",
  "key42": "5XXfLqEoLPEPEqhxWserJ1vQVv7H1SSjPkm7JNdsFLWYtJMaqsxrZGXgwT432qsLfhJ5adNyYCptH2GHgtHzWy2X",
  "key43": "2xSjdw2hsuYvWPF1SSRqEK51nFrtJgN1XeGgBAAdr6z8ZZgCTGthYfucH3R6jbUgrMXsgQxKp7ChaThENfgLxriy",
  "key44": "UcuppDan7EguMszU9zYEnuYoWEuXYssFobGiFWCxYreugNicKQFgXpH64399RqK9mrpXntT6A2WFoY9EyTVaZS5"
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
