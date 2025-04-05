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
    "53Hgrx13UeW7V2hPgpYnfZhq6M9sHxgD6UpuTDNLZXxKNz4hqB9StkP7nER62rkVESfQMZLWyFesRJmKq6nEGnro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EfHQ5RZbEJbJUfbxQQDNbcB8xSZBWZdaBga963towaioPJ4ASUSea4pYhVifPmSCjEiUtpD2hfdr3gMQK2b8xTt",
  "key1": "5AakoxAr7HjtaUqEBGwySmJvYUDcdcu5hMpeHUczzZb8hyvBq9Qxj74WZQTEiXMtcJ4WrD872Le6iLwVwmy7HQLz",
  "key2": "2ZEAQmRbpSdxRnL9DnQroo8PpEMpqPGbNwjMPQ51qzFDU9TeaCEeBEahJb3mC9VvS4GZx1qzGNgNADNrzm3GLQMm",
  "key3": "5sY1iDMb2M6vGfj1Lz66sH7SKZHuPqEMJmD9eGhs6yCHC99JUuVYi3uqXoKyeF9pp2SrDCzyUXWJKbb6rcHJMEMW",
  "key4": "2GZhduPcNoU2w1h5pP5YhwVoFnvipxB6MosPP16RhYGhLanyGu2jFjGyvguvtKF5LTVGhH88DdjNMXaqxTocehU3",
  "key5": "3aCgaYaKFkWK5VWrDrCMJq2nDTZE3gvzgLifLDDCoiLUqib8Mi2uf6TCzGwxCtEPkegmsmDfYLTXKFNQ7UVmTr21",
  "key6": "4d9UZDk7qncYeaXkwQurqXUyKmANktVCmohE3tJQciaWZvrNmb5AqztkmjTY6tXo1ruNMi61j4EajEqqucY199mG",
  "key7": "48iavMtVzHcVCnVyzve6cZY433vP8VJ4FeEbbJUeML6jGNw641hFux4ww1H3SvA6rcQAKQypbQndD6tt8SSvECj3",
  "key8": "4vgYgP1exktqSicC2hnMT6WJmWQ7YA2abt5kcL3nM9DJpCB8ctELBh7ZLvbp1L1ZrrzamRYoWxk7ugfMUe4rE2M1",
  "key9": "5KccYCHMHwTzvMH5bzedZgQJiHmGup1QbMgtvmZzHBeKnexAUvx7pzGbqrYLFxfdwL4nJuvzTbQemPnzrR1cPpCG",
  "key10": "ruwXsojZMs6N7MYLmz8uWzN7LYrEskQJGmJGbLdyQF1UsxURdDTne3JQ3ZLBk7uGXYAsaqVx2URcKHtGVN8fUFQ",
  "key11": "Hg71R4RVdSi4ZXMTEGAhpzLKco3VRv5i7NtiCrVsSDYAhBFpXS9gF8MiHErkiMZcKJDRKWe54AFBXpKGujiAoZh",
  "key12": "52pyHmZTY4JitYEifsMetcLXUPLCuZseSJLsoCS6S4bBWPEC1QsGxV3UcEokeFX1Q4MeTKr125u6nSFi8T9YjW8z",
  "key13": "4bPxRZJicStETczsNKF1TLR89km3inHPgBMZ2cmVX9LRe6Y3pA6LQRoLTEaZqpBHo5N4XXM8v3WcVdHPX5fq6h7Q",
  "key14": "3tRwE8F14EdS8cWQiEzstSvTxfaG346M8x3jtJrHPuUUTiUZmJdWXy2Yp8g5YZH7S2QTLj8i9TBP1JmEBDcydawn",
  "key15": "2g153Zcgr43nxZJcsVP7MdHQyzv1VnC2oFt5YrNZF3he4o49QHHGYDPdCaP2SdamBu9eyWYuagkxnY3NQ7cVUxox",
  "key16": "5bzBii7pF1RGshABo5tyXSz4SoGTW99vUWVrC9rdFq982wa2wSqXf281vgE1LG1zrHa44FZ34s3EFtmCS4HzBXYV",
  "key17": "2cbjj3qXefisNQSBJUx4G4f2djC8MfjCT7Pa2sGuvqGARoSEQRis9nWrTqjozuyceSZheKKCvSA1ihfqZj6H8rmP",
  "key18": "5ksjmFfJLJNjTQ5gX7yk1oezgmjFmV8gsZCTVLsm5VAkhe48nDkRCig2mnT1hweeSq2gWgZAxLLhZSQF4FywdXSy",
  "key19": "5XytysHknkC8pnsLbycR3XHdzmkQMKUGTUsuHjmF6g1CUM4pCHLo3vE9ELaFC1Hm9LNiM3iq2rgfK6A7aRJDSxFo",
  "key20": "4RELAKYZwwfims6uwiYhjWVyB3qAdyqj8iikbxAnZchuke6AC34P7sZmCE1RmSeZpCzrusTsB4fAtHhobJT3tMm7",
  "key21": "5ke6oVVR6DNBJowNkRB98CDYzA3F15ueiP7X2YYqZiXa7o8ubkkWd37itRgbVf52L2R4mXDCJNh8fCsALcL3hEu7",
  "key22": "5Xgqb6AhHgsHBwUDvPoYMc3MRYsKPZTFEdXqtDWLTWDn4LDNDeXFP3pJLncfv1nka2TnjqujdwULEeh5eekCzxUo",
  "key23": "d3m2ZG626t4jw24qKuJZbira2F6Av8tC3gkcVE3Ub1JwvD5kSiDA1ShiKEed9BxKuEN3hiFpcNuMdffbqfWwubh",
  "key24": "5zxmmYZjFmGjD2b8xkUcd1QgS7dve9Q9hoBfSMVH5BpunxtNRD1F64B77LhsXoJNE8nJRNcGSn4gvEAjneWVHBu9",
  "key25": "5pzaapkHRG7kfusDd7wYRYmSTZYhpYw2RpmFz4mgD3objniqDjoSW6nz1pnJCpg5AzFahpoEthGyfYR9J1CrcUPL",
  "key26": "5GUddkBqMQfSxnG4UeXW2K2XQmRxWZF1R42Y2ZfA9rg2V2fZARcMYUhnX2BVtEFNniEd2hCh6W6VzQrnvJq4HzZW",
  "key27": "34JZjuNXsypDpuogMzJEXB56MhAB3n9UtCYTmKSPNpyUz2HGcgg8Boahn3Ut2gB1qMtdXLzLkhgS9TVUfDb7cRWh",
  "key28": "4cen7N13qgsd26h2mguwBiuq3KwbEtxZfgVmomXJhQ2UkafsHnZiikKQECdFLxTC7tNBNdimi9cSpMYKShGJcvEn",
  "key29": "fQeYcKLWMvevvzsAFNRfdstnXkg78BSEToMczE9WajsyUv1uxFgzp9yKdmwdTsQagVtQiCHJu1zW3ysd7GYCfY5",
  "key30": "43nUNUMCT8m7wbuKTTSD1ho4h6LD2ro1YAHvEScnyFnMzwyAspvCbRwAbv5w8V6THseSRuhPDXUu19MCiLpe6Hjn",
  "key31": "4ycFconSQZqxhQAjFKwHeaJJkGRo5rSALP5iJZdqmTCD7LdF8v5sMJFsXLgGgxztXSJcVhsVYJKPfhK7XKsBKLab",
  "key32": "6p74ky6Qf1gL5TSFcwek73f26CcJmHkJ3bjJrv7CA14UnjvT3LCYovEW9FNKtonchYMEyiBr9VCT82VKMFxwya1",
  "key33": "3VR9WisVNjSXdcNVY17FhGH6uDoy9DPiVVNpa8vfWF9EBvZD2L8H1MZ3D5EAcqQbTVNXFG1AEohk1qnzgHfJwR3K",
  "key34": "4ZJXef1pX2mM7B1ScxuNmcjSg1cjMYPsH3sJ1JzL17eTdGqnqqid7hRqKKSKSU2wdYaWG7rwkGLnyuiMBvoQ1Kfa",
  "key35": "1oebAbA2aU3vnEY96wEgb5VQLarBxoFaNtoVie4RWTdweRsAaq4wbcBQP5xwWcwjMVjFZQZiVARJEyuZaKBimgb",
  "key36": "4Wg8vUpyE8azNxgbcvv9g2xoTwUsEjnJEvXtCKKBv1dCZywLfmXKF7a2Fb9gyTY8x5joBBZaPMA4jRh1H7k8jMW3",
  "key37": "3LSUe4k41S98ZBZzxANK6EwHc26B9P41oJRpnyHZdXnuW9DZAqBz8kez8syBhdvx2ULP7mTJeqGydvz1Q31NUfBw"
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
