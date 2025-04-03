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
    "54oor7ZUcwe87WpTGBoLe8vUvHCj5S698qFx9MEa58SxgSjBSdyiHjkejL8CiLdDoMDLJ8gUi8HAVifSKfySVyda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MZ7yFg3haEWEgvx7v6qdXBez53BMyPwsuSTmpx9c9aQ7vr2Db6v9v8B6cbRHfRpyyLZTpeEimPdJarSp4AyW2dK",
  "key1": "48WtYg6amsWrEWxBzfk8V4mmtPyRSJKMGbwKyYhvcxgtdLbmYpNwHeAVJbCcopcByj42uXsVoVqYxCBBpnpmJZx1",
  "key2": "Byaavm2qKszFy1ZjCsAbwoD5Hj3UWuqJrPzyDrwm93jt5JaD8rbyWgfVYkBSyEj4t1k6FiPATpzGAnVKdmNXjBt",
  "key3": "3Dvagq4M2JA24FiHHx6GqHtS6tD61UZ7aPqdNLNMhHog6caJwh8faSacYhJL6UtK3PXtWjetDWMGiwNigEpKKpxX",
  "key4": "xAkKYKBpJr8mKUQLoFEaYTeTzQ3XVeQgRsyLth24FbFB7rXJcs49wqL9ACMNsT2FPQybSVnNe5pPXA4PeVV96Bo",
  "key5": "2i99Q433dgY4jcJ3kTiEMswpcdgLyXfKMXqtLy4sJtqFh8MTCbSQAtH9NDHxxQ4XqrsZBqLeL275tV8qqmA2SSip",
  "key6": "5ha6n2EhzgUnpxmhKxmz5iFqwYcNTyhXjnbtFNfVdLGLhCZVXPZpfZuyWR3hZqE9BiyUcng4cxHikHGSYeA3A5oA",
  "key7": "49gZaypSWdQZK6KHeBMTKq7nU1pfGBUApynQPgC4tVyrDLoWWrVzjFCVGzWA88VSoVzw1tc9jGaa47iq5SF4XGEy",
  "key8": "Ujjtn3qFUTXvCojinJBPQXby5SUnfmVgzNG3iFH6NyMvfaWscN14dzDKNj2HLpY4fgqU1oVzPzQE2JQ66S2x24f",
  "key9": "5dtbhkMqgQsqawfNbAw7Nx5tTBX1mcvfVVGn3zFYtmHTLsTP12D8zvwiyKyVW7QWbrEm3AvWXnprxLzkJhsWMhEa",
  "key10": "3qKzEfDUc9W7Y4QccxKMQ35UmrdYfyHcAf7ZPseTNTVpJq2ESU6W1LgfArEiPhzqa7foZBGi4JDJNj1ZStnBAJdG",
  "key11": "4jfJBbEmSngzkMw24kZ31odXWACMm5grF3bCqNN8xoSSCM9aPwZvVfi2bJ8143kYBseBpcif2EuqzrLDA9YgHrzU",
  "key12": "i8hwfFLkJaSmT64tkApoTTUbA8xPBTd28CQpZFVtBYGk5fKuLyB9SSrB6PBcFAnTsmUfvdrBJJdCoJgdH3PEVbe",
  "key13": "4dfEnohVVYwTyLNFryHSKcHPZeEtfqJA3tsbu8QoaVPTEwdJQquSP6KtBVTrVKYUHM2Zm7bziNghVkMf97j5SnYY",
  "key14": "Do1kN8xwaWoRiegxiqab3eAaYUDWwz3XzW5EBXM4Fp2U7bdxMnTKAdXdPMiQ93XMV3tAydawCRUty6z3C979xAJ",
  "key15": "4NBpkrzDLAuAYhCsq3wDXtRde7tRbs3JNxCGLsfzLqtdDq3rWPWKNLLAyREoUkkEo5Uy6QQ4pqano5NuVdLfZssM",
  "key16": "3GJyAHtY9nZftHeKArpJGRfHEJ5zhWiDYeuUo2hJuQvbCHPC9T8dZ2mgCDLz4cW1a1tjb4m1urQYfFMDdtsqDfSe",
  "key17": "8gf9qTvdCHMFetmPGww4KskE4UYg14TmJVhJTKDEd6trrje2SFmEmyZZv4RdXH4KAUZTR4tPRaUXx7LSHJRjM7e",
  "key18": "3qdh8ZjL3Yki9NKf9W7SDuYhktfHt39ktt1v7Qbu7HTig8nQkYnZ4LvenysXsiAJSBZh7nTdTe263jcmpsv5C4Eu",
  "key19": "Akc4bpJKMQ4z5QwTGzddcsgzD91yGgNF8dgvtUe77hPDHDfUQjj5MoZe5MNmG5kHa5Q4o15LFw6j8ahGcSPEvtX",
  "key20": "39ntxXgfYoY3tNiCsbV2xE7rr2VZ961Hwz8v6HAeswgX56BZRc6rhuhtXjK9D2FuZsdYR4ob34qxcY5Fcwy7sZj8",
  "key21": "2tjAnNV26Bf3KBqd59ndWSofp8vXBfsFiJx6E8xfdytLyEqvc75EMcrKQ5KTUVBSrPm9kMiaJFZ4cQMpMQj2F2UD",
  "key22": "cgAdjNBkGEqXEVgGk23f578R5adK6DQrSZmsJugw8iKKAKpzy7UuAjgx9o2dDh1P9SsT3d8gpSrY99vrDk56FAe",
  "key23": "5ZNLgEzf2JhbVx9Tx2Xq1i3ZQ8vCvxpXT9Ro5gNJnw921DV6C5qA1hg9u9v3WRLHVUkX3LX1Gbik7AP1ydKFkaNh",
  "key24": "fqaYGBBdTebCrVJdHSNGj2AUSvbpd69zTnPGUAaoRRrQSyidhmqRxVjyZS4FCXgUcZrL1emzYBqZGXf2rgkPXNX",
  "key25": "5eZWgBo9KeN5p31dEqSL9Vkuim37QyYeNJdLkgseEreRuPcmTGzzd5mapwTCxqjYsPTaUu5iksmr6x53KnU3RCFe",
  "key26": "2zKx5un6JTowYWpbSS3KtXy9ExJYLhkiT4qN9b3CXQMz83oQ8GyCowsyhpE6WmNFUC8bsQusEYZj8JKkirLdVuzs",
  "key27": "5xLzqcr9Y4R4GmZfbZSDFRXLkCfticET1XvV8345j1vTqLWWJpjYbVVhBg9eDjkWV7FTF99M6Ejh8zTbKKo8GF57",
  "key28": "4y1Ak56v6iCG64p2FqbCGikPmjZM9TkxBFE6y4AJD7ShxAgnwdW3uNT2hALXZpqmYTJYpDfLobPiTyoZ7Qdm4xYa",
  "key29": "4Ac4ieFTADvXmWaSXwLcBC7ihDn2tDS8BgeegWL7BsCEyfJExqmNck9S9xJJJ2R6BZEdpNBeSGm1gZ1X4ghsd1y8",
  "key30": "dm7VxFYQHqp7iGjKPYochoQgTfkQ9cikBK78t8bNVrJzKNhZVm4WrNNB4w7i43PoPZCZcZE75vLTYDeZiiM61vd",
  "key31": "2mtdf4y7W9jCHdPkzbbsQUC3iXn9JuvfmMtK6JQmEYirJCY19Zkbo55EJhBTnAtb61rryhPZNPHYQptSCKK5HAJG",
  "key32": "4HFQWRk4W8aNaYCwTRDmMMhAdjd7z4yKJa9nnVb6svs6TNY43i4gc9w7Mxmp4iUome5ip2bz65mLymxiJwRZJu5n",
  "key33": "JM82gejkLJbFebYrtGwDyUiQi2EnZFL8HkvDRazF3GtwHaYp8egFXZRqsB7DSbenJPGEt3bCR9MFkqV1Jpi8c4U",
  "key34": "4ZARbToUKNoEa3d6ZKZ11XefSAFJFNSwmU1gNsGpWyYB7bjivwJmX8Jn5AVoj1uxJh1XYTrSujBN4R7xiVxd5c7u",
  "key35": "4EbGfKKKUDXDTwARUqjQ6EJJ9VjwbhQiw3TegPQb8fMayzNa2Aa6YYCHo5Yo7qiKCKqZxX9STdwhYvkCxfFw8ftq",
  "key36": "633y2ZntSf5dnEumrjX2nFZUFWT4wNbX2o9rQEX3GyAB7NLVZzXUvW2jjpbR14KdgUsVcx6iJHX72XLpUJYGBegi",
  "key37": "RpMf82hLvwU6ZsWomMPaTnHCxUgYUzWeRfyJc2FdegvLRkUwYM2XchJZ6WEcvKjYAaiBtUukbM8uudKise4khX6",
  "key38": "2bmvYL8EsBiafWqKNv3AWmWkf9PPavAbC4fF4r7RG8ScPSebqmqxEFudXh2LQHi1hWJhkxxaoMnyuNnZkoYzWmTa",
  "key39": "2W8uMB9F1UiajJgZhBFvzS3FAmyYmkmr5jwK2NT3VzfqrbJLmYU87NdgA4cFjs7LcsXwqBHaPG7qZ5knFqt1qAkC"
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
