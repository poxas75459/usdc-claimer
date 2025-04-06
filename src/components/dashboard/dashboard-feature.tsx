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
    "415DU4Psv8ymcwPvXhLG1ZrD2q7EscQF35ruk1yYbHsZSHdc7xRfhanR8gghPJ8mDzHwMpjZkAhDdD5oesLt1jGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xZxMnbss2o3zQzMdhMVtKdcvSwsUDx79c6SNsNuTxYrNe9SipSTZJPkXTwQribpgGCQ5bzeH38W8qEDPuKa9GDi",
  "key1": "4DNGJ8SD67MhFrKddXveQnZJgebNa6KAixmVL496D3CXM7vHwnLGRd91oeov1pk8ALVDSyDViCrMbw8GiAicWxxG",
  "key2": "5UntcjFyhaGUaYXzzwog9darpptUUNvUgx24AsEazhaKseUrmg2AjSchoVCRsc1hu7bwCuEZG9RugtTEgeCsA11f",
  "key3": "2VfWviiaTtdwZzH74E8xSiF86oYjKaDZNYqMTNjy5p4cZE6np6Rfqgsk41yZ1PGyAUKiYomSdtxvnZbw55UnTd8g",
  "key4": "2jdrP5iFhMBdPTooZsxdqaWaADKbn1iNWC54nth617GtvVyvbVctD3FXgErdfcwsLYQEnG8keqeF74uZNgpzxxZQ",
  "key5": "49KrSDSoJUCPgJ6syGe7WrU2n4Mjond61UdkNayXrfwxJ14Fj39apxGrFERuEf4nJKXdRRgCWY7zfWQkP7t6C8SB",
  "key6": "5t6UNHyEYiub1HPi3P3FU5AttwhrBEGpuP8sxUMfvcegJYqMcfba2AmU8LK7mHiWgBQqo7TtB6iHNB29S6QCiks9",
  "key7": "27pYG5umw4w7xW6NgoPMG7ZGUUnXtc4nByd36xDjMstTUxGqBkyPhy6Av5vEewc1CE4hb8V1e6jdyYiU6o3dcSzP",
  "key8": "2KgAZSjCWEEQHtDwajpXEFBTmr2RJb4SkMhEJWpdKA2hERuMjLYQU5zyeX7Yu3cB5x6jvWX6Vuq6FQJdMgZQTRdu",
  "key9": "4Gu6zzyJrga6VKkX6gbyLmWuxYTgdyipTDUFzoUaw9VjGCsX6a9zC4Yu3Rx54q5zswQWFXE6AwsoniMu1aCco2j4",
  "key10": "ipyCcJitwvDdqJXgDnZBErvTryfDzyq8y62xv6nSK7zbS8UDyyuyF9hWbEnw2xCTSECeXBtY4HT1xwzB1GX4cQe",
  "key11": "5ZAkiGi9hkhdeLgowKNm6ic1KrJer9HdCP3oaVhowU8DF3fBEBSvrXbw1nr5nR5km1Nj3Ttn5vVUcC7qGZowsGNU",
  "key12": "wjNn1Zwy8zSH4vGzproXkDg9RyLUsztY6MHGZpGyt33DHrLkJzSHcnWR5fGykSPbaFocV7gLkZTx8MAxLYk32Vd",
  "key13": "3KQDmqcNQRDW5r7TJqTEhcMk8mSNjaq2dcH1JAZZk1D53dKduUdygyZPBG6KH5DAxpFWdNvaUGigbRHni6rPEaub",
  "key14": "a7uJVSySDBkPYpq5nNoWr5jJQG5GYrwSYLhim7SBVWb7rJopa24UJ4PTT6dpjZHsSpdoyRH7btQrZFbaEGAxCcs",
  "key15": "2wwU4gxrYCL3Lp4akPZe8kKRswdKmcztkvPhV7jCFh7eFjrH279Qf2AG2Qy9rraaK5dc9WncravSEz8RH3uxssEJ",
  "key16": "62kz53wXTo23QBBQunqonAmzfGHti98q3NFU6TTM5aaRgACDTWTki2vGQFCMFCThbwcsNhFCQkRvaYTV2W58yUAg",
  "key17": "4ahGtiXFKJaam9nHNR2tbPMtzWRLKXkJXQXQcR1WujCr4uR7Y3ueRn1tTbdM7CGJuyjfho9mPFvDdK1jhGXj5eHn",
  "key18": "5ovb2TUhxxz3iNEcxjoftzZ7W8cwA2FtpWggRDVi6cYsMCy3hXJvxjXJde19TQaWN5Uuc5yASobd6bf9A1RKSJXk",
  "key19": "2UQjKLPaNmWkMY4MztZyUWDA45Tzn3xRdSCGYYsZEnJt6y3smx3tFZexKic4HjMyMBKF3dF4EKauiVchPybRUyUy",
  "key20": "2TDbTHrxZUkRL5f3669rUoCeH4oHqhYURgxebQ8hjnXYiEKZuy3wYQjuGkQWxDi52VYU97sWxA9Y85t5HS1XkbWk",
  "key21": "vujtuRjDdETLqjStnpeckCd4sqSrmsteHwiXCEJhv4cBTC5kJyWY8cFiRrDPp6auRsL7NKQLsG4gLbCvUNK8T2s",
  "key22": "2gWYCrQ5BPgA4EXx2kWcH6e3M2UBLCWuwtFTq288N3i4LwN9tdnFv6ynb3jQWWNULcqBEmPDwfL1myq9b4Aqmfkh",
  "key23": "5tp4qQbk8p7wvERReM76r7f8sW82smekEvU8qafTe95ox56U1nHkhFxsUP7kto5SNS97gv4Ld4vd3UvNcHXQ2RKH",
  "key24": "2DGAkx5fDYV8rziTWQrTes32jrpNBEyr7T8m1fWWaYSzDmA8X4RVdtRS3q34rVwugTBpgwniC9nbPByfoGBMBpd3",
  "key25": "4EVHCgTVq8gn8fKGZQZpc8HeGPAu1i4Z6w6yQhy6kUvT9TBRqAdn8i9tBxhqSTpRcAGEZeLYzjBd4qSAhQasqWPK",
  "key26": "3rfJeJMk4e6PjBgHSisiur1Y86VUGrGjE6djGYgeiED1yAvDZDm945xmCUurwARnFgJQzsPoVncRvBs1oFP5HFTG",
  "key27": "3LRPLBAZ9Bpfxx8aj4N1qBYmtetiA6qkXC1PYMJwf2HsSsk7pwi45n77AHJHHtvWr8sAX9oAgaaCzptLfiS9rbMQ",
  "key28": "PujPr7FRfDUUFgjxEKYES9mXZEWZKmmbcqRGrQCMvnMfJjPvS2HN2SWN1AVMcqBV8gHePZBBGUPAjddAM6JJbAs",
  "key29": "45UDBi42t7jyVxvGK4xLbogT6Vb5CUJ71XHQLYvLn98Xyc15GxXHLgtcnp1AuETsjtNyQUNTWEs8DTAmARaevKme",
  "key30": "JE71QXSNbQftK6Y1krPTBEwZCuc6BtKb5oR4RiDZ9cvQKHWfBjh5WgFEMipmoiVFmgbyDDTZh96jFdjiQahEWfR",
  "key31": "Tb82eyN7jQ6BZWGatbA6khesVnmnm33dh9P9rXydC1Q5SBz7gwEyj8mjFdezzVnE34wQmRhY2hPATBNUn28cdcM",
  "key32": "3LhmMi1BzQV3E8EFKAGzMu4QAwXirUL3X7MixL1RMBeberz24n7MwFH8X4GrzxUJbSAbVHvrCnZVVJPivb17xXD8",
  "key33": "5Yr4q7TEp7gBYnch2kB9Sut89ynkmzMwU3ShpGxLatWdBM1E5a7NqiYzpxPuBxBza8GauiK9Qx2WqeNRXzBTqmAM",
  "key34": "5iXAqvbpMp4nLbFziEtSqRPXoqkQkUYZ95z3t9Jgvis8A3DGbpHbcfguAknKF2vb5FNo5oVe3FUkgMm7NdDzRiUp",
  "key35": "4sjWw91uYuvTJQorh7vhuCWwsvzweByHVaXejFiUQ2gz21vda2w7BvpUYdq99MmWWFDwUT5froURMtqB4uGnawUo",
  "key36": "5F7DK4gTY6sGQYw15N1yAv9FHSQhdGyYXkdB5AToj542aUHrYqvyUbkPqYGsLqxaJQtERkL3YSUgCtBAvwYFXf5n",
  "key37": "3khHF86zpJk8n6pkbc3fR4u5BoT46j8U2JAfuq29Q8UH9JFRiauBXfCDjzvB2Najhndcko657ArZSLjhj2yU2idS",
  "key38": "25Y2SpNM2RSmCbTwo2qsyRt8Dpiy2ew3rXb5E66BX93DqQza9JsBa2VqxqnsYku34VeGMFAvPsGkRbdL6DmN8hyu",
  "key39": "4ga2viCsfYoJH7KNvYiNKrR8XE1DkEhnAVuCA7SiNXYLsHAetZ6YdKTciCh7XTMaFnaPn291ZpSJzGjKJhuewBTK",
  "key40": "5WsbgXB5w6SHVtqzupYsCMHSRociz69S8SEf1KAnuvaRyhHmhPC4GoYwk8CcRDNehW774gHSHyteNrwfb5HMcykv",
  "key41": "48oRgM8KJKqcZ4gNxsyJYv5JPez6E28GsRTxyUoG6jZQrRvcv9WHKMn87NQmipeEPLqwY38asKmV4zWnyyyQPuTk",
  "key42": "3XUjkqu3Tkhxpcdvpi7KbkqykbugFpoJg66u5ajJFrhuFUp29JPHvsaypCLCs57a1uEE5de1P5GLvoS4bod8g45U",
  "key43": "4cMjoDU2EEyeaBwL293tpTaXcHk1sfgWpsVzohhXoGL2yTJjqH3CrqpJV2ymMgttcJPrE1uBiyABh8ANYB48UHvW",
  "key44": "63cmYnQn41za1eoD6i9XqhZu1KoazzAcFMMhyXzduw5LPNtLfqXtK6n3TEmJQJ54qRyE67tyn26Wo1eKwWCjMWTm",
  "key45": "5JbP6TTC6TtDBbh4nePUvJhjtU48weFy8C54MjBYRw4nhJwR7HwsQrW7UTaCQPHdLFDkBt88Ag3516vtf2HQTsMK",
  "key46": "EsKyZYcafy7LWNPx3XNjy4tYbj8G6CTfSoNJcdhjffmvnrLVupZgE9WBmPV5peoKWkmiU2k5J7tgCDaKeH1qWqF",
  "key47": "51tivx7a8pM6P5u1tWypoGirwJsowv2TcnefYmpkraC9xnvjprj2g8iSo11nCQJRMkinTWARCN3uKwCKiiLrxk2m",
  "key48": "3tvPNZxZEFshHEum9DVZS3ShvmQ6CG6oLQPt6cu1kbsFgBiDfBMCSEcz46nKprynaDUXnkp8RZLFUuhMhAxeau2i"
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
