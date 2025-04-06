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
    "4m3nddRnpXa13ATGtwBfFSjfXXG4Z8wSjsAFesX5fHHn7eqsdBCr6dRsKubDBGezMjnsexL4GkUNHo8gqdTGgDKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pCP2T64oD5gGN7h8AuRyphXe7GpZqfFSMMez3BiBebgfQ8wjcMvJEPscmy9WAcFP9e7nQFFwQM5HTkjuxMDLAvR",
  "key1": "2yXcwn3R43NMvpGezsxBZduj43o6JcdumDrpLSkireP4RHeqHEpXvrCgRLAnfFhSb8nggZiBu1X391vWD6k94U7s",
  "key2": "4UuQC8a1aXZczcHZudjr5SYxmtyrRHutoyY9gYZMscmki9Hf6W8YkCV2t1rP5LfYpSQEPDEZN3mfz6JF1Y8jZxRZ",
  "key3": "4AWqM5faV94zEtF4hYCBFFTBDt826pTo6DvcMpuL9fENbR4MN4YQfoDw6uZVXXUr9E9JMZaCt1EVS7nSizvfpHS9",
  "key4": "297WgNEgugANTfQxNvTBQvrWNPxGNZMbEecw9xyQp46fDj7ZFRJdU27kfEZ75mhdNYffXhMTZHWgPJNbdjfxeuSJ",
  "key5": "56BaGSfUDus7Gk9HVaVHsPvbAZMLujqGBkebYthNDgGciw4KBgDeLQ2NFnazy4edP5XN99Hp5MRVzb9M4yLVXD2k",
  "key6": "3ZvVsJhakPKHT3CCiTm7mYwGzz7Wztn5auFtSoFLkgRkwxc4yTDwq59r9ZCbyXKsxw6EGLCYUnXuetYjDCnDTYsU",
  "key7": "3pztVHL8vHvzgoAQVBr613onLA6nTVwjonwKSExr5rE6HPNuqGEgMNegSwmVG6ZPSAkyPMe7qiWLHssGudSi3AVD",
  "key8": "38NmEtL98HuP6NB3QoGNWUcMtmXm8hDus91UfEsT9taRwRFQojNGnCf8SeF919paRxuLtJcdxoZcMD3Uq7AR6K87",
  "key9": "EzZYQ62aKSvMK8uJ6EkLjZuSriy9npi3v6mUj2k7YEJSAusBPaH2WHUkM2eua8AQ4n8DPaEHoouVQ1TszsEmhqK",
  "key10": "4B2sqN3HbM2Zz6NFbx455LFeTxqHxjy18T7Puob1ZD3bNG4xSE9f9uAP1dcVLw5Mbr7rWiATMNjsBWi1h6pLjSZ7",
  "key11": "5PemGB4yWobitHsDc4ZojnWAyuGeMmb1o59vR3b9G55J5NKAJV3fdQW9e5zn7LHmJ6Wfa1KXpjafXoFmmefAuyj9",
  "key12": "3M6m112ZiwwRv1AWr8T5akGujjSjc6i848BBphs1VJaEpsU19Pv8P9bfWyRAzoxyUH1jMhhqTbFDNYNA9z1ULTFS",
  "key13": "3ZFgrZu26ZA8sDDPTHN6wAg2qYxygmf2CHVCoXTUwjMub1Z3vqZhq4Xi45Huwpn9mXsvURCEZvpvZAoJ4HcLE2jW",
  "key14": "5JYRQnAiUZJfAxTtDVfvn1qLk3VgLUkwVUJN2xxKTVKHR5CQSk94q7uaW87GGNXyCduG7zbLX12fKz5uKAbKWeC8",
  "key15": "3wQbzGA4M8jPTQLeU5PShqpt4DRnGcq8NDPV2Cp6XdXb49ZZyEPTRz3kzNa4FiFrw19TTvZM1ia4tTLJZ46diDoR",
  "key16": "6BQNjPLwEC4edo36LDw1ZtyGaKLeqDvZgma8SSnRUbnJpPo9a545dtZpBurdypHKBSb6B4e4v8Nxu8mP76Sseu3",
  "key17": "2HpkJhy7cpz3kTfwg11DWyYuGiHtS4GoPmXU5WDo6LxFCWRWDfh6tE8iXzxssMC8CvYpyFGQFafsxTSHmqstyVc1",
  "key18": "5tk4BX9K3o5AUTXVWgr8ePjRnb2yvnU93YBX5Rpcu3aNPEi3kgRWw6hWozgHBCbFuxz83ngHn9jdWDraUsbtx5gr",
  "key19": "2vTCSXX7dV1wKTKg1BcN85X3ULZazjBzBbi14cawCMhN7k5FmDHP2BzZDBU8Z8FgTJ4Wr8fii22LBbZwsb3psSma",
  "key20": "24o3DH159RQmWF8dyqFb8LpqSm2guzjuniCesBaaD4wSRHd18idqD8qigHBeqHcGC5M9PPwd8BxtxoeA6Rp7T24m",
  "key21": "3uBMErJZdJ7fXxfQUJ8x5Yy4AHTixv6sPJx8FxrFP526db5brJQxNArCR14ezSXq6wxU9ExaMc7cu8SLyucjNPiv",
  "key22": "2gwTPDU2hK8fpcim7kwRF4mWZUt6zzY6PVW3aPkN6BtsCrJAtUCD8LKnhXxxhAuU73rGkNsndAM3DuM8Q3jXdapy",
  "key23": "4Lo67vMYfsf7QPxCBXoicgkX3FUs1NZRqEKrs44hfJrHnHjDDbLT4D4DTwrbNPvFAqk2YkLvzSoKjTWzEoTUR2SA",
  "key24": "ceY1NQ2mN6x5i7rRQVX3g7MELW9gzwg7tvU6KMbRr9C6oy45yw4HhZACKsapDwYjnEM5of8rznyrqKX4bVK2GZX",
  "key25": "mefGtw2v9F8XXL93XprUGpgYAQiRW7KPFie7F7FSAetzoJLv85WFDLw1kxFvUouXTG2FDkHfLTcD4ivCzWzyeDK",
  "key26": "2giTnWYz8XBj6QX3dLNkJi7KFr3v9QedqMQB2fZ4EhcbjyxZQHE4EinJPQfgNAUxFUcU1fevxEKTMg5kPoJ3mZXN",
  "key27": "5dnKaye3LrSoBQw7WcqrC61TUCY6UdDJxYso7oqg3YfVWAd5NJ7VAJCFX8vjbGF8eGr8dc6rqqqTgLcWvALriN2N",
  "key28": "2fLVb8j4pPzTkDd1Erja63c9JYCdc7a5Bq5jZzBisE4XBA67StYFrAV1tZBDj6BBYXaLzV1XKY5UXCUhCEt8ZLa4",
  "key29": "7mzhtPBmUGWNWtxm9kBVquEs88KfEmsPrqRQUeWHAACdFsKcGLwHiknsSuu2gvf2goWuLogxka9Vxj7mZ1Tj7Kd",
  "key30": "32HidPADBgcnpW1yxUNQEUfmxUx8nhxaGc5vrp9Bs1fb62p9s9JX8L4xGpjMTcGj8t8kCJq6D9z4dgTg8DT9jmYJ",
  "key31": "4d4LB83gABhGDYKg1qyWAQp8AvPgEeUZnWh98LZyVPWESTMkiDJDQU24dBQEy3USLB2D2FiMn5dUhYBZEFw8hWmb",
  "key32": "Pqs8Qk7aZNW4LRxUVv2Jar6F1BbHuZYuYtTfU8pqYNN2hMg2nNQKDhJ4swJJSpE1xnCTh9ZXAU6VTX9DZUXKiTs",
  "key33": "2VnKJMRCYSCfkwSPjKmdJ6gbAEbdTdHeKrDWpEUb4xN1yiTmKkDsfRVhEWGaZGN8QJ4e2vjhNUcMfVHwKSa2ZhdZ",
  "key34": "323WJhRj9eehYBTyPiYDR1FLyhfdTh8Sg1xy9if6HQYxUhYk4Vvpp3my1UJrzjHPqq1oHLaZ4pqwnHFehuMZLUgV",
  "key35": "3969bvbmUKw6ntDyHmrTEiq3rHn5KBTLXBHW8xbnoFi1Wptfr3g8CLsqtqkUhyC6xxGEDGRVSpiKu68AsjaRdbQ",
  "key36": "3t7yd2YcwS2AdLZZefPUTiZG5UGwrUkvdxgUKQjXLG6rz4qhCh17TsQFDeJQT3QG7gwCYwPudrbbv64NmLVdpJwQ",
  "key37": "4cQ22wQecDafKTQhJx9yM9c1AGExmGB31Rkk6LayzYJCaUzmxwsW8mP2jCgMKYbuCGwoK9eJEjkixW4noTaYEW76",
  "key38": "diNuBcUcrzzFMx9wGSZqenMP86WwHwJVy6rkFf1Zfuh5SvYJvv7EPPcvWM3NmcesZfU3mxXfkrVnDXq1sYrzGoJ",
  "key39": "7DLxuy2nbUE2DiXcqgKWHBTGZRKw1UfFSXA7qNbWNdg6tycuxa5i6TPe3cVfkNSECYcr8QSskie96mz7EXNKVtE",
  "key40": "2aHGj8Z9pkGoPpJ1SiivS2PaeJ6nwmFAFpJo7pND3JZb89Mm6WsrbLFykCuQTJKS9uFnKXaW6pLrKW9GmxqnrNaY",
  "key41": "4JkyEvnQ21muKSWj7CR1FuFhJxHzkxgWxHjVuSV58yF9bS5e3kDH1WksWRTkRmM2PG7c3N14inogtjHjZWQwUCCU",
  "key42": "2DefrUsvJ9uue8BRhRrvCeMo4KEhqCxkH4Wuht4PDMC361b2p4dPTdrXG7SEiLjGo3ijYvvgrLMLTrQ2Y12Ugwdp",
  "key43": "4qAoSoP7AUT6Mt8kqipKcykzdkRZ25Mw8VrqJGXhmDyZgK4ME6uRE6uzBkhgNw1tMJPezeGsfKpQZwX8LsH1dC6C",
  "key44": "498uj5xxHAXrd8cLUdDchLXpanhAv1Wpoxg4u8fw3T3C1KSRjaMmxNC7sxFPULiLH3EW5ogooFEBXGHtHgeoCmer",
  "key45": "XjgH8GmPLxZx6iyGrawSXtCCvzyBbsnMSDp6dPbvK77SLJ9Nb4pdyVr2YDGKssqinHERZmuFakCw7BnMS2Enz8J",
  "key46": "3YA8Ca94c41cKuh6BeDKDH4dsBSCD7RP1c5FBuCwgirLNoQ7i64okrn7u4pdwGmXAfF5jzmqYnr3tkZGfuQAq3eL",
  "key47": "3JyGR2TEN2gacxemefPMfNdVYUCLB6cDUshamizcu4VpL1296weZXootsgj9vARmeAZCBsNtEq3HetgFLwZTEh2M",
  "key48": "2gLgZPMFseFbtpeeGNSK7Nuqpa84cy4ydihu15XBmbj2JSzVQgTBU2YC57F8hKnsXbqS4TngGfTWqF46AmC31UKd"
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
