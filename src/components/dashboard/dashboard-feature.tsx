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
    "33gW6YjQbayoAtsxCF1Gy1rGcG3eNzz4ZG9ruPytpxQYuBAiDVMNNsSB39GJbw8XpJzYk43aWheuLnjhE1opYTNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uMCQcjNVo2gtNqLD9s7zLpuzTx8JerNCHq3qBT4Ddc7i6T8GU9CivFUBSNALg81L7qVQpSCtCZNWKrmytkyoi4j",
  "key1": "2Yiu3kuyFp3mb5ZeKMuQRwRkQumsxXsTiykt52ZShce2vN3a7Jstuw3hVYvTMEGh6VJaDLULFVMJakbNC3NpWYo1",
  "key2": "4p3zh9p7TjFPz88K3k7crTgPCedbev4BH9bchUh35efU7E71njFJiWXiuoHJ9D1vWpuR1UJjU7D4h8bDPwwdbKrn",
  "key3": "5xMUuwsAXnWsJ93jFApuXzMBNH5E4UHY4gbEbGPi38yA46SDfP918DmaV5QrqaH2PV7TwL95yRPCBH8VuUWvRNMm",
  "key4": "677ybTAADJBqZnavrYSdcASnSh9MiqzSYS9W3rVQVwqh2dVjJY8fwQWJxnpLZbPADUtrEUyZWukryynsENH5Pqi4",
  "key5": "3LhiBy78XFhvePkAnFRnqx4sT9wQip9KGoAdyQtqrYsFbZMdEi5eR9xRUQg1barSVDASLpsH7jUn72DTnggntJUB",
  "key6": "2oxRGXnz2Qso93N7kU18HWkCogQ9MeLxnp7sVK7PTjrDG6Heed8JBFNJfguBEeAGG55uHXqDGRL7FZaZU683AawC",
  "key7": "24SBF4arDaDGPXEJywfTohHRNUfJEJiWX7bqa4UWSeYzDt1kP5pZPshsh2tTnsxPvthfaoUEXqikkZDD1STLAFsc",
  "key8": "4A6mLQqKYVHqrbKiSmevSXkYwvXmjDThzsPjtE1K2BEAzrd8SfrfrXuoHG6yXZXBCVkk3Sw337GEHU1WGRUnBDcR",
  "key9": "5FY5337G6dTpjUsQLY1zQgC1oFxvLeB5HBWD9XjeeGg17bBEoQEBGRbZ1CNpstoeQMfihNPy4niEiw1G69U3gRTz",
  "key10": "4LssnB4d9BiawUx4FLiUo75v7UKAkBCAGYdsjaGuarjNvL9gQM7CvkiYYjJNpFPtCwSubVD3xWQ4uDVV7ZNdmnYg",
  "key11": "3mdstWkDyEV8RUbGkaFLT257kae4goE3K4Y9VCBg5eTR5H4gZjN7SZf27zVkmvaiH6i6YvLDjAbHrHD46feAyojv",
  "key12": "3kQRPmK2ZMBf7cVnyGwUkANt8gTdnNLi53JUpFpbU4L8Dr47hCdt2c8dj33LuXAsJ5mJLynX6e7pCdhZ6sy9xdbq",
  "key13": "4673BFy8ZntHXbP2rSQKi7u4dJv8jLSPz18hPCDWSkTHR9XsFjhAQz8yzvvjviS78KunV7ZUJ2eap8gfq9NonDH7",
  "key14": "5LZ8anvMrrVfRPE5y91JeT5dfRUBWyjS7WMd8hCq3FM5YZY12NFzrBnp5bvrtBoMVnNKX2M59eUBmbZ2tr9EE2RP",
  "key15": "5j59zYehPepiLpXNP1MKsUJcom1BFHFdwAFXC631dsjFZ1KeTyw7k3y69h6g1h4a1gWD6KM1VMCgehdVXRxSnQgr",
  "key16": "5pHLpwSb3EoQa8zmVysx69RUudnd89dbSjyvx2n3vhBXGGYz6t9XSUpuXqGVm7KXjADMFTR5QiLcJvFnAdfZrawm",
  "key17": "HBgmPVnh6ZbeE72DdZeyDvzzrimNYxUNNKoKo661guAzGZZJNUPAHRnPPav6sX4o7Y5rfEGfP4ucGsxzjC6yy4s",
  "key18": "3cKi6VfwArXAFRgYxAAsxc6XuyHHaGGybPxLNS1Rwg6ewvgfbUBVb9JGwPkaSiuvEfjm8Snuabv9XvkJyTToLEnv",
  "key19": "25L8GpHKnJvFpQXAjbHzMzoLtZFuqmiAQYoeLpAQomtfkJu3xJ9H2k1dDU7NUuavMTs8vK7ghnu2NbFTM9c1Ej1M",
  "key20": "Mz5P7mKEEDrywvQ8mAYHjHb3cs7CUnUqyRwq7D8ThpDfu2HwhL9C6pWQ2QK5VFUKcJaxzWvT6CjEqMY5MBQnVK8",
  "key21": "3LTc4UhV3xB4eeKUmmHkShWvq4z5wjqSiJB8Wa8xoSrd7trbEckM8cEw2q83WFy3ZxTKYUH7zT6S6ZUS6U6dcr1e",
  "key22": "5Y8PK6sQodVYGrr4KcCLjsLgctMYx3RqhKaKR3nSyQH1GrCrgcoQWmNAdg46RxnZuvkz3xRzAUDheUgGxVvgH1BY",
  "key23": "Nu4PBSYkFKAZbbiXntqcN1Q81oT2rvSo3u5n8SHDZkUutBaB6VhxFMVK51jdvCN8owcKWEkCNR4EVHWeC5mRNe7",
  "key24": "3MSAQh51EwicK1dPd8k51SF4fC6Ee4oE5SHpyGoztqhdD97WB89yLar7nptKMYvrPdhM1pBaExUofZH7kqKgHCNf",
  "key25": "2Jv6kMXMeuVJFV8V1anjRDQGUyBK4sZNbsKm8VpUr4QLAwSx9hCMNGRr4sy7Vs4LNHdSqWda24hYASGKyTWbP5dJ",
  "key26": "2F2LwfY58j4rzMEBVGEEg3duAybiHkp3P45uA7MSAPehL64qN6enQVxU3pcW8Ja9ejpmxfQRaBpetvLrFpaHXHKN",
  "key27": "eAGj2ofwCwfPuyE3MjNp39E4t4oR97iuqishfkk7gafkk5rN8xWjqajGvqXRgWvqgrPtJhDXQkh3WE4Dbno9o5X",
  "key28": "3xTfNv1cFp4wDUnS7P4UpvLbCFDnPSQhefKWDprhrMkmJm34BEnpGwDLzWMVMeBsTbe4ZhTPYrUcNvFewhbYqcZx",
  "key29": "5rs2kSVfG9hW5aEBJvKcob89DCPrVsufhEyovandU5eBFuG1Xqg2GKSkYZDTHKm7U8DoZfHc6HkjWKrofPRgeiVB",
  "key30": "637Pv9t6e3p4inPnkbEBcmRjdXhoW6KY4izXe32vanubYvbE9rBTdeAEp9EJcxMi8diASa3Ti3HaddDiEyHfcoLQ",
  "key31": "4tapycZP95F1nC7cr6TGWmmXRC88j4xXFAn72y3EV9RA7nLXg4uWB88qtok8u9dJaq3VRH9bDdNKMNza5DmrakLD",
  "key32": "3xaS4kN8GN78397s6kfpeRzJYaUkocwAFzMvB3YoDgkQLARRNcWKDYpS3W3bv2GWEr4yCW7RJ9QnqBhxN8QUf5Bz",
  "key33": "4bExwhxpMo4ChT3NZUStP5icUDMoqHYrKkjEErJNJ2Ko97sD67F24vY9Q7oPQrixZnkmEnQkrWMkfwr9i3HnTQQm",
  "key34": "2rEQGAxQPgkKhVokE1yQ2RX8quziLTb3WAp7SD5rwqzxSdgDaptrUsPf8QTLhs31unyTpuFpxs4EowqqJxg9X1m2",
  "key35": "2Dm9kGJ7yigdMMnKzzEFhqyfjfLqRCgEWW5gDjeYgsUy7aG64RDCrtVY1PisiURXdJFEEMxethh4Qi3SwsfhmnoB",
  "key36": "4vLeNAC4pM2Rfe2NDr98uT7Rga6knhUMVdrVFNpDhfM5bqNKBWLAtLrNfXM64SjkzYSSwQC2AcUdu3VNBz5pZ6b5",
  "key37": "46h15emQZGN61qsGxBGYPDN7divWgtJXi4rDLgnz4psfxtPMg5uqZDL7BBMkQj8X85gkTEPQsUMabvHBEJenmpfL",
  "key38": "5oJ5U9vgR3jXmZNQq1fNmtegiuqXSBX2PaucuJ2RWc4N8EoDEGbM9GTFQctYDG1iYgATPdNCPin9sPEGFYbx3nuC",
  "key39": "3ZKKLvPdQkveLNAqUhDhiNAjWdaYN1JDdXBTiU2Dg2XvsCHqjb9hSApLZMXvY6eZg6hgBmX8sWZkip1G4rSMPD9S",
  "key40": "3r7zJwbY59ydSGcL61ZKRq9e293i7mKaD7uEXvxNTzhxw7DxndAPpouU8bMxhhHHgSDZFuTQdCzqdpQVRNx54D6V"
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
