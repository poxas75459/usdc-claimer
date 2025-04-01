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
    "3zNopaDnH6rBEDG2x2gdbpkkDw8XkibgH1sRNKu52VNPEHVLov3zYKwxbx4fWGahRFWotFsgDU8kotW2pd3KMCAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FkMSzNJV6JysoaKohhY1bL9zdDzdjP1KwhVbuRRNrKvh1PMX6qshpCmXDoaY3RtpCRJ86qJbEK7wQjmG2gX6AxU",
  "key1": "3dwNiJ379NZ5HXUcuWThXgo8WwTGZWpxAUQDa5J2XcbTYomULrae6yy3uL2whMkRPXbkV3xuRxgjTFnwYi9FeNhQ",
  "key2": "aDCz5xoB4XjVsf1A87wgk65XrycHcHdsdSnETJSV9MqbrEimd9W4vGzX1FVK75nrNCPN8qgMJkAZd5bwcMewrpJ",
  "key3": "mSpxpdDvW86oPWzKG31rcuQQsjn5ikywMSGKszPys7EYWb8L99SAK6LfZpZ5cZ89upi1CF77ooBBcU9xZuCmj9p",
  "key4": "4hWS42HcsMeaJsA3AjrBVDxitceXa8Aogismzdu97FiFMvbMM6TSx7VrY1SVcjyiPajfyGnD3cdo9V2nwBrPxKGA",
  "key5": "2FmwmNJ2BQZkrC1kPwaMMvs4fTZsFC7DgUGEmwT53nopuFCuWy1weMeiZrgbGiFvecPQcaYoxBTBZs33MZVc6ubv",
  "key6": "3v4RVN7RhN7iKaU4E2cM6hNwUPtKYy1716fKMU3UiKBeHJkW2NuuVRVk3nCfoZAhcTXZkev4K8grVfmZbBUoc5EY",
  "key7": "yTg7YYFeXvFskGz5CLaLx5RZut5QEw78fYJDAuVd3XjLb9TXEFMf8gZbGU3GtVP7M3QSBrDDzBBhrATA8zX8bjo",
  "key8": "3R6aXLxTMDVPujXmaMTe21afmidNcpCqntmRtJuph4viyccGwu5er538BwLQZEra9yra8wenTURTCKAP421eDBXa",
  "key9": "5H7oam5cFABKikPscJ7TCuUpABP42hXe2M6L37MwrXwwQMJqrCDAgoGtLxLskUuAjpFNBxNsDZqvY6kLtReg5FE",
  "key10": "32dhubG1Sigo9EMR1URwWZt4QPZ56zVrHEkezVs5Lt82Aj3LHUgBYsxDns6rNewVQC359WWBhFFw25kKqfQYJWtQ",
  "key11": "5S7hfgaBZsa9CEUFu25NH82sRwKC2iJtnJ29b9J9EdEpuAEY3Dbdq381mdswcCy861B5GKpziypgh9dhHZ7DA88y",
  "key12": "4bP75nZbMwCeKe4YSrembA8e3bZj79PPG1jfz3YaDto5K2ZJAPgxHu4YFhF44qBDrwA4UY64FcwxtZdKekKTDDFM",
  "key13": "2t6NYKBr4FK9TLy3VTFhGLo62ewAHENzm5n2z2hFunEngP1ypyY3EhzMuVELjUWUAYYYU2nndkRKKrt8FRN4YgXZ",
  "key14": "3xi61jCJMJzX6fCXQSfoZqDzEa9x33YYGcy8CTmxnE3Q6eWuJhtceVY5M7EtUqMnEb5HWXUBbJugQ7aZjx9D7cFN",
  "key15": "4TirRLSCvixcxAgZskFyMQBivCUtmLFgqSxgQ7xx58XHoKeqGqgpqTbZnxmwHK5hRktn5XSbqM9mvgc3tjh62rXZ",
  "key16": "5apAYfiwfvV5xAj7hCq8HXhgzHSZNUDsYeAVL1Y1jmTkZTf7w4P19LEiKyWKpkorM4rerqj8KDo8CjLCSKEmi2vL",
  "key17": "5PW6gAiHyjH8nKh3AjiQ6PovHtFizcrviouAPHsDpXmxRzMG73jHQXqEMBNeLZ7xKtSF9uWuhco4hpWbeuhX9vzD",
  "key18": "2jNe2JeM1KBF7U9u5ao3JT8z3x4oKeT7dEpkk9njoMXiyWL9XuqhS2PG19CFev6egjWg7PiUYt72MHiJcq1HydT6",
  "key19": "5uZvUhsbBn2fAJ6UCsDtgedKeDnJEp7rxEBjK7yVtv1S2Z3nT3bnivZvrYgQccpxDnzGVBgvyCoHBTuWGQ7rsR6Q",
  "key20": "MwaaYJ5hcJN9jQcYifVQNBn6RWnBvmjp1MchfMWZR1gC2nPbXeN5ujfWZfRg3jEqns1yVxyVWZ6pwrGEZk6TTu9",
  "key21": "2Th1YndvyEVtKrwEyeVdjzv4knKT8VUQiad941Y3F3HoXdiGnELGvTVqSuw9Ub8V1GtiEWxcsbqCeK8JRMQCvL96",
  "key22": "34sm7xVRet38QCWFtuYUNYPYwa8o4Gxw4SyJuBURy43WMn21sMyC5xh6wFqq5GijsGcigUfkxPCCAAxLJ7rUnVVN",
  "key23": "2WhjzYpfqP25cQ4KSCjvxMhMT9jvt6ZqNHaZAqP5PkWR6UQK5MnLLZBoq3wvHAoD1USfHfXCgaksUQVamP8ooycw",
  "key24": "4rGo1z8HnbGmKFHEoeZABcpamUZNdeXGg2pLCPMjYz4XF5f94Ej22diYKcrSzQBqJPtWaj4t6wsCYv9NBFCGNcQg",
  "key25": "3PuYikvGPedhfLMXPK9AXr4RbpqAVgpecUEeUPpGie7xkGbSinfh52CAUi4YHdqNdQEGH2FRBkq3aQo7S3QhKD5i",
  "key26": "4WdiHVnhhRxW8wnbpszdEKsR5jE3rF4sxBLNtHoBAw3AS5oFYCGZEKQojKLKD45VPKT1kMnCvbrnhArALM3Fo8Va",
  "key27": "2ECPwdybDxgshUq4AhoeehAEgwjz6hzrDQQSAfv8RrNMDJVXWZtABduu79igoziBKuhT2CGLQx3GpNK8dfRG2AHx",
  "key28": "3WXpxFgvo7bJuUEMYmziuU9wWjpsq8n7BpgQMFqgRAjep5Kf1Yyx4PcdNeLtNCSdvnagYyESbfyWneoWNjqJqDaM",
  "key29": "APsrS7V92Mrtn8HesRWUpnrqeAXL12pSZDMrT6qeSGX6gZKeu1C7TsUk3mqhxhZT8p5KNamhbxJutXSNgx69MDU",
  "key30": "4CEgCzv8DYXv5jGSu5pETeJLFhR43hxTe1chwBPUB78c8xoW6HuHHwkJidHmR7f5XZ5py8KtcaPVTrPqKoJ3oyA1",
  "key31": "2jVDQSiPcKTdKnC7DZe1TTbPBZkf8GtX8FfSib1WZPURfGHP63KxWgjPEdReSi1WiabNvbsh1MN7bafzaCEwviuj",
  "key32": "24sjRLexcPFCAYMCQVcJ6984sKmWVwiffDLPov938eKZbEBno2nQsGw8kWvC9fNK4A1rRdmPWRZW1uH9pXGhfe5T"
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
