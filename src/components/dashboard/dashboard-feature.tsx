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
    "5wDmvYJGfZ9tALpESecUDy97aE8FKQnq9eJTLtSYN1bsS7QwcSFVLEtKQDeMYckzdcFt3Pdimhv6FHKisTVL7buS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BfaonbQVHXQKDV7V5raNMgUUT8QguG1pVMbew5dciqvrkh3qZD3hDH3pxk1B3RAkwGPKVnsrTqMjVRey8zoASXt",
  "key1": "Xfcu5pzdP5tigtm5BazGD5KmMgkLD6QP7Bgcxka7kSSEzNPPLVkRn7MtThKP7hDrQiyeaaEs5yAbRxgC5tDiLU6",
  "key2": "32ZwyhkL6XHEpcVF76ZHwjWvurnKmt5sqZKcJWSDnVJFKCvqyMaK3sbWvZA27ymhhSgp9ARsW61EjjNutCZVCYRG",
  "key3": "3mc8MAFaeS2g81byB1THcTDBHqv3ToWBXTvr59XoHhnsURcsHJMswE2pfEwUzeL5Y45AMsyM3WUUL34JK2t8q6aA",
  "key4": "2VXEhjc8tEML93Vk4MqdjmPoAeEbb7eKhvU2sX7K4Lt2BuCPQyeSTfhLeB1ftkDnvVhizgj4bVBR2qhbv6Pd2FNS",
  "key5": "2jco8Zi3RCcfRkSZA3wduN76AQEr3UBeJ2bHDdXUpbYYTP3sNdqY5Y954iKJ43fxdieJuRNFZEvdmDs9d8twVzA4",
  "key6": "4PHvMnagEPAVnv5dLSZPPzjyxSDAgkhSPM2UAekU1Ujt1fTGCbgstNoJCxgJipgLYoqewBcNdAd2DjgWuwHnSnL4",
  "key7": "5dW6VRJrhsQ2YhZ3kMuXG8KbYE6vBcCd4xe4hzSZETsZEwxqAq9fCyVN2ySj2xfSj1TBRmXgvSiT3qQo3DLy7CU5",
  "key8": "sHqkHDiHQotyP3XqQnLbzwmBz4iFLSDoarGsBa5mrZwSZ1qeQfW3uTbmuxWnK3RPQRuTnjb1VNEb4zAmaHzSb4M",
  "key9": "3kT285tiGEnKy57ayGierWMV15AS4ppa1ne9yhyGVbG2vHK51rKmAKX8hUDggNFVRdvU6tWVdqvTMYqZtJmQxv7r",
  "key10": "39HqjvJvL1eR7bZW1MCBC26Xu8UsG2ZNoxSbSv65uNWkNE7Vsep5Pm9gtA9Mwc3ndkFmpPhHTMsZPFsdJi8MJT3z",
  "key11": "3zwuD5i8pUgNkQq2UVY7qXKzMSQ3N4y8fBKcFUJuFhiDQCxiPz7FFbaaGaSmZkkDbYMWR5JPrdUSppeVvnn2GFQA",
  "key12": "mNjRvVUGDsFCmYtobDDZwkjmPYjPZmjNmWLSKiDnEvm2FdwUkVrYZAGzuL8s3DvQzn8UNk1aktyzbnTqcGLumZQ",
  "key13": "5GGso7b2hn1RU1fkQD72nAc8YabikH5Zyo4cCVndMVQbWCSG1ptYNz6ykT7EN6AHKYsiW1oeesZgDqUsEX6M62FL",
  "key14": "2E3LpuxE7cPRm7tmts31V6pBeuwctXBefHn6bdtbc3fBJGUPCvZYzZ49SD6b73FCJLq8WuHrX2VDWo6K6yuwMcjM",
  "key15": "3DbmcxzFf8Yzrm4BUuMFR5AgSRo2xV7LgXiwthdTwD3h7tuqNRg1StBJvTqskJ6oYEFz4qaTk5WMX83UCqW3jaEE",
  "key16": "3tEeh746acYvZof8R4CgF6umoo3VP4EBuPP2gQ31337SCr6rHLKHU69fD2Ni1YWsQJKPHSE5hDvT8ETvr9tVBTwZ",
  "key17": "49iEKSytPUrcuFfaizEQZJMQsVVC61jwwN1o536xT4j6WL8R4gTqH3Z7N3scrDw2uQYRPtgZKBqScb9gd5wm2UMf",
  "key18": "3xrBJteEcMiFeU8qLrm6p5S86JXTtW6T8EYuVhu1boTACXxmGeqCL1ZkTmMMWBNfcHeeVGt42oGmCAXn8QyrZmgc",
  "key19": "mcQVWqcQN4497f7X79WgwLbegCEPee4VePzuasKcHfhqWcSTtoTqqqbBQN4SN7g3W7vwZQzcyipV9rm47GfqLEc",
  "key20": "5YFPvtN48AN71JZJwVwQF2hhyCQ4hHMxzjFRAmcL7GhDC6fVNrbx3bt7GhDw9fhPNhi1rqdCU9ifY8GX2MqA9kKZ",
  "key21": "31Vh4xVyhDvpDFRuNnU39dSxgxHzGRwaeaFoczqaqZcyhLNvRWVPb3zjTDksZ8XoAcsMTaCaZpXU6xYQaZx6psxs",
  "key22": "5RvjUAeazRppDkUMLXHGWCLk3uCW4taKbfLzvMF6w9xvfTtgEAL1YKQk51CEsuvR1pixr3ZKWZ9ymcrNXxQ1wZdU",
  "key23": "ahEeBoSLEZx3BLinc9gou7Usntxh6m9KAqVNka46Fr4uxngkD4P4ZQ7GYgbqnr2VivUPQ5pUYBoM4r7ZUyXfUVJ",
  "key24": "3xW8cQcgpWKMb3wTwWq1EtjxKi5Q6eWKL9tXgBFfvATH7X6NpLPg3oMATe7h2BkTX9Mkts2DVrzsQu8VYDwhpxaK",
  "key25": "42oK1dDzmoAwJCjurXSN1D8ux3XM1qNLSP1mLo63yFDXSdAZzxEx8GJMXbTBN1ztYudbXEQ2Je9dp58rF9aLRohT",
  "key26": "5zjiQ85UhGZNfF4uFjLdMZzzGkmVuGdMyoi65ujA2YxPvXbVraeUgqy92Yu3rCiAU33yC8nHx8f9sNbCcMxAzaPM"
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
