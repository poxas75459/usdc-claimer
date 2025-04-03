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
    "3b7tgTp6hr7fLn3c2vB2ZPdpQVSMrVyyjJDCiHHG5EFC66QwjsVN6M2nLrKEWfhBssgTYGy6zWHtEzt2RUwRVM2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oivTjnA2TYk6GacTvH3SZXCc8umEwRCxxwG27uxs1HmhSRCgDgbNStWe8sYEQPvS2jw22q2Bi8auXkf5duND9EH",
  "key1": "61kMULAdYUJ3fS9rmhPKBi6Enxjh3DYWx9DCbgDWNYvTbMuJbAtzqbdVupJU8k88ArrQStDvYAWaY9jLCWrqY5G2",
  "key2": "2oxw8eSr6XPk3tMW9akVh1THBCKiXmDydFgaXjcjE8z4JJBrCgmGp3QeYVttKsmUwVG8t4zeAeK651ZsA6ipgoQT",
  "key3": "2V9j4dnLZgaMNv4r48kGuMaXvwPM4BERToKYdFvWV5jtgyyhYLQzQemrkqnjfEpm5BDKojH3ajZb4cFd9iBMmXpH",
  "key4": "52bEbgsmroomdStAirktr3C1gmVWDPRU5xhz5sWVRc6FLhTRSFc8zPFwxMGfH95ihrx4PixRze9HXouNMNtBY6X4",
  "key5": "5QoquHewK1Tp5wKeCt7L3mDnqqZ1ZKxzfRDQNkGytL545zi2b5TYcqHyUiNU1MNzBAMbn1jenhvB2hoTJj194Hqq",
  "key6": "5t7CuoNo3fUt4S4dxGf44ocoQq4HGn2Xsc1VBngMerDwt1vPrp4QjbhCJbzFJCKQNBtuMGTcXPTzzr7k4piTV1AQ",
  "key7": "2oULLAaRdKoGp5mT6rARKjw9wGygCnMNxJfafdS6CKgXw9if4LYo6owaFMa2tMBqTJVkTCaKJe7Ng4LGgpmxEAgt",
  "key8": "3eRGbSx9SwsgeKdAWL1pPCh8JWkfss56QYReztVJWTbKLckhqeKyjFRRk8nUcFBpEenMfq6gnmtNC27hxosER6wK",
  "key9": "RzUBYTkSULigEtL586JVsHAeKGXbHji5ewmnvQ3EvxY8co7AsPLz1fqrwaCLpUz5JXbMqeB9CEoDrKYXgHjQtmt",
  "key10": "2dLgV53Y9k5K5b1x4JH7kUiT2vkkZVfuqf74g2FGUAZHqzNm9JShbFQrouLPkPKz9Pxm9ayvg3KfGgsZEBoSsPbb",
  "key11": "5Q7JEgZ2Squ8BRkjnrT5abnYaFdcd1B9VK6NqpVewaAkXperiEEhy5eFCjxfRFWDbyhzzZRXe5x8oUELmU5j7qbF",
  "key12": "4dmSCQ5N68NuDX4rmJ79f3bC85qTr4PKVieqVKnSy2Z8R9DMREENm3yhHnpsBNwqjDwUMHBHn2LP13SVq1nJ8GZ1",
  "key13": "PtDMATXj7LBN7jY1NM7VnvDZDtvfxgH6YxicVsntYwTaaCGwXKVZGSXPkK8U3KSnHpyBmQHZW7QHyYH91hsLxNB",
  "key14": "32AXHxPnQtxrnFFUT5KHXkFVDgS7FVPni9BB19V3xLsHcDk3DZqDDtqvHgYrfn5UfozAdvL3ZE7QK9XDfdVHQtf4",
  "key15": "37kZgVtGNDd1DMBWmoPDrz7v3vGiZhdZmpGA882JaWgVE7EC6iZSQTLXdqDkEiVfZ2XqNfjzXpVQedW41WZhEEN7",
  "key16": "VCnEbaMDdPjaKzmbx7toGpEpqFD1BfmGnPmPPoSnPZgDzDxb22vxcNWoTURFpurM1stM748VSPVzFCuMN3kAntG",
  "key17": "2hzeqTCfsDBjZQdgGWcCui9vzfbCYHsQ37iHRpqWKBcGdQcKmJKutvbUoPjPY2txCe5aUxCMyHb5ishiccZNpkFs",
  "key18": "5JLtBeQ8m1RKRtGMqJ563cqUEd2pPer4EcBAisJff5QEczzy5ZjXkBp2RwbvxB5ve5ben6bQWBZpp2ZHoqV34pUA",
  "key19": "481MoeugNku289rizZbmiebjEnK6h6HrxByGpLeTcFqGLBPGAKXdnqGhPcMK59LGJGxxmuGHUA62M5J35xwcDYfi",
  "key20": "2HyrbQzBTqMcDX7GbxAKBcC7ZdfKp3Q6HAaoiR9K2fdQ2j61ftmYKxgoZUz4uvJsd8oduuc7ETtdYSk9K3bib5he",
  "key21": "4LVyvfaFYtHob1mnjiTgaDVfZAAY4aDNHg4QXwdergu8rS96UGuGLcaZKvbYZDTTJRV5NejgCzDvwevfX5PrV4dW",
  "key22": "5asqQtFfTyDzpTaQ3S4JYLAoLbmGiZwqqFaUTFq6SHAsp1nBDRkQzQYK3EqLeg8G43DoCX79CkREB6tt4WqMEzhc",
  "key23": "5pndy4EEqSfcWgJrMGVZTpv6hPr4KdVrBDdeuVZqj73Zthq71MMAEG6ZN42aFtZj7NPTre136ysP5W6ouKuFJZEC",
  "key24": "5Wrjovmi9yVBwcV98jvZCL4E3ywttmGHvP5xwNeJySjRtqpTMzZ4FW6tkbc1AKUGjG8yki2e3mhaZ5twAGt8KuyG",
  "key25": "3SwAvh5xcqaa6FgNYmcVZkBPmmPqPzHPmkNjW2GgJ5PL9Z27sHfQuuw7SX3NK3sPcXYsqCcHaFkjEYn2mYX3KR2m",
  "key26": "g7DgES7WVVt4yXmXXQpTpuyE1xRP1x5oNEJvouY3BapES4LLG4wKG3CMQEC7QsLXaFo6kAoBCEx2duC6Z3ZKWSt",
  "key27": "3DYHdQwRmcjNNyg2Jq5B1sH21Xfmxz38MBDo1iV6cGReXzZbBLwFeq5JPfY8odGQhy34DrPjzq6Kqv1DRbt1CiHQ",
  "key28": "3ohqf6DRxjoNyCuQXKbzhBLEuLTr6o2RtrhQKN93u1KLHeRjy5uHgfyoNzgo9ziwjiJQkyq4dhfHEZ2KnmBAj8XG",
  "key29": "4Pke9DgHVRAuSvX7xrXwBmjquM4CajvLgXnkzUv5RgBnnuoeNcz3jJn9DFZUabENTN45PjwTRmh1h6HKCN8M3rcK",
  "key30": "3u97JmEfktGVtjJSA9ETt57hZe6ikdK1aWm6vpM1TmXEvLSEU5NvJn7rgTSVGY5LLVgJrh8GF3y1tcmLqLGJJB5h",
  "key31": "33GGCnki84jv4fBfo8VQUHMfCjHTREptY3YBAaBcj9x6a6Xi135UUuZDge9AEWrYzCNDmootD1JLssLEajH6p4Ez",
  "key32": "9jRJ8nW6bs75EjUTZ24jt8rEWK3S7Ka2FgK2rKyhoJe2u68S84iebGidEBfBqBCXyhUreKHUyhCQnd1ydogjafg"
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
