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
    "5BqzaaXt2YpCG6biZVBTYahCD1sZrU9tZSafaMRV225SFQrB7FDPjaWbhmwSrnKgXbUAuwYYFXXQiqxraT9o9qRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VUzFjgT3r3rAFoEQ2eJvfG6kBJh1s5H9iXEU5Eswx8vcfKmXJtUvGcG1LocHVVVaaWQ5uFaGmjEiWSuokGEX8t",
  "key1": "5rKRne3gtKXvfDWKkLKuXrCqrhGz1cnRwccr57HeMwb5CkRMLpyASFnkcZNG8CNhP5zBijR2RYe9KV9tMZYQsicK",
  "key2": "4fPoQL9ZWdYg414BHiwUYEankxTg5urrKJJ72Nqi6gd9fvUg37YHFuEdYDXCSBYeCfq7J5zdGuH5RAfW6HjtgtSw",
  "key3": "262sQQTLk7WG1W2DHSLzvqStozkpTqhCQDTtg2HQSDU8CHR7xr2Tk3RAGHiJ4HivR29NAyBgxuWk8NzR12Qdw7bH",
  "key4": "2GwSXC2ZL3so5CnTXGbAXkaHZWW7k8A2n1aErB2CHyGGewcGjeX8MXgi5CEiqcWHZC3vkuTauaoosfJg4p4tRUrS",
  "key5": "3mwc1HdM2KcMtbBDD98Sx1Dz4KYyDXFXvAa4sECUbcd27Hg3hX6argATAd8p8MYoaoZJgmYrpe1T51Ab77K7r9bQ",
  "key6": "65wQufzXj3kVaqFzxw77ZK6o6twXU1DAZFFUnHJCP4s9Yi8tA5M6vTxrqmdPPXzYiowyqhiH23Km7oQBbkZJFd4B",
  "key7": "3rb29NyU83JoMg6uMvNto5uyzD35aK5TvQkHnXdLwBrqt7nwwagRBDGa5EZKXGUFvzkhDPeC21x8UbewoA8j4Gv3",
  "key8": "28Q8cPhEUBWDiS7aMNS1tY11GkuiMZeLYziCQk3mAYxu52GC6D9djBMg4oErYChYDq8MwiuWaqxzotfvmyycinrh",
  "key9": "3BA6wCrcL1Yg1UNeDx3DwphF6ioTUUQ6tLd7dXkzxjVkGXQLc3VJn4tuw1mja3JLVnjyYsYyQxwJ9H92AYzaNsjS",
  "key10": "SH92WnwWLRiFHnfK2dxnZqjhmGjUADWWZDjXU9XrC1RnyjJMqhgNW2ziJQEfTeLa3j6vKGLzYwTEuBa9rGFoChr",
  "key11": "3n8egddUJUv4JykphucgToB4Rmb53gMt97Uvqw7MfPn68S31tFFS4ftx7bnwfPumRjz1JByVY5zKTvJ69E9e86GJ",
  "key12": "44J8jAytJKRCBGvWDQwtjZdqACWeZkfwM6tvVj4E9L8vcC4i33pce7kmUYrhSdo9QWfbdCVCnbByCbiZb3mPz546",
  "key13": "4UTgAYYNbvFSaTBsXR8CBk1PX41L85ExymXsAzj7YFUP7yCssWiPd1fPgk5J1cyh5wBpd1ma7AkJEPVWazA26CDA",
  "key14": "3KRrVEbRbCxVJ8KCNVzUnWqK55e2U8F4FEcuYt6JMcc7YHx5sok7zKii9MD2ndxC9fMNuZkvnZKqYK23Uf2KW9oj",
  "key15": "5CSmXHUmVZyueYP1dNHcqsZ2L5dqirQ8hUi9Kz7ic1UvMVWycX4xxrYdarx11oKTrUiMRfvVNuVfMh6EVktHxXn4",
  "key16": "51g4PZZmXMDMGT7iCT9HrPw3PPPGEpnA6zDJBiHDSBSXwLwuwuDYW3S3P8aqLuC2Phrr3WHfPpkDoCmtSSaKK9VY",
  "key17": "3wB9aWxHf1JX1NYcmE1HxwXERxdkfwibFSSKEz64KVmtjJoSeZMpoWCm7AD5jJwq3nJSQGuJBBKsXntCtaEtqEnn",
  "key18": "2Ho7p6T5vA5sKieY4sELPEEBfqAYywy2jr7RbY1dPCZKXvXtZ5GUbqDqadtNbcW5htRcFGJF5YtKz615pFQ32Qtg",
  "key19": "4iWtwecf5vE7cHUFSQWHWURqPZeB2eaRi2d9rURWASXRi6STcNRnxANTinnV73ApfBaHZU6zuYFXLcKygqT4mgnF",
  "key20": "2x6w8jJo1quTBXdE1Qb3jbABtDWNnXDyjWkQFh2XJwb5jb2mNUpxPXMmPU8uaBSbjFR26qduenFF2P81xCDQ4kio",
  "key21": "3u7fXiyphdVDTMP5GBPhsZAhTXYvfcZcTkQ6PrEdEk8doAHTF5jei9nBVkBXW2PLcmdv9ugv4a39QSCqVqpfnbXJ",
  "key22": "3W7tj3ocEoAZ4yiGpbN4QEB3BqjnEKLbpwgaRB23vmxtVbnw5a797jmNCi9bjNiqYxYGnC6n7TjZMMJmuoYNbqmd",
  "key23": "VdcZxgM1wL4bf8KVWwREiGbknL2ugnEn2BK6MANRrWWouJyAuK31QDFRFGTofkqrkSbw8vcumqwbbmHDnqUCtyH",
  "key24": "5amqZCpgkNfJdxoJtDYTCArejnUT2nkdwvm9pJ1kWhNrtz5GiSzeqpkeGW5J9BujJj9kyBSbAyxkznviywBNoQnu",
  "key25": "4i5bWgiB9wbBLQi669uEsgEnGJzWC3EyZv6Qwi7MvjTU3h6B9cwoHEXBxAeZbX3U4tuCUF9o7fEoXxL8SQbW4Zag",
  "key26": "3uakyT4yGrmAK2eLqWKJh9xoV4gLK2a7LinSSTPtVA8EiSweHebWb7Tw8n7crvLsasjm91ft9eEnTs2jDPQSfK7U",
  "key27": "4vzk6bcTUVremKftry3vdry3DZ1PLgvduqfC1Ue2HPCGqPgSsg3ycm77WzFk6ZQHFi3WAMyn58Gh1EruH4h2xxhq",
  "key28": "FGAD3anPGnK7jMZx1x4fyF3ByDF2VJnwirD2DRxvUHtNXwZYa7sgmbtYSM7FcjvCDyizEF8TZSMykDSQzCCN8Hy",
  "key29": "oLVkoxvdyvcYz3wECxvPbS5yMqDizgfzj4yPZ171RGKFVfk2niG7usuP3kZsQhKuMZ1LPZsNMGdEMT4XLB6iEu6",
  "key30": "2GLHrm9RrdpLmvaD6Du6nY169yUX56vKvaNfV5zhUAYdwVP9NmatQxpN9hFyGU12JHNZyX1QvqF5UWdtVPs72Aoi",
  "key31": "3AagGiakmhPmRa2YnjqAG6kkAF3bkf9Y4jayTycdcH4nMXxfxET2wVbF5mFkVAWQVL14vGMUyQaFJJk6x5GWzYtA",
  "key32": "31sjM3nZrwB2erasyoTCkihj99ougWxYBtHoJknPQVUcq5bv6eLpcLmTQw9nEqMM6GRWgdg8LjzUw34jkTxJ5iwC"
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
