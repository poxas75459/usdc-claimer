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
    "3BiNPEuySgBxxJ52X1a7W24dToh58PeRRtUytS1CwBHm2QBoro7zC4eVFn9yMBD3KsxoLo7XhNLcV2t2jgo7cmar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R4puJZKiZgywHQGY6K1xyqv4HfZvAoCk8x1eqq4rziSprwMsgCGbZDwVCVtqFGZtejV7JkTafwMZzqeASks9k4r",
  "key1": "qNHfunf5QKMNi3k5c8Ds4M6aMQThBXWVXtr4an8LjWCzoSiCYUEEZWq3yni5UaWWJE2UcAkoPJdfXxE2czCKpzw",
  "key2": "65fuWwUHZ4W7QYFiTERyrktUbQdSeKcukZKSB38qiah2Z2phbBx5Fye5yTWTLythBxpq9V6YqFy3pXw7F2EatAXi",
  "key3": "5evAsrFgTpDyn6cYTSS9rCjJjxcXLBcVMcVx4acEPM8eBdWuRoirCt6wACF7yGqYjuRnoDYhizBLkMWCb4yVMuuH",
  "key4": "rDEQMh72A4vJfcDLpHWDxzj1gUyAVFCAemNALwEBpxPd5xM8VjZHQTBMu6x7zTmLT1tgDPAkgsR9p4yDgjnnBRU",
  "key5": "5RDwsBsnXYRGFeUbbxeXHZXzaQJnAsKb3MDPYGU7ZCSyV1r2H3ou42imA7HeanyKP8RPpMCoP28wNgToB8KfpPr3",
  "key6": "2iyjDt74F1UTY7VvK7vwUVxfNvnjZzAb9yZm7RN6ASrcLUct5tNogP4kW4iuTAvSeNVsqJZBMZT1S4FEKoRSDMBP",
  "key7": "54nuxZJU2pXuvak1HQzPKPmfmVcjVwca75EES5pv3nHNMNrSnmPZWcenvj2MeJbnkx4LABB7zj2ZJUAKuvhJZngP",
  "key8": "3PW1qt1e5kyqhugRv5KKTo5KXdcS4jowAHmRPPRtuDCcEBK5JXXjTCtDeB3vq9jhVwU6YosHPaymW9vM5Kyjw9ox",
  "key9": "2zXJWvAWdtVyR2QBEhzvMDzb1GEb53MQhK8voGSV7Keb9e5XLo9J1GYCGGSGsXBKk6MgGmK7dNs66d5p45jRXc6U",
  "key10": "3pL5tf39jZgZjbTbSMxcLugsfLW1LHce97yy5w4tMENqAsxaQTdyDKbZBgpEFA2EmV1BGq2ab5Vt651rAZrbKeLV",
  "key11": "41oEZMfExg4ECN7nLwJWsZVoUNotS4AimLjnAJGD7Gt3jeznjxz5oUdqD6DTG52hxyq4p1HapTdaP7xSDQDGu6t",
  "key12": "4Vs9WP7srdc5QRXeqQRTdhTc13BTwLpqRMKmLSYeHsWbmpTzbshuT47nvrJis2ydeabRQoCYhnKkbLt7gECqKVXc",
  "key13": "2biQd4mMPYDCa7cL7SxKkNktjY1kxaAiHbRizo8p1ecYXX2LA6nAp3vi1p6K54gMf5pjYCKQhPwe4ACgWXAwnjz6",
  "key14": "eGCnrsiYQa73ZVMBoJG6CyCsShkgpwumwT9RSXw3DwZc1t3A2Xwchu759UYHLfknioP6Vp8ZB6CfnnJfZG21XXL",
  "key15": "2F4p3ATzunCow49KRnhEA4B2q1ddywWHa2GqjsFKhaiC7uAdonNC4fvRr1FdJcrednGkW8rAasrVLayKu7HfEUoa",
  "key16": "4W7mWBxtyn9nVn97fHbc2AfFusTJYBZsuMNawZSZxqq45CmQHAJdPPsPuLpwm2JqbFQVQqiG4J51G2F7SAWgdnAX",
  "key17": "33M8Ubv4sHHx6UixjPTasoYpr9oNqENh8YRWvBstaMnp35HvFzvxyHTATggj6KKaV6sy6Xq3ChYymqRjGTarATqx",
  "key18": "2g9uT1bSb9MkDKNmbtKqDayGK2zJPWKVhepwpSaSR1Qd6J9TH95EGe34m3VPWpY2R6f7drTWjhXnbLT28KJCA4U",
  "key19": "4ygiS4gUrnJgUmCVdCMT6HkhX4kxXWcTTf68Bwd2HGR2JU2Auc9DToiKk5nvn6KVksdjpLSRKHcbEyHc28s1ESMk",
  "key20": "65d34QygxWcPezyJeoYSJXTkW8cixCLcm6mFuiNzZcoqrtJfNdUcbzha24mRwZog6JZBZcYL5AbNNBb8RKikzLKV",
  "key21": "5aUitjhBnWsdqLWT3sCoMANpGoGTfMcD3e9XjRX4M5tuaxxntjW8YKt1jvgrURtcpo9yEbPhkaXvz9ek7SDofA67",
  "key22": "37Vthvgb8FBpCyDqp6JraotUesaG3GVuNRfnCuoELthySUePb5kVqQNoS2bkZbyYdRzgH14KN7SCEbCy8e7FDq7u",
  "key23": "5p7gLLUE7q3xjQtVA3Jw1fuoPyXGkBUCr8tgW6uJxZ5uoFYFz8gvXykStge4W2xuY4S9eGVtJF38a2UTNAYRmayn",
  "key24": "5KBwddeanTEmgdV6WVjuvsG8KWVt9KYz77w4XBCrJCxDphmRqXmq6EGu94gs2E5XVaARZkvfLq2eCLo33r225mbC",
  "key25": "4cN9jT1VwG5CYt5UX5nobvbuJ6UryBL2puLxW6gavq3MMgtrjTDcBqby8ELuRSQTUdkqK6zbPWTM2x7ohrJZoFKN",
  "key26": "QU6DrWdMKfdAywqvHC1VkstvMTNkvbXV24FWPzoRiS9F5VrxcpcUMwh3cQ4AtenTbZTWK1ZscBjqwBqkz6RzqEN",
  "key27": "4tShML2JRW8ufBZYAMKqPCKGoHMbmDG3QWV4kQDmDHiS8vct6kWNKQXz1hvKWQtev4zUR9XvNXmiTdfjtpUUCABM",
  "key28": "2hq7QX1wAn3DgJvRkAi34jEo5Cqa6oKDiJU6L4NpBVfWBcZUqGhzJGDorEZNvPBGnxfBZgBFyi21g3NB7aeqkNdw",
  "key29": "2d6P2NNWy3JfvJfJCye7xmdN9nMV93tktE1WUrp1USwQqUEaxCAznG4U42PwGUZkuqU3DS2MmbTrVVmKBmtnaYPE",
  "key30": "32eU8rRanWa7GWquViAKYN1r9wKdL78d8NRNFGw5j1MUvBydY9QtEpv4yvCqqYsn6xXtLbE5kp3Sbf59HRoi3Ppo",
  "key31": "466XWZgRTyu8SkTYUmM8nx5pBupb5rTTVwfRoyBA9DNhuF5NWN5kqYBaQAecb3YftRSfhQUekCcSLecwFFskZVSB",
  "key32": "4qQSpouYBCXQoBBmW52zTUtXpE3Z6xpqzNBMecqnpmnjB8DYEHPvn2sRZZvQZvwXChK3GkQ6wajtex6oHE2eV3AG",
  "key33": "5uNeUjZGf4GR8JzPnQnBZZ7J8NmytJT2tPoe8hvqyFnwJufCLBLUT4PPZJ7p74WQfJ6yefrpfQze53FjH8odiMnw",
  "key34": "4EfGvUtu1FJYC2fwzoUQ1SdK3KVaYnVuEmxXWorxGZwTZFRNVzJoVfv6AWikXBFExb528mKkzr3d3v77yxDprG7J",
  "key35": "3DCD5L3anwojVPUat6iq1zGy25fcD8tBKzkhoa1a1kf4eGnd89srMqxjLa9c7rgEKoGDJTdCB199kDKWyNDosGUi",
  "key36": "N8iYJ28S94N1Zz3hTycNGRkgVZUuFkyDeCAhbFkAw4Gmi16GySf5trB475dArMTvzspyLp2dhPhTfj9oCbaugz1",
  "key37": "3FXAVkkkMBwmEjuTRr1kAAWbDBL1P2jB8P6McXZQ1f5jNPMdfKFYQL1xm3utfA42Hm7K8Haeu9WPAXVEThpgVKmJ",
  "key38": "4MUivJXuEfTwnxA6T1WBRfrMjE4PA4DG21ivQFidUHvQVumfRE4SnFu9JmhdoKAoL1WKsF2mSjQF4YHuguQzJ2an",
  "key39": "6KfBrRWfJDjinJ4XzkYa5qDPW55iBg5Fr3BDrmvJ5RZTjqe7S1xvbnopkYy55ZE6wfh45x2DuGbcgxZawG9HQ59",
  "key40": "4CkqfHWtFevFR5HCovLxLehVf4BgKizWL6NhHx2pQAsKrNueEArEzmUcKmN7mTaEKQqHE9FyN4ZGpBhcLHR2oZz2",
  "key41": "2CmEV9PwkyqY4s4tPfpbTJzY84TTJsW4jiSPqtKV44TMn5aJwxhXgUp4sagM6hCbMNbMAnKjuEp8oXDt6ksMgE4j",
  "key42": "4sAhqvqcYEZQggMr73Vvwk5c5FbFSDAbr28L8LLLhjUirXhpsvun243J4YBAZovu7g69jbPrDxoKXmdtKgKiCV3a",
  "key43": "62rYKU2FeEXfZSDDU7mNGYST2K3PsgLwiGXR9rW93m8WS9svMkX7HGWUmgsYbiPm8Y4knnD3HFdP8XVmBWZqRMaC"
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
