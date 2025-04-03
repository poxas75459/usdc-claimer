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
    "4MbfKg2Y4r3WkLEWqEkQAPQmNwGNjav7QEsNAry6EQuHbDkqxTuNZbwJR3Y455b6oUMjC5cEy2jP5YA4bsrmhece"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wDtoUXgW3A6EFt1Xooc1Rfxd1NwXVjVhDBJboRJSpeCndZ8bvF1Q33NDRBfirmZ9fHQ1Z2Cs9n2au892EyHFQWs",
  "key1": "665Qxtsji42NZcZESMTZMAs3igZVas2DwPKDsLLbzRaimS7bDYCeQks9RkNYq3puWYV9F294mGYpu7zijpgBUAj6",
  "key2": "3sR7JKLKTBQyLfUGvJMG2zPRPNHiMMkGxUwmxjfs9xEwQFstXoa3ok1wes68uTakms3F31dLiEhFLZUZvVMYJ9tv",
  "key3": "3hxJMYei94db8herGGvk3tT54tucGVCtzciKWnV3ZDfxdZJQNXtATD84BPWVp9VBZr7FMUBfTJFS9RmckRDR7iTR",
  "key4": "47vmszsQows2bwdArmGkzp7wxcSvnYQNwt1hbmQnPghSwubWKJJDohc7R2xV3n6H7CMWaRjK75bSmwfCSnjqTPiZ",
  "key5": "4D8y8gD7LDBnTHkR8UoSaJiQQk6Y5srqLcmBmspdxyPwb2aiNnprvysPJYqTAmPHFueCpuF4uMwFPx8g4BpFCZE2",
  "key6": "2vYG7GcsUsDwZ2VPPMfXEE5MUNF59dnBTXGqVkhg5h4vAYMMkfyUL3wz7SNFJHNkS4EdCk3WtAJ9mCgbHmR4E2V6",
  "key7": "RKguktFLa6mpiTNaufDkxbaJWqZdXgnRoSovRvvvAuZ5XB4qKg9SkfARVfjG7oKdKyNL3b8PKjBpPzApZRio4WF",
  "key8": "535oY6gXzfZSz2jdVMmihMJEW5aBvuPqxqtXAq9Gjh9nFmNJLd6gBz7WYHxLJmjAc2ZKs9bS1dGwNmuBvJqAP4Qv",
  "key9": "2aASXwdSHrY9UQmKhpsKMPdmSZF6YCnzryq38m567Wpd5tvTwADwUEN6SgeTHQo2r7hgKYdYv6ggXVbV98f75dwy",
  "key10": "4pWYqmyhQnRWH78sipS8edLGkshCkiV2KVjpNtSfAJzjyJxXAaz6YUYKntZJG3EQD7Nyhkm4EnZwmDLLABZee9Er",
  "key11": "HJHRc1rGDfVueqisLVATXLN6vUHe6xMT7zEomWsrvDMMHNQdr793AdDQVpivQ6zTgxLTb72mJSYr3HLwUHjN8Rn",
  "key12": "2FpwPsyzRYzkrbAHxiVY94qRPGbKnmht9Yc3w8tyTf228pFR4QzfKSFUd4mJnLBF1TQW1xbxod7DbXpXnYxzC6Tt",
  "key13": "4C5RyyuRHcK2jqcuuuM3F8NA8LWLwYBL1cEfi48ehk3wFrMRW7FxDgG2kdyPsC6Rjo4CKDb4e4fcQqt271EvPhmu",
  "key14": "5W3f8BktTSMjZu67QZjduRxk6E2tqCEBxeqEoSZPHRkYyLkwNkoxFNnph5wWG5mQHodk4MG3NnkV66S6faCegHnb",
  "key15": "64jn1tkCwNvP2y3hX67Es8Qst2YdsFmAXbFejBVZCJr7drk62UCxmyuF45uYMxgfZVniwBs1GmBjiZ9v5VjX41RN",
  "key16": "2jbKA7AttfqcJR9kxnvqP45YEcD3cNUiG1QYcypFxmkxBnZv6YJNhKr674BJAb9uGNLpK4q577oLRjcGwteLdu8y",
  "key17": "3GqrfPEj2SvejRuxLRq9qJw4qMhwfKfZTsCXiBMcDpMgeAQwU7yNWwyZjnBVN8Ru9gw11VX77Ygd6bUo7QTREgkg",
  "key18": "3XfQM2kyaPjqLz5kRUxFyatiawuPAdPtc3DDncn4P5Qj1XFPYH3xhGtWUeTrycR16HBFiw4s8c8vs6smSiT7Duep",
  "key19": "57qxzwU54HcW6nCUcxFMYBZahg8XB7wvKnuH45A8bRtQGkuNGAjXBMVwANxCbZsmhafnWwJRzFdaQzRphmruYR8r",
  "key20": "28reevR2vBwUab2t7QGFaJwHW6baFrRneqhvfYxUrpPBEJGsdZyCSMhETuGLXs8FQ32FHE2NZd9R3Y1VmeifrKmd",
  "key21": "4Ai3nkHxqj6npo75cLimCiez71NNyusBNEwGRi5kXAPJXZZ6nhPzBjqF12r559sDgPirRjv7oLbmyCeNgx7sq6D7",
  "key22": "5qV7gRh6RJ6xids6skA3w33cWfhkaJeGP7eermE4i3d5zday5eS7XpckuV6Lx8cVA7v8FMwSPdMnTj1noJj4zrQd",
  "key23": "SBugDx3rQwL5FzEtxgt1JME4Rwa2kpQnp4aHaRxXN5zaofxnedBGE8fkzNFip8gesixZDXT6gVBhHoNmX5DRrp1",
  "key24": "5HL1DcgifT7xFDYbDuf2Tn2YEEHbwW57bn1cf1WSnYwjCwj9ktWZWWYazQmLr7Wj4YgQpDLHxMZtigmqtqDvNKDA",
  "key25": "2gJq5Wn5jEkya6hGrhxES42DzzZBqvmEfpcbWSG2nWq7UQZzwBYnBs2bgjN9T3JxagC2AYZPzWzKSeMMQzxY9RJT",
  "key26": "5D4LS8yNHzVdq3LnuoqVAvZbVpLNvF8Mpn8779gsgN5vtRKWPaySmR7df6PSQrGcumegNGiSAM3yQLuJ4avxS7NA",
  "key27": "KaVQGug8eLpgccURrpBNz25NuDsQ9dADwKNsphZdBvbby1G8mkSFxTseMmpSDfF4zz2U1UvNq2EDoQ3j6dR2DV4",
  "key28": "2mtdyMwZmrEv5ed5TmL2PXS2D4nVX62uEngWNE65RK5fyZarvWRADST3UvHXJCPtpqAgmmxfYuAeiPB1DorWNV9i",
  "key29": "43u6ZG2pUbhCF8humR1YLqeT5NCNt7rB57cGM2awR3s9MvLqVMZgCzgkfAF3Eu3tH7nCBBx2pu5h8uexmLjce8qp",
  "key30": "4pVAHxENjf6LmvA2YtkMtfdxKwKQj7UfbKgQMwB6JTEzNDJgPepPtfGPHUJMASXgHoUCctFJ2kHS9nxByJteqV4z",
  "key31": "5Jri1pPtSbJRYpek9n5s9d6xAoQt3sPyQ4cPzUo2meUmr7rTGJfjWYoYiwcDYXPKj3Y4NGvQvDaidiqMUua6VVNw",
  "key32": "UdCaVGcZFtUCcHZdJh9qVP2RWLWMo6CbJpLtp8QtFhrjphmw5vpGSA4EUe7MSsXUd8aBdJAbPFM4DtvRQu5oSZX",
  "key33": "22RnR5bY9GdAAy4E1d5BdA6dCbdUHVaU4yG9UnR6s2BaKqAsqwiECEDHjbe81yndY2v5R9rVT64tb7xYbRicKAnw",
  "key34": "5VPoXrNfBz1whxWCHnLJ2wj72q9FmvnwnU3WnGhCaXkwwt57CkC6EagEyyRkfDf3hgfSfisv11My5mQjiz83Tv5x",
  "key35": "3gPpCdqnctLqY95foMWivrYze9dnQsruaGK3JHkd7Ujkwwb5cktodGfXELcki2aPjwCx9ubBKzaU4p8gYu6SSyEf",
  "key36": "3qpsj9pqjyUN7kMUyebKZfG1jEJsgnMF6t6Tp6TGbdLygBerQTPqaMrQ9HKqqfLvveYhshhMMyhBuyi1mUFeKDKu",
  "key37": "4AgY6LsnhoEVrEnngvXntq2gFeAVnQCkAJrG5iE1y81K857GDeHUiE9w7n2PTX6tHvrpSxbvuz21bwnueYLbnyGK",
  "key38": "29Yb8p8spvCBJCEofgS99uNSAqqe5q95iNQSKVeXHuvpjGFWAypChW83LHhkbsz8fkRiEbXqZ9NBSTcewzbFkcmD",
  "key39": "5iwp4stU8nVrKzNFjzGhd2B75XZ9W8mEFLdwUBXrT1NytFcSuGPm9GH64xVtFXumvi1h8FuhQFq1SgdpMfkhdJcC",
  "key40": "34w9uCx7pMM3EX4gRBMVwPyYkEu1SU3MyJqfktAAXkvWjGDDwBLrh3iPqpK721MuyNCREvTdnxpr96jzmdirsBmu"
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
