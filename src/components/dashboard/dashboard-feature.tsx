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
    "4CoY8HzeiGsZDG161zR1UTJKMERYhHmSyFabbD9upqnLEpA2RzPVi47PVtHT396ykde7hiwmhDGqwQu7UCKavH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "454zD6nHtEk56i5Rz12z7d7y5FNjz5xboyWrdRWTvXTzTZM8U4XC5AT3zq3E1BGUWtLBM35wjPVjSyj1VxkGVyx9",
  "key1": "5fd688C7XiboXm61A2z9t8aJ8tcThU9tfHqajRb7CjQ2k7gmhzma8hVMHLN9XrwtEMQPd79XJvJwbt3eFn4rj8TC",
  "key2": "4AGAV6BZ7K8xE7VbkkJRQqXg7m3Caf9mtkknAFK3tk7Wev8RK2SsA5WrZ6Qy8VZDkvLnoTU488zF3vArXDowHQnb",
  "key3": "5Eph642w9pABEtRgfNhonEVeN498mNxVHQvC621DE24MvYLz88hNSrX66VNUVR1vCsikqF2ieuwc4sVrbN3MKACs",
  "key4": "2pLZXhYXWkJKAp5gVLxJSjWjxXXcxdsHDxPJadeytu7pLbABvYfmpXXAQDiDSPsVNgJSUv7abZJpAi8nGa8E6YWz",
  "key5": "5CA4LT1zMM92Hw2LbD1CtKek2hRkDoaZQoRYwKneLBVdovbyssBWs9ZqqvgqCPSu4QGQNTS3RjEyr9Gv6LSeYZo5",
  "key6": "51jf7sBTiHru9HgEGC1YqjNUxoMC9v5v93i8m1qLrZ8aWkGFUM9S2mPSjj9nNSHw3mseWdRK5eeTCDNMZnMnHHdh",
  "key7": "2xLCgNxBS7pMPZ11djw2DVAR7tPgcAYssnVVx2Xi3qpSZffDuFesRyveFqc9wuyhQQTGts51kbz8SqLRXYo9sxvZ",
  "key8": "3rL61ErMgjw2i15yMyQzxnBHNwLCAi9DmgzUxEGb4NNQNNomULkLBwjmBcaEVbgp6gLHm2GranrR8wyAEXc1CsVC",
  "key9": "2BFxYg8oE1EYdmh4qtTTzPzhutSMuUyeSFGgiX6E1ngGGZr4uJQgPHHp1hBivC9HojPq8DLE7HzTansGYjMkSdWo",
  "key10": "4kPWLzXXWNyK5US4WWD7i7bRrbskowYGMzyP2Lx5dvWFxRGVsPj9fsXSSSgpVV1n3dAaudi18UsK551poTGczkyY",
  "key11": "3dzmXTu43VJTrYD7ru6s5m8MGnq9jWKR9218wNGvpFeeq4U1zkoCq919oSQS9chEktLJ9At2cd1CZoE5vV4SgNoC",
  "key12": "2hMVceZBYjJvjpcEnQnLH3zBRkyqDPCHPeoWwc3hJtnWmyZWp1cPznrhxMbwTWthGEoC94QDmgub6Z3cAGHWwEcb",
  "key13": "Asvz4amH3MM5JvnfXsBFaHwTGD7PnVWgziZ5smVQh5gs9ffQSwCJ5ieW3tQDdtjL4PZZ4EPFDDUY2LFbYVkeQxS",
  "key14": "2oJamZEWqF987vjdnwf41wCt1eYgRtoweKLQLqkYC5tDHJyCzA1PVBTK3bBhJ883aYwomMw8UgNkDPQcqWxNhNru",
  "key15": "31ANLk5nBtiWpMqfYXJpuNQq7Rz2uorja9cj5YpefhHKFnXhevdgSAwBq9aFrhLuP9n54K6djJGaVeGk2jm9Bmec",
  "key16": "QCdyNowBT5srf2dzTXjfu7LWHcNo9QAdCeePmbbv4L9Sfkh25t83v4eyhkHgP1K16rEN3oXMtzmNFPeRD8kVAio",
  "key17": "r3CShtALaSqesNTJRrNJhDFuq7UJtXuL6kymYEZgsg1Ber1b2psX1dw5Ey3HXgvQx1dsMCEywt4faHqgLR5YGL8",
  "key18": "4Ap6Gt58SMRvWKy4wpV51sc5YjMTDS6oB7GKcxHfdvGimmfXzs8LTmo8p8L5DnSLdQj8pYGm3tADfRrFaqpEXJyd",
  "key19": "3Ec7r3cBgkJo4RfxmLtA6GnGQGZqTeiFjjzzAmTaTfzxvNHDcKTX3cjgJMJtowbENjBvWUo3Tc4BUcg8xuyQruYf",
  "key20": "4AurVn6qC6NtXtFAeaDcW5NhriENsikfHBPAUHjiWBzB179KSRn7Y1MnSn6zxLRJfUZ6Xh2dxcgUuYEUXm1MV8x3",
  "key21": "4xab6pHcYp8PoBGb9zJwcPDdMA5DDwVcGB2Dvc5PuLq5XmVLJcok8p8TWH9wSTDMtKvfbmSSGAQKkMAH8mrZtiqj",
  "key22": "42gsqYf531m8Z1dwYRqG6Kua1CVExDP3PUvNNw7zSX3vmMT27mGai9Nbjn7k41ZQGKoH3Ezv9tkgW9HpctNsxizw",
  "key23": "5tFZRF9ZYdFiSK8R9cQgPspXcavLekqmxMpADsZqFiW3wufkDo784C1JamA5eEjHyTfPdafp2CGECjbrhfGaAUvP",
  "key24": "5WgMjmr6dKjkNaxVdw4r9bcz28yiF7uMs68Xfi2SuGGPZALxwxtW6pZtb5P7APm2PaYaegjKr71bd7XULYafxk7y",
  "key25": "x7NxkCd93y5HCaLDZHrxDqeY2vsKnvyM23pjG4poVKNRiYUAsBKGU8D86pZgjdzs2tuuTtCbo56td9HRoKPfKKD",
  "key26": "5N3TYi6vMpNn2Dmp8UA9BpJjPBbyEsbXxnWwTbdm4vUAoFXp3oCnGhyNrswaKfazW6X3RTE1CLfB1WbnZXXR5kea",
  "key27": "JpwvujTS2oKNFbffLHzRzvFcw2MrKCu7K57XXeiT7SXoNSjSWauC3BkgkhfAixjrHrHAEVz3NngA2yT9nCPmM6r",
  "key28": "3csLkHe6T4GLr8RQ2GuL3WXv2P1U8jcSUdNtMZMqmroAnQRxvbd6TG1yLbz5UWgfATUYt7MHQ1uXcj4QBVd1sQhn",
  "key29": "5yMGxi9XwTk75N24c73LUARQNzviex6bcJ5LWTEMPxbrPwqsesjcGDu9vje7hiSrMkXr7DMkxkBXGrtML8dR9a6o",
  "key30": "5SAQsdLbNyxiQQU4Jm9Sbv2bGJNSxgBgcbz5iBXGDk1djbo4vJxhiGmDqP2fi3ddmbvZHypxZGaBx99ZbHmvqx7Z",
  "key31": "b9SoToVqWQ3f7zSqUxbH3uSWGrhc1PSwz6whYMAEjrYBGzqWvUHbHVV6pLsAnACCw48xMwvMF8Z12Aku2RA3Hx1",
  "key32": "49VWqFnuKcetzYiAsKAZkKPcv3nmAVKVjDnqeeC2dbLwrJEXEuSfe1SerGQNwba9P6TDFxRWyTr4KGpBXsM7etFy",
  "key33": "425mPa4jMfxZbGgKE22zni6nLdQhUZZkkpm6meEhQFajwfzBTRCvnp1m1uJX38KcGHv9BAvFYqjJPU5t85XheZyN",
  "key34": "4c34pJ2LUgrBWjfqrUyaXW1Z1jkkiR53cRaFPpJw7KbtHAipjRZTieRjMKqJXrkbenn1zJorRRGoF9gZosHP6A6u",
  "key35": "2Jf2fvqMUBywrEdMDT5GZarLAYZ8wzcpqfXa9P4tUxnn9W91UgojvHiTBWDxLz3KUpdwawnULbi6YwTpfYLYLfr3",
  "key36": "ueGrUbdj271N1nuP1oUTzXQreySqr9XszhEddrdPJL48dNxydLctaEugvHRnBb6hQajnJVk7btaCWvbxhJgkWn6",
  "key37": "VjUsDy7UyYVYWTuEmH8Ur7ZngsS63wrWuuqFKEhUgWbvyUXrfYkoiyfjAzkYb1m8A9VeqhCAhgiS26yTFeLpKTr",
  "key38": "5Tz7uSE4dPJ2th7Fp3pS6i16wuWoWoSXGJcQbD61Nn2GbxA8Ki6cbzPtr8cQzT4S2oHkbLFqxfTzay7JqKRSj62z",
  "key39": "4wtQrKaJ7HvTXPv57u7Lycrtn6bKTxyJiRaXpwgiPqtAgtKhH2AugtehQfWwSmZSvh9U444u3RarDh8kdjHqT4qY",
  "key40": "t3uxFJnJmsXQ7CXiWaPDFUXkGRxnCa2zfAEpp4Qthp4Yki9S4NNYTRG6iy444o2dsrkxt6BmJRMoJ3ryhzNzTtk",
  "key41": "K9brjnnKx3eVyvPdcvELNvrpY7x4N7ntAzHNqeWsThWbg5RXFBwht1Vd9DTi36GHwLp1yBPVixjfcSc54Vod2Ru",
  "key42": "5vwyDbJyZghSHwau8XhgzkdnCkXjXYcVSwwQtmdRKw9u9bUX5wFy7aM6Ef1EkNxYEWUkkaW3Do1vkDWKe7B7W7ZU",
  "key43": "3UJTPUdMMPWmYFchrhUnwVooijRwsMcsVsM6Ydrb2wkZufDgns1HSUhvXWyCHy1zQLUxQv3FyPWCqWdvvBxEBcyz",
  "key44": "8asWt73nEd4KokDon8PD2meFBKVLYZE4sQLm6ZPxpiPU55FcArTDqCrhjaMpQeRT6TPtuYTMPP7tPnKX3Tscsx5",
  "key45": "v1v7Lg5PQGWUwWoT7QSFWJPVcsYLd12HTM1MnkFAWGKGp47WhsxPR3F9A2hPyLYghp5DHeNShHFpQcLgQ7mQL7H",
  "key46": "4P7HaGGfH29wn3fWi6orT3qdeSAbFQVmVPC7Z61iybRKSkgufmRFq3wsmkEg5k1uKCLvDp473y7iHXXZEfDFHeAc"
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
