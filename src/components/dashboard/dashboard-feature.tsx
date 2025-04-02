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
    "59Hn2SXXfGfP3hQKcDuTK1Vj47kZgJ26iycesHrXVysU1QadWcDn3VMcSrQi5MxZYqzeK2MB36wGkBXcBKYc1qj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ezvKdauRnTyQ219AcmiY2HoPsNHyVTZf4k3TVaE8W9rocx959wtdtJALFTWggfaQudwSCFiwPRmyq5nU7ADcJ8y",
  "key1": "31CZA3kCSsXykk7q6pnfPn6kXuMb2H4MRo6Zs5gY6UqtzuwuEz3vG7RHMnUvRTLaq2iap7vcf3HHLQGAZe4wu7R2",
  "key2": "35b2rqdiSnBH7Xarp1ZUbLbmiTevnRxcwkpLzcRK76DwVVLGT9663TpjHhgJevLRbaLU83MnNpSj9cmuMj8qpAug",
  "key3": "LEaWethoA5n2WHRMzsn8UWngya2u9ump7oDdSaqnR8zm5uHUYMF1qw2RyrJ1JDoMuX1gXX8j1fF1YGk1EEAWt8u",
  "key4": "2iJh1TfsAibj2davLRrx4TpG45Zwgx3V45iehdcd8F3v3is5ntfqzRCA4ChLvvoQz97Cbe7FDvzDRz8LUYBwWRJy",
  "key5": "4NSpaGNjLE7cFcRQfbFWC2zkRh6GwsftQHFBHDN9V1hXMJsiGiiTdeRSBd3MdEfsT1zd69M15GWUaihgnXAuEpDH",
  "key6": "5Dozovhfdtp2DuRvUJ7gcd7JJp3v9o7bqRnWnLHkbjqFA2oY5dEs4cfZ7rCnnEkTay4FwQPGWvmRsFJEQsQk3rQs",
  "key7": "5Em956s6vasswAzF8Gqcaq5uqTTTFbVAGKgbQnx3Wkyz3FAJeFQRkNkNySgaCCsvRG3eLbdoCyEVDXHAGtENHpRk",
  "key8": "4YhG3DW91qrr8R1fyJSKu9ENAF7YS6o4DFAy1wqSEQpaMiwDqxUUnG6odYmcYZD61XdnV5UTeTaJqH8zSASxEGVM",
  "key9": "2x2E8nvLfsYpP5eq9V3Gty6iB212HrCzz2X8PHnLkKXCxMhvpNAzTiDk8xPop1YyUJtxaxSxZ3KzM54v7GAn6vm7",
  "key10": "2o5KBT3VaWzhduW5fB3x86DBS93PThbabmnvBrQQyJEsuAqcCrk2NX3uHT7DsS9cAWpdQkNkKy5bYn4KNDMizcxo",
  "key11": "4kVnmvw46RARHz5erdmx1ZRe1XsFFwdjrsZnu9nLW6xac5oUTxybfEzV8ZiUMdotv6CJTsGVTLmsP8SVLEDbZ89r",
  "key12": "2Jvkq9xhqPHrw35KcPSvZTUd6BEGQu2PcVzJB6iFVEee3jAe7nSmTPfJQ5FFyudarkW4zqtU2WEx7y5Tj4e33BmE",
  "key13": "5YsWZyJHwJXqsxaqFFh6hA7edM1z3KEcoWAj4Zac1UYJvxu3Sunevs9Vn6NWj18PVpiCVZxd5NyDag8KPbL3yJKD",
  "key14": "GR43L1aTXintEcjVcCrUUgYwrk8Uhtgp9SqRemU3ZqutipnC2upp3rvXx9nWhtTCFFnnep7ckw1L5NGaNewD8Jq",
  "key15": "3Z8JCYqFVagt9KLsQMSdeKDfeGdyWAL45aPuQPytTctHgN29ASfPq6em2qZswSnxFCSohWTkKHwvCxVDaRnsQa9S",
  "key16": "3EZdpNvfgNNLyVTas3yfuC3DTjkcH6tEnL2A4cwTVozHdY5UCf7nquch7zzneqeMtvdxHymFvTQ8NvSzrU3LwmRu",
  "key17": "63rkobvF3SaRrB73Nhzgo6D4LUhS8yr8Azyz8hFVfGfyUs12Cc3LbLwS1StSjnnDQLG1Rq7Qdu3gk9HoY82UHZsc",
  "key18": "2MDtGMDdcXxnip2soQcLfeMRoUFickUqKAru8DZW3woRYbwZpYbGSP3JavanZSG8gSfRtrg5NiRwaDQyMXronCBd",
  "key19": "3sxPxpu15UHUHk88irsUkKnSayq12QoXkhRZiCpohPiW5F4roohijSk3KELb6tE2KGpFCa2vAiimTroimw6cAaUe",
  "key20": "4tqNEBMtwpjw2dPEfFo8fe6PjgcLTEjBiuj5QPgWAXUVK75bfj1A2kfc6EksdjgQBUUjdqr2LBybhsqKqDXrgg4v",
  "key21": "tkRed8THQ4ex8UQ9HCzA2tmbo5JeJKmNco18twMFD5CKFHeJ1ByWMYCbNe9S5Yvo14eHEUsRtzo6naYEw1mQmdo",
  "key22": "61Y8Gty6YmERMujRFzUv2b4KdP5UWgLZ7Msyy8qQmgQTGUn1GTPNu2YUgXRYGoyhVF9QFM2cJfeChPSDngWEiCUC",
  "key23": "2bKZM114XhpPXHFsLpLNXvSiiYvvpteCxuzKz7RJBHLhwq3dXLLPsYxhe91tVruUGsZHXX5Y5bN2LXYs2xN3vjzo",
  "key24": "5buRCczf7ywSsCfVALSEUgYC7LhYjyEfYS4v1PhawKGoRkf6VtaUiZnjcXm329KpzSBoA8JMJDh2xRbHfa2bBbLP",
  "key25": "2VNhY1Rz4bigmCTNx1CgkbSFWXLsa4PRSELAzZdt2ZwR9KK3QkP5KwTjAFWCuU6sUrPW4xHY6EfBsBskUicvxiEg",
  "key26": "3mouD1rbWKpYKdqU73JdfrCjmm6pNYCVXWF6rkbcBcqQvnrxj1NdWMxBFZeWfpzfjC8w16Wqn2bBVSjcTpFioNYz",
  "key27": "2yNqgxUpVpqWPuK64SBmhmxWYVj6Xhx39BTtBGZfeoYPkR2T9Av2NaimmbtmyeMaxYr7T1gK8ZzyGuLVvAf5XHbG",
  "key28": "256bhr5vSCsp66AfjroABasSaxcavy24PiynjFAaoT2XmxTcFjFYfKjA3B9mmgXvNCTnF7t3Mz1jGeXHmvg23FZL",
  "key29": "21BBRK9wUYYmedNJEEb2acYKahVqcrKqWuR5UYDGm4JHn1gbbt3SUU2YZ39VDhfXXyYwEsdUFRv7jxASmvZwoQff",
  "key30": "55Eg8KY97F7MRxmezFyb9x5nHGg52opA4gUToE12QwGZvr4f1qXbvghe4sHUU5Md75nNSJp4ktRACj7q1uUt3gnJ",
  "key31": "22ySrfeEoJ6eo2ekSsiurXQrZacHLgMY5yeEaUw3gKBM5oXLC16cwoUP6kUtCcWbdbFoTcUJiCrgzNfnTHJAdq3Y",
  "key32": "25sTf3uBN1vfL2UZR4gXebKJwNDCiLjhsn2k5Rgn1BTYGLCeP1t4fxJhG5H5PXsxCf2EZRY1yra11qfEj7xDFWWw",
  "key33": "2eMDrGoDiuauKfkTPgmKrSLnS6h4a1Pcz4rX3rknKqN5sfC1x1zmDhc8mKwJiPQDtQ6QFm9Qr7HcBCHDhUop66U",
  "key34": "4v96yWQSLwTaMMSF26H3rbLM6f4cTL3qxxjzWdj9Pc7c4jBashhgBr7HuzBh5MRDSJPpWde2rzxmjqKT4Fsh9zvu",
  "key35": "2tFgjRM3MMyDszWKX5fW7uv8vPXh3X5r9QhGbem3zVzZ2EGN5c9HuVZ9wLyXDZU2o1dwYjNd9geWyBpKXL9K1BxK",
  "key36": "3CKPpbAz3jTyr5XUxZG3WP32BRZYB1q6DzjuQWmn5XqTkULjNDCRHsfPovuzHfyh2ZPAXqNYyh4f2ZTBPHRkiA1u",
  "key37": "K3U3gp4VgaVzi4uEq3QrkaVA2WZAA1E8EhwiGjboxPdxNLWPfubRXHjg75mEACpbL4PCp1X6JKG1rqtNGGcjRfM",
  "key38": "4ES1nZs5vHTRrNMxHBUotfT2D8pw4CbJWu3jEGL47WY2V5m3Z4JL3X3sP811iR56X9nnSiuBCcAoh7zyiuh5ZLjf",
  "key39": "1d5Mu1RHyj2Fu4nT6GxdmxR9S9Rbn94ZJQQNLW8b2tqRiNt8Hje4bLMFE2n8dkuKTCQxMnh8L8BD9QMEjCTboaU",
  "key40": "4Nmpkp27kQNzmgZ1BguxNRvnh2dJEKZgk2VgexcsdxPNkSk5md9R8ZVkti3zS962XWL1BVsHNoVMVfEVU964yWGj",
  "key41": "21qB8bDYZ3dGkoczSXVVvFU2pGqeQzsBZP8ftLMvwvcRyqXqGLUAS2eG8Za3YzRxfr8MVEgCaz4gd7LGpxaaakms"
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
