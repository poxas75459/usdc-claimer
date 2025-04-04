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
    "65kSqRrPNpwYiaEye6yupXQS5muXz5GdPrZ2hiam8r9Ko8nMCoxSbn6rw8LzeGeqCsDHcPurwWGWdBxo9UAr5upN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RpbjbkTMMHLBnU4sPNkVAicvBX7gLGMc6yMZ4SxoNT3zawwE6M52X3XD8oA5GdxRKEq41wRoNHovu2X5U8sZwv1",
  "key1": "4WwFDDKbHC4e6gybBmAHgGud3PKjieawk13ka93EivUBKMHhjxSEJnMHrMzpCStnnabuaZrntcMfPuQK9qoPb2Z8",
  "key2": "2tpkLEgCvwyPEuUcm5swagDsJr515XaGh1KMUnMqtZDMudwatt5m5TCRbnywMKH45CeYA8Z1WUx9x5fmzGm7LZtd",
  "key3": "3J1rEF8sAVE8yXtBYN1UnVxCzLp4Sk25ztHyDpRZuEYEp9GEGE56TRqdXMCmqjUyUFR9eKHN9wbiJW1YMwWSQgKN",
  "key4": "2cyGqaTbgm4J1Zxe9mTSTxYaogz7BrS7EZphM8ZpQYu3rTBrJG3kanEg9jGo1VvAfkjmdBFDHLXo8k9ZWasbmHxJ",
  "key5": "3tmA2vtuqJhKtnjnBF6dqvNbjBZpgYNjZC4hSLW4R2t5xdaAFguXttUd56TnKUfbSVaCvdP3GUaPq3sHMdU3nAos",
  "key6": "4x5Mo5pgwZafZA1QvwXwtBnS4n9ynXahoJdHGqr95HYvhWoEHryTwht5QwTPRkHZK4VHQQhxAXahPpLqxkXnzN45",
  "key7": "5iZJgYSmu4RBscE7kxL87GgiRYt6HEi4rdqQkkWJG5tmvTASkYjg5RjLs7nNwnjn7jwWKeJFfzHmQzfCtXyvbNJP",
  "key8": "2NZ8j8bvPGUUVsWrM2M4gjgicjrfyjKhfbwok9BRJn8GCsXutuchcgssTcuPTTa3edEzZioWnahCwAWJbk5RThLv",
  "key9": "2xRnw6Bz5SoLsW2o5wRW9iSnJ6UoFj8gqgkA9yAzn9kpfFPZrEnWAmsPgi81wV3G9X4ZrJPw3WkHCq2GRhCa6Jny",
  "key10": "58WUCaKUxVpXvdmca8Mmp6gH4YsQCYtMnHZK1yHs9ubVKfTv26N17GeAidrGmCzpGUer8XLkdKJfg9CcoEVydrQN",
  "key11": "5EJVjC1rZtRFRQoLudCLTrjXvqaDwfQKhTVCWnZ9A8FHmJyMnNYjuNVyMkRnzXy3atWarZ4vNmmGe1zMJZZhwAwX",
  "key12": "2zAhkFNC39ZidvRT96Q8HM5k8XP2C7Z5SRQZLAx9gGt562Z8zNQcm4fh8XPGdy3oBoytkbjvRkxwLuWKx3tQyQiR",
  "key13": "2YFxEVGqudnZBSV5YyYdG87NnMLhBJRHfE3UWpDW5pyNhfZmZeEXCQh63mHBydasubec4p7BLRsjpD12YieFkj6i",
  "key14": "2e9crfuBuPvgTow3H9ohmQFSugGWRoEeCVWBU5nT4Br4kHxdrVAAfm1R7YgkknbpoK6cTF7EhvGcd5qRwLZ1vjHT",
  "key15": "4eCwCFLTzVWk5VaYGDNtdR4m41gXiNML6BESEjPtwvNK7kdR9fiXEgifcRwwnboih9RPYuwKUJbRstxestos5Mg7",
  "key16": "4pCFvVys7y32HSGAAKT5ASAiTeFQkWFeybzwuqx1xgGn6qxSwGM7L41ogadwfo84e6qryNnEAh6tUDJt5i1D8skn",
  "key17": "5f9nZgTH9YTLdqDfZJEtv4vn7FywFMMf9V4GVZ69nzoJtMjGtF9PHSfmaFFfayFkSjiLvvBuPZU5ner22kXN6YMn",
  "key18": "5n9Yd7G152vFeJrNpFLHkxaL5mWYGg6qYQY787gM45pbUR6F6cPGggGzm4So6W3F5zGHqpDRXErnxrnDyhTo9XRj",
  "key19": "5cG9gQr8LbwbdnrAbFF2R6SNm7Rvi37DmBi6718fgK8MhpkVWo8pAsVupe4oDsCsAJAqt65nX1VcJbHYDa2xZXZv",
  "key20": "2gGU4fbLf2BgHMJhzbJ3uwWe6kyGcVujFq4opM7RXu89HPwPgerZFu3rEDE8xFf9rq5afgo7DH7AQrDW16EYtaK2",
  "key21": "3uw1BMEJjswZ7xgjnLP2QhYLz3fjqhRU9sYmkZd4tsHciPHYzhhgLJGmVLnZ4kUHnqbkN9JnoKWfJ2dRmpFkQp2x",
  "key22": "eXqNCU7JKCvrDAPyJacyVvozP7i58tXL9Uz6qb1ckmzzNeaDiKwsRNeNN9TbzzxhG57qkdWc41KPYPLyMucKGjy",
  "key23": "2377i3VDiiJDP2FrY7MsAuLu7Y6muLT9VX4HTYw557zrdLqVkbkq2RSDCg2pLCmB8NHSgoGwNa4QB77V8LJarQem",
  "key24": "4WkqKo6wZBB6cdhLWM58jK1y8QKcqG2kRCLNXqMmKSghgotkjoJoDdQq6FNNhHzksL6DDw8bQ6Quwe9kJrvqcjRS",
  "key25": "eiRZzcnLQNqWv3f79p7ib7VqoKcjyLd645AdFXeXvPxfbwbkYybR5wxVchNUaJKgDMmzx87gtPCXdBSd3NRm4xn",
  "key26": "3iHdwVWQbu3DHF86DZXD2sbxLeAXm71tJ6gnJepasW9BNpGLuSd8bcZesGAb6gfM5iouNPiM3st38yXhCgiyFXeG",
  "key27": "2QnLvW4hTQLSmkKkgAfZggLuwm4UaNprRwF2kniQhCJpw1uZkPy43mQEqY1uYQAMtfxGzNqdPWbxsrAxzd11cPq3",
  "key28": "2xgPReje8M5vZLAjG4wLSYtEBNwvaF7hyTJLHo9mqA7MceKbpPVCMwLCVypFUeke1cybP8BbaqPwDiM1nxBt5Fk2",
  "key29": "5B5H79AgsnnJ5yKjBuSXtT6zYHpbF9iApakN9Zt9gkC99MJLaAsDFgt2N2Jz1QYy8uFJvS7uxQXrf5nbSD3wrNr5",
  "key30": "2xqFUB2Q5XWEXC9kWT8ezh8HHKsGMwhLgVLbLdEYK8kwLQ2MMHn7kctwgD1PdK145AMvNFiUpmjqBYEKXZfPxxM8",
  "key31": "2FxwaDx7BMt3R7cZ7YU443t5xff5CHtEJCtEMwrM4cpjzLfMEP2soaRwqKdmwTuKvPMxnMJP2QYxJUn7djruWUby",
  "key32": "smmUnL6JwyoRAVttwD6k5GCfmBbUULGUSPqhc1AaR2a4qocU3RrJpshAwAiSvmCUL5JZd5qMdJkRPDbSWs1uRGM",
  "key33": "5sZCqteLC7P9LEcDaKQmJsLRM9FBudXmz8se9e7ghxKcfyp1yEmyvy9uk4dixPietEPuZFFupsvndKqw885HBefY"
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
