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
    "5zQVmignpcmp4HsSk3GgxxP7PQhyS1cL1YCBY5EfvKoyoE1uHEkENeYLtsjWW1ShUtyv9vSeEwdPSerVaC5ESsiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g4K3S5SDZg9psmnC7eySh3wGkg57EYYLKiz1wPVH7XTeAFAqWB5CAVsM5S57GcQFsWEWan98AbTk3A2hQtkTXuq",
  "key1": "3MRyCZ19nQspCA6iUELhSD3DSabgQmYnbu4WC1arEJVncrNfqXVzQNFuqdiv1svBRrqxxjCGmPbN82gj3ooNjdha",
  "key2": "4yEgXpNBJCV2poJ7wrHi6UsLi6waKUE8ckX6j135sh9bE6v44oVrKsZ2NoBefd2hM5Pgxy7sYEXMngUH7n55NzvH",
  "key3": "4W2N7kviFcFV4Peg9XbarkjFyHec5khm8BoXuLudMjqX3sqT6A7g61WjQQtvqpsYPy4CZuJT4U7WDGgcghm6NRHf",
  "key4": "zqzRwPwQXr51cfTfDrAebxZpkpQKoL3qe7cW6rAPduqgtC9g1G5Vsaf9XmCSxo8bAbKDaXFyAykVhxr1AeTBX88",
  "key5": "5z3asEkzecJ7Kjq1WiSgaws47kvjk48DvQsmXeZTLb8UJwnpa5DgcbUcx4hmi68J8yZu5DCmPm8WLpNvviGeC2LW",
  "key6": "TtzT3uhxUXVKbXak3sdvxeDDyskJ2mvuGQh1nuQXXNHk6MXmeyi9vZcsiN8ytUTpvqTTZSZiq5JzViHo1tdrdtF",
  "key7": "3TDYA1RtgrJ28iLAAKfhJaGkfoWYFqq2VMCAREZnaRZG9W47kJE4LdgoY3ZeXJRvYFUhqfeMRCmM9cHNnJP5HJhM",
  "key8": "5aXkjtKy5c4R5Afz3LCvLFLndD3uEsqKmXY9TzyxxmT93vJeWkBF4XwadPqvWyidVfoAnhn8inMVRakXbbKVLrMo",
  "key9": "24jCxiuSAaYzhLJTkWF5FK1rLSAhsT9iq7d2UsdsQFm13ZWhDVqqE6r2YuusoRbbkjY41dKzazuhw8jjP7xeEx4v",
  "key10": "K9yZgGV2VZspyvfRac4AvKnS4cdGGaBnN6Y1669DQdroq4ZHtwvdY5YM4iK2cuLQW1jEEbctEAHbuXh64dHdfvS",
  "key11": "XWNvYXx3cU5Tx7juUKypG9HsurUJY2VHgH3xjYEwDgiNCNt3hiyZh2uiaGRDhwENT3gRHPTf2VJRfjiQG4eEDhn",
  "key12": "3bTq9XboY7Yk7iNdAZuAQhtYPBjvBvwwGqju8JgDmdJcPHtjDLvX6wxNEnnCmJdZEwKN6VNNPSaeuG1gao5XXHrE",
  "key13": "66qmezB5VwjXpiYpxudmmRn7y3xbDKS6g49LusDwHiBv92PJZfpp1KaZQLWNexTDwCZ15kmmV26eF8g1d3y6r4jJ",
  "key14": "3QqqSvtD1vNSUmG4JQPccra93SrRJ7jhGQuEHVRtoLuoUynTTZAMTwa5QTrJnAKxNXgwVw1XuHUktdTy2iX1W1ux",
  "key15": "3RKsjf7N5fwPF1pqKmxk4Ahqq4BenQs23A6eLjyD9zAtbcvZzzCtRn9HtEdgi5MKXeWusq5UQHZPzxXLLVK5EfFK",
  "key16": "5FwzPXPwkZHBM5DXP4PPeDLtVBD8ELjGg1mRJibtzJSodPg8mCxkH7ziePna3c3vZbJpUD5sZfQRmSqG2KRxe6ci",
  "key17": "4RBRY9yqkLbTxgDUx1HyypbKPHF8Y3TrB3by7x4pumZtcUZck3B27weZCjHoJsd8ddvD85kwyZzLPG6PzX4X6nsV",
  "key18": "4RpGdjbPhAP1dzgkzNwQaXnvCg7kARTz67Ht2n8GdHvxH2AXfwHamcJFBCqpEGmSqr6R2jdpJupSRLje4bAhpgAc",
  "key19": "2rat6zVYJeQ2EiAmmmrUHNULvD4ey194LFpqo7i7eBifzqQErtmuBjNRQy7Ae35bL8j9AMGwihNnSvCNbb1KAhJd",
  "key20": "4cNprEmqyLcajadfjK3xxWTLRJ6hBf7jStnECbwSMFPuksM93uoyQX2qeUAQfpY42JsZVsakXL6Ekjj9b4to8f4R",
  "key21": "5hnn2qMjk6Lvt1RPN5CyxSAAW53877UJoJnxnSPH5qoiJEp9Ptnm9QcSyRKpi4pjP28W2ngfC1y3fHkDyZPPE1mN",
  "key22": "5jrjZj8czwNtqn9v7eLhLCpUNUVhGUQBg52PpnRbokfiFPGikKRgNfbyRya8nQqLKf5pLxQQCfTrkv5coqyCCiKh",
  "key23": "3c72CybjyhmhykiK9WfYvNz5ggGKcqEJCRVP3KBg51b8Dznwc7GQP4ESc7Bc8afrigqayznRiv6ar1JmsmHirY2r",
  "key24": "5ptgJ4djRrn4rjSVzeezw5zKm3EK6HRkr45KQ8vLbkjFFNf5bKg1fkmpus8xmVzZFSMXDJycaPVEebSf9MB18MQy"
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
