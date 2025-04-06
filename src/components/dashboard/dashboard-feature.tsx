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
    "3X7Qu13WG89GqXt5XX4bXPczKm4FpEapkvLVEHj28kWQVezs7thVfKqjEnhKSenWp9rXgW5RfsXBAk2mBMf1FpnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s51ueqJDpfJZzu5bfMenFf2aEkArWdwrsGe6B3c9yRSsYWgDkEVCHmTSibWT3JQRos6KkaaPQYJL4YTmT1aFoG",
  "key1": "psMDktiaijtKzeB2tiGUaQWDFuDYwPPMVNfcP4ZqhBxSrnf19a7Rh5AyDBzqsGo9cTA1vYA2n5TJTmq36my1GFT",
  "key2": "3iVwnTADnA4qfEzG86GGXx2kNS5FLM5frFyLVAbCYGdPXskUSoTTVcSnY6q5pCwVTbxWADv3bSXHA5a2g7w3ypos",
  "key3": "27m6uD3wWFCmmK7ET3WrQyqMTb1nQT7FFhLr8AAvQ4SUKf8RqoPQFS28pmT54HuVHHEX4y4QedBaehGSrZFzjpNs",
  "key4": "64g16394nZVTtaBiJKhcsNUVqQp9BhmYEvnwCY2Avwxi7MzpQWCjEuv9yjofmaRFXn8KASBtJDqX2RqSLoVckwL8",
  "key5": "2v1xJEbdV3fQn1PE6NKWJYZZXoXX4x7yfJq2jHt3VSNTkVn6bcyqgTfe2DSAasz5trWYicUA383X1uCx2McGhUfE",
  "key6": "RA9JQpjo7DkxcvscSLTyHJJhRFZU5cT3jHPzycbX5oKieVmRwpRj8myUPUBWi9CPXzyMvTAkEeuUYrpnA4cq7Hy",
  "key7": "5XJ7yU9DXZVZf7kcKLXoC49J13xfXkh8mVVZAZjtstUCNfStt2jiPQDif4GSiHb3n7F9SDpacWjbpgzBz5iQLGum",
  "key8": "21k37K6DhZ1VcCFR6zMXszLaK7Ht2WmTbJFpCuALZbUbiboc1wV4zqQFWy7mVVF2NxaRctcempMfiuwxpVLtWscN",
  "key9": "5TWPjFds24dKNv46c2gCNLSBothPxh9E5VNjit1Z1WSRE3GKKx6kxaRtz3JAs1ngHKb3wnJVcNAVcXLMT2S8jxer",
  "key10": "62R7z9b4JpLbhpV825kF1JvqaMKCb5BM3AE9NbL3tjjQmNgbNWHSoV3B3S9hHfWwMWqcaW8v1Wj3RFznKpLrBkLR",
  "key11": "3B57ToiveHn6AgGV4uyBKqnMuiXQ4bRkwRWNKTpnf3Hn3NQBUfFV2Y7wQV6fk3tZqJMjW2dcn61NVbs1T4No1ZdK",
  "key12": "2MW4f35NGWHUWPLRwQW2PzEDbhrCK79t2iSJoWuh3JqUR2AS727GFPpawZs63v46SQhQnD9nUzhuASaPsaocYTtj",
  "key13": "jFHSBb3g4Gs5mtZnLABKXxVf1XfCSPodjqokcTcX3LQxfUzQkwPmmnhr5CXRJC6ZRmZtaVVxbB73b77RPvnE5Nq",
  "key14": "5wsM7Fi39vuAhjuyHMCTQ9fhgo4wGzJC6NwzXVabaN2UtUYpb1FDC8bnKcARRyPdLapETQGD1ScLaV4XhNvf2twh",
  "key15": "4M2z1RqMiuPWruycxksvR2h4W4BpQSe5H3ufVHaRWxT3Pcv1AACMhJWxCd6dszwWQJKzV4KpAcN3M3VExhZ5iTmR",
  "key16": "4fxEXsFEQvACyPhhWR1TvvMn7Fqe6T7eUtw2KggtbxC4KZrx4jubXjw1TacZC3qgANrVzbHfcPfY1V969HccYwSi",
  "key17": "538yVzyL21LxneM1rZbQghSyGsRkYSW25ZfPgM3hxzAgtF24Fa4Jj45cyG9hNhfprzCjAF1PmhjCjtkzCuD5CZo9",
  "key18": "4UKoHjXUw8cj9ZXLxnqqyLSjjF7YUkwRetGp3FBvcKLvmgegBYLAnc3McWXEUgXmUduGdSWrLKYTBTnNe23x6DNp",
  "key19": "2eFFFX5qEgroid6RNue7xmyLD2WeT7vax3FSXYxEG7wLaPMWGvv98nGc8ZTaobyn59ATP4ssVyZ3byTM9HD91aGD",
  "key20": "tFW7z4Xo3mGzfEW7vVFpb2ZjyVrHnG78hBc5CTZmXBVv74ZPgdcswwpE9XKxPq7yf3Nw77ZdjoSvx3mnJTZPPkS",
  "key21": "3AzHWpfqzz4PubM3f1LNfh2VzCPvvtP41wz3iXxyPvqB4tBW4iycMF32wUMnM4ErgnjbVksiCrGk6sZT1zKqv2Nf",
  "key22": "2RAH8mrxXp5p6aDwEujbhiA3tFJa64q1fmJXcHfYCmyrkAkGHx858jzFL7MHZGvV9Cm8LuL5bpgBZD6gQSgAqzbf",
  "key23": "3dLyyQ6M7qBcLHn4oTSjqN1tGCo98N6agh92CuQJoBS73LmERmEFCGosLekxdSQLi9ejbMXYacyjStpYdiT5wZ2a",
  "key24": "5n79TBQRz8qhaa1A8BhuttrbDF4zbRY9GqRxoqedoRm7hpokTQRJVjXeGXmRf9eX8z3f8YMyh1hXDHaqtSzpthCt",
  "key25": "5Tsw9JPWptT5MULxKLkGZJWjz6K4fT4DMsZr2n393yg7FASjQ7xtxkktnH9XTpwtbKMEBTgcSHCaKZUh55HryHC1",
  "key26": "2oEQQgKYbw4m8jXES3F7TEfLPTyGPvNsCo34RMPzPj2iYtV7zBnteBMzjViQrtxBLeoJ5A5BBrthq1SiUmwTuVhb",
  "key27": "3FriUkyYXeEGgUqc163NqgRfSAGYVgdpqDTfmAsdJee5D2JrbKqoPaq4mKGC98v8EyFPGwvgLnJTNiGge6HFqqm6",
  "key28": "2bGe7Szn741g8t7Ey6TbQ28mcTiLzL3WBkSpaGzMmERof9hem6iDCNRkqJ5LvRP5fgbvhwbq43E1YL9iXtWJ1ogs",
  "key29": "LdD2DKB7VFNBgvnZAefLjtudCQChB3eSEXLXZZKjm21kh9kdsTaiC6VsJhHw73AuqQDmiz7VpHHsYCWpGWDLZCR",
  "key30": "5nAXf3nNdaEg5E4fuQFqVzC7tGhpB7yQ6SwtUj4FNx25AbvuMwCRjpcBwPRnp5FbsMps4o3PrVVLUpXx2rpXZC24",
  "key31": "5bTGzV94X9FhPfUw8edbgMb4FSz7QXGChnPzG3bm9oDyXjLtVoTvoaT7DqzvWSUYrBiaRUS63YRG2XedvnJm6uSr",
  "key32": "29DSm1NF868e6Cb7BXLGnEfXERTL5hfYthes1C2hMCqGy42uues8yaLT4DynrpoPNm9BJptrvtURGWfqFpvMoVb6",
  "key33": "2wbFMVSZxmvyLkqrSeUGsPWdL9gfRxegHwJZgXpY8GpQ6aEbqKeVtCMabdj5BwjB1xmK9CUzCVunmhG24jAbHSWs",
  "key34": "3gwyZadZhP2bsMrgLEkEU1D74PwH5RqBsaD9hGLVL6Zi9cmEewmbMrYK2iqxbZrZdtrG3u8QHFLwowqW1eeD47Tb",
  "key35": "5TGMR3cLXeFWTseRDLVfxrX2x4FkEPgavjareeu3fR5PNVaDoyq6BxCkRJfFxX97wcRr6oJ3HS1ndhVPGwRn9DMk",
  "key36": "suDkcwLjzcBCnoD1TAkXVKkwsrR1xLWyHugT9VVybumvdq1vSRDmEtXi6s5TBQ5iGkh4RGLY21FDax57RbiazxL"
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
