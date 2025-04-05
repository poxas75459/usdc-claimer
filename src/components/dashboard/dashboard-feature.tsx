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
    "5nzaFWkAtrfc8fNTTTEK4ftH8esDeFfoz9gXCzJ94uZX58YA8c8BcZ6iHtsQeT6o2Tx8i2G5nHFte23irMMB2vSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J3kHREaqZKBvGmSw3jnEKPUR3JcsvM2iceUe3RqBvK3wdFsr9Q2Hu2TrQv4oPyayiMfZT97sQ18TRBTzCVYNmD5",
  "key1": "5b12CFidm7yFBynQ5TSCPHxZoEeemgrKbTpuGLkC4kFWGCtw8TQJR294f6dt7iU5CgL5MyaF8WkBaD7uSEFG8HEz",
  "key2": "2oLv45SGHCTFTtFhu1Z8S2nFufYKWKNG3TMT9y4u2vdaoS46Zjj1kCR4iWg7eTVNdMA1sbqYL1qsr3iEPhDrkB1a",
  "key3": "4bd3QAtrB2tonoZ2zYk3Tc7Bc7d6QpNqKsPxf4Z1z2aSZQdxXhhvZKRF8zG7dFCWphrPaEEK8a3WbqYB5LXuiG5a",
  "key4": "64PF5HGRdyt8ZWRMnmyvsub8Ws9GaMm1GHuYzzBseZnAFreZGJi5vsQTXaZ4A1MhQYNmyCwHJPW8UX3eZKVcy8te",
  "key5": "3hjMSqNT22LuwAoTM2D3BdaoiQrjUhW5vGLQ7uHWpYn9vdmBB1eZmsmbcZ6Yd9wbhH4QnZ5JUN3kEJHrhkoR8nhD",
  "key6": "367Uu4qsryedLdjo9XAC7tHqJRnjM6kKbwbp4mvexzQUtpUi78vEwtpeb8vzZ8hyNHEnWGd5ZJduRYmAJaVSyXL1",
  "key7": "8jFpDNjqggKduHLrT2WQNTcVzt6WNTV9DWA1gpskp4TCjYai8KpWjRoaxiEWK6R5kmDB2ecxBWGcekwnVhYUm5u",
  "key8": "52hjb4mkotzfKM8SdxkcjWBAtrSLKb76ipFDZBgkQQFrMzixA19kZPNsTB7ZqbzFjEqLE9UXiKVGdCNYxMD4FdQG",
  "key9": "3tkSjrLdCZBbYFD6ciboV5CZ9n755wZjS6Yd3nwvBHDhbJgCB4i3BLjcvjsMMUezmWXEwp9hG3k7duFaGDAG7DjD",
  "key10": "2pz374yvvg51qRFaXNa8nK3AwLauTJYse8us1eXWyPUV58J6qvWz65RuXeMqSpXwkMdNW2kZd7YtHK45Z3tgjM8D",
  "key11": "3ZAs7ktg7C6whonTZmVBfgYELNEhJTtfWMqrMr2KUYXHchC81tU7H24uebE3CwpmB9ee5faVRzxzjTtRBjoRwuF",
  "key12": "3qq3Kky4roVFhBZHtgiLNB2dotFVfjtvCxgrACrgd7rShkokricVJKdmgPXKCYHLYwFgKh6gLXGKx35QRcpJcvEE",
  "key13": "417JvCWxmtggkvrk9vMVPk5d1JodJtUbgEWoBEWt8hBdfTAfJ4NE8PitBfKSoE4UgzkHh12RZfYM8mmsR6QVKFn4",
  "key14": "4nYbR6TSL8jwTppUfi7W1gk9GMzD8egy3UU6wZ2TCmFLb1A7QWiDft33zWeymRQx6XhwefjSSfenFhuNeNeSZhQi",
  "key15": "3N4Aja5wTHCCLjSKPxACZkxgrhDmd84KCXtPsqGpQag8fBk3K2cnUWs6HDw3npL1mxjGCvgTADRe4UyAXbbNCV1z",
  "key16": "4keTRm8jREc4kzRHrbAiqbrup5ZwLWjvHstyBqhvvCSrV89bmyypJhFetrr9aavWc6ympSgLKVH3JpTEU1BqEcYF",
  "key17": "5hKz5ZPsgjAt5x8tJPPDLLszCYSEkxpdBhuDaPMsEgz6FpKKPwNysiGZFxoQ1inb8f3WhVrXiWNWTWBx8xWqmNDA",
  "key18": "5kVYrbMf2SvaYQg6K4CNgGHJgAcFCJ28v7xDnVwKESdkV6ScqWo8TdUH3vDhmLgAgo8NsmNFHFcVEADgvyb81b4y",
  "key19": "2NcEX7UM9EuJ15CXvVD5My9UcdY1bEz5ZUVxJc7KNnzNoyGkUCnyTfDKfkdDoXa96YzFMCfRsaH1pqLHof7u1Rg1",
  "key20": "2DAgyArXYtXEBioMLB2XrNow49bHFdaSXDwj35Hae6YrLBUGvgQwJntR5JozmTp2g7K5KY5aQiKoyyAaZ5uxnGzu",
  "key21": "3dDWQmQ9SxHfDPhybPa7cwt78odWsyz2UkpG5FVCxEZa3uA5QtKq9MAt8yMWxLS1YSYhekorWWSBydecfvgNn5LP",
  "key22": "9BusxCj5caKKvswR25fUqAk1TXeD8AaNA8tJZdSv9eHQe9msd3uZVnC6eGAdvVqfFKir7w3Q78NetwGYrKqwKTT",
  "key23": "3umj58FLBDpmL5GSSrE9ZQ3Cseog6RZyCZHk52xqgXeM2BnJ1NbUMyAzWkCPtjfeii3K67Vij8E9DcfuFjfCq8Sx",
  "key24": "2ksGydyXEmFUdmjHgtCxT7h5TizDpaxBypDShqXJzmzrVYgB47aFXoooXj5hpBuAZpk8ZxqgiqniXLEpZLX1fNfZ",
  "key25": "5F3MbQNpG9i44nSroDYkBiS5LTF7LkVQtpqUEqtVkL9fN7XFei9VTqawLnPVVPFuAVkfQoe72aQySWXj3RjBFqtP",
  "key26": "2UyELSjxsQQjpLS2p4544ZYnoEjwUGCA2tvhdmfoauapLCqQn8Q9naUzS7TcbnR4oDgfXDqbQ3v5k6u2WMbVxUx2",
  "key27": "432S3YCUuzpHXLDSUPUWHYwF9XVKyYQMBXGXRdTKTb1yyEbFyp2mvwdY3wdyvh8vJpXNfDWTCe4cCTwTY6mTyREv",
  "key28": "65ircNso2TXu6KivHvChb8Y1b1zvAwWXP1pWCYZK4p9Em4daT2exJT6Jfa5XH7hYaBKtakGKnFaYqV1RjMU1mV79",
  "key29": "4vcWYQWAzPJ3EFZzcD7kMZdr2zTfHbUuReYeQpi1EYCto5b9AUGuoE7xq4FN7fvK89qdQN9PhhLmPvnYnjvKDNn9",
  "key30": "5JCwcPS1TfLc2nQ3urxCACU2GworwCtcv1rW3oFjsjNZUoPurjL4TdhQEN7MtNf7zeTMvjdnM6rCeCYEuunUgEW6",
  "key31": "4ZGVph3a7LEntDrsP6nty44yC8KD4Z5aD8Nu4jwupCdgzGXZFDWBhmRhqmJcdqnRkdijoZL8inXKjutGJA8DRqFR"
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
