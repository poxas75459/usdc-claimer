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
    "4waQeJ6hgTMZMJZLQYEQQ2Y94ZjYJd1e6Wzkxc2WdQz6DjrxLAKZcZBqQLtkUo55XtRopYN6Ut2a3NcUgSoE6oU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52eUUjxJg3R6HexKpZ2wS8TD5pV8ZrUM8bhoSmQjdpDNiT2Nb4kZh4NJQTiv6HWCWzpckst61GSPDiBFk15tnvF5",
  "key1": "3C9Nk6UytPbthQWLVYqgJGV9Yi5ZsNUJM54zAbFxM6yNVUzwRaQnsx5b6yy49zL88Q5ygjwBQw7mj388GUN7wn3M",
  "key2": "4Z8tLcbfQBvTfHgJpwLfCnP1meNJXBDvt1k31dzS2jyh3z8tGo2NrzGfsnH7TCq55TAX4ndJ9xRa7nbHXXJs83uy",
  "key3": "Fcwsvmgw9UnpB8gTibNNF5gUUm2QgWe3GipACdenHXxHzU4bg8uyZPVNDmujQJonwsN5utpARC9di5bFNhyqXwi",
  "key4": "4yrJKUzgmkm5EnJdoLkeVAEZ4EuBrtwUnCystt26XABqjXq3PvsckEESMPSVJDYpL1yFwzF4LRbpZMoMztRSdVvc",
  "key5": "5D72vRxYpZ1XEwxPbcryrHR7mGwdrw3CBWUy7D2Y95H66oBDQpEZbSmNzbqpAzyzReDWfzVDxWX1NUHdfMwC5ZcL",
  "key6": "4GC8DRK6wZaq1Ej57EDTfnudidFxdsfjcSj44mY29Q2cYsvREyUy5KKNn4TdafsipBMk7gEB4G5SUrTrL5Sa5uSK",
  "key7": "4dSCDC9nY5P8mRYuwrydXhMAMpEt2V2rHGE1934QczfLAMgjt7in2b3EJGthAXm4Mv7W32R9svmNMXBpuqkF47K2",
  "key8": "3F5zoinmQT1vbdczPC6Rty7cqa4PVNEmBucAHRzUzxkMLQVPDhuCVoqnLwM9fmsoy5HVjNrkRKrUHKJq635TsBzK",
  "key9": "4inbB2xuhPV56jfxGeP5mqQdCKiy4iYh5G6NUcAUxJr5mceRXFLYWXNkXDFfwd7Sk6PcxS6x9ZDz58s83vsuMXkM",
  "key10": "5dGsSkrT4rZGyBjMKVVdKyXCJa4JqmfApwSwXvDeHNkDCbEEUpWx6pLv82r8MFyDy8rjKpRzKj63eC637fgTuUDX",
  "key11": "2a5yCXkpA9j9uTqsXgMpCDSYRPCB5CvoegYZ3dbxwiFL5bC3ux5zFrZfHUr6NF18n6GgxDEYoGhi2uM4aXsY6cXb",
  "key12": "Uq7DsG9TmTLw5RRMhG56AkqMN5S1dAzBqptAhnRNPe7CV5UcWJkNYe8QAfX5n7yHBB537Zh7vKtqRUEmM5zxaus",
  "key13": "2Gf4kwUcaxwDTZJjn1aGPec1VPkWyXkiQZHs1JzqaqDVrLZDfLH1Z7Lh1w3hnhsXEocAVzG67cHjDVq4PEhAsrk5",
  "key14": "5wBopNuGpR5YTvEhbFnJmDNrQ4x7ieH37V9mKnTCqFVzokQwhXP4zwJzkCFJyYDizc9SkzWf4m8D2AX414wkyJBu",
  "key15": "5pvvfXDpNQCemyKA65SqoRNPUjANXy5mHu89UgjKNJ31SvZ3y8aWgh6oRmexdqeFFaMjFXvyqyrcLeDsXUVPS8BX",
  "key16": "5y3PdYxJBe8eoQNRcDdYdMJtpddVVR98UbQvESw3JNG7TZMfPZMUsavScRM8JW6Js3NtcKPT2nwhETnBk5T7Hjxo",
  "key17": "5nob1oLxiptzTHt3JMQ7CNeGLM5Ly3hTWk1CDsjgMrdFaALYUY1kUkrf3cqyCm9sRNgatJzTQBrSH3vAgURYnE4B",
  "key18": "5dnXsDf79cjEQ2Z81FXC5ppSkBbMYKW2K2NzB9Zwnr8qz29jVaao1R8uxAphWcNutySaPHfMgbzzV9u2n1trTfyG",
  "key19": "NUHWWP5oWmqpYhWNR2K7fwkF8Dscz81ThWNM7RoXRwXmpHSyo9odEa6zfRhYUYF3AEsGZyEVBMJH947sBxvMWxr",
  "key20": "N4TS1xmLwFGncE4h3Uhb2eYDu88WaiEMpmTuAzVctZMP7LENr6owKkf3RkGyaEGoVw4hDhEpPkynePDXPQp5jZo",
  "key21": "3AaAbUNhpTvhnXwcrJ5QJ3hhczca48MFhcPbJZMvJpoPeTVFG6abvrPjFmGCcXFZBPfkcnhGZwnEJPPjJ7jYbYta",
  "key22": "5SPHJw1WKev5n4a1R4j3woXPfPWfZXfgLwT8Zj3WGPdLyiBij9LBAsxYGMF6Ar6YGyMrZZpXvdxCS1cA5wBHxVbU",
  "key23": "4cE628vXHtne92Ccy8oZ7ohUTxCPPkw6kPLgwtfUmqpgdSRZtg42ywhXbZAomaZVpDnDAxTqeEc6kKcCYWuHbytw",
  "key24": "4vmVi5MajrphGpRg2G78XJ6HegZaEh8dov74TeDazx2cXrFenzumwuPdUd1a6UKWpZu8gx6KYvoLUnFFtQWoFmer",
  "key25": "28o7bdazGAsbgdvtTbjDyXb1E4r3Ex14Q8fyGUJbGiEpJVcXYaUSHsTnGKJkhnCB5G2hwTKQ78ec7JCu2Y8ytVXz",
  "key26": "edP6ZmDi99cj9zUuFiznvp5N8nEnhQWAKuJ7XJe62hEFrTAVx1eY2FXF536T5SWhw1xQBvAbboGE165Th31EboP",
  "key27": "rdyiUC3hV6gc6KFqPCf8uMGLy122dCckBkEJLeQiRykqaBeyAnMD4oE18nn5iBx1jFx1QkiXudoyJ251yomJcgh",
  "key28": "bEc2z3f4zKjGfNJ9tgLDc4W6RoueyPReyEVC9dedMCB7eFCt36aTGoNo3zDkiCTCGPr4w2uFWFprmTSVwNZmjyM"
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
