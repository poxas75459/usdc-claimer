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
    "4MN1dye4FmumFfCFCdrybQXHzeCq9bLxJR1tvbpGoTdo9tiYrEPdN7haYSfrXAhn6KKDhxKMknU1TAXroAvT7x8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "397TVWnCzDs5G1DfkR2PaTeSxgoUc7tY5NjgdVvLdJdKuy5V4eP4QjLSrKVKKKd5a9pUpP42UoKWj38eJEFjrZ4K",
  "key1": "3hqM1B4sUUkqgqckHi72GzH6dwuQNv3J5K6vRRPL1Myohxm6WAj1zr8kmtdWn8vqLWdxHxUbmVGJC7QNibs7Y814",
  "key2": "5uHQeHC6Pm1j4TgzC3Avif6JJRhhmnSpTd1byK6eGY2TCocMhWidJRdeGKwbLDGpRBoPkZcbLoiKt2nq7THeJDxz",
  "key3": "61rkqPEVFCWXhTXV7UTohiXAap79AP45d4QNeRauQCTEty28VjjJsjuJDwqwXVyvYyBjffVMDynJXqBwRCWBQk5C",
  "key4": "3ugqKXxfkpYehxBaTxVpwDWFE5AB7EQAYtxaFjFpC5vBXTD2dSVz8UDsFMEUhXSSgesENcUQeBSb7Qc36oCHPHwh",
  "key5": "5UU8ENeLqBaZur1niGhN7bBewasFewescJTHkeeKrBupsVAYwsu7nruspw3zagfNbZoBJP5SfHDc8KD74HSSyxck",
  "key6": "2FaUgw77RNeJrXaTQfpmDppMkBA3kjb93s2SJJqC6Tqksht6mr4wfZqtERwbmUvsY7n6BSA4wrmEgEctWmCm4fs7",
  "key7": "4comJWrRS53qusf3TaJCjJ6fh5H86HXZSxUjs3NrLaKbqbtohx8vhrpEVjWV8iHRhD9UFTdF3CG77sxDTYaKdgk5",
  "key8": "2qQcoH1NZkkVgV3tzMzyEqG6G4JRdt66UX6LQdXB5kHkxav7WZE9CUFKF4z4hPkqzKPLPpW3PzG5CW1yX1dYQaYW",
  "key9": "34JYAkSKEGwVKf6PpXyggEZ85U1uzgs5XrvYNNGdNURmjtk5mj6SJnNTFABtmCX59gsSa8BS4c6M26672TdduFdj",
  "key10": "2h5pUywrdj84ekh2uqR1ZqqX6L56295Ssh2qmihQpsDyNGGGcFbpfmaVeHz9M8nAw9B6E9Ewyh4bKW6be1GbaBHd",
  "key11": "5rDb313RaezgbhAU3Z4xzjPcqTgGLAYv6ehSSvWgo6Xjt5FPKz2RqgPf1Bi2zGtD44vfGUy1RxdHP5VtYUk5pqTU",
  "key12": "5PGrYoMSzHn1dzSRkc2jfswbYZzkJiXWYCC6nn41XY8hPWNQJ21NaNxyBoWHxndC7SwRAsGMF5RtYQ5kM1sYN76R",
  "key13": "2eYNh4g3edVivDqkzyRnxbEqFNL7JCmuHJNKVDVj22cDnamfJ9EKKek86qajgZ3j327M63qdvbSauMA9TZCEWGSR",
  "key14": "3CQcuxraZmGo1w8fB1hsUynj7EWAcCbYCdpaoGz1pWoFZxiVfC39ETg59hDcX834QMgoCHwnAeV9XEJp2B64cvpw",
  "key15": "EdUL4sjNontuahtPPFrub1F8ULXkHgkPjQnHq4RdK9479qJFPLtSET9v8xuHLpxGHg9gvfRGPrF2qcXGVkY1hyb",
  "key16": "4L1kN5mfjsG7hmdHwfCw5EotU3ovSEKkSrfay39zo9FkS4TVdYWiY3gMKGUFNGst3ZNEJSUcwXWEH9CyxPdB2vMj",
  "key17": "26dSMg3Yf41v1RhgReY4EU5RUvDpRyMRkqM7QwcNJxLSrSEiXj2AnyWXY9BP4U9aWjo3dHqVfYYsahZCrDH8JzKf",
  "key18": "2wvC1wFsdowh2cvT9EL4seDbhRAYmjB9CdmuaCLkENNj1gEP5WjrryPenKRcgR68eHZptEJ8bErgMrSEs2sX6Aew",
  "key19": "PpUA3fN8vbzbw4dHXTFGQVmnmmiPXDEJMVDLfEAEWkLdqzJK3V6JGTmFvmP8jggAHCibX2X8he4mvvwCy9qodpk",
  "key20": "2ePPvXs2W95p7CwN5LYVLRiGHSkMsTFWg6yw5azAUHpFpFq8Soe8F6LiDwHytQQhMBmU9HGrRJDU9BR995X1Modf",
  "key21": "4StkSGkCco7QarDbpthk8MzACpBMpyApdHoFLdjRb8SvzdJr9idzxUd9EES7Xw7TfkQsZyQEx9NSHEuihdZpnHrE",
  "key22": "etgqPC8askqPtuPFM7n2UsaeYoG1QckjQreiSoi72c2FBeVk4PksNVDVD6FmBLGHvBHXEcrav1bs4SU7ir1Yymy",
  "key23": "5Qgt8ck8uJi3gR8mbsD2uSmU5Y92jSPR9xUsjQy8Bz7WSxr7guFNXDh1X5bBVzGuMX4cYUh6fYYARhEdj9sr4P3v",
  "key24": "4KCAGdbwT3XmS3Seowc2dpVz21RfifDxaCGt8cWJNt6oL36GCTJAcP81KvA4vriEMRNtKrAdS11g3Yn1E9UrbqQ2",
  "key25": "2iUNnHJrREWHoznJpEYE1PUXcpnKPb7qCA9nWeMcpSV5g3zNSnv8xw21GRriEPJ62DCyJDoa2wZBYWdmp1AHbW2p",
  "key26": "2Ny4wnzqtq7peL3WsYAFjYymB9xWTtXhLxuc2LNK4pxoFBowymvfHCQ3QSXyFSCEww5L58T9B11cJeP2FqNWWa8R",
  "key27": "3P7PF1NTnfm7QuqzRVQXgC49RtoxWBRuVVMGmr34ReELKPsPJS1GqZ6aRibScGp1wrPXhbrtLasGDtemZjGpSJwF",
  "key28": "GrYQ5keRDSLaRrto9ZuyZLXQro8ZRRDtDzTL6MTxN1KVVY5es1VbdABq9bi9Vhys2HdPP2yixspSGkXpAuxDQ2v",
  "key29": "3jHeXyzEWmhxv7xP2fWvQU6YBqLW2SP2HP6JgRpEd2RWVY7oPzFBjDyQWAwSUZbEy1eqrPjEQmbLjRqLEuRCe6Gu",
  "key30": "527ZxBL8AhasYqcSL1DbLwv372eEWuVj7FMoDoEimjqPdBkc4f9RFRYTKY7sRz82go2Svbn2a2hsZX8oYzr3p5kf",
  "key31": "58MnsHR3FwaJtqJzGPNqLVKDfPVTqbvso1348WdGsG7ZYgxYAFnbUYRNopQ7rWzEZPxvjdtPWXKZUCJeueFZYJZ3",
  "key32": "2Ko9zXVBdnW647ZyNkGX42kLh3JKiBys6WoJECduYQf7AfuF7ejnrSRLM3rGBKSzUZbubidcSa1j225cmKZT9Ufm",
  "key33": "3sUGSm9hPrPWGgM8opEBqP3iMZrN5QeLjEz2pXEGx2vBcYJ26WnkexaGcsuigC5vyGUwkVZ8ax1ShhJZSE2QpnTK",
  "key34": "3Aw1URcSsFp2ibGBJVfcLKsnMPHVEHGR6RDCETyUaSqr7Z8sYVF5t54PUG5wio2RVEA1n9SGk8GaN9ZbBLxhUjF8",
  "key35": "rnL5BBUwrmLDWpzv1M6zFmkiMTqSrCPiHGqoGnKzvnpdwfdNoSC52ZUB2PGviw5SphjaZofZaEgNphUGG87f6vL",
  "key36": "3EkvUqNR6r6b6UKrkUT9KETZPPGQtmsZCmxfZtSwa7iGnfi892vj8xdmJAEq5ppB4WANJEJaL29NUgNdmiz4Q1gK",
  "key37": "4DFTa8go4icxKhjymB43R6yYFQP7d6gJ7y2oTqTkE1gNPZfjwx9rY59GUNUPpZLxGDUdH7qDAcMHQPwvEFjqijA9",
  "key38": "5Yheyrk8UKStGCStARrSocctHZpJNEJrXVLJziYtWWFDWQMZCFcfVJqgrzhT78d7iQSfSwsNZNov5RY9Tvi5Aq4X",
  "key39": "928euVenVeGL6fKtt2nZSd1smrBWKQiFB5QEpoieXfm31mJQLfVK9hbh7izfmtB4joWsJzpHhFsSsnydqMhcRJP"
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
