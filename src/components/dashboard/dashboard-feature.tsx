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
    "3zMpF26kH8Dqqa8ijJSH1PDZawortwW6zQL9ugucdcfGkWyvTenYiTx5WDydZvzZAMhxNgdCGo5KFKjd7zYyov5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVo3XKf2GB2A2UULpLoKqZ1DLABcj7FJVLxKUwv84FS9qe5X4SeTq936dwX8aUZJixySQ7xQCU2ntFB4W18arXy",
  "key1": "XAcrDGSd9AChSsnhJrtBdHdTkX415WfuSHtPRCpnorpqbwXqLnv3vf32dDiaaCFnDhhHExAnLKg7eXC5LYqZPdN",
  "key2": "4PiPQYsRVMokMYRZLXMkgMJB3Jv9zn5cdadNdLhfH3WzMyKZSUy8rNq4Nb6uRtkUXkyBzqowPjfP4EuMvsQFEST4",
  "key3": "bVJ4uULVMUqcpcGoJYP4thvD6B7v1MdEVr8bNzj1TAKVzexjPKLAUNpWG6hyFiyMJN2pgygeiYs7KyhG6dAExhN",
  "key4": "1vUpfacMrPLUSjKLupcQTXAomRDgCMpP9LtwZbqAjZD3hUM2TtQuVBd9fWdQEQbvVPGYFSeFxBsqk8dBXBWUcrA",
  "key5": "5ahLPYjfA9e34dJBhcgPE2gvgk6RhAXoTopnJUjQpiyQ2RGiizKc3eVjoEsdeypxHqgLEMNtUmRLRfP3V6xZ4Cpj",
  "key6": "23KZAj7c34dcN5CBzkbGYiudnPGJ9eRq1otfMtrQ2pXC4NXnfJQ9tWWJR788JHr7AsXihsENefuY6WVPFGPb321y",
  "key7": "K3aqmqkzizhxzykAg8qGbP867rTKYzUZt86qo97knfTCqM19TCmLr3dhm1UhLFbhAgFwGLjuwXywAxYycKdtzf7",
  "key8": "2zUbCyxcdyf3FnYcKPdGkiT5WbCzszy9m5W1GJEfHVd3VinUZn6BJzahck1eYydw3iaVnVFf294pPNbieGgoDCyR",
  "key9": "2kDZ8FRvnMXGScvTiywgkfXAq4pRYCwE7qjghho4nQgVS4MxWW8R1KRZwqAqLwn4bhbRebqV9ocKR8xScuqz75to",
  "key10": "3mMPfaNkStoomrWAuUy1dxKNBaYSHAVaSUptavQ8DXGMZe84Xiu2auedPxvatpjaq7GYrMWKu4q1KKH5gRThhDtM",
  "key11": "5r9mC1ZVfgBEJMj21xj6S1MKvR6VYBGx3jwNsCfn8TDnkJdCBfLqz2WG8AGXmYdyiaDU9XJQHAiuyinjAWi7LcaD",
  "key12": "332JRvNyM9ZFAbiNvZ7wfH3mkCTUKAcF7Q2fHjVrooohrEyHzdDrZwSWcAzdHThckJyVcf4yMs6VzLNttWCTwmPP",
  "key13": "5T2pX5ERyKSS3MDo9pqhAtdmNyAsnM1vU8VSQXoj54887Y5e8YJKuF4E3YGrxDwmdHdWcJoxXL4WaUp4yxFp7P1v",
  "key14": "32AKXmDdPQ6vP29Z78tdk1GCmMZgBZskVwZ9UR2gvcbjPkNKyCStv7fzWovdHgad3ky139dxByRPJABYcdnN43Df",
  "key15": "64fp1avBP2qXeegUZ6haM8amC5Gs3a5CaWjCVGNMuDLRp5ANyQwa8cRRLgSGy8EeCsE4EagxNQKX8VXnkqJFChCa",
  "key16": "5jtNNjEmUzRLZwChsbx8Ejd9Aq42irKVGDa3RYKZaRvcJDnmpB4QAPjoaVVgdhA4c8T8A2oEQLrx5qn99v4Ahz2w",
  "key17": "3r48UphRhBa4LKKj4TktNS7eMFGGU7eKQHjRqFhdjZ3FgjyTkwPLnhdnKQ3z4aLksynZ959t6yF69Q7utXdLuB41",
  "key18": "4kGvFnEfodmjhPoX4YhavMbz9tVNozUAbHz8Xa33c5DQSyKLJ4zqwqvqri2wxMVUKtsw59EviZZc7BrmoS1jd58q",
  "key19": "8SKtorEPFuwZwHpAfyjnmBPYrF3MHhYykp26GwgsQd1gNoHLNtcgDvMYLEpzjivNmpWwwruhTCxmtgAhzy32JWM",
  "key20": "5AhEq2xjgXFtft5fxU4Kdc6a4ioD9SCsxhNEQCoHsoVHoXdMeYnBBzX88MNDrbFxEBNjUPBDwBfjc4KvhEK6JutL",
  "key21": "5yfVGkhT71W8K4rejmgMFUbehif7FH9ep9oY3vD2XJ87msdTVXRSs9SU7xyNE74Y6UqQv5HowyfM7gHfjNcH8y2B",
  "key22": "37jmWmXwRcsAqFmKVDQPAMF1mpvZPaharJBnfNLZFYdSst61qDic1JoXvjZMdzT1ddButDKstWveaLpQGXTuH5tD",
  "key23": "mDi18sMdfm9bMTceRAJD795LYDHDjtrWzrLVsYbQpx1mFjdX67X6m9ZfR1xGwZCtBGmdFFzAPHY1vezaqhgV5YW",
  "key24": "3fkhs6Vocmi4rodTBksJ4LxQvAsvr8go1LTVzAnUyLW5bKrj2scZ1Cg1TC19X373QUNXW8T9HFJKjui6qV5n8Wqx",
  "key25": "4BC8hhA9qsF2MPCyuXRwRszX1wSQHaG1RQhoxnJBb9r3x7neDiEx8FrLtjDAd7MvGqMqTWDjB2RndRo4f4m4ff9N",
  "key26": "dX8TTQrz6coftbwpLjBwuzeAy5tiuByoacbKKLYd6kWEwKWtaUSBvzc3PG8MbSxqVLCcWjWdsgDn5xU2KJxAWrA"
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
