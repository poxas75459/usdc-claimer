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
    "5cAnaTNvyfb5yArLW3uMiianSPgFuyFoJMLwZwCxSXckd5TzGUz1pPyYcWBpe9ESN3hQvva9uj4j49rNuzy8a8oS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xFY8pnPPFU71M73ci93GXpo1EBFT9aM6xNTKLujfhXtB9BvJeNN2vVg3Z69geUdJjD718qJHxPLgEW9fc3UCG9N",
  "key1": "64Lq7bnSbsVuDMiAAzhUQM6PfJNZfbvjt3PxNbjA6MVPZTKdusdd6rdJTuGyesqBmAJqfszPbN6fSAXojaFafm1x",
  "key2": "E4ett9aVEVs8VynqtxC671YyF13wMSoGysr6suPhrkdZ4j63PPunH3EGyfDSg1UsJxMdVmj7aZpxvFZoNAMfHCc",
  "key3": "4irQPdp73X3PFV1fi3spABnTk5ESwBf3amsr826cNzaWqiL7xDY8iXE7NMF91PGoPjXKtdZwmbv9XSRPtabzr6oH",
  "key4": "46uVj4oihZgfQrUjcjBafLdmncRwFjfKmDBDrfh48mNL4WTz8GCkLC8xEyWXrrDx2tuAafjnbNHMQqfigBs8svFH",
  "key5": "62Xfwb9UAmDZZJRkTKeFFYgjzj9ZoJbDyyXAv16xNbNLreAv9qdxik6h1gXbRqtKf7btxSKvQhP2dLpn1LqQHhpX",
  "key6": "5HNunQQHj4R4s4XH4h3UPr8XtXELS6BvdLJDj5mYJ6tzDEgmN8pzzR1npVKd9mK7J9nhCzuF8wpsnJDJxeQAtGnw",
  "key7": "2nqsDT8Sh9TzU9fct87FQwQAWCbmtiDZ5MWmfqMUdvRUmtBN57Bb3u6i38qQMs99f1kJ3NnkKPN4yH8ZxrbFdnZR",
  "key8": "467xXn1XMvufmLCXE5dZu21detWCtrT3Xpf6A2KpGjVDzmDwM8krU1Ey2bQveMqqRDmXidz9jZmoBK6vroN53ZeX",
  "key9": "4xYj36wj5zLWekJGg9eAdXLFgm8KVsG6tghGo4YvwKi1SVoAUsXg9igUQm8CdgxfMVYeioXMtpT85RAywqQnEQG4",
  "key10": "58nhoivhCKbTeC5tGogHg6PP35N6QhiVW2pLnqWsDFFkNwi9P7RiqZFPmm7QnefGLVe2DiUqLsKHSfJ2r6nxgz6C",
  "key11": "23zZxkcuCGnYZp6WVfCJ5Gvqtb5BU1jCN7C782PWZMv8yC4Zqds2w6i3uFi61EBar3rwvgysczGokLdqNWGin7aH",
  "key12": "8Uo9yP7LqXJSJpWGPznZXZCEk9ZpWo9r61LUmhUDsWci1xCzasQEmERNKG6Bg7e7n4DjVetAoxZoUeoMAGnvNJ1",
  "key13": "21nRXEFi6DaEpAsd6TRAfFSeN2CvVvtwgDhqzNMLPGBE2WShpHQgRiMLDoThqSQdsoMAzuqYtLnNX3MzMQz2oCXi",
  "key14": "5sLGCqsNHimTEyfxSRDbeZwucMiNrcHiXrvivQCFdzWqkp3z58vCsA11oPA5mPuF4eumWBg7YNsVxUagheq2V6dF",
  "key15": "v9iGoDDXH7FuXg6dD4jYLE4Cyf6yLm1D9nVSNwZsPNMdvJcu33By4EXDH6gBr3GW9CAUas1i9Ef1K4rq2H2CsJ5",
  "key16": "3neUJq1AxH2GiHTwfHPAXvML35mZfTaKZWF72KuLRVcUQ4viz1bc84QM3Z17N9x8CRWgqcdwdiDC573PwVgd2KxN",
  "key17": "qgnPPGZR5tocyrFd7N18Kx9i2ui8TjASAT8Zy6xj6xuXbGDEh1N72jVaeeE7MXRcZw9jNhuuwJGaSBqdyfBeFbe",
  "key18": "XzbTfpZeYGMd828aNd5eJJNZbySqs857eR4Ur793gN8bNdr18xLiSctBdTjyDG7DqfkwJbG6t8iydpezccUgh6z",
  "key19": "5y4oH8wnKWwvkvBe3auRfyw4PVAdRUJWRrQfYrB1T7L72WFND5eQsEZZXeiwmNouJ6X6NUCioap8CtrgiRMsfiAF",
  "key20": "4hNrm7NFMP43aNJ9x4CCs74mGvZDRJoFqeHWcwsGJJ2P9Gy9shjiL9jwDVWVEgmDcM1fTAVJ9bWnwvEfPboqa9Wy",
  "key21": "37GVao2MAdsnwf4qM6rsur3WRXEx2XdksGD6J35gFXGxSgXZ3PwgYKRuwKeYMYUScQS4HZ6hGJpFeonFeRmuzLmp",
  "key22": "P67Jt91WQNn4xv9sCYqJX8TscUD2fnay5MDwhA9vwpNYa9Z67yxnaChdc41biQqVoz2UCG4J9kJMf4buaujeZzW",
  "key23": "4Ac92zZhwY3knx3WuaB7DoS4YyRH7KzRJDYFmeoZjRhzzqEES47CKe4orwBuphwrMegCMWSRNV7Awp7NWkzxHfJj",
  "key24": "5JzJap67SJ617JHfuiNbgiCq7mNUg9pARMLDJ9YEXG6CzuGEJF7RcbHSYjGf8zMXx32W5k4MDetL2fAJHyQpa1tk",
  "key25": "oiZmyj6yXjkKkfWnr9KwXDHGiHo9APZ9hjQWehsME9eqCTUomLmxPNLmTDwraba6h7tixuX57jXqbUppjf7f8g4",
  "key26": "4bbkbZfPEaokmiPyxh3npFTJYtWqsTLaB9xkRhWp8uk3SxMRuwZ7aJDWNGzpWgfTWcsfAYtxdeUEL4rBZm7WZgZj",
  "key27": "2m3WpsvfyrsNTQZcwqPJCFTiFWwcaXzBLGbCdYqJW5oNd2g2QmftB1mTTSy2tbwjNPSKiaVdnj9GUERY31pCB5fp",
  "key28": "2X1MYY3sDhkmvzE1zypZ2quZ8i8zKwRgqdgcqtJ4bzdDKrzBQQKTkaNzKJVhRDWHUYH2R9AeVeNuJsrQKqr1YNGE",
  "key29": "4bCBpQ2LcViiLfQtfgJPP7qHcpRyLdQFU62NXHRDETDqpnkCJ6ggdH7NuYSXzs2pN5cyLZhrz9oC6hFCMvsNgVXq",
  "key30": "3UtVgyEJrwtCaXhU8pTmrscK5Y2XtJ1iAGGFZHhQMbw3rrHCP6ZrJzzr2djFMnQTqPheXfaye5yxJXXjCZGfCAfm",
  "key31": "2pHiQS9X6pjnPjgsV6Acinb77rT1dPBT8UkF2nwwJAmvsUKqSdCM9iDkApm4K7gHgfMn4eLodeygd8Xw7p64V1Kp",
  "key32": "5qWV7by4VAvSiD4XkxxhZKTtcoVa5Jz3ygFCDhPuYxku9yVZzvMTD4SRmfx34dmVB39k8fXXUtofWBokyHbsrzR6",
  "key33": "4jR9eAo8REQwpW3b1fJr4RCYEbJsc6jyk2fnqFSpNSYqnj1eejC4gXSrZps2HWpHpb2UodfkYHN3ErR2VFfiqPNx",
  "key34": "35LpvDHoMJ87mTbW5ATD3L8BoAooPWumJNr5Vf75ZUnHq9ucS6NEHpUMa1gwouexoPJKqZswjjjiQkAPPnFkoAJb",
  "key35": "4BZNNGnZDxEYUQ6QdDf1MfWa9YbHi9E2NLvSaCyjMCitowzXjXqfQ1TqzojttCswY32AzUJ2PuzUu7JDQhjbqpGE",
  "key36": "2S2Vou8hEyoEdzAcqRMDerXxJWkuyFBYtBWH4vmsJ2w48349Xtc7Kgdz8k5LduMbH2ez4rBs7eZLCj32su5hMLq5",
  "key37": "54Rz2ENF1kbRM3CVci4bJ6xEvryYyu3XkZT1ESsnpSn5kL3VXhbCN9VMoFiDMcrdwXg9tqKoDgrBP6cDzApeyp7S",
  "key38": "3dpL9rggpZ1qsuRXcBE5PjpoFBcuUA7mhAYAnoUSDsA6xZ4xGLM717R1WHpY9sX68x48HBYF9nzxnyqKyWCt53j",
  "key39": "5BmKpJNetAx4VLymFQtn7Y5xSXHXgYda2NiiUCk998g4WqLeCuXPpsnvL8v1HJ5KLCVj3G2FhHApH3cEeA8DuJE6",
  "key40": "4mZ1neR8JqrN4aR1eG2px6pnVfqy3tqsoo7QgfCXHeDvG7bqUKwskNJ9LqrjtwTSX5ktqyFYpjyFbR3mA3twB81H",
  "key41": "63tcSYMFHiw1Htas6hegu5gHQ97zafTQ3oCwGnu3FtQuJUosFgHxAAztjsGiKm5LJ4L1XXNoo1RmR5ZtkRdoxovG",
  "key42": "3X8C1ywDZJNRw3jrCkFcxo1sGK4ZJH7Y7zht5wLJyRudgKyaTEMwiUqJAiUbMpSr3Z6gf7Rxp79svAC9cpG7x3bp",
  "key43": "3iDo6PPdxW3FdVtcfxtjdEyLHRFx1Hkzv4BFs7kKdyqQd2iRUPPSjs3Eh2HXWJoFh6AbNphSZqr7XfzpKMUWoAvY",
  "key44": "2KZK7iaicuE58jQFh3DXtrYU816vMZ7aaYkUAGfZ8JWMV22Don55eF9p9zy8EXqaCcTGPtuwzwR1yLQDkpQmuhJX",
  "key45": "2mC42Ugv481hFGfnJEbrLLgbJaraqzjxSphS8yRtScHKJ2fDCGi2yXTJ9G1vDjt7JLpK8mBCc99AvttGXiM9T1me",
  "key46": "443cYiihmb2rUBHnxuMzrKhaQsin1nYvJ8L55LzdDBnSQNqdTgdw9tQWwE85LmwtVGQ5Q6JtKAH4cwHRo493nogS",
  "key47": "dCJrHi5XePfm3bBDBDNyPRG6j75qMWB6P5WMPxvfKVHcaFTa5LM8kuKLdFpsXtywwvLZADzs3wmy8fMaauo2aqz"
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
