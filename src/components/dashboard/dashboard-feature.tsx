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
    "3Ur9PNRaq5vnJyGZmdGj8riVqJvhw9F8kXctArd3zNPzR3efsWKteWJ6Pbghyvu1uWRjzendSDUUKMb3Y99yKd12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E3Fd7sHEfHHLmJXjNfd7DCcGmthpLcv9urvJBsWgkSBwYP5wGbBbT9tgM4V4QJrpH4Waii3Zh57MAGR2YSc85Xk",
  "key1": "4BGBpBZXd1cjYwUtnD39d1C5zaiEzBN8AC6Yqr33tJKAJ1dgwJW8ZS3oZWyqRNmC2HCo3CTF5tdQ7ihfnWFDe7Mu",
  "key2": "2LP6Pt3nccdTCSSrNuTr3jCuKy6c8drAXqpqryKSHg2mx8QfcUUpbBjsGYX3oYE1DdR5gRVpveJUKX65L6zjgfWi",
  "key3": "2LJQrorrCPisaG3WpfmEaiUPZks5navmLzrEJQ3vKcDFLVP2qb1uGbQn4gPGLSVq6cSVmtzR2BQFRB7ZP4d3P7Bz",
  "key4": "4KdY6nFsDF1ttd3KKhJefzDUzKgcxcRhJQNMD8Lvj6JzD5m2du2tUYgR1ujX9k8fRvejEXPgU9ciZXg7ie1Mnspf",
  "key5": "5JaQTJUeQmTgj1zUJnvQR8t3R2mZkVBBMt94HLMgwjhj9noGU9HFWDHJhFSPzzexgMMtzYD6Fnd4k3qJ2KGinLbs",
  "key6": "4Mx1Fep6er7CcUt4M5nwYLvag91HGJ5qJTGwitR3eSJ9VWXHhVMBm52MyvXiE4DL6nrTxsgV8rJMEwu4SEBX5m4Y",
  "key7": "3Fgi5q1bz87Mv88BUVn13SsrKD5pKEALYWUktJw4M9HvrcKub3kzj7ivkhX2mgY4TmahPJtrgRSr6AFmu8SQUftn",
  "key8": "5pL8Do3AFiw4aTMeT7qiADiGtAuSgrkfUMyFeyFNzehN5jU3dZk3W2esrHT9PVzqSs9uNxdVrDprgfjjkAwxmwYW",
  "key9": "4m7zH1aYmp8t1d9JcRsopeZoz6opDnamNpBpmTUg8K8SSAQ5mNRASomHKYxB5zizDUVn9JG3bVVkqf1KDgrzfTDZ",
  "key10": "TBx5ScYdqGk1JCrSE4B6K7bnFjc8MXAQHbPKSd6CEAD75E3icBfxGnwEoYuhumUzfNZTRokMYzDvXzRM55J3VGk",
  "key11": "5pyLwYb6y7uA9drBu8AYa3CCG9SwhYAWjqBtXvvL3XZG3s2sRWGAJoJC3qRxGsqvAv5R5Mp4AstT4UL7o114CaZv",
  "key12": "4N4tC91pALJvL1LPMBJAp5H3uN3CyVrY9yChj1MwxjF8e3Ro5f9jKDGAosGV4PVoR9S3YHZQaD2fQ6NEVPygTMd6",
  "key13": "4ytizQAvx3HHJ5zUKD1dyxMpfQ8zTCb94FvxC2zWsEM7CtKoA73Ejh5JjXLTfFVKtDiMD3tycRAuycSWkSWmeWr1",
  "key14": "3u5fLLVYYSKc3tQ3MBDU3Lcafj3wMqinYyzg2WtTGJMmM6RSR4CdXGckfVRP3iu73HFphPzyqFEhnRy7tTrvftUi",
  "key15": "243jh7A2D7MuhBb6EDLCNUBwECf1iHPUzaU6EotDcXgeBEG2xLkzGnzVYRw6BL8oc1Hm6b5E67VwjwY7t2unDjFL",
  "key16": "61KEXWwsPxyD9wwf1vFWYooHJkyYmzVoRY8ehAGShDqSTipYWSHDswS33H1ngADjDiqXJfojLmCxA8o75ooomMDe",
  "key17": "3ZfnuMgazwP9qDhY4WNzqHF7kajfTce2Cz9iPddmQfgmxewnXd7DBVc7mseJCqTwWvoKtiyiZgELTzg8zsPhcTCa",
  "key18": "3botK83GrW6KkSTSPjWpQ3sbAeQoXJoNtdkhJBhyiHo4BH3GeU27jQuVuzESq8vTqHg6VafJ5m4PkP1oJUxH2iF5",
  "key19": "no48MP6qd1jsGV8ZeYVok7QSt1vWYx3FPfgf3BwLg3XY2unNMFk3DDGc7FnU4TeHy3uD51AoN18rky18bqGCdat",
  "key20": "XQjrysLYySSe3XEBjd9GEhAn3QkdC1uHSH8gt2DD2G5rwtzcgUM1cAaEuM2EYTidDmBEnvgoM1xCNrV5TrYAfeX",
  "key21": "GiDbFq8iNNz5AXKPAntp9BQpfKQZJXGWLwMq2zrkckJ79PFHFgjvrprsCZ2ueXaeXSPcSW6437mYko7TZeG9cS8",
  "key22": "5hmAaVExEWNAJSzPkgDqSC6A5rXTTg2q9729mS8YG7SZPKySNDGBe7h6PE41EeQ6YfA8CfkANzCFbWE3JJET5CQJ",
  "key23": "AiaLCey95kS7c3KUsx2KnJ3L51wC9mnKCCuxaWTcCFbNe7965r3wDnAa1vqkRKF2Z1VLfoLF8KKmcnkFcjaQVWR",
  "key24": "52EUdgGcYF7oTvdAx3PJbCiPZa4Y8yvetXwJaBjGscp8PCyGTdPXz5aQt4LVygpxb7z9iWWx7RQswFPcsRXwzGB4",
  "key25": "GeMSEjdYUAbgoZ1ZBZrgCZ2ShkKu9fEhyUb9Ecgnvbw4pF9iauicbF6HKEYkme7bfKSo3fBn7MvSnspjdSpv5Hj",
  "key26": "2aY8XypQqgsqyMTQ6dEoVadCdcDaiLuzj1jg3stdoQsdrYtRFDdpX3tvDGtr5pR9Ks35eh5o7g19p46ssjfowLk7",
  "key27": "2ih7sLskexVy6ZVv8fRRdY6Ju2grVXdbJt2M1GWGN269QB4PVadfQZaJEmKpxYkHcJ753Mez1A86nHzyPNLZae2d",
  "key28": "39sRyCZVT15ZkisbRpHcWrt9LFwdQWJZr5HEWWLswrzrQNFZ94yP38S5TazNCYtzupBnQcuvLpc52WtGKnKxGseH",
  "key29": "F5aSzsMY6LPcmrQutGdyHhNTmm4yMuU3w3ju4BGJnXRfS6srZmGUvev9jtKBh3rLAmekKFEaTfFXage2dQE7xKB",
  "key30": "LSQJLnX85v7zX22bvYdLhwrgBMNSQja4n2mZoWcjzjoB21rcCMRVRwLT31xdpH8Ze9PEp84fgMqTPXAecGfUDrN",
  "key31": "KxpfdKe4L1sQ2PM3vrVatQXveYaTvwmWQLAFUvQ3QbnfJNhMVQtPftpWmEJtxfJ7ktVRzdzbKfV7s9adAMpzA9K",
  "key32": "3tUfpmcZbSNehu6CtgXmCbwQabuqP2JLa1mYdAZivTGRd595VZta8hHGQMZ3FrNihD42wCEU8hGRfjHGFXzMwGwS",
  "key33": "2Y4jfiXaYcA96RVqgyxi2CW7DxxmmoX3xe2jbTRUtNtVSUX5o39xEV6ayRQmLsGUHTvUMqhF7tG4kMULxhy1Rec2",
  "key34": "5K4MRQTWD7e9zZA2UdwyfutHphozbaXd7ZjSdRAfLRUa9VTqvbrkXfPa1YRWgbdTmxp2iZEF45BgeJjnaE35F9dJ",
  "key35": "2P3CeUfyjiRQVra9XErzrX2iMn7sW2fmb8iQWinTBeMC3RvrJzSztY7qfw1iz5FWxXpSmaRx8hwzb4c3oJuCKdRZ",
  "key36": "J9Q8VFHrgppzDPAgrg7X57deJv1bBdXBwH29WEGxrwHZFycYCdw9pP8K6ud8HvqANb8QY8b9PVBFiZSozkc1D6R",
  "key37": "5Zuvq8fDnzRS72UcDEf8xEBXpwFYc49xoMAJC1HRkbH8fCJu1Ue5xgu3BQnnmTJArvaSS6TCtrY5ZXmKRaHYZFwt"
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
