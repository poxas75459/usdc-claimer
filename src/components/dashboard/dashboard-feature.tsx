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
    "4npDJxTricDGsyqzg8JsKHFG6odrSyiMDy3wvXbVMX4MbdNrCSuQJp6SzpQc1PfWzzBBHBv9fBiTXAvUE7xJMVCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kZJkoWGL2JJrcWGiphMqMWG8S5vJtrdQruU5m9JdPtYBuqP3sHsWoHQ7gjMdG3Qmtb35Thjhw836KCaSLkJs1SS",
  "key1": "26vb8AFLmnLQhEJrN8vZw9uHfxNAmA4pxCXeuTPDtsCw2TW9zun2RrqyREzHCj6J3577mLncV5AC24UgVRFxAyZ2",
  "key2": "4dFhoaUFRD63F4ztq9muKpXd7TbTFwP7jpSGy1MRDC44QVGYZUf7wT8DHwjvaiQmZaDv9Tg9bw8mCXGm84Fm7jjV",
  "key3": "2B2tKtQWo4EQzt3WZT8RyWGkVaLQqsBD5RewakPhR2yyfrjZhZWRwrDtigJqmw3xVFxZzNPawnSbqQKJZ7VaQEDF",
  "key4": "5ZfWvSG96yDVz4mz53Ab2JkbzGAgbsZ41xJuWxHekGzJ1K8jPqVwmWyxzoXUEx99sbNDV7sjam7pjJoMGexU4zSh",
  "key5": "5XLqbo7ENoX1cUYw1sQQRqUHJ9akGyMFyCRnxfbUbv2A7VGKcKr1HLtYNy7WQrMsWzJJz5BZvUppB6thCZMCTzWp",
  "key6": "3htykMJFT9FtEZVSoA5p7HAXTa3JxpFgqERe1fmguDztMyyLgZoCB5SJRs4az7JwZqPGQLQvFpRoCrqcuqPNZNg3",
  "key7": "2r5DAzmCeryi3R832EPcBEvMpV51CtJyc2yBWjM9SWaUgXsJMDV5wYnABh4PvYjWd67v7dHP8Ghjmb8w1V8FFPsc",
  "key8": "hgHpqLDztvmp5biP22N8V8pWFkC18PVApLCr1juBboqku9njXuubjGavvr33iAjqy8nRJr2yMvhXoQCcp7KdpX2",
  "key9": "2LRuyZCZq8DB8pHXk2nErUYBKwPfYW7zDYto7Dtva3GuqnWvkqkf1KonWr2PBwfkuvLQL6UE3uG33cqp7eJnkzpp",
  "key10": "4EREm3mtAqBcrYybuotYduiLcqrh4nVSzevgYG4bmntb37hXUx9638abJQigXPdycp5fJuNmY5cHMngFyjogtpfc",
  "key11": "4XMtwcrQwbLEWCm47EAKLbvZhpWsRYRxZQwNMy5e149gPpie4sysBe2UGFrVuoRdNSs7iF6Dgxa67JcCSgqodwtc",
  "key12": "3pRJ4kFetGhymQx4T4ZusxM88qLFYDUaSo3YEhECbLvGipbuUcabQmMwhLYpQ9ytp1bF3WVJRbetzC79krbn7JxS",
  "key13": "ejNH6oGEvyuRBwbRddw3XhAoaaUnnKMfoU47fabxz52eVtA1yiHPUnAfURgtcb3spUxCLaX8TfhyyccveFztRYo",
  "key14": "5vLVMpGauzrdQUprYngz1N6D6NtDm6YCUCR13xJu3tFU5TWMNaKrF6YG8g27toqCZSwJXNypigZipEaedRHekpem",
  "key15": "WyBTR9m7qGQ1FN85LCncWKN6NhSMG88PyBEMw9ZtSVz6WFVmD3wuYcTTDntv1mJJ4LPZHc9Jk8uSBzg5MaW9Jxt",
  "key16": "4NJqJX99hi6QwiFXBWhBgBB47px9ByvsL85m419w4PK2HuZoUciJmCq1KbjfiawE3sHEoTsusdA61iY98oXPBucq",
  "key17": "SnS6Zpmu1UCmwf89bYioSABWTsCmDokRA2vF8kArw4twSSXKoXgzSu82QNm2rme1eWbLhNeqzy97jY2i6yK3jmw",
  "key18": "5EYz51TuQA58MF6R648qAQWK5ivf9avdjruutnGa7tbRrYHLyHqXjfnt749A9i2jwgGjRa31FYuCu449UBoQ353n",
  "key19": "3JdEHE3v83LVm5vuRD8YT5AKQShK4k3v7PiJhsoqMkiNDpb5EZYLkcR6dtuCnu1pdmW926rxd33HNofNmsU1XtLg",
  "key20": "upDe9oGdqqqZcGFEQMpJQcGLvuG3eH6TRdgdWkJZ69DruHMdj9Qti1DVzFVk5YjFidh4UN1QToT6qU3FeP7jxgP",
  "key21": "3PrtnZYWniyxxSJWCS5VDAjLRzqkTWLMK3MbJQDHBdRAtAhJ4yPfunAnvMETVhrgfUz2Pbz4V9c2jNKTngcDkeWv",
  "key22": "4axNHnBptYUys5PDQcsdiQR3VMH5hGjWkUKoFjj8YK7pQDmiSPGNGW6Lva3yyaqT9YXr6rzYhaZKmmMGEH1T1XBL",
  "key23": "JziTMiph14n8xw5JdFLifdGJti15w9m2vrHySF3ZSfKPGKkP2UgV6yjREZfp1HJ1EB2i9hnVR6gfcpX1h5ivJAg",
  "key24": "4U6u7ExT5E9i5MAR6U9BEjzuwRVV37c8HGY7iW3SBoLrmRbYQ5k3hhGFbq8LNjQFnqg6HCuVtKE9t3aXJ1CC9zg5",
  "key25": "38UZFPbNi9Xz58q3ntuU8evDhDZKGkXQsmNXLX7jcn1d19NJij3ep3Ao8DAwHaEgAPbtgdMqgF2ecKHQFE98xb1L",
  "key26": "4VgkzCBrSF1mX2vLHkNos6sLWX3JkpuJ3SzqjNquKD8v9eQYfWURcxxpgrHD3LwWAVCEWdmXciGzfX8JCVJKgbVJ",
  "key27": "4RXquc2YhMdj37VtqLJ4Gw5ukLW77CwxXa29ogXbpP6tS8kyhvg81ZEZkGz8RMhdHCnHmG6xQdMVVeMJKzuQCThn",
  "key28": "4EnxU4CRbe5kYCkvaUiHYGAK93mrod6qvMeFAutMJeZECRriULSHDy1BZ4xoeUw1duqU6pzfNuQbnaK8T2W6vCLU",
  "key29": "x557sAmTMHj8A66MtQ1fkc5DnHbA3XigLRtSiLAaKf89rhwSdKg5S2GPVWZmnETNCHhgkaCCtjtUD7XYwCGcT4f",
  "key30": "FZHDq948ggi1hBQdzpKQjKPRwodb4js76HevzVPkoaiDzaPoHtmSpr6izUCB5zqA8r3cZEq1tG3yQN7hon9hzry",
  "key31": "2ARERTjaghFotYoG3phqwfQYMSydEjw8PY2Z2FREtcsq57HFB2UogRunJ9MiSd12FsgQjJ6AVsFipvm7xz3USxEh",
  "key32": "4CdwbdqxrvsQTyizTvvU5ufzG43wCQXCG2jfmfkGmsTPzcPcGbRRdKbMLKeUuETk8y1QVSvkjZ5ui3XKmsPWYrfb",
  "key33": "p5kbPcR66GavWU5QaLKqRAv7PBG3uWkEHMdHyMb1ZZgyZKiqj655NuQZATrSPhwYsKd2vs7Aivngwkri1AxqJ3s",
  "key34": "2UZTZPWTP5aHNAXmmB5LXYs7SbZckg3268iHdh6P1VoYosw3bgrBVw25scixZXHY51wm5rpdoPxYBiXWfRQceRq5",
  "key35": "2MbSFe8EzdLgacLXmjK3RHeC8bdBkHoSvh2sgVFGbzQ6ruhCEUZPGCvhGDHx6mqNEJ17TWXnU3uHa5iyGdhnPnux",
  "key36": "4FhdWJTdTh1UE5gGbkqnHpxU3m4hBsZiogxsmnBGP2uH4qeWpkohmrJW6pCmXFg5sLtCBsNuZJignybVtKSSbSXU",
  "key37": "4TbNyzR1nLRLenaEuE5Hj5TnhoTCQPrKjSsP3mRAJNYNjYT1vwhhKRxYvzqd75PztGCw7FcUJtzvCC6yur5W9RQa",
  "key38": "9tZUJWLkoqvsgYfNmuoL4SXhDtX3ZD8BKWkfBkJHs8WWg75buufZeV3S8YZCx9AVSLpoggLNbaenHGHPnd1HgYf",
  "key39": "3uveNURDKULs27DjvgPWCakKZ745H6kKLozc9Lg8hipu4XDFj2D3Lg11X73dPaU2Si1L38AVWLeyQjKoZ7aJrHzk",
  "key40": "31MEHbLwYrevyq1zS6QxZSLB7b1qFyxbMLZ67ec8JmP1PVWMvQUjev2cq7DtqQ5Lb1hHZt3tsXzRvatpDoFZV1MS",
  "key41": "4Hb5HF6KuYxdkSfgR9NNTXRv8b9RQCBwcabCJKTrmYS7gjAEyiXDd6hU9Ev35afiUv9n1Y8cmBQbuiConamW2sXQ",
  "key42": "59tzQPV25ADKEBczCq2BoWFZDaV29MsKiFwMWFKmBxVSFDE13hdpngqURdJBBiE1nphW7831FJoFTZKBd2tr4iUh"
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
