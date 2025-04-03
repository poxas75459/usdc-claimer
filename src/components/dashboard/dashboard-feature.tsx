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
    "3NEfeobyYU6DurrfUGm1GzrRnCzaUwE7WLM9zMmtDSrTx2AYQMcuTY8iVtVoRPdGuQbbBS8LJC9iQ1GsVtYp8PSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tNEbus6gErFoGMnmjZ82msdTVpvgtyRpupyuu8hbg4vw29YcoYfj8jMycPSDLVrcWR4YTeKECKjZh6iQwkxNQsS",
  "key1": "52DPhi2dGaHHyeVuaJcwvEFSLjuj4myjTMbiEBXKuBCy2tzjXm2xDrsmRRTvFfj12aThGsv4qKRxpdctJCTQPi75",
  "key2": "51ktcakAYmVJyETES5YXZWy75Gpktao1QqhzpbMmAxQCLKKrEg5gjSukxyRdarmLPPMn7ZZJw6HeqTSoSeH7TdB2",
  "key3": "5bX3JrrG4Hn6uSDjV42iiFUGN6fYSBcyJ99F5n1NVrq5gQ5KR8szWkEYLXPciK63RGyMcxsjszCVDHMWxFTK8VgD",
  "key4": "3o5EUGj2dCmeRw8VdjbAqsFysyDVN9j3bSTpLwYLae7pYaJhK7o9mE77yRcHbuekwKvn12A9XWKGdbnPhABMwEpJ",
  "key5": "5YRB2rhRcM9ZJcKbAtUUCwyG35C2MaECXEb1qNuxH39VZLKJ5qhZCxc2pNCCfSKH5yByY2RA5sJyAZzL48amjnKB",
  "key6": "4cuY9mvPHqkc7wdMXhKBdvJepiB75pxvhuRvnvah87BnaTP3LGYt6bMTLfeFVEN8iyhmk5oBtmrHyjeo4JMLu4xH",
  "key7": "5DQMvaUBped8pThXc6NheKA4LEnj9Ynygve9fKrjwATCEKDNpA9mkK4g4JRZQTRMh3siNA56ruvQuHuVkDHuLrYD",
  "key8": "4ZbGRzsaFj9JnrAHWfLKWuSyeUmUVQNep5wNPSfimHtZEzxuwvcDqBFkWKM6b719f9hodRZmvhMmVeZFbwpNYd7V",
  "key9": "4r3WvYz5my6QoWduK3MLKyabnNwsNH8Fe2pMQzLsnp81dxobL82grGNCn6nwBVf6kNx3nch2qmsoF62hj7ZH1Myq",
  "key10": "K8ouXr6WF8KeVpQgvCxxUU6BLkEkQRwTgCncnJR6Rq69PnhQvPRc9tbsgA9omWRRWqBdm7CjKAMDuL8ywNYkenH",
  "key11": "4KNUtG1ewHXrUBRvZCrmGyUysBs96HgnQb1CXdFG3tNY6KRGvM29L4xBLpGELenpcaDbHY299AWsEhTg5wHUZaWv",
  "key12": "33Gf94i6Dncz3e891LRbxd4KpSrCWMRZkXvuQNB3pSz8beYc2bQEqLig1UdUXUDWLdpAxV1tPTNw2qTf6bD6tSc7",
  "key13": "2pX6UMbDBdp1tQafXkCnG4x5e7JyJsuTYbCpwATeD5UAsKfVqFYbswpsF7PitkMPzAiQHymdQrH8xjX7s2HySbr1",
  "key14": "3H5Midwy7EPrMs91xaSBD6CypbHYSQ94pyaCdrEhD4rJ73xa8as3U6kWSR5MSiRHQBfFAgsnjJkgMbjGUp4hSy8B",
  "key15": "63RRNwXWbNMBC4YMvGLHZyWinfmAgKgtcALRtuCMjAvg23VwP7wfzpWyRtcxr5tLhwriLDn7HeijpcxVJSexdYvu",
  "key16": "2fsdomAUEhxYYjHCmHso2EtZniyTacDhWvgaXnQ176WkTyRNscG2kGi6Tj1j9LvNYhQk1FyNjA3FzQbnANwL4vfe",
  "key17": "4hNueB98xyoznYrSffopgScQYE169B9XYVmT4Bh2WrS7ZwrvsopRANivJHdCYMffHWGRviVmLdAHG9KLVWHSu4qG",
  "key18": "3kkAVtBNfP4TY1fRzc3WiopLqvKq9GUELm5yr68hG3EuNMe6gsY8dZgbNFDQE4oUCfqpnnTqcFse4z7DxZvJNfAg",
  "key19": "5nJCgpyyYUexHoNLXgjswbQ4kadr9Dp6FJGXRpFc67cK7BoUSScSxPAUMtJuDANDGaeFZof9pBzJPKZqhnCV6EPG",
  "key20": "X4NWQwrCmkvzw4WPGhHyUHMtAc58WpJQA96Si4y9aBcmnaXCjz4N32S4vBEWuGW6QZLsW3sq32wVhAJjhEtxF2C",
  "key21": "5DmFNjAKxn9K94j6HRvE14s45YmbqFxLGdprZidEqSgagScmFAPFx7cMTMNmEVS3PjH3TBfQ2JXLmxBLY1D6hrb4",
  "key22": "5UsBxYSTq1wcDq7SLQM1FRTqQWJN1iPrN48G7qgyKRhNuPunqibRh5jnZfvvH6PqTYVZFj9bRwXJ5uzX9UQRYUnL",
  "key23": "5JpErMzW6Y2Tq1NXb2TR2pmvwiztWvbofxaf3h91hADCpg4FQnrGPFz8MYuax2kQyFhST9hVKgCmejbsVq3zif8K",
  "key24": "5NxvjEkWMyDjS9x41gRZnkKMF3BBVMBWzNERaF53LCCpwemVe8SKHSisADMaq98JD6DcdyJ6iKNHEW3pL5pVC1H5",
  "key25": "4W3Z4emDZwEQ2KE9mMDp1S7AqD29J6oZgcXgExXewhXvWXeJEEA64QCfW5y4UhvVVFrdbA4NETWvUFRNx5Ukketd",
  "key26": "rJzWvr43DKeD2ft4ULbJBvm6DcuV42YGj7U9nuLWm58iqHV2v991gfJJLSRKPZRkgs4px58orNsgqTRTtuGsW6K",
  "key27": "654WfF5bRhaJ9fYQrYDp1zWT9adRmiwHfEoHww318RyBpoa5QtNrhn9Jqjp7Uf7o7Zs6yisMjLkMpmYsiMqaGGFQ",
  "key28": "WkvCGx3BmWMwYcCUooiJDPFZ7NbxNDnUb6U6V6g3zT97ssi4xyjyLjSPkTnRYapHhCrab3Fzv1SnkGr7yTm9iwb",
  "key29": "5B78gVLE54agUJcytr6CAWwzPcg8qCPUjkjESvc9hLKHGvPg3iQ5NKrEYmBCMcXnK2FM7ZKL8W8RpJN6jJxvrmQ5",
  "key30": "3XLHQRrb3ZkrpfAKoUZ8bRWHJz94X9GG2mc9BwpALjY869QWZGgsNwofhaCdbdUe2vVggjN4ioWifRqrzGHnyq4f",
  "key31": "4Z7RfXA9QS1rH34v4VLY29N9EuHjGGwBXCV8kDqQybP8kkVRN9baXkmYuFfEhrGivLYiqRSpLQjUYtaASfUQGEqD",
  "key32": "WeemwV5MaiJKHUG4YMyWivzRno8AcxUcLZ3SmSA2sVfd9t6Et7496DR6yt4yMgLkCDNPBRfeHsL1tG1vSsArCxA"
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
