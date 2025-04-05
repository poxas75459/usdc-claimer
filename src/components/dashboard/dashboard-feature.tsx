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
    "64ABSxxFpJb92NLDjEm3rGW9HLxdtAFzWgFq9RoyknrU1PMQNXZKfGXGnfjCD28boQYpJ9iTjiE4bAwbgjbdkkkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "568btmnBmkGjj7FBJkxezmRksoGyd2c4drbgFztaKNc3XgRf6Avz3j53KAtgajoZEh7h7eFpnExuE8PKREVE3gSQ",
  "key1": "5JC9SnNkS8TxrYAkGUfTXRfet2h9VARafLKnLzanezETZECQ9q6grbHmjFxDuVPPFBx5ZZDRhc4xNsudjjcMMktG",
  "key2": "2v6RC9YfHYhkBssJ1ocjPuswwThqYTKVfSLdcLzzb9qbyz1grTBVQR2SYh7Kbgjy1eTKadG2vzMzr42J8JBYeUvM",
  "key3": "291cVzGoFnzygWNjxSzZ6YBTFZHkAgTSqU3ucvHAs1xaegFEJewu2JMpfxxhFySLcKrxuKomDWknnhmtR34kvJkQ",
  "key4": "2zHJuPzZyikUZsDqoVodnZPpR8xtZSaDooRwe7qDLiBTGVG91mpEj3eRUy7iMQoTpnrmFHZpGJuKd5JFMfU15x3y",
  "key5": "VBvwAegbP8DyVoN4GEZDz6Q6B3ipiDmWgJyrrMt8LZzSdiMHU1oAgmemoHvRANaQGWGPQBM3tUaLeL3T8UVNDUu",
  "key6": "ZS3Gx1twPyWndAu223KU6dF6usc6UE4tjrrR4bTRs1Ynv4LMLRVa8R3jGWjwoxP3pjxrrzCfwu8B6wVkNohjQBH",
  "key7": "4zCQKxqpun4sT1EqBPEnY9stFtGFCWFWoF3xVtGVSj3v3dxX8znR8cqcf7GHRssEAyMVo5beAGysuDdjqeVDF4tw",
  "key8": "4hgAm4w7C7iZ3MfoXh3BiEn6VLBtckbkJAMiWKREgi1ftM568YpZfBeouHfQNtQwTrD4baUbfPZMWahEduNrfP99",
  "key9": "58G2xP8KcuxdtsTToBxQHwDP3qepVR2bHYDZ3pskaocXCcvTBmKqDocT82r4QJbgjadV6pFvk5wN3sgaDUUYkuqj",
  "key10": "557uzEQRc3gA1X35hhmskGMPF7UHoni6JCYf1NRTwPKpDMTW8SsUbuhQjzsFMPddVjnWbQpWb7AfPJVfgLmHBSnF",
  "key11": "5e8ZeFrqTNTdkHHQLFNhBcS7MkNEuVryzdR3MLNT3WvMbfWHLW9gtCHi7QM1wrz31aGMLJ7amErRCfSxbsxn5Aho",
  "key12": "4Be1nXgrsJnB64HxvKDNwotcTFxojcxkfpf8BH3RNmZcELpGVd12tpSw4uwk3B17Zit6jsWxe9rvecSbdwE3nC1b",
  "key13": "32d7hdvVegaRmEfKHH1Szy2FD4sQsSMSf8LSUt7AePR7KttRLBCup6yyYEii8iDP8nb5Qsb95P3EVg1txdLJDqpo",
  "key14": "2A7nc2etYPvrMpeVVrh7QJLedrDmaUjK21mZdzWGXXiui7H2YPU1qh92dihzbUv4rnbaHW3oa1Aysr3aNCxzRsya",
  "key15": "3raBhucYTsQFMuSXdPCiYh1aHvtefNz3KdSsRS1jZ8ePXvLpXB22423UKA5fXmbuzrnonrb9k4nzDkTc9uu6xgJh",
  "key16": "4ixy8rKy3CfC5YeF5XMEeQ5tisMtpt6sAp482rEp5YA7nde1fkfVDHN12DbU2jXJzd7WpjhakUbUshLpmrSCN56f",
  "key17": "4FiywF15HAQsyWtsfnRhMvdKPevneFFkBrVyVNE3wqV9XeZy3eTafDr96VDmmuZyY14Huzky7W8GqhSBZ4eaQost",
  "key18": "3GyBULn6x5hfGtX95XVnCvbic6SrAsajoa3sg8uw6TcrVjrFb87XM21qDh3NMEmSe3GexBXRzxuyoD5xR7FaQ5oL",
  "key19": "2JdVNFSuvT46UE8XTR3W7CLPRFmZzxxz4UfJXhf88NmV4gE5UefRAmoYghdYXo8rgWajwJ3rsqHLJfeEJfbARHRe",
  "key20": "5TbwsSthz125qZHmKFhZvbMCd2cBrZnxeGi9P3rFrn7kawyNVWDVF7pYXo1EtNRs2NdjU92CHefvqdJnqSvvXjys",
  "key21": "5bhKxFmY1kFcuRY3SG9Ro6bAcUiWXAWjFcdoJQX95t4MaVw14LbMdAopUgUx6m3uCVTNRzLbywPMWAc9DwX7LRyK",
  "key22": "3k94RzPi4XHUVSYHWRBSmeJs8Q5ePqaeJsUtazhDUCrHhcMDFj9D96U5CP6ATXQc7RQuy9fsnTsdRWeT522Mp8xT",
  "key23": "2toGKAYZqSEViiYPRcVsRafptWLLgUTC2Py8rndq6CffYmgndcJSfYEy8XZr8M7jHL6pd7HCoa9Eqg4bGSmj6rfP",
  "key24": "5njNvpY8FXJ1Aie4LKRVtPCmjTWJSxuPeqU9VJnuC8APKW2jPJYgAWwyeM8MSCY6Ezu4qYnQLt4xrLRg2wf6wLQw",
  "key25": "5h4somt6gdSVJ3qQ2FsX5AJCSXfX8JKEtfZ8WNh5RZtsfKJD2VgrsFB6M6pY81NDSRTCYHzvNgYJs3m5ZofifkZa",
  "key26": "56KSzEgPuUuDQfwuMdMApHn1h7p8BC99Tpt2QMe7Gi33aWV9HpP9z2JfDWqyBo2575aqnx9oSU6PJsJeuu5FN9r5",
  "key27": "58VBVMDbkiUceTRmx4na54kjwQPAaS3qPQVEip5ZXAkizffF1Yg3CwHTcJAMUCdsYPRMyoRJrkmpbmUSrum6Gmhz",
  "key28": "dmxezZVPywKZZhBHQDWByYMH5Qqts3A4wL9A6GPMz7tb19FBFxL5bzShmsDcunQN8URSf5ckMerL9TPxs4B1BkX",
  "key29": "4qyPSS6pbJPkcSLTbV24dRs1jC3rvosJR2QFQJvaqsizxQjgG1pNBpmQ6ow2nbvaKaZDhCL3CFXPoTm7UTZ3Es62",
  "key30": "4aMFyve8ducX7WPxrxEdi2DV3FW8zZWcLtfxTqEywoq59N1B75ZNBucduidASGHxSJEtg6VTfQMH4kd4phKwagbG",
  "key31": "3znAU4WCZwpjAWjLnE1m2qapehsS2vL1coNT5Cjybdzw5tinEQ7xu3FcoKHdBCNTJkYNUndZnnzce1RKxTcj3sCQ",
  "key32": "5EFdYXZJVYJBXrD8GS38xpn8sCa2giR2CEXTo4o4GNkRCT8v9kWCppE4A5ZXynd9tdXFpM76gVybfLESWkA9c91R",
  "key33": "7G58SMan4e7RtTHQm53U4NZ6QqiUPr6FhaPKjjN1aqk8Lzo2U9B6PbMtCSFcMcjYPT7bvr7jt13qxjAoP62Tiop",
  "key34": "wND8BNs1D8gZuvzUgnK63Y8hNgQzC28qaWWEBWB96XywGybvGfhofQrvmeJCKChh1RVcJ3EWN8HNZ5awBuyFZna",
  "key35": "3M9t2BSCvQQqtEsG46YW8n6Weo5dAJi1taZUuqAudJW8RcmczSsk9Q3XfxVmKSRqidBVye75KRbgqSqMpHtzWdEJ",
  "key36": "2gKq1p4uBczAbNncbG2pei4oU9M6Dv87ETLMEoPHizgkMENCdj1bLpNdcq8qa4UQdUtxJMZ2pi53BSxgcFDn51cg",
  "key37": "3473jtBzLE9AbSYbXoZY4HaLh5GnLRYCGDcVjsmZLkKJFS2FeeQvcBaNAKYsJxhUF2wzG26utgiFwb5bBDUom9yM",
  "key38": "4EUn6WSM8tMWX1cuQafUuXUAvmScnyTwx7NaB2qseWTtYok3B16NGFvff6LngwZboSb7YjkyrA46hXw3LGUqNmVX",
  "key39": "qMDs9TQfCfXkPGeupduMpLwXc56dJ6SBQJzgjNheTqbBWV7WjidjLQmWTornNBZQELeYA1wo3A86g6W32eiMhGS",
  "key40": "3djUhNEvxziSmnVwiGsEtzBUFjkGhfxA3AaTEAbxvzq4ueRbvVu1ARWJ7DmADLVDDNHACGty71gUEKK58ZSS1K7W",
  "key41": "5od8sbbtUrRfHRJptaAjVufh1jofGC85wst8KxJ1zf2khaBSCNANQj4Lku1D2SJFRppCirH78H6GjKZmBFkMcKod",
  "key42": "KbbkZKsNmPRTTRnDmg5sysfBuSxFXLp7aS7YVQMC9118hw5F3pmPeoRtYFWcutJT4Bm9uw9GPkMRzKgvCFLStDf"
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
