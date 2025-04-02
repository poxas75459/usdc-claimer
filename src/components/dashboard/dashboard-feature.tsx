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
    "45EVcHHtUsk6CJ1AEnprU7qQjK1SnrQSdyEi7m9ho8m7669wH8CM9kbtH2XJ3EPxNYkurxHiStBP5kV15Di2dZ2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k3NjfsfPvY6JQyETTGhWcLByc2Xm7RQ4vTrek9E5bKQVBjxtZG7je9odxKGmkLBaCev8Hz2wuaf6msbuzggMjUs",
  "key1": "cWjKT8vgiYEtAG93TLQ4MCmizeUCw8JSGwrJMYkddKrAEP8detApUDosbHBGSszp1eDN7WvdkgACwMEfhzkT4Ef",
  "key2": "23S8Tdrpii4SZG8rak3YsmsNzPjHt85ekSga2Db3YuvVaAViNAXFAgd2RTVfFvypFyCauvGEFeYy7KGakDDjzQz3",
  "key3": "4AC69HKjrnemT1SmLeV4ow6729ojCmH6L1fw2o541UhAhD7mTJnvSTxRbM7ATi3LzZr97piccr2BbEbpkGUz6YL",
  "key4": "3G7SzdDs989DUCgsc2XX2S1sqjXzyFFuQidL8144NjN1iL4q6aZHhLZJbF8tyniB4pQNsLrq8LKHeK6ZcaSmSpde",
  "key5": "44nWBS7tF6HPF2s9MwJU7Cs1CKPzHTUVhaRV8adFwC4GtoMxhUs8fLLiVrLfrse81G81PTzQWgcp1BxZZQpp6tdx",
  "key6": "53GdP2ha1xtqZ3EowHX1XmStqLyrC8Fs5ZEc5gcyH3ydjbWVHYq9t3YFna9xUDkPicb4EDSnd2Z1Q6kaNHsYmgxF",
  "key7": "2aPa4v5xJp2uM8Z6mekiMjMX3Q9XrhFZGpnbDF8Z6EnCd17EPXzYro9rqGhmUrJ2xwe1sTrxUtx3KNLKKywsyuDq",
  "key8": "24LbocZsYqmeZVWYVhUrdXQ2NyFM3y8wZ28WyR3eByj9e6K3DL6VjVNVVXwMQXxC5KqrVeVbVduYzn12V3i1LoEt",
  "key9": "5gUFBj4fqJL7MQ1SBcNaRw92VoDSTmSTYuMtGezb36kmezfW1ysR5cedTDB3i31oFPWcgMv6HQ5CGzxrrpBmKqQo",
  "key10": "37s7tiedXboPTiyYZTZzwGGCAxbuNtM6UdsJo9T1qSpoYheXhdNWpzDbAaPEtMNQ7mUiaRVC3ABXiurcT5wvvigh",
  "key11": "5fg9bn4EpLbFpktphB2grGsGgjojBjoC2aaPqPd619houhZEV5wphKCbnJeB71HUunYrqwvLzBnfnS1oXG45DxkK",
  "key12": "3pvXwXkzbekkNBZJjzGYBivxs8AraKEuecjG7jvtaurzhL5jvMe2jPWhP6hk2nw9f9SquTS2q9QLaZTJGqavykgJ",
  "key13": "4KMoWBSdPJRZMTdMqdyppBwzSs1cFDVpyD63dv2j4aVidWz1UwVLbCWrrwGmaGfVaKoPwkmndRNCnL6T6SgYSLJc",
  "key14": "5AGseTenKsimKGcE5oa9Q6NqQYrLx1eoccTXJBU8EA26rkPUBECSAKAgQbB43ohGAcjQ3rePaehSsxTDEkyNf81z",
  "key15": "zaK9oZudJWWakeug7X3CRfVwpU7MFuNb8bFmZEjTt2uCgP8G6oN3coo83tsyMN4w8mty8MQwAhxnAcJX9qHwVZu",
  "key16": "5ED5SySyk2mhiQA4ndeGSsB6dTLmTcMwH2KY81kf8HGSux6Mg8GHG9usvFMuG9FskVhwb5BgEeiL7RHYsrSDsq9G",
  "key17": "3Drvk1YwZbxR5qBKE2jtJAQz3Qsubg9FXSyNQioivhRibcobGWiuw3QWFxNvzmAZY6Wg7t6YKDf5uHoPRUwWmbdq",
  "key18": "kQYa2q3Joe5J54Xx1uH2iBAQKgM3nS85E9x6z5XUMpYLeQ9sifX4uPgymTFrXxN8uHZ68R4xvrfXEDfh8essF3o",
  "key19": "4EMGjk6n6aZAuNW5uykxH6jb44D7crPoPR9gmJNLgY5F7VZfSdAoQyfgeDAaCd34yBFYbP4gfcdvKSDYJSTQDieY",
  "key20": "4bUVcMUB2pYiA3nLR7ghdGYuyqN14ZoD7o9vTXKzx4m4Qdt2irBe7hqLs6qk1pzTeG5Qkd95FfkzwYYtGcKHcQh9",
  "key21": "5Dt71sEt9k1Pd9fBXDaMstT1ikKwWkkeayJhsxZ4EEi6dFdLkJ1fwRaVPGeK2BQh8oEknFZEZa5TYa9jkkg6bpoX",
  "key22": "2e5WqGWn3KhhYba4gNkPKbK33ET2mKx3QFURtGwmaeDm76w6eU4hmFdQezsQBVN42xjDopWcpcf4NiiLTB7ZqYx4",
  "key23": "2wP1J9LJ1RuXDGY2YS91W9yzakuXqwWW6vnkKSxaJyCu1QU7iyDQf299DZV9jET65SiRbSoA3GXqqEAGouq4MX7S",
  "key24": "4C5Nt3PKjPQ1hduwMYstzTxozgQKuEWbZXejuHVu6ggxAxrz2QEh2CSqV5JdcEYTFbbJ6h3wqa71k9yXqjoqVRKe",
  "key25": "5KnA6zP4NiL9h6mLN76sbTNYfgzy9WdbMJn1PXbHiVcfexGRNJa4vtcNJorB3AMZ49m6w8Tjokff1EkdCH321MQW",
  "key26": "5rvjeoCnhHpKGLeiPd118JsA3MTTNekpnrdGPE1znV3RBTFMGCLKt4DAJ6e3ZWNfdznuCP7C97pGEPxAD21p2f53",
  "key27": "5u2ike5AS2Da3zFnDrx45diJ5utnK7ApiSkd6ejbTpyRBZoNiHLyYpqDr5KTY2We7gDz6HBh7JdLpeihX64JM6KP",
  "key28": "4dqq8HG1pt4DnribhianWzC7jqrYkttThUCs829pbgBCVAKGp8Zx1hvunbhpSsBSK5P5taG8uB2GNxPHkuZdMf5h",
  "key29": "4coMfbMFgp9zJvmSiRyj1xRzLKt36Tm1RqmqEguXC6d7N8ABbCxgxYDemGA1Uae2R6dZx9w6ta2ukoTHKMz5yvfA"
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
