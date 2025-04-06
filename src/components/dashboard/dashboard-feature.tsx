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
    "516Qrmu7qvn65q7sGnFCLqrBrLH5SGBexoRXoAgX2eY9SFfNywkA5hVrVQhB6m63dFppgkoWjoU47zJkQ77eETFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G5AwqmJ4xCeLQ247SHyLjw4yCWwdNACtjPtjsFjM85BaCRPXuHL6Xi9pBNn2DaVr8sCQMR8FNdYwbMZDVwYRy1y",
  "key1": "AcEUTRbXGAzGzQkTpmCtUmvPLoyCtpestSiDr794nrYKDUPYoZCSC9w9di7xCkWp5p4GcxdH9jrHkcaPcMyjRVQ",
  "key2": "5wJTo6YsNxKPWZD5WiTdPQRAPBzTxLbwWPVvKrow9zFGQw9wjMRAK6xE4R8PoS9wqA5SN4qRaWjZL2rBLZ9TBNZe",
  "key3": "4HX6f58UUF2MLERunZZ8gFBw4hJeXqjtdn92yPStPTCGnuh2u56Vth96vw39m14S4sofvSQ9kEDp83fk3MbBew4W",
  "key4": "3xAuLA4XTnjxPjJW8K4edkCt8qSksFvA5LQNxnaHHXNpWjRM17Xp87RCuKtJkeDtrkWjurvur3pcuHwL9BZMyYVZ",
  "key5": "4xLrJNhY1ZSDrqK553YJdKDDbQ423y6KDJghMqY8QMHPjXadh6Lj2cgT6vzCxxooCiTFJqRfUfBEegPogML2R9dy",
  "key6": "2NEj1r9xuMYpLab69ysbJ665pzZuJGrNFkTsgpjnvPL3R3HQnEYk5kj96GhFxHXuopG5aBwSXRVoJDtQB2GrW44A",
  "key7": "SRuAB9jPdmzP9bYC3be1kd1rHejWrsu5ob7V6wthWFYbvB2EDU1Za5yk2yUjnk7bAgmw2d4cBzd6uquTrmpMgVv",
  "key8": "4PF2JPXVLw3SRwg6Vms9qRQ73udHktUyMZZDqM7krr7oGSfNE33vU1RuyuJdJetpX2NgkxH6PBRDvKUNCrWaEjVV",
  "key9": "4ByzgCDMBDS7bxkZBKxkYWBgGUoAwB7mVMwK9mm89jpXDuvsWaCWj1xcX2wc9ARKXS6owBQmsFjsNPjnvrec5k7d",
  "key10": "3CWGp78PtNyajMk2pZzoT4ZFSU5u6WSxXp2BnPS1N2nAci79F1MnCduHPQhSqseed3n3p5Mxjn49AUGqgNASWdtE",
  "key11": "3JPE8xJgPwkt2RE5aGr9g2QkWfADWE6bkPsgMu9vZMqz9dzijUoEqXpUjAhCmhBxUKnwHkjf48dfFVCzUKahVffM",
  "key12": "5kJYM4K65KjcLpFD74yRJFrEferfzPcKythvSnvnT7K5KXYFQZ2DBuKCCErtta7HHFJz15qEHVGf5ngn9niG3UAM",
  "key13": "5TBhQyorGSwKp3xtQNawRupgaws9qJPd8huQk2Z3GfmRgD9aavH9K4fFXPWVBZZ83tLo656it6PRrBxGiM78Xs72",
  "key14": "5frL2r9MC7VNyrik9pyL6iQigmJNcnTmJzLuixfVUQ1W19UhHRCkthkvPLUc1jS38rB81PGuUJSRS1NMWmAZFUGq",
  "key15": "5pb3guGRiTZLxdUQ9J5xhEBF1Ek17aHRhWEEumiXuu7oiDdiNoiCsyMZKuMf39yG6Ai9D1uJTnZpFNcjs54MkVFo",
  "key16": "3egXGvRk18G3ufDHsYzZxAHnaYRFo9JdeZmQeaimMa5jhtKHt2PJpB1dNwGP2g1D2hPwNhe6DxzFrJS5S78pxRUt",
  "key17": "25YnGpV6iachfJbVK5Q57Cbr2jqaXfGoeNw9Qr5SwtKmavQZ3QawSe7G9zLde3gebBFTimpoNj6EUcMbrJ936PEq",
  "key18": "29yUAJ6f7yUHTDvcYd7EsA93ugxrNz3LzfRU1zxKMRNnhvCwtZ4BKESkmCRRbXmqhqurownFwrvGYGfoL9ZRg3DH",
  "key19": "GyEbgmwHP9gHozPMqJVevyzyPpfZ98ykf8996x2QM3DXDn1nB8SwHQjAq74bxV5n6DVukm5YvuXuCwqgNiNev4L",
  "key20": "3W5yj8U11zGak4QX8rAAA8tFx2vh1oV6WEdbyEMQjPYNLrfgSosytq8RGTjzMUgT8ddBnSTb2yGNrqVFNJfcMATJ",
  "key21": "5mmzJZzByig8ppHTTv8VFzxud1q9vJ4ugJiMrAs543KAoAE4v8sAsuzUJ7DzM5tSh59487TR8KkF2QDEtjC5u1y6",
  "key22": "zQKcrzWuPnwWuumF7KkDHWpjhm93hn3FKS9nQHt7uTW9umzRRZgLnwGekMXh8Pej9KiZZHUFyJYUMHf49wQqnHD",
  "key23": "32iNxuSWTp4HzXzEfjoH9GgvRHPxmJTkKBxgwr4jPLjbve47fQKpdByeyhbofZfE12tKRdGnHE6pYm3xDrW72Ry5",
  "key24": "4KXaTwhQngQq2mU5pB8UmdnqrptsMdUBUDF7FQKNxHyJHewkYwx8a87uCvCBViCXki9qFBjTfAmEAHq2zcEvJ36x",
  "key25": "6669e86v2oJirc6fqVUH2iEFgqxwtPTeLBuneE9fSFFuXg7bmj1njGJydKbH6zdyEnqPEV3YExA8uVQrbornU2L3",
  "key26": "ymNBpjVrqk7vdygkM5YFL1wwDQiEJj5AJSjgVrDvodnDfzWJGrvEpqspUgNwuBZ8ga6aXUZfq1nt7VyViGX9uNm",
  "key27": "4EHW9dyVzXqwr4xNebBK2kY6JwWCk5Xb16tTX5HU4xC1h312TAnoJetfNk3UqgkAxRr7dm342XnUa6DRkPEaju1v",
  "key28": "4toBQ7mbdXeB5d8qCFZjwhVYoTH8fyJoYrBzW5TmgT4ZvgXcfrUQPKgmvxyxdrKntQpeTNH27i4p1kNX4wHiRnnf",
  "key29": "ewN86Yyt4cT5iLvUCopPtbmj5yBo9DfFSdqHWY66tDD9m9q82zNdLHaKjbMDjgQRtXp9A5p3WzqCPNukgcfMGaP",
  "key30": "2SCHStMAwTSHDb5365Gjt2zfKZuR4QJQnj2CAMdSqXwgu5LDTUYzkoJmoEcBCDK1TaxUapeTQMovosvJt6TouMAm",
  "key31": "Bc4n6M6sszyXFRgHvEZJ8Rwdb1KDiheijYPv59qhg7j66Ca3NBPENtXkXQB4xtecyAnhfSVg5nDDeMiGvBrphFD",
  "key32": "3D8uBqAGEgZjhnkYeozDgkM7F6mDuxx5DwDCHzMNHg6jbv2kFa3FaDQoCFUf7xcuz6w8FfhrCsAVTFzrb3br4ct7",
  "key33": "2ocPKxt2iQUYyPWQSneCsBVzmBYiFBDmsjEhnKkPTRa8ZPJFZsqHMdYCqjZ5i3BwDhb2Gq8pQpt6HLdJFoGcKSXG",
  "key34": "BvSnrp4VGDa635sUAzZmGeVMN6R3cbtezMrrBGzKKun85Kuy48iAzcNnzMXavvCzD7qzV4246zXDmuV6CpLZEdp",
  "key35": "cKSKd5kQycyejroNqh9k7M1XJMa63EHwbRTfj5MeYkPi6nUDAf6iep4PrzBfCAVGsHerJcciXL1V8XYbXNLf9Pd",
  "key36": "32FQbqcSH5nj6MFJ1LJrJfQzg9FLE6UuKevZSjqzL3CejeKxU6jWe1QKgY8hLaGeaaKQHbeHe1vSvJWHCMH8JX2R",
  "key37": "5LoAGrKcmXJNtZgDKs9zZpgKw76SXdJeC8KbE4uLMsDphCheeS6gCZ1B9S3V97mPJhBtZMZJVbjEgLaamPWVNgfi"
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
