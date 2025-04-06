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
    "ZQ9GsDxjax5n7v5cd8sPbtePnfEuFS38mMLhM8L5qrLq1LK68Kbb4VCVmYkhAcWpxHn8rF6c8WWN9KNeLi6Z4RV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3px6iYBKfpTPnqFq4L5UmGwLdVJ5gurcsapNvfbXA68a2VKWaBHNr3mczUD56SGYrrb6Ao5UqvudavWNb4WzpyaR",
  "key1": "xn8BkPrDXbPmuSVyRrBMkGSAL19zhbk8Vto5NPt6j1RT1KfiU64T4QfHiRw39LTDeyni77ta1ynAS5cZpn47fPQ",
  "key2": "5BSNgqa7qxq64kwhZhs9vdyecYNLu4iUBfhg84zcyb9LSECDpgRtUtv5yHfNRxDv1MfyEYhgciwgskSWRdTy7XHb",
  "key3": "8KgL9eDBxcngczWmWuLr6HiLfd4FSB9AWGqUdnBSG5NU2kwRygZsn3CyJP4ECrjLY5f99XY22yKTb17ywnLzDBh",
  "key4": "Pxtbn2VM6rX6Rf4TE19gpC9sGqt1howmaA3uC94PyGAEN4ZTDeJSZXvM4Fbr1tbcugDbi7JDfnYgCuX1rzLJs6A",
  "key5": "5oiZ5nRmguuteJvtfk8NJfJuJxyGX95ocQZSiRRtDihPUd3e4MHsVNiAigsJeNvEJaJ7wgNCf33ugJwcoRsSRMuU",
  "key6": "s3gP3z3gd5xpmrvv71QihUkNbXQ3CFhKoTvMmBXhAuc4oykYKVLuK5k1Lc3ZRBqEdW8jv3R1H7NY8mVFBsmdfhh",
  "key7": "4s85rTo9cncttQU3jTwKi53PQtbEYp458XKgrZC7FmX9nch8i86iiw6n17cRcrneWw7Y4mwLsdWtYEFFg3da4eAH",
  "key8": "2z34jYiQEDQ7j9FXk1rXmwgCh1mr4XRJuXV3oPAv5HPc23rcyTfJbVKzaqKqmJN9UqdFkcem5jbJfnAYX3G8hmQz",
  "key9": "5C37WYETrytrFYYJHjCD6Ub1U686S45oy6k5NaZos5nz3GVejSsjkrv8fiT9gEqFgKvSp1m4ozstftGpNaSjZchT",
  "key10": "2G5dr1x9pJsyWVvGhhff5aJpZPSLRwaeNMTCiCD75qDrXJobqhf4xMM3BbSaqLDqNgM8TyNG2s5GgDR2acdLYbgG",
  "key11": "4CGokzfSzK7ok7fMpahkurB2f82KbUyk2sVkVDqgQvRxSmfb11E8oJJ9SHLP2qSX3c744mQqjRdh5pV6dWfYgGKJ",
  "key12": "2b5gtFPxuqzSbssEx9V5DfiR2xPrfiSW6AiftkzQ2RvRgN6AUhVjJrcuPZZbqwT7Kj2qn1rp6MqvqbRZivvU6sP5",
  "key13": "4ptaNFej2n4zRkFTghxURxL5jK27ZE5xeRdfKKL9EtyHkfUnXn6yLBpxzBW1t4N2xXfv36WDVNoxBgoQEUFpp4MQ",
  "key14": "5VqUDQfwZhKsCJMrbbEnXgJotPajpqEmerZxbMPb5pwcnJHTRkRu8RWZYmHmmJKgAxEmL37DgAYD6JegCU7zDxQi",
  "key15": "67bJcv9BxyM7w3DhQKpmjRXApiJY2Q4dV8nLp1iAirUSMBzpwZyjkQUutQ5cmHLwaDKPvAEV178CzdbNmXpGPxqf",
  "key16": "2ZzFQpubpgkbcChoj4qmXzAQs3L3uWL6AX9UpJJNPcHjMHzw7y7rjcgPnW3eRins7v1MDfEphnX624aiyVfxK5M9",
  "key17": "5EcAu9upPFg597cmA2ezNujFjDpzHMMC8v9dAd2QLdcyBBLyDUBvQBD7RKwVVRXJ4ixJufcQGfcfsT8BsdWGUEjL",
  "key18": "5oihnXBU6Qc5opx5Wi3kRdAMjCQpkhcEBU2e4sQRJ7C3ZmSi27sHVpiDgpnFXA3siBtsPd4vXddXX4bMJ6Z9NaWi",
  "key19": "2crr4tXR4DKEoiQkfJdNTeESxYFw55q2a8d6UWPRK5rWryUYyAqMqicnGJdWFCTaNdyGdrdeqdj6gkJ3aC3uW5pX",
  "key20": "XTeZDM6G9yFconhJ7J2QnahutoiSn4nE1QG1Tv6qzFPKncNjPKY17qzTA1TGa3m7KJhF7sufm1t9VJSHbnwtLEi",
  "key21": "4dgkvgShhK6dgW46285N6cVgCBAD7fayTG6ZW5yxif2ew6GTWzRW7S9zcQLYWNydeV4XYaMJfJceoH4LbyAo8jvT",
  "key22": "vLpDDzsKWze7iscdtiXubgn5KFYGEGBZjNRkyd3sDG446U3zgtYSTj3khs8h2k4DHSaGbqWSpKE2FtveWi9aLEH",
  "key23": "4U1T7A5j9A6Cj6wyzDM99Qc8Ug129MRxttBjr8gnQPd1U4kxGfhbFgVZETDLcLjnaJZvqMCVLohCNPEq87MP84d6",
  "key24": "4dfVEbKaiPgpmGt5X3xh5y3Yv3nGo8KCMigtaSRLDPseKCQPcWang4dk4KRzBKND4hz1nf5GwSxS3fFNkqAhvDwh",
  "key25": "Zbbqb7ufS37y3Jx2PLFmTFGLxSfVvGDKTThpNaRjsuoCQ3tBey2Xz9cFcwxJiMPWDDpmGKHtuosXedVWyimwD3F",
  "key26": "35G5S7mynTMAYv6UbN9yAg5X5LzB3vEkxuzJ5zgcYNfmXqSuhaXd4TC7SNB2GHiBDZPuW1E8RL6Sy39HB11xBjZd",
  "key27": "61vQcJJv5T9JMaddwGrv5RhT9pWn2gMteBnXabWWxWjVvd8J3KBP8FiedTS5689pLG3LiSFiBw2PYjPzuHJZADsY",
  "key28": "2FK49nCFAGP56LMmsJqNqZ1PVDFzritg4aL9B3EKtxdJfwihKpEFnsYyxB9L3ErwrELBDRug2GTtj3g3JfDjeoA1",
  "key29": "656BAdfJM1MLUoSzh5L6XfzX7DCV6NjRQDgYrtx82WWXv5AigYS6bpKk3CmunahiRkuqfy7merycCvuyoVEAES1p",
  "key30": "5E528Y4guN2tGM6ZxhKfLE7B1Qb9QnNg18G7cwTTX1mYoQj2UsBULUNY6rrNobbAE4gUVH8svtiBLw9fizasZXNi",
  "key31": "D5SdaSgEN3VPGeEvPJLoKND4UqLhyQCgmwqJY4uWewJgcPxMPhnRZ4pHBXnNUbXWYDfug6yCQeQKBJoq71q5Ldm",
  "key32": "3G7ZGpUq4vvYmvydFnJGoP3tSsQQWr6L8BUu5mpQGXRKSApw3bLzAT3H9AwLTBNQGG5B2vvUn6oDMxziG8mgrvAm",
  "key33": "5Cp1hdyAt9kowqWTgoUy7qFG1KTjTToxnbpZ15fuZGhLMA283aRyVhfPkU6ZMNxJDCiMXzZfYcasNBaXZzyeMaa9",
  "key34": "43wptAtTTgT2pUz7CssHXgHDupa9GD1YpBxEvVW7hU54nrjcGxJmABoG6xN4vuLSwVafU8hJAxYExpvQVqqQwxrT",
  "key35": "3oxroWfCTqAaicwDncjKQ78MaL4fcnWEuufMTJ2q9szFwxmSfYpXKqm2nRrucny1wUdsFbnS18ByM651dW5GtFDP",
  "key36": "cYLVKN12aoPUgvHxWEhxnoxn4iH2emxfWkj33ZtvVscioE7fCa4Lck7z12zSpWpvNwrFKxjfQWmVQXqGWjEQuSB",
  "key37": "4Zufy23xdwntpRDNXdt8xsdmwDTWdaKs9MJPtHSFgwTURETDoh7Q2pGA4ooBLpjzDLoaqUnFDKsWaCYTrDowobuJ",
  "key38": "32ap8HJeD8xKxXxeWUTjEqiXMRa2C9fY12iGzRcyEG32eTMsApSUKKLsvHbfbQtCYG5VvRj6x7Jw9aYVKiTRwqRP",
  "key39": "3MLZRqPcAXWz6M4B3iT3MGSreiDoK1LgFegiGoi9f2Q9oCgq7vkwt9oFip5ypaCx7QX1ZsxzBGrReXsQuAhxyiuP",
  "key40": "259fNr7Q3LBkz2iYUSXAZfeALmhVWMKhRtqXv5LSM5KCKXQM7KCGy8rAoQgvZPCrbyprgNApxdQjAG1JdqbvCEwQ",
  "key41": "4mYKeWUq2741yVrBGGStS2Wa7M5xTUeBM3JKs77itUnXnemTvfAPi4qoooiFa6HHc7FrkQAewBJWeHC4nJy3unfy",
  "key42": "6hxZXEoxtXDeJohbLiJkTJ7mhR2YetNfqKwdrmuQB4J1D2ywUy41Tbks4fQreoCvZBHS2Sf16Zd5ijqUtoTmSAJ",
  "key43": "2qehGKkvv4YQqWCZUWHktUeVQ1naxK1A8bjMd6q1CNkpXKhS3AXypkgHc93YS2DockHWxYDws9c7ZXsu3UDtaJg4",
  "key44": "3K6s8f5Aabu8uAx6csFwkhPeAQZRSTs4gA2UmFVXTZNwuivH2iLk2ktbX1Y4YAEdckMXtbMWwdE1hvLVSdv8664A",
  "key45": "2xXL2wEzi5UaJKVRUtT33JhqVRWTKekLoyWscmMgziWa6jFV9QujkB78Vwgytuc69A7eLdEYvASN2YFsdojxWGwb",
  "key46": "Si1J5JUJTAJZTXa5MJ7Zik4ZxcxLUvdjhi6Yg6pYNgZswyeRPBTykAiKku3XUXKkehNfFKN8dN5WYhDFcwwWxwJ",
  "key47": "3skqogh3qq9SMGfJG5MbZdEtg27K9amT1NzEwWuNjCSy4CDDu9PuPb7LXHUEXMWSgFFnvqchPNU4j65C7VBuhabA",
  "key48": "4ju1gedkqNsimeU3V8Uy2jyckHs1DakptDT9ehA6dk6EEgJQcReStVmUuLwEdMoSfdxfxtLFcqLrdQUtQqd5bR1C",
  "key49": "4Y9StS4V7cF97XVtHt7TynAPHm4xb6gaJ65kWViLcHFwJpNHDfX4ShV9R7Huj8nNhirCoK3Dx71372b9VwUGwngG"
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
