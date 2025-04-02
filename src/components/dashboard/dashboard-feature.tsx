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
    "DyhxG46SExpsktzzpsZPW8N1ATgBVahE3XBiTsiZNvwXAnRNDoaVZ1QJ2NwRRmraoWEFiZwgxWRMuzp5L8M4ktG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DTigjaYsze7yVLoAvwMwNUYrAg6UqSg7etdKnmwWC5ssADF2RRnLJsozf48Zoq3SQKxT8A5mX5Qj8gRKDXrp8V6",
  "key1": "4KAtuA6YrtdjJqCtoBadvDu8v2qZ8TyYywM8YDjkiGk3SgARQF2fQBnHFd6GbrEzzoU4J1ex5JDknQNarjQtHpPx",
  "key2": "4sToNh9cfc7FTFYCQnLnjVchFhjjdgBFHxyXt7F26BYvA9CptgPxN1VTjBtJDBQkWBXGBMaPownKKC7xJwARpcow",
  "key3": "xk3nCSUqZFMMSey5cdbcoknEGY7L5J1vmRaeTPARPDA188wVWuNWZQqVi6hyJbgSxiC4L4FKa3zZgFohLLd9dXB",
  "key4": "GWYgdGBM8EwFZbonPdFr7EPhLfN4Y4j8yteFPQXEFZxrMsCUtk62chBSvQetQ25QWam1d6EWDndDU6CR22nMDkE",
  "key5": "HH8xAFMVruT7izQpM1gwhbV4AnmxWmGxF7bBwA63Fjys3kT8RNvKdo1B7exUXKrQNr4YjfBGSKoAGQ1X3VEzTGa",
  "key6": "4eiLWmCmeTdKaZUEBYok7rKFT5EiBrNEgCPhg8VEdkLQQS287gkhQq8MaosjAVDtA3zq6NyovzrS6DBHTacG65yw",
  "key7": "4hNv2ELFCHyjo7DfaoSzPiMYAQYCnAG9PyHac1qrnoKcsGvXNkYNZvHhf6ZnAASoFCvtSAkg9aczSy9pFqfwxemn",
  "key8": "2KdU7D2zK4UtCmHeX8iXiXyKmtKpCrmdEHmnjTp95GXGdH3PKsUU5iK1TRcBtwXTHGuywMSRk6wqeq1LJFwiRxgi",
  "key9": "67EvNLc9gmfPXPLBLwoDhLAPaQLfXacySJidmF1R5SufQvoSuSJkjavAya5ZY5RocD8wsMxwJwVgFc7WZGddM8Lb",
  "key10": "29pTY6EEsWoRXbK5HcfQ9F8EJoNmcrEuhMDW94NPK6mHTuZToXsQzn9smapYSyBM9xUSzQAUDuBeT79qV9kKpovj",
  "key11": "4iNRyKrhLzFMp8VYBbQo7NhFgrHe18DkF5cGnhPLxRiVEGHqQY85moG5TMzVcech7RNzs7usVkPDGf22REu61AiE",
  "key12": "4Wt2yrCWTQ9Ld7uTdbKMGWVcFafQp2bmXsxecSPstFUvDvXhMAck8fCURK2GnC3bVFHjhMBhrdqrEjnAXukUusbx",
  "key13": "eouZQ6h8VKL3AAK4yBfXe18ygLf5DKiKjM5hPnFqQtML6LixKzDV3sTLCsj46XadZbqsbfEEUjB9JJLXtUYtYbg",
  "key14": "4WYyHwN9pa9gmZMRLdWQaFn9GazB6P7PA4yvEiSUb7u11z39J7mj14wRY34kEAe6xpTLjP8WFVp2ZZL1n27qcoU4",
  "key15": "erCS3GMd6eeNU5rvd8pCDYJfL4Ho3Y91tPPmgMd1ftwu5WHBi3LuD9LY493P4KP8CRWatHDamCGrtbiETBrHwsx",
  "key16": "qvgEJL9hFVC6j291p3GGpHCX3Mjocpxk9QKhSvhr7bhwYaoYd4UBk4TX6gF1Kqw2wvocvBcG2M3J5iBZzhABMHY",
  "key17": "5efKmVTDCMvzZLShUe2vqkMpqHSyx4LxEGfq1cmSLWWENy4PVE4rxssj2BgwhD1Gk1aTPMij7fnw9VkugBgdwm8v",
  "key18": "44nD1S96Xto3u7gVrqGEKuBxjwY9Ls8b1zMXTzpoBSRPMsvMpvVU8hfr3WE7QVwo6aViuLBDXhrKgjxShMHEmZw1",
  "key19": "5nmx1ki7oiJCdZpGuV6HsaSF3hb8oh99FuHauBTJ4Ch5obApkgnjNzpFpuAor5PBHKvuW2SQ5YZUVKqpLMX4bdvu",
  "key20": "GbrSN4NvixXC1by3sMX5MMnouDdqH2hssNSXk71K3BXqMsfMz5et3M6NaJpDRPrxF5YUwppFv7HDNMwut3hxkz7",
  "key21": "3dyGaEv4jKFpnSSLo35sTYBvoZF82AfW7HPKjqUckFhsgXMM4AAVjwqLqNgkiSwvpJ2KRK4Yj4s8dCzvjbD5eDC3",
  "key22": "3xaipvgXoDfBzpC1ky7WweWWz4NWQ6gVqcCFrkpe6vsnkD5maWpLW1gNKxhVdfojqCXRC316H26sHYVgEwHhgd5X",
  "key23": "4HrJV2PPx8PCsZFdW7wbHYoRu7jvsyA1X7iinAz9w17fkJhpbaJCLPdQn6XvdRYe83bGq9vBCnmmQ4go2PUeeUUw",
  "key24": "2ptAvq7MCwHBpL92V1aJ7CoCFsPFZXXGQPZz5sWefLpK4srE6r3MY8mCcp8gXsAj42xZDUkKxEN4yBvRPQyW6Sgt",
  "key25": "39cFUkbS3bTQ3xTfkReNniLzPPzxVLMXemQcjtj1Q7oTUTgtJFsrZ1bHdf7gThqgx28qKr4vuKN5GsfoHgGgdaB9",
  "key26": "5U2xF9D1fQQrbE4AEHFrEwpPR26cnCfW86PoajasfkGZuLbPbt93kyeFTw4329kZEKCmkqfeBq33uiSdwyZks6v9",
  "key27": "3uzBBxqn9S4NTyCQxG9FKvF9pTBpXjvFmC1m7beAxHrNqt6ZgckUaCCWLVpQNscnvQdTFUC9YkAJAPRjE6dHSprN",
  "key28": "54gLUBaRM5nTCxn6hZySJEtAjDcXiL1Asxgs4RvvS5YUJ2pQZWWLJfHxYKnZf69daXFBYCa1JSm4FHRsYYjiygny",
  "key29": "34yfJuobjJH3sTE8sdmAxpqpqWvpRTGRx5BTc6joZyAWmccqjYBabcJ3azXon5FASZphjJKp4wdp6hKeAppUgd81",
  "key30": "3YADPdWva9vMTTbzfNsWdJxWrijWgGMABmsSdKVTEuudSuzx9zpxmWhuHPv9Re9WRyBtkbQFiQDbByui1ti4pzcy",
  "key31": "4iNFzN9LHPnKoUCy5hkg73KkUYDTDNzRKZRnfkEcSUkuTzmgSZaendAXikWVDCrSucuYr9n1YV61CDbiZnexSzHg",
  "key32": "4YeWKEWZZtDsDB9M7LTSpFgaHnC5B4YH6aEembu14sKy1g5s3ELdfU86j45YNS277Jvt26oFwKpcLY3K7dhHSKHK",
  "key33": "4s4mUSMXwV37iDTPxmebuh9vbpPdsmXZd18TGtxshMMRVQrosVLBPs7XH3VDR3PQNvWxdspkFPEK2tRmsm2Q8zXF",
  "key34": "5BJk7ZogRHZKnFwr1YMPyeGT4kaPVTa9ZKjApLBziT498M2UsSNsqSySfKBzGM4cwuY4qBfjZhKVd7jt3MeMEfxV",
  "key35": "4g2UesHcvCyGBaqST5Rzj2sUqQxgp8JZFeGemVD3rdh8THmK6ioKCWmrqo2zHqcs4PynJrcwRhFdsEqcB9taeSaK",
  "key36": "osDojiSNpvBhR9rh6zR3xiVQrVvVyt77R667PdCg7kuLeLPLpwdrD8AsQ6LzBfJWzLkmrK1nXyXnX67ZFN6FEVd"
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
