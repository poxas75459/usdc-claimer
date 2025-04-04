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
    "4ixy2n7Xn6L6dGg5tXZ9WyR2fhr2yZxN1hMsTDupxqvm1cBZLt33Q6gewa2HK8VsspqWajPES8TTa67SycLWdnmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F8hbE2jHdwAAaVXriFC7w7TbJjY5RaimCWkwxFNmb6YCKY5x8S96FVGE55qczrDVKCce6n8b9cZKJqnY8R4QM75",
  "key1": "3sJXdxzpKsX2tpWeMGVFed9LptPX13djqMvpwSFJAokckJ5mwmJbhAnNGvFgTetDjvmvLAwJy1aXrTh8TULhFETj",
  "key2": "5FxgJ3NQmi4AxHakC7EyFksdKMHhNmMwjEr4QhCTacJT5ctTF7w4NEyFmHKCQeEZ1s7HuoyraZRDKqio4CHiYU8p",
  "key3": "FYrQEP47kpGpxSqYccLpMwXpyTwej2p4MjkZpmbDbRLHFYUhKRHg4WqRJoTCLrC6KEQ98Uu7878sL2GYLcQiJ2c",
  "key4": "3Dyrid5i1nomAR3tb4eanWsPJsn2UGpg24B5KfWbPTsuJEEmkeYCYiK4TZdK5sjjauJ3zXtcNNQ3UkqwWNDY6vd8",
  "key5": "YGPW3Jxym5Jsu1aaz7ARPkfz4C4oZpJDHunrx8HZNiaiVtXfoXRCqa22qDN9dAHm6xZjLcjUBuqFud94tHBbu2Y",
  "key6": "3pCGCqWKPnWXXWwRbko9ZtVdRvFUB3pp8QKrmaypTTpSCMqEcwHFaz22nkdkMmFjsZ7y4pnS63XYRz4WhPsgeCSq",
  "key7": "4KVFF4ZgM7hbdSG47wPJkpPFmz4KTSGcQP9LaN6Fau9RW4Z9eeeR4D8ZmvCtbBN3gCLB6UYVTbU8NXzw9jTynWqv",
  "key8": "3nNbbzjv8VNsRHvVvhXNxF9X3ivjSkowNWBKVKo7jYdikZ4Zbur8PFJXE92MczCxrwrXnD7T2zTN5Pnshpb8Ac9v",
  "key9": "xT78rGmuuymxQnR8AyFbeZnTrivcFbP6DJu9u1977vH9VChqDTe31KFeyr5TuKKdjd1khqzUedFiLris2mrCZDF",
  "key10": "4rMkUkJKLcK6ocA1oXsCvRoEW5NccbTUUQHLtz3DTQfR9S2JRvGU5tEke9LRSaWK1FaV4rwRpYFaH8zq4uRf2qEX",
  "key11": "31uvR9nKgYETZmytWRscA6SSKuYgg8TmwcvwvGtRxQaHqHziWFG78fpdjoa2Ju2b7pLxY5vZaevLUJP7gJXENCSN",
  "key12": "3egQ4YAjMLVnNM7NVx21b7dN3ou97MdWyR9QfSdtBP3iEvMwxbixyibwgVprKisoQx96y1RPy4BPguL9uNSnVKjw",
  "key13": "4ETaRRfjooCGyKL8WsWdVXtJcmtqqFvXcYfvV66mqdpkYGcgp1pjov94Kz7WM7c4tbP8fiXDJGJrnDTiLXyAq5bX",
  "key14": "53VUHKkoyteezRmcYWU64hSGF3uXfxjcmGzfc5qgAHgsNyrmZHjPEoydqyU3vRYu4yPm6hKrGdzZfiVRpm98DxgB",
  "key15": "5aak3C5LYWr1Pc9zaBKDbkgmpbAaPec9GqtgaY1tXf1MYyW41YnPdJxfp3q3vV62QeWVs1Y5YzbXWTKwgSwnJtxE",
  "key16": "5Xsd39ewWx2azFucC3waVtfY7u1zTP6pG8KSz5XsJg2YfPf2kwYB1uSmZt4dwo2KYn2HpTe8oLMTdxQY1ipG1qPg",
  "key17": "22vsva1v3hxvcF8V3WP5rpQ8fZ3RVC59Vd9qzyFBMMRsBwDvV1zQD6s2MegK5UE4RHsA8S5Qoh39nYMswF2SqzMZ",
  "key18": "4vgKAndviu7HzXEBnD6xxabb641C1rkC17VG3DoaDdPczsYWpYa39zPUoLK2cz1D9xZVhYMyyg1VpFvwUBHTe5Bt",
  "key19": "5GWE72QQvjCUqEfsZiRnJA4syLQZZzyVN1LCrjZw2y4hUfrQLQNv6LCzS7geqrv2MGvyrzhCesyg5VBKXicxNTER",
  "key20": "51yk2sb3FbjUKFSJECtEeudmgaWeh22xXWQHiCgkRCR4CZo4ThLbHWVNCAw1cVkNmbYqkfoee2NgSmDpFmiox27u",
  "key21": "4kdqKpen4p9WrWGr3ppnoiKjD1FRkgT4c6NE9gMNw5XJV379xNcm8yxWLBNfkyVFmcBFhd2BvEhMN9BwiULJKCV1",
  "key22": "62R2JdVNz1UrBMnnBXANNbijwqbe3yxqmrER2UxzYhc7DgqzWoma4QiWi1QqXiQQ8HxgypSFtPLcz6cSWQY49Vvm",
  "key23": "2jcvgaLt3Lw26XCPghaS9cVFZRcGdZBnxi9tMWZSvWYB3JmcX6yVng7pURCutMFS11mXdRa4Q5ojLrRvTDcznoRp",
  "key24": "nNuiYpLhtppCTfRJ75cJGRAm2aWAxC8tDyrJjjwZ5pecLZFdhoV7tbWSGEczKWgsP5mizyP64dsiBi3ttRjgdaj",
  "key25": "37djz3fZFQjEdYF2T65EEaFQLTUMRLZbxoqgfD8B1T2TJaMyYJqeJ47h6wbvCLaogi5mNP3MPKMW87PVda3mC1Tf",
  "key26": "5cftGmzrzkMm3dYbAdJ7o19He3QY4XHAxKQJaSd8NbawWckYqTv18cM2H7cZzeVNKYpRbF1i4seeJMBA4W2LGnUL",
  "key27": "54uqaHYxwisQ52rB6BLEgsS1mJM7u1xUEXjsQ36SgGUfmYbpqPZ1NPBwdUzbAGc128QEndnARRHQvaeZ4K6ccLDL",
  "key28": "24uuHncPM9VwDsEPBEmCKy3C28wiYGdYc5Auf9rdoEiQB66pYyD5gBNc2chiGBurDVssZxdJa2hi3zMk7ZEtWDSe",
  "key29": "4xARo4ZbtQgCeH3NPA5SUYhGb15xqZ7XrkLAmfscH4p3ijdNZ2wzNwDevXwpMkVq1qKGijnV6nPUw6aznvXhWUPn",
  "key30": "2q4X1TRFW8MHwjmkRMtRnVyEZHCWqwKtMgPZ9HceLm49vUCEoypZUYMHbboh69c8cmFNgiEdVQcHrBcw6uG6dKX1",
  "key31": "3vkvdkV8a9wb41Gy7d4XDS5haSG4KSpNFEGh71DwvQkCUwvo7NdhCxPq5keGb2tef8ZLFBzeFPwDLwcohjrjYn1L",
  "key32": "H4br2ZDR8bR7TJ2KMMoggtHG7orqbBkSLneiN5PCccDj7VbW9Ntehao3uhVnjRg5WPyJX2okj4QbJLZZNpazX88",
  "key33": "eBFhPbzSjV9BYDb2Qe4fWjYRoJCTzCqviujgHg5fyna6CGGkiucgAFUXhGV6Zg1vd1VtwkP1Ct2M13Uj2vUXNvW",
  "key34": "4rqgvQyF9mC7U7SncLNmgSArTLTCWTq4M5fmY2BDb7zy5Jgia9B2m7RTQXcZ41DJXEMdApY4wTbnYg8nsXo37PRH",
  "key35": "5sUc6XLWsdYpeWS42B6SZXWz2Ve9HHZrtGDPwLW4kp4YkthYv3yLtg7dBrfbLDi9hkgDyujFhvxUJ6qGRbaUkNnw",
  "key36": "3xMtiGQNYZR1jBH75BYKVMdthRG5Fzd472du648ZgMEmNVM2gMPem14PzrGCCL8LkRJYgZbi2oJRAqrLmmtDg3dZ",
  "key37": "2TJHf59y3B6GxUE5yKZ2yUHddwP9K7AiBP8Lh13eWEsSYo9rXUyyNXHTBnZzPnDM84vJTnoEUTom9BCrg3ZuvMq9",
  "key38": "3jcv5VkCjzZrkyboHQo3xZoT35UVHGK37sCvx6wyXASxfemAk2xf94ymVyUCtdFzqZmFXcCRzeSLgVrY5tchLUCi",
  "key39": "LJSg5qfM7rPD69W8nfXYgpPdt9hhzXWUjnyxhzzgVKXYaz7naFJQTR6LujcLiTkbg7yjSMcgYm9nEeVQuRGZqLG",
  "key40": "5sJXMj2cVSscbdFSTTrn1DZL6W9QBXKp6WDtGEvQG2Y2Sx1Wvn3w8DxKmRFD6CKWbAYfYrdXxcMRvDW7k87iEEnE",
  "key41": "3dr2DvQMkruHTFKFDppwuTwYhXHdpVDYEeLhormsqHBVFxVvkNFt3kHUdSzcRJjv815dPQrdUocaK7vFasaLqzMY",
  "key42": "sWMwrJT7aqnjxigwfRfou9AhWH3dC3CWndK4kxBRsijiuVFoXD8wcm5VsSZdFje1uBbszp6k1dkM1vVi5VsbaQM"
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
