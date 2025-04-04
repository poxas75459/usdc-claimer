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
    "wyyQ43Qgwjy8RkMfNrS7M2FfJVTsJJi2ckEoAfv4merGPiAsuz8ZRKDLtcFNKvEoVjXHKosQtA6QfU6o6FMou1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EuGSjc3EtLQUfAiCFJVAwqtZaPP5fmQZbuo9nKyf32c5dgrgMYxvzHGmC5f5ZqWHfmQhXqyzkveiAheg9HuuFcK",
  "key1": "2r8fJkV1v7bxRoW9bZkA6cVa7SKQVinDZLkK3yZ1RYHn7MPkABBonvRCA2wk3sxegVyhJhsCyAA5xLCDsK9XKKWz",
  "key2": "5rgvuMtc9XUYKV57XuqH92S2LgozyqapDqMyay1S25VLaKSNBPa8hufeTxdsEDQ945QFeq7t6dtWHckmXEbGtaQV",
  "key3": "4HcvcuHuqrk9hbXqge7h6UZ6sA1UXjuiW8xAwSG6qAp2jDgPWy4woEDM7FikhC4mNRoirb8eJeF1kNjenWCmSSp5",
  "key4": "28tkJXZHMdR2SE45cNvtS3qVtFgGz28BNhYKNGSdFKyV3wmkyCrkmzEDU3a5jqVNeuXFZabtinyAj3WUDbq9BmVP",
  "key5": "tPrdzpX2JbJmV8WEzTr74inocTvwkzMg4gkHgiLqjT5HvmR7WCTs9pxw6ubnFsJXHhnzA2suTd3VEg1c3JSD7b5",
  "key6": "38W3SuAawwRjGxN7FJqksWhM3nNwwU83R3mk5Z5yqY7hZJzQrPoSCJmRTu6ruhMXkSqjSwHC4GLqg7r9UNUEvqi3",
  "key7": "3n5eEpeFeWoKYZnFMYySxFj6oYk69rjKeLc6V8tzcbXmrWutpzz6kmA2gu1VSd9U5RTaJZZBXW4KFoDwGCtbcFqA",
  "key8": "5R8mhJemQk7Nc6tDorhZm5xFVbKpgcZNHtR7cZB1qFd4fukTKFaeZyvCQLuqw6CGKRHtT88KVhnq6LjsAPW9cuBk",
  "key9": "5dhDfkWpzLpkkxNdSTwtMdN85tGbgZ7CVyYD75fJXoVTCNYjm9rndupLFJtTKRzHc5pMTkCLfPrRybT5SJQbqJDj",
  "key10": "4UteskdEbmNnRdEAHX6S7SaCc3kPc9UcMWtKNk9DQKFQkiHWN9DubJ7guqNrZ2x5TCX32dA1fmCHQhiERLRPHtvQ",
  "key11": "5z6aesRFBLw2bGGDDfGM2UqYjMfDAEca8T9oeevBd5rGvQS6brs7uzq1wLu4Y3pJj5i2G3sXE8j492iJ19kMnCTj",
  "key12": "42nFCqRn9myzzb2XWSusS5o9NzSo8MowonsP5VA3ynhsLm1MUi4vpVqQmGtgK9jSs4K3FEcXfzCEHRe1kC8Xeedo",
  "key13": "5V9FxUBvX2h1JsnVFVe5Yok7KFyoFmz7wY4XK1HLe1atLiCeH5cmMuSaYdsFLb4FtYj8kkKTWUqY6oqgQkToANfy",
  "key14": "5zUyVztpJhhqk82eKvdZxruSpLUzmvBgqTbu72vYND14tb92PFKxw3ywuLHLV9L9tgzA2YcYVRVBszQURyoLFQmb",
  "key15": "9hu8rShPLY4UnETRLUoNkraLfJygQaPk7DaVEyzENtrGtnBnjRvDVJ9MYmTzbxhdDwn1QyYYPmi1NBgff2QW7sD",
  "key16": "25PEiCEcrf5PaRJ4qZBK4voQDiJq4DQPi6RBokmHeYueYcp9rAhJeFWnvF57kgDAGooje1MuzJrVuPe6dSWigW3a",
  "key17": "63pHqvWJE56FbQU5T2uX3aRgiepsnAH6FF2dVTwDxByH5VuEarX7gQAAGQtKCH5oXmjmU5LybBzgNz6d9BcMH1n6",
  "key18": "x6eWjNPck5RonWCG8uRsefuJb1L3qLtBoiDjZm9MMMQ2eRWr5FTKusvwPmfvuEPoSEvaTrxGV7izgV5sGGuJ4YQ",
  "key19": "4cLD9Trf4s2okQFpXXepLpgm4eFnDavbz8RxGhM7VjGUj58W1DMEcptKzQpCdQMcNp5KAfRQkiSdVeoccDET1bo6",
  "key20": "5mBYXbPLxNeiwPBtVNmD78yYwKHkw6TehQvUd9CiJVRNGSL4ZwtDxGm2LPMRkDjE9PgkzsGYK8k3ANVCYZUeWAgj",
  "key21": "5sQ5onWNmUFGxU34gf1temfbULyV7fqwwKnbCxPtSnWuVhGPgRXn7FLAN9Vje2PYpEa4rNEqwpLz9isHxsLUvm9G",
  "key22": "hDFXPrHYMdLQDwTGv3xzKwuNbmcds1ckVB29abXRx4L9SnePcgUqHd58jhXQncCaXytQpQNYEWpTYQVgeyupg2z",
  "key23": "4G1LETy1LP9WjadXnU2hLeYan6v7qiL4D7kqWPaBFSqCdCcT7W7BGbJ1ckcHwsFqg6z6XZw6t5GNAAh5v6EyGXHG",
  "key24": "4fPrvqVcFs72pFhUwK8pyHjMsivPx4mXes9SdEYHCGkwy5jwuBdhhnCRg1HQfne3UsExoDLMKdcnmz7KGKBtfTFU",
  "key25": "5xddRLAoksbjhduEUgdWQTHMVytwYcK8ZFrAV9Mt4S53d4cyUPXYxirqdLavxnXMyXuvVuCC9JJ6zUxM3Nho4ZKK",
  "key26": "QXUEfyB5ihft4qf3dPxXVFFJkbsz4WgVYMTDRsUcEo5BQ4sxPZUrxan3dZ955nPqzsGFf8gCJJtZpEwXeTTM4em",
  "key27": "3eeT8hrUyop9PYnUa61ykTwmv5jp6U8Pp8SJvcWdB8s8n9CuaacXht7twgZdViWr4UJ8V1CJ1EkF2E4Q3ReiPdUE",
  "key28": "5QvioEWkbrtufjgnv4av881fyoJtq3z8gCYp8kP2KUyFDWZuLUBZtdKHQBvJF7YeoDyamvWug8mgEcK3ku1uBNT1",
  "key29": "4jYYBUM8Pjo3QLcARXAchxjWzxAmUNbNrNk2knJ1YV1dJEYS9zXtm5BNhhSd7Av4L8AeUCAorrFocTkiumYF5Cdf",
  "key30": "2R1jcJhgPBgTCmUFMmYrzBarmdHLfiHdsBh8nVPAcfpNYaFuU9BqZTpepSGX7JHANjhaz94MWAdTVMfKRrZJGbXp"
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
