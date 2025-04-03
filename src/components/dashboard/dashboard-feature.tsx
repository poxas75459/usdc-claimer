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
    "2Ua6i6iqe5m3R5v6EDsnHtiTGZj4kNN1rbAP1oZj2k8NVRBkot7rBfctZ1y67znh8rZSS2VFV2GBAaVBRySV1JQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X6GnwghXxV4SsALFCTAkCCokwi4qMfDNUSadWir28WKTW5nvxsoRQRtp3LL514CJuvxHsqs9WN3X3EEUf2kqgxn",
  "key1": "4c9SEYkntGQLm8dVsvkvzZwnaV89TZhjDHQQ9zuNfzenXUQG5wDdFuPnA88RvkMWMkXJHevP9gGrXzXaeaXGXZBE",
  "key2": "4ba2Gs1PAfLL1ERuX5kFbdosUgPxY96hq16gryV94nqgV7veu6KHAgT4HC9Wti1wYsJz6G3KbpKUNenM8Hux1Bf1",
  "key3": "3BR7BLFR3wPQydQxSqQuys7JXVg2DbjasSaKvj2kJMG3V6s7kBqm1gHM2wqTbPJj7cWZUikZQg11FT5JVGuxoyjY",
  "key4": "4cL5XJ5CuM3RZrcv8M44jFKvVojWsbCZrPiwyKn39WageVdKx8iNncaveekuGYm5HNyEumbeUCnKzurEtsBqTRP5",
  "key5": "AcJ8EwQ6LG4zfmrFkMaY1WX8BRDBbSsGaxZzkND3NKNqh8x2hD26Hb7uhLfTLvuTAZRRaZhoT6SvZHwnqqbCwJu",
  "key6": "xMrHx8D6oCwV7bZCb9DYDHNeransNGyKcmKbKyfwmZeT8Twbod3p8h5hpqBHPh1NmA7fEC3TivEvpVM3Zk9MNtA",
  "key7": "3AuB9PPeXbRMNzERCbk4JuskMZQtDU84XGQRCYrpt3V4h5JYbS9Qykz5WGAMcxoWwWjQNsCTZWqPJmfkNXABvFND",
  "key8": "4wFsbfwczEdBiSNuznK2eAPftAXiJCURKKG3yJf71YDhgE79SZ3SBRz92PVeVSA6pdV4RfxW7DzhMBvuDQhBGxd4",
  "key9": "7bBkvDkYupQWCFDELBBmJv9JxGNr8UHh1zsYJrJp9fR8bE11K7CDANE5gjKTUqxbZLEhrVRE2LBZqG7uSV75otG",
  "key10": "2rMbCH4fQB41DUtx6V2hZQWDz2EzXQbzP6qRNPFHyynS1qLgLPeow82VK5aijnhF7nJwm1QcaycJqM3PUt1jWPhJ",
  "key11": "4n1ePT36CWFC7c1rq7Q5V6prFuLtxzFSsG3kafXtkSbzhSiu9tBZ4vNj3TfQSz48J3GcwdLfk1mTA7kqavawdBf2",
  "key12": "5B6edWvEsFpoeJvZN3uUNH1BnxG3ZqBkMQ7iih6EgsuFTENYPPpCWxzSPTYxNtwtZkq3nKpTYqagmdGGvXZ8dyRw",
  "key13": "63asVnvfmbk8bkgqUZy2VFVvmYZFDdqR57X7kZXniRub91q4ziXYZstbGnd4wiE2q6wBHnyAi8vYn6T3HMeHyy2P",
  "key14": "3cckUj1gXk1un3mPrWqrrepsKwVgwVauHZieVEboz3QcKHSffboQcDdpxB7tVkEwoEwYuXnb4wU6d1RoboWyFM8f",
  "key15": "5Ry1ZHHEt9obXh86w3N6voZPZEYCMRZFRSfkUHHHfPvCRqhNiVtf4bG58G5iqqaPXpd3foh2GHt5aAYo2aM26hoK",
  "key16": "4D6d6yxEYNATa45qfCGLvuqwuYnAfu5mRWp2xH4EiDJrqEeDdE77DFAAnW1YwGvDpMoAnu6F4s1Gdb3mGyow9Kac",
  "key17": "RbHNsNKsQeZSJ62GSsS2R2rBZWrkQmUhU1wrsBDZaZArLQv5DghcG4wCHYhUuMUFqnimRJo3RRRkvSRY5oG5umo",
  "key18": "4w952rup6Jc4mQAE1NxxqREx7mGqqsDC9Lw2hYYw4hydNbEVp1k6d3iZvcsaHQHLZjop5Hghmk9htGGBv23ZYkoz",
  "key19": "8bjsbAZLerqsFwVZLigi2apRETzjPjDjHUWWqFgTd32mbSBYGTeTspNwG7uSxZ6ugP5VneggtY2DmximHPECgRv",
  "key20": "5846JpeQCM8YWeXtma3PczWpTHgP7dzQ8tNeT7ZA5qYvKbe4UoCGiyDrVhFX2aSuMX5Y5KSxg76ooSgDJAtXyuUm",
  "key21": "31u5HJkCks91fZtkDjokLZGqpKULBoXjgKYrGw8ERSTKbiMsqVMMKHDaWf6uGWY66CXfQHgYkZa2yJN7iajkhJmr",
  "key22": "2Hnz4ADLVom8UrKybFrxg32WnPmhQCGtFHCarK7TWA1LQk96wDZCosnBTpmZmXdKKtKJJm2bkfhfZcAbtuH5dpBn",
  "key23": "3RKdVaxgKKNrpVmbxvhpcA8BNSUxr1Lt2aLgpT7AsP5Y8mAWhHCqBXwoeTsb6LPKPC8qE5RkPJaeXF5jEU4s4yyE",
  "key24": "2rBAY7ypQsgRyf19REA2iHJWkAtKnPeHoSBMC8Mf9C2rVAnvATX5mVnbvM9dfZZEm9Hya8xJbi4koEdaa7AfnKZ",
  "key25": "3beHBg53WaVjpNtemuiYQD3m9wNEtmGjVVtAxwLxxqEbMMaNuy7keaTJDkvz9WvV1wEenLiBVdS9oQLbJay1guco"
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
