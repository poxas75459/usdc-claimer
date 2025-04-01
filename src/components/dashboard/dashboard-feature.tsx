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
    "4NGdFvwWBii5rqSkFPksmqhUESTxwc9bC1skGPvPiPCBhxe7ka7ZcJkw9hgp2Lqmrw7GUDNgw7GrXQzSdSGkHwLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q6UsNXep4xVY2z2ToMoNu56vXUagTKCZPXf9ZMKdGji3vqkiYASX8LzaGdw714koSr3ZjWZ3jM6KNsB3oyRzVU",
  "key1": "4G6FJ3rEvsQdEQ4wm7fmcD9NbpnUQJytQTh4cSamy1DV3TebQFP6SUjGFNirpwsDPZB9pMhofUZ7RZERZohyszEZ",
  "key2": "48Dby6UmHG6KVcKmtsh6F7QvP8cgq8ZtXb7VeTZrKrtGSCiajzMPZVkEvCFWXLWCUrkuWmhBw8FiF7pcoJU3zdce",
  "key3": "4dzVoBcEvVVgZcwsxUQZjSrwTURpuCMXGxWH8ZueyhB9QdypRZyaxQhcneojUiL1E1kqtk16hUr7goipJ3UULRtA",
  "key4": "2LwacMp3tc74mbtrwPgMp6CLizGwmpqdtTZwDvuTEoTwcXVxmuEUKvbEaa3go5fCvYMpfh62SUVxahC6mKcb5q7E",
  "key5": "S2mBP5zsV3HjR4otsuL9k2PNBMCcNKLt8dMcFy4UgJPRwy2m5JY9nQ4E6csrEa93QLTzwrwk4sWikgNGwqwpogM",
  "key6": "598fUD9MasYGVt89dgLxDmXMGzTw8BxEEUXV4RW7jH6fK21ErEEUjJhSQvTprKukQc8EnJyVqrjU7QV2jZ1UgaNx",
  "key7": "3ehqFF9543mdLYXH82xQp5hiZEaCKs9GmYDfLiEXMv2Zm7rXZzxuy7tGrSghPAERrhQDFEwKZMU2GXwWQjeJ4jBs",
  "key8": "4UY8geQASYfdXJNrgDxaTKXnpKwF7XBp6E6Sbj4T8cmkT9hWgSsJe2JK71BejgXBxtbE5gdeCbckzKBESEqXGBe1",
  "key9": "4vJV1opAi9htATTY8UT6hAfN6ehJHc7pw7FK9jvyeVbBPkFXBoXAGZSBjdjP4SnXidba97f9xitk6JymfBSTysAu",
  "key10": "2bYrgr1sEWq47BWVwVRkK7riJ3D7wKGaMkzndQiTMma8THpWqqSXYpuNesT3GV4H2P9nRZCFwnZ3EBuANZjRoQkf",
  "key11": "52ryFu6rLX2LZ8eXJRmd8EjBxZYmAmUD4XZhWVWimWDbLVnSF95P2ASuLyJEn1eSC8FoiMxAnRHFHUNTc5cHQYtA",
  "key12": "4ASg5vqvFaNGXpwjNAuL4EqzUc7puxAgDrNu4vuRX72kcZd4iBEvG2Zcsw6DEEgMTennz32GfnkLYWPtX4qcZWrs",
  "key13": "hKJp9ukow78C8gzXk9MAkfeNLcFX1ZZw5wcmMiDnmAbaCjfqUtDs89HVLxP8n2nwK2wdvoEvc94k1Fzg8N2B6jx",
  "key14": "3cBjsS2gatZ5PpQkBogXYMwJhU3vaLpmCxa56ygk3F8hndbxbtTEGCdMc9ZX2WZXv6aBrUBxu9xRgkSFeHrmN7TP",
  "key15": "5S6tVodvTd3pkBEG8LJ2j1Szgcg2qQvXnoQhCNu1FRsbQnPZFRPkJ6zg1TGpSFBVxhTzdczQCRLZhkviS5r6KGaS",
  "key16": "3fiJEc1RFU2rXvqNXvdfEMJ6VHv3pQYrq4nUZ6jYxYr22LiSQJijxa3xA3TXmBkue6NWHTqQSRstDKDCYeYrirej",
  "key17": "zhqBZuiJQf1gRGhgecwvVTq8LfgULHhR7jXUq8FPDArD31mtryJw1zRikVjZjKgBouVRLGqvdSFq4579v9wqRdU",
  "key18": "5NbpWnjag7orWJCefrzxjteQeMENraRy1b2xT1z8iVEoJDUJHu5pBBBtNNELPtCpmzVKHwvaXeKhx9txdaa5ny8s",
  "key19": "3sDVKVSAvqaiLGSx55bbMR4yCd94Bq9zH2jXNMVzet7SwvCoAXTDPwNWDubriKSmAJdqjqQMCdRS4UB4gUHaLhTE",
  "key20": "2iVAzv82uaQCUYHD5xs9CJRmWw5wDb28oj1CP9iDrt9gY8DTBQyofkEtX9NdNL1m4qxqd7p1zenLC9aXXXf9nmk4",
  "key21": "2q9J313QYpcNRBboaoaPANyWrUwMoC1JLx8bm5YbpyLbKFE1t5CZM7BgTWSBmdtyL7Bo6N9LywN6rftSyCU9KHg5",
  "key22": "5Hw5UJoGEUnd1zPD77TJXNpYyFnuRp9m3xorms8nbUudPp6ayacqtU22FCcLY62aLhz113EBmzWMvPjzEfAyWzqL",
  "key23": "5j6yLjGHk8rMrmJMwpraJsJEnWZXzjeVmxbfFHfHsgSYb8uL5GAEQ3D6jvqJCVpffHimUf3GPDEfZrP3Q7tAVpcm",
  "key24": "3KE3hRHZkCQsujUaaP1LYz29tQxmfRT15ACA2qp8epuUHE9v4ZYHnE6jroLpiJrwsFNPqQmdgNBnmcu13zTpgXDL",
  "key25": "51CiV16ia2ka35giFr3putUXWw8DSenZsuD6bGX5rYJ3A1fEnD3ad1RwfqZ9WzV3Y5NutpGFzWphTVwsBHwG96Df",
  "key26": "mNUphjEfarfxoS54EEdRuDw9yC18EckXNdDHFNrkCxQhpxaoR2D83hz6okngqedojUqYD7skgsrG1Jw8BzoGPt9",
  "key27": "3cFefFyCvweWYUjjb6R3LZWDjYqi1mhnetFvXPJr9RuF2Mfs2Zi2wYqs7XDgKzNZsUyBUZA4SXn3uSwCpPx4Yydq",
  "key28": "4vZgK4jNvq1LhHBSe4B8x5EoDY8C3cjqPGAp6kivVze8RsTLX5T95mro2RrnRjAzmcTpzmkFK6n2PkA6sHYpw2aN",
  "key29": "3NBPyyws5K9FvBTykAJoV6zFG5nQ9jg3Ho3Tnz8644QECh8hoNyvYX8M9hJ5MHACCjqSoKt72K7k76WeyH3wKeEK",
  "key30": "5ggTjjJSKbvhvQiC21FgP9Lb8YGr4afWV9WKBfDWx4us1LCq7C68gh4RRV8qma72dBQzb7sLAQgedN1hNefrWfU7",
  "key31": "2DVWj2FKe3qAJamWzRsfA8ezWuqXxV5oFmBjyjE77aYUZgF7GoCFqrwdzKrnsNxUYs8s2zGNW4oGxKYJXzNrmfAt",
  "key32": "5aZXnWjmEmcQFThAaUEpYpDmimCm8LBxJLRi4TXucfyTuaUzXouYU9rEfDpmUSkL5TTZ3YcrSEpWcfKrFLAXrW7t",
  "key33": "4KP9QXrrVLvRG4b5naRLAX8qhatq9AxaHrjGWzWa8sc2DjBzLcGU63cfVZDhNJ3JR4xzkCCXdRSWqgpsAXoLDEvn",
  "key34": "3PcgUETmc5kKiemmsgd2vyfK3UirffeYLArvMPwpN5sY5R7H53boEKmK2qtbT4ZXUHd6xF9Vv8VJRrMhh7n2awQn",
  "key35": "5583UjiW8DAjZ7RJunC65sPVGkBk2MCW3UwQ3cpdyBUxMZtaZYoACxSojTL3Nv2QFY37rsmATwraLJBY6RaxD6j5",
  "key36": "3FUdcktjyas69b6EtLPzKa2huTTCNCirpPFy5aWKg944uWdZbZDWNsAyfvtBe6D7tuKVkbJWBTtki2d3toj1JNxi",
  "key37": "4qTQr2vPtdEt41cAJ9YYQ9zZhvk2e5ujWqyfwGg6kGXjbzcrKJBA8yuNnCy4V2nBJoM2MdjvKbMyDZHba7NC6s9R",
  "key38": "4pSiRKctnmZbjLQDNJikUD1GdDkminFEdDDghM2L5xz1DUefC1bGCnFaEGEHfsxHgWgGqbtuRZ2XW64ee4tcEbdZ",
  "key39": "3SokdLrUewd9FWovX1xShVVoqmKfhbtgL3Ardtva6rXn3urSEfnXDXCznhBYSSyjgtoVXTnQErwkwEgvogaEGKn9",
  "key40": "43cpjfh33j9asFjeVDipKKcPoSB3usphV6y6UYVkVHj76QKU7kg4goVKdfVAh6DzvX8HvLS3EgqW58WaFrusLJiM",
  "key41": "4gRrj1fFpez6UqakrsZ9WMdYwrKeQZm8BbbGm5jKmh8cZHLj1tUTE8LTdDvBE1fXmFF5TR921TjYUkrWQLUJkLs6",
  "key42": "2tFcK3EqVCnJUByu1p1xhh6pk1j5ZnqXx1L9jHB7CkeGTUUZ3W8frNMJtvDiZm5zAFigxL29Ks8d3JS2QbgbGVb6",
  "key43": "5uuETZw8y4YvpQfAfVSBjhFFyssnT3KtHi41sQicK787c6KpVe2pmVapyGvr18VN8xBjEWxb4tiJibLT6WX8kFmn",
  "key44": "54yPcUKDWCUeELhLTbopCDdDwKt67sXxcZMvGrZt7pJu41qMRoZLM8X7La1ugKmyuTqMGxXmqwy9UjxdKMVGmJmw",
  "key45": "2KsM8AbFsnYFQCtudoFX8AA4MNSMAQFfs1tFUsyezrNWwmC1Xc9m7wu518LozxUwPCbKc7ZJ9KDFMPMzjxGHxRRW",
  "key46": "62k6yG82FLWazpAkSWqr2Dx5ZQhBX8XK95UjMhATA9DpRNz6dQyayTAVCpaLhPzuuV1d9WXqsQqvXyiFyX5EvUFG",
  "key47": "5iEBBYw33VGe4JXnojS2XzRSrEea63tcqRf5EE96CpvgYUpnvXy9KpwXYaygJES4ySkpnuoTTiJHa5BuiswGUxSh",
  "key48": "3sYc81NtyXzC97mLstvr5XcrGcDtsF3wGzUTsgnJRDK95na6PktabWeTPs63PMMRc72NRqqcSVa1CgJt9ZnGoT3d",
  "key49": "3B59Kgr8YZtqBgGmXZBAh2ZSSFM4WWPjrgoVtk5pM3yHKCYfLGBbjTMRs59o2JyQbVgzatRNdcpf88oqoJJDgvaG"
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
