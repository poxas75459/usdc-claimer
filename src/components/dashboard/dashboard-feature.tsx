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
    "3Z1VEp9HTAG6rQwTbGLSJ3hmQgyXdvgoZLZ36T9SFCKz62zVxdDj3D2x7GyyVVkBYXnJv6oH39gAqQuHTM5xWYJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TKgdkUTJkszydjJCoBXSaMBcemP138ysjeZvAP6ckcT7ZvWCLQfV4w9trfFcgsaG5Q3bnoK7rbfTDVPhdXQH5jU",
  "key1": "3b554dPuVvujziBNqTa8QUUR2Gzf2M1bGZS7V7z2NxFAqJimr58zgXubTtgpnJzvGorJRQTBAPrpMCryytLFrkyX",
  "key2": "VN3AcGa6zpprV6opkqh8iY3k59VPnq67eu6woeSdJyVF4MKD4MMFzPVVvsyWZ7sux64sVbBp6GUThDyqUWQP1NB",
  "key3": "Wrdo4wHURkn9joSWKkyKGx2S8fWezdqaRukaSh8JvefDehciP87bhMcHbkLRrFMw9zs14qUhfzKeffyE7Y58f2g",
  "key4": "4y92K3G4FDz53vqr6BmtCRBUUYHyYvJd2qV5eCY57wjTkcZGCqZoUeaJrGALfPL7GvZadpG7ssvXwR3S6jMFTiLi",
  "key5": "imWvNU8kRgx3nRpgYNsLzngFyXuoXUAXUfaC8eT6LtBe5unWEfnCeVoesc4LHVvVpUbkGP3da6aBBsYApRuEU15",
  "key6": "4B9aLWJzgkgfyRhphSaRjXHbpHKmvv2Kxr8vWoRYK4E1ASPHeAtZJXH34wDXU3CYHxgSwe8KgUxXFP5RiyQMdUvC",
  "key7": "6159j94rCHMKD9N8uzCpLpmDJkPzsGks2ZwuxuTiMk1AxHUwZRtCAF6fE8UWXwLbBdXHZk8RZqLMqDYE2QpkXyPJ",
  "key8": "ri3NqYyikENzGxjb1ViqofiEnTX1jyPg7WTiM2YZfYcRDP7mHJevH3rqcJgqehx2Mv1rKiaBMpcNbRotYsTKCH4",
  "key9": "5BHkfATwMGw3jKtW1mP5f65ziw5sWkTQKQYUn52KRQZvuqq517XaEygPfMcc6XpLUyhi4snDEv9Uy36QgSXxHyd4",
  "key10": "4BcJjY6FzLV9wxkq6pX3k1Q93392neFgrE8n9jQxgip5mPqZMvQmRLcp3DaVno8TZGEAQFLaAZAg6PA33ZfJW2f8",
  "key11": "4Gjo7wapvDj69vBejxaNaXbfFHSwuypMFX4AXWARJiAZ7KCbfzQrTnfZUmDsjR8Uc5n9SeukLCsBQ3kD4ohktaoT",
  "key12": "4eSBbasKqMr6FjjhC3yujmLKnWE2upHh6LNviVwDMQmJqQN6xeCMEKPrVpTvf1fQh1gCaXMT8nt2V5AhxejeXRXw",
  "key13": "5sisoTKeJw384dK3zRGUKXQoyery23NtWZo3dGmbrG5YVXkKCHgzADZwLYJsXF7oxH3fD4zTT9hysBAR8QesaumK",
  "key14": "3rDuRSd323dkfjcLYTWx3u2VjjBqpAwAeeVq4usVHFJV96enJDtNroG5gvShqESBar5xX3MKq2Vz8Ro4FeEBerN3",
  "key15": "361vbLsFd7QSr9eKCc2DiT4d8kesH3MJddFYommunasny5hSnQB1NTrBwPUSioVQjKCVLH6jAg5qXmPUmhHUcj7R",
  "key16": "31oBPK4WRXZ4NW1Eg7FUcLMcYqzGMpkqqiXoyNWoXhs3FPSc9RW7QB3HN4sjtN7nxxUyqbEesnATRssrSgbtGcCj",
  "key17": "2MEY6LRcYVrDTL4xBQZMRMgQ9BbzgVYNrxqf9zuJC3jRpmuSUA7Uv8hnqCE2yKRgTSG5KMtrvbpNREeJzgxcoFr9",
  "key18": "2ig5e8cXvFhgbUYZeifJbY9mv2nwiRTyqmf2NRXC92VuY4LPvGNYfChmLWpy4YbGFJGNapAiTjd75TGp7zkEwdYd",
  "key19": "43RNTwaX64s7KFrwTYHprpsQsVnWRebp7P8hicn6QsiaNvdkbmJ9qNrE9ZXz1bwq7NqxJZp9jaBf3ED1KvtAsbqw",
  "key20": "3PXbghXt5dZLJdoG9CbN1VQ3JAeXsiVCTUYQz27E8MkZpc8cwBL6czerdxpxBT57sFavuueQNHdPpc62bX3FMviv",
  "key21": "4KdCFnR1eQcCYKk3ck9kgquDiTBpk4DakF12i4PrZVWZyfwcGjpLBVJaobYsMmFb3DjQCjKD6knzbbwJXjPewSR1",
  "key22": "2gpQNP6dFcMExsUF1XdyyfpY19SYWo3bm3MdBNViMi55sf8z3QSfwc7hKSafN6282VkPwBZ5ZCmdRYZXxtAuxdK2",
  "key23": "5eSeE3eE8UDDMMgTpJdqHw1QWeaaJiWZ2MSw4cQ8x4f4WAnYML8aKLVDJZ2kwTspcF67h5ox3nZ43P415gR2zxB",
  "key24": "5No3RJi8vXH3F1h6cqs5TK2zxJa17qw9fBYUyVKWyf87rYTLEjV8CfpyHSDLSiPnvCqj7jCSmdX2MkX8hEoM8Pjb",
  "key25": "5FveXSqcqoZ8d2RVRRis8bB4ysQeSmMzxPnyF9tXzU4ZPp13MtncwfqJuLUXW5b6AQoWzMiL3TBNNVxto1QHFe8E",
  "key26": "3FzCVe97xYGCqx6Rnp7KrguzBkqV5C4Z9imk2qBm3QW2AsmLiYSAsDEKtwUx43aBpvxa6H5L8yfEH3qewT3uo9g8",
  "key27": "5c7Tv8hzu94ygJ1QJQYST1cADPed4NdeyUTZXjPSsijmnTPXTc5WSLDagNpkvE2ic2MyhFqjDmKT6Bkv29Ujqrm9",
  "key28": "r7fMR7NNeoWVNUvYQRJwjrUZKCzLZftb8t13eBSRRTfrwh6wCdVW6rpUTjkTuCFvkLRLVb6Ud1jmJycfcwtpZT1",
  "key29": "2QHvx1Xc1MZ2pD1j5RNZNNem397Za7iqnBEBbqhh56mX12jiCZrkeXmPxrcnQu62Hn66wPbSTCi4r556XA5mDe6q",
  "key30": "UYCEfU4md2bLo7F1tMRvV5qg3sxKb7BTh8aMK4hpgHXi9rknozqKZd8d1WEuqDVzRQF5EmH91Y1LMuBBUEnsGR6",
  "key31": "2fDuusEzQYRn1xvc1k3Yj4jZtcKQQYGh5UajkM5xKDZUVHb3J3rvaaQvhVZqkWzGwLPp53AzByYNJK7PGeQ7jZQX"
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
