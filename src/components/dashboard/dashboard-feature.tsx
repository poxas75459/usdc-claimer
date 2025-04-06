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
    "2yPpSeFR13mC98mn4NbbfnJJe6S1RQLUoyS3NVitP1cZxq19sJVzLjLxqUZj9XyFxPUs288ZSZ7kJ3AXrHyJnw3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t9kchn48m6gkbzY9wDQVji1M3HMZzatACuR1VTCdRuyUXVDoDpW8TQoZTqcNAN5sg9yr9gi8zWCLv8WUkWsWmXo",
  "key1": "5LiLdGu2phHB99HSm9tNRVdhR39QzZAkSKHSYTxPYQRvEnGyYhG8kkuB4gnd7Bvou5HjYRDgJjRpx4AaoBZn5tK8",
  "key2": "3YhR4D9qGByuNJdVv2yBN7enoZHErztVSsJ66fXpNhKbkNpW3NJnBQMqfx84P8xFpyGfNVuG7EbniqeXE3UmEuiG",
  "key3": "2FDNPu9Vbx9vA3U1H7usuhMwe297hX4dAVaWt1EcYEk1x6KABF7vhGvDyNZMH1StuZUUfZZxNNeWQyg8etEE2pzC",
  "key4": "5gAJK1JWiJ9yCiJ7W3j61Zpso44dNxixAACSh3jVAgHHBigQ2cRazP17yhqLM7EAu6b71NtmdhzLqUucXXLcbN29",
  "key5": "5zjbsnqu1Etwm4d37Yoabhyd3rzxAKTn62ek3iabPPfQewG6K6WnNQu31A6ZRXQ2tjPPYoWg5pytS2rqLgF8Smjf",
  "key6": "bwYnd5xMSu6eWb57fP4tJHbUSovHXhCZdtkqGxfTGajZYxeEQvrvZK1AhucbfuGh3YsDn8MNrVJ7P3vsFyM1xPv",
  "key7": "4i859Usv7gcTg5j1Dqdia3Rj1cEiRTP6jCmP47PuLmCfdwPhhdwxevDSRmty7nDsXvga21pzqFeXRXRsZZnWEAxH",
  "key8": "3R4yYMA8uaGwK85jb1yVWGj94zFCcKt16Mrg43w4RNhgLG4Db7xsnVWrPicJyc16YxCh6SVbq6fh9YL68QriQLwk",
  "key9": "3snUoXrPxxtxVaiCJ3qYbu75VsW31oCarijSmBn88zzo5LaKn8ZXAXw2hkdCE3U4v8mvMkcHzVd1V32SajEMxQss",
  "key10": "4nvbE5nXWMvTMiMKGiqnznqQtM56aSBCzdQowRQ1mPtKMd94jNVsH9tYS1zZctXNVfvqN1iAi5mu6EJXPhzmLHRR",
  "key11": "22yrVcuCvdbJWW3QBjpVoHoa8TEHEonQUv5w2AiviY6NY2A3Cu5meYnGNMvy4v4woGVQMiKxwnoZAL5MsLEXrHcS",
  "key12": "4SoDA343yHnMxvYmMEYnhMSwp4kr7DbBp8jYxhpDDorMFqPthmSGbpTarg9Gbomc9MD9nsMcJ4tHubgpaYAc2Pey",
  "key13": "3vZ7HLVBM34oEzDiz6daVT2MWb2Bze89bBogDFnTATYMoPTL2KSCZT7VK5q7Toj5aeZ8sJfTFvGFKQnwgfdv14Ff",
  "key14": "4859EnEu3WREtGP7kYHi9JgHaUxugBA2FLF89tCKQCUd1QPXJyDVxJ1xBh1ocxs2TxrmYdVvnJqumvVfVi5XCDTA",
  "key15": "63Letntc3MYTHDKsqpnHBaaU5Ti6bKuXB9iFPMKqbUeavFtGQgCgwsWzX3miQzxufUtB5pwie58ZrvCEoSCxqcCx",
  "key16": "2FmVbMTwboatYNaXxNQNATxqz6JPvg6mj7dv1aAePWsSYkXPCv9rpGAi9CNjPHjirQ8orJzzD4sYozj4ouv1y8fT",
  "key17": "x3mstsJUJeip7GB47RzpGRrKwhLLXu3wLSmH65BQnd3qyMn74mZ65PifF8hxSjrmckpRERX7SMEStVGqXsTy4yE",
  "key18": "3DgsNcR6qhitpFpdQdPmNm5A6ZGQDrncGPkNygG3FMqmQdMd55QbMBfM1JqQj2bvBjpDahcv74gxBwabmrrx3Ka9",
  "key19": "4qmotrxAVrmGp4QsFgHZyBDQzjrhWqZkGTcjZxeTqCsHMUnXvwyYbkTwx1nZh8ff8Jg39GhheVQ8Gxi75bhGLc86",
  "key20": "54s3bJpWTH4EWmdFyyjrVbcd9ReMT31VCNjdhtiMHNHJ6VBYry6PGXmiTUvVpoF78XhgkXhD9beKD7vh1un52Wx2",
  "key21": "3jkyimtuPwYxWrvEUk2MfjxgCKrCu6oy4AEQpLpR4Rarea1yzndq1VfzCKguiG9Ge7DgUkbziv6SV2F9SvdJ5ua9",
  "key22": "mTjyKnofXWGNCDfdY5FAqBYsaWLb1XVmfiN8bzfGnWQMUk9jynP6zmjw3o78b9oFjvSm9U4KViUuB1wr3Pco3eo",
  "key23": "5Mu6R6kvxyRiUGtopzjFvg22WSCtCiQxnsYdHyZ8TZhuoCQfCdxVtGoUqK5bZrTZWPDB2uDtCJmd1z1veiuxgkDr",
  "key24": "2wDR2t5YiLdcEvHywmR6LYSfNqrYg5EAqzJPFXWXswjqCXRYe5Agu1zrTc3XvPE4CxkjLKmH1V5x8sYUmtd32nu6",
  "key25": "5nPi2rfUfj1XAfWdyAMkzK9tF3HGvDXRwYWqFUBgteybcJFCYRF7jcw2ma2N7TLw7yd2RShFE2RXcVpm7QFpdmfE",
  "key26": "2kX5RKVipfBy7MoumV6LVhFNnZ9gYgZuFjUkTK5Hc7BVXApdSV27eToSKJoordeSqCsepg8Eb3e3pfHkLVQV8K4n",
  "key27": "5dvCHnJP7uekUirTra32ijo9HHUNq4HeUfuiyydQs1J9Tq31KRmsDnf4UwX2ShdEL8owaAMUYqrZhcDpdwqfV7c4",
  "key28": "2ULYHzxTJNhUHc5Ahzid7raAXbZy3iXn175cszCCubWPRSYouHFKorQnfbtUgCHZx94q6EUxuYY72gmAZ6otvyAS",
  "key29": "5bmshos1tq3oq85yHeCTtcqToeq9JNSVrcRHCx6PUtHikttG8F28sEYSHxYGWnqrKtUwCfES6jrBLkEZHs5N9eVN",
  "key30": "2CAELtUyx21xWyncLPmnigwUYop475og7ZZRxc2jiyHzA96nZhcSrXHJuUXoJ51RYDach8PjS8YoGY1ynvkniV7j",
  "key31": "2sYJfKKMdatPm3qY8smQy7YRdpebg3Rp7iM87P6ptYW1WQeCSc5V27iH5C96J3WPJ8HztzNHpZT6ntU6fzcaGJfD",
  "key32": "5P6crvadZCaQdt9rESF66NbYfaCMk2dvUTvcFPQMTtMWhBtQKnms5nMCis2CHDSP4C8Q6Cxm1vUEK6CsiLWivPQM",
  "key33": "551fmniev93WHJr2EgWF4CMJioMXeVo1jpvWXmcJ45H8fuRAm1qdcEkwFSBnzzaysYcr8rKx5Y2He8v8KRAkbxuu",
  "key34": "4mCaRqh2mwyfW24jLjPFxA676uYwe48j1NJP5od7vp19yWxzsoq9hqaeqGbZP35i9kv5FMiWAquMUjE89uwNsma7",
  "key35": "TMFFGzGd8b8eFkAr9AYuEGu9VSGfysQvbm8g7297trAx5AyYh7QB3xqZEXcdqpcZRoLR6v3pBFzHGhTtDQU4LKq",
  "key36": "n4ac6zGpm8jL9dwCyEHDg3HjMKppxy7HWqCa2mcTf7DTTbtDKPKa2hFE7XbHo4Gw7xmmxj5qSBmHKSCvPWhACxg",
  "key37": "3cZXXtUetZWMe6LPtrLbwiRqo474rWKfD32XiDLnqtZcN6KiLGdSVkHxoDX2djLy7CvxKpBBVjNM8xeLf8aW2v3b",
  "key38": "2WhY7pizkcvjHXneJpFms8JNPpy1cNwsjFwWxmZCxecK5a4uEPjTtqGmV7j3ehXnGQPiK88YJAje9QY4XXRdQG9m",
  "key39": "4XQ1bqoKSoaFea8fZ3waaqmZjp23dpWGeWU4fPxYYrDLGGyMvuQFPB4QuJEzSduUZuijqXqT6QD5wJW7Z6GqVpgR",
  "key40": "4sHMNxsEV5ovSwoBzUfpZwaUea1aPC2V658fpXY5S6jfgZcAyXDUZFfifqJ5Mm78qTfU7Q4JbaQwgeuCewgmqKG7",
  "key41": "4G66sQ49YS6WSWifuR9bdxS533itksZyAvGGaYK5QfmfrSLpRWHKA9GjBsK3q8M9FMteVz65uug4jJuMjyoGDUf4",
  "key42": "3J5rmG6RgrapT9mNXochNXZ4fVHKCGjv9zvQjSJUxL5PadFsZaqkrEbHvyfvDMFi2eMh7JE2esD7XeWLFK9XkTZD",
  "key43": "53rFvj2rrNau4GXWh6dmSsxLGgSzJ1h7eTGWBEsSH9BSA7V73H7XiHnJqeTeHhbx3mB9Eorde5Pz3rgRwbFCPSPp",
  "key44": "2nFqCFCQBBhv31BVSXgaFmG2zvgvpABjTFTwDsPPEPE8y1kQSNCthX1xgT9S7c5YdCHw8Km9LYzFiwBiF51kjsjf",
  "key45": "5M8YSWYpaqmip8gogCZYapbEJScvN5PM1zgqkeZynKUN2YsdPFVzANq8Ce36RBxumxzS7ezNgkG5Y5Y4vgXQTnnJ"
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
