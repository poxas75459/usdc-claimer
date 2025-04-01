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
    "aM8PVohuFh6uveGZZQTRrvtNowf5rN4hmfNenD95GURYMxBNWfVWswxyEBGQN7qB82NYxtToVr8gioiW7cVMK3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Js2yjQuVAqBdUKySsbVxfjzfhVmzqTNt2iz5VvBckpcctbnssjMVUW2dsBkLNpyNsN3fmajLeEeXGseXWC4rvXn",
  "key1": "2yxs7znvzcPY5N17AA3yJWiELwBAmo1eg3DKpCVauCCE9dgSnPeFFXq9KWqXmGDuVyQw3yVDXV6YAfiET7LvU8KE",
  "key2": "4Z6GiLodXQTL1eA4CH6NpvtnFaG3eRa5DcGKf7UgYALFRiVyManahWCWPmS8NeuYR2cuFrZYNriXkfw5JjzUMEvG",
  "key3": "5H3U5QzmxwP5r5PXiZhGjhZ5ty6qACuQHkUL2DCQ18aNvuysCK225qJJwFyAeWUmxpT5V1xhBAuZEyPh1kt5SqjL",
  "key4": "41aYko8o79v29zVmCz5p9wrUqK2YbGC1pfS4BSA94r5PnBJ3SfKmo2zky79CGRTBtSxTTaRYfQzzt6qYnZVZP6Nw",
  "key5": "5o3RaE39JCunjprgCmZL3ukskhqU3ySefHKSngNv98FQEeLaeabDau4MSKdLejrrNvevXdGY7FaEWhrzy4CBLSKe",
  "key6": "4wrRb4c7GCtBqdU79HJ1WiWZdQLTzB1XPPPv4ipntFiBftRaPRikVBXQLEWzHPNHhuBdWpLa1g1YTnsjX8uxJhVn",
  "key7": "5jURvaErt63RKDVs4zo3ga9pKb4iarAjB72w8ukarArW7VqdSKy1JKgnsPFBJZ6oJhiVA4F96n7RfseyoLMvkir7",
  "key8": "3Ydbdgu1iarUnCUWt3B6x3cYUHJrMyiP7LMWsJ931vHcVJcv4yhFZMngzgM4ruTE8p2bfWsALEj47EPpDAi3HdDB",
  "key9": "3qAwXm2DDRTZoDTpLMLub2H7JgDdR3QZP5R3gf7Bu2S4Jq7NsAiqHpDHg9riJCWMRYub9asLWsg6NhYVPfiLHimt",
  "key10": "5eRaLwiQY2orNk7Qv9KBnPr7GJrpTTKF1GyqbDYuqRLt14huUEe62PxyVGYDdf311hew9kkdezHPBprQsF6xhyZd",
  "key11": "3GShBbiDziPSHzUzoQ1zmwRmNoxtYKwmr2Ni594KXLpRC2PmjCN78svwFw4iHmY4Jxe5cQGAriwZSNHtESZdR9Xq",
  "key12": "4gfay2sHTM3ABytWfDGt6aif3icGMe1ToLcu1K5eqRwmevKBozYWMyqFxsY5BLKVsCpArYm2GbxdnM8X642FEgcZ",
  "key13": "3mLVGikErFFMZkGhBLfP6CPpEgWTvHrX1gXqs6fnymB96NaYtHk2uo4wGiHiThubnnVGgJqdeA6gj6YQPx3eGzNh",
  "key14": "5S6gjpvxigjKXqWDs76nGiPTr6xjuR5gc7ob4XD5Ai5Lzb4MiLR3pU3ShGgCpb64TvsCiM2ntEXuGydgmddpbzcx",
  "key15": "43tmKnrdubmiwGPKJ52RYUfv9ippSfifr3DkXPUYWuDam6a2MfCXpFgiAEvjUS3EQwK6wdYSUvtHmfvYJxSDvUmr",
  "key16": "3qfWi5mPcncRm2GXqgc7oRSuC42xzPXTVoXHvzBWSGM7ZtrYmcDpg15AFsURGAbrFeR5jqggUmwAmzSuDfyG7f8K",
  "key17": "2agEYwZcx9wVZf4dg7YTCCoDVPRij4CCmtHvXvhQSKRX5h5qBTk6xTFhMZ4RDCAxwnftbkC7vFnKqjWzWtJt8uAZ",
  "key18": "43GLop8nrHtW976aGB6FqhKbknoEnNejZfsfDNpZGsS15TURyRNZAUYK5W9THoaXBja7a68E7xa8YEiM7hx3MtAS",
  "key19": "2maQ38BrCtgXigvhYsWSha6TR1w9BhKPtNRh7HR3N3NsfnL3UX86See68F9PkE9dgEdiL1zhrDvfBhErEMiaFQ5e",
  "key20": "qjLTBdLpAEGzzr5JUHsS5Yw96iSq3GitXrcHAvbXdKznbTyBcBohiYXm3dLoUjQYG9pCTFykMh9Uyi5GgVRwiMA",
  "key21": "3Rb8A13eRL2Kz3pnKeaKRZbafCaiRdxZx9h5soNSicujtG3BanDv242i9eWytj5TQ66zQxbvyuKY7ormgu2kEw81",
  "key22": "33b6cCLRKPKCKkCV7YUuUQJMqLcLFEJgNFqxiK1UTfkRLQfzDp5HWvetoQwPjSBGoLmKZ29unZru7oENsTRTFKwJ",
  "key23": "24b7HaeNa4cqpExkY3M8HyBy77FBpuYtMYPRepciQ4KjqzoyfVjJNX7Z417ZbMsk1ePZzgzKEgRvrf8as21e3KeB",
  "key24": "2Ca1H3hbgAKxqX4FkNuYEUiwLS1G3B6VTj7n9ozKbQ4CyQNNy4491nxW5oKGgLpvzRZUX2gDdcMiSk4pue5v4mWh",
  "key25": "64tXVHBuL8iMy21PvrpYuv1yYpLsbQwZDWD1SYK5zpzZBPdsUGsymq91QZAMH5n2r3gscA7kufLYUD8QpHqMrhRo",
  "key26": "sxkrzNd5ApgUNy5QiTewsL75ycdqgSesuZLRdeXBzU3X7EZep3JSuC4m61DJ5K45bX8ju2xJFDdJ3WgdtPmPeTW",
  "key27": "43BKGikFY6NigR42YGbdDCcjsgEmTks31AP2vAhuezonFztMDmZrwJsuSqzVxJZ6aBfpXQf6TzxBML29JK8ddAVT",
  "key28": "4sQEFjKkdzna6JP1LZdG1aCsoiyedZLFSWFjRgSQidmBfSiZt8TKsJNbMZUePvbeUqA2YBDqmQEzZRnWhjub7Pco",
  "key29": "4u2kRnS7oMkXUNYQrDL11hdsuXuWTmbHjkBiUoaehR1Z5PPcHmwrbfTU95p6ThVMxVVMrAPZBrnnHzguVyQ6QFMi",
  "key30": "5KXr7Cfm3F9U28eFyJUGsf2eThNZLgUEfbzo8qoGiAMrcLWnTYeJrYGxEbork578J8gKUhnoBsNVAWjqJfoGWsVH",
  "key31": "P1KaQsUsfmqTW8b54gPhekZG6LD3QFJmknNYFvbyeEb7KQWHz9tJeHbxypLeCmKWh1dgh2nC8iLSerFmg8xaJNg",
  "key32": "2saZTRNCAQxP7ZiZJD8L9LJkgaL3nz1cycAHc8uu2HGPBbTTjJ4WUgvPSL2HP2pcSsb794GVL59YAT4cRrRX5RXd",
  "key33": "4hJkzNjcdnbYoPNGumnmcms9fULCS4Ub25mQZYFnQvrDxRWHEhdiF3i93w9jt8v3UWt4oLPfrvGRKbL3CLYZGi8D",
  "key34": "5B4cdqaRQFjaFawnYJwVGNR6DoborQcBtvHcCUjjF5pfGLXpkrjR5USkVHyAyyGaavVh6saHM2qBnhgnw9ZySrr2",
  "key35": "63wEGoYnacxVnCN4fEebvydCAeZiJQk2LyGVRRBmBw9MCUB5Ghp3NRNwAN9EE2c5yMQnZ1nq2mnAu55Z3sr4neg",
  "key36": "r4xqq8WW19x5cBXFkGZrmDj1zWoWbfB9JNAPtTTT9Gpfv4R848wVa4WuciK4ph1vGKgCsLvShZWNfDfJwUDs7wY",
  "key37": "66MqcynrwbeZ4M7rtYVfvSPCifyd3HKmCBmkNZFj6SSpfVABQsHVu2Tf4Zyn2ruTyrwRgRpbfn9iQZWQNGdGx9W6",
  "key38": "2XLMXcujK2ARhfVN4xgzrsd73CbtcnKbHmH23grMMJeq8pECayRjw5kQjZo4wde938rjEhG9bp4p2geppiWhMG5B",
  "key39": "5TFvghagiwb8YgVKjMbZCAAmqVitLPgA6VpjbBiZLAWAMLWtZBXdnytwffdAD8BrA5fnUjnZae7EQsPzmGQM9389",
  "key40": "3234eAzAXbBHTCzX658NuqYq21zfvV1UDLjd9gVhKLRGs8wUeFiQJtW5k7GdGwwQ5VA3SJEJXiE23ZU7esSEdR6Y",
  "key41": "3byTm9rc7U6kjhybr2jVvhSv9q4BaLtfkJMEE8TCjHtCH89rXD8PEgm4doKxDKCeCw6J2MGkZXEnQBYKr2CBLtQi",
  "key42": "3aDK4Y3Q7vmDR65rNaLaZY52srhrysFzV4xpZvZUmaj5LDPMU7pc5iMpVxNa8ZquBM8SuuqLeyVndftHVSPmgweh",
  "key43": "3xGLXdh9XV9rrAyg84zZuUzHA2H4DpM457aqLw28puyGvgsEEZ6FJHizmNpjzhJTTVcHJFrupmfyoT8UpfrYwxbV",
  "key44": "4KEKTtrJbqdHavEjVuQr9Xum7jkUFAAuHeRyXzG9krxEWFc68s9RaR8TjzfohzvbdVhmHMdbZZKVu9CPLkmckxFV",
  "key45": "651tjUBKLQuabHjQ49hYdzrDpK62mPUnqirp8GHEBgrEWZXdRYabyfCuBKknRF3dTP5gCHNtdddVMZDxxfSHwSiQ"
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
