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
    "26oYZCY4iLqHE21bGr9iLLzBdzBPhUJhdHeUribvLSjseCDCLPPD2wcfbVT1MibuV1VAP1DF9g8j9U5desFAkPZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54LyxAjp5QVHPXKYSJLF343AyM2B5LaHXodoBGRtJuF2YSecd1tYeh7bXqoPMNJHP7jnx1MXjxLUMU29BKovUJmo",
  "key1": "3SsXWiALGiwZVf1rrXPcud8qvk3avbMAfmnSfPNjPkxXqGZSMPSBCV8mPxkKXc6Y7PvX17Q4SQAxuL8Ct7DrEo4c",
  "key2": "61cm72hLU8zTnkCPgC7By5mWXTfbNEMLq9eG1i4WmLWbxgK6fh336kKaruHxrXYxrMQdz1M5mNFPCnVZbGy3BxzX",
  "key3": "DcLTXxFu7SwCRW5GWTZrNswpqNYuQg3S4N2w9N7bs9ptzHv1WdrjAFrV5uki5Y7NUxkxsuqya9MFD4M6jMZdtFx",
  "key4": "3fjmhbsSea8WxhU6SY727ErDzkSSeW3u3W5zxBk1NwT9RtJdBYdehUB4ZNvaK9fPvmvUs8XzUtgmpFwjTe23XWfS",
  "key5": "2aS8wFwZz3fE1AGCKjaGWGKCtXbtLeFV3M4iYM91VTefmjeGS2ou4b9uW5Lm3ou72kCkcBknQ6Aac6xcuBxswMjQ",
  "key6": "4cbrDrPaeEk9MgrMAkqDkxapRuRvghifn4prw5Rpzw18fvQmcDnGr2hM4rKztgUThkiPjBT863PA6yfwmhJUsBd5",
  "key7": "3qoc9nF9UzfYgeU1g5u2BiNN88qocRLMY75fwqD22c4JDeXU9DVWRWkGHRvmp2G3fkoCVuc7bXz2RjqgRh7Bcyn5",
  "key8": "joMHRpkNw2zasjCrC1rB7ZM9jdMyXr2LSxBRm7ZeMXVV2x3wBPJHr8gANtLSpDw7ArrPhaH2Kw65gRsNTSFkSQ3",
  "key9": "5ma5sXY2o3Pn6c8FMRGBEtTB2E1TgVGjEP7BcfRwMifizrc1kF9N7ni4rDd26VVMnVFZLudRymXatAKvjYiJaJvf",
  "key10": "3Vvzg3SyK2xeQGK6ct9muXBEdtzRrctWYX87H836UFHZS41GNBzAfs7x1GHEk2NmPDQtrvftYDTvMM9ry8aTtDU4",
  "key11": "X5QDsbyfQ5MrGi8dyJ88XA14yJCkTGLwPEbAEUnyJ83DVU3jJp8Vvcmkm6XnbMJ6L6J6ApEsRf8uCmZVFsc1Etv",
  "key12": "2tiFSuwyrNCerUEGhBoueEYD2aXGz6EkSkK5uhUQGcAkdM3Hy8gjMUm1dGV3yeEHA7ZFLDJDzaiUPCRB9Mesh4ys",
  "key13": "XbJ6BEtTEoiEdZs5aAD7b8FEqNJm8Y5N6Bc7RRhexKgf6BVsn13FbwD2XVPYo4TbszaKbuzYvSrKqjhvrBJLph9",
  "key14": "5GLcvhDFY2gPqHZ5BEZK8tqgXnVJTN3bWsL92BmZEq7ffNbfedJKuEV5NghsaoPRWN4EbFUJnWJnMYdDKGxk4j3V",
  "key15": "65zUAQLJmoi5VkoE4TUhbUUFkGZue3XCJrE2dTqTogNGtW94Yu81YKgDNm3rJFNjCqZXsE4nPogGRzyVifhy5nAh",
  "key16": "qARfarKCLRfvv6FDNsAYuejUPboZ9q4BJ6kLezN2eYGEGVUcW5o1umjEXGrGdzxeBaU6Us9LmJSqQuK9DVmQZsG",
  "key17": "6619vP4ABjiBhn5tJj61g4ysp6ireUVirDc5Gz65Po7yBN33W8iek8sMvtaA1gU4X5kjBju8kaUZNoZWsn3sK6Z1",
  "key18": "5YCHPxN7Ftn7xgK22So2vVX5nKuQV2ViVGUCob8tUpSkinQiTN6ByhDrs93oZJqjRtad8n6n2nvdSUCTxuejgawt",
  "key19": "43NRESya6QyhBQE3nwWNp2TJhAdxETeRxycgsQM6Fc8x2bENjoNjs6jdukJgSbVMJt3K3TaRJbSvgT1XPnJxQba7",
  "key20": "ZgGzjmTD55uhvDuuhopqeLh13JfxucG3tzbNFWa2gb8Drz7WC5TpENEp7g7GENrxDDD2ooLsEVxSfCV5YjX9Sgk",
  "key21": "3dnkYekr9x3vPceHyB2qE4z8SJCdmBYhgFymRvGNFdR3F21gKUbUEqjTyE2SL2WZ59NZcYYPn99oqsC8a5UNf5fC",
  "key22": "4uzwvfH9ZNUGJfrVDEunKbDmLBbxc8jX7mgwircs22wdoN3z5UBnhYEDGRg38yaxj4JyD36GPyDpvSZZ6xUjWRwX",
  "key23": "2Zzos7aSHDk5hQYipoNcLCkx1Y8K4fWNxX9YZu1Xc9ADwQtqimDXumoSGAhQ5itUKrkHmJz2aPJiT6DjWEkKahsk",
  "key24": "2Cqp1STJu2r4EwDRrqdKGEkbyuCCNmGKWcFgyhtsDav2sC7vsALwqVPDnHhqfaYPCScofcKRwZk1ZH8ZtkcSg3Ea",
  "key25": "5WA17j86Au9tYmZGpG4atCGchxQFoZDhEm7EiomaFEym6kuMgDNm1GtgrN4rBvrKfnCpXaDaCWGcJCypF8qNP1Fx",
  "key26": "5C9r1yGiiVFduXQmYmLKRrcpEkNsUPMnqBQy4i649pVmecuhBYW9D6w8aVV8e7cqBYpmyp3YEzPD19yLreKAcjMF",
  "key27": "2Lt1qMKpEGUyGbdcCuS3EvnsapoPLm4uQFRExqD9DTMVsaCrtdmnMGuUuGhx6LT2Q9o9DFBZaPwThUv34CJHiGKb",
  "key28": "3hnt89G38gPhpfPSfy7fixK9hrzvzjeUXHcnH5z7ssNThpptWCSYev1R8Szu4aQYUhoz2bJUCLeD2Dsa75w5coEP",
  "key29": "2XQdiKiA5ntq91FgoddmEmzyCUcPALTh7DrzvXxJPdrWdv1nYEZyXqBz7Fjbn9xefTPAzGrQLFdzNghtRFT3AbYj",
  "key30": "54H3jvEXzCZGkipDHnMGzDzwKbrMweBxbVRD3z1kwScNySMRmvbubK9Q3rRD7KsEVc9HwmYoDwXED222bGRCJKHG",
  "key31": "4gtfhSznwTehtcr7WdyuoqAXwkGQtesQxTdDF2gdQso7RussRQYX4dSkG7hzQXT3Rg4ggTmnLQLnvvLjafq8JGK2"
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
