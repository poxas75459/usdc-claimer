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
    "3Ntgo2hfaAfg5XkCLAVR2Bkx1yXKCzpt9Hq6WhNva9dBzB8uW6X9k9DxMzea3iWc3AWG8ay6MozF2hFjGz7bodMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KFSfc28gPi1boLkBGowgVqJGAVi6ejNNNC6DuE3i8cLxV9WYwQQ261BDPB2YAUgLbnf1GkMeTBGXKCrmDcWMJLP",
  "key1": "bUea4ieUjdQQb7YTgcShXm4LfJnzXpsy3uvdC7LUnKLuSKdCZuBdDTxjtBskv6BCfYRNnwVKBYcyX3WMGVn8VuJ",
  "key2": "3XaBUbv4X9CZ71WcFLgBpvGZ2FU64wzzTLxSnBayao8hjRr2vYDF4c9vZbK24Ub8tTW2pGWwz1i6PMGRD2uRWGJ4",
  "key3": "3nAvQwSjJ9E1dNzzZHxPzP5iWtxpvC8LWC6eRMWKJzyW9wfWJjejht9X3ksde1st9DBucwtCYEiGNCzvZytsoCEn",
  "key4": "2tAggrmBogoQG828got25vrgn6qcc8dQaZMmVnZcA1Cn6QcerWExbbJMaTeynbPST6aQHr3XCxgLt27mmvyncy7y",
  "key5": "43cGeXT5G3exRREG9idDjP654f4NMDeSjM7peoD3eHsDBQQXDCo5TydEXFvNZq1Cf4qRHjmCqwhqCST5tLc7vQ5W",
  "key6": "z6tf7LVoR4MyYqH5KrtztAaHNA2G4KTokAt2BEfGYZ6JTZsta6KhtgYYSdTPu38TKmjURquNgvd3oNHFdyP7yMG",
  "key7": "5czcy1Rwg46fTUm8gXhHbpJ49n9tD9yBcwEe2zsD9PqwnrsppnUCBf9pLCg9JsX3wgZLiZjheWL7D9P7yFwyJCdy",
  "key8": "5mj4bdsbBVCeRTtH3NgRuwkH9W9wwC4PijpiKJizZP1xLhqCgc45713qjBAJx8hTwG6S24bJ7xdH7yUnLpx1z2DD",
  "key9": "2ac1LUs88gpQ4FcdA6uEXVr4xh8MyVNP3KKW9Z9BGcEw1bamvDsV2EWys1kp7w8Gmw4JdTKtbYvHPY9DVUseFCb7",
  "key10": "xG5Hpb5JCBXMGWhZat26mPBVQ8sMvxDcHMZ3LFjrUdEm5VwYdNFwoqCHBRbxSh8MMpRxusmfckPa27RKMJSVGBf",
  "key11": "3BG67E2GAeec4XDZZviW9djgzAQedHgog5pRPFb97p7ph7o6J4CksQY4ad9AzXQ66j4k2shu3oerP4W8et69AeWQ",
  "key12": "4k7gwC4WrHNwM3wip5dajPz2msKtUktjuGhTY5DVxjquDk15PiErQunSPjxZtF4rvD9CAwyxVp4LWxjKTjizSkmr",
  "key13": "2CMwKWWqGJBwkXcgc82dZ1WVc1n5CttprrgypGdaDjYPnw1bM9vKwy3PswVEnRgKTRABmHMMtR69FjP69sjk11iv",
  "key14": "3w4WEx5bCdQUUGEi2vQD46VXS2FqL1jUXV9xm77c1VoYuPGj517y6ipMiVwp1F485vTFLGeApdsC76uxkGJHFmWK",
  "key15": "4LJPpEiywFvE5BnMyHrZ1kQSnashfr6VTZqd6dRDhFFdUbx5b6N4qbeF9h4yjNLwASBvmeCjLyoVBV8k1eKsR3fU",
  "key16": "W9v4Zu3QeHnYR3AfmTKFscaTi8GMMh6qhbfGbasxajtAU5mqYVi14o8nXxzvMTBFwtqLmBhxPAz5CvUi8ctK9vL",
  "key17": "2fqDqvBx8xqK7uHp3Pcbz9LWtBg6FjGk8hDh5qdXFjRRKSdgAmxyh8VjUD6sNVxydB91wtyKW4Xmf7Wzka4MaSP4",
  "key18": "5Sx8UaNhXcCirLjXfAYuoXnLDf9rDKqRjr6a9mf15DjHE3321zzq3RhyiKMSyeHBkNqWYNosjvWmpcRpMbQ4h2Hd",
  "key19": "287ZfESr3LJrYEbGknMpCi2psnVQBKSmg6QkewSqqDjuTxPdEWEmAxBZYfFwb77rcqaznMw1X6ZxMvLgUiNPNo47",
  "key20": "5CZH3Kq6Q3H6tocSnZqoSevP5gpcrn5LY32iFHkGTgFqeHzpfkYRG2AiWv8Ka1a8H8kpcZDvJQpCN6t33bMqzXt5",
  "key21": "cyapHSQ9nmWGXypvifdVNAkvMCpwfMD2SBsVufrb1UHGp4BoVvKN4pqZLue3htNmss9Q8F1H5tRGxboLgDtGWt6",
  "key22": "2Uqc2WWJ6gBwLNKA8pe8ro1pQ7NPu72BpcGHC6LBQeAFevaVcfByYuYbMNTtFRdYxdgH5icSrDNswM2KxUvV2DWf",
  "key23": "4UjwxiG2tcezoQAitvxAqFu3u6z4iCSzKEvRMZuxNjJ91bvRmvGuW7G3or7djmRjkj2EcM31UW4jwpyfYf8bobbh",
  "key24": "kvd4gvQdGo4SCSsuJRaFWz3MC1pQUxyBSvz7SamC9CMuRrM3BiWjtGF4y4RFZ5rvh2mrm9Lg5fzKhu2eqC4ekYt",
  "key25": "661yJFgQXSBn6YRPJFpXcuSz3e6rAWZYaedWq5pMb4rAJ2QkEQDuKrN9t1Pbmyb2FdoBt1BhSCm13bRLnXNwpPFV",
  "key26": "4nh9tKh7TVVhqoTFZnZBQCbRp2E6Ltf8nD2vkXAnywQ3qk8v3fBZtKJziB2e1sDxH6VXNV5nom5bjufJKnuLCDhM",
  "key27": "4DByM8VAmeGc3Epab5LdcSa2A5tvtkXgLG37D3fo3Da9C3ouHMFGg9ef8835ZqXj1kiTYdCiHFxoGv7AscynFZPh",
  "key28": "3SD52AuGmfkaSszGNY2RJ6GJpaRtvuicpZohzy9UEYs5xk2X1KmiuQmVKkGoLSWM6AgTzh2Qxpr4SpA3sjNwjnxW",
  "key29": "2FaJECaLugrt6o3wQd76jtXzvJC5CuA5VRFdnrDrfDMD3V5GV5hRj1nQc95r9jLtT65KhLnHfc1oPx92Bb99o5Ms",
  "key30": "58dqfNkU3PvdaU6JfZrLdbTWycYvQFhYXvpNi2Jq89wxwFrwq8TzyP8EAdGYhVutcwyz1bpVocsUDEHx1D5NDA1q",
  "key31": "ZieSsRbVLTYsMrbwyvfrhecoKVVVRGajei13JDxRH4Dw39LYgJg5Nc6uL5vUeyPkiMDSzn3YzVQPwpBQBJBFqcC",
  "key32": "63SkKDSSuovHab69T63QXkp8wrkFJQ8PjtLs3rx85nCtiZxbNkPciiYgL2NH5d1q4ATtiJwA8GZU9DvJqbdZZYUC",
  "key33": "53Weq94Mo9R8a3WgDBQai7HmsXVQxzvkJggeCeMaXbt9g9ikjxsYebvDVCMdTRxPKB4NC9v4jNixkzNgPGhmDpYT",
  "key34": "3LJT9TvkAysynfTJAYrakbCDZ2oXuDkj1qiLyDMu9Fwkn9Zf9af2gQvxEGeo7KN88UNEZs1mymNM2jjccqnE8wgL",
  "key35": "4VpZbcni7Fg7cKyjRbmKob3Gi73LZMGtM7Xbg15j6v7PQAzPTFyqyz8smhRZN1f1RDN2fQdr4f6ah4K7i1s5BEo7",
  "key36": "5Urgx1iqvtnSvXR6y3gyN6mjxrFrGHKujpkxrv7qLDkLWX3xpjzuYkZUn3UtrZtWqYiNpQSeStjoUyxK8LGSbGoB",
  "key37": "4PNty4fzzzNmuPFnxrJRQEgiwJKDs4rTMgsC7ea71TjBwsnrUJHfnX4zjNhNFEnfUAfQugvUNj2sLz3tj3UPjAwt",
  "key38": "5sqadyrc5Yx7idVVLqqe2NqwspH1chu5mXPxxyvbgoJXmekjyyANyTTJpRDTzBvbs5dFEVwjXRbxdsWdsg3Ei7Q7",
  "key39": "4EyiEszhE2QhQJT14cXrCwG6wH2ZBEtzULQJbJgFPcJnMkeEdvYpzvnToZqYmNKdjqBQEhiHEqiG6AgFxsZP4dFY",
  "key40": "KJZxvEhijgcjko88avAGfmsKWnVoTjFidGzT6HrnkUVXFCYdGWCMNvH1AxHSUirHyYrJP8zCM6JHUbhonUMGkg4",
  "key41": "2VoQwAxeXiCCZqxWEcaK44ZZF3ewMrw61der885Ugj3VQ4JcW7b25ztabH1J1C6gwYbF2uovqGJZdThiL24sb1Yy",
  "key42": "4aEvgon2eUckMeAPu1BTnscEGtwngyDWsFKse69oZu66rA2TqXpqFFjQeGp7VBE1CibhD3wfQfBzEnvGtBoFzEd9",
  "key43": "3sjAMHt9ysvNWnpX5baKYzdbX2nbg9dBJF4F1xYu1f432eUQu7LCZkv5NkZLHzk6Ng2BGiGBt59gqj3ouJfmWL1n",
  "key44": "5usxGnB5kqzNnHpSiPHfPyPAKqotnY23cBXxZuVVbdUFdGsjF7j9uVUq4BpUH6qCUW7LV2oek4wd9hBWcZy3CStP",
  "key45": "4Xj7SAxkZxA9TfYRw9BTLUKxQpeYp6uSVaFKoUU2iqsLusHB7oSjZ7AKdFQeTGSSvtL8iBwMpLoooswJ4CscvU9m",
  "key46": "47XqNK7Rop8GnFCbn2tP1c3VsZyfXdKJo4HMfTBuqt9uo4xJvPZVYvEJZtuDCABbd66CS6m49cKHxK5J1GNpbfjq",
  "key47": "3kqzW89eoqZHxjs24A3hD8uoMG9SDRrX4mYXaMurtA7aQeHkep6xcNCZGR11hkA5wAc8qzpBs9vfXoVMv6q21fUN",
  "key48": "39cfP8kYSbr2SgMnRjurWtSUrm9SMfC9k35rKGHp1wGpiT4oez3bad4mZetPsJTdZUcB6ByGoZ276YBC8SXuPjFE"
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
