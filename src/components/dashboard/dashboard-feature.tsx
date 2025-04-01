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
    "5bBVHAKRQXK99sq5u3Jp8P8epohNpusg5thrrFjV8YWo4uBYUVW1GTYsxWcw3Sb7giMSzYHeuczh6dTS6So8KAes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qHG4gmwSwxc13B2GFDY9aM4zFw8NpCBrmqM36THW8zPPuD8JnJFHJwtyeJdrK5bsTVcRVhjHR4QK9L1w63xQgJu",
  "key1": "3FV8vBYFQBNyhhxDBNvdFg4jjvENfcxCH9HG3CHuzpJpcxa5zTv4w6vpkwTqN8cWv1HFBLEm2JphwqQZyq3BHp4K",
  "key2": "51Xn9U7eVddDingNHCVPqznXxafdmDVdMMLWxaHbpiDFaU5Qa8EiJmVis9fgvLKLKAEArwQTQBfETqHBMyyvcF7L",
  "key3": "jkhE6U2GZYm31ZddwfWztSCxxqniAxPnoRF8RCWsB6pJVj57auynQXxZ115QTbNjZzohsnC4PM8EhN6hSfe27o9",
  "key4": "2ExMS3M28WBf9K5CR29q8TnymYSRV4SqpGU6Bmkq1p3SLZgnMCn4eYrTgtByzFQD6VXkM4iCMijhAW4G4KWaZ9YV",
  "key5": "3MZgMncbafXrYUsvJGoXbfDekxWpTsaD2GTNRYfSyU2SvePg2eb4nqmT5HSJCR2XDKqvBz2cDMh3sDgepUahZYFG",
  "key6": "3RRPekMiH41Ark5EhQ3kLUJXtpw6avVALv8Uwej7DVTUiEBqchvrSoFtKGmWdSFYiBYGuQa5wr9WMRpPW4FzMES8",
  "key7": "62jZufyuTn9suU9JmQSjiSzApubWnCqEuY3ru4yiiWamRoSZkBNDPVQTEQHqqsRvP258E3MQVDVkRmr8d4uY9YWa",
  "key8": "fbKYbw3Nzhe7SVAPxZECBsCvs5zsY8Uy9w1jbVurEZo5En5S5UiE3USgrYhYJZVKpF9xwXCcJUdJkAEhe5M8KKv",
  "key9": "EG35sFRcWh5potzy1AYz9D1D8mBNj7M87fasPQYBbdUfZCw3WyNWHRLaDa6RgzGD2xssQ8MdqJZpFqsxfHhNXnz",
  "key10": "3BSAMcPeNk9QSGYyaP1DQEiykeyGMBXXCiNCuTdN1cce5YkRq7zyGnckhpbRdca7LKT9D3aggqwgAwF2tcn4Dg43",
  "key11": "4dQwM72Cunfvfa7wYkbn1fDxdzK84p9g9jaudkGW4EBJKZZZeMztHkHETUP367FpWWtv4HQ7orcB4vDdVoswPiFq",
  "key12": "37TcPnKNi6itVHoSJ9moyjuaT2FVmPu4etES6hB7gaXWT4Jtf6sKu8rZsyhsd9tEUvPJweKHJHQaAi6fts5g1aKq",
  "key13": "3vFbVZWU1SPnbsGrmSukL6iiPm646ar8fkGemWiajo3CxKChYYyiaENTC2DJCZ6vUfduU9tDDKxj2XhUfzZWiAZD",
  "key14": "4PcyZgaj9mF8nBwjLc827CkkFAYAdnyMo3p2aXBsRQEjLn1eQSKdsoHttduqhvfJKRzbWNzqa9v3hr3qPHCz4TDt",
  "key15": "67ArA9xpAmETy63PJHvkDDoMghyJh4QwHDpxrfrmn2NV8uACmph91afrtpD45jWTX14HTNyCZgFVm26V5V9nMZmH",
  "key16": "3gXkQ9yPW33HUAtxea675wsyAzwMUB8GxoM3eXPZJuPBiibcGg4ftcopuHGsHseLVQmxqPg7WT9w2qN1UXW5De7k",
  "key17": "4fyyVpGPRJTS4EnHzgXuB8AxRzHUDahfBAPB6Rbu6Ly4YjGaL53MaFrNRDJHCzcFUcVZHw7mEKt8ak1mCCa5FrQu",
  "key18": "5KGwzaSEGMWB8hJ8sSzzqomfyjcn1dA2PdqxgQEBBHrN1qU1PEnvNmuuC1wkRRkpmi5ZypiwNBuSg9s4qVCQNZQK",
  "key19": "3seF8drjbHEuR5XoAzcHYpRVgWLnt99sP7rAJMytrKaGTVEYta6ivFWf3Q9Kh3XB6qCWkSf3bEwyLZxF2Q8dNuh8",
  "key20": "3vsBHeCkbTojK5ZC59GHp8sNvfXpTcchVjMctBhwd4bg3WKf9VQD5zeG9o5qLz9JLC3yDQqeVwPKqzNJ4KWJK8XX",
  "key21": "4uCzFiSFFhXEsLEu3JvDHjK5Wuf1Ai2Wnr9wASoo5SyXEDsJLHMjBri9AY2ygKkvWDaV4aRhWpDMUWueZSKv36YU",
  "key22": "2SUsvL4fwkgcHsRPbMPtPPFGCajf4yPqV74Gi56tQ6xmuB5bq2bU5PiJXR8NzG1oXxagqESa5EBiVcxS1nXPnBYn",
  "key23": "3n5Gtg3e4dpU75nmAVVAPb4QDKA7TQwD3iZWcV7UGPqUfCEwhXgtZv2xwzNxk3wSLT8hyY8s6Vm722dy7D6rdqPG",
  "key24": "DAYeWypUHgqtRuPWn5rvDtBnEE25qVP4rTuZfPP69AdAXt7XtnRR6nv4P1w1j6DrzdR2umYbmnTCXhghK5xHzQ4",
  "key25": "usNFnYmGcZEV3SwdpFb9pxGSUGHwedTHcSF7L49MJojsfn4JE7cLngxNsx3Cy8wY38D9GkhMPyegU31SQGDJ5jz",
  "key26": "4C5ruPdB7RRkd9eayKrqVXPJ5GQowgWKGRJk1ZCeMfUpHxtugkTrpKMNZyr6f7s9p2nkF3ZxTspzQgtBxpbth4rJ",
  "key27": "wKYEZRP1Y8DEMrsG3D15sYN8Vw45mX18qMZBZMYCLg4wTBJmHh2uPG7ztBCgkhxAiLymyNE4MT9mSZaxqAamBsg",
  "key28": "4NWQptnDRvgNY1ojcCx5TPyKPXNjTJ8QUG1FmZgsM8B58NzWKLv7Rf8xTQ5zvGksKeTAY3zfvwGxcbtgF9yuypBu",
  "key29": "2gdR3Ne7tZtYyVBvRmqBgYdbsL18abF7su5iXmZ6xZWyB7cRda9pEYJ7b9ye6ERXATr7mpfV7mXJfZvqZD4Gs78Y",
  "key30": "4SKCCe7Qfw5UHVGPRtwMpNgdEyhUFcqe6tj9HAE3GiswxfsaSJujsuKobbXxuXUz4yVvyKVE34dju87UJ2QJNUm7",
  "key31": "2knnT6N2pXQvJdsYHzdrt25oZN6kA2Ex6USbokEH3YzfgvYiF6MGJpAmvRz2qWzkYvAtBh33HrwcBsZJQ6MFXNP4",
  "key32": "2JY2R4q7UeawXE7FKM8YkBPmpojGF7E7JSbAJG4vxWYpCtKoZc83B3HyfQjcu1UdGPiNgWW3s5MM2p7aQfx1j8j9",
  "key33": "2Sarem8CMS4dAMmBDptbJt6MbjhPujQXfbUGe7tRzf4WRc4hYVE7CrMgU7P9Vhm1EUdQb5RTXUj5YBHDWQMqDLf8",
  "key34": "34oyv2Y1Ru7cKJKdvvRTx4svf2hj5Mqv5JGRA9Fkk3jhKexsXLJ5KcA56JEE5DrcATckEGvcDVd738RSkvdjjacN",
  "key35": "2h5gjMTNEQF73o1sX7AbCo98FdZm3oDdhC7iooT5L4k9xTNFSFHfV4VyHY9U82tfBZNj7m1ViX7F1dS42m23ikNs",
  "key36": "riCR5dyzbVUo5YVvn5T98w2GjxdLMhd61C5BFbK3oC3ncNpetQn2a1qegXg9Ht4rmV42PmbDbKzQPvBihxjX8Qw",
  "key37": "FQNjhTqCGFLZDUCy9LkaRR2HYTcETrpPUhp4kQ3ujstyvdVHdDbRkc7tMB1EL5nG3BJiWPPzZxtG7sUSU3BcAk5",
  "key38": "2M1QL7W5KT4N81SgDqYXR8bVzyV4bb1FzzPo6XF6EsMTGXWWFQJTNb2fjmetFVS8Zk7LBmae13GKiH3Ew1rKkU9c",
  "key39": "5aQtqx43wFhoqjrBnEfhaEwwShzgyXK1PLEYSzxjfvmhb4ERkkdYgFec4KXyXcqyydWCwes2n6bY54gQcSyHbH2K",
  "key40": "5SQ2QcgCbMMkjW858XfRDbeRKSDy9KEmu8mYqLMnqyXGF7GLMgLKu8425xhyXqhR7C5vGWL8QEmxPyiUKx3bPhUt"
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
