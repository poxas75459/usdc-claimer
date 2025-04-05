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
    "4aZWTssX5HMc94cXiwxzRHvaXdwDeTYUDqPQ73BgkuNfhS3A9y98Wdj2UdoHYpJ6zSWWJdELLVRLgFDvBmJmFb8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PegfVfK32ATKHRQ6w9T3mdzMaCcD4cAcH9Nfyka6KnBNbRQLqvZ13VZgbkFRJ9bfriytCW4irzvW12MGgduFsjD",
  "key1": "4yZ6jUZJ7WdwWMd4kyr3Rxq9yFAb1ye53HpewvnGzasCZaihYshibjmRbhE9Qn1dxsdSY2TBzhDquCLcMeSxkRed",
  "key2": "55DLZKdZY4NP6tTNf5UM9Wj5a9duU5XAFYP8aif45ZSXjrV96rJxXwskeq5NubJpk3WpaGTk8zoiNRbsHJxQyaWF",
  "key3": "3P8p4dJMqYny4GWvmFsVFt6n44WqVcBiLCvQJjE2ECCFpBNFceYUKYkvdJYvF2mpMLU1w6pgrB8eDWyDcyTpmN9U",
  "key4": "22L78Gv5gY1LGS9S9vMSVzssFmk2Ma1Jyc4qUrwmEEbjZM38SjVGkGsfXwCosBQtXTzWfLd7u8tSAJTEa8QUJkzV",
  "key5": "48QYr4R7UZSAd6BmTynascYc6iEkx9QksomRQrP3LzApR47VaYc6avaxGaanh5XQXGF7pc7i9fAjwqgtf3oFhCBq",
  "key6": "SpPQoKcoswrhDpTRJhELGqB7x1ghA73VzJguZBUC6XaRsw4eaDqpigH3YQMaFbZyAJP6ttQFMHYEyJ9VB9BZTHc",
  "key7": "5RV2rZXBFPcXxES6iK2EX32HqyjxT5Badi2SWNxJmUcvEbpnLXefYFCSSdnPwdNnRRf47VmJ1GPjJxph7Sbh9vvu",
  "key8": "C1Pg4Smo3RUrDFNTJvqiYBhUAviSEsFBnAijuk8dcfSdTfEjBjoYvGeEV6gWMeAojYQTTMnnhMFC7fVDQWboW7U",
  "key9": "5UnM9FbuCKwkrubJsdJGtuk3yCNfrgaKNYVfZQjbYBbus2XEbPMMGtwGpoHHFbka4HFkj7w2L6BKdydbAXXv7CEM",
  "key10": "P8LU5yVqjFzMNGpEjxyN37VjtSfxpr7N9qQh4AmQryWhDgGdiFo1SVjR6ixjAAwwusRuR4PgD3oaRJVBy8Gvfh5",
  "key11": "57Cm4rNNnaz2XtJ28gotUJVwC8b8MwATcX8m1XCTWGfgAngsEFGsJ9YJpURPc9twJCTNyt2j1tSPjoxtJKKzrBjc",
  "key12": "BEjAa6kBJJzT4zARpvtGgTd5D3Eu8WMv4z7ok7pnSoiy54YwBLA7zjwCxPped7QFz6iW9VBPcnzhckJbgnQSLPs",
  "key13": "5iQND8eUrN9wjBU95Vk5efyffgsSPC3MN82pH1EjWvjSuxXoFP3BC9G2QLQ6ZjQEezjR3vtZqoGjFgoQA4Mp1HUh",
  "key14": "6JvLqZGDzfpuVRNXfju5NrP9BVKowgB8BLRHxBgTebx9vtEaMREwi48AvRLamxvLxnkPUhdiGwh9XmtagsMa9iB",
  "key15": "LuQw5NSLxiTG5PQTq6QmGK2WfEfD6VUwwvh3FZe5ZMtpaemjTBcq727X3q1pFfcoB41KVrej9XthnYVzML3md5U",
  "key16": "w8SBypnxrEuSnLBtWgNMxsQmjigaBJvZQAaDDHV7nQ6qts8nLVqzUb9UoxPa2cQPepHc1Q8PkpSAc7WYbCAuBqK",
  "key17": "246m46aK555z5fZMuk2nvRWiEyXGVhsMgGeDCBLeiCeHS5pvxxxupwfNrMV6Njw1ps4vCRRXaCmXAcACKsG9QwkU",
  "key18": "4JALhy7Amku5SqpV5dxTVwUD5dxSsZoM6xryeYJVaoXWXXbcJKBboHkaM45SxNu8eWu2XpNfH4fCHVLjj3U7HPCd",
  "key19": "56hXYCdDZp6t8mB3MaP9YYrNGpsUgYRYcLzWfX3SoqtwmSyASXgdRZtUYMiX6WRJspK9RSrc2UY42FKNFtVxfDZ",
  "key20": "4KCrBL1m8njsCz5EHNmk8ibZdUQhRnBXxPp1fryUn2nPp11ZU1q88G9jxeU4GSNrXqPpXm54cWcsYgb3vVNzr4M5",
  "key21": "3k3zxUhsTgHrSD86WYD2UjuEMXG3jhnpnVEFshQPp3F1ZotFSp6aqzmoLeRSov8f5x17a5TTY5eQhqamWxjiQqMc",
  "key22": "4UPMSbXwkWr952j9fF48rYn3QWKyeutw38swCiG39ebXBinUH2AZjkPc3osAkbwf9ibS9JBmNdgBBhzaUUW7eR3h",
  "key23": "3uh4cNb7QQmtDumanwD3epkG1HdwtGXSAx5ULVYnTHBKwquZD8bMHyCcgLqrE9qFraNmVzA9xvdJgQiin3DPGVkR",
  "key24": "3EUZhm6J1AzuV1HXvYymDRXZBPk1WzX4FQsN6bDyiPCjyNVnFJDT85fdQqEjCo2DdjWawApYavgUb3SvGX7F7UZw",
  "key25": "2VyduaBdXVp3kiWue3QYDHApvrWzbgfoLoedMzis99sjCm8YsfS772r4KWhYRwFoi5JFidpBBxUt3chwzd7CqjrV",
  "key26": "2rcwDzkLBPfucDewszNBpQrx2Hys55F7mYeY4pGoKDJZZo8K4DUfFDaQXSv4v5hhtyutFFGSeTRTLNCfM41fhxyr",
  "key27": "449b2xFfCZv6VoWoqQE6tuaAGN7BX1eBZ7Ruksg7eWERHp7zeEMwtYZn8B5ZDZ4ZmqNrMnzDzg7rXtvSxkHtQba7",
  "key28": "5QdV8mxn394JmU9dqevx64Zy9tLYW41ELsszF7EkbckL7SBWfwcH8VeKdKq6mDr9yRaMtokN8kpoqKN12paUsmqu",
  "key29": "3NAdYqdN453SNf2jRvgMtrzxXKKj57qhV7MeKXWj8AEpTm6a5XReUC4B2g4hb9m7KMZTb3nNeZJD7tzpbJZDZbSQ",
  "key30": "2G4Rbw6zDL7oMxtssiCq8iWoggmn86BR1BUEXnkD1urvZg7wdZRpx2kdcXGv9khXi734vAy6FU8YADByMKN4rSVY",
  "key31": "66S4jGR54yawMwwUCaESBnodLnmC2YWu6DNL43wxTQAZDKUdVBVKyUj9PAJoqoyvp9X8S28KkAXDkUzjjziipKRy",
  "key32": "4K5NM4oGwXDJJBjkkVXP5CtQq8KSgsK5TZwiieTNC9s37E7P7uWw9k93XVXBBqnXbSK98C64YyRhDii8zE4WCAUW",
  "key33": "4Sv2oXCwvAe6kg2Tb5doFf868grPkLa87ivKeLzxQbL3VAwpgunvtj5CYKaVetx9F6LF84QywdyCd1ndqD7DSDVD",
  "key34": "5PJsEeWxe2oU9cCUBpfwcoddZ67u9caGL4dJk6b7x2DUcP5T4SZjNHPynVLe411tRCtHeSByZzNM7iQv6c83A4m5",
  "key35": "64teftTWUA932cvjpTy9n9wWZ11cHsa7ocYPLAUDp23M1nPQUfmwaaU2j64QtwgYha5r7yA7xCVqX8EAi8CNxaqt",
  "key36": "EdkDLU1gqFxTsx8UguPJLTsYdJQ9bndu3nEHEcoyaaure8tgmR3PvCD1Vjbioi45h5V3VdCA6ByYpN4zQvzrTss",
  "key37": "5R8Ru2vwV2RhEVMJkvDXC6NXkzawzxZcZLnjf4CNNoSfvCCLQ6BvgQouFTckUqZbUH5j58PczeHo4PeApLgr3kVk",
  "key38": "3orWvSAMHdb14fYrwjsyv83GpddL14Jv3FTGaRt9KwoTteRgG44z5qKtYXNTafa6Hf7PhxQfCZFU28Tcv7Z3KYMm",
  "key39": "RkmV88YXRYivC2NXfNq4Lc6D48MBgTpSjcRDeeL97je7uPKjbiXd33D3Znkf48yD15kyixqxjjHcG2BKNVQQwRN",
  "key40": "3YAenm4VY8DKKJroYhiT3ZASMA83PkDR2FoLjoHBDgBhzNNksqJkCDoZBCVvcybwfftmiXbwWP1iTPS1SdRvw2TT",
  "key41": "5myPJEB6jmo414kp89pZcPHT4XVHEX577f6CoUkyqPWRBqDvT8bhguo7RV6NttVwL8aKfXBDJsJJs8yqK6i5hswf",
  "key42": "46vUVxAWuUo5eAX1TCod9Yiy3WMyZgzJJzs5xejWssVPe9KGBSHhN5JBCiJwzdJZ3kFADPNz9SsYntm8Cdvkov1w",
  "key43": "4UiwWmW6tJXhEYpW32qveXjWsyY3WDtZZU6ZENW8XGXN8CUBKt4WRNy1YQBVgXAvYTuYkNzPCNehWJ1auab1HaCu",
  "key44": "4MNWoZTg9wYu6wJbpxtM793xQoJJtwhd3513aV1BfpsLbXzyE9b3zd7hAvKCu72aKExAN56QjA4u6KdW29Gw6CBr",
  "key45": "4RMnVXmJCKTuZKLo4gTKoKeZ5rhEuzjL3sc2x1MjcenLhHNj32DsMssyLxqB7h2nKjBZcm5yoE1gNUJE4ahf5fnM",
  "key46": "NoQ1DjeuUszbwd3rSVMPawpiEtt8xptVe9auntPJGrNn7s2bMwBRcUtjyWBTEHGzLg1DPNkT6bHBSfqq2kFEhXm"
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
