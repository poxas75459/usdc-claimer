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
    "2AVieFHWKUbfC6CsnDeQtY6zdKiGMroSMGWFM2mCfkyahaStUGQfRTXjvBFGuX35ayqxTZm7gWm6gB9MLTdSKekX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tJL5QmGaWVzQUUrWWBmCXbZkkXzNynATXQgE1X538XdGksvc9jv8MWpGUSCF8AsTvpoy3U1bKv1BmdSXqXcb7eH",
  "key1": "ZReQnGHBhrctVeaDjjkjxNwu9cxDwZYFmQTpvWRW58isa4baBX2WiDERQ1izf41WfmsMdoM8MduLRngJsH2RC3d",
  "key2": "4DtdF5KCmdYs9eKmEzefrTecXoCRRDi7zbcW6AmVJ8nsQMHjBYKReiczax94oPSej2jNe7NakmvFLmipoYCnRTum",
  "key3": "3j6Ffd9sywnfZDf9oujXLQKwcYTYB5eTW2WH5Nvu8rc6wWC2ksWd7N7HtLEb1BqwehkHkwS6pEqPKsC8LekjyFtF",
  "key4": "3FunnKpWLrVdoTj5ZgZYJJvUCcaMWWdV9hbgAteEEBwayD94b13xWXg7UX5PaR6CYPxL84iPr8FeXj5hndi7vrru",
  "key5": "4qT6De74qWNTAU2rphkP88KP7Zm5CbikaFbxVtLCXmqNZibBwA1rdCypSyy97EGS5aUghwWxrZV7866npLfYm6H3",
  "key6": "3de5qY7kGKVrFRfVmdAZT81KkBkoTcJo2HssNbUxzwYTWDtj3xy6m7TuiY7spLefVfxTJSyfbjgArRmZhBAcCZo1",
  "key7": "5jA8rcNbu3fLg3DVa7PGTBgVseDQWaNw7BbJbmunMVGzqz4UWpRcerQRUcw1t2uNVwJKdQP7ZhF2SrHfWo6VqJdT",
  "key8": "5ign7zjFdXAYJzcEbvYLAuje5EwMSx4ncPhAcxshSvRdD6kKbHE37noYUxyZmNfX2v7m56xh13huhKNLAhcrbFq4",
  "key9": "5GWVixoeT1t2PP5eSsE6aBYjV2uNA5ntHy4XUMM21h3TZjn7k5g8kGcGsanDra25oyMLMv5GxcUg5FhgBThAftjq",
  "key10": "2FKmDtanpno2rsVNqdehRHVSAeqhT6vDxucCH8RpZziNiLq9HCNvDvsrZV1TPqfYDqy6b2vLhdr9zgFMprny4VWh",
  "key11": "3KM6g23kfymhE2ZdGw3x31jB6ZMDDPazy3FWdUabrqqJBvcidJZDo7gi9J8iQn3V46EMXTn6cEjDtJxpp7nFUu9a",
  "key12": "2whkJCK4DAyfJ2nym23MEipGSPyJPa4YiCUYpTzK9NeBZBhs16jKpU5jXonuLegC4Phb4EyvudxhDkeWKmzmLpAp",
  "key13": "5Fvpa5hBJNhLZBZ87gEENkNfWaFEezHGFbHrGqnDLJ1hdYkD65D5xH62kGjqxngh6wL8fKpL4fYSZwzijZihFzUT",
  "key14": "4zgbmaztKrYkWwvHJ7ajHkiqyPYUPE3nkUURNaL3hAoL4Ybx7pS5gYkZAJ63bB7WTrhqXJBTtMfjTyAL8x2j39Uc",
  "key15": "2W4SxtLLpKm5gYpWHVet7aPEUchDppndbCcmkLdziHJqAXR6kY29nAfm3LF2hQRYVq81Dss944xonU5VyUzBMufa",
  "key16": "8Rw5686RbMFdtw4t2WjCBafT55sKWr7ne3MrZkdy1U5eJzCvjCFYaFC86sg9KTcRBjuhRXrEpNXHb5qfWa9e9LY",
  "key17": "281FrWRWnJTAVogThc4DHGxmgAogr6LPeSNSXThp9Pa9R4gFyZKfPKEdgTCCD1GTBegzM8nqTpjKUc7bw1mjd87u",
  "key18": "3sLopyUjBLc9NRb3Y77behUcxRj3E3M47H3MphMzZd4q8UBaq4jH9MsiMXSANUBQFJgZoBQg9Np9Dci513iQxQX5",
  "key19": "2rPduSDYMCkmo22TgzCAPCX5VBgtys5Q6t3as3XX48a6eni91NRLkdDuFSYce6ERy6VoHjufdqjjiqoee8hjxJgj",
  "key20": "5a7a8hbE3mooeeq2pzANnH9XWAbuy4GZjXYbhEtuj2j6eUnHgt61hQuc7rBfVAqg57PmcofGBMTinwmMCf2HvtiC",
  "key21": "5qQvhBreCpyeDVnFmBjmimDnwewm6Xy2Du9XtuhwcTDuF1BmxZzQx6jFziKUdTeR12RK95UhdKnYuCb1hiaeuwvy",
  "key22": "MBLWaPiBBSJrfvuKbUBF5FraBNCw9gPSHcbrFAcxeq7NR9DPXLyNVJ9baLNM5H6er9CTYFewnJSmR8H92wecPUY",
  "key23": "3wRtNc5Cv23HHhSC8Z8zvSi5QjYn6rNHn5rP3JcTwd3CgNCDDpkHna8HuYuWBLA8heED2UYhTHP1Kb8uA1YrvwmW",
  "key24": "34KaMPZwJHC7gMokd3zYZmaAcoj1YVRfx4uu1nyw6idvRrFWgKNkP78eGvPYbjHLyfYpQTHL3juCnBXYAgfcLUXQ",
  "key25": "2XQxsMrQK7n6wzCjYQ6EE9PVw547UThihMhh5qj4MrnGRUb4H4qecCX31qMR4MtQ9mZ2RTw3eh8TikpSB91PJfMS",
  "key26": "tn99zGNupy6mpXqxHvEZpKqQ2uvvYUyeNnnfDgux93Tzsu794z4rEr8GoJ82nPcPyL3GK7qAJFxWbQUdMSH7SBr",
  "key27": "BryMpxvqwPW4V6vQ63YUknvNhZ7MuxSBNgiHktin8WPSczNQW7YvV9yGiEQ28jAKtdDSq5Cam6MpCDguBxno8pN",
  "key28": "43icpfGe7p6oGgcU8UfYSAeYoLd8DUKDKE7D37FEab83ALMwKy3SV4GLtopjrBMRMHH2CHEW3wd5tMae241xk54Z",
  "key29": "5DdUcH1Yy5aVGrwJCy2T6NPWx9JcxdWzE1QssJRwnr5E6xUZrvrAgUWYepbWHSkgNKrMUBaxt2n7qrEVAx6bxoDZ",
  "key30": "2K6hZzTRwDiE2Ga4dAAuhVbbK2h5FLfVigYUmKveekifiMxwx6pqrjfPg6onTkWy2bimx6QfAM8s17GGv1xdNHCa",
  "key31": "3BJfpnKF52hnpx9a2BkhKp8iFxXyVTUKVgzbXkYnVNXrhrnfMCmVX1Ua8pApCbjaZr5gHmfpxa9NB1SKu8eePZCS",
  "key32": "3U3HdjyypMQvG9pGWK2HvtU66cZRd57vnfx2GQr79MejYZH2KjoiEBiGUnxeqYASDJpWFnZcSWGTqgJGXRYdwAD9",
  "key33": "ixxc7YE6YjCmJwRccf8c6nizziMFg7YA1TpXLPqshXYCR2ec6GMHLvvEDvX7j256gbicv9rmEvvh8arHSb9VVeb",
  "key34": "47tKhBsCiWyvhp7C2pMBPp56jnHVicFtBkZchTTeKaTy1DksZDBFcX2qh2Z6ugbHHm3z448WjPEePPpCYuMGN7qf",
  "key35": "28KnmzwoXpcLCRN1hEVNLodWGXtrYHLEFe4ziKFY6vUAhxqLK32DxFBHnXyanTMwLSPeauTddHsxQgmC9sdDmNMz",
  "key36": "497m7WPn3Zuim9iYWRVXAPQYpbQm6CHFKsPuRyUC93mMHN4sK5qDWk3f5wb2KgPnzAin3JPftQiqf1RPM2yydfxK",
  "key37": "oWtAt1pdxqF7jqpi4MoCf9BuhhAJDcSna4oXosZaMQQZhDNK64RH55wqwu77ET4KTskQKLdQfnA66ng1gxeLdd6",
  "key38": "625LGnn6SFDLa3b6hgcqv9CwEjr668diYn3TatNQNpfLTcMk1rNWsq9z8iHQyyvAesNXsHTK4D34NxG5qwAHpWoB",
  "key39": "jwiNQzdAZErAq89mBZ9U98eC5vwejVyfLY1NoPQ6mP2jtHpgzNPdE6wCXQDjcTQTNtYLww3dqC4frpmdTptezAQ",
  "key40": "62dBSJhKvXeBMBcFfHkzSQZoKZU1VpMoPA1UyiBUQyxEzWMgUuW9KpjNe27TRtju11iN8AkQEeMAGoSUQ7TUggUi",
  "key41": "2jBfVkJgU7fbGc2hJqoa7boSWCMkG4FhxzgtobU2Z2KnxcAKiHENH7FnCEaTfvaQa1XSaZqVbgaaBSH5PTTPeNcg"
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
