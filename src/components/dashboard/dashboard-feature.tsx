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
    "hzTcYpqhcfUHDBrgFwciLm3ehn3QBUEsRFC29b7UTvDycCttWjW93SrrYJnvzdkbGqi5qwkjajG12bfxeL2yn8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CRuSBctpGuKcKEcwRj1Z4bMzdVDYDSmddsLdhGg2bdeYzLbNBSFsvDubgv8iGRayUenQitpEuxs2G8SCWmREd1u",
  "key1": "2mdUPm3ntDQ3ShhUN6KAxwQ7TYZzfQieJ1faazdYbicmkKVBAKA6DzB3VhADbQKGeNLyTZAgJqdgCoQGGGarZRDJ",
  "key2": "4CvAN44f7GLmaB87i4QfpekgMQuw9jdCnYJZQzyRmAQsV9r93pFVwnpjscBJnQwHwaTEGLkNkmCfpNzCT3hxu5xK",
  "key3": "2Z33QMvxnxYJkDcmctro7yMvipfau9pi2KqiggdHwSgHEnGiDw2L5UJZZEBUWmxagg6tydEpvHP4pKPQBZ7vLYoW",
  "key4": "5sPXZkHU33eXbq6WzmLpmaa5oK98j1wNFWFJ4urDqRqmLwMzAnXqTMg4EPyjS3W3BdFd9W1xWNtYEKHLPmkpJbUG",
  "key5": "5ERxB6r2C7hp5bG4qhtPXLwZsSJ6254bK1JeEoUsAAuvapYqLLLfjZeDJcSuVbpY9UiF9RQSwKgfyGCckgntVSpA",
  "key6": "2iMqoreCrs5VmV27dpDSdGowzFrbRuMHJpFtYbJFLC2VgDhYNthBXxhNNs6UsREx4mrkHcCXhETdLVKDoavmGdvZ",
  "key7": "SA27b33FY4pUW8Kzjhunz8p9oVKqx65PsbRZcrpq2KwcAK94fbmNL3L4cKsFumoupxWBTfJXt4kh1TNm8Q8Lo3A",
  "key8": "5DzEHG1ZeEDkatsZjMdoBCsxaQLP2n9awZLHnxKRJCGiJr4cVb46UTmXM5PtjHHQdWBmdT8svUQ3aFb9d9zSfVgW",
  "key9": "4TEGWjgX5txdPQfqkcYznNG7zhMycD5dGoiPb8gYyT8TZrZBfYKKRaJGMY73LCHFaSPpmqdCbdQVzeqj7Xj8Sxjr",
  "key10": "2eJmGAYcu78Shdt3jcpEe3cnLcgKrYQNjaQs8hGACywzXjJufKg1Ex7ehV1ExMC4MUftt9qp7f7qjKy1wzsYwqo5",
  "key11": "32iHLPGPepz2tkRLfx1xTNRqvwJ6UtadiKMpWBkyr2V2ZMh4pxKvrbaKC3y3kCg7S4PBJQRFbwKQQzxjArky5kCe",
  "key12": "aDJYhinLvFukLz77er9rVFWQJ9GM95QJnfmJB7cXP2vdhrPSnVrC1bdJqKePmf8SqfbQkcb4QvMwXqFpq5NWfhG",
  "key13": "2APPtuFsYP5aPpKswr5upmnp7EVmnbba9mt8gqVnkrRJW9LqitFCUhKnriVMEhvDkPGZhdG47yy97zJUhWbFnsyp",
  "key14": "5wRTWBr22Q7JUAyCdRQmSebBSY2sUqjuzL92ktYpMwN9XWFBLJ88Ae5MweA4v9CV49qUSQXnBWfTZi3KsXcMgb5x",
  "key15": "3WtD3HYVvjwmvPAyGyMxiGwKBeDC2VNb88FuQG3rcVNe3Q2kn9K1nMEhnikcNaM58MTz2TpM9eQQh8AWUcSLFCCW",
  "key16": "4fjmb6Rhhrs7uwQwbvXX9rKfHrcP1GHE5a4XGScHn3o2ZNpZB4qdmQMmn3du7VuEH7owanaxxjKA5XyPafUomiL5",
  "key17": "39CAFhw2e34iAJdWecskh9spR8qbMsz6SAKzEqBygKiayMuC3i3L4Puy8vAdZoVaF8cWfa8rXT7gGPEGJmaBWS37",
  "key18": "2fiSom5kcMyCHCU1Rxr6jEnRpcNvtZeX75w1w4JvcurByMyzxd613YDf2A4dESXPoy3RWoG6eDtnXKFZC4fdswx9",
  "key19": "xeoFQtHtvfZEcgBMHqwPCe4NVVfSLQRTHaJHsECQxgzvghs1SmoPUM4YWSn9n1kAY99qY9gaXV3vLQeBaDLv9K1",
  "key20": "4nuWNXYnuadHpJdnYcUYirExCkYdTKUDHymapwisABHbyZwycbRb3Cbm136W25PQNf1unxURwwNYzQPx3edzKczC",
  "key21": "v72damoMihQLWBgUUsRXAgiHvMJzAoZ2WiR3enrRARGx6FHYjAXadwTQeMbmBSKC6AMS7FiKMmPXYD4b2uKrfcN",
  "key22": "nFS1ZayvFNUowYzY4MW2si3c3jFVsJxWyWkkE9EB3QvvSvEpKvBpvjj1jt9Vuh11pXU1D8VZdS2aph1QLBKZZAY",
  "key23": "3af6R9nZGjBeUeo5YUZxsVf3P4btqBauhoHDUk81n2u8MNcg21DRZ6vSCGgHWNDbju1igJ3ZicBMxzmrYGs7PaXv",
  "key24": "5HCvw3BcuSZXGHGKVfKjEbcSjijh2cx25sPd2GbTXRq3w1FsSPh3DWveqPziwuxwwEk2uUV5eF3E8BkDfBJfTFg4",
  "key25": "2Zto56DwSsV3buac5NX8wtFsfkrBqJyodrjJ5pXQSXzSwGuovHJXiuhoCtLA7uH8pQnnj1cWTht8FQUDsGkzvNs1",
  "key26": "44C7FAJDhMfP5tni5km5UAWyQmGGp8ZAgPttBWF4GV6QYFC82RDw7yB6SzSu9nKumd8xygYjTm2NvxH4XKeQXuPN",
  "key27": "2cTihqJ95PSDug6AaDa5YTcMmftoW9mkP1jdvbzvknX3SJYgdiGa13RNfDohDNBDHQLgtv1yyRySKCQ4oqKANcws",
  "key28": "2jxNri9tG6rfpp67Vcvp7aEgD3F9aQBZZdiRa2MnJSHyugZifLnVQjkvEeJ3sCWzePQWgKWbzAnGHumPonPoeceL",
  "key29": "2xHAAS4JuVrZpANn2QDtn2bWuLyiSTxYrZCo2GQb5EwYWXGbCR1bFqHfu5RsYS7v314g9fKMAiDVj5ZoDhf5vEPZ",
  "key30": "2xuxNYYohScu4VqRrKzQGAyyriAX252cehRqhSpcCvYECr1JghjwVzRSwSS468cPaq1qVNBF4pfoe3c7SqJBJAv4",
  "key31": "5ZUSWg67d9rfxmoPCrAerNtYtAEnt5eU9J7CTxGFEWkpa6LkbcnYVxEdeckTAW7beyxfdRvd8uTYaQJV164UPdQh",
  "key32": "29LQurKrgBUoA5MeCizKL5zgzEJPzTaZokbTQtzb2bB2UMYTocXQEYU8GtAGrsG2V33U55vXPbdtPyA2p1XAv69Y",
  "key33": "37F8iRBd328AhFDGE3Fz8k5C2AmAeKFbgZBaX6DFgWw1SwsSWjXVWurBHBbj3TUBpShyk3V7NjCAM11K8Ei2RbmN",
  "key34": "2Ckc3gpEBGzR4Mryrm7ZTM6YGWnXvy5P225yGFH2yRxSD4qNkRkqjkhLuvNrBLmZsj6j6TDqi4xiUyqvK3FkNeyq",
  "key35": "3Ww9RyYG8QbmLGRYYJ1zhc94DfLbhDekYSyc9f2RgvVHV5cCdhkptQiVRRTf5XkArMDDB7ZVS6BEH2DXuNqD25q9",
  "key36": "23NQJjVZKH2Vt2zCE9VBB5CWuu3si9ufihpDsT4L8w6m6C8e3NwVaTxLz5bERne6m71mHU7NDoBTGotgQ1dx9RzJ",
  "key37": "35RvSUquRMxo1MQFcWmjkekkxRgEYHq7grZhGacjTgHPigRBc2A1NXn81tDNwA7UjmwXCh4N2tvpB9HQg6yncKdi",
  "key38": "4JvdHvNdZm15paocLyZScTctwo43QrudTpBeiGB4AejXF2foB1wRTLiCErdU5eJSX5q23vLYeqRwdaL3bQh2wyKN",
  "key39": "5m53R6s5XvzbWtJUoNMCEaBrfU999QFXpG6Bd1E13zPa3k2xWunoxMcsBVqjF6S3RMN352mbjKXGGBFpBCB8ZM7e",
  "key40": "64Sn2GHzh3w7GTHG2uRimgEb8McP8m1mpMX9zUREdihK5fAqwX2CbQcXzWtubkbYrryGwsEveaMe5Q3d4oFcudQQ",
  "key41": "44LBpLeEdFiFyFaVmxZNwS8nnf5APnCzkR67UNmS5gqTDgY6s3Nmi6NVYwQr2yjz8n3uDnZ8GU7UKrLuwnT71Tme",
  "key42": "9si7G8JbbjcqDHRRLkbWSzPVGn2mYsLXWj3CkyTQC8MQAymtaHQA9qQ8f9McguwLcjx4E1ADhv743vpHZEBNW6K",
  "key43": "4UxPfHyK3eA64WkWJkfp2sfp2N8Sx7i5fVz5YSQ6JqQMKzkWdXehaPG5erocZu6qEy6iizSqBLZXVzYt43CU9thN",
  "key44": "528zSioy19ArcYg66gL9zPsfhxeapt7y55nGC5XsdVKtccVo7PXoAjGro7eJzpwQH1s1mA2S5Ad66bbHqsXRXNs5",
  "key45": "idRsrPAbRxKcAQVFNCvYhSQGJNA5webKbgizdT2gBQsCr5uKL8zRugameanEkbqN9gZ7PNz4LQC37GVuvb4iTQn",
  "key46": "5SwL3ppxYeJ3xSBG9sBk2WhLi1doa1RwhscWdfecCFfn8Y2eEcmeVCped5Pi9jYXHaWcjnM38A6RVkeHX3FRbGLF"
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
