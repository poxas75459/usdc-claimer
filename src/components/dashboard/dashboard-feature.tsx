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
    "2etebDrgjC7E5ZF7XxfzwpnCK8o6Zst6pKFhj9Xst4dq1HkiJDzvP32S7qT1PYY9uRHTPyq9TVBPw9QrtmMs7LY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z8XpZqnn3WMGjXLNAX4fy8vC7gjaeZWYL4rYLNwmo8ukPFyHtfHamhKGiz5qBMXiJsz9Jh33a88KaS4cVVkVKDB",
  "key1": "33YohLP1k7GvVYJYwGJBahQqrd4crs8hzjkEMZWjp3z3HaGcpxVyJYPf8EX4Boqbt5bkuEuCVvX6c3V1jAgLYuZy",
  "key2": "5YD3jkvHDkB9fAMKDkF9nUWgbWHQ7KEMz2LCeJFfaxYmnZb9yQdc3GRLqjyezMyUtEBTcVYVQwqUSY9PsTDUCbzv",
  "key3": "3TVbAUQTbwzgs9jaDAqhi2DiGV7Mb9jPL4fqthTaaZmra2m6wpC6nAHDyaD7VhGz5u3JH8CU2a6mNbn82JxM9F4t",
  "key4": "4R2YM39dBrdC5CQ4MDWFumYSXx5yAeTfafK4MgDnFgXbA4UqEvP35HbFh1v6uiV66mssDifVVhdp5J6LwQJJtR2",
  "key5": "2ihR9Hvi3P4ybWoeU8AurfW9mSC8XwNAGamx9nUPPyCbQGNgpJwqQwh27nkjUMbnD4awUuM28xZcpKT3bzVbNXW8",
  "key6": "2g3jG1Eb8Asn6p9sJeU3aq6qWRcnbg8CZg4NXWK7jv5zQvSpwxcUoQjYp4VSMQccMm1PyToWpw9PXuLFmk9mP5Bp",
  "key7": "21iHUHLhisvA1Cr5hW4AuMYQrFUuTfjrZnkP8HC48o3CxrciNcdKrjrcoUjzFtUfJrTgJLrvACZi3visM8fK3jXT",
  "key8": "4BqHmPsC8F2tfCFgKAgd3SnuSTwqbFbWo11ehHc5TbYLnh85Fv1Eihcuk7H5i4YxHEfFvuKV7bXKnALsR4XTJAPx",
  "key9": "65UzrM3CUH921dKXxY3zmzYThh5ZqqQK6Fuq85hgW5aJMvAg2o1DGJdMTKFSWPAuhWw5wGXz3Gm2esAYkruTNksh",
  "key10": "2xLXtiqdtBQSUiw9WzhVh868dtWB3fo3Uo6VCzoao7PkXKCSUG4Rgk3EXE8fGgefeTWsdcyS9JHPrvtKSMmsHt2A",
  "key11": "5tDthFFUoUq3JrRuCjtcnj6Gs8d2AyMYGvLQKmBcF7om7Pzf5W2Fi9oWJ3aWGhDi5togS9Edz4fXrWMnb1kB5VG3",
  "key12": "4XCoiwrfBGzxmpsxwia12GEmDh2cV4XAYpQs8XtWuWvjpXAokn1pB4FpiQ6mNcyLFiYjXrF5EmzdPsmKpgPaD3ZD",
  "key13": "4dtgMx1jq82ESQSax4eRwSrJRDxgP5FpFi6YuzFTh6WZ2goqY7xa3oKGKLMto6snSb6r2bLGiwN6iZeJ25vqJ49P",
  "key14": "211t9FE6Cvjy6Fo9Fq3biwB6hZ6WW9JbEdJRouzxu3yN7qi3LVeWyYtana43DCwzwNJmDLhWbPAHJEsWh529x88D",
  "key15": "4C4vxcEYGFo3KhxasTC2osg7AadoFC3Ja6qxFNujMxz73kpwVVZhqQzAb3GnVR69H26uBC6D998drNuN16NitoJt",
  "key16": "3d1VQ4TAgFC2TNYvpounRZWB4JZiy4zY5w3zDr7kwJuT6MnowMF7Gdqtr8uS9pyywLMuAEUP81Xy2mJr3aqVcXYG",
  "key17": "5yMm8qfPPHWwBagxt5nmtDXG6UJd6qXDLhSnNCrXRmfT6sWkCVe6eLPpvDWNjw1BZQRTGJxE7nhvYz5YFNr2scNe",
  "key18": "2x7iDmsFgYzVjV2pbnKJfMb21A3zuL8hk3fbYSXKvWRz6j5EaGqke4AfBSXi3Dr6y8YfcJeA6aagtgdTgELdDbRH",
  "key19": "4oNgg5YNQqKVqeRe4MmQHfazhyXxA3K2zdonvGC9QoHyTZvH5wV6eQETJCocURa3wm5whfcjonD1Gh52jTKf96Wp",
  "key20": "3UtE87sgnWNf7FQcq6TE3mAfLCmx2t2qZ6Qs7NPXVH6uVV5EcBjqy5vmw2dSbsnpSsGZzEwedgC6jWjYv5fLV7R2",
  "key21": "5i7G6bbVxWTmYG1r1JwH2XnJ8eVcTp1ZaMp3nMWq1bGB7KT1VAMJw5e6Mf9BgHD3uQKm9oP5bgRJn1Es6BjkPND1",
  "key22": "4bafUw6PqE2Rcxs9Nrj7Tom6du18HwnfNgbCQ77Y7ZqCCvvbyrEDyDkRfCnzs3JVCh91uZv29T4qy9rnMYrwCwR",
  "key23": "4WHoYbmJM2KwbzqUit7kHFkHDji9hnArGDptrQWRFwQFCNsMzMHfZVciEkYgjGhZdA2DARYkeLJb3GnyqfGUnszV",
  "key24": "2U2B5Tu5AiULW532LLczYR8HRJtxvEQniHNEpK1iNxspfoieVKLt4y1sTGUULU91mkt3z7M43s8mcNUu5A7k1gfP",
  "key25": "G16qr9WNBYnGqTuw37tNRpTYSSjNMDDWEPYbcUHxrgjwpgf1jjR8UzRDf3snsp8CjkdXquuecwjJqcHqcb7B89Z",
  "key26": "4DhYu1pJ4YJKKExcZUgjdSMaSpd9mSCitiAEYtifyLixwuToS16aGFbGPyqBQnU2ocpXifUEnJhtZe9nXMCeujK4",
  "key27": "5Ficpf3P5w9sEMiVjQ37ayrXhrY6oUMNMwoogKwdmty98XpDHZkjfSoWcT4z9uGtRudrP6zy2crE4471rSDUpU2y",
  "key28": "3VNF7ra4dHT4YZ35Tgh4D2GrdxhY72EpvPtV6vUgSDJtibSveDdxoKLbVxvQZT21RrxWPxnCW7uZq7qZnxBLqsfb",
  "key29": "2scYq7vHCB52PkDS8AgPwzfNV6MeLg9WhXgEqH59CzvcxDWboYr5XM1hbv2F8fPeekX4B7JCu4MDjiWnQZK3GLA1",
  "key30": "3kwR4zY7cFQys8jWbVHXhXWN78eM997tDT22SqaHGyUcm9Z6oYrWqs5Mh4FKJ3kmi9WUDsmkgu8T2UPusN3s2wyt",
  "key31": "axgxiEF3zm6bcNf4kvfbMFaWCg5EpmesHrQ2xFTizggJK41GUvM6m3dpr1tQdqLG6pjvxiUWoMKW8VATB1wY3dV",
  "key32": "3HYEJmjVg44uVPB39ojxZvvw7oftBihpXZqocrudritbavte6vq7CYLaGmmULM8UAacP7NLxTTvEHSwQtSWZSC72"
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
