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
    "5km9jXWdx8WSyQA9MKXnqiZfpNNADzSeATtRTZr5PrAgZtHgsGWfZ6pEW5fTjpGPcsGuBKWu51SgfPRQvNBK6GyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NHFmTgM8gd3yxd4vMdiMBrEjbMPUsQ9Zhvc74ifyDFwn6xqVqkAXsHzHFeq6WSiziT63UNHdtSwvytUEChLqAEZ",
  "key1": "2qKYAEzeKZ84bkjRcqenkfdg44zGaVf8FXexKjd9DRHv1zTDzYv2SNQ48N3mJu6RhWb4xS29iwgoybQXks9arHsi",
  "key2": "5xWHzoWc1rRjkKX3MeyMmKx2maetoxVhK8YWxMbyJcumKU5ca49RZCiCLewKXCZkovLksYhMsBS8quz4EaTRWcCM",
  "key3": "oBQXv9oW1vVerkaDxtwbBm3VPEjLNV7SCoJhVeLLGmnQgHpbkaau2omCmEqy8FBh2WSyZiGgjLEu2PerXVXzgLV",
  "key4": "yiWcShx9UjeUVh7UzGXhUWbTW3Cb7RsewJmdm55gyhXh9m7jCKoNzGg7ZQLnivU9dfECiYuhGhwdnrpQRmdXqgK",
  "key5": "5xiWcAk96B4mfQ3mgoxVGdvUhCLC9V45Ab7SggRhn8hBuNdGMhkfxb3zp8WRYGNjJCq1X13LscK9W1txTLdavSTQ",
  "key6": "s3xp5NjxAraFTbP9MbXwQk2qQgtouHPLevfpGLcyaBnxoQpJbLVdyJNEijRfdQuxMH6iTWBTPLzBxmjzCCVELvQ",
  "key7": "5abzdvSJKscTyjPDzvoQqaXekXm7H1wEgyXPWFm4c75SmVn32XQRC1mPzYix5NWMtDbzHJs37sfXM9xUkTPtbkhq",
  "key8": "2ok6v2mL8gTktKYdFzHtcLBkXyJAYKzFdeZAcs9ULFuecA38DQvpWXhF5xuimcZJ5PnayjAs5yMQEmJXzo6ciVo9",
  "key9": "4hi6ydMfD6oranSh1mgvVqRVGMpPCFWMGqx7HJb6RJQV5rNRFxw4vBWx3GMzME8SCXLw8rHgW2mdBpg3qxb8e97a",
  "key10": "328ngqa1XFa2BqdCs3CBQEVPjfa5iKbfTrG4NJQZkMqFwsn245rLo5gJd8CtUqT9fiJRRpJKamPGLch9HrGZuMEq",
  "key11": "5jFgo9yZ7zmfSMwaMHAnB6jHm1qN94KL344YfDkMg9Wa1emCRdy5q3vYTqAK4STumBy7eamySDjgQQdibR1MntVR",
  "key12": "3uo95GX7Fny5GpU9Wv2Fb7TA6qsR3J9nqVSwdPPApK5thMWZgXmAvcN6ETo5o2gxrdh5TNLKcEUoLUoxdyzPZ33n",
  "key13": "4WR7tUwARaSKXnGxcGfJE43xCbGA8W2MC8pgcMC5BRmLeb2CGNUgE3TMnJ1r481ihsJWv5kiFjogLYaNVFRvS9JR",
  "key14": "22KiWmfjzdhqSKEozJ3hqL9chgAmSHrnsYcFxggSJYMRgmnoy6eqWX3Gjjy9B26LrterSqTtGwYB64xmAK58FWJp",
  "key15": "3MaCCPQuYhbBRgbxY8QddRXxW6jftucCAZ19jqHBdy2crHw4EkfXJYeNbNWaHMCz5BaLo1ANoNjf2a17b4ENiQM2",
  "key16": "AC4bquQvF2HjvX6osABwTkDiGfzy8xfydFYpzS7zsdNQZprTJCm9Qjg7rmMHabz5AMDEobr6K8TFpWUy5AzYSGm",
  "key17": "5quNHjt7AukFr6EGuuKsTFmAmA9KvEJkmuFT1UHyvLNC9VnpFdB7hbgrxk8WjDcz65dhJMEzygQeTDv1ULF3Vjfg",
  "key18": "2Et9Kv6R83w43GVAC5fMS4AyYKAGLPVXNddXwBhWDsoQgFFPgKWM266cAeuyweRehaS8bua8g8Vs83ShjNQSftQj",
  "key19": "3oxqPRFbQ78JsnmFmgWSAGoztzdb8A8TtS7ZstCwJfbmfGBgDZ1hiCNRMjL87DNLCUFaAUqLmkzUq5oRuv3Td7tN",
  "key20": "5nd7XUmgTABLQ5xf4wqNUbWSiE62mo2Cea1qFGVmiZy9LQMqBptsc7QP8c8bFe6VgJuLpEu51LBmUiKkYSp1tkgf",
  "key21": "58GoKCeDS4a9RbxxC62pSvCePydTC9LPGve3JJWu9QFyHQfRra7fr5iPj5bQvkSCR6PdvUT6jn52RLyJDshm3Ln3",
  "key22": "3ZeMgZCqHVwHHqLXRXkC87qk7B5xXFvicpV6F2ajFYwsZEAeGj93tR3b67oyQD4uDN75MVTRhQjUtif98UaS3kjE",
  "key23": "5Demf1nZpmE46ryrcuC2bULC1BeZMG773YbyukuKhmVjGpcV1kQWbLLHyRBTnwcph5L3bJGNM3aHXucqXFgzGppo",
  "key24": "ntDSbWbEmHQ8iHQP5oiWEKiqqLvteSiyrdzcQMd18UTvetkQfPiQ5WKDnVDHj7eMLtZSpskUsnJiJ7qKjQpCX6W",
  "key25": "5mAbrVKCFVkkijehfotNJySt1DwVXeNq9noGp23QLc2coYAnjsLSygkUSSekrXmCy5PWvi4VJFjr9pyAmZgJtNmm",
  "key26": "3wfnBfMHENB76QgUibG3z5V5XZCSk4DL5RvYuzQDvsb15yoUhxb3qm4iYHiXuKBeZjchy6Tur1Hwd9mjoURF9V9",
  "key27": "3XPsVpxa8G2aqYCqn9WMUEryUyaBGuJJmqsfMZ6Ecx5w9CdpAU6d2EcGoR7DHi1Hybd9mssVS9hu6JVJXrSbkKPq",
  "key28": "43dV5CtrzbreMbFFQYUyFUXDpzEMb58rA85U8hAs2Ghtps5gssyddi4V9UPu3oLGXd4ukZKEQJYguZJEZs2k9YmQ",
  "key29": "249ys9kPXA2uXL6tvjvMXmdZJzNdZjj85XX5ZmCgwXefNiZNhjMWVN2C9eSV28VUWWEvXwRAd5TZmQymaLZmnKWg",
  "key30": "kYH125fJWu9PfzkNKkKwQFDYkToXw7EZitgnhF33PhUAh3UN41Xd2zFXBuBh372De336cwtSKit2ysm2aziYcxP",
  "key31": "Afscay4wA6b31Nwd9VB5MnBgm3ehryH9C9rm3h6xHSGHj5g45gqM4CWyzhVHork1LjP1hyhGAu2TyGUDGntpnPm",
  "key32": "3sd8BX7V5u3W4EepUpj6pryNBjzrJzJV2w3VgEYZsKzVZKKEU9eTtWQHrNSUYUp22VCbrGT9DcQCDftCBLdyFQq1",
  "key33": "V5tYzBpAazjHnqrAZCuc5vjRh6voYzkdWRSFW1qP47J2g8uZ1BFhiDzMtPj8HLkqgd8gQnkGdHnyWHBYGFwVuCp",
  "key34": "3er6US2BoDVHfGpaKnSgT6q8g8Fbn6SmRWvUnG2Sju6zqGpshE5BmHZnsvNbka7g1up7HbrXh7i8V2boBuNfXVJv",
  "key35": "5L9UUwWL2Cb4VYKyej2TMMxP52xo7RYio2Bae6qdgXgxMMegQ2mR9zLwrdecgnkxHLKR6RKErJR2vfGw282KeXM6",
  "key36": "2hVjkQeTx4bda4qwaKVs8eKjVcXkpdv2njhfTk8pDN1LaKywCqjDsG5pPTnnmY2eVHz1SZwbuS1pcZbMF8FMEEGo",
  "key37": "49fzfJHes7bg9UYz124mqh2WvyAkbHHk5a9HnRHonJuTus1W9EhvshGCkjf6jctAuzf8gtCQTtR7minj7Rtq6oPL",
  "key38": "2BY9L4ZBoDRmJrpcFj4MiSx23h1H5RBHsQBnu2pAqC5MZU6vVkXLLaBd412RBhnRDd5ssuXEDhrAXLXyu1d3Vhef",
  "key39": "26vcX3tnsrKsFQaX8Tw5D9uD8RepyryfYXPYgjhwFzSkHyPXBauFUaMQfDL4Jz77m9XvHdhX8X5SqfDeBND6P6Dz",
  "key40": "2HaTJqGHf6W7z7okzcRmVnGVypegDQewVPYprzLxvhdG4QQ3cZgXwSwhT8cSPaU5TkBz5NxqnM2TsvQGV7nK9MZk",
  "key41": "2fVkeuNJ7M3GfFd5weK7DsXC27J8xtHqe9bDdCXpL714wZbTPXmjndtnQTEQfvdbp9BNV4pXUkmatpMYaGzYGHVp",
  "key42": "2kFsdeEn4JQbCvDtQ6qEFdjZFRCkAWtNU4uqDdfRCLGvQBFPy9RYs2SRH4xAKQNTMBQ39Rho3AEf7xX1dLYoNj4Z",
  "key43": "5HXhqPufmUVpUQLXaarb4qHtqFLovJRH7FSd9cu531yVPxAbeyRor8bSFErZD4TwF5mT9Xkj5gvvknntJVnJPr5s",
  "key44": "4HXsv6eb9WVnnD1h6oyniLVhVocTvqXpP9hxMQeywXFnDE7sJNLcFjGNP9pcWAm6hXD9BJxcw1jBd3PSqLoRxT8K",
  "key45": "MHPmkqCuSmMCmXqSayTcHpaCi9i4FkMpwy3CLdt3wnDEMi6bSkyq7UJhMWBJhBG9V2crMic61mpjxZHZULxDuN6",
  "key46": "odAFNtDkArJAeagLe9QA8r8ctZVJtfJdygepwDwCew9N72nmNfC6GRhTawytb8ekQ8Chcheuxbsxp7Vyhvo5AAx",
  "key47": "2Q9UNEYczjzRaEzPXReMz6FLjGUsEuwuMfYEWjYMiDwcqmRY52t8Gq3eodE7ha5bRy7fgtfaepFxGC6VkMbuhiUC",
  "key48": "Vzd5QEAgv6WY1gBQYoXr4fpoan5YQiYg4R4J9e195HyXWVv6WDfaY4QQGwCj1ZqtvGLeUaGL1GF8hbZDJAQ9du5",
  "key49": "42FwezSPPnce9qWL43wnUoe6r2xgAnJYY784ykt8JvVwCAykMs3sM7TvdStakcQs9CiNVAQKiBCF3LKdZWwGtN2Q"
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
