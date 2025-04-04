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
    "3Twfmj9EX4kaupgRSuURr2c2SjYEwLwgkCCvfJX2cioGm7urTdMpdZd5gLozsnvwtDwZVCWe4ZhHXdSjKy4ahUVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sqCNQ1vfEtaco6q6R2Z2ZGh5q5Zq5SUn9j8odw5AFSsUyKvmwsDnB5KiU1uqWMVfqy1zxPW4qBKaeKaR8a9zpLU",
  "key1": "57SEWGVUL88o2DnRoCMyZEWEjntaroL1R7sEv8gb74RLKs1GVvbePAfytj1Zu8r1ExgHYcVKnHFzL9cqyPtR1Sju",
  "key2": "3XLKFAFjt9e94CVn26HTPi92XxgpkhUSUQ3QFavroVKyo5k2bN45G26Q7tgY6v6JF9jdJbnYpenexeyuJyhjnuoH",
  "key3": "589qhFRcmiUFy9wMDP7g5rBCxMTtztMRwoF9Y7wFngE6dDRsEV6y81Sd5z6iJYgsfJfjTtzjC6KrMdFbrbWRWRTL",
  "key4": "3tbkMbnqfcncCLw6GiZWRhVuDsfDCyvoqjnCk4Mky7Xyd9QA7eeoCmVau6DP2pYWBh7Nq5QbYzQK7GYHX1hu7p9r",
  "key5": "5BupU8e6wCJda8cTMMFC4EwEF8YPCcFELJiKNjpDyazbQbKCFLBDRmw1f13LjVhQxHLn53tXF5dYh9nCpC6HQfBE",
  "key6": "5w8ZMKv9a4qwYwCDCkvZN7mrLFQjpqib6hx5qvaRjqLw8qzBZxS9eQeQWF8duvFsH2KpLUXpwjfyfupFauu94GKm",
  "key7": "3wLzGLPHd2C1rTa143oQuyjQ9pvPjYujFYohDWbqyKEfwLGQ8hm7WCTE3fEvN37Fx4qq56QUS843dovL9SNvLmSc",
  "key8": "3Gb1VrnwFpjMBqoEyGKR4bNEKMhxyoJE625WsL8j7n1fcWKQrkBq7F5QdaejtmhC9fd9BL1iwgFyCqJJgAd9MzTR",
  "key9": "xcbZ84JZhxjBmf5FtqNR9XTCjWAjZ6rsEWyYqqsjP5dvNwEfxr1mRSdvE4uWcj7E4cz1poVBMi9xHjA16yc5uuR",
  "key10": "3jk1GF9diSC5YFeMXPwNa5FugsxHNDf7m8m4M7nNHTrXDz5nMMeHtAar7QkrywxLKUf4ahsu6Dt4jLf7wt8b1WtK",
  "key11": "Y83M9jkygJNj9G82dUTP71RN7grrKqz8FSjoDcy7YPpV1yD64K8AfhkjKSP3uYszR6xwnbkb9Ndtht7AXdPAa8V",
  "key12": "gTUDMQ2aFWqHkk2FBXseLhpdEdnhDCZUPqDZ2aAmGQ5U7vnkwMoW5XhGyN8TnqHTLy4MYRfPJrK45gguvSwJfW5",
  "key13": "4rNnqYUy9oYvWgh7RfzCLhM9kbqSpmLarhcUSogYN7iozMtjZvxcY8Q8E1mKruXKDehqLJ41U1xa7WMBgC9e5Dyh",
  "key14": "5Yqp7nyzkQqyFuMYaSjXuh5q7wpEgbPTCnKocZPXCr5gAi1wkivY3pv4HtyWEvp1Bejx312QD8WaRsQxP87eb94j",
  "key15": "45GzwRTVP8oj4YrAasSN2jYPkzAYuohQ5TA124EyeAKF2FiEEXse56gT6jXLhcQWPmEac45uY2M1dSD3pjaDwNjz",
  "key16": "orZwPEA7eYDbAN6X2C4QWa2ioSFf4j41FkivdTMXyfRzHHJu6TtrKeQmoMLySAJ6pvkUTXADX8q6QcyqQZ5uopj",
  "key17": "4js5b3aovMQvHE6zCEk1rhrHnYM6p61haZKXuRugSMhaB3S3jm8b49yZ7WQ7j9ZHEiBFEeHJ5MKaRuFzc5epKVsc",
  "key18": "4of8hstqig7JfjKPgVeD8JJM3E3qXtemwge9EhZa8t8sV28493jJp8uYBvodmhHRwJBu549XU1DPXEjSfZsPDtEz",
  "key19": "2DbK8prTMFrGmjLwhUyPa5N6Wr9tZyf1x7SxHrEk7Wo5Xb8pSrJ2R2wHNz3BgwY9ENvVuufun2kRCgHvfwcR2CXa",
  "key20": "4EV4GpYK9XQrTssNC69EGYWr8vpmbYX2aDVF5NauXZVrvo3DNzNueR47dmBgvzDcoxMYe24xZrFyTQ5ZbiPxxyeP",
  "key21": "2F7JMdU7Rbmjfhqk4Hh8CFZts2Gk6ZhA7SPzvwgqYggp6n87nbaVTkeYVd5LgeCWGvGPe3BpXJGetoK7yM7BwfYh",
  "key22": "zLSkb7uzGtKSupDQ4U2X2DQjBW2xVTDKhCSKGf9L49ZcJBUtuuvy8a4V9m7ya2ovZzkTgs2RxVoE5Z1heH13v6a",
  "key23": "3NBu5myfvUPkizD5VQFJvcBPf1mYb8CcEmRiMBvzFE8w1U6VuwNADpCXKNW5sGGq7J3jNvqhEX6UGbP4SEMHtanT",
  "key24": "21DE4ZUmaXivVtDfrC4S5ziCtgLkHNqm8Enn2X5rN2ynfgPeUTjsJQzSP8UoMssjhEK6AoyvhYHPr2w9UEiTts7G",
  "key25": "2dvTcAe8ZmeaavycNBgM3G5sizp7hCESwMtjybBEi73DinaH6hjGAPaXTwtEwtNYyyQJhLJzd3z5i8DLeGRRkvQJ",
  "key26": "5vegSfCoZ6BxqzT4vbbPajLjdW4SkGhVTiHbUzEBBMsr2aofpnEaPMhodTeCN8x358ZYQq1gJQhgCP2D1c7kwCe9",
  "key27": "4JD3tdGqo9i2Z3xd6ixMkPytNogSb7DtK7ZxNzvtFuw7H5CCE5bPGhwFR5LMnTF8cnmTG2DATVjnxztKJTAieFvC",
  "key28": "cuAYAyTTcHDX1Mpu1PBVeghBMVDxzx7XshPdvZfhqkAszzorSUxWSAwny2qFNUYcvkHQQr2ZbsikMjvCm7dnB4j",
  "key29": "41Nai8BCxugq9tAjE4oah8v7C9BtXxEFPjfHUjg48q23L2k7kmxRU4nRrCE34MjCZNrSN2w5MpgnWKeJgFNju8Vb",
  "key30": "2zcjBTkLVte6cwQXEqjKuvNVUL7tNo6d7nt5wQjAhVnPkosS9npDqpgLGffay2S6pEYhLtfF6ya81Sa89czYm7jN",
  "key31": "29SAJpRWQZYRz4BqJhAMxPG6QtjSpEC1w6pi2SAFzKbiqWxf6U7EtKxTnj354oeYwg9GzDKZVt7keyxwNXgGi8KA",
  "key32": "3KGB7TYDGK2GNMWZ1DdSUmuTLMqXBLjCshzffSpqTNNuohf2Rox5Wzr9rSMPVAyLJ5pGk9UHEWxSBJbzwax4m8iF",
  "key33": "gNrZgVAHyqQoLB9pMXyjGQRkhvU3eTgXJjCLC8ZK7H5LLmbcGXsTiALnYq3v7QJyB7NmSXM2VBMkmcbi5J5XgHS",
  "key34": "b8rGDkpAW78ZAHNWzUvF5ZcqAkCRqgmh4xNkMi9cCYaHVUn7SgDdN3fuApHzkyu7ChmWsaCJEasEXc1g6EWADmj",
  "key35": "LpErnX7oj1oNRQVdT8qHSg2n7urQKtZuU2LHCygncPxPa3XEptjo9jxqKKqUMmQXGPHHkDwdsFHetcD1p7sbBXZ",
  "key36": "2Q8HETXWC5DeGa7Tni3havUT5ZbLWeQ8oHDv1TQhdsLh6HvtsvYFThCSgfi1AQTUDiXoTihjhMnZpMNPiHq5DrSd",
  "key37": "4RRipqn22wrcQxmtn4CQo5QXyi6sE9ZXru77KzVjmRSRgkQqcpShFZAgr53fK4YDoEME3KVNkexB5YYqfEF1PcQJ",
  "key38": "3YPJt7aMmsCgoAA8j9Yee2pjDrTh7VgY1Md6NjJpZy9csCgqHtpAubKTZdG4QBgUUfbpaAtYbCYHUb55jz7zEt79",
  "key39": "3e8BgUbAY8hjdgu9Kt4dWUmQsN1Urw1HNfqocATzv1kWSaGhEqxtR4EwdqGnPpL2E73uUiFdJeNpbecYBZq9VSx2",
  "key40": "Gf6CVfTdFv45xqNE6tJSXb5BrcxfrFhLJ3EuteVs7xYGhvLMhARtzbDeh2YPRgumpWECbMocqtx3xizGHN5FC6u",
  "key41": "44m7ugYPkzpsx9fPR4Sjci9bW8vu4oi1ntUj2MH7RfhMf9uWQmLPs6SSS2PWvGcpmHUq41jmYPAeDexLdR5PxCUx"
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
