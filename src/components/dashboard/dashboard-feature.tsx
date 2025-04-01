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
    "5NkW9pdZkDtE9wvK4mMRun96Ms28uokQBps3xdrNp6444jYxr1VgaBQDHb7JGPmcFQ9sfbc4vgvhUFYqvmnAKsAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nv7X3VhQzYjqGSQ9wZMQv6qsYp9B9GsJ1qPibJKuxwceXrpkpzjfcAx7GLiThUmUCi5ecgtqHCGZfXRdqqTXpJr",
  "key1": "GX7mfPzh36n5dSaFDhCawU2jqAAjJzagpXYc5KV1a49knJApbJnVDu1q7Wg1j4DcgJtJqjXMbwG73wDNpFejqij",
  "key2": "26Pk52ZTmF2W1BPz78LGPA2Wr9tZmoRhiaEwn4j34SAdytHoKeXrVW5xfYrFZ4k1BBUXqZ8Qx2FygQ3xdmSeK3B2",
  "key3": "3rSWTVu4i2x5ASnbfPoWjptgBXPjNCZXu8z3HvVRQEiE85Z6bAB2j3KiSkFaxDM3sLctGCQnXUiFHFAeokj5Af39",
  "key4": "5h81SksEEs8WGfnmrmQXoEtQhPxBm9ja6vKX57Bzn1BBa5ZF3jQ7FeY5w4ntbxVToP8Wymi9P2Lx2BjjESaMQbC6",
  "key5": "2xhryqzSH3haNkme1miZh3g3D11PbKcT49XD1Y91kfJCJHH9yqWvoY1xXAAASG8oRa7FMYmb7fSP8k5p2DB5uwVX",
  "key6": "2SNfCpHB7yikpcKLRCcg1bBThnSRmFTuywVaujQxokpprXJxSuHicyfYayMkaXPLKT8jCpFSSrcqmRkx1ZqfoCF1",
  "key7": "4AHDL8oLe7PG2RjyTgJQ6Yy7qhQTPpYS53z7ZXfct8fHhzZNFc1UeRiDJNxKGmUbYdNopMb6FfMQAo1PW5N6HHpw",
  "key8": "5AYecuj5iHaJ8J1P3qx7ki3Qjn5ZHi3xFUhzaTTL3HbkMiPQXV6XEMTNnCr2VRnhpASHeKUY9bmQMmETqNH24NHX",
  "key9": "2EFd7H6K4VFprvcWYdHA2PKyY1o3ZAr4hAi14kwjSuaeDFv3mPJqUaoLjXq76mromRLAXNw8DSxypdapzJNjYU6c",
  "key10": "5b6Ybb8ALNUbwdufrmvEbgCLr7cdU7SobmbPQ14rUsj1Md49Vg4N9D7GYASFoXhLG1yEsdw8XTy3YAWVmK89yMDX",
  "key11": "SgmyCUiU9zAE1Z5Gji5THeMARvmDnbc18NfF5nv596Veymv9kj9yi5G23wKJQZgf8YCsKMQxHooYNuDq4LnMwej",
  "key12": "5nuXyscdb3m998YFycsUFTbrVbhBWwgY9ShE6qdN3nTxuiF96hP4ejqgW7eB4tbXUKdQXuzMq5ZYQMd2KzSg7qZh",
  "key13": "Z86mnqe536w47jGFFyCSbp8sJNXPb9SC7tCDRxA2fhyrcHtTj16atUjHYkFPWWNccQN2i3wvNFEtRFBaxy66VvZ",
  "key14": "5ynpzVFEUCNYBF2Sq6U8xUtDdMZfNKqWUzHyKVPAJHJ2eqgLtLHf9XNEdvARcfei3hvWBKEnHeccwHbUYVsqFxpU",
  "key15": "2LZSugjnc1GV5hW8TAgf1soBgW1mCUSvipsJ8HyGg9Vm5izEio24DmnYFt6ZiTPLiT8LyruKjsiYDVHiZVzZVN6k",
  "key16": "29M2bb4bxa6ncEehuEsyzU35qoSJC2cbzQe3o2rKCotmUFQn3RqTYGMQ9ZUyKRGjCzea98EKRb5HdeGjPF7UbK2b",
  "key17": "52zwKVdd6e4UbqhHMWe3sUyVHDnpjc25nnV5xHjFF12RPW5VyVPGpMYk1KV97eVHieisfDJD4KXQzp3j7e2BM91V",
  "key18": "5wWxZ7hPvUqufvfJ64SXnJm5DV2YkCpcqa4RtWYKUp1Dbmk8dMvcpVJpS6XDFaiXXVpSrGJ5HGYw3j3Swv3oK7U3",
  "key19": "3PKpwLHiVSkUBf5imup2Y8EjtD2r62uXwjGCnNCn8XiHrTbDhswPY2YPgAmxvzzEJNNjQa8Xy7d5wGQ6itTCzFnn",
  "key20": "36YSLJSXs1hqJAkab1xVPZkX9kYJri72VfQ4QiVCtH5v5yURiAPPibNj6udEeHb4oDJkpzL9JAzwFgbyuhxvuWdy",
  "key21": "3GQ54KpknQY3XeSFhrd5DZCFeqpeexs1gsmBZrPsXbFB7gv52kJvR7cGYkGQBn1vnrK6aLbu4P51uDK4d4SVVqHn",
  "key22": "5DHDauLHXqSd1Fz1QgPM6Mm5zRB7BLev4hPqRqKU7fnHtc8MXsPDm8TpQj5i3VYZ4AzYWhEBsqWEnHyuGhVNo1Cc",
  "key23": "5MwuQCFDzqhnuc1LnLgqfA1oQAYJ47zkzrW1nDWF3hTssHz471ZszMzQ4M9MWuwRZKh5XeyaRM5TnA4Pq27ZvrE4",
  "key24": "4CzV2sbazwHHrNkZfzp3N4FueHr9VjrCPovoNitJ9AAYfEhqFuW8BRvUFxtCstvR739rkvbtne9bM8znD6TBeJKU"
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
