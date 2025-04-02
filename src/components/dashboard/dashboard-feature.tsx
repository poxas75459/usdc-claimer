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
    "5xYUnnH78Tso9ZYReuMeDT71go373Kk2H1JSkgsznJpyaPjhzN6ARu9qioXwjfMvmf9RQM2F6nF6mfHt8JaQ8mMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eFt8hs6mFykwuG234cPFnM7nRbVEQiXM6pW6hQ1GXgXTa2pihPGYhe85BnFRsSNkGdHJcWFJvenTLJnzWRfiBsr",
  "key1": "5Ue6ED9kjFD6kog1GZBh6fCYp7vGexS1RgFJ2srVZdtbc1pGhGmXVEdWUD7P23UbomfWDCQqo78PKAkptLFvx7B5",
  "key2": "Y8ygtnXYFpVCi5Cmyo7R7ZMfyBtaXWdu9AJmYVFV9Kc3ire3aqac9zMYN8VYmd79kHMf8qLCxH354tVJqKxfaGa",
  "key3": "8m4rgkYjTVERkHc5CGv3pfrPmGJvvUgX7PD3fiFMHfaV28D2pq1PBCqDfVN9BzY4UfVavjA3uM1H2rs9bHyxrTo",
  "key4": "2d7q59EFghXf94mLrAezhyZocgStzeMzpD7B9EBJvCBazfPx3pA8wHZd84D9BTngSjaitrdphYNsQZiwDkyJWitV",
  "key5": "3M5m9PzwbgdCxWDjUwi2uNbWQQBtFimJM1M5ZNf8T22rpLvdido8s2M3CZquW8xfitVAogyCK6PoPuMH5E9mh5sm",
  "key6": "37t4M5CU8vypjmwvz97Gx2xJLx6pE3cM6uXwKSMTkWFmtVntEMd7tc8J47UVjpUa9CHgQuHuMaVzTFfTDgjsjTP4",
  "key7": "3KU2b6ie3C5Hkur8V6cCC33DUBtw8fSx85ZYDfVJ8Pd1jC7eWJrt1oDwugmU7HpZ7XLdpRCk7gGoCHgmDfvefkTr",
  "key8": "5jDcFC1TjajzUj3wqMSzyghpEvMkv8U5YPdwrNZ1kUCMiM3aWt9NMSFY3hvvTFVGja7mY37e2qRgi2u2NyHppTKG",
  "key9": "2mJUYF8RNx5Ka7ArM1GunECHUAkE28Do7ixVbDm7qAzyvqbuSaeZuZuYZZdqkSLKDmVRuVZZ9W1L6eV3qs6JhQDs",
  "key10": "3CkS626LJHi8DXatCdEHaJZoJ1wW2RAeW9fq6mCCk5Pq1d8dxpa4ziiiQKcZF2PF7UzJdSH5GVkvWndKq9fSnyxV",
  "key11": "2EsiL235hiuyaWjbm9LT3yfTX7gKCT3N255TNPoYHZQDeCR8Cr7FK3S3VFWWYNdZhdxgSzyLAnxMkWXDkaazLdD3",
  "key12": "WT7UQTvVgxSxRAXfe8YWdp4TfxtCfMesMV7iTtsx7JUdQpLuUETuECw5h3EZeo72owCDsSwM588Pw6wuoKQGxU5",
  "key13": "A2YEfbtaqr23nYg6uPQhQzXCHYRDWkbchYRp7qnaQTQEf3oXUF4Cii7yeqCNgdMHwyyx3tE1A2nbkZXSfZohnkr",
  "key14": "4yKLQv3JcEFgoeiMzLBggkfVq8BQDZqTZ2gGmw2gRN6BSfQacARZ6ffVzq9Xn38sZXAZTY1sRKC14pifkeHq8zCP",
  "key15": "3RWt744xGBoThkCoyeT7Qi5CU3DSJqiWSNriFAQc1iQApJcWFuuZybmXnbVGDUEPLwJ1MXT9xKipgf5vSFzxGS3B",
  "key16": "2FztFVa1tTd9YedfZwbo7VoidcWAetjqyzLcRqdhJo9Y6GDvu4vpKTy68dnVUcCoFQG2Tb6tr13ReYoMi7mKYcPE",
  "key17": "99mrTsTSR3YYp8TxiEwVye4muhycYMBpvJhViuioufUzbvKwt1a9AYwsQnYMQZuQokXFQCQJBJsh6aEAbfKEEms",
  "key18": "4yQ12sVKktnXNu3okxFoJEVPBrWddxtnnegrFfqYBsf93NY4q8V3WxzuYNpqV5dJcNjo5bF2tcB7cqKwPH6obp71",
  "key19": "2WV3Z5g4Kxbh5iTKJsMf1GS7FLgU7oNS27EPCidb1i9pvZc6riYwmAWHTKX96A1bTepZwTR16eHfRPMKhCfVds5N",
  "key20": "JSnSpanCwztjVLw7WnNSWJb8NW8aCrb5BANVLexJ4dhx1D1sytN3mq9rQye4JqJXkYWFXsAAzz3rmfNnNkSo7Hj",
  "key21": "5c8Bv1YNPw9FDDaQ7dSp86Q2ZiPBuDTReoWuwMuQ5HTjSEE9z6ruhoNxhkd6pjHYhFqPP6xNPFBVKjxFH5xt8P3J",
  "key22": "4uzfm5CeHZdrppsPamN1jU3Zh8ezK3TosjUEn1atEYhS8TcHgwWCyi9vAirSzjyZcwZNKA7VdXcFBJk3qkZnjFRR",
  "key23": "54zpy6nsHooPYeXA6m8EshCT1PXmhzZ3HG4hQh4oueQuagRqDy5sCcWLWcuHs4UzYHjbJMYeoHPAacusfhXtfVNb",
  "key24": "4TL7GXpinE3MeVg8VhgTWuNAupZT7HM4PmPfEYDJ4M6vd9g6xdjexFn7pGi6GC55NmaYASeiTsXUFBHJpvT3ytMn",
  "key25": "vvnggegrhgoToLMcxe65Fav1arxobV6pU5KXEcPUYdUS7NHP61K1Tq7mm2q3tpaGNUkUakP7VEvAhccLDxVUtn6",
  "key26": "5i4mhpzarHES2cYgnPVeFyAbDdnfmQp1gLuPmUxESjVon81CE4oGH8RWL6sBTxUb4tc9ohWa9fbURmxxr6WgWgub",
  "key27": "qfJM9xiPZvMFutjxER8TZ2z2GwrcUAzWMtVtVjJRmSJLacqSQvDcBaPhRGoxBNwqBn7ZRonexjoLVqrs42J3MKJ",
  "key28": "2CCxBgoioizx9gQiihSJCsiy482Lp1ii48rXDi3YmkKYWsRiga5MrJcCkSsZiS8yWJMKUqCxjapt4FBismj1J9Jv",
  "key29": "5JMEmPda7yTjaoB44no4qk1qDbyu1M6aVvPXfV78ZQM3fwb9yyENSNaxYuk2P97RNcqJkWHg4NsQUTwfkqNRtR47",
  "key30": "UbbMZLC1ek2GDJPmPnsq4SSw8dnkngFYZAJEotePAB34dynUX6gcxN2H4JVjG612q2AanBpZrpqU7hyjG1vWfkZ"
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
