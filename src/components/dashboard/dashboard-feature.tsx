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
    "3m547Jh7Y2g9WFhsKxQ6jLAnMBifjXV85YCHsnDQNcpx6HcAuQbhRD4yZacN2aGZDQrpiHfKhr1hqw9vJN3tTpuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48y83kiyjnBEvBtSm92njoLEr5rM4rhgtQuDqSSub3XQEDUBd4a2xLwwwfkWT5ZLhaVfLuAEenYWBkSJDja6AeoJ",
  "key1": "2cnnGXC8KhG88Xn6cbZo5364QULwGbCARvYSzZj4cLqBgm4b4bmAGUPmoNarT2v3zzTHSLXm2wVLJWF8Y1gmD2ej",
  "key2": "3JHXakUPkbCofM152xGsxwxLhVaAjKR3b1znxrGv9yUpQHPmZkkSRXd3Xf5HtXQ4Mv4CQyKqRN6hPtqkszsc4hCE",
  "key3": "2Vq9ecAyFDQaZzzxoyLHQKuKSMSDfxgcPzB6jgqKV9JqCb6Bu9BjWCHjoZChBeAEmcmzdR4oFaUHMiRRDsgu3BkM",
  "key4": "tTi2kK3M3NtYhkUMySWiZKbRadCGg3DaEh6qBYvBQxdfu5Y2fi4TGKwFMEsNGiC9R7ccXBaGwzKzcUey4qrTd78",
  "key5": "4zKWd5qRTj16xx2rPNBHoNDHbcgdfnwG1aNiwpjg2zAFDphi1mAwDhCQbTUc6L8XA7tznvEQ3soe8ayqrsXnvMoG",
  "key6": "54XE2qdJsVrq9pxqLnBBj33A6asFbptJ3bJ2JewGtPMSPbECSrZfzdToF71nHri93dgwzP1cW3YtH5JzKinsNjze",
  "key7": "HmJpVP68iPEE69CZhkFjPYCyFborv15ac9dH32A6dsyPCzV4QgrimBpuL9dw5rg3K7WVAoMmPXwzeif4ZqZQ8DP",
  "key8": "3PpQXEcz4SJ3jpNHWjCc84ifyBv76x9qfNZXDxB143ZGewRUSSCggD8DKceWbC6K6JqxA8RzwGbmRhJrPFQk5TV",
  "key9": "2uKnS7zwasvzDG1661ErRgk29EHYcaXvbTH9fvy2wYYWpQGxcJxSWhxXfAGLb4uxEwmrDvQqyRAaTdDxV3PRgR3g",
  "key10": "4Y9f7qovnJ4Gj8TKF3LEzPhpaozYLPRv1KC2twwQMu57CFxtDuEpAh2YE4RovN68CbnryYWSEBJ3pzrE2wXGrUrj",
  "key11": "4tQZobrMCSvokkmWfkcox6bh9XWKomPmMbA5Ezej8qVo6NQUy4PJzeBurC3srdNFgDaKVGDVPG7guSrK9pArDEok",
  "key12": "41Xet672m9v6JHs6MRPd7r66umTEmXcq86Q1TAEpEzkDPsAjnb6KNpdB9WZWFTVuGuQhVQaAj6P3TVbBY8wR4qnP",
  "key13": "V2xXRUqRzZUuG4Yci8QLMXJXjfCvvLGu86GSZs4o2A7aSaXi3Jm5MJ3cB1XmpQFeTFwfcGMKv1GPDZMBCbyu6UP",
  "key14": "3i1VsNBZxYegdGHtFtoNmKpWeSJb3n65yCf879JRnbU2ujP2iK2wnnENLwK96Gw2FFdeyVok8qZvt6fkkCcbnMv2",
  "key15": "5QEggNdHMxKRmNzkEdDvYhM2uzj8jkibbzhLZvwF3XyVGscJMyPvrj1AN4sBCxJQL6jZH7j1YwkNeNGSemWD4RgC",
  "key16": "2nxmTr4EVZF2ysraryaLVNarMq2kkkLHWztjeukirBWXVRmd8EYdYwjKLakGSe4exwDoMvURHAjGaMrGAFaaNdiA",
  "key17": "3FMgB266Tmt8P4NStmNy64fRbHSPGJ3Kd3AvY5esaVkrmh8MLqc6JAr4BvudqA8o1ywzrSHCzwgMaYCK1nhDdE6d",
  "key18": "4PttEfE3AXgo2Xr54tsuPnCx1ciqwhT4ccZEcrRFnZD37EXm3L4kWU3pjFinmexLdfcF9RH2R1A1umzsnEubb9gv",
  "key19": "4Nv5XwDgdEZ36A6mhyk2cnVbHW7r55ubJzSxipzncmyZgvaaTo1Mxo29amAbcXNzSEdcvt5J35x1fH6CDLPR9bNF",
  "key20": "2cmWsXoudYN69ZwA5zjGijUKyVShxEk4wsLVD6hht6351pHmhGhEwL7TMdpJfZzFCZizzvyFAGR5FyeyN1XoPS97",
  "key21": "425ZHKcSyy5dXWZ1b8KwMKjyKmMEBMq4D3jpXJYG1VtXGBfFWymkgVFTqu7SNPjb9XVjvikzpcaE2tCnx6Me4TVY",
  "key22": "4EAhP6AnEFgumt1DjiSSvAFifxMy5m5o2e5b2G9zHWDtoee1pspmWiNYQxFajqrBGo6ViZrR4NqMWFFiw3Vdn7Bs",
  "key23": "XSztXbNQ1NiSorpWe2SpKyH8Yy2hUJ35AwP5xveK8rPKVdJMnUjtbKT3CZpW5QgKdWaMN7mnxanXuv3h1oYwBh2",
  "key24": "7zS4pJmWHXJ1CL94cWiXT7CWdQ4iGaFS57Auw1E3KLUPtYzhLApbUhx21nTvP3yCkwgVNzJaw9Qu6TmgdqZJUVG",
  "key25": "3VTEWRxP2ABwKsshMLWEAwnD2z1CyDhjiaeh9LpShh1cavAAAuMvYA1A5RKqZE7D12xMsDW1RnBTRYdwGV1SM5Jg",
  "key26": "9JJsjhSTeemAmgn8GnRvXvozYR8HuwN9Qr5bsK1Fze2g58VWbsDmvr7srGFDcTUgpt62rqxdW52cABoBX7Sw44y",
  "key27": "3rgdHN9SXLsBGrXTYBhogVbxFDdqtAAGqD9xyXfgqmWM5nrw1y8gnHdAFf9yL23SEKtFLPBZi61enDby2Zapi2Ly",
  "key28": "4V2ouP7ZS7AqXr6QGYERBCA6ZZhvdKXrNvyCSzW8Ke9tJjJxMrBA4beDUkfHKQQ1EzdAPUCgf1FMGeosmmSCcV5K",
  "key29": "3WSXKuufr5mPqnqP8K7CnU1rEG73TYd32E2ckzE2mu1yYwDT55pPEnpPq5GSfZzERF6iPdRowJGNLWy9AyX2cuFe",
  "key30": "Nki8R3u9Ks2CaCiDkCnu5UePfCeTH5BKDVpe86gL8yk5mFQEZRmrCcqX34M1ssnYZecFp8NjaQoAMJnHpZEehqF",
  "key31": "4f4Nrxu3nTA42AvmzwgZrfZoxBqKVB4kWk6sAUurzpHq9CcgwjMmKjqpGkHUwLMRfisYjK8yZbbMFEweUTUj67Y1",
  "key32": "RJftREhp4NX791XsuSMotPRaUiJ5WmZVcipCqphSmBnja6Tc3RYEiXbgMMm35CkNAtPbKMdvu7S5UD1Xzw6xJxQ",
  "key33": "4RbE3ZDmahiYxzXotYr2iwkXgvDFgc6sVpyfE7cHbGLwP7wXbThLBT8hR8Am3oUS5Jd1GmbwHVKQmHkvgo27oqdT",
  "key34": "5gf4RMF3hfeskxqvPCvmbkrU9v3Jb8tu1iVTiWsxupi5dfnEyPuXPjYvy2e2Z6MQsyedpi1HYba4iAdbLnrpRMZQ",
  "key35": "5w6TyTuRwPS4Q8ddRHPWVHcWMtb53ajizWqQJ8dzAqsdZkvrYpnQSCtGS7P5eM5WUVUtCyAi8bsm3K51obGVzmYm",
  "key36": "3jAYFwz1AKgg5LXwFWGiE38wSDQ2Vhkr91vkVESgAmY1Ts7hGxrN2b89TZ4fmrWPirPBHnbJ6hNZTcq4XKdn33Ab",
  "key37": "5jeGKzmtVJoPNftxmPRC4cAn4Dm1chf1dPuv5FUmTcJhyKLHMZQCcT3WBVmV4QWCCD3BfdoLaf5RvUKTj6grp72p",
  "key38": "3Y56yomMdsQ1XbkJpxBVRrw5Xkce1dM3SG3SxdmaTcE4LXpSKJ8tPRXY6mqJcb95angLuVYM3A2rKz7BudqGLHtu",
  "key39": "2mV77wBN3aKCYAbMsZdE4WE5KJ9HufSaF2UDzG2UxnPt15HpaaB46WFBSyJHE6ypcQ5XKqkrXEGVuL1E4GHbhCyi",
  "key40": "4KyFP5ytsTtiCw6cr7w38zgNkVkvAApRCYYA8YNUAgKuo7mjcNjz2YqGrLD7qPtU19UwGHd8r1y26LKYEYTqknif",
  "key41": "28DFH7MPauwCXC9a5MGtHnFPDeoeut3adMWSzm5YgMq6NaUU8wzJi2uKfh9jZ131QAeQ8zbD6nogXgPts3FK2GT6",
  "key42": "46cTpP1JVXoqvjuWL4QXEZLmmXp9kkoSwwEMoJZoHTg6FeX273Xam5rX6wRR6iJbSUFGgbzVJLkFQ6DUHLBkgSME",
  "key43": "5qEshJHbFZTmnuK82mdmb6yasvDrmKXv61HehnK6WYHofRimvv3cX1n67ZsTvK1ehqqfDpziFnprKVZJXoyhduuS",
  "key44": "67SXkoQQ9BkxQbnoxFSiHhhNMk1UvAELtTDprCY6puFQSWCStiCf9uYe17BuhBMJLGaZHz8QvWahyH3x5GR7VBuP",
  "key45": "3ejiHuZQyHq6yW5L8JGBhJbFSSkirchBYsWEGN9MyJC6LNEKvDFofWz9AfHCen1o3zV1cByDqjnXQKCe9mNMQzaV",
  "key46": "5R131PjCbVM9RLryn7F6EyV3V9qjEKBdVwaj9nSxGKsFQvggybESkKtZXF9wv4THCXpSnCAZzPADMxh89UivbbLX",
  "key47": "2avu6VDNFbcupYamvb9JwxkW23j8xUK1mn2uxxA6AmWCVaNn32zRxzS8FAZDLRffR35SfhogtS8vXdCwKnefiNF3"
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
