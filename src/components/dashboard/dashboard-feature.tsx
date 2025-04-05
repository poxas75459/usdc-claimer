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
    "5fJXizDGgqXGYGA9jmnLn8M6Y7EBjx3KGpDLDkwndoh29UWSTmC7Sf7yBNPcnyr2UM3FZ9vHVuTUF4yNoEC65zSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gAnvTxmFU1nYyjwU8JrWSaHcFbyqmivxuvVQ8QpNgxkPgqwBYWePDg4C1XVaodddz8o7j87GrNHdrcwMRaR2WhH",
  "key1": "4ynBkAKZoccx1VFQrFRTz7ecRjNBwMTsNeW4d2hr9rSJuvg4DLTs5Fk8LLJBFB9EemoTpSD4RRn5FiyTLMG3Vkdb",
  "key2": "LA9vA3KCr9RR6WFKCRyQ7qWaGYtivyrmGEz294J3TL9MKMfrEjkreyAEpRKSu9k7KdBr1cmtasF1nsAuR8n38Cu",
  "key3": "jHHquK2An5QVyur1mhyrwWxzaH8WDbRK1Gdr8gNBUc5iMAg3hLrC9uQMPCB1jPjqDJ94RsFeTXg3jeaYRC2fmKi",
  "key4": "53sfCwmrsPjYnnAcDne5uqRcJHrHMQApuhagsWf591k2FQJgaxDEmMoQB1hMkLtEF1Yy55unzasoeRZSrfztRZ8a",
  "key5": "3oE4Rf855vhyX33a3UrWJa8ugUMVn3HSuLimdVSujga4c6cryMm2PxeaSD2iY5dkRLq2G1BWtFAafQfqaj1Rsq2J",
  "key6": "T6hq9AfVdpnwqdWGzcNRjYfcyFfJKbiZM3MJ8BeyJbuqo7jKeJCAyTxGUmbr4wM3qa6LQnhSz9f8qvL6yr5Mci1",
  "key7": "42j2dYWJ7WyEhjd3umLiky3xWWQfgrpyU2YthE6YhiKLVGu254tnTQUCRLpdyfRTdJBsLiaXoqCGrt1RCG6okKUw",
  "key8": "35yWZbWFv7KWpcE7BDjc59MBphNk23vmuVzwSSfBeYn3HBTFUREvj1RM1SBp7tuesaHWxxpZsxNT54D3PWyehuBS",
  "key9": "3oC42aGADk9ESY1PghwxHWzV2WZb23AXMiZt5nxhvgjcMYgGfKE6itR4ZGPux4bYzLuvoKqjAtcj7Dt2suQpLfq1",
  "key10": "4YWcWn1MZfdy6TXu3iMnYJqvjtV8dKFM1c1UaKRnvN5XrKpJ5wAUBGeaygPsg8eoWqnfGcj7yi513axfGb45qaRs",
  "key11": "G1Py2ZxqMMjKA2TjHuZM7dkLCGQd7wftkPMuqRTmNmBx2BMytDXD3ka6VukmYa7nPBYwpyekmFfsKrt7yyiBgYJ",
  "key12": "3XtL5HR3Yy6uViK2wVfAkBvXuQrUR9fbsMuzkspTr6QiBZNREMUnjpB7uxiL3qj1yZ4eagP2CDMJDjnDCLZW1dFb",
  "key13": "2gdWC1w7b5E2hssUVZbDDNJpiaSMaYD5GYbE44vJjK79W4LtUQM5Y2VhxQXqTJJmJkPMfgyXcz3QFi3weRutxve7",
  "key14": "3fucx5VWwymU6TKKL9x8gGHQDK5xDeQVYzkciwS6pciouBN3MgXZuCpEb3NPxvAGfoWWsez3JrEomN24uA5RG7Wk",
  "key15": "37VcZ9N2YkN5VWta7df2GfLgzYEbCs7NrH4hueeFfFR1FYr6MDi1UQn4XWR8ESRnqmEZpc1u3PoX3fmzBEgYhn4A",
  "key16": "3taU97L7ji5dUsYB8nzFFYTuTnBwTBnvXTh4Qxkb3szSnZqqQ7NQY7mevVBDDPYxVYeYaf9ykABvCYoZ2gAnrcVX",
  "key17": "QLdtNRFECiVrX6kFL8sSyYsSnzgZe8HvqyTqP11gqatn4dSLWRcqUtSN8uyJ3S2ageHvVwva2hbpvif3MtcGoKz",
  "key18": "3Td9gaNrmu9aA4YLYHYrjxtdGkG6TY73uTF8xqeTEUEy7AbMBPUfYwPyqwy6HoQb13yGeANJscC49qHFUHqYvYGP",
  "key19": "5tLcQhMRkmZSxefWo2egwaCANaaVXSYajaC1XNwQKir4qvURs1j3G68ScrBk9F7yNG6wJqQdznQmKUQN47TARd24",
  "key20": "3jJRGjE3veVse5eqXsz4pqcqngfNxd3mhSdBJbWrFfsrpB8rGK9RuBGA1LXgqBpZ2Kycf5cHbrXLKc84XMfYMxc6",
  "key21": "cV7zJrnZ5LeUcv4WUN62qumvvT1JgWxZdSum3dQGepQobscpsthMxSWa9XVkFd3cXzV8vL4nAXH4fAfqNqmqrsS",
  "key22": "bwu4QDViFXv5En94uVmza38RiaQKRKtiE5S7aeBsgiMAAbHVT9Sn3JxrcfFP5dEUsaqrJuiHuzxk1day1NuS8Vi",
  "key23": "5esdg8oZT3c4YnReh3TmUkJhRYdRC93as43oXxLH3eD4USyBpgJQD7Z7zkn3roh7GrY9iABP5hFVaV5YwSsMZqE8",
  "key24": "2cbFE7kEX8k92zJAPxXnLHQr26i3x45cLqSJ2bwyiNNZpeBkikbs2KCCQpmBVv5KAXo9fRu3MC4z94pL779aycUe",
  "key25": "2SJzD5X5scSjYQ6RdYNkYCXotExgz8jN6D5GPZq2YpvDLGnPAsZ43jd77i4tQQY25tESVLgKQgvQy7U779Q6z6J6",
  "key26": "Xfw33Joa21RHqhJDt2HLiVbFmhAaZXDhLH7t6Z3GgopfuGZxHHqUt4ohC3QieySRFNi5RQCqA7NCiiyTBx7iqED",
  "key27": "3mrSHbEaonj9Qypt2KEKYaprcJREN781FD9U1K6VqjMuctZiAxurW6SXuDjkkMk43MExt9NuJr4vdc71w16wP8G2",
  "key28": "2n45bBM1LTTGy49DMg7iTfRnbcn3ytHqDcnGuJ3kSiSKeSpnHa9v4n8N5XEfqTV9LitqaYQAmTuquaEzzunVP5Vf"
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
