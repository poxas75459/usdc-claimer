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
    "2D3PJsRkjzNukp2ybbbsa6inELadfid47NQkruHYWVszAzFGdRC2HHgPSxyEdXv3AVnMeho5PghWqNV4tHeyqzJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q9fBBQ6m8H3doYauTmwbt1U4a1STzPeDuPSNwDfjiKCV66tJrzekWLEGP4hRqjLGZHs9y5NxHX82aftVDhoSHB8",
  "key1": "4SeY7t7h4LdoBW8S2ZhQXBgjaFm7NsY5pLkrdw3kL6ttZAzLHboXhCNSp3vY5WbotvHh6RouWVJwp7SkrX6bmnsu",
  "key2": "2XCYL3tCubrTzqndoBqNFH4g771BNrNorFLNUPsdnP446xStuH1Ru1GiUxCWrm7CyiwCna7kK6MAtffQUTyiqVg5",
  "key3": "4L5GHBSfXtFJed8VKJp3hjWiYCKr6xTTMUtGBgo2Ehu4usbD2S1KFsriqjGgda5zdRqJpg5k8fWVf4Rt78vQGJZ1",
  "key4": "36tETH8AHHVwjLrUDS6UPpVWZGYNxL9JZJXfoQSZx98iqtU7T3HQr8NBaoiTj11woMCVfVzzQuaDECYKZecBdB9X",
  "key5": "3BksimZanrrmf1UGgXECUVSq4vnZxszJp1aC7VQ4TFPpdZEkqKeNHUufULvyYKXJ822akdUmPVxEaYsUqqPNGT49",
  "key6": "981kdYck2oTx1muefF6nN4wzDw7huMYHBySZSnqyiEuC5iTULLP3LjcnDftzXUpM1qBVtXBhF76YLBuGUaMBgDW",
  "key7": "3C9LE8o82jtn7GghwYKZHXtQjxdQc2koyEF3bfiQG9B4Bjym1oLtnazq8eTw2HVVtvSSYxqJPeja3CmQVipfrJwK",
  "key8": "5myyXGSk8gSngnsZSrZNthZzyuwDNbJ99zwGnvyeiPd8qcR6FtqdZUd7M38GZtq9Zd9Ne9BN8tZ86uzrCLtyQ71x",
  "key9": "2frCyk7zT4GwDDjPwgoF4v2tZZeqwsU4noRsTf1JZ9dxf4AtaNopQ3JW818LiBcmpb5azYf8nuJJGRddYBv3e4d6",
  "key10": "5ssHjtAoCJQxVyjq6jdcua4MZPRaDZpfXTsjeq2DJeXmAos5q8SxBtepsP7F5YTVP5ZvzzyGsFHxh3vmFDqvAY45",
  "key11": "NbivnUiq3Kie9ZqsDusiEcfLHNn8rTa8chvPrNmeT6vsxnJVtmFekL6jfTRjiVKYSzSCU8goz99bxd4rDJ8PpWK",
  "key12": "3F6QMvy3ursbCbBn72Gzv3bhDhoyLMVGochkdCUSbVoHYg8QTPPacV4GsNH6tu5dRNDnYUYmAhBD7HUrLxP6voYL",
  "key13": "4WEZv7Py14cMX51sa6w8MgsGNhAMMr9kMicQtYeTNJsTwLn79uA4GaZ8rkCAdtsutsx2BwioSEtDWqJcu2w6xqfJ",
  "key14": "x9cvBbvBwxFY8JDLWTkZEVhKHFCCHgjqE86rr4sL89XiinH1q27RopobMKv4QsLSk12BCtF1QBPvokCzfu8CKGj",
  "key15": "3nZFDXkAGWLpPDuLAganchUVCwDtPjsq8fJN2vDqcffMmCZtwVNKJepm8ERN2KmYBgnsQS7s7rwCaDQ6j1anAWZ",
  "key16": "Lu7F7CVeVbj71gYbuW7fK4eoKCzzP5X1nU4JdVBpwxQ6fBrnGYGuJ8TSdhSGMpwcL2hfYtpyAchCLzDuWqbZxUX",
  "key17": "5tJqodR7T9aAnGJHffkVtFd3gJKDw8mamBRyGi4hVxxexLLnQR5VtRv1zoT8G6u1Ha97DAdFWhgjRHFC8sX6PfxX",
  "key18": "2LJNcQRbNcfNwdnMnYsAkUYiSKegGMudgiWqUrXwhKtKzTj6BvG4dm7TEdvVrjFLQCc46DHEqMLSyoah83R3FtW6",
  "key19": "4DoiQ2MpTcwrH7ndzLEVX2iFiY3Abs8dubKWStVYVzy3fwWg7ziQzv3KAk5oaWCU2CkjADUfzGjxGu7cRnfKTVru",
  "key20": "2WPsjvXLm3eBqxvJtCAE8RYcvCL3QsZM5vHQ7G1WdMco25VFk4SHPuyAcJGpeGDAHpcKg4GTec8yskthqGyH54Ce",
  "key21": "55cU5Gg6fwwbvDwNQiFsUh1i8xNypRkBKcpgaTmGTT7tGro4hiAF42szYBKsFUSP7YjTbvrNmeh8nxz8W6vtAukC",
  "key22": "4UZFDhLkLw3qyvPWTtFXVrAbYfu2FyNQzbV1ATAHJM34itVkSGKXC3YNtgkE4fJmXbGRnskit9QQ68miCEZFt2x1",
  "key23": "5drBXg1HmDvzRCimssJ9dW2aWJuzJev74TE1GmPdV9h5ybVgP8N7QjiYedBEwUU8YMvEww5XKrRrpgYEwjdYuPek",
  "key24": "44MEGz3YXQvqUKRruuahcuSpdi32UnwxAiFmHa7HBch7xxSAmsyo18Dcyi1KkR2GUskTEAJyzBMSVT4LHc9cL5SM",
  "key25": "5G6wj7DdEtBGYBNzemBQvQ22w3MzWKx8SvZKGHDZGPp7FzXQ7g6SFj45zzx78zSqRUp5VvfLjFANdazTwGPgcQpJ",
  "key26": "ZjR4HRrsVFBSrvFp4rYMYAukevsdaTaZL1BYYZdDd1N1mipR9EEaKne3RkcQEBNtA8X5Y6Dd9fr9YbEFCGfB1Xf",
  "key27": "AwCPveh9U9Eo4eCZnSADkz8HshJjdaRpDoabyv33pEXywSbH76futqD7QsotetqiKXAwBiZrEDRc9NxAVg3DMVs",
  "key28": "4CZ2odSq9f1jE6rXBzh6g7J3aF61LUhPeaN5Gu24wWXPyZmQfoYam3QvMMDxX5A58EAAKpTXx5CSJb7SjnUKndzT",
  "key29": "3iorRYeEyKA8WzyYSAht8eHvJbrNL9bg6Z6piExr38c4UKr1Dwj3TqtvJDayJF3TLi8vUBAZNB3rkwZ3yUeV1cLm",
  "key30": "KpGKjjmNjV2PTk331s1v8gpdMSKbkvmXhaJ6GxZVys8LH3nfTSvzNSbM8t5gTyfgiKxTqbD2EnyoYRmfe55gEJ2",
  "key31": "2LepkobkMP85cQTn7kUa9ui6mAFZjj5ad55NK7btvRou5CtxkFufec5qDtHCLnB1wpBeHXjguhGshWcm3f7NTbvk",
  "key32": "5mruh6dWpKihDta4phCus7NF3p5vWFL8fgnwbWu9yuAZfc5szKaWB77e42knf8dp1k7n7R26v5kLhWeoo5psPRob",
  "key33": "5JKA7gB2fSTD8mkr6ZiV7eoB5x9S2P7domutNC37JpZDnqbC7E7r9qbeRP9fdDwg6q5rLnH97tMazwenRj48u6LN",
  "key34": "3SV75qZCAuUjmD2W4fo9AW7S7pqcboJX4yRetUku6vRa9sLBCEVgr21DhmExfFcoWRRZ2gJfeKajuJxJdW7c4UUQ",
  "key35": "4PTj7xXS1Qb87eGJVo6qTvEWuZJVJBWZobAzUD7BMbT65afokSED9fB64Q4idhThfW4Yc9ZuvH92dUpf4vrChwXC",
  "key36": "3vgxmvwWzeeNr6uHYC4dwMgp3A3ZRWp8BtdkGnpHDWHFxrvBoNVzAuZ8Kkj12Zu3j2widYMLJ4M6KkDNnmCcB1S3",
  "key37": "3mU3FRgq9SZ4zoDcxtZVTeaohtbbKkpLVq7sVR14fFMgN6JwseUSgiVnoVCQg51fzfvQ6zNHgxAdf8pTc7tYS41G"
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
