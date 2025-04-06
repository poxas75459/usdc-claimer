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
    "LpHr2GxHqd56ZTqdVFTnmESwNQ4nfZ38GgwS5jT4Bzyc1UP1om2oArnoYxPpKYXc1ZMf5sahLRanmK1jDR1wiaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vD7E661FwVHnVadzoEXLAsj5RCoVchSXjQYVJqbtYLz6EnCZZDX8XHPSepTPNt9VRyykSJn2gVpy6CHgyBdzwBS",
  "key1": "aiYSbvxgFPzGWahRN7LQA4ZwQbUozQyh1cJBf1WWKuRLmeMt5QvPjhtj12uxFqkQ7tFVXjE5atcs3v1hz83aVJS",
  "key2": "5ciaVjsbRyK5391igyxVYeVmnRgtGZoQYtUGdLFa1uoV347WvUSAmz8uZJdpvB4fNhtCjUjFa4Kn4Agf9EHGpoCf",
  "key3": "2WGvosysPuk4GtqNkSK31YGKvhym6nVkmrHvarAtjSqazoW8pSJb5JjsLucrwFYWvYDfrdQHTtmCzPmnWvm3supM",
  "key4": "3RAF1P9DkQYRAV4XtTvDySyu3HcesGC9Ngo1WCrASTLqomdK6XGNvmD3eyigQ3aGoPqvVUJThjWg1m61BuqX3L8g",
  "key5": "3ix4kKcqmEEKLGiun66Ca1gKZfnkY5TdKuo3qQMbiSkcrfWSadTwfdqNq4bvYLXeCQTzsrgougQktPPqAADETLu1",
  "key6": "4DXHowEF1uudmWsY9BuwW7tCYpDqkL6ANTuvHdxsyxzyrAubm2RNX5kt4rU11Jw2gcnKG48hhKiX1U6NchmyvKvx",
  "key7": "3cLbc2WK749KnjQAaVLMoFmVZZu1gKvuDVcQnKs7kgedQ96A64stgwawRikRM5WDpWwRc67HPGoPCqDmCmLt4Bcg",
  "key8": "1C7t4zC6oGzHoR9zqcUxTEybq4nSonLTRXVYistMfXPYo14USvhDRMXXtezLrX9YMEvPtFU2mKSqqhRBMqGtJJ8",
  "key9": "2guHndKa9R2hFSUSpSV9KQobmEXBp3hDsbgJTEyHUBh31WmxggKym78uYVzmBcwddp8LS1sTD6jf9gFzNGhhUbNG",
  "key10": "rttxzNdv8ZjE179Bq1h52Dr3dzVsDAvF1iLc6H7RHFbyiTj2okiVasZX6c2knDhU4rVTVGtojA2JxgfadgxvXxF",
  "key11": "47fqmSpxymHvpybPT8RLoHabjRK6NfDw2szqWWy8Fk4RQY8PTnnqyCS614s5MJ4fSSM4ZV2JfUEELdmaykUZoUZQ",
  "key12": "w2eVnMDhxPmiqjDW6sL4oW7Vp3KGbTsR2dCnn7jsNYkuEi3yTWSTHvmSHu1mDcc6tusih3dr2AWP5pGSEXLPmkU",
  "key13": "5EgKtyxPdDeu1JT34XBAmYKxpAQFGyfuKavBAYxez3wxqEXC5oRpza9F5TLUDJraHnYn3TPppZwrtjTXx4iVyU1F",
  "key14": "2Mmpkq97H5tjhR9TTTywL23H5w6rUgTyohgRCyALHDtjqfBsnms8TY3Ap2aiQZVkB1ek9m6HQvjVkGoskj5EBHDG",
  "key15": "5whA7RTP3UQppVFUKWSPb6hePnjxzi4yGqhcWJhq2sTeDdeBwrx6KuUUVP4QXEquzGn4X6JfnJms6thhULkVVXj9",
  "key16": "3BSWRStw1VfgeWDFsrhDbjVEbxQhKReHcK1w5C1NgzdDGKadGLzFSGaJwZGhauHx4Vsn2p4RVmfAPpjpvMY1o97R",
  "key17": "pDyVddBDgKMUDwMa7nMBP9wpRozachytbBMMWjv7nKvRoprBLHEKCVo391DnzptGwTV5nz34ig8tqfSZk7kiEDw",
  "key18": "57f9mGe35nGitCJZn3TGcZ5iJ3RDTKqu56L2CEM3pgqgdAKaa4h7YHHV3mkcDiWzar7u9A29jokyepxDTfwRWSvt",
  "key19": "4KSXDA6q7HQ1qBy8njisUhCrWfp2tJKqAp29rrx3fNcZZvdRpdcfgCGqGP5MtCFNXc8k9bkULmLB142jbiAGb2ym",
  "key20": "uEW2cqHKHaXCtzsMpojT11CVpCEA28pV7YUc2Dvo6h47dW5zkn6bVJbWU7qmYEqhHjj3qdbF2yUQ6DGVeTKPh3F",
  "key21": "S2T5ez4UTixB1fTf2rHjXV24o5E2RcMGHs8y4ASdD2YVt53kp5kgkzND4Z9G9BQyvzDvGHBzc24CkA9VJCxEdRd",
  "key22": "jfvXJKNS4Ga5zKpEkJLv3bNQ8ZKTA7zxjmtmLyhhqgUh5JswtSbpEPKteZ1bJsBUrVu7ZRDSUQHkKc7qzSLfeV2",
  "key23": "YYDxdAtgxJfQpepWkY5U2Cuf6GAs9tkF39Z7jwbjwaW2S5ywuuv2WVCFrtj7hHz1VQ6WFbfQxbHpNNKCebwLVtw",
  "key24": "2C31jiZ3VHXZ9bME6i8BaS74cEE9ss9pRNMgdvtqTUWydU2uqkWfWtFFbywtzJ66DSHqS9nmZWjBunCCxFuADiLq",
  "key25": "26hpYp4DNZeyCdnYvfRUgPULqBR63LfJYzEEUtRQ6V517KTAhvrnreMDYrciZv2LtwNcxJYGWjhgVwsFkbbyJpUW",
  "key26": "2HbgVCFbUrGd5ws4VPhX2ZRYMKupkr3CjxduyCQFCBvXVqe7BoqpN8ouESZBh4nqtNRNASZ6TpN4gnM2kzfAuMZQ",
  "key27": "3tYCFGJB4fgCvuCFhxTvS3CMdUvmhrWn6nSZfiFyxN2keqgEXBaQtDgHf1C44YaDPzCUsN7GZNxyP2oJM3EAhqqQ",
  "key28": "3SAqyNyERioFAazxoYgwZms5PHwGqLFzdT5PKg5bWgYe1nV3sJsuc2bHhoBuxqCUWsuds4khBtQYd1fm2458tNfp"
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
