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
    "4QhKQJ5h8GgDioYRRnfySd4YGXqYRweMBXna29EifXTrhJudW1NbQGp8dK7i53JPyYyJ9vpPMYF7dHk5QavboC6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Maw1CPFdKR1LBqqqidKeB7SoAh32tjLFYP15deqyuJEfRFkBWjESmUY4uVrcvsYuijaD3S4HGLyARF3soWgvk9",
  "key1": "4T2tKearwzgBgDbakEhFLoiYD2pk1BTW9hC4TRyFPqvJk4sov5nMUtnaTEyn1tNBop8gEWuxsby8sTfVASqWoWqE",
  "key2": "drNjsJCkV7EyFicSJBpNet1rjcMoWikGk7tv9e38PeZEJGmmmbmWkKgHiNSRcVKQx32V5J9pEmtu5QjoUTJJoX3",
  "key3": "3wzCLEbbfnZbRZ6M6jLVNx7VTVXrUVqpTHyC4Kga2LLhdaNWPYxsTKNRsrgsZG4HEsW6eKuARHK6fAAoM7DZjK6C",
  "key4": "2xvUq3kGUfMuPbkMYot3hzX74Rrry7pfHjAVoD4jNQEoFz5nGdx7K5BZFJDx3TEYTfefRWr1mSjgkFyNmzcm8k5L",
  "key5": "2LCGfLURKW6QGPBTJ1NhtG9Uu2oQVw7em4Jv7vbSQaHvQkGSyfhj1AmYbU3s5dqcWPKAZVdpuB5efzD9JbkDAvwg",
  "key6": "5wFVjLebjArpNraYePjnMWQ94NoaJkJhkYQYFgorQWXC3a4bcydodsqQQmBEfM5oR5XcvsAN3169aFLUZ4Km6ZKZ",
  "key7": "3JRWmHiaWqiPnPose6A3qxnHxzebeG8sXUt7inzM4YyqQkXSJVSZxCyCMaNuZhn748LaFcjoeVG7rSEHPf7a3j8i",
  "key8": "34NsBrJMrTfUVVFh47egtsrCtvRqvpoxKEa7nKKRkqTseN2w4S9fJZxhyBHqPUZvaP7oJ2JFSfNbxegfAMLGME86",
  "key9": "5CXWBBDZpGrM3G5U9rbqYYcQdUwssfYXnCAbuJAFeHtDsWKCyiGS3PyvWAYGoHUFFsM5rjn4RFc43MvviuxKaJTf",
  "key10": "2zT5Q47G5Uu4qhR1Ai9CEAmREd58Rcnuw38AkEBqtBwerqXHS8Jon4JztycRiEQGi2osCJaZPKRcisgdeFBt6iMu",
  "key11": "4SPmmZTyrNqFA4cTLqiQnmjAC9nEWVShHeueKFWUPwknMoWdDuyN1MswrcZ173ND4ZGnjTr5BNeue4pAwPSUoSdP",
  "key12": "3JWY41tr7kQ9ZQXFLeGZBjRuYk4CfcHpsNZionkNi6eh4T72iDEfEXT7moZZWgrN1aCgz1nxuwzwzEmagCHFJ3XB",
  "key13": "4zVCzNZREo5xfsPXEK9sxgf2NAyKwwbyLWq7vfxMQgiqQa3aFs9KGznycgWwsxbVJztwo8FjxrvSw9wHS3U6tSoE",
  "key14": "22DaNnnDhhmDMxgHZMiN5LY31L1L6QJqjoF9bTgA21AJj3i7DvUnR9FRa4H3Hjk7YmajinSoMegxqTzuWGkHh8oY",
  "key15": "4QM89dxQvVptaAqtH9ZWH57LXTZfBQiCLPifMjrkcd9hBRmuiGZigEeu78RgFhtzTysTBAfD1xhGsd1mTv78jMpp",
  "key16": "nBZkNxTv9wY16mywYmK7Ez2bp3V6nXPudSGptX7YGJNTckMfz4hUTyL4LHod759geoBjEia6TU6ZDvSeKAGoxHo",
  "key17": "44T2kSp8QyiG1sgXYzp88Cr7FBdk8eWDz1guafc6pAb6YdfiZNU6LYAntJZG9cY2UCWBoJhiWu7pkTothgfZu7ce",
  "key18": "5c8RU3Hj1zkYZ3m7ev8kef5Ktz4vLMYpETfkuC9KGSmiq4dajdFPsq4WR99DDBz2CBLtyyCMFQunZy1voANrkH6Z",
  "key19": "4MGSpesCsjEqw38Qn29begGNMBoLn1Gy6YxfVCKQiAKQ1WKGVEjjjSbQ1HfKRTQwwuBpe7xHCuQ2HrqGZYS9goxu",
  "key20": "4vFM6v3RLEzL1tur2CdjEo2JuG568GRcpQQ1t78RqZEgptFd9LPMxYjkVEXqN1itvTsQiq466e1JiuCSGRkvDxav",
  "key21": "2QZqg7BtXwoFquyEZnHHHABQfPPbh7EZwDVUXXdudbYcD73nQKi57UqXMfisDH9sEY6PkirNbBGpk74L13vLT5aL",
  "key22": "3ke8bdyKcbxmTP6zBSXG2TGWuNYHrfMaQ7bbUBhdXTDH84iueaq4vhNreLTVrZw9vCeeunLPEDfWRSMq5W1pAs2v",
  "key23": "3Kmw5VbgeEsKWYGbeMQES3zKvwz1p75WdaYBBAu5FcB8bobBb6UH2tQXHMZbFdBf1FPEJPq6iKZNZDhQXoir5Bfy",
  "key24": "4KTNAnksaTsb9sYweikfZFBmpVwZjHFaRLLnVt9Z7QRuQDqtZ9ER7EVNZDz4H8ymaY712ahrQBfJhgSXb6G1LqXg",
  "key25": "HJndwhuLw717RzGvrNiJyQYBuZLTowqqwRWi2tEsX7gVF89RwJzFznzxffFsTEa85QLYeeWYPuTpw7Uu9KqGwYy",
  "key26": "3vtz12ga5d2k6i1EQnn4pgwSmAvRjDUAgm85ZBJqVwN4hfBAcreNcMCaNuZPx3Tn1oMGGhSCJyfb7TAV3SW2S3BL",
  "key27": "3N5zZjoroLqF4jXVEPKcaGPKXt77WHTLE2jQo3LDPk4B6e6nLPQWdMwHmJp74cr5VGqiPEjThNVbqhNn8ozyYxSy",
  "key28": "2TiVpW4FkesaJBk4n3RJoKnmgv4u2pi2pndAEWEA1QVZtwkjsuE4wfSyLtuKPRoACJMbz3qQ4SimDbrgETLY1aCc",
  "key29": "8jSufep5WBBu9zDTLv8fFkNqCMPPriBTZqqYBhBm2cdvFner4hEP9KJXy3yGqconEyFuPi4ZhCQkiEmbrxcnB95",
  "key30": "2BdKuNYbeSHnxoXKVvKxgtR6PTzN7RgDRcqCTMYk3tA11AkD7p5hLR1HSm9habeif4pMhNAFfBo5rfwe7txzgi7X",
  "key31": "4Q5cJu4Ymjc9Fut1v7FmNvPVAA6PYJybdd5xPCXENJ1ukYFdVcJmABkaqP2aYbeHUdsioDSMcJh8ZbbcXZgG2w5u",
  "key32": "43jE4cMSUf71DuZwnojWwTJUZ5CDw23YdhpHAZqXmrBTSpyy5ND38EBdbBeXhfHABuG7dmrivTjuYVtkeb3w56Dm",
  "key33": "4gsR1pdRJqNe8vSKmcBNQLesGCa4as4rfiHUFbUgNimmZZY2kvc8X7Ht98yWgxoGqYQbdviXxdNP1beoPDN2MyH5",
  "key34": "65iHvCSEWA8QQC8vtWCZA6Kj1Cg7Mo5P1Zb3ieW8aSfHue15qfQWR87eNN9TfTUfztZr26mRkMaZsS77hKJs2u8z",
  "key35": "5kZR7qDKiijTuAAEHw13vPc9CuyZvKTnQfTNfDM7WNwt4hGSFpcimsFcbaeJehpTQffD1g5LnDQhRhfNZg321VuA",
  "key36": "3mD5rsrozbNdBK1d73VnZX6Bp2EAouJWb1yZzRVjyShc2Feke3wXLQPsyr97Qfk14f1UEutv64yUtQca7qvUCrvi",
  "key37": "9jjpDrrazZ4DrY5B3gaiRKD9aAL3q78ZQ1yqcQRcszfqTvKjUgEYc56DnDqYKhN85oAWA1K4zLmVgsqW3uJerfX",
  "key38": "2vKg1H3UQp5jnjKivJ4MqV2cc96NSeDFBtumwVYsDLwcToEW6dRbawNcEpcAMpAbCqk2QUDGuy2LScLMpiaDVsH8"
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
