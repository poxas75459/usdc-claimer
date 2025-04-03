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
    "3bFnBqemo2c3jTDqjbMwcW1efeDmPhpooRNURdgYJSHPPgx5hfgXMDyGUzEb6QNcMsTv19ZMWpAi7A2TLFqRyM4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W22iwgELK7xMGi724p1ohsp42tVknVyAd3ZiG9dKZSXUr5j7a7sFLEk5XhYPi6df5SR8iSdgkGKfKU5XauXbXgr",
  "key1": "35EW1kB4JUt4RN79tDyeEX8SNuscdLXJrerFTZzHPa7j2xGxK978xUYoHbyXAMfDxJPzaw6jM5SBZYrYdTJFJu9J",
  "key2": "5ouyLMHebDL5dYARSt6e5p4nR9NCmGYyrWXviyS85AM7YaqR72Ag3ZoZHZy1vTyQxqggd2E29rjQGQ6auEBsFqip",
  "key3": "5DEak2xc3cL9FkPej7HTxndM2e6sF6svQzqKyZuy54hcVYpqXgCzoFVxMUDxJqXb5xfYNbFtH1BHRkoKfy48Cfd9",
  "key4": "63afuwE3j4ya43ZRf3rzevC9hQekaGZ3ZTxizzTVRSnZPay2HQNijxwf5VRzKR4yhyEwZRVGzM6EPvEu5iPQvKNi",
  "key5": "uQF2y9hEPUFqwnco6je9G8Ro7jPv3sFZnfNfYTKMoLxNDYUMcqin6hjVjdN6kmDoiMVhzihsKERSpmVMfBDDuSX",
  "key6": "MGdVcaQvoS7PMGWHw6yv8ZTRxRGQDtgPzX8dQHery6UQbBzC2hprduoUiSsSyz4KsDqAiD7Ap7FvUdf2C5xGfZu",
  "key7": "3kCkHXSTFrSyALQ3tXfxbPuavPndArcY7Fd9WmNWbiM1AJcGpgouX3ofmhMSgbqL9qrYo4aeFpgXuTWSs9Y99VS1",
  "key8": "vW7fYzG6CpJCjRvbT98ke453zKLzAZ9moEwm1k1iWeYGu5PJanuBggsro4za1QW42obj3CaD8aEoBJv5FVcCCrK",
  "key9": "2oJ3qx6eGwjYr6FXxPAhowhTMJrbeogG9foXi1Y3uZUQdmKqUbWbr4CdU7zewZH34ko8LFTzVQrm1PqLr91h8cWV",
  "key10": "3r1hcaxmF3vWJHPBzgLbgRwwgb6rKuqN7YXckcrzEfw42WctgBbkyg6R3n4DToEmGErPeFPE7GVMRzBfbf2GxNY3",
  "key11": "3CRgvCznmfFrkHaEbaDjCF9Zh4S29oz3fhn17US4twi7BmxScnpHVZAcYS7Acbi77RW2gBrnhAcHwxjUSfwB5be5",
  "key12": "5QTjSmLrvKZRxxBqWRzeJ4FB5LJudK4hcBJVTYYXh84q7egDaL16teoc69ATTA8oUEwAFaDC1snA5TjDJEYbgkho",
  "key13": "vbBMnu6GXhpigjN3LknT5XFAQ79oUZsDamX2PaacGYh3QvkSNW2LhiaYX9va1ws9hWdZmh9cAtiuqHvfD241Apm",
  "key14": "aYzHUjNrGMtFReejLtZauzTa6UorzECLu5FBEqv6V7JRwG4B9EksGTikgUvJrDeDR9eByjDhos8Cz5RU5cMnJFR",
  "key15": "25CWSzco2W9Cy31dJC631gWXanppyhfTAVovRhGg7JtDpXjhy2buEU18nhtFEWJVXLUNQevergN87av9GpMHThbf",
  "key16": "6197UrgDceFzW2LHASWBrJyBkeLW3mG8FyK86QKStKVXKSimEkzhDs9a4wednvm9MnavoEQc7vY2ahWqafviAyrM",
  "key17": "3iCXfYSyXYx9hQw7wrSRAnCZ8qyPNCecDrko9WebYsyn88nDZwtQEkG9StaPzVFmtwsjBVJYqfTiQucpX8Q6hQzn",
  "key18": "3tuBqnjiU3XJUTYxT61L6bzqL6e6oNdRf72fF39XkWjJ3ng3MWVqyNh7vPDEpBcoPdGvGt2BuUuF98QEtJKppkVP",
  "key19": "4V1qyE9KLzUbVMMcVRkRoqehc4nFrZh7gg7MUmdffn5diKZVGzD3x5XuDFLRuXVDAoeXKynVdCt2GxVs7Hyat8Zo",
  "key20": "2qo6sB8NWdBhQv4nqykLKLMyhHYnDJVoWjJRFt68PpM9drTsydrVMW8gkcdycJQYhF616khgyfvVyvyFGGkFDe61",
  "key21": "jwnGDbbzqzuuQGG6JXSfX3S5NYeEgZKjKpXgmtjUBtKFhjwCUAmyjN2NJMGPoBdqiB7xcB9G1YWbgHSMEfyWHL5",
  "key22": "481jwMQoRPHS4SjbjTatcx7Vq1x1SYimr1E9Dwx9WQphC2hjVgwkawPGkJ2YvHwSsQsqXTzHoCZBvUhCKLqiUpde",
  "key23": "55yrx1fSdepc6ypphJ9ABYns7qScdah79W6EXWE17kg235F3A3kGgqaJG6WxJdWEtP3b5dSasRg843BqKEu39dHx",
  "key24": "3kaaDXa1KDQSn1CsqhzHwRGgFWoAnBeUV9zNKEQitY7ue9bmomMu2ywyoYoXWJBABfKGZ4RGmVn27PpWBAbBHsgS"
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
