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
    "eBzLpZYHL5JEQ4vkc6xZ6wGu59oSpMftJqki77QvNQ4k566JGmbzjbxi71ZGbYQNZU746hkADgzAPeSMkviRdna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hvdcKpiuCGmMYBJPqYAg56taL5hmGMQuv9PXhmKTDgzmerpxfEUbfWx1jSH6fhKhp7CsGtCqe3eugxvMQTc6ZGb",
  "key1": "3xMk1a32qsmfyvECBvmeUrKX4LpirZgvaa55KbKMsaDph2XFa1sfFt3F11KWp5huzceEkuC8vCwfCNeu1RCcE2nw",
  "key2": "6o9TjZLTzxPiJ7RraGaHkaBHGM2GbGTEn3SaWJmZ3ubUhb5EJHS12nMUxFX7Xa22SV9zhoTH5odYY9JkfELYmg2",
  "key3": "1hSegwKw5Y8bvqsVdw1gtyECWj8QqomnamRB8AMwjRjRBsu4W6eoSzz94n9gMs9Jemgzy1qpqrubjcUApAMsvwD",
  "key4": "TA6RZY8J7MDsgHEn3fiWY6DrTk2z5o7bYjg68RhkJn4KFPnV6FQBTMeTvZvx7Rzssd1KixEN6zaWfSEiMaNJ8xH",
  "key5": "42yghXpijgfa753pX1jfcNwruv92CWTokJbzSdfe8pn9St3d3qJMsK7DfitFHQcnE6NKq9ZFfNMdYz4J68K5aqY5",
  "key6": "3FDz3zaKpvxMAsPtTy42uk65Zm3irRoTXBzMv3ae9Fj5vRCy826RGBX2PaxpCn9LW1RyQeHxUieZrAx89B1Zsf3B",
  "key7": "48dgKp6E4z2s1szJ3yLBwAkfotgjiBm8c68p84QhWgXVM655H78ngyEV6gq1cLz7P6dpGphbwWTyjDjFSPGSkJCX",
  "key8": "4PZCwikYZqNiwY8b74PR9QJ4kySv4pFPdb1QCgKYnQXqrD4PRz1HBbvhR1PdZaQjw8qXz2MSvhtg7eK96f7e3AiF",
  "key9": "4shs93pd1zw4uyqFwbqyqHULGZND47NShM9W92RLCrz5iBdS3M1Ys9MA39HxcNBhBY93VBb9pAcLDAa1EGGJNuyC",
  "key10": "5iw3oD3CtRGa3Wqi9MTDjMbh7JDxE1j8EQgNb2BQeKV7FAELpnPNwug1HStuXXdxY4UrnFsnbMB4k4UbPHdstyNx",
  "key11": "43XNatSu7pURhtZimkNyrKGVECjCEZszfUjgXUJZmDKfPJwt9Q19okCzkym373Vge7imwvhsevZXD1hpBKTFo9cu",
  "key12": "2z13ZcxTP86oEetjAxwuBuWzqDE79u8jqMbFThQ5gMCgsRJnGqkvSweaKhBeAsSVR18T3WBFUEhMrvJULnWQKA7h",
  "key13": "5twcjQSuFDeWcQZ5oh2mdm3jRNC3Et4htT5FY91KkipSV6J6u8t9NFify1vLPoTAJvoH6xc3TzfagoFb73JtWVts",
  "key14": "49FmxrBKWEoq1TmfsJ3EcNCBX8cfonCeaAgToVPL7KukEJQ3p3X6ctfi4R2tC2VYT8SAbXCFq5ier9pWKqjEsL4H",
  "key15": "4uUZRTAu2t3rRGMy9Vm7fgxGxKhMJj69KPFngQ1SyWa5d8oEbRhANN6YURyAb51yAy2sZcU3kpY12zH9n7rsd7SX",
  "key16": "531oe9HtPMKT5RdyniD3dSfu9iQCYQnJfbqXAChJrWr26DcpiYgzxh7KBiUS8yr7S7yt4fM9zQeo7jNzpBYQDFAM",
  "key17": "2s2xeF8KSmUj4rkR3aq59rbuzwB4LVVx4QpdbuAniJa3s8gaWem2q3xNrdfxinL7SZAm3qz3QjS7nk7AZnMZzeUJ",
  "key18": "SGcWq8K8wRQtZ4Q7WC7U6QZkzpr1LD2u5xLDzz6o3WdqKc8hSGETVeU8hyW5nAbUwD22g59TSvs6nvzRoHs4ok8",
  "key19": "a6KcxxczwbC1ayN7tp3DLSnUPSxFJNPhteqDKTqQQgHGhqHYTziumBY8KvApZjbYEgE5peuWpcQ9Ehj2mCLaZbr",
  "key20": "3RuFwGeoRAcEtP6YPBz8meYt83iVTobXPskN6fjnPu7S3mLyCzZG3RK87s4mzVBDyCDBouKsFhKxmQDqjDKJDWgc",
  "key21": "2ugnsuuAbzPuuGjdxji5Nqb7Ww4qJjLJvtho7yHzimkBCRhaR8Jm7N54JZ7WEKDom7mSeUPL3putAkxpjzohGPXh",
  "key22": "6mK5TzJMEAEZ6yLA5TmHhRWELmaPbfC5ihai8HxvgiKKMnD6ZTt9k8mHMg7Y9sZ6e7L585FMf3J33G5Q3pZMWiu",
  "key23": "5ZF4FSypL28oiDev17Wtr1Fcsav3DdtEQjwxg16UkN9Vowt4CaLhAgYErQmeHvgEXZs2zuZmUPaLPR9tSN2ygdA6",
  "key24": "Y94efZmfG3vuEdXgxv8VJyNc4RZhJzc5G831gHuhomTfQhMxu1K5ExsndMFi85aGPKHLo9QjMd1juZofeghFkoG"
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
