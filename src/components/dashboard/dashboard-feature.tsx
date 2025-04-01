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
    "KpZXuPhnHMukTCa3cXoeisWJQVXETDkjxjTVccSfaJ1XE4CQRGSkR6mWvfkT7BqgKrYP9C4sifFq5SS1Mfsc34K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FBrrUftrbfQpe83LRFV4TB5boqkcm3DPqmzwAXSWWZzZv4HrTdzS63mw9DgHEJRSxWWaA4LEWedXUcM1eJ8WWGG",
  "key1": "2Cwe7GKABRWsh9xPjDpfCaXU8HZ4GTSVziQJD96KT9gmtazSb3UpoAAC293aRhZGZxwU4zUr93db87SqDRt9VTLV",
  "key2": "57tatTs5fToNyogd9jnSYL3e5z77HNydisoc1mV1bDo8SGmeDHqG8Et3f1oo9Sb4cvz1QikVrYiET2w1BWPZcWSe",
  "key3": "hEs463aSE5fjix2hYVhXC6YHQsweZpJL79BVhzdZhVm2xdMRGX2dFjgTW7fFKdweTcHvfT7t88u6uqhoffewZAh",
  "key4": "5BQRHvECe675SLMTgnGDp3V69SowKWbjHs2JuRHZbhiy9AG64qW3LNGuJKpDgYy74Mz1M3FwqnNuymC2F8SbW1eL",
  "key5": "4xv7XjsTTe4wHjafJ9xZizUCDgv5m3iAgqN5yBYGvQKDVSpqbwNy6rJtZ8Zsd9DDpTDxWq2FQX9ZE4Y3Gt3kNXAn",
  "key6": "2sRywopkTN7xs6GMmnUwdZKfzHYiGEqsrzJ2kLGevzfvUQGnUP8zw8SM9KVF54Vy3VyXWfWewjhLAuSX4uGQZigZ",
  "key7": "46r4UGnHontjAZx34v91JFR88DLwwhapeUzcdRCvQsttoLR2fosYN6CSJaiVdSuPFyVrwKdpdF37qhevH9nzwtH9",
  "key8": "3eLaRR6m79TCZKqKpK5N6jzAgV18WMrvMaZ5R7w3g3hzPe3oCuqorzsBqg2zWoCJ9A7JTSwXvPhGhXWaCxwLLvfq",
  "key9": "G7Ju9xkJUu1GDLWYZJx5x9i2S6cQMBhNDi4uR9pcXonXb934rERwMxWZKBiZbjy7GMcuW9M1rnfZQbNYce5g3G6",
  "key10": "3F4MknU76L5wbq2Up37YN3qJgbgjjQZb2iRRQeGkehhkGk9UWYSXU5bwg6RYm2HD3vNB4Vjqp82cMEzMTyaDS7dj",
  "key11": "3Upwjb5x2xMNp1djsUbHcxQMSXVpP3CeVn4T18oPNxC6CX6sAYL9wC1setKBdgadGj6PqBg5Z3K2qxa7qogn7eQd",
  "key12": "zwERNLRhos2hscgEyjSxsQpLySksY9WNqMqGPDPNprVtMbgtx41GoAZRbeQfCCQ32r36u4J69w3vETymbEUFTpH",
  "key13": "66CiYx655pyDpeoA7JTS7kQt31NkS1fzf5XFEsBt4XiVrhrTFBSXnAJHKk6NVny563Xez7JGUa6DhQavEuc9qH54",
  "key14": "62FGjcEq7wbKag64JB1kFxUyJiwaSwuXmiwPyMvf4zWNQYD8EWYHT1er8UpgJxkiReSFNnWKXuMeXiefRV8FwTYV",
  "key15": "2DNuWBs5nH1ErTGAXyxwzEWM9LsgV51EKHtLmwDw33Z7gsPAiDw6mgVWVGg3GpyVw4onjfLU7jLvpGbqVSX32jay",
  "key16": "4Jekjj1huJZmnmSz2PPhpj3SDVHgCGfPn5kpcCi7pGPyngVNsN2VCsGzYqnvL5Mvo1nGoQaKvcQppBhbTuvR1tc3",
  "key17": "3nNZ1Q16vYNh3McFu2AqfeazxEV2jDuQC9bGUeA9WKv5fTCHtSx3mJ6zW82PzpRDrwtbN2DYNr66s6V1hzmTxm3F",
  "key18": "3rQK55YN7snuQk6vgKTqtaE8BYQMzopioSudZ4eHP8QkKVEpNp2qV7SLsU9UFe1kvmW9Lqqx7BKNHivrubdibUtr",
  "key19": "396n2gm8N4pthcdyv8nTAQt9A1rSTTNhsYz6SVTTZ4zHgtjKrVkqmWee9CgCBuWavYEFVGcU2pY2GT4PjoTey3Rm",
  "key20": "4BetjGtW3KYWmQHyGBvLxN4jDDoSkwPxVMWqjt7JUzGmpSmkgrtCD25aH8JbizN4nyf1NwJyGDYUCAgX9BLnvCCc",
  "key21": "5wPwpVdVcNKmkEjQfAoLohpLrMNgzaYsHYnQnnFzhjrK5T96KPHga1neE388PjMQQZ7JUZZnhK1kUNrkgPdjrJmo",
  "key22": "35Cnp6T8MbhQMCmHfxhktCnNxMS5maN6ohhNoeotcSWzcCjsyBXYuuTpzBPqjv1BKi4oteeiVR1SEmaw2Fyh4FF5",
  "key23": "2M8ySNyt5XUkJvrFkufsNaMxnq9gsUbzwHJJ9YNyLJorw5NqXottxp38RJZUjLawMwRHuEbajVBk8n3KKBFPJbvW",
  "key24": "4FKbSN4dfFmcCttDNvgbPy7DzGga9NAxDG4bWed4qKJgZnvV7PuVbYGD9WWUVd1k5P1L2kPehMZqgC3voV4w9QLd",
  "key25": "5whVJZP81MeyHEUdYGfTpChz5XMfH7ofjMjHbuG6hsB1NrxgGWgxSt8JUgfRsXuTJEnDdKPLboGYvoHZNFvt6e8f",
  "key26": "65EThzfD2t1mB89w8S4xfm45bXpMrK8oHbDXQoPt3JZeMCTrLwsA6yJwaBhXPEQB3C2n9tVB3uAz6d5y658tXC1r",
  "key27": "47jApPmUQRdr2cBV3HmmApyvPrdoCR6mvEemvo82EyNALxUuUQ8kPpCgvR9im5VR9jHBzccToJPdqs8LPoAXKTRH",
  "key28": "4agXRSniqZ1Cxsk97zfRe5E4NpEjTzQYvLLcXUHHg5HSgRhHV1GAPY6mNysVBePf9rsip3vFg1B4JdkCTU27WgFy",
  "key29": "BJhzeBy2Txr8XzZE8dteppLMqxQuMHn5pcCx5GvqWehMBTVjGz1TdBJ9BQr2byraRbq4bb9y7qPMzgctJQPc7NA",
  "key30": "3ttoK8cDPHGVXYD3J6A1Pe8U4FM4YmvrKen7nEdGE3SxLCGwmJCCM3yxin5YbbiSRdC5Lni3jAyxhGkWRihfobBK"
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
