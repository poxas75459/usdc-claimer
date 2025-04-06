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
    "orRzbZy9ESx8NfpviovoKhAQRxBoHarpHApPL9GGdCTkhW6SjJojmrNx7Y4kr8KqyrVRcFuhKQ4jrUmpeF9RU8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MCJaisLb2wpqzT2banxdsKyB3wm6wgpsMLJbDD872Vt9mq3yKRCZ6nna7ckEXDQx9jtrfTS3YLJC6LWqrCFxsfb",
  "key1": "4Pq7EGi7yxfgMNzMSekqbBpR7vkVX1jkZgsjyFUNEh4bCP8wQ42HLMFcexSdXxTaiBqKWwXsrhCKuCLL9u7hrtxL",
  "key2": "47SNvePgQnjqeGh9BSLSybYkyU3ecnznbZ5Q2tK1rsJEioXVDtLUmFfzAs8g2rfHXYiYudRRTgRTAaFypsgq33yh",
  "key3": "63Z3wn3sLF2uyLxgtbPnYjMoCDfmtHsTFt4eVWYYe831wM89MPJrSYoBAxApWtrcyns59ei9fbZbz5g17Cub7vKj",
  "key4": "26ExdBZWRhwcnByzCoU4uBGwkk8fzhaV3Z87fgHbc42qMuJaFZKC4zRXYQr7iS4BKHmcMqNLVkgE3Zw2mZjeW5HR",
  "key5": "M7Pmq89v2x3eLi8ymW5xy2MHaJKuZUNpWMAJtB7qPGa9LXWu3XHaN3Sv5pY1p2WfKyHBDsY74x3rwpHTevGFGVB",
  "key6": "yHSLHAgsKAeNUSnkwpZouQvqX9vitxhKi6hGtYa8tQDvW8WxqknSZJ3ZU5iZSB5pyMsLpxP4WMeCmsxqcEWrFEA",
  "key7": "32VDfYWZiTyUzL4SopA5XcnUdVegCSy6xh1jURv7WgtrgpTYN2CiV2fHQpT3GMA4BqSh9dG9RjaR9ise8DHFdmhA",
  "key8": "2CroLLgN3SXgbmD7Troj639JujynMCxmC9QeJyHZiWcNdFK3Q629upKp8hjfZKodMnAsioCm7mT6amSqRXyXuaRd",
  "key9": "2JUK3CYbyn3XnzmpxMZXgfZcfwoxwfhiWH6FwSDx5cPiTeDFSzHbGgMfE9vuuzhukfqLLoijJovFTWiwnnkz5ya8",
  "key10": "2HWdNHzeJgg7phy6swgRFaGZ9g7Bzr1BjobdoLctJWFGPpKr2y9kNbWVZfHqf9i8PRZ6EH7guQbs6TUaFBprYmjV",
  "key11": "vDoDCGo4ydJYCiZs8QynqGuHdU2hV6mkwaeB6TcZnTuuswphP5ivLTBh9zEaFGicKcnqVCGgZW4r2dWZmbtGB9E",
  "key12": "3ovdzR4wkrEJ1NvUndmZ9iguknyEtNNxdJQaZ8cxoeBvoK8tJusLFWD6W8x7J6HzSAGGassm4MjcmwM2xXj5Pv8g",
  "key13": "4KABEjhb89RVGaoVupJcX5PRYMkTbZQgi8kyRjdhx89ceFvLcp98CwedeCGVcRGHxu8yWXobcBHLcMBMcfgSM65J",
  "key14": "2vPBrXUbWFPEj7MocRQHfvwApy3h9AB7eMmFqfSD5keCjAM2k7P7Zs9FYP7bPxHn8eaEKDxA7VsfMFvasTFPjZK8",
  "key15": "4rXL77gMt3NyfB7hdo6yWKqb1udR1x6MzVNu7vz8peR4ksLRszzyhBkNfQzPxZJ9WMNZzhuTMq3Nor6XyTxjEDE4",
  "key16": "4LtwNP2XxzWttcevhi25kXsHDymAfc9PgSeoBM1qAqRADGg915C8zGNBPR4BPv3SAgviwUXhzg6ptcjzbKfz2Tsm",
  "key17": "5B66EVQ7qdpuhTwoaHbvJ5Cmb94ZDvXwqEgGJvTgfcCb8Da6VL3xuCreYUedSoj6fzq7r5A3dETwV6rie5ys2jSV",
  "key18": "2BiwfYTb8ib72zGNSSv8EXjQxi4KjYtFp2WkQPHzJZEzCCpSPgaJq3Uoq6qTAepp6bSp75FspXe9HuWqDokEe8i6",
  "key19": "2WVfwSgTEM7yRgbNE8c6pQLoHLnceCRDQ48tzPrY34DBvdpoUuWX9tegCb61wveeyEM5MJnxZ7eN8B766J7311kT",
  "key20": "2bsYADBRFyA1qyK7fxRLYwk56Qye6JpXuQUHfPNF5boEYVoi4ENUEYFtLDHQKd7u51dsvSgNStz62cgmShB4eEGP",
  "key21": "2WUEdzwCcmW1ZRbf7REUiy31JMMBbdJLfNBMdx7kHi5Lq2d5nw9A6afxbjXgJ35jN9RRK4oBuB2jukKWYLkiieSL",
  "key22": "3nocsghZHmRdmXHgLd3sxtYnRmMu54QN5bZpohvf8ZegLeNke3PQQ9iSZY9vUjS5TUq4j7HSztRsetUW3scn2BHT",
  "key23": "5zNstx2QRwKKripapBneJvv21wPT4U6hugjAfkYEtNwDxVNSdg2jCrxaSpkjvAFBvZckiQi5L93S2xTwiBuw1aqF",
  "key24": "5kKAPrvnZ1qUqYDtTyvkPD8qta3H9jT5nmKaVJjgJYJEzj47mYs8dn9wPrw9T63RGLiAPHHfu2KVYqgLjZzb4zHt"
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
