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
    "2v8vWbTXDfRivZyoMF1NMj9bh361FsJhy4tMWmUDmDvN2agRn15xLHYQ9mSHAYrmYvNY5S7YbAECRGnp3u35dZHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dxy9bPAXfXLph1SqwbwqtBEVqycR8w3L3MyiCYxTuSEFvH4cQu1Vf1t42JodWBPmtwXN8dFgmN2fMF5mizpc37X",
  "key1": "4gCnaTps3VxMuYG7vGdzyksuLZ5QMxN1eXa3ssm8QisS8wEWGJwk1z8WsRsbNdgQVnHJVXCkqcPNJPUAqSro5dK8",
  "key2": "24hZ8qQxQK8whA9GD7hs7earKSFPEuUC6H2RgYRM3GfV8fnKK8kBzP9QH6m8TVw9DPiSBAwZne2y1U4dyzDep5Uu",
  "key3": "YC1NH3FpQxcMPfat9JKzmPZJGrDqitYsUbTZ1ehGeH1R2foYEgxBEap597BDcmgiNzm547h5tSeturMfSwaNSNj",
  "key4": "5S5uzhvNQvQ12ig8EgMDXFD3tcFzEdUiC6rGNmkm8EnL79idS8weCiJsFJAgy4ZejgmFjMAzcsKBgGGem2J8W7Vf",
  "key5": "3KKjxJKRHeA5uMeAChNfbSnpPQmYFFyeGb4q1BoVQFWpes5GARVrPifhHd8RnPB19rzNQFhGkJDWUhWbpt317Z7h",
  "key6": "4tMFeGvEQ2kcn3o35LH57NXiqXw339tthkwQHyZoajciEaUoiV8MBXff83w7uJcRotBAqfuw2CYT97MxxeEF7Zoy",
  "key7": "3RLDNWiqWvf8uHeWzrJknTEWBAhKLqLSJUnfCNZKrDv7RLaTYTqGEGdy2dyY4AdDhcBCf8gQY9UhnPDtBS3z11j1",
  "key8": "FcTKHtpZVP7ZVjuXGr2bR3kzSj4oZFXHmHx5CuDvwEJpj6tf6og9F8UQwc6n95QKsBC1jyJtzMrAfh5aiyBuvCV",
  "key9": "25XRMicRz11NXHCSGiQGnXoqeoGvAaWZs2SkC1MdhyKg9btDfF9kjCeCQGkjbPTD2kmKRx6aL5c31EAeGyAcBW1L",
  "key10": "5tAJaaxdtvtRZ2fn3XqTFa6GY7USNM3dBrEAun7yF28CdGh1aGvLk6RrWTzGNXyFRJ9z8hzus8GMF1juKnAZPHLt",
  "key11": "3tv5UdC5u6dsaCKMuczTe4nt7cmranrEcm3dkWzTrYssHA7hiviaTNekjj4bFw8QXuDUeAc2494nWhGQyuAQMTYe",
  "key12": "3a4QHy53dk9p7YyUWBzHKd4Hm6g21nwfZwEBvGR6pzBbZsxo6CG4Duhco6QhdpvznZ87xumqSjC5NNQVLN5SgLUy",
  "key13": "boNLSJe9pFQV41KM29oxppJhdAZrEgD4ohrtR4oW6z9xQ5khfRWu3u7wcHmAjVocE49PJL7qxFxVWj6uXSzc5SQ",
  "key14": "4Fc6Y2CDo1h1gTBKoY2t2z68n2M7Z9gwCmMGowW3GwLT7cR77xRQKpmSyZbHPpHwpSy7c8LYAyaz7WMGWLBzqHaD",
  "key15": "4syAgMMGtBdq3TUxv7Fem8sC2e7ETKofEwVrWMzhgiJHMVWfSkiXbJ5sJ8s152JooUBQuwgEpBH95mNaNfaC1WAq",
  "key16": "4sAr79kHkRsjXqR26yf3HpBSCJxvQowriNLNY9QV38bMZzYRTyj1JYEy6Rbx9tNW6G2q9vGAqcCezUkutF2QSpGV",
  "key17": "pJMTa6aCHZvDjSPiSR7xiSkWx6AMNFWgdqbztSg4k1qWJGRFnGEpquHsB4LWKjpt3yrDBUBkftrkK2VnZbQ14U7",
  "key18": "3hNwBDZtXBs6yLFbXwJB2nVG2FwwsbUiU6xmhkzkwG6FWQB2ePcy12N4CzJedMrqaDib1c2EuwokYqnSyxX9Qoda",
  "key19": "3eKeSC7SG2KYSgtdsvGeWcBkqAJK6uQ3hdm9CgdDCqmfSD59dGYuGYrxr3x2M1CdzgiGymN25kLaKEjJwuxgFKQ9",
  "key20": "2nynrxtEBoYSdcLn7YJfG6gx483RsSgo12Tc7drta5B5YhSLTBpVKLsCgpWTvwxN7kJw3UBhRuTvnN9kAGTn8DPC",
  "key21": "4WjC7reV85bKvgoWVQrGzA8sBwr1GGCjYTTuzaP6qCQusZgb2hppK6HZPUsZLw8RjnK7SnEsmEoDwLc1raXejfGp",
  "key22": "61arciaD8vdeGP5DX6DBFP8MnzRMyhikVxmyfAgjAwCaAdve9wEpb7NDQfuEyNSLWQPJjCi5CjXNF3UqyvfqHknr",
  "key23": "5fheLBtjnjDsMManL57GebtUeXqisozLnZfvtEYs2RwpDBj4crXWj2moWM48MS19reupALoebt7whBwWYXpbQCYh",
  "key24": "4UYnyZhEd2iVFBBCu17iaUt5V7PqSFm72Pak2pprVyvfjismYgAwyXZsd2yVNweN4oy5MLv8chJgb2jZwfhNFNV4",
  "key25": "XKr8jaQise3WaCzD3wxQVXZBSHSFjKUFxubgzg3m2eaPVTKuZFwYsQKKT3NedbTK613mXXG4uuKywLwo8Z3xNWb",
  "key26": "4b3vHnmYJjxXcWZ2jXvSopQbmubeVgVNTBpZnzwPHPbEwuynSyKE377xYtmXgE5bLuRTP8UQD1qqv8pqBCP7MZyA",
  "key27": "DUaKg3zdjVgGB5rL5gVkkYhYcAEVGv3HH692nDhM4cLwRGPgPXdLu1KZ2nUphVRhLr3fSrDMzKnfsWANbE3CLEa",
  "key28": "3hBpbXFYPvUL2njsxeq5H5GNntwdvBxrnie1agax2ms2VDsHFhxMdBHTi3ydGSAHBEuCBQrrvKhYJFaHW8DDdYc5",
  "key29": "616zqxEP8zsHuie4zDRwsQfJp4VHSjCZGSWyX5n7DtvPjHF8jrekKaocah7nqv2nxhXZFhKZL9aqcv6J85RKTGV3",
  "key30": "53MTQZM3v4W5VTcqmotFiUYwQNVi2BekjXDNfJU367jBqd2P3c2QhG5e13kJpaaNvvLtoMv99Rqw1u6KtDtKz7JW",
  "key31": "5nVK9gC5mmM2eAur99Wd2hXYuRYquVtvGkUVCpW63oisTsgnA6xdHS2GP1gCt74BqtZAf18JvmvJiJ5tKdbZttgg",
  "key32": "5sb9kdPwvJHCRDWVt8jZGHSGkQtyyfHLBnSyejyyxcFZRo7GJTX6tGPLfVv5H8J1qKcNFpKsycDAX3RX9xTADB3G",
  "key33": "4TzFn1DagAsaDeb4kexMvn7fXWtSY7Xh3JT11a8Sr5msmFvhmAMUYCMEFvNKmVnzkRZHw7NW4f8o7h48uKXSrS5U",
  "key34": "tvNLeFLfC71obrLTy8G5raR4MtKFnWr6V52u6gFVeYwfMhXSXYvSDvVQWjasrLpdJLicsyVyJU2LKPVRJmE6aHi",
  "key35": "AXpJ2xLw96wtmyyNLYJxTs2g4HnqYsd2haK1pyZsfG41u59oGZaeoesfLQWzWwgmHFH2Hp45pPuZEWGaXiKmLT5",
  "key36": "4VcXXT3gmWU4tnnUUiam1siyEYoGSJqRioLeJLhZjLxpSEWFPT3yW5MNLbnmfMaXrmTLBcak9vhmRrcJVAGuZdzq",
  "key37": "Nab6WfGuYkegrsbEywR8sZ86YPpGiXQy482dcrTUvDQXR4uu9b4vhJSDYvCyZidU4JZqAuNpnaEVSCnuq2KgNjH",
  "key38": "32FJ5fBBDaUBcV5FEqfBHY5mwGvGSY9Zr9XjGF8qmEKa5ud61bu9Jh9NGT7fBAymd95RhGXhhxJxbRq9sZUFak1R",
  "key39": "2SY7iy4qXnbvhZP3j7AyEnmHbid8uhiUFveJSDrBC3ZcXBi7zFBFV9dP4q24Te1EF3ryJLFWzG5PpCyHJoZaCLGa",
  "key40": "DiX2HiZb7VEpgcX12BFVDozMBpzcD3Q5ozAi4zRzfry6GMfZMR47PTH9sw9oYALFnuLFseNESs7fK9vYRfzYqfp",
  "key41": "2isSxS8CkRwvtK1yKXJZEEezjHrtUnEdpjkcW6urrKg36ovfbm9EX6JD7u9KPqodvFfrJjXLJpaWGA56GhduoKK7",
  "key42": "296NJ9rR68gk4eCQhaS7VDH4DcRL2LHdnM7UawU2Z3dgKQHS8gCmCU2D6hCb1HPUwDoct7q1yVK8Pqjo1YG2Jguc",
  "key43": "5KTyFeaT5kMRAei8SuT6cKXTwP2N9u5NH15jtrG5RaafX3pdBNJw2GZ9PQ4GXMC7131dPV9YiejrwUDk61qVvnWo",
  "key44": "4HVJQss42jgKiYNGDDmzDzzQ29uS6uKZoAbuGcDecTbz7YwhCiXfdqihDFD14SkbG3hgvdRkccGrymHTvToijoWh",
  "key45": "4vH97uB9g56R54XwZkJhXNKa2axk6Q73YuMnzsHEinceCRijKimKDyNduh9VSwZKGt9oJoBwfxHd6dErZixmoDBb",
  "key46": "37ic9sTJLVKPh7n5iQuWnCyADTANr3p2hRkfDfxmzm65Rs1v2LU87vptamUEuCc5BC4L5VsFCqykJH2p9AzoLKAt",
  "key47": "4gezGN7gUANL5ypuLWs6SF7x15AGsFbPGqAm9xP6CXu4MsmvSthX7WWgoLvGVeLRGxRrHE8M9gWyZoaoB8Zne5yc",
  "key48": "2hNdG7M4F7KneBZ882xqfeoZkPoJzsmfSaudsRaFaf7WoWd31zo5WznTJuy46yJiG8eyfTfEQ2RQuxGMvs3XwQZT"
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
