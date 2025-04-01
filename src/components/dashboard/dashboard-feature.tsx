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
    "2iHcM3eHw6DTQ5V9GMZuvRMsVSeJp3mpa27tEZUKGBASWJgSmD5hqynvXEnUSzHuixrKvbEQd9VhToo3VJFPSLkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RXsaw52RqzmY8ayiNWXM9pC35VSSLpkfX3qSbDXECoG3TkvfAjim9UVU764yUqMPak5XTAL2jshHsuwDgQRcwT3",
  "key1": "517HgFZc4qe1auXqCfoopsU25fffNaNGfoJT7ozT8RiYedy2QNvgdUyfHxBrQeXZ3AfHLHD7hgKEixtPxYKPG5en",
  "key2": "5PMbP466wZe8vPBzkdnri3dvwNmS2oKGqFxtGCQ52yFvLYuFyNKb33bFz45pJhUZc9R3hRhhVbDC7vjXdLU5WubQ",
  "key3": "5kU7mutvn9Gi6wykM4f8115T3giQNhFttPB4yaQHqKerE5RchULWmDxEMQQfhx5SfnrTuEAusDc5UL16eAoSCnDR",
  "key4": "2gM7P3T8v4QDqiRviw7RU6SaMHRadk5DZ6E82NsXAQAmYjcw54ZNwkSYASp9uMavLSUjJC2nrG7rDZM2aJ3ZL5tG",
  "key5": "eQCxh2nmKpJcEuJ1qJykgr2AwGZA6K4regHvywsK6QhbPnEVvQNZcVqawAz3GVzW9dRfEDhz2Tecq5o6hF778dm",
  "key6": "4AFK6iBMM6qkC6TaeMU1dWUWqpDkGx4iaeeHqZABCN7XPGHvAQw3zVzHycH9U5UkWFKdQd252Mduo1pbRXfUikD8",
  "key7": "35Gbaqg92Qzd9RHNm5p6SbWxX6GSrxJdPmYz33etD5cN3Vv9BPxQvZ4x31caoW43xkrUvyqjqxucBdAy8USzfdE6",
  "key8": "66BKzqEBoA9GubLuRMMv67Pnvd5KFfy8NgevEkmJiFgAvPHneHtHKXvCEzPYqYGk77RmGa4kAZfPLabj9Bsm72Yz",
  "key9": "2o6VTEZfnvVjp2zSscpbYwKLeFmx5j53HwHMMRuzxX4RYkNBSKQScw2wYFfmw8QDAeL2fPtexgLrrp67tU5wJYTr",
  "key10": "48pSUv8esSmh2JLsGKc9nE8K6NYQbTZF1JKuETQac644cqyNMuyau24rbRDgCNUcYG5twHVKpiwUyxwrYw4UZvgd",
  "key11": "5MedFZonnwPVS4sTxGRdvHwxKRnTCuioZr9bebDciCkeLwN373CQY8XhSB1WKjyUNRYNMBgYMsRr99kxiZHiXgmW",
  "key12": "3L8eyemUmSCa9MybGJd8Xg7MGSNy3fMWVpr4aeDtHZy1qWnaTy2aMGsYzGL75VAe8Mry7GPNTivRTKWXmq5fkVhF",
  "key13": "vbQCPyQfFknECKFZ7XyAVbYZ3zygYS2d7ywbACSsxSf55XRZWyzMjL4ofGVfF1Afp1LFxPTx8xRVrkCTB7s5rDL",
  "key14": "3Q98ziBVCg1gthtRBwcuGPwQJhuojX82H45W3QTpwKLTgFUvqyiEFYJt8jeYfNyFvhjBuMxmmJrUcizpBhMwp1qN",
  "key15": "48aZdhgiCCV4N2Q7PBtH8btUoezDgV1ZeRkPAKepTbfZNBkTidmHBSbh1gcDuhEJ6PxnQsPRb7JrmCJojSwJ5Uas",
  "key16": "DyYFHb8NReozJLnpgFSGCp7pMn122WHqGJHXbofqiFHRS732C3vmhWfb8KKX9JnFBt9px6aZNZcUxQeT7y9W1Xp",
  "key17": "NNadHDe16DRA6Wpu2tdxzx36EbjUEUqd7xZh1mKaiRw6AwuVHeTe54Dzj6FiwCVQQkFvTsbfzgG8DPyhcDVdn5S",
  "key18": "63m9dHhnXHrAvWoxPn6tTivVFULtfppTZG28fgThNENnZhgPvjshyxeB2egVJHbewn3fjK641KBzQz138tVHSMtu",
  "key19": "4z6Bg8A1A9s7ffhySxxMD3rpPTYU6YUuMJ5tEBbaRdTciQ6DqGjKJqPEYPShPrazcqyhnKwrgQPrLXK7mg3CG7uk",
  "key20": "Af1yRoXv5NYNz4NmDdSArNTr7vpiKxU4w9ffN8qKJ7TsVF2Xbc9ytY5pk5ZwDv5bs3gccrjmdmnD4845LiArruh",
  "key21": "3PTGQ5ycGywiFPKBtTpsunqANNcCMuhx9tjxjwjL3wrLrF6RMjRtnqLL3NB1vN44fUsP2iBppZxJTzcL1kBYLpVa",
  "key22": "2BQTM6ZhdTU8i5yCokKjfqEtg42aMUEa6mBjyne1bLkcWAmJeN6M4STQREfcRx7uZzdyfCPaya5HsDJfdJmVvUBw",
  "key23": "3jXrkXnBEegg5nwsRztmyrD3VG4y2NqroZeaCS5Ej11mYV8ad5cvRcqnmg1kJV16zJCoAe11T7Qig7UJrM3TQrRo",
  "key24": "5PDUfqthWCJGiswPmHHBSYQs2PMw9eAxdXTwUjtSA6NDKDbpVMmAeiNc1bce1QzdPoEr771uGaKt8EtHczoutgh7",
  "key25": "4WKQWrw6UmL6S8BM6hwPZYcvbnu6SFfgdJ326o4aH18EaGV2ETrC2yo8WaCN4WAqHddkZsM7gKQVV5c496SetYgW",
  "key26": "5T6GzD7QpwdBoW9iMLFxraSa3L6Z2ob8AgxLc4pCZ8HSGZUrD3xbzf5pJfyc5YYkVG1qfzZQUVCCdD2dhtBToJRd",
  "key27": "26bZKYZMQW8mSd4GzY6WZeJP8P1Rr3AVoHLj5bzxFMz7zkZHCqxVaaTdo13c2vpdAWCWHeyaPFqbbQcqWQRnPadb",
  "key28": "5uk1EttR4zZtNChzZTSu9s2xruRoimFPviZFucs3M2SVkStq1Nk76ngHiqK4HQehYmh6ijo59FjKBex9Ko9qmVtf",
  "key29": "8yrAkxGvyG7TN8M6frd4EzZ4hiTRyZKJAn18awBX4nEztk6eEabx8ovtvYWpGpkjjaJevJBhJyr5fVLTWFTjge4",
  "key30": "2swXeHMybBXYZpJTbtC4p1LuQQpN5AWEhbaKDpQMKwCUZhV3u2sHVgsEdCJ7pQsFDKEhCZRghVp8PWTEQqQbizxc"
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
