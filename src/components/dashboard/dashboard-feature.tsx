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
    "52FvyJVRvS2QwwGjjrWBuVQQuX93zqSXeodrgB5YKv98U4nzXuxAgJcXzneKGevVHxRmmeMxQogMAjP6DnmXTwRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vRn6mxw7tD91YdBtiy4VWfCWQ39kjtpKvWv6DfjfLKDGZKvurLmZkQJzg8bAgNeUywiQfsaT85tdrmGVY9cGYLR",
  "key1": "2WXGUqTRDR1b4TzyS1hUVVwWyzHZouuCnAZNiNx7rkC3HLK2W1wn9PxeMYQgAS8hqjFV2usvGmuSnEoHvAPi3oJb",
  "key2": "JkLwzBwetp3HyBxyP8iwAENR4RJy1KLfkK6K4R2G5aYXoi3doSMEgMewKkymKzMgjjfVWqwP5gtfBnaVaH4kHXn",
  "key3": "2hjLbhMWN449EmfES45yUxVHygHMqMy6mUXoRvVu4FoSpnQhKygevv6Dpc4C4bied3e7FTHsDnb1HWJo3xn94S7h",
  "key4": "5SxBbri4XWrc6G5gSQrQdnRuUq1wQ5AfqS5fwb72uQ965BNZ9CUqfvuwdvXe2u82ggf3po78VCPrzwVeuaPc2ekH",
  "key5": "31CjE85hgK1o33jCuwZ2KLv5bop9V6eNwpdAeHj4ipqmeDcbpszyGnjgkUCsFTztthDDbNxa3JLzZ6WjyqGstpHT",
  "key6": "HGhsKYjdybSjUMEcYNku8SheqsHVyV3Wc7aV2mdGDtpXqfMLH6ff9RkXf3juegbja1PTt7rLjKmBzxPVysnKRXs",
  "key7": "2fu5ze9i3LLRj3MzPQGoBQM9BZzT7tv3h2ErPL1mY3jvDhrmEHghJVwRz7HS8peeoLYmYVKYuVHkSP6bcE5CMCt3",
  "key8": "2tMvCgyoYHkRwfigPhpWyYcmtnuF4tYvvy1vPMwFxg4mLKnXKqa2ud8tCDQqBiCJxJTZRvjXeovUoJV77Kn54Eo5",
  "key9": "5mgRT5EYimqqv19ZUjE2KRgQaATTUXGDT7ppwDrsqmUbYkdi1hfcu2jRPrWRt6tDMVTGH6WFsUdWZCErAUQaZ3vJ",
  "key10": "i1F9UvD4dWEKnjCvzooLBoqfWf8eFcWzxqEZbZWD3Bjp628coDihy5YSNGTREcdNzVeLvUHw1CsNQ3rR9W24oSM",
  "key11": "44fLn1T14417d54B9odBRPy9BkJXx8odBqqsnedXpndfcREEu9aoB7VVWrUq9odGRYEnPwSnvVVSZzaLK3B4Bjno",
  "key12": "46gnhsGENGd6Y4vza5ozNWNeCywJUKhF3UF8aPoFSeTVDC2vfFJBaj9yRD8vfvNxEX7exjLosbTwo4ra7dY1niXa",
  "key13": "5Xdu44nv49XeaNg5Zgp3QDEUD9GzUTTGhf7pRHiCw6wFq7uExGhAdXK9tCgSCyusuvN1gComsCuvs2KVoXtTbus6",
  "key14": "3zPW62JWvByr9gqLgBmZ1VXzBQfxmPLC38z2ZxV8BufrmmJCXYnAtVhJF4Y1pko2JabZAcQJEgYW3xdAv448cqZH",
  "key15": "5qXcnzxUGorcJ7sc45R4j4d7r3WAQWv5BKmnQeKyQm6qYrsicWUiXMGrQAd68tFSK54DeeK82pZLt4TdQKn5WSfY",
  "key16": "7q3U3W1SxKGPU9LxgBmm62kkcZn7MH2Ate4mZJNnx2Srd7wFn3dFpr8pnW8rKF7UMa37oq8in19Q1H8JKRzYsF7",
  "key17": "3WFTpiDmAjNFg28rQFPCovb5bCdFUAqvN5bUPGEFYjtkD57upcBxkqCfo6Va6e9Jf3RgUJQb32A3UbQBf93uB3NE",
  "key18": "3TEPnfFD3LisZjCR3GZSLjYAdErG3tY3irEhUDso9poEyfy1DRYEAsYQ7VDUSUJwSunZd9w6McwJYfE28w4g5b6q",
  "key19": "77jcH1mKkmW62uSWmGCzBqx98dfBjdfeqgveR5chbjJfApdpjwyRP6UE1gKggMFQo5UeZDLiTF3MNTp5vCRtGf7",
  "key20": "5q9oY11WsTQ8yzXxbSWeifen5jVjsb9FMybaUrrSwv5t2ot6rcFkEpqrjiGcLfqX8SeoxweAY17jgKFATbWZ3X7N",
  "key21": "3D7RYioT73YT1nN2qgPLmFEcAPND41kysH9qyhF3SX2XjkBEuRdoQ9XJAYePUWTiRSKWpo7zzqQayFDZ2w2Srmm4",
  "key22": "4uRrZC3c6sLEMbz6j2tw2w7Jgzob3kx4TWiaqaRsLPm4dQaYEYidAjYevhTCfwRx2tapzcwJGdBv7CyPBL23EfBz",
  "key23": "3qcdkMmf8hHacaX2KXoZEN4vvtf5ZKh2mk1L4STPjKXoVnGW2BiaYZRrR8xmiW5nNPvXJrHVvB8byJ74s3kMvwEn",
  "key24": "2V9ZfPk6PYqp7qmtWbg9u7TUgz8AqubrkVi3vGmgYVMVznSa2FEMKtr6wq94KL62ytatpiLHRFzCNatP6Povxwd6",
  "key25": "8vFuC4yPkcXUJEeZKx7oQKPWgE87qm4929Zg48sNSH7ydZxeVCpMSnPMrLp88YGFyvWVp66HvAYh63GFbdshEar"
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
