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
    "5XVMAbTR22eXvqTEwQqzQR3euKevcvJuEfPfGEKQP9dGxskS5McGzvUX8Y1D5cbhgf454k3m8agPtribPaXKM7j6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "454FDqWZRWM2V7LT9VRd5YE9eyfJXnyiQqEsS4KYRNsihV9UHTncdrkRck6rMsPoWXXz7D9ZghDabS36XRM9FkAN",
  "key1": "5pNPR3jQoC4pALgYQrZ5MRKUvkAunhss4vDUnB7djNNka7UT5reYJW1Hw13VXEcyeAA82pAEbYXBMj2fVQDBcstH",
  "key2": "MJAZYw9gjqxjnhyh1Kt6axftQ2v2hdyXmaCi7MzhkJviDpS8az4ZYrL5G4e1inYXw9sUh1b2W58uJEx66aE9SUu",
  "key3": "4ocnS2cqhLyvC5yravcTEmBohKEf1vK6xwB6GSNgYtsTvoGqcuEuN93V46YeK53xYe2zY9kboTwcpAuprv2w8WuL",
  "key4": "KyEvmnf7vFnf2nDE8Vth5d18cm4Dd3JY3j6EBVJDvEjuFjCQgaHsnUETqtyhMBQQjf63RjLxaer2VzCNs7yka3v",
  "key5": "Y7o83hBaVaSPSN2a7bcZwDJTLCP7xsGwWm918EX9qPT8hdVX3k8dTjNDTrdTvaYP6nQBC3a11xrtSRZKX9CefYx",
  "key6": "43nwBHYPzytonm5zUHrqeNFxgBbLWHNGwfU17j9TF4L9RAwbASf2a5s7TC7gVkR7hgZpp2jywpSuyVU6skF6PCGA",
  "key7": "5gLEgihZgZJqwJUsrjbzFRzQyUgU23QwBMkMvTKXQ2HoEAct3jikeUwrvyFW9QJnc5Xkb4imHURajYadTbgRMSNj",
  "key8": "KfQtFfQTxAKRhDqrFWpu3B7NdfHmZv6RZJ94uA9F2tvSUUsxXtspBaSwZ2RVnJ3H4iv2x4J5TMrwRdLDtzY85bo",
  "key9": "3SFaRMWYfyLDstcCa7Nqjr4HdRAs18xXxHL7jcxDEbE9puyAq17oTvywZVTbsZLJj1nes9Zb9zjHZPnFbpXcmFZs",
  "key10": "2EZ3LFWvzkHZwTeRbFiwjUAR4tbtHcpKCAvMzgYpLoHZ9wnFQiAYjvGUgVjXrCG2K8x81tm9HRvjq2JY4JGfCJKJ",
  "key11": "2M4Wmmxxg4UeGtc3ZbBAuEiSsUB3pDAQf3BS8K6Cp6Fv1we4M3EZEgSbajCKy61uuB9E6Haxyk8qnivzi6U3MuWC",
  "key12": "2eSwpik2HbsVJW8ffN7N4vY4p79pF5LAD28tkb5pALqv3uEXjDuA61JxejDUvHAYzejGQVUpGSxXybRQ84bGCAxF",
  "key13": "5N7mcPzW9xvt4BzhSgjqcKQ94D9rC8gXnrbQW8uBQrFZDg35scMiCbAfPP5nVbkn4sBjYmS8MbkL2jDjQhEzRnkc",
  "key14": "2aAH7DSrALGmiGDuoWk35dBNjyChRfCvJn8zSdHGusfCDqerWKgkG7bMTTBSUqf8VGJdWCiwUZjY3hJRtPMrwguJ",
  "key15": "3tKbigfpebxdJ6hwLFNAxzH4QKopTqERmBVwUQABZU7UCAcFZs4ze934oQiXV5X3cRqgkQcRzXCdbH49ibru3grp",
  "key16": "474ypMZzJm3TzUxHaZ5u6VvH4S133sypSpVJpdnj1re4qFFN3bHBEMK5d7MP8zMsJgsakpM9EFdqbaW8Kz86bTvh",
  "key17": "27pPmCBcACCzhGN1cyBUCSMg8QXSkWT5pSmAcC33BEBvEQkaYdaXfcHpyaipCA7JGo9CMAq95rcoz8ZiP2xhk85J",
  "key18": "3EU12PjDurCiDe9sRYnWas32v7LA8yQ6HHuN1f8knZQ9WyJf9DejPxWRVfMe6swDmqB6R7mrDyrQoNJZBHkrRWy9",
  "key19": "4RK1cppccAoStBazgWWYWbtPRxE7ht34Wp3TuMdQSqZtQFG3ScHVUx32yiPfQpKAPEGRgrMqpbB97gTMo4UzsrCi",
  "key20": "62fxrnGkCDr3D2SZ7cthRCrcxfg8SnCrciZp5jdGynwrZzDgm6upbY1fB7SH2tuPw2k4fKs4fqsXNyN7crveRYop",
  "key21": "365wJwVfST3ox91xiKpwXZHueDcuEoCnb5VEGa5bzJGPd9BeqFgBLgKjamMaCFSAPz6pbrvwPFpMLeE9n7A8dWDA",
  "key22": "5JML5fikg7z6Y7TVwY1DVuAprK5vE2ijJk1LtkM7Qp2tJwJBxGL9L6bKqSw8io4TZR6XWjRtkgArJsmHacaB2jdV",
  "key23": "3ctkQLDS5cH27AVvQyrndoE4uPPzCNnj5Q5FqS1nCLwJyzT8E8ttTbjYLW12wgEvdnUKbxwqS26o66LYzVeGTwJc",
  "key24": "qdpD3irMRD9dSsjw1E71dGCwvkss5LLUfxQ1duXkrdkKYTNXsEZ6ULUYVSmtk4NYnGCJmz6Wi8WNhCHX3bKbjA9",
  "key25": "5tAY9p3cmh1wmkj48mYDrhPFzDvek7yCUsQgxn3ikDQSKgEukky7GzHGcCd1DHyRh8GWR3s9n9PqAtppXs3sJ2be"
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
