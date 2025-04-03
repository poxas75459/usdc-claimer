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
    "r4bvA3FdK4nE8KeLkAKd3tpdRLQFMimberVf6cKjJe4oi4DS2ddWD5ZzGAj2YJYPzTEDVXWovesy14Ftm7XCvjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Uo11y91rwUyYVnWpByP7XRqpd2Z9kpKP3AxjNEycpeW6pNd3Rd7FtxyEJHE1eCyG4rdm89yvHdb7zxTXrenz9q",
  "key1": "2zQ8f8G1RgQJxDsStGNnnS1LN5QnP6rC1poK4AnwpzBjTNRzHG3RArvadot5ufmcgWnuNSmGXkjJeY7jANz7rN3R",
  "key2": "Z7oy14n13xtar2VYAYz4RYMrvaoidwTix2B7gagz3pXYyxKXxLc9pd4Qs3ruELD5z4fgyr6nvP2pxiRHFWDujNg",
  "key3": "2ZcXngAKp86Nt84gvtUa8uzDfhUM3GSErEAAEmZZDCAr7FkwivzCnU5nHULnf8qVEmRSfmnRCkpUpYktdRwSCdsA",
  "key4": "214MCYv7S2GSD2WUC6hhV2rwnXT36SjMmstE8ruKahBQxuKb5DnaQZbsSjk6CuFdzzdApmoaPoYJCEQwdJZtang7",
  "key5": "4xEsdVR21yhvpFJesrSVnSaNmh3sXzcm2sg8jXBQdtur3k4PLgYkjdNrFV2MqnffW2njqdMjDpzPGxxgNXyhJqFZ",
  "key6": "26kK9w4bqWok6e5wNtsKvLeZJG6tRbsRByiaBtR12dCiPWBBxDwF69zAM2txmneL9H8UhDA4Lq89SwvtCTNKVS9J",
  "key7": "g6hp3JSL6msn99VHePj1DdiMfJK2Gz5BVVSRMX7ettM2BeaXTsqVqPX5RisvUjbBsyLzD2LJT8tUroHGctKXFmC",
  "key8": "2boDRZedkTMBvEXgU5SArLeKyn4cz67CvQFnC7F3nEZK3XRtJo6VtzVUWHeYgtDwNEEJQxNLsoP9EYP2RdxEGhZN",
  "key9": "3qkmzVxt36y2Qqfeqj4FJXXqWo2y7r3cRVM6ddTLzALM7TyDT8ng45oMutZMaeDJC8KwiGRirVizbPkZVDt5cktb",
  "key10": "3VXD4xMrRwZjJ1t2vDGxhwTttFRhVP8pnCPk8rYcGAsjCqdwMLwmvY88QQD3CYzfAEkDTWZ95TN22dmzP2Njd5Xc",
  "key11": "2NovYLm8NjwAN7TVn5SEQhsh3HrgPqVmGjZj3aXHXhkX6GnZRgb32rf3gqwCbnw8ZCbfa9s1hdvNLUEnewMyp5fp",
  "key12": "5Ltn7VSFy9Lu9TQnnzVTVNQBprUz8gA4VDPuCTNyBNjiLjA3GVcWCjtGW2Mqk6J2jiiLyS8psmatpa3y69kGWLZz",
  "key13": "32FzAX5A9HBePcpquJ23ac5peMgtfdGVAvb8EAJhf1FxTWReVPFemN2fYSMEQWwubEd729ttVmwK1V8Ggeh4E9Hw",
  "key14": "4QPJjKWMpN1VKd8oFKDyd6LzUhPfaKPawnaCMwfwft6yzi3yxB6LbHBEK5DzBxegwVVv6VDrPrhxaqgaHEt1G1XY",
  "key15": "3qpyNr52AgNTrrHSfANy5UuNwYGEsK6F7idGGRQk46aVLcDJA7stiAFCobhxoVoojnNZrYsrVzS3BnfVsQZPDTuh",
  "key16": "4Hkh9k99Q3AV9LF4UNUDLLVw7qVKzC3JgDGT8t8QtywBPTJ2XiHYXcbsuzrBscF8wjL7zh2ggtELzduARK2LXg4N",
  "key17": "MgTiUwBSXj4YAkpEPFWE31JdrT5tCqr3knAjivDFxUcv6DAtoXd8bM331vgvsZpD6kCHizJcLvyfABYCck9H64B",
  "key18": "3kV6HBhawyq2gFb4WA6v63Ld1PcqMVnfVJ3qWmyGns8kGz65u2TA6EAiWiPDaWhdjhBy6LSJkm2dknpdSrsY1FkX",
  "key19": "3CrjcD9Zj48vsnfU78chCRbEBDZ3k6Djg5eb8rTVi11cyQ3PTU1unuBu6zvyzDpsRCcGCwK3CECJFnNNpx7iL13X",
  "key20": "3Xi5Tu6DvhtcyGWRd7df2w51Jawryr6WYFfjb9t3yvnajvzsVHiDrWdMdESp6prnPPxVtq2h3Yk8L5Wmy9z4mGDa",
  "key21": "5wNhqxndkueEcWspgEma1zpgAtLWCBBPMvzKSMb8XhiyKtM2hFSTNvM6npMFYo2Zj1TUPYFWkEjifw2Dqxr5D4t7",
  "key22": "5BnXSk5qFdDbkaFb7BGX7TQiVZ1atEkHQ2pVur4zKBn4R1cPMZp9pB9Kon5xocGYZTshqPN5exuE2PRg5rHxUNPK",
  "key23": "53VYWaXw5PCkeEAtKbztRRx73fHJ9knExDssDWJQF8zncKFQh8PAWp8FMMLqQrcvr36Dngk553zRSkSGNbcFHiF9",
  "key24": "4MdvYaKPYXBtwi7uey3dfdyrySpVoWcpiGSTrYygrcpzqt3usurokYzbjCWMcNMWpqsqd9g9YQnjGRJyTjhNympf",
  "key25": "35i5AFtTGLy23XCcTbJKgU38sFYYrXcjvJXpsuoyvgP9dHMeQNi7EFMUe9cU6xBmunwgNxt8B286Wuf2yTwJE2xv",
  "key26": "125CqJDbtVjkuKCpVfHy8dfaxuawhgENrN7rJZhbfjX7Sy1iHHLcVjepBrpi3V2kTkyNMZ6qb5Zy81a8ou4sYCgE",
  "key27": "4aBdYXnaUdQfYiNDUf1wa3TGiEiVBeAsiAC5tmDMbTmvfjfS1VqFXWGNkgsrNxC8eRR341L5M8PA1ZbtUNNajZYo",
  "key28": "2ZLTyfhsYUFsrHAmiMPKDirUsDxH4cEZDq4aX6XQiC7P4iXrrujf5s2QP8Q9Y3EqMUf84Pzo3G8XcapUsfVB8rJy",
  "key29": "4qPoE5AwEn8QxbBk6LrYHhQg4Zt387AeY3PFAw9znDMcpL3nx6WXtoQUppYUexcYgH98XspVM3s64i5cPBFbRZ4J",
  "key30": "3sBbkjYGerd2gXB5kU34KdE3zwceBze5LmwAhGJJnVcSwQj82rawR4kavnJ8nS2ERVRisXUXTBEP3m4xtzR6c6sP",
  "key31": "2i9t2qzjmBRxUFwfVkrv6MYJctPKAPjpb3abBjRmEzqM9ZRuCvdQLs3g9xwH24gNJzHFLga3bSN3LF8ySNfZRnKt",
  "key32": "467wjdE7W6SWhnJUHJ1b4g6m7R19xzqk7LBbknjjspJqw6qRFMSFQNy9CbdAidWAC7AzrFwdifymcSC1qHCYX3XN",
  "key33": "5NM9TgUFh7SMAuqd6mrXzSPMLZ2wZSsg3vQkUAtx7jiPuAZTidgmAnoeE3hx14dd2nxKrgFsc1HR6CfSQpS9BNDH",
  "key34": "5pdZeRnLZkPDb9jofA2RTJbLzDj75xM6UXsU6Mm4f6fuAXucPBZD84y3XYKbcdY33ZnxRs7hxnP76KcJaZtkufAD",
  "key35": "2K1UE2myufuEE39pf4f4uTa4n9AQSRSyzLAqSNoyskDMrv7HfCSYLEPGDWBhf23aZVNBs6ryxefXCe3v6n4NAovU",
  "key36": "2zTuXXzVDU4ybN67888QEqp1Ccz3e3qGHphMknVdAFLP29B8fqBgAZMMDrohcKf9tqT6aS9TZ3dRoewnvbirp33E",
  "key37": "5oXNPfURamMCqMpiA7E42nDhocDodsY8JsPKLmgvQ171tJh27mSZM7Nr3948yorCWgogi3ZTQv3fK5zRBWZcyrEy"
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
