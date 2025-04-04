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
    "4KhfuLhKcQq7jq8jyeqSLz3gK9SJPENGtuiLoXm5ZmKoucCZBH92gJ4myHvsMpSByHE9AjRLiGhQnBcF8YCDUHnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49xAUCMk47s6xJ8PqDp2iFKSeoxhHvt3AFaqAR6dCwKHLFteYx5dyZ2VpCHdsRkP8tyVRD1vfV5TLSQBzTC9HAGk",
  "key1": "3LK3WzcPNuGKVbGQjUCNiidF5vVpWnhTDVP42fHGJyRinSR5YCVGqqYkbj97qLr99m2YLt8394yiQsUUhicsF1CG",
  "key2": "626k9WXkzi92B5zG2TVSVueyUXR6ynr4k3bAgF7EugAZBkLWjo4drxosRNv31LALKSEqbXwDd2tVZrJXA1gLVxw5",
  "key3": "4933UT3WbdrtPyBvTFz9SK4LYuDaGHCJC1Kgrasnv2ayWWX3GyfTZtdVmByjBrSNfL6SBW9dhe7gWnswxLSxMuKY",
  "key4": "36xRSiHrKqM1hGdeUp6ZtZ29KRpEjKgmNPTNHeMWR64YJoQ39HMJGmQQeQrScPmjcsEDJETQkQw46iPMvgiQYApx",
  "key5": "PswgDzs1DoxhnRcBvA6LnK2NxfBJeEY5DWmFjes4Z671BVWujkk7uBoXwnSw3oYCLy4fzicjeQfyDXoa9ju4Ggo",
  "key6": "2qPu5Mr1P4dGvNDpwU24mdX4hM4dY9n59UZDmCwADK2qmmkZcBgsUnA9Lf4ALzzqWS19qYbN5ixJmaCEZ9Y27Qe8",
  "key7": "51zLqFay3XqHdUh27WQHi5n32eEbJB6QwtGoAAHGspsfH3SuSDNYYjtzQbiHDqt61haoU5SRgBYBk8CyW4Grj8qw",
  "key8": "62tmYypmbQH3BS55KNf2UPQTjPfEGfVb61AqhGVXqExpLFDNGtRkSFCdRrbrPaWL9Gs5TUX1yyYWpFecQ7cnLJ51",
  "key9": "5Wf8iXAZAZkUWZiswAt76mKg7LnmbofKqbwSfhk39uUdRHjWnpWTQpLgEUndpGgfNnTmiMd4USEHsxqgJvo1p7Fw",
  "key10": "5QoMXa87sd9Q6MeYWKFEmvuAxHtc8uLiXyuqx4cDGGEzfQmhJN6hFc9xeq4F42SvmHS2zUikvhYHVYVukTWzyL2g",
  "key11": "4UAYGddmxrwnuYZy7tsmZFhHBM96kf8DmA1ZfnnaC4DmHrvXY8ZrgqNSWDosX582NZUyFxDuQmp7DxjM7R82V3Bj",
  "key12": "25gGZ2AH2YASMWG3euAadEVzGpwxNN17pqJzvDtRYkKEJ4uTj8StdqcSCqjvnZBM1fMkLx6RgvNLdVuq5t59beZu",
  "key13": "5J5snb8AWe2zJquwzgrcWqvBWGN5C3jmi95cnM5bqe2SrZqbGJSi1kosfzuEDGUqCcFB53aRibGH2yNm7vUA82or",
  "key14": "nuARZgAMbhabhDqZW1KpFzDFPfvPBmTWPfUiiZZJeHEtLWZkGW3WC6QfiUNnR7XkxGp8AKDPrBzakRbfG5b9XH6",
  "key15": "645PbWbAdKr1ms7gqpMCZdvVoqybUUuA3e7MGHdDcfzvk88CC6fHEkDe3ChRLsEdE79Lcwu31xifGacCLmuSAkNc",
  "key16": "3u7D4MfcV7P75HaLe2L8PwMGVSua68Y5WbDYv4DndqbirJSPhUKqGM7W7yYhpJmQcsiEyKaF8a6Wiji6SP4uUBZP",
  "key17": "3P9BUu6BdapH6fzbXjAGkkfo73YexkZ5afizboRYES8vFgxQffyx8wG1Xquk8Qq8bfbJQRt7oNkjrsMtCZutkd3c",
  "key18": "hq6JdGNp4WnSRzCMdKmYrCMAA6dU2rVtCe2NqsHDaetMz6DLPL5vFwkabg1eeUA3jQte4TaCtDVVtMrUsFnQu2e",
  "key19": "3zXA9VSkuGLQE4Nc6BJ7YVJcg9GdAKBVKj92YaF1zqzGKhSrgcQ8pwfsvF5eRqQSntvmEuAzopZAezkLmzf16S3X",
  "key20": "47sWENqzgGsnifhe236o34aKCSfXx2MStr4LCuR9w4Qu2HfAR9Di5fTuGR21zGVcu5Nf3xGPAE97hPmeeC4e32pC",
  "key21": "433HnrnBBBWBt8s7wmXJMeBJiB59FXWT8hjSva1ZHc82UhHJEWQFJjMeZJYvF2KVdfaWu8bER9uZzMJxsWMbogeB",
  "key22": "4iCMNPutAovWoX8obKWvAES1oPBxKBckxCRbch8oKQdnrCzLZCXkrXFPqKNkY2JjudY7qBefv4nRwDw7dNDofvog",
  "key23": "27WHi852ivJe9hpFNF3G3oiMV8cnnHgoebZ5xbgeBKCXsedjF3HzEVftcjuAv3HVDRwmcgRWjo8ekxD3F2NEuqDh",
  "key24": "3N4Fi3BddSavQL2GozahgFii3uvpZ9j2vdMkzSnKzGi6icYc9hEESS9N4kJbbSSJE6gudDkF5BTh4v5MAkbKNPRV",
  "key25": "Vn2PNrw3vMv6MuveudbWZKpuifX4jaj3s8FVeUDYJmfZzxKVvk9ggcFmmAGK17Ds5vaCnYy578uVycueuMLAds6",
  "key26": "5dErwojtHQLQxUC1DTXTU7Z7Uda6i7rgpGgijBhcYpZNsDYb3HkHFSVLm773VZYVUCdSU6qQBcf8qLeuDMCqXKoP",
  "key27": "54iJbpeWEjRmJkHkdH94FN5qh8xVGoRhhhgJZXopvfyySj6bDWs3hH2HqgetGxQ3iHDixKQxemGg21Sj1Bdfzd4y",
  "key28": "3uqR4koqUjL76gQsPg4Rx8YHtVicBrskaWTH9DCkFwjguXuMFmPsWhUbJMEQ5jbs27cYSL3KoYDTiMpucP8iHjN1",
  "key29": "63wZE5SdaVgmFBSS7BraqLBzf1VPqu1iCms7KHShpQK18m4awntfq2JMMkag1xqtK6DucMKn7JoxKdWQppPWoFFB"
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
