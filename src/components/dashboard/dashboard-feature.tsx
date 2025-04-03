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
    "2wLWUHJwfc6pFn32fYCGDJzB3pXxxVtrnvSGysxxsFm43qFLeAnUG7WCL3v2XhVK5ahu1TaEqYiPhd49waRHZ9Cb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CbagoRiTQ3B6igPW4GLfqFjD9ZDMoQwvkMLm29C9qaBdeHQGugWB572epDKUi4AUhev75Cd2dkFucS3sHEpzWbW",
  "key1": "2z4MYQrrpvq8ewNeGb9f6YMJUrxZwgm7QyKMayCuW6LAUjwm6adiVQu2gGTSM4YoFFmAWDE9d8tgmVV26j7dtocy",
  "key2": "uBEYPqrKg2CLvNshRDEA44Lcct4RrnYMnDBVy5NaCCyo39rJkRDzMaJqyhc91146XFsQsxV78Ewqhii487jAHby",
  "key3": "2XjdkcEEk3yhf5AXv1Qhs6sST7sXrBHwhJAF4LZG6shZM54Hf9g7KzMYJi32WqsZaVUkzcVY68SgVaweHPCgJAcd",
  "key4": "FnW2Jc6ka8MHXgwzWECrdCVZ82axX486c5eoovnh8KZJyFabhTf93YTgqBiyFje2m9DmnHqMdZ93GdRugHuMjQS",
  "key5": "2Lu8KgsARkLLohT6naXfw9z16xs8918jcgLnxosLUdd9ywFvpQfpXpZ8try38m6P7BPRCk6jiFFvsLhMEBhRUtkm",
  "key6": "55rzdaA566KE5Cf6jEetmeJV9cQGgiHyZJxkxmdTHqpfzyB2kNn7DCEZAeYjy6o3avCv3v9VBmQny8eSZJganKsr",
  "key7": "3mVBGxiNGNhAwofNf8WrNAsmPWavm6RHbPavUZ2aHbnLbMpNpYsn6Jr6iwGY7fGA1AqRhiCcdH4Mx7ti8kqki8wd",
  "key8": "4gmTDfg58CuuH7FHfBhyhWvYW7eLKmQGPHLGRry5K8PxMfnkav5mSyoMttKQwkymPqVPiyjZQTkVXfpXZgyNaMag",
  "key9": "4JGccKEy8s4t7czFG3XSzAFQFE1TSA4UMTfXpiAGW25Ac6UPgMwdXPRSqBAnEjbLJgD754AHRj9nbmxkzCQoxHyW",
  "key10": "5w8YUWnG2EpMruLLyibgtFATVWoaxC4jAQC6wDMooAcnUX49DisijLAsXab3zzEMkjoX2Akzg9cxcVLjjz9CQG3Y",
  "key11": "46KYg1shG6jmv713vw2STe6JVHKevrF4M7XyNsU6w5eDReoadcdxtBiPgGuAM8HCTKhFh7bQxMjxJRFtCMWCk4Zj",
  "key12": "58xJPkoUsJshB3jxjYCu6rvHdZHbxahrVMAp85mJZYDM9cJS1TdmjiytcChTyWhEA8pXxHy5dD687q5T89ZCa6Q7",
  "key13": "cVkvsaVq31gC3cDfP7tQYH9fkHjDv3yD6eroj3XaEMkqowv56TQt3pdq7ixsACr5RFUXGvpxuBP5ZeqKdtictv1",
  "key14": "5LqmoeLK5efUToK5L95CZvibRGmhYM87Dwt1fzKv1ZHU5kWbGPByYQu8BLjkArAkEFVwjPWuAssiAx1jJPyc1iFs",
  "key15": "3E4ED4L29qXPHbbACvGptEp3msy1LYUGVqVcBgdrpC3M6fi7tPHpe8qBepyCFQSQrXmBxur7Pw1Q3zkcyrXuDVFP",
  "key16": "1cTZnDgHeynkpJ3xTcUZwmoFY6QDMv8itPhjDmGWMuP2LHbknhzPDYeEwQGS1CRWtTXvX6ThxuErYrzwNYUa9Rp",
  "key17": "675s5irE65yEu1UzTN3SszsqMcAGcm2XFagA1WWduYaddteHSN1u1mjXJ4YTxMmsimBTXcDUDzB8F5MZE3wGmbrx",
  "key18": "3YM2upcE7nRvxp7Kd6tXNV4fcaLDGejKbM88yzX59m9KFwUijZZfPVjZKNP4Uxw57ppi7695TKKJ7v3BbZ6TZsnY",
  "key19": "426QEHrju4UuQDYszFwrqVcc2v1g8MkaWBmCreAs9wRXfZHqhygfwBHsT5kZJ1BZcp8HcSw9xRVWqniZgdAHKWDV",
  "key20": "25W45oie7ZjMqiqqxKSfK5C7SAdteRMrLYbgoCkJH5NsrmcfTQoPTjNnUo9RQTSHHLXrqbiezhZWrDBtgNGwGxBH",
  "key21": "5YB8yehASz12hBLxirVAKCgPuaNAHxzmxCt6zQi9omcdSzKzK6GTvGNmnGSsKcfMXkB8J9QituMgwMdGZJ6bvmA",
  "key22": "3aw6cBnRBTEsLsgCSLU4KcttzU6VBNrWB3iFbeqH7BcTcdfVCaqXTjXVWVRZvFtemcUYTwGCk1AdFGeBfc4hZh1p",
  "key23": "2hxZjHzfkoe7dSQGf8nM7sqKbTJb8zAgFhLTb52DBpsw91zkWBfqzdoC5QNfoKcUnNjF9GzVaww79E2FZPrQ1Y33",
  "key24": "4d8q6mu43q2apr175uCri6JND6muYpqCLETbvABpNkD1LyRxWoRDwqnM5rAAGFHLceeEhR6pYqgCLvjqz4fY8kUK",
  "key25": "2SxGJcaStCaM9gjzKTdXRyMn6kKBimaQ4JE4bBxSRAES53xQuDhZm2dWHezDwxdxmnDqW1udvSBq5dGMqjYrKKoM",
  "key26": "4iRgqcYBtLTmr3kX9pruHv17WvpZFQmT21eBLMHjuqUXDrbR7SVH2E1714RGYHm8d6cQAVuLQaHt9w589WN1GGug",
  "key27": "2Lcpzi5Tc9GDwfh9XnEgPND4hR7XH2VG8SPCHMQ2bmbNzCQfedzp5DwEqwdJvarWzVXEVCGWEJW8PTsZvpRLi3xy",
  "key28": "7U6diWAg52yVScjx4uYFPJWvZqPYGW6U3ag1b7vY5a8yFW5L1AztL5EDvp5zXyiaSHh1X9Cz7KqTGrSQFWyRb7Q",
  "key29": "35MPNaCRkMJgY2W1L2aVTFdJ4dsewtAJzi4JLK8bKA1FZrsob7m6vAoAd5H2AJt7sViu1iCj4qtaAtG6mtNLfQZ4",
  "key30": "3nkmtJXg8Ywt5rzJSS2rseEjqYiVfJgaVoMwGa1fXtZDUm1ryiLt5U8LQNuUasZKXC9zrx5NBpZ3CvNwvphwdcCj",
  "key31": "J9U4SFeuvXiyBK3S5zcb6XwVfUtaaWc5UkPxck2ZEjGAqhesg1MYeVyuDswYK2kQPxEBgN9GjnE7BWd2C81X7qA",
  "key32": "2YXND1QG2mJ5KvGZE6qSWsrVc7Sm5G1A8yziEsmJaw471zbdpAcrRZ3ECFd2wFcNdLDdtX1YGE9p3Brx18uSZy8Q",
  "key33": "5gkDLo769S2Gv3i59gjJdQXPRhoX3JwN7kJWareAekdowhTQSTyZsBKu5U97jShmhZESsztNqWb8mb6H5ikATRAS",
  "key34": "5oRiuL2u8ovjoCoEN6rZnQcSwRWpHeipMqKFnR37juwujraGWRUGiHp3KzyRxMokVWsPwQ68p6X7ftpS6BCt2X7W",
  "key35": "2oPVNRK5QpmAa1LETeisXjFJg7M6ozvpTKeYFuZnKrawqCb9GnXH2wByYsD3gfXktVLMHHG82c3Q1DMXS556pGFs",
  "key36": "2hWnCTdar9ZjpUVuZdpSuwPtpFXAVHGQwGGZytVy2i1487ZgbwhVMhFA6CYQAAkNH6nGKQvRi6m7WryuSXaMzZXt",
  "key37": "METG9oJvv79WvmbNrX5bQJBdtYrxWdMC8GtfgXqtSpg5UMA2KWDoZ87X5YoRcRRBe2wX8E8gzuXziGGoPH1Q6s5",
  "key38": "4VVPbX3aHQREUPYEs86H9xThdHZye6mdgT2pGUZtgm6RZoDR2LWbAsGH83mTkQeStbXDCUvJNxYWGhLJPZ2uFTG",
  "key39": "5tVUCWxoMu3pWs9wenV569LBFnqHjqEsBtQgDhhfUAKhUuh4PZYgjidEeRGibvJvLygq7Sq3FyVFRrXVCBoYrNDm",
  "key40": "5V6kNvEKBYT3BeL3XRnNqxTvw8X6y3hu8pd1cTd3HqNQq4zGLJFTenVzJcHdWmqrcUjyRLYJWJD4b3VeEYdj4vs3",
  "key41": "kHd9bwrSQXCkqzyxbMb8quGiwyo27wCzntShtSwFfU3k6kww9w4JWTdsZGjwvfzYPUWEKTbeQQ2zBsuVg9cwNsU",
  "key42": "4dype8mh23psNvVAT9bv72baBih2VALHCoYsWsLc7pTk2tJpPj54RktdXewNRScLmGx6TzFWsx6jt4c9uA5oBFyV",
  "key43": "3QcbeF9AUEyrLGpfdFJM3WByjWG2qy6MfzDw4kxbE69JwzCctpkfnftb7BL4jd5hW4TR6MBrBx99qhRTE7tTkxX8"
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
