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
    "2rHQAqKgxry9PrF6kt8zLhZMabxTx6ada5sDi5sMXUE866oioZzGQNQXSBECEBRw7C54oZUZwTKCZ93Awp27gvSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FG3skAKfHXyNiNPtcPPGdNN9obhEqXGjMYP5nYbusQ1ih4qviMk3JqmBQz2uCpeeN7W7YRpFtt8qynpDx93sw8S",
  "key1": "22YohJGSemVJAtdANPeidvBzSQc7NxYFta6K5GAz2nvkrmwMsQzAvRSRJX3mwSS5DFnLFB7RyusCn27bP1vPByPy",
  "key2": "cJqeEdCafDZNkP8j4akCNp7UP5WBFnZ3g2My27ySk1qxbWnNrpgKLSzKofVGjsqaw55u2gsNyddQXZXxxrKmfQX",
  "key3": "3Lpo1bU2C6AocBudxzcR8S3jVR67zhzqBWn6CWaLxNfGXuipCczN3MkgAf3jsM1BsG8YC5WKLa1WRuWPUCdXSpsw",
  "key4": "5DD7aY9gjXFtLFaNNKeEGtEdm6jcM95Z2mab3n9JVxj4thSbDuwa5hsJBbV8143vzZo2JcS6tE3Z4PBxr2cMqvDr",
  "key5": "5R9pA5gcaeCFppQbQWFybc3Wh8zbbtNVh39hVgmMuDC6uPiu67vyM8LPxroE4hHQpL52f9wG7fqz4bBzrNyjJLuR",
  "key6": "3wkBoA2msfA6sKVa62HeU7v9X3TVbAywYEx6WPPRcrfTXBAyE452RVUnfcFSeuzpCQKDSmypmE6ST4bt6Wv7A3Yt",
  "key7": "MeWyibfP24Me3SRdpUfA72cQwuTWCXuGsJUpdKLumpdcgmeYuqKdgFFvK4dg1oWX2iGqWyVtBD72VFLJVLtsGM7",
  "key8": "5DKkgP1hvFjSK7nRsXEh6Q87BjcgFXBVRTgxPMAmzBR5RZNFGEC4biHfitbnzKXu2peuj13ZGXDivX8DWJtARGuT",
  "key9": "67JjVPjTjbc15nrTyn3iwZxSzzDqRT7vJpMCapTsKBRwcbxoqJzqTGV4GpsJEsga5uGrysdcMCbcHy1YRohRoCT6",
  "key10": "VAQjAn5x9BLKAPQ3Y1PNyLVBQBP3X6D5poudHuU2u1Ay8HTXz7idgU7bWmYjoYRuciG26gPceLb7SBbzcmpcR2L",
  "key11": "3hi8e2xtNdZykNGktciWX5qRmTis88rxEwAdXGe86MxY4gjBRp9KSW1i2DK7LiJ48UAonQU6Daj4AVp8Lw6mshDQ",
  "key12": "3toHekxicokC8Hoy257cC7YqB2jJgW33dJsuD4iPE8UPgu5L7gAAzV4DCMiEtAVdcr3hPju4uk164hNBoCxRGFpT",
  "key13": "RhbfskcVb5nGaPM1HCSAEYMQUHbD5C2soUatV19ocjUEDjp1egD6aVv8qNsgcvV9XizFR9W2zKk37Z1o9EsSHLC",
  "key14": "59U8X5inxYQtAWPgfgNG4dSjtD5j2QjqRmV8PTqXsS7sDerxJhGGkVrJyNQnPRtJUR5rfhwJkCWSffS6eEkHVJyB",
  "key15": "5U778L4kbfbBXvucnQ7QudCp4J7EmadifeMyBPcP7LiWEgHmG6f2yzjB4Lk2QdVPu5UU15rB5z8N9aGUjhswC4ou",
  "key16": "32DZF1nbGxPvFcDfuoCkKNLtazsaXaJnNneppc22EjK78YtKXGaqtZoHTEZyh1hmGjcuw9zCWPcNm24WaqnYWN8W",
  "key17": "3wG9Pu9fjM86jKFUGkzy8Dq2zBuFd5fJ2DDxTnqVPtfJGdzMbeUHT3PpDkK3AD27QZ5a6x8D3HAuHNSLwmcKmpwE",
  "key18": "dwX3ZEwrvrgJ337JyPkzLSm2wyP9W7q3pmxuuqpEQ9ykVmDf2seL9TNVbSUeCtnPZA92iTEbRUaHrKWJa1FTG8Q",
  "key19": "4Dmb9mSvGvJzBzKdzuPf1b3ZXYDQtA2L5diNr7CR1hwJaRWfLCm23o5ZpRZybqFLev9CTXP6akh38waayRBewWFP",
  "key20": "5SjKy2LMFFbQCGtsthvthCr3NSZigL2YVSfJH8wozJJTCvWMkmLP2RFijMkKeFmnUjnAnH2qckKuKhH1qQSrknWK",
  "key21": "4qC4sSpGNjrmiGgaqb1AEDi8utfV8twCZ5HHYLto7UXxwqqoBueC2xTxuXqkhKrd62joUgc23N4iAd7ChjuXCEDf",
  "key22": "2kBZD6WTX3GnLZTNKDWMzFsYbNq8xbZRtTPKaPaoFE8y2PMZUThTkFnPsWgNF18o13j7kR1TJ8GWK2bVTdjzXgRk",
  "key23": "2SNeteUSEz1bK6vwTbgAsWspwofjtx9SqoCTky9gjrsbJtV1KRdsd1HSLL9jv5hYDrzQqVsfn7cDDzK2HYFfiA1c",
  "key24": "5KbuZDY6bWhFtYELgM2nj3vEYVXzpBu5Ys5XpHjw83tyQHgdHFT6tzxfGQMNeexBi2XrVekTvWufenBH5VYHUAY9",
  "key25": "2QvwysiXfpHKhEPAMvBbMQafpJkefUMR7kGzovheZdoYojgsUR62Xab4ofTQNzULyqiMrocqgYdrZwdJ4392YXMK",
  "key26": "5XHPXJqrVpsbcgvxGGQAiSgJnL6KPym4bLfJQBxVFpFgBTHkNvoRfyVP3KvAeELTTbSychoQ9ZPjU52YE1cFuAMu",
  "key27": "28Z1sesTvvBuLJssv2zvXVUWjKdAFeNe7RA6U9mHdq7B4AnqQsuX1Ve4PQHLBXg2xQWZ4AbdAAtH7c9PnW8nkRU9",
  "key28": "2KiUB1rvacmWpu8KXqb9XRm3Dda4toabdS2prECRwFBcTxsJZQb31bdmiuGor9avTcwxbHKVQyx6tDKkmND18Cd4",
  "key29": "5J9n1wPTmAzb8HdEm6TZowcvwLjBE696ePsS9Vuibek6zKkihQoeBp6ibvGbDC8kDQMrbx2EF82EK9QeJ827m5rt",
  "key30": "bq8cSgsV2wihPojumefQHTPx3AMdPwgpdJnKMPgShdVBnJpTMcsd6n3wtuwkHANGqFt9SaABNkDxEUm2mKAZiVh",
  "key31": "2H5rBXnfhabUJW1srPRJc1TVZQ5obxWEwaCD9DEc3hjCLGNr1Bt8eFzYcav6Nx6EHr89ndaGgZGDXwK3sBcuCGfY",
  "key32": "5WcK3sj1WHWMQ8pj5bTxiBZgGNdAUFihLgfqNcoqRQdDLjAHn8DdHuRDLrpVzSjmZGBu6FHNPHrPK74GbhKvH1yN",
  "key33": "37YkBkBjdxRNsnxTYcxbNGEctuyuj6AUyCkF1yUmvh1XDnasMSTHmBiRESZEtni7TXTeyVgjDzQc5dzBkube2H8Q",
  "key34": "2sH3mL8F2pRQVPyYLb9baRjiy9CitBYcatWyxoYQchATr7saknURCg6JJgNArwAfGGPA9SfGjy6vnpMJ7RH2SvME",
  "key35": "WxyZg8GZRJ6S3yYB6hYGRHeNkGMRZK7E5MsDJEUPFnRUfkqc6siQTmBNbQMxKe2ezNMHx4TndhCGU6v5fw84KUS",
  "key36": "47eAmiGdeSyYCrbF1sVFopK97d4HrHSWpuYg5jnFY5jSKbVWQwCH6cqoJUMvtDkaf9uEQEiRXZT1351CquRYQMJa",
  "key37": "2tyJt9kjVLUfMnFSozByb466CGMWy4uqwjXrf3Y6ZLvUDCbrR6uN1dcDhXiVPzP53EacjvMCqiyVvuBxZqKeLi1x",
  "key38": "39JCW9KgDz4JS7LDxSRA5Xapjx6e6T2g958A5Euzp1CocGEWZEhQg4LG5652Kk5CyA8h4SULdpCx7VSkqxnNeUFg",
  "key39": "5tg1sKBNEf1GvGJM1soEuDbAkv3U35cJXpCVAc45fVVBCaPzYgZtdjoHuY5GMwASWeJDqhsG22TGguPFGMebTEXK",
  "key40": "3BkmLRGTFQpZMoFyJxRevGTpJPPRwZUbUTUFLwEWuxqZyAWfdT9FButvZrNWti1asMcz4FXjFbYs4esfvxCz1mUi",
  "key41": "NJo1KmbPLgKEJsNMmDjrRx7m15faoGYYb4BhD58vi6UQvjFAYVXxevGPfSe4fy6AVJ3XaNk8ywA2yw3EHZPGTP4",
  "key42": "54AbMJDFkuSptvWudmg54a765m1wGtxMqKdYWKBBmG8b5W7wbmq1r2PiSANyphS8Mc17wKm3HimJ28nLfzRb9iRY",
  "key43": "4rjXFbCvp7bjDjBYyY1F2auxXgA8vzKSqmtJrFc8xM9qEp2DviX88yge4VwpSky86sntdA2ipfLFt9KUXFLZdpAh",
  "key44": "5R6HEhxX9gjLcHKpa4DeoFqPiP6FkJsM11Wpa8ix41XSCjZef3JfLQtZsg2USbd3mQqTe3DChyyhVA8nmLgtWFrE",
  "key45": "3AvTvAwnfP9ZfifDNuQRE1mBBQVx6dgGDS6E7eKQCFSrWfHAoSZj8Gefk7oXAXoSD3XoyLm6jGm1pWt2QqGN4EfT",
  "key46": "3sbJA8rkCod6KarRCLuj81kqCPgiJfCcVk31tdJmVmLDrw7uZSD2v4puifDrmBEpGJU9dkk3bduMpDoxWnHdQfwr",
  "key47": "zuRU3ryoJgszbkLDC5EbvVgpEn5CfnV8orXeL6F3hh3ReH25pcHKzoWDwYUpDKJa5sDFgvedVCFfeYo6nhXwj7c"
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
