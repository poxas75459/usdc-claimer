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
    "2YH9926R28WdMASf4og4yNu1C9YBDLyfFeCeJXcZJwtK9eRsgtFvvNfRSchvMTzU1yNNWBJz8bXBc7WV8DjrZFBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "269Gbo3dSUPSTZhGczfSYz5sMbrt1RThTksVwXYiVm6W2jYRvG9ESRnL4KAngTjbnSVAqUuYdZsKrSMS1nrZzvyZ",
  "key1": "5qPuD4FpDWwLtW6yLsJ1UCJpoEpb3Q9KaaGJWDguBZDK36Q8369M9CtKYYmDpZ3EN6ERYcXXdU2BdYSejR7E91VF",
  "key2": "4zKUPEyhE6XhJexK67z8oKmPhV9wCsX3dMSYhf3JdJvuxe8gNQy1gt544G3fpV8cBmWdxjEj3vFxgTqHGMMsBoiD",
  "key3": "3kxWAvP8Hq92qnjgZA6dm8nJq7p8odo6T3nxWtMmvzqdM7NC62HYbQQM796NbEnd87YThZKMDhUrTrXpC4rRiutx",
  "key4": "4CsDcushytU3DPbzTFHK5yto3qyKd9dviaQAGnxjBbHKEM5XJCMZx6748tVtB48DAVS5QvLNBXkNaULf53f5C7MS",
  "key5": "VuVNabmgAu2oXGYUoR7Faa5bsgv52EQBnco2sEmMsNmVDfkwZJGsUrk7JrE6iW2bnq4mYGsALZ6uNwNxkwcnkzv",
  "key6": "663Sdeyd6KKySM9ZUzUJC3WMwkd7sgMR94UzPQcWTe5MHKERurKHGipb1G9TenCp1SgphBVCLNWMN3MR9pfKPCoA",
  "key7": "vQFhMfyBPWdfTJi5tfmZU7zYjp5bWGjfrccMGhArWaoVoh6wYCEK9h4FKnf1SGMvUkUqnCdrXo1ja4VBTp71MWW",
  "key8": "3DA41kJy57G5CcWMcXnXXGxtwxo5Nf2phga59UVYWxXvvHMvMEvbBw7iqaM26RUmoEGM5MwtpsBMQRhrR9qnQhY8",
  "key9": "3FokkoGF7UamXwyG939Aj2JAm8focwgp3Ce1f2rAerVDKhrEbfJUZZGUoX91uFE8UoAkG9vZyhHvUC68JESi6wia",
  "key10": "3t1qttFNMHQjAyhJMtSHinCxVnx2ouWkMhNUJmdYy7roejU5vyXWdRMQ1uHvg5Sc14ryz9qgkKgwj43YUEvoWjPp",
  "key11": "4g5Cha2vDDZjPDTW3cuUttydeLm7ZHGUZFxQ7EWo6Unrv5u7PixeCs3YCxjnpJVwMyQBLtCdhM2BRn5GtKBjcJAa",
  "key12": "2cc96NmenaJ3cKrGEFrZo2bj4vDrFDFgPcYfECBjAYVXKQio5wTsuVLMQHEEQJTyXwRHhEGL5Kxebtp8zMS2n3rv",
  "key13": "3P6NyRDSAYSvBAqP7yeJWvWP4zgV4Ubi5KiJhfA1CDjiJKhs6MVAScBAd6EEkRK12LtWinMCe1PtMGXh1cbsxR43",
  "key14": "4VuHZYjzhTxbQ77oTmsqHgSB4JaF9XXAGMKoBtGaYzQCY44UnKvrT77K8KfFtdkFkFNTrtB5jWwuwxDM9W4QNq3i",
  "key15": "4nR4JdxH7Musip1XvLQEkrnbYfa3z63Q2WxA2QfXGEDjb53EzFho2puUCUL3NjJDAHbBREKEZHejBe2WGstMJVZ",
  "key16": "5PnCx7q6XQzMFAVvgi5HHNqpoHH9XicJgtUqdWxg9mXaBBzyjgzPRXv6AzYd9fgC2D94umk32pJeKa7pLpeQJdZ",
  "key17": "EVNLpzxSWvriJmRXeHD4u7nZ9fu4m3XC6ysNBXzSgYVuh9k8zDweYAG1PMwne6ftc1MnhJpUhkwbqq2RHwzSMwQ",
  "key18": "qZx3fQCr6oKMyTYNEdVW53CczmgokWsotUh97DvjWcDaaY8GPZyhj5xLqa1GwEKGu1gPBmFiiVQNrtfYW2bh1q8",
  "key19": "3dvk7GqLjuErVPytai4iu9hZncCa8HALAga29BT7doLjSHY5ne9o5c2xB7Drhmo4vRcgZxTEXsELEPubCTrRX5DL",
  "key20": "3Atp9ZS4NBxRyn5iSqdn9wukiPUzyZzBEsj3qdkWW2wV5b9K493TpYaAp2f7wFSbNsuZ6EboM1FbFUduC1ixnnHa",
  "key21": "3oNtsajFhSExDtDQjoUcY8PotZUzEejeSgxLfKU3tch6m1oEs5J4uKqfMDpxYDG4etj6evNdJVnUEvktCgGwGfWK",
  "key22": "3xB95tKNqJmk8LpRboFnTYr2sSHBBFk1EkmgPhxNVQv8cKW8b2GVSE5YS8uVpoiymsYrS5jdtadQFymPb7NdN13c",
  "key23": "FPjcyDfBUJicDhMS1zzgMNo9FED3h2DmHUeWhkrodA5gMft3RxpRM7J3gEQLqmDGUxpPY9qrwQexseHStpXCdzX",
  "key24": "4fh5qRt4PDj3Kcbk7rFXCD1pgWQp5ecgbT4spUDWCS67ckguXcuxVUJeopwuctKS84iCVbs8trYsToHnjFUHLcG8",
  "key25": "3XUZHsXgmPx6C1bZKtvVpSg7xK7KecSRc7NLCQp4LUgnDf2fu1bhLqHoFnWeGb2wKRcEzwbY8wGpZomuhh9qTCgP",
  "key26": "4tHNdgWxQUJurA4RpDMaDvCwYimMZ1qwm8ftCzLdQzriWHD1sA2okJ6rDvqUhG7sAEdXeZrH1DRgcQ1VjTN7z52Q",
  "key27": "32EH4AZp37po4FiVNN4d8E7Y3Dv3MCy5PwB8pQ44fgkfDSj6gfC5t7WbX5tpDFAie76FaEwE18WW9FYjByVG8WxG",
  "key28": "2uyBUy4WVwUgpDt8ifyGYnemHfKYqRESK5RNf1SPUg1AqeJWcox2WNiBUAWfWT3HedZbGjUS7yvYZm1sMVRsW6A3",
  "key29": "5bb5mbE2aWnhgLeo9wywKuUDki3wF2LDzvRCARBnVjT4XmqbRnFxLjqUdstW6iHA8oVpvNN1SfwxXRFEf4TNDVLZ",
  "key30": "554wReKLukQM32f1d1a3BfB6nCapf5Jr6CPSkMa7gd9JZ8MNMFXkVmMaVYvu6sWXR8Kv2Yp8hLgRcTstorBNUkty",
  "key31": "5zua7QxTAXYXdNoz3fGpFdfKAHtZ7rYq8Lpt4uKeZ6xJvTe74Uthjm15e3Hk6BvR5wxFnYzbzaL3zB2WwSWuDJmu",
  "key32": "3YjZojXowJYuEFZ99GhmQfmPAAxbL3gdpNG7CXFAz728UX2674LkQkT6RxnVnmp4xYBVpBHwZ9NZnGeFbEHZdpSf",
  "key33": "44TYtPVpdMgvpWg1vf8J4MBSG81QexqtWXF7aB6WpdmpsMKHY5QDBUvSEAriKYbKJwoJKEKPkheMA8dZpYzT1U3v",
  "key34": "4zrjvDAGHZZ5zwPT92QHeRz3tphX9MJq4hQy7ydoGP9VXVpzwhe57Wpdt167HNyaVsXEBp54c5afuemb1724aCPb",
  "key35": "28NwzJpKR6X9b1dcuDi1Yxw6Cg5CsWAySkQvbpEffc2JkBsWadpFUq6nnqF3kxnoCtbiRUTi7Nkf5Li9i4jTfBUU",
  "key36": "5wgvjWfyvq6sk35s1FctTApfQAr5h2Et3DafoZRnc7QU2qFWXKr1hMPwbkX171px4kcu3QWFvzk84w6a91583wMa",
  "key37": "5jsKw4Stdp5MAnHa9XnpSJJdhQQAbeUff8g8D1ZwzFNn1PFZaHFPSdxR2ij5WAbykF2ZDj9qnM8nBLNLHpz8ichr",
  "key38": "5PobQhdW4pdmhbk7knYL8YymM7xrttyJFkzaqGbckThZuaYTLT1XyjwgiorPUUbHnACR6F9LZYKDgT4v8gS5A3iQ",
  "key39": "uM9dMFwM7xQ7MQoSENswse7v68NwmN8Qc6ACTng9hZcVLxAZas8AfrPzUrviNBCEzYWnwJvsYJdme3CGyyFqTFM",
  "key40": "26uwxT43Z9oyMeAsv8j4uUFdvtSkD9wzHw6QotAHZZFtEhkvQjbUwp8c6CLhJpaikoRpjTg1v6WbjveuUoef6Zta",
  "key41": "5VVHqcJuLX8UuNnDeY3jdLMYi9KCxFNXG4LBjpgmTPsghto33xVKrvESniKt1MtJYc2ctfrtAWY74VFLh2fW35do",
  "key42": "5mKPCsJCdZ4SeeibR7QFPkDDJWwoPofdJ12eRir8Ly3DAYtYWxe46H2XbgGw6bK7125EnudMa1o31mWQntpaGSAE",
  "key43": "R56A46kbWFeY54YkfQP8p1sULRX8NwTgRc7voRRYppMvyzUPyCDZ3s6ap7wGq8ibw83sbEkpoUniy1NPzWX4bon",
  "key44": "3JqWJLiBqSBtfkc8MSgorcHVKCwxgwX9KSK4T2KxByheRFoGQNTNCY7H3QZUvoUGpEdcaU36ZndmvnkZ8ocTFZUX"
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
