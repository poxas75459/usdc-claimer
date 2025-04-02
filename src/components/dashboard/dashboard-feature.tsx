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
    "25iQqHBnXKpuHbF5uGjjxmUiNUxndxSxQQkZFcRkQA4KXWqZ69inY9fbQM7vtMG71skjLV5q5FBQ8KtaidTKN2Pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3erDc9mv968T5riCQkMcEMMrK1ko1bWPfbXGr8ndHnMP4gNfDJPCzDDZKh7k3xB8iGiCwJNTtaJLpthjah1acvW",
  "key1": "3wXE6gKTCNq1qiUo3yAMCEvzLrxNK6gVKq3LEnfKKHQBCuZQPTZyHVABVdjRXzKgm9zp1G1CvvAvMoCt5pfTTrQb",
  "key2": "3E1BBKgcuzoaeHiGSTJR9Xjhf1fdigQAQ4nArX7NyNTzgF2cf8BNZAXVq7DuR6BMrFrPr7XVcoHbjym4afqTkmog",
  "key3": "5MDwBs2af9Je3pzmjff9Zxq5FgvaHizRQfTD6qyEXsndKKY2gBo3F6hjMzTzhipuxDDGx24tWENzMnUxndCBk2uD",
  "key4": "22uoxACiT8SEPWN6AipwzhBQd5LbdrCxGyvpHuAQYEi2PYYcA9Ge79HwvsRSMHoXik6woV9LqZgQyuDEKnLttaxc",
  "key5": "57rA8Xmf1hi79nqmYoNWBbYjK1qxhy1kHqq73afmkfkr7hdSHMzxUjxejms6VnjxbaY8YSovAbeUeKnx8PSNZj71",
  "key6": "4aP5QpiHgGwFm9YaVWC8MQqBTsBHCxZ9M4qtSjLkRo5r7NQBzMzr2wtFREsHrPZKF9YmfA55zKcBxhpo8BzAQycJ",
  "key7": "gPm8CqAAKMzjEcNMXm7hAQ6QPbmA7mLWjgUhMCCHzuvjfbD9aK9vws9ABjC1HdgdRg9zzZF8XRuAed5QAUgfv4f",
  "key8": "3rjd5kviJNPzrTqaMgACqk9AkBiMjqjRXrx6aAypzKiSh5krmk7DrbVWJtxRcSXxLyRjoXLTECaReTrVtDEJ2RKn",
  "key9": "4STWfgx7J6kxScHbWHB18qA138HeL7uzv7pCpHRgbcoFdtze18L886TV4YUqesLU3bqkvjhXTvfNPXDAePkZxcMe",
  "key10": "3qXEGz74ExdUycDH6qPWiNPjkEX2HchQ5kGGbUmcKbbXaSRoVJeNBNpVGYztvYuLjseZnjEvxiMfLErjtvZDMaNP",
  "key11": "5VCY3sx73PteFAEzhAPzktzPRZxE54E1MZnpzdBCHFVULHpMf6MFFghTbAUPfMqRrd14z1pn1dvyYdkZarjrxXpZ",
  "key12": "2RMuLQJ7VxtS9ixzrTwCSjtZXiiUjEe7dxD3nn7kfzht5c3ECL6oCJjDyNdPECTRTnRNCyF9w4qnLEH4wPY8giuf",
  "key13": "21j3HmgULhxz2s6bYXgSragBP9s8kxfpB69rWqgLdeg95kB2sEokMErt2pqQkrnAJmA59ac3EnevdrkY2UELXX1N",
  "key14": "io2LtVnSL1MRe8TY5WCcAx38mh5dFvtF2dj3U6jxiPzXnMkk6kyoMozCxjzbaDdLK93cSQauJpKVvqDhK8rHPrg",
  "key15": "2DdrTfLDAfzZK1YmGDSEKWevC7e1D4r5i2gk4fDy4Q6GpqKW3bsmMmDYD8YvVAVHPpaXpYcgssGewY87gMommUGV",
  "key16": "DDygBdVDgDbsa7EvKcfDYPBz8CGvQzhiyZgC3uHovabq1TxdbCu7kCbbMmhrHVyfWBKAUvLSCmyX2DLSVFk8VNk",
  "key17": "4nnLPCdVvJTQb583xvc8a4pu9xKQaoVPoa8ZpSj2y9jfvWDzvuZjoErKfRWvNui6SbSDBRPizGy1gLFv3g7HMhhh",
  "key18": "2t79WGJTMuS1m1xLP2mUFsAUnjbp9GFcZd1nRtYWXGoMtBYocRqjsfY7zaEQX6SST9TebHS66vfuysN95cRysbiA",
  "key19": "3bWxBVb6T89ExaLwN1GLowsf6wZBdL5UrgnZxbr6GtfdsRWsRuUS4dPZ1M1TJ8FSkThpJRJLbwqSi1HDBVKEYMg9",
  "key20": "zKjR9Jq2bjKSsvQonfX1keE2Z7gEDt9vYdTK3kSQ8kU6BZUbXWWzGJXtEzSaHQgJez27XWzi3yMQj6gYEbUFJ1d",
  "key21": "4rS25cCt1mkirvprzKjRqYB5xRAQsv3dM4VD8fbhb89cLKmtme7zL6rvxUQAN8MSs5a3eLS879CCfkEwEtk74kA1",
  "key22": "51vj1CAcNDCjcyaB2ZgMJoxomvuirGcnRfi1qgqfT4Fv9mk18BvDAWKCGohYWFHwXAEfkdTHD2biUyD9igrswuhm",
  "key23": "5swSTFxGixsVAAFkBGd5cWTJ6zdiTbUVNricA7u8Gp2tDMc2v5Z5RUv7eQudfLAmPYUudLAkFBQHjww5K9GJp4zq",
  "key24": "535oxPA26GL2ntAS5ehKEUbibEk4NwSQ5NErPKXkiBRdUA2gUi9EEPLyZFBJtPX5W6yiLDVQ1n9nJvk8LgvRYz3p",
  "key25": "5DAUtqmrtyjuQWyba64tjZJDYKquTPYk7ENe4tfxUt95nyrK46MU3Dgq12XXw621Vr8PHrEK7Aqqi4sdjpgTfXjN",
  "key26": "38vQzpNXAJBMboV11VvuoztBq6SQV3XSDqgUnhh7ieEE8kwLVbhvB9AMhxhm152yPLcmtTaaW446aqDF37MA6KdS",
  "key27": "4dMeQZhcCj1hzL3npgDMfgoEKhiWYnt3rExvJvFFUW3Jg3DwJx8Nd3TCLxJbP4P1zPgs1whCfYvvKeYVbVrVvBTV",
  "key28": "3w25HrR3VAGJAymkdqzhhr48uPHhj8Zeg7PLcKdDZVKzBT8sZBRxzueyWhNgTf5b9WUfwHn1xDT89P3JpBYoZSjF",
  "key29": "4vQoYt3FLMgbpr1YbXAVpxMNnFG8e5emzQH62nymzV3Tifv9woLvcy3aAuXYcfnZtsr7Ma12QXh6a2uNx65tiLt4",
  "key30": "UvQEhqDCLya62YrbEYiPKikSBENRddY3Nj7CMk4gLvoUt1cvceVnN5DPekfzpazjz292tg29jH14bXriLsesTgu",
  "key31": "2xsoSWHFLy1k9sHjMiegJ8oV7sBfd7kmruVduQTLogjThec1iRHR4fdeGXc3o7SLmkXjLCwJv36CtjAxSi2shZqh"
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
