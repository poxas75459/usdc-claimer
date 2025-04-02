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
    "56mVZGY12w36bxnjwv2ViPzwRswivcJV6KFrPkmrmaLycDkCvKpdkEMTD4HPWYco3v3VEERQCCvBUwyZiANXYU1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LB1Cttnu7RoKhyq8XFQe1bwJMbTEaTRcCt6QXYK7f6fPexikfTVPXuQMvTpTh5viAi6WeUrMnJoheT2U9BDpUQg",
  "key1": "2qyrttUCTUFgPzS8UeNMX5fchXveukzx8K5W1K5DitTBPu7HBNjR6AELFwDGAoKAT6ZjFXtPSsUKS9XJUsbdrVPL",
  "key2": "5YFyPEVZQeF61ZdCdJiXWGj38UsgLEJBFMKwdbdQU7MbbTkhhoS8huokUmrRzqdAG6B7aN9z1oUsnUqKAKNwP7vX",
  "key3": "49FiQ33om5m7G3NbthcmK8Uf8rF67EaBQaBJPxcqQ1xa3oV7QAXqaond9A7Cs3zbUtoamNxwh7ybQghWK6XDTyqk",
  "key4": "2JeXGmEsXFmaZs1jGqJg3qXywYgD4BCnypsDfgLHzepCetz7SuwQPtTyUt74wZKeWKkt8jANaBHvR8RMiDXbPzGg",
  "key5": "5p2CwBL2VMrqAdEt9ecQ13zUe4u3buFjKw1mfvbUi8bFkPzQAPWcwunyy6jsEapmVvCFSCKCxRsXxX5vnUAuo2G8",
  "key6": "3KRSGxjkxtv9J1zJjt3BR6i6zURHN1Wc3m6otUVwbPXHyGrNiG3xMTSSQMWEw1mCHd2TocPBc3HYmM7tKpD3hLpk",
  "key7": "2FGPUPsQGn8kefzWEmu1P6pykjthtm1et8knkw9hTYdavxxrf5T36Nxp4gWkThVXYo6vEhUGx2HztpZLZMHMzeDQ",
  "key8": "66wXqECER3LTNBktooa4oxzVuVApvY1cCceb5yqCrQSmFD82riZFKirDdSGbzgFiANSBYZhpM2438nBhzMuz5sW9",
  "key9": "39NPFBtSAyTizu4s7YbdbcVLt1p17JtD42ZVbhRud82u2KRESWsgiyARDycbmyiNqBWC7Jo4x2oGZvRBBN6iLtCZ",
  "key10": "FnST3UnEBN9T63xCMc2myZkPPnh4dpapjqNK1knnKbAczd5k5vKXkRHXe28kGkUMZHKbtmQ8M839Dn9VNvSZh3o",
  "key11": "4HVmLtCiFARfE5nhLMt1EroBRGwCYXnoJtxiTKZjfQ3vjXzRes8hFz7GPVND2zUD6mGiv3wQfoEvF9mat2DZwiGb",
  "key12": "4GkyJxs7UW4P2MYdVE5C1ByGLVZvtosQ2dPaLBjuTmJTPNp7k52idw3T6ERPwYhF6eQDqZxwFaTnfEYmXBuMdPby",
  "key13": "3KjknxFkHsXwsqG3hioTtEyToRLjFmMTcKBKQTUoMZpecpqcTpfnZqCPwobQ5VvGfxTuxx8UHaYMEDHW4GBH3Aot",
  "key14": "LXoujQsNEsumSYfe5Ltwuh8XsskkHWurBWgYw4QRRs9SPHgNZbE8qrBvmxAf7eu5VJmQaASeNx5mxuEZ6BucxCG",
  "key15": "4uK3h5AopHuXiQP8bBSWvDbEusAduS9N1LK349yEPMoXqgytXR53MJU26W92WaA8kwfyBSah1oz925VVAXgzQrgm",
  "key16": "28peCX2LT1YfcKgB5wtPEUYwC4DPrHFnN3o1AHD3K1CTiBeEyn33xexNGvhgbtyW4GtMftEmN3dXBQQiGxUTdt5x",
  "key17": "4k3xjSKVJnn7RYQpimtnPZFwUA1oLMc9H3ni1pppoXgwTXQhiLboCzxv6mkFSjevoBpFeh6RRajX19FtoD8GjGsE",
  "key18": "3utbardbUjwcFfWvhkuvKaKQBFowXUzi6cyYSi6YZt3YxZmBhwuQtp6q9rxdtL5piyNJC1SKYu4vEEknZwvNVhu4",
  "key19": "5j3bnctEKWg9Yri7QGQyV9EM51p9x3M5uNxQouLvVXRkdNzF7MMdTGe7cgCWfdh9wZXfCfWDthzd66ureGsENyUW",
  "key20": "3fhaPdjBzGCWScMkCBfAsZb9yfYrUzTkEDbantfwakbN8zyeA41A92jZgkKJwZWUV4kjZMjnJz5LGfqTB7UXMuJ7",
  "key21": "67g8s69W2xXgq4JkMVJUL86vrxbezjdUGHu1rrkgkX2bBH1SPHhnRCk8e4Emcri63kMkQ9YKx25tbxzxcRVxUA2i",
  "key22": "54QVAvLaaxQY3Tqk7g93TgrJJA6fUCnmkfrtqTVx7cpnwGbdbpvrvRQKumBvdBvV8HrrFhEnKeBtRnbhoVjfoMsX",
  "key23": "AXwzfVCaNqcKdYAD9Jm9u3ELyjKiWEdgb9UxkDqVWy62F6aPiy7C2raqX3mmSr5mXA4hpLSimBEnwGvNwvEKfAY",
  "key24": "4HeY9Lp72YAeiYDSiE5Kbqg3wjLYZBT7je7GGEoxvdabcZ1m1CEuh8R1V53yhDzMrpznVpr738vJjwGL64vGMJrh"
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
