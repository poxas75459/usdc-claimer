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
    "31j4rERbgGyyAq8yKmzdBQb11RqPbJHUWUrt5UU4HVYnJBE6eQ4kk7dALQktQjgmZ67wG5ZW9nLuQ7tc966HdjbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vDMjRaJuFZ9mPoizka2nsYgbYQksr4KByWJiHWcPQkPNNXzawVKbQxE3P4yxPet2tqBpjhmCTmfyWMuR9w7x65i",
  "key1": "4vCDMBx84BsPZUV953a6VbuCnCva27DjTC7f8ACz12BHqe89ChbP3yBFyMV1CTQ6an1Uid75oycN5W3mogCGXbaG",
  "key2": "2DuTyp5npZ7KWY7BfN6FrGH8kfTXm5XcdLLps9sbeqU1PyxYNT82hhQFr8CrLyykHDdoiXCZmHRUzffW7VuwvbSs",
  "key3": "3hrLza6WxHPo8mg2uTekuSo6WVpMF8YkvEboP6c3HU6xsHYCYBJyUhqGDfC62G8MSu9aVAkMXfyDhC9ETMnTdcfs",
  "key4": "2ELhcTZhRhNGcnZHYBbcQSubAYkQ719uYvLCNAYWjqKDYUS3fcPb7uSEiARjBU9VeXMPmseuTGwDwNiSomuDDKA",
  "key5": "2abzxTgzytCGZDgwKeZfT9FYRVKabcUPmpFpqfbQtPzUvQR2ShqG16Rg5nEedn1UtiYso5osCDt1owzkJ9Lr7q2j",
  "key6": "XrV8ahsC3eku5xvTCzBWpx6ZxCv9smjhL3Z9DMChGMDNZFncb5azzPcnTJ6hwUu7E2SXUhznAhcZWWZFk3e9c1d",
  "key7": "4WB5CNubqbBTnQ7XX5d2g7HACcY7EEkAUy189ZmZdaqZMommYqTgWgEN37vUYrHSYuVuo3Z1eTcnHLnRg8vCKVze",
  "key8": "3mWeKFgJ92wn2tQcXJmwacdeZe6862gV9c2WK172oiRB4sT4vKbd8e2VUWL9y5hzrJfzmCjXLYtvdKpjspr5QXrf",
  "key9": "5vyay2NgNqsJoLu9grjLHkwo6pS3e5YDh6ZxeWomjJ6girW5jLUmFoqknq9A9p18gAyMwenXf8JQYE8r7ASzoKZf",
  "key10": "4EMCgjwEeyBjiyzM4BMeaEGgZrvLJjdkj2cvsdXL8AuHxqQwHkwcWv8GS2RCmwSyfKF9PXfMMwhaU8Bk3wdPurpE",
  "key11": "21JTEZub669s1XFSvHwyDsZsVQjjNiuEqDS1S66qte3gtqHnsPq4XKMnpfmFDJcbQ9H33CfHs8Ab2gyMobAMRzPD",
  "key12": "2mZX8xTR6F1K4quaE25ZcAPhNhPFiUbF9ccEHA6sXkQ1HZLnx2QQYDb9SKmPoS9QH2GXvYg2DPPwE7E7hkzPgVi7",
  "key13": "617jrknDMeqtNzE7ik6sMt6cUUGMBmZ5GAyyyd3qdJdjxWKEacYvYVqbQhpq6eDZZYvzsXEPkM1LqjZ5KyW1t7ih",
  "key14": "2Y6eoPjhVNAAcmz9ZAyG75MFvxCYpEGHCkA6NbZR51Ac9hUqWPxxmtwWeY3KrhSn7zPW3dwfyM8RL9Q719AG1oBN",
  "key15": "269j7AKse3rEpUA6pzsyQDGTzN5NsdFDaE7nGbmK4fvCV4sean4oq4Xd3XJDkdM4BiKuCaekNf9ET8RUr4TD22xh",
  "key16": "4Fo8LJPitfRhtc6xfH1S9WGfmFS2G6mbjenT8t2dMRDYvMUv4YmDh3qKWaJ3RszfvUHLtBoMLQ3LM74oPj8pKpSo",
  "key17": "5oPKNLZFDTzPKj84AQA8FiMXnGLA2mvqK5zPHeDmGRUd69J92wdYWE6SSnfs69UJi6EHN193quVRbGwwb1yJGDmt",
  "key18": "Z2wmDVywzD6mgYSt3RCeoJ45jNx7WyiKNM4z39Mh6vzbMBAtevzfF9fmLSnAN7AXF4WhS8ujyCbXsjmHbzJPSYB",
  "key19": "KfNzivWtbqQQt231hpfzbNZkygKTfLb5STh5yyLqPwmNcbKZkCvmn9Z7S6iYqdGczjmTfCvyaU6UzwqzknNNV97",
  "key20": "HPRXReioGboYqoafq7Lx1kw5WUBAmQBydPAp2hktU9UqZs98vQLRP5Eq949oQQFTSsAGzVJ6GyMxAh1uJLR1GR6",
  "key21": "3Hiwb6krTDnoWMN25gN9ZMkiEMaAeiwQ2hzwTye8fQWeYFoJ4t92gWPmiU9zET7UT6mrgbyNidhZQEURXh93x7ah",
  "key22": "4rACnrRQK9o8MzGqC9nwFzH5BzjhmkrXXDasa7fyjt4AdNiSKiCPciirUWv9MtXGW83dXrooQRpe7MKjFJSTb1To",
  "key23": "39p9HCRcQ7ro37XZTie4jPqPeoVN71gFvrHkMwZADvrbchgUidiaePP6ApP66zYCsCe3zs1Zfzar3vf3Rt1qPUGj",
  "key24": "67j6mgaVmd9ZP4BU3DDkSaStRDpB4rwAnbciB5LB8pEHHXnm2W6QLspfy38M8D9GxYtxgFbpsuWobdCsZe3cCYoS",
  "key25": "2QhbSfnQ1SaYApZv4nQ42qhbmojef6yP9DaZK6Dp22L64xcdRdE6kxenTjNzzHWp76HJy4wxPS91EaFLafDv93kn",
  "key26": "aJeV18amuREMHAyHkioYpmM6ae2UQWuN3A1hF25VvQ7AwwKCWB7eWE3Bx1FFsD1hS6QUM7sBZPXDZkN9LGLgoa4",
  "key27": "63SpMGRuLcTzbExfTsjvYuHX6f3E4WbhUDppPa6Ghd3nmwiy3zoDVBEsami3PxiNFcuYQiH3cyXMZCDde1aQJwLi",
  "key28": "9fASJUrASdRREEY5JDFLZ2mYZQcmwjdTetiveFYrmVkS6v86DQTHyBNrW7KFnNwXHBQDEEsz6iQzYz7gMuYnENU",
  "key29": "3sLRbAiTqzkTH8NY87qsLy2grzLgtD1w4ZeSzKxDzbBmS6BNRCLn7XtH25j8wjtpGTEv3a4z131Jx38swxVNznmZ",
  "key30": "3wbKSHTqYhsXAvPcXpCBp7S8W7T93rGYW3Nkq3xLcJpM38JV8nXTNiyja1wXiarGtqYJDZFs6ihCvbaSg6Hqo6Df",
  "key31": "5P6i2cBy9CMzZ1M9cTLRWbe6sHynrKTWjaW1dWW3Yuij1VmA9Wy9sKcQDqSvxGGUTSoZv5gXyzRUdv9aajsmsbPH",
  "key32": "2cNNTVTMAeAZPpKkZP8pAF14eXFJkb9i3S5XXBwEviHG7RCAvcwQ1hGKiF6viQxLNJuPZBoRwLfEc7LNF5qYT8s1",
  "key33": "2LHVxtGGb1cDWxAw8ZZuUEW9VG4A5x5ayhmdnSEuqb6AXM3t9PWaLTGeChSvJbYRtUqMJETS98dxK5P3y6ijSDL",
  "key34": "5EPYMBe1ruEJrytwY8cUuGgSbVHmfQ7HuNSzPtNmUH8b1xFKy9wyEMRGwUv95U1rmYMXyzcmqbkf2JzShigms1St",
  "key35": "3kxCa9mhctMxscPnLKAEgH62QAarDkeDtXuCRTvMTzZeecukGgCmgWeMjVrq5ZYKumSEG7Ktbcoja9mWbE8fX1Zw",
  "key36": "3Ltrs7kGY8zqc6hV5gpheBoppFYogmWbBiLCxZVvavxL6RbnqSLUSJ673WcmgBdYPuZfwSL5vZiJeczamqzgs3ge",
  "key37": "33ntXAza18SEDrdaidqgvKrH5nS4kyBNqvHX4fXbHn4SGNX4MzX7C6QH4FhtCEqteCsbRHMuq5cYoP2x2XfTakT5",
  "key38": "2rvoq5FX3gfENwL7A3Zk4F6VQZHa8qiy6peJJLew3VVxbZMQhGyAcTNfsLz5SeXMqA9au9QkpTFcXdSsjz34Udir",
  "key39": "5fYvGo4dYVfPL4ZWZWtnixfgLVtvM6JsMJuibmA5q8nxEbFHpdjbqL4Nba7wMwz8EVZDtL4HUL2ANQJCcNdEcKFy",
  "key40": "Vtku5H9rLdjFxkKQix8u2KsyGVNY1LRaS5Pzn5yhfsJtsaaejrJvTRLBA1fQ5dtfyvXovXa5XCZin188CexHzvb",
  "key41": "2BsnU3GaLaXym4Ve9VxdisEV35Hv8ggWds5NE6bZ5GtudwFG9DaApauTrutg95hyeoruRuFPENxsJCmrYFpZGUFg",
  "key42": "65esea1h2CZ3rixGxvrYiXm9GGKHseq46p4YGr6WwP9UCEBnuWn4HNboZV9N9RTqYisMAeqcKNTE48K9f4VMLQm6",
  "key43": "3FiQK3AK2isKVAyAFCbPzMi6d91pVW9RhzNbZF51rCqhNEVubnaijY2UgA6wSGXrApPaYV16gBf96M46RGUbDFsR",
  "key44": "4Rovxy6WUzCvh2NqJ3VHDaG3GGMgCeHGbVMn1WyNLFF7CbaV4nhgHPCgYNwdwmGMvDUo7DgaW77SgQLJrLuyYWbr",
  "key45": "gYK3Bd35cWnrt8FQsVaCegs4yPTpZ8oM5mSuqCNZDPuaQyEdY3v4ySTqDSUMAAqisLAHqx1FEzKQBMAHhNLwsaQ",
  "key46": "mYBPGsY93grfVGL8V41GX42pMGkGeLtBthHUuhURWePFELb5GYBj5LEbuMDA9SzLyFPLkqrH9azE12GjCGa4Qhs",
  "key47": "nD2nZJGV14VPvJTpyVJtcMNq31wVrunyQJ5TYmy1ToQVKyfPKfXzjDCSdFM32HZkkY5fntet5ueFq9WFGHbVk4c"
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
