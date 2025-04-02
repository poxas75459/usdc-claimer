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
    "24MBKLhp3mS4JX68rsGpEzicdyyTi6PSrndb3raqR97WptM5wQCqrGBwyJnZ6eZN1gAeyr5s5rKktgppHb4VxJX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lrm29vRZEpMnGKF3gZBDNeQhpAB8rXzydwzudqrinFLwcuYhhJc2JCkd5TW9v51CXK9gF1idbx3MMqGTPiyjv1d",
  "key1": "3H9Wyo9Dy3CgJFZzJG4qFus4Sy6wJ1aMPdqyMw4s18hKdnbzgR9SdBuYCkBhtaWHRyyzWMiWA6eeQXuyiLMQeLs6",
  "key2": "aDwMhhFH4Sc3UBityBvFMiuWkWL3MxDdfGW2GGR7TW5VeuyMbeExyUytQ3HuqbLBeP6zCvPoAT6Up8HtRQmc1N4",
  "key3": "4PANmWFLmrHwmVRp3obHBpge8bfbkHcKUysinyxxhXUCe5f8b7vJxHZEsaedTNSShhYgsY3wvDN1RMY59n7dvHed",
  "key4": "4ugRoez8n5wSWhPrP5ukGShg5NK4JjF2ruGvq1DpWmMYgqbCUbodYNDEMx34dmXQShudshTDLWAPM5Us3VctYY3K",
  "key5": "swGJMzq8BWPkvvxoFiGBNWpBunmZgc21iUqCzdnebk147JLyEjNoHnUMSFVGaS4tdzpgNQoe4yk37VPUXKzYDnP",
  "key6": "xRdjJWzPp4bDDzGZFzrdNa86CgiSFCTPBwHa8KAnqV1K9f7k4614T8aWHmh6Kf6iVW8yVxUfrX2y81EfZNLyoLa",
  "key7": "3uxpoZZ7sLbf4yNcs83VN3pQHZp9GBcwtvaC2ThwoP7tppaBpvA5bcvMSWLqSgLCv65F2YT8286MLBE3GWYohwg5",
  "key8": "3SLucg6ypyySkKyCWJwsmjM7A6uvAdAEdBhdRSvYip8K7wei2c4F6QHHYRnwnaPw2zZgqrCgqnxud57SNVzfCVnA",
  "key9": "2iZpkgPyZcvtasucmqrxYx1r25geyA5vdZ3YNaQ8WUTJg1azoADqNbrqJmmSB3WpfkP4fo3rayQvxrU4P9DKUeb",
  "key10": "39FcBwJCJsrZfNE5hJ1GBKxmCaxtgKgoFLNFLQVrxWfztu29ct5x9CQhthKEWszb7V3jcNxm6w8Azvi5tPnbmoiz",
  "key11": "va5HVsWBMZ9eDQX9GiPrzsMdvokw9ZipmTUHddk7gvhDAYLn98U3Pz5RsnuURUPQbhUqF8M3DArxbSBknbCQhLT",
  "key12": "5JxqXJ4g5dbMQAeCQ1AHYzXmBCkLYi3kBrg3SkXi3DucDWZDDXRrSvzGmpMpHBXHvnyooP52MCPcg22GMaqeBcb",
  "key13": "3xvPeMu9dxbD6fBJN6jrL4d3GF3xaSrRfjbeq2scTsyGTSSvYo6zy6BUDqVDnF41rhzJsvX9XFNM7gznvXzzZAPu",
  "key14": "2BdW3V6gs4nBSa8zsGBcFFutqtKmqbwF5E2oeu4ixDMK8RttCiZmMrazzHtmKUJJvuM78SAREyG8Eq4BZKSzHcWV",
  "key15": "m22RHewGkqhbupmS7jBYVDTj7sHHcM9Sn5kY5cmHspZTkmZnU9JwMPXkDtgR4N8cXH1uNjue9NVSMpyNgggJ7nd",
  "key16": "GtFm9xTZ6ripbXfq6TTiUhFsjL84Z26ZP9isw6K2jF4hJUEAn2dGQvQHqgfKWSdavpU1zEwz1NeQZ5rKRPxGbf9",
  "key17": "5ktAwR2VgN7YUTdf6b56wQ8LxpYuongyNtHmhA7SEY179YCSsNxRG5c7r21fsAJH23vXUdq8HT2jgxrnxReBdSzy",
  "key18": "aHmPCxTw37pV3YUGoTrsyY9NrUAgXoS3vpR77B4HESu2jH24wcYMLiXGpJRAKLB7rE8M4G41tWRN6ywt87yAUqq",
  "key19": "8z4j3C9ES5GDtirS2JEWNNfCimXncVNpVCkB394HHemUBcmfah8ys3XDuLA8sayyubzrg96ujR31DWzV9JNPprv",
  "key20": "5CZp5fyYuxcemRsWqBTb97QA6JemAdQfPgrwN8f7uuVeLmjV3HmJWnA72Jbm5n2TpFri8E4RvDjUvtYo9XmhvK4b",
  "key21": "5JHC11641d3TeuyTTmkyxHgz6EMXjnhD7JuJZcLAdrdn1HQ3PSxxrGeryKWYqDQ9CVidvki8QwweDJQweiuFumYx",
  "key22": "kRGk3jQbvVsGubny8zRPYeZXhWmiii85tgZ4oJ4tt5AbQYHmrF6RLyanoHAdyTBR4edxrfdUw6o81FJSc2LWkax",
  "key23": "4Yypkc8ipaiMaucFxg3ZTha7jF8P7N2pjCXiTyjvXX8DZwyaDU2mSsV5gExzH6d9DT4LPNZvE9fX44CmnXikHwmg",
  "key24": "4sgWPhtNxGyjCott1uWDXokTTXvtBeLFUxYKDLk4iRdnhmiEDoxEBx7MHNdu6Xa1CTRhRndYe8SaFXNtZH5du9Gs",
  "key25": "54ZxfYXUb6mqP2awVEaw6fQ5HW1U8rFV3GVSjYPBf1nezkqkcarJxSZ2wptHPYRo3pDWS1xJqadLJgf1Ew36w7jF",
  "key26": "4s61AcPdxjpXeQAKPYTTqEmzi8VqYRjHhAD9FBJdbQNfCeAZx8drS2SToZ9cMVmW2ufAo3V9mxKa95W5Hkxj4ZLG",
  "key27": "4S2oyaa3T47sYWt87iYZg5qv6fpB81a9iqijY9d84Bnenxd1QMBcjEKnityVn4JT6LaS6fLv8LcqaXpoouoFLReU",
  "key28": "3r3EJyg8ChXChDQkiujRvotC3G1zpatZu4aytamHqu2DdBPg2gDebrXij8SSuniZKV3ym2ibfCWfSuBDvDBuArN9",
  "key29": "216snRR5cTWsNriKAH8s1rGKbddM8VBFCKYKZdTaNmQbP3SMq1pDC9Z9Y5tfjrfk3jVLehxvGMRNovfQXwX2nNAL",
  "key30": "5xBgMAULd7yGv9uRksAjJF57kXsYhwJrEFJ8FNn9h1rv6XaLoYMRtuxCGvSfhmnChKDKpafTjjZyUDjMHG7ErQZA",
  "key31": "5aPmLgpo4oShK2YkzZqSWnwMDkBDunjRDb2Te6awv1ipM5DGxCsNozwPaK3QgceCdjcvXUdG4euU5u2YxKvMW1qa",
  "key32": "uc7DcTr8v1KBR3UhEJuZyFPC5VpE2HpZSgAig6NDFZPJAfaSprVnaEjY69z2pXsoFgoSizxajh8SVyuAo52WNCm",
  "key33": "V4g57kZ5LDRhn2GLmoQjyJXgMqxs9CxyB1TkBTRyvE2ZdWZbL84jF3e2fBGpmoTZKcYyCkSJaLbGPnjGF66mCSF",
  "key34": "4bmVB892ANR7k6eWXJmNvKxeiDQmrecoBYhU4F5cu9Z67CgzNRYiKBjSa2kvjg4t9xEPNr8NU1zegUzSuQF4gfax"
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
