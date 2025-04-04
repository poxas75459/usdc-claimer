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
    "msyvW3o4rE3XpcctpdB2AP4xVuRhYP58YFLPy8EZyma57K6uws5xyTNnfAKoNmnpeK4DjqxCRVf5Hbn6zYr5ofx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t8nGEETgc9f9gb1gC6yJntNmsLxVTA8WBSxbH5mxtupUDUyEt8cqp7cYvZ1weSd23KJzvisPvkAZvLk3fGkTYBY",
  "key1": "5Rpj11Yft7ywHzpoawbLeRi5MYqYG6ZMjYP4RtzpLZ4c33exxoSToDhF29AXhGzbwE1nbJA8LBG5ddCKW4avWowH",
  "key2": "2D1AgdinyTBc4zJjm6y63GheUibfPNhjBX7v2Y5hPMJVst22keRf1VT7GVzrndUnyWJVAQrRSASxSd1EybxTzAKt",
  "key3": "3MKGS69d8bGggH7BiEDyPUutGDE3YueKeWfCQ46g6bWxKE9jPpaoUNpwjpv4BVs8wnG1FXk48tZMGgj3WbcBb3YB",
  "key4": "vX9eUVRZMB8JJq24sXxuj2pTq4A52QcNxGjbgheDdji9ytocZQj6bt4dc7C9CtXq83M51Vp4vy5GjxyP3SeAdwN",
  "key5": "iffoBYQEWba5AYDqqrcsxTyF4u1VpTBNtg6eu9jzKwfBUb8JbNNyTGXqm4dEUcTHiTHq9fCeeC8DKuGoUrwthNr",
  "key6": "4vyLsfWSQ4vEhHNYXQiimDg8Xsqs7sJcttK88ZUEaJwCDQA98QMzMscW7dYSwesR7n2cyt7kN18F5GJiZNDpTbLq",
  "key7": "3yVe1EXjnXt3bXMTndzjFGSFhKy5ZYwytVnw5ieMKonXcTXBcuL9r8TGbY2ScMZ3eufY6sijzX44Ty9j1aquY4mU",
  "key8": "9k5wACS2EoA1PS69u3HgCzxCDTVHkYjvkSSShSayq6deBwSZy1Lut5M3VshMknBtr2LGHv9eeddcXkgcn3ateRb",
  "key9": "5NKegtvhm7PGYWBsYD9iPyhRiVjZgazqZoiyEw58S18JZEdMyRQu3yQsaQbQT3WnAQUGJBwELfDp6TdCu8dKkrko",
  "key10": "5juCsfuHTpxSKSAo6aJbZyaB5Sn924EubPpkPSmX6ymgj2ZiUwT3fLfVj8nSmLF73LNDe3MXFtL9B2ViTzUGoAfW",
  "key11": "3ryfRDo3JrENPSttfmgFUHXND5ENmsHd7RPAzaDAjDF324sJ2txB4GXwE8S5aYKsRzx6B6QNFKy887necbCRydom",
  "key12": "2BVTyvCEy7V5h8y778QWaz2mzwsmTw3Fj4ZKmMGwEczAWBaPrww1DE2Eoo77w3VXP1BgqNy6yXgJHKWhZisy4w5X",
  "key13": "bkh7dxgK3uajGMFwJ3YMMsCRLfJA6TSLtiFEcEg99S4PvdcNvM2nCLtkgSxdzsWQNjAmTvwEA41mBSPkMjuyMQr",
  "key14": "3jFPwFJgm83BBAA7cDprvFULrFmzPxRJaEVdBiyHCr3gWyMQ4TdTaSQGyKabe2F3LFChq3DAjpxx6ZaZiFAijKva",
  "key15": "38ph9iaB7kLDm5kUJntKQch6oCsh2aiVde4cQyMHsVwZAhb2ZDqyXc9MhZJzaMnpigi6Zti7vUALNuLPX5Tt2LgT",
  "key16": "4tnrtnjPpqqjrgZzRc6SA8FWw55JDGfFee9Zwi2MsszQTU9K71Eu9m6CdgEFWBTVRrYcfZ6NLGc5x7vi3LGh287A",
  "key17": "4Y4aDoNLZT4VtW52zF29z4YDtedTWNJQ3kYK3FEUtERgdpZmXSC6uQcxSvq4BDQczWHznVgbDxrNcYUccGD242mK",
  "key18": "671LnQcuaw7pEZiriBRB5FudaRH6FsCt4436jEqbjDexGme1VsMhj8KikQGQTJEPFRipX4k7Eep1uHzSQb1cse3D",
  "key19": "2xy7TGZmRUNSZyLFAEKj1jcQdXN3xxK8r9S2BtVmvTWSHHrYs4Lxzbye37C2xvuQvHw1B6pvYQhW7kjL6koYKMju",
  "key20": "2Kygm7vgtCXDcTxzSTeXzNsDpxkxJcihWD7QBVbhWMcvC22edGMdg311CPGbbghCcB83K4dMK1RPLW36n5fSVp1o",
  "key21": "2Td4zriFcgosh6Bh8Y2wwo8VJhJ43To3pymSmKginCrY8nYeQjyAhj1YrXdiRRuuqEe1ngXc7mfRvJaDVf6Z4EPm",
  "key22": "37A3VrhpvZeDvS2rJNNxF4cNUFs9TFsare34ifXA4tnNcaWfcZB6c3AzYsLP3bMm7gfwwN3dS6C2EGZ2YrjjuqTM",
  "key23": "3cj6FV1VNaycQL9RR6FFxagvw9VUN77La3wDXhaKxuMHPnbMGHbya7v3Nq65HsKW4w8Ah9FEEs1gW9DRp17YYmPf",
  "key24": "4xsDRuNdnNQgd8aQG1Ck4GaG6wC5dsBX4jawvSF5QwgDeYxSPpPJ1wWhNaBQA35FLcMFYhfEAWx8WGwuEc8o5kPx",
  "key25": "Atgeyt4fX5yR8EJ9J23rkpktsb4wdDCdj16qPrTFtkHwJuMWVjqA4J8nNQBzATAwXXDioYcobfeswprVcvjf4JH",
  "key26": "65sAmER1HraF4fVXM5qNsdXdPHmf86KjRUEmgCbjhpCf5ji9zsePGdJ8ZJuoEzkgLPyuVgQ5wsPwqh9EcxtFjuKt",
  "key27": "43G5jKVeB2whEoTtYphdDdXU7hbZ9T7eXZuWjtmvv3ymQ4f4UETNCaYLZaojLBx5oottJtgDdz3gd8CW6h5WUqkV",
  "key28": "5ETrNswPbuRzsMmcbAxdwMkyF1LT5QhKaT4UjexGoVFxuRE1LExAxsHNhjPqN5NZ1MySd7P7KutEQN7GChLVJmpG",
  "key29": "5HtHFp9mopTAUE6utx84THCp6GaxtBwhNaNEDCtbyUh92R4xhvBhcYt7SnAmZ8SMixU7FzRLz6JD2zahYUa6RcA4",
  "key30": "4aSuAdEDtcRV7uTnS8YvLU4j88mY7x4YChY1iVmKwrH3jhZC1pitqvKmievSeqjFEjZW7Cn4QdXoFcFUUB6kdgNY",
  "key31": "4r4pRNgoGvdZcvgLwUKgH7fYcyLC24cdr7eSQJsED4Bs4QcKbP96EBy1e6W4muyPw9ymKiRsKRvUy3TTHodQEoLW",
  "key32": "r4AT1jTAweGuJmygiqvoXUQhibgK3jY61vxy31H2z6oMkAKL4GeBuBy28d4jaQifv3ujwgBf3vdhS9xwvCoPpvt",
  "key33": "Uh6sdh9fm4ZfRzAdXmkFzvomSrwTHtQ5gpPKMC3g6u6AsigXvPLz8QnhuX3wAqK6sHE5oXW5ivixFXUvQBmSkX5",
  "key34": "3cMoiT4ojFiq5jnVxdMEf5AjL4B2A1Rhnu7yRQv9yxbxRLbQdAgV4RvpEgCArkkgCpAhrTdyNEReKAbHqfY8XDgJ",
  "key35": "4F9Gi4Rw1cqPETSZ9HMAtBK5jvpW7wh6JJRUPiLcuEaa4cATfMX7iB9nF5w9LCBVLDdnsWo1iy8G7DaRAwDPmJ6N",
  "key36": "4nCPfsZSPLwDxCkZPiiG2b1K4dg95U1Sr22BBKSm7q5pncPpYVen3aWawtuFBv33rwWyDK7fUrCzVWWsL6netPur",
  "key37": "4PQAcdPXuXDGyBDSzEKtiZsTZeHffXvaH7mvnXCUQL1WwnkLmVVDGLSGba91FctcC3DFPbfehFuHgXxfSgcoytvc",
  "key38": "4n3gcDnwFnH67F3tm2t4ThHtyezafd6gpxKwpVe1Y91a8tBVdhLvo6kmaguVJ68hfdYiJZiZKo6ranqtqqGra1xb",
  "key39": "3Zqddup2gVM9oBdRmwazwvZYzictzJHivSHUKgYQC94H7udUPaMZjkHpWiL9W7aPpdyeEcFnxxoWnLPURGHBhBGc",
  "key40": "3ShsHZBPZxdX85jZvJfcA865K2dynbG3yVyKRwWxeRv3BLHoyp9Mn56k5tHLcTnbtASpT47NphNq18qJfydJQRdC",
  "key41": "5r5u6nb1nqV6acZGodDM3B2RJr74wZ4p7nAgEfSxt7aNGVeNLwttUaviSABKMDfAe7hEnzpMGiKETbLcH8cSakBH",
  "key42": "5i3kdqHUbqgUNFhtsZbqrkZXrPjvbHuZApGiJR6XpkevE5y9RTfDqMFZNJ7ofjJdUanuFdifPihDm6eDHsuV9zBK",
  "key43": "4KWVZKG29uYJJgfRNyJtnCDwU4Pu97StfVXXYsj4Fn8NLH2gudchFfsY5HtbmA6fviqrpHzh6u5YyajerX6Xs1Ph",
  "key44": "3gPaqBj5MFNMzdD5xWh3iqdDLtcxcm4VGt4BGGH3baj48khnkTLDuymzsD14ncss8PhvdYhVSTydw2osbCVXZ8XQ",
  "key45": "4iGMSaWFTqQkXqnnugr55ZpWiLg7BJ4YbyXf4wFLxXtsw923BGuwfcqxMMjW8Lsk8TpR5S4CHSm4Zp1pUKo4EsAJ",
  "key46": "2GPf2crBzG6p5MPr3gvW8bQbkQ4zufnjDEepEng9jCv4vXPABhYKskLubE6LJro6Xp4cYTfo1SmYtXBWcV9fwtos",
  "key47": "2otifSf7i8ZFxKwFqKLjicSib27tFFneQPSuwXhhRGovFYFXPyADECrbL1NFYTUP79TbwN4RpcvDeZ9TLHddvdWr",
  "key48": "dQxXdLNGdYX5SytEd71qRTnJDxdcY2vhFskmNN1dDLBeN4xbVC7a82vfnXU6WuVBY6hKLcyhkkPoDQXt1ztKH4M",
  "key49": "2nhuijLiqWwcW7EvsUr4FJpbcWGLSDw1RT4KoTeEBEKX1BX1m6fwoGzbw1hMqK6Ui6rBx1FDyYCB4nmdD7rJuW8u"
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
