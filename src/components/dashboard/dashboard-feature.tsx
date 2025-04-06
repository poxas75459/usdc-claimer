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
    "mvNpP8jPPe8NeeL6pxupe7E2gmQJVNyrUizKs9h2b3apNW52UXGS725yRBDKVZ7yXPWNKDMYxe9CUWHqkJmpgTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vHUW1EYbwxUQmreQw2AunCeCN3TLnLvuvcCivXBu73zhKo5e2ugk78UUbRbWuxnvi6myBgvR6HpArW3aaMzKVHy",
  "key1": "3UH5Pf5K4MdWYjVZi7Li8HEL3YPeMvKLsk6zdwg7FH6w2b8ztj7KpF4AEgUdvesa1os2FGDqKwmppz2QB2KyT6iE",
  "key2": "2QvdtPDZa7VgVd7KHkcJ5Q4uxUwggaE1oYxatpyuUoKnMpZmP2VWio7hHxZr3NcCaUkRgvDuUe6DkSPZdnV47VqD",
  "key3": "5Jir7sSCmGsTXXyStae4N7Q4MnQp5wwPQogQYozm562rsAEq4Fw2QeGSw84PrTMygZ61WA5M5QFwiGsdSbGBpkY7",
  "key4": "2cfr2PxPBzdJukYzLTGVmN6jmHtwnVVPQQaFeTNfNTeevQ6qCbhruaxgffUHqzEkeXrQtDWPAyUGQkTRqNsgCr6Y",
  "key5": "d1SgjNSUi2QoUrGMtzU3Ytetxr7krordRCXuf8j6vMy1XcCZgNkpB5QqJYMcDDx3pu8QJXng6Tg1MUtdus1kyEG",
  "key6": "g8kcEbU2sT7P7vHsVLvUobR3mfQbF76WkcxGD2HVncnNwDxNafTGCsF7NSQ2dbKQUt4DWhCG85th4m18aSQkzLW",
  "key7": "2iu1yds9nu2E3ycrn7mFWXyBSVGCu9ocERs42DkHDvZjtSVUnZR8odbtjLSvdxojpnvoWK1WbhtJ5CiynHSqofCo",
  "key8": "4Uy14uRwLxDFpPgiytU3j5PqV9hMjksdp1AnbqkrVA48wdZgdYAsGKCauAsoYXVZU6B32oG64ehZxBDzVUk1DKyf",
  "key9": "2LFjsYzeDekrat1a2Z7cXBrECiQU69iarSB8UPqnWwHpfjwpPbY8A4LStRNMWPPw2gYQk6hRTNSGuQPqpV1sHUgJ",
  "key10": "3q75z1ryKBE6cd4GHob43S7eBjpBxzcczNtYrzi9b5q3NVrrRBYTGN2Cf2qhjKYqYgdqoBk282oiATh3f6DAp1BQ",
  "key11": "26ggeabJSCGU3DXvu6TQBfDddgc57NxSLwHua9ceWZPS9R7jVQexBfB7JR7NzwDB27qbf4KAcAx4EeXZwZyvLXty",
  "key12": "2dTAa3C6GYguB143R7uThNGHU6mKdZkhhCKhXrTKK7fiZJwNS8LTFiK6rY5rEfqnegrLLTEv5K466XVwgZ25cXok",
  "key13": "9xx7gBo9Mn5a6Jf8ep6DqCBKm7FgN9RZW477mc6JQ2DU2nFxUaFVSJ62zFcLwLvsRzNsfY7ViJVN1pv2Lqx4woQ",
  "key14": "2wTDzCZi7QFPXxZyiiKWZU6wCUhMy8cgKF1afG65FxRCCsZBx7Kk8KQSaQeFsesNytDVM2Lig2m6HxkFEu7kvDPU",
  "key15": "4katiLg9tVWc6qMm6MneXnD2ku4jxyxGynaw8J17bqsQLTz8truyCi1mKuCGbQkbTL4EXZDc1gFELPNrNnqT8cw7",
  "key16": "dMDXwTTTwmsCkHXkdLVNqUijaTDgPNb3LBqVoPBdTTNfnzXHMn24N2kvGTZk27R9ZTe5MX9gK3f2nNJYV22XzKP",
  "key17": "5ahPambqWuDBMVtTJ3Bk55MUHb3gj6ZiTGezKM5WcNxzHrwQAfNKPawmfFioV7X7RcWUoEk1kV9NUrZ7AKNGXckH",
  "key18": "3s9BfSH9PbnoDibZwY9eLY38N8Vvd2fSfkibWRZWAj7Nh4tTcJCXprboKXQJuvdRA34ZBBj29imQTXLTUCb7VJZj",
  "key19": "5Ko1ZyzwCx9LTXHETcXAK8vmMLz7JzjaG1RmmUAKeizYS9LB4CCvC74w1WsRHTAWauDNpdzkSog7fNNjovFuUnbL",
  "key20": "4VAjm87LKA2sidLvVwQArMqi51cBxnx2dJnwGVYi9LEJcpwYmvXmT1k4kJeKGgm2JmNaFoHSsa5oNkk96ktPWkLa",
  "key21": "2JJTpD2UeH6oayGMk98CxY7kjQ1WRhgYaWVGkVcXUi36sfBDHUAWDBEqZmkV2wsXiewrbW9u2LfXyi3jW3DRhMb6",
  "key22": "4cQgR2HQkLyjh5PhfRV4abE76FTN47WaYP6MbXDPJ4MDrek6Bm7cfQU4nKBqZHZoRUfeJsPAQWFWrafGn5G8KJfD",
  "key23": "2Mv1kC2K3vJrM3Y5H6zmgspCKYuVoTJXQPraDjFuijAc1Y2Zp6wpe38j93QEsWF4NapPLPMgd9WvAtbkaXguszDE",
  "key24": "2mFhEniYeXu1XJLwHe4EQdRQ4UQcKaeDZCsr8gGVN2uoqcpitqjU24zXvn94njwG5vnYUAhUgux8hLoSrBr1pEqV",
  "key25": "5qZWyChgkeRj9N7p71u29BRS5uZ2MJzWAYE9uhrfeTb9wwVGmMAJyTU3ZM4CZF4GP1ZRQrckxk8VrnCno27n1ipY",
  "key26": "z4Uab5CsVPFxoaji62a8skbGUpVUpAZ8EoUbVqpJxrZfQ9Lm19DQEvtnmWJmo648LKxB6twjMQdtQajRpbgNz9T",
  "key27": "67SuiQ9QqzqmUWXz77fxMAsLMtooMGJQcyAM2X3uUKodYLi9aba6Scx42unxbKzv3nUMpKKvJpdm2fuphVsmoPoJ",
  "key28": "479sJkWJg7qw4mJGW1PhCEQVq3zt2PBWA2i8hoRR9h6koSBidcugYD8TXkeDxvnefMZZRWCaG8EMXwM6GZ8JLgGj",
  "key29": "4iTF9pBorcxxS2z9tjYXXxRh71HQkHhz9HNBJb4X4p6oyKewJF11DcmN6bMzTEGpbLwFu1KGJGtvgtPPkCpFrsgY",
  "key30": "3SzCnUhfX192p9kqgPHJozoFkJDAbwCSMGfJ38F4SsPLK3xgSbyiD6ebihX7YM9zJSrxtDFvKUimqwt12cNtXNaA",
  "key31": "g2EK2QeBfsXeuv7KDphfGCmdU8G3gwvN1KUddAzdYnK9HR5RgrrajcDdCF2HS1fHM3LCp5B7AxZkhVxFwDo5iJF",
  "key32": "5QU9W29XAT7DTCxKbyCUjoUiDWtVwhwqGbr4FkTRo23a12z5Hp2VcrJ8CsNDQFvFdt4ZkVpy9ibFHu6r2Nozzfuz",
  "key33": "9sWJLRceF4y3ozU1aepJxycR3kmNdm2LhkMTJM1Ya7w3ELBPu93SJKpEiszvV27wDBpYioY41YjS5iZ6GafFjLu",
  "key34": "2E6yFi772zGVFrCoNrjCPAjuW8Go1JEgksrohFi55W1ZSzB8VW5Z33uQUToQtcGwUkvdBasRCBVi3EJsmLuuU5fD"
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
