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
    "2RFkCWWz1VqufdVaQZxMMjUAMsgv8GXtrAmatxMQXcVjax6cak3qcq4E8pBBJ9mgCBxQfLCJBGeNYHtaHMKrMYhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a4mgPZt1fMsMMWG7BfNsZ8UZaBri6nPTHTaKf7bscuK5DWkE7R9Qmi9yFPC9PVxgqJHtJ2bdEHdFtL1Z1w23E6A",
  "key1": "5z5rXqPkd4qUPCdsQ2siLJB9DQidRSibnpkkM6maayXdwQD4mhnh7EzFVdrPdAUDwatoRgUaF4L1UsWhgoEtDKaG",
  "key2": "378rasAb6VWQXoCejjntaaR5TXTXERE1BCeQSQJwjKZFNhDHc7Ht7gNbFvwvcfHbFLtjCxXG1DPArvngECcGSzkt",
  "key3": "3nRzYcgqoM4SPyrZnZT1vW2S7uX6i4S6ko1oFZ9G1roeUZ7qLKGfVZYMmFRWeH7Raw5tDfTaU1DZETDgvkZCPW2L",
  "key4": "3Vo9yokWXwwxYvRv2bNNM1WvDJaJZsqqqS7TK9iWcZi7mNuDxq3cp3M9gsRtTUkLNRxS8zjUDHTza65sPmsoK6eJ",
  "key5": "24qCqPSR3LKacWEdaJnrtfCLbtmfJW7qN8NxrGfG6PQC7gjUEvguLNXZHpgbGCjHbFJVPWMGLVVhAp4GLyd2wGR7",
  "key6": "54K2gw4ejWMF2F6jS6RrLQULhtyrcUT7Vme8waeeyw6wnsX9yt5o2ts88ip2eHhJ8a7n8yE9AFkB1BdravFoHdWQ",
  "key7": "2MK9WnTTramGNGNczYNbe1NEgfm9NCEf5wg1yLJqvAEG9fGfB54kn1nTqXg4MuS2FTEKjwWfaqPwnBbA4s3x24CW",
  "key8": "5fFJBu2Fp66EX6qJunYexyy9doQU7nZDW9QR3kv5ajMRMYdVjLzAK5ovyxceZNMPRX9pQnuKgea6HfC6mrUB93Qx",
  "key9": "5NZPkeTrMNX5vTh6PAqb7cyUGADPjxqtmPhMuWga1Y1fUmfpVQqaKJ1GLe4681re5K3zmrKdeVPGJyjyCCnAgQUE",
  "key10": "46fxfBodZ223sY4Wc2rxSpJkjZ96CJ74RC7bNXEXHfbhHW7JCiTrPCsiaHchNkUi433TkKuQUaRG4id32fTRsj2Q",
  "key11": "3UJMuRjpfBR32mHyTpYKVWXcs7bm49FKviNhgx7gjrtq179eRErRxMpvSesuEgjM6t1Bdw6PoG6q3xEKWHqhL6jt",
  "key12": "8EHVqA1xFaZMzAdoHuEDGHmZkT11tqAmRi3JBB1TSo6zyio4pvFA7TT2s5vzeLgZWovmKc78PAsorKVLzsxcdYe",
  "key13": "3ExXznqq3rnDgS8aSiReciw927fJuPs3kTtdryxSgZ6TDGaWHQYi8RGc2GPGg6sdzKYbWN5PrEnMPv9uymss6EKg",
  "key14": "4UYcPhrCWgJe1M733UiNzUKGGRudbWYcs5mGs8FhJoEZ8XZbkD524jdCGKHZ7HLJiRTkPkV2CaFputEwbPXyRQ65",
  "key15": "49UzEvfq38oHPCM7xr9YpozaACsrb9rLybH7dnxFVyHsozazDByJGvYRyCnc5UWqK94P7FajRAfwab5m4K7GSNK7",
  "key16": "2b8RT7q8r2TxM4j5Gj2pw9SF7Z1UEta6EsP8v6KsEcekzXsRH55WNgBGuexBXN6iM2SLz6cshymB6nuvqCdr9de",
  "key17": "3itdUWeQA7kHPR9jTXNpwbgUgBeAE9FmCEdy3GVmLaUeycNsPnTwN11ancvW8Z8SxKZ7dPJgFBMD3S3AhPPdydXc",
  "key18": "3XHFo3J1jQzG9BrtagQxAYvR3qDT8GCzFhMdHDGytHYMTiTKfXqVw8ZpAQzdzqKHZwNu9rVCVBYdcPo8e4GsrYXP",
  "key19": "4gz3JYS7TuBFxwvWBaeKfWy39NLsiC8VV8FMGQxst9Nmsv1i95fn2EJfJrmMNX4pgx7Em8Jb2aUtVUvNy1L8HpLf",
  "key20": "3NXJSksn3ify4jAmtcLe6xZKji6VYmsJysHZEL4KVxZPgTfKpfzpvEtBUcQGji1DW7fEdSxjrWXqFtwSfKHoS1xr",
  "key21": "5XmAhqz239L5SSvzFttMqg3MVSzcoszvriniHzTvWVsHWc5EVa88hNCx7Ud3TMoVfz8c8LfNCQ619NXLbjqE9po2",
  "key22": "2TF7GSZ3LnjHVNrYjgNKpyuJkhN5kmbuDfX17bspsApXGktUftp7k8NuCP2qy6Wyng5Zz8fb5p9eEcNG3atpaPLt",
  "key23": "3TvHR5TeKpRJkfnTaJP9BdBq2nHRVJyumMEzPtMex9H7cDzbHnoxX1dtFRwuAVgFDLnSLc2GycF3vrfnwAfMBnoP",
  "key24": "4J4X81JALxSBNCW6b4Xydv2UZLo9WGmNnfAdiWU446YbH9yrVaw95eTYVSZAgs83NHgZ78oW8Mva5F9HByPYH4iK",
  "key25": "5g2YiqeTJqJTpd1PHSZZneW7sNSdLqFy6CnnxoZwAuqNJ8YeJ3dbPsFRKxVyx4MUUHGeZnjbK4TLce5oEhDcyLYz",
  "key26": "3LcJGm9CCTFPAst6cx6WWwx5NqSWSmazk4eBALHQfdatJCNRdKyHmosfTWV33cncJd27h8aQLreNzvHyM7PMqSfH",
  "key27": "3piteftcCH8usCaArv7sE4eHHw76j63tP4bStWfqa4ydYj2mQ5eqypRkyKi7HG5ts965wQKEASXs29pu72U3CNmo",
  "key28": "4ub2bvRKYTY388u1QtFo6DZwekihfM5K5fax6ct3f9H5WzPmPVhTwDbQFaczW6w8MDuo7XhkdiKkXMSJ6VpjNkjL",
  "key29": "2ARdewzrbDL7bLp1HJewBMsgPWD9K6PyrRbbQyR2KmcQBAgYpNCYB9GWeuMTqN6q1x7W8WCfpTzodQkAixX3ZxeF",
  "key30": "5EyrHGeGhDJSSsCZ8wknuc2T1ixPQd8xjkr5iZnEmo4Rjp6wcHsNBp9gtwGduos65fue3z91UFMB4jSsDXJnFEks",
  "key31": "5t2Trsydb7CABtzytJ3yARbjqgu3u1KENTErLKSxxHBTHVyW3GBXNpY2UJeBgTXpZ8TuWDAbMULe3nYJutyc45V2"
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
