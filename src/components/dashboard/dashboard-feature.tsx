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
    "4mfpGxA3Xw51GB4pCeFwKF8HrsYn5ipV75qG641hnovPKKc915XPJCMwRocpNqAcyFXcHhCZVFdjWDfhMXbnHADy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4benShnALBQkm1vDNBs9iPyHcEn9Am4PgNY9uxVtaVSzV69wgyZmQPpdRVFhwryLNv2mvJDQqnSVjtGRnty3xVwZ",
  "key1": "2Z8AHBCDAnsBog4rfaEHQ9TNRFFyHhAK9ktcqjWbTDFiHNF7N1zpphpsRxHfm7mQkd8ZCKYH4we2uDCPuDGVfQ5v",
  "key2": "uM4ZVKruJyuCJRm7NeqpN4Mi11JPr6ai69P6bhiMgUu9pKneeuB1a4pktWanoSATbtoqibYmg5HjKJJXshQ4sUn",
  "key3": "5VUEuRh2Gvya4QDth6Rd5L2yvPncz9Dz6iYVZHcZkrgaYXwepopAGtirNc75D4BMVKeBPbXpG77KhcoEg6WnkjXN",
  "key4": "3CetovcEkYivMTaYpM8q6W92sYWkHQouBTrvHXjsoKTkhmJY2qZA4zrGkBNQ12qFVbsHiz6942Mt7fxVHEXvfwYE",
  "key5": "2pjPMGgRgfrGTbHnYcGCEADhxGwUoGgC6eAAKV1LzU4Dy2iQaKLbZQ3S7BHqVJVSCJkBYce7y7nDYUcKLKmgxPDe",
  "key6": "5WH9rj1wgFX594nmUFsvJaiS2PMHm9FBAkPPNfiWGnXnCwcfm3sqULbuWhQLWEx2y4dW1FARPKZLqRGDyNfVUkhs",
  "key7": "7eS7jM7Uy5hLhKmAP75NjB8fioE8Z8gZqPhVDsnt19k9ypUhirFEeD3nDS5ZsTQ3eZtR6y9iYcvwzDmXosmoMdD",
  "key8": "58pcJRk6LoQgpBhTjNrPfT2fdArt1k5ksomdMAyjwtseJtsNEeDgYnGfqx7XnfKXCuYL3fFaWGVAUUTZAkf7hQTP",
  "key9": "XNGwvJ65oQATkCkkAzyoKvsneKgLUEBhMHGujYiJmtwbViFYMnJk98s7wB7K2TpfJzKH1QK4HTRAab5pET6V7Lt",
  "key10": "NbG4hLHZRj7SodH1DbsbVZtSbz4G4KHFyMY3wn9u9HUnaZSzdsuCbEZv9KxmXT61Qg4xsj2sURiFYrL1kyxdFuA",
  "key11": "43aqp2ifC6BuqehabmVSD2h8yV82Na4hQEPV2h7pzzc4U41pu7WpmbDhwU19ZWrnyc3AVAjJqZZrHJeV1xb5MNhs",
  "key12": "4JxUb4oQQd1ptVjeGFaNnodPt5RstMfV1FJTs13X7PAz98K5vPvW7etkpzYZ47CgFbYoQSsk23xkQaFhizvuHLjE",
  "key13": "3NMot6eB6wGMZhpjiaRmKYpWEyenSxvJ2eY9XaPBemWjs75Yj44v8gQdMoUvizCDtTmYAbntNvmSfs1noiBUszoz",
  "key14": "FnuG8MLR9hZhY75qMvmXUQ8tEpfZi6xgHYuRF45EQUPNd7hbep53t5brwtx3sv8vQQEXa9fo8T8RGehkdrkkKSi",
  "key15": "5R6fvQNspXYxQsorm8PuvbUjwSdZCvunqnuqzGLJ7JkdHT1YbTqTqCa4TbgcEVDpQkhwkm84LoaAjBMJpuKPvHQ9",
  "key16": "57PdXKbEM8feSSKouSZ6r4WDAZPdYjnNYPgAMu2jsTPEj72BwtMc5sNiNhEDbgwqzRvibra9NhgFhQwXg2kHiQki",
  "key17": "4maNpCqRPmyhw5R7uM4B8dkvcF7GUX2decVau3Gi8HW5y19vUmAMXWyaZu6FhQZrbZx5ePGyGMiiS84rsv6ywkM6",
  "key18": "3osTdeoNSoSqB8FsP6TjYBeKZaTgi7X3X8cYWJBBz8dUagxzr29JfVj9BMj79TzZAuJ5YKQUQZvgKiL7jowyQqBZ",
  "key19": "2HYo7Gh4R7fHPr4745oDPjLNMKzcgNTP8XaVLGNHWDBSScVwgL81Mr14xd78j61gLg8UFwZxoDxCxr6kX2NCCkQz",
  "key20": "UcvaVSUvPCd2yj1qDgmGjru8VXcRnEhPjGyYyB6mNVm5uSVyeHwao9VJuwzLUaBdC1HC8QEz8YFJUN5CKwnNWv8",
  "key21": "5usgEjtVsr1oRbvUb7JymrmrBCm8hMcuG2mg9N8dXU2Jp91R3wqF8e2EUqiDf26DAqnZRCd3zngrEH8zrR3dbxYy",
  "key22": "5zBjrz422Zy7Jsv7fyB8xXHKJXThBQNfLFeYD3EmPesUjjMwrmmGfq1B6YHDAPrfCF5nnfqN13e42E7rjx9uqGn6",
  "key23": "4WeshcksQVjbtKR3Afca4dPBsrZFnhhhHsevd4KG48s68TYVTnvzYj9gfkuxAJEFKEpZhZbeyV8mLj4sVhUxeaig",
  "key24": "5NDBuzGwMRsUbkA9UxwuGr6snoGCWqA5mXC69QAWk6EfgnPfWqumDZZTdjgQshgqRHvT1friF1p9XtPxX7kUrfJp",
  "key25": "4XtCYhBySrN8UMypPJiqCVTHW7AQPNyYZC7PVNd4cXmFfZugVrWxX9652ktwucXo3y98kdkDbiuzASe1LPoZGg8F",
  "key26": "7FBggQrSQ8JNKPEfZmwwnzMiPpsdDYu1ZWjCiEDyhswwiAfDbDjybRhPAhGV6BkmqfAH4krvqzfpDo1YJe88Pe5",
  "key27": "3nnwDofYZPsLEJsvayNDiFAzLHy6x4vxdMn4cjve2FnzceLerbkg48hH8S9d7QKgdkcu2Ktjh1P5YtCTR4pCd1U9",
  "key28": "4FPFijCevBym13yh2wrcJT3gVUXYxtJfqeb4RQNTwaGcwKQa92VBztCWAWYcPriqk1uVKEwvNRepAxpAyBcNs2Xq",
  "key29": "7tBjaHmob7kQkcdhgkBeUhSK3Bzo6E3Hc9PQAS8kCfEyPzgv3We4V418Wtb6rr28nvdkD2qeXZ2RsDAx7JP2CJf",
  "key30": "3vPcfbY3baBNumEYikdwY18v7uYJD72mD2Qz97opJm3morNqfZv9T5Xns131SRS8TBvrSrXjUGVBCDxuHY4NxkML",
  "key31": "fjBmQ5nh6kU7S8RUkhT5uYfixmbcN7m87yw8wCWVH8VaRPdQcyEsd7Au2SYiUDAtq32xFLcN2kPrVCkRQw9zEN9",
  "key32": "2MCVG6Ms1v9mDpT8Fut8cVnSE913g55NxHhHX81EyehM5XCrxHKN92TEkZi7jp3ohexaTorq63i3mLMuhEVRfEG4",
  "key33": "2hV3imrV1aVLvpBBmGbhiqG1MULdstEQdYfpnbgQfBHN5rt16VASUu5JNXcYWSuJbAtst6sHyvXFv8ADatzXmrZb",
  "key34": "4XFeXrSfZretD8uhHQmhXDJ6ZZdxxye4Rx6TJq7jBvimKdPQarhZxJnbRpfvBtBPkTNGQxDqZeAPBP5kvCUfsBVw",
  "key35": "2STcP3heCevFuCaTKQfhw3ZGFTQNSCGgbPgTPqhSG6xYeNncdJduesPgeRKefbeKkR4fH6BZuwzZEtS5XVMRnvsW",
  "key36": "2VnTkcPDnwte4ytThnuuc6xWXiTXDy33oLefXT3bwSfi8uDGLpS2aCyv36rpSj89PgyJerp5Qp7dtdM99wuG7ru9",
  "key37": "4gBKBku6qbum9HjAjsvSAf69csVDDLc1N4YRkK9gsDZKDDxSS1kj5AVoD6qXbmAd7MMpayVBtkr8UtmocTEf9TDo",
  "key38": "3ZJnjTBTbVRsUoAyRoSshVWEBofPazsidkBzWysfMSRv3KZADiKMEb9qcrCvqLjFCKe5xnDTPQfJPHNdUYL5ikuc"
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
