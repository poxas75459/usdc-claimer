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
    "22bdynR9g91N1WKrAEkddZv6NBeFidgwhVkUQsds8JcB2oUvyiXHCTdX3iS3uRfLkbHv4M8ZgcBEDE8Xju1r1diH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hPosTEsPy5B5yp4exqT1CvKTjRvAPAdq8bZiKuu6Y26ugPttW8weYCgQ6mLtE1dg5MwviPfJKtBTFXmtsuFzwZR",
  "key1": "FP6dLi3Yy8JNzCDcMPaS8Ed5exVqGgAjq4ozvYNKk6iGu1nfWFLoiQE8pAmUBmq4sjQGPSbCZFQB2Q5k9HjBMye",
  "key2": "5Lz8dVPwTJm3XQQS4CERChKEARjNoZHjtym3vtoYx3UQ9ibDUjBAB6qP5V9RoEXacFpkPNE41ktT5SzofGi6si9Z",
  "key3": "ZdsqEsAxgJhMJoDMu4EuKnmpoV2m3Lkair8xx1RmevnxJcYWabtFivsdwG5QR36DJ3Ku8xgS9pdq8v2dbXAD23j",
  "key4": "3RvRwsLhsSt8HVxQofGSMJSLcjZtBeyukjfPY5rY4pzyxyyoDd4cHtGDm3KKoopeXXG297v9BJQhBXXNzBCYxVoh",
  "key5": "3P7W3qM7b9gi6gaokzGD5poP17UAQhbvh3FNpfz45Dm96VutVHEYF6YSDy24nnPUP3DEoMv4QNk7FCsGU2yhvFty",
  "key6": "3tiJSV4Jwp9i2w2HpqTMaHzXp3MW6uX9Vhv1mJ1uDH7EScTHmB782FZr8H1s6Ano2wtiRB7LY5ubB6mSQ2MFes6K",
  "key7": "37ix87HfMLsgyZRRQ7hy9V1ABK3y7XwpWXtzyMrq1z8SUiSseZnDvz5fQDDFnAGnKVRkunwPCHRsfvP3WxiBoUL6",
  "key8": "4hByLTxXzxZVoJzrot1XVUjvUcYvctQ9fD5bksYB6n8LTuNePNrHNZ6owGdTukDRyjHHVjqdn7XVEDoiVriAkBBP",
  "key9": "23VBjrhHgwVu5m9H17nt1gsNHfV2dgWyye7qUH6V288PLNoeNFJRrpYSkge3gGu31vcZP3xH2BpudrAZJnF76Qma",
  "key10": "2UDsaqLdo5oJzAfHp5TcY729RPyTca6Zs2ReuwqKdcE4QQzDhqsNK3uMwm3ZLtDBtTad8HeqLaYHJ3fb1vLaVVgP",
  "key11": "3JvmgLxgRdwZU2WUNmnyJxAV7j8ADyS8kQ8rzSJVv4Q725WHBJes48gpMzYrxZuV75crLdtmH9wxoKV8ZTKrWipf",
  "key12": "4rDA5Q2Hgn9sxnBN64yjpcxEPgp4ekTNGmhDvYacDfVQ9rwXyw91yUkUNt3DZccNBAwk7pvKwRZpWHLy8wrVK1xN",
  "key13": "5fNtMiB9tw7YFQgD3GN4ScR9jxSo1tHutWHpaKmNPWaKQG4JUYAaJs8vjGByKR2geu9YpvvBSSw4znfsSwdnhpLN",
  "key14": "3Kxo5EZqpfAtz1oLAo6YXeeJNhGFN3QrJekRb62owC7NwCmkmYsNFsMoFbZuMqpPuejfrVFRKTf7WsEwDCKXZ4rJ",
  "key15": "2hfHg3u4YP46Xmw8LkzWzyHuveHDfwFGAjuJRRkW2NJo52GLdVJLs7hQCzvgxay6Q8zmPCZK8BZb92jaNzevp3q9",
  "key16": "5CLZ1rSH6JwHuXkb54oGFmNercmhPpXfynLjpZKRQHyyMVfho8okFRvwEDgZQXUwfdr4iFvRRqxtNNkvNvJf3dgi",
  "key17": "umpVf2tdoEvVUhJaucNX8XEsvrakKAKYk4U5dtvvvc9LrhqQiZnQuYJPx7H7SkbzrD7NMix3iyTVw1tjP7mojeU",
  "key18": "3bmTqBM7M9LcrvrCCed6BeqrgWspPT2kChJ3D19UCi1bVJv7NxFzzqxFKHVLZDbBUojx6cQg5tPmnqrkftngobvD",
  "key19": "3LfpfD7dYgxE8h3EaiXA5tPqNYgDR3bpm6iyUXALUjtGXgb99Xxa2YRKqPFwJstSb8HXabYwKLe1G7zyGeZknA4J",
  "key20": "3nKQkUr84SE1oXqvkjwML6BA46WnXrP21xcu2e7k4JWkFA4XiXK3Gt2t6Sz6xqzjxmNwc8w9Uu2QpuTwkmktXJ5K",
  "key21": "4RzrVi54WWrWRpPkY1cHj2S3Ye4fP5PnsmvDqKA8Vpyuwp5sG6kKu9VDG3CYUVexrAhhmTPAKbYXVHcdjQV5VqSV",
  "key22": "2Z4k77Fu8SQ3t5ZDn7ZB1rA2YMMgHGmiqjZ21E3sGYfQzZa9n5RgMB1CuhAaxiSj9TAk1r2SdS1dFWWV6eqrPmpD",
  "key23": "2UNckCF67QcN1fwsnmihc7oYJze8xVa1j5aPqtwMWPVtxrAmw71GRhfN2g3SBhWWo7TqGnrkYp9ZK7Th4RkL7re8",
  "key24": "2dZFgLfXTH3NJh38bv1ydsNk3JgGeJXZ55ZTgRujYHVL8MgJdSgpp3i8t5GdbXjgYCauogDQcQb2eGzPDhSkxwSQ",
  "key25": "5np9dWgyZs9vhxW8HiDf4QMnZ37pvuUAmfR3CVr2oYJ3PhDFXSn77nEjYA4GXa4xLUqVT6RtpuCszdtUxPPSyhZX",
  "key26": "5xXbxbxq3ZtrxMudVWpVVMJwWQnk4awxf2HwWmiHiPP6syDeMSZwUTcHiZkRT59LzP9WXLDiKYGyGwVnHkPc9tXa",
  "key27": "22tQMzqpMCbb5HHyhxcAswzz2UmJmgpttDnSudux4FgpX2GHxkLSScauoGdmV5Y7ntsZKeAE4rpVgpnDvZ4mhEub",
  "key28": "2vLdCYUuMWrqJEY4z2KaPbXQzNwFZQoQqQCaDzVVHUKfjzEVvCEMbtVstPYJEJsWXkrgVR8ZuLpac2RQTeCAhRv5",
  "key29": "2LtSN6dFgB2VQ8va2NgRQ32HwEUT2dtLNuM2gJyMTCVmUQzAD9kWjXGLqJ6XAj7TTh54HC4XW6Ld29e9Y5QujR93",
  "key30": "3DLnDAaDsAU8DwgQLMQ1cz6HnvKPBaMXfytZyutKjiCw45gGE77DMXEPCNVPUX2QEZ5bbePkoqgem2Tp9hEfdAHs",
  "key31": "4jLMvYCWA6hatfJdFKf5P5wafcAsRDto9oPEqEuuYpZdj1gHzrW2T1JixJh9KtZgP4HUi51fLFf6gaU9xzfkje7d",
  "key32": "5dKPfDt5s8pL3ooVayHbfKPVYWVBvK7Muy3sRF6V9tNc7f3vjwrBjcE8D8YHumefj7ttDDe8ptubZ9uCDtmMoGNC",
  "key33": "2oVCX5VJAuBqZGUqWKnq6Jo5UqWMyBc9grD4DHe8F8EcfDnN96C2cCiFthFyRbkjn4zdSbR5Mmo7x1C5XWJxEPr5",
  "key34": "3taXSCQv7jfsEBAVFV3CqDA2dpheA9XXc1DWwQGBQ7HiDyU3Xz1bRAqRxZnpdeicQbxn6RnJLMcPKdFEtB5Z9PGY",
  "key35": "5yUE8mb657EHxCZF6hRKcCeJ18urAHTNB95S3gX4wGECRJU73KVPgeh7Sf3h611oDMHZCWLCr8sndpcNdMM7baxk",
  "key36": "2YDUdKLQmAhAYoLSJbTjkUgoGbtnBKTK41Z5VuR1bTxp74LUbVpkbE4xVYGyzkpKgH5uCd5EcXxAfEvi1Mu1cGFb",
  "key37": "3Hr9h3sxaef77tP1TPPBiAX8WnxCVtHpfVBwB1CyajahbRZ7YFvL3SKPg12CeMBKc8y3rAGQ78iRneKEY8JwrT2s",
  "key38": "5A7dMB87PCvXumVYPhvc9ZtpgHQscwYYiUzadVxEfjr7va8shoPY8BrYEkUXwXbSBxnsVDXioZ7X8xXtuhjCDsjR",
  "key39": "2FriiKdQLA5GqVkXrfeR8X8xkF5UrkhR1hxED9wEnM8acFQ7i3p3SoUmgPBwQqEb4Q3hVaev88o3xd7yV5JGszpZ",
  "key40": "eQui5x1ngBNcg3abrNXMr5gDr4hE7wQhLaaj163hgsmiH7e1fNMGEXdSatFwWr3wSiPVTM4kV3RnGJGXg6yN7U1"
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
