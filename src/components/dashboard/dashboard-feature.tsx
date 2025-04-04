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
    "4QNJsKhZmcs2fnNeosjeDRq9dYKktGmMSCPEPzsxpt9L7pqWa3m3XWuWVarsH4Aiz6HeJuJZ8F569PQucqBW1Vwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQSEVsacXVBhsw6LktGnwbpxE89C4U9iWenLTor269biL4s2dMYTLoRkcaTHwBckjGXGpxKRZWyG1EbPpinEhUa",
  "key1": "567rSfvMr31wm73nMRo9QC52xSynsDrSyFLb4rXvhoHVw83jpJEPZMLhqALwhnaxQtSesHvYpG9AwPhyckwDFe1R",
  "key2": "4sJzkTy4Ns4v7zGGgbHQGAd1PKCU6b9Mv2CqTsQr6WbUAkMdNXYcTarWsXri4w8FV7QPiCkQpX349fTo3D3f3nac",
  "key3": "4HwEyuGu8Zi41XFfxAdjz4nL6oa2MWrrJw4iEQ6xKNk9zJxiQY4JNYv3TUAAmex43HZurnwXBPE6pVHt8V75FQgk",
  "key4": "5k85wPGCjRf7hMwTBD99MtuhV3bLi7FG6cg2w7uspM5wSCwqFpK78qj6VU5SNnQWuuZF6R9ksUqySbPwvD5gq79b",
  "key5": "2yvxoVsg1yBSvNiP9HaoJVQzGoLqPmxfa7P1PyW5YPr6zDHi23wR2bdgKfNfL5Rwj8cUJDptDTy8JycB8JodnRGQ",
  "key6": "t4bq5dC4pCBLYTemfm1eKBSkWSDNSrjHiAWYygqSwGQWDYBBAKaj5EtqrhbsUUyQvTgB3CaMbGud5yoymsryTLw",
  "key7": "RrGbgKonMAfcCGdz9yh3ZVP4c5nicaVW25YCKckTpDBv5v77qbmsWtK2rMtbYVBidyUt6QqKauo7NtDyT2HbKYj",
  "key8": "2R4CvFAaBdVZgPX2xS1RXdTmPnCAqBTmK7e8LzdMWNjEAD1tKKki931HadAeLJvNa65WMDXf2KyePguqWdrRted4",
  "key9": "4X7ocwevegkW65gD812eU6zVXJzGDgcGENXcmDwkiBYTgZCUyRpTtHP9FoNRpgaiszTiJGmvTehotnytFY89u3zy",
  "key10": "4pGA1W8vy2bGRFnYTt5Kaar8HFPopQtkNWJ1yMZXxDyNNmFyRHZuc8xHss6EZB855yRFS9G72QJ59x7G9kUE15d2",
  "key11": "5GuUnVKDumkAMq5WryXhR2MpPsM8tDHmPmvEQvHDGQ7WLbAT8esKnnjk5NRLDzHJPVmXVA4xEVAwAPPNyt8yC4hz",
  "key12": "5NuW54KuEseq1xrFXSZyFJWt5HFmGwuSqWJVZ3HMvbt3EZqNARResYhqnE7SD5dyrJJzyZYATEoVyxWMM1jZEURw",
  "key13": "4AKYtkQeCQ4QiqF4TiyLj9XYbR86ADUsjv5iwZbhEMHmbX7uWDCEEctWbdVgA5RzPDpDVd8w7NT7VPA3fwtSt8cd",
  "key14": "47ryVsxvS2q35PTXLgYFHxP3fBDBK8frVqK3De6pXFmkeVxAjPQLAvFyRk14cvRpzUaXkgaRz5daFUXamQV6xWt",
  "key15": "5kFaXxPin6P1ad6DAkGmkMop3YLv7BLVJKoAWVsRnHaspTnbQaFChM5HRS4HUUFF56b7WZzLKJw3zjVcHkA3L2aD",
  "key16": "XK7RxTgBZJaYqftggbx188Heg9ubjtzSDUYCQ4MQu34mxLZkhuwLJp7JzC8uKno6wvaYsRH6u25PXHTSWjUdgPU",
  "key17": "5MjXMD7SjqeXABSBF7DuEEQpsf1UV8ApWi9dYFDrzQgjtr6Bp9Zg7J94AuZBJJ7KVYcK99MymAfCQSqepr5Hye3V",
  "key18": "4U8DZaEsjzrqc6qALYNyFqKhT7QH9d6bMUfYA7KR3YTmf3zbY3dzDtbnXDpUqUcKy5GGjX17VfMzmXq3vUNYu8uT",
  "key19": "5PPkAy5r46daYE3VAvAyMW6x2PM4FSTTbso364uKggMASbfvWei8YKJ5nCUvbLGLEmu1VGUE25BXnagsMEsZjmPK",
  "key20": "QaMvPLjGLzCgLB56ARnXkradTqwaFAW1uL7PLjSn9PqBMMxEKmYuxi5ShUKSwAfQEuMxTBLinBsnWKhVzRfNZU5",
  "key21": "4qZHG74JLrWW9WYiSLoAqSQDrHrst1Km21diS3K16jL6W9M2JZozw24HgpM1a9TsU6wHyHCxGu9Ks7dG6ExYz5Do",
  "key22": "3A591VQffKZFA3MQkTMdSedZkEibNnf4SCuiYiYbiSaRBQJxuhRm6gLNtCFNx1F63TRDL3MiNRFZhtit6BoUUDLv",
  "key23": "4tR3RMJEMdYyM6Y9gzu7QkvnW8gbBLqirGX5vevJeo1syRMseWJKDXh3RyMJkYECBTNyhgNTifxhHjD3e31hyWDr",
  "key24": "4yTLiDxAsbmv4UmvAJ3Zopa1UYTQ5r7KFWhvo4KJrc3WNZEV3LiLKHiYhY3hDRH9Y3zYxBQooJMCff7VwkA5zNYT",
  "key25": "44cxnYV2xnDvZkkfVTFwKPRRAEfaKfmCUKhVh6nsdtZBe8BpvouufzhpSQVRmJMypPasRvHE7JsBF5dUBZgwEERn",
  "key26": "5rsKw3w2xMUkqhAsLLg5nQymKntNR3YAAtQuegHrmpxj6wPBMDXdyKuA1bt2Xe4L4XoZG5X5YSjCeYRAm4PCnEB3",
  "key27": "5aKdo3oTienc6focUsvqtCVF4X3cu3mU5ahnP9JJrFcAx1VZGbVFDxSV6ErYH1ipqw5wDqAA4jeCBpXudQMyQQLL",
  "key28": "2HKKq8NCZwZKmFEcKj1mariSDBqFKsNhTL3M7gcJZPoUrbRpEYVPBBVLkLxDt13GUS1d4Gu6WdYDFvLp1RJvVBu9",
  "key29": "5tfgVmSVV1BperZjf7fr1uLhTYW2nkZ38irJ7rzpgUiXVX8WQ3ssEGWmk5PQ3vkhPfDWhqLAW58vsTTAoM71CXQ8",
  "key30": "2QBJa3ZKWeCGDxscSWAFwxWsB8kfAJHYeJWyAHK6UZd4PWFqDayRPabmG95ENmcYW3DoxNrEDPsHqiyS8ZNW41Gs",
  "key31": "455St5W9D9FVkE1T5NTPyW1iwtjXbtvNR7UXwXiANYeQMM41Z4SAiNccboJaGYz2q5NUJDz7kfQUqUVCtrPt91gj",
  "key32": "4AzKQayqYXsapfHGqAJ7GfxCZ9phrZHbzgVWjr3g9jkUdGQdYiuLD4yChEjoxJSkhYT4Fahm4UJwLCQUCG4GVCCy"
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
