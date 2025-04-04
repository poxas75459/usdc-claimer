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
    "sfzsNSf61LvGYSs52bkmTReN6jr1AbZDvAVpbtgASmfPLoeTYDvKsZbhdg4qVJp26wXMVHFnsnYBSCMx1JHzY7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ysxC735f6DvL8Pma25esGCbzgPfd1WMLLCgAJRX8uwqciWJqogZ6tBk5ZAXGtTJiDSRqtebFaV66Rk6d8UAS3F",
  "key1": "5Sbuz9wZrDFu93AyoLb1tvZ5KKP2bRnHg6U1D4EWGV2ZQ8VKG8ZhhDuEufNNNnNyoJT9xLAdSv1Srk7Ta7c1EykW",
  "key2": "31L6KyGNnh2LbEX4yvPQ37p9zQC3z82NReHXV8HhsY6b8aM7VQEqBLnxz5V5QBysHPWWFJSLoj7dvneQBTL6PJDR",
  "key3": "xXwKuE71XfbV1QwBrwSTyL7SYnPEb4tc9DQfUmboZfmXFSLVDicsuBHE6onfw8BTP4Bay21D4wE7ugTiS5kKAeQ",
  "key4": "67hw1pm48KC3pCv1xhjkP8qp8wchfJGGhSCQdj5u3ihrUmgmJAoEgFs8edPvdqm94uQCHHKeNf5uHPyRqGCTugyU",
  "key5": "5G2BBYGQaHkHkF8PFVkVAjtDDiUQApkg9RdQusvP8VgABYrE4VpaCc6dHhC53sytgsFT4avJ2pvmqdu66uYCLYp1",
  "key6": "3EwMMXAh766NwqzT5P69AEN7w5RLuPaxDLxWLA4Mz51BJEGsWbLHueiaDWj4Lvir6zjNNny8RtGdr76TvBndTGNv",
  "key7": "4XBA3td5zXdEjtbL7Aa75EysgY82FvcJ1t269v8RAecdhJ1AmJbyUBCFksh8asvMsfhyxvoFrUuVuMG1D6wZ8AZd",
  "key8": "2TysKBSzoyiz3Sd4XZsCeAvNGdqtJmhZqH3NVnb9FwP6mXdVPtvqV8HJx1EAqwyEMyT2HNamniQxnk1MzF8mjcJy",
  "key9": "4FV2s8efBssgLuDCb6rWGTWYnZinjLJZZBULbSpGQ3xiMkg6cPcC1dqAKuPncRCa361qiP5BQXzy8JkZmDQVVRvJ",
  "key10": "3qyEaZ1kkWYDW2SS7WCNL7NZSHUBPRFW6FJpePXRm23gWyLnH16GAZpnCoB2VNbwPQrxdhzsJrLzav1RujqzKB38",
  "key11": "3bdcwSgYY91YJXFDjP6WHfUKzzdYnJTQhFugEpkPmCCm8zG3Qj9NXnrJZvnrshc5Wp8R4tWUj8yXsfdVyZgGsxsx",
  "key12": "3q8q3PfhgxZaue81x2oM1jrCcaPqtXoi3Nc5uFPGkBuZEnqMvn1RU7aenSvMw1AKkNzWDdFiHFs8AYCaTTwiQgDd",
  "key13": "vF5UHZgCqcJKHPQCKfNGpGTetaaxtncaJJjLiP5N8RsJ89UgesdKkWYZfSW2zb2eUro2RL8dPdfab9nAZLSqNKi",
  "key14": "3eHpTCqFmwpG1Q8Kq44wgSsHhmjMrFyrwBadp8LKXc4ik1AdNRqk4Bm7bcVuW7g84vGy5JtFZxVWLyD3pDmdL6nn",
  "key15": "5653NTzCwt3MbxBiPq1Z8hcWjH7PUKKUSmDWGwhAitsb6HvZaR1LGHRmZB9sXuS1ueQDmoVGmRHYCVgS7sHaWZbm",
  "key16": "4fAURGhs4iGUJzKQBhMcUk4bkJ2uQSM1ypC1hwUuxrBYCRvTrWJy3QJ8GH7KYxQuiXUqLHPcpHrtoUVqZRzRHSM",
  "key17": "GT3cgEdpRKtpJXjnr8APRoAwKF2dirrBmqxVJYA1bnbAeRnyWYFcczxtffg2Uzc7DX2nQSApndJCbAwAg9MR5Nu",
  "key18": "4cXDmqLicyZ5f2QAVkV2nSqZoSXAUgmJBQ62oNL9NWnbPSK6ULCPFsQ9821crtrpUmsgxitHgKiC5Rf7mvcaYCp9",
  "key19": "4V4qKsJXmw8WzFP4GHh8LTzzpxTiGsGEhbspJyZMzBisYobZfzS5Pm8sjZZicck3BfaUng3tG8vHAuSGyQaiyPnm",
  "key20": "CTp1D58Nj3paHMtyQ52yJgXteNRbF3E4Mv3b4fpFawyEWjbJJnQnW6vh83ctN8PPP3M3BoHMiWRWJW3DT8MqZM1",
  "key21": "5oW8C5WWn2j2jKzqwZGAxtzTW6JVkwoKqWSxw1fa8LxMjjvNLe1LUnMGjN53mRdNH3sUFcBse8y2eqcifFFYS2GZ",
  "key22": "3tBwZ1SYX7Tg5tb1L845vSihrJeGzzV2LfJG18WKfMfzmyEYE9GA1gXKmJEHBETjdA4ALDKfbji1X23ipXsq3J7w",
  "key23": "23AjyJUMHR3RkJGaUrXynUehYB7D6ge2mH956B32pSbyBZdgYwj8zT3fDcwDCaRjCJ1QgXLdZem2NhjxsoJjKNY6",
  "key24": "ivG3Lc1cPHGzipyZNQqc5jxjLPphVgF2VTmU3uhqm1SJafFDUsjz5S1xfem9K69JBN4zxRceiuxwD3YLJmCc65Z",
  "key25": "5at92kHCiQeZWMwTV3tBztRBZWVE417N4qh2e8ETkW1reFZywZN9aTDNViyURrCR3AnzTaQNxwpC3Rc1rwaXGtxF",
  "key26": "nZLyPG2D7Qv24B8wSHVyJqN5iYezMq8rnVx6xaw1nui9pbu2NyUsnNs4dQDCgC735q7hYh8DkwghupfijVKVdxh",
  "key27": "4K7LprcWivkSoFrvnLu8oiZBbAsYNmuf8FKWXzJthYvAoheJc5Tjcpsiy1VsaqhZGdX1Hyu8x2QcJYvUiJ3MGJsi",
  "key28": "4XGehthyGAas1aU1xw56br88sHMnc1CB4mTVTNaHmkB7w3wYw5DmLJuD732mFGHj5znUwjtHErap9yHrnJjFAYpq",
  "key29": "2J3vQJX6BQDj66qkxU36bzpni4kL2ViNepJaZVTJYWipwMLsknZWC71srehwEcPBij8qyJzzvpqzFb8anaSnfYFP",
  "key30": "2dEmstxW726KCkcsDEvZrTvU3geDhAmJJukwXdUtQkwQc18TpqkhniECJsSxU9WJabUim86VAYCEUK8FULypErgw",
  "key31": "4qj7Zuf8Tiky5Gs2JjziT3ByGPyd6S6Fd2Nh91kukJcMU4VTL1nc3GXCr8v8a9oFSKe62Ad8XX5sgxLJupDwutYJ",
  "key32": "2fkRqBD76pT8CCjCwn3XMUZoCikutGaVJatuahdb79eEwNZiiwaaXy7TqRkmAyVG3PipHVKvp9Z8ACofmqiHojWj",
  "key33": "5aM16VBdCEtpfkFRN1VvpTDsTsMUpB8rFZh9LGezvAXMrGrRXsNvLVegcUgtUHTjsNawbUojf993zqc9tw7XKWPh",
  "key34": "5TQATQo9vfWDZ5tLNrBkepjwoYP7u6JECSPQX9XiBKzn8uheh23WEjKuqAR84HMsybRnadTreKYgwWfKV5zkwdwv",
  "key35": "4o7EMLV4THwdzhs12EjjtZzXvWzEDg4d43vu4oSgWQKt5wCs6FuRB8bD1rujtZcj4mA4NffonbEBLPTxAfV7GZjj",
  "key36": "wUhnqtk9f87DNCknXbWxNCqognDqKy7UgEWwh76TpmeQUCD7YtLd797mRUDWsLhouBEuNMYmCdounhpLWyh3fp2",
  "key37": "2kiGDSzRkeX6o9krbMYki82EHahFvuzsQa6L7iwxU83cacWVC2By9E9Dx2pJ8omwa65E8orGoCky1a1CoqRyCHP5",
  "key38": "3HbwZ2sqhLxjbV6WKrcWdNPsRpXNAmhjeADavUYhhsq15sHMcnt3KnWgFtuBBzmMxN3oKugsweqpi4ajr9ghoxjw",
  "key39": "62coyKB5EvdMMxr8qjx9CxzzeatypE2c5o2rQfGeZt6TSaySRV8Hyv7HPHJfRfJGyYPuR8if7nLBEnHJ2KeLcYQy",
  "key40": "qPbqbmBxVkasNadBc8EbWfdDznyARQFXGbQKtHxaKs6rgrgoCKWhN2MeBLqap7WaWQ84GhH2hF8rsDUxtW4iCaD",
  "key41": "mSGEGfw58sRrDoqz7pHzj4TyN7nfoF6n26W7wZQESs9y2C83cA1ao1d4m9skVXMRhRgA3ommMqTdTzboD9VP12C",
  "key42": "5DM423yN6Zwgk9hKz6Z1253gjPjyA4FwYXvJate9imU5yr5PygqbHbVyGHEMarqrkiJMq933j3FvtxK7rvJJwmrz",
  "key43": "2mrcSk7TeJ1WatN1pccM1NV4bXeuBRMiZo1AGJHQtANMbk4sDi2tzEA3HxJ6i18P8QHY7MzZ1hKgc9wG3V9yeWkF",
  "key44": "3v5qPs5TTZFmcxvzboj5sajvahyrtpXesMN2kPzrbZaG4vpLBqbBasC4Hi8uF48EWjQAooNGR4psuVBhxqManPmK",
  "key45": "55UYPsPfD4F8ZWCEGymUvD6hxtJEt53jwHjjnzwptZffRFtLE6vLUFFbuBrWn2oQuQhAhxmfuFtfumt8bQvkQtCC",
  "key46": "3vQHU6DRXvLT6Va2pEVFNLRdyPy9K4BBkmashcnYFRhL5dgpkZpuG4ur9No7LUGVfFjH2suAjAXWu3sKBxjTTAp",
  "key47": "5EfWgHy1VptuStxqvypKJgdSjohNXTBk9NK9hJjzV7W3uhN2aNwyUegJhRgaThPW7u6TcxtzVfdnbqK1TXrrmQGS"
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
