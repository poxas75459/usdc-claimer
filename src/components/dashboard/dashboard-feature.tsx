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
    "4vJSbC3s42wXJum39U5ZHt5cTvGhFjaua5fntuUimqjMD31w3DssJP3USo8MBd9taAKdi2Ns3EzgfqeUgK6MPrQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tKt54CLHy7ZaNbjnJWvH3q7ERJ1zmrGRnMj9MShxBAV9b5Kr9SpFLZENn6S7YBBjULja9Nr91XUNeuqLCSqadYi",
  "key1": "5odP1ARihDSynEH5NGkf2rZEjdqj5f6YBQtvBYDst597UBK1hpmdTWCMXikguGACWQfpZrmERtxFjn4cNx8sda8R",
  "key2": "2R2R9zqWAnyRDUXBG5j8pqLkmiRUVg8HebdgEufTb1yuEaC3eujFjSW45PpT1uzsy8rUcqXecmr9uAXLG9Qz643f",
  "key3": "2jfMsPdpG2CkYt7QQvUTwjdQPD2X8VFaLQ9FcSxGySPPpiPknj34sXQ3WrDANfzQSU8PezDAR42hxK38VFkGR4xX",
  "key4": "2tkz7ErawYKp2Nn4snogGmkLyQEDvtF9qiyjZPkMCjTWfw8NTZSzxmN88FUqGGZLqFHv2f2r8CATudvkLzPdfHdW",
  "key5": "4BhnZUQeEsEEdsWkJD6JwfZLassp99kifB8iMwAPaKvG4uK6RtD71xQMowv7koMSS71VF6azQiAdfAqTcMYJqDx4",
  "key6": "3GCFz9k4iuLCr2EoJmBpxppZe3ANcrtMGo942aYoUpvLPwYS9jQd8PtKKUFvdiKYzpsNFRLJkrTWyqBfkoFDJHiM",
  "key7": "cotQCMSm9DcGXPLk4niDN4w2XW1oYdWczvZPc3zZugEpdTDTfRtmcWQCtWuij5N2Q8qGffQ6kp2SQqsgsWNkWmG",
  "key8": "53CKGQL35gKNUp8bH39ystZAL4MwkwDS2eFcGC7vBTqUHRbR7LZHrEYgeX7ofVaEYK4EtdQ6kc9AqT1vehQxxsPw",
  "key9": "4mt9E5ACky7i5bRuWwWUwr2YYkvnQkDZBmhoW1emsHCExpGoEFhuAUeqxBXqzj5GxDSKmeks6BpZhtHDNBSSZyd4",
  "key10": "4qcLq7Pb5aiaypmhR5iDWjdgVyHs3s69fvERn5uAbsEYF8X3BQDSErAqKJFMbTeJiQ6dPqDuWdUbdJX3yFSKp9v7",
  "key11": "3PKqbLHqCr7mVgg8NitLmNbiyaZFoNk3RYJUam1YnCZL8AJP4fRxQSzgCuz4GoAjJTbBBGVM3jZpMCZ1noTXEgFZ",
  "key12": "2DsEKhz6LeygYbPEREyM8vUQaNkcZn73GQPNnHMFFEEpJtyD8PuXA7x8yTUA6ZQSRHkDLnhUBLZecFxXmmiRXR1Z",
  "key13": "35EUTe63DAVejh2VaVkv2hgfwg4CmxoNfzZKYNnZz4XCfcLCizREWJEFiYMduBce6aa75esuF5SqbwXWvzNxaZ5f",
  "key14": "2XJgX73droAUQtC5DhzMRHHicZJfawMBxhsr97UoYfejGbMBHwYRHVjmtuBfcJ4K5rzw8Zi3ZrWoB7K68UeEZcvx",
  "key15": "4yjsN7t4Q4Ks8HgT2QofnBor1aABPDMMZsJEQfwrWWHPKgQHm8AsXvGCAYwTfLpF2cv9P9BAk1bu8fbnK1iQdNho",
  "key16": "5JnBepisuy41pPN9iFpdvp8R7fqBooQ4QPcPopZMTeNamqfAy8zx32hCkqRQ64psrFpEKVYfZR8Yyg2AioN3RRWk",
  "key17": "2aN3ZCpvLF196svy528AafisSwsbUbrYWL7VKRh9njE5nwQMwhBvbHZwcPmCJQcdch77VvbnpktpRGkCgZuEXnao",
  "key18": "4vmPCVmwbEHvehfk2mx3TXsexJP9yRA5vPnDUxrB7XRHC1wMFfmnNC5aB16BtgAyssBVfGZxhNjR6ju19KrvGnRA",
  "key19": "3wue1iBp9VcmK19cJbNdPM1YHjYkgsrArXveSQWn31bqnJ4C82ctSWmqmGYM6xJvAbQUeSHuPMA8UrBRDgpzN8Xi",
  "key20": "72Zxc14s7ZHLdZg3U2txLc4RUAhEVnZwGWDGY76hPg31kfi5fxRZR23qMtR2uD6GXpK4HvsPpZoiDxnx4WsvVyJ",
  "key21": "4n5Ts1hfSpxuS2gfPdXhAgPuabyUgxCLd8GgxsFUejKaRcBLJnLo5yP94rS3dpozHMaD2fAPKhhPt7UP7hZsciWV",
  "key22": "WExa2XDYwsSC1Kpwhqy39UbnWfJfPkSkuKF7MrmhvkhmaLvnRYDg7MZ3fPJXHUgiiHou5ibUFkzo3Fs8ebtoTTN",
  "key23": "4Z9tZEimjref9NiXLmVuqoguMaMPHCSJY4KTmZF5zBpScymSk7uYZsn8XGHhGjBK57WYqCUR85SFofxSENWVryeu",
  "key24": "3XwG2hZqvjNaBA8ofkao8eAoGd3wNzPFLNKYYz4u5rT6VfASm7VNtYHr5TuhD9E9f7KDnZhqeDfhWPkLkyJeWv9D",
  "key25": "4GYauQfTpo9ywcgDKF8QLV3kWyzXMidwbYJuzJzPzwR9a4kNZmiTbnJ8fasNHaPkVg7KHiQxxjtT27EEE9Q93Xxp",
  "key26": "4pbkoY1Y4rsKC1po3JJs4vwHfwFDU5ydmGj37j2Q3xnjyeohmcN6EMTPX3WSyaGKtKmypYGg1XgfwMAMpBKidKVy",
  "key27": "54zYwoiuaBKCEZM6TzaHQ1PjfGVtL8xiKo1xuEaMCRxfhBvGGvXw4EMBv6FEKajdkhEBqPiZF9QLG3JwPxrhogF1"
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
