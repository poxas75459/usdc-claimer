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
    "5U8mCDSD3vNfoQuxcgeswS9DEsubhkFKRAUv9GomkCYCkMsKLRVQ9uSc6DqVxagagSboFrGQj9aeqc9DXJPYk3Fp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8DaFEfdnuTogosuV8kAHy3ngRhymiFJN1CdUwg7SdeBm8pkXvAtyfDGGMjfpk1wxkWAkCY1nBT8JajbCedB14QH",
  "key1": "2qGdcPqdfGsBmyzcezsMaPjeevTQ7xm1BMeGbrWWKSxEwE8soJHSeddDCSANPkw9XCPFiDBcGreuAG82ZBsmvoAY",
  "key2": "3bhefL3SDcJbqHuZ1reZcX1kvQ1hhoLFXL5CaWVLAgGnNjBwbX6yPKompWJUwQzvWGS8YkYyaZVjABmKeMdXWLKd",
  "key3": "5LEELzjoTZM9FoqoADexZqcK9jPBi3Ln8QKeeZykpJwhFCiswPZiMbCrr8yTaNcsVbiH2j8MGsFVC5uMpzKfrvjP",
  "key4": "YAtyPi9ERMTefqJoqF6AnABpwHnwSgfZJcosR6yT2AjDZY9D9i8pDyvAEMfGu4qxomLXpcnmnZ5FH5iuxx8N6qT",
  "key5": "4AbSEY5gYVupqY4oRrrnL5g2QwdMKy2aoZ6CfwvBBLjPv675poJy816eeyojzvR4FTp2e3oTL9qmEKUFffEsJQ2n",
  "key6": "4Hs914i2PeCrUmUvP7RHD5q7kuV49kE9ezL98q9qGfye5w5FTyh1TnTdSmfuQtYVYiVkyNQ3ReTS9pY1y3ZNMsGq",
  "key7": "4p1iMyZsAs45TrwY63NstioX3gBPCqzudqbqSrYCk3ms7Q3j1vjLVgx9GbRqovSMNJuyNZRqZ4poptGM76iV4pTJ",
  "key8": "J2jnQDk11VoGo8FsdCJ18JXiGUvEqQPJXfRSNrPJGpjaKbNqR4pr8vKM8pP1wF46b47D4YCWgUeaXv7CPxLdCuf",
  "key9": "5wy8t15v5MAg9eMZBh1r5oyQvE9skFXnx8rCRbRPPCE9KzPneaBN9bz1mzRQ5Tz3N3VWUSjxoSy7pqRg9Rxygn9L",
  "key10": "5St1v5eWxkwx6WH4HcDAdRwLJ8NjrcZDxdnaR1hwymGCBusA4QH7559fiRhSU9jA1rmhH5R1V8HwcVYMCASmvX23",
  "key11": "2vEa2RnLb3oabqWFaLDTpXvDhZq8XaewiyXEEf4j1eqPEuRxkUzw4NksYjjGgKHcXen7sSfSJbUbiggkVJUiiPx6",
  "key12": "4KnodFirjN6FUdPc17RGLN1Jbz4dZ9458hoVUi7NDx1XGzeXUVwVFgYT4JWZZXhNsM4EB3x6c741JwkR2RLZsFZW",
  "key13": "5HtpEuDk4mZKpYg3fZeLMVujG2KcCaU5jCXe2EutHvUk9NoRPdtTBtwaLHxNNm8UK4RGtFgivKuBemSkcRsMdYVp",
  "key14": "hof4NhhGHu53CTiK49NZB8eJSVzGVpMhnz8c5wW2dpDy6epEKBXtaLced2CWNFhiBWZVNYpnzn2i39Bo81haWKp",
  "key15": "bWfZhjtnyjibWWmqxTYixF6ZLz3cQZUa6xtyFzHopsU8XE6vJL7Zmv29ah17r6tbVbvZWrP2rtZfbhShiGEa8Db",
  "key16": "37cexg3u6DguJ5dWV4akuuaf4QsDZForDDCQScG5W1sNLpjB89wkm9TULKttUU3BwWFSENCzUqrEa4uhKqr4MqFe",
  "key17": "tUwyQecCSwViogPoFm3aeAxfjDS2mKFCTPTXpvAUy41rHdm8NHNuB2td4p3FRmPr8pr28geBw3R7biihkUgauuX",
  "key18": "2sEmNDnYPRzGVW2PFwjFwW47RMn6phs8BbooKz1HRUHfg8XBkdo3EUnDd7LoP2un8C9idABR889xVujux3ujCCCp",
  "key19": "4vKhnc8hFZgGFwPsrk4iR3J3gZvt2VKuctvEyvCxxGUtZRx7n13pkKJrhdQQBBLqAXRTc1bFhbwEP3gnngYdjzoF",
  "key20": "29LYrd69PD7bJsF8A5xAJmB31pTGik9M4kPQHoeEYk9EGwH7Jg1UhA4zVVYf9QCZ7uJ7e8UsfCQWwqQEAz9BaGjh",
  "key21": "3CDp6xnyAUUy669AB5qYuawaV6aBhKSywTkuPk8pnYZXLTpWvbuTNzcgAbo6BhbV3ckEhAj1ktLg7qbQdVBspo17",
  "key22": "3ZoKZmqdJQCYRim51ad4GpT26jmjx7UQsYd2kNBXSMKdR45inxP7CBLg8jC96UvHvspAFgyRWudTCtrnFxe1snGo",
  "key23": "5bc1DwTXeMEwDWRE5HncULZNR5w4wjcVudhnCWV6uvxkjuBctoagJBi8gfkbctcfpxVETQ7azLsrXhJVffXbsUse",
  "key24": "2JMp6DkUuQHQ7brgq8CxDqXdAAB5xUX2VLUC96LmzqrBoLLNcWbEzHmGCN9LGPQziewZ7Lr3zMsyUVeTAMmVvMTJ",
  "key25": "2btkZvoNVh5WjHbGmf2uLyGCkXsuhUpC4e9ygfHMUxf9GjnJE5pCsdPDrWuc5fcvXNEgohsUqyrUDyBsJiT2iCSG",
  "key26": "4qrvwFaQZmmAEo8qfBoPgoqiUEmQYPjtCCoWarW9h5izEYgSiixGE1h1DREe2e6aFVG3tCLzzzhgiPggn8gz9Z6S",
  "key27": "4dPPxfGPeYVDaDKpiNjwydNFLQaq1cWxucATNNFAR4TE3mNRuZnXbkNHVSGH5xBAxznNoy3xwDfbjQVpHRQToDmr",
  "key28": "3WsugSBpsLbNu4Snn4S7WPhExmQCNpWUFiBEjLetscrAHEHbvXQ85kzsMbJ5nLL2fT8SPfL8ZK8nD1f2rcGTcoEF",
  "key29": "3zjEaJ4fm3ihaCM3dt8SGAGsg1wvBHiFd65sSJz6HHje9e23zDCPUXh9YXbmvFesVo3iNDiv6s5zBBL2aFaQCqDK",
  "key30": "2ADknvor6EdBrEtWwsQ2dk7vvi4cB54Qbgt8fvHDQHW8L3BxLxaDtybycWRjhRDfThVUXVCAyi57ggG6w8Du2tua",
  "key31": "26b6ZofDD3gmEUQvCkbpcA5PDFGY33tMuuLBPzY1fYi1JAcJQvwerJXB9xWfUSMVEgE1wALNFauTAsoZ2r3MkJCf",
  "key32": "36BtutgHhhi4fHNrtVB15yGtGPYtAd6xfzM7KvuJeAsVuA7mCDPZN8oRfdEzGiXEBY9nEDwAZHJhF7khG7LMwn4m",
  "key33": "2Ski1JWPRdujrBWq7u5SKP3QecPGLc14fn3abJk8xAsH47dHeveCHAEB5dhMe9TfmbiNzCsDJoSu8fspmY8hFBp7",
  "key34": "2rFWaMbB56cEvvLGKoh8zGPqjGVpbX11o1tz5TrcZ2rdJ7hhK2ctqxHeKXZyMcUrXKPujuV27c9XfjtX1Hkp9ExU",
  "key35": "655SdBz1eRL56nX4yRMABuw32qX9wPRM3VG815yKzYbQ9qPgwSEGJT5i5HnLjgkWFf7xiij8f7xsEmQ592zvvjzo",
  "key36": "5JbahNehcCPXsiQ39WjGeFPVbPk1m6hftc264XArpGZRkBUZFPQk5TxkpC26xT8Z8WuBfrgX3aMqAnbbyB79oTyV",
  "key37": "5G8dhQq39xpAEeU1ejjdttmuhtwuNHEgJ7oj2txiTm1VbiJBwVAw5E49XBJPCRPSVYDKUEL3CU2kEHMVHsv3MHYg",
  "key38": "3ynW15YeEguX6xkpjxCXrU4Uf4ast7L5YNQeoXDQgcKPmRgwW8Wc5TRDpnZn2zjbULtYhtfKDER7ZSRXmELpoXvH",
  "key39": "5u36kxCa6eBBmaQiotxsb517mNgB4oASnYbWRj2JdipsZY8RcrB4SrouXF4KnVxqQmXXvYwu5cJ8x4L4GzTCaveY",
  "key40": "Ba9a9JHqHqv29jktfwThS3WZqH66nbTToDiLnQ1QVQj5jctnGDyVxtSeDGvFiJq9R4XEgxxpnQ3AJCkxtCwh41H",
  "key41": "BUp3pahng4EPR2XeWP257fTnPeDrWWWoAqEJw8S38fuS4D44P8FJ1QzfudC8VvG7U8Q49izLGgqBMv2hCxfxt82",
  "key42": "5ZRjUCdjDh3vzipL7SjEmDB6PUEhMhfk63f2EMw6wWqGt7hJrQ44n7JSwoJgmQ6f2Tjmsa1oBie4N5Y1p9qxoRyr",
  "key43": "BNRGSZE2xXdnEP6Ee9JzjuC8pW4YhdB5GrGQZWBqdoUhNhRBm6kgVACSvJAafWtUyTBeEKRF1r1czYBbjoZu3t5",
  "key44": "3HX8qs9GuPEi5cLsidE4KRfoEa13wtQcF8VVTYipiE6Z4RTgNHZNrf149DrRzeyH6Uhdvx8M3oPDc868Cu4xRbCp",
  "key45": "3ti4obq8zGNsJ5L9meq6mEBWyydH44i5nxLqULfsxv5FgqWTqH1Bcnp262dB3j7jeNdUKXsNURaRjqPRG7Uc2pEQ",
  "key46": "5wj76k9cubMqnBcK9C4GUWv2LMozpL69TpcsrMheM8GAsjjjScmHybgDtZqnyZ9RiS8SuwnBywGMgKkmox5SFSbi",
  "key47": "2yBxuHWny3QbszLxxcfZhPkKqtsGZxcen9K1RG8EP2BE8aYNsxLYt1JiQbuLAwULFdfAYkhGKhdPh6EDgfYDTfMH",
  "key48": "2StXgsBAC7VxFmCwYsXXwD24oHbxcbqUQjYS7piVAi21bD3GSRSrSpF255wBE6kvM4XmStKi8hGB1uEsbLDKynn1",
  "key49": "4iZX3HXwmGZzniRCVxTA3Z8jK4yPFqakpPbwAiJ2HLmsgmsRkbNPNMYhkyPAP6p7U4SsWRQ75e3djGbiBMcmS8W2"
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
