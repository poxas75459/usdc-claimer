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
    "3JshoANsh1pYMM8b1a7SHVGtZBddEWBjdnKDzeDVGFGPpZiDTDirLo2JvJh7nBBo4z2JKEJCmziCUQutHGQqZUvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zBzaHtxbWzqYXnyhYLsL9Lrmad7NxpwHTPyj1Z1oE9nKn4Qb4vcFvNXwZyrJr7tvU4ZmX2EdnRS8uZiwA9MALxT",
  "key1": "4nRH74438EyQjFVHygv9G5cPcMtweoQUdXxSd48La7PYnJHHGrancnQYTB7u9EZ7MnvxQW4QEy4Mepno18RqMBxP",
  "key2": "2nuDWg86b9s3sHsLBuDGRsVdafAxjUdj8xBpP8EBeFTEpyDNr8yn8GPJbJiVj6icAezf17n7cwxfBCRsiSrXKLoY",
  "key3": "3jMCtk5iW2eGgXLrEEyb4NhFgQuEzVoxHW8ENLH5UtZk4fEg4GZk7F2KpQ3YjbQkPf9RejuE1FMoJRQePPJpj8Fe",
  "key4": "3FGzbpSpTfqbyqWcDV7f9TZYSCWycFrchQzAu9UCYvJAmeRy7tmCTiwu92PkHcdF6Z8s1pdDDwVbHbw4p645tvh4",
  "key5": "3NEJCzwKrmwh3N1M5sgxdnwLKNsaqrhCeRN3Ck8CFQZkPyqqW32yLUk11b9jtVfLBaXQjrPejFzZctvVuLrA276Z",
  "key6": "qcG6VpvEU2nd6McF2E3HmeQm6BUiLr1yjm24trukn2SCt2vVcxupBqc9WsFX1KaLTitzU1GyyGFCRbwA1JnZ117",
  "key7": "mJBvAoZsafGcz2ZzkSai29nagK3tiqYeMT1Q6w9n2o3hxMjDKep6kbezzVy6JqmfStWxvKs6DzqSL9x65iQKvPt",
  "key8": "3RpkBDez7ACK9Y6sjJQmmzkSZY4z3jFD9uGDUjMCGKeDJE5Mov1RjjjsQYB823Wr516sUDzqds78gqWSbhuonRQw",
  "key9": "4qdt1tAzgurfASBiHcw6JHKvDz5pR94gC1ypAQryvNG3rhz3XxYEaBYzs2jCNoA6KFAhcxcAQXWja8eZKDHze2cq",
  "key10": "2cRHL8TKQQkJt7SvhaA7EccemHKe2Jn9wabuBge2KyBQcWMCfDcxKHM6cA7JfqrwzZJK1jBjeAEE3L39QxyrsArq",
  "key11": "5YExbXAPu8aqjvr8AhH9EvRvYBpWW2aZwevBeaQ5aPChM4NdhT1cFy2hBctJen4M2Nayh14qzz9BntK3zxnQZfe6",
  "key12": "4B6WmnJS9UvF92N1MJvsNzVrZdMxDjPBiU2sKFxQ1rXafFbU5CT9tuyKydBgWEpyRL4Sr1WcrjQpj6wXpbiZ2hp4",
  "key13": "5SvgZ3mKXGxayG5BSg6odQ4fJVwPLdpqTkJidksAsWNpxorf7YDAUj3fwDoKqCTWzZ87uguyYG4mFf6eZiw1sVVE",
  "key14": "3L99TNuueMnqXBqiLUT5NpCswpW9tZQiPuPLZ5P5deNcgkJXrKFw6gHfok5VzX2XuvgiXiTpXATZunRLfit3j2AL",
  "key15": "3X2vEFTVSVZFi4EFLoNJBQWiK9ym1GE61GqKYWn4ufudhFPzGN2r5hPRMySikQ4gQ6Zky34crNAMaQP3boWk1nYe",
  "key16": "5BnYcjWwCRRPCURgCqd1eh6rbSpBpivKU3aoh2netGugyzrtCUBKg9Qa1r26sGyRYNqiH6Uuq2sivpw3GZw6HXHh",
  "key17": "dPfKEpwK13UiFJfWcL5mAKgtPesHY5hs9QG3scGaTfqdJyzEFpS9X98ArxRun4QFkS3n2dc9QZpFJK3kbVRXFjb",
  "key18": "y5ucBAWYM77HpPHySoMcNQpdvGHdkb7EoBjeRTBk9zVvBQo8ePivWiA89kw28kXnbnJjXBQw6vjS2m7GBEa42ix",
  "key19": "9bhk4RhzQ2vnPjit3wzPwyZ2tBTCn7RfGxt7DMVUp2v3XdHq2istUNkAeeWtpeF8voNrGdFkggR56ES3wJqqMZq",
  "key20": "2PMDNS4ot94HxL7LgNPLgGnygzChqTqzh1CiXTVB6EAvpqHrMqTHxHby7ZTjVjAouHg2kmBMx4RNNa5zkvHeNAXk",
  "key21": "EUiPvGJFsnmwDc2uzYBniNXPmmZXC813AxuuUrbfy37xg1mswA89BnT7RHJ1pLQS1EH1SMpbyz5fEWZDE21QF98",
  "key22": "4Sds5fwAdCC5gGsp4fbzS8wmLHboecnwy8xKmz1ytaM4NVC3Dq1LrPGyNTTPia19BZS4FtVXzzjSgHHBieWwob4z",
  "key23": "2oRY8NDUphoC2TxHMG4faWVvJTwZbqYCHd9pJ1nqCDD6W7Ad2JJareiisgk5KDe8XMMMgDwYs5GFTP6r7Qey1MkX",
  "key24": "3jiHXRgFisz4DFXinNfsD5Dd5RsgQyiZcdx4jLKZF6RsMEjyj1QSxkQrpTphouFg9xAg9DsfbZHhVSFX3EmVBMdp",
  "key25": "Wd3mwHsVPuS5J112sjcFiPW1PwkQQVEVrZizz57cjPkVd3VGQBREMVUE8GQErbYTaBUW8KEZBAM237M7VvFZ75q",
  "key26": "5ivDAwKgKSvDb1HHvTArRTt5Hnwv4Jg6o7ueh53ivJhqPSDaKVUG89sH9iKajfp11XtRtS5hFbGdWLSdUbePVfo4",
  "key27": "enKg7KQoPoFYC1CrkwmhrmtjaVGaxQvAy3UPR4jdXVcbn6iVHkW2VzLRK32jZDE8XFAWFsV5QqFTApEhwyHn9h2",
  "key28": "2CbHaia7z4XiVAHGDu1WQsNmoTnnTcp8db6M8eSztX17XDt1nV61hYPTk4cUu77zZtUP7DQ1oZVwd9HmpjdSCAGu",
  "key29": "2PYGKwSwu2j7g18g3uz8UjuUCtoVpeMbrFNaphgNfJRvcodqJHttcrF51PtraeyYn6Bn3jv1fbn9xpjeGDAwQLPs",
  "key30": "DRmsZ1BoBGgrHb4Mmx9vSsyAMWw8oCSaDUkMj2K7skEnJT39XR8HAFX8CYTY7VV1XJc7igzEX398gGKYWFmm7k8",
  "key31": "29vgeS9qt3EmxqtPg2j9uK6QfP3FRzomVGdiSMw5LER8m22hnkPB9resJY3SEnkb5mvVKEa9c43SZc1zpTRwT9bv",
  "key32": "2SRhVfbAzrn8KjEbNfpeM96Cr63iyCz3ha6rSsVW6B4bnCzNzQVRXrkXkmNH9KH6GyyVx7DE8s7kTzCffAvjNaZB",
  "key33": "jvyrgHMij2veZnDwBFnS55TZcioTfyyrMuH9rVprKsmS4zznYji5odpzHy3Qmjw2B3CpRWvKjLosR1qfUni1QCt",
  "key34": "4s6DGKGdg1PK4PS9m3k7XPCygoH9CzJzTd8cRfK8dxR8Rbc9tbvkNQLmZdhAyezZqJGMh2rQhRrVyuoCAcupcpTB",
  "key35": "wmBiDBhB8UQ8CSCtKyzfKhm8tdGnFCAW94iQTX2o8unXzcFXFDQatR6z4zMcJhU1HDtHowK2fbYVk53h3j4agef",
  "key36": "2YnbjWVdpXcmJ5uBVPPdniUzLWRFiNnM2TWuHoFmbuACESW9WLQhkSL5Xpz6NdP8MwmaFNmvMw68ZrjyvqfDWa4K",
  "key37": "2dkVTPDy1Ka3cHRMChSYbGwjEGhWBrj8ezhFST6rnDLPmNfRVURjtAWVNkuas7766Zn4debia9tFup5QwxS89h3X",
  "key38": "3PE8WDCPT5aQaChaFQ6dzML1DoZt17ZwRFXNQqXiWwxvQ6VopRBykquReKp9G9k4r2twXd9uiKGxMArjZmSvL4bm",
  "key39": "5F5K5o1PHnV9NnvK1mqqbEkQdrPPNPizt88HqiZpYR26jCYBxjNszK9BNuC9gx7o25r2xVwBARqCe8tdpsRPcY7A",
  "key40": "3zu79LpYXwAtyZhmJ61y6jkxothr9TVdcUQxJboSo4ecnwJiT6SN5wLXNNMCCjgF6GKeK1YJDokuVoA2nDyLqP7F",
  "key41": "3Hoz91kWPEEU1Yeg1Vtbfz4fj5rjPqYApJZi7NNqVAPw85dq2MRWWTQtrA6EA4gCYyvdTLHawokzAiC61u6ieJkh",
  "key42": "Gc3zEEa2AmRMKhQjko1wCwh5rtserPemCrH6vgUsAcTkvgxWQG7vEiVHZZGxt9sxJbo2ruYb5o1eYC7wnaCTPnz",
  "key43": "KYsB18AU9kvuGWX3YCRib7PMaqPNFF2tEvKnnBBZibbAe36MM4DcW2x71JA8Tn6qTDB6bi8Azc7jGL7E2NeFRVA",
  "key44": "2uqwFemQ5sQcg7sHZR5GvV2LTZJrRgTWvE9Q1EeCyYzoPfhJeMxZ6xafHic87EpC1onF9d5ni5Xzrv4JfnLVeP7p"
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
