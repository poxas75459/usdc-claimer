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
    "43zM5QafXovt6dCA2LeFuvFs7U8RbEt14GUjEHzaM2PbRitxBrWpSayXBQVENoYSPPMJoYWLrtX14ZYaRh68XkcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y5mtT1XBVBDt2M9FccduDLWURVvQvHDFp9ZLQZU8gMdhv5LeCfJ6i98Rq91otGGr29avF2wYUVvP7XLJdtpGHyh",
  "key1": "25cyyZPwjXCtV9pJ1gqJYsU36Na9mxMooA2LJBLSMSyfUdt6VNVXSA3TRWpXXqM2EiohodNR6M8QLbKJPgWfJ1q5",
  "key2": "3NLESktRH34kCGjZgnqGo6nCGhFK14TLVyFh1Xft9z97j4NFHCu7Cz3mrVWXrtgCPfGuLMYKNFzHnjvGZHaVb29Z",
  "key3": "3G17wCVrtioPMDBVA3fLba3yo3sfZv7Z3sSsN1NGnzNgopWSmv7N8ShduiKin9LZqEoMF8UWiffiu63uUbC8WLe7",
  "key4": "VNYQLkoWav6XmJ9wciMAWc5YJ8Am4tFM7NbUe9wtNr18UNt682RxyDpNYw5ahkKMWY5WKMqtdWmYufedu72v4db",
  "key5": "4XDJ6A8fR9WcjT39WyGiBtyYEABh4gi5KQsTVHFMKddA5uJMrLr5MkTdSGz2c1TNN2bahYhXYaiC2xV6bU313S4W",
  "key6": "5i2iQnm4sRbJw2CiaRGPNtq9FBAUi5wVLgKHdP8ccQgVe4YdL8sX2QEyLtz6juPDr44oxNqjiJf2VRht5bzbp3oB",
  "key7": "3i9qLfRW89Wgrfyv4ZzFS2LtoZcBnK1JHT8NJ9cqnD6pxPgtgwrNKN1o4hzeXVh4P83q355gWCoiQS5dNuozRTd2",
  "key8": "5kDxVx86fxJQiy2QnRHMnWEYRSGuAj9UJxsLhLFjRVjbQB6T94SfdGHbdysZURZb9P1vGMhnzFRdxmUAm6HVX4aX",
  "key9": "52DjVMgjUoy83KzQ64ZMm8NqFd2o1sVUS6K2Urcqbx1rzxtoVdfRUtR63K55McDuNMsw6fgqbXbanoAhhwuDQcEA",
  "key10": "4NKz4xAApsG82oBri1ydDGUCqriUUMoN6jkiGcjBphmCH3CYLAAy7TGA45AmUoxY6BX43v4R8LYUiY6rJGQBxbvc",
  "key11": "5NayrEXYHSQfdUSPg7r7QAQXNyPzgzkCxszpsUbmfi4EjSzeoQRMytiPbyooDAPMqniQkzedpPF21P9n9vgz2PbZ",
  "key12": "3cUmURscBnRXpC3XUu8GkcQ9fC5uewGhoNdbNuvcHpsymM9q7BWjhDREM8R2MtCSXFizVcDYywtwtccVjQRPS4Gx",
  "key13": "3R2xaXHXWRn8UcAibesS6uyZNESnQDGSWrANuZ4YkbGhmL9fKq8mHRhE3R4fVHczYJuA9v6QgdWkwiAxaJumzsNW",
  "key14": "ympoEaDTC6tgWZx9EQ9Sf4em5ckjeDqm2WcH4heMraDFPf1zk15aT1uB3biUjWWM48ZsLgjaxQPmXpWUYFcJaXi",
  "key15": "4bao2WfooiSJA3PnH7mmd1UcNxFdG5iP6B8xHgCCYZ48eSW2dod32uTkFFoXu8EaQCsKaGBiNceT6a426JzCM6ay",
  "key16": "4uCY161eJFAj2fyoLrzMSmZDp1JDvCME56ZqFC2gSLYq3iG4Vz2GszCE2LFRJzRN16Qwd72aPSyyK8tsdfedSbJR",
  "key17": "5gTtpf4htJYyrPiLiwL8ENLkXWfZafXA4ps1fGXXBdMoGSv1g3rUXzD8GSQXjnzBpebB1v2a8JSCwAkbiZnvQP5z",
  "key18": "51iCqkYHvKfCepHZhsav7Rpovrkcwpbch6Gd9tTsDXvnokt6RnDWSYLwBipNM8aM7pUDF5JDL7XNLLnAnuosJcRT",
  "key19": "43ynLEyWhcacKY1Sy4DMNqStTYZSiB38BjRFnCFiEeu4V6XaM6dbz32j38DjhQkDgA9attYVdd2S95vbLnVWxudN",
  "key20": "3xZ6AFS5iWJ6zp4w57H74XyU9Aibj3sDc7KygQKV47cfjM753zeDaQz2g7uvV5W8jHLRetWiRyNEvspjBB8gBLLn",
  "key21": "4w5pxVMtpDiaKMaFt6ArreLKZ2b965zPRM5JdNccuaA3nJfu9Ly4tVUiktepBuQM6pttnytBDWpq4RLn3tLaSfSf",
  "key22": "2hNPBj19c3kw9WoYv8FePRGeij48crvZHzfzHw5R7Bam4nrTzfvvBN4oENxo1cJ3SSSbVbBjptYFNn3vBrT2gD6j",
  "key23": "2CUGKgESBzx3EocAvE3zgWmau7F6Ar4eY6Yfsyo79cYeRHBKNqfvJ5f7Vh7ude7CVTA8dVh4YfvjnJfQ3GNYBmw9",
  "key24": "5vYLZbpsjJfSagtDGbLDT9MNuxyaGn2EcYUFZqgFpRNpu4RTfHr7aoCorEUyqXLdnuNKa9ybkvGYdH1WHTVcVL2W",
  "key25": "2AATrH9uT5za3Jasqv19h6oPBnnCNje1mgTrivdB29RNou1gb5CMXygQFm5fszSi4KqjUYeWgsDavRAKEB4qqvwg",
  "key26": "4jLfcYcyZzksksamAqeAbcARc6w2WsbXTNTTTPbdxAA2FtUrYgeSQ7BPs13BoyQDboKXBiU2yDSjvtwh1UKTYLSU",
  "key27": "xdcFGgC93U8vJW4FMkMNUqEvDgdZpFfd33Rm4NG1YEfx5AwjLjAvGUvgmVfonhfsWFRZb9V52JvAvnBgnzqyuuw",
  "key28": "3q3k9xQCRGyUsfa9DAN3pE2nNcBPhLm6mkrRUfwiPSVTew6ZeoUYTVxdbJXnHyncEGVyQWLpPi3eiSR3HsXj44Uw",
  "key29": "4W4j5hDygHVzSAu4S8YDtB4Ftq6FheZr3tnyDS2YFf3sh5GZZJ21qufv6q5HkXz5NQFM1TDcJC9A8SfjFa3G1YoT",
  "key30": "4nXXVc5xys3SGxuwtbqGjboqgW9RymZFV2pWi37bRWRpvjSWfPNCSRSZWwtTPPZhoCncU2h51RYBLNdz9NQrFD5h",
  "key31": "2nzfVn3ZhTkxPjvvmEnKiLEiA9HRBcsWmrf2soVT5JwdP8bYEvEr2M2ajPyESct4ws7QdMRjoCH9tri3gdYUUHGS",
  "key32": "UZVDs4EHWU5vbwuJwBXZ8HXP6STTjFueZMeZzuuibqnQeVzidxLtR9WexXkN7eK5p6J9rghVDN79wiwjbPfoMHd",
  "key33": "HWNLcow5bwNZk2UijVjW94uaiUnBwMskoHXDgA1jcWU5PVfS1T8iaDyb39FuuJVXcRDrTd59K8TZbqanoNh1cHS",
  "key34": "5xzjWeE2jwZB9CPNgekUyBC4mvxubUbEaxVrxwp6rh675VjJxfEgKtkXNBSYJsZJyHKSD5ZTZ9DXAAJi3Le8ZKwo",
  "key35": "9rqAWTHi9ige7xSutj8CFrbobwkozXn4CebLn7BoZDMLv9gAD42suBUVyygp3Y15p1QrKXZiduCCcxN1n1h7Bvv",
  "key36": "641AU8a5ieVHc6v9SiBHbevWAXgbbngVAqWcfzkmvTSuStssXS8NMHGKEe5XFqymUXqgFm2jabZ8JGmpM4vS9KFK",
  "key37": "47F97jyHLKptxvZ7LGn2NUkSC4U4XpUTY2ax8goNfP21SGuG1Wz627TFHd9E5jQndpMrvrWJdDyrM2UJd96QQry1",
  "key38": "5tyeB8fmBR3ACUEiQtmojDniWCc3EFwNBE1zgYWPyaFXr8VfR6TUfKGJjNqa83426KUN7js85tnfNGy8ac6W3toY",
  "key39": "2Vts3ceJcTmpShEbKUKsb9cTKH7PhGkNh4v8xfJdB6NmgWWqZTyyMFYxANszQfdkS7KftU9gtzaVddyN26bB3D69",
  "key40": "5iqp68aDW3jGkyhmy3YReKqtQkiTXyv1emWhGnVw8Qw9mEfVZJwEYhj6763sYnEDwVNvosxDdKS6mSS5ZFAo8DRh",
  "key41": "5Ak7yq9mAQeGz2BSZa91C864vCYfaGmiD7JdpeTkUniXQ5Cb9AXhYCKgTqvsnXGvesPe7eWMQibkERtANufRrLpG",
  "key42": "DTW7f91D81EuThBgczLRVHM9G46zcjuxSjaGCmdkJK4ap5xdQfTRNSsE4hcQfVZYxLkugU1x7WWfePbnyQxWxK5",
  "key43": "4aCGLMYsCft2oDuVhVNqM9DQCNNBhsGoug4QMb3bWGMmMMuQVpmcuzjhDYgHC4ez8HXkhoUyChL5M7BYpMCovvVr",
  "key44": "2AAGEx8Sk6dbxd5qUpCBBCP4sijbwhiQqHXG4uBiVWJNFUVBp9yHY8u7Uzih7TCYDZUnrhnCrobJY39qFdNaM4j7",
  "key45": "eEtJsrMFZy6TKH7MkHZS8QGxkfdPpXjVgxGGEq5tejEXjNT2oP8YpN7sYq5U2mY2jEYmmyphqxSTxnudDTLxx7r",
  "key46": "32xK9WSfvEyuCbL52Wm1uA77WNxXe2FueyzerMYnThfsXjrkQVJp6M5eQxjFUhwsyD13Md3vn2SaN6xjzYA7Xvoi",
  "key47": "2JspZQeqwYXE89tCukFoAKfsugWzS1pmGeyUa3t4DeE5WNYHqybLeew3fzU8dEnM4J52iR9ZMpexSnyYBVBosK6s"
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
