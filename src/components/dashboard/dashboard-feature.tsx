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
    "4ajjrzHrxyU2D9DibcohWAttqUeAietxsXExyPqsE8X7fCM7CUz7L1jxuDFSmVYRvR1mnAWmwx6LDtyuCNP2CQ74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DDZhn69x7CGNBLFCki63SHcxAeyj7VEic3tTQgKgYQkwNVPLU4ZvqTFoJ4CstXo2Qr5THXSzAtkkXt1zNkTeLbY",
  "key1": "5GYXU2y6UpMRwjs8X7pT3mVmgXi4mxbdyQoNgFgvYjwdUdVhgFdxboKpjXJcCkN9mnRLRoxyqEK3rSBXVQcNd2pu",
  "key2": "4PFLzS9zKX4USTqBinwwvpHfxHBWatWhwgjzHP1KgQg4uKs9gu6sjvSUrSKBqQkzZpDhBT9kXs9MXqL5gjfszWnC",
  "key3": "sbZMSjba5DUhsnafK8eR7PvVYb6om9VUXw3h59QxL1HqFnBYVn5qVfMVKVQZkfLUvLQDcFK4gh1ZdkED5pgttQM",
  "key4": "5Dmkzdgcjjne2xaRX6tNjVFUb51dmD7uzF9L5cSx7hwzxBKXW8vxSdGhMNCEFV1gQBnWY8f2Em9T21nZX4iGeaez",
  "key5": "127C7jmkSuUUzpk2GsCrvWkkGaRcLipfMB4CDeyKeCuVSVqzJRbEgtXrhEivHmBxZTBY1HeedmuPTth5weNmGXex",
  "key6": "222o6CFU4ofTvSxNhC7TuDQvfDjr8tRzj6PuLQqFnDWdy3t2Z7f6PANrQjN84k1MfsixkTqom7fdfbXq7SKE4PWN",
  "key7": "ATjUT52o6zFijUpzKgcV7sSDgdBNbQcyHxmUHRyXVccAr45DeeeBF9QDBjJCAu4iskaXaSkp4La2YyDCNnVwxXC",
  "key8": "4efraubuDr3LHw46fk12KQT635tAVkj1p9EaqNM7npXaCZAYcJsyKc2bvZsD4FPGo89jteV1vqrR7T7Xkw4oA8Ng",
  "key9": "2dpZ4rNMy2utdkBPcHSeVncxZsSgYUB54gNoX4RmZK7ux3CgDhRbjXCppfPxxtKsgqLT4B7TNL1T5XfrZaJorjqZ",
  "key10": "f3PFhQb5mcqa6dPoVfvHzCkSCDdHHwSgG3iP7P1EL6qz8u4ZWb1WMMDxgwKDCraFFtY3Do3Kw21gJv7VdxH4HA6",
  "key11": "2MdKej9ov5zCxqdAQXsyYZBGp84ckbtroZS6C5zXTx3AGY3z3NjpK4rtL7xYv6GKRHbiSDD3UyMwSDqgofDBBAMw",
  "key12": "5mcxmvmkCWdYeqojsYGJcJ6eY6V6Ztg6SFLsBkikvttsXXb19UhiZYmZYgqP8Z2JJqRt8Xs6qeqoVbncg1KA4po8",
  "key13": "3Qq2wdLRJKTwJUWTQQsMeffXjZuzVjiTbBwbnEKYfGxkJxFMoDixo76B92Ezk6LSUW5c7y51EL4ZJ3jg4DM4tBwH",
  "key14": "5tdKMGtEVbXw4RZRN48qaUc9c8y7zMPrNzJHTTZUDNVxbdWqkk1vUvaKEqAVj7hStNySUaoxbWmWoFQDv8LZdPrJ",
  "key15": "RwfkEEw7iqfd1Ytnt7jFcS5vR7ybXQ4Xv8csvzgSitfRLb5SnmBJiTkFouvPCuuKcW5BeNcmxcU3C7Jz8eEuNi3",
  "key16": "5bdE8YcauBLuY5BC4YyP6YyUufC6XmdeJyi7iHbAW6sF51HDSKcaxATSYbsAmK4Do32aDTEjtL9YmRNRQ9WvP5zp",
  "key17": "3RsCxweNNEj6tpJbizD98twyo2Af52kM9vHogjDnxTafFNhS2K7M8XZ698nZqea8cqRNJRPwcnHapYMEGNC5HVCU",
  "key18": "QD4WeFnyd3pVAbxubJPXU4PbWFo6DUbJY3C36qGU25epZkFiWwpkfqCrTuZh7WDduFHAaQj7You67MpaCYQ1csP",
  "key19": "ZjFjRrEp2tmquofpntw4vSR3smimMmNZmRuKTt3BNdzTrJtJnkYXxggxosyEmBytsiBpZ9cBhqg9pCTVMKVrSsV",
  "key20": "ouaJHHD6kS8tJbErhfPAnZC7EgcJpns55kjwMMQQKp95daTb3gJmXF4CpeoQmT4b3KC6VFdFDCgjUdhfZjhA7f6",
  "key21": "3iFftK4sygcPKRrzLSyA7WQukdUAsuHk8q6NH2juXCVE5RP8sE4RZrsCGpbTApRV8JbMSHL1mWbDs1CwiFB649me",
  "key22": "3tP64nUKds9Qg5BnGMMDAbo7sqVNXgB8tNroT7gXHwSCH7MN8CadYAPcSofJiTuc2q6rEviosBNpg5nznTXBqqQA",
  "key23": "4f6PTuV9EnSy16UJk9AaYhZMU1eGmvpeKnnL8bSxPxkB1D76DZRjUUP31rptTkyffNCEyFaL1wCZBifvDevH3Mbg",
  "key24": "3gr7U7diVHQBrKzCRy2LjiSr2SHo3qHdDQvktLG4Hgp44jHSVftiN8dvD7BhHw88vSsaYAeyCpwvn2sAFkPqqpXU",
  "key25": "5nTKMQAdA3Un83AbfrTPhiHBKtaDoKZ3aGaqYzCVuyR8jt5ABWWjqDyFGeySEDPkPpjBCTmYgtvQHqZWoHtKNjVj",
  "key26": "3k2WNCk7x5f2v2dAshvfB7nm5dH9jnAsdUS7Xeb8bt6aDyLxptHC4EhiWeTZt9qxdgURsR6M27b3GukE49kMiQEQ",
  "key27": "3z9EsnmpiXmcuHnyYumuDMZSA16aK8Mm1PzMuSUND5hzjBZ7kbrEgM4q9xenecmKtEgKf2gmZBwqiX6YH1HtsyEq",
  "key28": "63wSb9yXZknc2PmAdQtVNLggqn46UorMR15tNqacZpQ4d3TjvKxJBNCsTQzmMq9HmuNbwSw6K7PZ6iKAQbn9qR6N",
  "key29": "2LKjY3j7MYet4prdMHWVDu2GZHjLjwXPtxvJxzoEdC8xnPbqt9BKaPNfTYbTBn3MkGWxkkG8BssZftSiWu8b8cAj",
  "key30": "1BVdaFiiHmuRemcMopsZoWs1BMMjGDdqJdkWjQfBRoHUot9UfNeKjWAC2KYJnqhMaeuoLwrFMK4dvCnsPtj2qpx",
  "key31": "JfAeXEtXb69oaNUYVF5cunoHzysv3kwFdbp5GUbNPCCtYR94EEbDiX2JSxD8RvPgYQAiBdBbpHkX72FJTPuHLPm",
  "key32": "4v8WNGBHixEmcpzJxFqM19iDyQL9ppEDnUTqM8K4PMpW7jSVDjyX42VjPQ2goervhWCJnSkWGgRmDbKmNgWecodL",
  "key33": "3YXDbHVjc4pTkWErnRZLD1Jc2rTBRouj8VLaE1Y2VdmMSm3DKWWQqc3BVQPgjcrmMssKZHQqWaRmcNnbg8EUAfNP",
  "key34": "v4gwiq59jtbZeSvpPLzWrnLjL7wAQvA7263hsoJxAqnKR4qXuo3EQME1FXcSza7yA4GQYJfC1kjwpGdJqajuLr2"
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
