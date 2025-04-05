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
    "2zN5gY65GF2Z3MRzUfKxzQ3Ah53YxhgvGMpFTwRB4FPrMpKfiDG8r4VHdpX98vgKNgcWEs7ezXQ1sZSVisKJ4JHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YcdYfk73NMCKdtXDSWxo1Rf3kmpcNM99xYnbKCtkYqKSAALYbY8uu4dWqwYVihPADAi1j2qUjwiHNHu6ZM3vZVw",
  "key1": "4UpYjUtvQhgXTAUnuXaMJrAYkwfdYfKGvFg6XfBq64xa1Dtd7sgbnFG83RDJv6MGzeUCMyAX4TbK96jm3Sa9B1ND",
  "key2": "5BXsVGzkHxjivv1v5rk1HH5WR5KZbpHvCtSg6FeQbUXVAMd9cNpJZAv1sRduWwuDJLUY6f8MGx1PSPAuZPZ6pt2",
  "key3": "4sPF3GBQEsKFd1VUp9ZxapSQ6vaaJtoG11cfmWXC8YA8erPcb8pACgvG1xrtW6hggZcst9Utfj1k9igDavb7muwU",
  "key4": "53sVHCipXFC2hDeBRHPgGKJgEh8A2WjGxguRsD1BtA5o2FdcHaj18MY4FKmCSE5KjSmP2kaEfn1cMeLzaCcRzBcF",
  "key5": "2aUN8ytEciAitNMZmxp7NHYDKmcsLdwqdGizmwPJS3d89wMHpT8adHWoGKSwFnybZXo1LArWdtiYrRmrHHu7nrcd",
  "key6": "YJA4WFGTF98w3bb5RhanyD6K6TmUwF3taMzgeU7on6WPtf8a6mxNnTcfdfXqusapbuBrhmKz1DSVD6yimM44the",
  "key7": "59sAg226DRG98QGA227Bx8mGrtTABpZMhzP3sgcdhuGhMwGuYzyp7VZGikcP3njWRer9dv7MbTEADhwHx34gmyma",
  "key8": "5Jv44mThGSVSgVFsyhnpZ4jTddwbsHoT6FLWynTAU4SoNzr3ePMgTpUze6wFGjnpRw3sQm9qFKuDtf4FTjcDYR2K",
  "key9": "2pkC7vC6qcpLxnoLM672meUvJH1Hh7Xb3jmsk1Ms6RCe8FDqvH2mAz73jAR6AL1GWX3ybc1M2v9nEekvBdeT65Zm",
  "key10": "5dmosy5siqPPTF1Aa25YbieEy7VoPQ4GXQQNn9tni6VraNyLxmdx14dtbNHuAwSvZ43RGMHEj8W8Ptn24WCNGK6u",
  "key11": "5igVy4UZj97Kd1gX6AA1Ze8xMWyYFuKcmuwhhGRYMAfNNF1QAKGTfAdSCmSsr7YqYKZiM4zNUmgyFnACMdyFJ1Sr",
  "key12": "4FVdpuGEDJv49rMikaCoQdtx3rNdsUvta2BjgXayrZvNZHGzx3N2zp6RtpA5xeKduejVezcAUDi2gmfKWG247cD",
  "key13": "3Pw6N3dZmyg7fEHXmHBA7w4wBQZoNhCXe1PLsqTphojJ7j3m7qkwCE4u9nb2myYKCiv6iesU9SufpN7ck6w2nrZk",
  "key14": "4k3LTk7DmD4HmbfgQrvnLm7W3QJGYfjQuZH6t4orqqn3UrCGcovfoaH6fHgyLWS3rjfe25MG1dFPyhFY639Qpa6S",
  "key15": "5DLGkC3wafn9Wd8M3Z27rgL5VYa6XrmTLbvvckdQCMSz7vrb2fodg19hTxRpSzoSkXPPqCxUBWe3Nw9QVUBC46DW",
  "key16": "2v9wpRWc7pdP5aZJJLMRXLPCQQrmeSNio8GP2HEShbZqy9EgD2yJ4Lh4UuUUM1w6pEQS7Bs2hdCyL1h8J2fL8uyu",
  "key17": "5UjtvYjHLx35c9zvY8is1W47weT99z9VETX9j5M34V81H9FKrRaxSwTE2bHNfbdQ6PijdD2ZNJZknK5V55DRrH1Z",
  "key18": "5mjFfKpV85HkXAPV21xJVWtbBEbBx7SrzoQVCKFpnZj4zxAnkVsNPMYEFyUTzgTsNmKnvAkSxpNvAVknZrYXFTBw",
  "key19": "64kLyEWicMYd8RuFoXLDNbrNh7C39CoenTa3MWNqSZ4nwY1vExpksBBJZf1x3SMJZpS6MYd82n2rrQyhjybiS3Ki",
  "key20": "3rW4oa6HqKVb3RU78MmxppRLCvdRYbCSFPn9JT3N6npFBzg2seW1CSDmDLY2ooYdBPAynpMFqL59EYATrRxp9ba4",
  "key21": "4crDpujZFBLQg14An1bSL3LYh77msVhxXUHxydxFio764n3agbCL5XDsMwYWnnGxTW9ipTNiAYxsFaYzMjfgxZVa",
  "key22": "24haheb9uJW3XDZebH4zrnGPvPiF4PG76CYxqRrxtRHmF7V9DmRpiNPJDNbJhnSr17Gv8TH9ZkRBrpquNMyvspCg",
  "key23": "23oaPN4bG3GDqqyjkNxZaTQ7qhgPmgaufWZN5tpHkqaJwbfP6ZBeFdxX1DZ5M62sjBavm8w7sAawZ6sW4MsocF3v",
  "key24": "2Epmdaah7y3Hx6aAmuibKtxKTL1oShinS7A8n2nYgxVD1UgfdMLLQGGpWPAEQ2J2i4PHcYhuHdqxoGHukVxxnkyx",
  "key25": "35NMMHptmZ392cqsyuWVzvAWHqXPtFSwB6FxrkJdJEumvT7g1toYy9BEoCvSMnyUNh3G6ebuYodkqRqfP2UVENJ1",
  "key26": "5BeqVs7sSt24UzHqif4VE4WpYYHm7jhXKGtL6cFHdpkjuG6Y4Cd3wxJQywN4Ws2vJFPm89hAnGvSpw2ja8ANRGoX",
  "key27": "xSBTfgMQvpaxJqvyMMrPWXYbytReh1Czsv2S4PqtB2LERruzjnmvShTTsq8wpnkRMWb8wbrJwSMUZDqm8LSsWxL",
  "key28": "3Lqf5YyfKEf4kkTX2we2ULBUbgXwrQQHRx6qUhaKkPjHPS3g2XR3KpT3Ai6PRKzuHa31dMp8z1Lk1aE567abSVnC",
  "key29": "2LMezwu6NotervV7nSEc2Poi5bFjfwNSuk4qyMgoqHoAnsLF8NMgTvGynkFT75KJANVDsf2ymp23MCxp3fymsdN3",
  "key30": "43RHUEcF5PMHGdPXnvMQ669TKHvmkbk7z3akpNoXDiKsVDPg7ugDBPagqkb5HrUmxYHsoHeyzbeWvsysncPU5DGZ",
  "key31": "2XQXwsKCYihcubQuXcu63Eaa36RkCkdJCYvetDpZoCurGSwHMVtuZUjn5z22K4PymMgtTeJ4Kf8VE5pg7NRvXRV5",
  "key32": "3hdT8PTto8cgM6PPiZnRRzM2g5weHuEcHT5caXao2tnXa9uzBCaWeRLGcPLA5VXbXdauc4Zkn7fXWSLsK6PAEpQy",
  "key33": "5vuFYLQfNdCyywjfKjWZyprtd1UJ5rYCWegPPEQTLzwqeTJe5Bkyg2wi7dWtL46kjqC15oqMSFa9YNQZqem9gbMX",
  "key34": "3pmc2kYVEJbARwABm19GpR59Vst5v6LK2uYdAAVBRfbc5QfxDq6Td1rxH3cJPabmZebt2N6pNh82UKZWG8bv9crX",
  "key35": "2NZEZCPkkWqHwzBnTiEYnvtBE11vjFxE5LEbAqm3muNrQe6b7Z5ZRmr2YKRGv8qkSTWYwMZ8CGyiF9EnwEiowyh2",
  "key36": "3DJXYyo7rWNUzs2r3PDzoeVn1S3WwS6zR4KaHkLsvPQzbekVSJvCyisNcBBw17WmtFw8bKnD4DAVK3jHFmohzigt",
  "key37": "76Hqnpr9vT85WXrzzJdtRkFmFjufFAdjipHVH6gpip91oQL8eeaYNzty9bFTjZ9ReHwuZgrD1eDjHFj7pXBwK13",
  "key38": "4GBzXkuF82VFVpT8pQLFwRyHbAq29GjMjjopmhqoeAjnXtFtiwerQT1VAohUA2rVo7b8hwZC91yHNiSVbzGMDmqf",
  "key39": "3kVE8G5AQecoKRScT9mzg65k7g6q5RhAmGPNfWrBNsDEZmGCcG3bnJ14U2Y5vzUoTZ61GcGBP3Au7mXo2oxsD1zV"
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
