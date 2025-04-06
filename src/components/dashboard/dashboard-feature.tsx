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
    "3yeVT7PpVveV6tWUDYkkBRngXMFTb7wqsEsGSSkNjHB7vZzGhFhyYzRomZtqY7ek6oSfwnCUSAMjFQjipJWVzKsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mbyaQELTzx7WTQu43vGE4nRMK4oN7PxLrBQigHBfEZmwi5xvBhJ9riYVHP6vEj9wNZ2fmC9aLjeVijAbAjNd4EW",
  "key1": "ddF52BinrPPgnzyW9fyiqQFta1dWiMo6sQ7wg7SoTg7e8xaWxLxh5jGSmrHVUCqEDru6C4dXX4ub87bySLBnxdx",
  "key2": "3FR8McjRiXcHBhLHw26EBnurLsTjDgEy1dznJXFDVVURaMEL3j4mRauhnh9JHYrFhkc63GHH3znokq2djowUw4B9",
  "key3": "3AfDDdjVNtKuardtqy8q1yWU7La4GmFrGyWGMxuKADW3hyvxsNtGNy5MAZPks689etpZbwGDCnWrij8RxLKophTo",
  "key4": "59Gd6Us1bdBrTVL4sVhQKpP1T4PkGFzhV15cLEnQfg8ynnzbw5oQ9wBCXkRCRDYzVkcpf8p8TeyydmCwNpeguvij",
  "key5": "4KCKwspceJ44w9jCGDrkhzBNuHz48P73ya2HwacucDmNwFvXYCH1NjE3hcbxcyjR5BUFi9L6wo4XsWZLnw8xMM5V",
  "key6": "46UG3LJyCrXYrFAD6uXsRrD19JpHqPwyzysmobd6tdB7LHRj4s1EET96Gje7juER44nb8DER2HtKDwGwJcKUc1m1",
  "key7": "3KNPVmT1weHb8s1aR1PYzDmyTcQ8buKZXUvP8CoU2ERxy6ZQsjGJg7mBxTKKj5HJwxd1QPjpBFiy2X6cNCPYr51M",
  "key8": "2tE9cqrJuxEtGRGwAZuqvA37Yc7Bh1XwmcCa5fnZDBd7FCmzT9E6CENoWrbPTriXnKp1UaCcuccPsZz9cZuHBdWm",
  "key9": "4REpaCYrCp3oRJzHPkCt3SThnxf9QTCJrKTt4Yp54nSrKu9fKm5uP3myG3ZPb5t5fVjU4MuWJi47j4TciFhhZqpj",
  "key10": "2UgJULaUfnTMXEzn6QgNXswMkdcmu768i4Pdsze8L5voTNdHueYDLadMuC5FzXedDBQ9GYGhAKJxzGnpvEmJ7Y1o",
  "key11": "A6QxED6N479Pbk6qsna6rXoLXG26Lb8PBn9RDauwExJikicSCUnTfTwPsGMHopeYZbfXchLWf2WNnZhSFnruBuY",
  "key12": "Fqd9GrGMVKJRyiPJXCBwC1NoerbyuBSuVVgWdiP5XndqwA9iRjv12gQXHqaDERsUGPR8PRGTtCeTM2otbpH7iis",
  "key13": "JaqBfLB3uVxkBZ6Y44zLPuqHs5jNXk3Hy8PKZTMnPwugwMqrd9PntKoNj131ovLMeeaRMEL3ruQAjzNSTTcWd9a",
  "key14": "3hiq6atLLsUMyQ869KQsLfdbdkcjLqk8yYkNptvdRkrkcDwibUTGuhFaDTmFyrPZZ2tm7Xq3yQCs1TajFMWyKvcG",
  "key15": "5SsEMSWfJAuXcXs2LnByyC8oStf68M1ob3g7uJGH65SVXbQt4tZKrTJY5p5MbHco9o3vuiBVoSBqu5z5jH23NPGB",
  "key16": "3uRCZ21jrr5PUBgxUHAjg1Nt4zcgA9kZZeH8wjxQ5ZVmUeCez9GiqfR5QmfaoxfiSDGppHTccgwkJHJ7Wi92yrzx",
  "key17": "3ePcuZ398NxYcnvSmtadthiVWGLcZKsPxocDpA37QmZwRKE1WngGxjzeQsiTTZA39ZT6Fpbon7W4XpFX99u4RcYG",
  "key18": "w2Dp3k7ifhhVdZACcJm1RZdfKkuSddCTJPB3yMZrsNL5CwG3wiRvZ5cL8mygEkPyPRM7gFwF5fYkeuvgRWknoud",
  "key19": "5s5jtzQ5DnoYkdxRNdh72yYE1TFgLcsCuDQPz6aZtVALUvHpjiZFBrnMtHnVLinW83ceEGM93DLqNufVbiUSLuhD",
  "key20": "2jbsYr414rD2tkCgyQsCgENRxeACA5yxEHz13aWheMfsjjzoS6AVk2DbRDVbQpaDDqsgjSi7dFwQbiE3zW3bfqNL",
  "key21": "3GVmwFrnegbUnUTzXnoMkFnuLfFsQmW84BsNATaD6B5FopsRPAnV57mHpGcbypgDQU5asRXwXeowsxWmdbiMfSg4",
  "key22": "sHQDedL3R5GtfrC1Sg4tmcrDsjzmkVKvK3YDPV8mzkcWsZTfiJraaNjVBKzrWmjTtk5vHoz3Segr4UN1mB7NzZb",
  "key23": "4nzoMiRtoami3om1haf23FwH4dFLewfGLh94LFBecrqLgofJMhEpvUojh3isxsT952bjP3uKJza3ivSHGjMY4MbH",
  "key24": "2aAB5moytsKfB7qawWc2iSxKVeZNDdBGqXHuccr1ky1XmK9UrmG5CiHG9kiGdYougqVxDJYesbp5EK968Z9kzqzK",
  "key25": "4j7fQAZsCkrAR5h8CSLLTTzibDKvbEVPGgU2jzE8js887LXgQ71xrssCDHT28AqMbheJi9x4F5aw1ArMqm4Zmyat",
  "key26": "4tZSfRfJzQ61U6XKTz8NwXUpJaKrhPABT9fxxfeU7YyfvVpRqdQ3moYMJM2KHS73bLe7TJ6rhWzc4hh94rZxbfD4",
  "key27": "4397zp6QC1CCZftcVbtAcSuFcPb8JtnsvAXhYNGxSUsrUsLxFbLvCiqmCExCqnXh6ie3YgTnsVCwhEmQjd4GbbMP",
  "key28": "v4DMAQA63p5Ut4gxj4d4MGx1Jb6AzkXyhi6xKnX8tdoHyGn45xi8z56XHn1hQXuMXn6zWyavsv7MZUjxpXu3rjr",
  "key29": "TTdsecH2HNXuptWKCKmQy9yzpJGxruevKL43Dj3pBXkwZEBLAmpr5fVXX7AWm8zwRSNGxcemTXER9ZW9LhJLHUN",
  "key30": "5Te8XLSTLZhx7eaUMv56FmA8m2ZktgnrtuT3d5F1msG9JrfhPUdGbcFRzCUcMpYWBA36v4Xw7RXif9QZyMzSijTG",
  "key31": "agC5VzHCiPRLsaQXzRiR9FjTkZue2RfWvg8HQaBLH6TfaDkugpyFjRXoCiCJuJwRMzvp19RWxq4EPHn3CaP8dfw"
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
