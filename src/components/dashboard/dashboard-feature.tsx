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
    "WykmuJVwFGMci3DQbQ8BHNyAqKQthZQ33o3xu5whDNzcBTohsuUhuJQ5Y9LohE19mQWcAbH4r3F7dk3LBxgzxQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AbGcG57cMBVA3mAuhYT1cdaBg7N1os92tPLVVWgGn71ZGtryg8ScBVsKd4xccqU3t7Kh6j9g2JCATiQ62o4jNPZ",
  "key1": "2CxVZAgwBbc9TnUv2CvbGW6Tq76GuirNYu6jA9oPS71HmYqxEwwx6WzHNocz8xufYJbXn5edX92DbcMyqZwfwitS",
  "key2": "4huBuUkm798oEqB9WyDQUXcydxtf1obgA6FVMqSyGJsti8X67cL7KyTr7eTVkuzHgS9u8TN1Ng8qZ27iG5tcDph1",
  "key3": "33yhmiPYMsQ5Z9XMfa7zMz7C46CKySgz9dSe9VMztKBTo9uTKrwUqXgWQMAfcDtgmFh8KZUwtT118DxDAk8cSTCx",
  "key4": "2sfgHzuCW741LycLiCEdzSMfrR6wz4kUGJmrsJc17Ni8PjpDSPiUZHiwV5bHwNbnkh7kkBwUydLdW6AKoamm6YEH",
  "key5": "NJFF7LhVqUHJgY5HdYMb8v7GtHUDMnc3VAtd2zymWvSLJW5t1dL1kPKjPuDRBv56iV22brnWwMxWa6FYAQDshN1",
  "key6": "3bXKvUySrLfjhwLR7cHkadcM3qrY5CzZZNHxh4FzH5v2fWRH27UBEkLxxUzGL1M4mWmdenLQ7d27az3GKVbMdb86",
  "key7": "29fBQVdp3PgkUEbSL2Ut44BMMb5bGmaJmcbKfNMbg3aw3qp8x4oCCQ9pciu84cHJcfStkRpNDFFH1z44kLUzpAxu",
  "key8": "4q2ZimFzB5aug3St61PcTv3mykfWXNNE5XC27AP31717GLDadwCHhJiMZDKMnc3UcpSBnxApSLbCt5xqCyK2YPQT",
  "key9": "484RHNYY2uLCMqvhUHiWp91i6Y2qh1B393mY5YQYCpsS1jrCiVFDHW4bXwnk3GXiHYKPm9f8i2DMV5U8PiUfbW7b",
  "key10": "26mEsqyaQXPJEZjnaz6KLUz76WLPdzTQP1sGmPps8FHLnuHuNTWN9u8oiE1BmbCiPwCLNHAQ8Tc1nQrdFuzdsXyV",
  "key11": "2fbNKF3JrQzxi8LLg9TB1dAswJebLusGjsct7oTszMTzYcmQLReeV5DHejadDwMVKyaHdY3ssgdSCXBAKfma1q4d",
  "key12": "3gdngFD3iejthBKYuAWQbfmjVL3Zh3eA7Bzicz8jAedoVZcPPM5aV9ekTpjgV6QdZ1U2hN3DRJWcNHkwjpQa5YVV",
  "key13": "3TMjdagKSdwK2tzcTPEtBg9P7FZgtcyPzT8uqVFBmRfbpyyDuGt3sYFaWEWrjMVobbHadPa6JebDGiEhoXF5NBZh",
  "key14": "5beBTxjNSi4BLt86dMHMdax4Tc3u1RYyV3fVdEoEFVP27Z4zYcxgp6NDByxN7XH2CsQyyYa5Ym75AnxTzj7VxVqM",
  "key15": "3hMsqkyr75gRvXXnHZYVVBXoRS9sJjpHh8MBPzgT4pqQEw7nWZFgYkcxbviVZC6g25zG39rP88BcS7ma14gyEuov",
  "key16": "cgsYDLL9dJSCbKnMpux3rKKpAsAHXnhyYsCNf8ceUTxkr8NJRXD2uhcBaJHLn45KBYcuWfy8xh6yV1PPhyRSsMs",
  "key17": "2MBPxSao21fXL7cNV2GvccfiKpnCJ6ZeVJWvvDrK5dqszPixrqGSxeCb9Rt5VLt3doJcCui5AMUBQGJdTtfKmLgS",
  "key18": "3ma6DvfyPBHJ1po15igZt9Zn92VWFWeWb8geHM8D1eQ97NHFMBvpMw5bQJERqb86wyZvWvy77mHUnchX1ETk2dj5",
  "key19": "43ePAHgWuoNHR2bMhSA3C3Te2VLudVviRdATKofrwsDQ7c1FDx2DzP6HQfd6KFdmtCmDJgLM6VqJNKeUCQCaQcmJ",
  "key20": "2eGcDnaRyogU69Aa5LdwiwWieAvffn1ksBX5QzcXetiHqrFv6q1r59ptp6RUzYzyAGhDY4eJ1eHJkwxyU99hGPnQ",
  "key21": "41zjFAP4wmoiy4mBZ9tGYjHKwjg5Btqsinmw9JeGu6hUdpARNf39yM6hEwKmNSCZZVP8Wz2edtE5c4kCi4G8KkL8",
  "key22": "55QNzxPTvYZJdvBUnVMtPXyJfcDmwnuTHkuVUarPuFZTJQdi56NpmgmaxB9Lyo8EYce9vGovUnEQUvrCgVVrDtTs",
  "key23": "hNNRtpvBqvCr8HtF4CFi36LAUe8ZxeM1pWSbKEMdA2N3tEgmBto36KtXDuJCtuzMQvwN9vLJafJAqnETsSVYiTN",
  "key24": "22ogbubkzrpugNYwpX7yfJHDwom2Pt5r7Apo64LMDwroE2XNRSmGGpBCfsJdvgQVzGHaBWAkjCF9qzJ3vmCxK8SC",
  "key25": "ZmdCPeZuAdW8cr3vc99yvnqUNSfehjWbkvfuN1oJkWcr3MGDjEfF9Xg59UGmpkAWPaGDe6N2yDDVwTR9KXXAzq3",
  "key26": "5PaKcjw3fMpXDL3uMb4KrgQPfvDWtGkVcz4GdngiNQoEBA1exvxdLCe9KEkgModoBqc2ixkwvEqzGBZ8ny2mS5xt",
  "key27": "4xHndmBVPhxBP7PedZD4iJugv3SxBNiybuag1kVJyFbhRAbzdujVC2DcyuiQSxt787fq4nbnTNwhwbBZL3ABKnjF",
  "key28": "4kkGLdLdYDdiKtJcEFbMrud6zMk9fFTVDsdXRRMPXCdkQcdAN3H4ttb4mffMiMnRtvVdwZ9rjDjYjSpy37q9JK1J",
  "key29": "gybdbSvDyPUstWkDQJggbogXrWuQdvoTDP75kQgewBFLpopfy7KsUpNaNetZQCr4MDamwuoTaePBv4hj391ncZz",
  "key30": "43WgPLHUWvW1bnnJGvCckToRuBqKUBVafTtZXLsudMsKquqHdj66mJSeajybH8WRHRqTArb5PBohNuk9WFYW7Tmq",
  "key31": "2dWiWJMH76JWtaXDA1XDxcr2PFZS1dWF5XZ6eKNbB2Pzx2r2q1R9cW6Epye9PGiY9qUyzq84vLKBCtwsonFXsmRe",
  "key32": "4TWr79sLpq2BKPE41Ruit1sJcvh9j2BMPZHVkvPBq5Dvxt5SbJsS8dpdvaWwHBWNGdzvFYSfYoX8uV16BqyMsoP4"
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
