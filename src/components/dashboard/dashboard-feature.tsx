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
    "2osi4pCjFhMJFLMs3N73q34iYoMigCHUkaRZVDigVvHYpsjWMb3bDT1jdttAQ3qG3YdjW5RZPkWzNNR2hyh99jLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RPESofjSKe7taKfBRYCid4mCjh53uU2XLRPEjvXnKbj9mi27aqeLFEFJGQPrVJDdypef1ece8AZSkvPYQGcveze",
  "key1": "2xt4ia6DRB1MaZ6mhRXjGD6syDu36A9GbRfVksf67LzGRSk3FtzQJZdAwpVofDfTvdoMMYBBcmYQB8YVotPctBYN",
  "key2": "2NnHcpvr5fknTVAnViyF1redYXq4Wa4qEQpS3nd7NwP51XLUWczdjkkD8n8KNaUjh4Jm2Lm3MCSfC4amRfmPB83D",
  "key3": "2hedWZM84tkiaX8i2hMjCrWvU1RJxBDpLZsUzFVWPejDiNuEE3MdYEEViMepZqnYzhfpJ55RdiBas71ozvSTv72d",
  "key4": "3MqHqbSPEomh3UGb2kpB2ZTHPaqdPeyuQbjvuYnMBEaeNoaLJcNnQRGwupMe5DvD5HjctiWLMQFHsgRUrn3zxRBj",
  "key5": "2P77gGbYAmKvu4cq1Cq1H3ZuqMhggLULBRiWE8UFtWKUEvm7n9EuvsNU5S1eyoSKgLSyrLLwW81vduyeCSpUZoY",
  "key6": "25riZsBVCUMkuLzFEC8pndcPpjwFt7EWH3L8NBqGNFHPAvYMvDQbX6fUDBbyYwL8NSn9tSQV3EcJChqr8SHS8S3H",
  "key7": "2FtDAcsvTxDXQwDpz6j8nYbRAdia13SNVwZzySPuzZ8FXYfbuemW258UyFBoPdWcKjy8quSFdBMaWyJhCbfLBdZk",
  "key8": "591nBPMAJL8ZD8pAyTkNxJhiGVQBsUSALYMMXvPZPHaSaXSrua7guawQTFgGyyDLFxFQfsBVzFyX1qJ4maoERYas",
  "key9": "3UN8sSbWkvoVkq7Rxsk3mKTHwwsRtrGoaGkS6iJWUA4Sud5xHZ3NQtSyQpSG3EpMBtLGXNNdGXqTAAR2JfgTS1A6",
  "key10": "3YteC1H2Woe7q1CgeRrsn1GesXm4UCjHVLCT6Dk4Vqwpv5j2HAuUKL1P9U6rm3mtdNfTcDLkBK71m7NhqNky7CR3",
  "key11": "udCWPVwrp839uetS3Dmy7PbUNsQFpjAGbFmRfFAknVpmrif81cf5SgLM3WnNNMCTKGXepLvhzt5DjgfUrCQhuyt",
  "key12": "54u6QP1WLyhAhxk223YNXKdnNntfBEX2cmq4gVABZbG5ETZcVCJSJKfsqgRAA7WPizTc7Grxs2QNBsnSeFCdgFpW",
  "key13": "5tJuJ9KVjzDKLUXNwgVdc2t9am9a33DbF9LhR9bt8mEjS9cF4RZKJyfRZMg3JQRV6me5724mFanrxAqD4g8jnU3P",
  "key14": "aDbxPMXVZH4QPBpNYQzyz8Pw4N33kUpyUFm9ZCkdurXQhvGcpKnPQxaBSp3yastHjBwpWqPLrXkTbAQDJWHEh7Z",
  "key15": "5u4Pwh2udY3FRKHgDdqYCikLKHgBLPWDPw9MMR2uXdKHaqhYZmgHbSzjxDuMSeaQjyBMaCeu7zrJDZmBrxT8Yj2h",
  "key16": "5Yfv27Ucgtg8WH8ztvcP4WXYN57UXnvAfmu3X34AX6wVRK4vndtBrscYsozEq1wYrdsdVsUBgLGDwQ9iGtvaTAiU",
  "key17": "dBqd3aMdcueeEM3CfW7P7U6LuxNghusp3rh2Fns45udGzVTFvAAL49TWEfSNCytqTF1gZZaVCTQoZMdTzNqHXFJ",
  "key18": "57B279pixUFk4LNyAhz2mJwdZmLWnUqXmiGJqvdRo2Xah5U9GH6S21SQzzwbTNbnt47kUSa7WNeQSkkmg4tftZcv",
  "key19": "5vbPL2VNCcND3pLvns3aC6aBCJ754fxMSonqoeeLfdghy6kgTzMf44mNXGDBrPa66HD6F5YHdJreFfNnQ5Thk1PA",
  "key20": "zPjUQSawC7UU6VRKiR2SmG4eZKVUcpPU7ncw8uHR3hJB4usYLStrog9XM8pQZyzEKKKrs3NP8DArVB9bNKH9y9s",
  "key21": "39WjTgpiKz1kGKnQx8mPKBPXZeMwaXU8kYmz2eeghqTLDttwFy1EMv1F2PtPw87foejoMUk2j8v6vFyHmznRkidu",
  "key22": "3jJYusYYmc381Kx1PK8tCW4YVcZj6J2eTA2yUBCxGrz6eRYYcejDFfTG6K86BqsAiV1wLi23N2GVRijwYfwoREcN",
  "key23": "5uZXVZLGPyNShKrBEow677YRXYj7d91hqzjc5cW6aRj2t2eoU8571XtCh6yaP4zb7Kp2Wneeg6ENfm3jYw88HBcp",
  "key24": "3VoN33wBk1RVimZU8aAMgxpyhYGJpeVGWcP1TLAXnuaqi452QtjUY9eKXmq6ri3KTZUgg8GAa4W3qBNxkRJJtVmC",
  "key25": "66BBHMbR2eNTmkGV4MtGX1TZbjuAdatvjnCrPY4JwgFrsyuR2yFmitb1ix282q5BUdVagCaYdg359qyfu35Mx2PK",
  "key26": "271ULJmrKrK7LN4bmwxrRtXo7MZLL7LQT59KeSzvRsDPt25P1wWV8TjFkZ6krWfYaw5YyFnbmJRSfx6bp54q4VTe",
  "key27": "3t2QqzeXtTnd3hggRgkgfCoX98opqYrgHWyA3eTkCvHDR4U2tipup7GLmP2tn4R4SSbgYT1od1AqTq4c9gTHeCmY",
  "key28": "2Q4q3U8kkq6PF3Bm8ct7YTZVNjBMHy1foBhMNUFxVH1HhhHGMRmBcK8q15MTu6asKzCBV1jkHkpH83LTAKudGUjb",
  "key29": "5WaNeF6ZRRWr2BADJE4vFBgru4RFmPowTCvKgKYy3iXWoe3sGtaecfG66dghdtoRJbm7fr1ki1JVBEP6vagiHTns",
  "key30": "5DM4mptQYAkJY5oLt43ASHKwJNxEqyq57a4cWs9ZGPR6DtAHy4GF87qVvFWMPCAYdUtPhzUAzSaUTQm3Ja5RpiQD",
  "key31": "24tTHoGG3yKHkLVEa1pevvirUwhzu3xAqfUtZ7LwZstAiUSPEGb2so95jPeCxKa7zm3VPE5jNiqFvCoCU82a3MZp",
  "key32": "61JJBBM9DCojHsmQtAXGsCoAJzdSZ6hVXeSrX4dnSdkTC2c1a27YdKVqTWjG2HzDG9a7tLej9QCeaTWf1eTAAJjL",
  "key33": "486aVeB86LmqLVKCMMUqiK41ZRhWzWxZXyq6zZeaR1Jr67eFYFrn3YLkTMSJssi7wL5LhCx7zXJGxdS9bsEJ2rYw",
  "key34": "fiDXBMreXzCcnCcxZEkbsdbmBmyJaZbjaqJWSBBAffZAvp5zC48gJ68zRcGr8pxzsbFnGatztkmi7NUEyNNAQnB",
  "key35": "5o8J4s9S9NRide3eR4jt15aQHKFzK5j2h9bRKXPT4qPiyAzg9FfNYULP6CmanzfKQpzAPpuc2f4fz3ZnwBqBvTx5",
  "key36": "AnGcruxgVh7eqUo3M1GYCuAThvDntHAMxd5G7nW91gSca5c7qF3UVXwR645XL6tKsmJHsg9oxbrxefdWc1aUSET",
  "key37": "g8SjD7Brrctbw7YETdk1Yg2RWtbbdWXSekGuPDkB2jgiVmm2NYwnstjPxgKd7YCsdJBFH3vfLGTLnbjhKpnSWtc",
  "key38": "5JxzjF4EqiqUzZbpTjBcZvjt1o6W9jJRgwJ7K38s8d7QmHZXiFSjxFrC7hBncmXoEMwZV8sQ5nA3X31QfVkP9QBv"
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
