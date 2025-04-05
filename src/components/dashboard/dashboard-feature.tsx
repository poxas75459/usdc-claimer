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
    "3XBuCdCPrzefcJxKqAs7VKA5kvnfrzYdGQhXLHqZAoXthWeK55xsP5JFYjup45ZSGL54ApXPzxXmqvfqDiQVVvp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32osTYWFnQjSPrZHx73P5RFygw1Y5FM84y9KUtXVwWagsgj5MJFHkaPMmnYRUgkFBbUiaThSVXbDxQGwRmm4J9s1",
  "key1": "5eVhyTyBKvShALtSrc4f2QhMqj8jZBsLTyt1W2SZdP1UDSKy74fB1dh3xBoko475SYttwuQyA9AuLwvGr7Xvzg83",
  "key2": "2PUCQESM8mo1NkxvptxuAZcQdy29Q5USFLJ5ut9WrmECQqmg7JMZrhvcax15jQ3xiew9CJ2uFnAU3wZvysKtzSGm",
  "key3": "4LPgsjBv1p5v4Xb916gXUxc1Esp2mVXtgU1ASTUwmzbqjkvN4W7YiK51WHfbaFZQAGPi1xLw5N6n6sMXvkKydoxc",
  "key4": "5pmc8fG1kzLaBMJCw5zSBsi1tADwFfF5FwgjMAqHoehU7yfVxN3yMPRkqzX1e2idmFjDLDmvCDvA9oUJq747sygC",
  "key5": "5HPr8GMq7JvHTH3JX7J1wGifrgbqe6VhbNuKiGwisPTv9zSM6o1Yxr4kaQ9dDJZVPyqbMpZyzaAfX4KQijtVx6ni",
  "key6": "4WrLMCdVad98B5hi6Qiqn41v9EQgjAvKgCHieDtnJFuR9nBCV2Kxqnz7rF4VeW4F4N1nAXdMCNQpxu91uZYVJwZg",
  "key7": "4ETzamcRWNGrfhHK4kyKSvfNRBCt3DL6hxxtDRD97xdY4hKTTCwvfqCmcf25jphc4ADJktWEcSTXNp6LUFAZdZFB",
  "key8": "21iSRAWDEMwxaZqQrJqpuaeSRz12ZZzcyWS6FP3cT678cZs2Yf4ZMVtkC92DRcZg2hC8k6stu6RVtJSHEs7VjX1d",
  "key9": "56UGXKGjagHsRNEZH5QPF4Dx97BGc1QfmMcAYuzhYGJcz9XToBqDtNuZmULHwdWQC1tRWDttF15UvuKVU1ffsjTX",
  "key10": "5UEd4KBHMP2dmZGWWXjjjFTQPXYMtA3Azx8JE3M2PbU8nVAWTuMZVK2aq118w4vgzyA3DTuMTV9cB3GS5Q5cGHxY",
  "key11": "3Wb7gxK6hTras6XPi1puJR86Mo3HxsS8frM8775F4ksErFPpZmVsToXp7iRSgCxzM7wA3wiR8MzutiCfmnjG6Le",
  "key12": "3kdfz9UqxuyMhAkoCLNRzeZyA3XGjFFLZ6ozpQtoXW1iXVEkqAac2BpUBekCMpNzCHm4R3vQ4LtfUoLigA3WwcGu",
  "key13": "2AmmNUxjKjUVCtZx2Dj6a5HX5GW4AuN4AMM71HsmwrdykBbLWBUeWYeUzEE2Vx6aQf3FveUXeuxd4ULk2TxrdBVw",
  "key14": "4AZVB67cCggRQZTagEzWb6GzYbkNwkLF9P4ZAChs1eXvuqUsdK966ToHkZVU3VQcjVXg9ipzkmZxcqYgEC2rJex8",
  "key15": "5p2yu9nXkhZnA1G53RDwqWWTcJkc3Vi8nzRAnYoZuBy31q2fKmdB1dG2KfrRzv4KKmWBFW6qyqj5Fq45SbTWuSpk",
  "key16": "7MRsjJ46zLVPQ35s4V9ZEjanEPnh51H5xAqi68GMbCi7THfMzpEAxokd3MJrKv1f91nVUjWq2r5FaHfAxr6EDJ9",
  "key17": "589EZk4HJ3SXyUKsjnvdfQyHT4RSf6WHXSNZhFU7AoqP4S83KBnvr6eYAWKnKsA8r2PC1aZxXcB6GUB6BVmckWTZ",
  "key18": "2XWRzMddmxiVCmRXA7VcybV3bi6yu4o44i4g54YCASA1pt7eBaW5VvSNFS9QmfHH3ZTcX1ow5skEbhJfCFj8gHUz",
  "key19": "5ciWqX7qr88EpQM48k2DhpukDqB6rHQ3m6hBeYZLn6mvA8f6htxJALAaapqpJeoi59k3yCp5MDEjUnfbk29kJs58",
  "key20": "cJaxYiNW8ED4kASCjk8djMDeZxwHR3fjP1pbwRc66TovgZ6TtednBWx3NDjN3CrMSYwynd5cWtj3vcPikqVcvyD",
  "key21": "3zq9YxTn4PerabPCTsDvzhk7q21X7X9inZZuBNLACieZCDFjiGwAJDN51aKdS4dp1cj8Evk8RpWzfwuFqvsrcjDr",
  "key22": "3arcCAwKVCdXkHQvhy3mV5Tv9gjPaDvCJMJEqmGv4ED1uZHCrrvNcEpVjqosdTXrK5RF5ctgo3HZ2Dh1jRpZMPSm",
  "key23": "4KeRrD91dFcjTqxaAakXQGM4LngrSBxnjU6SjvWuMfr14XnJhURwPF4UukY5AqMD9LsStPhfvr8BsnXJvNukM8n8",
  "key24": "2SqSi6GoF36qvCcjFiYXD4Fx9pPwmyaab9hAFhRECA5czTmftTFKsRxh1Sd19i7bNzmtadAyT72Tn5B7q29kaoMp",
  "key25": "3wmZWHthMeazvJXqBWWRzY3gwaYEHC6vJHgyfKPALzrDmajhKnaAD49Tequ2YtmHbSFf4VRsLfejkarQXnuPBmkc"
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
