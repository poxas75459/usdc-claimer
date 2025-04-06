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
    "3WZh1Zg2Nvv4NGwPfM4YocSQgPPDc6hBNKtnWTGErDdAb8uiBQ48f2VT6sZAh8DFkvSTDb4iXPpno6NJhD4YKzxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RvFTj97Bqi8k6JNXKUfhqBCSzoYkdFwJqKvwTH6z9zrHy6iKUmCCqcBqgBXG3fy3Jg6CjE8YHvAnL6HdrWEYhTy",
  "key1": "43VRP68Gs3DQLEJA1AbCBGFKr7AYPfzfYzYBP92i34zL7wjChexSS3jr9vLqjeBLNcyn9V5bBU8eBRxdhqt2AyzT",
  "key2": "3tdpHn42Cu9MtUHd7NT3uQ3HskAcQmdzfiGn8rDwqx1Kom9F34uAejLDX2x7w4jMRgmZkTTokwSunfU53x6hTJm3",
  "key3": "2MEZZuKBax7TBhLjKrk4RQfKwxrgUwQHUymJRnntTm27EycCPYRvgutV9haCAavgB4YFXKXBjrBM7UczdeKFLD6E",
  "key4": "zwkJQZXbyEzZpVPLYwsuZqJLMKKT2JgudRXRryijJ99WKcyRy1P9RcpAZSJYVCy2PpYyHoRiApKKucFtxz6gQWQ",
  "key5": "wXipukTZFm71UJYbJB6R8mLWVGLy1K1jPJvtDy1depxisQi1GQxhQA5VwgXzDQ81VomWf6iczJvmiTz9eVnL6CL",
  "key6": "4LyU6SW4zJkyqBvcdNb1x6JtWnAHk4sgw2qVFUGb9UZvEukAtki5ZSeHwURpZ7SWZ227QFZnDv7edgJPqc93WNzG",
  "key7": "57fjRi9nxAhMqJjx9w8tsEeEDvqDKUp5ekiVwxaF66CnhxWrNgb8Xb7rQBjmUvXY1aVX1HYqjPQvFhbQHBXifhDV",
  "key8": "ebMSV6hParaeXeLQUioApZE4GuVVAEyfaNEuCByRQmewTR7BfduAKAwLbU8Ak28dmjgx6N5y3z1oUK2eN5nwfhz",
  "key9": "v9X9MM1SENZhS8PRBkmToG5M4UhgzQJRR7pLryEPHsmpatteD9WpgCqkphd3s2YgH8wv77a1QQzC5NSDb2VNGwT",
  "key10": "4uk5ETcznRhsLWwD7qWXZQQE5rJLuyczyVDDUsorG8qpnvbkqb5Drgt4NdTUnebGy6N5uHmqdMdiwt1Y3HYjD9Qp",
  "key11": "4HDsSin7Q3LkRJcKAy5MfL2GzLyq2mmqWKk8ce4jQ4bQWAKibiY2BfMHonYnR2TP1x3xTRPfhFpuSYx6hbzGP4YF",
  "key12": "4W1wAUjS3b6TFiq7KUfQbrrgTKS6NRaJzhZEWdAjofrCYygFG7F6tqkzT8dThyTbHPNQ5eugFd9esnLHZ3WJ7PTf",
  "key13": "2Fdafx9n5UbsKnrTfTGxYkcbuzpi13Bz8jRaPcYQQZgNrT2SCWg1axRqVDsNqtJR9wiktUN6ntZ7PBRFnWCF4Wnp",
  "key14": "4zMsQmr5xUYRB1WfcFqoHCN5HX5xq28bXPaGFbcXqEMjACULuGfity4uGMs3DFie28D6jUAerfyezWeZouSa91U1",
  "key15": "5wudkzbrDH7kaPT2r3uUGgcCf5AfM39rvwyxurxesQMc7XhUSouji9HswPBegJ8jALbeTYLU51xp85KTHu1z8rgi",
  "key16": "3C8X5H2Banv1rT8mHtxUdqLYZsJYi4KYszs5YwL2LzxvkPxqPqoMoDogGvpCg8MdZgaNhPbVMFNWj1PEx54YAepg",
  "key17": "xs6TGazRC1D25E7T5pHFjTpvYty68FpTpDvJTk9HPSeyoWiDRTk7RvSdzK2k2Ha3CzQNiYUY6Gr8XzwovC6pXjD",
  "key18": "5YPve8U6Bzm2gnrJLU8T1xbKAK3RHKsDi4dWyCgoXXtCLmUANer6JuUsn4v5cHt2ESXbZUucYtxLEaGSsNnhfLjQ",
  "key19": "5YFbytEWUmQXzjZRAtk1VxpH5e68cXNZaNmyDGmqRn3jcxuikBDbhrMwFLS9sMQgbvsDE4HRSf5L6gcTZtWe1hka",
  "key20": "Xj5kyGFyAP9XebwKY16Kd8qhaD9spm6zHh7GYtBGGnYuNcwbuXyMxG2KafrZJcsj2LKk8gp2VdD1G2mi4jVZnrb",
  "key21": "58PSsqLLj6wEf68AfpCqNCjxec8tBbRnCD4MhbsUL6hw1N3ekBTaarz4GeZ2Ue1ukq9YZQUEDSJfLkd3gA3xdm88",
  "key22": "41zTw7HoPAKeTWfi1hJPDdct3ghpaoyyWPQts1QNk26gHHwA3twYx7e27fpbaZRccp3e86HvsiCPDxAmwcK1nUfC",
  "key23": "YpxzRwotxaFpaR4K9BzEsPU9eYzTWw4fvH7wrDNnDHp3zhLsLQ9RFoWdQ9DATzkyz647YimVantYV27FdxCnZor",
  "key24": "L15b5wM7ujGVhsiy1tyfTynhc6wyNhsZFRbcRmd7599yxjHHyWfhqVAgpMahdFLf3frsmwiwnVtUDwBF2pQsAW4",
  "key25": "3q6y7YQ4ipyNjt7iaCkeZqkebkz9456WY8FoSwGRiS4Ec6nLXrV9cUAJhmizJ8SfpTuyyBoUa4WbipK5ZhXr9QjN",
  "key26": "3YF8E1DdHmyNUYeAyXW6D18ZEcVHzPtvbvJrFBCztVbProCbcKTf3fL4ieeMujjx1jyGbuYXAAVM1QRf1UE3z4Lk",
  "key27": "566WXwQxfFKYhLsMkeyb4AN6JJmk6zYYCzy7tP3bkBj4FcSi6Per4GWZroKmRrAjxXiNZYwgD9wXUocro8UfAY2V",
  "key28": "6cioCEoa7pvrkcXZBu4NkvjmiKD8YfMqc6v3jVdkbf8zsJKqaqNrstTk6Bvknr5ara7mCBe4XvAof89Njo5ZyUG",
  "key29": "8MVB79gpdnCHJSN41HDtbf4uWE8T8VL73Fi4ELH8D9X11d5G22CqnVzkS6b5oLoizHiAyQxRnr3JiX164GtgMY3",
  "key30": "fweDA6vQBkdMK6rJ4FNk7BKPVqmFpLQSxtCky1bLi4PwYxUM9LdgparcTtrAMJkZkCLMkWCqrzXY6nRisK93Vc6",
  "key31": "2fiob2X9BVnPZFbagB3R6UZrm2xxRqSBRVfo5f42xMDMbVoaPWVgiscoMAnHfCpzNBtkYy4s8zyeZZzf5rD1Tr7m",
  "key32": "5Ykxjz49NJ8yMTZaYcGmLiju4chwb6jJ6YkcCPkQ8TmbpiTdywJxGftFqQVhfZiecggN4Y9bEy4XSHxFutgSszxA"
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
