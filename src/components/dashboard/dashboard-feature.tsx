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
    "2EYHWedmMPdPGkcBvi73NwMumBLHv2RooPnfbP1xuS2Lti2WobxL9mcXTgn7J88t4Met5XNZJiEEW6VERhEyKvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nCii6hNimcAtd1mYNAiM19gFXtwfpGkKcVYjKkTLmsPhhPZmf9PjrpeJ8ukNvxpLdwPod6SAKXFHs6JwD69gySf",
  "key1": "4iBdaJTUAioKPsw8u45ZNLnVJn3znDzuwtWW1P7kNi493jZVQV2hmK4GtheZ7NG7cLWbcp2ijmgWx9EXpiB6Pxur",
  "key2": "3ERTp96mdWtYqb8Zf5q3uftqvBQ4ysXgmuJC6KAn8vnzJnHbQf1ULW4wy3AB32jQimkxFAfA5DwvZV2kHFQDHqpy",
  "key3": "4NyNvYr92Rczm4vNBJ44PAZkfwWje7TmCPiqCnruV36AbYL1N86gq7WqaPc7obbGzPLcqASsU1SJyBQHFezXvC41",
  "key4": "4gkyN4FTYy9pNe6mDzQEFPf7pBkaLgYDVYGm5wfj2QJqr5NUqSaBcU2UMA3hZQMp9Qu3rZgTvgiXGXGR7tcXNQvz",
  "key5": "36fJyeehPXbPgEYYBaZgRu4AUrhinF8HkrXrhLFt1MwLHfTmgrio8fadvi5gqb8EAPAY9oyJWSf9T77afpXKS3QV",
  "key6": "rkiBvdyHg4ardid6j85Q23x8z6fqaxzpG4UZTxPZCe4KvkdKuVaQkQsEHizMj5mrhqQMpdz3RyTqGvyxxpTaJ5b",
  "key7": "3M9BZezt2G1uYFfU4Aa9fGwvnfd59tm2PGH68R1pPWkn64qu5Wj1JtpgS6zqvxNxzjuMYaPmoKdS6G4v2ShRTkQ3",
  "key8": "382wUFb8xXGJC9FPL1ySVtaLxgR1QxMDrQJ5FZ4zAdRiGtxzsaDPtqGkpS9unuhLmHhsmhWXiigYijXGdXR3JPBj",
  "key9": "4HZCkoRzSZr844VoXCvx9Yj1eTrnhrKw2816YN8hNPXxMw3g7bGZFos2CQpip5qZgYeWA6414m3Cb76fw8tabhff",
  "key10": "3Jv4NNhUeTDfDo6Ch5wVKVVzevMW1H6ntnYQdB3vW22XuE5hdAhZ3Hs74NeR8FNbbY7qAJT71qPsqJLk8kyjddfz",
  "key11": "2Zidziu7mPLKDW2h2n9sTox9v3QrpBT7ha9nmQoaB4Ni2Laa2fJZtBN379rSkxyH3Vr6S1x7siYfDEj7eDMV57oh",
  "key12": "3M86R3jUqbxptTStYtsjUFrhf3mkxpiamdTsT27o82gQK9GUFSVFaKv7xJF1LtXHiKq4LtoRwiNiKifezmnW3FXE",
  "key13": "41jArnxDwMX9oDzKSHjyNPWoaS9FexJ9aEyJzRz9g7uEC8wBWwmhKHKRsEsmBhZ8Ksit7E7WPutxaeVrTsJhB31r",
  "key14": "2TSAre9sqWGpT8RLDLdbVmh5zPaULCmw5f468mvyhfmtyAuhAgBZqPpRZLFuRdJHj9NSqpEPQrYT3ftFf9Vvfi5d",
  "key15": "2PFMZiUWbzr9gwpcUABtctfW2akHV1i5VkfPcW3Um1qm4AFv38exUF6j9aszpmv96ts3EKQiWVa1NwUCKX6njhzS",
  "key16": "2GtYvxroosaKxwF4vwukRLw3KoBVbqo9e5VUaqG64JqNGDgzmGgduGsPCZfJYq99CtwHSrzbvAosa649NrPRyFHR",
  "key17": "2fWJLFB6ryFYA4UTNyLhtbw72kKG8RCq14dvBwZ1dxr3Joxnxu673QPuAyc8p1Vwh9VyQmqas5UghDD69jnE6pxc",
  "key18": "6VHbMTg1tBEMzd6XLgDdN4K4MUHpWYU5Ff2pD8tuWoBDaHFg4RqFwBpPiBvN7jy2Eog7a7rQhAAaUzfkS85kjVX",
  "key19": "4BW3egi2xHvCJP4dgixPofccrJRzsUM6eU6u6FVT5J35ux9R2zBz9C1ZZeTssd2mDRMbcFTuCgwNVE6Y7RCXgFw8",
  "key20": "2W9YK5rHMXMLkwmc247AraRSvqaMm14grLWQtuQS84GRDtMbNuiCHTVruM5ehZXLhB7pZRoi4uJEwUfKMDoVtj8X",
  "key21": "dscuy3b8NAiiKJ78xFNpAh2LgXUw7MqCxXf6Db291ppsJaVd5NWD372Ko3wM9mjooyNed9c8t4cXeDWufXp1Q6h",
  "key22": "QPUZVtXHdoqQN4Mh7s7T6KZZD3jJvX5Aia2zLV9TQLZ8W57DxcSsdHEwMBt1SS6KucF1QXTKXa8pEwJ3eF4yCWF",
  "key23": "tY261nbwz461ojct5NKrxU7PNmr8uH38ci29CW3PnRoTXsg31gJ6QHRPCoUTqXTeEYwCwHH1VnoRJtqbEP69U3A",
  "key24": "2Mu3E4CgY6anRKNfn7xefQNw6HsUytF9YUi1Pw5FQaLpZVESjrELxrfDFpEyT43EFek521h8v6AwL7kix1zvvnRc",
  "key25": "5zADj1oLXCWKtxcx4Y6yyNQfUKEVGTbCJAaMDbZ8x5s6ptbE1by5gzdQpvjoGXNzexDBxELyhofUa4nS6hkDkP1X",
  "key26": "37C6KKdvxtDLPLCQKhT3eRnoVEiEWhCL9FHaV667xLw7tA8rRxxhXuMPT4qHgL56kTTtwwTwVTmf5YdyqeGPRzL3",
  "key27": "J1gw2psbGDVxydgQCrxc2UahzM9LZZFtbgZMMEGFFvFEvQu84CqXWmudbpCSWGpKwBQ7BVtcS2wvKHCpoxi55Xu",
  "key28": "5yJ1cEtVViYDoGTHikL8aQN1TN175sx6j9BAEH3EvezYjoRX2uwLuZjxb5cgRFiHtRxuDFcBiZS1EarTGGMdotxV",
  "key29": "Zg5FGm9J1GXsy5Y75RfHZkRhrSZAZRKRQZdjh5Ea32mSpeZT46qHGo1PwQBTF9zjPMxVjtXVsWkiK3F6oXvVLfG",
  "key30": "4UQsSNNz3YTBr1NmHxXNDziixN9XQWXRtX5oShrkmowr2fJZnDaaqcyAGwEnmiUNBkqmXi3dHCAzavwRKjfb9fyy",
  "key31": "5kEMucf9kAdETao7GX1uA8yR2ETxyUqUgTWP24o69xFMxhS5XYLbqHw9JjLwV8xzh7W3fzAHdbEFDssuFCz4KpC9",
  "key32": "2ngCVBvrSRPmU9MMoXUbzyPfQUpSAXfRpFyhy5hrEvaSPve2LZFLPVHXV3cpJhoX8zDseeH3bBG96RdAjjQ8sEFo",
  "key33": "5w56UyeDPhSSbaoMxhfpRs6qMZBdjeQrFqhb4YtbFk2BYcN576F3gmM1RVaMwds2LF6hGMFvJDad79riai5KVH9v",
  "key34": "5TF8D2EwCcnArkJzm96u6SA1rb3rXo3LSXCh3gj2BesxWpJaD9Y7Wxeq5kRxZZHUBFLEjwtDd9vSVWLaKUdmPTew",
  "key35": "32mhuGkBD8KFJQwLs8jJKnBLhAAWPHunnX4UtGkPvSF3k6Uzj5zVQsg6Kx9pYTTp4jwtChTmzrLzknxh3KupGkZy",
  "key36": "2pPYk8J3PxyufhEJYRM93a4FVboq8KguzeF5nikMVUGEMYyhcHmvtA7FpD6fDe9YPdpWuo7nJbUWGCF4fmHUquB2",
  "key37": "669ngAeEXGvcHZATuttJ8Z4rH1AhTcP8firRHHcUQXDsVWDFLK3KRDDoHEY1sGWu4EfMGRUucqRy1cyvTp3uM7aR",
  "key38": "35PuPBk4vBzdCbMTe85XCAD1nCphQMmc9WRurTCW3L3ZbWZkuYm8XiFgJby7EAuyQQqeoiHgbEwoYRdqwi3xesqr",
  "key39": "2vbvBcJQZcaSVDBRBnkjWW357GtwFmi8Zsw4scLvarvMeW5ukAUphumuHypGYA5zzntXH1kVj8Coa9b3Cr2knkuL",
  "key40": "N5sEb7nQoW1zNymFT46CNEkW9Hj6af3KocGnTTFqGhpd6MhcdmFRXunCz1wUxygPm4ghyd3nwtDRfPr6axg9Yzp",
  "key41": "3chrHsai8b7scD9b4cmwbZ2u2xzMP9LxrLzXxm6hqztuhaW6HDWFfhU5GQmF1m4jNqkeK3F7Ed2RMxsg7wLiB58q",
  "key42": "4PgGNqEtJHpFDifMUhuMDMbEejMqSmxK2JbmKSKF9BjzJGE3eqf4Hd7m2hhez7UanFyp4CvAg94GLFDePfGaebsS"
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
