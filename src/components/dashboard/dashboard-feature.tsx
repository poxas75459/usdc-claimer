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
    "2EUAkMfnUdAAZVd2KDE6dTrVf6JfVMSj76s5rkGaKYEa3BekFSPgajDnu5GLrYmhNh37YThAYo2x3r6U3kzmTnq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LpUsbkjZkSiFSYnVXSuhaV7NcdniFHHH7AVmTUGycPQmrNVVdTHFgbfhiqcDEb9M4duTizdPLLvaWbmbAkciUS4",
  "key1": "4bhRky1jDzcK3dsj6CHavfEuCgbqGH8ozMUxK6X7Bg5Nz5T2xGy93E3QZy2E87qZ2gquWhA7aiXFAnQtVgMPMVH3",
  "key2": "47q34LgzjxkSWPLnVWwkPKunJPsiHad3AiSwrUPwN98ruVcdGfQ6q2WEToPZWgzpCJiNsP4tB8iBBZymBhyUrPsh",
  "key3": "qAfJmCBTBzQrKGbvQWaH94C2GdSn82GpKkfZ9otjzrFE6XLEKUAUHubbgA6TAC2JpUWcvQu7K44BZwitr8rCgdD",
  "key4": "3s1HiawGVgD4Bub6axNz8g9pwXzZmdSbgTdRGxYaz8ipxQtFRZJFJzQUCwrWKtaDNshpFLnxCqAfuHixWSGgNfmJ",
  "key5": "2tWPMNhKXx3jk1iZNeBTznTRBQ8kmasAu4rhAa6LExYpPLD47c2A5PCU1Goy91ju64iGY1TMLCq2KHpujKVkpJ8M",
  "key6": "2on3wmiDnqWdvBP6pgw2RDLKJNA5xqvFkTmAQ4dFv3QdP7nmSfUJPpM247MvqC7yumzzQgpyWtAd3NEx3hoDjxDd",
  "key7": "2nrnvrqbew35XAutzPY2tGxkp1gPne2F7b7A1f2Ng17i7VVW7bFtuts5ZtY9KB8bH8rgonwikw6cwp7RY5bvmhcn",
  "key8": "5e3SLdXG9yvWKnQ8NkvAChbikTLAVAxw85cuU6fr64tUXEaSiFqfJfLomW8GrTMD9SaVFi18U639RXdamVgN2qbn",
  "key9": "5TtCWqvbjYfQHfMTrFXKJAbxUxbYgBgbqiyXbrpWJSZnBzuqW8UL8ouUrDJYaRDjrW3dVAKL68kfULTquCoTkoZM",
  "key10": "46uwFXMrfoPTNkdUoEV5QvKmMsFskpCbBbxdBULwufP7MchK938CVFe8crTbjbQXqTXLKLQMtzdDGjSD4tAvkshi",
  "key11": "4fJV3PMWADqTQosbjh74XEthKHmWxJUw3eSMRUH7b9TJpHWixC2WW5fCd6RNfawpgMgYjeRux1Qonf2YBMo3WnST",
  "key12": "9JADUe3mtV1HbZr8xb2VdaycMMSkS2jCm2X9VN9qHLPzHqtoT3cTSHgEXjPgPBnqgAU2cqEkVAgLhtoCQQbW9SE",
  "key13": "2V66WG5nuSY4o8kypkYmrJiSETtH7nRXz8kU4vNknrXoz1WpzLbqBHyo8m42KMprgTsuQcMirKfn5ckhWgADUHe2",
  "key14": "76Ypk56YC5juDSZrYgk8YttVUapGgfqbB2UYg7gotXK3BpgP6Ax6MLSvJUMaWvio66ZVU8y82WqbyaFXenoxao6",
  "key15": "DWBjAdV76VUfvKEMfBxjCxyXiEHaQv7hyjtecYcAYPYGXQWYFyt3LWGgcCrnxm9sSvx36kWLdXCnLc7JEU3boRK",
  "key16": "22AngCwWtKq3G56a6E2zX2TT2w2TNVrs1Qt2VQTdhisYdG8L3dX8YZfExxpVNQizFYYwTdU5Wwy5fgPyVUbA1Per",
  "key17": "33s7Vyq3P4jVEWSfCgvfD1auwwjoEtpG999zhisk69jr3qUq635aiDnHDAbT9UB37CZgRrnp42aqhiZQ5gqCiX4P",
  "key18": "4YKFadct7TkMoT3GHebjVKHWN4tJ84MHFiK9mSPj4ibgnPFgWdFqjViF7e6q8kotRr9xoT2FkNbUX741A1GquHAj",
  "key19": "5CFWqEKJfBEYbzUt79z1SEcsWMhaGuBFnYSWXSJrKttAmmM5JfZ2jXdGVwfdvBDr1KLPMX2fL6PsaKJP9wvf7Pno",
  "key20": "2yiK6amQcWAmpUNKXFp73m2zKCRVYNaF9s1hyUjGH7GNqRbxQofJEvyUPLicCXU6Fa6ZMXgyeZRZf4sL7yQTc1nk",
  "key21": "2SvcjVQvvsjNhDeApaQWCvcNkvnjXu6sPRa933u7Z3HZDRPjk6rfX5c77xbAxuxTSG97P9sd61gX5QjqN6mwi9qt",
  "key22": "2n7E8LMdDJ9gWVqqDjJCFP65xGQY6hjYrLZCpFnu4PFnf47NQ6gp5bYCfiT24B61JXAKU4aMdw78GmbGxpxLqydC",
  "key23": "2UyHu4j2Litf2rMjHxEvmwyob1Q3GJXz3LoM8kHnHCxHD3v9aWBmtAbdDACDjpFRCoicq4jUD6RA3ZWnR7sdT3NV",
  "key24": "5oSzkhhufZVk43qALv4SmPQ5PTkymEViyate7Rqs6CCcg7d5WgvGHXShuMigSf5LKjwVutZyk28fottPnRN77U8k",
  "key25": "3Y1sTGD81FBVMtTQNjayuZrDmApXQYcUJ19vG4Av5PCZTLf9WE32ZdCrFDyVazqy3Wxm66dyxve3d4X63asCR38w",
  "key26": "3ayjiwPyhaQMAkjEqz6hTirPLhEfW8iUi9XEAsiMJiPFhwaB6R16EWtxWfYkEAydTgeYit2juRiDmH8XRRZKUibB",
  "key27": "3u9kVuTztHZz14JiHDmeBLfW3STWkGW2zTsKeHBRVTWhijqPT5CLzZVxXgnjFUZWS8SGdhokkCFeTYDZxHTRaK2d",
  "key28": "6nsYDggX9FTG7fmCHSQ6feHbpqBK8ULVkPBNsE8vKTWVWnod8dPUGmsaEFZnaPL1sB2sxHNWwYANBc5frYU8eJH",
  "key29": "5DvVHoiis7yrDKgRAoXwth8PD44jmtsigEemQZKjAJrGt3aaCUqWezfHpsQMWJsjzmhPEzZwHbfE9hC6K765f24H",
  "key30": "5VTfQmoam1okSGWHCvhKwgLyhgSRswnc4n3jjzU7URdFAr27xQk5TS1Eb1zRNNX15RoBMAJ2rnhffyCvNnQ5CMX4",
  "key31": "4Pf47qZ8AXWs9WKx6C9iU2dAbE9zA2c5C28zzeaognj3CrDFgmqKNQ5KPidgYoKVJtQT2EAtpiy7meGYYhy3p2Tk",
  "key32": "pT1HcagSRDsVmmQSJXmTXwFt7LAa3q4BmT8trV6pdC9LCX1ra6qtJdN58XRQYbdXpfmpTwyTW34SQSWqtca6VmJ",
  "key33": "5qN9ZbbrzQSJEGkTi9ssWQQKgso6gxNEGhrALYu16SNs3T1mC7hU1MMrGQ2Z2WqRdBtBPJasTSux7oyvwsvCGBjK",
  "key34": "5GeWibGmR6hcYRHeX9h9a1ZERQdYySJgeWhbpurLX2aemHHdSjJCSq9EK3Lqmy7Gz8DyhNNuP15JNSEMP4tQ4mdM",
  "key35": "63aDAUyw7aRaap38QvMX5WxnrpkwmEqwN662jZTqDYoTAaXRSFYXzDxxfX5LKtShFSxKqScUtHkamNUyXZ6DU1pv",
  "key36": "kzCsDg8v5QDwAkKT866BPPUfLtnHRF4inMgdCYHHq4D1fta2GhyQSfWpPR4cR9ZxzWEhCfejEKrtCCqHy2pL8Hm",
  "key37": "4GJb37iEnYBodRAhZvQ3fJeQh4vsHR2ZF3hoAq4A45SN6ih8eSzEg16ELNxvsK9RwTCdkpAGRuZkATZT7UsNKpdC"
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
