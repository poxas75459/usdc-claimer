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
    "4zu7wifR8xqL1CqJW4Kyq8m9sQB535wXLfwi6uDvPjaUFG6Zj6urmaiHoLHaoopABxUxc7C8DGxdwiyTz6nu4x5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GiE91j6cFrFDnauxrJ5E2pwDubdfMX8JSss7GNCYaeRoeeKWpKi5kyVXoiHBUo7Wui5s5Rg2ZhEdbGf8t9tMwkt",
  "key1": "2MEUy18QGnFhyswsuoYpD3LikhzEdXgqXfzbNEA2FH5GGkfEsVf83fGj1P3UL6NDcahUNrGk9t4yBHKhtGe32TEe",
  "key2": "2cTMhaEqFpfUo8mayneNyLaCEc1bZQvZuZKvAQDaHt9KpuuKUtv9q2HdoCXegvrkDMbyjQv9dzjFhtoY9HpEYpCN",
  "key3": "4vtveivDGycodfLGq4fRGSH6gHwjd8bBoBX1wgqUpemG7h4E9qjRiLe8tTnyyTEBo3msNV7WM7SL1Pu8VKg1zct6",
  "key4": "3WddYoTBXxQWxihQxCdxwoVFJJxBAKAGeT1ZBGvU9n8uYVAgbNi5MoJ4iFCp4x5J7UAUs9gik3aUYDZxqK2DHU3i",
  "key5": "VxjfsgfQeEdE9UZjGFootq2eQ9bD18dzvBuoSkhfp2k3NGhVT4sfAqVomao7c3RL6LDsonMdZTVyZ7i1iasyMoM",
  "key6": "ARzthaTDh3hqF91aUC1d7vGvkn7nFsp7Jmfiwu1DVd3vxZmz1f9HosY1spd2TkKkMeoSiABLnpMP8aVAhgCHa4f",
  "key7": "3rUyPsqYSQ21zPnfjZh4im8ZcQzix48E5wUSN7Q6x8MhF7pZqYB4RkNhuH7QnMamE8bN65YY9pjCesX4Zk2JTrRm",
  "key8": "nr8tMXS3u4Uu4jwCwxhKjetogktR8iBKGucAikuRKirFAsUtnpnziS3XRSZz76YiMMi1bfRZDtCKMcXFYywZxeB",
  "key9": "4X43sf7Z7J3ivdRcikg2cK8giKHVbjC7dw2kUdvM32Ht2zKpyX1vGwB4LcgXGDrTUNkXKoq2FyWrDMtjYNM4FHhH",
  "key10": "4fcUBZ4id43AV6vq32wXGDkr4PdYuWNBJTDUUdtsYcCJu5erK4E7x31umdNGMifFwTef77L3qQftwdn9dbyXoRUK",
  "key11": "2sqdh3NwrokwxzpAg3kxcuqQ83KUcZjVBBTEEpoAx3KhfbA9bEh1Lemefk1wh1nN6v7N4NA3Y5iKKGm6WBSzh5NF",
  "key12": "ZGuEAYDvutj32wdYvk3rE7vB7e21bMqvH9W9ES3qLPGA9ZXuJHeWmZiLBHqBxvnEz4zc6yMVEhTfE2giyrR7TfN",
  "key13": "kaHR4UCZQBEsUwBW3QdkUxRxh2x6E7LMs1GPK1pSXku84wyzAsizkgKqn7cm4eSGjdY9i18grMR7enveEZMRYs8",
  "key14": "2jiMZvR7wwSXbLPjNEB1U2C3hj1cx2mqV7zw2B3eNWsHavrHfCBr2vddugsJuLszMjVQf63ThyPivsgjNKVquHLt",
  "key15": "5TSuMW6zqxeAkaArJdFg5A3G8TUMXMX2HV3osrAmLJBpsWBXmvWsPXpXKUoRff4QZTmU4w2ghX4bUvdjdsukVaE9",
  "key16": "4XQQzGwpkzax3aWqRLferbWYeAzKwko5FTk4n1TrrVJrQP7M1QtA6Si25aHdAgWr9Y7HR7kJ9Hw95AH9kKDoDsyf",
  "key17": "4TDcqe8iTLmPjNzLx4HrGLxgXk42nQQTv7wZ8UnUTTys6pVsQTSgJMhh1RxUyufVJ14XXJLuRrj7YiVLqftxtxDf",
  "key18": "5GDy1JS692HHGKvz4gARiQ4SKgonFQTo5yVxuH1jYXqzDGTx8LFXLYcfJaFGJjK1tckdsMxXjQ5CjrGRDUHrv65R",
  "key19": "wmCj8wwERFy8UKykhPkA9t4QNvGE6N2i1AoM1Lo24R8Jd7ypWL7xpYrQ4dRKH13DvuR4e2N6deKTpKpgWN5bqPs",
  "key20": "2Pb3uDv6HV2WWJSuPxQ6Q5b9xS4gSftMd43s6UrjfnbMXadCHmPBn8kDuZBArQvH14GC5FLCTNivzPMmnwqWwTM9",
  "key21": "4QLuRBaiyqEsBz82h5yADioWccTLEswSquZVkdiCePJU1GfZ4yL1oZ5TG92hoF1cTigLsLQn3K5CcekpLg8uvFCX",
  "key22": "4usEbvTejVqemhxqHLf5K8UrN1ZfL7QaD66EtMAMe6WUmGjGtspqLDo7iQuu8gUBzngFNDyCZE63fLTpZ42MVgnR",
  "key23": "4sgynqQYVFRYeewrfiRq6SfbyqURnHkevmyjjv3yTgTfwaPetNK6PCFuLwLhwi7ns5oWwdWnMLaEputRoD4YKFez",
  "key24": "qqY8cUS1H2N5HwHNetJSEgxQen3jEfn27cYb3nowZzJRjWZ8nKQ68WyooLSpXBB1cWkvZZDo4UKGcHDVqa4hdgz",
  "key25": "5BVbSib7fnEY5B9tbiJCJ6jw2HP4PGLEdKwF1ugJddAvSWFxgEYCG76M482nVw2o41A3X8thB8YLfLdEoDiheSQd",
  "key26": "2UX5LYDS1dyndbbuucZ56CwYdYmVVKW5WSSNtY5EJwcgyG9QWz2xjt6mXXkcBoL1deGra7qNTYsLxMMbRHPxFSyv",
  "key27": "2dq4p1Ln7w96kc2f74oGYZZBpnEPzZvH1B83jaPE4b8WAydCsPmfMDXDfZkghV7KbcKcXYmbyRErGgzhs5DTwuJ7"
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
