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
    "CBRqLgzi8nCGGtAAwCf2fSxunQ3HH7hFMtwgUP6Gpiq7UsUsXQKdAisYNiJs9YAK79ZqNdvBdmRCn4yqvkxh8r8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A9QWT6dJ2PvEqtmM64Z9ZcQ1N1BhV3wqfT9p77jpExq3coN62C5KJSnfgQTb1Erjvs8T9hAY62zKNuD7RKZF5Fy",
  "key1": "4hrgLbRz4GjQLQEbdNJEBnEMNjqm4VZjQ1fzp7Ti6tr99Arv15GMcaxsSQ2iFkGzqCKtP2JFuoRVi64dbnQiw4p3",
  "key2": "YNBjDvurqhYyNV7EDpShSp9zZkuAZVghJryZuWsQ3NXNHVSZzyyACQGXoPMzGaVHTFH92xYvBEEfLM91ShDExK5",
  "key3": "64xXAZBUeuEqsYoHXjjuQDk28bavjECQk1q73tMEhMvhrxcZssh7s7GX6vPE9imXXKUtdp7zwHYsV9VfrZms9vi1",
  "key4": "3QW63hACGXmPiTPnryBBGBeC24RLE3jefPTKzpvV4LXaTwZCtndynpqnBsF1WPFQuxHexakL4bJduMzUUJG5zbf9",
  "key5": "4Uj9drAPYYtyoX5XirFWWShFKVquyu7KnqbCYJ48iae6556HcpQK15ne79dw9CUy57tEpERqgBWhn7SPYDn47VZ7",
  "key6": "5xU7cQ9gkQnn6QPQaRyTznTghPgMjDC9DhT6pnaYZCsDTM4UcGjQ34Q5pPtFeXVafJkg6hwgwk4UDSzbivWh74AN",
  "key7": "59c92mnKpfJM9RoRAcojjph4DpCZBQSrkd4ywjsj7pDFWLmAFHZzfT9VH5tag2BKAziqMSEhTRmL5y5THAZcEFz3",
  "key8": "5YxfFvtAoL3q8BkdURH9uxGnMqZVGkHTbXSppw3QMwxHVjyN7tZJU6zYQa7fCLZru7HVQst2P8yx68JTwFar3VBW",
  "key9": "WrJBeDxj6GmB79jM3mSg6kvzmGtfikpXFTYGhWnaA3HTygB1cQ7wwgbcuqc6pcf1iGuwKdibtKiUxNHmzFXKi5n",
  "key10": "48YqiY3vRUBKnTt1EEaCtXSDdHNmp1fNZdiq8rqsoY4JAwXiC1ZazRLnkigwZyJ1b8wbSM7N25rKsNtqdjh5krrc",
  "key11": "djLGEH3ZZnA2qRnFSncLDdH3PW8b6DHtRAwKHW4Zi44wsXbAACZWymEeQ592RjZPuHNJx3Q627AvdHhy2m4P33g",
  "key12": "4UsNJa5kK1aJYRbvKJB97ZwYt4DYUAQ5WkkHEuHYRT3U7EKubDd1baKRHxsTiyZm2uGPt8UZ6ywyTNPT6LJP2wCx",
  "key13": "2oJvBu1xGqn7XHmmpsNjLLqLz71FqZnoppp3DFzHXkXCYUhBzAVVML3ojsYohBSKyGt1HR3NE9SvyEtpdLFXdb6n",
  "key14": "5DXoxdFEhNHAABfhwK6x1bbTAfSGh6FjtLPtMfdV3rSoF2YxdV5CFANy9UveEsvGgx7xjvR7hGLg3hposMnciEKm",
  "key15": "35C4G1z3NM6GpV2eqYcgGiw2GVhsN6UxurwSz8xkv5LqPaQQq7ttTNA17RM8ZvJgkhyy6noubaTGXGXEBbSCyGGo",
  "key16": "5jRAenXx8HgKPCF4nFxJckgbGy6KT3JcWudjoq1c1w6M2Zg6WbdCvLJEbcwLp3ibBxZcYCuXWX2Avf6iFnvScnNe",
  "key17": "5TBcvLsZtbzpKD7rXEdHeouk6uS2fG2kW7Xq113W6kcJhA7QAgYfvr2uGyt4SmnUmKwSA6W4CwahT4zbbyChXZcN",
  "key18": "AezbWeyqZg4nhmoQszbqA57qEQooVgWpwvLDDyR6KkULsxypLzJydx333kgUH3pHFegjfaxPw3Y2Ki8CAm5DxWp",
  "key19": "4fcdR7T4f6n54KFqqszdQGPSTKdm9UydfmUXyTnc46DRjuY2bX7qFeVqQDiMBXpUAAJeFqWiLLGwtSaxjmrnYSHn",
  "key20": "MeNLWnkLtx2AvmW7AQ6qAzTTW9LrDjsKrUakpzFBx8THGFYzvLAnnTfdywEiZH1ok8buhpPjJE3iKjBYWRwLtn8",
  "key21": "4Po2JtE1Kpa57jcRs669g2EoF76vharmTUYXqcPN9xyXpPjWwW27tHQMZHfCJTk8P5ahuogad9NS9NDg9HYSzmdd",
  "key22": "dWAGecE14Gmb34hJdTAN5x9ygvRPqaUmDgpzmQXDFVG4FyTKLm33LsK4LnrJFnwkThiz4Jf5jvdStXbJBQbABri",
  "key23": "59Z9Wz6xc97NK2kF5iqA9Xjx9kaxtPnH42eJQUJSKa5YggyKscwZ5hZCn1BNXKQ8NpBDUwQotYh14Janwths77J",
  "key24": "25HYyUcq3DtSQRshEkgZGrPfUJnsqntPLFZyfjFVky5vwRcRwJTr2ZSfGv7dvx64qDfNkRDqwMdMxmPPXM9u3Vx7",
  "key25": "3UGUCyrhgvnxgEQqLg8XDngSh6Lmn7SG8qQVafMUXZVGsziHPr1X6QYiV9pNaEmbMjjqgo2gpergCEDwXFPck15C",
  "key26": "5SfckDxRP1v1FCvxH4fTAkFcPrj5GYaQ6d6z1tsuTy75YuKSUWGbQmGifbEGSSXwMXLLZ7r2F5vpQjcnacwgYxzE",
  "key27": "DZiAdmujmKqe46b6BGvKCLEHZkWSG1fz4BWHm6sSA3akmoT3VA5VUDYhQbLUg4gr5jBT6snM9HnAUQDuQbToYn1",
  "key28": "4ebhKKKYanzCXf2ydUDS4V6gEKB4rbEoWqAxokGruHJUCMabP6x3AAo1kapRX7bFMENkJypZejAvFhvtt2rC4pV3",
  "key29": "2kVkARdyJEc4ozhGwnTEmSo6b6J6Pi3mptpgCq8zR5zWEXSvQEERKtrrPYT9mtcpgz7Nv1xpJQB4ZqU7tek14qdj",
  "key30": "Pk5TyLev2dYi1AcJ2Qf3ojifeo9mQPzMmhoicCN8UhADzhPAXnT1bBN5oHPwvrUA37NMpoVxGoxEKHasadE5ZxV",
  "key31": "3wPuCBnnMbKqdudapA5TWdLSyAQjQgCEkf8nj6y2d9gAvYp3M4f542mvrEQKadnzRS4Mt5HQhA3ksHEELiFAJqEs",
  "key32": "4cLoGevRgqYCrDqVrbRBMVdw5kcSAoyG1pFdZRR9cVnxUqwejm6HbbXP5UipijyX4tCEKMmbpqG7nCS9NYyVby7Y",
  "key33": "2SbXZSkct5Qw1oVZcwcU713Xja1dmR5RUZfiwgsA72qyVJ38vhvtC1W2N8tQDBbrW95CwsvJsCBX2U8n2LAs9Bbn",
  "key34": "3ooeJG5PaQRaDocc7qXvKjaysmy1hPzQqTLYU1VW8RpLxqfDhysj5fQjY9RKNggLnNb7wSbLSJU5VYUqtQTn665g",
  "key35": "5anzYGJBD3mhmMwcEeGJq6d3sUkcE3gXc1MBmzKDa8ckCgTD3p8BiV3MfZRY1dyCJYHwsW66dqRh4ZaZebDHmHth",
  "key36": "5i6MD8yPK8MWGWFGiJPvF3L64oUQk8jhu9zEhEvN4Y9T8SU6RDKtCTujyzZysu43srGXhg6k7bXv3fSmqABjeVXC",
  "key37": "5owu14zx45VjiABJveApg1ppprfajBmTyhBGUjStY178SAFYp7BJzZJ87jiTbGPCjJjfLVwHFVZANbWrAuoa844e"
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
