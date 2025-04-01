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
    "5tVudomh6hSnMEmQcT3EkuvYNt4mxXkASCuL8j3GkUJnA3nMze1jxesewGcGFE8e9Q7ECEAHbgu9BhnmyB7dZ75n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bGZmoaBsb182q3dbqX42adShY4d9aYLFkpLBQqsFNDVgiMbs2LV5mG9JcRawszJz2r1DtgFVhA7xGnKXsVe8GwA",
  "key1": "Fq56zdwa48hMsJpbmxTWgcidxnGmox3dt4yHDnb6PusKQC7WoSsZGDqacqJosYPSu7ez53Qxib7u4EPBSToytt3",
  "key2": "q7SkTAoJ27mGzqkV2Loq13DH743u7V7EmCpk7TpRVpwnjbcfwhxSxob8x7PQMvdCBnRpadC4mn6igJnGSEtyeuF",
  "key3": "23A4DgLZyVsJKa7tt1qs1hwypDSazZbydmGp77XNnwSoEVcyF2cPJc9U28rRs2BUiPwSULWhvWioUbRSN8tYJAWt",
  "key4": "4aWWSDGq61L8uZ6JC3PEZabEDsFesHYTVjQzdVJYTpycHViSYi6fNNF29rjwwU38eHYZdXy1v2eiVGaANexYoJDN",
  "key5": "2z9VuznBaNeMdKDysqBZYA4NBS2Z3czxsyQQTPnwvXsRRisxv4owvYXEFb8T7LQw4X7tEnfVXYCAWmXGpPvsfDGV",
  "key6": "r7harsSCtqAngt3U6kyB8ti6EnwSvKzFbPjoQbvtsjUZKUoj17NpbrhT7f77FkACsoCYjdGiQEVVcEWT6KoJG1d",
  "key7": "5YUN6Ft2VySrUZh4LdQzCXT4ePjta15qBtwjJcRqYXBPWrUB9xCRaoeQdpMdMZ5VsdHDkiCADxZCW4gGt2E21bwP",
  "key8": "63F5cmdhSy5GRrYbMyfodF26FgFNKDWgDUsfeNbiLwHqtV1f6BPcaD3tTX9ePvREzKGMrPKHdh2EwqameELQEC9y",
  "key9": "5XPFumoS2tDTQcFMz6QahJtT6farP7o6KZmG7qUqQ466KUzWPX2drxLaqPcJWx7p5U8ZN7ZBUcZvpEWF6uYwVWrS",
  "key10": "342hXq78NX43Py82uWKsEfJZEb96i3JFCwcckLhLVzYsfLiAhmqUYp6z5xcGyH9m6QJEU5m35mVC3bDkg24FDdcj",
  "key11": "3udivcEUfz7cdc7i2SLM3BXw3TC5w76pwZHMEzAU2E2V8RBDkyx7vCcctmvS1cGGrhyaTknYBeY9XuYcEWurQYk1",
  "key12": "5G2N9FzK1TW9Fv5up2X3TH314CFVatUudbemYkBKhTDTRQwPgLcEJNp7tvvr3RuKQaHSnwFZhYNeaQ6a95hkHYFx",
  "key13": "3TtZnvWtJovKkDPMiJ8J2Nx6L6XNoQ4ki1tn8HYQk7jD25hqDXQxzrijG5GgWUYTv6RCsuiQ72wR7fGjZptr7phf",
  "key14": "3xyq8PQHG1pDfDwuFhDXnvTGeVA1DPHRYxiHhqqN5DKsaugn4j2wZra65RXGsiuyKcyM7D4pLQJz2Ka9zsqMU113",
  "key15": "2xtopoGh3zfVkDLbCZNgBrfvGw3A21uThXNkK8XUcxTbQchXqQaj839EDfN66eYS1kfGuF1qK8wX2KpoKEggg81b",
  "key16": "4SkXup7dpM87DYfSYCMyWWELMUc5ciUk48jGWohJEWjRzM5cKKNEHygnkq9TXgeURjw7RpWqGQgCf33hjAjjXA16",
  "key17": "4cU8CT8hrtApzyFLYPbkVvZueHzgo9fJbtGaz1ZJg8YVXPcDhJaJr64YydxeRqavE2BpYPPySWVnCJL1gYvnwN8s",
  "key18": "32n6pn3FPUf8YR8p46DKqKrEfZCUwpmt8a12NpeKjV9PQcFa1KkzTPZdNxpninVtaWgjD9A9A2DQtpoyVMUUgRjP",
  "key19": "1rjKb7H44Woq7DZnp8HmfyPnu27LMfXCE4mHwCABBcYS2xTCK1E9pbJJMisr854WgVdGpyNpDqirLqDZVKqEsyc",
  "key20": "2nQYnS3AoF3fwWKTF25aQFrG8dGVzj7zjPNNpQTPgJsiHdxX5JFhT2GWa2pQhguE6nfMQHkwGz6KwcmqYG8p6DVL",
  "key21": "xtiFmUg1BDsFqdKFdVUqsyj9rzjxfBdUxg7MzHzmQD7JFGLT4yAnisofWPEthi6Drv3Z48T3q7zWmNGvDwjfYTx",
  "key22": "57EYSFsx1StUuQ5V6c7DhFx3k3e1qK2eVUMJwrnBD7CqpmpQen5Y241Y6nsiRc4cMA1hZBzjX1RStiwuAdCma2NE",
  "key23": "65uqwr4jQTSMGNMVit1zdja8emLfF6SpfqAmcZJEmeQtHiU5ALLVM75MQnMiEPiGqVpPQCNTDRxdGadFPXHwdK8r",
  "key24": "4cGnBs9aUTfGuN5yQbcXAewzD9yJVVUr82p4AsjPhUUwSN1pSm4DrFwy1pGYWUFVfk6sy9xxesBtDpSegHBh7WvQ",
  "key25": "26nPYeapRPUx1xgG52o7J58cseyvaL1hpFyR3aJEjjhkfhjx18Vq3GFFNwGw4YqsvoUMD6FzhApQGwDBZy2NgVwA",
  "key26": "3qwZE9KeJ8KsF8voCKhqXtpHYWBQzYSYEsVv7nMGt8MsSbDCfS6ZVwigxPXTj2zs79jHfTPsX8PzXdVE7F6oNPEA",
  "key27": "5Auf3LWTYY37e2aR7LjDxK5sUfqoiKMojicTEFNbfKeUtgYfteCq1MAtKGRMq4JbprZeKLVjJxj3j6we2REXzB65",
  "key28": "48T8YhBQswUXx3RwywYrjPtDgBo5zhHLVKT2W5WtBJqhJERF5gpVknjfXT9wCiXZwCQQVHSmp9oRTPsA9CQ98zmz",
  "key29": "5Vkf9AZEM2gAdCSfQRVSL6cKDDZDraohhkdYyroReZ5X2HTJCcpZqoiYE6cHb6Pc4vEEXbRiRB9hVj8F2sQwUV1A",
  "key30": "5HAd9fkTB4nRN5XgHRR9wzTC4jhsyapi881JAALav8gWWEfWhfgeatxveBZvM2ernerTARL6q261N1BdK62wfGu3"
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
