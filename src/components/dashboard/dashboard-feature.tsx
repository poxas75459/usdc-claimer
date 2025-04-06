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
    "59QWYnHFeoFrwfPiUeUYYMipkPm2D6D9iAhuY12ZTBc8ts4HGCP91VDqMmQys3DRumixN5mQH6BK2kR1x8cvM6im"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33vXNrs2JXkcoGhrowZLeZt4EPYbdBP1LVJr5EDKhWXn4o2w8QTvtPcUWDBMyogXXgdd9w2PPRgUaEQpcbJLtsK5",
  "key1": "2FLYGsrK8PQhDve1SwffA39BJQtdzxsA9E3Hitf2cUJaSYmK7faR3caLgHgWpmQvPVXSPAQ2Dq6uf6eJ5dktUS8U",
  "key2": "5crCWXKs4XQNm5caKv4WSqwxnAE1NAfhCgeTZmgVdH8PZmXyKY6UtEHMdB4sB7CbLGHGR7r573LPdtymks2wicx2",
  "key3": "41YQo6tPTQjChZ6rp8KbY9CJZ3pxJUASt1roZmLnxqDzMyJ3ZD46mjZcXZsaNBU53puAWvWVhkcniLzinPefrSsz",
  "key4": "DYgkVYzYxgR1c7MSW7SZEHiBTu2VBka6naCzCCNwF6BZSXsgAumb8wjvwAnwUsv5gFUhw3TZhLuhLgGVp3uQp3S",
  "key5": "5V9vxhmVGrUSTSPXvS1AbEm85cRjx63gLL7aCuwxSibQ8vMQ6R2EGuUWgSoEVWbcnRW7gj2p4Qtr8bkDmTEuWDq6",
  "key6": "5rDLenRHGujkCu68mnnELEQD4XaDM8vvxdbHmGMuaR9mJMUnXfkrXXfgRxC9RpAyjFzuBd5PY627LouVBRUXFPrn",
  "key7": "MJnY8XEN43p31canf7ycJTSVRbrYN69KiXdbx3jYKH2jkUrgg1477Ji4cGuL8xboi4XXCaT2CX3awvDfGsVUX73",
  "key8": "iYfhiRD5eTS2WUF9bz8Gk45TnvCHSzxQmGReSAct84RPWQXbAUode6fQZzkyVYZ9fzAHP9s96TKZ4ow5VvJYxXo",
  "key9": "PUyxzfJPSLUuGhoJjqGt3kZVdE9F2hKxUmoH2HGZnfgmwrtxn6ARMNcap68rQSyjUpSKn2k58N2jcRzXknNVeby",
  "key10": "53hYLPaoDiPYUb5dMc8a5zjvPaUL2wawUhK8Ev1vVPMkYNP7xqtApYVzhRkKzsdKXYbvobAgzDLNoJLkm12WVmU1",
  "key11": "3NDHDfDbfu7sYHhCKRWMTQd2pZYyvV4d1Sk2UpyDrhn3EBFaYGFsYzhxZosgjhNpv4tUWURhLYinUWCF3KsyrpE1",
  "key12": "MXdDvnJK7Xkye1n66jhC8jfk8Fu2LHArhZYvkBf5wP9FEDJWcyF8S74SzxwJ59xN6iEsRScvrsNmsJ5e5oMCigK",
  "key13": "ZDvf1cmSTBJhJhc1qkjgBsN9SUjDh9sWGLh1XcbAB6BE3SvSU3dMCL7iMxSJVekCXkWaDNMPpiq2688kSmZFnXL",
  "key14": "ppcigY6tEs2F4WzMwhoXARW4uLxkGdBorvKY3BKzjxMfDTQ6iLUGpb8KK4LYXX6dq2H6zs976sjPn7w6DzUc6Gm",
  "key15": "4Jv8JAHDVBHSK7ymbTa6RCdrsukoDh2YfzS6VTo9kEC6zKjQ8fTbu1KxnGWca8QuvUr6YZBXxHJ1jwAuYKGcLsij",
  "key16": "2ETp3jjivkc2jEssT5bGatUNJ3VC9QqydMgJYbJLXmo4iyMct1KvUZjx13P5rwERWBtitE8GtYmvxotX2r56ENdN",
  "key17": "pzRmZekmmEMQEyuQXuVBDbBkdzzpBHUx5VyS7bJgmiNva3d1xtbb5YjBhNhNUc2M1ayK8HMX1zqKWuVN1BNirgX",
  "key18": "1XksKz4jNZdUBwpM8VSWmGEUBkdC37A8Rz4nmSqH43JjBG9LJ7oYFw7fZNMZ5MgPFub718ff5CQHyFBfVDG37K1",
  "key19": "5YY4wLStEC54qfPUqWMMDAgpDh73W4Vj6K6VciQdbHdvofLi1SnhaKweX6pN6fnEtmzjqjqfxuvycfT2hPnutVVG",
  "key20": "W8447xJFK8ahPBgt5s8xbQw37eCoSUodHyzKzunR9kgUKhMJ33TWwHNRyjMQ2GoZXJrkkXi3PScPNJvYHgLfeD2",
  "key21": "5WXpEy6qVwwMX1Sja9y6enC8JQyMv9ANGhHPXU6SZXyrfJVfiDEarkYaSVh7nLFcMpRnQC45yiC4KNH1qZaxkfba",
  "key22": "46kJGS3LfMokXbJUsF3HkgK7Fu4Du3HsgcKWEKbi29PvKHVovCwj1rFhSH89QArEDhFuoTwTN5e8faABZxtyy9up",
  "key23": "3XxE8fYBPCejRvt5fUPn6em6KB28CavyQMwGRhx7Qw2R5ZhFnFuerurVhb4vpWXs8QcwHT6LTPjHsNWwPxpwqWJP",
  "key24": "3tK4C9DGHb1JmdQgAdhyARgrEtSDCYQvjZcxfi72MxuR1uHYJcMcYqVWzGUTv6WufDFGyyUyBZTrZpeNb4ECUztX",
  "key25": "HP6uzM2kduwtDFRUMKNaAMa2gTJ7ds99YGFswwrp5LdC5g9EpyA3Kr8nZ4Py9LmpJGAQXd4gd435J1skHCdDuqb",
  "key26": "eBtjP8BMXfves2oSukvPcfuUdEEN6BYCQni6WoL3VTaCPLUrvp4RK4qL8padf9wEowQ2cfY5j51kzKCZnLenPRq",
  "key27": "4jGTmuTyNj3x3GPDQSMsy5xi4iWn4L2y8BujmdRW3AnTzmmbc5WhZj5NZPFkULrho4Kig1KxyRecmZRr7189iCp",
  "key28": "5Zss6CNymUEEk8eLPQF4eudfNi4pyXaqmFxQf8G2F13PmQRi3xTkqkrCov1sPo9z6DhZ49S5LEDA7UBBdnE4Ft2j",
  "key29": "2yTcLK5rodyu2DpBbM8adn5JYPquPuHgashicDMTvLVNkCmGPfUPTERbtfbVHxdLQa4SvLDtPC34syCWM8CWKhdg",
  "key30": "4zVfVv9wSSupoWxqKkcxmQXdAEi44MVE76HYT4r3VUxd7FiXvnwFq1tNtyqFPRze4Ne9qhk5mDEh7jWvWfLttfGG",
  "key31": "2SZKABtsvBjiqEprX4CBX9v7QKX4dE9NdqUCGDnYWURQFDnMTcFYnAcDzPbmsCm5fCnE3VzMF7fTspZyDW5pU4u8",
  "key32": "2pr8ZrwnHf3bNvCp8wgf9duZPmcE1qj4pu5NT7kFgwCvairCWpApYXXRZ2jtsqnCpPc5Cjj7bAwugB6FJBx5BSym",
  "key33": "yvWCSLgWzidCDPnL6iebHo7UzXkQ1gU8RyEfuUEx8sD7KR1cn2yaMJv9enphp9bJhCkiwpb1ihM447tAuXsLuoZ"
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
