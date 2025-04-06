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
    "5pgJBBgaXtyfErqfc2SYzo3qMNe6os4o3L5KPJnXm3v4msdLoUdo8wra8SzNBEr19APCMZkbhhjn569pY12jH4m6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mKFg5kGLJFYJycvvBYb5UCH1cineXhQ36XNZvejApVBs18eev7VHYcSkA3Tu5HCXunMPadrUcNnwsDXfo9bRk13",
  "key1": "2so3CTxUcTnEQp2iKBY3tuRLBsZPHX53ixqGTSxMzB91Lmgtqa2voXtXU4GMc9a5nPXTbf7HrvorBnrMxFdNDCoB",
  "key2": "5nKDyiRtHkniJmsUHBDwR5RC83TuFbpiAtUPfunQFEM5Jdc5Yi2p1NWhYtxscVTrJ9bfyQEEaJKi2gaPKkFottBV",
  "key3": "4Qw4aoyFfWJafyMZnpcYFXWCe8aEgC469MAhT3Zd4ouTfyYoot127yCGbhNQJmfghnqeUKz3G8DXexakAWx1JLfN",
  "key4": "5tCjxAxoMagvc87W9HfNuxbThFzhVa46YRA8tguPYPEsTjDK6fUsWhGFZNNwAkr3hCDXfUvbZKw5Qw6KZbMY1zf7",
  "key5": "5asrFLv3Q1JEV18wAnJdLBKSTCNs2wHiL55CAn8fjmG8WjaHGsfaWX5hntquuwDstNkWL5tXK5obVEEnguQK3e2w",
  "key6": "2vRnwzgWygCzG3DtXYsHYJwhhjJTu1Ybc4XrkXpc81shHK1gVcCCTVmaohRkZRrhmknv6TcRQfsCtcAWmdT5QVgF",
  "key7": "gfss58qdTv8asNVApfz8emanMFSz8p2dKadKCishP3odnLLMsZmbjCjnrC7ZLnEfhFrepH6ewocwECM1Y9BQy9A",
  "key8": "3Kdb5ZHGDenwSFXR7pmSy2nsf6LJSue7kbuDs8uHLjHisxMo56Yqw6bVzTASUxDYE8zCTXJ6cqeMDm2CafXVSh4g",
  "key9": "VrXfUjorDGFFiBicnQmAKEKFM2zK5cjoY5wp6cNzZkH9YQGTHTXXYjvkBGEYrZX4ejycvBEtNpkWxRkrGdjmUmD",
  "key10": "K8mcz9dpuFeZG3rXFTN5FtstRYRVouJ3eS4iLKQw26rV11SWPf7gE1dDEiJr3EitoHjkVFe89WW5ar9YsbXFBxz",
  "key11": "5mXKaeg2Kf1xCBGT2S6FqFHBbHrjz6tfuLECcVt8q1FvpXidccdGXzTr8h24QRFjqAo3Ecut5QdLLwuiD5vNw7Rk",
  "key12": "UNaNuniTJ1JvZUjLHXCnFXgSVCfGztxNTJW8z1C3cTsfKbSkPtJk3vVus1R9V9pUZBXercxLDd6CpqCcxRkkBt8",
  "key13": "4K5ivyhD8btvsFWeU5GsL4Zyu9EKHKHUXJahF5gFxemmZWEhrNciTD65MALMaW2ChkyVBsMMNhHfpUduopZvpcSh",
  "key14": "5sGckWEF4cZDh4WqmJr17iYzBksW9kbvFSQoirDDeTcNQcmjxABhjfsPhq9sBJ5vpFmZdaBzg6cYn2NAsZCcvqeJ",
  "key15": "3W19EJ3TW1YCdYV1FLL8F8bfbXBpqUdMubSsqaVLMHiTxZoAYW1sw6s9rDsWt6A8V6VHjSuhYhVf2S4MrLKBEQAL",
  "key16": "2SkNpRLxmTuiVi5DTXTxKo3tUqJsFJc1K52ej6JW4bg6a5u1eNjvFjtJPWy21Sswxb1RZbVrgguGCqY4hZTj83An",
  "key17": "27g1uiH9PSTYPDkWT53MjCvdfVyszrsomST1X916L2vb3Y93sdyw2t4XBLaDy9s7fX9eUzmbq1EtAqWCMFwBLD2t",
  "key18": "3iQWzaFAFb9M4X1BmjqjSK2DGkmJwUZ3KS1HzQ2WUC8MbU8XqWQSxqrWxYUVMNQVyxCc4YWq8JgpAP6rvUZjiJ29",
  "key19": "5NzmxDFhXWwTSmb52km2uLftvs59cPjs7EkTHx8hsSgN4St42ECh7MPxpGMEXhk6eDtaR3E2mw3DpwkKC2Mfuw1F",
  "key20": "53LM2KmUks8K4M5dBMSFxnc1Mmbuu13NjAXJkP9To1FRW2ePpnTRypPMfyzqjXnWYWryN3FCRRk7DvDeqKAX4aC",
  "key21": "4qCboEbaWz6h4vekm9iAxKGdWBD5CWfHja3qp8FwmEKZDjddyCVGm3nabsG6w115yH1ogRjpZ7YPUTUYXN6FeHWc",
  "key22": "3MSN4v78FmLZezsTRiDKwVyyVRLmssfxwWP6A7sq7bM67N8atjhM2tdBdhQLkk194EsXhxjV9izv15zfP1RvHXPn",
  "key23": "4FJvvcK1vFZu5JNiifhwcAzKNVNGWApAarw1JnAy4NNa2VczryWE3NnxLPBFAZVhh4bXzrtKbjYfND4GQPtybQsd",
  "key24": "7cCHV44RRkai2gYwzQ8XZRiJiVop6JJWFvN4wVMBJFgi3vFmmE8MgsiY2Dw4y1oCekJrqJQe8ZZeKJjD4h1mD3j",
  "key25": "2e7216vMfKvwMcBy3hvHmeSWbGpKRa7GzJtyfQ9x9n8FKAHteoZxmB1Zo1ySjHrNhAVCtJxEsQGjbR9YbCC3jhes",
  "key26": "aF8C3UbzCwukyoJMaqDG64ifR1FFVY5qtXsKXn54YcQiRrsxXQbweLRQSxgfmUjkTnfEqCxHEwNgsThYJkkj5r4",
  "key27": "67cL8fko7aJrNYmP1JSZw4KEwsuU8hEkwK2Us2mA9FCCzfinG2azWnW7TLhoQLsTUzkgdrfsUEo3EEzF59gNhqSp",
  "key28": "kDxBVx2a6QrfpqFWVVRSYnnk4rdo4nrkxnajBq5F93eeWEYzCyN1zHCjhUCmLrgAD7fiZDByRUp16hVZ3szs9hC",
  "key29": "3cU4gzyTHM1PcYQcv6xPbZgNiLgJMoFRXX1GEUfjerXDaBdwUyQ2QvvcZhoRyxDu39S5cFvFpTwwN72GLBGjseiG",
  "key30": "2vp1dKMQXvp93DeQQyL6D1GHEQ2LWLL96izJRUtMGiE8QnDAc1SLwQnixZMmMViDYczU6NgemqsJak3ebqa9PE2X",
  "key31": "2yNbmvry9GAVGQg1nY7pinoC1aJvLBTNX789zvw1BQQypBYnXWf4nC9sDJjpyBa8bFpAx1F56cBgxrwfyrWHt2eW",
  "key32": "4yB9TqXs1fuzPv51FkKRjFrdJn4kjqLrxKn6FgNbiiJ2XrpqmLrWgbqf5PQrzjfp4LLauWmDz67u3m2XQ5ujYvJy",
  "key33": "4qd8QFKuQKqG5hQoMYgRKsaNxZLmfBEuqE5Ugmu3hDkRPNG2XSBabeZBLyVttxzbg6RNyfx8QoVRgSpK1T3YfBtm",
  "key34": "Kv9KDTen777aYQQn4F27DTUNgtm4kFX98dkNp9Jc3tuHYnhbnp4hpruPd2fSYVCkka6PtLrh1sD1hEj5zeoA4AU",
  "key35": "5TydYF9FY95jvyyqd2i8UEHLqvU4NffKRdv12fkwXsmN2pjrWz7G3yYQbUJxoBX7kdigaZDCLYfzk7ndpEvCVyT4",
  "key36": "17R4FuUYT9sVmA2YvngrNcFx6qw3bfwCuzCfXQWpKG6kUQjskftxyYwheN3CHE2SvPyBXEtCX7ifeaasCZr2hTs"
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
