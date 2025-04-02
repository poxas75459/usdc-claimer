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
    "4wGycpFWYeij4a9jgaYs64c9uJDwRB64f1m517KStgUZcy5AD6atVRZW1y8VLFPEZbMg37Q3afubedvbRKk6PWX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NVn2cudzTG94J2HsvcC1xf57BTmzfF1P4uz2nkuWs8J7KzRtTsazHkidJyPgnuc9Cy5PdLmmWf9hqMnrG9EQhKr",
  "key1": "5feVMecjDDKdnK2myMYFuEJFDhHMrjxYfmL4yE8xHLmkwFdLmXz4mfERz2nYxaxcTaPqYddTsvjU8hRGn5g3ZGma",
  "key2": "5X3LGmzArYh5Co7dwrXdtkSxaaBmgJhZNF7QqqRR1KjbeYVDGw9VmiiuzUw3HEQxEJbFW4cH9o7DMmFhZBPSidFq",
  "key3": "4qBNHBbbtvbrbmGHdVKoMaq7KYF1KUgHBF1VUsCLs8o7fTpkXxLMh79koXFZ9jxUqEJy8tDb6BJgy9KqvemQ7EK5",
  "key4": "58G5cmUNeTTJbXQ8cLHb3H9fQyq8DusFuxuv75X9cXtxtFd5B3Eiq9W3cKDCQb4C429gQrTYAfYo5iW2PYzpS9LW",
  "key5": "2RGt54HTJoUNHmrtBiTSg9v65tcH8gfYV335KvFafCcgvGrDpWXR2bTsYegmHDChVCwzfsNqRBLzX7hDTvYZGVqv",
  "key6": "3gb4zhsH17oH2iQnCibLrL8L8gASSjokfatEpGvzCmuf3KTmUvn2QqNkqsVn8sXL5VvhWj1f6D7JzKV83BwJZj8Q",
  "key7": "4V31ac9f9sNmoE1Fvds9KpNVcdZGsuE9jVQAK5KuYs4exBzXaxoAevCKEeDcvBUc1bvtgAnThpEAyg8dx8uB722B",
  "key8": "HHBp4TAbzY76JuUFoY9hhW8cBkBoVGNHRn3vda1931wZXYVWPz8kj4KcQicMr7xWuRCNRskTMotzroaigP6zGkF",
  "key9": "4kLjiRJr46wtw2pa63JS2sWyRRvxQj24RozM9fkYZt2gkUmwvGxELJSemm7VMZ8zWMkJ34a3ywUXWfEw6ecFb1Xs",
  "key10": "YVieUbDGjSFjzk7jn7aA62JLy2imEaPkU6d8kiZ4WB771W56X2nCX4goKenBvu1tYFQSXTNCdJ5jJyb4hMUVbLx",
  "key11": "4rkNpeXkfWzidbRQ3h3G4jzLvZTkSNWog74UHJpdZLnK4QrCVckcg5qp4XvYLbthwySjgMxVuFUEKxasLvSJjJUS",
  "key12": "3Ujhf43mxmQq7JtTTFE1zVHmMXPakBLpAzRG1hPgTfEvnzD1Cn4L9psK1DZZwTD4tu8y3m6UnRDNkE4sccm5cxEH",
  "key13": "41EHudi4XDtTYEYqPAGpf8B2XV5euGHiuAtdwo18SNURqDtiPxoffbNgwHA4meQBJ787J92hbCVnkFhNhwLe4BqY",
  "key14": "24M2kEqE6KYbJxNDbqQCpKb8xgRkWhtmnFHZLX9UpguNfYf3p6B3jk9qTr4SbxcW3Nacxtgb7jNrxKToNqHpA7YT",
  "key15": "5G1Pjcn8FaTsenPuLE4k32rH3zGQdVzaJTWCL428ry4wQvi8HEdUFrg6HfgZgnLwfxh8TbNp2foBCbE6eQPwu4u6",
  "key16": "3rQneqaNDp16WTBZzPzx7kWr2HCZqaj4vHDQpVyy4V71W4W95tEdkGL725gZtdigGr1H2eC7yDQh8e4pj6xoBqHF",
  "key17": "2Zz5jZGUvmVx2jVLjLvQb1Sren4PTrhqkpKjzYcHgDJHX5wvGWGB3EZ2Bsm1pmTFbRLS4qe4z1Zaq49cx6ty6LcQ",
  "key18": "24d47RN1fsGpVmHAsykTHpvMHkrCUMPQ8VR279opcSTRVJKPWqRnN4VqPW9RwtoZDriEGMH5ogoTGQ957AxFAJbT",
  "key19": "2Zp1oHnd8ZB7bqwVbhAxkEVwLPC953MzKb9vPqzcWnd2KCGgn8PmFckJSwKCif6KMPQYEYEKGCVeCBc3Jh4E2q8y",
  "key20": "2a2XV1m3jocd3ciM1nSJTB5PUUKx9qfxzNvipSRVTg1aGp2bAGh2Y3wStFyfup681XNVLv36xAf4E9MN35NubYnM",
  "key21": "4FBNqe15T4GQ7U6txYAdh77c6LwdxAjDekjkxm1bq6gyQgkDNnxgifLRG88CrRH5fXZ7GChbpzhT3GJtJsWBNVSG",
  "key22": "44xf5e6DsiTxiu8ZRz8KHKoCXQFUNTCVVMA13MxaP9H1YUn3GU1wxRduSpWf4Bs5xiLCJGR3qXF1hANnh8eVgAkM",
  "key23": "3Wt7qjs5gQEP5eNRx6VJCpCwcsntxAb5szX94Rhdmu8tg2R2JmQ8eZbCoe1cP7Nv6QWS35o4Kb95nxT4Y7sTJLks",
  "key24": "RyWZscZRgH1DaqgXiWJqcECAWtj53aERChAEMu8tdbkVvfBbWwV7YWRUCo5EYM3By6AK2B6b65cPFYs7WHyK2Kj",
  "key25": "45rVcpZU8FAEDH9LqrGBadLABetbbidXjM6iLsnZNdWzJe2tvak6igGiamZW8U5h7LPM9aD7CT6f32ZK2knuCETg",
  "key26": "3BV3NwnXTuBppYvkdUu5DniUbAYAKkLz1yybQEK6ahydGAmG2EbhjnGe8qvsXnftYRATxnaJWs21ykxP9WAgPv4U",
  "key27": "2CcVfj1YQyLMhc4PAd5ev4Ly856Vca7LSSkHGso7Dcctpjr9SXeTSFx7js7cWDoxzCeaxHAHUUgsFULChvuejKz2",
  "key28": "3wY1ByRVpGud3nqMVFSrr6BPVnLuT1B6ty5K6ZJw3szuJ4J6gnfBWkAiJc6yvNwDkxCtapYMfReGkjm1No4DxJcQ",
  "key29": "55BgF83DGapj3xJEFuqpqPG26RcKLuBZEmuKPTkw1auYqjyPnCZEmTJ8R9wkabZKApfUHSSi8ffncLUxNzNe8Ada",
  "key30": "4ZwuHrKRLY1R6f7aGv113wt1v8CXuBXSZNZ2LsGCFHgJcqEbYtWyNSQF47AmWgtDTb3KzTi1EEnRGFX6GpBN4VBK",
  "key31": "2G2gBYXFsyxffsUT8UuKVW99jDbhHw76jMApqvxf68uYiUJDVn9gXCtgZrgksb1ydMJ2ihSa8kALqQcEFT568DyV"
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
