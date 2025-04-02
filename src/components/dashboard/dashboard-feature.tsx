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
    "3NtFmSotVRrMjS4rLpbmxpJnrtmLvZ8WfPJgQ2xeZNQKZw2rNbLPes85RqHb2fAZRBQoHqRLEsBmo4pLYoaFyaRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cp9GLGEnnG6M8E6QexAkgKmQYGawPYimDGfD7DfnUx1KukpSMaYPJPHSpgfpUJdM72hWNJoHsvF9zicXk1vykgq",
  "key1": "3twXMZfTZFmqREkEbi5g86sfTJP5q9ZcRyh6ChY2Z6Urg4hE57y6xDoWEvk2N1yLuqBNQUNp2mS5u3mLwSKLJNQm",
  "key2": "4HsLrd52ypEfeyeSdNyaqMNkobGnEU9S1Y3DWJvdTVchM2UhVK8jpC2LT4TphLt9hapQMjmdYV94CSA7GYKNNuDd",
  "key3": "5UKW36w3D7QVf72WGPTfMrBxrRZxavKE4LPsVx7D7TR9cBErwhXaKPPS829JnGVWb6nLQzp6hZgAnbxdrkoic4z9",
  "key4": "rrJZCsGBqKqNuYJ6UAQLKJTczLtT17ATJVNTeYhNEbKyfyaRZ9LST5EZG5Nvr8dz514QJtw4RZpmFDthinJLMzD",
  "key5": "2vsMy3vHR73Gu3LZcdJnz3gxDdM1LmSJp54aA5zUVbNhZeXCPZ5SXTeC4s28kpFva9oRfzmLPYh4SuLKuA33pQbs",
  "key6": "w692rdbqmgF7XHTWidevzdsuztA9Rzrsdjr4zuQb2Q1LMLa2tuoAUWR79FkuR3bmmXRdLAJRvdatvVHhhjrsB3V",
  "key7": "2wVGZ8kQuihJZ1Q6AK8Rj6jbCzeacJoexaGTALWLLcHhtD6iitmdoDRQ2EBbnGP14ddbALscpKVp6zuMCwmy8fiK",
  "key8": "4jgaSWm7zqnnL1kNGkqMGgE3ycecgDeDM8eHBEw6KLSEKjCzaC11SJdeDVA7yiCdCwSmsmwTts8fgpMnW6zdk2vG",
  "key9": "586RdLgi7Rb5987fYNeKJWwev8QZzubWw71A6s7DwBTVrYvcoyq9qoofV5gXidwjTKUgDodk2vzdG8k3v4ytpffK",
  "key10": "2HAonbdyge5s9grB9vHfwThzDA4phnD45BHuxRe2hdr2tHAEdLSAD26suTXaKwcU23yDFgFQjHs9DrrwCk8Pxh2e",
  "key11": "LvoxwAezfkqzNWCwyi7Uxt1XS8euFcgUn35yZENmX1hhtjY3ST9DX43mupYVZyKWmikD2CW22trw2FVKURftJcp",
  "key12": "XHuMR9qKMTUBEQLW7hUvYuZ3KkkWkA4bDQXX8cd9MrUn8XixK8k64FGfMu2ERafk7FdCd4sqPeZ9YXoh8ABJ79v",
  "key13": "5ab4745y82CTWFQxfb2447AjMSCRjuN2TyYCwewpN6Kce7YqAy566UCy1cadmzrMEvvLFUVv2jWcXJgpmHekew1M",
  "key14": "62n2C9KY17dwy1NUYZS6SS1RKYygn345TpicuLan8enxs8H6jq7zSH2LUKedn9jYPtp3FU4fpPkYtVHVnsT14iej",
  "key15": "KR9cVrZUtTpev3mejASkMude42yznbZ1BpXbfPZYjs2eDWxmGegR11LX2jinUVsdcsyAcKbTPznnbzWKfNRP6pV",
  "key16": "2hn1uLPSqUMqgXmoa2Ff592mwAACwEpYfSYvRXcBUauJrSEjcj2HuB2MvS6PKAeLQxuw1xVWocUSfxTMmadro7qU",
  "key17": "51BSga3NXCuV7aRhYd6EKhFJdUcqHeddompYZh4KAYYWoBjh81RJk4m5Jsg6QLP9LEAVYoL8THfA8uGVSzYCxrp9",
  "key18": "2jJXc2VJr9L4WMqZprBq1dGSF6zRGQ48A5bYEzoguySpyawjekGF6V153riMRewFWYrg48BsvhWk4Y2fGupoqDrW",
  "key19": "2SsdPQkwEWoK61mMNeyy3r6G8VwmJWTU6LskcY6pzJkKEJh4H2XGfWvdfVoUM5VNuAhLXjaMPuKczNNPctLKJPrg",
  "key20": "4DcWqxowPdjoXMXCJohzHV6xigbNBe9J6kzupCrQTYxDTXUsJxJo5wQ86puSHNyC5zD2244saBoc5AGdu2xjMKUg",
  "key21": "5yWucuzTKNK9RFBKr8isxyeEYsAcZuaxBjpYWESGVmWrGDPB1xSLir8uGphqnhD7eMiYTmzNfMsKwgopP74KGked",
  "key22": "anTrCcf1birhABkuEdjTC9brgmTgJ8YEwAqsim7hru7UBoCuzdvD2Gstgc3ykbM8CjvuTYshhjofuBz2viyDUK5",
  "key23": "3FRAqjG7mUNeryJzLt4hy9rhuZnDoNAPSMT7DBrLGAFCJiub6vWp1T78EWkETYDQvRj6GdumfkgbTWV8R6aUP9US",
  "key24": "33uKF5jxsUwuBmoZzLffKUQpWj8vroDBum8eF35BD3GKMrghxZ1UheX2vXcYx3VizCp2PbG5EqCBShG7yoB6A2pe",
  "key25": "3skLeAQ8ra8Z7PmXcncXBULK1T63BmhAhnYjRnhTF3zQpfXz9b8cmDTGw2gNZjn6o8rvAPysj1p9LSYRqTRKwEyU",
  "key26": "5x3DbfS9sk426FrfUBW35Kb2MYsNXFX1mFDMaTbq3rykPQMDPJg17aQ9h9GhJEBhPUX48yKqecUWKecBVg6NwcTn",
  "key27": "WJ9QgvKwjZM9VCtMfMaDR4dMAnMXf56wUEskKyKvvywk24W41PvJPaE1DhLHMV5vkYR5wYjuLsNzArM2b5LRKkS",
  "key28": "5q4NbHk9NHe9DxbDtzDsSPupEqyjfQZKKYssZJaW7qVnEMqFXpsyrqwZkKrXuWhqSD4BpDyqACP6wHmTDDDZ96va",
  "key29": "2d9GwXX4kwG2HERaEcmv5u8pJEukuHWrkWC17ygSjf8djFBa5yPscvi6iypMKmhmV6P2xry9qwHzn5t4MWKBZx6M",
  "key30": "rL6XZo6mDYZCZLJG1cgyRfUYopbED2X46iSELSouHb6gCQ1QMYznw4wL8SJZUvJYpuJPn5aQtwc3CLCMjcqUEvX",
  "key31": "48LZbmj1jbGEzg3J92rySsrNBhzi8y7TewFWJUzRr2p3tJ6nNf26tnJqmsMkNhvADZfu8PhyQcexP6U2DxX9pJc1",
  "key32": "5tuLPeGGYEWkxqShbj6w8GXnXjquHs87ZXDb3YynUFxQQzT3bbSW22X5ZhWm3yPjMr2uSncL39fj2brcv1qpsLni"
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
