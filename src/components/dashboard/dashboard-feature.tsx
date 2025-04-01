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
    "5pcj4cCjxNqJKYjdwsw2t2pS2qehY5A68tzfsySubkDyzvc9B6FEhi5G1vsvUT1FGXsGzyWnMJnB6Pm76ZQq4iDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HfxEGMM6FjoFnL38e7zGuXtLGSBQ4Q2uR31PLmF57Nv7ArtcamUkrX3aRyoZDhqHsfAymyHnfRjkyBTL7UZQrR",
  "key1": "2ZVFFuh5Ubo3VDKAYbT43GqFqVPZ8vov1krCaUk1nmvvNwgQi2f4KyB2NvtHZZ6iwpLFzL949G1p3sDcPioCnLt9",
  "key2": "MmKkUjdZHh8SyixdL8911kDtEB3QUtLtg4cU4rYuNUX2CYHApKbCsgvqB158AXB93xACyG9EiZfdY17XoRfAbfn",
  "key3": "SerwpvkptZRst5VitNn3Q8ww1rAYvBYDfmZ8fyfSKDcKnMwtfiDnYdaQ6HjGURbUCJAvgFp2UyF6ak3vpJfkCuj",
  "key4": "23xqRt96rXCgz8jhVfwM5ncjrJJwRi1eWDBVhTFGmQUAJ9yrFVYrQsvNEPksXvJM3yzQbWRY3SyJmeRsDoUWcdR9",
  "key5": "2KREFff3JheCYv1RFKCz4MYGae2QQ69S9CP2X8J5n2y4CpiLNcct5QGU7TrfWAaEzBU14kKbrTBbPozx7G9B7CMD",
  "key6": "peCyD7CcRME1v2K4CvdFufXYLL2kw4tFuiKmrnVL7zXWxW3MycUKsUwjThjXiNWUn8Y3d5ouAtjvUWCpLGYtHDG",
  "key7": "37oCL3K2JDcchcs8LbLnxNcp81UwoKLUsxEFddsza8Fr1HUxN8whKabexieja3XeWANAEA9HrU4Pw3V4hoMikVLV",
  "key8": "44ZSDHsdNd3dEtjYixAwx163oqMUQjtMYF2GjeZAUHRJAn8vnXpYkWXrchMZ6J6igTgF8c8cQA7Z88hZ15tGb7Tk",
  "key9": "2ovJ8rUzxBGbcHCmMJz1uMWKnQxmqp4Z7Mz8qGHaBr7B9dzKbAfWKZCk8HWomfC2Wf17qvEsgsx2GX7N2eQdWPeE",
  "key10": "55MuMmwtxfE9pk59yQBYXDruJojTpBMP53m1cAvhc5w2rqWathStup64r9EVHrHhxJcx883vdbXPyM9UguPPJhqy",
  "key11": "4E5kLaeMm7VfzhQoGT5CcBBe71GvRZQ6L5VHPJSYJcz12adfmMdcA1nbXXYSG8BE7hAhwNBAmpPH7fiGQrX4oEXg",
  "key12": "3Tvxi4eg47BPe4r7e28MNXyYjBQzwGJ2DTAezjHkTKN8XeE815R73tZ1qx3C7DbUXAfgktTSfdWGLrBUSJVrojNU",
  "key13": "4ZDMAKt7bgvpEXkdsT62nSDmiWZNwAmwjAvHKPjF4qQaEN37hoBv4hZ7sxTr828WWAgwncZfN6cti8sKkmu9cKSg",
  "key14": "3mfLQiMqbsACcSqYwP8qpqS6xHceogmxS48cdwQnBxRyQyaj6uaKz4A2W39QpHYxJ7gfGSY2VtXkNRvFdGXmkNoC",
  "key15": "3gB9CRUSFDs5k5bnD44SX8Wd3jYmJehsnaxqVJhd9SCc4jzB3ttqnwBbsWiA3MeXzH1WeoN1fR5xz7f2FN8gUCxp",
  "key16": "48KVUBHxWGcmwh3UDeBKmWVi7PWnbzyQKRMLdMnxKyQLhmXjG8LiKELDKio35QWspNADTacLHxYnBrGB26L1MbUM",
  "key17": "4CSRsGCwA3tpQwDKHSmcKwcEi7662dzb3FSBnXixgV9gQY8Ge3pNyjLXthv8SpzuGBiZF8KuMR5eKrHezk3HPKfC",
  "key18": "3jbhejAByV5WKLAqvsrTXcMRiFR79HgQTMEzUoD7eknkZS3JyyxDt5q2BSk7tcerThmyJPxjRjJ5sGWJvZcY8Tqb",
  "key19": "5J5Bytg8kRvoU1YKq5VzTnMkoKTF9EMBdktH5cMrgN54yuHj51Xycw42AXXLPG1V7kZWYac35JkkeLQfNpoz7T5j",
  "key20": "5BZpQHomKhfdSd91jN2syL3zPhbMW7pi2o3ewubPaPWdhWKmTtT51v9kU82peBBCfqXQ8rxFvyRxZaNx1nHGoU99",
  "key21": "5rNmRBN1uD1wQ2FBJFMeMdNhMyjkJJCDfTq7zgVZpL8tVActgcKmXC5fsrTnnK6pv2LMQZZGrg6HZBLZyC9NUic5",
  "key22": "36mb9S7kegkyAmr8yn5pUdTqcB1aP8jPjiZa96MmHGcoZT1FQAEtrUecBZdzGPLNGnbCmKA2uwmg4CygQErHYtHo",
  "key23": "4XUm3mvjXZticRtTdHaA3gv7Ne7x1q68hr2c8NFHhGud8xguUNpKmmgqQ5RAF8HqviMTbud4mBbkegTT1MjsiLqT",
  "key24": "2ewvxbnBaPCjVMVDwsERmEVqBD2b2xpsREd18c7YiX38LW7WKsPm1GXtH9aBR4UoKPsB2uZgsvTxADWPxPTfR9Ay",
  "key25": "Gg5YVe7BCtqVPSFQBWy4Ek3nQPbMUEtTFD5CAHvzD4HbiQDJ5owJLDU1Xq55QSXWk3K1VXB2yyFrfDDyPKYEfgh",
  "key26": "5UJVbZGGwpHGUbYePnVAzrE4QoUR9Jqk7rYMGQRzY9UeC4SG3aQiDsMp3Rg4rvUDemJSHfkAhv3RakxoBsDmpzix",
  "key27": "mPPtxR541uc4vMZB9xHfeWUJAKhsieN3F6TznAVaUXjue3iAS3rbpLJ9qLRgZpiBmsuViBXgwwY6RFWM7gZoykh",
  "key28": "WKk679ZqGR5n7Prc9DfjJnuzp7JWB6DifPiJAc2ppepcVMeDRGVTUwYhBxMAUQNGMpM3HgSE9sjEGxSkMwP3rzG",
  "key29": "3SphiqKEEB6mjKkPqp3RLVJP4HL7JbYS2pebqrzCMujqAjw7VAUPTjLDjQxMzJKKihaRKNKPyKt7uCmDHb8u7K2a",
  "key30": "2D9AoFZqakBbXFvTS19awyfYGvXTE8VL9tvgvHHhtYWKjrwCS4dDSSz1YoKcUqGRWchzHgSeHGDrKVbaJGk4Ncm",
  "key31": "2o1mH52fSCweeDxTx37QpA2M9N3TYnPvuytTsttf2KJicqNPApA3yN5qjcgkeY78tgGJeZ4Mon8uz41J4V9uZ1LN",
  "key32": "4kstdvePXCjVkNN1SqMG6aHiU3N26R6bc2FMg3aPowhacZ2WoTFP868F5HWzDikkfBgMxvK4QWk3J1Y9NkQERdMd",
  "key33": "2qvVmuqQuxUjycXmvme68Mj9dvpjqQXYDdGJaXBVnTgPYQXxpe5EaDshGQsHkAstZAYaWMJeKDfxadLgNMGUTgeo",
  "key34": "tu11rKbB2kNLjieXa8phNaP8BStyigpFQAkxet3FPg8DrsMzUvadimNmizdgz2DvffwEtmE7zdTjQ5ZJxthoBg3",
  "key35": "5AVuXm1rPZf7nWg1gohqaqmw5LQcR3j7GGymzKDBX1q4VLXCMTGwfUuaEWnj2UuAmnKK7zZWbsZgy924sNvsAygr",
  "key36": "2cR5ufVkCiisgEXFg3MkvAboaKiSFrApRX5uk9GtWqJQdTQo3ugdoodm5aELrLwiHYYkE9ZZMzFz5GM7QjWM56VD",
  "key37": "5FqyVnxQwtjG38GdRTbisxUHpsbzbvv11UvCWA4Lc9Y3tFifMHcbPQd3MMVzdAwjc7nF64jZAQrQdCyCBV6M4mgA",
  "key38": "3Y2ckZ5aGVKfKguziGMYRTM5vVmTB6cQmFaQ2ZKmch518AAUgKhaJT5h7uGU3YXSUhx57QpAYNnKXnhvGngbJC5f",
  "key39": "63KA8t57rF3QTVFefRzadBbriFC2pGCiFojMcXTG6y9TEoD4jsZnjniVvvTW11ctHXDMNGZKsYMvELDh6VRefwj3",
  "key40": "Mxz8RRBwVR4yH5Ww54R98YGxny6yJKxM4zpnZUpf7XkiiJz4yk7Exx1SQLQ5Grs2xQkGNV2Z5hPJyhZ9mRm5Xc3",
  "key41": "4PzHAe1AAgX3Gkyb8q7YyyKKcDG4jREw4yx9fxmXvd82AkoTkhs3MDPBvUjdX9hg2CCVK17xCqPjMcx65zMf1h3r",
  "key42": "3n2AUgdYwuqp2ZUEjt12XcdMG6bD5Fcb2P5XRA1j4VxUoVszC5rpY6ZV7JLeL7vtbQfvYT7oGEHhu5vXhq3SQZU3"
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
