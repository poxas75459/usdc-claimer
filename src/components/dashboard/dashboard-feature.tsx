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
    "Lj5ypCbsqekMBQex3ae4NkDVZuQxU6EXiJMpJzW9q7vvxKXt2D98pgdBhzwFvib8CHWG894hwNHNF5cRmCsuYsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ZMPYzxDokQC4XCB5a73UbXyobLHePVPrL5jsx5bHm34TpMDVrZEuSobgYXWi8GvKszvtquLYqnQrPC54ACWTeJ",
  "key1": "551zM98MY5PCa6uXa81teKqvryUegPF8wzr3bWH5jzjRKyWvvbrEpRmFJMpCkJzjDwKTUEQGHX8PgfUbDMUSWh8W",
  "key2": "224XHjQniDprEgeZkG9rxaeKgrSj3WHQr361kALxw9MhG2QCxx2CcyvB6MRziWrKfKkBoU5p9Gs8Lj9smXV766TZ",
  "key3": "3jo252cZuVmCkvpE6XQQxRyz4suAT3DQyCxDUvnZbwMNJFiC1AdTkxV61dTEGbLznM8ovo4ZWWCFFjzQY53vmpbV",
  "key4": "sNowHHZZ73uBYwcCkPxDPeAMYUoxAqLrw9T6MsbhcCc4NwrHd6TxiPD8WA3FYmUPX9M1owbhqab9xu61KH48eFz",
  "key5": "Uy72YAhvGBSSfhaSpAqc2pcNeSd1XNXzBfbsY3APNW4fSBWg7ai7fBz62wqkkqaSKBaSA6zYRqtJMgxEZmYjtXf",
  "key6": "2MLJwQLjPp9KciZ8f2bFb7Ef2m7PypjXMVY8a3kjy9G7x2MLP9Qeo52vMfYpzgHYwmnokG4o2pqtGYDdJ6PXzyvL",
  "key7": "hfNSeiK7LaLxJ1P9GTeF5ZaURH2iwjwd1ux5N83kSTMb6HvD7HsFuDhvcatwhRboFGuuNUTFL5fS3x2ttCSn225",
  "key8": "25vnq8hFu9yrJj4URsMxYR4KxMtdP76NXffFS5cco8MdgQGjMDwUSrYMfrYeNDcKo33CQoJ5PU1r7xNcae8SuWw2",
  "key9": "4oz4WkzJjS7uvXAmvaddRN2h1sEk899uMnpkM7kLxrYadHtqNF5mbj7axbJMiuAAgVLK4VU3jLUzBMdrfdocQS92",
  "key10": "2vLqhDJAmdG3myXmrdxyMFVGjbH3JgDy745DJSHoDAzkgNu5RGfekmwmvorY2jUVdZudNQFYrGzTzgK1C3rwHQmf",
  "key11": "2XQGApqN6go3sbpD4NywaYDsXmuyFv8dTSTnanpKkvdbxPfpQ4vLXngBK4e7Cn2fB49BNVXptjaViq1GWWfzmA25",
  "key12": "2ebLjUz8gpWjyztqaWZ2QEPDfXwXUayvo6NX3ocmRTwbR6zwDp1Dtt2zzeC5yM3AF3Gri8yRr4HsBh6rHZQjnHyR",
  "key13": "G3RsaE615YVomP2BQ1F1G6KiGgwZYhrdcEjYrDV59DamBVWe5mJrhQNEp9fBh3jSHTt9QTdF4VhsJQqedEyeBCY",
  "key14": "2hhYN1QCc1hZcPpdR3ba5di8FQkS6ZsdHXR2nBdmTKXziyAR1sAEVEywcyyEYD65xcB45xhTnJ4waWyCru4vUzcK",
  "key15": "3WPMRvevmhrCvRbbnSS9Pm82aJcvFgX6YqHB7BQiNh7n3JKd5kTPoyyLhZHLygnLg4XJ8ADUgnLcJPqF95U4JvY5",
  "key16": "5KRrGhhuRTzAY89SYtBuBQgxmfvA8mr7MhXUsMRkh52yA8Da1RJW3GnQh6QR6QXR3BAFAP9rAwU3vyrUT2khmjxU",
  "key17": "66bmSws9NujByMJyDaVRYMzuLcvrM28P594xt18uXJ9xhTxi6tVrc6xJSWUY2Ex7SqVMW9wUQGTRaaDGpyGYJ1Kv",
  "key18": "rbsneWWz3RZ8xzTBMgaQwPwzoemhRMsNMrFDYLkdoHQwihpEYiRBdaj3jhsML1bjkEhhPCjWrfareg5r3GUsSYN",
  "key19": "2p1WneMWDk38QYQJUvy54xLCPxSsvEVHWLcvHhAEvuV2BBiw8orRcPT5mVYsj2ncQS8oeRA6x2yBVdyJN8nZNrni",
  "key20": "2Y3rcXJmzKVbVFcqqCKoFTKmgN5azr6QhJUmPHNA9Q1HQWboPxF6Dyzh95ant27kJQhm5FiQoajzNHt92WXhjtrF",
  "key21": "2dXS5hfo7vdBjzXEvSCvbpwG5t1HqPZncWCsRX8dvPbeQknLN8HjiYXtrPyusJ4GSGt4St3A27UsnshQ7MkKdVh5",
  "key22": "5mxw7JyFGXTLK8F1ShM4shBriQu2NPDndhxeCMyNJFGSPpgxobAQsb5kzA8ajh6SJbw3g7jq7mMcq76udHC3QX31",
  "key23": "4Vfe5Jgic1igqguDtWiH78HaSXZKaqqBGZGGF4vymbedxwDXrssBpyxBGeZWbo9W5Z8SpbucAvtqFE9iQryWmEN8",
  "key24": "2krZU4U6cWQzhEphRPDWUvEF1uNKgoV5PQrebMgwv8sLY6qUc7x9rYvCpt3fvwmrEGPTgEfDAs7WApqaVDQr8qj6",
  "key25": "2QQCdb52SiGdM6cwg7Hr7VbeJpEHT5D36ZZSMXo75paPdLZGwh2JDPP5HXisAbQFXAnhVy5Jzfa75CwFAjN34NMb",
  "key26": "2nonpPMgjNjph9nWmP2ix8gHFHH4y8zzVrrN2ddEP8j4gmUehKpLREJAEjq9EEnhXC5kLPVPD3wW6uUU4rtC7xCU",
  "key27": "5WYYZrBma5L5qUgMkBJRJcEd6T25j5PaNFnvBMZ5CnoiPsSYQ9TY6BUAY3msWdQwSmaKSHq6JN6UkikKe948KxGL",
  "key28": "mUPGYM8TSnHHDyyECWg4HYpWbb8br8qDUxxA79CgokNUCezbupq4zJSG8uuh1UjYNbRc25ZBLEX3jFL1wf9E8wo",
  "key29": "2TgK4J532QJQS89GRRg8umWN6vZjPkvkU9KRE48YEmvXY4YKg4uNEMnRZv6a818X8WEJhpqRiEzFWRdDJB6gBVp7",
  "key30": "GSAQgpZd44t3kg721o4pPD7KX1AzFxkyeDwKnifJVS8gXamkto5bb6UZwAsCzux9KZVzvhmrwxon7VgntUNS7GJ",
  "key31": "4f3wNPZhdVUoLh2viMUKhRcwMzWATRWDDd6CUBMSxtHXYfBXjmA23mEtAAtrEAKaVrScsGDgqHcrHh6FkCUpjCYH",
  "key32": "4R5YywuLRdjFCzuVoS8iJqUX59x5RwxHiewom1JSG22pP1AupoWUkEHtM9F8aA3yBqEUmFhBcu2Yub9M6XozNCTN"
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
