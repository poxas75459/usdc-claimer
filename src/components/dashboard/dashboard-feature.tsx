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
    "5BrxH9p7sAfbrVwvbC5phSgAf8FFEPBdn8zmxkYWF3NzGafSTJSAM381hjxmt67YtRP6SMXa72dpJRZkNtZwAXi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GxPpkGa88uYSo8QQE4pjFLy2ADNjZ2AvYUYrkMacy4UpyqWYBjW29sUd9wFnERfT7DPXNXAsoLo55rDnDfkZsv2",
  "key1": "2ucrjfv4yYSD2yWt3zm6uc65dnpZq5VwfQuTdMoaMLCQp8TUeqQxzT9Zrivwvs3697vqYFJbvYavPSZmgEmLDLGY",
  "key2": "54QMW2qm4YkJCiv91EZVgrpss9VVd5pU4kuxx8s3zYLyLfC6HcaLR7YvWN7b1gUasEkCKEHCxRn52g5XyckjV91",
  "key3": "2UVLU4Ti7bVNxyVcHK9xWigJ5ygYNLXXzF4CxbpvMW7QZUD9cBgumTm1e6qvH6WT44DndWxzvHLFybQnkbtFMda6",
  "key4": "27AQrnZJv5DvrXttgap17Rbgtz6qgK2SqLHc9v6VnC4WVswPfbq2VosjxfkGJXx8obykRauQPAWri7ZgKaPB6LQN",
  "key5": "e9kw1SpWD2SZ68JfgrCsmeByUruZc6XCMs4dKeWfAAZektAWAyMMdeDCpJg46Gcunq2VM1WbSuXcTJugoqd5k5X",
  "key6": "6442sPaoq58dxa9KvLfT3whTZa6C2iUYMkrZuUMrRhFmego8KFiWevrHGjFLX9xHrEhVwr3a2oxRRMCUkMa1mxf7",
  "key7": "5vaRE1qWkRH8HumFxM2aCgzruKDXKvj9qka8pBcLJ6XdCc2L47pKgXawjwnmyv9TVraejF7uDfjtAwzYN1oVUSW9",
  "key8": "iZFVMER1LoKfjXXRE6mVBVJV5sYstY4zc4T8vcJGtqsN2C67ZgkRXJjWpdrH6eWThJBYnknotFBg31m9HoNo5gA",
  "key9": "398EHeh8sT93v8NB4uqoT6sUT3Y2fNJcVEVZDzdXECTn69UmkTczZxEFepURS7vjez2Sn4xBGcas3J6UepTt2rNr",
  "key10": "5utJ9QaHY4H5uSUb23C1XNW3ZtUEGS2AeCd7bN46Gyxkt3r8Z9Z76e3dbqNJB6kdEPbUZPCBzW8zdzvSrK3BD1LP",
  "key11": "4k4czq6Vsn5xWGi7guUQczZXWLsz416q3UaSWKhar4twYvrQruWcRm2fDq85bytsUgbWi6bLzAHT9bex5RKpG7BH",
  "key12": "553diEdfZEzd2W1B9zLtAjvTdeuF9sDHKU4N8wsrH9aX8yarrhkJJd5VfZnb6VZGmagtgMMoHFjmWVj8yEtp8iXx",
  "key13": "3HeVxLoqKjEkVcXHrUjhMA8R5R9nq5Fpva4Js2D5sfgX7jSK13bmbuqpZvLkqEx9We7MzSJva1EjccZec2Nwnwid",
  "key14": "47FrtJCZK8BhAqU33SJMjq8k7XU32Lmy8FjutoptrSmWhQtBfzZWXAjZXB1BjkY61hQQ5hgSFKXrXiGPeNv8iu7n",
  "key15": "3ZRUrfsSozkEEKZyDpHM2FTtHsdcpBnD16YawTyuENNaEHNZfQQFqFN1D4VT39WmYUZzbwbYLXKZJodht3CtuRj",
  "key16": "2HjxvYfQUrQaYtzbhusy4kWRzXc3SdtUKPw6uab44T4AWn8Pmkt6rZZgpiZchm1hX6GyiGC75ZvtHFckj3MzVVRJ",
  "key17": "4fxy17xUb4i2w4tmdBoWdMJ98giz3KpkJ8J5HEPH53QEnETYdr3XLECbHhGPgaofsYbAFbU3acFVFA4Zr4Xq4hbH",
  "key18": "29J5yi76ppYZWjQJz6Pu1THKc2mYRELfEgFuTQB3VKsd3bUcFxcvVtkYHyCx7YtAREEoCbcgRkML4vZ8UQyX6GrQ",
  "key19": "5E7kpwzzSiQp2Vu2Hx5pL9wc9U9Rqib5gavzyycHcXyznAmfSUGNH2mxZ7brnQunxMC4e9p3KxC239sQhwkL11YD",
  "key20": "zFyV1DHmFePCnyiwCtJ3hcHfkzLdtRVD2JJZJWHiv6h8TgeQnoZb8UCpWBKFovjmz5d1itLKFeLDvBLNUbNGGEa",
  "key21": "3n7guR6NUTjoQQrCCe3nwQe1etHh4Gnp3fBFbsa3AKqqYJf69wxAyDAqheoCUHw822hHLhWCvPxQtdbhsUi8vwYM",
  "key22": "2RAYHEM3MjXwtvEk5RusoP1psenEXhNafZ7fRMenDr4dnL8LrgbEkJvZuzEGgAZnW6aQyxB7LcrxAA6dPWBEyHiP",
  "key23": "5TJFnRP5a8rTkLTUyhSheyrr3GUrk5LvEcA7a4rrFrJaQPUosTVvFRQW9KBzDatmvQpV7YxPQYURUDiKPUst7bTQ",
  "key24": "34ijh1yhEcxJPjdThTNZ1QBVqJd55ZiR6abPMxmwTfito1FZa34xsCxqh33f2Jnz479HhTR7N7GXXuFnNNUn1Saq",
  "key25": "Wh33jy3BD6V6P15X8n1n6XEioeTFo7aEHLiDVWwxQFfzoChDEVLF6t1qPNHXFGxHPSyf1zxKgeUrXsVXtmn3PJ8",
  "key26": "2ckenUo5PwuqzRHkskJLF3JLzi2oYJh4QksD3p47fwPyMr698z2kyCmCdrH8Q3aPkx4yQkFaknXTYu9f4f4HHgmi",
  "key27": "3epQbZLxDRyrKT1uwsVXiBqKDjKVwHA1Jt7J8BHdDBkiJBF7BpzQhhu8jYpeWsZLEZaHQLFhSpQ91NRWH5HMu98k",
  "key28": "herM3zDJsF5eivSKaHJDjvGwQoez8mbsMGExHhWBta6nuGvj13PBkfxQCRxLxZqP7zuP2Q5iiUEqsAikkab22vd",
  "key29": "2oCFWFbNQVHBvofHG4AkZdy3hxY31XdbxX8NWccTD6MZbs7YF8UYPfipqLjfSxS9rYeCzt2hKdfZcWYQrUZheBAm",
  "key30": "3Y1Mu5xrS8et24hSb8VJXAVbBR4sXNDaRS7GWY26U5UrCLFnQH4V927MiXWYfwR2UfQNq6hix27CuoBvYxYyfdDW"
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
