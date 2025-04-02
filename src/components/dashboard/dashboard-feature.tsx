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
    "aHNN4UvnweYxJM3MjDArTkNjYpXwJtSJvTsb5BTa1aGeXMhREjkLYqexdLs24fKzAnEAwbLfrjfpVwXuv8JsNTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dAiLBEJEZrDATiciRUHNHHgjXpPt5zM6KGYgfPnVikxeBYgYVhLJpzYWMDxukht7QJUa6nCqR5Ldx67qqF6xb3R",
  "key1": "4tHindWoEVJ7NQZWSrA2kJcfLRTCkLwHZJ7rNiwrzZPLzgoqJWW2LL3GvWPoXx1tShoniVR29ijc1CjxMMGN4ofj",
  "key2": "giFvE6peosByjrseNR12CKUDZHYxPQpZ9wGEQ6tAMCLusSgsuEVuRPaax1CqL64kis6JCTKT9qMsmA3oU4M8qqV",
  "key3": "2RrMG8HwsupT3DCrpy4jXcwDDLrgSJGC6pkHE441F35BHjCNdqgfomX3mw4ir9k2MuFXBuHoKCFAZDQzoN9Szj58",
  "key4": "bK5PaZ4SjG114fCATAyRq6uMcWkRBUvdhrpVHV1bqJXgd6NkKBEydQwaXz3sbAPX8yWNwG4PzHv6qatWtz2yWCX",
  "key5": "GbbNu69rcGAemv7cbHh13D9ush4Xa3DLzEi25FrcUM7FKuF3vwD9cQ83AphKowWuC5FUQLU9vyYv1kJZqKAJB8C",
  "key6": "9p6GL9whan28BufpkoMEeCXNuNtGojcDnmhRGbs1ouCGXzDDPNQbFN1ri89HthoKFDbXGsN7dVJvHkyMu9dcp9E",
  "key7": "5SYNpUgYDCAuDMufSWFMVK3isRY5rThjrJP32gBzux11MZcgk4iYyFT5VWd1dAABoBeNfzVhisFa4sDRpYdKNB7E",
  "key8": "vXMvyMTwgDskU64EhL3EWzLPhoDaVUp5eoDnmqrfEpPL2TnZP1fCkxD9uqetL7VaxgaenMagdtp5fMUJoCKja3P",
  "key9": "My9egLVzV4k7ZwdpJi9XF8EgGaJbzYWdNgsdEqyWs4xrVP3rQXEJgjUZrGQd53o7MzGnD95Z5xNeYDUAg1cwkNd",
  "key10": "4AoRQ7ZoVYtoXrKCgVhEeAy3WHXnczT97jgCw6WFkk5XomZJfPehchbzSPQFLnkJE4LvGrKacrEH6FQ9UxDfcs1q",
  "key11": "3N6kcm9H72WBr8aj59CbCDRx4r32tXbEvuf2tBVQ9N957B6hxXLniQPFN9saNyxEGWVEx727JXuTW5tmAzxR4Pog",
  "key12": "i2ABryA74noCbu8W7RJVNUpE4rvV3JsCdD2Vx1d8kmVD5KV4ZJeAV3JaAhDcaAsXg2jBsD2XVA3141dwvLVswJc",
  "key13": "3J88ePL9CyDxRpjwNWxkjEVV2oREvHzZBNcpTnMmEUxRu4XzudQgv3b8QLapUAva4DAqSAyntWaK5aF29neiiU3U",
  "key14": "4VNFoLuPerXPXg31ytk6AUXGE79rzhEEHb3t4xJmW3iZJHTDrhSmeWTkog592NBYmGqn6x5C2iYuanP543PMT9Ka",
  "key15": "5oA9XkXbb3vGU7xCqAJF233baEUcekv3AhTPziFmzPeVMkdMF9KZSoXHRNYw1uQ6gs5Cb5R6QK1E8QeqjgjKRDnE",
  "key16": "DtxMZxh1vACJUt2isjEHVgDZBEBMF6FmfUUGMTby51nR3QXFQFuTFXRdGuurtnUN5QecVAe861tp3W1usMLtcfh",
  "key17": "PA1fJkahdu16pLza2TagD8T3a4ZfFw2DiNZ5Efkwq6bwKNBCVKYxcQzEgem9KwhvFr9zaBnX21T6eUb5UXLGX7u",
  "key18": "31GsRaEPreaPFbtWPVUQoADjxLaqK6DfwmdwTt4fZH5Dzkd2shAWx1gbwUjUsgLzxym8NBos4oeMS2eywowSkwa7",
  "key19": "4V6iErHkSjCfJKvmYWFPn84hAtmnU3AvKz9TLntMcGLTDHjXsJRHt4vekjqfXpFhRMhrDmbskqF5oajcFAqvoxHP",
  "key20": "2v4nUd3JbdkRfyDrrXXjq7nyMunSw2rsVWtZEAGuvwBPf82YGqmmuUQmX9zJMg5in62CoPdjt9bAhKjCjSr2yZaE",
  "key21": "2oQFsdEvby8RV2pwzbEV1qbRtjMtoXNqYdYS25mkAdmUSi46MtTnP2Rk8gGrXoUzKY29LdcFSao4XLFWzs4vGvxU",
  "key22": "2kbbav7v7bBJxWw9wuHTdndTsCWBSJ8J9gMnW3VcfXeAz5dFD6k2PyU54vt5a3CwYUUHCkZ5AvWc69zxu4u5TqkL",
  "key23": "2Jq9wswfJivyCvd7xzyBwcJfRfZqfVr5NdPxeBx6ZKyan9zZUcbJXfQrPjEbZLPDCqLACHUeYUsQMiu7wv8mBq41",
  "key24": "3LjvzmGKDhbALCXF88UXHpYViCRcQaUqEzMWpR4XMQD9ASKcHGkM6mtAfpzKes48aZ4eVs2GeadAJDrgHL61ewL5",
  "key25": "58m6WvWSdCMiVBwcAt28TEyvqVzSVM2kNEekw1U2nELxTM65gZhfTxucwh8FG97pvQyu1ikzqvSbxY8Ws7xUwRgi",
  "key26": "3r1oa3qJKcDynwpwLkTALPoDPyvwSY3amm8pU5PazQoAVkd2TdNLmsML1LxcfpfEMAUpGwfYrZYkRFYiQpthPZYX",
  "key27": "2pWn2oh7mBWM5bYu7d2g9dZeqqvZhE7KocQ6SirnMMY9vTqC8YwdquuFwiXVt8SzyComfMrp4VjEozcAUgbddoVR",
  "key28": "39WThAfxye8GdEP5sFjZvjnrSF6J7du76SSB6mWYZ19g51vWMb5p2z7xvHquSG9pChwmxVy9v1azoNDYcfku9RPx",
  "key29": "5Q39mcjR8Se7fC9dmUsJxEWScuB7NKSQM691DdtFLfrDk9ShVVwse3TbFRZUQwxF3FHYMHVWiyq2pHbCsyv8WfjP",
  "key30": "4vj4ifyWqDj2Fgrovdkfh2eheGRvfPTSVaE4TFkSBuirFo65ce3X5jLTWPqHAd3t4LZ8GMhK8ZKUXPRGAE1k2ok5",
  "key31": "3ABQDh1QBkz999GYBxXqvuEsBE7E6YgMGzBbtvXWxKBamwo6KsHHCTJhgxNGotWhPBGr4aTToBe9SSW67M6vjeVp",
  "key32": "CX7wL6TtBc5GRXek8PqxAn67s1X1L2qAfgzq82qe2cPBZKJTZvxMuiEQp9P5nQiHnAk5ep8s2NDATnFrE3wEEsp",
  "key33": "ztqcABHpL2tcYi2342bGeBsy5VUo3EHBkxjXsfdrmFXWHx3jnZhMZgmCNmB23bbDLKofaeDHkeLjyeHNg1UyEzJ"
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
