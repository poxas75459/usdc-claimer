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
    "39eM27wXqzLHnzBJwT31dTpQpT3zRkw8973MVkTdV3KZpmeSV5BLGJN3e6JqtmjgrLnycLzRyCEZSkAuvHo3wcza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q3AfXWF3QntPvr8FRAXB5qFjABggBLXkSLFVRientTUcTcsepuQQWYb94DTFHoVPCYUWo9szkk31VXAfAVXAHoj",
  "key1": "45pQxQ6nRH78zTTg1pXzDNgNpNHJzNGp1VoPbpmktrCYCQZ7xUY8zQBLY15e5dJiemryvrqxPAR8hDRBzauF5Nqv",
  "key2": "4fSFR4bBUqHNakiz9u89EzcRhWyGdr2zWCYB7CRhbJDneRUE5MzVk1CMnmDFqumqEGYSD3WzE66u89PP7SuwEn4k",
  "key3": "oh1qS8UAPEmzhqJ4Hk9HLYhTbRyE8649eXxMuZXJSDVdvHXPwXdbgeNxC6WgKX5q542MqUwz6oEU2VtddaHULx1",
  "key4": "4pq1hWEbvB3YMp2JeBS3HhftfFt4U4KvBjZmJGUnoWHAPR57ZBZKRSUzcmR5RmvtJNiBUPEe5haETfK1G7JoFmJP",
  "key5": "2HEmQ3WEZeRuZJrXWdQsJoykepEUzK1aGfryEy34eyzvAKrP7Lq3YHuvtbP2KYq2sN6wivhJXJq2BVFErTdtoBqb",
  "key6": "3P5yoXMSQr7VJCVaLwTH2YUAo6pyHbn4kgY9M8PYAfFDCsUZM7VDUgc5AxqUq6yYLSq3CCj8r6dmY6bSTzVQTGz",
  "key7": "hsg86W7Qu7Xg6Z7Zrv6xUpBuZVQn8BnHALm45UmiPgqdHDViyibXWqa9MYxUpzZUd6dyS8UrgiZpnCJXYj55myx",
  "key8": "zz8XAsTyrihnjeuFVoWw5mZBARbd1eTiFJNmgNyV3eKPbpx8qTSBBT2PXoW1qbTD4tgdVseCajx7ty7FjtXxM5W",
  "key9": "4upAPqjDnNgaN3QiTUxirqqmuyHzLeWf5mJrS1RZGmou7uUEburEPBhSf56bbw3D48m8RF3MrCnFaAPU1kXcmHK7",
  "key10": "4Gtrx2uZ8Nwfurn2eNmb8SaNRTGQ27CzBECNjjfzcs1WrMeBZhmMiiRLRUjh5hisUmTuXwsRd5GY5ik9UFHYwwuX",
  "key11": "44kyWfPsM8yyR9pXFphiJ4xzB7jsEiWwysPPPK1PbZrgjdkWo7p1gT2HzZjcWoy5XpgMXHsE9gWVQFWw2XYDCNPr",
  "key12": "2gsDSwW7rAN5wqV9tjYzKR6ncL2MUVfPgpCpee9iJWf5YT7pvXU4idGnciTYMc4wZZcn2Rj3Yk13s51jQMtLTk4h",
  "key13": "3PgJHL55mn4uJyfgVzmFfq7wvYMXP3ExzEamXzv6ft4RUzq6XTFWbZQLnSp2RmiQVt72vaW5E1iqgmGKPy6wKDfq",
  "key14": "5ojoxbEusVECemcbN2rRrk6FTxV46Fr2UUGsfE46U3pz2e4rkG1AENgLuuXBaw9bNniCxTCVRkEfY9wAwJLQuzwW",
  "key15": "4CySuBiGNNbqXzZCwpRchKXtAQrpTpUqn7DUaL4VMmdWTwyp2K3TT16nW2s2uChd9BMNwxLQnXjEL4zNYGzKqPFQ",
  "key16": "2uNJjpzyosp5MeYK1y4didFdBU4Ka7ErBRjbVygKY5e2JhAdroqrhWTnVmuKZDZwWGEt1tzFvcb75EGAaFgTpF2z",
  "key17": "2WDDWaGx26cuj7yonZGswKKWWAVqXx1v2zrPoSfkfrvGFRe7sbXECGerN9eZpNkPPYXiSK7dU4jmGgUG1oAYBd6H",
  "key18": "4Ziz7vzqSwAPCXXFn331Br9dF1wUexov5bFrVeqzTehRi5Bh2BAuYomkHUqAnHZsfRsf67SxzA2PrAHHjSFUnsG2",
  "key19": "4TCXuKsR4Xv9Yv3oq1ocDDXoLJHeQchLpUNy4CrF76EXAsW1C1M5fegPaxpACCjmPcapixTeUee95d7iK7viJAMu",
  "key20": "5Bq9DnorUFBKN3h2QRuENsUrp71BMtXSsCzSz8cg8PKN1sWbCQxfcbD3WbjExFwNLdbGj2CzvTUumoqCd6MWhUw8",
  "key21": "2iGRYijY6TaW9JrhfjEuhpscae8zqneG2PfHbSowj2WExAJDZQKsgpzRTCtzhoVL5snRfEj2gC5h7qHYB6dcJfgs",
  "key22": "2x3EgtoVpzL9xRwK3t1KQ2nsC1XLBUJKcD6MhQiMRcvML5CXGkAPt5nnKzNEpiwn4r2g87GQu5Kxc5qGq2GmqHsj",
  "key23": "MpxpNUNw5Y7krNoEgWWiCWardavy5rComJMaMrF9anPY3Y7kLjgUaLC3ZyNhfXEoobmSXXb1qCx9KqHCuqrXVRS",
  "key24": "fJfMj1pbrF3jFgJPytkGwcnLPbyAjvpKvV5vD4vRuy1GTLran6w3LpTN454doPhYHbatNi27uY3TQSakCnuQkiJ",
  "key25": "2qQuYyQ3nEaVVfwgX9sBcL34yqweDhXeh79cULfgSRhnLKEvgySMvSeQMZEgTVDeXjPRrHdEFL5NGvBeofef6LXY",
  "key26": "53oYMxkCuo9UAFAbVK3B5MAEnVbuGj1Y6wLZbci5Qk1q82LMPGfg2GT1QzHhhaosyrzSsHm9RtqH8Uzahuq5NDBe"
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
