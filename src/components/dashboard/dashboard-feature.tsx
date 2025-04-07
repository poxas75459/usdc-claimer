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
    "4E5PyNWxAC5vGcq8dY5ETbVC1PSMFtjL5AyLXCKzzYmLEkENmwKKSzPKremkjmQ7JgwGRZo8izmSVQWmj5NrgofU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65JPXmZLRwanozuWLHTGAH9bJSZRqdwBrUFeYzEqhGrXUPkJ7M6gkezbZtNdmctmfQzHDVLhcvoaFNvAcN2SCC1K",
  "key1": "4WGJhHbSVjE2xFcVfv4vYkrT3iL11zHFyJtb2faVCAQskQPrTEoRFj2ney23t6xEyT6n9Vkg5wDTcqB7rYrc4y4T",
  "key2": "5cckmXm7qJSTXK8mAKYD1ec2S9DMmrJsHqFAqMPVXrNnARhQTgVPsgRHHn4XNw1UfYe1FTjfCSgF2gZxZaqXU4Lv",
  "key3": "u3RMpZPKG1CiQ8T3RNcRzT2zcahvrYERshJbUA1hxyZkFGuyTAX8DLcSdLXs1Eof4qAAa2FhhqaKgM7v3fe8TYo",
  "key4": "5feyFHR8vQtpc5SSYeB62YeeH7AdXzfMPcpJT19JM85Uy6kvEr8dBn4KA6k9FXZmF2PZopKMKeho78x8kjyrJbaK",
  "key5": "64DpUqPi8FHogR9d2nkpkBbma7xujJ5w3dfqnmaC864PiK8QLU6TiCJCc1vJUK6sm1XX6eW8jw9Ny4JDAL3CEVsV",
  "key6": "4R5ws6knwGo9CZjNFeQCKJrckQcQegE7LyJDrQUNAkeKNjzW443HBV6S91qTnyBwxTzjaMgCdmmiZcG7xDytEnA8",
  "key7": "2mxzbYJHvYRtyUWMFcpCjv1v3Wid7HAuTVsDNjaozR1Pz7oHew2MkgJiZYP3ALYrSpxGGxBz2QsMNPoK6nmc5RZa",
  "key8": "VW9Z6q4x2ThyMHB6TijGv1QFbTLjicksKEU4uHbj3YBjohqxKsa7Az7V3DtYTgqKHpuNnfiEycAEDC1mrnrqPgG",
  "key9": "3fqJZncc5hCo9EtKqf2pAEcynksHbyMPievz9Xm4H2ZpMLo1cgkC2smK4m7PBi5UC3wm5HHiP3KMyv8fL1xrsNew",
  "key10": "3Jncua7b32ekWdHMqsjL6BaDEHnLUeU9cZp2qJ3VFzefPDXdDaUvkBpFmEFdDjS1Letp6uKBj13D7JrwCTDaR8Bz",
  "key11": "2FF1CpFP2DCFc1AR3cEYbCvddKXhJaUQJfc1wsRsxfDTrN7a9Nf26LuSjKiS3AwWAGPH1SE41a3XXNCPh7H1j1ib",
  "key12": "4rwJZcZprHYZCSc6jEBsrjUJjJLkhG8mX636Age3Xw2CZaqz1e8qzE5Z7pFzBE2BUYxF9iDnS6hEpyrF22ub3XnG",
  "key13": "3nkbA8vF6ZkZzz4tjmNh1k8CrCUUEqtt4dQJCWMx8cMiFgudSTLw2FQB1KGbbGreUsGuJACcnMFZBuEByWogpWC2",
  "key14": "4t4JkWGdj5EGXk3Zb2eEYzGhqGyphQmAvCMyK2r9GQwBojF41HeZGQRqMVLaBLHc74tqE82tFuHbxUGGnRaF6oKq",
  "key15": "qzmASP74F2ypvARqkg3UCdvkbt2cQDGCabhFcqJyCP1m5L5qxLffgdQLoUZijnPU7zB7Yk4Drsoz2PPpd7jc7Vh",
  "key16": "27TXoPxyui1uC3oqnuQMpah5UZRVaf4SWvY1mHYGm3bqQRLCeXn3hwih1v4JTXfLvPiw7C2XApR1YjrzVpfgeNVZ",
  "key17": "62ipNghDzdMxFCJwqyJe2bWmMPLrhmULPSmcv27r3EFWwjHtZZEo2b2MsFApsJunJnq1b7AkoQWJEKFrKG2cn97Z",
  "key18": "3KqvqCKq8HokjQ6mzEgfixNCCKPWcukQDxJG7GiXzMb3tqWNxr7SWXRubj5XrChoqu2Bhr4PJptMpwvLi7d9KgE5",
  "key19": "3x9WUwMcKSZtzKXcVo4pPSLneHnzZFgXXyntgAtQ1cLohdXkEpEpzjWC6xJt13DURQYcqMbbstVSNRwkSF6MpbGA",
  "key20": "5HVB2EKMFeV1Q1DV3zvq5CopMn34NZ8KpmXXndDb6exEbj91TdhhQ1um8WbsmNg6raq9ASW8S3VK9xXRUdcSRYzm",
  "key21": "5kwTm2Z7eWCXhr5nkvircGJBgJdPXzQUHvKxhCwbx6xNmeoDFyMRqENr5S3ZU3kpj2enUK7zCkRUDqwWZZrzU71k",
  "key22": "3TB5WVTVxTnxVvCu5qnaDTobUAX7JLX4FUgWacAGkFRMWEMXgrmzoFSBW9FMxSEmdMgvunj21XCEfgLP4xjeWTb9",
  "key23": "4x3JW8nzgXiDfRu5DWF5znx3KyvdBePnxfNJLPPgD9bEqMrAipRLWExv47PaZvnjnHb67JRnGQZrisUZdUWYq1JW",
  "key24": "574PXCNAaU7DE7FEufHCGQ2mTv2TG1SH3dpUkwp4NqkGbGqRZv8YHd8mHqkNygpuySw79bP8Fmp7aUzUf9T2Satq",
  "key25": "5EEdnnCKW8arm6xrwGUYBeFeK2RuDEd9Vebj8pTJcXrqWXn3o5cszjpnV3YYav2j6CZyLoqupGz8MWC9Jtuvi5YF",
  "key26": "4aFkz85gx6qjLHfnjgk1F6TaZxA3bJi6s2RoNBSp2iA35Xt1j2XyQof8AhC6cY6jjMkwq5mLxYSKvWVA3jBjrwJH",
  "key27": "4qCsmsbJy8Xry7k8Sn2d2yE5ChFgBxyAmeQbRwyvswm63rgimpfp9m3YtVnH2CCfbqaNWKKhhSyhwm8ktVPPAKhF",
  "key28": "4j98uh6r76YNGv6WhVa15Ca9GWqWntQcycuiNmcVob2nnSrdm2LxX3Qh45xHo4eizdwzDRLuAWVbM7HmQcEGJkRQ",
  "key29": "4f2tdH4B6HYCQzZYMPo21wZzKz1NjwD7LqhjRUA7zzC6rZF2iwFvsb1hdRpm8K3Ayaq7pKmPfJyuLRQrV8ofVbuk",
  "key30": "byPbEQfzx915rg6JYvkKjJunHjQVo5oYBdP8MoSBfRqHQDmBSaxf3yCj9AiFydbv3oi2ihq24a6tFR5ka7vEPrf",
  "key31": "4dUW9PjVcWRo58o7UZHuWpGwU6UgzcN2npmBFYsHTcXwyobwPBoJrHYevqQLFTnjbx18kEbBWsKW4Jr2GRmDTv7D",
  "key32": "3JRzdDgavxAUJv9ddTgvYgHSsDcK3hk9AkF4CXW3hi55JVuBvKfcwVXg485g9Dhj1RpUNsJrWXh847quvmrkXXGy",
  "key33": "4Cz3jpSjcWrgrTEzrrPjXqKaYA4U64Qhd7CuGuDTdChHEMMVA7BZXPQShiKRyftDkGi7VzKVM3M2p4K8VL7VLdvm",
  "key34": "KHh5VmL4F6wfutJV5EPVJFTtJPv3UYb18uouZjBmDxsG1kAwddr2BoASGU3t3VZH9nwh9MPq14nsEJbbiELw8Q5",
  "key35": "5Vc4ZW68mRkSSFaHvxB8W3vx7D16mqYCuYuZeY7iduhjfqqa8HQYnbt5Hibkas4aBfva9KoY6N8zBsV8XeV9VEY2",
  "key36": "613AohkFGYDY3Kf9PE2N4Px2M8dXvgWMLQeF4tLEhkgBaEuxogG5CELBZ4GmKzboYAXbDK6cdCWWLKYTYAgbF5JV",
  "key37": "4nPV8vFSxwwwwmSHXGBo94N7TeJeXZ7aqAYG4FF7wH8naksK8rdbX6ga9NhRahfZp4AmGVtr114uLnHXQ3Fsvnjq",
  "key38": "2XzBTJ6tWMYacYKG9ijziUribwuQ74LxWudf3TVYDRegb3K2rfNXgm2XZ2fWz7Svd5wsrwmtr1cL2nXNHJQQQR8Q",
  "key39": "uNfz3cZr61q2TbwRKdDPxju7cSaSnnFgvsacRPrspMKiyBfBtvqxGtVRzKcsQxw7zRx3so1u1okQYPHXs7uWpMk"
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
