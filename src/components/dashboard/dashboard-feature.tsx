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
    "3ZV2vxxMSiappUYvaVXHVvK2G5dgCKJSWE82A5UhCxkkCe9RTwTM23T1eMbqqPuTvDVpAkPfd6ViCVEEn2uTfzaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65fpBxavoFs2Bu75AHqywb87cVmimju4B1joD6ufH8YUyMzxjtzo3gnxnTnRccwy4U5voNQZfE51H5pfiwuBhJjd",
  "key1": "gTpDxB1Qp7vPKqYtdr5eGXZRKyGUM5HTjt4WBgYNNyAuVZt1qKqdz6cGh8vnJ3pberUa6WWEbT22v2BUZ5Rvt2i",
  "key2": "5g1TsXoWHRQtfVaW124RhfmAErc928JyhvyxzKq1vqPbFTxbev1fYZ8987JsChb5qUXSacXyLfsomcJkSaaBcA7e",
  "key3": "3S21jX6aGNyVSPVX5RYniJTGj8tEQvuUS948G6ah9Jy2gayec6HADVjYHh97Pkk3YKPwSLMqpACdf3eDyieU1rrU",
  "key4": "3drfathp2wSGzRMvDq2nvWfVrSyHTcjMBxravE5pqwej6KATkJZ2QjfNcgeySLYCAP28cpHW33W3Gim3PgK19pVN",
  "key5": "47AXEkf111ibRWVm8f5s3NocfHc23T16zzCgajN1yjK9gWXxiUuTdZhudQgqiHHkfq27zjfCZbfy9WUJ7UKCJfuy",
  "key6": "3HpNKQPGH4U6a2LCdh63t3WR1KdAiwkJXjXW68UMNLZVWKJffn6dhUiU1tmsv9LQJJhS3ZbicHb5qyzQTFQXmXTN",
  "key7": "5CTXyxsrCNVrHUmda1D7iDs1daLJcXeAZ7FHH34GpX2QFVooLcDHmE2XqMDAErnttnkFnPbvVgYtAq79QYDMYvjE",
  "key8": "3mDc1bhNqs8F9nD8RVrwc8trpzZRnRCx17VCcKTgpUwTm6Z7sTxHMRZVkPKc2wuBPK4gBQinuH5mMqcbD7oYNS8w",
  "key9": "3MhmJoH5eStWvRw51RkyRewUK83Tf55fub8ETYnKwEWKe4B1LLKAqG6G8XLaKJ4bbMCX2Vc2Qzv23EgWQq9pXR2i",
  "key10": "58isaXideNwGc25NQhUPojAfwyGXtRUvDW9L1L6X8sAPmi2bJX9pEnVhzCTNz9GGh3MMVZeAZAGsR7AFgaVg2QAh",
  "key11": "2LeZL2Sgs28HRNsdh5tm6Zms6hX7FZ2LRfcTFNMQGLgffVwwKx9eLKiYzfJp6T8hhvWc8cqf4rLf9T8Lc9fPUUow",
  "key12": "2PC9FyrzNsfr67JfzKnCkPxzwccTdVxZq9Uh2f74v65u59SsyJDNjwDyMUhJmQjoTxq6uBbKtWW6cZhfB5ySNqXX",
  "key13": "5aL5ir5w8xfoT3VUYFWBDRnR32tPvMd8eZwULnCiRwJ8AeMeoaxBGdP2AXL6XQd3UyrhWNKPd7tYCntb6yQaqsGW",
  "key14": "5qzkM3Wh6xisk5VFSdJz5QZ15WaKBJ1ZzYg43FQwfuKhZCnu5ZtsEqRq9NAeTe3kGUFsC25AbCbJK6Ts6oNvH4VM",
  "key15": "5dfQYd7YZDg8jSmko7EEQmGp1uf5EGyrQhQVZj6UnXQGFvpWLRHbXFVXDVYkCrMZM6oBHJcX8dKcnWBHto8AtPvY",
  "key16": "2ECzNyMXnGACpxPjfMLFwfeqTgYVyQR2XwtSrzjvExCguXoQ4vs3JS5294kZvKqYH7TWq2ixu7BP1ixAsALDcLnq",
  "key17": "2LvVtrTaf8Sjz4z6PtZeXf2sQAfP5EFEXhpzgCNn6NisJt4gr5V5UEoHuoq8UdWcUgVx1enrw4T5ekomFeemj86Z",
  "key18": "2P992wyLXqDYPujZyFp86Gjy2keH2RJLPZqVyA2d91Aiqyo5SnzjL1Dff9i76dxTP3o8RX95rY5bZ8U6Y4pbnWHL",
  "key19": "5ZWQ76GcRbmb9guzChznitJMCNDQbHmoPX3Yc4SY7STYLqwUwQrpKiJudqnD1ZjopER22sEiqDDiLtuJFrMKktDX",
  "key20": "4DGXjcrpwiXerL2RgZ4xLtGmdKpDGGRDsr9pBqKpn2E9bb1sbhFVrdVBNx1HAS7mh1VL6eYmG8QZ1Vd2j3fcAb4i",
  "key21": "SRzf6jTtXtuWkznXN8om3dfxVmh2uzt61XDCyrJqPjRHEFfxkVPAWERx7hRWPBLmxN4dKiEct9Wzzi4EBYEQGzD",
  "key22": "3j5KGqNAVQVYPbZq36KYqAoahaWEpp1MUGLYYF5vydVxSbpCU13k9zd9XQrxtnaLih1q3DtuDTxFGkqtXYc1CTYd",
  "key23": "BrrkitAoWGdKjhPccFhauRVTS5rLA94qCRezMFBNqqk9rUwntkEGxR7XKZ6xxrb8ix8F71YeFL1gvmr1hq8bxax",
  "key24": "2ikmFsRz4ordAcw6psVA72xQFHCMsVsSkrPsQyA3w25pR5VM4BXcGotdXLhPst6gSME7NfvFwPyLoRDxsRF8f2sz",
  "key25": "3j7HAGLqj17YG7BdfPjJSLaEkk7gtDiQQZpdV8sVyPHALcqr9nwSrwZCDXVb54HBgmmRdd6RF4rpCCD9XLwK5VTD",
  "key26": "ge5Dm2tvEg1qW5SS8sHxs1GMpWjgKmbaEocKTF3JWXAZdG4EX7qMhWt3uCPB4U97agEWTbyjyak9Tsu3psSehV7",
  "key27": "2QhejQ2PnCojKMasKtJs8wfJEfyNZfLSXiZTPGkZ7Mn4CAxjkZw3XbZU56irtPb5QDVUFc4kgu4VomG4er4GKzcT",
  "key28": "3iMir8cUxKFyJefiX7Um8fywaECJuZtR7yMNACuWsvV4yipkHbyME2P1yHaTJSDKLdCvD6bGKdhViyUEMXDHxHbc",
  "key29": "2ncxFFcLUJ7bugce3i3tyBNuCPTMvXoxPhsNuWu5xRnMe89K4GWGnes28u4msEQz34YdgEFF8HjUFvH8xsKhGZ2Q",
  "key30": "5GfUGiqT8Ww9yP7MLihd8AEXJpcnbmEUqwNa9JM2Zb5sDRJVRnFHCM3vyYjFv1yhMNdgspMuKHVdjgwbY9kXVdTc",
  "key31": "4vZzACcrdK1UnWGg4QiedQy1wnWaYtebWVowfQkxjGwiA4ptLHS8AnhdTmWW7fihhVRca5edfayRuueFT9xJUgmu",
  "key32": "4KKLJvmrYk51CCUZy6oQy9AGR2HCRYCNRHCwuoVgbSQcr9EKi1DnQTQWMRjv7D9r9Sqc9Hu3Gfo9t7nJcXRotnNx",
  "key33": "4aMuJFaaUxrVT4vK91KYJ8HYR8UVxg3W55ZoVHdTufy1V1Dr21maVn2JUpgLYQpebbH46UN3ukSNPYjFb6RyuTAQ",
  "key34": "5AooQk7wYs8rvgqKKU325m5PA318ZCCTjeWSFRQiGEnC6V8MBN3B5tNfYiREffuHqbuWdc1aKajF781GYpvPAxfg",
  "key35": "2RrYhyW5oykBTpKxxsqA45xEifeFuXeLSb7V1jS65yKwAZepN9NBwBAbezPutWVJkiUk6KfE6qmp4jNEsVMuMkY9",
  "key36": "mQLFSkzSbGULtn7dhfzXr18JsVPC8rv5FshmDBas3R1AseM1sC7kJNo5xSm41jFhCDkdbTRAg55hQh9ADAumi7X",
  "key37": "5vBbkzNSnXiWb3XBLAAdKr98kvqjBuK5kqYp4umJ8tdCUcFVwXk5x4AAhMTnYNb8GwEnDwCnBhdJCTaSXMsxePum",
  "key38": "4hpEnsTvwgyQrVNhGCFa2HECB2swXHHK7P1ao7wEmabKvVvfM6bkn9wSiDAtR1ZzM74A6h5bwWyaugJH8MmXfBw5",
  "key39": "5Z12CqpNd64e6sk7SAnwDqnrDNB2njY2vmcusLySbaJrunhpmGpu4oHZjzKDTWNTw8YJgNDZJ6MZyaoJH6n646x",
  "key40": "5VgdUS84DEVgBRSBJwsB4siCREWwiXq25SvSNaBsj3P8PTdFCtct41cn8HZiwHupkdtEJKwg2aibFdZsRaWGviSw",
  "key41": "4oGzrDomUJDcCtxDxFfBDzTafFQCpFU8Wdfz2Fsq6agFRw63W92CfzMrbNLujinhdwGL4nvZLqGGVWnWRF1Hhaj6",
  "key42": "43d6MjU1Wa9ogQJpbinR1JCEAYquQwrqkEjGpy92qhz98w4xpPmKLqaDNUkgK1Kdvoy3Ps756L5aNvF5fG5U3Rcv",
  "key43": "3oymCh3tZE6a1BUTWEQVF9KBAp9bfkA5vBk7d4TSLBmRHMGgN2c46pStTak5njL7S6GWxZ1K2xuEcz8pXaKzttkc",
  "key44": "3nDDHbZqznaHPzWHd9Kx9dPaiGZeFLouYvyR9xD1SfPhcxhEG4HJMVG1gGHaZuX5JMfMp1oNcmK1NxK3W2hTuarE",
  "key45": "5RQRAmzevKCvuvSyB7mje8jopi3i5MJJRBjiMNSTnXrDY8E7oTkSQ4G7zaPcr5UKkdP6qhNew9oKtMKpSPfddbuF"
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
