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
    "4gnUAZUoZ6aQqGE1N5unmS1Hd8oqdV3sJ52mUQC6sCpacwgV7QnU42HqXbFWWBZS5qFEt2cbpS9iLNgcDXA7QgCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PyyQrsKBs3utTxPeJSvd1oCWMfbybq8LzF6yTBQutDRzw95keG6BKEBM3H6GbtGj4eF2QJCb4r7TvHafMnX1zWw",
  "key1": "2HimXDj6kRzXp5XiXvtUQUV4BES91yX6U7QvbwCc1MznWw4PVU1Y5u4wUzEEFEmeHTQGCa3A1Gu3xCkRti8omVQK",
  "key2": "33qqFBmRqEoykh7jLpBnSRLiK1HKFaLrP6wETxf2tmMChkN6tbkZ57zaCCdeY7suYXZ4KAdyb5uW3z8zGX7fzTnH",
  "key3": "45MMoqdNjvdgGcujdWTnXBRdG4EJc4oucvieXQupxmU8uRvMhDUTppxRgFoSM1XGUnKAefizHASLYFFq3VASEeBF",
  "key4": "32XkgTa8AHCGTzMJAEwHBtz4vYqitBhG9UUXgruGf8U2kC6nxf4DtKBuHb3vYRBrB1zzh1YBbhzGFqs627XquoZd",
  "key5": "52om8wKKaQTCR7ajFJxd74Evq71T9TwKgf99JtBEms4RwdfJ58kwNUMVt4jp3CFCLZSsxAa7EiToASEvKtcofCFD",
  "key6": "4EhWX4gNywbGUwwojQhHNq2cmWT74S3uz7ZwP7MuucWwG3ZCkNUAP8h7Ey8cpcSXyRTr6e1ZscTrCmrMzZ61RdUo",
  "key7": "3z5nL2tdd9jtWMUG2BranJHkW4qLsGg7DDWrcayvYQ3T54xbvx8Jjp7346gfcHyoBZdsHRK4BEAGRn5jfKwtPBGY",
  "key8": "2DGqrYV56sxRoLpsnEKeTTh5WdDvFZNWExed7VtVpX4gSHg4L3yZEaSmBtRGM96BdLLY13wKTyB4MoifW3zyG6s4",
  "key9": "5NcJrsJUwH3L8uQb6GX3qQfN1joNTNN16dS8niX37dxmgGQm17qvjuVuNeRtZYcxE1ZK57xH1mAMdofgGb8RghJZ",
  "key10": "9vanHLpw6UJHH7JAkmPneCXC3xywCweRn4PqZdGh2iUhMsHDcunxh5hL1SNKxtXLaSyF5z3znn6Jfzr4LhuVynZ",
  "key11": "xYCxK2MPtfpdSQ2s4Qt1wYPNn7ro9cFuhVPf3rFZd47qbuuQyHG1ggFKwRtP8VVmMSxKSQRzXQDT9yAATwRdXnc",
  "key12": "3Px5ndRBo317eop2PpCShkJvgAuKC9XkKvP7B7LcZj2CBui4kk6YB1gwK3cpt4FC5C5d67bbMHun2Egsf6YhRtpS",
  "key13": "3GFrQBNfCazvqG15gopDvNAZ9rgMenMyNKHgqMx3yzPhw1vbqYLBYhdq87WvPgacG7wszDuyvPwprKieyivfdCfD",
  "key14": "3Ei5ga6JaWYwHGMfEwKQgcuQGTKe1BLRbvdLoUV6N7tf5yDn4Un4YNC1b7pzFDbbBKtbgimWHb6vzog8ZQgLDN91",
  "key15": "5q9CS7LQhKskEh9vUMEQJf5ujrsHehHZTt9EsbzBCPuHJGjHMeQPLk3L37QDM7UYYiESPrEdtQLcuXyzdcdX63XH",
  "key16": "24i2VqgKWjUMJJrdn3uYpgctVVmXUNjrRfGEv5ufEKGEWhtajn7jJYDbknWTJ9tW8WnuB1yRhVjFjFttDi3bAmnQ",
  "key17": "2qASrP6HiQotwPHQoGcEUR8SdUoCq4AsgmiE9jWNmuievKSPjbwf2yyrL6VmD3METSYNYt9EkXAWeyvMA4UDFh5S",
  "key18": "R1Hy22J4FnzQCBzmJN1ypobutwyh8srSr6C3A9GsEaZjKzH2TuSd7WtcaaQSUymivGQ9BMFLvHNUtMpoMbpp7T6",
  "key19": "sU3wC2p8PM6yCVMe6gv3aYjikxugFnpfk8oMuGzAiN5YgNWFYuG9Jfu4zsSn48bopvGqu3CmWmuWaZ4AEbBybZK",
  "key20": "3aqwLGuyG15z7WmDRzK72qxiPjAq6yWALgqsSc5hg5VM1NRRS9wqh2YpMJPEs3MVKtgURfGm8g4i1gr78Ttj19A1",
  "key21": "5FYjqVMJGXXY4GHjPJm1WpTRs8NevbPkVuk6ocF4BgDpRw73UCaeWH4CskKywNiqQH7nxQYyg3jf8NBxfqMZR3Zt",
  "key22": "2QBTpJv9nLu7YntbHnVk1xmotnF3YHKLnd2SYRLKWTPT6ofBRgCMpM1SFxjTEH6yrbKDXfxyeuiB3Pe86vFuEN2P",
  "key23": "GNQ3pdzphuxiq5Tmiz4Fkf8AMHJwfb2NoWRhRBveDU4uxqT4bLaPnBspGbe2uDRGirLwyr7WtDWc5QTu38Dtkjj",
  "key24": "2moQQheJVmnma2H53YSS6igfaXvvJzNzSH5UGGd2Eq1p1nrtmaSpRJ4FT5zDLwp7NCbLg93KHMAgv1N9BW1PzmRp",
  "key25": "2w6upHa7Tr2ouCziSiQX654MbgC6zLzdSVExC6Nk6X3iQRWoCa93bnxFT19XfguLxKKWaUNv6iF4jrfX62NFRjCV",
  "key26": "57e6or1S9Zq19AgKK9igKgjavxCxZUP3U5d2GeuQvSPpf1sfpyTe1jjTGyG4LCVw8Y2yp26kKDf24t7CzH4gZEnS",
  "key27": "2qFuBRincJJUbjdJzpzGxE2SyQRhp4KQ8EpVzL7WgG99yVBj7xzP192qBHux6z7JCgT9N7CA3eG6HRLwJLNmkGKn",
  "key28": "395UxDbgKVYcctCaRsgVJuwqnqDR5MwxSRW3kBjcgvqMkAvKbp5epzfMW7sy7GuDpjtTqp9UQ8hGKzyxDzsepjBo",
  "key29": "6134TcP2bpASkYJe8RTPwbk9sbfGsc8W79Ju8A9Dpc4rGPBAWKgc62Hzgzg9Wx8wBXC7nWPrCCu5RR34RFkJzb8d",
  "key30": "2vfbviRdfUyvAX5SGeZHLTirJhDEkc3BdnataPQ5K2mgq3yxq9jwGMD8qPGHgTscsNppaDqD7YSteTRqbxtvZpGH",
  "key31": "233An1W5WEdmQiDAMFs6T9x3TB9HiQftd2UGE9DGpvkdTrDxMEooBwfo6iiog7ujUMcov4fbQ9HASmsGr9nMfzs3",
  "key32": "3dsrSmyizBNnwvoPFX74VWMkWCMkkTvnyp9urxQZ6XQAE45VjEHbizqBykzYdTv7gjU3cCaLMcQrW1PWC9bSZ138",
  "key33": "5GqcAZ1mi9yiN1EEZbVeW1aKXwMb6yt7ed3PNAUq5Yr8NRLAKADM8aSZCDomSWgCgsLmYYNboZ2oz8ukQvumTXsD",
  "key34": "RoKchHv1pxTi4eS8c9MnWRufLj7qbahqMhYZoA6piMXJgFp4tFaoxyZDziXCgsJJ67stmM8Hw7Zx63Pv8QUyh9N",
  "key35": "37Zv97zXX2S4t6rZKb3JZpGRC5iJZE9fhammqzZyGBJizAgZy4fkyRt6bAxnRtd9eSSzRaYEiU1yd4ZWS7AZUB1Q"
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
