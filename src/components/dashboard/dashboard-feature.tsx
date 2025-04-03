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
    "57wEkevhgJ3rCSy1vEcAy1wNnYLf8kReQKesAqrVz6mQBNJxsJBSKDW2aeQoMhXgo3oQjU2Nj9wPPSMGGK3KpuHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xw4enefUMhNxhMJqPD8PMv5MgnJtbLdDT2cm5mUmybX52Xi1sVkZMMCmr8faQcdpbhsnNE7Yk42Fk625E1Zr3TK",
  "key1": "4JmYLdrs9H3E5gVuYtSGVNzPdTNYbKc5r81jHdxc4RGDvmGM5NQBH6MmTNmyTpwuhLxbzZkEBEi2TjMcNu4DkK9z",
  "key2": "4seudTGAUERSMgthir7GLiwXFA38yjvpiuLDkJkawxW4NLs1a7RxxEUC5nuXYJJgMbnoyNXCdc6T8R92CNevspfx",
  "key3": "4cjNfkFvEbinSboxgKKrKrYK348CYwUjRi3SgatbbmfimZJuQMW96hvPfTGEmCd6gpqhDDxPBuzPWtqX1TqEFgWm",
  "key4": "3HASWwDaa3TgYQq4jL5DT9brk1VEzPaG8b5hNbWgdG9zENG5Q894gSt6kg51RZMmS5HBVqqiQQiYKf6DRdXyQEKr",
  "key5": "5rrcBS6GFsZJzXmteA2RNTUFXQNf7bUkEH9xNY4F4nAAef2KjKLZUxGcX2RtxjZSmXmDBQfWi7ztUCaW7w1zoHP4",
  "key6": "3VhWvK5Px6NzCNnULVG6edAizTMJ4aa1VbgDHkSi2s8UyES8tuEgLpsLA716NYwvr23oMyK8TbpXQs1rfbYwbNqv",
  "key7": "3kLqUs2Jqyhj81rNiFfgXUKJyRcJw8kApeqG72d2b3yxVbyjJRiELzKWjSGYuHMZ9cedQPyS85Mp81BjSgnwAQnB",
  "key8": "jgcdHK5CDoF2kQUjsPdNf434qu3gnQvLxtaR7M7UJ7tKm86EDpdQQyGrz7NPwYiyVHM2fRxS2WFUVJJ92PcKiyw",
  "key9": "5DBZfFUX16xrCj6tXmGaZ6TDdd9c6Muy8rAPWYKhoojCV8Wtzv3X4NWxUZBSey75bqALdJXsgvoxmf6JKdyGP7FT",
  "key10": "56uvKPHS3egqwpSiqxXevAjTTPfvk1ZwXL83FixG3XEMWVPwS25S4z8va2zQ9qzYFZ6WLm8PpHReejDAewTPuqvc",
  "key11": "2bQXFy21W7eccfGckR8i9J1omMvtnJRhoPqiPEvnb1WiwzdgjGcQVC5sUPKJR8Ygs2spskUCVvQXm1E8sSMjABEb",
  "key12": "kg4nJJ1jPtLRVDWzBMkPRFd6W3pCyHEBRdxqnPoVj8AtGBcmm6JCge4Xf3iF3znTn2WaLHbkwzZoYMbdeY7crcr",
  "key13": "54bxmkNtmi1ZA8wapWkFN6e9RT5ipCQqk3Nzq9p4o1t4mYqGXwo2GrYWYoRRBLdheznTDGqrdEPham4FfpZg93Se",
  "key14": "54gKAJYvNDGFPnaziW8fzEgPkNGiQ1dPcBD31UsVEP4AANEXSXncJu5g9SyjQ72evzJ6cs4mrNGcYdjgRJn4naYp",
  "key15": "5aS6rSxSPxgTiLbK2hKzEp7XVVMSupAU1jMUjQKsHjiF8Q4K8mzQez3XqiNKSeLDPRZDe8S3wM5VLjTw111wTBvP",
  "key16": "61Cv8XfDsU4k2L1hMw6h7yTwVuSAFqP5BM6VB6umjL3yzYYaEoshxFQePkA1672MvYfvUDpUH6Vxd5moivCcsUi6",
  "key17": "9y2JQ2SdyLnz9DXKExfWENQVAHexWv4Qyi13UPdHBUbqhPp7kiCxazk35DNxBX3aLK98dx99nioLxvfPfd5WpaW",
  "key18": "4XvSDhvvLgovUw2s4xzyztzXtXbs4mrQsMUK21sxdAnYa84jDv8hJ1YgbhB818gAhgokYNjATfmBrXegZYu33rVG",
  "key19": "454aUqjmQg3hg5txR7jTj8rKN268aPAHVHzqr4L4ntSg8MiKvUZeyumvowL7f84oufVqiWo5NHNS8SAVet6zn5n9",
  "key20": "5TJjfbx6hEHRYx5nry6epvWt4VdMDH72bfR4qC1hXSk7nCNbX7nvdvRfU4xNfc7WhZ4oE2RPuRVVium5VAhr93En",
  "key21": "CMV71VEifXhxrG85oipqjJfjsyUrMHrxavBoRV9NkeGb25aGLYrXcdzNqgyaJbugYX2EnXPP4vCLGtkDAorEgft",
  "key22": "2v6qaPsyehccQuVcQbVXy5q7TM92ZmCHWiQF5pkfjPtkQr32TpJGmK9spRK6MZNRnJD27XidWej4HfhjaqUi1EYo",
  "key23": "4WTmmyLzhijEaY7RnwNFjf7GLenB4R83Y7UkwbX43qUL2Nx13XqC1dMZ8AmPMU9jkMnBLYNvhzBBXrN8vX3u75na",
  "key24": "5o8gpwJ58tNuETyZUnHjEfruAzLuzm4zfpcVKnMmbBDhj35mwACDqb7By289n7XVatkcTLZL31VcD8CzGTe2iwT4",
  "key25": "2HVExpwaBfEoPbEQpP6HMueimCK4wURdkmEFfFftcKMycn1nPwCX5ocJZPGZ2KeJrcDeFiJhvH3nqDFhzinL4cVV",
  "key26": "4jNriSodCMd1XqCn6FEhkjwZXHK1H1ooXxHY66NiS1SN6rRTf8ahejRbSVH3r9LxNMvcD96sTBgbPuYGZHSDLqy3",
  "key27": "QMhALU1wf5seBZ4U3FL3Qi9w1rPKqYnGhjQR2d2KLBXetVyHtRT1irDp8dQqUncYiHf1TZy5WT8bpg8dew1gSdJ",
  "key28": "2yAc2ztVkmbFFLeMAdqRprfGesigKa2ghoaKASAPEuhVLyw1y7KuuS6cgcpBEN1413HfaPNdivBBukLpaJNgmCFP",
  "key29": "4gB5Y5XG18JiHXEHNz5D5a7sDEnkxtqzhTwhNAJdXS1pWtbdekzAbfVhjcYN7CeQADSz4Uf2V7KQyyt2oTg3VLjK",
  "key30": "2f6AEU11NG5pgwic2iKDfbe4rkBX85Qa6wcVHdo8MDvjczsF2u51hqFFbBo37U2viDeurbQ59rv39Qbr95rbkbAP",
  "key31": "2uzkohxbGHMebBNJ79EMtVmgKbmn9QAZKJKqY6bgMBzgCZkNwCPWxoJwSBVacDinNFpbVtiJohuJsdtudbnD7zaj",
  "key32": "3qCeeAygfXL4cvcvQugyFZodzfLcWRBuyXZrhGsdhS2PmwyPjGqhBgCrH74xHaVEp44NCCYksA9eq1yQ9AvQjruD",
  "key33": "3mM3ZzUZGQCCHbfSesja8YvjQdTerQhttovXSFCD9toS6urR9ouH8Ygcc7sqYi57E8YaDboDxddniNq1vWMr57ND",
  "key34": "GeDvdXrJNsUugmnjUtgD4w4SMiCHvnFc2XaozJQqMC6MGA67MWxrnX2ZcXCE1iDNhvmm3wNhcXnqmAgsKfzcrVn",
  "key35": "2GK5h5Je8t8r9hSUtPaszSojv2ToijexYbs3KePQCg3Md7ACBN2ZxL5CYZUhssGjmmMuRYCegs1quUXn6H7RL7rq",
  "key36": "xJaTU2U2khXcopimEEcNwbYZEGPiCwCHwnP43UAu4GTUTNq3K6iaFvuFtkEbmVbnjUQy1fDDj6jZ5vsdTvfrsDZ",
  "key37": "KsG3PjVmSAY8Bg8neAPECcM6BGL9VtfdtgCVFNjfcvDKjxxZvgqEwSBGevyVnaSMpgZ5vs4PeWxPmJDucb5n4mE",
  "key38": "4m2xsyqXfhZJYVk7pX82CJnxopo4xBRFF58YYUk5koCLvPxigqR4zNvpTBdQuJGYY3L8V5jgs7WZnvmWv6KHVTLn",
  "key39": "2HZQFs2oUvZFrkrFDb8A6EfKpLn7JBkMC45mhjowmCmkMnyWmrcEfnLVPkTRKVEERzTA76Ddgik1tTXK5ojTo8Pd",
  "key40": "3iyK725nEuFVpgsc9Bp5C4E8KfN7zPuvNoUPewBzXaYnrgvegSXDg1QPjeS6bBrPVN7yDL3zCrQrjmXgp6THrtjT",
  "key41": "3e8eBue4WKiUgPVF8jMdncDhgJT2N2RdKru37EQNZRrtM76L5MQBfgbvMbtWZXV2XMz1eFjvuG5nGkrfnQ2F5CvC",
  "key42": "ev4b9NkpsrzHtx2UMUFmBfSayMcDM4Pfqt17vqRsQRfMb7jSZnxwYpQoeyADSEfgqGAtRnY1M9wahH6ziAYBV1y",
  "key43": "5jB6Trgr8c9dmcX45vk9fDMkNyKTMknwcEhJeHqhPADixeeyAon78Je8jvggKEY6Z2sWQpKPDw2wF3HUY4ohB9A7",
  "key44": "2atRqrwFoMQ8xSYnunPRCYAQdNZVNJjuNwidjDr6zCAxuBJ8mb6CR2v8J4NDwMTzH9Z1GkJ7xPyJU3hdyevwwKxT",
  "key45": "4Adp7MmS1YYwdfTJpyiqVX53ir2Vyr3GtXC92pNbHLzdZWqCfrDyH7DooCAqHymTB4iLivj2fZhk46ZYpGmnhbiL",
  "key46": "5e1MEwYQRCNz3isRvWMeQdBF4Mm476UyEg7KmZNpFN1dA5aCeND954XAAd8x5AiFMvzfWSzqCmoKSk29ma8Y9upY",
  "key47": "FVd4fMMJEK2u61bCiSwqaZuoQ9P3yAfoE3qx2WDsQVxCcRAM2jazAi8D9po1cWFJV3JVeMkdJVnQ8Gt6AKnPwL2",
  "key48": "54mJnszsMGByBWgPLvLFnyPdHfXBjNhrQ6mA1PCJe5Vowcvtx6SxdwdBR8JGXtJjcXGRmhREu7EPexMed8g6H3PE",
  "key49": "3ZBTyuRZdtZVkzm3AsUYJt5vJZXdbEdJCM3kn88syi5fTNCR1rmnPmFt5d2ub7cvywzbzbZ3RRzn6twmGaaBr49C"
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
