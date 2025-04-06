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
    "584V6E6sE96Chena6gJoDZNb5vJy6y5Ks4GDp5ZR8nzwQ6fLwUJUjEQH3yZA5LSvSVD5Vdc8HsxZZvkVr3ucvkkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b6SKTTXSGXdDZ9su5eZqNGApe87kBGwxSMCM3dnLEKBTg2UT9izX8dQmwJeV8NumquiTtTf7Tz43rUE9FYyZSKA",
  "key1": "4aHVrFB6MDfTVDL7htN8Hz3g69JEbCVKsmiBb4y9szDhCKdsYySW6GikqEa28CVELbcx7a4e33uLL7N1RjcrHyCk",
  "key2": "EgF3TDNDEfkkTz9NQ4LqVZRAvH5Kqse3ppcB5FraAnYCBPe4AdLQ9xAqMtWRQb9Wetb7ZtzsPAoud4TWd7PhtQW",
  "key3": "3CS7vuWhHJuc6BGday2Y7kyJkBwCJqTRTrhvkn3rufBRjsWJ2R3rQ8cxYkqv62J1DmymBBjP6WtBdZxi6M5HCoSe",
  "key4": "5ATvGdTtoeTGo2YnRGGmhg4hyfXpyGMYQUkC9aiQU3iLbyW1B7Q4uvwfQQafhujFvCx1tUV78gFXNQy8YcAJM6q5",
  "key5": "bmwGrUd2Vb25aGwT2LyHmFwV9wxrDeUd3UHtUeQR5TzYDTrpox615ajqNn5xJFWkgM7QnovxGuCrD7SLajvLxSz",
  "key6": "4c7rjXpbinYsU1kwD4mx9yge4Q3V8gEL7WXV5JMYCWRG5BCCh5CWiTuEnCjmsFhzufL83e2BDZeXwPeG6csuHydw",
  "key7": "5y3h7kZGhEeQbePHPRvFj1oJ9SGGYN8W4dRGLSD5UoNAdZ6JJARfjxPCa1Z2NrvZvQmhzDVJFCPxc5NfDTBPn7nc",
  "key8": "5Cp8JgV94FJ58GuE9fZh5svwpzH9UUNNgVpMdLZ6hyum4vXpHFaS1KfG9iVDJHy4xMJ2myv7FEFnRm4RMwNb8rng",
  "key9": "3swrgTT924FC9rRu1nM4h5edmDhcQD1jrvDtLCxrHSHQUjm7Vf7nNHm7rXBKQcJ7fSHafHEsbXV3WAkeni6qp3qY",
  "key10": "U1gS8BZ1FkWeKD2beDBSxSdxWHVqYXcAN5SgNmSgziy45YstWGpevnWgQgVfJvHBmzYrVjRLsZ9FXzTZAo5CKAQ",
  "key11": "2V2NPf8eTH6pSVLjd3UDB5mf4booB9hYJtWWULw224ggcp2ZtraVqB27t9jCBs9KbAG2iFwPo4BdKVguX3aogpBS",
  "key12": "5Y79agxwXp38fUspUen6UjNgQNt2qjY3QBGGY9yL7A2xuVkwucCTFD2abYRYAwN44vNseM4exz17D3tWqjfbK6m3",
  "key13": "2j75DeKaaQXonsGTPMrXHkpu3VDvuHh2T4gkHK9i9MY7dGer6P1tV9hop854pbAoDMPe3fqhEuCn26HP8tWcJzAx",
  "key14": "2JBQeteR8EmbJara6HASaRKZ75Biig4G5wYUzZHiRY1c5uXg6B5osSELiXhb87L9b5gq64uTefix7xEqfq87jhfY",
  "key15": "3Jn1jaoAriASYb5Jo4KSVPyYWaB1D5CvHorXEmNDJtsRDJH11BA9kb5wHBCDNmAiPR1fHCswzo7rTXHu2DpKedZR",
  "key16": "5eB95LVoB97x9UciW5FMdnCFLQ3LhovVNGf2NVg5fKQ9CbPTAyjdcTinsncGzApJGCEGR8NCs4mS54DdoT2K5qvr",
  "key17": "2A2FmXDsioA9GGJFvrfUmSN4njGdhnfEMdyBGWU8P2JEByjD1QQV4LAp93ZBq6qT9a9mqninj4SsoMEBcLJgY9Cn",
  "key18": "yMH28Sm9pzE92JXyg2NDDKeYFasb3oDJshTyQ3jsnYCqThCzctC3TsuhqVDpMEn5okx7v6TfLQ9MoJwbXNbcgKJ",
  "key19": "4HQ7EnUwjyx6V8P9mggLRhdvfUjTM5sYXVL6BwzaboKVnTdK3g1th6C46EuMe6RjkCqbyi8BjHpkAnHmWCN85a6N",
  "key20": "49c4u4Cb2hcFzssLkAHpeeSVqZ4WQNWwozaBn1nvez9Z15EEBfQAGogpxA4XoeG7iJ8py8Y7NmsXpX1ZgKVMoFkC",
  "key21": "561EkDrpHNtui8wo8PJcVUdSmtMn5mvYK94T9sWBF8j6QmekUNckvCjMCZAzMFD5ScAx1PLwC3aZhTcqmrRdY6gj",
  "key22": "3EAwxsYuCbbEBHqf8uuunvu8aAEJscdM6fSbi4AEnsBuD4ahVFhVN47i2A4gZnVqCLzbPL53WS35V86ygHuggecf",
  "key23": "23sS1GFXD9TaYjDDwxTojhNW1NcqVvqcJEZJ1gkGWPvpXQNR2V2BVAda3W6fAnFwo9szntG6bQa9C1cF5u12Yy2k",
  "key24": "28scq6Z1xN3Vib98S5xXCMxXdaHBta7shBZFQnEENFdrkGzpWxqaF5DUpYF4dyBvp3umwCDSNXz1R41A2gKFBDsa",
  "key25": "4ufazP9RjSH1jSuiYbuiwURJU5sMnUStC2oiJbK9JFFJuoyL6DKTdxxTYUHxdzzbXUXca1kceKGgCFsLdk8RjwcX",
  "key26": "5xpSCPMQgnCjpyvH1UWSSnd1ix6oNDCHZrU8tg4UW1Ziem2PsRW4DDKDog9zXsBSAYbZF72bxVWubVgWQ1pePm9g",
  "key27": "5evB5rsvSjVnq7JkQzxSpDpUoF8skCJ57foEFbgJSc5U8JgSbHm4BgL5SQRmAzL7XkmCgZQXhFEBGTzUTUNEAdjE",
  "key28": "3FkbzvEAgGrTqUsDJggPB7mE6MqJDvzTVr9NRAnZSfqKDR9sf9fZTxccaxMCDXvC72axtYMssAypuGWutASjBB2K",
  "key29": "2mH8oy8S5Ur721RcvFjQdAsyboXUQEg9gvADvroUZ8hhNpFeDSVbTLnCfobabqje6UoniMgbB1QAHkUj7KxyEnGG",
  "key30": "3afjD48jir1kTzsD92DfQUNB5kJpPpHFApaJSF3jUEbYkQHZPy6ZScojCGa55v5yx2NUF3cauH8FYyrY7E9jcxZd",
  "key31": "5MqiWjs6Ngx8cQ23X99rraPx85MvTS81q53CHKh1aHkFwZkGzMmUKTQVKUBxrWxFyhGcM52Tv3hDw2fd6qnoSaTw",
  "key32": "3jSVvDHRXT8wz8c11hP3TvDLqRkLVsxovbYyjpvPFbGnyNh9k9jYbsuikmUKBYF4uFcYkb4iNzBoJhJcd2uhvQfF",
  "key33": "3viT4yVjrU8RRZXVTZWBLcXDkD2oGxceV42JT6teZ8getYmKc2ZKznHdrQ9oiTTCiE2ftAtjrkbQ5cKXmf7wzHxR",
  "key34": "3uHYUk8DbEHPf7kYvrKqipRXj48p5BDEGpn79PZYhw2Txj1NREewD3g7UqohND21aRDPodkfAgoRcXMRQkysfBFh",
  "key35": "3bEyrMy8KS6RcAEGiXDZzp3TgfsPYrD814VGotmCu7UK91yHrsAm78yjdKugkSyFu8YFfbzMyjpJtLBPjk76H4hm",
  "key36": "2QdjV9MrzVZgYKXf9nPY6MxwesE1CBTgQvXzccAZBpkbrkXCw4UNPLHRem2VyFYcZfwcopBNyPczPYHkTYcutUpJ",
  "key37": "2gMrbLWZEPKPoTNdTgFGADwHdLEXnvDW9naRH7i4nVJ1VX1PbYGfpu2c1kDrQA8ACo6oSzPyrUEKA9MKZ12rsEP3",
  "key38": "2GLy7wa5HfkFmQTfNVpJzhfB9CDr9LhEAsNThqLVWEoQmG6eyvnW8sbG8SVrVN9SC15YfFqMZdrnoxgSDowoA7Zv",
  "key39": "5Ef1Vr4gASSh7W8fkguVcA9JUwZcS1dAsepA4EhFKESRpnquYAD5789ws5hYH82QG6CMvhdjFrDyU6fijMnixfw7",
  "key40": "5exPcVEguGT21Vb96DsgWNzFtK7fBqXjbXPoVKuzgMXaKZqJ149jp6bWoK5Gwn7EdEPTM62cLjxfs6z26n1V8cZE",
  "key41": "4FjcZL6qaYtKru1mESWWSecinuJQnKahvcjjVxGFYv3QnTwo8vAXhiBAmUzx8mhjCgBEZqhLBJAwHbmZ8JuFwk1o",
  "key42": "UwXu8jUyu4FdbgTGYwRJycv1V2UX5yUfm8U98F6m3zFeofZzho6sX5jWD7YkqVEEVX4PE4QrhQZWtmK8PxN8piD",
  "key43": "5agQrp99UB3LwfEpwMuaahox5FxNrLXxgtT4iB3m8KzS9CBFbRyDHEcP6EhhdCdYda1o7uH54iNgLV8REYqNJPpm",
  "key44": "4DTvwBnXSek5aYXR2QrkVQ9RQxxAL177pEgNscWnW2BYYKeSzsCxNHBpzkddPneJTkgLeC1Ti7tDqW5ipty9RyAk",
  "key45": "51jmNrQnNhGjahTork1RN6NueZCosFAy1vGafY9qG1LTdjdU8Z63nPNySZzL9s5QRizQSsr6TM3Nhz1mKBibBAiM"
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
