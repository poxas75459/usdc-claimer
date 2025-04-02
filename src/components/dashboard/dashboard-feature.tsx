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
    "3LKxEdCsPQ3Gjs7ytms92PuBhrtqFQTddpbQ15VECR4xdoT6noCgy2pXd59K7N51gWyYWdcis5gKPpHHx4XznnSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yjfQH3sFCNpM7bPaCsm8srQrwSnPL7BKH8xkdPQR4BVqfH8RfVdRd7LFrB8mXwoAM9NVoQrJC2w6knVsWGgmgLQ",
  "key1": "yn8x36zRkbyTSx2dd4wXB5iBz2atv3r4JLSj8jRbop9EhAxE9uZENw6Pw39We6KYLJ2qpEHkcwTyqUurtPLYp8M",
  "key2": "4i5xXPzaowVSpd4hWfkuYKi4QTGfpsK4xhvEtc8jwY7bbMy3bTiMkmPpGWWBGK2jhu1B1qpuVtwJNd8BttFk5bJ7",
  "key3": "3hTszGjrf2h4V4YUTXYXsTJgoyACdFfbCb1qGsNHFr2KSi6GZVm6XBYPuJKxWPUHckFsTpshy9myQfhvnsVPRxEo",
  "key4": "3mZvrQMxeSTPFBfJhawz4upUzL1QWjB7K7sCKUQRDkJQ1vzFk6P5hCJfCknvfDwMRtMPSng2h8SDzGd8B9hY4RAK",
  "key5": "63wKYNQc46HRWkSyDUFkbjdE4U8iQft4q3QmLhdPjsDmcbUhZ2M4ezoQB39HZSGYSaGAEtf8NXeYrzCfR1DSRePx",
  "key6": "4Um72e3z46GbjupYTj5KTyfBQC9oqCakBgp6rArnfiW5X43Cf4uJWsjr3ejkBW2ULkkRRDBRJgDNTiPTegaXEPwG",
  "key7": "5AeAni4bKT2i6SKHmKDV8ABWXmBUGxJmfRNRR1pW8C3cshz2MV6NaoZYvv2wzrr3F5NxZNrcruSGdfrPekmpBr4L",
  "key8": "44dn6NwNBxgLPS9tWVpZueWSnv4fugjFS4nUEFUbYHdL3As1Q8bvuWf1pGv34HbVDycXXaAmArnDrrMPMYCxF9sQ",
  "key9": "4ujqeLLyGqFmN3oTsfwsVJonZnbU566M2DViu6DRgcDNrX8eigiMzirFHagNxpAUU55ohHxJCzeZcmjMeACQV7tv",
  "key10": "3tRfE5snMfNzgNMcPYAgkmxt3wdUXXiykHktr1QGQ5s2hCPMh5dCozbCzgYf9JNLHcVzicdRJBgZzJ7KKz1wZcce",
  "key11": "3aYoEp6ifXrJ6pwXHaA4x87oaoBWbt5zZYFZ6kKJuE1hsa3bpiP2b5VdxuaVtbMTLjxAA5cRNTVGFpMZ5J5bMUeE",
  "key12": "32FxdAFALpiCHLYLnJ3cTJxXtjL5MYjAHKUJRVJZG8RaBaZTACDAJ9pe1VXwHWePWfS7s6ULvo2wxQzJphdpgwtx",
  "key13": "2zxPwBFNsHU3wfyLcMFkVbsG39HZxUVYmozz4xbQj2iTGDTdBT62kDEpFmviNnW7q7zjq1utA56cUgJJkrwnz7tn",
  "key14": "3c1YromrBcFpQoMm9kp2kN4eMwnCdgfjQ8bhNqjv5mNXLijbKXvFrDdpxyVnGtcaAm3kkswWDkxxehLRU2N6bWoT",
  "key15": "2MEAGvdVVK1FdjMfB4j7rT8AmYUupK8AUgYVW4d721rwJsAZzZPnRhoGfLkvE4ZPtzPJ1eECR9gdTqvFNXzmUQTt",
  "key16": "5xU1bw1dZgtS8rmCCvqKocNU4Mqu3jEmQwbFEVw4o2E4pp1nWanS3ksWtnbP7bTxUjzNijGMjxF7314Exu7GCcws",
  "key17": "4itNFxPUWxV9ezUPSpEjjX593fZd9uKSN73zYCs82RohjpXbSrj7keDHS4s7MW4tbTMVZPhi9kHNqRMNBAxSNTYc",
  "key18": "2wETkiJjfmaxU4cuuFgtthYcCHJVg4ScV2rdgjmXQ9yAexq6dVwfqGoN1JLh4mn1FRCsC6BDQhJNWiVAM333UdSx",
  "key19": "3LTyhed6pAg2rvLZ4DHHY58ZWKZhNVT2eQHzjHCkrTLrfBaKe3n8yiQQQFrd7aiiooMCHbR3dVYEQALnozCtHWQt",
  "key20": "2Rubfhqk83bTVEAFKfeW1PmqrAf2NzqSoQFcu6ht1SCBgtLDLjVV4HgJUGmBYoZwKtxkSJXh5Ex1tx3MhHrVPzqx",
  "key21": "5rRccaGTmWUJVndVzsahmb5hBaJLMCyLQxGVBBXCjWABKZq1ks6TJn9JQzjKUbguKGaLoUUjaaB2NesN6s9MMF1W",
  "key22": "2jpGKYg9Fgr6wLcNsBDuYq8kG7ayyoweu48xQaCg2ALrTryXWW8dTmrZQ4qYKaGzB19utNvJndHgNv2HzYLf4CwJ",
  "key23": "4CQjypMisNr1o99j7gpgJvfUFQjT5C8t3jiB5bErpEGiwFBEybP5E1Audvf5LDUGxHS48PLm2b8RX9WowCoMLjzh",
  "key24": "3WgbuCYCiFkbfUVT1cisFUKC9z8K12PHnEmsyJRGa3sSse2E1mgXJbZspZRdHbKwey1nEhGvarZLCgGTs1An8xUR",
  "key25": "5av74kZAMyF22PBGGpS5tvJT2DX4r3pv92EaGMR6RX56MdC9pweyv8NSUM2Ssisge3iuBzqrRdVvbR3VyMf5pyrE",
  "key26": "54wQTj518cyjHfgaQEwHfVgvR7t72LVXb1bx6eaLdVfGbaqHXAH55nVegKEuQvVfZCebfFucEQbSVfJgeBckD7QE",
  "key27": "4N3AmBU5TNZ5ChWBio1FivBWkWzSwoG68f7hsUUzsQwtafB7BRvitFom3MmzmoNowJUZR6KaZsdzxoazCHZgYTqD",
  "key28": "4WrrhmmYvRrc6wJwUkAKXP4a1KSG9gL2mptoaXJNKnZH9ESnF3S7UdMMS2KTydginA8chYmw4vYDM6V7A5ZUshab",
  "key29": "5Nougu2ifMCzth66b6FaiRUfSh2f5VFbkSnuQSQYyNzKJH5rFDXVnydjZYM2q22kowg48FizP4EnnbpzJ7kpZXSF",
  "key30": "5c3sHgymHmb2dmicVAyvb2iYQUmjQ1kwANq64Vtp9XSzfZjAUHQjXRomZcaQS8ex3k5bsrG5qFF2N9UGJihEr5H3",
  "key31": "5v18sz7mNG3KXy8fPDsVsnsuEiyvBApRTKmXR2EN9QAbQSueN5a8yXqve7UinriJCRyUxwc58zRaadxHYrXXcDbn",
  "key32": "46bB4RamBKZKigQC1YvMdcyXjkZURK47Xa47sFmozWFoj4jF78ex6X2C6B4SejLFwJyLw7j3CW6w5Ym41fJYixcp",
  "key33": "tqnqJYdg9deYQCiinC8tTa8iBnSA6NeL2b1H9QQuFhWMXQps5DoDxT5UFXyo6xS6wsVtKbHQ2V2kxbMErPXryaC",
  "key34": "4mQuAgZ84f46T9fMD5FkAu4ueRmWKGnha7koBtH6D5qfdiXKtkaaXfHgD6dYnnS3WRoeCxuQLXW8SBgpNNWpvpbi",
  "key35": "5BZF4o4V99qvukNFiF2Ly28YQWfmzfgQbWFndzB71mPn3S8ySRVUwVsVjqGsGBpJPXVWLXiL7hvHBsXaoQq3zf2",
  "key36": "4pzjUp8gCJ9qPbZYppvTQrPmzyusZDnHs8yAdYXrBZX9JxtSadHu3FQ3MuBVsZBNnRy2zX3mU2irSrLJapjonQNH",
  "key37": "46zyy1e4iknTvdArYei9hegzGz4SzHfG4RRjQgcHh4AhWxLgLFafLYPqo6qwb5dY3qDDbZiUt9Gw8GkTNMatqFpe",
  "key38": "55Mie44RJZVt1mmEN6AdEoxgCZzXqCSsE1ChjVKcXxxdVmnEzKaWxNhC66QubF6zMXz26XZzEuSkWnsZBzgPdZGJ",
  "key39": "3qQtGmrGsGWiGyVdSs9fLF2PjWzgF3ActoSvGqvH99zM6SR8qMn6mCD1AtvcamnZMLPMum7erPmuW7eAo3cBoFA2",
  "key40": "2CvWHJPXUK3frL5DuDkpzk9cgobvfmxxYLhd9DPpAbSFYoMDugrpuw7P3tf2C5BvJgVFjWKJwBVLbW4TNRjiakvN",
  "key41": "4kFnDkAfXdTDn7FmqgHMEMgWAt4gaCVXUnWEHSAS2bUEqND2PdZ7QkvTX59gSbPXPnEiCizsMVzuQwDLEVgbNUsV",
  "key42": "2C5bi8A831AZMpHmDytSrvttSPofmg4QG4PojGmVrWpM2eeK17ZrVQPtXuJzUoyhKaqJXfcco7ogMeAQCzto9Few",
  "key43": "5msUvqLEJ51EE5KYsRMCygppVrDmCfsiEJzUjZHFVtkmJ8c51pCjAFPtcxdZDWoDjoaeWAGXpm3QvfkFw8xf1i47",
  "key44": "WTSMUMhjYNxQETtsXSbaM8aQnjmK3DrFL5uTTxxa9VjykdP2sX5Gnwu3bVyUG8HwKmJV3oUzPT3ngjuxwDwTUig",
  "key45": "3EXezcXEHziym2hNg3XMjKQShCG1pbUESURoVmecG4bA19nWFfnN3nA5h6G2oW6wwqpoR8GrmBx4z1vzN8LPcC4c",
  "key46": "2F5gYF8t1kWLM4eqFy1eQjavaAsBaFGy7r1bYXjSuL6ar7HNEsjSa52U5sQBdhmtkjJ72PPav6aLKXmJVLSVsr78",
  "key47": "4uiwg2dWBFMxhhbuKNyo6oy4um4co9fmPU6cKeTUz4LcCj1ZkLaDmAJnupfkcwELtyBQAgf3WMTsSo5eHsbyfHQd"
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
