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
    "5NDnM8vb8QbFAjgLsWG7UbRrmoWMpep5v4nr9F2PA7dNDxsg4kJFXeVWRZCKe2jTYztX3j56ibrTKeKDZo7pijom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BTUUUPALVRdXTEeZtsK78ytNB3mRX8rCTyoqF1hdP8VvUFmdBZJ5t3anneFJQVm65wtZmHxYTr4yciLZ4bjKHvT",
  "key1": "5PZ4Ac51x9SHHftS1sb7uCPgFpqc1nfZ8D8YUfmTpGbKLysJKzXE9nGaxJpb71QS4s4S41UHV4AyzuLvvtTwbXqw",
  "key2": "48Lpq8ryxDXM5Drq59WfKQtRLr1K58v8B8HiHaumwSdLr9vMf4S2Cfk3ABM6YjS1eUEMieEiJf7JrSbhnALDDqzT",
  "key3": "3mpwbnptMnDyW9cDKa1yDdyHK9gKod4vbWXncHhSQCSktpj8zrDaWQxCPMrstZbn1xa4RG61sdSvXd7Rv6PWcdRC",
  "key4": "5t64UycaWRuoA9M4yJG9GMAQV2AhhY2TNTJrKdsmPhnqwUYZbzE96zYd9NB1yKEqRLTYjHvaQNum2XhcHxbvxJzA",
  "key5": "6ECbRi5VMP4yLqeVDStbxxgceiwo96YojrSx5xizCmFGyviTdkrcpjhLc98bQfhnp1dUDZUBsdj7pY5PhfVUQdG",
  "key6": "3Ky8HmN6T7tvFQqktZ5nDQST2W8bVtCifaBV2BHS76qyAX5Q4ziwkUFvNGHwNWgFT3kypYSHuoBrN4ux1UD4cXut",
  "key7": "3DEky8FoozCy4GhpPpgv33qASYhLvtce1NAAb43NtQnF3FDy8oXaBWTr5zooNWdFxt1UHchDXkmx9TijoMSJEv11",
  "key8": "2qiMyXA8EcTvdhgCRPcPQM4sPyv2HjMk8JTPC76By25dJYBvd3gtVToTNe3oLhBuC3SHLMJgM4Pm3r7jWf27imgf",
  "key9": "383ZUfsB3yoSr2rfCpsNMypE7H7n1uAG8YSWdCaGAtyAaHvQSD98SsctHG46iohVqEeGzMwTJzsR56b5r9LvSfUt",
  "key10": "57MBrU99MaKoL3ah61cBmjkPeh1HxQVPCcqWpFovCjdo4M8zdnokLWoaasvRqXY3EsfC1H3VafJrLtT48Tdua5vG",
  "key11": "5X8YLUmghMQjPfBUZMzzgMpekRVPgAVCCcsB1pqmwbL1E4N9Sq29rjTB3BpUfxfQaQ6Zcer6TvKdvnuuXMsHpoNx",
  "key12": "uyE3CQcad6ohMtK51RkGZHRVR4gmuNQp9evRJSxgk2FTcK71twT5vmGSYE5fH3stps8W9nUVciCUy4vDyGK7Too",
  "key13": "SPcsSaJU9Tcmey6NGoJScYKer2SKj8MC4Bs1EEGSEgoZA8nmMUA8FF4ko7qhJsymJp8r7bF7G8tPdCCtSy1azEF",
  "key14": "53gnfGoZfctpCowuUSRec32AgB5ToSys3JyiKfyFH5n15ErJLiDCc234GM5ePAVQ1jKwyZgFNygLehxy6ncQ5Jjy",
  "key15": "wmehGmoXZGU7TtsdcJSsFVQgCDDtGiTkT9V8GJZBiuKvaTLUThA5FVKFRFmVjY3ekkKdzU6K4tsvjKRDafPHNUY",
  "key16": "5NQkVvZ6hVN4jBsJMmxapeshbB4f3NPnXBTw6rPBf6uSa8zoi14QVuTruTkfhBR8eMS7oiYWuJ2ZL7TPVnmoU6LF",
  "key17": "517TJHpzotErQsjGuYzXosuDxxK2j6Vzx2s4gz4GosAjy16QBfh3cNVLaVBzm4VuF6UwWuaqYbbckfVU8FGAeyMa",
  "key18": "5fB5MThkFD3CmvUqQXuJ3pzNnyUnjNPhA43dTGTdcFnDe4LwDwpwTMG4wVKP9MFdFwCxMqPZh8Ye7fpHXVxL73bS",
  "key19": "5PwVFrNLvDXa6FJ6SRifAVoCv2Qt8FmcumFbPdZuoj8KGPcm9dAJyW3cVg3xw8bz8wVk3haixA6mstsRoz8adYQH",
  "key20": "5nA5u5tCHwXjuKiSCNaTvqRVABmPMw1vMMH5nMAYMarMHcvYR7nqY4M4PcLhycEccSVkxkomM8TE6jyz6dyxM4XN",
  "key21": "4VGzbVPzu3V8d8Nn7jJ3eZmxEd4XbgQcxFbwfQCbRcMLoN6nc8ZRa4GhdKVfVvJpMEH53E4GZENTLzoHytfKSucD",
  "key22": "4zjoUXnSPRnYm73eMLCzqYiPjxeHAPZ7qyu2wcHAbMmf7X5s3q7squcQ1BW7nttJR2Y4udLBTJ3hWV5ccCNk5ybQ",
  "key23": "2wdDwf1AZw4qD7mGeo6vHSHhTzztYJP2oZ5DKZLHLF8jdsT2RALzijCJQD77Y2yTZsucwH8MVFhcp7HFuJbEsB28",
  "key24": "4GmgTKTEWLSnwWdGcpxXnXy4X8j9MEdD1v83iQEm5poTN58AWGAkXuVD7SLUxPmtbH6YVa7jv6FjKe2AvbB5Zg2g",
  "key25": "55woJQdESBjFUNdqKpQpG29iG8ZCQqvsYhUxzTqoKazjmsvieWn5yyqGE2F4LHqbjWizT3sERmjBvJ8z9W4Aw5jY",
  "key26": "5hAEaiihtkEYZuCf6GJ6G8zEvnVPntVeakQDqAm1WPDa5rJ1zgczW3TaaaKh9SVXSPYZ38QzmGNhFz9nzLxuSJNX",
  "key27": "GrqXSTLN3wsSesdKZ7hU9gzMetWf3JHB6FZKZD7poPg7tG9YhXN5vHCczK6XwTo9Myz5v8XfWVhxkVaA2sqrMTd",
  "key28": "JvnAhpX7uUvMhazEAnabjXA1ah6eLZgu8obtpYLeuxvyQ1P1XQnULQ8PgoKrH2o3UaEojwaUZjpdBCdjN471xR6",
  "key29": "3k9pFSETa2jAPK8paDncLKaQSvcYuFXenpxG9hcTQPeWikkqtsMbtQxAu5nAzoQzJNzvjDtRgY2r3sjH1hkXXVYt",
  "key30": "4qk2or8ykEBWcKhoKigsT9PNWe1S7wf4Cqc6jwBcqKU2urr37gqa3ZxRZMhJCWyAvVQosA5NiqeXpnLDhZKcbt6B",
  "key31": "2Af7rMTgWr2zK8yWTbCshzJ2QxrLfRZzPBUn8LKJdi8o1fgVkAkKsTJRwtKXuyD1apiC4PYVtLpcyD2reLTGNt2c",
  "key32": "3yZBGoYVzRqKR9Zk7e7EtKJzvGqybvNVfUhJqrycZXQwWmsYooNsdNKTx8p2NQitjgbUi81EGzJQyhXSEM5tViaq",
  "key33": "4mgy7DR66mn386bRhdsW3Y8duifFf1efRh1zLVqup9RQEPeAQ5eQ1aixJngCzin3FrztroUFh8Nb6CZi85DcgWSs",
  "key34": "2zvsLnnkXrGxRUk1pZEz5ZPFmeXMh8JT9adKdZTKqqH4VpVEyLgqf7ZZ3Sxsg7LM1MSBAKoqPZhqa1H1tsMfK4Fo",
  "key35": "4Aamc1yJRXrt5omdJwwv1HPwQvQJNLk749Pw4Xoy6GxeHmnyCfdogNN5UGZ7NZ7L3PEsFs8sFBBVtNmEZsNa37Nk",
  "key36": "4Xied1GTEzK7ktabGNT74GTcwvj29zE5tf4Pmh9qWXtM1fzaCkTFLe9ReLfFKk6Mvqpce9SnrtQHRBXwrsovPNid",
  "key37": "2XdDFW3NqeqGRL2SPBuQgZzM5ne2mW2JBNRsGfDvD2FRSDNCW25SuPsTSJc67uWxE6DWu1oNNvAbM1AZKfRqbahr",
  "key38": "4E4oM5CAcMfPSFD6BX4JogaYseTNm19m4b7yrmA1Fmnvr3B1MouXP1Ab2KbtuVgYoF1bmeNLZdgFZevg12Cs6oLA",
  "key39": "5mSQKW1vwzu7tKYT8deWo8FTnjZKDQkR25av1awGURgzTVPwiaoWFRSgYVRNsTX1G7YwSzUsxJsGysKyPshdiGj4",
  "key40": "4H6pU5c29kJbAwJ1bbThCauawev7AabRRLwVffTbwT5MCnCusTrJ6tDoortb6tnQtGDWnrXt8kn6gdCjq1bVirhJ",
  "key41": "2oii3mvQnuaLV8pw2FgXaavAkDpwmVYa7EVApqNoCqbzMsszxiRXkwe8uJEBXCM1F4wUERD2xFuoq68mM4psSR16",
  "key42": "5bZMV9d7DcADDV3FDYTSQzrGqSWEqtN1QAfBeKSkBJLQzbVH19TVhF5FGaJEgznKqpibameA4eW4jN53HPQcUmBA",
  "key43": "a4eyaN9g8FWYP1X6irtk8FysMubJeR8fBinRvMCef7aGcq1RyPQjGMoB3FjCnvrpZmKoufCgGFmzTt4DHZ6AZjU",
  "key44": "58AyAmqkdPuEydvaH28ZDdSjDoSvqDzzkJ9ka3wuJ2vxS38mJZuxos3pxgBEhg2WRhTCDdnrtTsaVtuzet9ZwPZ8",
  "key45": "2NGJs6nWnYPhAhdiVq7tU1bTovhMq4Mo2WLQ5m5ZzFCyEP9S3fudyMJAEeeM4quXzs5MRBP4Zbvh8pVvN5KAA3Pt"
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
