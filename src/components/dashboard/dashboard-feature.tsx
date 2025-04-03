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
    "nnDxPc6hc9HEjkKzpANDbMiVWZmPkj7iSQXdsdLdra4jHoGu4eVHD7jt61Ru7Aqr98KKQskFTiK4omsJ5Ux5q3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pCpu4u8ASdxdEtrxZqumQU229BdtbX6dzAwbP3XuZzcbEA5ALwXj3CvpfQS7Xc8TdScpxHv4GVU7jDChBE2msKQ",
  "key1": "4riuJHz6Z63T5GLz8eAzLRuzFVsjdjQzV47cyM8QbWMC9p2HK7LyQqNQ3VdrQCvDbceL2tan2KVgbedfb5wtRNKo",
  "key2": "4sVoBi3XeyTwctFyU5rrynswj6w9XP2xx3CAbijyy4xMu68ccDp3RKNuVuHphvh44DRPjcswsH3sUUKeaJRf3cj",
  "key3": "mNeAxT4ZpCHH3x9qNdtAsEXrg1dCQUdfLGyKJzpg4R1fhQc8BDnmRZJhpYkkbfm851T7Yy9rbS6L2Jbkk8T83vB",
  "key4": "hiNuayLtEgSuKKdi8mhb7VBhmFMBYwADpqfCV6yNXqS9VJqvT3TqMXE5To9WFUvssW2uWbdxMJGA6BtuY3YWeFB",
  "key5": "5EEMe7SgzMzBqnmxGSQTAarkJ4Ho9k1nrRS3RdLNbVJTkvyUyZ8d2aYAZ2VqS3YtWUMZ9NRJYwVUmWShCGqa1W88",
  "key6": "YwCG7usWqVUqiTJY9kct1Ye6mHywszEhqjQw3yb3x2qQv4BsUUTYTHJ2Up1wt5AqksPr5kawgHPqH7vWPWqEs3U",
  "key7": "28WFJVhW5dyLyAU5cQFezLR1Un8E8bNcFupyJD6bTnyYpVyRzPkSgnGJeuR1DvVm8ZH3a1M1or1ztR3nJZKnUNMh",
  "key8": "4CTLn2tidxu59AYtxHKv3WjaxXT2e1sc66ynpj6kVfBeU7LpXABGhaeQVrVAnYyEXdH4tGqiC1GP2aCnAjpDcJ6Y",
  "key9": "TS6id9uV5XcqZFj654TG1H3BbTibXN8GAThenrMCje7D5tUgTeoCfXQBcrEkzpvzVPwLY8TjwhDGnYRCo4Z4gM1",
  "key10": "v28hLtynH7nGmKfxZspfEqsxyxEserkocJZT4EygwXZxnQuSyCwmP3rGb4hXHCkuAeN3NzTsywKVgEgYas6f96Q",
  "key11": "343neCUFBgEXE2ojqdxnujN3hWg2yu9xM9xoCwEVcGPzeTpGNXedcdKAk7oTbrB4Bv3iiYbiyLD1BU5wgYVaQtYQ",
  "key12": "4xgoDRtMYKR6SWxZTqgNaSwefs3MowBhHdVLv39rdz2sTDQAHxsDyLzFmorYwPusdHBru1FUPKFvtix54XD3ZLDk",
  "key13": "3t5rcvs8obdkCsHUjXJDjaFQF8sKcS4ry8d3EMJjYS8s8QftjBaRd8BswMz52v4VAAxUqUT3KCKRvE7Zgjh76yqJ",
  "key14": "3yGwShZtGv2vUjCPfCabsJnQ79BLAWckbj4JyPPdcFRUmQvs9wwjULJrGZZyYFZNXXCej6Sjz1NUGXHeyiV31J7u",
  "key15": "59ooVpy3X4xbCVQLohjhyyF7Ds7Zpsec5jzHzi7DAn8HWaaffCREgojJk1UTGu3waMr8cVuHNTX7esXpfnRbiYDy",
  "key16": "625gUidzZURj11aw56gFkxreNaCkFvcr1ddByCVYHXxfZErnRGReHPBuVpo3dLBQRZeyaU3azT7TSv879Gus9BJ5",
  "key17": "26u1SZaFmawt5G1fcS9BxjgX5cwiN6MfE1PHnzT92R62tdHMT9Nqub5ePToYpzfhSNGzYxkXXFmpRjXJjEXXNNzK",
  "key18": "KKtRZqCGmLL7o2nbegPC9ZBsNmKv3iwtiAfbWmxALyx6xsg57Z95A86wZgY5WcisP445FGNHtpvTp5QJtrgeLvv",
  "key19": "4sCMwLqW53ryyVGVVZVydD5HjDPTNMqEZhqEbj3QtroM3vsWgyLCYJmoznB3d5KxiPhaURm1L64KkhSk38tdsygo",
  "key20": "5a4ptxfJT8TJTtHdPU9rftCACfXDkjD4uiYTBpJeB3ndmL7cJUn4v78mEFdBu3bcVVbxxdHwuyWSs8H7T8Dq1PQC",
  "key21": "ERgzXqpHGkdcLoQ6v4yrNg6GsHoLFXGQxUv8jVHTAmx8HYWVSxu3S1kjQuXSao2PxrcZ37xNB4L8gqMfXB14VFn",
  "key22": "5NfSxN3v4eXVJ25BYPJBReX3XgV2wsutDYscpgU3oEmsWbhv371XdoTz9UWv5UHn932bimwYRP9UDpiA7VVFFhzg",
  "key23": "5pmfi67kB1rZn4vgv5VfocnyuqU3Xxdxw3Go3Mrebu3e1gGZav4X3LFpDDJPdy1nUrPVe8fA7TCmc4Nx8XmCNjsu",
  "key24": "5tSioRpJz7ReBK2cagcQcS49BQht9DuB27Vz8jAUh1aq4oJiZq94GarhQnr6QocDsowsY5rz9oxNpQz8EjUXY5hA",
  "key25": "2LMP1Bsbp5tBWUgmob8yFzRKVhTLtSQ3kQkSLMefEeCs9DXm1DPYPz9nvpqRFnbjreLQ64asYVYEuce82GzZNhhn",
  "key26": "Yj4BUdAsrXPfmVnx8hBiFAYUYsN9v65BMWcAA1vYqaDfmc4eFUdc2JJNak2zJcJ8nFwXGQZziNURxpcT1Z526FX",
  "key27": "49T5VQ69Afps4pN96FjuBxUNsSPcEqaSiUWdWk58A5bsbd8xikEjXXSejLRETtfA4yVK1BroW61vcHxRzvfKDmJ",
  "key28": "4fvawYoXQwW6qrxv8BTuzu7AqrHvazyJA78LrqaEEkBpFGYju4zYGXU5sMzUXvdchm4k6KTWGnwqJuNTUmXMqyWS",
  "key29": "FZB1ymuNbXr4tw1To7WfaXFPUB5hMdb5qSC9zedw4ji4uxodidkgCSpmWvNkXXNWngSezahCu4uScK2PAE5jMgE",
  "key30": "GRzN2efcQ7bQqF6FX8UoeMjGMeiStxsDYndjVUD7SPiRCVyB8NVQpVhbk4n9krTKWPN3PSUeCeP3jZUDMjaTe8m",
  "key31": "67FLs5uKWJiShtXDhLexUMAGcfDvBkdyEKouBrzm4hSJ2p15UETsEUgXDgA9dVsfUQnyc9cxuLbWMxA4NvKE39Gy",
  "key32": "4ntxMe4fvd2XmH3FhKdLW7AyBrBqxV9wM7XSah13NeZWTsjfYQcmKGqi5EHq8PyAc2kPfmY9HYi1vc5xyadfxcdr",
  "key33": "3BZm5NXzePhjg2fZVmuvsUq57pc5xvvZzbDdE6ZbinKNc5oCemqgNB74G1kbHsYgccyEZPozHLX8Fxka4o4MpzbL",
  "key34": "4Wd2XQXhVZAJN9eemUYG3romL3ikjSQtB6kf54cfRD4bBDRA9WLbYEzJRFCzbXpFQrkDFk26BEr9LLy5jMYu5X2Y",
  "key35": "5kPST7ubJxGkFzTvqEU6DbYo48wdGJkRkVM6q9f9UAQWNEB17ngp3X3tRoas6FdGtbhU3wjMYwXV7HrVTDSNTWLX",
  "key36": "5oEjjaBHWWqhS9PzcADLjPTamqtqGGiRtxbYjXrc1DAxhHur43y5hKCks9gZRajjprhcBmsRvNEahxnfzWnNjNUA",
  "key37": "24ftvUs7JAjn8wvXrbqvuGUwBqdy8Auxpnrdbxqcmj9oGYfsCsbxDwcMD7eGfAbmxkZTbAE7qn6iLVhNsDGrzyJY",
  "key38": "2GGHE7KarqjB4PCJMm1EaiNGAsYdBVcpyWti1ezkyXCGs13tqcV2mZ8XPhyst8mFDzisTLNZhHGBLDMWhkgpH2SE",
  "key39": "42azjyFmZFKjcLrWKpz97cgVtpnGRrBLSKako3z1s2xz6feCxX1AEYBCfBQrsk5czveZnETPqJCJ3vaBftCnnDzm",
  "key40": "354H6kcfxqRxjAsQcTjGmUVqEYQW76Vodf9nWib9L25zqFYQm31WU3Rvsn2HRcSfp5KBVKdUZiQiL1XqL6nCxNMe",
  "key41": "2ubC2mntL2PEmF6NcGFMWyKhUetTqDkznK1uDpdJafFkNL3bLVZcz9LTxQ7Ytu3iuR8uHwKyWBMhXMvDsYXPw8tv",
  "key42": "4DG9H2koiqyAWwHhqpnD3BzgmsiPudgMP43SaCnu7j4Z18rZTJvcfoXCHguyqfV5JjN3mYSC6N5uxtCf4ZyK8R9t",
  "key43": "4BcHoo9zfwiZQC6bYaHAiec1kqXw6nSYwBP7AeRzNQ3KEyiSoY6XrRr8hDWGBayhJNWAyzthe6NBzHnNC8277CVp",
  "key44": "WZof4z1mPXcnvNKBz63wSrZDvyYry3dVZ8HgKEDBPs6jr6qSfAJWjCtErPhX9AfdpGprWQvpuW6dX4ctesKyL77",
  "key45": "4nfjEAXYW9ePSomN77pU5hdjo2FpBU9fPufHJjZn9dcyw8SLWE4HJtuJhDqHK2RrbN7evSWuUMuMePVAAtxpBKLu",
  "key46": "53MFWpphy8QrvQqNV9GEWThSR2URFtqZwf12CAstS2pisqfU6xUtXVVSyAr46ff2Vz2LZGBgs13ND8f16ZL7LJDm",
  "key47": "3HF6HhaHF49ogqj37JXEDrQxPmXWrKWf98GVgHCdTt1C8MLPcgajPAzDrSPeZ6WCsfexgws54YoZGJ8MRcU3En8u",
  "key48": "3Ck5szVsYphUCDPg4jdoEiH7gTFmQt5TDGVG1HSAHhRSRjWhg6L1enZeVfdedfgSYADJ2vD5dMjCA5jnt5LjiN8d",
  "key49": "4t4KNrGeEPeTEiwNz5ExCUPcP9rZH5jyiU6dbTjqBGSg3HgxZVh3K973gne3sHibQHPJb3DdTJNcVuALHvTJBr9s"
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
