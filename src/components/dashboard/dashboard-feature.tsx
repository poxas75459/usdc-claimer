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
    "5j16r8JLkXKk3rgqnQzVgQBY5EWxjrLXJpYUQtBBuLPvqrTrGG5maKUUSrwpQhrDUVxHtmeSjyHH4QQsZC9ohGFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "446P7t6b3W4rXfy6PJSg1YdjAHr6etLze1zwNouFP2agVS1JyQiUP6obgnSRQqTiUK6EQV65rFHh3Y8sEDYoadm3",
  "key1": "E3x9BxmzGMW4P6oj1YWNMb5p844NgwDWSoZeEj2qQaseYCiEVYuK7VHywAHv82GCSKaqNYvooLrc2NfCMB39Zxv",
  "key2": "5rnZMzroNBTnFEuRTh9xXtAM8yvmToFHwiNA6sdRw1UZBEFvbrW2frFraCBXs5FCH2XEeJAfrhBgtjktYYbnRcEP",
  "key3": "5R4AehuhWDL6pi5nt2sT2zHJLPg7jTT52ccrkNa2iozgEaL7giLK8jbNqiU9bskrTX5QcsPUMZ1ifx7akbxfjMNr",
  "key4": "4YpMDxQx28uSwdRmyc2mTJZEN16WMfkNomh38Q3KhPo9BBv7AvoiqADaHn5P81TQTywESZz542V9SYbvmcEF72ZP",
  "key5": "5tNnDMX729eSSMN96g2R9hae9kspNA1i8QFSUQ6Xr26zd5RzEFq2S9GdBxAniuZVkeBaG2JLeU8zdX1p7JU2Fwjq",
  "key6": "5xeyvoyPJCVhnBJZd7ovHmoyAPehRNdEkUYYREXhGyVUCmMtEdqHkTQAnPA5oVtrqR34xAV6QESLbGUbxc58kTEQ",
  "key7": "2KuZYQDnRP8K1wjiu46zprvgYnxZyPWEFd2z32fDiJ3ub3ZFxMk3LUtocsmxwnCm3H6FbyobarHkTmuuqCEKb7Xe",
  "key8": "724yqrByywrfivYBUt8UkMEN318vpkfq49UwztZ47SE4nFR4Zfvk4UmV6XSCqpdrXi82NXWyNi6okWD89GWcnzf",
  "key9": "3KmYQydYesELuAxfjNWf7ML4gWDWepeF2fCwn3TKttrbjxDu6W2zcMvrpkWymNwQjEgozdmqCc29SuqV84HeS8RW",
  "key10": "4a6HahUk9DwvigXf2TavScT6yaKxkMuqGWQHg9T259x1ayReTHXYrbuT6gbd19meDeos2EomxEy5CVjT2hKzgADP",
  "key11": "2J6GrPiFMbKKoco7e8kwbHbKM9qvtECQVh7fY96yWRBCnna8AHb6F2J5qe4ZRa4BfU9YaKm6Y5uc8afDMLGva6wr",
  "key12": "5Ufn6HnFzJEfanF2nL55GcQTUFNuQ7EnfUCZA6iCJxPi8buvjg9NHN5TWLRpGkpCXGzsGzsNKXq6kH9qVsvTSBaQ",
  "key13": "26koF8nE6r7rKVwFEUyid5zJBsWF67MRZ7rwvs7o9SMv6Jo7RP6skb3vuuUvozpbGRLGho7y7yVSsMrgSJGLNoJm",
  "key14": "47iMz1rsUaDNS4BL61u4UGLW2LQjjR7V2jvQxpLnrp8cxKMqzg8KFSX9gVyR5vGqXHmFqmBU2fD179taBYvNX7wo",
  "key15": "2SGrLYFuKkCkYksTJaTR9W2wx9gmXY2nLi2t8fSBPwNiu9SaNGwnAUiy4hB1TtuxVm15zfBWmvNHCCvsVgwUAggH",
  "key16": "iKhGBwC2KL4KoZLDEkJ6w647eH8K73m1sCrBCNLvrHQZsdvo1yU9kiNVcSa8nD4XQv2CjELrF3Df9VzPDsm5yfF",
  "key17": "N6cP9RcQtjFJ7WcaMLWgGVB4nkDotDHX6qx1hgXyFD2754mSvBjVkoM8CueYrw66GgMqWmepyjRt6rYNYjzAp9F",
  "key18": "4oGpSvgmeZ1HCHrNus8V4aJ8weBGqQVvLRBVwWkjhiFmt9j63AdccvHZ9SyRf1uEbTM5JNseLUAnxQvSrdKRfADL",
  "key19": "3RPoYfD4tFyki5sewucSZXpZV1LkaGPo9wEt6zwcVJZvq7E2HdTQBxKqnUotkpo2cbx6VYKhzGashdF5amz6GtuJ",
  "key20": "2NXeuthxUukar7jkck6pnW11bQVWXgSs26R5MWXEdnkYHVfFEKgPeGsN4hMZq38zGbbs7u7wJYGXVF8SUCGnPYzr",
  "key21": "2gkorTYtcXdmJ7XmbWD5jx5UbmrTJ4LfFweUQCcDYqPUYwoV9M6rRm9figGdnkXM6KMnq7dL9WjA1E6u5f5UAyK4",
  "key22": "5HD9yJuHwkqzXjf5r5yxjGyqdR4rhNZXDso5scWc7bZYicXTRoWTLVonyvgmdEME43YFkJVYER7fCeCLYr1X6ziq",
  "key23": "5B6hE3BSYUAfpZXaeYVnZop2429RJ6RuRUG8p4Mp8dZgZ4tvpcJuV9hvChVLKcswte2pcFyapBzNapTis35PY9zY",
  "key24": "5UrWgLK97YYsMDcC5SjRwaS596JxE4VgGMYQA6RtftVpN2dv5iBqDGbhPzj6q3yrv9WnXDMD5yCf581qn8rpK7d2",
  "key25": "3f3CoTCPd1CHd7k7fqq9V5RFy3Nyj4FfpxT5Ek5KWcDCdG9APpCeoCVJaKWqQ2N2ua1kmUFdP8PZE8UuRbweaDEC",
  "key26": "2Z8eGD8pSRjhSyrSCZZ5965nbmN8zJaC2E4hX2uXn2Bsqd9R1QUZUnv7g3rCBJdRJ7ah3sxyTczX5YuBCVyLmvz",
  "key27": "5wWhb3e3VBHvYkEMkLjHZdiv5LKpebAbuzgs4tWVcLVtD41S8h7TuMia8ym26MVjCcmX34Urqwvv89cA2AuP63Bw",
  "key28": "2cDUEVyBP93kxft4jUoBkfQcpZrGJnwRJvGt53StBUWQyX35N6TWsVpSK4oBZ1kow8sgRzmRyr3VThKuwTLedNSm",
  "key29": "5MtRWMf6CCNA2xnqEcr5m223W3pW5i4yYccMh5koXau4KsD7iWJMGGtwVqaZjuFwwPXBoBqguzSEgupPBW1wHjgA",
  "key30": "pDrvjCVqFxdy13ZL8eonXmELxjUffQjPBFBL1kgQesGhknquJphV5kfnp3fhiqUMcrxCw5ZZPWUvEALCbfFArY9",
  "key31": "67HGpEN5QMpqCz7tdxJaRSjyvjDZuthk6Qm1QjM5pwy8yMvPNVdzXdA3dRdCYsSSJ2xnvieA3HsWTjAaztkTuEeG",
  "key32": "54GKo7uktBYkm69L17Xd416MXcddmh9o3LjynujbEuWPSZNutPtEiCNZgDxkNBndvvZfyFXrehzn2hjCsHVQ95eY",
  "key33": "3Z1AXXYPmdYbdc8Lv8M6vkvMNGHgHWTkdQzn9Wj4NZAsrfbnu5Gz7taJ5gzNavLBXFC5tsxRNSjsBHDAAMwfHnaA",
  "key34": "fcKqXxKzGDbfmT6a58XdBYQ6FkECwsCBAuxxz43HHxVxkFMJbTJigdWqLxUYkeYvAZmzWtHokgHZTBvGSHuCzCj",
  "key35": "3T2dUhm27R6Mam6hDbiTsXGTYmowR7GXkzdAYHHKJChy65TuBJPe9YYoJkzArPhP6vxJCrRVr7e7YPrPcADAenn1",
  "key36": "2f3vecf6fHi85e8XpNh5mvjteMw5p1cH73jJgHfMuH5FLXUWLQJ8V46NqCaBoWSEaQc1PZ6doX2vmcomG3HSgKaB",
  "key37": "3dqWsiwgb9MG9iRmTSsT5zXVsedFVpVUVeeupF14zfFsexvrTSYqW7Xj3xyaHgkzeTZGDfejHaNVbaF8cpVdwvQm",
  "key38": "32XX36X3jzWTayEAWfiqRbs7WAGuwFuVDdt62v4kFPSb133ZFVAHzXLtbBFkXcaEYyGnWxwQudwD7huyP4FEP2PR",
  "key39": "3cDby366o6K5AfWBgyaw51s3CNPhtqPGxmxA6whW7xkJiNoiK5eUtfCAjEQFmjGuoQe2h44TcYVovdHrPYhZGHMb",
  "key40": "4jnJJiz7u83HoNbHNi6VxK3WEERTF8XguBqeEF8zzg6ZbuRLa2GvcbcPudEJH91m7qu9nzcuK5iGayuwLtgu87g",
  "key41": "3x5i2Y8ByV516H2pGxgPb8FNoMAAfehAPos8LPtpovPUPiQAAB1hnzpExaoErqvoqSZwLFWb4sPfh264p5gW4Gft",
  "key42": "3gVnxTnM2Rme1qzRjvBjSgATpzpTuanjmpQaaBr7aYueUDZfc66gVYGWpRnhymhPE8yarEzHjUqc2NQT6cHYP7XD",
  "key43": "4M2Bh2QSsh7B9L2GMANn4NMc4fdKmEmsvwPsT3hu4UL7Zwspt3BMiJAKPyQVHM3ECMmSRXm2YEqS5c2naoPzNb5S",
  "key44": "4qiQWrj3Nyv577EeSjrNXMJoeXKfboBFBaB9bJoNAGjvwJYJv8JaQbt8ZeFFsvuFpuShK9bWGis679ZTeKPiR1se",
  "key45": "FLMQxWDHyy3S5ynv62PPoejdZLv2BEGg5p2YrM5ydSiMSm6t9fyDry9aVBHpXkXDUzuKMUtHBeTQXL2M9kucoQ3",
  "key46": "4JPJGHF422oCSiREDtQtzvbGpP4LGi1vsa3w8yuxXjF7ZwKj8Vj44vTcXR7FMQNgkRP2tujjsis4vbEZPfHma8kC",
  "key47": "2S6RdAifArSogTFL3MnqowjbJrUXZC9whzCfr7eF96rFNeLiRJ8Af3CphdJ9bemKjgB9avFNhFsT9t42aQLWSMHe",
  "key48": "64WRf7NoB1CYCHaPjQMasusN1hPMATZseccVUw6MQHfuL8wzsymYbPBukSdbvEfmdpQyn44nuW8DtC3LZjA4RnSS",
  "key49": "YntZWhFDaXSP5wunmyyuhGcZzjyRZPfGuiofJ72AdwRWquQR1hVXJ875XEvcHa1HLWFBX8QVWdotcveeAo3hipF"
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
