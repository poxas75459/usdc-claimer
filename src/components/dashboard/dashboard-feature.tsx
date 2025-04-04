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
    "45EQy9qu5FiEDE5rNTqaDf16wZTZpy5FSBsANHAQUKzQEG8kawQMtN7CRucN3ybzHWQ87h1wrfvkYpnf6FxtARoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GYa1qLtrxZxcQvbRK6gxvvw3r1s2DWJibrXTWSGkx6A351XWJBeYZEjXFCPrkpE4TTYp5rmNouXskMLeR7GrA4Q",
  "key1": "2fxEBxFueD7kW5BeBgyew2SpStVm9iLBBKUqAa89UrgkwxR81ru9B7GVEWXmr1nRf6g6FA4wuSN7YJAgQKdFjPzN",
  "key2": "3oAvkPGPw1KA23wPtiuxrDYWKNho5xNA2YcG9KMZBQTFLhzhiHKz8rWNRyJKEaqnUYDJUG7ZgRNbBaDndHqQZjLg",
  "key3": "3JwswLRUb1or8E4NQsm2BNGUWWEptx65WmexevypzWBtAzjThoSdbkFeuwGESNCwjrRTkPGNj72PkS62s2tsXNEa",
  "key4": "3CAYaiC4ZDrPMnM5PGbjsQS9SthApSnj6Jf3MN6NngwezntSjioLbFRJovffpnZgnXvv9f9XQBjYb7FrHNNDdnde",
  "key5": "4tQ95NsNXbtgoqrWZmGF6VWsgLJAGtbfnRmGi6Yo3HqfYiXqAidUXeJjKrop21uiqWQzgxEviA46vV83kBQeGaew",
  "key6": "2GAuFBbvJejNab2cQEreRURQ5b1vULus6N4BJYRfpjU12EmoKvvTuEr3xQL7aDhL6CacZFqM2nN23nhLpaxfdQTn",
  "key7": "xMXZsEZsGGRuQSL7CGVpbsTsrenjejgy1DyTB5oakR1BV5ZvxidwqEV8NRBWPkkw3pqqqwKj3ZUTp8YmAjuGQqz",
  "key8": "5YrYAcMDuXtQZzV1uFeRxxk6EuqrmWYqWzEz6nJAQcAwt1gj2DpYDoZA5S5bB5q4bwUTZFt9HCTHt3PoAaXxCaRo",
  "key9": "4HiqNoexBF6Wo9C5EWs9Lj6wsgxLicht55NSExGGRDge1LDshayBuHYSkqDso7suWGDYuEMgovpg99njRtnMuR63",
  "key10": "5Ji3x1oyyWET1zr9cMPa3SfhLSMw5KbAk4kG8y6Bz4Awx7xC35Mx9mS9jX4jg4RF4eESSnK3QzHUes6mtCpDY3G1",
  "key11": "47DVemg5QTX6zSR6ZtwtvpLLjefDjQxpS1PPTFPnQCJ5RyHpGPRxoUskwEZhpfQozQtg494NttBAGZRNU4KXVtja",
  "key12": "4TPCTqGcjpZYqKyVT7RUayRhYd8q9gJikfFC1vhFXeqN4RwTNEXyE4Rw7eY1ttqfTFTTFo5mLxXYBfpCKZSW2Fxh",
  "key13": "5EzoKVyZexJyT5HZwoDWq3bLRq9QeKzjurjSRzYSmzCqRAyGa4DDBbGRxqmJejUjeX7otfg8oKruc75xFskDgaeS",
  "key14": "d44vPtmV93GxrnoTjX7heKwp6kD455BK1ptZpH8dPMgFy3yXLMXepQDmWA1v2SmAoWBmVZMbZbakKDx6tryUkqS",
  "key15": "JD7vFqabRJi37s7HMEc5L8QQbsw9JC85M6rjsAQMffb81sBaq6NAWyqfVEvZ89uyBw77ed4bvLrhVUZMwd1QbNH",
  "key16": "5ccqsUNzKwmfQXcH78RkARFbK6ZJhVDrhcy8a8uSYpyoXUhGnKotdnJL82CRbDvxuuo5uKN9AurZ4Pbu6SLev46K",
  "key17": "3VE2pReHeN5TzmR7rgJbLnVkiYdTmxwtZDwvLqo8AXR5K521e3ypLwinkkAAEjexE2xfzjmnir695HYSihaYS6uS",
  "key18": "28k5tq7sdmkBrjmyFWmbh8F9D2LMpD2ADQELC2wvsBDQetZM87G7Lz1tTaet5vp21uqwMhiXiB1szTAPAs2UwbBa",
  "key19": "iqr37aTxUSTBHdjCzeQ3aCTRpc8Zqbwx2Zw6smPYLn4Ppm3RvCr8zJ14MVM6gKToq2YFWftFkFtASTwE5fe9iA7",
  "key20": "41gtZh7BqWtCzCpycaqNjcKX4869mNvZ84YuD1gf9S1Hd5mEvEuUJvaeRyJ6zATpXSd8cFT2VxbJB2AFKf1KAeCT",
  "key21": "4z9XTc3dRF3bLm8asa52PSx2X1u8Ljy1ox71QGwohgkZx6CMchAYncg7GZPczaWFUEQsMqxFZRTYNgw1q1Ktf6XC",
  "key22": "y17H427ZyUS6U3jfa2CxsNiiRGmcyC2KZy1u71Po9CgXYQWkGx3FkvfCz6dzi1TwJdmQ4sYTcxvapXi1HiYESWy",
  "key23": "4L9grZ4rVgdgcVinCn8u3c4WSnPsqwZ4PE3Cq2rzQPZjhSwLBWXefcyDcRUqpKGqDupijRZqEsuvxofWJ3cEWWCr",
  "key24": "3y229e25aq19bqZkWq5Xa7vcEfzU1vMsGSLr8BNwedyHqFDSTQnmmukdvgFQq68oKDotmxermDa1r9LVc6F3UCB1",
  "key25": "4ocZ3UoD7phiqiNiMSmcYC3wgRmJ4nfp4stkAVJ14D11mnKW3mWhvNxkMtHXxhaSU19WEVnrRM3z8XGZj9U5Qmns",
  "key26": "5eAbfQSNwz7wk38AnZ5oiFqRKN2EUMxBRKWgEsdGF31uNM66cfVJXrLo6h8FhCa1iS4kC73WtccfpMwt7bWEH2cc",
  "key27": "UzSo7qDp6yMcPjHEXjL4xsPnZtiMYyZJDsRQRLrXXqiLDfn2QRpLCsnJkTBgdxMWTpq9GLeNFUjP67xNyb9qtc4",
  "key28": "5KU8VWi7ubjLD6kNzPFftTimCUhBLG2iKBDQRBomse6heVaUUmZ8VU89xhb4n5oFo2coDEhZLb3rfotZJCQpiEUz",
  "key29": "pxZWQ6hEtBaUePGC4wys3ywtDfvMQUKBmFwFwUhMkv6vZ3xFjCzrEC7mRF9v2E5d7B7ewfht89JeoKppTVeek48",
  "key30": "4yRqSgDMvUoC6366oBxfi9SF2AH883mZqvDgx9nqCtSrDsxriUXYDFZndzUKshVSQL8pfsYA6rvBwJWyJuNrAxMh",
  "key31": "2kHGrvcKfwLJUBbWxgtBkzdecbqdwjGc9zVbUoQX2jazM6EKfYbeJBXVftMAA7DeGQRjSECXD7keNVdvuGs9quiq",
  "key32": "2UoCiqi42D8F2KRVsE59pYtToD7RX3s259amNLT6onaRyPBcbXd5kaiCwGPJj1NxwrygXtyV6YqZ2uRBw1n5bC1q",
  "key33": "W4ije2Qs84kDuP95bLpSEyJRVUSJ6rPzk2PXmumxfEZLafEVptqgTH1Ngqho45Mg6rHxq6bHVB5FZsRW3zPFChK",
  "key34": "43Y6WJL1cTmm8wMNTJh2tLhsDqn3XjJucWzXZBKfLDRHGYYoeeMC8mEa4uLU3UrV2yJ1PBA38Fd5yaFv8Z3VE8RV",
  "key35": "4fV7Y9LM5cQSK2dKce946EZciuMPwpQA6pqXZoZtYyBn7Z4X1uaj2Ng9Kqw9g7p7oB6bJegwLiaCqVx74jjW97rn",
  "key36": "64n9YnCRrEqhJr6NiomRBdaVeEQsw5cTwSKqdQJtMWWGcN1mdQcFGAMK8jftWejAzGy7u13P8nBW2HZPW2EGHjA2",
  "key37": "2REBQu1KKFvCG9iDTjVzUjPqp3eLbrW6YRNJdX6f2xa4PFWcRVrMuK3bhpvrtew6KDxtwVPnKzsHH53VJMawj1M8",
  "key38": "5meDDKzmt2JVHSuJsSWF47uBC1i4yzXcGekG2KLmcXxvFpm1gffyjuJ5CZbqwukkSAqNmFFyU2oncZY73g336pck",
  "key39": "2B2r5G8BBkQyhgPLbuckyypgTS3bmSdXd184F1sr1A8k8Sf7LSD3dcJ7hfUx6e1C4byuHsa5WWw37eojKq7axK6U",
  "key40": "FAXBdtpXkHtugGW5cGL6Y4iocgtMjXK7Br3ZnK4qpep1Mi18g2HVz69ng8KhR2XvYrC47QuaogWQVTonvKVXpps",
  "key41": "5qqHDiopwXQ31ssZoKd664UvSzwNCzpXFMYHLJdDdWMoGv67AeraB7pbG6F9xSuQTHgWgGxoMLTpQZd46TDq5NGD",
  "key42": "xPPA1e2J74kQQ76EPmz2hUhe7M3cUs8rQ7Vb8nmzDZsUUdG4ZAJAD3rV1FuTkhXjiNFHfN2vZMg6ggyjrCALkM8",
  "key43": "5xMvepHiP21EPQokSkjyL4aSaiqFPEKgpzqTEPudvdatVGJFKf4xLXQrBEigDnpArrfvjwHdz5PhseBiqDC6WjV9",
  "key44": "tBZgaHRGpWeTbGPhbMZPqAxCoVgMfC8sPjkQaYpCBJTvt6Ne2B4sFzLqT52CaHKoTnU1HNF42Nw4AtchTxZJiK3",
  "key45": "5u5cUEvaPz8K3XnC3GH1rGTjWg2XXXHiChQwvTcsDZ4QfKiy6H33kVTyJeLkrptejwUoLAwfpZ74B7R9QooX4DtR",
  "key46": "xE29geKUBQHH9LP6vXkDanXnfHG9KvWETavjc4hCUtgKwaNLHrC4jvBSHfUW9R2GQGnPXqs9dmGMKKasEFxTFjj",
  "key47": "211euPK8in5oSNdffUdWrYuVWJodCRLkLEF7X7ptFwAcASKs25SeVgZVnZcUwdLdfVXkTnLZN2wQg5SRaMzYaHMo",
  "key48": "3XyW7RPU7N9bKtXHAdm5rN6dCpYuhXn6hajWQuVWAraifVhnwxSEBZc3BrdySgaKrMmTaKbEkidbQn2uFWSAXFvY"
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
