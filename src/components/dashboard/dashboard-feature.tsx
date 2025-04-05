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
    "4upRJ2bMENY3oYbnKVoCyTyZNf91akSG1zrupzeP2r2kDFogiG1XNKCTLEXJSFEHRzHeDKnfhMx3jNrFVzWHU13H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "555nLMQAmWRZHGt5KAfvwFvkBzkzJ1PSeq9xB3n4W5WWN7ujo8doQLQprmusquFCbb6nDWmGv4bV7BVfmhEb5MkZ",
  "key1": "3DHCNEQtBauaQv5FM7CNRJCCgbGYRV4DunMbZbTMkD3Re232VQFsonV6RkwcpwprgToAfjfHuNJEJkvbgErJ8iwX",
  "key2": "22sPVzHMGpAFstXononXdzXr8Am8mMSRBwqD7Q2W9TFp1oC8Ft5FGy5AfbvAPXdHBvDwgM5k9L268eaWkEQnpk34",
  "key3": "VYym8stz5fhcxYFjANoR8GdrpdDBZ6HHghR5xjE3v4onggQAxnGisnpGudVi5MGLWVeuTY7JpZLbPA2ecMwCqXL",
  "key4": "H7QoAaz3qNeSwYyMmAYciaJpfVMNrix1CwiibWtGKGKGbLerpG9pAwkrKmisETzVt7R333cKmewHSyRQbVmPdUC",
  "key5": "2Aj6sjsonK8dNx4nWq9NXyH9JDi1p14jRzZgLj1R2XT5pZGLtigAzNFoYJoTWjbKEqhGiNT67T7zFS43CcZjpo3T",
  "key6": "A6J32grz19xDJGMMD4YcSegLhBNQ3UcKpSBBTG2RQWKnusBwMnDDeTmeLKuK3QexVhNVNA9cUWitH4aZvXRm9yL",
  "key7": "4PcyNeZA6LUm3oZ4ozFyfioTtiZUiFVN48XBa7mxX7xff4cUr9iF3HDY5pWdDkKoqcMhVZTawLpjbXUqnDvFeFem",
  "key8": "42prZ78Hsx7Yxv55e6PDz8NRCWgZMQDv5FeevZGPj2VmVBysX8bdcxkYxM9QeW6dyTMSuHizQatdtJkMnHkwPPVh",
  "key9": "4cTT8L1PP4BgbgGsBFMmBpXW1fNtRHpDvQSYaqvUMfjsW3vL2Z7eniMV41PSZ2mCWF7UHCayMZrMFrNDKeCDPJhA",
  "key10": "3dPzCwWXDMd5Y4Ep7mPDoNj6uX6wggXdZEy9MXFYfbAKfBddPtPbp6LuNv1FnHBj5qnWJLfrHj12Y24jxysAR4MD",
  "key11": "5RfkxTQ9mhg7ZeLKg7UJqHp9FCeD5VW2gutmo4VjXNaGMerXfrahecSd8ExaGBJB5xmfPbCx7Zo2HiAd5xgnzjtV",
  "key12": "2LaThS1r7TkYGiqJsVSKMH7xCeGxGKKWbmuwA9QZA8yC9urteAPjTjJAq7PTZ7eDGGAchuB38MNRMb8cwCxBSdr2",
  "key13": "5RDXN717bbvx7YwYmYdsryjgsZmChaMX3sNrGRrd5dQ4QPQanqNNK5ibcQPmrVSYkSqHtRgLBmhZYXDezr4sZuu6",
  "key14": "HfUacYqua8E2va3APzBnpxKNhftDC1G3SL6ZZ7bdSEWuRjgvxzZHdsF2z2kzjD7nrw9PLYUS3S4Xm3rq9uojFX6",
  "key15": "5pTCDdtpsBwkq1HFjvF1hXKiMXGm2cPwKPnZT6NVze9MEBQrBuMrhXZ8TxsRSp3C5WzPad8T3Y43zeVVnHASEtM",
  "key16": "4cKGaKHCSW1iTr4hofzonMmq4fSCgka3B5EycucF3skTTSn3yAHjnwRRd7nkWCbWAJdvWhQRnHvAEE9nL3i15az",
  "key17": "5VL5wdXQj6v4deXxuKEF4wmoNoFTxua1SNQBdAFr36tPoGhgwFb35HdfLcQauiT4r4C9WTtKqRg6UccGQWx9Cjxe",
  "key18": "4YyRVooUazzha43p1LMnAvS8bMCrvGY7UKpNMS81zgctRmRbxWNMKSRhUZLcNjeewyiLuz3phs78TSvKhUs8s2DR",
  "key19": "4dTUi5ZvQV1CBPPvxopyh7pgFmJ6wzzkLo2QXUJcUr4rfWMhyyBdCpkRgMcVoaXRfX4CiQFCeGjuqU8Ych6Fgw6N",
  "key20": "5JzCDECvb3E91AQroc95ZSBG1ZqM5my653xr6baCtQShimU4FRVcpPcLqLia35F8y8gcbKCS87MTfSurDYwKW87f",
  "key21": "5TjKFSjf6WFzygNK1XmEtgTCTGBf3BQaAkiMQeHJRKAg8TxkqNeum4s8kckjnHuQthQRHMZw1WqhWdqHYjKWjLox",
  "key22": "qCd5uwoc9Wb4K2sSmefQTWWFgZa2Td8R4VoB6A9z8yPXDtbjjZ7fLQjhPpTLfijP1S7Fz7kPU1kHmnZXqnA8QmZ",
  "key23": "21C3NXLqZSbhy6Vxd9xdVxY37ZPuf8BQRsXjSVwDgsCF8wPNVJHNCSV2FhqK9qEJiCrPUvpDLHn3rwrQwtLkkeMz",
  "key24": "5yGSSmyNFu9JnE5mt4GkVvdSEcqCRXwgWyAtq7vidPxzwgdkyN5dRXYLwg6U91K11t7X8dkToMXh8A5e7ty2MueZ",
  "key25": "3gRcrcNyEq6LNPX9dwbDWgWkXSoKi4ANobNWmqTRkSp7fYSNkUtJYs5hxU9iaUJ47Dw3i8FcVXipEAWipfXcBaga",
  "key26": "3APBkuJKP4WhvrSmuKWUFdipajJ9Wu8fE3hTP4S6GwHGb2RTHw7Cf3NbybBv5nMHBmVgFQZZRsKvTTWxBi7Lp3ux",
  "key27": "4nrp8DUiHjFRYUJiG6udwEJzV81WoWzL8CpVmMwuA7j7WamfivxU5wWA9o73DqbLs1ZNWdS4EbWJhntfre7HrKKW",
  "key28": "5ZvnqEGDmDE12Z3N2qqMkKtMUndKgZ5vjQDtMAWrQnVrFoSYkmJcQnDf1JWY9P3ojBewUZtnfTU11RVpJ3UMhvPD",
  "key29": "2e1XyViDxx7zAKCb4CAHHeRoRfeqB4XKbB3VcR9x5hNHd9XiCMYohc1BreZsDbgh37uHUbbgSKZLjnKAbdD9EXPR",
  "key30": "5Ga9AoPasnuM1YBL5JYgJkmRDuR8uUHDSPUozXWTQWrNuyHmNxNKRrD1KKgujkinkrcE4aCZaUFJin5t8TuxydPK",
  "key31": "3LUHzomjSDbHMPjqPx9gtKp3AH1t9cyrNSV1GX5wweJWbk6t4HX2AiT2YrZG1HunZAUxDgmnU3iwpPPtUwRnnrVJ",
  "key32": "2RMmuNU7bGLPcgcsXq7oDu5nyUvFDkfcBoYbVGxnJTFZrLGUyq9vD3qvB4bTrboSUY3asoJANMWrcCb7WcYv9cL4",
  "key33": "3AFYjRcgU8GvpDohnzkHYPQJyjbZofAjE3LqWKLH2edD4NuinaNgE7mEzp9CWQG8mijsziSuRmzpcFZ4dgBYQ5yU",
  "key34": "2QeurMYqnrpu7qKU8SdJxuDM58xrhHfqM3i1gR86oRwBSyfquisn2t7SZFecTZanYUHqKvNtSFVXcxuQhiwcGnkK",
  "key35": "3xXVbR6Drr8heWypXaZVpsm5U2mKHiTf7WAHeE2WA9XQPJNXha8rrYg5VcaWYV3X6P18tKscoMmJKCexggfjpWYV",
  "key36": "2e78FqiDHo3q11ttAwX9VwJZURfXzCBdr9HFAyTQWPgVNL9dZeqZsxgvVRxEJ35g62unZ5mzBdM9xZQyHVt6NtS1",
  "key37": "XCq7ALypHKugKGhsLtg6qXSLbysDe4q8xdWkFMNGsgwsgKt5PBgy15ep3maFGFjrNvmXX1XoGzBhNhz5MwsYKSe",
  "key38": "5zVR5brBxTjMJbBgxkfAideqM2PckuuWi7R9grT5wZMgmjrK6FixB4esGWsSKTTz2GSy9PBdeq617fHkw4mMoQnL"
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
