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
    "3ZrwVoGm9EfJm1r74iwdttM7nbsZm5Ta15FjZHJtskzh2LYaebPaSmHTiRm1TFVKei8ESRxJVhAQ2Uz9sof11aH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RRWKcDqtRgxjN6obsn7avmtuRPHcEwGhiuUPpR2uzM36aoRmWkVz4TeGWszfAB9E6oyTkeLNziPfZEcjEu4SEGY",
  "key1": "5GynDAEstEmBPm4ZsNY9oY5m7zW3rk1HQAtb342QNArMfRsWL1UMWMyu9KzrAGbBEFSc6DhUn9iJAEeJg2s28VJh",
  "key2": "2QcZ2wWES7AgXCGdvSv2jcJnJnjhCZ4F2fmy2EuP4bUTsK5oY5sRGFwBmCTkiX3NzBLuhtNE93P1E87c21oNhvbp",
  "key3": "32WSLe7339LvsFtvZKPnZXd1xfjhAeQc7jQLwQ7FhFKAEWazahLiTQjef4YtAJJafqrWX62J7g5E8SvFbAWtTkto",
  "key4": "3LKM3dmbZHtEGm4G4LGDqg89CoWGmc58sfeXruJMtztciLDauoQDJSNWVsxK2d5GEANcQK5yXJYUKk4Ar6tzKx1A",
  "key5": "5qoiw8zFFFJL7P9HmUj7oDYb4WbPPo8NP7qvT33HQn9SneNKMCzMytsLuBtotPCaG2TehF4v8doSedKYMBJqu7Zx",
  "key6": "4nDwkRCuadKVWyhUFWdevP35PcnBAjdoDatYXjTJCHQiiYu3RfadgEjgCCGuQW7xyaKDV7apS6GAS8m9NEKrCAti",
  "key7": "3WUZ4JQGX3ACuBqyv7W5x18LJk5QV8hMgbpkUUqqqCac1rivUoLjwSg5DSaEZ759mKArVGopQVcS4eNRSKM1eyY5",
  "key8": "4EzD5b4RFXMXAgAq8mLSZn9FpE7C4pj6z93DyUkY4vr4RQLcPjMsrWVH4PAwSj16icp2rpfaSH8gj6gqaoMGAqMZ",
  "key9": "5CKUrLKhbbaQHFeiR7ueM2QFidCqLkziUwZcqph76STFuxFSwpp77X12q7J1nLYPF5T3jjw3dTTfrWxtNqV9XBVS",
  "key10": "67T91gabEBvP2R9Thmyhj6eWRNrss78GSTwf1Rx7mP9Ecx7A1kKH7cQo6XXFN61h8AVpjAzpmnaMGryV5CE2nSSk",
  "key11": "Ac7fkfvjKMUsomrDKbyGxBgtVEQWpSFdv9nwt4usyM54jqpemSNVSJfDMfDZp5YrMRreojZmb8DCSHw9WXGPCmP",
  "key12": "5BMyvtKbhm5mKamGDiS2YG6wd4vfZRWsrsP6Pmd467BA3FZjKsaBfTD763tru5Ym6KyJQH5KjuESjLKLRkHcLgk7",
  "key13": "4bZjfku1dfBaez3TPzqJhTBr9Wi2WWovrFmY46mmHVMQ6BKLTcvjb9nMhX9272mK8vrPSy3j7BFcTGj1ky5SBNAK",
  "key14": "4osyzmN6Bg4AK17VVVqvxKbBkfFtULBwnSgEq5ULKEsg3e8jk7EEpr5jDsuUhbRccVfaxofKzhMnFK4iZDAeoZKB",
  "key15": "52S68Ve3jRncFRkP8yqFioKkDXAyNFg7vCBofmBfawrq2aS3izMVdyWx2LwChLWn1yPdLqhs5VPCwyYttS5AiNby",
  "key16": "3xcaZCzr5zqmCYk9wukQM3c7dZS8pXYDLax18S8BRUQ4nk19nW2qo9THsfaLX1bQzbbDewuLYmuFc1VZTrhpkCAj",
  "key17": "5fvvDPym5AhzqLRoTAwtr7JzT6TadzchqqNYHVvvJ344qFqukABfBgdgh3Upydt8PVjHZBatMdJX1jH21XymyZ6P",
  "key18": "48Yrwvx65g66RYbFKMkW4rYF2LPNRiz3p13G5GygLBxZNQQN8Uu6UJrpeY5GDqroppmigqXhHifXHjDynYWrwBGb",
  "key19": "2MEiVrs1gdFg734cHhgaZUYGPej2VKWbWnrMZSoviXxLcVkJMfzjgKhyxDgk5N66JVFLcRTUGPPrRcFm9gtCWMQm",
  "key20": "Z7om3qyWCRuKzw4NpR6gRLsQ4aYoeqisCC8mZoajP9i8vGraZ7mfGXadnbTpQskca9xuv9FKGx7YKFbweTrz3GR",
  "key21": "PTNEfUFkeJEXoCe7E4YTT8nhiZmwu7QUXqAQgSdzC8src8GyHnm7T1LSDwutDiXUKprJER3aooH1WgRbvQpuHD7",
  "key22": "3iRcgSNATU66EKzXemrBfLNsB8XQcgQFYjwjXYqrCpXJEoNavi3kuhugaUTAxRLupUipGi3KUxCsr9vetmYRPSdL",
  "key23": "2DBbam5VJ8jSpM7o2NH9M7pW7d3ZQyrg4Y6DzTNsuC4UwzVr9waakqZCSTbqPq8jCmBCzfJwgpyiKQXi71cJ3JmZ",
  "key24": "4PLRBKj18xvWXA8ebFo4bqQrB6CMXx2SanwGvHgWBRUd9XHWsSoXvFYmL7MPHsjfmThaaGJuujTNkbaDUwzwPhDY",
  "key25": "VUCeUtK5Hpgsw9TKDy1ZdtSrQTZ5vsraYPSsyq2ykgg4Mc35Pe5td1w3w5UyrKrR1kx2NwLBXVTH9ZRmQEpaBTP",
  "key26": "2W417snNBdn2UGZpubL8Yxa8uj3mDexcSGaGJBLmgr8NWw5VpNL2AiUJwdRDNFdn5oTmBSWe3y65u6N2wqmKuUPf",
  "key27": "3XieVEUnELhiu5EG9PbhWfUAKz4K6asGm6UfzydHssEQ3zfUFvFH8o3t3L43mPBB7P7rNCiKzHEtaco4kDCUYQ2D",
  "key28": "3Up9CD9BrThibYe57HrjbRfMgo6L9Pp1iNNYnFjBP8CZetf5ZwTPCwDm4B66bKiCQLrnwuERkybavgH5NPXTmyGt",
  "key29": "2wQRJzQq6RrAG5Jo1LTj8Z44subz7b4kwgVbncrNtyDVneYJTMYaueza6Q41WgqaN9qDzyYFQFJvm9JoRggpezwk",
  "key30": "4F3fpZ6QAMUfPCCG5QHemyrxz16yrZav2ohv2yw4hEjmDE3qQCAD811jfpgBpKoZn2yH8wUN6oj3foxeoF3Q3Z5c",
  "key31": "5rG83QamsUmQu5mQE9u8493RFXCZ5TvnddtxmzjKusphSiXGqma2uBe4mxLReR2eg5yKuHf6KyHAvC4vjjHLabqT",
  "key32": "5WizMNzCNUYPM4LLY2vsrVXU4V2LK3paj9JjaUSJEzYqQQzmdYJQXPtSDsv5mBV1gvBYje1362xmw3VCBFBXxKo5",
  "key33": "ngjHekvn8Rojftroh6axKD8BHRtPZkFfNwR94sfXhC9DaWSwkahNSVu3uPF93J1U9MuqGj5KffrnxSYVKM91mrS",
  "key34": "3HgCr45nHjBdP4d2BXGbwDhCZBphe2ewq4c5RfscahYJFp1Dwp6aGFgyJXm4fy5q8eTt77dBrhT8XbQsAiThu6U7",
  "key35": "3WsihUK9Tb6VvybbPW8WFcqU7aar6iAK6NS6ehsW3RrC9btYp2xVvpE6GiGFH3PKNBHGtzjpJS1av1YkaGjWSvEK",
  "key36": "Txg6RSSPgu7DWGKq11BuaTczgp7V8cBJQLvroRLbqBtTsNB2WGx635GrvGUDjJNKnmv95rpCZSopX7L7Cyu2Uio",
  "key37": "22PHJf1DdgkkrNdkng4ZuMQsVFNHoBVES6Cc8bmVUv6gTdpbUTqrKPrX8FfojUuB8LFEhCRHWuV3DEsHSRHvy2Sc",
  "key38": "Bkx6Qa56sYEYsiJ7urfMNvV86f6HuvB6nE1na3bVRU2FzxEs8rb2Gay8STKFTjJrMj4YBfPr6UCNLHbaqGgSq61",
  "key39": "458JJwV3XLYBN2pHP2tZa3n1Qb56kFnopeZgZBh22CLgowJnX3xvTgLyVZkFchMkPhmJ8twpQx5oCGvQv62Lfprn",
  "key40": "5t756aeoEzT6N6Jn9qX6SYwDZqTwxw2gqybcAPnoNmUevACNT2CowY6EozmU5gbpgn49URMcPNv8HMPwC2bmtx5v",
  "key41": "2QPsbLPJYpaKPDfE1mnB1Vg3XRRmka6kaUuAvKTkxxoFb8Ms1xcm9qguLWQyHbbKuCySQuVdkdHQQcTxBEuynqnn"
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
