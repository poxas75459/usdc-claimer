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
    "6D9B7maj2Z1D9vGAarkD58qE9BBHoxh9PQgUUkw3HJ7yC1EEKjtcQjmUj7szfc77oA94oj7xGxPv5X5NxGQk7we"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aGzUUQqMLFNNByJeAa7rgk7WMsrkSnhNbXGKg1t51ThowzxxX3zJRjqWsmry7rLRZ87gAuEidB1Zbqurb7VnQCn",
  "key1": "5uy9Zq1Ko9C8EBoJ4TvN2DfyezqB3azyXmhagmF4SSyZKLZ8LQJb3Hsic2EYSh6RSPjz1mBiq8JsHHeDzcK8ewdS",
  "key2": "5BZXvg8r5gnZhwr1GzCRkuLuEbPsvbV6xQmtN1NuWLXetzfTA6kXXVn2y4dQguA9gVXMVKmPyCqsH26G9rJ5bfa2",
  "key3": "5XMa9Vg643e9SwuwWj89dabaKWbGpzrWzfnVQC3Lgxv5N2MPYv4f636Ge5xRz16jq43UVWmUWPqWBAogqdch4ofV",
  "key4": "3yuZU9EYbrWbZwawS2z4mc61mkLZNyDk7k8ZHjQFDtVhLUJWD2ecXnX8KpmvLhaKHGpuV5hHKgdFLetVC66qhZsu",
  "key5": "4ySXrN48NLQDHiUYEJKmJ8TBBtJbiUc3eNQrf4GvwB27cThSoWSjyMaq4KLP54M8nBiAQogS7Xpk5QSb7mW5PoNb",
  "key6": "6RxsCtjNKab9tnXEr5Vvj5xyq9S8iNAzXhoAqoo5DCXeibgPxVMbc3A7ugPUKqTPY38t2Zd3CKLNGhJQSYyPT3D",
  "key7": "fhm7Xw4nzjwYWXuDhAbEsqkaawVMmvvukRtYfa4Sn9eZgVG9CWF4cC9FfGD9tvp4YVoz8EocaHd3cP9pViEDFfJ",
  "key8": "3ojciWhM6MeWvzczpw7Qo91rmPx8mMU1ESB8cNVL4LyDaKq5A16FdWV2yGi2e32HmGiahzSMCxz7C2CcgBzAKUJi",
  "key9": "5NJBuvamEmiU9tSShEZ7NVVRMAfScniyaBV3bf3C6hWNvXTaCdaWTaskKoe4Nybpcb3qYLqMhtXrECwZR9SEXkUC",
  "key10": "2w7siiUBig8njJR9c7ZXafscW2Q2hYRjpM4vN7R4u56RPKpxdoM7Hm8PFwMk7QS9S8LoSaSgHFvummGZogi7vyxn",
  "key11": "2BvYcZQ11sxdheSPK7QJvH5nwhupbFoZwZxVPsQCxFvKsDC1SfnaheJSG7notEZYEZXdKqhcWFAq3AFPcJkucZuH",
  "key12": "Qh8VnRBsCnrsbGHgwfMruL4AYXor8oetmDqcMBsBh3AfeDm63Vix4p74pbLeokmZCunXZEWcudXxEXny5LbEnZ3",
  "key13": "4iznFUYEcvWgJF2wUig9wcrCUpFBPhiyB7v44iM6zTPvCHcucur4koQCVWqd29yMukUwLEyVveNk5RXCtA5Lxr4L",
  "key14": "3PtqXaJYiRaYAEDX729QgPW9UN2zrXpKaFDp9gMDkY4CzEWchgHXUxbCw81JDbXnc9jhfG4MCX4PqNRzHgcfRQ9b",
  "key15": "cuZ1HZwLRjM6WcfkimsU5cQD6UMqNC3mcH9pd2VUS7g3KF94cMaomQ6LgG1L4SagAno1KGB9rDHqn1R2qzc4Th6",
  "key16": "2RH6KfnigDiZXckfkxwjdfTUL7VztjJZ7og4aKekYmFVBkYtgcmACojvck1PapMwtwebvaXGbS9GGyHzMP84BD1Y",
  "key17": "wDqTLnQfMk7cxTqryx4CKEXKwY1HJRZtANtc1F3524L7toa9TbHTxGD6mc1yp8eLS8t6fZdL4hYszFsEoYqurav",
  "key18": "656k24b4YhgjSTGcAGpPmvKnABA3xZoMaQ1ZWs7dG8dC29iejJtpgYJNve6j6MZP7nkR8fdDbmcdXXGdw2pUCPSq",
  "key19": "4qM9gdxr3QQzoHnMjMYWDmKVvixRVjWdH9nnPmBAA7W4yg9DjzMugL5vT3EJXTQwAcRdK3Eem5wCTv9avmvJzTnV",
  "key20": "2GnT7gQY4ZyzgB71Vt3Cb3YxXGaWrrs6hysQAhuLuicUbB8cr6JMDwp6gc9zNdUvtVKBb3fnfwqR9sDZLuDHBRCe",
  "key21": "4cpdvYUP1rrgZCMFrQvRF7vzk6icdHjN69gUwQhveTSsUT2W8njtVJqguyohbQCcGeSbVY5a61yJVnFwMJAoPx3w",
  "key22": "RkDMicdcbvjqfFk6gtw2vaWMkGzQFBmr5d9NuMdytJPvM1kHLw36Zym6x6upDCCWYWAWAsPXG3YK6PcNHCQGfRj",
  "key23": "SGFj836bYrnTzE6A1gptsmpVGjeDNLskRhhbASK6SqF6jgsmq4TfyfgffbbvmwaomLLa1GVExx6CaMZQYUyQ9fE",
  "key24": "5qUcKt8bFoJE4GRdGgu2HraEBLenUsDxgb6Gg3UoQVe6furrHkc3zxWzUy8wCYbwS9NMvVxFtdMadKXgBBMAppmS",
  "key25": "51ghNxnArFm55pk8gSU3Sfy4gXgFsBuLhAqg6sXjidQFWvsx4FmVNg1MnoNR42Fy5q3wUW58VtMZzpYKy2Lkvnz1",
  "key26": "2wfeDopMj5AJatuFuABCrYzaHBVK2jBRUeKw8fR42B5r7YNEsBFYULwwLgGzQb3ipHp51wG5wGm798oz89W8bNBy",
  "key27": "4CCnvRD8iPKrRh749oKnukXwS8WPth4rDiowZjp6rbpVEFqWtEm9z2XKijJy1NGCiVGNRYsQxGfcFAvdMwa3wbyH",
  "key28": "2R3YufE46KXJC7CtcrTMJJBYzMrCBj7VVMC8C5PtzBP7q7irgyxr4j24pt9CHm9G3iM1HT3s6kJCMsBjXDfZGEfq",
  "key29": "3wg9NU8eqfrHnw2xiF87HftJ9Xz9t2E9zE3sna1gHWkXEYziqMiHVo9PAtVZxSUUEGvazzYdRU6CQf8SF7DUPMZX",
  "key30": "2buKnKnKTKi9XcC3nUHp3CLwhrtEnwXR24nzy7p3G58SxdktgjAQBeUfvnL43RLSVENGSuUf4vSLbhSU8Yu9BS4g"
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
