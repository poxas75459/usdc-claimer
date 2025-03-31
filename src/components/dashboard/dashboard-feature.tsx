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
    "2DNtsHdwRv5EjCTo3XqzfE4VVqScTsfBm4g6xhGZ9kBzbfrBojuKPz3uT45ERAPammFj2GhfB4Cpgijg4iVLHP8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32X8MZdwJtaKx97CGrR2M8R2Uiq7eGiyBgJUBEYQcTUBnX6pP4aigRFSPjRhxwc9U2DBoadUZXFXc6m5CWRxdWQ",
  "key1": "wyTqiGLw5sL5EXJ7UgJDKzv9R5njKo9NKpxpwauHNm4KeRBodj8stSZmdkWW3SaNuPzwoD4tnQRGFgxzRMM7k1q",
  "key2": "47Zq9hXmZ5NNaN5CcBvuLfbDJzNF5H4FkxwMoWg9bndMP5BWscT1UuQsDuB6U1v5cSpfSzWBrCB8UJKK8u93XqkZ",
  "key3": "5b2cjCcQBcn2bVGQzeEH8DmucMp6upxHzjfGa8D4krU95cheRTyq4m2sth9GXsMn8oRJgvHyxR3n3wSiS5CcRnoG",
  "key4": "3ZNuz1Q66Gzv9ZmLscCtEHzfrRvpoDqH7mnUGRVj8NhcGLVoTsACsbvoY1ioGTWHjvaijrv7KKVrygtSk1VUwwKt",
  "key5": "3NkVZGGcx4MJ989ZEF9mD2eHfgnC32c5YDtWxmFP4fEy3chsP4q5TK2xYr5mHa4anjHfZBoSMd6sQyaqW7WjucR5",
  "key6": "3bfUtUtykb8R7wi7FECJkBMpemuRpW7UV3yjgPmS3e2Fkwh3MNp4Bwygaai5YAD1cTqiDt3rKDsZ1jAptFfyscSd",
  "key7": "46kXB7sbLkQ5WNopdxLoqNjXkZio48nzGqfqBsaSNHjWVLBLuPHgmNiKzhp45ZUpsvmw8RLvVYEhWHgzhMjc7awH",
  "key8": "28yCrNiH6LooF1gXbLMrcBAAFFfh1ecdNWkFiPu9vHMoq9MY9But9wYHXxqqsAbyfS3LtQHpA97ngyCJHq6n53mw",
  "key9": "3ZhBunBjVh3x6124jATqwU2r7JvbyoudzwX7oJwdaWdiroQhWFRH7GdyPdur3ZdZ66E1QMPdegZpwoaB5a5hyfzq",
  "key10": "3TKvyquGpc8DkbXjbARPwuwUoftrGCQDyWZpg7GcPjPVjPjf4qjn8xChM4Mnx5aLwKCu7Hqq26ZCzLHnDmKyGQi",
  "key11": "4pe8Hpx9sbW5KkcCyKWTvjFZzG962DPTqcGsUq2FcT3EdahQGvvmZC3rpt2g5PEairHumMghjNKRCLh3onZMJb7i",
  "key12": "2iNyvqcC6BTFRRXcqmrfLRrbwQC4oerbisJdrJ9TE16ernfwoZVkJqHcfpk76GgSbJCyT5q2MfKyZUQrNYGgFpMf",
  "key13": "2KVm99yoDEMED4eMrwEBAjWww9nKL2A8RZc58Ug6ozuMCAS2GCg9BFHCnCVmnijMU3p3RbPBWz6QRqYdoiG42mM8",
  "key14": "46kj1P2tX1ffnp3Kj57jmkpHBynUwMvwysprzJkJVnSXAk133qCju9vJpPPTbX9MteMZrzjxG5RF2ATYjRjR23NW",
  "key15": "7AGnnQMjBnGQF746upwD3xbfvCpWLTjnFHYHfLkCWAgPnfZsXB3cPGVJiWRv2xkvMmVxtjfQJMgpd54uYAqSf9Z",
  "key16": "3xXJrvdJwsLndH3aZirJV73BHqnDMAWXR47G7mcWGFhMjPWNiPsYqVg3k7b8ZN3bGLVAnTnyyTr3xDWL6VnrNZPk",
  "key17": "4BbPNYFBR5WiLjxzAnXcCcoVf6SJqiu2JJoRgwVgdyWTvqSE4HTxnYe4f1fvsaycm1yFbsTUJ78imoBQ7PP4mA5M",
  "key18": "2Vh7vGuTPXPcFK4exu37HoYCTP6VHxf1RQgs25HoLTDerTCY89PBA7QNpAwzdzSvwZgQRfDYTSce3jWjyAsECP88",
  "key19": "5HmkeizdU1nNueKytpdvboEGymPLfxXiYP77PabTp8mNqE5agMb8KvqB3ym623rbHbptmDwTELssinEtFUX1UZuV",
  "key20": "B34ni1i8Jxny75gQb1b6Q1HAE61RXcckzfbSUsLhcbAQ3dbvr5rjhahbfCCkciqTCzJMVua6RwApcLopxbLX7bE",
  "key21": "2GM3egAi2zATRJ2FZhefr5bKaW8o9pmnZSGpZjcQBJZwAXq7SiWJDP2rvpp6aamHFTCiXGFpbGhd3xTNzH9UMwmw",
  "key22": "Woc8oVz95AFU3opM61Z6dxRVKqVkD6pJ3Yq9e9Gh2Zk6D2sFPcsGb7RyEaTS3vDS8nBLVjwtB17B1VEeQr8qp8r",
  "key23": "4rNrYhnUCVyLX4o8Yrdg9pFMSC7h2BHG6xiSCFwPXkkmU7p7Cyt4i3rn83GenEXHWsxAmzMGZdHVUxL5bdKZ7rKv",
  "key24": "5quqUyFNvv8K227i5D3wifkvKPwhphWsdixY6gNZ1FfYwvYefM38XxebqXF82GJ44SxsKHSj9h3QFLh16itJYEK7",
  "key25": "VMN87isM2zybijntRbaWGdTsMbFyFPoeM3bwEDvZDNpsd5F8EGJVjSKnkLa5b28zNW7CQjWPiqdNDhDEmd7gMFh",
  "key26": "4iPf9Bv2umDSFpUseyCFqAnDAEtbJfq2PKJACUzX5caGXAJeM2evJwDxthDF9SniFnv1EqRg3jSyUQ9U5tbDbuKf",
  "key27": "5s67dMajdg4RDhbi2fShqcRCt1Jai9h2bop61AMBnVC2qMV4PEAnNki2QFuJSryMUyUhsvrtpG3RBP3tUWQqEh5T",
  "key28": "4jzy9vDUPyTgqB8CLnDgUp4qs7UxeSDzTrTHs7wTPEcFvRt4qisM4ihDTRSEFJosekqeE7KiX7CSqk4iXiZV4SJ2",
  "key29": "4gztohNvFZX92PGQetR9UGkDPmaD7DEeFTeGfehareLYQrYTJYDdQzLEEQiKJeufnGqLKw7b1Bmcha3xLqbnoPEB",
  "key30": "65S2WFUf2bUxn66SL7nR18WHT7wYVAcHe84Q9LSeUUBZUCtUxeARACzpvJJdBJPgcTv3WtwNaW95rwxiUsHVyP9D",
  "key31": "3qPQnZKd63LN8LJJogHNagjnCrYHcALoEvskrGjcrKgdRfXu55RoxUtPsXo6o8hw7YtjaSEnBSHA33cayb2q5z7s",
  "key32": "4ZrCoydWZM6fcYRw2nJ87RTQRyWHiw6L19DSWA7BLxbvu1Lb2ssm9V2VjMrqsCCshDnV77CUngznxUQorGmE8HHn",
  "key33": "3foZCaNQ5rWXS1GRDmdhuyoggvZ1Wj6p7zfFWpUt1KtT5kcxoVzvzBv9R4jRT3f6vtQDDEg4chychjftfD3o4EMN",
  "key34": "2WZxwpbes6QzCctrm5fjDnsK8jPKbCvf5RGhYngdEnYncb4sD97isjw2fSkoew3snc4MqMmG16RdDSHDk9VxHrme",
  "key35": "2QJDtt4kRLVHirAZKrVSpdhNn9qedJTja2HVCYL3Dv91supK7gTr45o7HZuYZDCVKqrsZLsq7qc5phGF4cjR5CfM",
  "key36": "5ggkfuMdNfbzv8Nnvpb3mJMBpCVT6qna1R5tiTcaeujMFoLXwhbkWLXgFutPqpLoBB5G9YZfu8NhGELrBzNyUUc7",
  "key37": "5mY5hLhV16N7BBH5ChJRqCa47MWRwtSS4Pxn4zobMq65vGJ1UhmZEeUqhdJaKLAVhMU3bXaKTHE5sHqE9Lm3H9R6",
  "key38": "3tkK5mwFUr1CsoFRgfedE2LLmDadBpYt2WAoZxJugPHeQBpoKdWn2m5MKTXHLLkj5ui1s615LoRCSDVA5jH9Wbsj",
  "key39": "2HFjoSj42WMni5KLjciimGwmPF4umqChmfaAsCcyL7aQTEPgUpyCpsi5LpoeXXKEzZQ93LG1emizx5EBTvZ2HNBM",
  "key40": "5N3YFEweBGVbRNguYCK3C98NNcDvyELbzc6QtwKBSwtk5w1cBpufBpSUyUkHMNQgTh76tXGvRoUZMKWjDJULNd5x"
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
