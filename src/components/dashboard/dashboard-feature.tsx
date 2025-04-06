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
    "5TENFGhKnfKuFi352HhjoE7LMEkcrnk7aNQDbiYHHRzy3PBwTCDFhA8UhDXrNxzGYujX9rK2zx75coRAGmrz5cvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XYYAcrzZwF1xJoyp8ZPbUnSoULGGbhjo5uM8CqtbUYzSborGazK4xuLMUdQ1BWU9Q2iUTLbj3jv1SQT7SGfiXFp",
  "key1": "2oxi7epfznt5KY1y4sobGtNPVNmaDAxQLmFE4yCe28mu3NAnK7ZRDVMH9jaHoYK7sx5tZBcpgi1GoW1zxWYHPmB1",
  "key2": "5g5mr384xxM87VKN7xUAhkewoRj2Sy5PWcHh1i72Y4N7y5H7QjirHfTGVE4MbAeNUSnLZFDrtJnPKpeb8fcdR5wM",
  "key3": "ioEVj8XrwK9PhDEydtmYiuhHEKRbm2xMXZbSAFJjbsidjrFrUAVzAcufFJgfkWsGeAn3rSnywZTBKtkmQoF8gz3",
  "key4": "2dkce6wMSgj91epo4Q9NUBXgGe6VMGbR1NDSBuR8BrxGYLa7KpHs4wqf7hQ1ATiekYbHecZA9U6VYjV4qJnxwoW5",
  "key5": "5iMxVT5VFKvW7Xo8dXbkhNhWEgSpc9GF2A2zt3moV5m76YatmLzHrwSJzs9qUqxZ4BEqPD7trBeJzFheDnqjF2jz",
  "key6": "5LZD1ybBerrJ1ZP7qiAY3LPc2nkv5WFfKFW6sSFQD5WW2L4HbtSgBvYtKmQRxa3ztJfd4hpHzKYg7cDM4JBbP3yF",
  "key7": "4JNoa2FFJ82wtaQU4gtjs1vJTH4QWNfFm9fi9MPvjnTLNxwon17ujimmpxzq2B7WQ7ATDKcodiRYpPjZPPeYHrkL",
  "key8": "5vCrG9ZY8S2S7YALVB2JSdJNBHKPinGxMdzqTGXwSNFJWPafG1vnfVLo6SwShREFdgrHkhGvJ1Ste3tTMGJuSpxe",
  "key9": "4amidkpFKMXEeof8RzMXg99HHiqoDHAQ6VYLsDqHr1PJ3huBSQe9KiPDaJZ1ixVH5y8z7ogAm1Cf5yt9gV41ixFz",
  "key10": "643UDndb1Rjrdgttwn4iki1kddkLLUvEQ1EGnDSdBnYoaEYt6MfLfoJb7noHU1EpHWwgQunVB1jyzREx3VfXLfHv",
  "key11": "HVLNsUve7YdYQaabqN5L9PmzE3Z79Ppav1dGcK5wzNC7nKmabcJJGGiCPhFH4KdtJYi8QpsraqzqAjhStGJV6r4",
  "key12": "dtNFqZ8rT52qGcmNrx2h37VAtjH3qrdsgEfc2kfpbfJ5c7iFFQYyWVXsra2kri3mD4PizsBhdfhGLrBC6R8Re4C",
  "key13": "4c2yy1YbAjzcN9YfqCrnvmSScqitDhbCzQ5VtSommLv9aYQAEwaaezAKtidAwLs5J4q5egPSQwJyVsTuU4DJndhm",
  "key14": "27qfaVCgKuMEJoB9HQagiPkP8wMjfTUisLUCqdW6FQo17JJrsJqJMVgjhJSk2v8BV1V6gdx1dbczVMwTyoVW1mV4",
  "key15": "5w7EQvuSxUn5Th6XQ5Vp3ygVKHNhSLDjJ3152wDfEkkLX1AiwD1FUq8GnUVbPNJjS72sJLiiGk5xjsEqtweP1bgg",
  "key16": "VwUdSf952xhHuc9efzdTqTudg3oLeNRc8BymS5rmkDKFeZEZEaavdTK8EQtf1pQ3fLJc6u2sAjGCn9M53WctDPA",
  "key17": "2bPebhXKegMAGaAro9whmE5ims1H25QZvkNA5pRKPKJX11Lqrg197XT37GagnKXehVNLfZNXe26AnkjonAdmSsB2",
  "key18": "2Grp2K76eRXTNZboYwLqG4xkLQAap11DuAfNhpSB4Rs7NGNKexfyPWhGfUUgrmu1BtkzLz4JiJ37pWHndCXZdiRA",
  "key19": "5sw5A7NGsdWjhekQnh1LCUWuxVbs8eMAsQMSkAVLRjq7oHxPXxYUBMr16qwQrbeyLPoRw7qrGdTeJy1KDTbabCkN",
  "key20": "3J8gJmi6CinJLGrRfEfDnm2iAbTNwPyZvLgh4HBok9izPLgNqk3dzTFBuyhQ3oCoBc1f1puvSL93qzGXV4pChvSR",
  "key21": "jNaLYfCArc6rh9N3eB5xdTyo1rs2otJqmdSGVeXqeiREgDQ5HQrG8qDQJfYaqnBAnrbLXrr13TTjFKHpanK7jjy",
  "key22": "4XZkXymPpStPaFd8QaGP3J4fwmHi9EvrKDjZnRexrd1jAoS72ThTq9kNKeuv6k6Am4NHbEXo9kYksP2Duc6rjkwP",
  "key23": "2BtvKidzm4FouxeQmtKE2VULojMQhSCYGxmLJxdbsgtrUTL2uM3Fipo8neP1HtaZ71ZPr7LzoLm8U9hEugE5ou8Q",
  "key24": "42JAyr3m7zV4pgcWn63cTJpRsrETZPK9ij3Ys1CdNMLbYGQs79QpWWZfq18m4aCziBePJX4itcpGYczVYgTfDsS7",
  "key25": "2FZ14KykhJP5K1DmnPk66xqy2eQhAnppWUhEWU86HnxrAu6G96tmAFWS5x1L8xqSTvqgV5Zbtr3nT9uLxSTbau7E",
  "key26": "61LMF7VSv57miY8PoqzoZXxxXfBS3EaJsz3QxMinXUGmWGmywtLo9cnbaRRpLz33t367AJfZNiMt63a6qNwBZoBV",
  "key27": "44B5ALRsG7uQMfmvgVRUarBqJnvS66wiABEY17yiY3Np6qfEPMJf9pufp6vGfNJZZPSrtRSu5AdV2otQxG3FYuHP",
  "key28": "5Y8LS2WgqrZtuZo83DD4XaJN2Xbz7KsBQNRA2xtvZL5FGMMoHtZycVJ1xKSwnEWZBvxFEFnXgBcYvV5kxxDN9kdG",
  "key29": "3ACKe2U32NU5ztB4MvuGu5pC9CmXPX18Qt23DJ5qpj499ZZwNS2CgdKz1A8SZTMxzapEBgsPVxWpghMiCMx5fH5o",
  "key30": "5KX8rbd61mtCxzC9peYKeiuQmVXscwmQbGFECgcc8JJaKHSbAj1XmosUazMgLpQcr578pGXvUenXYmHSdjwRbBsh",
  "key31": "4opB492NDFWk49ZYDmDCBUUktbVFRe2WuZoPPAQSVD6NQeFWVhHS9h8phWMs6GsGUxVFQBN1Fs5npRAGEDVWWb6W",
  "key32": "6nUG87rNYdvrnqFAXh9SexKuJoh6GX4AhRPsRJV55fvkVancfdeRiEDZfUqmcNWvNN2haSXfuEx2JXf7ka2i26F",
  "key33": "3iTyFsuurauWbjmtJkA3Y5wLJ3Sndrg95PGWnHPKtArFogTvFTUm4fgM6zdPamBRJGjz8Zmtp2UCTVkFdedGJMhf",
  "key34": "3NCNVeuptwTrjUXLwpLG4TnZEY75dZ5KGByKZseC4HWtc2EdKPBANnaD17VNMXSBuMXrf7bE8176UkNqgKvtP2xp",
  "key35": "64GDuQBGHqATaFHvZJHvstDApHBqnQ1vuxCpTP5HQ3HPKyZNyRRFDDV24N8kk7jKk7aH8UemNGefqVKoWGuUvGy8",
  "key36": "4Kzc5CiUz43Tzc5nb2LtVeVR7uQYqBZFYBGDxPDtEnkM19rbFcxaVX4ov8WwhnyEMPFqihwxbVKgmrb5v8xqHynq",
  "key37": "4aQc66HcBF5rATbDMQ99a2bD7qqrgHrBzV84ufRYPnkLpzvxE9tv13WeJi2cqh1hi3S9iLHtra21ECieUEZiTWXL",
  "key38": "598uGaTAiVhMfgJ23gvLC4F13XKyegaNzKhRgeqhSdNXcEsHL59YafCnx8ZPu89Acn3SncPkNLVt9mUwdX6Pb78H",
  "key39": "2F16i9PgFuKLLRpcMd6xr5jJBbpsHxpQ7JhdY526MnhRPvdUC2zVUjipT8QyiipWPNHxmfKAge28QWfm7GSz6cyJ",
  "key40": "3CM9C4oJxWtmyymTg3Jc6qUTCbLXvUAafZ98iG9qcBbdAjvmrtr6Pr7Fx7RSqENW8TppBPHs8RdLahtSFQtTb5Tc",
  "key41": "TLBrihVL5pVQf1XQNWDYtoqypCUqWtzcBb3NjW7tzGey5rGTNEaNZ5hrJ8p77qhMgRL4kTxkNVYGvgXLnFRbaFv",
  "key42": "BRXSG4JLJWyV6XXV2C7zf8evgKE5i5sA79Zep1oukTZUVHYxih9m1vDVcXmRfNKhspWMhqZrAbQ5oVuEwrLMGTQ",
  "key43": "2uuMF5BXUYdst1QbzP5jR9W8osTs8PrMxFcn6MBf5sMZwPBMjD42uGCRr2pizUoTmQRAhGRnLM2yjR89mMY2tSae"
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
