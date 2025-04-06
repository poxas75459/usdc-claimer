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
    "3UV7NRsz7DBn8ufNA1Y4JB3a7Nb1mTgwNkCdMjEhiYLFtuTruuV43gr788zwzyRSHBCRrsu3BbzAjCpD4wWE7gAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kpKfgFmzfstksHz5Ze8niHbDw1AF4Aa9HrhpGpE3hdXTkTsJbejzSiKuxU3a1EtHnjcHdzt8gsmTetQM1QFkbPD",
  "key1": "5x1UR3WP1Ms57YrWyB2vgpAHDVG7RCrET6SDkrexrPo7vxVcMWo5ZKssv7HGN6xYDLDSQ1rDLLGd29n7Bmu4oU1j",
  "key2": "21qD1MFLzyGAamJhjoxQoFVQS1bELwesZoqvfmTSsk3DkAbDQwxdYvJi6CVgT5Je2xkoEJrpiRHuwZ3BnDye8eiA",
  "key3": "unBhBAoDejQ1TeNAwze5mqZarL8hg93YZLoku6RxfijNi9dTw95fRmmAY34GxEeKbuysyQLnpokf1rdbwxAHUv7",
  "key4": "4LjQCw2JHf43eZNXxAtL9bGBEVgDNWk52SKGHD1xHCnXCSyymtpxSES3p2DjPVezvL1k2XJedvFafiejTiM4ijXE",
  "key5": "5xHvRoiBCgZ52y8Q9AZTSt2i7YRt9WLcShf3Ns2wZYUhKpvvnxZJs1zZkBHd9ujEGSEX3v3H9k4Lk3DhU8sPKV9y",
  "key6": "2daWFat5RhiKAKMyvLq2bQcywgBYuX7xupmYFSTYHKXFJimG9pyq7sLiZEfghKoRfdKYRWRzPtn7RJEVHCi6k71R",
  "key7": "3K6NEcyHZnBnm4xGoUjRiPr2VYNjQX3GT86gegpsAxGbhQry3YczTtQMw2LCbDa7jCH4hhb33Drgo2UfCth8jtbU",
  "key8": "K9WcXxmXXpXyTNiTU7SYqZc7rCG24D9y1cu731eczQpn3c15hnkBMXYwMhnJHLiSa21bNsYh8HYWSnzcDxhRkvV",
  "key9": "4eF6q3mbfCcBo1ZTLsv8vrHEqPt5fGxVbs9LdhFPMe6Y9MaXCCSBEiZ3YoTPEx4ftRDxy1C7RfsfHTTPUsNBtgMc",
  "key10": "38fH3EG9HB2iiTpgc3Ls1VxVsFzB8YQgTaqA3KPB2rnV4scU2TKFgAeSJpd5LrLGno8YFZjgJ1SokVoRGhsCKtE1",
  "key11": "3AXU8WJDkqN8kTZQtUcZtEWe4475FT3ctLHCC5wsPbgMuxPAG3HbdWwMCvWJxjLJ4F6YDcerwb9g4PXfQT8USfDJ",
  "key12": "4bP1rkQxdhfDp8BPom6dRaX7coiiWrbC6XHBinf3k7PXCWhF9eZtSvGDi4tNhJrdAeWkd15wZVRgYrw4cZ5tnkmB",
  "key13": "2HosJfErFQWoDJD6YUao4g59NfKw5QXycwErXJfzzsPvRkEaENZ3mJbRXmj3oShVa1FnVDKaLv8Xbnse2TrLv88T",
  "key14": "3z3dyf6Bz6AvC3vFXG4B6bde1DWAdYPAoPy6rhafYU5L8sux7PS9gq7vA4ovW3Ln93PJDkDTTwxMj9JL3ai9qGVD",
  "key15": "zrF73n2buqD6K99XiJi48FGgPiiBcNPe6SBDhjCXaGianLmbNkkb7df6V3VsgoCRTGML8gVHQrKURETbKApqdMv",
  "key16": "T4XMQyZWSP6fXdwpoc6P4m6wvgXdroZbAturntDmJX8FFjjCBcVNiErUNqtvPrcBkk5zX8ebTkbZXvMCeNxbEM3",
  "key17": "3Ej3ZNDzDRw6m4q8JeJkahrRLnSLb3jFrVM5iNw9Zp1MbgfstqNQNfbjkLwC6CoEveg4po51Y4bAxXCeMGekB2dJ",
  "key18": "61V94j8vwYnvkS1qmwfV41AshAMr7TFLSx4UTM7CrjgKT4rmgQv5nNYupuSs9kjCCgnbE7rC5GT2cRY21qLUy5Hw",
  "key19": "3eCi8J6jxiSdQowDEKYS9Ai9QpWWnk47UjZhQoR6y7nf5r7XMeexjaepifbgBm6o7oayguKAqzkrbAMamcQCrfjN",
  "key20": "5SApg6sYiqoaqbHFko8pVEMBns93dJrGpj9H9vZkDBbfd5fTqJv9rsSS6PgeR1zBKANfw6WvRyY93t8kXcCUAb3A",
  "key21": "2Y9BMPnmd6SfrGUUGy85E5Amu7L4doktDAPvbNMaxW53X9obPdJdstMJUxKsnRjuH7nVSXPUe8Z6kq4cYf65qoFz",
  "key22": "59JyQjbzbcZB63zW4nQP4J8p48NfnqpWkkB5ARhKWqZAa3qJi7mf4kAKHFqx2j89ig8zC63wLjXVvta9N1hGMEey",
  "key23": "48rPH6cxQJX4brDVBjQkwE1M549UMmQKqRo2y7jrcp7ViiLhErewDFQPhKX8R9Tn7dEHfc5Xoj7vUi1QoD1iBG68",
  "key24": "5q6pdpLNUEXgnB7LciDuKS6GYeLz7KywH3wkzNkid63bdKFxgWWNZPj5TMuYKxEAAN91u86pJdMZXMEYBSRTcQU5",
  "key25": "2xUXmENVXCEx88B6G1jEv7qyFhtRDhiZvy3VkkAhYLpnGH8MMxrjoEJ8geXsvUTNjcRsnAihAihnJ7TisDPHdKJk"
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
