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
    "5pFVmNXu4y1xvK9fm7cVvmtGur34UXrvKmjSGhV8i1HjiMcznkDoytMmcKeLzjUHEE61KBtsDzrrFKvhuHhGaApd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B9WH9bmk8eHnc9pqVrjTPeP21Ev2AKEudZcqBRkeQQ9ByMBbM4y4JpE61XvoJSZr6xR3Ria2pjj63oCPZinY3LH",
  "key1": "2eRRBiE5ba7RmT7hBPZmst3QiDnjskNbcZQAztRvz9wKjpyi7Vw9XMJbxwpMDnciZrW1qXSMFWD6TiQPBunbm9tc",
  "key2": "2o5YdqPZL1Jien9eo2G2JUApyZqjXepP5QZy1bThNWCdzHoMNQYKEFgoGAX948DcJsv9thc2zqffthVN2FsTYSSm",
  "key3": "xJfWLCPJMH9aPqYVS4hyye1vWBS1nXSti5MmVN7A1153QrCCK3Yfka8SG5jJVGbkL6N1YDb4faZNhDddnGaDSDB",
  "key4": "5EBso1ZE47MvANh57ddFXwMD69JhpHFybecrXyQtfGrP8W9MvFYvjseCZgB6Qtn3X6EHEpmQMyG4XPgNbWiheYQ5",
  "key5": "42isabkpYsLzFsv3WPngeh36oY2X2iuU3oQ4ohqcDgaiHPFruMF5bdk5FGvEixdCCjZS25hoe7wLEcqFL5UobfeH",
  "key6": "2PQvCntbrVLW24Gsh286Xy9FBcFz5tcW8e1b4Tyk4TDYhWrKqgL2b3Vcqc5zWzz7hX9ZgPXEtMkzhWfBSVHJeF3n",
  "key7": "2DJvtbEvUqKDvPapVJbn1GZVXoG76S2NG5bCmA4QKchatqRD8ZosKjGKPGH9foVQgjYA9MBTZFvFidKebB2hYdMP",
  "key8": "4tktozt9Ed96DCodyUpg5dgMLUYHyeQiejhm1D67379qufm1mSYUfuPtPahhuqSifs5CMcai27F8QauRHM71d9Hi",
  "key9": "eETEY9Twm3gsd7sA46sKuoxZ6Vkt9mkbB6rzCP2sriB6NY7YrNBMyhqrzE72fcN36h2GGD6JiVGDLJoTvR23PUB",
  "key10": "5eED9sEV6zb5hmWLggyKgaEmyQtAcGduY3Lt1Cyaq3RcncD17rkX93RWLnVKYrkcBxom7NBYrLRRtYFQczaZkrjV",
  "key11": "3AubFYoE9vULAe7mZbyDGEumEH9d6364bAhrWjgCdfo6konHHpq9Ndbf1q97uYLFbzzUK3tR7QA4xPQzWNo8EGWa",
  "key12": "5VNoqakLSUQ8p3XXAc1q32pedNQaHTouHGnQ7FATMrDZRzRDeTVjTrSmbWZcLbJiwbCRUuG58JuzVc3vKyoaty4V",
  "key13": "3QgDJXik8Sjoswk3VGsmUmhfm1spqxiSun1tqg3UJd3UNTkxhqGBfTX5nJi8skBPTePLbukc9MZHw9X9foMaRSan",
  "key14": "2Xix9DiRDZmGqZJ9iJNfYEGpLPzPLtB8smUfYpBgjSW4dXkz4VE8nZyQjvFrzwTeThcRKHtSgtWiuse3NuM7ugmm",
  "key15": "8z17emh3Xsg24GPUHQLkvgYDij3JwoeQB3yuBJ2qqQwnYbUtNovK27T5YnQpBtdh9mz5q2Eu4ttxMRe4FE5Cz1t",
  "key16": "Hu9DcA8Wu4urucp3ScrKiiYioSzeq3y74Fh623xTPu48yXeweMDBe1nzic9C27s8mHtCFrzdQnPNRXva32hsnFE",
  "key17": "3FBEw9bpfe7MzpNKRmJGA9e2tfjGHWsuV8Yzs28bBNXXtQ6uBVquw4CvcWgQkdCGhBphmwmEhZb16cr39cJK4vYW",
  "key18": "4H1cJm5pqsHwLzNqyX1A1xjiyDZkGrAC45mUZcMbnsJuWGuHrabBunYxA9SKxjcamkhpLQML1deRgvMHwSUw1P2R",
  "key19": "49AHgXbVXjSXgcVkcpToa4dGbwQGvLrZv12wT3etgek6NEFn9kg1KfJFP2RKaQQdwCgQEtuDWF5DYLGmMq9F88sf",
  "key20": "GCHwuzwPP38Gk62XGbtTseAbpPwV9EzpxQQrhgDVD7gai1BLrMHrLmsTFmZ4XU5KF6CjeWgYbCVfbjjzRrtjtGQ",
  "key21": "3uEjWV3deWwyh3bQn6yn3mmQEDYY4gy8GELGaciyjKPhRnRFZvyvahBpeLuzXESYm4La5FWf5kuZ31TpqpYyz1re",
  "key22": "UaTtyLFfn23hyGssVGis2NEqttdvgvDi2ZNKuyVECbvzKmsXLE72YNbjnBiuepFNmwBdM6J8KzA4dC8sTEPnmvr",
  "key23": "5cTn5eUvqpFW6MGHbsGmWjtLK9gMhfUsgqtaEUg1wxsZCge3b8Sf29E67uX1fXwsKmKAE5Ysh7h7G3LxfUqXgFmJ",
  "key24": "5VdZhNXWSY6YSeyfcEvBLY9mCASXqpFLrkmHFa5qYMMQDwVQtZto6wtwNEyqNqkXxG5E26J79KC2CJ2MB6xEjPF5",
  "key25": "4xBQK4Ra3aaJ97Kp2CGsxjan5dR2mZoB9pyeYF4cXM5BCoeXNS1dthkFXPYoi3xjHYeNoQzfz9baCVFKk6oVp7HH",
  "key26": "3uUfA2Q8Gav2TXWyQZHnxB7tb81JjdJee2UnukVYD94P2KY1uzTt4co6v5ZZGZi3wEJgXAJvuLqDxcECfbxT8pnN",
  "key27": "56hfXp3kZ6wiYuKVjk7UC7h7M1bid6sf6AU4kq8cXhxfvFM8AJQDXztRvzkGsPsRxfmHoP74q7avH5oiCvxQYEty",
  "key28": "5VrRwQ9b2cE1YZrAmgC6Eb6dyGMfKZMcJ6XU1AMjBF7Cwxb8UUGiuLfdRyVCzyg3Vaz5Rntq4f7EBKZVmHVwLtAE",
  "key29": "5SNYMZCqiMyejwxyrhj9NNsR7x3sErhzb5A3aRfYMxj673pzATcsasrohm73nAvu9BgmQzuu4dJqzUaGc2XhSwvP",
  "key30": "2AZoa3oiC5cRyRZXsuhTcjkCAfbap3mUt1i573KyjACX6uQa3UYHo41QruqcmcDJrAL3hGtDRwqqjVpARX4yWzFn",
  "key31": "3d2Hbko5v9QQ4HN2vQnp32tYpKGboZqpWpYBTm4zksa8eq6tiQgJzdbeQfA8KSQc2AG7qvnypqtKGHFjYyLTyPt3",
  "key32": "22nX6dmaz9GqMt6cbkXuy6Tu353nvwj1KpMv8S9WZDy9Y8cXBXZrFNuU94DpUmofSPdMSfuASZtyYbzY4tprfVk6",
  "key33": "2Yh137EsCEPyRuGiBApPChPCqLExiLueKJ7LYqfysuu4NGgWZvdMbNMxnTSESr8FWnNKpMtHFhpyXRz4N7TECdR6",
  "key34": "4HX4geZPyef3Sq4hC6qiouzufBGNzc3N1fLDvqNk7RSh6WdraRjxffEgbUdnVqP5aDAH7cPgxsnudz62V5C73mKM",
  "key35": "Vr21X9NighnJd3xmEjNyQSWXgzdYLApaE4CKcp5u2EXNdVySTrPV3fAbSwiSzdr64ymnwqXTHHo4qzcWgWx61My",
  "key36": "2sXV9GsBvM3AExYUyso4tR7jqYbJnYQKL5bWWvguohRadoAftXjdppwXQjRc7fuNUPJtBNKkBzTPnevS46LjQQQt",
  "key37": "51VUJFqZYJmGCCnWowFveUQRmDj5dytq3c4ZdiqQYCzPz8kYxqRiPuUpDghYcGKEyHZpgf35kqpDu4DrNajAXbVJ",
  "key38": "4Uqzn8Vz33gJbrVkr6uccnspjLp3UzZ8gAVEeSNA5w8tYfQ8nMey9ZQTKEjPCAaoP44bAfr5bvgU6pMNpHBSzZFf",
  "key39": "3C3NLRhcitEWrRhZqzibc744maXDYwhxqiacZpwwo8DLVH4rYYGwY7T5nPw3mXFUiqKnA9rjCkb8SgN9WPJMT8g1",
  "key40": "58Lr5ujbFj5bHSGTcbfiLHxo471nYgM8GFKGo3g1EsibJsYcCF8Q6JLqAbiZhM4QYKTR5SbDJ6zxRcLn5XZ2HzRp"
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
