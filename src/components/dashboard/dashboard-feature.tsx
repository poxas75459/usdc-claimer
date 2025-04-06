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
    "7UX8TrfPhkRYrPfPQenuHUKYRPqs9d5uciyvViznbWkbKZ2MrCEFWA98E6fjZCeQq2a5e3rjbdmgsMuBxArPzvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SPH9CNJYTx1Sc9yY3uj9TzGESiSsRB7mjUoTAnhZgcVABqhvjbTGNCofqHHnHNBcPFDibqTq3FzcGN3PeFZCFHb",
  "key1": "2EYmQeJwYDP6iJg9NGhMK1ERChtTRQL3R65EZdsjVEqk5KqzqEL3HATBhctiD5ftbJtkh21zwF5GoyQ78DQpa3MM",
  "key2": "e5h6dndX9MqshPbE7W2E9pVcZADbGXegQ3QJd362uCsJwXQq3sUMseSwCr5n4Yk1hpf1XG2aCFGYVEAp6zhtx45",
  "key3": "31KuGFn27nY8EN4FyP4GRxpWGq4J584NC14TJ21oZDyud6SdwwyJarXzNARdeop8yAomQ6G4jnKzMxzh4FvXm5Ns",
  "key4": "4qhtbo43qnqFZnQxwKYRCrRLbfKTV3QcDo8yjCSpueYZRDuDwNRTeoMDbdwdXoAsuaUtmUejobjYe8N4kcFXrYnV",
  "key5": "533PtSdJTRg5YHenCn8fuFqCr8Z9Kn7jtEE8TFekSwjSyhUPcvYN6B6hnpJ6XpePmfnMygCczM9dv1Ntt34B9vug",
  "key6": "3u5tkW3wrhx8fCqBDchNm7x3Fk4KJVtFGNGwGN8tKz6edEJ1wgstRonvHAg5eTtvcAQZdkKCMdKK2my2JGJdPqUf",
  "key7": "4kp9CvQH3nBa1WZLczqbvixJpu3rAVgecpYezCmEB2RwvAWykhxKstWC5U1ZmU2EyojPhzEoM58eLL9fhdngs7qg",
  "key8": "qmywfw6sp2EABGgFLq5KLs6CdSVG5ywLPH1wpRvTzPqV82tnJnqXiBd8cYhrAqoezQqbmTTG8gtejphSkgs2CHC",
  "key9": "5qmKDrCwGqSjSVuRcAGwfaoth9jmz1vrSHTn2u34k4PGTePJcPNELPS7Cf8LFP39hsPR1UTg3W447oA6ciH5BVzv",
  "key10": "49PxysMqBek28V3kiAwsPivn8ZJmp7nMasAkbtFTzsEBfgFyi1PxFJqmtDoAAwJSqXLdbYr6GfTt6CRLEVZhKN6h",
  "key11": "5LCE63qZkYys7vkqs4gUCru9zrXUN6BwXpjg7PHdG1HK15Pu4atMj1xvtBgxsHLnHpnWMhTbu5TrQUmMbRH2VbdB",
  "key12": "3ZQYf6E31WiEx98nTpdPegE4TgQ3bryeTwKpappe2XrgNi94uEGrcyhkLaRDzrmXVb6sCxsnxAxxtxZTfdDdLpSW",
  "key13": "42WgXis4L4mWW1iy3p6jpB69m9ZxHdCWU7YGrsCqimQd6Wr487yTJRZn75pnLZVoeniG6D8Par8PNk8AWQ17Pw3g",
  "key14": "62xfLGBMnXN2LYTAANnP6Qn9zMgvXu5BWBTY94iAfxRTWPcCe5bdR58RggzhGFoz9f5xYqUfuTTEzLBs4xvq2MQq",
  "key15": "8QjiMTYrHPsx3SRmgXFSnYqgku79RHAWiFNByA5hYs2r6QVigBxCq86gQ6n8Rc1vkvkWYgAmffvVEdctMWnNeFC",
  "key16": "5v9mXJiFhJb7eVAyNcTTUBgAH7878kgopHDBmrTdQCj1bg8XrcKmrEhuTjtmP4hg2Cm6djybdV6KJFiu6vp9gDpm",
  "key17": "2wRQRGpm6sRsrHt6GQwNkdh1eop1kECoBzkimVLtcR2butAFrz2uwAKSCA86pdCYo3Ybp29Eu2k7SV9hGX7wWHNx",
  "key18": "8m5GAX8DTFZYG2JkivEzN9mqBrWiWpdsK2ckYfrxo8vnK1Z75u1nNAmazm6opxGHGqn937g3eAPBX29MppvR5QE",
  "key19": "5gtbN4XR6DbKmKNo2pek7sYj7snr5M8GrrYXmV2PaQcppf3rK1uGdCBpRBzC8xqPiW3uoPZHcoY7v7p8T2edxX8G",
  "key20": "3gsQEwVCKzoNZrWcHno9iTaq4QQ5UfguM2bT3RH5TUGzLb4gQCALajBTZgTwyJjd8nzujPi2k5971M9hV6KZwtNX",
  "key21": "2HoDiUectW9nsNhgNKS65hRWNqu5NEWXynRJgyadAr1XhBov2gG11Mjy2x3niqjHkDgFAP3oPjpkFXjgf9hVdgFG",
  "key22": "et7m82nvwP14FZXmJtKVcVUtKG2MRWRmpzfbGVhnNmq5UgErzWPaPLwXGiGEKqUoUtx2mY6EYReg15154zauZfj",
  "key23": "UPY1nKzLyWiZLpXF8fazqjYtA1eBS1RKRz2WqxL56BczTPBZbGXt19cZbRoPzovrEvzCMzGEkqNhZV1wDNHadeP",
  "key24": "NJkmuhzV4uprYtrY1Fv4jef7BfdnXRPwvtBEF3KuFCkV345CopAj9spUrAAv7LeEAUha6Mjv1Jzg96PjTHd2BYx",
  "key25": "4dN8g3XcswXH17FcqxLrKo8wZmgM8aB1m4ofu5a8ix7TDmcrQNRtNysmB41sHnQ6mZ87HkXiTZuiCpCdkJ2QJnLy",
  "key26": "5fQmxVdYZQbXFNuuzTqDnJZXuy2UcmyfpZcv7t7cue7pwW8WCUHcSWFmv32JSfYNwbsaoqoKxnYRvqX2cyjiUHvd",
  "key27": "4TfGz8wDL4P8UpQ63Nu5aY8sn8ZqDRqyTrrU5X6rHLKnZK54cXBbEnBo83bhiH1HUFR8B1CM3QhZUJhWXneoSqfR",
  "key28": "5cDtigtGCw7K61aDsAZP6DJqkJe6p26vnhFwXvnih5jkcbTtx6TaXK9NyKpJhpj2i7NdFJk9wX2Dx5CAhXGzrBBq",
  "key29": "5oKCwzX6BqYvWKxd29pKAEro2pWJaQaapMaX3x11StUysX4hYdDNNyhG6fX27qntcV33b8h3yk9svLbGCAjvjD9f",
  "key30": "4GfprZLEe7JTf4aVW6rxxMXSoJfMpp5mMts5NZbzEniiCSqsWdCJ8awBhwSZF3vPUFNBoGAoBUiEsfZdfQ1hzh8y",
  "key31": "65PMViFSA9SDh4K2B6dmCXX2iAD4cXdUVsdyj1rfPxCrQ8jCzyxHiR3hN4E9mDg73RJhew8xhtcv3uRS5ocNbqyz",
  "key32": "3AfMgwgKiMS3KCTbNF75YeMowMfo3jdGDnSK3J8VUZ9u1HeHqa7EC3ByCbVQE62zQXX4BZ4hzMseHens4sPep5WC",
  "key33": "33oU1Bjo2cjYCJFb86Rf8wfG2Ty4SS1TJnvRSCj6vQdHx2UiJCmHU8BXWwdMvp7KXkBwQm5kGEx9gm6Mz5t2CSFq",
  "key34": "2RW38sHkhToL8FTMhSA52ohEHgBxWSdnLBaPhKbX1He72X57QAoPQpZKtnr5Ub3JhSdLvjUA6ebqAx25Za97BgGB",
  "key35": "3nttD75cWgeBVkoYVD1hs9dALzNjRCCYN7eYgPdNgZKgKXXszzpr6E31DszdEmTGe7WAr5qo5mGZ6rm5LYGR4z86",
  "key36": "2K2C3owu3XkaB7QXMfrdKkoFhtttGyaa6wavQNRH1LHiuYCgTDmKRRWTbbTFhHigNXqvW6Z2kRbGc7Dwr2eXiwnh",
  "key37": "EVqvSsMH4QPZ7911FwwPjnEsiczsMirLS2Ab7ZYrazRkLBfNNvn7khSJMKLAbV9x3CeL4XxHuLpjB2LAEvrHqyA",
  "key38": "WKntVTkBB9GFoQ5bTLEdg4Weh55AFp77MLF6ukduWd2WRVWbs9g89y4eqkgzbbwWMCZV4qttHEevXcgLqnRJ9b1",
  "key39": "5NHn3RJ22xrqPEsLwLiAZ3WtDwsHzanzjDpeuTmFAG9FWwQd8im4o2BuNyDtB3YmAFU5YLFx58uiPeykZUbV5ZSD",
  "key40": "4uv2JGnPzSEgWW1anV8T7xBWt1eDU3fvX2C1sxhCDVtFoFjx5nJniHTTD5fTFbdb5BdtuxEYq72zNAGkYwevXmgQ",
  "key41": "5ni2FAYecQeP5kFtnvWTiJnoQqQh4tSyAALgFCRikh4ZbuJkTUen6FWbMty4Hb8yp5mkTTLyUNf1j7Tgx3DaAxPA",
  "key42": "3SAkW7de46jkPoGRXh9Bi7vHtTSam3tp3pEjtw17YFhc2w3QTpve95c3TBg4giuEX8kFiVqnRo4mSsWn3N5m4wX2",
  "key43": "59tjnn92NuasE8oRotXhXJjfxgEpZftfZgktQeMrmuuXhPQmT42rrgCsCM2XXLwFipJwQwfFAapmNqmgay9gwYdn",
  "key44": "43kjrmtbt8s1WTFzv5tkpakjVcDocj3HA5A1wN5nK8EQVCjASa3Rq466f1QJBbU3s4vZVnSHX6FHMFrWrrMQskVE",
  "key45": "3EWPnoej7FUNqLiHgk5q9rdKzTvBosuZF5QVhv5v2nNdu9zQkp3NzSDS8AYWK6yM4kKCJaNWxJCBQxfwAUtQ5QTR",
  "key46": "5MwgJast16spn2ZP16wdM9G9cusG84kFDZKZ5j5bXbZwqqCoM9txNz3XBSDK79SJN75vLvxmYYDQU5dsi8L3pG3u"
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
