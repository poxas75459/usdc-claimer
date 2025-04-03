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
    "cznNax3qpH7d3o7VoF9YzRe6vKYTGBVSBigx3QCUYxXqmJLzNXQeLkUFXB9QDhMc72UXHswpzJ7PqBdyayGJ9QY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X3DdbPUAz2dmTZxFUpevYwG7cJCFf3igz9mNHZXsu7uzPGCTQ7FE9VwrsmRA5MQwkA8Y2hbJYVVDeuzEfASzsUP",
  "key1": "5TsmCjJkAhK2sxpt968Pa7hooydBDkegXk1a3ZSJ88ZuQnoekEEi3pHZUkXrBcWKbZxmbA1oTxbAQdtJeeUZ8aCK",
  "key2": "2MsfPZVEnpRSbxonKThVpdBkQBXZVqikJYrDVQb1YTv97UiTzyBmvy22LKRJC9cH7rD9JsTf9yuEtRVN1zeULJJ3",
  "key3": "3fdGNBZWfp5k2WNpKkX4wS3MjbjwhipdogZa23YKxpFFKotdju6wZk8wk9EbHfb5d55ZEW5CDXGAd2QJhuA8QRpo",
  "key4": "4DsHp1n6sx5kmr9QFdLdLGU4QVYNwjAmtwJeZG4ga352gVtNs83dcb6DkePpD1Fr3KpiMDC3VyHT52BhzxJg85yC",
  "key5": "2JRe1DmgP5bjcK4P2DrRtPU7PeYubdV5YbQ4WZyjUrYJE8Rvd92zzi7MxfcLBeuDqSbcWiAeVWTJ4hCekMCGWpno",
  "key6": "2EgcDsYVRnnv5PDdbQWj1P9XQLKBUt31f5AYc8sWSQ8UuDkGb1yZ51PeHcVseDmGLZBKM6cuDUSvS2SMJyY6BaZS",
  "key7": "MyybQtKMNAJMNwNhzY3SnHE3WTXSj1iDgVXN69iZGRJUxfrvEReCywYCW4Mp4W1Kqw7vrTXPohpkRvfpU3Cv6Pz",
  "key8": "2TzhwRLYnNZCZHSyunMfXJ4aToFWpUH247vncjPM6gL9vjdLzigD9HPAJbZbDPBFpj5x2hniwfpjpvnvX9CEWjgV",
  "key9": "3mkgRRjLbHMpP9Z6XDk15sjCkESRVhr2Qf1AjkKF5GpD6V8GnW61HcKfdFycEomAMZxKu2waT9Ta3ShTRYsW8Frw",
  "key10": "5t7AKNQi8A35TfvLK11fzPtwnuguh8PcHJWiUAofVE9jz3MpQBkn6DbTE537eVRwod4visGUtVBDQugsN6mXsmiR",
  "key11": "2qptLaVGN6LwaiPShPfxtTDhEAuHPaUDG6yRcMDcdaA1smtL3kMj7Z2PE4eeB54YfsEhWAAshJZGGHjYnj44obt1",
  "key12": "2QyNtB5dBNAeAwSC6EF7gpsbrscHKP9sTXNbNpy2XaGcmrqXpYpYx1JNjYd73sfxJPMWMfHeNhL121B2ZQ8BtN1J",
  "key13": "2oBN92yUuPwB9No6Scz4AaomCoPq6GQgKwC3C5jSU7G4GK2TB9oi8F5mCR2hTQ2geFPBat6sw9Y1bbnrtqx4gRr3",
  "key14": "5iDBUkziBism1cosTuAG2ttVu1Kfy8vYQVpr9ctFVtiLyDn92TpKkJexGvKfHkLwZfiuwKHUi9p2rxtNEhYehc57",
  "key15": "4zz5jPe2GUwUgeDzd4BLoFExsqsVrUBboXs52fW5qQq7XxhHaads8z8nLiF6bRFLNZnr7DWxWnBmJ69dtZGWiic4",
  "key16": "fYSchUKMmqMFfnE4TwzqovFkRegRJaeyvrzU6wrcvMUW2bsCogc6JdEkqgEh44cXPCR5hyPjVmF1HtQZCWhyojY",
  "key17": "8AtnmHcFSkvabJdmS4M9YZsgn4FZRLV4o9rcKYRjThgZ1qpdE1czLNBEEUbtZkabsFmvfg2fP6rZ4tBtPuSL5a9",
  "key18": "2XDrijZLAti3g8jTkLkj3cfbVXRWXAjPrc3Yd3pS5aJ6JqRbekHVw6FHjnfiSe9EY1PpFKi2SwiyKqANjuE3GbQt",
  "key19": "5g5yjwkMrc8NLv8uifvCJkJ2118XR9zN5prv77xuZdskk7bLAwWCyNUkrD2GmXwT2DAxcccAQhvHmwtgJcwBNVCp",
  "key20": "33RcxjYoKES8HaPAbYcjjLTLAXi3XgzZGmiTpxhHNPkgZPzBR9F9H1eT9vHFzh9M4C2pKbpASvi5ysC1v1sHFuz8",
  "key21": "5momucvLKG7d9ceZbnqRCSnpYjt67nteBemu1DnQwCbs9nKp44PGoz9Qus81S3t5u1HEcKuTvc2RYn1XtvtrsPRx",
  "key22": "snmxYsKbpNrecMk7y8VVy79ZJmDxTDR9isrDgkAdX1wgCmZfAKZZdqa7y4k9BcWAfEyGavmezqkuVG4oLkjkhSk",
  "key23": "5DrhyHsHWrK2Ey5gvePaUGz6mdiyZhQfSuXKqtDwqwXapi3ywa69QfJNYVuC4HLyXgr1DR3s95CDNDZLQZzcPysi",
  "key24": "3vHCvEQrwdvh3qB34S8DymJeq63UQVjrvXiYJzbU5JmJP4t5DNKqPvHXqCr449FbPUfJPuh6Znug4FDi1itFpMHF",
  "key25": "47Sak8HojZmXvZLfmzAz2ZG13khaktpVCL4Mqqf96WAnb8px8cpHmQC6jYDRz2pXarbzCss52UiWGisRJB2NPFM3",
  "key26": "3YUq7yzrLTUQzpxMspJUecxLZs8kk3fmgu4bAAhaKsBE8kpzTmLhKXNhKfzLPSvidMDjMsxC6AG3zUhJha3KZnAq",
  "key27": "6Zm9t2WfjNFQEjiYDTVxNhbm7e1DdvJUrNHZUD4Dqk9TZ5zygdWvR6jzqH5hgnZLW8r18jPDKMdN8qNgiSZ25n9",
  "key28": "65fdz58cxXo9c1bT61KcGnWD3E6nbjt9qe2EnxUpdovU3nHBqLR63WVYwYFyJJHhzpcCUf9eSwVPsH663kzDuJXm",
  "key29": "AwN6hR82eo84fFzcG69hcqwkfZWP6uKGfUYB4A4em22ZXyLvCVa7KG9VDGDwXbcw4LsiyqZDmjdEr6Fn2JD6DSv",
  "key30": "3jaWWJVDSgmXmKYVjES62dXPBbCxbJGbd6KpGkRGMBXGniExgmbLosvQcjPoBdJEnkxZ9Y8QT5QD8MCg1MVcaHc2",
  "key31": "3rxwLTqVibxA4Xf3eyK1MMfpz9aKLBEgjDGRAgfU8QX8cBT8LWm1ds4Q3gRiUayP4DVFZL8gBrApEEecijoL26VX",
  "key32": "3BM3nRUeRrFEVknJ4TycsqR47RKYoEyzBeeZfXFBovKubjdH56ZiSMfEXPDE69b5bmVvaMVwsHpU9LdrCZ6KuVUG",
  "key33": "3miyHUquuD8RA1ymZNeVPou2jQEdWkVWTuG1ZUqDaPbgLFANDN2SCYLUCNcXRGwHLZryXkX19f2tJTUdoZL8Acde",
  "key34": "65WPjcGVGUpQPgCxBey9mCc2nkb7fqoNxS35kzcGXVBCkxWQVk8gBu7of5dNjXhmZhhbbPzQQFT3TAGtErgttodQ",
  "key35": "5ix2RjKamAq3cbDJPXZgDUbEEJaB2znSz8btcwjKKR4e87SECxtCxRSXLu6erbVL4tH9ubNNNBbf1wp6cq6htR4C",
  "key36": "4GzbMVPVG1SM1Db4uWKvg7weGppz7KPQTijmY4wqy2cB52i2xoPub8oxjnwVoo2sCDqrYMWAsr5btzcxpHYdQGvH",
  "key37": "7RqzsdxkxFeJBBXCNJKofU36Zaus8zueh1Bfwjqv4oZmFtWmPp4UZPNN7bXJKBNh3mDXw7BFMTNuuJNeJHDWLrw",
  "key38": "234X5g9yaApC4VwH6Yb7AiLZf1NVLRDvTRKmhnKZVmwXcwGibvgtdt33eMC4zQ364NUr5zVrZPMGwpsewXstCXKV",
  "key39": "5FXhk2jbnQ77bokFuG4yX3TESkSHRWEnCSEpnj9rGSAkKo7AafAMePxnw8d7EaFw7sU4hidxkTi9Qex6nPxvHKMR",
  "key40": "4GM23SNmdAftZnvm7HjsmAMCJzytKQYDkx1W2WfoG2CrGtudkA6KJydnosukp6Y2RUm1bPJdH4cHeMUJzA4P7zcx",
  "key41": "3NQjbmkr3mcNiPeRdYqnx5ponSjQEWtFC7HhkNHorJp1c9a1LJgPYfJHBJsbmKL1aqRQuZadFCjaascQmyswzwUQ",
  "key42": "3FFEL5iqnqYW9eTDrvPA8f4d6v4RXGZjB2k626jFhwrccyrqC95KUVafDGsPEpqk7SittdSHUVkf8SLSGbhAP4Zh",
  "key43": "53uG8FCJ8SDJTsBMKciwsY6912JiamRWbGYpRspgeKSTpQgKQhnFJvhjQ5N3joHGcUtWTxG1zF64kp7MJ2uA4VHL",
  "key44": "2Xf27biR1SkzZFN2eBZ99DYGfw9o6eD4TBvomCn3pPbMLptHEXphSHovkHAWE9aTHi9uxbPnG7RzD4iP4yjBA3mU",
  "key45": "4LNWKaWGe3F33Bnwux1hHmzyyXiLPSq9CtX7JSDmWVD1WJSCK4S21Vvn6Q6QYjkTr94oDpJaR8HGMMLfAejttH8N",
  "key46": "22P2gaPviUp3BkHbJsgWWvQ5MvfVNmT85vu9TxdMCBCB5YvaufMY8nW8edjJEpX2eKx7xMtp7BKZGQvQDxUtYJc4",
  "key47": "2izMz9AuvLg9GoJVoVrMKUBgpUJa86Wa8WRP8ay1dNfMN47U4AU92HE1SRGuwAQ79NHRFcLx45iw4VwnQs6cu7rW"
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
