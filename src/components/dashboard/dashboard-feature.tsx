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
    "596h317RVmKBRnfw4WSGK56Y4MbM4WJS5AL2AfBWadm85SZnc4NrHzojgrvrbWpUJmrs1yUabwbVqvVpAMmerEYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FP7jefWXGEwiQSiXXyjNXHZmyAn1cbjGoHGZFXX61RixEMaSrHuaUcc4Jws6F2r8JEZjb61jEC8r9791zyiC8NQ",
  "key1": "5ethMSmXQQegLjfWHgD1goW5ahAtUTdn5VcyFk1GbsUzpeai7TweXYh2p3UgKArPSXhZr8SDKn9dj6T9ZdRQXCUg",
  "key2": "4gxQduPwE2XrQYDYXXk129wCkYtJjQNsDeZPssqRkyHhg62moUk6KpvqUwyPeMrpWULK2s6Lq9kHGsfMp4cT7riY",
  "key3": "21DGhCBBLmn1eptE9gcPaWcVq6sc2UCEM5P4AAeeXAibnHSw2ZpykSp7JpUrwkYC4KD8xfMo2AeB3GByaHgxrHuy",
  "key4": "4ykRoT3msfkEVWzoBfpvfnKKRJHDdPt3zbEgpARFvu8qsruaZh2aHX24fVTh6KEGiLKTGviJ7wV1PZRYamo7NZ3K",
  "key5": "3VMk6DV6bJysL6FGMNhSD4TiDb5p3ge3snRm2FToK9tyovYG51PLpGUGjS41bJrf3yuffa7nQszLtMMdLqJcvtAQ",
  "key6": "27GpGbZAdzg6rhkAufMev4iecwgaSB4QddjCceosc3XqB5ZaT4Za1sH3rougq1XfWP8Q6oMmMGs66TSJUU24QkRa",
  "key7": "2MUbi3Ch5737SWtXhXEBFrwR3feFBR3Li1gfekzp9Hro4NTiyKy5kX7vt1J36XqVcmtGtuCaUJY7MNxpJ9M8BoXd",
  "key8": "noCLfcxQb7PRJpu6geydgf3JYbv5mVnexj1LufAgQ2LqY9ZE2v3cWSZWP7dBn1D2DAwYvwCA99CKKZkHjyhEM9P",
  "key9": "3mZCjg1nUwCBkc2tJhh33eRkYyC96JAFxD6Mt2R98zmkFAkBu9LhWg2N8MMQrHN2hSRZrr4iwoEdkCsVTzUd86on",
  "key10": "3C6sitnZT5ifPrvbK8zsPb9MET6d4RisXAEHLPR5egTgWYB9yB2bv8LJXk95j1n2zVmqZ42AUhch5PfH31Yjauu2",
  "key11": "5q6GeSSsUtjQK4YLyYfnGw2XBVa3ckaXCkDZzHrVZSvaSr2JY8DZxHPpSt22QEq83v2dKNvDCuAFpPbvp3JL1sUK",
  "key12": "5gzL9zr8B8j4nsqE9S9iaztx5WRG13BkbczprYjjLZEhvLdTf9pALvyBgnNwpG637EVvPtreAYRNJ2KHZnbQfryX",
  "key13": "3iySHC2zrWsYfXtDMXp2YRRPp8DC7EeYngN3eG4TyWiGbWPKbjuCEzQPxGHaqhWhatpx5qpqDMimaHqKekbVni6t",
  "key14": "5CKVkbdw7oYAf7Wk5Uz84WU9B1zJjK4Mwy8oWWQoNcpop2Hw82LS4qYjSrWfQkuQzYEhzuyfWyjD3PEHDwiFKEPz",
  "key15": "2vjwLx2GVyUSsAqnZFUQ5fBWLhc5nHoYzZiMqmGXwQwRExgpzvppE3ieXi26CYadhprV7ewHACN7nLpvAkUPs4gA",
  "key16": "3L4VrUE4n9EBNyw1iVn4XKh5Ve5C7h3i8JBQ1hSw2Lvxq3qu28A2W23kmCGD4Cs26qPwGihYQDM1maJBN2fgJJ6i",
  "key17": "5MgUDKyD2W367ZBWQH3gxnrYvbDXL2NNYBpqy8ZUyKbg7YneLwxuuzVQWfjU8vsd9V3JVxSUHRdEz6yZQxJmmmkc",
  "key18": "2fmHCdvCNBRM8yAoWHu938cx3k8tke6jNAZKcr23JMhu8scuZGjDpzWCRUCknXxysfbux6NKukbdV4ejmgLh18Lv",
  "key19": "4cJJxnCD2eu85v31PVaJP68ZEpYhzyRMZCwjJZRKL3PtJyUxvhiAxEYzWTQcL2reK5Bpk3uzQ3XsyyApTFQx692j",
  "key20": "3EVksvE6dj4i9hEAAgYeRKEvTaKaCdzXuadXzewEMULUsE1VLXL4rHjx17CKRmNbEEvheTuQ1NoZSbQVEq2yZvUi",
  "key21": "4GtMr1Xofj63NUB7TPUzEqbauN7wJ1zaVc6bmbLNMndQskw26HQH8P87UN2wwQ1HgmFCHegSB9ABc9xqgPGWfiGk",
  "key22": "X6VdkeNywbaoF8yPAFGLGApspDFZKkn3FtCJJdPfvhYULb7Yks5geizEkCW145usYoKXFjCpSFS7spGk7XNwpFL",
  "key23": "4SvMiU2vceKeTDNoJaXSnZbwyzXmzC11DLkfLmikGxm6mtVmNAd5PaBESenhsefMKezfEnd2qo4bK1FpAwtAY74",
  "key24": "4uApa6DWRuaiEpocTYnGvecRbRm68uAk3w9hFBTc2Upo9L8xzNqP9GbXJgfNq7dHR8jiSH4eUtYhBeHZTUwXdBcn",
  "key25": "4gB4YLgd25BKCwW42Xs9TdRQ4hai55PenjNHNEiR9YKsVXzaaDsCVTPAg5oWJ5zSpfNVhPWcLBPyxA3t9sHhqm9i",
  "key26": "5pYjQbYGj4rTAZCMLfcHYkyWMiEyHoKvf6y7gVkiugTh5raarZ6bYk5jC7mEyqu3MAuiBLJSfcvMYv2CyE7Z82zp",
  "key27": "YAnvxuxpsSDGNtohW3oa9QwU994CRsJbnneFixZktttQcZyasn6YkmBNWguKU95KrJX3Mrh76q6JYqzYQFUAN7U",
  "key28": "5Agwv7UYwrtxJKGeVKFzXr9e7XaZvcW4qTWZ11mci1ffpXoAzhQgWK1mm9tj9dJR4AD8E8LBgb14psX8tynkjfWH",
  "key29": "uY5o7ZQ7b2VDQXpUqmED1XvRX3k3LNNCB6ikvr6354us15BzChd84gH4aYDqH91QZyX2EKjEhcrPYYeJtbUzFmU",
  "key30": "2zvSGBLbMTtqmADxDhCDWMCNMnUqi7R7j4LcFjQWzqTu7QMfjiBZExu9FpDx13yVEpxEnEZJLCnmFzKSYUfqir32",
  "key31": "2MYqen8PdScw7ebRm6oi8An3nuGnzEGo8w4u5xchL37VQ7121NKsrWZL8ErPwwLZBPav6YyBs95iqXd4fzR5Xi6q",
  "key32": "dC3XKRpjsiMkUhTjztxYJi6LEtePmJdcNfpvBkaPwtGVTFNfXFSJ6JGHQniviKunRJ8Rq3jCoyaaZn5jsQFb1LN",
  "key33": "3wq4cc1idAYTneUaBqYzN3thUNvV6V3nEC1M5qpWMcaA8sgz3gYB4pgHzFNejB4Ex3N3vTia8N71HSFVGFcsUyEo",
  "key34": "4tUCRdeK7KSf5no7ZnpXyi6VJG4bp3ihKNTdgWATzFx3go4HkekZFfvPHSToHyGSGSmPZtJ3AVJNx6jnU2Z2hqiS"
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
