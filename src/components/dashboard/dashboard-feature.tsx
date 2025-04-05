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
    "48CLvAEqPYupoMkbmVtQLsDck1VuqogV3BHby42b9iqXwPxuywhMnCvLwDi3zu32mfCUN13YeB3kAt9GHWNtgTew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42kUc7485fEUXE5pkGRa57FiyCjdpnaQ3RruioqPQgndLH4y7m6fjTqQYK1rN13Vatw5fZ2bpkeXhEbjwewPA1S1",
  "key1": "5zQuFrBjvb2eCXkZUZwXdaWkHjjSSaBqKTc9L9sT41J1gxy641aqiWGvcEqwe7mV9yx1upm54vXnXdVh6ZKYSzvb",
  "key2": "4pUud36ZhmkWP933fCGDjJ1uFCPffcJfn9NPXtEw7pWo6gjYNoDijfVtJtToYrjo47pLAhFj4BHhdH9Z9pNrkdgo",
  "key3": "2T2WDJKgdYCPkTcszpV9yTeRxegGyjLXBqhy1qbwMzKAFH2a5uQzjJXvr2LU5jEDYMu1sKh6yQVK9oKqb1mU9mi8",
  "key4": "3tnxPmvysSkuTaXfY2F7FYsmJtrLuU2jQGxUzMPcV94hqddG7y8APyTHRRPz4oenRH5KAqSbACBdaRjJvBvetGrX",
  "key5": "3XnkHJ8PPnC5ziwzYNhURWhTiu1biqPFChi2rM65GoJMXj4wC2gYJur7UhURwCWgcjTXb5jV9wdt9MBny8B4Ty75",
  "key6": "gPKqnnuNuVWumzQKbqXgWa8nVBJEwKoKz9W4aLKT5oYh9ot7cFiaC65JN54BbCabhNxRfW5ccimhyQTZfMLpXNm",
  "key7": "3CPUMniy6d76Nbh9yRVKYx1LW84NtkPWf2AvA1N9QsqLNyN8748TEZaej6YAMiZdpnATzzz2vouLpszVw4FoSWdj",
  "key8": "417AXV2qTH3ZA73xbetdobFsf673m2gzkgMDV2BsrTycmKpVZzc2tNJBDBbg7ao264M6Ns1Gg7AjEJw5j9u8REWb",
  "key9": "2kfan1TuiN8PWb3BGfzEzEpPiXADPLuTQdnTaRxA3pcrrfu37Z2Z89iYUf5cJfLpJaqtRqCJpUntU3hAKWqbYYjg",
  "key10": "ggS7xMjAVCQ78ZJXsDrFCf424NDDjqWyWWnDHR4XFDi7pne2BK2zrF9BFTBb8t4wQsRASrTCTnraDYKdCoDFWJs",
  "key11": "48Y7beENR7JVhaR2aCU7F3bn8Hg8jSihsLqxkQJHxYtiaCsLbx8dPiAQbhcDcWmy3znpUu8xatX3DCy6QUtc7PLv",
  "key12": "q46Q4JQgsi2cEnhicj9296ZEXRgoM92oWmLUEGBYR9kccyXVi4s3fbq3gnyKdcPndQozGtXbXwCnRmVeRHqmQyX",
  "key13": "4yf4BvsQfyb4VAQFpkE8PiceVaYXGBDdvvJ3ccdZCWj3nWJ83WsTTYaAFX2ZSkQWZXS8C8Wgcv3yGYJ7UZYjbaG8",
  "key14": "2MRanRJzS1e6C2DGvyKDsYEBArCFWG2hGygXAcZJEoNAbjW4RCDwjoiWfEuQRhXexLqhzfErxTtg5DR8i51xjZKt",
  "key15": "536tNZqpCzSpdu9TExxGRCg2TRhDfFwYrynKwCMRzxoLh9to1PuYUnHDxAVLkEA9GgSdMF7CdY55WagiZ6W51tbc",
  "key16": "WnXYZmeFL52Bb8M22mEs8rhkQKwyQQZ3nzL4qezayDBo5tsP2BDiKf6zr5sG9bsBS8XupJ9zDFw2XxtUKCkQKZC",
  "key17": "4b8vwuEVvBoPWrdENzw8Du14LKVnxZTxVPYhnEN23qvk9rGst8cJXe4UNb3yT6G3gE8zSvEDhkMa6vRuBJRwem6b",
  "key18": "5P5sjkWpGhaWgUJCBAwixLNCqxFJYFxXKaLpmwPgqbPzncR12fAVSiQ8pAmsSBweacGePfJqc8ycqo4bRPxMw1ds",
  "key19": "2tqtGaS65QqhP4t3aDapK7roVMY1Kf9az2LHcneCoMDRntQh4Tkon61kmo73URocFmLQFroqo3gPiMhzeDKGYbhW",
  "key20": "2BKgmJjEiKH1joBbazAcSh8SbpcvwNm8bc2Pism1Cy3AnW3388yUN9naVCmSNicMnekcdc5MJcFM2Snm3HVsxYci",
  "key21": "2cabFqZmwYhan9oR9NmhftKVav9A2rVaAbj1gZvSv1L68Ss4omnGznFPW8SW75FnenUxE1AF23wnAHSotyCGRfRm",
  "key22": "s8EzZv3Hq1QHf9KoEw9LUnnRq6CLWiRVxhynEtJvyPyx2qGSEqyuoGpgMavs862PZwgyXBShqYFE4957LrvFK9t",
  "key23": "mPQNVwSNU9RqDEeXiDyFo8BysC3hM9eoRf4u23iUGTQpQWBrChK5EXyUbNpAggLSgJbe7wbTWShwCGbHkh9SqJk",
  "key24": "4cMqJxGW9dK7bjfPgkzLE4SaswBgKkXCxy2frwP4jT9E71bmgNUT9snuM9T5UdMgFTG65RsF9iLc635QdtcWbJpF",
  "key25": "46yg61wwL1svWpeThgjMmqncffPNUXRDpWADbojPGPhPFBsJgYeGNkJbeYBm644uM6AyH1EobzWrKsjpxKWYicMg",
  "key26": "3DYFxFFZLyHjyKgsVKGwDg4gks8xcG4C7dkCkcuBu6oLXpVyqzcptesp1XzBGSWem2V4bNdXFCf3sxY4eXWM4rfV",
  "key27": "VfW6vzxywg1Sa7GyuvEMkrrU5UP12dujF3jFL7haubv6DCKnSLfCMR78rf21xVQPhx4wFeKwKHGV4L2yNiHwsoW",
  "key28": "4KyhxJyLu7VcJjpiyuTDM7K3FHSpp227zgU1jNMGALL8EDh5dWabSYP36ETm59wadCvoDycpj3ReagsxAjJGA9Ns",
  "key29": "4iceSv4XLNeFQN9wUph7V8fxJWeqZUE9vdgT5yVCnNcKT8bXEZYbvTXi2H1jrxHxE8TCgyNvnaCg9WPtCdVJE9Fq",
  "key30": "fU1Hi4PHDDvDGNXjUUEvaGULgS9ZzEcFjZc4LMvH4EMEKWfGMffrWLEWyFu5hyqDCRteWnR4Zrf5PXqJf537Zxm",
  "key31": "5rAQRKK4dCf1Da8JrVrLDziMffPUWnjyUdnCx8y7vkApw18xs7xGSWr9YS3SU22fa5AVhUJ9NboewTNvK6LVeLBq",
  "key32": "3X2wbDwPzJfmx6osi9Ga4UseRFa8G7Y3WYTcJ6hPRG5S6yT6J8cQLm6X5aqy54ovxvBJhmSN7D2o9HSFNyzesTvh",
  "key33": "29RdsCSKkEiDwRY6CVwUFk9m6Fwa85HaYaewmzb7dDTe61auKoBTBVbgBh41vZ2geATsaGcEihsHCtCJgb2Sa9yr",
  "key34": "4kNLqBkyEyA6XpESmy94hfAbd5SfhbFZrcSLJR9RAaVCBzyGmsL4UUW1tBWovTBkEfrKmL8guPigixWkUQ3JU5oK",
  "key35": "5atVSB58GR4gHmURoY4hSPELyhe98obTbRidfnjp17gQxM19Unkc6epf3dftjz4PnWhVyuPF6NbmDhdwppqdBdVh",
  "key36": "4wLvifk6QxJbFkbzUMKYgBnze2vniy1dpaxmP8qXX54ZGcbEWn7DKfWpqFRb34xv9MF1cxgegvbidZ1PtvkKyfhq",
  "key37": "2mwhbZLxDoe6YxAzDpKCPF8BHnyrEiFTyN6VSgWB6nTiinomv6G8MV3sKT41qUY575RRUoWycZtGPj6szN9QYW7H",
  "key38": "5Kgjp3CBt4hPw8vJynify2Xaqi5PiNLg9hXisb4Mz8mygtbyr8XapmUpFuXkLvfWsYd3wseyqHTkfUDzRuSpTTgK",
  "key39": "2q1gzxWGCi2KmtdnYrRs2nrSJDcQp6JMgCK2dJ7iJ2HQKjZbHxjVLofbQ4BYjFMzC6bLpauE7kAuXrpRj9L2EsSu",
  "key40": "4K54DEbdAFzkZnegt5bCmJzpqzCBpBgEJW6hS2VvckhfBuknzw1UbPqUFZoqL35eD1DNJEfnsEY4ysrN6mebDWWs",
  "key41": "3UFyDyB1r8hGZGR8DZzyE6AkKHbgiMz4e2kFbiEKxoddL3ZackKJK854pB3pDj7r3fWdDrKxmxN9J6RhN7wuXnLW"
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
