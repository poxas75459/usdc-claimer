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
    "2vKjRoueoCtxpJPrWRDa6BfoUHMtrG2S1VNkwPESWsYzfvR4Rx3i5EQa9ReKdcuwStfJwob7p7BE6uJY76X5cQ7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L1CPz2mgZnjhFWB7dhPEXJnNNruPfVWUpDdwt14Wp2MHkY81H9aS3RmevxjX1KGUbzEAWBeXtvt2nKnfCAr92g8",
  "key1": "mevkQKXbNTqLnftV9ZypRrT5fUiyzMwhBmg9r9TYCc3iB6ZaE9hEuJXdgoD4xU1vvNLygwRWFLvr6mcbyhsg5Yh",
  "key2": "5Ezik1GPUBUexa5GwyxaLcaYmAjkE9qtCdsK5LQVYpPhRnYZhLutnL7SbfGvrMuPGvXHK3yZuqaZ6X5Vtbu2ruGi",
  "key3": "HT2EkGdYrQBW2LWrnvruzdyYPGrsgySjxQ58mYEsNepPQaSvPUtQxZ3k1YEyMkT8ekbdpkf4rS2E7KjnSTTjGHv",
  "key4": "5m7yrGf2e5HHdHXR9zG8hZW18vD9nFkhzkp689V2RcxceSNWf1Di3bzivSYHhs5iK5cKACA9JVxvvwPdh5YQmVTh",
  "key5": "3bZdfKD1Ag4kbTtpgNFAM2iqLik3RVhPKu9gxvtGeHCqoMYGqKxgcEXS188ZvcJveV54BVdXbt8XvC9okADGwnfa",
  "key6": "37FM4RirChCFmg89632ZEXyPJsUSfLBWB2h2Nuh4cuybjPqeKBHZv4deZGetLU1xuy3SgbG3tPdR3bWW9h1JJSmE",
  "key7": "QUnyz5toAKFx1K5jK7g9ctBBxHHU6atF7EcyCeoDFNTjmur67uKwj9j8oToQ9hh8YkxeCwxmfDNvd8Fws3b45rB",
  "key8": "2zLZcLRYMsc6QtWFeCdGvTLZ3xMsSvAQ1WYEyETrHUeBmqvzR2g7NVC1Rqf6GCX9hfuqzPzs9qVN3X5ePfoDCgNy",
  "key9": "3NRdR1SpZ4qU5JCL43jLC824cZNLj3TgqdHiyDcvMS5BrmJgQoyAbWMJaK1jd8bLtuN2RV1kW3u55Ez8EFfswTAZ",
  "key10": "3T1HyUUjV5XMHiJzxhB6D5jRbZJmhNR4cLpuaDjuij2prf2B5xLW1uR2HNTwVnV4ocJdSDEWDVzCXVDMhsR85UKV",
  "key11": "3NCRHbeNZ3Z4J25qPQSfBVsxgDmipKvWL17yWrr5R2wVtbbG2UjMACJ4d5CxphxnkV7D4x9F3cRve8hWQZDNrjo1",
  "key12": "2jAs6cZK6NGt77aiZ71ySoZHws2oEj66s3FycMH7KkQauT6R3pmmR6mDYpPJHoKDxHBHseizBqCQ7NKpR9WozYCs",
  "key13": "ngzVatDLJxgwkpHvNrvhy8i6wcp1JwB9LktDNzRoghLqehyiDWySDBU2CSwdSv3Zb7wAZPtVjPzd5LaytsNj26Y",
  "key14": "5MB9TkESjn4gNGS7gEZJxHG4qe9QGz4HPTHNGHKNt4bQzfw71yed9UHp7b2FXSNcoceszdqVEmFvVMp4wLfH3TAS",
  "key15": "4V573KjUvSqJ2AxkPEq5KZJCRfX8ACNymKgJDKvGhKHKUDZ1SfmcZyYaRtqHZRgRbM52q6zNmMumU6v6bN2ts4Y6",
  "key16": "KAt3MoMeudo57ZFMw8Jer6jtkFn6PBMQmH9hREsH31GhgQ4ASnmsKshLycBaNMwRGuS4QpiwPmFG3VkTJavhV5F",
  "key17": "4gGiVy7waERRk31xAfhxu34cQiUBYunvg19uTzpmXXo335Z4Ru9WMYrQrVGSxJc9SgEWfJxxkMeFvC2GUugKYrYc",
  "key18": "RVzijkqjAUf4vyyVeVNg9gFM3X4wXoZKbycpESBVMcjSte1pB82knzfPTrcrT5ey2t3Q71RWNAysBMjRMhcbijF",
  "key19": "5vbt5giUZ7yRYcYgNyikBRHdx92cu3dWzruUNsfRXzKhbE7v3aNsoFMTYsBWnNzsnpNZbLuh2sisPRKynZZk4mit",
  "key20": "36jETdKHRXbjFQQXfYopjw5YQFhVTnZAHXAqbyRyaBE1KmzJwkTMrujkK6b3PXBkvjC82SRpjEwmZVofCBfbxFf4",
  "key21": "2mqFign8jKMPKrf67rzizQ5o5x52ojoFGektqKRWJfJJusDXzS1i4jt6bM7r5sxyVN7CQMFGQqp252VH4jq17LXe",
  "key22": "67GbnSudwyznYZkwGyJPEpyBczy32gL1GPfdSFEimuUghn4LNdkVaxoDvvuV2RaXFDmqRxxAtokqcUi2wLEznMpT",
  "key23": "cmDtMv2PGmPGsqkVTkcPtRvmEtNiHJrVY3aE4eDS3hxXCkExBZV71FUMmqDPXv5o4G2ahNtqZJzeV24iWP3SA1P",
  "key24": "3hacoXmWzXw2HH2DxovUQcfizmYJMjUx8Jy7seHk5f1bGrpNFi1S47y4KKZh8ZQnW6maZbhnR3RwDrKqWxaYZNiC",
  "key25": "VxVjKM3dRL45q3AWhk56DmJLyDhVLwFNBaroM3RyaDjSom1B2tka7EyWyZC8gjo5fp1CmZkVgP72Hc6bNYvpHXo",
  "key26": "4Dba6dvJGspguhARCwPxfxomYyUQttD8wUmptNAFG6QWquc2e5yQCh9hFnm2LAxxLe84bf94mLAMrxVmqoABaEvX",
  "key27": "3HKsCvkLMrkhcEboQ9hBGTbA3dLu5oG34f6FLMPnX7iUCjkcuZ7VPHGeVy61LVNzCDFVRtsJzAkfXconW7D1yRik",
  "key28": "3qrEA1PTeQBJD3rXN7KA16EWrGMYZK75pVft3EbezNWNHp45D5qdkGupkQfQoeLsN4xSmy61voBsLT7Fvnn9XUMk",
  "key29": "4gtYtNmnUJSJE6zC8ixwePUi7QFc9Zy1Z5qiNWuWoMBapD4aupGviV9q2aSsyygupKwPSGJE7jQBwqZs2xoJTutJ",
  "key30": "3GNsSjeUWUuwU3SGqhnFui7tLdcAjM164gBLjYEZui84BDJw8B4qAuJbHR9oBVusvfvpxz1P3k3v7P3vM9Z1ZwW5",
  "key31": "3Qxw9niQubt6L2ShAPdCRZp5Li9aaGwMFkrPJECwTzjV2heX9MC3uHNY9A8wk323NxuHqsDrSp5QkuQ9CC5xfKdu",
  "key32": "T2U5Kf9HpBbihXSx8JJpkF8eN2QGjxYicTVssNC2T7NQrdRRs7pKy6YzQBAKXLzSQ1wX81QTbh8duFHaVjz5DkW",
  "key33": "2gBBkTapJGUGL3EQr3fQ8tppnvUVVG3t2DizLcz6zMoNLAgtdhFxW6LVhMEyeR4Ct6L6yEskHTip5mVdNqzmkoMT",
  "key34": "5bbjc7GZrs3vojWdtwhba9WsMLhQVJUPAHYFXMDWKJxDhzdEayKhiCgNhuY9Htfa5x9JTmVT6aNXzTGpNAawoHgf",
  "key35": "4xX92uhSiS2boN541TjbtKkaEv4eBXRmQP9jRggQMKMU6wmMyK6svtLJVKi73PPxMYJkR9zw1V5fwxyg1kWbFrfu",
  "key36": "hMd7pYg23F9eni53P1jWK7n92nFrdB2YQjiKJtL7xe2jKrXfLjBUMQqjor65zx5mng2L4hn6bB63xtmyKix2Phd",
  "key37": "5hZkbgezrM6Vam4EwdxSP3zt3V665gd4fqYxobT8RRA1Mnwx5bFphk3sdKqq1CgJdNm1oT1BxsBbqokhzeoCKCgu",
  "key38": "4cEYeCsETmHN3XpnZ35pyHF1rHCye96GCcKQRsk5W3SuqwV5htgaSt9rFbRwqfsNfW8Axn5FbFDgnn45qgSjVjwp",
  "key39": "4wkEjWMcuziYUJJ31UeJu7jw1uh7iYw5uSMPnNQXzY6SxRKK5znHcvWFt5iJ3uBCP37uqoHG2GDtmVtc8g9uZmL2",
  "key40": "5DHJ2p9NZcT2XPiVoAoKPoY4bZWYAzA1Cq8cfj9ddm6qDhKB36GXFHwnqz1ejukEkqE1vCk7Qj1smhhs8AEWe2HV",
  "key41": "4qVfAJTC8bTEwph4y9XdRzY4fLGDfLZLGMkapA2PqzhpTgabfcSrDQSCupCc7uTv2LEyHcPzLPhems4RTYUBNP8x",
  "key42": "2ojY5mG6qo4UNcmQi1vaSkyz7uTmoYwtYBDFaK6NsmwKBaVMQM9YswYmuhtPSNZ91YioSqopxnU7L45JBscjEFLa",
  "key43": "51k2jPBZ41iN6C9cVQdrLoVJgYPMbDBgsQRJc84Xv25qt7zQweqp7tdxNanqfV1412idSbdvBDnD25xN3rn2ge1v",
  "key44": "5MupzHbUTNTZhoA9pA675mmKaEx1tLbDRWk8nFb9H9X4DUXQGVH5SpsKWqpxQdCFr1xt5BnXUtySqcp79j3Ndkw7",
  "key45": "2JKvmV4a8MpZ3EpWVgu2uZ9JBga8zhHTQQm3MTSujcfCDePrvfW8aeyWmPC9vtza1qxuGPp8bYAV84KKMgY5pu5y",
  "key46": "3jLssam4way9XTxjvf4SxdGBtHRQMLNn6Yq7ZcErZv1r1PLfr8w21D1vDupZtgvPdYLLg3bZtM95tnHry7a7gjjj",
  "key47": "2TPsH59AVJgeYXRjuS9vVGyCg5of1QPSYhxDfmaWabDqs4GxMyynjBjtcJSWqzauJEVQagbRuvynoQNxk68XywDf"
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
