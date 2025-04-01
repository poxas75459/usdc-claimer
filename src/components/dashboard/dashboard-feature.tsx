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
    "2UVU3C9Kjd7J7KZjk1XEzBrB8ZaYsgaBEueGaSqJcuBwXbM24oZjJVSWSdg4ZhAeiGYRqtT9PLi1HWE1zwE8rTeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NJw9QuEcp9RBHfukuSCHvnBsKSeMExsCbFFSnZZ8RxnaytaWZyF9d7iLLw7tgHD4UhscJhg29CjPY4CEP2VPffz",
  "key1": "Md2X3M8GNxw5YcxRSFNT4UG24osE1g9ZCmMDpCpbKNWhehMaP5ZqSWQVfg3HZXKUkgEXwqEvbzZ4ZmpSK7CnEti",
  "key2": "5Jb5tEtYFaBYSvkqZzqS3U8v7DAcSmhR5GDuEKjHHRQyX3jUv7wwyCizB3burUpUGC3Keyq4Yx6NwGGD1XYip7U8",
  "key3": "4C1ccBb6bpb2PBS9XA3WCYhNZSof7qisSWQjYiGAwcfvHNZV661hz5vVLedUMwnRtoebMnFf9dRG9DCrbzoPwfCp",
  "key4": "2qZEUEiqn8W9yZNpT2QhLUmNdHz9GcAPq7rpDL8CXgSBQGWjhMDjhkqii45qMYng3beT7odr8gopLY3JFZ3U84cv",
  "key5": "41BZRcUfsBjyHe167aeU72FG2sVoeBwQpbXSxU62QuPKLau8bb7H9eWCjCEVhiU1fMHYJGgvTEaKFp318cwu2qPL",
  "key6": "4BiRnoeDxQuyKxNTz1MPaRSYnAb6uf7ABBn2U4Bd1imiLmeujmrrysCiRVTK9a6XjeNB4X5pjiMvBDF3BTHNww9r",
  "key7": "661ybP9L4FpdSucVwZruuNQZgyXqk1XZbjuwjUKEGcTY2xkoPBUeyLCoEjdH6wUrnjnsWrkzuQTjzLRpJRGn6c2q",
  "key8": "2bM7q6KPR6EavYZ4Cy4rdexCi9MJoP18ZfRbrxktQXbRVwSUK5AjR6nFWecVefsS3mpT9HuQbdvdmFFJRQEFHAJa",
  "key9": "ZXWbpJQS4Yk1KMo88Xog94pqwtgGrmaXVogi7jc4hoySjKTtUr2BoUFfbUcU7cgSk5T4YaMrgZeVG64SH3h6jNq",
  "key10": "28Hk33iWSqic6JjkS8rf6teBtQGmg3RJ7pB222JZn8rLuCH5v3XL8hSu1F3FNz5cv8So6KxF8QGonXxiT91CQs7J",
  "key11": "3Kmcgh23z6kUTqt7GSbDr3PiC3t7yTzGT1FdTYjjYQPTUNvYJdHDzQu6onRo5S9tcDigbPTrCQxhmNz75jvsDy9H",
  "key12": "5XJsqBsV2HDtgNkwjJABHFfd5hWKFvV9eX4rU8LWxBwVN4TaWXZtMFJnv6mEAX45Ht7n1YMr7jxVBWez99117CdD",
  "key13": "3JpEWA9dTmqTPyfLMNBfHSu7aYbdvx6UEC5qKAAL3hdJG1B2Y1jNHDrnHhEKgUgD5RNUfn78FgyLAhhnFEZAvkZd",
  "key14": "3L7XjehG2EWZyqWkjNTqeuz8x7NVge8zD2edbzE6Ru6GzfGvzhbJtbHombwDefwfCf86geqnDtPzLiUHTr5RPnHj",
  "key15": "3uNirsxrMyJNvApV3QY2CinPoprPuffP9SDqKa3b8NFo8EyxkeaejZ8joAEvqKnnSFBRCvDNJtAmn2fdeFBsNos3",
  "key16": "jdhLVC5V5oV9Xkhov1cttFgg9xCsFyfL39YYZYdFYWBQRUXNs6qCwFVRKDarEMzZ89eWEgL8CtoCS6BP94RtgFS",
  "key17": "2rT3VBSLzW3m6TZncWT2MZLsrCiXnueGdAWcLQN6mHDmF42ZjqSmD3UWp9EzgDVDMupCYGx6K37iLkhLK7T9KrD1",
  "key18": "2Ta7Gq91cQzs9eWwezH19fqYkVCPiig8VqFL91mYEPy5CiJJrbsViXzJZyXgQmDZki62NbN3dugWGrhrbK8nKzdp",
  "key19": "52913wZmDuAGDB2eSGfUWfbRheoA3ZXRWKvZzwmeDsSLh3M2prigXVc8dvwX1xEWaU2Ai4DjqGtcG2MVbDWtax9E",
  "key20": "qKTh7RtNbA7aJsrBPakeZTSmYecN5fLRyjd7ddkmrvFQ5nAxaznPhqZWcmCC51NHEDUEm6rRj3t673QAhdToujD",
  "key21": "54rLR9DbAMWDD4LoEGW2vu5xT74cP5ZfikdhmtLokQaLd1ADgdKkEqJL11iftnWL3zh9uDbwUPWQertYWciUSBsx",
  "key22": "4DQQoQNQLknPXmysCeChWDVxQfkjnE3g167B4J111dnSekhKFjmjUg9PkW41rLNL5FsfDZWfq2vxdWZd6NbJVFA6",
  "key23": "5fduzJsJor75ehCgysV5brFt4Frv5VeV6BNzELakCSKqYZpfRAKGptXazx3kzix5fqh1VnrzTzYd8T3TVqhzG5U",
  "key24": "4CduLVykngwiwhemkP4XZozt2eJ8BSdXQf2efZ9uJhpVgWnAb9UbqYkg3Qyoz6MN9BbfQF1QXVGVLT9vvpgzqmAh",
  "key25": "5bqx3uVPpMsu4oGucPhmeD5bWM7xwVT2X8B8XBnFLGh8ZRNxtgZVQwJWruiYTauRS8nAtmxKLaypuA431ypBzj74",
  "key26": "4rBd8gGCLEuvxaF9PynPUxehMueXScg7pQdze6XUFhvt284MrMKHppSNCgDmGheQeo1V14cE3uyyrxH2JXHaAqPz",
  "key27": "4jwiWzC8cLbo2gho3oTmpEB1Uox993kaByyfbL1y2qdnUW3KpZVdkm6JQB1yqgyvnLz2piaJjpoPEy8CL2CVJnpZ",
  "key28": "46cd3tybme87efKZQDRu5ieajq8TUvRWWNttAdoUd8QZcw91qWomsH282F94tdofSAJ4TvBHF9dR4WHhRjjMnxWZ",
  "key29": "2W688FHb62CPfp9kNvCYEYPCBqnYGFpKENJTDESnygGAB2a98ybJYUxvmc9tc6eiPMYBAtVEMpHu7YMqp7p3TmRT"
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
