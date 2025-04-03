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
    "4szQ2yubtn54mNw3eeLJ35x6nd4pvBru2H3U16Z7JjkdhBnEfW37Y87JK4Z1oGiNWMg58gTxUvxcyRSxMgF5a9ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ncJXATpYAejLRADHofdB2NhxZCYGwVgEtLgz5NSFmaK28CxVtK5U8iMyqvsa82hRpxGn3EP3At3xH7opUdzfydu",
  "key1": "6XhKTz7Xxn1jptDr98fN8ifGWqEqdasjPEa1UkQHDyD41x7ecUoE3VQy39WbHYf7dH1ZvK6zbdKPRYecpXuQPL2",
  "key2": "5h4GjL8mpmDgZFbiVAKEs7pMqQDTiuXfsX9dq6v3StNoRhawmGxUYdahexA2fcxUQ8c1LtxHfHCSTCfMYEbh4REd",
  "key3": "5kx4YzQ5NT8V3ypAJ5NsD6cEQEaEJBEcQwAB7m4t6ASCmJ8HNYC8PLhwZpuSEpL5pzSo1zkRh2zgQMJnEKr55if1",
  "key4": "3mTeufpGcTmTWGD3DmVa6Gd2JENMTbTFTyLUWMr3uzAZ5frMFBvDWo5cDEZNm2Df12gDfs5tnKXdnFiksiWJLvVG",
  "key5": "SmxmiG7T7M12dspuXpDpZdvNJkrgt93pEFB1xY29dHcGniPH89VXyVH9gNMvByQ7tSvGdkEqwzvGp3t82WXi7ks",
  "key6": "2GnFkAzsWi5P3qrVzuVkwxiRSDPYftQEe8neooV2HXgZAo9ifgYrLru9BBtsmSeijWaWshPDNDzvXPEjKTsUzC1A",
  "key7": "5S3Ls4iXVew2dPi5GgoxhPdPS4Jhf27EGah2yo1qg3z29N4JNESXwFD8XmtPdmiqbKhdJMMDNy9vWf7U5BwuayHq",
  "key8": "4bf18zJTTSiskJjPTx2QXgPNjf4MvXSRhZDFgxRrfn2dyycvR7LcgLY1ECCRniLY2ex2jeUWxr9rrGLgmA2gx5r2",
  "key9": "3dyuPg1g4arB9ALekrY96iLD4RB11gyJMNqtmV4dPwTHZbsR8kz4LXPQ68SDaK4bLthqjLZCsTAJfAmhGSgwxW8t",
  "key10": "5ETYzH5F9o38iiahGGWYNwqQ5e8RHSB2JytZS9mz7Sp1Hd3DjhFuB8pmLZeACoqhbkjFhwxDmp7JB7aRCjfSy5pP",
  "key11": "5tZ35bmdMsZGdc6jTDA1BHKKkS46dDeARUF3NzujHBcaFjfFHjWP7esJud9eV4UkbpJtvRkzNmXWPYum94HwrLRD",
  "key12": "4Pbx7jBTqGNbLQvzAifPvCQETSHqkRR1TYaazWLFvATENVyuHgUAjigXP7EyUgSuRQvFLapLzHAaVwBBiGTDfQtx",
  "key13": "5wrd3Y8gHhNiHu6hdDvLj3XvodoTen1xnqy3sbGdGnag9EdNdnrVrDR4RCqxPJJ8QG6FgEFNd9E8euKcAL1CgWnD",
  "key14": "5shrTATjBRirgoMrJmyZxiEpWhdzJkf3dFECk19R4DuQFMmVkgf6XifXyK2nmRoThn7XPeXKKuuXGUxTfoM1uGrv",
  "key15": "3Kxsqqz87FHc9yW8GduPmDrqYmW626zmBNxe7YFqzdqxa1sEJsqX5NFjz4BbJ6xQXf46YxznJFDDrQriGApXEyZD",
  "key16": "3xJbbmY4LHA3hSBu1536G4UiRMUcWL7GduYKJuMAeKM5T8risGvg5mudGoLgfADBgWBMtet5LKn7bdkJmtG4pm1T",
  "key17": "4BWJydQbkLdPdX9oGAYdDmbm9WU4AudfN9pJsJu1bwmKTRf56c9X4VZmaLTbADAM6UzuStTDTb7u8cCCjxBv7wLH",
  "key18": "5DBbir6dpHyZtGMGtsyR3nb2nkPppu1xw3MQC9xFmPvB11UUMAFz6WYLbRS2k93f3uBSPRoTKBvAdcPyMnucoQPe",
  "key19": "oWxY3yFGCw3zBRvg1PZyR7yoHh3agBzwoL5hsBuib6PpR8bpHqroZQgWgTMF5GanQUw5NpPyDzRTfrhYzX4ucaf",
  "key20": "uA2oc2wcZSmH34fhvgVjz5WEGWAFNM4AiTrd82xH3E9VyK8xhYavVN4JsutRq2N3sAtVWhaBUiGEJcHa5R8uh7L",
  "key21": "3jna8w8b12pnrdFpL7FsALtcAaicjs2iHAaY38B9YLuVXerT5u5VBACuyhGbRQzUrbBiCPLAFYqtSrxdVeRhDRsz",
  "key22": "sgGspj2kqF4qNANLcH5Ud852LG5ETKpvGoS58SG7sJbDeZFKjRXRd9MndtSuNTn6bp7up2k4Tepya49ChSV8jBw",
  "key23": "4dcAo1TLdBqUrr1mTcpzPSubQaEqSVWzsZCyzdiGtY7yoAFjPaCmnavdWTnjYroZS12NojCnjkmDeD5Anbjmha12",
  "key24": "53uipAv7nzWJDvJY8XzvsRByKL13YpToFCm3wQ4giqXSbrYeaHbRcWToXuNJs2x3E15iGVGVVj9JprGtAYMHC4gu",
  "key25": "wpDk7ETp2KSpGQ9rRELnozQXhDDtPdq3RNBapiJddhzovvu6ELd9iYZRS4aZQXxSuAchhWyr24LT11ZDq5obVTu",
  "key26": "27D2iXXhi2Ne2ZWMN7hdN6TP11TBi8wrDnVQvgBaPsqkmrAfwKjg6sfGdrBwoFgV6kaYV92anPADtns39e6aKsGk",
  "key27": "8dtG2ucezPDopqEgCvmwmVHoWFfmpFrMGXygLjBAThrtBuut2qq82VbL8mVoYT5ujbHjzC86ukbqE3quZbNgJ66",
  "key28": "8sPmmTFP5ZCPhf1JAtMzFqmJux3LXWy2pArDtv38wo6beDSsmyA1QKd1FtrxW7kGV7JdWibfTYZ2XKyASsJ3S4P",
  "key29": "63yz9WcujNVuwjupuix6ctYpmJJQvyHDCqKfbyfTcRNouUVpHnBunupWtjRDqwN1AkSPr8V8nGoV87rRnTQDKdQz",
  "key30": "4aKGxHCZreWxRKhiwRjvsZ7GjoxRdpcXLTuc2RC3evQ8DuHbSMQC4mzZzvvNpHcFzYAKVizA6Cn2UtekJcLMqeJz",
  "key31": "59fvxT6tk3x2b3E63tw12YPNzRGmay4b7mkJ5UaYZif2JRufQi6Zo7DH5k2tQ3ZyMUeLzYHYcEeh4vbwMmxLCpRK",
  "key32": "3Esscq7sZA2G7E1teSfNnStuwwd4XoDuuyHDqmFheFup7G9RBWTCnaJq8VtLxsZmpdQqK8wSti5cEehm6m2em7rH",
  "key33": "5EyefUcugdcVpqZnoxvo5Bd76HaMPiUS5FM3jeGQkKWq1cKhj6FMB8QAUUJ4yJwwGGbpDfbxLvKaUFcFuVCnxqNE",
  "key34": "4sVCtxBrcBYc6nDSvCSKfGqayyVDGeityrQY8LjsgmGYDusV2MuCHr7WFWGKkU1wrmNP68E3r1v28v8D5HzLjCnZ",
  "key35": "5J31m4VxabpByRwyHznF4vDRDSoSnyqKcfZiGzDVokeJk4TMEcviU1DSpM3Ywex9nRuzZ9GNtwqQ8VYMsGyGjaEr",
  "key36": "2BQjzbTymzpnu2hBZYcufy7NU7PmRXJPUQpBMwXZapZwSfMmhAchoMXfJnjbvfKe17uKdqDNjCncK5V647kBA3Af",
  "key37": "5Ay64hTxyE9hf4QiYgc7Vv3GrmPeBFwp8mq5Wz6LD4VtBP4dYJhNNGq9qwwDLwR8qTo9LP4NmJwx91YESV3J7RNB",
  "key38": "3TZjRHsFzGbYo87YMRNrs8f3GYnNYiwnPC1vYpqNWT1dv7JTPKfG9dKW6VzPjxyvkoqJ11gveuCQ4Brs54eQ3dJ2",
  "key39": "3JrCvCxaANhzjYTaerYPHzdqpBoXYvP9Gqbs7tW9Fab2tULXuGqammVYdmdH2VAqk7EFr8PjiFEQn28piAVuBvMN",
  "key40": "5MMXDLQQRAWbRX9yuEtU6jHUEBkKtXrtBfkaCBXmummRZPb7KxsphP3H4ozREBqFeTVUDrmorASRU79G1DsxfTtE",
  "key41": "gbVXhdzd3x36NLtXRRmorrerx5QNvwAozk6VnZDfAMJoGmR2pV2fybbdrVabnUjPjW4TiuAt1owpaSHqNDNwEVB",
  "key42": "3A1ahvch1xMPPFeq4hHtX7osXTWS3L28Hx28MuQQxn7dzeR8cxeSk6tGigujEYCb9AAgpesAqMhDa9Fpf16rZVoZ",
  "key43": "4p6nAwdc4yzuwSC9NnmjjQ3N3yGYDYdSHjmyMqQaq4FfHkoHARArjsiSi5AkySCpbg21aKcSSNVgqLqKw3w23zvS",
  "key44": "3nYX7oLuNNdMpa7v8sofcpxTF2dGnDqEsKk3BXm3HYx1CB3C1FEVrPPgYBzeMT1dLxng9UvdmeThiMjjWe8HnH9d"
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
