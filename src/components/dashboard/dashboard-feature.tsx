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
    "2JQJeWav8whemQeR8tFfPkYmtYsgkTVMjh5bARxsxLBYwyhQscJpLvSKxHbL2x2NTS915aZzchCjYwAfdFDpaMt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vNbWuH6DEvunMPtrkMuFC2mWdj3xDsHzmQQ9y3agTQUWHVtrshPxaNBnnU7NqXkfHFeqNvFsdkytX2VozWXRcAK",
  "key1": "5PmDktoxPNQNWvn2yKpfU1JnRJrJkNE8SCEZ4AuNkLPj958dgoZWrvFYSZRoHnYpkaGbkbf8HEzCT8BwpjBDZxzf",
  "key2": "59jdPVMUyx6Xy8mJwXXremn7BBbQeum5NJ6m8SeSfcY3ACfikqsFB7c9Q6ewowdg1CGinWgz3Lq7FwCorJqGabof",
  "key3": "5FyGaRu96NEzmaC2GGaYeVgTQ47Xmw6vFB3qNg2hBbSvuSghgdTnZ8iQ7FqVY1vkMhFKxnFtwwtG5FavocjYoJaK",
  "key4": "272r81vYhHp9KF5oM4C7PxWBGr3yVtCbYPzAmHB48cnGuD1q8ykfi8wktaw3Mt6mbKc2Xjg5annFtrzzgyJ7Uwm7",
  "key5": "5UmhjrKWAAjACR6Boe6vURhanA7g2Kvp1KeKqRnrzAgD5jUV4qVZuGLXHxo3Exm4soCLcQfKPcTHVL2ijUWW3pYq",
  "key6": "5WjhUmV5bHa3iBkZ7RhMMesWYm33cPv1D9f3X3nhTE3gxQt6rRAD4LnTo5qqFWm8CbfDvkYrh26byusHz2rQxpgy",
  "key7": "5V4rrg5pCYUSSJ9YMndxckdfyvbCy8Vd78jLwT54JHzeEbp2eJLFU3p79S5YHRPoukB1P5YmUhtoF8JVWyXiUs5j",
  "key8": "62MFRhsd8es71XVUyM3RhqrFGHKunDLzMjjpditATZQV2e8eSDXZFAKFBbRFCjkPgC6eC3v3Ag5mpewkfmmu83Pz",
  "key9": "2Dfy1fbEfyWNoagTuucuH79vJwNCBrweTwmGFPvg7CfLiiVKn7MtLQMnNuaBTkSUaDJzhw88HaRtNzZp6TTkMvy2",
  "key10": "2ztZNoMdJ2LFi9dbGD912vyzBySdXUUyAHLNET4VpbXeRNJbKZgNU55ZpCNiJfENPW8iRtuots47vaSaUgBkt5rK",
  "key11": "qxnUzfUkCKzwrkK3YzVaiJvt6PNnqFeCETUBx4ALm1PJuPDcLNZ863HvfyTGApvw4eweCb9UMx7ybbzDS59cpbA",
  "key12": "5GNiiyj9vPsXaAGyN8jEBXFJQiymHdWVMpbkt1aTsenyPq9o1NwMHjX3zUnZwnp2boRHPfdV21CLYx4sSTrM3ZWe",
  "key13": "2ymVXN6xfT47oGw6WWj1x9QkMiFrRdxvGexXNK9CSstqW1S7Uu7acKhmud9wC8ih8p2ZAGfKu8rH449tCE9eMwvh",
  "key14": "5m2RAZ8qDAE5aD1sWaHEandAuSYb83Z2X7n1ifr81TMmmx2ne2bLyYZ31zmtVBgwbosbwnqDm3JDbDLQs8kDxeZM",
  "key15": "5Ameg6CAhVagjRXjqCNT6JrPfcmLGTtRR1z7tNwTnsdzdKBDkb7m5ViDKSYUt5seH9B4Wm3ytWa4QcLAaLcy9tKi",
  "key16": "3vTMJW9AWRnXGhhx5R7G2ZHSYA6PxYQksAn2neJM7ipav2HCxTRtXTSe5t4LBQAJNVPhZgjUHjZXyudQ1ywBBYc6",
  "key17": "Rowzi2XGkSBeJeYAX6oX7cn7KYerysr1uUG7fbZinnhj7KjUtduiUu6ooaHvwYM81JsJgjVSkuNpgjpSH8CkBKb",
  "key18": "NMqb8TEZozJS6QPSzZqXquRyH5WS2NybD1joqcrqqGLvRTeAxH2jkWnAWQsM75FhEhSa3Gn3kqFUp9XbEuBaGVo",
  "key19": "2LqMMXYmFrcCSLR77qajST85BE6N4wLrDfTMvVk2nrSm9K4K2DU4r1hJ3MQtUaev71KXAD42wm87tP17cnZ5Lim5",
  "key20": "32z5zhD7ioVA5Wz9rxXEZCGeqeM68dTNDvVTwVfMGUC1P2d8Pjr8vZiP84jbFFAemuo9CGWx11g8XbiMpsRyGrrf",
  "key21": "5tgoCjgwwGH8LSrPNQantmHExtYwsRWz3yQp1wAsYb9hvBmRyFC6meBKEbeB7T7deAddHyqd4bP6qBUJnzmTQE6R",
  "key22": "25rTo8C3hAhtCFjsmWDxe3EX9THJfTgcojxtJN6QxEKJnQUkju9HrVYfaCqZUEdkv6yajWYGje29DT3EMww9A6Vj",
  "key23": "5WFWfKnERoZvBYrUaBve8JKiUyqa491ej4rFpGaXWzhtVE2q4QkMyfQodbQEx9m9oiB6vWGfeeQhhZWNQgz46tDx",
  "key24": "3owUhgeCd1SnexyBc67ssh4s5WvMhEPrv8eJe3h7RKeVR3MD1cRvetc15y4gn8PB9Wj4nXFcVLYiq52qHLUkYBL8",
  "key25": "efsR2Zeymj4UKrir4se3EMmX7q1eGMi7MPExda9oEyGNLr9B9A3m6XaHWhjH8agyj4DGrBpWEvCAXCwZkzHfapw",
  "key26": "4eWzLL3Jz97V5b1Ca16RJixxPBudezu5tDz6i98sqXtyQ92hYLeWhxFFwvHfNVZ5n6dRtrUfiW3sphKgMmnNHLAu",
  "key27": "5336fvGERR3y2bSRNP9vztr6QeoGe2GXLksjoKCgAZtKh8TctrBTN47JKJss4arDfk4CfM4LCVDtQeJGGu3jKke3",
  "key28": "2ZacGVRk73BUES8WA3yW27rAaSfSHDaBxwZoWUaZDMfjJyRm4aWrVmppmueD2f6QGYSosJPWPZLq7DNR8TEuKy1w",
  "key29": "3sq7PNA4X6gGeZwxLP7UEix14XcLtoGHqz7oKr1Q89vNeTG3eqdFKDc8Bb4PGcwXttNymEpuahAwfuK6Qerw9awL",
  "key30": "2FjXxyG3dHpAG1LD5uFgXrpxsXiWAyWvuJvCWoq74qmPc9KEpeMnHfeefRBMukqmFGSLxKM4HRW9razj2wKN55vw",
  "key31": "SHBUfNY4aVUZCQQd56JaKVtbBiXUNABmaw5sm8jTEAjvxUsbcqaKmxvb4Xw2y8giQGjmL2k4562NfL2PwD2HpZR",
  "key32": "5dndhfKZZqSPuZycHQqYSCZB1pTRW4dBhirsFEmR8uzav7WjfF2wRh7QGPi367PzoxwMiVknpsHiEtq8q7ya8QLM"
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
