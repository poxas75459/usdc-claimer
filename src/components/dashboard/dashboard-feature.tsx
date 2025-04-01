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
    "2dynZWvgqLAqT9tjBYM8Wpq8qqCbAENkpiVBCQHQ2QCwGVZ9JzKA8MhXn3fCHr3JDApHEkVN5HsMQmWtkiTt44Qs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2csLs1A742Sj8UGPHPw7vZB8nzzdRUyAZN42yESpe7bDXE8RRwJgbAGkZEDCyaMG56swaWRfMbnWnsTv23fE1Eo3",
  "key1": "45cjAWgzRam2e1BjwYgppuNTaBcqAi983wTo5mWqMSdmUMVasXYmJfCu7ewUrxCZzcPDEXujjzvKqyurwQ9vTftU",
  "key2": "4cbujuYYNgsM7mMABUtFvZ7YUKDGKQpeC2Jg1z8DQfLUgfeE8qkNv7g6pGLiZFTSnD5octjfHAKniDKJ4LYMbGTM",
  "key3": "3mysq7ruLcZmUmc6gJqwxVa7r9FLGCEKk3dj83vNGg5dwWpgAFTofEmi9s3F9XtL6CmJ3PTpPycNcLJeLraaFGEK",
  "key4": "yMjST1rckuYRGFeZiYnjgPYEbMYmX6Q9e7XtKDg6ZfhLcCJkCM7cpPtj4WyN3NbKQTDXwAd7NJxdjPhYFJmHse8",
  "key5": "5h75uBAuuA9cKsD7SWwvN526RGi1aQfj57nDX8PYe5i3U62e5qgYV4ku2owYZ4RQiDvJYqgvPETAc7yCGdC9fHot",
  "key6": "qWMrmW8nt9ZTH7RSEXwSgn9HpRJFjoa2h7xYQrTeVGVWVNpiEx3dsa3tbBsspWD5eFe4hbTcmFiqNPTuUKqzPyq",
  "key7": "4bp5L7UsjoHPow16wtzsu9sSP4zQRrALUzd3CLwqFm1EgiGGT4BWmycmk6jV5dNRYpfKfjkMxvF7jFogpPyhs6td",
  "key8": "3cFqePTxDNhDB47VM9k19vuQK4fmBbJruVBbjBWb5VE8j2x5HHkE3f1wf7aUjyk4gn1n5AX4UKT8jaAigcknoTGP",
  "key9": "3acctosWuf3rP2dwrDBCM11yhLuM8pbntr91d72Bfe2Ji9tmKBdQTAj4GXbiXG27b6vYqLXZqT9PFhthfBWDoPqx",
  "key10": "4vXpnFB2gvEMwfKoX8ctgkp1tezxDR7poq4scNaQGiw1M8kGuLbETtHbwqbuWz5KqSFxgxhuxme4isKyYSPUvn4U",
  "key11": "22DxHmiVo2kdwoj8JHqN8PRe2TLDxxheYAGfTHHqrD36yHmX85wiPjPwpZN4VhDkh4Qw53cghLUsYveCjFYY8gWa",
  "key12": "3RbhvHmBXf3csuUYPgyRbscebVz6YG8KgdbLW8emqC3RhrsjeUSUkDAqpQTRcWtY7wUHpdVY5y2WTEmXk4TcMQDj",
  "key13": "2M8xm4xUSPVGYZcXzhE26qkWug3NiYSok4t2JEa7rGZ7Q6Bwar1ung4zBbUmopjVZ46h4ekcTd7mWQ8M3pHqCZF2",
  "key14": "2yN4V2eaDMqYZYJUvsC38KjENMtMUV8owr6JQV9xWbDNEePr75zrqUZchocNzkVB8fHjTQsgQSMiW69iLbPYTjD3",
  "key15": "4sSXDtoxnnQtrWr2r6GEnw3qpWVd1TyNNcxsg6z5m8X6wEumbn57JRXVyoR94ssdgLqYMsKiedq3DriDFqCRU3k8",
  "key16": "2jSKUoi7n38exCEBZjQ6zSLzFMg8ZbtomXbdGJeU9oCXq2mxgxuMzv6wB6iiQYx2eeRmrin12rYtaZTzkXfPe9fB",
  "key17": "n6BCG6wZFfu3e4vD7ETqTTCYMTNHjbaFaVALpyEYEuVYMmGas6fD5iCmQe6S7nfUy137DQGNgxYYaAAQubbm5QX",
  "key18": "2tQHvKo2nrD21npAwgFVvikfRPfT3dfpYAS5oERXPTzKGkiMJv3ZKjZCv5ez9xgb5ttN5GeHZoo1BmRDBQCUgZGJ",
  "key19": "4xydAkauuWJYw44GrMrNS9vpoJJ7wSDMY6xtB4RQVspJPSbRKFtjQKa3J4ArX6dwATroQuGhYu7dqGjxAdx3F5bi",
  "key20": "2PZHLEr7omHsRgXs2fFBSZfXx5VJPVLjcpub4AFtw2dnM2akD3RKP7HgCPdrkvgMao4u8XS9puY4EFifWLo7mDjn",
  "key21": "3VmNBNUMGExK54tgXLN8122CHNU2kbvXPww9HjiL9TzQPj6zkC6CUbryPopHhtJiXQUmAxYrNTwQUqgDiWLPoWTW",
  "key22": "u4aKyMiXeuoQAYDpUTTpcXbD8xH6QcWFAaabrHvdcZWcgjSj4isxMN82nKVrTbWY4cUd63Wf87syZshs3DAejmi",
  "key23": "4DZrwGKwzT9ap1G5Dv8SWuVU8nTFrFDxbNypinpjgu6YrmjXQmCQcBdmKjG8e8VNmYLauPZyNhp47h7HdxS5ma89",
  "key24": "2KP6rJvxMcegXADaV3YjrQ5DhUmxvF3yw6pFeXUuxF63RNWqkqTZmUSMi3jBkmBRmxTew3e1awx8R3LbPihr9oQE",
  "key25": "nnTQDnPvGP9yRWQ46ZN1nbTZ1ac16JSRzdDsZ9xjwR78bVTqcLrUT49zfjiPCmqVgZyWHS6nDw9WcinZuaRJD9E",
  "key26": "5E7PAq34ak5XUyFPhLPYvvXis5aFjYdpobMcCcqA5CR2XPkmV4XZPKqH9EjsHEoUiY2pEJx6djsVAhBw7yQebVmB",
  "key27": "4VR45bnTnoxrde5dBqRc7hvT4L2DkGyPMoA1V7xYYKWyrHXdX6Qgx2WfDmSgd11VFZEaJZpxTuJK2BhT6F9ZeoZH",
  "key28": "55QXgepaYLcrrq1cFxN5WhXpVG9ixXz7wE723wBe7hrgEny4NytNqbWaLKbCXLZjTxrLbGEKuiEjpoMzZhZV1fPN",
  "key29": "4CdvNfGnyMPCyF8oty7am515pp96ZPhNcswbFucb9PxUA2x5eZDhZJAtdir58SDkPf1AAGj22DshMWFJWw3k7qSB",
  "key30": "3P6AnS4VLgf9D4AEetfzv8SQfWD4rCz4CH4WnYVxMvU8chNdZTbMQBSdd3zSTMwZcwqZFJWieJ2uzvGcP8FHMLh7",
  "key31": "5fzv9KyZRvErckbQeZiPw1zaf1FHjofJQWDTwHg79QmdUhTL751rUYekv7CMNKZM5rFp7aKePxVnW5CfFpfCHYHe",
  "key32": "WFKsxEGvfeovENeAXmxZMQBBinFGmFBq25VYMiWxQM9D9C6FsUvReZC4aSVjHXX9FozyZDyWjmMcM7UUCRbPfds",
  "key33": "xiod9suMwTK6FAKPjJCzCawbw3i8Fcsij44N3gQdyuuGLqJhJPMEGQstXVbAWCFj9xcqtWp6eKkTAQn2WmPJKAK",
  "key34": "5CSRrFfb4g7JQvvLQhpDaPDRmqXMxNR2HaQt2xEWA8KMRRrxp9vVuzK3HvFQxogCMDVdzwDqyfwH66gXkecjPfcq",
  "key35": "5bmLK2VRQcrSAVae8GTxaR9jwa4qGq7sRb5ptTYqTc7rGqzHw7mak4i4pbS3cYcFx3kpMZJsdXfDWz1zhAwRsQFn",
  "key36": "4KMmy7swnPEBHFA3o4ubAfbXFE5aT5oxXf3i1YwqgB74cM2HGUSZPoqsRZgX9JgnbKwwKeNQyrGKKLnFTrVZL33P",
  "key37": "3SKnwWv95rWaxkmpvWamWFfqkAExkcxqSg6ycG7kB5uRp7XMa8rzEF7g5agfMNxoHdNNFrK7qn1gATnCXXdr6pRT",
  "key38": "4mf9bpLJgPeyb3HgUBdH2wzJoSpjS9NXCm2jg4iBruVxT6dTzYwrxWfKQunH4iCUGthxhTFm6Q91HLZDxxcz8uwH",
  "key39": "vAFftv4uQbHvTGdDTFxn4SMVeX59oetnBkxWusZxnwdjbkmZuqW41FVp4UTXiEk3xjDQVHiwvKaGiMGkwddmYcC",
  "key40": "281W4cLDp1e3pBk8YMckTgReqT3X4ZkFPLRyUpNxGvFFsZLiYTAbYvFJ1nQbhf3hEgbSUMgK2zsVU8zhdrceQoFj",
  "key41": "4Acu93ph8JvHA4DGyKm1iCdfs8V1b2C5ecDrPn7YaiAftRXet38p77GPjJHF4h4y3kt9XiTiT6THyqybqgYdcQa4",
  "key42": "3JU56zhKsmKjtXURNauY3WfM9LdroLfzKkZtLmTxbuR6LcEyJjnoXv3WuMuEZivrU1vsgKRZcc4C2dMK7ADJjDVq"
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
