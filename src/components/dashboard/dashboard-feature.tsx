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
    "4pxo6XngyH7UbJ5CPVfjVD3ceK3H4eLHRaZ74Av2xydS2KGxu88Lpj6hj5AvW4RbdFNvGu3VLawcULeyM6Df7Mrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cfJHNs5H2oAjW88aaydzxYerhJuVz3Z4sVGk1U6y2VS5DgxEqwFnWAK8fDMXjLfKqFTWFBuB6Esoqj4GoNQCBst",
  "key1": "45rkKtKjQBvCJhz1z891tso5dkbSNfxpEPCVgHj8FjnWHs9vjcXopUmfm4hhuzgABBKosxnhg6VwjMtgTHTBk2G5",
  "key2": "Yywqy8P7bCMaETtNNkfHVJGTYWwenPeykoy1Jhsdav9q51wrhmj77q6VV1N1HfM47t6kXTSHnWPyi8SZSLSp2gk",
  "key3": "21QJa2t4sAyoJf3c98ubT1vnbN89X2xWhU3DaDfqYbK8aPCcCqnzNG9We8RjLKVCWd8xy7Y6KKrP1869tevGNdt8",
  "key4": "2ztx9pw5j9RVhmAPxe2RxTHrvaSdxn7gA4s7XxjhFBxUpcq5Lz573H6aDcr678SazkNBfBWpQTiRPeMiAdHXgVBb",
  "key5": "3JZ3QDiTaE8FJkegtvAA242iEKtvyy5TqRG7987sD9WGZdCcvG2vvy8aGA9vZTWQ5EuDxbcwtkawUUM4oUGRs31t",
  "key6": "5w7tfN8jZvcH6A3sgYD7zFdrzdT7rKXyU93e62UzJqkWeG5qKsT4Uay9vG2j9yvUPR1Q5DQEtx3Z772M5s91AQvA",
  "key7": "3RWrv4riSnkbT7HRraWyR9yusKzzRZFYY8jTmu3ZXvwQbGhTEsg54f2ebYN8UqFSfJJRNyPZHjDFQS7bc42n12J",
  "key8": "2PZNG2LuA5QSfRYkGXXKZD4LEfWJzMTjEcHeu7kL5Vez27yxz2RsRfyxyYUeF22Bhf7XxPjcoFpiP676TSzxam6v",
  "key9": "2BHVweRHxVWwYxE1WgpuH7i1ep8RmBqqXFumzu8owP4Qd4BUP4imaTNAL1hJjK4x7WzgMeVxkHs7SsSnVHYNx5dm",
  "key10": "5Szvfq3i5EpU3CKKVRHTf4KDfqWA5wygudFAsMZSZBRo26cPEGwdqeNkyi4rq5Z93HDJortXUJMaiEV1n3r3ykm8",
  "key11": "vYMwQjjSbFVHhUj35g6sCqKCE5NFbBGKb8BJUYHPD1HpiySQCf58MrvamNJaegDhf6Vutxxb5TvCvMQvEGv2iFj",
  "key12": "29y2Gc78dyGgkpzhnPJBfLZyod75UxizpDoLLVBdnSzdt49C7iBE4vNXZ5zfw1vzrTBehJ7JCPoAfWwwMfXEDeMP",
  "key13": "5d5EmCkeyU6RcjwNDqBPf8mcRhk78D5Leg67Mp4Ao6hJNwv1fnhL4gur42a8XZiKoGgHSMfgKYzFqJjk3Sk7Jszo",
  "key14": "2Revrwa4V9ZSBHSRmy4FHUexepHRBuCLwfg2ReufuM17KWwMyRdmhbaD5Qbqz3SgX8kxYNoe7gargjD1PEoB1Nei",
  "key15": "3nZupiQGxFPRzS76GQcTT9NeTx7yZo9DwwKhVSiQ146V8Ap5cWssTnnm4aRanJZQr6UKPYqGWwTF7AebfBSGYAep",
  "key16": "3mQJCUHyBv3D7BJ4cP5UECc3532SAspmYnCp5BYydbiqG7P4i9t6EQyiLwdhqsced8Fzs8CtAKwPYHh3MsRs9ESY",
  "key17": "tdVhxyHKC2AEiY7EAMKJdFydgWMK7Cdt9tUDxXpwUK6CTCWFbWAR8c9H5S1RzYFemFsu2YCVYY5dGM2hAtiSrED",
  "key18": "3PbjT8yDWret6qQNXUmrYM9DjBxN9454n31gLcxhma4Jy4m9pFMtsupRnNYUAmUzwrpgLmXRvXdhp8LR3RnP7K9G",
  "key19": "5qeh9XH8uzpSSfJqwmTjiCMnrFK64kBgE4wjTGkPp7ngk2Qd9sTDDfEitCxnSbP2wx2g2GoYUvAUGYMvCENdD1ED",
  "key20": "41Pb1ZAkhn6QLaqoJqC8i5Bf6JaeiUKFQCdVHC1pAK9hSQkyJNXGNZN3LroBv7o3uawwCgmNuePowqgzCYkHZpdo",
  "key21": "2rbukN9ka5dYsoeASZecQxVgADo5FuyyzfRuKK4ANqrzntdiUT6qTuiydjHFrVKayCt9QXHuYqYj3QUjhzob9t4C",
  "key22": "2UDNHZfmKvapamA6N4ASaZc1Rnf8nSq3yxWD27dQWHAAKDqfB5T9RiJvPwC8nJn48HwvyPqtRgDYgtJRonPmqUMn",
  "key23": "4YzGQaioMGuKEkDqqGgA68CZyXJzcLiYSrwhGGQxx6ELLWjcYxMvCP2u6bTb5wzzs9eAFABVEZt2JHqK1n3axgyx",
  "key24": "9j4TMz3DEziAXtMXqM6MmLyvwrRxTjuFXDXECm6pB3AnJzDX4SddgCYDG423VsY5VG8WaokVLE1SbhZzsH98FPJ",
  "key25": "3ce8Bed477t49cvfvEGdBKvYFtC5Na7Qcr472vZe7bxJbco17mUYZERp2bW3BzDZp1DwGqwQXbqS2KKqTG1bLLWz",
  "key26": "31ZZCusa4FmTY2opyTNXvc7KDp2N7CAkPWHUdEnihGwg3CQJqiKyiUpJJ6xdiPzYcvB7whkJF2iiwKKeMzGZZKTy",
  "key27": "26YTx4USyPKigvfUbcDsaigUfYqhujFHUfnQ4s4ynVKFwDR6wBKxknrn2vb3khLGfzErQmRBPhuX73vGmNKkSJ9X",
  "key28": "34hNuC5Mbt4ptQLTYxFQE2FqM8hZezv2Qt75HfmFWCChg5Zhm1wxw3nisefdX27Aije6D6sKx8RUYLVCz6VxSbMy",
  "key29": "Zt5HwL1YhNubajT3is5yWWQHKQuesJc6jwM9keQ6wKYitDEjTzJVpxQwbrkRawHc2DbEbP3pCEKB2Nz2SQm5A8H",
  "key30": "41UVRoHPJLK59tKdqfBknoZaj1GXfdah9cuy4SBnsqMMTURTDXNAUGfyaz1MtwcMdaFM9uUBzURUwtGcudgjbw64",
  "key31": "4pVGtYLgGeSHnsPAx4YuZEQ594KGpz9dvKiL6jWw1SFJZuUaQYD9Fse4VhnkjpHTFBZMM2ijAi42Cq4oRLxsY6vN",
  "key32": "3yrwgqFSNsmgpq3FhLuUcYqHFY215nZmeBRmrWb4X9NzPRHZ9HJgaJ4h2roie21uuSbUsxUsb2wH95RJVhQKvyfz",
  "key33": "5o9QbJqZNQTfSoWuonskVXnucUHozDcozzkiqZ6CGTUwbB1K295tMvpXZTy3sSes1fKJzBsqde6yL8snyiEh4swk",
  "key34": "2vFK3JDgh7hcdjLD4Bk6E6gC8sf9BEH4EfonN8cJcTE2T4w4bGTLF6CraqhsXkfwfjeV3CEp6mGg2EtJQmL4J58h",
  "key35": "67M33RoUy2QJEohq2SumcQPL8KyPRxJCdDdPAJXmvw6wMfRUrFSx1dYFaSwrqtTCcCGzQC7iMY1gKoQ2WgZpKCqR",
  "key36": "66Ybm7z549Hto8koMjZpvFyBLiHRXg1u8Gdrw1ch4bFM4EHFdzwyKkPWrF51cV1nWpfDM9iLVWoQ8bPxzr4n5X3a",
  "key37": "43bQxEz3VtJoVJvwLzZ24CwNE4V8vwPioZ73cNhMobHRztyVswFFonc83SZMdv8FfuyEDC1c7Ea58E2TCUR26okS",
  "key38": "5W5WnMBTvXExz7zU9aD1uVukgw1aiDrTgYn9igthmdHSDmcvENoA5MukkruoSBVVaz7b7LwmN8WVenUYHm71kPyT",
  "key39": "EcsGWLWaj9qFtX5yBfdPdDiEW9rKUqCK81MonXqjN112hMZefhVxuW86gz15rcwXLQof8AxdQBRyJz9aMSSoHaV",
  "key40": "JyfYbvdB3wjzXox4F3k61PvkB65eU8KLNet4ihSUyjRxwKMSndp5DtvoERNM3Zod7xYecGHFS7mjeJwPDC7FU3W",
  "key41": "2EFx4Qex9dvRoTKN5o794t5XXyRtaskZAFNhytq1JgVNsrWNUmn2GJpxbJMfAZmf6fjEhRNwQme3xur9cWTnhdXW",
  "key42": "3mk5pjNqiQroy9QXrNwDo3QZnar3X2Y47okcvgHYuURWxRPqpm5r3cpJa3ykWLFDHUsyNZVBepTEe9Vc1NTXxbUw",
  "key43": "2HUVz1Lcy3JAvACPzSH3n6gRPLizXSKbAcg368w39poZM4JbxWEL4QDDqNGP6T1ugkt4j8wkyRvJJvZ3Aer8Pxmi",
  "key44": "rG5iQkaV8DDMYADVZ4eW2adPk8aAh984qbR9JRaWUvfj8SuCAoQUBJfp63B5wosidKCDwfQH1MuX4yCTm9AXDLk",
  "key45": "5NwHKTs5NgcLxtyhWjSi2AbaFDFoFXLUUHZNZU4q7orrZkbWLuvXBG8tVHHFnVkvCUmP8BjWqt8aqccumPvToTm7",
  "key46": "48jfsCZcNs8GHshADvNg8aB4ED8ux4jXhZCbiL7i49G5swoaKi51fEHNmVKMfVsa8jxLbV9XRRpkS17f76LNkFhH",
  "key47": "iFusQnxX3BMwLrVynWc16CSA8MEr38SLj1EtTR8RjbPxbtGx2WwsonD8xC7DXuMhbm3hX5uw5iXJj7zqo5n1Y3s",
  "key48": "5dsHhXyG1xs8BQADAhD6W9frpAcQK19cFgoyeJoK5ocNu6KYvTAnY31Js2vs7WbrtoS4oa2Pr6TiJxns38r6Uxxh",
  "key49": "4WPBmp5A594psMbKsGLFGT4AD6tnfcDRy1ZWyss4myXeaz3AtsBJtajyGneqWGME8h7Wq5xEStFoGg2aHu47oWei"
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
