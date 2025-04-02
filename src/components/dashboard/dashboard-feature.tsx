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
    "2e5R5ULYh48i1sNvR4t2DXNnrmCvffZy7oeY9DPoNhEDo5TsrduueRpJy1owqpALki7pJ8hqN4UmsDZ1TNLr1vn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bxP6y24cHpLU9qpA5MQ4HrsQMbUesaPKJmfAmHaqX2he3uafji8EfQ43c9Twfu72xshH5F8AhkzHtFLEoN7BAjJ",
  "key1": "2ztko44R74n33YW1AqcEENexUGNUNLqjLC767uXKu5tfpr6B2XUw9ypmcJwymBjGNJTag2L4w3WHHpUnzZFofMVW",
  "key2": "VFveus1wNuYUz8LkAsnTCor3kHfj5cs35XZmstWapFVVaX1z2oq7PgJN5gjECfkrWtD4pwhsvcPCu9nvRkCY1Rw",
  "key3": "3qeyLx4sdWvFxcKWfpbQVV53mns6zinWrJjmhHwQ88uf5seCP2bmUPLvyZb69noxnFMGTSvQ6vvJiADLJrw2vXPj",
  "key4": "2cq2jteSf9P82hcquLBWWaU4vRGtpkV5ezG4CsLHsR6LN7MVQY9FzZxdFvRpXUnic7NLNtkVhyeJUuy77sYchrvG",
  "key5": "5DWrfhVLokCtBqqyYQYqQu48LnzzUQochd4kcw1gkw2J2g1DRy4gZXNwGZ4HFKuwBNcVvatSsnhmP1Y9HKM5V2Qg",
  "key6": "4zitZDtq4w8jjY5BJCfwLRXvDC38G6a2bDFPBzvE7RNgyL9Jz32tHQ1xoZHL3Lsppsp69AjM2iQEgYCSADFo1U3h",
  "key7": "3PBoUpUWTkUreRTRFRmVMi1HBBUHjkppCHr1Hfp8D1CaUa8Dxv1ApceqiiQi8XWBb9Fb2VGkNR42jSBAA7D5aC4E",
  "key8": "4Wahu2yKkohRYBJQdKP96WriNjtgjEhmMjj7DcqDpttDyko33pi9pziQKUiEFL8k9AvVYBz4iVSRCDhYcY8E7Ahs",
  "key9": "3mLt2Rcj3iothvqZLqdNzrZUpnrHEmTdrZhXJhpP4uAijP9NsepZeWoebionDSXxFA3qmapSCctetGVBmkgqT4rd",
  "key10": "1w297yGWPXTK4ZzCqk45PmR7iHiE3vNfAQQM1qvNK69yJMrhx3CFxVQ5BDUCwGcYiqYmMwLYkdMBT3NgkLJF4Hw",
  "key11": "5yBaA3M1hXCZr4Bq6oUgVjnjbR1NNxnftBycexeikDUwrG6LoYAL23gHRSPXgLRbZvExjKqT7g1izHBXzRAiXRSW",
  "key12": "LRsWRKygzLPRcaLeFxAEQdhqNxTniPLrxD9Dq8GYFfMGCQXpGr1RRmz2Xj4vZp6U3trSN3mrAgEvSpaykvTxSbR",
  "key13": "3rwgcA756pgLm2Qse9N1WEnUHqWyLBHuPPLKvQxSw524siCftcXSAhTYB36gUjsEGqcZ81VNprvwHM43pMjRenAd",
  "key14": "4J7CGTyXRFsEzbJ1QdwvwjKJymoie6M2F8ri728EJfxQFemnXw4EHxgWVogS67cQE1Bni1UWm9RoH53C8h277UF3",
  "key15": "3T3wYneG8HuPgSRchLBLMkELZNvgyten8nLcoEs5dRkvRmBq7yXCpRoFYLv8WEMq4iV5LERX8qoP6RiSytYEPeUe",
  "key16": "3tsPNH2Z8dpunoe9awU1KgkZPDk8LAKUjkaN77bnDn1SWYyM2zQfEnEWksNtE9aU1DE6VchehXs3BXAqYwsZeRhj",
  "key17": "4hmRY9vYhnajBVhpuHcT79znxT4J2UiZvHD7yAFKNmJ6M1UN5s11wG5o9koGyuZBPW35F3sdR4x7Ax9AsDBKp7K5",
  "key18": "4byQrermrWeC3hssUNSQvx41GX1k2egCmUht5yZoAF7FvCd96SZBGzcTNq9W57Bkiqas8j4Hu5PNEVwbeSXbLReU",
  "key19": "59BeMWTtDWdNZqnWrK21MppQJk9snBXSjqsDVdPqKMEMQwTqtkfCHTToyEnXWtxEYDiQSN7jsXZfjudY949Jc7Gh",
  "key20": "4jTZQ6smAXAtVgceLw2EY8EmbXJZCtUCLTspWBooFsRFWixtpG9L9aqgQigZLFzTzh7GktaTqBXaziT1eyeajKB2",
  "key21": "57JAJrNR4XnCiTKnPMFgd8sqZs19THi8DEkM4fHjdpiBDCfxjV1AfTbGNdrNX9hcj1Pm5ouFQEJjdoTkVFe6nkwK",
  "key22": "67fFrbRZcieTfM4FuZwunknrinRvWuCXXqX3pp6jKYJmbiWsvtM6dpwa1UAeGbvT46NprauRedPn1WfcwVe1NBFC",
  "key23": "4VYqaC6Ykwf1bukPAaYyWf3Wtu7iKC3BEUiVunj6sYzMhjrkMiJmaxNoLMqchZy9Ph6bVzg2eCz5jZV3RQ6mLHU6",
  "key24": "5nJBU8z8ot8GBVicgAXKRb2qrcgJSvEgNqQ4WSdRvBrWY6c1epn9boGVYFokSYgLtmocUh4i1tUyV5rAav1fxw8R",
  "key25": "4KHZi8jv4fqzPzGEVziNtjgnb4npWiQcRe9Suu92p85Mqh9asdxGjALFBvEYa3hsCzb2zFGCbKosB8DFjHiuhoEb",
  "key26": "3ZuuqCJoRzx1P36WCokUKkLJHmXiT5cdhGGwpqGgu8gy4Zgdpz9wyWbhBFbZKkwPXPgkgHk4CZ6W3jQtKcCHbsrL",
  "key27": "5ResacwmAShGibxY2FCbHrhsqEUDfXeKo9N3mdbE8XwX9Nrs2CRHga8aw7cYfgKmwt6NPh3LLR3unMMu55nzVLZd",
  "key28": "5Vpp4wyBeQdnqrs4DPj3VNenF8juryvNBQfhcjYnK6ga884Re2a47G8Met8a2HEVH5mQePYKJbUha6DwTjZVRfcJ",
  "key29": "2JEJS4Kc2zeefjXcWG3TqU5F3RABiG8i1nFda216hAJHV63BQs2F415Mg3Kx5hwsbeXQPms2BHshAJjQ9bwjjGyi",
  "key30": "2G94CfTx1jXttvxvQEJ2S8ZUirxVdoLqZQHDrgxUaX48qAwr8QB9k1UrcgAr6fvQLT63opa2AAxF6fkeGGfNXxoL",
  "key31": "49q9fnyB89xwRu32gNVErzRdYsF6PUKWy8Xj1yKgQwah33Pqe7kfh2eT5fE1kanoK16uJnAUt1kzQddfMixAEJCz",
  "key32": "42Djobh6VuwWVe4h7FBpsoyfmVBth2khy4S6yjirKfmLGSSEquEE3fBChmSUcer4m3BYUDXtyZt7Y4vbKMdQQdUs",
  "key33": "ycKjPsjY3anKTNVctYxDaWU5N7nchkxA73VQFH4B5qQkuKFvtPgcKhYMNi6YS29FUWDtTc2CjPbsq3CHBxtMAhG",
  "key34": "2u1c3LWrLKEtuapEg6wqxSRvRWLbwjUNTqXZm6ak93EUs1qSibyZCWv5HQRpqVsp7kfy3cxAFmcmCXFFS9a1LUUX",
  "key35": "4m2yeaSW97fHWYdgojkC3hdw9NMR7Hf48Edu23HMWM9RtqKeuY4JDDiJP1nYQQr53FHesJdGbakuvgh6GAmgJM9C",
  "key36": "4Qv4CxB4NQ1VucMpL9xs4QSr3tQZaDMB7r3J9c9S1F3CecLm1WvUokTKZELQEtpANiQGTBJqwJS4ysHEAjvKKJxZ",
  "key37": "rr1mMGdsgoPUNpjM1KiT23C1WrveqQXFJSUx9ERbpGSm2d2S1yhxgG72m4Zn5uAf5GtvDVdYE7rSDYmoZ4QVwum",
  "key38": "5aX42pexwMupKySPszHYfYFGqynwA49i9xU3ug3scE9uw3xzbfx5RuaSeTH1jnG6ZEJmHt9Xf6LfURvARKQA6q4D",
  "key39": "2tj15SfyY9VhLSvVD2ZMaWcJnEcp759k11n1CejQp7vJspPiNcbsNzrHkfkCMtuRarNgFB7aSRzoLrHD3yaUFzrf",
  "key40": "4hmYf2EFveDmLuhK2cN7FPYPTZVJ59AdHTCovw2AYeUMhpaxyAUTJ5cJ74L5geLYUhfsGnnCgu3wYFbSricnoMW9",
  "key41": "3mBAoRoC7jrskgeFAp6vRFuffq78YAmc3mBnQiQUVztKF9PwVKSWXxWsBrvP9T7SpWbq5VCfZFy5no2hyMkvyHT2",
  "key42": "33xUNbti4e6uXq7Y5cu24iHb6mMNBAxYamgBB2arFm6d7WsxhUg3MQf9iQoFrPQ6bPKDeJPwZnoyqS5va2dRdHrJ",
  "key43": "2AovwHvAosQnbr5fBVkZk8L7zbyj2wC3dkKhtfrB4RJDnrsQfoZvKbTHA79Q83SqEw4Zx6URLoyyKgbVaTcTSsyo"
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
