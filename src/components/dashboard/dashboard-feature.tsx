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
    "JBUjd4t6yhcDEmrJjwuigGeML12VfnYXdQw8eNF8g6wbt6LdgU5LXqUKhvVC12MFfqqtfH9eibeBwQWGBxoT4R4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SnQKCU7Kf7cZj8jMf8TzL2adXYGXZzq95Lo4PaEG65Nd7vbS5imHJbLUzZec94opdUzXfZnotUc4zaKDEn2npn5",
  "key1": "5rvzT22Un8snFWttxNrK5MUgMFFSZT5aUZGpdk9esUw7JxQMdj19y8W4REFvZ2jvPxicnZZsQd6yvoipq7X1CdJa",
  "key2": "3X2TfUyhzdTLUo2xXQmfNgZy8wkMpJaWhr14eJBdUpR3NYFktrUXA6hU8jE5PscyGnJhgPAa2GWAn4DayjKConQk",
  "key3": "5JJjuaPLy9mWPVSUUeY7LwBHHfBAJLmKYLFY3WxBkxqzkdGPZyTeY5AKUejVHhRZnfhLiwK2E7YcLYX9sSXX9SDd",
  "key4": "2WhecEthToTiwhmFKVtJkR5vpxj6k9orsdTY2tVngKaByvC6B4BmpgUJJdyFiayFKdWw38QGLhCS3V12EKvWskJt",
  "key5": "2R2mjMAj55LNUm8QLwsxPe6zQqZDTrZQh8PFVNr6jou5G1xXkm5YPySS9x3VPkmAidogRQK3yDNu9iwC97oJjfKc",
  "key6": "aLXQr2KgQahDi8ebgkHwxPzW3DHkPPjdqL4kU4otcRVA5UuBAXXhuW5bErQvSfULkuDqWXuEjBBERQU8MTc1fka",
  "key7": "2aRsjSHtrqbJbjpMTtt3rWoVHQvtVhKyANyp6SYvM984SQ5ZUfZbmjEBo8nCt7LbwfihH7U1afqZL5wsdSBfkSHG",
  "key8": "5sQcHxFZtWsVUxQiJXYuiYsEowBCCT3TKJP3thFfumkmw6Nu66h9K9Z25vC9Ea16vjKKhV9uUEGfZv2ZwgBmmQ5",
  "key9": "2CbsM1sY9p739aPmikBdBQ6KrU1gvtPqGtPrfENUtNmDvDYjBU7dBuTUjcBd822GwKdpEKnsASArDR4g7Cx3Cine",
  "key10": "4PAgbC7Cf6ZDQV5S3nbTGkJVc7gggNbciLxDnznViasU8dHzbpDdt24NSq7QCCFbjx4rMhxTt2zhTvQxDknFUcg2",
  "key11": "4X7AYs3yn44x8KAePPXfq9ywN2BVBRCTRrjXu6PeKVopDDzTyK4TrnWnXa64bZdf6uovshyuZwbLEVhX1EaL3Mw5",
  "key12": "3mDjRNbTXwfYWmGbYxEpCRLW5bYPRgaYbDskYSMJNFWfbUS5TMykFbrecDAz6LYXGwny6dV6Dkj1kATpShHH6bXs",
  "key13": "j9Fw3ARUaLoJYhKFvn5a1tNj1TYcFe8fPQEm1rssU6Yw9SnzcSkk3qnEm7eCGd5zz1FAFjh6cBfM48FxszH9crA",
  "key14": "4nH1pcgP4DggwQcLvR5EdSQqhZvW7QPwmM2HNeQ6yNUhTR2qsUDJNa9w5QKsLcTzkNEf3ZBMeNob1Svt86Hinqjd",
  "key15": "5sMi4CpdbjpdvdsYoCRSNksVCPimZtmSMPoLMRBTQ7uadcS9L1vwETAVuz9gi2HqRYzNfPJBBroY7kgTwQmQ5D9c",
  "key16": "2HAgkxYupXwVmViadZeeKzGGAzKUk12GFZRwbohfZseEBco23fCSrmrDMVGh9KB6SG86f4HCZzMkzzuHmT5uQ68m",
  "key17": "2uMZZaqSxvuumQvcF1p9BsDcLUto4QLaNRfTSWJSgk5gA8NNFc1jjaEX3ciAUbVu614UFGaLWYyiPNkCJQQYe854",
  "key18": "2UtTWmngDArX7sC2ChEDEUCAL2EwMMXE9yypryA3m53wDBuDSdNfLShWcpiR8JmtwbRFRmMNGVcVUQeUuccwjq6J",
  "key19": "3RYMicog6aoC8Gkfu4fiVvy8XrmDDhg6jvzrvyrLNS9xLXQUcQepNNGtupEZP1v6Pc2xrmfg2NhRaoqvDy24dZQB",
  "key20": "cifFBhbMaDBCSAPEU1R7RF3oJE98EPXY6gggJ3o7DXErRffvaDABTgQzZqndXdQamqqSfy95RzxZfjV4FurmWkA",
  "key21": "5tZqpx9U6rY2rDjAYyYkkLvsBYvKu8JKM6SprcWEyYkC6i22Be23AnWpkYTUzvG4uXbeGw1yL6nb1enZaFt568v8",
  "key22": "2rF3ASgEFeya3q148DiNtd5NTm2UTBD4SsAReTHvvGQeNLLemNZNqvVRy7UZuqjH3Ht7S2x7Rq8tqQRXaSUy7hh5",
  "key23": "4yVRdnqp2V8vxY7kKX2UXEUbvDdD7oNBDFiT6Yk7LBpx8vPW63rYzGPNuaW7Bthvajdc7vpMgd9FuMnKJYs4S9Z4",
  "key24": "2YwRwKreAz1vY2iV9w3ghB2y7Uus913XnWjGEBHVXvsjeSRZdAterSKgNeyyCGQ7jhhkoQzWTKt2zSz4C7yKZpng",
  "key25": "29U8EbyVELnnyu7vStCGn3roQ8CZfEWD38MBwJkbw1impDNS4Hp7pU8JHpKRkPtmibLHv5STK95EJ1ExzxsNC7Cp",
  "key26": "2o4AP1MmZEVbddo4Z2FfcZkvQqmAthEEnbKXxWCtJEqxV5JJo6dTaLspQjnwLixJitQq74YxndzEfWY5KVFxKRpg",
  "key27": "2QVNp4bbQHvsb7BKVFMJBwBkmCQtXx7D6NQH9muM6eUUw3AmsYoZU4RRG7xuJbriHTabK96fgiWL6g6kMJuCejAF",
  "key28": "2mYGPtNZGQ7Q7qAfqKJVUUrVyEud2AxSjqtUYcHHzxvUf6Mi4h43nYtHkyHKhAEAYtZyrnBEGKegt9yP48dyZ1tx",
  "key29": "62h3c96iSxa5tBbAPEUUoh5f6YTsM2GXKT1gdmpvfgjyUTmHHJdj4LYu5pEiimkPFFAJstU3N4aiTnvc5XdVdaF6",
  "key30": "5woxCw2pXoMqiqgiPVpvT1qPhtRuFKgxjgoYNiMxQyrSskD5LhPQns8R1zic8JPAUyuY9Rmvo348F6XnnMTNC2Xr",
  "key31": "2oPGqufnonQCW5etgMw85fazjP9PqYDR6m9STRrRqscLAWZwzBFyoTAYJHMqSEa6MmVpN3Jhj6PQPvR8QkFjLbdu",
  "key32": "d2f48CbJFHT2j3bLX8QYqyVHwFkr4NbGMBVbEg6KM8px91xqUs6HYt5tzrWkZauzw6P6x7AZsedErXZpDHiPNmD",
  "key33": "3TxvESdMtyqFyvZ4EiaM6i4udimW3xYueQFjUdXuz5PFBL9GWHFUrDLpSoDnA3zTy47UQGjTffo7PPU718aa5Zmg",
  "key34": "pFS4qBZBbzCHnkF6fdd685QvwuxKRv6rAu59QqueBQtxCmnDZWDq5PqiFKDsiVgTexhaYi5SyA4xV26DkStzbFb",
  "key35": "5fQvDhhYEcdvnYDM7QzBKznM9CPWKfSZppn2n5kktsNQHdkWkNdvgQQD6pUgCKqP134pVtwb6t4qZpdS48VhuPDe",
  "key36": "3Ft81pGG9mrkKqMadmDFg2nDubmBgtN5Hv4Ydm6TMmFB2qLxuxtA6cpXvEYT9119V4PufEGFt4Me6ZtAJFEER4cc",
  "key37": "3QWnaeJ58QpUejCYJdZGvB6oaUBU9Yf7KbK2iWv8pg4sEhvEfmmRp5v9gCr8maHZ4ZxqEHUCh5UHdrLuS7vHP9SN",
  "key38": "4GF43PYsfGEEp3cdx8k84cSRTdPc7pEfSt3qJz9XzX7KSixPMCQr5ShecpUN5gbFzK19oSGCXaWVWWQLY4LviVMx",
  "key39": "3pN9mZgm7N3JBEZY1pk5RbCtiNUR7oTSZrEfc3QJKKtTZooCqhYsqCfzDX4TKCdMV47pQrSHW1wVBGytyeqAkm6z",
  "key40": "4L3Ptufzpb4vHc6KWMGzt26mePKtzfmDyecAZwUp1mRYEZPY9PGeqe5kqFynS6dFFBAkBAZVqVXqcXZAxsgGtBvP",
  "key41": "TrzgqRkgg9oEuj8KfNW8jf5zKDenDqwmmF7gdz4PPNsm2DUzw12f3oHXnRBKp3i5gwiWhmRzj2vbE5FABjQGcNY",
  "key42": "5oUdwLNLizTMMSyMofk6dqX8UF2Rt54hvr4VurgKrk3zTcfDm9TRWmWHAH6x26uj64ouewJTyBDT9r72gWJmbRbj",
  "key43": "39yh1JwkhszciFuX8n1EnN4pSZyahPzhbzAMqsgz5RTx1cvPL7WZ1cxvtYPQEMeDk1AnrRFfbNs3UNMTNiLvMauY",
  "key44": "4rg7dQ6G7sd7ARdPz6ugHfvko4tFk7c9VkhaLPxTLUv7jCeX3BoRJ3v4Kk7nLXZRY6EWXBiqEoufBT7qWZmbKzEy",
  "key45": "62iBD7cx9gLcKSo8irnhHop1sLqzKkWSgkXhM6ACJt2QZmAu56nYW8Xhq5uWm4PvzTvHKBs27MFdHgUhwHwcAsDY",
  "key46": "66L23UKB3zo2zv3c99y7SabCxQA7B5wqenyiHve1yxXCEgfmVTHRPetEQjNnnvtzLNFTCJQCGZQT2AE6LJQD4XnW",
  "key47": "cj2iKGHH6kYwoNJEL3A7zT1gNMUaQQBphUqf8xFJiHJTAiEQNwQnZsrLW9PfZpFBrZoXWcjQwYLCgAFV6jCEqoS",
  "key48": "4bMbbhPnxowdreSRW77RGT7az1nhK2rzzz7Ntkq3EpX6JjNaR9GD7LtKy47Y1xBFs4qeekhU3dLKArwCKW82PyFq",
  "key49": "5B855TNasvGdBsWv5iocSDuFTRJpZoZhXv3M5EE4hrmTbBJVX7WSfKWtYoz2D96j7kdo1KcVYz1CLVD96u6tk33e"
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
