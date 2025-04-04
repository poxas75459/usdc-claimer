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
    "2czRYVLvpiAuEFUvsx9pcyverXQgqEL9L5aDdHtUHbJQonuS4ivkoFLYbWQ2UH4ccmBwovDgFtXupBHJvLoXGxMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "78SbbxSjkqWdCRMbd9YdMvA5Bv7ihdz2VfVsUKYTgnKS3KhzKWssQPitc62R3JEvASwVr3Q43VU3dpkA4coUpKk",
  "key1": "4jWBGDvpGzg9woGmnPpurw9KiXBAC8yfsUzKqqqVQREWekjPjJuU4ofm8bovDTyLweDRGWud9HKhC9BFf4W7HtGF",
  "key2": "5m6gAsmg4k2h9WXvnDPrw99YL6tgjpm7KFfazuTgb9WpvUV36dywTqNDEX2nPuaEqaU6XCjrQ2F2GYAxrFEwe8Ze",
  "key3": "486io86jPwPjj2gtxvvduW1Hpyh5bVA7DLhP3JsKoNN6yyyywauASPostfbv7yt58Da4xPpGvxq8iLUrAJur7UX4",
  "key4": "4aL1RUYBqUqt6BQrWBNH3ft6KsCvaGtR7adVJERbNpM9ppfRqSSie3ZnUuMamX43KvJjYfCmCTJQs86MfKifdH7G",
  "key5": "2cgma6P4HMegGJXoR7dXWSFGaKc8ETwgzMyXaDhbDPwFxzgSnR5bDn7C2uicULWHf9x67T6erqod2HrGxYFfacyA",
  "key6": "23aec6akdXD7VYeb2dGRcg6kTDj6PrFFkE58kjve3GpUyCaQbVtkFoq2mKc5gWMWkr4ehxExpCUca1vTbVv7N2T4",
  "key7": "4AMGRmjRzDW8QdricJFCui3TgBNUxbLC2TwCvoresDAKGhQi22ecYSYbeZVSd7FFTRskfahyqdiqSgXeGN9GTRdK",
  "key8": "4QhSr1tAfjcoLxXVfBShRq4dQwhsfwxoYWVpH2iB6QguYZqxuB2D9uaNe5XnLeRuc7HUJSSoMMc5TPSgoWv1o7Bf",
  "key9": "4LEWz1bHGPJoP22G2X9vAyJooexfrKcWCX7ikEdTdBQqFWuEb8RvJVuV7LsLmwwFhsvPquMNvdE9163m79auUDEd",
  "key10": "5dPdUzBoq7PXHVhgrgZDa1vRi6NswxfmdiXZHWum5ToUmqxiFXoKbPkiJMs6DQWd211gVgFAFkrgWoGVfLwzh62H",
  "key11": "2mRyho4TmD7B2MvJB17D2Rnpi8KxhwFMcv7zjQWLQc8RSyNu312Hkgs5Qr1CgHVQx3ycuLLUMz38maedK34rU8Q1",
  "key12": "a3A8mBJ2sWzAFP8LwfguV5uN1pAXJSzQJxPh4oVfh8GfXXEUjUkrME511tGrwLvVNKTiJyME3yhiJkQAWRQetD3",
  "key13": "5dq36C9dsTv593wXcZz3wvt78C2GrHVG1vYXPPrzwuATrZJzfrsDuTLACGiBHUQ1SSSmwVRLus1Jp8CXWTqLE1dr",
  "key14": "4YEYCyAzwu8fQuWFGo529CJfZWPyNPhqRvssAdXhYy88AikXgsWePpPDY7rpSXzDhEkfG2ZvnTiaEh6rPwevGv7N",
  "key15": "2jPvMteLcGiUer7uy1wb9bmppEtHoNPr5aoBmFeKSpxSSR6SAjBJN5ypEWoTbg38vTtwqPnxHccjkQpa8wcBciVU",
  "key16": "qrtRm9SGRBDLKYQWcFKHh3QQkjPfZ7S8P1RaXju66gkwcym2f1YoYuETydYwrwRTsRevyUW3TkBaDkYsc4VQzci",
  "key17": "5hgE4H7YVwrSMfLv9SiakrPz69yG9dBq616wQFhcb9UTTrJscz8VNpFF7FLHjmc7Xgcqvk7rwXAvsgvdykdJ1v9R",
  "key18": "44as255y3JbCng3ac343UUYqoa7LE4Bmkp1zxsnqZpjAaiqUNcCLagQmBv3QZGPQEmF4L34L3W6iTJiKn6PcdYNx",
  "key19": "4dMSfkJJHbMVtwb3itC1BbgZC4r2rr5uU6rgzcdoHShN4bvwpX6EnBAxBiEBoPrvHHNANQME3jG8HnYNuGueMdWd",
  "key20": "mbUr1uHPx4FKf1fvu7UzGY1eBSpwM6pPHcz2UF3P4cxJQTsKbcFGYVk6gMqPaJM9hcuCFBxD8xENNEQRjHctW1n",
  "key21": "4gu7k2d1xbHcx3AfB1hE4DRFeYU9EyKvYyPwEJnL1EZ7pofahY2YUQALJsujEGZYLmHUVJ2jzmhXeJ9QqADFkVwd",
  "key22": "2KRSZJQdSBBw5YKDqsvcqtFBaVb3t2yc3Lkmd67S4JNYNgB984EdaJdQDzSjgGd64qUH6zdqw83hwfHCPNWBJ7db",
  "key23": "fGFgK1jKpT3yTw7DRdEnaLh4LuXNNzaMwmRiYhsmaWvyZ4KW13hvkxAvzzpkvACBj4gPjjacSVn7PRpbntU4f1Z",
  "key24": "5aF5fvXDadW6ufYwNhRadqXjcyhNNb1EcTf2UYY5gmzHJowHADw4QSh8vcMJBAY5YEDCDyupeAwHLrcbhRJhvxzH",
  "key25": "gaQAiCTecW9xZmzvBQnPKcUqBnesqYNB3xAyupTANrj7nEWYhTyXM5Y5GT4js6nmMCa1fdTituRAtGzh9DTZGju",
  "key26": "3ruPWUnhNts27o5nMpaD7Uss87s6X2ReU7gbfeyezhbQtMhfgeGwLypYFSxqUVo7kaySaZsB8MqqG8NLaLM4Par4",
  "key27": "2F5urkjFo9BHvPWiYkKGsdgqT2noujuy8RQrLvDF3j5oYxqztUCfDfGTJyTWF8Dq9KhBMKmAt5tRhwkYm25LASnU",
  "key28": "cDFHnj8SbhuLh8RFgQraXqndipdVdv1dekjJbQzFzbRQ1bviPLRB1n9myYQ4ZegpJEdzYByopqij4Cq8pbFDL7A",
  "key29": "3XzLxGNcyfJvyJ2F38vAC4ye68a9oegAkW3WHAHYL1ig2BS1csntVAEe24ezLerqZexn35FyjjwawSnwHrVbBm7b",
  "key30": "5Eu1oJhZGYu6peLx84fVomheHVbQqSieJriy5ngCcmYrefjE4sAt3TbrPUqHnMtrTrFPncuM4bvMMHwYCtyk6YLG",
  "key31": "jNY3FWDGWUVUim33fxC9pvZfU6b9GP9AKkXHW2fLUGVgu9ypSWzHgkFgBo38zuDbEjZrDesaQT2NLeCvRfP65xF",
  "key32": "3HVg7fT6CL63YcRpXwdHHyCLGCrAjXhe1y7P2aHjoGZwQ7C4AwGCrrYH137jNtbim4uxwBPfFq1aD9UbpWyzR35a",
  "key33": "ht6Hi8gaXv9W8JAZLdiUDkC9Mau31MtNo14yXHmzJQpFEHRr4TCRtcVrcsahqUhWA3kT4HufE4wgh4s62fes3G5",
  "key34": "3hgS6AEZ8JF8UyLx2iEU737RRCxMdGrHsyMFVfyiacDckWmPvGUULFnrBg35jJLEy1KrCF9aMZ6Ueu2iNNxdwXCL",
  "key35": "5jnET22fYQMusvXcCJJpgxNkAd6WkCQ2XUqu11uJHXZV1Rw8M1y9M6iKBS8mPQ7RFuBFAB3Bnh4kSFt797HZdk7D",
  "key36": "41RMzAma36rs1VsP7D4uJBjifK816EMFKuVLv4FWJM7WBfxkqnW7CxZ4fyRGYrEkvyzkWd9VfQKR1hvo2JWEQiTH",
  "key37": "PmT7atKEuniYfm6hh63JCnnMS3t9AVt2xCMbqqUVjouoZZ3Drp4VNr9zJhLJmCUs8jkNvev33FCJ9qzE9A5MbWi",
  "key38": "5QvQpFq9xauaRz9mvNbZ2Xceua2SRpNBBvkCaTeg5L9CWrdX3VcYxmSKgx44WabUjUMxyDFwmwCRvpoUsHQkMRwn"
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
