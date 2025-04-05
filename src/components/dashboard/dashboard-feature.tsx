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
    "51Bkf9M5hvtzPUjndau1qA3rezxt87Lv9ZNucdcTUzUdbU1YHx1dzNAHxaWQtsEUXQvcTbYxLstQHbYArKVQmwqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mPonb8jN6G7RCYWUYKsrpA2QsPGvrdKGtMT6wA7BThvV1o49FZiKs4mJvaYNwGk7pvikx4L4uBji94ZVxeeiBKV",
  "key1": "4PS6t9o2upkD7FndWbYExudEENyVg31zJ1mBAZzXkTdFx7ujiSdnQNPECuvKQbamMHgQtCuQAVPAAWW8zvG4ufqK",
  "key2": "sRFumZbP7teunEaa7sYzrLWGKuUmJz22Lma9SLD6Q55MeniBWGcvKnRLW1ABQMxa457seHP6ME9Doirn3wJQV5Z",
  "key3": "4gxA1AoTk4i9AcJLYteRERGGye2nbr2zxPWNtkoyN1Q84TghoDHsq17PXuLt2rEL92G7VZPacm16tnqQUqvxbtFX",
  "key4": "33uxYAC56T6tX8nwskajqDNQnCGPT6f7GBFz6At9VnHAW95AGC1ifSAD1bXjQxifNkiZqnSRrnsay9BD1EsWWUhQ",
  "key5": "2gHsi7uYXtohSzsK445xaFyRzkzxugNg1baN4Kw2QdxMmZFvBHEE58TKBgimhDDHSrarboXTT4Ecc3QP69c4PdBN",
  "key6": "XH41GmPUVQJLVC64Xk297sdTfKgPMrHg657CbMvqwZ24WUHyxcz84BXi1G8CzkjjcExfkS917dG7Tt9o3TXsJVP",
  "key7": "CQyAjBJZJNr4uJdHYFUqu6wh1CeCFii9nJhpwZjfQKck4kkjuvmvNmuzDJNRXHDTpq37fpiVhkHfZXtnAewaZj5",
  "key8": "4HNBCiPwtEV5SRSgGmu1hyS2Re6fXufKxxf81aQBnkEcksi2Y9oUgmXRQtcYrxBtio3kxM8W5Lmz1ERjnUf4X8zq",
  "key9": "3UMPp2gTEuRVDTv4bpdmqKDL4iZMGQUUBbw31SKhkLbK5Az25Md3BkGtYbouWQMdwbguMCpKYui9tWrWgVvToa5j",
  "key10": "5exSAC7aMERo7i6WChJmgWCQBY5s6riSqBKDmW1VTQCLujkPfj2S1xaSryHAm1CuGgCzaAATC198n89jkfE1hTLd",
  "key11": "2nqixxp9Js6eo7Ux1sznD8XJkNTqUwpSRCrAvBB7LnjF5egVE2SCQPATRRn4Voq2ZfQBcneDQBL1Vdh4TEv3LZ4a",
  "key12": "5NFLMzMhx7SBPcoixPJEKBb3Aa8FUviToK6rPjFRYccpXYFADS6Zy7oeHynnFBsCSmTb3rE8Ya1a1M8g9H7RF5PY",
  "key13": "4zCmj3JSQMST3zxyv916a4xyHZ4Cqape32YnVBvcNa1Fc1khRTxyAtewuucPK2FMGPEsCQmjkjcMQBwp2Qs7Aogb",
  "key14": "21BDsm9ThVGa7PPDkUHVEB1z6qkcut82kBEQotnuYM73WFQS4P838EurA5q58h3vPb9mVosSzz3sDccSU91mPqrY",
  "key15": "5UJmFt3auvMUv4xf2sy1YfZ31U3oLz4FEV1piGsxFQJmk8roGdZgkm1wdGQSTYN8pmgetA5Yqih7qyoJhLA2BmTF",
  "key16": "5tiYzkwuLXD2ACJXESufiHhJWAxuubghCiwfzjryob6EPQT44LfYxa6QPRyTytRN4jcyYwxqPBevewmb5x4U7Zvw",
  "key17": "2qraKSwYaan61vq4ovMTU6fhtWfvuf8qwun4rkkxJTzRW6uQGYz1nFbYfxkmGAvdwWaYHt1ANYrrEZvL6sBubaP5",
  "key18": "4aRuxeciQJK7CFuvvFJ53EZLeLHpNcwjJovZp7KoTsxjP5EifsBiN2MP2aEeGdAHnPKnFcBh94pK4PLzpt7Hbs4x",
  "key19": "54TZ9XeA4JGdfLEZiNRnVFZw2d3LbNWWL53JWwnyJDYUThySBQh7UAN9ZQ67ZGyGa58bM92FZGJjp9PZxf6TeDJQ",
  "key20": "2uzHpxKMgnmhed1WiwRgHPynqjBCjaSVqmjQqti1nD2veCaSDTwEm5wA9APXY1zwa47YEhQYYoGadM5bjTnSboJH",
  "key21": "VebypSGB6qhHwDnHqcAwCwW6RNt2w3CVd6yEmfatvP69vngzo4Avju3BGmzUWY3Xuc4BzRosXSSxCKbDHF2jQrK",
  "key22": "5fGy2Yx7b5hAU4HUGEH2V4TUwm6bE9aPwuK69q46Rbs9Uyo4KjohLctMsEoouseQuGtVxWrHrRWjW8bRG5YsNdie",
  "key23": "vpej6LapCz4jTC3x2FGB5wukgeJtLTJXFWZkX5FSaTcPARQybVrKKuFsPEAdQjeZ3rhVxJoJWFUcauPCtVxd6A9",
  "key24": "2vd4KMSKD7rchu7eKLBDDePpXatx4hfTqhxn82HkfRX8iCthmYLTWELsrTh9M9ERr1CpJmMkocp6LVhABjcubgz",
  "key25": "dqLK3iJ3fTWWmfwqyaBEhbxeJy4pYoTUVUmuxCzFbs8HJGXq72ptx8nKpQzkMdFSYX7fexdUAkd1zs6y7c3kFma",
  "key26": "39n2UDS8Mxp8LUstSs3KNHhSybHhvmzADpWPesKW6ngXgpffNPefaLbau77tV9Jgw2hUCQAdDtysLoHNpaxQSFV8",
  "key27": "4ECrXEaBpK3BD7xxvg6w7Z1xYCqRmmxHja2WZwtkv4yKnGCVbgcJP1Mj8iDBZ7h8NFAatAorXihjoB2uK7Z35a5H",
  "key28": "rAHQPo58z1J7zLA7gaZvaJnYNpmu8CK36jSXtG9qt8i1N8jaqWxCWCxGjTSTF2jinxhgRKNXMxDWtfHHsYyyjPf",
  "key29": "gZfhRwAvBPT6gvwDedMTBgaPTCMgbCYRUvfVSZikqZckHWE7i99Rm5iLa6chv1r3X2C8MPkf47RPWp6E36t7sBL",
  "key30": "WNamSY6ShBRUPEnF2VjEACUR5nvr97stunzmUSncPgaZeVHRCsZmPdntHz2hn4uB5gHmGPF1ve81VzDxSSUHnUe",
  "key31": "2yyPitpuugkdXmMTgAHH39eTT3FZ9SULEoWoS5AtnwbJbSvhvUePN3tmpj8U5Amq9sB6vKR3WPb3RGmsrq9cEFUs",
  "key32": "36CwenCXA2fARz2A3n3w4hecaLyfamJ6kkJC65YgYu9Lpwj4F2i6xCGEbiAyHHtAhTCGg9tVqbxFpEP1nhEwD8n",
  "key33": "5XUdf1DvBSpdFFo8AuNitrWBASarJmiBUhwzoLgkqWekCRRk25TKFGZZcor5qiGkGLEMNXD3SimxzNuTSNKmECkp",
  "key34": "2mocxySmLbUN3VJjAdftE38qVVUNnPwzoTjowGYTNsNVJ5eLg7t7upnYvviVLLcFh1ZxHVgE9A7VEvzLUHzKoKNJ",
  "key35": "5MLPuRSkXJjT9Dgq67bLUu5SoVkDKWnRpJJHNRGgKNggJPQ3hMrmTd3y2KW9CCVxM7hcaYeouy8QkRyo2dtbU1t2",
  "key36": "2yAqoc3uAQVcJBiEMcTSHqBuPSc6ghkEBYo79eQa6CHBKR7erYRiQYj84t1S1uVF9UBBycpxhfjad974Gq5GdjbK",
  "key37": "4vYwFkqMvpA3BkWoo1n7WcqSfShzH8B1y4kvwmXAJ12WH9saYz63ySLYwoDQH4mzLj3h8WWrsvzJR95XrPUhZ5xv",
  "key38": "FK5FCA7taepvZfGXaamQVNvmz797yXziDzdTthxVd2jotPqWed8z7PgWXMFHnmxUDbYvY6x52CwEvvPsv6RSDa9",
  "key39": "zYHxQHBSYigd4cVU2mka5BXhgfmVhGV7EbaLYCKfBnKfs44GyCSEaYDvKPxGTkXcLBkwh2zEqahyS6GYq82HqGQ",
  "key40": "3aQNTnffDqGoSNHT9NYZci4aqjjeYvKRJw4GgJN5X31tQcRd8gUZLSG5mMdXEx82ukudShsVwydiogQqHfbFBoL6",
  "key41": "4wnoMDkENRavReNmm39StSsM8wM5VkCzvsD6vp1nHvfgiMMA74AnDCikqgWCJ3tLrKhX53BxLtx4S7hzR4nZcq51",
  "key42": "2D5fQtzZLME9afTtZ8r4gEUHkKVnS349xsNTSA6rGdj4LkzjviPEEKFF9ovVZaChhJrEi1FD9SCZsaQcCB7rSjjW",
  "key43": "4h3WuMj7diQRLtZzc5eD8tNARheDqG3hbDin4BH9B16WMAfvit2Aj9AKmDq4pbXQxMEEY4prVVPSABxZpQxWPgXF",
  "key44": "LRwsxo5DxRixxxuDFXeaNadVd5be7veerm7GvBFDNoyhQxgx2fBpf3LcMsADNG3G3Sa4JnDG4yCv2zX51P6SmkE"
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
