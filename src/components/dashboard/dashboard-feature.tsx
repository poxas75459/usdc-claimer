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
    "3P4uyscu3jjwLQ7ZDXURbdg1WUsTeZciHRJy4wnvA5Kxv256AhCpNWbLCK7g5CZqvRHRzAQXNw2dqiaC3ZHT8ySK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23uwm4jrwjvftj7xXDnX1ebvPxXzPJz9Q5ZW2nr6C1KFri6WnefHTgJDDXka89QwajUecbFZpwjWQ5qqDrEk7vPG",
  "key1": "3aATFDoYMnYfeNzWU1AjMh7Lx8GU9f6w7yGiGRt7L8jKHYRiwpzTjYSm2LCr3sE7XVqqFiDnnYurhx1iNUorU1B6",
  "key2": "67F7Xs9pKKvfXxpecwhuyz27cTS1UxaSoP2cXefZhZFACuGaYtvWXPMjV1hauF1HRsBsjd2185Uy9p82yVg97w7r",
  "key3": "A45NdCUEvwh4rHJDevY8yGWdQYGnDF37SfJPmetqRBaqJEeEV1WPrJjejNHQgE79o99xvcTGwmLwfvJzYjD6icq",
  "key4": "3hBJwupmqufxAwgvdjbJfFLsQRLSqSeyzES2bcnLTnbFdBjpgKTgE1Ru9uDPott6JZgJdzvRnSbqNe1uKuS8CvSK",
  "key5": "5VLWnfrmnzSi2W5icvE4f8Dgm6zUr7mZDigaAxkCtYaHVQfFpGcB4yyvtfrGTdkRTW47k94bg27uxjJwDeisFfEX",
  "key6": "54Wua6X5uHn5AHPmZcd69GoaMA4hH7wMy4goMLP8FsXHpNyFnroBYyrV1mE5BBRwZmoFKmA5g9HBrNPCUF7uQerR",
  "key7": "44VpSMgA85VwZLKFV9MVdm567pmzeFzrhMbXKpcM5fwg95Qddfvv2qqMcdtCL77Lezh79wCmLHCSsLuZdQFgjYdy",
  "key8": "2kbYw8xP2XZmijr2DYcXmx5DinEJUpZwME1J5bzYY4zt5QqzugAKoCRMzwBiBzmQdht91q8foTde4zv6W54dhxEr",
  "key9": "3pfquPFp2MRqPxpiugkc2W737BaofMicZMKMx6WFoKZ8KpDTt97F3s1cdqbCdCYDMFogQT1f7Euz1bcVCs69nuK3",
  "key10": "4itgUjxL92ZjEXuzRhpRYRrHCrLUAsB9qx1ThF7SmTGgoBa7hfVTNiNuZsCkmcEwgxhYNvVNp59bbZfWAjCPuvLD",
  "key11": "3jYaHtwPMkvdviBFgGWyrf5LWYrmheS4nRmp28Uqao1hmXSnRVs2Z3D4tshSzfnzvgW4JPEhUD5gehUaKvV1cb6x",
  "key12": "2SQoRreujT33fgh5fhv3JuKsU1fvJ936GtryED8k9MW2aMmrpDfKmWBd4P8EgAfgQGcXHkxfns8Acu93a6cxQtsX",
  "key13": "2A9QsKJJ7vdNqQqfRQ1L4r9TEHSXgmsSPwTjUah4YqTeLWNbfegkcHoaxJxxxGKazzt1JfZW7C7ejyjFzGup9cZq",
  "key14": "oHJBfHe9Ar4Hdp1XNAKNLje77vzozpbHvSYhTcz8U9zwCMuD3pJpp839jrdTi8JAhhJAgxoDqFVZz5iCKw3LESK",
  "key15": "2DpmdDjvwW9SRPrTrbrza9Fe7cQ1DrHQ6BLk8Hi88XMFVFgPsg19LZGSdZaHzbMKHsSzfvQkNRKxJ487KeYknUbt",
  "key16": "G7ZQRJQdQe4kf61o7FcaEpyzGExBiA3jgE5ezd9dwChF4nY9xYa2hZ5qRaEmV4GuqaY61vSEGoFKowKzA3PtNA4",
  "key17": "2PTuAaVUmthA8Ra7fMJgPmzCTyP7YXvMTh868ttAmpzQGXUvRN8iC3xzjdWjR17rmNL5Y4xxhSq8mPg9XAGM7SiD",
  "key18": "61qGLCoeSAN8wJJoz2ehPaLKzWs2PXFNMjoGc8QhTZ7p3Zffq8LDHaf8S6JDB3BtcbNcdR59uNTWGvwfPVhTVQQQ",
  "key19": "4X2bbyY5UHWp17cVrJQK4oaaZWgUPayzAon7qkyv9yHNkekWZ4nzVXsfU6rRYFcc6DqeN86YQ1xfoiDdFC7p5Zya",
  "key20": "3q6264kR3Zi5dN2ngEcJPWw7G7uouuX4KeWMf8EKsQdjQdbyd1UtE1gEWZDTieA38yNcJcsS555Jkkbend1SeNNQ",
  "key21": "45Vd5bwL16QcSNJoJpei8ApMW4gbu3KBuK4dNq9YezBXRWvAZX3ZDuhM1pcyD4Bi1xgLJy7GCS3nBK268SJLhvK3",
  "key22": "2HaHpf6ZgocxrfuezztZg2W3JDE9nWYGTqqccxKCjoUixMHQXVzXZnuq1FXFX2vyjTg9bMSZqeewQ2dN9SBqaAbq",
  "key23": "56H9kFTSS82PoqTPZFwfFe6PL1gfezfyjd2LeGNRz2qz61mLYGKikuf2b75jmXG1C1rRrKqgYDSSUqkqyKRnfsJR",
  "key24": "2MahFyx5ZpW3SLFGbKXan67XgZE2jVyEyeEqj1qEur7jVzC1Xm8m1RTFxfvJvrNj7MPvSy74N3bMExfgjPa1MfhD",
  "key25": "3opWQxGNjm3j8VZJvw7y7tPazpp8rGe5MJAeoPszAppab7uZ337FrTLBdcqQXiS26QQVhoWUUc5r5RQrWSqeixEe",
  "key26": "3SnwB3gTYAqTeBQnKTSPGkvmhe31VfX2bfvumMXERXSn9ovD5wWJs1mx5ze3ibLXS1mwLj8c6gwAptKm4fUgTeMp",
  "key27": "62cDYqztnQdCD5v1qfNxjz5PfacvwFMBXCdXkdDDxBZGbUtkH7e9d572KjmkZPFAeXni3RWiJKZmNgoEtU24VLHC",
  "key28": "TxSbam29UnEbvGZ62XrWiCnDKBLXyMcqHin7vpXUHoSQcqRcEBDWBGGjFrrNh5zjPRGTpatuYjxf4TddJYWGpFb",
  "key29": "5mMc5kAjtxtzPCbVVRj1WY4BrrJM7u9c2C8rVzyZM6f7XB3uuM5pTHz53X9izZW6yZv2JsKv3iPDHQdXRm5ZZgUH",
  "key30": "3m3o8CpNwaBz2dThG7CFcv6JNE4hXC4Y5yDHQAka2XjK8hVR3QpXSLiZjhjYHaJcsgezu1oTnwzA7QsEgiTvX51M",
  "key31": "2jwTMsYzAaowDS8MJZdnXKb9p2afin2CRBnuxUJg9E4gpzfh9vFLPHJXvUSsvKerEzApUFU43M9GsyXVr18K8iAX",
  "key32": "5tB2A8V3ushqDbJdTMehoxdVSrP1n182gtnamiWWMwhbrTyrzs6m5ZxYXHn14LhXyQFKf9ina6P1t3ZJHyTNRVtT",
  "key33": "2hBmLEfURLJxRbbBZemm8FX6XdmvS6U3UD8wVT8V9CpXKkoKdSDm7RfCvDGwhD717fSSS1MaD6HQ5Ga1jZFJERd4",
  "key34": "42fEX7oVDcgTsJC3A9YeRAynWYqKqzczUHvUMiZjWFziRrP6CbsNmZoeVpiQQwLa5VP6f8rBSfh3q7sFgAhMbAXj",
  "key35": "5s4w11oPy7cJJpWJ4Qw7b57bTx1cM8eKQkh47m5oVbfhXtGGZJ5KZucv215NsYeq7FJyngVGMUzKHaxK9vBf7V24",
  "key36": "4tkp5HphX5NXFtZaVcYpYG3kxvy9R1nRabGfoum9us9DSkhaLyVAnvfd6HBvvmQLauimqYkbKMGXuUgYzWmi3nUR",
  "key37": "3SwmyYxxRoKMAYeS3AFKA3yb21zGzqpKKvwzNBaY1a2PvRKSuw9F3swpto2KVJR1Y9FPgFNd6JePSgsC5qtXf7NG",
  "key38": "2qvvUPo6n9EMRGWstn4c1QE5vcbu1SR8nY26EUSBzjiNZNps44J7bX78vZQ6MVA7bfbftQZDzbisguerUSk4rdLY",
  "key39": "52ADpxNHnV7X5NEx6JJM9qVtWRSiD3X1b62AzRcTw2fnbyyzUxauSkfEv2hvNekPtEw6Kxzm9axEsvMMXwUhrSEz",
  "key40": "24SgkjipubWEynPXievKKwmDEn2g4AZZNcuGntvdR37SyEvq8iLDrjFPuSCRum1Y1mTYhv3SvuMGe35K64Jevm7x",
  "key41": "5RWh8JuUweg5Hp6TbQtEL6rDyPd3KDS4xZQKQ5JFExjBYNzXCszGFV72wpoHKpVi3u1Vo49iAmPJuGCJoxAckJUx"
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
