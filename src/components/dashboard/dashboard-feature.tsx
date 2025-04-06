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
    "5Jfht6LykGz9vBK7hm9AuK9hpixPmqDQMU6uV1EgcXgAK1mcruxmqDtFDEu6Jz9FHe8kTMnNPWV7YUhwn3HN7Whs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGoam5ohyFhAL1SSDu9ThmKxgJRiufPAaCJYPQoAfsHskRhCahnGR8YXGCEKhCvtfdUgibkwWKk9n8jFBJRLRFU",
  "key1": "2Nc9BNjQrzmPjWdtVyLeQArJoTjZHyZC8ArzWteF8Lfx1CyPvohyQc8mufTZ7y4BjvSgvgWA3nSce9ea54nXX7qc",
  "key2": "5cm8TRacnhStoJvxMdvSPbn41KmcFvsSvwxMfrnbkdz3tkY84XJUuxnNseWK9T53EXiAdyAYmPsqFxcBYzCCAWRm",
  "key3": "2CuDzK5x6P2o5M3yAtsMHa1tC8S7jC2AD8pSHjeoRy7bC7ja2bpkeDg7mmapeKU726Xn4N7FmThptw2dLoHAqDyM",
  "key4": "dHNQKqWa8MhcFooeZyXaX73GpsQUj3NUUSpBfTLj9dWDizsnm63VErrBdhKEFyULXmDSyUB613vNkiGVKeNbXNM",
  "key5": "cB6atDnxE7ieprhYLRZ25TaBooYXJaXyWsrdyJqfBxK6FHdLCvGQCzyraXPMpjAsK15bc8Wdp4GsGEaXjxpzfRo",
  "key6": "2XMTUjZKKv5YyuV6qPxmg1AKzJQeJWFn8YyPTCsrvTAt3idBkA1fLiGy3bjj4i5QF9MVVS6TuufJqwweo2fPizEs",
  "key7": "4e99x87z2PwwtRgjXGD9HrfGH2rAgxDSTQL7Ke8F5oFnsgKn7Zv2uc4SW1ygkWwMQcaKYh39RB9xtFF9cJnXvtmG",
  "key8": "3XznUYQ1amTPq5j5aeNeDi9CjuxUxts8GRnjjPLy4juL3TYJiqWt6MzWEHurhRCBBbt8dVPfTyZKdXz3yyt2WUZv",
  "key9": "GwTrTywuFcF4JMEXxCvSjJGi3sK6foSGnwmZnxT7KKrH4MwqaQ46yF8MZKYtzDwpJBngvteNSFFxACJs2uCXFRM",
  "key10": "3k1rySxHxCRYfdtTvB7gM6CKh7q6Wv9Tq8FkKGgjiFHL9FC6VPkCECxbFbR3pkrf3NGUToTqfvFTZsQ6NbZTEGyh",
  "key11": "4ZW8MEoBMzxmhf8JbA4nFa6fwMi4QEVa7oZiKVNsRWo5oK9FPDKfxoF6BTkDAj82PxiiQ47pKoCU7P5SNFijcpeB",
  "key12": "4PyQB1DxRp4SRTBemLFPSCeh9k4qnXDpv4BapGw4uMr8ZdDjsJzLsErQr5HNBefCuDJqgaQW74uoqGUNeS5iyCA9",
  "key13": "2meXL737qFGz6pDdP4JKKw1fwqJ3MK8ngvFYe12GUzAWYCtYsAqTMr8FYQWVuUUWFcZNK3JsnXPZj4JNSyyr5NLn",
  "key14": "5cA9spoBf6qNR8UvrFX9pBESThSX471fpyLgJva5vXhCMtn28hd2rUJ8UiNbQfZS8bbfM6TEuS1EE6aqDf7drHmu",
  "key15": "WZFRXiN6uhR74tHY8FizyX4sA8ywCKcAUr6NfYP14nYxXdcXUDcPXAkcwjMTVGrkciwNtCiebvRFFDewojwfayZ",
  "key16": "mnLntkFj7sbBum8cs3yGL3eDcNjcdqrjxqiCccBvF6D7MdYAfW7DPcKXt4n7NV8jEPSanHWQJeuEVaKzNv3GX5Y",
  "key17": "mcmjNBX7XXGZkYacQXjbxfTTAf7FQ8CDPxGSheGKqV2ZxTyUtoYuKPrNF1iqtLF9ybG1R6tKvufUih6pakTqDMy",
  "key18": "3v8YHP7XiEBZj8R1Nzx5Erc24nXJkacpWgjhXtU9CcnUyKReHTCenQX4SWNtjk7rBWPHs54pSNDJdwQcYmoof8dW",
  "key19": "5GoSdR7etG6Q4yf2FyPtCh16CwQEjGct1b4oeVeVi559XF5bZ3qZ3pW3DBEzpXDbk3Wqu9ofUFSRniV3fsogr8mn",
  "key20": "4SgoQSdVhYy7h5ZHVEct399EVZztrNVDQcrFoXseXrrpWRqfXbh52d9d1Nep7DwEWBbKqvhZMWqiPEzrKZPb55z9",
  "key21": "B4c4tEcXYZgJzmzNZccMZqYbuymxnoGJZQwwWhCxU49Biwm9eJCJFhxcdzK4KZRvmdWAafPEoP3mCccSgmmRPqe",
  "key22": "2sejr6JxDNjDkQLWqwLMaGUarW81xTgkJgnm2Sn6KB2NCtB7bXdPcf3kXfRy44SVRf8Fqw7zg3XfVUfUfabhGvvo",
  "key23": "5HxcAh1absn36pTgqpogtj3DZVGsJZWYgxn1gnggdRRaRyDF5eSKGQ8XNsYRAbjhkE8xbHTc8kuLHstrXp9si4nF",
  "key24": "YZVj4G4aiMmtaU4DBitreCM2pV8ZofNvXCzekeoHYjF1SkocD3CTQpijsHh9oee1VYmctCoVxbSFti5ibFsga7y",
  "key25": "pVSBy3UxC46nfF8WeRjY25GsPwCEec6quaAimEvhhNZqQxBmrX2FjXaVPydbFEEZP4Qf9ogNJG3pLEw51PJjLJt",
  "key26": "31hv2pnZNkUqwPidrU6N2nVEWbxe2r6yKBBBJGcVBs6z6Dg5Gsdqk3wv8HxzMVwbq8JHsoNtduh9y96VceoFzHX5",
  "key27": "3zPRKtqi5JRRqWxE4pRbVhqdSn4wnm4jFMbXAET1DRSzXdNhzV8zBQtMeoGfodv8yWpxwxa1feziAFw1rSWp83DD",
  "key28": "3fKk92N8ZtnQnYoBPqAa5C3WX2yJKBWkASDtzv865yrfmvZAWtWo4msYp3Ds8h4M3SrbCBVGbwAW1xzxi2AkcjBT",
  "key29": "3LTgWuzQXe8EYvNv6gTKAcd1PZuQ5qSRdARP4gLSNLaeH9eCmqGRjhHMzBtwS42x3dFFHzUMU4svhFxmQqNCCQ5V",
  "key30": "41qRkRzLwe3BccDjp8Wa6GHAZvyWAfg1cUN8qQfoWPUgyyMrhXLMrTjnBfecnEw2mpk4HGHMBo4Y8iB3Dc1vTGgR",
  "key31": "Xjjj3p5s29ARf5gGi75u9mKz2jFBC5CADnMiievKzYsXKfL5d31mB3JapcqWpDTM3avWJDchbXZbYCwSM42j2Hz",
  "key32": "5oo9cqKtPAmXoVXCs9E1mc9Ln1pYxMJmwUBH8V7GcvEoDwcUEk3D7wMToFCaksPfepfJcbeCXtYKEveFx1rfthco",
  "key33": "33g1iEMxYGEcAqAji1rraoP5HqMiE9hEBxYp7wDDb733yN1nsZojtx97FKdgvWrNmb9LRCCtMvP4sBFfzLRk3kNR",
  "key34": "5kUuzyqJPyie4ZUBvv4uvrhPeyJz85tSe3hqiJfr6BVzzF64dm1ZmpTsiFwUhbCXpcFiLfiuMaATDBpgw9erhRad",
  "key35": "3PHJyq5YhwbduwX1UAmztySYuftoKNY3vhW7r8Q7KDy6Z1PC8m3xnFpgM5Rst97C2P3LkEnHGqnTRDPzwQUVJi4c",
  "key36": "87rvYF5xQFeFwMCmK9rxu7Zv69KsG8PC7ABxm4ZLjT4U9AAjR6RKUSyf9U2G2uWdbjpXKVqZXxbE4RfA2EKE4Ae",
  "key37": "4jddMgMK1jBEyErQbQpKgo5QuoC5s6ZyC9HcHxwa6cesGVzMZb5nMkVTu1hnXogqXw6NdRPbSfVALiBa3u5DSHwA",
  "key38": "5gUvqbMBY6qmyZYW7vxrHMZs1TKAtWsXH4m6oMKiUZbutFBk2GWrfZvKSAT1ZZS1tgMkyBVnZuSqg2z31dur5Qvz",
  "key39": "55V3ShZBLUmuB2NqdAZLa2GNL6NcDvJN2yjR9bNfbPW1R2YGKYPHKpPRPrKw186GXeyiCvYijR8wUaXSrVR1TNuw",
  "key40": "2XMUkuWbiZ2AS116FREoAZLbjU35eS35hGeg2ZZ2cvQtJfgN6smFRP34sVUfHWTkzHU9wowseDtGeZ2bG6LWyUqX",
  "key41": "2FyiBJ6CqmHDyR5p9E4qFDrtaDi1nrYsK6tZWavkAoeRkGSYQ6Puk17VgfbBoGRPpYxCfuLmaCB5tkedstSekxtL",
  "key42": "3bwqMhebxaFY7dXAGJwS5a1a3euvA8uUpQbBHwVv1Qr3Wtg2cGYbYj9AbJU2AZWUs6bEipC7dh9ewxfx7YMZ4ugN"
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
