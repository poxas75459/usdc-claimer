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
    "2kiLG6R7dM55yt8RCkJ8h8SPV8CjiK6wELhZdSaqL5AugQ5kkHa1hAwomoQfejjaMPFxSojsELhd46mSrTJUkA8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2edR26Shr78Wigg66P2py5gS9QHm3dKEAP5o5C6NET7Tf7aiPErYNY5xHnaWaKEUT47iy4sZf3dCyaaYhQp9nqB2",
  "key1": "5yVwuhcXLNHwWn5yASmxjFAbAS38oGeKWaJD3JU5jWVjAwvwrx3XMup8gnfXMFESwwthz7AqEkDYW2dTSNTN2LdL",
  "key2": "3NbM1DVbnFsHmsyta6viSQKpuLDXrpAh3CQGHuTHoknZiJno8J9X6zPA47oBcYH2ZoHYyRwYiywuNu15d2tVWFCM",
  "key3": "2Svquu7Re7pafX12fxL4LrK6hbiK1eStVPHpi1j9m5SAcemknZtBp3r7XgpoyaJva3AagDZyaaRiacmvJfjw5cUp",
  "key4": "26u1TFUTycL5dhG4q1LyiW4xR5ZzFRZF3vPxpv4yFegiQkyagbV2mQnRQdwdSDYVhJyhJAc9iw9wjGJeFj2caVvW",
  "key5": "WXTECnbuQsNkMcxJvmJjb8S4T2Y31TEUhS3qTMYkcJd3f1QQb8FusLC25cvnRCQzKGcHzep4dCQxZW4pXBZzCLZ",
  "key6": "5VJX5SibEAjbx1MZ7wWfUNFg1WMZKgZRzt8qENynmnyy2QTeJCD2uLUfQXLzyvaehWwiBGmQpjJ74CoErqnwcgvj",
  "key7": "ZD333pPmCmSryXVXHorr6oqq5RxRNHXuGiccnkZoUU2meKdidGHs9q3xsEqv4GaivbpvWtKHor11w2Hqi1UGowk",
  "key8": "24sLU3E6Dvamoj9iv5iK6dzDf5xfNAyY7PbLNrVVdqPd8GsrhgJQt3a2GBku43aqiLd3d5WKpEt53mXXWFJrSrSD",
  "key9": "4smrFvWzG1iSgwajB2o532Na55hWzwqAARa6zdM7czqxZmiKhrzorUx1abeZiXnQZPVGeoXE1fKVE3GErmHAHa52",
  "key10": "NAftmeB8ZMmb1xJyvfQHX87LST6FSRRMWpMWFYdFXUgBuK2AMKzWek7qvhH23eYHQoZTyUrzDe5VGaFQWAytoyJ",
  "key11": "5QjWMiK9YsMrjfSq853jJKkzzHFDDeE6bjJnEb456Uf3uu58bJJpmm118JNZC2Y3vEbooCKEYztJ44t9qPJYsF3r",
  "key12": "5XFLmeUqXgEcHCbCpzCm4xWVNZJNmv77sEXvf8X6uLEPYnpcdoVadgdWZxguCCQgri6P5MHVF8rWaR42vamaHq5f",
  "key13": "61Mcixi9Y1SdHi1Gm82W5EDLA9gkswq4d3ubeHd6JSQePYoytRJRCifVdT4ZoodJ5EZPXAk8c793xgddgMoke5hx",
  "key14": "4SZj6Z7pZxspgB3DcZcA9SfYpjJnHFGFnKs6dgWWuUND29EJ6BJqR8r9TWuQZqDwr1DYKc64VEW1Z6VrSajV2qPQ",
  "key15": "23jtYJydZjBiw8yPi6VXDijpLPjQkcZTHVatnoMc6NRkyxRMKEGzkcoUHeeTC1bvNRcdwZXWKZ88rY7sCnmW15m1",
  "key16": "2ED3C1tNBZd7iovp4AFpYBsSaSKi3xMLmpDKwk7eqoTHf1sWhURqpqRarYGRDi8a3sV55v5GBE2TLJzPwNirnoEh",
  "key17": "4jGo87kKruYJ5FV3wRbJ3NEcBbCbDJeKAJPCsBTCAP5voNU7TNfFd2VYgS33X4puGii92XE4M4k3Sui2J3L9yTDM",
  "key18": "y4JYoxrqCjLSZUhUiPWvWCZnEdDh7FAQCvQEJN1y8gR3vC8yL2eExaqKqCdGxUbnVGN3EsFu8vbGWEk7ZcczsSm",
  "key19": "3yn8LzRAsmEj1DGBni6WCrby8dpJmBD1NQaxo24quLxRVZPWpSMBtVrmJzJrYKzGhpyNKAMv4TJMaAwJUkQuMX8p",
  "key20": "4BfG6ybcnHM97CBkPx7NQUfnAA2zemHVYY3VDM6fZQnpgR5VSeXHaViFNNYgujX9xrL2YVyQfbbyC2p24bZwD82n",
  "key21": "2RiEph921Pr7SFoxXTuQhcpj482Vji8j9eV6e16ACXDeFg6cRNqEzLw6cDhG3u7HATzsq2rL4iBjDLdbePGvjj9U",
  "key22": "LFqwFKKeMcCQnXJC28p9WBxj3x3ajLxKQwfZ88Sk3xBoSrnX4rdknuivLNsvC4XiebrggJ4H7dxpQp72kX2A2xd",
  "key23": "5L5QfjxCMfDCoUNkXt8CsVDFGLQvk2v4sKzSsLH4PyMXp3eWBCJdsERhbuos9D7BGTcXhSobzcWCMu7QbFTVBSrC",
  "key24": "2cK9hkjKvj4es3FT5NyhLYkTJJtNCsDzvfqi9dXsYK3fBKmQDAHTYjWHtMBsX4tAo2yp5LjYYF9TARMWaLLA9378",
  "key25": "5wztNw2ndGTnhP6Ho7GUWGW7qEj6BnEwBan6MEZv77hrvd4GPoLWJLBmKG6KXLxZtGHfAq88ddRPLmHcwqYxuPWb",
  "key26": "4kQ2dz46t54onK86o4U2vcYuF5YCDT35u3EcJbRxkUeuECq9CLed1iXunpNymrWGug8ry3TB1Tn8DSmcuZbSXs6n",
  "key27": "4GVAzTfoTthgbbjcsQ1XpJneLTVB6jv7owaDVUHBdQAo6Lmq1HiwkPEFvqcJEg7ewwDwZZDgL25598iPoMNAuJJh",
  "key28": "3dAKw6iMUZBDdaY7rvy8Dbta1rKdv4ir3gyFyGo3NBgoS1x3fqgCW8W6R44MNRJKs3ox3VjfXh3bxDu4McnDrEv4",
  "key29": "51Xu9tXKhkh6UimXCHCwbDHYWRAWebfKtQLZdEfrBVE572pLsYfGEYXzYr5PCzxsb8xEtsYbyUjj2gtr6GLrn9JS",
  "key30": "42unXUg78MVUdUqisr9Y86iG7p5gQLfF4gkMzA5Y1XRXn3MsRTbHZm9dZUY941kZnixJziZJs4YFhZFJLNBgfb5E",
  "key31": "2j8G1gQ62TzRi1DJqQf2Fn2dMN31S5k55cqWPnFhKrB54TshbbyUnbBGuZcEYPytCtAgrjZeAvpnAvvXV8TCnmhu",
  "key32": "5aikQfciHgvvGLq4rmrAVSsqWk57AswpiLe4LA5WiXdKcXbzT3a2P9ZbcRSaQHAgwnAs8ZkaVbVW1Qc3KWmY4Rmw",
  "key33": "4ELHS7T7VWuyBuzEpLExpPLgvv396HCtms1QD5dhP1AJNux2X49pbathkiZk8ZYJh7P8vFffikLYQYeFqkwDn92j",
  "key34": "3XoZK1aaNQaCC2LhcXZKTkseBL85Aet4AvR7kLjmWKZZZAaFP4Q4VUbMSj8fwMCtwWkC9BZ1Amf8TZFFNJ7Kfn5x",
  "key35": "3pypgFbCNVh2B3C1Kcj55uCiC1vPPxWHGXM19oADBBnUJttRBmQbh8v1qpv331rEuMgjXxL4y6ApmG4H17UPF8CW",
  "key36": "4DRT4nQmas2tRxVrPAgnUMb6NiCmJe8MXZSvLp3j9C9THB7Fw8VS8ZurnEfmAvoyzNm52bn9A6Z1kvckoejNN6Cd",
  "key37": "3DgnKMuFB1qipMu3fxy58kapXv5n6NW8WP1XbcgeTTnvWNEP41zh8qDg3SxnRDcEwsEnsht5ufSddWz82wpfxESr",
  "key38": "5NBMDLxhh6cytN1uus5rW5wVLtqcs1NoZ4w9yxvsuDdnAP1Cu67GsmHURsTG6k4M5CchMt6gUaES19cSjp8cSGkJ",
  "key39": "5oX8zKDXAWVDUHx8Mm2T8haCQCKAiVvzUQbcLv3YUSniRyR7JhUJyr4GN1zix1TirBbPYfRoadT4vVMjH53zYUk3",
  "key40": "5C9Kjzwem76dE5eFNqTVBf2MHSZ9uoNVbjVYwLw57VXFiBCFYwsi3RACH2kmbEyjD6knb2RgQJUwHwYdmdpn7XBC",
  "key41": "3WWuX7etxghpHw4xgCTFBrVmCajeLP3sa6CqF4oyKrXLN7aYVXBnkA7mMV5sUEVNdPiHpp8bXZAP7AKTDE8smG7b",
  "key42": "3TxHX4j6WgCybpcKdtnzwj4NKLTacoiEUQjDtJ1USa1tVw7cTMdVccGbJy3f9ewJto4TSHA9MJCAf8KydA61X6fe"
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
