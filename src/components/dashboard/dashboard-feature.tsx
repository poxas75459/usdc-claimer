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
    "4iz92fb6eb6Up7DihZstAvk7eSij8rWCcneCqTVRUCjifkDJqEpvJ7GcgHhWctRkHdsxhNHJTi4w7vFdwawfASYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hxj1F9NJEbG5qrHXix5teP2CbCTkPrHSoWdK7TqgB9NZNwW2AYjDEJnynJTrBMcAHF1tuhcKw5Kdezx5F1dCMkx",
  "key1": "5nhJ3Vc8uTSV3uzv46BAAuXMHdSidRC5RVzrdhUya2m2Lp4NVw45uXEujFwPaPuQMtzUbiXjptxCSBiX9Z6PqiSQ",
  "key2": "2uvMJH6aPAfUfNh1RfmrBF9NBndQcii6osVA3ogtGD6yTdH1o6GVrufZ7T6orY2Kx3q7g7pRo5P3B4ga6FPdWjFs",
  "key3": "4G82wbdk9o8Dbd2MFZgCF9KKFY5pAT4GXJ3ZneCpih265rqyPu1zwhwbUgLN3J7Wbzsj1r6cqU3DaExXj97wLGrd",
  "key4": "5GbX52Xdv77PZd2gEb3vu1Z6pBvZsYXRMRBs3L1ox7dYcX6gmjmBJRQr8QycMPP3dLHxCNLv33W2mSKEhDfecShp",
  "key5": "4SMKUjLELw9ZCHkwfxTaiJQoSzYtfGUmx3QAQXsCrvQZ26NFiDhDXaqcFBzEJkmSi9M3y2rpAecvzkEdTNANfwDy",
  "key6": "2u3AiK7rFyyzg8XSJXZLLhKdJdPjL2EYLgMbAzZkwTQRvangZ2YxDjLNMtZ7H7uCoKveswjos2wcyJ5QYhhnS9Rr",
  "key7": "51iZHwpoVmLx4YYYfkhAaf7vAkUWMqNQTCV7AUSAMaWKgL2spxq6J4xVFw24HmkieKNSyWh9BE41hvP8gVFPPk9C",
  "key8": "2EQNifKiBd5thyK5NDa9MMHtR8Q3vNRvA5DDjAUneQeckTg4ZWJ5ZcYcs7CLLv4zuHFqzPfhu2D35XtBxmnfMF7U",
  "key9": "5MPoMsJKKu7XNQHsBP6tFn4hZbZb2naY9Hyp3tFkW9jktc3azR7kNvcBgHEoZF2KkKo4YyQgtgzBKQjdE4ebJGZ1",
  "key10": "5WKPin4SThLfMLRNXRKWHCy75rcFuBdywGNwnKEB17kqt5sbjk2qgfB21QZvwNmQAv8MnjUVc5LYouhi6HjKYBuC",
  "key11": "3Dkb8f5MfJEaUMJornY2YkuurDFNkxVQXaNdDfWBZtLvVzzXE9tnyfVuQEA1nvKyuGtBNKhGTpsM8xo9wbAnt1Y1",
  "key12": "KCEMkntXHiyDtHkgPSmM4neDYDUzyHX7MuMsi6243Ym5Vu3vEL8wLVuZ1ZXMgy1uGkjj8kwPi3mosAPU6sJDRZA",
  "key13": "2CzKBdmhMK1jo8qmkNshZ8VCvepJUTtgMTM88Z7UAsH3krkF5bw4ArkxXDkrcn8iTNLjBrP9M3ANbsAv4or43JiL",
  "key14": "2UD3eNVadPCA9cdJ1GoKEZUaqA1hkbtAyyvN8yUQ251uWqGwxV9rExzGYiMSt9ZF7cnGNjKJuMbQhqTkcimBghfw",
  "key15": "23o8zPhB2kPvLSJyMpJrweEkPg46aQo5FfhUKvakpamdiz8W351dpURnSEVGnvEeb76mbQZRTW3Lf1qyM7GoV4vz",
  "key16": "3zzW1pFPK23NH2eiCNT2jUx63qQrP8EoyEgZJMR1aifiHSo8sqCLS6c3ZtEdGaSpVhL3mTVFeRwPQyWXb69zoAhj",
  "key17": "3LBcPyJafTUMCnBBstjorRWjYWN89mss953vvdy1aKnqChuRKJ6MUGDtTyfpaosnvd9LraqaCC76S54Cqcdd4xKq",
  "key18": "4Muh2E692XXtJGi3qYESzrXZGy2g4eeEYXK7rY2yBG7J1Ka2NqQwQXj16f2ASWtFreGCLb6H8cG1Qx9EBMbQo5eB",
  "key19": "39xNDU5DxCbYWWaVGEDgR6kLZCu19TGN6YMHJnm8ZkwDmfZJ2KkMz7x1pofRWX246uiWiP3C9UqV6YJwind3bTPY",
  "key20": "3ZKqSVtvMmVLJFuCJZHXPCuWcMraAEg1Q2fdZ6QQfJFZX3tCnjY6Yz26RLPWqo5R7U2F6mwJQWLc5ZVhmSn59Xjd",
  "key21": "3bJwqENpwmENpGF6W81fKKp5DzwLbHEQDjETP5nyKoWS1i5WR9gwbtAjxapNbuA4iDEQzLv4qh6j6wVUK5A6YKbG",
  "key22": "572QzPNXbyfbV2btqpnqr447SQ6F6JQC54KUPhAdKf96z8p3iKCov4Gfgn3km699YK74YxiX8vtjXQqKVitozcQ4",
  "key23": "4XxobpxsWARTf7rc4Qff2kninNxFt3vCVQKSM8CdUNik4fRD5cjXTg7ocPSdLBzBWUDUnGPJ2FLsQMuqXsGQENmt",
  "key24": "4y8ztKwogMNYDDJAxS5wZYjfjjAzNvTVEBj1e7xTqgsBqeWwdEe78CALQXZ9tRm63J9QDEWVJtgcV4tJJC3NW2CL",
  "key25": "4AWkbrDg9QJP2p1iUwqSrQTfn4YNHiUSAmNZQJnDPbFACUJD74553jg932FMXPAXnj5YkrPDRKvvQ5tjSJEdtCXN",
  "key26": "5Fp6kXt5kNgiG2qdSsQUSteBnnUTiBo1VYfECEkvuYyaPNrCH1uLoM1aSoNHwPwDudXFPS7grVqG3FBG1dtAhA7",
  "key27": "324U2oi64tDNeQPmedwzYYWtxgMLXbwojiAeNHvPFHFsXC7cRZi93uPfetTpYZ2bPdWT6uyU9ksvRpYpwFsm3QzR",
  "key28": "2YghmgDW41X1FstWQ3tvbQFQZNWnB8vmsqjC5NcuEUKKpao2ECmPpuMozq77KZ8GLVMPV87j12dK8m1DKmZG3sVk",
  "key29": "2oASHYVKUB14eebc7DVbayyigwMKLxWw3FvVDPPhVCaPJ8gdtAv3nzgmoGHzbfSXczU5uUNSsBUg2HLDCy635TAA",
  "key30": "41jFyxwnNHnAgYqc4Tv5f7EPBRRvLJeeTTLZ53sUV7HpxjkMZPyLGFcCQDeEru4gVkmoqY4D4aRgARq6QQHfxUXo",
  "key31": "4Z98WsBvBAaU5FPEJmdxQ26LcaJD6y9bAeBJKuyXT62tzJ5MWDhAhNEEHgTCqBLp9gckQ3U7uVmSgtPJUH2Aq9cq",
  "key32": "5rNfWdtzyjXt1yFya4zz58irofERhDujUonkKsZ8utm51VokBhfj7etvPVDMpMNd3NSrK4abTMgV6NA2myT6z2fQ",
  "key33": "2zEHpPEv54QvWnXmi3pTg4ph4mv15HncgpN6JhvwTqSRG4t5nwK7udd2Zy5m7a186zbzVHC2ydH3JNbqQZhp9iSd",
  "key34": "4nkuz89XVoRzvkywQ3SttLdG28eowf4qo46w23A1d3skBvRSx4rjZ9JkdBdgzBKTWtQV5hV8CzTuDfDYN46EXy4P",
  "key35": "4LkkJVV35KH7D6TSB3oCM9LGMQfYSNWKYsEaooDYLDMhcUSyM7AxjrpJQpFsCfLTioAumif6FngRUAzYXNPKHJun",
  "key36": "4dK51wRMVh6BEzAvQYi3mGYaPjypMdecSwy7AhXu4y2Jz9J6jsZM3Nc1pbVrvr7VjJSs1MYRJpTLS55gMVH8hCMn",
  "key37": "2Yy2GaQoaiKfkWXRUBcqQ3VEFCW6Btt9ojfnu3deEbovyM4pGwVMpyDQ4eWbJDiUNw5wwRTBL9cyrgyvMNTCjKc1",
  "key38": "3jbZikweAgK1qFaJXPExNrd5AJhkwLx47DSJbvoFXM9SoNFQQeZL3xXbVCct68KbqaATyQVyfx3n17YQwsBVj7zU",
  "key39": "3dyFfENpx6NhrTbiFTciGob1GBfWLouCLvfeUaucqLTXTaqXwoszjWnUrasECNaNqDvEAeZefq3THWuXo2HSeU2Z",
  "key40": "2p6yfsqanEayKZyR1W8f1A3PJcCWaM2vGhd8JhRwhZQyV5eB96NJRxorDH2PJtpeQjWVs9qfwJDNrNvDSbe6HTfa",
  "key41": "qQkqLFgA6vEvirFwH8vHvdV8osaA8y8ZJkWFpQaNqAeuGqRMvkCg5BY7ZQngfRJ9PZvAWp7Xu2FhcTyhGYM58fC",
  "key42": "23quaAVycCW4276g2WyeZ3RM2FXUdikYWDR2UxFS5khrEU5PKfqjWqqe8nhisKWeTM6mp6K6eBie8TUxAh57BNfi",
  "key43": "53ptnUFsvubuyVSabuhk1bMUDdd9s5jDRPtbrTE8dQiGwvveaPxVvfSz4QBK75vgR5raU4LbVuQ8erPdfa7cxfb7",
  "key44": "36Wx5QDJHSEvTzdKDXxDMECC6o6JumnivhMYHMK5f8Qy2Re8Gv499xSAthv7Tq2jkCR7gkfcv8UXpKt7iyuP2Ct6",
  "key45": "CafqJHTFhU54TKKz7vJxgeuzPyX6xR6otVqpyxLuMQA8eaRHYnGETKrEHsoyacCGCT2tpRATSvrxxxoXRt5RFbp",
  "key46": "4AipF9FuZGdw1iE5PLvn9A7YZHwBuJzrD9Vd1k7rtrPexcKfQuw5ddyt8HQgGrVeTuVg2ok6QiCC6yoMMexpbDaw",
  "key47": "4xaMz7GWUQU5oRKxnLK2eNhXNTVfa86KdXKeWi3JFYuKSiwtnA43ujtNKik9PnBHQvrsAgYERD1TcJF6B34M9hAZ",
  "key48": "5WvMCrmCqVRMEdcpfFfuooCnFGHNvbtKRGpRFhkqQV9U3m5U733VxHsCSX6J2r22GJ1aTLDFEAKyimvNVLFHbf6C",
  "key49": "4oR6PmE8TQtTHSAda9Ac3qDN9JqEf5bdmvSiKnZ8eXX1LacsM18U297JkKEm9W55K8cyC4i1fseFSgo9m1DgHxW2"
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
