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
    "3zZVBWJBX1XVWJcZBUhsuj5dY1TaWfNiLwmvTQsetZcvTQXjisPhYGzPdNPCyMjfvXK3AXsjn4CE2ts4F9z8a7vb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aKDgdFZJ7UhU6JjDgJpbrRJ3CBindvSEhacs5fJYda7nkZkMwF1LqgbAF2mzmZQwBSGusNwuQmGv241ussCBtA8",
  "key1": "5uNDV3jM46TQXqew7bRXz3SHgXBBcTBWeQZpm3G4ZdE1eP4XuUcTHeMK1et8apraNePhXDS52rEoViY3j6FSm7zB",
  "key2": "3tyd9ovpPLYcwfgt8hY31QW6bqt9ALVePx5vRBHtxLkW2phCGn5t4hFzyXHdZaGwJ1ixnM6bvH2YA6JeL7AbSMGs",
  "key3": "si6iRxpnF6DTW4t5gbUdzEtYJ1UPj2Z5d2sQJBnAFmNyCU1k116iJiEU1Ukf4CfRu5PsZm1bqjwhK37bwtdkYZ3",
  "key4": "5YrEbbtqaLec3jGc3jj9ri69yb5f2f4QGFcMei4irBC4ArE6DGwYt4T8od232119WvyixQERaxMeGFGGt4xhNEZw",
  "key5": "5Xg4mPppPXQUv5uSVD59fkE7PAS1RtjgVs4LLZPmXwdBa1qQ1K4khVFUc2pLZvokE5GkWSAgkdhBiNZdRUH5F7fv",
  "key6": "572U2vadQa2ukqZaWy56yWfujL9F9M4CFGKASYcCSiqFsKCca4VdEgdo6wKPdPgXhfyqJ8nGtttRhLxzKDc9ywzy",
  "key7": "2oXQbD5rYVyWVvBbjWJEewJckjKdDb4Yr9HTseFn8PPwXsDm9faJ5c7jGRNkswyCQrCzfYuZ695T3tTJhJWVWvus",
  "key8": "5MT5MtxssK3c14Y9BZrNLXyXQcdDxhFVuq6nC7deVUZEiG5MruWP6yM5qNDHnNYxV9mP217be7i8yodXvFnxwprv",
  "key9": "46fXVXfF4id92BP6C3w78KM32qfiddGHddbAKmGrtpahjsDFU3J4DtGqGuao1tUuJuRcyQgrKjrcG4CfYXzXtsvr",
  "key10": "2AqnE7C8fjyBTyucmJeVMo5uMoZRkJnaHRgzGTo2EC7MQMi8rmSvKEyjTswdUwMV1gmwabZcuEM92RMdVqcUr8bH",
  "key11": "5EvnmxLCMemhZX9ScykDF3Za5eHrv8p7sHVS81v8by7cFE7xmcXojtZpQxa3J927k7gHzeLxreLfxrqeroxJuSPs",
  "key12": "476ro47WJXttgQX2urbFn43iavMyQpoXySL7oLuH7WrrasHPspV7S9t2rmJ8VBmxNbsX8grwnBLvukRUxcPjmyYT",
  "key13": "2shKhon6VWzdi7twJbSijNHB8zb8HRoYH2bHmBnUyDfZBZg1MXCnfrBbuM8L1zxuN7LZycwm4g6DSJiMP3iWpW77",
  "key14": "21VKKL4UP9RGfxoaTAXTYJDSm1EDSkVDJTrDPhjLT5GkhDRB2ZfNFoFPzck1NfcWYEYQJBMazYH8b9bBH7qxpk8G",
  "key15": "62RYFzCcGj9rT3eudSuaStYpQ4Rs67yYtBBSSyEtpi9TFt2sAHPjx2cfk3dCEgKUtAMbCzj44mWAHwjskkPKtQ9p",
  "key16": "4xxSZjE6WcoWeeJBQgekay74Bxr8AiNUtTjFskHLsQ5eCo7oa2fX7Ffa3jPqxrh3JWP2mnEFNtutBvGkoesYkwk2",
  "key17": "5eMTobVMnfA4oTr2cDXhQ2EKVSE6k4KMDjD5ZXSwoxHinDvXi6JvTLzBAoZg7MraDJ1geY54HFxnMDEkwEWTmdVd",
  "key18": "3nRHJ7yFsxnRdVoK5bbbUcbwE21kXKXSzk4umfT7oAPTGeJ1eFG24UMyiF73Ais1kyKn7okTEF7udw2DNi3CXodX",
  "key19": "yYaupCmhHbyygkoknXH3uF7cRYK1eVcV25YSgSaCurGYSeyT17sExGNo2NvXpnnwaYswkQnHz9pUQ98yy4BWiRc",
  "key20": "nEGsRb9oy3f5SU5WgNhNdQ7qZ4UtaJoJ6Rc5PLa77THek6o3yCD8SC3HNNp8Du7Xe4b2GxPYZRbyhD43G7qdmGE",
  "key21": "3k56xEqaEQ45p5FTAaZeSyEConUfDiH3quxMP2vqfJ9xKESWzotvQYvaSE59rA4Sdq9dqvsBWcTMZXwzRTeuuq6S",
  "key22": "3x5KtZxvChU4wC7PHfyPDjxnGPjvjJpPKKqkozeFHWgMUQKCWwaZfgUe9T31Zj9nwUEeYa4n7BnqjpvbmU4dP9LQ",
  "key23": "3Q6NMxzMujocENCqTzupsR8yzTrjSaP7oUoVU624pXU4VLhkgJZLx1ZJrXB6KuNL6YP5vtus3aheu8kq1oVFfBjm",
  "key24": "5aCZkDaibuE3JMPDuRCKk455UyJxYbHgnFtdAn2vnqVqTiCBKhq4dXqJ1qXWPjy8MEsSwBjWRLjjhWm97wewWuwT",
  "key25": "3YBHMwnbNDxvExqZHUxDQ7EP5QftfVHv5L2Bf8upf8uABBfYYZPqb2wm5SnUzwHpdrUz3kAi8gkZMJgRgm4pG75N",
  "key26": "2VhijsysnzHzxWqh2MopeNNXAAtCuqdLJ6ptK4trrKXWS8myEiGDULeTRUQfQhCVpyAguA9w5MgtH57h9oLwrowZ",
  "key27": "31unrw2WrUZY7z9ktCL2DnuTBZjGvAgHSe8wX8KZVF8G7odFyTBs7G7xgMGNDW1g2zM7FHxDirS3EZH5nCUFQ9dX",
  "key28": "rK67KgpEAabGtSDhH1FdkF7XbtGcAq94nKMa72zKgYADG2JCkMebm1KRyt2Mi9g8bD8wQZf7hyq2KTm4ij9dC2k",
  "key29": "4JZkx3bpt7Pvdtg6hqj8NZ8HA9cD2DULFkRyjVPCVKB62dgriAW4ioY7e9tEQWJ8CvNCfLPU9WgKw8MQNa2gwTQA",
  "key30": "5AVkgrUgQHWRDqMuLyXCbys2QhgZpGJg41Hdyc366NXzCFad24HFnEUZ9W2EdC5oSkhrmqGhKBE88CBVLKBMp87W",
  "key31": "3caDN3nkD2d1u5oBcHvsBm22wTiGFDdeB29nK4Q5iNveWoDThxVGNK3rWodJZTusxLAhJrA2kdF6ZeQzS9kTbbiH",
  "key32": "cssTx8KDywmy4CKYVEF81uDLaTBaPuywUnfoyjnw9SxZqPsvf1FLPBtGFuBjZsGC9mZF9RbWPHAHFEiFUdnxmLm",
  "key33": "5W83yTjoc8Z5F86G1CVNvBxmJz6fzcSQfwmbaCvx97Rpx6Qit9Jmsua6iLhjJ6rzvft9s14JCmurnmtCkSLoJYPg",
  "key34": "j84ANAtWn4oGEX8qg5vzyWtCu7BTVTYttr1LSrtEaEHqrB3peAT1pU9Fhsu9t2WPyFCqsEoFL4MZLNXsVCW9sbs",
  "key35": "22qKYqXK8LHi4vYETKMVg62YerF8hCAdh1Kqh98jzh5FdJ6oqdSgjLHrWYQ6aCGTu58mbfUUArngVKxvxB9SG6Xc",
  "key36": "5uDBABmSmYqi7MvHK6GMFGfJGVnviW9KjrME5uSKpo36MwwyJxK1K756H2bTvRpkBhBofBiZkd4xjSyMA8Hp5iEu",
  "key37": "4RqANcSmhYt8PphctNxr3HgUngqvCJ2X4o8WazBnmpfNVVhPwdzTJGsqnBeY4Hh17JgnWvS85QbnmUMmENeEmtx7"
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
