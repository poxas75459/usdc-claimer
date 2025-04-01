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
    "21PSdQRjPu8jD5VsynVJBpgCGcyv4685E4S6HT9pQr2oGfu3E5juzcDKQ69LaqLa5BG1mX6neRoKpHAwC3a8t2XF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "342FFavzZLLJZhh3kgzrUNVUj6cwZoBKWwe1TmxJEWCrewftUUZWmLC8EGyDvmAWX8PpBodV2PJiR5HkEYJphW5u",
  "key1": "3VcVqij1uTv3kexTRvoNd6GusTnMbc5axoYuyh3GscX2csRBEAxGg1mPAosQM7oe2ZJndtHQmtkDwJiMo4SWArqk",
  "key2": "4QriEbb5ypMPz2nxaevV9kw8iJDnCme8n2vGTapNoKkv2M6pouHSXoU1wiyLMYQchShNP7viCxLSoKPpbVdVUvXE",
  "key3": "6V4TU1pt3rvLuwpFfNZy89w1Pga9ZeEoPR2naxLQju1iqEGYiYpUr5P4GKihZQWeuZrsatFTsYdoNeReF9YbzA8",
  "key4": "GigEZXPA2aVqRhUpQW5s2A8pdER3aHBk3JsoMvpPtobxxrtfyZDpxmQNzUQLmgFMpFn4g3T8c66YzN21CsUmQnz",
  "key5": "35K4D7oCAf3nR5YiD9gq4knG9sHMAzvgWFevdivav5PpYdUCUvzKEmX3PWxBN7LrGDueJTM7vHSK82WUJnrX53xj",
  "key6": "5MdaX84A4PkRYRqhsnmeRautnSjjc77Q1YHvtvYN4rKASXMuRXgM5NVYYahJXKRktpSku5fYy7YrdfdCtXH3TRWg",
  "key7": "5MuwS759ceWcyCPUz9tpi8AuuNHYYFTpQYksLDaRnzA8sy9kYKGQVHFDMLksWQxKtUHSA2QrVaMHJMWKq6AgM2v6",
  "key8": "v4iu2RSQU7RWwbJqL8xWjHGwc3W4iLyLJBU3CygiPBN5LdnPA2EyRtWrqjFp2HwJSpz6B2NtoUYMqSxVXSN9ZqR",
  "key9": "4HvDKADHmKoCnCPUFHtQJ3MvmdXW57n5vLhDPm3gyiCmkdLUh1avjJza8oNMZ9RRbtbwmv3wfwW2DS8VUMLFweyP",
  "key10": "4svvs5VKMx5ftQcDb9GC4kcDm7ZTyzeMYjhkYcPPwiRDkMvapHrXTUuffiPSeWijDntf8U6h7sHPjv2ePpTwXoxu",
  "key11": "5QjZVTAezqwsDGY3nk3yAbxz4AiUpECbPCZY7VzYt7ZgPCN4hkmxW9q5bHmPxWoNLaesr1Lt61tL4jL6WDrji46b",
  "key12": "884WWZGu1deQr3nuLjdrG7m2it31TEb67tgs37ppN8Xyrd1afABavVCjVNjVxRvZ2gf2xJZpQLcJv6GA3USz7m4",
  "key13": "5bG5fPsMcu7comnm4wo5NaorTGag6tc8Wj4xUssb3ZrtEAFq3e6M28mhX6yJQq96Bq725XdNdjbSGBxCyLgvhwtc",
  "key14": "31m6fhhM9tKHgkaiTTxLFmxHsRKbVmKD63gnVUbCAT2LfALowqkxEo8RcVfrmrvK4ZfKdgu9T2wLqJRcDyrx5nFr",
  "key15": "5ozvygF2qnBPJ82nwYwz9iQ6Wh86uc2hJGUR7WeecsEhP4HRk3nb13sGwWYgG6Vpt5XB46Cf1sa4B7bwNNT6SWET",
  "key16": "3eCmDDdWE6FcfxDX2jx541wnL3kNEiKBgPGrsp2wPvUJHrKEtizFXXopNbSufzDZyntvvgijmd3urCvRPRpY78nA",
  "key17": "5yYVDcLCHtbcmpFDSRfArLRcApQCAB2vRrKvqXDZVoYnFLpxAhDsJCLwEXAhdWZxLKwQLgVRkvxrNdZmiHUtJK5t",
  "key18": "J8rYrQ7vngZ54r9Eiz7J1yk4CJDsP8mwdF1KJJW3scWcyAdL7z2S1SCMWGuZjV8PGFdVJb1jC2Kmfpv77jierTG",
  "key19": "5vx6JrBpeeFVADr4muUKFokv6RsBQQkzKb4cZUD2a5mPnNkYzPaMMZ64pav991StuMgjwy5JaduqGsM7vU2YEXVM",
  "key20": "2vkqH8Wv9b4Xs57ZvFvfwTXZVX8N71EdwoM8bnzTDu5NW8v5uZppFX9wedqP9hkkc68pg2yenmcAqVXnrAGbdMvZ",
  "key21": "4cTQ3tBuW6fiwVwYY9aKcrkJsLPYaQ5bfLP8NXTxjcMGooetQHeJKRwEc5Phpp5xg5yrspECbTnt2e9AsJKek2RA",
  "key22": "5CEkx6pzyb2VJ66L8CMMdxYrAk4MJmxotV2UqKd1x9D9iFVpqdsNiwTaNC8GmozcFJzDUHT5wp2nrfLjoxBSJ6dB",
  "key23": "zEVX7AGJe7CVc5Jw4GTzHnB3VHBG9Cm9ZEUNXHG7vfPJZq2d8ZFFPRWtH3zcRbbCya7WxXww13NBZzBZ2opYvVT",
  "key24": "5rNTK5KxVRoYg6hRh3qAKDHKc1dgeA4rz4mXFg8j3zYgoDBuioxUo6L5jfNH5ooxAnkex9VwB46TEpauuLypvqPT",
  "key25": "4oYYmXBy59NVTYLkfRo1hhBKej7Q9ssNgu1VdcyvDr5bd1prHQS9TLDUqH78mX3RyXmLeyLbAedwK4STmhE6Vo9y",
  "key26": "5WPohwsmjUneBKryzzfQpePWxxpkC7kd4dgmd6AfqqpzZcm2QRJKTRp8VHsWtJXNbAof92euhuLAk8ymbipJ4NjP"
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
