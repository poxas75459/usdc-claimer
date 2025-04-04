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
    "36ARqjYPdxjg5Z3n1TgYktMTxRZ8XbTACzhXmJFvDM1YuVme7zRzZ4c79cSdD1jaGaGhVsbEtKEApHgK6dT9PxJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58nvaQgMfypdSSgL3oM5RfQkvXgPytpj57X64NPRaFyN77ezdzDjsXuP6qYqYQmYpwqmpXQTSB65ieYX8GBd2abU",
  "key1": "33TkgxbHeeaqEvn24pg9TeqiVkTs5tJUP6E8XcTc18YJaUCGoPrwR3KR3k33LhSyqCRPomb6vXUgnft5bJouDd1y",
  "key2": "4khWSKw7t5oEnrkmK4xmC7DDrLde5D8NLRLWvNyiK29bDuE4kjw5mNU8XWo8PcPotEzdSRwED28fYFmXUpKEtGHB",
  "key3": "4qwbj4hba3NFGzvmVzKMpDH4KxcqRoaHfyfVLvrQeJJWwoQZyfvx9Ukcr8es5h42z97HgXDA5uMxypp9sx1KJcXA",
  "key4": "2kCYgaWwFXeVFsG4VFvEtJaJ6LtwP1g9srrs89wKuyYhn6jWX5SPMFghiStY1Sq9y7QYxm1oGeVTK4yuTARURvDf",
  "key5": "35mATmp8XWz6djoNR8hi3BzRYvyByzHSRvbGJ3r5KS3oKEVhQKDHZgsanUewmrDEdg56BS9xUE4h4fqJ8RLnvnm8",
  "key6": "2Q1RvRzugbLCfDSQCPqQ73kNr1TmHumHWkkTf9E54Et48e6NMA79Q8mPrFd1oVBKbCDsXF8z1hv2cEVC9vbKSw9o",
  "key7": "9uwFfMHS1KSSw2Bvo7sMTdNK1eUgJcLMcE4brkaTeUPxytBHC7Pd7gPCFjKZyCsQk1pAkLeWs1CTF8XPUqgUj8R",
  "key8": "5M1P3yb7C1sKoC35TTEHSdPngx8eJfDirzT25XouWocShtQgoJ98GgZtBtofJBnb797yuNGvxPDxrrVB3rVEf7pF",
  "key9": "3cFzGQG7HM8SLoS4kJPnftf9uFQ1vDjr2rxDcen7nsYqHwneSoPYGcggVDrbP1QXU8Snxx37DswRD4brQaAjACYt",
  "key10": "67HuTRycBbLamQMmyVrVhMu1nq3x2HEBF7S3jfw6LQoV1uvX3VakFouwFpa6GqNrh45DwZ9yVafqAXnaNv3rU1yj",
  "key11": "5LzWCgAdWWC3FFPfNzb4i3NDKWQqoxh9UGurDTF4fPAidWHXacnXAxn9yrJYRSLgMneHYUVHYLt7VLvvxkBy2cN2",
  "key12": "4VFJYdPbEvYXzUumzCwTwkXGr2koGQBnZdghGyB91wH21NC7afWFeDDpG5JF4nebEwz9Zha8rzwB49TzQv2YJn6A",
  "key13": "3Rfp9RA2ffuvExNFnXRNDaEW6d7wCCeu1eWJ7Hm7sgT1vTPvshTcYKXf4BpmfyqpXqR3oRUit63KQkUrJLVN6bKG",
  "key14": "2gingyShodkxU7PQXxYE71uTR4dXYYezrYnRFC6VAG6SaS9EQLFk2rEMwBssDrbxLoDgDQpgRg8Cr8mnzxBgKvSs",
  "key15": "5ffgQpudxqYykSvuRFTncudjzVNwK6dWxhKkrJVrMsnESn7ueqbiwJFi5rvbsQEnqsrGkj6oqdGHC5ajaEgtsNB6",
  "key16": "Soiqymz67Zt6zcW1xJbb6DYu41dLFJ3YzJSiAUzAMyenLR89W3qx19hUTXF3yZexTYWSzriGjBVB3cf7mKoYkQg",
  "key17": "5n8EHHQoXpXhaTVrjKHwmPFH2oN72hU9hdR3Yk9cSkTiBWRaVeTFkfxH4aCDPxQoDkGk4CiwcJq2ejxg3GhqyiX6",
  "key18": "fgzSSTvBSURQgcNEut3ccfcQ9vHmiJxuRG8NaVFnaGsvUGjpYSM6vhScXK5HKV6MFR3NZ7A7Eri49K2YUrH2zyC",
  "key19": "2s5WngzmwEwWmfdL3yH6hpzjkFYm5YS3NAkAx9eUMNGg6K5jpYgQyuvQR8QD9Xjw33j8Hm4gaeDirKHxAZgy6gZM",
  "key20": "sUZ6afgWATxgtAc1Wcuvqa9AeyoBYUQ1NAt3qfHq4wfEDuNDhY7WANcMBwrtueJwPgJmHCDtH5hT6mYG2Vqbaqh",
  "key21": "51zRrmBiuGkGPkmNQoV65T1tGHoQwdWdv1qspBZb4xLH7uNUQpfC5AEMbP3aUF2k3eXATsjsJRDMgtvgrt5V8xuH",
  "key22": "3kw6DeG6FKmdjJiKst1FsrrfFceVTvMTq25tB2jVE2CRKTegbzB73ZCA6x4oeHWCcNBhwtVWgpR1tF9nEyqvHZBt",
  "key23": "5oc2o7nZgsGvPc8PG4NwdnPFZvq3QCCfddxudsTCb6RhYae4mvxf1oxVihwsPtAC81FzPU1veaiuWjcp5cZG82UV",
  "key24": "3u1KiAnDe7xVieasCwcQSycU43gMtoYPz2uhpFc4k5Bqp5oykUHBTnB64iEvWWLrqYVKHKaZU2sdL4Y36uQ43YPD",
  "key25": "4dzr4HRV2PPNVpYP4H6ZRZqCMem4cUvbUuFxQeehUEGFYNrb2tUQYGhUM1ojAnf9Wb4XtrSxk76xAWLb698YAFUq",
  "key26": "4UpYqQDdNwN29n9quCFy67RzspK5gZzduPnk81beCe9vNzrmRG58n2L7noeV18PEvXnoMn9jqpzxeUictS7Cbpda",
  "key27": "4U2aafLHZwsmMyenCsgdRqcTzemwunxjhNxBLyJJyxUzqNd1AJAq2FLhqLSaXRnipGLpNULdEiFKRH6PsDyeihRa",
  "key28": "iScag8E7xEHNSSitjhVSUV7fCRrK7Md62cXJy6TBHqHo35z57V5xeX6TiYTsH1ZnZZdfGp2VGY9yLP7MXmRpicu",
  "key29": "5YhbrDGmjn94QkUnjLKQPhbC6bdaWiKGdQh4mxU8rtgHmXq4pECBa6ffYujudZw8gDTCodiir1H3SCf8wpopvX2F",
  "key30": "5pXh5mds4RbrfRcV8zZj9k717TMLyB6eMsmZjeTFpFkKotTKkxMxFbR5MMh96ZqG364SQCgBB2GnDDc5sZLdYstW",
  "key31": "3f8urfJkVasM5idonwQPuSo84byydnTnywH6rpyJQWPDgG9vZ8DWGxPrjxoNuQDuHjKe9CWS94YeA1K5gme8D8c3",
  "key32": "3dx5cmNAc3Pp4EZPExUdm8jwn18aWPFHcohL7c9U1CteRU4G79Mbij6RLUePGnosb4F6fKV8tKcLHhnA6qahuToZ",
  "key33": "BuZgegrwe7j1CKxPa6bq77dKNssf252DxhJHq2YsFJFo4vSyM7EhR46ufUA3HpbTypf2maThkU9wHZS5y38dMhZ",
  "key34": "25HFX2KhH9sV6dBJ9YjLC65eMTTfnwnW4JiM793kGKVv7sdVSkUN6aF2TgDGsDUg2fAxJ2wYGyodCx7WFq8yKYdN",
  "key35": "4dNhJYhHLyfCUg4XStipLSfYAjwTkD6rJfBuThVjyppUiduRBmjJVGbJJ3F2jta1i8bsjwUc1DZ2pmVsCDXJrFVD",
  "key36": "34eQKxwv6SJDihkW4JkoKHiTaYXgcCexKjRY6vhnXLRrA1fv1YFwSrBJaNh7AjGLnD3UtLgoK9BxzVfNmMg3Ffhu",
  "key37": "zC7nRZp6Y1rMpxMjQRH9BChKc9YV87TihcrGjzpJH9aGtxDfvm9krg1JQSE61BHVZDNRJBvczEgK8QfMyZk3HAR",
  "key38": "33gLLw1dt4LQHCUmXbFkMiGpwb6e4MRqiG2bzLzvejnn2L42nz4Zhjfp64HMHuBZL76sQorNWGYV2UCRJJPiuq9f",
  "key39": "5FfFUkYUozTrUXvgWtbqmMF1wJSYb9Cn3TkRhyvgh1qwKyaYB4c3uxAb3Rk5x8yw1wSZN96GCDj4vwgT7HHaYPpa",
  "key40": "2JkC7MXiXU2owYn85fin3ZdDUn6EmMXDUq9DHB9UyW6RWH6RKd2NtYzs1LqmoHjcaCJdGkRHMNw3XLBxonpxXhfZ"
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
