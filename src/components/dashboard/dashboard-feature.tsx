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
    "4cuGa3LSsZSxyCguYCBehDb6JG2jGk7dSJZ7V741sMiDHDqW49JnJJf3Q5GJqEEWk9gTdjuhVtesfwDy4VAs355t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "izDtimzAinxQTQPuqpiPpX2jnLxJoR2Sp7pkw43Ej9F4y4RNDtipRCJ3BaVe7HRR3PLWYC8K4oHzpot5VtqWnVn",
  "key1": "3it7yBh6t6KogDnSvZWBYPiCqsxTqBXj8DoTL6wNfKy2WKva8JQWfnKaKX6hYenWndrx3cnNaLmQe5coKde2vVSG",
  "key2": "zvw9Wvn8ysyCu6VKC6St9mnM9vjoYnTUAc35NtXDMiZxHVFwCVWvVqoP33VUGxZ1YsfdPnE8yux4zvFuAmgJSau",
  "key3": "RDXYtdD3zn3a72CSQeHLaTLV7xFh9Jz9Gqpe1DfdoLQg9f3WcmvcmvAQYeuy4FXgKZmPf14zkVNPapbM6jM2DDE",
  "key4": "2JR8pogvRLHvsY5TnuSpC5z1DYLXJ8advJvkisn3hhMv1uqq6hFxeuFnxdezomCH7r8c1tzvAi38Bv3iaVChwo1S",
  "key5": "3vi295Efjc7Km2pn4THzR4bCPD9g1CqNduTfBK9vpeNDJNPHiQgHAx4xWBKfs5hxFJK8Ew8LQS4nHSFmfsE92SB5",
  "key6": "3mCBt6QLtTCNU9tkxB5g82ehXKLERhsgjetG9bRB4kWxJCE3b2ut6oXNrvwTGQuy2P81gNWVdTSBWFnYNYd8CvGb",
  "key7": "3qjextqEu2QFnmU7qBigG3XYmG5q5LYhPuvrSwKfocF82pEgBeQmEJxThWKtJaEJSN6rxS73dakCaRKoB2QG6cKb",
  "key8": "2ZJwT4yPszciaf5TKoxZbTbvQK2eQbTaiH1aq3yuWawhtT2S2vtRygvSjvHJsd8qyRYYPVqyf9xxo5NmqQvwpjVo",
  "key9": "5qQjvHffGd8YSUuoH1xb1NgNbh1FFrLW7AiSBrQHfDnn8PA5PvGozj4vn5GfxiZ6XHMCFabKJmyHduiWAMp6zTRn",
  "key10": "eREv3kZ1v9V2zBnuJLU6zssmuEVAHsoRX6iKn7HctDRuE5nZqw8jBHcDE9NFTdDKkcnbVUzWCWnx6scNeEKBuma",
  "key11": "4NfxNMiygPJvtAZcjiLRWq8wBC2rjeAd8NXtdLArtN6NetYVWiSi2CTHxg5jcRsT2vxWWZyQR532WuURex36S4uy",
  "key12": "2r3mUwgX3J3uyVra9JmQs5ACxkmeG8W62HF8icFwnZb9P9ByWVEsyh6KchaQSFeFWrFc9AGvSwLfB1G4iCvGzA1H",
  "key13": "3M5a31VxL1qZoxYDaDxUKhyCLRJK6dzVvHdoB7ZaxsmBCdWHHvGbdwBKnydTsa4GbvvxdaVXvXeKHgVrwAsFvQQ7",
  "key14": "3Ks3k2zpfUC8LY8wEQyCjhjhngc2AonDtZJ6BH3Vg7cG2ohRsUmZ9ucDex2vrWLJmiekrucfyx3sAJTtxyygMe5c",
  "key15": "2dt9g31YNFT7E9PMmbgoqrqoecaBqCtttEDPztio1TTSjfXXtuFqq8ukPPhsqzgRfNdzjBAkrEyfrGoiPLgp9LGM",
  "key16": "3qPJBJ9DkoPp6xVP14gmhumuVCdtTXb8VMDoqaE24BXQrWFBBui1YPSyBaNDd8W8JQ84PLZ8Go24nCkqF4W7Cz2D",
  "key17": "GrxwKMx3tQ4cyUkMjKkTE9iMqRy6M8rmj6XvX9P1GgCfVpZD9EN6ymm5Xui3tU1v33phtGiwxNoyWGoF2vGjtJj",
  "key18": "2NEn2D2Va59V5PrGDJSAASZ8BKDsCkiPQDVgyuZGHYaHD8YbroE31CyyXThcxh8ivr4oDwTa2Bz9U337hWbT4H77",
  "key19": "EmdcAEcggnTpaHq42FFBQqYTLSLn5AwfVQQ1ZSHh8En3Hd9EqFcuRNkYM5TTdsjBgvwntn3wqz9YJeQgCEdck9w",
  "key20": "4xTqTJVqjVFFVwutdHM7MvjsJN9FmR6gPMcEqdQQ1wmDRkA4rJiEkeard5BXq4nrEFa2gpM3RX4ERY4dPr8zRfR",
  "key21": "37BtgfQxngChqEfLZfrhwit7j99q9gkGSoK9eY8FWGm7ej3AQiLRAcFcGG8q3zVUwSLozzuApR6ACppQw9yYPwuC",
  "key22": "3SZN8puirszBdHasucELwAQY3ePFU1U8HUVqGBVxZGoLG5WHUZcMeKJBFCwxVMzp3XV3iZWpdzjNGqJkHAkHsveS",
  "key23": "dfm6cVPqfm8wqgmweFNNamhWKwkfvktP9j2pg9AumQzvyRUqyG85i5jvXgtixo79xWuqE3gowv2fEMmpzLtXaiz",
  "key24": "4ZQsz6smW9xuyHTz7Dq4QimNHvTc2MZ6HHqyduMnmDNL3gxYEhpzC5hkwerTGkXyixLgCmY2XEkoFjkjvqxRHShJ",
  "key25": "44t4iFWg7r8kVd54LNiWEtpVRgkrtVTVyfXMJ8y7g6z7chAWFEgHoiqukup8xygTDtASriZWnS21mSMek6SS3roK",
  "key26": "4o4MwwVfVM2pMisbWi12Rijc5vUSJeLokBFKsuiqRdsB9wwfPMJx2cKo7bE2WsCQR3qPLZDE7pbU6W7MjfxkPz84",
  "key27": "3vfxvDaAaFvgrEbQVujcnX5jhyebUdMNkpZHoTvAouodJM9A41v2bMCvjX6jWFoSZju1mshjEgRc9Xto12VvseyQ",
  "key28": "5GJE9c61m5Js46AwhTkj2iyZcv6QbUymXL2s5Thcu7Hh145jaM9ELNMUm9q58ohoR4Cb5axWmaiSiyMBQUtbDAnH",
  "key29": "3vseqxqRy68DTm9kfkPESqeaeL3kT9zWuRdPKqUDCzgnwb9wMZ44YJyqktXoiPKYBhnf619Tt8Frufs8oqjiCRwG",
  "key30": "53KzV7VgDjKvDCMSK4mmiAJFrBX7QoQdHutYjZHQtorKQus8qGJSQsgNJfNSGmFpYKEocNi62EmXQVN5HHRg73ks",
  "key31": "56vfRvQrJg2AxoYLDk6hRN24LpzxCv8qS4Lot1XHHphdY5hztNB97JXXEDS4ptinexaiKoSo8BPbQU1C1mBxYgyZ",
  "key32": "5JvvcWcjVptmssKoZUHv4XdR2fNjpjinVD8JqM2EhkoiBzFruQ7qZ4HZokA7iHhCrvPusRPinbLZpSubdMKdxbwn",
  "key33": "51ShWRkggyvSDZv5HybYcWPJdqkzC4z9RPNXZixhKsDajb3UPmtGz2AG8CNsFFGjeCZQW7Hi9MM4CvcHPAJ1WHBY",
  "key34": "3sv66Da54o3bvajuDueixbrpxoidR1TfTjBYhKa6yXvx68dgPkmA5GGoQVRTNSHiGyJvkfy71huMLmGrr6jz9rni",
  "key35": "5pxDNAq47i1mL2hCfwVjYWPkWceKouYBPpSg2HYo7wsoFxm2hVEQAcNXrSxxWtbNdZztECekDYq2CDm4gRQZ5WnX",
  "key36": "WgayVioDD6PX7KP6zeQPfg3Qh9Xjr6YRvtHFUNT1PHiMFoyPjPaRFstizChQGFhatmqojK9fR61WWf4kv1DZXkG",
  "key37": "5fmSVqFnvdkr8EEHNTd2drH4k9FUCVhR3ZMENedcJG7YVtHwX4UiVy4q25apfbhmjPJ2YHGodc1SFMad8b8PfP1L",
  "key38": "5SZtj3kBVQ5CmeE5fHTYv47AKyuo7UMN2h4JcVGh4ArvyKxQneR6rmw8zYAgNL89QEVCop79jxxE2XN3r9DGhBFy",
  "key39": "3tqREQPGPxmwP45avs56F27JXcdmfZoPFaXgfYE2nQsdCA3nXHvd1LaE1AkQLBwxUbEPus7tnfEFMejdVbvhup1t",
  "key40": "2kohfgEUNjqJxf47JCoDijT9uuZXy937rVdUtGZuaEywqPTE1DiRzgXkBP2jMprXJmALhEjahwAxLLreSSrRptgK",
  "key41": "7JTvNiq31y42fgTXgUYPDRSiyBUx1tMYxAFQecv1wKph5ydQHiT6jgXGsFT4AosQ4t35HfHnzYq2wwjTmRPakgt",
  "key42": "2Jr49m1gE7PeHLq9LuBXyDqbdQGcKhcigA3pXz2a6GAkLezx7A21qM89whBkuXSETA8FmuTbNpSa5bTPQGq49if2",
  "key43": "2uieHHyf48gVyKriRJZBBNRbexYmHcCVazBz5xnG99ygESemSRpEzUTiqnRaqeCHMjAt2vuHGJW1sDSBgzDf72gT",
  "key44": "2qqtAhgPmzFEnNWVFAUBpF7oPkBDkbPJRqkRGzBWuKfGBmHV6cU2b46izmFCjhLSdWAgpePwARewJe9eU3BqBh8E"
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
