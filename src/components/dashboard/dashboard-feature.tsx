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
    "4mkdoYTLoB8A187FTSv5o5U3uJpC6x3FUfGG6vUd7NcCAZdGhq7uNaT1fLF4eX84M9Z1konzd4g2JfXKCXBcqJyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S7aapeUT1X8ZVSgifs7foXTg1MAP5T1rzQdKKw4amtr9FZsocXGuJgCsXwMpLary4dyJqKMaQyS5VddhE2KAhBw",
  "key1": "49WqdDPEZVEH7f4eqzWbtUuapegJbhnTbvCN7e38YN4UeoqPE6Xv5amtz2yuGtouNbxxLUrBzLAMUEdFXMSwuQjC",
  "key2": "5sLCFimdpyoqdYFtAQm8je7NpfvKF6wwnyKKcG185WxyNqokBRyVTRCs7pi8HEYT2Sar7rhcpi4uctZXfJ1LD5xr",
  "key3": "3vXKTzpn4oX6ggUtY76jysqtjGhsC2o7vNzVLYFUumN7dCSxidm4dqDRgQCpa52f1pZ3esV17y5v3ZxuAsTdunZM",
  "key4": "2amdByXSPXehLP4P6WA9Vqh1g5CD9nEwg2WLFLhXhQXAas2EyyCwwUNY8Ut4fGwv73uEKVRmwJGZ3xHsphKxqA7a",
  "key5": "5cf2y9Qu1NcF2Jps4EVjtTu6CpZztqRgDyspPv4iUq7qmmUViMxxsSDM3Vpwrv1rQaDGtKeAgSvkLrXG3w9PQ4pR",
  "key6": "3fRh97YLFnvdYifbCxbxN4rZAcJJqdmVAM1QgfTUies8WVDjDw3bxNp3HzqYkahh8LE1PG9hYJQ3jzwD6K3adqpy",
  "key7": "4ovUFag2iXoRfjpfWnxrWmJ2ybqUeyRkZxxPTMMekv3Hkazz6MGjcNTj2zXvVK4DyiVvp27EjK1Sq3dB1CT2fGrx",
  "key8": "3eDuYrk6YKbB3HVLemV3E4iKE9FHQFk1Jeq3Xi9aXdhfa9bt8NYQBncreThGwPWKbruycHKfwjqKtCFNwZZVJ4eX",
  "key9": "2CyuqVJFimYh9TmkxrSAtcsBMaCzmuLGU45Az6uSKPEDW3TWAwtA4FRjRvWcKr2UdEafHpEoxQbX6SdmoXmLgTYM",
  "key10": "4MNGxGz9ZCP1LL7cspR28DgEuA8qsnx7vz4fpkSxxZGuVQJ3GHtgF9nX9pTYUv4nw2HaPDb4AJPbLd9EbLnrdWNt",
  "key11": "53XTVHkecXxMJAhGZEhtrTan8UpeG8oojhYLrb1VERwLaEdaS41pFboyHDjhZmK5MAxEzgzy9qFVU1mGGApngPz",
  "key12": "4LSmX4KK9sTn1q2NSKRc3PtwegaivZN7PBH4ULSfh82LGfqG7ie8UbESqFUZ3hpXDZN8yJFsuFYxoHKevB6futVP",
  "key13": "4ctky2N11gqEwP7pDsdBUVs4SoYcMvFgprRNKB18bwGj9b93RzHdWh5vQzfkSgLjCX3PBtL4CPHiMg1B4T5LMXoc",
  "key14": "4EDsd3kE1xZ7EB2nY5iRRQhmGW8KwZ2GjVHFEei9VpDt24aGKvjETQRMXZP7Ruz34ghMysbFfxfAgCdVHCo9ZyZp",
  "key15": "4tWd6xeP8xi52tfpEqXuK77Kvqb3V3q7QXRAamEJdwCNqqitrEj11bSXNgt8KGKKQ88ZGAx5X88Sa4QGKcJmyBtw",
  "key16": "5RQg6R2i9LHHYZrbxMAcE6RMRpx6mc3rNW9UwcAT8HD32tVTbwXj8QrZqULb73Yg9u6PMURtDuJZiQ1BbqRDCcSj",
  "key17": "3WAHbUEf5ZEebPNsmQ5Ttw5nnXEWZZhKMj5g7cxoShzTaxQDKiLHiMRrw9wd2oRyhujcjjGdccSPxCKGPZRqhnV5",
  "key18": "5M3sJwCaQhaGVeYHUSYKZXwUMxa1EKCX6GSYwepM3VjL7EG3U7jmCBpPXKHGKX7q2mL6stXoQtSmJ9zXxDtcAhn8",
  "key19": "3f9pMmXgZdLLfUQ6isxyv8axdpFBuCMawFc2h4X8tEpWqmREzqUdW2rcbKYBAREqRTuiX5Ff7NQzRdkhjQByu195",
  "key20": "4gzhcUjCkWbm9L8uq2xUx3s2P2EiWynBz4qHNkvrxLdq4fCooQe5oxT6yRvoPbXxEqQ1jqCqRspd1FNoWL9zgVCi",
  "key21": "zV59D4n6rLTQDf7GmHmn5pxtjhMmXU2Htd2KHZnqfWhu1tVKGzsynECsb73uQPVtjhyn6qU2aunr3pJej2LpKWM",
  "key22": "4yY5Eq4oW3HCMJ4sfSLHoTPyXfiUotHv4KosdRPgFy8ND6scSiLr4i2qrJPq2wyg6u1imgtYGvrBsXANbo7PQxzk",
  "key23": "2Q4U2AzCaetZUfgWs77s5SnpGEgCYA6U8ciBumm85wVEz5oeAo1DwVnGzeFgYjNNsMyaPoCVRnLZRQNzJNVJs1aq",
  "key24": "5y5yqiWxkANgwzMFU7ScVyW8KaEzkn2oHMLSkMvM7HjjUxYpXwfQsmzbJY7eVprKE8jMkP2mvGJsEMyHVjePgdKL",
  "key25": "2eGgW5Yjx9y8xXvcCCyVzqKYaeRA2qPHE7LL4NX6E1AgGNckdRDNKbybw5aYPrYYVSCXe3Ro63XuWXX8HueQ65Ki",
  "key26": "2eJu9iyKWbsPQbnSFdhHsyVBX3CVzh6Wix9CdN757PKfrChCbYRmp3gNcUEBHBTtDp84DdjnG3oftGk9y93NaL8R",
  "key27": "3WtkwntDFtLETQi7NZ1RztMJ5jBV3rtkkfPHB2RQzTDiPX1nKpPmcou2FRvwNwugedJTc3SJAFNbSZr94cAC3rx5",
  "key28": "5yqDskt8hDh7ZtsdRveDmSRCg3DHg8em8hz8bpQEwgH9xt8xAREYJnBx6mwXmdR8qscboRsRCT7TyCJyXGmhA4n",
  "key29": "2WQVXyjjvXUPXuY2WXpU1Yt6wBkPgqNV2B93LyJbQ5HK1xeM5Tq51rFdJ3tpRVwmDUoNdrkuhnKSdCEc5tXz4Y8X",
  "key30": "5X56BZFuaW317ahEYhws7y2czefx5KU2KcFmKWRVPQXF9zcMqeEmXuCXezdKn5FZ7ihhJhqHVpNGD5Ydd8Q3SLyK",
  "key31": "2erPWTWr3gRdjQrbe94zHhY2LRNNcm8KuKi8QT3txiKMV6Bxdru3vr3fw14wcTawoNF5EGUCKuvVt1FzjWQLBmc9",
  "key32": "ndAELMs44CEWmp7GtcNy72DC9iD27xgaaqXi3ttpV9Fx7NoN6A7QqNdH7i1bSP9QK6BwALNpD3fF9Fxpqxhntc1",
  "key33": "hG66TwJ6ELiwhZF9FHPgLEpK78kqi2po7vqRm6MRDVVL9Dp2WZXprXqDi5CjxvFpq93REi22VgfXsyHLhMQMoDy"
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
