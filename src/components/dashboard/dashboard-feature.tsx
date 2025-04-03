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
    "5LHb4gt8iQLEZfvwaLUn3Usmv8i5wzLt4wkGhTqfNksnadorqoPyvBYBANwGhGFfWic1xQUf2FPeGpYA64Dh4Rj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BmDYzXAUhcmrbJFhUFJCDFmAaXDHpm6i2Eb9Bcxw8J3mK2hH3YkK6UT3ARGEYWxV3DSJgAKpRdfUDA6S21rA1M3",
  "key1": "5A6Zqm94XdmCg5Q43CzxTsut5XssazgkAyct8K62o6Vkv6wGCujkfZsJ1AUP98crFBMu267gZP3XhfgZ9Nuijh2t",
  "key2": "mnJ938p3GAKSseYx9Y7n2e65RXAjgMGYazQmFeHyJYN7SjxFz31RpqnNL2WxcAbtJJn4Edf9FhLYgzE8w96vuWq",
  "key3": "5Ab39Vauy7UzfXFvVPKUUN1pLZwaFqevpe5AM7bY9AynUAdYoUia1yzbXWDKSJgnLH7Dw8H64fna16upKAPvpTDL",
  "key4": "4WFZmiiPLf5V5hxchBReGkTUKr3aSE8bkVycmPkQujRHwE9ciCzxQiJqoUcYMyTGsWdw6UMVo6akVzmMuM3ME2AC",
  "key5": "2Lt6AXbuw73P1aNTEnBkZjENgeNTJG6U43SWT7jRWp8Z3RXg5YFSg8yDvSjuhcg9u56gMZEWQtdWaZRqpd1e7dvo",
  "key6": "4QtxrbHWPgKUUYYChday31pTandUJgHhuhAdmnvztV7BP5sSSQrTpfs6c3n2pYDTsSx5dNUTpvft7qbv9mM3vAN6",
  "key7": "2NFcxPdWSKPQg1nABJ5CthLyswo6pop4g9yq4ZerkjHFUajMYRWZte5NdsUXF1BEVWBeCZJ6hW7JhbF3x6r2Zk2L",
  "key8": "5ftuZH8kCHHcKNy46YV4R6s8N7VxEVAB5fDQG3jLztGa7ddAuApfB8btAEbkXEiMshb1pnFSpbbhiWJFW723X6LC",
  "key9": "6GSKhUPLeSLqniWivqskxMvZBXjaxFZ8JPTXJnB2Y4XBHDmD7NXsyFa3CMePxeC6bz2MXwDGLxnw2ppYd9pGjei",
  "key10": "52hFNqvSXcingsCSyBbvFHytnDGc8517LioTE9sZLmSQtLdqiXtY5sAygkpJ7TAcpQHrDdiwyb7qEY21bVLh6sex",
  "key11": "subKUqbkMTHzvaUqAxvThPBRviopmE9r9eSueqBBkoDGTqJVTzGxxzAT7XPdMNZt4D2eF6MYwn2FT8FjToCtEgW",
  "key12": "2QK7kYgTzpigNALoQ4Kcu5NmLFhAuce8fEcnwsBr1MdrAvUzDbMgmYAdU3UTHxjeeXdKB8W1qW1ytoGcsriGcKm5",
  "key13": "4So31YbskRsnN79zrqr1qqy5wPtsps5MzgwM36SRnQcGmTXh8mZAey3TKQQpj8M76ViakSv6r5zUPLY5UEwfg5Uk",
  "key14": "4VpT2X7jBQWNrLv1vdSAhbeq5dNTmv9EWxkgxypY2KB5YvKJrGHYpyPooUxMt5peac5qCay2KfUuoXuLQt5wyFJK",
  "key15": "5Wkdcj3K81LJheSDJhK3zDfpHqAUiVcRHHR9oboY7G4VUn8Cwk6gKvz2uFL2naNF1sW2P8StYFXNjTVhLBFLx42M",
  "key16": "5qeNRXAQUfoGyzAVzar13iHWUcEgqfNCyrsPNrzfbJus1mBL5xEFsGYA9unjv5XyEVRia5g7eTnXqBuUn7bLGEcx",
  "key17": "2DoQrpGMzCRWbuBhAnfvrt7eXSe9yha4GTAxqXPPkJW6mDc4ys3oSz7N1HUecqc9UN5n8nDexpKVBiTFdcVHWHjw",
  "key18": "3AScXBW9viL3YnuA4PtqgtnFNb36fbUMjFKnP8Bc4RxL2qq6Mn7NaXk1MYAsQobA3H8wZA9KHfyt5EKafbtcxV5t",
  "key19": "5diz7ER8MSfgjVuQkZaVuj9ppnbUBAz4Fg7n87fPenptbvbzoMqo86VNC5tTueoLFkCvgeHKxTCiXPjTH8tDVPhd",
  "key20": "SpMvxdbBKVaBnudF45N27JPByddi2zdoXFX1WodKo6xtkBkEWzxJDv5o6fbtiWqqPT7gx4KMxgXTwX5TKhD4mpj",
  "key21": "YAUvf9J2g13JAR5CsdV1MYZjdDbCPMVa15RxjFFPhzj1PXxQ52JsfWYEj5bSiY3Pc8nTGz5tAxZrzgvFgaDi1k5",
  "key22": "H6SoBwpZPMJibvCEoXbqpEKFfpDi71khGjCgFxdoBmpzXR2PA8m8pxx8beTj6ZWR6cUk91K8APgJGyDsbXGstyQ",
  "key23": "2fw3n5itv4kqEv4B2Acg5WfkZwXwUcL6xveSLCAVuUYHV2ZS4akGvKqWNVQUCSDhkLTQAZRktofdoL4QmqwPWxW4",
  "key24": "5y2rnrBnnTDuo2zKbLqgePTXmEAMhefvZLLrUdW9PrKdrV8J8Hwv4dxa4pgp717nymzpqqn4CyECmEVEuf2Z4h9a",
  "key25": "2z7dsiNiZTTpaVzrRs7yYZ7iDhvBPiKH9VFe3osBx7hzJe7SFeZGWvUrBYrpU8WksHzxM79cHtyMGYeK212bb8bg",
  "key26": "3rJuPZnziDfqr19FCbnZiAYQHC7UytChNoevbdXVu1QVfKte6RPSBzaR9qFvUyiUqWJaQnbujRiTTJV2Ki2AdHji",
  "key27": "4KH6nRx8HsEApzFNXYM8hoqD69iMa3yPkJLWQ78MQ4f2G3rMri1eKn2XZ4o1YFLBR3pczXXpqoqzdMm9RadqWCd",
  "key28": "2FWyhRXpYRg2ZLYm6WDNu1Sxvg1q1NXkzqywCtnZD8FRCQLsfFgGDARtsPb5ccDztaMx1M7TMQ2AZi1YeZLCetZk",
  "key29": "5dygkapqTEHr31tBhhRVii1K1xVLf65iKsdRxkEE6KhotJ84B9E7WQcXZCdo1v5ddcP57BzK1oQ479TVhsN53CpH",
  "key30": "3pdZ5boxMJRAL7pMWdhi9WwYaHVUa8cafJ4H4fDX3NKmNLa6rq4EiBgUZvDJidzyJiFGFgdERrhXA1jDL6zxAJvn",
  "key31": "2MkxYzzgtyhhudypGYsHsrkXPAK2XvJyXWbbc5Pns4E8bmw3xYyxFQTneKSFtoJew7R4SWkgAwNnAx7i4T5dgskH",
  "key32": "5NFvr61kQLTeadyjZJ3agUV3LjuCgQs7uPk3hwM6kgJRZoFSvEDNoikSa1c1ry7uoNTAhgWL2RthFhncLTo9vpA4",
  "key33": "3HYuJtrRUkbmrzkodbGQRCfyZqeRhhbFM3sDmH19fGZddEofKoGstFSVneHVL1DhDTJNvaTcgLXQfM5zZcvhQJ1V",
  "key34": "kCrZDPHdPED7rxmHpUqxT7k71Ykiv29EqpUTbVWkbKzBWS8U64ToeFDpWCQ5w8WJFZCUnnbpmisZhWAAmvrbBdp",
  "key35": "2VaJrhoWDXHsP3AU1AynKXveRmhev2XaGerctLZ9MZ4i4kV2AQH93V4jJdWkN93A8kzmvLPXrWg4Ccrox76ugcD",
  "key36": "64yqJtpcuU8VAs7gxTfgL8EzHet2cvTvW89W3XG1LFxqBLczpxs8DYvegua7Hw2en3V3RacWiDhowGXozrEr1f75",
  "key37": "tSTzFd5zJMQHevtYdhaLN6q4Y8d6HXFVPH9XNhQwGKh7p71HDQRitjnxoFMiYaYC9KodcLbZC52MLLtZpZWKDp3",
  "key38": "2wTzR147LvACb1XUyVKpvCp5arGfuXy1qGzvAYqDRXKsf4B9Fe1PB3qEw8E6acbNFq5xyN5w7woB1AhwdN7K6CQD",
  "key39": "3JSVR4xvLx7Dxx6jQrZMSMnfEeCYbtjLayDWF3sm6Q2C4XHeeDHq5TMuX3LuCweNPMx4H6wcWNGNJa7UkkEdKJWs",
  "key40": "2a4mYkvHBLewiaMtQ4kg5dB3Az1E8N4r8CCCqv4uE5Z1V7K3eZe426cwS3XFpoj2USyJ6FR8jRd2k5wUFDnS2hnc",
  "key41": "3cuJzHmn1Z8nej8c7pLHWFypGaSq3UAtGpdHWSFnLMcqrVYmw7DFV7VSSh2phUgJHZeBQR5ufJDxbAQFCMMR3yzN",
  "key42": "3TaG8u9u6kzkDSWrBGHKX1rgjM4LUWN4De2L2kcbuC9iZTaDJoXDp9v4XBp5GDZ3WxFkPnXbERFeu4uMkBpR9igp",
  "key43": "J7frirccLe6rceX4ULSmgob5ioeDdD6fjxstXfgVWFEkVmUX1bJAsPRVjC3A4ht1quf9ca1f8CwMoWGZJCnKpqx",
  "key44": "2jc9LTYaAvk6Y78Qn1Eai3kagxp18owttbNgaUd4bqWUbFp9cViYWy4BDT3ruJ6HDFmaXkVLqnT7kV7KHvYVQsQu"
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
