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
    "4V6NYpRWhGds3HUPExmAEBR5hNrwB2God9i8QNiTFQnappUBqmcspMrKACE7SYqw1K7bQbBYD59ACDiK8rnegDrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dTynLUi3wLarmc3noStVsXU3rDc5daitxZbZRDtqBiUMztQmCjCEZcAecMbuUrzTqkWGgTkPGAmuGUHkuCqrLf",
  "key1": "p6miRkx72ecpofmrFVbCRcc4Vt6HQLydkdY2oemuihC46LqCiXJ6N71cgPPTj1WwDquawdECbUL6pKnyKGSJsmo",
  "key2": "4Ck2tn1GNaBEi7bNt7QGvT1HsRhCb8tYxugLci9mGDhGAoJjwYFgKtGR1CBSo4rynbEFQVnqVFubUxLX63qZ8LU7",
  "key3": "6488ew2Z8HtKGEBoAAMg2KgydeekU5AppJadbzyT5G4tTAhZGTH15cStedS1yaVwzbmCtL8FMi1tfEUcqQdmqC9z",
  "key4": "46NViGGsKFYrbq1TJeckfbZ1rmUaSduJTFPpHPkNWiUj5kLFGKYdou4rjhrZvohAVUXzeBWmNjMmnPqDdweHRq3W",
  "key5": "4wpbbGRTsprRzS1L95JnB3jg4xAwfFsiPBjDWpnvhG4PmdNdCFG1zPeHL5xAiQWhi1qo8z1thqWWPCYrSbfmCtKN",
  "key6": "4kamZKqT9YwnnTHLSBbPiUoyDxEXiaaUeCyNFCwAZS43afXcwGu6hdHz9p7gA75zu2v1BWzzUR5TjeckZfJRGf1z",
  "key7": "4m34f7Soa3khejcH4osYpgL7CH7DK2QVEACJwHakayk6wgBJ4nmb7Dc1YN5a6SewiHqWxVRzKwedgD1fBhnp1MTf",
  "key8": "5cmEjYkjnWi787wpc7a1K44F2SMNVc69AxMKkJnK5b6ags2DtVJZj916H5b3vnnGCFvSAjP5fFR7f2j29mCkJSsX",
  "key9": "2Vv1B7JLro2zzcxubxqzrjNHBxbHS6aMeBevFBZCn1iiENJ413drJ61Lxw4MYjvQber4s93nVoPzZsQioXyj9gvx",
  "key10": "5fiLEPefDMoK3CEiJinUDoTHkWn1TXSzkHEFbzqt8pnFMU1dzohswhJm23rk6v7PTzVRf6s2QUGbcdyMuhAe5orf",
  "key11": "3tAYiah4f2EgyjivwGyfQiA5LhNtDEhumXrReDoi5EqWYdMPgZyPV7BF1W4V2x4QtpCRTwqHMnRLpuNeM4WkKdeZ",
  "key12": "3ESKB4Pffv6UMRRPvLkgtmf1xtCpCRzsCpo6cYdaZ4GYcJtBcu1fz8ZBctHT95n8YWHcqPkqjM5FyCWtdxo5zrST",
  "key13": "5hrBMHYVripdSxm6BQbe5HWQGFSymtrsEYRQxKE3nFdq6ifAAxXg37Hmq7n6WJQ5UY385voMouy2VR9vdPFk38Xe",
  "key14": "3MRHASocEv8wpx5aVmAoodVxb5PtqFiqWFL6Lu9zDnXSfwzTs27LHz2r9bnMeAupHteFMWSbxYijKEUitjc5YPdX",
  "key15": "2sxzHxtcdJ8veS99PYnReepwc5ZbWnn1bdEDsv528qya4EoUCeoJoYPRcLYPvwC7pkVsiSNRo99wcQtJMXsxKEGv",
  "key16": "51VvG9gh2xJyhBnfHpHK6LQsf8bSnesj9qMp3kG7Nonk2wcDzUfdySDp3qtf8ZjGfBqNAcXUCCuZpCxbcsVXyqPf",
  "key17": "4t3RGEFmofztJo9hZQvLZPeXzx6WGdUZ9BQCAadTeBn7yjPAsFPTaX8PnTTrSZycZmZRRtMe8Z8gdbQa554jDMV3",
  "key18": "mnPiYJPTgN1RcfYktYjpet6Gqws3mg7Xo5x8pxbmZ1NxHQ58T1vUMgw3zk7Bctjd97NoxVoHHoyP4PjQpeoB4g6",
  "key19": "xpS9TjYMfnyKrYEVSyBNmH2h4CWbu3SX8EJWamrPcwxEYL7nE4DoD6ezDGkRv9VPzzowGN52Zya2zW5DBuUfgdX",
  "key20": "4kvptAwGkdk9P1LqykfVGMcu8vHApEeKRDhGng6QWP15Y8nrBpnNnUpVCcpdJKnkBHRXePAyzkXgy2w7xDjcW7Gx",
  "key21": "5xvwDedJwmhkS55oa9Brzrkpd8dGiEpy6aKaNzBjH1FeunaHinbwRGiU8sVYyU1WwmEuMzbhyNKme4wT33iZHdpv",
  "key22": "4G1eCkVbi56TdyRMdp2Eg85YRR2Kmea84E2joPPw93ZqoUcUvHKPR3LnPgMMQfCk2dg26MvjvKc3m7iPaYXRui9L",
  "key23": "aMbkHBGggoMhE19VMgMzUnRABp6UXW3BgbWkzFxxJFdVzCBNE8HiWrCuvBhmMADmCZQkwND7Bp7xdMpZeTSucy5",
  "key24": "3fW7hCPjVVezKkG9385VdAjfc2nFrJcyZ7s9jF2wRWkBoEaecTLoHLp2sFzf1g1iJyR4DrUS9osMv1psuUkPjMzS",
  "key25": "5reU1T5SthqKKpfi1a7jTDVFABEEYoUkp9nzCCUnjoY7ZLriNddQmVGJBtHvGxYS1oQXHibDTtxUNcEJsmrZVXXA",
  "key26": "64k5aeLxkeLzaQfmKmCGEMNcyFskQYod4jr1914oBojsvBhxixzbLRDyJZyFPF6dCBNMBPTPb2JbFerCB9Tq4qX1",
  "key27": "4boZpusUPWdtUPToSQwWL5wm2iA5kXGqK2G71pq5f9B9MHD6HE9UEk2cFeF7p8KajppJ1EoZj2u5B2LZHL41K2uw",
  "key28": "3jxrZd5x47eVLTFosmoQeMzj9mo48XmzVd9oamhvvap3aU1PmM8qCaN6PxehMvWjkwWbsRBq7Xc9GZqRvXarg9aE",
  "key29": "5x6j1roBXSitkktMvjJyTEn6NizSkt1BYeCZocVGb4sM4sViiudjTWhxheQh7yaDen1NGJ5FS1TwbkhqNVvuYajf",
  "key30": "2NVSbR6AkwJNB2TQrB4pCGAriGjNgiybiP2mjN5uAXdR6mLXtqqXRVJfGzfFJfUEJXerRxTpqj4vPWqS8KJsnzMh",
  "key31": "cjfUAQ6hH8f5ydFGADsc3dSpTrDbXnWK48djZKkQCaCCFMmdes2goFXBrZ8kkAkrLDhsAppCb9F4dDLoDXGq8yq",
  "key32": "2teUTppzSxeSsYhxpjZmfr7TrM99ZqRCRQgBdyTGWDuwpsQBzTcCxXDg1hmrHGH9BLFmZY816TWSiiXvfhexzWTZ",
  "key33": "zTu9JAnuVFUE5CrNBuufTHy7A6x16pbNBckhQvAjvfZqwnRhx5A8UXEPp4ZQVsZxnToxfLmDrhXkTaJPj5DHcM8",
  "key34": "esPGX66uLD4aDLMPb8ijVgEcUqkr91D277y1a5XjqdATU7DWfhAjEWHzvDbvCKWrrqon4yBEK65coE9DS9zdF8t",
  "key35": "4YwhTCECqhvT2Ketoxw8hu7aEa1ETWsPvb4DfzJ1JUdSW88tAN6ra9WUHoZuDDY7khVbggg3sGoJFK6VwqTRzAo3",
  "key36": "YzGwifoiPN7Wh6gnC2KLdjekq67uUN27h59XYoD1a9VgYpPQpp1GY8thjHKAhXrh3tPY83djNZwtFxHMx18dhTu",
  "key37": "3v1XruCMTLEVdnJ1rBp6yd6N7YyhPt169CMhtYR99hnWikJ8HYwm4CxgRTxwZSPrdU8qc9fzpeNUZkpytfrovpAY",
  "key38": "47CGwcTDu9xSzm8vaAz8AWGDERhy4HKRK2x4boSUJcN4wHkQ6hKaX1MSx6iR2RF3QLVUPRbiG2MH3jicfaKxgR2q",
  "key39": "43TnwS8Gthv2jCasVxuxaM1fYobw5hdcyjG6dpjYzvouF69kWfmwjdgxfr2sArjh5MBjbh1cf9dXtp6Drrri4G5t",
  "key40": "267XZjfVBc5jt618jn7GKVZ5TS6CCgJvXSoAZaV7gn8EsgVfgySP3KN8BqNiyyfHB6vvjAwhCvrby7pdtWrRFgBC",
  "key41": "DZoqWYn9V7So3KixKhx917cBoXAAv3nw9Qu8PCfJ126JVps7niyfSfWjBEcXVNSJwcggNBourRRZbkqpo9aQmtk",
  "key42": "5xq51LBQtVCbc6uRg4gQWh4ie38FBD8BwSXmQhLaQxR8YN7Df26Aym9ou3y1CajLZuGFN93QtKhdBVKugeewwXEv",
  "key43": "4DAnuK8Y2d9tBsH1PX4n65wiE5Regh4KVCG8X8AucnNwwGqoCjV2mvMt5uU7LA4mnjh9sYt33LeTx7AS1frfRfJJ",
  "key44": "5Bm3BTf8qci1vEXCCgaCzr3fyzMw9RZtPXhCSZ8sycELTZzBSnJHU2FLVRpXaWDZmbKtofbeiByCDP52ov5WA1Lv",
  "key45": "2NUJSinCSoASNdNRYf5RA263EGg8iDT18EV4g12RUn727KfFHN7QGqreixSpys1wqkb7P7nHQg9vtkbkutDC7fHY",
  "key46": "51erZ5bXZvgwEyBALcBmSyHW1gju49Cnw9hFEn2GqMmQave12BhDyCv6iz9m3HGAyYTG227iJiUKYXPDvy1g2fUY",
  "key47": "5TcNrRa4RZWyarAQQEs3jYQjtxdueazCmahiGKHW3gDV5ati1TmrHp9hXcMrNaWt4MyRnP9m2ZUzM3dxeaHWVaD7"
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
