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
    "2jmr6sMrFjqUBCvRJBDzzfRB7cUmq78uftrtzV26WdUB6n1xkipnbbJQRUDuGwTYwvr2eYcMrjBFrKUtSFVBfa3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kpXJAXMQtFfaziNkj8KZ21KdUgypXqK1KcPzUuDHMqNofiE2AdtsXGy2oTMLhDJSPwCUpZcZVSpmpY2j8WpUYw3",
  "key1": "onATNcQKqRgWNkpYYQ3jJNs2nDBzZr5U5HcM3MXkZyTVA6czjvJUjS6Ds8ybyTnyQ4Q8YUnHLzWCVdQFp9dih7J",
  "key2": "3yjKn9WMCPpAqw1TgXGXNucKiMJqM2tvYkPhbhoaaZAXoWMHZj1mqepfEURqnyCMArAZDK9AzAGU35by9kJZjyA1",
  "key3": "4YxxQtqi6ScUdJtaJTcgHCWzZEnN2V7BPeanXtvMUn2VecQk9HKbGeLufrDotv4n48cXui23JVSSmBHvakozVQYE",
  "key4": "5GsfV7wvgZG6vtt6KzHCfgQEuh61jNzutaVU3jrNFeEKyYoxr4KDW3Tvkqk5SLF5KW5KRJao6V4rjvRk64KNboLm",
  "key5": "gh78Q9W9N5rzRz8vVv5A2LeGFcCkmcjkwVcEe1mQ8NtYXiFMHHvsyPgf97En7r6txfGvEYtSGXSokDTnmoYtdKP",
  "key6": "VLfhm7FP3LhsSZH4y6ij2JcNhzZaQAUCvb2oqdKaDDpW95uzH4VAwbkh8a7CH3DbK6QVpqrSg4kNm2WRxpp46Ni",
  "key7": "442P9BqKc7mvttU5Uv39VhUzmawUa51gFggh1bzSWqYKZ5wRhDj9y5aV3iRPjyD7vD4oxLWgqCPKvetX5fT6hk5G",
  "key8": "4i9vhhy1oQA1BEpDVYuW4wJ2WWt7eRQAxPajn2orgm4aS8BufuHE8oE5eHNB4g44QHUZSyUEHm5JAHH7biKDz1ER",
  "key9": "d3c6FGWwrsztaUP89LqU8FQByEhUEFNf1nKfjPNGy5G1YJ98Z7ShTgcgeQqAU4Xp616B3m8tz9hQzN9Qz4K9FYC",
  "key10": "5hUcukznzWxM1zxmUZnbLDy6VxUzTKDUBCvuDz5ZupdRFc2exxNzznzXw2GTD3Hr57kmkzPR9mrLMahXKc2ZkGAh",
  "key11": "4KiBqPYZW4SQYx82ATx52icPfSKkYvBfvf2wGYseRbUcgN2Fv26tGfLGUQu1Tgz5qYz1fxnCC6tgghA18hDRgFTa",
  "key12": "5VhmT88suxiBtZ5dsC4wCYrNTDjrPCAuSAEfytvHtQcZoXaKSG6PicwAJyLVwQg8225aVN1PNW9ouBmGoRJxDkGh",
  "key13": "5QwpmEqTyYDiUJRmwUJ71RBkYBQyxu5kmCbHc3vQankQHFPzU4vB1vVu8v6ar4ZYWeiKXnk7gEPXMGZhu4z2Hteq",
  "key14": "65JXiY3KrMxv1wmXZU9zk6QJzdAGBJrQcV8n5vR1Cd7QCU94YRsLHC2bA83hTwKXPpwij2RyZuDPvhf57Wdka4WZ",
  "key15": "4EipaFYJQFvTSg4xptYLnPNjogjr435f1ArR8VAYPeyZNNUvAedwf8bD2VY8iJzPmvY4MhKQeL4B8j2cPYBuB5TX",
  "key16": "4HyUdoWPaQAjFxZojSUTHMhVquPXPKhSyM7PQTNRR1zLtoy7h4dwCZsW2XDVYo2VRRQVJVqAUnQNBhMtGLjiJtZd",
  "key17": "ARTNhR4FYhxrNjkkuWZkf4vrYLJpRfWGGjhiud9sArkaWUHu6pKU7wLMbZRhDbwTheFf3AtpvJ3N5Df8YHcPUZv",
  "key18": "2bfJLoE5RbzwAhwwYktbcNEkKyAYynptL5tufQCJRXbyUX46EHGNdm352wNJYW8mrA84Vh6NJwGRfEMZ6GwFe23k",
  "key19": "312BWDKtMp7UvnVneEDh8dxiM7U1pq1UijEvGxVPCaHapXutxPeQFm7qqWMn7Dct6459scPghqzoLWsxyLuri4FH",
  "key20": "2TKb7sUdp7otrNyKkatXEn2azmM3UD4FEwrbRk4XT7hdNotnDwX265gSK56Fyx6EbeDPpJ1164f3r1xGVX5XkAug",
  "key21": "5Fhp4Pmt7ZjpUa7WDLkjAw2PXjniaQDLVGdbMbVT4vnNd9hc9ujzLj7uqRzHbrnXMwdgS3AkndsZdvAbF9uMRCLa",
  "key22": "5gX6kYJCWnEJJ58xy9VZeoJHq8H7xkcekLENAsudWWq9N8r9UBw8SMZ4MH8rXA9GCAoVEQr1qqRF9tBJYj38ZWxy",
  "key23": "2dMEC5WYYwxc83YkR4sY8AmPGK5d6goq8rz3uw3km19rNjJYWope6PTxL1ZC6J478Gj5GdE2hK4sFjTzuNCJfSfH",
  "key24": "3w4XNUMCJbTYfwxQtVxrgH3k53FJE1HXw317yWtW2D8ipj2DJxPhi13evy1H9PEy95W1N2fM7Nub7fKrReHMe9VZ",
  "key25": "5q9jTe8CdXoZVj3sUxFv8WLaQv6y33GPbCDGrUq6MBTFcY7YS2yy4c3bhAUJ1qgTesXguHRf4zAKhBj4LTK5NRxN",
  "key26": "5936fCHYCLYNGJZ9Jr5NTCcc6Wi84jUuJoxCCqRE4PEjai2cvrpy8ioAuRQeT5VPGPVqhNvNUDU9s3A46X2ZE8zb",
  "key27": "2WXg5vSvoEXkdby65XUUExbW6NSN5LnPM7fxzaHdWiAu4gaYjTqAnVCox1UydxcZDaMMxszVtU9GTGsop4NVtYUW",
  "key28": "57Ex5kQq13NZsJLZgbL8fU7pETu2TKerTvL8ANFLAxD4FeLL8k4UeU9muTC5p5LaZ4E2ZPAUtrw1R7wyZ1aNCATi",
  "key29": "3iUgaY1tHHY1KcHhqweQJyB4AYejoHVte6zE3WNTWugPoxv1W2FxGiW2c2pWh8XKMgusdDseYF6xbhLkJNmnew5r",
  "key30": "2Wz7ifvuViF6wRwooZ5P8aWBME3uJRvrAZDkiZxydkcaaSe836SNS8pYE968qpgY4KVyr1iTfPM6VbtU7D8sQsZV",
  "key31": "5KPdMsWfcytL4kveVmLAPkStHLznovtbT7Nc3MzNtXxaTEQW5A7xLHLF5TxRvZauNEyFjFeqvSkwrt59e9DEK5q4",
  "key32": "3xHsmK6nG31qboVLhVyP5BBLjuZA6FP6LiGbVQiX7S7CCtpdxn497BFpz2ND3Pmf2WP3S84oVbHUf1LC8P4d5JSD",
  "key33": "2DGrFrniXkgzvAnBxye2F9s2Hx8NwZqN5fgbzn4zaTTsHGsUgUSJXM2ypKskKw4DK2fEWNrxBFuFREdBirLhEPC9",
  "key34": "3EvrYuM6xqUN7tZnRiLFXYaHWaRfMSupNTpvP9H3AogSrYR8SzV2C8ryooVNY84ZYo7TEKGCr6Rzhw2bUE813ki9",
  "key35": "4PeQhjCm1cvijfqTr6dvCyPngtZabCMbkVwcYSemY7sNgeFFwgZDCu7he927gytfsiKztHq6v4quq7hjQrZvrk4D",
  "key36": "TspXuh4JtXya4m8QrxzRDLm4Kpsjduxe9xko8VZbJrWtF4BFZi74DcdQ5z4rmCPuSydfqxGPvQQYs1cKyWxoTCb",
  "key37": "4opD3NYaMV1SwjKkqJMfnz6UoygfrUAQrYriM8h6DEEYNfUb76nU8SrdTXhtvyPKn5pUQeyKU5Kwvb8BBRAjhf8E",
  "key38": "2wVYH1fzGTgPLbuvXVBSw2kjCArksNmMZNBcwV93PDgLMk2GG2DbGUcbBcZM6iW7AmNhuF9R48erkpzqfTPMjADe",
  "key39": "2swEz14KLHAfgyHdUepww4jKtxVVQGJZDiXP1DfgksmciPWgYZSt1b7qkxHRddFc6ei9rLzs31cN3sioy1b2ScrP"
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
