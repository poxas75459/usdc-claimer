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
    "5KMSAFhzyPMz1oCik7zED4Z5JuLGxRp1Dejhv7xBMEWqdAB9vKDkgPP5WMxsoDfmykYPNjsSVUeVRJMRHbXQ8sRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qCLHpHxbcN5x5g88rqFj5wrDr7mV4msuCrtYKW17nxbCGjVdpWH7bKi7FixehYVfDRqk2nJgij2Ug31ZDzdaDyz",
  "key1": "4ynzEALAFfmGBatwx3MQ3ieu9wvVA3ABcHmHrGWMW4ntnRdQxpgt5wb4b9xjHmCFZ6ypQ8m5FHNaQgkBckYo4iBK",
  "key2": "2ZBYqXMWptZskrjP8bDfCB5TG8bvHt5kiG3X52BMkUE269EAwWUYBVbv7wNYUnyYY53xTyjXteaBF7c3EiMDs2x9",
  "key3": "4NSTBqesrr7xjUM9ieUBCUKbTQMPSjhyKkHn4tcxCV9hxcjmh9BZ8crHHqqsaYqjP1spVZZnd9RTsZWyJTZseHHh",
  "key4": "F3maZPfCfnYhT3r35LBoRcm7aKKbLFGjh1P2xA97CZ1MLFZCvC2zmY6BphgcJyUbMK2JKUEsfN8T8P2ZyFU25s4",
  "key5": "5jn3ggHwDyQeKsRJ5X1T9RNx2TCG5J8ubw4gKF5rwJ6Bfo7Cyvki7XzaLBko26QGy9JqNFPWG64XgcC3NvdvQeiZ",
  "key6": "2C2imBoVZKKAngASLtcA6HgfbficXB7QUagM4YPwxVBapLhQpPCNRwDyXLXx2f9FjQS6gcayt5DhkGjCHVJyxgYw",
  "key7": "2daQaU4MyHQxqPZuuH7mLDFDTG2Yz5P5pwd9esKvscckXrXveHzJE94i8ijGZzdMNwZPxVTgfP4KzzaX3emC6v6g",
  "key8": "3iBDqpdfKs1WFDCzHz7RDr8WxbDj2wgwqwSqQkWFgPh9Fsv7aVSb4mF23PgKHie9SwATDd5QEGzHqBniFGjtEsPA",
  "key9": "pfFhwyEDxUo6seL1A469X8euyuiSkfAkMBiqggaaLjwm331XznF3qKL8tbU5noc6WPiRvSeF3QKbdijrMqFcQXZ",
  "key10": "3Z7wUoqYLBRM1UrgcH9vp1tnBSLt3S3EuAC2L41Eq3f4q7nAtdFN9FgCwrLHRxYZHpoqe88PTGvEt7HHXKBgynqX",
  "key11": "2BwVWNDTaqXzuMdTjZdj7UxA3BqWdCiBzWbXAxjuuh8Pq6XzcG4eZB8xWRcSM56pHizqmXS544EdaCHYRqqhaThU",
  "key12": "2XqFon5UYQbcLYyGfndYwRPMsPAV9x6evatEj98i9MbJohkjybWonszJ8sDXaCoA7bLXk9YKN5beZ8FMevTjzeCe",
  "key13": "3yy1JfhGn7PyE4HdT1s5hWvtG1s3hH6yTV2DAe4deBJrNrg8A3LfdkULJkAfoPWdZnQm2H8Kz8hK1Sv2qSZ1F8jh",
  "key14": "PA6iXM2NH9zb2pzQMHgDgen355uPvcD4T3ZG86NA9h6gbjYNbZyR2Pc4D28eNFPbNyBbW1fLi6uEWwd5zSGtHLW",
  "key15": "4dcPZZZsrcjPQ6vAHvnWEeVyHFYWMBoQ8h2FuuTgDxxsyNADUWLmdp4skyAWcENQBFE9ynbU1Sr98avKC1GAkgQ5",
  "key16": "2cDs7NRhWq8tQRKoRH25qFYJB1kCw1h1RLfsXnEQVRAR63Kb6zjoKsS4AAAnX2v4upZE654SZEgdyCsXm9U2513k",
  "key17": "bjxPGCCXEf4PzEaxiKw9AQMdPzqzNAp4s7cPs7K36mp5CXZxFLm5fUyQLPknmFYN5L6cjATvTRZMk46pQmCnQVh",
  "key18": "5tDkwu4E9Bkhv9SBLRWp49rjNw64FcJLY6S3xE7d5QaxnkNccVp6Y7eAxNDfYpTJKvRXuE5z4iukT6pk1opAr1F3",
  "key19": "AJB1KqghZM2AYu2v7enrZdrZ2X3nomLaxZMFAU1Eunkvvyqi6gH34f3h319vCRdfMM2tFWEa1wLW8FGYeXLHfXa",
  "key20": "zPWFCdJp2goM5QupjJLPFbnUV8vdeYnj4J2hMeocXvfiK3imjzfpJ21EQBnUuVRXWPEa6fQ1FJT5LRMVpwLzbfy",
  "key21": "5DbdcdJa6xX6SyRzJuJmBrcCJffLs1HxQhS6wCac6gcqa6eL4o8g9nsvu7GQ5zp6XdCbpuHyqYechE6rTNSiDdWP",
  "key22": "2xR87D2XXPw7BaGTi6NUABswrZLFNsdhySsEH55fL2UrNz1TQ8wxdwKiwgEaysKKp4nfws1r3mXDCoWgZy7ix1wb",
  "key23": "brgJ7HMRsV4TJWtJBZYj2yFFLTv6mpa5poQkNacKEPK2bkyzs4ivQN231GGoHX7aZbJhg5zXuN2pyqP9jQ8UEL2",
  "key24": "3hY2gYyM2PdUppVApeJPrbhT8x5wU6MDhUxm1oJQxjsH6XJkfoVqedMompEWdEiKjiqDuSimgoBuq6JwYneQdSfW",
  "key25": "5AyctjTjXSB1bcYQt6Xv7u7sjAzX269LCW9YgsZdDnBPrNPLXjkvLdKnLCWsML8r8wrkpWJJs6G8vrkSGDPVDGyt",
  "key26": "4Gy2e7Ckxf2tzDwjtWwaSwfG8zEPuALZAkSeduyYnfSY7YvhJMhTe93DVSTWg1M5seiBFHpFep7WyTj5n2Ct5Zpz",
  "key27": "2h3RPReRQxJ4oNcEniv7VHaKyeRg9SvRQ3kYJxkSpvWrVSqnGznrrLcWrSS1hdYD7T8JKiTkNvCp1BSqh5F716Ct",
  "key28": "2WGxEPwiiC29bNP4wrZcvasCHXje7VSnpjZ15RT5NHvQRscUwFuyFKE4cD7sXLoRUBPvYmZMRsLZthakUNyPmBNC",
  "key29": "3JuwsigoN3J1k4rJmSMK3Q1tfH2Zxhe4cgXMETfNRqNADuiZnhyCEVE2LuX9ZYF6tfPj6aGvw4o59ck61wSwDVep",
  "key30": "5yB9FW2e96L4wKWwge9SaVk1cLcCCSwex34JPodcnKbQcKgf5a8ee77TnadQ5zSkoVpcNsgHGMiSRjkKC3nM1cks",
  "key31": "2M56UzEATWurrivzbwRH3kpYVBhq8h2ZiMQs3SSixPurVv4LMHL1hgvMbtGmxUkuVXn6Gc3bAFgqnbCK11Q9t5G9",
  "key32": "5xaGNmRyunpTEhA1doo1iS9P9BGbu5it32vqJARt7K5DGcnftNzzEH9FxRsNvonejmEeuXSjeVdGQksMdCTUR2ET",
  "key33": "3v3jdAuMvVs66dRtUic1VKk8kopNfmKRV3DUv6LLyu2E1PxHr24Kw1ejp3iNeDMNSJA9SSFSaQiuqRfGKZ2PLPCE",
  "key34": "62QGw5ZWfsLfyejmHhLHKfqh8KsiNtPKP3hcRaVKRSn2hpNbU2z2FqQtmDDbZHm7Bnko6MHeePDJi4bCNavrF3HF"
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
