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
    "3H8UMGymirNxmNeNpj5qzoLrVdSiVomQr8fxc8UhpxqhAKctvc5R6e5Fp2QGj5E53nrJ7HjHRzza5EcpRsTBp9GT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jrskmzXnuTfvFkvpTGaGxwWirTXbQoZnwc6LnVM6cwJAP92uqoHXyF8PUbWZ155g92ARd74EQKkDq7p6FsJsFuu",
  "key1": "PX5x4VY8XXg8bJ7N3RNE5URkmBBAiKg48U7T9QFv1saRwfZf5po6s8JCGnhfkf4ZYcNAUJGYaZ3uUcbhvfFbwjp",
  "key2": "7vFTdL9tZjuuS7iD6LWREdfbocqd78PSd2Sswxd2B3uvLh3P8GvK3sJCVBhruHdDQdgdPAdegrLzvB3LW6dzvtN",
  "key3": "2AkPsXH7qoXZJMs3TfykibvNUXw9m1VrzyymcU6e5g97FJkT6PAhxvnG8bcPXLq2auAnVwnDECwZTSVz9mYipnaG",
  "key4": "T4HowUr3GNmJoy96nRNgJwuBw3zgNUXYqN4KP6FT2zZF3qm12WCDYJXfffXh3tvNHqdqhE6QJA6o6CSWd4rgNuM",
  "key5": "3TVrLZC4wefxThpcp137GMCbLyYK6KeYQZUaJvQN21oCdaCRVVJ6gTPj8pTG7ZnrXV9c4oK7zYcxanhcxXPmpHWg",
  "key6": "3K1EhB3UwonbMWEns2Dm1LEHD1oHRGp8LKTamCJ13D1Xqy74qhTTnFuNKytxnAKnf6RjsphjZrpsvaNf4hKwS1n6",
  "key7": "47AwMGgsLAtje3gH4j9Zwx6HB8wdUsAb2dsdniwMioyiiz8NZqWVUW8N5E7AyC13MVtfWA5JHB27XaSU5ceqbi6Q",
  "key8": "3StJh21bXsnKiFiN2KyGfArYAoJ1oEcorf8be5XHP4KLm6tSizNbwZEvAgrx8k5Fj56ahUPxULjqyWu8RpkcgmNP",
  "key9": "5FapP13QFse5oHtoo3LVMxrEu6fKFsSzeEDboWSzW1mf5vda5WgzD3p1uqn4VGRmcyV486qLW337gUd64mYRUkzn",
  "key10": "3ykharvRgxN38bVkQGADDfUUG9p28DqtrDgmny5Aq8PgvhMo4AUa5n2Gy51CWU3FK3rfcAbN3tvc8dG47i3KBkhp",
  "key11": "5pf5RTYyWXpWNgos7swpo21s6pEMP3q33Z5eYSNvLDLAbh5TXssxK6mNVn8jaRcbx4YHY1omk8VUztW4swPMwwEJ",
  "key12": "4vZMkFffu2rEnYkXzsh1DB3sWT7bGZtDjbPgoMraVLcbELaR6DZ5HQNdjVqNnqL2B2HD5nxBPvVvg6o46Dey84Pj",
  "key13": "nemM4ZhiyJcUinvTJCToj98HxNKeHmDmrRB3QCGTf1AufZdtWo8JneBp5ukrxvZM6L9WqWDEHmCgXPXu3b81Wii",
  "key14": "5wVHcHxQGFi567P7DsjyWALdBYPnAetUwfhqzTHNQ2z1amdV9CGDfxewg14fdLfSViSY6qD2TYmwnBEf3NbpBFF6",
  "key15": "sf4UEWRRZdNMjteWxkqpdkJ3H3n3qD859278dv2y3WGJsRNjchJaxftNc7FpwhdP5zQ5bJzAnxDWXWfTNoJM43a",
  "key16": "2mTFYbQi3ScMYhVGGMgZCJgdimsHHusuCf3nadsy2xqftEKdfzegEum1XPe1xx1RAQZZK5cfhTdWbAmCjnwwRR8p",
  "key17": "2kCRfvXbB4Vy3G5yqyLPtoKnxMw3hqw5c9CuxfC3Wr5RFQ37xo4nHpVE4GsWui6uuczfCbFx6f1D5Zf246NRPjDr",
  "key18": "4c1WSdoJsqQc2KgnNCNzwxi17BMHrC83cpzSWWUZLQe9QppKrvDiCGEmw5AzWWW7AefSKwtBv477pnmjznpCfgfd",
  "key19": "3iRh75iMB8KrYZHraYxANhiQJnbRZuJJzfqn498zDDBdBsNQ2C9YZbwaG6dYfaLJ8pv8LJXdmBSAeNjbWRFoiNrr",
  "key20": "4uEer8gVaPqKmKX2L1hzE72Rg5ApyKPUZoUxdiPpq3JrNyL3Kk1c9NzZojRpaUVs3hzJw8y9KizEDz3kXAKvKWHA",
  "key21": "3VPqUubDwyAPdNiiwLsPj7TgANg5utq2894QtkeWX2V9gNCqf9tmrui1fQehBuE6KFoy9D9STtyDwUNyUbvA4SWT",
  "key22": "4dWDgrt3BLFt2ZUgRTBfLKAdHXsAvyU3NG7gnYrYBvcEBbRkmc32tKLpzREgkNDjcCP6Rd8SV8UC9G6FKVpygtjf",
  "key23": "3GV4n4xEEwpKt59jt1vPK5kXoK3wFNHM63ZC1E8tEJ8YytQFxnqq6NM79jajSLpw9sxL19yJFwJf2e8Rw3ZXpG2z",
  "key24": "3GaDECrQfuVEAATMS4oWAnWuVxo3GK1Mykd1m5ihzjUgMHWZQ1w4yG97SoV5UJjfWZhonLTBmc6di8jAnyGoYfdP",
  "key25": "2PNWTGiEhUoHQ1hwyUcABwQSQoHyaFT7Yw311CgxEiRf7sVmTEwDcH2TFQRiVLR1ssrSDpBcFz1t7uCC4yHyCp5X",
  "key26": "2cqSmNv9AGBvYt9YEN3AEKA9PTACYcSdJeHJPDajyeJpssu7u62epG5aicPviA31YTXiEtEP3dBFB2jnT3o2W5vc",
  "key27": "3o5vZJGsJTyvxcgTB4fkUkoGdMQ3GnEtXQSNemEsNjB6axVbvkQu1ixqsX2jPB1a5C6A8Hu9zKU6kxdybBojLFMm",
  "key28": "4uTUA9tHcCCBjoyPnQn734xWKjL6EUDaQbLP5BsKeNtk8FsW1TBHtnyx3Joxxjp8xr5jyKCbKkw8hkfkXsb7eJCZ",
  "key29": "2NdgkWvyeSvHSm6ZmSQnzvoPQ3vy8Z7J28f2o7GxVH9fhTsgfonUuen7CMyiYntFjmarQLzEddz83wFDm33fWUPB",
  "key30": "7ampDgTBNacSmVJ32J662Q31CZoJKxDWxPRQ4njiZEgfxyVkcNMWaD44F48ua6YpPk7G7PQXx3NVqTqyJeqNsSS",
  "key31": "21U8tH3p17KvqC6UVYngGDLfB6Gy8f57v5AvyA5xW7Z2eid7TGsQJvkojt3a9s5JfDhP5MVcfp87t9MFMcyg6EqQ",
  "key32": "38RGuUndGyjXRpii8bVEqF4UwCN8nh3Q6ep73V4rh3pZVkKGPFqrzDxKTNombv7bzWxmCcqCJZhfkYZT2UFaWmVY",
  "key33": "22zpiqdXvj3yXVtsf5vBfhRtZ9BrXan3M98vW6bk4zX9yBUxEZTpB4QMth1o99haaVjxLFLxX44gjVBLncpdH66c",
  "key34": "5eniUtHV8ZaJZdV9DaxKCxdYVVLYiNYtEHaRXYD2gbXnNpNwkgdc5K7oxnXaaJKrAqMbGhSJSYjQmYeNSLd36vPx",
  "key35": "4WUsqpoA2KDSM5NrXvBedaWQ9U5iJRdkZM3McbLFwc5RooVHCrMAB7TktdyVB2j6r4xv1Zokguotai1mdsEMHBPJ",
  "key36": "2bY619JDRu6TGjHwEZwWxxQe9UVDsV9yRahykrCCAyJ1EZxieZB3y6xq4ukXmbZs2iLBKdLej5BHNbXsWw7Fof2M",
  "key37": "38RAF3JFwWHVK9Ts2A7HrVyYc1sHXdbb1g1ZWbeHkjQzWNMJFTLUjfKzwisyeHR2UQ3sFtUkGhrKYth9vnpZWJMV",
  "key38": "2ibwiRtWb7ZydcE47EkJ8RXvdTNwc39eArCmGLkiRrFMZmFAU21GEZPoRaoy2uGfetyMYjTicm1oakJ3bQjVPkBm",
  "key39": "2981d8kvYatP6qTQ5KjRQZmGoKv39TLnTWVzswz1w694V6dpGMY3iFw2K8aeYC5tokCZaxKuov9BMNykZngnZzvP",
  "key40": "5SnWu5j7Pik6ci1pgudZnhB7wkdysmg9RnhyWU7Zwrzh71Cu5CN5tTK9zWgfKfB4QXfBZPz2DBXNmpKXqNqjtjsM",
  "key41": "4i8W39QxBubLGgu6g6Fg85hjzfNK7emga4eU4eXmTZEE1tm5jWp3HC3L9PAQVSN2P5Q2xwdnigFNByadJTkhiyVp",
  "key42": "4CjqyYBcT9JHW4mJcFV5KEJazCv7Kr7seXGFaJDCeHzy7UjHVnZWomj5wszo8FqYugV2ysyVJ9BaVnwQEegyaUkP",
  "key43": "9TbyETmiagSnhhxV6jrbfZ8edeyaGkHrA8K5piYXuCCh8TT2PgNiFKx2MQUvF8siJAcF3V1siydaA66BzwHhYqC",
  "key44": "2EE6Cq9isGjuG61VPXXzxARVZCX5rJUDv2djWLDJQ7w1hhag3b14D3ji3WHUkUaHNiFZATqHenNLdo3Q8wS2Nov",
  "key45": "4Wy3CpdfKG4KDaVWpr6Nk1fiDUu5cVEDYsxkAjGipUVGmECjSdft6Lg1he1hpn7CJB6VBBbmYLm4CtYdy2GVMJYD"
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
