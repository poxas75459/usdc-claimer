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
    "48mRQMTrsRtKL4nhfwatNs9gbtxLtrxxUuB94fz3E77LxUbSPWCWBaG9gyYhzTz8SC6Y4cRi32TAQA9ss3n5jWdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3na9jYaN5zUfjWapuVAwY8QjpTEuvnzsvUa71jCpRQatbKYsFdkLY8HZ88PFQ5R2AXQhxW1W6RDaKBpm64QcfCTd",
  "key1": "4R31hhLtTZgYh2BoY14ExXXZdULVoGyJaFbznf68obNoTUkGi1ig9ihmf6yqHjfKx1fTiovta5bd7emY2zxMRzE7",
  "key2": "4GigpJcHydiUCsibo89aBCXnjKCjEkWvm9LK3zp1HVWGZoMBgidFteTT93G4v8Fio4cFEBWYmhhKpMrhg814jjaw",
  "key3": "2zeEyuDLpjm5hmdWUw2kxLfXwnDqCeYi4EFaap5A6BaKphg5938qd6yVUi34EGeupVnZpShdrSQbmVBCrcWndZMj",
  "key4": "3xrxVmrbRmSKrGHz2DvEJjF9VY5u9sTStSYMqXzjtGZwaoh8SpHaubKnzZ62fA4t3p2DPUWmottuo6XxFDSRnUAN",
  "key5": "2zS1CKHx6pTFTPNRx3mTSCGFRX49BjB2YtjCgjGaKZkNQTGqLULmDNcYVe4aYVfY1kmktBJfHr5eNQEVUFKaYa1J",
  "key6": "2c7oyVKkBcuV58xEBubWqogfFZHgGdECgBSBHixVNcrCyURawDyE8tQWydBmudzKxmMv56p6ppiSq3Wy3V1TgXZv",
  "key7": "3CCuEBggEQzA3Yki6vg44tpLBFfYd8AY56GHZgs6XUEhJ4fadwXNa23WAKHH4DXvtGiW6knjE7KgYsEe5KGc23w1",
  "key8": "3TJ4st5JjxjDFno9AAptGsVVtmk6iHC2tBSvawKEk3ah18VCdzQLgTaNfQtrkA1CMsKz2h1MwGVJXAjsiPBGJw6o",
  "key9": "gHLaM6cU57iYkhkekW3ovuV6mQZfxUGo8PoMSJBzu4vENXPe9ZWk2mqKXFCCNvPThn4D4jN4tGERrsAWj9QoMR5",
  "key10": "3XNGKhGYpkGdYkMhmzVCwPJg36A5pCjGTcWM3sUjZZcVZMPPEaJY1uBYPevJg8KVcxwyNSc9Dn17zXMRigthrCPg",
  "key11": "4a31PwpkNjpY5Aagm1xvhQ6ngtnZp94V4K1b5q7NKBjQVkxXncU82phnnkqKx2ynUNYHFQiCXu42fX91JV6gTfYA",
  "key12": "3JHJohFdoavSandtkmvkr1SGX6wmj7hR2vdPD2SWY8zRoH9evekSRjeAYsP9ZiQnHvZg3iZgbDrrq586UL6jYtg7",
  "key13": "4y9FAWcPjgfzNs3CovrQsyquTRmqFCEzifgWcgMvbd7HTcqd71b1GoQkKheX7zaVitymBMGm56kAvFN1JYzS11pG",
  "key14": "63WEDYQ2Jqok1gpgqPvzM9DrQU1phSBVUZUNdXQFhCergYMgMasBwNPqTYQmD7EXY3yNeSoJjU9kCTGxiBMj3auz",
  "key15": "43ka1P9cWD13JtaQjfNZcmJ7XMCGkhW8DhxHNNt9XL8xb3L6PYq7eVBzTHunfp9HkZtQzULd1sNkPLeKicZ53z44",
  "key16": "2sBXTc8uZQdDMDtKPYZbRfBM2qSaedzRCDjJ7SpQmSiCP3WH6fqrdPNJ6e1Vmn4NF36TAkz5qCFTybfx99UMZMay",
  "key17": "3o4DgewNKa8Mny3EwKJ9r8ynvGuC3T7ZSsNvLJvetEd7DeTYU8jzh2PSdbmWQvEuQgQ2ZDfm6P8gVUu8ib6GZq14",
  "key18": "4e8Nt5s6oKJi3xCw9Yddkj3cqLJRER4cAHzSVhaFuL15Q839r3rc4GkkWsbYgjdfGyP2kwxQqrbm2iRxLZqZz75a",
  "key19": "2Mtg7LigU9e41SbsTaNCWEAM7ySiacw8VQ7uFdAgPrVsRkeoT99MybeUFYYtCFU1FuAs6tyXbYKDowcNCrxW3zGY",
  "key20": "2bGDhh222tob2tHrYQ7E5gDJr5jYLx5mD6hKUuFmHsT1woVikvjqxoACcAKYyfZZSPYYjnMsrn9pHX7Mmm88E5MJ",
  "key21": "2nDRGCZZw66tmPMUKdP2XnC3YXbgfykQ9LYbpkazuknLT5uZeAa76Qjup9TTCa2iDa5E6hucQidkmnMXpjdAeiRG",
  "key22": "4EjFKyp7v5yXdwJw2RneJm2tksoArCNZBabj3FJPHvNTYpsxU2w3oEP5GrHqNzbCv4RzgmHmiUVDtXoFMrqq144g",
  "key23": "2MAhfLcDATaDzSg4rV1VW24MTu5rJDhMq2oaXxDC6uxpYiYmKAyLqarp8p27r2M8KmWtQ6xDDpHUo1Yx5jVEHGRG",
  "key24": "2NS2fyeGUo2PJaeBLjKRwYV58GpxDnYURiggPYhNvG2v3AeX9WTFMVisPnqpFTDUFRpQRdNEtPNJApYv8UbDHDNk",
  "key25": "518APSnzi9HGyZNoqXu7wRMjzBrHbruMj1JHcStKqvrZJV4taJ5BeiSGzZ8tJ4xzPgKAQnyuV1sH55GurSKTXY3U",
  "key26": "4fZfQRx8oUBgPVn21REGy3oSccifqV8yExFZ7Xe5ZLNY3SeiAtv2UnPVRv7xT6Z7UWsqepZgF5XYxanh11rw58ct",
  "key27": "3Uj3UUZWLZ9YrrMnvy4KYJX7XH3yWUDq8T4gmDUi91eLr9N5NGDWLSzJghdkjTPnPe4gpU8Mmg8ggsjm48QMMoP3",
  "key28": "421krJjcjPYpDiQTJVtzSZgF9WFgX3nUmeaLQs3UjKT293N2AtK3RHRqYMHNwAKwfSK2P6RfvPczJ5PgYifvbjd7",
  "key29": "CkQq26Vviun2UyBTXPWtkPEYwuyxqvJGntencqGUsWAsceJxaW6HqiKfkVkdLEHG2zDweuByTpRFiMb8byeboWu",
  "key30": "5hmUPKvKAXFyfPx8scATg2yHLkiyNaDr2rETgnaTdjhhCHYsaoAWQCSaYaP8ZaPVGbeYhbm82KyM29v3wDQofRCk",
  "key31": "3Fzi1d75EJ5gc1sbjNAGFrvmMfRDD8PKuPynDxXq9Tt7NNMfVCQQfWUa3bdAcnxiomntkRZoaFTu7tJ5jW2wXKqW",
  "key32": "47VEEQxUPUb8SmhGMdWRceQB6PjGaW8FGQgh4cnDP6K48jvpiJfZ4tNyqNFArMcsfXGHiii8QdK9S5tQSMq1FXFA",
  "key33": "5DRupq751HM913SpdtjNiJk4LTDWLZDB7HNSc4jZFYdusCqUBBP65FAjJpUdWTfBifMmBRKzvqdq9Xdgnozcx2YB"
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
