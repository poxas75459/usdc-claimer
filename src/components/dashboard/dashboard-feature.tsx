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
    "ZoYVTy3L1FDvs9wC2MT4ofjLerA5Com6oRSfh3AegRn9xoxcyN77CsRb1pbQsUNESs8TsdtQNiuHiUtPM7T9aib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gGknmZTVg69WsRGhtPk7qXue6Xi7qzxUGB3RSUQquqav6R3oKDJdRwqaobdWU1f1i8UzFDX2aHqJaMP6CAPyYtC",
  "key1": "4v4vYrRsV9KyQroC5PXZZpT9iFg5TWVKYcF64tHoanE9dG7FgfvRfLuY3Zji956K9ML6fxhspYxf65BtmBufnumk",
  "key2": "2uZyqCsZfD2AuZJH8zBJqDdcwYWmpYGXg4ka4s1R7kszNiptp8uVXgCUGUUUexikYvutWHs6jCH4z2rMJ6u9yL9h",
  "key3": "dKr8uUrc3LHzWkE87zyQrdW7YxZapGmsLQMXoycd1AuhhvZJ3VZJ9G8CTAMyQG1Cp6qW8LptrmsPKP2KUQfZepy",
  "key4": "5horggAqhk4jTrdV4HwaADXbzbUVXs8Xo5rk5h8DYduee8GbDmUewtMSbtfTKM9LuMETLjfSDB7r6saJ5TMHBU1r",
  "key5": "caV5sqU4Vy9M1ZAr74Li1NSsCKM6YoVzvP8bWtcRmGuo5N96LnBPBBbdGThX2DNYQ7SbSnnjH4b8nvjK6F99Zc7",
  "key6": "2ipL1LBaSN9R21ymjCxc58FTqc578ki1uLxDFpA35PhBunoJhypeMVNr59gts9Lf6DEUhFqKMgTKBmGvbdnJVUuw",
  "key7": "5Jv41qPRrPSa3qUf7kZptFnx8Yog1iWrY7VtEo4tJTubbyhhHmuvqjEZ3iPNRmikHaYjULsFvTfLFKtBk2evAzQN",
  "key8": "31B6TwuvANxd87NKDPmWTGFjb4XW3e7azmc8B2J8DecfKTKb6Af7Lczc54FrGfQFpwvFBZLVWuqvUaVM1X3SKvY3",
  "key9": "2sd8hjUStPz26u8rCBHgX6biaW6yvsY2Ep2McCfRd5751EWJDRJFRjuzAB69gvGfXVEwc4mj2JqzxjA4djb83wek",
  "key10": "48Q2yC4RyYh3PTfYw8139JJmsytt1B73o843XwdzL2r2nQRAgEuWw6fc9TeQrdw5ADghvetJucxtbR2cSE19jZbZ",
  "key11": "2T23GrTev6WMAVZgFEoD5XsPxiEyfBT9z9sYt5NZVDgE7TzUfQZLjsitHj7mLpmPtrj8TTw1NF5FU3RESr8Nuhb",
  "key12": "ckqwMYQkH9o9b8UnTL4bf8tAm65cLdjCa2c6dv3cZ9U8FQQ1AVJox2WwtTUF9JMSs3mBS6LzzwLkowLWDy81ydS",
  "key13": "QGdDsvGh8wWWnpHU7zdBXbmuFdAQL26JHVVYi37ehoadoQWt4WawfGS5EHyW5gyfYPk1pHgSbgnc3ZvqCAZpfX7",
  "key14": "4Yi2rvMqQiL9UnQkXs8iRVbmuGdDbxMahoMt6U1wxxJngayDnLgRk7V4fmSNjgcNJ5h88TXWefxuVyXzytgxDZaH",
  "key15": "4kHUgNFjGNrK4GvwFgT9k67dTnv3iD8opF47CoQtAqR9jvXbC1JPJAADscHdsCRPBMETx4D6QkAdc9HQESupzXJN",
  "key16": "4aaYD2KMGBXqVhZwCKFVydsup3dTdy6xsYgFDaNpyyJbQzD8LCV4685KQ6AuZtXHbrwNFnXzosUq88cHUH6p6TdD",
  "key17": "3KBJMpzMRnb1CXm7kfoLy7T7FghkiMiDzd9qs59zJS3Si9K4XaN83A5MKMvezK3taW6wuvv5A9Ubhx4ifcrfDwP3",
  "key18": "3LVdk7Yut8LcSM67WJP1XJPjLK4H1LvVVwqyZ1wjpy6U2XWiZ8HvyN4q8Mo7FzBnpaAkAxgSqSv5Tmm6okN2nA3E",
  "key19": "4MUA1P8ka7YwhtQQs89bix5YrFdB8ppCLheUrFgP66wCAd2Ut21FFJr9EquTFwFuVgfKGipfaRHB4LxjEW3XNdXe",
  "key20": "kMYy8ZJypuSQfATqzK7nj1b1sftSi8ywpLdLsXvXTVXS2GmhyQb23nzWLLUPkMz7SNXD7cZoNW5Ag8VYhwMWqkA",
  "key21": "4nnVzNEwrfL1GL6WdTFaBJoPqTCdjRrbd5b4i1jjhnP8Su5usZ2br3SsZRyK7kFjeZVf64aoNSXnCSiFjcsMM1ms",
  "key22": "3o2M5UySpMGKrNPQHG3oVAKLwRJBANcNnJDU3oMVY39mUEA75XctB4u4UybFfiuaSpKxzjMxzieo4xYrbY4oHfYa",
  "key23": "2DCXHdFXUgNFaUAjxnRKdzXcJwvgtw84eoyfB6YdEXYdZ7x73EFmFjKAWJxU5F7rSMnbGaRJTHDycSS2VfwakhdZ",
  "key24": "wY9wLQM7sdJu3pGbYhLMwQkn2XXvhUWbuu18K1YU358mKcMQopyVk7UFSAowcxvVm5uvdUYXSMRYyxjLmLeZN9q",
  "key25": "3w7w86CAMggbyqoQgfD47HnNAEGzqrkRAQHd7psvPVqHvT5iBgTL6u8ZG34fv6QVMLt2DpEvDkmDkJXYN7URgW6L"
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
