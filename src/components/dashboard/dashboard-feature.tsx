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
    "DxKybNKbqpkmuE9UzQLdWwEF2LTCPpeT3kzborM79GBJey1xvXsU3KGk6vmfQmJWzFamFVBE9AQgagneZMe1EdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "234scxYAxEGGq6pW2e6gYDrGSEqYe3qqtMKwefTatk3tFm2mPuKP8svTRfGgQ312sy7UJ9rxxW1Z64qAfWZpQeGY",
  "key1": "4Ag2P39aL931gt5VLhYY3ACfjDJkM6im759ZXLFfX76jbBmhNNpjugWKfKAAMNgzj4gCWuFrYrkSQNn4MnkWPxW8",
  "key2": "s73FCMLnznbVJgDXpqxG8sS17uF1m7KGA62YJAbZviAszo9YZdpt1MWRftCK33LMgxMN6h14PpdBUJb9RHhfSPt",
  "key3": "2cbZoVaW5fyVddEiPzuXQX16LcYL2dMCe3Lr4ezmxPvytp6KU1kpuqHKdoBhsUEfa8DkojUkYvpjTuyprxoZRoVm",
  "key4": "38TEqrF7JJCycwimKybvhogJKSAvESW2NLMqVPezPVRuyivGk1248bDchTVLXxP8va4589BhD6VuS3N28Gn5sbSz",
  "key5": "MF8PT4bxZXVnNZ1x6sziLrXBo91uboYJHCTSXPLseEwqcF2tdwbaKSha8RbEbrrLrFCwJryoPBf3KY9etp9nRqi",
  "key6": "5ietRUVmuMJP2esMs8SQNSqJ9TA7sQrVZifUL2wqLLFCuHcBvRgrnGTt9sSDJMX2bLn2EK13JNj9WXs2FkBm9NvC",
  "key7": "3EVi49KgoLtefi84HAes2DGFA8B1ijmzaMQjCQ43eu1XVHRy45JBwzCeiZfhmdZrCu9Kb9kpdUsLRYTQgTJpFQjK",
  "key8": "62T8Mjx9AEKGsGtxwKLQLkYXispou6dFzCi7cqQvdcMBY4yXoLq4KXxuWZjcBkgJAhnm1A8FVeArbd3gsShLGJ8r",
  "key9": "mxVszNTMiA78hZHt5ZHz1kmUkU3sK3m56JqPGDkcH2ojQFznzMDTv9UJ3dSg1KrrayZuYoGmQCbmuit5gEGEn8g",
  "key10": "4hrSJhyGCzcp3HZ98ASwWU9hTf9jGd7svBDgUsAXayobGHAQvEiUEiQZYSLkDB6ZcpzMAriZALR4TDGzeJWoDDhC",
  "key11": "4npb3J4d6UdpjYm8kQDjbmAdiEeS2rifnNp17CkiCioyqfki9jJ7DBnxftsWPDHv5n91PT6xaxjjgcYVttkdpgth",
  "key12": "2XRfSq4UGJVmUVoTnKSXg7MZqX9MTMpkPn1kXCkVyMDmsmbf6c271LDrkc7J7zo52JDmJKWjr2YEVxQdi1Qxo1Pf",
  "key13": "4q1fYpvEQ8fMzDXafsKJJxWjVQUHMVSWeKxFGdHQPnz97uuWe5AdrebXWEfsRsoyESBpDJGcojSwJxV2ZDfKYWxc",
  "key14": "wuSww6be5278brUAmtVUrVtDRdgyqtbc3GMwA3CXnhjCoEWGKHjVAnyhheoUG41VEZkcBSzBweV19DjFdZSUhVR",
  "key15": "229vW3Wx9Z1KECxkayRpNHLuVDeX9mZfdeiGWiSUaaKTou5jEp2Bj8fFbCZhBBfR1QVYvCmsfBdR7M7VsVWkFfsX",
  "key16": "sXSs7zHvR5P8R3HXK8Zu56nUyzskFCpJdLMokpdW6uisN2q3aXWVeS2i6YPxfDD1evyCAnCjPc83mpgUbNk6d85",
  "key17": "3yBzjmwf887gfBUNDZrQXEy6ZAQGtmTtj3dfvy3y9fv11NuJrWbzVsxn6QLGGwwohJWha78MrfwzfEqe1z497RUU",
  "key18": "3iG1DEmNVYLh2ooCgjJoe8FW5U4oXyQHjeUG1j9T3591DJJXSn5QQBVjTP2GqwuQY5xSzstPSQjFb9nqEmjQ3Goy",
  "key19": "MkPg44yy5GGMMJZLjYQmvbAWiJTjKsqHhdTiiHGhfFohHNUajW5pT3PaKuk4sZiJbsKbiW42Bo11y69XKnMn8Pj",
  "key20": "JQdoaqDGFPaBXS9xv9PKu3C5UayhAQpxiAjpJy6tV9rjczDqFKbZC39avxaRjDUPQ8WqZRLDfoT4T9DeJsfkgbD",
  "key21": "4gGsygUtGALdEryCeGJbMaM1LutfRefRpTrVPM2n5jvczyLwduMtZSZM9TdApXtpwkyzh7YuhTB2gBcK1wpScc7m",
  "key22": "5omD9iTJ2hQFWEUEobczoa65xQMaV8WWpgjErCGkQgF1CTVXM5RKZRH3PxR6Mud3mBWpr7fyA66hVJQ4NQ6RerNn",
  "key23": "2bEfqk4oJeKJSTrgjd3xmRVCEDd7h4XhoaAAwYCaabzuv9eySuGbvufjSfQz6QFUrxaDpJ8r3hQo1kz7AR5vMj25",
  "key24": "64rHNWi3pLCJxCaFbvfjfJxh1SCL7Xi6Y5HovaGUF7Ghjm5wunEJaHKb6KaSeHPdsrQ2BSPpBaXax26FnUT41eA",
  "key25": "fztJr5SECmeaCxAinTLEhcgU8bPWPbTaddzUN9KHhCY4UzAVBByRuogGCQDH7451Yak7DKCRg4PmyL7ZHx2JoUD",
  "key26": "DBx1ana5VnGZ5ykikpcYQoS6f2xEW9FfhzQvbe5NTWAPgH6roNqJYq1LqraSijjWQnqmRWBTBadMcFBBcxgasZM",
  "key27": "5qU1hsBcZ5qQihBhFapKokqsUi7WryWiiZoW43WyrBgicK1jEFJNpNSaHy25P9wPXp9cQf8TZvCSkLSb7GgsB4FH"
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
