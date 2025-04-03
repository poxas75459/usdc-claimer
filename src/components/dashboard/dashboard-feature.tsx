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
    "4QsYYZCRbeGUBiUwhGmYtfaKv1Qzx97RG9SCUVV7TKhhwu42vRWugBcikjhXJu317iqWeUqyAtbPpna6GKTtuXGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u3FRBCoDiacr8jSBEPNTrg2Tkc3bbM3uBS4iYjdkzGwL6cDG8MTH7GZ2GXGQFEmHDEZVTRFAUxfXac9e1tcK9HH",
  "key1": "24QbRM4YKGKiZW72jJq7PkXSGgZxxPd9tavo4h1kFKXYnL1oUfWaYW1s268HV3ZcoeTLRod1K2h6RpXLomMYysH3",
  "key2": "5hA28217YWgYL6giHdwtNU3AUSxR7Za5S3vCKyRQjYRc4dYWBBvwsFBSUbFGSbUBw9Tthc3PJ8tTZTNXHzczczwx",
  "key3": "2m6iwBn6Pp5ADypKbcna6c2NvQdMRHRk1cdMQ1C2fdFXVN6yAvBmMaMQKkVoRb2sxywvwBywBNsgHvmpg5wVEtS9",
  "key4": "3rHm9nLxNTvMh3Nj13RZMtSx9Ne5Bmrt7mnkAvwm2VNJMAJnjZgsCDj4V8n6R7mDCtkESctWzsD3n6oUcySrLuyt",
  "key5": "5GsmBo6juGnvHCdcKYVvVAKXxrB92QfqQ2XGa4BZVxK8ZeccErQxkWgnDfrk7mFxcm2DSBhaAu6A3TusQqL1HbMS",
  "key6": "5Ptzbki7YmEvDbN3WBZ6KygfKSi2y1p5Q5bbVQ4p3w5p2K3eXCYZVAtZsMgaQ4QTXAEunPXQPQksGJbJuUKZZE7V",
  "key7": "52kbp5ASqAx52Hy6idGwZNRoakPMRjBhy8w6KAH9dvbGirxAsphW3Vu75KCMHEDphpYgBEJ6UakD1fJWDdj95bWB",
  "key8": "4VkMXBHbPdDaQeqioeLuGWV18dotUr538tPnk3WBDV4qQEhB46CZBVm1a8VetF1nEPreRngkck4qcz2DojBSWwtZ",
  "key9": "4yRY3qhPohTxUv81LzCmmgBbZEQQ1gQth6gSy1u4yPq8BKap4frZc6shSNgedc2tew1Vehumx85EZg4qRnauaJax",
  "key10": "3hxrMtFN2Eips9cSXwFPvoj99QxTzW9kBb5GD4iBdVQMSaPZoCibNfKQ2pY3pN5Wg8Aw6M9ar6i3Kwgqh6z2ihtj",
  "key11": "3u1CUfoaMabaRZVgUtiepnCUpMUucZM6ApCcWfxT8HdzkwvG5VZSBqKCdJ7DFqDNQbVZ97Zt4B5TWk9Utq3d6JU3",
  "key12": "57xbScwUwkCzhY3whF1LeFaorTyQLiHBKvfTjkiVsc7KVhrJ6QJEii1wKZDyopcEtkSVUCnpbPw4o2k1i1EWX8gy",
  "key13": "FUXyz5Qcr3YV9dByWQnsn9E4omEbBqnhayKg7UVvQpABYWSMBKGH6qnqcnG73fpmy9KungrRc66DychUzyXEhZL",
  "key14": "2uPJPiuUXJVCGwDdLhPydChbo8Cq6sDtb3nxmEvHVMHFtfpJyjHMd92G86LdNFG4bkQg2uMi4EeR63oERvgoj2T2",
  "key15": "HtxVhJqTAjufbhqH7WEMDRLs9XYUfPTmU6opMjoGGUXzSAHggfAgxXD4mHS7T32bgwPjA15Qh8CRXc4AUuq7Koy",
  "key16": "62EjuqRJKU3UeRpfwmVusj17XfSxtvWcaPp8TPJJfKNqbuj1XPptT7F6Wwj24kgAgZd9ZfEoHkRVYYjNjNu2EVum",
  "key17": "5JsFtrQy6Nwqqz9KUFZjWiPuH6sMNB491PRkEvNc34B8Vk7PVp1HRYKVkgqyLyCfitsFVrvKUrySb5NoB2Fu8ePS",
  "key18": "irmZj1BmyuLrEuizMt1S4gPdzMcihaT1yLE6cibvD2N9VpFLd5135YE8YtZB7B4Qmzn6aY6qH4S8e7JfKR289Jq",
  "key19": "3s22X5poTn4KJwgDtndd8wWMA8sVPgaZqnY76XmmJJftWHC82fkvni867EXHLTNKhs9LAiggoynzWPF4mRxH6HuV",
  "key20": "qR4iebcwMujpSQ48BCu4LpQRG25TJSw25VP5wFynUeZpvLYMdvULbpMr2gwCP3L1xtAz9Pm6LFLZXYB92PPdxor",
  "key21": "4hyvFhC95V5R96xZ3dPR9cLzqY9Bj4kL3N8vnz1ecJtMyWGJYkDttrv9G3Q1VzsenCqidzzTv6UtA3LjtL4hxERa",
  "key22": "2kvq5CisWYp2YLMTuRhqs9AXGBCvBN9A6WT2VPHjRVbZ2oFsCeBcivef2jxqEj5LTJajZEJRUnrZrrp4wuNLxKk8",
  "key23": "rTfNpNxofgaCkjFzdrYLEZrKef4VxB3Ss1YwafoKDHCYkSa7xQK22D6RSwaQiPJd32ubuNdqLeDMKiGuMxa5pnq",
  "key24": "5jKQwfx1Az8JC67gKVY4RpG9iQfDtFxQvPAC9Brv1qiC7VrtBT7fAP77d4gtGvMABJoC586ajfdxbHM3H53qsKSw",
  "key25": "4xQ4tQbBTmCEe3XWU6TDMcje9Zwju4N1jiqk4yeTy9RaVKF1tooqsc46CcukebVpy1wMCKxmKqyGqARXp9L4mHdU",
  "key26": "4tsHTumtKdS9TCafyKWudoAe8BrfQ48w6AmVyvoA8vVEGYwvg4HoqUe8mMxHPicETuby2AtsUXJrqiByweq97whw",
  "key27": "5rU6seYNohJfPofdto5TCdjaJHmQV9DpeweG6atYuEgbDXAK8jQeqDQPASRA3vUVdLAVMwCLjh2oHcD7xtS42YFe",
  "key28": "4ArVczberTpYxhcpohRtgeEyzXF3PxLxm5GmcpAMbM5T69NgonBqJ2itLniS1G3RNE1bhn4R7iqDizTCtbWVSGxs",
  "key29": "3QLbYTjt8CPiJSo5WuoBcb6vtLAwWFykDdDhPmS8ivWJ435SMiPWEu4b2vd6s8XPafqfF9vmnddau81pzSUUPhLq",
  "key30": "5egFkZ8WpJbDnJw4BJRx5bWDa289Trd1GqHRfN5todQByx551KNR5w2Jhohy7qFThxwUJirBaPQRBYGM5eJfaN4R",
  "key31": "BVBHXGPXYTBbuZcXFSL1kRDULNeuD9X2FjYuwp4aNDv2P7Pxgtvfj5RAEeMjZJJJXHJPihVyKT692YNWp4tSPSJ",
  "key32": "3bDXFGHa6toQtAAgDVqXUNVZRFJ6JWcmway8tjWmkyFbGxcfJjHu33ZxLrL3swwz17QLu6oJdA77HDPspZVcHUEr",
  "key33": "4zewZanp9DrjsfCx7u3BU8XbhuYTFfHfP36Gbiat2GZ2s5z9jTEWH1a7nvANJ1xnpwx4X5CxCkXSJbS2jL2utzPG",
  "key34": "3SXpK78xTZJVX9ee81d5zxeWHh3uGUnA2L6wZxdbU6ATssF1EBjdJMGvXpzeCyHum9P8B6xAXLdUjvs3oZiNWB5e",
  "key35": "5RJeuXut3wP2KKyx7uhKpKQkHMg2g1UmhCDdg26EyQQgVASScUFkpC3oQg7djE5dHGT2CdVv9Fdvg5cScG7scixt",
  "key36": "65CkChMQUKSTYDzn4U5oTqdQ6YWBwDucU66wpm4LcXiUskbAVHodaMLJvYCEqCFxFUvo968VSskpA9fJRpahZ72j",
  "key37": "4MELPnH5bozWw7uEt6k2LX3RwgJ81Jcb3gTWWAHDJmiDpLWU73P1AdKP2nX2M3FQB766sN24dTcbB5eQQ5nHBowU",
  "key38": "5PLg17BKPnngUtj3ybcdrcespLAsxdkk1FVDFhMbx6XEBLs7YycRXM2vdfxBzM2jaLUZeEpmb48Kwtp21qLVxcdV",
  "key39": "5g26ZVWzK3gcAap34Xjqb9MyMMd9sSrDHmvJRjm8MDRhGA3dD1oMSVoGhfUY8xAvntxb5V59qsVrfR2pLxTPw1jj",
  "key40": "5B1WNDQUhR2dmESuZPY1EmtRazWJPCitaksLuiYreXpHSfHLE2zUt5T4qbf2JuRg4fM8dTH77Aqzmy7XjGvceXNT",
  "key41": "38aSYkMvxKp4H8HwKUsKpSe5auLMPeTzHUw1QM7XZbMeWuAvnrTNDc1AVhCBrJQbVuoqgbtXTENgrYxwdSLGRTRK"
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
