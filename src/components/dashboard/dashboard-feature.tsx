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
    "RQ7JEfXsXrrgTeDWMaiEpGP3pET1GubBstHRu1qL6dP75gChTyimg473WBV8Ro1853BZHWEMbTm5huViWA9m6wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pY5J6Rag6UUvUoWEdpyKeW3TRoS3vXjJihk6s1mmz89wZEoqkUm1WePn9Cw12RTgH5embA7J83agmbtkUCvaau1",
  "key1": "5M2ybrm1Hftf9HsM5KSVwrXcWo97QM4mKTYqdyw2bM1BxuwjQY2owoqPqjJGrvcYstBkgXtmuTboz5y85nzBQRqu",
  "key2": "5FEGoGj1paxF4xaSwRtcVdSnQgWcJwd7UCEEbXnL7K3Rj2hj8ZqcNfgtZsYiVkpk6S8U9bf4bkuMUP7Wg8DumU4D",
  "key3": "27z4FuKabTMfbs7iS4TXH7g8kaU6XjGC32H7QzwQQFaa6gaWwi3wvGP8jFqCrptFvijcTLEq7y44ZXuuHMKqhR3H",
  "key4": "5wQgubcUYnMUh6DXR5MEQ9aVPj8htzWn7VoLoxNR5RjRyz84i1nK26juQy8pCT7gvfsuxB68gxa5VpqUaJSDnJof",
  "key5": "2QGB7XCWPsEJ4cSoLjHCjibhRyUjQ3A8vu87ZMoqhEwpsJA6a9zuwYkpwujJkJ9MQoSWg7UuQ31D81qVG5khno1n",
  "key6": "4scjR5YtCFXLNpfv2QFwrAjN6jZjL8BUviyL29MGaoN5tg8eRJYXa9UDktuHx4H88nFS6LGCMmzJX5oZufRa34Fj",
  "key7": "3AuoyJTYZaiREJYb6TjkgZxYbkVT9b1XkChNfsmBZUchARwgwr9p43Hy8zBuU9dL9B4cM11MV2Nf25WixcwCSM1E",
  "key8": "3bW9RjMcfp4Rh9xzaSQgoj3nYP4iqa3kuA1ZryqKiMo4zFGz5HpoXde6H1Z7peRJWQ38BSjmBhxeQPR3rGDBEKok",
  "key9": "4Z6kFvv11sptd6yCbE3VnXCdVnj8bzw1dJr4j2bKkzAfzw1zP3p53jNvav36Ymx6gXAuvGQe5RtbxbncehKz7nR8",
  "key10": "2msrJTSVnNtmYkfuieQL3WoLQTy1QwbWKZUYW5hHVo2CeLMLVReYxn4zzVy4VtMaXVrHaSfjLqBv2BknadRvsmL9",
  "key11": "3XUYS8Rwgj3W8bsMVzZazbcyku58dRmQxFKQpJvsxw16HWe1A1SgRHeaVtyadwUJAo1a8UC2QiBzTHzXBqG18c3w",
  "key12": "w51DSkpEAUgWRH2W1z3pWZR4UZT2qi9vRM7s87LBqqmiroD7vYUryUuUQGekioknvchaue5C5UZwvT6KNYkFma9",
  "key13": "5rdETWMpJFckKmABUwRKQ36kKaXnNrLjpsT8o5sakcthvfxjLV9koq1W7vpbRoHaHsP7gt5tcqrMf2MmdXwna9F",
  "key14": "2RCzCP8pAabAPV6S6EMZYCTXqq2RkApVoLq2P1BEeJ79WA8PQ9bG4RMyjWw9wLpCebchysWMt7TMey9xEhzAghSE",
  "key15": "3NwruXHcxbkqyokNbs5hs1psPJHuJ2Eg6pYhmCt7oyUp3wXZcbmLrYzTXkiHxpPXHV4zMCjReQYurCoZvfhmsRSm",
  "key16": "595vhEUV1rssbcHUKm8hJPUjedDzM1fdJ4cxA2RCke1mqAWZ72ybZHGE92xy3VMxRLPKTWcxDDxjPkHR9LEbrRJY",
  "key17": "2b5Lcv49VCPVykewpEdw9YkH4cPWd4ZUU9qR65a17khuKihkxRzhPa6X8BYfgjwExiXmj55P2KPXrLhH3FGvhv8t",
  "key18": "5wmgunGZAviubaaqkS4g4AXEXmocAMVUva3SajnQKbBqekAGhFrwx6AyJcDDqhsGQXdSKwvfdyeGHVKzSnjRKixx",
  "key19": "3oANUXTLMVJB4ZYPtFVqnPAiSuW726AQmzvzMT5oGUcUZ1R5SseoKHCgAiNnDubwin4whfj2uroSoAuZpfNxmLoV",
  "key20": "2egGoFdVQRyNPgZXRRTEx3ojPDmB3ai33F9qdMCbfNjJrgcNLbhKNQz3F1v84gQkKuC6BRU7Ag7PosQFZemW8XHy",
  "key21": "3Xd1uJio75qdxCYJS8NVmFy72Q85fwD7CLBDXyDXL9G6iTXFGKpHr7nqRck4t5AhoDXauzNadxAhjHfiSAgwSyfz",
  "key22": "384jhT8TKsqvduUaHvsLqwQ4TSP6c35UXFwFxuMCt87HhNXpF7B5DNWr6ED2ysrvz7r29823iMZ941FqgPskKPgu",
  "key23": "5HQFmb5KpPvcGY5DNLFZ1jeewzByz6LwJX4yQoeurcBHYwc8994SLH8C6qpmHAgxrQk3Pp1zuHBLxDWkrzkAUXPr",
  "key24": "5JaP93Dnv5Jz2nFZELaR7GQfGkHsviDrovRYsTMqwyEuSAk21oF9jNqzjdkp4HRzC94wS2zMkWwRYZuM3mggQrH3",
  "key25": "35SGQ11X9y7A1iMSBWrpHpYwpFEaLdzFvjtxGTzwf79NVGhuyMgCu7nuaguVLtDdBuW26kvdrXD35bvPS5CHq4D3",
  "key26": "4DnGNnj35X6vWqXtDTgZXcGDAVNdMjuupmBmCZpyMQKxA3HHG22EJHs56FiooVXEDp3KoFcAjVtna7HfwJGiYXFc",
  "key27": "jWh1gCixgZrDasVZ4ZBxUuWdDcjBWbSRxJFvMqjYR99wroFhqE7aCL1UjpA1nERgWNCobUhEuwUJonQuENbWVF6",
  "key28": "3QnQQM6JAiR7hRnqLDbFnuUATshge2VJnDC6GjTwg7fn3WLTR3sKKsTq3A6Yc1n5XZWCGtr5d9g8ptEVP2tMXyk2",
  "key29": "5uskJnKb5PfhNjNSjeCCrCZngSVbBULAcTGsWZhkbhbGYr6QH5a5mL2VGPwva3dtHRSPzZpL1CVdhuqbnb4Mggf4",
  "key30": "4DNDEgF1NRVB8wnCtadW3BX7WfH15gQ4KMnuxxfWh729PyH6x8XLCwtRaqDg23YDNj3PUK22Pg5D8PqMhmo6Ma3A",
  "key31": "4Mq4pJAnFpTDTn3tDa5YJJNUvYo5Prv9Qg6o7ypDe9vu8seH4mWNvQSWWTrgpFAKyMbBLrm6Mdf4mxPPZSMAa5Jv",
  "key32": "4wvBsWkEc5QESkS9yR46i6GCuK1xjiE3uvYJMPtJX9knd3xEHrAYADCr2KfD2epgqTBbCNJyggcHrtjmTuSVP9kv",
  "key33": "21X7s5kShHPB5eWknpN4AvHwndmg6yT1uRypeC9BAGiNkV65neMwvLr7LzH7QSDEx1UvkaDSG4NxakMxZR1Lq3bB",
  "key34": "5C9H26LJkGAkxCE5sypwQTbi4mKyUwHcurCjUo59d9CH8YFBKmY1SDAKXDF8Lv2QvB59UTF2aRNHZR2Vc3aChaS1",
  "key35": "4VWjTscoA1Ajk8Npnp4UgSX9orgcr7Z85AdBBzh87EukMcBovsxDmentJtkrw4v21wveUSPdMB13gsWQe5iCSUwB",
  "key36": "4ezdxRav3PP6TAnUhPAR9zEE7Q9KBFYaboDxytsGDBNfWpqtfJ1QAcFkpNbv12foLFr8MwcUrsraDq1uxJyFujMw",
  "key37": "2HLow168bKf3hZz6t1iWVwsp6EiPVrJBq9QndjxHw9coUoenYqN6zNX6kzSXenmZVkDamdik2NpZ78w3obcMsX7c",
  "key38": "5X7XWx8skmygg66v79DfWc68NP7s8US4eyyhSfSsaFiUiUNFMGmnPQYePUTS9cgQf4MteZzAK4SqEyMKLAhDaHdJ",
  "key39": "3um9dSeSiWj31p1uF3atUPDWTw3c6wXNaduFMCFNL2jeEAkaKtG4KSPsxaUQetmtBYTuZkJwM1pcTshQwZxr2ci5",
  "key40": "3RvmNar43ugxVLMu5FxvzD1YWrfRmVQyYxNPVWNY12NeWmgTTCtBYYTDcTxwqoRGs9pTGdCTybZu2ke71tX5szjT",
  "key41": "yxTAxMTmV9ixMyFAc1GJK7o3Qk1XEX8wpHWPH43tbKqmhYYCXfBx4aTYjVWNiuGYjtQ9neDFLqyaCK9cRLMNLiK",
  "key42": "5xyb2oNCu9QxzWubjatXBxm2nWFHEULAkdg6NJ5GHDYkRCg64GHHmrKBbiQ7N6C9JEEaYZLcXfqj1y9DeVDnLfof",
  "key43": "5xcrptAg7vLKTLCLbFbyyJzMThFjujUeqgwwr6f8YB3PnC4dqA75FeRBktGM3CAMsRwC16U9Zc9mvE5iVjBYicRQ",
  "key44": "5rcspnBhrpdBxZDe9ju97wnJ9XdQdakTTpgSSdkwgqNh1EqXHV4CqhAyMRVPhhBzqXy8oKY1FSGNBKAfMv83g29G",
  "key45": "JZYsY1BdEeNSBqfjPeL8WeC5ibShpbLHZemSMhZzZHMnqhVsERRcuhRH5VQT7eQp8a7vPP2BCsGCi1VECJmcoXi"
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
