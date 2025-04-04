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
    "59Bdkap99cJHQXSUUARuzLMViS2wDt5gnRfD8Mmv7sCT4hrQnvS7gXxDYNCPpmoWNpFcwg2g8UeMrAMqaPjCayoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KzfrKqXo2A2VRNN3EdatXaFJBktxr9y1GTYeLUU2eRA4sLU2vM7YAKUDCUnTjHjS6pHwgNzZCmYhemP11811TLy",
  "key1": "tLbRSyAp71Suavm8QorBAe2WKRqDJ1VABuhFXEiwwWV1rh81eNxHrgAbEuL4CVuZdq7iJ8gS8A7Ycqvj5U4aip6",
  "key2": "5d6g8b6Ye6ceJhvDLrbQbzA4ePhcSZ5mJJmgs6dW3dMH58Upn2L2TKuGoGBmerRBUPaRZo66DYMZ1a7uMzSDvP3w",
  "key3": "5WpJpCQwo54dMjYSndEhJtyjcWiRignGF7DVPA2b6TBhbJTpwGxCG45ubhgE71r7svzFMcVnNuSdBSYLgaSVmQQ6",
  "key4": "DwKULzsY5yG4KgTDqa8zFa3HarELoyvNS5yPNYxgxGFDYTfBgggmFA3JM2DNw8H3snQjQokPwWhkqACswQDmxu7",
  "key5": "3pT2AKnKyq2nke5dfyZFqptjzLXyfFdLUs6WzMEbEqshnqmm6r2UL5xPAUH9fXSsQCoPyuzbbs7zSpBC6u3dGRcE",
  "key6": "2otJPPKLcW1my51D532cFfzCXDrwiyo63fuHbdXQV6YdGZRwwo2DLzPejcS5X6A9hLJJt9wcKK1jsex86PQp4gPr",
  "key7": "2z88skjzHLUqLNz1LNfmPbemmFyCFrcJ4FmBDoZ7mbjNFeAhNrcm97Ab8iDPLhJ8eywK1Sekh54XUMJmFmsyuTwg",
  "key8": "PMpqmLDe1Copw15LHqmUSnXKSyVF58y8QXSkaw5g6qhcdWfmq2ykiZneva5DtME4xqCss6FZ5N8dVnvGxyHPPCg",
  "key9": "428YZHfWeXgbgg2ev84nAVo3LXno6Un9GEC1bHHJtpBmyAcAphQNsjPv5cCYSqiTFF5XKmH5eTwuS47ZawLVTyuq",
  "key10": "4PtAa9vZQ8XmB3TdFzzgh7AsznvWe1hCBMUwXqBsyddw6q8pA3BY2vaJY2xRY2WyguKgPTw7XQCiUfRF3kPJN9QH",
  "key11": "4Jka3YYrX8NSKDR7F2abVBD9teqnuPGJyYFYk9Xy5JRaQ9z6MTAYxbFoeFf9XCWtyPccV5ZztnYXeyckvNsjdaqt",
  "key12": "4C23wdCkPJXvj7kRpGArwGyjxd3rFjEPdktHNDWAgJYxRPcRRnRhGTkV7BcVDrrAduAXPMZP2gzK7hXUf3KaRZqS",
  "key13": "54GofKTTfGW6C47YEnDLaNRpGZU6KihNubDVZ7TzvA2tGwmGzT33Arayo4CVp5WHbe3S6vUnGph1farezzPz8k9i",
  "key14": "AbULtZjBBYqx45Z5NZpxHKsr4fJsXvAhmheYFYxSywQ6JbA3chAXcDkx3orJR1y1QoY7DNxSUGz34spzpWUjVRU",
  "key15": "Hyd3xgY3uoHoghQBSmMFWfiAyY17L1uQobUVQoFYobfk4C4hF1Vzn32nRnmKVrRvh7nF5aNS52GRnUHQNoE66pd",
  "key16": "2r5xiDQZNMf9mREVyNqznivL5zuJaArxmJhUrZL4DYwbjMcaTLfqjpqaM8RkpNgjkHYDVc8cSYKqKQYzDHYgit4V",
  "key17": "5icKg28Z7x9enBSsWY5B8smaVqYVUoZzMC7QNgLj9e4Bq7aibPTHd5kbjTTp5vqhcqaWacdeTca7Mii7CYvWpPum",
  "key18": "3unFXjXp8zmJj3hfwLSTBkgut4kQuMHuSYSVCS3te6Smc3xnvEoydaYmp1aPppViJW7gRhADpHF2cCREuBy31wCW",
  "key19": "57sBBAxTKFq1qFeBRNfFoN6TmhTEFop4SLwPtYfFQDPXo1gAXQnduwpECfEgeHGu5N5FTYy3JhB86ehtC3ipt2j6",
  "key20": "4926ifiJthCLmvccf4VewqAzxkt3ZiYMNfiEyZthd8J2XVYoxqdsiycJjii2NaN64eHusnfyVmYJz7emUMyk3cQ3",
  "key21": "2d4ez8Qx3Kxj4SyB6XQNBLZ93bq7dGfF265NTQ8n7m5DLCkjmN8iXccyt8fg6bTV4ue91gkBGcWD6qLWoFrBPvXc",
  "key22": "fzkE4SYuHSzGxfcXFViDueRtwrT3g97soG2YqkZidwbhxkgqzNJNq6pzE2RxJFrFRGEeXk7dr2gKtfbdJgABR2V",
  "key23": "4jQQzdoemDPgofP1ap4xk3BcWzVCCHQLtTvqjwt3uFGP51vQLyZxbzJigyppA5yzpBiHFBZoys1JNTx79HNy7kwH",
  "key24": "58PiVYsWarjij8EfW4uh1k173uRV6jUNvji1hX95fphdsFNjbfHAL5rBtbdX5E3jq2GJKUUsH2FXXgrhZqLi2E1N",
  "key25": "3asixnFE9Jq5hpDN8TGeQhweag5jxFQYA9NJYBmhZNVgwRrbExjuetuUqz4KvncCxXSts9cXZCD7BDKEfiXu1jdY",
  "key26": "WytNYTmZEoSNNZXd5SeMK9uaaKLy2giyMzNTfHVCA7M7c4KXAFZka64z4RzHqVHzzahb5Ue47mdQomKAdD43MrQ",
  "key27": "3m2FDp7HcrTMgDDeQb1iaTNYN3uV4aVdKfeQZ3XG7bar3FpWLJGaPbjSMUPgq69yRFo3X8KuxgGhf1uErVLXdExY",
  "key28": "5JkQsKvUDQ8YtAwmGQHe7NPidPfLFihkMCoG8xK4z3eMSjwqxfNyyjj8KtyNDrdW4dYcZjh5Yj4kBPvvMbmSMSgs",
  "key29": "2oxAEsKGRFtM86HDuS6zRMdAuvmRQf8efvFxGy67esp6zYdLrJy3R7u6hh7MLYpGvdPjqPpydXTxLw4s6pSATjPa",
  "key30": "5exzox47ucJCtiRDZRXa87oyU3j8TczrSEDCUYFcLq94KUJYemj3Qk61XdMPhGPkTRfj5F9snrVAbtuzUjoHFLdv",
  "key31": "asmfSrbyhBq4jJZxZtM9fbu9wkasTRByeiks9PPAAXv6CBTDR5NuPn5hxgX7273RAm2hXuXTW9Xd5ZK9CKfywyT",
  "key32": "613EWW6jUXxf93CX6DR4ZDTJCyTeh2hNia6d66PCTjoF7BgSPhFSH7vU2hFSHpNeQgVCQ43aeBZC7jocGsaq66mb",
  "key33": "1gKYZS3gwPcXk2pjT4TVwJg2cTSDNZBHzYwByK46ZbbfmRZCsRz9d3EH6Vs3eyLB2mjLrwcfSXpodSrheGkBsV1",
  "key34": "34sViz2ExMr8MaB7CP7dBptYJFLLWxM6eUA237zkP8RwCCMAekuB8hMtmPVy64FEzNXty84pFqv5wtPAUj43zoLU",
  "key35": "5TtsVeqhHMGwF6FmwNzN39u2graXL9R8qNQinSNprLpFms7r8De6N1H95wi58PNKY6sjsMyyNhXrphBh7JnMdYuP",
  "key36": "2U2Q2kA6e41JNUA9EX6Rm8wxCmFM78d7ppZz9gEnfnicUhNWXVJQ9t7udpQHH9qPSqDKz7YGbtw81fwdUBs9uT79",
  "key37": "2mxZ7rLXCzBdEinD58JpdgoZEmG7SVtX5vDwCc3NDmXVZ2N4yLkAojdb9HsuAtvdQ6WqJyjBwzr89bBTqxY8z4P7",
  "key38": "5825jPaNm8wLo6bKWCndg4JgeFEFAyAcJGtSn3avUEjBcsSMMMLQu8rhGtJofAVv8X1X4tsQZC3GK44KAsJ8WaTB",
  "key39": "5UURTteLu5CGoPReRd5dWrYtiMxmFkSBzzy9WnFapWh89y7QsHz12sq1ZKxHxdr3JL3u1c6pGQwDDdWxuc8kbj8q",
  "key40": "3LZQ8R5LsfySbTSjaM7pR2kUWmmZ6X3hf3ko9Rxomhs7tBwhASftGjazB86tPBYKUidxwnUdX1sDZJaKg8BWSdxD",
  "key41": "4SAXgBHhA2Te8kXyeYTSaUmH9MGwEe54w2sBpN6KjUWp6wx4YhAim5c1m5rQg3jpsAME8bKmmrMqqDoTAuKGLXsk",
  "key42": "CRzLCNrDhSFoNYA623V4ngpKeH7xF4ztoRFF3aYz2cV2eXHvUuQJZC7hTG5FrdbdxVCVXjYSKgfBGJnJDQJyCt6",
  "key43": "5DHC88TGwwoJjNfEcjcSyZnPB2nUc1NUYaWyxEstUgMN99ExY6v49cSYBuwPXRQPecnfAhWzoffLiMAqEtzqvJqW",
  "key44": "5a57f73Z8drGcrGJPMBeSMH4LDrhSDyrY4Y79H8hMjbCivCL5VBjbtwZmu3KtfjYBrJonA7noV3njy7YUFBQAJNj",
  "key45": "sam8yfJLcAS8TvxEdZTL7cEmYWR9aBncYpngwV2RZ5XB5qwJx6Dd6uP2mDnqfzpvTKE3dYtSWeqznieE8pDAavs"
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
