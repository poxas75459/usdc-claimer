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
    "5xeWm6x83oj9baUjg9mBg5Tcq8D5oVZNbKJXeq4wbGzrfNQVrj4osDrsDSDCYmQrJuZNZLGqvTdZEhQwACHhYGGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AcKW3CLuz3W53wxX5rjSV4pHPs53had5XE3TadWYwDRXWLZGDxAG1NUMr88dq9xP3ikmBq11qg8JjzHW78CiGGJ",
  "key1": "4e3LUiicpimV8XQEZp1PZhZC8jB7CWpSPTEqCgezTSYFFDMv1JFPWJYu7Zm32ZWqmNxu5vFpVMdQ61terNPpmftH",
  "key2": "2jopqG7Ewi5j22uFBdvAbTSaCAC5Gh7Gch2pjYAsLfGFpTCrjxAQ2dhxKAciEhw6j7Br6Td9misshyXxMcJY3GKD",
  "key3": "3wwMYpFtsKrYibnRJt8xxE5jMqDmG8MFfgPxgbwoguxwtJ9JJUTWHy1aM6AFtLkxvT2z5G1KpMtQwnnbd5YU5BMz",
  "key4": "36vWimzJysMMFShDA3trcWfwnnSYePbAdvF3ZVSzo2xpy4rAuEYsLWvhAF8dPw1iwvAq19MGa3bSeM7Dy9QoKAnC",
  "key5": "3CWDR6NA7GDhqJGfGun9QJ1dBx7jmRoRzxtDXE8uwfw1dqndcXjotzYXF2B6QcqhdUY4yY7UjG5diyF3sq3ed5tX",
  "key6": "5NMD5vY8yCvJR7A3Ns8dNmh4ekYZ9awT6MKaEsUm4nfK4Bsr67mJkcJFfuZQ7ZN8K2p4i6rBFFrYUbEFgPBXwcDE",
  "key7": "2eE4V67LTgdJu8x1aE2mRe2puJLWhBEJroqKK7pieCpdDWYumukySwsdcjo3va5E2U22udgLy9sJXQrJ3fs3HFoR",
  "key8": "4Ypcz685onBMvjQuDczkygoMUNyMZWaq2jikstyD13ryeV5arDtGrRv4fHXavCVvt1esNZBPZCuzq5WWazKH1swJ",
  "key9": "492DQeqTZbeoRsUJ86z5w5o7hzhC9sQnga1inj9WrQ6nYTLYoxiBoEtPtQFZCT6oiwRgcpwaTSTuRfbLbURnjB6s",
  "key10": "4fd2MFBjToctmfW5DxD7w4buQ6ppqRrE9Ce3ASXXCS3595kKy2F9XDZaR1siWWTpHtt8uksdgKhfzLuGJW47ePn1",
  "key11": "4gpTUWXzvZNcF5F9AYMgDembha4QUKSJrA44spqgBAG3Twn1g3XsZyLnHxi5ejGL9QaRhykFRnMrB3ZJfi5hX5SB",
  "key12": "3Ecnwgou3rFZqVZEAHRgh4FZ18FiEjkCT3jLKQgCu5rxfTuoLJdojo5QkLB6ndL5y4jQKsPzs1WkqQQgwQPU8K6n",
  "key13": "PozRyKBMHaDmi2ASeaXYag9wgzfd6CgszVEvEaccHZRuLPoynEwN2enAJtWRk814KUZmajpfAvZx5JmFWfsKsZN",
  "key14": "hffLUYyHCPGrqxGx7dd5mpk8ggRXjdja3Ajz9tuV5R2q9mYHqmhotpCZ6Sy8n7RYjM8z3t4Q69A9HZG4Vh4C6jC",
  "key15": "5zDSC9CHtWRorrv5eosSkfhgATJfEQQ8QT3jYTkjbM9ez6y9CUQPbj3TRsGMm2L1gJfdqeQG75Mn1tFVK9ejQ8Kz",
  "key16": "3bLgYTbDgKG8Dh3pePSeVW3vTagzEm2dfSb9esuCL6enWJBWLcxqkH8B4eXX7aBFHy7wiQp6teoArAahTJ5da5fR",
  "key17": "5romttXgX1E3pDsoisTWiVaJBrwXiKqwsxRgiP3rHjvWmpi9azqVQFYsPUysz441tetXHCFqFPREDHG7SUnneTVD",
  "key18": "1PbWm73hXYa5fSuT7sKfr1kw3viJny8U6sPEZ7AKt5TRcnVvmuFvXnzrT8jaAeaLg6XTQb2DozJbSQN1PY6g2uE",
  "key19": "aghQ8NQdXoQGiU3cQdrbtQYgLEBFyDLgQxd1B3at9buYkx9ivX8GavwAkrt7roLCN5PNYx7DRksybnKUWBMUFs8",
  "key20": "4xQCgMnmwfac2mCzTa2uFRkmzrNKog3j5CFPgH6QT1s9kXsi2fDiVGxMsp6ZvMUhuZywejMqojCfQmdbmLNchz7N",
  "key21": "22qtKbTsM36RK5yTFuWEdjKRGe9DYAQDucGhpBt4LeqjUH92Z6Kd9YFYwyuNdPHHh5bAxVuwYuHoL7mPDXUTC7hx",
  "key22": "35PUKN6V4rSBaAZwtWaxzDUtpQ6AYgW9j1Tb2ae5kAGaHZT2QKUdFou4yiMS4qJwWx7i3GCm15L2vUMoiDMwRV6G",
  "key23": "5qc83P7R1drc4d8hnZmSDFao96qRErxF8muYyjzKcsktufLyGpPHQahhbWSaaTkPT6vLhuhFBNto82n8jsUtsV4n",
  "key24": "ttxcFBqs1BPTynLa9ay4Exm7RmV8Adhg4txrsMzHn3RswbNhPMWEmsQZmCGrQccK8HTJnPay9bkdGXe9CRNPiob",
  "key25": "2XpgUaWPuo6PzQLHwVEnE9C9woYrgUMhkiXdGS8HHaQgfLgZoZDNnfjaitcn35EqonyPCVcdzM6wU2ueMuyM82Ca",
  "key26": "3yhEncg8BT1zgNHM5zonXRWk9xdejg3mzKK5v8mF6hBwVAVz3iAH2Xgdb9aPq9B1TrTofMVvi6aLtKESDzCjTzWf",
  "key27": "56XPp55YosY2XF1hgy93oB22y1Ce3QNsSZVLHSjeJWkFJ5GjJgKqKCLdVz5VzhYpXYyYE6ErAC99w3d8T89mY1v2",
  "key28": "5sLmzMegy15GcBUGGhkBbkSUfXu45UWnkTvWTf7zWLbNJ9frKqe3skfaMk28pW15XTGGLFitfVeDwJhaoyuE36Dz",
  "key29": "4SHz85wjtLtoeUYgHFBL49Nmbo7YoaFbhffzwVuDS42YoXNMaK2HwDbp4AgFQTwT2Gk9TSimYtMHCb6G1rwcxfCc",
  "key30": "sBWbP5BnjgxuosSAwp5u5AohnWThzPmgRsWa4YZ67NzozXcPX6HUWtrZdSDxE9zMG3WXSZDEB5NEi9gK5Sm7sTk",
  "key31": "2STZBjuaX7T9zc9SxRVxhJLnFCP1bmV8pwpq17nyyLGH4UV1ttGMLWkeRbtCcCvtdxB9d4of7mZNwGUrRqZHCFJi",
  "key32": "3pzAop6yQFRRZsFgyjXGZtmjUPzYAMX5y9zstFePFLfM9fvfb3WCtYrhT4sCHCoFnMBnwfnm1KB7yr18N6HxKxSQ",
  "key33": "4qF7AbsjjF2mYV7aM2FWvDcUwZh7cUtTTDQU7AYLykKmA3h9QSpTFaG1GSXDQK9U5yCUzUzDCZb4yfAbdwpT5xio",
  "key34": "4p3WBkL5BVxnyxfUBfBAr8J4TmjEKL7oUxbsvtFuworJjRasZxmtqztrbyQLTmavAiCF1tkZF4fVhGJAfDuXcnuU",
  "key35": "3dyA3uLfXytvjLDa3RQRUo8MRqUbGtghj26ZHxYp5BLnxzNtwrpq88bK8TfsMsa4Nkk6svgiNgxVQMv9ywkZBwbb",
  "key36": "2Z22vt3EM377BnVbZtjxW5gEAeDr636Z1PZ4jc9UZyyYcWQnhd697o4Z6nmHnHxUSjs533xMaUYH8T9qd4HJuGcm",
  "key37": "2TB4EZ6PgWeszZnsocc81SumNdy4WWf8gcBz6Xyz4ZKYeGygsXtWH2BXkgT5chaugmdiKhKLm15DUUFqQGjZn5ZZ",
  "key38": "3RSjQV1HthBTsRHn5cwMomhGgZJn9FoejDprZB77y42QZ1T4vEVQ53CYAsVUcNtJ9FG26GqoRo9Ha3GdvTdVtKWr",
  "key39": "eiZud7daRBKzkKfpsgNMhyBU3m2cTsKfeBTZCK2XfbjTJ8LagyYEroRaRjWH9SiuqH4KY7M67UWuoJSdbjUHRUL",
  "key40": "4PZ9uaeyYEw7fRqe1DqZ1WJiUDsd89tVeo3RrM7nB6kpBazGyVGD8VriWJrzRfs8TvvCkymTLHgWtmhdpDFe6wa3",
  "key41": "5qhd614JnUqiGJSU3yAwiLbdhnwYWRDKTk5ZTCGsiQs47T8naCTR3EESL3k6c6uck6YYhuA7AkowayXnBpaekZC9",
  "key42": "5JEMnqbMffzf7NhGBHbYimVSfe4wRVwL6TUw8PMEkoPAxLLPJxBQDqEFYgF2NqExcuJKAC9c9VUe2hYgfKsWW5FD"
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
