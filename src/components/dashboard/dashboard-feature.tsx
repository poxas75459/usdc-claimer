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
    "4w7kUi6RgUxc1tqzQEkL6DmcDg6RGSoY1qRJqtVkgdoq6JSgyUBZQmWAd9kzsaJG79svrSRRT3Dvg8rGupKgCUpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AUuyFztp2ATbj3SF4nWJvXcThojsS1iA6xmXJKcGrF5rxAUPGnCuzeZ55Pb961ivJRu9uPqrfXTrF11LRgng8tA",
  "key1": "2BhHLarQPPZimdehHrYCacysbcXzSnvaPgnLWj3gcszMnh6yaH8FZCm9pDQede8RTvDVmdvadDuSSDxvigMpHkiP",
  "key2": "42apWmLhzV5r1j5AnRkyzL2CxSrwzRwZzo7roQmjRybnfdix2MoqRjzF1dDkRdhtRfMwaufJWPHBJL7a8r9ETZ69",
  "key3": "2SPPyHLYNTt4eqUwPK5up7ywuPmjcTPSCKfwUAV3veLMs5C5eehGhLLybPSpjxgcjnBFyRRDzvvEmZst1fQfj8uf",
  "key4": "4L4r5DoVewxCGTgUaDNk8vWFppzZYTn983U1FjsmzhaRqobDJeR8PGayeBd8dhrFkwK1MRLV2XneLyQHnEpVjVZW",
  "key5": "64iks1uzXSL5hHabA96nSKpZhDJHHqGJkN4Pnxp15GhzHkeqLtmC9CQgQxK1EkWHjcbafBMEpgPk1djg6FfEuuER",
  "key6": "5SU5xZknXsMLLzj3Fk3M9iMTpBbZP6RoCb2sf9TatQG5sUrHGGPo2ya9i6geqWxcnEfHC2fDbzY5uHEDWNaZVMaB",
  "key7": "3VwcDXpLiWmY5rfuVANamT1UJWCyEQsd4gihJ47UsCrxsew8PUYJ3Yivpv7fnfcCU2fQ1p7AEN4zDAt9JA9gANun",
  "key8": "37m12DeJwzB9xvVQRe6DamEbSzxzxnwwaiVR2hftL3Zthw9D9PuZrKJH1mPAtYVtgJWs3z4RjPzmERhoSLnA3htS",
  "key9": "52PthTPASXP1hgRBjk87r3vRJejLxFkcyaHBc9oUBkZ1KsH7UMf3SBNnXXcrwC1KWSaWC1Qn7GHHH8WyDzXqAuyM",
  "key10": "3s6gcG9NUgwW8RriMWvC77kHaKvmpsvHhUEKrZgNeeyGXHK7ppXeuKGcc5i3qz9yuJGNqoHeYqdmNky5z24YdeRP",
  "key11": "2qVbryJqXR5nKsWn5SSPkZf8W9MjubWZkaniHN8cyYFpywaBCPDcJAQyJPes27qowesxprXYvWfyJQ7XbtAfkEwX",
  "key12": "DwQfT3SQyw9iujmMvcYTHCq9j66KKGsppGXpih2ZbpsdZMx4ewVYjrJ1z814vmrdVT4huaADTEvPNpvs82YZnbb",
  "key13": "HNxVoPGmYr4HgMa9SZR7jyybpPd4JDRNMU2SRREWzQdAwjHvvywCRu2eRdHrb5gMEpsbdB95QgwWw93ZMjb2gQt",
  "key14": "4sbeb5aHnSKhdZgb7bqAerY5Y3UG5cuiqAahVxjWDLe2638VJRLFjiuZ3sDyUkjKpG6s1FWBpY1XpyxwjWKKcSCk",
  "key15": "4s8WwzxCaDKfMkQ1ykLjDThNW5Ly4TrCnMSxyxHHVpnambgqvzMNhfXdG9Ph46gMy1tNzQ4NQd97Thfcvsz1jpk5",
  "key16": "hvHzNquPhd17hDfRuvmo1iNFSAjTBotZxTeAZzeBrc6vgEdxYzSufxePsQV6B1xA7PgZJWKptRf43M7C8Ys8wBB",
  "key17": "5GmKVr8tFi59VA7Am6e1TPtPTmBA2bwpV8PAgLp8a7FSURV1ogcLztPFUM2apYJMshgnwbpogXJj6rgMHzy7n9Ca",
  "key18": "2HaF8CsoGwp57k7Kn4dqYDekHLaZun3h8qXtc7cL4hiWrQmhUPMjbJ15YLZBCBMsY1PX8H8eRxrKkXmpYMkM1qgv",
  "key19": "29KMgAEGSfocEVXjEh9NEH5zSyQngi1dpH6iqy9u5ZRznYT2wS7TmndZnCMj9boFexeXhDZeitY9mEiJ9UUf8uny",
  "key20": "5PH45ZG5agTmYBZh3hvaBmNUkgSq44Jev7gMj5Rn4FzU1BYc8kwriUpiFcwvYVWf6cE5KWxPYaUC7BtsgrUZEmWZ",
  "key21": "2zojrnntkNDdLjAFSpC7YejxrqF34KSGrydrQDj2L18GMtGevNqjuu7c9yDveDTZvQQPEhKpgXeCzbd1Y9aCH4WQ",
  "key22": "3pkT78hMr42fK5YkhT5r98opDv1Pj6gJtU3jtd6Ro1cPCTEGMpqzq8c5jErN8mCPJJaWjY8zR17mFQbdXo43ckn4",
  "key23": "2ZrBr6sdDCangQibDYUQeVG51U2n3Zg9aS4gKMRcrjk3gD1t1eC6Soyts53sATBiM8Uv6nWkdC19nR3kTr72nAmg",
  "key24": "5Kt9S8g7MJRPYeT9cffuFfu2MMsSS5qjy7xBzuCdJHHi5PNYzgwx2yiqhQ8onDnMnA9M63nUThdcwGbPvVwLVmo6",
  "key25": "3Uem5DDTWkqMqnzUboCZjTDPEdxNvqkw5UX1zdqZ9rQLkqnhi3qDL8nMvY23zGcBy4YaqKc8HWQ91kfVEi9Bxvzx",
  "key26": "4uUsRmD6ZDHQHgzUc38FTNVkfgUjCVUJMWRPjRvF2FZzQTYmZhNEzgBsTTFXBGihEswZPJXJ4PzLoW1PHGuu9oox",
  "key27": "KngpgKMJtCX8yi27svMjhyZw1d6tNC4EWPDnX19XfSpruRVKVkLkH1H4zwckpXwrhWr5pJRJa5D5DkLmZggYtuj",
  "key28": "cvgjftRnE3Lt3oPp8cTZRY8YZLmvxGcXYZtyk4S99CE8JJ3stmaYRdZFvzUKAB7GKWCbbXn7GAGfsnBvgA3Wrfr",
  "key29": "2RuZ89Yk6bmMkcRx2fdXFAdSJw6NwRRogMW4xXCLmUmc2B4MQAoACWuoMuU4vDf5tHxFos9L2GHa22aLviWudUeT",
  "key30": "2qYvaEcfhEZVj8pzb3HbA9dzEuz18AwF1rssfEmngX8iGsBk2wJpJ6NkZXyg3QTcgqVQuXwaWYPZJSKZiFZBDAMu",
  "key31": "3eeGtN9Fy2EUskrbQEFiBbBbtD3Swc1TXhfipQkmQkGqTeV4h9Ey5y5u5xhUjTZN4bhY2dak4D7wHr13YGescRZp",
  "key32": "4mkT5oAz8YLSysbVvGd8SmRgV28dUdc7tt6BL8KpiNsCsUqjJ1SnS6fAvmRe5fWZn6cAzHutsk36VWLRShif6isT",
  "key33": "4LRDKK8wsquNjzGZVhxNT28wB6DBdxQwc9Twcfzbr5BsTRSxEaUhCbRk9N8V5Pjgs3CHS3mMPmEcD2xetyxuTVrN",
  "key34": "2D5Mh66htKyJDWEMuw7a2AaV4TW2JgHp9PUDHeKukCWP5E9bHcmiEiWMf1KyezeM3t98vJviH5iidcUkQdEfM3sF",
  "key35": "3FfMJZShK5NQ4ggD1HPyBaFRtTQ5MgyEfGriHKZ6eemq3REsM5zERxEAUGh5xqVeRf8tR2E57unHWg9vS4rfD3cs",
  "key36": "ccopXrhZcyC6vmHLP5bbHsLkt6t3mQMWEknGGMVrACyCibmi1VnNqwS4tvHBwxfytvTu1SWuajB8Qx36hb62Yn3",
  "key37": "4Zjr9QgRV3HF2b2duajxAM8s1mt1o86ppE7bydCurXQyBAoUvy1R6b8hgw8pq1NwWv2Y1gquL3VLwaZ71zEsrvtU",
  "key38": "3a9wH1cLbBGWMggmQMS21dSULNri2HD9dRYfcjYPZ9o5Xu9KUKkS9CM4hVFBbvjD71GnriqfXdsJHUv3H9wN9XPF",
  "key39": "zz8V7nJAeypzcbWb48Nc7APFXabm6abKvvQonTgmZPRWS8PizuYbWW5XXBK94zxexwaB4bQcuKCHKWdt8rbYXoQ",
  "key40": "BBK1LSXoJVbFXDnnGeBZhGwEkoPPNpjFCqZACntQ65Ksxs7G58LY8p2wATgTr3Se2Uun1LejRUCt3mbAb45zFJk",
  "key41": "2CD6JrzzmxjT2EFXPHSKXwNjSHzRPinu7yku6t4EUM2mLTATo778Ade9A6JEWcYtPFQ7BvwhSnznWEFNgUKT1G7G",
  "key42": "2n2axKv6rP1HvJKHVR2XcDJn3byR7rJX6WdPpUsh3GxfTSVdogP3LoLe93yGHpZrcrrYoY2sMtfvFRGkCxVVUMTK",
  "key43": "3JRtwjF2pohUjpTveaJaEJ7fCGupMnTqgoVe3632qKAd2T4BdwvHxAiDsLJdLiuuYFQbgJf16bKmsiEWHS6D4RHK",
  "key44": "ZBKZuY1S4D8bututC4xEcBYjx4ptX9LCfUZsiCuDivSDXBwfMP94xFBZaThgJjrWnxBpbmamaj1g2y9p2dAJZLE",
  "key45": "4a2USfFgqnMrazXozn21PhKLRtmFXehEMeToEaZobS1rQWDrVphcDZ7JtpiWXt36VPKSg9Qn9HAyoJGsUVZhXf5v"
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
