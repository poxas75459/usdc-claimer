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
    "3sAjhhBCJppBVpSVoj2jNhQMzsY1YMARDP2pEFffG4NENcSNbinWDS9p3kvNThz3k4sLBJpryAy5PQENLXyWUMwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V2Dpxg6bzZzVJr9zVacqLdnouYeNYZT4t9TtELF2FGAD8p4BTmvrCqAQJyoPhzmTfzrMZUeGYtQoaCqJHeZtGRL",
  "key1": "37amjzEvHYtjaxd7SMQrDgd5U4RXG6YrqAaXEZSudmvxAFNPN7t1ScdeJGdvpa9RsnArzy8kQsbT6oBqZyyZFgzJ",
  "key2": "3tgXHsH2PSxp4FATSfRicEj2kTNuufyaqcGxCF8mu2sfXqZraKEGhkYBAowk4W2VUrWwewzRpAKFceJPpguydQMS",
  "key3": "4Vt84FkcQ3T9spo1YsTVYpNXgS9LRcGFmvhJkkpL8GCj8Ce8EwBbKo66oYURqheFE538VVfeYBHAffbVss2DLMG8",
  "key4": "2YXLb8C1radDJkKk4W8GmAKjmuLHKA78acr56FT9Ud2JW8wHnvKLEWvjfMiQUT2fiQrpQhBbq3CqLtXzhhAbXQzY",
  "key5": "3xmnhPsDsZNpfHYuD2bbbNDVdP88ChJ6jcNb63fLWa87FLRWvYNygFw5sRqVAtfmiUwaEke6Vm7bR5DekUZiPrtf",
  "key6": "3kipxqDvQHHHZ9eBGZ2aJzLv1L14eyf1UJEWdXt36QFV7yuYNbbQCFYCerRhy9NBarJP6qHrGBaaL8fNiEEPnoJP",
  "key7": "3Vj9bTtaJbSzPGfE3zX1uZZPX1HTSiQAuqoBDazP42tNfveFu5KSjVNf7exKL3ghf3S8R5rVUpJSGKVX2JnujK6A",
  "key8": "5Q3iWi6QrP3wQSKEYwsVRaxL3LMvAdGnEKzGwkgJPmihtzLYdUpS1HS2YChvVBUMHnMoPSab51WxUoBixFD4nayH",
  "key9": "5ftPRv3vzdopqNX6XcQgWfwJkzD1ydm8y7Xs2VRvZbMpTU3cTDc9LfJjpsts2eYP6afL97aBSoYF3YMshVR1nVUv",
  "key10": "2KYmDs3qGn6LR3XN6SHDDQzRz3m5NcJFS2Wq9jxNaPPbPHMfywCC5hRXCs3YbFF4DEMn3Et18k782mArwXzcXLx6",
  "key11": "49gvdSgJJnebKiiJWMXwn3v3ntAiiHkqKGEMRsxRT7xgKskvDNa9uCiqAA9VcdnNJ44w2TBeuZfV9FjHh3yKAbNA",
  "key12": "3TRi2ABsfhTHzeEsVWTzytv5r6P3UG3kP6pWCbJ9RipA1vG9jrGSxKniaE7tAJJUvKg8LLbxUeS3fH3YvHoML9hY",
  "key13": "35Fd3DJAQ5CKXcWVNHiFUSFDhjiAjZLAF9B7SF6a36z5GQib7egqV6vqgVyXEyvy6pg8Rny91WdsezpXyABDqqce",
  "key14": "6bkDxw9SEz87tqBnWZFAnZDPTF4kqL1i6TWij8MbCveHcYDgoUFD7xDjocMejENyTpd5RchogtnDg7bDX83MYSr",
  "key15": "3eXjVKxEkCir7dtjQFdvm9bncdqnZnkpFVWfDKErpC3DheCVGGdAoXUoWzo6xrs66g6sC9hY34msUpyemkQy4h1E",
  "key16": "48vmeV7JRsBgx73ZvFuaawwH2pNm6K1Jj7HdzRrSLkSiBmXC7VWP7Ga7Jnr7j5mv9fRwFdUpLNjNMFbYVdMMGsHN",
  "key17": "4kLcRuLjdxBwPXekT1Yth8w8sdNcg7hFgu6eikTWLpM5G8st9Ci8QdYK3UH92W5rPiMUhytDotNkD2aPHk7SpoiR",
  "key18": "44fgjQNz7SCoa5QmBKE4sMio867Ua6f6NVS6pPWJjyi4jPTfhQQ6NqPWhJvqf2rmuHjVVnVtsQWmadBxc885mVLM",
  "key19": "3pgvPPFpo8gAVsNmjBcvx7FEGgYrnNttYt6oM5STBLkP3wCTKdrosjwA4VMyeCpKeSvmSRxD9hAs1X8YFfwet2rx",
  "key20": "2LDwAPydfcMkUatUddR2ezkBLkBiedp8GcEJV8SnCrJMDRtRmKS1g74zi18RuzdVDLQk7CMyg9Mj5Pxj7VcJmwpt",
  "key21": "2Pr6AdfgPL3dgktQEwDNupxozzH9DrTdn41iaW2fFe7sbHK7dUwvkM5dtKhKDbF36oHjHiTJQqPQnD4RCPRpJojR",
  "key22": "QihrDsXyAuTMmY3NctMvnG2zJ6TLDhrCkdE3ijXrijG759a3HapM2pkgmFPrLhH31bmVBgTgNE4ycjkHwVGZP5N",
  "key23": "256XzuQnLaMuAPGHWeKXaXmszB9JKcfWcTCtPq3pfY4z1Ex358gv1hxFNQBtUcjFxdZxWnoDqb2Y7J7GnJojpJ76",
  "key24": "3sUspnuJBEqqrbnoquaig6g1g6oDxF1w9eSypGv3JVoowkxeKxoTJ8fF33Unz4bDRK5PKVWpinmbRLVdbamm1DeA",
  "key25": "UmfN6jnWPKor83cHdgCKvw4vA6uFu5RJsxAvuW8ouJNFeR51h8gjNpVh5id8W5SuFcWTot8597G4KyoSSfMY9ui",
  "key26": "4MxUpBcanuCoGoGuhgeP2tdLocC76noHPBh3GLYA2972ewC2zobNW7uSdfB4S6WL6oRKruH9YX1nGmXY8ajqeeJ4",
  "key27": "3CZvPC9WYnXEbifiUwZJf3ukR5KsAkU6AYAnS6RvRrVxCkuMLjzZwTGSouXHR9M3HPzZpWSvyEwVCeCKSJAVpXkX",
  "key28": "428xcQwGx3Mm6gqpmthuG7gxyKnEq8ChrQtu8Ev596HpxfQ8N8kCJsz1muXmWTnjmFHKzY8bLnsqtw8YETWhfsWx",
  "key29": "35JNUnZqc7Bh2vjoXdyB6DBQBRRfF7dAxcKTLsfAnGhVNmgGwPbcmJaTxtuZ4dvPXg92GCkBvhZsejhkKVb2e3uo",
  "key30": "52yc9efjCmrk2C8BnRbnVRCbDuUVZLYX8YWf26Z8AjeoaFpNEQ67DpyuGSJrmcqWdPwmRckaMWYCmCuVBKsCgPSr",
  "key31": "4uDyALtvVBRxmjNqSLaKgjFi1muDqDJfSmpjw6apeBxpbEmxfmUpWJmboBUc4k2cM8QQdY8ST5Rcy5GLj3mZVJFX",
  "key32": "oa3rwhDk3Dyr91kpD9KWuR1qZtYzgMR1LtffY2ybuZCZW65RJuRXm7rZbn1eJNVdqUcw4nCxM64JtydsKgMfg8J",
  "key33": "2igFjKgy3btGVeSDDQFwcT5SFBsJHN1NSTV8m7e8JJobBWT6EEke1mpoAQcCExwXbBmW59Yd8N1aHHqViEboJb3A",
  "key34": "5Nzjs6nRixJYFT79GA12a4xg6mJgjQQM3imx9omkZ9MKrovWXW7HZCYZyhV5JqMYDybE667UXdkAP74CbUSFjDCi",
  "key35": "5mqvwinkUBE7W6oU76RS3ZSa42fu3LikQPGZ2VMiAuk1upGwEgQKStQy96qAE2mJyLJnyHP2UMtgWuKNNvJYfgeG",
  "key36": "5Z9pgPezXE7KipnVVn5bmgzgPN5n3iKqYua6S9uGA4PDDNoU8JwWJJz7RAaHRXvPKSoCN15rgwMUzSH9vHqDkvKy",
  "key37": "Rt6UjRCu4mDjun5NofMyX28wpwGsDkPDuQ35fk48hhC4GxV3jQeWXLTnvJoTKXR5o5KWatPpnoVpozth2yXHKds"
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
