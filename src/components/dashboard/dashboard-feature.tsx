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
    "5gkLnNLZyqv35P6YUWmak1ac5r28BhaU7777EX8omjhF4ydLPGNfnjke4XEA83bPqQ4XgNANDKViNujLSdVyJWT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y8V8gS8RSLZTQj2i7Az1rxreoU92U9hKXmnyqQn1RKJipqs1nuN3MjKsQHgevVJ9RgivvnrtpHEYXNzYEr8ffjD",
  "key1": "2a9Giy69GaEb7iQeKKyDMHmAFg7SkWUiT1YRmEuaAixJopKVu1S52Lf6LWRnrpyrrTdjiUs7Jc8RtkgiiD9omj9R",
  "key2": "5viyV1xseATv446WVJThcNjkuLouGccNpH9Uz19tMwxzNGrGmQCi7zEyjTTAwAFMFBzZSwEQmd53iB7cSjBFG67Z",
  "key3": "4sJhBrKk9NFB9gbPJDD6Zv86V3genaMjuioP5ENE79uzJN69SwFJx7PajfoU6Rdf8efnaCKJ2K73CjrPXDVhTMtk",
  "key4": "4vA7EBg4BJgj5BeQduNLYa2rwHpNDaQPJ3C6srdDDQPJoV8NDtALcXZCgKaHtPTWn6W16Tg6m9aq9B2rDiJahurB",
  "key5": "2wVE6joJqhYEJ44NUrsdAkdoaGnYfoTfxb9HK2gzfVLGaJRNaAYvvecfApGc2ZDdihgRXQAvkkQEcvjE4ACAhci1",
  "key6": "RMF6Ts2NcdfkUA2mh7hE5M626GtimVbPXegtFCKMJKfSDRUS8rkUPTDwPUyBezEiGxZYCLL49ifNTViCUKwFWBi",
  "key7": "2fk5nW4VXEB1A83TyNZEroyzRKRZxFpgkqMZEKbViesjhYJsVn1Tq99G8JtBMPzXuawD5KJS7oEnC8KuNhDhhcK6",
  "key8": "3gunu5cR3Mp8uPnXqtnoay4g1fAsaRshrmmiX96GUrc4nxfpwrAKs2jDHvaSGt2pPCitQkRScdLDDfFHCRnQaGej",
  "key9": "3v3ZZtNQUFzWJPFMhQ4DpuLfpTzGChDRVpKSH7Xd3RWRZEgyUEEGw1uybN7rEKdkL9SajsNK6dcFt65ENAybc7Yz",
  "key10": "26V82YyKgPF6DU9uEznvtCJjmEkbUaYym6aY7K7VAbcCi3CdkoQTZ8fFPzrBCTGLye3w4Kt6KegwnAkGRSMNtP1g",
  "key11": "5HKjew1j63WvZM7jn81Rr8woPqZHPcKHPUaCCXc4jxjfZngQ6Umx21AywkNLZFh79KWt1cCGectcofq5TgWfVoVH",
  "key12": "5dXptTgbes8k4oYA8f1ocfrKuqHKuzPKGekoDSFXuhAaLSvT9XGCY7fUjWfaD7kcZbT5RW6PxxeNwEANcyBkEPvj",
  "key13": "3jhyBGkSeR85RVKQbgmxAzy1v2TP2gTEvsKmwMbHauLSDzb9U24rF24xVGifrgERsFiw1tTLEAFvBFrzna2Lq8eB",
  "key14": "Dt4XK7H5yRbjpnSZxAkp4tXivMjgPG7KuRVUAt3cVdpkEUiRvS1jiv4CsHEFi5c8d2KhNEBBRuCbsgMtBZ9AcwQ",
  "key15": "5fpDS98U46xn4yeiyKKnLqrXukCVgzavaS1VKQxVNAvUTVtFKxuDBcLz8gpvYRTJkQ73rDDsE1pYzRfpfAXdavx3",
  "key16": "3FPiNo1ubZJYS4KMNJLiVprqi56TY5rKftroiZJXimaVjdhnan5p9Pu7pYvp9ycCvK6THjnUCqSLq1sxiZmXp9ha",
  "key17": "5e9w2kXw1xWHGRbxW1NvVAHttToKfTvUgN9DZ3Q2NZKEq2qTT5XmBw58C1bY9rNW5FJspa3P4jRCLLWu56Vwn9Nm",
  "key18": "5PxfqT2oDCCpZH4o39icfYdrHodwd6hkum4io38EyVGgKpWfJsfDNWDeL4xPBnzjVUWfRjizMkqHbSQp8f4tMsTH",
  "key19": "2Kq85byD45kn9kwC67EzgS6HSiwzwn8Pa855NRvsReGJ5rfG6zcYdzi8kC13AUeJRzyghbHb7W1KFoZ2BS4ezMH9",
  "key20": "243vSzu7jf2qa68gmGpAFiTMYF3So7xb3R4Gr3aXqvbBJUFh5SDnc62YG4Lyxwmv8wLZeHYm4c6Gr6CuhcQmVYCb",
  "key21": "2TufaDNDZ2oswMen4VzGSSqgXMmGSJQBGq8AJXe6qMizw2UM9AouDYVTbH5VpQ1K2v1VkDG2GpfbSknCxxkeh4Ft",
  "key22": "5ziiaAGDwYt9tcVzrseiKVyFnsWN8utST59PGNgrYexj4Tu2ueVrLE7kr8LgeC9qa58yrsS9iAgTrJPuWpQmbjj8",
  "key23": "1RBt1TrwUQWFR78wiJud4gSgV4nWftoYwawN58QiLpJb1Mhw4Yi3JgS7pHovqScSzZv2wsikpQvzb1bgFKZJVUr",
  "key24": "TCvXRGhkaPt58XhGiVCpMjrAmKZhpuGUtyr4G3hvGhaPFSi3xFpd5z6ZhNJ4iMULk1XXs8ahFyAoK1tTDUcWvQU",
  "key25": "5x8cVxprGTPT3QmrCkQYn5i9ezQmNNEX4HHyQrtGapH3WCP7yxbXFgX6X8uffkK25FEoEMNWVuySdf7G7UErq8Bn",
  "key26": "inSpPizukPCpYCk7mNSu3eWqUKQFxf2RzRjFfpgF3pym6CrnvEF6oXYbd6em96LGWYKvNs1K8ngDyhBD8Uxw4U1",
  "key27": "5noWh9KNaqftVZTR5DaQwdtXZBbZ52pFD27aWWLsUH5Cr9LpZ4CZaW7vitrNtjJfgrBSeLDDU2hw8ungNTkod7bB",
  "key28": "2MkkYY2xks5jmGkxLCvaqDyx9xCQfNU8VS8miNXUoDLYZpwabLvfbFQLQXWj61k8XrK3cPKS2jPcL2DFq2dZUrFN",
  "key29": "5rE4uuTMc8pFT8rtvqof7FqT7zouuGzdMHrttJvrAXypp986hCVkKUdTrjvXZzQm2ZBXkGYz5Z29npHD3yDNCUMa",
  "key30": "cM2r6vvFuxoM9UnubMTKQLeqTZxNK4kTzW1mhEfa2bsTzEkFRBdVV2UgSmxSzWFwG3z6iWUvHyNsqb9NmzhS2bx",
  "key31": "3xtGZiTBGU3JGQb8B6ECG9cHXkCiLvGQXEQyqD3mm8DxoVXbyrstcvx1tZpkK8Ua2mSpKFCAxRz9M5btQN4HgtT9",
  "key32": "4xqVDBf49g5Q4wsAbFsihKyu2SsceprhtC4fN5Nmde3tid8A26qxboq6PnfPVFr6A7r88vocudyfxHqXyonGHbk",
  "key33": "5wbH7EvYypHDP31XcTPrxTp9KpABLv6aaGnfUB9pHx3yCszEnQnADqpeF5phJQPoizcaXMy2DBzr2tUZNdLemPcs",
  "key34": "3HvQ5hu5deyqXKxLeP5F38L976bJbPeVyFwWQghioUnjS89tkZ64sL95jX7HBtFynJ8D3ddxK9xayJGtc7SRawE3",
  "key35": "3qtu3tZaGRxSnPJE6Da5pJKQPDkb3eC5cySdQH18KWNYXdWW2MUD9vsMdNnVfUxfh3ATnLBRrEfLEXCRqyDMqR5v",
  "key36": "2jF65VTq3dxPDogNjEsrRM43kbXqgE2Y8AWvbCGCt8J5LqTPxRW56LjshpeqefQ6sJzdZ3UUL8ydnr79WfCcAPKz",
  "key37": "B5ixN7ZuP7A7tSGKamySmoazotKSFpN3uRBBPoyjsXqAXEcFqdBMriwhgPkCY7MfZ1mrYUg4WUNPF9kyHHM8Fen",
  "key38": "5dhZLQe8iVLk476GfFoJrTD4nhX87LEYG4ix6XovRmzTJCEUaRi4j3wgComLhr7B4f6amKDZQ7cu2y4nxpD6nbmU",
  "key39": "646ivXZ2NUs9HCaj3uEy4o8BwZDEHuZMwQvFcLJTM6k6Ny5PDYMDfWbR1ZTDgY4tYTiAjsY96ccsSWkurBhDAVm8",
  "key40": "jZpSverLiSqXUk9PqV4qr3orKgCVaax4eeF69Ccjmss6nFrNawpq9TZNBofMfaD26uWtT9DZjnGtXWyLJyp6fXa",
  "key41": "5yiKxz5EdLN2GUDLaUrg7UdMgVdv4R1J56CXpyHteZ14Y7kskg1PFJLB775MAQ8dZiLpE2bDWbbfXGhSav2xZAtC"
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
