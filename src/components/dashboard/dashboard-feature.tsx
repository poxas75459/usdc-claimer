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
    "3m9mi24iMBZ4VUQVzFHsPnVVuo1aC8Wiy5nvC2dhnSjB6JhYLQSz629umq1sUcmn4NMuwcd845mX9dEVn6pnTCnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9H6TahovpyqkVNXuHxstB1LmnERtqcXkpC93SYSM86iBgkDUW1hre88vhb6GYxQQmPJdopDvsQ2Nbijsn2BGSN4",
  "key1": "3z9nfhr1eW2nBdeYBL89SBRqecgKBxrGsp1YJ5M6W5wgQQue48QJJFTbMQ8XjnfUKNyj6ZZQkFweVA1ZV9z9ogU7",
  "key2": "4PPgDY511r6BvbnHdY84ARaFYh8YWmEs8gVQFXt8woe8m4Ub4Y32PxK55pCEDQXKzi7paL7RLimShnqeWEHtPLKj",
  "key3": "5ozUKWFUcuhJpCe5koTZWgjvaUX7E9ubNs9NxGhSEbC37VcoUdxHDKCydABQC3QvYR5DUyoZ57u5RU4zz69GR3Ui",
  "key4": "47i8UbyEcnUom4tLvcWX31Q8tA2s13X3ePB7z1ycWjtxWokw4nnij1RpVjaH65reaWck5GE4wEXUtUQMgJafSNh7",
  "key5": "4SHo1V8omCecNFzKv9wemDKjrcpcZkBb6Fhu2rRFM9b9a8gx8RaxgVPqs2wwVbQTkoEBJGy6AA8qgXeszK3gjJfh",
  "key6": "4rheufBj9uRYSdySuvf2iKyWYaeKBPsj7qkHQvP81uBoE4TYeNDwqqzS4q8ry1VtsFZKiVzqTrgrc7BBtXUh3gEv",
  "key7": "2TdYaTimfHjEZbZ3tapykhxSh1nhss6mpZmQjEtL8p9hkTTpJmzMLKV6Y9aqttGbT1cFtDqaTWnucVu1prToMx6M",
  "key8": "sJJEtjwwzgEYxv7vE3z8dZx3SeyPpMbbBuckdrcsADUBG1ckwk5d9PZoKCf9hiWNbovtmnVAVrisWh5DLeRScNs",
  "key9": "zXjyacKy47teuNnY8XMW4ybDMUbvV2egfvBPum6koDKGZ1v4icS4EcueAEmttG6vqFa69kJQrnBjL4RHqwVrA8f",
  "key10": "RvsRqpCwYq8rTpgRUpQp6FuwADGacsPPzDp6wNATMkHDr6fccT3vTMQqwe6uGy4tL6YiyNKwbr7p8xzKFBNeFmQ",
  "key11": "3WtEDCs7pJrcaUoU75np3mEPjk4r5ETX1fRAr5L2AR2SDSrPYy2CVL7fEd5cqGrM33UR7GZM7X3ooiC89j3RjZHe",
  "key12": "d6uk4tXhT4t6BMS15CaKRrPBQsWP4upiNaN6MeP4FGXEMMkqwT8tDWYHuMrRVBcfEFGXMkKbegfgzvpRQGkHA3f",
  "key13": "4pGDzaUvg4W8Gx1u5tN2yewS3pGNMvKoi8pAQX7Z9kJE8yFRKHR4h2971gBVg4opvUEDa51n78eauhrUYBC7c1vw",
  "key14": "fRBsM148Ts4cShxyAVugVfmGq4VC9Pb9kTj5QLyQVTQfKH3nECNFFxFADgbvCXRoJUymtw6BQ5YpqyhBsPkXYxN",
  "key15": "U9yBsDmnrXKhWN8MBnLC3FAgZbzG5TWLH1NXwQLZDHptSRipSYPRq6ZfNNFMQeSop55sEUq1tx8AwBxcU19hxEa",
  "key16": "hUYntJ4qzePVyEp8NZk6DeQXBCpGcEjzMa9sXKdu18FjEYnKdArWNFprcwBakgvtfqYUCMGF8Sytss9veeEQE2W",
  "key17": "hbHKsHsVCZ3Ks3YpQ4x8CdVtLi53boEi7PoKuvqXeHSDJoabcRXHsMxN1QhrvBcXfp2PVHoetueWu6b4HpcDMwh",
  "key18": "L34szpkRVQTsxFmL42i3iWdeAvkt4nyPzdFrzmPtqY69hG5YoRjWRVFT6j19u9Wcinxf9WJJRakp2cdfs1UDb2x",
  "key19": "4cPsQfmmTcrrcdJtGcKq9R5VC6zJP5orNELTtac1Hyk3he4S7s5uk6G2caG8aBcN2AfrHFSTrwcgqWoJAie71Yb2",
  "key20": "2sLXCquDVCU6kz4fySpvrSq4nqiGQDX9Arts9LKe4TqMDY1PgAN8KzQPR3D8wHS3CnW1twZ1mpPejeGUNe8aW5Yt",
  "key21": "4o2SuD2K75GCkajq2yb67YskM2oKiLzR4udiMTjWxPDdSNuFaAtub6K3hQQXvMTgrR6rGqhimL1sXAJoHpMHx1xt",
  "key22": "2Bn8YPy3d7fw6jBGSwTYmhV5sfDrLUW1nSMynSkJFC3HfgM8mPE4bpKyQ8E3QrzuiXEAau1ujqAnHzvvpytGXu9g",
  "key23": "3JLd2gB2ZQgun1v28y4b4AKUNSsiiSwDW2Vk7ZbuMwoSxyTxhvKsKqw1YKSuqL65cdYimYZTU61eQD7v4ohBVMbz",
  "key24": "5epN4NBBXJvn81mN8o5PaMg2VzLehCVzY6kPNapCWsv4S4DW6aqKj9gFyRpxXaQnYGLhCe9ST4Zrg9vA5uzJry1F",
  "key25": "77RKkMCHmknAGFLkoeqkRbq6EVm9JPfZ5RkELEi7HmneoFvXpf9Vg3Md6w6MRiPEHHLceTLQkdYi7jgYytsi4nm",
  "key26": "3uZLj6c6YgDJfog41YMknagR9Qf4KSWXzbiqejnsgUhrCm9CzWrhyj9vR8g6AB997Dig3zyiMqV319FGCz9XSTns",
  "key27": "3YESktLdLgAoijvejyVB42UaJ2fmq8Jnx4RikYRAvtjt9RyZ9osQ99krPT5h6uFeWcaxvnth6ad3KLMubitczmcN",
  "key28": "2KbKDJtCxFoVrZxg31BYeCXZWmKe8BTy6E1SiAmVrJPkfYta3rx4aJbyLL9vADLKrCg7HhHSgCokpDi9pgeU8Jy",
  "key29": "3Qs6CUvDmJBBnn7AcKfhPLvTMVMB657BFU7oStyidwvaPD7J8DWMsP2iQ9vLH4SASTGuwbZuc5AeELmQkZuEW2qi",
  "key30": "5g2LjSfJx49CpD3u9k6ue9jafxktEU29PDP9KWDcuRtqcctusQ5K6tRYzKKWAhs9tRDgH168Yr4LMZVQYHVCo8eD",
  "key31": "5DodAGiiJR3z2ufpknweRkZtMcnr3xRXFvUpvF8d2vRzgJz5FwGCkyH4wdcGhrhNHnUSnsM7spf3VxTTou5p5nd7",
  "key32": "eToLy27GPkNJKQtLZYBNU4WPuHHjDFGtbSiRZLpmxxH3qJS7fYJtDJZvRG5nFPrYxrz8tgc7GNhT5TSe1e6VQ9w",
  "key33": "3NhfRTQpKeCA5WgyHks3PDb4znotGjZNxGxs5qMaZuZ17xYy769xVVvhH712EhHi6CH9nuBBtyiP2hCEnjcdrhLp",
  "key34": "qsgHCW5mznscnoAuKroueSQ5VjegfaMJFnJ2AWL9JsNAreVBoiizjadaSvZYD1BrFaGVvkf8qu37AynWmte2odS",
  "key35": "4YUxSyg6iKFurPhG4uguGwQxePmNyUZBncF4u9iPvRZta9MYE1Agp8RQqRwjq6fQKRFV5geB6kzSW6upJPA1pW1E",
  "key36": "5mCrkqFxpXgJuhZfGyDF2TxRShQxGWMrq3ZpQaC8SHjnEY32owDkzvTcAPewRGzNxEEobL1C9EW65M3dpo8LE1JG",
  "key37": "3GtdtMY5swkWZDx2xMz1po325nhZwBYHCuijDBsV6hpoTDdYPQNeAj5VmLrbUWNjtvz3wng9XN61x4Xv9rTxDuvZ",
  "key38": "342dHvmBAoDMDR99jqUXJ7Zp1nMY3oX4Ugf3cWdingZZsDw48mpgozGWXkos3oNoKeGoS2Ec4DUAsUPRw8UhZ1k9",
  "key39": "58AtEjZ7Q3bQfiBviBNn475JW7EZsFa8peXKUTgc78EAAau4JdGzUnignDJMcbUCScsbitsiASTH2AYANDrQDuT4",
  "key40": "4WUMCw35jrS2QsvMBgJiMhzSuVv9kZoQrVFyvKKvczPNsakUVatYhx3vbAJg5WWsu1byYPtYaAUTWnqKnynPVsSj",
  "key41": "3khy1t6SxcY4BiskQMBxSUJpktYphpn9EH19pjcZVVwVoaHKrVc4F8vL7o82hZkTdMDqpDLhRpn75dncLSvmkQVU",
  "key42": "3QxcWqVCmKZtxoMBM91XpEYLb7f6u1iHRNnQyZ8MYgvN1UudxfpWVYZk2V8WKKnG1oCGLMkvUAFcRbQpbQadvZFL",
  "key43": "2R8T9H9j6eouvjG657WNQXUGxoCpXLQCkm35EGHkBKKVFwmUJmY7D4rLv6A8yjiEMLJmn42jwYZgxmBpHhYqvsqG",
  "key44": "2qJXjcW8ZsRqHeCP9eiCdZGs1qjR7SearauX1NCyLJTg4k6CZcciRQ5zS2VEVRJzZ6fL9WokqMACKB164whWUSYB",
  "key45": "3TjfAixRvPkNAD7WgbW9tnoo5gkwvtFyHPt3gXNnoBd4GtojrRAtr8HN7wuCCZEUDzGq4hLKvKqbnVp3SsZr7U7S",
  "key46": "dLyc9dC7vUwqAH8X2J4ebMgp7j3aEonXTGJi6oSy1dpEH8hk4vKbWNx562PZTJ2z1eeKoBpkCQWy38UeUDP2VDC",
  "key47": "3bXdBqLhzBLepYSM4HgqB3fr8JzPqTq9Y3z9BEovHtVk8SzUNvP8iPL1NGzW4R4zZfmYgMZ8gTk8Bq61WYAh8PxV"
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
