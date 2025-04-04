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
    "41wMTmLX5AcK368M6myCzLEPrSX4MzdGaUUDYke324cUUNcRpMj2yTzps5UX5ZTUErp9etrciQKJrSTAq7bwj8AH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32kuoc4aTjadV1xnfn8HQr1eh5FctRFF8F9gntjH6emh6KP8ED3mKbGCWosw4TSCgaaGQGGGGpXGrXnCRinetUT4",
  "key1": "4uKjQBAFg2yKtm41dBytAcqDWXxSkyQyAQ5Up2dMGmVTG6mDJuYVQffA4YVRF5PQRoU1nHToSjRhCVwg2BvNGFSU",
  "key2": "2eWEJfmr9hp9NNkWm3HY3egGXekTL7agooYm3bHbHmW4kQpngS4MPorW2CESYdM3n2fXnYqTEJLSRR687x4eBbt2",
  "key3": "3tG2NRAUVTnk1CH6YnrHmeCCRpG9y1mcZyCr5wmCz3mDwWGRNcNr1GHFdNxtL8hGZHn29dq3PagdoHdM7wxuDkhc",
  "key4": "5REyFSjEUcK8uMKW2ngY1w1TQkFBgfh9dJAHi8kHQh25eCczkm2EGa9wHaU6AWWJyBcWVksB7GejpwTwovJK4y2A",
  "key5": "R6HcqkZ83V1PZrPDYNrm1NoeyfSrVSVzcyDMwKogzPux5Ek6mEc5i7dm97f5bGgEdEBXkxyNZK71PQ2aUB6SMbe",
  "key6": "4N3jASdczCLuhJnLx36XTFz2eJBqSoYS2ejhog1oLuqVNQX5uyYyjeqj4Yf2hdC2LMVFD9Sixkz7HdjWuYWvaWum",
  "key7": "2MQUQXezuYNLfq2Yh4H59JgWn5m2JR3ByxCTA24HqEQ4ZBLc3cYfT2dR8pbw7hrmtjrKugUEMsDE4JeuRy5Cvvry",
  "key8": "2DbZHZs2SCKD2MoPppYoPvsrmWpad1Z4KicAvSbdyoFvxKVaAiizQaN5hrXSW4EaBiAc86GFcqAdDgByVTDzRz8g",
  "key9": "3Rm6af2bSok7zYVbK7urmuSYD1etmiZaEKYEY2MU4yCEUyy4fTGm6iJuWumH4yewLCz6FrADuSgNmPet2MQZdBt8",
  "key10": "3y4bXXwFhgrdVFFrgeakcZp3iB1Yh13Q92c6ZCHAzkuNjgUYS7cA4CtXSFeSoPj7om7TMdgxYHFm37C5woHDyZxi",
  "key11": "2JuinLC8i7geoVVnFyACxk7HyPj9EtuGxVsRKovRsXbZafmsdXaNpyyMU3tD4HtvknyB3EURpiaSz9RUyfD7e9i8",
  "key12": "3utguVjB3Tvj4YPTBdidWfLmmjstiEn4NhmAN55PJLm7EsFv3XbC8vnkhgNrKTM1rsC9ocvB91pn4mbD7Vhmnweo",
  "key13": "4mNgcyPd8pc1LnzSYhmySnYT4F9cAoeEFMH346MDqw7xhPnWksovvbS7CYFjQfFyzR1fC9dGMgCiTTzkoZN9ZEeF",
  "key14": "5ZEnyChfVnQ8gsUKJa7b7FReX1oA9ekw7Ti6KpTsPtPCUKX8kChuBP27D2JMiyt5VwJLGrYRJUEqgJP28QKkPB2Z",
  "key15": "48wvwSM1Ya1VCshcKvXp4ZKgsHBFvVooFLBhHUELjeTJv7g2KHRNYkUGPtNy5ipPatsAXmYcWYzDAvop1AzorVkN",
  "key16": "Yrx1Stn9khGdv7METjN5FwpFXZSctnPMB6V91Z9QtTinbNcJSEnauVVBXLkj4bkHCVGvLhNdBm4SQTGsEeK2UHT",
  "key17": "3EuuU3Q8sRr3MqUFPEzM2SGTqbphG6qSEJJNEn4s3QjfKDasYP6AxEiDsTm3FBSeA3vw5bShnnaEKF5CVwk3UMzb",
  "key18": "4appfmQTQa8eDv9TduEhsq5U8ar3C8oSQfbSXBaJMrG5U6TrmVnsiM8RtSg7jR86bKniK3QyqPDpyZMg8NwJmrPr",
  "key19": "2aVPJB51ePnUoveu9b5V2XbwcEh1ccj9py9we2bEjAFjhXFA2L6otLg92WfNCLNLAzpP1b9FHPEmWSLUY9sYvP8V",
  "key20": "5ag97pCEJD6RXGbmQ1eRCru3EvEzysCFhZNe3SqDKJ1vT53NYvm1FaHkBdUMk13hEMQcm89BHSmeYdyMYnMiyeYt",
  "key21": "3DBosso7hvy2UvPYHWXejdFWUB2yKJjEzwQnNYhpjfVNQTnjZY8HqSgX9A3GYgf9xE88QMndPCvhPmuE3PHkFA36",
  "key22": "DMMrYVkAhW6J2bZCJ3EDjx4BU38jugkz24TjSWDXjJRqVRVjgfCUmbAQzb5JDPjtipJukAKdLtqnPUe4D4Ea9Ko",
  "key23": "5oK3GZ3WCYzbxRAxWuJ2cNeFW2wpFQErdLRe25N2YEhiXTVWuD4miDwmNTp1vut7XpcXwdhrAbh3nmuZHkjp9vX7",
  "key24": "2pWH1ycKyuPfDNdK4TUZxPVt7fiDCLa6aJL7CbyzWNHhdKUurvn6Pkx2nMkSV6Edo3xKjyPB2ajMsYxpMdHJ7oij",
  "key25": "feb3Be9TVU4NYBbRREpFf61DRShE8NhEnv7JQmmv7d1JcMqpDYV99ktRDGGFmDSog18dNP2m1QkesqGHM3AFssN",
  "key26": "2GSv4iVhev7XYj5MATkb4eZNiEXRZovPKmUPK1zUHRRo11BcPA8ytHaM2qYFNTW9yh3h5JmZmkiJ4e4duhDNiGvM",
  "key27": "37qwTWiAw4KRsU9m9vk6YUWbepdBT1WeWE2WK3hsKPGvs1WcEmkbtUYi6sL5pTqchV833pAimikoPG3vHhuEw7WC",
  "key28": "4UoeX73P36tTLcb9keWakTLbe31e2pwZ2DXftBKCMhWpSYHTHfU9iEKbfZUV8L7sWD45BuojBikBATjjWRRyvwgo",
  "key29": "4wmUfnfzpb6XeEzHWaJhLL6nHP7TKimeS7wQkVH5LifuNJPNMGnajVc4XnKr11U2cdxKveg5X4JnnpvhmskifULN",
  "key30": "5wsB4AM1Y2YDcusji3qgoDMrpScpwZjvjKRrLXJEuCxjS6cfQattF3sWHsY3fLdFnwsbhwwVjnRCErCZGWcv7t5i",
  "key31": "4TME1aAxnEoovKbpSJpBQFCuTVFim3jPn8sbXzmA7Khhq4BrdGnqxX2RUSupH3LxTBuDUSZDaJFeJVMtjsPjczms",
  "key32": "23bnoM4sYNe2piHtYxtFFnp5Bx4JtLzQdZYzfsao3gudyFobGkmDNh93gmEtZbdGxHryQtwwYTgkLVx3yVtceegH",
  "key33": "5oeoYeJtjqzeKqLc6R7VjwHTMNCDVtqR9rr4h5jdRihVwg577nLspShCGt7r3bq9cFc1EUz9g92P67JYdnDx7tNS",
  "key34": "5Zho4QB6aMK5AyUDzdNSLPfvJ2JBLj7BB8Hq7CRxtkYXLwCjyTTMNv17NDGNmp7s5FJ9kygQyew9MHzJh6u86GtR",
  "key35": "4jjiKhoBxRABEnPAQ53b4KfmGjHv1d2mkAhrMm7QFLdPNtm5cLAcRnbeP75HqTa33FLZZ5E2MtbAC7W9aADgjhvK",
  "key36": "27zqcp862GDoJ5ZDd9ZtZW7S64Agdiuabmu1R5xTFgbpetxL5nvMzfgiu52VuZ63HrFNh1c8XqzWDWgaPMFATFy9",
  "key37": "641oQPQRP9KcSLG1sbR9yxcZVXfit9NT5PVkoS6fep8nSXBWCbernQEvrcaBMsbCwutbY8dntFirf6mp3XngynM8",
  "key38": "2m3FhD1UndFveQFCDGvnsTvA4GknvqFFJaemTUCke1xWxZoE4P1T7734bzdtpYGhXGZpnN88MfGSVDNsDYVP5SJf",
  "key39": "22WwKua7ANJoreGD8xNgK1Zp6TyZRkyxyyDj3eQ9dj32uUddiSE1GPdvE2aNiyw8Y1fgH9f2zvpoSWD8dswoPh5g",
  "key40": "3pXCuhf4oRB3ntnte5pVYNDtgxdsFvmL478yCGb34NJbHNbEzen3seWa1hxZWBjFgYgXJ9tvKwqe1hZBmdFU2Pfn",
  "key41": "2nXLayKacRcHnsBakgDcKiv2jAEHVZqQDqMWeUAiqqkGyCJ4pU3ixxyEaUkxYPkZ635sFuN79Qrng4SQ1ADPkpn2",
  "key42": "2yrvhoCAG7KjjaLuxtqhqrtkdhsR31NGnbB6WraWfpvjXgRrrm5952EowkQMqzaBVTx7tfYtteaEnv3yxEMAtAQw"
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
