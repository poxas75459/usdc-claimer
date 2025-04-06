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
    "3c4y6eUiU7XHrEakUfskYj3STcqrtcjyL9v5DgM8hGURC9VKuR9aQzBoRK7FxXsYGv9xZwfzHPZPsYPcdyifwaA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cFG4236jZGDAZDsnbguaFQ8Q96Z9adyVJPKQzkzRqaeqJ6ZLorhbbJLdEeZ4zHrUisSKAMjxs3tQS4jme4Lp4c3",
  "key1": "6UkCnumDfcqaxVsENFkHxRv6d2xLHZrzWjQxMUQMz7nx81EfVVszuWh1uaDXwACgxfTiNNDmEuCZskEJNBgNTQh",
  "key2": "eCjYAS7vdQ8DTmhfZNzixasUBZ52XrJmedPasp3q48qTfCwZBdtteRDD3AY7X9QpcPXfq9CzxoTkT2NWR6JuYfv",
  "key3": "58JKNRXFHz33h6E8ZCuL7FHxeQd5phDgZC2hCDivibza6wGfJdfKyqwGsMWkDA3H1H1gDGADyLdFobimddEeuacw",
  "key4": "26J8bC4iuaHic3yGXHCeQZ6QfTgi1ZuqwdUdwiPa6KZnJsn3MXzgreAW1KFSgYG499rFC3AQLsQMHB9f5nVP4n1A",
  "key5": "3giFipwy7BLHPGjybQ8cpLEdPz8dKY3A1CiGVp9kii63wMHn7W3CtqzKXrjZ2HtEpemCthcNAPYr43jtDXGv1K88",
  "key6": "3gpn38HABfhZe3okyU7yZr25VeWHWCjGXaLbssXjNs7cu58NDLWbebvofoE9iJto9b2e1CTUgwcgazsVqhSKuZ2Y",
  "key7": "5chnxCqA3Gw6zW8DueBpvKt27u9WJUHPPEaKDNKj1ahgdRRB5HVHnXLM22szdZtZZFfoM8g8nzX3NrM6Hzhv7WL9",
  "key8": "ML7S45roScQqPKSyn32wqGSfZw5NM9eRjW9UCgg7fq9PgDREbEdCETAhHc8HaWL1fBaNgGDia5dcxzj6qHJSiKp",
  "key9": "5SNtTL5EiVRtjHCoL8FmBzV6E43VWaB8GykVRtSuVzdrPeSPL4z5dZoMjdLiD5fmcCbksqHHCSt9Y7iKzqNJyH4z",
  "key10": "2zgvfiF4CsxaywbPgvC29SrWMdSyVk341W1SsG6VbaKp4csDkDMjkzVwcaHAV99wgNQGG1VeQVxDaHoJm8YCEUdE",
  "key11": "BEGZSzZrPsSby12p2tjUBndFgtzvoA9f9gfWS1v8muurnWRrv5mrZJ5SwA9pCKXqm3XX8YddtUfZPrGXN9CJiLf",
  "key12": "53wAADnpDjBDKtHXvsReqC5npHxiAkUJwX44ziiD1wDQaTWTcctWj3Ckxg5dL8ipmmtgzDmXDvkFpHwqyMaxzVpB",
  "key13": "3RvZ4BDdos2NtAVr82qCpJ8otrD1MLiZVNnQoePUQKbmC56XSduwSEVhAHdqYF1Kt5YMvtVwf7hTmfD3BQTbeTyb",
  "key14": "2YgqPK6pS24ZF2GtBXj57N6dhLuRhroUhkPqPwZArPW5GrEcu9jUWnTbYHJnPby8moCqkSgUhFDqUxshL2dhm1Gr",
  "key15": "3tRXpF2x2WPTRF4pGD6EhEVYCzsvRmsG6ccW9setzqhERqQWN7TY61FtmbbChtLpR5n9fB22iTVwwb4JBBqfkNSr",
  "key16": "2r11zmQpkobnrZgoHmU7WuxEB4reDv2TL3HDmqytFX3bCQSsmtUADCiFe1TEJ68mzr14xhFVKDdYMAGq3GZBcRxm",
  "key17": "3MsubHvpZBPmWe73XorrLKnmJLJv2zaU9Mq7ihuyrz7AXgNYg2Rg5LrWKx6X2orUFtseSLQTvfSDTWU6Wk6Xurbr",
  "key18": "27j33Y1b9i2gs3TDbTNvAmkeouLPakF3JCi5g7TnV9jQgKNf8ebwBQ4Cdqc1vxqfcxgcfv3jS28v2FWnkciFjxjN",
  "key19": "3cZChsooyxVDtqVk9oeBCBAYE9GEgovTSbtfaMoVwJgrBja6U7Jv2p9WZ6rbqcY3CF3UBxHeiEEFwRiXauqAXssb",
  "key20": "4Z9whg8gSje3s1VhMMoQ9P3a4y3XkjvLYgVtn4QaRCYZgxxN9ShoK3ZcmbGcx2RDCUn3NreLHBpEcXLK4iXUzWrn",
  "key21": "5iwi9rPSJVoJyfm2oy3eZPFeYM8MPFFf7BVJKFyGmpeLVZGSnSg2P3qRy75kMLD38Jxv5yb7NRugy93oiQrV1quV",
  "key22": "3dtdnSkjB4pQrL31K8PuJcEzuSrbqsDLDVx1oALYBYRUew7wEgsjKMNxB885DW3ozQu4pqG7V3jyg9x2S7ikVhPf",
  "key23": "2gjMJceW1t75cnZ4GsToF3YqqyawNqTVypwSC6y3L3J6esGnYQL9JCZJDro5rTwhavJmRjzHFLQ9Y1NhZVaP3nYb",
  "key24": "3JwNY4HvGZLgwtweWkwijmQL4JNWfhhrLsDsVCeco1bpY69HPDcqmrHR1a4iFkcc1UUDzLMzJ68WXnyepU4U74Tt",
  "key25": "3y9ZYnnJeJ4ZUFUye7FvSqbpNq4s4EsrAF3MLZdo1kf6kh8fK7uk5xQzz2KEPi3EB9zm7EMWxQ2EWJ9PNyncowoJ",
  "key26": "5UcG8uaC781QtqJEJrfYNhHU5kRhEk4n8VtU3v64V35ZNfPEgQYU7aSN3oMTafqAZk3NVMsCWiZZb5koXBCGqyXS",
  "key27": "5pkPUhgydkMT5kCCQ3nAgSvWESDRgZ9YymyjHEhPKCaq6wfWobVBYaVjsFNoE8nvCVUkufmVCAibhGDURjFLnxSa",
  "key28": "JGonBR2j7CjaBHr28zDbk7vutPFFk8GrcJ3qKrmb1Wcu4QJessCVk5pPwoKygPjJeY7kmj2rj6humDzagxnp5HE",
  "key29": "2pV1eo2qWEiE1aVnojH2zR8QJGkvNwGqPgiyjFdaDdWprNQBSFk8Dx6XrSre3AsRsQpfyK1wCEPptpmXiSfvsgkD",
  "key30": "47voD81KHEgZzHjGcbh7CHsGAe8v4MkEJEDnc2Shh7BxGVwNaCkHXJ5MWuhJsAVTFtxshWHhfCVq3xgFgnLrBDev",
  "key31": "ejDrtjGPxcXP7EXhMBvxDxPxPPbWYVNKTvKnAGcRemPTnc1NjEyq8qb7RTadyVfJAechq1a6xLY7GHvW9iyUQHe",
  "key32": "J4skh5kBjfseCNLwsHXa2k6Q3gqRmZP3ePfYgwHvUNnHmUQ35LByPigP1Z7rBXK5BGJBjmZTgezp45dBKVggy3T",
  "key33": "32NqhUiSePsmK4xLSjyTAHtLbtE5EmEfSnpbusPUCf2pqGsYj9Wh8PEvG8cDLnnbmxFwPpBTj6An74uWTkx7DA88",
  "key34": "45ipeFLw5vToA1tTDN2jWPSBUxLNqVnPJC7tyffK7zVwAFA31rYZuEJ3ymEyppuDxUrBmFZRgZZwExfffQtgZpLd",
  "key35": "3w35Lopoq13dXX4Jygxskgh4uFzVSuNH5pzUJVYe4hvSa42KAXq6WiroCRHkiQ8EEpe2AkmQfum9vceo42EeiGQ",
  "key36": "3HEc9rsk7aCoeszSejJF4j4ac9n8gp9F4xfu2ck8V1krHgXkekVSQ1ZeRMixmyroeZjzD5VDL7X7gvJa6qp6SscA",
  "key37": "5zawDQz9qpnJrsfTBzZbUEFCNZX7T33osDs9frSjhAKoRH2SFKsEpxeJzyrPdaSXte73ZvoUU3vveNb5gB4C9uKe",
  "key38": "2PSBwUDubGBdnAdbyC1XMh6eAMe9wPSEHjyhbkLKyQPrf3Z9cuyvS6n4UJEtXbUtvDa9iTC8eggG7eToLJzYXC1D",
  "key39": "2sS4jW1X5HkXmnvPgU84Zm5jKfTKYqReUtHcHrUPNRP6VV92rbVWGifDzByPWBtswio1zfrTf8uLhSMs3dXzkt5x",
  "key40": "3cJMRqRjCCaXmjT83AJ54TXUjcexs2Atw6DggBkTTFV3yYkpMny8EEuiV4Xu2zZC1j6r1e5JxcZAhLstGmp3Cjqq",
  "key41": "5tB1BSFymcagJHg8Bv5ZUmPykCfb57NkL8vsi7crCum7QjscfRYAAuerrhLEtGpc6PS5hwuL3XiAddMfGAyuzoXT",
  "key42": "2ua1w36A3XJBWYx8Ea9oyEyYSTBqQ8qnH1JitxfiAbYUbHMNN5nZjDs317xxKC4cYoRJE134C3BKwWmFcYMggZs6",
  "key43": "qQZgJFvteud74z1Bh2X2GFpEHFWByzxz7g3K9N7Bym4RgeCmaUNQiZaJA2Xghw21sntm87h9LPifNoaT7BNHge3"
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
