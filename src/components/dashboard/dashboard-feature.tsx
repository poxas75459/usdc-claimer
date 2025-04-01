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
    "58mk8jeUBvaNt9q9abVy5k9dSFEFC73HtqZNjrxhTBqwGPD4tLygLSZYgdBoRkiHX7UCk9chr3NvfG3fuELGwvAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gqRM1SvwrmXzhYU4K8JZR37Lpf4HSdn2Uo8hyS4CxF4Xu39QnF91vxgpsUq2eCXYg8JWAthhqo5bUU8QBPe9og5",
  "key1": "63qQqjFPSV4o4nvMhDoHseTULKjkNWysFi5BctgXMFz7gBY8zgLjS56FJYd6sipQMQntQtgh3VfQaXmjd72JiPb7",
  "key2": "5h25oQtSXjnBLh9BZaZtDJ9r8d9jRpc8hAbjHMbVrGZKdARjF17SpcbnBhhxdgEx8Tde6x7GukSxQywtnzsNQMCb",
  "key3": "5TdEgDkczizKkXY1F1qAj2uAtekJDiFTW79pr7Fv7NmZBZvr1etAdBALuNrRRaY68dm4e3j3sM1PeYf2vkXzdC5e",
  "key4": "JGrDBkT3roZPedNginoyxpxBVA1kGuoR9Fbj4ZpJxZpvLSZiAgfUmD1NQDmJMCzpzuXFzMXXXtysUN7xxmz13wA",
  "key5": "3MBcQyo3U1PAZR1WJAcNHsMRFi6eWB8gcZMqhgTrXs9sJsNTDGSz8Jwfu76t7PuAUBxXLCiqUMpk2HRqMdSYbNRm",
  "key6": "NR39TQzQUESVSrVRW1McrzZvxuR8Ri5DSWHhFLoheyvVovu5DegfXTdnNEix6PqQSMDfL8mybLTGzQLH3QQTgyf",
  "key7": "L6puyNJN7kkpAKPPeid4wAumedC3AnKtCXHJQMK3idRFi7ZcQs4PSctDXC7Psw4CqJDRHwBYM2uQ2EcYLDNS979",
  "key8": "8ofHQsnQbEYHBF5mCroxpbYnf4h1vHfMW9tstMELYPfcBqduNbYX2pvNUjSp2uUwisREXJtEXxrznt1aH85sAWL",
  "key9": "229eva5VUpcDgq3RTVRYTQPuRMjnrUyKj2mKwnxnwFJpMVd8R1ca24YMWWK889dtRfhfgVKvDzWTCKuP6ELG9Ygk",
  "key10": "267AVip7LraKGMy4MhKAJP4VVhHiNF3KRj6YzjGGoGXqWga72etyNGkjCbX1DmwEGmWEBvMMykunLNVdfD7y8V8r",
  "key11": "43beP4h5jR2cZHmFLNuDTyCeFNY3JmkrCH8qbmDCF5AUgMnqEE4WxoAax2Ro6TrGvYAnENytdq1sSbnHn2sUNWjf",
  "key12": "rPsYhzy8UssgaAtfGs82akebf6dEHhqbqhGvJidAB2AiEptjdN8s22RLdKfsv1hEPQTzssEvQqB5xuHtCQGzhG6",
  "key13": "4rKpLrpmALZz7xqFpQnCJFNiDYRFQZrkXkaWdDr7qjmsxCqCpiNtgcK3LFgJTQZx5qH8pcd9V4pv94RStkLb6J6d",
  "key14": "XRkqCz4DYQpZJuXscnNZ4bhKh8P36EgSYM7pwTHaTXZuynY5M3F1KYVT6VhefsDAgde2H65nMtCxPHe8LyFpamk",
  "key15": "aioRUkHvy46nqaeNZ6LSsEjL8rFgVPi6RJuWLrnEgGJJpFbfQvDjyuz85Ygw4KdYZpZjzo2RUSnM2hKymn31CLs",
  "key16": "3dXo9vU1UsHVE99vWRHxZ1woDqHXY773ZsNGsZpThsZGdbEajhUurMdvv1ko7rgtfAh2tWoxwzuSfnXnbRB2RaRD",
  "key17": "5Bd2jGyG6oYyrGJaGpuq3UiXdzdLHwSTdTtN3Ho2jZykmzrzn2oHyscNB25QX3xBxd3ZgZd4RCQHrbYeCXy51dik",
  "key18": "CYnhM7oZmitanDTfrzKibHqpTgTZCiAgzo4zr1n5wbdqhWHDGVppA1ZrypQGjZ7UiuU3BZUFJbzzhwRsKEXXBpV",
  "key19": "66cZZRge8mdy7SY4e1imDvNJ6hLz1gznhDH89YQpu3XamKLtCJvYzkWXMyRAtF9QZ6o5DbhEyKfTqfbixPtet7uu",
  "key20": "2W2fedGTL2tzyAc2QvBXseuRwhtk2iy9cbgiZxzbbiWaGjMjCowHrPykzb43aDxyAaXvCNxgeEuhFHBzYwi6KG6a",
  "key21": "5AwpTt2nXrEcDkW4UrGyHdEC77bf8hAqiCMXKBJaVYnN9oJZ6FQf29qVJ22AUsqwDgZEAjEa5b3MugideSCL4Shg",
  "key22": "5RA6UKzGFRWaRaFAfetpLDRcwuk2qLBjpTbjKUMyRZHf1RiEtkEUHqW4AGU3U1VjAQH2y79a4u5LeFPDBPExqR8B",
  "key23": "55KHZhHDRAoGCudkpUAR9Giwx9kUPJtVQAGizDxdMufXhwYRFgkMWKDprp3EdDkCoQyv6Y38YFUYukQhZxrzdesC",
  "key24": "3De7GEiioWP7FwzUtdWcEuwiSgfebkNHEXmQgFGw2a3m35e4Tg2UchvF3eosyuvpNDdzVh1VhewNvsFtJTX1tWhs",
  "key25": "3FcZ9hodHFH54vK4KBYDk2AbTQpHwyNsRG7UMyJM29uxMKoxk4sANrcuRjso6XE8vmSqQBRYRyosmsHHwBXwh2NH",
  "key26": "3973Ahyx2ZnHQmD2JtrNwHsUduia1FdZg8cqnbyzPAiqAkAPFBmBmHXqUodLP6CDLtQLyzhQTQ1fRKVtLLqqqUFY",
  "key27": "3x1jfgrcztySuqPS2DFDEJwAM5siXJS6q6K5mJos47xhqhJs8iRPAWk9iHZPNRUVz3CQXG57Yj9ReyzXS6d13JEz",
  "key28": "5863XrjmbyM9zm6kMF67M5poj1djNZn3V5KsafUUt336CV53xrSJ8AdVsMjCe6QVTgaMtWwSu43MFzhDjvht2Yc3",
  "key29": "BBQUhvn5YUGLCF8NJm7mfTpFkpLf7Mzd9z2dAtEXaEw5KgXYZPzLEufxDT8Wwa1Y4pa6jbkSybypegGzm9uhkZJ",
  "key30": "2xQ2wxVccBdX5C6myxSuidT53aRfkFoHQ5Lfhcq9fJmpKHRjXjQ5T6ntoJ8eP3fcP85TMnruqc3CGW1gi7rfy6Aa",
  "key31": "5Ezqya88fmjJ22VttTiCBQvQLDmUEdZ4MCwux2ZYTkzWLfPbsARzixinExhVmZpJYHYHrUSGi6yknzDe2jiDo9oe",
  "key32": "2Ze21qdFs8HkKqN3igGay9FthR8pN487Dsiy39rcndTNssfgXtCiiiuYmHcDRQc3AHXTBqgAEaCtJSAjo1U2WMG3",
  "key33": "t8QjGASickn21KMqAhmbT6i9qEgZJfgBg5vRP8gq3ZnadPoiWNyU2gpyNibDYSdmGx5BbQU1JA3oQy2SuEh8UBX",
  "key34": "4dLTSuXLBVAZor9Y8DQQr1GrCvdnZwh5cDAZ5trobzgPPztyqKpiHLkuE8GZhpRsN6NryfU8x3DpEDx6JLsoAEYx",
  "key35": "5pfngtH3mYLgaNbZHuV2zCjATwE3wJ85Cj6AHLrPuwhwqBfrzd3FESoQVN5hUCnp6iANMxcpKyp6KHzevvvrFGGb",
  "key36": "2o7UsTR7gsFW7rTne3k2jKoKCaNt73UXmRJKYF52sB1win7aZC2QrM89XTT8Gpbr9TEjseEKQ1TfgpJpuDyiQH6S",
  "key37": "3gngtwZEJXKFAEdyJXytewq7aVFo1PhepRaPiSAYzxWyf6C6KF6VX7RhTZFgqzCVHnTT4EYTVuiR2xzKCy1gnpkL",
  "key38": "5oyv5bWAXVixzeNWQtkDJfQPrkbrxss4oHbr6LvrmQHqr4FJDhjzJa5dy7jBnJKMUdT8tQNe82PTQFSiRPqEGbty",
  "key39": "JYrDj41C3FVBNWRfs9qPp61HKSZkgtjvjVTmNdMJRm4gpzqdgh8y5wLjJMkLhX6JiMPQa3i67pSVnHrGr4otf6P"
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
