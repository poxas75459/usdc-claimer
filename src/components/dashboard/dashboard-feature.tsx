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
    "33dC5Jk9vpQFzL9mMXVerC28TWPX1aV8x6gLQetk98f44J9mcedGzaCciKzWFySZ5CT7BsMVcf1TisxUJLKoHkqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24KUQoLqFAMqyu2DG8TNzjNHGCRBHriAhDJ1VSnJLyqbqBKGYkT37zppBMAQP4GFNnWT8ZZvu6w5HMaQixTdM4TT",
  "key1": "FrxkVgZeMThxusWqvewZKFYEd4pW3iTuBXLrHQvcN28HSSXE6w2yvsYXrBrXd9Qed3sHczuTfyuTtcJ1kyrGk1N",
  "key2": "3ACNTFaKMSzTuYsWQx3gC4a3ZUUfJ43vUaXZ7UYBLPrqLmQKYrjnAU2JBrcR7vjaEnxp2843FVDRAuXB4Je5Uf7L",
  "key3": "4TcZ6RNm8SMfSgGz7YWFRaDdeQP6Srt8JeRs6zTBmUn3wGe4b8iNXZBKVhWz68YwcbJvFrFgvG3pvnWgKTGeg21d",
  "key4": "kyAa8paoyZz71PMeDvsdYbD7AzY8ctbmz5i158Rg2J9KmMkeZ6Dd3oMXN6X5REdNV6X99WiYHtLVQF1NzMmtUTz",
  "key5": "46DM8qsea2svNyWpp2ALatHRKHYzQSXCWizVpbEGXgMp5ize7DQRZXbQxGpWJRQTTek5f3UqYcYziE1WCzwvFd4k",
  "key6": "5EqV62pD4t3bjD3sMCgtAKjfE96tEG6r9d2VsU5KBzASEdz7CBzU21jqR7jDhfHEiXWXs4x1NerRAeqv4VjRQESB",
  "key7": "5FQREAiwxrayF2yR6AWdgd84kKXobYh5yWmuGgqNKqJsZpfrA7eSMVZWaLsb552qpwG6jAEBE9k1uktuqeXqUrUm",
  "key8": "2yB8E1cH2v4EGaQGjGc6nXw915NvbA5eZGREWGsFbTZh196WDBeVZemfKKgNXXFo8A5d1XYRTVGCqdwZKNDzNEYv",
  "key9": "53bzjmRWsS8wAHWyFA2Yv23Q9yHmhmFQpTkNcCxCo56BeUscC5fggsu71AX3qJDfsfuakGE1gGhE4Wc9xJWirJDX",
  "key10": "5H59Xp6BMv1zRmP9wkx3KDFre3JDCtTHSMmNqfNGw865o5BU3YrjMf2CrohzPZ3s3rHsk5djYgSwAmucLKH94azC",
  "key11": "5scznvQhVxMztRh3xs46ziTbsEh2HrsTMHyMWaT9QmZCzc2t3PVYFmodpcMvwp7hrChaTu56ZcfnAtP2hKMp4MQa",
  "key12": "4MWSyFq2Eq9u8TnYhuLWARo4AVTxZD2J16UcJP8k4wvbspuKsjQwff72rFJDJDdA5vhLaoChZEWbm6TFfzc9Qzgv",
  "key13": "5y7pN1VrcZZqRkaSrmihQspiTRnFbMsr4hc3FSQ45e2nfjpio2QH3j8qHZNb5hGRLRbuR488DkGqqbYdZxrpxCEz",
  "key14": "pqnR5ncWRLBdUofEopUoZjteZ2ZJj7QwCgGDw6xtWJgPj4ssZsPXc16NGFBsDGVafVV8GvCQQ8vxFjeVzBaVe6f",
  "key15": "5YuZuoJFdibZo3musUFYVgqY4CixWWxNWibjZn99BRF67Q3mAJixFMeWHdNJvsbf3L2pgvem26sr5BmZ4zuZ47sC",
  "key16": "58SvenNMpo2dRRzhzwxUhtRbhuDHRduDzcvH1BM4yZmAzfcXSXQSj7xpbyxgoNys4SpWZdPwiaqZkA9EbyjLcRUY",
  "key17": "Ceu34kyqoGA4UCK1sURUxx7Ath4Qdm7wANqCFcwZTJx3fybVUjX83azdNcG4GRqeAv7Ff4zxcsAaaASuEgFUrwH",
  "key18": "jYsWHFG5MhYjZymANesHh39U46SQRQGPKp6FGb37Yiev63dZbFwRPXj5YN79GdVA9YSggx2AgcXo2o27LLzTCGn",
  "key19": "SBNimJfy8RHKxESdEKnmvKhdJUSfbHcvmsgkVdxrFZwk8dWXN6hMUb7DV8wh1TDSs54XWrcziFMGLLBUW9xPQdD",
  "key20": "4ZVivHBYtznsfwJh1EV9tMVjLSuuui3Pmhme4hdroHy72AJcnrxAsgyU466Az2Hwaa6SWsi8ystb1N5TEQoEyRai",
  "key21": "39zGCbJXthkgC9UF3itebAWviTa9aMJyoV5g8do5x4AEEd9ybFLF8d9Ki3uyqdnVQtDRRmbQRXQfYn9XaES81CVx",
  "key22": "8fENsS7FX6EactFGAgNpJMJoKBnGeJ4kxJQvPnwsKzHrg5fEnPGg3ShRN7LHEiUQ8vkZGEQktP3kuZZsAKBkJZ1",
  "key23": "59d74TrMWT61peDSmGy5WZzRGztLJ9xQBmVH23d4rwTvjLomrkGN4QVGV65e9LdsePAsfCY9pXtevvNbxJpCe2Go",
  "key24": "DGmguN9kqZoUMdvKXz6GQJEqqZw7kfziXup2SNF3WeT9yMBs7ismKEMJGyi4hT5RhCChgFKvWnU6bdnuZ2U7a2h",
  "key25": "5Wa7zLXbGJraaNdqF8hyX4hwuroodnHYCEFVrnyfqMk4CrkQuVf1abK5TFBmDHgKtuJC4Wm4vLEZwjHso7W2sbw3",
  "key26": "2oRcP1EXw6AZtNUB1LbEBnjC7Rrsmyjp2Go82e6Vb5QGfswZJ85SRJuRQUV6EBcDEXX1t6NmoQcZgLnUw1LuWW8B",
  "key27": "4XQr33gBQD9YkkJxnUxvHSAdrAeaipqoSpQsE39h4MTLZth1EHsns86dPdGNLjBaqeD6pEtWz3by5d3gQNQx3tzS",
  "key28": "2C3LGNeEi9ziK8FWKNLRDgYUpBfADe4uMvSvYcbWDD3bnY1eUaDQVck9gQJXMxeojUKakNC8tXi5ThPkMwhab3M1",
  "key29": "3YvuQjbLeuU9VTj5GApJsoR5wmwV1e7aaRz5kPGwLDRT3yYyGB8Juze5sSQGSjtRdJwTvBfaZCqvvTsJzEFYLDUL",
  "key30": "4en45jxY4JQFxUAkKrT7yNQm5YvM5YVFWf9oojnK7h1AczjhzWFQFUv4Z3jzChYKYmH3XB64zDMDf8B8Bj2R3AZD",
  "key31": "6FjuhnWwqkF8RC5MNGnh2BADdvXya7XUPPDoQA9H7vR72rsZTNzqFzoJsax44sNankyAG52q7cyhGnSNiP64e1z",
  "key32": "5iqWxcaHgvmRaVgixJmZxeJYweiFXjRu5jrcYi18yTyFVVkrYo3cCa8A4Y38tCmH3uQZwTASqhY7LuG6AGsDBGWJ",
  "key33": "2uULo4fDmwv3e4H2Q8N6NzDVSQydt5MXnowWtCS4vK6J3k4D7FqXcYcinmg3T3WGMKDQH2rtA6SnLFbRFxbV2Pj1",
  "key34": "4qS7i1QnmtiYfSmh5DH6kC7RzMw8MhGyFsyrdiEe2u98mD9wsYU6RNqqGXCGBD7xmMetHGek6KXSPbU2FMxZLaYo",
  "key35": "954hdCnadg4kXMes7nKnyGsBB27EyqVr9gCN7ZiX2jxxnpXKp7Uc5a9AZwXRvzZcp61n67DJkEjbN8ijiPts6QP",
  "key36": "2GVyep1G67XK4VzgSsPDKPB4KVTq6eX169AWiDwjwBJfaf5F9Q2Pse2Wnof1dE3H2CjhkkPCvgRaprhVzZRo6x4q",
  "key37": "47KtigjRXdnV6W6HzKEy9ApnvALzfmzHwxrpXf17k6JezuJ72cQswa8PE7PzH3QX9yMGLmj2LqsL4HonMumddkTP",
  "key38": "idg8vcj8ypHmUhjw7Q3znpzDyGXe31HZCNLxZAfsCudC7uBFGWxPpL28wYYVaZ5RnanqUXRoW9pqF1jTyvNEpWz",
  "key39": "5YqFQK4uuKJcTNztb6N2sBB6wZoETez1S5YA4h6Q6RHjqtZ6YhAsSQpFhdkrN1e1jtdJtNZnqjcpLFsb52tSHYDD"
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
