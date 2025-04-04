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
    "5dn1Ew1BBRcP2yRnBsARRYviSHDpKUmUx841B7qeTFm7JqmHk2dzAYnpQJVwm4NdaT7UsXepeDsTXXG5vzGDKsG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H97xNh9KmUoDvTZVQiMFZZWGGy6UFoti5dtwVxDqJxzJkjA5rJufP432WL9vbpYRNs4LabQLbEiojE1nyTmHHNn",
  "key1": "2FmBZtjnKws3gvqsdrpumn2FzbuWhEVXZBd5ty5pcHZHpiBHDcz6LW7PV9MqS4rGk68fxuzD62qLZkjjq9izxeCh",
  "key2": "3othobQptuDjPJp6gQU837tdb8azo2a1PUUQcbnC3tWPCgWUewpFE8xkCLxxtgzviN16LK5B1NpUr6RX4nUGMLUT",
  "key3": "3gdxo536qpFSoumZoYcDCyvik8Aykfdwe6boU7FtrnrkrtZHfJ6WLQGgHdASPAZL7fkpZUzC9kyrLC5yKgAhhtmy",
  "key4": "V4ddbvYTEzo2CQh9UTSSPJdfEbTf71MbxmTPVQuUcon4V1yM1hMNw86ne6NzJoyqZa5hoziMEmyYfFtwf2qqNa8",
  "key5": "3mByAm2HN1Jji55NE2iQRVmnbZ4cRocDJV8K8jGRG9WaRyWsYbbswsxrBTmvB6Bq5ySqpU3K2HdS5hNr8PrZooLy",
  "key6": "4zMZ33DzEoi4cPBNiJsKKSekJJTFQ3gk15p6W5Dg38L89WsfxL4fC7k96GdAKQo1UrkbgP55h9jeCxHsa64zASXk",
  "key7": "4Z45SJzdrNa4Xe8qoTRWGi71xDNGb5jWDXde9yC2qLh4CzNXsTXRt6k7eruHNSu6GaorPzicqVQYJTngaQy9NaHu",
  "key8": "xnzVUEowfEvBvZTPs3XgjmztjUado29bnsMT3yCYjPPM6bxZp6FMJ8edJEwamCDopbekaNStbuVvd7WL5Dm7cn7",
  "key9": "5QnR5FvwCi48hBJJkX4DFTri8hyy7FKd6e6ospRV6ainbNHowAMCT1MU13CcHDZ5PQsJDjpVf9PZKYqEuLV78xVZ",
  "key10": "4xYVPjms6PzKkRU2F3nVNzrDGcFM4MiNcPHi6okSGFdJ2Pt65M1iKX2aeAB8a14k8AxqncFCmtugrsFD1tLv6Jfa",
  "key11": "ECgvMpetE1A2RDaAMLwmBpdGM1tE4dir1sig6dTKop8rcBRnZqBkGmWAnaeaWkgKntz1eSkck9zuPnJoSvZ7UEj",
  "key12": "3naXmBJms3MfCRFM3YNsKApKvb1FfGZ7D2xYdn2XbQaL884Spq8XEPYaySJngMvrj4g7itBgqsHKPgSedthWwXv1",
  "key13": "2QeniokgQt8sNU6uCYoMN9d8r8o3pfmV9LiKJCkTiD2mEooyYFMy8Gj8Sy6ErCA6T4edVWnLFY6QkxdPeAKsmmq7",
  "key14": "5DuvpAUvytw2svdXYC7KKfnYKQSeewduZb4RvaMsBpuHam26nGoEtDjhbjuZGCyad325RAE3DdDkYh33NrWbCSv6",
  "key15": "5CJZRtTaaNU4bFwTsMAkR2doEmDm65ddUnqkqdpv4P2aKjpe55sUtpSnAUuZjtv1fWxKygyh1kYqdsZQSo3JMrm6",
  "key16": "Zrc1ATk1bN7VG12BLBz5WYbCGbJhd8ieBQdmtApmzKAP2wZYfsDXQg9kxCV4MQLFLnVcmEruVao5R4VqrU2p1Rn",
  "key17": "2u2bShNLNDuoZdtaXWuAxDDFJqDwfJP4Q2gqoQoVeG7JCzDNVMWE4wUnwkhoVneosbZEHez1ky1kbNCeRkLbRvut",
  "key18": "4wyEXTfHuYWyxgzg6M2vvMSGsumoryt2Gb9RJ69f8b9qGYyTs2G7qhwXaX5xSS31JwWEc3FL1ayx2dG19nBjuW7g",
  "key19": "2U91mQoD2Ma2RmWweCxDWQqyAUNcW62fS1du6yUjuHAsVQAcgfqdqmMF1rp8eEBUYptxcN9uybbJm1kGaYFaZdPQ",
  "key20": "5MdNy4EjmmvBCkMfMvsDo5E9C7hgmiHretvADUh4v8anrXbTfT2KeXX1HV3SaWkmjnEFaZnrVLuwCWr7ahCXEPWe",
  "key21": "3DEUijgTWg4Z8xZbAE3Au2CqtNxDk8kySrx7DM37FPuRjuMQAGzU4iHf9HiYFngua9Z5HFnDUwgw1jso5TNAANA",
  "key22": "3rnRZdXmSXRPTLbPtVex6QyaC4qQ3MffPzD6WbYnbUniz7yLW9bht1MVgnMtyUUskvxbbynBXNmJVhhrtoXQi2fu",
  "key23": "4pY7ndXMJPfhGphgVJcRDFAXyv49EsVrSgRxmz8wZkNDewvmrd3EbJYLjDAwK2ynYSvrBomkL9LR4TevgP2mZbx7",
  "key24": "63rzB5ADaLKPVirifN1eHBMGpZULPsoVF3exk2mADxg6ii2d1kvQQwdGoVM79h6no7fVDehmUGzVQKGWSbS75QYH",
  "key25": "276ZP72NdKfXfNKFGmdrrpeo9QcsenWbN8wqG4esWXaBjHThvPm4Mdf59MjpYZqC9mzVvN33fcJAZk9yKHFMVbE6",
  "key26": "2cVF2ocAfcShpZeg4uxtTuKd1AcSU9FnRHiKk8YqCJgZi3o3uDf43pmpqV9S5xGEHLMziwVsPgoLC62ztV7XgFMM",
  "key27": "5bKsmdtE9yhngTyFw5gdqTPmp62uK8cSQPbBVbUyZQRgQLZPcotfduiuHDB7dievo3YEn43kfhN3oAt27DmjSKmu",
  "key28": "4FNWWdgAUwzT71tMDSsEqcW7h6EGpResJQ5mwts2dDrabtXBnisWgo7M9AnftmDNbinTwaYFhs4gzPhYZw3uCDWu",
  "key29": "Gyphh37wxSPoic4BFzax5bdUJybAeBEnj7239oyS2xGJkk5pYhRtFQJunDcoDGhx34jt9tmSaYgoaaVU3kfFt9o",
  "key30": "4A9vdLPQP697uyVpgr9b1zy88ZWGjLRrNoGDc4v5F6WxxL4o5R11TboURefmsYtxR4wjLKfNacbRsykoo8f7momQ",
  "key31": "4csa6gv5XCqaDng24yBvDKq4mrcjRrk5WhMp8ZPq5hEyqvNbW6wBjaguu8bb4CN9NqT4EL4QG8bogz3GahXueHDK",
  "key32": "pP3U8EJkfy5q52kh1U7NCTfwEPmUiJvw6UGh7CGrtsMwdJM1PNddF74QGCqwGwwEARX8pczBYTcS6Hq4sdxdfNV"
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
