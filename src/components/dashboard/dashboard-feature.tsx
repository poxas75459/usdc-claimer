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
    "3h4FwhuzNueSqiSTpnRHDQT3Un2MWJxfFXUko2yjcecpEznNVeqxUyxn5tge8YtTrpwisoRwAHx7Q1dUfAvs9Ro2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WgrXijhdLkzkbHX2LRM7Lp7N3hor34xbnSibecm3uG87yGeTh7axGhkpg4GhPsXUrRJE8bkWoWkYoUnf4rjB26N",
  "key1": "Bit9LFBQ1xdsSCjj1X9s89QY2kRdEzfrNWzM6wgmJjzanRECSVBPLwyrQ4wxjkCVZ2wzWSj56XVNeYXqeToaDQe",
  "key2": "51Wo6ASVv8uQirpqLVgbeXi4QCKPSLNDQ3Vd3gv4SwavoGhyqj1kj4xguLLwHjn3b221RnD6YwUDnS6nJqo7fAaK",
  "key3": "Jw9JBthZucg5TSy43vM2FvRm4dCR6kKeo8D8f5bgJydUkq68Cjmqce5RSpP2NDYqgp3j86uLt2siPJvwiEAvjXz",
  "key4": "2BBJt6vLbzEVHqQpQHyaqVLsLNDEaYm1bgJQU9wky8qZ8y62bXaWpHfCsiMpm6aeC3xyp4fBnjy9KUwBbUrmwFe2",
  "key5": "3FA6VqidF6QfspqvtiiJwtor8d67xsAUxMtN9oj31R59bwqAGv2NB24h3Ly4bAHQqkmt1Xf86C5GowzTcdVXeyC2",
  "key6": "4V1fpg4r3WB8oXscWQnC7gw7jvHScSrBWSPh7vkoevphZKWLJukTwAY26zYsziXZrwyaJA154x1PnDWPBfAT97Ft",
  "key7": "3FfUjKkj3PmXkHGaJ9d4VG7yFiBuGKuMm54Vg6q8bpc53tiQpXZ4fAJS4eRvPAjv7i25SNtyxoy2PA3aY76d5QtV",
  "key8": "3J6oQD12y1ZJA7DK5PFu16GtfVEq4Y23EjmzUhqKYysJE7JEWiL9zJ7zP9UWw8Ke9E9YEB4zTK7G3hqoheu8H3HP",
  "key9": "5Q5zginwt6RanfuYRtuwpcFyPfVEcAeMFMb1fTR8GuHXMm5bmaoqrpPXaoGRcSawYWUWD4rx2RKkPozhqiufSMKv",
  "key10": "HvvWXcYL4RczMB8gHYbEay4zuhE6WuBCFzubaQ8S3ADDt969MecH6VKR2gyi5EJuYSrc7C5nVHdi28ivXnA5uv4",
  "key11": "2bKAWGBhF5N5aGy5WscUQK8SCa6YqeqrKrYv6zQXfFADND3vwgV6qMGPi92hpvJTtbMYcVkpGQHcm8pxHFeh2yrE",
  "key12": "5z42vbxi8HBGVp2hBSrwhjDpvqfDr5SaSRy19C1ewwDhkfyV6bvUZcmeRoh592H65aH4d3y9z6SGBsgpkwAd3EK7",
  "key13": "22g9xt3theEqyh3cBhe2h2Mhc815Bze2YJBkP7xf5qParkK74jnRckiKnscTS99B2GcPaQPbvqLPcciKFSZ3SgRo",
  "key14": "GzFWVZwdWHvzNRvqrDk1HrA6r1c5mRVTPqPsngQcibTCb7JX9UjHbziWx56awY8SXxQTLDsfhCgE88BeG5D53wn",
  "key15": "2Qyg8SvMr3fsDUcDHCJBZJD1sjByd3EbwemBhB9vEsT8szDwC9vNbPsdGRL4cQ3DKx5Ftau8yG4RTcTcE2hmXnoz",
  "key16": "3SQhinsctzU3BrGUiyrinoo1y7SLrJHBQ9mCBNCRzTpmVtVumf86xMSh8DzQua4EPsjfZLYx9869Fu86wqdQ4Jyr",
  "key17": "3nTS3HXKe7FWGdhZyoKc6BZ1pnCUhGVJQW7czh36kfTsg3bfQj3GKiRLsHgSEC3Fi8VRaqAhsQdB9cbDZDmoKCXr",
  "key18": "4AQMUHWJgujcAxxx2DvxDjQDc8jy42QRuZRSKVTncrdRZbGrWQZfzK1aHP3AuAeGWZq8hVxB3YK2khyqXkhxCa4R",
  "key19": "3B7xvDe64giaRJ2cm4ydKbfmPrCvJC21ChVCWtB33jRGtLpJ8RMYjmAEK8yUEiU7z6Q5C97ToF3dEcYGY95aWpkj",
  "key20": "3pNktLd3ixLjeKhXqd4MAaVAcmgX2gQiuCcQf9r1ZGVXbtbesYHrQV5yscaiykC7yHGB9yRYqi9NEk1h3bV5CQsv",
  "key21": "2fBJAZBoMJFoyeZn1Rhk8vqFGN6frayP3SxxBtf83teqaB2yyNcwUqdR8zEVvBuhoFMoQ2UdCv1CeRjmrJawvN6z",
  "key22": "4L9qKjs9AtnccgzxkudM94KzTCDpqdTtPsr1f5sMTnnoC8p7U5iChwXrin2qU5m6MwFikSUxqVCVNsGbmRrufRpo",
  "key23": "4JC2LHNd7H7obh5oiF9L9fTZ8Jh8KV53cXHKWkDL4rEK48UjLK1gp9B1BA5bTLs1iYnaPtQemNgNmjYXtr2iSPT7",
  "key24": "45JryesoG1J5iuwjyCeZmHaHYgMJvhRPUYJ2iqTKAG8NgvUDSJ1NTJ1arXZ1pCTHVxUf5xeDLvkwBLvtuVK7C8RR",
  "key25": "4YEkzPtgcd1gJbkwBKoE1GXGQBUvXeqpAhbKibD9kX26zSkbQLcTYHWX43cQvLy6SqXjTxTtTecVcgLifdDFAWQB",
  "key26": "66dijpz7E8X79GxHAH7Erb8C27soq5xQJjAjer8pukt7G11uCTxTHdkvKjbaupzKsFvdUU9dEfprARs1rKK7tegk",
  "key27": "3xGCNR2svTKwZg3XXxMmrwhRVcJpQMnjvZmb4rHR2zbs1oLbKYoe2YD1W7KrtBbDqp47JQUCi3xV3YNz1ALTs29v",
  "key28": "eHg6soQkiAsUwCqGLuQ6mmA4wkeiJQGiabvMMNdSGeBLcCQD6r12hBL4GGTs5ZHCS41M8JA3CgMbGytRgxrSdyZ",
  "key29": "5T9NPFXU69X6E43eKAUMDnizBXJjix38oAG3QqsKMGCZuzuPJ1Uthp54X5FGuffeMpDbRYhfN18GX5DXntMJEmhq",
  "key30": "2wPqBxZttpF1bMog74Rt8iPRpMce6jATf4midSpBsEQqiQx3gPkDJF4nBhkqez59J5oX2oeFmYFgv1vhyk3B86jD",
  "key31": "vF9cRN18WLcvaYtBB24G1nCnRN26yvUehrhAizw8Uw5DfXqGcWujJnmrCR8zWfq9LyPeR9jfBRRw9rTxyhCvn4P",
  "key32": "32ozzKGYsXD85yjn3tQaM91QV84qxj4sApkCUVMykjsdtccWQUziM26Lm6HNVqyMT8qyH7ZfWVcbjqptih7PDggT",
  "key33": "3SohZVxqk2ApUbmtQZd5dusS3rGMxCmaK4iAyguLQm1TMbHrad2pTpXsj57aZ38M4HPCQSfPSqA6LyGwuSCnCWnB",
  "key34": "45CWWYV9DtW8XWgpLY7w7jeTgQKKy7hzmSNK86Gw3CN7qFgdwRPPqE5SsPN8mDMVXNH2pPTMCLBKTJmeK1GDbukj",
  "key35": "3YU3DRAShhfr7MrwN1uhUYQBr3cTPPmEVckXF54qknkdbC4ZTDnRqxYar1oKZqrat9GkGQZLFZ4aip3eHrVV5rtF",
  "key36": "2umo8KQNR5gCfVFBqrEDCxDeCAJDPiGcqmw9SFFkZekHERpAjB9yP1AmPKkkNDtNJ5G51FmBx8HPD2ucfxtMKaHZ"
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
