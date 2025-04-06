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
    "2yoCocYcScdPFg6K9qdjUvmNfjnhpPqSK1CYeRwTGwAz54D1qTvJHCPZBLcpQiMg5T3L8U61SyK5QUUafoZUJoEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PY8KfbNcgdfPrtRQDCFoVEfZXqMVtoDxNZ8BVFSQQwPgzwoBNdgdgGojY4KUvx6bt41TV3VDk9DsmVDNjzXcyxd",
  "key1": "4uvzSiZw34erg4nxjLmGFJdr2zaP8rSBTJVzijRtXhpurxkwejq9ZGKyjrT1B1Hpd3VqNzsg3y2cRKuxFChLZAJ4",
  "key2": "5WAE6qQdezUFLwVpMhs9Z5vL8r48X2UHiyysRdceLMMscahYgXQZ1jBhCyRzuppWRrvfy3hEruUmiR3uz23o1gn9",
  "key3": "5Zitn7dcUaXwNPVGnGHrK7E7Pnmp23sszeoJByZuG3FAHNF1hacKvdr7dcynG1boi7qNn699EQGvcruB2phGtxUN",
  "key4": "2jLxLi2EwqtRjN1J54F7ZqbXw4e966Z29iaL2eT4bhCzxKW5rh43XaQi6GgoVHTiNnES9wJEe8jwztFn1u2SCQGU",
  "key5": "nBmcGUwPGzrcqCtpeWQ5MYsaKZNoD2DoBNG69xaqCsGNw483zPpTX4btEoQiaDmvJpY17pwwofp5R8ybh4wnA6x",
  "key6": "xQzrRdQxH5JVyzkj5XztqFzT4HUPvdtzeLmbsuo7ZPooSz1dyXNGrKVgKEAuPw1zjZiFeoYfM6Kt1gVmwSh48TC",
  "key7": "5w3dfxYC1cgd6wjKea7novupz3v9nW9daiS5fTmGvbF6FrLfxy8X9oNYjiL6rvWkXqD94ZHuLhwsQSL1G3ia8RDT",
  "key8": "5vFcXrkYUCFqHWs9MRhn8LH4CBi4Dwu1j3UdxnXfhKpLHzeCrrFWh9q9U9ZaxEDUQX9wYZTMfbrLEsg8jUcJCMXE",
  "key9": "5pVBmZ9atPwSkhDoWTPfb6GEwYG84A61v8J98eWr9b1eVRFqMp76h6M1Mqs41WqbjFCgUpCybDoGQu1Twsmtg2oR",
  "key10": "2vze8gdc9MUa37f2ra37FzLaHehN8qgJFJhnjUK1aMfT2uCwsfKFrgmC13HYx5AdCEo5Zdandigr6nt7WxQG2dF",
  "key11": "29AiRxjM53DSkLk9EsdqoiTd39uw3mftDtKMkcxMDbBUPGCXhmoapqnTK5GrZnZz42nfAxT1YwyWXqFjcPoxhma2",
  "key12": "5aGpFVUsitzEBCesPZjqKzmYn1c1GxfMzdAKwgFLq7ivNWyk6jPKSM4GQ2QWpePhr1HJ6ZAkkjbfcUZ47JixyTja",
  "key13": "5U3PCa7q1Z3tYAK3P6WXao9pR2B9C1JkBJfRLcuMCAW8j3hvc4KrqSdJ72MjhVzjwxKpnreYxSgf9ceeWLsVQ5Sm",
  "key14": "3vHctu4F5MQcvVncz4nKZpuXkFjX3Q4PSz7wW4xBTup2X6vPMYvjZS2sMuZPu7ifRJhGAErMVZD3d8Ej5cTpXM1n",
  "key15": "pD8zxFCJMMFHhWevMgfHuFe3UGHQ8p5cgH5RBBZsF9dnusK8MKnjQeFSpSzNdWgfSptZeexRMUzzxqg9u5faiKD",
  "key16": "4jEBbJ8bjorMSKuS7YAZaDRsrz56GW3BYxkwH2ckL9oAPBbrusGPCNdUTfYpwhDyTp31DTzcph4AMLhhubkKatxj",
  "key17": "62NbHnzqnfgtgxWZHuDhn35ESLnwkYuabWXzuaYWgmv3sgiJ8TAAFj1ppoXEx344TQ4vJKpPoWGoQ7MfLYB2ZYw1",
  "key18": "39nZ3DAm1E51qPp7iNGMye4xmZcTfdCmxopLekb9xje7sJz57r5Q72o3NTaNCS4UTpTv8D5UUH7VYxXXW53CFmMg",
  "key19": "3rJsCacwcoHZJ88XhKbsPBQRPxZtJiPPbGJ2cKWokgAZnV9aSM4NiRCdifenbq4SThx5Z5EvaptNERYeixXDkGNU",
  "key20": "2etSpz1XimkyPwW6zL3T27cssZDWFYMZ9VqF4uayAZeQXCYjBoV121d6zUEtRsCjfWThTFUEwCVYVjCJpBuTQteD",
  "key21": "2WR4MH7sYswmeYvmTCDU9SVhTjsbzaudRmQs2gfAu8rLvNxpazJuqHDFVKaNFiG7vBPdxhVK75k5o8zFwaan8kPv",
  "key22": "zVVdYEoTxZMv59Ff6A7Dq1jqAEhN2JGB1DTK5BwWK8gQTxn4TnjgkEXRs6ZhqCB9DRGhL4QpVKrphCZy5eiN8pF",
  "key23": "33tspVEEDfKfQWtV3BUy7uJFVbHqohMAoj2APTtdp7zvUordby4xhCsjDYHwAaWZgNsj1DkWwjPAd3ufbtboMh4s",
  "key24": "3cTzi8yXXnzUfXpihquWkgdMedVUuGrp8ckvy2x6YJhW3YtSuHyPQGZGAMdUeDuSLd66UucMg1VWUTokpyueFWWc",
  "key25": "5o84MScZxx6hrATUCwZEKxxuNnjN9podv7VoqegdVpNGcC383kYwjmgGR3roqJUUB6aSen19zdbbVULv1BEW3Vi9",
  "key26": "35k8KHxNE95kF6iygMrvvyL9iJqGEVVoVE7cKYCeMUUgnoDCXK86QpeNnDomib3Y5P6yuVaY6n7WJAAPPBtPpdbd",
  "key27": "2dcrmFeyR1f5VfNmupbMrfbbdCJJhxSXheyBv6wkhiDPNcoDjdoMZHJLFUgwx5XH36bdfSQVtcjRe8S5iSDfR5rQ",
  "key28": "327vc9hfFq3NtuxQLSvWy5tvRemZN3wnNV6opwxzgLweL1w7gnvHCmLTSFsXCiyBjDs7YnXvmJApeoHzeYdBNfEg",
  "key29": "22wsVhJKwbx2hk5jvm33iXL8X4TXShgiHhpZqpnNStAo5CAaSnzVDbiKddw2viV9xRhZNhuR2buWPgPfCDUzNfRd",
  "key30": "2cXvA8EAcUXAFfCc3rhuH3WgweYXqMqVqY1GUa8n3kcJSy73fka5T6H1voG584PmbvGw2EPJZe7CyzGZA6tMjpVT",
  "key31": "5YJWMf3YVHgfCNjf99AFGFhmvQFiHSpa1zxfCahMpV11db4ZKTsYRVusj5AFEqvdSrHZdh3qBq4nKn84xNGh1mQS",
  "key32": "31FacDZHto7EdFDBZCSes7ftAxtCMhiFEqQejkamdJ5TUiEnYeHJX37uUxJxnpyS2teCCL7YpmtQVBiJWinB3MgR",
  "key33": "5vVkXV4zLh9f1VKff5pPmyK4uL9Tn5sS5fqWoFsrtMvyzbVSjqnEsJQsMss1dWS6PujVuENbGrS6g4cFJTyN6Cmm",
  "key34": "2hfsM875VQm4yG7s2HuueHWJpRNRA4uPiRCioK1MdsbgwVWL5sUiKTJtPhoHFt8sPzQaAg6TnT4miTTzvL2Co25y",
  "key35": "3VcLRFp1hNsCVkeCwZ2SDibXZFwFM6uyrVHw7DSASV7a5bi9GB4HsZkNUUWrbTWGZ6v2WCmPacbDcYUz8Yjdg532",
  "key36": "4KdTs75PgH4ZMRjWpdVANStx8tvq9xSPK3DaiFhtFu381H1TB8T65vHEJjApcLuopC6jaWXVruUNsfDtQt167FiX",
  "key37": "5yKDMHtFX2GHTnZVDCRNkFzZnRhmEtaZH5LCUtwi64WgCLegctRZhYtc95w6a2N3NakN5F8BfKMCiipcTQiMcEqA",
  "key38": "5Rg7g5KpzmZTeUGJ2zozzLerUiySNoaG5qUc1vp4JBnE7VTHmLxF1H8KLL5UbUNqzCvqEdC5fsdrHCuo3VrxqW1q",
  "key39": "4i4YjjeNnacEFn5RPFJ8Wn7sgCEY7Cxu9Uw37Np4ZCMV9s866f3Bt2eVxKLP7Y8MVZJoVHdM1KWTTZgdX3rZ4JeQ",
  "key40": "36sp9WKbU2NCziyPMwQfaukVV6WQvj1MfnPMTPc1HQkNTUnhCqSt6JRaMXuhzjdJ3riHom87URf49p8qWDp5GuZC",
  "key41": "5BecNg7uhLF7tqty3SUwMggqh7f7sYReCjDUmyJkAD8q5e8LgsyiPNXMqtUX941xCuBnYGHJmWgV7F8t3XLHELtE"
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
