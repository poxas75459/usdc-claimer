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
    "5m8c34UGxV7RwDfiurdTeWbqdHkPFPwGsLvBFAM2kY8784Wmra7sbEBfkMLiAQgTcgPtgsw4tR1zTzomSoFfBqhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X9UiYYZ699dujYzGiMbkimyG6CE6t7k1yEAhUxDdLTQijc9hc2zZKvemoAc3YhDkZU4UEXTU6t7cub9NcTvrBMZ",
  "key1": "5KAKVxVKGP95Ec9VErKfrP1rzw3nkatP9zbapNeqPLoQHMUnmrfY5E4AMsCYdHUaoAFSYPx5Q86B8RGVSLs9AD64",
  "key2": "5VNtgtvhJNRHTKSE5HA1AFqzAL5PHXLremdhy3HW4LnMdhquTYnseyV2Sbwpd9onruGJeDuiWdQkRkNrYzdKDK6M",
  "key3": "pkryg5wTNXyiHbkgMgxdVMrfxD4EKxy31naCy5QumY6gJ4hH9riW2z56WEEwMWAhkYxU11QVxVPKvR2mCxP2RAX",
  "key4": "4xfmAKa5U6h7evB3fbaYKh3T6wfC9umzAwrKPCaeQzHqB2p7f2V9KWc8AjS4ym7eGaT3qsum6AZ1YxUqer4KZ1Z7",
  "key5": "2tfW3f2YspqrCysLPGWmkWDorB4vTtg3XvfJqgdjheToBhv4PUrZmatB9FZxgn4Q8GvAAhyQMiJmiYwGHeFvadsJ",
  "key6": "54M4gH8aPMYhJdp5aRRdz8FPUkjEYn1JufXDoALA6EU3Cugce7pZvNCNWVMeLcQyZGk5BqyjJkFz38kEishLkvmP",
  "key7": "2qFZYbGZxgUhmtKYAYARmhydq2Yno2pHHxksNh8YpN5WrExqeUmUYuqbqnS5d5mwCfcQDKJYpK9ojBa5acvRNGnE",
  "key8": "2agxv42NNnkUVB75p7PJdeDoHHE2bfbCv7S5DGWNhhUy41CDvya2XY7K3Mr4jpDAHKN2eDbsNycqBxcATq2EbzpW",
  "key9": "5kxcx3HMn9bVvFnKyS89CGxy5eWGjg1P5x1pKg4MjVEWpjQ51u9iGpABqk5zr5uHXsoWs2jdRNQbcoYKqY7htjBb",
  "key10": "9dr2uQfb1axbmuV5pkiSr5EXgbPL9HVfensQJ7Soy5hMtqEhR8ULuxoKkTL9Da2xi8gnT4cyNBbEJQrcKEkBjSm",
  "key11": "2bhG27UTnQPH6SNxpFi2Xg7L5JFDqy8xfNWjtrmgwKYpfKCBDri1rJEtv23FhQtz2NsnddFGCZ75rEZRC4iBkfGR",
  "key12": "4JVE1reT9ene37MYqQJCSezPcHQrtxZ17CU2kDyQEtuxDCvVY4Lw6a7VLH9Rvw5Fsga8wbFHueGJ1GpjwnPgLGNx",
  "key13": "5moTH9fR12i9SUqKwXDdNA4fawikm1vXy8wa8V3PKTf7zN6V9Q8KZLibvmrDbLJsynbDKQAxpPMdKP8ZcoQwMrVv",
  "key14": "XbLEckwMZK3ruJeQ3JMMxmRTgyMKmpfSNGGZFUdzdt2pM31wK3oLnypegHknSEhQTyxSNWRaqfVcC78aZkrhbBA",
  "key15": "5fZLG9t9Hn7sh4CP4Tt9ncwEU2ewVT7yZi4PtE8avAdmNDzzNvR6WcGTdzua5bqRnuGnt5VZ5DPh4rjmDrQK9698",
  "key16": "4geTpXP8JbRcwzxdJiQzJYBsmZSScJZuZGSmkncKdDGau9kfyohmJrKf9xVQGrFdE69ppcY7m8zK4X59hFo7VTtM",
  "key17": "P3FoiLUSNSSc9m31TBCe4e4CweRLvnaMRTjU8BrTTRut9z5Bzc1CcjYPyx8RnNH23epWjNPEzLjbuRT6Lj6XaNu",
  "key18": "RhNVxLXFJMiYPHFp4XYkJ26cfKsHUC81Q8QyQxKvEzbLaVp9bMg8aQgvr6SFGUsZ4VtL7jiKBsKh5NRmaim3fwQ",
  "key19": "4EcEFGnKVZX8ebgPR6roi9K1BVSCFF7bAQfzcN834uvRAZv41RLhW36ZVn5Xz4dTrc6ZSdLpzYhVb3GFxLQtWT1d",
  "key20": "3voJpXQaFgDes3Z34Ja189RC6DgMLahyu9KR7Eq3pstKzFJK12okthk4tBDzGLvkKpU2eMnpnED39V4HvAhzEKKd",
  "key21": "61tuM61UB9gtKShWJwjdqcaUjiGEjiGLNQNNNMtZ6kxRdGZB7TZF2Lv3CSp9K2P8tgK22uLPgEbZQd6jWFM9f2SR",
  "key22": "3FU4GbAATQqXya2HN72uBPntGM4543CHVvyyGMvKU6bxVWL1CiG7h2h6hqRaZpJEB2XTgpiyLfT1rBTzGyYSKWPY",
  "key23": "4BiJuiwoQLv2bpoE7ijdMks7ECC8eoaG9YdBwytG5RPYr4NXHX1zj11hKoyhdWfLr413tJCf4boJHF9wc8SLSzzH",
  "key24": "5PgqWMecrPmuNASaQxgQ7UVARzGxTPcNyGYvL6WeunV1habARXNHy5vykCCTQVB7ThS9V6E7EYF1NSbHLykzLyTV",
  "key25": "5BWAzgG6NrVi4aLNJn9XCPgqJ3E5yNSDrFSsy8jfmxuP1LYPjLdoEGxknZojYGqUZGNnXJMkAe2vckdExutZnxW4",
  "key26": "64GubbBpztihXGe7ZqxsFHpR1zssbbv7c42yitmsZJt6k2dAjLgdKqjycCXvr5Mx2n7qmsXKEVGoKAAdHpXCHfk1",
  "key27": "yic2wG2SZj9qsLhWsDEF6fGWKXZ5v1AyQZifrVdat9zMYFTF9JaxTeVhKrahPU2a33Zz4F1hLYc2x83mUxvdfGK",
  "key28": "5sFrZsDx2uFiEojFhWS9njcvX8Wp2Fe5E2wZo7jKnpMi9yaK6NBJNeddJhBAEyoEabdbgWfkwiuuYyAtRRgk82zb",
  "key29": "554K288wwqERvqn5iUNDEEDyBLEo4WKDq7fVnVgvcBGP9nideN3SuvdKcxhKqBd5jhkEXTv1rDmAeCctsWQ8KCdv",
  "key30": "4KF4wUXAHdMR24CJ1yRFzuFYfSEzqpQhMT1sC9SXXrcjAjyCynTmJf8tnwY77wF6H6QcSvtgAzvphyR4umRWhb58",
  "key31": "5bc53KrRz5XRVaB4LFzq3gjXdTwMFQPVkr8EUVPuweJHkV9pgq8eRuhu2EQ63G1ENnLgQ3XmiVYtYPYSMkypEW5r",
  "key32": "3bhtagEwRTcZjJcksPkTha3MY8oh8T8nqRXZbBrJq4CXpDVyYmP4rm6JZs6wkuuFBxjP6wrat8DwUnYWHHAECvuU",
  "key33": "47kdiz9EB8G7EnMyCZ5UwHrSLKjnY3drXebWqT2K9pcUsEi3i41do74eApCo1mmbvh4zF1uecbAsddVYdu1a59Bt",
  "key34": "2Ln4k265tMZtEyJEpy3XJgRSwpX671aoPw49vuu3YJB9w6AuN3Hfb5MzAuPjRKr1TbJHjp4jYjbmfduAVxtS3Eyr",
  "key35": "5TGhQUNZx7HNz4GcipUADDi5ehi7uLeq8uxPgnxh14X2uBuuDnss2DgefvtTeXTTsXcJkRCtp9xzb8M2VrETaGX7",
  "key36": "4Kt1f572LFSzyxwwmBXBivnyaEoUdkt8pcev2EFyTg5R6ssgZTgw7ADgjx7oxcJmffJPKUvdxqsD8bskNV2dog1T",
  "key37": "4YB45yXnNbLiZfqi6NNYoqb5WGmkpwMCa5TE9Dfpy7zw3bnHBMo31NZszDBhs2yUtGfyCCLqn4ynmDwqtqxh15g3",
  "key38": "4zV45PhxsarLMtqJJ2yBG6xQr5aJ32kRPjaRibjaXp1oNoPWC2X3fyABo3rYPw6g1jDxMBGB17RDqwgWZYwVugao",
  "key39": "5chrVLKU4jLbNpjKyeS8zoW1nNPYYXDZ8MdioPD1mZD1U8mhmR9duWDqUaABGX34EZD6DmgenFu3f92oeHeicnC",
  "key40": "4kCvkxtGeRiBUtXhSx88foHnjdTWNTfHHq7ummT1kWAL27cphs6gfGSSRPXx8BqxSgaysDQRTk82hz7CQL3Bo7uw",
  "key41": "3aUtYjdRdK3SZAMe7T7LNTV7i9Va2H5HRkdMy8Qu7NDLUDAbjqH2vZ9FVc87frWxGc7pLu6JfSi54dH1hxHKpbvU",
  "key42": "3qQZhws5RscvsHMLoAD9tAAZs9e9JdZF6oXJFJypif8LVNuQEHeQMeNQv2NqREc6byGHiD5WMSDUMoXn7hunSU2C",
  "key43": "2xGpn32sw7n8R442emsDgQqGQgdA2abBeFbYAhEqwfZUXqr4fqYJbKufTAGsCFd6qWNP394JzMAkAAqWAxsFY5nx",
  "key44": "ZkNRQN4KQxwDkR9bJTHzLJ1gcC5ddxgwtvg9ES8dnWi5bQxnZzZNZvkUbSSKsduXcZky4yaxR61yvXkXbNipfts",
  "key45": "24nGmsvVrEi8MdNzASk7LDUjdbMKnGpoxJ372p7v2QoVvue1hfpF5qpUkJ9mWJmenfZLhSpp22f9MUEKstgp54C7"
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
