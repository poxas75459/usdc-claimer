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
    "4mANAauS322fAQRKdJJq5htZyzQm4nL1bUVhGEz8RiuPMDjFYF4ggKckCRD3UdpbVdU7C4SAjQDMR8WnLrifU8a6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NrsnDQYVDvtuhyET3nQ1vfS4ym2EhjmWap9jyB5kkHA5AeYQ5wuwuv1S53teu3o2LE6i89ftBnyZkDwuVwyUhqM",
  "key1": "46jmHvzHWXm5ee68wnVeqdb5bNTgNh95N3qSqwCrC5TWu78uSNNLRSiT9pbBavWe3LAoeZaAHc872KcbekbTczoY",
  "key2": "JD1Us4XSXsznYF89Rx5P7tw4XNgWARAYWmaxQBLXzDBRJM32PpU7ohBTx3pGhLrihaYNbbUybwpCuokjnqWT7Ld",
  "key3": "3A8Hkk8pc7H6iqx4qrkbtkjtc3kfZfdfSN3PBJvSG4PTgByRMciLi9deGm8Q6jYUA6pAs5nonk3FoJQUTn5teovN",
  "key4": "3GSzJsFUnR94dZYjsHBB9MpTBJZGicCF8qrPQDFsKkQZYTFbkXeKSmz23sXxWUNCXqrSmdahKFcaMsXcQGA1XmyF",
  "key5": "zJGxeyJuqsPF41fhuFgSTw3BjK3fp9u7Kx2bj8RuCPaXfYdgjoHyUQXo6neicUw8vNj5ukfyFydjeLL6GgEN1Cf",
  "key6": "4XfR6MuanuHbobQWtrhKT3P6hZrkgFzfbJCWi32vxnKrVCyuQoDfM8RpFqgtfA6BYU14tN3C67gWYSQjsytXqExA",
  "key7": "27bGaPwPwnPpHV65UXZiJz7Vs5ezbGcyzQe7pkbdrenyEETnrAoyECC7qfCBmgJXrC55FQTZN6V5x23AHfFuwpet",
  "key8": "4PZ83pCz52bCV8CKwKdQS1gwTQ3cLAsxXv2CgV9soWwEbXYpRS4SRGkdUmt3BdLZnVcsDQNkyYZP4BQXZLJEZEAo",
  "key9": "4P5BTW3AhYoFT64LV5z5sc5EARkBZS4zchUvUo2MdSUp3VWUkXswGsWoqHLp8H2RX8aBbzS38Y7XstFQ8o4gu6mb",
  "key10": "4g11t8THLqt9zfezJM1JZ1GGgPhYVP8n5MKYc6cwjxBTKqe63v6SfHJGmYkDtRcbE6NwzvEapybnXheDD1f9fn2E",
  "key11": "qx7ktuYJrdEw4LADosQFpLAvj2cCBrKRaXFwEbWSTSTyK9RMEKjpDZCKYyE2v41QR2ERQPbiRCgin2LYe18sTav",
  "key12": "3eCyUMMvDQx2iqMUDvMn9yMLScHsdLJR9xCPd7X7v99SVzuDLLH2ogjDDkCxdJUUrWho7EY3grF5FK3sXPCFpSNr",
  "key13": "24fmWwWdu6Ud79KgodfUdvQbyab2UeJo4xa6iEWzPHinMudDy8CwYEgPNVfW7C9g7urUskH1P96aMkAVEdpTuV3m",
  "key14": "2riXvmNeCUxeoKPgsYePanPUvAWt3z1v3XToXA2f1JXndSECpx2RHXbrVttyRDZcZExpVzyKZCqi9z7V5Qe64nCe",
  "key15": "2kVjN3HwVRaFffePReve2XsXSSfMsTTvRGgHQSm3kxFNkJR1zzqGTWURpTNwghByKRZjhDveUk8ib4tTYbSo7zmb",
  "key16": "vXAmwmXpSeoaNogxMh3WwY52pitk6X9Fvt8wZ8ufzZMA9EzyHTSFB3Mz7erioPpDxbb6mVdtGMRjwJYPVKv35sc",
  "key17": "3i9PaeJWJQUqxp8BpmpzPC5xh5CJNu33ujV9pMyB9oYdUGh7t72rqyARtuMNZnkbiSWxqKc1vTpTsNmbUyBkQprv",
  "key18": "2Wx9DmXSXXsjGBttLfEb9RPw6v4y3AtjQLWGrAY1pJvXfmwuyDN7a5Hx1sUrSRT8yXAgjQovDXKht2erSdKh7YqC",
  "key19": "3hAXLSczfF6MnhkJchwSWg3cPvGv7T4F3MkDQNkBRztKJaY6ppzeFLuazdXpsiswiq341Fy5F7gqWaZn54GKeafZ",
  "key20": "iL6wMyFBLNjF3XWf3BZB8uwbMVYgNniMjPEYjzy7YAthpzFMUZHrBCYnskmyNSUKr97YkAuRMU1iMHmNZ9dQF5R",
  "key21": "63Nep6kxJfpcCD3jf8M4BqeS6dWZ2iX7UWrE8c85iMkNtFdBPdnqnkLb8n2JvzSLeeYqSpys87fBiJP7phdxHofB",
  "key22": "3Y4oCiTch87erHwJjPNA2ZRZKAVPyzgL831icYXD4zQBhNxr3WxjRxAtaYfktqVfanPNeoAA32dD7ew7jstEmoWG",
  "key23": "2cLrai15Ke4pUHckwyYf4dDG8cvzxkrXp9p7fjDWaF2DUtJWfHAs4vHHBBGEvRTq9ht5JvFEXL8ukEJw8Emxgqx",
  "key24": "xXC6zPzt9CTmykmSPmL6qXcQDqFxaBz8KTxrpSF5NcGB7fP6r4GaUxU187nH6duqeLfpX87eP8kKDtubqodMq86",
  "key25": "4LhV9wS2YFAKptz9NF2yAEmW8JLyC72vNNwGVruLieWARGVW91KNUD2gF6AeU2Dvao281szKaj2do6NGtU3YbXEA",
  "key26": "3G8vZMqT3V3iSLZqdkiTq2yAbBYGHrkoaNVhR22ha8sz4de5EtfFjauxhsYhxhjEpQF4AnRkHsLzGZ7mpg92Pepw",
  "key27": "5daWWdMLhe5Jb64Hx8nBWv8aQQ6F32H8vVHwRrW1qwcaKxgvuASvXRbikauiP187QRLjBZCc6YwuWv5o9TmuAPQL",
  "key28": "Aq6uiQxcGBmoJgVB6KkdJ7Xengf6oi2Tk63nQDFq7eVT1cFiQcyE3iasqdHBibJK1zn9CN1g3b7rJKzXj4m9Wiz",
  "key29": "4dwDPta2tWdJPhSqPbbzPnH3Rk68jgLZ9JC4ARQ1JdgXgP9RF6zUbqFJRc2LYG33Fqxz49xnTii68D55zK4AQB35",
  "key30": "3XuAnwa5m1CaXshTARgk3pJZZztx2dzexcuH9KqoU3bzAfYJSnZxK27nXRRWsgMZAEFkuxk1JPkEEfAw3fwpgGBn",
  "key31": "6H8qGk1narovHVu6KJjjMb9tZXszC6JS2Pp4WypiCXVnJtYow95t8sV2ht21xV8KPMcgxg7X9tu3d3rjqEYP3F8",
  "key32": "5cWZxEq1DA1qTXrbeqPRGbtx74JB4u724u7uLuZrFCjWyLoZcLkZCK5hbfz7ckX78ntYcU1Kon87TKqncXbmhE3t",
  "key33": "3jCWHMvYB3HTBchC41NghHVuA3Uk9pSGqgcmXSTxRvHupAU4E4g9xw7WkY7QnxnMfL6SvfGuYwceKeggNEm6VDam",
  "key34": "3qs7tASB7dbTEQArjPdiNAeiC3xN5D36GibnqSzEELG5FhQP3rFMYNunVF3ThFndhBMCeWqoK11fnfmcrgdLpNTY",
  "key35": "3FgpAgyb4tr169bnRw1VxUebUC17XWGC2KudGqVnnCY8GXv1fGZCboBaw5czmhujymwp4A4bpeKq67JgMjAEv5UB",
  "key36": "49yBjDSv9xwVfRTDNjMRdm2ZmVf1V8oLaYw9T8QQsRJkYztmYGu2brJbe2jb2sLYTUhCGKapaaLJPeU9EGFnKCfQ"
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
