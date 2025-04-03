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
    "3GaPh6R9nVy1SKtdXWtYpoXCEskbFGikJ1WQ1zQ5BzxTsdG8vxZkQXxJhWMDsjS1RqBhYieja3uKBXCNg9uERAP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2paVnZeGEN6tX66RPaS5CqWVrdjChb91TVY8qNZnG3aPEjQiKCaKNUXagAGm9osyJVPDyJh7qdooC3M6g4SfybwG",
  "key1": "67QfLomD8gvfwk7zVhxKNuby5Eofa7PG4QiM721gbm35zM3kBRuwqKUyBrsVpBZxboQvnBEnKYgqsBKKe1dBeVa",
  "key2": "2o1LKaP3DZfkmViZtBcDeVeyCcpxKSk5RWsB3AJUfZZCJYsycPDvKmxKChM1xz9XKjVLNWSRKZL84NDET8TgWy8r",
  "key3": "65QeM54HgchJ58JNAYZnGd4MCVhkotWHtKg2F7CvHpVGsJJyWh5c9Wzvbe5gex6W7EJXAbvxvKii6cvmtn2BRhBo",
  "key4": "5e1QK4mLeWH4MMPzJySrxznHW32Z9AqzRYQdeXxQorxu8NemQYGvG8usCcQbhsew2nrET34hL3Ya7tmY4twhv2Qc",
  "key5": "59Z1Cd62npAzFmiskHtseBp7VydauaGNTwr9TLSrdvrWHkhN7R2N2C42TMZDrV8AziD4rnQydMvPXKtEMd2LQRPT",
  "key6": "2bkZ4bauBD5UeFX7xj9tBWj8TReza6rzcU7VYQCfcZsQphiHtpkHmtgReUwdawHoejW2C4se9JFe7eQEsmQSx5Ki",
  "key7": "2bFSw5kYLsTjNbpnHmchPSX6fzn1Afq8GuU3FH1Rga4WVWBMCiDYQktCXNiUb1evikYMWA3Lc96zK3pXRkaLNuxi",
  "key8": "481aFWHEaVrFA6aPDeHiGh5mKiQVuAoCoA7WcvwmCyoU7zgqhiQaUyV6S2irNbPPmZcRaxKdPzKWHw8E5f3z95QW",
  "key9": "4coG9sSqzv47oyw4JkXVYdLAkE3J1WARckmo2y1T8B6bQTpc71m6c4SdqifP1vZrmQLNgqv26Xz4VAKE3Xko8etc",
  "key10": "3hGvCnm3NjBLwa8xaNarHXhxU75cEynN8dgGWEtLVeJ9a8peuEXBTEqnijYmCghyHM7Eu2SCYDHYRNh52JJhx2k7",
  "key11": "5djA9AN87JWfwYLUktADcvmgK6SH59k5N5diVAs9CEdumZFxncncpqp6CHXSvd3vwV6hYAFAn6pWSqHCDwZYS3rr",
  "key12": "58UjACS61toSRerwm7XtTb2ywvepKgY8jFB9p8pqQpY9JdiNHu6SRniKo8EHBTLrwdcuM7PV99GBQ325yPt8NTof",
  "key13": "2KkXJgjCdwPFphbzRLhGdUwsVLhhtPk1kfkUBDhiUPiGMbAWR4ZVFifS51KxaBC5kYyAYSiNZ8UVBuy4zYREJxy4",
  "key14": "4pTADnVfrqjemM9YvK6ed4bpzfCoLQLoX6KigayFbwWuYUjRSv3gdBV8p1kq8MVwLs63zWCXEy12NqrDNrBHZHUK",
  "key15": "2fesFuKkfZ3o3m664eDdsCvCmBEyHhqCYZqi62pv598KMhysYVGXgusZR1aosg8W93ZbgkT4T1hBSx3peWYxy3g7",
  "key16": "owXc86bHuNaAwKV6jNL9ZGbCxGk1ZuLA52xBxLs9z3iXfpGTUzrRti4bCPRPrsh3vvP5g4LnjpVPfnF3WDpmPzc",
  "key17": "43u26rxnZG3SEzsntBuueTQhDGLAAwQyhqGps7YBtW8di8DvAzswGFUJ9FhS2b5U2itA5TDxoszXt96LKwmgCSRR",
  "key18": "4KBSu1Fz82st4a2wXD2heK2Sa5YmBVMBtG7dcdz1BrcrFuFFhGWWVhzmkWjY6hL5qzMvsouMPst2rptiYqSZr5fK",
  "key19": "qtQjeBjHfGKVWo6VenRjL51x3wSxufVmqQzVT3Uc7ZDeBS4QZTq9WPu6VRrZYDGAw2r5mzhyPP8qUXqv2RE5ESv",
  "key20": "4ih4wFQosM6qHZd9cPhyUHscx5FYnp7R9yUB8qUnNMoaeKk572QGinMdCcV2BkH9YTuDEYRndt6evkHq5bKGEYte",
  "key21": "DXUPVzx8jcnCDqV8apm7xdLFqQ7Acz4FoGke5My4UiYp7shgWfib3tzkBbzLPTRe7xAFapDRFZBZpM9Qj3wTHKt",
  "key22": "soL9AEtktU1kggmAdcLw9kgVvYc9bQyBVf7fv5gXs55hYZHGXuN4Z2pX4y28tdnyGoa6sVTcqao2W77jmVj6d8X",
  "key23": "3vRgjoCT3QiushM692KPhPvYWJP6zkU99X3hnC2c9uEa4VtqCTG59sKvnMkb72enHMxTYjohXtyjx8mRiH5HGg1V",
  "key24": "5UPagXgAYYmvZoJ9mJNnJMrDLQ6dYF4gpAtBoBmuCUEevDRtpJ9rENzmhW5FUEjksMcWzwmnD5svNnm9A4Cg8qfD",
  "key25": "4stAUn7cA811Nx4zLfC1Vk2M3STsmsmnj7Q7NeemEvjA9JLSmnDYzRf9qMyBT7WtLTFjDoty3QhnYuXi7UzgbUm4",
  "key26": "4Z9SUJPwrh5A2QcAE3qv8Mb3UY9ZiBjc2i6qU8dzU71QrTKiENQhhpTTxLu6BZ6MZgXEPNCqt3vnuvXxBySSxEHF",
  "key27": "53n5cJSNrRpmukHG77ZN3pV5XxpxtQQXHtvxdhAqRbehzMV3cFitRrHXRcr65UfNyDjUCTRokgP4KqoRGsgDUWTM",
  "key28": "2ynLnoKT26Wn5RkjTmX5zde9MiN3PjaWMBoJph2Kyfk5adQRTNmqfk6LhcBL3tNKinioBBjPK45ZqQWMR9eYBdAF",
  "key29": "4qBKjTMLnodVVC8Qftrxv5KygC8yV5gKThpsVyhsF2owx7e93qb1y1CwqH2NdkpQKvzgSpvTaffjLrC2VtUoaTmd",
  "key30": "4EvDU2fc7XCsKTLNZVdWNMLCMAAURvH9wQMcNvHgK9jZ2P8ndy3g8x2BGZpfLY72JXbtzYmhzm6QfjwUA9bz7EBD",
  "key31": "3iSGzz5MYv3JfG5mgU4RfrbcwWB1nvzJ45aAoaKiTDjfjsxZKceXNt8iZtDxCys7KjQm3ssebyaiwS7UqvKCWUsu",
  "key32": "GZtBZwiL86PX7GTTw5EcVR8QR7jNoV7saNKVRSJ7pALA9sF4Vb5u6JnaJNYrXefVxkN1JyVoKut7bFLsUfaCVMd",
  "key33": "33BJ4BWNCxdbWStNsTCerf1vxV2MoM7JWH9dfbeUHmrRmTPEGysQ34wUyNS1ah4Q7MkFPf7H2zoiNLRsz5536fyj",
  "key34": "2qNYQm82jjN8mefYVMqfVGc8Kf6HGf5w3BCw7cdAd9TizPd5UeoNt7JJsx4sXkG19khF5tkVWT2sHGYxYEna2BPA",
  "key35": "67EPfDvyxD1XWSJomZQtGZscgHJaRW6CK8bmyXbDXk5Lhi6pHqonUiWtNYqUFZZ2dPqPWDpqnRXAVUdKAnn63Yoy",
  "key36": "wc7TueeH1sL3DfM8DTyCS9W4uwg8Gh4MBFy5FEcSjA2JXfUsSF8LGtP9BrCbVE27q1jKrfN1sDpUvxgjzpXuCYE",
  "key37": "54C8J8AENqmXSvG1q4ckBxXtJofF4c9ssQbZB22A1nRCdMGikc5R8UZGuCmDcWhFsHWJKQG95A8tPDX8rXJegaZN",
  "key38": "26cPb3PQ6XQJi4r5oM2yhtodiqFxgSC1tE8j6odt47bcMcGjqB5JjH8wnPJcbGBm825jaJbPedKmPpgwcNF4wDbU",
  "key39": "4ptTrmcegQy9arhcWEkUNsjVWg2K9LhZDtbD3yGx1eSp7Tad6XyM848AWHQFybpJoyEW7XtgDRVswZozp1Rv5iUH",
  "key40": "4Z5GeLeYGQhu6S5bDPhAV2Q9Lvkg9f9YPuwis3y36YiwAk42Z8nHxLzqx4o1CUD83AwLwVYNcf1WAhhqWzcyWTKD",
  "key41": "4AUTBWJcvCnmrMof5CsJ7dinbUtXu4Z7hTp8MKbxJZ2J2aSUJzcv8FPQcbKDrWQQ1uc9y18RdGdnFff9S8BUbC4e",
  "key42": "4S1Y9E1dECEa1TUpTz34omUtR9yd9tpWChKixmp6rL7mMd9TMWT1d7hTAvokN6mWy3REXgvxBPSuPaeqyb1ZQB6N",
  "key43": "3WSwmgBE29w9XGq2bVWnpnkMoZTHjVVCZ6YFTohJxBnMHZjpktMZdQ3X75jhZKDyQs8RrxDPicWQBWZ5J3ZL9Uph",
  "key44": "4GyFUipGDbxk21ZyVHU6a3pC9Q33hxsNzGADAFKoggD8p5MzfNFzghcar8oVPHMej91nHHHc9CUCpUjqufsnr9ss",
  "key45": "2YhNm63eb77LuajHDE679rtKagLZHtjZqWpprdiBSF757TSK3foNfTiZukfR8B6nC1Ai4qJjq2igzByHVaNTsNBB",
  "key46": "4Dv1fFWAYng2CnHh8oqr7rkTxwtFNPnrgiNSP5ReRKEYbf1kAYGfedmYkiVzfSuugrfCcvckkLY4aSdeBZL1W7iC",
  "key47": "2fa1WkfssKfyJAA4dn898tr2jhFMZLHr8qPWcydNkJ13xE8gqo7gySsBjtfxUcwipu9cX26RDyG58uAzdsfoQsMu",
  "key48": "2Xs9v4BokoqTjymPJeXqF7FwthS4ZDXm6cC1AFNPfPKg52oEfpBaqqtkEqLwH6ShFY7bmgTp9hhpm6M9EHVzBX46"
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
