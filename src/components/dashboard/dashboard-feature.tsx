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
    "5MjnU1MW1puBxEYXhnSXjPHGd4jhP1EL6WBK9vepiPArxxC8HRmKUt5ZcHf22dDSsq5e44YG6yTwycoXZTdNDi8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F99mRUfY3aurgnn5MQ4xd4WDGM2CZfpDQCgkAxxs2LesM4e7hXuGAsrX3vBC34vBm4weLCJQaRGtyzFeJk6Pmhn",
  "key1": "5x9aBmV2T22UoNrmhSQHZfvL65tVPCceyVXDra5MZ8HZnokkrBQwjxgoKXGWggUxKojHLAgXcDhe2Xi4Xmvxd9tG",
  "key2": "4veVgSpERArgFP2YF5NurXHwCvuRfr3fCkQ8fAb9uYmXBY1jqPXQxG4DfPKd4MArRZ5PN3NN7hCv32f7q2c2NFLp",
  "key3": "TjuwjMQSm8WMQox4KcHbVqmRS2ThFpZG5Av9zarASg5q9iDjsSrjHsZ6CFeqos4ZKHsoF22owvmy4CWpY687KxG",
  "key4": "neFLLzKHCoqfQL5ZLWtRijNh3E69MyjK4Qy5FmK9eCv37HdeDCkVnHXZRYZyYBUyN9ftL3iQcnA2v6XukWg1o1a",
  "key5": "4Jhg1XAr6e3XoXLJDVWsNXcEh3bHR6rsW37JNgAgChGQMPMXsjU9K8Nrec6voTZK4XEvcWamcPpJLPpdmxNZxjzX",
  "key6": "UNqYtsStFhPQQvpX5tPbVKdoKikZYFa2vLwsSNtS2iNrocH5qomDyDPEsh3j1ih6XTrfvC14HD9jVB5w3K2Zzqj",
  "key7": "xrdokEZtrJM8V2cPZnt7nFEbsdeCF2E5qAaZMPhkeVhafnrmTcaQY6xQ1jKPAh4vrDAF4JefD1BRHkK6o7S1JEg",
  "key8": "4YXSYnHWKA6vzkFmB3cQXQNuLUDMKGYyRroWyzGh8yfAR8BkmNT8pzfqEmx8HVtASLVFYi3fSLTpmRjRorD8LU8i",
  "key9": "5pDmZDjFqXf3KAxb82pE3zcKHhfudv1D2LaMrcPxUws1ZkXj8DAoAwNzDkyFP2v2Qys1wXt2a3Np7ZUdnXsXB8g2",
  "key10": "44JS5FSwWgrP2cYyz7WBM8kRP1jjMLbdmGbTzYhtNgCSgq7c1bbKLFFraXsQqq3YawqZwTy8WuwxdXJGLhLL1Ujp",
  "key11": "BdHvfpS6wJyJJxM78VauuP7qieExh88C7mokXgmmxdYGYss8vzSDVwNK1wHpSc5bLcYMNBhHVZKFiboaUw5mG47",
  "key12": "3N66fiAxFxsXbqHH73ezrXoLLjQJgCxHodAz1MRpZJBoZEChTZSzufAaoR9wNVN11NjBW7EDK1ZjuEUoBsoEFVhA",
  "key13": "5htHHj7kJyBULXENabWXPyBcBqKuzePvGPuiiG3g7EQMtq4vseFqQLJMdx9te91QH7YAtTqWqLQJ2nTXHvSwXNSF",
  "key14": "4V56dPYnHB5LQDNBBkVmY37gidRDceNo2h9i4yk8HyV4msf49GMtNrgeX9DXrVc1thA6CVZBWuY83wGNTL49xW2q",
  "key15": "hqQHrb2dsWybXWv5CE19izN3qFH1UBncqGyfzZxNDmma5unw2SGrq2DnZxA69C7yb8wyb8PdtkZM1zhccU7rWNY",
  "key16": "35K5T7cNELhioCrJu2UpNhAfhqZB3SpnSjPmKptFTJ7mCK1EZxo2xM3TsVopyWToys8YXzXNXZoXC8LWTqQ6RyUe",
  "key17": "21A7emEh75o8MW6LE2jioSaBEKuQxwxopgXA4DSe6EZM47bHdnd57yDiFfzjtFaXdzyXuhxNHXRkxeLpyfiLcWmL",
  "key18": "2FpCJyU5pyEpEpRqyNZqRPqjH1rjtsK8r63ueeGijNaCjZpv3zCBU5Dg1wEScpTmHefFx5498TJeCAbB64LHMsBw",
  "key19": "2ZrQo57gYEvqiWiUzHCqKqZSCYhWFDKDgHqL8Pm8Xd2h165No7y5F4nbKmqagiq7tEmLe3Nz55T5BGyspuXRcBwy",
  "key20": "4qALkobPttrd6TA5vjuGuGwtbUxhPFe7BwUw2QoDF4ZhoXhAj1oGDc31McgdeUfe7cXkTQiDoF411FEWdHANJ2xt",
  "key21": "4SVpM1MUimkkjxG6AGggZtAK9n9W2TmJcSgxbG8NFL2bfaBsMzpMN3RQGBorXvCzcNEeiCW9ujqazf6MqxcfGQzy",
  "key22": "3pvRVzTvmD7hW1WekLmUNbCTScpti4mkUkXeDXGxgvQSQQDMKcT5BYuH7TdWaYF5Ww75b2MjssSLnisfHZNHqVSc",
  "key23": "4xxLYNuYR8joXNXB6JUeMndiZiSERvRVnpXnTXFhKxKdCXCt2KuRH7dLToxKJe9D1bNSQT8ZAHwCuY4km9uSWugc",
  "key24": "2cTe8F89JtoL4bETXuab6E1wstLC4Qvq4LX59uYrTSLsVrv75MKARzGCPnEainiLRLAaNRA76NESReN6N7X4SkiP",
  "key25": "5JoPy9YFUufZdtuCEe3oYFSoGTNwvERj6jMia971nCgFaFPFm5T1DhRLEQERXTrJJMeHPuhP3uChb3zCPtZub58i",
  "key26": "5bi65P4A95aPfaCMQKwhpqS9cabzRv1fr572MuQTuTNXvctWFe51s3tRdmyhSCnmZcBEvcebzhD8dhPvVgLM5KHS",
  "key27": "2W4cgL4eTy4WUEL5ezDWZv9pefgbWDXPfhi1GztjwobaVDi8LNHQ1EfAW9y5gdgnc5yyiqLRDwUeRDTLP5apBNf4",
  "key28": "5fsYP516gCR2gihH4GxSdVsnMqi3miXyAfiYMwbbQGH8PnDWXTvRQpwG7vYsHiyoR8EgLEt8G46JjTRR2QwP155e",
  "key29": "5iDsa2hBvJC42s1tXado1FY5UR67je4ruahSJwjt2LBmSCCWwTY39J3wnsevWvdSfk4HFz8SPC5B1hsZ66hZ3BD5",
  "key30": "2MUoWrUvFM4yTn5ENPbUDcpajLuCLGxRRY1v9P92jW9skcy2GtZMpsYhXs3cca9G8ode6kUr9JKCu4eFy3NMVmvk",
  "key31": "3nV45XQ26hC2KpBF1xMgK1ufafBLko2CCvc2JbaY3ajpJdT79s2Rv4kZgMSodAPgEauKW5egDqoGqEpzT9g6EeBf",
  "key32": "K97k6VBxVds9RFtfzoZn2P2qxqeb4bJoUa84GBNLeQd2AKvRYa8MvMQLj5qxiudtBSpc7vYjRSBLod6freows1p",
  "key33": "5Xt8baQoqrFNkLevTRVgwDeZvY1cA7biSdUs5ZgVg88RHN1mN3EGs5KACJakjzNUe33aWA5ZcAUhX7LUBjGCAkrw",
  "key34": "63uYKgUYmTpVkqcxmPJNc9zfqGtyKHsF34rLEbhi7DVmKxitmfFykQCMpurvoxx88dohfjhTdLi9Ptehzxidtppx",
  "key35": "296mHNZURKPTmF9KSy5vueZ3Cq9u77ya96U15T1viRyxWE2767aLZh51CXZkwNihVK8rUTArsbpderPwacJhb3dA"
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
