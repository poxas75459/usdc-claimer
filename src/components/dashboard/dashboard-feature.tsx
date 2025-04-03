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
    "35szCj1G4FxwPu45HSWFXb6xtc9CQsXRK2y8FxJLArsM2vEcyGT1vrRvaSvcAxbXtURbpniq6F6A6MKfHHnM3WDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uCLK61ReQj4aGHMZPhWiVvUB6uv9xyzvExUiM9uhXCetWxD8cX2vWpjUvcKjNC3NpqAnRzrEzmwSgmxwJYT4bGZ",
  "key1": "59umMe7i9TikJfff65hkenP9z1YNPGmcTzafpR3ys82u9WvW3AWbN34boiSK89k8b7reBErSQgPZQgFsXMSaySvb",
  "key2": "4Jxy2Uz2Rj7v41mDuiKUqJQ5dZRUNSkD8kFVpChhFmM6cavXQJXG4ZFfUTvQnLqKAg6YYyB2eLWfirVWTDgFnXwU",
  "key3": "5NiVvc9REjrQKH6rSoPgjk7uKN6NDygdDv6Hd519vb741qu2dojiX9mq78HBBNQQkgQwNrWK5B4E3QtD1g5yspsF",
  "key4": "6oDhbpMMyk3Yo4uacJfFUsDCDeEZjoxVj6w3W6Kmv85LsGeLfmFaW6Uj6QwT27JamZkcAvhFXYD2G5S8tdA9YV4",
  "key5": "4snXLNgdCGZZx5ZajAS5zYLik2LhSHWTmbU6A8fbHMPHGksDs84eAEB5TokvcWzKTwTB9MZ7FQb5npsUTpWcJ3Cp",
  "key6": "5L7LwthG3SAfkvLnQvrAVPgsxZ2b7h9ENegK3rzG9YAoDQiNyV5LrFw1qt7RxVXG8tmNyTCPU4Zwq18Lpoxw7wY7",
  "key7": "56PwGWE8nJv7DHwJ37e5b2YG4LCjcWHBYGCDSScbUo9Pu6DW4ynLiW13ukWJ3nR7YMcb9Cevxm1JPYVhNPf7rg9N",
  "key8": "3cL7GTe3G367Nd5pcbeNgoBUeDxTaG2RGps1jXuMfsoBaQ8MFHJJmUEhgRtEZ5ArsyGCyE8a9yphBEpToppoZj75",
  "key9": "2xQsC29Wott8JM5nhWJjBDg3krVL9vzzJCmsfKBFCsJQzYgHmAAhho4DKUmomq5UR51qhrNGTCAHUDfsXxXKykcF",
  "key10": "2dBLgDiwfYQ5sbYJJwnvcmj7i5xnhadaRm2dWHRN7k8gepiw67LK6g7KxkqPQSALBgzDed8MXN6vhQfUDS9HGFqu",
  "key11": "5fRRcjxHcPt7Ta7mdyYHcsjX2g11QjvzPX7g1Pen4Rme8FmsNienNZVz52TYAozAg5tu8a6YsqGydHDWKNUfgSpJ",
  "key12": "5C7aPyFUW7QKAf1ZkBkajPn22QNPtrybKt52tupErCY6Y5oe7R9GLGxo2Gp31bhJf9nhCbd4DkLK9RKQzRpCJKou",
  "key13": "2qyTe1okdcXmVEBkTpSTRWbWDETpPvgxH9Uo7q7tgaCzdUARS2ogXvuM9qcK3pyJ9Ap1arFh954MRRrJCFtFXATL",
  "key14": "E6FRoyPMHXsBw8qHLuV4ruqH4Re7P8hW2hK77ibzMZejgNvbkYvvwSLbnabszEp71ueAiVMzp9qncW1V6yPMo9b",
  "key15": "5ZWk461gJsocbs9ceAHVEZQ64A94ALDiuuUY81aDPVKzTQgsTnqCvmxQLRFUUZCTWKTrjsugiBo3JKvSYhuijqjx",
  "key16": "3QSzgkwfdkVL1hqfkr99vekmXk6r6y6WhqTChypNkxVSJUYJD6LwrKWTnk6jjTt27mFNTN6drgP3XRwNX8HYCvsU",
  "key17": "4maSebUJU15sa8TAYkDef6JNzVjbQxyYXRW2edwFCAbuoQ9DPs8MrAxdbDPSWxVB3BoWHFMBU3yyna6mRDREc7Q5",
  "key18": "65jwx6z87uF8vdmKa77h4MboC2TmNMk3c5NsLeYco7pLS8xjUT45N34n7di4WfWYmDyk8Sz6jLYPpVk4AYt9oAqy",
  "key19": "tZX927oRKs453fEoJ9BAqBqQrspqJFrjMj22hp7NNUyUaPzFBcKh7tcVHwK4baHun1fTjtV9vBZy7mMEH5EjL2C",
  "key20": "5t7AXTrxspzU8cxh6rd61ZeKMFWFKiw29EzXFJ8eJTbWFGRSJ6xy6YYyJrgLtaddxVQbxuCazGdnavvxNosHhm9p",
  "key21": "5zCbt3RzADUgw7g93nLhoWpAKneMhDCrvxWi8rYew6BVs3kncbDUkjEX722qmvoAzYujEJDSyHiPzCsuRkg63x52",
  "key22": "5WHs7gJmLB3nWDgz6rMTGZAs2WVripHyApRQ5yFJTM1VLHGqXgRShBx7UP777AYhQqZQjvjspCovCHkSB2i3vzLd",
  "key23": "62eyH5ovEs9zLVvHEeTeubA3eeD6uZD5fVEooECqNAVcCTJxh4QywedHzf9PpGmfWqgqXCEceLhj4oW3KLXgyBux",
  "key24": "2caaK8ygHWgTCHzp6xZo6YeJVuhQvovGZe4Q2ocstzd5DSTfnKudnDRDrMpGPVW4iztfnRRJZk2dwwWtKPy3VPwt",
  "key25": "ccs3uPfFRozEfRsSawvfXYnBzFz7Rkqjhx1xTqiZtGdYTyJGHBcZDqoxno16rREMaTzgJZc5MxM3AzLaHq9Hpqn",
  "key26": "MJgThuzLgVqazccN7uT58Xz9KMhmPfkkupWEuSc5ZpwVejsH8FDhsEYBej4TFgeKzwVpkc1oeUwYSi54XNsJuHS",
  "key27": "26xUK65XaVTMtzy36tbFPQRrLmQbbUiMTss5vZdxGEKTevRf6vmb55FJUsE5kEGfrBUMfQPZWcXRM28TKKmqk5gJ",
  "key28": "5rXMFdJgtdQUjyqbpqPiKT3JEPmx8BMeLBu2DRKqqtioHbpKSMhm9w38UzWhxkPZgh5nitiy83PMz5TMAKCNQ641",
  "key29": "3W2Upu6aScjaRbRViwvSCLYjWcpd32N5jNKZ3hndzTATe5uR4TAVp9s6guHVYJdVFRSuwEqfxh6GekeajNAR7pDQ",
  "key30": "57M5eze6zbhF4DiEHWHmBf54coR2PgBN9i6F6H6s6qBZccQWKg9sc4FGddRBBS9qx6dfNSEP1rJSPjUznT9pZSmK",
  "key31": "x8H1iiZYq8nmjYDJx9No5KugLXLf8h2hhRFZh913ciBcrt5ZFizZ8PfA8XhCdDh5ohyQPqteYtGC7ZRmETGjoeu",
  "key32": "gvagncB67MxpaxjbibL3ZrbgaKWEtBaPGhEo1cudwFRb3M2ufped3iEESpYmuzaZtK6vPrVZLUuB3gBqy5RFDjQ",
  "key33": "5VD1gaTSKTT4GaCtE98DnxpByVdrTnCuRJSMnsFEmzYENocukSiuiF4P98GKCrkyPUQXFKDtU8iibWTxWn1htCGB",
  "key34": "T15Va1EcE8aj2GaN8dNQCfU65JTApKf5pubr2JGL2P4dXMvj3vnNvBCQZ6m5UMwSPEdoigsZMjFpwMpwZbCFZBV",
  "key35": "4b5qSvofKUZPXi5VyDpPofhB7731EVmpLfnhf5G6DQg7FVJnGQPiKwM1h2KFDPPa2ctCRXcxbFzSFQySPmweG6ho",
  "key36": "3KrEAC3KFCUEPpHpYQban3ijaVALau6bxtvKci9Y9MtHei62AEZ8LbpLZ1NuGHxD49qM3iBjEwN5eSim7R4SUp4u",
  "key37": "4TJkUqeSGkWA7jB2QZoKMjrdc7osQfw6bDi459Qgw6dbXsYNjwqVdmspTPUzS7HZjnbbrU7Sh1k7UJBsy4kQqA9S",
  "key38": "5HTF1VzATAfjAStq6M9SVAJ1ouXnZjU16vpM6cfGkquoR9iEAjo44BVtZA5MDyQhXnyS8ZEGF61MCxYgqwNmdQkw",
  "key39": "5W4qUTNnayU37fYVL7e1fjW6B3qfaDW5NRLBBQnSFSXcEkB3GQtEPG4QdKy7pdhkzPmKr74k4f1TTKG1B8qSNAAF"
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
