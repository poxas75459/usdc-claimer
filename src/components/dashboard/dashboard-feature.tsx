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
    "KkQoKbNWjyaWodPmntQbfCRMPqaqyrbNSvYesbth7mDMo5dtri4ZGSKRccJvpNK6E38FqwtZRpYimuk6QgbcUNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J6GUnDri1CCbDL1gLWPCM6abzkXj6RwNmxapJojsBvxuZqdYBpcs2aZZFyvcFuwhKXBsqGYWLyYFPEP7drQqjam",
  "key1": "qrEmtC45Nz7XdWag4aPChGdDx5pp1Ybco4yUYJRPqF1piKVS582KrquH4yLQeSmB6qLtCPKGy74PBeVfL9AVktp",
  "key2": "32Ad7LTT5zPHJpUPbiTbKFprRaVtmEdAeYNTWPhPpELd1esJCb7wcyn1KcJ8CuNDVSKUZtLYD66pgHTjtytozDcu",
  "key3": "2WjRd5Ga3iPf28GgYbWbxxa95Js51WonapwZ87skXmjR4N994ARMY81W4DmqNvLwek42AjcMbWJnWD7qsXim1G3G",
  "key4": "2edi2VAWuAjnXYfiA7UuLkHcvSjkg9bbDsk4xWDYJQM1jBBCLJn8TRQnLBqSpUewy8x61bZNzEGLiN57zz7VGptV",
  "key5": "33941iNgTuhpGUWDTupZ3Gh9KVPsWe3MjBCZQLzWGBxY8KWeKrr3n4unvAh4qcqSi1oFazy3me1KMGkqWxXUi3gW",
  "key6": "4P3M1VbvbxEShLR8g8QbWaBEyhwFw42pW5dS2chHeJvkyN7SeVXFRffgpb1e3yTudFSknGGpSzfJ53aTCmLmUG1T",
  "key7": "2477EAmtMKRUaUwnDPWVwpMps2XEz4Jgi3jXtF2LfRoPPzeXxZJqnBUkKs6LRGaq3KUzDnYowcSnyh5YGHPjj7Kf",
  "key8": "yCt7uEZAVP4jUF4b73mdnMSrLiQyXgpficTWSy1vnA3HVqG5LadhNtNEANJTH5UVG4ktxKpLTuHUNteh1Hk8KJj",
  "key9": "5cwwYYeSxEkRKYq1frxa9Wq8AKaDhum6ZPmyR3EGi5HExWi58uuuDpGGz7rVnu4sqcDvNBC25HxN5abgwDi1J9N",
  "key10": "4jy7ktxTGNWGf4bHKAqRdNkXrAWNJTtPQrqg8Ua73Mkagzp4rMDUifmk9KJUZPctMRWGbrNu74uczNyon5Lk4HUW",
  "key11": "3i9h3NzTWdKBM9nDaJuZZxVmDSKK6ALU2Tb3mxv23F6oN7TRssf525T5VpNAAsCSy2NwZATAapGrGBUp1Ydjd4CM",
  "key12": "5SfeHUNLdnvYTaULXXTtrUYREuKi6NZ25uP7W6QRBktnejGzBsqw3ZxY7z48Tzn7YTaZJ11LVYMT4LE3o15tAehu",
  "key13": "4Exdrr6Nm2LuhzXh2fXpC5GceCdP7SyGroqAhRRAn1dkfihRDE42B8TNAxFugLw5CzmjESA271d6bRYZtMSznwVi",
  "key14": "35FX2HFS9cwPz6TVYhby2ZbEY5RFoumCWDg6bHgivDFCJyzo4tdmXD4mDDkM6LhLDVsaPdEKuCgPt9bxAPVoaSBS",
  "key15": "FJPH4fHvw2WkfpGNPMA4feXV854c4B1ZEC99DEAer8SpfSWwL9kXUE8Kmd2ZfuAE8swZ6vTgsvQj83d7DpN6hpk",
  "key16": "3NRGNDZcQvYMrXPda89eM9eWcmLiNwE7TSGnFvyA7tUXUtaopsKm7UGu92TunMtUqvcYro38oX1a9R4mvtzTLPG",
  "key17": "2P5qpNXokSM66gUmEMWKDP8hUNowBr8VsGzFhVDBgdy3mkg56EQZYzAWAii9TnXSr7mPs9753V4ek1EBYKHThK5n",
  "key18": "EoprLDQ68J5TEWMUS7qg7eSqQqnBSZe4aX2uRr2H84vCQR24CDbBL8nnUdkGQ6ig3zwHgpGycAmfsDBoUhT1oN6",
  "key19": "BKGQB2F1xU7kamZqAivzf4jSTxqy4CyhQ8CN8bnYNPKWPyJ4EGXSfWvLs48BTWm1k7kBQ3tgwtuDDmMX7AH7rcb",
  "key20": "88jmzRcv1L4D2mJt88dyYoENZRKbYoPYybpVfmB9wfUMdNAtbCzbQ7soP6erjFqy6HZ4kjFFLBM5c27RE6SFL4g",
  "key21": "5KN4WuKpGR25RaxnThVX1rxFNKHB1HmtQVNWR1GzrNw6YwWCtCpbvSxmWWuQpZyaCPTCax4oLgscizs4Dpj1efUB",
  "key22": "tppVtyxR87PA7totFMRZQiKSQEhoRX6vfGaAndyXDmPL1RNDrheXVhfgRUroCYkR3DJZQB9SHmG2jEbpZwt9Cgb",
  "key23": "3sBBCxBx93TtAFKjyjNHQnyUZkCwTrxb8de836JHdxsqs5bn4R9sUCygtwrU9bsYJYhGrKJv75rAazWFeCMA2bLe",
  "key24": "3GrfWXevoX4NkGFPFLTW7RyawyCKTvBndGVikVe9YVocsZ1oKVL2CRoBcf9eURnNoS7CY4qnuNeZRw7L2e6sArhv",
  "key25": "4mbMxqnTvX6Vv2pS8rq5C7pgLC27z6SsTYBRgwSiJuf5v4eYSqqzBxmtVbyYzAjhhAtykeSCMKWf9KYqqcByJeAU",
  "key26": "3WS9a9zPF3uLe47cpywL6DMjaqTXMscGnY8rCXtupavL4PXw2LhUTyHfJsJqVxqJKbG2ESZaTaMt4Ty59sqhxFUf",
  "key27": "52fBfWLxjGtg8iWBG9fX9y8JBzmfxjTZeVY2AAgJ9RpRfbQzryXWV5aYc5g5W7P8QwqePD9mgATpB3WncNexC5ox",
  "key28": "4LC3ozHowia6bDJF7WJxLWQTRhnCUP6GNQPVHRsWsFNyH1VqBwQAj16V4aXxhUbDpSYAff5HnFtB9cZxdagP7GWU",
  "key29": "3uKwn1ejqXzE4ddaZHyb5Fw9tviq7yyUZWVZZZFAdFXUzsh3pXYhfyWab4f39QZVUyts7MoGnHTpCTUht5cvyTHa",
  "key30": "4cdVckLD4SACq53EKQAQ2d71A4J7hgFvfb9uPosGFtT4zQYtJ6ZYQTzZrqvBjDuTyRyoVaEmuqExD7JCisXfqEq1",
  "key31": "5WrfEGFcBf6P9McrTsJ3N5fFvfGqXzwVFf5MF7qCWKVcD46iDYooKeQ1fhNiGKDj9HXymg2nbBUNu37DJ3BxG3pZ",
  "key32": "3PjpE89cv6vGbkncp4GKziBskxBfyKkvAXS1jsgN8sEc6CXCvwwYdM9xdTgrksqGQNoFiXCmtA8epJZBPL8QxF8f",
  "key33": "4RfauNrtDdqD6ZdekhkT1kKjeMJCMrL3zMJvY4ENALNDCUAZ2T7JtqSmkcJGSyrFrdqcqS8XHWg9SGek36AdinQF",
  "key34": "4gLZti1GPVLqmiZBCSDroGbgf4SvYEdTXJ98tgC1jx4vmQczeSieL1rM26NMeMoxZhUuvQgyb8LtMKfd9TzbUmPV",
  "key35": "mtcKsnq9N41gg5gQdypWPuHSG4u3xCVKVh58iucguuYRDJcYVXQDy7xQz5fhhbbV8mCM2HU4JxMwFLc7go2e2g8",
  "key36": "3epUyukjYfFEGfyS3JDmtDhzeQuT3q6iSrVKj1AePg4drbpeVpVHhDgHxf5tTr5CrUTgqkhX3xV71rJHnU2qjorh",
  "key37": "5SpVHEJoACjHrjYPARXYcFdVtK7cjeU39zZU2qeMmgy4a7Br16oR5nVD5Qc44P9NGTtWs6PUpd6VBVZyLGocnUpE",
  "key38": "3ie3y8wkuravXubmJSfd7iq6T9A86ZmquKquw9TAcBcyGoaaYUpBMxBDTUsTqfGK1KmL1axLEDvSP4yQ1KvBoSoy",
  "key39": "4JGDo3N69HU7n3KbuEovSq8bz161UYNfDhVuLEsfX4oY6czUsDrxJjMmc46GcP7X35EbFh6jW6EaM2iQDqxczBxE",
  "key40": "2zwBhF4y6VYPUGjQBvspHNV58VgpuHbr5ohHJeMxinRiJdkz83M8yJvj3X22e239dc7BL9bwwgfbK8R4UggtXenx",
  "key41": "4JyFfEWCMxgCBgtibgyDDygu2cPjiqRPyembF52duruqvTHXSN2zXk5rYwkXyGKxnQ7p27ZVckztTADtpZ879rrM",
  "key42": "22kUyJbxK3UGKQJ25awrS8xsv8jC88cCebAsADXmUa1a2BzqRLE8Wre9FCShhnaDCT9tQk8PWPb1YS9XjNdonP2g",
  "key43": "5VGGBCXtJuA6wvh1QuSA5F4KdLAzNhK5HcoemWpkTnduGP1vuvt1a8beSPDarRsJQeKXePX6tUVX4LR5NgpeAZfU",
  "key44": "3tsDPV7cNrRXrCuXwGF2hMx4hYxJFTrVJFT89oTdNBWUNZCsyAnkzWanG325bHu5ajN9PvEAtjPH3a6DkY3gsDpA",
  "key45": "4Pc8S2fQtgo9E2JeHFNZnNCEnhj33ajRwjfeBbGtq2dK6gKx761TQpsNMUHFf2fgbWScdqAtksHDrr2sFLpy6koT",
  "key46": "5aWEi16k2ZJXSh4JwzJtpedrhYUxQift3raUgFEKcVF66eAmmXkqvuwX3QiUWobXW5m8b9cSy7J6qNpavhmYKS6q",
  "key47": "4TyQxGtEwdYCbj2FtMoCtoLMpNbXek7eeoL9BjicjqTNNVHxNeMCEuXPkNTorLcwsfSYT9NTfv72qzGrPtiu3c1B",
  "key48": "2iuQtA472SQnyp9WqTvmHEMPq7gV8KJ6e5ZRQP2ReCg1hK79KPt3fxDTWTpj4ak7zGLYqBbUBxxXufUhUuQeKfCx"
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
