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
    "EBEn3gUDSacNQa7rkyQYx4J9vhDwAaaTMptmSnVu1uvcaca59uW6J51MjXnLJcWtURABt53DXuFvKNYFFfzP65n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xKtcbK3GoHRVxMpg6okLD1CFAt2pteArnGaz4Qxia9ovAoHRA4QZqdJuCQ6VCrWB9mReuYtFCwxes23cWn1vxEv",
  "key1": "4DUb6yw7UEx3Pn2Y8mMy992jfwEvHswum7g53E3e68M1p56xHaQfdhW5PSZ8SKN47tqFBMJyj2uLhBUiyCeCd3EU",
  "key2": "X6v1ZoRbfok7K5vsqKuBEF3dLVqXBnLs25h1BuReZznMU3cLYUCU2jj6Pf2YxN1vfY6ZUuwt2Y8ejhFJSNj5DMd",
  "key3": "5EbdE4KgmbvdszAKrFHZ4NQeust7y1nbEyBwd8tt8swXB7PNX5122jD5DrdquxhUGeAu2EQAy2Woy9gjSruyCB3P",
  "key4": "4ogRSD8Q9GoHsFRn11drPENScK7rStr8BBqf7nmGenTS7o6zoo3iF7cVy86XjBcDBPUUM7VvLST5jqYG9Kiy9N8G",
  "key5": "2pXQ9d4S6W4L4pBhDoCDfGXN3V9gtkNJULvHZYkabH3sVkSAyk3CP75Sj9dKAmxzrzieutRdgQyvvW16X2tRUxGT",
  "key6": "4SQCmNkXnrUF28fZfShnynkUDLD29xBkiwnDK2XXCbPo9HYFnsiMGJABWQxyfryKP7wujFfzkMsJzQKSMWhZM1iJ",
  "key7": "4FShsNkuZGc39frE9mwJpzPyhxSRBiz7ABfBcCG2nQuNPXxSrzzRNf9wJxTfw48te4wEWTxaLP8FxBDoFb6KfWqy",
  "key8": "4X7VemNNdmVHmaoqQZfLvA6EA87D1UJFdfdeig5gU699djbhqz5NjH3zDHNdmXJLWkVijsLcFyRj9PDKASZ9CDpe",
  "key9": "45YGzt6LjMVdFQrNbDXFPPTeYy35d9NjMycTerWRFpeFLweVEz5hvWz8GHHvCgs3ndfjCvn2mHRNwcR2FXAwHmWo",
  "key10": "3r7kRAgNY6mpZcfG5v2R43AZi7eFxygDRxgUUjtQrMicgYJ5zanrfKowNEwEyKXEcKwSpq3yHVUbATFARLxzJwCK",
  "key11": "28frAsN7DkoEUweMLnDfqwDtFeVsv2mSCCvK3JgqMBNvoLUxNzB5WXnepiQrUswtstDhWwM3XtBMbcdzJvQZFpDQ",
  "key12": "4ncAs5GWkhUFMPwNb9pwqZfvEMj8a4zPDbsDkPN6xF4QSHpDwts6kguoQbv9inkKt9W63BBndnCHw7QceNTU7ynD",
  "key13": "4GdgPX2NHHN7Ckjc8fH2NTBqcg5CxW9Q63yxG2A7PC7cu7amJb58LfcHaoPJRoZ22xuuyXUfeTJR32nmvwrVBy2n",
  "key14": "2SJh9eZNTbS7QhBoD2g7v2Y8BAZ3VcsuPqkep4vbtdVGNvN2UY9kw2DKJjUhWL2W1AyMFTokPSW14iCjhT7C5fPf",
  "key15": "5nc4FG5HhPnh2Wbrzv3vSrcKMdwbUE1oAnrkRNquTXDo2dQxZxcQodoVjQcCmEbd1ckLdF2dnJsvmZczA6Qpn4Ph",
  "key16": "34KsGyFY6hF5Jx56R8RD9e1EDd1DCigNyvYP8rKLzBGeSViHZ15kqd8eaPPSPu1L27JU7ta9bvZdyU9R1i5va8dA",
  "key17": "64a5RkB2qYyKrhjL6woXHuBPLrGTvZwUBvMPj4rFte6QwNEjxQaSrd2oHYLQhCyeUkHJzF3BtNPhJFrAw1SNMYcU",
  "key18": "2phEuxAtNfNY3fAL1ZjWR3Aaz8FGFbCR71ZQJYFfvS3KTTGwuNP66n6zmjmuw8at1BUaGZHZ4EPRGeJ1aCEpk4gW",
  "key19": "567hZ5WiP1kqwUrx8mU3FE3RYmTwfAUtH9Q2zT2Pt1NQCFTRV2Wx3J8uhjPeaiYwa3J6FhYTqzcGztzuHdUDR7qu",
  "key20": "chpXCSUmzRWpZsRErvNY9rTKeUxoLXWGppn2H7WfuHktrvyGxVQsZY27jvsxRoHrRDKefPEjKgDQearHDBX9PzE",
  "key21": "4Te935XRJ1s3USo2Xeg6hW2LxoGZqeAsiwcmF4rMUg1pBtYyYGYKSkXtCE9duk2nzJStdY5DLuFjpUhv1xNX4L5B",
  "key22": "FZHirCsNSHY7JCijGaUJyMsvFmo5bWpRTqWpFp4NYxEeTCk5TV7njsop637k43UAiZfUzVxrJnPRaysq76XA1FB",
  "key23": "2KumEMhCDVACygFxvZw48R6xJqg6WSW8irJcNS3Boznm25gWoirbMF3HXpGGSXn5RPbRjSVXw62UJapekXUjqh3N",
  "key24": "z5yL5ubeuKYCTavMWebdgjev1voYAffeeBvSz2VA9gtuju56cFmHcMTufLobfr1smYvLXE7w1RULvBcrBWAzgy4",
  "key25": "3SH96E3CkJNZX85U3kTVbbZ7vm8ZWWnVroKNY3jVQLb6NQkMkSHVJaZnzi7HstCvw6Qg8wRtYnUDTWgGSEaGJXTZ",
  "key26": "3wPwDwzuXG2JkAVNs3nBoiLoyJnrunE6ictKHkFuymtLwwaQwjy6xdhT8oub2qeXfui1kDPLDK4qPsoLSV8zzdez",
  "key27": "5NnUGFbqrHP189WUnRUF1qy44UHF4pvzuVJogEbSk4bNQhLFqXSc1xFTzLgCn4tweR8ZqvaL9zPwoxjvEFMhmmYE",
  "key28": "2wXyhwVAQaXUW5fMZxifPqMPCFWBmU2WJWkFqF4PLsTo7bu9MnTDcAcQjz4BwxfF6dGM3murmSKsMFUBWzXnpJcw",
  "key29": "z15PE76K5XfV5d1MhuQNgQFBy7d9rRgf6tG62MwjAMWRFNeP3ZgFYarwYMXaVGW1YQAsPadAoNLKQmESCQfpApk",
  "key30": "2LEApdkzHoh55qptQkLcvD7tgqVMGfofX6gSG4btjZSK4iVCgQMJ8WzjxrCizhUPXng2VxxExsJJw9Y2vgx1ntZf"
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
