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
    "3EaAgJrMZwtu3bREyHQghFewmSY9wrH3hW5VisuUYgn3gTQXXBM56RtbzTbSW7DqmgQqhiscNHmzJrLXTP6ScQpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MDuqjhtjvgpHqYujXKtYY9oQACT2zYWPU8Prrygf7P1doDvtfdrxaWzmd4BwU9DMRb1GE4LYrbqwbdHLWQY3KLo",
  "key1": "27AfSjARGy1DuSHZTQjj3sbANAcj5pc3ygYhG3wxNnXESwsJY97zrDmyNr2gYXMmeLNaUhumpspb3CrSzRgFRZj3",
  "key2": "2URCfzHGJn7g6244UzkorjBckNRhfLYMeQxZ6RRF8cboQuETq6jD1k5hG9ZcBvggUgaz2Wz2C9okP3nRKdWxHRn6",
  "key3": "3mLy6TEceHLR4b63Pd49QgMNNu4vTnjjbnw8sRwHnqoN9SCUsxxPbFZjdJ2GekgaVudtA6qw2cneQCnR9dHD9h6d",
  "key4": "5FuVV4E9BUr9wzj3dvS7FCD69Tyt2MhbFuqatwza35xuMtvjfBuZ1rJUpY7bsugfSbH1HqyEFRz8DG4ueHkEjgtv",
  "key5": "2Qo3Dyf23SMZb7u9ZG3w8p8LenomPtsU5a9juTP1ARMZDmauqCFgEgST2HN6DVZyUqCu3VnwBb82muG3LrgHC3fy",
  "key6": "4g7xrG9SZMnfkrvESBi48qBpjYJZC1Aq67mKKr9rRXXXnLuzb9gc6Wt9uZDVt6jTs1p3WCmBUcHBNwBjGRHY8tK6",
  "key7": "4e8cu3CLht88raTXiybaWnKuk88X5wijGhWSCTSTHoxuTp3HSeUd9vWs7ff2gwdNUNeK69tkWdUknMyjQX6CoozL",
  "key8": "5uUrRAoG5iH5gDaG3C4gXpEUxzQeYZiUkHWd5CtvV8TbBL2vtFbPr7KYWrRuGuy4yXxVXZZ7uoLRDJ5h6YuP8Tj3",
  "key9": "2Hj8vnDCLTxVpoFhBHSo373QXQXuMUtzCSQyhcYs5HAyzpztTTs6TRzPaSn8icK128R9aQUGGyWCMX4Vz1d8aZPV",
  "key10": "4Vbi6BuRJtPjBvxxhgqNbfS9Ufy42ykoZdfim9vUBWq9ZawUvJJrrEoba8cg5hTHDsyCjaXyZ71CpqWt6MjS4VUL",
  "key11": "3PdFFzKhjo6X8yh9e7m8nqRQR45rBMvEJa3u7ee8QKLP5qP3x9GY6NFTwU6PxqrMyAcN5pr3T5fX4VFop6r8gjj1",
  "key12": "YawETYTuJX6gkvU2UYGfydFfUAGt9JKFtDjeX5NrNSKPhK799fQJECXcAwjjXvhVjh7HfVMnEWrX5kZTAHcjbPp",
  "key13": "5yAKECH9E39WBPdURYoD5KjqArgoCUpAdSUMrY5JrPuXz7oo1sNF9jte7GVyrMU4eq4HHog5X5SdR2NhhGerRtjX",
  "key14": "26kqpRUc4J9Yn4YZPvAREJCdK6DGYhCeYjQLHusdhiEFpRBWjwxx4JdC1a6Z5MyYooTYkNbCGZxZr4KhBxs7jtC7",
  "key15": "1V7k2GuE8dVLX4BnanuP7SGP94oHSE5kbWBGqgXmzrTkmo9eVWwfEXctw3TaU6EDd5JW5uJCzrebnd5z1HMZFgS",
  "key16": "fQj5nWu5AddPoPy2ycNHBHfnsUUK5AEYSoMzGsmHMK6mkprBtZRBw7wWfH9LnBoyorRvUACMaZWbXeAqmB33eGS",
  "key17": "4JbGGetQgjfDFGuGwPqUiTSBjyTKPabKJPZtecA8n2joVrt2h5qtpabWYTvg8kCemmzpxXtLyz2GdbRNvnXPBoMH",
  "key18": "2MmAEgDgPH3GkJK3yBDMjrrGvp9EMwvsU6mijWvVCkEdF8saeLsfak9ATwVnqr8o6YuLmFkwzpDewWT271yamU8K",
  "key19": "56h6b8Ca3QLainmb9jX4Vnx8HRbSFB1hQ8Ar9ePuYyShZKiZGptNW8Lbnm9s6ih7PVMLqFV2wmNt7dFfM6sr6T2E",
  "key20": "5wKP9WwZxQGqC2TpiFG9z6MheswXWmMLav1wUKSUQFY3uoxxHP89LZPrSSCNJR8uTz358YyK298LiXnhsq24eYJe",
  "key21": "73dzHNPAqpPixpQKxFS5GwXt5QPpnWfc8hW9rvaYgYJ8Fw5WcbNk64gYVW7Ra6Q9F9UEgyu831J3icQiyBKf5eJ",
  "key22": "4fdR2Lj7gH2XdH6hV8YbcUxTS81DXnDnKBtexVJzeFcmjNMtbU7B1XeQmd5xQ9X4EMAbYiHUQTcJn8G4st6vkd4n",
  "key23": "42PQKTEkuE74z8Q5zdLXgLHLZEcazYVs9HtDeG7gkKoPzVoaP19mnfwZcrUXvsutj2JAiEPLAor2c6TfDRXEVDRz",
  "key24": "5fQ1UkCtZVBuuLtuP16rAqqTZX18i1odrFoLwhofoW1PLuJfsbQYxfQEQygadLR6zCkuuFxvQcixmUDg9UQ3ZiBt",
  "key25": "3ngk11YBaMscd8ikhyLRz7V8kxxV2J4jC1XLWCyLLCZQ68KJM2ZtK5mnmrxt79rgAXXjni7eHkTs1bYr6fNUXxuP",
  "key26": "4sHiyoNozzK56QuFwL6rELP2tGyFYhqGciG8dEFaA1a5aCeQwMipg7oGiJZCGF4benyiyyuUivetZ6zRfRitRj5i",
  "key27": "4DkjXE8Q2bnCsRwzi7oLJ7jWUUuKQk7Jgc5fu4GpkEFJUeFc9LTqYf5ugcqbtHWePbsgKa87Ga4K5iT12N4EzvhA",
  "key28": "3xeSVmGFWYure1KA8tTx6tJFzFSQGtosqe2porK3MAaKGyVesy36VCCApr6FJAi7VrrrPFvv27nRnwPTnKq2ajX2",
  "key29": "3szqMNapAJC7ipm1sx5p9STWzWWLavcbhiaX6Y41NHy5JakjQkSxPHVUvq48zPtX3PgCdfNVHRkVRsRoziE5mNe5",
  "key30": "2aF5VJ48FzE7MHjNdNjogUjWTg13jBsLL76NgNSJuykWcnfpVWEtwxaUfbJBB3SxY37AjBacUWachyPp34VtGifV",
  "key31": "2RDv6vkPtNTDGEJEPn5i6vKf5fsVTK4dXyggDSCsM8bLm9wB3husB4vwJVZg87ACdc7RRyAgsU6D1JZXZLV8vMzJ",
  "key32": "49K8jL6ScB1W2WATFPzbCeKE13icxN3SNmTEWLSbTwHYPaWLYx8v57rs5DWcMCLGxTPNTDrGaXiP7ACpL4WpZBDu",
  "key33": "4TmffoG8Kq9aWCQ8dAS6N1VntcDAuVojVVqcfKdwkC4cZi1NqoH1WmYSayi5APTJeYH7r12jnv2K5J5ykjpzWHHv",
  "key34": "3b5cpUZK5MU2EA15a5SdfgDtyxTae5jNDdsiNh3oysefx9qQ5wjDvLYBEft4xNFpDoEqEGYvjDgx5dnsWrz9fjNK",
  "key35": "238hUwByQU43hX9BZjKQntGH6tppLuWTRXkfApw2brDQf54BVuxDMyjXuddyyouD3Luz9iuoEjchqNNTHpfx8MUC",
  "key36": "4PxaaPWt9PYdG3ht6DeEKmfSVdpRhm797aSGQVa1kFH2ziGbADPNTABBLxzWK5sknGVEuBpvyTn584Td9GWLcHzz",
  "key37": "mV5xd7iMhdEw6NkJtWTmAi6a9A79XQBT1cdP7MLs5UzV7Q4di9NNwqutbQrhannnA5CgPanAFcCu715vTD6Kz5T",
  "key38": "jFqEaqKr3bt6oxGjPyjUDe1buiNC75DGvRGbd5bZXzensxZoryL8nfvgrZivGkDiKKt2JVzbpzsuQDBp1nVCy9c",
  "key39": "xW59CnEc1yvohbAVHmUKd4uCJkuNChY4WgFdYmAUz1oezQdqDS3e2g4zuwdUEdbgBuG3Z5Zbqr847JT6HaKVoWX",
  "key40": "5bLNZUNYufYcw4VSim2UqGueNkq38kddzFr3h7VS2WuuZLKkjDciaK9bD4bbDnbHPKDV57nUEuhYWNkMFtNxD34n",
  "key41": "4bQh4CNfdLHf8GxfzBS9VWEBGnYwy1kWWe9XjTL9yJKz71i9SEZjGR9QjtnPjF4Zy6FxTFNYY36f8uhoCKkXUsZE",
  "key42": "2RHcKP87AP4aneV9CKmzLJWvgsVAKTEgNCBELPMDjdeVVEDY6jGZxTbCy9JsRE3byrWJmzsKo6dKsUaQqVA6VGCo",
  "key43": "sCn9zMqJGLAP5wCcDrTGPFyjUDFvnwBL7HAbobhn6eg67dYo6BkSUbthqxcHf5DneZRKAMZppEhQuMuRCTJMBYJ",
  "key44": "2mvcXWXNdtVF9U6qvJfw78rXc8poEXf5UUTgwusEXaWPbSUtQKZjZevW3dsRwGxrLs77vyJN6AZLs4p2t4oxLnSf"
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
