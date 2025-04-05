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
    "9hQPZk4pMjaUoFnZoBjC2LCzNXtHF6xxsv3UXdHv2SCVu52XWCv4R56BxhPkj2oj9Fs7bfPtUz5dZtbgu2SpazK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "451hjgrpE9EsPwdkvA2s7SNKkCJQPizETehqw5kWB8czKdDjMMMrJbj73BrDwVghEK6RK9Zoo94g9H8HmbxWJc8z",
  "key1": "4zxey8qbfHS6Gz6kiYccBcmjMcr4DbGUw7Z2ypJW6RUvLtDc2ZZ4yZBLULY3n1yHuSQ7yZ6AYaXoxVCFkzLnB7pW",
  "key2": "3HWGqMqdefAALgkerE5u8p5aS9o4sfxvLq3ZeDUBKWimuRgpY7thXJPaUz73AzeXt3VQU2Z3eJHp8TTnmGwazyia",
  "key3": "3LovnK715binaaCMEh47zE8bgHizzwRZaAZg8frr2VAM6muWZ4134m8n76pK2RMYhnDLpCZeRitDypLwXxAReFdA",
  "key4": "2CAQGgr58XnWojCzbaNrB9m4QBY2HzowA4TLSW6JGhvbuKGasaVb3wpof4qYfYLaJUkTHZgwLm8VQCj4nSZPg6kz",
  "key5": "327YBZkhQL6zC5XBDigPZozYLALqdWb1LDycTJnpNEeKqvH8CjxD183QUyCM6YnAsaeXn7thEFYa1SNPhrSWrhKR",
  "key6": "4K729sE4ud1nH6U9mjE6t2ce3D85PrwW68nPZzUYLCRwrYFuCstZ98f5HdFdmVnc8fbw3PHyFHUGzN8YfTNpjBUg",
  "key7": "2QxtPnNQxJwGJAcMZ4yxADM9nyYxcPPqRU8M5V5VQyYfMULcGxHyxAMrVNQueLeJAHjBgQLqLqcNVqryk5MZ7VND",
  "key8": "4CXkaE9aX7Ke7B1WTfkqfjuZexd9WbK6TDR34bSv5KBts27SeXxWGqnphn4tCgzq3S8jM1US3H57rWcxjYmFuxgf",
  "key9": "xBpoBvmJj1VYAfSTUk43E1ye524rqQqTX9tfHTEvRateNaSonCRabc2aRxS2GKPCzt1PwNHctAyiXX5cEhApRcy",
  "key10": "2XHESsiq6i5n2Pcm1899nF4CKMg7RXyufWX6V7y4LwgEUwc6L95MrD27URiBzHVckdQsXxLbXhARq4WuPsb61oST",
  "key11": "5KTmtmUdy3n11YjC34AiaMUazF1zedJugmV2LxADWonN24qQtQ8p99jbgSc52HsPzB3Z21fJFaU2aTeRduCpB8fi",
  "key12": "2b43WawDzPeh5j6oH1uR2UpqBvZXjWkZsGzw8ovPW9pHf1bRGo6t498CqvPqVMBgDgVbc4qT27b5yvmcMB8KmFuX",
  "key13": "nEti49HApRW6PWX9MXcKz951mjeid7kMduU4CEQwEqQ1tynHMx5AWbWH72kAbUr9aNfTqJFmyB5LZMrA5nH7ddh",
  "key14": "4wpaJrwBX21uG7usnzpyAGJWtLpBumDhJFQ7uYozY7MR1XV3VdKsAjE3tbBbfwvWr4Qdmz65LLfkL5EZNLEssasG",
  "key15": "5LwK8tvqnQTXLxgZtH75Yt3JzryDodXsUEacmY6uszGLqsq8VKqdnar1aWJp66aLfKjSkFbYB7ARqfiZsy6q6LRJ",
  "key16": "rvuPWe7X4xCQKCyyFmFfwdLphHkpHsZe8DdugrCUmuT5pnxvPKeqnknnTJKG5Pg9gCwK27HExKEPVwLHxvQqFhd",
  "key17": "5SuZdDD5wg5RVLfnGsy3Vn1DWG41BinWd71WhZpuUkAXoHpwzwiLH37SRY6n7XhsbXEJiCRakh9t3WAfytbvKUuL",
  "key18": "3CTbLgf3BYWtp5CJNVVKPB4qssdzRdteRbmZaRiCktopndFunVsjkgGu37L6fjTvLWq2u7Gk15CkAknSxjpwyeHy",
  "key19": "WdXMjkGPTLP2eLUVazuaxgBLXnwppsak6o5ZiM6hCC8Akza7DBNpjY5wVRjsEiHGPpSPXCNcXBwbZSUSFuoCiYh",
  "key20": "YnF6zaCEa1mdL2HqJnrPXhzooij4CJx9paTtUvyHnzptB5XYkCJqVCgNEXsQHBYwQxffYTVa3HV6SWnjDy8MG1D",
  "key21": "2ceefBdS8mXKA6MkvP6NMFezw5SimrxdoWV2H8rzjaiLMQkJGhQxtgaN7qkQQ5m36fP5732EC3ezbeT823rMqixR",
  "key22": "5JXSfzpUen65RnDAQF6aRV5fEVw8LrXDVsWag5PfR6n87zLmW17XkYD8GcWJCrBnh6H3oq9jbYrYbeANxxSKWRRP",
  "key23": "268AD1yP9BedBixPnqUjfYcKFBCWrdzESLzVbYCNNt9mJAfwieAvabzszgbaDT93o3kZdVs5cDyhY7BdTsDbWwLV",
  "key24": "3zDS5krVfgYYhyaeUBsw9YYiFfd3KcPyBxLCpFHMzi5zKBxpmh7kxBAnxuPWMi8NrRCek1Z9MrsSUvUt6BBoM2sT",
  "key25": "hxcvVzUH9vwjBqKGdhhhQGk323dAvwQqCJVM7KGrSBtKTW2zU2WDwaKTbjNg5743QjMVPDnYizv5vVx4PkEeGPd",
  "key26": "4cxzm23afLUotL48ACKijR6CwuMiVBxF2NbLgas4MMCYS6etxN1pEtKDKdfCMktNUAo4Np1Lu739Rd23xKfsyxMA",
  "key27": "5vXgE3nJh4q3Q7doEPQHRC2sCKsv3ZMvz7cE8Ui1V71cwRsCChfgzTL4T95JLVtXRMuP8UoHtkqSptLuDczwU5Aq",
  "key28": "3daN5qz1H43f7vNoHew6YMDUsgQ1g8UzV3y5RJwmkYCmvmdhqSw7LyLe5vSdYi2Bku7FDNHEgf2NyHtmVLYSD5e9",
  "key29": "2bm3QoN7rh3Yu2b9326p3KRnnAy9CgFX5T7fQsPp381DLA5rv38HeGUFz8t5Bfu3mnkQbkQry51SDaFEzQYmuiR5",
  "key30": "feaViqaPTh5hA2w1KxRNkYKe6CTAmffKVqCXw6nWBJjGgj7g34ZYDjR6eVpTsi3gxLLQPpAXmjxjt8W8q8MC4ML",
  "key31": "5Gajkwdo5TN9WPRwA1Zaj5aWwRj7r2zqkAhmYpigyvTQpYPVJzceEoLQmrAN4xkdTw112cTEaKKz8QN1yx2hsaJQ",
  "key32": "2iq6NtEffZv8oZMu5dAUbN8kdgEmRSJzCTz6AZAyeyh9eLDgioBpMEPYNwM8coM3AZx7T13oqnExCWu24D73gwp1"
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
