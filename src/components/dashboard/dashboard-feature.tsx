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
    "5WvspDAtPAN1vYWQiA3SeZLe1fXyvsV2yicuiC6DaYxcYfBSUfpTogTCQUqXMdURnNwQ9k1AZ7jKYjZgrSc3aVja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3quC5puxN4D2J7oEDj9kPq4LPjP6sNKjV6u6x4SDBefcXKWSDyNXSEywwgTBZvpKRbsamJH8Bb2R9zoD4ZBFoCSn",
  "key1": "58X1bdb52iPvMdgG7fdm5Bb5kDxThCYdcfCjyif83MnF6CnVz5ibWPn2tg2MLAUDyC46EbaPmw48kP5MAuKvK54o",
  "key2": "MAfU3b4XNHDHDSnUJXq5TGRhbz27Mqcy3JDW5yBkC3iGexXZP2ZAc2diFXAUmLRmfRDTon2tqetTQURvmhS8KKF",
  "key3": "3jHwFmTteC6B8VPG4Jj7dyjdzgHQzJsRViu6sA1iYA2fqcvC7zv96xe5Tbad4yvP2Z3YspwPJe6oU5zvK7r2Y98s",
  "key4": "3j6YPSEJ7YNJ3t57DJV7S8y4ucHKWBGviQyQA3xEkGfs8M4rxTywsYBHNXvTSXhSZPAtvKkoFktyZrzR7MMTtn3R",
  "key5": "3spKJ19yFAPpSVwNF6dA1eb3H3AMdgkHdNSRjD2dvP2TRqaU9WjNchmXwfNSrRsQ13fFcdyyAvz7UJdv9KTANWqW",
  "key6": "4A5DqzsJiCqoJehzwmd4yX2WXYti6UH9wQAYPKGCKzdEqHVxC8wCHs3Twp1omWQG4z1ZHJCpmhfNrb6rMSevaEmh",
  "key7": "cii3eQZsPcqPiyQdDde9c9AYnUpzgb36vdD2ewGFUADD2iQ3eu92GSmAcrBXmNXo7rK3RruG4yDWE1DkmPvSF5e",
  "key8": "4sjdsazDkMw8fThMX7z3w9Ww8AtrVMc6qGCi7y1u9yX3YbtQvnAVQEwB1tK9WXouVLgBeY3eK2H9Pj5evaeFwTKY",
  "key9": "4hFmctFx27rkFmnm8azezrq8do91Syq7SiE9ss6UkBvsKELZDutwFf32zjqLKywyW6oG4fhHpzPbmzB7gCmPA9c4",
  "key10": "4E3qXNbcDEueMgaBSD3C7eYXUCwiG6aNmr35knn5Exh6ZeufoG16cFAMFGAv6mLQASvQt61sqPv4vvQRggoFwTCd",
  "key11": "3Q9Eq16MMyBYGBAdpJZt7v8wqLnkWoQSVd778c9XL19NGWNWXt5bJzmUFKHufM5z5JZtXGirZJabLW6YvTrAkHMe",
  "key12": "3QSskojT32CpJNGb1DhNffRMWWXGtK8vDpjjaaXw468w9cwWT5yEEXBe8CLZmr3SCQtX9Z6F2RJpF3VzN7SGbGH1",
  "key13": "EU96PsrMpa8DLcMy8yCZLZiitzL412j9UWjGEirGcUvUNaTjvypfFJ73yg26GhRW75bUzhDqEMHYXTMLRp2f8Z5",
  "key14": "4sa6h5Tr29yPSBWSinSqDDTmKFnqyNNFGJDWKp4JwN2yxG4qLtqzC2dKBugFG8mV2j7F12bL786KY4RkkGsAsAtk",
  "key15": "5C9meMFxqQVEJysLn8NKE9wsePkaWdvfhp6cGKSVhVkiWNPzgsrS4BbfAfbehDzhLzkpKg5d8YAVv8R4hKEBz1Kj",
  "key16": "4sHVybYJmPykbWLVfwSNNfuzH3RCb1h9yLKapwjWCfHQf9f7CBGwP8FkGu1i6NrH5veH3H69Vt4pvFfkojvy5Yb1",
  "key17": "5pcnBmo9xeEQc9M9ySN4PaKxvdQBDSsuc8YW71YLFPUjFikd5kpTgVKysCRsv8G7Mi8yKAg23SMjT25BqhsdDNrm",
  "key18": "4McSUUxJ5o4JKse7wbbdPD8KvDHwM1N6Ac62UGsi9w4oKdJzsmVVa9ETLNzJzBT3S3TzmWCUbcFZdXHCLtoZgzdp",
  "key19": "5NM13awGdQPEYNzRCuZWYgU4D5oqyHTCn4kMvx4GhprPZejLE3SJ6Nz36zyXKPjU6DkKU3M313PBDjiH66LH3FSS",
  "key20": "4fsnG8rKAJaPCQLZ9nhNJ58GdnQu15xWbgdgMnFyH8K8MnzG8ugyHe9KPRHVrGo5zTw8CzeqFtYFFawHZhQQWQxA",
  "key21": "5mCsMYtokGYST5SQGTmdnHAv5VjqAU37vTVDeuZ44YJJBxGtJTX7oQCEQxCNu749S21dnm2r65Wu5m7T2yXi3XQ6",
  "key22": "4qbHGaUwuWZw61wTZQvHWJ31Nz1hQrjNk5srP8z5uuQ5jxpTFnriWK8C5LRRALDsAY3TJ5MnSvRQi74hgr2ELVwq",
  "key23": "21XSfzPPXfTYHQUg6QjV7vaDPt97w7pyuzzoRhiihasBY26zK4ayKPziGoa8s85P3644QzDyyYmjyJnUHuF2CpoF",
  "key24": "4K9mMdkQnUJWAGW1biDEtEVYjy3CkjnZ5p8wU2V772j6qqCDUqney4xjvHattq1kfGp1zjg5YfAQaKBLT7mXhKKg",
  "key25": "2TV2bjuwoM2XQAnMju45mAXHN7wjMNN37HwUaJu3JHwgCXyuBX6eg9uXVnVfCTJcSyRXYRLYcXhfodGZks1PeV2N",
  "key26": "m7qcUAZfrSUzzHRguM8Dg9Ec6Pzfiy9UH3yAkNrrrRK89RrXXtNd2Jq7JCRwKBob4TrRBV4rghtoy3tRnFn68QA",
  "key27": "4NXrbHq2yArHSRgRSGrsW2EsFGdZvw6usiwoq1wik6uz7FFrfEXJ1KHyCVRd7KUh21mhKYsPwZUApt8niLDtnmYW",
  "key28": "3zFGfav56zMVv3NZkK5hLFrgUA2tFkwzg4xayxYCEwbMnHWAFZxkWfdcaSuToY3gknnoQ3GNREL5w4cbXLAMwqEK",
  "key29": "583AZBbPG2vdZKmfFc7urgoUvVUeN7hUades7MBoo5DforEoqe5DsHg4qFFF5nxZFsCu2NL4KfM5FMLdYs4ofx2S",
  "key30": "5H43YvRZXw2PN7VUgEuZVkNooRN6XY3zjT4epdz2z4tASSFZNaGBkok6DtfoLCVmhyJnVMxGEAksWnX9dza8cBNC",
  "key31": "5SJJ9TpZJFxPBKaSR3aHVab41Utozniz6xz4NARdvgC2vCuRLPc7CFkWLcoNFAkxmozB5poPGTePcoC3bZiW4qhu",
  "key32": "5ZZkme8Dh8CKKNvv97huuKpYsjym9k3B8wRWbjyGakArDhS1stGYQgabL4QUWjedcpkfP6JtbbYoXQEZNpXuZAtt",
  "key33": "4CmLU8fsbAfC2B4rmBUsVwANoXQoLSnBiUbbXF89pK9njmQkdhRFJe9n15Dc4g1ujrE4eZZjuCEKPKstseeYDnUW",
  "key34": "63VehLed693G2B7bvgzqbyzT6ejssFNFv2vL59177EfWwRHWVktCdQK1kfXS4TbntwJ1zuqmV7VRhr65jH7bBrtE",
  "key35": "3JfS313PDV3Qp1HwArqGwHP27v8TSTBHrXjm78r8yAHBABzQi11PveaDkkTV8orD3EFagwbBNzE9YxCzG2HsCLk6",
  "key36": "iaznZgAnr3rB9uyqAEA1QMnjtGRNF7viVXSJxzjLfKqEN6wGW4aMd12RWfxYmS4ihAAkp9Toxkw4ALDSqVmHmLF",
  "key37": "3jWviPNN2jFjF5178t6LYqnsboRjJZnVAKzXhTqk3yCGD51NcuG6vb8xWmzWrsRJ3tJWYPm3hKMDheecrx4kiDKk",
  "key38": "3HubSzdPKDUyDWai7KUK3vueoJkWY9M6XGtznPDaWCQnvm8E9Juy5XvqUMKU1vAJ6UVromDwQFy1MEFTiL8XH9ye",
  "key39": "4akgJJGcGwjAM2mTab3tTJbrN5KLBx2S2hVebc3SkTxkVubQKHPr5ubr5Gb69WoafkhaCWFoMA1x7wddjNZbmWD9",
  "key40": "4uh4WXsjFqkmVRW6GM61zG57yRxcs5FmhatgBaVVzXzQEgyTQVGpUAJjDr8Vm7FsDDoM3pw9ANMf1Gdv7hsDcEej",
  "key41": "3CvpzsCMo7CqoPqShtPuznEWvJ8BrHoSNCKWsHsr722V2uN7xaohY7pd9H2L5zK8BPbQMhS5mpWTwNZvY1bGauz5",
  "key42": "5kcs5Cx66XP2rtrNF9ajrKRdr1JF5Yt1JtdPHiShKWwyVZLzk3agqvANt4icTSRRctSWpMQwxdu8EGeMv3jjSmue"
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
