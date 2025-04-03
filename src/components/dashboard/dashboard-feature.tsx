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
    "3cqCCcjpGceiTAEMMvzJZK1b4zjRU727C7JyCW9PzugA3dEPBJ7gmMtVASMjswBCxkwZhFJPETVCs6m63xCZMFaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LYWYrk6aXpbZfhsywzvcQMWjMhQnXAgq3GgoLbTKxzE9ykKinMi9MT1ZQf1rp6ZFKaKwEUjbA7GcHAZXd3cfFwZ",
  "key1": "3kqUnAhr6YnmQURGFL971bmkooZhzUX6vErSxegJNFNZNPE87nXwHfA6rV674ZkHGFA6iHVg7W2yzj9drdauc5yS",
  "key2": "4Mc8RM3r9wN2ZkMgJN6ZPvnwbtcVJpWqGFzSAqgmCa8gqH9Qf3JpNdtvxqVyDyokhjThKFN4K74tp1tMPUZZh1Ph",
  "key3": "5wiKrXJjW6TFwnF7K9XJHqViNLHru37r5eVBEpyuKMVL3P1GZ1N73M3cXSfK5xq6vn6ASrERszYxMnZ2Z3MS7uTC",
  "key4": "2o1omqtNxm4WtkTFewSWRowpzoTr7Qxnh52c4w5B3zT77UGb6sY2jm7zEJPSzd8GR4LC9j3a1QYyKZmUrnd3q9cz",
  "key5": "cr4JtGuzkDQffTnaxsKnU3Xf2oMUHJUyuyc4KwXno95AUewdErEBrwfe26GNG6qz2nitnCUqA5n8waivYHqvdvS",
  "key6": "2oziiKb4m4o61fras8c2Vsy2Tc7TNEy1su8yhtiR9L2QhVbtipADVmTdBpSGL8Wnm9QmgdPNoXd9uYXGgbcRwjUP",
  "key7": "3PsaPfUUpYF5kucYZRAwVUtPkGD4bRgPjii7j7fvit2KPvpVziibopMs2zX8mFoa2rLfuDqYZnrenUBdAVkXy3hL",
  "key8": "2ipqwctJsfYshEHTj3oat3Jes45xbsuMPNNnTVexGjBvRDVFrsEW5A7ePc9qxu9idNBC96Kma8xZK57MS2Makfrn",
  "key9": "iM9a7j1Ritw6XXADwWGAo7dAUK9JVYZsnWNU8PXshVTBBzELAnVwGgDsaE8Pov5gyjzAvuBVYKvmaMJGyk8p9uQ",
  "key10": "4a7sWei9HUhZytQyoqiLFshbyYjFuuGx7tUcgZkwYBDNPv9Ezz5efshqGrMJxj9v11E98JDF817jPiqebgY5YhJg",
  "key11": "4DgxDabWn1zPUC3mHPn7JorR17JSPLm7NxKJ6xUjw96BTMmdoui3oLu97eSgCHWXMViNeLpZWcGd2nEhtWxsijYZ",
  "key12": "5GK5jesGQ19ybzpur5F1moN4aR7w9HEJ9JABLnheF6pe1n14uW6bGNHJGRLEweyKYM1Agho1oW1TqFnyapJGeUVP",
  "key13": "5GnDKEmwWa8hkh1k2La2VqRM6X18fMe7X81zAxvra41gwRUvKCPNbzSi1Aucty1U9xbLJ8XBQzL5HxJucP2biNre",
  "key14": "2XknKejR7YWAdoYWQQdCt8rPqhkLCLFFWZ13NQo9Lj7o8kKvV1uFgQixy5b32DVceUGz2TQSB2whMJU8XkqbtSmz",
  "key15": "4PKKk4wByUogRwWkEYinspVXY6CVgfkdVJFDvgGVDQSvDo417weVJwJGCkqg3yKkzTcciuVg18zpBqFLpyC8VDsm",
  "key16": "2p3fP3cAHJA8fJ5BwXJJW2GTstXiEnsmL2qJR9Fx4FUazaUSpq1U8qPfQLsRsEipD6gZwXkrSV3ubbkDfK4Ee7gp",
  "key17": "4LgnW2BDe4DQq8uB38avcxznSBU6tarQAKKqsCBhmCzsGpj3YNdPJEPPjJhp6arhHZgwYrY9VVb5xaVXXC8yDpyQ",
  "key18": "HpynpnzMKS7vVNYJS2Jbyj8xcRR1s7Z3QBh7ihvvWMmRJMVQZ8k13ckyenBPbzYACx6nZrR8A3PXbKZhEMc9zgz",
  "key19": "y7wNnnYVuBcszcmBuFfbDjyXivQtDgxoWCHU9CGiGHZGozMjc5aiczUTxEV5qEGk2sASBYDJE7yDFG6FcRHwdqN",
  "key20": "624KcEAeyUjmqentZCeQ3mhztpPbcwdJNv2a12VEBSeMvP1nfkN7wM95DgP8R6BftmtykYBfveJ7pbkEsgn4HzBo",
  "key21": "4CcHhx11ESt1damGyVSfWfk56chpdBy5LnLD72kUuQnrPR9ZuNEvt5UoHp3yQQc2zHFRVrh2g7KRu8iYFjmfpshv",
  "key22": "Yj7Fg1tFVCnAhQs3EjraxwoW4Pr2bh3amXddtnF73EVx4HSDrVqUaeFEg9H5pT5CnmxavdFPV6X6vBodYTsqQ2W",
  "key23": "VhH8zUfzEmFgnBH4o8oqHFecyGM1zzX3DgFV6MxyzDJqsvMg2cFCEsUfnUe9eHSc5yGo5fgDQ7bcw9yTfyJgPzv",
  "key24": "3Ki55oyFXPow9sS19me9auDuGVWQeyGaY376pEvCWuaxaaQHA6SbygBqhFLFbnbyZMkUG4M2uWNJG8Eno7DTVq6L",
  "key25": "2HafLp971fhtneNT4a6cS4EvSFufrabNjmj1mp7FqbBEaqwHKfRaV5PMh8nEwsLbavtkG7FJSiDbDFV61s73QbeF",
  "key26": "4mijmsmrQveFiaHSNMJgs435avgdavyw68iYC6MeBNBbHRPm74Y4D8hiNgqjFKoQr8J1Rf5CVqm4WzPXwP1J1u3E",
  "key27": "26z6kbXDz8H1LAghXD6C4tGrsKPZK1wF9SmQFHEYX1wCLRLgoNggrJuNpEKS1aSEctM8GWsWdGVEMjpXbn8RygkX",
  "key28": "hraiSXz9vMuz3Y8vKXSdm5DCeUg2ApvZzgXwwRJ6p25EePGfYqtSYKDbkvwWKVjTCX6UMGpG8hSffbSb4ajgJdM",
  "key29": "4sBt5sWdMV9MQkFGGMRnUqmmHuz7kxAhnuQqhyRtbz2tpQzBtpaoFRwZtgNYdzvpy3oCpjQgFM8MHchPe5dGvxwF",
  "key30": "3vLZqpX87yRLEnyYdUcAWx7PU1vBsmZ6B6fdfmwsqMGzD8ADWSRfSCjzqGsWMye8a167WXHecSESj13g8kvMuZbg",
  "key31": "3A86gR6wxxMp8HxNntxdNf3c2tbVyrxtCwK4quvnNM12punMtYmpHwjvRbxy9adoEJ43g4UgUHddMMZAak2hZs25",
  "key32": "52Ed52VRhkH3rijPNMeWNaygNSodqjizmTigmuaMnnPMrJ5sJssQf4nM2XQBNCJmNGZsuCgQXY3Two1WMiYjs5jV",
  "key33": "3AJA4YhcktVp8AtKGofLEBpfsGe6TCYxRJsUHN1wwN9ziSfdZKNH5tL6UC1D6vZz41oaPmAvKv5WZ5EeijnNb2Ak",
  "key34": "36WY36dDVzx3c6dABqC2jWwtBnnkCKoM4PiHfENv7pKoZTcksVVXqzCztuXFnNDwWgukPK6N5HNEsgjMhCd47NxZ",
  "key35": "Ze5gngpWWB81C8VzoaK7o2tUKcZ1PeVqd22iQ51WDN7bsbcgcM1QScdyzWdNyvskaBTcddhfvUC9Q9szWg1prkH",
  "key36": "5yDGELygpktbkWTVrR1oCnQpoB39yHQdYkrqcVBnDsffcsB2EuQ3JHor5KScDdY43Qu8cWGPh6ATWKZWjP3uoxy5",
  "key37": "5AZCxScQh1j6oXGDrvibEiLPxUGK4TY8i24xsNwGtPuFzb3pkKG272y9p4n2QSKQspFRKT8JGQwCARuCEgzoBeMe",
  "key38": "4cHAk7S5aiFMiRvWc9EZD1D16yWEZKsYpU4Pf98LTsUUZVKvdi4MjWd9e419qEEa9nrbLGsscf4ZyaMEEw4hLSee",
  "key39": "2ojpPNm3HwzbxE9SDvi5yfuCZ6Xu8XCcYr3S3of9B3hUyhhFNaRaXPw8KmxsgD2xVzrrM7YhrUhRJZgx1UzvmvyG",
  "key40": "56QtABrHsRoXpThiUfqfNxLZsuYPgaacjZj1PNcdGEavTk3GnGu8597TMGdNoKma1i6FeieP33UDCU5e9bBh3npJ",
  "key41": "PWBxvXgti5cDG2iqCqCzc3JoktdUuz6k86D4U6JDDgcxdaNVFB45EBT5KyhtmM2dcH9Fryi3s37uzEJAa3zdGDD",
  "key42": "62KtgrDRGznB8gJkBfx2oCHsNMtepqfEit3y34Hc6nEwbV3akUo6ZxMwfqwU1j6BY6vU47rEwG6D6237ohPiL6m7",
  "key43": "39Fq27ZnWMhLr3hRYyh51djaFvedRHSR4HLtrRzey8fC2ntZG9G9xwwf1hC6KsoTx3Y7d1k6uvu4QStp4R2Lt723",
  "key44": "3zPcKPLSW6qfjtPj1PB2LVrmFU28YPscG6uGtc8EgtPjscFY1mAp5cPvv1FMJX91F6dSkmUdsGB1mt7CT3ArPS56",
  "key45": "2uvJ5y3NDRMi7fEiBL3tRVoJ8SyLsfxZobXonBMQBtYV9sFEcuz2wZ7hsqmSqKm2V9RquM1Dpqz4sm1xvMqTVyLa",
  "key46": "5wdSHfdhPGT3yQBP4BkuGUnZjrbmT9NewLhvYsecrz2NxuxyUmDdZs1EcCrmu7yKSATHH7BBvPGKKM2NxGuBeeVZ",
  "key47": "2153wa1jKQWjKbSrR3TJ3pS8AAFo8vo9S34Pvk1B8tk2M6KxnkCQz7w6Yp8NKrJXRWXpt2PwmLheXZa9AoCwz6oz"
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
