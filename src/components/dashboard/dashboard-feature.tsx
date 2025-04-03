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
    "iFNS9PDtQvJje2sknaCvR6H7f2y6zUjD8whoXWibjdtpkzp37xDCaVWgwXHoLjJmraoNC9V57p8WsobcyRJ2gAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wY2xJZAR6YrWcnvbwEgTtmhUGCvGaVpomQt6L1mRKXbrD8pABZYTmu3cwQaMjbJRcYTb6kB3RL6pnFyfHyCJqcc",
  "key1": "2u3qXPKDQB2Fj1LMNvfgMhJdYix76SAShnUWwFnu8j8UqYEfqF6gZUzyUjcYFSP9qfzNz7kUjNaor2SZXfrGVTRA",
  "key2": "4gfP2dm5i9yGNGrbwg2wSXdUf48qyt5SLz9vuVyiScxXNthyT7DyJLZEWVEvdE7RgAsfPVvMF2UqstbUSeY3G3sc",
  "key3": "3DqTnXjYZ9oKs9vqv3bf8Rw8zJy8Kr2asQv2yXKFbL2GDVfaE1ezLR7ZE45f5djqHG6Yhqh2UhY6wVTuMwUu5QPQ",
  "key4": "5psbs2mTQxe5ek74x2cz1G9tBBm9HkXg4f5qrCVbW8WpwwRtZtwzZjpmACQmUoum6L9suSBj7nUfgKGmmhd3JBGo",
  "key5": "96T68cUXiRfJLr8TRh1AvYnFDsyjbbGm2togDpxmRzhcb3YRzcGYhVBDahoiXs8EQxZtoCW86RMs9tYqZwEK4VS",
  "key6": "4MgVNHSFj9HfJN3SoGXPxxEjD4cNvsDdkbKxTkUAKynQfAPiTmpyVJkMq6TVNaBViKkLqh3rWJhFH7yvAZx49iCs",
  "key7": "2ah9vU1ACVd2wxjGyS77XPfjsQB4w6UJteVF1xfpbfB7dLhXMRDmyEQT65GHhv8CmArQ5VUbYif8xV41rMc9LA3j",
  "key8": "3N4NV79RUJRL7HtPxUcBA7SPgbxDfsx1tZBAJDtjf9fTzHVy7hAEFiMTGkhFMBathF6cmgXztHUiBoG4Vmf6NoRf",
  "key9": "48N2zo2bP8bwEZ3nuLRrXBVkcWfrVMFagh7TcwaAeVrVaLa5XC6jcSCmxaMVs6apqy1FPDP7nWCsn8szqLPKJcUb",
  "key10": "BkPPSYQQKK9veSzvcE46XrWjVpMJWCZsdzSijvQyEBPpQAkvAnNNQyMR7b95Hh1YENxX8HEU7v76jB1h8qcwWzK",
  "key11": "35sijxwNGJgisJA5xVs7UHophwcgvk4JvWdeVPpqMUqq6snkY7vzGuopPou9bxSgGoNbdgLFc9pzWmZJCnRAQCe3",
  "key12": "9pdk9tP8W4KTGJCeocF4n1b43F9ZWRfYMa3Tam4R2594XVnE3KrXaqViQtcLzRjrKXDSYTd2dMCgRhZo7KwBm6P",
  "key13": "bLaV9wUvNcpemKi2dqPYBNUNCGT3ckpPHcmFxSEZSPWfZ2ey1qMbUZdYVccrxSncNyrdk1m1jMbn41qGthREpsy",
  "key14": "4iyCtkr8NzGifGrqvMnDVMp6B9SakNyJU9UyXZJ7tTTf7fBmjHJ9TeTGnp3taxUum5BzLozr7weWR9ZSbB4dvULD",
  "key15": "gafk19bLd4euCiscX58xYJS4qNxweb9e9KVheeb58mCzZP81bgbzdup7B1HsiibigABJozm8sRzQgbHJ1n54wNq",
  "key16": "3dQ4fiNVBD8JTqMzFophF3Q1ygHejAHCU4KAKjfWqhiGLQkFPZhjMzEb6yxG1AUPW43C8ogNDunCS5pvcrHV6h7W",
  "key17": "4EmBah3to66Us9CuQTL9Yqh5ELZSGU3HRSvwVT91Z24yX71sxYXhoB98UYZRzFGVT3k1m46hZm3uSfZezsbJSa9K",
  "key18": "5ENw3E7Gd6WYJX7NZ2U8WPvwvXrGeX6hA5dbsuZxwmyfrATbpUhHejzDaFnUtsfbj8h5A5B19DCsiUmTWApKio5r",
  "key19": "4xj2vzbsKBxxzSX9zWyv8G7mSvXdFwBhLKcEx1Ykn7wjBcTYT8XkkbkepR2s3ZkHgzJawzweK7gt98k9qe1g71Wo",
  "key20": "3zVCjK11DYH28QLPWL9URN5BEJQEzeNNVkAsKEBs65JWuB7EfCndbjGVeM7L4KMAFnoRLHwUMgqSqLCL21ri1hBY",
  "key21": "5iTDMZBRAy4Q3F5K71JPseEKej6QDGSRuMHiegKbLHkE3GfLFWujFCBrtc499i8efv8RoKvDFWiDidAFy4xfvkKt",
  "key22": "5NeAcc9vRhGRFRZxGsS8BoXnX8X2wcCNzxv6EFSZJDuPVqxikKnpXXMxoQRkVPbMG5y9jZ3MLMqw32QPXcGe8gwj",
  "key23": "4DAWdc4z3Nbktyra7AYxWAao6Ywghk9MJNpm5wxKWSC4RRVYYpbkB1egRxXsYxBVSpHmmRHUw5wHh91TbsjCFcgb",
  "key24": "314eUhZQmryw4Hucj7S3VaaBe7ZADPC5QepgU54wueiHb2KiCCrvD1Vb8H2dESo1ggnAb7LTwLKSeLd6goVGtH1h",
  "key25": "24dHPNufnRiNzgofmpnhdhVbFg588w56pCRgtH2KKg2b9EJsLb8Bhd6Wwsag7tKHSavUswcFAqz8cQaBntBHtfkg",
  "key26": "398M27M19bNdnvLuyTt1uMRMP4PvRAWN7uWU5qgxn6s3Kwkpox8VUpwNvnFgCKeH65i48K4n2z6nNd9DZnydTbHf",
  "key27": "2DVwG7R27WyxTPoVDx9ezf7RE5f949jN1bdUB5V4bVGesCrfuUPSbcKQ1qosvZTLcJwVnpmDPY6sFUPNY7KgBVCj",
  "key28": "4aFWBNZ83WpgitDDodiisYix5fq2SkyXFZASSn8vAYTxz1dDCe4c5zHLZpkzDwc7kTgKcAw2Lw67B9RpEV45spDo",
  "key29": "2xArm4vZdqqNm74c8qM9zuf8qx4AdEvPsVDVX85ANd3TLyZW2wLzV6XLs22aaMmQNeUMnxvc4gB3GtGeb4tj7dKM",
  "key30": "xYkJDHYoeAZFDpozebzuCV3RrP2NsyR8DXWWcgMzGXJoj5uUY7UPXxcYsFLQ8mqmHsy1URprCXqMWfehCPiu5JV",
  "key31": "5hdrvGxoNKdyDUnzj32rvPinAfMv4fFGGCRDGsS1VY6gyzk6TCwbmA7cYFLB6QoY65a4YWt8CGXXDH1S5qNxV6nf"
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
