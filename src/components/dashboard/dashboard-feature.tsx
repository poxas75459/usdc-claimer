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
    "V2vcDE1hZpLKdfF9rSb6LqNmK4YhXKkHeuy7B9Tch8tg6CoSpFPNemFjLSUCUDqwb4HdB4in4iRKTa5zQ2cgHyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CcQNhTJwZVGtLZTremitKnsuzLxXWa8M5Uf1Di1siUgqLVbFXci7ANcUH1CpLgmPFMvfRbFyohaix7C7bZetWPU",
  "key1": "zKqqi2ssFRFnwCGK4UEu2VuV7qN2iESuSjgMU1fRm4nbjsJfeMFwqe3PYdXdLVbR7w6ftnW4mSwVmCjLC9KrjaJ",
  "key2": "227vg2DKirZvEwDyoUCmYrXcF99qfQvM2GJUgZ6nPvRGfyFY8GX1qdHgD5reneSwdqsjtjzUxxavWNiB54iHK1BJ",
  "key3": "4chpCQUZXoKYg4gWB7vLJ7GRD5rVghNMedvD1ksNbU6kAvuxBmdZ6tfvRtnYBzQdN7Za3HghWyjDyYuTKZwi8vtY",
  "key4": "5Em9EgA8XNCN8NJC8WUPbyiG9QVXqpirjramX9pAAfGrpFdWs4BKUu29HdiZve49tj7knhsyWFLN7n4kHyuovLfy",
  "key5": "4mPHzB4iNHevCojZoh6c2B6MCxnJnBoCNyEg197FRNnS58dS3TKm4fEa72bmn3gw5uvSJYNRcfeGpEPoLKRFmfh5",
  "key6": "4tfKcMcrHsCLFGnPUZTfvzLmjX8QDyoxBWFacoosTpS1srWnsTMqrPo7VBVCFwMJAo6DNLpPXArz3J7QRhVzLPbD",
  "key7": "B89Vy25VE4WCc9LuZg8f3YC6zVM4G27jmjJed91KQuf2V444G4qoLbcJ2WgxTJdKXYg5GFUbxsVqgYNrLNPk77m",
  "key8": "3DfXJzXb4SetEKXw1dtMqzx9vaSKKTLdyskftGTwpAtrXf5D48g66CYWNhqqSyKTfsPnJ3nBG95hATpyimzvUg6V",
  "key9": "4DDR8qjVLssg7U18fnPTjA6inXHRiAfaSKTuxNkdWAxpmrQfFYjLDV2ipDuSAveB66J45g8eBrY5r3UVGcRVJVHr",
  "key10": "5AG2ga6iiejD2bVkEB2sKMowNCYQkmTyEK6KvqZFtF2swr7dAnJicCXoyWJKFSKgw3VC5djGuQP6Zov2coVSiby6",
  "key11": "4UhRNv6tBi9W534qc2mgzGmf8ik36U99sHuGreeSSweRsxZqSKKRCc1gRgXToNUTszxbpPZBfpXczdTjyeSJatVf",
  "key12": "3D7gZMTpCb4fyauqj199QtE5mDU3QteEJURxnCvvMLvXwLwmpUuGVUca27QGMNxgZbbFXH5fkw4x8z9aFr69J3ee",
  "key13": "4zuxQ5gPDQGf99QgZ39B1KNtt25c46x9L44W5snEBBEtHzCZwfzqjrip6W5tbNb7EZ8DJWxeFxwxud6BFmQsCq85",
  "key14": "pbZAX9qD2D1Xd33SnfkDXrycWtDLptkFR3wbH6T3C1osw26bg9GiAqRxo2CEdgDyJD7wpGezJR77XgdE892g1b5",
  "key15": "5C4PNHYPG2GJNRCE2DLNSQ67Pkujnv3euykPCp2d9rJJnVG287NVAPpZyaJH22KM8ckbPXTVmygoF449c3Fpx4hN",
  "key16": "wVUkXjoJ8A5RyBEnpnC1NvEG7DxC5rPF8iDdxigYZqyb7Un2kTwVxfgNhTiqp5qXpAjXjeah9K2xwy6aGEnH1iV",
  "key17": "2ta2BENsHBmanH4HY9WvwG4uxESPUuCbCSdL1ZPb63peoE71TUnWsJ9mpsgGtUkH5d1iNZ4mzYUCQPTeHKjX6AfQ",
  "key18": "3tuMifHqZZLUgQszezyKRCjBw29JM5Q1hph8zrAxEpcjH9DZjffcqiX6uZ8Pibq19FEdU2UnmJSEnSfD3eZgQpGT",
  "key19": "WDrzXw42TH3hB8U7Dy1MusooQ17bCgDHteSzdTYC7qvfd3XbJYe7RqjZ6QH52tSF1mbzPpvaFtrnnsjofz5UG3p",
  "key20": "HNMLbUgqZ3F6JD3wRrjMCTuHwu3ira96hMdR3ZsXdutYmMgqdkrA8Hj1ZRpUvAcQyohwZLZQBApnfR75JEjcBTo",
  "key21": "5xSia5bcd9UCtr8SsJJzzABZ4ft57k7Hv3TRG6Szbudt1dvTvm1WtpRFQMQwYDAmNqnfeay5aXgPw2Fu8JEhWz9P",
  "key22": "59ShADYwjx18295aJr6kunPth3vvZwQhdmdesbKixnsKSNXYgi6vH3RSJPbeB2TavawquhuG3rdpsC2NnZ3JEvxN",
  "key23": "5JoTW3vdEvRdnWXtz5bw4HHhSokSCDj7Vu5JXWGigQ2rgZkv1PdKMwrHAxXS4Z8bgGBEVk34Sx6Fkq3TbiHKoPAQ",
  "key24": "JXHKArLjpMkXVNWW37swt9zYPYeSSwQ8aTPXurpE4tsd3UXkTuGXcevwsVUeDvVJ7oraTxHsF4sGqAa65PEw5qy",
  "key25": "3eJLE3fgMJAUwkdkHoZnpy7jVjcJ61SM5vE1T1KZpJPKqpyYMTEkDgRxsscUbj4mNRAKdB7nWyrR4VsCH6Md5qxk",
  "key26": "mX8eXw9c78ddWu3wSDcxDefDqjRnqtGktxTgQFEWYqHMZNzHhcDe5ZPHRiomWJS7ThuPJ2fkZnWdnwBR78UAsXd",
  "key27": "5bmv4Ab1WBypoDjfEghw9gk9w8C9dtvE6STzfrtpSGWuGbgxtkPtSGV24QVf4XDRBRSDYzYp5w95DE7ceRT8dmKT",
  "key28": "4iUMaAMJGTSK86F32q6qijVgrRuCApg17deaVE65UvVnydavXk5DT6SDZ8zQAmq8YdPbdeGGSL8j3nyatu5USb7X",
  "key29": "4yK5j6eKXbN9EExUy8kZLTN6esydkrf4oSrdWRuBukqkDLmy8MtzvL8jXppbtTBPfdyxSatHJf7HczpD32xseLHb",
  "key30": "56vfHC6cB7Z63pzjhmsg7KVcUPDXCXwB2APShbfaqnTgHkgbj3fvK9fCeHwEmGD9NiTrdYsaahxEmzLNpRHZjYfx",
  "key31": "AZPkN3xdXMCpne3GvoBdkrWPVnvuE6RccwjqKYNivvumW9TYCN8BYCkncPz82Jq7hcyeNgsBF18YUxB6m67KXnM",
  "key32": "2ewpbC2fiCYzPSBgf9SfjbrP6CCdU8SfbgevgU6NmLeuKefhjvSHnpmE81FJfN1dop5ocUbwFgJDepPiLkpwMEkB",
  "key33": "3yG8bW7mDjW1CpotLYgPNcCykBBLKNCxM71pmN7GRxTEpLzmrJMV6ypJVEFHGp4nYPDgMNo4dMmMHMTsFRYYK24d",
  "key34": "5VLh3WhyZvUMTfZByYvtayUmooftdzCFzAv3QRJsh5Yp5U7Lbt8vrPAMTeyEFS2DkN4VF9d1iGPFuiKakNyvE8Uf",
  "key35": "3Qy1G8JwZ7dsqNLYZq5wuqk7CYaUCEL5sfFhPEhF9DYzzitiiKt71DGDHYHddSuXSmmCtkCxhMAPmUWjd7sd7sBk",
  "key36": "3eqZdbWTCPTvTV5JtBKUtxP4fS8ksjLRXdp9d9Afnjx4Gb1Jsqq4SQ4JJxgWhw5q2Nr6GJSjwMNNnUANxBX32frT",
  "key37": "646dxTcJPepzzat4L62vRVP11fu2HHPWyuXkF7pWnc6tTNBiSYqkaFE1k2NrEVJyZDrcDzGJr9R9YysgkEy3FVQb"
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
