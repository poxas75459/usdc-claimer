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
    "32WquNoGhexuWRH8Fk5KHmiW35cNMhHh4JN6fuVRMDMfAqvG6wKVH9qjWePhviRLZ11D472NK8dhiVojLeNhxE7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9dERWSBPQerG6ZGrDRge1q2B7Wx7wAzntshrqW7FwspgisYTawiS93MHNvp9pWpiTi2P1gAqNZLSxioGNZGgRQL",
  "key1": "aP7L5PKeLGvXPrTueHc5sceYsyeUEsA9bFoEWEMcejZEBzHBksFykNFoEYTs9d82UjBTgha8dEhbv46RysD8Bip",
  "key2": "4VFQrnSJ5ymjWNupmTNJxH5nrYKgm2YcJYYPpdoiNq7tCN3L9yvqgnNZiLNjBKnJr4xinr6LGbuSzy5PjpToXM7u",
  "key3": "aH452ckntFvJwnMDYAR5pHnXow98p2YwYnLMdbC9g38kRQooXMUr9BDMAzJTAUKj1VCmUMy2wwrbMpvrwvzC16Z",
  "key4": "3PEuhsywg2Je6GX5LCN7fd6JsXGRDmyzXeNLj3TyhtgGW4ScH6QzV4ukrPSsVVz9GdtL2KsoDpzf3gFgq8L7nkyq",
  "key5": "2K6oamuSwFfv6ad4bLxW6DHvREtPwHzXtMf3PM2aCaEuWYxMoUhvEJAi6d4ipEQ7rZi9TwjDbapGfouyRsG1RFMb",
  "key6": "5REtERdLqYGj1apTwRN1dtaqQ5EA8RYKvxovAL49TajMAy59fJkTHimXCpgbesSx9WZHJnBDKjAt12K6Tkx1shhA",
  "key7": "434mPZ2icDJPnXy2Nt5JbiG75xKtH6NvmpMs8Wnggy6VxuNmnUjpAKeX2JtD3HVzeT2srvopgbUtjfsGjkAsW5fh",
  "key8": "4ciWBsJzELUdRVdd49hLX23QztEewTUaL82Q8PMV5WfoqaKwQw1pCNDtyfU8mcrPAJcayoAxXViW8pHPcTkRQSKC",
  "key9": "4HhGjeHh7W7FAzj1dXLguzMYvhac75nUrQticytDDYUCqFYdV8WDNnKAyjX4Ly7FKvkeSgdJAZhbM6udkYPig4B8",
  "key10": "2uqN7vrYxTFX6ZFVLiRvGtXmeTC5s5cSoShvonKNVsuiFSGhHQAkxKH2PKv7ii56FJu89guuM3gCYatafb8yAsXo",
  "key11": "33fYpyUfScNQ6cNJdXKg3wev3mpmvBpirE1iFYx5hqXSc9jzhviQCs5f28taLU1GSnWd15Z2WZ4PWsgHPjbhJAKX",
  "key12": "2noxnQ7AFW4WU49qUguJeRn9NMcouV7Nz1kxatkvgosxGZLHyEQ67bBiSUcauTafupTqGe6EbRvsSUuV6MoweBw2",
  "key13": "3jvHDarYmbYZ1PrJVNo6h5FLegHNxqfML5nNXWuB5mkAcKzTTMKkUrM4anVUPjfhXEEjysmSSbJ7s5JTUuroFKcX",
  "key14": "5wncWLu1a6BjymZwEryArWQh2zKDyRwGcq1WG49bW1RTPtt1K4CRhYk1gJ9BinVWEfG7XS7y7DCoPe1G8ttba7Am",
  "key15": "5s5g3GvetW3DLeSTtPXmzovciMqajJu9RXhcvvsvzgKsKEPNs5JXhwa9zobjUjJ5rW88SWtm2TzsCqxjGfiiUHBV",
  "key16": "3hFk8buuAZqzhU2vmhCKQsUubFsDYooRMzVyQ8c9DVKsEcAq8kF2u3RVFoMYhJ3ogwxNJ7kku5wugqbWp4DJQBbG",
  "key17": "4dY9EQehtpukYdeFfvGv4NZG86Ftmpxvr6uceVM7XWyYKp6xzxJUyKbvXw4GofTgvLST1JqroYPSDGWU3TcxzCFz",
  "key18": "36n9oqMD5Wiq9bnmqHDGEfbGijLoeNiqfFwKvbp9GsvYhgAhcdfMunQQndscUf6n33go14t9JWBoqydsCbz4Uq5q",
  "key19": "2nFGSpwNBRp6Q19sJpeadVeB4oUYMRiLLJNwKHvkK3Gv8qNcgkaX3LW9RkzhZKeC1RuPRQD4atCsF1d6PncNDPKL",
  "key20": "2d2JeXfnTqE9r67QM9wwjRCq7gN3Ct2RZy5tcFyKdEkta9B6AAeAC6Zvm1Rt5SjHrtzCurDVrFAkC2BivqtZxdtN",
  "key21": "5Zru4yMjk5F3xQJrbAh2sXoiKUkfVQwHpzCVh6PZ6P29rBy1dPJ9eKSLucSGG5ZmjLnKmzazftL68hJaxrKkcNNC",
  "key22": "uQxVH65buRkDd3Kuv6tvjH5BK5UkpkHxugoXgdaQeemqagRQDVzSMmHquZdSXWgPXnXx5tL67iV5kmDL8kLnVNf",
  "key23": "34t6DVhKTqxM1U3cpV3LxbyQEBdLRtiobrfNzGxXCLRsU61kEccCtaAMHoTgLxPJcYioMYicz1AW2wkzn2xLJhJw",
  "key24": "KWNUAZF7Yc75LFj7yU8i1uWxWjneQ28wsjvAVnuqYvE7Psq5QTR1ZR9qy7pRcSQ8CE3tQi17bDqyMpykDvwRVhq",
  "key25": "5vz6Bx8MHQNZ343cQjpXDaPk1yMEX5DzbiCY3QKB8uBHRFpX3qfQSwzZPfrP3JGsx7igukqkhUXoaSCsUtBQAAxd",
  "key26": "4tGuTinsdTRtDGpBqsttYbqqW85iHbsNeih9pWbYELtUSMw9wiHQRQt1CzZ4EYVYj7K2N5xrFBDy7ZawX1Wgxo4H",
  "key27": "4cWVLZNvfyxMTihi1wSTbYqXRxmstSP9cJrZrsZeQmKrNtNQd4FzJTwuEQ1dMNGmzo55TmjpD6K9nvnQcfztUYzh",
  "key28": "3vZF5RHP9zPEUmcRebnzUb3M4uPqUgHUq2P48idzW1gg2jnC5brfM87rDSgwYrGbZCkuErakJQuqYt6PBzLLAmsE",
  "key29": "2UpTTUvuBHiGe5RKkW2YoEF53sN25tgtCAHGpsrwCDExZC5crBFw4URXQRyW5XXCkBCFweFiEn2f1W9jFLXai616",
  "key30": "xr8wbAUcYbfQmMijubCGPLfDKYZA4exGxG5cYGKHMVRXtCz4gbem6oPfB6fVtDxeRmS6SuPep6xtetQvRcHbYTs",
  "key31": "3XwLyYiKuZmCzGGoBzS73K6AYBoa51MYk8qL69NNCrVTwxHHatH5drTEtebakszsNHdxBNgRYJtnugAWcY6ZzK7i",
  "key32": "4MPYPHEN8snc8DMBmxm5GTopmpcdjvQidk2RE7VnAJxLE4XjmNC4bf6QiPMoWfivS1HmPdaTUzUFNx3HmjqNXnKf",
  "key33": "123qXxW4FKhdM9ZuvpSiaCxtkreAMnwPCGmPkz7tR8nq9eMP6ujT5Yx5nFJj3ZZY85JYy4phc1BERRkg2xsozvJG",
  "key34": "4ffBJ6yECCY6tVD4VCVca3pYxyCAqjm9AppbjgSNuYJcf3wgbi3TchsbFyafRqd4QTvxHXqoKKQKrMfDsg7cWed7",
  "key35": "29WVe43CzNdoSR69wyjPZc7YGokT1WCSCiptxGCbb2BEWAwyqUMM4ra1Exjbcyn8qgc1MeSghDY4pqTpRXmNppTm",
  "key36": "5GdSatyuoYc7TvwhVzBW3FGrTUM8XD1P42A92wTxWbJqN1uhTJ5tbj3Zz5uHDcpavAWHaE917kr3sDqte7WPtoaT"
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
