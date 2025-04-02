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
    "64pQgeWzF1jbcWL2WULZR1H4zhkgt5eW39BC277M8GA6Nnw77fyrEKRoLaKmixXzEtKicY712d7nbPoVSh94nXEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZacD7FcEkHVFHP5nu48EYUz5o8rQp2Gdz1doWha4vQojoi77hy2ALWA4PKuRkmMW76fbbeVKDKEBUujMu6ky1MH",
  "key1": "3DFzobN5fScdTzgESmt28ycJt8WcKd94zUXdRASc8XyYHrczZKjABB3CT55oA9zxE6zhT69PjWAT8uzftdGtdLFQ",
  "key2": "4HWPEkJFA9T9MXD3N5cHvi8zZtL7c56iNYuTMwGg14b2rNj9iXUonf1DnfvYTyKT63pugdtqU4cskV4guMbsLXay",
  "key3": "5vQFLWNTyu2Ys6DQX6GPPe2VsPPWPnJEYtqyfPuREHPGXCCnMwTgbc3EPaoVNmsFuiXV73yVNmyCW6YNmhSmimZi",
  "key4": "22e8Md1GHqqTZQnHHUrs6mffK61MvjPDS2AM4q4Gwk4tp6vHtk71Xytrm9uk6KEo6oudhVok8cWDbCc2tAhbGxTK",
  "key5": "3JBpMBsd1GHRyAvMRJPqQ5sQycf1muM8rE5K7Us6WT2U272FThfbKRinU8TZqoKuvrSL3yui8ZkZWBV2PvEkccTx",
  "key6": "5m6RLQsoC6Ktry9xBpsQydt7cRvKNMhadvxg5dmrKbmtActsgxEVH9HQq7ayNBRwSrYFFy3giWEhZXpK32YELJY4",
  "key7": "T7EYMc8JG1HzYjxWunbbAweqLaWbHAHfexATCAq8Xo9UFDgLkFavJ6reUucngkLEceSgV9QvbYjKiTkFnt7GEWt",
  "key8": "3BZ9zZq2pW5GAGjNPG1S4fMCd4p7wXy6BcsgJfTEFaiQQU29xspdV1kHgsh34LxJ71VawDfCj7D3VNLGm3UzxXa4",
  "key9": "5Mo4yc9hSyuHbSN9d9EcT8YynRjDMtKW2566V45obKHSHNU3GwppFRgoQxRVV2QMaAzo3dbDBjpXn8tSC6gGXUbk",
  "key10": "QakyzmCgePDeNSMdaXzvZcu9a9v2Pp7xzYq8sQR1N5yu1qHeisJ4bYdDiQnTC55CHCSaoLHZPy7NcRh1RqtFUzz",
  "key11": "5PPQ4w6j9c93FPSosV4yv7zYSexHqDXAqxh6gA6hXSNQa3KgAB3b3ZAmrpFs3emJmgakCRLWEz1yQTPjAeDZmYk3",
  "key12": "KKCHnF7F5ydKiNA5UsVAbFSFipWvVBCUvD5PGzEvsEk6arDnw7s7CJJQ4Fu9mVE3RNWmJPdnfvDaaXhwJR57Var",
  "key13": "5LyBq5Z9mMoi7KMKWtcDDHNDbZVtxNNkkRmvSgJgf6KYqFBr3yCvtUThH9WrF1iLVNjDGDvZHqmSEa2wuRrMSWgy",
  "key14": "2uaWgHrkawMgbuvXdNDb4K3uFZ35njzVLcVE1YAjMz2adWqJ7M2Z9u3EPnSzc3ixR4hEPmnCtbzFstJtiiHH2Wpt",
  "key15": "cdJL54mJT3vwtcpHLXhtQyMFFkegqS8weSVwQsSTPbDWfeRdzEXV8wKwEYkr1Mak5c8S5SqkvHhRkbFsTFAze3q",
  "key16": "BUCLEgTTgzAbZQvUvWP5iKNuybK9sdjHdRNbCbBSK7CYWhHMP6W58shN9kc9LLGs6EeccUYKrcx2SLaY56MqQMP",
  "key17": "5KUKCmngZ287jzgGH7AZtq5k92oWpSZ4CALf8g8oJTpkWWZnX6KZpX55zQw1MBqorEmWbV9QmciXgLegmmQiXtQo",
  "key18": "39eXthK4MwHGxEKvPM3Ro4HpfLdiD9jbKDGhn2CgZ3LH1LEo4GV41bZjrRo5Cu7QWgj9qAsM38NqNMAshxykhxBh",
  "key19": "4jtjqSrxp2ekFPCm9TmdUpgUFmtfYTuHMyHwtoiEnnFA2LcLquFpXryFR6F5b9tH9yirNJUV8uuyHqWAUehr6hg7",
  "key20": "5WtET9AeLgyf2dzdDFhFnv7x7NnRGDvnj8B1QRgvQsaNPkN415jAb1fC95M3eJraXQWwjD1noNjSntvo8t9F5Hnn",
  "key21": "3bqDCkbaxbdhT47iFturYx3sk7vTiMjWHJCozxDDMQVmsWpBmNH9ouQ4EdVqYY2E1nayTt7c5p1fh5KyWy6sw3B",
  "key22": "4PfPEJGCS4SCkd2i3XUAgKswjH4H7FAPFpFNEAUnSrbENin1MTPPLuhTA7PQfqSZyScxQsNVQrn7mt9xZbVBsMwP",
  "key23": "jfXS75CwbzHbE57hc2SP6nMCDCzr5jHuTZsLbatwRkbvTh9uXWan1RB9eofQGBLWjubHsnWitjgJv3Q4mGX9KWC",
  "key24": "q2BgQANR4yTMLpFP5WUUBTefALkYDVGbFEz7FDCUnsPWUoTKThPuSxFWP3JonapQi874T5dsSWLRxsJ72ndiZK2",
  "key25": "2DKobnMLadqw1n5r4Mu2EdGEbsFRUw3LZEaqRVXQLQAQSkyW9fo2ZAHqEMpZrrKht39KCeAxkWAvxGw4vDjNTQQN",
  "key26": "QeahWTfgoaJJv1aYJGeMyycVcKZLe9BmvdSHfGEvpy7DcNZC8gXTND1P17VKdU7xx2u1MiSxr9UkLk43L9DJupz",
  "key27": "S3FmR1WAfFennywoBHEM1ABevbuviBxGUr2gwzYa2G1SdCzWen1DfuEaqLB4mLFxLowXkKjA763RbYtNgwq7qB5",
  "key28": "zGejSMNiZCTxsyLj3wy5yhty18QRW6fr1m8fbMS6zF3fs2AcR8RVLQNHwANsZrBmzi9jeJpa29RCP44bKN6zJum",
  "key29": "5PTQXn7fMDTWxg4mnHJZoBuctXHLaHuFdRDaG1hK5kqLGzL7AXmF3dkehmYUD75mRDfXYWZhrAhR1vX4fjaRS8zh",
  "key30": "27Mhotps2hrbVinwV5HcXfbDf9yMxEqujtwNJKRyEDcDi97bvRfwT2WjMwLMMvFkgvLsDnA4v9hsYwiETpnDKfDR",
  "key31": "29ejg6A5nhF65x28wUM9Af5HLe9jxARhoGijSiVa5GjPnfNQXSD6nGvWe4BbWMKCXC4oBTVqfHvphuQj5gMJDdER",
  "key32": "Xnby737h9VaKpmVwRVTs4KqvgESp9vwG5MSoxATBYHYonj3EaG5aLiizRo3VzL5bVLpgCEDr5Sx86EL4KPSEcLw",
  "key33": "3xvy4FHZUX9mYC2uTCv9u2hqET5XDntGSQmD8qgP7LhBt4sGd7aZTRVxdyebZgkVvr8pYBwPaqAQGd1uHefXS5qz",
  "key34": "3d7bT4HKmRqocoxaEViWxXTvq8DEk24XQvReigQNK43CmxAekgyz8DdYAVHjKm7BhzFrPk5wyzAnFDb5ybcsidVR",
  "key35": "2wVHG7tMbMtG9kFCv8WeeFaL6Sb7Xu2trSihPjixWnkVXS8UZUamcV5XA4stEm3JMmdzemw5B6tkPPjtRJ1VMPT1",
  "key36": "2vo7vV3tgjgdUwahDjLKnLhTLFnAciJaX6BwHx75vNWTN5X5XQn58YzCr7Jke2Rmi2iYzQu8LUzYpZxpgKZSKqwF",
  "key37": "27NWMNzAswqx7RXkwPKEvAZPaGw6qKrHVztnPaZfCxZhBewMpRGU4H9xRafX38Rw7nrgQX1FZo2MDCHyvyTMeLRP",
  "key38": "3obRuRYTkCTjRoga7zH3EgwTRcFGbrGBvbTPBFR9cfLqXPND5oNwvTfVE1gsnXpgnMPUCBqxfwdvXRwLqieFK1sE",
  "key39": "46aM8AasQm6u5XhcdgfBLsvDqeffcVo1hv3c8BbAY63TetrwX1nEaD43jT9PFJfHE5efjd2whJ8Hoed5ghMH4PNh",
  "key40": "xg6NN3f3xy4onEe4Nm9H67uJSA8HUQ62pbkqyabYHZpCACWWVqhCYPRdZquEGveUTau6HgtxBL59bfwPs9sLjTE",
  "key41": "3BRSsc4qcUdXxfkDoVaWbCEwJNaCvEECmHUtkgFF5xTYUP935FUtu6VWJts1UzgGgbsNQbLnGqGtGuhmNndmj6ZQ",
  "key42": "46Lyh26fKiTYm9zXzstaMKp8AvSMsETyHeAgZ7qYgWfbNfWSe21s7eGSuWZqpjCTr1mEK51PwcB5X1GjSm7Fqxqw",
  "key43": "4L1txtUc9G9vbtFFbpiLvqHhRnLBsRfSitG1sJSJ9kYnMtTcqCtLtcAsZdfeP86ZjCgouxpswmY2Q5QP3XnJhbtC",
  "key44": "6TBC83V4wJWTqUvjy3BfjzFNZeWhz9nKRi64ZtVUMm8buJyqBcKxFCy4KkSnYXbBTycBohDXVHjkQXMZ7j63Qia",
  "key45": "2yXBPHscNm5G26L4TYD3rC1pA8SRyWpHEcYsghDASUWqLRdcU8cKzkxKWJfZ2c39Q9oCVkJeC2HbKDkEKE46nFs",
  "key46": "4dVxHgtvM9w3D7o3HUKudhCkARmjBShQsLjbsEs6piFNCFZdF4dxBPaNps3UAQ49PuGjHxKKwDb46GEUGU1Ujpzs",
  "key47": "5o74Xhiec2H3pFGBthBJJq3UzJ4rhq6BpT76nK9woqWRNjFboexpxkU3nFyGPxCsp8cXREkHqkCc5uhmqGEar2zq",
  "key48": "2HQepGnemgcwXq6v11CtUJNzT76P3bLSLW6SJYtTkJGJuBbGBuKM8hPb9Fz2TwJ8w5PFksrJ7G76w9u9hHf6ViZt",
  "key49": "2B5htYZxVbtda2nb2G7zLnFkAGRPXT35Yh32L4iHomFTv1W6bPLVQnLQbTbi72VY4AnZgRztSU6kXZNeCmvX21Uj"
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
