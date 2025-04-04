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
    "3FZc9W44hUKc9cKmHsBW7YU6CgjYNYQgySvc2w1L4NB6t4CnXDx17ZTBEBjTpGBcsN7zYtQp4nBStqhtPgcVcNcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ta5D48maxDxvzF3YEwWFGphko1MgXUbeGBmUtnFsr4p1Kv7rZTrdEysgNNiyJa7x2vmJaSMsXRQWh5gcvrnbCCW",
  "key1": "2uC7Ye3x2oAL1CgWdePMmVYAmD2Q6RJmSTGWmByctaFdSczjVengJkfSoUUK5VzYjw2Ps65jYrkgd2xyEgx7SmeH",
  "key2": "2cq7XWahQnYpnWmgvLiNT6PGJiyqrpx72maXXZGSQ4ZHyTRPtfnwg7nG7FmbYbQVtrwxznnZZRe6ChKPtAhE6kjJ",
  "key3": "5weH6tukKWUEn8F5Gi22GBkkhLAJwhTJ1UjngMeAXLFXAoVUeiuFRjv3QMYWFyKkrzEg6MFgMzXpPaL1DkNf25Hb",
  "key4": "64sPK7RJMZnyuxubpYDwMRVXg67r6Woun4YRQ3AUTAC8ujevVhD3KSPy25PJ1DJ2zKDpdRVof3W6JybhVYLZEzEd",
  "key5": "meUwrw7z3qSLuKLv6gQxLRbZbpBHnRHYY7ZzoYLPhUQqX12Ayt7ufas83EMJ1vMTbLVWQpJFtqQTxuZg6QkcYyB",
  "key6": "5CeA5RAXFVGknbQB3XFQxLXSSwHBYFnsj827ir9MDMtahizdR2jioaANKAbD5YRHRNfdX7tDBqkjWFgUN9XzY1sN",
  "key7": "5wNshK4SphvU4rS1r622h2cJVZUu5dqt1dgE9VMVZtbiDsg7iAEbiRgSmCrSLnDACt5Xn993H8hiXiS98N33KFrv",
  "key8": "2cdEVZWu2ird8qCeVCnrDm4kFN9KXJ3vLmbqGhPktbPKu3VGrQrg4mcnRSoFL1q4RaYQGuqE1kRFp2GruhjppQhy",
  "key9": "56cL82iDj4q6Np59jdiwFZjWX1bPwQjddbwYLHBz9Dxd9eqQJEuk3K54Y941CSAgu6rnnEjh43GfwNremmBTPFuZ",
  "key10": "5dG22cqgshYkXhHAdPPFwzJWKnKnXSdE9hEP8BgZNhAin5TyNzAY9qQU4YGX7e5UASikmdNfcJRvgXSPH4JeTpHY",
  "key11": "4yuGe13E84hkUcy4ffRDAvYpRyKDFLwmc6pUwwwcUDeQo4G5fxNTTRCsZHukPzZERBcez2GRxFbdUFJ9rjQBRyxi",
  "key12": "uM9BFwPKvBdoGPtUpULQ1YhUKsXdrmPJePR429zqfQy9XKx57onhFSH1WEFEKVMF1TreZwDKMGuZKGNzFDK1CPq",
  "key13": "4CxbYgznRDpftR8uEqrd4KiGQi1UwzCzrQ1nhCcczHfFpTmwE7avSq76mbXJSQhnD5HeXTQTE5RGHzv1ApFpL3TQ",
  "key14": "4f3Dw4AV6187gGKnBv1CaP4tcTVVtzNgW7wsRXV1YeiaAnKXF7bBowvcwvHmP1dYbZqixoe5TJ7ppeKdU9vXxRFy",
  "key15": "4XCTCHVyvdtCh3hEBQN6LAhMMbZatgxjMCtyarz63c9afcLnYqSMeFN8hdSGwzQfugZDRU1DCc3grywVAUS7zPK8",
  "key16": "47JBBD53w7kMs3GChssoGxXwVHpkMaumuobSLPovDpfrSnr6fTSvcf3tFYdZVvRKYHkUnSX8Eh1mSSfY2EjTyYR5",
  "key17": "3691smtwf5GwF4PWnmp32oaj3FBeRyMW345UazQx9Cirz2q1Z7NER1VNjxQ9W7zKWqYq353GkHoscwuYfLaHX4j9",
  "key18": "3kwHHDFPPmPuEoU7Q9mUPC7CDa5WSNKGigbqoNbYwDcnkooFHM18qE2MsExZCmNMcHFfGSDZMWgGVcRjEUiWECm8",
  "key19": "fdHk9MF3zWfsKat9jjyxDdHmw1ADeC1F72zi49pGSkZNXtYHEoHS9PMEduKxHEavungf2BAmVp4BWV9zaP7ZK69",
  "key20": "2jynNGTxjNmKpDZoRVmwwKiTHgLhcfEYq31VMABbEhN8FTwrYo26ptAo8cK8xzRFLQcujmq1ZEpfSGy93wZaHHZ8",
  "key21": "3Pfo6SmZnURGVxxYCkmRvxns3fQaP1rRYrNVB4ehJoa8YeMkArkuHgR1V1HF1CcaMVazTeYMgUMoS9J2Dc1RoNQX",
  "key22": "5AAWzK1tqVzQM9ZSbz5t2dPLnYxCyzVu1rnN3fofPxVVtib9emkEzUfiYzE8iTLy8KPs9Qd96Ny8uDGTPzq5nGd4",
  "key23": "5BUMkREKT9oPFCBDYQ2VimorvZNqwGFSCHsmZykUuWUcZgvHHzBTKNf1FfMkAFYTNRRKzGQYLntq9zLnqPNYQsjp",
  "key24": "4z51ULx44det8ptCtt7UhKJ7L7T2NwMPWX18cEnJVU7sPRToDLJhCb7DLdRxAoAZ2d7rNNeS2Acn3z5a8subXbad",
  "key25": "4M4qKr3dLd2AKRgpVQeh1PagRpLJgCt9ShwCCJk3qv2krVr4iTDJcUej9TCbmU4RG7SNgPNagNBioYGvWCZUVu1",
  "key26": "3z2vwXeyusLtQ4zEkegrJM8PTXn4uKDF2VNVdhawFbsx6GBNNEPwQQ4qQpSmW7sHsbWW6gVymkJG3PHafPXKgVMC",
  "key27": "4GjyRLGgMQNnV1DJayN3naMjE7thS3G9uBbj47ucLba5UyFvN61vDvdSXrPxKEiS194Xq4bgoUXb6pZKgXpShJS9",
  "key28": "4xGSbWGugiHS2cLVWCFvHNUpHPmwP79q7NGwaZhNfTcUN5f86hWubVqELiAzUPojJcuFzGGh8xjypTDUCkL1iKUV",
  "key29": "3Ar32vVCmm6khxtfG5AHUwMLivCPPBaamYKeaX3Foivsr7QgsZxNRtH72r6WkzC6Yig8m4A3Uh5QxRHUmeKctztQ",
  "key30": "5BZZ3KbrsxWVmfvfhqE4d9iH392TKh9oC48pY39v71F8sdVbhhYHnWNH63AoYZLwRXHwpSFqnSFuvZSJTyYf7r8s",
  "key31": "4nSctyoSGqLkJyyxNP7km8DZEooLEmp4bwouNJtY4ow3qFtsyobKLqzcHKifVRu4H7duLuZG4yBqj4qahZsFmt7t",
  "key32": "4sVoCysSCeH2jjSLYxePf8KeD7ZMf7L9FKxpv21TLAfHzXiZAArj9Vpp7cXjBgnqBFJksKfJKhFzEsSrTzoZAFog",
  "key33": "5C4Bo5sEwQF4pLN3JRAXWPGXk9UPxQZQnTqGhCqjrQ7Zb8yv1Ap5zzvERdtyGpqz37nLCiVKHTyTf6YepQm27uUP",
  "key34": "5aJaATDLyqsXDyzY9kwMkhUHHSpodiTW84t59JG3QLmcsRmwBLMQwzqFJfZgeNZSrB2tkf6UfUWXjrH5P8oTheYB",
  "key35": "57GFQFMfGR1ktFZY9WB5CAezygv7u8xDQkF6jPyombkTyJ1f4QFK5NaLmvDDsu9zF2iE6s4MXYYnZmh7HHpeoGwh",
  "key36": "fDSZ5Htk8YNkuqJVHfdqRvXrP1UG7YLhPJWjHVdnXxsmCGd9wSLpm8LDgXaoKFSDXAuYgpuRCUHZCvPcYGcWoxU",
  "key37": "4DYYkGvYnDjmxRpkn9tx3aZ1gLxPcNbLFih4ixLs4yGqo3MRAsjXFnZ6wdtWcknF7D26QSrVqK5YM3JQ2qrGsxLp",
  "key38": "vbm65Yd2n39D5FzirWenvhH95gSPdSqSpxZCV4yY4ZbWtgnb5QcJg1gqWBRP8X3BWaTmfCrJSTqrjTGwpuDUrku",
  "key39": "39zYKFDE1dt44Z71rRJEVL5B1yHkxfPfM4Ez7t17Z6snpxGDX8u9WztTqengTEhoFi6Gsv9RCR6vbquG4SuDW4Dx",
  "key40": "4qoHo2qSpwxFwZHfwMmyVQ8x3SYMhV4eezrCKJ2Jyu2VdS7ib8j4PMBccMnGwwKTURR47ayiK9XWGJNqxuFrnp6f",
  "key41": "KFpYbQF2NHcAEzsHJVEGASurmnSbWnJnTr5ftCJ7rvu56tizhdzMJXqSw35fsgU24dKqqUEXs4miixSyZFm8w9T",
  "key42": "3STcrfaaqUweamZUrGF23fTWnTwvaUBk89RVckNmY7DhD3TDxnXUxUxWg8mNHegrpeuGd8VTQwYsmkvqrWNdSDm2",
  "key43": "NFjhwVpCeuLEGstNavL9DXwxvm4MGJhG3mTYBmCzxxV4C7A352GrKxqwtckLX8z7MR8fL9UVJoSveb8p5HxBgzm",
  "key44": "5er9NRTCjUKTUaniYNfeqBc9mvhv9SNkdtBMQuFfrN2iEgDdEff9P8G6xgwXqJo5y1rSEMYFDQqqHdDaLYs9f4rS",
  "key45": "3f4ebBpqf38FaHQ5fEom1S43o3TXVQMgvNbfPF4SNkCx5TxzoJsjcXZqiDriC6DY9QVjzm65JzdxHgMa5wkUyry8",
  "key46": "4D4LC9fb5iGHn8k66inEXXgAD3qrweLuCkMBj9NsLupiKdccepzrFjtiBL1agVwd6z8QUkgCkCV3uugW2DyJcW8Z",
  "key47": "5xQ6hxxaM172CfHowYebX1373FXRdkH7a2XcY5vMNjQgXSVLHdUWw7VkJAU39ZvF8pVmctWsAhPLFnPJh8NLPEtq"
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
