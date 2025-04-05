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
    "35Yiuwr3QT4t9oXEDB1fHedcuALvSyudnJTQAavWNLdB94wbCpF9LtR6mXq7xh1CcZCyh5z6SkZKTuPUzFJ5fLWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jwyZPG9sdKeze1TCRq8JTqsNdViWU1VPRCxZG62rx2VzZ1foVifUKuPCSxCajZEuuYu2qfZo3a3rEKjiB4MU2gQ",
  "key1": "2j6LtrXWQHxtYQGN9tSb7ZpFYkEPP2qdZGkqkMXuuc4ZovkFiKBcmfxSH9L79z9SZiE13HozzjBV7immy1eFVpWH",
  "key2": "5JGoTjhyQ27dXNcKHzcneccpAceoAXZS38MQFU8di9bK883rqEKvdMnHHTtRwCyFBXGPyXQ6jxuMjLKr5XUQJ9Q4",
  "key3": "631JzfE2P3GaLe5EfaeJZcfLGtqr1ye4aLkdvBZtoKe5SQEeJQTk6c7PRCb4S4iSg2AmkAkfMq1F3VfxqY8Y87SK",
  "key4": "5iBTdoLJEEd7AG53J2xnzLKA29g5EpFKNKXhDKYgbkbdcsk9ghXBBrYenquTFdbe6a6CB1JPc6B292Z3WfTMqzmc",
  "key5": "5M4Td2aZnCYpteGW8Sqq763DT8ok2YzzZXuTv81cXNkkpnRpLq4YgYzkhGb6nkJNsFG29Px6C2hrWskzBEHaTfEk",
  "key6": "2yiKxDVQ89x6nZ7WCUktLgBXEcMTZCu5eMR3G7mYXkXTm1Gz737rL2tqfW6VAcQpbtPseY7Ls9JM21VQh3dp3WkF",
  "key7": "aqWfz9fpa88tFtt9ehyvx3oviB1EGgoEtrUcu7oxFGnHYnYyCeASSNmcqFU3JLgU87RZracc7VnYRHWv9pVGSF6",
  "key8": "61ayx9BUWmfuRy4HARNRSJf2cZ3GYxKesamnU6D9syJd6j65Gomxj7optznK4c1ANrhnaUfeb7Wfu1pStBAxc5cx",
  "key9": "YnCwL13ZFMGLpawP82BgkDnCFNBCJTVpw1wbV22vjUw9p8YfywdunDRhGVDiKEPQs9HXPAVWUnLVHhyPieZKdrf",
  "key10": "NwBSL6JAZfKVmJUMXgocdL6R5QPGvsWRz9sB3WEyVruM5L3a7PWvBdZKTL34T6svPjZpCyuFroKXw8MwMdozLp7",
  "key11": "Nt712G5xwdAkt26k3xoyXVM1gxgzXnZFAUWW2zZ21AeqCqEiUdBuYuUjsEbDuCNqvCA3VT9wPC4cm4kRFXSUZiT",
  "key12": "2UUnoEHSr6jDJMPT1tGU9FDQ58LygPqTAVWtw27xTF1z4kMDi4rfn5WHma6zQjgo8qEM7n8XWtipcQQg7mQ4RnNX",
  "key13": "iYPUyoqQbD1KH7NY3ijGW3FDhy1S3QLsZM8rtyQJjYZFd4CyoBtgTrsTirRe6LBQbEwX7tTveD6JdMJohZewH1w",
  "key14": "2fks8fTMspQFi2LnGDak6fYXsmbWdguB5AuPWKGAdGaWac2YcpvTPpFRPGaXBf6W31PEYc6ucvbqntRrTyuYhHsc",
  "key15": "32SmkvHHoFdKFCGMrSvXSM22okYo6oNf3mvuRdN8iykhvjUmeAYjNGiJcnTmCk673JsfjdLVekgFgsMarc8mrVRH",
  "key16": "49aaM5KMw4ebRz7dZbMBqdXbR5kCe2mLasuXAdZnncciYRaU8VKBEjiUUswQrBFFBznf6FLjMfH3E2RneCSWPgHe",
  "key17": "4uUANrre7u9FSxhnbEzhtXWLKtkPQQtrSXJZjQK658uARMzRLQ5FCHNjmfR4HmifEQHtHYz1gJnyTYjbe14dmmS",
  "key18": "588zFB1qxpyWpDw6YRri1PJagBFZMJRaCqeWogNJPHtU34LH28BKcEKcnpG7KD5R3huoxaPkXTd7GtSf57cV1ARx",
  "key19": "3A8QFb4D3ktgBEjTqKPpAbnsY1XSfeo6pAjXKTPFSAVYXsNDyyVYA86xt6b4iHWZ6LLoYJ7nBGhvG38g1fXh1Cmp",
  "key20": "qbxN1ouhnRgMqFndnTzmQpTw2bY96bsYXzk2aM73Ur1RfMqx4DwVWyBgwZW4YGYJJcxiGsx17BUho3tZbBxicNi",
  "key21": "3NAsWPeyfS9yRRSxb9XebCZsnHFrFSeoQQcL6f7pRruPjjoz9pqz1ZsP74XRb6QG3H89rFQKQgL4quLxN5pRhWMy",
  "key22": "56XusHVcYa6WTawobgs2yF6THhBet6GwbkKCrQRbSNxj8FcTtt9QVku4vZGruuKV7V8bWpSqaU49hWV77qdQV3qt",
  "key23": "3X1nsSCNxZRbpsgfYvnQXwqSdFsgiQvnmxiLnWywXVVM5TduJAgSq93vD6FqgP4yKwsKv1jYETftizWdZwXABHqb",
  "key24": "2XUP5K3zNAzsGHKnGYuSCapSN1s7RgNvw9j5Cg3DF9AeVRfa18YbhCzKwWT2wa7L8ViVv5Xk2Q6trWdhi3QCB8SG",
  "key25": "z8UbQurwT8CNeA516eqw6U8dKe95nWaW9SFpVwK6JNmW8jA5Yw4NsMcEGuZBGa5FttA3nZfkAW6S71jaivZpCjR",
  "key26": "5iNZ8Yp5nCGsYdKKvRg5fw56yp5HjrG1n1AUiZGeKR1arKWULJ88rppYjUL8ASnPy1A2w7yYJqHQCBc77KsokxS8",
  "key27": "5aoqdGZtPf7fY8A4SDu5zxVBkWf3WnCRAyA8Q6eLFGZP6BDK9StyVyPshxGDFyPouwD137gXoRKSPiEhdNryt6NM",
  "key28": "36v2nNgGYkHVmC16YB3HW1poj9unkF5ZpUx91VEfcwtBe6SmmnciqU1G4arBhSxM2MNqVwSoy7EAEgdAPobwgdwG",
  "key29": "5KBAF9iRNz6pkjkeaTqCzPnNEJGtLUEpmC9YtE5ikoMhwayMbRYHmANCScSweQu1VDCDXJBH6WZdsjyXxQ8w9nyT",
  "key30": "3oghQbEU4jFQ98eLFdAug7YK7NVWHnFrmwkzAQscju1cxJyyE5eSTYSrEkiJnQ4piZwVVhQqMcrgAsbQXu5f2wJR",
  "key31": "5BLx6o3u7917fdWLEkumdcsH2v8U2TRBmiBHvsX7uxLxLjTMT1YFeuUGMJzWKBkdjUFA4kgHWASruidQ5aAMgQj4",
  "key32": "2mt2FZMgcJcffxb7fHZdNTHmxWsxiRwUc1i9JhE54BDv6yRP4FfVEbvBc37jchjoLYL8X6kFNmdsQqJkRhPRg3xP",
  "key33": "4Pvz8fr3xLzcCEYL9sCG5Bho2QCwbWeVfXv97fDeD53U5tFszqsNRV6nGHzHqmWze6jQmL82aFyP9dAgukCDaz3w",
  "key34": "3ZPyRN1xdvcGz38vM79xiEHVVfg3MndysDDxsAHTubrYMu82YSbCJNCPhqsnoUK7vNScrUYFLq8zaBdXVvRqmihT",
  "key35": "3rdVdqtvh9i2YFDQbHLmR6WGgvqnNCPYvg3fmm1jJK165FrUh2dE4MiTEeaUWwrbn6ZkBvLp1nyntTcvF57SF4tg",
  "key36": "2A5AmhpuEpSUkyqfzgU155tmiLcuGQ4QRFdSrCyvCPQ5x7WhgPhT5RVY32BHJdPhYWQXTvai79Y7vYfhRFhk8A3r",
  "key37": "Pup1Q5v6KQyMBsLrciBUj1pnMyvbuHANAgT5sbsf4nC8BjPmDcunFgcbqDW8zKvkwewThx9JsDBYLteAoeE6yoC",
  "key38": "bTrGVZZ28ek6JzVjbM9rerapGmrkwCwtHuXRTgFoj9kDmf7Lvg1wsFyamj7Xum1Cv87t592LQMT5ctvebRTnSYi",
  "key39": "4CAkyNzHj55Xc82WGDWPL43pRKZwdeY6BUWGUVzvPdu1u29obTYcsjRXTRqweZ6Maohte3toZ3e6XGpR51Q7zuyb",
  "key40": "3nMWMbYvMueEUYYccmRgyH2fqnQVscFi9PSB8vyLWqrPBCZB2JpaG9YZGFHm3EDTtzj8oQNHHTFRLXKngB7gfZAq",
  "key41": "4WdbNA9Uc4H6Mu5b7Pmc5SG8JYECyuPvY4s5biGqpJoyaUSsYHhUaqACpsuhqA5peB6VEbYiW62Gdq6TVQ4thDGN",
  "key42": "7gtBDnRTnrUqkesv5SD4Ne76yHj3A7jweSdAsuhaA6F83HiMSMDUdbi71qfWdeVryyDxwz1ckawSLvDCB5eyXY1",
  "key43": "2JDXbFcMQHMAcaCjWXGvZheCLyoPm6iogj9xe2jLph9fq9Vro835qcov9ThX94ZPABN9Em8gAQsEVu6634rsYdKp",
  "key44": "rC52igp7t4jmvbZuybzzYQTzGQ7jA4VyN8WCKVj8UjcrpPjYrmFLMHzZFAKQxgRwGtivpC19B9pWCHX7uXh8NQ3",
  "key45": "3aLJBCg2XMD1iSv97pCwaEpNrkr5SvLb1yu3k9mrZzMFrKepdAtYfsyxPDYaK9E2YyooarFmQZbTSyn5MpEiQ8LC",
  "key46": "66YAdoYX7vDkZJdQR3giRhy5ej6WeBaLkyoZfpFYwkVbAm1FQk5wPZMiyHPJds962GgcDpLemBGvfUgP2NTkmQ55",
  "key47": "5WTcemwbCK3Z8699aA7ipHgakEB3U7MGuAAcfCUvC3PAys611azEn6MpLbVSRjfLBj6cJhFjZBy1nArgxNqJb5ER"
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
