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
    "5EqLxfFgzcf2zRMMbrBzpkDQkcMjiyT5bWJ2zmXhLzPRZEy8zXaU7FGqDtBJPJ5QbpEaTHzmULoan2wn6m3e4hb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57h6bEN631kf4p9HYvuXez3teRKndTjHAbZm5BGWAtb1GknSSts5EmxLWesx1WHsyhsA144nfYJkph3hp1hKaZSg",
  "key1": "55moPkn3joZbSzveDKqQMnhoyscQBPCqdD6wKAu8ZDhUELLEE8GYuktofLfGXKw7H35kQJoqELhFaRv1CY1WqhGV",
  "key2": "3N2X3KdFEHVapvAxT1uk7EqFH5AyrYgESaQ3ycvXcFXqYKT9Q3iNhdLGpez2G37YvcHB39AGLda77LsfR9qKppRy",
  "key3": "5LEqUzZyf93vyqs7UicXK3zqM2EB12aSFvBLVtaeRk9eWKVknV9K75bYbNC4txyVEKKpEgYTVDa5QPKn4298NSBd",
  "key4": "2hRNer3gpjhy4YZvfJZuTcLQBpjXuwuuLyMbc2gF7vTTqdD2moVrwBMNNA3S88QboHnMNicYWBV8Es4qNyFejLr1",
  "key5": "21wLMLLgBqwGESmGQUuw7smHzEzvZXVuCKuBEt8EpNcwKuFpqE2eP1KKX4Jq9pH1hYBoe8esgMWMPv2DjZjGRt29",
  "key6": "3y538uut8Bc5TWqqRDZyjRuAMk76jL1AywiHFQsP3bJSFpHKCkN2WKPbXhsqdBxDt1oncjQbAULpboZ3N8QCMsyb",
  "key7": "5jrpEb9L8gQ4DtYaTXuaKANiSsc7yWZo1DAqXnLCTfYKjhtDQJEgfvPNFzMBP4rCg723GMrA6BvprAt33GnQgcMn",
  "key8": "4VbyRET37WxcpCMA2hACN62tizJna8QbSYC6QfrWvAxAUzhz9nfS962SJXTEBxtcoFgXz57VHbvtfCesTgoSQV5h",
  "key9": "3hdQqR36QeHbGdFzPL1b4wYX5XHrG3McvJeR5w2DN6i5oMnGYYCnGyy2C51iWfXpjchAdFAKsmHXDTGKjfWqsmGW",
  "key10": "z9hvxEb1r42pMyB9eLCXXn3NgVXBDjhBZT1XTLTUYQAsF8QrZNW7x3zz8nwL4GQqk2p87GYduvpZ9yjemsPdnbq",
  "key11": "3smMmBGJueZRTWW5X2zyajwJcUkPGsmkm11wP2n6QUQFsBjfiEX2RzSn8VE2eWnc5z61kvzqEWvCzkzM6tspKRAX",
  "key12": "5WfK1xJuTHwL4zbKdXWoKehZqLe7ro9pEgki5EvuwnQLgavEaMLZRk1sSCW5ksQVz7TXhELf4CYbZBX4EzmYostH",
  "key13": "4qPbUwwouoJQew1LytCbppk5CwjQ8AigMcZkEJgeVe9dcCBPtznrEK638vs1Xn39RSDw67woGZ26HSS3G5uZeSnw",
  "key14": "5SwNCB6dSzkvkWrrXoJXw3pVFxZG3AuLjCPr9GoSDwNEDFvgcte1D2hK4ZE6ZnwMaRaMBuZLfUWYiM1Zr52HX9vM",
  "key15": "2fW12fjKWuBrzdb11sGbyDuRBhwHBg43RJvXfpP8zpafHAuNfcosZa56WZ3mQ1zHB2Xg9JQtipQ3onQcpJd4uJqc",
  "key16": "u9tcShgyBdDRVZxUZx9fU3e8kqCY3BXXZRbecDTragdf8EvMAnUGXQ5GBkCZaTcqTBn8eDKqVx8kmFJrRHiupmx",
  "key17": "5zaYJzn2gAi1KoJohkHqGJLEBUk9BCT8YMGTAhf8XdvCmqPg31q856Qo6guS12Lfe4QP1mi4esRqFwdzQFDiz3C1",
  "key18": "2U9KFdLNvq5kVK25S3CoPAYJ7uyJEXhWFc1ZKxcqyRLESfV6XN9pFzj7nZjDzgboSArTxnYj7UEFZpqbqVr14gax",
  "key19": "5q3SZ8hVTngYwe6VeYtC5jGq8qAYo5gC1ShL5oWuUQxL6X6oDXUCDxJEE6BScChZ97a2DxNWiAmitdFQKZC8sUKz",
  "key20": "4M4U23AU9LnJvinqKbK1psikjaGscFEovYZrwhuGNWeQRCg4EkeC1LenmYLdXGYYboBUzE8yni2mfGFZ9Jv5U8Zw",
  "key21": "4TxKJBSmYpj8Hv8KbAkkEskSGaXUbn2rrjV2GyEhNVkXMevDVVdDLxiW5GvjLj1mKGmXavZ5zDKTuDFuf8tLGNE2",
  "key22": "995KXYo1MJw5TVBiCtKUHURRzftC9uC214sKt7PwsfEaCztd5FRysv4QCnNhSshoD8rQNEoZqDpbWrh7AJWW3oo",
  "key23": "4wbAYMZFPTwrH19pWB7mcGFX296PDhkQ4fCHCohTKuy2S5vPio9AoCJzqGr2CTDjfTpWiXxDAc8NXrfmdKrL79nm",
  "key24": "44qJsEvRBux2FvnNLAUtMdGTrqX1hQLaKidEyT9RfZRHAUGBGwWr25XnuTrmgMFriZfnL7kN2BauyZ1tUNnxNYrL",
  "key25": "hKYhpqFd2nRi3QZ4rV9jA7dyPsBgzQaUBQziDyDksib4nJMzpTHa2cVNhugTmQzfexp8XE2CPm4TsxVYBLRFXAp",
  "key26": "3MCuD7wSDtjsde1JHGUwjFRJwSmRiaYDHANA3bmJH69taLBp4T5s5rP2Cdya4h3yvZ5Fs9pLQg1dKjn7hcQ6cKGL",
  "key27": "5eL4sNMgBmRrozfrFdTRhVz6TG1UGJMthZHNVFbcQEP2EAiGx52wPkwu4X3NNrCg2iQDswwcDAgA8mCoyyR7qXtY",
  "key28": "2JMsf54qTZixrF9cG9guYJrCdbjuup8B2VhbTdW5SoKFkRc5Kvh4tJxj74H7Kcz6ry1xoKzFj2Dnr23Du9ekEzdm",
  "key29": "22x2eqFrNQ8LWCQUVcNgA7F28NzYh9d1b9YsvvnkV6qzwy93HNkUbjAghwis4hMxCyxqZKALgK3vXKM7FbgaL6zQ",
  "key30": "5KFgoqgYeNzmarmyiaVCHPD6ji4Hmt1Qjd2BUTwtCUAFDZZ7fTUJAqkzG9EKwDSYeWYX9zaCyCb2VL3WWyfyXPnh",
  "key31": "3hW8A8GnmMVi4Utej8sXGUb5EJb9xXzQpusQ1cpnnXCW7Vgd517Sx4c4wUG7cZqLmxY9t7a3TsB6JXru3yFGQtFw",
  "key32": "4Mv3NQ6nSZAewMp3unBVpR4jwx88BNvDBFPrGF39ZXMhhqrb46R6FSWG2aD5o8CEZty6mERhQoi1gPAVTDrFyTxU",
  "key33": "3v19tU6zCMooA4oH7XzpqJMDhC1iwDmAj2vZza89otWA47WX5siCfKoLvc4QY8SCr485kaWZ1cQHB76Wzu6zmG3f",
  "key34": "5VZVL9DiVLYMj34fCUm2gzqB2rCvykfGn875qnkPmjTdVZTR2rVU624yjoSN7PYHmqU3FtsTDfvGoVEHNEGH3rSH",
  "key35": "2EsefsLRFxgGLAQqWLBoUVZ1mC95x5RW2fYUnySZij6g5zMiiinavjYaDmZRnM1YE6Gzm6PxAn1bVXLXbS4gePw3",
  "key36": "5qPR5hDMwrmQNfiHvSdg8HKJpctkVVwvEEKipfNCwRv9a4VW8fQiDtSpcbFNvrcnyrtpq3KdZ1ECt6fSpQFHmJDx",
  "key37": "4AwyEPU9Az72Dd6wu6cuLf6Tx1kLdG4J8hvNqtGh22FdnMDwnJubUpbyzrxF46GFjfDchfMCeKtaNspgG8q2XdV6",
  "key38": "4NiaY24CzzwNDpBPoDhhs7PESzHskTLR7TM4BCbMnXguPhaJgBbWkJLs25SjUSWH16RWVZoXKAQYXstvB2Lz3RX3",
  "key39": "2FqR8xFp2cR7NfRPbD8NWuoSVYixzz6hDKcorNrJ8Y1t1PaX5umQBvtUqffCLBjCn6fqUaV7gsDUst4HdbJZz7Qv",
  "key40": "2sat7J9xe1S5iWjaeFTsG5nzmPmfAJjzz1YSPpseMSeXVt79vtgbNVjRmhAXgTkCEKqH89yDwKTQ3weaU36hVAvj",
  "key41": "4gayP8ajYhjwi7NAkobQ4Z8uHxV8m8qe5UXyqWWDeBFYVCr6Guk1fx2RZghPyitdeGTb8wkuuVkeb3fKYnsDLD2u",
  "key42": "49LckDhLxRSFvEVV3WZLtk7RTDrR1fsUpxm4G4fdJhQfdyJHDMTtucY4L2QApbhcy18XL7C1FqHnGnfYPYMtSqSF",
  "key43": "RsXzAaw3uv2eDvnSwx4iuP3EorsU7X9N3qsG1jXopHidJPnYirj8XratLXgvRUg6o1v8mhTqJ3Yh78xJwKF3yq3",
  "key44": "62HJoUGd3YyTS7AnZz2JvF6nfDibH4ZZ5vYN832aU5ZFbkdNsEmYS5D7cjhi2ym5C2KJARUfYjpBS9cypd6Dw9KR",
  "key45": "3ELXPqph3TQzZyyGoZcc9BWAukveu7hoFRPbebTMKexEL6zbHZqznncsZaYtd6GmCVG9djP2iKMZ2jCn3nJV9Qbg",
  "key46": "42Qg9vhyUih4WuQjnpue4Jt89myvb2DyqqLf9YNu3H8fpU6dVKbkXY8JhYsfgnvAZXArGDJi7TvWYyhx7SAXCa4B",
  "key47": "2HDkePCYomnHzmf7macrccTxVT99rkb9mshopAVd9tXhz3QHiPiJuyrvyNFNqbNaxXgo341CvhySpnjLV1VSVKf2",
  "key48": "5u99U3xTG2SsSB1JjCtN8AyviMxFLyU2hkf2iUk9Q5WoYtb72g3GeQtpwssAuYmQv6Lb55qEXBPiqTaq7fiQvJmk"
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
