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
    "2GyTac6nHmq1MYNyBryEmjx6C8yVtW83YR6QyJm9UfJZuRUVsx4cvVJL8TWTJyv1xNDQ4EMG4JGqdKNQracnPBMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2giTdwE8m4k73W2NVKvuuKXXxmfGAQuDanMGhR1jr6EqtrVCx3phkeqAFdCtLrdYoyWfgiGVkaTtaRbeQg51Lkg1",
  "key1": "5nRTvLXbuE9Dyd3kHwPQZpu2hof4youNbjrrRpWLtNUgL36TzkWD8qnyADPuuxCCyRPGZF4iiDZirrGwSyDv2atq",
  "key2": "WoCJR2B5bH3sSZ3ZWJWy82NKZVzPt8wVQD8MziyuVJvaCmMer96pNhuvciYp1KjxhW5FpbthXrL9g8qTYCXHyM4",
  "key3": "3bErz6jhw663n3hek4ezp1dbD2Gz1ztc4uUHCWyNWiswEVwK8utumXDDptvZwXBohMW8Dap2hTGKniJsrnQ8ErBS",
  "key4": "3WqtMN1adrJbzHZwY2gMVEGskKZefEGee6F3reFggdu968chDrQ7MeD3iZzjwFV5PijDopBsXMqAugqutmXqnGwz",
  "key5": "2DWtuU6nWQeKp5ibNWu793VXCuUPpJcKTgwRa6jEWjEB4dSWEJccPWpEBjUHKBgUXxrY9T4c6EFHsZMBF7Xmdkgy",
  "key6": "ocLoGjFFKFjkcmK3Kh9WudDez7ZkD6jRRd5jPxy8wpzEmBWAnHxEgx3oJ31n1SSgJXQdYoWj8xLVyPL2DxzMPM1",
  "key7": "2T8nsgbGqwtNnHyn67skNacTAun9qmkUu9WhNUnRY72YGQHdTWWGV4Fqyhb5RnXNYga1qQ1NWQn6dBoGKTo1JgXg",
  "key8": "3dgV4osRXxhLLmq1YmFMAgFusnuisYDNKf3cwXWMe7m8kAgtzC7vAscbPNSH9dx2oYp3UtT2UHTFQ47uBy3ifQ2a",
  "key9": "5aVUgaqTNNob1mQTPuuAH5YmMtpsJFyo16QTgAuj6Xr2Woc4oZReLvgD17zYJUZHjTCGH26ywwic66dJrrmRNY92",
  "key10": "3XnQxRE4P5rxEM5HmoFN2ig5rY2mYac3pX2yANXCGYwQA4syBuyuBRofLFXV33Bv7NCyPyEeDpqf3gequDhG767U",
  "key11": "27xcmHvipGq3gxsYzXNP5zbciaa26oKsdwrs2sWBDbgjNjAV6r54rYaCTuALsZBPppB7RFcMJTguqH6sZ9L6QZQG",
  "key12": "4AvgyABbrqpP44dw8jWcNDoYn9DMLRKGKarSAy3vg9ZY14HFLv29iDtDcp6AyEcAtpLsZRXuNzqxxKWa8yzSuNYz",
  "key13": "3T66wxp3q9N1T98ygt3AYupNQ4vakYJi5KKuCcQSfXWHEq7smVNgzU1qDpgTy9NAZQubhgzkT7gK2oRURyPyBTwv",
  "key14": "35DGdNiuUimbQLQg7pAHfYAsP2hypUiHGwJrweudDCjD172pbES7fxPLCxZifGFpC1YYVzCDKXohiQ4poFwThc8F",
  "key15": "5GB8zVP6dsvt6kgRYidJSThFrng6vbVpiBQ5VY9pELHu71MVKgAxSdEoGVRVyaCXrC6YFVvgPebBreNagsr6PD6A",
  "key16": "2f4rEhWb7x7jDzysjM9u4wJAqtx6gPar5x6gyhWEZZnobSYU4fw4dNEQEL9g9uMHYU3GxYUT8MUWAkqX1E65dKa",
  "key17": "gugxFEzjQFwX3jDVijDAfNG4nttgHHDq5q1ff2J4t7TUgR54L7Pq4mELF8Z8RuhgcTCmQXvmd1jCtVrYb26aX9t",
  "key18": "2CdRPruho28ZhQ2USG9L1cD4W7zYCtNh1mhrFPNmYX7q6EcVchNGKMyWqr3qwFKsL1KPPEFwzwG9yBCZbcSQF4mb",
  "key19": "2uKU5VhiwXgCUPDEeoQRvmAL17Xvn2cPsVXHnz7BAHjz92deuaRDsd1st4earZCH3V3441DksF74k1HVM74JFJoe",
  "key20": "54cs5BzCbB2LTNn6UVruA1xegmTb15YzganEXh5mDE8G3Agm8Qe9zfaJTzFMkpu9M5ussArJn4e36br2eMgYs22Z",
  "key21": "4TRqf3bKSzmtzgTuw3Mreb5wzSEiSnM48XTK6qz798vK7rHju9wftVeu62pbkbfthhR25KrjRv9AQhEbeRGgTXiH",
  "key22": "3GfSH2vE7gxogWdo88xqjhWpq6UAHF2XWLRiaQqbw1969pDbWvnoYa8u1oD9sVm4EJur2SWPiFg7dgL1sr1fo2mm",
  "key23": "5GHDUNjzvja8xN8T49REpD38PC5bGfVp582J4cJSpnLuwZpASJMWhCjZTpn1WXSA15xTb2ufPD4UQTJCZVLAenH9",
  "key24": "2aYmNCU4fmYGGXcvuwE18tgWGGQv9eUiSAKwhzkJFwdkid6atgZsxrhDnU5v5wBqKgkWwYKVodiSuVZVHSwxVHa1",
  "key25": "4Mzpagk1EnrWpMNF8k3hUkh3Bs1eSTkd8CC3o2ZLTAmfSk52iAE7tdiLisHRxkQGB5zWQmLP91H2Kj8nvks1DrZS",
  "key26": "54fnWPfbuBB1wVL71Yu11vSP9DogfvikcbmLVqvxQSPWdCt1qL2KR6VWXYED7KMVB7CBD5PHiNJiqVdNvLswhu9U",
  "key27": "7vC3JQpDgpZv5AsympzcK3AP8jXesyA2GmyhxD1uLezVAbUjeRGo9kNCuTSfpTskkM9vPp3tVnakpJEaPiCZyc6",
  "key28": "2S14AFwpaCedNn94hnnWNQ9AMuzi1zT4WthY7wcLhMq19xQs88R89cWr8NZEHcRR1PrPYDEDnY83roy7REybAJ65",
  "key29": "ipumwNhRFRbfgZw7XLurwZnEyB5k4kyXaq4wXJEqxNpnqypHoLcRaqJzH7SW2cu7nbpy5XFTgTHnx2qnozHD28a",
  "key30": "bAvJF3jUFLMznZJ1gz9T8UofJUHFoBTu4BzpLWQrVN1DTbNqoQpaxYTsQYnte5VqghimHbYgqjNa3tqc8L5xHSp",
  "key31": "2YhC17jYjhLR5drAYzGGen9mkAEBkKjnhT1k3b9MahacL4eHQYwWskP77XtwHHLWhLJMzVzbctUQPsUyaKedEBW4",
  "key32": "5HDibabzXcUNDLEmijjZK7TR5cTBc4LXYhh4xYkpPKR9b2dMhmMoVEmg3dvKGCwgKr1botn5Wxy7sBRhKNUnCN2p",
  "key33": "2bg9rt8ce1hwCLcxEppgsbyZ4LrXhrHJULiZGDueq4xLsjEma4x5NjNEFpP9u97R3mJMpsRSWgWeMi6rJ5AAa2Wc",
  "key34": "21uVaaw7rhco9dccJonN7PnhpdpdZGpYpPFP2N45chwi3H1tXZ6137KApZVsg5paGBCaFNyTJBBa1CW6eRW1Zfuj",
  "key35": "FB7Uq1r38kyS8g1xpFCUkDB447GY1DNT7F8id8gAJ3krRezkAaHqVGtVDfb3kh4BD8jJ8vQT4VcSeMYfc56mpoY",
  "key36": "5hrVJKgDFt2iySaVV2J7iHJr6Vb3U6YUbiChsTFrCz6mLySPvRT65FYpnLVgUzkppDFEyW9UGWVDnVUiAqCrQPwt",
  "key37": "51qnjzib1otuS5juFtCEGYtbYp2GQpz8zrjsPBhh84N49isGs8AzXhjrPcCnbHUcbDV1Bv5ehRGYFfcxiqqwx7QY",
  "key38": "4RkVqsm5ymW2kJpobjF8o376bocE4N2WZxo43kJTx2BNMft3ueXP6QWH53RnbFcCzWEEhRXDR4avP5E4xqGC4P3V",
  "key39": "JrAfQcdeVMdbU3JJorpm3e4j2RXRhht2JU31EDeb5jCJNUnBEG1eQXKV37dkiaM6pAsBf7JZSniiEAj5adgMsqq",
  "key40": "4SwjxcdAbZV75BMHc22tdDYHNjJGG6M2JoZqB4UKD8Y3dLJAYhinKoVG8tVVd3Pv9amoijaAafsC6Y6qHj98rb42",
  "key41": "3HhBXoUFesjCTCjFimRahp1mfqgZDJPVbnDnwNw6tf5jq56ouwwXxFsUKd41syBkTNnUu5bfeF3vgEdeyDE8vzzc",
  "key42": "h9qPpxZQcrSobnrs7cMsNPa9Cf9v16QTq2SMD86pRZHzyyeQzmz6YW4xJWMmvr9UbewkJdjxwrxWZHK6tn9qesg",
  "key43": "ss6Gt4m7ZDiNgyjz9qF5DbXj5uiK6H2UMewg9eY9r62YXReaq2euaqeRH9zibGxZE3wckhehGc7aA4SAY2XGCyL",
  "key44": "4yjVpRdov4DGqgpiXV3dDDgQr8xpix359JvhBfEHfBnHbeajN5SSNFb4WRm3Ur64kdvk6ihnjPkfwrXBpjm7EUPT",
  "key45": "hNusjM3xQ1fwALQZ2UyWtvTHiXpGmhtK7JHwYRKpv3iU8GUpzDm4NsrWhcdb66LowyVmGJrFrgsYcBSKfnfvhdQ",
  "key46": "em5zSU3KMd1HngmPSZU2xDNHzv873xSkH6PzoAi8CbDeLa78jVpuHww2WpMSpqULtL8e6Jd9gqt4we1GmGY9oh7",
  "key47": "vcsqgiRDzUYriNHnN9it4gQvih63sfJy25iK32J7Po1TpJ5cZyQQdzkxVYn5iFJzzFQCyfpwWKthqKGhVrYwE2Q",
  "key48": "64bD43iWqjvRaAvNVKM2g6j3jYxYr1Eo33tsMnfHW5hxyrv7Wk3W9WWyt649ULjL8QfDKyfBUhmkX2VYHhTJhqDV",
  "key49": "57gy5ctiVmtRpKCA5PUvrfbteLAzFPJDCzRqWRfjDrMRcaopRdjpzbS7tE5XtAqLo1qCRsafNxLCCeADSz2j7zdt"
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
