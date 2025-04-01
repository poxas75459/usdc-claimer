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
    "55HWELNDHHqq3HxKMKbwBPQiS2715QaQpgigcCsXrGHzMzhx2vPtQA3qvZ7aezA6vDaD3TSUimRzHL4ATi3vrdrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hGQeRKfVx88xGKWoMn67TWj5JkM42GdRx6a4NZUZo6wBeTZh1KAwZq2vSYWx43kMhtUZ9MJwExmD3XiirTCJ51p",
  "key1": "2YBj1ywKGMF5UYo2dZeWEzByy5YGBtzgfS3KtUqmwP7qofPPneXZ62Zic9eFxYxiXuSDMu7rAc7bPteiRkSHxEKe",
  "key2": "4mEc37xKf8ns7W5JxCeBpq83BretZxUuNeMhrPUtxJV2F99S7RvUyDP8CayZZ7vvJj6uec3HTJcVUvyzUZjwFH22",
  "key3": "48xjWmAGs8fKEyBtpjFsdRPQnmEQuotAfZcKUtLUSwLHrmftRhWmtnmPsv5hgbCJ1Yj43jyAjNf53WLJnmV2u556",
  "key4": "3GiynLQHFmqpPtJXQ5j6eL21XZx1XCZTqRnPJMLj4CQE7pd3RkncDj5ruvW6KfFXt7iSJND9xzHKN1bCFV5JhNFa",
  "key5": "usuFpedSq6uRm5smCzbgR8MLiDfEeY1UYT17uLnEM57zjfMEZ8BHXoNa6VVJqPzX67BVjQHkSyuycWb3tHUc8uh",
  "key6": "5BG4FcT2V5N6cdRy7PUm1SydzoZzs9NsupgpfJkJ3vYXVeomrQWJ4e93UGjpKfgNKEygjnNgmAiZvbQmYwtkW4x8",
  "key7": "5WZNqakE5UyWhBEwbcL2BzDeSqavPAtiTBPGJgKoXn92t78ZWpmdb7JvTjuSTGAz3KCmts7fNfkRuGEjGLeC4CYs",
  "key8": "5mzLnRGE5H8nuVYqazdZAeTVGcveTErwdGUV1gMMWX9eTL3hBkWTVySXJRDxRiEXvpiEP24YNtWcVFyxHE6i1WQ3",
  "key9": "5roJRVtrhcbXCzhMfXRMxRJbpyP2pzpM1vrJoruquzPaK89nKMi4XaoEsnkuyggLRBLFMucXjjwqvWY8o9bG3WaR",
  "key10": "4gCehmW87aQxpv3ryrKPJhK3GSDvbMKBSyQGu7r3zt8Fyxp94PXVDKkpiz1uqCNg6zENdmUK1uJ2cUKhB5LCaN5J",
  "key11": "2gAEM9jgTRhdyMdE2dtyji5M4dE8LjDu74WJpwBMEpWWy7tTFfCJm8r4Wij5huKy8zYhqDpYfacx6JaJsGAynkif",
  "key12": "2oaJAHcCarjPjf1vKF7LSkJzxFivW4Ls4CREEEkPpZztc6spNftB7nxHwFEJoUpnAjBBVLD516J3wfzjrMrvnDxF",
  "key13": "5BqQ6DvQZN4tSowk4EueiX6NH516XYxRhGEbaaD1hHETA5XNXGh6EVc87Gb52JctzGXPWpd9tVL6UwaDy1qi3C5L",
  "key14": "3AyfmF4qo68emd8ScciVppdhpPBj7ZyAh7FFNRLfLg7eYdWsrhFfHZhRBqWMEGq9EQNFeSXVF7Gng6q5JDaLcP4z",
  "key15": "4TEu91XzLLTRnJ1SBv21k1XmEMTdLb5386U9WfVqPr3RSgVPqZj4iJwtSTjMjMJ4yVMiafNvbo4AzucFgQqUfp7W",
  "key16": "5kdbM3rQt3548wcjNjFesPCDZsHiesi1ssoSsZ4vDVKFwax1KsJkdB2xVwd2ZEc3w7VURy9YGoP5WU9EkJrkax5i",
  "key17": "5QWWfWVfkRsHzT13N7UCuwapHeUWLKU7STUL63DeHuYqDYKH6LNmwsNvdLUonSseb7mJapo2jwUobwMEXsf7YK2b",
  "key18": "42Jgp6UmNQxYZA6d1D4T48pzmKutKC6EAESiLxqf41Z2WkFXijf3Y2u48AfJKT1NQTcYMrLisYT1M9m5dgZ1CVhu",
  "key19": "381cEZ82J9TvRfREisdKT72hWCQxVQfUo6gVxWAmL5jZr4MgtbGjJEh71rfAr4ABnP8zjTrbZyrzGPkUuPzvBSVA",
  "key20": "3gV5vjQDvRfwnyb2cQbSitChUkwyRhhxnKrHHCVQRNR3Ma8phtW8asdGRuzpvD2HiJsYCTbkcfAcXg4eetaeaf5Z",
  "key21": "5qLzMfvcLGQ7YduWXqLRT5bYTNnMJfHQMb1Lr61uMXt7zqVjAjkUWWqGCybAA7Ta6DtBDFHqPBGcYfCQJMajAqHy",
  "key22": "2kCkJPrVhNNXvXwjJpsPwPZ8Ki4Gpkkhg3WyjxWWerm61v7boecUwgKXNeRyPyRETUS5VX5Rfv9DU9cd5JpWg6R9",
  "key23": "2VtN7ib5b6mC4krBXwCYL3owUuvvNiscQ8TLzTzVVDGp78SEGwBs3r1xz7m4mKu6CSZdLcEXYNvsh6fw9CQXXgay",
  "key24": "WUEwdJYMiwXqdrkaZhCWDb8nTNwQF22j3ici4obKSL5Q7UqtDtuCMTtxGWjQXJgvanEAVfUcCJEhjM1RXgDMfUu",
  "key25": "CXVMfgcsA8sczS8Qpvnc6fiswot3J43YghSN5MqZFScdv2e8MGtBzoZes82yn7WCxRZtgknh8TnX1MtpDh363ii",
  "key26": "3WUYkj9bptPQHLc2KaV6m9XnAMKrQLSxwUfBzFYbpXTuEJKtm6LtBSEznEQEXVWyxSja5DX4U4NP6Ey169qyNY5K",
  "key27": "25iZwk4SCXF7Si5T5iGrBczonXaxvy6naZ8MjATQN9PRTLdL72weoCz7q6v3EGGabJ3H2Me5nNj3Aer3XF8nsLfJ",
  "key28": "4Ew4zYKeCknWeSmmDF8Xpzuo2hreCTzMqfbZz9nrJ3YYXmjcvseDHZpTFa7kHoKiYc8eUnKRLxDFHYqvUw4LqDqt"
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
