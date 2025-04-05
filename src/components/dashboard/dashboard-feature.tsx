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
    "5o5PLLwLGTpYcataebLZnyNS7gPV8YbhE1jjmBgtBxKbV4FzdVaFvpV1jotNJwjFicxAmZwfarT4sM5fx9y1hd75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g9P2tAs8Gko9zxokHTHR9cL46cqExQYLLB3hytpFwB3dZzfBkGXHsAXtnz4rSAYD4yFxejLobuUwfEhQ4zzKYSA",
  "key1": "2mQ2U6i8PZjzcXfXQLXgff4sDyC2dXbPPPLPcEhwSLsHEg97ADodrmuRhuBzcSAD5jX9BPxSeu6CHhvwFiu4ETUS",
  "key2": "2cnM9ts9UtY92Ws1EjWFNkyCCMxbTtg3Xv365gHzmZsuFkdmXn5znQMrtHfjZ1JfYA2pXu8RsHKa7gqWmPF7kFZB",
  "key3": "4jF26YFnuf8LDYXiTpk5nY4MKfFjHgxBrPoiQfi5moQAPLRVqnQaPjUkuyWHgRBQ4q8ZjKa6qoLzJcxxagcj2iAb",
  "key4": "2F9BTLHgnijVjjpsSdR6nETU5eFHknsw9SE2g2jBiEGKSDaJEYvdAMEJX7r5Hi8GJHS5yoUxSYvEq1W9gKLvMbwT",
  "key5": "3tyG3aN7Ug7oVuj65PVq9wAAFyPe5sD7bSGg5LBCH38cK7tNTuNbCAgj3ZfLbEs4s8CNEofpxQNDhRtvT2KCrgVz",
  "key6": "5nqTzzArK1K2eBD1Sbew7f88dvou8TkfsnkEDMvAArhFEC8PxVPbZVYQut7teJ9D3azSHiaCwNMpsG52v4M7HUGg",
  "key7": "5DLXeqhnkN8PK2mDHQnZ1Wf5DLhQu8WPfrAs8V6cb7GW5Uty4jwzPrfmGanVBexkuKv8ehsRU4UbPQq6gr4SvR5e",
  "key8": "33jYUhJEZTXtemXktZufQrdC3CzDQhMi4QqMkxdpxYpqrsjiYz8XSXMRgm3WFrWeeiQkubKkepBM9StgUkJbKQwJ",
  "key9": "3rbMJmupayTezDgyLftX3P4fMktP8PNccZ38DZkQtnbX7HALt1bazHu6fRieYY9NiN79nLag9PLwkWrA6wjYh84L",
  "key10": "3du6taMPoM68j2xFxoyJ1WTqz8bMXNP3PR3XnfS4Ar68Bq3HCG7hwm8Wm17y4PzMECR5HfibwsgG1Z2sRVdwL8Gh",
  "key11": "45XuJvLHLJHqrXCsrTvFeGjoBa2hUhsa8MFLkExze1C745RYDapnJyySmNZ4ZW6FUktgkELzHebagaD32CWcM3iD",
  "key12": "2CbwNsLGtErFwx2uUKvRxZ5GafYWw6yRDgLBqE2bCY8bwt98qfh2MmqtvyqZg7rFmBVmaKuZFvofgFYqdBqPay2i",
  "key13": "2UeRYZ8Lurbu3nkDpy5Y3ZJNXVGkQiPf3iCykec74HqgB4YbV8mCjWy9uhTCS5W9LGeYcNejPCP3S55eCJagrLFC",
  "key14": "2QTUyRxp71M8cxNzFGnCi3CmkUK7QSgTiqsozNZNhF16vJpZPd7bgXKiwpXbuXgJaiu1wJuoQR5G3qQghkpg5bWt",
  "key15": "G9rcHgsu2QMBoq1GyRoDejKjuoXryiB4cj948oPE1xTD2e65S4Uf2xHGqDXCAihDh7uNyRxT2DKM8vGo8CTTZVL",
  "key16": "3UkaCgpmYyu6efMypjuG3NtjKRJZH161w23VK7wJS3qHzNJWy5PM1NFPV4BkeWRajcSMy8h3AM2xnkZ9JX7RbDmq",
  "key17": "2KJkAePM5uVSLDe7HWsVW7xnB4HXTsFGeJY7pQ7wvJVL13hkxcmamNhXMTwsX5Y7u41R1cm4LLHxxYwM1rbuLJGy",
  "key18": "kzuHmmkafoVZ73YPtKeE4nAQoGh4wRxsAQ8eRyXnkpGUsXJs3LiaaXR3wFaEv3iP9ywJdsKEaLDUSFG296yCDDd",
  "key19": "255Q5q45SQjupYiS1jkQF5zfxP2AxDm3JowmbGhk78w1DEJy7eMpehtGnvkmBLoaJyXTvURKYoFP8YwovA6wLADn",
  "key20": "4kKZ3h8TsTzijmFi3gGu8gh2BMfwppQXwqy9a2RZ325NfVz2a2EiR11MBrrk6fZHVf8vu5wnGsBgdRKAfKuDMXC8",
  "key21": "3E1Lb32ERbU3cWcDTYt7jDupAfmNHszntEFQiYtLNBCmgNczRZcZ5R43V3v5a78fjUkxTxdYy9xMX5JcR67ApHGx",
  "key22": "3L7J3Z43kAbgoHPGQPik8JQ6ixXFLnBuXZXusrs1ehritT2eotiZ8kRu9HKrQhF7j5Eh2uGhce3qwWLeLz9N3Bh7",
  "key23": "473ChgCeAKYL9acMpePEvU2FJZ78yynuNbqRHWTZZCEpsv8xvfGRfgWHsxVNdAZ7P5KeE6ixa2Fu9qsza3GJkemG",
  "key24": "3obtQndayHDzJHx8gYorYe16TFz9Na9nQbhHACmonWJJiXgSpA2JjMyzhtxXx4Zp9s18boKoQWP5tfp241WrGchk",
  "key25": "D31ZkHAv7YtSA1A3ACWADbgiseX713yE45EubRnSoC9xBDVqASnjzK2B5dYqM2w2ZESYDg2fTeQ2aKi8Zrh9r4D",
  "key26": "45fdUpLABHejZ6eYn88HtRqH4NewU9SUUZEq9UH88NVt5RdFVN9dGJdxQV7c3QNRfPoEuFMWfgAd9MbNzcP28DWL"
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
