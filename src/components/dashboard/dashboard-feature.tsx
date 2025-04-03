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
    "5tJnQddiw4JwjhJcmwus77mXsRCeMQt5evEVRzofqAdz9Pw1vksfh1a929Z8gYCPtGBwixgJCxZX54eNJN7cBqk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H78StRDAgj7ikJqK9RNFJVne2NsAVDYkamzNYJW85e2sCPntsHHDWYVZ43uK9Sc28qMWfbGmUHWcc3FVbU7bkDv",
  "key1": "3H9VQZkRVXrYJf5fx1TU3NYZaSkMvpri33fLGFyTUhksp1YGbAAGq1tpFDtyhfSEvfPLxKLNB7rXkRsV3iSBaEqv",
  "key2": "2mAgfVoKtxGwSUexC1fLqh6UAX9uUUF2mbz61ZsBCUKmzLiQ5qonWMnAYukUXdmVzZLSjjjePBfX8zj35Cboaqsz",
  "key3": "4yH43EBHK47a4H1MVKAqSYbhMUhRsZvDqBakctWCo5nDzuY9SwwmCcfxeyWbt3ZFaoS8NecNWMtwifkFdQx7Tmfk",
  "key4": "4zXwyahu4FsPxw9ckwWNEpQTqTfdBBrJ91jJtHL7JsZJbrFv5iaRVwfeweAveGaDsNn2iugf6y5NJMJFtzduKrRE",
  "key5": "5eZGaLhEFaioutDWprtGqeqkCdzesi4QSzQdxLDEM7gxDPA9Ptbmp2gmkhPZmXLrL7GJVDCWzjwbta9oCDK6SdhB",
  "key6": "3oVfXVwvCYCmY4HVzqgxPDGDrHiM55gLFsxLu7kP6sNqHdyThPx7yNvMr1XjJtxeR2ZXWhLG9j6chBSKP2iRGJ1e",
  "key7": "3U6arPRfnXrPQjho4znyWzgqHNNz2jBA9VKAL9Gw7MeiAmF64Y37jwfQFPrHVCkNnMV7f3xGVoSkr9135kqGKNLw",
  "key8": "2MGZCbqSJfDQE8Rim9Xi44pADWi1gQcyUtFDmvnb14RD15r7EZcq6UXMkFESNehPfBQSQS1TemoD3CdoX3UMthRU",
  "key9": "4Qg8sBK5Jd13LGXZvszqntiX77quUEQQy5tChbRSCNQtQzSP3mMKDz4FySCasTcvP6vmEwWnVwuX4byzYHTHeHhm",
  "key10": "4KaKhRnVTgCfBcpX5mv6MYYBRrQnYRG7cwmqM2uMPpNaohs1iQvUch85XeKDxdU9DbFtz3q4ptqQWsKqyiwHYaw6",
  "key11": "5QiNbDMqYv4ghe1QD5VWiDGYzNMUtnarUhT2rz4cuqvPGrjucuPrmcee7NeG7WmhqownHEZ4JeRcj3WSw6U2dSXX",
  "key12": "3TdvMxMk5R1yXk1fxgk28joV28522zyUqei4wUZVMa4x74vF2uYkLZXtDVLq4Zh4rXFh9bDjkFY1go8JGRbsuSVN",
  "key13": "4Uc19ieimUMdeCE7JAU41WZBFpQbuk7mxUdzuBAXApiGppeSM7eYnCGKrMyv7qqnGeiV8fMYcnbkvG1JcsuQeQb",
  "key14": "2rDmvsudaQ1XGd8U1Jg6aUxo6iqbGpDyxVQRk8RWNd2uHFdSonUoTaFqvjygUNyjhr1o8wjCfwTps2QVAy7Qt9F9",
  "key15": "3rb1wV2SZLDSKGCkPuCxFKYsBxaXqTGbBNcxp1w1LoewSshyQMG2QpiDdP1tq31ojWVoyqf1VPj1r1wd1QUHkndd",
  "key16": "35Qb35fACC88LSzKAY9aDCbB3vbsmoaJBcfoeceQjKHFqKyvT7dKSK4Jft4iES5Va2Q4C16rQJK86CB28AXmQzUB",
  "key17": "29ZmsgnKmHiiZVVvPVPWkfL3zSNdCaW8SA6JQ3YeFx3x4HwYoUm7QP2fxaSUzKg48eEoeYkc7LiTG2c9hqBHCjG3",
  "key18": "3w6YFUdY2UBTrXopeQZkQgQyB5hXFax7UfJ1nZy4VSDga1sQL3g8mobc9MXpfSjaxHQ1Xvvnq7TWpr6qxyCc6byE",
  "key19": "4QJHjJcCnrD7FqfWiENnjZfBcGEQ7KKAgSorjmdwB3V1XxKwQNkqCmLAFsdk3uoUrzGLLw2bAEp8wpPTYAPvJBGs",
  "key20": "3bioSYLQ4ABfrHPbfHbvZPH8hewUpNzhueQiyzpU6YxjLtLVnuuco6bHnvjc3Z1ADoJgKdCm61UgRjYLxD7aJB3v",
  "key21": "3SdJvcSmhFBhoh91jRkVtU9brDkddZRDYEjFTYJGNRrF16LFr4qpzjz36YUHPFUP7geyEeA2T5TTHPQhYwVuyAE3",
  "key22": "2R2kBhwgojRhwXMnpPPuUj1UXhhGKkhDC2sV348bQNfNDV7LAqhWbZ1LfUnXsUGWaaPGTBYNGMCUNeETd38shDG6",
  "key23": "4TAYbwd7iBatJRCuT3Jg9Lw6RZdaAg5dEscePtvT7D9QQuZ4hGdXTt7NfSGYRVqPjNFAcRB6EbpauC2YtUG6bcpC",
  "key24": "4pHF6yMckoog7yWwjk18k1W2JuPxENsdhGmMTGQ5eQnndnFcDzRFrPGhS2tLZiGPXk3eJ7HqkYRD8tpWtCxU6Z3S",
  "key25": "4bFsBBDgcsJiLmvHuQrdpyKtj2atJZnKT8HjDqqWxvVtTb6y8HFcAEd71x9wB63LZARHYdLoHXV5KBG6xD9C4JK1",
  "key26": "23CFX1SxVHMad1rTHGtWUL2CtbS3HisEyoRtMcAYGZ3RghPndyFN27ssYXxXqpSg5iW92juqK6ReSdfggiSgJRWY",
  "key27": "2a3NADSBtaPRHtHMun4mwJ4y8UozjicCmEf7ykXr8vZwP3b3MAfhhRWmDALQWAGSXyDWwDh59jS8BV1tcGJp4xee",
  "key28": "4JtfKqUszmF5sbpbXWMAzV5TUNspCRwY8iXgjAFL2Bk8SWqf7HyqNWGN5KFAhQSQjofbiDguhus1D3W84S5twMdJ",
  "key29": "2nTtaBgCPDka1d9sXEtCzaUqTGb61gFrwJfwmZz1V321Rr3q7qvv98c4fomAZdruyVLgbDEXQRCkpY3gKcdYT8xz",
  "key30": "3TJ4ep1SQTpH76M2mk62h5Hv5eUkfWYm3o7TJheQTcmcQPBzJRm2hXVdtzTmd4ASfPG8ZMzokwyQmin5K3VYPA9U",
  "key31": "3JKjxNT89dR8srUToQcbr3xESmJoSQKfL2qfLz9FRhCtEg8xTNsmX4cjqJCjVpqt7p3G9xJfs4fBFswtaRyFxjtf",
  "key32": "2mo1BPxCEnbiTTccqNiYQuHCa5t3dRSK35HAuDFS6Gv5vvbzZfdbG2YSwLwiMgEjR2JYxW2a6gMHHxWod3PjSXDF",
  "key33": "4xY1YruSEGfNCuwbPTRVDuQzGYRbmcPZ2wGhNnmS6eebmtvV2MJkDMzBVKnkCYPbe3VSkhRZqdvtVKugXtPRf9hB",
  "key34": "2HEMy9kUGS3rQw8YeajNni5ujvK7osaTdnELmdhQ3ie2WAVQhdg1Aw8tdrJPRykY1QdP9N9rbNeBdo5npUbw75N",
  "key35": "3FLkWjwYRtM54nmHY7UFgLLBWByVBCFRJkjAYS3mU3qT7L3Ww8pzyWyzLfF9vvhvq2bZUVVL2eNMorPv12coz98r",
  "key36": "5xAnoQnnTYR4kNFYpUwxdoiN4i2AMYNSdHnXT87xAhvW2q5Lg32PiT6zKZGRBeezqof2rnPQWYJt9AC9yM32hf36",
  "key37": "2U2TdrYxdiYp9J1RLgW9vRpUH7FhxZ5i3fTx3jKuamcAcGgVYeEaxJ1gw3JZy5yJ6AXjtFtGdZ77vfofb1bzBg7b",
  "key38": "2Q3DHusDtU3rsaNGmz8riFyxdY9ZFXoNfmZXiMR9yPcXAMACaQ17JeCvchodYjJwXNv9qU4RKS8pnyLRqQ4sr5b8",
  "key39": "fb6ET65j12t9Db2V9FHe4bc5H4uaJ7B63yGB9KNhis96jtPJjhzwmiwuwQGWcFRnepmJg2mZkMkDdPB14XeAjyi",
  "key40": "2DMwvhbPt2ANqcsgCTMpPjWvjzG3wEnT1uu2sx2bzB5U1vyaA3mcbE9jfTLtvEVzuEh8mJJN5j7yhqHbWhCiTM9n",
  "key41": "aRUscMqTnVn6u5FtJ7vyP1BjrcQLua6RnLv4nasAcprm6mRkiexuxA1DUP2hgaRRBTfRoAW55AwKX1jGTVBMBBP"
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
