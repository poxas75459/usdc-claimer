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
    "7Y2VxLmrJtQiMD4dC35pjawWw6mn5MznNa6HKxkEanBSo2bvz1LWf7rCHD4KxrhWWUYsMt1km9LFfT3UKNJWjt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CPUqf4jS9DQzoJYX4rjYkjYTKm4wxbzdR884mzShyUDk7qFkQco22wvWupa2PZsttMdcU8hAHTr8pvQMj6btXgx",
  "key1": "61nP16EfWvXX4jc3NajZMFtdDETsHbjNFLq1CmRWuJ9gGm1qbsJeBRzsVEYK8uzoEeqvxqb4XTMphMg16YJSB6mM",
  "key2": "4ubtFR9hQY7ESLaDbZH4ax9BPMjUPVHsC9yrfHtWKqYpDBPRNiYS86xiQuxfe5wrWQDfjQ5aHc27THKLczCC2h8v",
  "key3": "2p5B8APkmEJxNddUQDej4sR2goJcifbrd3LmreeptqZAwCmPyGzM8VWcp8AG73cjLjYAhLBPrMavkPcDz9EwC6VZ",
  "key4": "LJshmY6yBQDonTdUgxa28uLbBzjq7K3Ajpp5k1pLaGV6mbarjqXyN79Ex7g7Xct8KUWnoNPcP8YMthoKV7ERK8m",
  "key5": "5oP9cqDfVFkz8dQzSZ9xof6Q2fSmi6KCyUHn6oE8gvEpRkZtaXdDAo9Hu8PnskN55Z6hy94oAD7LsNQmtciutrU",
  "key6": "611Ws8d586u684odp5RjHdEN9uXdcorh5Dtwbq2zCLmo291YtsJVACmhyRfFnqVVrUpWELbJW7JPrFLk2vZri5Gs",
  "key7": "4sAiALYGXpe5M8E76tmSGg3XTwgV4fZ9wXjRuaeK89Q7BDC81E15GYq2RmrziDYcGGJoWxwayN2KTWjo1o8DgcKE",
  "key8": "4ihWkG6GLDHimQUcgFTx211XJScgeGQhCNEtLP38cpboVsRgc7j3fvCT6stzW1ZPHenkUvYYbmgyMjXWZUjuqsb9",
  "key9": "5rjbQ2UpmJcz92oeuFu6mZn9AfZUdnzYrE5i2BSFbqEx2fKH7SztGX6WxChU4TXZpPEsGmuTbVTMHmiJB4WvxGja",
  "key10": "pTBwEoGsUrep79SymeoV1W1NQ5BRLgqEcTDTrLK8gD5eufwBbAZZZYT71QUtSPJmTD8h5TjoJHuBno523fUR6ac",
  "key11": "Q47NV6zPacYU7jkNwYnpA9VoZTvNudY7rw96bCCe2nbdBnygW6eErvdJnf3YrRDT1jd8sY3wFrVt9ZnjpBTkZ8Y",
  "key12": "5zYqQPkU4Hi9FVEqiHjdfNzTiK1rJ597bTj1tzqHt2NAf3n9CEi8awwu6ehSuEYJVZ4gKUfZnQiHJcCxP5B8zgBU",
  "key13": "5vU3sua34dbCh2JZA2c3hpnDANGLBaAGicz1MauzjL9hywoo5sDakt2is8tssiZ4nM4cgYaJVCWKiUdhd9QDrUFu",
  "key14": "KvU6LyjuALbqXQaUTLgNDwmZsstDYEt4ouQBrSPkpaxWyv1CT4s4qYJSCLYmvDjgoC6mmSpa2mpT5Ky7cBVev97",
  "key15": "516wxYKWsHxAtBPAN3dvJL4xso5mjmMqUWSd6wWp1HpDn1SFS2Qv74XRjSdPE239xMFhAkR9CJMKDVLrqFM3JLjM",
  "key16": "5xAksZMpzEsX6dm9cYBo9YX6Md2g1PPYpofPSiiTCAH5aL13k9f3XuHzM3rBUPZnqTnc6HCJ76chvX99APFtdWWQ",
  "key17": "5fjMsPzpKMaboSzqY4nHKH7ZEgP4mPhtiaLVUodtVfdEyvGgZ9vJeo2CbY3xRvejuhmf53ZzUcMGWy64pFG6PkLC",
  "key18": "64a2H2WxxDiLjqqavY2kapE7c7ZUDGrNR1GxN6aQF81atcV6oCMhrX6Vp8VQBYujkPVVAD21JbA2MkfiEhE8phG1",
  "key19": "2GH3ZKSZv2X9P1H6q2WJfnsmUaWxVubKw76AsAkvcZuLTnC6MVQhBfytQZcCUi7X4kTsFGwHw3SzGaDcvjU31pEZ",
  "key20": "4wUYqbquqe4QRCh4JTameqyp2BTrZ2GpPb2P2cgtsQ1DxKCz1SMDBidiCEHQxQP9Wug618cgea4hhvyAwvoQ8xyk",
  "key21": "a2DWrMdrq5bxZcYuaLMQpBghC7mUSv3Dw9TXULRND6qGXrMCG2G5zeFqjreim1s22q2ac6mWWGujmbNb64pK4my",
  "key22": "2oiX6TjeAL56Gxds3CqH9Cs3hoDaYgQSWKmJNcgibjLBgGaPLVUeRRyBwDkwfLzkCBPXwedULWzu4jhUuw3pVet8",
  "key23": "2dtH4bHD4DaLUQGtp2B9eqW9irmfYzTUWVzEzub6Gn9DJtcDrgJHAFzxAdexRkQs6dcrSq53JVJmuAaqwcuSrvN8",
  "key24": "2ykVFRhkZXJejfzVhfrB3351Dy3dGUW172S4m5i8cmWmJ7PfjSEJ1D97axcPMY5ZY125NpyhLemdEotWPUNhjZn",
  "key25": "3Zeo6gr83CCY7QjU6NMrRUoXPdy2W1c7qFwVX7VexhbPF45GpuSLaeFNUiWQACcUsWYeJpJYNUjTMvLzvY3d44Q",
  "key26": "5AbtVenYMHCFj5C2vsipPw82NTooYAALyVq4bJi1DKdTA9wbP3VzYqaF4qZS7cQZZnP7okRZJP1damkwxYDTbQTE",
  "key27": "D6z8eRBDNEa5eTnE4gzEAh7AJws3ezbRcuZs8UE4wxZPt8XHnX73QGvQVtKjcXJSworyrELMLT4pBed7SGFFrxK",
  "key28": "2sdEuKLo2K2ag1jDwvpXyYqbXerSvkJ4BxL2HVerQuWeCg42DbTLVBAAFR6XQvw5x31dEf1VkHTTHBWcP7dGcbEK",
  "key29": "2PXv4fTAwDnDwgGNWTF9VCRPffCEhVy77j4Re7THmYY5pUzGoNRydccMSaxBYHWNMnWXxsquQYgEwFhezTPAtGst",
  "key30": "5D24AbMkRgRX1MPzHcVYHiPWAvL6k9DLP9fMmQ5aCk41WcL7pN2SANem18kRiwSpZvwVP4kEUnLY7T6GjzLXsQ3X",
  "key31": "42PejnxiAgtSaN3AxapQ1uvgPK4fLBzF7MSMPzSxuRiSCXJVoQ65g3Jk4REFy8R7FNfafJmqjukFkAbZGgrSXheT",
  "key32": "3hroB7j4zWzr5t3TKot3Lq5fd6SAa5iyPSsuNY6ZdBXXcNxQ3ZUGF24obEcYJdDX7ptTnVjSzNgDfzf4LMAuzyEY",
  "key33": "5MD6PH8VxiyNC3tWf76NJHpxMnfhPcvKegUyiAqpdCjZrQRCgnq8gob3sGTRkrTNe8zLxqPmL7jHoNYYBvrVfo8c",
  "key34": "2EoMnxtMaEn91gMfwG2gafvD3jRoCUfswxr88uwVHFHbVe8RGbwr58RkdcZGqMWG7mmkw2LTf9PFo76omYvGQiei",
  "key35": "4sHLjom3N4QZ6SRDxbHGKvh6VSmyX5o3UeXPtqmM7ZUD3SeohG129v1KnDTKwrVCXafPQHJe792kr3DE5xs3n59w",
  "key36": "3CDUj3ooeCBqUhPMLr8BFp4jEoSGdZgMhihCUppr9m4XFNaKDtzoWa4wbYgSyCbKRcBhqhawY6U1fCtHZeQbLaKQ",
  "key37": "3n399pCsfiN9PV4QbQS1gUBn4bcEZXnvb99ErU9f7LY8EGJC65hr7tUutwqjSAhofBDHsPHDY764LYjcZzEf78LT",
  "key38": "2ApUePeUMJ1CjuNxxJWCdBM7fZeDEergAdViGn45X2r7Fvqa2yrS57Rdxnssq612XS84SoniXJpKvBeqdhCJhPUs",
  "key39": "2HXKFr9nB4dXyhLojaKs7CzbbwmusJ8QRFxxCcnryTbrc9y3cLfvgVPbrnbxKNys2wqhks7ikXYzH1u5TjDANe4i",
  "key40": "Ar1zsKHiULjni8QFBdnwEYb49NM7kLhQx1tNYGnKnLie3U6t9KmEfeLhVL3UBV1CzDmM2Xi8fYeoYvakzL6Zq7s",
  "key41": "x2VJbbcYL5SCpuZbanpQRujYyShmZ5vHDp7xAJGAEAtryeixadrYU61aZcqPjYoE6SbSgAZsN5pFRr254nVBsCo",
  "key42": "48UAmL2ETr6CxisSMSoSbXmd7zSNncxyex8Ajus5Vifqbq3RGonYVppZ68NEn226EEZM7MZP5BaJifFqbeD8BXS3",
  "key43": "4wopEWsBqeKRhFAYhBEwuYA5hpmC2Atyuj6WFmbcyJyfymQWnP3n5hgN6hKK688hdFexMKZWeHKeX1x8PpASZN8n",
  "key44": "5JCVZ2ccdhvUgk7yeQgjVVTTE271hsFhhyjJ1gWMVp1ZMtUqoHoqBrHTcQfTKXmSJ24S5stSdxpJdBuxwJt3BzoL",
  "key45": "KUa6Jtf5XZdkxzat7F773YTKudLhY1CNiqfMyt8o5VJd33YSHeKdHwhiQCPjuAyjtq2gVxopjta8NxZHYSKkp7u",
  "key46": "5KqxVTXyt4BKxXNiH5coGDLvT7Y1pirx3mASDemAfk6iDtZ2SgQhoUS53WwS2jnLrV1UXKTrMZoDUnE6zgQjMrGF",
  "key47": "4yHr4tEubbafhivBSxFjpN2J4CVR5BkunvDsaRodx7KTHQRW8Lh3wEAu975G52NHBjt6TA8uwbXJ6GaV6eiK7dBS"
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
