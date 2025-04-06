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
    "5FxYEKmSA8Lk1eE7zoKqEnDweqhfSu9wEo6K3kBpscuvGQydDYmfeWQ1A5ZPk5ofQNwcoSSEjNZkwDhb3JwfE52G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CKmmJDbSifXZB8WXUVePwouCWnp3ethFMsxM5Wxst2anDub4sJb2jniCT9BM8AbUxEcVPM68D7MihCjyBtaBQvL",
  "key1": "vuMA8G9cEcoxmftD38TUf3qAk4sjkDh77FvNz9pjmdLJ6tb28bbddbRKodUScGFw5gRSQHk7P9XJLZkoUkzheQj",
  "key2": "2EmCcfWNszezrJKxXJbXqjZcc56JDNDGHEWxZ2LWxeFTkZ63VNJ8hwyeSvrvJceVho6jXQvokcxfhco9mUapbjLj",
  "key3": "5UQbZZR2kkn7sW7LXoiT7RUGiFf1Xn9pdssBHym62QexXSvYPMmvhDPzbrDTDLyG8bCrTuRGRWeFxXuQAL8dLMGp",
  "key4": "3kQSdKsTw6jDY37x4jxvZ4AV9JkdgVgW1TMJc8Eyek8FvVsxbyYTt3jT9e83K6JbJHMy9f8iQziFajq4ARfZXdLz",
  "key5": "36XRbo6t77TaLgbkLXmyFU5KBukeVjnLsBGYJYQ3RLxVGa8v5FFNSqgigpYtHAc5g2RJaKVCd5vho1ECR7utxC5Z",
  "key6": "5fgmaaNsG6rQzR9wmSyDinokxgbbFJ7LbxyudowVobEkC3HgwpxLnpCFwC4bkTBhjwwtpw1yWwrdGtearR5xCfVo",
  "key7": "28vyVScQSYURDEQNB2M4CoqErqos5seb1Daf3EqGRhC2S3zEGQHhj3mno1NUJvXuaMM4NmL3Wc4QeCB4QLYT1XQx",
  "key8": "5mQgE2m2qFVkzQwuBnNzpfXC4i7vqkuRRZ2acS5kCS2yoVXLbwRjQyt2AiU611fDMnDKMrLE8HTKWvL8AMBd7MtQ",
  "key9": "49Vs4PhbsEFK7wfcAaFAsVVpuCRYsJpH17iR1X2SYcp2tMiCBRUTQAEdKLTaYqRZqaMeJszDpuFgws38RkefiaAf",
  "key10": "3zJ9GFCjBHVbKdPTJmz6BWKYKCkwL98pn7CJgG7jHvRVd7dmZ1xNZdKHynbfhXu4y9Qe3AbZLP5ebV8X4uzBTte6",
  "key11": "3ZA2Venyv1WMsNpnUrhLPuH7dcS131ymHsD8Xoyu5smsUgJhwNBoKMrvcw97uF379fKaLsDv8KFwgsX1qvJtMAnE",
  "key12": "5oa8bSpCmdMEakzcm3GrWk7iYr5tTLGGP1QxdEVrz18YTtpVyf29wftwLPzKNFLfnLxCPT81xyh9XpNdg1VvyMAT",
  "key13": "37HCeSvovKdXWb5wSm4gtFTR6ErNnHvGi9Ky3TsyGNu7Z9QiF3zuZkpADuCAYvt1AjDtwXYb1PAPiu9xua5HVBBi",
  "key14": "5cU7Kjo2ycrJgX3ej4KMrP7jc4pbqRN2iXNum8bru3XZzj46oxPnfx1qbxjptAhtHmBnQ53Vbfw2ZiFNbnDfYezW",
  "key15": "2LzBHx2DujSp4BherV9QsfjG6XqwA58ACHpCtaJ6SmdtbEehDtvK2TLFpBRh3Zxk6CYe2KDdfaawG6reBPEnzjVN",
  "key16": "JjRuhTcJJvMpJtSLpUiA5vSYHjJ3qWytAyX72vZTuob9aFrzba3eWqUdBRxfKv3hCHv6ipW2kzsmLnuxpmEo89L",
  "key17": "3ikKKC2ErphWhSrMxqJKD9ttKFwJcxi8PV3mZ6ANqD2RrePBeos6JeUDdgCRekj8AnspYphfwrXXTaGVMXTM3MzH",
  "key18": "PrLfxPevWpPvJqvyFgLBDa4c7vqiYbzc7gmsEqgRXbq6nu5oxqiNyDWstxigGp3BoLzLJZbJHafevMNzndnikHT",
  "key19": "64XzWceX4qyq8nQBQYx8c1uQ3uGHKr2oxyfJ5NVahZ4NU5AF9r6BiyVRCH1b1vSURiNBAZweoBqGeri2qFbkqoXL",
  "key20": "4CofpZeHTU5xNtjAyd9Qu7DLBWfs1foeuZQALL2cF8Ae9W9fr44mxBWv4Tiy5aF5eXALUkcJD2vaA3Jp3JQ5gyUB",
  "key21": "5vNKvzNzhGWYrbhLzK4LAeZJ9mYiZ5PrrDeGDR4yxGt6tWoUD4n9XFDM7wwyZu9PC9SBpH8L16cfZem2jkdYP8jU",
  "key22": "3vfF3uiA5AE4vwU4hgNuH8ayPE5n9QrkEAoGybMV7pEr1E8b8K5SZV77eSAyHD5QhaLgaAGHmfM5oSVWZzN6rXTX",
  "key23": "ncug8ht4s4RfwXrNC8mQmmSGMmpK5FdUMN6Bd5g3kfWJUUwwss7btZRhzi9JVQMNPWBwF79VFiZCBz2wmSCqvPX",
  "key24": "273tr5ckxbKB3fiPCaD9BoudLaw7ZZfLkuWpbE6VwBkntuF8RqjGaETTG6ZyjLN1Pk1MzKPLVM2vuUDcSukwE357",
  "key25": "5dxEabRqCTiYx2MgByFrkmEp9LexyyKVzzXE2LpkoTbvhmBS7d3sRMB5snD9ttUNuTf4n8x2y3kK3siB6oPUTRox",
  "key26": "8qb7RREmG4eDjbpHNLhg6pckBJCyYrGzUcMRsZTRX6NswkpGL5oVoK4PivBBg9xXj5WCqunc5oqfq898Tg8f5zk",
  "key27": "Dm1JhptREtgEfKYY6u9fhNMWzHrAbPV4pCAvGNPxBt7Axi5ewarh1YnsphNfkigshtknh9TUQ6cFetyo7Z91D7T",
  "key28": "NK6bL5YfyWT5urJCuPVqUdh4YBjQvfCyDB5m5wmzbUSKRPUpnCzpqwtVdca4hs3UXpMrY6VEPrXv2bHzuWTUZs8",
  "key29": "5XZReXk3iuV59tyauNDo5cE3kmbizT86g6tAy7mFwqN6bTYCpCZzfRAPNw9tYCR31A763vvk6zeV9qGx2bP1Uidv",
  "key30": "5GhGfTqR3u1PePsPmT4cPy89WmiEzZx6ZeZerJ9HjeKwdcma8zzs7hqEwm5dsawWU92woEWJyFF3Uod8BTLmqhpJ",
  "key31": "xN5NgssLi7Rhd8MuG6NLhKXMC4mYPiJH1GEaxEhvHMRsx9rG47ZNeCfZCKCfqCM5ftU1ASzavsuJF5BqQHAwbGd",
  "key32": "3zVCxrvNTWJu7SfYo5VUksB2iTxTvDUvQKaK74XsKFeD8qXi6FxDzQ7g3oXampy1Gji8LnubCjHarmVki5BwgfQk",
  "key33": "2Kc3Crpoe778vMEWbSnxWrdYM6zgsQ9k7eef8W2imZYhYmeSLZCHtf97kApVrTDiY4kkEdQ3oQPBhCDYXWARhWhS"
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
