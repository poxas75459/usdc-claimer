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
    "3zsHEEJqztBbWsL9Zm5Eu5QBMfRoSodZgC2Ws6ScWFB2rci5H7LuZpXHqFaL7M9zo6ddi74V1zShqUiKXQkx3ZnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mDAntfMzGP11oDfDZZ5wj25pyNwRCHiEycCwTWN2L2MBpT88tCEdCMAHbMB1dNTEhPEVgTzPsgxBwZ2MrTy2YqU",
  "key1": "55JF6c2MMyRY1kigXkerS7EArDNPQn11v6HrzH2uBLfTeuKH2fTLzwRHep53fAiFjQ8D8L74AYdkNyb8tA2ArtG6",
  "key2": "3juj9cfwTu4McmR8xu9aCy2FgnrAqxC8MV5C17PxoxZ8vTTPEoK3T94KhRsTrLxacN8AvHsBQi739WEsTuTVzz4K",
  "key3": "4C8Gawo9DAY5dLyykfPDRYAHTj6frndJaWMjz3cVr66deQe31BJpbwdHqLbza6gLX9ju8xx76xjQW7gcgD9c3ed6",
  "key4": "3FsMFfMPfnLtEc11jrtzYEnxEqJE45VgLMur7jpdsRGnyHpRt4oBPaWgYRs3K8HAG1QzaCmRxXJNCfJjtWYZE1rs",
  "key5": "3719VFNNnyxrXYjgen12y13TonG7HZ6xM6Aqk662Mjvf5rjhX2UF9Xad9t6Um8yieoUXPYMr35n7LiwB9TqkcQEy",
  "key6": "2uEBfsLYihnTHnESummpM4dF5vgTV7iuE93BdTKjeFQag6nLiRSFaidFQcwH3GSpJecB5FstvVn6EZiRXZnf9Hpi",
  "key7": "3QG5fxYVXXi8BfjXZyjvwQcHL1LfmJriwKEPEGjXoUD7SbQdUAf4vKHq9vmJz26kr9a9QxxDPnunm24gYLkjzHzw",
  "key8": "5DFCvvbSdGLWCrzLPwkDN6ySTZfbZexjtSPZJrGhS2HDBuLdAyu7b3bHAk6XJUK9cBYg6zrypR3utMCUDx6E9wen",
  "key9": "ycTvvu85d6xxRLPTEnkykJJXHVe9rKF5YdsqLPkyVhHeZKwmZU4Y35RA6obUa4m8MdoLBt31CMqhcucuq9s7B5Q",
  "key10": "4eQwkEUFHZxyp3eb21M6N7a9vP3FEebn2SQQAAuBCjL1oprSXpfzWTupBJZoUyqsssuZbJgDXXEwVYBGWVyMs8Fv",
  "key11": "5nzAQzx91utLUp7qaB44Jz8fcBnvhSzxtGs3zRd6TA74uUqrnScSnGbXgV2XqdG5K6P7NXSDNs3a4enk4eui1pVm",
  "key12": "xqvdbi34ETBTai93iocKGQhST1k2Mb5VmpAUV1z1Jmj5pMzALGYNom7j2sEh6RVsUsLG3KR8yesVLQfdf8fdyv3",
  "key13": "5ejHutg7FCfCEieJzHrWAmDY5LQQBMSqD1HJcCShfVeA5zcGtqsGUQgwBvoGU6xMc3NL9Bi86mwD6oEeJnSsKrCN",
  "key14": "3xiZ5qdC1kvjXmw74QNiJg6qYS2wB1UpK3VsmgBoianLJ3oWRTux8uKR9AVUkzaVMLqXeNuu8NnQiq8aMjmVNxGQ",
  "key15": "3D3XVgDRf7R1fWEP8jSfqFC66wTtiGxrLw6mVhehoNNzpMDc48eweEiuPdtZPhvSoyCuR9tBWX5gbELTX7C6foue",
  "key16": "bgp5pFaHfophL8SsVV2aif48Vop2LjygkRDD9kMLhz8QkxF5DbtK7VnxgnMmA6s19tzemMgJpGXfYgNwB6PTBJN",
  "key17": "4FpLJokkPH4spoRf9Qd1WyY86xfrFpfYMSjmoodBbUkB4CZDsKKCToQDrXPhm79ULd92qQYrbcygnNnoWhxb4XAD",
  "key18": "4zjgr2Ub2SxDxT6SHbHJjAZDxcAoECR5uNThsQMpM3FAWWQqfyMRgvoKtLgj5uxa7RQ9gc4vG2ASp8VWCCwsoAgq",
  "key19": "5JniA5738zYYFv6CQqN5629wP6EdPfTwCwFe33khCZs2kVTCjphHhmuWeeT7A8cbtpK5Jum6hHZkjWHaZhPgxY1Q",
  "key20": "55gJRjoyxCspHMgzee21gKSqR8YfodQXMKBVT4f4zt8nQSHYKeGoXPxV7zVKcyreSAJTMNAYe5HEWhGo6HosiGEH",
  "key21": "3CJN6kwgkS3LnCSLpphm8XHchfVU4GrxphPtvNQHhUkfBm4vciGf4MzzWmtmgSJ3TZLm5zcc4jdxqJt6P5P8cbki",
  "key22": "2aQ42tWmC4e6fnbUQVtcknLcXbqUB98okyXQaCP68gSeetVk7nSc4HcxpvQ93vPW1cpf4aadssqcri8jqCTeE5ns",
  "key23": "4mUj9MUd7o2QVi6xEF3ApL8P97QyZ8Uqa7Pn35sp1rZdfsZ86GuVWf1keVdvLvW7dXXLRMEwCkdNH9A7g29KZzpA",
  "key24": "5fQn1eW7quXvK2iRHySSEuA8gpzYCoxRJ2ndboCBWHbbPnndLHm32y8CUEaxTjsN6bPTXHhEdQ7CufuqvJgzGBrn",
  "key25": "4EgRyvazjP7rCh3qrfnrVysz9oENx93y8fLs4KzdzKbgUrBuA3pdJv65UJo6cZeadcdgakjpGxSceoEyqfuA1uhf",
  "key26": "2E41TfTHQ2Z3vEMMLTLnhaHGSQygSEq5xFbRQjxthaGVn5PQaigZ8C9Jc7Xq6mboYSxfuA6NxJvMzgQzUFRmZGpB",
  "key27": "124M61cT65UWzfzF5ooj9a87cv6qm8S1g2rE3wLvdY1RKP1aPTBG5xju5WSPsatvR2zsrUhDkq4MJsTG6baS9hp8",
  "key28": "3bLVDM9gknzAmp9q3UxRYZG5NjzZ5mQCAVVRoft9nMbdMacvPuis7K2ZgT6vUtJdSkbZkx2BWjGp1ZwhhMCdVGL5",
  "key29": "4wwpTraDzL9TnwJyWyrWJiCG4nqDFViHomSwZ8muR9P5rGF1yT5QvgsndMTrckgF68CoyX2m6C8yAkbPrsjfiyZK",
  "key30": "RV5K9vrhdVWYsVGNwf13tAkuUimEDMpFxUpsFefmeERCoeAYjy9d6GNeAphj7sp6aFPoWxqF2fqU7THqv4nLbSB",
  "key31": "47WdVvamzVwH3m4MCutRTXF7xLggb79jTjZWdoX2mYYNQ4fPeyba24Up9aJUhHyiAyETqvLx3dgJeVz2VFhAWH83",
  "key32": "2CjkC6GfsTVjvadfbkFu6gar7SPSARXC3YRTNd3dJ7owbTQNDWdhhZbcHNDXY7Q8Cde4jd4NWFfbRfHDPQqF49qa",
  "key33": "2dN9jmDJY4zjJfnvtAMj7xG9kVtbcwQJRhhGDf1PaLh1ibDSeG5oU6CTnU7EbwGwfKG3r1Cj7g3xppDHfgCLM7rv",
  "key34": "4oKYP1zarFN9v3qWxxzRcNAGUBvubo1xjRJaaHWPin7avb7wDnzC4giBBtkP3b76Rz8pykHsANDAJxsW3Rpqyqdg",
  "key35": "24Nmn6bm3BmbdtC3q3KQBSUgnZDrq2HgVcdZrbt5tTfTZ98DBRqSBb3NFUWKxXiu75ah3LvJPf3Axt5YucrfQRmb",
  "key36": "2SaS7raRjxtnqDVzPGw6bh5iGghAHYEv3sKNfJPv3kdNW9NoDUELRPYR3qtLTChtUNRk1hVZDPPQX98TWooKW2Nr",
  "key37": "3r9mWnDkZMKrTjDRNksPMkgAo8yi2dc9MU6gpjhza4YCrj4d2EpuLNeWtFXGqEWuFGtKjjuAyzwzMRU8gh7XzziM",
  "key38": "31XYnoEvENS9AQz7SJQe54qBzYFKEw9rZPHgbZPMKMxkDi27642xr7ehLRy5b8CJYnHWxw7vtzVeSC6v9hTjjuzd",
  "key39": "2WaxrMvw5DznsHeSnz8ASd8yxbV39JonVqkRehMbL3e19N1mLEdhzHKzSqVW38gqgxprNwfRm5Bz23t4mvpjMZG4"
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
