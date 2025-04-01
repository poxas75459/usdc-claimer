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
    "5JmGH4eFrH6JV1x6NWi1CTHPxbxxaHFPtQuK2FsjEt8XAVm1Sfk6JeVboHTkDedmGqgT66YPn5KFcBEm5cHfPfPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ytH3wzTFVAazTfAZ89Yv88m5eAcFErMTrvCYiqXm9zWRugxUMZp53eQ2BEEbQJ3W5H39r6raWVbBtSMD8V9K8J4",
  "key1": "5aCxTBZQQeczoxY1e4dPjHt4burPF8wMqb3tE779n2gZrmj9G9pEjLaonHVxGaVNcZADZroaTC9uvkuQcHebRro1",
  "key2": "4ouquotgv6vTTU8nVb8fHCinNHrBXRcTESntuQGZnKfL8VSeHVkMJZUjBnfScDHybXw4Ty6pKvpvawLrpufYPGyK",
  "key3": "32MAkb2NrjQTWJ9PhMgbgMUzRuwLHbBMAVtC5YDcrrdZjffXCuy8LU3Pkb4fQH3oQPLJWdfmkchTpKjvckkwWc2A",
  "key4": "2gr5bWpWN9jsUJR1oG3agncTrXgrCJUB7BCnamFczWZP7dtCNfx1mSSESYfo87XjQL3c5zMzZXuMfTHhC9VerRpX",
  "key5": "5K8WL2cMvaM7BRJn5KdT1wnBYS5EQKMeGEo37yeNvpU8vftGYgNZxvJ8YPKV29HdwofQ5rdSgiQEsNLKuHwMbpPw",
  "key6": "2x12KzYwS9SbbcG2rP5RZAKftj8atKCTYnyMVyzZ7NStcdioE9h5DTkDfgcRLym8BJHmY96f4MM2vwF5LSrE6fd2",
  "key7": "2gwVWxC9QYpqCjMaB3PGLyVbGoQ7oW12vdLoAHWCkyfMMTyzvfRX9aMstpxnnqpWE5DcGP5DNE5orm7su7kcLxz8",
  "key8": "FDv6AqBmpKNzm9qxujriT2NyuN9vR7kRYGcai51ianVBQ8i3E8LjZ7FoGDT4ksufk4omfsgHBsGB7G54Zthten9",
  "key9": "481LxhMW5SVXHYBAZLdEAVcmQL4htCHf1GJPsQbDaQ1HNW3mF1o4UBqerti6XUa8dZ2Q6DRhcYNUWTphzKPuxipo",
  "key10": "4Wx8QUuPByB6jZJ4PUfzMgvXPhfHUZxGWbVtCyfAwmYyVKLsSdouYQm9miWCrjGF8XLYnw1srHnvmzW2FPgpwJPE",
  "key11": "3vPAYmL6hXbboiG5cHonMjzqL6W7hdJKav7zd5Rv4XRSo5ASTiAkEyBn32EY8b31ms4z4b1AWZrRPBDK3G7y1bKt",
  "key12": "4Xi3N5Hr2ESXPSp6aj8QP5f1zEK8Pbi9uCe4NAPKHMtFFKFd3N7rbFycFaM26qLkDxy4og2J1WwNBdsdMufUFPUM",
  "key13": "3msPjuZUHaks6FWErdLmVsefjnU1fZ6mk63Gr6cqrZP368ZFLGFw6JuBWCrqKciH12ws9AtQ1bx9VgQdBYq1Hw9B",
  "key14": "3TU1g5AvYm8TpbbX65P53SxajNb7ig9sCaRQViMREKdLeSixfEUqTEwonbNm9oLXqy7iHUnrov6tZUPKxqw34iVw",
  "key15": "NYuULW3AykU9jMhaxsWgrtdPVvatgZYcWoG8MScEMdk5Mvb7dfhSMNiRmYPcJbrAahfftMguRA8paNq1gx6Bupn",
  "key16": "36BeMFKHXUGeVeFJ8t2DpGjKH9eZWnokwyfvhhLykTT4GTf4YNN4Jh3QE1Lxw32A6pCbBE4CaosMXdUcgZ2UmDKn",
  "key17": "5S2drissQanNDB9yF1om9vruaxgyhCD52TUg5CAk2NhuBGYA9fBzPfmRuUjhFEk6cnFqUTo5ggZUL4XucppGCtv2",
  "key18": "3czFWr2D3K5CFz7gxu8uegL8NM5BjnbiP4Nyee5u37rM8Lx4mU194dsjeVjwNyBHGupWGdAhMCEV2LEJE4F2qqLM",
  "key19": "4LzrmnkyJcGzLJ1S6Kh66Y9qAB6xTTVtyzJpbKdXmZNKwSi2qXrLB2AWVXpSQPajqKwaJZufTm59JQK5G7PeCdBN",
  "key20": "E7NE57ZzWCMf4Ljs38fesyN2EDdp751HJVw3F26JCvBT4Xm9Z18UFJfKVtXoGGejFbN3EbBUYHQqtKFkaUNmhNx",
  "key21": "4A3BqCbn5kam2Z94zgSU7jC7aqSPvcxhZCtX54N88C95J39dw6RQc5ibN89qGywcU6KSu1S4YPgHL4asw1gzafa5",
  "key22": "5KgvGqbUqo2S6wRF15hb6gWAaKFpcxKESmb1LTLXo1aaxNT1pEYEeniJD6tsm9LuSYAQL8XT6FcGtZNZL5AuCzpt",
  "key23": "62tMim8mpqgUyERity3WFSXjycbdN9tYfTMDmzpLZzvuqk12DV3AqX2wCr8bd9oqSUzdeHQVJnoZCbh317npUbht",
  "key24": "52dM2KaA72fSGD8Uwkwrt4BRYU8CEQsi59wVvHejXKevRkM5EYcXwBJgjggU9mcnhMDKasZmMtaDt6xJZJs9Re1m",
  "key25": "5k5CrXtonfoeaa7Mb1DiJCfGUHjWEPqen7qCYn114CLKZtAZgR1KJJwB1FkbrubHVcLVVNhBNGDE1EhYTHSUUeUL",
  "key26": "129DcEeBizGokR8c4tdk2AVg4Tcow3DHfryMSJr6XuySskCXy2nXKb5iPz4QCJdnnH8UrRWx896yCGwSvkLXovAS",
  "key27": "62E5TSrNvSVgPNV4XBJGuGGouCLtwyvYoL95L6HzqNkR9h1vLkAM46nhPtdvL5XXnrqynZwVm2JjbnSVNtTwrHgx",
  "key28": "58AxeitqJQGmkfjT5EuLt5ZTWKmGrhHEWwH4AiaG4yqF13V4GdTMwUgGYGJTHa2c9HrGq3TSrQtr6Jk1CV6bbW3w",
  "key29": "39FHKxKTfLJjMf9Yk6txZz9UE23bN8KicKzwDQsPfQtLAaeehPVvct9nu4FSjmwLVfs3G5QbJFnnyZ1vwe7U5NMV",
  "key30": "C6MUMf6ZdyGyBZ4CCTrqdaW2gWR9hKEjQNvYEKSBT7KnXGu5K22qs6BdbHHBDujkJHPoYPwXF6LfWQEHk4iP6rd",
  "key31": "3fnGUWWR7PqB5i3zLUS7YyFYCgcThFdCozm8bgymQCmPNiCyZvdfFbbSRHE3cCwGUTViA4FVgtQY39CjSyjLtRjF",
  "key32": "2uwD29sZ4QD18n2eU86GUEiqGWAjCUL17b7om68HctYMk2V7vAR2H9ZdgfwFLy5ndeUFqUfBBN6DQYuY5NJNM3jt",
  "key33": "uF2cUxmnu6NvSbJJinhCNcbsTJxaqvLHjDN3kb1sRoisfvLaGSF4cqjuC4rGGt2MhDuE4hCk1qu4nouWigZt3jz",
  "key34": "v7vwLDKSDEH6Dhebo8YRYbMitFY8DDoGYCEXF5V4NdG7y6JQw1XezWRrYiDLNY7ud99AnSMPoNGCy26FvFpGnW1",
  "key35": "2BM7BUAvGXhdXxRuFpWpdj8fNJ8n1zhyhZai5KhVTWBXGLDPnnUrzYWXxHz8zs9bHgJTfA4rFPiTGK9eXNkaPpWJ",
  "key36": "4oYcYQFE7aFyek5SZ4QMU9shsDz1GubeADSNYYkBXdiTQXmPrALqRuNbFaNJgn6tdm7C4nFL2CoykXFruDkmroJx",
  "key37": "2PSWhVuAj1D5zvXtpD8joAP7rDsjMTxEPwGGtPDNRHqa8iV2u2WcvaFmDw57rtAQ3uh5ZqDuMYehzj5fua8GV6r4",
  "key38": "4jbwbNECwjDvvLiFR3aTYwu3wFyc2CqAUQLe4Lc8WHfYjzp3mSYHbZNVQYBVL3B8LdGCMFVC2MaWaDdRp8jvW1hD",
  "key39": "3FhDfRZr3tL7WDXr5ZKHhkBgMmogBbUtiZHkWQVmALVfUtHW8k2kX7DwYPXuFxT2QxLu5ECpJkZ3yP55JNPteuY6",
  "key40": "4X9opzHE4MdUQZdzFyR6nis3ATav3YWMcebJxkQFUWUbBQeSfEi5fJPUy98wvW824Jme7LekTtVP5VChfgJk9ene",
  "key41": "4ZLGnYBPgk1CJnKKcYoVbG2u2mJoPMKWYznhZB3ezmb6V8fc4SgSsKTPNd4LHCqZx4YcgxeohVV2CB5Jh8S3jvfb",
  "key42": "EP8B9WXnCwKVHSuv8YbhPhaf8KxzQmvsPboL87Z6Zwfjare5WXagF8T2kf7gY72iTRJwQYQY9ttbjW2gHhEAPXZ",
  "key43": "2Hw9DLzgn2nxyXduWiB7SxRVPvnhmn9W6vCp3Zk2XMTfDZhwJgXxVkTy7m7NhpRQmsZhUK7CyfWN3Sff2uemkHuq",
  "key44": "3z1SsnRgfoRbiJu8xGeb79TneZiFc7z1RQCY1F6t27xQnNYwtne4xsRW6n2KDorAwUHtRWRTDBA4WK254zyzXN5i",
  "key45": "4GzcFdvmK8QjKred25rJJb1ZkFhGHNMGq6EpgG33CTC58PM9pHAwbYciezuGdsbGi7M7fzzUg4K6hww5JDxJRnEw",
  "key46": "4auFyCFrCFyyHRHrtuPkjv5875kRY81MrWRfBy7NDbBEUwbEvidyRgMw5QuxpkRgR4YvFPt77TtPi2zUYXivvUzM",
  "key47": "5oapHWNvwXgvP47VcAe54eGQ3XDRZPinRjnNSqwiaWu9D6r3WFHNxbyKXshywv2ZDbRRQRL51P3SfDsZcsPSMfLS"
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
