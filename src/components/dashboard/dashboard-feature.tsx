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
    "62PvWzpJBnjM97oSxmkdyNYmnMK5Ws3dVQNrRdNJ3yiNhKhuYMJKBnRPyDJJjxXfPWAZE13SAGEUWP3D935nZDL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qAAKUGigyjYH4SNmu1CmxmT8Qm4USjcNtbJ68FzJFZJXcxgUZKZyKhp211ookGcQLv6Myy1CBLpjeqNBpWTNSxc",
  "key1": "3xmiZuxagw8kaWFbeguzzBbxp6H7vtprpMuQZiNPeBysNBBU98KBP687uVBx8xR5RSDNmsTm1LwFo1ZzKR1QHz1u",
  "key2": "RCu1SBFYgYSU5PFd6vjnZd3X7RCecFpoNN9WgPJajpWHssjokgVs1WneP8wzh2AQY2zf1mSREeY7tSHY26c2xDr",
  "key3": "4rZirmrTEHMMTtqPGYPYBmygJLffHyVaLtu77HB8LxD9pDr6pd4WDFU7m681TBGFnGTht7623C6gunvnjEh6BHKq",
  "key4": "31rid2ydge3yszSg9oVExSmXjzRNnm1RUZqy3zyHSys19JNT5L3pPPkGEE3S37u15P9dgCTwAYx3uyBArWHuPtsk",
  "key5": "5Z7aKQ9fbEUfvLuB33L3o2GKY5xgpqLy1E1pGSf2UNyNqY1K57Z9zxgjyRScBuKK1vDtcoVb6UVxs2yyWTQ29QD2",
  "key6": "2idB4GJe7e9Hk8GXdKAhtJorxQ5FRWMaxDSLmipKMTpcmaNsCKxER6bayTgFxeAu4v6QUX3hCSLv4bRq7VLobGVD",
  "key7": "4PYeHfZ8bw8xBkCT58BmjcvfbUyaN4TbfTXsfxmrQe8VYzNCKd8VdSQjFqWZxu69y2BQkEk8jnddLLp6ptB9a7oh",
  "key8": "4H1LXLfdUbSE3cjmMj1rFRz11Y7w3vqVCvsLGhBHMNMwa13rvfCgCzMzmTT6kksn9B4eXhk6qFWps54wNh7pQnWZ",
  "key9": "5YGH5A7Pd39Jna6NZN6FzDNrbqp7iTi3yt1gb5evXppy5gDva6hfoArKkaAMma2kqomSXxCJGjcDQb97x1y5SZAf",
  "key10": "G255tEL1BRbcdgpSWDGmYhtg8HvXA1zDdcVqHHGhjVNnxV7sxiwBY6Ygd4LHxrZQ7cu9bRmTDFzL3tvK4sBthbo",
  "key11": "3cYJGP5JpFJkPZnf2ZsSMChL1AHvZBeB1H9GbEsyNfmc3ET7KQsgf4xrBMESqZAfeBURDPpkHrzTx1vBZWRD9DJ8",
  "key12": "iV96PBTRPe3Q1azprLTVTPGNDz5hHw9ERKsFygnoUN5VvBcz1xo4jhosU3Lt1PHUxw1RRo6WFWVFpz891G9d2hc",
  "key13": "5p6tZZCnzEoVmcTRiazr418WFv8o7WFkDSxVu1tFSaasrTQvm6P1ye2o1X59DZtT6rKo8Szjh7e72CnYQ54FgFNJ",
  "key14": "2Cbt9gHY51h2xD8ovGQM9oiPxPRo9MbA3RW8T8XYhumBMbqU3SyGrcRJkcazdx1uqwoch246NUB3VHhqVAfTZasA",
  "key15": "ULXaZtTx2kjuwcmQQA377djxRCfqitAN2BMyLo8YaL8YauDnSz3b6cfeqonYix5nZsk6XGxn3baEx3MWMkvzRky",
  "key16": "dr8piATfmb3QLcontvo6fGw2tXqZYiJKSzgdmDJJnvRmc1gQEMwuX6GEiV9hHUnGtcZ3x91PmQsiM4VAWC5VWqQ",
  "key17": "2Qe6kDWEEt4uCcVhw6XCRBFyiTDmxcmyf7yBBzGDRcwxjeiNHK3pkgwM1X6c8NZzBGU9tUdSBzEM8ktKkvG9v8oE",
  "key18": "NwosWhfYbk6BX5tpzW6Thj8L3YYZ9YbwWvgibEysxqajeU3PrwivHdycSjuZpBLCMoF41uEav6kUnaV4dw6RbHF",
  "key19": "UdKguRouQuGyXy7egEq2Wg4PKGTtkqfBnQTWzbV36viXcDGQ3gPTkceskMGVbXg3bQ4dYHv6pcEx1jcZEqoxTj2",
  "key20": "4ePwMsWprwb8VqfAWchE4gSfKpbYtJEMVHvxM8qq22Gp8Y4WKd3PNkCgDVhbZikuXVLGhnHG5QH1dG5afSJyju93",
  "key21": "4BRuGFQNJg5qrTAnEGC3QkACzch1Mpxdv8HXjZqLwsTkRWAZvBRkahqM7uSm4YACJoQRiG9kdzbTy43QBehQrnWx",
  "key22": "3xQFfAfdYiLhfs36wQrY3FBqp4qPkaMUC4xaAUUMUsWooCq19aLfpGEVZrwui6UfmWNtJv9EiWk391iEtK1b37Zj",
  "key23": "2TGoMKcqTqevrPvzTTwLDg7NQH8zgozgdcdUjWWhWoxFiSMfN3rG91XXaaks8LxWwZ5LHnYcPsqvpCi4e4yDNHGj",
  "key24": "3u8oLHxDZ7Lh2QPvQr1EHUcQoTaHGSCgDYkAswvKgkZDMtWAUT6R7yfJ2uibLaEQLCCqvgaHct34xw2XWQDGXQ2h",
  "key25": "5RV39jJHAUrByb4aqoe4mc9mnsPzZ8Vt5WLaiAyHiGZ1W5HjphLacE9uL3mj84CAVJVVngJ5YgvcHGuP5kFoGYUs",
  "key26": "3MCj89MUSM1Z3qoTNnvBEVcwavLRVMK5Kt6gmB7cqNfCC7oaJb7KULtq32MhdrJ5L57Lv2RGRmWBpJd1FshHnfMt",
  "key27": "5gwCAQuwU3pHd6Y3tQrQ6txRY5YWyqi4zxWstB5ihErsGW8UQ29yb4RmtCMxGyqqwd2XUdtqztMRcbi4vcqy1uNU",
  "key28": "2uxJD2qykyAq2xmsU4qPvStojzLd3Az29YWN56PBP9ShFgShhDUn7PMcKv6ekb3HV6bStGeznsUEh2WPmtXEgENq",
  "key29": "8iJHXYDXvBYcHCZcBTtwqT6gv9VXMH81cn52Yh1uHJbdt8XLwtte3ZSev2f69Kozj4e3nyqwFmA8yxg5ZGG7mVw",
  "key30": "3GGzbdtAHPGhD3K674xMmeLTS6wsxuzabvCAkVJhUR4ZRxHohQpQ73cx5Nv6gDUogqx2ZmjdHPcewzH6rWPi5QWJ",
  "key31": "5Y5HQ2PwBbF37BKEjzwpeDztQw1z3m4wbMmx8EkhTvcdEQLwXGzH929efF7B3gRaBwUmuvK1gYpRcx3EraK3ACk1",
  "key32": "67JjgHXAhpDsnPGndDojwXEzwAuzxcmE7uoNSmKJVTGHGak11USaLFaj61NmBUcGTUseWr5SRyTSoSz2wuSZEPMP",
  "key33": "4vn573s9LrgckXw8XV7bBi83v6jctddJL6oRK4Swx6e5zosg2YfrCztyS4Ws1vVsiDf7Fn8FA5cyNRGmts4jEJaZ",
  "key34": "5qHmAx3KoDbwgUsyQcy8XuCCxSBMcj9KmFPozMWK5P3MrizHpePnnMBpFm7dm4xzmpaLUKXN9o2hE9xf8ZYBcWX4",
  "key35": "5H26zrzxBeEuZiCQu9KRN8NF3yCXnLXvCrhGjneDGciDz7YyAK4sJ6iUxkpanEbzfGLJcPseP5eEdug4sWuGAJdf",
  "key36": "5D8fzRYAz9iAxfpk8YKKnwqgdP11zM8pJnMmoPvopuK9CdbEAvS1U8pPEiNSoQdNnEALUzcqzo5WGrMhzgKr6LU3",
  "key37": "4euYZ4XxSNxm8x5oVfKTKx3bXhTvThGDZdRRp6iRDrVcyjjj8soH7s5urz77rg8N85vps4vHtEY9zm4CRzH4iBtv",
  "key38": "2SaCht89MmC6TKzBj5y9cSMcDavQ8BXXjW4u2FbWct3LWdkTJR5BzoSarXHjBJ3Ws2VrNwns2dsvhTtiM2mkYNRD"
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
