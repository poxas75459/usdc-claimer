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
    "5GFJ3rC5ztXRWJ2xa8My1vwxaXLKTcqLbbjjRX2W7SFiEMa4Z3nKygiNs7tRq35jDuvunzW6RK3aoaJVJmfESL9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SKhuhbYMHq6NHGKfL4JSewjzC6Ah3xSWpX2cV3RJWdThgq1mr5cUZfeZ3BCxJ9jdroasdHdEVU6cdwdVKwsUiGN",
  "key1": "5LsCoLdExcycwrhAiBg8La89uZ6LWU4Uy2zYZVwLYGnJTFKg9PzjnAjVtzzP685QxsxXf9QkthTC236kBBsTRAnG",
  "key2": "66TErGpUUQnjCqBdaNodG75JG3z89ed1CLMwBs28KEkM3ZBVEEov4MXv4VsvNQBByLzDwhJsKLm5obbfEbkg4Hs6",
  "key3": "5zoeVRhEUL24QX5Q4o7RjvGpoUWRzCqPNCEc6L31zLAGipyCiwJ47BajMpLx9rwRMu3Q5nksUoZjCBtBgj2x58Sw",
  "key4": "2XPbncrZF8HQ9XHHrcf8ujeAswfWZcwxv6QFJyzRRGx8qNrMmEA1vU1bBEsupsWfJewbiWaZpH5ferWnA2bz4S4Z",
  "key5": "3W5NUjenN2vyLySNmfr4fYQ91hqtu5LidNSQH255q1dVSrEKFbdcazBBVYvrsGZfkjQ3CxNy71UZ2CxSMAQWjXnw",
  "key6": "3reY83Bikp3JSJkXm6d2b2deKqFgFeBs8XcvCx3zRTEYicf7LBbKrbR9Nwg3GWz1Hg9cbcJ5V9k9N7Z6yCdTxnWr",
  "key7": "52LnP7rS87Mi9Djtxx9NQvRGfA9QM5HfSLrseRPHvsiEg49235XrL28oVgMVfgu4uwwKzkY4zbrZKSSMW71GWUBs",
  "key8": "2ACVcmFsXiUto3XG5CzeypSFMAnLi7urDJ85HTrew9UvqBoJ1Nvhrd2RZKVHoupFpEH1RApqHXMLrUx81rGgR8JY",
  "key9": "22JKKG3Dv4Bd1ybUFsYiynxVaHe9Lfntaz865TLR1tnmhScrbYwTjhdmmzoEETqS1hstzMxJ6nTnLk5D1Zf39vwc",
  "key10": "448rjTdxNMfqv9jbqynQ2wxiAC9r4EreCf2JrHf34tWj3GBnecr9thpD1JfzGwBfdjKcDHDfnqnpjQHHU5uNEqh5",
  "key11": "2oNBMwwcSVJwp7GqhW2NjVvnEouNaAgBaWyMdb2WTBQEMP1nRNbFoyi8fzMgFHtY6TjcxpYmeRuHNoyffBRCg5Tt",
  "key12": "5CXRf8jW6EJY627P3h5zTSYH8pUEGhVyFSaP2q7eqjeZAgpc4RtEkkrjPHjgqaZGzUj5DsS75sgwie2ibdMP9o4w",
  "key13": "5Nn2cefuESV6xrUz6B7MYoRmo2xXQxd8xQs839rMLKojSTubCMy5vXaj1wjuaxFmodoZ9mX3GHjsU8i3c2AhtyZi",
  "key14": "43dNNnxNG3MUbS8dUMZ4t49PRzrUfufeSci9WFCUtjzz1jVYqWT5UQ5UySjcuRwtEkPVGT2ZKHXRfgYJfzTEp7uc",
  "key15": "JJQgM4pgabAvjBQYj3Uo1qcu6ShCU3FrLjhs1TTPNwazw8kHT2mDDzqTr38zERRLh8aeNNLt4kxyVxNCyZ14zcU",
  "key16": "3u21qTMuAqoznxwDTWBbBjhLREFJuTWYZ6U8XNkTGdAXatt2xhv8P3L2BpFqEwTD8Cq9rZPUEWEqNEgkW93Rarta",
  "key17": "5kKrWiiizoxttDdWxXYcxow81QhwETJCTMxwRPH68yry5ZLHFJ9md8YxWbx71cr4bHiwAMjvj99KG7ZkgbgGqFCb",
  "key18": "3jeAkWMQzt38h3ShHo1xY8ohAKsVDnbC8G4N3qMitT2gKuZ6zGrkrvcZVX2fTYoD45trAZr61myJNrBYZvq4P6hH",
  "key19": "4xo8UzWHxuKHqyqPrKJCEaXELSPDseyndNagiAepAviZKwRkSxdXrKMzUN9nN9RcadNsxGHhKiN7fkr77eqgUfjR",
  "key20": "Auinr2ssiFwp4CcxyWLU9cgkz8bG7jm5XiM4NvSNwms9jqG3qraLNAfk9F1nA2WQV8F8kZiRTVfcQ9SdVgRNQ7U",
  "key21": "3o4cNXcjf717SxWGGU6WnPNtopUphovPFMeYifR46JJziBhhxUM3fupMRxMTqPwmFK3u4TEMy8HavYfaJwpqYU4f",
  "key22": "YvZArYLAe3obiG1bPjAbpzE8FVBS2rSWi4sTqZjJS7E7MBFGdsSAqUmciGPMzpf5oXKP6YWdhp6ZASCuqAYSrUq",
  "key23": "L9sn5vVhZjeowiZe7xuLHCrBDwKXR5qwwwrhBstTd5KTdwYnU6X9PFmwAUMWRB838tQCRRptie6ETHEiw7H8mUy",
  "key24": "F9s9aWrdczoEGF9BLPewyuncEW7tnu3mWKzucNGNFyujVdn2hCbxUNTMgdqLShsY5uc6XokcHfA3xo8LUBov3tr",
  "key25": "bNgGhLBt86pe3oJUCRYUa5iREgQoMrP4RSN4kKWN2LecUY7Kv9X4yYKzZrQUuVfvBvzba8ks899wDgSjp5x9kr9",
  "key26": "5nhnAbyMsfio9KNGBpTQbDCZRGfTcP2uKG4QqReiizbgVH7oeVhuHK7aeNB1w9pPGGPEmVxrCYRTwYtfJ2yaL7D2",
  "key27": "2konZxkXFmBGLeSsktskNFrqyVMvc6VKK47u91kkQFGCV2qpKL83UDztDH6PkogYyiSc9N3DZU8K5esyKWBQhoD9",
  "key28": "seZVkLApnEArzveMbtCSNGkyYkngqoC3h2WWb9UNNbgj2wFSEsdyfyDJk2fPSHcbZLWy8riipfe71camfUnpcVC",
  "key29": "5vZ6ia96ZuWDYy3JvDA8qtRg1WTMziu9bMUMBGAf1y5mnqKtaAAyFJiFRniZQ8zKgc39VvWQJKbMbAg7sf12j5mU"
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
