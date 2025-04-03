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
    "fXTJCQHE6impAbh9HEeGvRfRZABxebhVXTeFaQfffa5QRXrDnCkmQfw67DrjyGNBwnhjoyxRkBEaGbarMUbjSpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UseR9owWVuDsLHUjkaAH5aCvqiQJxGV2TxLqNUncj5eu3s7PPcJG4k3HdMVdms2YTRYFwREMy33AG9e9KozgpAN",
  "key1": "487LtuKu8QtZ9zvVqsZERw6Jm9DKvn55Tfbyon7ZuiLiTiYUv7eXKnKmKh51iYS3abz1ahuQpUmGZbuzXZb1J1XM",
  "key2": "3y9d8C6VUfD1R1k252ShVF6M21AmffEY17AjBeFAhRRSLqFyKwnQYeokZweDFEQXQ9LM4n4tgAqMJFENqpXzX1Ug",
  "key3": "czUdeNQwhW6LF4XEnZULeyiTvcht76ZDfnFADiifAfV3j1EWQZEVoXNo8iubrTBFCH7X2jDRiQEetg71DJFS96x",
  "key4": "2ovqGm9tjZUNQ8awTBgrSPHRQ3rEhpAy58ZYCRwZasFBwoY6g59j4o7kuWLmss38THDEQB5jGFo15CVz5kMmRud",
  "key5": "UqbA6FYCtGYJLaDEXZ4mFErc8DrucPYs4eU41sryNTvtuVzhAoqwyPm684Mx74EgfQx7v4m3K3SnEEqjrV2QP2G",
  "key6": "3kNmYtrU4xcWGWRKwNE8z6NhxisQGbbzS6k919KzBwyAQVWJ4znefn9JXgfUV8Fd3j1bcuMJRm8aNwtw921dc4ac",
  "key7": "5KbUUa62PGwdKTrRkxpLiMnNu9m3bD1G74ToJMoZiHogXBYr8aWHuANt9orqLV1eiNGNZxowvRqTaRg4Whz3NopM",
  "key8": "43EiNWkwCJPMTbRY5QxTFfZRMy8eCdfyTYBrHFpGP6N4KQgxaVB4bSqKcNXsUnWFu4ztKhUbp8XAHeEFneLKuUcV",
  "key9": "4qcGydjHoG5teXaACvSisxKGbqnDtFgdLGarQgYMxWkXGYbBFpC4aMkypPLBQLNPvi2DowRRB4iBrYjX1FRHG4NY",
  "key10": "4AacRH7jp4fLoyrpmfaRae1CDmhUUK5rkyLizNviDHZMiPyyBhoyHYbS5mXAc1zrKpq1j5D6VTTLo6VXuMczat4e",
  "key11": "4pBAhDXUDUFsBt2HeJuH8iQFQxiVadYrC2bugciXsnxt4sWgDRTMuDA9SUsZnKW9zieb3e1rTvnqFJC9YMa6VAB9",
  "key12": "4mvmLGwxqaX4UXwTm2hvj8f1As6MaADpBDqsDdWuXJvtdnTDpSJuzjJpFycogmVM6wCzE8egW4kjm8TXPJspmSHY",
  "key13": "5soSPLoN74co8XdeRFvnCeY5kwdvwJKG1ixUYMgTrZDiPfMoXAxT8qpV79YDoJjtbzBEMUntpi5krkrgQVgY1rv8",
  "key14": "nCsJ9b94RVNnKAkSzzQcg9t5d2NGPY4Ah4omcE6vxALbDzRyejTEe5YfELNnc6T7apD9pNZxc8Ma5czpc1H3M6F",
  "key15": "5MRk49yw955RVFjw1JuWF66Cuw4fsLrFBPwa9yainEgt27XVrwtk3RCHr8XYofucvfdNfh23PFuse5zHPxu2Pc3g",
  "key16": "2Cd2KVFXe5o1pYFDbrx4uJ6tza1x98a9mwuAbL3xgpxTmuX97dSZw8fxUe2M3d5ZeVtbfUfagHDJmyPSwknxnNjW",
  "key17": "5D2kMWG77Aqd4UrWktSPqZYLBg2FZcM2KTgB4zdY4hmZiE36Z3QcpQF8zMk9M2WUeqeNNJXe4LVCbrCtnoUyypZa",
  "key18": "3j8snvZyNcQKvCm1RmN1gr4GSgjhs8MJmivmS5VbkcaG8iEe98wCKd9pTpTAACnAGEziCctnn158zPmP8SSmfGw5",
  "key19": "Sfha9XDyuTSwzsYDE1idGxi3T8wQR3FM8jnfi5fGdWq4CGdd94utVBkBrAEJFacdPoXtJa1CBTpKX2LT7Ct8s9c",
  "key20": "4J1XxqB8u7oHoWv5EHP3LiArTYnQVfJqmjbcgmB7s8hMSwAYM8kBBTSCuw4ByKBp7fsqz6ogNjB6eHhmTsuoeVvD",
  "key21": "2Vw7wyVj1dmcpF4xDex6vosUzQm3BHya6q2iNowTVwUDwJ41vPiX7YR7rBJPLVnWhif4ifd4JbedZgjXzvnv43JH",
  "key22": "39rLuKmk4jb3Yxgdfd6zppesuBBE7Qfip9CdGoipWapUahsV6GFMEiy1GogMCt9efF2txBCbBVk5HPzaDqn6FCCM",
  "key23": "58oKYn3WB3Sr6W1npDo1akPhFMquC7CKmUDyvZvL5ogkDQupc4S5LttsGty7Wpqjterh8B8sk2y4AD478QrF3BJ7",
  "key24": "3Yxd1rRhqSWa8YCPZQdEruQZ3EdySDBwWwqR9J41yPQzFECtzdfLTAzy7yHpRSYeBYr3o6Dfht8Yux18DEodwEmt",
  "key25": "gE49ps8jaeVpbfyKmEwhAg2PqziA3MKL9bU9HRsdZUXB7DsBUCA6eCecS7hrAwo9ZRPbsuMCHhS3kcCzeajGk6C",
  "key26": "9RJL6qmsFDReP2tqAo6D9wQdCEKNpMprEDMQwgBctSp3crzqpYUo3GJ5QzZrbHqZdHwVHzDQUkmRHGs1zrrVtSj",
  "key27": "4BWKRjmo9q5XrUyCMqU3K3KysjmJQDk3AkizKaMvEtXf1fExGpNSNF9pjojCzhrv3tbuNUfFakGBNy88ed66rmoo",
  "key28": "4vGrptH3WTbkYrfP4TQP6pudamSEg8AUR3UrSCfBtEkwtggKtmd8CpXisFHgVacKzuRNAfKmaFgrTLNPx7NsCVBL",
  "key29": "3xDhWcczLrUhJz3bE4UwtMwY9BJ8UUQiTytxz3Mosu5E4ZUPtNcgY77SbjJxYqtUperz5L26E9wNoCsnf1qj24wm",
  "key30": "3qrdnG1nXUHk6gi3Fv5UD7LMt4uE8APawWLLqA2hGwAkZuznpKDZNKNXvGAECKfGbmadD7R3gwC8XMnd7XSo4qjD",
  "key31": "3BfnUGphRtPGb41Tq9hon6D3zvJwSDCAVsHR6B41xCNhymPWSAxN7oqMBkzxZ31VwwmmmdXb9WDnRCjpqHTpAred",
  "key32": "5aB3MS7eN5GYjCT8ENQpoeLzkbbWfrnoQNBTC1nQdQxz1erzNj4DtMkBQyiG18SKdyJnyn2rQxJiUbSAnoinnapz",
  "key33": "39aXrWE1D3fNiAMFNpB5deZUYb7PA9RJ7AAw5gtiu3fdawLz1yJ4K3xQbrcEhpKkgQ5t5xxKrbV4Qfq8L9M2BrhQ",
  "key34": "5eqGWUYCLkFhQei6XXowHcpGA82wEwpVWBeCLuureDS7pPjx6QAM2guvJM3PMerqedjwXsfKj1jsri7GpZqdXzDF",
  "key35": "4B4JdKVHmoL9gkAnCrtSYjReGfxgYDTYg4h5Bb83LG2W9Jmsj4NxXX35u9P4iMoaUqBGcXgvUfWGQkvofdCPw5So",
  "key36": "5Xw6zkDJcxd5pP76gedy4rLbgA3cvh7iVrNBsBE9ubHP4dwwYtfY4q6kaDzf7Ps9rhczaa9bVfSesh58pAgm27RN",
  "key37": "57xkjoPeqweBfbKBqwcnuUuJr6w4Ph5eUosZoVC33g5zm6KSqPPhmhdkiKhr1C3rgsF99jpPGECjhSH8Mff1SpCt",
  "key38": "5W8NRytXTEjDTSSDBN1eUhDPnBvBLSCLZTKMQTHxkG78rv7jFTvfk5d5Db7jDKyRcDTYdx6wyWe44H2PfYeYTw3X",
  "key39": "2CEAZnnZj1HC8NbnpDrQ9aB6PAQ6zGXDBCEL9FN9n1ZdLL5S7iAa58NHHbMLfkDwSmxfjA63Xsd7ieqWPpq13ceZ",
  "key40": "2jAJEZR8mFWjoNcRGP4wNauKrk91HWPu2xDaXknFkqySX8v1aXZfbJPPZGgGPZAeu2XX3DrsTn7chYK5sCss6NE5",
  "key41": "4EmWf1HA6mM4UB2hL5DH4czHxwjmy2dA4grvJW61V9V8yEmGR5LSnB1rbdTTuiUEvDpoFVwb2xC8xh5fRWySinnM",
  "key42": "2HPgU1AiPV5CXqL6v2oDUoms2RcjpnGxMzVHtv72MHAoHsJ5vQapVdxYUsEohnHjB8TxVCeXcd1bxbPUcskgotXd",
  "key43": "4egWiJ1Umed5qmHhaXxZjjY2QfMSgU1uEFLNSHepGKeTDu6eHNNb58eZEHGmVE2Ta9qFHa5tqWfzFgL8d3bwdkUR",
  "key44": "QZQBH3sCPFVCVYHpX62DC6WDE8yGc1LRyqVVQD74gW6t4f76goAZQLtoT2nrwJsP3eYX7jQ11uQ2PAHd87CU5yE",
  "key45": "57pBEYpBaNZbD9o4swuzHYLYG56jq637g28NGV2gukAHXbcL51RNpC8w5wozrmFa7LjCx5VDqfSQbMkF6vjRLjb5",
  "key46": "4CSLFxcUAAmpp5cZqzTfbX7r2GykLdkUFHxGv3yrq2ABcDod6gYMkNHqMTfgZ89CYxxDgkHZRvuamYJdYHAxbbna"
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
