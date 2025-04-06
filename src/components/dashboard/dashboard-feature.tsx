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
    "3Uh2aWX5PvB8QNPyWBJqnoqoFuW6hH3cXSvDDZyR4NjaVx4Syc7uvXfZbudHGKUd7RmPLtg1tmAhXruU8u2cQchn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rASs9mscDJ8FyYrEZJpcVPGcF63LWB9rMkZiL4GYchikWEstiMWhAsPELZiGDmQETnupEQGu5DtKqeApzDjzSyd",
  "key1": "3kn9FXjXdeRF9CRyjJ65QYEep7nnmtze5trdq8JJBtJYYoGxQcTXC16s3Pf4cVzvZuSCWCsmDxVJE9svBDCDTk6Z",
  "key2": "5bMQ8XKEJg9veQRnQu7KTCaXyvowWCxsAyezavHE1JdSUY6QJeo7ef4R8W6ErVFS79g1eiymkTuJfcUwKPi8tk8Y",
  "key3": "4PfLDb7cUsWiCnBUXns8YhrJG1hmccf88ySWGHchd2NLvn9a5PuQj9uaAdaguHSj7YuDKDFX3wWVCM7WxyLJAxpa",
  "key4": "3G57Uyn8xNuopDyGBkehfprqVowPkUhKx6dES3XdYFF97jWWUS3tzKLH4tyopK2esHbRGYrRi2qqMeAGt9yNnYsa",
  "key5": "4mTkj8jqzCUsNpwaRx6PqGoCpZbXyJZfxwPXv3YY3K4ziTuBkQRTMnjEbjZdPmj2fUXgVbAQmTqDdsv47VDdqPUG",
  "key6": "2HgagVY6f2GmEnLemEDk2WF1NEH3QFzPh89VeH6CNcmxsGnp432PJfNK4XTDLyA3SvpLWKSXD1NwUAZNSLLdAJ2Q",
  "key7": "66jwDP4g67fSzEPsScDTw1e3WjsLdmbYHDqNGfT7A9T7jdtHbCj5gETW96cHmStAYxfr16XqKZuQ4Eq4j9kBsJGu",
  "key8": "5z4Wq2C6wCKr3RcrRMqtsxFkgWVAF3qSe5z6WqGmZTVNyTcT22X198ynSDEiVVdLG4HUHi7PypxgRLhKS4VqzDaJ",
  "key9": "3GZLjM3XfPfm9BM8DuLAopUrK7ZwrTFNoj5ky9za9GKo7kr1cj3yp8XBd1h2MsoHBSW5dDLezECPjNkq7nT5mebm",
  "key10": "4FBQCYGHydpwB7zvpoyQD8bfaTR6P7KF5zPSw6QYdrba9C4FCCRctwTSHC2DT5rZ8zLs2XHSMwttWog85ZvT3bBA",
  "key11": "59ozba9a56nneKQGfkZTVxH4jpW23rUfasfMJtRYmSk4SVS8XqP11UXqhEzLBN4X3ixhw6f8e2DyheH1jUvK96j3",
  "key12": "2vYeMmXXehPTrKBruKprBWu1MVPLnvmNQvvdV5JYsA3KZta8EppB2jjuMwPCmE8c3fBqV2T47WH43kNjnPaGfELf",
  "key13": "d97F4mwKFP19cM2WhAVWSVSjAta6cUWAJYB3wZgfeLcpw1KdnrWEfm4RvekmFnBHmQuaLvAvAkJUGMFsExVhHgD",
  "key14": "4mj5LfLCkfVG73ezU7mDk6oXhbjpMAkJXR2E7RB3ad7ed9FN6nnh5b9eMDgXLMf9DssiF1Y8kDH1DG3rWeW4uhFB",
  "key15": "4VVYdnXxLPKst7p2vmJrBbHHbL1e3rzYetAnnXSNZ1AxDyjmWtLsRj2t8ReLeJG1DdRtKzaa3rHoRYtk2Byw8M8S",
  "key16": "3sAkziZrsU4yuigQQ9NrTMJS6DWHpKxECLqyEtbQ2auPqcHMFKWcXg8Fc2u7mB6YXxDkZ6ogMrhZFNqrq4K5Zaob",
  "key17": "64q2znfzUXKnSxULzDQiJY7EY1fWpe8oTog7vhi8xZrZ695wu8YqDeDixTx3jc1u2RP3SSiqx3Sq63u9yGeTvwfR",
  "key18": "QAmUrgbjYG9bc5SXMuTVmJRM9B55rFLLjogFjo2hez9RYhvrqH6XLCRnybsuatHKugfyCzJXYgM7tnxw2XpG2Qk",
  "key19": "4ywBCYTT6763Ti3q7Przu59CTisx1eh6FzgZhmyxo2dhLs7tLsrJdhntS9ftmvpbxjfQdCcpGUJTj4hr9JmuUsJW",
  "key20": "2MZ2uEFMw9ryT7cy9beiikE7HDqAK2aSjQWZH3KiY2ScR9u9VA56JQNSSK6LcSnCpR35zcjx1K1HGs1f2q1LbfgG",
  "key21": "EhRBbEN6dQT2h7HpgbaP2S2GsF6scvSr8PGS3zNewJsH1MrUzPhHvX5XXModcshZpV2AfcPDdYQPqXfnvmxh8sm",
  "key22": "2guCAEBFLgJ7ULvKmEJF88xrD7poygCdi9unVhHJZX9KaG7Ywb8EcNCRXTUkkaikg6fqHDdPBpFNCbjsB2VrRvd5",
  "key23": "4xttovU4sctypBgQ9faqq9nTVPQqFo32TRGM7GKj2wjrbBccnbmkxP6MUgtBcHg47pk7Fk93ZumneuWHpkxnQJXq",
  "key24": "qDCkrptFpsECHyHnDm6ckZeTcHmTkaXnmw3aWMFGqgYHH9jKmv4ebEEmRENxr8qYWazJucJStZsapzsPtEtsfBP",
  "key25": "5eCw6prUpxggPEonrhfkfkaQAgNVWwfkaCugPq1j6KAaEF6DV2Eqp5E1ndWYktHQ2xhQ8tQHjHrs9VhfLjXdYWsF",
  "key26": "41kGWUhsYst1fgHoMB54d7Zbvh8GSLBsyoMPfurU4fTFB7Ro51WYMo6v37KpficALqbmCzK3M3ddaTu4nLjAbGQM",
  "key27": "2KvzSSgRLhbkhcWTZQF5vEDEE19jzDwkAhqukQRGxrV5SH5AQTFppqdw9oMeunFdRhviucuL7bG8koTqd4FbZteb",
  "key28": "nVn3pGXMB9d8T3Jjct7FxZzmTgiNqkHNGr423a5cmD8NFbUjGqAUaJHDbPrgD9ERdTPtCroEFgcwqByof59qtby",
  "key29": "4fM7KmfLQ688buyhCVBqzG5diMyC43r8HdYgQCEAapSJezHLukYfS35NUgdZBzX7yJBhDCbz21CSa6tNcUoVtMqv",
  "key30": "5aGBubSzoL8RLmBBkGcEFo2CD1ZRfS4cbeiW1mwNZ3hGrtcaiRsswt8MRV4SgxV5bHYJ7DG9TFQPj4J7gkoZq8D5",
  "key31": "GDzqv8BcPQREt1aUpuoG636wS1XbNvg5SBBFxAhCsAawPyCg89y8ittWUf4ut5Rt6c7FmcsZvUpGaBYbCBaoLTW",
  "key32": "2yoCmgt9HRvnHwz9MVf6D88pa97a8N72TmatzMGq2CSN62kRtertRa4h8LD37z9SbsJVEBPjecfQf4G4mpSfXYqq",
  "key33": "5Jo24LzDk3XE2dVFNb7WPW6sgunyuYACaMVgLYgQfrnWKbYBQDTQuUZRwUGJRwhLJjYbsgWvfPSBYQnGoSUD1UNn",
  "key34": "48EZZmtUC1qNPf39RvCZ4yR1inu2jg29j1j4NXWUWPyC2gwKEY9LjHkCNQLtMi8HbB1kuE6DdxwXiVcA6f9ZFZkY",
  "key35": "uMoWbH96YgargkYRfUdJnbAjtfKcPnqHhzRSs1KbJ7VTHjKcnxEe3Z3GtX3XZtmVRgzMLbzqQwgYiHedMJVd7XF",
  "key36": "2nG5dSjwUdNxs2enbcsR4i64qDJk61QPFVwQ3ToB9MZ71E3XX9c3C34V3aSBD5Z2BFQmGGx1r9UaRUjWvAjjcQCf",
  "key37": "61zy5NqV2VKZkp7RoxDtjVcBVJ6ephPcwaAEM5AhBQQxcVVxc74qiN9AW3XLtKHkTVtGdQnDWpX36bRhPxhesTR6",
  "key38": "4iVaKEoS1vkZZCDAYuAXZCPxLwHJhaGHaJNsoE5cPTmTRrUeRjiVTFAfkKhzZTUQginKbDaNsLDqWpLf32XZTC2w",
  "key39": "5gosLjj1BgzxegvK1BW7hKu4X6NBDJVe1VKasstTsKEuqaTjHoeV5CDgfFbFLUYvK7KTjU562g8B1vTpxMJ75MpA",
  "key40": "4aeAQwDJkmDPE6bd2YtKt8mNTB94DPALV8ke1jKuH5qcVbZ6XdEVA6FuC6sJZR7NCKAkLmMGxGatRKcTMk7Qf7gp",
  "key41": "4MPYDeazpQ6ZUcBQPjGNdXi7nzSMciDcaC3Dp1BPxDa8rGLoUQX1xBCgLMcF5TWhhaC7cAbKsEAHeDPKZ8Bq2Q42"
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
