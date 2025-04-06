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
    "3N53jpfJYxMnzEX2rnyDWxbihNFaHFMDa9BNP7H86P7dASKK2ru1LYjFY83eUVocb1oLE8aG6u96xFFobf2w68KG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bWwAE7ZNC2L1XCApoM1NxsXjCX288jwQ43KTrbB1LmhMxFqoVoistYZDpKpwf2cux6Wu9xMa368yaxPeFc4euLe",
  "key1": "4u1uJVErT6Kra6qDAFpKkRrSRiL4CzXQzGzMtXv8b2XunrKkCDsL1Hr5jTScjTQtZguHCHJfaEFE9EweqpmiKQNt",
  "key2": "3YbXqos9yitTZBKTAuhWJFT1G63bRx1eAmdzzq5nuTC22qHENLtJDeAo7e6sJGhmncT6xvrMmzBtNfdbrKPpBiZN",
  "key3": "iqUmVzwh4K2xt16etintRNYp5n9Na8TK5i1iZWxotrJwZPocoGoVm88brVgc3YjKYAg69KQFFqURKEyUGSZ6Nqs",
  "key4": "tVekHqAqgy2ABQcKvLx4LnFLKUpn4PakKMMJW3f11sP243pM8BDGeDaNtHPtnV6FShi69x5vWqhvVjyRk5rHhyF",
  "key5": "UGtumQG3JvJB5t6dTWkPvV8mneBSxWcHDF2Fro7JLgAZvtthPWeJPEMCVjTX7pf69iLPEA6SNHJxYGZPrKv7oNx",
  "key6": "2Bf72stnrB4hGmFSYMrXSj3KE5tGhwwB9Famo4kwW9DjxhXtXyWggvFDBehZkVjKwq3s1v8gM6SCfNyKatw9y7XZ",
  "key7": "mrcMmDEdnBb3AoT493fqe4LpXPjVyJDmJxX25DCzN5XhkDwgbmssfkS3QoJ4db8wRrbD9mFEp7mULHudnNg4p1z",
  "key8": "3axjrPRTwizjwcUTgxpRZGh2U8WnrxTrhjZsFr7xKsH2CFFVxPR9DLui62ZPgWqFEMG3qA8AeK8QQUEppyfkJhD8",
  "key9": "2EFgxVRDMnDKtqknVcdcap57skNHRopVWVcVUiv67vvAK7FiERDpJGbJYuyBJyuEkxBhKBgZFgQhkuprWt3ExV4t",
  "key10": "4NErCArfuaUkaGvVhAW9smSX3zNGNcdwT3TX1ZpuWK6eEqtUcsdXfAcL6SfgMRn9HLt7PdNNwnVZxuL9xU8ApLPt",
  "key11": "4R3roig8WchEVaLZZ5C6c3Yip9C7x9REsrzNCvakrYBu54Rvpv4PfbjH46LgceRV5CdnPFWE4bds4MhoGAToPd17",
  "key12": "4vHx69UZ6qEyNrAcQWCjvpH7GaMHLvS8AVheA6GEuQRiFfxtetC4GJsg7FPGk4YZbPKUEqkrkfXT7hxpUabjr8je",
  "key13": "4CnqdqFBeK1N76zPt9GszkRuE9AoJyCdUThaPa6sUX8PCMACoPuiWWrA5Dgn94vbw4tY18WQuDezn8DdsCnrfBmd",
  "key14": "4Lfymau9urDT5ZRmzxtFUgrtuvgh4D6M9xz8vzEzsnLsAi9NDELdm4k8yfpaoqWrTRtkSy3gKTv7PQETteZ2EDyT",
  "key15": "34iKvb2QBgLEzq4WLC6dCnsMhUUeEXhQLhkDxzWqeqBi8GGjVtbFuQSDUDxv5kERkp3tYbeS7QTF8fYQzxsgKpeq",
  "key16": "3PjBuRqqSZb7mc4DymoL3UPaGT19ncR7FCqrcsrXzLub6RekbMXNAJBDLhY39hFLaQTLzRZgD4nRb9jFWShrEDqj",
  "key17": "3GDh1CHKFp6uoYmPJQeNh46VrccV9LetJgAPLsgnVyvBQ1emrsekpBrTKbijRs4GMmbJU9g1DyVT7ihFQRL1FoPy",
  "key18": "4KAR5YFozwR5GhLd6MJWgS5JLANnmdYWRj3R3cFfa6fEJkmmt4N2MGsZRvyFVxzcbsRkDtnmcft6nC9kPgGBBv3v",
  "key19": "5vvCfSi6GYxKX5taro91iHdS5BVnEyuSEUqwD1RQp6VuWuQQZKfVHba8LNq7RG1Mzds6YB53of7RSf9gEgicCCjG",
  "key20": "2gqxHKAeVdgBTs8zSPfWY9jk3x6eBZQEQJMFNyhtWgcw6x7XJSwpq2h1wqAbj15mz5fsNaHyEcNZyZ1gzGJEFMiv",
  "key21": "GzLmxHaXB4Pk4HKLRs1cZFvaV4D8wgHyBE2moZqD9GdL3DEGviFpSNQygjoRmsQyJH8Py6RYxtz4FhtK69JTX1X",
  "key22": "5Jyk2hZXZzsjFpw9aCPwJ5Gw2TQnAnndFvLPVgUXiMZF9UGWTJBASQajSq64DGxs9qvdisMgXLs6qhWrbS7vU5xY",
  "key23": "3Mogi3QwLSk2oMKB3SHiy33zQUL8zLpT4QmYG2TMRMUYjjfKwKGXr37UoNwdtqFcvwUNbJeJxAb2fi5xfZ4dtTPj",
  "key24": "5srBLbR7vr4UXYK3BUMjEaX7vEY99ucNnCbdcKykXFX79e3dw8uY5kRoYbNWzqHf7a8n3Tor7Y6msE2nbxo5T6YJ",
  "key25": "wAEx4gm7FAQWCGRDhstSELXowcMnCY3KoPSg9g7NUW4DdrmWDNeEfjqq4XCFQMctBMndMU1GKKUTezEoWKvn1B4",
  "key26": "5JceMHgEM74VKnvpQMAod5tSEdD9TZXps2FrveEDdtQum7xmmxGbFeBE9LWVZzMM9Mr4b9SrqNm17Xf8KMRyge8Q",
  "key27": "PrfuvjT88emtjWtHmNw97e1DvGcjE17RaKYSSCetz4DaJaoJXraSyXAve7n9bFjGUkRd26sLgAT6MyWBBaNS5NN",
  "key28": "SE4k9yxxrJAqsgCaGT5tycjz7xsNgaqHGqXL3tR2DBDY6N8akAdzAdPV7gdajmx46yLU2ZDXbpD8WDCCyXEdexN",
  "key29": "9EKcyQueWdcziCmDKXSfL5XFQdCmhAdhMe2d2XzKg7uBL2JfNBA2hBL9k3Rc35vUbDvFBjzbEaXunuQh1UPevj7",
  "key30": "5zvvcUz1V5S5DcJyQ58AkCAzfHdaJvcguFXmwpiUZnb7xf5ix3319ZWxX9HG2NUyBf6PWcaXNTLuaAcs8MRE4i28",
  "key31": "2yjhCZY7dmhnBLfnX6Vatbq28aNbJ9VqGTwDBjBKe5bUZq5cFmzGFMMa2cisXYmkhcBdqPbwZRpKKPHi6gXhwwCx",
  "key32": "2phjy3cjUtbGdYjnLCyq4aHkmJfRKBxkeXqbU7QNtuMNNAB5aRHJxNjmvA1ttUzbNf7ERxPbahXEw8XoZUVQyHp1",
  "key33": "4emor9FaVxE5C4wHE2WKFdyHgp1sBvtb77ctnhiC2mdtjQBJnaMLjumg8pZyXcSPeewjx8tBMbKV6waRfN6JPR9k",
  "key34": "4SauunnVbitgjMet5sKhvgceVrSby1Vw1dtzFjBdQ4tUX5Qp11HubbrS8zcj7edEXgv1PUDsiZVSDd8UVjUoQgzr",
  "key35": "3yrpsmRqLRHm5WDuJpF3yEEyTsTtZLDT674pkVWer8RWXqCSn6dtZ5cyZWSFjxDhfmsFQJVLTm2zfmjcZiqPnyg2",
  "key36": "2Bf3me9nZGfoTDwKMZ8CxH1PEVyQkKh8RCRFuSNpPKN7Kyb2iMmah2jL7tnCZ6NYZubwmf9ftaEPEzQryz6ecHT9",
  "key37": "4ZACg49fSUwyfC1NU5tuE5BowmkVcmwDZfHm1x4CQTURGPkVw9GR47BZX7ChAe6n8Apb7zHnVAnLTCH9bVztJLSf",
  "key38": "2eSdedUDdNzmicu6oVYnnLcPFe6fdvjLnBuQW9m2iE7a2jkBoPHbmVCwFqt8BM5YGBvPXfnCJZALXxi48aFNao31",
  "key39": "5Bg4Bb28VQVTWmGW1jZ3uZwjaVNVnLaKF7EQWhtKhQJRTufDDj4zaWPmxKD4CrJg3viJ2K2B7Xt5S5kSaGrMowLZ",
  "key40": "5ZuEPx7ktsX1JvU4Gv1WyiFtSydMEi6aV49fVPC14p9akydJM3s7Zjo3PptyWsSi47sUCUTx5jnc2WjoT9GPBw9n",
  "key41": "2uytpmGeYEf33ZsX5NUD4PKT1nankckEisLFDAuNe4E2zcQjbrKckf88cezqc3mJ5kYbjgTAzQqqhCE9yjoox35Z",
  "key42": "45Kpr4YxnK34jYdtBKvg69vBgwFLDSNFGx3MUxqP3Q7HfnrqAZVyHzmoMEdprXUJo1KzHcHwDYKkBuLVSFv3LyL2",
  "key43": "Jc5g34Jc89fNHDBBTx3sKhz2MAPvdeeoJkCzmSXUPemmnmxjMkcgxVFhuRUvDej6Pw8VUdVYdBMoMLExiW7nugM",
  "key44": "5AjfQ2QAgdLH9AfnrTb3akeowDcV6ZmXwKANDn3PhdRxdP3sWDJWzcRpCCiSaCTZhNtMBhDrntuAgF6WL95Ra2Ur"
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
