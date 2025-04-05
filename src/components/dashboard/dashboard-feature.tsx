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
    "56vVtoNbsA3MfiDCUMAjBizJZY5nHs9uhC2rkhLBWjopamGH7g46nCHHbU4AJP5L5CePhcnGBb23gvRta6EaVGf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aCDXJoRBkcTnQymcPQmtdrC53CeYNQW4kzUPm5BvM1NPk5PV1Zkug8gwRTRu32yCWfqdGvVL86LVUT5EYcoSGHE",
  "key1": "2T4HEtcY7g4ZoVnhRxg9SkureBVaB3jesdpWm3YRAK5uxT2DEY4y4pickP5aXWW1eL4k2TftmRajLY877xipZzWw",
  "key2": "3283jbtLL8ruDJBWht1N7DNMX2GcupdGYm92275vQ9VErDtUWQY52X5YHt8qqqrX7U5VVpGnJUbKeB1b3RwW3Poh",
  "key3": "y6TZ3dcJ4vPMwdtiD1RtHDdrgNNLKApwmSnsVwL8dDgon6vJxvboAR85jggC1USQZPuiVXuNzBMXysGbVTi3eF3",
  "key4": "gNjWAEDTiX2WdkCGjdDqQQs4XsQmPN3YE17qu8h9E1LcBGdjt22o6n1kcM577iXZyKtWRZywUK1hrPAwZNdxUPX",
  "key5": "4RMAR95yqXCuvvGPAHBaBBb8Zmw7NiruW1o552Dn6tjCs1M8hXigggurS6YW4kPPvtDZSZYXDpv8DU9Cdujz6FMZ",
  "key6": "mPATmaFF9qbCbf25qPfnaoPksf7nScK1HRrrDmZRzy8XYUYAakccEvVXbVLcj2tSWR9XFbCZhmuMYW2WyyCPfLS",
  "key7": "4jDVnzQ3gSy9a9p4TJzLq3xqiczVZV6WwC53mMTLxHHHbvHANXAz9DomtwGctDhJzPzXDra7uKXKGYUwroDLd9dd",
  "key8": "5ZgG6drrGYWkiSu7W5aEvnfJrPRHMTV7XvtXnvMwEHdYZRqjUgEiw5G7J2AgdVhDgo2CbWEFYPbpRJXMbcpsc1A6",
  "key9": "FuC9HzNTEJCS3Bqq1jLu5g2D5cnaf9mBSxMvTTGwtRQJaTDPykmfbafGvtPwH68ax8i1WksSX2sFQ4cbUv1m51i",
  "key10": "3j2s3dZaSC2M79ofxJkmsJsesYrPUTtNz3CELBvaRmqy8rww2LLPayCPSjs5dQsbBNHW4LcURSzV9GpL3b3Q7CVD",
  "key11": "3NQaYuMCS1cMAq7DkcmWwnN8D9VB9FimpoLX4tgecp7LGjagZad8NgzMmLXTjhbzySUBzr1LSTWaWNYB3bC9Pvx",
  "key12": "HK6Gm9hZWYDs45PDpNqV7AuyQy4YyzMx5apDZHqtsirb5FEVSX252ykSA8DxjDLELuE3xL6DBbEqkBVSuiyVCzr",
  "key13": "58pnJYd5uEDYKouDR8wYUcXNycuBPJ4dxhej7jYKvtYkjLW7VuNKMFdYk9bjyv2FA4jwT8S73EZmaAn5M8TvCsxy",
  "key14": "3qr6XTSrQsVLk5192S5qt9W8WKQkaHg72sHZoWU7xWJzgK57HMeS37CgtPNczJDJaVUCfAp8y35Yhk4bDFnBi3Ej",
  "key15": "5ep4P7C8sz2QXwtUnS3gm3z3SdEiZxM8MLYMCgtNTJJjgSu8P26PgyzhCUwgfzt7LZxavPN87VcoYHUU5pkvFAj",
  "key16": "3EmxmJ5yyHJmECUwPTzbxMu2aKPQMJXWfAbQYsLJLKuPShZxAEitH4RwvcLRy9bhqRz46cAjSVUbSaM2ArWaMD5k",
  "key17": "32zL7riwb6MjxkX1Hh9jowJwh6AhZT461x7fKSuWk1SRKTDBGuR8o8sqz9yRSPe8Gu3A5tdmZaBd1vYAmxCsGWPP",
  "key18": "5kWEcQGn7rdLTFcWGyVz7tJPBKau9RQpQcrZi38u4zvD2msCaqBnxmE6AzRrrJujkj5RprXXYVRhwvDCDMY3iZmv",
  "key19": "sS8UZdSCSjsYxwPWsa1XdhAWKodF2LD3HMojB8fx8Rb3urqYTQqYsQyKbuoZvoPsGZfmwVntiDvZzg4D1zC4oJZ",
  "key20": "3HzuNZ2kbHjK4yznr8YrPMUovekGRJf7esjRsCFwSMK6SxFRNGUs8rVpyqhD3H4BjPjVgosdK2GyYgZ3ApH9HraU",
  "key21": "577C1DDPrM3kZJQVwaYJ9rEXMY8MCaLK1UCyXQToKAkP5UgmjDyUbUjnUkpZRG6tgYdD8DWdpfV2QUFwfVf8Kbx9",
  "key22": "VvyxuEoanjyxC2QEHeD8iL1TkWRdZGbk5LH8A4qWT3n5mAdAUXYEadSQiPzMFt5fPKMUExpZAwrqik6ZNqnN87Q",
  "key23": "2LzUDbSFyxoYndFFJ7JHUVLpU3LzAETaJNLwPCQATYgEr6QDopsfYvnUrRWxtBRoCUbtybrNSFnWYprruD3LNw1E",
  "key24": "yn1KrZQh2FuZd3cMDBiKrjdxoFsBz1wnuZR9o9ZTttTVuezWnoXe1CddmuHP2k4nwK33PgY4nmyvFdGL37SDFiX",
  "key25": "2bYTZ4AAZVyrQFqonNeNEtxLnYidkavhbXsaSN7YYGZCJFsVoLAr7eVkzGZFpo8uEtX6rojpe85aMTHbz9gUWvkT",
  "key26": "4chk9DaTwi4S2ZVmHZAwso9LBLV6A9bYFHKyqAutne4MQsakirzfsQJecDCNLQdtiaQ9nEx1SPL1bxMqaUvREp3E",
  "key27": "25zbqoywMTgHxttCfiNpcZ3agBiSs62Rs6d9eFXM24egDDRTJbaJmQxT31SNJb178vRf1EEVTUHQYHfkCdFFbfvy",
  "key28": "4BVQX3ryis8op7kQQTUJTMTfuptCCyxEtjNfqv1JshzqtncEoy1TDY5st8kmA1Jf5Uh68u1cM3wgKv6Q14XUhry9",
  "key29": "52xx1xChafPafyqh3qaLbvL58fASjb3goPxVZs9yAuTcqQvBKVEqkfXScQhoaS8mR3iaLCdB1dDJCUq2qZbCmGTB",
  "key30": "3CbMUzNkwCvrpQGvHFR4YnZv2ov67WR1WPiWsurFRmFukcDFYgmyfdDvuUWnktyg7unDhj9X1AFGnxguDMskK7WT",
  "key31": "dVhWHXSgKxFfRpaLiE4cZmvWamsCFMKFbHKuNtqR4hdYsNv3hJkGF6QBHa49EwFj6MZEyjzvRV7J2vzdLxJudFK",
  "key32": "CkypBQaUhL7KpS4kJgWTfGwDPkSiYJSSo3zHaTKcqZXU9tvR8DpmBjkMJ1HTP3PG3vt9hFzUk7EQtN49FHVU9XQ",
  "key33": "2R7yZY1GNyY5b9sctzvA4yzBokWx9S2JLGWb5vik66yeETcgNn5E93qfs9sE463XuE1GnhB36FCbun2PikJboBPd",
  "key34": "2qiCxMogT3bdR9yVbLQS8VBmWYhoDfZwjyjBECRvFit4Su1vaUKgUc1MjhGwJdadz7maAVo4SsjS3UAyn9U32SsG",
  "key35": "23Q3fbthrA7wErr2q9dwzXxp3VsfsSV7TxiVQ8JRduCk7t8fZqrv89MwwSJwFTbY3wxXBGYMLNC8zjw7kyJdFLZT",
  "key36": "2GsC9cA66jGGZ9mShiJAKuo4Jhg2u43Dhyaog71paYVtLmhdwVTkqh3NMfuc6KAfUDCdv3xt1gsi6f3vSmyTfQM",
  "key37": "3XPZTapzT4DTn7Sf5fFqFo1xJzVZsP1ESkX9TtnvTqBHGXbgHRj8pisLK91TiqCShYNfEvvo7RNGyuZE2D7ovHgz",
  "key38": "4ZzhCjxwrckGph4hoS6TYG69jdJ24u3Ry8TLVsTyNJ2AeYHwtyW2PdXxd8miGYx74k9x1BXaAHKryMxpbhE51QSo",
  "key39": "isTiu7eyKDgTS5jDVX4XR7MUYFbvamUgSnUtgQUy87bYQ8HXeLoavDfw8T5VR2BqEGrd4MWAjPcyKSri4fxA1qT",
  "key40": "4D2i8EDTKnDSo37tVq182EwUaiKVYzsJ1VSfMf6Bv4tsLyCXvoV31LQFouCEMcCdmYKu3WbqxN3R6QkG3uCU79tC",
  "key41": "5GqbXEktthchPw2V2BMpHavwryRocJ7KkSacbn1UA2XShNeTHpR6UJpeXBaekuFqXuPD6poRsS89drP8UJJLRNux",
  "key42": "4mypj95yxxWtnfnKueWNtSgeRL9MFkRPEDvxt9Znnait6Zc2MJEsQTM4DaVURHDR2qxLcj1aPmSHs69qjrk2icXx",
  "key43": "vutYYggnHx9PkLvPM4vAHjfK9Cs53EHpRqr5vUhuXpjna6busiaerNEhq4R8GH7jJatzTtKVp1ThWVjgouExBd9",
  "key44": "4iRP7QUgDinJdj21AvHbs4aJTSGENQ91XTTVyJtum5Sm3hjR2UGgKUPvLLKc5ifnDihekP1Y4181Gf4FJkVVp4Zx",
  "key45": "dBMMVhPNoFmYyzSjuQe6WsojwUg94YyPXJrUuHo3kiwdnyJuYTwUUc5ZXJN442RyZ7eeLJZNF8BeChpBEntSE5b",
  "key46": "62QwyNdYD4g3ygonFXGJWuDs793L3Pv943wwAeLYGtMbTV3JCE7CjxdpaSqWcwcyY1HHg5qUxAjHszcecWwMjs89",
  "key47": "Z8Xrv79F6Ya6F9PmrpKYs9eDzpT6Z7CEQiKvYjopdvfTeVx3Rshmht27HGUeCErZsYJUGy7TNh4A1wthJWwtq56"
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
