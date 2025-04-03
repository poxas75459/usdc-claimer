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
    "4ugFXLbHaCjTmwtp9vsrZnyfX18nA9rakNLYXgbVtiKEP8PBYzQrXeriZ3BEKn7Q7TUsyusDCEw52M5aeqKBogS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54xzn1a5b4kutNUBMztzW2L97APyknGLgEiisPgnLWRkWNUkyeGxiHMFopwa5gYbsuDdCm52GazzVoMutg29tdpL",
  "key1": "5gdzjm3s9jK31yqVWTQkQDK3Luf5rd8hf6NHSwPtq7NcPgnbemxybHH2swfVxnsYqmFMBSFTn5kegMjQPkjJTAm6",
  "key2": "yUSUQGFAiRYGaDXGAjHFFDhfS3r6n9ng6Xoyui8Fnmki9vqJDLVtEM4EUeiAZp9dfx7PNsESHhHmq4SMehhSFJp",
  "key3": "64ZQTiRy6FH3iG3w5R4tn6SJhWuWV2MherUaTPfU9NgWiejFT7rEUHdWQPHxtZsGPYH584stbRAo7qUtHDN3WNBY",
  "key4": "gkBoerh2Kdt6VPKfRQtGpWfrDuBUK3REVWbxbFfdkZ8gmE3WgsQTpEmeEHnxXgtUphtZ1j4ikXUh8VsAuX6BXKt",
  "key5": "4AQyYVjvRp6VQvMCtMUekXRko3qCSqMXk4tGSsDpsZmBBhhurB9F2Le6Nhxn6JHd5SzFvgfW5YTRxsW4ieu292YX",
  "key6": "3nmvHDSEJ9YfjcdnAcF3rzg9Qv66zurNQjGwskTJeWWA79yVyZUrg9D7csVsjkuhMbZuHyai1tN2q22j1yUQ2xMp",
  "key7": "aJPzfNUNYsbmKcAxG9dowNF9TKzFvwCHeDR2XxyRHjYHErG7H1qJQSVVdvnhGSXtwYb2oh8qk6KGtcDDfYvnQE4",
  "key8": "2PoSVYUSLDkch59dNV5WkP6uixtUBDazjreinAWAdTZa94h8v437AbCs9m6K5gyuiPfdZruXp7YouJNAjLEXPRSG",
  "key9": "amRJdJF6F2T24RKysFu2KabY2zdgcqAT4jq4CrHdMsLM5CQjUaP9LpykgLEufYwYK5KXgDNY7DM8uhGXcxb26Nz",
  "key10": "2AXWL52eTqa1H89R6WBjWg8iBLMe6YBDC4m51JB5R6DnZMxiEmQjwGaAXQWYuQyZzXqn9HnhYRMzYVAoMkTC1m9L",
  "key11": "59Aq4qfQTyzJ78vMHgCEYo4knyEu9GC3XTPZNLdBWgydM3ZhTKv8sJGRvmyJLtsja9zcPXwQg5DueGrLUuTomS4S",
  "key12": "2b724FMmMj1h59jACki9TA5L7WcFGT1iBbpkKUGkro71xTTtbDtrDimUY6ZywdAVtsmmcumGCHjirKT8kvBgHfzK",
  "key13": "2XkoYKWYx6nSfP5XtdbkNpdQcNKnLUuDj3acKwycDpRSKgce9Mdc84jHLexUb37BtSze7cqjvqgSpVvtjkuWZHck",
  "key14": "3PHYonmZt5Bo4vjMvnvJVscEbK17fziRvbVxz8yDAjbBEeoSdTGUFQsprDmQtYbtGmrS3EnrCbdVKRAbuE1bc9jB",
  "key15": "3Bf6aWzxtR238fGzafmjJRaZ1jnYT9YpNzGHnn1xhKA9bRMJXFmAu6H2GzxZ7obV6mCTEzak7m4uLnzGQsLZr79n",
  "key16": "3NLJAKGzzsbqKzgGDJ5NXsEmyENLpsdWwiXPQ39PMpMxajH6PW4XpdBMizutawQSXZ31UEpeoe47JRxWBqkbk98n",
  "key17": "5QdcY56XLJdGthHchNKTGEyV9QzkZ6NcQSF47isY1HuTH1PM8JNWFWRWpRTX9CBvPU4ddcyrF5XXFEEBietKNEoG",
  "key18": "2fdcL2bk5c5naGELMPSTN13X966dh3vvZdvKrRB8n3GyKZbswwyDFH3YaVyQTwPqEk8yfz2wck1SfofQg9jWFTwM",
  "key19": "2ZGvNtKy5GS2eetQXXFEGmPar9Y82TDsrDJnWrTeDazbbWYjoHSjnJSjTpeyKfRXbofY78CY1QRuV5rhURSXFGFf",
  "key20": "4CzKPJK6PHuDgcgFXSsM7tvYiryfVMrSvqw7iWvq47EhW4VcRKD6etgC4Md52hrJ6SfoszweB6cv39QNrG2iV8Dn",
  "key21": "4CGKaCJLq7dm8FofLzdBHYJKfYtp636HGupVajxxtXXbYVSsAqK8BgX6igg8fZCrPro9mxB6NCHp6NEdEBSb9DkA",
  "key22": "ShYRwRCuuyANZi5FBfY2nWPFLzVcVvPpPyBa1NeEtkdPLYDjUD3iX6UcD6et1jZbjb7XDoNhYGdmTHfviVayNXH",
  "key23": "e8YmKcg6FczGszJPL16YZvEdgHy2wT9tLDcUZRzk2fcjMVYY1HReieEgd7ejP2FHH6jGFPQh3ZTMzMJ5r9DTRbe",
  "key24": "d7KSipXLZMBD7fVmJuAzrbBeVmzYZmF3Zurs8CTFMsJoAGFuR1KVPZUNDrPGvtFT4rhZyivE1Rcq6uu2ewYpEaD",
  "key25": "3dCkBPBZoayT4BVDoT6fcJntZhNVwDrtKBPnKXW6Mb43wqit8PLJmeQ5cdUDsiQF1SvM1Tm5R5d51ZM9MoPuETMy",
  "key26": "24RACRRWdQbG24CPT7UkikmEvJ6nJ65e4hxbE29Zb4zqAx1c4SY3za99BVWPHx3Cu14nd5oPK57PmTsx9tAWEJW4",
  "key27": "5S55o5fProU8vbyyFShxfvyeFuSWXPdNJeoetC1f6dbHRw5hULWMS2xSC35XwmGHXb15gzVrGPQPmNVcX2Cs9LJm",
  "key28": "583pRdyKsJWonB1SCj9rCMx9UeRCuKHivAPs2zMKRqWcjPYPySpU9mWoELzgk8Gyo29YJJ41yUQU2caZhKaNdNn4",
  "key29": "2UNhGfQjqsrPnfy2AZCsV4XG1s49cjMoJvAjaDFUk3ddyhNNdyrBr7BiTGKJBNb9T6rzx6rqYYHBeuRMMQSbtwyy",
  "key30": "2emSLhXHqFDgiw6BdgYKUKfBkxaJeiMJVQGnQvvG5jn6TWNpLCeeUXJfya2cfTokrtX3hfJEcC1spRY4YwVzTdNt",
  "key31": "2CsMp1o1sDAaZqDSgNp1vRNkeSsjzoyRZjwpuH7oGtYnKiXypnrN6LFiswRxS6pw4s1h18KXPHN8Doy8A5Qe7YD1",
  "key32": "5pnhC6Cb2XnPqGsX5pgoyo5nJW13ZzusvX9bngtDCanrLn7TdEDEtBp6oUq9LycHWQoLyMmtWThG8wLUxrvoD87w",
  "key33": "2pgSGARV33o3is1t8srx56AehD42jmfTWGk4jKNxJfuWVPsJZpc6wrWduTDiFFQxgekRvseQk8pCkYuQHqy9aaCY",
  "key34": "3qdVdkoQPrncFd4812EAPZsA9jnR6pxqsyte2GfoxisTRVBFL6ZFWi84sjN9U6NhdPUZkfuvB2sWgCcy2WFx6dQT",
  "key35": "5c2uTiKdkyp7ZWxYrvhfAds32XFyZAfttABFNdKLiVmrAZ6AJNhYZnWAn2PqqiMk2oR9oYL1RKGdNxZTGRcKQn5a",
  "key36": "5Vzf1G6jN4SET2XMAurQ9zGiLtdogoTdwn1UeTbUJ9LDFLx8jm9kh3XCgP6xkgQwmQKf4LSyCMeWPzqM1PuUqAvh",
  "key37": "2j7QyDjpXaRVs4x6p5Ek3LcgpH9BBymQ7zfCdMGwS8wpWEgYMPtXpiT75whqCoQg5WBsjpXduHNKx3CLciR9rgax",
  "key38": "3rbWZC5YQKEyViDmUAWZrSsnJJ8eVgiazPSqBvCSY9JfA8XB4rQGr3Na7rhoPgSPCeQBwT1S34aZzRYmH2BmdFqo",
  "key39": "3zF7D4uW95urFbjMMtpfs9bgSx8EP6sJbRdP6Kvvf41mgPWLs3PZBgmbT2tA5MPSUXS6FdUxj2YMbrJ4tf54mH4J",
  "key40": "4zzoKCmDcVRW19U1qEwtRM3c3LSUeTMZ4D3wzeNKy9TZfge3kzHCVv16sMkqHPtG161VEj7xcKPpcQ5QaMkSuBvj",
  "key41": "2PUMJEDCWcKXyE8dqhWkmRviMeRWXvagwLk81aFkUrT2DXKSv17817TvL3x63XdgiVZDL4cNpd98UTUt2eVxcvSc",
  "key42": "4EVicPb4KGecT8L5fmo5xBFE3JjJScyD3qzXvxzt7YTTdBD2vaTb13nubXiuZXyXEJpc9MMCCcsZef1mg8sxyxoo",
  "key43": "2rwQ6mT1U4rgR5JsEDLP4NHFX99ttkKrbqe2mxSUeSbRRHXX7v7AL5Zi1FceRiCKQqiZJ6NGJ4ec63r1etNwvAsX",
  "key44": "ez6NWG2cdQBtkFL2ebxv4SN7rRdfZnFKwxmNKZmu75t5L1uKh88AnxmQJbPPvkjexCpGHxLbXNmQ7D9aJo2b7FZ",
  "key45": "gF98BUrbKV2PWxckpfRJ2anPzUFodRez1fyN5B7AvWfUzmBzT7y8bqUPHKbwFB5a42gMeU4UnhEU5EnyiVUkiGR",
  "key46": "3ED6gJvSfbZM22QetfvpXjCWMBTRhqhhNBebu3MxSdjXqpZW8zCCviVRtJbGXMg3AwUPpWUgLpnGXi685NS5V4Sg"
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
