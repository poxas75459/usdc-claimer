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
    "4oTeCbF2baSxFe71CnETbuRtscpYdkMxNys1qecyQ4Z1jMcKP23dSpMMab69Kf6Z1qS21TaGQ4wgZu52B2gGzBCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sNS4DEjrRomNQwyixb9fmpfk4SrFZUwnE3N4tzXxMzuVVHyXE1ihHWYRqpWz2RzEeWgiPyYmYzXRPmLL6WCELDC",
  "key1": "2BtXVob7vDHd8ebTDa3t73GkVnq5sPRhy8CbuAY881kNUMJHw7R4ZGQ9qyWRr7da9YrfgZ166P7wUMSiJNxa4SSp",
  "key2": "J41KHg42rLKM7vdtyzaorY8gwWHCXLShQQgWF11r78DjU4tRjxbGHwDYShWX4ou5bNqN5oEH55SkvBQFZhRs1vE",
  "key3": "sLZyJfB4vfioHwLYxwFGpzbWbGCqAMpoDaYRFbrmafwJnRZbHDfrdUqHFhU8PZjbzuUvKXTGsUGyvSqP6hAWFRM",
  "key4": "3v1rQPfK8Y3YzYQr8nSaezUqqwA7vE6CsT3SuVFGvj1vxvQkHLMD5vuJQyqcqF7n9Za2E2ovo39Vn5BrcqTzBCwr",
  "key5": "4adW7PF2j7L5jfDCTfqNXhZvr7qY71ewS9m3qgpVh6akXtVhzdsUCAgYYhyMk4YLUWxARxrrKEZrnK9vZv5XXYsG",
  "key6": "4QjsFKYiEHpQNMpMiUDvC7jiE815WkSeJ5avYj7KHTuGs6pVjvqCZzePUA16257VAxWzZSMbrnHczQdBrre4ZAgC",
  "key7": "4WZ59wU8MejnN5f4RUcSR9J8v1vRDUHWpPvJjxMWVU8sSDw7t7NPq8TadD63maS3oVZPVfcQHEGZKx1a3aBYUcgy",
  "key8": "3uUsL2Fm6ZUki5ZyhKd1aNxRbrfYEmhiEFmPV5ePnhuqW4Dd7eCq2kfYV8U2DAdWUBWG4oZF4jC8uq5MBwbs4sfs",
  "key9": "5wRVsYJJLStb8LfAoFSwev1JFbmfEKe16YVPCnVT8tbNdiWxpXvPKMArASNK1Am5anMoT5bgWW5VWuQtwVMAtiZt",
  "key10": "1gWAtR4r1ELY3s9DfxX6CRsFyFrZwyh7dz8TE3KvM1TAuewwGTepH3j3EgQ98XUuW4QJq4SZB3rXsiAVxvFBrBm",
  "key11": "66DrNDH3R76RfBsPx2j37yrkRSmeYR5tZUpwJRLMzccJUnyZmdBFZLEyUZXFVBmXQYAhAXdtCK5r9NZdFHdYnUZz",
  "key12": "3ZYTvM6ZB289zc4J6iqPfy1YqaFRGaeYqhQfdycBkFLrpC1SdKQ8Yz5dHCh9xx2ZrdyNiAHFoKjgygrk9eiKAgjy",
  "key13": "5yNtwn2L1g1KcNb4bjxbxSogHSg4V97PvVCn742eSRCHNDhzFbx36p5W7Q8ATah5dzr3j1Z9KuD3aRikt2Pb1hJ9",
  "key14": "5xaj7aWpetwKM6j9mxZnNsHgAKG9kPZHNG733GfWBLmwN4XNaob3YRfiPd96nEAGWUVDuWwkji61QK1M8SLB95Vf",
  "key15": "e5zNAAU4R7LKadxChSJP5eurfCREiZSwDVBg7VuKKeKe6YaSLSXV9raXPvnNiZgZ99s2yB8tMydxibt2BBJo6MS",
  "key16": "4ifu1N9tJ1J9mkYnWRbNS3KniVHKmB2Xzya4Q1YjQaFPj9TyGCmpVJ4vm9fq8mVjN895QAHAueQLSe1KRmyY58Sq",
  "key17": "4pFKJKG4C5RFBwsYv1zPdG8o8p4DGqVRmGAczPQ8DxvZRYKnYUqD3JZGGegmhBNjGy78Bot2LYjfrMCpyN2JVu48",
  "key18": "3VKTUjJEbzVnUYXH7vs7w77aPeuWHi5232D78ugX5DVEQXZzg67FLXsazLH8M2mvYAZCApCJe6fEnasfNHCegHad",
  "key19": "53zJoubfgqALVQAVtUHZX8KeovdarRM8ZmcbBbekKwHMpds9dm388JKaECXij9NGag5Ait73aNvyNVsCgUCaLryU",
  "key20": "4V89yoKYuMKNSwUSTVnzF8k4oHPLbP7BeYtaC78JsLC2Ayz6vyvisMW492yTAGFnT8gVhZaDCm6C6gW31EkNq1ED",
  "key21": "5xmaaejFNwBQJyXastawJuGRFLoL9N45KHhEdD2WrmcDpK69tBYYonTpsoiBdaKVAvcZ7BJZjdYTAhavjw7L3M9U",
  "key22": "2jLNYHzDaDCKXc3NAuhCqfbmsMrv6D2NH25BQCujFGfWRtZrb5p1YGH65ZnsZCEvLShBQm7hGGoXP9fJD6GnwxgL",
  "key23": "5JYTRQTi7N1k6EBwzqKSxRdJjfVxEbQsFDG8eLz1Hw7gy8Vg1DEKXZWqm5G1vRQXZAmgxLFGfCfakE7fi9rXW5Ss",
  "key24": "3ovbTmDvQKgnYhzs1kyWWEDAGSwx5pN4r8sJXDhCdiP6F1FMCDWAb7MECEKNXjmtM4dzsT7YbnBE9tJrgVfpoGV1",
  "key25": "2i5LFEw9Zv1dLm6PfgFo3Q9FXmroVAPbTY2tYvA5zwhJWAh8KCLhajkrSQDjySTTCpuYPdhaVbi79tRCGv11GfRE",
  "key26": "3o6u3eLK7piywmpwQ2nLeacLspqrh9Yr4nkoyHrwYQjbEJQVSf5y2455aemJDQpZxMZvBCgZ9dgoAZmvxB1yc22h",
  "key27": "3hKfRefw3XKuttxFPeW5EBW6WKhtACAsz9oiTF3dftm71CPAY394dirzvgyYreetz6n3ThdSB8192ifU4f5xJVJy",
  "key28": "HkpuKuwBUaQEDdN1q2RiJCN4A4iLfQ7Jm3cThutfwbeAQfcYLAroWNrsW4E2VsZB87869zJm2JTCPUoFYEnks5n",
  "key29": "2Bd3TfVpFhU38ZTbxQdggYY6RG9VWw62Lz3HPugd8SrwkvNyqdPHYdc9EcP6sxema53weJW2tPqciHrDWoMzfzya"
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
