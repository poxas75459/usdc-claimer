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
    "2xHhxcGVqyYsrpXjPspfea6oPKzyhLk4EpgXsYjh1VRB8wj6CfNuPd3QywjF3feK6ARZPKA5hocmcCvdXEe1mBMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ceCtWGyuPmtYgXHeMg5V3nu1wL5pxz2jj2QMM9FHeeLtZsBSr8FTfNjFaLcQeRCUpeffTQVYmMkkVngGx1eis6",
  "key1": "2u8LTxJNHUPABER5YSmV77pwrFczwnUCWrGnwb8Nbynifd3NUBSDq29XRWa2RmyAkttDuYpLafpHdk3BTYMn1YMx",
  "key2": "2rdTmpCCjhqLv21DbE7wtAZCKecSAmZ96H5LqkjebeCcpcJPE59jQVdFex9mUB8ULhxCVmqLFfpW3Zb2GZDLXgdj",
  "key3": "62YrSzMviqDssY3SwjaT3xT5ZYjx44Rr3dDMYjAB58b2MvpoXGQ1NnLivrAjdNhyJbGqm79NNR9mh2JsarryCuSu",
  "key4": "534S45G479sMw8pPUXTWn8NaDf7AoGWu3VsAe2z1Cm3Lr8RETrp5F4xRaJQNYisjb8ecaySTXfGyrATrn6nL1M86",
  "key5": "32qMvg2YseDwvBFMsGwRNoKZy4FFu3S9XNH9gp3w6RanNUi3m449Ukw4XAEPTm3zehE2JsPMLXAvgCrb9gZBLxYZ",
  "key6": "5iMGyHtB3xESs5mJbLWMkrDq6qzmwBuAxh3pwNwLG2vUXWuEXq3puBfePYfWntPhUfMEsgbAhgvvhMFAmBq4uDA5",
  "key7": "3e4mqtV48MsJLCcixQbyo7QZ6h4h6MUaSWwoSXuzfuSRTq9WtVx2skKpXrsqvMNGRSxA7cVSSGEmonYZRB4GbxNM",
  "key8": "3Nx6sg31DUrzStr9vNcSQWgwESPa15cPmwuQDFwDJAWkX9FCX5BswC3Df6QmdkcrLYcV9Qq8qPaKAvBoyjj6KF2u",
  "key9": "3eojxat7qKfW9uE54EnU67NQRXKhn7RmtM29ergu1dUm87e6Ds1b9fCfMCg7CuS15k65Lm3UzsMg7ggzbLjzjugr",
  "key10": "2HnC6hRvfSHXf2LqsRBz9B8AZ4XtNMU8RdQuvQC2q2xfDugPYDiW4rkBwcgDHQ97w64Tnpx7ouzH9h7aWyvxkg1U",
  "key11": "4k57i4nJKc4zTf1TvQVrEdCS2SA5dBbk76e7x58swHzgQuDTtaegrbK8yCYWd2RJ8SKuYzCnKQ5wbdyNcCBKpNJ",
  "key12": "5admmvJ8cXso4MHMveZ16JYXoWxmLCr6NUXy6FqMH1JUSdZJxwnL6Zp6ALUqRCwe6UXVpkTgGrt8J35d1JXviqVq",
  "key13": "W3C9YunwzdrxcWYewxSwzcr2f8pBnTppjf2cHzPb9KfMZRxsmMySx9h9wdzVgQXbYtYYRJSzPhz5DtFXPQ9jS5v",
  "key14": "51cgQ8aiT9W8cfnba2LBXkKQwkyQ7D2mN8aVcTD7QHZVVgCGdXSRceH35NWhii6GgEyXmsRqEKR9u5pzc1nJNVBq",
  "key15": "EgLtBi4amkZLPyapaMh3LbCsG1MjUF2PrViaunnp7jb8sYs4D4y4Tjn7Wx3KdEJvbNHu1AMM8kHktLX4CP2RCxw",
  "key16": "2Rv46zsgKXf3PeyWJEZBmNK1iXtTycYQnrk1ZYWAt7svSyzPghhDH9B4bCNYVj3tDzjLPLgGwKCNb6Mix1ptWrF9",
  "key17": "yCH3fNJX2uY4nsuqTxswahGdRZxYezxgi8sRMe7VmdEznF8swdvsbt6urLFzXbGMNM5xkmFCxdtyja8BoZo6pCT",
  "key18": "2CyVt3pbvu2CfrzoBxjnoUDSptVJzoWDx4h4UimZVYrbUqBkzDXXMHQd6484kBEPyYpQGAzngRsehmknUnqsqcfr",
  "key19": "4QFNmkkquhBB8poTfjFh4NuDG4swJvkWC7DSize1deRTLuWPiXf1QEh4kVSpnRBq9woULxi6gqgSQrfJukozBdRE",
  "key20": "247nG4nRiuHjZnReWSGDVjLqxwPbSi54N2mpgJ94feq4iA55gYhX5r1CpZE11FnUvjYb6eLSq3c4YnvEXW6yNAnM",
  "key21": "2NdyZpyTsP9sdPL5BKcwdmhZnP3QKffASZYL1ni8TNWFsgLFn6WpbVQQaK5paqhH2gMuGyW4TWF3E2kihZ2Qjapb",
  "key22": "4zWhv1owiGf237yhQwy3B51y1WBriKR5CTYc26T5NNDaFy815mFXe9rWkE3UQEwNVMhawme7HTGVwtaeRDqAtd3r",
  "key23": "2J9VsLpoCmhFi7AahpMxA9asJP3TTaKjUiZwN1Xd7JoRYkYmkN87ejSFhH9h3WgNJKEsRDh8TkrhYbEkAaJysj37",
  "key24": "3PkVuuiwsDggtZHS2JTa8baB8EbjTkbDRZ8HMbZCRUmsovGA51gya7mMc5z9321rmHYLgmGTSaxmZtDQB5VJtNne"
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
