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
    "5ydcR1QPf7x1EwLH5ZsPu7cjFL9oxv1kF3SCWGS4SZgmW95MdmSjANX5Ui4oyv63341j2gz4pGw2KjkdA69XfXYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tDybniJTkpQA3uwaAVWqWnENY235ddw76Ac7sSWTRW3omvobQHAjTi5t6NscE8EERHwRAtEyUHUNfmoBpZF4sdV",
  "key1": "5QP32saJQ8MrqCoZSGp3ddhvc1YrdGAZSdAiVPBzK3E7q8hAk5dMXYUdRU3bqRRN2rutRUKd1DmepxL4DAky3NvJ",
  "key2": "3BwNBPeSVS8uj94LfMs6tjRXCfGnWxBYsqv37r4K46Xzv1SQRJj2FDjeDpW2Akr4fVTdfhKuehMmJKmm9dRrGg4X",
  "key3": "2bqZfwPwQEwHF9x8u767BokwHespR1hPfetNth5bdHiJ4GD44chFf1Rgs9Bq8eUhA9dXzhmcJqyDSC7PaGJqLoRy",
  "key4": "428uX4CpUL5tT5ADfTWdyjqDbV4JkfguzFmAGTRb6ghycXgVBDT8uhVp8uDXN8RxDne1MawXQe9BHyct3QdRgSpb",
  "key5": "5hJRqBenoF1z516jmBoynT6eeYx91fKWA6pXkv7R2RodH62s9rk61caqbY1KZJtJt97b7rA85cHz8JAoYKxnqkt3",
  "key6": "4iASEcfxxHVCWdRFoRwQc8NR8hUJ54DGG1ixM9HLcQZcVN6Log8sgY1zE1myqbcx5GxYbeAeaeb4vQwGVZwpgtqT",
  "key7": "43XQEQECLYrb3gr2jDwc1wtmRoy4MLYqiQXBYTRXJV2pkeHCNGt5usAThB4zcC28ddQP7fVzknpgYA3SdQGtpDTo",
  "key8": "2pS4A81bQV8gvL1oXfarSk6wbjaFmhNtAi1i2sM5p18hFpnmz6PS9jpmB9z6yBTo6Q6DeuEqZN5VafZtt6g8Ky9s",
  "key9": "4eECsAYPBGDNR4Zdgz8EyRUmqcGqmJenKBhbXbhmQEb1W9v8acUB7gCUgtndVggqNBNLFDbYXB7S18TvR1BaAxfs",
  "key10": "3Thj4sNpawFGexUKv2MXMvsHV8EC6Y9itFCsCu5ftXm7FGNauFzwgRV33vr5jzpabV1R4xBbBc92uai1qUegLpKD",
  "key11": "659aC8kUHd8LnLXrMXU9WtxLb3sKTPLXitwxXoAXoiM8BwC4yqT1nCtMbtHaZtuWYxccTjFujPrCmQPNW3pCjXGL",
  "key12": "4CNTa9p2WhhAmtn9Gc6rgajiQEmmppzH5xFi2JwbXphgMAkgQMsGsLjfLSVt99zRmkEpoTdYonqsTuEYnWHkWZ8Q",
  "key13": "DboujftTQ8dBpuM6zJ13M5EEHyY525jx4Nkqe396xzoawX1ZAMwDQUDDDqLWXCLuLUxxWH7XYVQhYQb4YL3PEsG",
  "key14": "29QeimUQimLae3ChXnoDAvgvzHkqZ3Wra9S2J9c4unHgum1ccH4yuuDPgNbvDXh14VkJ1pEeECD7gjLTncrmLwnp",
  "key15": "2kx6LQKRSrp3Ph1x1dto1Mn4inUKwGYVrazHzAPriHCqktRfRL128eaFXju9bkqVbSan6MSy6ZHbNuzkAjBjGXwx",
  "key16": "5PyomAR9CMfCjZfhGWmWSwamPmh3gxdwGWEd9k7MheN2h4KNxBFVHjjUymv24gMEAafBYHLTPTwZzXGMMYKgZ7UL",
  "key17": "5nQmRxLXgGDooL7FkjeHzgmR9wrkVwGjzGUcKHo6XopcvUXFVUgp72Dm1KVvXcDP11yBjmRCh282TwVqngT79ryG",
  "key18": "2MjgMxBF9Jvppd4xA4LWgwWf4x1Vz6sfPpYAbXptzM46zoa3HyReHcFUMie5q9vvx9GSVyB9uDudqxiGcMvaTYkm",
  "key19": "668djEzv6nh8LB9MhGHpxcRRtmYrV7ujR6HBCx7mxoBgQSHGkHjKE5ug1hEUSDhJVMnjdX1XD8cVGKBqXD8x7dwY",
  "key20": "3kV3Afmo9WQx7twfdAfLyJDoAXRUFW7WpRLfS2Kyn1WiiFKwWnLgJrJ2mYyT15RU5qi6T1XXctUPbmQGkKAT6N9K",
  "key21": "2tnLdcLCVYECXXMTh8Qgk2TgQ1Q2qr4pWYiV62tXnz35XuiznnGqLDXV1waitSRouTqeF4nWXzYQNH3eHCheXzpv",
  "key22": "5B9yRCxLoiTKZdgkAEreFinrNtpvqgxUCvwvFkmn22zzSsjgzB5QDdAKfGztmVKSEmDjrWuU7dos77tgTgEpMk3X",
  "key23": "3xfLQ7Tj9pUeNoq3VwmZSKrMoDdvroUFy8kiWFYpHApLp3parvnWo4x6m8HKPpLJunZWC4cNo3CZa2K3hq9jt86a",
  "key24": "mtudeJEEX3DQcNbHakTPyfBNiqFBVc1j7UfQLsc95JuojysKLs38Sy7PpGunCAzt16V9nubkUQtc2xegipenkCs",
  "key25": "7Y5FBxsTD5SCtSTK7VXF8KbSPzGBWgdVzCtFrmHRmTPRNTtMz7TNLXU1Ekb5XCAxLJc7ZaWR3FpYT9uY6cTcrdP",
  "key26": "Eud23V74n8Nu7SNmoEq7FAcHUZzVtXTPghZJgwHQCBcf9zKXyJkbn43cyBin7DpRkB5Usrf2yzemKFfF5srhchL",
  "key27": "2D4bcjiUubmAJzDwsPgje3htWUrpxBU9z5XpzePSqLdQ7WQUuEUiryT33qzka4nxqzhBb3Xd34eo75eZ7wce2b75",
  "key28": "66Kc8zb5HQLY1XhzBchpq3DycaAMw37d4R8KactRoZKcB4Nc9zpYEtpjsAeYksDQE9bpEtR9VE8azpncnAj59BfY",
  "key29": "4gTydRzb9NBHjGeguYCZv9DK5Qi2t1V2Yk3d7hmuodw4yWpT16smEcnHGkiDMF4XiBuNWdkoYtSKPZoYzFjXsHLv",
  "key30": "4g2sinHEVBbFRVHXFoS5pQDkg8wDJhY4bktdA134nqJaRMRWWikaz7GLoPRGA3TaSTgxvCrJgiXVJ61eVpiXRNrn",
  "key31": "4fMFRzfvNC1tfguUJZ28DyxYc6e8wCkd7H1CdyTckZsoEBtnNN7CWoCxNTQuXCWDovJJFKLuowbBhfrxQvs5rvU1",
  "key32": "5mRHQcGcpQ1P5eENmFEfd23yikgNADUWUuBqmE8CGCZbSHWgt6LdshBvWSXqSbEfWMhNr4Hs28KSEQ1qYS6oWgSy",
  "key33": "26gVrJxXCjeWcXaEbp8nRa9G6b5SejhPcBGhscHqdxresbcgUxLRJTgAuERTJHfE4ZNViKPxwPsz1K5LqkAieKdE",
  "key34": "2h1Vy9YWAzHU7hiZEzKhNuAu2ESmbdkSRvjXvaiSuhMWzTt8DVdGxTcfMLhedCfnY5sjAwPMM4GoEH2pxKUXTZPB",
  "key35": "Y4GyAxi8SCBzDDKSRrEE9a7zit9dhPxbnhotvsyo97BmEHGjm53v4hng33UawjuKTSmqFsFynkdBcSwh9iCM4af",
  "key36": "2UKgU2n4HeQUfGJkLE6kdgKDhx9aLytWZodwpuEm2PaPybi9yyp51ZKtcPxXKAqP4FKf1y7ZWC35FwNkAjz7ohKc",
  "key37": "3QZJhuJXhb7VY8qLNaFjmEq4QHm28JSQboz8UpmPp9xmEwjZuUGfrdVLv7dK35XZCtgoYgcfCqAgXMzmRebw5bhu",
  "key38": "3LZKuMNAgZYrWar4MCEgbGVexCTRiXVrDJC5XviG5NsFXxzKvAvD4P9vhW2VkWz5vAazn5f2BcXJxq83wjmnymPc",
  "key39": "ZZM7mdKYC42JtSFSHHro29LmTYF7WZJBJBTD3UyTMY5pew4CWDoFfiRGL7Qjy7bAEn713rk33gMtm8acSBoqZ8v",
  "key40": "5BDNNTgmV3pGshBdSEyGgmjaAwiTyMMLfy5VgHTdeCY16Y3fUkc8xrJrR3g5PHwRbUnYnNF1YC8N7MzrKbGuf4Vo",
  "key41": "5ojayMAGUNnrc9tF2GxJV6yehPCYj3iHtAieaaz3hbmSiXoTWvx6M7YeK3ZJ6RNuXe8t9nxM3fSnopTs7fvqgabg",
  "key42": "ZFrpP8vsX5zhwCKxNn1KMiPLfKww2BK6ENM8FGDEhGcE6Ezmt82F519a1GDUjXpqGHmM1N1PqoX56FUTm3sMtkv"
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
