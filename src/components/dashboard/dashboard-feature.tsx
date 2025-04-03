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
    "h7bp9TvLmDsjcAaHmMkSf8qcTYo4JGU6pgHq4z94MsvdZvXYPB6JscrWGBhyLEwcJatwFPJomymwRvsvq5ZSNTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m91KHUeAw43R5dvHzynaumcPvAa1yZbJHDpN5mK78e5osURsiDPjm6UCctBSzmNYFuCUigyyj7RPd1tNJ131iRr",
  "key1": "4pfPn5SDaCkuqexxkx1xE716hrYp2bQXVoNUnAqVRaABgWp3ubfsvyJvhyQaeVDcXaaJJpEfJ2cXMJco1qpWYFSB",
  "key2": "3poMxeFKD1LwCbWmp1rNnagREhtXRVXDmj58sgp6gWJd6pzjh9ixs67UzTmvNSSXQh7fQzGn1Syz6W8KyFStZ64b",
  "key3": "2MkoUZVB5vjZkuzjKWicd46sCp3tvoKnCrBpyDxmbJj4y6qcCp5pn4GpXJLn7evQzjW6HiBtPKGybUJB9qjmKzr3",
  "key4": "2FCe2D7AgeUGMwyMSUi2LTe4sC4juCbfqG1FVhFXQiMAMPVDQa2ziZeTaLLb37SmyfdBfFW5aiTpCrdQ9x7rzuT",
  "key5": "4wVLQ2SGo84Ae727oRhy75o4eoLg8j5PiFUCK3iPBgdUBTBArs286oXNGQNYc7HEm1AzbVm3ETmdiSsZq12Ls8gj",
  "key6": "2GpN9ThtJa8bPV8XXfPDLjHCYbHMXj7d5J6veUjK13UV2biTbVMcc6ZwhPTzcbtB2hTg35M3EMMip9XDPLR2xreF",
  "key7": "4xogc7MQ1u6MM2iHEuYqYbzv6LKxrK6wiPFZXH1wAKuf94WBXb4tYk87JL6yaACRVrNkGxGY4f32Kxy8158kXyCk",
  "key8": "QzVz51aM9FueAkHqrvVAh6Z35ov8bFF5HPP3AmY47QdouCzbnvPUag16gyS9SfgbMfiZEHQehuByLA4zZgkQLGW",
  "key9": "4WxbkuJx48BtaddBwfWuy6zXffSwD1TjSG24QiwzAw2fkLwCjSjMyL65DqR7nLSWVCrrA8LK3jbVu3uhs6ct7CQU",
  "key10": "5jRYWWaeYFrPD1sc15PERsLMy6FGrfKB8hzEAj2nSjviPQeZujSZ5zrnEN2RUZgNL66dLcbaG64Ef53tUpA1Q8Pn",
  "key11": "3oFP9LzjiyQou1Yw8PCVKbjVkMBWsDtTY8yP5ucRQ4H7444SRjJzMmfsW619XnND2iBRfQyR46xakQAkP4HDide",
  "key12": "2yAzvv9eJMtx1G2kBTdeqPrrYu3SDJWErKnEujraYmjPsLQRxvTQV4VQ9wbMxayEQxT131KpyD5ri5bzzGLZRdcX",
  "key13": "5BnNMEnmKRsvFK9mbx3rBCCA9oXzkDjUQXaq4TjcD32zFdK7zp2CwSapEW24P8m7QkVb4TdfUzydm9LsS4z9o9zg",
  "key14": "Ab4RSZitSbh4UPLkbXdkmkr2raFkuAWG8XgME9zKXTW9GHs9khQ8P8ibdXRzqTFMDdwhgpbZ3TCCr8Vick92oVY",
  "key15": "4hSXJ2MqPQ3rVnP2hyDhRFu3P4NUkxq9QHyxoQBvqJPoetSHz18GtptnRrGRCpjVgdJw8N7hkhKRu5zbEDgJmtGM",
  "key16": "2hMqhoadoyak2SjqnWWvEkoxppXuiRVpPxSu8uBQWk5NuemmaAqzJZwnzTXEgC9CY6WBPnJybkncqN7DZCswexYw",
  "key17": "32qvXM8xc35dwGWC4SqBLP8Y5XzSp71MoZPEw9XtUNoEexiVy6eA7YSUyizCAJAeQve4TWTrZArPGLT8QYvuzCzK",
  "key18": "8ABJQmELdWokpMHZNt1pNaFCmznA4tKDUmKE9Z3i6fqKEMCEYXHgou6Ziab3ahDXQegMDhL8hSPiHWhzcmm987X",
  "key19": "615SXCmZnWdZdqouwPrWytM443hBfXD6ktT7udYxNU79seZeSBsrSzNBM3hwRB6bR844Gp6Jx5TV6qyncwNVHy8s",
  "key20": "3ePHTrf4aPjffNtoNoXibpx5o92TD1qN5dYzyqkrYwdhZEKZkcxcz4uBjotyPUXR68MwL6vwRtKDPGXsa8eSNh8N",
  "key21": "3x2P1kmdF795wZjK9GBXS5S2qwLV5MwAC9PSG6aTKD7zLqXYJNyYrst9WzRMDZx8ZMz1AeqEKNSKwUms6rRXSA1n",
  "key22": "35SzT2hdrMkyNQ2CpNPr9ND8sbjBr4oVyBw7KFbLR5pQMJYaRNUnKhmR4bAs2ytaqZVszHpJKfqBAoLhY8uo27gu",
  "key23": "3kaZTBPuYmtqL2WA3VfBpbLz3AMVp92papxoWV5SwC1mov1Pv81wGyhT4ZX19JHfpkyBubtffieansvBVMcVn7PZ",
  "key24": "5K4Ad88Kzwj7wA9cmR2zaFjPM95kTU1XUpCGQjqEShR6UoisEXxs73boN9BxU5FcS7jh8MDzFNP3HDNHxVeS1QHT",
  "key25": "3CjSNUGZTPbFFNkwXYtmoGhtZjghMZC9mR42J7TZJ8ridMwXjSxLrVD3GmUW6qsB229BCaMf1FmhGk5mVwUVL5cp",
  "key26": "3pBk83hpLh3Ud8tk9ZwXuvXcSo1DWyhdJwQGccNtd1uqF9TWUJVz2XtsqPPcbGEM2Qoy966U96LEXwnwwpWrxUu9",
  "key27": "4m4iav8J2pmmPr6WkthhjfPSnYEsLuhgBZD8DinSMEPZpgWzSHohRVd98Y7rHF5o9HkLy2HYAMLhEdg2uJDpd6oM",
  "key28": "5v8Y976Hc2ULN5gX1QWvM5MxXV7cBP8KcPbAk12ssjPFFcF8Rw9dbjVtQf6ijMBQa4yY6KiqvgQhiaAXicumy392",
  "key29": "3pnHwXumRoqgd7ShMMDLj7MbpimG3Ldd7h3xhsxdeJVa9p8LX37XSZzSqgyafWUnHAetEM2vAzpBEXY6P8nHq5kR",
  "key30": "Mh6QoASJJbpvXdtF148jP16z5Qn6N51eZDnXoyQ1WqYLNTxPDwnxwzaHXTHuFejcrKWovRzaXC4rvPbGDQMZrDS",
  "key31": "59cjeiJV5CU1dpKx1xZnxnB7eGhs4KQKiYoWJHiMtUx1b6T1X3MxYzce1UuKA19xVFrqXYFA3Zch7h6HR4PNzdqN",
  "key32": "51P3zscVVRJXLy4j94kP2PNe9kN1GE5uumAF9v4Yz1tcSzfRTnwPuanxuDZe6DoNdrfsaaXLaZNnUgsSpSR2xdFy",
  "key33": "4iSKNydM79yXgFZfj7r4RELJaXN6JhQ2hMUKGGwxebLj1KdunTENYMM3jTcpRhvxqgBxm6YSMqK2sW7bhNDtVED9",
  "key34": "3YWJQi8h25UXtmrYqDvMYVbGaYbGKcNWVfenaBGefJTo9XXyUXzMTLJPN9DLQUZ2XL6zpJPHbDh6dWo8wwomG7YA",
  "key35": "4V9sjH9FnWMMu7rn7k9cDeE4sBEf1mR48gWRYKtGLcX6XLxT13ntNhRiWLHZXoeSrrX6WiC5waag3Shqby1rqMDk",
  "key36": "HbiKPaGeCKCw2Ta5FMbrT7kUBCHmnJsTSAvurykp9FT7rvQ4CMAEfz39JNbnYQtEirUN8FAAbyEraR8qpCRHYB7",
  "key37": "4nwAGQq1TggUG46PGjLcaNxR87WsfGuoELfhwMge6WHGt9Z4XfTvEXrE3eJ3e8LsP8G9r1iQWsibbQwsiGqkhHFp",
  "key38": "TcafrzR9HNJBdzNjHs3ZfWHjqpKKfaQQNFUPzi22UXbfn7gGCqcHYz48VpB5VFCMEJzhnndr3J8XtR5p6QMLuG6",
  "key39": "5Y6JMzsWY74rHzN6hBidg4J91toFVTz33EtKtfNwPHTM6g47jcVAvi7aL2UmGf2smpaL9xE5owjBKcDsKnuR3MWc",
  "key40": "2xmVomigjmf2eQYLKw4UN1UW6qh5eEuWnzxVpLKdkk8TKntsPKg9UWK7hTaytVpndHDoqcrczdk3odtqAXL8xZz1",
  "key41": "3oPjp2Kwfsb78W8CS8RjmZ1NB1TqyTzq8G2ZdEFTMBpNEtXTtTk9xsgC7Xj2UPZgvqZM7GJ7TttjmGbdPG4iffcN"
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
