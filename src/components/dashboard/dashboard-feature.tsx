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
    "4ELa12nvH8m1jbiWvLTAWLub6V1Hj33sWr2dA86abBy9njN5HhKdeR9vuRS5rXzjrwYrncC7eeyRpja1iN7LLZiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GTEzanQCHeekuXUpCtofZyQtiPTJVHUB1B9qManmrbFBPmwaP1nawj6sbjmsd96PnbpoqQCJScLmepf7cJFDAPE",
  "key1": "4sYx2JXj7NdnaQnWrFWzZWVLVWsFqnFFgjcq7CuVjjRxA85qHFjeXc3h2LKukjL1bPwyPjjioJiJYDwVgfp5Zi5P",
  "key2": "5RcPQtAX4PNQaKDvFZ7tJDwki8Cf531ZAhjEBr1Fzoo7X7P3HcpyJW4TwMhQeWPLRTXSsDmoTsFmDdWLnMpXgyEg",
  "key3": "S6bfDpJnp2zf7d5kiFXGYbCMmHS75gefvaoQyDqVUiAuvVKpopXk1Qbj31SUjPwme1iAQoVDdtuChKfeBxME49b",
  "key4": "5tHsrkQmABK7QJ5AGaCkehsmrfXEy73B5TwqZWkp6hYJGBLUx5X8ARujG3kixdEVKFjj17f8Qgib5TPNCSXubhX2",
  "key5": "5BqbGv98XBSfMRWa9jba4LziZFguuWzrKyGzhDMBWywPU1qnAuprkwPEw75HmgyNDz11GrTDWMHG8Q8WobyDDFJM",
  "key6": "3FtLJ3xammmzuUsSZuyFVnVQ57txbf4U1QMbnaL9cyV11AUFQxJ6KkXfSnLKMyHNEuVW8czeRY5K7pn74kvz4qz4",
  "key7": "2wWyf9BhMJ8tM2kM5vA8wxmvrNm4eesaiPpvZkcd7vyV91ZtJN7yjruRSDWNbLUisJEKgPBCNTBrLi8K7Z4k8NMg",
  "key8": "3twtbrf8Nr5b9Wsu5jGyNJzyPDUdovS6o6Fonnj494fJwr2Au7iA8TjRwfsn5DKYrrKkKPZoLxb2upEcxfBwxoeF",
  "key9": "4LN7EziyLGw4Y7UnuKRi1mV7eRNddf9JTfgh25x4RGxaHjsUqpGHnoyPk9BM7Q9aCRgvT1xY56SSqXrCLff1jN8m",
  "key10": "52AdEaFQLWACdcwRnmu5vsW1FjM2i6gyBzYbG9gVhXxFkwQCQwff6VfBrbv4EtSHJa4xYGwGihnrJPqH1KAjzBv",
  "key11": "59Q1bE3yP3FBu9RDUErd9ePyzCsNxTMbUjLMUSASe5uUDmHpLDNsdTvC1atvZMuFh4oxexdyg9cPKBeeBm36ddkL",
  "key12": "41eoK8NaqDxPdBwUaV7EtfTS3NWakzLhTtiMViQeRQjL1VgGPfHu8AQqReyck9cuHkwaLevtKV1jmLGbLtL7h1vq",
  "key13": "4jP9Hmpmhi7VCyxSnmX2uogryYaB9d7Rm8tzk1wCeLymC5EXuESnuz5ABJYKUjtpE4y2ZfW5DFrMeZAQaMXMN6M4",
  "key14": "5xgC8RNjnKeY3crbaP3eXujzkwyuo6Ee6gRp2oH6L6NwCRmpwKWT184wbjDJjwGo4tauViPHfsxBA2BdMs7nisjz",
  "key15": "49jpsuUmAN1xpT1zzcjLP46HEGMejKNH4e3aSy69VACfgf3qhmF8xJKeB5fhX89PuRcY5b1V5mfmQLyh8Szfvwue",
  "key16": "2KgqaE6Z16JvK4xMuY594vYJfochpneSS6LQYBZLEd6rzy2Nfec1nKC6fDYbVEztMB5dwjnXcCyTJdf2eBj352xz",
  "key17": "2qJtAUFNWPU2HNWrscEyum8rgZ7UiTLhXjznT7mX1TUEEL6Aqx4F7t8kZ1pczC9Sa2xRjEarHCkBFQ8N5aYAfow6",
  "key18": "61wu3N2sAJCka3oqV2PL6xknPQFVTX8EoqwbGjv8FFhcqEZU2fDk5KC5VAU7QHKbLZCFqQfjdU96HVx14YzopdKh",
  "key19": "4rjqfCMvYTjzh3EwWpXepjtFpebocpXpzmHuhdD4zewNQ7uKKF7pVEafQuWhV2FyYJ5KnV6tJi7ztyjPsXU79jkW",
  "key20": "4iZnZDitNPP3Pt6CDv7h2NfECyS5vpiYLJUk2XyguRMwh4Vzmnda5bc8sMq9VfmgGpubdixjfq4yK9VfbiZvteV3",
  "key21": "4Wvj55UwwQrP1xRCGP3VS2rC41trSd5baaSy25CMFfwGBKBtxv6og3oUb6F8AedDti1pL5avE3FNsXcZ8Ft4X3cR",
  "key22": "48JGQpa6kzD19QPjx3w1278kFCDFMRknfNfob1ZGtMyc3FUeg4BhhxMDZFzot1ExWasuKVEkgiZTWDniXQSBdLBc",
  "key23": "5McVAefZuYdJTNKZUBNaXj4a8by2zPhYzzvEKe7bFxraxSwhwmputvkPXk6krpLDy6jPLGSbrvp1tRnTKcFWEf42",
  "key24": "54ZSE45nRT9VZDL27CvRMYdkSBraqNYsQjVZKJD51YFigcWYMPfQ1cfad8HYXrks7MmRUx5iAUaUZiFFs88Xko4X",
  "key25": "fb4DTgXFgAQKXirw9w5ze3NWULcfw9ijpeU3erqQjCc61tUznVqjBP1fCBGEmkQUpvjq1u2UTQGn8FD4WTcjsYY",
  "key26": "4Wok1yyrf1YDZnFtE2LZwBArAMT6hTVWHeyCL3CBwdG7kdLUUg2XNxcNS1cmNRS4kaRqnNKomqDTHLf3Wg2sr9aY",
  "key27": "5gX78GEmowhnJtH2N1ugnmo3d2S7God8bPuoh2Sg3fTPEEtDJgk3v7NJ5jTFSV1UbYaF5ptHr26RqoECQypoM8fk",
  "key28": "5G89VM1V47c16j44eTpZfM9dhQBeRn7TtBigwpiYT4x8hRcQ4FeYNatuMTSr2hipLmuxzS7KDP5qYQ9UyjhcioKg",
  "key29": "3UEGqWE6FSXzfgoypWkKYa6uRC6naQtJ4iyPgMXduvtucLkEXyHror5QVc9eBe7ZrVcMSFgNZPrGfSfSzyi2jgtY",
  "key30": "5wDUFit7jGt2HfH5jke7YSCea6VD4fUBzsbPF7RiYowhssM6QaydkdLGjhqxWYjh44qmK38b8obpFkakKRRrdYfd"
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
