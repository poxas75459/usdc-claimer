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
    "2r2Un531tBnNtV1UpVCPAyPUf2qfvNGpzgquerxEznnD4gxeY4YVnML3dMSzCCuEFLfq6L2Lq85nDjbgdVjrcve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YwPHDibdygd3D4Na8wybVtsipvFGXbw4zMLW6UFUKxzPhEBKjQuuyq6y4oggonNf59TtuZMR4GszfqHdC9RM52C",
  "key1": "5hhuUFFTdVq823GaYFberL5faDvEaM1ce8xmzddSG9RVGhN9ajH5B8dWcZRoPxV18qQfCCXMbuGvWbkP92GBPSLo",
  "key2": "45VJJvGEfYKesAgQmdmyBXcAxBuu165s4cdErc6yWG63wRgbMb6JEB6mJqTAtR4eQWw3eCZtJ19wkQgsuYEGHnPM",
  "key3": "3JQ7eoiGeqYdMWcdgjDvYBkugKbyrnTSJa51xr1oFa5pv8u38XEeX2aqdNgBWCjwgh91naaFCyvPNMo9X1iivAH8",
  "key4": "4m8B9fwKiq2XA1GKGBuxnvpzfbhdarmzf3PyjvDbYZLtKsCJWU6G2ea4DAmwhdRuJUmYv3KkCQXsLkd88gZbqb81",
  "key5": "21rEobUxuAHz74oLKRCHR82x45nmPbWBrjTgjNZ72e7wU4pfBDDini3qMKegxqrmGbuCZS6MpCu5EwBVr1kEeKhq",
  "key6": "3WL6pJvVeCvCqxPpkGC2xgmJirZF9rcyFfmqBRRPBPR4v5pyMN6oQtoTscWqmvaUpBU7xpXEpqBc7oD57Q5bMLoC",
  "key7": "5yCsLa2sziPT9jMredaBdbKoK9aX2iM8YwWnydqcikvh7yvK76qkJr82Y4uPpJJWEURWaYz35DrZX9vcAhkdiJs",
  "key8": "5WNq7mxydX5pMm1aAkcjhkjvLpVnLbU4FZ686MgwwXUzQCrGmMWK2G3mtXVZRC4Kqh8BJWYy2hvice9ZbbNrRVV7",
  "key9": "2xdwrg3LT31up1Dz5RvhBvUCuPHSqWLke5LL7BHyXQz9AMdZRwo8T1f3THSwP8R3o2wQfB1CxrEWDHSEPdW9s9K4",
  "key10": "39aGRBPU5RBkMDpTDPXJQGMqxfBgPALo4mNnYAtDVqBnVU1Hc1HyT27FscKLSCpHMaa1JjTftHyZf5p9p5v8fVH5",
  "key11": "4NeAxvm5LAjwPQQNDHQgR7JYLKjGSg5p5ExFBFz4LmdttjvsByYoYCignEutxUx3UvSKT1rPzvREVAGAT7Khzj6d",
  "key12": "3LguDatAKYS1cf9GPS8Ga2HQxws7KGpDcCFKg4eBgRMHs4qdaCgcKUy98RXMFUgWpAAdMxhfLhg6vk1BSBvbo799",
  "key13": "63vJrQSVepoBa6PiyQH3N4t6FMts2GchMwvEh3LcJhaoAS48FKyYBxg9jiwWB7SszXFuR9SanXzWaHS83zwzqRhv",
  "key14": "4s8VDjq8ufqYwC5mmhK641nzdgTDVcAewHaejqwokSwKDyW5e3F9ZRa7oA97BBHNSnZZwnFAwCTpBesWUMoNqKvM",
  "key15": "2yEfcfeTUgJQ96CDgnbL2KXjeRwPfAYbkLspMQBshLPpKvdBgdCHaXfVvK1Ln6AyLokeCVJZJgts5ky3D5tonivu",
  "key16": "4PRn8Ct1XZ1r3hSm6QADAi55bV1gWRrCCjipKqDCy7eWP8xGqtwobirgsKt5xYyVhAuaBYZcZLe2RRHhuCFr1SLo",
  "key17": "RvuiHFe3RMFtardXmAsHcHjyyY5hZ68FFQ7m8UG4HZtGmCc26R3M6fEd4F3J98Dfnskbo7JzfdSbUh3yXnop4vu",
  "key18": "3FpA8kHUdbB8TBxhqLCr8ha3kbrstncMq86Jq1VLgKtFCqbHeDC6Vz5erFFLQ5aZachRMaMhMW8XJ3SRWY6DnVmA",
  "key19": "kKaChmd7TLH3j22vTCZDaWRUPFjgnXoQazd2ntCR41P5x2TGMVC6gQtJEixiVZGM2ZpftfgWLFFMVNfnkvZao6t",
  "key20": "5CbwBWs6GXizATfqfyYYUUMrRV6BWbyDfDXX26CLBGXBisBZ85izM5idS7j4iHc5hhaTcNwsjh6H6qVcMzL1gvRN",
  "key21": "2zmurjB86WwVpb5jPefT1NvJXsyA2rhooPJ5xQvtCZqubEz2waxrx668qsoAqznU9QcHoXR61iwnFjsbCNXXHtoN",
  "key22": "5jYH4GiPe8oc8HF3upDVU5qnTN5YjGeFYKz3Z37pGjQDMLDyrLGZrznHJFJ6q7aiurydsStL2XM42DE6Csg3zK5s",
  "key23": "2WSpbxdYDZ2tpAcDR16kJZAT7NdFdFD96nTDxx2NprXWPCRCQBGWzEhiQLuVrqkxBtWFA7vG8uyGSi7opqYrni8F",
  "key24": "56nV7rJZ1STPj8wMWDpQfhDAuN7mBkaL5QFzzwdspJMkdp6hybXa8g7yLEpY7vAzrNh4g1Jz56KFHzTRH4WdLapy",
  "key25": "69tiwzyLK9jKdrR7FpLR3xR513RqjSeLZmjVaKMdRHndypTirxSQnjXBcD5hdSeNHMWkPsipQTuyuyHA58YrTF8",
  "key26": "3UMWkTxkmMLTEGAiwhjnkxqNwC3NqMrpcQppnqnbKq8bEcbUr9K616UQhbWXfEQFZuSCSCHz6Hj97VhvgUoGX8v7",
  "key27": "57jZk3XZzZ3D99bRVvV9KKu3ukJRoUosx4ExH4BWSfFf54UgmEShvUV4boXKD9ghgNK4WcWZBpmbqZ6WxNkaLsiM",
  "key28": "4MWmtvjmDKxb3kZ4kZxx5NR4p3q6YDKNxWxrvq9eFyg12eRArkS9mYSobZiRZfvnvDboaLLRrcz89HU6gdUd3b9k",
  "key29": "22fMAUMD5ntAkL9dzFns32noQJsDG9DYTbnawdaZSXjcbGJXMRKSSwvMLoZ4PMy7Pn23nMAUDvvvpEVUk1E1i7ed",
  "key30": "eUbzmAaL4mxqGMMQe1bcepjhQNf4EQ6diyMBXSFcxy2twWv97G6FijmzjUjrDnCUGf6DLTaFjKTBXTKsYN4wWqe",
  "key31": "gxran5QJncYdwc8kTGD1FczKbho1LYqWJ21PLhB5gePYk6vJnnrsxw8hAPHYfunqFr7SN4f11FYoxo6dhWiot6U",
  "key32": "3WnuRmtwQs9Q8vW6YkiE6xweKUMUVkED5uFpamCS5Smohzj3zzs8i7dJb8RHDK8ZXojn4EPhrBv38cVXsAbge9yy",
  "key33": "5bBfTKiyB97gjoVsiDfYi585ysrgMANcqrKFUKNmknQ6FJ6QigLyhZMMYmn7F2nSFFAbN9LnySXuXa4AP9XQGPwB",
  "key34": "QTnZYGQX1D1zTWatvqDnjzWiPsAuSuzYT7GcgrN8SJfxaBokZz7RsBcEAUPSh1zNDW83VZMA6JafugFBP6A8spt",
  "key35": "33jYdiMssPJeYrUgka1ytr3w6Hm52g421J1N1ZK8nebugwgvrrHkGczK7uHqu32w5VkZTfuqqsWgV79DKQcyhPrU",
  "key36": "4tT6WZccS7XtS1WDmJcMTFaEqKJ9Mvdu2LBeoYABC8mK4iqiyD55nU9p9FYqyDAac9ErRc2PqZ9VkB9nzfMA3Wao",
  "key37": "4dYxnvXKkmugjemKBE3tgaEDoT4FwmpCevTF8zYnN7M93pWyVdvwJXb5mtf9qsT2uPUeUrkT9kA6bdaabURVao9s",
  "key38": "3qZWLHXaCbr2e5D3d8nMS72417X5cEUUJ3Mw3tnrwXtv5UuKDrLeJWRqKDzrn3XNU9U5JQCRreqcntCUUvb6V4yD",
  "key39": "35RFkbdzomKPp95xsreWYiYAn26pW553j863zpssqfVcp7VvnbCCR7hps19tmGecmKCMaz4srfyx5K9H5yh1r2A3",
  "key40": "55XEQpiSUaXBcaMao2QQp7jiyrrmWrTeLUhxhikLDmiwjxHbN1XZiMWoafu48WqvYCT9FpXnWUxmZPjqM87d11b3",
  "key41": "29eshuyKoFtvUbevFaBrgZma5EERWMJDB51hjMskhU6qc9PzMPGjG8e3Kobw1tBFka9MGNiPeog5rAeJJ4WxdWM7",
  "key42": "326UHcjbbCy2xRydNy8KttPxTsjEaqj9NUVJK1V39vS7KhVq8CCpMQhVGexTGuTe7RbTCPCRtW7J2r5S76MpXnQV",
  "key43": "2iixwEcbZHw4SxU5YnDF5u2H4mWDmtPDPjL5iHcnbtwhePcYotGM5iJQH3kXYBpzHNHs4j62JuKRhq98yLSGJdLk",
  "key44": "3adiJw3zJifBeB3SC3xTj3bq1JxPjvLkwHYakCdovFceD2LKWFRoCoeiG2Jd4sT3LcFWPYmEZRu1eo1ENJPq8dGv",
  "key45": "2AmADFhYpdFFnUjtFqwYioTJ3ESkgVNKBDeFeAYD1SUWrT24UPytsHBHg5AmYBAKzFVy1prxu8GasppuZQm24GQp",
  "key46": "42Ew35wJMKKmZNVitZyUinBnVRczhxwq5A7V7Up7HpHRYvY62MQQrMV6AmcprYAAGfWLohM34BrFNJuapqswS14c"
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
