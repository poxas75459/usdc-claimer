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
    "53jYA8nWaXgvFdiN7HxhHapfdJdc1jZcJVhHikAeCeP8nHcXHX6S4TzE5p85ghzKDVDTvsVGssx36oSu7YS7TmPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47EnUKXoG91PMZqPT3w4jEwbSX5HjoRGBgj1UQ98FtdGESyhKLb2v2kerL1Mt41DhEqVrgUGdnGLwD3Wwy5qTje8",
  "key1": "35A5EaHAvN8x7SQ34Z2fEbBCgnSxAEKxfPV8c5ZcLENV3pB2grQ1a9CHeUgR8KUgXpqj4R16eUonZjQAdWzYNBXb",
  "key2": "3XxpDYiZuijUKcYZTG5ETix7b4r9oSKayFPgBrNTEvNU69rvfvQTpgvUy5k29g68PKQdKPFEnQk5JfaA7oPGFjNn",
  "key3": "2GiwjVKBBMrjEY5QJHHZRvHaCkkN8JRLjAi1zEDAHYVUcDhH7jsbshAcYVKFtkKFJVYf4g9aLTVduhTkRGequQvU",
  "key4": "2N3XadfDiMaQW3JvNhCQzGX71BGQB9SzxDJWqbAHwxakUX4PVhu949eMuWw58E6ckPKMh5QQKUbaKpDErPxpmzm6",
  "key5": "amGPtgbHNN4EGd88kWu3smcE4hVAnShs9TXZGdZUwS5Q8KMBWcwV3D3h7k8gKNCtLr8WEovEf9Y7dzPR4gHCp4Z",
  "key6": "2G8MRNhTNYf3WGKu96MtdLvsbYUerKrwgrXxkdaTzRieZLsmxSciPhLuSA3z1yfSydwkVED13FXZ1rcN4Hz7D4od",
  "key7": "3sDCFddizHJwpp8TcfHbsgqvPescZYM7Cqx2ZTNsrp5BqcHbW1SP64pK97miZ5qwthuMBoFYRiZDQpyMegwmLZP6",
  "key8": "3TcWiRhicqNcxpjxvKP9T71VPR1FcPfnfgH7vmHaQ2MTpmoxgzeomoK7hhsUUuCo23EzKsTpSJ5cULpu1K8qWRNP",
  "key9": "2RnHGDgfXJcvQJ3CDSpBFZEeGLRkSQKUeoKECWPPwpCLes82GeyuxiC4SM4MmycpBZuabPBe852Y8M5fs1MYJa8W",
  "key10": "2JzfARRJjM6KwRFcWCCp7gNyzoj9CfQPyxYwUd4VNMhyQf61zKUxjvr1wsZXZHduhJJJm58HPVA4eY6QgLp33adx",
  "key11": "5CvQ3ceRK3tXgoV9V7bN9Nd7eg5UXcdhajSyPA6wdn7BizUVqBM3Z2oi8HNiAsetG9kJGRjUrPHcFxZKi3e1ejWz",
  "key12": "5vnKuz8BGCtRHYUKFQnJ4E5sompQ7kwoAi6ZYcgt3yxdTAsZUFT17pyAew8gkArr1EKfrfV5N82PHoyEfc9NZmVT",
  "key13": "32qRasdftneMtCZZZdGd27Fa8WTNyXZmvqFGDBTKrSWVpFadsfNmqwecHFq2beVCpNRN5isLyAJ4aisR3b76eeJp",
  "key14": "66KE5bLc1McK4GgEPToiG7MyTg8z9pZQ8Gchc8DCFQHYxUC13zMPxUkY4ND8w5WEFsM6Qk8Y9w8YmnaY4giRgHbJ",
  "key15": "zdspbQbFCeTksZP7ifHSNUfLhArmNSu4x7CZU9SkGFbcA43PGXoqmpMq6Jv7ygQ4vEAunEpqzLV5sYqnF2KkC67",
  "key16": "3jbMoCkzhNLNycWDrWHobknvSZtLRR9F7RUwQBWDqmTQoactmdnNCLMPJkTN7vraiVdnDKNX3nm2MoZKybbvzNDC",
  "key17": "26Pk1LvAxRXkvSYS7yMnWwyuz8x932C285J9mUYuiwtna9bvQVN87akx6pn4whHr1sWUcnRdpR613rJRASgntpSu",
  "key18": "5RHvW2rX7kLmoB1S2tjLm3CYhCFhfmsachGek5jS7Lwik7bmzDkirpGPEMppUx7BdCfR2rk1pYpC8SvWCoHFBpuV",
  "key19": "5GVTK3Zd3G3XozWfPNY5taQBQKcrgGnR3PYxc4vzmsxYjLD1iKpSnm9ToQBsu5ovwy5ErHo16Z3py37UEyZxH7QK",
  "key20": "2idH6tHCWetbABvcV3gET9p5As6rQzfjHYHym2Mr8Q9AVUcDRQA5vkiDLqBguXfHPcHGjAoyvF1KGxChMxWUz1bS",
  "key21": "4amCaGbtie1dy969vc7K2DW5sUtXDQu3C5xkJsTxVpA1P9odayZb94bFHkWPJoKboXMuZ3yTwJMdqAKt7iQ2MpuJ",
  "key22": "3k7UxmiLkLBdEHfQyhAcaXPmVMZKaNJDcMB3XcyGWNm1J4ZB4vLiFAqKDyEpg3XzC3D7ZAyAttvJ2Uimz4zmgQFk",
  "key23": "531Ge11en1c9hVegUgxpZZhjqWr2PqvPTP2r2fv95ng1w4fp5pZfU6xouhwBNYj4oCfy2Kbdsw75h3UWenZqqZzz",
  "key24": "5JgwvQ1AvofWPWx9JgQUDDQWgR9MmmJTCCBTZ8vKrTAxWatxSYtgKjoXVA2WxyTuUFKLM8sSpxXb7zgHHSz2pxvc",
  "key25": "4rbbzwbpfU5xpGtB2Lgr6vEkPyy892ShJVi7rFZ9cVjne3TAtEMuq1RmzgbDx7aMf7hGKsBNZ1kYjMgXeVEWdVgh",
  "key26": "skWKMLVVfHgq9JGLXSgVrpGjxiAKqNARADtyK7aDP2pU4bNfPKNwswHpKpA1t52YBjsYSLyryn1uUL2Z3iMYxPE",
  "key27": "1foYw5MbLSrdwubi59ffoBgLHX64P6DXWfw7v4JUh6kN4NgBxYocfAoqgA4uSWiJ2mvYs7UALXKuortbBo18tDk",
  "key28": "5rob5exWZnkXNWBvLZ9UaPggF3UzoDNAvebf4Wy1s8PMEU1JbYNKhGgF8Acru5QVhNEuEPN8HbxQ8KNDH6mspsFe",
  "key29": "66RqoPxm8oDpkpLcyuWnw56WdWWWETsVpDqmwZcPLSnB2M84B9N2d64yFfz5ZeuypHqYh4fk1pky81s2ucfgJCZs",
  "key30": "UsyCKFzKjNavY4jSz8HLxMwmyfimoNn2oqXxhS39DX9sYtSjffJzsS3zGk6nLLwXw8P3ieyuvse6pEmnmVr1nWL",
  "key31": "2EL381nDYEnK4iiEg3etYBm1tioi4RjWa4T79eTxH3u4KhSZCSdzFMc8tUZkGcSspPmq3tom9Zha9G3aE7nNFp8t",
  "key32": "71efRZsS4W8W3duQWXuGfoNPDEk2Ff4JJJd3xHYabGwrkohZ68eQWaH7GUeRJepoPmknNyyNu5n3WqsQnaztyet",
  "key33": "2mx1M5YkWJva8ZAmVpGokiGkFTsoToeUYxAGPkhjm4ju6BjYhk1rXoYmfgkEPXEpTPpJL6o2kqhQ5BFKJ4ZWYrNs",
  "key34": "5K9Hfseo5q9tVAiBchAGyVxi1HNSE9d3e6Y5ovVkewPoQFZAS3pkKMEBm8GdtHDVdKvG3Y1jYRLeMA8v7hYFx4RM",
  "key35": "59tsahL5KjaRpsY3A12n1H7bTPdg5EsrZG2jzCVoQJgqmDrmQ6S92EktfmPNfQ9dvuLUDxEBtBEH4ivQtjW3DuDM",
  "key36": "4KxfWrukqcPmmLqyVvYVTg5Xqj9m4x5SZSW6H7ySzLW89HwUg4PdHAXZT9DCiW9DmTuZkjJqucf1o2m7vrpAK7Rv",
  "key37": "5FAJekQwhoH9W27cgvNGg16FMukq9HujB7RmuLnTD6d3GPgsRbSMDqyCKejhYUUW4pVDKJJJ7Jwp1NBjAg3THWsb",
  "key38": "vTrjRNRuV285CeGhukpDwxc8tHFhMrNJfcS7Z4MysqWDg93tvP5hQjpmYw3EP1G1ZCgSvh1D8PnP9ycyi4xyALD",
  "key39": "4VHEQ9mD3SQKASJBwuEtvSXzAzf9V2AGmNkyaiMVnqJiVwLAyi72tYjrEhmaQmNe3TfDy1vcgXQFBHZgrpRdPxsq",
  "key40": "5DkzFMt3rgTuX7vZEwEx2QVXf538ppdCHsL7JBgMxinUYhEqXxynNsjE3Rnrt9LL69CdUDt17i2on7v4ErhwMo4N",
  "key41": "5mvX55oCgCNoGXEpeBXAzefjdDWUC9W4bPbGb3ZiJEH7i1fpZocvUuUYpgozGgpnC2fm4DuaQime1gYhFRkcG9PN",
  "key42": "66cRWN6W5M5XJjpLGgAjNvdZjTXFXxeeWFpfYFTC85h3uN7TMxSZBztQiQUQNGapynbcuyRi2tXtvU1R4wcTdWgH",
  "key43": "3LYzcbpEYuqV1nGF4n7NhcZ8ceeLNBNqk5x7yTxFNBL6bfybSkCsB9UnG5b2DWgDarp8b6EwAPHUzoZhtsnugEZ8",
  "key44": "2fZP52mc9jSFrjXgRgqaNasVuKBaC695s9h7LHRWLNw5Hs28Um5a14qLK48bv65VmE2pw6eVoE8MEyejC2yEFzfm"
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
