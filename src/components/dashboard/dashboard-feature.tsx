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
    "2Fr8kVnKhnfXcx9HfJkipRiiGkCnBXP8vzwTtB8WvuLzrMRkU4f84QCWCnKLHUHJFhTEG5dL6g2wGdVnQWtRZqkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v5d5i7PNV3CrTJQHy6j3E3DnYMEqPzh3Ners9bvdpQcwSJZ6bhPDK7uehVEBURypd64vTVefQVLBWDAJM8mmEj6",
  "key1": "2WNU782YBzV93bvSiouAMWkGxmU5aSrXrqvBJZ2FVLqi8n1xjTRquXbNWALrLAua5WoQkR4tUbEV2oQCCcqu5B8U",
  "key2": "2DX2MLjyEYgrN9tRuUSHoVyDuxWHjeu6mg5bjJ9Ru77c1MRqBHhFwCnz1tfEVQPmi1zrt5NZD9GJKJ7dkQZwkKTN",
  "key3": "4Nqxo8itY1zKAQgk2XExdCdgYfXnHJcXwiGuFzMirXkAgiBTdivCeDUD7VCJWk2puomEmPrxL15b45fSNZ4MQSqs",
  "key4": "2WP4nWCYtk84KUow6KBhBh7JcUhJ81EtoSNkn8zbYghvnocvQyzKAJn5vyk1HPTzPVnbb9oD5zyqywfab5a2w7G4",
  "key5": "419hUSXawBzJpkm1sPT6TV7ABVPFSo8CewqUMPQjCwLxxLkFQQUaZosJjmZP171diuEbesftQvJzyYGeKFKYDN3B",
  "key6": "GLomgpXEbpp4FhRfeNpVc2MqWjypNXY8dmBoN5Kewpsc7mCooVDL7XsfLcDUCrtMqozsVDEcohpof8rTesgULMW",
  "key7": "5fPLm1VMSBUxHntHKCpgPwhseHcz6t6c1To5Ft9LAA4uJbPGkZMrYvXAqhQPjXYN4JVgAEiUk43nRwwhVAawWf8i",
  "key8": "NQxeaEZKGJ7eyQFDXn3uS8AsoeqdZj5cxRyM5PjKsNYgc96pHM2eWriNgLzBDkxUnqnXU9VZye19A2SUpbu8XU2",
  "key9": "5K67XWFyYPbPh9u5eJ6nQKTbLm65F11SdHaFsw8ZzpE6ZcbpAo4nAaqRyy2LqyqovRGw3GzKBVPSL1efTNw9ePY6",
  "key10": "HGfbAhjBtU3boJce2EtHTrGRbS5PrEfjp7ontv7bewuNSdP8xHVm5zqgq1AiMEYzxbZwHRNxsoFHppWVxPwky4c",
  "key11": "5Jej7YdSRh7Yh5vtpasdtMF3S5sEDBsUS1mk2yE78pyFE9bCyjwe5YoBkWzqs1vcVT9CNkCyd5nHx1XGLLx3Uguv",
  "key12": "39SNH9MZwmsZRjTnRBgisZp15KjqEXKKoyX8yWtZvBZih3UZc8Mpu8Wyi97ShWmZUa1imu7269vh87yWZgeZCdp7",
  "key13": "3BpfAesMsAUWSDzFJaGrgoBBBinbFpDi75bKUkZU3XgSwnaDfgqysNW968pyxvtqE1a9anwih4tnmtAacxLTYKqc",
  "key14": "26apXBG5FrueWsspZgJfbMXHrvJRZUiGoCA3bNuWYUZXg6nnPQ62zU1bouRSgDcnVjibaJagke78JPqt5NqCmvnp",
  "key15": "5TfkAzjFimoTP916Aw1uurUYVM2LNqLPf32Q6SqhEt7bGnaE87BNMT4gfpeUu9sU3eLWtTgYuTu1jkQ7T9EJU8bx",
  "key16": "2Sd5ci6Hrj7PSz1sRLSq63aa516GZWARw28u3MkUhSqHeP3dzN3ErjSweiUJE6TaCRcAgSB8KgCMbrZrxmGhpfw6",
  "key17": "4znrsDDsZzdCJabUHBxjXWz8UhQgFkvW8ckDU1EnqS8jg57m87eTSdeZvSE2A2uwmyFNH9Ac3trLdFwWXgUqcGYE",
  "key18": "33s6sSAG4dpArYt88dxQXbNfmW6zhe2FWuggSL4Y23q1rebcFxSNFQvdhqzHWhw3wFgwMfiKrv4HkgmXMSQjtjYx",
  "key19": "4zUJZKiTrPn8vtXf4mbMjfN5QSudg1KgQFmZkbk42KBEHobNnGYyiMTHZvqBKAQMnFMAQaDhka5Vjy6czKMcV7nj",
  "key20": "qWBviMvPmPGGGQvSAfcDTYW6w2P4npKkQ5LfnJCFQdHbiBTGmQ9bwakXvnKnLNyBWiPFKAxEJbST9K19MDVr9Es",
  "key21": "3sTR2mma2YK5d3yBhqpKHyLuciJxAe7pc8CZbCRsE8SuF59PF4tvfeoCGfGCy9iZLmer289nrQKr5jVnppATg63Y",
  "key22": "4SRfU7NMogMs8gz6QoB2DZrdng9MLtdbXC62iSNRYzDXszoUTqBgG6eLMWQ28y8rbk4obKrNioHEhQUXVbYyU3Kn",
  "key23": "2RCBsk87ThxB21QBAgWPSNxLwpmoTfHEfkktGEj9b1j77RN6cU6Dz74HPHvnwngmMsT97t1icSn3a3Gzjp4ALTyQ",
  "key24": "2xFghVNhg5FsX2bLZfU9z52hn7hW6kku2A1sF1MEJii2bmJcRDZbtixDpZn7DPfKWY4ULU7hNBfRgdNRXV3o8YuY",
  "key25": "4n6uUV1xJcCxosmpRFXAs8Wo4jh2peTGoTEsuJPwcggkf9sroHCtRduT6Xb1unWC9AN1vFfXS3H6Q5re7sYhvkz9",
  "key26": "5Fs9fUQhkH5HGdfD851WRUNtzTNAmsWqPPDtgrbsZbMfdDREARLqC4PN7Abmk21EMgqMSgfczUCc5Tq7NC3MsMYx",
  "key27": "yzh5pMezMpqT6iJyXYhc73Y4zaUAgWEHTcoibwyQqrcG6GeqJqYQrkaRvjyKysxsvjwbNdt5m3dNTBzdBwE5aBn",
  "key28": "2VyUzByEE63na9WUMaRR62voG6peuEN9hZsUt6wgEjt3HiDRNrhEo6e5nfJSumenPsuBxry6iEwaeBCsgAmKmxZg",
  "key29": "3ohKYNYV4kQyvmBj46ykH1DxsqjcxDvgQJoo8nESaWELYsdAemX72jRVJnD2LBG28LZd98ftR9LuNKGY13cCmzUa",
  "key30": "2DYiqx4wYp5Bw4Nmym1HunsEQtQVPyJP3Pdm6C515tttVZuXK1N4Jjr25kzSoKF7ALtE3ZKHWfCjoDJbWH7mEWJt",
  "key31": "2C889rSnUoWyrPSAAqT1FwxLobzWHG4vJURScJ79QfPQVEFj1qTgNRf2Wyrekzdq8pjN8X9FmjwSSg4hfZPUsfMf",
  "key32": "5Ggm1v3MMNvqPZvD7Wnq8x1tNmA1WnpTRstoTVCKNBpvaSTj9UhBsg2HReVi4ecTqJehJFA18YkMrCKPk2EdnhjV",
  "key33": "5oAVeh7k52JiijLs4GRfQJMCwEDnJmtmHzdPyToQn2JbPNHC9J4uy16U6554ujRama9UreG98uHA4oVUdwKjqn6k",
  "key34": "2B6bPGzUA5qN3eVicdDHHewQXsGs1uikB25eCFEPnwrA9Pdqz2J4GDi9a5oyv3rhuJ55xyVLgihN5nxRHahUSYBK",
  "key35": "2KSZZPVyBAAft7FtZJMZgZVwVv8GLWbvwHFwBHJKdzNqnrR4Xw84Bn7LHx7YwYCcQYmL1dddcV6japhiTyectY6o",
  "key36": "5Aa6ovKdW1dNcZ6J2174Eakygf118UehVPc4JJUNpkjeUpw73g3mHbgzESJkr8e5h33BrhSz3jN1Xv6kHsMTsmpZ",
  "key37": "4UQEbvnEraPiaEQJidmYpogL7xs3sSjSsQjGirnYLeJ9YuBJRgbErt8DCVUaREkxxnW24vqf4C8HqT4nrjJJdrW5",
  "key38": "2pJzFYomNwPkzSSpgpq5KbCHiSebJBjM2kfY23mMUKhWRpwev3RdUVSs6i4Kqpo8UbKmhyLVroqzArLmWHB1Qe5U",
  "key39": "5Hhkn7Pt9Q7UUoBkatoyUbgZhx7GYPMGCY5hLCTNRNKJbruZWB7nWP9z3curXdK1FqXEiqo6R3HZcxh35fLy866s",
  "key40": "2p23QA2Fjov4Sj9WNXAoiT6irBRhhp3wmvBbwszpnLvegPxauBDQGiu1k5svdVzJ4WGtkGttjRJdktDxmEPCFq4",
  "key41": "4ZnTu2a2pxy4CVRQZm8f6rr5QjqW2vmK88KfRNMdFjK3wTk6WzsNNbcQsS1KGPSfE4ZcPyS6iZ6rjUtEXUwbE453",
  "key42": "29cvpyXjJT5cQ1ZGUh9NBb4U6NxVio9kZgR7kaTLM3PPYJ2Ly227wmnkoVzYcGCyk17bmvvRcZKhNgcACwPQHZ5V",
  "key43": "5BanbQoK6nDJnuXPdKJjQ71wVnevRbzp8kZEZotW6qCpkzWuKVKt1Y1JE2DrnYevqZfncJRvXkK5vJgh8iJkXMBm",
  "key44": "uLdJ3zPzWB6hy6CagYsBjzWMm2m6bpFcg9dceqvQsG1BJVctKgpVHxhyVS4ZHLV2L6h5aHtAx6u2NTKH1sn5S5J",
  "key45": "5uNTS4P1fN3AsSjYyvagPjHV3j9EerA1EQBzk4wH7zBZAjHWzS4pLtPHbSaDU822b9E9gBUBTyzK3AQNVDZgjXHD",
  "key46": "5ZEHVdzKPycR7N1SBd42mSjyKHBngtf6bvjGVHcgfez8wt7yRFdJrkqUsFdRfizCKyvtn92Fz8qDvMVj5uW8tBNR",
  "key47": "2fg9bwLyKu9gU6Mk3wu5GN2pTUNDJgWhzy9qmbnrLGAjMnj4hcS3xvTXrCcP1CVcwHuLCfAtdaA3RuYCXW5gryFs",
  "key48": "3oQ3WSC9hCRVuGKGBpsFvqi4WaRAvuMYShaSxqThRqdMW2gZXytthrtJbTzBSRv72qDH76MovN3qLTWtZJcEwk3K",
  "key49": "4yrJELkoMWZ9wdd3jSCxFCaCJztFCmoHEGqJHjxTnG1Xn1eEbQZawE6WMXyUJc22cYa8Pix6PvNKRRTPwWmpXPzQ"
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
