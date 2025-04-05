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
    "wdqVUMmv8FrzgMF5uMPmMVkhaoSLEanRAi6BFBP3cWJcZNKQdBEdJRX4zzUcanZKxr5tWJDGvCLRz7bD7Mn82A6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XBwzCcJ8yTLsXHcg7pLfqzowVwLFobC9RqmCCQkqC9DdpL61bsUFyxPXbQvoN553UXECcwy4HHQB3cUc41hMqww",
  "key1": "4UhAFWUyaDvs3unnBV2ukexr1J7UhLcJNVztPWQoVLzGt7QFmM7khrucBXvT5rGrs5jM5S7jrx2E7QES6aejZfue",
  "key2": "6U5yfd2bzvtWZSs12USowtLNxP2rY4fGoM2H6UpkQxNbS9p6d19oESFTvSxmQFaX6Hcn8GKcPZLQHyHWBh6ZGE7",
  "key3": "4hsXkH2wyZQGjzWFDTmpVgHzbpPL5nJJkdqb5XiNAXZFYuyggc5Ttaz3arYzr9HQGuozogPv48sgghee9Ui3LmQK",
  "key4": "2FtQbGkBQVmzmyWdX6j15xNMKkV8EbunRYi1hRGDEtWg7yDNWrfbw8Jks2p1rH6LudbVmoHmztACRuRu3msood9j",
  "key5": "3r2mwhSsmf37tUfLQFr5ZguoD4uZyW8sZcEmWxz3KHCZmx9Yi4PSQ1kwaPjY26GKKuCyy1i7qKTVFpRzfWM7MDio",
  "key6": "2HGjWVKo3caTyNNS2fiEAuyko5k9hNhuK4RrZg2wuvmW25G32sxMhKs2rH8zPyyovr6oxbhZE7oRoakUcw6vwwCk",
  "key7": "2VGqSdQ3Y8NBKS49etJAGKcgXmwUtjopsiewt2G9AYGbDoETojxZ4exBMgSmPN6HitL9TtJ7ERuY27kdMUTVusUF",
  "key8": "61vScAarWkT1rtr6qTGt9qK5diEUPwQWyV3aydTcjXWuwrwzHdxEq9EsaKQjpfDPoSZWAJhomyhHQKaUEtyPAD9a",
  "key9": "4VY283Z54wqWpppYqWg3MNrhrXrAoNBMTmeZ8UQ7n29ev9mNFL9P6B5JyEQW3EiLBiDdEsoARh1C5PU9BB1Ka6hd",
  "key10": "5zUema1oSaSN7EGfkUzGa8DNyyCrUrU4pkCYd6CmCUVTwHnqAG1TMiQ6jyA69TsZg5temrQ954VPUb3iZap3bJyG",
  "key11": "36hZ7CTCEcBdmREzcVuwfwJRuqEvYRkfKaZE43TQW5kuwPr27Rd8WVPizfBGDgeJxeLC3p7i4MoepuumZzG2HvDt",
  "key12": "jRZZePwBEPwAGFM38gVSM98YB1fR8fZDtmkTwgMbgac8fb8MeU7gZBzJJ4teXmnxoMnXPEknBmaCw8GhTHd9A7i",
  "key13": "5NYLsdPqpKDZAYFaJQoP9qE6wkVcBLnELZi7s9PgufHn5VHAftAzjpdk5Vug1v4ysvcoZuCqQLQHzkndXwcLuquZ",
  "key14": "3GMZwSyVzb1PNB81QWq7thFrP22CQ8Bi9DnGrDGD9anmhGxcKuiDnd2S4XQPxTjjQyhTXoohu71qJRYjTbjYYTZj",
  "key15": "3sqHjUr29wdjNQUWFLCsyqcnebegozrpuhaF99HoKorWzXbudTN7PzcE6iY91ADZDgkp7YimFNoHw27jfLZmvQjD",
  "key16": "5fqQ38QgJq8CsA5Ht7SPmD9nLd7ioMu2iNAULdfKULGC5M48N6sgo5gboyo9wsB7hg1jXxxBvCocGTVu3NmYyXxB",
  "key17": "47n9RTQedgasYPYQGyHTA9ha15MVdk6RU4KBey1MqKT6AC6E46hN4cxuTCzBoGMFn4JAMjP3yTZVNFaJj7i4D8pQ",
  "key18": "2NoXyASN1kPmPHeiBXEjTYh37owwQx2mojLdJGHdt1Bnb74KrFfJ3ygPaJLxKTUstWu8xjWtEU7j9ehEKafr7db4",
  "key19": "3MFu3Ef6DBqnX9N1dPm8pXoJDXDZgXTMQJeFYRXzJeubi3rU4UxNrHnQzVyFTjvNCkrCHNZ5xBd2PDkWbZJ67fLY",
  "key20": "5uQzLgCxSqfdjUMS8kDPuhYmqwBb1xY1rA6A6ASBdZ2jatCU3G3s2hd14P2SVqJQpMJEkcvg95GsMmZ3PRRJTcEj",
  "key21": "2T58tco6WzTwYRhwcwY1mLyahVzdgeKjYRhyaCVevTcoE1RWT1AoqzwqfwRxgJkxsnwwuDTzjq43t8MhVhajh1t5",
  "key22": "3tKzB6ELvLmYeamWvXacUKNjk27HfNmWCrnkFigRRvY8ktdPSDo4KEDqP5jDWnmPxPM26UDc5kD1eKkYUBzcuXXa",
  "key23": "3dzcnnSoeFpXEc8G5jXShLLu5hf8nsZ7fW5v9Rmx3ozAhy9fjz8txCR42PhkFxy2ntDYHDDNgEt3szhNmKEXnb1k",
  "key24": "gEcAMsi2kS4iVQyMeFxq5iFmJQKpRN8gfgPhw8orecBTeiBXfeANkQvbSGWGG37ZLYsc9CkL84fPZFgmbPKnXqt",
  "key25": "nB15bLKRQDGLq3XmiTQKJoSbEHLh6QL97MtJxTQ3DmKBLUHykTVFSajv7YQcmUzDUr7cHGDRH8BYA28hYJPehBs",
  "key26": "2n4xf8vvmwnrfdrHoX2vApz2mjfYebXjLx949RjeVHvgJ6wDeqj8jCvWkfnLccWfZccFvg5UPoeLcABTsUseKJf2",
  "key27": "27LtqLvZiGedvViUN5LJGBv2mRWcYmTp7aGqt4jLJDWvBSTgSGf7wkApotrmfwpJvbYfTvZ89BceuxvB5yF2cusj"
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
