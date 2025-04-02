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
    "2eoJo1gcEZ7M2HsHjSS4ADqoEYtaJK5XUPwCB9bJrsvcSuSjzkvprtbtsV7My49S8xG7ZcXVviCq1bLwZe2Cvepi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tzAswJ8KfwVfZyHi6b34mn53NDqDbBAL9WYuHNnLtuJ5GzSxu66TSWxUwNoefiD1BkhNfBgmEb3iajCGyo53VyP",
  "key1": "5BTcRNh4VV6dHfjEoyRWdGTcXpZwDgLaCVC3U13FDtPZ8KKYBittDnQRMNy5NDTaVdPP2UBA7Tou4oPqvxCzWLY5",
  "key2": "vJWxEbjKArpqf3m1MWR7P4SaAVPzo422NWsjjCbS94XM5ofaBPeowkgcxe81BaAzAuoCPbKifJ9awd1Anp2Hg4q",
  "key3": "61MYJcbt6umGaU82awMHCM6KQHBNAyccZuTCRSdwpQYuv6Ma7pBnKm466r9Cfsmxma1Q9L4Bf1T47pK6tpt6aZ8f",
  "key4": "5TGoMJP9fRdP7vxE6jkwU7GLbWZLmKmvCiiH62XKrGEh5v5TFDairQr3gz1fdyHTBHttMuQEMLMekwrpmN89i1vZ",
  "key5": "2azw3R98RcSoKhTXJ2PbfZ7fbazBfNeWxsJeGkmcmuvfvoLm9e2dzHboHUbzG9Lw5o2zCdJHFUmy7iMN16uivzDB",
  "key6": "5U3AerhBA6oRpb2XgLtgD2KVto1oYhkDdkKfJtXsRWJKyoNyDSsgBEGaVQmi1EjP8V4oG94zfZ7BhfiroqwhpseN",
  "key7": "vA3FdZmDarvWgLTQAMzmyJjTFqBumN9xSFXMwwV68eUnmov6bNCEjHTDXHfSWYnaUwKAX9HR4UjGii64Mos93yh",
  "key8": "2eMUhP3bHWVmvWvBwkYhrEPkw2Q8bQQjy7n4reGqT1uQzhpaRot5Yx4JPG9pUrRufwjWMfUxHM7iRH9NKBxnUY3U",
  "key9": "2CecxRUGEuzi1LtAjJGRnmDWp2KR8a3vEgLPvRGysN297YtE2AZFc5wzAgij8HznKdLGWzRgQ8ae7759EhW8qC5D",
  "key10": "5aiBPJAsCzgWwwA4rLssA9fBUYM8jXrSnxL8WKDpDN3GJkDHaAbaVCyN91Y2axHF38i4LBQk4fVSU5W33G9y2h4F",
  "key11": "4aRefYvyBaz6ZJV34FRwwXrgSm4QWD5AEneG7N3Bb3ZEcEvTkKDzqjf6D9MdJwV1QuhUMXwy3KFYU48RH4tLU4Cn",
  "key12": "3J488sxAhLuUD4BAFi7AHj2Cbe2zyzxtdRXjXyzAW34CGp5AA1oFQefTk86uJznvTUd6Bm9LFcbcj9BMCqULXSaf",
  "key13": "2ajLNc1NrxrHLjMKB5T8EfKvjkJmk9xTJznR5xRb84Zh4uft8EC7cDDdxCVeEucrxTTANMkmnh86wHzeMGpGmR3c",
  "key14": "5bsjXCovb4PpjFFZiBJ1a1UpELuLeNF5hXbWjgV6SYTNuVd4PzFggugDDkgEbWZYUk2HLXfoFWWneHUpybqVoNWC",
  "key15": "3naZAwn9emS2DSpFv3EfqaAqTxJni7RA7ZKgJbyWUPfyNUxhVxxAgjVX4P3wvCYAjrG2EGJBz53e2pY5hKJeDMrN",
  "key16": "4xLa8Hhtyukt8nS6k9sLR3soxLhuxctnBoENKmbGnqERMXYYEz5towp4q5K1sBHsqp8af13Sh9RhTp7TVA1JArzN",
  "key17": "2YwMbxV9sjXYTtyhQLwNuuKGr59UywhbzfuGJjUpoCGVBBVCDuRhPDUojobEQtwqkofJRJw6GcSEmKe8CPMuS5iH",
  "key18": "2Cez6ba1shj3axwwkvbeEkiFd1QCgnKimp3YH3mAN6BgEUusjBQwY5fPV584PAKwqCS53y3Yp9ptoAoBPVmQ8Wot",
  "key19": "26ok38wfAUvVzEcVtmWBfAF9anW8sYbTcqEAuTNVdfUrHxfA8175vLfLkGB3AcMUCGH16RAAXcu37SmvD4BDH4Rj",
  "key20": "5C9BzFQuPH6S6fChP2V8WE2nspRVkpuWrhBz2kJMSSt24WibRaar4YcAakgvS1D1S4DGJSVT1CXUpPzsBVxh99oM",
  "key21": "3smgbTX7waKEHJPV6Quz4qqWZezvX5pWWmUemwihXzVUGdaecy5yiNa4Rsx4ibq5zufGQTdPrTwFysPyQAN9rYX1",
  "key22": "2ARoTbCjifHiVisampni5yPtEkYG4XUShAWr7BrK8Y8zPwMbXFZ4xZMwGDSfvJRGqo7EdWRexJthKYto8o6n8EpC",
  "key23": "5EjwvkVFTJPhQDEzJQJwpNhRrtf7gxD4rA1bMykvG3KhC9cfwazGEo7HEKwSaSQEGSyVTjGbZkAfK4CkuDda25gJ",
  "key24": "wzVbhGYsBA2MPpA1RcG4gT9yMhEaWc4a7FaFC3yDpUEXQFHtBmy3qw8e3xauCYkYNhneLuM9ZKDPdvAAYYudymf",
  "key25": "35PPdAg3kmzC2pzvk6suEwAHh132BMofkqANcqnSRKz44DozkYx2CsQmtRWQHiTmRdqc6UYzZgpNbitpSzWraHCj",
  "key26": "5bbgFQJtY2yjNxSyaL8BZH54aFwZG66dRqa1mKcjNAV6CRuRac7erDJAzw4YWdicY6F1KcAfhidbwgGARfi9qwr2",
  "key27": "4d1JjVi4f2bpyMTFQmv4CtnGkQaZ5pygLk5NsuFAS7vVrsyavioTcz7VwybDLKf3oL93By11WCaEkFnAGgTgk7P9",
  "key28": "hBb15aee3LXnJuc5raDRnyFF91928UPiNx5WBurLTT6Dx8D1xGraEitD2NzZyyL3Sjj2ocXryS1gTRFHLUU86Rt",
  "key29": "3eMAupAgqbjzZ7GWkEUcieWMK5h7byhikHdxDvN5gk6dWn5U2xYv2bbWUQhFCKMtNvDQaVhLvqA7Pm7bnCEBfT42",
  "key30": "46SXRma6Gax5Gsm6F5guPWaicgxxhuNtQsYhxCWhYAB2Q56QTf6a49NqDS8EMtVcB4wDHY8Unfc6jkk36tEHQiZW",
  "key31": "LHN7o5RfyVviCGbsSysum7aDE7Mai2EF7YYyHjhTzFxiDCka4BXLpNCtxVFAwAq1dThET2hR41yXEDBEzUySYPZ",
  "key32": "2ymS9TtRmRvHNDNkUWo9oLSDcvLBeRq9sab6rE5pMJXtkLGCHR9gj4MbCpjFVXZt2gCBeqzNqsgdS8yomNj12Lag",
  "key33": "e642BALCCtGSWTik1xUPhriWrnEzP6fppkZqbNMfo93cwjzhbpRCwEk1J13wawBPvQzRxoWLKRkGvrev5GRGxqV",
  "key34": "2qmnbg9VFge8z7beVvgTzmUz6KnEkUQEV8Q1SN6PKqhEynBYr1pZB4gFfwhL6YzNZ75cC9xfvz9EVRAagZcR192Y",
  "key35": "38miDekfoeAi1MwnifjjSpg1qYTsDodBU6YT7a4owpT8uJZ66C87fLg2mdyE5B75eu9T5UmcJ9bVQkVncetH8KcJ",
  "key36": "35JWpdiChNLGaEeXPULRN5dfZ3gjtYMzG7TzRpDU9RuzgqEcQBZiT7vdkfWF321uqJjnq6scRBp7Gy9kTpgC8SGL",
  "key37": "67PcMjRuQsuR9GAF7UyHRm3LqJaxvEsyJjSWSgc654G2wYgEXJzZdLKvpX4XpXXMuvtm1knpqjxYui2Eu1d9kKMm",
  "key38": "43w7o1EyiqJVZz5kG6kG7wezZpbN8XLkVM7neG39YKj6jZhHUNBTqsmHae9wipaeUVWs4AqQowYrj5deqKtPVTrk",
  "key39": "4ZBGoEd2eX1h52opfccfcqQuK81frZSbDJisXkw1JfHNDie21sWqP9tCMCuDAtX6vyyHoSqzty3TgGDdgisA88AX",
  "key40": "zxK8o5PLdMNikPxfkSJPETU9tbYA1PVbaQTpspUjWVSEiNNpwhoKfLpCETHFBWDxZ7GUv3TwZMHEcUDBCGz5um7",
  "key41": "44QhnMbdBUz2zdubPf1rTos93wr7r34aG3thzu7YMy6wriR2sHVDcbw54KV7MNfMvziezBS5dSkdsJ6kPUAJrAbq"
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
