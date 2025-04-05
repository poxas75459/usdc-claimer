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
    "u6ksnqZfFnJsZYegD4e1Y9ahVdCCH9X9gwZPXLSuNjmUDCKRD9BHSbxzXUNxhkgjqEdrDGATxADDnsoQHNcggA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tiXKiUGvErWtkuteWk315ELv8QWRc2brfx1ZBWHALN7HUDKJQttnQHdphkJxkvYuqrH6f9t5Tm88yJfWxryS8Jw",
  "key1": "51PhxMdCf5oBnhQN1mx4BcH3k81uQpDVb2nEtAksrpstZ5VTmqpykwg9rqnsnrYDVrHTC5t5EGGxthtoyEnrWRg5",
  "key2": "vhmRJW6xppz9nQJM12JvUWoFvTS3N2VRfuJhp9gBgca1RMVfPbsVK7LGEBiNYCrxL457tT5PeF5ZVabrBsgHZRZ",
  "key3": "3wZqhr53hAfjjfwx3WVbNQLm8k4Ro53p6WKhKKbjD3GUXAoQR8LXsAJApXpWerwHMEM3bstBYB16NiTjPnAnA3kd",
  "key4": "saX5APDSAPVPA3Qmuxwauf53ccrNSwEr3FdrNryUtjuJHnccR1KXPuWK2tyavfygoeVQoQxheSHDcgK3cMugqzM",
  "key5": "2om7nnRgV2KzpYudWVgfeCnLijw6gjodDodyTpkNM3LKoa63nwh977pUwJJKuo65AxUmD5pR2mfsQrTbtBK9PS1j",
  "key6": "4XbVv2mwE3K6PU5aaqMiCsRwjpmbgFtV9tb4Edsa4nZ4dzL2obexPve478Pv3jEdbLjJCpK3c1YjtYsX1fgNNRWH",
  "key7": "3xsuhn5Wz2CH3eEqyTtfBrg67DrRcWxHJ6nwjYjtKZbKc2VQc4a2mk5Tiv83Zkz6MffewjDpNKzrEGfE9ENcit7L",
  "key8": "4puE8wJgQmh3X7CcP8ZSDzzJCwqd9CPzgraEgQp8XQFv8tNBknjzwwdEpFRvEmMW2pLzWcCsyK78w7ARZHYdfzAZ",
  "key9": "33fT4TEFYjiDjUkht2UGqrEEGBqEzGDv43nEPn3u6AZ8cHMyYNL2ztWX8bSUiDmnMPNKRacF8FhskutvuXDbSmDB",
  "key10": "WLVE6wYLvaug4yKnTVVyxGHpWQJNEop3wHbmVWGKQRESpbzzYs3dzihchusSkskGYLE3QaUKrKx8ivRLmEJ1irE",
  "key11": "5MhicQHCUe5WyTQweLF9Muea5YCArwvtwaMAvXBsDWGyVHLugFRS2UHuSYjD3qMKUtUiVe8NeMfcEQnpEQEX1nGa",
  "key12": "59b3SNjs7ibej694KbbFM1LiWThbJ25L5f27uufC99Gt13ufsZ1sKf1uUPuG5n7vhWLGvoZ6nq3rkgr2Tx1pP9qt",
  "key13": "2a1VnCU6grnAh6ceySi9LAvRWG57iNZzBBJZEAG1v6NiYVVSoTYa3XqRMUJRVhbmkh965LWQSokBBNadFGj2a1M8",
  "key14": "5xF9xRrVzZZWW3ZAYseP4jTKMoMufx3XynAaihHWzx2RJyvaLKo2oWaShhfjpX4u3m25U9woUamNhxGbvZKjC2mQ",
  "key15": "r8mvY3TCGTSVrdW7WZFK2XxHrUKeTkgm8kjUhjvy1dW85eruGAviZRAduxa9zaQ2BwvYMBrjpcZ8Bi4RBenc9Qo",
  "key16": "29VW76Ni2GusLhCnnNBBwdibz4Q1KhsRxkhBoLPr9MopHazS4V4LzEYdQxZiDp4LvxWRTNYRbWCx16Pxuuios21J",
  "key17": "5qLsbkoTD42RKcUWYBncHUn4J3ULH85F7nHW3gfKaWZdjCT6adX9UgnA53TWUZyrds3oXBBePrTKkPKj68BWH9qN",
  "key18": "5K78MXRnARmabiddZrRUpzd2sGXaesK3xgsikUPzTT7Hmiwyq2SVASCrTPBvQraxzSgxCbzSoTHCmWhE47Jbk9AK",
  "key19": "5ztkiLbPc9yQvsqssSHNnJxqcK71V59YwNv1jrq2cmPKUWaNhRw5VeJw2t9jh9f6W7aVsMgiDpBTRSLEmLpTKLi1",
  "key20": "44J26obEtRWoZwmUZjQVCLbLGQ3bmRcB1ZrbsSuC8uAjnTepLajBJF9GtFcDS96QUmiHgdcCnTpeokrzuafqnceJ",
  "key21": "3fFbq5wTCD73AHdLmdrY43ewwnbHyhAXXnoVBzhayjFXoUWdSTxPt6WAMBcRHAvzr2eJiG2dn5PFtwC6W9AJXGm9",
  "key22": "2GtFYT5XMZpe68mCu9vzX7FCwHGY2iAekSBAMAEU4RcdwhRcdYLQYTJ3cfUvACkd5XCCZuvxWkpVGGSAbda9CC5s",
  "key23": "3HFBYDG18uMoipQT7XyVaW6uV5vgvCcdSvVL6L6ApBJA6CZNBu7xzkMHbYhy6HQ9Sw8fV1j4vpASkC35ADB2wiR9",
  "key24": "3GoynshAPX2KCF6xn9N4pxkFs2grGkJ8ihn9CuQ2rfQ8UTpztALQtrz6szrQarjDKjMytfeqcQTEaVBATtfjFwEZ",
  "key25": "4BgPMX2PuAbJk6LAnZAaAKhHfgQt1sSVAyD2T6P91k1abiWNf16bt5BEYN7ouivcVBb1dnzvNSd9aJcoxHQLeA9x",
  "key26": "4vijzQq5suAq38koQhfzM49g4uXXhCCYKSmqUChCeACZrRiUDGJ6tUFB62XsVorJTC3xJ6BBd8cHwYf63LxNVAPZ",
  "key27": "4xwGuBCnWwziva9LeMvpkArxCDyptyM1saX8LzuA5MDbYpH2wd3mLugt7kHwZD4eEiCdjxpxDJyCbZaR8HFS4GWm",
  "key28": "5su6EQ34A4Pj5y1Yt3i5jQtnjQeSZU73ZfHpByLATJJxQgg1RwA67usew7xD84Vu8uJm6BThu37P55Qseuvx9S4f",
  "key29": "4G9PWGuFoyuyzBrUnfoedHvgEiimqYA9hVzDh8FdRHHcQ7Po3AbdsCHJR2ZeTSCjaXTDBAPzRcFbXSpRFMU8qXRj",
  "key30": "4zgpSn3SEHePPt3WwM98imaLZGyBTjZcjC3U6bcnqgBP81qtxB327rxDXmrz6wGT6fqa1hFY1zohDev55z9TDZNu",
  "key31": "2B7xUQ4AkSP6yGagjLARy9JBVJpA15Xw34Vdz1Ahg6EFhTYbj8cUrCUtmRdaft1BMBo5RjFhGmu3MvokaXXepBiB",
  "key32": "5BdwJdSddqco3hvPQEkgSysFLhzPprmgzDkwcJZj37uAH4wVcq2UAqbEioJFfMc1Rqt3n5xjpS7orV5y5mrt43vQ",
  "key33": "4mz6druq4oNXkMZxDbPTsW4Ke32dbnC4Wf6RCguKb4AKdSaBmFD5n8uwHD4Vd1srs3dbSwSb71Q3fe62u5iDVJNF",
  "key34": "63Tsgqh67EfgAAcSmvziLoynN3wBXNExre5n9b7yaHJN1Q5LvwAJHUQ2X3J1HLbVoYBp9hMxWTPFKpkARR4wVD9F",
  "key35": "39FP5Lb3RBe7ZSQyMs64V7ZMo69tciK4udbyXEmevd9Dm3sKg27eMFFFGqF6Rj7gMmzntSJZLqo7iW5r4RmruUGy",
  "key36": "5vt4dkWzgbhKzq7K37V8jsefgX6JFmefFAzEWPKFEeHuLLCEtu5kCS38sVh7XdCzRuDV2B92w4aZ8ySrTnfU856C",
  "key37": "5aPK4e4B3DynzapnU1in4RtNs1FTiQgsQwF3Mk4fF38kzZxzU8n7bre16wt8MYGFGc86JokTCzmxvn3zt1ERP34c",
  "key38": "3Prz3oFy48aHnqJMRzLAqqC1SDvBGXvcLBGdp1gGNWCLAZiK1dJQied8ATLbFviMF8uxfGzuhTUA7rP1qnfgPakr",
  "key39": "2P32uXZ8aeFboaCt3KKwa2pLz6rN2kpGuEiUy4sGK84MsiKgwBpfQ5x3TE4tXcKNVy5MG57Q5NUgv7saaVYo2wHj",
  "key40": "WPoZDZkCYp5eja2XUzAu7SY92iWR1JeAUCnTqgB9EdLerTRaiy6WxfrW3WvC2NQ8G6nizdeCfdpobzKCSsr9ZPP",
  "key41": "wUkR6UMb6iPT892LzyZh8hRR9ekkiWv3i8bzDP35m3qWDYrRTX77yzPDFJYAoonM1Smo4YpnYxQtY2F6dvu6D2f",
  "key42": "33imRn66E8qcLLUyRnE6LiLL4KdcpbRt7FvbiyHDzBAHTq6rgpJKVbRjPCqWv8PsS34fq3b9iEVJ4TgCLu7QrpGa"
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
