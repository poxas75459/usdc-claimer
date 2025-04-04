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
    "r8NZfERxiB1rKkDBiGwVFmS96GqS6LP8qvqW1Mk6Zwx1yFhKuV3LGPmWTQkemLmgsdQR3tK3Fonv4sVkqTp6ULE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2teqZze76wyQxx5nSbo66R4NsoSEErC7i78ZPSzzGu1YprK4autuvvbgjqAvyPbRuUwd3cfkQzaaTAYDhrS63bVk",
  "key1": "3xMTx8ZbeYj3chYPMXUeQ1PKJob3Lin7zfdbHnXekXXfMk92x9XYvz7N2RirbMBoWt6e1TRcdNvJz7AyAj9LkHn",
  "key2": "3HM51Uu3VwA9JC4LhyVw6zwnB33598maUgHqsb1iXVkkpKTdXW4JUXcqR1Znbz2HgnSV2MygQZ2MAhz728xqAjsU",
  "key3": "3tBQmU6gQCYwpG51pqEniVEdHEUNB9mdwimQA4oz2rCLVyiy5mVjcxaoduwNgbP9MXD2V95Tchk52vjCXhqfK4pH",
  "key4": "5rKL136eZK62Ky8dXJgcp2TDNXnvsTRKYzRmbvrLdRBSYJ3RQBMuubrwUwUNaywSkdNahs2YdoynwRAHMAGAdudQ",
  "key5": "5FZaMhTYqzGu3HpgBXAi8dvKD2QqFx1qECtnyFZZDePF2MjPAdMeLoQKKSt41qZ9aytjFvHoUa9NoA7AUSLsi3yQ",
  "key6": "5sMvdnV6jM51KA7GQcCSqA61nSkLtViXngtENuDNGJ148jeqEYc5fT5zZiYdW5Kj2sxF1FatgQDSBUeLPPLUsaLL",
  "key7": "J3SYmzVNpdW2AV28gs6aGKVskDaYyVBT4sfHGGcB8DxBp35JEXGSmfsdKZ6yLNFhswAtHtJet9xc6RKGbvJTyUW",
  "key8": "5tZJam7PhCXJDDfbuJUrWWLSB8Ncx9MqQd7XEKLJQTF62gshnAiDgMiJS4V88XVbQMy8sM2F4iWBX5Bk95fYtcgr",
  "key9": "tHNrUjbRpm1jQp4jm8C4EqvF7tVQqoYMF9nnT9dFRehmF4RYo4AEeiVwZoAseSC86DfYzQY8wiJH7y3i5wocehL",
  "key10": "4RLnKYtKHnTY7dUEGcM9ZQ3HCU5mFhsQnuY9WQMuLVNGhbv9j8Az8opcP9NH3NM3Bt58n1rGMMZFBaJu8siDA7EP",
  "key11": "43qXfRUCKM26Hfz2gG4vxJSXaBdjL6CUC3KNQ9zVJhX4rcXLZmhRkkckC1ZqWyiZfZaUM8i3sa9dV9scTV735d3r",
  "key12": "2uvCpPXmj42Vu3WdArcuV6QzW4zpiLoSh5FTtQBPfAeYZAEp4n5Q7iRnBjULVNc1ehPLHDBhHYoVrSFMaMy4kPD6",
  "key13": "4YvWngb3TJk8Vax4tBNZ52XzpGNsqhoDshWRMKjcfWsfX89GNZkN6rVjNmSMa3f4AcBqu46GyGMHnhYh4BdZvgq7",
  "key14": "4afbx7fUagL66HJ2XoezQq4so66KaYJUuBRuGABiSnfjmu9Fy1duCedfpHFwytZbLbmZwaJdhuvt2V9iZpd5UKi1",
  "key15": "b3bQYqAdnJ3VbTdscKJbtmkHz3q67T5ChFjD12fxRL3UbXejiXwtabn41G64xa8VDdwgsLZS7uav2nPSViLsEJz",
  "key16": "2btTUezKCbp3EbuEaaHrq5t7YqiQ1n773SA7X4j7iyrY6UxFA8p9EqLrGTyyUo1Msf9LUvk2GjHQYrvr2ys8PYnv",
  "key17": "2eQ6VFRhTNk82xYyNt2HbbBhcdKgR541nFYgDVLf1JP9DQrDigZwFThp3aMCZdr24iNVGEBpKC6DYcokrwTG1ywY",
  "key18": "66BCXV7FnyLH5kWPn829GsiBpCXkMBrD9q8DcgU6qfx8xFtRjDJskLpfmBHz49rQpdzuoDhZbTgbRb8pMiRTyT7G",
  "key19": "3aKrAo4FxHGXj1oT84ajMhkBodSnJtSCVsaK1aPHNTdhei2Uu1DxuvQsH1VbysSge8VQSxKRdjGiXkWpTTfAmvTN",
  "key20": "2BEbEMuFVjq3a5K4hJDMM1tyy5Zab8fX76ay8y34E4p4zi8V6MBHPnb2BxFCuPWuHZc2pTtxFUtgMxxz3sK1cSqK",
  "key21": "5mtekWnoADLA8uEekw54sQ9SovnEKFCW6TM7zrwjW3LN3RrXbv2Bt6QcskT5o4K5BhkyVgXJHtNQ1oiJExyjTDrD",
  "key22": "5pZMWiF32jfx2no5DLNBHFsTiRSrQocVDeBDEuUHXnaZuke69xBUny1FVYv37hzWu5PUYMeQn3bgnYaAuBCxPuNo",
  "key23": "2x5i9rn3JCPh5KphoJuZx2SDBuLYD2YvN9SRbTkzJXeTGuRkoe1S3As2yCAvsxrSLG3GTavDj5muC7zNU3umDYma",
  "key24": "3jw8tN7izC3uf1EbB6qkdpYUoQzjbh3cgBaZmFH4meZnSyCeDdp2xHMn5xg58zxr2UZ4VgLGsnE3Sw1mjeXJR4tK",
  "key25": "5DWBJiVDybnCACh68RYda2P5GV1s2QTNC8kyRM5GnoSPHyybim2eVvfqnyc2dzDsp6XCGtBjRP2ugv1c2f35EUmb",
  "key26": "5eJLxXqJofTHm1Y6z5nGGnLWccrSa3xuMQmJqnHB1LAcNxK7TBt659gqvZUBsyT11RGd9gfc6vDnaDp7NponDfUn",
  "key27": "2PxyqmiYQW3hDMw51REjXhxVaJXUHZBp6AxGm762jVQ7kPy1pURDg5iSfBaEWxQ8F9nCcBDRZQfTWooYmnTzrCvD",
  "key28": "3ySy5rtcAk8KsB3N5B5D39FPFWQ8HEr37H7uNwBCJaA4AYxX6Pfk9Xr5cnfYXFrV2SMT4JTRKGP5nkXjyR941GgM",
  "key29": "2nwpi5cpdfHDJWYE2D6kftrK5ccFRkD9CZUpy1tjxfjTajqBDM1babZ71hkmPbHHwZYJAef4UpPWuvchFTK4y1Uh",
  "key30": "24qXwFr5wYRko2te33GuXg8AksTGJRkX78RTibAGBBWQhph7RYr9iFpFCuhZHjFY3iyLpJHFNqxP2pJonUyzpvvH",
  "key31": "2wXfv5HnxbFVFPaJenic8HCa38uuVusRhkHTMDJCygDUy5d674NEJg8RGdHrHdnuefo2QEHUEYGkqKXAozJiFqWR",
  "key32": "5UrhY1CEKgoQQJo8pNgxn6PFGZa44L5NG8YrSeXryTc7VAXwsrEdM3ZZitV25ASMoUy9Le5N3yM6FbQcYAW2Hdan",
  "key33": "5xCdHeeT5daSaGbYjPYKsi3NMmynvjRdUB311B8UjPiGzTnEjNLaxN7wDUEM6wexoUraVyGhvUqbGcB67MEWgmyA",
  "key34": "EU7ku648hVLXJ6vMrCWd62yMgCT5L1Eyq8GuyJYHwhnRgbRTMBZk5bWWESmYJP8cH88uHJH4qozw5Exq3ASzXKs",
  "key35": "5DhbX83dumCxTn914qgnTj8zH3zhGUg5bDNsS4yqN8b83nowM257Af99op51WEgBzbhXne28kKEQ6yN86PdJmZXX",
  "key36": "42DcyfA6TDDv46zhchkA8Vp9C1waV9ts4tTbHDyrSv9Wn1kcuxhyS5cpowM9RpuZ2vTSXitm1Mn6diGd1dewRBtv",
  "key37": "h54WWF5DmV4orL6BXoh3supkb5Ur4hN4yN9CU6ad421BvoXU2KKinR7qJc9wnfenigtV46L1Yr3EarFoAdbVyFW",
  "key38": "ftWMrspK54dEfCeFNpWHegdtYkSVXNaNwXb9nQoMmSPgYoro5qffNpHzoTLhUbwWENJqmrp6fg3XZfApr4n8Pmi",
  "key39": "3UycUzk8qZyv9R4Q5G24hEuYT52nyhCA5XpxKVzbCkDBa72huTtduGDfg6bjKjVeQh89WqLJEmF4Rg3G8KDuG7er",
  "key40": "4aEps1RXaxuBE2etoPmQv5zKVeLmLWsiSo58VvepUpWhmxp8nadYHavh8Rx8zgCiSoP22an969AJYQ8DMNRoM3e8",
  "key41": "39Z1Yd9QWsVuGBw5JJkGQj41DjRbZkiMCFmsMh6ta4JS3NyVqBsFPa42oBh4U3aG9bwBPkvK7ni2bnb5qurYDh1r",
  "key42": "4AEUJeDvmYuT3Nm9d4qJkxUnieXN5a2EsG8QsqHbEMrSjMR9oMSmxH69n2QHt5j8VVBj5fdbWioQJznd2EpbCawv",
  "key43": "4Geft5EYK3zAuJxEDTuFuSpJaB6XzNAB1k5xwq4joF7dkATFjnF6pVS5Fu34kFdu9No5HqqzJ8zdtkAUwgKU4Hpc"
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
