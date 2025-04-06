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
    "3q6TBts8qCZf58x6MKJ8uS1CGPkdFwnxHjZkczpPYS1MBPzGmEHnoDHpfi9QhUT9yMGbW2KX85toJMnuGpe11XXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2asGdtN7Qz8ZxGoXzdT9CNDvyvj67UpZwRFaBZijiiKBUGzMuRwvornvSfVPhnaHq4xdzATt1p64UypqN1VvXU4q",
  "key1": "4xJtQQZya3ra45fZVXmMpMjhqQa5AZWhXLYHQA8qtVXPVz9kkB8p8woP1svkmTtnWRRVaJsNf4YLQpLrrsaYP97v",
  "key2": "5FjLnKj7vGgemcNggDwc668b3y3FssbMWXwyyGJyX2C2jT3PhHuPqguCZPeiqJ3gMQZrCzsWBg1SMC4XTyb8ck2K",
  "key3": "3PxguLW6c1BZx3hBjFUefVE39JVQEYkRZ7ewSNm9nY3XiMWDkURanqAw88irU4ULFQRvk3y9hBSZ7CzNfZrzHm3o",
  "key4": "4NmKRbYGhQQWwEoBPwiocvzSqEH64aTvSUtZLYpMXgBbCQSqPSs6QUq24Z3yrNik4fyLUh6hsjhBAdzU2CpkKNUn",
  "key5": "Ww68aYKrj6GsDvFbh35f3DuMun4N8SbbWZFrwzKMEcnn58keZqAsPN4m68gzn9EgU8aYzeJDxtZk3A1tgxMcC62",
  "key6": "M1DafTjzK7pv9epFBTnfTwvzYHwpNdx9RupfPP5hj9BviFx5mYkkyPoQdBEvg7UFhtZ55cQ8Ecr1XBLCBFRPLXf",
  "key7": "52uSHYQ6SmAAjLHuoeUg5qvkV6yWXoXKiWu4f41VR3TW51mHuym55adGMdvXiXP84LrJ6Jf6UWvfyKc58ttbiNzK",
  "key8": "3yZGeSZhg6GBh71tCGHtfhbztNSoY4xoPqRBgUGc61jiyoGFgXwt25SmwJCigm71848AMdDptk1KmmN22uHXeDCe",
  "key9": "5dVggoSFesCVmnz8Tytd9seaxFVfh7pfykoqhLGNUQkRRfa58kiSJtNNHSxUdyGXY3ZBZtkH3mAG2B2SKWTHTbWW",
  "key10": "5461bV1tBxo4mB9ZNsrwEEZpAYGApqxaY9Co5BpszpAG5Q1eoNyhbNdoZ4aWGU3D5BZhN8fdqQUNCzuYtDbV2FjR",
  "key11": "4vG3fYzn4u9ELyx9eEzddzF2u8cWXDVAxo4gunHVqWNJAWPw5nKhBaRvipjQaiZmrwJSd9CgTCzmRUUPdXpfsTvP",
  "key12": "5qV4a9kbT27zV2xQoZhZJxh9jwyJamjyw6VoFUz3JgQzCdu1ED9YtBKAuy8XGTmcv3JPJBVp4pEWViTs4tLMhD1X",
  "key13": "n6Ea4jFxx4VfgRon4qXnRVU9G1VUqAMnyEsXGcC2F82ykFjsXYBPAuswEQjKNSHiWs5wapPKP6oMYQbAbk79FjE",
  "key14": "af2SxvNWX2wuqGcyiEcC8rec1asMmWLdEFHUHs4vHdo7EsPSRK7dtYFwdBK3U54Y2Wx3ZZSBFoCVcBpHJZNEZLa",
  "key15": "55vWyggJXULQVXy9Tqm5XoRh644qbEHEj75q2gNVctPmmRo3Q5S2FLFydubXWPC34ZKysWDCNVxGMxn9efLya9kc",
  "key16": "3VS1uF9atETs26biYvogUFCja83rDBQz443zNbfSEaE842GaFtqoCS3CR8srnYqGX8Tp96vvr5z17Vyvp2Ya8xXw",
  "key17": "wfXMyRobtT7JN4KbZhZBHeAru7KcQmh55M5odSnjGP3WH7t87MspmfFUWZih87GuTzTuX4doXxbmeC3ZEnfxrg9",
  "key18": "55Cc2mj9NYjioHZk4XFYStCSVcrryhXZm26WurAN9dBVQKus55aZd8gnjgxvD75p5QoHZTkizY1aFbWwLBpTvS5R",
  "key19": "43e5FttYW7K8uttzWtwE9dSwB5BLtCbvruBRXPMrFkWBBFcJkEM6Grr2JjHsgcZrvCngVDmkPGxMxsa9jVKjPWyG",
  "key20": "cE2TzzaxNPacwy7XaB4xLNq4Z31ubxfarWUk44R5X8ywhmVZkujbVMTc8kDCPr4q4vQyiNrLMBx98VZf2DDJtiB",
  "key21": "3xCR6dYjHcg4ci49duwpyinayooPHNocr9QTKhagntNC1MVCfHdAjuF8GaKfxjCzSFNw7DbffZufuHByeHEBVvbF",
  "key22": "62UQbk94dY5KgaMmFceDHfmDZtZksZp7DWmkChbYsLHFvvZwjPRGQfLD4VgvfccEY8SLpVtr1EadSM1V4fUe2ZrN",
  "key23": "3ZL8AeQ9ms8nabZFRA5dbneyPa6yrTNm72YjVYTMgGy65udbKBBtcNpbPQSzDYXQrY9cmYheWNCAzKAwRRBYgj7D",
  "key24": "4en3LrvKN4NRRZLQYAh5EtigpUG3bija4P1jMJn5iLiKoCphCA5cVR55dqQg1XxqS1w9wPN1A2hYmYDhrP8VSVii",
  "key25": "2kCSM6iKnAKG6YnMVpNAsHxQBSiWS3bGZcsv5bLqfiTwTyXKzg3nHfiyQ8kQqE1t3ZEdv59UHpUjQr56Qd5Scpep",
  "key26": "3zuG3Aco4CEwfzgfgjY9qe6gjGB56cVxC5kgFhyeaEUP7VRkDUKFFsp12NWBCFxzcBeGTZmgF8BfzqzxvoxUbxN8",
  "key27": "92orBcQuvAM3nABqvcd1xvhSNQpjC27G5fhdUxK1XNQBq9oigdywQGiQ35o3Q9ymypnoL7d7jPhLfdkkT9rEeC2"
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
