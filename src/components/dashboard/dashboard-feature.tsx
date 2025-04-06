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
    "3qx6L1kBkvK8riXA7YBTb75oeVaz64tzZUwaxnfBBjSUqRPBC57b8uHpjjmR6irbekAWPEntx2SbCBnLWZjUYPp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bx9x46LSnLVNS13PqmY8td8dCMe1ZdeTvbjJawbf7v5npHpPBV7zAVzSrQ4E7J4JD2Z3tSPiDabsBjMr6AG4xFK",
  "key1": "24Q8uE8FV1AVFTC2w11JXs8bub4knMQ9ypaXbkVPu5um5LxiKUo6vNcDScwaT7SDAYUe9AAQJUMrep1Ki7TiBbYp",
  "key2": "wAMagAWTX418redGqf82RX8kMbpSR6Dj7nTQrzctgKs4HKYPGMRggcRKDKSgaUvQkcyEidxkEa52rFK43qmnMsD",
  "key3": "3HgKaVm2WeP1eRQuSQ7iebv4n8tSpECZLJxg8Bj53XWTSG4a2meEoBgDBUJVpAKk7n813K9kBKobgH6Bq7LQMhmD",
  "key4": "55n1cPNxuWDfdCmXwC95adCNr3EHiURTE3Ky2y5QETdLHVsm1cyVebgVbQ6eYgsMtSRHbXbujrgaoNFkwA6emcZk",
  "key5": "65ktMUthe3S6H4inNcDHBRkPDk2e3B3iVfoNM8XEMFDY9YqtzpPYNFB9v1YFd9Vbsjix8XeNsL5p8LvaMMw1quSj",
  "key6": "54xgFTEqqUendeGpUA8grkz3HmcUFM1fFvaMSyLw8diNvHNrKo3dEsQLMPk9XHyxKTnFE8VFrbeporP6on6JqLVm",
  "key7": "3WqifAqs8z19f5MehLAgqJKmaMqYxPziomYKpKm3riFkDHb8fSn6Do9zzahYepinnrJcWbWuuv2BhJUwM4gK6yhb",
  "key8": "2VDoB26kBQAZDe7SABCj26iGDmYDqgccwHBFFapRqffqyH8j5AQ5yMbev69xS1dty3RFhrAv3T2aTdERdCJod9AC",
  "key9": "5XmA3LJCK7CWZqWHtnbLty7PainAs6nteDmtEBFN8qcC3pkgF3w7yrm2si7hZoCdXHv824hEVajSJfyz3dk8Ymza",
  "key10": "5MhtfRWoWHKMidZWGzLouESxujjW6Tp3qZVYRCJmuepCr8HidDAn3w1dXhM9d4xerEw9AoTyHLAk4md46EJMVHuZ",
  "key11": "4c7ZroZeMB2VuSXEsqqSsAd2rTw8ETxWUAn1ZcybnMaxfs8Nfh2FoJo9m7ZvhJ9hTERDNJy1FkXXXwc4ouucxtgb",
  "key12": "3cUEB2p7VUTnzxABdT118UwgQegDvYZ2fe45Db9HNpTsE693GoQKDANXEambpY5FcUqNBqD5HzSY45tKfmtvXEaQ",
  "key13": "4bhKwif8mDU4QjFmG2oXFhUQXAn8Pdcn9xLhBbju4UQjpy6KbBtfrUidC8bxbwSS8NQZ2TgDvzynuMphZqoj2mce",
  "key14": "P9CZBLJunWiQrbxr6gjtDE4A2ZidKCyrhfyaCjEpcjwmWLqHFM7JDButyWzVLdP7LUbDZ6foRe4cuE1sa6jTfFb",
  "key15": "52B818zWWWXJjm3cRzALNvRAUvG8QxVDimbXkkcu3XGBDLozMeZ8hoW6tS9xzwwEusLR1zpNXLFGReQViWZV4xLK",
  "key16": "58cgrSHmXCpp449tKAccoTCdsEJC3t1nfDERQFhgE5dXKeewh4PX2QFAHJGDAV4vh3ZQuKpJzHuyVzZcuLuzU762",
  "key17": "3xTfmErLtSKZh9FTaQCqUVKjs95BSoaNXABdVgAzXma7fq4YLn9ZyKXtYSWkvGvh3NQvemaGSy3mSt5B7UUs8N1V",
  "key18": "2cinnDB6bJWfCbyohe83uKzmRRCT3xnM4BXprfRYmTccFUb4b79vWM7WEhBybifEaqYnWbP2ZPwvuBgZD9hwEpzS",
  "key19": "4hMjZDYhkCV4pXAj6gukTHoy7M8iazruy2rgnhSQPFr5j74ib7SFT76An98EHZQcmWVJBpEm2sc6AmFEn3PFqgw3",
  "key20": "53o7aE9qLJqgcuNBtv3FqBhYAoJ6A4mT4u2S9gkxsRbMtTqGR7aptUVHG6afkDrZ8B2qWZXY3GfYfaCXvdHjZUA8",
  "key21": "5znWLmxnLgqWpo4ASydbBGz1dvgeAnhBgxnW2xwBKeYcce4vHGyHu9QiVykUGzGz5NEG1AaiUseqfNV7cBYvo7V5",
  "key22": "3vcJm56pni9rJGijhXqAcMvNx5vfkmLqDPmmaY4mNLf8pExyC9tF5kJB8wCzi6ZWUuaaRrk4BQLFksfuuYC4Rbji",
  "key23": "62a4ek36wRJ9tWM6Eav4mM9vMtv4bgVy8AchTWTkDFBy2LYoXLTPPXAuvuELbkpi8x9HkMuvh5fbpLcAnBCCLoTq",
  "key24": "GLuUAptnowKZaUWrZnjVTya8TY8y5JRfRZ7KLm5FkDd4aGxDcnPN294L6PvsTRGinuRjMmJWQAvn6ZsEBfhxnQL",
  "key25": "dmht7vMHFxMaKPctLZqtUhhQzEFcUUgnhJnh7UzYHfNUxwjS6U2BqYJZu3M4mugzHnxreTwcB6Y9mJQgySFJSuw",
  "key26": "2ePeSJP746YkFknWjAGeTzyVsayM484K5pcKApf5K6yDA4vULav25vm8JrAWs4v7gteeoYmwwyeptCHnm7LyCYmD",
  "key27": "5pZ9TrtGL8fkfPwcUaAZVBK9oRGwzB3UKDdRh2W6v3d36auNnJt5mGs5nQfPY32Zn43TjBdmryTWW36CtVbFQQyP",
  "key28": "55CtJ3cCKUsA73bMJCqmPkq2prjCSWAmKwDRVDD3PEJRtWsgtvEeQR9rfmun7cBwBmv5q1if2thdmd3J8q1Mg9KF",
  "key29": "32mA2CzHBzABy1C63tvS9DaVz8SNPP2VVM4vcRGDdv4GFUHmXFXcsKDQ6f3aPeA5pmNe9jfLSKTTxBykoH1Z7Kgp",
  "key30": "ubMQMtN89Yo6GgiBAzcFb65rPp19qUNNDGCJqduEfwPUNfETVqJDjh2CbXGYheWK9NjwbctpPtqrpCMv2CAnwJ7",
  "key31": "29npYpHqKYMXzWhe5taxHwn4hjp88kxR6LQZuqtexXSZ25Nryzh5aR37yh7fLF5GCPZxKHAPoZbdoXMSEkcegx23",
  "key32": "2T5mt9DJsDpzkuYtCDD3tyuNFR6kJvhDSnZD6uzTxnedBQLeBHsFyknZobhfTayKAz8wckA8CLUScw9oeM2K3dJv",
  "key33": "5RUMqvfWUSaK1To2xgnv2z2P6GUVHhdgEsjuyyL5JZZKkPUSjr3d1xe2xKQzRR4RWL1vU8fG21c4pXs4TqC7xRin",
  "key34": "4cDXjqHkrLDPVeKW2bPBnCVpW4vqrQskCLMxcAiPzezUY8BdhMJsZCc3krBirLHZuQ88Scm1RAwbLrBK1YREyDbU"
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
