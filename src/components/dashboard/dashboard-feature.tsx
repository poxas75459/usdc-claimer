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
    "58rJiWP6H99DxRjipDeKyJNqdGgxxzJToMjKEDCgud8hc2LzvgNXnnZZ8G5DK1wp7GuV8xctjUvrDVdiWTpF8HcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NXE5jmMffYCAZD642Vw9gKgQmjNveM523snJBnA9TQwZUX9JUaxyF1Em5zfb7VyXJKFmUi2KKd5oD22iXaLkSG6",
  "key1": "2Dm5PSyY5JxAsRYMnqY7T5Yh8w8KwNejouSTbUzaq4DiMUwA3WRthjHhmvQD2muTdPsgRcoW2X6HFF7FgfF8B4Bd",
  "key2": "eJWLQR9BBsAcCFwM92QW5XpKKqqWMeUn5K4k8sUH8CsizAx52a3vzPCGgy1ws6TDty56kfufU4EXp4B6enmXyYa",
  "key3": "57hyyzU3UzRwz9VHRtGPnPVBGAXES754iF2WVqFGW3zR2vxUWAxFmyCXyuCbBW9yQYxuNmR8UEqfjocSuNQzegr6",
  "key4": "48gdM7V2E6yMSyKJHJdSoFD8rGm3L2ohVg5DVvqre2xY56aea8yMbUP5pktRGZ5U2EBcFejYQ6AG16ehTHWvBR6N",
  "key5": "4QocuWXhVFQ9Bg6gHkRmFajQx9owxbzCmj8P8Fq98QUwjA6CX8bat9dG4WcFJhLH9LcaP2hcuu5TcRwD5TcjVPDU",
  "key6": "5U5EVmh16FqjF5sVkRbSioN8EBK8PwFF3aHpemAWwnviDyw1vJmbqBFRSyGACL7uZGsLqFUJCzhCcvkXgKPUJiof",
  "key7": "pwW187Qbh3kCAhcC23ZkWNnRD98FLzm85hGgfrLxsxJvsKjR1ftCJmtcdC2aQDL2yZebgexcQpxWgqzL51h2eYa",
  "key8": "41xgaBLVzA8g2uoKP1sQ4aDtiUEjpNuRGup8Z7U3MNcL1hjBAtnV77UGiqNKrc8uP6X7jYVoZbMrQFteRDHfe6Gw",
  "key9": "4RmLCmkvz59DEjqV7SxqZ555ocCmvU8J7WB9Z5TzTEDY86mbZoKqCYPL6pR6ZEAagNp7riYaX8vEJAhmkfcK7r2f",
  "key10": "2MTUH7rJ6eSddR93vC6DQMEZYVvMqgzNJrcMrEYJQ8PDxZufN4oSvCQ3VV6GhWij3J1v5cT7t6hTDwBwZ6Va2Daz",
  "key11": "argSTGnr3Rq8ubYDKnaF9CR8iuWD2RNFZGCmfMwM8jMFSS9g6PdQ9EfkiMUBVwxRXnkXSDEVMG15Dnz2qJ2nxx7",
  "key12": "3oFjhCLM3QrVHPqQttwvgNfzsB823unEmqW8nvEPwBpxbqdwaCUTLJRLhSC9JD54wwYCFbnvHyJiN91MVyZjnaQd",
  "key13": "446N9byVhLaHSHV8SkGcS19GZX58rjB9FKm75QpxiG98zGdrKQe5jyxN8VNZFt3o9osLqRzoGo1WLDTT5gCzEzmX",
  "key14": "4JoH35ifLuc6bsrNGY3hh5MZGbHwofn17gZ2drG3gt5B7HdBmEzdUXREePQCfGtegZ4pzAxhZ2vCAic18Sgh3mSS",
  "key15": "R1tdT1pGFrzHaMNYKdzKThUneqCNAx5qJ2MNFBMjaQ1sdeAerKH3qkAgB9ie1F9GnTk54XtScRPJKkyVc9TSQyg",
  "key16": "B2jvfKPyUFv5aRX7U3kQspswu4Puhhe6ptzb5Qt5TXc7Y5TECzLyofCmdq1dB1152jSmKKVNG2ecPCSrNtW7eYe",
  "key17": "67G9qpzz8RRKagfM5PBNRVXxwnG27UMXJTPLsd1GKFgRhnJPDAnADKDd8KPyG1w2doQRqFdmdvRnGvTJ7isnUc8Q",
  "key18": "5FJc3XsZvSJE53E2qLV9FNi1xZCsnTs5pu1PGn3iEcTStVg3XsMjJ4FvfysD5XELRWEHzqdvkUFfcmJ9J3KSsRW5",
  "key19": "5V6os5YkTyQwut1VwpcYMaLJYvTTkGEzJFy9pVGcKYaxqTQQDZuC9qeoZBv5ptGBneRU35nD1XQ5wfMHbpHjzvLG",
  "key20": "2nTAtySeykoYSHNTQR7vRxQEpbUMc5uKX4KP7M7WYr57fWdDsyxT8bTwMJejV6QZbBVmLK296KnNr5RQvHkWQ4Gh",
  "key21": "4yo6BSBTJHKHjxPJGT5srEhA1KH9JcCbMPNb52sdC4kKTYWMH77rioKP8aMMGdyGF5QDZLECaFLKR2iZw6gxSrLS",
  "key22": "LVTLxJf5roTjcv4MkTY5oPt4bH6vbW1Nr8XPCQbR4dzdgT4qgRQZgu44zMmuWLFL2gECwYrSn6Tv6DSvvqspA75",
  "key23": "JuLZxYc6q85qHeWgRx9dJvofui4KjtgMJArvFBgAfDhW71HmKKqyczBdYoHJdQV8fjT9uJJrBFRT9q8bfY3oxx1",
  "key24": "4pygANa34WUqQaMyWAsbhkU5aACYJ4TYoqwLpsbN1rpdy1BAopCBN2QByyX4K4892tPtWW9GKaiTWR1mNRDXDRhV",
  "key25": "5hHgHNTqdNmE26tQTcWCwtMPahXKqKYv5eHdoPoZZ2mWGTyGVt7GFhVnRTNYG38fe8n4WLZa4Gg3eaQFh9YqMbMd",
  "key26": "5ABC91VtE4i9um9vBuH7hFFiAQk3SNfpNNntffwsUR7XvupUs6ChcozuYHCtUPvSVW9Nr65V8i7iBV8WPXDfjhQf",
  "key27": "2PnCviB9r4nkV17AWPdSRWfp5jqCMfoEpEkNT8Zkh9aFW1Ce91RwsnB7H3CK3ZyX95yiMdowtq2v6sSZfPxUd7bo",
  "key28": "4eCjUWAcCeLxn7MnMt97pu36dA4Z13U3Lz1azzw6EFNyfca2kQohbU5CQumvjEBCzPmFtcnQks8p92q1YvigBcvv",
  "key29": "5vmxcQGdprUUrmaknK4hcnQGCvJc7wjfGk4NJoG1BjFEodVWg4eHxELku64itX8Wbhg1K98GQUrNoUGfehFjgKhq",
  "key30": "AD2s1L2VgQahCZyGkw7K8qwB1PF69zDkLkjkSjtF9BcSE2nooKWCYwac8vQejMtNcQ2y1TiYNjnVEYqDfjc8frz",
  "key31": "45yrQ7aK7qcUmUWBVr7C4Ey1KHJKVhZRQLrjm6WHcboWgTj6ZqS6uSVWVHS7sxv4L27JvYqqVWRDMv9nBmqLovPN",
  "key32": "TtE5eWMESTCZLKdk1Qnok6gmtQc61WgrWXEoDNt4NWzW9arCDCyexAmRuMLbXzsThM4fm1pF1iniVEsqScWaqaS",
  "key33": "48pVXtEgmFL2xMX6jzi2GLgcPTFhTsgM7WVq8AX5WzMeqVw6vZo8Mg2VgiF56XZrkzdxjBzS77Gh8i3tZTSKhNRu",
  "key34": "2rR7PoyqmV9HDnCqW5Nq8bgLY62LCLsoauBkkAQ6Rynrp1rBwNzdv1bJ9QChbHny8HNzzuLb9FBFs7hz9YgE9VaC",
  "key35": "5XQWcr3aHZsVCWCNsST6h6EaxVqNyDEhSBNum3fHjYkhkNngStHQ8RJtVRqZm21eLBgKAByx5AKQATtdR6a3jPja",
  "key36": "31TwLdJ4nGFwXcQbJwuzJR1ZyviWvXMMaz8BfHfEDkCYDfrpDV3FmCfbBYUcJdHuMWAhuAru9ddMFQAqKiaYvCbL"
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
