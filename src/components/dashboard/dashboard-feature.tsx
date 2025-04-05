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
    "29aexaLP7ovDTLKAjUSavXFJqtwi3A4wY7XYiQHR1z3Czu7iP9HJzHZJzuTjhqr2h8ziTbuvyyprr9EWZT95srmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52tp15Hwzux7hqqp5puRPXjLXzomtdnRkdmKdVoZazKba5Wycp24sKUc2jHE8Gjcp6WTLpFcYScQ2A43LJSEGzYP",
  "key1": "3gxdUGwmidSKtmW4HLmCJKJj2jS9mHeFonXw88MxDiGTFBckdQiRPBAiMVCKiPsR4wTdWni8nsa6C8CHck8ZQQhm",
  "key2": "UknmdGtMwJsg3MtsCRng2N3Rz76ZvNTsyvF9SnCWSdZ7WBvCHQjbUbNA9Ms9cqDZhT1xEWYPVvGhdjGWLGRgafL",
  "key3": "4ntHZCCdqBf4MxipehfXJwhwyVjUTa9YgiZxyoVuGqmEv8h8fAk1qAUQm1DnLpfT6pHMizJzcUFWceEB1S4TyDMT",
  "key4": "5dPRZQvaTapLDWEwpTxn9LpwetZ5Wf55mJtEPHPc3VN4cT9NuKUHQwCnQUBzLco6RDvxp1Nx2V3ecb5GThiLTDKK",
  "key5": "64fis2TkhN4f78jvyjQJKTVc7fr1AidPx4gLWqHgt8wYe5bGy5eUsTLGp17mTwHqtRg2CEfr3Mh6iGeayM5DZBJG",
  "key6": "335nb3tMjXM3oU6LJWZC44Hccmrk1bvVdrQrrEfjDcQgjn3YedwX74zcGpx9jzpr1ym4UdrM259kf1bh9rSpuyT3",
  "key7": "4R24KbkAzrQJuZo2AEKoAvfmoeks1HaAJBvTjyGDc32ubpuMmcZtopq1rzzEiYrKQoMwDTu8azxRABzVm8QnH1nK",
  "key8": "z1hxYkprP2zNAEvrTk3qXuYPWGdxQZp3aLWtReXBL9xoHh9rst13aZ8vqEFRGSmxUgkwbNvSjxLvcVvEXXsk3bA",
  "key9": "598c1ATGNJ4XRwudXdKe2abEiPorEgXsk4cGsMJpvRbKwaZUTTtTJ7S7Wjes7ypNjzvky7bbASpx9vyLDwoQ71QU",
  "key10": "5gHSfY2w7Z68mnVYKdQRWi1Htk2gbbAmhP54sqo3JK6DPAUJ5gVJL1vXQyudYcWGdanJ7G96TdktLLGX3SNDncYo",
  "key11": "59JxTyzrFcrEds1rS8r6dhg26cA44AHWsZ88dzDXfJQcqAFUzSM3WhkamW9pzhQATZpyVndyFv9Nvg7d3rvfTE3z",
  "key12": "4VdzzJHHEFzLRf2mBiDrWvkRS7tCBwhc9LW1THr8Hea7RpPtxb5C8yQyyWM9s2ZYQ9bKtBwG1pxHLZVpzcQc1VLc",
  "key13": "3Y3SRYMr2ccCkxaB3BUYeBtPy96XnbPFZMYMC6YrW5NETUJha8UBQs3Lif7LMUHR7x4fUqwWtQppY6EccLYrQBDA",
  "key14": "5gJc6J11XymeKhXG4bbvsgoekKxXiJrTS6zF9AvJykPG4shQnhaXpVRiChiMKcdazCmgN63RoPERyWscyNn87H3K",
  "key15": "TAkhMKmQ8bHsLGRKp9PwQR1bVuvjui1stMQDLLGG75EaiJx189kkgZhi4fUnGvVkCNkwYvxARohS6ehNLRLfeGs",
  "key16": "5XsmhYcKnXtjmCiTgEfvd17bTnXek98A5sa4peDrqjnEAyDTuvXuvjogySbdgEBTnB3UvrFDyXpGXz5m4inSmJuS",
  "key17": "63pDQu48aSp7j2XrySnTx3dBv9R3HYnVdmnZtSpz3TVfR9CoTr2LTDW4BSm9w45mipmVC6E9tXcKcVDLRsiqmaPY",
  "key18": "4SJjtcgsgHo3CkLWgjMUg8XHWskLB9aoRgFM3DMxB7vv6jbswBMr4ZHAAxrnvy4yzHmJGBXFSxVi8ZDZ7AJ4XLRY",
  "key19": "3hZTBJ6KLWnU1rS1RHFJzYz4jFaLXkeRFhAbyMMqfiC1qBfMMbxknyyvvm8fUaKWYf2ePfoUs2hAt9LocJqRZ7dC",
  "key20": "5qBPquVfjVnCSuHniawdQCA3TgwhnYFre5FUZxyYxWdJFZrqjmjno6UBq3Eb8sDGRXLyqYM34cybR7PL7U4NUM4K",
  "key21": "4jTahtzhpQUSspjeZ8871L7PPrH5CfAMzGAN2aWi6Aa6WH5snNiRezv5DhwEosTRFFxLmjQMRvb74AHcwgBXi6tB",
  "key22": "3Rcqwx52uinjjdrKb24zKWYGRQLM6BDZXbKLrWUYpvUNWmuga6EUxwm9iCcnfQ7C5zDLUk7y55r8hmYcQLCK3ugK",
  "key23": "bzrdyMCRcUUoVHp9BFg7tzyNJBfqB4p5To6CHHtVA1ajvRHrTvLnW6t9PmLYFpP21f5tvKGeYwh4oVnLDjabUcH",
  "key24": "4fQxa7WkWWonJicp7kGbki4Gh5tHk2dkuJjjWwb5wfirR6B4VxeLxo8vnCuBLh5EZ95iUcN7YpVEG4oZ4aQtYBNu",
  "key25": "2g5sUuwg19EFqbFVdnfXFjU4g9q5XU8r4Q7PkCoKJkdEd4NoPKpMg53NzQgEZLNAjmM862p6wTTmHz2BeKWMtZLW",
  "key26": "2JuH3eQ5sMFyCeVr3C6FyK6ARxUmdD5iBUF6Je89nmSB29JCTgN6g9gcpK7UqTxDSof5snkERPHC2ggyK8whDyhC",
  "key27": "3gWF98TWCYAbtGKqGBrj9FGNk6YsKBVyPsyb7WERdQQSBLLUpAxB1SWWns6jCk9KoiqaQPQQ8UhLHPLfeCWsK82c",
  "key28": "67a1M6M4PgEeVCbQagcMsa6BXpWYkPW2MEF9bFmmMAB1JJoJnYC2GbHXfAeahH9HVeFkC9ZBAuYXVrTE4zxygNFu",
  "key29": "3UYewVFQ4EidgmKYHYMDK9y85K1tReCMsebLZBrySreyyXUSFoUYimbS8UcZCUtKR5PNWfsbn9vdwP9dyeME7J9d",
  "key30": "2Q9gJTt1zQ8MZLf3ruJCiVRqqxS3XaJpbt4jVjG8A9aXAJAeKXgmMP7HxodAthRswc5fBCiMppPVNB2aSJskJQwU",
  "key31": "2v81JitVyKwriDwshzw9GZJQ6cFTnUMuGfxLqqJRz2DvQwQwJ23Jjns2TVYrVa3EX5Bbbs4VYv3u3qc2LsnifEQH",
  "key32": "5Ag2d9zUopf7Wym7VZKcegFnSYMKHjW8Jrs7en8xN6k9szD4BvjwNiG1M9dg7jTAdBdtnVHBgNMVUL6DvTLyPgEM",
  "key33": "2XHcFNFX5Hx6bdHSSfZD9oQrPdYDqE3na1EdrxLDTWY7Rm3xdWsJnS6PPi3oWSwMcMT1yAxh6Tjdph2SwZ8cA2yo",
  "key34": "2fFt81FzEXqoURT9KVN9aamtvifo9ZjF4k6CtNKrrqwr1EaoAX4q3oB7rtXkdxjwTbyziw23rvdcBGkxdZ8GqYXX"
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
