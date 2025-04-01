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
    "3vPnNxU7w5uS39nnVEKj5snh3MR4LAK5CDDc1FPBVsa79AtonsByrbCj8ebKEfUWnzxfocUq832rRhJA7DZkJJNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36EvBwW3siY3sGfgt6wSgG2yAkctbeuFajQqy41m73pHR7f5LMBZecaZKabDpce92duw4X3oHe11Aegh9D2oN9fm",
  "key1": "3BcFxqWdA2zAYNCJd81onn4dQUw4GWzquHk3eCyE9tHwvsy3nczmPqP8eTDUoqLJZk6n8gzfkonzdFLb6CYgRQct",
  "key2": "46Le5r3D9DcKcXZmPYj8z7oamsFBJMk5J2xMLPFiEBxNQ9mFetSnN9UxYiBwtKMWwxjGtPn5ZQfK7o9KGHswHTQm",
  "key3": "5p6QveqMAsgMabXdQa4K7H6Fv1sEjDrQBJ8zdPdNdraWZqEYrf6wad2PQmkpHVdZ9Kx4AFUNBHkJjeML8S6iwp9A",
  "key4": "23q8YVwcC4EWqq8Ke7Xn2XWjzrJMAXHr29ZUugL9ARHH8F1AumRD7yejN4H5FpkXyh2TTTgricJakrmKfabDFWRr",
  "key5": "3Qoj4HtfHgw8dHosEpygjuoHdmkTkvCUoRdUp5GYPPf5H5JFwYdKYLvWaoTZR91dBhJLqG5J6zYw2LDQpQ77Y1hE",
  "key6": "5mTVLKBqqEgVgAroWzJ9Pbx4xzuiaDsib7u6j4A3dw72tsZXCUERUTdxyPvEEXJxJTMrNJDaF5cJsaBQcGuAuuPa",
  "key7": "5fzHxxEfDN5i9AUpgCMTkLpwR9SaCesUEgSmtwJ1BdzuGpGSYE9t8XK5apdsyHoR34KLgmf7c8ZCkkHSsLp22EWa",
  "key8": "hMaSBH6Qzitub56AnMUhRZmQaXcGZJL4dWNiLJBVmRNxHepJN4LNqjuLDfC8MH92hM4yYmVnr6GruhG9b9BDgtx",
  "key9": "2EqoPgQfpCjjaaVeX7c9u7fm4pZprkSHTYK8cr5VBTQT56JLfuYCX2aJVyDmaBf6LAgpajhXUhUw8xMRN4GDq7bi",
  "key10": "4RezuYRxnsDipsJzownFW6JF6ZsKivsBhfFhQQTQaEbJK26SjfMXqaWTpjVpWYAdQpto91HtqVuuuKUJGYmSDs9J",
  "key11": "GVXH4GUVZ4KHTodtFKYkcs1SjAm7Ar5S6i12z5JeFZAAWCpbqU7gRpnH8iWXZKVMC8u6r2hD8QZTJDeUcvPLSME",
  "key12": "5ZYBDjTCcdHpLup7vegvCxookFDty9FdfpM9rMxNNNoHQnUKnaVqUMcd9j1mCNypj6QJYBeYQfdqE3kyRyFsTH55",
  "key13": "3dQADcZm3LwCLrRLHGaSJrJngXnsQr8aL49Kxctw99YYBYMGntA3dSs2URZzNaTin4bQK6qS4c2WhJSEiBod28Jm",
  "key14": "3W6otc6bMpJAouWbtTbWJ1cvKX9jEhtYboKyp3zi8mafzg3FbJSRPMtoj8SmszgVX8Jykf9qSHwtfKEnvjHYyz4g",
  "key15": "2Zx98HfRyeKM2yimUjZqKVHohsNe18mNhKocSaTCQpxGarD5MgxtLNgmYFgDfT3p2LhDz4yS7ADJyyxYrTdYzSxi",
  "key16": "3kdBLDmohasEWLA6Wmra4ycXTRYoh988fNicgMdtkP233WotqWboqdBXhqqoqSMU4XqsWKgwajrNBiRv6qWW2bun",
  "key17": "3wmrPmofp8V3tGnDtEshYpZ8q7cEpeDXT7CiwsuGZUjBTyAcR48LycMeA89R4DArnU38MBx88dEN2BJA3Trgjnjq",
  "key18": "2CFBg1V1TrG9Vsz1udrDYNr7czau22uA19cwzxLeF1iFdgUuhWQYzqdirqCRy3xxA3FGbCKmbmYQVZwsH4u8AvQv",
  "key19": "4wk9aXMMch2cx86EqoiRLUCereNE1a1gtWqisNpaVJCnCu4QNK3V47z4mvBYxebQwMGDQaf55SyB58Ltz6ciMn3W",
  "key20": "33aBfVeh7iz8c8QpfP9PkzdF6iyHFsDvWEJkkKtsxZ92CRMoRqBUNF7hA9NjdUhvSisPbez3uxf3ZC2iv63ePHS1",
  "key21": "rTKkiXG2g9dRSXQbVTUkZkCcLsBANkkXXAjGqRMrPdzEbZyfzULSnpegB6UeRhWVCDQzJSSeXBswfs8oTYopuQn",
  "key22": "5fEQutZ7JVHyby5k6TvbF1WbozyLHaM217DfVhb4K8sgJr9vw1JLHJ37DqTPT2r4NUz8ckZ8w6h4VjPG6oJWTkV1",
  "key23": "wFZ1yMSW1xzFMuDr75bT47UEKnAUqiMycRDbymH6aRvC27T9Ro6HDXb88hUYYtVV9gR7UcuKjZHK59XJMNCQPEn",
  "key24": "2S9HMYiwRZKeT87LPgc7dVq2hyMvAsy7AcdCta6nqtVULrdyespBHGAeetGrYTN5y7uuAthG9jYB4vzSLYsKGgEN",
  "key25": "4fJtqG3JXnQ9sT8YtDAwvb6PQjbXWqQjHnhi2bHscfrQcwggX8SUaqVLPRqFwXpdthsXnN52yuEGAMABKP4KiB8f",
  "key26": "5ickAyXavfBQJw5m8BbJoZ3VSwvvGUEqm9UULobi3pNnpq3vqcCy754kGCYoqPV2rjXDokDBYsDBvY8GCig6Fmmv",
  "key27": "2WYSMzyN48VnJwgsqrtkudwsWutoQvq4njADcap8RwE8fkYrGyX5qqQzVc4KH5jfV9pYoXzrHK3BJGksGmrJcNoR",
  "key28": "4bHtZsJxJeLKBVM8xU5r274zZ6hgHVyHhHz2M1GHavAucDJfiD4uBnvWCfrrsniiyNuEk7AByFWDFHUuWpmNonUn",
  "key29": "H4DsfknrbH3T5VSsAdUaznmt4FH2irvcxhDzNkfmrLspXWoPqaEFsC8kZ4yS1QJnEwt4Lzd2DyNeNXJk9ww4ksx",
  "key30": "2o78CDXgCKRxfdmzDb2GRSUJiHdisYt94hErqqMtbBhALK98ZbVGb7T4WVnSeQaXbVjRyAkfWxw859Ss4DuRU8vj",
  "key31": "5VzeB2nxsRJUAhG3F4pKLGBJueybaU7VKkByJ8aQsQGY9nVtsbSD65YUCHNmtpXD4ikC6RUG747KNnPCdVy5q1Ua"
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
