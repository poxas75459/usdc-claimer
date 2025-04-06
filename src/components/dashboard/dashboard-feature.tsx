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
    "3jVgjFEtLRJdZRJb22w8X81GFosv2dZoKwzbfDFcrFHFVBKX9JNJJn19GbmZry1HDsDgUtURmyQWgFfyk6Bar6Ah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gwpprJdUseKfFYdf55rMZCjdo1wwJt3pX8wxHgKSsFDSWBTsKCA2vn9AAaQQW47V57t3nqbbSjoo898NVn8WEYR",
  "key1": "LAUMDXcfdexa1No9wRtKSv3mMsNTgy9F91CgKeXr3oos1ispcx7hqVTFkyF2LQRVnQ5rMnfAyGufSpP2pWWFiyf",
  "key2": "4VmiRm3R2trYv3igW7sm7szXCJ4KnWV3UAQNnhwKGraQVXheKWHWsVzb7jrnnYusPgh6opSS4PXowLQuSAFhABEy",
  "key3": "2aMMaSU1oeoQmCYZCTPT3SjaDhRa8A4Sqh4s8rhrnurpma3sTtrQ3kwwh1JbUKMcLu2dWwmk4rje53tzRkH9eTAv",
  "key4": "4eVHnxDRux3nd58wJvFCH43GVRrWzn1q2K8xUZKjqdBS9F5NGxCXFhwMRsxnY77a43bG4yMtN3qTr5su8iB48K7U",
  "key5": "3kUscknhThxhyst2rjJMXJWQpRzHXWU66Vzd9rTHSPpALKtPs1iEgAfUY4JrvRUisatrYFt3jotpZtJceZ96vGDc",
  "key6": "ghgj4gW2Mo6DbctixtxPKrum9B9P1kkPqEULxY9pu8UjgE8qyRff198SJgs49nwDhV1MMrhvD5aBMpPrZNNhpay",
  "key7": "5Btyhat54J9p7HaDTPicRcZP7fEKFE3BzdSgT68PJmNm81QMr8eiQQE4YFQpdcRmxdwEWpkmT1YaqYWmbZi8AAw1",
  "key8": "44ydba8kMa57wfwApp88RkuZUc3vQksigEFvrzHh1o8jf5PNWN7cg6rhQhdQwP8rWQEZ2NXHtDYHUCA6YQUc7jJu",
  "key9": "3ZSxUPfqVESzB8MoTzCh8ejQcVTi7LyR97fADyGf8HW1mqBNtMacRqxDReXXKTXEeRubRfWxWrJfYKP92LnLfh17",
  "key10": "4y4q3tXRuLjt3Je2n7g2afFkdaUC4jCQD19eJXwWR7uRhpTsE5d4Judmt7NReoSweMRjzKT1f4RBTrr5ZZHydJSo",
  "key11": "2JAofgd1Bq5RPhxVDCVkWL98zSf5KEyovCRzEvCG2qE2PMxxxt8urKZ1tC5Bi38AbURde567tCpWj4KceornLx6z",
  "key12": "4cC1Zb332HbNibqTcYfFbK7eMrJfS3xGeh4cgMTfTgDkoAKopotxRSiPB9WHhe67QVbMuqD2iUXKVaa8pZkLtX4d",
  "key13": "5V9Nb2N5WmsZ5A5MsdGi9NWo5hercwQE5raBXSDqB8X8WAoA5RiPrRhbfz9NSBGVd527eNbfBp5rbpfn6aRR5uVz",
  "key14": "5Xu9sxMSMX5oboe5WYdapQXuhXsP6xKSxBz472K3V27MdDHCyAVHFyHXCX5K69EugDkGFmANzQyM92rQQQ5Riqcv",
  "key15": "Mh6DaKB3t95mXMJnypAdNAzvauZuUCfUVCKsmhn3vLcK6Aak29njbfvMcfqf17jjvi2ZMwwxYEMkABDuMFaCyEG",
  "key16": "314wZnky5y2ayFzExoz4wu8QEeh2sC74hWcTCDXrJDc1w1URnFdvgJD6udKSSRyxxmSUCd9rJY89s3t9j4zPw5As",
  "key17": "2opSKwpb6cdafS9AkmLDvQgoi4Znb8KNN8KgwneRPfZRTd2HfbbcK1iJXhYw1GG7WurB11gd8dUJSuNtfCJyEuyw",
  "key18": "4Horo3mYdPeWTXH6WRF4Pfs7HqWSgWAcH3QAZQ28PQ2iFun6eHcyDD44RemM11q2b2BkKJqc9h1NaGTgmBksVgq9",
  "key19": "5ooMqJ1wcsZUBoixwUSMpfZMAxS7BPYUAgvE19psFA3jdjXEKAtxKgrCdao8s4XJU9HBSHLyADZAbiu9J3Ns99m2",
  "key20": "2NwHSaZiBjW5a7U9Nmzm2R32WkVp3caLzM4NzgQk4nxAUAE7rZpCWQgjVByP5BomXFMxvS6MLTo8QDyEUVbfgeen",
  "key21": "4oMXA4k5DvCmWU3rcUw13Q3EwZtpa6EiRtcGgACoNKA8eXddz28WRKRpULo64of1HUhq7Ge8Vy5nqGdqvLB1HNd",
  "key22": "XB9fB2r4V6AQWL7HchUGmyP8bhZhU9scoUXD6Yt7ucmQaxCjwJxrsFumGc6g3yMvzCGEVwNT7wEdc8EaPgEDYU3",
  "key23": "3ihTsfB2docwq4RKh4aM1NPMVDk5g1Jmm63xGfqYjHVrWzSkFghQhFZhaQPPuk8gBq93ADaP9xyMPBtpryFeg6Qt",
  "key24": "4k6mWed63TmwPK5AZiEgNwNR2E3FHcaQfBgXYiNV6Axe79yQMNJXiHNQa34Tx4yGXL5efiW47feUjMDN5epLk3jk",
  "key25": "QsTR7eS4LbcSVHJfV8MPMBLvuWvXF4cqy6ZAF3FUYonzxyyRoUJkNWmmL639tUNFp7zRyUbfmdkQngdEtLgXCEH",
  "key26": "3awYoLyTYtDwMK6JV9kM99i5Td4kq26QUswR9aJYmiFNRH3Rwg82epk6fHj5JUXw6w54vBVvjv5HATErky3WJApj",
  "key27": "2WnDJ95BPUKoga4dWnDhmiRR6SmZ6HrGiNitMmCC7vSSN3MTPYLAGNdhTRk4zDTA1wXR3p1CFhqLrtUmxH6T8B86",
  "key28": "5sqoVMfv5GCnNhe8KqMs14KsZjJ2nJXA4LX1rQZaPZnj38YmP3E8ueCGLg7iKQgnMUzBDX9MrsstkTv4vBRsRviW",
  "key29": "4Cvy6gzZuSezPXP8nSKtfjNRrSPAwbeWSU2y4UfLJhvmSFBrPNi9FfjagUhAHW3Fdc1Uq8Su9vusxPHp75zKDoah",
  "key30": "57PgSe8RZZxijh3qXVqnE715CSkAWNCa56PTwZ99ksTikGkDhpAggWcwG5w9KqavpHyHToURd4yfgeSCHwX1Te73",
  "key31": "4UkwSbtkPopMFNzwJVGiGxZsnryKEm3g4QQSEENQAHFQrQ9ie2XCskSrtET6NNdqDHC9Q9tDbovheWwAv4V9yr4a",
  "key32": "PssfnpEqPHx2iUDEvZ1ED7RaHPL5yeg6D9vyL9FHw4fmSh3rq6z39G67eX5vCQw4g3LATfRTdqEdj44eoYdjxbn",
  "key33": "3CHq1DwiYca2cu48ChK6mXjkN2dqQ7UdBMbPFQ7ExjESgZ7DuKvDDByVhY4nUmZY6MPoPCG9EHZYGoEFoiKPujrJ",
  "key34": "4yd8bqFYf1YwmPdGGs9xCdhEQoLNDEC7ynVGjihGoA2GJBP3qw2DBgEqrsJR96Q5sW74ucX2BPRPZn3rZwJv4Gw9",
  "key35": "RdvoDMbLWBqxQn5bq3mHA1RDovcCh2srBzrZoG5uPKgvF29XEzXqhXfAD5upDv9Nhs3gtMsmzYQCmfzC6dSS1aP",
  "key36": "5U7h92LhjfSPNVBst1fTsALfJqa9qe3K4Xx3ZHXTeXL78kH9YYLYNXye9WrrSSnK7tyofRDnVogXBz7k1J7wF8ks",
  "key37": "2FxzmAtQfR5M8zK96Uu68rpPyamfxBmt3Um7DtGA2fkR7k51PNFbG5KA6gLDnzHkAfsZLzHdCHY5gJzDXYDSbMLV",
  "key38": "2EEqDBathb6TAReEFHfLd8sX25q3rAXRKsVwJ9DPh3ZHb2kTaWwzKSuokHrkTobmGdsp2nSZPPi1AWFGPjvJuTPm",
  "key39": "38p7th25Bek3LGRDudo5Hakznuwcu6HTMSdQt2XqniMvCaD7imJrhTeoSoNHzFtCFm6KdtkmMnUkqcEWtadY2LYB",
  "key40": "3RZSbZGFP215Y7RXVkAo7kpGmhhDJwRAWDGR2b6puehFBp4UEkPZ2dHgSiyNkeZgCeMvTjSchRGwfxTFLXKQuhrg",
  "key41": "5VJbkNDLKzZrjbxrhBUpTV5rRAs13woU8UrLjeoahFCYKgScE95eaHPoaf7K7Yw7mCvoVkvZgRJhMZDDmpwbpYk1",
  "key42": "jCR1BxK5V976uWAG3bpUyVeB9x7y9pVYbUsaKvQyVjbhZb6c4AVGKFnb4rFgjKNeGdH56gZDWHPWT5ngcGFJzHj"
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
