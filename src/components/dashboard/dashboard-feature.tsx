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
    "4fyGAYwYM1KEks37uen9upRSUSh2csKJoNDMaHrnNFPQXR1N493b8MqQosuLom5MxVM6dijVjhkhC7ck63xDLBmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xj7ojrd6nUtWivSsLSwev66gBH4kmRKXEnWmFVfXf5SyFUkohX5ZkU99nJPHfqxE1JJk7Hdt2AzbwGM781B9iRi",
  "key1": "5ZALW4gv4i8vMF6kCcsAmfB1VymjKceXhMmwG1L4KrvGHftRPE8UqE5iqNivYdaoRMt8zyzepcHiBKCjoMc51KMT",
  "key2": "XBqWDRVqk6e51cd2PidnPSDZK4LiTHEHsLbrwnnbapQwcisAFJQBj87HBmGPR6SvecFozRBP62Yerj2FtALqRyW",
  "key3": "2dRjoeNGMjjqihRkk4GBYmkxx1BLHnWX4giiMxLg72rrWcoLNudDsWpgXJUR7irXvB6xasNnJjTsWBHrrVLtkaqU",
  "key4": "BoaU8Mvkvr6yidZbyDv1eaYxUk63YZy93kNjemRkJqVwbtXhovWciG3hJdgjkXKj7ah7uzimQVkPLCggzWzWPee",
  "key5": "3i9GhPvXsjE6qz4bGSwmXTnKiJ4jziZHz8QskF1nc4Ms5RsBuhB4ttkdwmYzD3LcWuRmvtvQAUfY56AJeQ6yofhM",
  "key6": "43Le5i5QrhYK7bUzcFu2fq65EikpDjdZ576x3ykvWoBSJG1NeZEHhUztTBqWB2xbPgKncpgaWAY7Qitptcu99rpv",
  "key7": "2yuoFSK4JSe433iX5gqrGG5eoEB8RafzjuKcaR1NhBsWdoSU5dXVbFH9Qr4dnotA4JbxdGwcF7rUKVyiYhLejgjH",
  "key8": "2uctmKL5FVZJsv6FgXYMizmFqEyD3SQFtp1M8R4k84PpLDAbU3qMHDQFZKfXCfs5d3A7wy2kzbertNDcMecmpQ92",
  "key9": "5xPCB6qfM5kMBKMzzGs8nW6DhJhdfRMHnxWnAsN1nYndFby1sNLQbbrbkwBSBFoFT7wzdF8DxQgD8PAqgAYCKc5h",
  "key10": "4U5FhC91iAS7QfESdi53XBpjRqwjPGRzkRk68D2EfyksVpWyM7uuqMkF6ZNzGZ8GbNwoyqCYY1fxEz3GUUswTe7",
  "key11": "3Rwe1paZVTuwmTCUmDc4XL2QK4YVJpH6zLYVp3vTVSrjwdgmVb58rmNhdXeWSPcTYzdEEMri1twXLe5y1trYHJKL",
  "key12": "4bTsjGv5yTeuiGSqPqwgVzzReTvaPF621am74KgQp1q1ymyvXaQeN1zi4oJPDMkoa7kyzBLi4KzWq6mXuPyPCSdq",
  "key13": "4ybGg3ubCJGwBso72vfRMDJ1CRaXQvzCV5Y9u6Q7tuSyBUX6WaayMx7TzgDuKhr7Vav4vefxW4tjTBBSyYj9pg3D",
  "key14": "2UYMKtMTY54QVCV7nTDfjR2JceKYrUYHu1w9y7wgfpNgZ9UeqLx2uEmmEUibwp4MRaPcqW1vcwtAj3G56utZ75UL",
  "key15": "HWKt6HSs4ivjq7DAwVpCW8MDsuHMJJBCK7RBJYtYnuAkjrMvKmBi1tQUXpDrtFYfW2V8H27w1dgfawwu7SLbPSE",
  "key16": "3imMpLwryob141U3F2JXpJgnPMJZhogekFfc9Y52CSP3Qbne5j1dGGScJU6awXzYbPQSQygox2kH49XvAz62Whia",
  "key17": "5B52xYhCeYKF3RtUGaLe2ZRSxDcvVxKEpTfPtk3vUaLTzrS85uPhriBUsfjVqzh8g2Ym5fDUiEKcWkd45eeoWB4r",
  "key18": "4tswZvYBYX9nS74orwQBGpc2ERCmis8NwRZRL4KNaghoiNoQvhXEZhmCoLZtbeL4c1wHMYqyrfubyvhMh8Y4tAyC",
  "key19": "4vyWr6JXi1ianDdN5eSzRmUHLiEgC5CjWjo8n81o68gcAaLZeU7gDS5FCfz7SVVMUhuwvWLcQ4J5UQx4h5QagWXd",
  "key20": "2jSmMdv4VesgVH2BJWx5DVVbq3t9dSsvAtQ5srWFN213UG8i7m5aJWFUPsUynZA2swAvtbdJdZgPvz7KCGECBcAe",
  "key21": "5gctasKVBwELvFPcdQThANmqohd6t12txdqLbHwiMvCz5DYVPqemKdw9gDpaUQdjSkTifZZnoDJ7DkpTE628Fh5g",
  "key22": "4pSkmHCFP97JfHLXT7WrvCVaTsy6z3rZEzDkZtqZe9hRzwVoA5kM32aXJB6ShbSnSD7Jf3QaW3bnr2EERC9praqH",
  "key23": "2ijpPjCyxXtWLd8cNtpzycSAHJvgfhkYUPCb1sVirPY3VQXzy2ieS6URJpjaC8wpTqX6bapEuGb62LhpC9WTbJTh",
  "key24": "3fHw9wJVxQo3DXMm7bmyg5ciBzRFnaxqyy6AhCgWJffK9oGdxMhQN314Q6e69gEifWDmTS6W3wcTTtFFekQC4ZR5",
  "key25": "5FKQPubpYZhkZoyzrQW2BEiMzwnyaTTCJ1YfMb61m2ehKHBNpoEnpCcYzWizmqSUULyBjktNHC34RHX4ePktpqg4",
  "key26": "Pr1Yyraj2r8v7emwZkb3EWKQFrDpYqP5z9wY8nqjd12syQSc9VjsvqkMZvfTMnXmtKBLaiNH1J1pEP5uVY4C4u5",
  "key27": "4az6MPVK1ud5aegyWRer6xmobWPQf73xk67zNN4FQcUBeLF14rGS7aZFvafHtqRRDaDNdTBjPZbiBzo5b4fUYDbx",
  "key28": "4FaiyFDMCtcUaCXtwAPoR3GmAv3EdYG4aarsFDMgpcbDJM4Sf5s2kqCR5GpbCGRCSrzbHobParDw53QEXFWY4x7t",
  "key29": "43zRzGuBhHow3weF4xyjhA7FhEQWLcKHDawnme3APkcYRsmb9BtucrgNnQ8wx8HC47pCcphcSKXjWYnbcm33BVYc",
  "key30": "4dAQs1gLS5sVQ5ha5GJySuRNRD93h4hekvMyZtw3dGuz4D26irYmaEBSyAZeAB7Hf4KDuaVgUkouqm5i1rnHt3WX",
  "key31": "3mDUWcRxE6vaFSHLAAYwTr1utjXJRLDzV1FcnA5P8AodA5EuTFE4co2LvpRcvtAD9TcjGGExAk2ETqY5AcuaFwVE",
  "key32": "64VZySoQjUp7UFirqQjugDZhRMkXDXXdiyR3rwjuZ3aQHW6Rc6AKKK6Ro59De4KvMHfyz8ohMt1gkgD3x7bpquRb",
  "key33": "dGttzpUCwWRn8ogjoN7gnujtsG6kF9Zzg1u1461nkR3kSLCiPud1YFxAfnVjM9PCmavpEcwjjSZb4PvBfu2qknc",
  "key34": "5SQUpbhce6Ut348hHuCGijfY7T3tGymCCuKUeCBGGZuFsXezUGod47ER4wjaEWBHato9E2JxHzDCqsG9Uqfzwy5X",
  "key35": "5wdbKuEUEh48iZmwpEfLnYMZZ6eSKvwePrKa6PvSYTCXrSowu2oEnc8HL3J95EAiQ4oR9BfBEeQFfjBCpfTCkM2a"
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
