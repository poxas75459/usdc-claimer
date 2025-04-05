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
    "fR8yRGCP6uzBEuLm6M7LRzYEFuy25pH78KvMUA7eVwHx9dTLA5Nz9FSJLmSim9Pjw26WphrHtisDUS2S9rh5ouE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xpwHs6SKCBjVwbdUTtmqSpNB4zDrieNsNwGXXYYxV4Ue2aVkQkcT9NTZnKKqbvmApvdL771S7mPe8QQThqBHck7",
  "key1": "2Y4yDd11cyE9gLE32fhBNa3n9VSd8aWzjFbkGSE6afXQqGkgy2exjzF7kDgEYwcfGvLHjrHYLRe3Jw1SHiaHuGKp",
  "key2": "4U3nPt81g4zMqj12dNqsmqRMZpN49rYAuXi8SmjiUaxxoqqA2mA5R5EfUSBxUEJ4nLpU9Xa6JMrmuVh1Fwwx4117",
  "key3": "5A4KXN1yacgkwKNzhRQngkPTrzeraGDfgWD3LXTX5a4cPMEuz2REv7mYXMo2jaftuZLFJorFtNYqP66vGr2vMrtN",
  "key4": "w4u94qk5cSgzMXb9apJmJPefbKRfibzEcoqfqCGv2pDi31rPZb5RqBsqEk4xk3CDTQu4jdAS6BGpUV8D1cK5fgQ",
  "key5": "Q1oyUSE3Bhg2W7bwK8conMxbj1tdSPxqNRt4JFEvqHQH11yisw23KacB4xYyhx86ohKKcRcHpADwn3rsGBj6Ra4",
  "key6": "3MyJX7ciFpK1CZgLNUQBk4LPvLNe1KwUj7EcG3Bfsmhz5xSQuCpSsWjTiLWXcmSLsgJNYzWY6BTU7SXJ4s5gkdRe",
  "key7": "3giEHWeh26cZS9urKHjm72GuFgC58svqANr9djDJy6HZsNVb5yYJKgUbY9XYVaXrQPqMDDLxsmX7y7vZTsQhFa63",
  "key8": "5cyYbA2DPczmFezGP4mhKksBkhs8Hy5PPVFWLWsDZQpXEWGScWi7gH912215pn1ADsbPamcEk7t8sJUiwgCbbNHB",
  "key9": "4UotxbeHAYXE4L7oE2cDrdW1Vg1eG7ZUZv8Q1JWXdjrm9icqjRmxS256xU3LUvqH8vmJH13VEGbNZkhu5R7n2N8y",
  "key10": "3nYuGjEnJPAUMB99TwWWE4ts82Gb5Tyf5MoY65kn6bAjGKyDSsJo6q4tmraWnXXo1GonqY21281AUawYHofawcYq",
  "key11": "3UnyCJoafR1rKe7FV4TevTKY68QBpodMHW5YNtWzuoZnAPoULhPcz18dT96ZBP4fePVEVxN95CEabwoEe6zPHMtX",
  "key12": "3ppCHWQ2Hniio2eLw9SmLtFNH3DDftQDTwvpFQJRnpQqVWkKkzZJ9ohxn2vTifQ4vAsqLTG4jF2PUc2tAjC4N9e",
  "key13": "5LRFL6wSXH5niAFEsxxaTR2P44Bqw7eoJMb1zvhYpLoCyCH3wVbtPx42PuoFWEK25TMjyfCWsjqU2sT4yt72PDZ5",
  "key14": "2nK26bbFTRBXLtDAEFED52erUUdARfTiAcwqdCuy3fcojhiFEw95mBYFXmMmcUqJnWudiKTS4v8qqWqndiaSuL7u",
  "key15": "4a6ZiXduTNgF2HjBX2cDJWP7WuVSKoZdQz4wCDuHAjm9d82W4eUhFZxVMqtWJPnPGH1HKKASA86Rp9DVZm1Gdbps",
  "key16": "YLtro7suafiBYnAxEWnd6XorLBoDAwWfuaU6UPLqYeKVMWaKRpmg1uJEKMBwLjizvC8TdBGVPA9BntDbnYUjrHp",
  "key17": "565GWigAM472dpyWxdC7YnE11bjpT5oNwczVNnoSd3nHnHqHPi3WBKhNpsCxiccf3ZvdwFwxU9K4TXq3z24TjTxj",
  "key18": "5BWKsuX21Pn9qukWCrQJE1pPWabXfwAHXD4b9xkg3vyRKZ6ncwZjrYqcWaAEv5Yo8Z3BVJHSV2TtA8vK6xPYipBB",
  "key19": "iWGtq16BkjHjTQsADHFMxXB8TvNxft4Bq8xE8qG3f88hqWUZEghmfCy8amKfbEn8Y7cZun1LMmTLCpToDSAy5i1",
  "key20": "5A5KPkeYh3mJ3iuWrSjumjBG9DdSQKkxs4badmj8ZW3PtuQ8CkqLxVdKnKKYPc8rwEiw7WWucjHHb6YGBs6jqpf6",
  "key21": "5tHKZnK3S222Nr4xhxLysoGNkLNwSPcvfxMt8pc9UkVxYYiPY4EjwtWVPKJJGbjzehKND2DiZS4RpXka6RdP9spv",
  "key22": "LaCDmL3YgCCwxToZP1vNXT3t62spXd4aXBV8DVqdsRUiFtU3wENM3DdjVLza7ajb6FVbaqw97DjYsHvPX5s153g",
  "key23": "64tRpo89LQpSJ3QbbpjYWRsKaM6UMnTEvfLdDwsJ2qnGzKYCzmefxFxkagFMBSBnfVNmAP8h17DDAubSHi8wZJS3",
  "key24": "3dEe62e9zWVKBRqRb99TJoPs1d7XLn9G7WNXkeu6qFPWEskbwWwDzHGmaGstWX34523YDGUepPUCdP4gQoo1zE45",
  "key25": "5RDTWJSVknMzzDjFrSSiCCKqRMUM2QwMubgg3QWaCTVEfwvyB6to1BEvTRi1CtFxxVahmQG8YjZR9tS9KM2UALyd",
  "key26": "2EYJNtkdZEYYbrtVddfi5xBXDd9D9n8Ft5Vym83L1Yr9fk64uJF1jMPHPKMPkmSQcCBxd6pVRRFsuEyvyiiZ5PEQ",
  "key27": "4q3p7PPYVAscs2Eshgjbe5Qa3tNTjmtiCEXxZ6kLYWKmnTZdnPDeqezXv7UQjLbGSFes4hJzGB4VTrCnuwjuxtvQ",
  "key28": "4xgxN3w563rw2K9fU98VXsWgbwEGMPetbVxs3RVHLBNTi1sD8w1x8bYtHg5i21RoQHHdWT9AvdVWNbwS8jTtkFpz",
  "key29": "3BbpPC1jH8QAMsrMqheWh2z7b8XzPDh22CfV7SDxWpfj19wJFRdgdGbqPWMDx6n9PfeEXaWrwtJFUqpm4r4ATtKn",
  "key30": "5FF2d3CB6GjWsXAZ4LPNR6MdQLa2zXYRvebC1S4HqgsvU41NmDP5nbFzUFFQSnPWGHeS2sQyHPLcLi5BKbc3LKGF",
  "key31": "2hTP74jqGem6jvQ5c727xipDwpXzEEPBkJoVhwi2iz8Zv6h3h2MrmTjugueVjpP1NCaVLnffQJTtq23m6X28yszs",
  "key32": "LZS8Tj9hXaCRgKQHzNX63GJqyyNM5HvLETEm6cDCkdboriH8UwdQf4odRDoE6w3TSywmHnHnT3xqi7yvbbkMHFj",
  "key33": "2KpEjKDMqRKh7E48wTF4ZRWY9ZS8LxqngGngrbvpa1GZ5e2R6hjFeHifwJ5nTTGsWRGxdDc2wt2awoyap6BGughP",
  "key34": "5madWrQ9aSnxxQ6htRTJH8JoMdEURLSdnhNcQFc9fBK2ffCuAz9DWEVGjxQznW14E3KKCZhvQAmAtdFUwg7btauc",
  "key35": "7aHASPLpbBqnfeY5Eaj1s2pmB2iCfMjLxMfej253T3g3MBxQK2NmAsxdUchYUftmqhhTNtPqNovKr6jUA29VAu6"
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
