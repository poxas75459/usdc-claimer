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
    "cx8FHjpWoVktHg4MsdhxyAQf51C1mK1HuJkzTqxE1xi1sDKVoQ4fzSQrThVjTeEBAsdJpCuApAC9j6tyWV8bnM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CSwj6r69uxkZSas4ZDp83mPEoCFeJLbVpUyQGBKg7c63TbX15dRKx6YiZxc4bDCCWi5M1jA7EpbvqN3i2Bari2J",
  "key1": "4dbAQbiUZFMgsLg3GgAFQoEKAmPin2vmvbRVwmSR8HN7ZFyt5e3ajchdNQ1af4myXeoNcTJYYopgHT64oPBjR3gW",
  "key2": "vQ8PLcJJtv5g9faV9xa78ZDJtrtWnaiwTFDicP8MfqcyZbPJG89WXEQkbDLRHgzHwroSLz2T4cvp6rraoYc9upH",
  "key3": "2RF9uS4rzgtTxFAnfGXZNsSsM2Hr4STMUZ3JNT9zwp7zjAhja2Jggnqzt1vcqsEVsfSamvoasNAJjNZRSeExKZtC",
  "key4": "31eSiLs1yedy2kTaFtWh7hiRHoYPtANCbq8cg9zfYRknBrDzfg6x6h4xrwZkTJawbTJmmsoiqhGqYqdxxzYknAjW",
  "key5": "gjMAxDo7PwYAP1NfoM91CsLvUP7cf7oxodbbCb5sqmMGDFQscHpXtkBanzroCrxG6TzbQtB6Cp5T7iLQPqHUz6P",
  "key6": "4nQXvidDYjcka7yaTh7rh8eDqhrRabWiB8mfDNzyDBod6piVP6s5diXxEtpE1zgHp4uBYQEQxYt3pF6N4SFPV5QW",
  "key7": "5qB66PLHMNTesxTQaekFUQC5NR6zZxCnzGueszGve1RTwmbMTfyBxKiDxetXGfhvnxCYvgoNSisrtxBkQAqbkbRG",
  "key8": "3TV7TUpxytpb4et2ShZJ3vL5kkEa7CYF7WcpUmS1B95P3A3k2efw6BLKqHKQYSrBKkbhSbWTVPCiMwD7E6KJUx5r",
  "key9": "5tAGTmmRC8UBMdnooFZAVts3dUvZMhnBfuEDfjCXatYdvHo7hRnY5MhzjbME6AqMUhjHxyZuykCQykrvULY4dXDr",
  "key10": "57kC8uyRvAknoEmTCgB4NY3DL3Le3CnitNwAo3PVv2X21UFgKrcTVYoBXiuRpxKWgbVz7GrcQcug9UPJkNWkDQc8",
  "key11": "a1DJW65wbqSSS5dy6JCHHmeRxaHW3vZGtuCDSoygqh29n4YojtLqUkoKcExsLFcHXjCu851HLctd7B4UU5Ce3AZ",
  "key12": "5yqhi6xKRuvtqGNf7dQaanGe4CGrbLBuz9mbHhB1u9fmKjpBTKs3g718MnfpMBazkKbeSgsWxgqQV8q66kL5c9t6",
  "key13": "5zGheEoiUyUx9GMFFxoK4QXdF2hPTFZoNiNYuWZ5fVN7kR8HzEcs7A5YKQvYpaZFeB9DjRMeEDGeBkDB662bgoPJ",
  "key14": "4TH4s9zbqibTaAM1r6aWo9zZnoegKccmHJSp8tgUpume4Q77LAH5pnyBPDJP6G7ibo3ykVDisT2LcK1e8PujjrKG",
  "key15": "24ApAbxhWLyutZ1jxziDHgdjvPifxej6WRHiMJ38zWmEcAzX59K7q2k2fxC56T4DvXbaJ5csMMLWYQV2HKgodVeY",
  "key16": "2UumNs1GQfyAuiHgUzgfH7moNnJ159tHr25UduwePumHvp8ELWQnuegt6TDf4yg4aGiVbe4qG596nAhC8jxh6U44",
  "key17": "v3jt888XsZeW4XSFz7tsjcPHsibEhHqnU9oVfjygYYg3XHJyN8D52osQSddDqYyyGQ7NCyxWFw7yEew56eWvvg9",
  "key18": "3ThRUdwxrnp4q34eHPxwiHnFdtwbibHsw4os5YJatXgWGfCxdfthpbn4cFEVogwJmYfaAD4c5QoHdfJn8wj13RQr",
  "key19": "41nRMTDVCsLk2esLivxcHp1LmcS6DMyPpDgFk2CZG7MNGfoSg9YdcTdY6fotm3u3g5tcHgzCent8tzWigssghJgV",
  "key20": "3ewMkwFMCVCx5CaLnJ1eNNivjvxNErhjxT4zKrZqYbqSh6iqhTHXF6r12EdV7ghCMqe93PMQNxcBPvbMrACRVvSP",
  "key21": "2ukjN3NdTqSDvVcSagk88Eu2AJzjots4PjER3WCRnGPB8244TtyjuEcAW2kLMpfMZrnhAnnzBk6veBzeZu3jowyR",
  "key22": "5wN8cNqtqvZcRCX2eQzyUBtY14fnq2jsYNwfGkvheG21YQMZCNTVBvPYEBT5tqPjnTkT16StvzbtTMZasBmHfNxp",
  "key23": "5wnNaxL8ELtafXAck1WgWr5kLM8gNxSmfkKWJe333myvvGfHqX9qfXE2AZ8bnHdQ7nv5auifw3DStWJj6LC73JJD",
  "key24": "2DPWYPompX6UV2zDH9Rvf36UCdUa5mwb7CefAMTJrEfy2VCgT5jED6jNfdqWCHgEZ9asGvwru5QdefHfUUbNAagv",
  "key25": "3rdysM29ij9M5ikPv1r4d8QABbVs2zsaXjv3PmTz6ZxyjLPEYY7P5J3PSgdhmdcG2sNKrGN7CZU9Xr86fSnMzsN5",
  "key26": "2cv8aM17gY3g1o5Ug2tJxiKpnc1Zd4FUYvGvQm1GYqhhVd2J42Tz8izoAN7o6yXayK9oZHdzoCd7VXQDYwv9U9s8"
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
