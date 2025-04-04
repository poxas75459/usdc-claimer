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
    "2vXEkWjXxtovaCEirKdwZ1hf8g7NuD5kGx2Uq7WdMb8QVcyeUR56YZPJPCP3nWjRdaekxVniKZxbHDRBVDV6YxTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zG8Gf3QfR58ihjPzJ9nHCEhW3S3b1KVV8GUyr4sT1osSGvG3pqZrmj5RiqMCrGqMYGMhPzmknR2mXF56UyKtbcA",
  "key1": "5wTA4HaanBErgiKQv7KAMB3jezFUH1vMwGdE2cy6im6vrMzsnyYfFPn4XUA1zhJGoNZ9K7UY22eb18wHSVs7SWk",
  "key2": "5dwoPB5kkiDdpwH3sEAPoLhUXCFSjkoe9kvTinhMwHbGh5LXmYfoZznfY1KkLrbyoUHDKap3r8B27y8iyQenvmNg",
  "key3": "2vtt7xJbW5izm4s5GpPaLMb6YgcLrPJBcXD1qDmLCMNu7ksuAHDxBhWUBQMKXM8r8ThTijpSGWAL8uZbfXf7iU7j",
  "key4": "2A4KBt3hhhQR7ne9xL15Jwkef1wXJNXVsDepcsm9fARqXMpQrncy2dasmiVaCt4fCXKYRD6U5puMkREdVEg1GpdV",
  "key5": "2KBK3KesNaitZyFjavv85oau4crKEMZNvHa9U8RoNqcDBVikFREA4XXEGdZwryRJrfHpQ8iPLJaoRFpeTKJfFtn7",
  "key6": "S6r6qszHrVMir1aSkAt8rN1W53E7wdZj7sLH7rgtfj8fe4tey7kbchQVRaUUXJgpjXKCGhmBDkUiFC5K7WpcXBc",
  "key7": "2igsqRquw7HAzXWLPP1Kja9t6R2VzgLzCPe3u63Mi5ZJAWjDFPeVyXGstmAxFLAf7zauP81vLSX8nPovAASfE5uR",
  "key8": "2qozziekzV1hbUFfkqdXubRRwYduNzt4CYciEisxJi5jxoxiHMv4ar1F7nnD89WxMYK8uR2qhmodYveawJLdQuT5",
  "key9": "5NGAQg8aM6u2g9bbwpQJ51Fewh5QoPe1W3oUZnpBgKodD7RcpTi8ziVgGhyJ4DhU9963rA9K7pErm7PTMZA6mE6K",
  "key10": "hTRsNBTkJhFzCVZ6DCsMbSzpaZ3uDqQMsnDSeADR5Jc5LMX6CyUXubar6uHjH1DSiRibM1vRqaoRiPt8Wtcz4yC",
  "key11": "2pWJsKG1BDe8NMfyzGsjQ1XYJvsiAnPtYgFTow1N4Ee3Q7bu4fGvrwycMRpk4kKLN2Vn8bE1mzsZFzqoXh2FdgrT",
  "key12": "42mfmp1igWrDEKj5dHH1zx4Kbt9zqUo1YjWBjptgpRx16PbiQELyKs9KbQqFfEYSw4SuXvu1quDiVQJguXnmapKX",
  "key13": "HMrvFUGtRSkE94GMiFHAq9Va5nMdHe1Lny7WKyQhuAeeSnXoJ59mdJsS6mRS3Cis4WJnzrLZVzH8Cs5kFgdYp9D",
  "key14": "3dbZT2A8wPfHY84eLX1x9op5GB6ttxVXGVsb42fAxUumCwbNvvy5HzwWPKyMLMMhXXCpaT7Zs5zX1RVGd9K4eiUE",
  "key15": "5MQyG1BGqTv26nfLQ7TEfRbE5DSAB7i2YAAJoW6XnVN3sA5g38iZvChWywUpWpY3PPTWREFZW5uxWywqPa9BbM3W",
  "key16": "3WgqFxBHEsMYn7qZts4t9BSWqSGuKKm9dD5hVgnZUXi4SncGQBdaY7DdgTGwE8yaegaTfxjQiD4FtPqzd28ym5cx",
  "key17": "q2eGPuiAJQ6dWDSsueqhoYhK1hipqzTM6RweM9t7Dh1NECqbzwogRmRT1X3CmTqadsZzznCXUrjC8Sm8oVAewmF",
  "key18": "VNhgo4mSJZ1AiUcpfp7snvSJ5kuiSqRfWExmmN4W2jt8oLMbARR2aEeZk8t7EihEnYogFhdJMeCDmSZme4JcDvm",
  "key19": "26EsVfFnocc7CKZkeYdSft1pC8ftneXeuDZs5isCtS9iDFY9KjKYfDKG91yR3iQNCDfS3Ws9FYTKSKUwCTj3FgUe",
  "key20": "2AwG6ZAWF1GMTVrD8kVVb7YdDwKCQo7ZeeAEu3Nk6nvn4TtgYzyhVsX2WxrcXHKakRUYv8BDNRti3LxMyvrVaF2B",
  "key21": "5ZMRhqpcpNq5ZJH8YphRmsxLmYGMTUdU12wNQxih3b4PBeaUp9RUDnjvAqSEPKqFxicfEHCsswW9V2NuHFS3u21F",
  "key22": "G4UHrHRisKMSBL37jfS78B2ZAMvtboeH6jKxnPnoegywkNCzZRtEHBvrFSSuomWx5XMve1XfT5aEnvPpxWPuj3R",
  "key23": "55R1QXx4wZVrWC12wMJ4ayF8QhmtPa3cjNd7vuT2p1jDh9sHhFT3SQSJ9sSUcDa4o4cEMBxgQFECtygjEjxZX3dt",
  "key24": "jTPHsoDmzNkQvT29re8Gm5tDKAtAW5RUNhZgA5GyM975zDjxyEzP9TosKZojzZT8gvQp7ovaxoTxTQHMHSfgdE5",
  "key25": "4REqcY7CEGyBJemzDTmwUok1XqeqXyfC5GEwv6PyZ4HgVDBL7dZqYmfe3Q8xqJRHYNYoBCSLmqx5P1mGvjz1fCKN",
  "key26": "282ZsK8EAqN8N1mYm83o9us7jCaiQqz9NHsKuG3SAecANDAA2gL6hsSvypycNESpX9CJcnmwzBiWtdME7BJhddDR",
  "key27": "2oFFD4aZ7pPDtgEbArnniF9mZP6jKgZHsf7XAKBepB25z1arW4x2JvSLS5XuUvxcTM4CZ8gbbYcLTscdLrgBKSG6",
  "key28": "2rkcnCFBmegUva33PJboLHM3Wo3TztkoQPX4NUT4SXXA19KxQmB1zMKACUzb5UWvB2NGjGtTaNR74qumwYhZySUH",
  "key29": "2suvnPG5sYcg2aLWPqqU1TZBBm4xaLW9uFzQ4gwK3rm1LXkgFaCQTdRzkyr9Rj685gDJm3TvhD4XUW88Mb1qoeuX",
  "key30": "2e5mFNEpurXWAC77n32ed9QmG6vWexaxXZopKNF9bTZztrECb7SdYGW3geaHqGHBK3WcYfByLtaVhK71E1EjcsUK",
  "key31": "Vrc4nEpP56G9vNF39uLZnnMWAwj8Pr312CjfJZfZTTJMvivxr5emqJDsM31ieRroRCUZiwja7Tav5EjnqNEQewp",
  "key32": "5D646PTbBRiXqSApZMueAtK9crxxuEPnKkysjrZ5hqueQuYqApeTpKmN8f96oaQATg8utWCAz6avGY33q56rTonj",
  "key33": "2mQP7w2m1ZsZ8yXLfCoRJKV2rZ4Z3MVaeLoEFXiwdnJBdAAdghJczdaHghcineSw3CctE5uHxhAaU8z9DUvVEYD9",
  "key34": "Why7wfGJrMazE3tKr8FtBmPZUBDnCsjo7WMLqjyBBcxqkdpaEATg6mhZSZ34FMYaN6J4eSFqx8KbhYVm5xDiuVz",
  "key35": "2Y7WkXvq5r6FznmGvimiqKret2rjSo42t2LFJV5qrLhQERm7XFHAmo6LFL1U8VQxwVjLUfM73aPTxytVwKEra4w9",
  "key36": "3gpeCTw9yEkmQVyuimuDA4vnms3mm3sHyyhEPHoFhodyHrjjkX4hTVyhbi2eXJdQxQjSBQf8ip4v5b3WQPoGPNzD",
  "key37": "4d4aL7wcwq3JDztnBsYC158zoW55JEe4e7mQuBG1y2Xbz2FU9TzN2bSv8FLhWgtLNzezYXxcZVnxXxNkmdQm2DnV",
  "key38": "5QGM8wZ81sMwWbTvrfRiN9VJEKEsQ4ZfCapsPJJfBzQ8HjCbioGc8jjSurvUVRboYzGLmS14UzUK5XQsM8cczfVu"
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
