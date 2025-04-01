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
    "39oHoSk6n3NJf5n4anjrBDXwjBz6kYX7jRehCvZQUA2XgJc2znTJ6UVf6v3ftbEvKpX3NTgmy2cGmm8f1a8Syttx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w9WW5vPgiBdS98sc93K3teRU5tonJMQ1CLx6rSuVaooFdYuYYDo2geYWSXu7TgvLjjCxtuUCZHN7fWf89Q9y3nD",
  "key1": "28arLWFRaXud61PaR1xDmx5aQLcPposLjTjYW8sXLcbZ15ewBMZeJtPEgxVbUJzJwAen6Z17hDseKeb9ZiEiCYGK",
  "key2": "3vUXYp4e4wHMCWWKy7rvxPdVgYEt98H5Mg7amySD9p7MVjkqpqaRSPjdvkQTEMgaoYBqmsFLzVu3iJL9Wsw2UoQ1",
  "key3": "5aR6CPeUv9G8tPKMjzc9AEPNoTZngsnp1EU4X59H4q6fKQ3MAXfLA8NW3Ary5CKABVwTBnpoNEF8j9ySP8xCSLK1",
  "key4": "34uhf4mE9StwoNhqyiGeTSnp3gQwhfLL9BbH4LxyNJbKpkrxPxb58UFFZX5pkahXy9Cz4kVPy1iF7EdgV81GdgnD",
  "key5": "2rBAB7fzB9L85bLu7giDzwuayG4twaDwE2FN6EapKRg6cEawSPcRADXrC2ZrUmWY211V3zj1k6NxzqMb5wWdhq4f",
  "key6": "4SKy4aheALUJbzAawnMhGggKSaRTokNTPH6gz5Tbv6NQCcSgA9brRtXjorpzqJ3qYtAL8gNXiNaEPeCXa6Gf6jVe",
  "key7": "Xy3gQZNZSEAVBZLtM71vBemywyYCLEZC8JTyz2d6u6s2kiVM95vZxNes3GmyHD7EcWdS92cPQXk19bR58oMkwuu",
  "key8": "26Fo4jbib2ex3PcxLczyzxEcNccHGNpzdu8KsmP6z9vPsVFtL25DNonDBPDdh7Mkh8USvBHBXxGdunyEuxkxsWPk",
  "key9": "6795dp5FmoSVYH5EepcyP6dVNCocGk9v53VfZdKgp2CxbFQGYzxbTgj3BfDb75u1MRgNMS2seyZxqJi75Jangh4T",
  "key10": "5iLZfWVRW9E2X5SFibrtuvwKpdKX7shLGWgZS9isydfDgrvVYeDcyQJLCbiDCQiFk9EBGdoRtaU3dK2Xghv4fPPt",
  "key11": "5ZHUU8BDpEx7jXtBfWMZserK4r7nep1YDp3hCuYxEEZ35fMBR6jToM2zwnnP2Mhu19F6HULkFYMWXJ4As1nWNbqJ",
  "key12": "3Y14w1Shaboag7zbQxk3c9zGNMRSHdwBW58ZPpcHrHH41jtmfRX3p6HWPmcspHKybDDN19uNgCpAwdbC3x6VLzdt",
  "key13": "2bo1YU5MGs2WrETUwSQGZcQk2J8YBc7xWnKD6j89jEi2tNMxUsRrLGqoBpQd5km1FBk7EUfzgTMRZLhPKGTYS1nb",
  "key14": "4Z6cNn7Wuj4rV2sbfLsHzKyjSWeSDd6hPEATdK3XqpV6aTrXmwycXj32Xgr6V6RPxcTJN6hBhs6aAEPLKnNSbEan",
  "key15": "wgM6DteGUs3nvnzS8pRe9ggUPnMWCnH6acHVLEGUTtDzQn5zgfNTZakHusAiPiEVSUe6ELWnZLPwwdFrYLLCRyS",
  "key16": "4uFRjwqAQtdY2iSJFww5jBK5rQostMKfvutwSeCK7g2Cr1RUCeavDWcteTtagpWkQQvwQ1BxUrmhPQU7miXxGgwg",
  "key17": "5jZPZ82D6GZRhu9HWY8eWNCAAvsaaEUvp2A6jLjCTCVCRegdL4TLitWd16sHahHJRWuXenBUqPsTYqfUMcRoc1xk",
  "key18": "5MKtDwJwvLEK3TnAnLYfBjGdvjSaUK3zYA4r4gbiHkT4nntPw5swrdX722r5tEUDwJVaiREDKBZAxijc71mgNdAM",
  "key19": "2UFoGE5jcKjFsCq1Z5rgCEGSxJGmGLkDUPGzWpEhXUmQTGCY81yhLUFBEvBVFYJp6FZRjZe2nrWBotAb6yprDLwD",
  "key20": "53hrBXjEJ3zGHFfLa7ujB5stiSLXd2xEFMaxbDH3Yk3ijxAiJzJ9scKWqYfK5zGNBtenW77bT6FRmkEvMAmdRG4g",
  "key21": "33PRdye3YahamxF45xU9gs2RfS2Bto41aXsoqYNR1NyGkioaVFWJ717kVCYGi13EZ3fHqsuP1fuxfSSMrpGKGQ8v",
  "key22": "4NrrkxN4ujmyaqpFexuqMAhUJYkR3bdLCtnXsefoKnG3yiZPirGigCZN6ngTJTQUboijC1dPW7YBKdC3fxm6JxZh",
  "key23": "wRfGapFE6HstFGxysBB5N6t7MyYeRJfJEpb5m2FRxeBVQLSCNA6WjnuCrgr7tmZyt4sgj1LoU4k1c5h229MxoSZ",
  "key24": "3fyHzGaVBF8xWKb6i96zFgTEuWtpPdfTnyUM1t8wkAnnSgfzVB4WKZKnjR7JwFtWXJLiBwzPNakrWonH5W3HEZo6",
  "key25": "3QcXgVQMMDThriCKDtHcYcU8DfXvqKrgUhXzSoYTC9Kb7vhtW32KDLacueSBvxoy6BY3L5sEtqmw2sSLgx3mYCFg",
  "key26": "Tc49uZSi8S8Gu5G7kG6CJfYG6EXgueTuRFpxy9kYL8EHg6Qxhc8vTaWkqrBGk9EANr1WeaYUJjp8V8VpaXKnZNi",
  "key27": "3qUps6mbad88qBvAucyN6j4cM82hrXWJK7Kuyg9Z2Ng92tVA8T8pnoJeq4RQTepVDSzLBaeYXYo5cQFQwV4aw2x3",
  "key28": "4Z9WWbTiBDnqbkn1tV4FSiLT3gWjUyLwYmugTM7N3vpUWhrSCwhwacBBhESPLr3UygL2UsfKjA36r3YqUJFMeLK",
  "key29": "AzLqHkwvefNKw16Hhzw9H9X86AVpFcW6Y2jLqSPFSbrcVdDH425ZoJ8SwMkPcVQbJsXQWXjaPZLTprC3jujk2sC",
  "key30": "JGVZeJgCj5fbScbfP3zsof7SHxu9tc9sXRxky6J4e1Vp8Kre391xfNYFGnS7zpjZdzj79LhvFUSQ75csBTuvrCR",
  "key31": "T7HFNyWUnjvKhBmwZ2TVJpkF8ba8sXVvGwpq4qTw1NPYsfZffgiDgnsxFR18rn2F73TZtqGanJdihSbCth19nPE",
  "key32": "5DCgBWP8UELi86KiVeMEJUaoen485rzfz7LYuKqbcVgJ5BQ3gYLXQCazGZ7Uz3aNymkauvUeZoR69UJwiAiEQBAP",
  "key33": "2Ty6QndMAcqnXWLLEHFbLqWAamgEcoUeEbUCQaYtoKXLRSFRu3qYpEouX6nzZbWYyYAmRb7xiasTZZjTsT6h1Ckv",
  "key34": "3Xc2UJLUvwXtSBec2mam1yGW1sSb8r2x12CFZBdGXFtT8jcoQ41yKPkPmLMRegkSDfvj8w876Up8tQhHsSHEr7uW",
  "key35": "3piFswFpAfT8m2gChQrasvirgv3ELwoJSDYNyifYikhH2t2fBvLqUFtxdui7cRyia9ZHqc2gQRTKwsjmG3GLHF7g",
  "key36": "4DrfZAYZTGJYDWdpyNQiYPwdoqY3aQsXG8tV9d4Eg8akHgGKMJaY9grBgLazadw1NYyKjkqFTfAkmgqVkAFnwcTP",
  "key37": "3msqEoW6VbGLDbbsEUR94YErEiemNxqrwdb4GpczewxTiPiMVVowGMeZGndGoiywKssvsNbxeYNbNTwnn1yFeTv2",
  "key38": "XiCrd8wBtNqRCx5unc3HDVHAfLPffaA36TghxEeim7UPJykAfDkC6MtJ2BkJLTuBWjJQCsr6u1HHnZBt44RdV5U",
  "key39": "5eTVXHvXpotx6puaJHjBcziWqKxuqF9b4A5QqqAAKhn8h7wxkUhngpQaSE41nGuqamKX3t7rUWbxRyz1bADfej7d",
  "key40": "FFnsoBKA5UUgQvEud8YPxhjrLwtYnG8hVkdHbqtEkQNm1JjkYmvrcz1BCoc6ErcWXReNPoZoGkJgp8ReCRDs44j",
  "key41": "29vgazeo69rkUtE6swv3UrdvPiDcmVSTvZPNCCH8gSvBw9LSeAz7TVjUCFNWzsmwyAd1pcACyPwL2CpkHokwrGNb",
  "key42": "3xYPRsmFS8N7A2J7QJHbk7MEuNeUxg6de7o7krBCJXrpn3QFqbqBSDqYFTPguohKtP7ZcNBMpZvEeTV1XDJzpkkY",
  "key43": "4sNZFxC2ZCk99U6PC6WiLSL1o97NMvk3uHgPrpFzosGwJPxBCftXzaKjyYFR93JAjxMsDFnPw7gNowwjFDpPKE1v",
  "key44": "5RHjHahyCQaRq3oghdtuZaEoLzvbYFaAaxwxLWzsrEM4Py6fqoE98pa1yVnqwGNpSjMNwaJQ1aqzEU455YBa3Zb5"
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
