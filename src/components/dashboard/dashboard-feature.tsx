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
    "3NiqLW9vwEzNK4a1Wyq4oKeQ5VDSDfNzaNHFmHJHuJih4uZRnHs312L6Zgbqte8irH1uZf9kXhk1iybm227bdpJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mN3s1cByJacSEysf8kSxLzoDNXqDHAK7FvMwWu7DQj3DNguXiLsrFWZXFEywT2Qfe283MjDqE1wnAp6kGZLGMuR",
  "key1": "3jV1QwBxSVyXBFP3K7vn9TYDxDp7SEBRKq1VdjjcAeeNLSu9ANGmC2hJCMnngVNQm6cvsyYzW4m7EETt58de1aFj",
  "key2": "5VMPbfaapk7y4w5WqP1UWUuQRf9yqUygXcvq9yKcWCXTN4k3ojq1HXDkRiMvak9VyYEiiC2A6e1id5Caneo7W7H1",
  "key3": "WmuywpXXebAUa9q1XDbCyVUvsbkiwB7TBgj2Urq9YwVnTSqbgyyQsJfNv7k7dzdqZCR85zBQ8Ywvk8kjZPT5om5",
  "key4": "WjWGrhpttFKTGf2VEwrBEnGWkmp1woHMZFDLbp9bmMEMLbQfqM27Nqvb74yeXdfRWWr56j5QkGY46bWL4hECu24",
  "key5": "2wrksMDkMQnSK62PWkFWRuu6hreYz1bpPb9tkrZWWCycXjA2zepWxdqs246YccUYD8V5hLUBxdq77UVPQVHsq2Jc",
  "key6": "27qwVwvEEGTCy7TiUsvCH9koEYmfk7WkDzdhK2NSjzez5jtPMC7KDaBaSihbrDzWY2ZKUVZUMqRicqpxcC4MBcg6",
  "key7": "2dJA9xQTn32sjvMYeSbyExCTue8Td7NzZ2MDJQ5PmFA91UBfUkeom2mHLJyrGLEbFsCfirqpyKhzdXKGRoZLaRoH",
  "key8": "33g8ApmDgtJLjVEMEGChuGK4iNFVVHJXgyoxBwGo2DCDMxknQa9y9sq2rLU4kcRju9DX4ddmGfroTp82yBdQ2Htw",
  "key9": "2evxBYxSsqHweaiYF5yTzmAgSFUNuWmL8CJPXSR1CtUpUAYU4Pmv3bKfYuuj5xVef6f6Afqev2oULosXBixb5Lxy",
  "key10": "26XTQsbrrLuG7CXHCGMzVgvfxifbf4vYJeGL6rUPg1wRJwsFfU8V11cSib1W56nmXRH8C8gy19VAMnzuTq1CVjY9",
  "key11": "3TPiuvVucKLdmGbQ3oFQcjKXBf6fnDSzmMmxFoZNdRTebhU7547yDx7QfG8UrfpzWsRbWNTvRCTW6y8ACKBiGHwW",
  "key12": "4ManrdvNvDTTRM2JqGMwnvUCfP73RLbptYR1MFx2c4QaWYK18XCWL8Ke2SupiXFwTKfhgE4NUxqjXQ84odoN4VRz",
  "key13": "3zfwY8sEy27ugoorpxzGJCgr3XkbVbcGHG9QNXjrvmZyQgHbyenNS2ocHhamNcmcr8ryP3mEZE5LkgadTuD1FaFL",
  "key14": "3mBa71dbYKiwNQZaVHf11DrbtmD3jXNTEvN9wMLWgNWBFDpeY3VX93VbrSFYG5pd2Kwqpr9G1R1zoTDdaPXdgpzW",
  "key15": "gURJBYcVa3MoWqGnGA9wpycbMnbPrydK2M1vKQpphnLx6W8jRm44uS6vYxS3da3sQnnaVZSvUXh7GNmmNwvob5U",
  "key16": "3yjziHYoPZvbJoCfJk6jAEjv7g7CwF7uXpsj1v3tzg5DoP8sfnjGEe2WNqXrZjHrw6C9GWMjKho8Q9W5EYfcmR23",
  "key17": "3ULBbiup1GbPL4VH19vLGYTnf12Z9dNVauYVnHnoyWkDrUy3o1kpX3VvpPRBoPH5umraJdi79YHFEmqrdE6boxCx",
  "key18": "cwm9UEDykraNjFDZpcATPt9bTbU14r1PyseHcWQYnJDX7nZYPdfTYyUxhSk6p8tyzS7FWXPZZrXNnqkkmyq8Aaw",
  "key19": "28xZkcWoGMHaZKdMd3QSG5eMmV9NM9Pu4Y4EbFky4fpnDmEWa99E5peB2vV5dV6HeQNKKXHV85P5XxHxXAnTNYT6",
  "key20": "664mgK2YzSZkQioESSzon4eoTi3BHHktwow1AX6Nxpqu2aLyQL1YFn11tW9H5Tfu8v9d6opXovKQXk2iCorSgoea",
  "key21": "215VZP6GVjtZp2Bqg5wvB5RZWrTdnEB5aw7KJCKkT9WZ32M7fZQWGu9PmL15HqBnP4CWKNu6mmmybBenY3iBzTeg",
  "key22": "4KSXZvfdjtQBRfM517DfFitR49DfpoXLBbbS6h95RYA4cHCoUDbzpM6WMk9a9HaB2GnTde1SPfWjC4m58Fprcnjf",
  "key23": "9eCJKWoZPB8u8qSW8JqNEToWBLkdNz453ruttSFEqFSm157RuLjMKxqLDehfwqNhqYN4mezGnGSoeuKv3gJ2XLh",
  "key24": "qmcmGj7SsvqJ7zJaq9ebcEYj7e1GVbajauKwkryoBXXaRcz9ZYcQe5yS6kJRXkSZKxdqHF7FQdcw6rZmDzR15pY",
  "key25": "33menY6DUQFqVdjWseexZMAEYB1AJDFizK8UAP5DZkEj1g4sJL3wg2qVBy7xAQoFguLefq4DWssLmMwB695to3fh",
  "key26": "3NkJE5THz7CmyEeQzuLJzBYWNoDdgcHzZbrALZ41JRrh66Ym3DGipqc5ncesMbHkF1J8kAsLstfgF9hsxL3UVZ1M",
  "key27": "3kbsnA3vAGXy1cV2mmA2p5Ld8cJbhwUJ4ozfocVptEYuMfKi5Gjyk41Q5G8HLfxET79xxF5hsBbMTYkGmPsTeGUw",
  "key28": "4wrm3L52TUxbYLYzMVrUMQi3npsEhHb5f9ZSw9pzwiCZuLatSZV32AdCrRkdUR9jV2xSxg32nkPg5Q3WccXriYBu",
  "key29": "hKV64PWYSo8L9yfaGMYDQbHGB8SoSJcKe683Wpidgk6sNUjzWNv5rScTz1VaoKYx5EQr1aqJDegjfHayBeuwhWd",
  "key30": "3Egvk6QXGwP4Q6xydHvfuvNQxwb1zgwMC9aPQVuEm8CobuRP2fdwV9C7Nne4BzyNPUdZFAxKYL4naSeyesAwGKrr",
  "key31": "4AnL2Nn3YQPC3ZJE1TD1hm2RKr6WC4mQaCT6r1taGaVhC9w8e666JkJvLtKYtvgADqiqLrvzRZwTy1MEwMpdZuJd",
  "key32": "FRxurSF85esiDMUK5nDXiwB9A6QtkfeJNUuLjbTCE7TWYaovxcUoFW2ZCeQbuCuQbY4Z9kG3mcSt5piZdMDkt4o",
  "key33": "44E1hSeJL8ZW3BuZzD5719zh31AEoGtG81wULniFN2oe6j6osjKi4JtoqocSNdERdCDHzRgLaU3Lr2G2kfrbtT4e",
  "key34": "5JBV4wzyJ6LM5KX81B7TaVbyVizbR2CsDZaPnyFoJPt6z12aqPPdP4BK5BZSSnAMDH7ZWA3ELpm24G87va6cXyLj",
  "key35": "4729bejMXCkqSuHskivCWCvAvtJ6BoHzr5cdCF52SJqXwkgrzVi4Svv2evzK6yxT2FdAJTtnDfY5YVUmXk5pLdYR",
  "key36": "4w6x8VZX2LGvmPkxsPdzhVAFj5SELkPes3tdPHHdzNUk5G4goWsuWhmfdtgVSvQxbubP8ZBVUUJYi2RrGSYPnuei",
  "key37": "5jweaS442VUsNvm7Tj44XkCtVFeUXZLYXiBMngLzeQ75ZgfQDLaJjnXJB2p7avC5sLtchT4nA2h6U9PDindf8NuN",
  "key38": "2o2gJAWakHUhsbqs2eeCJFiHTCrY3hfEFUBSGgyywRJJtou8w4FtL2p18fykwhNS1T9BEdbgRoW3AcBVKqeVjamr",
  "key39": "QqqXWY6CsjhhyTqJedHPktRgtqb2vAabWfcif7pgsjyWCZVDmj4bsg1Mup2xPexiz5SyryQpgxsFthGidmSQQAC",
  "key40": "aoTHndPD9GwZfc7Dn3RUA8oZQ9aXPDbjxTP9AW4iMvjjd2x2MgfeFSsmZzmEnSGog8uXSb56eG2k6Cv1ka7sQgY",
  "key41": "3FhEkANrZ2NLaP3Eqar6K1YTbbK24pxdNNfSCBdRHgnjKVLCRy5Hmc5qRpajHhKCNAV31Siw77cAwHoHmP9fZsM6",
  "key42": "2tzMRmcZqjvQnC62oiq2sZt8CWKTebhS26WCqK6AB2NTKxX9SUzH8QSehtPtgRZDcJB9AsLewjzJRma1uQZDVFb2",
  "key43": "sZvcjts99Loia2D4SCoZs8AQ9Ptp8Mgmj96L56DLXSNpckaub8ji8cRQ29NBXbWv75p5viMKsJV2ZCwdWmKBmF3",
  "key44": "4FJaLzjWRQHohvTjRweHyAkxG2adeoQjNoyFEG68KbpnXTYvoF7ULJnow4ixHxG65WL1BuwuzipCBvyeh2mb9dDt"
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
