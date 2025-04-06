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
    "4i8mLbhTBKgf2yGijDfcxYrDajhcpSKLishM2Qkufkhaa8M4DvL7FV6T847SD5TS5vqSsvwTAy7B1we5859unErb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35pbBRnpvtLs9yWNrnm5wV11bstXXdjCYQkMWUHUVw3hUwivkQiyqRqdik7KALSdyL5BSfbakww8LfJJVxnodiee",
  "key1": "5TMW4D2i3Q6pAjoi7dg7Dekk1dSZjb36WQcQV1qbpLY1PZ2xcKEAad4NftNaCWj1TXFZYok6GxkXDQqaGpTfwS3a",
  "key2": "4E6AcYQ4B6e1fcqt9iiXVTUjcARWKLrxRbAsPuCCYqkxYk8CmAYjztVEXyBxANKftnhjUnqfbcCorSRLWjCHQT9t",
  "key3": "35JeppELTZdasmt8mW9Yrco8xocu2DskiqdKbXjnNkvPdHsayE92WXX2c6SzaChSbZ2caw3eM3ECyuNaDGvToDRq",
  "key4": "4F9fX8dApzY2rYxjreBndMtzmjddkxzHn1tktkveFAg6RbYqkDoVh3FTUk98Hv8MTW66zTycKrdbcxNHn8vWDyWQ",
  "key5": "4CwhyBmczqRsMkzY1YV4GGJ5WB6buHZhZxHzv7LVVvPHYmhpHn6Th93ztRN69vBioznrUoc4qzZDg3eWhE31d8Yu",
  "key6": "5rtiHHoyUQ4YJS1VE8z7jPBkSd9KRsUWwGfLYjb2hMEyoj2ozohnNbCi5vPdLwbW9Ld6haSNJAvXuXpjZoQcMpTT",
  "key7": "2F77fKMwbPUic6qi7uP58SqWVQoP5SyBDKtijPXdoWt6a9nFSsuNX9cftN6fGZfAdgDcHrtBUXX8R9fzaSX3nPZP",
  "key8": "4ZvdNDyC9rCriCcuWAUQueJdd8Zi8ktkVoTEqdT2dy9GwAvmGni1fmtVgKLZxjMvgw4PSRvyQBZoeWqKpZt9GB3t",
  "key9": "2KKFqhZUTLzh4anEbGS1qFuBSgWSQ8wxxwNgDyYk3EFUcBiQ7B9bmaLwadNN1u45L5EewrxHfnNPHAupkaQsmbLo",
  "key10": "5s5pihiqBUorb1jW2sp9W7i9aCoN2jA23JGeBGH7SL2qKZZdVYUpccmEMSxXEg3c99y8SJKcv264H19LCx87S4WT",
  "key11": "2i5nPzYyEaXKUU3MfNx8a13CwLAYL2K6keUuhZoLfM64thoGZ6SBnu6LANzC9b8fTm3pfxPbtBCzL8NXAPmJZKf",
  "key12": "2w7Xzg2hWfjaEoeVv9qSrK7ugQr92B9xiVZBE7zkZtANKdL1C1y3oLN9NxviBkHdgxgd3j2vxDEr17Nqc3EqmY93",
  "key13": "64g9VvSyjxqYJGwHM9Dd1NNUFQSL1uAr6MQqq7QBdcF8JHCbBYKZofHzd4kizRyjP3E6eu7Z52JpPQceYTEaoz8Z",
  "key14": "2HFrCf89WWHb2yKUqk2W8bMzT9hjkP84LfHdTut94cmgaWVViZS15jXtFkEmALqgM5QFwCQYJooBzQPoHSPErbDr",
  "key15": "BmTK7CkTBgpJdoQWSS6Jg4rAbpcex2nVrxFScNDbdSajMrGQtzpzKmELrWrw7LGBmmEjLzwkvFgeDi2hzmpVSPT",
  "key16": "3DWWRYKzjLGp5SrA9LmqMUp3PUADsPvE7u8BvVc7ht6buWctQX1Ci9cSHqAtu3T1CnwCkFUQftiLMvdNCuLU5pMM",
  "key17": "4BE47ypJoPFbRqnkj81SFR7h1BWoPeKFh34txVTU2Z7MovZXQsnxQxkDCSZPZqFtApmakvpeNwdhW7o1eCy91h73",
  "key18": "53sxWoyCfrWUmkkYporefgjrCn1wgB4xqV6C4wRouFLYEAFH1BY466Xa27RP3xiRP5RZEMdrvek5KTDFoo8ofeYA",
  "key19": "2AXhwT5qdnY2T7FCRCnF3jQtZ9XBTvyWx6q6d3XmK7jK9DEbUVYmUpL2UFsw7ErPHNx8tKSozv24Xs3ypLSioVqk",
  "key20": "2QHPQqBdBpGbtzB34bKp16JtLCmB43DaQDpymB63FXtiFjYBGR5ioHxsm9f84f92Cjuc6Njx3337GKdFkMKXUJfQ",
  "key21": "3oxpYZrUREyPrsJExEwXoZQGJyqfnm1fo6U3gn8orFBvntP1QqGLa5Mujp8BtxMHZdbKMSTDH6N62D7xMrC8BgYF",
  "key22": "5h1JJKj1gS7Cb6szFSvwRJYQggX9oEceKBiG8BqiHZKafJKxfLoBte5AmNXhRnjPE8SzZxxyQS3CbkE6kyMATHUS",
  "key23": "63rNmedLapsFh9gUfdd4kxLXJ2FEr8xpWSnBEHTnsRULC1Vem41f8R2fHBfCfdx1qULVHfQk2iPkh4FJNWRY2E5S",
  "key24": "2RgjwRSALHaitbwNb9HsDtTu1GNtUVxrK8b4iqkPnusuMQSe4onzxtDxjjUGM5a9UTQaGzCfuU9S6MQ1PYVocZP9",
  "key25": "5gTER6y55ouPZkRMoZvpHV7rfDL1ZSsbkQGUBBYoBBJ6xV6GsKFgR2iLggDx6kXhoSo3WhX49Y7YYaikvfqr4smC",
  "key26": "4yaw2dG4GZMPXu97EuRiXcDgbqFJVUnPQqB72URvUgvnxttXeu3ayEF6jpTuHHhFWGEmB9eGkMcNQT6ik7dh4JFu",
  "key27": "4CycZC3TsKTCJiEd81EJDzQXYLirmWpjs77bE7MvhyWmn7DPHpLeg2Z1kLkx48qg5Cz7h9uut9Ua7TUG22w9jHbp",
  "key28": "4JNv4vDDMJW4aRaUPK4kk4Hbsjz9UYec9Ad9w63KFaZpvQ33bMrjGpPkwmh7aS82jivgrcrnvKdwEnRVMmttjD9s",
  "key29": "oEC9ZtJcfe4Wzgkri58LTh3xvsBh26dxmjFzobgzb7dqMRmn7Vy7YKmR4kFhkUY8Gof4TgP4UjMBHxopyUJQKsg",
  "key30": "2JsA6nC3DMwZ4RfqpSRixayst6FyPyGaeCkfUEtUmGpbaDtVz13jEB5cRnkdjqHZP4hT4U6Dd6F8V3sosr9peYDf",
  "key31": "4qYZkdBEzZN3vosAxG5ZWSPe2QUe8ZwVj9zsPckwCjeG34Le85EwMLXzu9ndDYX1EEsXcdZ8nApeLJ2tYZwA7Xg4"
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
