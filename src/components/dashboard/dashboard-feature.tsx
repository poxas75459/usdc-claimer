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
    "231PYQZNrjdkFESzJpYozgjNNPYA8a9muqrw4HTykuGs1Tn9pdZhbU95HPpNXJKmgyfAQkRSnVYoPBgPQFs299E8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CRyhja99v1SRu5obyp72zknSFYRy6JigVPYi49cRY6f5A7whUojF9brdsE6K9wrcbZRCeSEXHUFwquLfDjbN7Le",
  "key1": "2fMN6ifMBvgVKNgLibPmesJRi7TWApB3tLVQ2NC3ZuqKo9CVg2JDWeu7ki4Byv1qoATo5S5qUVq2mXLu5AazKFge",
  "key2": "LDEyT8HEoX8m6U8p8LxWD8vnT7gZ18gszpuu5hHK6r3rzLXU1jo69DXYMAeCvzfQiXhY1mUPbshC8mi57qugwBM",
  "key3": "3pG6kCroQYAuN8BZNU48aqHq69NPifZBGa7zto6WsXvviYL4KfASSEmYuyVkrmSZGtSGsbb9WAiVDYqzj1YZF4PF",
  "key4": "62fLRq7Rz6vNTxoXTAkT61PEiA6as59jyqcsXzca63zXnHUErbLsuGSNLyNp1SkJVg8S3MAxbx8cKNYnrdrqHM99",
  "key5": "29yuFTXPih9b2Xy7Ke6Wch4kiiV9NcwkDjjgn5qmbZ1bvxCFgWDVoM8dgFdh84V4R6bwtJGdEufwhYg4TtE3SaLE",
  "key6": "26BAPFdaf6DjjM51JsfyZ1SeCLU26krDq9KT8yvgKhidpLMckRkPnd32BMspb6dDVG6wUeRn7Mw9JN4VzPDqE5Bk",
  "key7": "4PbL2m6qqNfSD35bGgo1YnMaUbjwiBGWbcmw7UrpMSu4LpWySBK93dnaVZ91NPa5RNocLhE8wcm9crmqxozbYMj2",
  "key8": "2F59WwbjwCH1BrrJS12vspHXdCp9sbWLw5pJbs6anP82AGqzfjjDgrohGFBPcshimV2DsFYCvZxrBdEi3HEwouKC",
  "key9": "5hQeyvEsgffU1Tn1BE5VC3s3Pqpi1KUJSH3WcnaLUnzwtCxS53crQfbj8x9u1cRtFWyJzBmDAj3mqZLgoG2yNd8n",
  "key10": "4Lf51Gpen5kAVE1P1Jv5wL9FcELiZU9sMiCmodXpHfqWQY7EmRf4vUgZR7rmcSnq2NcQURP9HL9oVzxuy9VmgvAA",
  "key11": "2p6TZcAufSNf8BwgmP7d3AJrWWtDY8wXDbzccSqyL7xBs2sH98wYVtH97oVxEVDconQJZCzCsBdGiGxpStEtcXao",
  "key12": "uGHMrZVhohhTrqKkorAjjWQnL3WBisc5ZeoPkD9UeYkNLiyxMcxkV3FyUajeaqhepspmM7p9bz4RXmWbYMua9d6",
  "key13": "2ieMxdBRF2ykXCQAtPv9hgMJkmRKnftUZRBFjFVsFMXZxMgcahkY9NXrdbJiJB7uzo8Wva5HDHrybF1LnM25bX2B",
  "key14": "3kvV4rdg9Mx6sN1G8H4moYhN7DshAmfvTNDdkyjGeHTsqBp3Y99aXbsfdBuJmzL6pqES9VLXWALXW8QEzce5uCxR",
  "key15": "2q5cCp2PyXm4oMcViK28MPP8APd1n3GmGU6xCfZSs65CmBWsrmgL1Me3s7XgQuaV1ByKAw4U8EvULmPTVVYpd3bd",
  "key16": "459TYyeUc3yDYXPkTTykNtdaWihqehAP9CzYbDSdNxRvwm1UJE4rrEEApt9x33Uv2e6aeodHjVhXwMdqurYSumWF",
  "key17": "2h459XeE4FJtcMBX143ygCnk8fCTkVzTubSiJHfFTFFSLaeWRHJH5jD9S2kxbTf33vi6e778QPFWZvUyrMLrDUhC",
  "key18": "v3nwM2E9iEGH5Qz1VXDG5xVyHqMnoJcotDrrWWS3nJb1ZdvGkd5swCMbJRsy8d6Qv4DKggEn2gM2HzU7qd4MUeg",
  "key19": "5XiTezkXk47bjXi3KwifncwdHLa4jYCnPTD1cPEAtHjrKyETWu3We7BUJk9Ld2ZD7LCYmSmePaxYDY6WLgc41Qvy",
  "key20": "4kX3A9c1o7a52dCAVUdWJAnowLDC5SY4vsAzd7tmQLP2GzLtmREnMnLiqgVvixcoFaHcoNS4hpRWJBxodo2qaDbU",
  "key21": "AQMpK6fkp2doq6zgyeEa8KRiHjgcExWxBWWDK98iPdPWx9KvGphstp3ro7JA648xmqVava5UcvbjNKZpCVN5S1F",
  "key22": "2Sef7773jA7Ta3nNzDCmt9i2guNNsAkj7NdYGZpZDk1bZbsVMTXK5d8Lr7qDC4g9woKKRAFYV9CMP9e24bbjNCWi",
  "key23": "4e8TU5qVfA9h9RQM6JWkBE86pDPF3Se6nxB614SzGx7xmeoo2XfyRgfkr7sB5jWwQy44VxtDh7H4LCApSLpK7ULw",
  "key24": "DozxP3Mhz9i4hKUvFyx8ThW8PSPYAjaDC2UjUwbndqPgpNAPVzoZMK6FUCUpUah17L4pwp3KBDdsrepcatfzFQy",
  "key25": "3Ag8dgoUTtP2HCJ7eUjCKWV4Zuh5syUrYFjJi9m6tUt1X2r6eB8bcuRc9WbdPgj2JS95AQkjp5dc24f8Dmjgokpd",
  "key26": "34owNkPXGHWF6mYYWNcG2aRUg75ZCqbc3i8zXbeV4bgXzXGnkcDQuLqzzwTYc6SAf32qN5SGcu25hjKn7xNUbQgK",
  "key27": "a71tVzbJKdrhbkBAHgz4afGc5PRazs2tJJHbjv7RPkXvsFhLDvuDFLKxqeV6LA5c7vbTsxNgRXoPn3LRk7g4hbD",
  "key28": "cQiSWcWrb1CYYGqDEyyAk8vqRXmgkE5CDe7vG8rS1uJQ4Qm4kSzWbPZHJvAbmoif9ziGh1FshMRAuNLf6VEuNQH",
  "key29": "4iCHzxPqj1xtveqpJTjobr6eXbdUfGFPNsDZDasnXYZHh6hsYoxJU4QHKomcdrpHEENz2EgatWYSSAKiKa2a9o1r",
  "key30": "5vgs28jKeL4Nr2NJLK9bsS4qA1pkrGfUw783h6byNyVe7tu8paiKzWjhPTUv5hafSa4a6DhJcWfCvpj1iUvT3fMD",
  "key31": "67SLcosE63JVQ7KJunKnhxFLcvm2r9uw29UXMZx7EQybNDP3C4sse6vPtNzXwFbn1FUTiorsFV585i9nwm4p1VYp",
  "key32": "2tCsRMSMmjNHTDGquuPubUJyxMLtQp2WVXNLaKKErtq6BtdxDZEyu8phKhRHKptXGeysBT9gf6VjET3Nk3VS6S5T",
  "key33": "3gWYGu5xh1bf7bt6bgAegCYsyeqZsQvsy5NXQsQ3WZoMZUXLwL5kdxeyHF8Tgf6CfxdwHfUFKuLvTjGsQDTHawnJ",
  "key34": "bnM8ivdrrqLQpFG8zGDWmRLtr1r5yD7Am442TD9yr9Ndhnc7oRvgsGK7peZDxgpqj7BDmjr4o5QybM6GmdHuU2D",
  "key35": "4ToAZUCky8hHUqth94ZRjxwuJmJeCkEMLfFd5QQpuu9iGv3YiBsUzfsmZDKbQ6TAEh3DKvJ5ArR9wTeH2Uby4BcA",
  "key36": "5FGfnQW2yXU6rrPUtURtfs8j5mGSfT5mmnhGynfhF18bxUWGR85UuZ4PU2oFUT4AFLuE4k9UGiFPeAgbUAvPGMaL",
  "key37": "ryuGYBm7AYZHN8LV637NXpzbKuNiKiD5nRy6sFXmeYLJ218km6gZbLSY3guEzeRBDubuyNX3fjKmcrjKmpfx51W",
  "key38": "5HQJgfEznBD7vbFJDE7c2KVFrHRKWhGoRCYch3EfL3Mwp5cN2zHMUDFQfiWeAuk3WLDL197J9rGDQeNYtVe61r3Q",
  "key39": "59aiLK8JEsSTpaKfyaTdMCfQx1hehC5Q2JVTXJDgJuSpX6bKhQH4QdfZVJx4kGWEv8VKnGvomAvEjZXTuXU8dT2P",
  "key40": "4tZ7i5f17fLsLeEr8DN96wV77qnMU6JJ2FRenpTvzpbW7MYY77cgTQQ9WiLgbHMeJhZgj8NwvKoEGJriGE7ft8H9",
  "key41": "4GP5qNYoektW7qXwqjmWnsq6SUf57ZLjMgf6X9Z7k9FSUPwdsvYYpP1GjhyXtaA7oZM3bts1qNe28hCQs9Ptu3XP",
  "key42": "4PKswgJQa68TW8aqvLfJrrAumX1zGxiZup8rskis5cmBB1pzKMg37iqYYPAijtMsr5DpTfFXXmtidsg6B69EgiUa",
  "key43": "5TgV134d4ftWXNYxHyqjaCSUVHF2B8VvNtajuocFWxVDWKWgK6xB5qrN5qvvSnpHJxRF9SvGqGSwqWJ9GgrDyxe1",
  "key44": "27q5EW5cAtQXgKhBThirru2jmAjeDcDnwFzVRZjp8YywV4E6KRFSBxWy6BRVycAWoaEbx5Y4KWapZ7GBpgJURhuf",
  "key45": "4dD4Eyi95ij2tQ95eREo2zW52d1FDvWzMBZhL9kgKUS5cPSneJKNNjvTvbdaAhpDywCwaQthPsCedgZEFk3pteCg",
  "key46": "32khMcyBy11kTSzSm3pvPN7bQzvcXmPnfQGqUUxBApd3pt5fCNkaazBxDkn8AVXeeA8JNb1qE6GT1DB6j8rtQ98U",
  "key47": "2z97Hvon7ddhddBwEcPtVXo1LAfKr6yFFm2AFj1uY7gu1mGLLDnRstpfa5p4KC5ugRA4aP2cMvg3LVtdHtSFzEWK",
  "key48": "2VH8o6CZXZEogSrgEFi3Duypv7YFhdq53WkmhiuDE8DYDoxgaxcDwrXHND4GHqwM8TN191VP9RY3bdZDhxy8x4Sw"
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
