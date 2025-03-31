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
    "23hhLrrTHSKSymudeitTCdKGrFGiN4n9CQuMGTVUE3oyRd9nKjtRfMPrWFd2KrLodKyMeyaS9PjP3xXGXn8yqDq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qHMJun8om85KttPHCwTSqrNDWJMMznhcKpC96gWo1cE1oeY8JG1BauHXDUxruTP6ogVU4hJx8UHkoZAvXFDBu9v",
  "key1": "45nAr8riD9sxLUtb7SsPnzS7v29s2LM8musRnvbaURdwewwJEkaem9SkjTuXKz6qT9Lai4jxKzYLuqGfjubGyMGR",
  "key2": "5ipTDTcB9JGqwTJwR9eYCDYr3WbNvdpz7bYDSwJonqk1oAdnMHgYw6tRTW3qJ6xNr8sy1urFgAzRoDjLh5TYKtpz",
  "key3": "24zvPdDVBc2bN3m6dViY6DAeqWP96jvz2PFE2rmhzfqB9zzLY9LfYFS2uzzCwJxtCRXDwYjspcfC7h6DnGxyaAhE",
  "key4": "45z91Xb4LeikYVhozCY5pVKaBuECmEXJGFoiJ7HR1ooWwXBM9JtfvKi5kHiHQgcksg5yECZ7dHJygUREUvq3cs9r",
  "key5": "2pgD1muHTDAZPiJyohhEXyCNtLhQZrz2Trp437hHCRkWB3T4icgrP4WH9oWKFytzVdibnnM38YLnKeESYo6g2eT",
  "key6": "T8hu6VAYZDpLfDzjngkQZQrEWRRDUpwqRM9ZU9uD5hzXeV1QmGj4b745ui7DqHpKNw8Vdnn8uhWM3eHanmNrehC",
  "key7": "4uscjuu4gaxeX1oUBdBqnfxjNYkzRv5jvGzQVdLfRrdSt9MWWxCDMvjdQws1apkrkQFiYBRr7oWyy7WCgvZX9pyd",
  "key8": "4eHa2qDt73MEJhZSfgiiFkq5zVB4YbCNereR5e7EzzCzFLqoCnGUvZjiwqiqC3Khb1fmNLFfXbDvLjh8A3U4Agqg",
  "key9": "45PxJVALySq1GM91YSsoeWiPZzuaZLFPUa7sMPREpHKXG8ZmrXMBDLgbYBAskQGorrWDT5YmCJ67tspWZ8ZYrQ1r",
  "key10": "71o3a8Bw6QNZGQWedZcXEiw8z5tmy4pBgaWSfWZzHTcDhbZ5qmC8pSZaAsik7fvZa49Cx7x3NtB2XFgMSqro51S",
  "key11": "2psyV5aikz5gmz23Ys6mAKP6qAHEo6f16DMZkFJDe7UhsUQwzhKtCMVjVsvDam9MdYeoD4yrCyN1JniTNmwVcX2g",
  "key12": "4bCgTRtMUBz9y8RjvWUcZVNxhpy1Q28M9yr83AbujaMM3eqpx2fWTdfNMM1dopNdsEcrKfWt8wkfEsfHPNzUcfGf",
  "key13": "5Nf8RuoYNYqvuRQ4VTu1FMMkCft3L8ceNt6yrEi5jyQHsMJAsyWxScqMSCKeEaCzCes4nw9949jtR9XHyGcHpGwA",
  "key14": "34icgbvehSPr7X288KmkCnsSbd66hLKVxrZexVTi6FEsTnk6zDwiDSPcnu82kttWZTfecXWDN1sv5gNtTYUkL97w",
  "key15": "33tbv4QBQrAXAFC4RvwrFg6VChD66LkLAugvzRn5PdheaDVFK1EvyXpTERkPJY47Pkdbdya92H9aWvV8nidkLXte",
  "key16": "34fSCr5DsZKupe81KdcjmnkwP4Pbv2ehwQMgSiiBex9iKNjqMLJeJjzYYa9kxzQS1EQpcpboCeh3UkxUsAJXKseM",
  "key17": "5CN9WM8FT6xEGNNY21N6beZu7db9LyPqm9LiNk3pw56D5t6nAZHbzgJ1eZTMNvUND9FcwAvhSouy1sXg8w338kJ1",
  "key18": "R5Tx8Dfmb3gKZdvbfpj7v4WxT8ddy382cYqttug1xxobB5v8o2z3egcz7hiS1fRPwWh64cH4WCCh5NJenExntwu",
  "key19": "3BrvsZ3LdZExaKthSMPNbPMjHngYB1h6WYwmwpsBbhtcxeYomWgiLKJrwm5KG8d6gmdENEatVzoQ9x9KztfDBvya",
  "key20": "57jWDATR3qQvNXUDxNCLLx2qmoCMUyghQTFkmW5r429L7hPpSJ6BT47ot4TLnXnjYkincJpEtice32B5q5wnd67Y",
  "key21": "5vvjiVXBnUfzzRhYe4JyYZf4BJUBaKw2iGo8u4oaQkzEn2dUkcSVqELMN5BmmqHisQ1uTPSauKuCoXvSuDoGy7bV",
  "key22": "3nAQbEHRsF1EjeBpVVXV4nqJ8kHKNCtMBWLSxjWifk5s9RvvB4JDS6ZbD5nRkxQpbsS6QusaQ6GuemEpvjVeWnKb",
  "key23": "4oQ6tGZgp2gsf1XWFpXfjpTffeYAhseZHmSWMo9zhZYkL3gJHaABdqsiBRCX1CDEMJCW9YWTXDweG7hzFsb629F",
  "key24": "DMvydkDAgtkz9rutWA3ZTPduiJvjMFKzG54XGUU4nCASj9Cv7ruvSmDqy7Akjkxi7Q5jYucQm7kdvFPhBcAHUYX",
  "key25": "3Zwy9vH7hKsKfrqXtW1wy9dMR2rpxGTRxdM82tq7Vvphd75fPmr8QG3xryN2sDPWtQX1oNpN8bCzfRA9915dMDN7",
  "key26": "8qzkmqyQZe7Lbg1bdigj4AgbJ8u5ejzeRpS1mXKHRDdFjPWtD3pdRxdT9y9RmhLQhJXj3knvBMGgMb6ECXTvCYa",
  "key27": "ay1Z9nH4V16286ABMgrxXcXv7uzWfY8G3Mnh1GQVk13yFrsSquNVLasob1qcLWuHRKWV7qFVx1n2GFWSQTpfnKE",
  "key28": "5cQCDYnGqpViL7FmAPpi6Bg6rvBLTJYA1XiKzVJVQ4TniyBp3R6kU6i3rZSeHfuRHtw26wjcSjgPunbyUGmMtJHh",
  "key29": "5gKCoKpwWsvR4od7F7ueCQ75QL1kC2H5otprpUxFydWDUyJMeRd3cPjwsAmB9c6enMqD9wTpsBJkzv99pTkzUAsi",
  "key30": "4FPnADEFxsSMCdP9DnNxjP3DvveLWzdh9fb7ZZbHsDERJzY3K773zCTsXviX61EdoCvkR3g8LqyPiKkPMdNZaFjJ"
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
