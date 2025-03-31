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
    "4Y7ueuCz6LBTfMY69wZdaABJHhDBYtnNfakcJ1mtZx94qCE3JisedNVKwo9QtfST9FRXwXGHJvgo38LEkKeBGdc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q9exREFQDgtiudUcH8m6ad5db7JMHH1BKjxC5iF5Vm23fi3svHMmSqJ7fApdsYr7bH3ia3xRLkHkz5FdpcTdWRU",
  "key1": "3SqaPXm8WwGtR46baAoiZ7n9YhxLhczi2XxnztRNDAeGXQ1p1rRtVeSzkzLrFDbwNDfNKwXScp7SvyLd19qGJwU4",
  "key2": "4udGUbscm6FKWXDST7VYU7NfbZREADhDVgU1DFBki3y4TFr1Q3mdZi1Afvk93SfDWwCC8mbn57QaxFtY6UsEQ1p2",
  "key3": "4RwVwW9XYHpVHdL7g58VVcGef7P7MvNfr5GWK5zJhnTLt94p7euSTfHYQ8X5yNayJS3Up28AnX5zyXjXW36sfziT",
  "key4": "2r1AVb98PaNMhvPZMgJwXqsg1Gj7CAvfDzdS1dQ6ABSPhaMk9y4rQauFSuwLVMeouqzXEhUVw3kwdebeHozXd6ve",
  "key5": "2kvXLpoWYqhy7CitrjbeoAgGfiHaNZA8914tHxiyDUZ1vcHeqtUMtGrKdRHJw2Cwytsigz7DPVbFZtk6PYQGghMA",
  "key6": "XRkBc6t738PP7v78NoPooEES1rsjnHQT7VevheKdiZTEuJer2ptNnxqBHmo8GLoSnVEn7vZ6TbNFDSK4d37752u",
  "key7": "47vZRPbBVeV1rxcSBEBKtaG7Uknsk623AuNjQ9ysNixMNXQ47XiHjPeaPakzeKUm9xQmCNB59SdZWa8RnJySqkxF",
  "key8": "5wB3zD2wMNJcH4BSCev2csEW751svkAhdrvN1H3kv68qfkNv5BoMhjsoecgm6EY4B4P3tHC6JLzWcapACu3EtdQw",
  "key9": "ixoxXq7bCaMTpMaoX21eUJBtFmwhbieSF9GAsNSVAnQ14dRXbRafoenH6nHKyxkwYjAaNy4fv11fQRowJyZgZZS",
  "key10": "kHYZh7fsVUqk5dLHx1WC3VhSD2C6Ydy8zV3WhcmzeAZwGr6pmcqpGoKAfCDy7nthyptwBEmYRKhkeJWkBCyRF3L",
  "key11": "3vr4TbjmNuZzMS9zJKmREKSAgKC8pELTTN1YcnsUYdHAuhpFnuWy49JeTCMUY4kdSuDZ386qNXsa4kyNBN58H8bt",
  "key12": "2Px68eNM4EhHsLscy2DeN6Tpyr2yRnL3jLnC6ob6j2AnPuZXLX1c3XfG1Sd2coiyKVZ7hbERhDbLEVp3Lb4UVmhh",
  "key13": "34gmMr9dvErUQqxjMxtGhoXkztg7YQ4R9MfGi7jwg9XhEkN4JhG2yNe97ja6RWeK1Tn48UtT8QPCVjpuNprqu24S",
  "key14": "AJrDRCn8BbPctuxa1Wb9yqsmM8DkGV89QNuvtEEwN9BmwzgCZA7vb8dnZQyfwJWMcv2JBHcCJK7NDDMREHiuqPQ",
  "key15": "4jTwyjp6SXuHKDiXVkXHeN8cnwAoqR14ESH1mJ12xdjEPwyF2JjNvdBKqoehTci7DvbArA2J3UenUw1qx5PwYpaL",
  "key16": "5gRe8YWNbyhsGbSbk13BvRATDz3kLhhmnvSLMsWgsLRYpZzPs7dsmWzFoceyC83XYE3W5qfT9QE32LLgURNeyZ8M",
  "key17": "3fqFAJp763S2fTiRwEoj5fyBugqW2UdvhcFqzn1G5d8M7uYnFGyKThqbVvbEytLsDLNdJkhJYw81kvydNVGsV6M3",
  "key18": "9W4UwbkcdrQLAbqGNv8HqokYPW5LGejbKveCM9G6jcot46Cdh8MEoB5yRVr73T4uJ8zbJzvkgMkNgj5ieXWAwf9",
  "key19": "5hJD1kpvN14NWpDpCeGdpFyEPZ1bjB52ptVDAPBkaYYJaMe7Pv4HajXRasjeL35N52ihibSLTn67gnbt2LavSVgA",
  "key20": "4FagnyZju85z8m6ap1SEpzNtQwSR2wK7ZLgrGisSoDSpvAgahQTQsKsZjNUcBEBh6hZw3vpq5pbYiBjLY1My7HUL",
  "key21": "4mPKM4ncRmTV8BCvZDi5qhQmVwLsMHUY2p68WKjgpNNL6sjK7fULzQCt3DRUkndkkSKkq3yH4zqk7Z8Rqqr9fUmB",
  "key22": "4sDGE363m8M5t4KSC8bT3bfsLPYd8x3Xz3P59ZCz8SfnPazdARKdPGmHHDQ5eGw3gsa7W5f3HdyFyA56KeYNfPmc",
  "key23": "QDoGucLGwpT5qEEuZvCvPQMdkGr5BnPR7PfeYwWoCFASadTGTvRuk5K5jbvQqHd5m8J5MEJd9V2fHhxEdu5YFBm",
  "key24": "kDm6tfWfs1EPrRqetNZzLLRit7RmEiXsmLFp6wVyj3jkxiFda1RSy61WYwM4QvWHEYdjgWEPciqXTjut5ZBLgSk",
  "key25": "5PKeiCPWUp4fWvSacGYKApsbcCbtRES3H485jQEhUndyDqwdpguBHYxfxjyP8fqwJ8XGtCyCP9wnvMo8bvdyLBBT",
  "key26": "4QA7TzjWjanuCb7LdcCWi6isPwAwvFgZQgndFdDwSbA6yLm6GABsspUuaTAx7Kd6xxqVQQmkUjJw9Tcu2RxVJvrd",
  "key27": "5HLWTkBUTEFskaJEievG8gvugxrySZGPvdSE85KeW5gpzt7uE2MPARkeLFC9cYZE2iGsALQog3LBbMWbXrwkn9QE",
  "key28": "5Vrgyg6k8SpmSrZjpZqcvEaRfkKnK1k6EFbDgdfuieCnp3LzQ3b6bNgTYYqpZDut9sTEssvpFVPgHrGvkpd78PMD",
  "key29": "2fidzejVj5knCD6w1y595PTXnrNA6Xd2KEqc9oEFBQ1eZDVBer6GaRjzDEkuCftjypPNBgQeEsqiN7jyvQQZScdL",
  "key30": "4MeG17SGBE5HBoEi6CEYz9o8BkwYqmXB1nWSfFs2tNkYPt4Nd3Q1gJQiNcTPGvJR8nu6wZvcSbCkSYzcXULMUmGH",
  "key31": "4kL3RkPq8Va89AZU353yphM5cYWruK4xzm1WiZaMWZdK5fx7Hqq2XFb3AjWSQkGpHXoC9tSQcNHU4ZMyhWbH1XA6",
  "key32": "3LYRAi4yJMWa1y1zrXXEn4graZftqyVPW9RunngeYvMZZDpN1ndZsuj83NH5G67K6jPeg4xKq8w4NsfMkFHTV5fj",
  "key33": "3ji9ZPW5WH9yoxL8pYEUokqoYqwGoBoCNEHTZdyxXrt6fGRqvB56NCoAwEEuTnG5zGP8E2Ef4TbSxqczPfSLCtg5",
  "key34": "wC7Lj8UyaT3jHTu2oypGZeVLXzmN7SfzcPWKVyD5M9Pe58Vf5YgZRVomqiFSpF3Z1aF15Udn27GTEiTGgP3QRfC",
  "key35": "3NMymVYed9jq78NhjeMtSSjVfE7bRyu4tAYwL2HPD6w7f92UW33KoKxSCjYnLgWBE8Y6Wgjz7w8amAKLWkesq6cs",
  "key36": "4vYTssue66U7ahDRNmbu1i28CvMe5d8tbkSSuBdZCzsMiTBdwdWPM5QoehNWstzz8zLCREyHRmuTfU3SeDoXuRvT",
  "key37": "45BGZHR4WNzaDwC9dKw1hPLazYzW4SBqoYtG1A1tU21h3krCchE5LdBs8UYY5nVzVWA8q1JidPCzimsYaeqEtGjX",
  "key38": "2dUrFcNW2vcpiSsDes2dAqFc8eFqnyB8T5CFv76J7QFhmj6HzKvwQEGbJeYrrmU2PXGoyDSK7uZSPWCVasyrAdxe",
  "key39": "2dFPUnh851ze41DHCUbiu9yMdiaV4RJsL2K4mrmAsQpXganTSzyfzCC3jEMRQGoys86NRjAsKNaRdHw8SHuPvA2b",
  "key40": "22939jk6GEmanTZf5rRKy6JsqRfotqeZsYs2Au7zRr6FJBUsRBEwqKCpQD1wsv32aPUET3F35TV5tfQiNkTEb74S",
  "key41": "2tkq1mWXAfmAD7igQeMiNg9BCYR3fPFpWWDzHB9TjeqPnuaehW2319dBuAypPFEEva95S6rXELeNAX6xDfYPsgic",
  "key42": "3oKabuECnaWrjP5vpESNL8xzC839KCsaAoNnsmErTkZSfNwTDjfPumviDnDSBoBiHb1jGa77J58gq78XRffujkEJ",
  "key43": "jQVjCUPa57BbuM8BG9ZRPBngGMbfwCPwtqrDarqWz1HaNgjfJ5ZdoUEFc2wnqhNC1SFBJULGTLwqZBwSbG8cNHk",
  "key44": "4WPCgWHzn93jjtQkk1w1L4ujUc58oEYsUhR2QEvbZuowZA15bsaJiedZxXL24rzozEHw75hMtj2R4YDPwytR2mbX",
  "key45": "5dShMgUbGi2LnbkMkmXukEY2hbXuj3uAHy5WvERP2ea2aPHShFC1HkUQyjQZ5Wzk2Z9S46PBuy8GK6PjdbNKiy4D",
  "key46": "4s2qHUVYK9ipppuAk7rBtfHP3JWyuD7Z5hUDYJMjHExgX9cHZqNPC4h6kvFa2b5ZC4iBJ7KEq1q4sJi4Hum8fEuk"
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
