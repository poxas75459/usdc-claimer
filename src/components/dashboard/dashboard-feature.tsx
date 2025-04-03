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
    "3ZUpWJVDCBG6ogarsvDDm2F6DMpCXhjReMAtouCmviFouMV7X2HRA6pqFapU5jZvXJNXEruTedGiS5fUnto23wR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pb5eiSd2ndzVmBj36DTxhrbkZLAcDiYAy2mcsWXKX4DAFQUoJrPHMDmoNAEWkFW3BeNaEHmwu5Yyx12QFpS57iU",
  "key1": "4CTWmhCNbpUKu2oSmgQAk2mD5T3Z7adJy8RA3wRRxbKzCx1ugGJysa89SQWExcCvxYzJMpNXrNp4S8yxJeafZxRR",
  "key2": "34LyFBASxBksQyrdSVKPxweJdXkxV1LKobe9GjsnY1XXU8XCRzptbJxVsaZHxSgiFEt4GrqfkV3eYLMRjUdQVH7j",
  "key3": "439jYCDCw4hN9i8bgJKs5WqkoGomZqxC2Qs17ZWiCadpwPeEhAC3yaJKWuwbWu9TuV9Te6dNa1178QxiDeURUcLV",
  "key4": "3AU5iGDw6vYztK3iVe1WSkEfnFBXkogxaRZw4gTiwmUoQkjFq6xfPB31ckmg1fx7kXpaTQ1A8gigpFrpZTQKiERW",
  "key5": "5g9Va1XkytwWEjM1UopLK2Nspi9z7HHUav9U2GdkUCHynZ3rg3MUFMRJVUmT4eprirtiRiDZRu86FVUVc6z3azYw",
  "key6": "xubWi4a8MqU6iSXXqvZi8xLb3dp1kYkNPf847UDf71mDrWyJ8ttUrWXBjSqzA1aCCFuD6BU17oxKxCsVzwAP5bj",
  "key7": "24zrTDabXpDgZG92Nb1AHt4xRg1nVmdV1H7JdE9LNCQ5NuFpDdrsdZNerZ7k1iCN78KBYHNAnPNUpDg333t69rSQ",
  "key8": "2cGryBGzVjrgAGVPnj23JFFVp5AVe2GcNfpq1eHsKS3cwrdjLWnev4VArsDQUD7V1cNJVha9mQgVognMWemrbRte",
  "key9": "2recDDrVAiffr6rz6s8XpssZFCdZFAsPiPmSAPNBHVuRu1piHVAVaUr1SHP5dSGyPZ3ysbSQcetmXGUUL9p2kujd",
  "key10": "4bWj1ndrDs6aLNM1yLnwFMEWRgATfzjRpGyNzK716BD5fK8ypvxLZYTsAWpSFsmXKmgiUtE3YYPDBjM8gtRWGbaJ",
  "key11": "2wJEQjEEHbMtpDdt6zLEnJUBQuJx3smeBBUv1zpyFEuYn7TmPn3e67W1rk7o8VNGGp9P7bCe5nRy9eHYAeminjS5",
  "key12": "5PoNPNYUccXSLDWE9shuqwonMmmCi9B3Frp2qfFfyiFGbin9y8aD3sXsKBVct6Ys2dCzxfFxmPhd4rEZx83xsqAS",
  "key13": "425ng3REQhv2uiKrWArTKK9rcnjxw96iBGR6p2Nko3EpBY7DE39r4AnenkKUZnfXJNMFf8QLmuFCUxid7VTvCmrW",
  "key14": "3guPZmdiS21vVsAoqig69P6g6eK5CVdXP4WtCSYufP9Y8EkyVThJHoruFJCM1yLdH8rsgu91AY9u7MzxKfqCmBEs",
  "key15": "2hGGnApDV7n2cthTnAPLCpxpjaDGJhXmWspwPkUAWNFpiQweD2c5bdDyfP5h3gHnDV72em3vtE3EtUsDj6MwCEoG",
  "key16": "2KSqBXNQ8cy8Neeie9TRM4ZxYEN77MQk5N5UfC8w9EKsmi4z32hedQ8aArBMKRmo8mM5gowgXNNBLzdUbpJamen4",
  "key17": "qkXJxSSbhamZRk3FcXgMSkHkqycephoFokQpQDcPXE27wCMKVs1AnAZzNGXxakJq1h2DVGVhxoGCiCMD2Gf6GMM",
  "key18": "3EiA6wCg8hTskxMMvVbrXKP7WLgc5kewdFzgnfNwWRdD43Zv6fxjwvQtEMbcEpuCc1yhG5odCM6CW61dFpRHgjCM",
  "key19": "KuTbDQz7X3WsUBzw9mZTDTtmxVdm4C24tcMEuAAvfdRzDcs2AVYzaQWuQoPyT9QuoKES8UcB1advEDdKb7fFzxQ",
  "key20": "2LHvLt19jTnN1go7RFcVRoyiuzNC4vDCc5BtphE978RKGFif2emeMna9kne362C9CkBvZ18L8cUs1TZXtuHJrtVr",
  "key21": "52J3BxPb1oha1LzUiJvMMhHDJR5xzfEKTDQk4KQKdz4gGXf6CNwFp6nGLUMMJRiPJKUwgN4jphqicvZtCthDTCYy",
  "key22": "2wfMJUunZsPivM9SfX44pDfs6iscxCsCibcUKuayiQWGyY6K4dg5rnYxUdimu1P5Fr3KRPTGTZJ3CebXg5L84QDd",
  "key23": "47SYyAU6hDH7eG2SzJsLszJzEHrxT6KSigR3goj97KBQzEzuMj6tJkUjf4vDk6fieWRUNsWa8fQRSKR9cfXWZ5jx",
  "key24": "4rGjGKQ2YBPqZDxnB3Ps6MD3KiHPf7YQqR5s9bEUfiTbUmbBD5zP9zC1FsBtsMgcUbuN76HYq4dT2wFXKwSpS77H",
  "key25": "58jdNFfi2V6sWXYC2Z2VYTUDgStiNWYBNJcJE7oM7mmWPNWgDb6J1hUug5urEmX3KvuKQRJbnN2nVQPYHBVSwf1y",
  "key26": "5sqAUg8ao8h6MwbhA8UwhiLGttJJrB6otAn5gtc4PCjZamEjZ7kYko1PUbC3jiXoHg4EzC3B3uT8g1m1QYLqtaKY",
  "key27": "46m3Zbx918J1jq8grgfYRMZHdRDTrcdj8ARVu9TLVHbS34RGw2twTd7EmZwgAyjD7yyMo6Wf9vujUpN4gH9KDR53",
  "key28": "rj7RnXTgubgpGt2cX5aHinJTBqL8JibYLphQHJrDvUDqsrf5DNT1AmD6SqpUN3kxvj955948yytXnF8tM34yMCH",
  "key29": "4Rhqgd9jcVk4iZMSkLhGfAUbp5cBDpBrFoghkq96zGuC9SaszjkEGtnY5mMxtYv8qBZQkRGHELFRdwr7aAsRrUwt",
  "key30": "23gMWpt4qNUatjbJTKF1qMVrNDTx696CCAYwcRT1rUfWJR3D8UvvY7EBznGLXfYVgaPLSKZUKGANV6bKhoSPXXZT",
  "key31": "2GwKw1PhoyrHuuNcvbQk35XT38c1ZECHUoxJp7g2sSyeRQEQV2XnAsD4W23jCFEdq35zErBDXaz8mcpZFATCMa7F",
  "key32": "61wQvwnrY882Cpi9trKBQBiypHtRq67uqy6YEQSCXaNWsUx25iNXefAEikSe8Ekt6AWsWAf5THM1589JMBjHmj3o",
  "key33": "2qtLeaas25FwhcwNpcpGSTEkQswNB7E4xVY9jVznNqvMa3uVGBpJTjZTZupWk8mtjmA6381vvutDrGyjzRuoFgUZ",
  "key34": "4NEByAKzn5ixjz6MxyYTbBRAxpZSGUVpnBXDS9yNThhXSBQD1mtwWCMyYNNtUpPyVCiJRz53pWiM7kFwbdWep5Sy",
  "key35": "bcKUSPmA1NAXJE9o7BjH9RaXDCid6wA2UFjKe9L1MJZ3WxPdmNTGebtMS2WFfb4oF8bTwG1FzmAsejaponqD5Ts",
  "key36": "3QXqmMfxAjAWo5J25GAi8v3dCJFfJFaUtDNcBZyFKjwpSBfv8JfZc6NF6QePekLDzmKHgmuLxzzVDh5p7FQayrrM",
  "key37": "5r2Mu5Ez1pCLXvgfkWQYEvrkC5natkzJXdMCXtNCZtJvfpWyQrBmwrhqQ3X63sChyzUh5CHXwvDUDLNcfWvFoeQf",
  "key38": "2hVUUzcjwedm9QVTzhPnoJmh9rX6Fhqvom4ARsdyMKqf3eMaSoyZScu6rbghfkbTndDCeoDPNhMaN1ntjfPxzxio",
  "key39": "3V9faa7uUoYXbiHrLLruhirg4QaPb2t6rqXLJ79S63gnjzXSc52x1TLWr9bkZXcFVr44L9Zka8c9y3i8szYJymXs",
  "key40": "5WweV7gpQUDqgE9unhBfiRVFK34H8M9WQwGgp3G3gA8ZMejUtm9VHhYCDSo11XEKhv1qcSjx5EqDBuB12Q2wyP1g",
  "key41": "2zVDA3ERCgXrVQfGqGCn1bFohwfXM1P4B689e5R2ibUnyhtmPG4LRGZQnw5tD9qD96pnQCcndxKtzTTc2JpSVmtz",
  "key42": "2q9QEQtbS3isBe3SreP74DYaM4upS2Y1sMuE7rVNfE3Fv2fxqbK6BMPGgrDNGJ1kC7Arqw5M3PW9KjTQbtWyFDg2",
  "key43": "5LWBiQeNx5RUnknBXQFdqXrD6j2kC6TC3z6hRRh4knP2MxVWpHU7aK68ruA3Mi2voMSvCqT7DYvG88RbjsJX1nGP"
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
