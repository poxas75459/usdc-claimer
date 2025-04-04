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
    "2uvjtS6yRBYyBPgrzgmGbZjwc9DrtAFcbZawMBeoMfBeTTDPYCBzkZjht1k11R36gPZLSi7ZzXHRDCdePGepDRvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SSC3GNB7N9DitzxD7PMjSPDMxgYg3DMrfpQYw4vfwdi1i6iPDjPMTHQVn6QTSNfQACHPZzfEvukgyQb9zVsfRQj",
  "key1": "5GxJFKeDkemoiz54uLq7J8TicQqDed7fwXNJffeY581ihVMszTLN1j9fWx6ApSN4FAkSipBfkX5iFbZ65JCpk4ep",
  "key2": "3y4NN4zNe7dKMxqnyKxbxt9zjFuAdPVUNEujiRcVGGzjJzBYhEVk75uZyGgzKAjU742qcVBXGnBQPBYkf7L7okvh",
  "key3": "3ULqoGJ1dBca8JvkDWQi489NujCQvkCxQCMhMv5XJS5nrYraVy9b53ktHhu5gLet8tR8EqwJKjKrxyBt3eJqQVZq",
  "key4": "PBKKNKw9AdZvQhEhNbzDbWaXwY7s5h9Ap4yaRUBq6kbqpS9WhE4ZnyDMDKf17388Bc75AU2tT6nhBZua1F1y3jK",
  "key5": "4XaNkRB5PXVnZTYWxDVNnVQPrHyikYN4tMQgsGREtQ1TcTY7NhJ73r2vZtuNhasB1G58KeriZTxwXJYe5fKni4Ud",
  "key6": "3AECQCUcgE7tHoPNWA7BZs5eGoEndUWdAfEeYoXuRwvRb1kHJEpRe5KkvHJuoRbNNViH15wCSHAoc8E7Fx3nKny8",
  "key7": "3uC3x2NtLWUKx6TowDQFxcUD6WvUqJBhoCMj3a8sgmjviynMpiDbb3a9SWskhnGuwDPqFV6xnhAqUYKSxCyfQbLo",
  "key8": "4Jej9HioW2eZNF2Csp2CgWtgLoCoynDigZ8ETviHCZLgAEoq4UFET7G93GuiRSJMpQC8KYAkxG3BjAEGk18AwfWn",
  "key9": "oB8MbWfKMtkL4eWwxuf5k3PQcA3mcomQrk8PQit4iJwhpqNY34x41UZrS4QzE4TXVAM7bZHbzmJn5yUzfPsnvCH",
  "key10": "wojoCSfPVJ7fW9RUys3B32KwM3FTkt8uA2Vu7bwpD7nMk7R1LSFtteFHjmqwprXMupD5Ke1ndg5nGEdSiZtx59w",
  "key11": "2Mfq6XtEj11euKwkEbSaYYitJRWQhhioUA3fbWxwMKriRmuJrLvS7XKdLpiN5hMCQhyhXE3yDug5pHxTLbBnGXsE",
  "key12": "2UiqZGEk9R29RVVd8QPkkiTia7qmh4EvaLj3ktP4BmMbc6bZ3qFGhCjS9JNFRpixYnLkt2cZXsJcmjywh6TsXjTJ",
  "key13": "31AMEg5sGUPgvw8h8gAFavwcrm73NF2F9GZ4JX6bp8j17nmQaQSAz3EBtsCYCx3noaxhr18EExbN7nDvtDnvAb8H",
  "key14": "3qnviDQ6MFUPEyJXe6hPW1qjAiFiXGbS9YtALDTXMhimPmN9kjL1DxW2MMmPTHU8FD1EArtrvF1VAoRELHcoRYrB",
  "key15": "3SY1ydF1zUC55trkZZd6sLRjkdL5Pz8Hssa2qo92r3EQug4izm2pfx2ftfus5cPBL8kcq9zyZfp7Wx4hxEdivuRf",
  "key16": "5M4JchFeyGKzmxdmPs542ZTPajyXEydffpy8hPeC45C4KwYWdLuf4oXqXMsNgooiHUXgZHQLUrMpob5f5GJsAqe6",
  "key17": "4rNE1ARDjiwhtWEzx1o4LVSy5jQJzgPPaN7s4iQ1ykUGGZWAVipoBARSXGHdZmSDwgYxc2o89uEJRXSh3Qg556ds",
  "key18": "5c59hssmhQQjTj8jnsz26E5UPFbDtUjDg4jrkJwTj9r6TZM8BNfzzpDNf7hHPVMWL6H5UeFkS5A1ypW4vfiKd18E",
  "key19": "33mbQhtc864fjuwqnZxpJNy3edFUJhTGMepEkezpxV6RETPfuFyF3b3kg7apbXpPfq7f22uhmfr4wWjWRSVNvkFJ",
  "key20": "EFUkHAVvqWB71voNLMYHMpTRHAESLJXJscwgURwknVe3t6jakw5kf5wrCJv7Raqj3PXK3QcowNTJ3HCHsyaoYXX",
  "key21": "9Ru18UnBYhM25vzsLom6jsbtmUjugxHLCmgyAHV72ZpH34YNTYGjc2hgfHAjuTdE52QLcEZDb79LvEHfdnMwqfF",
  "key22": "bukR6mK44gHKefb7sn1x4hJn2LymtUF7tgb3VFZPv9QDvKZxy1S4vbDp2SRYcQFLA3MzGto4UvuWWpuCJ9eNvMU",
  "key23": "33TVTWZ3ie4shbyPdmDhXZyF2mefEvCicdecgVJGRAoJ8nxFb42chcpCnZzsy8pccXeGzg78ZrRFnmicZMC62ws4",
  "key24": "4n8FvKEgkMfToKFHd9eJ8npq5XqPfMFhwgojxiHE9tNuZuPfTy2zhCe1eRjjo8q4dBG1ryyq25n4PxVBWUEZhpqm",
  "key25": "2tYmXj4FLdMUJoq9UKpjvp4WBepwGWhMUQjNwowRCxEvAZveZgvjQHV6LW7SbiQfK89oVswv3Hhszjgu9LmSJsLj",
  "key26": "48ZG1wW2zDWBdqR7x11w27Mn8nsdmi2Yu8qim8d28dnwnxGBUeHE4jMY7hDSdq9vyFWevvbKtzeFWStM5KB63E8x",
  "key27": "5SbLSAnkCe5BitPMZtWNB2FJZz4F6ABMJuFcAx3R7aEkgG6A6BY6Mt4JGuj9M676shz3at9n2SMoKmUV4WoQ8H6D",
  "key28": "Ry61WA6kE2YhGV5U8LV1vnWKLpxAB2iWT4aF6wZ7rtqv5pE97fp8MzYGHuLDMLsj4odGJQGFJriRvbr5GhsShWX",
  "key29": "5ZcD1zxupbmvApH6a4YmJeN6i1wA4D4JoyS8voxu4Uan7mWijvUC3qyXNHTTYfoZKX4dj4hpBBcnHdt2zD1apsSD",
  "key30": "3zw8ydpTHxXp2iS6Z2ppYre7fPFqfUJegjh11ipfwz3ozyJfraTG9QV2xkT5QRbukie4CPvR5ZvqxyB4gCEsvNSe",
  "key31": "2yrUdCCsrNi8B7ZNTbdtuS1M3fz3ktH82YdWJ7aWkeLXh3ZbE8a7utb9xkpLBFhhknyRUoWuBCV9yE5GmmokzjW8",
  "key32": "4YfRPgKYbp7dpC1SQZU7CT4Sbeo2TCBi3FZETJYEG5nB22EmxgEEs2DgBMgC4QaTKRop4qNVihBsRJsPYwKaeQqA",
  "key33": "3MLqW15Hn4rMoNM4Cgrh1MsXkeusDjUiQuyrPen7XXpMD3gvE2jEJj8rkozn5MwR5WFPThRbehCrza7gEmKagZjS",
  "key34": "fPcpTysPidGN6gcoUz1y9AvLskW816NeDjiZ7c92azzKZrrdPmvTCM9TCEcy3nRhQDHDroQpvUuspyM558A4QLC",
  "key35": "4JNEc4iLzx9LpXMrMPFmDp5nXtWCmcKYnNwFe6kuFjRE8W66uFNDv1fQxdYPXAxHb5j4bH7f43BvHXtSDgrD4VgQ",
  "key36": "4baTP6YrRrNNJYYH9wkzoPVzEq7aMHwsdrAbmecHZiXkUHWx4ZXoaEMwyeaRgicGRau4kHn7VA7A7qAYAYsYHeqG",
  "key37": "3Y9McEZQWSR3mZuQeJ7T6uyfe3byHAztJUSLmpBZEKKFckAAKghyXZGFfg7GHhqJtQED6FNZCf7GwkAYQhhFSJN8",
  "key38": "QkTnnNBrrPMyoYpbkMkWtRUSTeG2mwynXhRoz5DB6VFUDFxffao2KQuKNfCxvJ6sAa5xz9RnXB9yCXZ383hJjeA",
  "key39": "3WvzXrWhrx4oTzYshLmxUDn9x3VhjCgHATpZ5yyanvybmjMyMXSG791QxTFiKK1f5irWJgzUpZcVoNAtFnmjgMw5",
  "key40": "2SV3o1qoMFtWZEjpazkwV1m6FpkGSot5ryLXmirxNJWdcbnLgAmvEBVoVEKGefZpT1ssoSsi7CJdDnmPzwr5VrQ6"
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
