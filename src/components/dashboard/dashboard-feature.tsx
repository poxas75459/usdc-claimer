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
    "5Y5YtYtgBBZ9Si4WAVPsvuuLCeueQ24eX4nu5evttWjYyay7yrtYNhgXHRrCDTuUopJxiwLyyFm6N3asCrF6ivfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H9ntEgPijzRmQDe4Pb9GNoAM8wDHQV3b2yFZNLdTByyncZNaYVZEqcRWJhh97BwTo92DmZPY2XLcobUiWY9pJQb",
  "key1": "2YzBDzn3YEtCYHxNC2w5GR6hNRm1uFCf7aQV3pFVyTMuEFD7KSqDiE62WNkFSFm78K4bef7SY3WCT9YT5gpr3n7U",
  "key2": "5C5ut1uBWLbf9eoaDKkR5hNsmBw7dibJabJiqh65uWhwe1S3CwAASe9d5aoTGpGJS1hg4JUKTGdE1FPrpyujJFQz",
  "key3": "2qEo9Qd6KgshCivtLJ2K6o35eQwqbjKrJyCzgQA9G1be4C9xaDfsAq3yCr1GyHNugrAW3AZbkgJ3942BNb1EJPVb",
  "key4": "TAYksdi7nS6qn4eS9eWqicC62HhXGQfHnQzbhV8eRGAreBDdWMZVFFSV3Y14FMovVB2ypsSMU7VpQMfUyj7BjaP",
  "key5": "2ME7XXa1RTeGqAh4DwAuWY6Gs77ADoCxsXonzEkYfyFj45H83MrAgEcczTsyZxv5iLk1AeBMQ4wMvnbwgKKQoEw4",
  "key6": "2XMWcS3vPfaj6LgHv5Gb1USd1JarsZxsuRqXBzDrEjDJPKxfVvrJ2wu6zrXUxRMggD6uNuKC9PSQMidndxsq8H1y",
  "key7": "4VpzrYMVqVYiZJTUGJnBj92NBK6fauxX6hVLNZyCUxfutjjAphF69tjr1KNLvaMRjLYvfE5eJMVrLV1U9cuWRdpa",
  "key8": "4pjVN9suJLhbD41pyzeFqg2sRVZUrk2WgWW3MTckuJ8gDEFSbTBvMbSzXZDnnAaTyXc97DnLJb48mApH97gxS3PB",
  "key9": "33oUZUM357mVJD4T7mMnxJCZn3Fwm1c1ExB3195J4kwcS7ZAkmy5ErEKGhsYHBdCiY4yxzA36HVj2rHMRbQQFf7w",
  "key10": "2geekD9bjRh7sEGCcL37r5vJPWyTXbZMBDzcC5rridmFBzRrAqbpN58ndPNmdpqqkrmkhLMnELBCNdEcDZNFrkqP",
  "key11": "4MEdiMJHjHdRvyMzpkvyhKQt2ESYkJMMxzEi3hPM7vD5p21veEqERoh2grcG31U7chcku7xHFWQez6wA7J1Guvcp",
  "key12": "2Sc6g7BMAqLWWRtzA8Tj7u32zPnjc3Uqw161jYF9RhfdxExPKBAYWkS4abL5to7kbcoGaSa1JypQwBX4YvbtW6KC",
  "key13": "B247Ng7QL2N4UHfm9SVorYbsyz3Maf2Zrtexv6uVz3ivCYUPQd3WGBQQdKyfxMuLU21uwST276rVUffso512phY",
  "key14": "5f7HbEMG1Lnigq8MJG3Ldcb9qrHM47TCJAqjdVMEwWr5iP4eUgfC6M9re9FafSB17bKuELSmBbbFmWsJoNUkbTzc",
  "key15": "4Bm4j74a5x27xd84QYJbKCAzvSBFY6ExtoqoGpkConUeFmEbk7SVc5xyzF5Qaxh7Af1uA9dKnMpoY8WTLMNPmKxq",
  "key16": "59K5h49PYQgBtZxQmKANLnZ8bHU1SX5xJuCNk9gcEKeFiXq8VGbsBscuQBx5DsBWQtKvpdgPt9U5yYVoCuWEhckX",
  "key17": "XU1E1ei433awHfJSBgLdQt3iSwd5QqaUQP94k5J4cJf2mU2C5FnQWnTQ6VBCGRUTxVUE6tBVZvi7157k7E461JP",
  "key18": "2Rh7AKV7XakCJBrY3kmMAiAu6EcheQXi3o8c4o9CuNuJEM3p6dtms8KnfBqcVrNhQJDawdrC9AJfzWBVrRR84sTU",
  "key19": "2NydwovbGZN919bcKfvSC9TL1Mjtew2Gt8LRUW2hrnJtNbtixTYsjSVTwHotLMJv9B5jCLGG32xkdQ3ffBNYyABf",
  "key20": "4AheNby2pJuBRP4z1cVrv45jTDMXvxPppuxT6qNL5z3t7BLJLaQvr7Jyg6RsqUnunr4gDeMnFoCyJF63oRrjUXoL",
  "key21": "5NSxQRfQPpRWPWZB7dcb9uTZQxuP43q2pafGtp1KSsMzCpnzKqXDFqbhWjr4bFHc9ianb223Gp45ErLQvg2AoMti",
  "key22": "LmqzPV1ZFGJJJTAZcT2crZ1PxUsa5XMAc8d5gqEAVajBi3711VkeE7GmG7QUvh3cvawwqMaTZXVLW9EQH4fSf9t",
  "key23": "3oY8Z9ExV29oYdYVWweVJ5Py8cupyiYamxESc3gvBv3r4e4GN4bxEnYz8JMhL95JhgaC3fQJAeFbzuMTJTaw74Me",
  "key24": "SzLkf6zshNGiRFyLjKPhBKTLxZwfoQ8aLbZBgg96GJhsd7Cj8iCVe6qoh4P8wgHYPLuK4GftshJtypKDHqZ99GV",
  "key25": "5Girdt3dekZyCHjxSgQRc3uy6h6Ev3fmEA4ityRqUbsTLSGN9S3XLwJsvWRcdEYzPWNUCPzDRbknVDiNCJMBa8yh",
  "key26": "4b4ntR9FWT1p87yeashjcGbbowwxP5mRESiJ9j8KixczRTPxUTrqS3ASBu4gyWQn7ZA9ntwUPpu4u9oLWpn5kRTR",
  "key27": "39bDfF5JrV88Fym3ce9xm1mB67gvX5THwPoBGckvN2dCvtJ3ZePrRbzgA828yLLcoExW8oarTugzdJuGAvfBoNx8",
  "key28": "DGKJv8RVv7kpjmdY3A5grDwUDUWttCZejEqE4BMqEfgjr7uFUDuLH4qP9gsd8vC5D2DPPScq61YR29vmKGCvVXS",
  "key29": "2TybiHeEDuutJNuuZoCLAvCzAPskJtEASAtHq9MiHNhEYRPD5PtpPVSePrnqft9bBDfXXpYp8n8ih2WsoRfxC2zy",
  "key30": "37s1nVNssFLYD57HKJQas4CxWmDyype1kxs7cauPiv844Comz5vtXMxWfMwSWoyx8iHfWnAsfnmovCfLwQZ3YVZ5",
  "key31": "525iGZuGeRzSCVVmHT2x37bwxstuD9m5j8fAkRBQ7BZQ79xjcoxE4muQ6NoRHYBFzPu1Jsv6xLeeaErRHbpfpTkF",
  "key32": "2YZPbDXb7v4CQqnSVqhQauBVqwdEVPCxeq7a9Hhw7YEF3VwS8s2LH62fhnrWJzoXuVT4npZrsf8rShj4FMp2daXG",
  "key33": "3AZuP2CJU3rRVTMProqqH2z27EoWuyEKCm1dZBY7YUFLrm5eojq51b35LuPeRXYU9f68upfL2BFH95LUVcsiVJLV",
  "key34": "5fmkoDyF7TApCzUK83ERsRVccbMErvb8XDSSncvWYMCKbtFmmZ85DEbYriAmA24qzLjDekrZgRKwz3YxFPZiRtig",
  "key35": "2dJB6W4mGQNqrBU1QtiPgAz5TeTvqhTBPmZHW1srMofCDiVkBtZm8txJe9aGh9qdNH6ukW1wmN2YmgtLjB8UCk7g",
  "key36": "4M1zdRmfboVgnF3mz3giKRNyYbCK6Fu67zcK7zVzYFn5LNtjvXPeJXNdjDZ7xupRTf6sMstq5grJj4QeotELZ6zz",
  "key37": "44BLFCSK6ypcfY4gbFW6MXzvP58iGDWgk8ckGs2XYGJ7FRd214YwBsBudYKUdmmwpa1mw5WHfb6YxaGcv6cJjtNu",
  "key38": "XfsZfdiQJYLsbVVjhKYdwcayogjdsLgEzbHqoDoiDvtry5kzF9pjepKNc3fyp6x5KF1V27tuBzMhHSfhez24oAk",
  "key39": "4bEqDFWm24mJDFkokyQAS7hJz1ohBwSp9Bhxq1vKMn3axoPLeXo8N4bebYYMT71Jdac2ZF8oN5UscXUcuvj1BKDU",
  "key40": "57Z4z5ceTQfMoPxpjX5ozDfCVpufWr2xUgrgyxi7sP8pNFgrcr6EnFeHdHpimw99mimXc7Nkja1wtAceP6QrnxeW",
  "key41": "4gZ7T3vRAiJf3Eob5hns5FAtb6CRGjmBdwu7pTYQAKJBLYvLiyvq7aCx5Si7YrqNQT1on9kDV7T6vyBdPKEtx8n3",
  "key42": "3moPW8Jj3ppdhpRSCUy6AiN8RvVbVtkwhAouqAVXvT9f1weRachHhwCYe58VVots3JGc1MzLGGsauKbgHyroKcFV",
  "key43": "2Pfyd1ixSsjGGmUpfPGFyZMxTYefLAur7CBxXbA4Q6MToLzpV2tTcR1tp1PQN8bjGRf63WCyZrK6GrRqmSQZiBU7",
  "key44": "3NUMBqRJfkfMonvwMBZCEMgWTUQnFNSaybzSxjFKg33Gb1qVmUY2csZp3nNfuh8PKvMUehLxDjxMXLjCXRtPaZwD",
  "key45": "4v1tnMCRpxXTo63gusDW8KL2RPz5883X2dFgSCMtbjqrNUMMPU2b92QXhHBe6p6cY1DkJKGAqbM9vUumufrnB96D",
  "key46": "3RosbFYmooSpiN66x9UMp3ZFsaGft78Aaoh4hAPPCbGQWjEeWjbPUzLLdywy292VDoHUw2eUPk7hUs3TF6TqmBbQ",
  "key47": "3X99Ki1HL7eSe718397VshADX9FxfLdC99cxuPrNP91MHauVx2QuK54bZNkKQaWbQkN2yxQqxFeA3aqWdhiuSHXf"
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
