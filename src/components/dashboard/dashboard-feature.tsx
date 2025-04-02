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
    "4ZVREYaERaLzrXnaxGRmm8nvjnYk5YJigwxSnK1VVJU7xeNoCxUgPqJokaxrt6cpXP7rzqBYNjnGoVmMsCMfLBzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56JNLVxjRs3X4AZxvHXUkSMMfg432GQZ1VVD2yCUWi3dmtMjzQaAt6Xqbp7ydgJBtzkEb3pML9k9Fo2uVmAMr3Tw",
  "key1": "rAPkRrNwgk198sxeqU9e2zpEP4qy9Qx1EmuDY17et1AtrFGathWpVdg48roUyHgkkUYC6Whp5uozT2hWsS7Yxxi",
  "key2": "2vMesew7fQRiy8Zwp2HvRB792f4edR8AJ1r3rjngFcN7VksYdzra1oYDE2fqwag3Z2ns145PHwCtASNh3bRzLeA1",
  "key3": "2v24GyhLsP58FkpHVhTwZWXoA85APRHEiLMKFizUZSUbDH2EXG8D4FMwUhiBUqHFXSwUkQgcGBbKu4mBwV7bwFJd",
  "key4": "2ZhFxnKAchUXRtiKhz4fvvwiF3GaHWkqNxV7sJKmse8kGn75LLJGGe3oUKg4zZ8mEf91nNvHw9GMuVL7TNoSfhqP",
  "key5": "2jhdqhU3BQMdaUuSxqAxpsy6XPx9SJXN6puPMX2V13V5HWRnyDUFfgciX9Rqkas3wVAhSkWZrdP753p5QYymbavY",
  "key6": "3xRpV6ZmyLCctth7S4Je8R9DxKP4mUaHaU2fnjyXhG84LmGuiw2fWxVjUtorpAbLhvoWVfH4p75ComoNGmG9q7ju",
  "key7": "CTzLBgCMi1n7CYyEket2qjxKePkkpARS9wvpc6QsnmSb78wnJ9BEG94Xj7atUgqRYBr7wddAdRYNUtaUvKcfzzJ",
  "key8": "5whEqhUiLnaLCvNLD7KU8J7GwRxYf9cVhDDV8SC5fyvRydLAZFTRbjZpbSZ5Pi3YCNn6bjrJi2xEy7tP1G1QaNRE",
  "key9": "5HbDHNkGenHTUmsdQWummMNMECZcvE5nVL26iVsGaNG4wEG6v8Y8Skma2m5thavQYdALms8JDyc3ZbvevUHjKZjv",
  "key10": "2hQmYCEsDHRkt3oW4Dz21ecmqZrP7rqBp4EvMAYhaS6rdGikB5DvffiUhKadmdiomrz7rPpdDnLaTfeetV6n53ma",
  "key11": "4BEaUmANfX93wTteUSfEFboGdrWvsvbkL2umxV4vnhdsJF88obQFcmZ4Tx6YSYCXkhJFxuXd7cb35J3t6TmCkYEF",
  "key12": "3svvdWx7bbLciXuKXHHFNZLCD3dtwrCr5wW7x6tHfXzNwQVcSYnumrCYvtnfSTBVtnxwmf8rCJkVEe2kRawmgxFB",
  "key13": "3Me9G7P9dfN1hnK3S3hQUm8JuH24GWRf6faQGWGz423AH8vHJ6kguU2X3nngfuD9WdMd8ywqJJQpHQqzzNaGMegF",
  "key14": "3vKGo7oACAVomaJuBzbnURZLFg187LMi7vqosKofYZCjLfy5dgWypFXGNXEi6BB44miPiJPzWt9SzhDLciQBSGwL",
  "key15": "oxvgDF5Kcikyiui5DGARNWU7c8uEHaj7qSsypyUUPJmjWkxtTYey9BKErC2X7HasZ1rJmL8zKHQQvmfGsqDRYdy",
  "key16": "4D1TiCUgBYSBBjH5wT7piMKv5tmVycshLpsVFPsVyMuxFiR7DEwhrvEj71fSjYgXXTx7LsUBWH41mwtrhaoYukbs",
  "key17": "HfnSi1mLAwqrCF1WXoANJBp8qnn1QiMigao4ySM1qnVbdpMVtVZBycohrogFafwsN5cu39yZs2eZQ4LjcxcST2q",
  "key18": "JTBWc3TZ3PvoewUy5dfX5XfaRNqvsBhnDLKi4fTGjRUXcRPB5f1WjSZd1VnofyYxqAPwSDrHjZYi2jyBfyzmYQ2",
  "key19": "Hr2nqUjEwEq6sHbyeRnJHafKxsK1dJLGEY8DdwAs3jSmJKBshXNo6nZtCxK5zUVzjU29ApWV9CwMQqMGaj7S94Y",
  "key20": "yaEjUJEaH7G22MecW6QEZgX6HpokZ8UoNYfscta5vpEwMcGbkgWWufqdBnSSZFdjpBHhtt4YBYYAqZZz2rNz51b",
  "key21": "4sTRQF4PTQvogZqLd9PB3GsNyf8bitDvQFv48dVURmKE3aJXHrKb2zB9Q1sK3jzbw5kGGsDD8SZRsFvPYkzJbjZg",
  "key22": "63qMpGwMGuM2en1u5mxd8YvmWuPRvV3qtDiUpCAFgTVSXeB4uyhAXifnS1Em71sFgMTPivPMAzGZHVyzXbkbBpjo",
  "key23": "5DZknUGNMnPX42aL5bo6gVT4a9RUDXQ1dv1Ln6BDqJBF3uMX3pfJsgM8C2wGVG4LNtFnA1MEot2LZ2kqM8a7fNcQ",
  "key24": "aF7msP5UAfPkJAA3Ab4dDmAhwnmWgfH6S9u7VWKaaMDB43ErjuzcrctRhNWY1UxoNdi5RaM8bCP9nX4CGSfbsoZ",
  "key25": "4kpEQLMcE8egQnSv4eFhAUw9K4TaSiU4WUUaqHXM6oZLvZBz7qcuWEgKVUoRkm4m3ncSLtB9Bj8kVgbow2K5dtDc",
  "key26": "3Yd9mCV3qrr8njYHNW2mrzLopDUgraLv8eUW5YbNkAKv74N6aXwSP2n1h1LRFs8JAkMe7P4S5CLw5qDRuPYBkmdA",
  "key27": "8raH9JPRxeF2Wy1m1sUA1S3eUWndE6PrXAyBHQYspNae1Rge3TzxL8RzrSAsbQq1eN7XKTqdwuVUXnmX8oSwbmz",
  "key28": "5zidxUisUuN4TPgDbuDwxDFXmnpLc3XtZzr84i8dKUfeNrjSuXjGakL1c3R8QGdPqfy4fQoaccgFRHgzrzVPMsmQ",
  "key29": "2FJgJHx1URGceB8N8dvgJvuCTcYaMijhEtWEQsD98UUnfgDDneDNKmJXmG7zrQS7whgpADG4cTxiBrbmDur9EQ3T",
  "key30": "5jJXsnc46aadL4S3XJjA1xTbjyu6JmGFJrWfToWHzx8mvCSn9EUdDMsySobXYQ7jEEB7fV6MTBKyBYEGdzovAgW9",
  "key31": "5TmH5JNPWj6GvVqDkW3q4DNmbagwR9ia82kVniEh5nEMwoHZagWjKWC3jK73yTUi5xp1ij8t3LiFNZjyTqhg1cmP",
  "key32": "3eYZ2AdYAkihFKGZLF12Vi2LsNcQaXBVmFXoJMBSYrXaGpWWJKKcREhpBKDYMdMmT719VDw6fGy8X3tFEakD2JCx",
  "key33": "3EptxYZJ2GkAeA2JLP1jkzkHpLFdUBWv4NwMnEqM3tZACKEQgxuaCaUyUEQ4YU2iwXaJBiRUPszQubpaJgdbGUvs",
  "key34": "3BVqZMbzQde3Zdr15cQrBJUHLCqAua3TQrQXCY8yFZ2wtQTLoNwZRPnuSY3qfe12Y2mEHcs7HEiiLuxAPwsvPRGN",
  "key35": "4jM6qhcsmhS8hta8APKuUc91HwfqpCzcQ7K69y1cMyY6NP4Hy81Pkmo1k57aJ2KKy3kZHWnCAeiRTxpSY7JdLPbi",
  "key36": "jG5kAd7u7h9YJUjUfGK1qdN7ktrD4vc71GgSbKwwAG92tfHhgVx7sEhzAvXde2W4xc3ANnNenuzcumJeZBA2oNt",
  "key37": "2YyYxogP7DGRASf8XtbpDxTEWBByQzJDEDbLCHYFfLxvtFdUp9d8X48sXaULCSkpdkBAwtAJqWgehrRPbRMVw5Fi",
  "key38": "2cydxKQLcHZAgweUqjzooAGurkmcR2sJ59qPJMWM46r1q4w7fUFYEJpP34nNwkf3znaTsJ29LgwegDf2VQaeG64e",
  "key39": "3U2Uw7PvhDgeVfnoe4D7LN1WuxbJ4V8Gr1dGfAEr9Bo7BocQDNLQShTk9SKMqmQP7NcwEsvxWN5o1pFNDtC21n39",
  "key40": "2Sw3fh2RnBNAjN12Pysy4iuoYKhnWNWPxYsvXzq5Ji59if3zJcBfyx1VYVL5gpaPH5U1vabzkisyf2EV9WRUqmx8",
  "key41": "iNM5hahrTNrS2a9Jdkd8jZUXfEHq9Rc166GxGXuPrJmSvZMqKdjA4jruJdQ7JAHNdfq2sBKhaHCTmFdo84N8mhm",
  "key42": "2eVp8uazv82QdPzjNgXbLp6b5VtJruDzvttuuUApRtFW2cjAVUsorcV7Q71DWMbV5jDTn6WUTFMH5T4wmdD2Btbk",
  "key43": "4RCWrxp3aq5y821nMNkPSFPdoUW2YN9spuBJWbc9e8SAvf4yp7VRWtHtdgABxpBojgNuPhCaAoW9oGdNRDtjs7rm"
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
