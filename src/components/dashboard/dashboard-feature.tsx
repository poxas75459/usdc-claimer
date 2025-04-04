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
    "2rRuVXPfey1r5rD2xjtAgQL9bdES1p53ukMyW1dieBVBEGEKk6NfJebC3Eih4ucDBv15WbNpp3Xhg9Z1p7qk6iST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E31tELCSMJs8zcVRYRnHifEhzCELAuXsTurZiYyspfAXRkG8nJk7cuxmC47UjS1ZSZxzCmVYqKf1ayMDBLko5zD",
  "key1": "2yqpCVVxc6DjaomkbcuR2zZp3tEFqK1FK8B4h5YtpuGBXACsUW5a2zix7Hk2413CyhMRvZzB3wq3HQX1DLAyVvni",
  "key2": "2WqtY3TLRbCcViV58P3qMKUgULA6DxnGwhN22Cev2p2mqejSnBh2vt4kpfEPHHJtdY6RWob1iMTHwzfEYCiieB2t",
  "key3": "rRknNs7e7K9Q4KXnKWJbZ5n7jKxFRSjrmb7ysJuUrzn1QMXiNM8gUSrdH88heCfN8npqna2c7ZaxWrhRVjXikyH",
  "key4": "38BUA4bBLw2nMX6BNLz8UahLdUno8mVGJRV3HsEidTV6sJyvHmy42iHHXNVdJqfMAM2sUKvp6Wgb2WT4GP2KCMpD",
  "key5": "4522mj4CeeJqusUxVpu1md19Xhv7hpc28jqbn6yQ28YGSzunALjridLHq3Jwh96JAyoo3fb2ycQqUAFZynqiy2nM",
  "key6": "2YUunvfA4noAhugqxFoDpUwL52BMbhqznVNmHgJaHaSoLzxi5iJKjz87RFYhFrCux3wd1qhoDVxQn156JSDeGXfb",
  "key7": "5oEJ71kH3Xaa6R2HsiV3WBR814x7gm26Z5ckYuDynrBLiJXnsZc9ZUqWwzLJ677v8TFnCD2JUJHxC1N5vkCNBX16",
  "key8": "4D6rryPxBv2kxkXdAomtaHZPFfZzhEM58QXJ4TFxfs5U4W9aKCk6fxAoXiCBacKi6JKHFdb5iBssFztJ7Y212w8H",
  "key9": "HQDNdKLvPm47gqKuRAhVRDzq8XMnnf9gZotNfE9gemJuLjUyGjdDCgWJEq2LFfCZYzgGv2LDJNgcdzuqzgXtY4E",
  "key10": "5i25EUjEEaD6E1WqTp6dcPASjzMEsghK4VVafoDPM1RhNGwRD7ghc8knevUP1fuQoeHdr8gfiD9QTweZWvSXFoRK",
  "key11": "5DQZQZzUXwE6pey9sYXVy93Y8LV7cjmaUKQpkuwt4M6oiGtyG7ywzDwsDTA8y3MbTht8GPavJDER5BKfcP812wKw",
  "key12": "5Hp7dn6Uww3QDf1Dm4zVFyHZ8ZQqEqj8vmhfEDfaM9GNywhE9FpYmXk1dc41KqW8WCDCiFYSji1cpVNxMTWmxLx3",
  "key13": "WN5hhvDmsoSDFvxKB2vhTQqE6KykNaATfnRTLfhu3QVmw7QioMvaCbqPLrkwPD6GzBkTULFhrSMqRAZCnx4wxsk",
  "key14": "3STEtddfJMzwqmYU8YMifCZK9E5wyNy8o5iTHXt57W2B6DtWu4ZN22mWQEKNDVE7ud56CPiUmtzecEtJEGzMY9xo",
  "key15": "3zTMKcaJbPoTyje6TRsiK25USfqLdVAUoPD3UmdksHM7q1RcSdL5gMamLZQhpNMqHUrY7tk1KdskueHyqYbBcnjr",
  "key16": "5vTbG2fMLe6aqvzQsU7TbUmBWCjC6YcDLRJi8utU6LqfHW7aRCTb3Lzw9pjBVgxm66nEPLiXYDya3NQH9zD3JUrr",
  "key17": "5LVQYT4VFXQDDF3iu6shJe1VRXJDgvTjCcqDyJXyNSjeYYvDZoEqd17AKBweXeLDnuwar18WLnKLcTSRUZYFV62M",
  "key18": "wxbDs3rTd7JwX723xR3QHg6gxA1BtPrd9E5bwxA2YvynjXYAc9nRcpoX4ssgvU4yh9KtgDtYKtcBjwuQ76J8xEL",
  "key19": "3RJZNEeTEy2noH2bxYxKTgFtt6N9yBhxgZ1CeRkBeJCcrZXVYPcq9oGTiEz1WmgCsDcCnRAAQpRQ9MRFgCYNjxe5",
  "key20": "2Ek9DiMX3pU8pFeX3g8xfkmdmY1eE6sQA4kL9TjaN58CdNCD2chJkgzocy7G3C3U8TqomGG4FmbJKfLuKqdWWLfi",
  "key21": "2khX7SvPeet3ZsrNzMNRwW5iqQiisPfGewMjwwkEyL1JFTfqvSyMiKVBbCzNkovZRwQUkrLm8KJ3XdP5kLJ4BXvo",
  "key22": "UbcQGd1pup9QAWCrfajaU4xEj8WPt5rF7bvSM4v6obWENANNcHHDE7BmS6SnJk7wgugwoTqT1LmaYx8EiQxiUVa",
  "key23": "gaKfhQUUS5MZQ6KRKzpjBuF8YSVpXV179RC9RsT7iVQimZvHcBbtcfXegDLBbbqxz5PLAGWQBNZx2Yts9HKjp4R",
  "key24": "2GxbZouQ1BQsvY5CZTLcwBd2TC5bAZQw11hoA3qeJxpzesbMJTy2NjVSHmDbZ2beKANxtxk64HRJm99tAfD1gWtU",
  "key25": "586hqVjPRjP5KVygB7xDJnhwrtQtB3bjDM7XSk9utdWGc9En6vvxaoQqtKkF8FwAV5XTULt2Y5PiLeiJWDokXyQX",
  "key26": "4pmBXdg4JbhS66CFurLJHtLVqd9anzkuPy1CexmmEYDCu1vECSEdnPwjZqJSzKpusxuG56gGUCzSD6oGmREN3MPi",
  "key27": "4by39hmevFthuTARb1Lp471PFy2Xb8xm4Cj9JuyhtxpbCJFof2aKuYYMBSnM4QgKrjVdqmCu41MUk5yCze7Yvphm",
  "key28": "4GXHuW5kYivQf2WRnBJUQ6SoYAbnu7nhePt2sKUfWceN1HNHmGR9rzACtXVUBZ8c9ydUxM52fthGJ4JEJwR4C46L",
  "key29": "4DFKMFWzdcNCsz1Pip8GtuJRr5S9FqeTqtX3BxRekgnW3Ct5J6wjhntUbjzxMV585eb524qEvKuVJbrHM4UXyRKo",
  "key30": "33JhfC1ecf9vD44EcF9JPFe2jwqyJGYGvZ8LdwfZAuLgEiqDcLK9mEEKXA8bfEgcsPFuy1p8id8LfwyBjeme5xeR"
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
