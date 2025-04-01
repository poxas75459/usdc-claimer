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
    "2isqyTQQi1CQ58v77JCpSfPTTwjHknGGvmB4tmvom3UfvFBpTjcwPSzhRa79mDHEZCMGFpi1PqQSGLjWNvzFpvka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fX2aD5EKFP7VEgrK8QaWxWhDtZf2enFnmbsnMKYgDdy5Q2fRU2DKPKn4aLm3UvcBxjTkXdjgWhrVEJQZ1jvNumj",
  "key1": "3HbVkNETc22dWiJQPfpEN13qiNycTo1noSo3JARpSBAEYGbLxZc1pQ2fyxiSq3raAVsquwAkwXhJc1v8rWiqnK9S",
  "key2": "4RY9c7NgtX8qewjHTq41Puv2bLgtN57eLhbEsfHQmsWSsPHrV39BMhv2EjFme4Ai7Ccs5SJ24nLLhDDKLAULgGWG",
  "key3": "4WmC9edmEXVKQfZPx6gR43fqGAvedFAyqVDweqgzY3DmA4i46HQ8kso2xhrpHRWc9jsSJPPwqamKyGFjfu5R2MJg",
  "key4": "66focFabqUwtLArFwem4f7s1jHtHhqMkRNwD7meihxHysthJFUVi8wKd577teBNfQrPCEm7gQTS733hSaPWWQwfv",
  "key5": "2PBRdAYcYkJatuPH6YHiQRUCGoebQiua4cYVoTVwsVbPXSVDo8fbmpo4i6SJ7VLH1j9WxeTDTMFTw1BgTSSraXz1",
  "key6": "61yW9LsdqXfugmwYy1rNRsg8Yf3HdF8LT8q9M6jCnPHKUCMHxjcMWFcbB383V2YGXz9XJ9yQ1CiT556ZAks6J14U",
  "key7": "eWFAajd7uoxRGjJkW2NysPVPxEYBDfsyBZZxZLPzmiC6QeyTQTHVMv3DdphovGRTDeGGXuowdrLMpZiiB8BqtPW",
  "key8": "63rBpoLmJSfPkyEtiYdUMrox34gk7AtJ3drS2UbteX8bjfxtrnSEDCadHpKC92rfWsLPzF4AbGMFr9jRVXZAz9Wi",
  "key9": "4KZKMHRWnC5moTicAatpvGe1kpH5sDpg5WuPHdaAGPuVUDYxKskYDbZcFJ1SBkJnirKH1eamZ2GUGdQGFugMvQYg",
  "key10": "3tMGMsELMgnNLfRBWQZzJF86QB7cuNCraMtz8D32rcvtLcXf6KQ6BGXKSc3kTd1VfwWCCgnUgY8sNypfox63DmiV",
  "key11": "3QVRUb5yKyKT9ehxzpFPHxE88rGTSCBXt1JT7E2tUKnk3KNgeBns8eCs5BZk7VJdZGaCythRZXVBtTAKY74YCMJf",
  "key12": "ez32TPhHF5mdDz38GF97Ko4MAWL2Vs6X4hANuoguDv6G9qk3LJc7bSHfL7893WcHtK2L62j1fYpLCiHc4WS2tQf",
  "key13": "3LwRmrMRM3PNnHV2yoVqbLQfE44YFC3tyhAm1iyCiueinGeHZKaxNR95iTwHVNExFCVitihjic9bqRKmmaDosUZP",
  "key14": "vmaejpbAnsFrXXuMzBBEQW8MnfDwTZe1dBiYcW9P89vMZL1He5uyAs3s1GAeFGfYSbPPZnAGHJKqJURadMp7qr4",
  "key15": "5j8AfAeGJiLsbosdJcbLurnPoBHdCzJ5YcDJwmAf3xFyE4seL66MRj6iUwNzMFXfVYqPP3VK8aBE5VcK96qJh18m",
  "key16": "3QgJ36KDebFDFtRR9RD1hw8f8sT94MVE2reGbnUipk3fm7r6kCwivkvBR6Qx9LmzcCXEwHfcmTVfE74fiLZpnxM5",
  "key17": "vu5vR8LUXuxVHRZHWoQdqKHUAW9FiQc2VccDTtiKtG2brAfHgqSCmhx7Cq4Am8G8eE5MQ5AYsrN4PvErDUSBu9g",
  "key18": "4jKKEg4bwUfmGdxyQMwv7trL8gVGZ5xt15vEgu4MSGUcHzKmxVwzYP12GxsHweCY4mHhQzKNMRnKts8VjzEVKjV",
  "key19": "2TjWFSP6n87DWckAGDxTta4yoSh8bJG1fP5PZTXhciDR46G2aKjQmK2gvYTSeDRhPeRCVVSd2FfAh4ciuzxZMStF",
  "key20": "2wAL7YYDyyxYo5vXXyJq1N4NwW6YGbgJPFg6dUJUAY4urBd6SSRemaRuLARYBowXH7z5GoknXDekb6dRiw7daXrj",
  "key21": "YzBRYP3udv2MK4FHKcbXgwow7PAZipC8vMj6hq5CLMBT6gKXDMssmRPTAzDVb4ZYMpqexRxUgF3L8RWVJEAnCXs",
  "key22": "43w25SLPghCqeee4HTCkbbhrMuw4us6uFFkmNvkuZgRoeKyern9DbgztyMBjYY38Vi8vUhdMTrB9bW17Mi4xSPtp",
  "key23": "3wAmRWcb3eiJUUMwMzPhxvtZxEdG5xnfgVDb4hTJLBUdaNiV4QU8dxFa52bCWvQ16iPiNLVGacB3D8WAb6DFKHow",
  "key24": "5giWFosa56PYDmyMgAoCw2uX8iVVqAbKqCh2eRdYAxHREAxK2Lv7XhYK2fnf3GJayaoJc99Dz1o2sdaMxav2JsEh",
  "key25": "5nWtrEC4U58Q2PNGxJy5ombF2rxwPscrvF8k1oF8C2edPALzHhftw89Sb27v5GaHEanMsc7zTR8ZnFgNhUh77wfG",
  "key26": "BF2fxsGfEHDFoUade7kmtqZ9HDEJveTtMPDyBCeiDvRknsYrmickfWotJ7w9ZvHjM7eMLji7cVNJaLEMs3nq3t7",
  "key27": "5Rvh3ewNFwAUVmedjtNess2V1Me6ibqJZPGpTFp6iznu1abj9EXwTfph25JpNNMPKRTPcLTRxMuFQf6E49ZU6Piy",
  "key28": "R2PDrPz9c45Cmy3XoN4radM6Sd2R4a1Q8zEbQwGXQotgkN7Htfh7t3GDMCxfYMsHi3Bk7TTLb1ddcxMKjdBUSaL",
  "key29": "rJmTo1WPMs8jferDs7xhvqF9FHtymANcbQjzoRZ2sgQVCcTxNPX7kYjuoWyQnhWmkt9PVukCZ8moNRFaRRDmouM",
  "key30": "3ALhQGpd2WZzGEimoXv57973eVv9NHw5JHrZxXZDK29nhDCfxWGpNWzUQ6mcKyoqSh1ZTs7GrQWw35nqBYTJWgeU",
  "key31": "4LX33275vsi7epxLqDVjuPLcx4RbDCz21xVAyWPzxC1L5BPU2LRnRuymb6VmjzBW85WtafhZLk7Na9t4u68YgSRc",
  "key32": "2JvMGiq3XBJ5Ng1Aqq6izvorEmFU4kasK41xMwg388ohQ2uVDf4SEFDSAkxkrZx8AEwUn14aGacts2MLBF7zfpMf",
  "key33": "4SnNo1tPZhnWquoVefF2gNuuwX8Jrh3LFyeCVnjtj5dHmP8jXZrxZqR5xeihjjk9mZNkwR5JRc37AHa671MRaF3S",
  "key34": "dRCA2MJa7gLsY8vxYkx8nsro1pNSx2m5AmjQkKm94HqRWyskK1Q3AUTKFsvD8gTVq2zXhF4CUtBvftCRCdQsnKB",
  "key35": "26a2TweMSYgp5SaSa1FQgoxxoPYKXhANTyMhCVQTeUrZMsxjRz6UAXAN9Qdw5unJrNQm79PeHp72rtSKFtyGMKpj",
  "key36": "LjbHgAANVLUeTY2tTmeBGbyqqavFK1xLxEwkysACc4ZXubUSpJkEbyztwemqsiia2Zjg5rTpxDZp8DEBs1mEAb6",
  "key37": "RZ8apXcDuEotaWGCkAEFLTz7pnLNvkfEG92UKWtxstwmFmSPwvJHEwbVBr4KvSGA1WBVn6hSmSmfqWdwvqDpHwe",
  "key38": "421sDWJX18X8PpGihwQq4UZfDFh4NZKvw9BfjNJtjDdPHhQCGjpx5MaXrXoW7kYSnpSC5reuWs8CHQDCRroMZQtk",
  "key39": "gs5Q13FdBsvGRcnEAbgS48HjnMiP9CmYMkCJi4gT8Fyn2VGPcM6BFA6Dpo8FEdSj7siC2ZywZYy2WkqxTY4yPLN",
  "key40": "54Wp2KR4Q8gKzEVNwAoXHSRLeekPjuK1aU69koGYu86u371i7E1kAs8wtaFPoDYnwGtscDi3RKNUDDjUz58Rono4",
  "key41": "4g814Ub26iXadVZpocD4qPXYNurpnaSH5oJJ9wyPdnQfTsykJSWdtzFbCS46eRCDkVhFYPNDFugZnDBweVqrw1di",
  "key42": "4EWikh63QzAKUzsWeL3TLqHnms7coiXMG8EDdf5qGoAkoLUg7dvxNNn9rUSCm3QVusRotPTQxssndpferxAmQJzQ",
  "key43": "4eaPMX1bePMeagDSSzidAvGRpyJ8F2ZVCtuDhx38QZ559eYSvpPszEj44J8REDneQum1HofiDLws7uUyE6yTnMjw"
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
