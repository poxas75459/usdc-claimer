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
    "3NN1AZpyNV3nvxK8rbW8dbi5qEeEC9DDSmoe4XqQuDAcXVcLRzumXrHyiKQ7cCrmWxbUEtB44qF2DZsi3rhmwrQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VawNh3s6MgBrs1Sik6GYjbatGLxgdNtNXmiGKLGQrjtJ2HmyfcoZTzpG9uhpyWczikMwFpEJdz7MxJ7dvZXarsS",
  "key1": "secs3SP4M2hnJrb2m1LVzFekjBAH67jK1CuDRQXdeZ51qAh3Ugoykiqy4bqTvdEkBQUcW72yv5RSJJ84cyzb6mM",
  "key2": "46nJxAofnEwwkd4isoatmfXF4nmq52shAiFDbAVmJpgvtKpcpuAFEPbnTSWGHg5kepPvYf3dk8nYtAimSGnX9LzR",
  "key3": "2jxo9Co3jgD6o9A3FEPjhLChaUhMbDoTBYAyEzeRvPE2r9UMuDB87i6TA6U5DaiSqUruWpdqzTnmBiyQcNLjq7GM",
  "key4": "2SR2rUAeSeGrEFu8WjAGc2nriQrhZ9aj6feSAein3WjLTtzcF5AEx63h6xZjQ5xwryawkfbTqsMMW6eFXUHrwgvd",
  "key5": "46hP6R8woaaWfCSeTrrGEzSH8AR5s4adCWddYWUqVjme6oxeZybnJPnDCGAVgbEvJkLH9YgHicky5NuyBhaG81rb",
  "key6": "4occJ6nTymZPnVqDpAdo3Lv4XYyupdfGcv237PPZzkKojDFGwTEi3k7pMrDxoWDAUyybHAdAhvumuQTewKuQisL7",
  "key7": "2dnytT8DKFhcoZeYNFq7rBRnFnhXw3SgLA2RnJBs4iZV29t9ZkFDQWxaHpvS29MtBBXX9AApoM7VbavBdjZovr6t",
  "key8": "fBXUWhvXcfY3Y1jB3zowQuGUdPSB8Eg5PoUQCgHsXkpDHVsniRiggfG92aANFBnmJYRCTNRRjLHMthXocf3xms1",
  "key9": "5CAxDakbB1nccmzQi8YsbNVMFcaHoCPE54WsyjiQCPzEuUaqarEAkQ34vaXR8vmJpFNQCyc7LU3kRJMYWAQoLyQE",
  "key10": "5NXc1HoxnnEd3V11RrYH2FeEqAXKBrjfnGAjFa8G1BHfTqQZWoDEE46Q2SfDW8HzLz42NGSAQjZuGsgQXUKjLeBT",
  "key11": "2CWKJm54DkuNRbuK4zWkHKfJJN5v3RqkWndnFwToZR9G3wDv4Qe1D8tyLg8hfidG33imsUS1JK77AJgEwoZ6gkGy",
  "key12": "3iK7XhSq2epMhh8wNX7V3oWKikahB9fow1DfYk1gAT5w4xPghX7Y3Yh6sUwG5m35wdJfqTBPeyxJHmAYR6ikKMTD",
  "key13": "35y1mrcXYNtMTPinAyAt73Vy3feDQMEKCfgevfusLKv9p9Z8D2C4W2CYLWZxczG3uDEyagCc8ckP6hrs67yGeqa2",
  "key14": "2GJYP5rQinZjh4hPc2qvVAQEpGkeZtLGtbUBmUJCwLGC1hm49AR9LdvGEQay5uVQ1wXtK3qkvLF1aVgTRNdFPy26",
  "key15": "3iwoWjptrkQz4ScQNPVijqoipKWQcxaqfLtvLB47dbgMu2b2199HQwigEbc8mwZ4G8PFiWhp9FaAWPWJqdYVnPB9",
  "key16": "4PhofqJQnpdWD5TF8C4BueJVq3Q9P4gifAAXsSq4zGmhJvpLTtXSNfey5xydmbing95w3Ws2vtscr1oMBGDHnjxg",
  "key17": "2iHDxDAa81itWiRYLVaQ3T7eu1U9jLTXD388PSzAMs5hSymmTYqydSdFZZd1bGGa2sioDamMauNWML3L6TnHAwLJ",
  "key18": "4qixatBVTKum2cfTmMZzqZzwknPh2KEgzdigpVy4B7N22Sk54vMBerRdquaqcZ9yPh79T9mcck5dsSSe1MtXvKjt",
  "key19": "4QFGu1sM9FopWNtxPMbxTSEpUPsDznpBNomKFPaB4SYsywJuq6gv7TV7GCcyQ51UGsDpEa8aHPobwM4NQBTy2HTF",
  "key20": "yQ7zJWBqpZwjRRXFcaWA7gwhDtNhZdrMcCyKzzUYMDWKZsLxnYDKdd9Wd5uJ5AVuTHpG2QV3YCmeuTD6pwrpxeH",
  "key21": "3HxrUKnrYzjqmVr5yEZxsTy4Y16cofVrL2eUnE5Tx8vzsPNK5rYkNZtZnJn2RodN7Ya79atffwJxgH9YbV9EUUxF",
  "key22": "2VidCWozCh1smQgoeaQtaVKUmMP3hXF93YiM45pdA5wWMQq6pH4xNcaBfqsYdzyaTkbAchzuKmWCdXLDbu4pbhZS",
  "key23": "4BZ7QVBvrQM44R7XyRVrmJAomXGKEU31YUyAbrxJZ1VdPRiuJpUpZsKk3RB9JmPV1BEbFPhYDQG3cK2AqfYhCLt7",
  "key24": "55ybmvKkyRt7TRS3jPLmhEcm4AG5jxNsqLGBbNYJiiyGEoeA4gGzK7Nouj7YupAtHaTCqt1MkdNva4qcvP86DdwZ"
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
