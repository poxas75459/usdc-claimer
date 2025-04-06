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
    "66YNydsJfmHx9j47XdyS5jEqpkt5AhjR4c8jLeifi4XJxifPEaKNPadi3Bhrm3ZhbcU8CkovV9RAFVxamLk3hHib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GgESqZqyoQRavoik3wfJCjkPqUXU3QapSjZpzSdDp2tD5Npbdzsd6pum9YVkVFvmmJJrGPZ6To5DrYfNZD1d7A",
  "key1": "63ugsfVJ1mv1C4f11z4TRa1ciVpeNvjpE2UeRTsdQ3xms2iSCJAzXAMoqLNgoNPTtD5kvMm4XzuaqjQmJVhsdajV",
  "key2": "51dYCZBAuVxsFqKq6xRDFgZtHpvmzhNudN4Gfv3KfPr3xYTtKjm5KdYJ96rMJ3UFQ66Mh37CNw98msoeSfSM3kDq",
  "key3": "2xF4FpUUCRyEJfMGvSXqDB9Q4TwM7nKk22m7LbFUtgiUzQGNGtRCFCX2RfMTKF48L5TomAKfAXDqw4h8xMkMjCYa",
  "key4": "4zkd67gjy1TSFfpaoAWRDwg5jfiCiejvWH2LgHmvWkUgTzBAuFQv823Xh292CPXQ2FxgPffc1uZRQdAJ2L6sYHDA",
  "key5": "4jmaVWj57N9T28UoaMoA2cAtxZ7BHEx9CdMcV7xavZG65gUxn1PS1rL7ch8Eq5FHpFpY7FYHALxHy56CgRcd6xUF",
  "key6": "27tnqraJ1Vmx3cEmeBxWs8kVyNpLJVUahA2NGMNGWQiR7zCcfUURGKpVCHHaJEKgM5NpirbRjz2X757QfrfJGJGx",
  "key7": "3eVWdpdXAzVbRiA1LDQAJmSZM5ouPU9WoLb4Wk6aP6US4QeGd7N7A7wFi58LUhyt4cDK22njHhBnYF3HHXYgiLGt",
  "key8": "31nUTSUvVxPJxZYSnj772jg1gKxQ7bRcWRfLPQiyAGoHTtoEno1zm3LHjB7ifJLAaqbPfidUz1945HN8NepBmwGM",
  "key9": "2kKHayc4641uay7BoocUgVMKVnsc1WkdYYKZtmAmXZvkMEQ8nuyRH2pRDqRf8jwEvw87m3qwwqJdKHTwugM8Hzx5",
  "key10": "Sg4YQseo6EidNsBa91URscfCuS3UTmtHp39vXZ56VFspydkrNs35Q6qxW4ZVkM6K62YCgbBS1L5cC92BAzd1EiV",
  "key11": "5JY3Mgi3sHLZXXH5XjhR3R5AuUvzEMgW6n6CeGz7mBBKeKtWDYMomxfKkud4RoVvY8ppPDRcgpRRnrXBkUaewGE2",
  "key12": "fVaM9mefa7wgtyjq1KhiwmnAp1oEnYypnQd9LhFRV7mCdUfjfWa3n9wrY3rpD2mjFLU3tovGqRMdTPqCVQYtwyx",
  "key13": "2FSu2GqTpDMiGRSWRMkfTafZa2zWWa19CD43PumyViZp1Z3TQHLaHo2Fnq1VtrTtQ3V16nEQuajTxgtmomoCKue4",
  "key14": "5y37rhdx4KboAFSSkWeEXPJ1HLVRrRabpsNgU3wma5fJJnSgpwpuzSEXtTftRminM2C8qRCMyR7mwdBF2jfrR9sC",
  "key15": "2HfCNFYQefKRVE9PfdFZYiLqZUi8XoW1sg68jxfyufVLNAEFs52NdHCaZaZf9vRbRKti4b2vKrNrBkq9gMjD4yZc",
  "key16": "5A5ZB5sgUd1x7dGDKRBQHdynncpnx4R3qNmsXLobWSdPZWD5Y8HB753UWEwci4GvTjPvvS6u7FmrwRbJUsFiCJ4c",
  "key17": "5EKhbryeSk9qY7YYQ52Nhzs96eQtcQL8WvwbuiLLwEGyLcydxVKn5hiLossL15Ss9cmdrxe9HooW8CmyZaEAPFT2",
  "key18": "3b1YQfV8T3BshasECi3pnqdTyjtuDGNDjiYNmQqLY3SZnm4vV9h1NPcqLHic1Fi7xsWPUCj9hUrHAZh7GrPFJMt9",
  "key19": "5WDq1P34ycmEsm46darZ7V3z3mwJfipQVGeS5sZjXdJ9csDFm9Yv5HuyXs9TNWiWMt3s58LAYPNrDnfPfcJY4gTK",
  "key20": "4qzYm7g6H8oQJ3AXdSvTrb5Mg5WvC3zTypVKighUVLW86RxtJdhPtbgtoSSeQyejd4XBNijW5qHTuFQ9qq28fqLS",
  "key21": "27Jg6ZhVe8Gm3CJtwKi8JW4WhdrXJPpNdgh4WQpa83o8LTdAJADmSWdPm4y4X6KQEk1WzxEWARxVTRMRfqNuHQ9P",
  "key22": "3nKJQyyqVv1pfvFF7xHXaqvxBqDbjjfpV9JQDEcnE73C6KwAbxMzGAPxcDCiGXcveksuLFV1Fcu51baqEMD63dwZ",
  "key23": "45zfrXtnmw8ZdcaVPDctRTpTNbZ6SqPSeRXeCckcUKBbK7asjaEnKqaBpg95NBDhSSP3ez5ahyBdj9GP4XzvLxv2",
  "key24": "2tRJdDeS26K1gi7rncW3PKbKoAT8PT2KgSCmyzNB1XWc83vRowyEXvjXDFyk8SyjeSTCFREmox5RvVabq3dwadNq",
  "key25": "4EVr9jakv8usgT5rzKDKieoC7B9f8TLz93HfGxzPjCDS533QF9oBoMr92CfNiNc9iWMZThB6esG8YCTSgJ999JB4",
  "key26": "2718niPh5YY3ZSRrZvy5tcbPMJhK3SzcSvf93Z9H5uhNXh3s9sLmMC3su1eKWL1HGT6kvqVYZdEgLehcsmQw9QCb",
  "key27": "bxPjczshW4jWqkwGJGUr8R3GG6mM84oD3U5hTtd57EjqyoGUVfgKfe4wddWbcJLvrB5C7MqWp5DtbCZTBUp5t8M",
  "key28": "4xYA8aj2zy92xsLFveNASdNwEhxTWcE2RZdV4tZSjydWV7h4emukVX1jRR9bPQMXGw6v21FwVdDqTTTXbSt4mukw",
  "key29": "3uayYz4HNWbjor2W7iNm6XMDCRSrid9F1h1yT3p96ogDJoGKHWLov41Lsha5wmusPeKHdjKJbvTUXNM5Yt76YpRU",
  "key30": "bSiRQXjV9b2vkYcKQ492idEEY5yozU9uTqRt6YfSC1RsDHNZ6u2SSiHCm5f9vmm4E6qidGU6KvZsXrTznPfLyC9",
  "key31": "HNDctfuLtbfBQWxpsrhW3U2yrMKwW7djwUaDa8qWx5trA8nArdqqj3kFXRsDzm5ehC7Wnz22qd8DNpZdTG92md9"
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
