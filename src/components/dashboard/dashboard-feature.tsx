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
    "3CFZJZp7DFfy6UAMkPhbWUrXrCKrKKLNGPEzcPWibRUpVvSV44gqqL7TKe7LfGF1NsXZ6ePEPsqvEvjEg58octY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PDWFsqvzgMQsNUqvah772BtyQYVUMF7vzDnt4hjh4pm4U7YYqp7gfuwqkSxJAcDZdrZvR6roQhqBh7D3kxs3PA",
  "key1": "65ay6FqNDCeygxFboR8tUhDcUHweAphYX5k8Fd2tEayadRg46BCWF2iRr18a57nTmCGMh5UN3Bvo7Rkkpc5YjfXX",
  "key2": "2Ezo4epxW3aHYQf5BQ5FZWe9oGxkavLntX5z6GiTaqt6e2ZmiZHuWiBmk664rpRnAb1UEqym6NTwx56vJ4R8dttr",
  "key3": "d5h2fSEwCUePJrxbCQbSVfkt74v5eBVcuWUZhXUKxELbejHGLuwyADaMNY3yEDGCmTktTDJ3BuZmHDgTicTBJ9A",
  "key4": "T737f5AvpnK6Dm9BCjJAqh4QrN526G6rP3goiUx9rcjUMbWeYCCmhcaP1VncdCin66YxR57F3R5GjmJHW6uTHXK",
  "key5": "4kdRt8CH4G96LJ9ugUehv1BQ4ajSre2sww9Kvw5Z3JUYDy3Rq8BNMJkk2pXEfZbK3Kz6huQRabAmjL6qrYAC2zo8",
  "key6": "39jzyqJDAjwJeqEscZ5bhVszPSYqXtaqETBCBMNZrPs9wppMdxzQJcpNtwqKpwiwZkXkNzirqe69L84tXj6Pv7T1",
  "key7": "47w7QWJRhtzcX4ZoPphEAcPj4YWnoqR15oKwBnAx2LxL3CV6sML48J7QrxvERVDhNGtC9jstbvfA1vkmgFUX1GWW",
  "key8": "2pmQaQMw47Nt8Ug7PYFsKBso5vVghvLFSGdiKioNjynaYMWS54ACQyMSdeRL9DLn6P6eWRbpSASZXvggUGfgb3MP",
  "key9": "4CfcUHjQehLjpx94TjCEgofDzVgJzSospBu7MDCdhNfzF2hJmALgUK5M7ijcbC9qHsdugUj4PM3irAHTTfMPzHPd",
  "key10": "63WNe4szhAVki9Ezsd3XfzK7R9CeM2JpDD9777aL26ot9fqW44U4aaMaggmck41yRK7197crrix15C9g1bzF5Sq8",
  "key11": "2dv1EsDV75SiEWmuQvswaAywR6RLbqBretGvsKpvNv2f9vq1quVMcrMAxAdXWzf55buBWgsiGjvKLRaHGg8xkFhj",
  "key12": "4fceU2dxFxACPWonDKDLYB9WJpKgxDJgk4ZpJEg6igM2FNZzH1VAVFhJpPivNnLBMo1ACd6iRCNRotUDRcfbVyV4",
  "key13": "3gfKMPVpnuisFtCTmsfaYGDnho5zU3pS7pDiqzY58cEadwosRxnT9CcPxqrVxDgF8zDkEgJKochUNXSWM23VkBtV",
  "key14": "4xCFtshdgFYEHsBN6TqoZKDTNujMk5PUPEoxSf9UkLdhxPes7YtiH9BoXrf38dwy25zFWnSbjNuWyg8Gw3wB7KFZ",
  "key15": "2u9d1qXVRjbFSjQ2qUjnBzo3a9bo4789uAdmBbFgjVXtF8xLpThonQQ415eoeNigH2RHGvaaveaFDmwZ1SUNhzfn",
  "key16": "2KLb3HnBrFUidfBbsL2XXBpLC5xbm477MBC5XLnD5RjBTarhJS43f7BBZpDPTKBy7yqun8gncLygR9NKDJVGxrQh",
  "key17": "5J4t1bAf4Us5uXv5MN8QnVVGGNiTLkXStKcBitFvoEG5S6xKrGAiHX4snoBtgJLic3QVbydyngp4Hx249D2cwc2e",
  "key18": "EsWimhmyZFnt33tzFMDAUFDeTZpBmSy22mdmzsyTsaziTV5ZAH9dju9WbxkT27yZindQmFMN92JHhoBzNbqJrS4",
  "key19": "65p4wsjvQ5YkUFtus3sJXdacXHyWuYLEnZoXUTbqxggMY26J9XtMnVNMuBASN8yox8VasUS3RugZHrEpC85FNESH",
  "key20": "4am6c8SretbeNSLa8Rd7tTi4uEh5Wvm7zU3HZXiHJHzs4iQbdy8bmDiAg8bYkGipMrGYMbxipX6tV3EyeTAsUUY4",
  "key21": "BmWZSvsBZ35k4YhWteryae8JE9jBGYqFuHkxX2Pf6FUnyZHe5dFwQMjTyNrUfEsztNyfxjHSNbQdmBzY5P66gzT",
  "key22": "3oJGh2D5bBKEL5xNMtm7KwXsRaG2qbR581FQPjunabZFWw3eHzbUR77SRHoeMyZRqofqhwExv8JDLxe9PPgky3aX",
  "key23": "XV4ZUHcqGJC8sEyAExQQhNkcBp3EXcnqJiLXFsJrGe6TYXpvb9J8gfXRe9Eu5U6sExK54W2xDBbNZjzafxkWQoQ",
  "key24": "2g3tjcMxPZHds8sQmRMk1K5oA3tUx2bqwHR6PSoPj1vdHYXstaFzEeJQLcbiKRdgdF3hpdpFLYXXfXpJiSAPvWnb",
  "key25": "wSxWxcKWRnLWmniQMouUWjH1gynhxiBsKKbPP8JCtsWCpyif5inDYNfXpTeQ17qLZrYHGGmpqUuKHAE57GCS4wT",
  "key26": "2yFEtQUwWGk2DtewXPvZjqppPPLodtsMFsD19NV541iepxSHx92Mx7xZft2QzLTfEovqcQiYhzcgvZovQA7cJ9Ah",
  "key27": "2DnsSjtqDmvPGBGsWawwczHk5kyrFFkBoAVWft8oSQ3wuxmdNH8hCGhLScBjvJkchCqqympwZnWNGDgxvUH5VKaT",
  "key28": "2SFD5oVdBWkSJFnPmwtNoRc9DiCrNR8GrwrqVquHZuzx52Z9Zw9YiYqjhyg3PoHL2gantUPhTRueL5LR6ACCACnC",
  "key29": "2ewfYxBoFaPDHUP8DACMhe3UHXfBkVtwgdAAYKiD4Gawn6U9M2wfU4ebPsV7RiEJxduqBvSh2GKu9CDxJtfaWxHR",
  "key30": "4SpRjE3U6fWefL4y6J5knnhjKRLw3q9uWEpjNP3JBBmjyDRhT4YMnAeYA77dNLEtqVc1pCKYtuTKRLyBbDtC1mxD",
  "key31": "SRbKNktfSyH5ZVGf4PNFX6xj5kesfofmvB3QRxiu82swo1XQDyzzJkVUmMeRaNAMdpaK1Y5LEtkcjfhYmdrrUEv",
  "key32": "4JdDtfDej8rqtfm95mSSweF3nwzjH1hyvMUsq12Cjy64tMCiwakeMketzQUeyuSTVag9VaXeEPtuHGRQUmhjBn3P",
  "key33": "5VesvkLX4QK7jXcFoz2SxYe1WdJ5rHavajP3wyxQcuYw54p64wE1qKadZtZTefUStrrryRDYyDReFCZ2PoHLmXwR",
  "key34": "E8fLuXa22imDETUeXzi7SoSEXzeNYi3mLAbu9gWrwx3geKdoqJSiDWHucCJwBz37Z9tT83nHcvhFCa8UcU75PTQ",
  "key35": "5KX7jtPoUPXpNkseXAtGubUN3VJedPgXg1JFRgA4gjCA41y4WW5TrUddN6nEFmmm4j9xoJTAarSZdJL27wENSLq3",
  "key36": "5W2Dvp4PtV5xAvZJp3ENxvHHh6Z4bSpy5swTKRVdoYXkHMsGchBctbGetjx9oEg5VfKH38EyEQcwGAgSzczba3QW",
  "key37": "CaY2yTFKGb2c4agWj1WKK7HWkTRP1CYWP29NDqc2TR3DQfoGDcz3rqrNDf4Q8wUzYeXsa1zmg5BrLJcPgkg7wz8"
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
