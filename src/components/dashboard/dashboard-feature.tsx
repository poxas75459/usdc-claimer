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
    "4jt36U7F25PsmBxV5y45aLwN5RuSS3qB93EM47YCNjL8ZnxsubqfYMr6NSRRmbEaWVdveQSXKUpxyaneEaMmbydX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63W8a1Qa9Wrm53S6dPvvE1PZDLFmSiiZBM5ReKctDKUde3w5WRQYzxcVhXuuZciFTLNgWZ9xpizwk5ostR8qiLzE",
  "key1": "2NaPrwPP9bBL8mFBGcGzYTh3ATPoLYhwaA2mkZcP4W9UwXgVoPLbxwzYdBtRoog9cm95MEPsXVRJzC4E2mx1TaLZ",
  "key2": "5VLzmyqotcM7ZnggqdCGo396C6ZstZyhb5tGiN3E4vW2nrUHxBPibhkxhY9pKAw39RvJg3U7uAD67FUjNjFtD544",
  "key3": "4ccJZ446ZBotxZtNfT3G6DKR46GLcR2nPgQr7prMn8C4VwHUaT5BPRohctY1cmqchD3erytedNZV58sq9nKLkuwB",
  "key4": "3mHYXmVa69vdBnzhpBftJ6PDCF4oo2HKY1YRUFbWphdBkrpaEseKMQAMZW4yvJYomMHefxLALkaDSRvKgAtNp6dH",
  "key5": "3exUHw3rdQ6ezhmHuhiNSSKdQT5But38ZPSC6AiQgUgZzfLCDdQxCtsUBezCg7aNUxkHSSEzN2K7h1QPvTXVjNFf",
  "key6": "onDZcYbS1fgMPFodvMBXtcoqzfqQXV9ba8paqimi36HV5vHRodsTf8uVkGAF9BDoJJuGWM7WoG44sRjbYL8uFhV",
  "key7": "M6Wf8zG2JvRzEbXfb4fvQnhrAeP52WMaX5EfsszD7p5uehYPqGrxgzd5fJmSjmoubkuWgTqVArAJ5ztmP3bRbQP",
  "key8": "3uM9N4aD2J4zMRWUqLZrpMrrJSvEr9ETjZauEzE65oPYjuaef126YDPACPU9aeyNyLQmv4JXrv4eVj3h15uCZDqC",
  "key9": "52XN7EenjnLYAz4BE7BKKUwjsdjyxp3AzjTxL6jfn9z48HLmpiskm4QUXKjp3DhqXcAhN871pa5Sx91mRcTynroq",
  "key10": "2BmkreyrA3LMKT2mWpbxaec2icyus8gbhX3taEX6i3uPGstTxVWixJwM4oCLcEKfegdHhDuJ4Vwc6cD47WxNhAjn",
  "key11": "234AQ91wYoMxKpBbW55fKT6H6cFyEdud26nM31q38QWiUPsJrBiKF5LfGcJFNpFXac5x7pGPbzL8hxTCuFhR7eEX",
  "key12": "2MJqKXgXwApXdHQdmJWdsAhsHwMNtth4xnGHZfHecVrUsSTFnmNvzSxjDr2tA6vJT8PCnpL9nbt3DF5EmSNMevsq",
  "key13": "5pUt3pRL1cZkJgqvnkbBdLLNB9W94s9fb7L75ysm5CN1Ca8SrRBWwAxqLLuEJjwuGqWCdBH9J8cCMLy4y6Wdztwu",
  "key14": "2yeAHU7XyGne8kj9emQ7tFmLEeCp8tGpVyYVzR15AtEpkBP1MafR9KF4PBbwUBWvJd2DasYyg4qXxPS68qrMzhx9",
  "key15": "4i68CWo437LsCdyLhTHfKp8NEdyuroX6VNBXCqsw6jmbfTukt5nekxDaeipf964LEeesPDj7KRdj1Znj7CJ8iAmm",
  "key16": "2vtFUyZwAKNPjPPd6YnABjw3dmQ1SxcALXA4x9ezebEevA7FMJhHDjUkNdxLupVxhhadkokTdqYcX4T5a9c7vzQw",
  "key17": "22XZQjWHg4gbAwvLu4LMaN8ttLdrMy93L3eJsKHUSjPuhcHobhmhSFcArC6cBgamxnxYQfbqs9G7VXJXoyCpmuSr",
  "key18": "3ajPotYqUGzj9VtoBMXokjCcc3jqH2S6mnYLEjYowsb3yMcmVQajR2NdQ2AZjFg3ztJ7S38XouqwaGDsbGcAnFjG",
  "key19": "2e3iEYLg1ktLcnLEbeexAxTkugMacr3NkaxnkfdPcj74w9ynDJa9aebsBueDb8cWeMG88cMLgFwkWs3mWBNFUdFj",
  "key20": "46TTTSynBTDCAhCigEnXdePhsFNAU1e7fpkPeLXwnCosbHQPxaKfZe9vY1FCTpSaChXxpEYKzTpecxEBPHB6A5mV",
  "key21": "2mq6dgEqkowMhK8SVirt4bbJsghDbAkWK1pH7E9MyxfnKZV37QtJ4dwrTr1P3VSQm3yq1Q2fVpGvPuqYWGq54Rf6",
  "key22": "2w1xeWUnLe8a6A8BR9inQiqFY3ZYpCNAqroQkYMoov2gZFNbs8Ltoxzq18pPGpZK55h7xYgzkkZ3xJ9a3aeBmf6J",
  "key23": "3GLiCtVp8BFEcWVCWKDQivvgFJ3n36smMgRUFNaUnscgBcBsu1rg3q1kQGrWzrdJix4wHm1T4ucyJSsFbLeCx86n",
  "key24": "45K9Dg5RXXAVgVjoJv1Hr2KR7PU456HAWXCME2zaJFGWjghXP2bwZgzuFvRi1CQDKqLymakc5iQ3nLLPL4x57KMN",
  "key25": "2WWquuKC1ZJNRV6AQY3uzEfeAzqiW8fCCfZcJ15Zh7uexxCWKdLxY4LpcLETzvLUt1tY14newnS16M67GQAzrSHM",
  "key26": "2w33PRPWyCYkwrhH12RyD5mTEZp1sgmehYNWDcAEYWiLVZfXSMWVwCTsn8FKeGxH6mRDvb7jvVkzsQrBxTdCjsUW",
  "key27": "4YBYSWsZXtZUtAsCzZMuPM4G8wns64hP3Lj8Ed4WLbskWSo4xv6dUnaYkYCnxtD2ivPYoCDCBNHjyDFsqYLGmXM4",
  "key28": "3dyAjJm8A9dPHzEe8brrG8isrTuEc2m1KbB4A8TPg3vecK8xtB5tpfpcnWcPbDp3bz4po11DTdxSL6y2XjEPNPSv",
  "key29": "5cPQ2znsTmmBK21QeWr23z6FCMLXRgxr6j2pixy3RXDUrY3fX6g5nE9tvXcqy1UcKAJvMk6mCiQ5AQChMDobjdfz",
  "key30": "5UDTyh1xekZapQxL3em8YobwEdbDSY7ySTwNozUxqFRx6qr3GFmHnATpQEFwMMpCNJ9tmnWrnSyGn4vHB6ianqjA",
  "key31": "3JVNuPk5Zbjwh9kGpP7VW9Fbvu1V1MaW1iyDLJPrT5JeRtHi6NgfW3LZq9GYsqVEr5GtcgsWRZC9bK5MnzdkomAr",
  "key32": "5d7FKk3kEc8Mc5dtGywHou5NhLNP3jyiTBfB6ikaJPmcwzc6ZMxPkeNQq6KHq7k6w6RL5XQ3sB6wLfZkTFq8aZit",
  "key33": "F4CXSWwrT9qJKgmU41oTGHtzU5Aev9SSKvhdKF7wsa1q22R7WHMYdtnFfGcuqdEPFQ9HoW7tgmRjA5mzpaJAy6Y",
  "key34": "VeLY8xmGag7bkuTTvCfVRqgwK7DUr7cX5zws9EMHnckrNa9hSCNrns46MgZobAL4aSeSpH3Ca9s3deM5AGwzTQC",
  "key35": "2EkpGuY9BMjj1EU4wB7c8kwhsbUNsCQMxhk5oybByCysfTNsBbLpHM6kiJma9WmNpP9RVisnqmQEbwkEBZ6ncKN5",
  "key36": "66ReqiBtWrgGGLUPtiq7ivGMRZc7ucodAuF8fdnnS6Vj3EmcsqqE1VMpWbK71AQ5nJz3dxpgysDpix5gKWV8a6zg",
  "key37": "5wnDG7zugS9GhUrrLdRMXdCVh4RPxX6qCskLFZ55WGeT3heocbBxcvPgqF3ToorMbTHr1RgTswNktKa1VoJSRPQQ",
  "key38": "5vdM3A6Qe7skqZ2qq1CmhxdnAmWkuQVeCBMrB664nU4SoTZQdXqD6guejrXSeUteX3QHdybwbw6tQ1Qhu9jgX4SD",
  "key39": "29AQ2S4QrXf9Zc78FmHzapBg9DtEaBFhbEUyBMmz44zdj3kK1AgwEZtfx1KPkq9quRcjvop52pLL4JsiySrfu4Z3",
  "key40": "2eU86sZkKCPzWRnsjr7UeWHM1ogypRYB8tqNgmHw3L8rjuMCtiZbo2n5na3zux9Mp3BV6C2Rv6sw1eQuZWH3Pego",
  "key41": "3mHcGMkvQx8q1MxN3NZYtVAuBqo7H4xtTrrccCQ51fZrEKmmy5dgWWqGtLFe3BJm6ksF4jGJM35hVaoePmm2f7pV"
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
