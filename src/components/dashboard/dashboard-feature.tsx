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
    "5rm5q8gcHpP7HG4PTc37WLQqiTW5LLE4ALGaESW6ag9zwvLzmJizpPA7E7niJDY8nUS9xPewgbWT8A3uf7BmLSqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "232Mm4qvTcYcpTkUSAteRV6hupmxBcTV6hMWUFAMjQ8t8FxtkvEtiJRLGooPELJrNg6qFKGH2GsbshmF74JhAKVS",
  "key1": "5LzPUiuz619tQTRpYEF3Q4Xh2Ni2m1rAArNvNwwTuapdxhJJhvdV7fL2uTC4cfYw7vxNJ8LpV7upiBMacsCkgZFr",
  "key2": "3BE6BArpxtbrfhPX3xotkuBbG9pHbp5TbzZNdn8x8LLDPA79twHejv2FQV2kQePpUHi5p5QtgGTerpBCV958h1kt",
  "key3": "42ks6DdRUBXKhTgAjNYQGwnMkpNcoanDxinA2oDK3bjFVtJDm9dgZUpx3kVz1rr1S7ZwA7oaQNPcMpVaEzdp1s3q",
  "key4": "efAN6xT6tPBh4FcxKeVgKiMUQiutTtjyvxr8cmWLCDXswsoyGKiuYqits6pSwndwVVDMFd7gscPv2pYAevC8XZ7",
  "key5": "2E4nCbzk2SJAhGNttiRLMEcwVzxts5H6ojB7cwoW24CvzbNVBvcoXzvfKuZCH5dW2GV1Kxa5jRS3LZcrT4V79s9j",
  "key6": "HgQSpubJeakxqUndFXT2Db5paaNmfYEHYMyTdGBoDnfN1EH3BfKTVKrUZcXBVm1c1ykULKdocobutiuCrDrBCAR",
  "key7": "BaQy2MtxHiA6dgevSzQCXUe5bxXUV1cDk2WnZ2p71BarFopSsFQF3RyYSTWxm16MQoGqoFB4QKZRJnQEMMe4HLW",
  "key8": "5xwEUF9taXyBXEHghEwdkvZHgXH9hDArVVS1bLo3xtVreU1WfuXVNRKgYvXAkj3wN5qBF8tT68zfmnvvtJ7CsKYs",
  "key9": "4xd5d4shMDURobNrKuiYw6zgPWu3LrcA82ETuP2GwWrQQ83FoHwpEypEJUPcEZF2dEiYjyhVrvd7YvjXgDjohn6o",
  "key10": "2qNWGsEQSpVBdYq2seTps28cxkFAawC5arQseeGffY2ppyS4PLkEPX51HvpR9Sv3fjFzdKyCfLzVvdW2njFZcDB4",
  "key11": "2HrjiaUFN18JGJUJsGaBXNo7UzD8yJvjRkMB9GaXSCMdq2Tz8kXHFCQwwSGFTzvyWtNxAKxCMdBJrTJF86sfsBNE",
  "key12": "3jKCvyVyHfQgETUDk1uTrJHsgWqJhJtFWCafhdRAKVNirf14GTT4KCV2cELN4Lr5Gzn4ngyRwuDwCkfkRzW8VkMH",
  "key13": "4LbMbpjy2f5GA8SGytUzwTviud5QPeymGaQEy27EQ5GH4KnyTLUDQ6AVDymLJTaQro7Gx2Lq4fkmZrThm6ZS3msi",
  "key14": "PrA4LB4u5uYF71FeqU8azJs1NrjxcEGDceiroj1EoqwdRK4YBR7a78Wf62ezrCp1wWZrEsEXQF4T3WH8a3jom1r",
  "key15": "3uPNqhtZeMY5CmnLQcnbJAx9ei57ph8xaGZYSwTPNZ8GNAGvWs2ijgT58uNMGshZQVMZQBd5PAQjJZtQMmvWH2Vx",
  "key16": "35QtNyNboYC2ofJvejdmgeQGtvpNNGSWDDgwBBmJ6prheJUFw88cd9ypCuHWT8Aw2B3y6BG5BRLZFxp7WyF9CSBm",
  "key17": "26uF6rqBZZ3iUc8esQ5uf3DaDwzG1BkysDL23wrCUmrB2AQQUNMUiCqALPCvHJggzhp2eSthTuLR2LE8CSjEGnTE",
  "key18": "5ygVSkVc7AdhZtrG5iiHpit5voFYDfHuHzxw7iCZBc7p5Eeq1rUz3DxQhPeSJMFDWuqLdpHgbFh3YEdSFCPdickW",
  "key19": "3QFm6SV8MA6ExyUeuv85d2YCA4nY6cS81chxM4xoqGpuzYK173rxm5ZjaUVBZwtu9jDVbRpF2eUVpPhXm9P3higX",
  "key20": "4PVpq3TGhECrDZiwc7KowCtEoNzpoU4tjT134gjTmApySx2od2BCUSqfKmpJftD7BwXYdpy7ENAyfzkvcDMHaqNG",
  "key21": "5pX8dzQbjCff7cEmD8GZ1ED8DuBKFWroxbSUJdnJd3zP3TwQH8VqxfcFJZk1rPTVsYN237X1UJZZVWjLLfbtmwJt",
  "key22": "2EGTsbkUbJ9AdtLVcju2mywt7tWt9AV8r2XK5eLYy2PXRsgLNmzD2u41io1To3qvMGH8ekYcG2cjqkoeBQ1Xw11R",
  "key23": "Y2zVkBx1WPyjXi3YCY1o92jUdD6M6Uzc7ixJterxXwAAuGsJNeZuxghsxNv7WPMXdQP1GLDaBmjf6zbD3pDFHRV",
  "key24": "2kg5ZD21vhuVjAMcfzaLfgeGV6K6wU1tZGcqJFQmgUgUheC3iKmgUXaDBzkVFSBjWs1bnSu6p5Xc3EMGKM5pwdRL",
  "key25": "5DUDT2JpBxcdBMbEmroStwRdHK7oArrwEox5nZJZz6pmzEgc4ZtSs9cFDTkY8d399hqwgEPn2adQJWoc7fvBZinK",
  "key26": "XzdE7tCeZQZuHeGv9mtWr3FTkWUYioDYuTxZsbD7RM3fwDFLZPWu2eGZ1PYKry9xWznct4onLWFKsv5oLswznwe",
  "key27": "2cuBMAqFoH6cBWkMmybt49JSUG5tUsYcafnGD7yhUf32R1udCHbySd6FmhrBggonqzoKZ11uxe9LUw9Lz5houyvp",
  "key28": "jB3WZv22Ztk4JZoErjSrBBYqUXAjDHnsKMza6RNqLmBDaYudHj729Z7vFYwPLwK6iS5WqgndDLM2MswGfu8B2ac",
  "key29": "4kJVtCxUyF6cL8fVYsvsVTNDMEr5CouAi81WqKd5snGCPYkXy33E8DwJaGEgGbiSUuc1KbqtTBywxgZrTvQpRiRJ",
  "key30": "52DNUFgSrmixsZtB5LUKo8MBApEqa94u5sfDPHYtyFTFaCv5WnWHtTZfEEHqsEr3uyF5DZtADFoYKo46A5ygPEQV",
  "key31": "PpzsHc1bsXYcH7x1NSrdF2QmrADyMoGMgtHrAgVpnCY1fMZwFTgnzXHNoELrqN8EVgwV8TqPSh4uZWDmbvcLQ9n",
  "key32": "5wPsMty1N8gjq2MMPsBeqNFAY7AoScL2hpNKzTD4PcLE5Zr5vah9hxmH47QNeTQ2iw2E3QjLp6XZZzDWUS4ahfnU",
  "key33": "2Rf9GxFwauP5ZCM7DPCNfdwKC2dhwCdAcJvQNfVirtLMpU3tPuWWQ4FKxsaQtZtbhVtteYe6bm7shdKNWTtsULE5",
  "key34": "wUo6gPGkc5exyufGDgZf5hMsZLAXL8AFBFRa4HsgindXz61s2BHRv1oEB6wtoDEC2tegCg4xkpFwVmqRNKmvTHC",
  "key35": "234ji1qHGagcMnFSLfjPSQaAg1NguK3bP3nGEHXsdnHq2hDtcq4yYinNkpQVQxTT9mH6Fx8kcST94pJCRkpiaDm7",
  "key36": "5RksjkiFZBKVYgwevzyUQmzFebAF1H6JK56yjRvuusg9SfsXsjS4fvPDHEHd2degQRTCF2omdzvBdYPNUxidCgcQ",
  "key37": "431jixCjP6waJwg9eXYb2WWgu7vEJrh7EcLDcagNkCdDefs2NNM7Z54woyRjy9PbcvTdHND15xiDqBPnRhj4tNi6",
  "key38": "3jqKEgjGLjyWgxNi2PPngeNwxtAUR8Hp82KBc8QTXAsRUaPpXJneE6fSRBwJQMdGngYXQcefmJfBsFyoiPczSK5W",
  "key39": "4q3ZkWxLqMSTFAtpPYeX1oGUREG5Nf1XfapWHEVCzLoZLmpxa3WfQepmXANrBuNsnqf3XubKNESzRCYZgj6DSZ6W",
  "key40": "2EbJfttCTFmwND4qPL1YyMdMihuX9Kbb8GvDR4HjMBGayRbHPTyFuSZHDwaCN2VgNrUyWznJwCbKpXRviuQAJLhE",
  "key41": "W1een2DG2u9DdqgA4hsNvnR5r4tw4xcJgVGYiNwXN51hyowsEPFfMAccWRYeEYUyE9gunH3wmehBW8hbaMjxpqZ",
  "key42": "2mkXPmNmK6GTfBE3fnk2qEPzqpnwZyRvm9s6dvK37AdzEtzC5DfizWFn9XL9eXGY7ksdQ15XoRLXZcnx7vZsMfX3",
  "key43": "4apFs7YkitejdPnBzDdsY2tWErVMav9GHUpBppTot6Q8NHEKGj5LwmLs8CoT2QgXj3DzzQ1vy4nKbM47nQSWv1xZ",
  "key44": "4A16hFVKP6jZ9X2gK6SUycfUFPJhH8riciTqCmusi1JkCTSYfref2WfkwKbcXbPEG8aaZjMifdkTX6iPBGfPa5oS",
  "key45": "2rPNRVoaugkVCm9jhczcbymz6kQ6DWJYbqFShKFAk1HaJa4gp4EXAf8QkYPCUjkkAE9q6xyfYFpCxEu3Uu2C2qXH",
  "key46": "61YJWp89iz7rJb8vk3F8t6tcFZRhYEiSGkshkgvF9R97DCr2eDEKefvjt31PJLnckZbLdspDBZpc55BoXxKktmP3"
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
