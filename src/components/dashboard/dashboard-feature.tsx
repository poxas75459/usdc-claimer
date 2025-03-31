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
    "5et1YuCsXZA1nPUNU83HcRVGR86pAfhZSmvsH5yvrWjGkBghqHwbBYypTwuCpV77nWMkPgrVepX2vYY4aKz22euF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SNRm5qyVZDhBnsMyEiUV6S6shPeSi6XTenBWLezzgGwsh2zKLygXkWGbzFDQq3wkCNjyxKLYDyPJvhLxyAEVoA2",
  "key1": "6LbtVvcpsZguNLnKC57Exnv6uiMs8bArHeHyFFchtFFZ5643Fy5yEScKcKdb8pHaD7FMrZokw7Z2FpRe7ityjrZ",
  "key2": "4ReXWC4RNJsQ56e2DtCMEzsgsK51sQvNa4YNJrs4p9vkfw4WzwhUK5sHFpxYqpVBwQj1C9DXej777BwnxbyLtWjK",
  "key3": "csDfcNgTrfRsy98wXMokGBWBAemAEB1pBtc5hYSPGWKJpgAqsETLaoYFatKLXR8M3gGJfKui7DxVxZDcMJbyuUs",
  "key4": "2GMLXcH2V6Di4JoSNdQjLbSAaP4QDAUbQsyBQ6eLdACg48tUi1BdoexmxC6YyR57mZC3xCWVro6SHXWgUjGbRrtP",
  "key5": "5Fvzngbxa96EN9HSieZsuUJk6FuU6siXK1SN17hiCZkx86zGd4uNH76DP3rN4jdb48GKmRP1PrXSZKYvY1PxQ6TY",
  "key6": "3odVjnY38ASvc74i9oPVviuGxdEyD2dvCbXVTjUFMUfsu7UKsesdMemsoKMrFsuXZBD1yZXG27j8U1k5vVfy9PJs",
  "key7": "45BAcqnDqUqr6PQaCzebXGXoiuMRNEBHxE1iKzZCmqNXaz6wCtd9dM5s49Eyvqy8DgA5z5BcsBw6hnQYykNbtviP",
  "key8": "5c6MknHZwo5SoRxg4VmivTfEgdWhjZJ2jFe7mFakUfbaRKeMqRUz3SQB6q2oRX9Z54d2Q2mmaL7Cp4iLY53gRYxE",
  "key9": "5jXaP6uFcG3VhUiaUGo2kdFV8rKMdqUZ9R1nGMcWSDRfwz7hgfAW2i55i7usJjDw4yGoqhaatfCnpwR75tMux4sH",
  "key10": "4EJGfe1TH7kppinPMjxU6rS9DcCdD7rSgtxpo5enQdze3XYA6vUCBi589KFn7PpyH4ApStNB6jwqL2x5RAxAGWG1",
  "key11": "4qWuKWwRvMjzJSRbQ24dDxDuDpNFv4J8PFaXHvZVoKNyoRXzTdZyxHdNMiQHfrkXrPRYoV1FxkSbepdyUivMkuyz",
  "key12": "4nUxZzfRfuFhSEWkT6Rz2SZXMEDmPHj9Jb5hX4qHThtf47YPrX9ikbUQLuvZLJ17Wx1jmpnTg7yzkr6BCQ2JtqWi",
  "key13": "3ebqTWrus27yfUwAdosGRsno1657HjBJr1dmMdU3iF8TT92kfibDLHNinSGrnUKNchxHqAZ5tLyDd7QF1EA9JeKo",
  "key14": "4Wwi5kgNHYYPRVZyv8Xw4Ap5ZjJqinmQAoaD1hQvfVh8zpbygDmr5cByza2vHjMjB2pxsFfqAkkpjths9ZWsqLGE",
  "key15": "5xoK1TgMX5F2yXU7bB2G3rTp2qcPTWphsjJGoy9X2fh75wULsAgnYLg7zn2hT8rHpRLXkpC4pScov9EfAxrBf2ed",
  "key16": "Q5FBDcTvP81QrSidYqqhp2ME8kKJe9Qo6GtF4QQ2fKfe6BWUEVrGiN7sZQThg3JgoRjhsUaz4ZXNc8jA1XJMWWR",
  "key17": "5xFVMxfGixdjgw2xm9QZ2tHJSjGhUFFTKrDMLFNXCksh7MJhCh8ejAomteFN4yevj8y4ZFSnf61YrwQDR2dw3Y5R",
  "key18": "2jWdTvgqqLcgmMbf5GwpDUVLC8jhPYHh96gmuzDDQTG1QRLwaJof4MLNBCk7JrkrhFgqhr5o7VewDD6vzo2sfFHB",
  "key19": "4uuxyNxyNKvYYPoYe661bBMyhk7s1c47woRkZti5WEZ7wuqMAdGsPs2YmE5Y8zouGYuVRm4LatLv9ykNxoD1on7r",
  "key20": "5dAfKREPQ9RtPQMYjN258DCpMiYibMkp2dSTphD2yZWv2HXA94SFvPW5eUoztyRUSeLRM9QExFzCKCUrdC11ZHZN",
  "key21": "2iVYy339memmQK35fZHJ1Ti3zahk2qbVPkBg4MQqDd7Vz14ghPTwaD7mC8wega1J6MZZM9hhZZNyceUiQsn1Yo3a",
  "key22": "4EE92pyjT3TX69XUKd4wAZYYLUoSKhzxyMFHvevDefgTfMRv6PtEfaDAK7f57cdzneLW72QiAchU7PnKrKAZ6vZg",
  "key23": "WdiYYRSS5vhyk6qHFmNa6HYv2HjPDgpMcwE2F3ow9y5kT11x3y5QNk7mUKPxiHRi3DdXA2etNEZrxsoHNrYRtsd",
  "key24": "5ZUJSK5vr4XQ92DeV1y7LK9qBmRQZ2A8uCiUvR31jqo9P8SMYv5qbdaeANCcTXwhMd3HXricPKycNuiRSLB9W88T",
  "key25": "38YgTd14AsGMm61bjs2gRLgYaJfbHnVAMfmv9Zq7bA2cRLMeYAGWFZ2JByhc9ETz8isjDbueLScYUZL4u3oRSCUV",
  "key26": "2uX4kyxSgJ7f6CV9Ku2znWJ4WT7YUkqjWBj3sBiDM7tyFqpPY1p19fDC6frQLTTaW4KgGfdNJvZV3YadnpnSxm2Z",
  "key27": "dQ9Jy6TjwphKLATBJYvirc9oD7FhGTQdE5i5c7yaBFBaDQdtctH3MV9m8DzHFm2uoQXubu9NXLgt34nGC3HBZUe",
  "key28": "3Li6HebEpKiTRyG5BM9uMyV2eCiP67MBNchbjWXcEPutpy7W4vpj2ter22GRHwVa1XQsVuBYYFxNnM7UZzC6yT8t",
  "key29": "4BbgFfssk2Cynrna9QjReLo4ZTsQLR3CdxJwCdLQac6Bqu6dF2i9rUPyuFpfMgWy3gMBReH9jHNvtAdNqNtaEba1",
  "key30": "3qAGWiVLDAsK6M9aJRKg8J7pakf8r15CzSRa1CG45AyDzbgTECTnrj5At4zBqzzggWnuDiZ43gyQ4hdC2ToRrJ39",
  "key31": "41YPMbGjghgLnKVQbftVPwUGcgXRDyPW9UJtMtC8HxaTbhm4sRYz5YZU2GvEbFTzgJsFG4fvLeXytnsEh9Mqy5r9",
  "key32": "JRTRrMA2wPRS7FkQMcQ8n9rWuShj45PjGHPmkKBiNV664tJgKzFU78y6SQXq9bnoB5Yf6wJUPH88fmuusVRxgP4",
  "key33": "492JSoybKqtmZW9CW3Ms66d53tXMjtMwctmcKMnX8XrY5iJKeGmPRgBfPPcvxHXBKCUfSjyiQ9BxTisjU89U4aF4",
  "key34": "3RV1zpH5jy6ZZFGW4mfPHTRR1q6PM8YQipSEe6rb7GeGw9vJLCSSeGJRgZfS6HG6voK9KP4oC5myETy29UH4135m",
  "key35": "56X2Lo3iWWW3v4XF7xRAGozCKHewKx6cTBQaX5wFYYNCytFxuyBB9wca8nDRuLfskDFMMFDp5mzYTF3YLJ3vARC7",
  "key36": "DhrHH2WRwGJ7V88NFspK3VuZdKhbTsaKJyHRNzH3rMKGo5gGMCjkXmEia1HMaeNGXDhC7x56rtmF9Jh1BHBae5v",
  "key37": "nv7ZE6EtPF3FBEnj5wuP6UxEroErhBsN9AcdJtnNjmRhTFyTZezgSQUF45mits1n4p8NGWknZ62BJBCnbMzWHvs",
  "key38": "UdnPf7vdm6LCim5wbzzcRicMoriabLZHqkQ8b14i8VTMvJimCpvijLrrGeRmJqgkRthXwp7vegZ4Yi3kptww6Sr"
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
