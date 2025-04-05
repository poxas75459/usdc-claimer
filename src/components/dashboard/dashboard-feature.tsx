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
    "1JSzHFw61Q8bWtcGe13vFk6U4SbHqDehHBi7KXNayFvBY3b7ChuKxxkrJc3raNsBtz9ex6G6yigv81s884NnNyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tYexS9YiMMkhHXyG3tq18QikQwUj4UDNKVe14YbbX2KA7bAZpVkABJYbsQp21LmsxGJBGjaHiXSYfhL7Njbtfvz",
  "key1": "5R69WKFMyudXiC848RX9wVydxVnZYCSbe7aSJUnHbowsjEVWBzLqGj1ierJ6LRb5nVrtdDVCoJ95JtEJmpRk47V8",
  "key2": "5Y4ayzWixi567Bgd6bZRnRxQzYALdkh4xP6TtuAju7iTFkRVfV2isTPuLvWbHHn5sc7Boo2PLgyb7yhQPZeWEHCM",
  "key3": "3Cv5CMzhqvazFjpZRrTQdgmGGtnTLfuHhRgowH86fR1TGg8Gv927cKizow6KP44korvXzQFNhpw4qg7xUK2oxxDd",
  "key4": "34W5Ju7SRbxChQjvH8VWNYMgij77h4LKTHeCedJm7mP91rfhCi4jnFohFRSzNfu5a3Ete9k93dCSbvPbhxJpgqrK",
  "key5": "3n3SLmuin3xaJkC4NRzWLvqR5upo4utmzzFqkMa5SWuQeaHgKRREy9q6JX2xjhegQdtQA9jGbW64EgxnM5Vgx8XV",
  "key6": "tSYdMGX5KDgbdz58kK5eU2ZUrGRaZnpSxBGzwmgDghkV85DYdUrYPDaw7iqC1eYSfXhR6RAAozHp3VaSBWbw5SP",
  "key7": "mDWZid9uC9Rh3SwpPgnVqUJjJGunxbCBMWQNXiiF31LXgWzUJmmVd3iXYP93beJTAsKgiMBmhzq69CVayRbDyj9",
  "key8": "3rFaqbNtDzbkqNJFF7PgdoAaf4jefNRKD4iZKhjDXFopdSJstq7dtaHqWDbCeiqumew2iCG1tpCYcWTsBNkJ8N9W",
  "key9": "4vEnBkFs5cYrNqWQFacnZnV7Xxfe9SwZBjVR153DQ5Ezz65oqf9GwqYeUTUeKK9i9R5gzdjaLhraMKUsFddj5JLy",
  "key10": "29UQXRUeXqNA9Y78sRfnHYg4Y792bGSZTnS7K7H4dtoDxyfDp4fkBwkWtcYWD2forqmLWxsADxeka7mDmBD2SR2C",
  "key11": "2TTXF99LtdRxCb19DrNZRVYj39vzPZsUVqXvBMyRExdjKXqFBTCJS6Zf3eXjLxq74bnwa4hHQsEBDG7WvW33A7Rn",
  "key12": "KJpJmVKGfdnjED6EVzRdF616sfAHGpRkNbYadfs9ibBvasfC6is94ZAcr1qD52EH517jHeYVQ5Rkf2Vu1ejY7Xn",
  "key13": "WuHvskGhhxNopRo4rkVNVCFhUujDZfXGpffQMrL7PjX1RZHNWSpVoU9rK4ePc5NRo1anpsGXih9FgEmYqLiAX6M",
  "key14": "4iwsKCz3Nb4W8WtdbNmnRG3mVsYxpQmM1qEPyKKCEtsuRewzCmCfhyRopS8LyMR8YCw3VqCQEX9mkneP5o2uHV14",
  "key15": "Q7ZhRysYavjmHophXMqtoN9ct3UQdudmkY1h4j7QAyug81L18UJ3Cp133p9fMCNLTHgqWYrdVYi3WEmuPoKEts9",
  "key16": "4dUmQxCRmTxamGKPpAwLZHNpnZLoUkJSQknZVUSPhvCVq3LUkNicYh151CFXv2hAbHuBz5Uc2jfTUThBm8AZCiAm",
  "key17": "2kybRVmZFLZ1bJaHw1W7afRcbyxtZDAEKqFtZW8EFsipzph6RbUwUfoYx7A6SZh1mXGUL28xvs3J3xLaiWGYAHNc",
  "key18": "227Vi5sjst93pLVKSGbzRMExuQXyJ1UG6mtP1MaxfaSecGRAvNfTzm7eLhQvShhBqe6uwEV7LjZCjhn8McSC7HP8",
  "key19": "3LTdS4msnink3SkvDBY5T7oHHy1W79geqdrcJ9vzy45md5PowFBf4h4smdkaF5sfkhhP5QY87NmzzGvQNxX8EyH6",
  "key20": "5jmF7h7KtbXrFH7cv1vsuP2stKw2SyrwRXBTPBz2BD9Et4ThqWYTDLrEZx8Y13PKdKZx2Z3sZUC9kJBSwLLWFZSW",
  "key21": "3URN6r5hAT45z2XUvoXuiT41NtLQPw6nAYhWqYmfhMmEY8UzCJTjzPEtQkeVUL8WHtAPLkbN2VSF6MgjnfYTCGDZ",
  "key22": "2iyWyVTc9VrhMq2azgt6ffAgo96rmniavgthTkKPGDnhNiGpWxyKJpRX8iugsTfeCEqtHZVS2gzSiuqgvP9RS9Xu",
  "key23": "3nCgano9qJgFhC9PZwusNW2pTLVNnQ6WumE4a1VkPTiJQSJ2rz2ExXB8iS8A6e9PKRX1Dd12qPDEYypyEzB4YwtH",
  "key24": "2QNqcWN1Ft9UxBJau3Rb1wYsyxK8cDjxxYjganPojqrgx3jkgRF4mc3H5gdm5AfP4AvKiN4z6VaG6QQXAx4v6JLk"
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
