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
    "3DBL3EBVaD5dy6gxRbXHZNLHPsjFxADEkS9oYxKxLXaHVewUK5wPFAiCb6sVyuerDaLHLsecgKnYcBsoFrDZQxDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ep6FqEoSabUDx5RRRwMmeMPdQHmEmUNegTnGqKt9sAGukyRAzX2mHF3L97EJ1i8ytg1Lo6NXeSSKrHjnhcSt1j2",
  "key1": "5LDsasx4JgoT6miEtEBGoJiKDGbYz1SNaq8qU3tf82mvtAdBX82sLCeYcBiuCCwbkyiCjXdLd59eEUQnykQHYPu4",
  "key2": "2HhrbgBNbvsLjEiizz3DVp7M5vWZ9kcYFzmrWDtMJmqPcrWdCHcRrhyhXqcf1RrxHRJfEj14y5jbRqUqsAjHc3xg",
  "key3": "5CHQbDegkg9ayngKM9LGNhohAakDrbcPjXYCiDuLhL2PnhfUcPt7yRyvayABKSTDjzLS3EoxhUui78LzqbSeiVXb",
  "key4": "2wVPH3yh5hxvxA4GwQEDLAqdTYxRQj19j93QGaaxWZW8uKGcNa8ZgSn9duWH4vNhan8RWyxgSzwgYPxUQZ4wVcMY",
  "key5": "5QzoP85Q7oKaJ1nCAQZc8kBnFZX563VmHtH3Fqtoi3fpZFUtFhXQivgeoEa2XENmW8RQeEsJnMgQeTHMgGAwAufA",
  "key6": "3Sd7Q3mcDaxcRts6F4dbKdXuQmwWQLWq1K45UETYQV1fqx2ywJD6Z4jtVaAvWey43S2JrAeEYYwzNXG5YpS6hURq",
  "key7": "zzXWnWT5icv4jVXwzEex5m9g95kbvWAbn9zwaNz24MaKZrWxw9hiJ1JdHsmEXDfYdYWifeFtR49q6Q3oYZANwUA",
  "key8": "4rbWJff8g3AAajEkmiDcwcZfFroB57BGLEzZGb6iFjvvVUJJRdpn5xPfHdwXpAJUMmsodGcXbJcqikeA3ywTTzZB",
  "key9": "2qvsNk4YnAkiTyAkRCZNGuemBz7ThxFhxELd78TdnECxCBANgcKK2Hb9WKMn49qjfQngYpoRSjpTz9KSRRdxLALt",
  "key10": "64unKvHCGgmABi5uGqKMrpuuyEzZFHRbwH7uVYRNPYBt9CXxTxkW8uZCwqiJZSBdfqUxWrcCAaMNezfA6ALuuVqV",
  "key11": "a5BFEACapAAvWHWeFwPU1T187VW6tzgdimYBb2DQTBaAXu8xTewNEJwpi1mnBv9UASUmZxtp4dUjhzHDtvqyVsd",
  "key12": "3LNiKFW73jgsrbB3EJyRczUSKSrj13KopwXqHdJbgruQmfaWEoMo7AVsPDPs3wbuhMAABtcpzvSbEMHK1k7bUjNp",
  "key13": "4BsLmvNUu27q3sip56VuVN98kYBybHVRo5PRiYQnuE4USdwg6jkWKcqXwgMUdRSKFNFvjaegy7HetSpfkSWFrP3F",
  "key14": "5BE44JJZFH4EvAu1sA4eUX9gdcGGR6jouCF2CmthH7tC1wd4qWKG9aDwoTUjFC5su2pXfCbYfARv56bfDeLqz63v",
  "key15": "5MtHuVq2rk4t2Qe47Fu33kkszJ1KziYoQUKqpUvhEHMXhK6g8jLFaNAhuTBmgcPWqrkoKpf6mXxcjD9yQtmcX776",
  "key16": "3hqxywkxp34FwBDC61BBPYMsoYP2KQd1u3EVAGfNkpEzw4vAABUopzki6wz1DGa6nM6P9Pe3F5EQ5tZ1NQ2xpvsp",
  "key17": "2AkFiZF6RteYdVbZv3KSsqgTEi6wKt8d5NoFjspnFNRkzL2DJzFwiHzLNV648ygQ94mP23Bju4efHKgNNixFcqyx",
  "key18": "2zHob6MnoMuqMrPMhewrbkFjg8yCJjJHMW1vKEDfmbc4Dh5eDxSZiuVZzNqimRHHXvMNBUrXLpngh7uAVcAjFYnG",
  "key19": "4GMcRXZz34iVVqVrMtMqsrJcjFLapFQNGi3igRUFoQcKC9U9x3JtN516QPSZoyWxVK4HA6HSMjNx3zDRpkeBq7Jz",
  "key20": "5u7AWv8WShkcE79uuFWTj6BysV1A8eYfVpWrdSVZXeoRratCUPCAtgqMY7eWZZaFTDHb7TwjQq2GUU8edXNmVwhU",
  "key21": "22VuD6RMn3P1Qcowx1MVWqHSiLwHbsREtCgPAifUTLZSJNkfY5w8dFv5TD7VG7kbp7pUFopGtdFM1mTJZ5yecuwR",
  "key22": "4KTXMXTi2dWYo6JP22Zvr5x91BP6pCHzXDhFhMoyMKDoq4jFvEuxjsv7TQ4r9ECNV3PFiKY3NjsmXDhKaqfzDNDA",
  "key23": "4xJ9MuG58fpGq9D5Ws3G6u4jQgtrg8hoqd7CaPV1Av5Ey9GUAzBprCBMNpsUv1Kryo3JgE12cDt1tTycJK7h2mxh",
  "key24": "3Xit9r2x1b86CV4JYsCpfeDtnVNkQGKS5UvMj4u1gbhBCCNV2mK2BAg7jPtNJPsSexgcPpQxQrthDSR15kUpnP9j",
  "key25": "4eWDfT5iTD2ofGemKkfpxa9zjpAKP8MtnynkB5egEnBVYxNe8D8RGqAHhVr9evG1XFVYxe8tLf1eqzkpnr8gpp1Z",
  "key26": "2nxAfDjnmMWpidQ29cyAZm4zrREbvFyYKHi86kHWknX9kTvHFf1xNK6Fht3K17UimZWcs2wZK1i7fpCNeRYG67xc",
  "key27": "3qUM7Aery4kgTD4eyeGA6ewjgvVwkT4CYjDvFcuquULPfTQYWsDhkgaD8hUpkADE3XU648M32WRj5GsMHU12pRRt",
  "key28": "3CmpXK1FARP5zNsUPzNEzwDDV5vw9YEkguK3cPeLkP1BygMSMXDhJmmQg7gFQrPZVwsYSbaH3TVrf67tUCSX9MTZ",
  "key29": "2AjsEJMTQK8CocoKAtigAmy12zSxaNXv6t6cRurrdnPFmAGKA6SFAAVnJhXRVA8LkKQ6nCGfQiLXsipYK9FkJnSd",
  "key30": "4EJtpBD2Hx8hU3VGfHKEeNfGuXUgDepzGqUXbPaQ3cgZRN32c9zf5FG8usYChMMgLQT4kj3wYonhxMJgrbe9GaWn",
  "key31": "41a1P4fb2mUFvZ3Pi3uSRnBJJJeR1ZHH8LQsghoFenmYmi6nDbjGX4EBxNPsBjgmERqzGQmsjY59NJPjs8BDRkuF",
  "key32": "5Kunc8RTNSYxJheYteabrSkySyhmJe8yuiUnUGuScj4LkRH4MJM4jcwL9PSUSwE4SpTCDx8QetCvNEpoyNCHYgMJ",
  "key33": "3C5VsjHHm8NAm3GdWbb4bQxFBpjWo4xrA5MhFxbokA61rQwc9wWs7f2ogCbQR838SY6qbmoGVKFdeBciLzj4LkBA",
  "key34": "ja87BD9otP8T6fCxx4dfUDG7dZZMrKyYiNGhFWMGssbQZbiQ2NRzqLkF4d9nEgZbYqUXbtHooaJ8G9VajCkquHL",
  "key35": "JYPt6d3AjQnfYP3JuXpsaRPNHko27DzVmmMdhgQExg9bcpL84quUzdnfZg2TN7R93JNcsMd3KAQRgxwMUtzUWnG",
  "key36": "2m81zEYoqNqSVZ5xFy6jednnzw7V3K8mENtBv8EygdSdWfhewiSvKghjHQouhVcJdkWykZRbtYgyvPRGAyeBM62s",
  "key37": "2yHgR1v4p8DfbTRQP84ajcvETTmNPcjLEYwCjKkMH4tSZ1mQF6KNAiqT9BTPXL5DXbuGs5ZxdELFXUCK1w6gCNNh",
  "key38": "4BV1XKsHSbgMw7bsms3kdCWhmHQz8rovdibXwx7iTq2gMyzcs5gfCVdM5iB6F81tWvRQXeehXUJPgRXVQe9EczWF",
  "key39": "4QL6dkngEBAMo5wPMoB6YKB2PpnzSr9v2uNF27hwd6ursPMxYH5AFRiqEnAiNUJQATA5Dfgxp9exyz4FgNiS16Tx",
  "key40": "4vHHZByTJLEQxRPx9gs6jT9nR3BBWizA3JPWEnDQrin1JhQCCUPGsJ6buGLPkGJA8X8Hf14PdMNBykAzKod8pfk5",
  "key41": "4eJGNJDdpNDQGMerxgghNJmdrBZkEUr7s71dAKPvzJbaYRoSsNrMYRcYaEmx92g67QJcLNg44P1qyo7P98nK6Rh7",
  "key42": "4o2sJ74bbrfZoAhdiSQNFdC9kXQ12KbVVkTprYtXCiNqzsTCwNbDAh2pDj5zauRnei8b9EHzsg3CM5amd5iPsSGS",
  "key43": "3Vf429CqwQAFMxSSCQsTvTL5ZcHESTKEmc7WAju5X1KcN6Pv1jfMLpGXYPsyNzfo46XpnG3PdtBKyQ8dX6gJGpNU",
  "key44": "5WtyngYcNq6wcGo4ZjMdGv88txEtcAmKiEXPpUwXyFFJFkeiaSJa8J9jxphHnRisWiS6fk34FRWoZxkkUE1SJa8c",
  "key45": "3dKNzBRnfjZTVDKFKSRswh2Sm8XVRGHizBVcm8VzFEk8k2uEvyfjAJSr4DpoQz8PbgJ1uTBAtabDVfWBZePMzPDG",
  "key46": "2JjJ5pVFuM6qoU1DfmmRWtVe1LDkyDTossihRVwsomwueZMtMqLRCsiSYQ7TJLDFr1ki5wEcjb44QbG57tcvnYqm"
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
