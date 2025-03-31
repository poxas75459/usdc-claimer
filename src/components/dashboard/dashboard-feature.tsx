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
    "BbmB212Zd8mHrr6waoovFUYQ9u5neW32sBPPWzZqxiRRdmWoBii8CA4PqCD9icg3fGf1H6kv9HtoUUsznjNzsnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mTwWGVGzJ4TuwMHo2Hxtt2DLNyYGU3j3WaYkBv8nbXRrVogHNopk59aTT13nvgKW7LXnfXiwgtpqiNu5AjgVksW",
  "key1": "46voK76SSbpFvYrcnHc8jwp1Nr2FkUZXP9Le8CNTYVP4aQL4fQz9A8PE6Uv513UC6RbBunLU4X3GjDrkaczvShs1",
  "key2": "5DesMzwWbK6d7ZnE5qqSwaK9F7wvQJRrRm3e6ee26fCEcS43fwoC8X9B95pURe9YYEDTWSb7TVDgAW63N5bY23tc",
  "key3": "4RziFR6fa96rZ3rdY9e7WDMMc21qqsKqhmiTPebCi2JtyLjPypraWbfEsfeaJULrxVT5xtsSYVhbU6r64JVP2Qfr",
  "key4": "32WQeLwYBiMCkdVejC2zEbV3umkLoonqgbMHjrf7Tfsv76Sqab8XKg2UXSaXw9fvkddQSZSbwbrsbzkLNV6kKFn7",
  "key5": "58DbytqebK1gC2kZqtLfJwmscd9FBMcb9x6zuBTxccAfkD8y21df2UtK5AKFLF5ECJU5GPNpySSGa5DdRMmf5fWh",
  "key6": "25sY2485dERSnH4EukN7WA2uZeb8F7EvRDWfAsi4fmnDizVgpWn1zesXBte5KacDaA3LLR5zp9jEgGco6dMyqYYg",
  "key7": "2yCVW33TG1857D1GapWv6ayXDDQGct2EyDVTEEgFy1E2JfGzbneDrTwXStumqV877gcUKE7gFmkK3at7SQ8t33cJ",
  "key8": "2FjeJrvgi6fzCRSD8LEajbAbV7C6F1HUVuiVo6rjU6husEjWbpdJ8XJmXAZGjwfBz2myEJEFiwC6zTjeGt4b8ehn",
  "key9": "4cX5sjHzRuzs23htYdXxawk6DyUdQPqCTNNyz2wzrbe4h29byo56P2QS78gKjMB3XSwbrrGpmtKji4Eu4wDU65pJ",
  "key10": "4U12WNiBDBDtVoQKrJ5vDZ2EgemVwjwQdxyXTssUfn2Lr1pT8sj5bUQWdSL86S2wobumLMaXP7JfvteZ4scUHTrv",
  "key11": "5HS78MxQgTwiWya99BQLAaY1gwFMQyrLwFoV6rp667GLYvLgBe1jShK5jfwPofAS1DvczwpBsao4QQYVxrzqCzEV",
  "key12": "67jWSq8Aix7PZ37LR2HEWS7Ag99EjsWqGBnDLuxFHtV9tQGZXvnWzGJXdJNGL5VLfeESyYtr7SU9eeZdG2nxH3hd",
  "key13": "3E2bMWiXqEeezSRXTPGe4ue1ivqbJd2HDb4V3u2wkUXXK8pgPZozLcDufKg2hKqGKu1nChSAZnVyDgZfDzLj6jf5",
  "key14": "37MDxE7d2hKRaQJBvpV6pREp8EYDCdPio5NjSYjZL1rUWQcmGz3wMwFcHY4uZEfXgXucdg2F8TzAdWyEe7bYNRHs",
  "key15": "4vEc3TkN4KjwM3M7hB4bqiSWNVqZg7gNVRKc3HDzbRbS4aiYH1G1w9BQB6WAtigQj25bzbQZM9Sif4KJD5VTY6qj",
  "key16": "41JSg1RtKbZTbpsRPhindG6LZ4RKG1pY4sKHscjtRfkNTXJqQxFyk9CzjvZ5h7AV3qe1DnMEyWyd3xmEZnYxMUAT",
  "key17": "27o5vUeueRTni7xZY1Ns9pBd4AUKbTXMbB4tXVEjvkmdB43k1GMkrXp9BRfEe57DkqLYsvkbA4aFVhohkqh7r5Fj",
  "key18": "4ocg31RcGaztPEyi5aHf875EgYWhSryJaCHJvu1dT8tGFxhuj5Hpa7hbPsoAsccjGKfwFKLAP6ut7sgkduktDWcP",
  "key19": "87KGGvp43YXD34JZW4eMK4nZohmddhscCcZzzRFiREBJKvEABFw3XdvAsoMRXU8XKKFDTLkEZLkCApJcMeRY8yb",
  "key20": "3KBZjsjeLYGpxBC2PoH79rUVtmNiVPQcjqZEQ1jjdhwKkA6UhTC3BjnyB1bVkcHma8psmiW7aBT4ZeWcb1yZdnw4",
  "key21": "2NzVhpNxVBk9pvzNWVD6wUimSxT9JdmQBNFU38YASmPE9oxzgS9GRuz7Gwq5Wr71aJRXHswez6dcANjDjNLJj2rB",
  "key22": "4a3fPyMfUQ5HV82fgJDo3uoNo5AC71EM1nko5MPY9uRqxzGCE539VeCt5oA8v1xMvoMG6hD4m7ebQFNk8ZxsFYYi",
  "key23": "5Um5XyBy7TZEsdXk56PNPnJjfJeqNZ6bdBCBKV2Ejg7Az8MfkB4EFZZSQKUAjZ8PZ4B7UczEvnnF9XDskyhqTRG9",
  "key24": "625qh6SAKRBMzzWNN9Lfn74yWc1GEnLuMBF2AGCeJqajXTexP1yGU68gsazR7AZTxYfM15g56eLqmQZXxmNhUF3p",
  "key25": "5DhWaGAGiqbjBXnPaCCJre1Y9taYN74BUgLHiWXgKSbxiNudevXHHzCSoG7iTKkpBLqWQeWxozJNxHj4qvkWzxwT",
  "key26": "2AjbccvpfcjbPrvHWEB1J6uo3jTXji1qC3Fi9pUAq11iZeqo1em1vV2yJw1o86BX9UZfhcwAEtmgK4G69T3vLcfE",
  "key27": "2DUGt5gNWx6U1v2qN6zsmXaQjH7amGxnVYt1nsQDgeyhky7zbL1qPChgXKEtzEPc6kjoqbQKBiNnKY4VrJveozQy",
  "key28": "5oPirNm36YeKgFu4GZ2aq1cTqH68YuU7tNqVpTMVqXtMPNjGhimbGuEyFVnisLJb6T19HUtrWZtdk72SFVvfgVfh",
  "key29": "t8MdJCJHj14LWqmvvHbtqU9BD97YurPMcnxEgPNQpq19hAZZGpteYAAVxFwLAZ3nS3Rz45f7Zd58PHuXQ9q1bQQ",
  "key30": "2kBBagzFRNQ5kpkhsyxBZwGyPdSQRWCNYmCv8Sr4ANGMBamdZ5p4WMaCVP8eVdyJmdYeod6hbarmcuPt1mq5UETY",
  "key31": "3WVHea5pwCbb2HUEYeRq1z29WvuyamvYxpb1BcEEBCQ2D5a8MBYTYMdjWAfzVDrqLkwgS1d9QrBrCsQWBjjZgxcT",
  "key32": "41ox8kbyqpawbhEVaBnBxsG2oGgsLXQitzj27FftNumgMyXvec5PwriQARnQTBnktkS96AGg4JDbm2ZozDHz1ywg",
  "key33": "28zotusTpHy88ETMLsaBZSxyCSc2tNvHmNkoC4ecCrnUtr6veVa4ESZAfkTw7oL6uLYVy8K6qiySGXXidyyysgYT",
  "key34": "3D4MMxBeu2b5t9gEAEKemSRpVV1qnUVfMGpPJW4bHkGKdhXtGhVcVPLCQ66twdVEJrTqiew4NprrLMdgpFXUBetZ",
  "key35": "3xXNCWQM8EzwyxfUmJk8ELcd6XhkgerkTkD5TSNy4R1gjaf4JMSTkiYHGUHnQ2YcEUCh1q8Zd8CzYehg8EtrHGXV",
  "key36": "GhCQYqqqJXeYpy8icTQzttHJxCH6trHJAMhgbG7sjPb3GfotRbu9z5E5F9dWJ1jrrGHWXxwZXKao3YKbjKcjLUU",
  "key37": "5cPwqg25sc84k4hUDrGYv3CeY1wsibZQsTkPPN8dcebkLysj663bmukR1ZeNHG1rWq1ANZn9yzFtTMfsAQdrhroV",
  "key38": "4drEmpoUHaRCdSf5FAuwcPcL2ARGM5CDJ4pXimBE7ACNVhTyhqHnmRGtXJrknZG8gKqM5wBphB4Gw3MPxxhf7LAU",
  "key39": "5RuvB1fjuCFqfYdwRx9Nx6m9kz47chPj43S6uYF4Cagah4f4XpQW417E3bcUZ5EF85cyhte4j2zHEv7fVZMEhoG3",
  "key40": "2WBgEsv7vwBki4zya4H53ty8G8dkvWJejxuDPThynaRxPUGXHxWaCyZyaCqmg7vZaKwCHqZxYXp5KBjT4eurVkM4",
  "key41": "DHaP4GLnUoxA6LZsos5LFWEWRZ9jcSVt9eMZcbmfR7wZdieM5BWFZ3oDGgFi7vJSoquAeiFiMUbZLdbzTUhPS4X",
  "key42": "DRVqJfDYJrag8SwThP5e7M7ippRpatvALyYAENMe1Dk1mngD7wwZuBtnmbCsYHrovhMQ9HK8VASGctNkLM7BiEY",
  "key43": "af6RNiwGse2LvMTHsY3NQKh9LJGL46e5Ak4VA15cNYeMSLq3oz2mQ9gXi6rDspwFWuXBPDX7dWquJhq87ryfgWW",
  "key44": "4f3td8cgcJ3DPdkDEkFJSd4ftFBdrM1EbLLKsACfgeDua8UhTxKUHViQyhyDt1WDDdBq7vY6LfKWsFRdPfNGWUuE",
  "key45": "3hPYEtkwRg7FqDhrtwZHUNahniAZWVBypm9jStGiqckUhesrCv6xJKspwEdnyuFHmPd5ZND5QEydagrGBbdjANJ9",
  "key46": "3j8H5hhTS8yJ6MpSik1gKAxPNeQbYvhENkYK6BeNwW7PXe4GWy1Xyppuf9zTLyVuSkSXCTmXgqwT9BrYBfC82yML"
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
