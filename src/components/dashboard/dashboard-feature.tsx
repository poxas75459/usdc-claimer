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
    "3Cjcjs2F52X77pXBd7FwsWUAqh32VPPJgDHn2Ck1ZcCbkz23T49yfgnaUJeguUXiRDk3R48E21MNA62HzkL5HWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TrehnhiqiSvGw4SzqQuthjcBgaMXBS2pmDoJYafuWRofyPNWPoM5De6piCdZSD4XU3pyq5imh4BXRjBwfdqbpkQ",
  "key1": "nBa5z5pNyvw2HLUnHLSGeQMqWSzpeZzR5HbE13PVzHqCNw9raBfXKRm55f9DPj1TjdqcyvPNesUyV1MX4AHRaAn",
  "key2": "2M6SZDEQibC4DnYAyQBz8AfMgGvNGR3cQ86bDm5nVMjRoD9qNrDaaL8Ymph14xLf7KcvHbyMzsmdR2rUZYNdWu2i",
  "key3": "518PP76rXDrVFWWmhtuuGUec9uiory4UWqYZDEqib98RiNKd6qqWG43yATu8cm9J8JFHrGjgQCRMfu5pz3NNY96a",
  "key4": "2cUq3byzxWqcADKLRM3J8WmyxFqcuUxwSoyoSY3MfoAQ9uNjFEr2vgNedZugaEYvH4LkhA7HsHQ61PhUxo5NzHcp",
  "key5": "3mpYmHCzgqDvJTenwtcfDJrbv9fKBvWhuyZL6MDhGkX8e1btVu6fcMreTtuzgMr4zsYWtPK2ShGVkpnfHPK7cEjJ",
  "key6": "CyFJ299B14eoaSdbfGATTdVaLZ96Y7BQJWJYj5W7dgiQAJW6BDHaKxMbbfj9UhuiVYKZNEE3whzmvk1GDDqpoLi",
  "key7": "4DBfDS2nVFwwGCHK21HXAqvpfwd6dbgdmwfDYFBNngGNbojwP8f1pVHaafabP5g99BTagc48usNNiG5KsBaoSVUF",
  "key8": "fCqLrAsN63GsqYiC9fDXibtVq8DSFFWE3KN6ipgzunSRegtM7Ct8uMCx7NzsgtEq67ThFN4JwCY6qw3dZeYhZXe",
  "key9": "5Cx6zr6qzuc9UQZSdGEDRhM34UJKRZyfhWiv1EX8zG2juR5kmoSe4D5uLkP34nH2zBkufepAuq5ainFQXoeE9FJ4",
  "key10": "5N21n97Tgruo57wH7NpwZiMkGeyLp9pustHdBXXQdAFU1Dc3HgdJaeqqhmkW4mkb8Wh9y2Vsg77xdjcyS34w1NHL",
  "key11": "2hYk4TRCBVoPmUagNA8kPSpqxWL1GydYiVSfghZyAFiTJ6ELH2fyDVGJeKsgVB53ZizR8JUtSvkwBCvskzPg923c",
  "key12": "44q818tdnwt52WLtrMD1kbwykK2tFvTtfPPz4WVbFZp2Qthq1ESbFrqmsCX7kYTmf7rWqMHxciZ6nGmmHrVcM1cV",
  "key13": "3zcg4Bc2WRURLpnFU47ky2JVUYGfFcA5586PrBq6SM3WLGMQddKnKxfXHWEV2cDUsd1JCe39CtRqSXQvHNxiDnjH",
  "key14": "62FeVYXN2WC5RzQir3Lcg5YoCgkJaz1V9cV4Gy4QyJc8HzqecxsVih6p3HseWdEboXj7M5RZNgBMuZ9eJuifad25",
  "key15": "3cmgwVmNXpHinVt6MnPD9cf8xMFK8h3wnZG4efgkiFTmPH9YtxN4ZYJewCwif4SUkrZdAhYiD3ZTb7HaD8pZz9kz",
  "key16": "3B5gAsjxmqQS2FyZRvsQGspqxm1nswnjcZJXbu2EEc4DNm4m8wATmGFp6ummejR7RtjGVdF8pEkX7pDZgrpF6T1v",
  "key17": "4URdN9ZRA3bRLHp79xzqKRwDUvkrqdiJUojUfKQy1eSFq3BTEHpydxKjbhZX5SEZ4XmZf65MxePn9u1YH9KsDfM8",
  "key18": "3tyADX8S5jNJ7KGzQkCaHPuXWzgwEq1yHAXxPJjaEP3ewfxJNc7XZuibyb55aooRzqg5otVFnXJX1WUCZew9ymdz",
  "key19": "2wDePtp8wtS6dH92xEhmGHtMBUJRU8VeCy8fKBgMcjaq2F8su3dfLUPCEKmSyrkPUj5pt6732H56NSDPrDGKazGZ",
  "key20": "Pjm58bP5U6bKf8QEUacrWjrdSGenyZthMG3aJu5tkHVzwDDMykPCnfoBT4eav5ZG294thHE8eSbgcQZE2iZiLyg",
  "key21": "3YeYsuZdVkoL2msyatQZUcxDPbQST143ZyEA6tY8rF6GrBQRtYxxRDPikfkKDneHHsvr761HSuJzCr3snPLXovWV",
  "key22": "2vUp9ScyfsmNSqwHZtscgYCHkQFyGggm7SEaa6SHkvNxDtcGaUW4YNCtXx6oVU53UBuxZvWaBg9Z3w1zv4uz42dB",
  "key23": "2N4fcuEzRjLxuNRyKpA8mJUuGcR3Xbo4Ffz5cFSrU2ANGSAgrLUY4Ywaa2ftGWyAwo1rNoZvbtUtEPnnAeAF3irD",
  "key24": "4bXxZF77YfTSvECYUMgjZ1MfL6RQYzNq6aeqNLJjVQ5zsSt8RM68LzoXWvdQJBECe8r94rfYSXvMiQmA2iD1QhwA",
  "key25": "4STkr9Fi39a93TTBVBbzHSiibHZdQhTko1P1FdHuJ9JS9Q92sQBGM8QYC235KZLm3UKy6RxynVaZ61B8uLbv72fv",
  "key26": "5wUsGJTQGqmK1M9DN9v318nDNP9A13wCNbrfHPFgkERV5bmd9fZuthhWzuAKV3kuuXVvoaN5JJTCDMa9XPbNkq9Y",
  "key27": "4jjQFy7z98mdVF9Li62z9YSEqK7BwbPBfVVjCYNtQqNtQKtbYJdiYhXG3enuxNUXbVNad2BPCcEuFmr93koMbhXK",
  "key28": "5N8hVQ53vobK1mfmSVv8NVUhiPUeafMyEqfS5m6F7MSM9DeBwm2VELrotijYLsjzyb3fzZm2NNfYZFSbBQG49kA1",
  "key29": "fhjTAigDcJ4T7Gkw3GSgyorQi6sS6cpGzJkLFwVkXc4dqhELhX8AH7ippC5CwcCDi3xqQN7LMpt5c8yzofAF7ar",
  "key30": "3tXvPDXt3K4kxBft8xr23yRKhUTtkyPfdg4PDUFtYtqfNGdaiNh6G5kXHKcrkqhgnddGaKvuktntKE72sKb4JMvR",
  "key31": "4T82Uf7Ztk4EfkR6RQhG7ju3dww61UeaXDrvkkvnaTkP44oanJc3CcwCVLPqr73HHfA8TojeJKX4KnJ4jE82fUUz",
  "key32": "3ahRyBfTsCCXVVkACtH7buP9hiWqnRx566ajsAQ1rTuG5k2RFsE1cwCiAGXmUWsENr1QhLH3qPBUseRTSkYgWgCu",
  "key33": "3BsgLjDdr44dP1bJGoBBZAUuTxKYiJ1y4GarHwUxEq34eZwkHuv6XgDsuJmQfAK4kv6ZjEoaUcGthHXkrsLetvAV",
  "key34": "uWZFjD5DExdeEpGN1jpW581Fn15JsXrA82E7RVpviN4RNUYjoT2VdedfLA9GbyS9ttFhcDHnRMs8hUBMMQJiHMW",
  "key35": "g5tEQ1R4gcfEV2FXoF4SGu6Tb7UGExdQabJshAKf7JCktwoPZoumY3nG33MGRircotjgC1oieWDUSquZnRJEKZ4",
  "key36": "64iC6PBfQfq2ZUD78QnZ2iKTyQvTSdFFYMRwLrd5fST3oDSVca9CS5E7et1VqQZT2QU3EoF1Myes4oGkZicwGoPo",
  "key37": "31pFBG3nU5cmjcffwJpow3EFo282wgHV2X58choCZms3RQeJbHoPF8N8Th728ocEg7FSzBg2oaWQNMNyvqsNHqL2",
  "key38": "22mNVbwezsx7vJJ8b9Td1MVUcUwDVymQXb1z4NuNxGTrsbx6pnDzTpvDCY2XiuqMiZ4zxqemjoGKH2SxTRtFHHpD",
  "key39": "4jEEeJYwGVufxED26TtDYVo2Yg9Rf3ebRnJGmxxVJjU7AixkZkwzpfSyS6MeU235SZEzosPS3gPndtxrwCoffmy5",
  "key40": "5qtorgEdB3ZRXJB2yE2CAiYgAvueLuxMbtHgEjjPakxrVFsySSrWVjTrrAzTCszHninfxsnyVGe8XH6HLUzBSy2i",
  "key41": "3doahiuFQxbwKqfGnDp4GrPr4EQJxKPkSAcg46mxCgxAqeS8mznDFD9T6oNMrAyMx7GaDWALqALqG9SLEwMpwgSe",
  "key42": "47fNN469rBvq9CDaNvFBGEV5N3AWoChzv9Ph7mV4iHqJfWf8YGkxCWAHK2n7h2Ur8PwmYu7UhsWSyYSuHrYofxMC",
  "key43": "3reX2AoKPYNrrEUMNbXG823FCGCsWNWA4ZkTw1qT2f2r9awKKYkj3DAU9k4xyRpjgwfaHYogeVmYf4XSaXtGVikA",
  "key44": "ixiwhGEwyVyK2UVrhEEHsKzae6V5FLtanjqJYYybrBDVhWSeRzKApZCXtNtwQqfw2Jn5oVaceAzQj8KDmSKLp47",
  "key45": "4FLSxiR1wjBZKcQmd7CAAQ3Fv2btUxwRqAuz6AA5GckapirZeTCpznKuEgetbm21PPp4NaLBezqfGAgVYXrCrnym"
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
