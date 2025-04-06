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
    "4yAGaEmC2JLjwhKRXyGVAqH1kaJSc5dj5Ebv7zLSTenpWkWdN2fjE2Fx4oRumqmnw33ZhYR4MKDeedtBvvXM64RU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wQadwLKvpa9PZUbCcLa2qABZMG5CfESpEjH2LaoKkN4okGCwTTXRoq1r54Sn1o5CngAiLaPdWoyFqGTswhNg5dK",
  "key1": "5AnubBeSkdcXgosbt6jzYx8Gkm9Q1r6mxjZt2T6fceYpqRAE6q9UG9hx5aRwbWdfr6B4STyoP73YqPCapVXcQupF",
  "key2": "ENGKjfqmxSxXZrEFJizujgHFkfwFiuKJPh8k9h2wtR7KunF3rNBMaADbUSdzkQ1NHGGZmqHPncbqqiP5fs149p6",
  "key3": "4phnoDbuGqmhhjeLF8Af4dGCC6J96MB48ErWPw5G6ya7wYwpJsWzS3AevsYe5aLcmTkFL9mFj3DQrAhKdnw7QqdD",
  "key4": "5AEvsdwSHZydK82Fjhk8zDdcTnymRTei7qQrs9q3Y6Qt4YHJoUPMAo39R8vSXbweU566CB4Zp6VHUQwdDKVQF1ak",
  "key5": "4cTDnwaqmcTHfAtijRDnSsWVNYzFRpEhhgtaN3eQGu3AsNwHEZESsyfJs77RMGfJgokGzux6vC3PxcMxeraHwZiV",
  "key6": "4udu2u4gBXecjjMqSQSa4kZGhqH2u94zgLMkYZijVEG34b1zoRwF5aK2CDwzzikE99mk6QH5WbpkUmfk6RPG3P52",
  "key7": "VdwkgEgGtLBCktHwsJ31RNsec29uYxcaBqsWaJoGHqQTFg9YEYSsRESKfeMGFpihtktVbrn32QVipKFBjmyd6nk",
  "key8": "2cvkt9TvmnY3NKj3PqCJa4hqbboU1XfagPALVhd8AQZuWgFFabmjNjRFoJVAaboXDsV74bSgW7SgK9deE26688TF",
  "key9": "jRV2yYsVNwEhMaJ92ahkBkWbqDdiTnDJQHYLrmKN4Bm7k8oy43R88QWFnf8RLsdc3g1PXbWWoMsAhGWzsRmifKw",
  "key10": "2USEoYpgtxVF6HdbrxtGFeZK7N5sfiU9P9KY9we79DgSR6Vp7kxmkGk2qvHLMT5k5DYpFcefBAnp7UZ938zMERfA",
  "key11": "58YFRa9JQgMHiFSqoLnPNRPRYq6GSwyJn3MzugfViJbPS7Y2AUizQ2ZMbhrDmEajdLzJAF3o6aaMHxSumEonwCEi",
  "key12": "3DBadG6pos7WWWXBfqQHct7ZJKG5gzjVNWWZ3D3ehP4yx9zLWuZsvXgtYo6tX8uS5jfTwD3QfST5YhyBAH6gUyJi",
  "key13": "4H7iDPQDMxymEseXFub2AaET9QnUB4Dzv3LYiaWoMR8sRJhfdHsMogyQQSKxY7DQrix1fiS1zrJtMtibiWtJjLa9",
  "key14": "4M57Z7Lu27Z6mbw8X9NoFPp9KdqXdV1kPLnqEJcqfHyvSGBiZV7VW7D7QYKzC35wJvmSCLqnFQiTrfbmPJsdDKVX",
  "key15": "5ZPyTdGhhqXZciU8CAdR7E3RuELYJNBMNm76Aio7LJr6G5oQYBisuSCvsLe6P1oCpBVk5TPaXhZ9QcPtP63pfe6o",
  "key16": "4VPf1fbp7hKas3zwZGDirpiTpLp6u5zErp7XtHCHzfGiv8E24UrTEcdHbp1t5etcCw9ik8eC7qLzrH3zjw83hQT5",
  "key17": "2N68XUoPQeknhTTeyrqLbDooTNWA5pqdonN9WXb6NFUHz236bmk4pSEDoP8iFRpftuCnX2fcYz4hcfpur2yz2vUo",
  "key18": "Rf9ygBE35S3BioJDycibCp77G6sgFtZoxMyzHLMdzZEdZwopJAXkT8FJ4nP6rdosTTepDseKfzHUy919fTseLsB",
  "key19": "6siQSQZwr9J43MQ3LZAoQioaNjdT5fhbhycKVj9Zt1NeUuXyLS9hFq7bWJtQBa3grmLW7nZNUh7MnG2FLX34PxZ",
  "key20": "PXk454JFr8HDPGXVy27dhMPoV9gsmfC8s1JieDahJHtxNzo3SKnRvyweHDHUzAJqKfWejJHFwpNQTXB9734FnN7",
  "key21": "3mUjC2x31p6WhbQwaWJTa8KyCJURrY2ikmmSTb5A4QkFDYxfB9vd5PjanQLmrHDA19fjgnPxsmSK9SVoHJpsdFuS",
  "key22": "2qU8s3cokwuoRvj62SuRL5UYwvcLtdFkKRxcXheHXZ9MnMV5V3vowRDnqbGVGqxHcQvdXChLaqnDNPcGKWoJZ5Ss",
  "key23": "5eD7vDccsPFDcBu7Re6E6UnR8Qz5tmHojxtwsvuWpqQPS2YByN4icGGg2iJ3T9Nk44Kf7jL8zVbKommTuDCTY8Q6",
  "key24": "cyvgMvgTM2iUENTM5BcgLGMWbFz9jVsMxeu8XUSTxbntmFZvWCnUGoW4YeKsj3RnxAfwEEb8LwUS2v8LmfahVLL",
  "key25": "23sr1vXAhishT54ksqHuZnuhkPYfSXrU637fTCmpP5Kge8c5hHB3XRp1NiGwwUWoukbEo33TLDsrwTece5cdoT8S",
  "key26": "JQPcm4mMgJQ1jgzBn1cJPRM7R3hZ7y3n7BFkQKNAWGSekkBvqjUCxTy4WAEjEupa9Seztmr6uZUufYLyGBkh15X"
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
