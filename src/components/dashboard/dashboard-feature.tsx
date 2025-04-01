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
    "5MVenKgmBrsmqfK74sw7uzreQJraXbHbHzQ7ittz4BKuc9vm12J6cZZMDR8sYrNkLrD6rgDBAxg8TMTmc61oHbgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aQzwwkJGasaKDBi2jDs4VvS3FXz48AY2WBGvmjWpUpPbVpsA5MPtVxYzuP1vGbEyxBbLmHD68toMYWweZBpnBrR",
  "key1": "67PkqNwLPThBgjJ82dfQH71M4d2HS4EnK7WYGCQuf1iwvwwdXdPZBdcWjwqujjzVENabfk8oKdKMZgoYiUdXgSHm",
  "key2": "3MSsrQAHhmYNTBsbdKe5Jk1mSg7ajvurAcErSfDaUcQxtECZhevXx5HmjU3WvccdhVPia4RYL4mvMzBbnMYkgshX",
  "key3": "McdjpCeRi1eJT5RRpEXh4wuZg86EFrRffXsq4DAZxRQcs9CWdNxged3DTdqRD5ywoWhy3zYzEmyzCEp7cu1UsQf",
  "key4": "NJyUaezw1VcSfh5J8534iAzqMQgiM6wCu7GAFzmApERzNDc9DbRgVgnjt6imtW6nBKU5WoFnEJdUhcc8QQ9ER4o",
  "key5": "THfs6wccbwpYKUG7V57PSuvKXc1giAY7vPbm7qXGdi6ApnZXfLw52ZodUra635rjM391bNDNapTqz1heFq26wCE",
  "key6": "4E6BrpoWhGZxWbJirbQ24WkCqq7z1gvc5oSrKftsiEZNVQNbRLdYwnaE1QM3u1ZAv6AJETFbNDRmaG2EZ22VP4hj",
  "key7": "5kbCsZALa76wvYhegmGkCH5ThjkebDFGLcPj1Gp9PrWWFCbQc95NbBbao9P1GkJWDsMKqi9GXF6AWKpf56tktBLd",
  "key8": "3yzwZFRyfQ3KzMK8S6YaGDC4sawvxh2SHC2ZgwwmGtMc7jEP9DZRKuoq1eXUL3QSAMdaZ5zidtLMNg4Gn8Vapeex",
  "key9": "3tZXEw2Qihg7D8Q8mF4VsmHjX8ZD9jSNexQtuBbEd3u5kdRA5Gp84MGFc3RahPL4yo47WfTrmMLqpnuXgznYLPyf",
  "key10": "2RyC7Dmxy1ZnvXRmgRyo4jPivdMtH2ViAtgVoMuhy4rb5AM24pgZH8rB12bcGoennjr4eepKqt4LooMbZAxdj4t8",
  "key11": "2KWgTUADKZ5iBJ15J5wsosPkUrXxfRtrnRRywLi1oM9cLQ15UhHxDFjcE1ArPzXJp5eSveQCoDgac894C2xApMDY",
  "key12": "2ikYb95sSbgzNtWbXkAM4AVFYan6dVCV1XGR4vBxqSfpkhZTR8i9LTUtYpzayrcEe4KDJVseSPsQnhvGjZV78V1Z",
  "key13": "jR8wQ8zyC2C3kyD8eCnvHUnmHsk6XyanJD5ZEuqGStkmK1GQSKKqoeMFxGFqHGpsQmbuULpekeqeESrPe2f4QGg",
  "key14": "AjEKNfwK8CZgvh2eo2HzHbMaQsm4GPCnbCxpp1RLxZ8aTEJaxaLw75xEJV8Q6NAYYqAvYHAuJV1C7aEaivbFLtf",
  "key15": "3fUaiBf4fHDiGcqN78CHx1zF3qk77yZX11Pusb1JnWEix4STM9HisitBJxVD3vBsC8iKN4MvXs6KJF2UCBSiTtp9",
  "key16": "4Y2tHz4TNp5wAU2ij7xSK9SSwegQQBLFBf6Bf8LhZ72YYJ5CdSeejZGygwcFMQkhbWxCknkFSV85bH2z29q8jNez",
  "key17": "48GXv81mudESs1dpSqhNLLXr7Fcv7DNCnXPtCZQ8xuiKzTsM6EgxkVHyGN39eUjg85Yh8VA17BqQ6eH2wieV2P2X",
  "key18": "4M7HDJr8uHhySYkRasoFpcS8R8q9LHAfR37eDF18hv5x4K3zMKRVnXHJkeyea9q7zo5pn2ABQiCRcjJrQ2PbM2kh",
  "key19": "5HB3odGcTKrLYcJxWghFGJrGPQAnTKMrccht5tKnVKP41r4Eh3dwtpmd8Az4pTEjc9d1opWcdw7F4f8fdMG1XoML",
  "key20": "3L5fV9mKaGrNvBFKe3pY5NXzgMQAkgvZYHTDQt5goFMectECAbQ1iBrrCiizXYP6NV9jBJ8RV1Uh4Mhhu5RNe2be",
  "key21": "3DadzoGVBP2UFvrZzJ8f3Z5TBGB5819GobSLjZxc4Hon5KcL1a2gmpF92eKm86sQ2TTRVfAAYammzSZBJ6Xu2SGR",
  "key22": "4MmW2nCzmxw31YQrPzepfdDgZg3jwRS6sAgfUvHvz1miSuQAWeVSLSUx542yebufxweABrx2Ed3g3EHkmKP4dsQu",
  "key23": "5SJmzL7ZdiUoXV7ZXux4Rg8XSQNc7YuNKx92ZCSq5XBMQrrMLVKB8UfZgz3b2KX5eHM5enK9AiUskYGwQHSrgAFC",
  "key24": "25UPuuPJV87fBfziUpkVarU1VSMeyPchnJZRCR9LbExXap1kdGTWZZTNAaScBZfeyL1U6fUeMKFJttyGZebYVKXS",
  "key25": "4kpMkpSyL1uy51NQHfv6Th1Dz3MVCCXnUHjmiLogRUhrWiyzaeTnJxKoM9jZxvVm2D2Q7L8Cg9VDQvxwB4B5fYCn",
  "key26": "23zgPFgWzQAuYycsJgmbf2JiZnSGX7VyuojZpVp4jPsXpGRd9Azt5CUXNfuH9ygxQ8NvN64MSQjYKkpdPM5m8VuU",
  "key27": "2q8jYDu8dA65NKWvRdaasa57tXPUuFKGe2BJe5z5hBv9zzqSRMyr3C1Rb8ppB1vQX2JE8ooU8G5N54rzpLNkG8uq",
  "key28": "jp74CjdEvZav9kzxjuf1kX4wwPbUMmP2MAKY6bySxKJqpVxLoXeX2C84XacVmKgsFNc4VFV38dfi4y96MDB2VTk",
  "key29": "5fXsrb9Am5LR6vA5hY1xManeL5ZvsvUkRi5kZ2fqq1m6fnmLoCt8q3NcQSXErC3LLnKv4MMysQyENQKDAaVYpGNA",
  "key30": "KeVNdJBuWnotEFuNK6dbutpzMrPmkFqrXDj8n41PwwJnaum7a3WGxmyohfVd5bZ4HwHpxcYv1Gb2Z5jBXrNAGMW",
  "key31": "WzshijYaPEpD6tzX1kLpFEnayas6UKyYNkPDCZWGXjPryiMY3apnNPhiE9Mwt7mmPsvrFR6vSJJ7PMJJVwK6oVH",
  "key32": "5jTUKMRXdMF8ZxRJT6YrRMD5jFuadEEWbm2SfmYYecDE5iqEj3oWDWSbspgn1Q3bYdo8BijQuLi3JNcxWWmXLcun",
  "key33": "547czSmsZUqsN9FuTrpsGKtqAG7SStN9froL4Mw8o8h751HtxQWMbM7koEVVFSLjoho3QbpGHrkWrFzZWM4w1aeS",
  "key34": "4B2cyfNbuSyuuQz52FRWtfSS9aiFsHdUfUf8Vos7EJuqQX12NxBducksRSGKdWTXYL2JMwugC3unJJkM2FL8bxnb",
  "key35": "bQpAFeLfARS6BPJw2Wp567th3XrBDhfMbg46nDaFQAzh4QgsXrWuDMfZLm9GSrtyeDoSY9EaDcg2M7hpFYoEda1",
  "key36": "4ggAaK1smrc41TJJzGovsHhoBEjudY92HrsgvhNBNt2MdVAfbPqpLEEiCDngFgc47gE2wN9c9Jmpn6etPDNJwrTJ",
  "key37": "3AgvHZKb6gHNAxqkbXgfr2hNxrhbWuZa2RbmC9yTJHxveP8J4GBXyS9u87ZkAFSypZUSzLcN7EMHHPRKDV7Pr8Pq",
  "key38": "2RCsAc6cP2UCjfRQNdHnwYNmQxpw3ywt1Mu1Xy1pd26oT2BJVSccUwJae59ohJqWuAJpSFGWQ9Zn99Rt2veB4uu6",
  "key39": "4KAfUBBGkGc3rKwByyZB1gGRreDf2td4eLhieZwgypH7iqa2mpqa9YntutJZJ3YK8HMLF2bfpYTdo6rbfrqNgq3R",
  "key40": "jJXDfDXtfpJxxPNW6GTx3Awfy9uQFD2U9VqB7ujxxYbXqVmxLHSUkDoyehK6yQ53hktsVkHNp2fuHqhzJ9WbdyP"
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
