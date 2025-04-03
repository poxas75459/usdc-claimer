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
    "5sDwuKc4YeaLCyoBguHpwvHrGxSdwu2QkKYr7k4Vrv8ZJm9SEXdLebq5qj64zZQDbZj1YoEcw48WocjTruo3PP9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHvD3Xyg1RagUS2ni6KJKy2rcJf37xn5LAxDuaFFxMSM4Ty2FP5MN3Cr3y2YB84eKVaWmSqjVZfnkvtiSQLVx1M",
  "key1": "3Vk8sii5TXwXad4KCKBsQ6HwkuB7Bbbr2yWCt5EfWBiFqqjhC3JBiGw26ZHa2tRcV9r3FcHg7Ak7Wm2JwmtAKZx1",
  "key2": "4gEpTiYzBcAnpu9WvZHvkqb54z43MLvjkvYVG9MYdAoyCy75ymKRjis3sMFoP9FUbkPbrQNS8owWR4J4STBdymQ2",
  "key3": "4MrHSrMM7FA5t4K2Le4kZPPsUjeZsAHyH4nqEYVXPonhkFAKaDuMSpoALYNTWNxz2aM7QJ4V4gp4BZQvNk5AAF5j",
  "key4": "56wnBTjFhhZZSv9bDKVbjNTHENCH89bjKFg8M1AgRxqdiRbPPDAfLiz9Ayx3NZ6jMD6h4ECMZLaDc4FtPYfomq7f",
  "key5": "3cF9qM5SYuWUDE3SEt4yv94YkLTefKpG3G5ycDccXBG12imXBuog9shMyLboYkP8kAACf4KD3v4kmFsRqYE9aRMH",
  "key6": "53HRB4Ecy2NQ86Xz7e9adip1Upzoba1WyPsDSP9MrVn3axCiHiWk2fdKxVhjykPjN8xEX7waTCXuVH9daCwP7mz7",
  "key7": "3PVfepZGcvrr3E7Ye674W6AdeE5MDyb7tZTcZXokngiviFiwJxoXFoqpAUzTQk7Vx3H6ZuDSahTb4BP5WAidDLEU",
  "key8": "MZCa8ir9nRYScjJzAivR8VJzd6AY2ihYzJjEoW3eyr2qDkhrgJkyYNNiuvT3hW8uoR68MT3qeGDm2t2DSYTgTAw",
  "key9": "LLXC5T5sYeDRv5VqtYgdPPJRY2qRcgV2VRpvTZWqQ9XmTv94t11bmvCYkVCdL7R9mwAFmoFVsogGiUqW5zNBjKC",
  "key10": "2AqtH4ymgMczeRENHnsexA5xmEtp5hsTAYyPTQcyA6ggXthcgx29YXWtYHd5Wa3GYrmn7g7aK4CDuDF27eX7TXNJ",
  "key11": "46UKSEJLtuLRc2SMQA59SJTT9srVyX6YyYewbMqwtxcFQBufXziQLiQxkTxpzvgt4x8FfaK2VhHSRVh2ai58ZyGi",
  "key12": "2PmXBAw8pk47kbY42wNufqbHkBE5NvXccwWxpFSGuWm2zZYK9FcT7z2saFArdJxG41DHp3MPb6yi6BPFDxD4Ritw",
  "key13": "7fPHG6M1RvFfVWF3QiCKB2UDDKwNQjUMywkCE8pPajQUeBWRrmdSN2eMfGPgJLhkbTTwBWg5M7WPorCsqdEkPQM",
  "key14": "VS57tUNG7uiZRFjuMqCUd98Y4A9A9G29NEa5bWjqPXdU43WHJWVUvjUqVZuMGL3yRbs2NomhGLK6Kk35RRvmuHp",
  "key15": "4TXMy37fUikuAUMDQt8JL7LKQxD9aWvFxGkBJfGM65CXxeTV2n5nQkoWJ4w5W33f4npFQiRC4q8NRFePKoQcwSe7",
  "key16": "5QvVB3WV9grbu3R1mNKGBxXZyMrH4WrehU41jFVC9ACNqRMAWqvHXgFJPDJntLa74RsXvRbUWTCRs3AMRnzztM1f",
  "key17": "54ASe8p4Q9RPaK4yUM4ac2s6B8qn2ubnKKHwnocfuVa89UHQw5k6urgELMXzzYaQQPrD6U1CyaWJqS2M7cjbusN3",
  "key18": "3MZWMsCrme4G2GvJmSrLYatWcHSrFb2K24d1JXAnZwqEE61nLrWF7jXzgrpA88vhPPvYsi8maNktxBXQnrtNPHBo",
  "key19": "3NdWVBPts7EFvM1kTDmBH9dDMR9KuFQqGGbR973AmXfSmFRW8r3Uzjt22EL8m4U2hTQoCC9kBSW5k4XKStsZT3Ak",
  "key20": "2Cid4wenWE5CvdcVDBduFZG6MqBeqoyJ5N8qJPtHQzDUYF7GJrYedooM71kqyx1ftLUd2j18BrdEV2dS6MdzrWSG",
  "key21": "219TRdyVagoyTBwEFgUf2memfoZMYm5Wk4G37o8TQKrYw55y4RbZYnJ1LnDU8zupGuBzJXoDAyKVcpyjyLCtxukM",
  "key22": "wejtpLmW677uoykoedkHnhitvuGCuqR7LE6h3UAzMPqT9QsQ2uC4azsS3oXU5a8gWMKmmsw2uF3QsFcyinLn71S",
  "key23": "57jmcxhQgA9Z8TaFYyNnvJMax8xxBjy39VbfKiYAU93JRT4GTitLvoCzzwGabaAYw4e4tt7URxqEXfaqWnwyZQQb",
  "key24": "5YXB9cW9bAVxaGXzpMUXC359YLfZpEyfGfz4sQd9XyiLH38n7ekyaguDYgYjkXpjfmhkPCMCH6Y7L7HRgP5bnkN6",
  "key25": "utPb7unMxQVByaophrdAia7SE37uua7cDJTMPFYRuHxM7J58EaFQZeA2KUoXmJE5D7mB9SnUHCTJVaHpjHxuceW",
  "key26": "5RNs3fP2DREedtpCoaQyrxgVVjveMfTjbp1E5tZ86wVL3uUtGomA8zT5CueSnxHBHqoAafAXkQd4B7nZUFtkg78E",
  "key27": "4bnW6QkLmqHjSgCpWC4ZEk22gKP9DWe7MtBJgWg4SDNwTp2WrS1aUES1BLzjaXYBd1YstkL9XyopzkN2wQfdLuiG",
  "key28": "4y2q9YTsfZuXUfG4W6MwKqdX2UpcCzjdv4rAoALiLbR2JYLELwnsdTGLmgTFn2MjX6nbmoSiaBk96AamRtzCXCu1",
  "key29": "3Cosvg7AcssZweUnKaq3KDmkKGKvSLnumSmZ9PPxLDsZtn4bkkUwTpUcG3h2aToKCkA2Gb1nxyB1jykFqn38xyYi",
  "key30": "3gxbiofBHPnE4TUyXEJ6Dz3NdrDKpMAxxucb5hRWJgduSvy5XVXb8FdkZLaYF8xuNqQnSxCDrmqahNB4pAYCPxSW",
  "key31": "2ifJyP6EE6Mp6rGK9jJrngxkBf7VRtXEY1DgoKvefnA9x5kxwwSfuPg7qjqBogXk9oY9RZLa5CFcL1fnTvcB5WoZ",
  "key32": "3qDYmvJ1RemE96dSsoHoP76jJgXnxpRuSpcNtV72JimUAWs7XFSS6bKZ7yC7VDDvdKsHqJ1PpZxA2p6Wtpb4yFKk",
  "key33": "22FMBMJYe7mcWGFABLKnZX4UcLmTXAjZ7P4b8XGA84wwQxVGZNZm68xkYwWxUo7U29j4dVuMjN9i3dbQWo7LXDoT",
  "key34": "oKskaHpSQLgvSHXBnfeV7orb3n4qDS5Jp4JWhTbhw4V44ch9JqAnbohmLwYRyPTwnubkcxhg85SUgM1RELXyU1y",
  "key35": "nSV2XGbXgNAZSQGefPzGLwhyhBkUYoYiA2nyJkhGfNY9hSmxZpBG3CtWV4QTfhTmy6pPY1JWfUMWdLKCzvyRXbf",
  "key36": "39C2HsgbbexHmLfbMc8JQaGhSvPy7GpYhoKWaDuwzRcdhsTBmc8otS5yTdbZdvBSdAtkTsCWPz944B7XSePtsPxq",
  "key37": "rqDMuzXXm8pPp4qy6VNH97UkKSVka6SDUpW7hnzgjGNuvPyAgJmAAx16s4GawqTz4PcWnutzviqFEuE5fWzrGij"
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
