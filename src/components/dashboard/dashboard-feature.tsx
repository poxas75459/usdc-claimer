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
    "4vE1gyojsQeT3zZhv2ZJVRmXA4H2tACf22gJqqoVcXRrymR3831Bb5dYwPWUqrc3hi4AWC5FNzQV2CseSYnVKHpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VHuUQmQYJuWmB3BFngo21tLQixMbVVHoRZfSBreSciBDBtu3LWckU8gnBssiCBKeDjUhUU1EeBMPa4A6UA2AAwj",
  "key1": "3hgUMHmr2waZvb4nMgGyZ3Txnn1Y5JEmbxRMUyPFAU6DhhvTPWaPtmjnqRNKyxuqNC5dwe573h9qfPb98h2Rk8yC",
  "key2": "4MA4n2roRAo4UgAjxVZnvwVziNjpptC2iqZKCY76wqdYWSsUGopVN4PTDCfSSnvzwxSbYwJfbvrc7m5TPnpBLT8F",
  "key3": "2bXm1MsSGH3p6KLVy2oeTyn6uduVo14Zq2xSvAdZ3TNHwqgA81Bs5nxe39TjkZvuqGTN9HYweb3p1ZgzB9HyM1JN",
  "key4": "5D6HAAFF3svnRQNRe3GRWrT4dnCDTxFm3ewSsBBo6C3cAbigc4kkr5CzL4npww64CLtzmBSQHchryP7Dhsp29YBU",
  "key5": "cZuNvsWDUb8qfVzJF5hzyz3v6J9cm988nF3yGGgEeRxYDWYZzb9eikfzsxucVNvo1WNHWeETZXGm74h9mD354DL",
  "key6": "34CEWdvuAyW4aAwiFbCCXCCiWtmZFzWcCEjdrJeGLytejhpqsvE9Pm2f33meejqNDQppAgWRxwVzmBR7tqpcXKUa",
  "key7": "35Nn2dzoEsXjZmBtuaza6kXsbbN4PivaNotGoYYXZJBVghH59MnqpaMVe8wGGu3K6yX77mtHGhu8LSN51EGhWjtC",
  "key8": "3MmsHPUsfBS3fYeCszpe69egSB6jpwTihTejQnqTofNHPDiU5WuVcXDGAXoBgngx5SgD5zQp1xtash2fdTixVaKR",
  "key9": "2ZPLJEDdWESiouEv4d6qwuisyXs3TkGjnKoSqPKeBXLPHbNXc6ix7ffLzBVoy5sgc1yCeAH5Y3LRmwsmVDCe884E",
  "key10": "5PGMJ7fVDBbyLxewVavCZ4wrXd3GfixFHtRLGtQiCG2oMhyxUujEB6UdibYq5VWdLQEMCK5Posb4rAUDmBvYiLAz",
  "key11": "3MqXLqzh8PzMRAxBydHDH3FhCNjobpUFoKs4qJnWSA6DghgizAzzYduDbWi7P78mmQXsSHvQnfm1jThtFNkboHUJ",
  "key12": "2ogksTWgMLi5SeAHViU4ZA2TEGBJBBUFgAm4kuBtEW8VMLP1ViTLtnHK1Fqf9tKSLs5DX7M4uefycLYoypV5WFar",
  "key13": "54TH3JsWupZX8jK2kG9TRxWKizYoCTWyfNjh3rayUZb9Tj3muLLQq1Q9U96dEvLrgtEaK181d4iLM9wexhwmebQZ",
  "key14": "57ndfWF1ivH4y6kmtRU7PoLtJkh6HyaC9ZfvZ23c5YnZvGDUo9ktxvsk5F2WhMyDZv9cApVrPSUkTwRyrWdpffaS",
  "key15": "mDQpM5nbckzmdTphn9QvMztM9XiGcYJMZS8HDP3nkcYn5sFu8M23X1pq2YQmoSnmgVUYM4RmbRp8AAzSi7XEdaN",
  "key16": "4BNJ4kmmtGYLWe8ZRNUwNZCuhyU2fSq84Q65B93dyokH8Z7Yw1h84sH8t1XBkPdAxZMpT7XxYAZd3Y3hmg722PCi",
  "key17": "4jJeky6UrgdnQZHaD2AW2a3sYjuM8taWqNdkreojk9j8428wKEdzKJeVcND76wuGv21sWa2CF1yaCAsCTPkmU42x",
  "key18": "2QWFbn8yMoAj9KkSvg4Cdme3YgLPaMPyX4R2mqdXCUmDvYXcXTG3x5EMH9uWZ2WEDbCcMAZ8qyBD8tXuA3t3VyL9",
  "key19": "4a68jhqarwZL9SqsABMUXu7xgS7sNVvWAvL77hKfXxc6sYudcGuSyVEfVHuZsZXZFLvLiqyv71Sc6ZQ9Frmw2XZc",
  "key20": "f29a4LSmnzi9WaBYj4bEf8cbPshg4utEeFAzUg7wLoiVKWqABuaT8Ae21DPcwitu6unm6n8E7v3zYKxg5ovjiXh",
  "key21": "3Fi2HxdCqCps6CWNTzsXMKJE3bwDB3reQLvg8kiULBM1rv9Qupb9wh6JZfth3fe6ZAPCD5sPF7d7XqtSaR5Q6Wyz",
  "key22": "4taNp1zwErugcwridx5K3U14QeN2TzkxxcWPckBEJBKRi54WYhh1gb7U1YETV72duJXiKgWVj2GCUSmCQDHqEmzP",
  "key23": "5UeQDz1Phk33hYSBRGXgHWq1zkpZx4oLgGGx3xkgNFTcyiFvnZU88PqcnRJexoKQhT5h5EiJPAiWPWvedNurjSBu",
  "key24": "k9qKtdmDe1MoXymh6DGJcTgTuH4mR2HauYAGbwdn4tfnV7w2K7kKAF4zcPNppZL6oq5y9jWXSgS6fDDYARFWNdV"
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
