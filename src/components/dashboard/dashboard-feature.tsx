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
    "4UqBeJrx1jkWGC29zz8TejgaZPpS8dFQtvtzsYSUiXaNW5yxN26VDm4ntxjxXewRW2EHNtxPJcroMYiXVEen2BY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sQqSsS8WtYqRRFmx4kxSFaNEa4srMzc7uFPfXtJKNsP5jGMX3o53s57bMFTrjiQn4PVy8uuWMBJaNq7rQQK3fiT",
  "key1": "qKP6AxcKA8LRJmUf8c17PQw7oKK1fnjJXnmGTh9RSpA2bhaLoaxa3DmRc9G1PhEqA5eXbzjn4Z8bZKUDBJFgSca",
  "key2": "52WhvoMR99VENxWZgaGvEeYSp8UUNys1k7KPc8vYPgfy56K1rjk7LdJBr3eP96SxYh76ziLAsaxF1rNDD15rpStV",
  "key3": "5mKx1CyD8JmGdpqcGvzC43vymy33ksTkVT4aQtaZMTYsHWNYR9GB6fxFMHUNb4rfSDwDUzozBjnu1LcMw9FbuiVa",
  "key4": "43BdzXJukt8oCeT9bjPHtRSk8up6JjxgReMHTNa4qH3a65djKsHeuoi4cC1eoqLmfs15G3oodue29cbBNSaN5xVm",
  "key5": "2JANA9HHEiDduAVbEKF4TMdFmLyJoEX3L6gS61QMDAWwMVYcPMf67WTKqUSR6HgwRpmpyLCByWi2WitZdXNNjvJp",
  "key6": "45UensGmUiVNNkCMEeJe82ALTcf4U4iVVrGggP9Ahg7Rxk1Wby6RJvq9SztMd14bREtzCUVXRNV3SXva7XZNRs6N",
  "key7": "427bstYB1axpfMDrSdQNUfniEthagPhuMy4ag54qm3FutWPkrikocAvEjJyQFKYMjvHDf1aHrD4XkRAWJQB7XBmp",
  "key8": "5QUhsTckjyJYHKWNtfdzFPDhyuE2MYnBWQhCwoL9diNfxBBzgdQTFPzJiaAKQyr2ay2PRPM7ocutoHNKa9eWopBv",
  "key9": "24DEhBBsfJXkS5aKiCsNbnrTY9agZYg5sC4fTkjABSbNvNScZ4cAxYhsm6r9sCPKgicNJApztn5PaEcE5j3p1xQf",
  "key10": "4AB1QKu6PvqpiqyY6EhqYUJU5DtafcW6HRmoT6kHvaLgLhqPqadS54zFyt8NNtciXHXuTZkyoZybfJGmRDnDjTug",
  "key11": "wkbztfBD7cwc2VkBQeHJhw4XGmSd2cR5hG3R4fwaKrHPZrSWKsMo4tzA4m1G5Jh57FQxdouu7Unn8uubHhRagdv",
  "key12": "25ESo6zjBd4ERoYDj6jTmfLTnbkYf9gxE55Gnvr1fQKkfNv1ZNNoTSneeMhxNSn6KtPAxA9D3HTKBcLzJHEuTYJn",
  "key13": "2qem43aBdMFtDVMYoQzy4sCwwTRf1CrieJFjTurokoiLcayLk2sqDqv6BmHjPccQNSNvDVjKqpgwgWVnhH3NbQmf",
  "key14": "2frZwMon3cNamdRD1frkMYC6P8nuKqoFSJfD8mG5qUYFzKdkDA8bLQ3Rwk28Jg9wxt8aJGUmWDsCMUMtRRQeJGyV",
  "key15": "26MSSLYpQAV7DeqUJdN4esVKVDuuCpymHPm2SEib8mHSqPW4ZJ4cs6vwRZBMvKwJxRT2W3e2ATGku4rdcermpm24",
  "key16": "3cmwXLyJXzrfyYzcG5LYWKRVyHaxBNse1LN1Tg1YjqHbf9TpgP4Mgs5EZn65BnTBo6GLmT7hyGmoSX814EViHhhv",
  "key17": "5tREU3pmbS32fzCiqjTbQ3QWHichdmTR2zWqiPxbJEuC2sxErHxZAJj34rgT61mSAtD5GKbDwRJrMfw1PP5yA2UD",
  "key18": "5gS5pGqwE8yQKnPJHX5cKrVyWRrF4iSruwCK5R2wPG3S8oscKMsknRC8MuuzGe9KVvZsRbAZAYuWZKNaTAQSVceP",
  "key19": "3B81Jdabcdey9p2ineE36EdoNyUPvxwRqiedkuiyu1yYX8qQUDCwJYgLo1AeUxMAoqiwi711VkR4e7wQ7CJEoQp6",
  "key20": "2B87KsxsNK5c9AKzdjBVQMYxYzhwVNhpxf9hk46NQy4cCs7RPNh78F1MqK7MyLYpLaHdAyaPKcovPedw8YKVLn4R",
  "key21": "5UWZhWFys7Aq5Jz3huDgRu4wKuyX1MF3LYkKS9bWcGJSZNhksZMRT9etGn6gXRVGRADq2C2aCLxnb3GvFhSFPnPC",
  "key22": "4NjE6bCMPWQU4ESaL39wqH5Fuwt9jUZhauWTjnwfzvUbLfa4nNh2buFcP1oEyQdPoUjVy382XNafxxnGdu5kK55L",
  "key23": "q4qgUTnkFvk8JjqaS8rYPu9SUhJ57iQamzgeexHQmRU9DhQBPCm3mxScDZe7vd42yrAmD6zNq9FeFbSLj4dfZ7L",
  "key24": "4ovd2SuwAGtVkfivbfNcAzMuKChxu9hi76ri9kF7Mst9fsv5vmPCywS4coFLaJoJQHHrWnrU62zgdxGwNaykek1H",
  "key25": "H5vURHf1ZjPu1hi7abeWCMYCFxBeuNDhwHscJetQyqnhgYCTxkXTZni9yhZT6aTVd1jgr95GyTPKc11Hz4ZKPQi",
  "key26": "34Y4RXNxVhUzpRLZBE1HjUUGxXskFCZxVLr2MezL442Et8pZJH8uxaMC7VwjtnT6njxBDuW5KqxL9NdWyfM9ZNtL",
  "key27": "4EE2ua9sQ6f6q8jHDydgpQMCbs8ALCVHqCqHFcjK4qvWRsGTGZ8BXdcThLA9jgQ5jyRRf69f7cYU5YKpS4w5HmGt",
  "key28": "4g7gAXavTPo4VXtM4BXRgH8xrXYbcXmyMy3REE1mYnxATNgDesitaBAzaMgH5jGz4QBHvPC4p7E4FvfseCppYZbH",
  "key29": "2DYcBpTf8BVoqV82TNFvbesJX5YXkRRX2Zj5RUc4tNEyHe4yApazt35QazohY5wgbn6LPHDRhbe2Z8ReoXjvr2Bt",
  "key30": "5znQufnsJsVww4nUKZKPcLu143qhmYWVEoGs51JaMNHPEYFobPXYrQgm7sjcyaakdA8geK8rUWARNiCLLTYkt3oQ",
  "key31": "2SDrAyZwnPDtzWgB38D15nFwUyebLnXz4gMohqAjNB6zpYu26oVhqxsgDWbSGsZqggVuWeEVzCwQ4tjezxd2Ecuj",
  "key32": "4dkvDuVguG2ZL1F5WBkcLGFHXqsriktBmqtXMtzWdcVXS5H1n9TPozsMGo7NuDSonRUiZRyvBgW94gWKJCHwJHVK",
  "key33": "5DSDWncouVmttXiE5YiRY1vF92MyfuEB74sqNubXL9k3n8SUKPUzyocrbMEeTQPUCTGCqGYZmRVuSBsz7nAg7C8b",
  "key34": "5xT8HK3nrXNkmx2v8nwrsPVB145jW7QfYuynWrSWHmPd5vguT6n5gZT14d1FbTZr5UMi6j6tc6n5GGjza9qCjCmU",
  "key35": "2buiwih849Bgatu9C82vy97sCE2dpeNeUfVyahvh4ZaUZCMt3Np5N4CzGVNiZnoBh95muz5q1ZAU2vYk57kaRBCY",
  "key36": "31Kwqgdpm6rrxao538vUd962pqhpBKyNC9NyxV8wUjhBXGu2fa8muQHnvu4m9sygyrgKNZ6TTEswuBr81d7K5zYa",
  "key37": "2BkX7oRVVKnL69Bc4EHs5u1BGXwLWWmyYDFcZ2sybZJzrHbcDTbXmTh8iTPYP8LyZr9ZrJj6j83kgEAu4GGtup5T",
  "key38": "2rwFW2xL7vJ52562mQCCk9rFvK8KFDNScBaZLAm7fEkkRdTTwGt2mP47a46AkQ65PD3UULqzhvy6xLLgBTxBA5yT",
  "key39": "3dskZ1jtcLxkCYy4VuPin5uZP7e1MxMHrRFZmBiYqAHGrca5RzfNwYYG6g1M9zBPfAKy246hqF78YSRqEKDSUrB2",
  "key40": "vemyp7EMZ8LMD2m5MaYoeZGvX24TfCFY9bh9rViermEY8oxnb2DvFiUmGPo39XAjuHAjSvwrS32PbavpNkmQA2c",
  "key41": "2qA2AJaBQfCYMgahvBwvTas1jmhyb71rJNWtcgmgjer33QMoQVsjMYngxvpYu6KqJ7CEuFnb3CoKGfSfKZqyUwLK",
  "key42": "2jF2mBDpZ7EzYNrEHa4ULt1a8MBXCaPGXPC1RviTDicJSphTMDXa639ZXnLSWYyidb9kh6pVviUM5oZ8cDy4dh6N",
  "key43": "5hkM7L2Za77W6cyhYSc9Yf7ddJbnU2NhzCxA5PrVEURBEZdhwyJScSkpEkeAWmPuFv5JMRoL94nZabdR6xEBz3r"
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
