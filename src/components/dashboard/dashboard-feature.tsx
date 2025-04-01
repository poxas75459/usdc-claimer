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
    "cjATQYtDWS8YCDoJ2Fx9sDU8xuThnxyBc4MT4Xwm925xYn8d6d5HFwcfoX2cnQ7vhcDzwo4d6iZ4mJ2ESJLtuv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6kLaDE3xQDe623oi39Uf6jRjR7BQjtSWQEi9YLWuacFqFb4bf5pPVLxshg5R6bvvjtsFVvUpUGFQbmKbk1VDHS2",
  "key1": "2ahtzpRhFwkFGqEuu3ufNKaVtyjpKEfemiT2d5yCdKij1xeE3Kbf2kBS68EwsfjT4PqfAxAVvKxpz8HGFE3ooKhQ",
  "key2": "23VPrVEdGfaigpQkbHmhZsDUjiAcgx6Fixktsozv95PX6bCiihP1UxkRG8Dt5UYKytvhWtcGKsD6YkkhScq2ot4v",
  "key3": "2mDnq7fwHhjuSzfbjWzckn6MyHo6D7UWwfNPT9hcruXGftweA5h4WbnRacdDUc2DeM43hDN1kwqZ6Cy54vjYCTT3",
  "key4": "4YMg4XixD3sp3rxRdiiMDa3f41mXaRYqPr9SUbaw3BWujkLiLd7w77oTWUvNQLhisrcujubh2jyVnSxUU4hJAEmg",
  "key5": "3Lg5xsYHUhm1YM2MEJ5XLj1Bw8satF12TVthcy9yd2Jwa1Kjn8ht2YwdtvvtBpyL35cHAmUMmTQrS7YbnUUHhmDy",
  "key6": "9nJshaZx4fxcJg6q9sdq4xLFTkZuMUe2BUmCGBAXXJZxgSNzgXY8f5QP1JqdV98HcmCmAmfQBk2RRCJ3zdfHnhs",
  "key7": "Rxet9UAm3HYwYirxDSiwp8jFj5TqTWHhXJb7fwSm4b7c5gmQo8QFMq4LVVoHBNiCp7w8HrVh98xSzvDFMxHKTGa",
  "key8": "5bVhGe5dyCNyRoQoBaGwe2ogvjG8xwvuafnKJvvmC4KGzjqda3KdNuUiM9yvPbxh9uvdHRkZkGxAZtu9yysPVv1Z",
  "key9": "cGRmz2iA6cKhcdsqMCmNuvJpFywt7o7349m7T5DmxAjtaMEWGdXCveEyE1HjP61gMpHvJSGg11n488AbXyDXosy",
  "key10": "3Kz6kuBXxjh39pwjErwKedycfYvX2zJKdF6EW8kSH4wfUWVbTMr6smAFpFwzPZVPugybPHrNHjAVX96nwWbY9RRN",
  "key11": "3Zcb8kjY962PnAiTg7VCe9ipkh8uMwnpZV55L6g4LTpv6C36D7hHzS2asJYpfDjewoy5aiYWvbr8e7iCi6pkobpa",
  "key12": "3bY2k5xmwCvSTRQqyuYmSPTqDhSZedTwu8wBiyF1RhdEtbZgkM38mUfm2PqK5SKNzj37wDR5WVsjek2WpnBkC2XC",
  "key13": "5hCY3kf8sQSbWh86rBCJjyoUYZDs5cghzhgHAWa9P5YP37hGyZbcGVMjzP48xZKPcYW4UYz9SBktMU1TY3wEL6Zw",
  "key14": "sokgD5ikx5Xm3dMpPTemvfTPdgxiAPDvtqExDMSMyd7DZbts6jr5EyhvCRaUriZePPc7wQgy5ePV4AiQreDenAr",
  "key15": "MARempcHyQEd9mTuCdoW44VwMNouLRiQzxcuGLDAZEeYiHPKdNQjed53XNkXyuWrGNask1ZgUHohVtTq1UuScPr",
  "key16": "5AC5BzKQxY8ceZpk6ymPLP9MGtUMNhCfgGewarrjSRPezLTR3uWCiaCQogugS4s7CVzAxw8DTdAwvzoxba64Xxih",
  "key17": "4aau8BAtcg1dBmTFNGrgMdxRv8yDCVu8zjDTh7tEpTGnYGak5C3LN4zTfdxE4YgRqQX7N16YD7ScaunGzSNMoUoo",
  "key18": "3BbzSbKh1CAtNkhnCwVoQxxPk9J34Wa1QnB9o2XZS1Wvu9NCkMoo5reoGJxohKxCt8AHguHteUNygvp3JkHnXydQ",
  "key19": "3qmZVabChttREgcz4ypwwPr1xVLYZRSXn1HDMxmX6u7TXTXiwPVrfnUWMZFzVSCS4iCr9mkxFZGbZ8savBBuqMpV",
  "key20": "LmWjBp6HjU3uuVRBwohBQhcZWAhLquKo2tZsjiaqSciZ8d681bXJoJDrCj1i3SfrMv6UpDsF5ZWsE3jfGwtCQrH",
  "key21": "UYuzB9ethLSMTQnEF73NGBWRC9YJECfRGHHeowbwbJTVgqWHcuK8mY3Nwikh787rSvFtKofnJBSHSCTPfrcNf7H",
  "key22": "41MYH99zY7XHYrEnqWzHtpQKsBWhmNXzEvh1MnmaaRPAiiowGCANFFGzCYcMGsGAD5HbfmbkeN8LwQJ6EACfEM6r",
  "key23": "2NBXL1LRHeDFy46amv92as3sqefGrCE3J3zDxNXVQXnyDjfwcjE6zd8pHFKrhxsHhQaLhaeG8g3g7HtesqdxjTHD",
  "key24": "5FbZhuBet8ZdpGxpK6XahL4B8kbCtpKdjV3nBWe1pbXhGNsL261QMy9jCd117Br4UCQ3WcSG7T4vMcS24dD9obGz",
  "key25": "27n5KMpmuC3s8fuM8T1aJNASttboEC8mTS9hT3JnJB1iw5ugqLP7YTKQbssPzuTWURoP75WPP1TA2dSTYEwXEqoU",
  "key26": "4Mx5zGmVRSTfmY2TkGMJCRc8PaGkcYV4aheGfFBYrky6KUkuxaWphCk61hGYrPukTEuEid47QXTiWQSe3sSFK7KE",
  "key27": "3eVARqkTwniLsNTXiQFpHnYbX6NcZSfU3vDNUueRyScr7N77pSfEn4VcPBYiR54a1ft4k32NdwWsTgrHPawkJ66d",
  "key28": "2TEtfmQE8nTDd8eM5F3HB9nLmyX5DuqiZJnNqq1SoodPe76A36LYsiL5XDGGDuBkHrijPAamD1ZmevuoMQfLpBqW",
  "key29": "53phefdG9f3vUnqpxD2vP2gwqAfUUuBm4mx38kfPwZfLewtfQg4JrBUwDL2bwz5oxqbrcBJuADXvY3zM5uMJX1NC",
  "key30": "29u5n8uvxg8VBHXSk4z8W4qsHKVPHRxT8aMT3KU8rDuA5WcFvASb3fQJxaZy5n7BwGfE5FjTYwj3GEb8bJLK4s8p",
  "key31": "J6SpMgvoNRiZ7uN1FZK7wGDXyGug624DFwTz3NLz7kFBXXBTQfXvRcgsbsF8z6s4o84ubjuwdU5Vitz3X9aVemM",
  "key32": "23WncLgA69U7vMJH5Wm3L54cEm8EKbmkSDJHrZVQDXbyHw7YUMpB7ipCWQZqCSJirrjpjVBb4S2KqPu9FWFNJRHB",
  "key33": "657pQqygzuDxYni1ZHwocbDFhofj57x6jnzjS2ZKvpJdz3cTnNrWALG4K846eVnSKVGZKStp4dmEE8qzSR9WMLX",
  "key34": "3U1aY6jKt9kwZiVh5goTVFMDP3XKPiTMgCnZnmc2m4xKivtwj5rkam5C8uG2WXjHQvmxx4GSgRPiSPgLeuG3JayB",
  "key35": "2Nfm7JAeh46ny8TzHm2yaqgvLi58NzNdzHxpRkyV4PijcaRuEGLqr4dyXkrDzd91VrKEPBckb2fb93A2SjLRBMFy",
  "key36": "36tFMnsuMmGei9DmjpapQtRXhACCMJmDcSnzHn5tQqCibUP3DC8gArPX1UdkAXs92XgHFYaFnxoVptyw7z5Prvqf",
  "key37": "3SBjKf5bHxHAg9SWZti5nFme54qD2D8R7mTw7PaA5GPrf4MU1DfE536uh61dbrga8pxpEiZwQcxDYA7gbmohH5xB",
  "key38": "4PyoRjyyKuX5FSYiVEyzV1WwthmSzbxUKPUpuJ7n55TFihbLZ8LWQywmoGTW9kTYJbFYxVGdmMzpsUPSvgTPozig",
  "key39": "43zuxHgcPPwJAx9CD4jUgbW4hx4BFpPApY4V44nca7c6JwxfPVtBty8iNsEmxgY91XAFUf3GLWr63vTY1udDfLom",
  "key40": "4Yp5T9X2dVSJenMcF2CUdsggbKqQF5t1T7cGsqG4nhiAQfAfLixFYfDzkdkZ2qWGi1gSADSYEhTMrDasWXytVykQ",
  "key41": "rqG1JA4dsJ2wJbcrHrfYudBggKEZTjnvg3fDXU8Su8kA3KzjEXDArTc4h5LM8vKgvkyLBJfjTEAsTbaxsBeaX99",
  "key42": "233LzNZW56PRX3pMD34ZjFYoetAaLPTPwFTMZe4fddXmmrYrMvY2Z2PUwkpVi9k6nfivCrwpxmoB2fX3QDr4dXg1",
  "key43": "wqdPPS8YNxrb7D2JirFNEQsvtqcLcnZXBb7QUC2fhN8kArp8dS813D5DDaKfApYbmYqMHMuPttDFR2rcwwZyuBt",
  "key44": "2Hi239r4icsAyQ5Yc5w2ZnAqfbipkbms1RXgssrWczbPA2evzdw8vnrYp8rtJutpkF761uzmPDkcWKgts15jtDmT",
  "key45": "3o6fV2UVFjrea3hBitmHmh7FCmkxFSCbtqGGoUaCGUkEcuZKbNYaLzzVH2XsSw4tKQqv5uggfpb8XMG2oR6zh6C7",
  "key46": "WUV1aXvk5WhAg4DhdyU1hw6YZgHrs8w2qW42Tcjx9PAmSgiwkxLg4hHnj9NLFhAC1AFcrSYFtDZ6L8g6BazNVrB",
  "key47": "3M6mvJyGnfeQSxkDxxnF8JiRmxyF1SMeCzMs3YPeLavpdFNTzxKJvaNJVE2MSEWSMxXz2VBDozMofiFceH9Wey7q"
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
