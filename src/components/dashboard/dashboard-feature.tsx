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
    "24N2GqoL4fjdXXpvjPcFpVpqKBzm18oC2wrC6qLsfGPnewSt25rnuY2BWi2DbBQwPNciFN3PCcNV1A26jbfXDWHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42YCRVvZQFjGYUMHBnh9YD276cer5KeLsuyctMnE8neg8d6bGMrbMnyp1EmEA36kAmnTW9pLpgpA3sFZb1v7X99Z",
  "key1": "TXiHruCUb6S6a2cTaCHM13JTPfkaTvW7QZrAx6UQsTtEeBXfQ7PxmySZbsyGayi1E2uwpQySBkcGky7o4RxU9jh",
  "key2": "5Vj4aAQxrGfmBkVYtsxt5xxTy6nNiUyHtTTSZjHPk8reLNnsHxj1dJUsYy8StYc7zFoTucQUkEwKnvZtuFVa1zwa",
  "key3": "5xi6eXerjcWJDYttg9GW1bdRQxLYvzLrX5GgGfc5gQmAkHC4KFqe9kquauPquHgMyPqZioNTVGctihKk24LB8cn5",
  "key4": "5JALoSwRjLs8K2JQUrkqd8xd5N1unYQreCdC6P2EKWWBfojPqnPu6QpgThkpuh7Dk11Qumic3mdnQnQLpoMUq46",
  "key5": "64tKhPYvRUgJnbtoLty5P3XcSyzqDMEj6bafhJ6T5fEGhpgD88hWiJDaWTnT2rDua2hpRMg4YiUQpKJDZ9RRckVf",
  "key6": "qd5h6PHR23MLJnLhR18pzH3dqv64fnz1359K52mhwqHDK3ZbTukEJHB99NPZXuFehKjonUArKztSWMKKK4qHTv9",
  "key7": "2H7hwVt6ccBVjpAgkQ8BkUMLs9ECYQEmFQ7LGyT1h95kwNW8XnxubeWGKB61qwJWnYhBPyjRYAh3us6iGC2zivtP",
  "key8": "2ZZSruTKecHdKRgTbPZaJqE4fAEXwPbpe1h6y4vPzhhme5rnjtWUxsHwQyximoDe9dsMY6WpoXfYY72fFj1N8uq4",
  "key9": "7JEkMttip7e9mE5CRi3p4xe1vMuB97yX8gkmkaieXKMRZRpEXg4VGUiYKo1pJyYDFTyk6jaySzTw33kp8sxaAM2",
  "key10": "2UTgWiFiFC7t5AJTmKgPR3Sf9d8PQ8Qtffsr5vamY2sqri6K6tXaKWAepD2DtWMtJKLYdfnPprWrvaAKuFVM2U8y",
  "key11": "2KByUZRASjnCMF8BTKCwTPo6x1V7tYeRuiTnM32BY3wt8MeU4SvXN5Yuf2kW923tppRokELfrjavu7zPfUjeKWk3",
  "key12": "m7HtT69WvN2XtJqoDSexwsNWbVL4XbniDdrBTH9KyFm7fq8tzNXpDpNZcN1DArjSR6x6raGQB1W2tRiRXn8VKNe",
  "key13": "AgL844ZNeLhgPvKvfSxEuRCpG2621hjmzpJ4n62GHvz3ge9N24gjtLLmqgnSRibjBpafgYsbtNKD9gUgtY3MQAP",
  "key14": "LAiaePbA3u432oJrrETmQe9a3o7N3qcBeiLsmYkZBNvi3vgtXXR9niNK2CovFo79NNw9rejMdXCunsM1c5Ks2eb",
  "key15": "5gJ7FcfjyzDXTFt42PSfi5uvVjyRcLYLHnFZcPbrVbMaXUJNk3eEUPM1jq5b1boE92236Qj2MHS8Jks9x3aEcB9d",
  "key16": "3nSGYJnSGX56NxEGssMUhWVFt6aduM5EwwG8Qg4BQPBFjT39ajZRnBtoiRYgDkamZ2RcKxf4hA6SXz4fp9TsyfiC",
  "key17": "3ka7ztecevobNZBqpk3bHo8Hmnb2o5wp6WpMy6J3qhZaCJybehtxY3MduhuG3MuofUoctDbnaf3YA3nsm8zWAmMo",
  "key18": "5qPzU2bdv8ZZ6x2pCypew6JFzg9WWrZq7bmN2x6bPHDdkMG3akgMWr4gcSPSGXqm7T2mYwKZkS7R1KNVUZiYMatt",
  "key19": "48RBu9hXZoG9XfpPMSds4zWn7WXYtFzW7wAEcJ69BdF85NjLyASb8VAoS8aEq98yN9nnPHeG2i76Cc4QSbztMdp7",
  "key20": "2TqhrQ7WH3jsEsi5VrP5P3kkpvh5iejG95fHtMbmrm8k6wA9wkq1GU4sRAvmoBaCkcdL1EWCWunrh2mWd9EuTEy",
  "key21": "5teuWisMpRTCiXm8qsgqmqueVsd8DPouVEwBANMZWF9acZoUmBGeeymauaLiX5q5RQ3KTPJ17QPBDvLb5rKoTrCK",
  "key22": "4M7Cvkn1YsFEQ1J2Sz1qG89SjewV2SXZ7ihoZVjTb4tNKG1LuJmaeubEiAjcSmRmvafCRGq7gW92GHpm3cUDt4DF",
  "key23": "3vo351pdkhuaNdkYNec176oXhdzvUcubYKA2QY2CDx4P4bmpiu2irxq9BME7ys8DKM5PUEY2VtuSfH5XuN3H6TyU",
  "key24": "268aMxekp5GQj8XE8LC16LujF2GAgcx1ABc6nXRjnifzwrKqp47HSbrN4sfxPs1KP7fW5pgDFhZhKZS7pE16ETFV",
  "key25": "wgDZVYaDrBsPh6zZyByX9X2sEzK3FJxo7mTSuaVXUoKLyEcYU8kHmYX4AaPNaPTyCWL2FWfJeG6dahkvTGND5px",
  "key26": "2C5n9Rm7gY8yZRpsAJz3LW3wvqu61hPSv67sG6aebn4NGYHhYYFnLXVjB7ZRZpbMY1nBPZd65UfecRegVEcga4ZU",
  "key27": "4Xr2Whn1WPozpwDDGczHPnSphcNzdGZEtheKQ2ja6QpqSE7mou7RqSrY1YhkrWiyxztKSXMZvamuQFtYRHaQezPs",
  "key28": "w1yQawePDwUNm57rSzbQMpuDMFkK7HNgJEhMQjCZ6sedR6VhF73uJ2ZPuLsmTTVW369JwYaFGUU2A1cmFoEtBjW",
  "key29": "f9P6deVmMvWQicnVWkVwymPSVR8ngEy9PqZTB9kRDqrVCceRJ1CY5y424wVCanK9te3aTMdw4DbA2mSYQpedXnU",
  "key30": "4eV4z1WLd8Se2C813i4bNvCYZUxBCK5meTY5QMdKhLUbpjqbfas6iAysojEKFkKGJWPfckXep5MYU8Ti9X4Nfitb",
  "key31": "5NrjXcNjeLg6PYy1rmtGKZovdPjjgmwQudsp8C4ZKTep449WkoRfy7cESfT21JsAZqSfUD1eFMxNvYwYSkkbKcz",
  "key32": "AapT8JSXJeTA6XCnRCftegPpDPiFGQ3anQM8eq8JjoyaQ7yvFhiFavuVHrT6TcvXGW5MfaK5vAKeWSK5aDQjvAa",
  "key33": "SAWaC55tQH95eu8XdLSbFiYLd3jggm9fVXSNF55xy2RRryF9gzGr5qW241s7iCKoujrZVQT9wL5TxX6Y6Egsm44",
  "key34": "5Z989X5xcDkMcddKQ9ErLLo9HmT9bJkA4UjG9dYWAqXoQUj9ERLHtgwbPTNwFmD6o2HE4KcWYUYxLT6C3bD9UzQd",
  "key35": "3JECC1q5B9EevAQPBc8y9FtvWQfEugRFbzFaKupQnGqqog1fKAC9suUmEAHNNTbGH9aGLrwfqvQNupS4afyJzWHF",
  "key36": "hPVeakynEeHpN4kmWwGP39zTFfM4wCsDBvxf4JzyKSUAGC265erQ6sJV84XeckjkEmWiDmrqqnyAvVPZqtWLTbR",
  "key37": "2ZvqZQ2SJMUk9j78ywCSJLy5h73orQsykq3Mq2sG4Hre3pdGH8JbaZHoeKYwaki63J1k4a3QvRP5Y2snABFg5heQ",
  "key38": "3sh8FN8xSmsaH9v3a4LW3i6C7zSRVCuhuByjET446Ewcu7NWC3xG1bs62zpDFzQkdFenRU2mEZ4An35HuTorpXgq",
  "key39": "46JZ1rUCbfoukyraon7kh5JZsxdJkrsec62C65Vx7A3CYDdsbPPRaupwemdyrHEPRbStScYGmQ1KV3YKTjHmP3LW",
  "key40": "4pvbaUade6vsWANUuQSGe7fsJ9WeSqPxPXPMqP74ThfMVGT2RCuM9i2gFJuxLsujsxBjoBaW9vW3SEzoSoEFbDrE",
  "key41": "3ihAKjpeXNMTG2JVoKv14PPQRUP5KjekC2CTCtcHY6qS2Y9nJqZmdqsWQr82ubRsmwwamKRR5ZddHUAw57HMSGGW",
  "key42": "vDN8zKnyc3EtdPyBCzqJZ4vnJsNHywheBesXcruiQtm2vnGQHSKxiXP9PxmCVb8EmecPivB2XjLGcCdfJqTXM48",
  "key43": "2joMtMRudTm4Y3ji7WbEDzU2VfUnCfyfpgrWbgrNJd3T18D3STQ4EmJq6Yc3LogCnALfUMGataBusMgLFCdbk8p5",
  "key44": "2GMm5YqZhkD6YTb73LAomh1Rik9XRuWdagZ4okqPPTrt3TTm7jhHCsZZy1GyqotGWkQx2uh56XpyRVxBGbPqdb6w",
  "key45": "LGbQHM7KBrt58kMBAZ5VH1YgcL9L4BnvNtaQPG1Kn1M7K4tszLg1wuW8EyrxyebQDrgTtJDhXPkAn4wkkA9ja3T",
  "key46": "5F1rCeVDHyuEf72JkTdq7bbrKf8JkuFyXYYXdqgHd4c6FWiW7Lp9JJAKbRaRq88h5HWjm51tvs74FFQwdRTNgUyH",
  "key47": "5uvjePsKQoXJYosoG3SgwVRgVwDdEqwSApFFHDr1dDEZEbopUrduA4uh97SohvtC3T3EaYbRnoSyo47nzCyUL2fN"
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
