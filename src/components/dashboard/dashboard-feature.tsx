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
    "4rH9F7JFrwjTPywVnduLTDSttMz9f3FeP9mV8BHbDfSLigwCitHPZAwktVaTntcjame7mcbA7bMHnsje1T232w6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3meGXYMXeM9rZkXTUc5mec1pbaKD6vzp1MQ7tSFwEvZi3zPWrWvdEquwgDLWPeX286SZaubw8AgqntJS9FyqHq8p",
  "key1": "2ocbLcUT7tHRp6shpeo868B7pYe513oiCwXzwCebwNQRVJ7GAfnG5jQBzQrRZtw2c6jRP1mEahu8MdBiNodNZhaL",
  "key2": "ZAbTFSKBMHNcZ6hc4WCCXMkHcZebgnobJFLi6mLFqagkiEwaMeaoCfLTJFsTgCajDtVwESc6xYrLng4wpvzfcyH",
  "key3": "3fgK6NeokYjcRJ8rg8PNp9hp58cY4UoejNrxg93MH4y4BV8yaNJrdgQAe3ciGBfDfB2x9JYkm97eUZaiS8eRFFuN",
  "key4": "5KWEi9JWQ8txLZyVaysjjUCkH6k6dZEpPEia2Ho7kcnu6Tn85ATA9qN99eerVpB18e7mbTaD2o63yFLAgQW8mXxp",
  "key5": "5A9rKwvqv8VtnvuNnMEZzJyW1PKyHWLGGwunu9XM8ieTBGJArKTwPCZAwovKvVdgrwcYsNtzJsthrEuWhtve8BXg",
  "key6": "46tXRZNKtzU6xrxvrFhND2BKzchCzNQkkuGptzbmGdM6kxDGzkBib3JxL9SPTV1sf13LVzviaCwJPPpmfzdiW2vc",
  "key7": "5VKN5gSgvwUMRc1Vn9RF7KQedaEeXogABiWXJJba1jJqXBEAQPFeQp98PoXXnRwHkeamdE5T4HDcA2UKyqWq2K97",
  "key8": "3yLAcurLFwNL3rAtEKK944Dm77QuSPktgeKkB88hjtgETeMgkoc81svkiZva5zjTmFvpdLfuZhTSeLEGvAY3Dya3",
  "key9": "2cK2cMn76nuYAVeBdcjPLUNefRwScyvMZQ2fHPC63Fw6bwaSmnKsJ475QhNtUVU6SH6omi3QgKrbfGwGgFYWhrZW",
  "key10": "3hS4SqYfCtmozmENCcsMJMwmXKp53jyvsA7R5ZGRnHu8vW33uEH5TQiNboo2eqsainuXkjDpSYCVku6jowJdB7VH",
  "key11": "4ksqH9rbhJhV8j18njh62ts5PaPvwXiRhTYaxvGFcpfRR8vFzXb1FqoCnvusaeSdwM2AfS4PpCTAQWUL9seFNi1M",
  "key12": "3gu4ZkFfyKMXxaemPure1yFyhzhgJiSh5WUWSr17fL21xZ9rBxjJ6BuWbMrhtZPjY46gr3SKMegYcBoRZfTEAm1q",
  "key13": "2eR4PFGt8Zm6VoLqzQuqn8mXZB75WgA6JFFY1nhZCGbTUECstCojiGms9VFntX8kYrrDn8xtC9AyYfoXETdX7Vhs",
  "key14": "256EV2wbDzFxT869kKXeMnNr1RXccpiEWwbCNwuLbGRnvG8SmKbPYFasYWYth5uMBuFgPocrSRVeoqAkFjS9Na42",
  "key15": "S62o11CJWnTwxMtTyZbwgaJH67NYs1joLNsSvKN2ygNATdhSJ9CACzGVzDntyumyXfZtJxM1G74YvLs7ZU2R72S",
  "key16": "2JVVcN53McQy8hkBmN8PRKhenAu8u45oYpaW55jRvqxLY7c4sQNP9z4b93sY6cd2NmzU3KfHKaCrehv7j19H9PLt",
  "key17": "25qvLkecfBhMpgvu6sd9mhTTbVVMcLDdKNnEJFAPBzC89RxvBkNMx9Vug8BZ1gPTvstquiTw1gWTQf1hNeohFB6c",
  "key18": "4nCyUCHoEdFW4sPCBVdjZM4tnm9G4w5DQbcWEWT2booEja1DCLhoDXcUa4MfJ7yGmYKTdcaCx9JqashRGo4ycb8b",
  "key19": "3r3VeAZSYykhPBjx9VgLedf65wRXAaQVBnMde3q6Q8sSsUKMF7CwXf89ZCSMdQgdHEVaRp9fxhtBunUKRx43ZGVq",
  "key20": "3UvPxUT2yDEJBgho6W3qiFbJ1iq2SPQS7ASFPbRQYoJe5FBdyj7rehahqd3bpb4DHRafz2DRAP944hZawEchbfcF",
  "key21": "4v9tjD7TngcLVFxm1wkTiYsJj4RS5vyn7K6Yygwwb4D5qRQj39kmg3H3WcjuMzh65wSpSxZLvuAuJyhAbWuff5kX",
  "key22": "qp7Q3yPPNrtaVdMx5SvxSjQmcmyAHNLwSMuYahjLxgbVyKUoUr7isbfGHeoJHvY1NZLAD9xcTUkqwUxrRi5LDtK",
  "key23": "okCJbB1qmSeMwxmb3HVP4RFGqFqaZ5kdrD7o82VBCsEPAEwZFPA1PgZpchvP5ANyUocPStgbAMt6X4hZZouARXd",
  "key24": "2EwWGqTEd3Q9U6Dr1UbbJTCLUtKdiqpSJUxJzTfKxRbVetoygZGR9DtsR3noTTzP7DHZd9vLBSh7hBNwrcDh88WM",
  "key25": "moYm3oFDwtoNR7TUkTR71nA5AAUq3PZme8Dg7rXVk1bTbvxebUKC5VVCdS39Pij657XYVLTMtJGkybFMQXHkjWj",
  "key26": "2mhVbp4zZeHEbjvn5fUpjUMoavP2G45RAgXY1Pxoih7YgJ6yBwj3gba1K3Kns1djPnAuGoP9wmUuPUXRjFbEsXkX",
  "key27": "3VwgdWwxHXD7CL4GT72gZVd1zjeq2hFdc3v67gYtGmV7hPRsgJFJXif7JHUWHHvtzpTzRZM4iC2f5fSwnKXG2Gt4",
  "key28": "4gb6SKtftFzR5uQC59xWcBUxwRnhRVB7YPDYD5e1Y1jzoYXzj4UWzMseAwPaxZ4RdSZHiVhfx2aWsSLnudBhW7HC",
  "key29": "3UtMPeVgXaZtR6MeQmUbmPimPaKa34wryzAxY2HvYswtWTq4K9EgDhLCE8QwzYfjV43xgWNLatcLHC1QYjBCTXza",
  "key30": "4JP9tmcqP77Pcp8xmXjRNj3GtRc7HNgXHf6PoDhUj5fQ3F88SfeLJvHyDbbWtWLHSfdTr6cAdVwGJcbTGsCwF7rN",
  "key31": "5E9fQ4PGGn85koX7mbZwkZD5WWZQ6yGbZfjZeCSyjNmTatV52fKDbkR3fCZjHuC2pbP1q1z4SP7ABMba71MDnUCQ",
  "key32": "CJsEvGdWKx37VDmgZzae8arnbW46YEbqAnvuv1o5fgGmbzy46k7bABTQbR8QdWnMRkPeSgepwMvf4bfJnLMaEtU"
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
