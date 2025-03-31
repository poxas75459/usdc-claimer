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
    "q1XzVsu3B2wYLv3yjYfUAsnUzpzvEex9xftAVq76u3XdH3atNAdrgD9hRMufdhNxzE21kTaaoWKk4RycF6vGqr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E3GUWSCyN7R36AsqtSReUac5SYMuCDvj9iPzpUC5yJjMmE1wFgYak92zhj2tmTtvWFzxfbmtqu2eVcD6FkE6ouz",
  "key1": "3TYopMCWm9gqo3g1ywpZQiukA6atwrRVAEAzWXmjigK9EhzKMpgt7cg9W6iw47xcM6oR3r7iaDSYceUJsQu4weSh",
  "key2": "mgfxGJUEngJDDK1d1VFDV9opcZdGp9Wj2zD7CqrDfYRpsFngs5Z5GbVhvf6FRmpwJo9E3H7LzyzWMgj5M5D1Fm7",
  "key3": "5g3tVWYzVq1daMQm65jt5F8hEyUkdEXZZTQoveW6PBSF8JaJ8tneyE8j65e8EhTtCFNs4Fg6twxK3r64zSjDB7Dq",
  "key4": "58R2cMNgX8uQ6meYtzsFZa3YqAmXzS4AcWpdEJZLN2Lt6nt5VtBWU5ULRMYfb6EXCZNrn7Z7MFDFyixZLhLfr3MZ",
  "key5": "2oW2rRME8mhPTk9VxZs9ZUDENxmPAhuxW7EEESpMJ5guXRUtd6tvcU86Jcw8XdKjkLWyaN593LwwYCEAukbCAY2g",
  "key6": "3FTHWXt47qb5CojN6S4EVmzBDX2RM5vro9sJAvg7KgZzqzZXTDH47Kpc2E4uD1HZBsURD2diZjV5ELv2JQmfR3EY",
  "key7": "4At3FjKYWveM5mjAPvFiyEtkHYvaS6D4Su5XuT6a355UWKUrD1xzTyXH4K5p1Z3NkT8gR94Y2BP8EMSiACe1pKJw",
  "key8": "3tVC6jtREyKiDLQMbQxW7PV4wxNWumsqx9SYptUKgbMj5CU6JTDzoZedsMJPSmhnSakcjzP4H8Sp81g1KNkAdQZY",
  "key9": "3f7S2aVRpT13fkJeBtiNeqabvyFRuLSaBQC4V1a4fgGixiyYyWVC5oBVE8gY1VsFK7rArr4CmWZP9JTAt52gN5Ab",
  "key10": "3Yzw1Bx7pkZqPcWyvavP3P8oqP8jus3sKFxMgkny99JDWXvk13bEHaswu8rGZJm32G4KEujSNX8wiEHtbafDruCe",
  "key11": "4PZnE5CTHpgXNjGM4hbertNu6qSW157E5NjYYTREANXH2vVhEzosz1mePPeXoLNgpTek4rpEg9BjfKSvQjCP4nSy",
  "key12": "5P49Xv3akLFbmArGj9Rkk4Rx477h54ULnnyoxWpvrGbLZwgVwpbYMKrCjoeGtXS33yhByCdoZ2nPSrZ6Q6kWBBqD",
  "key13": "4Va5FPjNXaWkQgvg4TRoXsS8HXtjrHTXwvCqniwFsDjGSaxL254sd3DijHzawbrKFUvuxbPT4DAC5f7dqfNk3cH9",
  "key14": "3HMJ9WKhR9CafHdEwWJqtvoGRXYrX475PAFRa7Fi9mSwkxvTJ3BAQ74mbjjenvNbj9z45D6Gov7T85HCkCrcyDzw",
  "key15": "4gr1ecPUsyCtShDh6Jv5UnuQqbA9mkk5jPyidxHNykedWu4JVfSW4nr3n9qjsh3F37xbewyojh446x6y6KJbcbGh",
  "key16": "2giE3jCJiGypH1Vi9J2QJbQG2YKgh9Nb3HuMy6pPNS2fq2MibGo2vGnyA6ZRM6pcs6wK691fEz9dCFswABXkRtc4",
  "key17": "3azUPVmxDajdk8tLExTGBnhhQiiSqzdMNdpXhLj3a79ZnNBQ9NAb9dStJLUx6FG4ey7EKhK75SswueX5hyPLnzWu",
  "key18": "4w2Cr2deVdLCQWtJu4878tx79RuevYroBwBd9fbMrTjb8oY84TT5UKhacV2jqtfQCZPykPLX4V4nAAVcZEFuVye3",
  "key19": "32C32JWHntjJS4UrdD2MBw7dpcdnttawGgeiqcP6RauQCav2H7B6ePiQqKKtSmscEQ1rL7QxqwTCh4o277sD2yJe",
  "key20": "5uQJAbziCQNwdH4C1BzdWnSSfDo3kYD9Z13Ttvqq8nnavoF4x3o78Txbo3xkZeAi6LDTSyUh9EyDmvGaPFDyAkz4",
  "key21": "645fp6XLLiAeBye51KG1ZUGc7GJzbdBLv8SGCxg8QZ7uVtmvtfmM2DH737D2tsYeQDeasAGRHwVsYCgv3tSGSK9d",
  "key22": "2TMLKjdrrNCu1kauXA9kBFjFnZfTEV5BBtMtorBhJJNMPHn3aPLT3XEFYW2yss8MMYmS4pLWHZeKFi5qGv4SA2iq",
  "key23": "28SY5ou62mHXBpzZNsKk4dudEozYugYDrTZoWRr5eZZDvBytGNYyaYZoPKTEVNPxrrpmMHcTdQmMM9ec9LYeeVNa",
  "key24": "4QCykhicDkPwoCU1EwyZ2m5XZZLr5a3Kk9yX6t32uCTA8nEhbmqodpCLm3rhQ8Fq7ngFo1Xv4L4aNAQGj9nzq5Lu",
  "key25": "5jnntF9EPrXnCa1yRMPPFUhy5mLDacGVz6MczWQ3gBokfEDtr1yKLu8tgu6PrPYUmn7uQxJR9XWvBZtHoNhk1eBR",
  "key26": "2GYEoEWq9T6gP4C7SiKZqegP73cucGtJJ5cVS2h8tghLttN7vYhUQtLSQsoUrF8bzvngzue11zhEucWSeR5hgdmq",
  "key27": "5SRGwF39jtrRyU4XZ1zkah2VxMUrDAJe6CFEpeDU9Z49CyKgc6YQZ6Hyj9P3Hjqm2VmatuRXD4peDqtM7CKrrFm5",
  "key28": "LoBhYwGEPuCdDBosD1coes6mFraUfGwRBcNmUntEihrSw1adSkDM2wxXacCJV6dx1uMXBcedFBsibBVePXxxEMk",
  "key29": "5y65P1SPtkfoTnJVskDCAmcHYRHuFWPmZhRujrxsnaYypyPR3uQ3BSxtkRTDtLiSJEKnrFhdTQu7Qs76rZxXShTY",
  "key30": "5ZEfrBu4HPPhuTGhFC3w17d8k6RS8qq5VFQmzPABt9iDi7twqJxTzVrxf9WtTVTpqDLcfwqZPqFKzM6gxUJHmjW8",
  "key31": "3Y4gNyCBRXVDY96mvcoUQbB1pX9zTAb8QwtZt3yn94Deuz2v6idKPrTjUwuTPRxdJLkg16iC5nxiv5Pa4NxbxajU",
  "key32": "3NT7NArUebT3Z5VNVy66V51Pj3DTD7NSAG9bdZzUhKaMBzARtYshPmYKKafzdqumEoqJjv1cM51Ttqt6VkbzMYYQ",
  "key33": "3yCVhgvB6z6p7P9a6BNZxdkKqh8A6hytJYGfNsTovD1FXpcchbdHkmt3TJH1WGojWuUuQpMhJPAn3uTYQm8AkFn7",
  "key34": "5nbUY8cJtAUbZGZyMDpM9KDyKfsaHedzmjUVeSZUrMT9SyEAZoUUqVkYW2gsAmQ7xpoW6knQCa2qx9cPNcc3Y9X8",
  "key35": "5jYB5riWARNgYQrmJGQS7sMykCHrMH8Z3MpXb8cBA63oCLpeBsFkWAmvVkfpza4L2gQHiSFZX5SZp8hqpxNqD9at",
  "key36": "izxBUz6vcvgTTmY7mKh6yKfATArToFNXL7UmVBcQXao2cxaQytSUD29k9zk3hyUbx3t5rPStfQojunrCZGNDHpW",
  "key37": "3QfREU6nN56aPcHhUMdyqEY5dd3aZpx9RSGxUUm789aHqWVhrxocbSc6XtNp1vNRYSSCUBX8cVb8xEEL7zw6Ehny",
  "key38": "4ADVfGQxriPGTdJiXPFjnW8CWykFxcnFHHSPz9DCViECENXbtWenP7aU9EKk9KLx9NkM83gf5HrsaR7xQt2ksL22",
  "key39": "4Mz6tMWxcjKPLFwAxDTcGkwe9fFW9m7MASxDkrp1ZtE14WsmNYuyz9cGy25kX4yVA7W8w7uu4e3PwGSGUDaaS7S6",
  "key40": "3V7HQo1UWVFFGKMEWmUdVgAq57T2CiiH7sq5UCW2kZXYnoKnQxCTPHwyg7DcK1v2FMTfbYxMWsGARWfw59ecJfQx",
  "key41": "3R7wNopJnVPAuUrU2gPd7jK4ZHMSEGfzshd4t7q2exTpFSNHAx2x93cPx56Vov4MWWBbfBNuQwCeVGazSoUo8xAH",
  "key42": "2ub1nNA9ubFmRJSgaoVnHeiK9UpCe54v2PduirJfmc5aTa8SEuKWYo42WFvBCzxAim5pwUQFAyKSyB457EuH1qGu",
  "key43": "22vgzRovX5ZCgRm89wn7RxYJTV8gqXXmrrMvCqULaQVnbTwcboYWWCWFyBNxdDYBJ3i3YvMzknkZFXF8wdoNx68U",
  "key44": "PNyQb3dzemZb5YCxtKGpBcnh3sko4bVPXSuNw96o9DR15jAJDSMEGRgdhzXRx9XKES3PuYYu2Nf44pcbF5C86AN",
  "key45": "W2ddxb9x7sCrzBPYUAgDj3ZsZc6taxS7GJpiPksTwrxMg3bnM6arNmzyGf5UVNkXUD9xeSUB5VwLJsonh1Af3ZZ",
  "key46": "4LCpv3pHNTqhSrE8kBAJqR917QzvMtd5AKinp6t1mTfQ1TWr7G9h4W26DsdZNiGakZobRJa3FCL2Fp4XpvLsUpNT"
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
