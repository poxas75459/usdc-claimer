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
    "2QYBu4BYAooRQSNigrLEAhBDBihVXmFuHGW2vBACnNbaZkmR3GcFZKpwiYhQUqUseSdXifiktn8rA5mYXfmFno2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jCZ8ef5hWmc7dywFVExbhvz8u1D7qCZY5FexQnUaiYwsfchC5ckaXZ4VYJDdWdQpYDJVP6WkmRGyYxWZEVA9Hxs",
  "key1": "2ZnNGkJzHAUhaaGcv2ehKXT2gbDPURQTsG7KJJeR1WmsYPCk74ap6Yg1inw6hJhRi4ffuDWK9auvvznoh7TG8uBu",
  "key2": "L1Vhs5iJMsGMVKMSDJmoUS3ZTDgbpgLcuBEpuFCkpkVywh4uZ9Y8fLGc5Evusct85NfHt2zU79rGrKohpoAwB7b",
  "key3": "4Jqv7iAv78uD55Hhxnw7LsBv684eTn3VpkDwAbY4hDuij7BMJo7552iXtR9fXT4fshUYdFiko4bdxNUbCdKPY6NW",
  "key4": "47gTLpE6SBemNwYDGNPHb1R6bUjcKjBbMWKZb9RkHv7piFsCTzeGbdetoNPZy8QpmD7HXHMUicPjQM1kRYcbmj7Z",
  "key5": "3t9isjXniB4qNP7wLBECiMJ7u3RRyCY2ewdAcnJAJMgi1dKqwjWuuj9whHTwhDwnkfqDagtJZVwxSrmCSeYy9Zh4",
  "key6": "4FNoDvfuP3iHAJV43knrXteUFKrG9VgoLtxCK6b6ZaFwSYQbTrXWDMwse4U6GZkd2kafPbYCJub6kbDP6Gbno2aF",
  "key7": "4H9haP2XncCXPiRwdxcj1CNwUpQwnLq6r4CEE8QLCFeazaxK7fHc8KZwj8e3bUYsg75NcHjZUgynSpvhkfFZWUJK",
  "key8": "4VqDWhyJuxGoWG98kdjzLQfB6qnQCxMZz4AEzgNgDN2LJLJcmoFzmnHaXDV8sg1C9KqxdKfHEM8tTev1GeQm7cY3",
  "key9": "vm1K9zaiRK25zib6wpVHrN9GCkokKVGB6sHif4NdXAfj85WmTDfVbiXip8BwctZAFEGuBi5E1bTBVohHtqF3RiS",
  "key10": "32ZkfmtWyMhH1ST1msA77g8ZsS3AaE5h9WcXB8jnF8vygfsduS3N1PyfEUDcYP8yTVteNKie2uhosJgmpujCdYxf",
  "key11": "PD9pNzCGo1me7zPhhidZsTz3bRfVwCWN4XfMrpwttJ8tk9FSjEZLCon8A8FqGRohHjRcV97S1aHQTEeh71C6CL4",
  "key12": "Vn5syZ417QdRz8cMoHpMKej2DfSPZfBh9h4M3F8amnYQWFaVqxbNkpnroKHPLGdMp6Cm8qMFpdmsowHGiQeF9Tk",
  "key13": "3yhjUNU5nVwByeoU5xW9W9waL1h5FPNLyzLzQ3X6QPKvr4oxMHAggh4Xh6HexgzrzfZxHciWS35V1MNpdkyKcxvh",
  "key14": "3mUKwnDwyJsrBNzbgfFQt4MbUMjgEp7JCuBSXMTYkdSUNZ8zEyTuS1mjwdWCKHxaaSWgTNc63neX5y5z9A8Qs98N",
  "key15": "5mp2qL2ZBCnwWWBk8drQtdjbXtDwU2T7BXTZ5fcSVQfUp7hkQVMjyGNzVSWYpEd83yb1C7d5qEgYDacHBDw16xdf",
  "key16": "mYXMT9YvYQTH4Mi18codaef4GSubMpZZMbiJ72JMwdcjoJcKBqWFF3ZYXKEa3UeSMKrHa15vhGwgXgRXwmNjoqu",
  "key17": "2aLLx7Um19ijJKiRfARd5eFeqFfpBL2eH2crHVBM5DnobGgA4RCMtzM8wAVeLSnY8JsaiBEygjbH1fcdcj48AaqQ",
  "key18": "54S3Rw3q5tuPpwkdcDSnSPkZFt3xkRnxB5uqG432Ct1uDnpHTnKTBWnUMn8qFWJcbXKCG1YRtsnCQa7zUXSreTSX",
  "key19": "3vrfGrnyNURXAYEQjYnYesU5wa1hBEjk2Wtspks1anJDRxnH72TuCBu2EgXmRwGdPnLYNCHyVirxQZhjcbhmVLbt",
  "key20": "3gKD4s1Ls8wEMV9knDTmUQa1cvnt4qnwJY1TZDJ3co2EFy31KcRPCZgX3Y7BTA7TahFEkFNAiwkKUeaVSz2ksKkj",
  "key21": "26sz79RpiRJ6n282iPrtKuBKTZwfo23hLb8hg7AFFK4Y9XtVYhH6NHecrzhFa633axbmPP9HRAf2htjCBWSo7uNy",
  "key22": "4PUg3v2j3zKcXySEPt7a3babYiBubY8V8a8b6k2xWUPd31siERr68qNuKhprvoaUgMRRNmzTuDmRZBjf94mM1WBG",
  "key23": "4HWJYqYzmAgkJt7Re9o8pZSgthGrEvXTXpDrmRR6qNsM8bvPN6ML2WeUHi4MVgf8mmhSrftRKpBVYoFG7GbJmhhw",
  "key24": "2JdBZFhKeLFCTCGwGhJhourqEvUnrifKoZiRr6yfvngPhxAAvT1Vee5nZhnLZWnW4R7DJ7HH11hLVnB81VFP9FfG",
  "key25": "4c4NjvGRGXFY2i5hpoFSmMiG9Tr7yT3shXiTPUWZsihyMKph42535ceuHSTAhpPATY1G6Uue9V34hYyjjkmVxQPH",
  "key26": "2djJKEg3dqjUkNexQbn3HgZSoTcpjqY7gGNL7UFmT5Cwe3ZxohpEEhRYu1tCX7GFfQaCj8mv2R1z7AnDCmeZmkFw",
  "key27": "2Se3s3JmRj1ckkiV3x5boChYaFU8Xcseawr8rcGQP6kRLuNCZPYPwSiTKjzRfvfCFRDggkCVGw8WVRm7rXz9vx4a",
  "key28": "VFPRACWaJz6vZackMjpSrK3VidG8VAnQQRmEgE5CmCyBqMyAFMTtdjT1VPLrp4y6ryWpNA6FbfRuLUCXcdpp9jJ",
  "key29": "56L5BqPo7Yd5S7M1iTDnLP7vX1EgyndkvnMsWrFmyGCsp6fgLtCrJAw6y84HbB9ZFeRNx3hPP68a1MtiimVMj5rD",
  "key30": "U5dGkNMRiydc4VjW5JwWXizdNoYuY9V8s39uNhG3SUYTJTpY4RSXcQXAQDq5HsLALqfM4QwopBRK5B6os2S5Wsy",
  "key31": "2U4PeYbsZBGHQyyT6QDhMnTmZemxznkRJiEikiyxo81VULqqfjLRgdkZ5cLgNNfL7iCbVPo7oKJfDnpcj6Zbv5TP",
  "key32": "4ntoqgaSutDpArqT4LDtaHrAKBaqQjX3oVqcm6VZNvKQXWYbmXUAYEaQKgUfYxpApWoTQyU9zhqR73CJ3fUcg3AJ",
  "key33": "5xx6xD7WyTCXjgC9RVv8soD1wRxCJoFN3vtNatbsqCQYCEhJYT4zyyFzJ7B63shw6Pcan8teHPZsBdJH18rwcRY7",
  "key34": "5zhPo5iCXibywfk3jiZ1GRNGcdKVgATzx8AnbDBvHoxHbcuSFmjVj6Lf4VKFpcW5PJd3fLcg2iDxg8BtDXRf1SPT",
  "key35": "48mNGbERBEzHjhnhhKpf1urmAU9sKGV24ckrrgMtP6LJVSrS7GmMXtPkU3NUqwJiEsUgDmnQECZTZTUBg5MsaSzP",
  "key36": "53RcccTRVi7RhcSRjYRJgAfPHDafsx79G37CLFMo7CccMn2831BwnSysnTKLjQmyo3d1EEAEeLG2z58hXmMUBpNZ",
  "key37": "4eRNU3z1r6CMi1F7q6r1R3eEeC8HZYfAdB2B64pPcQVDm5ZUbh4JFTEaAhYNRvhMYakJVtE5xaPR2kTByGyqNy4p",
  "key38": "23j13uaoLpE5a18qM5qDKDsmoDdzP6pu1YuUmh3E3x4qo9jU7asWzC7P73ZNVVsKTZ6JkHDepm6BtbwVA8YpmUme",
  "key39": "cLAmWDX1bsoXcTYRHd4ag33MgndGRpFTQjjcfk9dAYSW8TUrXefBxpznQN9YDX7CsFUDNAFmBvhp3Pg396artZD",
  "key40": "4SBHuQPBgASc89deePZuYyd3y2yKJcr58rJPZEmnHyaw62n5ru9JQoBH96xSTn26cJb1XY1mYz7k2vyu6aRjM26m",
  "key41": "5LS3qux57DuGqvVnsfZAhp9hBBe9p87E5eSP8H4P5Bb87EDFHAq3er2wSSvKo2kdxR2bWHUvg2WjpuP5YcggTFBL",
  "key42": "5ysFdfnxnmGYz5dSDE53obfmTPhNToe8wpB2k8NWFX8eaVqh2nYNPpCPy4NYxLYmzCaf9Y5hfVppYg6ecL2vyGth",
  "key43": "5SiPKsox6zyH1fdcn9oiW7iBmfjkrFwAjsnmJBwFPtjm4waRLjZ5VKuhpWcsyTCbFYNwaB1hiHLLgKfnQw29RabA"
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
