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
    "3AdJZfa2qY74KGFA2MwU5A4d625Uqg67fmtiTZfseTXFWCWzb9P1kbtQCXyapJfQxLtfHW3fhajH5aCtEXgDahTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zKQQNXNpp12MgBfP4ji3SVxPaA5dRw2Zhe8HmoiyVJ2JLG6AFpBNm3yfnj6NDMFTEKEXLe8guGSieXEDrnMkKmj",
  "key1": "4ks2YD75UcTRGfD9Tzeo1aLF7MVFb3z9gD9joyJrNnhssk2iZnE2Yx9zqDqMUfRMerxsDC3XM1fexk7Zhy5GNtwe",
  "key2": "22wcUVocAyTo641bnad9o7c3yKUUT9XaMobLaRuGgTkQWZESxxu6BbriFy6BptuaVV66w15LKwKror9wRAkrWBaF",
  "key3": "545RDhJj1WxZkFoAaqXNBZLVe7FXWVp3FGwuZ1bmP3KMtRQq5UyMccp678jKAjBxcaY7F2yp1rFNkT68sYF3vvRQ",
  "key4": "3QDEMhAfGCSm7oZY6iwV8oYMxTwyYNKLirdK4RgjhAhtPWuZ7dFFFyy8JGiP9M7qdD2ZDkQqqCnN1gpB4KCgGTWi",
  "key5": "5WKaEbpx2oBLsfCaWjUaYWWtdd15bKmDmviwDWsoKBmNATNoZvAPKwZRsEvdUMbdrHDEjMM1KLxEBtnXxcTbZhAZ",
  "key6": "4dtCMcyeXtJArkNvZHcPXditocqZArFwAb1bh8DQzNQDrHubjQTJKYApshYZybWBzB4W5h2BSgDZopT6aWACBmVz",
  "key7": "4gzwAJVWJheA5QsHYK7CdnMqRNvfNrPoAesHAiHwxojfQ9ccN4oxofiMD34vPkKbcUgcxwydRDVRNUXtJdpo139E",
  "key8": "czuunqgNmTEDymp6XK24DzEmoqdbZkSG4J6V9i5xGf6kouFQV7BPU8Jvt4mNB7TQAQKwxgJTfvvGVDeryPDxDA3",
  "key9": "4hzbHLBevRnWsyNeivD2Qhnwcs1C2wUe2zEHJhJSmYpV4wsQU7usD9FaKvbSyRM3mxAXEhnPKAU9mnyrmja6DG8U",
  "key10": "54XAgYhL58NbmvUsVum4pd6nUoRANnK3L9ZcTZ9zEFv4cyjANQM4vFdttYCBRZJWLjxw8YdbfVg5QZ2NF7LxnwoJ",
  "key11": "57ueFsqPChorNeL2wsjphYUjZKn9cGRU64tAdqR1cJxPCqYxsaDadvc48XyjB4GCqcnEekBY8Ln7mW7rVjDdLj4E",
  "key12": "4RGGN8ihcRapvhcXniFfPkydbEgTdvbcUvudC9Wxkiv62nKUcQJXj8fqUBxM9U8hL2sdWQ6XgRbK8jsDkgPwm5pX",
  "key13": "4tEEBTn1x2Bi35c4Xn4mTcpoRUh6EYEENDfQ3XMpeVNwmBPossrWEJbCgJNMTWrRB7pDBFtmszJt9RXtyTgnFKux",
  "key14": "4zY5iX6nKhjWTCH6h2Fs1jjfDEQv7PhUk527d6fXynaB5A2SKUbmUkJhL9YkM9hZQYmyNPc8BpXZZM4nNFemjGkX",
  "key15": "3713QEaXkU2TAZwdEKCgMuu87BgEF5s8ig2qJsjgeqxinBkpX9Tpa1WeQrMD1jjxGEPYfkXS91yJVPgfcmyuoMqt",
  "key16": "2tQvHD2MkQDqpRv7deeuaHL8dYRXp4zuihWWGes5zs6EjsW1nCfidRnRK5dqX6rYGQ9H83hbNadpY9D1GENyBuVg",
  "key17": "4mXBcRnX2RK4RcaFmNyMu4CTroGDkYB4Vt2Nv4QqT5L7nSt8rmYvhMWNKuGZtdjpgWmMN2Cn12un6uATHDuMG8pd",
  "key18": "4GwL2mYxRMDLrwCHSi6KjmfVHxn4LRuLU6HEgCPQZEr4HAfyhuuQUjU27atafLVYRYs77wZtqKtbM3zsWo3W6L4k",
  "key19": "2inhtP79zkuEgZEhTT4gNxAAaS4nEua8HRrwjFn69Q3ZuTuvByMKubPSag5qgPscTwUpEcUFXsUMY1eSesHofVUc",
  "key20": "KY2xpqDYV1rPLBprKd7VyQpWc6SfXcPgFpm2yEkPSM3EPm8F2uXgSPPcuGBkw5sFzptSP6wDcb4trZ9v8rAGYAz",
  "key21": "xC7i8ZisbHMPv7wPLU1FWhBpTm6Mq5TAniBuL6CfCHxSNtwB71KmCymr1nq1die4AZfnyJLsjzHCy7ohZThg5yh",
  "key22": "3GaqM3V5aRKiAaFnAhekPmK7tafcJEMKCMQZWSsx3giwPEqdfBSbTz2GeZyLJ8oToUeNQKz6A6rNF9EWu2z5KyB5",
  "key23": "cSVCqT2Ux7AQirReW2p9V2aCSNFrNCSNMYT2oyFbj5d7ozuZU8rSqtRhXB5iiTGPGRzogeuJngVULALJNF9TsGW",
  "key24": "5odiiLjqJFiadaDnD5t6for2qaPJFhoNMy7Dhzbu8KixHukfv4RMKtQqsEcG6ua9cDtJY82bQDuMscu1cazAQP2K",
  "key25": "361j6b31jnHTYPgCrCagDopNiZsetojWYKoi9x7Kg4BmQeU9doZ4QxRZ8UKz2H1HxefgWqd6qknxp4ise8L9Jjrq",
  "key26": "2A5hdGFhP73uUcfVSK9qh5DHv7rbV41qkHMGpfkWNgmxu7iVAfcLiZzJ6FwFM8W22fh9iRdk1aNmTHZEDyTi9bix",
  "key27": "3jmDKUXQnQD6Q6LKoZKqcAoZf9kDHN16JE2Mn34EEtDTPmAvmgAq3K6kTbRUZS4LDicrcCWP1Tre46gP1dSMBTQj"
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
