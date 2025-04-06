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
    "2GsrjNhwTknjigsJpSd7LvKUzgowYMHNWqa1N6m7rzRMSx5KYPjNkEGku2xWM5y25MAVC2pTE5RoqpyGUzoe9DjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hBJ13JeoGWrdRUrZDEAw6rcsRYoy4EQuSm8gzuK9VnV1qdwr6CzsT5hfY5cLa5mSCNpWNBxxbFrMXdnUJWmcX2P",
  "key1": "2McD7aPtwvGZdBryUJJwhMxxdNHhWt5bdg1TndupCEBwZZeZE8vWSkymbektLLTYN2eoqvkC2uCAgLSyiQcMC1eD",
  "key2": "jVfgj787y5Yv5eXCPASfJ2w62cBhkcqahUcx1EBiVy1A2UaEzxv2wzoLeWpDD62cWnqvBp6d2FRKk5CBq3i4QcA",
  "key3": "CjE56jKn1VbcLCVw8RGHdSsXBLgpSbNiJkGdscEXeSUFoxyfUMNUmSSL8FpYR6gLWJKz2A32Wu8LWmrmGscQiVX",
  "key4": "49Pvus9jHy7NCqVZ6kSeVHbEibrYmZVTPLChQz9VceTeZtDJGhKAz5fhcnx4Dyhgk2fUyaYxQoR6VizfVRYazQ2X",
  "key5": "2UswKfCMQsk6GAEGMN32KGVqqpk9pBEw7MKVzCbmUXjowDiy4rRGmZgmfRvXQnM7dTRE3W2vS67kKbYJS1X4Ymdu",
  "key6": "tRWSLHHDQJb2V2oxB7btPBD3gJQET73U6g65R6mi9R684CLGH586ysDb2M56F7rLVZQVaRBTKTvqrgcxLzPcL2J",
  "key7": "3m9EzF84DeGyQHzWpUphbKPMoArgFB6W6JFQSN4kaX6vAnUHvBSjc5KFvoSAPTZJaSjq9VedXkTBWg8iefKM3DQU",
  "key8": "3CoaNesYtdS4zee2eVgpdfgitHsfUMw8yMbqSRgvpRQ7ZH4Xqm7NePMm6zFXChQVB7x7RsxMhLWzTKMs7As9NV4Z",
  "key9": "3HSTCxqkB4xrc723UQu1AnBGxNjuXKj1oHjgdoFjeWtxPhpWfRK59Kyxtjq44EPyaSLvjSPH1ss2NmkPcLAyZxKu",
  "key10": "oZiCCvUPxfsV5BPv9jsUHfMWxvKbzruj1vQLmPg6UTUXgRMsgnLS2RFwP3EUCuMfHEQKLN8THChXy9kEeuzi5v1",
  "key11": "SE1MLkMuL9wjAweAzRjFqE4QQZPa2ZopTaZ4rrHMEPGjHWfurgkZ4T8b73ZeCLyLfYN6JEiXaPnHbaFH9HpTTDy",
  "key12": "3m2o1TpuYhWAvojnSDRFy6RDfv6TJChVomhHAScZHfkZekynPFKjcrqBnD5mCEHMBUyr1r8uKnC7JiSyUXSC9eY6",
  "key13": "2rhL9v7WzzFsFBJ8DogFgyBCviDtjBGRHkNeyqncKe5nUnFzyFLHMBsJijJiKD4gKMAfunqfi3YHN5L6Vp5LssEZ",
  "key14": "4MqrSyz74D1SWHr8Tjj4Lmr9beCbgqgFpoYpQ8H9YXzAcShCYzRGNMVhvpwhSpDukLSrnEuJS4KtxHFwgZ1zyPkB",
  "key15": "223nji9dvGmWs4SgXWyEUwP8rb4XkpZnb3HrQLbmoT7ZFua3xuAy4jv2XYn9d9bgMSphkugbxsmpvNbwhWYBr6zB",
  "key16": "XFqijnQhydWiNrvHMLt1foLZXg2bj74octpTi1G4JujqSXBFiCDgi8GBpDcBubaAg7tWQjEwBnjmRptkV293sna",
  "key17": "4Ldx8rizyuQPdQn7b5mgwPBMXJXWxPMAbFNJHxMFpDtbWQgTUCYDtYhUyL649Yn5hukjtJeHdzx2LVUUvFnnM3bA",
  "key18": "HmRaEaGCM3A7ypfkQ3gJaQtLRA7oDWJHzu34nnTikFg9YgZveJvAqua5WbpJnzwVUYRQaEpXMnT3DB1cmp5U3NE",
  "key19": "D71nUmrbQqPe4uz5GWmRjAYU26LdxokBLZkAz3YjwboYC3iMKf8cZs5SRoqZQamMqx38G5bNU5ZekkcNZNnYMi4",
  "key20": "3DMg9visfiwJHJC6k9wHvqrf7Xt4uTY2uuwMNnxUyq8q7CHjAev2MWDNXT9x4kVySbp2gBmi1eeYF45ou2owshRb",
  "key21": "5QkhSf81CddL3NwLpMExnivpBU765TQc59H9tvzj3iCY4Sej77CXySyWdvAfwoLv23XyUHc3VaEB48JrV8FtzVGj",
  "key22": "3nC4Rdq17dDWuehZrNKmgJbrBN7R8uuBjdZVAqkH5Wf13PfdzzjXhjYzEFFXZEYhWe57wSNLU7Veauf4ZVcyvhHi",
  "key23": "3dDUAhGwghKZFTK6Y8HriY24CDh9VjgnnDbsR2bqmfsBWXLwNQrm26HE11hndfwoj54NDZKEoeny8ZujPPesJR6x",
  "key24": "3xuWNSJp88DkMJVydUvC8BcqybcNPABAkQpSy8cqFaJGxFWhq9CtjkfV9mZ7z27AmCViYvTqQjf25jaQ7bQavMP5",
  "key25": "4XUh2kwhtFNKZfMqiAhHQXDQ6KjKcFMko1ggXTEDJaoyK5XvCQUA1A25Zu3v2nfo33SSTKm6SKVrSNB6LViUZVyB",
  "key26": "2PGcSnLbL9AXJiqWMpEby4bG79j6paxpuDBWQF86EpV4gQinEsSQoxDcndhYkr51ydkZyebkN4Bf3FAHfWF6oCRa",
  "key27": "UHmyj8giE5ZrtLcgA4YUqf8UJxp6yZ3GW5pm8amfsgLDZcWxaTSbQUpU86DvKmAYCivMVD8SkPdQpy7eDJdKwBf",
  "key28": "2SVskBDjiPSskBERy33AcoqNzoa4zsFkfQDRDF14eZhmsw13uzta11Vw6CiDsCjftrfGEKy8TJA6PJWCmDdGeirk",
  "key29": "27KPcATtJzUcogTxim1mpHsc1qUCUBRReruQFBZ7z6hS8QJjc6NUK1HzLPCvfRYzqLFaEGTgnSwcwhU3dGkGKyt2",
  "key30": "5822R5LN8XGsU6wXm7ZNQytZG1zKL1KVcDz4SnKYcwUiVEo561S79HnJNvUb7e1uuwodNJviAVfZ47iDmgruhWG8",
  "key31": "5mhiQaQL1Q8Jr745gqp9Uuoubzr2YMDj3ahHCX2VMQCnob7GNpqthmGBp9LGYwsGe5VqcVC7HuqB1VV6mCX7SWW6",
  "key32": "3846iVpNyQ7ATBabNtrs9XBcJfyMDFDrJMPDTP1exhQBnfqGkanKiciNHmSCWBYWzW8awuSchCcJXQViTV3N4SKF"
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
