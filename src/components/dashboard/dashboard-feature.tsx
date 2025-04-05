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
    "4mjAnQxyfVTRAucYMSXmU9bkEru5xxTARSYLa9oiQ9EuPYFFL1p4AX6WKnvaTBCou9Qr4UYzGMHggRC988qVyXju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mXa95GqpBLNRP7vTiAKTVEx9tmAJaCYf9oiK1whnH4yonUJ5gosfGe5K8RFEX9JgACtRgrPUvgZ7kty35Jsug91",
  "key1": "4mMDcqFFVVh5wH5kypPuwD4eV1bB62YWoafmmz4FPHrrpWRiqiF5dpt8HRD8iZfRGqziBarZJuAM1BTs22MZFqNg",
  "key2": "i3oXfEQb1ArVrwSU19B3nJYXoZSHsZTERCxopAZNsgcNdkhq4VAucK5HbtB2CnaNP2FCX5f271fQe4EqNnMxesj",
  "key3": "244pkUWgR2LkbnLWtC9SpataT6SM8trBSDmBTdo2kKVhc5cF3fqWVRUc8mxot9DyKrbwjJ67Yxzp1u1iKdp1ncH1",
  "key4": "AxxxgFABW5PSmJoaQq65UMbxEmLqioU5s4MYLFMq6Ahu3UNmwCAeGjBore3oxNoLpUkxzrv741FvPRMx2qAZoyq",
  "key5": "pCCx2W6aP9THUUr4aw6kR4K9EaJ5ekQ6kLwfaPVJqnG2kix6tN33nvUZMUbWXrihGaT24rHjbCXmjNeCPVtyNu4",
  "key6": "2Y1bdACKMNvzvaAsw4PzPhaigMYi3BP8263Bz7RGMQBqSsCZ7wpqr3a6tmAcMvmo6eMkQMc9VWZ6L7SnxYxYL1oZ",
  "key7": "2VUAhmE4zMiFtfijpq6kQ3RLPgpYoVn2Fwq8ZXQ9SH8oN7mnTh8Z8pQ9FLepU6CnRjNWWBnf3wPnDm9qZHfd4zDY",
  "key8": "2QDNaMYQKou6FjJq7mgoLCTPJR9iVAqbrUL5qj5Hp4vo5C4crQUWX66f1xGEeAsuXiBWeqUddFBWMntJgir6JyxU",
  "key9": "4xVE2F6X1nHp4z9UkScqVxkCXfffMpjmrAsiu8RZ6u6v4iM3XH6WCvLizjxBwn9ESWBLXndtN1vYmnjzCZDjo45G",
  "key10": "5LpywNvSLP6W1FRfEyWZ6RMyENt37F4t4e9yMjDSRyZmtFY7KKiZ98ReaAsFmUXEUEYha8DtWmgKfPCo7vWvPyWG",
  "key11": "4UzbLHfFHSG54GDhFe6CwuTwnvq69QuPMQi3Fe8L11vRnGHkcNztjfYg9Pm2LDWvjjnp814LxwQAWXHqtRzEdLN4",
  "key12": "d1Ho6BU3KxD71wqHWbBbNNEaAQKG8qeUxHVfwgRMiJD5baTSHsKkg8nKugw8or6wFg2dy2vCsrVNbQgvfvBjeXj",
  "key13": "Ugjtyo8pGruAd5G8wBKbfF4tYASPVpiz2CccxqGNVoPDVGdjX68iQSzPjTwdcEZq2FxFrpwYV9SpebzXsGjEJFd",
  "key14": "2jbVndnnkr8WhByg7qrh9LZCKXcmkF4eVqPY3rj7FpesPGo7qHWRfjWhUtYawXaHJqmRrgQNmXzmwoy17KBp63CT",
  "key15": "2NqqQRJVToa9KMJL6cNut71LwwshP7wPXyBDtJnNnQ67m59hiiq9ZJQRWLEgSfHUYud6WQds3MroKmjP5qGt11tQ",
  "key16": "GTMvckiXyX95HQ49YgJxbC6ZJjqD84FLrPUYvZMToWPyV5x9uNVFSLFC3Kkda3tAPxSCRBYyEskE9foQjEpSKHh",
  "key17": "4EgbaLj9f7o6kxikNUMRM2qxvJdT2WVhatSn46HQLoRkmv32TDsjojTTQqJbMnWLhzSU3xEkAVGwc4wAMQ5rvQ2F",
  "key18": "3mN5urPFSmJRTw77ny5yNyRirsMRnDLqzqnK5bxw9RydBMzWaEcmwjQmzmChPRSfCSFdfdpnMT4u3NhEabZ54NA5",
  "key19": "x9M55KP5nnG4cFcAgpPmswpXuKHKjR67sPPtLFHe7Ygq8CornGK1f6TnaHWsZikKcd3cg91idmfat4Utoi4uNkN",
  "key20": "2bVe48ezhwYrEfnd44yVuScXmaARF5Rf5NSkFupCGsv7D4LqMTAQKcA6fbNi7DYW3nCwFQQQuuz334E79eMZgbNe",
  "key21": "4B6M1fYuywcNPNdMZcUprX7GM8ZnTdYP1XY2XapQQPHz7kZs6GW97aUW78nTf7zvwBhe2NWRRJkTNJyhjokDvPoH",
  "key22": "BKoPv2pPat5Qfc78YbLEZ9U9674dwWDBqW3Z5kwPch7FiP4jKxJ8GU2SuvoLY9zVcuG5mhVipyVdofJwveEX6KY",
  "key23": "33tDGAfX1tWNnSE9KoPdwxbihrTGrJ1dahf2G4hGTEFLWVcocZrXALWV4efnjjMzj6uUcE8xioEuyoLYEX4rrVds",
  "key24": "3YnnReyD6cShrtXvwpaBzALK9Jfvk44ZDNw6VntL7oHhAf213csrrKrUePVau8WbjpwPviAyzwgKUWrXWS1kPnKV",
  "key25": "5V3PLWngcJphPFuFeTN5wu5SgFwuSXEsWcZiw8CzphFXVyT8wQwhxMwUAzyAmnptpBUHyM17Yipnm7yXaURVVU9i",
  "key26": "3WcmgAAN9jN7KX46ESLcKwDJz3gptUrG1PQ13nru1r2cvbYiMNTakgobBV8VcpazhZ4929CZvn6CaYKo9upARQbk",
  "key27": "4uw2Gv68gPWmro92dCAwwxVkbgYLoK9hYiUqtpcCuLZrKCH3D3A2DtvgRdxfBxtnrpBuP9Mq9FnWfvaohipPEEbT",
  "key28": "4pHYHkNBEqDd2NujmLzNGVfNeJAdzQANvqYYZYzX9sCFdnoiaYRZpQX52SUoTD3nYAoW5Geh3L7gnfiaGhQSwnJR",
  "key29": "2MW6DMxf1iGdcvEkwrVLy1pz7NCKEpu49qptJBCKpnEquLLMs18boV8fDnHDfVJ1ctJCs7bfNcPezB8QSh4vJNz6",
  "key30": "5jr2KKri9jgaLCfMBsDJmcVbpDrgaHWBdUN1vxcN3LzCBa1zneK2dxKuHtQn1nBPsiQUjv47VYSQCPgiVqXAz7hF",
  "key31": "55jX4RsALunyB8WfKtyDXcRaVo71cMXAJJJCPqrGMHhuQqrFYsK2noGjLpxhADf4GJxNpuXDBPtE2Y4Z8KfnToqo",
  "key32": "2dz7gSfshw6ZNiSJkgYa2XHRr7fNF2zMuMmJECdx7WkRGNxHSS5D9oo7ZsMdVuNE9yDx4mGWW9d47YgrfVeBB2KB",
  "key33": "5ZRPmoAG5QF9mQpPoCosLBoz7bzRSHQoiD1BjofDvui1Dap5Fm7N5h4ob7S6vvXgWULToAqbPfyZ6vBBiKF54TAu"
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
