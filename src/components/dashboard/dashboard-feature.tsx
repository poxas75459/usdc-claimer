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
    "3AySDg6J2Bse77iMqnbm8TNCXtzCCtTya63dEv3S1c3uemKtT3vVUwgkzTDo1WbaFsWS7HorgGWyFASM6vo8jyuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57dv6QjcCfEdq83zLjHefvbCt788id2G1BniqnBSnN25fAZgZfpr2yxeFUsoq3HTnf3wGEK6cGL1eEh6h6QXBBzN",
  "key1": "5kB6xHwSHuNQZwq3LPc3kRJq9WqhqrWhsYiWUQWvXLXbgrCUKwgrkR2TBagQzmQrBFv9X1QazYyqX6gDJWPxAbfr",
  "key2": "5CMxvEMzMKEWa4ovR15xs5H1hWZ3gYxT5CD4iZYRjJn1ngVmCGSB7BHkPaq1zup9H2LdGhtWGPYBDTV5eZZMGMao",
  "key3": "4dWdZnp3pxwmC1MUc7Dqw55BdUWbG6HkZZk82Y3grsJMEtU5haeCs87ERARS361scUMqJFXciNyDBzLY8fd3hA16",
  "key4": "hd2BEUwnBxur8z4ztLL9L2rak3TMicxeAjeWu7fpoAbbWg52XAjitr8nvgJLYU31T8KxRNUMk4uvTqua2LDJgfS",
  "key5": "4q6xvcPquaa32KnqU7TWCcXFgkKHRh1nvLxtBRZi8nc35USSLdWVRDPjYFicVjSNTCd28NJ5q5T5uhPawPMPbqvV",
  "key6": "3gUzi76tDj83MC2M9hLFWTf133oG1wUi2ruSFTy1sjf9E9pYHFg7nRQxtDvoMmgcd1DgGujwR7nTgALVHoqmgPJ7",
  "key7": "3UbjxvMHvJgh1oEpYdQ44RbcV7G8ta6TkD1fej4P1PdjE99qfYPLFZot9cx3Pvimzhk3DvH6p36R3AUsRxf86cBX",
  "key8": "5wDXXka584VuptJnF6cXHtTzakBTCgPv7n9qtXxeMMnCvU49ChhdmwoojfKzDa3kjywph5JS5TGXrphmAMrQVTus",
  "key9": "ArZz82aZBew5aC8Qf11W5pCrVqU5BQiT863HUz9VNHFcBmhy4aMR1uS3AGdX8i6ur26Ht7j4zDGTxVrDezghyeS",
  "key10": "65ujbE2zPJuFqFYTmHNfP1tGTSe4t6iFMgvHjiTer3365TmfHX9EkT7R77rzTxYaZy4t1A5bKnMPRtRpkriq1833",
  "key11": "5gtpiFaNhC44GWjLaxGXDnxkQNsXbJrmggCyQYt3YuyNaeABEhEiPJQcCKwkaX8SJbpu9sNixDJQNCbKGJmZ5LE1",
  "key12": "CV1siQgZ19JLdyfra1B5PJkSjUoXL5adVrk4CSUzHeLVHJZBcpgmnvVJLtnYDcWiSRv8NRaRzaN3cGhB8aGBxa5",
  "key13": "3MivmpAazTCvXrTvaKxEPbKnMHhWftCnfGBPznxA8r3uzZdAA8oT1iRyzjYFVayAbeHdwtgi5nPmghiU3NEecn6W",
  "key14": "2Pctt2ufguxyJkg9tneVSLwgyz8Txbkp6q9F9edt5maKhuQZhKuxZX5Hd72nhufnqsrqRR4yJ23zTAJQQrivVGPc",
  "key15": "kzjgQHGsvPiFZu2VgeESxMGNsu2KuVt1vhdGVNVJ4fmuCxAHGjmTo46cWBrdBXjJraRWLPJ2gAb16j25LnKujak",
  "key16": "57wm3fExMkPRnfEHzk2Ab5Ai5N1QimrmgznyqaBDioL6uKqdPyCHaxx74yuKV8TwipBTMpUikdHfA44FozgTLGeV",
  "key17": "57fGtpktpBVxsdG8xgdZHj9wFTJgSWveH1J2QS8atYG999KPYRJs8J39wS1os15tRm8GNcq3X5b69a6T364qXVmG",
  "key18": "4WwRYSeRpW5gTZ4zdDpCxjrdpwdaSeMg8vWSBvk7hT2eXfKU5DADkoz3okRn87WV71v2meD4KHYmRufRXoCAmn55",
  "key19": "3rZ3YWPadqSLbdQPjo5tZxaLua2B2UZqLcJ1WGkCZRm6RDpRUCbq7dnJ8nsE2QXXAC71R1RDaaKNbKkd9AaMJC56",
  "key20": "4prfkLvPDkLTyqUM4dTid6CCLFFumEHqhJpzKbfRDTnMiVEAoPREpGZ77MoWyKXPUUS3GbJWLB5BZEsoxPAeVavT",
  "key21": "3vnL9HaoCKgPQgn15Zyh21yhjUDRBX2qTn8ejSx6xh6CyJtE4wCGark6LwZhSHpTh9oPVioE7XHesioja4whhD97",
  "key22": "4GtURBksxyP354rsaJhEzuh3unkQLvoAarooMK1TGmPNtvTfTrVd5HoMjvdkjBvLUdp5VpdA2GUaTN4x24mXBEoP",
  "key23": "hzr7KaoVegQm2VKYhCSGSH7XpFBWqbECbPtG1sKmBXrpwMAt7kbCtc7zVBFGd2SKDPZ8wkVhVHdXttyJrq5qjHL",
  "key24": "3yuSVmAmiqf1XFZuXsJ1NuQRWdyrmARJx9i5PUZdDrLaVSa4VgbioHcfdtn3fkUdHYgohUnCHJPo2YyykQwwhuay",
  "key25": "ZvCqc9sVZeGCBCfPPfD5Jync7AuN2SS5tu6cpv6Vtf4d15rodC6o6XTPWofqHhtQsWNuYHPwRUa43WXayENgi5n",
  "key26": "2ig3q1g2CAbZb1eL5gMYjM3A54Koqhi6SVebdXjMBM8VDNbU4mkpHKv5hU5p8Bx4imXYsk29BDFY7KENCSZJVFhx",
  "key27": "TfJeJGLPUs7R5C2HtpU8snceM1XjWggSSRDShNvvMcJTNMFshDLitWUiFgMaxuuVuWGN8ZvHKWzKKWKkaFtsU5K",
  "key28": "4P12nnodE3MKABYnXPceS94HLq7BiXjGZa2XAzbt6mt7F2nh4cUYEtNPyGnNUoYMoW6yNwjzG8vmP1W9SEN4v5qZ",
  "key29": "ipB7uhGGwbnhVDffq25qo5veGJVhwktmxh3aKLuwauCN9qkjrgtWs2nYkrDCc7na2r5fm1qSEwpA8NdCeR28S8z",
  "key30": "gucu89q5Y1ZVADTdU7SQM92s8TGJwJRaJXFpZzDpPWVUTHxqCE2AREnwTpmNBWBwCoagWifM7gY1ekcm49QQDBm",
  "key31": "5uAYYiYE8Cpv4gsDKpfFPKuiRstJpvjWcSKDhTFR5R5XgvEzLdr2LNNSsodwEfPTLiXjpLaqd6nf7Pth1kr67Lfz",
  "key32": "3KxZSUss76sBqiTzkdgatSn46yYMY63nPu8NXWsQJkVnXCrVybDWGzoVNCFypgpb1t28j9cTox5ixTCgg96y5jNh",
  "key33": "HprrrBBj3qXrug8wD3z8qFPuGYGYPG24Yk9Lyk2aNbRLpKjz7uhLigRwVr3opv8gTgZoLUBc5b5WyXChWyhWYDy",
  "key34": "5JFqJfvUGfbjhpbVHiRZsWdHaTPMUuEamMCxpXBHXhMrABhfbqBja4wETFh3quSc9LRGPM8G4ExbanzBvJ3WAfG",
  "key35": "2Zf281JXKDNfBJvShRzBAZXz3DsHzhuTEkEiJudmnw6nuCTHQ7ym26jTK3DnL1WK9js1vvSAvUgFM6hyvMBDhiY3"
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
