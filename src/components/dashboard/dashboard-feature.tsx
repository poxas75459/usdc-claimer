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
    "5cMLxQ7QT8qAkusEaziBrAUkCzudEfe78rvrs8uBwzRmbNvzeByK5a6TzF91vF5BpFSHv96RunzZjsoAmCjAw5Ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57zTiGyiT2xNQYk169RUCVVuK5Noev3rREo7FPKZ1rD7xGWZkm3JHwBFsBeYaa3niiTKdNSKKWmdh9BtGdtDQSZE",
  "key1": "3ZbH3Xz6hDDWb9UMKhSBL8kwEY8tn9STdKtrhqTWJSm5HVwxkS4DG9K3a2hyfzfpoQaYLJZ43WseEvXd6sMgummq",
  "key2": "4a5h59XXedM6wCd9x91BaCxnaXTJvgZHxKeNfbFvnp4Cn2YJBDmRVBso8uXFi7DSwmgHojCCPWWvwhVEqzpWCEs",
  "key3": "3ZtNJG7xHEHBe8gQSjrD1nr89eeMaa62zL7czwvCiNjZvNaXPUCVCkohQVAt1L22H6gQy4mPZhBEdPjQco8C7dZp",
  "key4": "e2LRuXSKeByMfiURWNtxrnmNp7xkWu7syadCT39fu9rqkhYWP74xb8Bjoawei8pSUinVeSYw9vmPxz8UyvYn7yP",
  "key5": "EKK3FysZTcBn1CGcLKDwCkMQNLbiX1EYGfqxPLVaVfYhxYiUcnZS4wSX7vSVuef4cSdLv7XvFG7vhLrCHGtAdjE",
  "key6": "4t3bcbGCbSZEkD6y1BT41kjWXL1Jcr1je5Q1c41Qw8mDL3dBUMN1HDr72ZKfpgp1xFgNwZXQA9qoqT6TekW2v3RL",
  "key7": "2buCfuTG1rJfYrWFf2w8cMxy8D6WrKPYaJ9ZmHpdM5szvpEdcmANHiuwV6tQhABs1Y6VHAu5akHweTiNnteXTXZj",
  "key8": "5p9pFw9niggpYRhrFjv78FK5Q4G7m7vGj1Xjxdm85oiatnG8DM9LYA3C5C87k3P6afbSXbdCDpkWEJA4zUJHGW1R",
  "key9": "2rsEkY3VXZHCv35LwXyySMEC1HiYU8tmw8vAMoEuerhnABzBEmZ3z7h6GVW6ZVmcKyCXyEdV8Dr4DdU4Ar2hwz54",
  "key10": "2g9ubv778kNDrJv3wMnYv5jRZrmhtuXf8ksPURvUAt34ncc9eUWBTxxyKB312RBHCLAZnBS7DmgaPzNSi78auNez",
  "key11": "5hzqEZQQencuR4uPke3bm4sqezZEzW2Z4TiuugVQNXnhL2CRDMffCSJcgZkuiZjJrNVTuU6dVvhSkwY24D2K3dWp",
  "key12": "3NFpUce75thaKFdYygtXCyXdwPpnYcVUdhzy8k5BSqHwbtoJFopSV6yfFWdr5KeYuSaQhgRuGS5Lh2o3Jid4K2rX",
  "key13": "42D9pN9BTTQNvtmpY7JLq4rr9ciHsg87qbtXguRSB9kjqnT18E84Q4m8f2pk9FYrGcb9fL3LueweL7AGRQU7drjZ",
  "key14": "4VZKPKJXejZobTSr1BzLEMcZ3s4rsssQSWmqHxm3XuCWALkCdeYusHEiHXYc4WR4zf5ZbmoZ4jcgaxMeZDj3nxJ1",
  "key15": "DoTsPZyeDnfmE7n1V7hQdTWY1gkfUTMHPSAR9upfKZiT2pJpWndNNxv1iSkSdv5vF7Q6SgeNUXAsrkKto1wJ3QP",
  "key16": "61XskoSoYjHC1LbjRE9fGBgwZt7cWxUwaqxWz1Z5KNbKqojgZ5jyDV7Whxv1wKw9kaC7duKhQ5EUUBBsFZnRXx6N",
  "key17": "3U6GsURyadws4ti24p52jKGBVdf2we84z5ac9ag2Yy6rtgan7cDZ8Fh4LcE5GVjASCKaQSUh9D6c8FyxfySM2Apc",
  "key18": "42M7FCDZExYHLwL7if6vsRcoBZzo9W3xqcGnsAGRtWMWRTeFAW2Gd37ZRRW3P77E7XjZNVejHETTmcaVs8U2Kijc",
  "key19": "2SwhszMAncGBfEUdaWRCRwZWuimF6FKRpDndP7sq1sVNrFMmPKrJy7z7BqxZYc1Z9DJ2SZMJaZ657CfC5VEbPMzw",
  "key20": "McDgGx3r1e2AdDPRuPmc4RkVrWBjLWhmDRDHTyz6ymNVawbL7XyxE1fuh1yy7LDB65E4wX1orBFQskhdNCiEa2g",
  "key21": "3u48kbHwUK6ZyKgpVdJLABsbMbfD4gBvdbMPDKdE2A9LxVkNkDBPpt1Z89uakwNGRzq8ri9U6GKFogfwrEc8A7gx",
  "key22": "xRFPVeiRqfMncyxBF8zHyfBDEhSvWTZsRzFoyejNWneKC1yeSGgQc7afcTTfrKX1dfg4sj4bnKuHXgfh8gC6L2Q",
  "key23": "3x3jnLv5FuBzwnwFrLUb1kir7dsrpM3G2iY7yQXAWR3LWBkYvURJkmQzdcLaYYefDTc1HHsHWYQkdYV1XBN1TwbH",
  "key24": "4bx4Lh2abpWYSZzaHPU1wAYkhSUmSwQiKHxE8eAFQUGFNHj1R4FL4QAMJGy3sLADp7L29uMwKn5ryEiF9jAtTzvD",
  "key25": "2rTdpzA6zV7Z84p9LAR7Z8z5LhYRWafDxcumahmociZzg97jzJC5CCAogpoS6psh9DDnmuta9HCMhWoSTCZYe2wP",
  "key26": "2NFNDmPNH5uVvb8vuu7Ksw2B47yT1p8KdbUhWYZf1kCm68M7iQXdfL7pHHpBEn4HNR5Df7CnGd79LZe5C3y5f2JA",
  "key27": "AzAZqBuFe46RPRT8qoWboc3ZHerEda3oRATcsfY4nivKcBxQTTHs6eAx1bR9DgG4yzzWPfzkKrVpuAYvaV6tdK3",
  "key28": "wipWcP2Zkhe8u974PPcWM7BxjYVtw489nk9z6PXNGVU3ij14gbfSvXiaU8kMR8eWP8iHjCDmodSCJC7ygDmQLfS",
  "key29": "432DE9HrZbr74icPUtPmT8AXGcx62zYnpcxXeF4dxYit9tCaZRuW8CmHxG1fBjmy94z4Ao4siQvXp9yxnVHumv59"
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
