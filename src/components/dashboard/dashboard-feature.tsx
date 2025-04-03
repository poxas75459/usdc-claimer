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
    "2SANsNk5HB2tt2h7zwsfru561YToF2qSgfn8FNZvFLc4XcpEUBi3imb9e1nnsNVDG125GRz17LH3MEHLfKRyKMsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DsgVEnAoyFET1dKunq3yYFRn75eZ8MbnSDC5Dh4s6bJBkKmMyMrq4faFuqrb51AAEJcvqHMrKmTZp3PiwtSZWnM",
  "key1": "2jHBvGkDVjkMKuujg3FTq53vkRDjse1Tu9h5Tj1ggVK5JKGEF9FzxANzBRH4uok9c9YcLHVEFd55PyHHpDQhVKQc",
  "key2": "wTWVXCrEb4DtbCGUGz1P5SkPqpmLPAN4ZcpMC64UnvMs4BiyB6bvCK5MGxYLgKctgSxGusnCuC1fy5kroGWvNoy",
  "key3": "3wPBFAKcHnkBzo6hSSZFhnmUyXMfWQvc8DrsN4GnJEUcHiDyYP6nmvAnFvZJ2xxccMW9jTnSqaqEHP9FUMzbdnPU",
  "key4": "3WS9WYsBeupUjxJtZbk8qRTW8PaTtmHmvK1s5zNiJhsRMhtQsPSca2y6M5xSRkYCmk7vqzkyPTvUwEfEPXWUpbvY",
  "key5": "66iAmYR7dKJfUTbCAa78HYafoPy9Kk89GXavaTUuej8LqE1HgmPon7zB9jy8eWhBkPrq5oMLxFqM1LK6KfvR6Ntu",
  "key6": "4iPfQq9axwwXs9F7YopYCR3G8c8mNnZFsfxrzApTbft5udYBFaioh5P5bftnraYirNFTkNpYU4hrCxGGUnAwi6az",
  "key7": "2uMz71zZzabRURos73UJKhbZihKd23N3Nhwyisv3DYbu27YWVtJGoNSToA121XMkC9hZhWbnFTbdg6VhjXB4mLLY",
  "key8": "5AtXAz9UbHCP8nVkPCQdwmqH2DfpsNDFtLk98TLHHEh34UYdx7MJYDm37iNe1a6SMSyuMuAEuM5VYeWbb8ouzXwE",
  "key9": "wV2YyLMrxjktDeqLh8XAYP51auXEwK3Ebhf9GaGi4bVZkNvPQqmXmtpruhSdqpzcT4RdVoRnBDJQLxpR4QM3agx",
  "key10": "5KpuBPhzsSVsiY9i8gTk3YkVz9FAZ4EbaxsffLNMLzyiZMKfQAEokymFu336g9xyvMVv7G5yacVdDGsySBS6jWH3",
  "key11": "311q43eEn2GMfJhRXHQrKBKPu4aPoxqwnLqXHFXWR2nYTiRfcUVUDDe7ZHLu6rhyyNrP5wifbfEnE9Fv2Y4enDsC",
  "key12": "2q8Hiey53hX38q4qtWzJGPYfaBkTGBmnSz6RvrrgJmvD6tfSUK75JPcCEbeem96BhtGhSGpczTfhizUoymy5SYkk",
  "key13": "5vhJgvs6LTY3acABNMKuMwhRepg4CJfsF8ik1k6suaUAbH5Hm2RrarHQPijHv6suGU6DpGvvqDB1MASUnAmzkGJH",
  "key14": "i961tb8M1VGiWP9C2LkE1hiHXaCGmZef74obXrjrAeuQrFCa3U6eLwenGLjVSipacyq4JWheaQiEaBLEwt5ySLb",
  "key15": "3D7Wa7pLW16hKu9eMZTeds3s2WeWjn18UNVVVXrEAMjGQKSCYdKuKPfvpgYYYQ11PNF7NXgM3M9D5tfAki6JUGPb",
  "key16": "66ZPRsxc6TahRRpE9D1GEwwYAmSxFHbpjKE8DhW8sZ1h9cuxdc6WuwqKrBTsKTQXrt7j3oWMfX8t1u445wUM3W5b",
  "key17": "5e6Ecmd3y484S4ePziCCNi8vrnEJqvQZprSrPav1m3mAGJVDy94dcaNxnsPWr2B9tCaLLiAXkBQq4aqcew8SdXLb",
  "key18": "5tjJCMVtijD3mDqJ6TkpUDwRsigwgkBbdsvaeMuEr2eFV8WWnibRVU7HcSbD3dzhzy5RwPnfKDKjaeDFM6h934tu",
  "key19": "3Ai6cYn4wuJibY7Un5DkCiJMfx1MJzN8WHABKeK7Tf4fV4v9UWCkWFeA2Ak9wJab6FD7qLvH2LhohJVfKdooAFU8",
  "key20": "2cqvJZBQo3tefes7oWG664PSrZi4HrKpgyWXtJZuFpAuHn6EqdHbETBMLV6ZWjQFPyY3c3ULs916QWheYfz9SkzJ",
  "key21": "64BjY7dqK7Svvg5hSFkZDBgH2VAgSGQzi1JCUL26fhv3V9L2hBm3RqbTy6wfbK3z1H3DafZFPuLxX3HB4ikVJpPJ",
  "key22": "sqLig1EpJ2kJ2Mcpgpr5Vu4hL5DdumhyReFJids1Sh45MUTAh9DX8e9hEuZicc7dN657K5PXJhaDBrbFK3Cntfe",
  "key23": "5tGCMtVsEB6wt4KZhNKdt6BVA4KansZcWiZB2gn9KEdbETLPdjjpSVfZ6vE5bFLT2D17z5d3GUeqURAsD6nt3J2b",
  "key24": "QWMRr1w7Nj7DiiitTBvDsCZtpvRRGNB79kpov8qgBLbXdKHa4zxy2r1gSGNsKUZw2UWvDiTHFjoYT8LRbRBgaUS",
  "key25": "5jtmBtz3izEMGWF3NgAbJ6ZHRb7QMboW47w9qfj6eQB42ze3F2BZicBHjJmy4heFSMsJ2ke1BY5RzRmgHXiPZt4y",
  "key26": "5GXJZ6DjXYtJtdaTYhsPgZ1qKK32QR5Yc5k5Lsj4f7DjwhDYzobu1jxgBh9eEojjCs2vyTFtihjDmB47EfLFikKm",
  "key27": "5DwKBygNXJbreYnSXpZ7PL83jTrmVkihECbubasyY1RA4Vwcu373KPaq3P6jynJ6pw4HHnwQTqcxyThjMZJ6ecJf",
  "key28": "2xauvrjj77gyiwVpaeVE9xT8HE24QSz9E6FuHvuyfqEbrPJfNwcg4ER1tQMQmfPc2pcWrHaQGPpv3gugVZYqxEqU",
  "key29": "5ey2mKtu8pXE5WggEtnY5kgmYdgPWZQeSfrREyXFJhVFCiwFSdnUbSPjfx7xRwFK4dkfeDow5ArV6Gur1Ey4Z1DY",
  "key30": "5Z2kL8TjMz2zXBi5XtfnGxh32WtAJQLwmBY5C7BtP7pdpWhrZPtToeqnVQ6KV7VuFqwtHaChDNAwjbck5s3RZfPG",
  "key31": "42TtPDHnzHf19vc7kpqnZuRpr3NP46NRDtuSdZTDG3zhwuDUqiQ4WxWpGBM9zXUitXBmkpj8pQKzD7y8Ya5pJ4sr",
  "key32": "NWoxjWSCJKemyUJRduKAZUFqMT2UR6s9xzxoyatbyw6vHKD9xCgBWs8wuGNv8jkp7FVeZHCyFhvS7obMeygovrb",
  "key33": "2uky9fU31zaCaXLxj1VH8mgr5h5F1NA69MPbQvYvHM8aP8san3LseZANdk55h6uPAyfi31WCD3FtnXbEmWx1yDq1"
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
