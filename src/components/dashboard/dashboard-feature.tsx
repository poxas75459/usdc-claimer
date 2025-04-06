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
    "46zUMkSmCPbs54eR2pNHS3p9rcDtRvVfad9R2Hytd1Zx5EESWfgVWvKG3bVtZdDxup1nJMas61Xub85WWGrnJwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CyZMDqx9ZLL8nvd4ETNh36AcPdT7cxJHQRPHUobCxTpgveu6P2mfo5bUwiKjxs5bx2f4a5Ls6GNVRnbZrspPa64",
  "key1": "2KpNYDtWWinUdUvKn9eFAuLxtv7WenydoF1PY9KzVvB8RumtokQzJRk1E4PLjH8cDCZY6kFMk8Gh2gvpBKnPsW8o",
  "key2": "CRpsUT8nv79R6Sunbbx6Khc4hm89nNHCAnUFooKxGaH9RS8gzeX6GaXZ5NCT3azj9dLPjpSsG5LMv6exG1rzp8e",
  "key3": "DpQe5LJiAhk6X9AUEBzmaymsPh1sGGGFfJ4hjZjBUmgGBun7nWJZ7hSQK6oxCENRGpbi1aU6A2k86ozt4Wz5YNb",
  "key4": "58dyp8MGrxnRh5XRMqJ23EDw48w6LVNoRActzDiCxLxxTB22LeMutMHrp2Z41shwLpWZC5BuN6S35ExUjyf1moZK",
  "key5": "CqVAUFyC6Ear5L95PvJPsvxsZMKCXLbS55cnJyKC3vhUxCuUrx9HGE5kigLffuQbJcn9veAF2DufSZznC2wyVWb",
  "key6": "3GMPZs2xX1DaE91ofhos79DQ8ttFz7YakUym7VkzxVYkziBLB5f2K7iuHEF2Bbfz2vUYPVrD1Gjqjv9aVtXR1ykd",
  "key7": "4bT9uRcnECevkbqoZCrrZgcLv2qKBdCwbzZGsKgBw5abiyihqUwYTPFwCCMMk6yfWG3VCzy3vGjeu5xTgS1aiar6",
  "key8": "5VNarDho43SiqCSAFJrTXLePocYYBNVt2aqNw41HbEPErVQKfzSHmVomLXxgEwW1ZBfk3EJ3kdb7bhj2FgPVAZeH",
  "key9": "2MqkrLWPyhp5fMHZXWqVyLkNuKJ1ocAJjCm8qft99zQyGuwtb4qANgiL1SZuEs3bL6od6Ue3ZAHMrtXUCsda9MAw",
  "key10": "3oWUMjgWgRWzC4cDx4U1Krv6xUYpiWg7TawfojaMJ84k9ApTzLNm7Uy6gMBvFFUcm8d91FJiLgxXYwjU8mQEfARF",
  "key11": "4rE6W86E4J6X433a38DDdyiN9x3wu2sa3VGXjTXc5uX1PyVQ1wHVqJhcpgjKayCzLX1himUHq28sqtzSedqnBJHY",
  "key12": "3oPc8ftTXQeKoUXAUqFNdFRW9u3kaauuVKEwRyhA2Heba9U3HtyiM2GF2VDbkgmRVc9Asb7SXdmKbQhaEBA5cZiF",
  "key13": "4pzoPqNkmjCEqAhkRy2bbstbpC5F9AP3qMmH56bJW2hFz6LjBL4ghVfoonZvEU9tVHvJQaCgZEAwQUre3pmDCx2S",
  "key14": "2y5oX5KhcZuBEJyXXHVRQeMUypCBXZZE2XuxqTYcWM1Q4oGLPhdSrT9X9qPLTGgx2qfdLK6FStUcLr8AzuoY6TbM",
  "key15": "2coMU6XGifCTubHr2fyAME49hAGhtcacA4FUrVhDKMQYgBazxCLhKexYsijyQJg85KiKEjLnZRHGH2r62VkTJDXh",
  "key16": "2ZDvXQgrByXrYEdpdjjcwxATUDZwH4n8MhenFHwawDEZ9ZosLJ4YP5M5EqabxFnwoZrinS1SZ4jy1KQkB97aNDJB",
  "key17": "2BejdWcRjB9fQkAfkCyHodbS3zpVNaZ22K9hLNQDzmVrjedD8i715NFdcnZUAbHinZDNVykhZqfG8UtcSYNdmZxd",
  "key18": "2WA2q2ZwxjQfGq2AirBKueyj9wZquFV8jRLXmU6cuP1TATE6EC5Jf3jtj1biGHXdPnV5F38xGm37m72psHzZCPVN",
  "key19": "47EycXk4nDScM5PcyRW6vCtYCByiGM9xfh6FkLRQf488wQ3i57aXeMjA8LabzugV7UAWSAQQeZKNuvy4uf9vnAyW",
  "key20": "61YDQDrHaNWVD6aEG5LeMhiNv2m2aTeeVG692pu7yvbWD3wURcjoNbQeWC6S96wpBnH7u2LN53CnMAL5AucDTyeC",
  "key21": "2whq9CdHNyBuCbVSg3hmEZyJBBNEJ2CX4NGcNzttrLRfcUWwzZ5y9WRy4as35XayFNd79SqZ36ZwHXYd8tMDanBj",
  "key22": "24jk8eyA73GSYd3Tb9QMZcuN2d84qkPvEHeUgVD5mGzbPHcuaud6L6AGVvDDRqoeovYPTjUKk4Ev9oPfeAtjMv7r",
  "key23": "4yFeLxuJttK96FRP5VcFuoBRq4EdPHvicumjzdh9FRQE2wh7Zg3WMQPyu2VuLPABxZdNnT2smayMnujSPUcp8iPJ",
  "key24": "3gKU7ZP5tyn2Qdn87Rcg5efB6mW38MbvWxEiiuE11AW84HdoPzVUxFKGbypF2pCcC1HHKXQg68k61cmhMNmPdaQG",
  "key25": "2UwvZ9KXbFruAYMB5Z1tvRbCCS2mH1j1wiEhdxrBacFW4kKffytcWHSrYgdeP2anEsS9F5xBoHxzs2wVsXJ16PbX",
  "key26": "4QAoZs9RbPEUvqVAb47V71Az9GnNnGdgJ2B9gyu4degpUE5qn7mAQ5xhHWyCgPh3Fec5DCosUtkcQ4WHC5Hahwjr",
  "key27": "2vYCEzcL2KxVBrV99KMEaCTXqdpWJ8hWrtMsRZwwWBjrFVaXMeHvXSHSgEAg64Wy9UTTahz7Kaio9Zv2a9ZrRG4f",
  "key28": "2exVpssQ7PrTkzrNL2oshLznwhjyaTyJbqs9YH3VwhRK4rM4p65N6uhnomGgk4GK4mkUnUJobj54MNEJiN5rGiLV",
  "key29": "2rGzKC49JNHLmxadKsQEqufDMMn6PeKzbWXxK6af9wgPeJLPs148VU6WNs3ctkND3ByRH2nCmxraVaR1rSRpjetH",
  "key30": "4D5LAESuojQZD2pFNnLiurqgLRDGu8yBqD28AyV2efDrJbXrdQ69csU7nSuVTvzobtsRuAy2TQ7k8hFrY6xnSU9b",
  "key31": "NVP7DvyWb8rWVhgt48LLbfytgFXLF7dhpzjYsbrZh4Duk3t7cQGFbigBVD4eEc3XGCoYACTsZfKNWyeByXRk7Pd",
  "key32": "4PT4XSQXPsxHrwTgFncuEgDMH3anCdjk8MDQadspePJEAV6yWJiYBk1PRUYMXkjj8BCNQT3HWfLgnn5gbWaWwNF4",
  "key33": "5veX4LEyrZ7PYsxBjSzfuX4wocUGpmo1nGtsRxCLUXKp8oBCdboD7EcpeoYxqcw9sifDnPVZY1nvFhyVbhkR4pnk",
  "key34": "brzw6j8ao7PxRwiyhRCoo3J19xqJLzsukf5XQT67HZDmCR8qACRjNKmwUGMgKv7WYeSDYGtcU9Jcc4kqZSSMbEs",
  "key35": "2LXG3Efuk26ht9GTKiZZLCT1XjqHsJyi8Ma4NKuBYKcZermUMEVhWpx1JmUK7NJXe17LDNWQVhD9umdfBsuNTavY",
  "key36": "3GY4aYrznLbEvVAWJehdZFZtHnptSsB2q4JZkUvV5pihGSWEeh1PiYehJTAPAfCFCYpiBCjqmtqDkQG8ELSAmj93",
  "key37": "2DKUkzdh3bPeMpfaqVqDrMbGtSQpHaWusVqXjoA13bqUFGx89dpVu2cQ3uhJEJBRGJA7nHwiqZgowKNakrrBzU39"
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
