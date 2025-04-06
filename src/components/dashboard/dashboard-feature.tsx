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
    "3A2VHEZJMUGGH12FTo23u2iRwzRX6PTVRKaJrVu7hNTAy2PJsD4FgVmaz5piTAjRiTo37TB9icpYy5URMraSXFT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sXSfHQfA9LTR4XVvE1hVwVRK5xTpybqUnK2TPoaMzyH7eVVNKPG5CC4UtwZwPnZcezBzypRgtN4DMEiRpzNXuBE",
  "key1": "239gNN1DbnBZed9gXg634LK5c6b91Ho4uNNDhCNZbdrMZ1AaKgAovSSX4sVwUY4FpgLb8ASN6aKuMNKQinkK72kh",
  "key2": "oSjb3udX3myubTXUmxtyTgG6eZqKCLRXU6Jnz9f8ZnhsFbprso6xuojciULpSdU9rGSYjPXUswwQEzHjuUo1QaW",
  "key3": "5neLFM8XyxDw9dViMYKXCGYEiTwtt4v15krZ4RTnBdarHHuNBG8XCuntXqd1u8q5YPYqiGkNTsUidt7ZfGPkabL2",
  "key4": "42T4aY4WwB7ztpodCZpyToteTWPNPDLbFBeenNzXFTtaJa89o7VQ9vcqGikQoNDnabvMSKTJYhUFGaC5RC7HhHbt",
  "key5": "3SvAaPWQKpa2EPkRh9pgbKxEgRZtzyg9yidXAcvxPbGoWYq1dWop8MgGGiFLFMpJ82k9QiyksoZfZYk8orVwtZKA",
  "key6": "4Hyk8s52bHmNoypddiC6rM3pazZEAzf4qyMmbYG2x8WaGrTtUsoZfMzb4frZCZp7Jdue4ZdAEYL95Y3PRJRCFx6K",
  "key7": "yPFaYEX1GoMKM9NQxaR67Zpbicb4YAd7kyVrzxzHKhoLDQHFguymt3dJ2AmJ4Hj68K5oCf3TdCTXbKuAy8UTsso",
  "key8": "3PN8tTPuq8Mf6upMaxSVA5p4aKBesFTDMgdnkudi4AViqva4Fv9DJ3Qd5KMsejdnPPmiqahzUuqpqj3eTRGWmiFo",
  "key9": "55Yvnc6d8xjdvs4ZyhMS5UcRjskyWcarQidMdbohiTSLAsAFwDNZmTP3mSsBSFbgXSEW8H4xpj9GUz7smMchhxn7",
  "key10": "wH67v9s1jMaRs71VGMtdUEfAMC2iVpP32xRsppzpMhpUYRey2trP3URGQH923SropdBwNEcZhmBNLqnW7BBRPwx",
  "key11": "29L5R1ofDfWvtyc1fw4ukZtvBjtAogbk6K1Y4zbVXzr2NUXUeYnYKNLdLddm1Aqmo1Q6apFqkijek8jJEh98pnpq",
  "key12": "YawaWdkWbDcnMWKcKWhLUapQRnzFWQ718avY4fAr9JKjhMeE6xiEagEEM26xhabgT2UoNVG8PmUKUNxYcrkhdBB",
  "key13": "4aMP7aTRQGZN56kZv9WAvUCW57D3cDBDLLnnW4oB9GfMVVnXvaNZQUv3bVcqxko7PAqYD75ELSQF7wmz1pyDS7Fm",
  "key14": "37eZ43QDW2219qpBVYUG7EdnzJW6tzKoPHCm9FHr5zfoMfJQm5GdPZTaif1vAeSxRb9GAsFdMx7ynLRy1q1uA9SZ",
  "key15": "4TH3N6BF6dxkMhUdw7aUgGdrGPQqKxSE9wZCSNyHVRFsbeNzq9ByZGaDYST1366CAJgJX6sU2waE7jD8iksZyZA",
  "key16": "3qj2FcJZmb6zCsPgBKve2YHdzEMKr5EkLprMpRHnRbB7r4AVQed2urvWxSr6ExQdiLfbVthSWdY7oWZcz3kvKB7i",
  "key17": "2tqt3kbGDrmNnLemMzwquhLQcHzDvdpKz4smE7wwzMK8k6QbWhQNS2vKcxbHmdb6E2UMM6TVpPZmsqWgbhcCXR4j",
  "key18": "3JTGNJjY14XRYPh7koQ1UGkD1S3PTBrhxjeybBVeyJRPpsC6FX9vpz1oXsrjCo7mdFqXWKMZ5ehcWDynUHMMk2T3",
  "key19": "cQumwYPEV454m5dpDEuYRqGHptANhUp4H6nkwdHSEhycQGedSq8zjanr2dPyP3rvAFQC7XxjFQjbik3gbgmHHYo",
  "key20": "3N7gsndZwy9XsrVKummJeCcqGpJ1ZgDTxnnYJppBrr3gPXNKPp4gS8YsQSpdPfmrY6HQkq4bWqEk9icJYpQqCU53",
  "key21": "23tk1Xad9rHbcEFzNg8oRkXhi89UyFi8uDyXPkZkZWE5PSsVfEfsfFCuJsvqWumSzjfcMMuCn6eKd17VhKcxHCRW",
  "key22": "2jTCLRHuwRQXDPDahz6CvNGPGW5fjzy2CM3ZYs3tocJBe53FSQy4f6edfg3BgmnGo8npjy9ej2ceiRp7Xs4HdJN9",
  "key23": "2PuSrpF8C6ciS389eiYx7q19hx57q1JmZYHZCi1p9C9fRDmEx5PtVs9q2rUws13SGCjodzrJF14KPkoHHP6JpuB5",
  "key24": "5jGarqq4qxm4Cyt6TPVboJUvtDumgxN58jFyPUWXpNSuLRPEUddkHVmxNRxXkmwKpMCQJGm2jy3vHsNMiCRmT4qR",
  "key25": "U8xKVD2KtcgqpTKz4CkAw9XyoFtt8GpWioVChinm5HMufWJbnYM38dVqwg3ESc6muodHv6DQEz3oAeKWYJxJVmr",
  "key26": "5r84FHYqTkqdZ41stVQ5AoZcnd8GNqUPbJ2UvDqLjwrx7vwD89dc4WJukgqLxbz1AV4M9Bm3HYTDWbmnctF1iqJQ",
  "key27": "44pFQzdyWh1R5QcnHgJfyzQazjyF2V3XweJ95KMQ4aeZCotkjD7HckeZye7wQG1jsQswoNakgvPciAi3wy9fUnJd",
  "key28": "3FVHJrMKGSoGmNfhctgnAWTo2ub7L85khqyHX3vNReVUzHEjeW28mi86nsLCtYDvrhL5C9ozW6qMuPxWhAFLzko5",
  "key29": "2irH61b71iELEF1xpKnFNbD4MFokARgaL17FgSeJYgZATfNUouA71W81tgTNMF5Zr8J2UDZid4DejQCBRXhnhD5i",
  "key30": "5EJXpRDzFXqJx2vChSMPkFqRdP2KCz5iEHNVrJC4cVwG2HSpvyCBATT598mnUTmkL9fph5o5c5zojSGQ2cbbp5Xm",
  "key31": "4oW4N1psRXMLaYGUvHNgziT9QocVPwP3a5NMbZ3fg8prMnqMFXFJkAG6jmo4ykmnpWpzRxuxXLV5JitZGMRiwPET",
  "key32": "36GatzksYrrSY3sHpjJLe9VgEWf7Sz2Kyv1TsofTWtozAegVr3rVk8yKLQPD8QwbwPRMjWiMAmrk4D2woMzbpF6U",
  "key33": "4uBrphkrSrv4wmvKCmetQRzu4msaiau96Nsg3ivESmip3gu5apUcZcuizATHxJsM8fmRP4FRiv3krxpcRpej2QV8",
  "key34": "3KXYufGDSTnnTEfF6r8rx8MhBqrDsTnGVWMG4EsvCTuJ9LuJCstQJAe2yX8L5ewMRBeQhe8Hv478RtWDadzw8FDa",
  "key35": "2FpBih8dDixBKUsuZ4fVL2QMRUrMZq82y8EL1AGAdJrg3UejaYrgYTg2D4nwkRfrdybiPC1V93ykL9xS9EgfwAZM",
  "key36": "qGrzYSodRTQEtSyp26BemQuqeGkXapXtAtjTjAod3wmETrQsR1Zhkg5Su56KZs4PQGbLFatnC8dwyDL6BpvSA9W",
  "key37": "4d9WyZhCuRxzPxERCimoW7Av2QBNENw9FkduC7AZ9kVj9ukGeZQRuxULDvL7Kyx7hew9CHA1HXqpB3qjHLjRguni",
  "key38": "5rVdpAAag8uidX763ZmDB6GDyMxgp7NBjK4yfTSo7N2fpr73CjC4rG2t9pMWP4s8eZQo1xzZuWTxiKwHMYGiZdiF",
  "key39": "4Mth12dkLx6uXeVCjJsFnu9ZVZ7JuYJbass6B8UhYzJbafaMe2cLDDtJnmeW5YuxWn13ZVwt2udvMgWTNt5h7fBw",
  "key40": "57Skbr3sKtKiuuhB3gWKSrWwm5wdpo6ajNJEYoRzNvphMVeJ7w7Pk3XcH3toAQrhQw1yP3Lvj1pEyS3bBHMnDNzf",
  "key41": "3SCsHxisRzqySA4hyWG8aX2FcGhracFKc5XWJSG4KNDQYhxeuwvpQjXNgC2tjEuNQfhLFvEhFESvfWvx5dL4Vjzo",
  "key42": "4CpsRCpeLEiBJ6EEGmRw4wKqxF7ZsKwtWge7JSPaParcMu2XtCkzB6iuVXwWGrV4DCgF76CY5zP2jpDEugCgMzHF",
  "key43": "4PkaSn9LYegdbj3dRjjGBZ4er3UU6dW4XUdvSAwz5Vm3GxQyLqXD9SCtMNUNjiaMh2hp6dvostQ2tqcZ5kdBsCze",
  "key44": "5YJxqQ3aY1tq6PtXfYCtsisUHZgNAXTUrcCRpSmrUEPxnRBnaqjUf2kcqUcbTWK6ere6WK7NF4S8QLyZbMLt22kF",
  "key45": "5FCJey5kT7C1hRqBv9tdVsPJPdm5SPrvZMzNGVA4szqV5mYB6omPYxcqVWeaHvorDGqXpc1gLyKZF83vCb64VT8S",
  "key46": "5Z2SGJdudigkoq4mHEY4joxUByRW3FHGvFTGPxH4ACwqu42KgNzVgbUrXSkT18XM82B3F4XEzd64zpcxjx4u9ex9",
  "key47": "4fcq6XSmgTZ4xFxt4a4ubznoddSFozSq9C3Ldx9QCH2SY2Yc4sqJgJnPsDvhyXH3QoZEvyr8M6ocrK6MwZXhMTKb",
  "key48": "4uc8tEW3hyTD1pcnnqC47R5unWyMGd3cydusNTwQUXyVCVfxHwhj8pyBih96ahx5PPVeUswQSTirqicFwf9RQ58g",
  "key49": "9ZQ1mQctaSCH6DtQPDkwgrCBUuHqyNNtxnbJttCCZG82aJA8m7s7mTc8i2TgaweiwaU3NG6ypeGyJqhFt359SP9"
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
