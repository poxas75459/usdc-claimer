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
    "4daK9XKDkpSu8uG5vzqdgCJoTzZNr3MM4x51ZkuVUiM6PLyh77unUjH3WHQnf1vnxzegUueGsR27rWGGtns592L1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "irVwnsWhKQSS1eQGCDz6RAPMSem4UFTp6VSDs2K6EEzv4gFKBiNBzdjY9mZ6LoVr7C7Z1fGpb9mDZhnFsyQQABE",
  "key1": "6ztUy9yATDbfXY6DSJyBs3tMmQVaWZXopA2nbh8EmbsXCU2eTTkYKzcBrjjwY5VTdq1ZekjHEQVFuvobuDsiBMt",
  "key2": "2Sx16kactKo4aN2Cn53QsPQhW64GDPZbMtooSKFewiUAyLqABa6kUgzEvGmD1CStnySj5csACEbPk49VgpPTYiiW",
  "key3": "PBmjxoWh1YTTXMzFWtU7z9PD4M3xBmhr2FxyRo5ntt8LuT9m2Hkhdvbi3an8sZ5K6wAgKNCtFDfMP23go5XSvMu",
  "key4": "5c4drZUBujxkqcRACPVYo6cyBvM1PuE8qqrT2tTgnyUFdyBMDq9bV3d1YcMAhvMASGgZ8DAgBSzXL9Mi3MBXhRzU",
  "key5": "1Y3nha8G5ZzWWg1th4nebMENzpwUoZ311KYgqovJ243mRUJExpUQxgGAqoCy1XT7xoyC3bqMfDtCNyty4UrbTj1",
  "key6": "3pt2kyrn9cR3dwqK1g4w75xK9jW75jZkGij17XwkkeKUiqq17X9YmcLWmvmkYCAzFxvq68ZS5aPNK5zuDLDNgaQh",
  "key7": "3Tpx5dWzBG358KVXE3xpYYE9r9vyxdNLHP71amx2sfyipDZQaxjt5zFczAYeU2zVCC9ovNZKHDPCncATAxb9K7Pp",
  "key8": "bSyGLoKCSHpJeicaqiridaVtEbVkJM8nqwKgBqpfvHxVfTNLn9zY6y8q6UkV2vXRRiZbyF7k9sCGiJb9dZtGFZk",
  "key9": "5gjQEBa57ftYzRSy5q4oR12m5ZcDQoR5u1jSe74q8jk1HtfwC9JQZh5DjQej5Ee7VFtV9nUzcKE1wnDsGTcstRSR",
  "key10": "64EADaPWafx4DnpjQg6AkcQrd7BWbHhXZ4jWHcSRmdFcNUsBnHjke4rHfu5vCyFNtQ7e6GxRYSGGd46Xksmfouue",
  "key11": "49r2epcwNqfnPgWG3s2dkYFranZCrLXfNmhSCAiP2yHDVi9SGmfu19SffZpphcedHniJrYD38tYfH3CpbSRmPs2S",
  "key12": "5hQJC2hNNHJN4KDVCQyReFQL61UxuRQAsGU22Evfa9hG852x6s5dXztMCSv9isRkyWjdcG5QacDmp1kPErYBFP7d",
  "key13": "r1xREAqpyNmqaVBaMa7R8EeDKKZFG8njApfnkdnnnSqyKWpH8gCu5cFjdra4cmmmpkYHcDQTzy75YbbvrXcnZRA",
  "key14": "29RTmpe4dW2JEXajDKUgRoXDKZmevpgCPwuhNLevor3UR2gXTqdcWeWdxyhxFd8GR9z1YVLmMXocqqNfEK4h8eo4",
  "key15": "4N5ovsL5XwPA1MGzvU6P9LNLLbYLzMgmxMqx7yjysD3U5DhrFejKmuesdN515i7iCVZB5noQnmA2V471wGKXhm9L",
  "key16": "2S2ihjq9tXADX2eRpequNor4AWLm3TnsQNh8q8r8oFaQEZhfSXaDWtJa1YwDkYTh1vUK5HKT56Mi5BSXGdGn8863",
  "key17": "4rfVRSNfvEDD12th74WobGev3DfmnjcvgLNMXb7ZeEyPjdmTxJCeB9hpTceyx5eKbBwZcGeyUw5dkH2ycMonpFse",
  "key18": "5bQci8Q4fw3Dn5Kkb4K78BmFrmZ4FmUEvGJSFjnwssEYbN7pLPM6cvWX52jSTpos11y7GPjosW78Bz2wsQDogM8f",
  "key19": "2mrMDiKUQH1Q9aPxC5Be2697FHA25QLUcqBn1h2qxZZTegbLGmswbAFtwhSDGgiB653pQL7yvCPjcxye24j5enc7",
  "key20": "2PcUjYvcXW8cjwQgYyEt6LozXgYdDDQx5SUjeDN9Ypd4hkxmm5o2bJdNtNVj6nUFLgX2oWob17XgtzNdssNF2rGV",
  "key21": "2PYy1ukwrHBK71X4FhkYzDbWqKpuPXfxgSoNJix41UmWq2CdbrAv3UjzT4niLh5gTv29UVVRTK6JEvosVHR7fAWh",
  "key22": "ebjSmtP74SRfg3BZ58qysv2XUDPTfQcZaBUTrYxbd4xzxGjsv4JzrnenKnbenobgVk1QeR2BcJF772qtfrb3MMc",
  "key23": "2GWvvuXyLkk5gVL1LKiourZoPuiJMJEZehyEXufqhaX5Z2EDpWbP8K1BTWMdKBzFDfnqRQGLeFXnrvhmGHX9GpdD",
  "key24": "xFEGMtH8sZjr4AZpyZE8pBkyeqeFnzA4ivqSAS1K7vvXx4kdZaADLtCW7oLsA6QjhhagGBvaPcHKG5Fnh3r5iX3",
  "key25": "sHG5nbJNd4vGQ1A8ZpA5QKD7Pnh1gbfhfYXVqP5rVfhYMHUu4Peps1uJ7dnmsZnddzdtPE7NnvPJvwPxYaXnAkp",
  "key26": "t8aSJ417yELNugioZQWqnYoe8LwjmeSXRN9YLMjJVQRWWK1opYDfUUBdt2Vq2uCVr2CEirL9BJSrfX87DUCKfcv",
  "key27": "Z83dTTB3HstMJNnfFECoZEHDHrfspvMrr8fEccNFynmQUXd5QmvJ3McygWHz1YrLiePHSuKqNCNVfAMhMYb2LSq",
  "key28": "46NRmK8VPhsep235yAcZFn3abgHjS6rL6np7HmucDu4Vtb9jWE2Hw5R3X9iHGcq6ZqDxtxkAbe6hDU1hu26N3yCt",
  "key29": "3oAiTHCoB645nkjXpKaoEZrqhj1J7ifjcT8HUyz55BWsSLzq8G3pvA6iD6xy4k94WYyrYzCnyfCugjfcxcF9Py5E",
  "key30": "RCyEKFZQaYL4pjMRGEcp8i7UzgTFQekpVWNPj11pnWFRV8cMdRJTvaLDBUjfG56PfPMU6oxrxs6RE3RcJpFfFMo",
  "key31": "2rCgTVFiDx3XDbUyEj2oCuns6c8mBBPT6nXeFE4hQNCUBqKf4CXs8XFpHm7QPW27f3mr195E3P7n5C4UCbNYRC8c",
  "key32": "3HMM3YWtxgWAS73x1tCNjVNgBxXe1DYyosz2tnZXZoaujGm7Gsob8YMk5mH81Ge4TtzTtZ6cqQVwxYf1d1qgrgju",
  "key33": "3vMYt2pEJMX7dUYVw6ZPezDpYLCYgqCqQp1GwwYBGib38C8KDsASmNHe4tWiwsY18T7Yk9wweBsbH3JnLQurPYdZ",
  "key34": "2Lay4Z7rH37Pig9XY5kAgRoA1DffGiWiTBvHbcG3t6Vf8A7jTmrMvW6sqGNEHNT8PwpjCQkeRaJQ2tWeP4Ts4g1Z",
  "key35": "VU4gNX3bNW1KugKUSneHK3hFqRe77qMcV9fP3zGGwAqksTX6ZAsnrbUfjNHLeoJmcAPXyMQGjdF2w828hBGthkB",
  "key36": "2dDCW1kvTFYHuFq3pYPSTrdLDSg24ML1fYDJLhrAnESgHNmwWfRRPCMvGrisRx7fx14h22Ks1DhJyeKdVETmF1ir",
  "key37": "dyi81f37kbyXQ9ScmwYVhNVeVCBdMYZKDjQ6yx12X7BApvL4EKU24BmTAs8DnvWzxnWv14N9kx9uuozPqsLogVf",
  "key38": "3pPhCL6KZrJxdvnJ4214KTJXsCrnyMPbfbGyVWyvEusMvoNuVdkXngT4kv4y2b6JGKH9QaEqfm4r4BM9KqsrQASK",
  "key39": "3gU3RmSTP8U6gy4uRa8k2BdFpzaDeEgi6ovk8ay4NdmJizHK3facAMgYY8L3juFgKazrwuMeVFTbRf9Z2wakvDks",
  "key40": "3bQj9i2fUjRryrBKBH5QvKGDFmaQzCQjr6z1ogHgXcsvUYc9LviEZT6U8DXHrYCh9cfV5DPxbb6MBVMxkM8yuB7p",
  "key41": "4SDHVdj67LyKCKPXtqng7r4nSSrnDyQc1PwxeUAubwf8QfCA4jY4ckDg2Q6mU2PnRUNTggn4jfkL5fTE174oU61Y",
  "key42": "4FKBhrwbMi4B2kBqQoewrHbvvUbKj3Bqc1QaCpcpmqUyDiZorvR6hA9p9PfSeAMVGfFYMJwACHncZeRf4zLjtcXF",
  "key43": "58Xk9iwDzryw5f3W5QTEBdy9tC98e6zk418wL6xjpgFqi8QCMumDU4u8qGGhUkM4Sx4Pvhw6qdKzmxhx61eCPawE",
  "key44": "3JVqx13EUNbd9wtUkL64i3T1pNTrZfdGndSa96mVaoXkHjqZ4FHF8fytTFVTEcegjBpqrn6gqd2j6zQjZs7nCcQ"
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
