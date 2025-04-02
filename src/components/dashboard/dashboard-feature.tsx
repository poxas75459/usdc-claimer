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
    "EqkUQdQ4h4zS9pKPJZwEUvRkvRNHRZE7FBh81HyWr1iQXvKqAphLAJhczZsFXZ4wKf8s3QjWnGZwqo5kYC1oX3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4176Sro9tCTTMsVHDnCmiMaokPQhtbwvBywi5iHTH9UVP4tW2ZDCmeUAvchDAcETTBXckRHD5FR5xz1pnQGBktW2",
  "key1": "25naPzgU6nLwen9P1DvL3WtoM6UecK1RLJXWKwUDXojhH6KwWnTJyZgGMUAtfnRzTxTwZCsqeeHptbRfyCbMoGpi",
  "key2": "46dMt2hb9XYUb2Khd2Lvx1Sn5sS5ZKGJZoFQmiuVG6x3KrRvEWk1bPaDVN4Vp1KUaEkfCzxjpi9b1uMzHph6wd1D",
  "key3": "5KmHrfRm7aipnyi7brTN2CcNtBYwqdYhzvuYBkPpXifKsP9MDPKZvLymiio4KJjSwnWwb6kuAz7CmHNvGWQPUKAQ",
  "key4": "5Zycmninm5GZL2V96dk4KdYDRMkNizr9y6Khzx8Lnr8sx7Fx9g4YFWhnDNSHaxzkH9fytZem1ZUahB4REH3Ju7Gd",
  "key5": "2Y82AVuzrChov6UYikUhxLBgWwJ3hTPYneF3vYMW4nKkCtc86NMLapoUn4zHjeeuJPYeegcFV6qcxAutZZmc9WAD",
  "key6": "3AK8yL6uwXYCwVSiEoU6Ub4h7z69CA5P8G1Qn6ikNrZuLPfCtt2JVpnxD6AxgSAruS9ZLsZghUTMXH7AbHJiw6o9",
  "key7": "3cWj9BnzoMcUPxRhmUGB6yCLfLcyRWEgXPivGip8HFx6Zfu9WwddWToGZDfP8qC3cz3xx8kG3N2j2NBHVAJBpZ4q",
  "key8": "3dMu9XMYd71mWmADyffCDCayMAKx7jqWVbtMyLgRQt2TXg1YV61L2t9H2KftBT2NYsXmPSLhWAdgHJ8BUSMQCNnQ",
  "key9": "2qWchbZDMTHAis2kmgnjomdUNqR1NJadmZH4L7hoChcepe1ZJiknZsNtpBDki3c7PHCSkDpMxi3dtMe5NPJLwgsi",
  "key10": "JcehpG2ZbekDshyxMFhZRj5FuCRbxATbpPRGahUmDxHr8UgN7ypnqpi7RcAH7GLy4GeQeJkG6VSGSMWLrJhvrGP",
  "key11": "4evibdfzE3bTFBiH8RvBq1gPy7D4QW3Kg7iiDZ4nURTThowkkGTPPATgoGJCuCgRVfw2e3PB1YgAZKmEnc8cJbrw",
  "key12": "3Css3q6zVR5BcK3t98otxyQm1uD219zNXKKpMmgQ3AU77q3cewSB7FBfnBssLxAtByk3REqt3v5KSdGdBYTH5FkS",
  "key13": "4j2q3tXmtMsNBndfjXYwrpu29M8hZ4T5vZmXFLBkn1h8LLeXCN1TG1wemPADnmPqGGpoZQDAZqnd6TAWxntWAFAk",
  "key14": "55oZeoMuTj6mJqaPLvoLSATjeMcE3C31A25iNMiatnvNbkyWdDDsrj8HQYBMTtYKCsj4LoW2BCrdeCs68cTpVD7U",
  "key15": "8JbfUhzKNt6QvQRLwyfkApD1DaN8aTRUmPtgYZFWWrKko32U5Jz5v53WiHP2DDPpX8HwjfrAzfBJ2PTTpabtRBU",
  "key16": "2ctMaxPbqz8Ff7bfBN4YURFqtApo9h3WntFa9PV1zpR1NCkdQFyFkWv5b6DJWY6qTekC8QDq5ps2Jg3h6J4vXExS",
  "key17": "5sDxWsMCrG35pYgGNeJH7NQ4yS54zSirxx93m57cyCKXHuzkwxd3aDqfvPpfJTvrsMheUarCVpcJ76FR3egoFyw2",
  "key18": "5Pf6twYjDo8drgiJcYg2SorPLuYXWvbCgiDSR58rSZpoCHihEYVHv6NhwdQYAPvACkxR5xdZc5x55HREkziDVvn2",
  "key19": "44EPojERy9KQiJoCwE4zS3LXJwTFeKeLdPMH5yrfcS1JJB1dBWqhydkaRGayYdywjWw4bAvmfiznGTNcVwToh2w",
  "key20": "1Pp4dA3hTQZyLFh52gxiX5jVhNEUvii9iUkkDKcThgy2brBHNoSbNZ5DivSfc9syG3MctYhEtJ9USkbXFvvfesz",
  "key21": "3Mmp4uzeztpv3kGmaui95Ajgc4VAStdNuUZ24r8pztq8AWLahJjXCRHSQG7U6xXRpq2nGyCAyChAibqS8pPoLBpz",
  "key22": "osxQZRAbBa3LNmQCUiHYucqac8sE9u1REMdy1WNc7f4xHedxzkyANu1GGVJS2L3pnjBXQjcbGJF7XNE2LgX5JiG",
  "key23": "5nf8MBEaw7K6YvXZRfrzZN1Cfc6EFjefHqFypwuNNeuhkoxMUip8GiqQJkUKYMVFoMhjWZM1WUdLVTVe1RSGUe8e",
  "key24": "49KzcYAUVLtYjSk9SnRrWMU1D4y1yKgtGQjm117af2gSJkEF78hP4zfqLPvZ2B53i7CtJrvdRMdNF6ubfQpJwcmL",
  "key25": "3dDVeZN6zRXDhjfG4Wk6gpqof8wWMEMkTa6EwDWdVchAisfyaSsU4VmxFmiwffNbWp9Pn8wQtnAdHNkZoVHFxJRN",
  "key26": "4t3cjnDiNEe5hChxoMrhciBDKmnmxHJVTJWwzaPy8pdCZkDKArQ9do5TKWtCwp75rSfC3ZKuBo3yBygARZk5wzyr",
  "key27": "5FuEpWKWYGmZ4YMeGnh41TrAbEh2VFf8owBgr5pr32e1QHL3WMix55zTLkYX14BrX9aYQHLjfD7GMgfJWK1mLrzB",
  "key28": "2bFokCesCbfQsJhXtjt2EWmHoEshsaxnZmoZhzVUYsRM7gLYJr6paVm49XwkdoxujuYZC1BDKXNqHeC7nCM6RSRh",
  "key29": "5SAA9mHQkww8cakHaryKkBc9nXQYGA7mWEVFecSc2icfCbbYqm2wpKqRgUcu5rEjiW6gjDmbbxXEg8yVg4TaSEiG",
  "key30": "2qoCNoXHCTzFzuDNPLBMUjnHBCpQT8YJidpVddyXnA52QWXdf7jH1CdRTFeRPtq8DpG2qfnfHzZcHUe55rKFxR1W",
  "key31": "4jwymsCJGWEbL9XZ3rHAHjM4Yk64G9D7VJws3nkgxMDBDrti7Bq57hUb17qJQTz7LJKsMqA38k3cHg91X3NaSD1f",
  "key32": "3R9dXsWk7wpDEpwFTVKkdKFEbMQ7H44quuTYWspTtZJvT8eF5vWcEkNuCHu7GoDYhGFJMWtFR5buwMUgwn7jTpRA",
  "key33": "5tBWmBzzpWRS1DNHcYECdEyrjUKteGzJbdse18CCx5tYD9NpQxBq5J2wK1r4WVkpe3C6v8Zi8z1f3uhbQCtgT3vz"
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
