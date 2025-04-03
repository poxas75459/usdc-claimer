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
    "vVRqp2DTnYXigwot6DLrSG8UALE5mD9jhqGUHdqbcPoL9zG3oATQ9MVU9U1NVXbCjV3oZhPbJ42p4cZNcW3jgAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yQUywLHp4VDo3v2oZ5WXdiQzVBJinc8k8S6n31qsmcKCw4i8ynTjC18SJjzN7nKPHiXKfFZqcjyPA3SB8xySdWd",
  "key1": "3pcVZd5CpvoZgWF9XiRnuMTV7uTwis5rfGmDbLEHxCuN2Y9q6BrTZRXA1tbey8kkzCjvCVEXJFtj5EnZKTeP8Anu",
  "key2": "5suVGc4tHsJwsi6NER8YVTjAwrHhAFpAUNJ8df3z3MvD3cEnCGVF1M1M7QmAQS62AHizNNJ1QAx22n4bFbyjpbpa",
  "key3": "5VH2pb8nVQb8U4ZXkbfLnewXejK471yYjADu3TpVFtJot7Xfq2cXYzWnJawByzTgDBmoL785crqQr36LpeMqYw9h",
  "key4": "5cXhtV36WGG92bFsXhGFHaH5DaTc1FVmKz63SD568Cz19fT3SAui3eZwWftYWBa9nqG6HpgCn3mbdYoEcTWVbeCN",
  "key5": "3fKVLjupik4JhsfZSVAxrVj85BEfn96DFRCwzdZL1pfJ5t1TtaiXb9pVx9W1ejuBt7vaRt8mhw7osUpKzyzPUQag",
  "key6": "4WK4wSEhuPP5tiVyZPueWATD8S8zfFNj2xK3ookdRHR4xSoHFZpF71bFk2JtJjHFS1BSqqanK18VUmqqS6CsdGmK",
  "key7": "7mhmQNJzBAUuEfvErGoqyUYYAU1yR86q7zSeZUf97cRaCPXBKyqUfvJA8DbGDLehYh7qbCPwqUUKzSRKrsK6jTC",
  "key8": "3jckkQdN6rMR9HdvVR5wZNPrZpeJzjfqUSWTKkczAjEcX6LHNcy3jXCRpPYeXzcC9KC8fAAWkvfmGwrPPVWGccR9",
  "key9": "4kfoq48M9MUR6ZfceNvsznq356WKHitM5ajVFj22v1pRAxDNLzcoKz7ChVwn39vJY7w9RjWA6AzS6XHRaU5xGwG4",
  "key10": "eK5PbMtQ5Jjsi3LNDrusNYFU1b7sQB58JQbZTZnE239jzTkQcSMMvuMWPrjhtGyy2iP41pm1AaG23AiCrDGwMN7",
  "key11": "5h2UPsPvdji3Rtjba5Bc1w9Kx4PEfgytS3QNYccUneWBNi8A1GFTXGR41pY5MLrUGLpgjVa8WzhzMsnkckSf1cVC",
  "key12": "2wLfRnyJsiX6q4xk19oWzZFar9itPvvR6LcsAZGpFUF5xwH7STKfcxddVAeS4Yq7TBzBRK2bjGMuvcy7erFVuxcP",
  "key13": "33HgAYfd5gVCghkEyWNzqKsNkso8vZWwnJSLVYtm5SVZdBJhSeYrbgbKw4CrwsXDZL3SUZcRP7gcgwdRTDP7ZgTa",
  "key14": "4UeUB35ARMohzwy5gc8sWa5dHZzTb9DAidQHTTDxDLScMDUt94a9kgUmSxdjgXLm6w8pfpqvCRHNS4hEQ9iBxpZ",
  "key15": "3ABKREy9f6W6iXfJx3tJQJk7ZXGZ1KbobT94vf5KgVHGgARABJqBrhnQ42oVzRaMBsaNhYsSk8WKF3KZnQ3bQx9G",
  "key16": "4MSxhGn7WKAGrsLkoQXfiqEUuRWVkqjqTZcnT9MkBd41YP4Z8druLQJrhz3NL7sqjo2sahNGC5qTY1CEQNmjbGca",
  "key17": "arKKxamifWNAYcsNkr7rqzxMwMBtUYnEamsKjh1ZnhaiQCZhJiMEXWzJFno8Es9NnnbzTQrp1QaAhdu6pDLDwY2",
  "key18": "3iyBX8QAUm5gCTb6cLk48eKTERcYyF5snenvoYxzymV6sXUtKs3KtJSgD22C2i83HEwiHk9yDT1HvaGjRMUt7ib7",
  "key19": "2toSCm1BDwbP7LgRE5aCPrqJsJBH9gC6mCVhta7EDyf43qE2gNc5K73BSSKeK5yohg4XxNKm34GE6i3R6s2btYWN",
  "key20": "5y16x3WBAqZzqZLWr2wuAtEVZdF2bYWJ279dbeRfxeXVG5K44PM55U4E8AYxuNi4jDcjeoJUzz7W1hCgCpbyjvBR",
  "key21": "3mBZk1ihDi86owiwZNnYRgFJRCBgCQhQAjM15uHRv3mU9Xm42CT2sxFFiuMyjEKA6D6y3qw18cCY5jBqMGDnzXXs",
  "key22": "5zYcQm6c8WzeeCkav8QckTPS5mtFJjSJUnJ6hpV91A5pD3usHGhQbkCnEUaLHABfJTHhAkJZDayrU8pkSCemgggh",
  "key23": "5NscmLLnrwQXwi4JLrUSqHTnLwD1c9W4k5vYVy21uGHZqSpmaDtYF1xWaYXuVjbm5QgiXDqFP5DGkTfc25SWiLiN",
  "key24": "4XkwT7GwXh6UAMCddV6crjoVQwZ4EkYNFegukMaebGW5t3Rzbn27ZvtHELHCgH7QaeMm7eheuU1s97R6YTetiwBz",
  "key25": "4Mp8qaH9YkjYtkhxBRt9qVhN64BqUUiwvSHBQgrEEs4aYvevhaLEPipXkj54pNHtB7qNQmoKfdey4TRDJMngpT6p",
  "key26": "4gK8nMX8M5nkya4JbRyzvyckZstNxL9FeaNxJLCrtoy9fXtdbhdVTYKZuseAUiiZ4ugczwqyzPzFNrSF5oVbFgvB",
  "key27": "SZjErVe76ajJ6D4kZ4yeNSHxLboDRinKrjbX2D9hBMUzE5pS2Eu3kR5CaMvrbDbq7ajDh7n9JDesirX1ebRNKs6",
  "key28": "oYsdj4rgXSwcMgQfjuSzGLJ8Hba6wuPVfUstAukmvr3pz8PajhqA3wvZJhkgnTvwWJ3dLeGGMLz6MMatfn9VHGN",
  "key29": "3PL3wyhJqx22avgc9TEt6Z91WefJ6fGUr8Vvij7wdxnCuYSqADq1HKA33XBMLfDYdeP1dyEnZnjPJGMztMdNiSMU",
  "key30": "2zgvZ57uDchid78cdKeVRJG58PZYvN3CjMwStA4y1LckaAv5e3bZnWzEgRXAq4MyWqsnsjoPZQyxjsVCsLwmxUW3",
  "key31": "4Q7xAEbp7MJj5uwZQr3zYGwfj9ZZNwmb8ZcTCbUftiMfumvJFBQ2kiikR3EU2RChZ7hLLEfCRn3XZWdiN2rgr9ir"
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
