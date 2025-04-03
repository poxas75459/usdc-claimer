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
    "3JHM1SzXqDdFzrsVjkDgL77warZNtsdVPvprqK8BYWyAGq1DLZQ2MiQS1mEzT4sZRvVpNy9fjhiHf5Wg9N6dsewh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dK6smu6jdcCBvGtzpaVbrTLkjGDUUKEuMcbn1AzWpmXuqmeNG6zXPYPdx5gkBvoWCR4faJgz2qxKHvvi35D2aiS",
  "key1": "3gSibQ5q3TSDzTRKGdav2bZ7JPf35eoFEGYkgPyX2X4FvCjxK2gBFJMisVWPNPfx8DY2d8KvHJDUrRsJXKbv7jkk",
  "key2": "2pVyinkAKTAyDeKBPFrX3ofCSnY2nLf31F5gNKdf9LfsTVsvHH4kjJxmkkEFT4xcL7v1y213rc2DiPyFNAJeskXY",
  "key3": "5DgEENcNJfD77EJjDRWGNgnqAQ4rzrVDQMj2BpMmrBdwTkyAvA9PJdR1c37GaET96LuspAs7U5VaeNq5ckQANGsC",
  "key4": "3bNj4R1Yooa4QXJHmTgwsXG21oomnUtcXX2A8dC2Z2QQjwBLVeNu3RkmF47Gg7Y4eeeGKYAkcPayJrgCuDJfR8mF",
  "key5": "jr2Fg4cgheKJowMPuZebvxJGkreR5RMTqAz5wSJmXPqXnsqRJoJ3mMVUsrWsxsjdrEJw7SMenzERi3Mo5vBkxhV",
  "key6": "NsfjdCwmk19cv87ztD6zj7Ggm82SgFmmVzVgbwPENxvoGeuNSFsw2Ugo5ZamiHvikwxzKbEgrwkfUaBXKpRjME5",
  "key7": "3wny8mUugNhALLy9sBmeB72GiTY94mvgHVm3U2NSaJqtV59ktYZAqazFYQJF2UzrTMS7FEEkhT6PbMNLisYM5m4g",
  "key8": "4pMNo7VCF55YaDdkGT24jXmUP2Diwv5URqWCDW1M9e3oVyp4yQXdGJXYEvzPQzMcHr4b6AiT9mtsCgs1WPBSHYm3",
  "key9": "3Qv9bRQHTKS9pTbBMR9YzqsTuHQXLAseH8mc8PejDgvhwH1Mqj2irT8daDQVyn7YbE9HY1cZnAf6PuodzRAPYt9m",
  "key10": "5tFb3ESAmwc5r2CsWMkwsJa8HtWMNfXDzWVpJ28eNKEVzByz3aYnoyEjrrkwg9TNwivjU3f7rJb69YoayvfM5jqm",
  "key11": "Dp5me6Gp3aAz91fYZfN6QkX75ugtUcDBwiZG1n5jSauy3F7pJXehWtaJSyoUhaPQrhXovURynhwLmAEDCSdM3yG",
  "key12": "5EzD1matVHxGNiN6dWaAY2wJkwy41PPQuYVDF3Kf6UMQg5sHr4s7PqdXvxtiU9MEJCgeiNMNJMSzvTYgvAMHcipB",
  "key13": "3KLEB3M6KCh4w5YdGjACG2nJwyuZUYQcWzeJx9uY9QtrFTCYnovwUEaejA2aUCa9acQWLemJdxrH6QP8CQafqYNy",
  "key14": "Cf2eHYsxx1k6G4FMirAvepA49WtYZnnb5MPNFsoN5QF99tbfzFB2bqwSEHwhguduUZrbM4JBpetoC9fPb8tRRVs",
  "key15": "4rXnSTC7goTJ2vW6Qmtdz8L4Lw8X3UkqeCATVNKujrYuUP5k7YhDav3X4exBMQUatQe2395njNPXVJNcr4xcicFt",
  "key16": "3ErTXcqYb8FY1JU5Jg5Aa8Xx4ELGc5j9jfxJESKRscUPjMV7pLSxjTGsmvNNX71KxpyF1M39LkF8jJv3ybNGJVqW",
  "key17": "ZgxQiCabiqH7s6qrqo8t4mMyA8JjmwqZaYFAGqpa2s4htmmrFBHWqYKnwUgHzKr3J6Tmq9DPNa8hsCkz9gSqk5a",
  "key18": "2JL4ZPJQ8PmDXA2PdQ8CXtGx4pGp7g6xXBSp4aVdNNiXNuWfdGsWAPWRWtW3xuZFf9J4qNCFVNt7ZiY7K2SYyWSP",
  "key19": "oMUPCZMhByHB4TtvWo38EpbKFr1CwYYxM1TDujQHitK3k7kN8XZ7TmcJQ76GAwWEB1Deud1oYqhPoa3VTmaocb6",
  "key20": "2vePA6oGEJCqXk9xAjaPhfwFRSCKnS1p5MUccUqqXkULeBUGdmRR4VFLgHkQk27f3onV6nwnHpaQr9vooMZynwCG",
  "key21": "63cWpKDnaxN3k5c6x9CRfgE3qTTZB7AqkMAw3BTGZveCtVBqAaw1W435HELEkJ2QRd6Zwh2EcYXGWRmXfkoh1oAp",
  "key22": "DG6a26NbRLS4xXnPmxVrWhuFJbicunSsigDhxM6zBcCuPmdd7uVvrxH6aMQb7csxFXkLnjbksgFbaBc6aiZ2EvT",
  "key23": "5Tx5Je2mWywxpxDoQYZjL7mS2cQKWiL6qJyZ1eUeNA1SrfPopsQonjqXcoCBpzfXZWmXpzR58k86k7mHXCsJMX5R",
  "key24": "wKdAbEcdeicFTdPJRZBVrRZahYyv7Eg1L6bdjqcbcHEMyurGo1uyeKWJEx39b7vY4z9K8QqXKqNL4cgyF3ucwtR",
  "key25": "5PazFz2P6gM5GVKu4MHNdYnMpso2ngZwAkUZKvMaeh7F9vstjvNpAbdzZURdwrkrbAfFSNwnxkq9buUC8CstAMPk",
  "key26": "3vMf4izjCREajL8DDzsyR8ysrwi2ta2H2vcNTwVruCfHsMDdZ4TQfhzi78kBuiwUwsgJJZmrysujoS34EHneNPZf",
  "key27": "4jPsvbjqz6YijaziYZQy8uWBksGH9B1bf4a5Z8LGY5cXdgVaswZWCC89P9m49wyhkdvZpBaoPKL6CZooFDp5aVMB",
  "key28": "4cqnhubvTs1MkcPNerQ9jvUQ8u1m36PvnFmppy7NYt9qqjw26eppPnDvCVZsbG2AmfUXF6fF1YV9cSNvu34MUQ6Q",
  "key29": "4xhyFjtxb5Kft93q4aFK9K2bUEadRBC9QboStvNiejsGqqP3S9HcakCriHjHek5stz5vyrUBArEKejHFNUT8feMJ",
  "key30": "2F4fKZ9pu6kma5QMcaG8jfeSTcye7h3VhbbAe4g4pN1PFtQecXh1jZbEPSfFQvUrnD6e833cqBsbuhN1cC4jRKuW",
  "key31": "jXxPQ3g4S3YFkAgPXyw3nRyfPkfDreeXQgnRGEuJj3gfhcsWmy4ux4KrFEC8p8xWUzbz8bAbupTmpq2XPeTRkvm",
  "key32": "33rfJM4W2nokQnfMHbFUuzLdBzGHy1eh96bjRAz82oLqMUH7HfXdLyScGxEqjBwbhpPrWUechZNmNotmv8c3FFJv",
  "key33": "3WYHRv5EY3ev9nFL9GzR1EAE4aCmxHGVCQPAGwPVhr8Ve9R4GGUxZL52P3yPy6zriDKmF9ce1nZYDGTEqxVQ7rnL",
  "key34": "2nhTRCYz45QwpZ5pgW152nExoPpmjVyinaogJtzCVwoFgnCsxxFYC4wuf9a6y5ig7JzYaRj12t9bDGFJJxwSJdCX",
  "key35": "66JAaCLax2vX75vUBJ5USPPx2WHhJdTStkT5UjkAus8n9AudSv3cKnmb6oH5SfgdBGTwY5xQ2kiy4YHg6XU8TZF4",
  "key36": "4AS3CyCZNF2Jr5a8UPArHCQCYv1fdAnahZhX9T6Wcw4HWQnZKrforHkbhDCEVNqcuWknhdhU8zRBfgfrT8XxEJXg",
  "key37": "jJ6UKfexpf7yqeAgPfMtwYqRE1pHzDnT56gNfcM3pPx2RyZAR8ufnTjjFvNKJUX6qUYaCZCYU2SoRmdCeXHfe8t",
  "key38": "Q8t3JLgxbxBqDjMFaDHDgF16SWF1cBhqPkgEsZSEUXwp1nsxaR21MFYmXqvucWU6VHqNSbTBd1QJTL3VDVRWfxx",
  "key39": "27fctMCBUhQvYcwSG1kU3m88i4H1a5qX68PVTCQTtZhkVHhzuBxzYmqKG4kYvTFjeFVBcjF7Mdgpxn8pq33rimxF",
  "key40": "3DjsFnnbN9Em9gtyZPbmVurGRUBwvVVL3TwbBpmjCqbhJeWsEGua7KzB7AomBQA3Mx9b1K77GVpYYa2yfaTYMWzc",
  "key41": "4bEZrfiUy53VbqZ5HKpCnqPBk76vLEDs3TVzvc8UzXeqZpAXVLekdZLwoT163H6RGj2E6ep9fxraR7AXVBx5CSsx",
  "key42": "67cqjmDFtM8MxBHpEPD15iDspQxBtTdGDxD1s8FJL4M9kRpN9rbP8Cp4Q7CmbvAnB4o35NyM232VPKdSrVFhsRZZ",
  "key43": "v4Uup25hwQHhAZV1ozUNb8NtRJm4bBWJrrGK4hGHCAxS72DyVsZuutSF9qVBbWVt88gznFkceePPR4XZo3Ve41H",
  "key44": "5oASBbMaJ8o7f2VxSaZshmHEcTpybPazrH2csz7qDhAng1nEYW3BcBPBNC7W1QQiWWTdwE97VUZSGXu7ArTuEYrV",
  "key45": "44JdPPTeGK1anxLJoYaMCiWj7Vgp1eXXdxFPqV2zGHDpHJeiLYZ6SnURDaXmbiGXqTznBKJeitCojxA16L7ftSBi",
  "key46": "3DSo1YzxGS71PYnE8sUcvZqtst41hBZYBybNs5TNM8pWyRfvKecZeeyJMv1z4badyE9QESnSEz1yowsponFb1JqB",
  "key47": "5Xs8YJ8YyNJ71vB6nchaLdtKTKKwaXX1Mr1yZhHpgaYkmVYG9iCu1L4myrWysDPzfN6oanaGQqoayoFJXFD7aRBc"
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
