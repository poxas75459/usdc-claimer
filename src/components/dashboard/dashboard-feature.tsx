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
    "2pSDxEdqutca663HVnrmK46ZRaRhHJ1Zbv9zwZDtmPbcKN5NY7azsjDNjAEuvJTyaV3Yg2rXUK2fJMjdcTJ53XAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yQLeHtQ5qM7PWMroYQ76DDkezBDheLeaGUrqgXN73rgnPy92KCmEko1pURcEdUUZNb5MfTnVq9KBMvbtvb9W5No",
  "key1": "4hMQNNky1sDho76tT5CkwK7VBYmVR9M3Mbd7dvezs65fFR7tAnYD6NgzNPu5zytxbpuRb56WTAamVJ1qyVcQm9qi",
  "key2": "NeUAxYwey3J4PLXEC4yPNFvFCF9oxjrXi8c1623w4ysfxwqwJAXrzRj687NK7SbGAA1FftEZvYo6oRX67sYjcc1",
  "key3": "2CeVyx4segJKPoWkzom9XcVZjk8QigAM7sroN9Y4rAph7eY5skAhSNw7btKfNuFJCgJhNUdzEs4ZC2TyEApJCMfv",
  "key4": "5HUWvHXeYkdxHgofYieswUEUCDiy1UoRgFCrzYbhw6oooQP3nEpKF1BDs3EVgzNEx7FjWdmhkKy6vMCSi8VDCeZK",
  "key5": "5x1CS9jzkCX4JCmozt3GL6uyKX88hs5unMDaWHDsUntKzo8L6kv6Q3yiFByWuzgUsYrqczUigAYeeBk97VbmfNZj",
  "key6": "HHcwQaLQfXWVEHMh5s8oJbG8AJpVe2YJDAwD8mzN2uW276uKuxnx2dc5FNZJsTUc9mXFcdYV627szHKfyuB47PS",
  "key7": "3L1qjseN1TtjHVJKJp1Rec4Kbir2WRsQc9xuUrqvofqMgdihFLLWjWHV2fYuQYK8HXWtxdJMUN5746vRcivrA7d3",
  "key8": "Ldztk3FgdPDZDvZaG82VoGnHpAFRqW7Wb12TP3Mj8gZwnrBBjcLph27wU27cu8P32o9CvFmy5e2Cc4tK1JEzxTv",
  "key9": "3TVz7vzE98EF7s3ggDubZmZ8W172gVyBSXkUWekewXEB1HC5T6UmQLwPk8cdggMYJG5qTP52PUkxbkSAYFTCpa7A",
  "key10": "4rSNSBrXy1ybq1pQMQCNDao4RJCfpbpzSMBnmr7J2Zg5SpJt7yGYMhohwEXYBiiuFBqMHhhHhEbv2EtAqnkhybug",
  "key11": "3MGMtAnV1pPs88kycD6FgixGm2nyNiaKhaudcTnCH9VNQcAngAWy7A3X5efnSLwZM9NP6NFB5yanPTiaE69UEyw1",
  "key12": "35sTPMFX11MCGKDBiWCkhURGLheZ97vc5bFqdQCGCEReeqzcmrUuF9VxpEovYKk5rCsia1ZHSjWBwBUyczzBqTU1",
  "key13": "3zDh3nkDncxDFyFyCLQV47B4EEQcfsUYEGzWCv5bkkBScg6oX8Qg3wMtJFviBh8ftUcZoWZsQXtwXgEat5w9Mcih",
  "key14": "3fRy394yfVfax3zm8KxMwjozYfgJFe37aQhpQnbH3wfvzdLyQsXTnXZa6tbKCVfjspsrkQWSDYHW3UWv1vPkzJ5X",
  "key15": "2eb7Cej8homXErtTbRsuez54dWNsffUEa6PwMskkJdTEuzoQxoivAwHstakZDboZQNoxw5FzJiv456SAAu8Kj6Kp",
  "key16": "31JetCtQHoJCndDpqG9pDQGmqcRxtpquRSuMRfuEtDn6EeVjrTnTik5SpmiSwpCoL85PtuyiepcGKunUvvkkB2Zg",
  "key17": "4omN7Sx4HG6dLqcWLtcHCfKqm3bsZqovE6wxbFz7mZBEhd5idSZK6iowmSWrwPYRHLCJcah3QRNL753tPqqdhio",
  "key18": "4ZpDTcxW1zcCihd2qGddjYsE2Q7CcsdoZiT2tmVHmUD8NjCceJKc3p9xzmkunsA928ZtME5UYE6TpBHtNZ9y8vDm",
  "key19": "4NkgRVy2gjsjj9548gfH1r6CNFb3jjN8upsgwPJmmobfvrS49rhdELhRL6b7JkboNRTPFVU2y4JL86sGgLyfzcY",
  "key20": "fm2y25yaEn9ApexPvoty6NqNkLnC69ChZte5z9hGZXrAx76M8kiMcmUfHQ3T7EG41S4MTy6eqDctcNtPqd27vMp",
  "key21": "54SfrM9WXJtz2kvC7YrvLVoUtaLZPNN4nk2gbPVziqkm47jUy1i87hP1wYkj9SzTo6QbHtgDBtU3gHP3R1XQP6gZ",
  "key22": "5cBUXtP7FiTZbMs3d4gPu3UPW82u1vjuaccKkN78Wso2HmBw8AjZL1NJawfjXHrhHB2mCxQm8AyVRXgSxnWUWnCk",
  "key23": "46GppmS69st3FEBSWZ319KV3gKmkbfLxWTLGyFzTkgKTLBQmZi5faAznsXkJ7Zn4SLoEgbJeKSXStdRBfteY7tHm",
  "key24": "4BdeYtY1fcjM4Y99PR2NrjpHKCWUEkADpWz5bCxN9UwKRG96rBMtuB2JSc2PxxcMzeAbF8fveMETBY2oSNJZgh5n",
  "key25": "49yCAdzBG27hPkvyDcLWog5YDVM6BqpBs9qJWx8QGiRnoSzCQ1kdkHPQipnmhcaKJAHooTCoi5ofc1XyooeE5u2V",
  "key26": "5gCG5iZWLuKFiua5ZX5yoG7enGmb8Bkai87rU8HHe6VsjvX5kgLsRgoy5mkTuXDQoCV1VwjQrgyvTJEF53PqiLre",
  "key27": "2B7srwsg9krUL2feJSb9SAWbCP6mayFQE55D6ftJ4y8VWZYyHJVL76Njox7pNbWCJPgXc9SmcL4mUnYB4V1RXbdQ",
  "key28": "2mqPihFTpGmQxNwdguekEVK1pXa97vSc4XTEDmoqQQpTGA61uM4xVBVjhCGagQEgqMa5phVs28cTXqCtQPDxWdk2",
  "key29": "KyhgmMeGi1S9tbB2X1iZbQPk4RjVQYdrn1DcDVoDfXSo3zfxXDD2MLakZGhitZVHfxX36rz5roDfBT2S66RePVx",
  "key30": "4vUm9eJ4Drc3gsmfeyVXQyMNan1dMvz1EkxD6o68dKs8BnDc32P39Cc95tCMfv8HZuoMhHwwyRw23kfYyTexNmeK",
  "key31": "FFmUmAZQhJD7aQrRNr1t758nGueWKBHKhpKnFeiEbqDRudGXv1Rvz6RweBrvNVtuZfprHKGh9HcM25k5VBoXAkt",
  "key32": "5RMUgtjWVhSeobvBM78rNxQFywiFvt2nRvVm75omG9kL6G3hWK18M152m6weSKqb3YwfWpHEvNQULMuUrFMnyoQk",
  "key33": "4QDfRns3SVySVxxg6uue5azN7FnDXXKtp5qMZgBt8NEMNixU4CRfBurdFtH4AHsb4mxbwBQPgEBQgfcnfy1MH2Lm",
  "key34": "55pfDf4ETavc2SU8zs4XFoUW3v9BSeYrnXkLKHhRrLAfvYkDP7G8QawEqWaqBL8pEqHhvAfLVJXU1f16CWm8f137",
  "key35": "4VbKyo3Yduz1FBWczSABKuvZ4KM4XWPPme8X74iR5bH7Y7SZzXMbdimY9mnu4cTDvRWTa7MJPdKrpBfwAYKe3Kz5",
  "key36": "5aojTEfRFLTtWWaLxBrF5Q16Sh3np7LbCYaP2PtrAaVkVTSpK2fcnG1iZSj66hu1ceVUwy7a3x5W9dKDDzqRDire",
  "key37": "3uVhMfr8S7YBkvT5PptiQpTT5PTBLq6sUrtvLs2AnQGwMh1tzzQNG5v23KuxMEwkivfwah27svsy9FMajQaT9fjo",
  "key38": "6tprpjSb8MampadYgqS1oh3Vhsn1sxs8PqczjKK8iUbRosxvCkgiGABPdTJTtaY4Ki8BAtUWDvjEsi9BDieGt7V",
  "key39": "2au1QuX7pkmFLLtNQwDv3uiLFYYLKfRSP9iXCx5J4xXuXPcYkqhHctK6pJbS8XrhXK2rTzbnsPitbmhWYn4JEqrL"
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
