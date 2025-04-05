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
    "47ufGoTzF9we7MbSiFd6mL9fpNCHmPVCGReLb59zyCE6cei6aoVa5Y8a8vXNFo2P9DVjqozbMVw199eKQvuLP2EE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kSWMsWgainuoaHif7tgaHMkqZ9Hz3N2CKi8FpczSLipUKLoF267EcEbqpB3dZQnNbRzXBKU3aBCfpSMnw1fUYX1",
  "key1": "4udbSsKi9xeXFSgyGrBHJuYjQNphN5jEPNcijAo7BrZQWRZB7yvyuRgxJitsz59bzTsViwcpseCYNyDZUm51kDuZ",
  "key2": "4FtagTxh5sGrqo7Rj8vE8q3ztuQFvk5CQsujZAgAy6Zxx5e5Xr9TairREeBrwoUkWZYbd1U4LkeSUoDmCqzz7jMC",
  "key3": "4gZUtg2VvCNj1DtWVBMKFV5ddnGPU439ehqa9fkKVeCmQxfVSc5qjyMXdBpDDKWed9HPUN8BkkyR5LSqCnEnF1Zp",
  "key4": "5KPSWVAukEd8ojPoTHieQur7cHrTRr23RMYD1NHU4MtYZm1TMGCqDCQwHnGZGxkigVocPakxDZeJ9KDomiCzyvDw",
  "key5": "3YS32JbsVABPzYP8Vh7ZQxXJM5njx5S68KnuvDxPVTe18LZsvW5PFmL4jbAm1FwTTVSPFECuTQo75KuaKg1Pgq3R",
  "key6": "3eyGSkzdhCYodACUPqL8mW9N3dmk8GiLpLuKErGzNqDRdZ7eGFJMmQWTqG5g2uA6eGA426sKnBB2FsBvkq9TVSLb",
  "key7": "4PZaSfHQv1cgnw4fZYVghj3sWxUJcgcYcR8Ha9oMtJ6ryLTsKrERnzdzjdNWMN6tmTn7hRU4xQDgBsbYpPz4LZ5H",
  "key8": "5eCHuymCkZTni5VTa6sZUrnSZkr47EMsqvYAyqWPjUzewoyQwbNveWowt2v4829tAXJHfNDKExSnYw83kx4S6hSC",
  "key9": "55oCsjJutpuzqsNdHWZ7U8yZzFsbGrpv5FZQazz2YwrHt73n2H7L7wLPyEpz4mSEseNmjmvABGz5SYT8KVd8xfgk",
  "key10": "3zJwoX7e3zMze4a1qnLF6vDf8TFzRDW6iG9MjzwiMPW5kDtofruKPJfUTdGiyN3csVoYywN1dCZLsshejpV56GyW",
  "key11": "5KEwMthaYQUDBzEZdqbq2buvZE5UHnWFpyjvN79tTp8U3uDhjM958KJo8jzhaN5LBT1WQ5ds5a9dnEgY97PXpbdx",
  "key12": "3aoPZjEP1JczdaQ5mSKBTdQ5LfxsP9qoGNjVVA2B5wL7XM9JHKs68UBYpbgxacZNKh1SjTzLK4kFgoL9ZAtvqw8k",
  "key13": "5mq7ThUYnCCwVJdGFGeZmq9hhGEENywwMa5jb2TvTURjsRBirsfCnA89kcwd1WJxtNu9MRua8ZDtTdeTbChya52K",
  "key14": "4iKTbSpGJaYhnPqjh3w562rV2gugwoWu92Gy84JroyHwKcen388xCiLYANcTBq2LPPosBvAEqhjiWhQ2wBJh7HdX",
  "key15": "4BYC2qTmyGyhRbvKEaaVEyNSG6TbzzrEzHAJizfspfkUfi9DWnhfmjvUV2ihyX3PrudACLjnppucFqCBZbKcjMXt",
  "key16": "4XaXt2pCv7BcnZRi4nMr5BndWGMJRN7r9CaSzEaYd4KNdud4wZurSZ1PMqzVXUPd8vu1sJcLLMbRK38sx6tNkmiv",
  "key17": "5PGqtxL1nQUWschg6jvbL8TAmmWd9zjXUwNLipR4UpyyNn9HHqmVYQrFr8Sc24t4kx3wQxpDha2qPuzkh6wXm1i4",
  "key18": "2sZjmdw96s8pa37Ce6ZnUUMXojNA2YQU6EoCvdfco2ZKBf3u9SLTUMp5Y6HistVgyF6a7Vi3S9tZhGoRs7WUxZ3p",
  "key19": "2AhskYJ8J6XYxSDdEgzrC9EMrDNJ8YDtYtVr3ZZRn2wgbcuDBho1smyQEVo1kjABh2N2J6qzPTd4uvy2KoQVFFCK",
  "key20": "5Jg5c887TLkTX9uXXW9vKX3T36AG8MYZhZ4yuUBvQesiLhDQPajVJWwihzzDETnKtaoeF7yWeomBWGirsT2zoXru",
  "key21": "2UZtBJgqRbJW4C24msUeJT31UKzp5Yxjvwj7MK9at18JZPahrP24L2jfHCLjCrGGmAZjoi8RvPBf8CsGKsL5Fum8",
  "key22": "34gNdeoe58vNpXZurfVvVtAZkft5ZLjwjGGJuAo6TCVML4BzCW14Pawfnp7cXZ6NmspSKSFV1qVizShkP6oizMwg",
  "key23": "2pupE55pxwaoKTDhkMmLjGqCeHY71ENUWfvju9csbkgwYGemzjiyosj4rrT5XgkuDvzxa6CdtyGmtx7fmXTUa9rk",
  "key24": "5eR66pY9mQC4CbFmJ9RERwF6nuh7TBvV1Hc24ZFbCm7H3gzFDJAjD9yq9qhhC1xw8x68Ch9rUbmUke6XYRvnpxYB",
  "key25": "5dZxkiF4HGncWBCQZwCCtKAvy7s8GLk5WKSCGQsRyxFdubZ4KtJmWH1FjvGFGDboS244BYsQyzbk2kL64AqjvZTG",
  "key26": "3jrxR9UFwWBjJkvMHRcmBwoWFnMp8RM8CiwJr5pd74GBoESo6sj1Xk1yyDtXDrbDJMp9tCN2P6zvsoonk8RNh5hn",
  "key27": "2Mw1nrWs2MoyAcZaNZk9UVk8Kr9rCKAtMfsrnyYsMYGuLPjcZwvCfVUx2cYsVFNNLG58vrex8GcyB5Sb5J43LB2G",
  "key28": "35TWtyDgmk3eF8RoK1fWAhsEPRaRkeMgCBsHgKphTyZcBdbupgA2G2rzDWGNs62SU3ctRNaExHkjfXZBE5PPwKvf",
  "key29": "2v1nPrF4fZADEwgRUcYiHMdd2RxjzfDy81wam2RBm4YYr6TPpyebUTMUiu82v9hEBsABq2WK8uy9GuRyQ8jPsTeG",
  "key30": "2UitSDx4Aop71sa9etpjipwtLFidPa3dNH6VYV8tQFWU8XjQQG4D6y4enpMPBzrqQ4Capb6WuZ5UFRVpVkaJ1NbK",
  "key31": "33e4SrQsupzvLS6UVq35WvhNFovXPb1XkdsF7EPgGVKWvXKPA58hr7gTyNJTz2JTQe3LwEfKmEotX9ztaJ39kah7",
  "key32": "47rXsM6VRQtkK1Mx2SqXXGp6sUMf5cLBdbWe4cXNMPW6dsf17rti8chUnFcsQPENsmN2WQx3tZ44cuu6hkZoFKP2",
  "key33": "5XXg6hheC1RZKfgsfJbLZ3KB997hqp8JPmfNAdPMfbHSVDcVGCfG8D727KZmTDxasXPa1Qrz7RhoQa9hdgxtuHF4",
  "key34": "2vyghsqrQBVvJMzknxyaF1TRJm2dJUQuC8dzfR8KuYuqWqmJxSdr9E5ANAtbCU2rK2HksbkZTVj1sTbz5Bdy4Dtz",
  "key35": "wcNsT1vK2nRrjbz8ueW8P96bqQTUGCUELix5UqEKaoveoqBdBwGhnm8f8vXaiD1VKwxja9QzXoyqrSU3PZ3mvxc",
  "key36": "abePkQjzKw32CU8Uiv1c9CWMxE9sumETGZqWybRNu5kW7yG64GhxUhX7LjTdB9gCEr5U5ibQrqKEP3z13NCi7mD",
  "key37": "2FzzzFM5i6pQXxjrcj4m5wtsCk9178hpr8AfJQuEtYMyaxwMdUFZv4DHesTxms9kU8ChPDy1MCkUesNgdxwx4NUt",
  "key38": "4ewy3vLYYk6uYs2k2V9hz8npjsh2LS7131e8MnXPk2oaTGouFdtGwSsxvjNqdmzZ4qqP7QYadEBAHzpzzT8pY9yb",
  "key39": "5UVM6d7gfq2TGukapCyfx3tqhB6FLGQAsV9rjprBcBY87wGYRGpvFTaCE6FnyUCcfMDfBJcRPSXgvxac3eAnVRy5",
  "key40": "2ybbK3wnFwduFQfhLDmji3H6GnUWQZEBskCZVX91XCudBedC3L9iZUHwWZx8RcqK88ftpyG6iz3kE7mkws7gqE1q",
  "key41": "2LbeqtQBqzUdzbJ5VUdyuHJhPLz8zu7w9Uf9wchQHvXaYNHxG3n2XtibkM8tbzZtpRoVq84en87pxpzuaUmsXbaq",
  "key42": "5W1PT4ry76MCC7EcrGkiw5tAKWFDxsGTXpa4TgCnTMxdgas38pcYQPe99CDvEEZzedBE6nFz8AY4Uo8MLzB2uMd1",
  "key43": "3Z9x7Z3bGzkemih4erQn1sdxXUdvvdEe28c9qoK3hUVXDZz39oFpp3hUojg9nw73m98VAjRkKo4cThtFgRRxoHPm",
  "key44": "55eN7jRUp8Jjp68ZbjCJrQmos6HLPzH9NYKu2dAJxoF7rKgKMaAHw9seaSQDqiy4CcL8ByymR5Yfy7i7qfWH8dmH",
  "key45": "L69t9G7eRuZaBrWNdyvAsher2Z5XhRco6HwJbkCQCDnFw4n8XPPqUACPwkUgVFKaRFZKkGDTmtxZHaRBeJtY34S",
  "key46": "3bLoKJezXq6sEAk3UcGSF1fPea7aqvdU9zqwepngLsB1DgRX5Wurg9qpWD8ESF68YpSavsmQAKuPWkeXTfAYpfc1",
  "key47": "m2YmouKg8S5mRc6PisXaPae9jEwCHqJwVfQGeTn3wiXeiHforbfyDKpW8MyBQvPPoJKEXa5jgotjmVbCjeMbEXH",
  "key48": "2uV3uh7Q2fXifxxbECJWdiXfvFsZQviyoiVtfNTviFDh4wNbwaXa6BGqgx4p3pXJTD9bqrvDfu72pXHQLsstgGFH",
  "key49": "5ts73tRC3RTNNJgw4qh2PVjAuBGrFTduD9Ptb7s5P7JwLsyUiAAsPqjwMHkGX4HbZikUVo7aRtqJk2Y8zNPhREBL"
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
