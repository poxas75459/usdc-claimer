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
    "5Z6UkrY2vdcp9St3dvXVpkupHTjii63g6VAZn1h7nU4epr5FmmQkFvsTVjHRqe2WFsJYHkoo2rsyMGxmQUa9vQuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rwfZ3ekBW9a44q4U5RHtbK73pYUjLQKoenDfL6MiasKGGSyrN5jpotaTkjZ7KswvNYLYDUf9VjmsCYQatk3qWqR",
  "key1": "W5mC5VQfHpRz9ZwVcwmywRsBapMgjrS2GrUJsFR24LPMUNkJAH7ot9eTsaWcCMA3KoGYTkxzr2W551RQ2tNxKWC",
  "key2": "3BdiBmUf3jwkLPKBtcsXo6wkCM9WrD2YfH2oVPBpQ9c5WiyB7fv7v4sFG45hX4pS2iboZQEWPHzAc4mRiRC5eRUh",
  "key3": "sQXPCT59RW2rqr78tgDq7LjnuJJaJAQRVVUZhELdDWab6XQcMtTq9LEGq6WkVNtD7GfvswysLUS1vepmPEkD2jX",
  "key4": "5r8TfzuexfWW2xwNyyPQtyU4LHGieQhYybxt1qRAPYYe3LLm9qZ42FtSN9yKADgmWcbZ1ABicoHKNmU3qhKAydYr",
  "key5": "5mDW4QyScEuGdAxAubKQcwH3Q3WV6jvBx1KD2VL9acFpk6Ff3EbNq738cTLEGEGTCr79KZch6yQ2GjNu3Nc2fo3i",
  "key6": "2mNUFCueVrt2ch7hoqKLFVDhosKmRDdEnvaPfAW94nxVYebkYXigY6Pp5hNSaJvwB3S5V66Tkth1yUC6CVCwhtgS",
  "key7": "46PWb7kwx3MWP8uQYqFUrdT3xTnibHYu7ySzBQPPEyUDgNstY5P4jsBSXbKR36Zaa8tysbEBgE3kiG83qFwKn2ub",
  "key8": "2e1iq365GVSgQMigZkfGHnPDVjGDJXppJGw9nJWxxt7coW41T3GjjHSDZ9MbRRyZDuAtrY9uGMnFRzFw111GkeUc",
  "key9": "3XWo8kWHxMDDABhnEm7gakCLCpFCR2WyVNoh3yjfvLqM3T4M64XG4Hx4nwmnYMnzq9VuMyGhQL5irXfmk39UHCF3",
  "key10": "2V3zoBXDpKYbVu68JKwL7rmUHnpXWnLQ5HdcvHJLVAPxxxwdYYfNoAFeo41KYmkRdAu3XkUXfH4QhpudattBGNmv",
  "key11": "fmmQFqFxgAGwr8egt9qtYaJmGY5Ez9an72eTg4L4TjRmqVUSfT6Trt3Ga3mFCwMb82A23sjgN3ET2F6ox5vJ1mc",
  "key12": "xucLyR6bKggnLy9PpyJgcTvXGQMxwsxeKpW3TU5vprQCeTaPLWdJ8sLGCyv7gos6V8bc3W9SUnWZXKjpejKwqT5",
  "key13": "mwg2fY8pyqvnKhUfkRzqmnS9KbkQTWdPT95bLB5e5DSzpVEx4bD8fbPk95dZ4UQVWrkXn1WbR7FnrHwTSouE83h",
  "key14": "CLkhcbD4KE7Ad8KwKeK9HxxYCuNfhPWiyVgdbNkQq5KdiavdMdwkiqeqZBjuBwfRKHBNULPMjygjJFyGgurRniC",
  "key15": "4WttqegasHSgaLWxKZ3F6rpA1iJRCie6zVCfntSjY4ZVokcUoCzijiLEpotNSZ4GzMY9CqL6W9xzhzYPMZw9NtiG",
  "key16": "eecvRVMpvzHrENDHr47xz58XXvj7Br2JS262x3vwbe55ScgXszFW3FGSa3JLAwfLJ1gV6XtUFwnJAsNVU9YTC7o",
  "key17": "4utxmoDNStoRVSKYgp8YjoCNct9XLuAPUePNs2EjiC63gz3voGWRSZxurYknhzXBP78hWnbT4D8P6z6UFDY86gsa",
  "key18": "2LC8AeNarbcaLHUXt9g35sRb5nhsLVtuV7f3qsJX98eUA4DVu7Lm8pjWc7UunEaLNgXnvJQNhHebJ4QPnxgsYMbB",
  "key19": "M7Lex7bY7N2SQzNryFcLijJ8uGWao5SDLcAB3tDtGiqjpw8STJZXdiKtLNFkcNwegKDv1pUxvAWevLfTQtsyUJM",
  "key20": "4t6Ytrzmm8Sn4gm1biN39AJQ7RJ8mxwmuzkGzqTaefxbNwn9YG11UQth1iKReUXz9dDdRDqti64yoJjLqTAFKhdY",
  "key21": "BUhLMzoDX1gJJ1t7ypfz6m4wepJP6crtv8JHVbZkBf4twaHBqiYeK7MYgkms1ayxGH77UARvSHFNPksoFWn544L",
  "key22": "5Ua9dc8sb4XbsPQhzNpZD8GJcZBDrdNTTKPj35YoiTLLDPko5xRNFqqgKdSVPYGUTM2jKRugnLMpEcNgiGwwRFps",
  "key23": "4uaTJ46FDUvxhSfnwTZPgjtTBZPeHxC1CzwWC1TWL33yfTXtB5UsmXnjJQp322LBxj7vDvj6Hxi2AkA3wAug3FVx",
  "key24": "2DijvAFD47QPQSZXtQN3rHRjaYdxVRMr5AQNrdWPBrqMRBkP1xvostoWkJbEirKxS4nuvKNf1RmrFxz7yMDx4ib",
  "key25": "D3XDNUM9C5XsxexDB1DStxXuMwYoB5UNKYVoVHXVhnNWKVDNsJWaJobgwi9EA65E37sQe6Mg8d89V66o8qSBv3v",
  "key26": "2aWvFBdnihrVRZp7AvtAvyS97ERk6KGdYBADnwA7kUPEaEJgjLnTA8oJWZhtSZGNVBD9XBDV7teADHow2VDBxS6g",
  "key27": "6448hM8y1RTZsaMim4LLjfwhTwRyA1FAvvqR6iNMKGNbfAZSx5jp9471kJfKaThMtvDWmzCj4xmt8Rburstm7HoC",
  "key28": "62SxUJD3bUuoyiEyL1TySynhqWkF5juL1yPqduMcU6xWRRU8PCYDg4si9MQHfz9njpcr4Bd646zebEX4a1nSFp5o",
  "key29": "5kVSNaZhcAi9LQyxVEJRP6tFqkfbzAxzi7m4B6dkRwvw4XPDDMAFNRoZmRcDhNN1q5Vyud4DfsvtrLVty6RaaD1q",
  "key30": "5DSJqiKqCvbcvABsvqSqbpW95ot2GLsa7KfdLc1fETZLiVVbYgphutjhXjK72vAx9Jp1SoQh4QxABDQHk4zceGSm",
  "key31": "4EMDTUYNkQcyWJCiZycfPGqXX1xDMNJQoF8H6Pzh36EcGDmK7fXjc2bT3drSHHbDXTuUti85Unv718NrGPhPbgVQ",
  "key32": "64L4mgEkBSRoqUB95pyuzma4aGXkoVDHfgAt2DbdpsVLjU2vumuLEwUR7JZ5yGVdh4FNvakaJgY4DwDUUN6YQXuM",
  "key33": "5y4AjNaBtwnocrUTC3PwduUZqdsJyGTnhqLmyQNE9je1RK71g1DyMydSGzVnSdaadE8Fk6HmnVTC7hNCmGyhrYdv",
  "key34": "eGYPrxwLmPxwv1KzX7nrJMY7jrJfgEoonSHN9z1x3mPpx4csMhC2KNv7ngJ3c9ftUYCY5nPUUvdJ26DWXpneLTi",
  "key35": "3SpbkACnAfXK3Qq2nC3H56D8ueYsZxEiZdcH5swK76LLqpVKRgKte7QoyaP6AkSHkGkozVeFEFbUibAfxEANpBjR",
  "key36": "GNBawTyfo8gvHm9QByFPmv71vhX4amKJyg7WBJ92PtuA1aAciXA63nFjJ3ZRDbMv5F66NSb8DybVaouxBZNQz54",
  "key37": "3ML7o3Mp9eX5V8d9wN7SMuasLjmfiAtZUxwtcNcvd4ZP9ZYJg8VMqcJNpgMyQmyFxPuycJKNimQxy1gmuVvcqNLz",
  "key38": "5X7XvEkkua6Be43GDc3uiP4N22afc4khiVgmQQA6DEaVqmCSaLzghrSixYxDGbntaSi2wCewm6WE8VHZEpf4GhuV",
  "key39": "4FspSvZ3ecujxVWA9C2zH23akBfPSEA15eFqTxT6sSgpGQj6MT6RZi14jxbqBEQDD2ZFUZDYpsCU6qkS9g272iTB",
  "key40": "ugTzYoLrRvmBCwKo1NSxoFLEJPNigLNayGD6XV2WU41H28vKgtFRHDtSx9c1S1PJDfCULfBYwY1fm4CQX2Wygn2",
  "key41": "5rFFEVyJKwYr3AwW33yvcBZC1r7TSxfvcFdoDruFnuTHk4DCbjBFgByx5EDr1EgpARyXUp1p4kRpDwawEMBC98r7",
  "key42": "24HUGp8QW3UH5CgfQeKztQvpQfAbC5YLTBv5fLdHnuiCP8Eqt9eBJixvYTA2NxPPv3T1MpwYtKAKWanqwraV8Snf",
  "key43": "4xzPzFWR2uKDUcMGTydvbs1d2xLkfJxFZSxvSCmMeaaxvKFrnXPw8fVh3gKzW2yHheT724HpnsSsbHcUHpXbyEFX",
  "key44": "hqnMa6PcBYE7F4X2LiP245QRpPTVvdmCrWRu4NrXQzEYUWFmyxxLSgggHTuNJurjXpouXQ1fGkrUnMM9vzCyzkp",
  "key45": "5Jz6AhipkGMao8ne7mRKrqMAbkdtfRCDZYKGGUJuopfsGHNbE7wGkhXJxf4KQSFRtDn4oEk9X6RCsqfbn6QrRBvf",
  "key46": "Eu6ZJXPnX1Us7XDVUAxRV2wEkYEcCbkaA9FVPaGe3Yw9RnkDWhKxgebQ2h2h7rEq6T68sE5Lh3ucY1z7eS3ZrRA",
  "key47": "3eukapRwWfsM5jbFQYCh8YzAguLNoCKrF3QxEux33wVjdyk8cCgtaQD81UG8fW9Yb9FjEVHzSjFfusBz4eZDjoUR",
  "key48": "3kWDG36xgf6qRvzb13vDecidp6itYcSZ5rtNPeAYe8dMKHpQJ46E7Nj2uiZXcfcvdygRwWeauy5NmmsHhn9CCBpR"
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
