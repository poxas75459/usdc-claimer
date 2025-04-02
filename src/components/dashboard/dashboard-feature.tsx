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
    "4xwotYQKbavQ4nQGBDjenPhJVSKEvUKLiHoX4UUhzckJfrktkfZQMy9KaunAV6dsM7MLZwdwfYZ5QeJkyopNt23t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q4PcqVCa4FS2FE4E9x1D7r79gEko21me73XY4HDQ5H3os71D2fxoeu5hSjZqDzfDGQoRcVXaYpVWWrgoVfhsUK8",
  "key1": "54UJdZXVt8HyZvKPpZr4CwY8Gg7SMkKbGoVpW5ruTGLUFRvcx4GF8L68rTggADVy5fYcgwyMJ2SUagSS97jMgPLs",
  "key2": "4Jnnyq9aS1zeDe1vRH6mi65EHUHrPFauS2RZMmLTWd6Y1ja4xygWpJhQyDPSG9fcyBAX2Y9pT8VV22VSQC9YKNfk",
  "key3": "4v9514ZN42Xfd6N2CibagGEumzFPg5rnkwwFzA77yswEYCAQGMH3asA5wUYHUeTEEdgW9NLiLzgthXX1bQETMiJr",
  "key4": "4zVyK3WDaUR2SrVVGG5i97dR4LwRj9NgxrrFxiVEx7Uhrpy3VPEsEaMcWY6kUubNW8kvdCFjtEYwz4MzhNegRqzx",
  "key5": "2PMTccSTfrWFwoYqANQxLW51Bh8EPVjZYkiAwxc2BBRdnbf1DKY9mhKjMm7tCwX5KQiuzRXCDE25HQJPBKma4hXd",
  "key6": "58hqHhdXDh26UeLzkmMPPSzopTZoQ1Y6v6q9Yw7ZwvHZZPZyPZr4z7Kksu2HJTAZDmJqNAZs9JPxJMhiDsBUoPTP",
  "key7": "4BmQqc6SfqE9eGdQdC8CwnpShQDDHUpTZAnu5g1TU1S85fqEm6zH3hRHL84T4RGJP1xabZWzf6T4d4Eg7i9a41T9",
  "key8": "BPZ5h5rHoCxo9d2DzbXuZvYAuNPo1YYfhiFmRgiGysGftvyJrpWauV828X9zTxQg8ZaTusxRXEAso3cs1jaCPdJ",
  "key9": "Q7DzNQHHisXLgG3xS7twRXaLWw5WWbkSNnANiRQFPX6tMZ4CxJiqFcNPg8vesshjn4mzjV2T8j3TM7uSU8q64XV",
  "key10": "5JhjsKLKCpRKSqWqdstsvyJvMt7DuJNshteGrH14Mbf6VPLdjZPb2MTJSiiPT7j4mz2bJAUvLahTxFY9mrWgXYh7",
  "key11": "5vkVxRkRGGqoom8q8tbHYwhPqyS2JxRPSex3UeH9pLmPSjf9jeuZjFjPbXtbbs9HBD7LfCZcY7nvH4zFVrvNZY5B",
  "key12": "5g8LJ3297m97DHyG4K587Q1yi3HiC1irCc7bzdF2JnipojqvCmqgJg6RQgxw4Ln8sypwoLsEYAB77f1TntFjofVQ",
  "key13": "2BDeLhJ51tx4FBdP9HY8W48Mu8RHcTVA3X6pwGK8sQmKjS3HiCmRd5QRWhuQmnygiKygfZEyjPDZPVurGUFYRye4",
  "key14": "4Uo2JWeQmHP5tByzVHCjB6uDKrDWLqfDL636KpYPda8856ZKzaUvX55xgDBaopBzzAicVHpUrRrfwt2vUtN6QwE6",
  "key15": "otkzkj8Be1KY2V7rCmBvyEsWTXeWsC1EiPgnZpZ23gd4vkNGsYi2a3TUuqfPMDEBjgf3wTQKy2G17UTkzzzifor",
  "key16": "ijZTkXfXo9qT8Rp2W3yoNfkPsRC2QqcR3i5rFkJe2Sc33fg4eVEr2TJfRKmc5dhCSkUcc4r5StTwPQW5X3HnHnF",
  "key17": "XkqJrW9y1x4vBq2qQVB3c7PM8wtVj2KGckGfoWsjY777wTHFvi4PV2q9DfNXQUaoUJmrchwN7ifYiXfV31gYQyg",
  "key18": "5WegLFPrP1XVGGQNsAfcdzZdHuVRrt47ZSFFLmAFAYUURYJxGK1oEQxAxdkoB54sMAaLU2sdYYCSns2gd6BDhNRt",
  "key19": "5TfzFVMKntfongpdGtA4aLM1AmV8ufKKLtDMRw21oCh1QNdyuXjoQMmoiigsX5SrFArFi7y7owMDh7wJtxEehxen",
  "key20": "56hVw1wbyKzYsvq3dU9ou6f7ahtwrj3C8hKb7u4JFooYxh42rferFKRkFHnNWA3NNEiCr4ixqDNVHKfJANHeb1cS",
  "key21": "64fC1NcPk2M2sJLFLbTi4zKMgvrL9y8j7hZ3sfaKxYHe3DxyPCHjHe8hgRHyzvZMwMLUvkC2qtvzfQUvqcjv6viE",
  "key22": "2jRzMHstHLwt38YuYi9jAvjFqxToCjGvZaoPP4iXhDMYNqLWYVUcwVsRMC31vVCwPS7LZbBLuebMPWswVoEyaoXg",
  "key23": "TKt2JWdb3cmPuuvMHrpgn17PmXgvAxeNTnGRrTwJg2tREjUFhjnwyw4BNVvC3x1TvNLh1EFxHhhQrpj2zwd3Mhx",
  "key24": "xC1Ni64ZqiaAiA5HxoqrVBGt8ubKmc5zKWMZjcLxvtpQ8usGjf7PmvpUJDYyRFJV3rQMqvf2vBuFQu2PJYvjjzX",
  "key25": "3dzcBk6sK1N7LehkY8qGJKia2Y4pTJUPYmbgRPE7T645QhUsSwYQWr5kcsGjUBMtdY8GWyVqKS7wj2TYepdQq2CV",
  "key26": "ombH9iPfHTqXcPbYAg9Y3jLA6Lcb14spwX1eDR1xZuf7bMzGg3zjmqmJbDRsL4iYnenGSZotk7MRsaZXtVqA2H6",
  "key27": "2hUpdLi2s4bjyGzP61DXNG4h72GL5WGQdg4owfFpz5M1ocq71S9ndEdxaCUZg9X8f4JsUwf5QNvYH6yB9QVendER",
  "key28": "4dXHc3iGq16BWg6vTWkJB5jfvAvG7oF2tu8wMK5DMgWopnmR4E6jnbRbtGJ48n35vJN82vSp7o4XPitnruXgvkky",
  "key29": "5V9xk4ZrWH4nEUqZRtgA318TyABDcm1DGnwEdAyZHWdV1cxD1a86L2JRGBP1bL2QLBcepVccTbGdbM9FMVFY3fZv"
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
