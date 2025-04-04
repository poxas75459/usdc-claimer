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
    "5MpaJnDxzpdCqGqez136aZPLZ76eApBKYnMy12YdpEqEGguXavMGLo7cX2wMdihajy1fB3eNEvRtCjzuPWJCpxSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uj7x1scJpN1kAJQYdy5JkCdR9qwn7f4YXveYdZ9Zv8i3zVQ5DFzaj4p8MZAKXTT4UShojTca2miqc34egybScqJ",
  "key1": "2jThSG3Nq4jy943Yb9fL4BA2ycHPjc3JaHb2rUFyXezm35gYzZT1FH9sCe3iLFXD848Ycf1SWKvFoJpGgPEVEqSi",
  "key2": "3TaQhJv2foAG1wnzkkRbboNHQJ5jyobGoF6i7aMmDqAUPSjKr2Kc2T9xvNNysNWfFiQRPkybeNVSYd2eqNn6nhg7",
  "key3": "23P9EMgP56eHJaJZnkfK4MZFxRGstQMCNsV3L2fbinz7VsGWgn9t9jgKbAZBVcyTi7yknm96HMqHNKTQuqa5Wch9",
  "key4": "5MT9QwASssV8rA95dQ3Ji3AUhwVHzK8e1LqQDiRdvU1nKsPUUc4bGZ884hSj6uK2ZhUx4BqoC7Gy5hdixYVGbh1",
  "key5": "362RLE7g9io2jiuL1qXExATx3o1pTKpPyncGgKCMR8M7T5Frbf7CpDV4tp8KQ1QNfRoMf7LNVLSeD7dahzcvSTag",
  "key6": "65oQsouxHEZbZgravwa5uiS12wWnkb74cV7hQnjpJ2VKLSz9tKB8pgaEcMvmE5Sd8shsHKcmZ1Hm4xrq2NH8VdFN",
  "key7": "5r8CFCrvEM8KG2arcjfSMmxHza88bvPL9aYnoYoRunMkxX6SnMaTSyxq1kyidsJ2PozJFRQAVJr1ptHkLQNHeWc7",
  "key8": "2SzaSCrCxH9rvA99v2zzWZgagAgdxpFbrnZhFZpvSeyq8awgg8LHvKecVM2AMXdiLa8f7Suzn7E2MKXVTuZRgG97",
  "key9": "7WMzdPXEBn1AzjChqMbgntADxPA9mPnw7wtZiHQAVY7FwHfQB52DERGRBp34QnvBWKdqgPe6Mj85TS8AdEeUcJa",
  "key10": "yHtY5rLDqgACvsxhhCGP6Eep62vKmKaYwRLBCb26QQtuaa4ADD8huVQZK2bGF4D8UmnWwFUJgKpBH6kr9jNSZbD",
  "key11": "4osrYnDd8anRAemor1ZtqkCPkMdi5zn6pdNnwyT4SYaWzksiPpv89Vn9ehPHfp6dCecjKP7eXgDAf1Aeogt6M1Td",
  "key12": "qP5kbaC6oYYhktondon5NXdbfPtY8g8eAmbN1Epu4a1g5WRAGtigUnqZbBgLeA5xB3d63qLV1wkDTUdx2WRRcsu",
  "key13": "tWeEzjLhSFepwBotLhhrn2rS72SvjQP4SmAuqcBx7pL3yiVxGp9nigsFhpR7zJRBx7yxEcHFDcbXBWZ7YfoEXsL",
  "key14": "2wNAtfd5pFXBX74tRwaSbdiH3T21FE5UE1tdBVjQTrcci3eaLQiDPqjVJmzxgz3wFdHLGCkuuzM86Mr9gPGpzRvU",
  "key15": "2HkdnxGhCzVHniRhk3usbtdsCqwu4zPV6NvDjGU9EefF8yF15anwmuCan4PRcF9pgCRLDZVZg4Ljg5BuuJAk8DLn",
  "key16": "gHDTsyqR2YX3cdAuapvTGp4KPYhRkFqPtCJgTVCtrptmdQXodYuqBRvweH2qLkp7RE93CJujP6BFZ7EM8C5KbmT",
  "key17": "5oWRHijsiBbeApotqCvHpC2wVRYdAntrWBGHqqpko6MnvDRaBqYihwTUw5CfF4SgciqvzgggTDt6sE8eJ1jiv4Fq",
  "key18": "2qzLBtcL7x2qUBYK8ATHrLAq5kp6Dy3aDeGAtzKmkViTjDFQy5zxjYJk98GybP1bCZaUfNGrqooQjxwmvTLRe6Qp",
  "key19": "4ppEfDauD5ijTYmGAcGeA1MjUS3U2xEfU1aDS9MKKbHAoaCn9WRRonoAwXYmuuXSSBpejCEvSQeW5iGR7rbZDT7Q",
  "key20": "2tbzkXTkynXpGBQPexgHrBMsznTtqiHjaGsFAK6GZPfvzXRGJVFNdUa9ar1kXgT4TYWgvJzPMtjtUVMZnV2XPRN6",
  "key21": "4bUnegco9AFK7YSd1YLhknSVYKAJud2QYwm7r7WVJ6CvquUcjPx34NigzNSfhWVhu51YXSHLwbNyV1mR4EJ8Vzfv",
  "key22": "58Wwe2wMxDBHxk1z9pYCUYhFKHcHF9s6u3FxbdNj24ouG8jZrXCar3qqkvA38uYVNamxphrHBwQSW55KUtqKuwbA",
  "key23": "4qcAB5mx6aXKXWNHWmmpewV8UNDcrxZ4KQEZUBQ7pyQyyEwMn4K6iT5k9XgovVd5XqsMjPUAGZehrgQBmvedYaCP",
  "key24": "5DwDBtcUn1YwTRR9ArBSXUa8BpUxJoTfvk4kszEQANEuhpHtShpEoTA5Z3uvJHS2Wij3swG5whpASE3Uww8R5DCi",
  "key25": "PQhUfJYfpT62eu3d3AKxrnXs5Jw9MKR6i4YUYYvjKr12M4NWjGcNcqgCaaRzwjDpWT16M97Le1fMQY7a2D6q791",
  "key26": "3dXrSixDXqV6KuW1VxGEPjkFRMQAwTrUjt5dKirKwnghcXWb9wPLEnhvLN4f6fn6YNoqDMgZV4mBCL316RzMP6HY",
  "key27": "2sa3h5pfhYHrHHejcf13vQYN79HHMZDcXqEpKRwuc8zQFJVLVj2rN6o7LJe2fL5FfVwBLCLdzvxaE1vjokQiNiRk",
  "key28": "2Dvaq8hmrb3BACYrPUjBWH3sESD8pKWhkxDEsXSQzwPgKKG4ZYuHGrupu3Dij4ozpbNexhQToNGk4guRfQQe9Fsx",
  "key29": "4yfsN6BoCgLqepvYmaCDbgMKXdsgh48GYoLAvziCLasWytFUBL6SDitmRJwTADVLvAGgD6FiCu7qVkvAdtBAvQde",
  "key30": "CvsDtf3i5SR5KyEj1EjiRNzzTGyFsTpw61nzFTncgBjR1S4ypVug6hMDqo9ZEj2nLxcvCvJ42j3UMjjFujuoYoM",
  "key31": "hTtRfz1rHDrrTCLrC1zPVPtJxM6cgyu7rXJQ7dUve8oY2d4JnET2WkVAZ63Wfh2XkDJZ5QziyexEfhWhQoGugVF",
  "key32": "24xuspe7mxAWsuHYrx8LK7sZiR4eHHn9529BCQx7bdTG1a622gX9pzF3WCY1uUfrMLNGoyqK1r6xhH9SG6LFGdwE",
  "key33": "4SBFZphKkFpV8qJvyRyVWASDF7ptwL1HAG78EnmVsDXsDqvoyTt9Hn6LSsaiGVUFa5Vvn3Xpk3y5jBCyRcxzW9i2",
  "key34": "4RxjBXEHJ7zqo1Hu82pvVc9xU2wtDJD998GeVqu6ZHfKzvCG7sr7MSGGPyRFCbS5mfU3ZvszFg9si5vRSBJANm92",
  "key35": "3NwzA7LHdVDbRD9MLupyomJ2YXzQvQQmUGXCdnJJCysKm3NQZXfYAs8t4tkLxJqjDwzk9V3JWNhnghiDG4jj7jFG",
  "key36": "2oWpNpzMZ8sjNg3FUCNAbiTeBQnoUYinCxZfjrasWCehDKvzMCBvRSFbTs1VvCQd37E6ZKgDdENpLBodQd2GVf3K",
  "key37": "F1vRy79Jid15QodFPyM9FyP7nGbRnm6zEkvjSyNZjkVmqEJJ2sd7GuoVu3N6MtuGhS5hj9QS9ea71TqbCqxU9MY",
  "key38": "5FKmLjVYo4iKVee9vQKV4jNXPpLtC4CH4fxx8eVzt5JrmbPZHNaU2p39btuauSnPdHsESbPCd55ZsSeGDKToW2RX",
  "key39": "3HCD2UoDk3dqJWwedqSEFfFqK3DTtVuWoFJmydAddbMnuEXxdFQXGGJfZE8TrbwHKsk6Eo8E8ixo1V6uVbcRPMYT",
  "key40": "3RR7euTcnZmv2gGrK36VVAwk3n9xeoqcwMNaRvuRiPe1mTQcn4mJHqccZPcM4GpvmM76KPLjBvJ1cEQRYo1Lk5n5",
  "key41": "5RtLMcU5SPiwoMSVTZJhMKVUUYeEJHED9XHLBhYHb6UZqrzq5kSLkGU9U1LxC5wYUXBCqRabzwnfzwFAp2kC22sT",
  "key42": "5KHMe7U7i8TNbPBG78q6ifW3AoYeKphrE6673DwEz91LqeaW5y4GMPC3nbWeSBBZNeuuyiggkmLqqY9TJ2BKKQSk"
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
