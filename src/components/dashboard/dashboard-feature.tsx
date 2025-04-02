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
    "54iVjAxDutDtBFFb2W9khRCRPDUMHemMCTVB6HWevzRpvTARrvqVM8ThqMWgWqkGhebjgRb2iTzrys2ZWfAi9iNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nHzkJsX5eqKPuBRZj5H2RPqwYcraHYUSDZt5tT84GKUjVbJo2mXUrc3Ni6rsN4eYM8TPQmvzN9eaxzS1MiJR28M",
  "key1": "4vYTYwzCNh4CH9maLPNXTfpMLPYBZoqNMjq2xhanDnzt3XUqZt6ZWUQgEbYnFUbXp81nekAHksaHTxwgBsYR9JWw",
  "key2": "w1XwjorikzGAuQJAroJ5GJeFCQXfWNQyxcqSqaS3sQECqrTycLbtsnkdkTNmYJ8RFDAtZd3aRxPsJfgfm4bQcLh",
  "key3": "2hncNf7hByygudKAqwRhXeJL1FMHfAnjyFYpEjNn8QnZNWSAXL3SpyNKdiS8GKtnUVdFu9U9ovy3obzv5SFAYm2B",
  "key4": "4PZDzqTTm4bpBuQHYSzEvzD8N2r2QT5Sk52591pjdsSxYPSEEimYU7vv3kwkKdaqr4xypDwq5zE4ZahFJ11nh3ey",
  "key5": "3Tk4oBQd5poxwfrubykSNYDEZmHspQzgujmVmPHKp4GZ28NWD5LyTn3CQw8ihTCG7wL5agKDCThepTSuV7z6FPdL",
  "key6": "61noR1Gh71w9CtjTPoKHMaE5L6bBfbDRsRDPNU9Npwb9ZNQK5piCiVnHHB7mcBebuymYWRqcFAVXNrrkjFdKHztQ",
  "key7": "4zCEjDpu4Fq5MhnMPvs3UJoo1WyhbRDGLEToUY1hKJiSAuM3Hc3CYUvyURYEaQfxzfJRnMUmdTG4rnuPiTzCe1wW",
  "key8": "b7KQB4H5bEbeJcvJw6FaKin2pGoeMDLUVuPn6vbHKkm2z8xBvJNghtFmQ6YN7Pk391QiDBAQpzZd7BEAfVhWAW2",
  "key9": "5xBgBKFq4QUfnHtbHzmGQ9xh96SpJrmxeub6fbpeaxUkNyxtmwkioeq76MUy56wxrJPuxTvzi7PTynzspEmQYkiX",
  "key10": "2wu4xVJA7vN1XHu5qT1VZU3o6Y7VgmCwfUzbgVVLXBBYYdobCQMG6yQpe6ARroK5vg8Seh3F1cYuu6yPwpa5e4o4",
  "key11": "6cJmFREYHjvwbpuy9gse7ud5xK9ApNVw4PMi88fHrEVbxujCxw4RRS4ksoCFNTTN73sBHFaPnnRhb3mUg1KjR8H",
  "key12": "4D47bo7WdYyJSnyseGovY9vZVprDaZc4sJxgBL2bDwv7YPr6BMwSyn2k6tJyRbRMPRK5HnCTZ6LbqHfmudEfahht",
  "key13": "srmcxNtowtnEX6ga7HFgRSLw1pwGYJ9JTZYXQJ7q6gpqyCrnp72tKEc6cqNRHrB9Gcqts66JwDQu6JHahnehWui",
  "key14": "3LRE8arjxV7PEL3YqiN4yyqdwjoc8s2CiHPABh1wxUmC4SiXEF6RjJozfcVagw6a242x6DqieE9oK4fXkgtqrJF",
  "key15": "3qm3LTTjVMcLoVMo2GUpWs69aKXF2Qy9RJ4VEaPDGYsEschcxyga7yud7XUQ1v6GorKcVngdLu8osHFHYfjpYPva",
  "key16": "25YJAEqqzVU2Do9Y8eKzmXFHRtVUuFXeEXAUUZBmKGrvFHAqdsfGvMJYW19xN6TqmuF8rzwKkP6B1X3axeNEhihF",
  "key17": "47NAYT3ifoDRZq1RDysK7EztykXSSLpy6xUPQUtfrbpoV1DBvmSsvHBCajTwbnwJMLzNKhaVXWcipATePTa1Kxb",
  "key18": "2FpmQvftYE6V9udtPkEkNVpp5KGZ5ipgYsAP2AhNpcACnsqYqdkgbgvkr3dmdKrW2Ee1HYN4A6cZdZe5LiyyRMnm",
  "key19": "4nKX5Uex376WP6xhs7bVsDKBcmygJBeBHLo7EScP16wUYBrUDbdfTzeqVJ1sKEsnqbXJ7v3vwzZLrzRomAJrm43b",
  "key20": "4qQdkiBf4dkomhvE4rQ3uLeYbYfPDymWm9icP95c9uxKjVLPkrEi2bzQzJMgSwd8PMRsALP1mrFRXRrKt6P9Be8N",
  "key21": "51ZpkvekMSfyh7Roh5FDjvwiGPvicpG37AwG5edEUDPaMkGY4WyMmoDhX1p2dryjCZ4Ld47ADjsaWRyqQzBWpVxw",
  "key22": "2Y1ekuntrPWqYdZUytmcKon7eEyHdNtStuNiP26QXXxMwfmHwpB7ZADM3EQbFR6n5U3wskWQu51uA7YvqXhQP9rs",
  "key23": "2NxenntwNCFZEaiHmAtmo9CFxKPvZLYV2B6kMDD6DCpVrSYZaGNQg4ctBWSWaBUHywnqpp1tSHyER6Qii1nodrRH",
  "key24": "3tU11ZZg4oh6i5SLDrten4Hj4Apxqn7DkiLBbzuaFkK3R6zXjTFrpxD3uBjNeU3TxvE3ss7sYi89pR7R6SNb9iPR",
  "key25": "3EkG46vfq3698hjvMTE9dN5uUgqeTbA4mVWeqoH7vJXBhCFqmFXG9ADZ8og3zByaMaYtwGGb2C8haav1bmDKnaLU",
  "key26": "2SX5eh6y4PdR1rRfauJBsKh4EgHm9L58pcdeEZDb4wuJrxr8n3p55j6wBhVP5C8BwD9E2QU43cakGvgyVovFMiew",
  "key27": "vDzaW2w8hjzEZYchXDZyfJtoaQewoJF7pZ5x1zjg2pFeNbSctGV2e2HEeGK57EFpuhGZrgUx1Ep8wsABKoZbJeX",
  "key28": "4FDrtC6uuRSPXAZ25VURqwdc3g2FnQWDPXG4N8vEMxvVHvLxvPi99tU3iHJXAwi2M8yzYFzUPiry9NAuwXTJnhdm",
  "key29": "5NL1gtZ8UZwqBvAvc9C6MP5RXwBq5nTutygsaCaoAhAKDQJMN9RUN6GbXhy9HBeGKwzBwcybyn56pJVgRGwTvTk8",
  "key30": "2utrWWmgVhhwuAZXnyFnDGyji3VkSnM6s396WLhgBis5kqHUqb5VB9qw6v3CcVJSHMqPMXe2QtjTAUH2QsJDkBNg",
  "key31": "4kwtH7Nv6pCezCuEEg63Kyspk4c8y2gY6ciAJ44X9dfDgE6HbuENUXNuRgUDBnXackTBGJCt9ZD8ZDhd4x9PwzZa",
  "key32": "RMUi1tk3haRzHnwq8HRV7d4dDavTvVRGELHR4qFx5PC23wM4YfgngoKFCwbvHRAvPhyMP8LqwQWBDgBZ9GNnpJa",
  "key33": "2GPT5kyeSfk2eYj2H6PNFpKP9WKSBG8xtowpxCEbEgUhyaer2azZ2a6srMS97H9oyd2zzuctXwJ9cZGALuSaYLmV",
  "key34": "CP4nJxPwF98EmTQozzhT2yuGSJs8EvbieTeXM8XLDrmKhLUZoENxQWaA9ti23TsRezgFoSLPTRrYhdPid3aEZmY",
  "key35": "mPs5HXRdLtw9XpPEixUsm6ABZK82unrmhFnk7MEwHVt94CAEgr6s74TmKK8zjFRsbfab5M3ptuNEQr6XbjprrT5",
  "key36": "4RfLRvrRmbr7wtgdEqUxuSVrDJAnFzSHxtSxV1maHLcx8BT1MQSFSGFrqw5uXgB7CRzdrBDHxPP6b1QoLg1KSLvH",
  "key37": "4zmUAmu97QGmXrdwJvrVNeDJaZCdeAVvDFxLy14cGirWY9U6TNXhxtiy1kDNhQS5PBJ1K3MeMVFUw6m4peWpAESZ",
  "key38": "3XZtCogxtrH31Fgfp4c78zx8dvmisK7c7WzU5SWpWS8UBq2KsS1YwF27zauFBZKWEcJW7fHprCx5RTJT5yR2kPC6",
  "key39": "5sWxXP6n7ENyexJXkvqLDrQa8SkfW546ykxQPyChmWcjnWTHe39FpfG7mgtbE4LLrLsMS2W7ujasp4hZJjowaGr7",
  "key40": "cZeWHKtA3oS5aDLQbdkHzHUjKxgCszgfbXnfFzQau1yDkVsyJiGRAkL7mgCqbxi1jpXk69Q6f6sVRUprftChd1J",
  "key41": "59uuSBHDwssjjsHUq8HgeDLRCaBMK3jVx3p36RGVprzgKuZHC7SFsocNUNSAcGjxGcujskxdLihzfrzQ7aDw6Kgp",
  "key42": "25Lem9KYJ6aCXkn3wfKV1ghJq2oYaGdiE4Q6GVJFYbK5ZF9sH5dxbAMB8oVjnazLu9YYHY56G3kVDe9sNGXmQMrS"
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
