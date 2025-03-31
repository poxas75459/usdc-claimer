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
    "5WnCB34bLBgGMmUrSHWxbmFvpujcwSDFGNE7pYeeETZPwRcDvzZrnSAfJzkWthZBWG2vGMj87TSnH5YsWLjyp4g7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kTtxdEwSwzgt8BCkA8DujFYD3iJd1qxur5nY822zFqL6R9EEikw2J5NHEiKfmPCUSzrpfNqaMJoZWHR6qtaU23Q",
  "key1": "2k21NXTd8noV4CFb21f7XhnZ1mREae76AhEFGusGJaTeaBJHVtK9Yqo2efqsjjwzH4P5DbBswyGYHet2JmRgjaXS",
  "key2": "2NYYzk73jPs9dTXWM9ShzgpJaeqYysEhxEAYD91o6VoCXsyREf4qQY5MKWrmVbC7Sk6kbRbSmDmhrN4BZrjVPzpC",
  "key3": "2UzEcxinrpk7kNghfM8aKqwQnD8XgVZPWAh6rjSvGd1wNs2WgDaaMyXDzc1CYbW2JccbciiupBuUigty4sqChJBy",
  "key4": "4XFoVR4kZand1gfPmpjpDsZmSAD3MqhZxv3AMvrG5nhiByJCLoKLo8DRCbay2JFdqPuYQYWQYN8NoRRAM5qcTbQG",
  "key5": "4FHfQ4AoZF5wQs1qbKrmAsjXyD4aB22NvWj5h2ocag9ite7oVDMjyfzvH7Fh3er23UGti4XWtBi47qhz7z4QN3Rd",
  "key6": "iABv7oKbyDHwYmKjYMtPwfVaGnUZGMapWmnUuA4KL8K8dSkEVB7QZqBRk73TAwoPbYu9f5VgC9SWn1SjARmkHZz",
  "key7": "41gLijbCDHJ7BsqFtT5rChZ2QjVv9Q346CQHkvJYCzz4Pa3hWKGZPoMRqySC4gjCB1w79VzvDN8CucD3f1QHgzeb",
  "key8": "4AnMhXpmgDEtz5H8dWraZpz5ijR8adA6tDRkZYvHgZCW82Bmz2KtERqtN6DBeuLSdLyYQzCSXeyoFL7idj6reAQf",
  "key9": "fZAjNjcvWVuPXTnvTadFsoueqpxme9JTGmpcY5MWnETi7NWeHgkHNYBU3a6iN2JpkoRrjW4q3xXXE46cHtMNpQK",
  "key10": "5pcfBcDemTAEhYF9JzxxVBgyfZJdEA2Rbc9ziAt8GDrHWJmMHLfkJJcumfB8s7VgtbcSA2hGbBYQkGRdxddgm6Lz",
  "key11": "3NFmH5GhNwkmZRHRTmRssQBmujJMVLe9z4hZ6f2j4WSTDVhjwySdvSh4smd3f17ehHzgi7mJ15v2sGMf1nEQ7LvE",
  "key12": "1mikXQ1xumC5rFbXvm8wFDrSz3J1ndRSRK82RLq7ckLxzFFFk43BrvjP1rh7Fg4L9ZZmkueWHXi5H8JgoZKUxkk",
  "key13": "4TNpGk22bsTupJVkfuMmkjGmW53HnxK9BKWYmPvkUQToUoFbz3UxHiXw6UX4h5wHYffG3FertvzbHZAuLhKxgLS3",
  "key14": "3EwRBeqsTVXv6zbCDRrzjrmv4xQTondwtdycwe6HxaUWtnbwnFKt7tMRdsXTiSVZKQkRZdVuG5ZrDpCfAWB1czV7",
  "key15": "qqsLXSo8iLJEm8BSQGod3C86KsLnHfQUGUn9gA2yLU3zJneQ8Hf3qiM8Q7ZuaHysrkMTLqkHBHACS71AwDNj2rU",
  "key16": "5YbcEoqjEXjkwSEpc73QXi5nNkxRKc28meiZeekSPYe6Lg7LPpa8QMLBNXvGWpXPNrvXt45ojbA75fT6JmwVDrZ5",
  "key17": "3sxmEcimoGVb9JGMEKhRBeLLoF5LRpZwAJ7kFHJnrSoR9fgW3mdSANuDzoKbLdeSm9WsGGMDCCqvi6jNwsqKqsbF",
  "key18": "HL5nykvJeiBTUrBKteVqmzkHRyLcNmsy6BJpdmE9MyTiSgM5e92uGJcg6p6EqbdN64h6BbsLmkwvV6GqPs3wu3T",
  "key19": "4eo9P4oPfFXwRtRkeuRryMyUr49nMgAhD76vkPvW6cihEJLRqRn4A8KhhJJXtdSvmQasbzPAQwrurpgqwSLZ3cm4",
  "key20": "5V2f7s89uYHYqjdisR3sJfyhk5vsfMMf5aBS5yJVzu6stUzGMr5JPqsCaHJugmdkkevjpRp4g9n2LdHP7wsmh8oD",
  "key21": "EAupLyAEf2DYgk7SCPmti7kwTw5i7oeWmNNMTwHe3NcbgnB8EXYiJEmQ8Ubbmc6BrrGRwNNj8rcDUtTvGGcXvAT",
  "key22": "5dQyj5at2N684kFTQXzWtRK59aShKLgmCN6uGscZqNGREMAxFya5KUBztGGMqyRdXxy6Tf93LpGmnyaRJFvP4GiB",
  "key23": "4DDLFFoibJ7HkBN6AVLzkcYRj6r5QLSen7aduwxbKBhUZcPiTxT2usfLDozd1uGFJXeHeSTBvrwXT87sKcCjUWUE",
  "key24": "67Az94UusezsgLDNtK8RtczTK4Un5dLZQQCqvcJvJkfgCVXCCuk9P6A7P38FktTR7EnbtVdgjMTAutSqiP8kbBPN",
  "key25": "5DK53oLbJAx1feamQXMpQ3xeUnh37zJGsdufdcrkqxHxGqmMNXn5QGNdqrbwPehoGthtpkpwsmHmNEh5YrsRygxX",
  "key26": "5Fvm8qktQrRKQB3uPgM9h4FKkJdpAHYETw51EYtH1dQsesW5eokvr3oAuTMQPt8onoPkwhXb3M3s3ekpTsrnVTjy",
  "key27": "29WRpFjgwfMG1pnYRTtTL3JmjhDNBgUmwwmLhUfoLpaa6C4m8CAAoHgYPfTKwqXG6fC99ZsJ1P2gdmLKHnuNpuC5",
  "key28": "3Yqe3K9fsQBBwRWRDX8aULx1VfmsLrmEMNq4sSsGykfqks9BiSQEqAnWjtjgMecNCquc2ffN8hPYzXrHsuzpymiL",
  "key29": "4dzdd9jmBWk9zG8qx2Yj2oiyYhTKdzCrqDJqQsm6x6GAXAKjsaLGPEuN83wc2q4yxXjN7dq7YhK5MmndF4UtdgN9",
  "key30": "2q4o9ZiTRPcY2dWssZXuyum92L3FumTGq8K1aSxw17cHGaBoC9icPxPWWCimtQjw4YQBdxDMcmARatnJk9g5zJ1y",
  "key31": "YoEWtakpkvUExtWVgZBjo956nE6YYTV4vG3XU6Gv69gScrUb4wZzAX6LgoyNGJGA2TkyAcdQwH1UrUciW1Z2MBn"
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
