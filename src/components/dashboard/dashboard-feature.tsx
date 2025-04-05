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
    "oFYSK96bvo5M4k6rjatixuayXzdwodkCEYRCMkcVeJezQB2vyPqnb2Th2eaQZS82Kppvgbhgf7vPY66qqkRgEpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ssbhangMfLhaxgW2JD1uBZHvrXZUBNxwCofNiPuEesKaAd58wDBjGJYx31RdmDRuqXt1F2rrr6L3S7kenrkpKsC",
  "key1": "52Ns41neGQccJ7XbZbN3amnBUqs718XETaErnBgpoXRcB9Xiy2Go6Pqb7VGsvuRzWRzDhcLy8FAgWvsTQVnpV1PE",
  "key2": "ERfxGH3auqq88tjB2XHWy1Mb3HFxRdbP8pS55HYecL48dLv8mSxxLX8QuFxrrZNnXZ6NGCpTpkwXkRFTuZbP5vK",
  "key3": "2r2C4s3rfJPk2HQt8pkGPV3og4MSfaKHSAKb6R5yZGmuL26yeD7VzXAsXvSYEJmxoTGhuZPMQzqpWYHgkBXt6uUP",
  "key4": "FKQbMp8yFkDQ5ZEvUy8uZ7x3gHUxouVN7K7bYTZNnFoghkb5DQiVzCJqXMsofYjLiDRNPCFPXjydZTREq4wYcgq",
  "key5": "2LHejxsfmBthaRCCkYV5dqhuqfEf4HvxbCTDBbG2HLBzaz6CMWecisjv3N77e1pAwvZ6wGfq5LMUs5domrDqxazR",
  "key6": "2kPcmWfDBKpzM9RkxX44G4PHin9mLAxqY4YEw2VhyiydNPWeFfyfkyYEnm6aJGDDht5GeLDyaBSQbS7pX7V32zFq",
  "key7": "32Mc9VSqM23RTLvo4Zn1x5PfDCMbnLuQHmZ8hes4edDsnVDe8qTxbZbJBzEe9jqy2aAvghkyx4wjRupwgJyNzkkU",
  "key8": "5Zv9wc6BfYvxD3meiqk8Y2iNfjWs7EhbyRNRiGtriYASGnyjGZVRV7hpm5oqPd2q5Jd5ZzdBuFKj1kvRANs7gACY",
  "key9": "4bPLELbV3z2hyjcXvrqdUXGQqdvZC7CYBNR7qfTF6RUE9EmBjsSEM4Dwk72D8gwkPXgk14iJh7MDvK7s5GgQJgyZ",
  "key10": "3rcm9i3xh277eNBt7sLg3PUaLAQLxLerrAFjVhYuYd6LWwiLhL6Jx5F8HwVbDVi7dBk2kMLPRGXZZMib4SeokvJF",
  "key11": "XDS5K4gSmeUmpDszkqNziXyummEP7EAYLsdbFaQMUWKMmHFPM1dZ3FoCdLzVzabJPjGArtCtZcnAPUtoidFXTXp",
  "key12": "637wDzmig9M2ZewuDrYKrGQEdiEnRNRfUGJ8n2bb9nvTgPRAGb8xcVJCGrk6hsXC1DgYuhVeucscQqno2WBiEAPH",
  "key13": "47LTFEsV8xkM6FqdkLxJetrgcQvNZg3G3QqVfdmKY9CSptQ7aCQnXh4zsQ5213QZzUr4Leuwx6VH2KMfxNXitzbi",
  "key14": "K1A6aCA5Xj8MUYKzujXsQVHdWnr1Z8D4N5bZJpT5s2abvcFkNesCNg8w9Judv73Q7xUrX1zKFgsPHhsLy5aroAN",
  "key15": "3ha2ddUwHCiSeBEGKDfb2LTKGYrT4aSSgiteaWWAgMEEyV8SYs9r4GzEoNdc6EFofh5CNvtHHjP9mNpiNur7YfCd",
  "key16": "5JeJgFwue4mpNurVnfPteBceMyeJEyoMk79Xykbst7ppSCxmjc6SThZLhYKtgKGsXiTUtpkNK9cHhRtorxGDNvLj",
  "key17": "2f2KrxGsxbfKECQTBKwGKv3JyH6nSPmyhHZfZJPqHJyiWKhFSNHvxQQtgN1khZCVjEeTFMjxACA3jcGKGTUYtZQT",
  "key18": "hAARgarndQjeRVJanatNWNt7e8ifabAJtaqbcWt3DPvt3ddx7GYUxzrYuznbnUcBZ5RHZ8mWFLe5j3srRyEzNUo",
  "key19": "5m8ZmWVQkFoiVHSbszc57kzsd4Fhv3BLn8ASZk7Y4UZQrLa4XsuJdqKg22z4wDUY4VW6n4zXjGm3cjxX4TPxTbGX",
  "key20": "3H6syxHdKdfEw4SLfMqvXGhNicsm4TCSi4nNCUjUTKq3kcFqae6mNpVog3THQJFb4wrzKMMdw89qy7Tj4MScbgwU",
  "key21": "SSh6Qi1vp8XSs2rKDjuRUJcgjnMf4SLxE1koHaRfKWKUe9EKjznCmUcM9DuEDJTiQgeKWC7P1jeWx87UaYu5JqN",
  "key22": "2Jv9fYEefrWbVKnVy4da3kraRTzYo3FKjemBxbSv8FvoZBK2sdaiPjmspJS4NKCUnKrsmUb2HokSuibpfTQoCpRh",
  "key23": "3X9p3raavtdfqSyM5j66GkubnFAidQUoTCWfb57cJ5j8Qnf4NbgnvvHy1i3vjRENuZuiJJHsw2obRrz51HZJoTUN",
  "key24": "nXMGhqHAm1tNtbTNLS5qofHCvqBTCjq6QfAoJR3DH1XPs6HS4Ae12wyzQHUGQtNeZeE89ckZzUqnF2eHE9P9TKz",
  "key25": "5i9QXjYAtnmQUfxbD6UTyGrcRi9FqCprqzWjLHN2kobBP7hK3gTKV8JqT11waiTVSeNznhNS9JvQoEQ3RVgmWBAP",
  "key26": "3KN2JDDbqdzw37cSd2iUEA8FKRagGzUVNuS2ytBAqCPogCLobioQcMS1BQiYccTYWND6Mc65S5h99AYA9pDgd4A4",
  "key27": "Ewdy6dKxWKQyJCBFk7uEzyL8jCJ3JbMx23FcpVUGtc8jfVrTthC3xGRTAUoqY7pSHACG5nKG1ZVmHAD9jUFGQNJ",
  "key28": "4m5h9MLDGkKoCZp8hF8AE6y5i15jQd3nFnQgLexBQycgNk99mv74mKkGFj9eQvr2nJAAmdRqGNRndXR9oXURgN4",
  "key29": "24dQkMWyuDe4bSkXcKcvkLqXSjd3ausvmWccSHKzPMrbq6KSpWHW49zKnATaQhnVTLTHbKzFQp9WPxAwWu7rYDqm",
  "key30": "nTgDkGckoPuCbFJYi51Y8wCyhAgd9K3NPPM24Lw1VQhdhThKHCN633zuXMQPpaA6yGAvWmqv3wmV6F3wr5RVL67",
  "key31": "67qB5uax1Lp6igUvpaVHjkZsdg3wsFtVQDJT43g2CPhEtAzSkurSMZBZcZCtiynzLsZJgXcH4cTYgkpzn3tDkXv1",
  "key32": "5VGEbtVuiF7RB5XJrUMLm4rTxgHKEtgJ19UqbjZ4RaLnNkhYdUHjnHnZPxsXXAegevxVxR7zrYTsWxHG3Z63T7dx",
  "key33": "3a18mc8mdCgoakdqdjgipdTbyx4DE4mVw3pJcV2XC8kocFBonvGkxUM6VpqX2PM5gM9NwKoLi2STxQxHxLrdzTc9",
  "key34": "5YwbTbevy7RmKzv3P9E5rGcTtVC3LDgUUH9hK12TpBi2AG94EYgCVrkNYbkoPkTBqNh9dkZcS7s3MYcvyXGUFpyq",
  "key35": "2fsDYcHRA1E2e1fGD4UzyKpdjYxcRH7UezJMUrtshMpmaacKwqf1whe9PNRfmVHPUhpxWupEt7iu3EkJcxX9o2Di"
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
