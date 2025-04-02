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
    "4rGo7NJ5bR61613S15w7254y5ETPz59VGmZonNbXBTUjKiUkkv9XAP9u7hBEn3ToXi4UJdLPoa9imNpiMoCNFiuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xZ6JTaA2PZT1DNYTn8PnwBWhsssKNq2LUsnReU1Mp5pfkpkQCzQNBAvHztG2hHg3aYENHLnyGZ1w89ruXCqDNfz",
  "key1": "5z7shkh9Xo19vR2WW36xWLcjNvXQ1yeGAoFNJRqVnQSryuMp4m4NBBtPSsQVxiN3kse5zTbBmjorprNJCZiQYc6X",
  "key2": "5ZG6KNLw4v2tzHtUztzqRPV8nw1XdpSTWsSw1UmgU2bY5zGEH3AoGz6byW3esoBLVaEAvRt7AYFdaZr2XqfhNjq",
  "key3": "5V3WQfMSQyb7WXju9KPmEzdPi2QgTmK1WQLnStnWwmaP98sRSiWFXuvWkDQC9uFu97ipMhUDx1wAFkB4RY8mFMCn",
  "key4": "3juuZqLqFytLtjbmNfv5sRWuyKAoqoDFfcgvuzw3U9MNMzQhzH4fvpSxkcNhWvtQgoJtM94aL566p4LiwuAB3zR1",
  "key5": "2oewoz2mFVCMNQWYMVxVeNrcf8LYfGofhBRatbJkGzfQvznANkfc5pdmmAmyZdtaX3LQUNBU21iSk1L5KtvRm7UZ",
  "key6": "2YUzf5AweKTDKU69R4A32GyWXBLXXrq4XeSEanwSRUnJAcXSvSGXCy3E2pAhDLKdvo4YsG6T4DY6Uc1ktLK6afcW",
  "key7": "ctTf4W64VNTNGxnjsHBiK5X3DpGHUfV5ohpuqAmksLXTwBYSvbTAy1JxjyYU9c9WTPrhyTcVyfsF7yPq9r7tT7P",
  "key8": "37jRMz69maumnvDrkayQEnqmwyjKBdDxgd7Bezqrtc4yq4yVU937z4k8zYF52YpddSxqKKVaaKZu3Ec2tcrzZ5hq",
  "key9": "4ALHYptnRtxqjyfVWvWnJA9TQnSGiTMh1xwQfh4zQXAGPMLsFaWzAesgStWCZuU6oZWsYK3ppqgLEvs3KmJu8DHa",
  "key10": "2i3Fv7qLu6g53aK3hqtBUjMJoo4dd1M8ssdKmQbR7UCZNcjiHFoig5GaxxUkpAarLXE6tW58xGcdjWfKUJSxKuVx",
  "key11": "4pb8D7Jnxev2tC6FZbPQEcZiPsft8r9FxSuQYVa5C7wToG9xUj1DrJ1dFJNwHqHHGMLGpuNAQevoM7ygRpbeijy5",
  "key12": "A87mWZuHyCZzpWM63h6hp8tnMwQVb8A6T8dhTzN4dGb1s31j3mg1eKepqy54GbDfLMkSy3CJQqYMZcxmhB8bD95",
  "key13": "4eomZfahBpfHV78nHNKRQ4eLGK2CQn69UKhFsVqtGxQZmyhkfUD2Z8j1fgHP3qgsDWTLuBgkvVSNMnzqE1iR2DgU",
  "key14": "4CyD9AJS2aKhD4cv7B8aT8ske5BCQ5nadRjEeR93SJzHVXfHdXDG1jdEiAN52sFYe4W2CWuNDST1zYhwnEzqiYbS",
  "key15": "3n5c1EcQtECXcUcshVrCsQKPkVcfVhws5uyr5z2deERF74uoJdDdB7ZhjavLYWysjvrrawer5TBh9YWWGBR7qFUv",
  "key16": "3DEqbwMSrP3Az2auEENGugaHXSLNRLGF6oEkM17FU6YDzDDb2VeqvqXXC7e8kGbpZ9pZ63tBjiMMTYw4y9BUwBRn",
  "key17": "3YcMF3pggWsSNX2LNrAr2iiWH3G8ghmoJdcvBeErnrtA2EYRNwtJidV4PrpurzbGogfZLN9HY2Mafw8KqHwo8GTC",
  "key18": "3tU6B8AwDqP9sQN1HBkFwRydNqJEoz3TES8iy2gHeAVsUNq8itirNR9k6BnLUb4UwiMdXDDS4Wx3vmZ4MxSNWdDo",
  "key19": "2PqSgdd9zYfVhrgW6iKTo6wBiBRJJw3DKQV9dUPEBJhaucpHBN5cvzoZySfvDixybe4HRwhRFSd1xMQX3EXd5SAp",
  "key20": "31oJigyvFq4RDe7MEDoNhiz4fA3Bag7RxFAKrfDRAq1C4iCVy4jdmYJ7cAa6qrewV42ZLkyPAjr1DzhNvWRJTiPN",
  "key21": "5Ms2C8cM6sW4GgFAAGtk1K7zwJ6kNQgv2xosnHi9ojh3EdWHtB5E7c1en8TUGfczVb74jDDyeWsUXsLJdTaNLMYN",
  "key22": "4F9Va1ur8kDfZaLqwxTufHBQ44FUfykJU2h4UESaXnrXWxqHfhhdTmmCcBGCxwSwBiVW6e5M7FW3FfQi6RVePUsX",
  "key23": "c2nm13fzzHzsbPkTJ5pLzSDNt5q4ADETE2sE1aM3d6ox9XtFLiigi9ZfW5fcV1ikkaKjZXmc692t9Kq7ocFMqvX",
  "key24": "22H2JR1MEbMyAWYMucBU9JXEdY1nLU4ACLpf5Y7tGVyK2ba1rw4hqq4525cjwaQza8BPLfu1dCjncJC1pc8r1C3S",
  "key25": "5sj3fF6RRE5uaGGFSHNTh2qhQ1gVahUx1vBK8CJopEPH1hY3CU6A4wvK29rT5BwdZfPzfTRkzaedp7RKdnsPjwCB",
  "key26": "5ediCQs1cyPDvTfmqQv8YJWWSsfsDbKCvXXaZ1WVpSdhrLJpvtQCvYmexTnatUEq2Ro7PnXSjhnt3v5SYPidqGR1",
  "key27": "5NTD9Q3vinsaY4gLewsoUYsZMvPGgxybnjr6BQMoifiotKadLkDD7hWLmX7hGuA7daVFsTJ3HJR3mteJC1b3GKwq",
  "key28": "5ydHpYMq5soQzYxTj9r2DajR8vLRykYXnWUvuZCXroMmnrw3AKmFb2DezmVZ2WccUSnGcdsc1WVz3dMG79rThCJH",
  "key29": "CW6FsCRcSe6d7SZXodFTbXTU7oyEoLufkDEPd7P1PzzNabj1mcnPyQCRoydLinMsQJNCbkhVtX3poYFW4YzMhFu",
  "key30": "4wNieh4sWYsLr3WVXaf3pbWd5B8qXduQvrmydCEwUm83W8yArvy2MYYrHZKN5X8hx64vmnMaQxMw4Zvk5goeaHwY",
  "key31": "3B4b2jWEhnPjqY8QvA6hkJQ4NtKy895QmXEcN8BUrTuqihKoLDbWpaadnmigX6khuo16PPU8MKPsdE3p2QNGqqgH",
  "key32": "2ngYkoQgjVGzMqs38wZjy2GPZVfLM87Wo5Sm7wUL4rXXshRKbhz2BKh1iL4XjWkhaH9QKip4dkVMM76NixiN36GB",
  "key33": "3xp1dik7VFM8pB4wmEu66WgfCvGh7nj1G21MMvCWUMDx4wMgHwybGg68Cc4u2rdg1UvR86FE4CKWVE93EhqGxwt2",
  "key34": "65MX4QWvi1jERdDNkSR4ub8FCWhn82SUj2gtxgfZNqfQc76GtHPs3UNaErZ7K53PzWnskSBYB77nfGauZbqTiErH",
  "key35": "DeXx1839CbKVYi2tX8k51Ld7oGG3C8uh9eNZFeXfnffjY1MhJKjEY4U4iFUmbpsoZMcjPmh9KCPVdpjPrf2BsJy",
  "key36": "2mEimmDcwDyAc5FFpNr7ggn5tYn8u8VUDVV3oN5PNF2WhDGoHXFRhdLvPka7DTaswokMoBQauWMqTo5i5LZtKnU8",
  "key37": "2QL4wLCPYweCJcUxGYQCH47pHUMgxgZ7Sc2TJuxvvehQyeFS6nmvSBBzm5esy1VtpBHcZyeJmnXo2pFPyydwU4Ky",
  "key38": "5AYdv1ore2EY3jQUXaTSDiHiB5KN5Uwq9BShV4FZZyfPTMjXHHtu2PgLimmGtj8CaaAEZWxjmySTeiotnW493Qxo",
  "key39": "BdxeLCELhsCHdiary666Pt9JT8WJ4uyGy8iMiXZKnZhtjH4YBbMekPYYpeZBxoew4Ntak4yp16HRjLgU4fJw8Kr",
  "key40": "2MgBKiFo9VNwE6r5rRshEd9NhL838zsDBNXJkW5tsPf1E3k2zQzokqsb7b36Cr6Csv47zGKgFrbUbHMwcfcwkhNF",
  "key41": "4JTGiveDydccaCv1DXXi2YAU8rGGNrAQR4Wdmd84dS16GhHF9dKnizTDSt8eX64ZBYE71QqwchbPQJbzFtGyJbL1",
  "key42": "23zunC2s7dbaTXMTvwPUBz4Ao1XmDrHasNfUMaaWvwkmRcgv3zBKn6Mf7AEe6h79jwJboC4wi1uvzfNiyo2v8TA4",
  "key43": "5yjaWPLcYF5vWHyjfXoythCtFKeDwQWKJ18PUNEWyFnmmxon7habvZpdpEuNvB6EYiSX5fW7o5zMeTuYYy2DGw8Y",
  "key44": "5gd7Xicx2HzcGMMkFGw612rCJwPVNthjvycjJMNDDkhYG3jLXS48X3hnAjvbBTERhv7qtM4v2pccqsqT39zwYvAR",
  "key45": "4Cpa1pChKdo5gzPcZ3kjTr1gS9X4izP7ALJLxrtAkECw2YRVzFG6VyURkD7x1mhN9Pku1qYnzY4gLGU26GmrWYUS",
  "key46": "323x2hqmjZT9zgiVsP8vNQnbvf2JScxAnF8DDBTjxVx5HbB7AxBEFphnjc1LxFkXyhUgTvW8PxsHt3bkayxcy16N",
  "key47": "5YfpknRvT4wLDf7wpsCtyd8gSqgZZ6tnuGWxJz7FWKWdSJ2Ub1cqotnfFtZwc1GBE2GjjdiD7qtxUBCTu9UJZsB8"
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
