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
    "4AshoUhLMZaAizRWJhF82QPHutujxtYCvEJANxcmpBKxzeYKFnbpTcsJ2Ftu6dEnvyGVAPFRnPgyqYbegiU9JsEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JCr9XSpmpYPMSygtT8vjuMvu5cjY6BAJM72G2uinNKNETCfFRPNARdGHKQQKM9wctnHhSBsPodpiXLxf5C8WbZB",
  "key1": "3QguqpMQ5BUqSPShoM7JiDEvtdNorWCJv5pacTX1PccAYRK4wQsiAxyZvQRhznnc63nBS9gcYJMnx6aenu4EgEg",
  "key2": "5ZmixpQvNmJVTARYnFmBaX1PcJLWViR8FsVs5hRuaR93ciMBmYpP5aNps3ZozWZLHYUtYDdcDA5LTgBviD6Q9TqJ",
  "key3": "5QuqNR6xY4uSAAqVSGCm4jm2kcyngNJ7vXCXMBCxAg8vUDKZ8jF8de4VQ5wUF5RtYCqyDz4f9nSLg8cnFo4qUGHH",
  "key4": "44tzRo6skDKuUHj3RvDLvD8iw97ieY38xrTZQ9ctb7hCL2ShiSMtrLBJb3h2uqRQLi1h7YumcBVnHJed4Ze7ZiuK",
  "key5": "7hcyUeBCeSa8jwRL4LwdMShvzz1pMJ6QuoXjohnazGA5ndAEezApfAUHTWSfWSdW9scYCpYUBPxLe7gLynSN8Ht",
  "key6": "3WvKtK53Y7pKTn34trtPhSSpGMpoCH5kvTJK3Y9bFxecZZgZDjgK3htCw1BGXS4pfetybYiA53kX8eaiPEmYdfkr",
  "key7": "5bkj8tre1hdQ2CF7ezzwsx8GcRsTLt8zF8WfRwHXi9nXtWJLJcAL7i7YdPVaiBPx5KCqDaQv9GTSFRw1fAf49aEZ",
  "key8": "3sAvEttQ5tjjUwsezA3kMY3DFfAqf1Y7jicjdALmFEcibXNs5uZ56HN7PFKyvCGsRFjDUHtQspQiey3jK5kfXDG3",
  "key9": "2seo1aeedhLT17MgbAopiTSDWnM8EVrpk3F4JxRM8S1QUTviTmt4nRwz7vXRJQXVN42vYQsr8B1hcgrYS1xVraP8",
  "key10": "3nQh4UbHqmFrgd28Dt1puSi53nuctdhcfJ1VvPpyx6JiHa3mKP4hKN4VPJfFeiwfbUbuhf16FcNeXSebDxNNPaDs",
  "key11": "3KnQHLHBgLvpXFoxzZG3oorH6nsTQcUsZHQRm4pChQPVLx6xHnH3NbShbjZRusrN6UUk5d2YoRmRnN5QSdRuKYri",
  "key12": "5YFAUtQ9wcZWuNXzYKk2YBoN3kj2E13A48jroGW2W8czxATZa4iHbuKg3PcjRH9TbGvvm9qgJ8eqLKyHaNUsxtpg",
  "key13": "5iVCUTP4RKdGNS5tF46qvR5iGjs1Ht47QGdkASVDp9AZXtPoJcsKAiWHTJiZJMNofbzobmasPXRj6BoGh54vGwCY",
  "key14": "524zia2yh94mBu8Xf3VFxMBdyfxqEJtuTRZLoxf5vNnWgCdQkz1fysjAr8FuKCZ7wN51NXr7YWEkxgLHr26bjaQr",
  "key15": "3i6Q9HTjsU5zPuDNE7cEiz7FhHeVJx4afyCo1SUKiRMGpx4FCzvypacpq9uRxft4xQmBcmeifXcqHdYjEeqR6Vok",
  "key16": "vmD2homZWZXJApJzNegi1b2JKGxLEkdgAmdEg1iqBHUkQdbpbQDvgyHgiHHm6FzsQkC6FJpMYQXcEthCE9Esksp",
  "key17": "2SUQutu3ssWxJLxjWh96JLLQYWaXGey3PwhShioByYnAVHwK7PP8TMjbCoC9Sao8jyzR6farU2dive2vDKbiDpyT",
  "key18": "3AUijHGQt6JL5RY3jhCuannjY5CLAUGREM3ihFU29zHn36bJA9Q6K5wiZEsiHFYUQSnQUga6vUASXWTU7MycAY4N",
  "key19": "rP82oaJcnE7qaeqBWEi6RY2V8eXa1jqCVpzatW7woLrmTie2UyJ7tJvaUk8gYzvxfR4x9ZY5uHfGCS6i6g85dpE",
  "key20": "3bMzpDyiLepBTX4Ao62zjxqmkxkL2v4gJZbuuEQtKyfuZgvD2bvtdWggHTSPAxjjbWTwvPLSfNrzPBbqpJfpi29X",
  "key21": "4HsNDzepnpbkwQmJtYXrGH7CUDQfZDd4h51LKAs5J5kbxnMQh5Ef4QmnzJJW6MQWC7rYDL44wcUHRFYL5ZCh7c5b",
  "key22": "56U1v7zXMkM2TA2s5Nf45EK7RmYnb1ESDQ3QC7FyYX3P7dv38tQeDfSheiKSrfid4wwW4y4v2EW5MEBGoxRok51k",
  "key23": "4wWeMadeKDVKZRpJf5cG7MaghWL5HjsFWYtSw3h2nyvHiagE4kbxnipme19vdNCDzc7UAvuM2npb6BwTxAPnWkkr",
  "key24": "3oUYMtWFwFMcHD8NFCuAQj8TAGBGVTU3hyCNonZ3CVCBeUpKihFofTqrjA1jhPmyYYRxWDAr7VV7FKZhH2c9wN6q",
  "key25": "53fEi6a7NhEWcEefvzrrYhcGzKrbsWRXL4JpuNAhE1Q6qrgTaB2Ndb9cxrzk7hGYPNux9Lpj4fG5FJS8aD7jZjqk"
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
