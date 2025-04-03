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
    "3XJsFAsYAdwTN1f1JS5idRfHMB3bh8bJ4SMdDmR1inuGVyETRHSxXiCBrqmWWkeKupcNMy6x1WRFM9GCMPA764iu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ziy2sVqabog1Pt2tUmsKKK9QKTPiDRCkZtQPPYzu8n7rcjFVHJxTV62Tf3ivDSdUiAZ3pCbduMAssMjFHKipML",
  "key1": "g8R3pzpP7Cm7D94jjehL8jVY3ZG8zje36ySxAY8fSP3dSYBcxFpaToHDbTHxLekDMBE38zJyHVqb9sb2HSmST1A",
  "key2": "63vHtGHjnd4MrYjnYFDfghSuJMZnZwWmz6fG8TLwnh66d9BBotPEBMqnAVaSzCfwe8JtSTkcuhgnmgMjwn64QpdS",
  "key3": "2YSuDAYW4MzwbAPXkCgADDCmobqHxfRxJHxWETNqNNNicUpK8oFh6mx3dnxUMxGjkuxqtYbS6g4qN7j1PpFshdSx",
  "key4": "3v8dTyLMCbiNqKSup9D1bNHfiTq7EoLKyiE39vTAiZ3JvevVLgkfYeHYqQEVE7S4RzwNX6zdZ666QTTpcMDyivhu",
  "key5": "27MfsFg4L6bRpKKSd8CU9524wJmRivVQd8iZy11Rf6WvVcfQBeS8cK3vMzxu9nES1efYp5VZesQRsJ6od1zdE6XY",
  "key6": "Ae9gkhucVHnUUeYuZxaGiFo87zTWsn1KpvsXJsxwp35QPEquWbQRhkQdYE1NVAD1jwjRNfXspNtwAZ8HiKHhixU",
  "key7": "64SSounNfvf2FCSCaqAY4oeia4dccE9XtEWexTvsTVUWEvDZGA2GK87KPHk2ChxBxYNhW97ykVS1RmUeR8Na9mXJ",
  "key8": "3VHxjQgVAUneZEtXxR2kSErjoKhfmx8C9UizQcmbpFCmpST4otfu2PKpwFsXaoiRZTaV6sLjMcwecAvwA3rWMruJ",
  "key9": "4mTPJEVfYcCgNpiLSdnG8jJnxBiLCV5qpGoHGeFMCn5giaFHuK8tT3ZaZAS5gNehDnoeDEBTetEkd9VvuRWaBRjY",
  "key10": "52juevEVd8Sy4TaB3rm3wKQxgHCKiPxMwRBknnHhMUw87RdAH1x6eetgjxYcpvb5x2yxAj1Hizt7zoFS6bwxMw3y",
  "key11": "53iBQ3kcCFRsMiJWg5ndK4ANhvyuoqCoaFAA3W9wvRsSK14Kk21ZD37MzVVxMyfRojn7vujkDJawJJRRyV4sUvoq",
  "key12": "4QNK4bZdJg2E8T4g58MdGymfkNQ65nixEjptEZt7U53PwCo2Mwt5VTen7cJpoDSpYfsWrQUCWH6jeN4kgiySjThR",
  "key13": "3dFYvBtTtQGKhtqJqCr9Li83m6xmgXbn4i6v53uZ6ZhnJACehgKmgtqekGy6fv6QBEuriPf4iHHyxGtw5C4uMo9P",
  "key14": "2FTagi4AxnCmPvVCzQ3RGkeXNfGzD8aGSoWPbt4L8TmG5rRc9YmN1jMvx7N5AUtTa1VSN5MbRrjfawJWxTdmAuZQ",
  "key15": "cGNNLUQrAoHrCoGqywFzfcp97qiVnSLZ2hP6mwgxs4LdeR9C7ZRG1pBwCgsGf7xxJugp5S4Qsesi15SUW1ztA4q",
  "key16": "52pUbFJi14MtcfidxMaLtT9JQGYAeGiy63uaMAutVMhAKnghyLgCebdHhx1ovACtCUtpPAWgsDUCK5rp6jioBNAg",
  "key17": "2qEYcZkok77zZP9YNRa3hsCgCrK4kQcTnjrWtq45awUQ5C6KjTWX49tfio72hGgxL5xhWwrecjA7ymAweEbFsrJz",
  "key18": "DUTdYLCi9AWcndKQgWmqrLJ7SZvR81433c1NamSffBiMrQFKtcbKWj8o2wPv4d5HwXinDZkFbw6JVeMKYpebNKA",
  "key19": "495aha8kh12D65FPAQrigBvxzx2TKrKTC5e29k8subpZD8eUppg267aNmE7hL4ePo9c4arMJAUkGvQVjCadXCFk4",
  "key20": "eMUvNZ6bt7GUppK4vEKZmeYqHBeyAwq9bqy3ETVD7bGud1HHYLW5FVitaU9f6NA1HUT8EwJRMLdYzyFkLzWdf6V",
  "key21": "62c3saddUKeH12xdUquLWyZQZwexku4c6Gqw69oCpCBeYGG8A6pfsstaihU1MR36fSWaNEWfZTYzwxnBgPyKHdPp",
  "key22": "3LB7xpgn6CmFZ4aAVwoJFHEbjPh9MPxQXkNEBUDWitCt1JAfvkn5soti73T1ag1GCrysKNojeXLGMNdP746tMGS2",
  "key23": "3WKe4Anio3Y2mDY8U2hd5DWm3RvTcZZgZQ8EMBidyRVLyf6a4dU2XB8NS8nMiTbteJUuwYYskTeANT3GxAGWbe5b",
  "key24": "3qDuHTnooPABb4iJ1WvaWFiW4NwmjoQP8EhWxM3b6he2NUyBp661HDsvbw4neFLn2P6oaqQWeaVHpYJRjk94rSGz",
  "key25": "5CuU5Mnem5RXNmZaqbsVw3q1ij634CcndKYmskZN2uVKSy3s3psZ1xMoxuiEJy7gru6ri7RTuQycs6U3L5ntfiQW",
  "key26": "SjQD2zhE7Vqj4GftGhSC4V5mx3xTTeMvXB7UrBPAqcBR9PV753BgQEC3RspdVYxE8gwn9Go9J9EaYZRYheyCVFU",
  "key27": "3ZtsTR9XENTd2zMxYqq192nX2FoxTa6LagJD3H2Mhx9JDjJW9mf15UijyeABCz1vW2CTYNdyWUhT2812KvJQuCAC",
  "key28": "3H4UdQczdNfPRNsZZyqsrbpZvsWuyQr2sKyLA7NWYrkebuKYydXVQ3YHxcs52yxz3SoZJDrQTU1ih7YujYZ1MLJj",
  "key29": "4NgBfBAPoJRxsQw7d9smq9kq5PMLNxmS8T4wgGTZU9vkT6UqzQi7NS6fuCJ2CbRiTJjYa7Hr8aWn9ATJ886pyNWd",
  "key30": "5i4Rhu23nx8MdBGwz187NSHqRVL2Xys7bUmwJGuxR3Djfh9xPieNawymhERbSJwfZ9Le3gwcGNP3EXEX52svaTz3",
  "key31": "61dz9G4pfTpuXQpEfWNGUw6QH9gdiFVNL7P3nzhgbfCyrjmHpEpXzX1cmwh7guMug9foiKoMTyK18FxWk7Tq9AtV",
  "key32": "3a6hqW26M1o3vr6fGLKKxbUjtmu6QSYVgREYCMD9R7wTYNaR4ge7fmrruAJSpuz4is6cPcqvrFYzqHKsDRhx2JM4",
  "key33": "hm4p42CJcv25zAEYzVYxWjudHvjM1adyAtwgGd6TbY5SjPE1qX3W4apJvr9XYwEcsVgoRqqpJJAyJPx8QJ4Bouu",
  "key34": "5nnduQpe86GAWDBHn7ER9LMoym8aPcw1EPCFfRMdkGyMd4oZ27Em4YWhBsw4eYNrNXrzSEiQysifqwawkHgebsJY",
  "key35": "5nFQyU28imLBDYjdcBjJYpsi2HGxRUwrt62PeuhVtjLJEs3WtNVFELDChrx4heqp9FVfeiUsUoZmMDZmcoazZ76B"
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
