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
    "5xfjwb95wxLhqSpL5y9xae6Ecx47r8uqirykYLN3T4Q3p4jJjnM3PXLYN2Quwa6nyV3FCiExAUZJu9BSNEu9vAfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GjjrNxQ83JPQVZNQd1DHQUCam3FQfzuVfib2diJ8HcERuLi23UYa58u7gZM9EJcx7GcERemDVxPjuE8NwZjsHHg",
  "key1": "4MsMdGdac4gcgnx9VtSmfisMmzShnxh29m1xJHyzWqSVguUXkjwDG9xDjhYMZqccVsmq5kpaw2GUuWSGrbAr7jM6",
  "key2": "2o3hJbcuMWLERFZzCVjxPymDXxXXZkDXstTrUZBTHpquh9ZJ3vEfZFxRqVwG6cUpRoo2K71LdRxX9S2WviWpHkpk",
  "key3": "3beRpF7bYCWcvjiTaPBkaahA5QKYG9bSn3fuJGGcs7wqMfFzn35bQ4Cn8egTE6io31iCyAAQC5QV8X1re5JL65ep",
  "key4": "46rPEjxsq9UHPANiB3MEZK8YBqAAy8n1nvk5BNHpgoLXzcWb3Z1jFudZvEwKJXD3KeEBU5rMt6Fxm8AmkQwREtQu",
  "key5": "5pmegQZGyKHXWFmnT1ducsUtDEGCoLYAKhuQAxdi6NR98uATKoQ3YWjDp7DmiQxNQhKh66UwHfmx5GGaEdPDQRVe",
  "key6": "4KRJSDAAjcRHnAgPXBWEbygsrL72bCEHXuWWF7qsX6aaJN9zZB1Df9BPHjow4Nc1cMjoepzAha5YsN7SVaRZ4qba",
  "key7": "3QJZYjNJMGtjzPVrym5bHkkf9LnS4RuGMBEkmCHoGPykrf7coiW3xBJyAFPaUU6PXsRkn2VXu1nRpbjy6nzjJsSK",
  "key8": "4m3JmV469beHvXaQnYzGB9w73wJoYgoBdAxJqN4LQQTfafC4A5wTBoJtDRux4q5y2dSLR3Rs4qoAhyYyDKk1pgSh",
  "key9": "3CvVg2fAsi8KazRxGkJb53NP9A7ABw7gJFcRxD5sc84nS5oFCixTT1SEqtzdLis7Weh6m23TsJUqzGd68KEPSPah",
  "key10": "2iUXbsSJkTCTDx9M2cf3FZ5fAGFUFwwbYxgQ54v1ADFobL8Vm7yKUhyi2V1kKTADYyTjQqcunthKiifF5EWYNz5Y",
  "key11": "4LZihQ5WXwJiNMxsbGLy9pMEseQXpMaRMcjj5GbR24QqsqCVBmpPKEAktYUTCCgGsd9kLK86bs3vnHTHYnfFSuv4",
  "key12": "kjsBeG3bJ5hqkGVA89HXJCoTpkiEtPADm3B5U4qNHhLdN8SumQKvna7t8x5XFf8Tv3ekPmVhekyWnAXw67BsxJJ",
  "key13": "4e5vCvtspeKEMyGFHFAhfAkq1PEEsrfSLPDUGqsNamRCmDc22Js9uuXacFamFss3ksmiSFHaeb2VU6eet9FR4giH",
  "key14": "5meiwEfcGvRCFynpkrVfp5rL8fkvPFb2pn2KGuR8TkfDEy1XqECvQU4MNzw8LGeYohths5FgYTpuYnaKc6YKj8HE",
  "key15": "43EQQfdhaVi4utYuaZoQ8CjbAP1hJTdtZAxnm5ePgGgaJmKE9Rwc6gmBTdjjM6YYcjushcKuwwkUCdmLLTi8aCkT",
  "key16": "29HEkxm8Q78j2jGFDsCHDXypxdeK79Ch66EEFQ4JHU1pcaZJzTadpAm31DgVBcBTYXYuaGSaiycPumAjYwZzmsEH",
  "key17": "5SNn7gtDfVZ5UB842uRCv8jeZuQcrNVEqbBuBdqN4XqrN5EMt5gCZjZTYZeCntGgksX7rVpMc1BSzvQP9uFcyGfL",
  "key18": "5L157VHFgBZ4zP5GcQXWrmm7tmYZEfeSDzbQTwPQWsX1vi18PvCzbqDH9Nthom8S5ku28QSb4cSGTb5CngMTsc5r",
  "key19": "4FqC2WifScysgRQ441HY265U8KSzaGyVfgWVggT69uV8d83V2okFAaY4vCx7DkyBWFV61YYM2vGMLTuYRg5boKqu",
  "key20": "3HHfqrKXeaM9z5eXuqhXNmxiEa32HjFeoaCGTsWCB6Fn4z32bdX1vytfDYE2eopL15WeyfektPXz7Wkrw6CL6gQW",
  "key21": "5NXLrmhLHz9KfkLPnZRQYh1bJKx7kuCAk9wx4HHfC6jpPvCSMKfHSdNhEL4a2VHyMhqMqJTCGG3cgb5yG2t3Kpna",
  "key22": "2NKn952YeGmnBLw3HFseg1kS6yCZkSxKVnvHzJbJ8iJVNdbXFWyeRoLhXQRLmXfhYr6de8Y85BPex4pySdHwyioE",
  "key23": "456GeqGzHHYfmZyTGEMnNEFHKfWm6EP6e1giywYBKnZShVY7E5bCWZq3pi7d79qvqbpNp4cT5KUD1qWBd28tzNTS",
  "key24": "3K7zpW8S9pi6QLSZQtw6RjEa97tMXKnnKAig1jFbVLJne8LcXKK4TSWJ3imc9KF9reHGu5bbWRkr2JqiPasAFWKV",
  "key25": "3Du7vTVTa1jShzq86tyDRn8opp3R2MsnpPxfWxEo4q68srCoLvEWmdiHs6AnoC4VX5WteeLovvveVnsR3x99uBSE",
  "key26": "2ABgCqTYSEXi2khu2Nt8mQMPqDLBxniZKTa4JPWtryEj6eZCwBZpMLBVkCP697UeBDWEF9u3GThJ2rdZT2MiTRps",
  "key27": "615UrEc3L2FF52xBzZwEjK7h7zBC9L9TruMXR838nwHfaE5KaNs5tHd9HJonB45m54L4tnTp632U7dpe3Tw1Lx3p",
  "key28": "4Qwy2u1b4SDxgHZ6ujM1YZfsng1u1PLb8XPnvLSucuMBjbC3nN33xSLCvNGYB7KbwnfbZeZ8vzTEqjh4r6eNijSE",
  "key29": "441zhY2xmwXJ5w1CPMYzTKsr4sz3W3j4dzWGESJptLhmmkzNGUzThDnKJcgbtKeKmakhxgrKNLctvYaCrSD3yTZb",
  "key30": "2gihNq3HDj648Zdtcm5Gtt31xBhw67pcCNGcDmH4tRLy32Th1k3EnkWPdyP34oHSsHWnw7m4WSn9NYwxtmBv5o7B",
  "key31": "5wGaGD4hQFZJTsFaat8QqSYnfBrE5jAdxj7GBUW9aqNT3JPs1gSy1g9Vd8zn9ZjKSvbvCHUFu5bdLJDy9wJbE5FB",
  "key32": "5QFPuc4QQ8bzrC67xvgTaFA9uu2QgA4yrnyvMZCQX7yaH1hVvrjB8a1oxvbVpw36QMKvHqLF3NJJtzcxUUdttzXT",
  "key33": "2egab5mpoUMFNstPEKAu1QSK2saTUuUdYzedanHywr8K4Yz4nCs5bznkQRFpuYshAw1Xmd3sTLfA7P2iXit1mtC1",
  "key34": "39SDFwKDJqNk9jDkfoWBXssJPq42vaBSkz9Mc3DdA3ULi2svaq7fUQbMomuV8yJshbREacSoVJ27r7dWogqje4iP",
  "key35": "NsvVzJ7VMfE4K2vxNVnpCabXU5bnebEsgMBpqpKQiwGhsP8keop7tk81fmVft3dR9LPdruYTBUJke5LiB14Gj5F",
  "key36": "4zdNJnJQ7QZHfBAiXK1v7U1Kn3z94dCUDgqLLbiwar2udsxL1JnwLNhLkT73uRFq9ucMawWkfGstT89byDV9yQPy",
  "key37": "3UVauBZiobAF239KXVHjMBWUwYyAiZ36DbwmTn7xDFCVJHMEj76ZHnfePVN4V2odGbf9nkMNLWN8pwU2avn3Yusf",
  "key38": "hNqWUJppSazXrWrtfVU71219zZrg3ZEdaUoybaNnb9wzU6fyWjUSddGzigHLEcukSM1u8rZLmgKbFzbm9tQjzXj",
  "key39": "tzuibFWtvVwt9Sryp1p9WNSs1mBZBZp2S2ebS6vPJiK4SxNyynPbL4cMiRSyo9NYBa9taS1Yk43VbiqnwRynK2s",
  "key40": "iwKxst9UnHuMk34EG44uDhLcdAMiLAKGkPPZKeJnfSdcseoZtK2omjJJaSz6vVsEZcbG7qYF1de8Hj6ssaQVrby",
  "key41": "3Kgk938WTuoZYKeS4dKFLUBDAHKm4ptuehW2ySsWrcKtQP3mnXmvVdUCGXbM49Un5ANgtLNb9Gw12KhmNnL36PuD",
  "key42": "4e8VCMgSuiVWFDqUtgp8wpCisipom8zTDCLs2rTTWiHJHgHmmCuEbMmmDg9dUHq2gqFNH5EjVoJiH6c52RLkr2PU",
  "key43": "25pLj1SNvxGb7MjrBiEisYHPcPQKKf27PJQrq926BTp95wosG54FqCfw8vMz9qwhswpMFY8fBYCQbgvKhBFFivMJ",
  "key44": "3ijqu9wLwYtpsyVLQsMSEHZues6v34GoeZA1Cciv8pYrJWkkYPwzPjzS6ZMuvkPxm6wXdPPn442Vv5UKQk5qpAxx",
  "key45": "2fxb9ACKXz41gM7yVuJucpvbNZTComzocA5ushtkSAf1645c6KZ3XcAUqaB2eywnWEzjZ4KvJ4SV3aER1gs33XLb",
  "key46": "5Gyip3zwVUGu1gFwiQUFwNxdDscVrjex8U89nGtNWbof68SGX9A7Ji2xFsVFNgVb9UhmhnzVh7FAMgvcrqX8u4AQ"
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
