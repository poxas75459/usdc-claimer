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
    "Jid5ZEndeEYiXZsL6o3t7Y1kFo6QYnRWnegZmjhG2TZ4k1oKmy38Jx45GepF9Z9FdJbgGcH7iNXvWAdGvonb6m3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yd5AhZXmxZtTx8zDT5BF9K9cGrEvzW6HxJFogciMZyJ4YB6gRg3tS7SSY7bR9dqwBSy778vaSrCa6BMwFXKcYyM",
  "key1": "4anznzGV4VUqqgvffeSGNcGZdCehwbGmbbUbccZgRF7KJ4iQ535Fa8jKowaKpZvawsYmGijo5w5jF7pSMyRtErk3",
  "key2": "2MwPPto8YhWrR9g9ABaSR8jo1at69NcjnD5BUf6SxaSbYFtcvsCh3xsNYBuo2cdhsZYtYpV3f7wfJycheZCDLoeE",
  "key3": "2c4vPLBG3do6p9LC4oGm6CPTT6UBXeYvvZZWUiVELjKceEM46VEwHyrZJ8NYRMWosfa7in1qc2TK3bDr3hd3AJsc",
  "key4": "55U5tUKfBuAFjb3stb1tYDnV3rBuCJ3if5NLMLmNvSqKS6mYh1tSroiSqWm8gk4JEtKaq29HGZryb4qGLP182LgW",
  "key5": "2PAmhJKy6DrHxZVKooUhu7Z7d2Jhud9B7FWtWU6eNBezj9P3MuGmb7LhdxojHpm6Q9dS8FnthPvhJdf2CVfE1iUg",
  "key6": "37q2AXmYgDuEhnhiPdDCGv5C5kLvQBobhjUzPkDoToLWxjDdKMNZWPyiUjUvDvsDMEDRsWdW1t56efAi6PUtLPSx",
  "key7": "bQkWc67X1ZeWaBKjEbRJGNzYvY5gwMizHzZft4TCdK334Zw3q3Nq76s9dMeG3JM2sc5zYZ5Jd1QfXAqTM3PfdNE",
  "key8": "44FuurX7BTReHCu9LrhfqYotfPzVZZ48svA93ZLLsei9G3ZibzpRCFrZudym5w4GrJmHdbygE9tzUV73Tcfhp7A1",
  "key9": "25xbaUrDsMmpNTbVGC7tnoU4wcDvrNd1fYoZnvDokpqySnWf3Eko5GTNLjyTPEz6uPWPu2cNp6LsXQatG7VkAbsV",
  "key10": "4193ekrrveHeT6D45ArvRWmDxWwEwuuvSnytAkK4DMVGchrXmtqHrtwGhSXLtQsGa9ydQwcSxvHnv1ERJGR3b8Bz",
  "key11": "4tmiF15WXTLjo6zZBs9RF2tNkXNDo2qcdS1Mn4yq4N1bEwLJZ9fw8qQPsd3JC4WM3wBvQqUkZy7z2uZYMKX5FGtq",
  "key12": "35tX65FnBR15mLsJEF7sBZP5kVnzizg6VquWaRc5UFvXfeJ11ogVjPDbmEUsMm8eopy9Po9Up6sz3KihbZ3FaHTg",
  "key13": "4CSHw2ekDitepeSz8vwyY2nnZTB7RnEBMzWHre4mLv1nkDaWQMzACxdiF1jMNr6qP9Uc3WrKE1UfDRe9Wo8wJNgx",
  "key14": "5VbkJWPjPjQx69iyARrKsXMeGG7APNuH87WDdnkPNsHUgdU1dkj2zfUnrZXoDn7j2DuV4qPFc8Dw6FrpRpsyBhQ4",
  "key15": "HHv8PZZPxhjjHjzG4bMqJG798ybFUrouykufhVSJFk2hyK7KhQLdepttfxvyr7rH89Xtff53y1MzvpritTbcgzU",
  "key16": "2iwjoNaQgTv5V87ynhXTV7oifBmVZwS5LHRd8RPfvQBgAcZiVNWx3vSujEmz7ZncGKTVAkuUj1d3xfHxvHAci5yZ",
  "key17": "33KB1uu1gYFxNnYeTztGdbNVuHqc4nDQHDJkNtTq6PPv8eEQdxn9pFp2255R7m2CctMcT55LHQUEh2EBKbGKavxK",
  "key18": "KMAN5e8pkiSwKMYb1MMRnyGH8jnVqL5jRmZcJgA24fmdBQb77ZWdnDBY76irY55xf5Fvn8qP1KkRaYteRX3ww2K",
  "key19": "NVfW174YA6Q5zk6bHrztn71tNHPKzoi9DXnFntSUrs4vkfMV3kVUqqVn8KfmRs1p8Uo2AenkdnxbBJyLEBohfxa",
  "key20": "61LpRrFNRB1W1sNYnZZTQSeSy8Rzo24BqeqFXgZuqjrWVLoq7615yi3gbaay6h3SuMGzzuqPdKaShNLD6EeEMM6h",
  "key21": "3aaHRtHguMUF54ZWHh1MWH5GWcguJougTREoxbFzAgjRUdgPvGHQGYFcHxE9yUZk1mFcGPQLFeRMwUsZUPCw3p4d",
  "key22": "5sYQWCcWWH7GrNULczuTpUKWzQTHic2poA5h2q8Kso4mSpdR7qmNppVKQttTGij9Ei69zWhqS8garTWnCZUatzHn",
  "key23": "5Fdpc191rgAMWUGH64yPvW4cyiJMFvTJkEMf8fEr16rcSgHUSMP4TEaYuvS7Tq1BPS5ug9UAuTZ4LYngpq4aSMUi",
  "key24": "3VrWEqYbWNPDtLHqknS4Rz4aNBrkxe6gQDZShWtFjawoqXGnk6eLyUzxTtsmGBG7LzqnKBC3vepU1Lbqvmg16hBT",
  "key25": "5eLEBnqpyqMb7r71RzRM4yToWs4YuDLxZ3m9dtLWQsZMVimFTcW9oskDNFit9UjqvVgRZi1JUeund9eSdcUHceYy",
  "key26": "3kBFXp2EwoA156R2EfU5FBa6MNNqKvaQGarECPuMYN9aUnhXFs27nMNUb1ipzyC6JcHXwcAAWyWo9xsE4rcNHQzt",
  "key27": "7GP5DWoWsiCdbX2YczsE4SERt3nSoQ6WZ9VyEBCw8BTG8x3zXSpwKN3mL5s9KtGafHv7gPNmHm5rXKri48UxZDn",
  "key28": "4GHwqrm2qL6PCSNtcdmPBMP4jPzxLYmkaYZsMjaTJxSxhJVFZWMdMxjoBe4XdJCYda5niPAwior9WY7HauTeH82B",
  "key29": "2YdKtkn82vAEHUKEFL5FccL4cwENT9D9VCjYTfcsiHH9jKdsT17VUaGVoCMQVZN6ZWCXs212o26kE36XDwdxVA1g",
  "key30": "3a3xqPH4CQhJaTCfBaKYFH537VXCiSpjRftPnL8tmhjSV2kTyHCMGC3FQZBcVqATniobg7hChDZSKn9MTGXA253t",
  "key31": "oGZvrKVZnyEHG6tF6qt241v8Fg3rKVCv4RgcF4j2dTtXG3wTmMcY17UzWkj3DSe9NxqQUiwT4Zdy9Lw1K7zvhfS",
  "key32": "5Zt9t1uKur8hjywsjhV3hVpMPgSnhqRcDteLziS3wLUP7CjMgHACGe2mCPtcDnQpS815pTSty11NGdd5sig41iZM",
  "key33": "neUTX6ABpzU4HiwdFQpQYQ5Gw4qDb3pYXkdRxANj9Nzq8mBPKvwc88ZtXcLxczQDu7JEUB25GKhBF2VhWNGtk9F",
  "key34": "2TH7WaxP2DCaBTiau8tQYpghJXoaDsFDgAd4bWXMQ7LeRaaXZ8CB13TxdQ3njekLF43FcWKHn81CwUkMubRqEYFV",
  "key35": "4se8SEkRE6Zx4BRPQ5JZrPovFiGybccjT7HXvWbzDnTr487pNNtS5dRZ5U9S3NaxcPUz3Q2xrAvv5UC9989ATr66",
  "key36": "5SBFA1ZzQ74RYs9gsFYVhKxK3BQzVJdWBV622h6yDRRHeFJrsttGjDyXHW3Yq4VQry2A3BRgViN1MqCHsw2ffZWc",
  "key37": "4ZCAVScbdac9GikJQo9GTV2qkhatQtV6yQ3ZV4C4uEtepTsLwr4sDs6qNcns2jJpDe9mBeufwCkNAj6WJj1pUtVQ"
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
