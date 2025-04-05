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
    "5kkdZEFmkHPDauvog1wQ3Kw3fPQbgq1oEggof6TbdCLBT3YT9KyxxWfE5ZTAmyDorjQZQZfA8bM4yGSPTphWNTEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Se4raK2SAUdoTh5Ejx2kXv3YiTjC51GHWnkRMRBaRrmbXWKkxFHanT4jTwWBDr3nGwqmeB63duZ9gLbPfVUvB1d",
  "key1": "4s9A99sKsVjUFhgnroVn5WxxRKU2jTpUYWQ26kh42ezfeaQU581pm9bkRuxGwNe4ddkZvJdLPnqUkN6LRzsXXLRZ",
  "key2": "4ZavBzYtHTPqJWAYsQpFPBoX16U8FXZn7EChGTZjuLPCvd3PngAHWXtQrHVN6TtiwnetaL6m9gfk3qRi4iHDxuuM",
  "key3": "5E9GKa4Ls89YU2EgywoAeJ4D2pKjaqWVLxcnqN956heVrritTa8Xg116SzUfdUWkazean5QjGb3khRNtaED7Twzg",
  "key4": "5jGZ3ffwWGHKP57pJRoh83q83g5cSxoaRWJ8JTJKfWjGFhRPoXzez3VxUTkzwbFakMwpRsAjTCceprxuwPqnqDNk",
  "key5": "5o6QSc333rDWrrGXrvPGoR2fYxke21uqyQg5wuk4wmXTn7YPHyRWGvEEFhSRxyE9wA6A4aSZyRU65jdxRifz6LrX",
  "key6": "22vMCQvSCu5uEvtZtPVKK7bs6dLgQUcdrykjwEfLC3yfP2kKCy6XJMznM9mXKQ1a9tWcS8GGKN8fesywirU4YQ74",
  "key7": "5PdZzrxfgFD8Dv4vAhaxucKiR4HzW8aJg8WxsVACT9Dfw2YhiTQitXBvQhrKhHVMy3LC9wbzxuqdDx1NyX7LF2Zn",
  "key8": "rLawj7SH8rLQbHUVaNAmnu76FvU5bWdy5em3ZEuAzaqJMwvfFr8N7ZiARcaGMyyecx8vvGsVt5WYWdY8agc1eVB",
  "key9": "3LJRSCzLq25sizBh5muQFC8EHKVuzJn5AzKhijgTzC9NYuQXWHxTu4jUG9RuA9Y75yehU26sgaS6QWT53cdiGF1T",
  "key10": "637PZn9J2rKPT5q555NECbgCtQWkduvVsTeL5ibHFqReUAR43czYjRjCkAp3FHC1qCNLpo3DKzrjYfhgHL3otwwU",
  "key11": "2x6Pdp2E7zMHGLi44sSw2TQoRsbo5RpsC7pJFYjDhZ1Ujz5aya1o9ZBKAnHvHgdcw691j8xYxBSq44yxASnQkFyd",
  "key12": "2VgNJpr2FPb8kUfhsoM76BXbZ7Pw4EExyRpBh6YJyRi9yDggiVSUeBx44uxGNY9bGKdSfrBs8co4jogECoBx8SiS",
  "key13": "5S2iVTSHkJLvo9xwLA4HzV3PwCADTc7Jm18xn1ktTk4bY8xcWWKS4P5eAQKSpWvJdDWtcUfcp7AwhWNA3CB41Q17",
  "key14": "cJvHxFcVGsCtsEumwWAH115D7AJJLdWSPbsNzoJ5nntfcHJhzrNziKvVap6Phmrtrxp4AdHYGqPimNpvV5hYQe5",
  "key15": "5hbdHP6uZvdGcutqTULMd3kYwmYty7F6TDR6SUejp2oXHfznife5JHtodLE3BvZhzwN6QJapXXvHxqrtcTP3qjpM",
  "key16": "2GugkKgsMWNLRfVfPd6KCnVX3UCvLFqnFPRkg7i8W838BXR7GFidpfRSJfh3Vfhj8GVjgcWNbHJs8dxMJVWncMkf",
  "key17": "3PoMQSrS6f69bqJSFYaGvRZxW1FrJKD8iv5cnbtKVYbXRakfwpm3FqdqSqCXPQ1CTUyXtyTSSsRABrZwpDfSMaoj",
  "key18": "2HESHofZ7JYMWoEvtMeuvcjZaoFmTJbNUdL3UVKx6pJwkQtXpHTf3Whz7DV8AnFQZX2Bg9tsJv9a64rEv2qtAnSy",
  "key19": "61oMuNtnurxGozY16YzV5R2UjWEjtjP9Spx5aepDaSuruBELfc6ov8Mp8zbDXWcbpFHSFtAbxaXz5yJHTi6TxVz8",
  "key20": "vxNXJfMMhsVh8DH1wDnThqSfzpNd7mUyxjQuuZrb78qiThTV7CGkGeEvURC3s3HmjRDUbdj9Eu9oU4HCrER4tN4",
  "key21": "4DF2fP1244GYutuFXn8kwXu8YbxpWqQw5p9ekVzq6KmeA3JNBXDZsMyZTrj5rJcJGvasGKAjpbgZTHoMiFVZtcHb",
  "key22": "2VaBHC5AwzJVAYPcdqg3dvKVRBnbAskm6XAQ2qHTTX65fFmpXyk5j9QoBJnbs7avN5ZQ3D7Ewvx98hcPAAeVy5mC",
  "key23": "JEuepWqVY1huoHZgGXaXvJtU6G9Z7oTQUmqBkqEMCnKUoyK9M126hAufKQsjgK4kFmTYDoHWbRpkptBfjB6d3uU",
  "key24": "5ZUSbTAu4pB5PR2oDYauhkbtdojeYE6pM1QyxafDLZrVL8mSYdiX5ZjvCetStVe522jQ62Crsa7yHLfeKMfGUZr7"
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
