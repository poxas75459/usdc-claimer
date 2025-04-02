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
    "35x8sUxVfBpuc242qjKGpkfVf5mPQwoUb8eFBeG4Lqm9yKPhx6cwQY3d8Q99Y64MA2hCe83JVFazWeuN2AgYy6kq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vCyh1PoLWwaTUtZGz5zez5JAPRo9iG2ZcSLyWqff6t2EStjtPtpDKjfhUvhWvbdaCdmKQpJoiYMLkcDm7B2PnBz",
  "key1": "YBahc6goRkUvnXg738tHMtwscV1NMXBkzXxFmQeHjrSTa1ixJDYxWP7zq4BMAastMJc2jCMjeQf5fSG7cKir8oM",
  "key2": "3Yrd3c24MgUcUy1KyZmAzbtJ81hWMK9mCf2jRP35FZcDpV9KmDYDPKPVAGx49Rg3AsnMMnd2UBriTfmw3udmzxnM",
  "key3": "4x6m64N9aNryR1voZZsPPfXvVndwosDef78kbPpaFWF2xdy9X7e2EimrTxDAsAf4MnWrFweQCfCiCwe8UoZ4uE7P",
  "key4": "TaEmRyxQkzP3Se1idqREXc29rZCsC4tqebXjQg6UFED2P4TxSCQK7o3F9mZ8eQ7CRk1qigawwV7vPJ7N5h1hqvh",
  "key5": "2YkkA9rq9zxYzzmggvhN5aBiLJ8XwXec9xEKXL5KEGFk2tpCMJSYKcj5QLBaELMQg8vAYgp4YvSw8iy8YDxSi7fe",
  "key6": "64ZNVp2rDmTfmsfh1mwjet4ypXVmKM1YWe3NA2F8E7AztVLqSit15jmHAsU7mFF7Gs9ztMFyrVoUFy3FmJZ59HqM",
  "key7": "41xJZSZvA6UEiaGLjfLfDHTnunK5p1VNyxEFbK6gsKxfJxB1oWJPz4VK1Lsx31DkiWMNrfZ2L8m7z4xvdNRKpjCc",
  "key8": "4oDF5T4CACZmsufM2HzryVenA3zCY2JeZkL2oUddoswJSEYQ7C7ASSkhNjjZn7tz1pMvUPPqfLkfpRyxR3ikKVas",
  "key9": "wigU3oCx9SRjLPLw8HRWQV5V4rCgMpVfXZpUgJjsCkKzf6AS7wJDsyrSr42Tmex88yvPyo8qefdjekpYgngZACV",
  "key10": "5ERqpzKVZTDZD8d2bEP4hbRzB8tmDhqFnHMH7hogn6QBz4sn4ExXtJiqrA9XMFCUP723Twq1Ew5CQPThcKipzrjW",
  "key11": "5tQKzAUezedPajniPJsx3bzSwMEvTjFdCVXCHgoRi82HZdqCB6JmfLzmXTiW1nhsL2xGQJYfVdbnNPSMdmBBiKRc",
  "key12": "HuEJw3xuyqswyuLDnjSeHM2wLMhRH5UQ6GES7dxL2YpbdYu6yPkMhCDBF3RJS5HUZTZ97EadrsdtPooFLL7RWhV",
  "key13": "5Bh8kjC7nTFCZmTTT5hq6mEfSCH45KpELVysm2v1UoaKhiek95pTnFZeupNqidegMixeS56ZCAURVMvGs6g7YUnn",
  "key14": "QjizxWbqqyyNY9LqTDcDkuqTaGbwi2HbE9UexYZsHdCCZ2AGr47hmNoCz2aa4WUXj1arheEeoRYCScFvoLstQFM",
  "key15": "5hnWLfPfj7xFunxbdWBriou6rXLsbYx4Lk6fRf9nvYwxQ1rUGU7B8uMUaxK1JnEJRyQjhkdA8V2BbU8kRVrqkjeP",
  "key16": "cWWrUzDByR5acDqS5bXjGq4DpAEwYFxDH2KQiiqhMurJYFWvTt3u1HTKkDrHhXjFD9Z1rMWTFmVne9kor5WvKpW",
  "key17": "2g3qXg1oFf7Yd972StjVzWHPD8QgJfqqETvwbvJmKLbYL1iBFsA6REX9BN8MsGV3B7PTdsw9xBPjjha7ZYUjg3ei",
  "key18": "2iyQhKZbitu8Hqah2nHjPdrJMCJPEZFGYQwGqmEGrfPuyex8Y4UijUUwcJ5MzYj8p6zMuuGxmZTtDgt3254fJA6Y",
  "key19": "3aBecgUhqdGEpnRJvbeWdnsmPXVitY8NyMomHZn8z2K1ve6YaBfYiKSSp6AuvxEXRLDAsKMEMGNk7eAB7gWM4Fhw",
  "key20": "3aR9PGDgHsxF2F2QDm6vVfD3xuWJbDdC42FyPBdWUXGmKcx7bgEnf8cqoq6HaRRfsBR5sHgZNuvPzviwZdFDngD8",
  "key21": "3t4hbTRRyAKNUdL8s4Sc7w3GEgFvTY3KAH9muYt76a3E3rERizFVB7uSzuDuS4XEhEz7BZFNKUj4g4zC4KwYbkHe",
  "key22": "3gQ5Xj5KyDSYezHmhHucJ8iJRM2Q17Kz5TpTiYH6CLXcPhAf7943At9dUCkmEKMn4KXzQwp3W8mZrKmxRE2j3Eks",
  "key23": "hG8ehvkeRCq5BGNra3KvkkK4CjRRwe5sknpSo7v9hVvcWaT2QaLxaMwLjo6d7a4tXs2ATPLpqioji3RVRaDKn7F",
  "key24": "5EJThVV1Lx7Ao534WyTKo6XyBJi4mbSirCoas2TQhLmc3eNNRVXHzdpLCtmSp6y9ejitrtnGy8PqAznEto9K5Crj",
  "key25": "2oPXLQZbB2Q8Db3LzFHzSXMb4ZLwtfvndjbZU3WxEf9dza73MvwoFh97qRwdkbsjJYUyk5mKCbf77Cz4WkF76dVM",
  "key26": "5s7MxKDgLjEHzAoWvPr2eQqVK6XGgDgLYVhXXNk1hB5Hdm5D1TVAqdBReGXxaAYBophGmhHLu4fycoB9CeL8WQv5",
  "key27": "57aXNbeeEvaDySpiqiWwy5U6taWYew5CfpaEdFijp9CN1xRRa8E9UkaS4kXxmMte5MB3BnC3yxedgHviPqmifu4b",
  "key28": "2v6ZY8gdv2Hg8asebHHNUdi4qq2ETn3s82zwSi5BXXwbUtFpmrXriraguvERYJtojRoyMNiwpHtEZLPQbuZhbc6c",
  "key29": "31Ysauci6ttrFSWDRk6JELBNjBqeVeTdzjq1fr1KECW1ttZbfhRUvRRj1DVBsqYXCdM6w6opb5kennKJ828idbCv",
  "key30": "4aFQc5vAsNeSNnTR6USEP44YPvNwdC1dVxn8eBxcU2P3NHXGhHpqVDmMUn9kGAxYkwqk8RExZ6t7YVHrmE6hKYRa",
  "key31": "3o37Cg5AibBhskm7E2tGx594NajXm7j2dXZbafdQyr93qGXykBZvLv2nrd7WMajyiNXqn1Xbv6tzWsFaJTR8NR9T"
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
