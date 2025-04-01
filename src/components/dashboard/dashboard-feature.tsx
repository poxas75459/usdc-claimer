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
    "3hmYq66m67SzMQjL8aqvFry3khkUcenSDvtM1B9tFuWmt7rBchkEtSDVpZYhN5A2twtrsnwyZh7JuFHrzxyQnwzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J8o9Z6TDnDv2nzsKSRCZtgdsBVctXKzAuCSzkqu95cKWjmoja2yjiXKeh5iaJoomHdtthzgXRCWQi5NaXhQevEi",
  "key1": "2mo248oZhDdvAzcpoA9unU9GKfEgQ6ZY9SE1qbBSPkfKciVefKQWefrLzzMo5D2z2iYKsMYUioPn9SjKApn5WQ5Z",
  "key2": "47Bqk52AvzdHcGL9rdMBEAjgcP7i8MFQ6WYxm8tAkmnqzUMyeKrdJUBRyXxNPCXDhUsJ4wtQW9Q9SiKo7YEdCDAp",
  "key3": "2az5kBxcX79JJu8vSt7WJWRfVknzfcLoXAisBxUQPeZC1wdbJ5LK5416mGzcFU5rose7swfRmXGrYX2L53qe6x3c",
  "key4": "4vQLBx1pTbtKPdgv4cXsP8DJy6ERDviNYvRwboFNht6SGYvBZuXRAiDqbzHFWYDSUXbPbNLYvBhnZCTqpQwypnL4",
  "key5": "2gv8KLe1FJENGsdBG4huAMEkhxJ4DQkdB2zfgK48Jobcj4jRdcDwmu8iE7HpXnDXdibDkBPLhdbqJqcYFuSv7kGX",
  "key6": "3ZEvzu94uJG46s6hBqfvUSghfLrtMrfoSDJMhNaUr66gEdr9fNiuT4teDSJWVkxEvSPN2wkBXGWDKtEoArFo9A73",
  "key7": "3up68SBVeeXa5Evbb9TQva7DgdpnWXsNrvnwpYMPbc3eordEjjzeDmaSQCyWUHqQLhbh9aFYbhSNExue1dZETchE",
  "key8": "U8z367x7ZQ3n3A9Lr3rRk7kpHETX1AWKzPUcESYj2c2VQaNQbHfa4daTMqVf9Znh4K5cBuT1RanTUtC1AMNJniz",
  "key9": "2VsJjMuQnq2CrAmgughFpZy7UYp23wPB7hr7CaRDUSkgApzdFL3sB5C9zmKAT7rSn8tH3ZEixp3NiKJf4uUWtncg",
  "key10": "2BRyKKrM67V2UtrZepbfRbpgNjcjEY5NCeZqM7fVZwAZctThyyzatJ8nPFmPSFiMkvxd8KVErYiivrMnCb8ciHbE",
  "key11": "4j2ZAMeN31w6UAXwSzV6aJ7rwNB4mA8QkzpTdJkDAbXSDPbb8R4svSfs45RTSBouVics5kB6P6xSuuHnA7tgoND",
  "key12": "JYD94QeYS6ZjHsx6HuedefaGihZeCz5M7KufwiNYCZvbPUdeGGKVgxDkUKjEoP1a3JDtkj2H7SWJnHrTMFQDcPa",
  "key13": "2k3ZQ4it77Kb8VKYrwrFgkqoLSXG1aoBm1DJ8UzABA2wcp3Dt3E4d6dcsR6R1EHQnND5RUYGmLPsK92Pp8e2AcEg",
  "key14": "2sLfLzZCSCtLMvujagBrMJrY99dXfKMjkSkrocH4StTLDFC6FSaSCo8oGrzofAmi4myFurfZ6UPNH8gyuWSkFHjE",
  "key15": "2MZ5gw21Hitb4degvTzqYoRQVv6yzibroxYJnbg8dfK1r8VT2Z4A8bV4Wf8GbNZ3iAX4EeNSC86jaym49gmZUJjv",
  "key16": "4daKrxrmZJ3u25gSpLrgbEwNfUiB847kPJHC1NxfphUDjfSwYBDrSr55sEv5GuyMS7msSjqGbK48D7QzrPvvbfjJ",
  "key17": "4g1EWUX9KqNe5hcnV4yVSVVrwJK2wmZH8jWP3Jq8qehP7W5yKLfwDM8LLpH1YaTg2aW1uP7g21riwj9sK1QEVycP",
  "key18": "51Kd6BFm7WJKAvUQPrKzgzRv3P1ksLcVrXmpPjgvqxTmSzdoNzwqBPve4sh8rChp4He1RguZUadkExsLX4uFzrQ6",
  "key19": "4iNnMGP6hGXCwGqEWrM726PM1dGiEN9MxEDkjWoRe1GcBUiHprC4D9WnqRwBL3bzmr4n9Mryib1is9mUgoeFMzDf",
  "key20": "42xkWkbx3YcrbgyKgY6owe4C822ywxqDLiNWaenx2oZAka5pFU2gPFoY22ZbnuVNyzuPjnaPiuHAJoV47rLRFUzd",
  "key21": "4A616utcUm5tM9CEbqRBoGQaWmjgfejwKn3X53dKzfWJKY2NCRq5oenvVzrEYy25aJdLK7YMMxpijpQsQPP8menD",
  "key22": "5CErP8ZMwCMRrUQEW4rX2HhMMMkykq7CJmhvKc8B9DsFC9hNN428BgRSuDCTtoTapKth9vXmHzbcc2EMALbcRYcV",
  "key23": "5Sgy2N6XeCC5tgmCcybatb8wptXrq2s6Taaxw6gJwLRkxuCSwWj9yuXA294N615L6NcQ6JwEBQ4U55oKBf1uck6q",
  "key24": "58vCqKxnoRhXSZYLCH1TnhWNBFYMkabP6da4xeJTPPEGWEdxkmMRjjutnVCu8tbv8Tu5EEwaEhEfSJereUuA1bnk",
  "key25": "41YqLQ4vj9ArY63eQajmVnRVrYeeqH1BTJfWGLmPdzVxqoYb2ioz6YBySTfLAPVrXLGGKZ1hatMdUdKTrTdpZwA7",
  "key26": "2fKbEopEHxBzzRWLatKFT4p5WG2vVBa7n7G7qMM3Na3D2V7FmVys5brV7W5WUWC9bJrzTZcZgMi2reNtrSuk9oVu",
  "key27": "5sFEdiCYEYAkUz7R97e9Vo4AkviEycdyjbLimiEtmQRBP7XHfpzSPBVs5TBgZog1VSXLWKsx1q724diHqyyRV29Y",
  "key28": "3S1XvR7XxprSbfXyKvfSc7rN9iiyY6kH7km4Y9wQwv2vPs6r58e6fmTfSyJ2c5W2jw696Aeg1GpTeJYRMDJUjEvu",
  "key29": "3KN9G77XQvrsrL8CunYqnFkS5qz26isqTrCmfnnvFJAZkhLqD1spvNYX4LcjDuztTpgPpdhcTQ7UxxNzjs8YszVx",
  "key30": "2gt1hjwMPhrSKZVCDuWkAkfGsNxq2n8CCU29A5EkhExEbJ3vyej1CRJ3BULmbHoYSzzDoPW5NFqQW3TSeYm6Y8Hz",
  "key31": "2CKMFd4FJ3LWX3zezCjXzoc6MedxfKckgRGNvHjiYDKX7Dz1t4jVj5tdiq5v6Pe4UNbh6xVzFs7jfNusBiwqRi8F",
  "key32": "5SAoCCGMQxcoBBfEoTJWjTAp8tkoaTRNDvJjRsEQNqBkEPztVuM3wBSoikSoZn5Z5NQT4X1uQnr1dUgtokvdQkpe",
  "key33": "24vu7XFHYG72J5bbecWBnGwZFKYqTsJZs71XARYG8EtnGHBfGMAaVWmu2VEAhsy2jCZDFgumtmLMhTLzYVuPhztW",
  "key34": "4JiYxgGd9AYysJN1PVFzZKYh4ypM16htWv3qozJXKQK9CZC4eidAnnFWxi3bwEa1ZhZifBgALCBxHyQQcXXQyP4M",
  "key35": "3nf1h7tyv2jmEeBkMo2jEMDaAfd5jGSnnUsZs4tB4gAu61BitL26q2WC5HG18Xniz1NYRj8EwaMBShvR2aX5f5y"
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
