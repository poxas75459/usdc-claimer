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
    "4XMcqBx6dPVHQjnJFHhvCosaSGuXxAkguenmYoSPE54c61fh2VuS3FH5NTKKcHTf1TiLVjn6BxDTYVuEGupf7ftm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tNfRwbgGfxiLjcT1cWE9KU7vKbipyNx3CQYt8sRo7Hk5WoPhnjbuFLCCAyjPyCa6TdH4nDETi5JZwtHkg62byVs",
  "key1": "2Pcm1fq6Ucb7pjnY5z5wfhDkpG7btotTUQ6VkPKeEbUfr22kRsmKEe2BqSSadd5xGWsPPqLXdx82NCT7Ljud46Pd",
  "key2": "46AAXRjQo6GRktQxKDPzZhoscRFbNm8TRPRoPY4n5GZiqnTggjYv2kDBfskKyXxeqdruyq4pzNffN86ic2nuMmJc",
  "key3": "4UWgptaSTB7SKGjkwyM2Q1UTmwnYPMz1uJhTFbrvn8nu1Aa2a49cUTknpHRnHwFHNB9LehZ1snNMuf52APut64nQ",
  "key4": "3aPbR4mz25Y94Trt2Xm5DrqnSmGEaQ4X53RpKRKi9EDUFAthNTnRgxVLumDEzjCzuDGjhXRDefh8wcQX5E4ekifm",
  "key5": "3eUJbeAjWiJkntNZKwuxQonBPww2mDRuMdnwmzEm8kJDXmCyAXEuD9CBDQvJ5Z7a9p7bfbws6WiSM3EcQWZEcshL",
  "key6": "489J7KP7pbi4dRkUyTcFtuYHPw3xNkyEDJdJdLzzvUQhVcmeLBfu6vpnr8GtG5hPUVBki3ZTuhrqj9LQUBFDKbE1",
  "key7": "4GDD2Z8RYAtVwgmZ37wJLc2WRDGgH3k67WQew1865NRsvK7yCyVHTiEevwWqqwrPh6MVos7pYfksFn7onHfbswDt",
  "key8": "25hagnkCgAaJfsEi6gADyh6oWkXUcZG2UAhdpdDkutRmUmEbokAhMFqf88zyuJCtrqXx12GHE35UdmpMGjHrzztn",
  "key9": "4khUB4yCd8xrWYqTN1SLiNSHebYScdpbbHhMFQnyFVf6BFmtxdmyMBJeszYJ6FAiG3cZq2ajyotRJrXy3EieqUZo",
  "key10": "3DHhcVazYxAetLz4iU3PigJ5aRkPxdcLPn9bFqXpDJBPqo6vbHKTVJzDJ37WdQoPvptorgquRdUy8D6eCGRcMbe9",
  "key11": "2wLsrW23EXABGmEHbZRyssPZg2GbdP2jMJL2uhAg6JF36fRshskd7K3es6JHszC75P2RKAJmFgNefgQF4maTtPco",
  "key12": "2urZJToXHrCSQdL2UNuNo9d1mEEkqK1C8wtftHFJ7rbnDosqpju8e8cgvCnMwVDPVaQVUcBmgu99UCV6Rk8Lxax5",
  "key13": "3PUVtKS73sFDq5Ah1iJLRhxHZhH2xfE7FgGaBfsWgmN8BzAmG6NgoGQ2iq8FhG9omaLq5kjCAQeFkJUKVmGXYx7u",
  "key14": "4WUuboeSSf7fuBdxpiXLbbDJa6jdGQn883nokppPnWCgnNtoW9VUMEiuzCfLTE7nWSwW2vsXnKeY8yZHj8r1N1rM",
  "key15": "62rcLAMKX2t9a6eDAKNxhDuz5C8H3Vm6HQSgdKefS7zkpDAp8Z2izMmMCeLwAJsSGjVdb8vu6KSSyRcamZQreQit",
  "key16": "VuM3b3Y3ENpkRok2iqJxs82QHP2WkkkEheXcBa6AgMVTMhr72nXanCXpMb7uXdUM6Mkiu8Ttj9QzuwWZWUs4nhH",
  "key17": "3AA1uGmcBhKYYhKzWaSg4kEefafEn8hdgJFD3dX9GZ6SbyEKpR1oLzku9wvGy8omZ8GXFt3ESL1RnVVABUQS6hdK",
  "key18": "3cMyqhZaaTgftqhmaQGjoyhRVDfRkF9NJwgAsnCN5gW7usPmFdE3PrpugPM3xjaCdmcBfXNqumF8NXehshwJMKB3",
  "key19": "67F2TpAR5K7JHTwnwrqnpAFSNTKBGoYBAMpb7NtbRkXaHY6Spiiuz7RhuSS2JVXSKJt1JkxPgAqnbwKu5qmXSXzw",
  "key20": "59nse11zEHZ4Hava3Hs15PFGGFb3rhjwK4oTgNjNesixzumhpHAjUZqtF2J9Hvqa6DXKrBbefmN6FYDXCx6LJ4P9",
  "key21": "3QPFxGjeEs4y839JFzn462vsPqf3KTDCyr2wav4LxsS8H1G3xQNu9KdUYzRy4ibhdFi3Geiw2FFdpqKzUpNtcBY",
  "key22": "5rVpbzKSPejHhMcyhK9fZjYhxXNKAaWc9DKhpSm4Ed4vWXWPsBYhmZUByC7Zt2ksrA9mh1iDUkP3WARsLRL5QBiH",
  "key23": "i61iEW41oBoV4T5QvroKW3TfRKBPX23CnDr2BHd9CC9BAdYktbn5ycZVQEkHgRAUiuG3suqh884EnnRMcVyuEK8",
  "key24": "3hvfs5p1S7sCjDRus1Y9Ps5Xnj93y2MRNrZWGRtrbDKMV91aHPgaudWmc5bt88D3Ki9mWP9qz5L9BhD5TtCBPgTP",
  "key25": "aXH581AsrBmsETqyZjjFzHdNfeqdghzeFBLozDnSxbnWxBd97m1F7o8aoTdHhkoDi1bcR876jvYoevMKQmv9Zd4",
  "key26": "4tjCPJiEvTyYivB1PntPUDRR8Rnrn6LkPaW5ZsYgj7KiKiT3iJ6nfhx78DuZyc5QtoE5Z15Hcko3AxChVpNTwpmF",
  "key27": "39urNARuxFA5fEXWiV3DMDUzz3F4jb7CENRS6wFN96v2oWcrAKFVUtGYnz4fVGtJ9TXFjKwFi33HjvekBBVGSw9Y",
  "key28": "4ajSmC9G5TxFvDDSCTTKRn2ZjnWEynSa7FwudkGQJP6pkEJ8HcduYQf6JxwAriKJP2bshRV8u2mcUF3QmC5HwfiS",
  "key29": "3tugJGHQvfiBUqzQVcsA4jTo5HJfccv9CDK7r9w2JayHoM5H8eN5XTKhbxF3c6H5E5iL4T5ghmzrcuqotBhdFeGL",
  "key30": "4DcoDhgRmn2XHQyPhfi4Z3Y3v3ggwf52K7jzggDUccm1BCNGjPLzrjEwTpBWoS4fGaTTLfoKjfTwCShrMVKdKajK",
  "key31": "5UzQCmr6ug6NGwg4utwVLMEfke8Mpa6eUZNaZGzsepnR58QkxFEKWP13LEkEqFk7LjdYG2ZXmxuTArUwhMU8HoSq",
  "key32": "4o4qwMc45RYVF9qVm2zCXmjRuA5v8snboLwVwEfYva27bCQ7tDhTXcfbanmLiB3M8sVLCebRTvp1sHoG8bgru77k",
  "key33": "3W4Y7FZsHnjuwEqBDru8buYUWUBALNVhSF1aJG9wr9gyzYKwxyPapGuhkLzXLW5D59tuet5JMaL9Ap8YmQoTg8Ge",
  "key34": "5Gdmsui6zx6nqfGC6jdaZ5oBjPvmBJpxuYe3c8792Jxk7qVAh51JUqnTCT3qnydKfvnzdsbw5dWkLeTkPYeWHNGW",
  "key35": "4wMzLcBdoGHGpjUTanD3HbCDzUUWzhiBJjpsxoa2ziuGivZQ6of7yk6tTmVrQXu8BKiGcbGxApbUDdiAN4HQMdxt",
  "key36": "3bgRUhcfANomjvQiqjTvRKQBbLNjXghmCeMvh2XALfDEiY5jH5A4coJCrpuS5w1JRycPQMQXrysXf8Ud1dvugPCW",
  "key37": "4xMuu57U3gundP67NBA4jBWfPdZPccMUEyXhEcQVDuRbDGKs3jJvyanCTEiAdpXe7tEvzeeEWdda8r4R9nAvGeUF"
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
