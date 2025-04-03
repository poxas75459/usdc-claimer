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
    "41LV4rtmwV2czbVGRFvvxN3G9timtA4fVzHgtuBgoqYg8QdkBtVLzoFraL2bgVgrFzwaWKS1Y1G4SJhFA8pishDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SZ285qzHBDpbZFxRDuo54Ycsu8dAFxN4DwCggpyUdXroCCbnQNuDb3Nmd39V6z2zirDfEqTRVr6At4e4uHaCSgd",
  "key1": "45qUJoCuC1ABy2XVMbdQ9UX1BCMxGCcywPBWFAwcpbD8CaN9H1K6KRFDesAyEbkG3yjzN4ps7M4zMpXpuyoHRKMj",
  "key2": "KL7tF1hjmz4we9hRtiQfaASWfCrpB5AMUhbruvAxGgg1A7RZagJenvyJn6uVvfV2XiXLAB7hDEC2UUrLL59kVmD",
  "key3": "624hwpBxzkAQZKxi2WTL7zPZvZzhecwarCYPjKvJCqDAvBgKWGxoCkHu2pwJSn5FVZGVRMdsVVdiQ9dEXvqe2hG6",
  "key4": "3nrBidogRNv6qN4cLaLhftPS83ekb7KnoFvHwjhKeeScJnfBjZ3yoCy6B5DUPETVsDkh88sLHCH9hkAskFBi18bh",
  "key5": "52mG6AAkrWYKEvE6HKKZ3XuR651FSSL9Neestuu3V2PjaKBE45BVg2mFteVfxEgAFesbFXtfRC2fjdCoKHre3dtz",
  "key6": "4NPDNGYGQeAByt943kWEMz8WjttkwDoSg1g6J7wMf1HZ5zL1s6zpv6BpLXsfmwcgz37oU5HeCY4K5KxFwYPtn2YM",
  "key7": "agjDyp22PxzK9ARoQ7oE4eXGJEg5pQj3J33VHfvMbXcQeVhH8RXtTESjL6dC1VQXYce1j2uU8dKNyDcZqirabF5",
  "key8": "3LugSB6b2J8uHTnLtqS1h3EdUqS8PxEVssuEeJUPamBTyrCESvwvSWfsancECADyRQe8eo5nxzbn9DzfqoLxyggc",
  "key9": "2Q9LUj6KBVNzJ9qWNw1yrPgMG5E8T4QC7mQ4BYGY6TMXVBGefeWtWNuj7H85mHxvYXNJVqGGKHcgHzzXhQ2Mjsxm",
  "key10": "4Dn4Tnk5c6ujfYmksnWbAgfbSk2yCjHQL6BF4n7cNwznuvC9wrsVQXYGwDApi9z9z6sPT9rM5aqYALQK4zGa9om",
  "key11": "4tx2AbLCRvmDtaG1tKB8S7UG5Vs729JE2axpQQgPnSQFqHb5o4prT17HczQ5exeTyvmU6wsCkFUBxgWtZbUNXBpN",
  "key12": "XKtUFV5FGWRnJgKvZGNZWVgBx6p8cbWV6YiZqy7oGTstF9Cqtrb1A4BNyZRtajyCZvXAsm19eeaZtmeXHDL69UA",
  "key13": "5eb8snQUCqpxmUEKaR2cHeGgXmKzbzk4SwuKzzDVaD2wWPSTH5xRDVn9RpbJUNtncdHMhBLGEBoRsQrRLrrniGFv",
  "key14": "3V4cjM4yobEyTg4yzrHsE2z7zr4fooCdLrqZiDunii2Lhca2pNA5bHUBP9AqKigwJuMq1fk7uUxgUbGGqQLromu5",
  "key15": "2JARBMsQXMm5SSKD8ZZpFPfLGzQY5JcoCSgCrJ4bcQskpG1MN8CPx27XZr6aQMacqtxuSe5CEVVTvj2N61KhU5tb",
  "key16": "2UCDYk2M1vPbw7UEtfQB5k7KRj9oNNu14ofY6jbVXcZXcC9aCaEPRzeef9njM4MxS1Z46fm4gaZiH3nmz8ewWjbV",
  "key17": "5QJEAUi8BHFkzYFNKr5id2xENUZwKeX9J7z6y5szzSHCXKM8XGnygM59eeSmTn8sGye5nZVbuFGZ7Cw7oaqQGG6q",
  "key18": "47MauQmWkf7ZSKZx3t2pmJ2s4qFskrft8NWfzmBUbAjT2hXgCqUkHV1e9EPA6ZAFNUg1GtZ8BC1pEvC78uBRfdmp",
  "key19": "5jqBFJcNYdqiJxm5RHfi8nJsqDDHAGFYXDfLHXQzRt9qjNsAJYSLRrdMxV6QXS6UvWZE3hLsMPtvQdS6FrULU2b8",
  "key20": "5DDifuXKCqbRxP5ebqfkzZwxawJwBBb4hHyCzcpMG1Z4jysny8X2SUBjxppcNE7qUwKPFN1fjLfmMdiNhS45TQfh",
  "key21": "3NvoCPKgzzpmSM9F9yfRe3u5FiosQwzzXPt9PnovpZoD8oUgvdL69HSZZEFw9RqQgTAnCDTkghcQiBw3tgn93er3",
  "key22": "62Q2jFdCVcDdV3PvaHW83GZXBqGC4xEhQWpMkPHyR4QcgbjMJgyKguf9FtqtBo9FiRFm76Xg2Gama7KBtoAdmkRS",
  "key23": "5m3uvnDZcA2echiL5iLAKrqAa5ZKycCA4dSEB4HD3nSL6gjBiA4DtsGG5YdrLtHS2qsSCchjGbhbEpMC2nXYpGTn",
  "key24": "25TFg42JPFFrj1KxL463K8Q659SwJBYrXvNYvYWfAreZvZ3P7DFWiNAbydAib2ZPYxnb3gdMt2vgKYE3jDfrRVNA",
  "key25": "4eL1xo6igawsu27TH2Xs7mU6s1vLG88eTVi3QjUDovjDSek3JfF2EcJpA1Se53LSPn7aG6yoeVqRzmSo8F4iL2zj",
  "key26": "2CFo6bFCjFpXbTjgm6RnmrLFQ1kF9Z5ZPL67UZDBFesXcbJVLYaNxQfA8WmHN5YGCBZVbcrmYeETo3Ckb64RFMTZ",
  "key27": "272f8XukfLUsCDgMshBwZpx2V3TD147epMCd8BJ9VVFTCpur7Ma3DagfXMDycnHBTqZRkBe8TMQQZvPqpue3EQzh",
  "key28": "2G9f6FFu6HQ5CQqeKVychHsRtvi84r3ML4gF4ZEaoa2esuScAPpo72BduhkmE9VXM4H8vAyfhE5hFxsYibfcP3yL",
  "key29": "4xqS3ErVp1edDCPm9H9epxJyinrQDPqT13shNLR2Ztd6LqbY2125ydztoXEt6uKdzUK2dHVVrLuqjhixYFwhxuP4",
  "key30": "kxLrB4Vatj4BuTJUQJEAH41SBmP81GTYC7P69AsyNxJZM4WBf9acLZVbfM8oDDX1MSCXK4Sq7ZcHsaHmCdKtSA3",
  "key31": "44gugFGm3Xhp1iLEmWEpGe8yeJmqiaYarvTxzomoCLMkiCGe222dHZocsDPdP6vhh1xdAnCu8xB2wyP8cLMtQ1T6",
  "key32": "58hTtj4iJ3a51rmJPGCgQQADYdw6KxZvJ3bJeriuZHiCScvF6v5bUKU3AYvmtq77qpq7XkfabMJpAShqtk9kehx7",
  "key33": "2K4LmGxjT2p1oBG4RtSM8RBh3o7pKtMALySKGcD6tyqiLpeRWS8Nv9MhXKz7Hsra9UFp2RZvXDDRd9UPrBZgYHK2",
  "key34": "65BLzVLCjNCYwJiQ1ZPFwC7dcrjff3wREtU2wpvKu4Af8aqDEG594uUPvmsV8XdDMDsCSgMCQqYAz4dkMJd2TLLN",
  "key35": "4bArRcM53x98EYwqT5HQwioZA1v5eYNxcHnJPkFoMHkhn1k7A8uSr3zbXgBj6ggacXNwDL8FveHvrb82WC4waxmK",
  "key36": "2RZVARMxzQtNn9ZMiaTE7H4L4nTyxJmyLEo5CsvBeNanaszEWxxGw1vBzjq4XdDFAbzzfg38wR9NHq5K25wmvPZb",
  "key37": "PQCVju3yKkGGLUe5fVVXvmvy4ffpCqi8ob5bt3TQRCnuJUuf7Txywpjju2eAtrSnFz11ivKFMzxinYigLAeATG6",
  "key38": "4f1KfMfgZCi1CvPUaj5NNa1J8kz8ZdHy5b492o78ibqK7g7X8Xf8zWNYAVDsmukLHVQAvuCRQ5fDDdCUQSNAyNEs",
  "key39": "4bQkwYJwUioEDz7ywNj1WTd8nyTG6Hz8tCoviscqgLiNBouwYnQ84Gs9DwXtdD5xBkLnnDgGh9AqzK84cZ2LkmWp"
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
