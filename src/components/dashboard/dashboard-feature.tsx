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
    "kpRXQgJ62Jib88Ajj3JAUJiffw4YX2atSyd5UWjVmpWUE1EpCNgJPo5726wjJwFdesjZnK7JxF6tdF2KtcwXVzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ZQfpZfB9BN9AUN3kAGyzNj8BjtKcttwgwwJAvnYDDNmUoeLoXUZzzbQBQqAjX4Hu71UVyBmzqvtDxrZz9QZeYF",
  "key1": "3mgQTw4rgvLemhoCHHYX5bEYaUzBXZgffCfnpdMLf29Vb1Trjvgr2dDGGrg6jvqzw3hX1KtGJqxu8P1P9BW5rsdo",
  "key2": "2oje182FKJ6GWFZux9EMdDjgKzvcCtsbRRQBrUwdtJBpN1aiUUapx6bcZznqzy3UVHuZ5FEbdAuAL8iXhcSexDKp",
  "key3": "4KSxUYCP1xCSgjM5mbBG1wqsvRqmU5hwGMh5MEnjQxic4jukuqHNHgfkGa6Znfw7xbMb71JF72b4JY8X4NmFccib",
  "key4": "5APe52NzEVBQtLfTWAqDkcPnHc4CqZWXTcwpzrCf5P8jYRXVkmNtgwxpAFuP71xg4Yi3rDhHrRw2kRkd7knxJSCc",
  "key5": "4smvuZZisGjuKJwH4epWgXiyeB51uE5o78ewEgKYSs4MyWQxvWAuxSAFZhjdeRkmJwHjnj51dZA7waUUvjSEpjib",
  "key6": "4nRe8Z9MTAziM8qNEW1H8nw1ErsaF7qmnUmh8zaEHBUDouXctht1Z9MxmG5YpzWY1tzykQmsGJKeaAwTPAK6QqNX",
  "key7": "2hJepJyEQeUBzpfK32v5M4vucrmUcaevM8Cg22pbKxs6hWFu4mhbVkV65uhFXXRXwXhdoryXa4BVWziyhR4Lvhv",
  "key8": "4HsyMUiUsvyjDnA4AodqXhworTcwbfzLMExF4tKDLt44UkDsbcigLek6WP4T4SpApuDLN95dHhHQoix678pRhhHJ",
  "key9": "4qjBu6yLtc4FkUVYjYiF8uUG5ravkbFY18kDixYKH9Rtq9iB5g2wp13TmK4CgByWGaPhGUpxpQb616N5p6WsVcnq",
  "key10": "zEtUrjjWoYnhwUjKD1yif6WZ2y3ZvsTzdeBUtg98hsTsPrM4NvBfNmmWcJHwBs7Ai1vcD9RpPU24mGs6QUVBnVE",
  "key11": "AiHkq9nrBvqSHbnhnVuZGfMCcMCiYqinN4kymfyeT41gTKyXuLHNUAvsTWpvUSMWXD6ApjygNEVCfngQeFRiEPe",
  "key12": "2W3mxipQDzeu5ppZgQ1e5MUdEHt1CRcnYAGbowe2zeULaPiHy85FQXh3sueykej6iR9PmvpEgfzsaXNPZis3GYED",
  "key13": "q3ddaxt3SuavEFWGM4yzVPQDxq7Bg3f9VgNJQMPeVLmBuqbCNsWwUqx9BjCS9kyPxr1yuqnQXQMKaZTknNNSJoV",
  "key14": "2vBFVanKxu5ytT4c6rKvn9FKYuY3CTuTQ9EnGqfxChLC6d69QD5dR84rc2pY3fKRAmxX4Pm39MZuqixg872RXVHx",
  "key15": "5Tiq1BLwZdwaNHryBX7hL1FmUT1fL92ATQwB1FqX2qVPT6BJ49L8GSvrNUtPWETiFhhrh9sbfvntnEAAgppvKeZT",
  "key16": "48M9ermdXA2FmDgXkt31CFZHfh8w3Ft8itrpBJcES6MJoxbW3mPjX8gBGBuKZ1YvwEZbNs765yQBPk7x99RkHXYE",
  "key17": "64LYBNimGNK4YFTq58xQbKNZZVb93WNJwEC7FSMfjxSihHcSeBTWpEHq5m4gXYhWCQyCsK6HxvJhE2RoaQ2HG8rT",
  "key18": "481aBCkErfESswhqP7yb1MFdiasXoEY16m6YUko3QPCMv5HdDiBwCuiyzbuQnPhYWvvH6gmSyXAyweisTzLfP2mi",
  "key19": "3EYizhSdcUWi7UxuUKTv6hhHnTwFeByvCZ98miXj21ztu5eVGngzQswuaQXWk2UNyytu8SddwsMTgycB5sDgfxYW",
  "key20": "5KbctMojSpDrCLuNWcYQghXEdoyvJM2cMFaMbhBp1j9UvM3y3oS44F7VEykcnnWugMQgL24TAkbK9oiYe5qUEmm8",
  "key21": "3cpp3cLAcu6eV3dRWQrkzQ1KrTag97jWAniEo3ZvrUqVxfm3YqzHBe7Ho15usKxU7YY5fJDeJrs5dFrYxuKexuV8",
  "key22": "4Uzt9DGuC7wHajakLQiKqb2txdY2AGbrCzosTCz3XGKNXzZauqdz4FsrjiK8wGhxfLnBgUDv1u8BmZufwFgoZbU7",
  "key23": "3XdAiM4U1Y2WGoMfF8BM1hg3jke6yvUkRHN5pNs5Pf3ZqraPGqPPPTC9GUGtcyi27RTDsx79Tphe2QrPmhK15Pqa",
  "key24": "3hR7KSZEZ7hjoyqCi8ZZS2f96Hc6i37xQ7c3D3hHVEgSx8zA9quvmLxQrVWQGfK6TCb48wLDwMg4LsG1J3qdeGNY",
  "key25": "3PFHf9j5UhqW3jDzGfFRk2bRPRsNMgms399SERLnpLLE63knnRJQ5xhrNea8UBTLX3zUULVAy3dfoy3EfSSumBm2",
  "key26": "4fzdackA4fxNVgK2PbujLRCNJaobthphGTjx8sB96y6owj7ehbMM5oWkY4gSgg3rimobEzVkTi28YAh5S4kS81oh",
  "key27": "3aJYjQs1AEyHiiu7Rd2EbEtiYxnSNkUvMSXDa7PwJm2jtBjF4VpvgEjn7G9SvjA1sbD8aMRQykbG7d5VKNXDa1mq",
  "key28": "MnRJir6DCvAkafJJoNd9fT8PCkiio6mXy5HoAzzhekEU3AoqHqoNRM92GDrCLzjJomEjR1VkDjSieFzGNuay2Zb",
  "key29": "5nEAMgsxDVQ8SexADNptLEdQUXDp3nepbpapi7wwMdTDXxHkA5Mh4vock3LUzTEJN9d2MuLW9LhSJxwgEv6E3jUN",
  "key30": "ydXKw2hzV5S9rJ6H2EGP7GGR3udXeo5nSAdhVANYC7SKs5oS6CUhgVQnNnjoGADVdMP9eEtbXAMcbj3x2vixpC4",
  "key31": "4PWepfjHtaTBFupa7xeCcdQvwC1YRtMu2K99nV6YeNMBqrp8J9fKZF6o7MMN5VW82pZdJD1jwDbHsVSb2623GNEq",
  "key32": "3QNfb5xhhUxtjgJVZggid2pQuUU5qHr3YEniyFhgZVHApPAkmZhqz3GFXMs3MH11QD25iK5zb8b5RPEFvMRtCSZX",
  "key33": "3XjTHJEqLTs9eVdB1WZekeSMDzoLMxZKdxztojVQYNfMgwavhkX2JeeHe9oVQiqvPRPCDB2VPUoWiDnugmCQX5Q4",
  "key34": "3yVKAYthDR5QFgZdZL11R5Pdz6HEynXJeGVvUa4EHacF2GJEQG9BoLf27UiNh12D2VxkptfH5VccLkAf5dKaNbA2",
  "key35": "2yFnQGFCYqR2RgBzm2fR7ZdDhZ4ZaeGmnkX3yjSsva9gYXrdx6YCTvaK26ueuCR8aN3tcPDfgoKC4x1nAJRneWAQ",
  "key36": "3y5pHje7hAqVGNGGhxGMSszDYMrVLjpWHTfS2x8mbLxH8qxeJ6AxdW3UTyzWdUG6tpwUEZPBGFT2n2HKtKcRJXZM"
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
