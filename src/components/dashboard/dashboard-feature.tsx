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
    "5c9yUg9o3zjxtQS3DpPcQYAyr4kS23Xy4JEijrd4NZx4zE84uEGMmJVNTdv4UBH7CgA5LbmLt42K4ogJmfRwgqsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39waEzdN3h9NgGr4mRpr1FesLV9kp2mezpdT6GLZmpCidAZA6E6T3Z2MNfZLQtjER5Yu1S9Ae3fP7Hof8TUoK33F",
  "key1": "2Bxgi3tYdz4fdss3cKfeLPVUf1nWZ1QFGDvbjFkoa4Hubg7Vu54eKwkSc7UGEdnYVsGK6i8Vu2nEmBm9PP2hy7NQ",
  "key2": "2PG6BGD391NSmWSuqKWbRwUYEg6EPqUdmADWrhTg82MRixh8itTA85UwiESeHmPgskm1n8QzXZNNPHVQVVdgBus6",
  "key3": "5cEeYNAEQAF1j7Y959M4QUKQcH8fGj5cfHNiUSthgArUFNgESDzGTfohPfQNzWR9WS58HNiVgjZvArN6PTvkg5eN",
  "key4": "w5wivkyvq3zNsFik32Gg6VErhHYRJddumwCqbGa6Jj3Y2Zn2tCTragnZNmwTyymp7SLjvv7U9Ypm9ExdWjBNSTt",
  "key5": "5Luq4vAsNqi5zFFBdeoBPudn75T8F2gNZRrRCmuN1JGZrhYCasDjPGSMAEHsUCn3khDXtSUZZVihGpUZmz4wEoqQ",
  "key6": "2EVMK7Vc3fLhHmGEJx11ZGhYRRmpriMCr4HwbTT5QnnwYfDxoGJBYWHJiMm7agLsdSMC9BM18ggcm4rfmM9Jep71",
  "key7": "3pLmjqstjjLh5wCN1dZnxUZycYNuddgrBzKzLQRydMXZdZnTqtbujgc99hHvicSUEhcWb1FZjCpCgHc3bz6gwXDr",
  "key8": "5eJYCNvhcLHty9yaLgQdWSUhZy4biq6KTKfwPNg2gz4k18BFizrRbRe9ubQWSYTJDfwZ2EbpzD79ZWVTG6PBWPeN",
  "key9": "2hAD5ffU6hJCL76siejTyz638Lt4xjZmX9P3hnuHS7f8UFsc73QeD5Uht2qWmanucFJkaa9zwvvVDRhgFuyGLCD2",
  "key10": "2vdrotxD7VSQKbrZdBcnoeLQsAj2RMEmuDiVGrGu7XsamEHYzLwGyPzLmWAujcJAgPe7b7RxZJjvNApKA9X1bEQi",
  "key11": "3ZbD6E5ktUKf6NW4aPKdD6MfYXSydDT3HFDnhwiPBYdmrVSkJyH11ejTfzwai8jjDQjyn9ArNMH6rcwEekUNUvks",
  "key12": "4gVPucq5pX9v8XtKhBvTpcovfuQjyty9mjuEZtN2Q7fTS843FLQG1ipjX5h39CLG9cgQevNu5gtsmDtZPdJ3fBhP",
  "key13": "3iZrwNZ1WfTdYyzsKxZ2uV7fGi93MrcZjbaXUb9KBbMimz51UVHtsp6PxkicWnTvdfsPbV7swFzZxjkAaupDKVLa",
  "key14": "mMPCkAQhVHAhE4fDbHQPR8AAiqnVdzJAhXeu1qioxtwfr38nVYP92KTChf53He82TAbNMPWq6T67Xmz3LbwKesS",
  "key15": "488eRbkitMo6E4ss2Y8SU1kV3ac91U4dkHyhdWzEgbFcHLPV1cvonDoUCuEGusRqnciveJxmJSB5Wy7zwXz2HHdY",
  "key16": "35uxcT2ZGG9iWG5KDESrJiFCWZS8XreeKDPetQTTp8xFqddGp5ANL5rgrzk69dNCkhNWgisRsvUePTG9ghK15LuX",
  "key17": "3xY3PVmrYgjf26fiv9mYnWteb2nxZgPure4vLEwUusQEaFHgPaHyoa1icm48mZEqsQuvhDyNJZ6Bx3RSgszPxGBc",
  "key18": "3d8GutmnaRVHexfHcUdE5EKZkMTmmtztJP3jBkF1AJLSmqnBgue1kjuSyVmztSC8w6od7QhiqRdEubJUwdyUAvNC",
  "key19": "4qQCHnAhqmEjE6fm3TXwP8Lma9yJonBrn8P7hMhhtWqDqMMnZ9pNuVLN4becrmq62hDRoq8uTPALsa2sBBkzLwMr",
  "key20": "4CS7DTqZbGH6TmL3bzDDvCKft4a6TpTyY5Rnmfjss9Fh1LRP88R3K5KVZ2MUw7NZ3P1TdMhSfVd4xfjfsSEK28d1",
  "key21": "5UjWiVSjskSTVSrUKf8urXw3UvvsAgVczWhPUEYqVHzAGVdi5aHQLwdJ561zW1T7ybqfr93UzHiak7oHdyojkxxY",
  "key22": "51zLsr7WqdzaoAr5sAea33w4ETaeenrkuEgmkhSVNSqCLuEgT7e3PdF9zY1ym5G2gD33KtD5MM5KZEhZxbdv5HYn",
  "key23": "5vSq6SGiUhdu6xaxV3TrCGwffwzUsDXpAB7HkE9PPjnsFFxVx6GtJoPYvd7b7a7hBvTM8RowMVXx71YKLJdk82Cp",
  "key24": "3R91irJqH9BUF7FGCH7REnAimFRS3uXCrdzhVvbEwTWSrmzqrTHXB152b45VQAnNw7osWK1VYZfNPt9FPTWMqrxb",
  "key25": "5WjBnZ1MwZLrMaj5v91vaxAFtGRPTENoFDyZ6jjPEBVqnAhLyRASANBv3ReGDNoNvSHS3aWrzanyykFinuUbhNJP",
  "key26": "2zHY3xUzx6TQ59cC9WJgDXWWDnVjanW6idqoy2votyWQ4GDhTmAmdsq4JM3v9pA6dukEPWVUKbJ1gEaipt2DBUbH",
  "key27": "2wZ1igBwCaXu8ASoGnbZVU8oJRduiF2vLLDkNv1CvsQXf9hUu6T7RuZFHiGNYoEx1oBtgo1N4d3cBjFSAtneW1vb",
  "key28": "3hnSnYCe7dD8DsSchyW6MwgusGdYndaq7HbWN9pDqRcFeJiMDcBGMXyHmn4ury1qLwFg8mLVs4hqDfvsDRei9eQF",
  "key29": "4vbU28RCBhKPB2dnnN6UT6JxsDMcuKSSqRVTonVKRBT3MGzYEvcwm1aAtQTAdBSjM56pyAYnFK3zTseR6WBgWW4",
  "key30": "4kKfoaPURRvzuAa1jHDMM43EmoQe121AVaMBLqwqf2gtkb7jCakS6tuwHPeSsjRrhs7hxjNoHdfU4yacDbaGy65h",
  "key31": "3YEbrRkqptqzPZ2B1ZBdxYWepNdYryJGUSmmcfcEUrTuxP7BKHHKvSBLxDzCFqw6SuFUdcYXZqXbwP3EqK4GcRJK",
  "key32": "9fsEGpyDzVyjYPvGuADPCgm1z7cnJH6CHnfr8jKmpFxN5DP4eCbxvF8XwqtjZgApjvBGFX8PKU1gcNEsCZjF1DY",
  "key33": "xV5aKhpo7Z1C2kE5uaUedpwnZmrhzqjRjeqpmit79QxxAUsU5WMFNHH6i9Gu3PAtoUGUzgPcDvQxQmutiFxMCn7",
  "key34": "2U81gympfxfJqL5N5ARKQDg1wdoo25pm8ndTBT5vEsk2w3xBt2LT5oMRemm2NqQprt97BUYRn4p4jeujMb9jFMM7",
  "key35": "4SdD7ZbC1ddsTgdwfWT6xCgty5mKZgU3y5CwHWvYjfHjPf76C9efKxof5i4XoeWExEapBHaELWxqZdpoUJf2Fb2u",
  "key36": "53nuMtd5vvH2kYD1atmqeXocWM1WZfB5EFmfr7e4EvvtYqQavnfNy5iqcMC4M6BDShnW7qxpH6Ku7tVbiNftrVK4",
  "key37": "gPLrJDLocTi9cX4cj46c1jUJkdYefpn6q1rmguPZTpsvz1F61vgvpRyds28U38srDk58fqA8fkkh3JYwC8YuiHi",
  "key38": "5GHLQe69q6PF3xjF6x9UCNMUERk5PjA6neNMsWoNf9YydguRfuCH6XWMwdv2GFkRQWsVqT2bDLVf5ATfshu6YCw8",
  "key39": "2xfvrYJBcAsBQUY1iBTqGBzZkpyBqbkb7r4Yk8EZJq3QbUEACAm3XAPT3Uiaj4Sbwxi5knUneUTZUkCpsfe9hoMF",
  "key40": "DJfaucTWvyqgxrDJw1egyHPE2iMXEhRPeBx8mnonKgN6NJVBBiKpmuYQriVpPN8hF8wYn1w4KgnJ9KZut6qBQoj",
  "key41": "5ChNLZae8e5B6HyE9BKTK9z8tt7Qe1sYeXYGhyrWk1r8hEU22TurBHTwBosdz4dxii2X51fnnbvS6m6K16EGMdjh",
  "key42": "taw144wtA88ZUnBeKTw1UJ764XLsmrYN9nV3MztQQBbWsGmb8XFKhQ84CMCVsTunBf1pXHXvjhhWW878Fz1eShN",
  "key43": "3xkUoMA1X4CSDuP2zjYkLg6xibi4rCKSorrDTqLgvbX8DyLNLU2u9U4Uw2yCmi4LLaz7ikBdby6egnyixZfAFAzv",
  "key44": "2M47bVwosVVfXxnpHMB66uqEUoghYsCMayy1NiQ5SxDvyTp9K3xNbBMNxddxLcuw9p2XSin3qHLzi4MiCBoRbNdH",
  "key45": "5Vy9ryCi9HrkbSd2nGkwSkvEoBYeuAyN5PbYqKSZ2nu5u6NGKq6qn3QCLoVTPTVdt9ypcwnuawPxGR94HHBnCjDd",
  "key46": "RPARxprHJ2gamFwuPX9tmJfbBeTbmEqLCZAmELagbicoyVdSVq8UrvX15PYSzNcvCq5k8GjsLcSizNC6qqEppep",
  "key47": "5vGXtUMAX6aodSfJ6X1sse6W6FsYrAHL8qPTc1LAkRsD6mFpMogXtyjjmgM7TxyTFsjqfQ41q4FD5CsaHcecknp4"
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
