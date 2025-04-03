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
    "nZFRzfcS3gheZz2ZiKDb2unjSLXsXGNVQBqKsucVrHPrevhiHiEwSZfBQuBx7Aax2GZG87Bbz7ttB2AnmTXaHUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y3Y7F3XmE88HyKWBmNUEqHJ7vjoqJUCXKErPzDBhEz6G8DBbukvtpYo75moGjEdHeofMHg3g2eMMCWiy5e2toEi",
  "key1": "5LgwY7uqwsgr6wkbAoha64TicoFBwAzopvCp25bkJ7SnVVxSv79wjfAwswKuiz773CnEiJUZY58Y3Hd13x9upTQD",
  "key2": "91f1kkjA5avQS7N91usjHRCrbCxt94RsFTGpNFaaZNCCaLgwVnfV8CT86Jd8W3xBA1REzX3NGx4NfjFBLtJ6YR1",
  "key3": "3MdHHD5kNY6F7HETCFpaQJgXcAMfXAtVzULAiiFEbSvTfiTep1QgqB5k4nqfM3g182ZiWxvtExLM169NiFbj39ZT",
  "key4": "3g2rCCWQbzYNrZcmKAivyvgu6YsQit9a6nwCzn6oNXNh4kmHrwt3q4A6qALuDrMkxcJv3ZxyS8rdnWHFPfRkedsw",
  "key5": "yQaJ91dLfHBE8915ChehgDMyyGMnwAjjSe1ngJ8FcqCCUcfU4SADGyeesBXAJSejiWa7gF5SmAWjpkpzGiEMSCk",
  "key6": "3KYbddvu8rAN6utC8LXzeyM9323qZm5e32D123MVpQ9akg6rjX3X1t3zCU2oCZum83KuzhZiRzsSvUY6fiWeRdfp",
  "key7": "Jz3bXKR5RyLyS8hEoAwvnjXdSoj2ryd6Ms6wAAdicsXZKCdZydDBxNZ9enEVM3fQZw9F73EZUY5vMwoCHefLQxe",
  "key8": "2iYUQ1n8b3irtAf7pJ9SeUujGYKtVQzbgHkNLDoqzzJWpSPgtXYTAyn6LhpMZcoJxV1XxKHbDVP5wYgbFjzpzMzh",
  "key9": "4jHAdNAQsWvPJNErPYcRL4NpnnHoNfeCCz9w3uX8wBrYCHX6C3GLPCDjXtTv2ccDkrzpEKy2cYyJqqs385RqUhSn",
  "key10": "34mKgvbrUGtv4TAWxBUtxE6HYsYxzhVTBUN4fP22bDwKcoEMTGMDLCXr2SdxwMKRMPbyreaP7L4kQNUTkKdwrG4s",
  "key11": "2ZL6rDkZmCMoQHaE4JYde1UCQAnHHYGrxbtHBxxjkbZBZKKdFwkSGiDbek7o6PPE64tKF6yJBVw2AVPjJjUevrL3",
  "key12": "4MG85pdki2bM4Aa6v8aAzoARU7p6DApP6dEVogtNX5CLFekPEspKrNRqYWEW539Q2Y4T6im34zN85oXJWanqJPme",
  "key13": "cAv3RrcoypAnfE5HoPqZLPMqWcQ1t45JxXWiq7D5W8P5YHQ4NKFQkf4FCsatLTA4TkSkTFEiG8rzJsmbF9nMqBJ",
  "key14": "2wuvhhds1ZFuiNqzjawcG935SzLx3qUHcSw4Sfn6e5LULL4Dji2QT2Vtyu1gFoCBi9scBs51Bh7rvqgkyeXCbZUe",
  "key15": "5DhmyacHxvBjpyKq3RZK5GH1TmaKZUnFbCcp3kVQGpL3We9DEXhwd7dXxEo5ETNtyCyWSiBd98reRWemSMXxeGsA",
  "key16": "4trvjkqCD1ipGGMzBPXf6qCQ5CEEMM9UukhYzcQEEUUkahAxdpxBKzMzBWk4p2ZsyMojfWkGGsn7JQjASabRdtQd",
  "key17": "34UwqqRFjSeYumXW2inceGbjMpWPWyKnPDigSmpocyVUuk4i99P4CuQE4w2w5Q2c3MgsXFuGF1UkwuHNcDDzaQ5G",
  "key18": "2RqsKwW5JfQqcsWjEWrFjELDFC5iyctjdGcMaqGXQsvLZeuhULo3H8ipweoxVbg8mCH1TCkjZAxU26nrQKvJF8kC",
  "key19": "66V8FPZgT91wbxFZDNhSag7jCmXnfe98X2FpkJLEWh1duB65VzRHzUzdY35J7hB1ie3beZ1mQNBfu9GKmFJERjhh",
  "key20": "41EvNu9qMzsHeu36WQDorLsZZ5XBakQLK3KKQaDKn7SvS6inWVPj5sj4M8GF4Y84rA9WDZ61LVnqgdZgFhjCeoGY",
  "key21": "5v3XtGGXpcV7KPRsS8QW8m1U8kBsQ3bi9TevkwaeqEcjXe4ji7gjagxtneQyBqkdWxbZKC6LmmtJzkNat5MRkJv",
  "key22": "3N1N1cZMrZVCvo8feFLnsfXASdvurXwe1wuMf216Au6v3eiKxAJD22oKpNea1ZsZxzskwZd3gjHykKrggi3ai3LG",
  "key23": "5uvD4Bcz5Q68rULW9F1WyJafq24xv1ShU6X3bW9Z4t9Cuxb6u1fCd2GUD7huGrK8P57hEAJWpKQn94MSiDcWYtxV",
  "key24": "597osaxJCt3GbjcoZauh8pS2AZcdTq7FKejwCUg37rLrzGfEwsZBhkmTefxHbEjdgUeFzaMTFD9syE24Q8sNp5c3",
  "key25": "2LNcHh2zLMuMcFjTCh2VYUJWCbU8usd48G2bX6awusWpcAoDSoKkj5amReHeybXx1o3j8xUrPEFRe88dZdqmDfMd",
  "key26": "2YGsS5PG2fmTSnwQzosKsZKuhzocrww3okFqPuR747oTyG27YyuNzsHHrQCrecp2b4HDm818u2SWC4TxqVz8ZFUT"
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
