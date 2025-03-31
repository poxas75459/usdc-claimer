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
    "3rYkvKebPTCgqeX29nfkD9yjzpepobvmTWcJomHLjSSxfwrSFBYQti67gLM6ACqZJJqYJ6r6psCvHn6yFifZKv9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K7ZguXZu95YoqQWVh1FzLypNRGsxP3CwsMRgNPvy3m8RRW8oA8K3sSJBHCKtoDRZsRPXC1GG6b6Di94Ska5ZkG6",
  "key1": "3Mr7Lk4H5d74qCfCbB6GKUbgeLqwEge1yKTRCLMrKS5qct3L1iJNK8QgjNhvc2s9e8GaYS7xJ98pHj7g4suXMkzX",
  "key2": "5CVHv4271wnUo6Pe2BJfe49jtbJuYRefCDa5jt1VofQJ53mQCpfhhKwBWozzSTvpGbqhkM2c7booGVwwQFiyu5HJ",
  "key3": "3eMC9LRvYGXZnBPnvKkjPzBCCj689YTL3Q5kSVYMFRi43Gi5GGzVd6PVXixhz23jCL2AvUHsPg8HDtWC6avcW3cD",
  "key4": "4Xk8MtLUH938NR8SomES3nbZvRBCuq7Gr2JY6dezhyTEQhUaPzK6P4KqeGcw8uzqybLmorYU2gS88BFNQdbYALP",
  "key5": "3nbRFfu5Kp55G6eLLmXBvcTCuW8Pyq422SJbd6DfPJGVz2c2eksj6mjMGp7JjkUFybqw7tvadyF5mcjVZAoC9NXT",
  "key6": "4RZ8ofqgjeLnyLdJ9da3HsWyYb6fvpTv9SJ9kpTwJvap3c7WivjbwmxNDpmrT1ur9J4FJx2Kk4N62j2Yj5uLWRKb",
  "key7": "4NhxN94ebLYepDQ9pyv2KUTX38etXumAmhbz2kasB2yto9HzmW7jmLcoaALD5q5wyohUAcGbHokgMJBe1oEoygZp",
  "key8": "hp52QqQojNTnWx6MRFcfGUbcQdgjdqkeStR3a8c2yktE51ByxXM33dshyXFuyg73fJd4r4RLXuFYD89ZwL1xz45",
  "key9": "5JrXXDYs7V91qxbXFnEezfqrKARcNatLthBewvyNNL2yXgrW52w6J5k3oTpi9wqR9BzKKHMjVLgNDeqtTHBsLNHG",
  "key10": "82XGXemU7gUPD644odYmqvGbmF16HMP2TvtUgcgUz8HDFYkgBU8iVSV3RsKGZT1Dud5r1BjuTHuPWhhpqa6pQA4",
  "key11": "9ieoVF9wLa3ej34Stypi26nb7wGzSum3W1JHESju2Kfa8pxRkv11oxz8zMX6C5DFysmQMgf1B3MTAAtaui73h36",
  "key12": "3uPWdZp4QxS8fXJuz2mJj7KmNvVnzbHSfb4deaf1RhsgHtcd7PbHWz9oVMxpGF2YkDaLbCYFd5nvqAVk8qYSntYq",
  "key13": "3c1V7LrGdMD3KRdrgzTHbmCfzAsWUv6jgYdVrcC7LCWtFXsGWxJPsPPZZNdx7fBsBAwJRToCFJD7aQh4j8mSgsFF",
  "key14": "2Gi9iu6s4Wv2zQ8HQvdc4X8Qz6SHcc9hiPTR3NGxncXsrxbt39YGo36AeRtmwtN45S7iUPKsHQaMCu35KbKqcmd3",
  "key15": "5ATPn64cx7yf3gpQrTsbL2JX4b9iihsLsNEoUgXWwz1TSnEcQ2LGjwowcWNuUTgJbt6UJu789ay8gDvcimqFCpr9",
  "key16": "2ZpE3gdCmweSAUiFo61M5HJKG1VGeaksRy7Kqbx8jXHjmYZcpQ2Uks2yC6iUS7j3QBGtjasWYiETMihYnuYF7HHG",
  "key17": "5ZThSUWJojS2shwQPH1TS4C9pSsTyds6Ewaq1C4FGYLPBSgDMBFadpxduuNzgwQrERwxGkEFoiLfTM1eGQz98Gh3",
  "key18": "mhkvNKtu4p48fjc4nKVU6MRcJC4Jc1PnAo9BfPWmsDhwSDgmAxMbL8dFqS8JoohveEb1w8F4rKqNEEvYCkUhnQ5",
  "key19": "2jJf7txiwwz7rRoFoAVU2pes31zGqrJjBMwvJTY91CTwvtdHmp6YjNgnayNzH3pdGn7YKUiatpEwDoLXrW7kp2oT",
  "key20": "2MSE2uKBUw4WhTMFqpFEWWWB3xhhPNjbQoGU9h7wb2sprF1NTFisxy8oahReYeYGHExinzDk1dobVjGhdbUx12dD",
  "key21": "33UEAs2X8q7v7GdeenFGyDaaTZKsp7pW9p8ng4mQnLjoPyZcsd9ZkZewB1AwVBNrTSmXb6FNm6LLuVH2T2uYHmN5",
  "key22": "3DKcWbHz8nhtWQ4aFShF4JmLdDNqQxs8WPVbkvhvVvMbWXqjDknkFEzBcGzXdBvS3MsCnr4XgPFtjvbhF3CQY1YB",
  "key23": "ac24f2tqbQEoQLbHZJsZq2jb5jDz42HvJqdk8P7SATaoPjzFyneiTgdGkeBqsf1NnSQabqYcRESNVEh3imXXNjw",
  "key24": "29Dbjpp3BBeR4Nqxe1Uy932G3A6A5GeHf8YCNfpNZJVpXAZtksCJqoF2eMMWtQC34RAmMm6UmavWieE2E3B5abud",
  "key25": "5sNb23D6zwXt2Eng33W9EykTGLgHvftBr24tX9tUxvzpx6vAwvu3wqHdHS3JcFKXditUU5kMq5P8bZcY6FJyzBiy"
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
