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
    "3RD3TLCrHCDgJUK1rDsSPqwbzeJz7sZPj9z5TzATxftFpQeSeXuc82XDtCsKgpMKsSUu4np5gNRNQvvZLDJHfZKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WUn7JBjFHFSFF6wZHYgk2Y9cNbxQbGUWCXmjrAAqEkGYAPzNQ7EyhKRAmCHWGoxifhxuP6GvZKfBgYQsrqd2nGg",
  "key1": "22Y4cWuYxPi2uwoEzSGM8QCGADrVyZxV32fm9ajsaQcY8xv5DvdfE4xae6svLbWoN68u1cEpRLPVyGbjHg7aXab3",
  "key2": "5KHFWjCjcC7v8eRfGTZVcukaaCNA7aYjbmwzVdG1Y794CJeaFF4asRMPuQNYArUeNDQgEdQ79kW9otHTmEK8gZSu",
  "key3": "3uGTe8Xgy1ee6aTsSyTAGqp3vrCVDsLfs3r6zt4K4bW6CEV3cASyYGCNhh65R8VM5tp4WeWDvBm2wSmZAF3S6XmK",
  "key4": "UpRrHZJE6uossZAK4TqQrtigFFDS2cgkyRNxfU2AYfXsiGyNgGnNtvyGZ8qxbtA1orApU8DAjB8YFLUZ2LiYpS1",
  "key5": "66TiuJ3kffm8eysboMvrZixAZGSXinWL1Ss9yrzhNNA6Eb88nMcjSZokf8gXCgfjBwYfjN7jiU7Avmx3L5erp4JE",
  "key6": "3pGwKPjaamxmkCXK64Ux3jBiPKh4sXnJAmGXRATSkjAGsagmj9H9wJNJB7pJGb9hocj6j6mev9V2knCGWj1vGE2f",
  "key7": "GBhSqsgiAdngN6rRgB9v4QbstvMGGrQtLW5PMvAi2dM1dX5mZMigPm7hdLNm5PtDSnXANGGzVWZ8mnP6dULA9j4",
  "key8": "5irGk7efo1N52EUu67Bk863AnjWrJpJrXNbBNKQzo2rjN41KV9e9nt1gB9DC4PpoxFWjysUPBqoTm7oPjPkPKh7h",
  "key9": "65rB7WaTnjDiuX8YdzY6V52DRvAtDFxa1bSPZCkr691d6er3XWHx8vx11VtovobfucrXKUZnZf5bmSGFWAibnjM3",
  "key10": "KNQZbFubFxbwp5iwh9ZhHDJYrcZUyhxM4JxB4SN4oAdUxCKSb5k8yns9nqj9AEM1KskYJ6yQqHR7p3KHhRgt4o1",
  "key11": "3AjZBqqdHc1UwSSXubaV16b5NxMPZVrAmDP16JFdu7rdXj19ss2t6MexHB41PxXA71tWVMaYrAYhkRod8Dkbi5hP",
  "key12": "3JMCvG3D8Gtdn9ek774SrTZ6NTGf1ZoMb8r5nqwHAS5kRzhypp8eP8PnVkeaRWtZ2BqTyNfBRtt6o6zfpx6UW5Jy",
  "key13": "585F5STY4cah5CBHEwPi9D5jyiH96U3UnPnTRsbSo8DtgEvc3z3EyTe1yQjsZvvEif1dBsoKZhES1xzef1SuWPfm",
  "key14": "33Wc3xXDoKJh7MZ1s8qSiV1dWj6BCweoz1Nhbgvhu9cLU5c6XmYCpn1HTf6TmeC6Benjqf7SEGAQv415ZEe4BFEm",
  "key15": "5s4fE2hyuddGrKAniKj8cx9nFfKxoQ2rJU3rwipUjCTE6nveCrvPWYuV2Xxw3ynv6YFP39opUFLNhkZKAMDwYEa",
  "key16": "2fvmVo1HXZFx2mQDUrpE6nNdpoBuYcQ7uPiYNzCTAr3eoKkXNyqx4dhf6nA9BcYmXecZaiLqA9NtgxSzpx7SiZeL",
  "key17": "3LsL9sKpwkNswf1p2J14VHpP1Et7aFBEWgE1BK7Mc81Lrcb3XuZygS4eTxsaErooa5qvzFHD8r3D8DhZzSJ18Pnu",
  "key18": "2pMgaybhRfrT1c5zSjU3VJetPF5cH2nf5puWNKGQLLZFroboeHvQSWg2nWogfZLXBc4k4LzC1NU8QUUxCRwAnqVA",
  "key19": "5QKgqyCz9coTL2ckF8vyh5u6hQ27ZRyDeQkHkyXPq5sR7s5VktR2B9sxRBHcazCgYfQvTjEPDLr4HqT3zaxR6zF6",
  "key20": "yJreY34iPBXFxDKoiEEZz3o534sbrBvPf93XAphDubgTMYR6RfQjrETeF8LwWLwnFaHZHDk3BsfiL8kXJDahHY3",
  "key21": "4wpKXByzNGzXQt1SUouKdyVrDYve5vv93vmk7TvBrx85pgA9KuyABwi8iaYn5Ub72djsZJBUk6jMZSTuFRxTB8sJ",
  "key22": "3D17rmPSanx2Fjbt4guFQAoNxjp53DF6DtdcYxaiqjinnM58EDcVPmK84cEWLheFufovGPrVD1zQ1Jcrh6Tn9MnS",
  "key23": "3HkXaynWamstpFRsM7wL93PAhY4etvzdGKBBobdEhpLKMkGbgEE3QDDiUpFvoeWdJnpnN4KwShmYdqnuEMQyhpZT",
  "key24": "55VDKMD64Nzhhw17a21cjXN3UfAa4RFnRPxxjYuA9TjmzG7AcYQ8KgUdRFW3e6v4qRQaBKosGHgM6KxBj8YcosYy",
  "key25": "E8ueKrUTvr3Fqji14pACpgNLKT16WCpVmEZ9fz2bj21VSBQeYhmsGduPpGxLRVnM3x6tyPZf3RbhBWj1tK5x66H",
  "key26": "vfbDEfS7Yi2M6QG7EiTurfsAy5bQEDJ4MZiyNZSzJxmHFz19hM8Pi1pSHZewKwzVSiJ4owY96CtqiquL7SDPvVw",
  "key27": "3oyk7UucAgTqvevVCzyrGD2qE3Eh2m9myXJP8HdVaHdhaCwUKNn4i21vew6iJnfyH97J6RQg8RcwooDT6yjwwtZi",
  "key28": "5ozudfhJm6wMUzWrvq77hhLt4zeKQrPBvPJCNxcHRqHqSsC92bfCVFqNQS5h6xqszqGQGxQm33RzPGZoDELTPYia",
  "key29": "5VcLGZNviV5KjG986koLV2htJdvnU86hwdg8X5ZhUXnA8Kv4YHu2rgfvLgBQkeRP8zpT4eE29E8srXAewiYw7Z3e",
  "key30": "33Wt6S1eA3SEm8KHiBVKjuEPN7gBDso7A1GQ4sqfXxuPZPGxzcEqZs4DFeZjraQhxCPntRrbxmjPpFp9g1x2ST1P",
  "key31": "8Kgz3ygtXixq2Hmpdu8W8mjkjvgnm7CfZijyHYwngmi9sRW7d7Ufa8LejppgewLYM6c7ZnxiFWe4QMthnoExxg7",
  "key32": "3nevAP7Nr4tmRvvs1yWDV4sVoyQabwz8EMQwxCV9KPzg1zzFarrZofEFKnVd9pzSkf6ViFb5V5fDTzcJakukvjMV",
  "key33": "2R9P2VocBwzVzhDr2EdBkKyUZ1xnYEjS4MUQsuNMdfKg2n8SGs7A9UjD1fzTF3HRhmzhyaLfvMdp6GNVCW3GLKV1",
  "key34": "4kMzFVeXcj4AjsLVY9PAbwFf8KEBFVS9cMV268KTUhEPSRpmihQnt83raisfDWrUJonTkv4RTGuCE9ec5wQDGcbk",
  "key35": "261ULStvJB7ZVp9UESPLrmXi8LgfrgDcy1DmnQwGjYxKc5EH4e5TukDb3EyVjJcFg31CDV1Dde7g6KwQhwqhetez",
  "key36": "3AVD7iDv3eQtihJnGuwhiz7ELqZvhzLt8T3RzHnNWLXsC8B2Z43NwwnfNKQ9qhq2EoUybVhcxvJ21ASuPLm4Mf1X",
  "key37": "PPEgWEJz9pc3h4U6Yt5NLYVqYDvyEyjnj87NY3qa7Bn7Yj3oDNujnfjF8qQR36XqyBVNB9bKAyonVRVX3gwNAMs",
  "key38": "5NYSemMrAkxY9Vy8X9AAJ8WKwJLoPzigKvkrU3U86eHtmc8TNYJ4LofNkDpvVH2a8q2DNk3asKBC6R3rkTPLXeQL",
  "key39": "m8h3awS6kpdKL7eQEp1Nm3Z6nnttidYDwYnTq7Y4rWGvuD1ppMqdiP1tcCUVuMoGmrr9y8bFsJSBqRUuk9QMWPp",
  "key40": "3ktwzq81BfG6dPhCa5mTRe6z3mMK5wTMumK57MGyD9L8iDPZXtiqc1LCip1M75RD2a7EwNqJruqkdwK74o93Dy9o",
  "key41": "8NiLCSFyh2LGbrPRt92RxkRJMyvLdSe5nnZb3CxZDPZzGs8Nr4oKshNE4US85TWGh6zNNW2evdxxL9vzshssw4E",
  "key42": "4r791QKMEKbDoRRNojEY4ZEHa7sCKSMoKXgZ9wWhz5Rygo59QpzqPzYKcU3aQCPXamQgKAW1dQFAsLMyFEfkfiJJ",
  "key43": "3pfqXRqZmZCfvC7SH6mTe8LYUc44TdrPbwQQQtQP7csaFpgX1xaLn7ZGFfu54vuhPi5qL1xPhXf5Mxqg69mhcunC",
  "key44": "rE9aVEFSnZsUUbT8CFRUL861GJb4apCL7jiAxuZDh78tLzmS1orkUEk27j76uz1A2CdESpgHqi7RQWCgUHFzRjx",
  "key45": "5vnsy2LEegrHNevLPHWoyxJ2VcitLGEdCPysSTb8AnQjcaLSaho4zAZ6dx3yacXpvgPogT6YgFJMPtfsfUwZ86Dt",
  "key46": "3zPbDkR9zo6NnF5sfBwk9sSaG57GUFKMcSQ4gob7cx2cPZS1gpDou2gh2xNZFosJAYrFhHKd5475J1Pnz5K44uLq",
  "key47": "2NwsrctitaR54D5eW5Vv6cQBLi7CNDsjBjFmESr6samB1Cdv1aEyxYP6mcm9Mb3YbKhJLHqeCUnGcMVsoH2bHohX"
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
