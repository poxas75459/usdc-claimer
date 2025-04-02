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
    "514Gf2Hqzc4GBUUixJQKGs6u4TnHjp5yt1URkKgsbbt7mJeWcnjmpW8gbmen1jLj8iwdCrczhqnAZHTMVwtHoZZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m2DJeWq7Q8bqX7aYs7VepBLB6mq6hMUcTZvbwXffdiFLxRVEy1KEgyF77iBG9SRpA6YcLxy9P4DB5b2gzN151pg",
  "key1": "2sBKtaHEWo9uBPW9gzKqtVBmaMZZSweUUzjiPmt6d6gezZGsYAsTuAbaK8TBjjLwwuW7P9nWJQ63SC3f1NQ2sif9",
  "key2": "2fjT2vQyh2PpyxuUrdDmvpiAtjTmidtibXRdCWzouv1tp1VuhpCGTu34EnWTWm5fjcm7FwenTek3JyAQgcrmDxMj",
  "key3": "5AEKTBUW1wiCiFJU1tQfbbAZU2UscMvfGEsnEEWLW5mYSnX418GgabTMbPYHU6ynDorLtpPbTqTFY1hR5cEFwYcQ",
  "key4": "3EberuAmk6YqCMbKyafCRVqQ2aYz9dNcZe9MtZsYoqiyc453vViECgFn2aLA5AuBveGBDG7q3yKTLzdz18hA7A5g",
  "key5": "2JM843sGeip7aagb2Q8hj43UCvDpALULPd6VWXgBar369aSiePjQPndVCDC3z4GBvJSrjJbqXaxL6TFaZ4VXgTdv",
  "key6": "62RzTe22SzTdzvC77xx5oAHATP3Ex8SUEaTCDn6ctaCNJb38ShnCV2NMUtaajk33Rj728E6QhCoRDdhoo5A3XKNi",
  "key7": "4m2JoWyzrVxETnqaBEz9zcuMf7HxwaftsLGdxARHJvqcAN9JvJYYUcjkJUL2uvn18q6cjzSYSsSNhBhYJ3jZokBJ",
  "key8": "275fZvzw9KEzYJmt4tFMZNe62sQJydCy2i9A9LWCJZepT18fdpvRCfH8GsBHfw1EKteBsrRJH6bDWx4KJFS9Z6y3",
  "key9": "46bX8s7yEJJLsGXiHfXCyFn8bpuTeNEnsDBW16ATAFtfSJcWYbmCpDNTonMMSLGy1iHe3R68hEJFRWXmQz1J7ZGM",
  "key10": "4T3U1TepNBmXx3on1ouMpM4ALKujjt8jKAqXh2ZfzLLqDmvRHSbCdxPgxPmnHxSs41HCnxDqErCCWg7eqUDnTRrg",
  "key11": "5XgHxgbxnhxrhPH12DEv4nYUMMEL3cE2CcZj2Ts63L5WHSX4DRfYpjv6sMNqyYwzvSGN2xXU3EvRiqrwzvHJyRAq",
  "key12": "2mAAtWAP6Zr7YWKoY24k8dhe3Vw2w2Dt2DvYx2mfA5Wpe4us3xHw9vWr3q6FBAZSR1Q2oCF1kubPerbWxKqpRr9s",
  "key13": "2Ba1Dwtt427CKWikrgP6eTfwM5hUJ7jwZ3HAkyggfrzgMpM5z4kVCUhEFKJKwxUDbVCFjwNAghEwDdkZwQCCUvS2",
  "key14": "246tnFGNqL4BtjQ9J9naNd8vzmLjiPGjNdFnzL9vVCgUBwEyrPqF56J8RvM4K7xjcGZf8b9249Ka8f6v9d1W6QNL",
  "key15": "4KjvBN4MwofgRDpXPGpdJ72GL4wTPJjzP39BcCwZogoSEJHFt1vUZaGWGn6teeD3Pac82Dto2sP4DH54f13ZsJ2i",
  "key16": "5owQ24cEb1AgkZ1HvS6r3nZ2TAkX2RiR23bWQbwNypQC5TdQaHwsSQtYCAVbHgDgh6dzHBRfxDZYnRRTdNxhFhmg",
  "key17": "5JBuFtwPA8P2Sw7KsqewdcDnFuS6SVqLDJ632YvY7k1dEtDzwd2iwmGZQtSrJdsosk8ds6bcMMDN8WGb8TBwWKMT",
  "key18": "5vS68Dg3Ve3R5EokoeKEp7z23V3H9h54g3Si2cZgUa8aNGtYc11dd6oGyACAHUqy9VBEUW7XY9DbPwbWmzkfAuWw",
  "key19": "fXuuWkxfsCUVNpaGVu4vm67UYNZZiW81WJzCpk6WdPhWthwiUqbh1biXFxnxgLEEsiuZfpw2ZGjGw5Y2NPdegsa",
  "key20": "2dS4zCm7LmZCKoR5b4eaokiBgDFNv2DwU3JKqNsUpQ4rAzcQAGFbdm64skVyrPysTVxcDkoDZf3QnSUFRTqK9LVG",
  "key21": "41a22bgPgUuBfzVLK9o6xK8jaiU5JAL7fn9CvyCpyqokugAi1ZKfex5iGTWfWmCGRjFsm8WVGDAucMPruqQ14oU9",
  "key22": "k9qydxXMKKoLMJU4d1nabC5otsn6h4roKws3wMgUQPyLWV3UUboxA19BKwyDNVXUzFEo5nAga74BiNrq9kvpG7T",
  "key23": "5qGAwx9CQEz9w3BZf4vKznAdVCWA6RXYBpv9zfuM1TchY6nYDGf9r3R8LjG2MPD2sZV4otEk1w1UWNFfSHXKUfij",
  "key24": "2oFoRyRVgAWYwTy7rjgpzGgrjWL51audDioX8W6VKLDdxNEPePrrGg9kMWDZUsSqoqbuHLdDXwwRh8sDuT59kCXo",
  "key25": "5y9tj9EMwRKUiH1WAyKxoszy6J4uSABFJXLRdsRFiFDvBkLseJujPz9f4JYruLgARUKXshw1kQU7kTXKsndvnzfq",
  "key26": "2kXjyY4MBVdRnQZGAMMXHo6enHmqytSwjdfBzMfk4YCnW18q1FrP6ZumonfMqBbthj4U12bGGzY2DowYBwqnBXNZ",
  "key27": "3SSLbr3zXFMJNB3ThqkxKVRpj1evonYmSYLjvEAwtdvfFsVdZa8u1ZnhnG4oKzgGVmAR4KwAY3u4GaRgiNxt4JMW",
  "key28": "664mgdqNY9FroZHE2z5cJAtMhpcjhGf1FiX4VKbvKtcFWptmsVS1ELv986EomPSo1LUtdEVW7qMBwrRfRukYbhUW",
  "key29": "2VP234J3Yzxn5JK7z1qKQMvqjMKkXA7TFZye8Rzbf46ZFEnYMTBy4axqyAcUwaQgyqJpZmVZUSJ1xdMPZG2knTEi",
  "key30": "2NxCNcsZ4CKaG8bg6oES1gVeDmaZoa33jerDvPkP62A27iw9syHWEprWL5YNTAemhHNkFtLU8HzmJW2VtML3pCKT",
  "key31": "2vrDsAvEeVgdPj9jtKr2JZMVK5JpfZNcm6VoTEntZDfH6vozbYyLfGoFyW2h8CxGtpQGUgWRkRTbJ4sZkFUVzXnS",
  "key32": "Uhktd2YxJx4SnGfyT3nZbS5Ve9BGRwykzFyhiDvdan4t8jT7EzASXHPobGcDv7FFPm2TNgRy4ZnfrHjG4KvMaJD",
  "key33": "j1ra1JnJx9ieWHyRLiwEqj4k8uX1MtwekXm5jZpGYjpSPf6AdcYidsTMiw2wjQDD3hx6BJvJp4kSK61pux1Tb7R",
  "key34": "24sXZ6HpKCYgC1FTTChZqkg4WZX4EkCDBGpw7VjeJWm7XtZgfxu43ysGs6KUy9P8KRmv4M7PyMFwrTSXD2obR3v9",
  "key35": "3ZEKWCh8SxG3tg8NEEdQFHqZjrvgReWS3NDiUvxpWynMiVM3T9syFHFRRX5YBpyR4LpiXmPaqPwLjKNPXfgCyVE9",
  "key36": "3z5Z7Xc4AhHmfrHFMC5XgPjjpD7yfsnwNzddsobBiqpXnnJaHZ882hHY79FkiAFBmRChkVPfXifhskKYzuPwgP6v",
  "key37": "3S461RNprs1JRABSNsCopCFovS5gdFZpxpEvwgM8kXd8LRqqLAyxAuvWEAMwHzzkAtGgaGMXKXWCh6PXUDP9ECP6",
  "key38": "2iVGUiVyPu74Bk9k71JwwGsG5Xhg5qVE7aE5uXFPn6fqoeG8QTW4GoeyXZgxX1R1PWZGmSLQgjjtYitRZzyKDgfR",
  "key39": "288aJQwLyPVu2XgZ11Wo5aZLiRcbfnrXRkoqyi8AeMCFXC2EunJaav1d8SeM6eZZEN5imZGoR6vcvkWXah3ogVZZ",
  "key40": "27HVUWCQ6dydXRJimKduddFWgXvqradePxMH1Hoi2feqCFXRgQN1kUpFJVSqLjx5toEPKZhMMnttrfkMPv3B99qB"
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
