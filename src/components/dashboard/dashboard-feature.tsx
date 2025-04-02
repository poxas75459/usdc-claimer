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
    "59rs32d9FuTLa5BTBqoDmSasAT7kNhaDB4PnXXiLGDLpxHNaJhZ626pvFtZj8fkVPRi4F7rFgUmc6iztuXEornht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ntbUeohZzXpDjnzxv4VfdBcD8dY2J5uLf8cKve4t5spTTsyKGcor42jDCYyzHNTyV5Jz5RE2fbo8SmCNz8QRNfe",
  "key1": "2jZZq4rjzGGiaPdLhS5ktRizsq1WWdQUmg6NWNNVwmkpsTM8sntsAAzX3Tg7NCV5xa7LuW9jrRD73SjWjA2zSpa4",
  "key2": "4ZGmtTyuYRgcaoJFptWjBbWekGDzZRUg1cZctdFRP8GsPBSBg9AsYwzAACiP8BZQwenEJHYRyQJSfBjPTvEgTyjg",
  "key3": "4FQT1PTLrb7cA7f2Xx5gbnMdZbW3bBmYhpzVe19wXNpzHf9VoFJL8aWP8kNppXj3QcqB4zbb76pCmz1vrK4RqxyA",
  "key4": "4uPGqtG4MyzpGcQLpS7uFqJasfYTejh7qAY5fPLkr4spGcPHBFyA6XyBGBk3wRAzWtXMymNyFYZCb7tsTD6R4ZgP",
  "key5": "5NNXduPNxS7eGkH1CUgAfw6sDEYCMu4Y9uc11SMKAGsd1dJGt7KQLFi78YEVY2kZ7bS38cYSshVyiyKzdAdRuqLg",
  "key6": "52Sk45CrAy6EZ8km1TBZZR2h51vUvRnbnaWnEVrcgQ7FCgoz3cBLmitXLCydGzypB79vWFcCL4irT6azkUk4NvFs",
  "key7": "4gvXpN822uA7ZRJ15GRpS9bG8t5AjwYkPEDgNePN3VayVGt5qNSEmUCcaskeRrR3xVQBiVkc2LXzL9v432Pko9Uo",
  "key8": "e7kBs2spBWYYcYQywpRCY1YdpCv3gHjpF47JBjjQaN6VqdYJoeKJ7nkpRBrkceM8iKQRHvTbdnEJUgbnJqQoGWi",
  "key9": "4dMRnEjcYvMGHrAVMethKCEB1eEsaKf6wYdb84MxRFNh4aaaZHoomiA7g8uRMSTM37Wi5Ed31GEkxUuwuxZmW7xy",
  "key10": "4sUNDQUK3Vt3sqNQE86fq8UTeMqmn9ztWdkxM19GXDZz7geGJCAUhtqfdGn2aksrjeA5fnY6muagwYPz7TQnJJ2a",
  "key11": "5B4aiYUoXnxVwosYGgttke56NPrsE58fDZZNvqndJ3qvdWVm58EGA9EPe24HdS5RtXgDTq4xioj4FVmnMdWKG4cb",
  "key12": "3FMHn2ddQtYk8D61VYLVxUd4PnmD5qPWJ4znp4rdCD96eF7mxjiyQkq8jKwrRh9T8J6hastU9fWcJGW3SDDfkcBG",
  "key13": "LmTAoKEFJBe7oaExypYeTKXugTkzZX9QzVe7cTADE2J5TrjiL7xR2XMSvXfXYfJADCgweMgYdizsezz4n4Ai7Ru",
  "key14": "58CnZUejV4p3V4GBFD99eHi5gkSSPr8nsjV3F8rvZXzRDDjsLXr4kmZjoZauY2pLut7qJNRWu5ZM4E8CsFhPw1E4",
  "key15": "2cqFWy36nA8crk77XLvSRayXooH6Ma3sigDpYNE9fv9c1ejL6JfyQ4HSicX2D7EwXUVBsnf3pi7UcnmphQwyBvuU",
  "key16": "35P17vaujphL33nU1J7X6LVASFw1tbPtWwmH24Q7cYkgjKKor36kjamt9Vuw9dGan1LzZPtqTBNrcVmvj2HLUKeM",
  "key17": "5tgycys4rvKVEYgNYuUgtYT2dCC7DRZ6kcHRR6TCsSLfho67VNZf6zRWhUo1y2SnLaTim1GoBtqAsEQPsL1pBivR",
  "key18": "5db5CpDG5Y8c3V4TmeFh2UxWqQpwJZ8KFEABMPpwRM9epmhPS2nfWhvHR6H8GaRyGiBwmkYR18LjXGin8BnjUkfu",
  "key19": "vvQYR3zjE8GWnMUq3MMUhxhPa47ACMJv1e6TBcSqQWs1Lfwo9irHpn8TcejSzpTxmR1P6dW7q617iRsDSVBJ9wg",
  "key20": "5kF8PWshQa38KY8i8icZSUqhped5ALS7b6mADGyh1khZVaBEjH4MqvE5U59njxeLVF1fsFYb9mAovMYkigNAYUq",
  "key21": "5WBhbvr3ZKLNg5kY4p1H2X4XVF8vVd7XSVkYoR6WcWJ9fvCbXmR9iXqgBeLQYqB5UgsPtCLBu79seCE4w5axYTgs",
  "key22": "3iqYYjFwwTzu4NCLLMBx3uakBgHG52UmdmBQVnnYrGFpAhvhf4HWwgcVJVcKYiKCjAB5654P5jr9oyjXKXSJRwy6",
  "key23": "bCV2bsnX9pYS2LLTEJ27uHSA2UXAxkXuG5VkZ4tPJ7gPsEjC4id9Rbqgegp7ScHf8nmznEVCFKe4m4bJ13XCe1y",
  "key24": "27aYnJPzHUeKTwcQ5PrwEYkFP8ubn7xrHcTZ6ZK6ioky96ciiGoqs9xWX9XvsezEFBcWH7Jt8qVgtboJ4HednXjw",
  "key25": "PB9Sv1ZeyDbATj4qbapBXybxfSECGe7TcipKXP8MysQBCB9j7Sx7bipjNTVrVkEtkGbJGMJ873P1qdbajuTC1ad",
  "key26": "MnkmeHUh2YCP5cYZnVbZ7W9aNFoNoTMuR8roVkdYqMhAiWgvZgwuxS1fgMWFGThQp3aJxJEu4J2vYBgGrRWPrX2",
  "key27": "E8Jva9iNqWDRWiymBjViiyR5jDmsXvEopdFhsxJdcpmGDJeVnpZBc8kGibpNF68WJuGrmpcauJ2DaaN1TJobmJq",
  "key28": "4JmecydovrSYkcykwgmS9hrk1wsxv8BRkoEBuyDib8GNU65Ko7bMksDwpT6AgK6te1iNBcQLnW815gUr2uQGXjNK",
  "key29": "5WQt7kJsCft89rSptfrXM7L98ggD5DE5duGQfkdHyHMEyHKHTTimhW9UBTSP7jVDHYxoZv9deoWTnSnkU8BDdZrF"
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
