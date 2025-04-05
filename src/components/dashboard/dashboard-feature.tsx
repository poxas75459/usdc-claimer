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
    "2FfAAPDoB9ncyYxkiw3tmqsfLTGPeoBnd3hrPUNS9tLxSy69oavfkVYXzAKgePAGEDn8FLr8KMeuyWnrwZjFKYAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w14dLkdQpFBaoRnBg5HXJuNF4UTDFaTkxsf1F4fDLta6Mqbsxtmwq3F1XW7kEhwixLViXCNKgCRm7LreJUQbbn4",
  "key1": "3VrgXeZWBUo2om543N8uZsFL8XXx3SCTowk6YgsVFQwEbYF9xFFUUSzWM4KqzNjkG1ZPfbZXACoZPdroH4v3FKi6",
  "key2": "4WFwhpeNwyxsCVjcRgTdB5jDzkMnee1L8NdpJjnoC6wsg1TfaLHJztzcyxvfUK7Yf3M94b7N8gP85ZhRKynyfKfE",
  "key3": "ud3n8qUfaP9rGQrutyvTrc94zo1cKkJpKC9NwE2nuogMLEnS7RUEckEkm5sAQPnyCKND77c6829EKJipbgaEHvX",
  "key4": "o4GXfxWjGGbkJSnRmJV3pPxG1MRvQNRi9j3F9dmKjHsMUvYhA5sTcNd5PV419CS982HB5wbqvwbZb4EQP96cFLM",
  "key5": "7z4NyffmqMCY23ayK4GXpno6xYbWqiHprrTtdw88uGDA7LQLQCNFWfeoCdhEBeQDD6TnQcGXvseC1rxMLpbE4Yv",
  "key6": "3iG9XyUjNC27y3W4aMHy7qcscvnPSDu2JTXKDtdXfNbguCdemSexsMBetnhzeauxA56hr1eVGUrrrjmso8ZW9Z1S",
  "key7": "3r2EKcwejQnVofhvtWzxLcD2TNRzCfiALU1FxSMoGfXQoTeLZSJBKK1s86ZkNuNx6Xzv5vuszQVCwfSpmmjmxf4Z",
  "key8": "2sbTfAGQgop4UpKcBatsu1rCzxPpx8HoFruWz596WTs9S17njJ9tjt7qowo1vUmTAbAvTLs4E8ckofr4zoaZwQH2",
  "key9": "4M9qRwgnEeN1xXUfjREWfzEjhuP1DNRmUH6eF6sVRdBKPCXMBdJevUoz2q8NjFUyQTHPAnCe4cdXEvq2RiQRGcc",
  "key10": "2i8gf39rFcePbpctEjGkeBWEvoHvaA8biJvCA11iSzqXMdGWkTiNHSZtWCkRVhLQ8yo8LCT4wbm2bohyL3Kneqs5",
  "key11": "491rWFEZwgqPws162nXrNwWZByM8Qjskgj2ysbLCpcTTTrU3acN75vPGXWkmLHPdDZTN5AV7XYDMSSCnB621LBa7",
  "key12": "3P3KGFE3aQW5CpPTq8urpAf1jzXUdapYwGjL96gZJt97r6K1XDxHHHeduoEvzQeYJPy6xWexXLrfKXcXgs7q9sXm",
  "key13": "5rgcurVSAjtLt2eiNKxy5qcBJCPRMF31iZpNDYKtGob8nmeeBm5tsgS6V6zLFWKBvxDBtAcmWc55NRtmFkPQ9d2J",
  "key14": "2x5Fe5gH86TvzFS2g7mS6rPBbWCkTX4sDjigdy5goyBjUXzcjuPRfFK2Kq96NmtbwmaiRitxUU6mrFimJNMGeWDM",
  "key15": "2aQdFZMQWqJrzWeiNVbHoQKsBxxvg9ZktomhtfJd43UyCZEQGKk55M7XZyLZyJEzV9u51ch76NsRKD6MRTaWd1P2",
  "key16": "38poqn2368oRvnJSXoea5Z8PKbG7ScnD4AyD6T7ErGT7Wqei9RQ1eaScpjDQTnekhSWat5r59wEbdpzGB7L8kSxv",
  "key17": "2eRSZ6KYntRApN5jBgUNoptGw1xXKdZT5cDoxToos4Haqt4SR7h9d28NAoNnucGrHjs1iLmxxxmnTRJg1RphDNFq",
  "key18": "2cdjg17g7VsEWjpmtYohpnBa2txf3R2s2AYL3uM2AgkQRqrPkdxmDyxvrqfYZUSpg1UnL8Fij4pZ2u3DUBxPZv1E",
  "key19": "uWXLHQT22juK6PhLtMo1dJYWEmFunzTjX7nhZFJoEi2d7Unv7LJ8WGPmEYhXirKwGKnfWm3fm8SV4yHP8XuFgDt",
  "key20": "5RyMEHfbMNEKxPaWrA5USFioUsxTjoe28mzPCJzqoNzqxEqLtqyULY1uBd1DJi5bo3kfw37zwKEut7AAnLJ9DkZ8",
  "key21": "3nB9nY9eNxFJWuEfjjohzpiq67nZQ5BBPsfQJjqXrFvtNq8zw36bmkEXvEmUxJNHa3DKCFHFw5kyYWBTWp2fiWge",
  "key22": "49K2xVJF6HWkgXy1bZjHYf2mvemzxWzPD6gS2YQ8k86vYpedBGJ5CCZPuBs89TkabHDiYjVtinmtopBaXPjchKMp",
  "key23": "sSoRyusmreLmZRoZeZ4vMgbeFavVZpcytWskgsKBGPzZEARxUFWGSSv7Y6ky12FWY7fAqYFr1DVadzLXMCB5qAi",
  "key24": "3H97PHHgFyko39RGVJvKvbaaBdvYcXrkq5RKS2B8v7Ua9qcidkcENCf3k4q6TRLbWNCSmzaqLPvUhQjXWDzkQQ6V",
  "key25": "5nWAhbmMyqVu5CT6BVHZEEUKUQDWWiW2wyJZmFVuHLS96Y3om9qqS3PbTNfxKtGBU23FUHcSU64MHMazgaivyCdT",
  "key26": "3eAJwTwbVQ2w7eCw8cq5zgVAMyChwHStiev9WJfwoxFUJX4MFH1m7EgLjQAEJWpUmZ1F7phsqKNe4oCkw8zjLneA",
  "key27": "2vioXQ8wk7RyyYwvBktG6s4EJn9T8bxBy8TknZQpjHQMA78GX5ph8uUe5Goi4myuzvLppHm7z1RNrL8uMsawUp6b",
  "key28": "3LA9VecVGKxwa6WPs5e4miGJVp845RmKqF5caA17tq4aSUM6iEv49swK2hgotDYrNgyy8EqYaw6Hy2RQmkFVzLH9",
  "key29": "4wtt7UKjtLXkVQGT6vYR5fb3D2V4xEXSdWfzEfbu7hMK5GF5i3JCtJP7R9NEyPFEYnnESyR3yhCH9iJLW5KVp1xE",
  "key30": "3ddqw1bVf5oKjEL2nr4C83mWP1CVDLiTqzWKjCoFEihNPaxxpiLqWVUWBAJ8xpukA4NR2oQRDh2bVFuBpfQ7cD52",
  "key31": "mGpYZJmdNquaMM1jawDLRie3DwTVdHEPdEi7qoma8Sy8QX5kDGwWqh746smSbYw9XKMBkLMK5chzAxbv5GQa61p",
  "key32": "54bxEqGDiRdzTsxz5BPJtsqb5LguDbxB6PucB79WE63qyHdxQo3GftCVbuasLMRZFCWhyptVg7FP2ZLa3g8N5sP8"
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
