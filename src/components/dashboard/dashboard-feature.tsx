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
    "3zKYDxFmThLST1ZYWGDKWRT4q45caBopssvcS4evoyQEwbwBDkevSkF871BRep9iShPkXMAYZB9bTX7AE8gyUrFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51cix5C8GupBhctzcnR51Jq1yRU6ARv8XE2G4TsTBJPruuTzdboCstYabRJVmeAAUnEKPtVh8hbNmworvZqyvHFp",
  "key1": "66mQtiyJtokwjcokZfjyJvNky35V92wVo4Kqoe2YYxZJ7t9p5T7stDtY8ndZqGehdUJMKPAWGkiBzQoPeusW5h3s",
  "key2": "5MFo8n47zJQKr5DJqFozowbyUioZHt8785ai4ddVYmLiX8d8o7Tm69jX1fiFGVNKyk6QA5D96AA3dAmdvZS3B4dJ",
  "key3": "554ERLXRHCAsLNwWNBfDGGfFSMYpSc2s4mJQTkz5mAgiRNXfu9VDocfzBpjd1qBAnqtm3qrKNwNNPeZui4YdCQeN",
  "key4": "61veWBCmXsu3Tx9oAWd7DBanF2YPP6TaMVhUznpvcENjRvU6aGjWdDVuwW5x1BXABZ9TZsaWXR9Evxj5tjJnU9pn",
  "key5": "2j2ZkuXZeQ9ZL6m83TuvACTGy5ccLf6mf9jFfWs3YK4MBLFgtYnYEenapTz34WjHzEGUMn9iVkUpcPLKoNsSppXM",
  "key6": "5JxE8toCboBkes2QHCiQYpogbzs2yzRrdCoPg3AnizmMTggBegaGPgoxPZjAKGupuHWkzd418QQpqftQRpq5GKSq",
  "key7": "3CK2hjMYrargBh2HwRBdJKt2k65khq999CGmuBg2245N9P31Cpbg1FtL4QjM7Xx4g7D5iYWkDyoaKTLr87aWh3wh",
  "key8": "5vgCn3arBC4GgHoCJyCyxT99MJsq63ebNHqZvwiXhUszCZpid5ExL2i4T69mXMDKsT1qPodUGXhkRFNCgKCXSmd5",
  "key9": "41nkFdP9ZquZ33b63eWX6W8KmZ5CzuzcfsHNt5Cua1EqNqxjrWBuQ8nuBCSmKeABU7A8CdSF6quPG3x79XyaE2nV",
  "key10": "5JWZs6GokmR5MEa1G4Uoqx4uk7wfTbcxqy3Yp2JKuqPdLpG25rr4z89bYM88aAa7JjcT3rYP4LSjhB1FHNwMkqcZ",
  "key11": "4hsuu77MBxNGN8WKTn5SyBrQh2kMFuP3g5dSNdFLFDoA9CirKVVKJPj85CfzKrEmEJjbiAfdVpiLXYd6uPsb6bJP",
  "key12": "3f11TNPwxnxdBBnXBPQpDsBsZ9ybjmSshL54zYxpcQjj8in28gWnD7vyScVuDKuuE1mAe4uKBk9ktm3HWDxL9qAc",
  "key13": "63nNCaugyBeoDBJ9Mcuceu8MrLRLqqpkTbr5CUueprChJMxQmbt3fXq8VNnwJqS7Bf4A8uFL5bsDeNryg5tBzCNe",
  "key14": "HonqucE5jGR6t737zN6GPhkr5h5c7wxBiP32iKGrSrUxxVhCDz94smBHgu2jZ1GpYsSZkpZ7oJ4HbrqwQJikHJj",
  "key15": "3fb4B4KURSpALZb82yM6EjH8Mt22gBqENXP9sTxnRAbkCDVWjHxkYrWr2vu3g4ASNThE3nJeDT3AKUYxb7zyb2Lx",
  "key16": "5YhABNfDRjmVJB5jtQngjnT4CqtnK3o2sT3YTSUwWHLJUoFrMPmewoeVLkfWC7YZH3PUAogMGqwTDU23samv5ifG",
  "key17": "NUXSzm2wX1raqAWDtRn5Pd977Tmcqffduk3h6mRfAHXozbkcv8kEdDz3XSVbtgjaKeRb7CQWatx6pbmNPaK2Hxc",
  "key18": "Eig3fEWD66E5EuCpLYMmTpmkzj4iHULuMAXUDpxU6PTDszCwqBMYUSzzMRND2EWW2NZ6VrS76BcrwnkA4bqiaiL",
  "key19": "2Qn6GmMJ3HBreWrKJSGvUSczorkUT379kqjtXdwn6fo3yCvoueAPp6qTQcJs3nvbMbJYkBezSzr1vmhdtRS57yRU",
  "key20": "4jcnP4ZmEiDgmwgsZbmxosrDNALSpXndD1jnum92uRQXT4mHFEmC4wiE7gxx2GZuBv63cguaPPc4WSUJ6BjMpzvF",
  "key21": "3FbBnquHLbzLwVNV2u9d5LicMpeZUTzWEdKqmcj7htVqkg8R9LY7tEoBKNUKmi5hrY4aGbrH43zrij3jFZUWgoAV",
  "key22": "6pE6amgX8mzg66znhGBVgMEwNVWoQT9pPrcfnwTs9PpJafXihQNMgHHmEdbE8octesj4EnS1HJCFc5Ruusw4eLh",
  "key23": "Qfae6PCKuwcKYEGdA6RqhzVzuToenJGJxjbKj86KN8uNyRbZwzto7yGf5XmQvSLZ5BVV65wUirx8f4mqMPLLMGS",
  "key24": "2Pyq4HoLRrBRFF2JRKci25NJW26AJGXeD4SgihfcyEqkKGG2VkVh24XiSEFRsFiSYq5eiyr7n293KEgbZf8g1GBC",
  "key25": "2VM5LZ4DAMsPiZm389MZXrBkesPnaf7tjv7NpAH7tGGrozq2ee8Jkti7Nq67w49fLxjR9cc5zDDZbmTVmj8uAayh",
  "key26": "4mYJGuiiQ82PnRn8TiTFYjMHUXpianVEvrs4yF9vW9i4chmyn1J9YzKvwrsk4mkN46DuEVdgCc6jjHP1rFDEz4Wd",
  "key27": "3FeRvPNt6FKzqpMvznq98b78HUT8eEkBjTGtgSBwSeqnyr1emxaoHZDLmqEoV9e1uNmE9i5exqdYYFNZgwNCvjAp",
  "key28": "25u35B727XUduqJV2NzzR5qvj4PvpzabJWCWrkG2FyLDW3J1oQBZo3Lvj2dtxNp4zW86Qr4c7kXs53vD8Si954nq",
  "key29": "4ggEB1nH9JZ8PXtqoePNJQ4roacLR2mZtdAMJpZfGxUMYMoNbED2Y8xH3CsAqCBpFz2Y5sEq8St9uBPHk8PqQCCk",
  "key30": "4vASKYk6sdsBPvW7kWn8U6xJ1eKo8uZgditnRK9qZBeRGtEGxYdfC4xFRqHXfqAAe5knzL25hHoPtiEgdxnPvyr7",
  "key31": "3GHPC24ZaysT1rG3tSTBVZP2uuChK4sbhjV1Gtzo176pAkhR4huvnS8g7ZzVhUkFbXLrtFE3g84q7JDwL9oztrvt",
  "key32": "3MXKxdsUEoi1UhiaYSfymz8eSe2YGdCv7jY7db9Pzc56PKQLrPNLTvz7DJCKzteyEXQKhzf9NWnX3RQUNmgpGPQH"
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
