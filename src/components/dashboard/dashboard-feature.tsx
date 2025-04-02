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
    "59n1AkjAi5hh5945WayhY7RVZdMguzqvNeUeXCnqdiVFy8yfUxH1io2UbJcncSpWRtPegfoW5BRAKGqttSWBnApw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htN6aUUg7jH5FPHCL7BaTns4RftN2tF4AFejFJjwwjRWK3AmWTMNkrgnZbZ1f6tBr9L193cdRcBtVHVioCviwoL",
  "key1": "41tDb3a6WGftDzutyYX4EvDvRiqo8LWsHedK2cqVjjnFGLSfcsDftMAEL4TcDkDSBrjsgfuYB6wiSS9rNtFJVegM",
  "key2": "5HDS47yb34Z2P2qSEwTQnCWKU8eNMUGVYzmcdgZAzm9BpMVk2T8HqAB3HaBZow2TVgCnSFVuM8VB39StZGkNuS3G",
  "key3": "gLWSKv5DjbL2JpHpHQhEvEndeM7hga5GzhTtAcEr86TRQs4QnqS4WjgM27m3USAvvbUZnoJ1ujrwX5xKStufaU2",
  "key4": "pnqWX1VHABYidN4AxoU2Gis26Nb3iB3UmM4vreyMQZ3kgKhuZH7PVo4NJHZwpxcKZsZro9ihiT5yi6kWPMBkaJx",
  "key5": "62ZpeAWHCzbXE4sWmusb2r1EvnWS1nzn4dEo6op6DVbJiwZ5WVjV3aMj5BvKPqSTAAis1zSjMEFtkXLHcQFWsF93",
  "key6": "5mvftUmYR3bF8GDM27gSkWsN2aqbvGisHYMuJ3gDQ9RkqEouzY73tDo4VDkR12d9iKFsJAj6jyp5AtWxNiRBXHP9",
  "key7": "4LRLND5g8mBR4cMPMADFuqFR6ydkFghjpztCNSH5s6WerWJz1HD6crEZ1ru897uQPeLVabUJKVw8tzNkm7L1vYE9",
  "key8": "5ZRELKZjY4cgUGfsYN3N2zvtwouqSNe12BemzCfAdMCnz16HasdMbMJNihcZJ8Z3Ct3QfdzUnocmP12RxNpr9p1V",
  "key9": "57JQckWV1PJXcXbXuNnPS6MKvTkcJcNg12jiA5nx84kGG5K7Ti3zbKgQu4gCgHq3ecdiTJFAvpmKhAZBKr3L4GFJ",
  "key10": "53vpGFG5gQP5ss9cPm54vDinT9qvEfPHbWjirxHjEvPq5WRyVezzatWbyRgADhoH9Pyf2z4bPNBHXgzV1LfhtSmG",
  "key11": "3TGCk2NT9vCV1Ji7LAKqnxhFQZnbeeva2mvbWKwaFtsDVqPSKGGYnRo8Rmfv2GGdjhagdXFCG9Rx8T77z8bNgia6",
  "key12": "62EzVW94FaZwwLVfwUyfrJzWCpFLbRNL8qNyj93hdv7AzpYTThQLgNRjX4prZdLf7YTzrJcE4Yjk1wRPEGEMNNae",
  "key13": "5LqTFpQMcHzBr1KN4c4ZED6HmUEW9bkM4CUVs3CaschdvFiLfmFNq1rhWRJx5e92Hdyj8GyZ6735Hr74GvU7bkoX",
  "key14": "4K1cwR5pm2M7UTReMY2i3ftoooCLgAN456BGpYUgzezZe1KT4jBcMXynmZGjSpRvoB6ZCN26fNS1DRaPnk9LFcrv",
  "key15": "4HPDiBHsRYYU2hWfQwuKuMKAMD649KyfRNRFpj2aTrm2tCxMB9qZSqgjn9PPrCaXFqPa9YNh2tv6gKW9kjBWa7RP",
  "key16": "4Rte97nBPbRvWWnkRT6B97yZsTWcYMKcCahxPyZEFABF5mdaVwRAcmRYeuewDDtH7EHHdJRZyEeh3BcnHT5Bb3bF",
  "key17": "3xvz3AxwMTCAuD2AkazjcPdG4oNR9Wc4Z8AmTPBCMaVWnfWAFVGwrdWbyJZ2LtD7jxXGmya8cLSEqWQf2e9tngW5",
  "key18": "5Rs5tWy5vDahSQNeDzekPZRXpxSptgVNw3g1UrWc4dD3eJjBzhiAv5CFoi3TFAz4G9AxyGRjvxKFgyKBFUfNPSAf",
  "key19": "JPDPgpqpwbGNpyF1xqAvDXg3LhnmKTwSUXEhj48jjVRaHmZrnsKQZ1D9fpDRwjgNn9anXcDxuwhqE3maWCpUHab",
  "key20": "4KzDCDNveVqS4cgDc2uDh7S2njqKo5SU8CFqdpNUW5ftqADkRe8ECyYM7PiMcq3yb7zQH7BFMiu6RU4GY5pDWArR",
  "key21": "2DoDWhN4mnQhJcBMrw3RLyaeoBbjVKjerc82ani2K55w3HTNCE7C9wKaaGou95jzNoNL9UrtME2ukXWPRm9pfHV7",
  "key22": "58d7uyXKXAEhVek4vD3Jb38U4jh6GWPs6J2ahJ7NwgHE9QfSLtvFoL4ksisf36R7qEn6MNLBzvpk55dWbjyfx1XG",
  "key23": "4hXEirTctTWrBNur7to4LQjDoYoXxXUTqHBwhMBq45KmZLZHz398GVB3gpgchj67k6FxgSU6TWdQpV6MPzJLSF6A",
  "key24": "2jBcahAF4cx8fXSE671DB1kVbfWky2NzjR4GLAZavCMRB4hx1mdjtfjuqTS2HMf7F1C3XzpN53SDkZ62QfHmwSX7",
  "key25": "4frM4VVaXHngGLGgaRk5Wf7MYkzxTJUSc9NXDvMyuCftXeGGjQnLT1cLUqVKvBw9G93jKnchK5XQGXUHLj1JuZ49",
  "key26": "xeBACTisvY22payU8ZAhtkzw5pJspRGi6wipLTW5kTtd2FbSdy7z3fcoNDKy47rRE33y5GuEBnGxU4Su2AF5mQA"
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
