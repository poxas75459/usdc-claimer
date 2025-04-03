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
    "6YyqamFV4s8U9yDAqWueHNrmGMEgRiMSMucVtjwuS4xBC8QpmTRxjPtr86Y8A5k9fDRrZSRiY4d9uVSnJoC1s1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ht8WQFuNww1dBB9peqzg9R2ytLwRkMXRKEgHBWWaRb3pnRoddbo382WVaJq1TSmWKKvewLuDQhKR6pM2FEkfSD3",
  "key1": "2z5A9fd5VhWRhHT4AQ58EzfpNteWnHipx74PLzaPzzXS2q5rW322iDvHVyTkRGtaXaaVDmonAnTcfya9kctAY2kP",
  "key2": "2qAyXqvzG9QMPJHrys33FqXr4uP6GQGKV8ZjxyM63L8H2irMPAoXvnggQ63J9CtxvLiPpC8HXCG89pyBPaxE6V6S",
  "key3": "2Jr4rqjRQohksjNHknYf1SohxdmPZeRz8pzvhVDzNpGqLAq7nYVNHtGgge2Nb8wk3AmjFUaXQi8EcnHQZsPxy4zR",
  "key4": "3tE7akNrcmNHzfKyAAB2QyXAZ4atiPXErWg92LwV4JKFCdqrggLXEKr5ACJsPrspMC3HzfePuBr5rPuqCuFkA3iL",
  "key5": "5erF2KLBwMuHRKWyLdEg1wdjifRYFoR7sv6u3fVRoQgUv2PeDvr1dfb5PndZUqC4BoSihDFNDzVAcJK1i4SzmHFU",
  "key6": "534V3Mv7QS2M1SK9UopJx6HxJvE1FbafRS8MD89hjn3A7D3CTitYHbmwLva8zHhCQsk6SNu4WWqrJJ6cAJAXxAuX",
  "key7": "3ea8csuUFhS5Y7FSMR7NagSVJFS2UcRQ68VSyADy4hW5saNyW9kA1T6JobVXYwxoueNodjxHDN4M39wz8gEGhQ4B",
  "key8": "65bG679mow5EzF1G7nrFh49NMETFD36QXbUPgJ4kYT7BMw2aEaHDf4MMLJzfvMmGMJZshU5GqhWMoJxqKLh86BYS",
  "key9": "E74iQVV1Ffb57eG3A1n5QNks741gtEPbC4A9yQDfLTEQhVZccfKMcaNCJCykgJXSUCq8EC8weCJb5k2EugwxSjg",
  "key10": "L84rd7qqmRmo174x7to79i1wxxhuGUYEjbEUfKUEXQQmWVXaaFcBRda3rG52ydfLbtDPHXoUqkTXKmgfrUAV6Wm",
  "key11": "7Juhm28rDfbaFLQAadu3g2n3GcCJLoLKZLRQx2XNtvAFkF1iieeiJJ56j7Qot7RfU6Gdi48ScTRUAUjfZdezFo1",
  "key12": "5QAd4RoBPonozy7G5v37LtsMEeeHAnagdbbG2voXh8X9CgEWYqDpwLmmnbzxrTNknNGHJyYZj2JiB7aCHSJrBaui",
  "key13": "3WiqBMBVN1E9hsJZheTPaXk9H78Bmr3eDH6UdCkUwYziHgZJweEEC1JPXek5UWLHHcnjVvNpCw3vB9Fp6FHiHoWb",
  "key14": "2sEwAP6NRCwxSy9DbwK2LriwW3s7AuqBaMr38A6cw4ofCaa8cXBw7ZDDDbsc4k14wY75TDvkjK159DwNa653z7e4",
  "key15": "5FHUhfajFQw2M9egTbXtPMBcPbdoVRNmynFTXLHdFFrCdCNFoCx3sdowgSY1KNb1M1Q11ernHSL8Yy9mpL17hvd5",
  "key16": "2WW7YbTrtU7KmWAW1CnJvLgajKJSSLJCpAYgbKx1XzHA2gNT2z1gUVL8HoFvbTBVUmkVh7ia17SwzrfKM1jbarKu",
  "key17": "2FWVQSkVv6yzfyNwxBHCqtWWKStM2X96QcpaGY7DcmCEo7SEqF29EzuSMCf8VbCdhbS1wFKdQyL3udDupt7JWo74",
  "key18": "5PRyMxaBjfz27CK5UkNMBwYyz1TNR7YS2aZh3rnVdnAt1ewAszsKJinxFscCbLt3FcECgaE8rTchasYoaMcPH9CM",
  "key19": "4uUKdCb73Yd8nm38Z5HsJ1g5WgN9C2BgHPtvxAuh3apQVcCtC1RAJt7ntoxxPSFsRBgvVjjxwULeHoZBhPXiVspw",
  "key20": "4YfgZqn7DvxYpfkQbcAM8VC56ATrXcUwqDMPtd9odYpc6CCBVPnPNUhXsYXQP79xjWKXPJ3RVMZNZ89qEPSCAdJe",
  "key21": "4cLhV8k57LqPX35pr4F5fG18pxYH4Wyfkn5HbuGgKrLcsUqyRvVv634QYxRNdb1Zq1SncUS7Rokijxmnnk7c6p1i",
  "key22": "3ABJsaVySXjX5YexMJGNRVyoVsqApc5mGhQDKaUfzNL7L2DP89xefaU2Hh9DnHrTj3KJHySoqVzrViFy3BStYZ9B",
  "key23": "WABs1pAfDYYZtoaUM9bePgM139ej1qsBT3wtGwXnd2nzH59N4DUL3Gv6tuRwStY9sFJmFi5okGjj4rENJDP8f4p",
  "key24": "5jXBgCCaSB5pACFcdZ4SkCKn7JefUZkYwmyXu6VTXXRAHGh1hLKg4Sn3DpeMZG2HeqUpGNvZDCQyPBAkYQekH8Xr",
  "key25": "A6TLhqsdDxsUbc7Lvg9q8u5szggF4mnHukY7iPcAHERkzakVHMTWLh7Sp4TqzR7j9qfSewoZM6kKENVrmpFt4yz",
  "key26": "ioajcqUkzwQhHUdwmBt6e2Xc2oAmiiXZToCaLBN6eP1E8KNTCFGw3QEywHrTfk2qvK6cmHX3DEQD8XYQPwDAi8F",
  "key27": "5KjAcXG7FMGSYaj1pDNRNXnJmYh9Fg5js7pPKcUGqVyF5sMAp59bVfheVxUSzTuP9PUpkbZVUn83jbYjQzczH4zo",
  "key28": "eSw8mHjyrERFP95ZJAFrsHTtsr4F7KwbJ1Aebvgy8QskCPtqE8HnGnF3z8HsFsFyQnAA9LsJckt5Cb686dFhDo7",
  "key29": "5t456FqiCKcZbTG4p7SDrUAQ2QGxaHVnVRR7taNBBSwytHGv7Hi22MbWjosU3XdHdVdJbYYdxUAYLaQG2JNtwCh9",
  "key30": "3ryZB5wqGPSeTHNU4Gj7zoER3WgxDgUVk3sn9wHV15YbWoFZZ9ousjaxACy5nn87Eqf1FmSegEd1mFGCSYePyg1Z"
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
