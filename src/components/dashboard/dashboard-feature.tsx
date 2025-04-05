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
    "Qher7XfsSs1Mh2iY9bsRPicysXBvS1e5NUUXPbkQL8wcXajvUK6nWv7ZSmUNNcNLzWcP3J7vLq3obMr5Pqz1cty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPW9fKMVHKae6tmaaJLxAv9DAg8oMn7qFprvgCfXAigWjZkNFCvjoWzRE2g9f5nUxt9Ch4i3SeUgNJCh61pbZUL",
  "key1": "2qX8qz3xEApPMDMVCGkvf9WGmUGgKnErpLsX3rgAWMxUDKX5RR1UGGTowNWy1n1u6Y2jNgVKnppqNTrNJ71Vf8ge",
  "key2": "2gE3bVn6HkxgjPshpdSWFcRgB9hTYJfTCcSFYwrm2upZ26Q658qq5thjin4ZrPmsD7ATfVMDCpCjf7ZrSq8xnAMP",
  "key3": "2U7jazCCJ2vx2NC4ZMWMZtA6sdihEmAggPSZwTJySNKsmepACUjZero25SrMCXu529P36yAc2tAzprLyxky6Q5oS",
  "key4": "2e6VcqjxnSvA6eRjWXXMZ5tpQ1AHdBSvjutecELWD8iZRreu2YV8HpT8USxBVdnFetBeVf5uXUk12pas7yHAoTGq",
  "key5": "3XJAU6WfuH62wZ9QVNduSWAXtVFWGjz9zWxUmaXWgmqwv8jD1B9eSFY7Szc4DqPgNseZZZ2hCszaEwuXjFAKPKRV",
  "key6": "2vn7oTFZXa7YPy1NUpM1TNp1ip3hVvfD1sjiiy9WAsizaAfV1tryZvomBwuGcUkYugZHqnQZ8SQYn63wEL54LMW5",
  "key7": "XkxYYtyVrBZmCPkJC2BgBwXxHaMTRJXrBXDBmPPqceVrZ7abUi4hsntmWfSM29zUhNmReRK8z12oVCLCs3KUvwr",
  "key8": "4jMjk3VXM84caZ5UKufznV97frr7vhTpUy9k3xQsLC5sStN2GsEx3CXG2jzhggCf5vLRX5dfP78ECzM84Vh9THTN",
  "key9": "XwuAKprLjJwEHM2P8K3sJkqmXQYFkReQVVj5uW35bAajDoafkDsUb8RS44mD8qhbJNYL2qiXWtDf5vhP9PGLXM9",
  "key10": "36iPSXgC74VujjWaCT9k27BRMFooB4DEboz5RW8QTLRu84mtEonCofVQP2gtuCbVKALM4nd9Jv8VtJ897hKB8uQC",
  "key11": "Xe9rbftm5DjJKFfWpBhSYP4M16pdq1obPCHi3qMoSLNmi7QmjX1PesNQVuqK1ebjBKy194Yp3dmdGcj7a3Z4cUr",
  "key12": "4YWA7oVd6dLUYkNedgaPv6zGvN7wnkZk5jXZCxEC4NDqGnYYHvEZHBBbwVznhBE5oUmKmyM7SryLur3s52xnAACF",
  "key13": "2ftKkorAguV6CXhdTAPW6LhygfzNSGDbXZDRSsZZEpmS2ZTVKa6ujRoYuMXRCAiRXYFCBdQPU5bJgNjcnrqPWQYX",
  "key14": "3ZRhxoauQdRuhZxChg9yh3G2c8ym2xSmbHcfSxb3qWgrc73P3ygCJGMB6HWM2WBCwX79jHQNZnzuaGfw11NjyJY8",
  "key15": "Cewz5UVPty7sMzfmbC4hrwhzFekG1ohpztbSw9vowz8rnd3Ts8cRrBKWjLYXq6rNgV4wjqiQdk59Sg7i7kFAkAH",
  "key16": "3sh495YqRQahum2USvoXo2KCS72SRt1gBGG6MGkDiUmUXofAMuvL1sNPX7W2rZsJH3G2evYd3FRf1gU98yGPDdRy",
  "key17": "3ryMQJ8JPpq3CsaBUiBiZmxHggLdzAS3b97BMia5bv6AdWc2Vmfrgd2NxfmSwm2ffeDvdXhakjAbra22gKzmLw6P",
  "key18": "3RPn3wToLBjpR8sSHh6smmpHkKWM6jNE6n7CvWQHyWfcHPtCX2VfvR97cMBKSu6iGU2EcxWnNtmXVVJcqEV4Kjgv",
  "key19": "h7uRCxARUK5n8X752MmvmuQauXwNQRhCW8GeZFk9o5sNtDkrkrdWhLgCxLa8W91bE27K7Rws4MZRqZ3y4fUYcPd",
  "key20": "38EshP3RygVvby5wFUAbB4nxwJ8xD6WFs9pCS8f1kUvB3bYRauuDnyaoyNTGQ9iKt3GzGSry7T44wyv4M5yHjMdr",
  "key21": "kr7uc78fuL7Qk4KQBXLrgPK3H6xJHbabW3vZwdZ2krBXvameT3W8ZGeSRBVJHkfWb4VBjJteBzbA5LGk9aAuMQu",
  "key22": "4Ze4jerAxfVnm9sJznWw2vA5cJws5qDWzL59oRTWGTTwwaCnCVBRVXRnZTLg3URf446E6XSzy2AgkKF7nhSo97dg",
  "key23": "4Ht4ySCtjJWrmU7i2eToZSRhBUk6GoAaEGagQRt22YRb9NzweoDkDoePqWYJyWZWTrjof8C39UFADVocnmCPETCy",
  "key24": "MkQtKZoUWN7giMtXZEZrMv8vW9cy65AbM8fxY8KYDHmZjJQhMpDaR4DEiyEPEVwj2Bu7XWL5T6KeBB829ipGftA",
  "key25": "2WKDQ9PyjJPTBsZaCqFNsihpRi8aUT4uEkRZBGpSFwZEiAdrKHThr46NLPUMJpa5udpUH3vinzF7eC8xqwWoAbxL",
  "key26": "2avdJYgcoH7yPB1jSzHzhCk3sh9U3yzxxkLMadZyYWiKXRZWDo2Gs5C728FKDU5PnfmkGdarvbwP3eJDRiBeJbFq",
  "key27": "2pzJ4VrmkTHztvxpipytgePucMhg7qzjSgWsrp5toWBX1DkdQUzvGfCEmKeMNyHM1923DdoAHrTUqA5gWWpr8GwS",
  "key28": "2oEiSsr2X1XhiG4QEFGEjk2Uj5RTFTbsz1dmFzWYJ6k5W4xt9cRivJ9TXQ9Vbop39QAtzbcYBj8H7EpLy7PD2M2g",
  "key29": "3Tp1UZkZr4amBodq3F63N8aKUAFefpc6uft2w1mW7pAH5UpvHzoT3ngKpttCcDgHGQWhs3vbhQFfNxL7D4Hf9WRq",
  "key30": "268dUwjX3KN6Z1u6P7C1NWUVLa4ZoaPWJ3qDjKKn8z7pwff5qnjLKiZikkbSWhP5zmQh29h7D9b1gVAcJYrN1sNh",
  "key31": "3PVnmJ5zayR8srYWxvfz7J5bvNrhzA37wjfesFD1uXsrEETmPqeFuvMMi4efpDQsXTF4uUFkqnAp2JSutiyKEJzC",
  "key32": "462NWwPadQVFBRmrDZAv3PXqeCDvd7v85HBmQEYBH3kJETV1HsiLKmnKYp8uVdjDiwTCDaRSFXfh7QFNFxh9euF",
  "key33": "5Hojc6nPZUcxMgb2LHckDRTvu8oF2S3vW8yjB637cExjJa3vzw4seF4p2JJxXdrS8yAijJuoke16NzVANkHECHZ1"
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
