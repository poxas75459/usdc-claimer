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
    "WSdyAQqEZdCVdARZuP3RfQjQRBgHQRn7GNiJ1Trx9aPVcAfGU9ANbYprqgQjn5RiHXa2ffddPxptqwy4L6Mpsig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54UuuHm71bj1EJwkrjPD1eDhPYZXoUqYVpHE4TQsvAsJtYivCanuZJgm5kqA3LxeqiCEaaqiPrhZGuLd26dK2UPQ",
  "key1": "5yQcJc8JuVRoLKeSKFiznP4wqVhAbY6SXqhuLpW23HLCfVzcddLSnuvEe27Lx3Uy5NgjhVoRZbUxp1kQnJTtExAm",
  "key2": "43CcYFVWZqQ9vZdWMs6SxeJzF1SPqQUbj35ZyrP8NSvNF5H55hHugsEetxDsHaebDvSPQLE3ZDtHzpmiandjEBck",
  "key3": "533vHh5bDyWcgJvDSBZXCKGSF439SWSYT2NxayfLCTWnVzToHpUn4Bzju2ytWdhztHNuM31J1kDbmqrxhFCfus1Z",
  "key4": "3uEb166abaLumSpXjzp9wbwNjYJEdMcLLTADjDRgah2EQFsRyWiGQmxtQ1J3kgKtFn2jhn7iEW2LGwz3H1tKwb5v",
  "key5": "33KgrwR3MwouXRMgV5FRq2XbU8ymEuSFmcNyCHX28JSqG1rYLvGn6SdTYTj5pwKGA3fcBiCuM9so9EwuPqNK8Evz",
  "key6": "2GzsTeff7CiWdMjH9AHqqeyNVxsKDMr8T6PwfnscQYusrRq2ebd4SEsAXhpS9XPnRunRJA3GVa8caN29JBicJkfD",
  "key7": "4rY6FahovQoJcAR5BPXjv6empeCpC4tgcyjTTcRmBZLbyY6MfCDKQCr7VhLpzaeutwqQuzs8VX4H4EEcywMukT2U",
  "key8": "5a7LwmcujQDGsyev4XqW69kc8Vcf1b3ovqaedYrRBUq8RJcyCmSBMkxvG4xRVBRqhpL675oGzjDwgxfuuojtrpto",
  "key9": "4qbs3THtgDCUqy99gTqNhE61EGKfWdQYaSBSB6a5QCEGkLxgfSLd1NqmWqnQiWQ2nNMWPvJwMYTryicVzrZFXdQH",
  "key10": "5mtpAsbDtihAFiGcTRTYEfuecQ5yo5BTH5PFqprqrGi6Rt3iNMBGCRpobv1Wm3mCdrAcuMyeLUVFPBiE72Lco8e5",
  "key11": "59gNKRR28fWNx8xGsfzM5B6gEK5MU836GDQHPDtmQC84JB7vfs2NxJz9KMG1a3zJ7iph6DgLTorCA3jDPfAb5yKr",
  "key12": "EexV1Nt37jwd1P3uKZBoVp2DuMyUybk9ZC3yNdbHJS73d887PqAYXhE5Kq8vHUL7LQ7i72EoM9AMNp2Meu9dFny",
  "key13": "3DHbZCu1RJPrRnG37z2KbdTEovXdSa4fcCziQJt7tJ7Kybphc5RKkSE32sk84eAss8E36vSnxsW5sGeJo6jCHp2X",
  "key14": "2aDiDcK1oeqTaZobTNhf44qdtAvfPnPjjmfWtu2bL8MXuXVtpwWpH9HVBFRTxCdJnRVSMc9LL4cmDJbrqWpCAY4Q",
  "key15": "u9BLestN1vg6ReKrJZF87d97XfViEgcWUnkyua52adYgDwNn9QjnZqVX4MM2THKEzxJ4TEaXFfzBaZhiDjeDyZ3",
  "key16": "36nnHpxmLjcA4AweesfxY3WPGh67Bk4Ho5N7PsxL9LxSxiZKnG1FvAUW19rFhdMihdjNmZYGcoyr31apLhXQEYjS",
  "key17": "ZpHwU7XNt519x7VAqaAnY79syHrzr79Hkhff7uFykyRcSfYGYBxJsmyKpe46jJUv5YjqqaEvuNMCkL8VcP4EwaM",
  "key18": "TAMxMy927NAr9scNsBHPZmT8MUgwxFPGnsB6kFjsMmiTvx7LMfkggQfUknixcLMLSACXYeYc8h5tcaNwVZ8pACu",
  "key19": "5BzafZ6KGr2phEeR44PsiYbkMyWfzdi2cmw6Wu3sA2kGwRphRZXk8CBKMvZjTc8WZ6PF99ShtNjF4arkxao5KJPE",
  "key20": "gBbSHZmMgSHzGEsqGu9vjvR6LxXWPr7iK8UQwLFjw1M9TRgfjkB7gxMcMC9KkenV3ivcfipKQYfJ1tNzHzJARyn",
  "key21": "4UHuFX73XLTX6PcLXseBzwJPZPtXrtoX7cVhf4CPWegr8v8mnYB2cbeQRNkCicQKwjYdigxbSjcVDtMWfNeyb63k",
  "key22": "3TqN6JZDfHjjaRBp8x7oj2nw2F7QHe4HhZ8NA2wmHdQoUgVe7owKHB7GwE1MRHHqLGcPutw2twmvMztX5Y7Q3AmX",
  "key23": "ugonrTfYooWagpBcA8A9LYaj9SRMN9fQcwVZdP6XmVhNS9U5EYsTVCxUXt4PjJtrNyaF9kzYiP1GAeHiUE4Xb9q",
  "key24": "34WtfFXYZzRdAZTykvUZuc978XAQDXrhyUQW2XCM8h2Ha8NM7hANTJYmezS6xH4L6qN16ns4Cr5sHkZrxb5Loy5h",
  "key25": "3861hLRXn18Mnsr7FzzVuys4tHg4iC5meUKhFiXE4seCnVy4f33WTCUe7YGKJK4dLiedmJzng9LUnmykvHudmPBn",
  "key26": "4FPBx1eStcbkQYKyFxYh5BBPEVxUR9Zj2WX6QtHKEnxbAc6pfBZTwwHNHMfQmTFEmWRYnvstfdvb8ERdXwxDS8fR",
  "key27": "Qz2ySPq1e7MhAKPR1gc2i9HiUTBzodvsGtnHeoBAjBe1kQhAvrtpKRRGx8fxaQgndUT3CifDEYxvufBQH2TLUKa",
  "key28": "3nFLDXLd8QWR9EGbursi1CW8x1beMes39sNPbkcw27XUq7YAC76pQnndEZjwuzvAiYxmJmp4KCKdgiePUGf1H3qQ",
  "key29": "52v6Abt5qGSShk9qbMJMACaqmwU8HJtj43rqRS45BpqmcfNwbN6EFNdsJfZA1DX2edFCosLonZygyFk82Wuc5j6X",
  "key30": "3XZqeRMHFQ1RJHhvS8xouYc9kpMzkpNd41mW2QeY19j71TUya4bCN3R84rE5LRhJiyUALy2iwHMfdNa14pkcR8b",
  "key31": "RCt6z9f3NFhKYdcCkByG3nJsJPXkthwb7LtCLm3hFhgPWFWsv2akQ25Bzw3m3ah3kow5tDroA21JL9qRKT6kdgh",
  "key32": "3xf1Eeyeqsza4NAY16BrdoW7GsVt2pkvWN965bcUerWCAoYeWZm1rzvt3mBayXNkxsgf6soeorfouQHCQ78wTQXF",
  "key33": "4YrtjqGAxC5E6vbnjYP9x1cWV36EBbKpkFtzHqh6hZpqrcMdNbPnQRKXPDU7nGpay68RUoeAAuPvSQCThswXLFXJ",
  "key34": "3W87czZ2CUt28WmD8WyN9ojoe32pjqtrQAQG2QgTdTvZzL9HjbFTvdi4Tsmn1mLTSvSoWHmo5mPTSnbgqnJXSUKA",
  "key35": "2qkTjkn4yyCXhQg8d5e8UG8ZEYaLpcHbGTd2rRD7XonjkpZpiYqRrHv7ndAM1vnk3yodp5kqJbRDBskUeeDGmdXH",
  "key36": "23fDvf7EtF5cNkTL7zhfQUmfw7qFPdAFoVos7LDrHSuS5Pi1v6NZ5Ng8DTH7don459DxrCeRnZjzmqKJNFBzAGWf",
  "key37": "4yRtShewMfNr3VUDPxTrUeDVHZ2qY4ZedMqhtg74NEXegfYKeMkLVKdHBvdaTRtXZ8i7rBSYX16ZAwrn4GgasawV",
  "key38": "46aAtbRbt6KVxb2ZQpXbNBvjSPxximZTH9s5Prhv52gH9pZ7yn6ZrgiNnNUWgoqUT6baXgew1VmEWF4EbEVZTj2w",
  "key39": "46oT9VP4gFJFAEEaCCatGah5uLwcVivrpmCC1PdzYs3gHd2ugFPuLyHjDWf5q4BaJTiAJBqT8NMYNiNMHJTrqyXs",
  "key40": "4agZxnsMn2zkaDGissseTx74zVeYjRb6ycQwUdKT6PKmKnmrn2wgALxt5WWNTd1WRDVcSZDksiyyM1hrPAyRnrjg",
  "key41": "3wb48PWB9iJnaiAaDwKswQ1TKKVNoH1aE39eyGHuPuYNK4CnvkoPWY3HbGaadbRqd5u4wEqMfZZqd9W5JLutmWXZ",
  "key42": "4vxYaTS1PzQxyJRbEiL1UqP7YHwV5L24aUcKRpyqQnN25XyDJGrF2hP2PPh9WUFCf2k41YsMQc2mvtGRWnsbUTUE",
  "key43": "2MvqhHMGRhv6C7p71DJN9vdvqncXreAkJUFURKy7XtUKEiXfhx6xdCZNDN36FA7YAxZ4SoSzrRpCh3ZtyuMovABV",
  "key44": "5ywjXg6vnEjfaCD3kCYrWGP2ZdKWULTD7wA6Z8vscZbpY1STkv9Y7z99YSrNyMzs5KrfUeiXtdVFDgGsoFSEo6xh",
  "key45": "26KCX2MjHK83b7xJP4hVRU32gretsESHLnpay6xR5Zb7VjG6XitsKRwZsEnHcfcmm9gzYboiM9YufdHp92ieGVN4",
  "key46": "2MHf94RZdxMiXY1TTFUpdu7Xgw7BPntAS1q7zz8rrinyt8pGwUX4ynPsCYzYV1tYRQ6jQsbkVwbMHxKnpd3x4zqw",
  "key47": "4Fj6podJEiFzCgnSZA2svch94UZgj9WVw2vuoGigmbBsNjDwcZ3NrGhQ9Usg3GYqDovTWhQvuapRVvvyHvPTrUA7",
  "key48": "2MPkxqeE7eP2tCCBr3un6gkubEsMen2CWX2KcPaLt18jq4Uz6sHKpGmgVb7ZG138RvwF5Y5K3YWnuvehdaW692dA",
  "key49": "5zcr8EAuydvpxjNLCGDzn9BHh3XqWWTCYhaSQNk2DSHFgbA4mtViq9fCXCf9gYzhJ59MAkBYCU9Np4Z4oV1GnsuQ"
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
