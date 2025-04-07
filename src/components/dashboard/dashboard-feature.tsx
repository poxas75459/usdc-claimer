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
    "5hm3EBcGPMu6HrhzV22qzW4UrXs1i9UJ6Ckvn2jN82e4e3VYVgX4wwjwTGiHY1UZwDY18TTuQhVghWssKcV9cGav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w7P9PZ1UHgqWEmAqXStj7ECEBHcJvyRKZdA6yugoThX4j6PehiBfLe73vVMJrrq6aXERtTxjHQ6pPLcUtMVXfGr",
  "key1": "5hZm7Swch88nrBJvjftGPWdDhUqms5Q9B26muaABW56n3tUGBAdxm3NtkJ25yukxTeD4CT6h4MCKGtbaVLw9y6cp",
  "key2": "3PsiTvWDK8NosxcDDPQSsTTSyN41MKjh7sqvnxWZxMgXE7FnX3q8o4UZXHe2kkyVzHt34sCDHakwAUMTzBQkxGtW",
  "key3": "3ntPx2QJ1jKxoyYyVuXbxEdWmC8GfRNQp1NDWW4kuuMLCPqBkS9dDtcXhQXNhVBaGQ8W968BKkAtbeZmrwFVQMtV",
  "key4": "SHgEAWPN3sEGJpUz89jgq23twMTqC4V3WrW4fFX39AN1wKX4cKrWwNHDS8hv7A7gxou5mSudv8iQxxbzAPfoqa6",
  "key5": "6AjX6c3iimaEjyvJZVQMhAgxqH6ZeLfUMHhdx2E5Nm1Pwxisjr38CHg8HHik2sevFph5XkXuigzGXySRXv6MgNa",
  "key6": "41PmpRtPeXHqMNiSZseNfic5kmQHY7pvF7rchzcfvU7qhhBJDtkCEZt7r9Gm8x73j1rvxt8Bo1J7WJNeoxbspHiY",
  "key7": "5vi1qXEsQz33iWjbyzTsUWKR8iYnDX8Ju5gigGAioPoJJH6LZZWEa8hbcUpC8WhHUvsPgxuqoWti3JqfQBvtdVDQ",
  "key8": "snvxLkziekawdPMkFtzzqLNJ3nRKKnvbf7LuKJndy1AypTzEoECig68LrT8sKxE58NwGMLLdCgPn6GuBUtqWxJV",
  "key9": "5V9pGpxTVvU2LuYUhRN2SWsdNoaEGKRZQdCHU2UaLuugnzmaFVLXiDwdZcBrJvw9ieNRpaJ7bfryKvZKRyqw2oY1",
  "key10": "wxdP9MJ4VP8pTFFs9VhrUtdzpXFxZMWSgQF4qY5YWXZtKeuZ7iBQShuAk9XYdoJJMu4fwYwbCNCtCG8NYup6wvR",
  "key11": "284rauUzgM8FaXickEQyHPNiwKESKW1iofXyTfF8tc5VVW6ydHBxhHJfhv7rw8XoqawJguvnACJRu8U4y3oweiWr",
  "key12": "58vurpQ7GGXjHaKuHjqT5RTYbuTpgQNJMzZgsGCf8sV58HB3yRPYvF26CAgC43WnXYeaTvMXk4v9wk34MT3Mdcv3",
  "key13": "3SX96iWZ4pVmaPeYaNUCC8kyLDCKJWC9hj8XLU7kqZkxAvGdcQJepjPzDRKcmJh6HWuWRtjWpP4sMwP2gQcNNDgk",
  "key14": "G7MEx6u4V7QUxxg5zejL5t7BrFVH588oNcAWmwnx4jYyg6RLcUgVw26koEyKug9FZshkQrRMiqRSRNz51oD9U9T",
  "key15": "2vv1HQE1GHR9NNoZjVaWmhZ9RDq8QnaMfit3wyo8cgbR8KtmqsPGipnvwyS8aRfrYDsjEH6SU9bnpoggmBp9fnat",
  "key16": "2ectYusem7HxAQi2nhxx6AqFhUZY6w3AfMNqaxUTu9GpJP6vpk5zqCBfqoCXm3ToqfYVhwsMSQofcNPKMDfFLJgS",
  "key17": "3KQGxsEsrGtqo5C6JUexYmLbEqSQtQNCwuhdhjaiyx825Zy8e3Kqze3fBmDDKsCxNEFGo2p3yvb66qyhEC6tehCb",
  "key18": "5AUy8RFuua4qou36p5bHFq3f1JzqU53MX2RXYGDKfyd24W1aJqcr4fL42YiHbsriZvSJmWqxE5dZAm4uCxBcXDQ5",
  "key19": "MzhsCTTBeEiaLz2NbaMPjN9AJ7qZov9ic1TPuBR2pixPVT6qn5fj5N59Umit8SUzQkLi4HQsPXzwnkHTxRrju3t",
  "key20": "4CH5h3UaS9jJo2zFZzcwYKytkidmK2auYQiC7xNWPpaozosjWZzmnDU6XvkLWLgynpZm4sfPJ2TW4RLFC19ST3P6",
  "key21": "3aDU6m17m59PqAHoguVBJ4iiF92TNF2FhdNpWbgUnD2Mr1b1PqaFecVSLA66ExRH1PRYVSss5P6NTm7QWBQ3ykSw",
  "key22": "GSYPKkEE6N2JsEaahuUuEMJyj8HqxEhkShVfY1EBVLdCPtL8ci8np9QWfQKwsEM8oRpSnAP2PD36vHuwSeTCuT6",
  "key23": "tUSYmxDa4Ctxh2obch7z9UWq8X92rQXCZoaWuD4FFKVPEUtz3MKdBEALpZahY8JUjbEHCKwzzypnwfw1o8peUuZ",
  "key24": "JM1umVXDmuBqLdmcdzytRE383S4RWcRQQHv8p83hArvDQhhifKJ3HogrYjFhMiYAvbtjbgwMjPwu8RuszD7hr7h",
  "key25": "3nRVQbyTYD5EMYXZDvMbd6D3BpzPSDHVmJe9LMgxfNCQUhUkFM1CrhMYADpfEXjVG7A4swC1ZcYQ1P4nhwdCK4A",
  "key26": "5F9Cdxi3r2VET3JVcNS6ZUndR35aprMfj2P71BD659HomMzN39Dt3z1oVmu9QWWBoFnpMNtA8n3kyX3EHVPcQV3C",
  "key27": "2NEVhHoh1z7A6ffYwXad5bxWRcPZnZdcfQMKSu4ZxeMj8FNWK8PograNvJKCeG1wiwXJbBJ9vkFMyVuQKVd66g9q",
  "key28": "2AWec4etMThLGNYrSeDjtdXmYUbx2VAXDB7qGh7DYUKGDgSVuL78tCDE4u9p9rDw5EFMLLUB5xp4CAP6fkou5KYo",
  "key29": "3pfsto1igvZWfJakEzc37JvBZcpM217T5ncTymuTRTecSCKAqpndX3PeJsCW3KehHrgAaf2hnDuz7ay1JMu2r1E9",
  "key30": "2u1h2B7UHmkSBajxuDJddKzCLCcQM2fqdYD6snnvUxcL7Es7F6PF6CNUhRgX7JtSzpWAFq2xheQMuHpsWsyHYKPW",
  "key31": "5h6ZLBKezcuwGtfVmdMLQJhQXCAfgUYq5ehmCnzxp67VeUEKkDk6ZJY6FFnmu1qmKwvdYhy9zmBDeBvLthuEFxJR",
  "key32": "3KWFN1aAoe6e8Cao5SLtgTLaYg9AHpJ4Tpd5QmZgEFE9mGCwnJL7WAxD8xnu5yrfUpRFWbWUJrkn18aQL966g44K",
  "key33": "BaKZcE9DsJDozkLuq8bMJcub1pHWgYezurfTNWsDMjQWkLqPKCkur95DTNMM5VURPFq2jHD93URvA25UmhJxGjj",
  "key34": "6vkcJDwhXfpUZXq7kujRgbnBK6SBybufuDZNFURAr4fWtEC3Fz6pDGcqNREKWUWuZnQvvhKTX9A5aZwEgLFddDK",
  "key35": "iLKGkNRU8m6Ns8hJy8B1UyYBzTESFBjiSBaocppckj1JbgCv4CM4HAC9rZJHAjGwYouVYRVfyFctfMSeT9Z4Q1E"
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
