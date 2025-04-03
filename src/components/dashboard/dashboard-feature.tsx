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
    "5HabyqGpbMyZXfWavAk6orxvULa26MXNtbYDCDHWRzGmEsjfVk993oWtSBbzJH1sFBvXRKfCC6dg8e5ZNt8pdsrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zotvRTGo5cZnFZzzuhsts2WQsjviLis1F2t3FtPT3jWFZK1xzxkESYWYevyoAGfsB2kA1Ep2EVr54i2849e7rFq",
  "key1": "2dPbDfVEuHBgAiD1UdroSJWV7oT7AuiF3ACZiV7FdeLT2mnTseFBFw4asLhzrqTAU7rART2wWDFi2uJenvUMnzJ7",
  "key2": "46kFoEE8wpatMnY7TTEmXro5dBFpSvF6X16cBWdbpy2tNv87zk1bRwEkFNuDNqiKHDt5F7no1Vmef2GPdrYoNoC1",
  "key3": "3jB61NnxnkXx2TBZpnMyp8UEbBpk2XL9WxmK5Hx8vviGh2W8tAM6wq9HnEUjiZA6vdEHvLu8HVeCxqBL56YjEwGn",
  "key4": "52g1JqVc8G5ZKoPRdfzm2S44mvUk9Hca4sfGNW44rSbWMFYoG7QXqvLChSEwriieSmSPSKwAyb9ySKcaUo3yQMvV",
  "key5": "LnwJd9LJSpgM9mLXjbMu84iPK4MB1DBhirnoyqUtM3wunTUEGWKWL6GSGMesuAkeckLvsDR99yFJ2YcfjW2mbdW",
  "key6": "5hVngUdRpuBjJDSAqWA4rfEo3bzpSwxB7x2ydT6C5WVusQYWSxwEyrX8UNmD6CGpJFy25QLmDGdTQSDWx43ygUyL",
  "key7": "2kJWQFuiTNzNx7pawLjFtWT4sH91x1LqnxDo2MLYT1x54BTFQ3pohoTKQ3kjPWyviBRbxxMswDSvcdy2tsZfSek5",
  "key8": "5Cwxoew9uJ4ytSuESVpq8MsrCFUvFMGTuupEfx8zFRSUUn4uPq7WP6zZTj22uWXJAborx6Y2iYUprqU4XYVeDWc5",
  "key9": "5fsRc7hf434oe9XXKMmFqymKsdxeYbMpsidFDmM2LKVVFTJAfxAkKqFNF6b6fMqZ1swXufNzRqvfPs5NTXTDDrLx",
  "key10": "4HZ2eYbwNukTjk1g2y7QJwX29aREHtkUELQtX7mM4ZH1FGKrxvZHix51F8BRy1CZ9UFj75czoi9c7rH9ENDh6sCD",
  "key11": "5e6nnc5263MJzewB1XqG7xnqf6S1ZvZECCGcnhBRyLzKPq87BSwLLvwJ4e9YRBX4znt6JoCiLAbyhWQQATsonEXf",
  "key12": "9HvKCtAEqy6hnjm4i3L9cD2vXu9BJuoufDWbf3mwqF1xH3W5eTFrU4pBx42nwuQHEatct1ad5FZ643skULjcjus",
  "key13": "4mbeR42AhLhVUGKuwu5M1jLHuFaJvWki6uzRsxttfKbJVzEPLXaMViU8rb1eHYEkDDwNYeHtUvn95f8quyVHtFQw",
  "key14": "2tjsSvVV5jUMWVzKbs8R9D61H7fPYj4iUCY5GjNyqPmpoCRNKyEKrkKE9PGMvZbCxSmFT4JGm3LdVip1GMNNDo7p",
  "key15": "4L7wkYiE4X2cVjUEQSLekThMXcmqagGw36qDfMLUDmbYv2pnfX8ZTTGDtf6PX1AhARXpeQL6myX4dCHivWAd3p89",
  "key16": "4ocoz9GoeXXCEcnHpbaVQX2LqFQ3rreTGpDkYgo7jiFtj6c1qxz8LDdYzef3yvnQG6qA7xeHEPGzq8ZMxUBxU4wg",
  "key17": "5FKnKUE1shhkLjBthktzUAxpcWinhUrFeiTy28dhCnN13jGQFtLCaGJkgSp2CRXvdg8SJvqJj9GbEkqGbm1c8eMt",
  "key18": "3q7QrTRFmCNxnCmtTFpQuicF6msnHTkn9EWHRbgx95nN7MySxMjnoTQr6wKu2rLAaNwbLf58CrjBc69damBKEfcw",
  "key19": "5MypQNAAN51nxMG9hyRXZGmaETVWgCvHxWX9bPRdCFHWnk5nktGy2dEcvVdoMe1kE2qHZZVDJjeAPWJdnxnvccm8",
  "key20": "22RTse6HuWN723bfMwXypUKQgxS6pDEAirrQ2GrBV1SHaJairrMHwMFvnk4toGonotAhMVLArT9mrW86u4U5hP2V",
  "key21": "4zfm6TMB41WAUTyuTP1TmYsDBD2durZWcJCcWnvViScqwT6zQzAoZSiBHYv7v2BHgTnm16hsZpWNRHgdWZvrXSAo",
  "key22": "vHJ237K24pZRbsVtM43BJ9NeiBsD7ZFNs1v4rh5NAKkjgipuA2pegXEmik6n7bZ11J2iBruVNHX4SKGZbz5WSM8",
  "key23": "2pSVypmcd1Dft6Gu2wg3sLHmpyZwJrQiPoD9mF9oPkVBUtxbygJs66QWVM8qj1SBVaB5bJ5DfR9vvPsqHjbCTHef",
  "key24": "21Ref5UcY1Rufe6gv4ZHEy4CTgibakayT66ChqAWtjfUZCWRyvC5BDjdEEk1BKcUUxFS2WGqHZM8gAEWVPuHpVEG",
  "key25": "5EeS8DYkZWEm3get2btGScBENgoEQTP8VBayjwrdHYFrAiAaPRPPzN7eeTddgsjX4bBuN6n753X6QMxoQ2KcSBSb",
  "key26": "rhHR31s7PwYZhDyjKjSXRk4qzyWfNNtrTDn2f6UPCkJoDmrNeGwrkSLDADpgwb2miC2q23LLp7sTYuu2fvmyVGE",
  "key27": "5jVaeNPhw2mxYbYtDZjc8PiiZa4YZNegzht9dVDzvfejihJRcyP9wq4UZCaanG8N65iLG7CCnRhKZMVNxqLJ3bJ5",
  "key28": "BQMUnqZaVzvQRhiPMC9BjDg3mWpnvGtWcoqUmxErnxnGkduXAnDFmH89GZd21k1VwtmPd9RMnz4spTePe9LK8RF",
  "key29": "3Lc5JPfb8UbftWFnZrNr9Ryj9P9r1QK7RSgKeE4LGmfDKRYMyXnURss7wihkvKuHaTGDPgte6YTW1we2J3jFSH8p",
  "key30": "5u6qg7tHPoPgEJm8BupSNExwpwCiAVKzfSy7oX24M8R5fkxiPbv9dE8b4zdYE9ZMPG85AKEYtdDHXTkNy7DcP6kE",
  "key31": "4Fu5J9rzSqkVqt95m7Uzzrrci5ypnNpQXjVKfKEixhAPEk5uAMGWh5cahtfMn7oeD9sxKAwBegwwKovU7hATbiZv",
  "key32": "4uk9w1kG2AorPa6oVRBnp56eyBhjKXgosLZY5JEdh5dn7nPhAruDtwFRGZ8aL1tpSai3NnjUdBxYL75W4ikzoPzW",
  "key33": "3ji5WQ5A6xgvPHTNrfefiE4EowvDFhJb3VrHLbVbpbcndHJJGtb1FRkzHMWBZLPSNPvESVxRRWq76seDhh4FNn6a",
  "key34": "Qv3ktSg69jsLr1LWfd2jELTEnT8p4uQ7MnKX4ztYg52kb67ejft9FSEWNW27B9NCeBDBGt87ggdtybwvzEbTA1V",
  "key35": "4uAfK6deeehxqnzSDMVD9Sg8UZtTuxmgC314TjLN8CZhpdsN4oyiGwCPJ4jJYMyWKGFUTVhuXLK8x2BHFQiQMMk6",
  "key36": "5KDcm34RvPXTsgYy9MC24rpF5ExPgMcEQP1oD5XADG9zxsCGqZPVfNnXzF1TpAwLQzAJEd86SNKLz2xeakVZCjGz",
  "key37": "4S7C8MgkwRyeCKKingKekLKd2zT3oUyYk2k4fhbzaSz3pnW6pkwfRz33kFXNj3wFKqJK3VXvmj4rsThJys5UoCZf",
  "key38": "4ETVfwKJNYZevxr8abQbFwNvNoiqnhRk6Zp2EdJ472P2FgUGQ4xvpwF6wSPTZBHz1Cw4astMDKpitVhezn3Lrva9",
  "key39": "3nQJp5HJwZ37c3NwovWwHbCZDKpVjMEXrco3tk5EAZEns59NnC7tNKFbXKuvue84pAGhrRG5i2HGXRaUdZGiVsR9",
  "key40": "RuHKpCJACJPLwS1iYgvapF95BEvYUKzchjZtpwSoYE18rxMEJHsd8uokHmzcpvwUJjtwMyYSiJYPdYSgQChtPbF",
  "key41": "28joBZdv5krpsNoHHkv3JAD69hnModKNi16Yz7QJEek3hYLWVqMiiE6QUd3Ze9dgDcmKttrAKeVzfya8aqfw7yxh",
  "key42": "5bjwnMbgFXWFPHWGKtftacHjJF976EpotymU3PE38zqcjRqP6hYrXzw3xLLX8PZPunHZBALXRqHLqXMZhsR8EnEU",
  "key43": "4TQA73QZzgKDooM97kHPmhv7wopr8P69L9VEvS5p6vz1e8bY883mcvyqbbGTyEhXjetrzdkLinmDogpRuQ76LL2Y",
  "key44": "4k7U8xg9s5ULWKEfBq3YHsukXpgN6kaPL8D7j2EqEvCJQkyZo9ELQaPfxc6DMaT9UyC5rwM7vKzcknAQzA3RNEyU",
  "key45": "3EP3HmXawyEfW9TjURgvj8hHTdpT6xHeDGgtg56wXRZzifwURSknQQL6xjonseP2hoABWbL9C3DSo6c6uAVq4DKZ",
  "key46": "5VGBjHKSctbh6p8223m9zyF3B3E6iQRNmfGUEgGGtqyaDuHoqWQr5TLrRhUAWZyaajuCToLFbUmdKcBUSGcWGPfY",
  "key47": "29JYnNKDFsjt4VkH4UnfzdKJ9rpFDXqHga46ezKmPqbkqsvJNtTWvDkUQqD8Y8hy2Fy55BE1FZzN39PQ1ihBVHa6"
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
