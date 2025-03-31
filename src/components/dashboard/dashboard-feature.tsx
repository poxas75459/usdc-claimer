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
    "3cD2jC5KgaWysrF3vm7LDbYGyk8xvwNR5JzXjXaQ4pa8nsn4Lq64DNCwUnkRXyWo2DjXhYNogc6KbErANemy6zBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BXpvKrGKe1wGm2VWCNFLrsQC5WREEgsiTk9mZXvYyVe4Vfjo9HGLjqLbiT6eQMPnapdZrUCnJHvHYgbDVt1hxw1",
  "key1": "37KPBRy4HdSYNLT6DkJ7QA4y4dGdUoQGLJfgEf5mZnxVq6fzurorGQXFQkqrCbTRZXK4yANXxU2wUw9DjC9guZuD",
  "key2": "5pCiko5JVasQfdxcApiY1n6XjdzUX1rch6h3WTwsaLborWHrzmBiuTvWzs21D1gvf9ndfrniRZdAXiHfyNvL3zut",
  "key3": "44FeNxyHom5VjBAUrhWJ6m3Qpk5uUWXU668JcaHtmPR1koGeVL8XLheYcsbmreP2iJGrVLsbJzEuix8Uy25VEosv",
  "key4": "3NzSuyzDiFKNb6VizfVppsX1TDTEWySZ7rTHwst3zaRKKkcBczCUPkkhXw3DevaeChHDKcC4eRCjdZQMoNgtrV4p",
  "key5": "5v3XMYMt6mKmfgCoebasWXeAfdTFJLHCjhbRnuLkE7WxUHemv8c64BEwPjEPZoa21XeNo3vUW2v2MfU1e5VJhPfi",
  "key6": "3f4bjcC36Fp1o12V9mcFUb4EycPrsUSVH5SQHYp65ddEE4aMH6PC7sDxDeP1rifxRmwEjEVW8e6ardbjmiMwSodP",
  "key7": "3zPH2o1h1SURFwLqkazGkxGhGpbsmwkyPeP3Ns5jtWEExxxe2kDojun7Rz2LHg7qRxWa9SoWCstLNPvfJR2tyoQ1",
  "key8": "3LuZJSKw8hzeNEhE2rSDbqZKrjpbSsBNVga1ViV9hgVyBMEPjz8hr9nc2aBLLd9wroCJhLESTZzZixfu8BZeLdwL",
  "key9": "Pz4ar1s9zHPZMyv5LhMThJ6iuL9fPCTNPY8FonXRNnMgjvMXFgE3KHi1tWKpaE23LNNBmAfyjZrbi41oHzsvsoE",
  "key10": "8v1mJcuP4AA8jp7Z7E79sUiPafiu3tby75Kaq2ZfmpGsjf4GF1Fq8i3nps6TtGRvYc38zYWzKkQzhG1vdDMMsvg",
  "key11": "3pevKhhATEAqgqSVQ7szB8p8G39HpLgb8QtsA9ANgBGiZuALBxSHPMzBMcAT2ah8KvoKUgcR2PfHr3PD6xeEN9ma",
  "key12": "57mtbuGBcjp89bvNgs5v6sT4t9Ui9HRxWByKtmWn3kMMxgRdpvxQUEWZYwKbsRnc6QYge6hhzTFN9cW2EGG2bErk",
  "key13": "4p5Piv2suQcLMfMVTv3RomJeszEcERWETqH9APJYwo1pK5Qexh5XEg6hiXium8L1X6q6xnFu1ZY3f7rJ4czBYFde",
  "key14": "3WoVvJSC2zAYmXPAb8tEe4RKc4HYDHAgU5y8Gqft6KrJhWDySFWxNTgJnRoWqCNUXngRRS3x9LiCdgiJwpfSyBJf",
  "key15": "4SW3pSXbrkuf6v2yZw41aDbwr4EQbYQtTvAtxRRTH6HWyAFrrAx5ypizcUWUYF2k3YZj35SLotmKcvGRHyRxLJyk",
  "key16": "o4ZvPvAEAiqViLTKNupLHCvrtzPAJcqUtzsfLLbueixoMbYbrjjXhddcSZLTvaqv94dBTvvkbYw5ppTDWiQYQuu",
  "key17": "62mSmtzNZRsFJFAuynmdaBPMbRfoJQoQpvaVXcVfH8cGg3grPLa2jwv13Lrih6x1pLYT9mv9nHCXRojmKipNys1M",
  "key18": "45qpd3YwVEYQp9eEgdn7Ey6WhhGRVuHFvRrhSVbigb24ooje8APnT5j8rUeVvGrbXFptBGQdYs5ToDaohfX2JvUJ",
  "key19": "3SAfU3uQsCpqkCbfYS8XPCMDCPHdhLRm7yBfh9izSUgvxPtMg6kmRpUqhhs9AHvFuqQaZEBz2w4YKsD3k8PC9bQR",
  "key20": "3n1PGpHd1HtX1DLWSsDJGb38VKQHgvw1M6rwbimBt4HwL7wy8ko6MkAsLEZYYq51BZPgXrvxgNthLQoggRSkbRrm",
  "key21": "61vLV2RqgebaT3gvRH7AP9guU33fW7CYsbX7nmsbsQ7TwypJ3Me2K5mhtqnUFfyxLde5a3srEq6FFK8jfQTxxi1z",
  "key22": "3GaK3NXn9S4rFA7zm2QV7ihDEp3LH6KWtC57tVt6N7zEDu6mm1vsMicZqu75xYRNwZksnrfEYTvUqRc2YEMDA8BZ",
  "key23": "4csoxb7c3qBZtskPV4ibG2CPLxdKsWY1ML9wYwtqjVR1frNtbJtDQ2FTN9CyZShysT5EDt75Ld77NUE2UYiuF99d",
  "key24": "2d2UMVRfT1RkCkNcWPQAtyfPbRNCxkrVQ1d3px72PTuREDwiw4ZxmpEENEkREnPCoKwEhgY8TzChVmkX5rNNNYtP",
  "key25": "4q9pRWWJJsTqeUrHYUMahTPvCDvbwfoevXrJvzdzTVTv8ymdVaRV8zG7sSYr3SGaWXNb3qcGzpKZvemjewYr9vCu",
  "key26": "X4XgvcU8JaexLbB6wbDk5xogoJrZRDfgAnKs9fj2ViCJkcf4NfoCpp27fbMxXu4y8yP3hYvYcqUn5cKiNsGiQjx"
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
