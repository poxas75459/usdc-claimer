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
    "4Khcz7DNN43Nzxa62PWA9Z2f6ik3upjMDewFG5yEacGLksGspcPqgwvgoDbv68FdNFhP8u5yzRzp7RV3PLacR5Jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C5Xa7EFa2ccxAppcbU1J7H9ozPoK2ScRBu6itMDrGadJCroJi1F33G4USK72KCMEy1N9rkFdtvqhubDWocyh8RQ",
  "key1": "5cfGoyPkqjWajgtDbJ9e88o3Lt9AS2mzHr1jRMs13fb7FA3DgbTAZjFMU1SaZr1PeZBCDskodzyFFd8U5zYe2J1x",
  "key2": "2fcLu3Wt3dPqQxm4NtKuEjejaM8STMYXmrgGcBH2BrEdKJBJm6NLCmzyNZoTyXC4gSAk9tMjP9xE78gN1aXLFjEE",
  "key3": "2d7dhGE7PpkNyYkX3XjphNeL7Qbz7ahmCjLeiFqestUZxuHqCJPdjKed6HXgrK5ErNJ5QD74RrUkpn6rLMYd6JZr",
  "key4": "3ifg8rMpmTAf6EgqoGvhCEsEPSZ63WnJhdYAXxMmsc8n81uam7zkMVtdjHgFUT5JRnW2ZgBaGFPH1725uEeRc1Xh",
  "key5": "3vBRE9cTCXU5cKT2ouHh9MxK1ycy1nTPfdjwH98fWCrRgSbftDNMcTqUXKDHxkf7LdpoECKRQHkH79g6n72e2Wfz",
  "key6": "5D2Zpyk1CeJc6w8oQh4bSGHjjAE8Jxdj59ZabYHRAwas7iR3Mz8TDfs7pA3zpmk5hx1TzvyU4PUebo3djmruyMyo",
  "key7": "2rL97taNNeMtrBXcLviox7cg66YuhMcHqeFaZuPvq7uTXi3PepicdEZQHroGyGFPNHgTtaaVLURnoGcVVBwHzqbR",
  "key8": "5R4AMX8C5yvvFpwUyihs8Yurxnzggfj4pHnypnxnCXC9LsvpVEbaqTapk3e8PviAH37PBH3SoKx4rEb4Xf6cwWXD",
  "key9": "2Rm5MdugzgaUb3U9qiYWpDp5pD8FagFBbb5g6kVhfimwq8Thb3PaBQ2eoAm6w1kAb6YKkTraSWgcJXFDBuBRa62p",
  "key10": "27PXUyPeBYhLeXx627UgjijYVpQ1Qw7fo5Lu4EL5qw8XKEo3cF9wT5YGitekmRtRv9V3bctcHcd3DQV11fiWTb5B",
  "key11": "67NrKNHyiBpmUFx2XFMuvU4fHB8JQuWTmKpPLB6ZzS4MeMV4D9Q4U3wFHuCg6CzGLjE2wgPzqBuom2iV2hKBkTvr",
  "key12": "2BzD3CcdxuEs8Cq3xX1KNMd7aoVutLRreFBdUQdXNFamsKM7hmvR6o3QRe6wKWVBapogTnNDSg9uoBSppsRvSvK8",
  "key13": "66nuPTCia26FXFhiyMX413Mfmzi2zH2mm9ymnb9wVgTxpfQHhhrjbkz9E9B7tz7pQEHCecs2EZarKttw4VyXdea",
  "key14": "QW8vfFsBT4LBB2eBRjRK5A9v9dPRfnCgvsM5L9Rg4cMN5XjcFEvvrGXBFajs41b1jnXSQZFwaRGkYjF5WQqUUNF",
  "key15": "3zR9Y4SigFGCHTMinh4RDANLPfLyzFSnbxg7yXX8A7TQupGezJokHs8WeHmuMApo2aJjSndDpi4EYQDigyCVzhC6",
  "key16": "2ZKWZoReFdpFvpyxvk1pzJchEBWAMAkdfcCA5HgtMrgUGXPptJaRygtSjKo2f7qgir6wEaojDkAKVjWkxTpqbaAe",
  "key17": "615NNZg7JSQeynBEi1R3ZdPcqBUnLhpBxTKJBnr69JST163fAhScwzLFUdvp3fcEEMQ9gi7RWofXqaAJ5EJGyYkx",
  "key18": "5zQp7sMzSFH6KogVrQJWKmg3X4BgYKH6i7DYN4FpDoTeY5dYV7ibPQJDCYjQXyj9YZtFqkRmCBwWfPyDbFtrVuWX",
  "key19": "hdKjRvsgEg9tjeiiWpAK16posyGZYFMjaNSW8EGRKW7GNBy4cQ34tsYeYNEUzQUF3Hcq2pU7pModwLaxScp5ZgL",
  "key20": "2zPYchVjSKGkomLB5inAQNbUH3BXzBu9eMayVxbEbrk6nhHLHuPTEdw9deJ9TsB5zB9ayQ8jyy1Rd5zH5ERYGCy2",
  "key21": "Ugp52f8JuhxjDBPLhGSaQX4oEVYNM78VRPvG14Bp2zTsjGpUdLPho1TsZLCThftKfHMgpw6W5bZauS2yE9uQKce",
  "key22": "ymKEVnTr5T3o9JnqnvNFygP4nwb7x2By1huS5oxt6GaDVgihhdkrUzdZE8kqtXVVkikDHY4p6T48caHf5dtVGAd",
  "key23": "3Q7M4Hp9dksWiu6ugbKcPkC63shue6sHEazzSSpMZp4bRHvqNeZMzJr5bEoMDaCFZ6BTvze4i7ywvbiqGF9aedMJ",
  "key24": "36QTXe9HzLmC6oZeBUFRHF38wT7JggQEdLiJPe2sE9F9mSAgYZHsVhQ2mUD2m5Pb9viziEdkQ2VE3QMVVEkQ1Zhd",
  "key25": "2WR4MTizJM6HvCbZ3WWEyC4nTkR2Tf51ujLiJG3ynwhbSxSijcYvb53jpXZrdfB86u9roUmzPibZ9yCnma3W2znj",
  "key26": "5uusCV2MQTHMLTapeHFrtL6hjRzkj12ViPRGivAQDCPxQojPPRuuykwN9iQLneic23QGzM65ughjFUjRCCmfL7ju",
  "key27": "5ZuFdbBLtaDKHgsPUe6faZD5rg5y9WS9iEnEyH9R2bSZn9wwYcaNTnYFxbzpENBi3AM8HgstnCbT3Fm4uK8mHBqa",
  "key28": "3Bk4P4Lfe3eT9t8oqDGVXLpG8EUEykRuYXrs2UTLPK7PqM4T9atCYva4LJSGUKGT9ECxdm3oyMbrLQuGY6nj8LoF",
  "key29": "zFHbdKgoowx34AvJ6dfcDqoAQn3o8qtsTo3SyuK2nvhVihYfyDdpqhZLbn6PPaKJXTaQjm5t5RMJj2mjjegHjho",
  "key30": "4eQamhiHkjvzHvHYjEE2qPvLZLoAToaBc8DV4a8YS33wz25VTNhGsJzLp8wTBWDnyU6FcjfphE8P4vPKoCsanesF",
  "key31": "2UCbM7YzovdynLQAU6qdVB1c57YPFPirc3HFDfEMEpb1KgSizaQrk25ZkTnKZ1niuNkwbyNWbGYx2jv4yG65fvY9",
  "key32": "4yWsNhU7mL2X8L5AebyagpSbAgFMEqh6cJQPBSmr2Qt59QiGfUzc24VHxm2BfyAbNgt7a9rPXWRUSwgK7ag3Ms5R",
  "key33": "4CchxTW18gkcr815AFB61PAc5zRz7AqKs8mn3MBxm5xQFUXgEsEzmcq9ivWZvyqq1v4XbKU9ntAdmyKqUnEjd1ez",
  "key34": "23h1rsmgK5K6KxuBq7xJzmyCp7kWokt9BeeTBrvnFmadVfiRK1sX7CnhhHr2tTjJ3LrHqdnt4rbmNKymoydeenYk",
  "key35": "37wUdd6rCotUFY7YRkYLYfvtmPGdeUdn6pXpu3rkGX4bjNEvwc8eR1gqdpFTJ5kNDHx5vH6VHJHrHiwWjVqxFx6R",
  "key36": "23n4WTgD1XXoi46hXeYwCVSQybJZq67GK65thvk8bL98WfGmGEWZto5wN5S4KBvaK9M4quhoRCVfNSFFxz5KZQmZ",
  "key37": "594hXGGx6SqdPuFgYT7Tpykumiktob2YNzwzigUw3vQmM8DjXYBzK6rBq8C45FSB476EDhr2o4Q5Tmdz7hUiANfB"
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
