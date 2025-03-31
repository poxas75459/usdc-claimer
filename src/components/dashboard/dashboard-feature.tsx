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
    "5kLLJDde8DQTDQaMSkuzX8VuTz15MEamibZUWGTBQYQXXjJuUM1HeKEGGrcCw56su64Em4oSpW9ggH75mz4R9p7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B1NhVXBj9NHYCYXjaLKcyGY4P45CxX2sSQTmC5esHZCrN9VWqKGXaoyJMuVpARyJYwFh6RfEJHYZTGu7X62rbL3",
  "key1": "5KKkyDEeLMedjhaGrt91dT9pT2xeLoB4pAG8RRbLHBV1oNafxxUFw25oFR6irXBJpwLKCAYX12Z1A69dMcfqzi65",
  "key2": "2bFGmpw9f4haYrwMD8Jwozy6aPMnRQSKauHgoSuEMUqrj3nwZK4yZBhjVKada6mw9iorjNLSDWHncksTDc378HLW",
  "key3": "5UTS23s8Vba9jQvUBVZYDqoUpRpsxAiFNXgCE1eCCHjzyM3RjfyemK577rJ5By24WcAjjAg7A6aYrpfb3pqYtFMM",
  "key4": "551Dy3YLeyMwu8aFwZ7Q1qAyB2s2vgMSHAZ7Hynubo7647WrYiAC3NUXNgMgYnrokdtGkN8aB1oNPEZuJpVyTwrZ",
  "key5": "8r5GzA6D33GCbxAmJ8FFfxLuCHHjaiy7ybiTW6o722hVD3CCBTDapPbj1yy5X9VdwbY8AdrXQH4mSNTNkxf3SBZ",
  "key6": "2yjxUzvUhTS1x7MDq7Rh6CsmiPxG237g5jPF8mroGyihBTTXv7QNX5x2avdyzjjkyqVcnyZcuowv9okqFVBHHnPE",
  "key7": "3G8n1myuG2gSf3YrNrcAfCi3TfHg2HyH7coVURHg7XvpvsEG3z6CnPbEoyMnpo9VxezMFWcbn1ZCpmDYQHCi7VxY",
  "key8": "3VpQ6pemuRm7jRhzLve13yJ1p57MaXBe2LFiv4n2BVV5roXrxDKeXddyfWCRbc3guw7ZXquEZrsAj9sYvZNX91Ha",
  "key9": "4aFciU7PaH7HR7McMJ1KJC4L9H95UF2J9LEBMba12BuMyXWd8nTyTcEf3sdyPvMPPrHUWi12TigQinaW3fQ7bWhY",
  "key10": "3FyG32QTu1ng3EbSY8bnpTEW1b5NXta91MXsCmnY8nyCfCsPr8YD8bAominpL9YJxXDd2FVNDvXw3YUiG8cUEfba",
  "key11": "5k7jX7yCsEBm488CeyQ9XnedNxg4C5SbWxmin72pzwjZXudqaC8pzuvkcb8ZsoidQADvA8sZVatB6jbpETtUXqC1",
  "key12": "5BCzoaoaAT5N7cCnjTH4xPoCKkA7nxjqapkBzDqHrYWD1YEdLzV2Nm7g5rcjQDoAqpXeE1i2GJVcYkQfjKsNFgq7",
  "key13": "5jgPT9z94GwBAdEyi8V4a3pLDubHXvK4gqhvc7gZCiBFk7AoBDjAzfFRqnQAFY8ZsfJQqojHMABBXFNgRCVkhcD3",
  "key14": "55tnMXPuij1K8VTUcSzuU955rYqmZ3ok9XuHHS4tbQDsraG15oEfpiHzJcYA8hN8aeBkL4zP9P87jYv4N6nnmPcr",
  "key15": "5HZ5P3Js5Hq2P8XYR5MVTbBZ9htZaDtuGAbmWQMoa8DQWkSC8Q1mwrnYtPGvzfNCqJoiiFqXLYcbETVnr2QJzjnR",
  "key16": "3vH4C7YUQWR6vhEhEBoSCkeFaoYPTArTimAgv8RWPdRPDK7dWif55NvQzrfXoKNH3774VXpDv2ZQipuVRDAFAHur",
  "key17": "4pvW91kV9hFMQjHgbyHnzhckBy359ytvxMPxcBDD1tqGH996ibN8XHyiaP6NC9N7dzLXGiiQtjuPq2EfSqPutB1v",
  "key18": "3JLw6QnTz4QrndNF3yumzYhwrQQudto5k1ghyTA2xYyiwAt5VHr4wdDRPtFVvMrMLW5HibMV76DWNQ5f6amYNNSL",
  "key19": "2ioe6wQejyx7M1wbrPPpN3ThPXtmWPyafJVjtMVPMGcGo1K9eEaAcPosze8qiBLXFzUeCtMbXCK2vCg5H7g9NhoW",
  "key20": "22NMovfQTzbbRE4XNCM6CLjg8qAcao84S5DNfYX1ybdsLPL2c5rscNpNp4dkkpjf8w9rS64GAND8Fa22FY1GyZF2",
  "key21": "4QntLJtUfA1SYTKSPjKg13TxcwF6Ub79dRwF8BrR6ud5TGXSxekTBz5tvsXEMmGhkSurony8bsWbSNmFVwRWxFWQ",
  "key22": "2o9Uo7qfBcNTrsAHEX3fVQ45xhTU4pfPTDovPPBSmGKE3hnTV59HuQKU89yE6uWRk3YovCr93zgPBn9VCAUcXXmt",
  "key23": "4arEKej4fLCwgTytMuHRkAZ7g1GK8Dikc68RTyohwLfhEdhCZENXEaVPHojXXE46xjewZiYy7STkWwnuVvzSmsS",
  "key24": "64SNeYb1vr4njTv4QtvdvcDSVZBiWkeqp5BfBNVKmpU93n5YYUP6oSB1YehsehbYu1iaNAKMBXiCKF1L7rpE3Ace",
  "key25": "5jX3TFZS9VuCBF33BByaKdGQiwgaG6YQ3LmP9UNzrBc3o2vv3dCgW5CQnuT7CMjRPUGACh17UoCRKpNFeXkvQ9pm",
  "key26": "4Y5UcjGvUcZ4NsLnZGfR3F3UaGy3hpEzyydTBvnGDd799J2ifAoTWya8KG2ASnpEoiDRuaJDsPuXMPrNiD9BhPft",
  "key27": "3TP1ksuyPQKLqrhVKEteBbpdR6dYoDg7JmBKDwRNi15unZTg8itqZLQVPcbN5uH4HEji5koEKBY9gPdmQsqyr9TJ",
  "key28": "2TrLFxRhsq7QVDgNL1LP8cK4PwSQq6qT7ManbpwzddJZMRFUypkRVVGErTHCdYwbZdCryBDKDqSfAMhVR7c5gAzN",
  "key29": "2yfwqx9NfNp3BibYFhCA5swSVB5JzZYHM6MGQfb3MzszMKtRcQt9rAJs8HvKPKDYzJBoFJYPHxoEcDANizVuZUC",
  "key30": "48qJJpYQxaJ9EGqynb3NkFeB6xRCWNo2ARszqp5SWVZGh76gvhkFkmWn6a2qYPQva6d3WbctuqJ7Z5wUJJA4R3pq",
  "key31": "b8AajH7p3zXsXnZVo2ZdSUp3DPyaQW8MSRwYg2FxcH4J8qgwWC8vDXrVwUUMkHPkCLP8q6dmYubKzRnv6w7PpT1",
  "key32": "3zoQUNuRnoUYjgk9iGFRLmPWzU4eW7Vi2FdV3abuVsvFwej8hG2AJiTLnxhtsdtyLS9qwK8eQe7LqQAu1uFF55sY",
  "key33": "34nyGaaFg7GwG8wcgapFPd9D3JuDRFvHXGiLo7CRR19N1bBCbDqduXrDwLJqfzNgDWVPSncQjQCx4iCzANnRvNyk",
  "key34": "4ZYnagY67v4hiPXuR3vfVuPYaFxgGALD6gQJFYhNEQbUMMFQBksE3Q2fX3nkjYLdkT9rCDZMZXe7DxMWDEpswyyw",
  "key35": "4z75kQy6q6eUVc8KimwyZpJQwsDeUR3nNx1dv8q61QsvQLMQ6jUvYsHqQKPZGukhkEbLsiGxWkT5tjXFYNp5sntC",
  "key36": "HMNiNokGXP9ebtJWrRZ7tjFLZK9EFhWiP4HxDxMgRS2Qspksez7WChthmKuh19kt3WnwfW1zAytDFJPQaf4oLsZ",
  "key37": "3z2wErJdN8Lraiwf1JLVk62kbgc3WdM3y9Gm1qpwpZ8TwtNJoG7PfpTghMw1qUcSfFyf445DUdULYVmzokj8cQ5t",
  "key38": "28sBg1u11RH12RPcD4XU4YUgHCSVyVPFV4BoYaX46LPa5iwgqdxMahXHGjubxMzBPx9xssiHaMdMhscvtKxtHstt",
  "key39": "DsGoBG25UpHT6M5yPnk4V1pFAV9Mn4pZpFnP472Hs5xN13vg78gccPtJ4ZwJQUMChJK7GmZiRYLhBhwcvvbsNep",
  "key40": "KZjC78CVwuKZVWxxPmoKdZctayGg2TyN9zY3WzZmcwMpa9twiE65iY3MeHADhCAHP7t7vuo17wcF1Dike7fUkvB",
  "key41": "4s2S5qQBqBrywnjALLtb6WoiL2nPA7dmER4pAHy4Ccht69sy7NvUNiwNEx6pReSan92HALGv83Vpu8K7TUqH2uaY",
  "key42": "5eUw7DkoRfRTLJkCoSfmQPz9pWj5FY1YcL7v4TFWbtP53veCLCNx7QJqsT9GuFiCVjJeZaCijveHhohUmNctFFNB",
  "key43": "4aGDDLw8xHtsnMCoT5uTNArGSNNq9tRq3Lz2ng9i2o3asQ7spMYdKHFiVjxuP3VLgTu2B193NN6mFN3Gi4zjZq1B",
  "key44": "3uqQjCAvTmkAnWVJLg6VLfwwXq2dan7pxAmtw5idVmgfsoaPG5U2dG4kERZXwWD6jXVP394b9DPsYe4gTsqdZewS"
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
