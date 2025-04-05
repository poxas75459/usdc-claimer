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
    "E1AALxRvtoaQtRMpsHbHm8Hktz9ARaWGSMGwerAjMKWwXCofhR1faHCbnWxsKrKFuy2jKoAhwReujKVH5qZGqKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sgQS7ZzPq3KHZbKJiqQpg9ZPXipwLxhbv2gAtXDm3k9dBBv2ETt5oQwyFgo3u7US7vZXnDB7r25tHqb7QZbAEdA",
  "key1": "4C3LWrQpfoK5TNUe378WXzAxt835Y7F3Vmtfk2JT3Zjc9e8tRkYprfujewhcYTy4Ext6e518H9eBqAQz6z9vx5Pw",
  "key2": "5dexFmKu4vio7m8F27G8xS8vuzXb7WKYgmE8Fx5VtyoJL2Esk7E6xuX396HBqgFmfCRhTjTmCdfmmnLMXQxg84sR",
  "key3": "5MqzXyXJ1c3fkEeFUcaDfHXPQUJsHTQqEocWUHDZZVrQDXr9KBF2ophHdBqbyU6Bn5zDR4sDupMAM47ikmf5yFFE",
  "key4": "3HvDvpVHuWSbWtuyRNkRoaUfv9FcaCVeU1uqiEifkxn38pQQDieH2WxhstHFdUyMRrBrxWXSsd3Xw7CN2pvMgNTs",
  "key5": "2SpGnLx5SNTobpQCydjdRHbzRhmapQdoAtU79LbD7cBBSY2kTJpxJma2LnHKCJNpdqVDJj5C8RQcfQp5cVVSksMQ",
  "key6": "7cK9cfMSGYCQiJfzDhGZCnNGTpfQrFKFjqAmtit5TMPG3YzJp4nzkqBR1Qq3ZvQjrwznU9Gs9XQR7PWcgW2y9dk",
  "key7": "37fagYjg99JiUJi9MGpPMQHLbXFzKHu59kxKTWAByEfjxymDeC8rPeyYGENApUYYxAGDVkWpkZKfRaBQqq6JXjks",
  "key8": "2W9ruD1q3jkga4anxeHPkBpBJFfZcAMbG5ogfUpQXJBN3keb2tFt7Mu2MRw6LUa6Vsw24kj415coijh2AyA6y9E1",
  "key9": "3CEKPJMi9wf8nXwaErRSShR3j2VzCHvC2gUBxVoHUGKR3KxSPNcq2s991roHD2KrLrmG98dqqf9HkY7n4Zhx69ef",
  "key10": "5wiJppUCtf3WdgorknVbQ6rK1N6rBmBhcgbxwAC48b2gLwJh2NKDGUPoysx8GkNDJVxAYUR8rg3kb9do3ZGUeokg",
  "key11": "5sCAvEZTGJpqFNZY8mCvP4BGkEhAJxjHS9oTErE8s6jHs5QSAqcrRABWNGaAVjVCKhTqbANPPERAEiwV5Q5GyUFf",
  "key12": "4zVxCLGvWZ4Gy9yWc9AHsYEuVWuieYEHqKUjXgJpGdzPYRcHPHCjKRLApPmjpQDehW8WEycR6hTs8hHdAQ19qNSz",
  "key13": "cbf8zFb3EsUbQQsmAePLUuzPecQMEYv3qKpBeTE6Vbo4mPfatcSY4AZWZSryQk9LfP7T1JE8BUargmHqEvmtnue",
  "key14": "2SZiR6pTgWAA1LsoFpgbWqUbqj4HzYuivcyJMU8SUESnUFvmuA3KXHZpgc5fgEVWKvaCxjF2bzLkeghnQ41bWUqA",
  "key15": "s4oJtDayBqTznFwrcxNUSwVxD82ZVR9j1iGSPgCTP2thcCaBtWwahD9i8BozHpNnge5H6N84qHNRAvnXqr4c4r7",
  "key16": "73XnHxVEDkknNhUdrH3K3fmnFSs2GSoVkgyPMQ1S1FWrKMUobZ6iJ1Bt1KfsKBjgwUnUtH6skQEABFSi9N2MkvG",
  "key17": "4Y8JNerChVhzDcy1p7FPzmgbediZWrTfrTB3dyBwnRD7QWN63LAouRvhQ6PpBLtM6bwZUtEDrn5LyRS1vkFnfSd1",
  "key18": "2SNGDPWve95eqh7q5ejEecy7tTz91hwUmUeD1UPGjqNXNgYmLJ3XXYoXS9QoYE2M36MYCwfoBgzgnvr127G23r1X",
  "key19": "4TcKhA2KwQawWbuYXBxWvctHos8RQYLFBnjtBbAbWVfsaHDaJya9aUYnvnTRqAcMTwskZCRDib5kxcbSqZgz6zHo",
  "key20": "4LAB4QJyshtYDdiqCfeQ5VshxonPjAVqFuFeDritQAEejaoYNDmhp48HbhKwxsigDfZpPpr9BHZN12foPJBaQwTH",
  "key21": "4b1AMhSK5FhFHDLCGNesiN96KVUjKmMPuYEpG7PgvAuC1TULVGuyRmLtPVvMZUSAWFVe7CcV6QSBuz5zomF1rsPv",
  "key22": "53piFVCKUdwegX4ea1qcmZJLZ2hmzW17utGqnAn7fk1tdwGc3RmX1spGzi5AmMTouFQHtbAKBFqsMu2bU7ymMpaX",
  "key23": "3d1JhQBywFMypjmTPZQF6xdhQHwSYZfMENWzm7BEGCBmg557NERBziLAu9KBjP4ijuFCkV2za8VKQowjiNvAFvPJ",
  "key24": "67FBcfATh11kDaSvXYjz495cqRuooN7gQb4Gx6Yuj4ia65v3Uwn8hM15K9Z2sG8RjTt9cmpZpkhP4QN2s2Rx8YKL",
  "key25": "eBiJqufLLthWUC8RKCZPtyvZoZcwNo31Qk6jTZFBvKpyyaNuKjmqwi1NNg6FhCJc3gkchvTsbo15aEwJxPYSe3f",
  "key26": "2hdJJh5Sb8zyoS8dTL8DgWRGqW1eC1T6fDwWStcNrMnMmdL8yUEK4bxNHDWFSsUkJNFMcBJ44VeDeaa61cKdVwfK",
  "key27": "XhhuXSMsvpT9fgVMFBH4ErrbECy8hY8uE2JSDBmyfwh5cyJsbippx9zyZgtL96tSWGqL377JZsZ7D6nbAFFSXpL",
  "key28": "7BawJjnVPJ32hnPv3KhwFkJ7eNp7WEw6bkN6ES2UbYKHngsJef7fsD6qJ5n8Xj1CzfYz2RoqiiDczyo5hoBLasX",
  "key29": "4j8yFLQdUisA8AMiAXboFQKGtPzqWyFtATkk5Cd9KbSrnsENdRXrz3mAqEjTBcSnZRpVSaE1mmosS5ZRwSqXXSDv",
  "key30": "3WqK5nwubX7EEVEjEX2Cfbu82JSfkfBt1danSSKqA8KhcGSNKqMxW1ixPYJvAw1R2AUFEXbznQ9sraa48ggbA6ec",
  "key31": "5rEPExUWaKMtg4kG1TtYqjosDCrGZL5vPhYYFrdpKHYKYXCbcdczKRPDywu4mQLUK2fa7FHDxcrJS4sUqo1p695w",
  "key32": "4MaNHfkV5gfBgax2xG3fwXbBuijWACWtMnf84AppRqaEVG6vGqkLZSVx91wSbuKvJsRBwgWTGfKWdogNA3iM7xV2",
  "key33": "4DcTiNcJcXotTKxzwPfPMqr9nnoLCc7fh8sXv5XUYY5V7Uw1Hvu3NTgPUakBFAKAx7kPud5oF1SKtYUpFeRwnN82",
  "key34": "3rzJmjLMoB6xqMLdxLL8aPpvV3MRJhy9EjAELzyjzvmy7RyzKkfRAH5EY3KNDrcy9TC4nZLDYrvo3tw7yS4PCUz2",
  "key35": "4FVGqCvFv46j8RyEP1dhNqVSBMCxfBJNhy6Qs1J6953NTiRaZNsEuXFvWbJBw7FfoM3hYvGpbVqMEyfnMZghRnkk",
  "key36": "5wSXy2FsKPNouWrMLBimzhYPfRdfG1T4C7xANdzbrTgFKq9Q39r7iCAaBGwviWtQtaD9JMATwadGZMfppyrHZ2hS",
  "key37": "4S512q911BBjtL6QmExvoiprEJyrAdHXWBQW8zpNfsTQtUALi6PaJtUwEmfTxrs2CMnoD4djrg1V9TLVUohHkNAb"
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
