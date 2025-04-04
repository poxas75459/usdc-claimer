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
    "54dRuYWy4fFa53J4YQvjm5S1LriZkRLDoQMZAjFjNtZD2CiJN8yU9NEY5zz97SptxibnEZCorDTPUcAi9ZvuesLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v177ruAtgoCmn8wL7TvwGFvcDP2Zaj7bc4S91pffsj5MdgycgEwC3yWeTTUi7gT7bvzehwfwQK4FfciMz2ugLuc",
  "key1": "kJHoK2E1Cw1P1oo7D7UrhgCzhWv1CrXp4jJQj2CHaC5VbZEw4uVCp3YQAgsKNgd47DaRLEApXpz2zMJ6NkxTVWh",
  "key2": "4cKk2kjHH22s8dLSSvMsStQayhHQrkzbZRzNCTTwMv1HJb3axeTwvsQKYAbsemErXC9tPGyAZMqNE6jHR1f2PQRe",
  "key3": "4bCMNosMHmdvYcAHNuVxZt9JhdsmEfwTFUUDBq87jj2dth8FgSEK8TvEFxeU7nTRqXumHsySJL2UKfNdhroHrdTK",
  "key4": "3kmFP3umXa9NNs2kyAbgkFktwRc96wYdmKoJUqXobepWJCB3SwJ3RfP2rpdmdFu33iSw1XZf2WwH3Ssi9UxA4wZA",
  "key5": "3zoXY8QJj9FJz5XNrQ4kkcDKhVKxjW2PrDbkumg1vSWtzuAFGHifnVJ8yMVNutu6ri5XkRYSQVpBJM1ifhPXW3vr",
  "key6": "4PZkEV4qt5MHeWz51ZaTPHajTwdgPg1fFhVKKccrLiCyRwg6x5G9PdmcyWuF32VaEHyqsPVq62fQK7NhPXMe9gY7",
  "key7": "3v5zLjEiVQjdk4NMX7D3fQMt4bS4FgGqf3Avcn1jboE1CQggH4uXkXYDyNCPBvvXk8Ysh3kTmBrX3y2AZKrSJ9gS",
  "key8": "4PkVQv36zk1TSihjaiobNty2EAY58N66wdzDVfH5JYpwgfPgDYpMK41PekYq5JXywTBpFGiZVkRmwB8o4Ppg26bk",
  "key9": "4pFUniBhFZV7RsjmZjrxeRWsFfJCVBV5cJuuHj4Ke62a6zQrH4YCZVL2R6KgcMetR4wqTf9p6bmvceSyuCfCcyiU",
  "key10": "4HfoZB2WQgdBaEKQaJCPHbj3hTa2SjP4g7vgNJcD2VHFkZk6MxiMpSs3n6wAVMgZbz7T2HB4PZqx4rXVt1zN6x4v",
  "key11": "3HeJC24PRCNy3BUphrzvtzMcVVnqC2U3k6UCBRy8Wch16gYUsVCcLXsmsCi658ZmhtCUSRKJMYjarGSBYZGtHhHA",
  "key12": "5unnY6Pb42dsetEKHRcZVRvo8MCpCnSfd3HBk7ds8STMApihJKCAwws4vhjwc8HEg2drzkBGMJRJaTSqgPpgiDwJ",
  "key13": "4DEXG39fqa8XqsWbcsjF3VStnd8NqVxvnPtkmPTxG22Jsw5P9Z8vGVcTZMPW67MvtQzeKXViPREsRSy2i3JHRxPV",
  "key14": "4DTjN1nogr7Xqtwk8xMdk1Fucx8BC2AegC9kgpQbxXarFz7sz4aqLuatE8BqdhhzdG54DtEj66cUsLxQnvmuoscv",
  "key15": "TnZnSVSqXYhCDqFWcwPJ9GsMBmDAbqd5tnHuZzTLcynLuDYdNgprxEReWDUGSx8wjWat7pE5hU3Bsr4itt1oYtt",
  "key16": "51eubmLejf59XxtepJeVDU15c5uaWUrE1WbRMiHPypJtoqXZUnVsipCCK6ZcBhVoAsa6Dbs5tyUwKBJ7FDTJH446",
  "key17": "3B39USECWaD5sfjKU75A57sCt67wVPCBzCuqr9eUpB83EV3tSR9tZQW3vGiziQ12wke7KjKGyv9HB2jYUSMQuA6m",
  "key18": "2X2xYREQg8kucJBWHPbrdwbEeE6rLZ7ayjYc2gd2vpQw5cRhFxwgt3EdS6DgVD2VCerKkfLSCLiHz2ns9TQdNVop",
  "key19": "eHURnMt3eyTTUhhAQU5XqAXEpB6RUtf3Te6Zz931C2XizYo3yziRvT3DxoUBDQYR58qY7BBXJEAJrpUb2Rs5rTp",
  "key20": "3dVWXFbxdFmyQTTXRUKstwUjJ5ScT9JMJMJtV74AUoUhwo6xmYw1zCzEr1DyyQ48B9wmpd7jSjUPgNwPLyjQ13GT",
  "key21": "2HC2YbDMuUJyfqYwonPZ4NhbFPyuz77yatkLsVmpwPDCG13mQX1rqDrQ7tT3TbG5YZDuDH1pCMCBH4YkVBTiAzJe",
  "key22": "3EdihVBcBLnfNtLERLcVfNrVrHKBi8wnaihtKz6BTNoNvLwwdkuG8uB2aJTqdRYNvtC5uaQZw5zEzYLUVREuYu9A",
  "key23": "3n8k7hQsiAGFWqbPJxi3HZgcXtccQTvhk7WYqruQY84v2aL2bdh9k754Yso2fbsVdmxvRJsTT5pZJtbcR7aChJob",
  "key24": "4tvYSSDEAkY9tvkW9SbpSP5QFkz52v6hXnf3UibLmt39qf69CDBhzhG8866269hLZ7MdJsDPU2F6z9TCptDZLxHq",
  "key25": "4fVpY1q1DmV3vxhTRFkG1EKt3R9B4kKEJy1xF3bGcXTfJ9Nju7LYPQTcc4aKgyZYNikuspyimDbCAoXDXbZySsa9",
  "key26": "3UJJTsU1MkRJkWM94WyZ92hv9Fk4H6ELGLZBpMfrXGtbyySQb9kDAquioxP5APMuEDiA1ZS9t2YwJ9KpodK8ankG",
  "key27": "5GQpHSyf195KanUYCfgDGzJoLZJjZq8rYkzqLCQxrVDNg8at7U9FjQhuvhQF5xkN7gPsgGdqEcuuE5BeEsLAzgc1",
  "key28": "66PV9MsKix97vfxbpKu9s22BevEfHfaVKyHHT7fZqUrBXtjeKCU3TfcXkNmqyZNuyhXo9MfpKutQz19ytrCZyn7B",
  "key29": "uADE138s3Rd3qoZc9oDK7pxFJ4AP84aLAGH9xyH9jES7Dr16JQ4uXn3x2STgkcjUbP3367Cx2F1aT6ehHsSewk1",
  "key30": "391pbTR6q1qNFfPDujrQry1JZXT8vNJ9WZELLPrn9yiy2bCueuC2XdNq45HyEJFVb6f72R68zYHB9waSRcjHeKm9",
  "key31": "5j11Eu8Nm1jHrdv7y7j2AFHuLpVPRUsdNdWfcdr3A3Cm12Vvx3XQkFUtB2zSJbPiY2AzXHyyE5nJ1n5fqNvgqrab",
  "key32": "4hbV577p95ttv5ddhFoqViJCZXvSYhHn9RPfx4j3dgJgWwbvoT5VcUejpuoh9hgZhgEzCSYa4TxgM32kZa2wrkCb",
  "key33": "4bEYnhNeXjsDET6NhWjUn3BkZEQpHNcgHPfMYDcWRAcbv6zRWjYxcYJyXXJrh8qf4RtnDtAQDJvb7a8yMd5Zs1aY",
  "key34": "5iASLKkR2xwmdJvxaXR8J4xUh97BrhxNxycqYq2zfHYdGvDgkCEhURYRQgoG7Jmynn6rWBAGUh6wJbP1G8oRQoAp",
  "key35": "5XtWNJ95bNbkgzcQAwuBBBwTRbPdQbTfnRUDpwe7FXJvV4AEaS4qLit3hLsT11Ypq3R8ytSoTW88vSXN16Hx5mRp",
  "key36": "2qUcR9VrwgfzrsnvxwYypmF1Z9YUv5zN2tUcvNWaVHSb37xhuBr85Z99Uu8qnT9y4jr73fR8sqHf1m9WMVfRry9V",
  "key37": "aTgg5dn1CG6ktEdo9pbxJBWKMK4W3MzqH3M5ToMdU1Hc45cxaKFBSR2eQ2vpWRK4C92NSKpuH2XhtbtgEEiVi8L",
  "key38": "tybxJoDSpnaFgvUMhuXe8hXgYevF8sGWCRYFP9KDyGrcTTxWUHNHX7Wa8xy8BZd5ctTziQuwq395XECE8xp33LK",
  "key39": "2oMDcGkEi5dMtDuVsMLxhVkWu1gVBepkzyhWpUSPRZfuykD1s8pfTt3bnLodUkPNBewmqRgtAD5gs4fB2WGDUYwG",
  "key40": "3ELS8pusXLEGb1JygxdpTRRckm6R1thYeMSv5EkSoJm1iCohV7hAPtr2Z3nEzmK8pKSowLnqp93hueSCaMVZAcgi",
  "key41": "61RxM5iF2GXZ89994DWzz9z2AoQsR3hiXm1nRvNiyBSKFu8HH4GRoubevR8AUfrot9z53cWsr8Uk3eM6Ww5u8cza",
  "key42": "48Ruj6sM4tAype9yK8XeZnLZFEKqvhnnPrYPdfAH42nHm6MPEgtr6tBjoduMUrtrtx7u4e1WWFDAgudCRtywBayg",
  "key43": "4oMe3hMSvWugbP94go7mHyprPnEZxBTSSbYWMySds8sVzTKA6X9ozzjqwXTxMxpoEjMtfQqZYVJnDhKPWKCZ9h3s"
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
