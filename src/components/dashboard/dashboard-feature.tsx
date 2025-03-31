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
    "41DDca1o8VmhDr6JpiS7Sctvtc8SJjWNYfgLcjjJ6t7w3EYuFcmGzdeKZZ6scRYyiZKfzebZSuGx3wMPcjxsYfna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QnZWuP5zcqJfF37uCA2kh1WfE52ACQd8EpJ81QwYEKv7EQRnPSppHRc5M5PpaQmaQU9J4yzVgHfSMS19GR469TH",
  "key1": "3YjULXEj1MSbqLcwgH1yzpfWunTg7ocgHEJ4JZMadN1VpMD6vZSuFBjsoyz6tutKvYmNpQzZ8YnPF2zPXMQWK7Cv",
  "key2": "sAUGYeB5hVtV2xtNdUXiyPf44prGt9XjjeLepSHCGwy8EWuP5JHAJ5p1JFozbWNm3GaWc4UA5eLGKTXSsNKMyKh",
  "key3": "3mdLPs9pWFQEFqdi5eL9njJxagqNuhq4TNM3mnr7Jf558iS6gQmUYf6cScTorcioYqcpbvXDD9VxpD6EgTQ1iYWx",
  "key4": "T6mCJ4Mf4d6h1aAu1SL9UP7QnoZ4TTTacJ1drFCP4B8jo7nMor3xgYQmyN1QDzao7eCeQ26LvKHyS7vbWtZvAPe",
  "key5": "2ECsCvqc7sv82qXo5Ab5VctmPLVHFQEh7nhXrYJYWMu93qLQYsbyk4Kc1stsr2NETi97nwd12W6NCYWXVEoKqDSZ",
  "key6": "5HoysDAnRqCW5NGb66G8U259mQX3KTauGqCwRPpHAB5ELexwFNmKF3PWiXSPUvHTXnvMaFLXKfWS8SG4JqicpiV6",
  "key7": "3JEEB39RHGDKkNYBsWycgK6cDvzAjGpLSubUa4YWYvyFFPBMyE9pHzXzA6zaZfoaJo7KLQpeWkcR1PRBP82FeNy4",
  "key8": "6Eahg251ZVxwgDN1jYzPztNHjL1UC4G5aJfpqZLqf6wKeVQCeL6DcVKLqhxweyLN95ujmyFozRhsf1kGvzQgdqJ",
  "key9": "5Yx2PqYMUnK7pUaCekwNSi32yY5fqbiastrDsapxE7GTU1MZwTrd1KohrcVvx9w4BSnjbNdx4KF5C4RivfWEKj2w",
  "key10": "5ZkFnyMuqbjie3ZfuCVziTMk9aef8gVcwRbVdihRZEn5FmvFhCA8PuUGWjTci1NFvpFy3BYWBjVWFEyzDKWFdf28",
  "key11": "2Hb9Zk25iAHNLT4QugVt8yBpexYDkQQ4MNDXo84Pbhia4bm2RVN6Y46ctMHWqhMTiaE7fjtWWRgQck1tJzZsdURW",
  "key12": "66W9qKrgRJQptgg5GsGXPjhtuxBEGuqdmWaKNvUVapKCG4La6rquSKnCEwhKxwZE5cRWBt8mY36fdGb2YcsJUNzC",
  "key13": "2LwqbaEmJYkNdJUrsGFhUVJ23uszv16zPX46jn3kodvqTQJhXHHqU83fnFcrWoGLDvZvEzJpPHGcCFUHtnNLLpcc",
  "key14": "nBgeSqLiWbMUoPtYfXZL3C1WQg2mjkGAxqqdFboQQt47mEhxnfSh9MDw5LWjUCScPeuAnbZinkWYc28yes2oXbb",
  "key15": "5DHzwa5WaGHwpXsjP2a7GAMRP3bhbwTZc5RwH4unyEFa8T2J8NaTw9159dAcn3UumuVgbWiW2EgG5LwYfHrtQvUa",
  "key16": "5PQzJ3S5wnNf956jD6xx7Y1abJmV8Q6mPMNmvWtf7kJLyq5UWCerxRomM8FUfxpagL7ShsNLzA4wq6PWvp3gKPW2",
  "key17": "2coB6VtnZwpBqnMNyYVG7J7Vm7ezwhA9qxZkC87CMCHgT9BHG7CZNCwjEKxEqpQ1A3K7i1btCHamEnxtC4tnGtqh",
  "key18": "4ULoduiCKNJNCJUwCB8rzdWW5WjEUyVoGH99D7TC5WFhCzBThRM5XiQHRqoP4UuP5pQ9xsGRL1q4ocVAS3jSWMat",
  "key19": "2zejG7mctwjeT8F3BCYTsETeLY72AQTQTr7Su1XEc1hj8LXmr2h5rWry6KV8LaSFkL8nUsC62YHLTcDcs81bQhuS",
  "key20": "48vu13eBAgc3BcppCRV9zZJLTWF2b5LbYFvCkWha1ALGmGBWS9VyRJhZHf3XBqBmMFWFbfG2VmaSuNm8UYj9Uchy",
  "key21": "5hPcQSSigfUdX15P3aPV3Ta5hRXYHHBwnvkkv7fWmrrw4zcEoq1BsFAqWkQx88LnBfzwnXFziTzM8pWjLGztWCJa",
  "key22": "Y6cYAt7jgu3Er96rU9kT8bCa74TF5Py3PdPgaYXwDRFNGVRx9u7Qv4CdCPUPNayyPG7V7MTSy26MHuGV6GS1Y9z",
  "key23": "3Z2HN6NrpMhHpfwa7dyp4CEs91phSEYboBEiiHd4NxazgeekHCQ3D6ovjmiVTgyQ7zpodnd3AGDZqScqjbwne3UA",
  "key24": "6268gZ5Cc67BjPoieJKHTpQntY2zSxfoYSL4emMPdeyPSjZT4SyoyDys8emrzTFuXDTcQRHDkLugBhPqSAJTro9y",
  "key25": "2CBaTJ7ZDhYGuqWxmkwGVT3JAB747Ts1t2avTQ8Czp9jXtXimbhLZzPWTSJUFP79R4Py3ZiFxvV9Q3cMKQoyJzxp",
  "key26": "2QkvfLXwLmYe9owhHmdSQeSCse6i8FZEWs9AAzLFqDCQz5SSnTwkCtee6J7GCkPxbKF8scG9qtqfDedRx7mod1DN"
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
