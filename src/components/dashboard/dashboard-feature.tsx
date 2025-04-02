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
    "4MJHW4JTeY5pw3eV1Eu5ZRuDktm6s1p2F9Bxr4xC6dAwL7bpnVf2gAUSyernq5GQJ4JyUdHU4gc7PbxH3oB2sUC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wrw7Q6udGHXVMDKLZKPt3Q2pX1vebK27yxXsW6WxMcadApoABNMxABiGVfRq2Pz7JaQ3qhjFgS3B2te62udDh1Y",
  "key1": "h6zcki4CRBeqycez4yU69Mz8TiQK6HDZzJop5BVCBFKbfba2dK7SxaxUyuBcmBXVeG8b3cHHUovoe6qXt2y4hnG",
  "key2": "5HLQzFyqHLdgdE8epAbuAunR2j2xZajFKpvD9zymhs4sZa8o73HX7Tg273yxS93tiwdhZhqAbYLNwvAmWca6Bzji",
  "key3": "5pxpQySXBnTJFYatmw2iLCYiD8ro9BbmxzJDy4aAWzir3c2X9N8Vh2vt64ptoXLQ6uzBvHUFJrTTxzsvnLQoJLDR",
  "key4": "3EGdnhutphJv7Sd7XZ6CvSmjQZ2RYbzd347We2sNT4VoeEC5bak2XmXJAHgrdcxxQkp7nEuKKHfJhPgJ2JBSEhaq",
  "key5": "nFuK1BahA6ZSt7fvLDwXiQEVWejNAakqA1Pg43S3wkmgw8VAnWr3ob2z9EpWitPxvWEk1DQfbdPNm1A1LfrbvcA",
  "key6": "WoKxn15Q6RvEpP1LrEHjqmZDhRvSsWKjcgPnjifMJVi6L52k2iVwvVQSurecdtaz4Bhby46yEqmZT1A5EtDuThs",
  "key7": "5M9yhhHYRAfv6gCGwDwc9yTbhY5bzXpWpAmC8YXU3Lg38TTazDTKhB8vMFwvN7tue5qToYZo2DSexajLkx79AaqV",
  "key8": "4Cs7UoTwtM8ejid4QnEjSVTTZLq6zAacPVVdcXVYYNmMnWEEmfTBiWMFnJYAasYJhwTh7iKSyxGEVfX6i6dTKuzQ",
  "key9": "2wiBwpLUBbdcGfu6Csd4pNnjgbThupxNjHjqSCPayKpTpaA1Zg16vY9UHpqXR2PwTn7xYuxWgRhBEE6LDuRRtLNe",
  "key10": "2994K2SXgJzgp16K3GeeiZyzN31s6jbCwuaH4p6GdkYs98MwNDbvmpPtj799JzeMVXpbgm8hAqneqRybvsm8vqgD",
  "key11": "ebQnD3uJ3rCbB7mSD2jn4V1yecdsfFQFPJc57f8uUcKr3U1bmugCZvE2PtNrJc4hsXWNDRXT7wNxDvLkhK1McVX",
  "key12": "4SMd7PN6Gy4n3X6roXiYwe7SqA5BjStUENWvWpd1brRuGeNaAnEMRkQmvprZnvAV6Gxc7FAeHc2iKFXvuc7C2rVo",
  "key13": "5Efqzovbrn5G8x8UT2HEDdCWfc3sQpnQFE39KkUFYCXSnAFKX1cFrDFWopE7yoCFmgm4YqyYsBzsT1xeVYPRiwWk",
  "key14": "v57QFaD3tXA97xXgpM1Je1TZkv5dwVHswgieJMdmU8Vdj5L7iH3GuWoScTxhJgbZtZFtjUhfeAyDoDvXmS7CkSW",
  "key15": "2icM8yY7Pg66v6T6eoJ75Ya5qFmPtBa838rQFbUQXMPEXbqeC9nsFZHMWM9VEqPJeaxdF8AS4uokqRem7r9FuhUi",
  "key16": "uAxJo99K4brN4c2qyBLCY5jCHk2nKDFNr5rUDQdF4SXe1vdR89QUZmvnHCCnqEBNuHzgyKbfDBsadEYPitXca6m",
  "key17": "4m9oZbi5agxRx46DmodgnhMKnDkADFtWferDDfHiftFRX7YBWArttYxDN9mFCj5MNaaVU1L6Lq6oq5kqHFxYuVXa",
  "key18": "59kfaY7vzyEfwUxkuQ15V2CSntrcinvHKV7q84TUuF9PpeKmEhnRXuJQDn6xevBwkxcoN8dSipvyXJKVHFnUj2h",
  "key19": "5DUrU4t6EBxQpHodEsozJJEGw66SQ7k1brQiQdkV2xxrWyRqv9K7kmPUWzzQsDhBZRJ83LYCWbkszFhcx1e7hLue",
  "key20": "5HCF27Fox8opSNKUAX2xqWRmPnwP4kMKo37CaD7yxxNya9ChWbgFmAEuDgdrCAWPwk7VQRCvj6LFMzbjQhRYxyvA",
  "key21": "2s2t7rW38RbJTggCptaSuuyWRdzcf6RL9Z9oaEqfqpWNERyrMwEdDvqhguySBAwCLJaU6UrZe474CF8uiBQekDb8",
  "key22": "4zK94JCBm3bKE9hrMW91sa5PnmyHYyJxYaku2naGgJHAVNYRzHzVHTK58kMS9GDuYas58VtCduu5Jz45VE16rT5e",
  "key23": "33tGNkyU9bm4HVVKy3UNfjuaHme7kDRbanq4j35WDoEhj2uCweBH2uMZwx7Xi8rQpRbaGrKZv89qSXD2ZAAYhmyj",
  "key24": "4cWKaqGDARK7ft2261fHfN6fvNqCdpL2q6WmwMmZYxj9Kybso1otE75VsiHDy8bykQJpEwDb7yjThkMffBChxPEM",
  "key25": "5H8EA1sMW6pSe8LvtpK9fYehXnPh9uZffRHBLCPy8UkdSXUGSVZNJQz3rZ7wdcJiLtzC1SWCjsW1TcvMkhpuJn5E",
  "key26": "3ero92rEX6URFGfGRAotpQTALqxoiw3aJgELAuevKzN6jEgbVyDP5oM6REB2f6P63QQghP1Ddej1MgooHTELq8t1",
  "key27": "2Zz5RaR2eJqhbeeWX8vziC8kSdJMjkQiAgVjUh4dEkHpZ8JW8bT3Hk2a6gvrhaeX8b1iRpQTRaRHNdgoF7419CpV",
  "key28": "4haTQCsM8J7pab9wKJ98Vg8Er5e4jeyDEVhjthWjTjNCkBCkBr2gy9HS9A46N6rbVew9jJq8cT2GR5mULNsfgvgw",
  "key29": "4SxCh3kDKz1r5JjPVoBLNHtXNrfYSaV2fGiE6UkiMwHYJHza1dgRxHczAHo2rYwnnfATsZgxxWiWnTE7yHoz7JK5",
  "key30": "VxNEkHytkAcmmkJ36CujckEmtb4GwLZj5ME5KQNBA7S8iziayVrFVsJYxK1ajTtSFsPjaXr4nRPkrzVckaSx2Nr",
  "key31": "3XYqpysz2MrtmDSzy9e5B3scg64PANb8mNYHTRpCLszpdXH1vFvgEzRQncYSnE1KtEa8NtHcPhhbZYjXa2jT7xbh",
  "key32": "5jMa9MGPX5eevSPeJwF5m2utEhBKa9QwSKRPScunkgpBJsxhKszutBBRoxKzRfxfDiWr5vfKAFmY4Zjw9t9c1YZR",
  "key33": "4oP66FknB7sXu5dMu1E6osWdSAWEytn7pAHWArm2kKrW3Zdy7iz75e7zK1iuMm9oCYDTmP6giq2f8pwpkJDNHktb",
  "key34": "5KG29QKmimxP8mK9yHaRReQGKbgnwtgh5Fa3ewJCXPvQ49zn6XEEHvVLkTdJ3uAkfXdzyj36GQtitxZdur9JTLG4",
  "key35": "3C13H11HEyEhN97DNV5Fkw9qYYc7aM3hrWTNST32tcqSZdvRYLJx5TkiCaKKrVWGLQKHJqF9M2Hu4HhysMQEpR8U",
  "key36": "gy6zBDh3g1pnLs4JdvDRnrBTRgabQKVjENv8GXp1RDNrjBPAPcnXa7tuAjvN7eDTojquu2VdNHy85ReqTfoN8Wz",
  "key37": "4eh7ccDbQMtQ9MVew43yo5ZQSEnBY5nWZpkt8D2H6xazkBxfMpu4tAwbYEzR6epZsFUtYRNeCCCX8NcrCWz9BVBs",
  "key38": "3VsG69hrMwfuFZkW5yZeXCZ9Yg1dhvK6yeLKhtjJ8ViyYr1dr7VdBdPzrRG2oQqk5RuUwB59658Bu6LL9wWK6eJq",
  "key39": "62swNTnZk9fKncW2RqVA2GSHKX9e8wZ6KJmJJ5qtn3beBQhQLVRSMkPn48hdSeVpQd4zSePhRWziSVokWtrE6f6u",
  "key40": "BUTeNC6GrResvvPR5vY18kY6jKeSRVNTjxR6Uadcwsmr246YpkrF9QCuDUyjGtVHXn9LZq6C3eYg54ix4jbvcGC",
  "key41": "3bqShDVCXkzhva2EPKXuC53AhJqYhnHNPD7R6u3j7DdNrGDS1H5jj3kbPikX7YvwdysL7BzkRkooM7AfKAiz27JK",
  "key42": "27ad9fmEX7twTwZLCYunWjLAv6qU6r8GdUpsV4KFZXHTufGJbSJVEM6LmteDYAM4vAfnmVDe7mvGtBFfWJXZnuSh",
  "key43": "59hfrwH2f31PAvBaaVXo7ZMWGiuDHxKJm299Uo8BATJNa4dxCZJDGz2BzkPcfa55Gu8kzdDDDkoEMwnSCSCkwJqN",
  "key44": "4hJnYaBD7UHPrrdYnHT72kshmkkrRyVxB4D9BFDVLTGTSMLCADsDuqcYMea9fQGNJiZ6qsCiBMdZvsNLpN89iwAE",
  "key45": "2Vem6T99QT4AWCHbEWAiCdF3tRCuw8dJPLLUFcnRfAZcMFLxgZ5iRUxD4w3AHC5cPxB1a1pAK6PyySs7QDbESRBE",
  "key46": "51k33LKZ5VtLDmT76gFCx1NSJbWzePkypHajTuYWTxfi6eJXJkzwyj4hXJhZjk3XbhPGduJVNmU3DTBGaknRHCmf",
  "key47": "2sBX4dTGGT8dcxCxT7xxu5rPV8J66gNAitSrT9XoPMFQcgB2a5P9LMHqUtu6AmnLdcBCgsa9VGJ6kZUP5TGgVB38",
  "key48": "4iESwf6RDpAjgvgNNy34eJqgrCMQuqoATCopxg9psGwACvi9xjaw2beMMjM37uHp6PhdSvFMbTdwzCDwhasnZm1T"
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
