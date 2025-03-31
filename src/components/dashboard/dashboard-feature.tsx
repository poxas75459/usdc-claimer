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
    "5jN2oNmoJvgKK88Hk14WsYTGPQnJx2xTGNM1XDQRkj6msZmTRxfNSjex9jZbNX4CSkY6dzSyZeWv3aXDQ1tQA5kK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wmriNdxQJcbTENxX1Pgm31URMA3jNZWUAFBiVNpgRCnc8364Setmk7i2un53erDUS2YeUvuamC8F6JdwLWu3BCV",
  "key1": "2RoFGsc4kiE6VWCM743DvRCyEDoV2f5rnVPEW1myM2w4ubxdjfeqyKZfnWdT3mVbZeqCd1vtmcqPZD85nmvBDyMA",
  "key2": "5xNAcHxXm9hzxGcNExxTnAytnaopGcfETRjE3YFr66FzkPGdszBKHEzi28HfZ4oKHfteZt42a4Mb4JfiMx77ySFh",
  "key3": "tcSzt9WJfLdXPfCZY5wnMtB7Wyy4r19FUpNqqCgrzmt6u22hWkEwoT8A6cYRygEmgjehLAxDvKj2hstdTd21REu",
  "key4": "4cBM9U4YB13FocKMBrLHZGceNpjBH7ziJsg7VZqFCaTQbeZYws2HTfAutnEKKuWVojmUFTXjgFyHrxtPbszLeg58",
  "key5": "4ffoZgFLu7nxWc6jh1oZjmDMcAs5x8tnPAqHcLwfL4gP1DB5QV15e5oeP2eLmjt25APKdxEChVzhduj1zjaPWspL",
  "key6": "5ZiafX6CkqoRKD8QNLRB5VKSFYQ96UXcyu1YybxFhHB2stpUpWVTJavkVshZ9LkpB59bNJMfJrpbGJYVrV3urnJP",
  "key7": "245HXpZSA3gLmShgBLZgPSSc1ZgqQSSZxK3BsQBpZsEpUZYg2Ypq89D8snVPr92q75Hs6VqVWMV8mZkC6zQJUUfY",
  "key8": "dp9bK4b4vYS6uDxCZeGJrDV7WxWa1ZSxdmYeEfFCxtoZqGUnCCuc92ZgKT382NAAQqRt3FD2h5cB6BHriEVNZCV",
  "key9": "3kKw3iTHHipc6DJySpEkzk9fe6S3ZFWx4ChYqz1LgMuniQRsZEmoAiXayURVAj5AsaCD9s5aSQto8TwbDUthexi2",
  "key10": "36oKwg44TxhXM8hWQUNTtuDdCr5Vjymu5KuQJJ827sCCvwqGVDyzEPM6f8LzWPMBPdmSK7QpfwR11z4jZiJpFhjE",
  "key11": "3RzzSSDqHHHtqNE77pfMydGfAUUcT7e2WpotCN3yEtiG3mvSBgmZ7ZwhxjtD9XRzzLafgmhyozfs9AyqJYEPwLM2",
  "key12": "4J6jGHCDtATB4a188UkZEfCp9BQ1TjpbzXfp1RUiiASB8Smi8GPbHBrowKZGnfxF1D3L8MAWcYcdioh4Pwu32E5T",
  "key13": "A33y5fiE4C4ViAHHxTYVFTsN8gkeY8u4i6ptPzJhNbiWAyLrN7H9MVHY2RzB8EpD4oqWb818aiQJNC8SoHLS5Tg",
  "key14": "2YqMGQLJVs2djyCL55sybiqQBinuqGb4dY8tcUJ1RQrLhhzcfiR6wFy8nvSo7T7c4ryGtrRKtLskD9xNcrtu78YV",
  "key15": "q6TcFJuEAoUZUzJAgh6nwat5KHh5dxub4VBZJ3GMxE72cdt9JvaYDF8TKzcohHVne6K1YBCTNEzKTwGKdMaiHk7",
  "key16": "sZMPHS2yE8ZsQCVGtx6DaTmnYSP2RGJdbymF23gpQYndNnSKQ6AzqgmWerMwe6bhT3ZZBJi45313CnybpDgMqPT",
  "key17": "2ERNjbjo2TGAehBLjseXqfSKTHBUtC9N4WHBD358qzieRgRzMevR2j2cZNXyqLsz3EvsWpB1LjTA3yaVtLtfPYEv",
  "key18": "3Hmz4uKJc4abLM1jRi5gYEz2zv7U5ruPyf5Mafde8xt78daYVetGUGVHDbTJr4FJfPYaJMLwFbna4eehV35Q7MWC",
  "key19": "3evujh8shNg2GXZbQ2bZZqurLrDnzyRMTGnN5A5G9k3Wu9wwQhzFNjtS4gGAMZM51VM44BWgCq4eMFZsaADAJRgB",
  "key20": "dYbNVVWwjXh4UZR9XDQ1XtFvsKzzwYhgdYHQiXxJFMzAR1u3kTw3fLeirNzayyrWVQCzbLabQPdTPbmNRSzw1W6",
  "key21": "FN7iLt44MG64XGWVY6tHkvEn1FnEAzKu7Dd5xutSPggcyjZQKdEHT8usFTgjQpxQMTTEk8gfFm3VSVbvy5mXtRC",
  "key22": "2CZwAPtRBvSJWkCCcnGT9rk7WQYCtXA7YG123nsCZLqEXCkqUbEwAHkSC9HUzA6Fxmbr4ygB6rKtJbPcTCoYeaXd",
  "key23": "wGWYE8N7jrQmbHUY8pZC3VJPEqpkJcLhi1gyc9oCwMuTHu51LRcV3tV4Dw8RdHdRbeKnbmghb9GSKjkud8NR5Ct",
  "key24": "2TgQNxqJDCzJEwvHPR8rnxQ97EYmkaegTNQHCoCMcME6sk5qqouJAm3BBKcUKj6ztEHUjML8ypJWgH747m2WcQ5K",
  "key25": "5mQbfTmLmVbqBjXPJvMHNaB7dKhPu9aY44h2T1FC9hKUmMetdhKaBn7VNmVmUPmJy6cRRcPkCET5DepW3xwBjQAM",
  "key26": "3vJ8B1vua4FfGeRM59EJ1XetHnS5wa7CFwWyAyyaaNEYXSDKYqR2HHFbxAqnwNE9LydossnDqoLTHZqaGB3UWspn",
  "key27": "3mTishCvNzw1YbPqu6mQ8Z12oCZyejUNZCKSPPcgpfPUe8sDohBJfud99heK84yHzPzrpNZZq6FoJGemtR2zCG9L",
  "key28": "5Au41BQtkxZgsdRfLf8TSWi4zRuTD3Ba46ZsnRi4N7fTqFGYADka3AcKRb4gTfQz5ZbVPoTD1hFpAyUan8TWgeCX",
  "key29": "4U7D6dxfCjfdUTBBjnCad3DM1dsN7pjnksym3B4RkPNsaQrg4ZoCpdwJKsSucCzafkfCdtCKiUumLyvUYfMbvCyr",
  "key30": "5sLABBaFVQkDE7aQdKbK2guSfzxCfTA2xYEHzXx2TnDkRskTL79e74PfYLaskhhNuL4GckwehzXNS4dZuzRBaEhD",
  "key31": "3eASu2bPRtQ5BLyW743h9zZGZAFctamhus9imezS7vHm4ZMpLydx3JgYM9ZTY2CH8nXUFQW6EzHpvDjgGbVk5ZZN",
  "key32": "f9kUwSbhcHM6nJQJopAUb2eYKaLUXdJa2CZ1TPjM3zB3KaPuaYVM6ZHKhBEskwErbvsqRfVChqYfzqa6C1vgK84",
  "key33": "5LKpy2e8j7HGUMbf67LuKEv234Etq7HZCydtRKNnN2xcarpL45uRcADTQXwPrkS7UeBT4KM7TTjTj45QmA4Mm8Vb",
  "key34": "26eebWncwrpYr9BwvAkGL3H8wHNrkbXSvvUBtRoSrCFfi49YpB6HfiDY4sUpnD4mJLUuaFEqLbpEhqQmd9Ly9u2e",
  "key35": "3Nad3Xj4YdWZkNngsi1fnsHKVYE7PxytKmonCp68uWVrSmCQZLkb5jDTgVybW1DnRU8MTcx933dP78xnRHWKKq5S",
  "key36": "4GgQQ8GY7d2rJ5rnuA15uk94iERjVbDFwDBdQHMwXTTxNSScNk4NqaTNistdW362JaJ6m186ziSbiHeGdeWhjC9S",
  "key37": "5cqobwDF8bRaLQQs7vxfhbZwrTshyMoFefB7qUz8uWWF84xnX1HccCjGZfZLHu7RvaDpRGsdiFrcXZSzJ9VzEDfP",
  "key38": "4SjhJ9XcT63LL2DSpt23HsSJ4ssiArQ1p6VhzjQRr9dVt5EovQRpvx6VQeo6HAxJAhYqHjqLa1FoY9iR55h7WzCM",
  "key39": "4RnmtSXTy8SAEFzpqGNSoncRbzncM5PMh4burLvpuhzC4BG2miP6HVspB3p7NhizcNDgTyxVrkWE9Mn36eUusocS",
  "key40": "iyS7ikdkEEfYyZuMaAaTy1UvSmU5VLeBSJbj8K4XTTwvYVnT3aJTwX3fZniAW8UDzLs24wBezDDeyh7FRt65LfW",
  "key41": "3sS4DSLwNW2LRsZ4BJFrBaUsjasqbtpMbFX8oHwTNjHJyny7qbs1WaaZgrymhkMRPnuDqeZRJhJhhNd2efzDzpjF",
  "key42": "gWb9A4A3BEsuomfS8R4wsY4gqV4qhMSx5D4Ps7EPiWZPeGT4ZCbzxhGog9gnmbT9wLtcsZbUDQhnQmt3svqCvR9"
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
