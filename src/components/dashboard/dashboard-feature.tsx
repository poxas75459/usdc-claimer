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
    "3r44gCdqg4HiQe3UNDDhaMzUHxJcSzZU4fuvSjenSZ3QtXciXwBWzbxcJeanBWMzc2sUT3ATFRShkzrngGnHfKj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AMezdr4PVsNmLguWbyP3KvhzeRCTXLNL2aBFmbepYQti1fzzMTZZ38zZTinj9xyCsZitJLUzuQRyjmrwSC6PbKw",
  "key1": "Yg8J4o6fcL42AWRosoRQ9JBcdw2bnGiDopEHdyeapjwJyt1MkXbZBJQCTvJJV7B7SmjF3C2orqteQ3uPQJq1t1H",
  "key2": "4JWSQ7CP1r23Hb1WC7LF8NVbGVHSCQijFAarSf1CKm1bvLkzb5rkCziY1Abgpw1v7FF55sXoCtLJvFkaBqqwdCQr",
  "key3": "3kTrVvUVJ4nrjX88kUKADx8erG8nPAMXip1CtopDgb3d7WpHEKbju7xL2vAYB3ea9bQ4rqRWLwSjrtVUyWRCTNah",
  "key4": "4mfBuSDbt6fsbVQZa7rXpyHMyw8EinHqVvr2x3Nirq7fDpqe9AFJhN3jtfZoRRbbBHX19aCvcDVGNs8ivADFhsMr",
  "key5": "m53xpgPKiHsyYyMTDjxKpjFNcKsdQa1ioVdz3frbnA5gzc4QHYqU1Xu8YLvxdmctiRwg4AqpPCGFusA7XFute3k",
  "key6": "3Jbc1Ys736r6HZ4ctCrR6H1Lha4GqVhXJsZukpaX3Wn7CENP2NSeQYBPjir2dF97bW3zSN4YEmbxsjEbTrU7wTVi",
  "key7": "3TMHwSwKvGi3WKeimayGb4x9muoaqLvG9c2avLM6LSSoyAa2qC98qwaC9xjFEFnsSBfCCsgctNKxSSQTnhWd6vn7",
  "key8": "pmdpPbea3yLsQ2H6Hi46Yje95nC4y6XHxX3J3Z88D9HKdBBBXCQMD4YCKcZBVg8NcAs2STjH9xnXdoJqpPd4cA6",
  "key9": "61gpMKterXfxkNhb8BoHPNigtwSQttLCSyrq2yCR8insnkQ6r54NgVz4YvvGkj3da1ta9vbRUrdK7T56ciKppdN",
  "key10": "3u6H3rHzcspVHTQh7zShso7ZJFL5gZBJQ1HWVtb6reeaEav7EhUkoeiuVn3UrgNsofT5sGdrx5Jx3TDeazkkhc83",
  "key11": "MN7oDo5uSTCZDLd6VrovjT37DA4p5G79zo6UevAxgJi1AfmSXxNHat44TpbFLPyaAev2AhNGEdX4qivr2BPyAx2",
  "key12": "3vhMHsDMXn2YfoRdg4J298PVECmUbFUTushXUCKTuvoi1eS82tAD5MhEU96YmgraPZceNatLJv3yzMmVgpnkRbaW",
  "key13": "3JjJyhJZF5zAgMpkWP85fejEupsPbRTMFQYHQjkGkXZqWaHMZCaom7r3EviWniBZ4Xrw6qKVDNPrKkYHtPFCJdqp",
  "key14": "2QQpQyHuL6Y765AXQkTVDaT6BapXGWz5dbJRR5a1jDCXsra9M2FJgNvDZDM9CwY8QYVy9ZB4DroNpQK2MRjj9PE7",
  "key15": "2miQSd4NwdjrnNrj8ZWS437yuSbcZKX1UijqNG49RhVM7nGaNhw6B51mVcDdHWgzgsGW1CYCUK7zM9agn36BXZc1",
  "key16": "5Q94qQE74oMhphuEeHMfwDz7Z32knC22dhqGpT8QTK6cdqAy4nK2X3yZbAvXrfeBHa9htU6c4qmJdssHLGWR2YyZ",
  "key17": "4PBVunaEiFTjefGHXMLCD6jRjcTqfqWMxWykY8m99WRak5vAy9j9cicA8hDmGgJD7nDfYNZk3shjvTu2ux4b4Dcd",
  "key18": "4v6G7ZsxHJYRoooJWPsUY8WkLZ9yNZbYtUfat3Pk4jFXe15xttHyTDEKGwUQwhK5Fz7AB3vFf4UggN66AgYcEJCX",
  "key19": "3Y1c9MRiiGHWrDFz8Mbw29oiiWTyeBPESiGxpzGBT5VQHdhAmZbJ2M9TvSWdBah5rvHN8CDjFPUaAczYKUb7yFBP",
  "key20": "2Zwwsqo4jC1Bsr5VNWCbcK8DqPhUYEA8vhh8iBrDPxD4qw7VMQbaN8QeUVjxFmrKdVyNeZeucp5fHHNzbqmgB6fT",
  "key21": "1QQtPpXhQ77dJ5nNwKUnaPrAYyczW6SLZQ5JCxtHoqw35XpD2CWcfkMso4CK6NNWcbyghuN8qLz2zTf3BcgFcb4",
  "key22": "Lxf456JdCLq6GRsSvEZDYyadn9HWzugPRWHPtVXhwu4XxKFeQmVxc34m8KsswJCoxhQiAvUwgwhVt1Y2SEGgPsf",
  "key23": "Xem1KU38xrGDk1Qxdu6WuUGquf5o4GypKfR3Z2gxNNML3HHguFK5HgKAKPViZcL82mUFnv8biTREXXrozQ9DXoR",
  "key24": "2jfYe3c1U9Mp6LNXr6G4dYhGZTndVUmuRFkEAyhDTbB23s6M85k73jFoorsZsCX3d7cK7hskiD6HVtifyUWWd11X",
  "key25": "4qckc25DbNWf4SP6mXhpiPX2Xyj4kaoGagUUgrbB9kPrXADyDLvqKkvBRAUzfvV6V4AkZY9ZeoRV5ctKsxKaxwPp",
  "key26": "3eUaDbEe4p8DKzo1dFwPgjcrJXMr1WZFufpZBcbUeGfEbMF1rTDxcLqXUVZegjG8w6WPrf5yWLHip3P8fGJ7TKhd",
  "key27": "3nGRXeu8n8DSYzqrffkRsDZCyS9REwqi43BJXA6MJGDgY11AYbEzKxkNPzr7U2U6tqDSBAb1DbwVtBE91bmZGLEW",
  "key28": "TXkFdyxbRHDmh43kGejzurHMm6e1iqtofWZTUYfK8EBWZWou8EsSbMFeH6WMpxdSH2GvV887ooPsw1Bec7yYDt2",
  "key29": "5XqbwNupFUM6NuWTvxXk4AvXoWBD43kaVtf6WeaoiDHiPaEWM7VTQab9p7sZJdBNnziQyCwY9r5W9HmFkh3LR6G4",
  "key30": "5NZ7EmeRjUn9k2dpzS5VuavXFWAjyjYvkSKqvcKrnJ9S88RnUgJbqojtGTG1crBHLBM2gCGMZfggVw56hNhBGV4v",
  "key31": "41xvw36iiQ5DVEXKay7o2nLeMnCq7deoqz7KiZT4XXj1ngMNSsrr7mvghU4eXBUtJAmecntTzdx5Q1cQ5dsYfRQy",
  "key32": "3FJEkSbtktbBQAGXdjAwj7LWCx3rQQYoUSh9Gt6hStvpuP3E8ucAmfC9BBKimZXGWoBjUMWfu2erbRTsJzYy5uev",
  "key33": "d8tkPsnaKbWAuW6psGcUyUoXZ2BKKScD4JTNnoeDGNGCZsr23rHNn2QZ7NHHFyeFGycGLqsYCbh7oQntwr7JQML",
  "key34": "3guKN1yQ8s5eAUMz8cHSH82rxppLPhPXsrxN1KeTfc8tgppFwhKsqPUX216NC8qaExv6ihFkT44BCTFkCAWRWmnV",
  "key35": "3Fk1GMckrZexVpi5bRF8i5LgLAAoDKorc7XAmy6JbV7bxiPqH1PGtQLpHaR9ZoKxJ6sGW2KdmiYKbgntanM72xuF",
  "key36": "5Yx1dD2xqLCpmew3yN9fNiyoMEqg5jK7Lv3dZX4wy2QqDvvT3pwm5sCZfRH39zB4abuEocC8FgeA8vyivCvG4C6G",
  "key37": "29t4X3QknonjpXtigUn6nT39BTjJvWt15NmsS3SQr87ttTqP3PJXvcQT83nmYPN1jqmaamybJodaaHkzh5FrJcMf"
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
