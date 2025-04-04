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
    "4KvMfhpoFE2K34z6WuUWAZ8prdieXjM8NaBabRVwAEvu7Km58rs6bjpijV8X3mVZdGMj94hvCKnW3en99fea498B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CUYNeg2L75vtiB16yGKWDU3tBtaVXTxHX8JMJSKhCcsyEMXsHPTLFcfcCfr8opM7nNUwQpRLCGaTdVGeRQx78T1",
  "key1": "5jsCdgHwsvZWefGFh1JjUxNvEJctP7LrcatoJLvYyuY6VhewBoa4vCjDGHXP3D2LhyHDX3p7pX1iHjodLLQUuqju",
  "key2": "3pWEjEkyqwS3zPqPm1haSL5NTzMs5yfEkB7xmJCtuNpu8MtLPxrXYHjMVLrcbDyLwpLVkaTCnWYRqwQ3jcjQaTgr",
  "key3": "CPDRvpwfrfui98cP61AaUGAmXhpRbjL27C4P3uEYMkyRdLXFdvktV453F5AnpuViED7e2QRXwBpVfFtqNqDuEaA",
  "key4": "4QGSaXUNv7zLfq22n2tgpaFf6mQHhFRu4aaLyr1ezJSc2Y4hr9X2M7qdxwXJuwKmtHkKADjQ3KfTMgMGhGDMKWoD",
  "key5": "26jiWJVwceKerZh1KKJ2v3FWSdSkB5qAaEs64gerttocGzf1nt2rbbXKTBckJPSERqTRt6ejADo95KiPFbXnkvUD",
  "key6": "5ByPudZeaC8FF3KBLvqVrudnPLRtAt9MbUTtmbqwmDhcB3bVmm9crZBD1UuoQpawd6bz2xem93azZFkRmYr5qMh3",
  "key7": "2GYMZN5vm1HE9WtWqZ1d9FkzXsqZFvFmrF7Lni6AiX6NgTRyu6zyQGwqxDx64vsAEZkyNxEvRyQy8tSEny4nNCZv",
  "key8": "3BJ8uEDhVHbjTJQmed249ERW65U1Hqmb2eCms7MEEKThSZkUBZtYwwiZFb3eraop1C2CTrUzGv6eAmqMMMW4fUWa",
  "key9": "pAn32FDuVsf5y2Moi5eR7FmgBGpnEJqKHuf9XDY2NWzJBbCyecJUB1nHDCgtnzQqB3ksWFGsaHGnjKSntvsy9Hg",
  "key10": "28BNwrNe4yeLXTXisjjP9omXedv3m4h4kQfviwFK7odK7Mp9mHHYgnBJU6MVe2u9sVdB4dpp4ECnNz5RYA6AVGrY",
  "key11": "UabhNAwhHtE5RCCsKusc8uPsLFZheQZcmZ7Aiz746vrEbYwhAkLRaQt7G5mivD5UAtkBs4uQgnJx772YdSJoZ6g",
  "key12": "3YQiuicddZ7gPj3d2bbtwo8uY8eYvzeaKTYeogjNPF1MqKRs5UEDCc5XmQMenBMf26XyDRDPFnjssSVsg4qDvZA5",
  "key13": "3yb1nBZnDtdMW3g8LvsNBWxiADEwk5mFU1yAdKe6KYdCtaFYQUkcXGts6DxtNCoBLa1y2GoDD1QovnMJmUzFbmsK",
  "key14": "3bYAVGjEGwuqxJjDmLBZcYDpaMnn8trB7uGQeQe8BHitGKr5ffKvGMkuxhtHUy4J6wmCEbrCUZ95U3n3VZyVSNBp",
  "key15": "qKJ8HLj6ewZ67z5MJ2S5Py4CNTgP1WpAUPtHMuVcugz58E8WUxMg8pMTjBfE8ZANE7Y7D2zWycJd479Z5DyzxvM",
  "key16": "5Evt7uFaQiRqs2QucoT2pCDPHSksf4hkuXhQyVSReqPrkSTD226iVEwer7Dv1BBVHZfotfYRs6bP9DLpvuSoe6fp",
  "key17": "5S26UBJXA9tihMaStg2G7vybU5qqKx933DcJZgzRmYVmH1UTjCzJjiMurmZEfB8QPp2ChDAPVB9FXhTkkzFt76QF",
  "key18": "4VPsHBoxPomW2JPs1BwwGsDRf6KBgzB2xJLvDyKB88bEfHzg2LANWghtZ7ZC41juDAdSFJKjvZLrhVU3PKk4M97a",
  "key19": "65RQCVA2sVrGDDqQq9sZuLRtCmeXGaoAr18eH6vvceQTUoJPoDJEzK6aPJykA6kuXSbge3PnMotK2vHhh3hYCyHt",
  "key20": "2SUiTFHS1ACtZvfp9QCH4FvBqq9kD3dsAZikkjJLcz5BT8v4NxciMyP5ZZWvoJC9y6xyeN2yay2DgveXSfySuLFQ",
  "key21": "5rLMnhy6yzmpwRpqXognekevErrjrqMXgQ8xFExkQiUCQbRkx4pq9aq8DgbhN5AWWH2FWHuHsYH2f5ngkDgmTo5k",
  "key22": "buSZ5nTCCCTom54rSJYtPRDmiR2MZk3Ptsuc4zevjdkawtpi93LFKB47ZL7GFSMswKBDXuKWv1t8pdLSEjXmXud",
  "key23": "2J4rzeVAPbdZ8y16oBQqdEuvAn58kYjw6FZft24XDgLmYuM6QKB96QVqoTJnxXZp5KQHGAb9KxDw3eWQy4yPRqof",
  "key24": "srAp7TRF9SaQVrZviybvUTwbJbgp7FxiZx5SUJAp4V8xxZ5TQbQS5bbNB3AuzrZx8hyYUDQ8aT5Avwq7WfPPY35",
  "key25": "A9Zps4R2HaqycDW3C8VqHEmF51jVDDstHfHm1CssQbPBVMi454oDhMtH4GGLAtfmTpzmQCgMDsh2CDTyw3cd8te",
  "key26": "5BVCEANRLPAgmwQM2e8KH9yJd9NZ7BkGcR8Ykeob7RUv6QCtAR1Nd2GymJSi5RqovXKFoLTQzRzZ6ScNx2RmegSF",
  "key27": "5LsdfNV81hkDsbQrooFZwSGSnVrmyuZVCASxpBHcZK4JbNYU6AT4dBQ23ASK9LcLUEdsX3ETWmrzY1XHcEd2nukq",
  "key28": "Ru62xLGYsJE7gK7smVTsJK3j8en6HW9GebrPWjAL59Kre7BTWe2s9TkK3KjTaveYPRYjKFydYs1cVhhNkxGmPv9",
  "key29": "21q4b78JUMgJyiiV8MVXY7MxousptGr3VbE81CEJXBGkfAicpzEbw3a91jFeEgnU6ddQU1hdfCB5dkMkKXxLBAEj",
  "key30": "5JEFfYMrEdMkuzNyG3SMvG1bxyULUwRrkwyDWwaFeBEoD2kXyW9VGpAL2GChqLhTiKdfi9vxxVE67yiAByhSLPc5",
  "key31": "qkny1fFsTBpht8ZYCqfdKfuTkjh8bWRfECi23BxMyehan3SNDphCCfNYnFTkBGVR3hSKcAgLxKNEjFKKq13cPAb",
  "key32": "oRoPcH9Yvetrg7K5VMVkYtLupbB8AX4vN9eHVs4Yo9SCGHeUus8Vt1Djhbh48YKqc773gtBtDb47hnHi7xkdrsL",
  "key33": "5k8yRqLvntd1Nnyx8RHpnwLd7e1Q2ynz5wX1FcDyaB3an7ByUDnzQJxBuBhj6o2MVD1Mcfz55yDaDJLi5TasWdsL",
  "key34": "332zuTTCoxHrNRamGEKGvHe31bxELpEiCdEvktkCNiTHyMcCKPLpYesKby8XMePua4bi1jfXsreFAhGmMeQ5dPQd",
  "key35": "5G7FQsJ4bwtzVguboQSn7dVRTeWFVoCqv91RMRow6JpVj1NJssMXVZvz7WPV7UVNiwwsUsThyEWkDb2abmUmMpJh",
  "key36": "4YiSoXugLNcGbJ5BNrHU4a6hVCsXpCvvJL6ytoR6TBqtvwzUAYhS9ZNDPPjK6tHnfRjaanYwJYsnyfhTwn3dPgzk",
  "key37": "3HSh1EDQdLwZ4Mh8rpM93ebcjwv2s87av2zZNpi3H31hrR18kAaka7SYvWsBmDBB4ZdgpSjYmXHtL9ncHvGB6tPQ"
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
