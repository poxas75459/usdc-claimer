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
    "3QDtXygyMH5JhJE32NAW2fdfoon9TM3JNpna8b1tfTkywiEo7iuTgDQSdcQVwkD8m4a86yj43GRef5uSQtZhf72J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LH9vF3biyT8KGLwoJ6j7bKjCa5f26f5S1ooTYG7e9QDzwrFCimezb35VbCeju9MwSUmAts3PDvrCQ5ieAhRpWXW",
  "key1": "aKaG3s86zsoRXvnEYdx78NG4UViS8Zn7967bMQLN4ue2svcZG2aJ1NJFEu21cJ88VMqHQH6EHV2ZRKZ1iRZTSSA",
  "key2": "5uymouNNUZrwKzgoCLTmjGXxHEoLgH8mJWptfRPaVzXVPXTMBF7iFbMfkZEJC3V9juUjH6JY1Xb1MCEzL4YzGx8s",
  "key3": "ehkJyQuRA3VhTzW3Ntz8Y1xvpvzjNj8AACDU62kYxDYAgBWbYJeQDZ8Z8eu5HbaTMYaW8uGepv2NEpaTSYfkL66",
  "key4": "5ED7pYCEVBgZVUMvXCRqyXBJKV3cH8Gstmf1aev9k3ZM4rJstefvZgtWnXyv2N1MMfjV1yj65Pg7htTRC44HUWfZ",
  "key5": "4YeXiHtde4N9M1QifwLwbgfE7fN4xZu2jDibVmxEw4JMzExi8kyJH9qRxTCKmYRsZcRVnpwBdR67WansvyDge3tV",
  "key6": "26uiayTftnbSgBizc2tEb2ga43Y8yTY3eMPRkbboxGwxJh8SVKmatKqm9NHh7LTFdJvEYCaqN57vSF19bVGbFL4U",
  "key7": "5um3ZSNqzZB8ydkt5n5PMTEaLwwAKvow1Ane1jUe49qgkFcpZnaqQiQdUPaqKFMqUzUcsUDWtpWv4MRCocD8Mp4A",
  "key8": "2QtXuniQ7k4Qn3U7wM9G7pFuuSC1AsdyhB3vHfpBWg1Y3etVYH1Z8Zvx6MsLCrQbZM5PcpDkYPRftJ9y4egqTcd4",
  "key9": "33TD8XseFXqGtK5G6GeWuZGaFgfkXSYgPfhMJePQahWAcPKcuXscogd7mqu3x1ugwbXKk7UGt135dHL5mFYL2N8N",
  "key10": "ghBpedXFeVUCM6RrKUQUsXcpfzvWNeEntvdxjAn5V3XuafCKKQK7iX9XMYRPvyVdjb8xEm91NgEbdgDZzWcH6BV",
  "key11": "KN55mYx2FhgNcuaNdJKKwAAuy24qqmxL9Quwg4DEZi38Y3oyKxDnHdWhHtxygsJFWoj6HWbQvx4Ap5RZpcR6beg",
  "key12": "3Xc8EtdGEDPwFY1xucufwsWgnmvxwjxE6MdvKs6QBsHtJpQnYWhxacWRxpK25qFKGTzyfz8W4LdPBHzj1DSt28hY",
  "key13": "4uSGQrweqVmEcscHDJJVp26GtjSwijnqBrjdZX7nbGAHrp1uPYHNads4eKEmN4Vthk6tFVmwGvie1JQwNZuwz6HM",
  "key14": "5KVAsRXrRroR6BY1YuHz9LZosFK1vvbxA9NfahJ6EqdQnb3FBPGgGWJ7HeSDvmXzVQRkqk4rE2j1Vswa68hCzWHS",
  "key15": "41biP2sKJReaPUcqQ3WRodUcuYupoMMSjvG6hAdaDnkdMmiEeVx3Ep8aNww2EeVEwBvUEEi5chuYmFbq23B6J4Jo",
  "key16": "2qweRo3mV9JBmMLeeAxu5ocnRk6YgvS5yxMHze5MDBLcH89rviaxEfbDScJ9P7D9vWWYKZyVpydCc9v2PtW7KHHF",
  "key17": "3oE2qkvtraaBmLdbeUCrrpyqSt8qvWcK93jMyd63iKWuGW7r8rNX2J8ERc9EYkjTNEd7mK6fzchrRRxNzvhQhspr",
  "key18": "5qgTN22paF8eHjVUmnB51JXhPb3MCQqmEj8f5CnShyrg2wZdthrfDkzW4TbcehBD4Z2Y6fPP6qpXYPHRnGCeHQj",
  "key19": "4AMpBLZSLUo9CuBrNjYUAnZP2dE3ceKgxrQq43t9sr6adqmFbo6dY5rCNQWFDKtkWtsA7qm27LYnUXo5dmbZwJfY",
  "key20": "2YtuoVxD4N1K2SBp2R5SNx2tWhkFj9TJr1KMJc4YKKeuaJsmAonzWUBSAM7HF1djShAuqLosaqbsesbKjXW13BpF",
  "key21": "3d99spNnt48HqbUtfAYrcwHdcuYYj1uvT4oq2MduqVsnDWX5LCJVuVUM41vzF9nQGWrPbKrv7z3DfqHXpYZtnZaf",
  "key22": "46QTPB8WW1W3tHuL57tbzvGxBWL92kW52QzTG3syBFYhsu1noRPCp4j5tKGesj2bH4si1TrSnyBvPC7rLH6dGL11",
  "key23": "3XsBFvEdL4FqZacqkdNunXSNyAb85mg7RMmtzLnpt93Yp7rq6Cap6npSGBeZKa9ryVYA2JTxWUjrKysa9T91hQKM",
  "key24": "4qPpEeauK8tMiWfCikYtJz5ubLJqzEMecdvYCkZ2Rgo5CakShjQHBdoGbfNVkkJ6EhXZGcpvCvoUoj35iijVjUc8",
  "key25": "4ua3s8s8ycq2ewZfaXcMEgczvvxUCn73zgkWht9La7A8mfM8w4oiAK38cqdHYnvNWymJMajBSfcUzs2WNoman9uR",
  "key26": "2MRLDwN59U5RjKanFnUqdv5nhyxdyRn3BjnbwPykoDtcd52ZvfhBYfkxENGGzV2MYtCxBjWtJ5P7XBW4PJ7N6iNd",
  "key27": "5MD1PUsfGaqA6qiV532m13tgxTVX1Hjct2WiSmcUGoeHTwFqqEgEVi7y3pF1MNkoQjp5apKgpMDohCBUBgx7WWp8",
  "key28": "4cz9T7thhiCbFPp3zpTSevPSKpG8GYLL8ziUdoJA6kLNTuodZv9LpwXivhrPRrihJjTkoSTq6apzSvoLqu9sjLhz"
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
