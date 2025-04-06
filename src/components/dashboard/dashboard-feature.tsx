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
    "27aNN8apnAyCcsqTLVPQcPBT4m8fFog1ZiHqERqe2FiumVveTAxt6ZHEPbmmjdLnSG4L1WEDQMuxtyt6RB19gAY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w8YDif6ZP38TFcq78hi8LBZoa9qBRoarGvtK3EsQe3TreSemsG427FBCi5tLBqTFhAAyGtJPqiS3ddWXpLWJCQZ",
  "key1": "2siAZuLQPYAHbWTUt64iwdh8hi9BA7yotqV1ea8NsZTL43gjYNXTZmmuK37c79dSRK1wsUVYrUnJnFMLtRqt2MzR",
  "key2": "4fLCYAmiYguqmWSsPGzJxJBZgEUxqUZRNfyP53EZyex1TRcntaboTwie2kc3rNPhDmU1aijtiKTudR5n2ooWoLee",
  "key3": "4ivELvtEuB2vqE4rZEyVtLtd7U3gjBfqKmdzgggyxQ7XPrH3Vh7Kt9P6Wd673KKDsgQp6jjj5nFWVmTxQGwezmWC",
  "key4": "5Kdi21tsi9ShrHCveEuTKStezfcjNV6MNGidSRFUyLmqSCWggmQYBSQV948ZWXtiKaTdVWyKNgkt4YPY5CtjKyQR",
  "key5": "2CuSFBtDAyQr3pvMZw5jL8BU8HAtToafujgnD4UdGENqb47e77kLzuF4o3XfQe823eoewktZB2UUsZhC8rDvzJ4H",
  "key6": "3hekEAzRycYeAV8atp1gScn1W9B3VqJPmGPAsEZkBKtVgUyWqHYweowoGNjzt3453tQ8Gkyjj8pUm1SrkUweschN",
  "key7": "4xioutbeid2kpgxjLKy3bvH2CaBDGgq5VL2mA12vrd6vbDxYRRKiR8YWPYSDTyKMe7zYjgRpW2ztyJGHKvqhenKY",
  "key8": "5wk4h7ezZsaaAknsbQqWLqWXQuxVbWThNpKNCjCLob4SQvetvRPCiAV6Ra6hVc92njuUUoeCns2okzHCv8yHH2CL",
  "key9": "3M5EvGsvXpo45evWwCwBRbNc48bAWcyfNHELcAQLHo1xnMDzoMCCJxdZ2PP4NTEo3CLX41RfwdZ98iB1Ft3stajw",
  "key10": "2G8JLh5btJa3PrfBBRTkPJNRiBt5KmV411MR3ezuBkjsDwEW7DTzfKhCVd8MVyBbiwDx3nLc5cq7vraVZAh6h1Er",
  "key11": "214YiJKAnu4qnEgNXgjwdBYLBvpD8EYMbdUhrBwDTYjoEKzYLYX8mcTYgjNiMxhNi6Hejc8AXZPgUZWE1zDU2aSS",
  "key12": "62NhDXkvXoFnZ4euz8L6iCxGAjctAsaJWymSm55yQ3b3grkEjc31w2LNTSc99PVnLPDKHTRouf8rU37FLFPSfZyt",
  "key13": "3B8btpFGJpxE3o6DLVEn8EExApoGNLjHaiav5qEJSZXvTr2CUXyFuZBM11zuk7NpvuYJT9d4ZcLa3BXxAPpWDGDk",
  "key14": "RT6Q5RfT267tYTzkji4bY9wDkCZhq7u8A2UPjZ8ZrNpQ7JvHjCDzstXeZEGZbGdYCDBtJwdYZueZJGef7cEMHXX",
  "key15": "3hE4yHR3bnhMqZhQqAQ113dvnsM1PTXSY59AQ23vm5Ew4EzXZNyJfQbcmy9rPxkw1JzRLU8QreJgRuyNxH5frdng",
  "key16": "5qAx1R1Lv17nWgiqQHtRpDFzCw762gjra1SA2aFeeR9vg1zYAaU9vckfeHVJabeDqfjukTSn8K6kngxppEU6mkFQ",
  "key17": "4zBqYpK4mBq5rJHPFXhE6ESaLt1TvXiN2TJMxCw6VMGX7Q2q8uPmPYEiibjvfB4FSCBKhJ3TUGCnahMjC2UnDWsh",
  "key18": "5cpRCexuygruzt4ww16tAEQst1S49jmRVtZzFp1b84Dh2t9KrXueFjjrPUCWuS13iZM1WXKTZznRYLHx1Uih8pdQ",
  "key19": "5GXFSpSsbBCTRdqYYz66Wi2gSSQwPP8hVNgNzksQBdsPBnvaBgwVffVxmzjRFb5Pn8bq8VWn1Ly2zp33c3E6VaWp",
  "key20": "2Vfj61U3WTZsRe97Am1DtZBf1FwaEph2zgBd6cWX2wF7EUCuVEaRFoLybTrRLEqPTnjgJVV1NX3Xnr2N2HjpnRkf",
  "key21": "2feHesa4B9c4XUtC61zQxpXKi3yPAwRqvJAu8Z1siaBXmF73fMETd9WqLnwPTTuSuudDkZPDLtHFYLyqpQcAv59h",
  "key22": "4kGf94TtFb8YdfJTTRtypfoCgykir1Z5ANAv3sAueXv6vVpCjfenWXNdVgV3vQAdDCjejFR38cLajK71Gf87cpcT",
  "key23": "ZR2oNL3qhNpKDQS1WBmczkM3NPv15XPfqHDpnF2RS9wSSamgGtKdcfMuk1kAVYz338ExhVjRWMmmkVyd3S1FRwt",
  "key24": "4Az4g4PDL1pdQ5vyL4smeoRMk6Yi8uZjkHUQBEgVTuyay2bApZjcT3moJNbxiC3hmrPAQZn8C6C1yQ6mYqcM8KYk",
  "key25": "5zTjxXHwmhb9kffn44hJEgcj2fUj6ddbXBvQKGSF7NGMHSV262h4RTxxGQnpkbYusrG4e52Ni9CJKusqTu97WL5s",
  "key26": "2NDjeconyocyfAcdkpF6tWVYEZ6pH8sCvCMThRnmE3zZP46f3jyrxoi7641CoR7CT7J6aX7fdARU7z1W9L4HYdyR",
  "key27": "CzLGtFpSjTy7TD1cc66aLHoUbFHANxHAeobTnU7Hts5coMyZcGeAqu1Eo43fUyyJbocjWmurhRiSV9VpezJC427",
  "key28": "FugZa1yWXpHq12P6h4SSyXQVZ2koX3zDXXREGawRt546e3GdixJhMvSJD3HFndCreC9F4aH2ywmx6f6Mtnrmd5Z"
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
