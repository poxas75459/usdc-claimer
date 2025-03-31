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
    "dfdX1VuxgDiJr6JMWBcLXmrzi9KENqS5FQE57u9tT3aFFtyk6SViejq3Et3sdPSt4izDJddvUVJGKxZzYL2EXf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p18t8YTotBJoZoKCanhSdDEkvhAwecG1vf7QDk5m47a4QAKT2yFTfhnsPd5m644hoFrfJLwoo8f22SRLzKabQqT",
  "key1": "3wSPvnSLZHo86z8K1RFsmydzDXTcB3QPkkERWY8qtLuoFDSFYArdd7rZuBRN9hFbNiJYctjGK8nyx8DEt6ZveP2a",
  "key2": "511dbjfhbF46txGWJD92X7BcgvZ8qMAbhfSauEAHXrrms5rruFjAiFWpwcS6BoXqy1SKmCBkD2pXJtk6PqbyX4DV",
  "key3": "42VJaZyjyxximZGxpdrZGSw2jXYvFW9UbfPMUYNpWeY6mB3zS6bJVbQYCUZVh19nZM6yRs3k96QTPiACYjNn9EBb",
  "key4": "5Tqwn1mbEd9GkH1iUmTqPJnF2x88fmZjmLWa4uaEJD7H3dz99oscSV6JLevZB6uBw12iATru5knk7SaakVippNjY",
  "key5": "3HFmNWUFpF87LCSB4wBpDgt7FJnwq2csMnHsAegiun1rx3aHurTwowTarjmpcAWMMWDAARfmriA2hN44f5jqkLgR",
  "key6": "sBMU7jMNucGq9DXMNagGsNbgwPscmoGi6Eqc4Rgb8Nrr9ZkHgxV6vYZpDqtaRScmtGhwudmEhWe2TyHFUAmLYEZ",
  "key7": "42nKTWNbLXFLTj332j6XQRrfann9UaCKCYKABCJpdC3h2PixRyMMk6nHKkMd2rfeqvSLywoMCG3esU3kdHcetLjS",
  "key8": "58LaJ5VPbAdYr4iyKbr3U5chsctyHmPuoetDAgUHUP3R2Gbfg4BPgenUoqpiDmpr3VwLVhPkPYJ3uoVDXXXJ99JH",
  "key9": "4hHfmp4h7uKfmuuLeyyqeTnJBcLQcUjMoAR226Nh9DFgfrhsHyXz2zoWdAxMa4UwsxA5SDMVRtgqxP7F9XHEEwUi",
  "key10": "4zUgwqnHugd6tgksaY5WWGiJqtJKt5EHPqee2wdrgT1gUVUukTZL2NZscjr37B3Dx2SepNm37DTWkhnEMLFpj3rK",
  "key11": "45fYZnnsp3p5tAHZceWP3S37r6FTMzyr2VgzfCAKynR5sxSxmaqkEKmnUVs5jAZ4e2VaTpb9H6NTs1hV5fqpwnUo",
  "key12": "2oTfPjVtWdxqTdJN3p5UMz2QBZaHtre6tHNmbpzi3L3dNLrspa2cSrMYTsDo7ogbMeY4F9PWi12bNQhZdgPc6K64",
  "key13": "2gTJFQF3jiFkcyAVQ8jxQdyCRz1E5HtVMsTB98LafoEMPbB89kDgVPcjQ7Pbd96DFJGi33Gf9QbTbdi5qrqzEuMX",
  "key14": "3PZTiGGo9FJMgCGu2ksBLTZXCUkgydxB8DevP29GGCfY6hiC2vFNCVcyfqQaM49CGyCsWaKzvLqGgSEuzy2mwHPf",
  "key15": "4ZsunnL4T7r1LnLkD8553yM2qMhEeSX7J4ErxJpPAP8GSJn2v1sdMiML8qacga94V7XU6VTNrkTfojMgFE619bNL",
  "key16": "nhE4rndaYA6knE9kMKXVFkziw7wLZCoFdjJfaz3NxFEK7qUHoSBdDtGEQEKDPrxUh6kQhqxJvmm6EnNidYezBxz",
  "key17": "2XL5u2NhzdV7px5mfuxBTixv3XqzUMxWgPajPezeAcXkfkTBp73jzR4iBJfZZ7vqNo8umSRA27bW6ooc9Wr4Y3M8",
  "key18": "pHVYd9LXuNdnKw4cFf46GMEWPmPpW19Vzh563T3NhPurnd9dxDke4NWF1BVjz8Zu5mgeq7hKLg6S62W7z6iX7ye",
  "key19": "3Fyz4VrNdnZzhDytSg1C9sPBmNxxXDiiHgjK8A242AaHgLwNukZhLmYP7MknbT4VahN15iEy62qsGgW3uRzA3JMf",
  "key20": "3D9EUNWzt71tEo57hd5JuJ1YemAbTgpLfJv6MFn86vtH3wD5HCSzpWhqSAHXcXvPWj77ZswxAhfUShhKo4LJt3b2",
  "key21": "5n8yHuXCEhepw4syLmMNx6fVDdXgK7UVHAn33uzafhEG3ZK6Ty3CfSyWYMyNx9EqiBkAiFTMnYT4ipo1XA4oWcfK",
  "key22": "4fKpwCJpUpGF5YEbSFpV5AQXAniaqFtwdSjWo3EcB9Kvg11s54vJPp7EhMnRFrkRKUDDv165AWgpxzFTvF2kyLNV",
  "key23": "5cH4pD3wHZ7KuhcXbRtvE25UvLcxB1EXkArq3BuJwFLUPzcXfxyeVQS5ZfAWM8hzxYn4seeWRcvp9xEWSDiRSjoz",
  "key24": "2ojJzhir861FsTTjci2f1kJaPdajrw8jBgT3pNpXahSeLG3uiNC9BbbUyfntxNZts35qLdN3yn9EeovL15BS1eic",
  "key25": "5k8KHzdTE4mCcewJww81bRg2WGVbZZgLymTsRd4AViRUm2zt2BaLmrEhRiNSe4mTjBGLyodCuoCoTzioK2VgEGsx",
  "key26": "2vEZJaPBApLkKApDi63ppieQqp1Q4QzJsggJWqZ6HgmZtzhNauVPLrKFhHsSyrYJ59dbVEaUyfDn81jBZxYvWx4B",
  "key27": "2syoL8adYHW1HFkYqdGBHbN9o1kT7ACjHwJY9iEZ4R8JBNGykXoZKW8eFgV9vyAJiqSiKWw9WwmS7bvqhqj8Mqyq",
  "key28": "2ChuuNuWRZvMT7STXhnAHpwu293Fc8Sw4t2wfLMwDowBjyyAuE25AgmTvbas9gXKD5zc3Gf3RR1SYV9k18bWSKqH",
  "key29": "pCc7GVXVckDdAPGHFwpop2akLSava1sEgYdiWyhvLvnc8J25rCTZ5KnPfAEraYciJvN1fLAAtS8y8w9W5gHN7qm",
  "key30": "4oXumVBSU2mzhd4uiX4i3AvN7PpLZ4CZuSXxcREY3Fg8F9G6jzQ9imSiggWKpjS3JhWwRe7gM8zU7UhZ2Cj8pLfZ",
  "key31": "3w4PPi2aKyXiWRLwrhXU9pU9QWkJ3v4TpduKWbjkm7jeFDYbJLdU3yFKpL9gEKAyvXSonR5eUpzbNeCT1vCMQPVh",
  "key32": "whtDs6MUfPeXTvdLnmt6UKeQPbcqhKdofwzAwB98SG56CYdCPryd4E55HSLh5Gr7UaDbDGXrMfQUEe8G3V81FgD",
  "key33": "2Ch74CrCBE7JPHXVdaThpE7Y9zngSsmbZK2gb6Diz4Di6ZmGGANsvYpd6kF7tMePwqSJYQwa2ZbXREvJfYv9aEzv",
  "key34": "3iL7c1QkbwAzLLYnJ6TQocovkD6Cv7FH3VqRhwmGxTaYmkuGc4Xqcw3oUXGAAAsYwiwFVPp2NdW5WhoSpBMh3Hwf",
  "key35": "27kfU252Q6t6qr89iJWnGi4gYDReTiYFff4SnK3AFCAMdk81DdG7NMj9Yd3C1yks5QeGzAdQMmQcyfite6vtfjJx",
  "key36": "3yHSGoTHikCpuNCzPHKXytzz6e4ymGbxeeF8eioWL2DdXRKS8f2cYskEcop5r5xfqgSVMt8ac6zFLMpGnx4VirdB",
  "key37": "2BCeXSiHnbZipUZHJKKw59JVungXXmG8Vikzfq5uJAqwaJRx2QhAAsLvsrBjxSE7uVSBaEhL7xUF5hmpHaSpy3SW",
  "key38": "yMKzrhguvWW4b9e1JbKWR4D5LN568tg4SZzdp8dYgaQWkgKJyLaKY7Fc9HW7YQsd4UrXm8xhnF78QwUZHPCXeUT",
  "key39": "3Rhfv1TLYht1x9JwcLiq36KYVBf6VG5ZrCmq67Xm5e6pRtimvNLPcW4qtMBEM2oLxVczGrWsHFy2prWQmNHNCzu8",
  "key40": "5XfHJmUEtkNNpgAqDNnBxd35FYhhpVw4pyutf36oXdTQAE4Me3xbv5dZoQqKpRFkZWikRJHYkMGtip5kZTRvQLw3",
  "key41": "2L21i1uDzsrEuedxL8BhXvrUma8j65vCAWyhTbroEWLm2F25yxe9bxSuieNoGUp6szjKJBRZnSBHcSNjYR11xUqc",
  "key42": "2g4ENybcKGazgYFgV6L7hhNaVYuRru5zQTgCdhDJk4g2XqpxHzDJfMDrVfLV5riUhwU6CxzAcE7PDJkTMkeunYD3",
  "key43": "5rBKxSADKDcbST3Ky6tnMJN6h3x8PmC4L7VETjd9ETwScdAQMse9FNd9JSMefdHjHgTuPB9FNwVvscFh6KNP5cRu",
  "key44": "66gayeszPLGXAbSXQYeBvy38nZX7MSsizYg5jpjiUnxsECfqboa1CbH93k9Mnjdh5cyG3djqBdxzN5Y4kgW9V7Qs",
  "key45": "37Mf6MBYBouSdCBJjnohzctXoT3WMrsDRBNEt25SbzBirwbu91RTakZLXpV2SNKWGY8mQeMqtRE9EvujsnP8pog9",
  "key46": "5jepQppFu3f93WLU64qiWHuVn9PJAcG8eg3a8fuqnca8vz6qb86xyGMbGAxTHJdhXjRfgjXDRyLMyJnbrpqc97wa"
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
