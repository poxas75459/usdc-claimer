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
    "5WFRSHiSoqVmRtbzXzQMrby3oWbaiEWkvLnZbtVQv5VracmzXo9ska81KAPP4jhpy1vx5VXTTpZC2PuLGykeHB1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cRmKSXJeKNRYHE47sixpXunjRS37hKQzYMUNEiU5Q4T8MjJk1HmNxyysyXzJThXqbR3bkpkV9i74gYfSifr3mjS",
  "key1": "31CBQ8S4AvHhHTcUTAKXMnpj5P4uwxvM26nigH9JA9kMMKnuTpJ8rg94JwWYBx6zKX3wQ9XaTz6mdz4haC8hFkmU",
  "key2": "5AD9iKRFaPKKvh2MRQg4jL6YhXua4x6BRbmMocc8we9cwncFgQBT3tL5n5f5efL8xCSMJspKHw5GbnyhZEb8qg5y",
  "key3": "46AYAJ8wHtnKiEt86kweRppo8Rdu8xnfFPhKjkfEbGXcLaP5uTmjvjUhmZxN2zuXojD3amhZckDtjo9UYur37zhw",
  "key4": "2fFsn6THBLGoYn3Jq2SxP4wBqbr1k1oR2G8gqmn9yLGKthAppSbyjebtjtZVNgrLLHeamB6Aea6XvGMpiamw28fm",
  "key5": "3BxMjSthgeBoPKDvSVGcm9ifzD1EMQHtNGywfKh6rULqe38SPDdKdgVVZ1LXWJB4qFXeYbj1RHhuKHmgDX8m55zV",
  "key6": "3fn7SLiuGdztp1pLzAaJXQxcihJgQLW94p3bqpxhAA6MF1BbjwM21ugJXQDhqVMv2soGcx9tCpPhRsvTVScsQA6y",
  "key7": "JDzR3JChDLUH7S3tKU2iGkESgozJVC3AzZxeKFXyCdVGscjKiKRvMGaBPGjTjjhWkxjKW7pRoVkommTnYZTDE2x",
  "key8": "4CwEfb1Dj55TC721jcmnTRd5sH5a3rmxZjaD7NhtLQfnPxtQXqZrwg8pAyjKQ9D896TP42wPkbSczNXGUQd9TdeC",
  "key9": "dJYwArdxLk84k2ju28561Ccm4eqvJmmHX3b51rcxaUXUAGRzeVt5b5DuLPYu3yLkfh5veGRoDBDmEhY1r7tstus",
  "key10": "mMtVLAjVCdymDerZ5qbNnLxYMxPcweYaHZNx6Bmng1cqCrbec6mKcUQpmrJcXDHmg7UqBiLLg7qoe8eRb49isG6",
  "key11": "2rNEbZyHBh4FsJKRqr35GERH5pRB4rgyzWjTsiVn1gJumHB2jipQtmMC1YQPoGgHpbWLT2U37RECz8x9aw9JTWMN",
  "key12": "2oQaStBLq8u8VHbvFEU1px9YGwBgtUqh6MfprNoGgvY95dWtxtpEqL8TRwSsyhUfzMchAezrHgq3cTneXZjxnuEZ",
  "key13": "2jsu6St8Xktub32iT4uMij62SNshpnt29wjVinADJZYCazUjDgoDpDi491AiTruhRVdq25Azr7aTK96g8ghqKvS4",
  "key14": "4V3nCnj8Uu2noYjgCvw3zxEZRZhTmeRqrL2T4Y5gdod4GQtaH4iyDfbC8hWBhVCeATsAiE6BVUHUFXsF2fDWhS5L",
  "key15": "kqN5QSFzhTmKtMawdf2ir2vL4XKkxsV7cxqJT1Cqv53S8U5dgByCS3Pahake4VstxEcFxqp8K4Wzz9FtdxBthpw",
  "key16": "4BsH71AmKWL3WC19fLWDYUFxkThW56rfah7qxY85cADuYqDVvmsPuhVxzokZrm5q9dDYm4GAhpjR1yDRpQXsxQQj",
  "key17": "5am4y3T1LtX5si3Crj4aECZsakF6AEqD9b2YPYQN5zok9X3UgiFK9uWek3tARAsBJ7g1LU1MmUdSzFF6wR1oLSUg",
  "key18": "3Udgdir5RXzMssGWN13YSgFX15E839tB3Akcr1tYPzEKDLWMQWNjvgN8PMb4Vg5PNamDSgRbQgXPstYTtT1szYZ4",
  "key19": "th9Hp4fRtfhVY8EqDDGTAmZy5UuPLBFrEHUxS4SMyYVLZkuAmNRvbAf3KAPXZyxwEiVtRTK12h79UrVU3eiWRYk",
  "key20": "5WQpV28axdC4YBx3fSx8jfEwQY7i18oZRMjmV4qAMJsHxcP9chVJKMGN1qQNzok2dpNXSXennL3fPSuMHzd471Ba",
  "key21": "5CG9zFBVELytvJmN9rpczCHeohx22KgbrcF3q7w5aSJURHgSd5hnwBYpYG3aDCCYjQkNr6UW1cRJqTaAVRkPxmbx",
  "key22": "2f4L7xbqFnW8kGtXSnSoyC1iZZQKt9LXJJPLphZdWqSbJ4pr7CEmyGXeUngNPKB8zNaSfPrTB7zbjbsz5b7UyGAg",
  "key23": "3h55mUq3gdnMKgYtJzQg84VHQyrLWQuektVpsg4SDf7m7cnUwDsXiNcbtFDQBiwtEngeiQYkwufbnL1UCWXNbq7",
  "key24": "2SN9zhHY2sFtNvRvLXCBgNvpBWcMtd8JC9WmRJgMyBBJxJaXJHrijzbU6Jx5vJdLnABkzYhCaiFNxR1h7HSgdpao",
  "key25": "3QpzxLT5LsQ1m6xcpbwmfUivAB8weNsueM8AGSnF1Fsimp6eQqVWyUmfdSTWeg4Y8MWsrXKduZCqabe2LvoKPKGp",
  "key26": "3Qopfvx3Z1S9nE1CWgYxUPVdukLyLM21xjpB9zwRUGLvnsLNcG7UJemWUpB4PxANCsxZjZhBmFBVS8D5RM5Cx9SW",
  "key27": "3VVrYsVQp3Qq7dL1JBqKwKfUBfmqKzFqfnF7xJX8ST7eC66Ape2JVbtmsiMfqZHpjjeazhJP4bisGoiFzZfyUvFD",
  "key28": "66DeDGLifzmhJNeoxBedUbxxsqb6yrJ54VTKD8tRJwzAzJRAUJ32gTRhLRNuv6mPwYA3VvkBe9DHNigACyFmVjy2",
  "key29": "2cg2PCDceBVu7ishbXtaU6spaKJ21W9oE4BLTB8yR9mNZXo3DbhCF7wp4hPiWEawympr29a1JsqfPJwHzPnLoAKq",
  "key30": "2qk9G544nWCzsoMS8kcqoPSTTvCWJJVm1afv8DXJAxZbPa5KGTnzjVrkMbRsnmzcpoBthbvAZQqZqxuzMEWgJYEY",
  "key31": "3GHDZecm2j6h19KUL8eTW3QgQ4c2ciAVrXZ6JpWLzvTbtxErfaL3TRVE8uSGPVGp2gXcd2F1pfjCjXGWCH89xyzn",
  "key32": "2EerihoUMcYm6gph8bQoYBNTuwfBDGaoQ4vgfUpGh8cVoRZMnk7BESkEW5j9fZS6CJkpBX6rD9roGtjcyGLQLYwn",
  "key33": "5AkJ9SvgXxU6wHz7SapciwHEBEnaTpGWPCyBfskRKgwirFDfeB9FqDWvCB5LKR396kEioRSnKwfRcDYMptUoSwZY",
  "key34": "3dYuEW7V7g9H83QSzmyGeidhDo5HrBBC41XGFDvd9nTnzjfr9qffgnD4SN66mf9GCqkmikGbwgmSUZXkz7esSyoR",
  "key35": "5VrW1BhaPNj2EqoNn6Q65dkU2y7q7Ec3ytTvWa7AwmJW7qUics55Jp1hgEVNodZnHTGn6GW9hohzLFCbsUNwyxyu",
  "key36": "UvZ4Jh1XoCxV95Zo8rR6kXwVJaeoH7UzcHuysMEnQAzN9YR9MgdCAaC94LeXdx429eBvWTn8X6juZ1mitCnAkXA",
  "key37": "5oc93ApJhBji9A3GYHdtFWQ5ew39GmkS51Z1N5Pe1t6ivK16RxrcXvFFC6XCyL9MpdiqrHXUbzrVo71dtFwjfxmT",
  "key38": "2tCHd4xT1cgtq9turoe8FE2aH7pkA21LDWdQqaYgBqn43KRwMATxoGNdRVCyiE5rQYJmYhnq4kjK19BpmaZcicLe",
  "key39": "53mzd49EaMiipggS51EXQGW3QbagKELg4VrhfGu5dJ8PpHZ2TCKSpaiGfejBDKERvBUgttvATmymeahSqNNnugs1",
  "key40": "kQfXoJa5NYVKz3te11rBA3Y5qSnGbBS2SLR1zfmS3HCnuuPR9UsGoPUuQzcgpKCyrW2EgTLV33oPxHFviyAi3rJ",
  "key41": "5ArLZLn2LEw74zXGzpnxHxnEKcQA4ACjpoH3vCZ4YkxtRJK4XQXfSoGQK4TXG1uVuyD8wGK88GRg1h9F9CHo84L9",
  "key42": "4A8eZKYRghmUkXdfbNhqoCM9p9hnjJEdrw3QXUgUGvaea7385Dz4cSDEvj2uxTHEnCF4tVNiNm5oGmzvVJPSUvQ4",
  "key43": "4nakcf95fz36bDT7yHwS812KEu1dqTQtpZQJjnRURbk91tL1YuxPE8yGGm5WN7qiMNX2pahMsrsxaXQKiQRc49AQ",
  "key44": "4zMhVP1S9pTkHRzwoHE8xTuh3cdZkpuHgrpe9MTbeNNHWTtr6yJtx7aPwzZb5E71TuWPdGMMJX9SqLqc5LUTc9QA",
  "key45": "2z93aQESMtaQutXh7DPJ2wWfH8iS4KweThRXsqz3dRrLFR4ycDQg4LQcTzYgUfrjQ96JZVcLWtgvMokjPotnurnD",
  "key46": "28FMQj7k7x457VuQuEvYF2jAGm1obRRGac2kpgnRbrN33Cp1cstkWHSxdXpjo4Q9VgvdwVaze2HyFXRQH2V2TsY2",
  "key47": "2N1JrRJuzSzExTWL9jRbRim8vDYUy2PLguhJvTn7osr9WaKagjvoLjtcyhNTi1rQoMQgVxkPtpowzdwuDrTsF7mD"
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
