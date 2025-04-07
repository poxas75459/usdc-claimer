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
    "5CbzcjbWgQWdXinNAH9AMmotBcpgLZPdBPNPxktKD1HRx4R6dMSHPmZmQSAsmxHaFLue4AbuGAN9rGz2aeUprnEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CWr2oCn82GYmfmHT38QsCCwxEdWcJceKLUnU5wB6WCToF3YWvBqaeso4oDaWv2pS5kDZ54qmsnw2f8EbpicZGUC",
  "key1": "Pej1hiMHUAvMswDUTNFwt9GbYGsGM9HRyHW24pAfiaXDjPwP7m9eqXNYvV4VkVxCsJmX6ioJoyVFjiUfiCzrAtt",
  "key2": "36nbG7aHpA9wSz9wyykgL5tZQbXsv1q5g9bsw4xBdkGV69zwCeu2ooR8Sru8CQnN7xGsmtQMJUuQgbXQ2BnzV3xa",
  "key3": "4JXJAtQ4NziFdfzTk2Q3Ksj2ni9AuoEvrnkfT55JTLirf4YzBJEcKCKtvN19LZTNtRU9uUjv81J9WegUgUrVfV1x",
  "key4": "3N8FohAqPDeEResgCgSHwKumk5iZRxSwUPgKD5qdHym6YpiEu6UPDCPjPiu5k6S3KmHBfBzW8BNRz6JobzR3ukFL",
  "key5": "36xrNAmf4xWsnE9Nw8hympwNFufvrkcUYfLYw5i1r2sb4QrFeZ98fyYGKrjtBZopuVicU42uBzH9d3EVt5XKPRW8",
  "key6": "2ALTqUniNL5oaPxTwMKoWBncBqW6reA6sm8TqfJeMAoJNkkARMy9aUgJqs1fj6kU9FNyq41LdvadCQm347pq4MzP",
  "key7": "4cMM2HUVyRBaDErmXT7LYPmF8CLFv7zE1JZjV695X1x3WkhecvL6RfwLcSRRSfh7EyTALEDC8tYUeKr9YD6Mi555",
  "key8": "5af7K5k2V8Ev7NfgBN1ZqgzxRjH2Uebqyg4qV4hymLmJ7Pa14e9oU4VZdVooPVGMi729E7hC7dpcFzwcbiH28Xdo",
  "key9": "5UFTTwPvjLxL9aursxZMujf47abisMd8j7S8zNaAf2pwrshsW9Mc22FFFiCS5CD1sK82MJhtWoD9xBYfM2AE8ifW",
  "key10": "4RJEQoP6G6MZiWeA8nX2Zguvfk5e1fVsUZ1LP7zWiTW3an53HA5T6211S6bKqfx8CM8ro16BprEQ7p1Y3grBPBT9",
  "key11": "3DmrgE6J8CwcAmPKzgkZcKb5AqUebW3KNhTn2d2JN3V5jrJcjuJTqNtwc8crPrYK3173pAP1vdoXtMJne4CfQBo7",
  "key12": "5X1sbUAEivKChZuv4EwLppHtirvHYfHt5FX7KAnAzdJ4wAX8WVUo22H6YS2qA32RzBvkNc3RL8KcGcV4uhrTHi3u",
  "key13": "4HCDzTGK3WrEGPhbMnf3UJ3N2W84EimyeSbBvaFwJiDFcANtYYBJEAGt5q5MuPaguM3NQogA8ZZ8thPoe9zpBkwf",
  "key14": "5RHm2HXxua8JEaWWCcVJReXn9rfgpCQzDhtXijjmJQNQaNrWqbiErDe4p3XfDBomXqHPZptUWwrWKzHsMmdNEe9u",
  "key15": "5B4hbWeyZ9Sg5ToAkUd73xwtn5rBU2rxkAjTQc9CHH6kxAaeuNRxuzLXvPvrhXiiefNUB3pbKMnCTwEDU1FVaFA7",
  "key16": "VGwZdiFLxrAVoAHjW9PiERrw8LrjeoJ6wvQze3GTRPsHKNkmVWqThU2M1MYR1hfzpe42y57FpeuoSLLYBCoRE7m",
  "key17": "38waVegfqsM3Li43MZ2ktmTwvT9mXY6wXe95j7wA3wvBnxpNJRGvRWyg8gRMTiUQEA2Bxg63jXbRNdq9Lps6Z5mg",
  "key18": "62CkCqE6CL54pSLmub5yYuUFt1M9We7ypgMSDj24VHp8XSwdxCXn3sLpEP81PoGbRf8nHWUiMcVZx7CLZnAWw2WE",
  "key19": "4NPtkpnhRyGfHMB1PcNChgjc79J3GfrFeVJzzVTJnH7bkqLb9jdb5pZu4TiR8wwNCACSRbFLz95ZUTMCB1vsTAbG",
  "key20": "38Y88C3gvm7d4xRTxUastuBRAZ3sR7RokocuNPfDFNJne84Dsq47D4A8D9FemCqusvNTcJeAg2H2LryR7Erm7TCJ",
  "key21": "4ZheJW6tUDR8p8wNJg67u7U4WqKw88CspMjCu6bDjrFPfbWtPmEd7qajn4MbYoYTsfH47jqMAjkjqtmWwGm7wXQz",
  "key22": "47NWfdAjwyPJsqEZMBfSqzdckS5cr9pUnizWc3UyWiUMYqVYGqNyo54SJc48UukNsL5UtWeapVkw2ZjTNcFn1vnY",
  "key23": "zFWHraFvQc911FVwhcs8fhr3qHBePN7jhhkvscfRuxLjXGVczSGKtCGxYmZLzCenvuVcyeFbP4sZKU5tGYTrVcL",
  "key24": "3MwBtWy8SAuxBwK1zP4uFDKPzGmjKQezfi94MDmXXpV73UGxV2q9h3wACYHJy1SuF1wJ8vDHGHAS2w3XFKmobRCu",
  "key25": "4HjkE35TtShCTKJtRhsqaYfNoGKULMpx7ATPkc7vE2vnksueuK1txYkwXr2SfPwAeoBYxDfiW7aCRw4jVpVfGovc",
  "key26": "5yJS8y9MeAbEbzDqUprjKmzJiM4tpUddxWhUYYFRKutnSDaDrRMVwYgDjvn7SzfA3GgCLUjvBHo9Viq6KQDb4GRL",
  "key27": "4sBLZE3ym8e5ZpWUsr5KLn9m3tarsuawtepYs7wCdRf6anZNeoeqgB9VD1hxwnxtHui76wMuFWy6BsBsrPM9LGyV",
  "key28": "4WzZj3sif2kD3CDX56a6wMYYgEjzUY2Nj9QRYhNZNes3UYdQDeXyGtfAz5tjQ1e51RGH9p1vKx2Sq5EfFUHgXiuJ",
  "key29": "5o9d8PYDkfrQdUhdKWf3v7ZAjXQsTkawaDwZTSdfGwW9XGzUGer6HXT6AEX4v6QeFWCXcGdnwAtDZp4tkz3TAC8i",
  "key30": "2TnNQyRhUFoEWgnWeMD4mmr6G6vVh5UN5yA3EWaw6TFkFqhWmXEiToTYsM82HW7dYbxUWwoyAsSiZj9BMSJwJWLL",
  "key31": "dTRRiTaFHffmUvwVV5BDUWCDtYGBM8yfFCLvJw875M9yeYqEsxoxGSvrwcyZNMECo5VR7EhchU2Mgxwf3wwd3uc",
  "key32": "36Px2oDyW2JC2pEEvxKZT86Tt9UdV5wasL4cvZ15bKxQnUahNCd9MPp8obBY3ReKXmSSoBYV4DX5gc47GfEmvy2H",
  "key33": "qSvMgzfKmTSDULj2i2uK3jiEEexzp4ysPRRN7UX1adSwA2rgmwJ4UHbWBG9Dt3vq6UxCTPYKEgzzi9qu4KX5wjP",
  "key34": "qTNiWg7rM2eY14XZb7dWBDU8BwCEaStrw38gq6S3YBg9mKQxcH4Qzpfueug1DrJdyWGp93VKUtP2X8UhyrHwgRN",
  "key35": "3gXQQXLqksqxm1UKkto4tzV3G5tCBevo4sTXXD8WRtZ271ULdgoB3XRWHhyioiFefbEHtr7dc4JCTZYBne2qAdtu",
  "key36": "aUFZwcNBdJV9BQfrQHvLtoWPV665VTTNNFqtAqTroBa5tA4HGcHBVwCQSfg91pBNi9SC1pmdxHAimtB7ERYfnGz",
  "key37": "33MuRprshTptt3wsgdTsX2jo7cubFNyZNdP38AppmrwtZR6xhbyRFFGxX5aArStsJaYJtQo9EEbaYZ9KWJCenTCh",
  "key38": "4EsWsT2Vmcx6oYSQ4xkm2f1pryPvb3piRJRrBRmzwn6XC6LGUvt6YxA1jmysQ3odJV5JXRNTQuKvUp6wvMWAS7PY",
  "key39": "2D4FN2DZ1xQpepdUcU82A8ZxpjjgZTdGPGh2ZuMdzB1aVPD6ZrQDEP9ZodNzkTsDtmYsizqCVsWg899GCU2GhBYu",
  "key40": "6ErNDVKoEpBG8BKyuavLiPKx3TrFvz1DDgd48jB1WmEXEpWeXmTeUWpqvrHwZSXCvx9e3BfbHDJe6WTCWbageGD",
  "key41": "45bEb2PwFcSxnDhbviLARDj2AjAwWsjqmRnaU4QCH8UPHuYQTMwp1XCq6R7UKVyaPzU31XZJjSncbKLphunXSkK",
  "key42": "4zdjHsRt1VDNoWMhnLpH9SHABpQM64rPiViUC33Qzp4nNeb1ACmNwbs8rjsR5pDMxvdTDLptNWjBdtQmNFVPY7t1",
  "key43": "3wSiLfzjvrnPZffjEGMMim5Z6NW7LKLPeDA8qn2FnTYbyWrgQhzF28JWamE3yQ6rzSnnNsB3LJRmNRDcZMe5oxVp",
  "key44": "2b6eqRPMcUjUcUPYgQ8VaseewpQhKFzihKQJnjxiev73vtp71TxkxoF94RfvhEV91WEDFoJ6v9wQGjG69KcWCnK1",
  "key45": "65VDVbX7yKT3RZDaeTYChjb8kvd9NkLVz71u5U1dDh5JZVPhr1PF36qnfKy462D4DaLDu3hdRB5qAHHoHK2vhGJs",
  "key46": "5UbtKhSGuQSAbQhGZw9zNxnMcPYkU5pwAxWZ7WuKEGgrzaScVWi1J7CqUjCvhpXJ2Se7hjHZXHVYteg7pdCpeRwD",
  "key47": "4upY2oMSkD9fhJfrk1TNpHVMdJV2CgjCYSd6DMxX4jk1G63EGE6LMosZZ3D6BCMVV4bD21RVcdyu2M96zEFkUKJn",
  "key48": "ZXmqraes2gsidE2wakAFdkxkREf2D6B2Y4QVVxBiD1pmKRNtvoX1byJEJgj7k5QM2rieRWjzcQ2r5JtNFdURkik"
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
