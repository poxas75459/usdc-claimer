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
    "32J7uaWwNCmJfDbBaKEQjria2wVNiS9viQjik1bzvyw6M8FivQLBhfDHU9cXgQdQC5BgoFn8EvM6JepjLvoa8YCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v1AVg4BeVvopHBNETp292KxA8EddT4uazviESSzj62Wz9YwW24EM6JSQYaHwuDWbHEZzDThGVbEeS1H2QZPts4t",
  "key1": "zGWcE5gYKAdc6ZjcAskPy2zCRzM2RLg81k5rfKvYTaKgJXoV1ezUbQkTCEmc6JmWdxbb8Lzd2HPnJDtADLZAmAt",
  "key2": "5GELqSSfj3CJVQfjKuzoxcwXYBCFxffhCKCnbgsah5PJcWJaPGZ3jV1DBJzYm7PWgEzKNzhmVzzK1dhNn3ZZWtdz",
  "key3": "3rm8fQ1Vg2LY5vfhMisfANcCuSGVVcJjfsMRdKf5XHydxyG3h8WwPhKMrYc7vH5YXfEdfB2XSW6cStHDbfsBug5F",
  "key4": "4ixr2i51gyFQM3EdjPZzbWnnWy4yiKtQ5UkyKvJxdH25aRrHgQppCKxji1nzTRg9udB43ZJrr4LmDPQStj5PSEeR",
  "key5": "5QrERaAe3PQCWekV14fpigDJa5toVAebJmFUhYXuEQfYVLnBYNeyxPPzz74ZkQzqxeykbWZH6uYNTxq8wo8kAsd6",
  "key6": "2BTKFumaLZ5Y9erP2ZpFg9Pq8M8Bdjb7pnHJsL1HFY3dLK78Ak18exz4HUkVsyoJKgam4bafW53DXe34vy1ssaNG",
  "key7": "5ZJdYPVSevBBFa69PZ8wAi6qvWXWV4XEsh4tHbrWxxhMdjaEqqyNSHPGa6qGYiMLscgkyhyBczscEn1ZH8CijWNW",
  "key8": "5ig5Q25nwxBG755ekRmBMAhs2zdz7KXdBHdCuzykBcV8mhpEYiUQqvTZGctB15HuSyqSA3Hbsn86qLKLsTXkmuSb",
  "key9": "5vCadAWcijDCTPG88o8gYNhwsksbfK2VGwyGn7ek7TSgfpsxvVxoYDFUrDhFG5eYc3v6t5pQhD37aFrvzZezU9sU",
  "key10": "sp6wTJgHKoY6VkrdSFx1st8kB8Uj4sU6HWeasnvb8MF4CyrjgC5kQd79AU6s2WdMiZsM4pzib1sk2UTxEUbHPkP",
  "key11": "LirvqPP2kSpoRwnmSkusJ7rmWJ8rjfB5e9knZruDcj3w1kNqTiZse6GxB1Lmb8rkiR7meyAYCtzba1i9t94efQn",
  "key12": "ELxo6a1NzAfjZGrhZw1URdJe5vpY6wbRDv2g1ojFyLTEnT3bWygcM19agubWdbMUpCsmMtzcWh5EPHJ2BxQ9Qcp",
  "key13": "2YQSdaSJAHW2EBrKESaA2g1HFvfq1XJiWsZNwysYv56JZdN71hh8qK7jBoSDtmnrq7HXp9mF4ksSCnMA9t3TvqVP",
  "key14": "5oZWMjRNJACFmCSkEmJ9GAEyq6yHzQWvRusPxfstggsfPHXq88V85QcAn5E4wKokf9dkM9tPo9c4Fxumy2MF2fru",
  "key15": "3GmLUULBgRinBvy8cMY9Nz87wqMu2Uj4kjTwBrDWz5w6vCu9fySb1XzmQazMvXmtxLjRjYvKMMFUB6Sk9MgbPYHR",
  "key16": "Bg2o9hcCCrqFrkdHujEas7GSKL4hJVXwbDkc7Es3CiUP1yJxBz4JNmwNb2iMRAFUj4TeYd1j4HdRxLHqeKAjQWr",
  "key17": "29wGZFhZk7Rs76o6dren7v47BG8q7M87SUosvTtd5YHjujmdDTHYVKD73NVxaTNzzMGJVffzqXEyxMem1M4frNxL",
  "key18": "5PYe6U6f8L5BwAYiYnrBiWdUpPT8MuPKuHKDVReW2XMwq9e49uMPDrGLdX3pK4BcQoQ3v3UUUGo4g7yMzHtoGCA3",
  "key19": "3RB3QEcMGCRHLUUGAE6vrnSzia85k4mWiT5iDDAK9TVPvsmSQAqC6SyJf71uFawqoWUaSSqeJMSQ897XP8JDtrV7",
  "key20": "2UGh2wJ6PsM9hXP2xmL6z9f5aurCC9qBfRZH2aDVhE9TgE1cgVwK5232qmh6oUjcm4iYb1vqdR4xtGta66jHVrDZ",
  "key21": "22VfGyLZUZq31LskhnwmFM7mgiz31Mjxd6pQrSUrbUU9aytqyvZ2au3bzTsUaFpSGA1RztxS1dUbd57RuSwBdedw",
  "key22": "5MEPydbUcxHnAsECQNnBRrXTrbR8mruP5hpktEk6xa4NoQxHfVP8yQ6Y5mR7YfUsNEG5kwLVYaEh3U1S6F4Sf7YR",
  "key23": "2pjQgaqFsSL7sKLuBYbKJd8TmYV7G2TDW8UMBy51aES7Tt7NDxvJR9ghTV4ycpt9kZJFVihzJyvchqbJ1c4h6ich",
  "key24": "2cu6AJkhF62QyCsSFUKqfoB9eA74rFxCJqv5AEdQTp46pPYibvg4iBGQ4vef1XHTCNWLVmUGFoJVzbRjokRw2jLE",
  "key25": "3R47Yk8bUpfSFuPD4egbvKh3HJ5ndXYLqCatYUp68DWDGjognSBVe9mgkPmib8yT1NU1ufPuu31brq7Bv4GR1mVv",
  "key26": "51PNxXnoH5vesxEZYnK1VponJMQWiWWzuDNnrxZxMdzHuggJKam5CKz6MiMnQJRaRqJVAAv74RqGJLLfK4bW4K3V",
  "key27": "2FV5UWhbDhMFJhh6pmDuZ9WccghFK56dJM3pFuMpBuYKUjYFfaECnBV4fkA8cFaEYB5mRnyzuJAErDDM1G9jc1ji",
  "key28": "cPJAKEPKuToBGesaH8WXmdwYGCjRHLuGvPgaLmA5MDiQc8VFR2aTUx4vBUMCPBa9JGSPioctsQP8mpCQthsaEw9"
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
