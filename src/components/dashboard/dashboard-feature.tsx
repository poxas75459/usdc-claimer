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
    "5pxdn4GLkFwqdSZgeC258gf1CQHuvJeWUhWDB43BwM9J1HmLMRS9f2ab3tHFz1bepyzbqZCeLZ1tT3zVzCjoCG9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2guQTEnTDiNbCWdisNkyToDwVGpBdiVxcs2AL3FAzj6z3Aaqej2KmtcbxG1XDpamUkHuosbfpncsgFdx3LPhD1ue",
  "key1": "3Fjz6Pmn8hi9ZuoQGsB76x6ECpc5rrUeAacxa2zUQGrqpm7Na3nCatpTCUYqgcV4boxfS9Nv6whaNX7riN56cvXA",
  "key2": "5t6ZWK8eeg8f24am1BnXk1etkujQSUf8oZ2yYPQPpfvfbqzitkxfeRGSi1burVAziKoJUaWF6KjUWzkwdD3P8sSa",
  "key3": "2yvbnHvP5FnXqxp8uDu2cr16LkgukmSW72e5mG1VkfWszZ1koCkHpSDigTFUTbKxGprzyLn3tUNEMCgXiAL2EvJp",
  "key4": "cJZUNPVibgMiXUea3SDqjiYNb5H64dcWRFwX262vnYRFGgMfV18ZRqjQCwxqHpSGT1tYdahZTNL9NHyqBPSMtoa",
  "key5": "4e23zLg3FWYUPJipErdzGkwaNjbahrz7yzecrD6rGM6nJoPbZiBeHtYSdCY8aqYTzGainGg9AzHWW7GYGb2Q6j7M",
  "key6": "QvkT5t8rsXmCSuobATkHc6q6HCvPG6cZNhTq5NxxHU5U4N1mwNY859tYrX1yYBSVCf3ZwbrNat1D3P3fzG9aXJ2",
  "key7": "3y428GnJbqduA1CHWKJnDWunEHj4GFv7WQhyxy2dv4tU6RjGC551UGHXAA7Y5UXkhc2RoLFDtD8N8pCyGYk1io9N",
  "key8": "3jqPmiFKGUoMr8MkxLovx2rXdw91yM8cEN1KaVorATZgtVwKJcakGBJmLoU9awmHr2JhvoTJGF93sYZW9vz55Swq",
  "key9": "74d48fpvgfBYdeQfkNtbHqGP2P4VaK25KQhhXfDigE4NSMJ9j4gKadYnjF3UZyhjU8EeBhe1FbMd161HuED6g1y",
  "key10": "2cYbtfJUi19z8fdBB1xnFwHbHtUZk97WWhGEMzEaPxRmmNKW8Hcg5pJMAEedgSjYWK62UKd3NmTcM7VSg5CQpm3v",
  "key11": "41cMrKWfdFM7zG9H46tZXJT3S5rhcbLCGWjQRkvcD1VuiqVMamHvbi9ToiNWU6mCUrZh99i3Ro3ZttDhwVLFo2zq",
  "key12": "2zEtioUUXvThatAMLyNimhbNFKqgxLQc1dyFKqDvHdYm1UvRVVBa6mkYUh6APwUjxY9dJG5zV7DmGeJYGdT4sur1",
  "key13": "5fcfJbiwT3NyHRaepBK29CMror4v2WfVJ7CwRX5Cz1s2Ed3HBeWgwMmWR8czf9zRRbRMjoHsAY5P3VW6DoweNy6X",
  "key14": "2HKWNn1EF46gnCxWJe9SG93JBp8EPghWXHvtsYwzFCsUJFzq8BUJrqoyUM6kqYha1VB2SxJm5NuvaqHykyj14UF1",
  "key15": "5UUYntxzW8z4WUwwGAfqRHsDKzrZbHMwxu4ubiC1K26Vijbx7CqH8EQWhae4nWcHxeNcKo1aUe8Av6mrhSCAdRh6",
  "key16": "3wy8rfjrcGEDq3eAumKvTrcbhLp4c3qqS5d8C1moycpL497BrtU77c9buqrA1FxBuxMqz4r5VAami8auQimsSyGq",
  "key17": "5r9oxJkteZ8HbFj6sz5F6iNKRgemkCJCDHgi5eUsaCi7QUWRBRd2GjaTTWEPx1SEiTm5xeX1aX4YfxVKGnUdocvC",
  "key18": "ihzxgKun6smsqxS3hM8Uv1zwacHJf7sEXkDR1z8Jdd7M6tFWmwEnEfYm1LMx23qfHYTq5R53cLisATHrvvTQVcr",
  "key19": "355KbthMBprBCY3qD6XZ5tkT8Cz877cEWFR3Ldv23dww97PuiWYT4n99PNYATA3eGuAHid2RKAd2C9G6mBfp8Wmh",
  "key20": "2n2UDcKFRfyqW3gcdHcvxeYkUNns938jq5HdLzP1198bGpXDMFVAuZ443e1n6z8j3j8vuQmC5rzKViiP5Cz69jy1",
  "key21": "YskhToUJwzQJFMXMka6aoERsPXK4nkdUYnLzs3wqcsDf4tx7YQXZdkAeFtQBN2aTAnGDJMPMa1KP2FgkyE3cvFS",
  "key22": "yQhtJWdmiXwDBXZEGZCdkyaUzkopo39X4BDoERGHUqGcbzJUwQei8madZGyY6K2YsekkJ6HDXJZnxXi9GRrUhBP",
  "key23": "5MpkaSiVuFxfMNzTaBoetgpozxi6JKdMbweThDbbusy8bStwTJbzZTg8XP4nSRCvvMfkuoJGKK9s3zHLiehMucuk",
  "key24": "5SxNUJCKkKAhETBQeGQj9QmwFUhqVbf1tcJVtyvxtu27JNM9J8t1bJcGNgsQ63KoxQCxPfEwhpj1XAxjpjNYi9bo",
  "key25": "1dmw32PGHCLRwiPifM9gRzzu7vnBUgNin42XwS9827ru4cYfEuSjcQucQAHY2Ccrxz3EJp4VX3BeiridtvtsBNA",
  "key26": "4d3uRdqjaa418vkKdsb7tLcyAa82DxfLpB1Q4fr7nJ5nhb16vP17gXnFm2uLNJoWpwyXuKC1qG919SMx9bbh4Qcs",
  "key27": "3KKCeLs1LjVZjA7FJDre5rkDuMd79mEkTpzQEm5VHfsKP6rFXcCusyPFqcrYtYJ6rQm93S5NTudXK1MeUM6dBVhZ",
  "key28": "2aV4gBcadCg4LQps8AYEc1Eyt1A5Gpv1rUgVpfNrrD82PkJnmRdrmnmptNkwuS9RwnkjqHu2RdJSkQq97D1jra2N",
  "key29": "65DHjCvh5cKUEeJ5GgBWCfij6XyPateooq7RgAZC2LQ6QRuszdiQRuJV1qjfAcFmVzgEK7R14ftyvE96yJnDZyfA",
  "key30": "2qrnWwj94oCqzYo22BjH8fswa42b5deDqffcLtL2hquP1fK5PpGZEMerwpBzmZdnoeB5ykoszrXtRZekmeGkTNq5",
  "key31": "4XTjhDemNu84ULHmzX6FQdqdHoDZtHwQp7Gx1H79sjJjUBb9nsBuEQbLFEKxA52J8x7wdEN1TdqDK9pMLQuj5hYq",
  "key32": "2knegaNWjXM7YJodMEaZGtHnh6evspb7SZNdPNPfYYMzazvjRwWW3okVVLmdW9tx7LUNp9mkZtByBQ6toDfpTeBD",
  "key33": "ZoVv34vV17ZWwUCajstK6XifLJYRxMBb4bmrL5NtRx6JLUNfLeVhnd2fFib2jLcTuSSk8fhZ126VcwjwjvcfEY9"
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
