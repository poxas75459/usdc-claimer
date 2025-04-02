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
    "3AF6yo99EhvvpkH7CdUe6JDi8kzgjzj99mNsniVScRq4kUodHptZ4uVG6r72BzJnTHbpfo7prwRCAwZ2hMht12xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GhMvmKjNzXCPzMaEq4x2i9LYmVfNTPKLJD9xwk623NZh8VRjB5iBj8byqdhXXZXroQTaqVAow73WTD2vgLesjug",
  "key1": "4EZX3qkoj9s6jH4yp3ZRA7mRLQyeeL7gGvgL8JYZNXbDnW42DiGbm5zBo25ev84jVxQAKk9wHhk7R7uRmaVHhgAA",
  "key2": "2VvctUQ4DjYm6gs35PqDjmfiym5Dhx2zTYbciG9dM1GufX2z9E2uXFG8Q7qJb7TNk375ssk6TAidGpeJp8QtzJ9q",
  "key3": "4vKRfJVY4rUMQho1GNyALzk526SEpYkn8P8q8o8YFLjMfh3yhdbq6iZbFVbmjJFWVhsxeVtym3Jrpa1GRUeLr2om",
  "key4": "3Zb7vyiDNDvbUHBZKqTf5fUgFc9KLAjucAwW6yL1Tu3dW5FFVLSLfHwr5U37A9Fo69bnF9hWvtjF7Cbv1xfCjM78",
  "key5": "5rYT1g6aPmrAWmhkUGzfRyc1vFZF3oLfHhA9ruZFU98HdvddEoZ78NgJjDFiQ7SenHxqgEVa2avS98P71FUCFTM5",
  "key6": "2feuMV3NymukfzQ2QGgnvSAkmha32UxyQXifjHxEB2NvLWXfBU323XtdfzVX5rkEBw9MsUPasRLHiwucnS3fH2WR",
  "key7": "qoucSKreAwRjTFm2FWBJDSPyK3wi2w7G1R4TNDqxuai9yy9K2YxQZoYCXtHHeqSWt3jyoejD6i3qrdD6SHmqeYp",
  "key8": "4WtS2FwbSSRsZe4rDQzw8ABjxND8DdfLdfmwhcaRqeVBJXfrpQhLwwmxqwA7efNaUDFBU17qb8hLWcsriEnttLLz",
  "key9": "pQuMWBU9tjjtVPtmt2mfnnsn4QnSoD6AtSFcqVGgD5wsUhUXrJPNEt6ZK7APoPbxahxnTGSQK9BCdjrqHP8DTDr",
  "key10": "67mD1DT7qUR53CxecVcpfwVMJqEwW7pxs9WrJsdoRvDUNSuKefRXFWxkC7eBpKCpW9HCfgDiL283kzDkrPLWhvPT",
  "key11": "R1iiyYcWQTLqYTX161P36jGBgE1HF2kHt7quaq3GfSLYhdx4XpjR1FvYdzJDJzGvTA44GkMES4XpLpZwxoLiYwC",
  "key12": "3s7mmdeAGMi5N3q5BwVsD363FWYfdMKeWXgVs4BTkpWtVYuotD2dnm3J2yXafNXkS4btnp9B7L2xLjxiEPY6vn8G",
  "key13": "28LGKqoRYvJBEu2Sxi914KiY8fQr6tWzW7SKBhfH1ZJrA4eSjyGMY6Uew8DqRNucLCn7WjTZEEaKEGrxiCy5skWT",
  "key14": "4BfKZ3mBhDLqPhLTN7jQhHqMDzxeb9aA5Uj4eUquwCDiSU1ku5kpt78sWkA8CEraUi7JS2BYogvq5ajVXxgyVcF2",
  "key15": "k7Q2U7QNfhBN5DrRDAAhmJu6rkeLKHST1ifnDWnh5ULn2HHanHG656yCkNSnrpG2vraSkjJ8FW9vYMWVJmhvFGd",
  "key16": "5NUmALHUtuKfZBfPrVg9nQbQGs28SzVK2cjNtSgtaPhoSqt3WR6CAsbQT1PmyhEtANUJyLqM2PycUCawUYjDvRck",
  "key17": "5uKgNHJpH6GV1obA49apdJoHFSsDJJPe393GBKx6ea59ZS3d31TUECiCoNr7aHDL3EmQj5oXzW7TYMptTu2nY24W",
  "key18": "2FFeZNXq2QHTZqAPKSpwaypwUtLxiEiARPKjvyy4cAriQ3TuSdqtCw2DrCr3c7yjzMRBeRSRWgfJ352yr1v5iLKn",
  "key19": "4a6s2udm2NoHeuefhzRUP5cTe9HxdRm981D3afTUongKaKqUJ5koZb84hAGv9z7NBm9D4kBDYkFovhiP8b3Tz2cZ",
  "key20": "fktaG9iXKy3YYEsCBycMJPjWkd8ZMNu8aGeZdCVjBL2zkdNLMxKNdAmYizNsdPajAkK6PKzzcooxa1n6oeGkfUf",
  "key21": "3tTjndmWGrQe3McxTkWPFmGhpStK7JsiYK7aNphtVh8mKVXkLVFPGzg7gTdYk8tMyCUweWBSe6bH53BkfoVEo1sR",
  "key22": "5THe39Q5fRzRxkyTTjXH7CbWXh7Z2krCxgrEMh6uqCtFN81HBWJC48i1YfyHqSXoDnYvjzhnRoByvSkUG7tk22GS",
  "key23": "32GhPT68wHRbRDVuKgBfo7nXiaXiWvzu4AWFQ7UfyF6MLB9h8Z3tEvdJ9E7xpm5gEarP4bchgVDPhngBhjhF2vEw",
  "key24": "4wsJ9b1op696QhA1JH1VVZe5t3FrnsxrpMPJ1uLWXwExerMi8na4fx49WpbaZDdERL1nsTPGgP5VDsTMzyPnxvUH",
  "key25": "2LaCx6ZzP8zwVb16cLbVXE3iHXqYjXrCJ3PbVPhDQLHn3jvn2dSYQ5vybWe2t2f81WoDV4QWaZrCpQpM6ukqLJE2",
  "key26": "57D42UjvrUCAPrN6JhNycceRdfkbzqAaDdD5UYPLAkEk68vFYta1BDMkeLPXX5YpEZfgrtuBumsE6Dh4SRGWfz3r",
  "key27": "3P7i9nL9ktn5Mu25J33UoFRtijdn3ydbSsFUnQY6nK4M3ruyVUS4PK79XiXpemvbTcYUATfG1yJp9thq2RxjSsFu",
  "key28": "7bkSSzyxb9wkzyMD25EAip1H9wAcK6b3nKaascQ5fokecJTeA7M87Y5BsiA1djWDMDBkf8GNeeQ1oNYBBhE5ytc",
  "key29": "4pSoTn7UXditq8XiJtWqXfz2jThzXAkgeAHXJQyhe6pW1oJGe79t8WNB4Do9G6XwRU27SFE7Yt4Jkamv2MCsYi92",
  "key30": "32LX31EttNA6GQukuqHLyP6gDybutbEBeeNWb79fqL4VwNKcdT76rCypxibqrcZQfioj5aJFxLDEMDbBctMwvdD4",
  "key31": "25gjJqukNSPCGRqd1yvVBeUPfU9fpbwjYmGefkVn2QPFz4AyYxYjrZ6xKgLkKN2H4FDRz4WWf6UeaK7xJUHJdK5d"
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
