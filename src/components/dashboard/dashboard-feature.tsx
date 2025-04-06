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
    "3FPfPEftwN397FMNrEBNxL9W554EUYGVjekaMY5uJMfhwid157M3XQs3knseVFb87bJDwpCsEApBLtamZX3eUZv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HN7bEkjXdQZHf5QVMSt9iJ3qWrfnJ4kbTVDJVpsHnqPqcvBnKpwpxqwsGCgu8queHtmS2vgJCm8e49Y8DfYC4Gd",
  "key1": "YsATiyraktFpmZgzqezCLYcKPZPSrkMvjNCJSGpPAEXLt1YggqCeSPf8B5sABXagzaQGtp2yu2pGQK7bnenXtP2",
  "key2": "2wyRZuofU71FdZvye85pia3gXBjrVkmfNDVmLBdQWGT4Lfbf3NNRQMXgNcXMynRSsdV1DD4B7BZGTc88YwxYdAP2",
  "key3": "3aJgTxoD3wQvTCZ4UVu5jNpAd9czJHZZyzyuhsHXJABysA32Q1nWLy4oSaJFrHtHr7Rf6nQpftMEFGdE55e2XPn5",
  "key4": "2KfH8o8zvmDzRCkRULHY6dfRupBmuL9Y913xSeRYC1iuDa83ywuX7aeHecnFNojB7gBjn3U2oLQ2DUDuKxbfY9Lm",
  "key5": "4eLXX8huAhyeYobVDuadfQe3JmcC48JBu8xdirjUx9Cu713a1j2k9RodL6zFwnmo78ejwTba5GaQaAUJ1cDNGmtg",
  "key6": "4pngn54sh4e7SAGfKD6ffznSgKpaTs8JJXmeNRGHKhgcGe98b8TcF9KfjVVHGqLJDj3RxPMyZCx1e3p4ZaSBV3pq",
  "key7": "xHgaJ2aPhfkLDHBc23tDpvxXw5WMah6FZxm1TAn4zWr7ZEEvRtKKis7kAUxhqQ8SCiiSoV759gWku4c9HZcsSe3",
  "key8": "TS6A6wKTFkmoqNcFfEDqT2qWuW5RFru1WZBEboAN1wkkRP9cCaQBifARqhH1zRhP7eQALLmMr5Ej2W4iZ5MMfqs",
  "key9": "GPmmTnwvGHBG7nua2efoEot5b9QTX3PHXKZh5BjNbNsxTzPNoGBTAA4vXgMcq2kvmJYu1Ju7xHeTA172e4YexWH",
  "key10": "YEt6NQ4sNhdJTCbo76ZdLNkk4c1xHgVxkWW96C2tNzzE27Ny1BrepduHz145AdKnuoBFA7x3yvUC2mrTyS8UG7k",
  "key11": "2PZZoMQYMd5bYSrLy5JUDpQzkbULww3oTGyu3PjmevCMKtpyMD7fLf2RuPqe4TkYWYdVJwr4HhNUQJWr4wf4xpGh",
  "key12": "2DKEyQVBa6TESc1r6XZnew14frEUnC72s1v68ZivB36UeB5XVK9vPU7chqpiLd1oRWkA7HF5v8dJiqzywQuBKdrp",
  "key13": "4dLUSsDddYkGFs1WNqWSNgHdbkwBXinSNnUwnh7fhRvQVHdVcYHtuisb8ozKY9HHAqK7f1hXNZVxbmpmC13bz935",
  "key14": "3WFDvXnVZFneMe1uXvxKM6N2iTfrWCqA9cjDs9x7C7Dkyo5ZdBcLtprP1N6Cu5BxPmevbDKcJWkunMD4QVq6YKzR",
  "key15": "2uPUH3MTK7orasnZxzvsnXus265sgrb9fE6HBq9oA6uNFeW74ooDfLTz3pgLfEvJaEqKvae8rE2kH8PujkgMnAv3",
  "key16": "3Ch1ttU4ZrfCE9UqBN7zEEaEfkKadbxhGVD2vURhz3uXd7xvgijwcGsDiS7wYGweBoinpYQMigT1rDwJRUXP8NTq",
  "key17": "MbR4xCedgDKGvVVvVijbbVyL3CrYrSiK8QXMfQxqJiS9TefRTe1RatXamWdn713zsLVo4jHTPyrCiFet1Xjm483",
  "key18": "442v9Pt8xytdzXqTEEoYvj1r7GRbqYtXJa45zzo5rMnytT1E3mZjvDsJkWqTGAiNzBv4wF1L4PySzQ99u2VJcWkU",
  "key19": "2h7yGpBRdqgv2sPa8ZdUK8QiyuBHMGo5xYuARmSPGPjpKsYJikcXE5Y7ufApEYFxQtF93bqgXgqZqNCUNgdX5LNY",
  "key20": "2UrEgnF7k51QViHGhALBcVUFde2RGkhMN3J2hJGFfASvKjmo6We5azkmPPQs71A9qXrQhJWCtsaKmGEoYzXC7sSk",
  "key21": "3Q3HLyXhD29R7mHxFftVXsHm7ai9waB48mi857QY9adFbzbwe4MfxQZkSLxXfmKfbvBEajcsHHUZR3Ruci7T6S12",
  "key22": "368qU7Du1Hj7opgvioHMbnsMw6HefeRFHo72QXk7DXBdke6ivT9fiZPKivmFWLkhcfHVukYDSs4G19GeBBGZU2ob",
  "key23": "45zheJreMrwAS3jkj6JVq2bw9PDq7GHp4hxnLfnYE4LqrV6rURdZp3WNSVs1s8yH7LgMMeVSzw1P93VdCV77viBq",
  "key24": "32g4SUZtQDAt6NN2eqic1ZN8v2oCgqJPUbWMBcQW2DvPYdke3PPqr2KrGgd5AuQRku4ASqQM4RPotYxGUCZD3C5q",
  "key25": "5dbpvXS31p87JSTTEgXWDg3aA5q66MTvKpvjKbvjP2mVkDNk14MQmTe8H9NCWMaHALpqr48xrCRuj2zt1XpLtGxZ",
  "key26": "41Dzg16dnEh5jrAw2Tm6G58p7wUx5jjMgF1UxbGoDnnesWmkVbhboUtTd5RzrkYna2wA4PYgL6iQmgub6uC7TEas",
  "key27": "3YHMfwG3GCu7jFBrZ96eFRpM8GKPmpq4kjuXmHSYtSHLHWoyXoMg1yUJk6z1em7Cpm8Dqbs2iHJcrjCMSSJvcpzV",
  "key28": "3Lc7gtNAkyNUSfguCnCvCJjKWcAjGV1UG4MPZth2QKFDjGWGWFqdFo6gF5epdDv64FSk5SLT1H8LUzHqmKyBwPq2",
  "key29": "3xunhjRi7UDwD8ZyGF4Aauk2WfMuyoyVLCynNjzWnMht4pX5wtPyWyyJBuaDEujMt3tfsaNqrWcNPUMaS68Lb1nu",
  "key30": "5t3Lb7doFwhUuGkBdPamgVkkpFTGUgzjQwe5ZXD3AyKLamStELsiny7CEW6RXqbP6nGii83sae47Tq3rM1qVVkNV",
  "key31": "3mSctQ6tNM3NE2BSqmqoVTW9AAHUEVG5pY4xsAAjuhDgkaYRFiQ4BVopsZcs1pmvjvjYFWycxQYrk9MxqxywWjoH",
  "key32": "xVqJXvpLLN6T7frhXfhvMTyDJKVEfdgE6BXzhgm4uAjGMzvX5soc4HbiUgmA6dixDgj4ZNBgt15ASWpj953g3p6",
  "key33": "vAto6JKkLa4zuWGv85sUZ6Y4ttHM37nZg4MRMRa9XrqZZ9Rfi8kcXPHJTTjiwrJJf6wW3DFhzQoCeHJhRbNHHkD",
  "key34": "4k9Mgc6xET4SSTvDNG8WCTPteBznZkauuHCLqEGdMcYsmhaWC9pJ1DcUFLFquZJbEZm8nKV668DTuMDqnGQHE9sS",
  "key35": "yznWSK25tRnEtBQUEqZYUG345RLEbCNHGA93R36G14H1ZiPL6fan4WxDR7G5k1ZddQa2TUbG2nRqkpPZTEMBsES",
  "key36": "52t6XwhNAU8TbhDMJd1bnK8XJdjQqzM6oAfLtoH21z4K8AHunQCX7vcgYmSue5p2d8bnzoMx3UEnuPjw455Fi8AV",
  "key37": "2FLwNa6j8B8BhDzLYwFBtqQyrvLpczXa5Gz213uxC9kGiJDiSv8SLDaEBWuhB9EpUwFCN18stmxMVP9vAUAkSUtv",
  "key38": "3avLdudxhToLcHohoFiCBfv1D9CpNiV6zaSR4skBhN9nv3uJWWK2YrV1YvDnXWETwJKfvSZrSrhjb6Lxjj6ZJYhe",
  "key39": "a7wTmkU1CBo8PTnCgcTiyXeYL5NyCojGT8hSc1th6TJJvFV5FEniRTCuKj6koobyJUQdmiYQY8zGGGpkTjzZ5cy",
  "key40": "41NE33kf5GSNu8d7Q6Uz3L4JY3HoU2DRDyeLL2nqogKVqAsRkYexNZhn7AwMbEispak5YZNAPSSLVbWt3editeLZ",
  "key41": "4eHafSCDWkHKsKToJaQA2bgw6GYrfH9qqwzxhbMTG7SF1opsdctM6P5B55dCGm9usKfHzPx7z1jTg2oCKSqPUnLQ"
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
