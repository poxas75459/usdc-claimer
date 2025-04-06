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
    "2gfmZBpftbvTsvVcWbuY3BamkaNpyLAmkakMqCPu2jzP1b6pKA9bZgxUdUwiZdLqvxYK1KcnWZVgbYpTLZRioxnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iA7vjKbn1LhqHuQcCqnRsbAhq5ZDsed4iKizXtjzVaQLZ7HPvxnEdbwTbWkeE6861m8fi8BvPEhshx5gicSy6LU",
  "key1": "35VGPXHuDDeGwZJraLo8ZeAtHkQ2PWZngMmoK2Yn4nVmzHr2cfwZ2N2445YPzbEexHFMuGH89zvTrHhHJjyCHj2v",
  "key2": "5DAaSLP1XqJofMNm3LxLg3nyHvRQ62eQpZpZSLXGaPCDaxMpVpkc17s1TCoSPqhczdZNHpbFzfWEX2N6T4ngZ2v7",
  "key3": "331VKzx7HUJf3yZjLyFjABEBnA6mxHSSkh9MssaYPwUs5XaruRThi26cdXqewdt9YBDMNy28jnCx7XfA6gQLG8xm",
  "key4": "3zDbvnJZg49XFuDdhmseLbsJS7rKqb3pd5aZwvp1KNzzwefu2h6u8HC3Aa9FMnCQ3dT7kzRy6rNDfFuCAUo9a8zD",
  "key5": "562HWfq1MEMYqscA2JCGGE3wgFSLegZPZNDA7TPgtjc5kSMPuTHfJ1WfuzNKyyLvk5nzxDEMVtYpWTYw91EXy3ue",
  "key6": "4jutCa3wKNMcB7jCBUvLdZoWB71xhRqxhFFRDshcg9J8yX1GysW6WWtJVwTLxRecXhQoWkWXeTY8QMPEBVf6f4Tn",
  "key7": "5gb5ZpmeMu9fbKzFGA67r8GPibP1RQuHTgZ4HRJgmwv3FcHB3qRyA1MZofkjVcjxRMc7fMjavVbLabkhvLiHLuDH",
  "key8": "4cbbkao46kT8WJYQYCZwYtfnN1i7tTQPo5yXvLKbS6pcUDrZLKyjHDbL1CqXi3mSEU6ohA3yV6iE7Fqqz3gDFFMP",
  "key9": "2uLg2mKdA1xpDtKRmXs1xbvppZCkzQfMguHSmz6FHnFxDAqs6uBkfHoqo11SgRB81kwA6SRTxeHRoEiCVFQeMitx",
  "key10": "3SqenuuPwn1k2xDRFan2cMqfETvCQYdHC83oH39eCPzioAhBtyez9AhQJNCEEvUvErXHBxDS54vk2e2L5GSeLnMx",
  "key11": "2wGp3gnGRdZRekjnxdzQyeBWQz2EcLXARe7cF4MfcNoG53GDfi47iLKXs1X7tL6AV7UzdYdhNfk2rUM8uTgm8CNF",
  "key12": "5DQ5ki1t5hSg5J5dLGDqmE91k2yhQcUuvVBRGETvYD6RnMXs38QuDu4Nr4nEEHrKD74DrKcZmcmWMeeRmz5hBYmY",
  "key13": "2aMUPJ3mfUKTQ64aAJUCQ4RpKjPyvXbPDrruWghegTmkRuUH4L3dfz8GfeJUpR5p5iEiFj56uBPrDhoyQuup6Bzh",
  "key14": "5QSeZSgLAeUKYS7CLanms4Q4nwRXwEeR368gpqqnvJFQjKtHFzCEbRMXzvkwSt7zhnt5iHddre4A8nG4hf1wYwUp",
  "key15": "3itwfa6WpJqXCWFjQ4vsYbLVGTXeyjktCjfpDPK4kU1hAAGE7nSWb5qZVX4Mkogo3KV1EDE7Sa2xxQUFVkqpZVn1",
  "key16": "4xyRSVCDpGh5SqPPQdN3pQ3v1L1m6FddiCYoQzCJHmZLL2uE4HG18todonYdz47VAisX44JcxcgWfVvs9EPbAjGf",
  "key17": "3Hwb4ArAQtKoa7MheWRb8Fy1ugETzgF3QqvuhMhHR4pxwWRZ7a1b7ere6j2ehVS2FtX7w7pmVRQAB4SiHQdpgog",
  "key18": "QFmshuzzuwMB43296BbVEHWtHCjzRjhSZavWGcQ5HPABkUnLce4Fruc2yJKBQn9xCqWfU6CJyXdxTR8HCqyZtHZ",
  "key19": "43dbMjnFKGu3c39cuRpvdPCxjYpYSfkTyo9vcr79cbMEaf9YS2CmMU8GdzXBaJZpfChHwWy7GUS9J4rjwgyDW5jv",
  "key20": "64zQvj8N2DKo3FjS42LEdkvioZ6xGu1RqeqxzpxHVZgxCqk1em7DA4LYego6yyqPBf4SGPJMaECorx3ADZNr1UnN",
  "key21": "3Z2gEDPYf5fYEiWjFkoLhML47cNL82fsRDjCXGNzXiwvJN4rmvSk5ooM3WedjxNiS6VfX61UsURmCBU6ds7Lps7J",
  "key22": "orSVGWZGRjys6q5vXcocTTf71KYk7nHP94pq8TBt8dD2sWea9ynDt1qe5fLdVAG2hf6LESvbnX7niSputsVS4V4",
  "key23": "Npf7tJhn7tNM5zaT2EixsJJtaKuzTiqTrrsWmNiKCpYnXYkvj73sxYLZYcAK4RgD6XATTKL1nhWhTNJvVrbHfnd",
  "key24": "3T1x5tcS32YYsNGWvQonYfgv8R2BTUN4CKXKAtZQTPMvw246ssGGaiwN5X844vGNYZt1GkgRF9rDzCTFcyzW3kCt",
  "key25": "3EotpB7tMZx1aMeQKWbU7BMq3WFBf9wFQhzznLXqw2bpLtY6cfCJ7iEok9XFtemJNsmYMH48FLGf4p7Nd2pwimSE",
  "key26": "ho9oFcaYXmYP73N6zqkyGGypwAiPfboCCVfGJW62cpBDAAbXi1ufVBycbqadBPmMHLvAv9Rq77L4YpbUy3Vvf5n",
  "key27": "4L1UjQrb2CbPa9zKaorPLYpmghv2wS1RCe1oorGJwqDpMi6XmAbxkQxDguabrnnYPSZ7iutuSoiBWpcKZqnQtFMk",
  "key28": "4BK39r7XZCxcqWRYr2CXrwACseECMEtNJ4o6CQGsp2SkW38teBtUrGLufSZukarUKQMB1gMeTbKho9QVtDEMdbfJ",
  "key29": "62h2GHCiEVeMzR2P9qRRSR9qXHuB7RJqJ59UaD82B3NYfzsUbMqyUTwxfYnxB5aRztaX5wb9RQjFEdKUuQtLhZ5b",
  "key30": "5q4DQxTwbqEtqBf8Et1dwREchegeiqg3QKL3KH3g7zxzN9HLbXpY7ULHEyLuA8ckpBEFeeWLBrUhf2AZx4TWvYQk",
  "key31": "66KHpvSc9a7QcnreyAK7msseNxBzKniLcQgidK9cn6JZbmYETqfYQHP6WXJHFU5GgqFC5t6qtRtc5FJhbdYMXfRG",
  "key32": "2d6FQrAhhdcu4J9kY6vCXzPMYLo8QKG6kJM41GmaqeCRTChESfnxDr1ZXwpN9BRzBPUc4JMQLAvZWWnjGNng1gte",
  "key33": "4HJDb3iZxQMhd3TkgrNYTJZWkT5hcRF2DB6Z3waQCTUTKYoUi2h5sFH68m9uBij2F9Qz2QxVn4WHZ4dNiTyXjwkR",
  "key34": "7ZbxNWd7rbcDX1kzResdWbKJMdG3bZyi9wsoSY1btTLTHowhNz9rGceveY7KZBTmPDie7SVM71n4domwWL8natL",
  "key35": "d11B5UAfg3k8kVQFQbCow5gLmtA81mgTjn2H3hyBtTXHgcKLmKbHVXn9riVb3gtbzo8JiPQSckQdxrm5sdSPzsL",
  "key36": "pisbyxw5dtwHtGQBYEgHufy5wNeFtQ8unpyzVYVj7qrZuNu3AxAFEDhgdg8r9dhyVJycLHDUixavNJjPYYzcVSR",
  "key37": "3n3oFd77eL7S1E8uDCT6MfJFXaCqZAdnxFoAZDPs4RT3C8Q3JYkumzWCL8TtJH5hrjeNWXGkQrUvTJUcnJ1KGDY2",
  "key38": "42Pg3LYZhRc5E2ECwAoGZsFiCGM3F9TpdfmEf4z1oDKmsLM41TdP4pwyjk39Lx4nC3o3VncBKQdwUiJe4WpxHkFD",
  "key39": "3q9Y524qzBCYDCXKvxbgMhPZeF7AeU4miKXDrHAKKY5yq8KvSNjVaH8QaAo4n2E7mawNNFfMCLqtaejBhFyXa7qf",
  "key40": "XZpBg172btmNrt4eZw8MJmk7MqbqKQbHxHBsX4pdUDZP7xB5xm6hHMQfE9Ef5Ckw87KW7FkNWHAy7WB3opueEs7",
  "key41": "vFtHcTMwvBzXPz4aie1SWvmw7dvv1XCjdt6TWQ5e1vGpzQ37gBnqHbys6SZ7MssGvieQ9bNJpW9vJjfa86rKfTp",
  "key42": "2DTrBvhJEV2Su62mTnyXfStoEEdBKdUuEVmeefNcu3JBg8eQKoKqFdu7Mp7BwteC83BvKZpSgBh7gVpCzKNrmPbb",
  "key43": "5TZNyAr71xrzARvQdTBreYY1vBweJHKicZGFWMPr69KE9T68MhfNGERRVfyAV79DsAtTHNwCc3w8T7ci8AWuZuKB",
  "key44": "5KkqHaMET829bb7osKkiNpyJo9CmEYC5M5f99yKNrrjPiZcdshqLTLpHfh4egDosLnc96mtv2sg2zJjEt1ge3DcW",
  "key45": "5FtyQxgRxYGANNaHiQTkmj6m2pPKkLXY8iGV5RgURrAtooJBS9AP6u92eTqt2kpGJJgkMvHugdUK59QECzmCFDBE"
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
