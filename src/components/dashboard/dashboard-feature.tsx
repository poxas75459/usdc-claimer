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
    "2gCjZHb4ZZnhZKqrQxMY3sPoS1r8W2T1eNPxkarW1bxDPLSU6Puhy5p6juRW7AsGDdoZUpDSLC5NVN3bz2UhMpTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TVQ2MwsaMeKrP8kkXDaH6APKCE4YUrLPz8EZfAXvBxsGWHzVdMZissZaRC9fnJaLpPWETGmjqVaKYNAWNuiwVv4",
  "key1": "PM8UcQhRDCYhVavettQafqkCFnyQ8qNLhTwLy9VTspxGCYXdHA6BmNi8rBoKTnQk2jPeNWQEy1oCmgkSgFUNjpW",
  "key2": "67ZC2DdjsmFsNk83EwkVe49iR4TR9VsrpsiqEfP28TV4DbTBMd2DNgtE5pMXgniAuzbFfRgE2onYErGLFAtiohjy",
  "key3": "4wLiu6z18HVyoMfXa6fN3XPKur5tYKsUq72sCfHMiaDL21y2dBQHFtTTd84WoZ3V5VhuNGMqqF21LUFz7kzPWTzx",
  "key4": "52y4gzVQiuibJUzGBJF7yYczR2PSMLzDU7khybqBgYcmngKRhKRGSLR7Hz7ThNLgTjgLhwmxhouV9eWv6UWa6F9B",
  "key5": "dFGi6gGEzvfxZrpiisaWw1oPrX772S1ZjBuSowVfLgpo1WjBH6emgV2dHQBiGD9UEpWfktCru8zLLUTACVy5zm3",
  "key6": "5f6gsrDVsrxvY7suXAeeybUfaWQZ3JdFo6CmwRLcHPf1QPBt7motv4MesoA45VZG7KBWcxJKMzuft6TcKpqgNa7m",
  "key7": "4QCrTmoTB11fY1FBnkyd6w5KEUZb2qZ7qh4p4ho1Hbri51m2cJjh1bWgWPhGv4HXkJxM6nEk54q4efcDfSjUNUDp",
  "key8": "3Qnw5DqaFkmTtSdUFnXNJRZCPrbQWmHTUCznT2CF2aTKVp85TSFWXZ3GJYEwNPc675oQ58pPmV5dFCws4vghNPGk",
  "key9": "Pt7BRbQv8jw1R9fhBXYQ5PkB1RZJVAbP6H1mgaFYrrK14b4AW1RuPSzubfZaPouLkmckvSN2r5g27H3q5hxviaQ",
  "key10": "32VevxqWmVBKbfPCjHt588Wf7dHHqypGhDUzPY2coAYemPHfuTs27KRdMbAgLHkM2G74x2z3LznjYz9TXBaQ2HS5",
  "key11": "vyhK5GW38JcaF7KSSbBtM7zf5NFhK7nC7yY7aGcE13cBwZhB9dttNTJmzUTPiBvUAvq3WDzd2tyeXEUHTnhJsoc",
  "key12": "3GBtiVZ7eZcRcnShVZT1Ng6nKpVEWYp8TuCR8r5WdLPyJWCNSt1G83o8DycQCDN9SLNxkC6B9vNBWVswEiq5ARca",
  "key13": "34TMaHF4Wds1hQEGJctdeMUDyg1xaAbo6FKvo8576wpoRkyPHwVKPG7S9TdQ7JS6EYbU46NBTqnCrfMaYX3PVqLc",
  "key14": "516GnbXjR85eAG3pcjT2f35x87UVvEv6EjJfx4zb6uzutwDzM7QzUWB2FdRzTAFJCCzENTUsCi5ayVZXd3Vu7Nhk",
  "key15": "5acfCZooatvngXdLH9bX8sEbr1AVraHsY6TZYDkQeAeTfGL7xTa8ShMFQrxzb6fsB1N8PRTtPJowLeDEw9jKHkUX",
  "key16": "2rFepqu61BkKZYjiFD3MWccn5hUqSYes6ZRmZJ99ab3V7agerrwLtJwNtRwd1tmD77twxGqof1DpP3nr8bRojwuW",
  "key17": "4TQvWCKUr8KkuYkZbHB2kMzL9omF6M9uJadoP7AHcJsmxN92mNDqZCuKWNyMgafj5HQFQTQSQJ2GZYvmoBwvBQRx",
  "key18": "4aCS26JDgowZwwHrWbcSVUSWA3LXDEb7URrjeznHRXuiJHNpzt8bTbVGcWeop5YDqQXETtFkafWngMVirYDH22tU",
  "key19": "385aasQ3uhvEtgUt6JXpV3zeZFKz3pZSRLWNLijNaGNjpvheu6oFgS6vfRBodxLZtAWzEoB6VjWxoqG7kkmajhiS",
  "key20": "7MzQAR3wgCgCNFkszJsXuYDNuh3jJXPL2pX23RW57A9H2z4gJiCfEKVqY83QLHamsTGAADqxQ8sytNjR2p7MCqE",
  "key21": "63R9kWgTWox2khsrbXidqX9xeL5aCtJgoxaBD8ccbVD2Q9cPEZuJM8pR573AaczY5Twi2vRoz1mugvgk7oYbGrft",
  "key22": "29NwZfqAYz23DDxZuZTfuCMaqegB9Acy5pk6utYXMxQfVQhYCSL2qAin5tCZRThRZpWpcM9aWRygo5nY768vpo8a",
  "key23": "5KFJcUTznpd5AKm84PbJbX2fVPJG9qFpGyrnFfvqdcsJkkdxAXd5b7EuR3wLGunGHGK4mC9noC9SfNYFt4BAHivS",
  "key24": "BQc8N2o5DMZqHw16JkAuTFMhqLrr93HaoVMcFsPjiBw6m4D6DJtXCLGVT2wbPNLS1zmBFdrWniTQmRFBxBy1XNH",
  "key25": "xz9M3BNxwbrGPeThhSPvFd2qBEY8EPrQ15KuMVYTyBeAYcRs4TKgLy4sSZKv2yBkDHSop3V5fdmdMrcUfsdd6xh",
  "key26": "2K4AcV7ACiLboVcAs63vmGfTy873ShqavNH98as1jB4tSQG8eGzBo2W7CgsRFG8rdTCQsFPwe7qeZaqxQ1s8BQbL",
  "key27": "47L46vywRKsHeA2gbkD9YiHNjeB1g5NiJg3g546eoDuuHjugLRaBCopdbaCoyeAMAiLnY8wdp7JQKU5ZXYnALwdb",
  "key28": "3nuGDrm9h3H2fkRvHKf8Td8qsx61xTfNFWkUqPABsFfzVisEBzphhTmHZFqgshz9JCfeF2ekhaxyt9ZqgNgvDMMQ",
  "key29": "W1Csxb8ChUVennzTk8aJ24VEd71i8VSLmMDP4Z5FaedhEhuXuU16BWHgjcq9wDtPyk3o8poYowmDdiYLFucNrvP",
  "key30": "2wDtz9mUif4p4WDeVTZfavqfCRmvTFHiigLtnxqd6oYSibSmXgyBYyWJEvzwidVoi8YbjWSLAYDuiTmRcsCF2wFY",
  "key31": "2XYgWRNdyNLhbKqaXrLQ8Ek7gN3Gxja4Mki87j7mgGp9JUrVCUopfvVB5UxxE85AvfhaXH5GLAGxyjGcuMqdKDab",
  "key32": "4oTxXUidEAWKX1x9wrDChCfKF7C61S7Tu4EjiNy6ChTyZLBQmyvs3V8vbYMJECkkicwPwPHWND76r1tWZw7mUKN2",
  "key33": "3jVYvbmUGZufzvYdVhk9ceS8QVP1nZrMNCawqvn8LkzNFwBDJHVgowuQRCpULutR3D6g5MS6g7ekitmBazK9JGkA",
  "key34": "2hLPxKCvBsWWe4HRAivuqJLT93PKPp1JCuNMoVXK9AsdKnDwruPcirov6Qdbx3Dzt5gbuhGyLHeAcPxtbnhyEb5V",
  "key35": "2hzJZb5vxrGVBsCXLhi63gq17a89uKMayaZ2hKzmTHX4yX8wuqhE5Dart4HYgxBGMf1YVKG1TYJLtD8RJaUSw8G4",
  "key36": "66MyXVvBCfPLaj8ydbjd4eDybGeoSMPSgNS9M9StwyX4agAXj57XBiwqJt3A2baPV3eUsnBkdTMuiAofP7bFpzur",
  "key37": "56efsFDGFpQ4GUs4KG88MEitxspcKzCtCJaHrNwDja8GsKdJkH7qbUqWxw7hzwFQ6J9zcSE3q6x6YDViMU3nvAeT",
  "key38": "46RSrWvhwg5oXPu3xW8QpMeAcQAuQTNvSgqAfkGtFxV1tDLAiZayxnRjNF7m1SgTQp6V7cXUqmqHh4RNDR3GoytS",
  "key39": "3bnGiLVnMsLn9m8uVSbvuGdVvsHseKpE2Krsx8StEuCNWYuKtLHpUT995sP9hMdjqPFEjmGWZqBdPQxacyViM21d",
  "key40": "38ViToKs8TzUQA2cQX3i4D34tJ6snuTH4bNnfVncDs3CkNPUpiUrhELZwafYyB87eRyrkR7pTARvMTKLLsieT9Ky",
  "key41": "5gvnE81WXttZLZLfHyf1GHK75n3uPrrXzXSLRat4pFtVppTXSmtPhQw1SkRzuXBsFGdvS5EgrQh8AAfqQpipzfUZ",
  "key42": "Sno27Ff6Db96KQtpCaieTezJX2gNRaXF86cXV5yT4zr44XfP3ubrLnHdewoZUbW3Q8q4FhetxCBdpGA1GnJD6VN",
  "key43": "T6hDvZJyqdSDGTvYthFtxB4d3UcNagDhYKXPgu5F2iZBKLCN7j8cLi168etCwfnhDm1Z8MHpR7uuUdaLdVkvKT9",
  "key44": "2La2qJXGu8HnTqQbPSYHxR4UcXe8f4KDJNsaCF88WUhbTUnF6pv23SBCSTcfvmTMZp5o9pVafGjzmx1EszTdmNpn",
  "key45": "3FAwE2gNPRTtAoMPHBRhyuLECVg2kZgN8rsHLVjvJJoQihjYMEFZWqun5RbH69FAKd12Uum6zh93fW5kKoz1NfUs",
  "key46": "4D5xXVa82e7e4tWyqLqSuVQ3pGWp7ePNvcf2uRT4Ry4fjmXKd6hgFcqbQJyZoqa9HTMULXzRByW6aNf3eqkyb1yh"
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
