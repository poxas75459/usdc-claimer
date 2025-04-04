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
    "5WqDETkBXGna9HFatd2u4hbi5FWDTnnCeBHLj3UgwfTqPjL2bvxByw6xoCo2wM3vGVggwEh4vzXcWrwaLNfcpfo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rdkFU2Uyv11wibxwBtEek6wqijpAbDK8YQbMcGwmSZNVfbW7GLa1zhYn4RSiiuV2QhiuJHp5mwRwY8JLRPeNXph",
  "key1": "4UveaeHyAGFC4jD3gPuq4xM3CSLiNcDZtbjSmXAnRBFzbkUUkRxNnP1kyQzjFz9cVHT9xfucHJ33m2FqwEmJJY4A",
  "key2": "2VB1aRVA4BJ8CGG8PAotEfwW1FYiqrrKwy2Yzps7f7aYH11oDbCV14sHWsa8coLa4B8xdmD5WcpAe4YB7Qa3s9Fd",
  "key3": "vdP5erC8rZPKHYi777BGSRhvx411CLpwTEDD8DLxERkPVpmvG1CoZBJCAins9Rr6pEXxvi3TdwVJ1AqaRoSQNwA",
  "key4": "64dsm6WTLkHx1FVRW6b2LyiTUTbctALEUhQXmkisvQpi3j7GYpoJUVQy9UpV7rrnk9GqdLNKFCDcQYsic9Ww9Ffq",
  "key5": "31wVbT27wJ7CRaCwpkbnRnbwoJmXiGr3TqVL1LASuVfcbr6FV19KREN3qWVdxy67VDZVG8T4792vT84G1oRw7Kdi",
  "key6": "4ohauTiN5RGA2dsggA5ZQBnkiUrUebV2j2Fb9oKG37xyS6Jcoh1Jje3xs3T9yEnsrvsQAjfd71vG5dWQx1KMUpJ5",
  "key7": "3RnMbBBd5LTQxLPma1PNNn1pcUNQ59yCmZ1X7x6yQ4aFWnHSnoWiw5KJK4aGb4DGrzwbz3ZgDFu9su4dMUPZ7VEC",
  "key8": "2BRHgzaK1XwoALJifo8iJ2d8uJPJELm8CDSgCFMVPWNjuHj6nkxCKuJ4KezRefcuPfcteHFdzqS18UfFFLxWcu6m",
  "key9": "2s5xaz4AzomTAinCsuLLhLFJHC6RUYD17ex6Zpx8fLGNSjDeYt4grjCu4iqJ8uV5inETiMvU1Kvfdkmbuhxy3BnG",
  "key10": "2G1Y712GQiSqSv9cV3aMfo7pUczgQDrnZhWLPtnatF3XSaK11ygbhedXsweDPkHV1rMNfx8cyZmzwi2hpomsa1Pq",
  "key11": "oQLTBP1fq7XYYgPU5sutoXKhbwwujJZdQgLE4yem5xJPYz5LVTKEmXhTMoM9S4vPFp9UvsRNGEXyPh7uioAuCCw",
  "key12": "w2hY6AevFT4C7tdnEnWgjE5FN2RQEwVm1vmiPheSs7SNLjFdKY5G8QPBiDicCFe76cp1cDHs9LTPvFKWe1RbRYv",
  "key13": "4wHeJ8U4CF1HrrvGFPFDz347FZCDq7LZk37r8zVp8z2A1UErrimwFp38YHf6NHDHFC5ptd8a2LjTPaC5JaSUBRL3",
  "key14": "4pQyBM4oqJ4MVdWndVmvuuzeP584i96kg67vjvUBdHyuf47UCfm33ciTqA5xfoaFWeLmYzyWZnzEnv3VEJcJzUVJ",
  "key15": "WbYH5bBnVftfhXFYni6UVA19P6t472bQ9y19h9XZe4gMg1dfJqq2ndYVZAKZ4HDpnLPJuhdqfW7C3VJz2Fk62r5",
  "key16": "tSQUDFrX57giKZAzm9CF8BbrS4NMxcjs491SzJS4QN7UwrHupzc6zsfsYW2Qw9e5Rm9eeiGsrEGsFXisTw9Znj4",
  "key17": "2eP2KVsjpkkE2MgnCivfPSBPTegBtSwuSqfZXWynot2TsuJi7Lj5DfSTCEcvFmqQ3gWc4j4Y8EMfoxSkELJJLGio",
  "key18": "5aGRawd94m6t52dM6oRLmDyENCey1B1fMe6yciMa1BKSJPGEqpvnfAL8KMKVkUzaPcrsw2jh9X37PVMb6sbfFz4K",
  "key19": "HDdWQsegKZiCf1CWo3dm3sKCxxKuWLKXFtUtFFxPbtXjNgDNTj7zRLoAZyrhHLaBj6yenNLwjozFvgjtXiX8oaB",
  "key20": "4zJR8kqBnVV7oG4SSwAcotbNvkgbHKgM99WuiCcn3wyFni8YDL7mB5AV7bqmC14U2YvyoC8mTYtRTs4TsZmbAy2D",
  "key21": "33NAcsajqCLXyWEpHQtPmRWDuQbMNoKZwE6LMDNU5rWunL4uxMJ3pEb9uxyJC4pcjHNiZ6GhfM7PVdjnjwJusSiG",
  "key22": "41kaSyVAzHyZ6vqvR8D3kDRC6B3SzifkCobSfKUTdbn2EvPb6BtDu1ww6AXBun5VXj2C5tH4iBTUAxmf83qstBGJ",
  "key23": "DSjZXitGqEiUh8YBSseQYk7fqA72GYyvdKnkrbDKk9BGHKzUSjSe8hJkLgHZMd4P72C2nDaSJtsscmhkx9BHdEB",
  "key24": "46iY3oysrrbJrE6XTgeqW894C1ytpQZ7MQqdRMhi3BobwoDt1cLXReYAevscTV2X9raF1MMHe2GZY89xGnvQgEaj",
  "key25": "3ZtMF2CotmKuAUcn4vALrxvQb2JYX9zV8CbzdPNrEdsVYYVg77wqSxujrqZXKPnHFuiF5x4kjLFUgJL2k6WkTp8Z",
  "key26": "5hnMrbvwrXCgTJnqUKvJDQBhuZxchEBjMdvdRgnCWuGHsETznjtn5hX5E6a84rj3FXtuf3q4SuMaThSfXuFA1LNX",
  "key27": "3UBgo4XARV3mjCinznBGX4JpGGwPTvGWSXtybgRMgPZQPEHeiW5wFsUJhb3iNypSztqc76aY8XCR1qFrJAEVqnZK",
  "key28": "5NW2NLA8BY4maZbdx7nxYzbYZ5Mzhn6KUoBggAPe5Cfo6oSPE79FXQkSZWwE5brmUxhF4JF9awAkNJLFYzfhbjn4",
  "key29": "3HL4aewgGHti2EhWtqdez9or1qBigKErEhuzfq5fzZ3wsDt3xUrx17D5RopXP9NnYoeAdfon9CJZwsP9Qt8pgV9q",
  "key30": "5CRjwid1CynooiQsoTdEH8131fEunG5WsYxEZx8FscVa2YmjPjDMg5aix6rRm8yoq8trmPckevnkT8jeUqAG5Zrq",
  "key31": "4NCAN2v5YqMukpAbB9fW9c8bfE22URArknZ71NYFSAEoHxfTpwiBSXbynDt3vhVRrP9UzRubCiuAo2QbC7LL14bh",
  "key32": "5gnfRKNxZL9yVDorcCEvDhCjEcEsfEcKHixRp88qE6R3qRfjVrduvwaBky2kmWEweBf7d7T9in1scLH2j1nsxAaG",
  "key33": "5zjh5Se7GGKQnoFHbCF4gxfkW7WaChNZmjsGFYrj9TYRQz3JLRNt6rRDHFqRzjf8ohSwPE7AhMPjDATuBFkDuGCa",
  "key34": "38dJHpi7499FMMhs1axKyzB29GkHkfMEiVgewqCkkg579Nrj3N3D1DcQhd6ZgBGotKJFhGZsB4rhA4XpuYkLYmmk",
  "key35": "38U5bFCoQj1UQiRnSzsuoAninShcNL6Ttp7t2rpjRzNGtv5rvcdPJngCyY3gPp3WrZP8ViBP4AV95kgPBqUGDZQ3",
  "key36": "2sHZMMKqMrnLEn3JFgDFhv2GQYDMcdH5BF3hvmzvgVCsPhVUQBrkmFz9wSopaAFWhp1GBNRSMC1ZkyKtDdNRr17E",
  "key37": "67awChf56sdhktMLb5qYxysSXUvbCPpbrbC9M4XmbF3mzAbdZsFdHcUHt8k7BmY5XDRVgWvt6ZJiCpuzseGnpV1J",
  "key38": "4f6p5DhQn2mapBQo7XknuvWCpfmt6xdqwnQEY9y8bPYkYoWm6jgyfYzjCfZ4c9iSdQVPH5cpUgAA1v824cyUnVAw",
  "key39": "4BYKWZu5jvowK4kcppSp5Ae2ncjdGmUZVR12tfdg7emsqfd5nCq4pHroYwp7mLxAq5Esi5AhZHz27W1feVa7LKW4",
  "key40": "tnsYiQaQZZLdX1NDuYwvHtUt8dfcny6Uq64ToLCy7SEymkXKo9dS6L5gr3y5L73wpcc4gDrugrBqApdapzgtvKJ",
  "key41": "2xaS4wPwFD1SdxKCtSywVdharEb58T6BVjFJntdYVTSb52DDfkS2kpY3MARxXc8a4hqEJ2s5NyxrZFHG1igdygeh",
  "key42": "54BqxFsDwex8NUKvLn77UAREVgZUwJmtfu8Hs2CuANpUMpHmGVrQyzsx8tkGnuZbZoQCeHxab2387zXkYVrUZrQo"
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
