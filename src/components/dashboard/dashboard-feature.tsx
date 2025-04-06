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
    "3G39j5tQsjo2vy7XF4hAUTjcYVrfzjbPgPYfvShcmpFvjJYoYeSyzcpBsg6ijERVrUGZBB18GeVXM4edmfJge8A3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Sfdno2perLqAKgMzxiMaPi1MLkZWR1ktrpT8gLiCBvc1dNqziXkcepw489jaSUshiiBTzRwXsy8wdVh5RiELpT",
  "key1": "3TZFdiq3fbH8MDvWJimtY4aLxQw2yHHr52DV16uwJ1RK8WsRUxtFNfZcEvvbWsHQ6NBigY9XmvkZKxfccC4DGco2",
  "key2": "3xprBWb4H3irfDKJrp8Gc71wCTXqN3CQEnwiXfG5hCtzPV74GWMF7eduxcEgEvXz7QvbFiWVWPzTe1ojFhTi1uux",
  "key3": "4Gecprz5vfG7b6NvJ16cXM5BrTsi5jFkuPfG8hqeZ1SSg3P3SWjh2jUvi9b4CiwZ9Q4UZbS1NFZELRT7xgDjdbKk",
  "key4": "5URCTBdk4JyeyoVze8XUT6B7pa5ktXJT9JjP3ivwGt2LXCLHTAxLW6HDVZ9vosbB9dLu7yzLXY6ukdXiPgyVkWhR",
  "key5": "2oVcCt8toRCzhNgnjFEvnTqvEEzv1j9nAsuWpD4VZ4UaLv9eD7FJMA1MqHMzFtKhqpPyTb7i85xTR1ELToHCxPUp",
  "key6": "3yYKzLKVtEpUn9BTjZMtVjkACjcEziwnFxN58F1W9fkQgNcDxtnpWWT9s5QKfjSkyhicYB9W2HGgTq7KfXB97HLp",
  "key7": "643Y2qS3rX5gU1YeN8BLbwaQoLQnk1tQGCdXdC6DEpRfWHyw1pNKUozGviEVieYPxjT1jWnDYFvy9XZAm5SbQACa",
  "key8": "6d6n5DFhTDvFwaRToD7eAE1fivVyaThETLcNVWdjLg4TNmit4WHHbuT63Gwu1KqpYvJsjpVVEmJRACxaMsoJ9F8",
  "key9": "65JJT1zsGHuBjjb4bpGni4i3RxXJJZK1JGU3jBm5QTVeeHcTN4NrFxymwk4MJ4nL3WXruD8GihPdHw8Y5YcNn8Vw",
  "key10": "5CqZx5yAYTE29f1YGrvKLYohLKHp5tudJhs2LtmdsZ4d4PgK4HbGRjuZJFzH2T1n5ZbsCk9wP4TK2tbvuLAWtRkG",
  "key11": "3tkETH8sMUCJS7GeoBd7BaXtNgq1sjYxn1udDiYL49edLfGGNoCtwxojjrSdVrgsm1LWXgeKW3N7Dsk2FLM6ncoM",
  "key12": "2xPzEgjW2DDTQAnmjXdGViVpXs5n5jrXwkNWXYphieZ4RQXFegHvGGGjhrz1pvmx9Kag5eS5xKdVFYGxiEFGSBQB",
  "key13": "5NFrjJduYjrNdmtqr1PfNb7e1wxjBbJM67Ap9rnyTSaZqk93M3kmH2N7mjpWoV4zQihLE1wZzTo6H57Lgmbr3sk9",
  "key14": "2NvfNba6khpaJkHVqHYJRVgFFW4tWvrYcsRXUYxTfCPj5w5vL5eD5APDW6avZ2UWdQ47UcaMDdy2hZuG7ifbCkQp",
  "key15": "2tqAqzPPFpDKtNSc21hiixM91tpc7wauyPGq33VuvttDPLxsGyGtpJYeLc9P1drgJ7zqUF9cWSM81dhvMqr3kqyB",
  "key16": "ydhFutmtAx3EXn1H7zvgjUNMZ9MgN5frJhKJVWQe3nqqiBoMs6VRZM9yesmErAxTw8tApd7vP18UBLE4gcMA6uU",
  "key17": "2JpG4hmtGudYtWtw7opQHqoLDcTXx6pG8saVbtWddWJFVkpXbnuuRMXy4Ap2rtg5zCM5W1qKfxUsbLCW1NseRE42",
  "key18": "2rnnEerRxQDfrQkiMzAcrab3kfwZ73NphFGre8nKRFCBDeQxEAuyizoLCxbtkcVwz8xQhx7XSk7BpwCzVhKsPU1g",
  "key19": "5dWY3XemtNkQNJmMDVt4PmkoPSPg5ejsGMTbhLpjGeJY9ZJdiHQbQq4zpxPmHXPE5BWu5VGTNdDPX1LBdu9aY7xt",
  "key20": "5veStzTpP2Tyst6CveY4YJ6EoWmXfj2bncVjhixHZnYwoo4hH2RsfwJ1kZLsfX35FPvzUYPAeMVjz5bh8PA6rFQv",
  "key21": "4xumkLHfbzm9bitknUdLqBbDKYioQwnP9bD2d3GmGG5Vv2pZ3BqFtpQigwCG9AaPtvBK9pJaiXNTSjYLe82CKSBS",
  "key22": "5R6AVdFv7Ca7XeMXSmqcgzUAEBNj186HWbANDAv5Np83k7KEDjbX2KuG6K4fLP2fC5Y8CyPAm1rfWKKk4ngwhyyz",
  "key23": "3moFFoKWG5YwTcFU1ScMwhpoaY1EbEyhQHwJRxbR8rKdpqVVuRGdfRSwNLsQgv6XfojR3RAvmRhWKnG1X59UUYwP",
  "key24": "2uqwmifmjRB8Fe5NQ78bbr597DtH9QKkS59wBiQBvHFYCJRHvCLJLTQWGrqKHWcxwCiiQq5X6a1zso6LsKwUY9xm",
  "key25": "McmUSaKCK2d7kksigd2KoBQh3zAbSG6dLGUMr6A3pPBDoFqYpK9cYeTKWT5aUGfACH9oRSwKE4WJAeD6X1oXsvU",
  "key26": "gruhRYuo6P3Fpsaq1tqQN3NYXBbZsXxrwuAK5VJVM748VKz4BwG56oYBYmmvj9V29VvuLtZSAbbMBTevqt1ti3R",
  "key27": "5B1dEeXj5xtnT2nBEQ63kCDb7zDtrfzHFNs1ggKxRAVccF9BJnPhHVG9AKM1SYYmUtFBDFFUZTU952kdCdZGkjfo",
  "key28": "kRueNrgu7RoUUZrBL9461roZvrVg3oKCEvgxUTMVmdCA9cSXy8sswnt8XYRY8wnzs4rtNH1aQG9uFvRDMZ2qzAK",
  "key29": "5dNgsb4nqzSMeqMdEjWjrqkjTswgDuUr1or1Xx9YgcQG6JhZAX3jGuou2dHnmxXrU1jHpE9yPAMdmmmWQ5zhQa5w",
  "key30": "5JsSvWUFYRLqha4XU6KokZW6XVDnnWAya8uVaUXjsPKbcSiTjSacFJUxt9VgHgfuyBoxGqvKEkrWUqQk6V4yDWKY",
  "key31": "5WHbzhWbmGrBPpFa9NGxZrCRkXBviNeL9Qs6S3Dix8F6mfXJGqB9H6SkfHkNsQEM4p7ihWcmNA85234SeZJpkfNP",
  "key32": "4jeoULTDaEUsGCky6MavkrBtVar8Nk9Dg8DFGNpSugoHBFh3n96AQBVje6k1ZgdfiEToVikDknSujV1aUYWk7mku",
  "key33": "57wYk4wQRnKo3Knj3p2nkYTMtoM8sSh8cjXotedjxAvwRtQ4npYbLp8kZQpoXjWfZn8AB2bhJEW4Dsqq4hiMkgLg",
  "key34": "pTThn1S24ijJhTk17QbtFQHNspif1JebJaRmTJXuiNomjL2PnGTRr69tE5pbtZ4bi5tCedfH8FA25KDhcPFsx94",
  "key35": "3H5sCcPvbzXiUh6k7fupVwKp1x9jV9jnFaBZshpaRzECmAE5RoVky9uzLTgqzd6H7djaAn6HHhnv2q426QVaHSMi",
  "key36": "4ooeE5ejCxJ19rVyLXR7CVuCA434KEAAs4bG6j4ECt4nXQftAgYtLoreDapj7vMTkhhu3TEng8iw96XyWACNYFd8",
  "key37": "PvyErQDMnxu73SeuGj6imyGXcoaeiUyYVcgAr31orPXVAvTr5YVp2yzoKpjQpX37BVuXuph6fTX6rzcR14UKRGX"
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
