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
    "3kuBXKtGhTNAiPwvhuBKMjEaDemYgmN4Dz9Grig9QzYXJtvTYFW96w1oEDFwzMxY8gmR7iQGoauHReWsgh7yeBiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v9E9wakuJQUb9n7Fo9aBsQJBNPJm6drvFzY616RMHQqo289BhWhceqeVjMK3AUABBxm6qx6WGK7zdw24ucATBKF",
  "key1": "3148M2fE8S81dnRRHCNWa3Tqr34Ehn8io7NH5W9jxz8AxnALuwj2pNiai8ztsqDB24N2VnrBnbtFBnMeeD4KbaWm",
  "key2": "2DitW8oeB8Qd5bikyYftb77MPC5Lrrmi1GztEzKscLuJSofKvsrXkeFu9NU75YSBAdjPttXjzAayuHwHvmq9wDet",
  "key3": "42SaLXVD4ygGp2cMenLdYw3oPpqWXf1BmkqHeua2D7jYf7Fimo2zkgYAE95mw5vGg4dSfDeabCAjrK64pWkCw1ka",
  "key4": "5JUkZqJx9iEmC2pPRR9ZnJWSJKGcd2s1P66r9GL8KRre56EgidbW1prXQRk7Fu2gNA6bxeWxjgCo3uL7EaZcHdoY",
  "key5": "PG8qNCGDcDrDeu47fz4gNCHDRtFP368JGeVE4Zx36HDXmibt54ZcUe8M2vLgr7ve6jafiLCFE5phEJF5EHq3aFr",
  "key6": "2kagrPwuVkKAGYKMPigFMYXC1gjFKc2iUfFCJ2NTyZo8LU4UFF5SB1dEGTAi65VNeWQBDpuYb7vpqvzqNNBDH3uG",
  "key7": "2gfUFxdp72bLZwywg11fhgt68fCx7ktcaPyrNasyhWo6qL59VUqdKE572njtK4RRbcxLcMLvVHXkZA4XbP3mr1Wm",
  "key8": "4FGeCmz3THsWec4EvdqTgnQgEw8fGGY3TYtkVajDEUXCpM4V5GaNYMpcfSuFXR2orHxR8WmS3W5ZKRRJDnPDwJNZ",
  "key9": "5kjYpUkPuGxQyECbXzgMFSR3qEHVys2SGByxtV3uj97p9j6Ev6JS17GgD9EWtFFkECJ8pgp2By9djjTDUeEWuZ7q",
  "key10": "4C4pskUsyjM14hC7wkjQi9GABJPMAGJbj2fY5akXw19YB1sXKrVmkdfUEAjjkgHt2FekWC82Wz2DaCQoCp3ok5RL",
  "key11": "ENutur3qHVpomB7Wfq1Kq2VvuAQKPxRAgKrBz8tDBt1NvCjSgsx49F9VbfQZB62W6qmaY1UtWv9vSjry3pLWWvs",
  "key12": "3B8sTVu7G1cVdDbosniMVmTr6WjRmB2DpJpatBNN79cyB27vJFH1D8NtjgvKX2gWkf7iDvr1dp9KvhewEg2nD9oK",
  "key13": "3S7tg38Bs3pEFkfr4wTCoomeG8JN6291fBqcMpnfdqZtjRPsJaZ73BrBTGeGhnXvgEEFEAwiRp8msdwS97Qjtem6",
  "key14": "4MGRa31J1dJJFBGoVCQLA9Z6jwkNqRVmWUcJ3XczuXYK8SnQ5Aksz43Am7keJREEgbA3vogwbceqMPTMt1Z7BwZh",
  "key15": "5LrCpARwZGnfyt1pj3bV2HL6sYuLiXAPnXRcBmQqcTjgkYUNRnaApesg79GNdbV7C8eNcoVKiFkRVtCYXhnv7XCr",
  "key16": "5SkDWQT37qAJVpQm92ECdKty7AUVdc839VcEPhVs7mdMePrn5AGtR3YLLjn4XMfNda7SDa5QR13iaY8aYnsrpJhR",
  "key17": "4nJhMAeHXvLE7YDRpxqaRXthzJFxa8sSvX68mXWnpun4R1y2AaPh9YS5G66vy5cifbWvzscsJxviRiAZHo9zahDf",
  "key18": "2kJu4WCuLRVj2taW814B97q1W8MFfaFXpS8CrzhnRydhtDBwivKuR8hAmSoJ3WP1gAQTTUfZYThBrgv5dw5sh6jq",
  "key19": "vFBDZFUSV3sj59LrCt495k6sqSGkskMLo98q6fVqKTsPLN6Nw6AFzyDW5QEwCrtvnF3zeaoVh4dTQuU4KKhbpu7",
  "key20": "uDSkQgv9fdbcQBjSSbt5dhhpaE8TEMCJbmrYiiW8jHieW2Y6GACBp6VcLDt7sk3918inx4YfgXXR92bvJrgDq2t",
  "key21": "46MPUsFWRmtimgP21kj4FZzrKwCzx8VBn6ypkUawSFZR8TpqAkdMbPskrqKX5SqfkbW95KboA6mVFumk9fetcRC1",
  "key22": "3DoSRowGrZuV1ZBY4ffuh826HKe5494VphQmyB28o7GFMZ9TFMeRBhc4URXMfT3fCjJG84SAXQ1vwFohMFFdfZJk",
  "key23": "5NCq58AFMHjUChV2dbTR4WWo91pzz62Q2ujDrLoKSYPvGWnGrBVTuGExRCazw1ho98FwivhPUQ2E9pnboCLGCmKg",
  "key24": "4BhjTmfbzpCNwGo3ErhKV4EK2YE35nnGfMeck5HCWVEaAuV5ekS61JJBy3STpJ1FrAvK92zyiNUhEWuPSe2aJDkm",
  "key25": "3Yu7VgG3p68DS1CX6tJxU1jcPMFmim99VPRpWWmGDrtjgr6MNM3wqU1Qih5voTQZHF3xiX54GU7BKrLTPa93iK62",
  "key26": "5FstLhw2PoaUPFgiKFj3L83BCXnTTFmfPPqBiT7QiADxwR4pMEjEuYUKH9Gugu2q48nxNttB8fKd3ZzzFwuGPgBW",
  "key27": "3hLp8tn9emX4MNzgmXJ4WBRqJTUY8icjgrwRn3wvrn4zXekbbd31QNcfwBWy8CxZsA2uZcm4hZxSECWrcsAFAJgM",
  "key28": "3xSbAoAGhphXvD8hXou52mVfwwAWoSPeqj2JXaxkDLzo6o8c1SQeqKzeTLyoATYzfawX2wt1oYfZn3AU82d7j1Qj",
  "key29": "2mTxRBghDnkiqBM9P7Fek1Lwk6G3mYwVKEdztV1NqgJLaZE7qkd14c2EypADUsdQp8ZUm7vHgRff3QUzrUMr6tKk",
  "key30": "RJiJ6Dje9Lna9QxEvu68LjbJ1hvZVWT7NGg8R3Z3QQv74wRTWn6CdKnbBrQbzr5X8Hok8BYgadgFM5wRuTKaWDE",
  "key31": "24QuNwwTT2VW1PDCCZHg8WvVuSpCxe1WEiN6ESBVGcqXTmj52Q3yPcNMuZqXPQdGcv8VQ9cHCjCbCdRz2fQzi3cK",
  "key32": "2SndGjsxsY4ed9Lezg3MZc6LYjJ71eKtK2ggHCPcA2kpE8pzj2xZXHMAfxooAptRwevSNd49v84MfDXzPXVv8idm",
  "key33": "356pFkvhkRmjDm2y4e35BrbnFXUZwpNs2zjYkUsiR3rokVBALfBuVWHdnhoL4Q3P2HbXwxGKCsNRdN3BmChJMWYV",
  "key34": "4DrAaFr6cgBoXSo6mQBCAWNmD2L8RuNQffaYchL7o1Ly7zBu9b1qMcYxnqMHWzAH1ixLXYY8BjWcMJdgmy4yfdi1",
  "key35": "3EUoXHUKCUq2v9xJ7iTTh3m5RbTCnZpYwifxwcUKTS4Y9QQneWC1poBxBugosNZchz7ny4hFdf1mzchJyZqW1QS3",
  "key36": "3W1dY851rFtjgnYUBCBgdv5arCbby768tphjxa9FTKurD7GvRfJtvocMGeBGmpdtAAjwb2fLMuVPqnhza1rzNyXS",
  "key37": "5EXgBHRcEsQR9gaNhjD8Ad2B3g2cuy3H8zJ7jbjGZkwNW5MYC1KCHCT7gZbEDUtT8TRmzKZzQnhuxohkrFN7Bgtr",
  "key38": "2E4TWZFkzWD1TP8SoHBipFZnyhU2qC7hDAQAUdJSg3JsFCrNiRPeQG7zgAerPXjX97GdZpijtBmpdjYR6WohEYdJ",
  "key39": "3J5GmsN65GQ1qCBMbL3NDVYZFyDQXKEQsjeV3xMBjAbu3mFhSc6VgPrjX4Jn6zwNcDLnYc6GQnKwjEXjNxhcxJPQ",
  "key40": "5y2q7B7MkeGJsa8tzCrfdhMvb3pZktSzHowudgJzqkcMqdNLa2g5qUPBXF7fqqutu8MuyBoJTUs11S163eywUoNU",
  "key41": "pcxi3SYhdD86Hr1vVEbvqj7nwb1kY5nwFy33Dr1HFAEXgumimHHYbfuo6uwbS4o9jSLUiftqwUfFwBeJbifBgxY",
  "key42": "aA8VQDJ4kGHs9GVbWMG928aayykf9y5c6ouR7Qpb93ECsi6HZKFmaDWdeX3Q93CVVFiy7accEbJ8Lpqe1Y3VeRe",
  "key43": "5aiwSMW6aYhTdy7vNL6E2thUwUm9X3M4cZsQk4wYWgtxuTuBp7J4i4MeLiNSTMMk1DtjMyaWb97Jpm97DNY34URk",
  "key44": "4VFoyuRYEy3y96FmHPjBsmHLLHJ2V73txpxAfKiTjbb9uLqmLHE4tdXPkQ1KdgvzHvGiTvR2dgEEfbMbx1skyPwT"
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
