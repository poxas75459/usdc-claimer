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
    "5nzTREjzmSpDvmq2nqNMS6aPjn67PopiTfiKdWGvRu6ntoGJvPiGZTFuTDVjNkbvSWaaWxSqHLxpoekCjo3zijqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4za3Jz8m6fgnDX97WRC62ujwKS5DeLEVmZMnPXgXCLFzQS8D9UDytScBaSJYtwCbrnnR4GkFdYvH3wQXmZq9ikr6",
  "key1": "2BpdKXDPBrm98KgyzwFVGZcoZFQU6ewF3kZsk9hQ3wnpygCeg1c9mbrcNJVRKtZ2hTv63YAygBXHZqM6MrNHNKJQ",
  "key2": "3y7okze8ShRxfC1GfbhaU4FD9cibcYaJhM5uQAAkR3CQfvwGRDyzMzMgCPwQ6bMRjSbHgjpRGgVHyCSzaUNreYoN",
  "key3": "C2AN6wCnAyhTLkC3fVp121giiLBLn1UEw7jFCYxNgA6ww9JT2r2qiLvnDQcbJuNGHcwjrczXzBcdrbayuvamJyH",
  "key4": "5KEq2cLvEheVBoDBJNi5sjox1cFFwn1R1yiuZuSrmTZok2fzFKsXRHuLMovgrSdbFEwgUib8YLCSDkCVr9ifny6Y",
  "key5": "2SeUQQyfAKUEHpJi4dDHFWsZEoXyR75C3MSxRM1Qa5m8iZ5PnPbKwRnXkosNCQuiaGr3EdPiGUS97mdADGMZgc6U",
  "key6": "jNG2WbHuiS1wVLEfRKxcrpdXG1wgPdneAFdtG44biyVEfK8W6m38gbRcN8BwhGjsETAumBbZB5Q7bQrjXHxYJH8",
  "key7": "3HYXTJ8cpzkUjgmH9RQyvnAmvH5i3haU4uobHkjrUULXfedS856wxVPad4hP4kYdosq2C4MpySyPcr3yCDCcTTnp",
  "key8": "3ZvhGb9teoFTxGndYDwhQaX186p3yZMnV8JEPUhSYiCwimPfyvCasWQzeW9Kecdh9AWyRyi8S1NUHoZEZsQYPAiH",
  "key9": "2vBu8MWv547x72kYgUV5Ew1EhUKjN3YhoRUvFJGaPNs4f4HSdCQAHLKRmgRgtUuQpAFLhuag7CLAyAy66XCZBq5v",
  "key10": "3f6Gt6wAbqK2jbALuikVeACM1CowRXc7oiDuSJXcdtfL9Updequ94EBmRcbVhW65GHZEYjVfFs8HD8WGvM43KMTz",
  "key11": "Drs9PGd6cxy69ag5QtBQKXb7MY3H4sxWfNtsqzZ5PcPZS9W1AKpAseCJUeh9XvPJMwEssLndVJnvCNSYwancrjT",
  "key12": "5wsdEj4HZbRDD75LgWCruySeWn8iSMgar5kpx5PFuT8en8EceTZvZy42nHVdg1ip5XTzuJr8CAZXAdVjjoZVj6GL",
  "key13": "3P6ffXjc4Tc4JfBwEHpdd1csJRfeGKKUssQtLJkxUrrcbcnWWpC2HnRb4KxmicRVZEoFKT61fPG8Bs3CJnFNShZB",
  "key14": "2xHVKfTHLivo81pMmJHCMV4Fy75yWAWGPgDpmJ5A9Vyro2R9DPE9PpiWbRfPdEJMYx768YRRnkN6SaHk3WH8L7GH",
  "key15": "5kBp6d38FkZxJ7HMCvaneHSbo479vJYCVACnUqkwhyDvMe9BtUQNqVL68hh4dwvowAhRhRwRCNdhJ5eSYAgiadEd",
  "key16": "3YKsY637XZj27EFLGEa4wvfvnWM8PEgYZVw24eqXqJxhnGramLnKvfiaDKmLBP7debMpLNVvuZvBrXvXrkQETpWv",
  "key17": "VFQ12PGkkgCf6zeucTmZTiAGYLND87tKA2Rh3J9K98kY591fF6ndCRxcVNJyqPHt8pJCSBforgYEwAgMZkQFRib",
  "key18": "3Sxsn5cdpjsVtjSFq1FNSoFpafL1HHBmsj834KnPoraqiwo2VZe5x6ZdiFouoETUYgLmQvwhWJVXYqFqnJzAhwbZ",
  "key19": "4f8EggNyyCDA9a8373L8HCHUKmP6GLHYBtnqfzqiJnZX9Vmbt6aGVM8BnQpibttxtiWhNFYiSMsnK6BFsC76TNG8",
  "key20": "2hmtiWaiyHysCTYDZJAwwxkVcXWcVKY6eQHjqsSByZDSv4qTaTB2wwVYK6g2rVY2wGc91g3cDgzy3pj158qHaSQ2",
  "key21": "3McxG25xHqfXgbg5pe74sr95j2KV71LeyvGNZHqZ3GRtcQv1sWmZbyt2GKvqsgPDXte4fzBLgqSF3XKSBQx7E4j5",
  "key22": "5ujnF4SuEsSugbQYWNSMj2qL18F38Q8bcrzYSph9dGyKn1VzmAAXwESMFKcc7AfAngsQHhbdDWZktnAaXXWDFXub",
  "key23": "3fN6ASHhxb7XqKw33fvCQH37c1kSz7qbeUCp2L6tGrQLoh6Bj1nUMox5ts67QtFqrNjJga2AqYppQBqDi4pF3oxH",
  "key24": "4mGVCe2fQPxJuCX7tUfaHyQ5pQD5LNtEotcpvvJmVrMotbotAGun8rijaGK1r1bLxrt2ZFzVYKJ4X5gtC9LVqYaa",
  "key25": "5NUjgxQNJvF7U9QFcVNqaBW96ST94GAwvdtsmvWV2VukgoGnkjKeQsmgQ5H32eoU4hmWMHby6FiKTuDmJb7ShWud",
  "key26": "64W6x3dcyBDMPnKVax5zm6Cwuf19DDFts1Qapy29yaubMGiLXrLZq6DhpqcaZVp911xQbWbp4a4tDVjZmJq93n1N",
  "key27": "Lq4WVNXsSLjjwzwdWEHFcC6Zhj5ZUL8BW8dpZAyCFHcgmewvLccS5kGGRwWtb99YgDd1y3RttS3e9SyE1gnvLRP",
  "key28": "Bzwuh7ZfPkYm8kMAE6SuRcyjB5Chv9gWcSA3VZ27suAKNTHb4WJJCZBWmveqwUA8mvHBSy4TkugC4QgntHevHPt",
  "key29": "5T3iHeDvEcaYKjC7dgMbjQNcs5qKAmuSuKP7YWPsySeVk5oGhUYpy4ALsEHikb4WuQVufVLiJAxcBREadbUCYmhu",
  "key30": "32wPKZadRwZwu6FNXf6rfR7yCpwCbAUK9t3N4AsWLBFssy4JSdCH3gQWfsR8UnEhCZStgyve5mLTbKNTwrkHFk1r"
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
