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
    "3tVSbiJCwDxrWK5DYh9zyiVi2Rqymo9dC7CxdX85X4FpCLdPXxqcibxyWT92KWSG6yTypMqjQDNSm6aAfQhGbFHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48yAVoGWQLtFFFvJSdm3U5BJJku37YgYYAMCxYMMNt4AhL6jBpYz2s8g2EgDB2a8Efow9w3tNueaKetTvkte9JRf",
  "key1": "2NTJC7kRNxQkEL5fZd29NyGjhnFGVQqmDc5BdhVxpSQkPdBG7fwG6N5cuB3tJWfDFSzomdq3sw4UGf4uyXUiF4hq",
  "key2": "5QnDQi8wKLPhz19z24HFMH6xZ8xQdkst866Cy9fbAytFf3mfRDQyv2R8fHpqhnmTF7pyAATTHkHG2eCjvfoum3M",
  "key3": "2VUpxgpiiBhLqURRqVrsmfD1Np5yVvKgUtVC5A4JKvT6AAyuNZnHtY6aEHYwRHVipabVCA8mqENeh959MhtyfDFL",
  "key4": "45fpTg6wEzTKL6o6SjGTPPw3QeFY4WeqwwYTSP45Q8jfsnUUnPvXV1CN4wfjbwpf4Mj7DQU6WMsn5aPbi7Y2Rr56",
  "key5": "Ucs5zFZFzPEyfpvy7wsVXFPcFrinFvWMmiMbQBygWBTncLhRVGmYWNEnatr7M5pdZqgRmxHoQP4rVRjURTt8rii",
  "key6": "4AKg8o7izoPbs8knvPeY27K486wQ67T57HPo6oQ1AWothy4CUZSVR6QBh3PSSbwe1WRSgMZCs91Vwpg8hsE6CePm",
  "key7": "4yo5ygmY1NCKhEtnYTPUYAteheXNUBnqdGZi6zKsrpxrNAEEb7rcB4txHe1AAtJeHP4TnVKyNb8VqKfyQ4cYiQXk",
  "key8": "3aCQPjjjum6qXpEP9eUsoawjkwaV4MBLXv5M9UUJkRKSe777SPDxz4QHJcChbdtM92wCvZ9VZ3BH33kR8F7fdaWD",
  "key9": "3BbCLMreL5vd3JctEZViBJbTWw2FSUS65o5FEtZg7CzWYmGeqs8UsdkpFxzf3ehyFB1Z5si9QBF9kXBywe1ahRwA",
  "key10": "3YQ3haJDjECamXSHdapRVYkKyrAVUG6gVhnk5ZSBWr71qwUAPoVgtMdgHoHu8Hi5tc4tqe4J4mnFNNX6QfMhb6wx",
  "key11": "BZvpA6ZF9RknyMW87jSmWFN1N2AgC1McTvzD5gs1XrFm85F1du46EMnDsNXvQ95FMtieBBuYdtuvJCSFRjMnxdC",
  "key12": "5oPbK9CW4qVqx4bBPaK6xhv2i9sGiSmGBrAp4283tBn69Pvb2qdx5y2q9aMmvjRzs4dL8yM11yuNhKVf5XbCAfqv",
  "key13": "oqPpCg3t4syWDPSaKmFhzzXV32JqMimE4aN6YraaoqFhjZcKt4oeFAvyXhvWnAuNYRvEuaFcheLELfPVcx8Qe3k",
  "key14": "2XCMFPHBs9f314HTMQrZgwthm4otiVe3QTwGedRdbWqAAMnQThxxz5WW1zkFeNP7y3iH3sw4oEwa84smC6Gu6A9U",
  "key15": "2CpuaroRqpMkeG7nFeUUkQSP4Wt7DDJZUmfB5gZLNSU7gWBkVTx3tD8KK59PNx5hiexDd6Tcg93yWnzgY5Geux4y",
  "key16": "5NEHyyJRaYB3LnLdD7MbLxxdJfn8QbK46psjr7FkHpSaNQKwPwZh6VbhTzp2njEQnpQtCZpnBHFeFKPR4rF7jJv",
  "key17": "PKFFCs9phGLEkMgEJi2NaC9cP4Vngzk6ZFWfPxPFWs9YrqB5roEfAjyMU4vkZgaBj6oEjGeRQkt53NQJ9X2GqAN",
  "key18": "5khoCgnXgV8pDc62B6DjwWgSHsoRaKABdqvpuXgnU5UTZGAvDSkdp5Tm4j74r4UQPVXvJptkQnEKaWrwGtR7gqXr",
  "key19": "4bTkk5yqJUZvDLU71eeSutFH3sPsfXWWj5YGbZZBF1Cf8gcv7xMkxv23GUzLNoAK5AQwbcD7HecNuHE3um3q3X8k",
  "key20": "EWj6nNLHEna3mEUYpTGroLMBGYfXxh3pdBA17EsiTgHQVDntSQfvQtfSuEdfboJowprks5Yma8ZDaLWPmy5dMPn",
  "key21": "3FhXMcnbG7uPR7qbeDddMt4QYo9Z74TwFCYpzdEEmf7piUU2YMpKvHuSgwFswjNLqBeakAtXakvnZkhc7ELRnRaD",
  "key22": "3paWZsnCiEUMBKoHnmj4U7HvBQyNPaucYYw5pYFqfpi97Bb5VyPTg35arn1XS44QuZEzeShnWjMjjV3xyncPgPFq",
  "key23": "2aDD3AGbTQf89DZeiesxzJNWReEnDQSt8nhdmLeAy7FtJnyiNCpiKr6VBJ1N8JpyxYk4Av9PupQdP1842a521k9x",
  "key24": "3xvXbXazF1eNTcGMdwRV2gVLCvhPMXWLML26SuCGDuBmQVz3xqadix3vzp5nHhJMWnB39gtAaYrVrrNugRJGruGc",
  "key25": "dDnQiqGivVz9W24Wv7aBRohiuqkwpeae4Rgi5aExxqVcTbabwM6qfiePEHwwrHcya3UGt7vbKVN2uWtwdCQC2FQ",
  "key26": "VEzH9fRC88Cgp31Kk18WeTHLAHQntbuUbze6nruWQxUYmxwpL4GmpGjAkVr5nU3Dor8Qb91iXrHWsMLQXMf9PVs",
  "key27": "5YcLdeMMkxjKGD4xeD3iytbipqnDpUT4XLerjpcGyaM7SUQy41QsXYTPJyjMxuZoV1txLAvMD3rk2FfmRBEJfhaQ",
  "key28": "2EX4QDgo9qV74VyVUzykHsXvGJxku7WfFhyNa5W8TZK2bbcM6e4YxM5zpenvjLrRqNWEtRLaZgbTcV4hLMYQqafk",
  "key29": "3n1wsaBN5SoghTZUxSKo9UmHSQyoj4UNTYXpnpqrTmdZFiQamgCMBZSLfWBbiUhD8mqkYzZMxNt8E7RQNpnKwYtc",
  "key30": "4TYf5fbAaXGcokrCddmQG8djZDqjJvEYDPH7woMeRfkNq2dCwdpdRkK7YCybTrTSuuBfJnMpnU8oWN2X3ZQ6V84w",
  "key31": "3egbPXqP1tXvwUHH1XhWw2UwysnRHY5ca3FHRQtsmjdNcNBwSDUMR5Zf5Fvs6heTvBc8UGQP2DMfyfWNhqXo57ZZ",
  "key32": "uGkk1juyzax5NVReZoR8bvsFsB4qfofw5PdWtQGxUNntDE9B7jcWfxjYeyjqZfoqjL1iPzQ3yHimtqWcZzsmWGQ",
  "key33": "4zWqjmHmVMXMYL2XvgG6rHdhM7kLzzbiPJJbkttDivbuzM5ENi5b9bRJyzXrEvzVwv3q6dd1qcTmBCLjmTSZ524H",
  "key34": "2AfMoSdCSdzJ2j2udwDz3TNFasRVt2J1AZCqmrjGRxLr3zW84eUu3pCHBbG2LeERetyjH8YPdz3Eg9CkQnm7tNny",
  "key35": "5zGFLHDWZJNiLqTfhUXaSxUGTfSg4re5UXcyBSHtmDgqVbeGBTwpJbcf7SrJNdT3YoV1J7mgd7FNnxcp3NTc2N5Q",
  "key36": "2EykuZaoBB8b6nog1AzVXsDXGjtV8YsbZ4ZiyqEFnxBSEJpJUV6RT2LMTa8rBcYNU6psPXgvmixksXz3Ub3znQqQ",
  "key37": "335ZsZJPC7uHkWPDoq3iZgCGEq1Bz3AF5MxhpMoQJWN6yyt1hucufdYmMirFYkDdNow6L5v4LWwxmaCcJLJew1wh",
  "key38": "5VPCzAkaqnsgNhahvPUvtUrQq5KBfFnHg5AUUJk1B8YDBHybbK3fgxMes5aFjMPJNyhNLYKJJ5vMobLHoRDU7Su",
  "key39": "N1RsqKmAMp5Zcto1MppeuSqR8Xwi1SF7fUHaKv3UnQunHhAabSJ52nvyJjy5XTGudkzTw9hMjJTpiokH4oB4BV8"
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
