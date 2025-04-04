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
    "bZiWR5qJsUJBSPtmPwhv7oK25hPsBoTM2oVBspRxmzA1gVjtXFuHX8LVp1BJ8egaXtC6Bn89mFwXCkHQ973KiWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33dY9NRDk9LWAvsnyBaLz3a5m4gnPDRsEhS7bChLZfThvbe9kdNpX21Lq14RNLzpC118SpxCTLMWBqjhTkDn2rtv",
  "key1": "ewc5EPMkzHaxEMtNcMRN4v5YX3NxecZrZ3NwjQUFsPsTvQDzGHirCpqNpHSFWBHTvEqdegZLM11uwH1tYbF2Vdw",
  "key2": "2r9au9Jby5sF1NBVRE3idLNiDrDEudiLC4r4a2Kyhcu6M9DWFNwydsmJ9QsWjw6W3t2vMwzxHmwheZ6RRTAvLmgR",
  "key3": "4J9diCB4HFkBrj855VoQB1x2YtBcdgeJMVcCrKhb768oXWhaxMLsZUZgeEZxjUYFb2KLtNEbFcPrBdFXRSvga3UN",
  "key4": "2SsoJPLXW71F1TeM3teQvb59RRHVfE1A71khbXrN2HCFXkDk3qS5Y7cHQVggf4vU73BverrFvnqyf6SRu8SvPBFf",
  "key5": "4HgPhQ8ypjVs5BtZoNfgKn2tSoQq5byeHFF43HnfZcJRYnrM5ikQ58TegE4RTppSfvfhbtiz7UqnrFrf1WXjUZ19",
  "key6": "2oqtJnHXcw6x99oQpuzdZZ3wm3a7M1bTD9QT28G81SCYZC6GeiNJodQYHPP1aESu93qvYpQ4JBueNqvqoKMWvcc3",
  "key7": "4QaBfLG1Py6G6qRxYEJE27XDwhxbjkzcDeWhD3qrL4epBWveGJ2fM4Zv8VzZ5QwbefAWkQhE8UMy1q9ETpPiaM3y",
  "key8": "4bHTmcwEqpD7n65ACWarFssCix1K6JnFQ13CrgxfUskpeTPcJEJvXGx6DcMZ7ftfwEFeaBMqC1fg7t9jeTmqpV8f",
  "key9": "gjtsAHnWmgLBeib4yBnSSkTfCxs2CUAx86hLdzhNikAGSWqnjVbCmqJ7dWp7J6pt3qHxftoESsSU8LVdpHvxuTg",
  "key10": "4HtFqWhBzFXwUtedbCVoDJrYrY4exjzUjsew9ycpUCYBsqG5oLwC6qkSMS7tnjKhYrXorCz6uLHrxz5kdMkFtae6",
  "key11": "2obZpYDF2xm3AvSgLJtxjgYSAp7KiyhVYJU8PE13YcchcqyxRxARKXobr2xz4TMdnSCYge3UvXcfuk5M8XHETvBK",
  "key12": "4V4gQ5qUU5RQxsGvbah4gavXMPx1Gye1jjAoQMkdDQu46YBg79trK1n6PEjQqXHX8xARUs9BBrnKc4LLgt9KXUjn",
  "key13": "4tH4RsFPSnWxnALMgqjErps7BXfsvg4jPNALa5ByjEBVH7pZbns2AkTA9U7f93VRNb6aBQLvD6Ejr6WtzG2Kws61",
  "key14": "39VhtH16XsGHEeQFLKXrzPJazpR3RC7FRTEEKev7r7xyZUkL5gKDUf8Qm7dknTcNKNig2QmRVQJxXdfHLf4EPPY2",
  "key15": "qhuHMo663J4vgjjJMmQPSdBr6eB3FMUxYNREM3eNHSgB3grwjZtnh7HyrezRDDHSDZ6uX5No3DTRaDHe59Am8PT",
  "key16": "5rMQMQkf7hXvK2bndaizQ1qjDh8N81YhJgWEbpC3Sw7V9Y9BKTQSFFDiW32HeAikkk5H1jxNmAxyGJ5ZbGsJQVy5",
  "key17": "25NPMU2qVzLePTXZSxgbj2Vdijm4TncQnhNrCbmmffSD5mGXXiABHc67cLEWVyPab5Wdm6gpvcqJA89gYkQPDvAE",
  "key18": "5HMWi9GNs9KTYkVe1yu6GZ9a6ribtkjUmfykaLw1FHwTkZiCDTofke3HvMGzNZK4dZfB1Ak3Q3HhQGaCs7j4KzHW",
  "key19": "83DMVT42cZRmvryfTEnK1u5WT44DBqcdLMaqP1Qa1KPgnSWz8Ls2s9gspdrCmsHDS6n6aA4vGhwGBmqMN7jnGNu",
  "key20": "5bLwbkspmCQfyUCt6PRPMY3H4Ci5pTMwzFJECMyp6bFAsDcHLYEk3VEhNZogEqGF8p8zYpK4KGMM5d75eMBmNFYQ",
  "key21": "5FzeSvKitvf7yUo5YiCVhWEwH1nZmZGxiLySmKJG6UtjCCXmaNtAv94VK3kixsJGnt4EDfN6Ree8xVmB83expQRK",
  "key22": "3NS72WgJizaywz7fiMAMGsQ6mhTLy1WiTixysVCduVTT4L25FbMEcSJAHcZnR1qF9GMRtq5wJbMLt3eJ3RCR68gf",
  "key23": "5yBRxQXdVjLVC1UM84fNLb6mbaqcjgKPgHNGouUmgpMn1BPsQ7FvLYWrThW7jPemL4cdV5Zw6HyMntnvyLFFacfN",
  "key24": "8Uz8g6uU8ZZxQfVrf6xdJ6ihfU5QC9FM23iM47u2ZYLVA5aXFJ3zEom39eNAyJEDDKWz8P3M326dqLgHPEPu16P",
  "key25": "2eqDVjYbZYjDg3X1bPKLAne1ZUpHANdReFsSFJxwv6d155VrQxjcTkPWmtWPDGdf7BSBgnTUDuHp2EyE4Ry5Etgw",
  "key26": "QCLbhjtZ4mTaNub5WsfgXnFpH2dP3WoWuDmXwJtH5XEGNK4YA5eAkeBdUqe249UctQqzcVDqt8gxRUQ4jER1UDB",
  "key27": "5RGgWGmfxL184CgVWY3bfQKTazTDeSxz5siuiNPJzUPazsiHAViLBGAgsK1uRK3qXXzUm1VekC5T2nFdyp2DxQE1",
  "key28": "5MJ3nRDwbsJuHewrPaj78XZwqUXHJAFJCQDWRu4ZmqTiMMwz53gsER5EVFioNTQfCuCbu6vyEzbYsX5okfQAnrEo",
  "key29": "3eq57GW38zJYjtqS8PP49VweQ1kGTPM2ax4mMgSJAB7akBw2Py19G18Mqx2X7unKcUhuWVGat5XrrdJoDGCXa1md",
  "key30": "3pw9aRw8RptYwWd5n4xmrwEpKcczi3xxTTLyrMtYKPxYKFKw1bVhcSAZbfpYQWN1wfLomD5Ek9EHujgNaGoo9yhU",
  "key31": "3xB2441Wj8qNFNUsc3nSynbHBBDmmFxWzyTVFHzZJpgnds1L3rUXjnVNPuNkMiSLeT5adU3KC38Trh5BVuCrLm9f",
  "key32": "62EvvgA5MGL32fKyo4iQPqRk5YEkTxAP8CkVXnATrJ6f1KfS3dtZtZCMLs7qWfCXrscnA46VqBq7WsCtAGBLcMEP",
  "key33": "4ez7nehhnCjiPJoEv89XN4GEgnr1KA4RayDCHEGNU2rpWYcPefx4PyuRju4kSzHWn1uKtthfGaum1bxLf9gAeE6f",
  "key34": "yWgxYJdbAwd7DV6WfUvD7tTbhaC1eV5Fi5iBJUQeGQDBpMw5bm3UHmJ2BZbPHKN3wnvwwobFFwNpTuE79tryozi",
  "key35": "4H1RtBYJ9FBY8uMTTvAZ2HwyjuscmC5HdDYuXoQpj4MZ4nRkD5ZURwu71r35Sg2N48enr5HeMARA7MA13iURWzxg",
  "key36": "Jgy6hirqQiprMVKrHG2KnEpvLgfqpCKSx39QDRwYzmRQ5nP55TyCgmjJDabtQtzUpqCSxbguRxANnmDgnNE4qvX"
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
