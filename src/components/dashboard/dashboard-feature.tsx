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
    "2ZjwaWRnddEMCwegNWnXp3Exm8Yyc3koRjRduYLvSde9XVdTkvzNzUmR7jNcET3tnUnRFwasVXhqiuBRuun8Wv76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kAv7MsuDTGFaEk4bGHuAGtVr9iKmoz5dF2ctTx4HPnunSwSq9ZGpR9uUTVPKETLhwnsPbRaU8WgqyCCVhGbWzcH",
  "key1": "5U7cVmiQbzPH6p5ysbhkqy6XYrymkwbhJDfnsqg3eMk2fmZwMXBNbADa2joYaXTZJp7WFrC9HL227yG7CkVQcjrq",
  "key2": "4AqqhpExqrCrc7cu53CN5vuFedpeBoDFpNSegQNYeC4UAcEe7JCRgnhKGhNz138nb8DfYxWqxccvPBGaB9syUSQb",
  "key3": "2xy16Z2U9u2uGFgBmu8vQTwFeCo3J8Nxp4GaKZC5wT71WJttKzChigvu5scpwMev7LLMve5j9omibe6zo4FxsgTb",
  "key4": "3GysK6B4rGgZzpXERMKNatrrUaKGtfo1eybZM4rMd8QjDtBMLbYQ7HheB4WMCwZZzjtiVuANcubzVfq4XoLwwgsV",
  "key5": "3kzSp5xyt2f6URhtz4Cf1r1k2cHWsg55sSvw4vqpJeageNyBwxB11rQpDvgj6CWQZXSS1WMM8ozDo4QX7ZPAfwsV",
  "key6": "3juFgox354UFLSwUK4TkJN9f2fnAGJBTdAwT8Q1TYyLWSSQzLEGLumoNTgb5rEVDw7DwM932fih1pnhDBUMiUWGe",
  "key7": "SomtobHm9zQAh6FheCjWtrVrhqLbK78nJoQuyfWU3HncXYdM2MfmbAxC4n8Q69KrUgDNJA1sGDsdXQXi2s3nAhq",
  "key8": "3xS44AAVoaVNG5Y1h4UX911aXb9H8W6oERX4PjwHtqsasTckTGAYTa2YgzDE3axa6ZubMLYsgx6x12YtabuMCYE5",
  "key9": "v4nJM5Pe6RptSf9yVJ5UCDQZ8PtAwUuZgtks72tnZDJWgJDUgg49HVNAURwXza4yooKvNvr39wZn53eCCQbnbtd",
  "key10": "3M9EN8WUaR6AA69dEdLsAF1dSkBKxEf97SRuCxEyZk6Ce1Zy62FxYQFnsYt5q7YT5rdo2X1sZsB9845QCMjQUCG3",
  "key11": "aWwgToNXqoDDGEnKF53f5aA4gAyFABch3k6338yx5ER74Vm9Hqfotb4ANMjL5wp4VEgbhnbZHdpKzmyx3tg3tCP",
  "key12": "5RA9dcGZsEGpdNdf4Tn9d7NnJWtkgSuvCUjuicDs4hFraxkAwprPansN6cttMse21AyYoYc3yccaRVKQxnbbNkvJ",
  "key13": "3dFuTpFPZg3vgkUtKCYiWyuJBCoPpswk7mtz5hB2TtL2YyXJy6V9ouMUSFRsbstkQRrPDTmE2twgN4qxN3JNo4iP",
  "key14": "4hLabzoABJg1ayxPUdHhTqNgB5Lrk96gJ7EchqdEHwrREwdFdSF4avemjurT6wLE5KVk6cYgboQN8WSxR1u7GFYY",
  "key15": "2Xd9zBaELJMbQSF35WoHgEAfsX8VAdHao3hAYsFS6pzbTC7N1y21ixur65LKBcPHrq6bt65KGhGDrjDbC4U1Lj7N",
  "key16": "sYD6ourngFVwYNo4APRsG6wmNz9EvZE4bcr8Tu8vVxz2hSdb9rTekM7r9FLqcHwkmbM3w27fRqe5Dnp8XMrFC1A",
  "key17": "k5roT8wtAYCRZkLkaXjvsLkByJf2VwQfLNELQB2ywroGzwoU86DGV9ykcRg9RLWaxxJzBtphzZL71o72scJgWai",
  "key18": "2L46eA9t8TBGMW43NQhbveaAqeAhE8yhrKxddAwJPgG8KAzY4YbmAoM2Jzb7rNg636etkgHcUc4Hm22uNaKmvem1",
  "key19": "33FpaQ22xygkPwzZvNXBrZ8DABEMaB7TUbdyoMLd9cc9eov5UhpTHWTHXkcNfAKhep5ZBcaXxBt5ozPDywoW22vY",
  "key20": "32CNcLYxXXvGimCphzyR8z6CqhW9KDX1TR2zdK7cv8DJCxE5WFP7EhdQ91t7cKZC9gpSxwtpGPB3a3U5knZNm8rw",
  "key21": "3dKyY36XNZdDdniwif4SKES2DFMLwm911RYL4MHHHKYAmatB4W9zaGGXMVach2yti2V8CdoJmBp7pJhhrjTaCknT",
  "key22": "3pcYPX4TP5ahZms75TWdzXuaokoWWqF5FgtprAtQ7BWXFHUbA8Fua1i3K2xFjCCGPXPzrw6qeYnnV7zw9wWRcqUU",
  "key23": "2w7PenC7wGtEWybdCuby9WVyexJEi8FTeS1yK4BUXmgpPPuHKHBtSJ7cgDLBNpQqbrbZ7ExrhsBvuw64iuHp6Dwg",
  "key24": "58w4NYLE3jbwtomixYL54JxPfdfyV6NDHpSmYhDWT82krGFCoHkKjQxDCr6CXQDgYp1pbvAZMwG7HEdLKkoMqtty",
  "key25": "4eDsLxKLHefwyx76DC4h3x2VyX93L3uKBm4uNBZdjHEVwY94K7ZjaLc8W9NJ4SsZS5AGM2yVTxckGbSeCox1NVbU",
  "key26": "5EB8qzbWnVyiGEhssUWpd3SuYHJWLPswXqVLq1AqCHaaCHMDFwyv35a2cJ5TEgkRo2q5sMaV3ShQHBwXF7sriUAg",
  "key27": "5BnC85xN5XsNrPsqkFfcva7nUo5THKDfhR8nYHA7DppLZaA6h51pLR9MPX89XSsf4hL5MF5kUjMh9iELPiXxiKVN",
  "key28": "2D4AVpuzmDDx5aVBw58eS8Cpbpyjz9oKrMBKok8edAYdeMss6J2S1ryznNAXx3d4WkbeFfN9rtWZVx2frxxEN721",
  "key29": "5fjCpaKfmFgZJJGeGg5JN98xme5Mm68qUsaxt6ypaH4mz9N8Y23KtTPnRg7JAhtm6XBoXJUj34bomoEZ331VaAxs",
  "key30": "3aivAfkQtweagvJ99RxVyZroGsRxL7S2NrSq9xPW642fWc4iWjXcn55o4VeAiZuPkmnJRMKGHW9RGLXCCNMivbJU",
  "key31": "zDcPZG4b4nJjQBGRUe99fnnS6EUwk8WmRsvzVYpZPx6s9gJkksGa9rpW1EenM8hvbLaZRRv4c9tZwMQowjW4a9F",
  "key32": "rBpXqDaxMsLmNaUDPsbz5wWzwBsdavfbDeKboeuF9VRPNgGLKHtttU8Z7jkACsj51mRYYzfLvjjspYHpnj8DQ9b",
  "key33": "jwi39k5HE3T39FXGR77N3rqsbXJCQD3JaBrXwu45vPVGb8LnDhWzRtcU9tK2obUUMDY3Do8vXBasoFnf78M14dj",
  "key34": "29bGuZnTiBcVrByFCUNBQ5x88ddhvv8MKpmWAp1RtRq8tkLuHJ3JLsCKYP9fBseYNp6JiZbaahc6BnpRs3cBRHZU",
  "key35": "PTu8j9Ad7rP18bDsQPFKckk5gSkyiagyLSezsSBuJL8VXFotugVj9wio9tgdVN9nQgRBHEoEKcwyMs7g5cuvo5h",
  "key36": "Nh79dnW8pPpGxckwfrAXSoRRZhT4tRnB6uVkYp2D1gVcthrGzqBFm5Zz51r2BKvYg8vfVememFN1zd3YkRFRhJg",
  "key37": "4x5yeHfyoo79wTXKGgSVbSsNM5fYo6NN9h8Z6hDK42K6cpkr5cC5kYNVAZnQCr9UBPRiP7x6i4r6TU4qJpe3cYgZ",
  "key38": "3LUhU2thE3VehG1WS5z2u9HX5UqfcDcdmbgZDjWhinYND4X8bZ46mBWz26nPVxqbm32qEL1XzrGub7ERScqA4VYz",
  "key39": "3miPznrGfaiVvrR9L9umn69Bur8SuWA1vnM1qoLTJbuMcVSj5jSWuevb5HX6YmNvepTag4A9HsW5ibSRTVcUF2UN",
  "key40": "4djB1VyijJWDBm6HzUrRi5faPrxqp6nVoXaqaVyp32jB2r2Jg56zTosTCDeTqR5Gnhyvn4Ci88uHHWvB3XJSfy8J",
  "key41": "62HiNxWFU4fBWyLX6PEVif7YHgRe7QG3ckEeAUHAADGSzvbuhwaDgkS4p51MDqGiWr4WoXwiKBMruzTqHNVcEMez"
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
