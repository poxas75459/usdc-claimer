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
    "4x9h1q7D2pe5M7JuAAqZrQs9yc1EssW9o78WqaLPHk5f5775Jzy8qtjkeDLKnQ84oTxahQ8s4tyqCeFi2nJU7nFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lwo4mERNf4rqD8wCVrvDjAnLAHGvcBSMRbtwufcpJ9mcZ5Si5oyPJQ4Nc5AeuGUwSoYSsc4nppoqTT8c72HgSx5",
  "key1": "31dKvhBrgwcH4X4qRdSXKxFEACbf7U76QywkNX3biPeMNYjejYQkxqmBFcTTk8GzhVtrDb3c8TyCPNYuLwfBQgBv",
  "key2": "2guCZ6H7cvUP31vGf9hPFKeJnudpEDkE5P8ccFZZFBoxeXSxRUA3esDJqoWbWJFUepEzWM1Utvp1Tn4Rwqy2teiG",
  "key3": "4yVJ2LvDUf1mY8Wv4w3FpZtvqifGDqdBRQ7K4qmNq9CoEUm958NrDVBrM8sFMUGmicbQmG4xm5LPqr9H9eMnz4hK",
  "key4": "44ZXKooP71qJcdceASRda85DKYgANCmJNgETuZGXW2bh6WJ11ugNwUrLFz88xPfptGcwhKKfapsFeaM6hm5MSjuP",
  "key5": "4jq7LWriemtkyk9zkc8LsWpMsv85zHnsTPjAdtv55DbvW3TiWy81YCVWuySDQAq2nbY3XjDv5NzadTkzEVtSUGUG",
  "key6": "6kHDgRkdqaUivd99JbxEuhJYghf1CxUkDXJSAQUWV1PZD3LKwXkdYbs9E3sR9Fiu2eNfrtBo4Rx2Jn9EUxfrvne",
  "key7": "4HcVsb52bGRzt2mAxL8mYbmUGm3Si3BTBJdYcMthZU2pGZ3wfYzG3SMdZ7rMPq8uNSLUyxbDvtijoy4evv77jTBG",
  "key8": "3ssBS6HPjLj7qqvcfWbEfj3sdjREkCeKwqtrPd3NXLqP1QvM8vxWYmhYbLYWZe9Mk3obAn566L8731RfvBgQeRye",
  "key9": "YW7us8J4Jw2fFwwzwGe8NfPbMj6L3ADDQqC3272gACftHsV8ZMaESHdTsSLSdPgrTcW9c1RQFqjd45TmGpz2t9o",
  "key10": "2dFyQBuaknLeiabLwdwe2jjzpYY14dZRb42szSAFHXYgP4JDjxgop5pPnBiLzXAxpbeoYDRAGVMUkwPdsWG3yz14",
  "key11": "4366GmMkCcSzdAdi4rPsD3R4NHUiQtjqsJL72qPP18H3BikESLGMYoauzpLTLE9gfKFRfm3rqauMXKLuYx5RsCpm",
  "key12": "2QRyPCvKcWK5nK7CEKPoBhkxBFSEUEiSNH5DGwKESW7CHee2wT3JixEtktb3ZufPxW9g9KcNB7GEZpoq1bTq7mCo",
  "key13": "58T8dY8d2uQpn59V1t2hyPTLwdEQc5Sa9P3bgBqXK5Z8kgg6knrn6D7e3eyxVHKbEQPUAwtLTghWyBi8yAbGXv4i",
  "key14": "3QbkoMyrgDRqv5r1JbrNk1GG1LQpKRp7ds8N6UwuJLH9Wvy8K54qFsvjJdD6cJAHXr9dzwe8Ye8indFhJeJWDtyE",
  "key15": "5eQX6vjr3wgteJAVEUGXFVu2XZh2qRH2WkiaoBN36soDZoznJ1A8D5VWuFR4gR4x8FQzdqDuUujRzcn74zfhi7Jc",
  "key16": "5gWwkFFKs3ydqhdwGouAqgNR5GsDfpqNcpHi7j3gwBuEFJUpdvWv9RiA6xGgkZUhDUXHMLUFtQMSrRHZZkJnk998",
  "key17": "5ux3BZdNFdaiyUrcHLzzQXE1e1Z3b3cKW4qDq3XqiQggPvXE5BSz8Azwbv69UzbfjP6x4Hq65gH3hLxLVkYDt5DR",
  "key18": "5NtGH9PKyx6EbhB7sso3GW3ME2eSkez9DiPvwkByuCDXeJ93ec9kD6Dv3Fon27J6wXRLHvAigceU1388QRYNX44G",
  "key19": "J1j4d9EeiZe6anifoph62PUHapz7xoTQRZzkZCQXTr5giyxRkuR4REajQvWqujyTYvXMjP5BRCGbrBvFT96ECzc",
  "key20": "3zTYPbFcCrdLJg7fNV44FwtFaET6RRXpHnyyWtpru4WJbQgamBmhNGWheUnd5NEHi3qsfZoBW7qSNqG2vXS1ezgE",
  "key21": "4RURvAbPWzLcKBCRCbDfkRJaooA9juCoxi2drEp8GMeeK164b6a9zE6EFS1U1iVdQ5HnvtQojreBxxqZyCFQGa3g",
  "key22": "38Z3mcNWLYa4Z6Yn26SjsAE2BsBe8d5VShEqYK5whj94BwCu9ADoF4jFF1H6XpYjiwMfXzfkByMf7rDYcweKjBos",
  "key23": "52qqBLG7vfhxweAt5mpoWg2dfLfyKJDDpfq4WhyZumWatRyubhdWYQgLUQceqgs3r2W4U7wCzodcNErTmevFBLBN",
  "key24": "3EEHQXK7zfm22bqgtyc1TYq6QAjsvSsRnGj2c37M3tyLtgrN5yrJc96Sf2bEvSKt18WzbXHD84rxko2JtK2MJkmF",
  "key25": "4crpifhi4bwEH5n3J8NZJ1sLHLGk4cyaoYmToLUnv3jfucZkLcQLSV8eF1stxyfANi3uoTf83mULS3FCccRP2Ugh",
  "key26": "2pHwxhQizCR1eGT8iJ88SUyxwZMpi5b966BB3hHJakoK7XaCVqEy4tbVkpaj5WdfTafFKVTUE7do9hHGDBqip8er",
  "key27": "4JFq2R23HjTpEQ8BnfwV8hSN5iJGr3P3tR25zdxsaFzeLRW2HMxQF9RBzoNX4mg9hxho6eZSmmXgZxre8nwmg9jd"
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
