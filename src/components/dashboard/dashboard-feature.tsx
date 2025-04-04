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
    "44iARDGLapcnXW3st3pHPPotf3sMi1NGgHLQ2YiEAbS9fb12JVQ7oZaAV25guSPetm1NPzRCeiWHUFoGEoob5Uw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HX3tzFB9gMmCLLVHyYoUWwVeYaKPpYvFfz62kDXoEVtvZX5rSbb3aJkNqPqAx6o6d3zFmha1vmin4yZWDtYDdw5",
  "key1": "2nRVpv42iMgyhVtXVJChyJLMwiWmYnXXU5jUYTZ4Dzcjx5BSxo6Pg1P7xCFppPbfJko6HtYES2kdTbjrFCioN8wk",
  "key2": "3883TTeHz1bvWMLL8oQKtWWqBbqk7F5aBMLGMjKTAwcPj8X6GGReKsZpPvGecSwHyoP6dh7b7tQV8C2o7Xp5XsCd",
  "key3": "3QfcaSH5qaFBPZfVgji6E3ejvzmvt4NJtj5LEP65nitPaJkA5pLtuo9oMUR8GDoYHT5a69swdwT2FekbvAEHtEZP",
  "key4": "3A7PLKAoswBRJj9WHxPZvGmRXwTvS4R65KWJU5LNF4aTmASWW3NcD84nx5YgURythPwByrUGmysJ68ThWt1aJv11",
  "key5": "3ERUis8omy7utdQdME7TFS99rzwaPbKY5dLLf52K9PXFz2eDWBezXWktzvur8GxF31DFta9X4Y2H6Ux75rVUF7do",
  "key6": "43H6x2JAzJBQQysjEDKnhY9fts2XwedpQv9By7oP6QRhowQCoiJggwMngdEBNvHBBhG4fPSfkvPWdowmL7uHknUD",
  "key7": "5eczZTEiUQSHbov9ePF2U8SeV3fZSNE8Rufaqq8kh6JU1SmWv3Dk6KMDPkTFCXobWAbZCZfzqUXpFJsQTn1iQ1SH",
  "key8": "4oiKgJsbBGcyNjjz2DzESBpWNsXxWVERwbZZuXsFAsSDV2ATuSiXEGhadXEuueYTM9nhiut2J8dGCbt3Djevxh6W",
  "key9": "3GLSrMNo3KCpgRQecXPZKZ2SPrchFzmqXZh4my3RKRmjrbLxW5mkVCx5quVP2HheGWMKYLmHTuczdLqkDkAQfGLa",
  "key10": "FSEkk69zPb3ktfSd2MKgMJ9jW31ZJfkjS726bkVBoT8dZvUZdz9x9hnbTESpWj1zpDxWrpR9JR8nVjeoCn2D1js",
  "key11": "62RkEqpQP1PFCSPyYZjBupQDj7Zy1aBftTaAstjXWgHUMmQ9W2BQ6ouEdJSpRRH73X3VCRWgvaFa8mdbkr9QL2YJ",
  "key12": "YseNSrVMCbsrXopmb89R9s9vs5cU8yKx3gw5qx9hz6vd8UimmE1BTw8P88FQNKyjwe5FaTzzzxCEgWpznYXci9b",
  "key13": "2BQpTgKR6vpsrwhVmupyqkZxwnXuWmfi86toTvbgkr6rHvNhvvtC42cQMKdThLU1tMLbZVfCM7qxX3qS5AJUr65X",
  "key14": "3LP4veebHqio8FVZAmu7RiZscUYR6VWX5Rju4Lm4XDruHNLCKJDorH5pYh6dfViN7MRryqpgqcDobBpvvQMcMYA8",
  "key15": "3AAwCAAi4omWvJKvc6weBi67mVkhWLbn75damJnFUxQ4WZ8BQv9777N3Yn3Q29K3oVTymuqTfAHAZoswP1zyktf4",
  "key16": "5ULAh9JjYjH7MXZqBadDqd6pqMV5hCDcqSm4xGWXSKi5EnKERLf4kYzDgMK7VQjdcGdDXPns5WGd4Qyp6snwpdwM",
  "key17": "2LDxcPynMsmCaKWTLwLmYtZtSrTJvjSByH6H5XwAwnYixsrsK1hQsXazLqyGNsPu1AxgyA9bG9pQ63uxAcwKPEGn",
  "key18": "3As2nKtuWxuN22MJrrQu68jTVH7GtT4xxKAcNiuQqNkjR6tTYjsKmRodEMNfMm7ScqKTdjracnxg6dAbjcX28foB",
  "key19": "5PKg4wTvA9BG1Axbs35XWW4fT2CF3Bf2A93HLAvKZVmaBM1TfKNuxvhbUzmiV6AjG9sm7GXWBx2mfxw74cDUMqEn",
  "key20": "2FjEarU1RQd9S72YQFoQjPDQ6UpVtsveSYuR5tCL8JjaUsVWC5kwtoMZwhSmpnH5jDg5cSHmucBxekpvnf2yGctU",
  "key21": "3TxVUcWRyHRKwKmDYCfNMojXmFJjmFKDozAvZpoTbfaCeAgeo63m58vkZtjee2XgM2rs4X3fJQD8Preo8S3vdn32",
  "key22": "3oSy1MYyFz5GvhTavjvRmeCSzM1vFcrc734Duh3NQJtc2aoLBe4BGQ2begy75UyEwpPM49rHLw7sDMxA37rVHLyV",
  "key23": "mJ3QdmX5irMmLdoQ4K9CdxjJ844z7697YeyiUAL8axek4eykjiT7FDV7D2NjV7L2s6MVRsDrNVfes7dGCiuz6YD",
  "key24": "5eLguXxMFXkWReyBWKbqg4Lq5djm8DntHbvqV9w5kuBNR9kmC3eL7yNDnkh1ZkBvVqSXdNW1uFGeVeS5uVzQEpw4",
  "key25": "429mW5BHH5fS27T9neoPdkg6VTKkCZASY4jpjVX6aeqgjUEK61M5GodgJXao6NLZR43nYe1U2HdfncSU8UnZUEMv",
  "key26": "sn3ExF245ZA7u8L5AGbwmLwNVjmz3fN1ZucV5kfmkRt5FTuCNeUSfRoyJteUgP5sCnFB9QFjSbLjhmb9bTKj7Qo",
  "key27": "2x7pUE3QeQPQf7C4q162dM7DhsKXgkm7NHoTnusDwjAWXsLoKWMXccfrTYEmfpxEGJq6EP12CuERrS6eYLGeDvv4",
  "key28": "5Eic73TwbSCs2SVEgBRxwoSJ4FBtjidQcqYbKg894fa57AJzr4zf1R4sEAz35LJpoWCExrvyPGF7gVZ9eb333MfF",
  "key29": "kiUZK3FfdNLEuu5kNzqXVXRZsjWgAuGShsoDDoSHRHFzukLdkmMQYFWbBikEZrFoJZbHwuPbLt3r5HBxJE6Aib9",
  "key30": "4wDvGK4FFcQDaebtPKX6LFSYtGDFiKEW7qmpp1vmjvfhJBo9ZZB5NK2JTBeeScHuCWZXaEEhP2VQPEbhfq3Lbqm5",
  "key31": "3dDrRL4uUqgtxXAZCw5Tbn7L5ELZKVd7k5QxMrNShMqM6F4ECgnzSGdLeWGyHk5qD9QwBDgZo5kzEW22htxMWays",
  "key32": "2nvG8zeXN3oMWP3vrvMaYXTrKgDDHdk3BcPmhqZMH4PxLoeQg4MmqEQN9sVVJXpD8gvF7ijo2t94mvXtRsmokbZm",
  "key33": "3hdEGuXdAQDwUm7z2ki1Sqpx6jEAGHTKprQTWoNeFnPw5FL9SESsDShJPPrugDswDgF2mgh3cuh6xEcah8egiAjc",
  "key34": "3MR5vKSVTM4BkYKYLBKdduAFuoRf7CzrseHuwqDobUjhf7MifA7U8Re9X6fAQF14JjBKeYsvpUbmdxeAtyVzQR9c",
  "key35": "4QgweFo7kTB6mbVhbzPot2HUWZtmTrvTx44CBVDxLs7pKVUPnf2HSUT56nudjmtDKm1DroH4u47x4yXmzZmGFvNC",
  "key36": "51fA23W5o327EFNuDRdeaqaptxi57ZUuBjwLGHqwM9Z7681tuvQepP4vx34NNK9M6Bd4BBASVE45EHGnhwQsdkjg",
  "key37": "4KCQWCgFErYTQjZJTGNTpr2TpixbSvNHsggLBvkxhuKTQkimHfqKzcm6vQYjbvn9XDYPEQVtbZBbk2degN8b2JvB",
  "key38": "25jGJEGFKP3bTQJANEuEscNW3evc7ip4soNWMYhcJ2H55PpXJvCGmaYdmM5BceUruPyZDuNNUVZasJUHFdFHh33m",
  "key39": "1W7YhZJQvU5tYQcivjanUFtCmftQf8XgzSQk69g9Nu5r2haBmYacxfxFhQDg55gykjRDMzvzb8VAPd2oXJsEs4h",
  "key40": "mPepxNuTjjtxJP2qe6FDpiju8wEzHy9X84UwS5H1dmSbNhk8EWBVTLK4mk8bDqJCp8bqCiyAuhAZmjQXcxRUzub",
  "key41": "5Wau43atfAgmAgfibZrAzteyhhwDPUWJFiSif9Wq6AY2dG6z2vfqao18j2Zgm6iJLcH6W6Y7vKe57HBKjPTpsFKb",
  "key42": "49cm77cTyhpLgyDiYYhiF1eyuW3BP1LiHgiqM1sugjevSJ5Z3YMM5LB8iEPcjs62HFXcTyHqCnZds9T9KBjQ7619",
  "key43": "2uh1JxuNdkRQgqkoELAN3bCsdQXDFeeSBwfKY8G7uH2LEnvbKb7USDUj6jDC17shmRgvMAuwFHbSjLLDiaEjkDse",
  "key44": "369QfqtrYfRgMiQ8c3mwNUqhUCv9rm4Gs7rHNrTnCm3vDKmLYZzSpihRQyjVoLQbAqD8fY2zgVB32cM2L38Mn76Z"
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
