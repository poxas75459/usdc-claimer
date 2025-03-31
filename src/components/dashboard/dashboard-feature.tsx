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
    "5SWLqwXKE4ZDjRz3Rcx3RMiq3BDbuCFpNYXbsHga9jTRVwGQmrBzZ5q18TvaR5NoHnoBf7EbFKH5gwm7aWZNxZcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HGmSe8x3Yui4g4Rn94m1wSrey49t6ZmfrZrAessTtad4ndJd8FAZwQNHZVE57zY4qJXz9nrnfEnAszBC32fwpcw",
  "key1": "5WfksLubKKSERkHZuQPGu8pW7Dv2yMKmefvDYNX8cPx5DW1P5rXjzxg96PMwVw7idQezJ4KP9uLDjJYXAMXggzUU",
  "key2": "3zbCvgpswJFkVnBxz4N8Q19uvwLFQv8zfPZSNYwBsUoUS1UAAvby9RxP28FKqWwKtETJz4iWvzw9hfzPrCZTpCfT",
  "key3": "J1maXsRmwxLMi8hajP6xvRfwxVygTiyB1VPvwCLbAidn69WZCfutUXFwRkLh9SnFJKT6ArxrgRCZENRaoYsR3i5",
  "key4": "2SyQSjMSNR2NCa9A2S7NPoEA8vDrEeJnVodmwXmkzx1aonzjercq64QoZXhjKirK6ncH7eso4DpnsYJvXoZdkgKa",
  "key5": "r9JYqXgBpzNroJ4TxJ2Xbep7rYGZDQ2a85f41digSyBh612ukdYD2V5XnuCsXCwtmnnfGvy34XAd7tET8yMNPdH",
  "key6": "55ZyW914ZpFBL4P2EoRfoUU7oW1cEWKPLy3ybSXT5MX9HS3BF9fnawmZoXn4RxtL6gkteoHq4qHCSFwyW9XACwTz",
  "key7": "2c2ZBubRRyH4E8uCn1NTY4VCzwbK9r5BPGnckG4e4uAjEu5ed9tRp9KpFaGwE4mam5cvQsXMbDen4xLb1KJJurUA",
  "key8": "63n4wVRns85iGfEJYL3sBAm1r8t8gh7JGDK1HSUE3pA4aNVV3v5o2GvvgG5GwbjW2a7nqLEijh57SYAtSnWizFFo",
  "key9": "5C9CkDubW8urNBoNtkbpnsrTNkdLg4Wn3MBfzQz5fBkD3ifxxVKrGePs3Y3ECJWji3rxFjtque3rTiCzyzRS36bW",
  "key10": "565KoKkCzkZ8kGgkzRFuKK9Vz8ss2VoQyTfUCgRKKF4vP91UeNtRyJm4zeFch5VkdRH2cEjk1oDEUJdQF44eV84X",
  "key11": "41xdSXWu6vk28ksLmecGfTA68CyyVNzwaa4bEDLS6oLFHNhQaBH5a2BUsG2h1bqBRMtxVM172xJdRXahBwm44Vqj",
  "key12": "5smdc9fuoHd3dJiPvTAFBW3AQ4z8hWaqN7t6s23SugaSxczezxgspZFNXogZSssLgBEs9zKdnKX4oCPzPid4sf8y",
  "key13": "5tCrJYvsYgFEDJf1oiWkoBqFQfGc3S8q9RGd6obE7hb5tWZZSZXkxBeb5r51nf9SiBcbJFmtGXaPWvXTAots6RuL",
  "key14": "tVpyWUcqTeSNbjS5HrnX4V7ThqRaRWcDdDLGzpcve71hDTJbD7hmP4JGPHbMWnVxzD6Tk3no58niPZB6p188E9z",
  "key15": "2VRZzW5feEH9Hk7JUrahC1EKoWdgW7Kj1MXS2cKXE4UKSX65MAsuB6RswhWq5Yr26kke5HnCWfBZ6m9i1ARvam73",
  "key16": "5YKSBZ6dwMU8pH7mVMnYbyTGyXDdR2usjWK1j7nFDuosPQiVyx5pWB2JPhCCzPXjULDcC1HEUEo5LmtbAC2W1of8",
  "key17": "3uqTkoveZqbzT5WZbFfNrnLXE1yX77JQvjP6SwMfc8K2TR8CZoLACeQGqk7mqwo71DHCh7EtJ6uN7WXRe6Bi83HX",
  "key18": "2A6MBejmGZHXPW5FznJmf8Wh2qBE7uhw3BTsFnehTK9sZ9CMWD1mCWQi79jMGHWfEysngGfPmiLEZtzNQ4hgNAgM",
  "key19": "5nj563qfBc4ggVio3Gy6m8UbZEggrPi6eyMrCLQCrdwCLuZSbfZWG67tr4iq15aRRbY35QRqm9S8ADSaZQoXaC4Q",
  "key20": "2WFBpFK9aV7NdELGxixU8xREcKhbrAqAcaGxVyqq6tNYJSdSaFdqcZmNhEXzVfukPn3f3yCyan57WKZkSxbXnZPz",
  "key21": "35ue9FwUgSV8appor3y4e8XEyMfZ6o4UX8ZRrK8Rorfq4yBjaUG99D1tmz36dX9fghs6endbLaGwoksivEud78Qi",
  "key22": "3bviKzuC87Wr3wtL4XLAYMzQRsYb7KvBK5jPx79yrLcG3UTGdMthnSe3sYGkvYusRMfa74foFkneYGQZssHNa4aF",
  "key23": "AE4vjhLfDJ83ZdjZVCRFdGiz7MK119B6AjSF8LhX6uT4XCf6GL25JtyYUgNrUL8qMydHwabjS54mfR9uzgM797c",
  "key24": "MhTFep8EAfCMW6pENyoUVJQKzyAhRM3KditnrPtVsh1Zzvc5x3E2Gkm1cZm2PPeWdD6JziXJbejRoAskYUQGgnP",
  "key25": "3s38tkZTFEZmnqoDou8cmcDW4Mpzu8ifF6vN54KyAV7QF2ukxbMc3A8qBgMPD1kb9rNoBrTQmz3j8j1fof46PeQv",
  "key26": "3KBSGq7EppGwn3Cbt9qsZFVjFA9JdCBvm84cf9fVwxCP3M9wGJrdeDCoX3ZCHHyePMU2sAxDKTHa57aH8SponDTD",
  "key27": "57gWEc24ZuBv788HUYmxVzAtNAMCsn8gbMnaY5NgEce3iDQusNkxYfgEubjKFfJKJj8CYF5SRQgLxFU7CvQCBwnr",
  "key28": "5uLnxjb6cVJGxjMW3yT5a4kBCLshrYcjoeud16zNXzaLyByhygCPMYFMoJY5wZZBTSRUTWsBN1oarsosPYuBbiEe",
  "key29": "47Sg7wxpP3MaHnhKnjTJyDEV9JKi3QoZnEGaW6AdzBHGZE7BCFrdWfRJoXDLpk2Q3x3sv1LQmd61sgurFfje3ZXF",
  "key30": "5Vnq5oLLMgzxsxTJAEdmZ1bWCdaV1h7PzYK6fdDrJGW6AxthWVTcAepmqe72AhQQRvKgmwaQA3aB8vNYj33Qud1U",
  "key31": "3oNPtiW38tK8KZLgXZQGZ1fw9hL8h8RtGCWLLHupsFNis9akuKZP69km6F68CvcA9VPE4A6ncUatG29kvTt2hRLN",
  "key32": "9Vi8HfKdmkxnSv9DgY7cyZUzG6tn1Y1sVSnSz55HWnpiEoWsm4PXHZN6dJ7jnBuUEmjJXDnmoEYJRPQFGsmrYGn",
  "key33": "3Gwi1A4vd1ZBDczQWJjrpMKHC9UvtJh8dKiyX2bEQaidt3ukkEFBBS4jg2JRsJrBYmhRWCQasTwCneC16Nrv4Zkx",
  "key34": "5KQHd4EkfgsWzxqPwYC3yjdUrjBveSMBA49tKrRPK9F12YKyLkkDzYyfYWaE87L9Ba4XJPLgxMTj2CqkXhDecsB3",
  "key35": "3KV2feiaVhemG3raoes3qFdwK6GZtFPqh6HjqNKmeWhFf7X3sZMY9K9AhdGuvpT8jR1kq5vnrVcNFywpqWd4TCKA",
  "key36": "2UoYAb5bA87xGKYZ6sEoM1dquE7kjpqdSCRyK19YqroXiAgCkSCWSHCPkV3KAQxDQkwhk1Bf7Bf17nJd6CoaMTT",
  "key37": "3T82s7i5AjraiE1v97QxefT5XvnordLZwuduQ3riBjY3oEymijFCQUbu3yf1TciWzFdcq2EVhgBYVy4ufFTCKHvV"
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
