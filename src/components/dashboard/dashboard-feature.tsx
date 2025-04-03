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
    "bkYdqXfMUDGPxMRfcBLhCSvVzkbeCut7BodDxK6yxz4mH4mekcwFgy46GQ7uPT1rRSvDDuXtZuJTy9bpXs2Y5Gq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xqorkxokz32QCayzSVNTYwefZvVVXKa7qKrYrqCmj5YHUVT64T7djahkQopDjqmL9mYsHHiUQJbs9xbrr74aigH",
  "key1": "5xVrJ4eSfc3GTAen1opocXPu2M6Tj71uAWfnnt1cfQ8NPP2WXshaEHhihmTeVzhX74oDNrZ5sY6pA3HRCRoQdm2P",
  "key2": "QP8VK3qrov3nrf7LDgi7x8Qpw1mTQdMy2k47TYfaiSyfWA6Gvbmknpn1d3YRse7VVnN2vCTnXE7S7oHweByqvjw",
  "key3": "4jjCqW4rhto76CEmhsxEr7S1qJJYzbMfREsS4ptdgpN1hajf12vS1C5Sk99EyZESvU2BQigWCi4wsXkoJeWnJXk6",
  "key4": "2rAsZKq7Ju9434EtjW7hvLdQGLWmLuhQ5mnthKVtihusERyJxCk6uHAq8CNTrcsQVD3hmRupKr2QsJiyydASLAXf",
  "key5": "3VvywZyNFC3rpk7zWCzRZRcU5xfcf9tUmV4QDjapHEVeHuuZwJGTNZDKwSksnagtdg2c6NjSZX9KBWY7aAXRXtkR",
  "key6": "2k6Z7ftSBxARYfJ5P8qdNrPfSm2py3n6Biss7QoXQ6woJLHAVG6o9DyiELmFJrEJU1H2SZ8YrLyKUY4PC4YCP82L",
  "key7": "8U24UEhHnAVQ3PEeagptNU8xNyWCqFLyqipZBP6uvmo8deoWbUMfgLfwQBjHP7tFmwYUbYxY2pPRK95ZodyoomV",
  "key8": "51Pk4mAMocfU1Mp92TiU98e9QgbPjZ8V4UwJdmgj3ZQuBJp94YbSaH5gGVDQmcfZyMoQLYDSpdg3uK7rVM2S65HM",
  "key9": "3ftfwpNHYe6vQStzdNwaZRaC1XAuavoWT29r4dYnoCN9E1aX8FTCHbLtfW4aXSZVvhQtXwPP6AerJjbfW18b8BhT",
  "key10": "16559QVDw5jqnj2ELV14y4WnHAn6ZWFwEbL48jc68hJMeF6Cch7BWpgRhswzcGMdUFwt7BNArXX4vKZJQdt1giU",
  "key11": "4L6n4sGZaSnVT91SVxN7CTABpza3cMDzMLtVJYkDR3hTTMrgCJ8ejZJbdUUxdtEYPr8UmHYDdsrszrEGqdbcAdzE",
  "key12": "2A9DKuaU3nyx6ckG161K4EbAXMXqnmu2JQDaU78f2XRWNPaww86rF5527kBbUMRK2UySJsq5piL5pNJ6nLtZs2aV",
  "key13": "33Sz7Zu9Eg8SWNc9EBvGmRfzEZh1kMqadpojEXSmGfM2mdEZLRTmXCC4UfFMHFYd2hsA9UUJuf7VSnzb8waBVtQ1",
  "key14": "4p1vaP4LXgGWDytNnQibwrMfP3nvWfqgV7HU85f3b7V4JWQBnQqNofvFQpPT5aWWVn99TQPEE9tynCkkXLB2tM5Y",
  "key15": "4GyCs6xaGF4zVTAou7hYLcDEpCdVfJFEpQUzeyyb5eWNNhesYsSx9RA4LS2AKoXKCK432TMDXx2XG6Swwq5VeTVU",
  "key16": "5gJdg4LeNqZaLVkELmckAVpZGFXxFd9T8JrvaeUjyX6fM1hAyeXbPo7oyMqW98Nm3MzgmeAtf8usUNSSfxqD8pbS",
  "key17": "4wGCmFRsizbrs8caEuTTnLnsiyfZ4x7vUDGaEkGhPMf3XCSLgXQzLHroz27LpJPEs6hmkm9fXSd6L9U7RmhiSGaG",
  "key18": "33LoWQrQ5XCfmfVwY8pbRGm7ciu7Gb4UvG5mD4b6fS7fsNuNGWCRjafuUahUNpD2aF2aegKQFXG5vXYYRoCatyBd",
  "key19": "4YdRfszAPcVzuvfhVW4PSjmneWyQtFhh5gA1dZijQD3MbnEXMQYdCpWLR9gfDEJPbbEt6CaaaXQ9Xf5VuebDPejr",
  "key20": "23pNWQ75NoE7vCLvY36UGFPAo3XU2mx5GHZfAZ34WnvGbN95a6oSbWi5R4aLjrQSrtEqCFTNkZTdcxcHeP4tpMYv",
  "key21": "2jbYVeCKu2iSKpgGjPNEzCAoJJ8YMhQsdxVkoFh8aa37E6mjN7R8C1pnvR3cYvyvsXtL7DdHw2yBVm9wwByuyxbX",
  "key22": "55PJoSBCDgiZa3ZAmsTgEDbX7HZYfK2Mywsq9VYFGTYJKXChgnzkK9a9BbffFuPqdAFrcTtiiGjQRJasQ81x7Tso",
  "key23": "4CuXiDEKwgyRMdJA8XFqwLcxFRkYny9xkohNvqyzyWR2ooQcyMBND5Q1wNL8Smw8pUvWPMdzbgQNLn1s47cqBgWG",
  "key24": "2gNUUN8vamH9KDmE5J6hepw13Xnzee63GygfsTdeyVsrJGGqMiZmtsozm78RVLg1V8fnG6YuHGtHF22TdTRunKLP",
  "key25": "5MKTV77tTpzAFT2sRyw5m7B2kViPe9r6ofD7pNtWVXTis7vf5rPk2Uo8aoNzaqsMJ1JbdQfzsj8wQVR2pLc2nxKy",
  "key26": "3KCxWCsfMVvss9EGb3FbNZ4gVAUTaAviuJaodzet8Nw97xohx5pZjHz65mC3AtiJpQhrMhHNe97c8YEUUGspx32u",
  "key27": "3dPdGhAzdxjthX6AvgGpfARUQBwURBmA2RGL4QJqBW7wFj8jDy85Gapa7gx8bv9hehNrrzWsLMkHR6D42MEB6Rua",
  "key28": "2f4tWStxFB9vsHovKgMLV2iMxbi9PeqsqWxznhRQJAbu8WZUApr9R7DBgy9CTYaKExFBWrNQfcgVRxbrnzxuUs6M",
  "key29": "GDkvVJnGrysRtPszMDZzPEopyZBUUFQiGH3d64oHjiGukKDcGccnGrzbbEYZXSwGzShhxkjDisDWdtKJFZvqTwd",
  "key30": "5zKthWFKt1CvGRPEXJUCYFmvq1gQpJrtENx8L2gLRKQr6p4zGMs6UT28j62rN1WgK23i3QYipTQT79Xz1Gc5gUq5",
  "key31": "3P8QJd7Uofq7kZVWfANBY3UHL4CChc3rSvErX7X77BujV3nnSnbB54rPZwo877xdDVJnNJ76fE4A9XkPfn1VPNxh",
  "key32": "4XozFhNHgXn7vPThWFaqajRd6vWNeohbmVp6KDgL6MTrRevVUJGhbV7LRnfpFvYeJu6TVxWDdpgxQTMn7z5dgg1e",
  "key33": "2btneUvUfQ33TAdq5nshhsPUifi3HNgauBZduVLQTLGh2TRe6PSySDcpPVAbFqPvx3H3Jc6yHf8rsaFv7wenmHWh",
  "key34": "5cn5cvNarJPoeDy4EL8B4z7hgkJq36hVv6UN92w9d3rJ3uWcHWhzqAM9W1K37EAepQ4BJnsaePzM1Cfx75v7wvkf",
  "key35": "TxTX7zG4vXnYHehe4Xr3f2K3hBr3o1KQY8GmsXzPTHpj8svue8G8xgVk8MNGsAPSCUpR6Zppu1xmUqCiFSoisn8",
  "key36": "bCBwhkfKfzgod6tssKqzyEKq2an6B7r2PqS8M8ijgfdsAUVxjDWL7o4sLEiyDPgmUQnZpprEXTWxsfZG7g1K6da",
  "key37": "4hffvJMw5TYRkMmRFYJpTqj9zpNMwioxDi2xcK9dpy2gVXt5uXLuhKeUXCm1MWrAtnD7YTSFk83ATFbbesT1BsQf",
  "key38": "5KFHFuK2gADdLtCZzNEJzsJazLCDJ9kwzKK3vfju4GbXNDkZmPN8ytT54qoRQf2wE1M4uFxmbpuJEpQi5SVuyrLn"
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
