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
    "53beoCSB7rFXcKkeRQSZgSXqyUF7UZNqbiqzH6iEFMKbPGZ5aA62yAusVZjZV6YKs7Rx95YjbHZ171rLUNsZ5mAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FiJDJe1VAPgsGY74cAoyBg3kQmnh6JMYLsVh8Fx8sA7PUd6ccPwFG8waDwYkjqMbroaZXojebDi76uba2JuLYe",
  "key1": "2cqQ16BQ8aCb2y3eY6qBANdHitsstR5J316QHfZX5v5FC46RavC7cxdE8yGrch5sh1KtK65PWKQ9krUMSzN4nkCm",
  "key2": "2uUUmLtkmShREs3MrQggFV22Nd98wcSgD9XHHAmDGTPKBxqtKikdTcLXYpqKTLTAvUR7JoDhnoEgLJykeq8w5ii7",
  "key3": "5pFt1m6KoEWGE6d5fRkxrJR9oj1iFxAcFw8BxXQAgwcc73YugkzpLAvxRXHWpaVu7PtpJkdFmwjVG8wySwDeXGan",
  "key4": "3W8m7xdueUBqKmU2SCAkbm65Bc3rEcvWSeMJrpa8uVFAggs8TVKFXXNCzEB6KwuWr8Ni63Yj7jQPz3xd4FZdxHjV",
  "key5": "2nUdRcqKdydeUjtL2Npx72cWEKXKYsnYmcffq4xGfvnYWuRewCPtvtPit28tZSs5YWQdmuc78qGe9XawABcDi5eL",
  "key6": "47xn9PRa2uLs9xxguD7trQzPQfdxeYi7aCjn71mTB21eePN94oNY9ioQVJouD18A1oXqyrFzSNSo2oaRybC9Shgv",
  "key7": "4fuHwgMDembN1TnzL4Q548NEZXKKz51nESK3mkkdZEvbGu4xc7Jjsoun8ByQWVa6tGxUAFoU8jQ72BcCnuyaYNbF",
  "key8": "4ftEWpFTsW3NrrE9Sb1UbSVSB1h6DV56JLSzH8PBJaH83ng3DYYFS8fZb3vhgWAo5EZVbyfxZLKYRWMqtYCMnKWP",
  "key9": "sQWxJyuTygdF3wRmt5YapTQw4E41ZS8NiCw6BEyQEC8X9oQu51fjnBSoh3kZBW8QKqmroQiNSd5MUnaFufJASEM",
  "key10": "sL1LDhdg8c6UUwoGD54kwe1ruenS8RpGskrWrYkyJTxHeBvLYAYY6a61G3sbbn3Toip5np3U7FeYR4n4JGCnvUd",
  "key11": "4dbtsRdgz34oba3FJykEMjp3aUe9s4Kwjy9oXHprYggApG65RNCDEXYtVqz822SRBz2GoMJvgt88MG7N8NLQYMrq",
  "key12": "Wu4uHUaUjx3nNfWEwmSCLxAe77kQyw2kUv7EmoD8BKQ4EbQ4Fzn3W8enWV6qvfEqA8UkYGpXaYHHk7RE7puTkJe",
  "key13": "5JEi69XQLHA88Nsiam3P9PK8YJvx3mwLVddukZzFwZu4VMbsh4buzGXRFf6CkjDfdLUDdAbE2FGbopyXdCHGcB86",
  "key14": "5ecpAjK2yfbpgBi1MrrnPjevpJHdEWsiTRbeXLvjJzWNkBZFwgWzAEWUf4jkVdcFw5t1gKXtKkTFg3SmoCMTCHGR",
  "key15": "4cPRZPhs9VmH9xNrhhczDkgv7FQTNZaLyAgVsKZW8p6F5ANhhuRx5cVmrTFtG2wUUXA156Pd2qjGtinXa6t3ebzc",
  "key16": "UKRavbVd7uuHJcqDcFPYY61HpVCh9vKVMNMM7sF64hXeDbU8stNC221VN5dfmq6DKVVStYwNt43EmT3EW8ztemq",
  "key17": "2xXLo8NcDL8bvXhpLQ55ReiXV6QH1K2DLbspHZyGcTHQ2dWcVuUYahc39iNWh6wKWL12ZMpzBsFLjjz65vxqSvvU",
  "key18": "4cmiBZq3f6NZevW4XkoS9f2ykmui1QTJM5z1u9LAZxo7TgRBTG75FzZXkXzEoyhaH7niMoyNeu7UN5S7Qx5AACFM",
  "key19": "upyYuGseAUuE7nhpFp68e9yceeNLCqSDPXnj5TTMc4rPoufnHhbMneSXsrbyUoXNK1zWVfzJ3m8hbjKQsWF5AQu",
  "key20": "2LwvL2WJiQd4TWQxxtqYMPjt5nQbYPLNtrjZY3rL8gCHYLvXdmcmFNQDTdqiqfXCx3VsJSbQdffLuEcfnq63D4uc",
  "key21": "64DAaZsqKi5KH6Miqgr4rFuj9vVjrFwBCiQS8t8yGE1M12bRGR8XgZbqJADcY43TSmgsizRL2ixECa2LztPifKUL",
  "key22": "L9C8VA6pQDB9e4XShsYHyCR1DGMxe7HaPrQGJFeJYParM5fHbL9QXLLYKyD3WojjFektqzbVizTzfuohQixFa4v",
  "key23": "5txkxdH72Uq5u6N71M126RrQgtSvjYNnatEU6HPxAb32B2cdENy1YXQQjz9HFfpm8Fdcz2EczDpgdJ3HrNm5eAhd",
  "key24": "41wLGoVzikuJMbLi8AjiosmWxAKHhBFboCz3TFBJBz6W7kgsmxmC629t99gAtEgC1ALS7hU7pmuv98nh15xkv34P",
  "key25": "4L9RhW4E3MTSAc79Nj4KkSCCNyVfSFBHuG8eQAMEFJHhgjVJTDxfEX1vinKykVvomU4wNEwZP3fGQFpfW9urPeau",
  "key26": "hFRk2cAAu1dSxwD5gX1RSRzcm6NDKyTTYPC272WRs1R77MMCoK62fWFRSBfPMx7Gc42pmXXtEWBuXyj7t1t7xqQ"
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
