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
    "5s969v4NtroHAk73x4oup7k4gXh3uYxKBvWxC3Ej56GmiMJRhbykW9P6qtVnAdrE5BP4dvRAJPexHNanR33TZS99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pd38tp51TJryUYLmmEve464mdY6um1BDaf5KCGx6zSQJqWpYAX6k1uXjUJ6nZHNNVHbs1LfeW8XeZY3RnvAgk9N",
  "key1": "1ZTD2Vuny9sP2gFabZGJUUA6bxdTTsP2AYV1hMBHsJDcaXN1PBkJkg5EyJPfVsr2wyCppJmfbgQfRoT31hqrpVc",
  "key2": "28Pkt6nDtgPH2ah6iytQLJRLrg2Z8CM4W2oYYWgcMPUY6ZScFwT5UepQCHNKyjTr6RHsgovttrwV5rCoMQMStaa5",
  "key3": "NxSxTby7fJhq77QXpBsxjD6jAJU55SHqFvNN32MomcCDYLoRT7iRtMSQmouxE2rdtNqci48ihMH8y42KfJLUeSB",
  "key4": "32w6kCLwDkdJzwjgWf5AFxzrd7uQWRJTzXrTTDpz461VCjqnhk9kgngzvvemmVxo51otEamMJ5e1td4d9vP4rAXk",
  "key5": "5YcAAfFJqmFnCkds5b3yrayvq4QT6TZFhLkzUR4uc8oPL2sf7tTE1vinUkHnnBrkW7Ukxt1Yu3CbyGzuuqY18tFv",
  "key6": "4Vdcqk8t3bWWmnSgDLvZ2E2oqV62qxu54TPsW4hJqJG48i9NNsyZmUTspiVm32ouh8FdDmyb4KaNinAttHVCBae6",
  "key7": "BxLPXjxxxRufUY7syiaeF7LEGPCgwRDmWfvmwTAcYYpeZuJ5q6jqYMiqFyXrtYAhmKJr1fATTTgoxZ284nu5PBU",
  "key8": "5eA9CcvBTmBsHnPth2V8Ui9BNs5qzdjFuebxW73YhM1J17GmVS3SiaZ4XabvcsJf62oYykdK9UxWKazKBSFbyrax",
  "key9": "5k8pBywmUeWn3cT9dmWdFsSEX9ovdE8hW1NQ3hDHxqkX7yT7QT3NTETLJNV6W8D5MVq3v2mhd71ci9s3PfxKLPPu",
  "key10": "3T3v1JauRUXG4EvDF9BLeCFC8QFYF7A4GnyPdnkmLQ2MNnZM3c7PXdiMtMgLBbXUrmZkVrKx5Etjz87vJxXWj7if",
  "key11": "44dkDj75H8gK4k99NaZbtZaDsZxjX56cJSijJ66j4Lbd4mLMGaLbr998i7tPiEQG6xzGZpXe4L4buCVqVy2K93Mz",
  "key12": "2TZuwAZ3BvzDddYWW5V17tuV53xSyDSjSGfRwwGVDVbktKyCRURZbuHpTkgGDYx2drhKj1VD5Zy3Go2zPaQJBGRC",
  "key13": "4azWV3H42FgvHXaCpcgPqZUyEvhr9Gv3xs6LtJHxvmZPDfZkkjpFMWCxHbAZaq2UXCeawABxagebRGfcbp9Wp7XG",
  "key14": "4HqSTYVwuAHhJ2F2Hr82YwHGq5djfS8AngS3C8TBmbuzr6qUBDkPET3641Vp4NMTbv92N3ht1AL3LkkvZ22SrKVs",
  "key15": "4xGizPo51bn99c2uyoSA8FfEumMNgBqAxwYjVo15hB79MFtzo8LXVCUzMyTfYoKYHHwAPrzgNCc8ECJd7iwfeNom",
  "key16": "3FiDwRAJKHE5wbvwBpP4GKJGE7PZP7hjqwRosRy5DbkuBdzLiwT9zNQk9bmtarDm9iNKMpZViRGGby2ERtmA1nTw",
  "key17": "4bPFCYkGzdcGADKPhFbv8fJbNv4Tcn7Xv5eH9mX1ZqF2GJouVnkYVSgpMacSPQTr9wahwikfdEfzqszQN1aBt8Ps",
  "key18": "42wUFmChqvsvzfGWHYuZmVLHr87iHjKEcmtWhJKBspvuQ7hRBCQQuxDx6XFkju6umgCYoNVbz2AgNUPqsTFRr1Y9",
  "key19": "4ULX1g474zAJLR1qM2NN8gcmiN9k92YffmR1AuwQvSPsyWLHbqtmWFGjCJhhhHAJkbkVpeuTJ8bWz5crZNdDi6YS",
  "key20": "3tatSV44XmETZMPjPV2qdH9eAXGo7FmyJZQphvgNkLo6qu1hCeAKKswJFGZfAqjzG7FVy3z1fQd4YyBcp5LgaxKo",
  "key21": "Pb4NskwxQQmSWHCxcmenAg6ePC2q53N486kVxskMp91i8LfX6tdiKKMWz3eLqcxUpzVEyTseKRaHroynYxbABhK",
  "key22": "4Ur2Ms9Xe7m7VPpYsHs7euruq8ZASWpdF3TakeeJENiQV1ePZLw2PcXn9qPoz6x1UDgeJijuLhe6EQSUcyobm8Me",
  "key23": "4sMndSrZZF3Dd1oudp46cfRMa4EJv24Y4dfzEikmgFEXVsSs9Q86GCwmCsKLLqjGRDeWSqDD49Lb3FWmkZ14WYxC",
  "key24": "3vFNYzDDogdJYj2p7ZPqTfKReJm9TRZ55ab55Nbzo17SDq5U71f1W4xmwjxKVkvZy7y76svQHDwLYW7jfRV7BCdT",
  "key25": "59951wNcxyDko8XtJWMpMErtroK7Pv2z5CXM6RcrncNaMokHwF6r4AmBEexm69oVKWpZKh752yWQDKad8B99EC1y",
  "key26": "2UE5q4MEKFwdH5XUHyidey42wQtsenZisCxooRmszuTjitPhgPQwrcwTdtQLe8VLbMykf3GRWAnoVx3JG8YXTKxp",
  "key27": "4vfzEDc9EZaDBnMGeEc9eNKJJtuEc7NeTDsJfT9VH8R6BcXLg8cxXNfaarScfkU4eanEaqgyT3KiQAHjcrGsjGNo",
  "key28": "5zjgHEU49DPJtiMzqVbXe9zaBnKQp1U7v7RavtXz7GxvTQnsHHE9zEmuPkcYtkTyzj9pELCZ8wuryAVjpvBdQUWM",
  "key29": "2iTzDPrK3bGieXaGDEyDtZfLy5riZV7dhKSPjrj9yjQYNSE2zBLnJnV1zesWNpN2F5cm4gVacr7Kd6ieX1U2YPiL",
  "key30": "4qrpAwYVsSn78dZ3csUNZMLSWwFFYDoCKGN7EHSwgSmGbz7DL7zwsnkg2BXvEA6gsXj3vZSed6tKCJDhcc1eWJk1",
  "key31": "4H6oD4Ndi9AL2MkbtMRmUFScFJ4yQDvoZ4UMXWpiModGUbuPfwXNtZ3Hvrgfo2NvKTHv6bXvqc1vsGSRM1MFX6vv",
  "key32": "39YzPXXeHUot2JaBwuGrDcXYiFbtjCWkGcWsvy8zkTRdnotwThtRpwmekA2F1JTFo8NvVLHoBPWDgp5XWcYCYEuR",
  "key33": "XGdkna861YX4hNSsYNQSasbirW8w1sHwwrNYNf3Qm4VPsAsicFdQZ8xHQuZrK5D2bpcBQ8oWzRbabavBAH316nQ",
  "key34": "33wHbQutTpc3BAYudJ1bctsFVzv9XyW6fLn2BBAyXACa7gB7KcCSUzaN9zcJ4EtzDn8LZwqM7t3WYwd2WD8prmf4",
  "key35": "4Cxu8cBaJZqitBN78ZuzxmBvjrYMhtcYXG5bJ9cDAff5RDPSTQsEbMeNEpBEHVGw9Kd2YypWTqfQbhAfAWW5SF2F",
  "key36": "5Cm5A1UzChXt5G3rtqxQMjDbsk3kWTQqiw9knonK9QLdCN735cCDbkFbqG9aTsyd4j8ZgwH5c8Krux83JCSjCvPG",
  "key37": "4ni2gKNsXByaJbmKJ4v4EWuHhR5Hr7t7DCxjTcBUMMPXPqbLsL9AfnVTtiMRyPpio8jjbs8tkTksbxXZK1jzDaJM",
  "key38": "43jgt9auvXknX5w7JeL5CWJxxsLvwQAa1AkdtphgYESpsFUMBJsvR4cFPvrLEHYu3nLHybFXL51i1WKwPiWnAnBn",
  "key39": "4tUDiBvDpCnKmERL3tKdzduBn3q5fKrvGxFtXgoG6ArK1dWTmGpNNJ1XGnezvNM2w7cPJxCCgZ6vsWkV2inPVS9b",
  "key40": "3a1LY7ju8iVXYJ1kpU4gB3wQK9U7Fu9rtxanmKMgLVsqvFU1hiLEKWxA8Xq3tmhZPyeVBfM1hVtBUY2DqdPQx6HQ",
  "key41": "5aX24s19we2cjkwUv1aAbP9MzGCaaQpRYcW344MHdod3vxkhNaWeeM9v73A5yR5Hrgx9tSkPkUjebadW9r8dGqNi"
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
