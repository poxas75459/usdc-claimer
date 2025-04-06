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
    "49Qeju58VbTeAP922nK5JTWeUdymATjBvvdJ6x97eFitiYC8c4PvPp63UmKuvKFok4CNFcnQtPWjar9Qv6nWhBFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rU2EkWCxS4VKzPvQYTt1cYPpZWry6Y2askQrXVqXW6B6Vpo1rsRvvnXSDH9QqWwoEKvzrN6hzFNjGYFCafMe2dD",
  "key1": "4ujp3HtfqaB1QRabqKsnnH7hy494yPHY4LS1twRchMVzvRsvAmwct8oDnRhRirePiz6JSTq73ghkaJkSHCZ3nSxs",
  "key2": "2bREsbumEknHR3W299NbYyiAadWq4pABsBA8Y2i3dr7m2o4EEuwsCDcJGZiw5nk59Mm48pFcvahTDUA1VnSHmq7h",
  "key3": "4E3GxoNB6jptLbp82i8zyZZV73vSgQQoTYunXqdi9PJwi2KuQARF3fyFSX7pLRTiydanv6WszwR7Y1YbKBpX9BVz",
  "key4": "22RWUHUqYf9DxpfdBxbur9KbEkk6qvHZCwGYsX7ru341B2PVbbfVNenGaA5Uem4ddd6LHLcop5XZSXkS4vx5M9ma",
  "key5": "313eCYA8ezfdVLebZLstSU5wtnY2Z1nM88WBw2FadPatKSQwU1TZC7pTKr5kQkFAesFViEdQ9UBp5HEbmMbz1kAj",
  "key6": "DbTPjs6i6N2i6wBwQBJSBy3KqAR3ubtn3XFBkHUrsN55y952qzGG52v3FBKX24KLHvNNRg1ZYj35Mk6GH9zWCsg",
  "key7": "5dnUy1xkxt7AokvhU2taGibfhApm1fe2YLhVanZCrKNgaRvzjcj9VyZBgSzoPiFGu12Mko8uJKPyHS5i83gHeP9R",
  "key8": "35QKbbU4SH2QWfD14J99MZt6YUZ6fuRQYRPvjnTQ45nShzEJeBpjA2cLxT8gqbE1EC76hXNfugdVXks397TovQSK",
  "key9": "3pLsFFTbPbXzSs6sLWyey4wrNutLEu23nFUQMkrcTegFyUZVQWeTypkWJM3A6R6sJHkSsuCFmYAkNeq9ZfuX2Bid",
  "key10": "QKCRyVPr2TNwpLYoLzNqjgtP5ibEX5QUVvZqepH7TbC2siMh4YfauVYJkh1RSEo9xzaTv91GQbo8cZc2nebA3Qq",
  "key11": "4n3iGr8rAPL2s4pfAAsdtpRL1LDA7x16vc2eeFTwfn8c2pawmf6uUfRg5sxFz32D8Ahh8o5Mdt4BDGeoCJYizWVS",
  "key12": "3aRbeAWC8omKpWa2j9WsCky1PfKc24zGLKM7LAqzuQFDEmLTtybWMLpmJxvc9XVZD4KvMicQE1kqMsjJ32RSQJWC",
  "key13": "5P9oiaWVEr74mYQS6ChpLCYmmLk999V59YtrP87quisxtz9w1s2BfhDrz92AdNj7nnTptiLmV1zngUicXDatdn5U",
  "key14": "5iAcwi8LN59pEkbvNvyd2cYNMnJFHWGvAGhmCA31oStt2NwyGH8DS9eX2zfy45YJdH38YeFeFj3utipLtr3c2ZQz",
  "key15": "5sJnpcPFddGpPAk4pJbEvJxGkM7CLtvPtBrNYhUU1BZnsbMYUgQ17J4SfEdo71HxW7z8Lj3wrGYqPab7Z9JD3m2i",
  "key16": "3NHftrjjLes5uhX545KpiYsCxAtGYoj5KMWieeGB3MFjP66CncCYhxp5246ggzLzk9svwzVnZ7FgKdFng3oKcd4q",
  "key17": "36vry4JuBQReStzSZJaaUaCvNUTFxJs77c7NHi5GFfSRU9ojevLkaHXv7tJN3gBP4yKKbB5QUrYmWrKtysvq9XYJ",
  "key18": "5DMwfUicM4KfgLbgTDpkQTbG6V3QjkqAC9xYmhRmRRzLPWCrBZF6DiX7MNnRAKR5oYwkTJWnrMt2hTbxRWCuRLZC",
  "key19": "3bM7tzuDKM5W9eVtnGGsf1aqWBq5UxFHp8D6bk2zZHqDt3MNLbG8ThSS8NLxM7SytZgLnmnt5f4JpR1avipNMwsP",
  "key20": "4wmT6C27BWrg1AS6QWpMo3aWNJ4eVp9cLq41GHjhH8U1bzeZCQuxq92zs612NDCqQVqvBDuFHyMMZPXNHgcgrAzt",
  "key21": "3NNYpjqV5HfR3W5bAYysfr5zAKNFWMWUtSMWhuejkcTPU5sF62CzXLwVD6zwEEUqSjSkyBupPgipznSunybhSxdJ",
  "key22": "2CjtNZd2SqashPdfh7RtuBCjYxawC347SHA5gTPcJxXKpAZaGsEQdmfy8S8C8oXrJ2LZDNYRZQzPEubNBahPQsXT",
  "key23": "4Bdg5q7ifXN1BhkhNQhga6UjQKmisTpm4XJJiS5SF8LmMDXEwPPf55TbFGgzoG8zY2vKDFzRM74TTGQeoDFPQ62Z",
  "key24": "2tqGJudZp29CkJGrcwkK4eQyGShk3eRfwSU3MNJFEZQJb7xPeHfFBy36gV1qxa1x2ovwhF7ib8j87AJ1hgAXc2Pt",
  "key25": "5e1HjRnEJpYPaYtQUTwQGe784F4sRW3weyinEzKschfZJyCyuZdbrFfYMKrBkzH5xNVBkmccAP64XvTFPQmJuCjr",
  "key26": "5jFr53tBGR2H5Q8UfkZDujgFQfeNRJdUaLdeCXLEmUBvrMSvyfam5GhEVnuTjKC4e1b1DeeF61DEru77iVZq7moM",
  "key27": "3WFMqX5vxzEQSbzHDPN5yb4Mhx8tYp11c6ZNZ9gFbhF481atWHjhkW4w9XBso8rS7eo8FZYpqt2HsVKXUBEH56VH",
  "key28": "21Pzr9WMWfrw5CZ6XXcX1w9REgoHP44LgWRhmZwS7REcSH9Cr8w5Ke1VFHKZC76YcK7a3qd9vMVTRxT1iSBTX8Nz",
  "key29": "StWsryCpsLGJL8REVK8Rg8xCw4mC9XgPM5jmeDELMn9p9Tz1qkhQG8zsFNKaUkYT2BSQ2tfLryiJqw2PoKjNXzG",
  "key30": "B6vNjV6DXLo8CSaEqvUsh9dpbzZFpJhvNLqr844nm8ibrzAya6C1tpdPQGJviHapPTyevdFsvTNuGBh298kVfgY",
  "key31": "2RDJeJYfgmJPFQTfwNV8MWdfRYQRVAj63PqNT7WzwiQS9rtsLoxAi9Ekg33QYcAb6Bbpv8D2LHY5mrZk89TThAE5",
  "key32": "5Drga3NEvhhz6J2hLGoq3cxF9M5Q9vsepS46rAy8TnC68N2CefaqEYMzVFPbQs9D4TmYczg74iuxbqqEMV82Qrjm",
  "key33": "25QmvdKiJSMUfcTtiWUBVFGmxuKKKwbZZeyYfgonPphjrMsUBHCs6REGWh1D9p4bvwP1nksM2B6pAuQqnzVJmZkd",
  "key34": "8BbBNC5xzVnrZ3URNqMUMiD71YF8rmihEaT1Y9TEvv6ki8cwhndhrWQhML6utt9NCXVjasvDS26qkHbMBCWZVh4",
  "key35": "3iZt43WknmLfNBFMMmz43wus8SEwu9LcGDyebaJ7SpEcgfcmBBUDdpLMwkYkoNRjBqyrac93rW9etGbXBWgrmhDy",
  "key36": "51bVcJBYCzURKxYuQbevG3nT84G1wcfmsgDPUB5ngxMMNXoquaxXjKVCP7PE23vsta3CKHNv1ggL5c7LFXfvEb8F",
  "key37": "3qgswNGJBVCDLZweHBXFJWYoJNRSEAQdFXfmTZoVfoZapbNaCvzRAz3TUjteWFPWrqPPq8yi1Wv43uGrGHsEwsh4",
  "key38": "4rachNWatyw5goHpVSkSoE2Ppo86R8f5BN7S9zyQVqtqyDEUmzpq9R3vWND6Fc28KnqYPVvmdmP3RkSKUk1wceRS",
  "key39": "2cWYvYXDejbCibiz8qT3x1FTXUnk58Uze96r2d6zBtYji9ZwRDTrLRdzq6qjAEiucPw8hjvnBVLHoP3bvxEaPrTR",
  "key40": "5k3Y76GeVs6XNLw4AT51EMsDamua1WmiH6eagHw4wsYZv4LDVUmpH56oyYERbQVeciru91DejXqLCNZ7gQzxGs5i",
  "key41": "5gXpni51jozYRzzqCqHH3586FwQ9aGpPQx3e9tmwR3sAnUCPhJDThGyFUEd8Dsj3cYxFf8YnmbbtNwTJoQfe3wps",
  "key42": "3mVGEnvQpF8zAnTEELsuGwEeseooxPZzGNZdvYdu9Uq6sQKMAfoDz3ndTzCBSpLY7TLbRL18Xkgf6YGFCpBqqCRB",
  "key43": "3gYdxH8XWjHVPGi2AFXjXdTPw9BTeBnYJnbj8EP9mJxP9YGWQobPZNPQYiB1vpYsLvWvkxLbVNwbKg1daTzkacmH",
  "key44": "3KDPuK8BeYTjpKiDXSV9nrS3c9yFTktMBV6GmbCuTymBju67YdRbxpafTeryYJ9EZXA6Sm5gJPyGdJmPJwSaBDpX",
  "key45": "4Djh1gJp3RVumCULUHwot69UhEodheLF5iBHmJ2i2UBg3NThdVHfuXvYHqPMgQ4fHnzjXGxh8ZrsBtHSG2cTPrGv"
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
