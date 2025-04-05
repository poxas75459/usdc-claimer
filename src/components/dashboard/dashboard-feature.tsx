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
    "wrY64id2A7gWHYEhGyq6NT239GeJoQxRkZ7fPsvqADP21wVrriZmYjwhydG8M3HfXKGEPHYDhKo3eRrghQdbXhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WNS6EKCCHZwV2xL7XVThEmczrn6GKTkajPyWxqhvy9GHiut2GTAhQYCKoetwVtNx5uSKjxtqVcRphzfkMPooiJe",
  "key1": "4EwzikCJXW9fUPzzZ6E9H6PkWeN43hFV8VcVmRbhcPTwZ8uQYfnytvmzQ3n31EfyKhuPStjz9Cb9BnXZR7XbXmKD",
  "key2": "28DDgugnb9irDqmp3gEir27bxi7znwE1ipbSTs43VCyCLLyVkL2go6Xjj6HLEHxPsJKYPZuQeQreg5BVUHBteXbS",
  "key3": "5PQk1bJ1BDzyaPNoFMiK1e5YaS16KcdSpgA9EATWMtyu1kizSwqqR6Bx4scq6AVJ5ZCzDi1HGrhy8xqKtwRFANcH",
  "key4": "437XAuiVyPuyKvCgkEondGyRy5CnGQb8NihUYjxH1VNpj7mqTLNkEji55vLuANPav2qnLaYJfgKCrAkDH1L3tQD7",
  "key5": "3W7VdEWzSWwUk9qjAQ6zwoFnWD59GAZGshGKgN2STjAgporamj6t5SdDhPd6p6ymEkkz1rvQ9TXxc2yCiL5XEP8Q",
  "key6": "2Ha2B5vVEDGsAHPpR2cH1R1W744dhjSJvajZTKxv7UqCp3CFotXnxns9i6tnpxTqeaEs7Gg45txKJ1iKyNqU3x9Z",
  "key7": "TpiPLr6MpZ1cNPdLWH5LYKWhN2Md6HU56yH5PzSgBTh1bzinGADSkzSDwNBjiswDBzdoA6PYtv32EdUHJ9SoB6A",
  "key8": "ZRwreupNoNouCNQB8sB4x1pzY8XM2WANM92q2GmT4UgetUg6B477XrDy3PYF7WyjuHExAQeQRQMPoqVfuviTcnw",
  "key9": "5JXw8UAAeHpmG2VG2wFENetvjdqYYj9HGMfmgKvr1qWwhX2L3jxkJRRuxvsBBB8pazhF9ki5w3QVXJJjb5sJYP8G",
  "key10": "5TPKi4hdikFCFsLqeDRhZ7Lz1vwk85dbkdA57CKBvo2rMxEMHFLPNm8T9g2PqC7V65thExo8H9y8Jgns5hsGLJwb",
  "key11": "3vVY9TBGmZKfZuk3s4BTUj6RTWoK8JPCUTRz1GcztPQFr9pH5semrneHtaDuoVfRTRzAiwXZhcGW8ovfRhLaUjXY",
  "key12": "4ugWBWtCXtQQ82EpfEZwvp1K6xRaB34mCpVaXmwKGJDFxLxSDK2nbmWdAt2Q7sfDkWuPgMLm7FTeUezADddBkoCw",
  "key13": "9Vmieam9TT1FsKq4XevgQMYqaKoFWP389YK58TxCZgMRbdLGGpM4PRfX8wJ4Fsv8dr9bNW2sVDHsfbPh5WvQ1Ua",
  "key14": "4MdVXbhLGFKPehzJRDNzvibRbxVRJxPgC26aAGYZwaaJQx3iwrVYzZSCgiaPjvTJMjgAAHBvg3FhxWxipRgDhcVY",
  "key15": "2oNTq3ZUHk1sVthzjpLK1kAYa7hMX8YxWsXBcuqL4qQG3jUZ2q5DkwC3Nm6W7pk8MWaVgUKXT7yExzXiGQnMHeNS",
  "key16": "2obo2kxTBDFx1ebjiwtmDpvgEguhyAzJ3aTbhq6rQZtUbqWiUUBHWzTKCCjNuofkmUj1ss1g9Xu6oicHZKcqzAip",
  "key17": "5rTWExgyUAzyg9q41vxpV7g88SA8mbXhWKh9T5rW9c9DkYKyzFjXfaRCs3UMGqLGpJeqouFyEPXYmTJ6Nc2XAG3M",
  "key18": "rpRzPozse8JK5c3zDJWKHGkznLHVEXadrJ7gNxkNL8BuxLGKtFNBgEtveArMDRF1To88gLMpzBdyzQSsoF4E7NG",
  "key19": "3rjUY6VzBA3yKzW2ycW88CqBwDc3kkNaiKZq32Axd27nmTfqPY16uzr5u2W4ESf7tJQQZgs84zXXxyhJ5JC2UCf6",
  "key20": "JnD37RnxaGhHvqSeWmdJS9ELaReujAf3SoCUk1BFSPFQM88k4HBCNHSeV3rkutJPTo4ngNCkaYX8ny5XHjoThSv",
  "key21": "uZrYaNg5JajjkRSPq3p3eoYhdZ1iTPF73vmrDQ6KUJQmbPBJ5SzmGc9qBxYM6mqLubXeY7MiHdYqGqKCNrESaJx",
  "key22": "4SqozqrQ6JQes4nk33JVuBN787cbUrWN6RtWDV9VjcJ4uvJ1Z2WhEmyyxvWYJZYVmHT5HGFhUwKp5wQ7x2ieJfwy",
  "key23": "3JusXQG5ZpY7nJM8HKt3YDgaHqDKaURPxWaHytgHjB7JPgFEXpg3Mr7pawg3MrB383G7wohqxw1zzjxrr5snz6Ji",
  "key24": "xPoYMzCGYKuQCxGabFAzSGqj1TA2oL6HiDTcze1qb2qXr91i5eRhNKe7xcgGKq3kekYh4GKkrYksLVJHzfXNsho",
  "key25": "5tQgki6UWotAi3VGHKz7pyndGh7Euhzm7uTTrcoSw3N8BexC4Jq5LToRgTf4tTXz6FuATsPq28yZUusBX9uW6Wzf",
  "key26": "5AYfX586yPWU9FgMWF2fgaqJPjukMHRESpPCdDVrtZZeoNggJW9Dqpk8asnWDnUJPYB9V8Y5YhLVVp9bEojNA8Ta",
  "key27": "2rSTxd9msgNZNQDUH7JCRrEc8Nu8V95PkGK1bFgPowXeD8DPE6Gechj7eAdus6PXwowozwRTTG9McLW1fyfZrFbQ",
  "key28": "5KzGRCHi798smD9wpYj1oB6sxJuxHFZxvbpbhwTkDkhacnvD831ckxbMNhY9zus7j6HMkQRfhRLbSpA6ommCJMEw",
  "key29": "5HXSwBWykL1PwTafvHdjhYqDJNDtkU1KjnuoB5C79TwptzsVwcbTnXZzzY3VQQstwjJ5yJdhkeW1339Q2wnrSYdF",
  "key30": "51BM7gu2rSBVMzYy5b6LhKTAp3bE8W2k16DB6FedyPxi9XDpWsduv86vdfUS4zLADubzaaJCuw8FNNFPy1ycb3ow"
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
