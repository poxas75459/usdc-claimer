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
    "5ZN5FnPhoRHdXkKNHDghSLEdGvAWjtydHs9CSzNjWQvyaK63DpvMDfodehCGiKE1bAq9TrM8HLihjvwQuzmjcPBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q61xmkCrSW3uxmmR4J2cLTyAEMDYjvaSR5h2jPkaRooSzG5DiLLCBNesSSoqcGzWHhjyB9KesjwkidDxffg5672",
  "key1": "64HEgXxiamx5ovmGQJDbvinpV7cKL4sbuoq8FvHcmZejeoKtkGTqm5ysPCyfMgoh9p4k75gQQp7SVL3ah2SsRE2M",
  "key2": "4RQQCvpdHhToz9N3EpH9tbSua1YBGn1X4v5kprKXmku75NCJzK2u7RxueDDvbqYjyq4Hja5DEnXgJvtNvm921gMg",
  "key3": "35hX5xjFuM8vYXnbuoExEgaUefszqA77po53dj44MKMGVx2x5Np3oq4XCDFfRLsguKneqTMUDK5bV3KWCU9fy2nF",
  "key4": "3QyYFm78EuqsdCLSzbzvvkJiQzpvZMywoANcp5sPSTdU6q4hp7id8ZHykw5HyKMLw54qt4VSi6qn2JEcBsmtGHDG",
  "key5": "653UBuPdr3Fq8i5aPNpx7Z98UfWSDuorut1Y8FuZPpGje11eVvcu3XfmvMMVEtR2HLabfPGdYhmKmc9xFMuftGDJ",
  "key6": "4XoPqe11bgSxirY5gVngo4iTp6qGxJX4632moCK5Zfpjia8eA9WfXpGoXdKQQ1JhhaDfQ519WQ2jUxvtNTuGuLf1",
  "key7": "37QDqGziAA262WUoqW8BF9WGpAyt6gnQXbUyZ5dqAzn1yyGLJ8rTuEMz4YmoaKfeJmW4LM6xrFuSDH3sB6WxY7HP",
  "key8": "5hJbQBPqixcmMjCGi1tjm5x2t1V2R7pQrUtQxAvvLXqgwETT2D2f8J7U2bfRKKNCoyTf6rzNHtoDpcu9g9HDaCT7",
  "key9": "3K3xib3JwXtvJxXhgMEucFYtuQA2cnL7CLC3sMDcvkRzNJYCfsC4etKVrnsxuo9NAeYrvggtzrsSnux5v8CQaKyQ",
  "key10": "Kxvt5xhV7MqY32tYCCPZgisEYuyGq1jtwgNpPySCwUWvtgpQSDHZ8JnCH9HTs4SnE9x6K2sfPwAapvkkuPpvX6J",
  "key11": "5JWj1mtTw4GEbp2JptcHAHDcgYxNrwfsWg8phEAG5mFEtqXZYRuX2aviSEEokdsz1opPbqduEwqcaVC5AX5kCfi1",
  "key12": "5cP4KAGx8Bdzs9N4EnSWuYk7vzo2QTAz5Th8PxtETb3iyZiKDwzTjmVaiK4kjTSooVBMCuymHULSkg8u2CZBa5PX",
  "key13": "4ZREQYL47kbJPc6qgkvDLtEFLRrDY3bkfksSwWGdFJ8QJS2EkdprzxWfd55JwGqzNb9juTr4qnqN2azZdoEAUSS2",
  "key14": "5hQJG5rETkg85PmQiA7NmEtggxrPasMU76fT6wQkpquVq6KHsNnW8vMAGN4n8t5cNnPnK761C9MX1KwKJ1RYo1PB",
  "key15": "5TMWZ38q5r5Fewmv6zspMCiaw6fmTrZb9e9WZgPtWi5gkJD6vZ5T6aTvzLdphtfnJyhRnT4tWUqgL46YhYRAo5q8",
  "key16": "4co6NvpFkqZ4pKcG2CD7cJ2AXqZL8wiWE14RTXzQbXA98pBqhtvu4TrtFDzMgtPvFwvRXDndmFZ46VTYBWVuACwk",
  "key17": "5StLCDVgQS9g1M54rAMBanPv1YVb2e2D43Su5SGDmwjkQ94znUWKMRvv8dsvdbSqDLVfUw2nK4YK8sh7Pue1avpZ",
  "key18": "3V6BDDwE7qKbbuovWLKrcKVCTP4x4aeA7QGSo9RBATE3yB1MyJRgvPDGRMWbobR1M7akJThA9fVDVTTfuj9jp3YG",
  "key19": "378xX67S6mzxkD9F8aKNedgCEqTxU1wS27AMZRDbpDDjvNkswAeBPKKAW77ZkdTBM1VyfHrycMsMSnRAprGEfcZZ",
  "key20": "2eKabjH7BfsQpKtUhoK9UdPEUbobt6pMC4Brth96y77MX2GtVmKjzaWHu6xjHvuN6NZ2BhcH1EeMwDNbUnZHiD6J",
  "key21": "JoS8Tztsp2DaTNm6GWThWxNZCjNrGvBXxXyBPur1HPG9pC6Cerh9Rb3L9NzwSUyu25HV9zgoDVoQE3bZEQ9CopG",
  "key22": "3uExkPeb8KXeTC9g2yvPyFy5e1gfiK4uWmzkWo4DyDk8iKAaC5SmHCGD7ArhT1Ne9XEdnpDukhAbN568Y5rKCVyg",
  "key23": "4cZPNxPdjKS1f4q1stKBia8B33TFEARAQXWxWiuvMtwPtoDQRi5SDvzPXzZT7KuM1gxh4CP5DsqxHpyKWrXJcoJH",
  "key24": "3oMu5TQ5dg4nW4e5vbUGBTkDQxdaC32D34RbvQCKwakyrSXUSZe9TXY5bZDgz28mZ4TFWSLNnSyjd5SXHE7PniW4",
  "key25": "3TRgkujmrwLXn8QgZ6iTrL18DVCEzcWMKe7oGBVzRNyepbfAmQd2gFegxaRANH5RQNKXBygF8wtDiQtSjFbnRFQG",
  "key26": "64Vht4qe4NRc7RzniDqQXSGaCwyLmBiZZmHBqfGRd515DwzA4c5Bn7wVhDsDW93ERMDAFtpDM46Sb7pr8Ay8Bzf1",
  "key27": "5jJfjtyB1GtGRALReExutKySREwh8ecmnaUdKc2Nzkzkynjb8x64HUMUcqxdSbCYXeFVs691CNg1ZzM4jZepS6eG",
  "key28": "31jE3ca3YRbYRUhAkCUqyXKKp5z2sRz7n7ENUJ38iEUP9CroDFk6yvPpxyRTTaDpgyZkJ8jyEH5joWpfkK1QGbZs",
  "key29": "2L6oGpAZQjkEn4yQN4y4zY7TcTSdZEtfadksFCvjZwiJPmBoaobn35kJckw97GfXLVPCbU5b8LFX1e1xopWndKvm",
  "key30": "5Kq5LKgR8k7BkEJVjqEHocZiLULKTaBQ75NCHgyXG5NuVLVsks6UMLMmtkqBXLsYuPUUVv8VGmsgzaGY6HrjFupx",
  "key31": "udaAhiymgc2DzYswZU6fueLa4SVcCCKeReayT2m9JQS6jhAYwT2DvHDsGD6Mhf4CxTqEZDRjLJRzfwtmuuvfMko",
  "key32": "5xT5PaB6YuMfkNyswjaBKesseGabiQvFZYFodZoczCxY8iTLWJMo8EbSq45EULgyDiB31acAQXyyintoUFVUD5Bw",
  "key33": "2iD7s8X9K5dqkWX8ETj9W7QNn6ogEiCGWfwBF3xmb3Cqocj4b3GFsiSM9GQFicoQv9A4jvfiMo35e9T2eQkc7fmv",
  "key34": "3P8Xer7GhNLDnFG3E17j9EKK9LzxNBqnCy7yQHZhKdkrwHfWXv3WiXWZxjxJMTpzHG8shcD15Szxe3qdnp1JJite",
  "key35": "3YwEhmwqG3hptvZP9JiKd1KUWbzvpoNVQVWTKsQ7ea99kwVN4S6JKVNjGPFdNfRB4ghpEqevfng73PKYzJ3yUNgT",
  "key36": "JkeQ4m2re8KCcgNGxVY4FLsJ6qg3cpFRxMjew9x8kBaALSYPcZysCE4Aj6sibNh2RNnsitecCurCR8KkuSBmRoZ",
  "key37": "4wfnFKoCZgfStEf53aHadE56sF1m7pLhZcfyCubffJ6K2pbdHj3Rbv19uQ6kViKJtrvYyQd7Jjni8KV435SnetC1",
  "key38": "25DJXAh1pWcKzZVsYEdutpsVCKrG4yJ7KCN9pQFTmqHKqEzZKV9whs3v8oXNx2BS1BRE8EAQEm1m2UzRMggXRT1G",
  "key39": "2Xe6pjoUtfm2wQ5yRL9cxFtwXFdLMteAReaXmdNWcPq8sRyqxVEizTC8Rt1ffGrDT9NNDjJSnktCYtVttSsWsqaw",
  "key40": "rhaJNy3oaG3w12WJAc3qPpgHRLhyx237yWL4nkKd7EinRa2DHwEtNKGWcmwkdbCRnW9wQVLi8REWUCPrM3MRwjG",
  "key41": "5RKdRVhKXLbHbmHHbJw5otcoQYKpNjgZcxPvqtPCGYZ9837eGP3fNkcgAKPMCQ1q9a3voQRXJicjYxDEk4QLEHoK",
  "key42": "3Vxif3sTxMN8c4ZHKgmep9kXTZzwPVNcW43CHHX37StGPsaHofE42EiWPPNY5XwyFyGBDnAp3h2bVQ7LR573waJU",
  "key43": "xMf4RUzQosMDJ2m1KspqFrQ6MRvetJTmsY1EQj6gkQH1wJWLi6zNBVUNdF6UBEA8M2yKCsyVowbMxtYC4pdo61M",
  "key44": "3SC1Pqm8QxQgwNRKorgauFrN2ektqF6j85kVgiT7AEga9YsDVmaqQzQTk1FDqxPeicK8xtJ8tweqifXozfBskNdA",
  "key45": "Zo5Au2e2Qi9f6aSL5S5XmpivcdtFyN2HqqBE9rqQZ8ahbV1gZYuoSzGaJ1zQF4gXvMRBW2HAYG65wWJCvVVCuaB",
  "key46": "21R7JqtDFYyVW9CeGHi7FEqokf2iRxujAETJFTcxcqp7WRSK2mXTWGAry8i6Q9RCi8fLiK8Vxid9A1CgFs7GLYqK"
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
