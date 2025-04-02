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
    "4TTiSc65AsQsF8JbbcJv7NGnUBiJQmr5LBaouBJyiz5W59ZZsrvBVwL9hRgPJUN6YgsBPHjDE1KyS4L6pJPBKzB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Mjecd1ZA96KEZgUux3fpSRm5gQVNnMFKBhHFH7TVCR45nxL13PUXjst3TJgGKjEJ67pdZ5KexCPMjnK3V5ETMq",
  "key1": "4XKhRLxRKDu8hQ5eznaoXGiL94dBjULsvHQr7r96NYdwzKDJq5zFm1WLEw8xGRj8jQqaa5gPiFWXuUUbo7N1HWYL",
  "key2": "SLBRUW5vQhqaNT4WeEFvWxEZKuKxYj7iqZ8qd3ryDLE31181q4S5WbhDgLsiqrZThgqUC2vHyENDW5uxQPmmwYG",
  "key3": "5TXfYdKX2UQse9MMuYt9mTc3TUwtEbboFDor7zc7cX4dBSsKb5GH7L7ZrJqUetn3wyFpLkHSxCrAzFsdUXc5nRS",
  "key4": "5zdzan5dSE32rEs4mj5CkjBrkUhdYsQpmKJXhoox8JsRdm6wgnTkpHtJZwdS9o5BiLmAjtPLPPnSnnt2ArdV3tE7",
  "key5": "4yoHyrSKZhH3TKRYAQb3B9kj61Lp5nbfFX5gZcUSEp7uwhbxFnEhfWToijWgUek5yrZhCwk1npjwbXD45dNLWTJa",
  "key6": "4Q3PuGaw1b5ENmrNLXH1yq7XwkCd6Xg95NpzV3BUGVHgYeBRAxw5yCWx9hKbL52JGQx2sb8Fo5cDZTKXJXJ3DFdG",
  "key7": "5AciSCwGUUGmjSswVz4YZY6pZohQSB2m6sHJtiv1idPFCAWPRs3WZwT1WarykJHcFadoTMh2dTrr3MtGDMgrMhgC",
  "key8": "3RowNCZxWt5V1EnZ1eHXEZpRsSfPKvU5yvJomkUpB3M3mExP2HjWwBesRbizjMWKLEhR8bUA2GAr5nUJJXH2VPtW",
  "key9": "2nYLh7FuMUAto1eZH4pM63PrE5j2arLbLW1arZW4rVu4EmzgBm3pqcrsvV3EaGBtmWWgEDdyWaJwmHxhsjqFTB8B",
  "key10": "3fdm5tYqdziNRC8XdanM9tHghXsniVsEKoGp9VaFQdWBzZSTefkzFTKR2gZKFuog7vU37f9pdvCSgyG1iJaP6GsG",
  "key11": "4XNEq51tadtxK4E3TxDR6syYPb3ZeUugDxJRpyzeZNqc9gZLpnJNUkpCNzNTUMEGqWn9XnGFQ1on4bMAxNkbP9BC",
  "key12": "27yKM8fzHXvZRupaSfWtXTvxTQyzhPnoDLyTaBgDsvxkHYSLqADZzWnWugWaTuywkntXCGPtT7LGbbaRdr3rAUpj",
  "key13": "34evPwR72A3qHgSRNZhdjRihr3cRw395WsVq9XSjNKnAULfEvKooZpRuwQMPMvKMhXqNcQp1D8P7WFsu9U4UzwmJ",
  "key14": "33UyrNizKdQRQBfwkFhwSbDjjKFE14pppwS5nhWNZRoeJnWQn2Fquq4gaWezNxznCwEnDcXNhVvgoGjjGkCSS1iy",
  "key15": "2fLktrr876pcUDKCo65jxMcJPfgi3VPDX9jifR23AXGY4RdtW6WdRujRo3XhuhM3sCVNpU6fiZ7jiTpzNsKXQ9ee",
  "key16": "23oLrfTmS5BaFywtiJaa3wPgFYDSUFUzsSbpayefb6jU2zzC9sLWAVNLirkXouBVVYC8qAmuZLHdRB3U5cbGBDS1",
  "key17": "25dKufAxwC7T6hwnxCsJwLHWD31kB1E9YCe2VHR94hdHjWGFnMtGq5gQLh1ZbLxTRb4YaTviVeDWb3bGCA81qfB8",
  "key18": "5ZE69w3rZP8kYcemsa3r3ywR1RJ3D7enPaAVJtXBBur6ZVgzvLqgngro6SXYxe9KA2K2zYjrdFPgyYiBWvz9rPzy",
  "key19": "2iK8aVUEjdpLWPA2DbaX7Z2pNp2wN4SVkWvLLTRTobrcuFs7tMvMbfxYBCScqdGuzP46Xy9FQGvDWhWAUocnMQ2P",
  "key20": "5Ap3MFJY4FbsMqWULvNs1875pjictUE1Y1EiydV1wJkfKcm9cwf8b13tZRUadYewGfTYaXpbiSZKq5WyY3etQDf2",
  "key21": "64Vfndeem2MYTnnmaMWxEhbzPwrLfKuwWSYB4QCMnX2DUe11kMqiA2fwZMs6C3r7wzvmuwdqEkkreLRDhgXHezSt",
  "key22": "3RueHhcc9EF8dfvwA8YWtiAetwri6cxHUXbMdeh2x9DAtomDTxoEYEvr4wXN2HfU1U7zWUokkw3kaQuF9mnyPeKQ",
  "key23": "3pSQ6M9cyGEwkjH8DR4Yg3N3gocCa7XkaoYwyZEK1NFz96qYKmMrGjd5XesHRNgHLz29R3aP8XSTdgsBV4pRUwD2",
  "key24": "3kGgZQKJbhqizocJkN15bboAtHWjcsNkTqFGxXSnaBrXW8p1zej27aXHeq3dWdV35UrhBqyvZsuDeHSwcGFsqPvq",
  "key25": "nKnwJiSwFv1VffGKt3XjasJD5JduyLuFbrjEHpZrAgRDAcYx7iyWthDSA71hMnHbrDR8FxK5TsNEacUQdFDuEYx",
  "key26": "3qXY25dTHCWrPCYpCxafGvC2yz2AbH7jFZ5dxuGrKL4xZcdayMCnRvKLZvRJDca2tWuHTndWijcUvA3bfsJgfajG",
  "key27": "2AGpoBC6MkfCbDb23GXVog9opLhqJnsAYdEHpViYLqbypaE5CQQsY8Zw1KTgFbenisXjEt9bneGPaFzyAzU1Pj9f",
  "key28": "4xLpYNuDG96AVWWg2h97dWrQ9GAaUo1QfNkbsJTmZP8vJm2sYQkQnzm6oQVTQ7DKESpnLJDWbysYm5fkyjYdGHdv",
  "key29": "3MDzspoxcJaV15TP6VqZJMAZKkcSHQDVoAtMQS6NeKfAcuizUU69HkPqwW4oM3y3rwetdxbHJRfkWSHFm9cs4xpC",
  "key30": "QWUR3Q3u5ckU1QEST9hTbfEC6u4gUwjj969d1WoQPncVP4rVbmYaR3d7i5e9TuiYABDyGVrr7ZyUX37gAVUhYw1",
  "key31": "2TqaZ8Lw5cRNfM37goSzjuKCXAnkk3dGcKowaQFCgiXV18oHMfpH9dmZXXE7BqWX11X2aamxfG2e9Mow7ewggrhE",
  "key32": "AWDRDPSyy3hejfRwBd4P6xM2cuZX36tG94QxAwPJnmsJS3WKVJ6kcBu8QSqg4McyTu3hQR37MSbTucjHLyQc4Tu",
  "key33": "2fMdgyYFnWZ6XjfCAetRE86PqAqP8iweAYVEXKy5RZ7rVXbamycZGhdjrQEATmGLr6JBGAv2qsMftiZQbeJijYZj",
  "key34": "4umquyA7zjYQbYF17ZevJ7xT9er7iVKXSHoBNNppo5wXHzSUcoVt122mJFcJKm9CaGHwQED6JbhRUVfbUvVh9Eyh",
  "key35": "51iLHYCreNvhpSeiN9JC8kxeZnvbdNvwcZTr59PjJgnVv1AyW5SCyR4VjjeDV9vtcnjyZWcPv5KTaTSaJVzXPrB9",
  "key36": "zpCTBSMK9NNrctAHyk2j9RB9j9ML3BbsUmy9uG1h8LuXpWjUsPDpuNYuk7Bg7tiNV8cN1WviLVD2MRGxbgxMQZR",
  "key37": "2BvekoofN2P1igYPJbhdhL1piJgn1pv1EJCMtUUrSviN3sgFtazK4CY5U8hGPcZBH4nDyrqKjwGaZ9FpgTp4p1YK",
  "key38": "45xVNPRMqidUuuGH5hEsZCUDSSAZAcmwuawKgvsEkLeFQpSGqNVX1yBVoKzgnv3g2SWXxvu7HT3aH55m6cmTuqiM"
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
