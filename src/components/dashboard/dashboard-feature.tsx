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
    "5htoQx2hr9RtKSQuavfqZo3ARTkoBWCbZLRQeax4BxYEyLe8wwYfH5Y3tnrvRQv1UvtMGrdJXZmxhmCmFmx9reqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c4eCFD6cARJ8YkmRz6b8aQvCgToWRUXkXxAVEAbLmUY1vW8Q2JbyWebR8E9kyEEHea8bsxCSXqkEc7uzsF1zbRV",
  "key1": "254LxnryGvZQvL1wGpJyxc5qdbBcmoNXboMUcknyBBou79F1Nod2pmRcAtsGD4LHuCntbq6YiWUhx1azKGqHJfrG",
  "key2": "57wNVRdbdAhR6JS4oBATJoN6p588foPWYusFLd7BLbTeqbYSMcYn2pGMmVJk5bRK6BYKz8kiLVSWBorxqzHCEZFM",
  "key3": "3UZFyTPqEzojXojQnjiYd4bnRkDtWQiygY9xVCkNrL3qKbPvcxjjc18GUaxFopGcE8qBffetuK8bGKH2BditPVQa",
  "key4": "24xkpZAGtgqT3zoJqfXdm6JnVAhqLRugnqUaWkm9okLxyQtaBajQ9A3xcMa4eczVGrdDq2btrmpwsrSEb7vYUeow",
  "key5": "3TKK1NRXS8HPXAorhfYbAHxSVDCrW4UQAmEoaAv4YPCPuv7Qe9Ny15F1tBchurgbjr2oJHtGrbmk8a1ar5Eu9G9P",
  "key6": "3tqoLBuHHQxSgN5P4yv2AHeGmRX3tkFSkYzPNDVQBuWvFzneY6zKPKsxJfw7wYPem5b7hbBUy31NWoeic3j3Wosq",
  "key7": "2S3uwzghFXqcLs9QKYT45xukq3zK4aMNpfwFRbm1vwm9Lag4kUHoiNRaQSUJmzJEakv71SnW91PWbFhDnbQjxcqK",
  "key8": "5xjtXx5t2J2SCNoteUcY4u6JprRQue29wWkrURrTJse7q52Bt3j9iZi6WcUNY6QsYn7yLmnu4L4yVygqvWRj1Xnk",
  "key9": "5prj973XRoQHAx9XxnqbZ2DdYXBMBqGKzb3dVEJoCsoVE7LmyHX72s6KLNrCiZmEHqSjegesgNqvYhsNkdSVAcuy",
  "key10": "4drRpCCSMLgzybFDT9xprPdcesyVEF3x7mdY39GkFdev9zSDTCnWMmZ47KeWw58yCMD25cGdYUL2AzZUXHJJcQL6",
  "key11": "4PQ1jxhxb4vKodXLsHHsmBo7aYHwfRpX1qoX2U2zU8kVGUfnqtNrnHUr5SGZviSUJskSngMupywfpnwpB797RJvz",
  "key12": "559GjBrTgzj9WD4n8dAfKhVRC76CiHy4ByFxeUzSMvRmRHrxVJTnpWWTZgfM5B1cWkrCNd9C2XL7TagJVQVfrYdY",
  "key13": "43JHjmzM7nmr4ihET5esdxCSZR7QK5H314kjhEK2QCAaSHYx7aeKMMgnpXcFFZXiAu78ZNmLW6fxvMY53hk36HzJ",
  "key14": "3whBAD9c4pXpGvem4s4eQ2d3x88Y4KnY8pU4cFHgvzWnnc5TELoABK5pkrkpWTRc9ZXo8GCQApL6ModGNXQ1xRF5",
  "key15": "35a2VPGYjRAGHGpaNTKYxUemx4znAK6MaHhVQjAW4Nm7xqxuHtZfL8h8FTNtZF2Tcd1T31TUkdFWNr8Uz3syCEnA",
  "key16": "2eeqDweaXPkX6RHMS6nXKep5afSRJKLWXbjcEW3ShrUB8EsCRgAA37h5ddgKokmbtfuTuyEv4r1MgQySQ6ECiXKD",
  "key17": "5LPRGxrQnQwnWt6Z3B7516Gxa9Du7x3ynDfVq8P6iF9Qj7rVvs5TNdmZ7bB1CGfKEj7BcBwoRUxNzVfd9jNGw7wP",
  "key18": "5HFj6XNRHq1nmadxtrxY8FKbUS4LG6kmY25R8Feyed55oY9DsjKgmJB98GAZrwraEcMDmjiQoHuuPpDKGCNdv8wf",
  "key19": "63S8WBxgBMYDt8NHsC5qL1J9QK7GLMQV5aZNnbzAQMPJPY8rER7mvycspPbqLpibn1mVGSjx2gfYHTwbbDCFxZFh",
  "key20": "5zhfZoff5ixYr5DaxUpDLiEseDEMsdByRQAeScnvP5QUBNUHowphktNvdvstWFXoBX4wkmtJ7e1KKim8uPDigWyB",
  "key21": "4QVvyM9JvfxshftPWwXbxoHjtyABzUrPVmt7zkdoBZGoFNDbBQCoR2r4JxEiQiVimrhJqgFKPE1usVuup2kFrYvs",
  "key22": "3V2cwwWJsd9EbUmhKQp1fMxj5kzVY14s4kXevK3N6WLVZXhh7C2DAhbissJvD77XHFoGjaNTitR2VkZY3Yd9uZoy",
  "key23": "xL6h9orvcMz9DWNUjaF2dsSJUUi4AYKjuUDReQZpQHg11vqh8HgRrx376fkgEczuYDLWcCTNWBSY9bidADJsJoF",
  "key24": "4VYc11eU6EX7UJAStvcV82KeG9FHiG8iCciffPjymJ68Jf7JqVtGLSYnWLrq5L8ASFsrsFhbJgs7oXdRNQmDc3cC",
  "key25": "66TNFY6PJnXpDX9PooAFsVHBDzryirvG3Mg9wbTJgvRtfvnHEdvjx54itueLoBYHB1ph1wCdc39rc1WjcB3vP3h1",
  "key26": "3GRTjw9BJtWDXMUPDWpJo9WtyPxmaD9k9gbfouqNTv7SuTJ36JNYsBQj5RLgTB7p4EmNYpmbaDvrBfURpUzESkDV",
  "key27": "2QyaFxQK9bdcrAP95QAQFPHGrfzDxPPE8Ekx2wAYHSSLNCQzLRU7cy5N5uc93Qqymg5jcF5bmMFSYpAxacCrqiia",
  "key28": "5Z5wucZRV6DS7NW51iQDPBodnZmP35975zaL6LPJ1ySWevAGeiaLVmLgA6qKNaJsih9tDCuBMyQq6LVGGKrSUKZD",
  "key29": "LnJUCe7p1vNs6trzXPXLuGt9cgpveVw2i14dUsVKxgYgHiwoXgvN3iCi4dxdfZh1EYxBXpPH1G4Hypp1Ypwya3W",
  "key30": "2FMiVjzCRzQ8NSEHcyJUu3XToZdXiqqKQn6vfvKDJdLNtcqGCcNxn8JAZnd7Tvg3km2Fa6CmnkNmEDVurT9p9cPA",
  "key31": "35W6Z4fVSDtHgCpLdb18rP7snQj5sxtbJLcBCPzXpsy6EFeaw8xbWoQcciZ1cu38fyqfWrVYbtPxDRkLcaYJCJuG",
  "key32": "3jsNnoE8pFdWNU37GgkdJYkxat86b82zwC5PttwRCfE56ZDoBKA7m9zzMHGB2VR2i8MsX2WJigbxH9KAAbkzMgEp",
  "key33": "2NKB9RNmLkuT3dFRWbx23h4aRDS9NeuKLeS9w7RbrSFoUxwhMGvDeUfeX4tSV3ermxEDr5UK46y46W5vauNFQoCQ",
  "key34": "3Z6uqjbMb511RSgRvvqHLsjzdyE8BSNBwQXpfjKtXtvZFfnYe7HLAwygEbnYdsaSyCohnNdhbwXaeJoJAmmRUqyJ"
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
