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
    "5wSjKMJgax8rdEk9sGFH83ZetsoCyufBGcvcnNcQUSRpEgxzwgJXRn3XfBnzBdkY39bW9oSEdDgJWgoAcaJ5CZUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g2mA3a8wWqBuLQDa9jUjguRuCxnwJta6Yh8DswUgwXj76CD2mzTBarEAzvZeRAWFQMHmCMGd7YWpuhkr1sb59Ed",
  "key1": "5k36pSDihfVJHzKrxTDPy1CHYtMCd2V181kL1uh5Ypc49ABPGsorysvTBicSEPNPcd2Tv5h3KudEevTexPVnny5g",
  "key2": "aGdCZdWgzrVWBA3VvfBThxh3Zpd9s37DcUr2t3eDyA2AowXuVvJPpyy7zvuafUQ8H4p4R6M69CwXoPyZRZJhMgD",
  "key3": "m7c7zJgyAsfgwS8u1ijLYJY3mBXYrxjT1XtCXh3KpgEX2trcFiPFqLLrAbBiBdLg2RUnpwCwK4ooATySge6GU8E",
  "key4": "YxncgDssqjrAgxGQrWzfeNgtHB6bUHJjTeQNRkeP83Ne5Y5iLr25pigaxEg9hHBfKfDfNQKrbvFvwZa2BkQGAUz",
  "key5": "tm8B9L3e7ed85M3d6wberK4MA46FrQY8qVV2f3vM59gkbQNdFku9uAuFVjD8XirzacStZfHKHr4ViQA6P3jjx4Q",
  "key6": "67eBvBxrHEyPAroDX9EQHotfCPTwkHZEzAJ84A15Axm8XKtA9gUL3EyZ9FQgguzGGGKxMHXmqBUQGGTFGxrY81wK",
  "key7": "39U5iTrC9rY8mGNWTgE67Q8tTyzGuXkUB3PK3v9f9WXAEq2VR7CFRWV38JVzGKFSGU9Ko3rjeHJ4DU1t8nPC4FSL",
  "key8": "5Y5uf9Z8hrxA99Y3PWDya3nLMHgsmpToQFj3QyFNcYH2MRFEvihCWGhTLebhQ9qvLUCqBK2tWVVRschuhYvcdLmT",
  "key9": "4AdxY8jc92pfaJbjkjnfZoZXMngAw4SS1hQhP9nT9o81fRYQwp4UUeBS6XmUt19f2xhfgAj12TbQPEey4e3eU5VS",
  "key10": "5w63FGAvuGSSLiA12iAK88SKjAXoqJ3bkp1XQ5vJRC9ScRGSABLxyWzkRxNYpPrUUemDmaVRQRGxZeJ6vM3aMDHv",
  "key11": "2E4acUuH5kYVLy3sbwf3szC3PrBYf4sh2ZAyxPfryYkQmL7TTrnY6RHegYZbra8e5eBcRwoo1P7Tm9jVFzY9w3Co",
  "key12": "5FhQvTTFyRQjyNmH5rgQaEehBA2NVTdzTfbQ6yi88tx3njuVSJfNbQLNYC73x8pGDgNt8vxiqbXAHVNHu9xKYMxB",
  "key13": "34TFYDM4wk95uAjRowZ7AV3SmNN35JrauhMthDyaG6FnrjQLGvQG4W6ZeAubwGtujUrgWxpdjTxny2MXPPTmtqdw",
  "key14": "3Stm1jcBNr2VP4j1W875gxHFCbARD6fVnVJTaCjWpZu1eKLnaNPigC9segjmebZKF6GZVBzq3KqSWQxh7gwZHFiT",
  "key15": "59cMY41CC24jbqCrjpnMxRPj45caCDVySXpNtvxuNdgQym6QbBxiAXwsPAaYsaJQxPWvARUyWHvA9xx4X9fyLeew",
  "key16": "3uyLRKTX8qCMSdNkhxJR7E99r5bczeEZQjjxXo9pWvat589kPCYkPmZpKTmkx831rwej3hmxWntV6qxfH9eYanCC",
  "key17": "4awnFJKWZA35x24TW3JDx6XPm84womZXrzkQnRQGWXzzaKdhCd9ARXRax2a3dtUHgKTBZ7CvaSVXRs9PJDybSUUD",
  "key18": "58VUnndNy2u5sCLNMp7aoYN23dMmZFfpXJBfpnWtCjRfhfnPxMcKCYSJDexRBwebZieW4ouDypoa45Ldy1QoVjmW",
  "key19": "4dBBY5dyCJ8HQMkXuicf1tGR3H6YwwSkgeMxHA44Dp8Y8wm5x6LBMRTdJP9LSpzhSyCeXg1LXi1M5z4tAT336oax",
  "key20": "GZVuDHQey2bBu2PobRRmh8fiwvkcuuNPHuAqk6tuMbRbbhdCV25bm9Jo1DuwUkSiLgLX3bARpHXGrvhAFENYLsQ",
  "key21": "55NKuPPD2iwNPFA689xKbackQWn7NrTg4WCJSWZLqthAw98EgzHH7p94X7Hq2Wy9kwvVWH2kwbKaLw3FFyuD7DVv",
  "key22": "3KMWnmeg3zioUeUYxX477WHcjsddRBNvRR1q2Q9GVX6MGhpGFsHUDFaaSbC7kg74143zxM2bF9JW6D1PeK1Fbe4e",
  "key23": "323EtnguagJJdB7n9GD1EFoUyw3UohMwrw82XoPXSLanDoogXWQUs9nfoXJv8vVLhDoaHjHemr2DZcBWV4h1gt4t",
  "key24": "2ek3M7NeaXXB2BqpRFXtnNvp7ZZ6GUKgRWS8uHsJnzxS8D6ezEY3fKuA98AgJBLcbzZWGSVgydCuv78spCEqPv2J",
  "key25": "3uMkkSYgsQZzc5FkGq9zsqKZouW9cES7xMHpGr3TBkbdb3buBX5PodLubw5qJ5UuvBqoKoGvw3nqTQwca6NK1hVB",
  "key26": "4hYfNSbviNXiTBfAd3eyqC8y6wUHaTcqmREAddo5dw63RmhXpJpiLBhDwGbBsh2AkJPViZfWWdtvR5iPqu13srQV",
  "key27": "3qPhoQraq8PqS4VBq9zknn2tVBcYPQBJUBFjQPMAroinsJTsv9Quw4HDgvXkEkNuatA57okgwPuu1XVARezSXvQb",
  "key28": "4iHoHCATgCm5q2TJNikUDu7VaDaCkxj1RRiCwQYV785CPV6PF1Nh3B6gSFHntZ26CAyoWfLT6uTNMzfr2RSBczg4",
  "key29": "wjQhQYUW9TGweRCCgJzAnPq9s9zVEDzGUdYkPQ8kXopsMpwJsQWFWEoc7oPejMEnWykVXyZszbTXkiReKD5NJjU",
  "key30": "5nn4o6kFBhL6M3RodsJivEaFNTxGwr9aeAqKs234VyrcXnURa5a726VVrkYz2jwL65xz3XcFQsAy5Bw7NXT8myd5",
  "key31": "2cTEZDPoBu4uarDNmF2np3UP4m3wvrvkFSECLVKBBiVTYp3UVEPVCYPRSPp5sLXRwaXCKLyZugt81vwg5RP8RM1b",
  "key32": "2NxAs5CiKRdi59dNGCjqngnC9RdqtMNcvUwjmnSyGrdAT4pk3akKJR4WaUifP22ABix1ouL3GhK9aCc5bho52fPi",
  "key33": "qj9n9Sgmq7gVNgHL1zGHp5SNmZYtDb3f2mFG4r733u6MeEtvUFZrbNppJTLNg4pYNjnpEHcLNtjbLbbA9qmUgCV"
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
