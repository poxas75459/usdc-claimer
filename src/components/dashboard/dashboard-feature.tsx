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
    "5FyHv1WgmsotMHgB62TyuoeQMBuRVuVoSBurgL3M3MJKovZkbrAVaro2XMiU22jzUeHznV9AHg5wuq8eraq69EJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TyvFayfj9D5wbjHMKktknuzW6vfvpWH9i1Z8Qrdpzr3BRwQfBTQtSzUUU65Cfai3yT8J5gFLgK1Dv7aak6UR1UH",
  "key1": "4qdSFrqWWMp2MHaaaDcRQ8EVRFti2ZtctK4yLDMpSMfouk1vBhgFzr5w8fBpnT7h351uWVg5vDB4hcpUDVRB6JLK",
  "key2": "4848FfxMpRGWX7reMtGyDDRLb189JReuw11NdorRX9gZz4a8RMXv4XxeDeLRH7WTPrKvsQk5ioFFVM92ULUo2Xvr",
  "key3": "4ZwaMzfrPw3DatHk5YS8QvYLm1GubuZm6P1SBwyvxmXTGKGhs33qbMLX9h95XPUxDLZaDfF9RCVsH38dwFXvmWUb",
  "key4": "4RK2LemQZdGAUoQZA5HzVygpvte8MJq6PXYnTQsqYcAi66JxZFJ52EDkKjZnUi1mQJZYLWqXEzQqTtvKhgT3Uw9T",
  "key5": "2o8H4nkNvGM5H9EHRTWTydnW3BAoDEJtEHkzRwF2CkirqSjo9jtmwXkAHoLokA6f92nwE89RWLo1ZoAKwmR9MRq5",
  "key6": "2B1DFcDWSqFRocftcVbWcEWToo71cV6xHv8arsusCx3bvw8eXq5YkY9RK5DzECiABf5PjWVqp7cpg63jSvJvDXx5",
  "key7": "4D6BYZMKHfQYtqg4ijWRKmWuzX9Vz7mtdqr2wnE1BakdEgjHJBeanhFHC1S8CXU5JzJMYxovu8Ujvow5xLJiagGz",
  "key8": "4PiEGjDH2gAKQMLPtYAMSkAqXFFDaZmuk86MrRr87hRdg786E1P1SU6Nr3f7vmdMU79q7wvk2jHBJH2sfRxGJ4BZ",
  "key9": "2YzTAqnuwVJ36DWcgv9Umt7KfrE1KvJSSofq1hyYdNenKCNR9i5mSH18VfNv88grFSnAKh3w2Srf4d21tMHV2G9s",
  "key10": "2ohr3PF78uwBxgj2vFgJus6b82N6NB8PJQwrV6gzVNA4nd2gCGet3vUQTRxxGUBWu9nP3MMVqNz3W3i5b9zETVWP",
  "key11": "4xeTywqK5Hvf6d63U9VFwTVjAkkFEMrndiqpKgtar4DVi5qyWNpHoS6wk6UrQNgwfFkaFHUSonthpScuYwthr2xx",
  "key12": "2wC5HZaAgosZaLqcp8dXtj4KYT3y61gERQYf3JYP8gyEjzoe8BoFkevCEBMsFPp4zevQZ6Zb7BdbaJx89QHnrsyi",
  "key13": "3jLZtAQ6u8rrGnEqzWoF2pt34KBndaX9db4FQNMd3Y6huBeSwAwC9i4VQimoCmbN1i3jMLSDyLmACVRBjbuagKFf",
  "key14": "rLUG4U1y7yjjY6aDgVnwQQk6pVRDzaVFCXAUAV3Pg29wPG6LAciNWZy9hyohw7P7C5LpybdS7McKYeW2BJg9q3A",
  "key15": "51a1CEXjPqmiHqfeZ5ALgMcpA75YaSuNSTc2DC7CqGWhiWk7ZUBRSBF8tLkkw35DL7fVcr3brwUAbABQSNViZZzd",
  "key16": "PMLZ4u2mRkbvSNYRVcUEzrzstLD8v2Qvjf5aveSQFXDKt1erwHkitgwbP56264EhvRRtxMP43PFV8ANrpsmpLva",
  "key17": "4R9cPdrVpMEzB6eAfEVm4xJxwQ4Z76e5QiTzZFUZrh9Mr1QbpPgHPaPgy1p3Xc45hb38sZEV4kxP7a6HigH1DXXL",
  "key18": "2C2cinf3gJZQ6eJrFsvVTvKr19R6WJAfMs2ejRyAtg5H3QrdAwLbvrsxREtfRWCmg1tLe5Fmmod4sdAStDPeihg1",
  "key19": "26JSnwy5Nj7ZDG3t1uQNNZv6SZysFAqMTh6ZcS3nKuqyWdCLPZ4fTqX3oJrVa84KGXqTBWXYZeuZ8mn4ifJdneRZ",
  "key20": "4qxksMSXm3t1wf5njkDxhYbXjghykQGj1C5Tn4c5E1742sLWub4Y1ogkNmu7HyXrTnGtvFAu4ByudqxgMYw4tf7Q",
  "key21": "2sEDMSSnZNFeU4JqKs3K9AfNCNqbfiENTuDB5APVZyD732HZqkUkT2dsG1ceRRqrd1q9pHD52q2fMjmVGtyvHC4v",
  "key22": "3Vpp5LYWkLVi1RVxWAFifCGSsYqCzq5WfihcsGxoBdH9D1Yur6Jiz77VJTjVqQ7r6TZ4MjgwimMZ5GYVust4SZwx",
  "key23": "3mfYdoieUmudhMGn7jGmEe3AFWcL9Kv4RAShhWsqNpcBRvy9tgVhFZReLdcEeZgMFeMW6ytvs7auUeeJLbGMKhVY",
  "key24": "4dnKYvN2FgyyM63FTTZZR3wYYcZjkhuuh2VJt9SvLL5MUzaEAh4iek2sFnrM4QpygVzUd5o1kTE5LGaU6tF5EsSv",
  "key25": "3LXNtcbrtmxuJS43PhhXgkvsw6Yhy4GaZpM4jtbViAskpTPLHB2R1Wrxmjaw43tftsvTxXyFtKV483qDLAVAicpp",
  "key26": "5wTFKdPcKkCmzPA62zcypRrznL1jbzTJTXjp5dFyfSsdVw2ibm9k7tpR2g5pKUjkGhAqeE4ftWLZ7Tv57CrR117w",
  "key27": "31HQM2i3braveVVmxmekhZ3TxMp2b48SPmNFv6E3R4tv2hyW53HQGKMhVfJ7GfZrBQR5kxZpV5j5tjkbhGQ4LtAa",
  "key28": "58or3FLZujnsTc6E2jbcoSjSVY5MDmiU22JBpXt97kS5rFJbCUAX78wt2DXjD4T97vCiauyM7pGPL2NdZTfHL5xk",
  "key29": "3REt4STuUuNNw5fYkrSqJGLzC725xPoTS3zurd3noMPWcaPJQ3i5ShsCXxW14okxaL8vEi3u5ZczEx3Jqf7Gyg1q",
  "key30": "CuyP8guTeWyWCQvUAB2WrmrqCv66eB9cwnLG7Sgm4fqqRtv6FyUVHwp6E74BZbKf2PS9J6YxQx42aYAVKSB2dM9",
  "key31": "5DXEAcoZEnm1VvYqvWktDo5cbjW4GfDdkmN27rtTnBSGtuQ17pozjhEWuyVr9TPEYRnAvcGWLxKxS63XnTCmB9T9",
  "key32": "2ag8HYXemGKADVivzwMMsZSd4ipF13JRabAuSwDx6B6j7ddr9pWLiQc2KsbztuyZCAqu6G8Hj1qpVhWVHc7ef1au",
  "key33": "2HFySjtp2HaG7fSY5vVcKtY8ZkkmLwGQagtvNvcr2KSs3AJJm6386L8vmgjb2aPaHvHKbymz3CanCsNvAVnjChfp",
  "key34": "2hVvbSJCEx5PDuDJ8Z2QYWYR49eSaERvbXKVRpSBhdRQTCUqfmUBGneENBsigPs2fp9dS35e3moVVWVPZu5B1nRG",
  "key35": "3CXj2U5pJUyUFFuxPPeYKSrHmZQrVfsn4D4EiejCH5LY7xAw1PZwS5ky5JLEQRaHVsm38ugsxuRx12X1SMD4KNiS",
  "key36": "4ZY76z5kSBpQwUCivTdzP1hQX8HgQ9xyYgqAGG7CCsX6piAxCQVNif6iBdAMdQjw68MF3KfrdUbiJRuNbjcESWyg",
  "key37": "3cziNPtL7woSmUMuykBW1hgSxM9RCe9Nu5C9txSKVoNm8i3eBbcTLCQjqogQxU67RK8yp7jTTPfpMKmpvCF2NPAy",
  "key38": "2uJLFp4dWeF5nx5d2ZZWsBJobzHfLBSKdWSQcJBdZuUtbs9QqN966LUzVJh4D4ArYU7wjxgGAiAhmmL8zHsCTtAn",
  "key39": "33TCLFsu65gKpF6gbWasput38e5smAJkwLx74HRtwY2hMzozmf7eameknEANspREK4ydACY52RGYAEHTaxk66Nv1",
  "key40": "J4fnWxZweyj9FXkDETqd2qHG97zGzau1xFRusv1qRUKD818jMh3fqt9Ys4nq4fZ4o2avJpdXkRRf8HSfaFKd5XM",
  "key41": "2G1L5EkfyG2S2cvkJD1eCWqci21AeV1GtifrDTa9bfV3LfuWVHXaAiervaEEeXpSMYUUuukfS4mGZ58PurQmofrj",
  "key42": "cg8AZw5ANicNKGdWWhbdq5hFgEPNHog1bfHMbSx6226XQ2PVcnRhnjewL1mjsfjxjWQbqi3atQQjMoMbP134YLq",
  "key43": "5jy76kVS2PRD7cib2Cfugxhra3d8fC7BXiqPMgSuzRRNjFBaVMeTDHkmvf2RTDAkb2TadHLGreZzsFoA6CxjN5RX",
  "key44": "3oJtj88Sogg18GaTPpqoUJWmwTfHvKxLBhMHbLaecn6BojTDyiMV5mxz3UufTt7FT7dtwP9z8WADRRvWEUjyHkU7",
  "key45": "3prs5zDGT3h5tEqSNUH6uqfiEjP32JTJ1njei9xUXSJ1PdK8bj6c87KJVRFLiMDE6E2aJ2ot2iFf9ee7MxZTs5PH",
  "key46": "ZhKcjJeXgTxDRXpLo9Lk2dCbjnT4wqDcMgYL32pjYuux3HzL5fUKwhCsv8K6FoKunvNqBUvw5XtUJscxprtuNZj",
  "key47": "3my2PoFMY2To8L42D1eZbyoPK1KgoCCGDCxgZ3Cvrxc75h2XfEwKbV5FSxf125deqhP2QcrbpbDdfFAYxTXFcayn"
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
