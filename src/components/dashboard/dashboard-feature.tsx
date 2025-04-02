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
    "3kUp5vyk2ASoDxQSDdsQk3wRVSNjp862PzH9oduB8YuGEGiVB6GYmB9PuqUVTMdEd3pwFzM7YBtYskK36JreeBpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b52PckbHMwaMEPTRkkrWHq7BffrFtTE4vF2mMSGJcX8wf3NQEBGWx4HpHzwrFDKx1Mybcm6gmNtxRGMANaeU5cG",
  "key1": "4oVD6z4fdJHbetYGGHnhpNeVAAGev2yT2bpqYeMqsm1yoBWpNgBpkaMJWCsSRetsyLm3yrFwwz7KWY1uyBgEyucA",
  "key2": "4kKCV9esU8Td29XaCUkAUZdd81iUkQRJ3XKQy4ojnJUL6ckd6s8snn3h97ohF1F1QZFjgytbhfhMRmHwHzygUXq4",
  "key3": "R7ZHm6owrUMgKaR3kpetyBEwJt9i5DL7GQVSLktPUctvbsUpWCDS8QZKfFPxjzG5rG3ZerUvTvvcHAAeqxmzYrx",
  "key4": "4NApDPFaSgEpraxvMRrvQzo6Mdy6ibnUvGAFAsuawE3xj2BNdZEEBYpNUjJWewpeLZVrWbQ4KpFif8bPyBKQPB73",
  "key5": "4PdXZCi5Gnk7svMDEwf5AUyFJQcp9wbYJ2VqPYbpvvPdFD7CKeWD4R9ARPHcax2MBruNe1vjHx571FWNpndxnt5Y",
  "key6": "5nWUcoLUwwLWbx1tFmzv6LokenQKJSZDktR2Rp7tV5ziwFGZnagXDkZm9tsHUg2NcQ57jh6tfdAudGyCxV4bAxJH",
  "key7": "53gfcqhkR3aSFTRdMjQd6xD69iMhVDxKVwA7Vw4UZKkAXuqf1suuyLu3LciqZ5MNFkZVyiz4PBPmY8A8Un7s5pEK",
  "key8": "2GY6BcrfGHbZZKsbqzP25iEm5gBzoFay6suWX8jsmSWjAZAmbH4pjUhnjg8Ew58u9Zgfb5yEhMp14TvxQ3ZRbVQo",
  "key9": "3Qw3ypTcR9oAPTg6EugbCW1THxJfTP3QBn2DiVp6hPKesGaX7SsXALAgKeG1GYaKvkuDFmc8fyCqUHe68bL1JZLe",
  "key10": "4LFW9FebhVv5Cztwsr6FYbPVTYFyVjMKTEksfbjS3HcGzWm9QkoUJ8ohmX9CbEDRZ6J3ozsNSSwrftgr3VyWuqiU",
  "key11": "3q7EFeTYtmxevffYcbPNRgyCPrGkGHjb7EppBbJPpJkAc5Tyd5XqsbyJyXWhtRP87pWMBWbhRQBficzoqUmUP6WN",
  "key12": "3GPSEpN4WkNYJgKMxqoS21NHcPMVimobMxHzW3DtA74akbXA4TkXKgCVQTsML9KmYoCJaJF7vYVsC9EYXYFWdraS",
  "key13": "5aGgFzahMmL1TU4k4jUTWcYni5pzwf4ZoqoSTR3Aumn7C2mYxzFWnjz4CojtVZWpmr9x76sDkMk4ZE19f9ccJSGb",
  "key14": "5Kg46cW6V8qgdmPQGFKr7wwQ4Doyo4ZHqHHHLNY29uNtJRstKWHufLWgVCKmzwmTvvTUrVw21jWZhwGqrdysJ6AY",
  "key15": "2fx4Dvq6ama1aheNcFPW1C3ttqWAHnFHMwBz3K66scrXzeLjpTY5voo8XXzKkxW8YScZZz3rsFujje9GKovGLToT",
  "key16": "2uyg84gPqJ2i9DdzjDRuWoSZnXDQS4KTYtJNNF6dsuyPzbEiZHT4VuDnGV5tMjd489CenUhWZwd1hpMyUS6QxRkV",
  "key17": "3eM38f7afh5ri9XXuFwZ61J9MRoNMPQETZdLxzvyVuDkPSpqGEcuzf5NGEu8V4vkvvA9uXFyV6AcGzBZG5mBQiPs",
  "key18": "29hRmXmtwiUaVycWN6W25r5AKCYaPTKNgVmrbo5UvasCN8KgAzEySxRBZf5z8BDcHPQAYNn6Mr1nwdcuKETJu7Tz",
  "key19": "4ZUXsSqqm1UKR5F7m8fJeYGQKq43YoySCXm8cTGYvYPpxCj5VSK2msXSmqXb5NtDb7o4dzxA8GAZJyGoae4ngFww",
  "key20": "4xH14h3WZyFCayma3QbZr8vc5Qx363cobLdky6mxsS2zEg23XxHGcP2qj6SLLpYxYkrkBL52NuL5GLW3AysVx7Yh",
  "key21": "4SUWbJmQTt8LvEr3zDryKvAWtRiWkonseKqdKNVNZHp5QaofbGrWxHoQoyNvzUYGdnRYtfkDui8WLdKpiZCFmV6c",
  "key22": "3Z96dgZVoUAXjk8ChtiNqfn9zZnEDaMwvtWorQMuLjt5oa9vMYErJqam4sHwVvvk5Eo34zN1GQaX7rGhqciQQpx5",
  "key23": "3g72ctuiaZVku5XJsF3MdTbR5drzAcy2DNr1YvnE28BVSmPuiGBYt68kG4xz1uN2BLjgHFEmBja4yPJ77MP6EqGQ",
  "key24": "5Vkaw6VqmS3Bw7sWCSyYJK9giM7RVJJifqUSyAfsSNEjWF4QX5S2g6zaSzCD68gg8jzhV7gHHuoo263FCxxfe4Y5",
  "key25": "PhuYvqxmbNGXkKBpDZGjiH23U3DZraDKVm8AyFiEAwpBHp6NjawycWP6P14ufuMF2Xf4TrW1CTUaiVzCbZghqsK",
  "key26": "56x9K28NYMo9t1LiSpfscqKoXhncfUVMYnf68REyjiHv792C1xK5wCeRwytBwu3AV4TVYsQVq3vHKPmKnNrqjo1a",
  "key27": "3CTnTmpRzMPBLr4tqYcnBPtFkG6C8urvwXT7KAZU7Wi4cKgp5ajbcvGd6DuNGU9ucSq3NF5njhEm5CH6rcD8qet6",
  "key28": "5Cj6pmeTZG3zfxo4jdvvJberySmbNMaJ226rf69EEBjjeNCqzbo4Lgmuttpcs9yLZVHFxYQvG1LBLt2a36Ngn2VT",
  "key29": "2U1t9PTiakBCDymd9RFSqxNjy6X4auhyCLEhTvMGBDzRMEwnMNCKWmvV2iTW93QiSWS3fmyt2R4Xs1ajEeDe5Nzh",
  "key30": "4QXFu6vRR4Uc6ecmGyFyy9yDw2n93qvhaAi2booNbiQMxAcQS62YCx51XpYhQ6LbCskPedGXy5udaYXnwpnWqdLc",
  "key31": "2oHV8cyDaae6bU5fUMDVMMVb58VWcwnfgnRn1FvoryvbFFovyaH53tuLLM3rCfuUxtHEcS5aqFCSY192EYpxxgGR",
  "key32": "4mNvfYWNeKXwhg2HWKGhMr6EPPSc7y748uKNpzE8Fi9qLy5Dfxax3JQwJbBoPnJs2FfzCDnArxPYNcZ2EsYCYVNN",
  "key33": "59meNKVYXqRBhicGdDUBQNzQbBkZXnnpiAfHeraFcTaLmj2sMwTdUNK5oG44iQNNJKPS84iqfydRtHWBJCiveq99",
  "key34": "463SaNwTssqDdng3af2mj19rzskxzgNHTSa951J6jhP5omkerDVNsvMZcCfaE3Uae7c9MgAqwYJvg7sxUUZsnQZT",
  "key35": "5TnMKLcEqaWtEjQUb44WNu9zdp8exVHNcaJ5f3WdGh1Jsn5eqAHUvF3pL7tjkXZngYECKhUfu5S8X3Ns1Ea7SsFJ",
  "key36": "2qNPiXFGet1NCKCsubRyLgFpfrXNYHuoFSrF6sawZfrHHu68jxg8Q2rtWisjK6NWjXJGzYbJikmLFz5J3RLZ7m2Z",
  "key37": "4tkRuknX9whJEPMScjciaEFCsPCKM49tyfHyg59RnwfZtFujdB6rKZuh16DRoE2hwrA1BGvAHXmoSdAUgqpmKzmK",
  "key38": "2qb3t5WwPpU15vz1TwhyY5CAAUJZmba659Vu4g8Epi4zcXtnSzoaQuDMGfdmdSsHtxqLEWDk5qmXAgVzdc8XzPvh",
  "key39": "2nYfS6GKf4chZMkqYxpNx9sNPDJuFrkzNpRCu8QLC1zyBqxhwsVb5WFYwTXBNxrsM7LNxSB14B9BHTUVBwkibPQm",
  "key40": "3hJZkFhiWKeDfPc8X8nradoYcbooqvMzRfT4K5VvqSGRpGH6GCoEtvwnZau7GWTdYYbLd7ZvQg5Mh3VB32YhFc7Y",
  "key41": "3ADpshota8D19mDSxjhJV4orAkWjoQ7CuYvyEEDCyKFxeTVziNHuCzw63m7A8eZwwK3AUwqR7dw3bhdBwoKhFvMA",
  "key42": "UTCNurwYdCKbBMKPyQ5sCnDCH7UdfnJbW6mddffNJfJexK4FtNtogWp2wtKmD4x5mUN8L8Wi3byxZnCcQmqPhxy",
  "key43": "3SUUvyuo22sMAeXDkj5bohym39DcXFmA7cz7Hv5x3vq36CBULxTprUv3iY97nQ5w7XeKnGK8me7XAoDLEWbPk8te",
  "key44": "4GHmdWDMuxHsT7ZEao7weHM85TbCKPjJKLwEhrjmm36RDPkYvP1L78nh6WDG5SwSXoD4BkSrAqBSkHE8caEAcW97",
  "key45": "456jiRxeVoz7fbQ2vQTNn8guAFow97VGVKN4QcXHLA17GHgLLZhhqxyhSqUiCsK3g9LdVYqYhmnuRMTun9JvF8nu",
  "key46": "4N2zs3QJM4dsDjAV8jDSAprKLNGYPYWaFPJ9gcVUwGEGAd6FiZ7trcH6DjiFsDiwDh8WKzJjdvioTs6WkUjXpmTg",
  "key47": "5YfFVSuujeSg6THQhmMHnouLUesqtrSkv3ecya8BiHcs7NYyp4JwudQtpKj8TUZnimxWLMXf8pQ3V23BcFXonfmY"
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
