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
    "5xCPXeaFJTgo49ULvqJ5Bmksrrzf8WtbYCF8bCdpSNs1Pnm6xDycbEBVtVAQyBqr7yTUMHsE1kK2Pp4f2mBdyNpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GBhq7F3ZGKGmszNu88ooSLukgJvnxCvaZbjHUMnENuhPHX2gPyyAa1yLp23vuraPSqJVQAogUQigdzK25Y3FqcF",
  "key1": "4Mp8zjBMSSnnmsb8dzLXrKHxbh9ErnUjmFSgCQkDiKEr8jqtkHx3sQgSQ1Rhngu4kaLXG93XXmhMA7PXSRxx69UA",
  "key2": "5iu6N9skiJqZ1E4LAqXgzGdWqQewkRW9Q6JMv3CTqJ2srGStSUCNYGmAwMfsLHMfiYnqUML8XSBJ5s94zbRfU2YF",
  "key3": "5pVPktDgqGoTt9KK7odBTQyB2j6XW8zKjxTkjQWZqTg282PeTgGegdGsFZhZ9j6DFpiQSwYQ81J5enc46pfsaqAC",
  "key4": "2x3gigMEpWimTJF8dyKkBZxXRzWi4qdg2K1VrTyRbwmEqs7EjJeCf6na7n7WXAQf1eGxBrndaZYfD1MQVSyhyQyo",
  "key5": "5qFcdqkXEkkwjt5BCzpHCGwYFEpyorU7r96CQz4T6anFxHUghwNoVQWdGJFC7djen71ceg1BQLmbjQjFUCcpbNos",
  "key6": "3CvGT8XePKGvmvZkYAvYfoVDpwgAASbqmX4AsfbJjKWBs7TgdrtJZqziEttgka7JPLnFJ27FEsLDmKumkNgEYte",
  "key7": "5nE5Vu56WvUqsQGnc9rFaA66cdnVDDcxZpcqoQh3jGVQRZmT6B9JbHqdyiqHmBBxLKMSSmcda8G7WpFwU2DrWBNo",
  "key8": "wQt7hQRatp9da1Ygg9By1jPx6G7MWkv9GssuocFCt2X2fnx3QMvbaZpkpt8oPphULM9j4hHKDn1uWdDG8JQF1aL",
  "key9": "2jebo5ZTbmKYUMHR7ngCjbzJywSMaGPPc8EWEdmWXt1qwCCahMDj2X2nJGnmb5zmiY4LYn78EUo9dCqgeay7gybG",
  "key10": "5QKCHZRLN4Ygit1wKkhNHYYyx3Ju2Yho9tjAQw5g3cH7K7fkU4Kca1nrEfwjXajsjig44XBGupm4rg5iRe94wVnm",
  "key11": "1b1yL7mm5DQxptxQAP4gxuofrxWRKKnmDrczq7kWpZE7ecSB5E1ZDzSEjkvu9R7cCi1EaWWdf5guNzBG1TSsdqX",
  "key12": "5PRu3XqpTwbhav3ytXp2ppH8tG4bQyAWYZhjR7Z7hnGKDr7i7j9zVKrChj336FD71dMZBErayti1Hco6mfLTetE9",
  "key13": "9Waop65FxRhzqMG23FpQj51wSd3ANTn2sZJHnj6co75v6mQ5S7cJZ48HVQ84LqZJhfqXyLtfSqDoUhLBxgfM97s",
  "key14": "4awvve6v38ESXPmYFXhsEa5KsEE8AFWqZwH1tN6RnqkuWZe56vWsF6aDGxrbBiAZqpJndkLSGujftAFr3cJFA4zF",
  "key15": "LVqF321EMUtqTJvuk1Ds5CVi5QXTLv9PTh3CSAZgXA2cbbxT2wbQsPKsPbb4Joeg178VTyirsEefez6PHgAPiGR",
  "key16": "3qYPwTXci32ySJEhpzpcdwjh3aEhwkaVkHrqMkXEA29xNfoAyHCpLLMSNzJmPBLDeW8e8WnmVNwJUryTh4NNXb36",
  "key17": "5EMRPQwmMvLdduquyhBDmzmWJZ6MZsVKSYewnaz5cLw9SXZqV9RD6LxcDhrrLpfu2Fcswn32H5BZrGGRndzBsAx8",
  "key18": "5nEQw8Uih5C68PW1NJmwa1NLsq7Wt8zf6ew4GzFMwe6c49Go7L9TJjZG2H6Sf75xJbvc1QakuXm2UX9ddAZfY4QZ",
  "key19": "5vAddmpt1vYo8ZRnxgXX7hgi8xTE68B2nmcbuu5dtkVVb9Sx3fsYhDV8HBy7iVWzNr6sUvL8Y1zS3UvANvvqp9rp",
  "key20": "5QpaW1ADkgM2UUywu9L5LsMNs7dPbScbHoX2KKkkvbpW4X7Nt6iRxGXWDXxVJYEGtcZzYKXGcNHAPHQhzgEzueJi",
  "key21": "5cta7voxRydTE8FYxTvBSNY4igrcYygFuNGiRc8UYpd9zWh22APCiZ1RsZ8V5KPnm5iY68jbx4t51VYcdnwPAHco",
  "key22": "2Lr7agDLSh52XRCH2xXYRhhFc2F15axQtDGstZ3WCyH1gHd8vZdQSZ7kBPi9CLcTFZUe9tsi1pCuJ3EqZXuZi39P",
  "key23": "3xaWkutr5ydUdBL6oQwV4ddYLKSVkHz6oSdBSHrkdYZkic9mkMZWTSBUXJNe1boXbaoiGCwm8VpYGVqqSzvyc3CX",
  "key24": "4ZoXaLrFuX31NW7fq3c2FUxjPn2RwqaMjqexYoK3etKkqTNJWuK8oT9cUoDqorC2JMn7TnhyPTKBKagGKcL8SGkq",
  "key25": "4L3bg1pEDPEaR6rkSt5obL7toATEjy6VJ6C4hYjR9hzFTaNKGpLEqGz7UHD9PGJ7M6ace9LpcBPRciupMsWpm3GN",
  "key26": "4ZMcXaqH1zfo9TrQ5Z1r7VzRtYPPF5Anvu3W655f1fp3kDMuM6xnXpYafYwm3m1vroUY8rhmjmtTWbvHujLsLNEp",
  "key27": "4ehm1pf49oZasvZvjrcgGHDerHBeBMfVStYbLQxweBU56ytfNEWF64vmr8QjVPyADDuAt5MMDViU8362D1Mr8Wk9",
  "key28": "iYZsTh6VoxJFZLiCRtJWnTRyA8SKAKWyk8ZaRgRRf9Poaw1d3hW9uYPjGqe5uwczjevsSKXDhjMjvcnRRnt8tWM",
  "key29": "rYiQMyGehZbxfouip6DouEmzVExe8YjYt75xgBUgbQgVnLGtqqeTFA6HQsnZgAsyyr3PJD2A4t9QRCQv1bTqby8",
  "key30": "4atXd59K8wxcePUmbLasxN6XavoX7q8W39RBvTnEXA2gUEPn7EPpCffPyDJhg5ZPcokTSAnBGpZ5xhhWkMoYq39h",
  "key31": "3z69bAwq412f39k8B18D8GTPeXKndH5Fuooh2QKQLc8FXVBHcsiWozAUtc9UEm2yLBktEAN5bPdPR1DTo9PpkJ1R",
  "key32": "3ct8fNbSX9h8j4bytT6V2AvQs47GZAMATku5kwrENXt2u2w4b3HbbR9jMFftiPKNUjaGugoVBDjsLQHTJxKyWBJD",
  "key33": "21bjNbkN8GrYdqkjaeEiB4iUKQ5SSEB6kzqP8tdsNXZU7xHqKKk7ovYt4m6BynCxVCYin9pudH735B3M8FfCUbFL",
  "key34": "4r28QvsvmMxScomdXjWfiKqpGxowy8cguztn1a5e5gUXF5ZX8rVMcFApXswGs4AiiDvdjZKRNZo3Zu24YSb8Q582",
  "key35": "MJa413kvzNtxsV5tDMNtS2e7GbJ3LiGndmpGNVSHMdNT8kZk6KHbVXxLS9LVDLdXEmSpPubU1Tk7ACudGmLtAMu",
  "key36": "4UGLfrCYf8kYZ652KqBGBrTKPXTBvqyUXZiRpnF5AC6KKUjn1hzb7kWgVEG7kAuJC6fHJ9D732BaviUdBYA3KDbm",
  "key37": "2YpFy9ks5gJTNZjBpBcNqbmtWCQmQQiooVwieow8n7h6sMua2Ea2U7VZPYP7H8VcjBk65s7PX7LZGunJrrRmLRQf"
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
