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
    "2sddEgCS8t8aEo41uyvv2TaaZWGQfXbhkWaxuPccgE5pZviUmDUmuoawNbjoALjGCQF2BWr7kb5MLbkHJKqHVgrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4joPWNArwFXH81vz9aHgvymLpKPG2nxDD8JUMEompVvAUoed6wHjUQRwaXngMz5nACecQHWh2MsyxmZWvfdKoVrd",
  "key1": "2H6cfZEX9L4agrjaPdcjuAq8teo7djydaozAL9J8PFg6TkJSFBSWvisLQHtVL4UHxgL1hL3qiBzCQLJRcCthrz1n",
  "key2": "CnCkvFhvfJRDgsCDQdKNW124SjdtLoK9oa9qtLNqxSHLDdKyJhmBKwWqRhTxxiRJdGSw5RV5qNZ2tsiccVVPbAn",
  "key3": "4QZ5ZNBt1N8iVpeGbhoKHQuF9wdod95YSsJZHs1EvfvRW19VMFArJdsBB6c4VP9ab8cWraoHR6mQWpqDb6izuKSL",
  "key4": "41d94FuAsc2E6EaggAhcJ7pdUt4CHMubCPEJFwnnFxWqQND42rUa94HPFXvkLuCPBs7wu3tdyjKT8XTpk921KEFA",
  "key5": "52GR2FFfcoEP22vyKQ5T4o4UuNJVT3FKQLZ9x8XMbs1sLBnJYNGiiCAXixtb38Pev5GHto75q7EXwJzt5Ld9eUJ2",
  "key6": "2UC2GcnjTDbrQSZJhzNwcHLHxt3jCnDi71mtZZr5pTAnTdAUqUJMBvr8KiknLUFqYa45FUxpzMHxF9D5Ebq3XCbg",
  "key7": "3pb5jSmLduDdwBgsZ7Wxs8zoVR3XMLXDkji4pe5ohGurmsFPLk1x9UQRhraPH2P4Q5gifBeqpUbYsS65zFu5pQDp",
  "key8": "5v2NHd2APdtszaT3dNsRujAPXen1XpKAyLLExWRm6sfwQZtjLLzvmXDcWjFQtWT2wvzVHzsMMfcPB9ecZ6WVr2S1",
  "key9": "2DWon7VaRUu7namHBkcZgP5aUPTvdiEmye11cFNcyvMRtS3af5NxudRA3awVT7QtrfVxMnGDhph2oXdSkx1VScmQ",
  "key10": "sk4vLuH632fR2YGgaMekdRNYxMtmk53TWA5yRKsgSdtQ4EyQvSadAVj7rm1oSYNNmdwKZvSVNjVNbWERQPbss66",
  "key11": "51NN5VRUDCrKRqQgaoHGax2oqoBtWLsBY5EiAxejEXw4r743hrtJFw8bpjA1dtJDJVAyDi4XJG2DyU4GuS9SUuiM",
  "key12": "3mbHQxnMGW561LmVF7kHFveQJ3DNYpvvNbL3uS8GSURfEZ68LWwMnBc2qZK3vwUtXYku8X9kovxhh7HsZQmpjxQw",
  "key13": "4c5KHtTEPaE4N7KNLVpoNpaaLzdeuZR2qtGVqBCx8gsyT2E9sm3kjny1i9NRwc3wrwVc4Fncyz1PX4V9dF2fYTKc",
  "key14": "3jgR9LbXKRhLC8ESniuLR1DKnMgHVNaEuZpGcSq8n9i8C4exACrKMByQVVZNGfPNuTHeWhM1cisGsSsLU4Z1vs4V",
  "key15": "5Zzjc2ZgyEqbGtTTyoEtwiM1m94uqG2Ghs9VLNqjxe6D8M4W1Ch8sx7jfjS7FFxgjAQVhKJbsA9Q5HQU24MHzArV",
  "key16": "ASNMC13L5kAt7d1quRArVXpXZDyyCDkxKqSufbUDovHZ5iG4Mmd2QJ1KfnjbkZWcnKLWPfJBrDAP5bynQGbHVP7",
  "key17": "2eebT2wRpFaf2t31v3WMyaxYew19iotoUJdnpKkpr8RiYyyeQ9v7ojnK2wfwGq6TujXLePWVLJrbTE74t9WhcmoD",
  "key18": "5gQAYzijxy3oeDS3zcxZep5wf5DVpyryPCqcVWE9YqAoNMt17MkEoVj9K4tyH9xgf6s6CmUuN2eeeAvx7JrxP1da",
  "key19": "2AwPpR7aX1ziTVqzuYzGW3jDo3G7wrawpUkgTYuMLvbJmYQX1a4c3XDpdqnGn9AcNFYovQjAmVCPuTVqX8boiGHe",
  "key20": "5uX1m5UrBZ3pwS3ES7X4ucDmiLZVXkz9UhQqczYgCbdeUMgn3fjYvFEWkJSRRHGv2H41Qj1GpHLBnS85bCqSdhZb",
  "key21": "PV38o7igkTnfJheQmfAaWMzMRuaJ7qpWzdmRwBNXWXUbXN5QriWiNFdxcCziL9FajNfp2T6GMPdkDLBAA2ZGn78",
  "key22": "2G6JbTfeZnVjFPwRW52nrhJ5Vi2wVjyKKQQ1N9YbbXrGemCVt8dLwqJXxXAyhQqJr5y9aK1bkG8GJodJpaf4fqrv",
  "key23": "uVaAHa7fg4ED9W1scijSxgzzHNbEKRANt5vPeJm9T2kp1QKL52887y1DVf2qogAjrdiV8oZ22jsEE6aXCGF4Jsb",
  "key24": "3oMVoQVSGBKDe68DCTyFooz8ErNDPuoqH7J6nNUybQRr57zQauqcNmuRBLxSirxN36kRbfxJs5nbMR32xAi8EGJN",
  "key25": "S8Ypy5mQsZkBY8DTon6HKiefzFsrYHsTBFmRZwgnwsBfiiKbdaSrKJxaUhTAdrXbBDMm2y6Ak5L1e5Me8LrKY4S",
  "key26": "4hYMkKYTmE1Zj7qqtm8XM5YWzVWiU6GpsVXjYRLDPptLCh69BFu4Xqd9wG9kWBA5Wr4qaoyRnJWkVRCA1NfNe628",
  "key27": "vcXPghfMHCVneYpuZYgh7utD8xghUpRJY1WzdDuV54A6HabZp6bPtTa29JHUjLiSGchTRwwHBo5vBSmULt5meL9",
  "key28": "3Ppx1ut6MqeHmLN56od7tF57i9yUvYjRRxNLEs9LnQGZqGD71dAV5QEh3Sebt1zTrZXishBMam4M2QtRssnHmifZ",
  "key29": "NAoUEc6ahubRgQ3s5775SgxCcq74jXpE8zTnMr6CQgnTabxHAL6z25bvXwGptzAkeFWTxJtdiec543sHFgnzUcx",
  "key30": "3ZuGUk1h5TESLPoKVA11FFqzaKVbC3FY9AsZBfAqT719Qx8j5iwDRHMPPFz7vTYkt42u5s4mJypiPHVug4j8Ps6B",
  "key31": "64PjMmQ1MV9kqQjVJZx1hiAd1G4shGLV9hgjDtdkTiitXfxdhvhNgevPEEFrbZQVgwaMgP4npykm4Nvto6oi9AgF",
  "key32": "QoAQaDvwBau61J7hwJEcr9tjZXVSMDVnjCKxiqPtrNYNbCLmHueZpfa5w66Gr6hnPQ5J6DvDji5ApUJJ6zeGYNe",
  "key33": "2uFde3TR1FGMuUAgXCojVHCa88xgs5gYN2LkwANjRjQHJ9A6DVNG13LZQB8YUVwN83HKoJcJmpdHb5TohTENeTgv",
  "key34": "66wQV8dYUw65Wcwk7UeQ7wn5JnRcHkGSZ4ccauUB6Hj4Hs57tFq4935zWNy6tx8CvHrg52JfX4gGEohbsLPiLHTM",
  "key35": "3SCTn7tFqSHqxAjbTzYGAxWWw9BCzEfXSsFJtFnAuevmxkvK5zAv1kns34DzDUcmNDT4mho74KnRS5ckWjN4mE8n",
  "key36": "GsvcFvtYkiabXWMpfNffHRFtd1Wq4RuQunYiM7F4NV7h6Q8atAT5ZghmTAg3juQxuCvc7xQyYbJYvAeg9M13hbX",
  "key37": "3CtwKwDuL8i3WpBWg1VepbiBCr6tLrzzRyKp7EETAfu9C8Cd8MViBVcCFsstSCacsyndxsPv2Qs6xcrYrDCAWChP",
  "key38": "3zvHEDsEGPHSuv9W29kqzxdrvy2nGTeFDkVqC4D8gLQdZxGN2icC9unHoEstZhW3QzwFJn9V7G9D4wQEBqgPLmR3",
  "key39": "2K5FnBzAKJdaWEss4nb8VhCCYNd91vx5amaykp7cVR8h1zbTHctCrcHXRXCzX5iifz5QUB4vqmTjdoyopHb66DXv",
  "key40": "3fHr6J2vAcq7KD1pmeoiXhhDvi3PeKnKYsQ8bXiu8WZQPh1zCeJCXhxebaaVqUTK6ntFdd5aYttLo8wEio9mty8o",
  "key41": "5wvxYxN2LzNdAy1beuDQWMDEf25JF7F7BzTBcWodpFSZtArfm13WSd8a6vG321DmYfAAWaWmbppzh3YSD24sH7qy",
  "key42": "k6g37KrNRMsEAeRNbg3kB9qXvYkhyhgxVZQhVfFYNabp5HEtYx6GzUDttPbRvm2m3v9kcgSTeaLuSSBaj3mBYoe",
  "key43": "582rMBcweJLa1pA8koBxeL3RNP8q5vEdB5kxz4p9ojfHuNaTMnPQvYGQtCANzZSruvoZb6K9TfQ2kZWcnGbiwSj",
  "key44": "Z4tMKCe9ir5osFdYp19s8GqnFUoVjAniRHAPsetvFmAp4iSW5JbCofXS9qihkLATN1kQkS7S2JPBV9azsegZoS3",
  "key45": "5Sa3C7SqHf9DBxdJHujq22RFMA3piKEwUeqHA53EbUemiLKmxE4163AU3rMwghZXgoqcqERPwyr9Y6V238xjsX3X",
  "key46": "2N6SMrtNhbYSHvEcZp9CwjneyjiaZ6CrthWvb7jVevtcX1PZUfYmYeMXz1XY542aLH8FXPqZPuPJUXG1T2dzkKB6",
  "key47": "72UCcyCgxq4v2kvKGoYFxvebuQhRi1EETBmsRF6hBT2BkM1g3kLKvoCiA8xjvDPGJFRFXWAWnUPma8CJD13Mc6r",
  "key48": "2b3nL373TKGbyGBPcEo5f1YLQaCqCaoSWAx6V5nJQckDnLrTpuVPXqu6zA4vRNDFsgoG9yhjxtagFGcR5sBVXuBc"
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
