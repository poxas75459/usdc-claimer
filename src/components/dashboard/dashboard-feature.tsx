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
    "57BtotGQdFDL6VWf8HJphrsK6ZDN2gpG4Nm4kgFN6Afn85rd2FN3HcCW39H34fnaMVbFhTfb61j1o9EA9bGqqH5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R8USzw2xgXn6NxeySYDox8yobC63kGm2aK7RUs2bUK7pSUmfgsJZPbvAB5M7RL8YRceuegigV5BjD26hzYRxW7s",
  "key1": "5ibTYZPzuwZUdFbawU23ybNWKf6QfVYSp5qNkMDCqRR9DZhrdx6SesuRN12k9mwo71H65fgGLUWhFobrEHusVQLH",
  "key2": "3PtxA5KiTDumatsxPofFyrBKPuk3Y8GCjD9UVF8eJPZcEcHDJDM95cGKdZ5D85ApZoMVxjVkVk8Prf3eMRNYPy4K",
  "key3": "55kXXCeeGv4NrMzbMDBL7Rt6NVy24qJpBZTx6HHCTaBiYV3XjeJnsLu3JWfpJwxTunQHqhayT2MZuSkX8jjSFYWU",
  "key4": "5N93xo981khc6qtyxDEaBzxP5iyHM25vZgjSF7DjftRiwShUwyejsKMGUmj9wfMsngaEAYbyW6gWeMfGgwQZu4fb",
  "key5": "5zavcKudu5vLEwe18YJA21P58KEjqCe7Rk6xLpDfLcoUdhxJhCdYicSKJ9Lz8F3jLyCMDbdft35hx3jgy4AKhUAv",
  "key6": "5kPMVrKasXyS8fT5RVFERJBKLHuGd1AbKPV4rTQwwem6J4DGNzJy6QVa3nPio5cdWYBap9jgWfAvcEKuCrNca99n",
  "key7": "4R248SYnNWiDKquuYWcgBap2auagyVcdzhATtypsoyLkMDNzdg8Xug84NHX6HbqHs4C5E1fEck73o29FehNVqYNj",
  "key8": "5oweBQKyQv2PVjpHszos7uW3VouTpN4dP9AyK8E7upS15jKPu8r5FE5UNYU9EJmtWadz58mkpkLM7qspKCckN7Dr",
  "key9": "5MbKxUBaPhniQasPjHBm62oviPtsw7zoFQuuJg1ecqwF5aagsHKCwW2vQeff5XbCk9LAC712ZKK5h1WdaGohx2e9",
  "key10": "VGW6JoTerp1qCot8XnikY2toWBTsTDQwMFPFE7YLxizS9zwsLXQFzWJFYPHYXaqiywDBnnA6wfZR8qhRKESQ2AS",
  "key11": "2cdJ6w3kouWwkynZ7B3T2wxwxXrMFkL94m6QpCh8JPVcHfjeN5hHy4Sh2qT9q31PqjcaiZm7rqoJaQYbY1RC6Zjo",
  "key12": "2pEjRG6ieqY5hS1kcVfSVJTi7hr8diMvVp6FsU4dYJZXiZNe3wKrJ6TLa6d5pRLGC3iSPy5WSAZMnMNrgoDsoG9f",
  "key13": "5PqVnZcHLzmZFSXi7VEnoNfqMGnJ53gMFBVM27qzu78SChKNc49nrENpuTPqz3mVkwi8pE3JVcTegRKmAy9v2fXa",
  "key14": "4RpwV8D8RBh5Wi74WcWx69Uu1mBdryvquYoK23XdUaDJvwbktxxJ2M2KapvsMH5VxfMs2xJEYxx63eMBMatncD9v",
  "key15": "VTFuRqJuLkFXNhSsQbBxpKpnhmion9EfQm7sGukZZoaBqZzxrnPdLY97BbvyGw3hkXbWgD8WjprPUXxK3T6Ysvp",
  "key16": "388etqbW6E2B9WDcYTXGJ4GWwLNc7QxJyfYu8Vb1hkQNWNTqji5nqdsRaFsf262GFzx8N7XLQKs9GQo5ex5BpzXy",
  "key17": "5GarPzoXCKBMYhxHpPUsNrMznXdYVqdkg5VoVWB4zQrz9YF9TDDoy2F6aDk6TPwxWdXUo2ckES5nyMoybck2Nu5o",
  "key18": "3mdMFr1ERmuMZmkNsMPgfmfBaghAuqqMyMHPYpG1zM2HargHxEqhBTVfhwUogGfjQG57j4ZJo3h34ZUCEGG9JLkM",
  "key19": "3ZstsKTfYwH5W3A41LZAY1Na7tkqjTzz8TKuRzozSq6J9YtzpjHYjBURo3oadVUUkQ7V96j8cE1z654xy3NpQSNf",
  "key20": "26rN4M2npPSx7Hoh6HHUn2B9somURHVekBuUEHDPGLNhQLHF6P3tAxFjGDTBsrQ5mHxVub7EFLz7xJJMNKhf6toa",
  "key21": "5iYTQsZG2McMTSh4CXeqtN2ZuAsUUVPNFUc51z8MDbZJ5yZ6r49F8c4Nrg3L9ENJcJCtXamLi5hNdkW7WHSwcoU5",
  "key22": "2cn6SYQMSvLNsNwASgrfpNYHAaEY6zUcXFf8QeGQHSHabR46XXGa5gqrEU3yhtD84nutcKbtG4roz4nEKQemu8hA",
  "key23": "3rhfNc4BWafHMGzfpNm2Gsyi6CxZSdCoL2tQoZWh2fqFuc4xa8oHPJFvoFoJ83GMLAs91peszSZCgZ1KJsjHn6qv",
  "key24": "5hjv92dGvZbBdE8xTgXBpkq6LhQavLkDtgJV5dFyUcm5FWmGNJWteE4DhetprLYoUcgsPCjyTkEBtTF7k4WqhcNq",
  "key25": "5PTJxtoFZMPNjvRJU1cf5tnuSqfU5bNk4v5SWUm8uc5bQHPd869EzbKeyz7a2p2VLxaKVtS4YFpSXn4yoYhRnsPo",
  "key26": "3MdiXiPqqASKfA8UhKqmnTEwvdRY26EtPQEQvtoPe9ggsKfphvArrhHbxQTixMLhEKNCdtupfA3FxxfnKmTY17Vm",
  "key27": "VuZfKe6rcByujyM9KSGfLTr7baQ7q5pAkMPR1svf2SM1SdMKQqRiKoyyanGJWhQBf6W3KTeuw5VuwhuTnxkFzgp",
  "key28": "652dJUPV9SEdQAC6y1Pujs4bgt7VukSf6XvpJUqn8wUW3bHdmHBAGKQHnJz1xCLnsM7wnzob2Egqbz5yKB4BxbtJ",
  "key29": "5wpihnHTptgNUvt43rauH5aCE6gtwEXymj3VMyVGZC9b5NHHfh1sGeskuEuagyJZK3vrhaTMGDkrvKtgneorvxJz",
  "key30": "KYaV24GRtY5XKSw1V9yrU119yEDVML5ZjJ11hKintMSKLb3sLff9sX3LxgNv7NBoBifZgN2BkqathmW7U2BKrKJ",
  "key31": "5gJtKUy5BWmEitvAjgDFHadsg6tTchCZyc3ihTGigWaMnjqnx39mfdLmw8rPLEWdtqcZx7AQ1aCtE75DLRY6MZ4X",
  "key32": "5X7WdkeLYX77qpuZvhzifjwTjGWxwQv4dQEYQvccMRZL7YvPn4HFPCK6gNztyy3LvBwZxcBYLrrzSkcHwBtbkSos",
  "key33": "vEoBfeSXkiTYRGGaFt7RV7ozhYgcp5bFmGufQ3oypkdRxm38tE8SKnQuyQHzR8SPaqH14jdrwP1yiP4tqCe4NBK",
  "key34": "3vxSmLTsNyNvbnrcXYYo33GBXtFdbkUZh5W2kwYnjJHDQBXhxYqtnuP4EDjsfMUQSm12Kc3fsyKSDXtrivFntLQZ",
  "key35": "5ogpDwVaAu5WGRV7JhgU5pKf65gTyVtKYXCH3kazr6JQbZGiVDZWCpgnwfmiZBiEcj5FyKtDcqjHBfoPMKndxkjc",
  "key36": "4spgKWKsY85QgVtzFw7NJHovy6PimUNrSVrGsgPZmD94q45SPfLKp6pV6Ww1Swa2N4NZuiqttNHJrpLuAVkC3N2U",
  "key37": "44UPnFcfLT7F2SHw9KRkQ5FMu1X2GXqhJnV8ScTYUqHtbEiVbHN9b2iFHHcym536aTdQ2REjxH9QpeuyBEB17hE4",
  "key38": "3au7yevKUWMBLaZric4XGWLpa5CBp36QVHGjbES5FGfc16NMe33FTNnUksPvXfbvAmiqhAp8QpN2THVaDtgspSsZ",
  "key39": "Any2jVvXE5GHg6mvj7EuFKj2gZkG5tUFYzEYMSJGCuaVo4y5y1szTpLoWNKgs5qy6shXDqFqm5xbxpk5f66XsvE",
  "key40": "4zxnHbwPrMQVXR4d9meD4ePLH2GjB3zBdSrYX834eqAfU7K932vVQ1eeg3j9F4oc7xZXyZqGPmLoz7XLW8yP3Q5W",
  "key41": "2RyWm8VJeGwXtmwAGwVqzCyLZAtrRMVXknbrGxguNp4TjT4MkTKWUQtH5Tt3Ew1i85oi5At8y3ZqkGGqfqyh6hmq",
  "key42": "2uaPzWoN8rth9pqrTrUhdEkvhamJMoBvuyfzybEyd6gKSjV6W6teEo6SmLuGwmgttDqJHPK4foR2sgvYF5tiVmwm"
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
