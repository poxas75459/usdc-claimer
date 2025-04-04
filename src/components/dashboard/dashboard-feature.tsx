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
    "46jQ4sPa2CQnkuSxwxbwG852C8tEP6KjnnF9sevXWGiQCUnc3GZLRxfhBi8apg1ND18gMKnC3wmq8VzH4SkdLZVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "237cMzeZkCKiieiRC2GXVbzN2p7s8B7zFiXmdz6WWHeHcjYA5Q6FNydFFJpQmaCAqhJ3CGGYPhzgFX9Ym9Cu9z5g",
  "key1": "5N7HMkWNrs8ZSk9HsnvtU1o1AgSU5DbW946T43j44tNcpBzdz9CuCrCfbAywwi2Pd2apYyNyXW1VR7QUuqHs5Nyd",
  "key2": "21gtUHEQcWWwiLTEp7AUEGFVF6DKTxFkaGgfeNhpkAa1z1Cz23XG7FAAkkh4oLDtj7oqZxUFpmKD4aRbhtEZXpPW",
  "key3": "4H1FiWrxhCZoTDQE7gXB1zWYKNPFax1DvcVehWsFubZTJXbtpJNdCWfUQo1JnWPKLHwqHWd4BHAugjBh8YW8vHD2",
  "key4": "67VsYykQ4gddYwB2j92jkxaJDf6MurrpCsVg92qMebi6RbyXQkb4TcdHhq4qJpeu2Y9mCVsn1CtbFKept7VdTiVB",
  "key5": "WmAY8E4WPrwLprHZfBDxWoLLQvHsoZCurMJX3Y4H8zR1cYRkWGGBrBRNwENho6ihiJAWyUCxtvTUnbPZ5NHTFpQ",
  "key6": "5fB1RKPLXWsdNAZZPYcSgh3vZw1UuB7CLXDw1br87MG5KSCoF8JfzQY7L3ggHbmC9bktRcHtdE42XAVLLTwUXMqq",
  "key7": "2Fyj5o6yaspxGSVUePrCWZdMxaCjSLF9Vi4azKJSUjwRjc8MEf32Lts67VwDzozHSBCGXJupzLKY6NfnnPJNhwrK",
  "key8": "1Fj7vVQDPyuL3hPU46s7EzvKJonJuNzqpHRMkEjn9hYhhkcNSjZQMDN8DxB1y1BdFE2Fak6Ywpjyij4ar6sCNKu",
  "key9": "2fVKLCycg4VwK7bVzbrQmV1oipB7NJVcAbHgYnFXsFAf2qAzUzckvk5iBHk9H7dEEXxmGpwhh5nYM1KQkeMbvVp5",
  "key10": "3RZQw8gSUQezRCPfcVXQszrFTnxUJvvN38ekgNxdBoSvK9weC15taQYscWNYAU7hrMJxo3nm1Y4WMaNMcve9ZHzn",
  "key11": "hBLUS4voaKU4esdErZAQuDTetuTw117bUVVP4ptq9EYLdnHwEjbosuYPhGVpA2YGZehU2ejLxk9ntW8hMiLjKS7",
  "key12": "3xb4TEd13tbzZJtKYSTQgXjtLhbWdQpwYeZWnXGeqHNeyDDpjUKfAfzKzjPGxgip4n9STmJd2AaBCQMdoGRdEaax",
  "key13": "3wGYy7cU4osmPfWAHvT4C2kyazt6un2GmDkqjN8RoKAYyDp9k9xLiD94cuXphZTHD5raXagxVjKLmbymZqmWL8bS",
  "key14": "3zdPKik7Cub3tRxmNcev6Bg9Woc274DmoA1SehWSqryhi77Ytg3kfrALQrxSxcHGcCobZt8gQQ3DKtkoAus9kKig",
  "key15": "9Jfwt5GFVgyJUvRMa9to8LNgGJu3kVBh5D2Uu1XHjvjBoW71mvsYcM27n9ywtUGoMnVHxCT4R9eB5uGQ58qYJnQ",
  "key16": "U7LmvFXaKXXY6awMQV2Sd42QWAgUGvFF3sEenCy2KFHWtyF5K8Ljz9BC6rLbqseKxezjwDHqokTgrEWxapb21X1",
  "key17": "4reBrxopoaK2ALA3SSTjhtybqorJUYFLbGSBrajSSXfZeSULAvGkLmo5Czy7EpMgu4nLGyc863wwekCL7y5h3drP",
  "key18": "2N1V8FghhRvPh6njJ8jSYbxSb5pjKAN1cTf3Wj38oNW9j2TPQTgs7F5VgfjAUgghhyRbkpp8wmQUSe7wCm27t2P8",
  "key19": "18C4MC2AZwgj8pZTUeQEXQtEbGsRgprSzde4riUQHKNxbfAMZG2kbvuhZ4dTSa7gcyccjGhdnBHmpRXfCvKEeMq",
  "key20": "3ue3xMKk99nNisBkdLfF99rnRAZiv1uf7aaWiTeL7BDXKv8U9QHbVUZcC8CHw2z4mFSAERJxzrhiPcbJxEWj5ijQ",
  "key21": "1Ucd73gA6nM9mAxhVcL7j383gaJapwfRH6Ljo83hrpQMegyMB9fMXrEhhkWa6RNoKA4MLaCHkNT75p2M8PNSL7B",
  "key22": "2Cdc2K9W71cx2VpGiRwLBn6idhM6uib9Kt7Urs4weJYNwmQ7BqU7pCknTttCE8xA1ovqrJwyQhH4pqfddbgfaCtd",
  "key23": "ZRLyfZQgBNQippPJdRiq4rBrA6KBaGzDPHAz11WvKNUgo9k26CMeRxF5JG6h5LZJe6tyvYNA7zLdjes7gbBcSxV",
  "key24": "gusBx1w7tBfdNf2qmqkk3tJRnMVSLVjf7MfnVUeWp5nVWt8gaXyqrJfEsCMzRXmwddGQUwTaHsnGJLKBdUf44JH",
  "key25": "4kJVswf2Ea3iVpa8Yp6mrxuDrdHZo5VJZc6aXQWCpA1nFUKReHjdBnDRHL9N2YESyh66Jtjhv4eHvwLbT4TvsR51",
  "key26": "4FeUEavCGpnTDKQ9UJu9XhQrhr9Z2WViftbZGi3X9A2DdoX1eAUcb1c75bFNqhS2Howjcn5z5XW9ACxC7efcyzH8",
  "key27": "3YDrat6LBcDvAaRgX4KmQr3hGGQT18w143rJKmE1bkgVfwzCqu7eRzbCopwWYKYcFbirp3uiKCTp8mqQppxxvQ1b",
  "key28": "42ArSgximx7u8LhdLMykhTQyeHVtNcvZS916cugdwNNUJ5SM3dzEYkSr1LLjjk28aQE6k8JLRSQ12VyphjGER4mF",
  "key29": "5Hon5iingcTfySGwDLDF9gEoje2GeegFpF1TnSfrEWANSeyRJa4oWZsjVP7CpsZxxLVqU2qTHVRq4YvdxhBnGxf4",
  "key30": "4pYxu87jZ4yjhDh6GapEKCLjaERo31fyoZeREEtijmhU2X6msE97YrU98EdTvond52Xu3fL7G9zjYs1Ln7N6mtHf",
  "key31": "PhsinixyVsVEp37MbZPeiLwWhKZkkzUv6W3onrCyiSmssQurishkJ746nsE3HuNXGtsQy5nvyUgJYEku5yttjqu",
  "key32": "2ZpbZP8WtHMoUempiMeTGPPT3FYj9p5CZ59wYh5BXnNWnspcGWJDjuC9FKJUGcc6H1PK4h9fYAKaNRxR9pRQvCnP",
  "key33": "4vmPMKeyFDhUdL3zQSgMpr5cwK4wQwg2XLjHwqzT3mA1q7u7X1hB5q7nUMCuVweUTQs2TiceT4fiqk5XRMvNZx4q",
  "key34": "2iJU9HV5qct1GA9iv75zvsWxXFdDpgmbwr14dbzNGGapiTGnHjgUvpcx4H6MfgSLpXToSJkaRChE4u1C3AT8tJTL",
  "key35": "46Ybf27o6aV8j95MAh2Pjdh7oWBP9YmnVzvTj53FJzsGNjpHNUujb9ePjUksCGKoSEDdtYDVBEUC5JpioMdtz8EG",
  "key36": "2oYJ6MPmHVW4yZdQ5FLHjsREKhMhPzTkCVtVsvhWnzDJrzc1zmQmppkh6P2CezbvJaXf56KtGSRBvpRvTye7yCv6",
  "key37": "5TQvUT8SMvhZ9S4gmsNSogsXEvYe8g8QtJ4jY3EMaSjm5fyfaJQwhV1pzArEZ35cnMEBo5N6do9uB4L72Uv2jnnU"
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
