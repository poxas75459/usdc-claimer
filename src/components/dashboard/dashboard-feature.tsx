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
    "5fp3tbaioYvDJqsWow4oFk823fTo85gcVbibf9V6jgca5emokojAwh8H9kYzNQ1V1eYhpCJwTNUHeHFE6cdk3Em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ASng98YQoztuJuKQWY6AKvHqtcFAo1fNDab3wUqBkLnJM4dsmvdw7wcDS1XrAPiPVpoiYz2SZptqRiSz5TRrKUW",
  "key1": "4gW3QBEWENG8Rjcb37PhKXAoAPYpdaJQJ7pU7hDNhdzN5F6vHudKKbJsNgvai1c3U84XMexd9skP4vJPyMtnCuQj",
  "key2": "4K19CHFL1YwB8gFeVFHfLdLajuHUFCv7qZ58hvQjoEDB4WXfyS2vZUBrwJDFwXwuzrZPX6Qutyg2Uopi6vBJ7sZk",
  "key3": "3CZoKU1fdqiXufv3gnH3299yA9iQGy9eMf7wWW12hsB9SiVB6o14N3mAi4UoB8qQRxvGv4zD6P3XFKct8BgCqVxo",
  "key4": "3vmvP1ANPqJjzNJJeVMthtSJR67v6gdegcViuZNd9R2X5zDRRKV8MdrQbNqmdS77v8tr8rDQHGCi7ByYNaqWPkjL",
  "key5": "G9hiz5oVe3GWE27RaNiVgRaDsGbuJUoS15zybmW83dZ8HsoKsXvqFNX3GFhnmjVXNTD9Meq6kSnQcjyPfUCBELK",
  "key6": "37WEJkzkY1oGaVygX2j13fJCqCm8v3UkwaHBDFqdYUaZHkgqEi9bJYzstSaLLjj5hRjozuUA6Mppg8PtBVAbnVpR",
  "key7": "22AbWpKxiUabhMwhK4F68yrSu2GcikqpNN2xcB8DCQAyTmJbvWiGysjAWu6H7aexbMwMuzs9hDQV6evquHAwCmKL",
  "key8": "q8A7cJ98MDNegNtoVmdQpJu7fZGZnRYGzXdwGHuygzJqevfKSQCoNJg1G5CAoYamEfNjWicYx38GJZeegj3YWX3",
  "key9": "5b51DcXBAhGt1JE5qSZ5UwZdBHrqYNMM6pp5Pnxz9A1tayPGQS7xq1ViVR8wkMnBpYdbHKJESh9V6PjJZEGQS6vx",
  "key10": "2BDz83bXw7P6nC6VfvYeej1uaSCY5Qx23Gx3QVFnTdsyqZXctx35ooKcugZdchmkzLfNbBNiCbdDLYNcVGkVfMTt",
  "key11": "3dqZ7AF7DfRY9yqmCfvwcdXQsShm6YkPoGjAHFdjsp3EA7Dr7Y5bEh2ZB3qgHa1EsR5by9tDYshyZHAR9K9bEofr",
  "key12": "4j4QsNqAkVegapEQsUeacBuNntjbm7u9fua9skgs5HMAMohi7Vzzm4eNNwi7jdLbSzfk6kkPFA5TKyxBkskDHDQ9",
  "key13": "wRPefrMcFBeSUcrJhSXQoCA1933yvsQ6j2b5m1vxqhG1kE2rzWPKcEkxVvi6pKX8fzz435gWp23GiyrGwohQknf",
  "key14": "5wG9sC2QcbMEQwWz7H6btcmwe4rF9snaMZNvCv6ejF9V5bGDWjeKA63bniBST6PQhmjMJMB1Cnxtq2Qy1YSYrWpW",
  "key15": "4ztqrVbErfgqYYiGWVErwHyaFwfQsBbJ8PA2TUPXTEF6DHx5HXSDqRvHzrHS2VRP1XN5GKGAnfvw4mZyhshxR4XU",
  "key16": "2DBDVCn2QGRYsTJWYQpbPhpR6Aep9r8fTP25muZ8YjoZbzgtASxd4h6M2mBurv6p9W2rMfTW3f8tPmX3unBGUrrR",
  "key17": "4KZtgZExwrBv1Z8dRz7ujXZBeHbMxrLEXo6kbo8boM5BA6PeosWVSb2rDTG1Q2D7K4rwLt66XVwDRgctzGjM8DY2",
  "key18": "43rT9MBzrPeG32hGVJTxUdkdnfTrTeB64ribqcdDwYGwkU4YWGzwX6Sjf8aZ6YXYmFxotr6NsBHxpPzzSKWrx7UL",
  "key19": "2pFzB3AqiGrNVWoiiwYR3e1C15ZE2tPNx2sPeN557W6mswMxiDwHFUQLARsQc16hBC19V3XEpvWgN9Um4vkis6Fn",
  "key20": "4PE2f8diLewNHXSwTA5ZLmjHJ2imEMhWRMZmUGSGhfFGfP39cyMqkgfFv7YL5BD2viizmyNX94rNAP8hX3PmWAzy",
  "key21": "4GC6cSDZgAHBoWhfuAQ6vtuBq3S6AorQLJCPCnaaBp3wwsj3jvzT7WeFLJYXS82RSkBm4HX1y76Qfp5d5Jkv9iwP",
  "key22": "2eYamb7RkYaSQBuE3y9kaGcffUsPDF63RdgcdKM8FG47Z4j9JWUkntdbfNQEDycbNPYuR9A4bFaomEmAFksL6JpE",
  "key23": "2qjsKDz6ws1Qm3dnM8VEabjhw61t332F736UuQP9XeQkNrJvh5N1PtZLGNbRV6LmSrPyc2DKC1Kvpr7niZmzKGga",
  "key24": "iHq2L28D5uEXLVyyWkeLXD7WcrDTVagpMBKBjqhLoApQKD5w47Grob3dqPswRX8AyEtnMZpyeiS8nYfHCQhWQwe",
  "key25": "3ZcBnFCBRjmYsfHv6tPFmEAB5Z3hvMcFXjCnXs5c93waAjq9tmJZ6J6xX9uCjyHg1tqUezzT1snVEkm7o5oSzFCm",
  "key26": "4HAkiBKoK5nUrEjm61amVefgaHvL6UdXFFd2kw1cZrPrvrWrFN1vgQsQPckE6webnG4MKoasy6DMufdDwKGwecEx",
  "key27": "4dWDedhjJ8X4gT92Aot2sPFpp499rQrP17nnUKosaKHEyBrdnggePFxMHpGuu2oWmbJsbwAG3CtvN68oitMUXbNM",
  "key28": "2baw6MR5uRcBXT9ADZPy5UMS7SgbxThTyWCmST3Eg6YRb5c948CMwLPH7hWzABRi19QLWhxyjScoSyy3FG2qvMcy",
  "key29": "d23ve3aesuqv9VrZRSo9icJT9irsBirUcUMKZxiDoJ7afcdgs5FvcotDEWC2Gmg18EmTuC5sPxDQ7FLG7dSsrGf",
  "key30": "5US46yVQP6wVt92cFFMhAmcw9cXP9JVMK7XYZvAd1kUHWVoR95egYwnPFFhsgCF7mqoAxzex2eozrtuZyEhgZQmH",
  "key31": "4LcvodeHazazKDhgFVFY4nQgSYMcVui21ubzb5D6HTW9frxRXgLCbV9U6ABVa3XiRH9EGJtZarJX2PNf8bjGfvyu",
  "key32": "2GYmEXE5AfVVkWGBTKppUPEcJAKyXpSPoRRXi3ZCHNXwWTD3S5riSXppMsX4PxFKFAp4GgogmWppbV9HpSaC8TvY",
  "key33": "5ZAAanxbvdSLKVwcCZyHfuvab27hf3D3nCSM1Akp4oTHjejTJbZSfuXFFhaj4oG5n4woq9M28maNS4JzTL2ko46P",
  "key34": "5CK7pJEBV2A7mcqEXMB5S4eFqTt7gPY3N2XrtXmaPTVqYQrGnZzgGERZd7MqbnoCeGo6tPWENmsroEnAiSUVoTJB"
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
