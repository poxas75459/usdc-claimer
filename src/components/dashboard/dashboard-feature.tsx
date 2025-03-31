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
    "3xh4SqhTkd3XYjqZC3TKQj5KNB4DY92kxP1PuBrbZQQ6JCNthNb6k19tCgqHdffPWWxdaDdEmVWpgpvquCRWXMPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jgrmuJPoi72gnUwpTHFAf1wm8966bb9YfyDkpFLL5ktrbhShNqV4QUdAPzCUBB19nsfg5DLYNojEKrqaBFWKbBi",
  "key1": "2HHy7S6Ht9ecyUhYKtatVi3S4o5rRdbTLxxTanDEAGsj4bBmrvtvvhyNRSkTFjJBVW1Y4YeYMMDHv3gRCynaLU6v",
  "key2": "3kEUKPn24hJFUpHZ9PtCUZmsb4i6LGFuNSBAR4dCeMGAu7SJhSWQfY4Wu63SUKNxZcSMARsLUA9mt8kdRDNbS8B9",
  "key3": "3FzmzP3uFYzyxpnrcogQqbCr228FfedFgcFvQbexgWgDFn2z2XkdAiSMBUq6jG4rUnr9XBgX1qh1pyGSCdwVb1hq",
  "key4": "4vhMCKn3nbhiyCRULA1J5kEW2F1ttYLq5n3L2ebTStsSmP7f7NCYCj4UB4rVe5YMFvsgg8yTuFeys5xMjSmBrEMZ",
  "key5": "GENRRtcqSNMTWztWhfXs9zh4UY3ZjzM7R22JvSfXoXGN66HsPji3v7XKR9638vYMB7r1JyYMbX6KauojSLj8BKb",
  "key6": "4anGG6X9URNCTkYbZtQHX4jagh32iUWCTm2FY3FTKF64oNYkboErGWGTe81jH795oLCFSR6CsbL84EhW99ykqEhW",
  "key7": "29MTVmfkR8yZkXfHJmQupGWDMFP2UiywiBw3UYuhGmHABASWuhMyBB6KevHDX7JvYww39AKFuspKJqfy9x2cKeNo",
  "key8": "3qRRiqZSBNV1CGcCrdXhJxS6UrUHF3Dcur4tNDwEFosfMhTARLJmG6TDix2bEJXcX2VSPWrNdNqoXnZtA5c9XX6G",
  "key9": "pXswmbrgaAxdPkoYGDdCXmaPfCuqFk8QNL6ySjgf3H3HpxaoYWyLu9a3dR24gDEzEjUv8FCBNmK9ZsZXWg2jhVA",
  "key10": "3Knvr28ZU9z2YsvFBNxHit9d44HqeFKL6FZ7jNNasQWu9hZmArGs3j2L9qwKExtLdYcz1GgSrn37cUxjkJ1ouhm6",
  "key11": "4qn5CbZWme4Tnt7jWGG3GLi91r7eHJwWEe2WkPc4HpKK3YSYCY4Cwz9oMKcDqJ3ut3uWWxsvQEYXWFcg5rZx4eBj",
  "key12": "GpYZSiFPbHyr2VY2w85wBQKocGZiX9Gz76p5crnubVVMSKp1gnvWBRafbZzooeSmAwStecKC78q7DjhjncRZymA",
  "key13": "4fVC5hwv9VqzM5kvbjGJrcgTiVNpb2kZiwgimtdXtD88gxGT5jABDXyZUAMNgkCpgmsPfQbWsqKTJRzsz958i46x",
  "key14": "2nTSRwEX9b3KYNqKYRjWAA48MZuGZPzyZYXra7PRKRmosFrmNrnLdMCqgPLfF1A6SBexGYQZXmt343W5uZ74FPpu",
  "key15": "2QztZR9tuneaZYwM3XbXYNhpoCitbWvqj1rvnBeanWU6yecpTQ8jQjWfjtdy6Puo2abeUe2C7F9AVoJ3G2zxbGY6",
  "key16": "3eu5PZb79nkY3YE3rwkcfQh9Mhj9Lj7wLh1LaPmUBfqvVHYMrNBcV1BhhbsinTFyA8EjnLpZKyF9FRtc4bEyqBoP",
  "key17": "5W1dGZfFL2TVvbquDYnyoYHPaSBzT7Z72zwAey6A5jQ9d5NQzqLmF57gzuHzb5DB9eYDhWQxb7T2CcwR6dnNKqTn",
  "key18": "4gwo9NX26751KjLztdUmzrQQmFpKBhGU4P2b2EptNJsx9KjMCYbmVsNTeDMeaHVauLT9QpCVAWEhP7Tzn1R1EQMY",
  "key19": "3eLchGGRQbScovzbXrLAJ3ZfbFVWxQMuZ9wSA9aT9EqfYafw33DEpkKYjm72bKFFSTt5QZxWcCUWAhETD7iKKcra",
  "key20": "SHzY1gbBwqU5nHVaJ3YsJGYR9KL6Me2PXcwP53F5ZDPFkqdFDW8skJyE71jyTfZd9H5msC37c2MFSQVxeqL4FUL",
  "key21": "52kZhpxFVLKcaT7EBAA9ovgwdLExM1j49hYFrkVJxgT6TpiiywHsWMnBan21pEUKyM8T4JfcEFYDXxvj751Qzeqp",
  "key22": "3mPXX59m7Nd6fgx38vdW5Qp5HAwtjM6piAbZqUJfy98AfMAGtEdC2PWvio4exNUSotTWZQZq6JpeJHdDepep3oRv",
  "key23": "3uEFErVoSfRPR21eY53mkvL9hSeFvmZWPm39yXjQyBadqFXKYJVXwwu8p4ysYRBpaYYFcuc9fyVpbjwmZN5F5Qny",
  "key24": "2MYk2BsA8pSZoMsADZqXH8doFsSd2UQqxpfcFFvPWQMvRCPiao3jtsAibnH3v4v2bntVQ1psXoZNexTwktY7ke7B",
  "key25": "3UcQwqVbVqDtHkRxRiEPk6AQeqKzvycjL1WnRTHxXkgb6VopVBwGxqfkU2hscj7mTRNCYwhPzga9mYuybu7psCjP",
  "key26": "3dHM6XQL6rePanunq94GFgSLEhQ7HgaU9P6GDjAUZSEo1mLo2ArnEX2apKUnL5vhfMT52d1agFpwmrjQdzBmf7Qc",
  "key27": "4Gh4qP4v5ezPAf8dLqzpYwMqGRTA7ycdVc9pFFAy1o4UzDWZ64GADge9KBeaAXWHizdqmwSaq72we8RZ87i79yv",
  "key28": "2jVzBPGZtiBVyCrcw5vxsqS8tR3ZX7RTBF2QNajCJWGyRTEdtYW4AyYTJmPfpCt78cQvdGUSA1Qv5EkVJGJEqsNg",
  "key29": "hBnXKnuR1mEkewvpb2qukVP7s6cWVGM3LyfuPnYHeMRinxoEyScgupx9etQ2jnr8bhjCToyCcbJg4tUvZkczmtg",
  "key30": "bdjZdwFMrZnvgi5JPntGGvVsqan4xE32AyzsLZiQBHaZQPqt6T8wSZ6AhS1jPNV5vVMA9dn8SeUqGjWJrdJWXkS",
  "key31": "3Zz4DCdZJ9NfYQ8Ergb4GwskBZRYDfN8uhspvogrH2CRMN3b4qU5V7LC3zfiLgwQLPEMRitrqvsms2zNkjCmCAKt",
  "key32": "eJLWRdwaUtuDnU7zaWEpMo5n9V6o8gbMVMxa6uNbvgDucw62cQuupC5gPm9ZgcY65NwJmZdyu67rx34K7YvkuFm",
  "key33": "3EKqeTd1x4tCZUtrWtJqSTbHisB1igTd5MKwiZAGoDhJ9wrMvWa9fDNdGDe7YPVopj6v1MHQQGEyCnbdaxsktfHV",
  "key34": "45KaRbhBFLnAydPVdsGCyPiHAhEkzM3Mfq5MTmNkt414mBKQnhTctdCNj8iDVNiw1YWZiEVGz7euREStYMUPCeGm",
  "key35": "3Gj7bS433R4MqJwkGTsDjjTQ9ayZC5DoekAJfoektPDufvSM2qz55NJKwUbyaJRgwbBSSwcN35VjQo8A8GXMCbPe",
  "key36": "5iccbxWJ6XdD7i86i8UEttkKPMXJJonsFWkDMYDG3TzBjqqy9SqRycqR74Dppb5Mb1vg2oZZBgG66q43CqpTr2f9",
  "key37": "2hHy2jccB8DtpjxeZHRexVpJyMsBSSyGAzoaL1hDKXwWipfXUTXmnhrQTey8VUak7TiAqdpTnkrE83BgnTaetBZa",
  "key38": "2EodqjswhyjigNMmF8miKvK8YMYUmkeY9sB7ghi2rcVPLgpGQ3UjV2SGbmXnyuKUWnWdRTiLjkQX4G4gq5J76qD8",
  "key39": "3pg6d6qbHpuHsuENvDLcMyTP8oHyEPMNUjmgqoJi6hKbCchgaiA5LqvkYPewfoYvwRxFkVFZHeSxi9vLVg98h7Dz",
  "key40": "3W1AF2EHE9gnBUdGdfAdkqpYeCZBH7rxyuMseeuzN6bjKzjR8PHq2UMZcvJiE8auAHa7mtaDQziW4qjQBNdu6KH5",
  "key41": "3EDC8ZfjEEGMzPmvGDXrFv76pW48DuWwsFhi7H4y42wXY2RvbKiWx3pNnaFDF6rnvoMn4HkzJJpmbmA43iQ2pupe",
  "key42": "3E5qhBK9gz3UjH8s9y7SK49CZNG6U6ue2Php5XeQctuBzqTA5Pf9HCkfAvidV1UctES9svTUp3283deStnMGgtWU",
  "key43": "3JN8b8t4e6TKDY1vBWuDTivtLzRqDX6BU5mkVomKhgxzTaQP2RfV1eSA84Ksfw25qXTFqp3LZYBKoKLKHgnhSGxs"
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
