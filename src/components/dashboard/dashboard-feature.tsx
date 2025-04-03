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
    "2dKDd7AHuEVSVy5d4FUQzp1oZvfnrvKvF26UwEo7Z9ytnmANJ8yDf1iayQKVNvPyFUUJPguoe2s9KtESP2WNKkv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oi3MKSGhmQy8kRXzkB33mw6XYh4kCBajbpknXyFK1DAYFTTLXghsCnAYLzjWVaaUDa2AwoXya9VWwGmRWNq5tpm",
  "key1": "RvsuXQFbScgTuLYeZsDKrFintPYgtC42NNr9tTD2EUVB3B9rrjWCd2PAPVuSCnsQsxS9KnPa9qdT9jEzjSXaW1q",
  "key2": "5jC1EKFm8LQWXjZ46VSTQGpeXAw1t3qFGxAKtXjtXbcRcgvpeKQfZxrKEosoLHJG25AB7ggnzmzhyTph5Pz4unMr",
  "key3": "JUU79s4QbHikdCuJbqriWL4yEDyP2Xcr9r5XDG89naukfNpxjnKrgFJchFoLVCTAe4UCcAyWXjKM8KN5izp4m4U",
  "key4": "Uv2s9h7fjxDP3NqBtpvWULfXwgtoz8MDPmm3ib4FPSF9gjZYss8D1J6fDRDaDxkqzZc5qKbqdCyFrp7CDNSs1oQ",
  "key5": "RADSrAtQaQTC9b2bE9QdsVkrePCgWMgvVKMDDGHGFHBoQvvMzoReC2MxxieqYHUKdtad5fTfwxcz5SEzuEo8Y5H",
  "key6": "4P9yrwCaUvqn9ttLYXW8jfZsyZefqbD1hy23P8QaynEYWQcsaxTKmpDnH6nGRpTwRNatwPmvFWFuGuF9RnKVUSX4",
  "key7": "4CRJ4sVFaBQjZwjfoogfiKcXZn5wnKYzAvMmc2YSrAzCpf6d3F5Lx9JRWsWvYD92CRMYCAhXNxUtph9aSLLDNdNB",
  "key8": "3KD3qpxoztALAKeQ3y8yPrNpakYTed5Gyekb2rMaQreue69Dtij2PsstSCnjgh3jL2Jw6C69sU4wwrdh9n2pXrX8",
  "key9": "4KATbWNCcyAjwoPSP5SQnzDQtbAqoDvSDga7GvhsCtQ35ZGBjBg2nMKArmu9muxA1c4yXgRrw9FkotfPWDUqbJQa",
  "key10": "61QG4ajNJEZXmzSwVQSCAusx64dehQtAhuYYnJFcNf9vjDtY4ULfqSwV7zeiwo4jP92gFuU1mUbv9HLErjW2TGJ2",
  "key11": "3WmNg3z1RnQGTHGkzrwjV5jyvzGxu4jTwLCtkjnUwsFX98fwHrcV1xN61cBXUbVM7poyih3D2APAzEGwYt8DCYmW",
  "key12": "4gjLfMcr2RydUdmLZdMPc5mV8AaZqFXXLBZ6eCAzRZK17Xu1auUyZ19ePxYasJ39dr2cVh6sPnH3uaUfVBgdvReX",
  "key13": "47eNobv6forE8UedRjy2hSdjwRBftuc1fCET64XDqZyGBGajDoQNTaZt4srtSZcMt3subJjziGTHuXiBqJ6XTQiP",
  "key14": "gWwHDkeoGDFWPfrwuaqXRzF4r3ZLChPASypkzbAWv9h8ZsGB3FD3wffYFXwR5EonBgMfKiq3XAGYSj7VpzpM4mR",
  "key15": "5q7p57swZL4GC94qEZatBERjuGV779p3j36ddcYdNkYwwn7nqLXenCosVhAwNo18tA2rCzB6VoeemMu3zuspAtZG",
  "key16": "3iEhcda3Wn4yc4RNy7xqX86FavU5FkVLMTQRQ6RSTdrVBhqwkcEons7EZdu4zrKr9Rwov5DYrQR5SWky122QJCmP",
  "key17": "4QVkNJMqa5utz51RMcM1mDEog1dVzRyjUjiGgxxiyPHEFcrGDUZR9FUmi8HyH4FcLjstmYsx1XHSGzoGPGQtGG2t",
  "key18": "i1fW3MBVfWgA8JnrUMvoe634P3azXAp53m2HKaZ4NFJH8y761oT4Aorywdmqxhqizyd9qg58K4xDUqS8Mq7LAre",
  "key19": "5PrwdaTVcg2Ft1Yfz46coqXgreuatzxHB7p5f7nyZs67jdsB3oiZcPRnNFsns4ynGacpVY71xaF9KVKrEVrfuDjc",
  "key20": "2e55id2bv4tqhz2Xtxm2Xi4ogvZG5kXnrLu1AwT59rf8kKDvY3Cs3KhSD1HYfEFdy4LmryLW8W4dj9nMxGjL4N5L",
  "key21": "fFQeGCinMqbQy1SEqsxs9WhAYfrq7YdUWCt7mC5yT8DrwBZL2nU7ib5o8JxZWrwGcXepoLyoj28BY8yaz24rc4y",
  "key22": "3VyQRh7oStKxaLXxQLeibCBtP9XbBPpscs2rneFwC4EnVFULfYWxv1Kigua9kbzWiznaHG8VPtvuxczuzdX1Zutw",
  "key23": "4G8EXnqBUDX211oAKtsogx9TzwvRXZgw7pBaQHdd7WbyrBHacHDDpyifttj7tH3rWaAuAsXb6LUTZbo56HFRwbhh",
  "key24": "3FjNZMLkBsht5sVBXkFi9sgMA9s22SFyccqnDp8AgczZPX8AXaKQ5TZxNCggDddcTggJZc6dhNbEtzmVqPJ5Hswz"
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
