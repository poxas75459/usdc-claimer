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
    "55Ef3gmhM26Rr9etBPdTjMp7okMQGs73u2zjL2Tj1uHSJ3ZFbg8q91XSwpGZ7xjVyVYgRtFQqpYfnt4QVRn4C8Hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zdx1nRMhJBiwyga1QmUEnS6osan7LRNLaTNZHaB2XGUF5NpMvSpbzHmwNkQLmkD3sgM9Pz1PhnnEewAiT4aHG5u",
  "key1": "2vmCpHDQqq6ha6BfwivTxittz7tDmzdWXSPHP8qcCACJ8LEL6PALg6ks32tfBu9Xk4vgPADE2JNfDMVLB345Bm9M",
  "key2": "5foBftxHLH7kEYdj7V7zeQqAUP9C2e3CT4YoiTHs11qcwkvLZMnWtitBvGQbAiEudDeyUL9cyjFG8Usma1GUTKeL",
  "key3": "48svuNps7bapAmpGUESP7JbFvPMWTZnE9kyzknQqsoVCN5pENnYMG9TmB3ixnoN64i2wkY51FcVZvZHfcNQwgQan",
  "key4": "5Ru9BFLEUXVaYuxJPK5xnt8qN5m2ktFq8EaWiTDcG7wRBXhoE6rtZFUyxkLGsnJPXQPKXZkiaAaqFKNyxpQCYuZc",
  "key5": "5hTgvuXSP1Ejx5vGtRtVXcgq3UN3AnT1bGLjXvfWsDRLStd8CUq4SNuEpdgLVtRfvuC4cqSDJWRcvNWde4JVnb3C",
  "key6": "5vhUE8VzfvNYwyByFSbG6nxfCCp6Ea5QdYEzc64w5AJ6uc1d7DZJuU1bLCkSQknjaVz1cshZBmyAw43bMpjwMUc6",
  "key7": "4SrfjmjgDkSY15RDikqiVbASQpMZHBeeCzus97utujHWLVSDjuNx4p15xAeBfd7LF53LNztCkQRW1Ziq9iTj4Zjs",
  "key8": "35huutj4VYhQsnnb5u72QeETkz2dNEiy3w3uxGD934qyvyx91JqkZxhSRfpkHn1isT7RMUHZb9Y8q2FrYuFa5pND",
  "key9": "4YpuTtqAWDKT6zVFev2ySYG3TUpA5vSqtoLB77QZuxsAMKp4YNN3Wo8epEtYSDXMXRTmzs3mSikJP5qZ8icPH9st",
  "key10": "3VwxL9TyFR7yN8vwsrjiS1JPB22xDeG4RWi8QYSFn9V8REELHm8inoy1PkHPp35MWmJbdTpgKyTkvL35wPyfzrFx",
  "key11": "2zKKC1ZMMjLQwM4oERd4LYez6m5m9pQ8Zn17en1EjKoNsDak6F55QLP1Vym4iQJvyRmzSVX4T5mfR9hSWwKrQbVx",
  "key12": "2RMzewZ7vJsw6E1gMvq3X1Fe8Yiqy3RDS5UUGacLxHZnmS3HfbGpTVR5Gnj4AKTFVowpQQ68m4Kmkjgpkig3prcg",
  "key13": "436NGiGxoeLzHHT2RPyWku11MJAwhKETLSEkoeNFUEfgXEsb4SnnoQYv8mAApZewHAmHXEoPtFtLc2usSC3GUeZ2",
  "key14": "5WRyq5cy1yyR33uLAH4b6PAxPpCnok1NHZCf6uLKbWbMSXqi3sXMUnovrvqvhafzD7mWADdzMLHVVKSU9U3sA4Nv",
  "key15": "28pkSHdJCpJGDU2VHvkzX49PFkyj3bHdB2svpsQ5uj2c7eMnYV7qp9hUZ9gjFQAdbMrqj92NXuwkAbWJhew9SpJj",
  "key16": "5soAvxDYsniwU3WrLBRQ2MSmypSoaCspVo6jns8KYJpxnFqCA7FcWVJnLeAe6GEbfRLW7SEqk5yib4HtrR8HSw3r",
  "key17": "2g6MPxft3PoXhvLavuCcJfXtGEt4WbvS2zFBz2ZSWM5tCawQqoErEYW3LkD9oVwPqumNsqJLnyBUu7zPkcTc7UYu",
  "key18": "3ReM5QwoWqfTUnk2YeEnjyAcVQPJG2du9s1ncuVwR1gXVJbbQewz3BrPP7igwWgm7E3Fj5ER9qFYWsm8Xfc4qS51",
  "key19": "3FaE3uqD7viVoaxs2kazApasHp2592ZFyyMeZAkqQs3CEYjUfPYrae2TSTec9Wz7YgirZEif7DxZueJmmEtx7cG2",
  "key20": "26TP3aGc5Qt2caxymeYTT8ordgWDMCA9NCxTvvBQQ6rhUPLd5Fsaw3RNJmRAaMZU8xeJeRCPNTxdfnsEhVAgFZWn",
  "key21": "3SZDppZdAWfFLtjKzK89V3Pbz4FjGSU5R33BgsL2imuGC62d1bwkwseEriZgf9qtpGJDAxuKcS6pMWFjVoh6xAqj",
  "key22": "3SqgnsbqSRL4Qke1aGGFhtidgb36bFJFi9LjjkVh5k8EjrLByZgqEmJtjeumHkySZ25QMhfuKZq5tGsmZgELMnVh",
  "key23": "N16dmDuhVKK8m7gABzz2pcF1oTriNKfjFW69eKmS3zxjTPHR3zi63j2ugTztckSWoqTkDtm9Mer7HtvkbpK6CMh",
  "key24": "4YtbPS7HB6Jr5uUgEdEEkvLHg5GXGJ4m6F4PBZkQ4bJncC8onn6Q7CorU3Er4ArfoGSHNfnfPeoUcaUpfmcnGHdJ",
  "key25": "4QGpNPHJUkzz734sxpSpjDiwkd6pd79mECpRxNqJmdNgg13ViA1SQa1jpJa9pa2j8EbxNAwXAyXnj3iRxbecde5W",
  "key26": "3PeFaLrhPVoQRNEh4yGitgkoqjzgqk8xqvD8f6udstLVHgNCNgBh3Aqsz4GpDtpuVwcGn4d43KmbFUSTkZHxk53Q",
  "key27": "2FDrnCmSETif31vgfY4AoyK28n1v1SyiiN3vW1NLeY1oHbpAT7TFVFmuRQHbYXbxwVjH6mQZTVZZCjUz1V6cNNDP",
  "key28": "267cph9kX5bkj2g8gop6TyQgFmR7SNgMyTHtbEou9oXnqtS4mGCRC73ewdNdrZQTLYXsEPuHnLxk9iQza6suqxim",
  "key29": "31L1DxLZZRAE1k2YA9p6KB3viC45E7FmZxLTSLucuNj3itVxvGsCiHS2PCDxzMHCQzEQ7jSigU3qbqexpJpxaGBR",
  "key30": "3PatDbr1a9V2rXyuy6UKNJ48jMnQJUbzWKiJaDnn5vD1s4N83QZ7ynU5JrqrkmH5phCKSf6z8MY6eHnNN39LoMB5",
  "key31": "9paMMnR2f78sS7N1yHYBkf13BabJZmuxYddHV5ZT4WZKNYkGndpH765zTmiQFwdR8Lt4pw1WbJf1MJGCSGYfnze",
  "key32": "3n2SwFwQPi4moYYnzbU9ibjKRcJg3moHKm4XTVoxvceEyDC7RD14GohxP4mUGyGG3zrGDgscbRaukVQRNfrvZd5j",
  "key33": "52pWiU4LeTiMYBeBvkjcxoFMuUatwRfmFJbygBHpETCUy27rA1RXk9Qh3k5dRv6Csy7kJHfjhmV3UVDLWjSvVvQN",
  "key34": "2tYsBASdiRHgTVotWNWGi2XoHiBTAixRSZAWUpPm2CpR4CoUugEGNuc3x8uRQYSEeeU291bYvQPhQK36nUTVdFqZ",
  "key35": "4JaB4KxRFxfYgGkzA1Pv1yed5jAF9TkazpRdNYS2RkKsJLyu1qsLX5XUtUR7fwKgUL5gwBHv8V3PeoLsmEbLEzD1",
  "key36": "3qKFPGYpUqX5zrb9Kc9RYmB5omUrchycfjHzn29m63YKxLB8i5u3VKxQ2smcAjeu4UJDPj5wdnHR7yJBhThPxBmJ"
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
