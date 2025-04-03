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
    "4dgKXjRLheVtB6qi96hijr6ue9JgnWGpaFNJMRhn7Bkr65jwHbHRDRgh29hMc78nv9m1BG5bJSQah9Xu7372m3PW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A2Fv34VMGCEnN6iW1QtfeStBgBPFNS87YeaE3eNwhH1hGs4n76zYtgKS7Y8sfjM6X1RuYYQ8qyxjvSwBtaz3b5F",
  "key1": "2QQ6XaLKxkN1tgZfsL7ERh4dm76NPmrFLNt6D5vkP4Cg9gN4mh1PhwDzXLogcCpsfifS5Zwm8gH49VHrMewbQpjH",
  "key2": "54e3VygbcKvRW9ebXLyS7RjzGyv1AAv8AtMjpSkKxNbvK2LgY2Rv6iEYnAv138u8Ct6uj8WAd7LsGGtMmQ1rKYUD",
  "key3": "5W1KVYiB24c5TzFFqwQB6toDV1YaWPNwHKDLa9RS9QD59RswVJrbffKfDXkkYntFCHCUCGuKEScJnV3KtoHMGEUa",
  "key4": "2CgxfVYdUNiYLbcoUTnHcUip8E9L3yNCVxTALVjFLnFAqykxvqzfQP6zaVrngrooc4Sj4CKnN5nfW4ZnoJ5F89hp",
  "key5": "3GANh6X736tcdDj4Y9qGe9md3H5uoTz9mztNjNELz6uMqWuSS93GBNqhjYTVZFyoFzwCdWw37f69MS14sWRw9fDX",
  "key6": "23b4mYsQqD8Sc2Ly9n8ZtJvqqKaRHkxwR3xBuXUuG1XLBouSxoiQRGJtnXYRmC5aidP6NBn96aarkrZabv268WYa",
  "key7": "672iWuSUt9FmMUMGxBg6u4qPVdxQXA6cLoeVoffiggSvBUo8Sq89KVPE3wAF5gKGcoveubDRcssLXEnVB1XSPUP3",
  "key8": "2XqCbn9gBMH3XbVsYvPFu7AZePeZPGzpmNuEfJi7B71LVF8MUVa5xTmSfBRqL3f7cLmgKko1PS72UA39BVdZriFE",
  "key9": "61RHH33N8ts5FvNyf6KUfQbuaxNLdyMuAQCGXr4PeGUDPz4ECjxoNJMRsZE55MDYhpgqjhETg3D2SwKwZVvnZjX1",
  "key10": "55Zzh5eXUCEyMR28FMP1tKcMzE3YWZ9EpkK21p22AYLY1cNCGievM7d5a5XDXxz5s3s81WgcZ5TV2UqZecp3h5LT",
  "key11": "3L6UCeTEHogAqUcGmUnBF4niZhuQfU5xyQ2rkr9voxs5w26rBfPgYEKyQQPWSRZXwBkhEVTvCzHampTp8sx51UoY",
  "key12": "3iTvuboje36fZkYVrVs7nnPYwvyaZTYLdeSpGqP4taAzuRrHNYGjhn2xX6UoMNwbbA7a5S8Kd9dyZeJWow8eTBEg",
  "key13": "wpxBsNway9FmZ1Fi5NfWRnwrABqEFbpPPd2uiLqNBRgAxysxWMPPuVXYuzWkYtzf8RNv4rwpM3aBT1YjSkZm1M7",
  "key14": "2Kq2gwRmhjd9ddiysyJTogf8s8kF2CWZzY4JQUZMZ8WS8317LfkNhsKBY7M5Nqjm4tB9RXEEJyD64dwMdnpUnsvK",
  "key15": "2i8cgRgfhxLVgu6PaV27KT3FtrVF5nhncaDY6Nge6SpHxc3mKG9KrDo2wUeCG7xyx5dz844zEgCCpq3UwBpVYrSF",
  "key16": "2iJX6PGYJm6mbAhdjuDCGDUhz33sTy34gCLUENJMfAYCcG3WLC6p1NqBF1iKJoKkWaknCTHthbF2u4Sz3JBDunem",
  "key17": "uoN3uHi4URE8Z8zBn1XP13TgcHLW3ZcHegBeAMDPqNfxW35q2nc8ozA6YRyFBdx2gJEn7bWxW9w4XGQMRcV6Qwn",
  "key18": "4g7qUE5mTeCfnykgg4TBhWfeh79PcwX6dLMX5RZyGs49LyWXgJ72HVk52WznWPsNuJMeUeMZncRAwgqCi8qj7B86",
  "key19": "3rX9bAURDXSoYCmFxAEBCGpeGnzRetCYJHjGPyWQEwAgy6AMapM8NWm8UCd2nubDqr9DsPoY6HNKhQRtpHr5sXeM",
  "key20": "2KYM2gd9jv8Y9cQuCESf8BTX5HcJcsFDdm7Pfoaf4K57K2owqYBY16E8S5hG6Q3Hcxx1z8hMqkZDp5hSJtgTmFNc",
  "key21": "36u7Gq7ifutvk6mnDSUGNDd76Z83QjY6CoPKSPxwgXC6bz22UdX7fyRyry2iiTb422UAGgXN6G4CX4yXAp3r93YB",
  "key22": "2tZLxGqUWLuFaP6Ut1gQbb4t4UBBQhupB3FAsboSkmKAwHBWFNTFhkhm2HPdJQUHAKLCdA1byq9NRTS4SiyArEgs",
  "key23": "4nY5Nwo48s1UwgTF8RW8C2FtQQUaNWZu6Fnoge656AKAAsjtBDJjRiksWJQnGM58GzsXJTviTBo7SXWZfRzXMLqN",
  "key24": "3qphm9wrBzwPM3qXVw8488Dh1kGsRz1k3HYuPUJ7k1QXgA7ryPVnEQXCpwGRXderjKvaqMXyQM79E5vzpYEV5MuM"
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
