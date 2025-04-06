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
    "42fQexDriy4M5MyPjraCGz6Sk1FtG8Lk5RzTdEef6ADQo1xa7eaVDgTx7JfZ2Ni6WUJdPhhqofcCZ8TRMfv4LE6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jhqLMDHt3qMJthxuvFQ4ktpoC8vGQLMxcpgCDYwmPPUsmd5qq5BQzxHPZvuEZK6QA6Mage69kZEDmdGSBVQ8fW1",
  "key1": "57VrHr7iBuqvUkSEZugnQNS8MoigUQnWh1xhFvePtrMUn5CfpCSHxCQ1feCrmsSVXHUX6f5VSEcyxujk9fBXdGpT",
  "key2": "4srzmHSSketWqtgP2sbxuv3d23stVBKRcSKFwfJsMTjirpXkWkp3VPRLkVMYFpgjbbiUdk3HmbngLqa82EXpXRP8",
  "key3": "5jh67RrbZZ8TAi2ZftFkE6k9aT9TB31rEfwXzMmLLCaDXMBDP9pijWptpZ5yTcnZGjCkCCaezVwMdEumTkDdTHuE",
  "key4": "oKrvGBvVG2NHCpDJ7CzYn8RfADtLYPcq3feC9HCcQptH4eARWzfPezv7NAvfcBphw9UYcxTevJSyRbwEChXjtyx",
  "key5": "5nbW47XZ6P9VrtY881uSyMc9vy2da92zX1T4me8LRsVGAQAZ6BqWE8G6ds2hSbkBVfNtg2hdHMgUF9BFhZgkQgYu",
  "key6": "37N7QNgjsMzwWunLWo3GHWYrwBuPLJbUtmc5XBVPxakjHxmWX7Z6N9TV9mpmm2MZoCB6ivNeSuvaiUHeenYyzdHD",
  "key7": "qGb4rfpH3NQy4rs6mgHPMwJYm7E7n7UpC4ZNLn854nT6QFkjpdRjwQPgAsPJ7WR7DV6SASWgtEytvaKGNRMMNkd",
  "key8": "3ZC6XNauoiA4fTYAUqmkba4xVYpx97qTc4zqvHmn4iT5vPkJFdLQqHkrAbmEcjn8PGD1mVaW1vQkyzxzdvYt9iGx",
  "key9": "5fj5bLQH9Kg13ST1xDPbaiYoiH3x5WG8mVF8hqtNfbJkcwHMjwoeGLQXcox4xm3aqs3DXjZcQodsmyGu62LH6FHt",
  "key10": "5BgfLPMsWW4iBBNrBG54GgpNqZhdDwV4epCWa7YanyTuECSTR62z6FbLBn27JRnshfUAVwePB6NayaGvW9hmw8br",
  "key11": "mzwFa3tYkL9TNKVUv5PvQgSR6Jtkisvfpmk3FqRW3Zpb6494r9nxowdqjT4tS8wQvpv7V9SxaQzR7qgfGtXcB2y",
  "key12": "R1jpFPQDnfFataacsSCds1MDhZ3A66WVrVwrCov652GVW8BHqH9ZFJAamN95D9cXwgKC1xtNWWMzhY91MtGJdXQ",
  "key13": "3epaaHkc6kzp8utVRjVNSDMr3oHsVFar4tKFMxJCwXh9k1mjDLrVQeqbyhRweLanQJh5ZFfXXjsqTPTDm5igx2RR",
  "key14": "3ggT7WAskVcSnSp3LePjkFvXD4Fi3na79mpybUqASstCgbWjjDN5otSDSMkK9cDmme884ADDwvUCS4vn6KLyag59",
  "key15": "4F539NdrYaqvruxDEbthybd1qbcxUY1trTDRxgKHZ6F4FscDQGBiD2gwthvJwsbW2rHBXg6MEZaZDrx3nQ3cjUAz",
  "key16": "4EYxKyRTzmxffMC2ouGytqVwUBXC2gptMQ4MA9DGFT3R9jwTfhCBqoV4AoQ63iKU2NsskxMnS59JFb3Sf3gzhfJq",
  "key17": "3QLwVTWBaSgroyNSQSb8i8pS1Uk9ibKCfK7anpXXmsgYmSem6RovShFE1ERaXsq9Rrhm3bBu7sCf7nFJgbM5aZCx",
  "key18": "5DYBkQFt6VKL1RA8qbDrQia1GwY4GPBYQg1gbiywFgBtijnNgpSr7LxjpVQcXtguwqxmZpkghh9Fc8bYRMYy2XRD",
  "key19": "4DYaDwBvYRkVtQy2Kw44zejh5kwaE9m724X1yEbdQZWmKb1tkefaooaGHbo3sQ9Wee8J4wSTZTU2QD2aAGbaQE4D",
  "key20": "5gL6JquZPokULk4K1meVVYxbp37PErzdtWzrnuqsdw19UW4xHy1MBAYMYPCghDiutAUJxd2sEYdiGUdncmrYFFzP",
  "key21": "5DdSV4KHEb4ATEbUVh5V9ppbnvv3BbHXgBFkuf7LVuMZQEGXAEbt1bTUnufMG177GZQDS17MUDDkqDZEaRk6mHCj",
  "key22": "61F8mwmaZjHbpfmfF2DM8HqwoDYrNfPXKrxSHk1UvPRpu8dy3cEbkmVtsp42tSVyTbcigjwdJgS4RacrYkQXahBZ",
  "key23": "4QuvUhHQEpsKwMEAKN4W7VApE26NUK1vt2uPAg9HJXa44M96NYaVbXEwCxC5LQ2dqFXGyymofk9HQZ9yuS1eVK8Y",
  "key24": "4TvNhUcFEuxsrvZne1C6Uaobsu47DTmBwrsAAnUUv56yBsGCZ54bS4AgSuNmTxEY1qFKsmKU1FzPyi5iXBG8RtN3",
  "key25": "2BemuaptDUSy87MkGB76aweQB2RYmouoku7F9Nns2sC6hDHSCJBjckYNG5bNf72PSGGhYmtwYJYg87WqxDCSFqnE",
  "key26": "3XiV2doa4upEk6omKVeagtLVSj7Xzv7L3jjakcjwLrKDBV38GChS21woqcV1jZw6M3J293qXGrMPfhimB7oF3FBy",
  "key27": "3wrFHi2pVNy8TmUMFMcAmxfSjE5htpupG58V8V1vQCaXbJfL7ZGquzoXZJYtVUDzemeX9QzKfoF8guwM4pHDfhfU"
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
