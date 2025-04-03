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
    "4JzYH6r7vzGSCtkndt8wQeguctcoWGJEE1hsMZsGvAwbcXapKFKPKH59kLHnHzrheRpdJaqRDv5rhCMENpSz7xCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ggpJFTZVz51pXwPZtfAVSCn9gizqUAuPc8PHkkUJhzdidf3hYbeudhmYcoTEGGAe2pa1N2FDUWD8yTEtWx9P1Fa",
  "key1": "5RHAf86ntNahQ9MRVVuFY7VwTRLqEafVkzJ141V14DY8CPLwbukgWqmBEA5atV6Yh3xM29y8DbBD8AWUMt4dpm4u",
  "key2": "4sR4suN8xHnD13JDHG2px2zc3SMzwjPxCXZq65DbsCaEPjGMEbvKWKi5ihiZbbeNVVj5hSMbh4xsBpCsFtuoUMJg",
  "key3": "3DyGrBf1ZaEgqUjYSzPyGZNtHJc6Du713fQYCAmFiZHTkDZTrm1EwLcqzhREXYxroQJuTyM3oLwjdiiASh98Rha4",
  "key4": "5qkDdWxmp6mjFzjip98mQU2x2KgPNmo33Bnq2ewKWNfVsGKHqmVwxf2y1cYeBiXC668ZnaqLq351yJnqLEGtXy5i",
  "key5": "2rTKXe3bLXfMQGD3f4Xi8xung3y8Mdjj9aFijAduQMEcUetoD77jc1AmJpEgwKBrv5eDorV9qz8Qm3zrWKArGXpi",
  "key6": "3n4RdtL6iEFhXpsHG5D1eYbcTC4XfAHJSWEH3VzrqKw7vTqnQfBsuPyJ9fZ5EFHx28Ky4xeHmgHmnPoNTWkav3Qq",
  "key7": "3wDizh4p9p3G9igAH41Fipx2mx16SrQbH2giFp8tmMH42RsMxHBy5KiRwFM31UmzWfXfQkeMXwqSY6Ja3ngb2qsW",
  "key8": "ebNUDWXSaXj5wcJEYmrUgStRvYGZSG9HXqzYxwQVtixp1PBEJhM1phprXybo2o4Zg9wcPdnrR1i3amveDWD4amR",
  "key9": "2uvvsaKWhbzuCsnYKt78jBx4cer9TejDGmbP5gwLQifxi5hucWVvHLxBrqsA98kSN7PBMgTVneGk4GzcLuqeZPW3",
  "key10": "3oPZev2L4tLd7zmA1XgiT5iY1Cyeub62oPo6Vgtj8ZYqCCbnps87fA7DhRRbsRMhj4PiJdmhebtg2j24LdmZQnxs",
  "key11": "X7nTCsC2XuSePg4Ju7Q1A1bykqVs5rMch8MJXWztDmzqHi622AYr5tLbE4BjpofRYbVgxYNZWcVkwJeYC46VP8r",
  "key12": "3AaDmCvpxu31cxiTN2RuMu5Z2BrDfZBXaa2P4UVpDrxsgB9pbF7pRngsYz3vAzyp3AMLXeKM6qHJ2ndYV2sZDPZw",
  "key13": "3LAtuNvajd4xjZ2W2as3TwahG8X45281kgdReHZ1HRRtLJRsiiZVqieHCbxmRpzUTspxBQWfUMDHaU7MZ46Nz9jD",
  "key14": "339Ns6hz74rmgzxWu4KgHKoQ3BQk1cwmQe2kNAcNfysxe2GvkMmyHnQzdtiGCWjHdihUzJBEpJNd9Cin5pRHEPAC",
  "key15": "5fXf9wWLmhn4qBT2Sj6WTLJT78VaDV9ny6V19Fa36RyLMmMrbQDxvmEuhPsMMYneJmrhomJ5THgQZSDchduBRrEL",
  "key16": "39TJPiogKzGLS83P6kobnrEW6nd2QraFUL54fApaJxCRuRJT82S7WaHxK3s9egWAKh8XPHUZdpvshwrW717E1xWt",
  "key17": "2v32zdLvEHaisPge3NhmY8n3NEaLr3PkRVEzeAibU3cxcHabwA8yQD1F8c4tFSWMyVeRiyUGjDGYEfs1vrHKoyhW",
  "key18": "4AwacN6uybqKqHpxZuRFbYLMFqumBVWkJyEHFMkqtTFNBXbitJoAEtjvchaYNXRjpmDmUeXzVej1wXjWD2je93WZ",
  "key19": "4oj4P6d11Uif9UAeo6KY6qSXeY6NfcmYGHktPBaU8sWsrBQFzaL96GMDMqpvU7bDvu4X5vbHHNFU5giDo3zDf2Yc",
  "key20": "45XiQj21xysVbyrF7tSzHXz6cM53PFEwbaUNaZYDRP8gwPBbfM4kYZvJV39YRs8PT7auGMrZpfBBnBJt7fv9tg4L",
  "key21": "3GoDV6eGRdkBqHi9ZbkCK4Bc1TegL28DrLtKMsQvzYBV2ucWQudxuoaVL9YegQ7EnDYGpnEvzCegJNdx9QJ44AgA",
  "key22": "42kkYQebLzNji1qnXaVNMp3uH4bLAErRGsFGogPsYvqt9BJT9ULMhtPPandqyJbAHErPJsoq64CHcL9SK2BPjQV6",
  "key23": "2Y6698ea9XBi6QsnSc5qYp848WDNg3qqxrCNBQ5RtDTpZgex6e4SwMNrGARKnZyr1QSdyRL6GaqprHQq4kjkNTyk",
  "key24": "3EtZdkqPuiMapqJTLZyyE3ZqbAywNjJc9BqK8HJMPMp5s2jyzJUTAmuVA3YaAKPxYD8j9Px6eHHGpHMqK7dJ4dCB",
  "key25": "2e4ejEHYo4RfMxyDGFFrvkssPaer4XvVSQDyvSEWvHygePdLGyK77bkr5CvTmcbM3EMMuT5UccaPA3WXMkYcLQr6",
  "key26": "ebfVhPXAk7xbmw5rgVYRXAWhjgBSCTvjS7uFxqXwFfi82DKuyxtuLmYJdA74Wj19RXzr7WiELXP4rf8RwPLFQfP",
  "key27": "4Fwn9bF3zSyfsSZq8JZfXSBeZ4BxV61cLgYgREdrrpBHjsQWDRYuXHzJjSYCUJ5biGVK8C3qPUoeDiiqXybPR9th",
  "key28": "5LE2bLQLLp9LtdTF6PirR2svtoFtyku7VwmnTxWtfEpns1HtbDFGjftzchJNrY8MutM2AeEx1tB8haYv1RJJ6gSa",
  "key29": "4BjzNYwGZ7wZKZKpEzvnkoahQnB2kfpnSVVS1CMsVMHi3wo7yJFKVfmA4TWHutjA34sQchbozNYttywSaNNM71tY",
  "key30": "T3CMsTNxAvHaj8gQQCqCZzSwCbUgYyq39bHdWn6mWZmqJ6vQZLhntUcAx1vTF2Z7vk8CwGAdU9bLjrT8111VL9g",
  "key31": "3n1bteCDMFM5hvotgV7KvgbaXDTgRXDRDPViaomfRZQpDXei7hqCut6H14eAoScLDdra31eqpYJ6oM3Eh735ACwu",
  "key32": "5q2HGZe9s2qemJcoaALpRPGjPbmrTo29qnsrB77dJ4epb4EUXKHY9XhHkSyeBGZjQoFJRz6jqkghCQDNWt2znWVb",
  "key33": "5ThRgT7wWVDa5NbMxe1YWAG1N4TemdMdsJkMS1FHKQQuuDTg2TRmYYKZYbXReAHXbJaASkBNMqJoBwKq9yw1eSSX",
  "key34": "yXbdqor5ZW5HgbPgXVimDfDmD5KQwoxRSRdET7nVU3PYvkNJ1QiU8CatpPK8mGizJenHMxggwG1bMNgmfYx2CXT",
  "key35": "5H6sRkFRBdZTHm4oBM8ec29rsLzDcqqfneGG3QFphTpsjDWWD1rN6kSbodkRPCMLR5CnAP7UuiKKEj4srpmLg6DA",
  "key36": "5z3G3Gizxg3PxKdyoMJ1cPyiCwVr6darFvmVeDy2oyewkeBuFmtqMYDKcu1Cek4pY8xG326CQWpqBMLSLYn3yXRt",
  "key37": "2rQ8999EX2vuJJCeemfjc2jAmm3YCWaDEtMKkshssYsLUv3Y6TozMAC3VFD5UvVQ6YJ6cqJk5PCS9G2VAeBqZkEr",
  "key38": "4eSj2thCeoL9ZVWecDFrmCqdLcZTsZvhzPmJngfbYeQeYxC8G6ssfsLpMrhK8G7gUwQYBwTwfRhnPLEZkLtyvvTr",
  "key39": "3izsWYKWU6tVqsrgyzb68FCEEn4GweasJz5jRB82PkbeerumjFCHdd85gifEYCo4vqBZWicZCU8MnW3euAn9QVJd",
  "key40": "298qt95zN5nyYG4tpUK1hXKMoosfuNVEue6ek2QyGigYX3X3k6WeWrBkYpRaGNS34mRK74uRgwaT2y4zHq6hzLNc",
  "key41": "5icMftD6CFRkSFjk5PVsYvCAPyUcFA2BivEz8LP5XGDqrbKewQFRVNabQY36uN5XqLD6RRG8SfyvXeEgTRvTosx5",
  "key42": "2YxxStPkTSdQVnMJjkY6Kr1TwYqUvAhth2dzTctCTmrLYswP155XPxamcvsyC3WX9CpgyLuRMHLHZzz2pqWXRJ2p",
  "key43": "4DHZQWcdSYnv5eQE2DLHW6Zspv4uBhcWYEiSP4B4yuYzMqp81aXVYP5GZwEz54h427teQPxqSNMsep1ff1PYaeV8",
  "key44": "26T8MptUBjkL9KHJucg16EG4QEjdYExxKBRC1fV8vnQRH87HvyWSLa9apzwoEyZy5p7HH1ZVUMZRo4JMCYQLF64k"
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
