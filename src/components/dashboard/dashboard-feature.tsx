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
    "3G3NeX3ebMGVhD9rKJShBZeThPLhQkdH49qALX1QPBtfnuuo8XpbP21HQobNQs17duEtKM37z9Has7A9k4UEPVPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ywr9S7ahVvb3kT9jruAkwxzeWXfXwemLzTF7sAL7YWtFErZb8SRRvKEC2iLiELVEwzbyurjaHLsLHgnCp46mWKo",
  "key1": "3zqFsdgcWrKKqpfhcSUFGBA94uJn8Jtebf5rYLnNYFSb76kLeQ8AwDpaBFLx7qAhGswMhPijbMEA83wBQGppHCN6",
  "key2": "56ochJ4bbzCoMr274iQqD4RmiDup1AHnXk8qf8fKNasqCwG5pjPn6kfvn94jkBA2QuT4VUSivX2zqRbup8Q6kwpE",
  "key3": "5CJg3XtPowiWEqcgPEvrupuTLUMtghnvFqTgXbfLGEbhHNp6cuX7cF2JSFPAdrCEmss7oULDA2HBPFsVZtU1iMvR",
  "key4": "247HwWjWAYSNLegQyrXCt76dnUNYPLbu2kTM35apPYuPAsgjKJzMgvQ1xJwooQ6NnWTfC3F3GE4ZLxzBvLvwKZL9",
  "key5": "qRDeSvtVq82Gy4NRQenrRx7RHWdQUAX8oyPb2XuWmikAnHy2vPwmVqa93egwr39LHGisrWuQ7bBgshimonAAeYE",
  "key6": "4ewawnnhdMQm1hvqvX3SXwdpQ6HPUojcV432qjUqeMGSBZ8JDXu8v96gDtFedSj76MpdKfi13VWUHaWyLkVzjC5Q",
  "key7": "39cxeWRbCL3NxttvvXHzgwxeefrrukzag3wfR2VyjVk4bYfsdCUhsHmzKhSqKgJMzGrQgjJSDYjbDaKshxeQwj3W",
  "key8": "3J8T5NiuF1LEP7uLzRTnmwLf3q9PJQwXGhYcmuqY3AYfyzqw1xQuEs4Sc3dajZKawZ3bTnyEpvJRsp5ehjXvQaPg",
  "key9": "4wbYSar7etqbZsjjjc51qx7cuZf8gKb2yQAHWrXXYMmQmB83dTb4dttFHuBRmH4Ss9QtT89u696yLWUrkv4MjoYo",
  "key10": "GdRvBqjRLjcycVqNuDKFikhFLK9HbygDAXqxgWxeS7Q3qCXFY35jiRujqy91V7XtiuqJT42naZG9gKaW5XtaiP1",
  "key11": "2nCVDFqN2JRQFTJzyLC51YzJmYmQmYs46Bi1uFb1M262R9mkAzhrW4FrJFiw5wZk1aTx1ujFfEFJebN6hFhjvPwe",
  "key12": "5snMbFtaAnUMzvRGz3s2V941HsCtDbjbdjznJ1gLBiHp491da84ebvghKe1xodYRAp75CidhVMgrs1aJsHrjUvxv",
  "key13": "4gNHus53gXDKmRe4jnhqPb7HP1bYGJ1hacKSEGei7V2g6HKP8VtXFgQ52pUDJSJraFt3L6Dxu6ajMUZhq5ePSYZd",
  "key14": "sySjKRHQaLXSTvYbCMDF1bZrEhXXi2Vqb5HWJtUCwVdeos32Wks19tN9KqwKGNsgg1gEPj9qFm2oDUR4pZuzUzm",
  "key15": "5598fFvq5GEy8c3565arPKdvvzePEhKwJvUuNTN5v33srJtiLzrjbo65RdT9QyTRpbis5Q9Kkah22RHmPpYDLGhc",
  "key16": "5L4X1DauXXV8KPXsMJAeTXfQ6tWuN1A2qJAn82k6CvsvLJaTAPQgdVffCSAXKE4yHzfyaFBqvqTvkKvaLxTw7NyL",
  "key17": "3mHzVPPwCfeJdKzML3z6XLDUj53ikHHueWN1vQcjAV4XXiShjff8z1TxZGNihwuB9jv6j7fPCk3zf2iZ8P6Gy5BM",
  "key18": "4iX9ZCjYaZhGPm2J9VezJ7wmxDeqQp1k4mv5fyPwsedZYjmzMds7NptxZADRoFJnuZgK1zyfkQb1iMEANRzgjKaL",
  "key19": "3pTMbtRyn1oxZBLxgoCnbpkJoW9GCUQ1kyrLr3wLYLePJkU8VPLLLpmR3aSyy5z5x1C3Nvbo7zKk4b1gAuQptfeq",
  "key20": "5LgqKEcY8HPfCTudY47rd15RfpRC2fLQEQa8zXmpRBEi4jnpw4Gy14DRhDM1J5gtTNrtgPAJQbTwd34kWqWwweT2",
  "key21": "654T7nBQy4eDE15HKfEBsgr7tj4CanXe99zCUN8D7wTSNnfgU7t68BWLfqvEBu9fnkJgr6KT7oiqMXqPzHDdDoUc",
  "key22": "2H2K27vygocLWHFEKtU85qwrz9g8zU5uTDWmVr6zMYBvEhQGYz89JwftvcjamhQyuyrSXmmqbj732hbC7Ea89Emy",
  "key23": "67p5cDYfKtA39Wrd6m2uDszodwxPAD9rjM9vWPnb36BzS46G5qPNXusU7MtBQ9ViiBce9tWoPSAyeBw79ExEaTcS",
  "key24": "23kDmoCH6V6EdmRFy8vLW8YEuE211RqF9D4aTVxYBS4RpqVetpoo22Utqor4iusfs93dutFMVaxejedVAF4zLcdr",
  "key25": "5c1KzBugravqn89znq1qKzkACc3NKiQ8pwmxyW1CGSFGfX8RxXQfKv6yUyMSQTvHxQM3BxShchp4Sx4Uuj6vnvoa",
  "key26": "5bTKJZZ248Drefpc2d4x9X4nd2PFHUTERnUjkRkeH1GBqvda4GxuYounQosxeA1iqKgM3eGe9bYvFSEGvScW4WNr",
  "key27": "jqe6SQdXKVTx3pDxokWn2J8w8JHs5otqfYifpowjbgn4JY2FWAPSKrp1wBpyKCvDtWLcN9YmJDAmFqA1UXkLuHn",
  "key28": "3sYyaGeHenVCegS6jQPTM5K4wvW2fVbwTyQquWbvYtfYFef1HJpXK6pR2sh6TvzfH1Qd6x3sJomSuqVC3o5TwkTs",
  "key29": "3kJgEsAoaELZzEpbz4rKosfUFJhPncRdFV1JTs1sNQgvJJCqYGWENZGdodP4ErXvtikMnegR8SAoTvQLTs46dant",
  "key30": "35btt8do8tNFo7KCp2sRoEZMorS8R4K85PghwrqUWSHbhYf9NUsvFRgUdVjGpeDFf5RXz1LccJ7pBRJ84AkZULNr",
  "key31": "253Fcw8Tr2NZA6FCx6mfjnS2EgGGqdHog6PzjWYGb9MPqXrK2Cg12yQwxFD2ZKHACHewcpq7vgqn7HsdnbYcub2V",
  "key32": "3fE8JMQ61b9iB51Vo3faYYH3ome8iUADhAxn3egt98gpKKfyTJ1TuVfJRXx9a4NYh3zpKRhky3pJJpu1N1vMnpsp",
  "key33": "33UMGJNWKap195GAwk98oaKtph3sf6hpK9J4NKzX5HR232P9cty5v3yy7mj1RJvnioobJe8Kw5GcSoHwk3nqo46K",
  "key34": "4ewXdoPK8pMXLM3RgaUCazUQQMwUcEqCn4D9wJFuqivuTJEAdWFwfZLhevWSsvHTdoD5KviBffjfnAwbDM3AbHFv",
  "key35": "uvcPAxza8j7TEKWRQo8n9z2X9tVyXLKADAgYxmpdjtyr2bJ9CDgHe21Nd5gV6WecCijkuKTguSGrbP38vA3THK3",
  "key36": "4y6XzJenYMt79shyB9WJMKQjhKXbU84TN5nJfYqXED36qifJ8m8iuURvts5Ny9RkGX8NsbJyy93M4zTtBxLGC8Dt",
  "key37": "4zjtEsg4tPTsgndS4M6Wv1629CEveecqX61jvFCNsrxt2LAeaXRCoHTZJHFbRNqTqwEg4bxSeW7CAAUbNiMpfMy7",
  "key38": "65LLrJdZu3oTnBPss43uGKLRXiBycWS6odDodvdPaA5J6nN9JwcejVZsJecQWA12StFfkeXFFgk6ybgCnyZepEry",
  "key39": "3UMojJdAJcnHkLb5Jmadv4Azt86W17o2ziVXexevf7daQSMBjtoMmm1cEbGZoXqWB7rms4z7xuFyRQu39c9bc56x",
  "key40": "5avoeToNsLuqjUpD4933iSLN3tmSig87hSbwTy22BRkkKTwh3vWxHWWyr5SAmifCveBs53uSXoqHiSS6iGR8Cpxi",
  "key41": "4Syv9QQ6Fc87cFeRWxnfyYVrgjgaksvbuSAvgPS5gkX2RkQbCYmwca7hasyZwkf2XJMkyQfBjxTKvWnPRjYT2mTg",
  "key42": "4YAdiwv9MyQF9myp6qdQxCx3Z6MyBmW3DKLEHCtR7iv5YsnEHRfuNErs34NW5BZdyyba2BHX5RMXzWqsqt4L2ukF",
  "key43": "2wriExnqVgR9bM7yFz4YEjASSDi2G3H1Uk4vThFpxn1JLx7TACzJSsH9DcrUMfSsJKs4bfvk2DFxTy8LuvknBEKt",
  "key44": "33YgRgeXhuoHd8oY7ReaZWRAbuRc3fULBW4xBYbykTXZo7pcpWFE7FDfoRDxziAzVYphtW8VfPTj2udFDK1EaWoN",
  "key45": "2qX8Uo78uuXjamGoYDAfWSy3ywxNsN23XbdrPKvyhjRU41pNRutQdzQYttusdyLoRhijMXWFvNorCaQLfy4Rky1K",
  "key46": "5b8tt9Dtgeoije3gsWwamMwQCQBgrurFPFhDkYnTHHCBe1326iyF3Es1An82VGDuiki7wm9HnG4VYyugxowJpETo",
  "key47": "n8ELh7FWv9qH2gBc6hUAMisx3EufpDAhPZdgznUh15DAvNxb9bcMvizqu66yRHhPAEtQTb8p82GfTwimbTdwLpR",
  "key48": "2GYhpS2i9ZgBURBFRp4H6Sf8brGpHyf9icWXGANnBz9uzDq5LCE5Br536m7yTWdPESw6xiESzXT6ZN2z4JeeCZZU"
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
