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
    "5ahzumPEQbUTatYXCDhaRRiJ4hppzrG29dTXBNsxqgHySzeUJiFefvSP6sHC6sWEuSYgNJ2kmTJbpdfWqPXMyGBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "215Wsqf8qFEnDMRTXnWWLSAtRZbzMBUPKbZv2tbgoSMMGtbbH6E948e5WW4rCNDGCpnCoN8Lwhp7QBstFwkC3iMs",
  "key1": "5KSiyuJb77rxUHhjaVADgKXRtJKA1jsf3ypNxBA7D6CP3iQr6roeNNSWHj5BmUGg5jeQtasVcmPCEKjp6X7JGhLj",
  "key2": "4PSicoWFZkZK2b9s2ZsTfEFFWuZE5ZNafJ1N6mfHwrWPqcHVLX7WexneEu7mQ9G6BWnXCm1wZLD4XuL31NJHcVaZ",
  "key3": "51bQk1QxVwtK3wVthz3PKqzA2JdyFXGaHGfdxmRPe2NAee6AD38SrP4U7Xcm1RxxCMN1cHvohDMVwQjJLFNrbeGe",
  "key4": "3BYoaLTMcovoJ2P48P3K22bs8ySJ4zRBCmmGYCUDRT4tKFcKv8B8JPrDFJAejov8qL8wZDCrr8s5DHCVaVTEYw5w",
  "key5": "KQhwY9dnZmFVyBEWRruXbhUJPNKgbVYPjSfHpWW8kPj4wcobsEPrAh9gTUimap96RJmzjjfjd9f8hJHLZzTRRLc",
  "key6": "2mQpgFz7DLqKLobBKW8eqsEW13NvTQZ7afAsapZbGkkm8PPWAJuEhYGxobrkk2JaWfcbBsgmuqyan3YJg11LjmoD",
  "key7": "65zorTWQkUgicvgj68CtK17QcE5VqZ6ZmMPvXuKwffaW4fRtceeUtqvythaG8FdhZGxx59jrC976cL6EYpDQ2Tcv",
  "key8": "3QW4A6P1kZcTiEpjzXDpQRPwdRCeFGTTYfNSbsfLx4qXqyDyMkgp47sBms5YmS5vNpm5bYgc5NTJ9FEcDmh66CCc",
  "key9": "RdSPmzRbwBUMgfpUkEgsWXZTTF2LRH7wGuPd5HgR6onKDWfhMvDezu6Znwv7FvT1fxs9LrZjWxZhNQuvbTxF1ko",
  "key10": "4X1spU8bLZLyg7xbs3Yij6epxjvYPf9icUQtecu4cBaJV8U5ATf7jntiBtbrkxESTs1uxi3anAQCp4NrUqxdXY9v",
  "key11": "4j45vCuJ6AakSxdSNXBYAYDeJcZ3aW4dA7z3dtzAYc7AArZMNeXBfxFub7s1ibzQJ3y5H6sAcK32MBTHrofVVPjX",
  "key12": "2S2KVHwWq3yPd5WrxanctJgCoqKQXYfHULapFwxjaUV4CYWpgCTqXVDCASXaqr8PChqANv8h3TGXo5XcV4sYzkkx",
  "key13": "2MmnEcMpEePSc24ixdjhRCuxddiuHrwvruJYDEhrRuGVp691jRSQSuZzB7GLtszHhMSDCFsQSkMkpKvy7h2cC5cz",
  "key14": "3mRz3DPPrxpM3Z6T2AMRsKJKDJvHWMSneqpjX7QerzV5ZNGoRpCrWnTxAEGpRseUxm14UFf8jMgmL4WUnhWzCARn",
  "key15": "5RFutv1NPVKz5RQ9CqT4HxCttXq1hLNxR84qm4aTFeeuWZTD42CCc6CkT1ShUNJpSYYo7zXzKQTMR25xi6N7bzUQ",
  "key16": "3ZoAmwWeLC8gCv9nqZrQo41VbGrm6mWmb9kKnhzJwRPdGBKQeETsXWLCcEfUh4WwxWaGHBnEs4HxdXPTvKzX7iDs",
  "key17": "31WLiK3Gw3YjeevvFbJn4j6ewMoKK25AXxpyphA1dGPUMLQjzykxkTZsrcX3u5L9DnjcU232dLqpEa1mDqD1tV8r",
  "key18": "3z4Bo46qd3vgL8z33LyhKJVLk6BQJbojapbWf84Pke9up8rWKLtcqayAuxa4qD7bMVbW8NzQxNTqcJ6u8xJQ4aUD",
  "key19": "4eBTNDshaREQHQ9gkFGNZonSapJVc4tb8Capi6phbP2Yd7BV8DytwDaCm7VLubDoUDYRVHp1NTgsJ35BCH8JxKGF",
  "key20": "54LDuGTPeRLZkgiTjkbB1ShEsFU8yPbwJ1QkWJvbuxeLagyEyB1mJTjXDu5Gwf7NNNWm2JDdZP7YJQHxe598bhDt",
  "key21": "5yPCzD13NWa4xFNihKeYHneiagbYc6Mj37wHTLQzFs73CK5Q8MKkoUH1hmxo7MzEwvDDcG3aJNGcEYbZjWSh5Zds",
  "key22": "EYnE2xrZS2J4Y6tkrqjZNDiEqpUAB2ys8zMKxAdYFsBvpUf5VL4YU9YspWVradthvqEUGYEatsoVamd3D4ZXoh8",
  "key23": "2KEHs4xaKUVTkwjpEYENqjbXWy2qPz47UcCq9AAkdYVjVkAUpzYF4PcWoL5awvNRxLpBAioVnCRoKgScRTJR7Kqz",
  "key24": "5ffbSrzLfVk8NFeHppn98T5tSJoDJHNAfrNjPGmGM865aadEwVsYnKoZ7vpsRUUxNmueLNrtfizmeBjq147e7xqM",
  "key25": "65y2zBL9Vc1d73Dz3HMzKQbfkbr9MNENkq1bM5qXKgMfhjnF7xkdit9YmbrwvXS5RYPLj23trmEUHQHE154ZQ1bA",
  "key26": "3VUSkrbuswEU9LpXzr6qHA3L9d3sjWiniWf579FERvPVn5X29BRyhGvkJ3Hk3iEmkRiZLUehDjCBD6G9Njp31LJx",
  "key27": "3VZhpG434kkv4PvgxRea5nuc6DwCYU2ENMH21NQR4hRH7Xbhh9JENKzBCwth78NTpkJEQ8PoqVgvbBJxLNvFNRRn",
  "key28": "5J6JmBK3AZft9pVpnqwZURrhudLf2Jd3H5dNgS1mihzxbBgddyVQb4DnMHrKTuXDy6k6XGLE5NgEqxUsXEjJijho",
  "key29": "3mPEFMZWg5gucCR4i8sLe6fHEPzE2TmsXR4mfFAizJSgfakFFeyv5aHV1rUzL5YU2DJ34LTZa1eFPnLDBRh92FCh",
  "key30": "3M5TyxXFpRxkws9VCse7xHd2eyc5M7ZHv5HBQGt1UcS4MKvqHmoi3D1HApF2m9TqAbN3u8dPxaXU9H4jVrjYBXXY",
  "key31": "2ZohsFWmQR85T6yF3WLKyDpc9muqFtKh5MfL5KB978eZ5ga2W6h5KtrATJiSdGJFDqbRT1UGPhQWYCvD4ZHTKezc",
  "key32": "45EBpivrzFdrD5bSgmXsjyvznHZpjrxfK2gqR4iV3BqdLhZ913m6dMxtNZ2aaQCQsx3xCaWmtrkdzZMoyWuCZ9yV"
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
