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
    "48cAdaaNxHgP1Jkmf22TM2eqhUKCxpvvCnQWQ77BooCh4HRzSpR1VAmWnvNSgo6EkKxQiyLMsrQF5cuFZjuczbqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "663b4E55oQcGbrHVaJCUZQDYVNkKCSPWn49fwaUVsHYztzVUH7CG7zEoHCH5C2HTNDBpF3q9GxXfoBg6oSS95HAb",
  "key1": "3g5BBHh3W9vACvCNB6iTQ2kc3TWioXXz2J9XCdXBqKdJv8xcttbA6ofG82cCVD1UeBJYWKRqvUa4Q4Qjr3N1SSPP",
  "key2": "5eSMbxhaW3Hazpnf5xuCD3hTkQTA5WiMdrzyBwd2yLvwqTnn6abjvfy4ZoPCV2qvAN3SF8vp6xB5n77zjx1D6xXw",
  "key3": "2XGo5jyh89ktPQfMbNYQRfH9x7Va1iuF5WCxrQ5ztNu3cPBfw8AF5hCTcHgDM83qqwUyghaZ3WH86F2HBh8mkhpb",
  "key4": "3piGwnBzcLxqmjzDkwWFH5Wr6N5po4WJtTz4j56vtGj4mq3HUH9di7Lv6eewHqLcowPC48SHxfm7GMJVtxGkos6N",
  "key5": "4Jyv5956jLa9iopKNemoR4HJfuqCSTLqFMwjqww6tTHFBaUtTgxr24RzizopQtDu5M44weUv5E2nquJ1WQn2J2uv",
  "key6": "3E7FPxAW67b4sw3j5Sk1unanEKBq6jsGixkfRixQ9TMxikoDKao7TxtmW7CvAXo2nVVdJUrAe6rN3wfkGiT3v1h7",
  "key7": "w8hRCpVehpkfNzyuYJKXqCdCob52eqWPccfGvVAAQcpMvww5KwtY8KfaGBEVKRyCHFHVeiZWLLtkqZnnDPbjBvM",
  "key8": "3HX1j26e6b9Y3kTnH8cQ6ZykNCXotZoivnErMzdKaqvbaPCWkyzRsfeTyWAs4e3qjdA77detwUJNnYQA73FqTcyR",
  "key9": "3xfjcKNed1WqJYjN3LjZYNPKUokohPQvNPf96HM4iviF8MCAadTjJiJEb3ZTKCxSdQm54ZBH2SV3u5cjpJt196pf",
  "key10": "4RyH6gatz42DoQZTPap4eAw4MBFixE9sAMq9UAFdFwS1mHowUJwj1qvh5Y57snPBgZxYLf3YTh2DMvbFp16R9HUp",
  "key11": "5jv1LqS6hqHTzZSgrZQM1H2KrJEPUe9Cjb52ZG8qnLczBrcGV5nir57yJmwWMnGJe26sh3j5RfcE1i29YUT9VtCw",
  "key12": "42w5LMqJbjCF4JymRt7LtF1t3P9JDMzQdJYCXqXQFrgkSdpp8UG9GQzrSNaQk1WT8um86US3AQ3NzYV6vnjkrhhe",
  "key13": "3gbh2jeiM7y68g4vj1mDAbEnsPtuyyvPRjRKcjegnvf3fXM2i54egsXBbTdA5C1qNefVfUdsYoNRc79F7CyCpFDp",
  "key14": "5AjuoA1bHbbsKsrdVFbqquEEzn9mTKcWMoxrnaGz61Q3EjyMcKnhB6YBehVLCF9aLPkGQSNHANk388iCRyVYmaPc",
  "key15": "57rztrYT3RsGvPjKgRq7uFiUEidudREkqGUrzsk65MHjVF6LGkaJyYj5A12UKoHk6pnXsHdp8wD1QmfAwYoVAFx1",
  "key16": "5FCeWMLd2S4eqmnAryvCyZ66dUsNur42jH7YQER5NwVRy1p4aiyLj2y6LYTQ8B16oNFNux6jnYZWAXcK8sRiuYMq",
  "key17": "5Zr8uKcrL2BE94wTaMbHqrsN9N6nGaFdPvZ5bftD3avnLxuvv1NMotbkpUaPKMcDCgFmxwdgGUSGkMFBeSsENXx3",
  "key18": "64dotxW6cJ1mSFuLBAuMZhiYtxMat45vhiRaYLs3SwH3G2ccFuj5QZH6ajAPhdKmAr4Luz2rPjnQ5KFNN2WYAXeT",
  "key19": "5AmZubsnmFxhK666us219KShCuLMh2ddr1ydz5ycbbsHdAqqp32YdqPqAEeo9jUEQcGAnD5x1k5GXSFc2HvLQpLV",
  "key20": "4jBub7tmseCYPwVJpJwndavZ4stDQanpudUttHotJYe5uCBDfsLaLX6aP5AsLQiLZagAocXq2gnCLMzbSTBnbAEh",
  "key21": "J5hPLxxwZQEDoQx33FTTRaWaUKWxUk1rr6ZPDh64CSKYdYpdjHs2epMuNruc97N28Ai4rUyty81LbHTxo9fPmsx",
  "key22": "268rQtXvSLsgkDkRcXvHbx87cqNuDsRtKVcNUCB4b2tSAcS874a7nVoKmmUnwJ73jKib2S4aAMwaPX6pddUULete",
  "key23": "5BtQJT2Cw7AwyHykpUZUaQb8Ff7RpMvUaPbxWrwz9SbDo6HVLWnCN2y2cXXT2UwsU517WndJKqsJXDRxYycfwfhE",
  "key24": "4SVLRiQ3zmmULpeXFCgLcQpv5kzzQ85xsuhSiQoGwjRrnH8DJE9AsUz2sjUTcNwpuAk9bgA3HVb9oMnyq8hUjyFC",
  "key25": "2wkGvLQDSF7LoFt2KoBc1TdgUJKKKMVUWe1KcN1XCBxzi2FPm5WAFE4WJEHGhCYPvpv3hemAFyiWevUZigRc1PBq",
  "key26": "5zdqMuW6RsPbDRGdEtdRS6xyW1za52ZxEq1QKpRcoiYkqmWu6JU4d8vjc8dupF5Xz3zgQmFEU4BWQxEpyyzUe6vN",
  "key27": "4FBKWiP5Dp6WUtoXg4Gf8Q1SNpZgSksTtecRTU8zUkgRKryLGu4sDLFschM5KZDEDrsAXeHNQqH2N95oCY99Bv68",
  "key28": "29md26d882cZoiyJp2Xy6wxKLGfP5Dfi7XfHy49oyytdFN3MLLrRb3b4tHCLnR2CMeHoQphQm4gN1ibddPJqgT3y",
  "key29": "66d8CLDwUNVjjmpDhcJGDQCWPAJPXKGuwpxwRtaym5jJL2EqYz4Go9MVSAME2fjg6NgfiBcuTDK5JL7GhYEJKePv",
  "key30": "9Ly57w41nVRehRQGE4NSuQtSduPyCU5XYdaHDVVTNuJyvsnMTe3vuKwaF95pXJdk1z9PMi6GAdPzxB9X8C5WFcT",
  "key31": "EqspJSRPpYUPe6vmXvBkZD5eDPD4snvYEiSxg5ZhbvrjEdqJP4DsQvYe5WsQByhCEiGRXyYRj6hm2h51vS8Avmm",
  "key32": "5v7ZBdcZa8HE2W6v9NTBnoc5Bwc8rt9oV4iosJ2akmRUJ1wJa6FukGstyEAysxWWxLvis2dsgwDwssztzp9fWKT2",
  "key33": "54wteL5vAZALhroTvzpy3128idQxWAZD4uo8GYG8ktAj56YRGwwCvc3VfsejTPi2G9wyA1t9NVTP9wEgNc8rSy9A",
  "key34": "32tEsFGQM8Q2obUjt7724d6LvnB2ncycGAGNKaTFbriSxqKjRQyv1BpHYpS4vkMJ91ThgUoP6FnWrRTh4HAP8qPa",
  "key35": "tvo2LiWEr7if5jpkYkz9P7vftkR7oLdFwX252Me4knLtm6eh6FGsPgUoMPWhY8rtsDZp9rQyqVFUybGU66M3ny5",
  "key36": "vMw7PCah5he4HoAiuLcpdtA4hcCJjvAwji82CkMevYEv1Nb5R3NpkeRz8NR7hijAoCcRRyY6YxEeKZTDgpchHGi",
  "key37": "4qb127jbkjz71H5p8uLoHZT5ydwKZ8Dg96KMmfGcyURgb6VdNbLSKdi5wMPtZw4LuvteG92Y6ZtakeRYQ11nDH8",
  "key38": "6S7X8k4qDF4DiqJ1p3GuJy3YGqr5n5a6xyrA84gFhexQTx69gmQWFWbz9mQwsmszegdtEvxnBbE1pyXA68ZheGi",
  "key39": "43XbfUmT12dpAYzM2jSgorKC3hYT7cwXLcPRWy4h31tSFrpYBDKwwxxr2pUKbFsbpn2G1AsrJeqowTPUP4Dn2u7w",
  "key40": "42RtN5oMh3YFZAQUrE8vCthpsKv8tYBUnhHhDxZizhEP6LzAxTimhk5o4A5VAuLrEgGnYzG5Tuke7gKReyBgDtn7",
  "key41": "2qRUhQ2ZePm3uW4Ta6nL6tD21nXgwtN4gt5h6thr4KWaQcqPGZbBRx8BhZ58Dq36cXiSjX7xVqUgXjaiE7eGyrZD",
  "key42": "4yTqySdWfmRyKVQxqxjzZMExc8U3mTvDtCrQbN9zn1ZEYw2KPUD1MubuidTMo1RbHjM7GZAgr9j7hTKHqkH7gQch",
  "key43": "2F2GTA7QiyEMQZsJFf77mnrAUVmm294TFJALpgKY9QgjnffGsNaCd3arwo5LZuoq5BtH2o2WDLLn3YN7TYTVRtiE",
  "key44": "44mtndy6EoUwrLruT6JuL3Ukt8XC35jmrvfWuz7caeqdgj6xMC3QYVD86TMgiicCpQ2QdRhMmaHDAJSrsQP2dotu",
  "key45": "AmQLnkpBaPVeeDWLhD7zW4fzBmFK2yCkvBYdwfABwJ78HN1BsET6jTXNoUaEicBVG5n4ffLP6yd4eNZxjGUNGmG",
  "key46": "4qHx5UVRiJEjUFW2NUnPfDeb2Gg8yjWSUrGreNz5tbFHMcf5nP4UDpjbuFQxozd1wT3EMYNjcit6em75gEeeN29i",
  "key47": "iLbhgNF6qgh1GZPyUAPUpFT4FNbEJZbuX4wf9DysD5JGws1cQ7Z7HR31GwXWjZk7TvkU6kGkbATxx9oMXaacY2s",
  "key48": "5scGCzFaYmnnesZb9psRD8qr98MmLPstVXF6FHq9a9KcQV4kb43hSQVigu2nctLsrj5sjqzMH3oVV3RUUhPFTxnf",
  "key49": "3gGQoxLHTpZwKzV2FscFaKQUAgxThCjtebW7WS6vLsfkaAeehv9zCSJufFEqDw5LxjwHN4fSXFXjJM4nMk4XmCNJ"
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
