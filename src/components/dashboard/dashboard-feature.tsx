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
    "2MK8mE5SocTdjBvMDZZqv3KpWmGAwt3FU3psRP4CwCGcW4hAj6WnAVZn6wkz7RMGgHy5o88mDxY6AKDzknq4Rcu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sCaDrC1rkhVXqeCtW8rM72q6mxM14dfS8G67gSvetf2TnpPiSCExTzdBUw6MKLemUxLMPBiMQtonmBazD28aGtR",
  "key1": "5foWrVK38FPKnPe3QW5cshmRqUct7CmQivxaz9CnmWUQDuxEj8Kn8quX1ZM2EJithrEsvesMSA46taDYYYqfHfsi",
  "key2": "2U3NLaxHX5Bm61ng2Ht6fEsQj2GXekPbYBB5zJdXs9fwNT5xUFz6XHyBQSPFAcgEjmBRinWxumi6YNpjbM7Zf2su",
  "key3": "5j9w9hnzcfQwGj3RMpB12MdvCw3pnNMRafbAFjVGWKk6BrCifhsY2sUjJppYCwdEEPN5AtcmFcMPSLZuTTwxjm8s",
  "key4": "3VfeHCSizmGR6TGTXx8jVxNe9MDmGHYveMCgBFtZV38D1T818FsVpoergcDWVaUroR8djK8P9UnajaQLgapLfnpz",
  "key5": "5YEpu8tDQVNDebVcZwNxcLkzXTiJnmGK5Vmp7TefojBY44yokK4xPessx1tYDRgiLG2yNJtFKUZ4LqVyr1LqWynj",
  "key6": "3ewyYxbassYw5rBcAMQ2of68jNJQ2SE4ZpXPWrAn52gWXDtLiWJsyoHEhZU1wAgAt4VxgzskYyUuC3y3P4sCjspv",
  "key7": "3T59ViQMURYxfDbwJMs9N7PimcrRPmsTjeCxqHHyLS85GksBUtu8p1MCqyuWfG1ZbuZHmcTb4g5n6YBQWUvwPoYw",
  "key8": "3rX7DgG8d8LC7LcETBvvBwZcsBQhixUuGw9KTkpSKxjfym1wmr2cym1L1rHz6fAv6vgWvA9RgfCA3VMGDP6yfGLt",
  "key9": "4cyX9npaUkoPgS1qJH2gxrsPJaJ6TbMLCP1uVoSEzDaNSK4kWdPHzw5TComKB199uYk6HHjWUbD5RM3Pb4e2urfo",
  "key10": "3eJdVF5cqynHb2vT5v9JUwHiU2V421irdN8NyM9qr6xfvKSgHZrvyqRdEg3u3nsNm8DT3nC4GEHARG9CHnjv4V9T",
  "key11": "2eHshCGDnaQwJGP56NN9m9GvZfRbHS97kfBgx2UGE9AaCJh4QV6yo1UmJtf43jGoEZLj399GzEeAJ8wLrLEmt1t2",
  "key12": "2TDkUkSwCt2M1dGizo2qM2RjNqn7t5D3sXqiQD9w4FyJTL8PgnoHJCdN5nMMoKJVfuUtSfoVVVGirBu8GTeCkAx7",
  "key13": "5cbTkDinCLapVAEvTyErtZaRYRZy2bWswebVuSHPU7KCZM8YMSWsp6wDtpP8XsEMze9umiCXaFjAUo7k53SsSdcd",
  "key14": "35hSYXx954F8bPHuTCGZg4phugiTATKntcYGwYpM9GeG6vMPKmnsNsttejCqmCmridt9ajNgUW56aDmNVy7zGwDq",
  "key15": "9qgsgyLdySsrWnVWwUW6D7aeFA14BVGDZErew8w7MtBnEnwxDEzBaSGpQ4ZTnaTA85Pq3YmHgiiPCWjCqnYaqvw",
  "key16": "2W44iRAW1xX6QYrkXLqXhV7WGcjjk9VYpXFyMCdUi2eDvnXCfZrE4P6eSbfSWgoCqoCeEkhgM4dHW5GAVSUpNbNH",
  "key17": "59boMKvrWe2v3BMUVvzrnZbw1suSnd1jNrwMHnskxs79JQvaykeu28tsUnevj4MnvDzShfL8GRVRk3qyCBDXRTf8",
  "key18": "wGqjvzDrh78EWCFNsFQY37uZEgJEJWuV1XGExeJnmxjHt61vxrjfRMxRQFRiXdomtdhA4oVnoameGQ3qwQrkFgQ",
  "key19": "2Zueo6QHRkkdZYEv6R3fcoTzRjGs68rNSCjeXa3xN5SDWYMDhK4HhEFezd93EGsJS4iUL4r7aJZTod4dJ8Fb4DMw",
  "key20": "7FB3erXo6rjBA7oAPVZtb48BKL6tZu4dauDpiKJpAPiewwHtT2WdvKv7ErxE2n8oVNhgJYUQxtEX9a9t9RzSEMy",
  "key21": "3xeTFJMLFFWr7xC88cAkMYeZFd9AR2NsUybgdbaSkMMQdYz9zws7z4Z6cDFfkfApJSfKQqEjBrKoAXPYfTdnpmqF",
  "key22": "5DJrsbfmcWi3dRyDMBMKMhC8ERHYPWPXYug4gRyvQPd5bA2Ci7PU2ihSVKuf5dtaKxWUGnR6iq7FyXkgpuW68STj",
  "key23": "2db4phvdYREyNR2Kcn3hL1G5BFfWrsjFbeW7ug8vd8DhGJhp3MpE6At6NainCoDgPW1eURQ8tgfdwBxyc5dRTWep",
  "key24": "5E8kwJaTUmGQf8zKjTgf1UetMapdeYv1t72ZMb8GX79b1ZPg9VxVYmc6nfNs6MLscCy5E15iniUQX1XnU81m3i7",
  "key25": "3qjcqWEfYpAZQTUu3sthWzh8kd4G5eRuxCVW4ZSp7WsjTntPzB5oNVCFXNBLtTX43pXzBjqRi6qLFUhVgUbuxyo4",
  "key26": "mcd4c3JiGgSJzEcnJSvoEdjsC63H5tHzMQixLiR8Q8SwVk47PpXofweQ6b9EpVntTZ152MqeWEaRmimjUDfNeAL",
  "key27": "CNdKPp3z2m5T4REmXwCTSK1f3Bx9HySnptUKuViPTDRtXtbhRp3ZJSBtCLrXSCFu7Y29t8cuaR7dTabMzkbD448",
  "key28": "5HXWnENJY1s9LpYntc4LZhcixrS6SexFjiu8iYpuoqMrxhB4UxjNpQ6f88pikvDTNzpwpMXBMoXXvP3xxGQorPxm",
  "key29": "43UgtEFeqcejnDH7xTvnPQHf9sd2PhtG5Rx7y3Q1YYYVHxMQCFThokFBXAz7cKHkkvReJrhgN3GDPDTAJhQvef4e",
  "key30": "rwABaKfH8N8WproveVmP3McrhfeB7yH8gZYvt3g5VKWryk4QoaS2mz6ka5CPK2GixQRcBMmcZRmyvgkcNNXMsSF",
  "key31": "667W1iSesFi8t14qHDrYBAV5FtrinXorxTvaMdeytjWqD9ge4LCQi7CTabcrRAEfwc3KYvu5dmYM4mDh2KMVUeZd",
  "key32": "128ejgavvVT5ys45zMVH6HTGk6q1wRgSpEpZBLzaa3Q3t7SYf2DFDjqaqHp7z16ruvUyLT3gUebqhXiMVoaBAiSQ",
  "key33": "6TbdPLj7kZofcAHt1WkFQ726dQfa5DiyvJnpda5nXEXVwU6TXjZcwuxVMZpCRaJVAGS7AZDn1HWpn3XeoNrcy6k"
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
