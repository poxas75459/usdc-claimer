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
    "4SvcAJdFBWySGT835v2gqnUUjKpJ751meoTDtdXK7QyqPF8oeciBQbrFp5n8tAcVmCieAbZBQ3YG2xaF3ufCLG2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gjm6JStxHr7i8T9bp8buMgKkAN8eBSLdAMzoKYhTut7p8KMpToJLtgvwtJoWQpcti5iJDiY2RGbZHDSgWxtecYg",
  "key1": "3oCPrAZNWtyJmvzAMyDcoCVKFrQinGkhoDHi4UmsGqc6q1TJJtk5BYNsmZKn3WhdmJxmcvStVtikCLWrkdCAUc1p",
  "key2": "5iMSGe4527Ew4FCe9FmFPH3W6krkAtK37hp9pXkW711ebaxy7SPgFtnCdZNtVpdKbEapbo2A51rVwCTvK7ya9fgL",
  "key3": "3LmP3KjyJpBJ2a7UWRVWc7bXVteXSi5xuvpt6HkP9RNFZ6tiQ8djpTVGbqgRRxKUrgvJgvqCyG27zPkogmyzcokC",
  "key4": "4obo6Xog6UVyKg6R8thDciQXqm25omn4Ntdw1rBxgQZHA1XKNH1NxGHwtKqiHWu2DLK9UTYp97U4bxUJdDLsrauq",
  "key5": "49BCzdwxwrpebcgYqWt1NaRAqUFcqzDnkfJDcRuifEQRFLd4pznP47St59gvo9zEgA7aq3jAaKqzqXHDRL1UWfGS",
  "key6": "36EuSmV2udMhep3R2jYDdxNGEqko2cmMaVbtdypKP8ssDKyaUCtHeSyQSmwA2DCPt2He9HAA8FK1utv7X5nf9uD1",
  "key7": "34BwCuTc46o9Sm1vVXM74qxaujyrPK6gasRzd6y9uy8xscH3pnW7nGH665gqVnuMAv34JY2phb3vLUPDk36UdiYg",
  "key8": "25dKLpd41w6Zm5yXno3vdbDG6WAADZEHheBLndH5Tf6Kahd7u8LfAoXufSzUcSosUitBoA8nF964zFM2gqZmBjJ4",
  "key9": "2A1GSabb2snh3yAs9rykpiLpMDWNsx6g2hGptSLcRfr24YxJqkt2DtZJKnRmDfARhBqVd3LTZrgPZx8iAgLKrjPH",
  "key10": "5z3ph4G4xJcVnYYi6xE3t8CZqo4hePFjoyHtxkcLZmca6cDaAY4p7rfJHMyueJNro4vcCMHKcxVR3K3JY9sYzB4n",
  "key11": "5yJ12WbCii1ss4nHzbKCTYP826b2ejARqU8gsMA3Xv5wPG41USiUfYNH4wv6gdM3usRvotuAF2arZK7pquGdEYbx",
  "key12": "dyYsWWc3u2eELXZuvARaiTTYBMe2hhvuSjKPRUwBVhg6sUdZjjoHkAV1WbTfbAxp2BrqhxL2C7iot6Rj5UHatxo",
  "key13": "5eW72WB61RkUg3mpEWLMppDsfaseG1JdM2msCfzSfVENSVU8Ux9pQkV1aBQvZxsJchm94NLqSjGhycZcei4yHvJj",
  "key14": "5ZPv1jQmtthAS3BfKJbaGLAmteTEfCwoqgjmmn7U78q3MpnW4gk72AjJSEvMftovoAmyb8nBfhYYSoN63WDrLVBy",
  "key15": "hNQu3Nfqdm7asc1oKyLhCTLkwb5FHD1nesBz5feoTa3YY22vKhJrGEJ9dV8KcC4gkAb9AEV4dUafBzSZKCoUKab",
  "key16": "4v5G3e3rkZDBJkkshbmh9PKK3w2nNja6X1GY1TJhSPa4fLcvsnvHGLoVhMQvf9wFEfxwVPj6pSyP2R2C2JsBSjFu",
  "key17": "2cnM4kumgGRkZBki4Cp8Jtn7WV9dimt2kmH6dJr5dhbZEWoqKbdEfpw1ttZomBsm7skJVmEhikZ1Xfzw8V9DBTxT",
  "key18": "5uEPjq6k1vvXRjw8Xy1i3aTEViJUUVrcDse1cbsgduWAHVsCLjQZ7ozTwhwV24RufPV7SDzGviTbV8YpXwFUHQr8",
  "key19": "2UBdd6wKrZuEdytM68piFRvVKGUZPYKZKAVu2cCEW7pYjhWanuTJh2BvHgodQkH7idjsjJ3NXB7kcy385PsF1b2n",
  "key20": "2aoMHksnf2w3T1yYzNRrvsrrXUGFdqnsg86mpdu1tdLCUZTY7TcmcVxaA9UgWZ4M6fS43Gm63ExaAC5RxThoLk1M",
  "key21": "3Vpsn2F5Y1gkZxWANVBQEHdVQ6bj6CqkcRKZQz3Ncp7zyACAYRUXpJ4dSjMQ9KPrK5Ur78eegXqpuQx3xqmUXrST",
  "key22": "5KLJ8gkoTvWGbn7Uzs9QVe8d6CXffBqB1St98ecm6ertd1FqDrPTe69kLDVXhBsEahqo7jW5zFX26qXj1o4JETWQ",
  "key23": "vQvR4RfumQQ4W7Z8ZGfhYopr2oERnptjcVayb3cLQxBLdrkjMQ19eXhnqRe1v9jGs3v15bqXVygQkqipWgskkbC",
  "key24": "2urHBHahwtns6E7oDzbeMR2TqpgEBSRb1v9hnV2gETq9UGVFtMi9nChF6bWksye6RHpXNUqg4NNZeEpDzehr8RJs",
  "key25": "55YN3VJ3v7pXxbAd71niWSKtxAYycnXuKYQzxRbxGMhS7hGbUiGbLFmM6CchpEUiyJfDg7jZMYyAQDqvmhGAjyt",
  "key26": "2C1pM76UzYguz5CqA3PwGZ9GKc1dhMfCPrH3zYzmH7YeCJporgMLgfAtA42JjXXCwKi9ZmFaCbT9acTP2tbHUxxy",
  "key27": "3z9aZyokSpWRZ53YajzkB66gw7ReJTZeCiP1GDo8PAeSiuACcw62dpJ9VoyjXf5ZqCTHkUsTUayq6ytYkzcQJx36",
  "key28": "dL1Fc8NRsR1e1S4ufHQ2aHw8tcUnQAtoGCcS1Rd9ci2PMY7YAqK9tHG1HkH942rQQvp32SQEdS8NZUNCZt3fP4r",
  "key29": "3B45J4LuB1Er1Eve7hFJCqbxoXoWoms3LXZeerNE664amitnMLXqicg7muzvaABabyeNCCueJS8aXF6mcPEUKqqi",
  "key30": "2tuDbdu5nZz67rHBGFw5mds5T4BHTNv9ohQsEUcgFTDyPmTybrZuKo86jvjwVd4b7PLPoVcwgAPEA1saE12aEPU3",
  "key31": "5DUWMLdid2nbyhWeRnsBuLJJdhQKTEs7GRXE35rYC46CEj4Ek4NKMwXPnc1icrtyFfPrUxbkhEgH7RfucvSArvcF",
  "key32": "UzZ8tvj7KUyKthWzfmw4eEYSAhNR13VPv1BTUx3jMMBmDEfkyHEhYGFyNTcbKtN9zZ4BJuiQXWdFCSHCs2h5jwg",
  "key33": "2jesziZV5H668yyfZcQT4mpoGHXJvkfZrm6cXmPqD1JiSdtFs7QbMCgrbHqHXAat8pb9voqiRmsyQ7Dfe1UzWtmQ",
  "key34": "5BrGzP6duSsAxiqzNwo6Zmond2wRacTZP4Gddyko2k4qvp3c1MMfkxEQwsGebDri5kuqFNrfR3RrqB1VaWh1GRsF",
  "key35": "3tnXRqYyQ6KUZg64yKUxTfAQvwJotDtLQDUYbuHWFMD6Kf1RRRPpqTVVV6Ydr2sb5bK8yHFxwuPnMxEGMf72UdJK",
  "key36": "39qM5XfqzwoncF5t1Di7A1kZByUq9AoPfzDjJDPksVdir4bqKhan3344UHikobHPs86DTCKQMzwGNhdWZpQh5Zc4",
  "key37": "2BVaPswSYozHuCBXsUjzzQu1RyRubtrjVFrEZgcGRs161Ge4yGSqLxrJ8aL8EVYugdGHAdUTkBkSAQMXsscGPheP",
  "key38": "2ZYQgJw4sxPaB55M5AoCRe6eGvQCdJEjCZaYDfkhYBxrw2hbEpVrhQVtg9QSvbzXLiTcXqsbXHkyT7A7x9V8MAFY"
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
