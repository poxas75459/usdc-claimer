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
    "3ktyzyeV9ZNAaJk1kGu3qgBpxT9kcAEeYfh32f5TH8H18Au62xGp3a5FN5VVt9zEhRMnAuK8ppB5EXWRvMBEFZj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DvqatLoQy1baqceSHqq2W25g99CCnffvLQoDqtsBr7UbNHUGws86ncRVG76Teojihzv5hRPbNx9r9TSg4QJ6gUU",
  "key1": "LiXixMZm1svmShsGP8AbTMKx6ynoYKM8QhuX7iPgf7CqD4SXNzxMZhAMnizV9iSNenR4f4F75iZcB3CWtoFqmme",
  "key2": "5t5bS5399gBBxv3F5xeUjh7v4zXUAu59E9t5sL11UZT4JkwKSuZM2MQEGbEKnbNw5aEork9p2tGtSvqydKDwHMsR",
  "key3": "3G4CXLutCRvotiQgQDz7SaN6Vf7PAC5Pnw8BmGXxTHkSjP9rP8FycAzHoxjB5JN8oiLoQCPNv1CSYjjZUcKRu53n",
  "key4": "2vQyrmyvkEy98Gkm6tRZjZorycJPL4TLUQCWQrwW67E2TXeiwR57X1pgvRWrZYnY15YNCSf5VjpDXH453NWuYopr",
  "key5": "4b9vrCaQbaawoFzBwHqkSbvGLG3qgTK7mYkEPpKJesH8XGaZDn5TVKpnVTK6cE2QniUcx8bZTQxT5PPf46r6Vs3L",
  "key6": "4uU749mXyd8TK6DCNSNZVAUCDrrVgKbnh9fWrMP1CKECaRBrwShpJRqNXiWnh5geSyYp6BRwGViYx1L9Snk1XGgS",
  "key7": "3Lyzmig2kzk87FhSE5A9z2Jw9pBdphT5y6HoVj9MqYi3vzP8B8J1pAT74QdxWaug7W5ovHWRNMLb9fs3JEznxReh",
  "key8": "5RCHtcAX5U6ZQo5o1PJXmLAjWqYx8dcue3vbzmc1S93uPM1qqKDEL55Ww43xjxYnhwJFzbipQgL1Ba8ruBDu2cjE",
  "key9": "2yEggZBNjJyNUqfPBXtSqMhwPx5vw31kJp2XeN7AEkqZP5fmEf49hL396zYD1QrnL5f5eJg6u5AzanZN8kybYabr",
  "key10": "4ZuAZ6QQRWn3as7StSqv7DLhpq3WbpSbX5c4nCboz5jNAy7mb1eXvkkgN7KzaidSkuCEx7Ve8ZniCXycdMVcAv9V",
  "key11": "5DJGcqpBXtYP6RXtGgTPgpnjJQjmyBFbq99CV2P48EjVPrRYeeAHyR1f2sxJTVUbHhYnwQqJ5BY65wQJMvGvG1gg",
  "key12": "2pejtEhmXR3BiiSWQgSZPARhPTNq1y6bFaVgaGREN4ukvBMqpDWTACYYH7yhdd7pNqdbhrLMNHKAr8u4i7JbHeea",
  "key13": "ZVMtjx3fs3NZEsXisTvdVMBnR41zNUQSUsBMVj4M8yG7Y8NARJSSVEYXpdWKBjcBitMB8B7rKk4X4v28s9DfnFv",
  "key14": "5st9MqrV9ywESmprdT1cm76Lx6LUBR9z2vVLQ3DPHpxYfubKozfgWEFnLpcMjkVz8c86TcFTxGUKGuZEPTmA2ZXa",
  "key15": "5ykqQuARqyFfhWRNknmkQJpAjopD8pVX6WBUR7QSb66PuvugFSksAmn4t2QRH3Qj6v1ayu1zsYjUcRmaJ7yLU12z",
  "key16": "4BfqYkE8HGXm4sWD4L72ThF16j27qo7s9Y8BuKJhR7e7qD3scf3NZvU57aMj2yKdtoSRCLPdmVdHj3D8CWddqR9B",
  "key17": "5dfHyzyspxWU6eqrpenfbzuV4xMFDxvGHxBSbhwFt184goEBVDkt2EhTvJ3FYW94SEZwXvFgN7FXL2bbe5WMzBMx",
  "key18": "5xZKQMLTF9maz236G5nHbxeW4xhjGp1wu271hdkSX5RbUtXH6XaCBdKj96RYsrAwfpw6BWm7BLMt8tFxredfYhDQ",
  "key19": "2SJaseX4oyyVBLFntiyh6GbMy9hVDTcGiPeFXEyNFgB2QCmyt1sK8QzGbYsLng9JGPbaTZgASx5X7ibmVjMtJpoj",
  "key20": "MeycFi2AR7psEargvQ6CpKSKs6x9jkcy8tTnyMt3jYRTpeZp267xZDHU4coyCRHXdsqwme41gokS3j9hysfEiLU",
  "key21": "4y79PtpVdLj6UnpSNMbPuYYM9NYK2GXGu1rLYSvKNDQTngkSvUrKtUhFKP6oAo988wqAFaok1gBWDMQTihWWu7mT",
  "key22": "31w1dwRdX4bF6V7Ek9x4E1xkzgcTeJAqdvQPpUkyj6MTLiyvNQX7xBbQtVhjmRdBCBRCyM54RmGKcxtWbXDrbLwd",
  "key23": "2JfDsWVT5HL2PjrzQ8qAphGrWzvfavhkr7hCcXdx7dMpxrfDV9mQ3zVDSF87VePVxfCsZHK65Em6TsmNmiHBoJAp",
  "key24": "4h4mJ8vp94SQWbc9VHdAxhjjAFYun7J2WVxSNvgQvSF9DVDoGLKLRMNH6mGw9co73LnjBdzwXNR9kt92TjrJgKXW",
  "key25": "2xFdLdApWKeo2nnDoEJtdC2AttxuDd2zQThgAnxzsHzfPrNu869wxiZ6rwJjaYxqHSdrhuLETDzE52QiNCLuYZAQ",
  "key26": "2AsdGVJjJ9es6Cr8x61QQuUfVnQhd5y56GEyprdUamtL11nAuuqt5tMHjbnrx2M2KkPwdLnxSYvfBbJpbo627JRj",
  "key27": "5egkXEQqfKm6cvGx5kZqB6jvUR2BzqRTaonEkhafKPbzrtE1gvfoPANvJFncW1DywHk4meNz3ap7CNi16CsSkMqG",
  "key28": "3V9sShvMFCwEurCFBWBihENuJGaRTbkPyA25y5jruE1Z7gCQ9yBcXbD7H4XWTqAiMUiwsn31MhVczqaCK5mjKqaD",
  "key29": "ZQNUhXqqJPV3h9h1HXgE7pR64egJwww5cXSEQg3ZRUoJw9H1MevW6ghgqKwmUaQHbkZM1JC5rxJ1Ha5UUK1eRtk",
  "key30": "229xsH6Mv6sFsut9Y4aoW93MwS25gNPCDw7RwYSizwu7eXiPidJdpRK5z6oYDKH4KQVRo7LhnBjRvmUXdwRzbSwA",
  "key31": "5yQScZddURdyCfXiE9ZXuRwpAiWsJ8ujcXBZQR4V7NopGAdFnkm3g6ttbGfjcMjAN5KLSMcBAJ3poEKKmFYLN9Qz"
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
