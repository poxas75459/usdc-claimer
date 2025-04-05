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
    "3CbMcon2mVuSDfeBinwaZUCsLx5QgFbxAd8ZQsNF1yoUXgSfA5gBJPQsJMV1Fni6ABinpzQVu5yGZTzkBAZr8XrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NvyGDQwKe9FzVYDWY8nBmBCcPYxU34qA7sGuyxrnVjxe3hcBU7LnDDcGVHAnsATc6YgRcb6WYqe5wH5y86Q8f2p",
  "key1": "5J7aYZZccCFSAUBhkfDcPuSp3TBjpRGxcP77U9JxagZfWqYo2Ki3Hj1RyS2rpGXPWmoA5ct3Nt1GF6MKR9E4wNQ4",
  "key2": "4j1mKHs8ZudosNBDLEMDAFYcK26W5aoTcDXnTQETH5Hgpc5Nz1uTUhCmGzkGoeneV9cwjsRytFM4fsEAjMPCMTAp",
  "key3": "4fCC9dpEy7ghZ2DZCjBBSdGNtw1REeLsQFkH8haCdpS3cnsfLtiG9HgWWHLQeqvsNYRDKDwXduRmEzv3W96t92kf",
  "key4": "2qXkp4o7cAkCQQhmYCJTbAtszXTDnnapgWjHpkXnPJUfoLcZCqNwm4rg5xH7hU3Jd5xyBn8k6N5S4coZ54Ube5Ys",
  "key5": "3kBJmjUtvrUkq3bhJUkDTjJn96eCbcVMkUdEQ2hrawAeAF9yBgC23Vw6iFykWESWSCcQ7iX5GdrnWo6SiRXWjfGL",
  "key6": "5ayM62PU5vsbMsPW7pbdPpotwkcoeLxAgFycBYPic1eFCV9iarCoNDsAsDbtmbUV7femFusBvYbYSpuJHnPTjpL4",
  "key7": "42PHjs2RkctViTbMaxkn52YMnYXQ75jwXM87xKw4JyXLBqzHLMNyEAt5STvn2v82qvuxui7Px9NBN7ozY29586KR",
  "key8": "57NysbGBZohEd68hxZrvJ9shVB7AfiAKotC6AiWLeEMXLnNtd5enAGif4hQnxcMLAQkZ7TvkiURPnp6w6cpP9DYq",
  "key9": "2k4aoZo9MjiBe1xXRTfpWrE6hTW3TxAZtG2zTvwEE32k5bnHFo9TrR2NQeBumgyqyfjhqnSvbVEaUZY5BQLahoyT",
  "key10": "28LqGQ4V6oxg9JB23WLqvwi2A2Y2U5pLPrB5whkiRmuR65NVWwCUNSWJLcfCekiHXBfe2hvA8EEr2hAZm8h4ABeM",
  "key11": "5fjeFgmMrs3AcBCpFxERq8dqhJhkigywS5uuLNvEeX7227yvTZW4pUckhLYfZJv3rK456H8i8WhBANEz1R5maRK3",
  "key12": "AKCpjm2zmcmwKiHjVP5qjrG7AZtMPe7csB4oyJtLevmNDL1LL5ocineTVUhwW1kwAP1S5eY75BxaB5mdDqzEmqZ",
  "key13": "33yorv8i8QN1PqBHfmbBm3D2VzbJkE2M5kniHu3kYJ8kSbyJdSTgseTtq6B7RooLXFXT9dUrvPu4zS1axS28aY42",
  "key14": "3z5DG5J1whTFb7MriBAU4wbpAR1NsjyqQP5noq2EhKr1pEpj5BDvqUxpKvdDU3zwtm3vqakLx5gfMYzFuCsuwSsU",
  "key15": "2YpwafHg3Lt9ZE1T1WGDHpSDz2ukugnkRNFfkqt6hompGnGec3YETcSczXPgSz7Uxb9qYVvjAD3zvoAaTgr7HHw4",
  "key16": "4j3S42jrYrtmfzW98s9axRvdgyDG7ZtxEuDHHVeFJR1PPViD1vNVdY5FRqHy4nAKkSyp638bNecoeTMfdJPHE2Mq",
  "key17": "5JRwJYnJZKsFdEijxGwDy78yoaW1R7CWyYWhMH2nwVUBztajrji3LeMx2bwqmPLSbSJGC2z8XBQ49XmEcrydzVKj",
  "key18": "23NDKkhBAbKQb4v7KDhssZoDb5pjog7pqnhPZcePqEeAsfQKDkyQhGvhxq4M3X7rApf86WQyBQ9nL5ECbMJ8cuNv",
  "key19": "2msTrPy1fotV4Hg5LQYJDNnu6wf3Zw1DPVvz5oFk2gKeKwAekxAs1gHBsdmve3WnhCHwEojhj9n9m8gugs81HCRU",
  "key20": "3TPmKbrw4RmHGJykwjbzHqfrgZU8bqCw5q2P6sm1zCeRBgfJBiBZh1iewijac4ATHqRgU4wy8wU56SF4rPN8JxQh",
  "key21": "4x3HkQHEypMJ7EUBYRHxEGwXmaBcqJ9cJo7gPBx7aEspUpAFNC9ChGXNbDAXvEJP327C4cmNt8XAsvSQFanL6yxG",
  "key22": "2X3BMPeUBTG1Sq49BwUMePdgT6SmXriRFF92FnQDof2nfC6oJGcfeNiSsF93wVc2G6JbszajhgAyT4zquzWDZyZE",
  "key23": "38s7S9xFhEG2xiDvS6svvXpgnMTXfnAECqwXYfb1kv2rJ1FTt22YLCG8Y5RidiSvY1K9qGHttLn5Z2LgMsnVCwBW",
  "key24": "48MVGf8jzauBeUTG234SbnDV846sQJ2gDGe1mw5cgV48SyBYfKx1fAEc78v2SMYiGk656UB2QoEAGs3BT8DD6kjP",
  "key25": "iye2AsS8EgZoiP4rVzaehqayQGC1e1dEGuttHvRfHM4VADYN7Vxekf61RoAC1zjKjZJiYAyaswZMEMQkyHg5T4U",
  "key26": "4smiqom8gwCELdpWU6YqrsFJ7KQyLGKvWMeziWhNUwB2mYNpUAVGweQzA6zLADyWzdsxgwE1DEdJQEiHSR7waCNh",
  "key27": "3nvVz69SxpezUNFuXkNTm3aXKMuMzXzsfsfTtSTSwD354tW3ZDHGkp4hUa64tKjgk8JxtShoKrCUzRHiBV4QRPoY"
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
