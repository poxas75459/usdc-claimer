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
    "3uvSfaubcf2ZGmGQuZHFCxeD32kuC5fiNnUq8ubDhRCpMrdacHpvxWBmpBwvUHb2Rt4s6Y6WiY8YeEoWYvsfWkdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nAhT7wTgGCdTgahdQ1M5uafN3wFs2uAtoVb9Hf1KVH71G2wUpDuGpZWv2RPBdYjVrssUnTkDcw3JkdWfQ4LqW6p",
  "key1": "3oLKT5nywq1Ru23LzYCqAB5FSVy56sQPW9fsRcihDSA2fwbzBN8V2qPjc3yTfALtG1evntGPmmRa5xwL33TEi8Ei",
  "key2": "35FRKCpGNTRkhu5F82agmwYhH6baLaDdAN5kcNjVnyE9aqqfsUAVUa5PJvfBYLUf4qJ6tGYRFitjPUWeammRCcNu",
  "key3": "3rZLN82S8ifDEBvUQ7S5j8JDGCHnp4ehQm4dxo9RSVRvXzuf49JKzqLYpgWucE3MBux4itpQq4ppppgHu9syX6LU",
  "key4": "PNrSD7JcXKptgyeAShny1sikQ4XPkS5DRCtqyxVvRRkk9DxhwmoJirc3WbRT9RhapsCvZN8ZsjBzc3q2ByrHzZt",
  "key5": "zmF9dt3E94cSffySysn8V9W9xok4kyxfCiihkka3mER39WmxAjMvypNsZoMfEQx3nQWSJPVtq4msh8SJFWqG96Y",
  "key6": "2JYU54FqZdS1enzobWpn5JuovMBEUdwrqB343X5Z2a3kVCu72woZrEhDwu76Kam2FPTgk5efTQDb2jiAtiW99MhZ",
  "key7": "4PLY9rFddEFGeLCt7aAYud6SRFcESdnGn6qkuEuUJNCUUU4zMDMjqAgNMM4BnXYkc6cNuC3efWDWjLGcPV7tubfE",
  "key8": "5FPsdu4KdS4x6277QzYRKHcyoTJS6Q8SH3WDVtTQukVw2mU8JTj7eWHQbqQ2FYwNWvD9P964cH8vdFwFg1nSbF1o",
  "key9": "5PUmEJMnvYA6aJJAMo3r7jFSykydYXfhuPAqZwGrmgUewM9mUwYaTD1H2AAKgB98C73HyXmGyBF5AuEtyWeckYWx",
  "key10": "5xMXCxyNBuowh4o2u5qFfftDjUmHLP43wR6H6ANd896wNAEcJ126xzJ1i8X6k5oWAwmvia2RbM6DG4EQGr8sPeFQ",
  "key11": "F5Ees1TERiiTBaVFuRN5YGukiyMUvPHzadcjXYYUMrxVtLkdZf63b6xN9veh9oGpd6mXVpAhwp2E7hbkNYP214P",
  "key12": "3SCPHstYtMEXsX6pbgyKMFhsnry36Ba82FYSeRmk7c6jMTa5nraksRPjcH23QjiWSA7WF4HQLFCwanAQXY3ptuGM",
  "key13": "2qHHR66jHsH8PGrWXRcYuybwsKVYi4pKRhd814L74uotSQ6oYR8rkfZ5ptCSBHHN8svShZUjv2hNtC92FbAz7QgW",
  "key14": "3h2Tj4yANFUrMRpLgStrJ6oDx4KN8brbEPaYYaewd8F4XNUBFMk81p5jQcwm65sDXu4HPjP7QRcF8Tz9McUb2qGP",
  "key15": "38JpWDWKxz61gFsWfRRGbFTNnxR9jzm7sAsGV452h9JtXHs1rZm6FhTzxzbkRU6DXhvD96LGat3mJtuS3ykVBvSs",
  "key16": "krtt3qyK1zHapJteMiN1EFLCucyoSnHoE7ogpD6rg6yGZUhnJe1SH6wREAtgFhduz788jCtf95yBzzaPmHJe7yB",
  "key17": "39Vcm93shuYzRZn1JLtaGVjFrEKQUshuD6eP7cb4AqtPqyk6yBdncGo1f6dtxjmJoyqgd71X6d2UYoBXbaBzPikP",
  "key18": "53cXkz79nyaUpj8pQbcJtBpUNeSKEVgkhHK6abqsvtJ3G92pemeiCADqxt5cvPen8MLKGJGZg5pPKHDtcjFBs6wz",
  "key19": "3EvufmMGgYqWwzbQgiidAJfs8jGJq7CLPrKLg357bTmGbgQLf2P4NJCFQX8KjfvDeT5XcmjkN1iZPj4tVtSQRr4",
  "key20": "3KFUywcU3tQeGv4QctiBtzgKxmVx2DqSimdDu7yPkuJrNqY4quBDB2fkwwTirSVh67oXaW4ZNqG6AJywbCxUktkx",
  "key21": "5gwU9kbgSbfRw4YWGNd32TzcpjaamYrV8BTYKrLcJHfM4RoqyPTiCGzqkQRDjYxAMWCKGP1VLPb9Wvpht2M78jps",
  "key22": "3RJhHYTUpeRmNsd9SsoVpxXuDoVKF2rpR5vivWWVajT2v4YmKjM6B29WeW6rkFJCGmSzEijTbzCogzbukhgijA6w",
  "key23": "39xL9PqoxeaQXvqQrpG7pXrVGVPmBGB74gjoUMygu49NePxrSWpFyXn6aUHjSMnkczP6D3CSJ9tfJtTCt893Cthm",
  "key24": "2SiELUnayLv9kKQiN68cswdZ84j1j3uRwhuMjVdRshDciFv2Nann9JM7MVRsK5sXWn4afLpAHCJ4mrSNXHrTJzN4",
  "key25": "595bxYPLadjyDjWLAQVweQcSjz5PhqwtyAcyfhotcz38dv9yV6yHWR4rg55xpUmUfW2Gf75iFURp2B4NKJthpuNv",
  "key26": "SBHtxgCK8nDWcPb5fCLqYUys7x1f48m85odgbADxNKLWxD6YHoDqt7fWRPyfxNZKXSMmoxaHyQL5Erqcp7iJcxA",
  "key27": "3e5EZ6iFSPwAX8vXuh4LVKbfbh69Y68KgttFmLDoJEXUwNzSvdamXg2zRUMuj9a37GJAF4XFZQTpWBomKyHgodyL",
  "key28": "5n6BTRuvpAoAX8svt3v5w8dJrGotpJn23XfPp7hhmxtwLJSM9CbprPMumZGPtcBhaamKTXnpQmkt45odVwsYwtk9",
  "key29": "21rt4EGnSzc5E1MDYxugYnTps9mxVCBX9h2fnmkuXpXsN52mmmV2sC5y8FkoBVouz9GyfgsciQVKBm1tFKBghQ6u",
  "key30": "25XH2LNzHAC7nimKyDRph6z2bkZeX29gcrE56TEuj1Di3baRW9PSNpMq48jJuxNRnMby5Hn3rMKWRAff7J1awSJN",
  "key31": "3hWrzJtM6Y3FXjK4WhbchbA5ug1wGZYBUqfnArKdoDMh67T96y7ngRkKqs4Q4Rugh2cQXA52G76s9BWpMYsqiZMs",
  "key32": "5UdjsLdWpaUrSkYRkjpbGjmZTnxM11N45t3jN62odaSLNccmTXaK371n4pnYpVUuERt2PVXWZZWKyZuF9jSneYcg",
  "key33": "41fgQfNgvJFzEjiQb8k6Vz6ttqvDSFRBFhd8y3Dy7ztqRXLfAZEQY9kYysEsrSMvySgS8pCeWyxDyGR3wuywtLuy"
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
