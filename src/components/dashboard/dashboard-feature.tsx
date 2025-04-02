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
    "YWXZWXufHYvMGDbMGxRmjHGqXRu7UVFnFEEafDhcTqjXKAivPPjRxZqgHesBkM6og6B4cuHMhMANAGQi84wTYiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XLwXMwXB67Dw5qLGzdUfp49kiWpWTopWyXJtGa6GkgHDBmitd7E9kYxh5pb73dWp9YSbTPKZH3k1WNzqpZGMXpV",
  "key1": "4s4kKpRPUktSXzQsm3LxnQNQaQQdBX7LMHiy16dXDUERvvH3TvU7RTPAYYc87Z4Fmu2Ha4DyPCrpvxGbP1giYyi8",
  "key2": "3uLLyzDUab1w7MCyf12VkFseg9RMSyzZenUzKbR98FCMRXa7QYjBB4fHW3qsKhohdGvZEr2eLA2HHPxKFcwoS5rE",
  "key3": "5qTySaKdawDXdzW3YjrayJeJHKNUcYSeru8bK7auRUUAYFTtLkT2nf3z5KvXJWnVaTqMt9fmX1ZJq6sVUr5U855f",
  "key4": "xG4SfASUc1vo1dtPcwPSJVZKUGZudxRyb54cPat9v37q9WFkASip8tuhb59bxfjbb9dPR9P8ScKE8QdMnsfYkRk",
  "key5": "5FRJmxvBGnuer6gWY59cRkhoNxHzbxZKtFgP2aBnuAzGYnsPTMyMSdatGYrQohRxC1mY6VnR2HucE34dg7j5PYPK",
  "key6": "41T4czgyMuiesQUjQqXz5FzNzAvQYubGTaeHpwbQowdPQnyQKdSQRbE76hArJgYB4oqMKfqBYyNft9HAfP51q6WB",
  "key7": "VLUnxvVG7o5A6JHjXGzJxUDe55shq5UJgVdwFfPa2dE5q7EoiZdjbKdRKTwgX9GVwauPMMx7ALRAqUFRzKntJsw",
  "key8": "3saL6SpiDYajUk5BdB6mkJ5jot4LTYpkjdF6MvTbBB5AcgpbH5uzAMTEgaoGrUhBwuo5DEq3D9BLwab5zhYc7dFT",
  "key9": "3AsLJgV6n9xyqj8UMqEuupzWdTGpfi85Gg5kgvnS5b6Wp4hoJwWtPPLz5BMAjzMu7u9V9oruzpuKgarrFwxxTQzA",
  "key10": "4MQBPZzKCUmoXYWWigEDUUc2TftmUZrM4XAshfuPSwHjLwE3KmJhiCufeKQT9Fzg4BNxiDLT8sPbVSKQ8EcRGe53",
  "key11": "4WzsrtryBdCNUbd3zp5WNy8dnC7w7uznfWu4ZHwqEJqHA4oKnp3xGz6V4FH248S1QhnfhUs5Rgw9eMtpJz4zTPVb",
  "key12": "3s4i3xBohgeeqADPHiWxcoGyMxfoGPyKyTM48Yz2fEu9pdZHzWm99usgUPJweZVvZWTiK5pBsi1h7dkgvmKw7Cxk",
  "key13": "3EFMqVgZP4qqhpoW8hW95bZs6v9R4ycJVrzXbZdcGMSdJFegWTTifVs6NcsYYrmYUJARcA7TUM8wgi7x4wSAkWDy",
  "key14": "42Jrtt2vVj21SsGzxXo6SWD8ZgsBuJAyY5C2ChqWdRxpBzefL3QjywonFLXWah1t78b9ajGdUfSNComiJ3cXtKQo",
  "key15": "1mfe7LHARArwk91gECapaarpC6GUrXR3b2sj9PciX4WHuV89eAguKvE9nHVojpN3WXUv59Cta4Jo5w89UHYsfPo",
  "key16": "5GnMFjh9LPHK77t5Q4gKrcKxk26xvRmdbGsPruAhEVSAPF6naSMFUufot7o2QcBgQzXwqRgn9G1GHDDJ8nVBTJEx",
  "key17": "3Hrji64nF9Cmyaz1pKfVJvvRteztGkaHBLAsj1zjiVzubCqbykeV4nGxsxLhjwvNf2zqSTjKtuxgfeUEXNK9SyFq",
  "key18": "5f2d2jS7YwuGPZ7qnMc99mF133n94BN9c2CvU5GfCehFjrkDhPoNzjSp9YdBpJDiCmwnj7xNEpNfTyzCMc8E8k4G",
  "key19": "4sPynVkSUc3G1ZsgqWcV8W7NgDLmnFd84eBicDuJZymEU3hYdxQNrMRVgYuVwyU8WNXtJ18dopzqq8idiJnRdDkL",
  "key20": "3xkRJhzf7pxPndDkoVe7ygqqe1Tm8SGfdxpJk3PpLM6heNgRJkt2awuRZb56LjY4M5t4hBswvLNjxSC8dZpVhgza",
  "key21": "312z9wVCvVQCp7YAhTWagpahVmEmje2Mur8r9pQ7JSmfPLcZnG8Tukr9ECNDhUvAGZrGXMwWxVL71QiE8oE2jDog",
  "key22": "2s71rTY1RpNdVY7GSgoEiU1ux7UMxxvrYBkCJE8KoxZ8CdHxNkWQoNtTbFaqVPhZvCJTzzFEzggvkDJqY8ZNqWig",
  "key23": "2se51Xh6dkomr63K2ajMo3Tj1Q9AksE92tMsLcLi2V9u9JLuvbmFA6ydnGF1Fd294kXQYbAHaBKHWEzbKeEjYkHb",
  "key24": "47oRnse3tvD97m6HaDovW3xwdiMEKqTrxy5d43ScVURdxuX3VXGnnAgAMSMnQiezCa1UWkVgjDbmmYV8Lk7WiNdX",
  "key25": "3pJgSuFyu4BLnjsUzwopXny579nf3yifurH1RwwVymFnrmE7NjFKtCtMUhyCnYUx3vgjAsg14cJP8oXGYd1nB9ki",
  "key26": "2wbHoSQ7BsRy6ayY3rLG2AXyMg2k6eXAKvU5QbX48b4YTyapxhbBMCV4am7YFxpe2vp4ib7DVnsP2KAhd8YX44K8",
  "key27": "4xS7NwJTehZt1RHPvUgGmasui1Kb2JbKjjrGEZqdBRAkp9Pibn5Wi6JH2W2Z9rmh9uQeeXxX5tDFQjigPKjKh9Sd",
  "key28": "4WREGV8AJ6XqLPJFjokt6RH1zBjNDnjvNNzzzYcxZK5aKjBByUJsxduXSCq8uWCwo37wsyDFbhDUBxfHrio6MMp7",
  "key29": "3NrmErvt6bEyXMRF57dsCtyiYTfp8RpybbpAjv3qnGZf1bPKVb2ZBbXQmMj7EWK8J7iHjXP8cNnufUTA1fLFMvhP"
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
