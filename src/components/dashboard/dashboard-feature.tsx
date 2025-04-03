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
    "jQunuScbDqPgntwFSAo32iZ6XNn1CXibZ6WxzJyaeg3DJEPdhAyTBom1z7RssGtYiSvYVF4GPyhfcPd9FQ59Yc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZPGy4FMdoDHTscpQw5JVf8Q4izQhfNAUw5TdvEcRQb9hfGfZFXKiYLtvvDRfG1k6LvhQvHNZbA3Wr8JHwM7eZyA",
  "key1": "4LpL9NDzf2ESjDYFZg71LPvSVb5fvWiJUPaNV3FXq4hox5DBxQ9oGN8xCUGQ4c4ijzVeqs6mDR6JEWsiqsxDQjwm",
  "key2": "5hGgtkRHBJMXQcUW4a254B4VWZk9w5f95488mM8ygjNeP4aF9RJU3UPzDSjkBqJizeCzNM537PiNBRtDhkHBTnb",
  "key3": "3qWYTP6nmyJCFrBCdTbhsW7c2NC2uAzMDTb8CqYAiWqojfyGBFR8XwYhoQVeBktSPUMcXcTkni16pTTxQS8oHzZV",
  "key4": "VuoPtShWT7mY4BvajsAS8sTnouC3qsK3CRvXYeWfiUKyWZeiuZ8LmYjaojkQMU1f12dyr57KEjaZpuhf6nUbucx",
  "key5": "4mtEVAZiDD9a5ppnvKaMEESZW3AdGpHYjnrUJSVMzLyrTu6s1XxmKHhtqtMHGSRvfubJrSNfHzvekhLeZCpC8Gjo",
  "key6": "4jgcRABdcbyyF5h7MrFFH7dy3QWP1HAPbR3aRkiLtRTFHcpdtNVCZEt4FsiCS367Rz2nGENbq7NkY3DC8GBBL1Rd",
  "key7": "4CETBMkWnezNT5iWZoGrN1bPs6AZH7Ky65qW7Hwc4B8wraMoV9bx8EJQprxEgzydMyJULgmdV9FuMRMYackWMeNF",
  "key8": "DvCFmaGfLM4PEjf2HTmHiUsoHUvqVWNbHuXDyF2Tf7hHQobSSyBYvVGrywdrJf17Z6EgsdSYJxNF8kMkdfjodTa",
  "key9": "2sgcafiivtq982qEQ2WzvgiByvAuveLxawr2yPuy2GuYGx3FbgZbNaqPPaAFv6ARgptWqojKhEA1HgZJiRkGH3w9",
  "key10": "4SUU8bQLteeEmxcbeX8bvUymEYTxNaxBnHcYugHWtydNv1UBr8hAeKqCPSnntEDVmz4Joqj7aMLzLLY4p6MCe6i8",
  "key11": "264Mm1eBFjrLTTzqx3c87NwuN1aqWZfCE9Aw7mQq8d6VbiqDerF2zKAoRL8ewrV56i8FB5QRj1RXFzKba8DR9KhJ",
  "key12": "31FcrdpNnLcACV5PbeT4sjb5nVjUy5hQR4LUXktDbzxrL7GpRZtHuXnHySvMLjC8uMJYH1nWM9LLbDsErrCdfAtd",
  "key13": "3QeUzU91mH8SxU8EtfSyPgVSALMoBCy3JGcDWbCmbz5LdtNsBFZ2d2ByuqJnuUKNgC3fvoryFHt1JiQVdrhFVB1q",
  "key14": "3sPZ7u9rqJGbpcisMT21kEdF2aVJG63pmzR7ivAxZp3MLTdYG2wrHWN7EeQknrHB8yroEju4EgnqpoUMz2mx1RgH",
  "key15": "2bReSuwfyBYDFbku4rVVpsMg67jwVCMR7nrH3HPwxpoGxHYKYs4MJ59bek1mrPoCaDpDeUHfMkBK6sdCv4jnmbP8",
  "key16": "KJGJMGW4YsePeJcBwWync3uQite28GoiwAuX1eNyKTqNE3kHCwp523zbrGCgmBXa8UZQA2sUtnhC6ydFwC8gAWd",
  "key17": "5s7n15gyT9RrJzpm2MdE3Y1BcxoB9yBVtTszG6aQER1N8tDwNW25yaB3cR7p7obknJrHtK9aHBhiN6h8Buvgccsv",
  "key18": "3qX2bymwW7KtPD2VL8tdyiB5BJ7B9f9fFcbPx1j75oqhMXarJ2ewztjMkUkq1tcMXwz5CzEieNb4fGgLBAu7tgiQ",
  "key19": "3z5CyNeAsdK3Jq6Q2Xt7Gf3Se6zGM7bdkbiF7f3Y5pQAS1Y9pgJECVnsQMZBqYYNA8Whj4yJT2HSzRz4Exq64HCj",
  "key20": "TuK8jqJEMgU2368AQUPXUpSyCRUoJLCbZx99BytBxb4n6EXEdbYYgH35eBHT3YX7KyxvEMatiH76cKcSaaVF7Pe",
  "key21": "5UhHWMU4w1P7KK69w7wsJtjMZMDYMzyn5j2aXGxy5jaVxJ8ToSPqVYcjbnf6YMGEN9jG2eGZsxsiw2mNAHSTxKVb",
  "key22": "2mCXZNpGR8cxJVxQQKuvKBrugEsmGMHZRtB77KfW4BVMx1pcrERD5qF4uWWaf4YJFQ75QADWRgjtrCsNAdTU4VKA",
  "key23": "47VQt78Esx5agxEfM78XWaey58XQck7P7ggMNjVy4FiEg2oWoT32TrzzCWP8uvohdk6v3aTpp9bQMBUZ2sjzcb47",
  "key24": "38FJQNqmwPumhW1pJX8jeAkwzD3ry6yHiriKeDbupx21SsoyoDLQBcv3PJfhQHdmtmzJcdCTHd245gUGZjonYKGY"
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
