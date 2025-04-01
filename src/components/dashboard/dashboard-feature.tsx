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
    "448GmCZp77ygqe79NUig6RM2vCC3h4exfijP5Vh1rnBcEXKmYrtWQymAXxeEWijUeTPsknuWwDo3tvv49cjcgvhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RYoQBSuYoLgUmjQ46ice9MmTyvKwosK37K4YCn8jFhZ5fVygM9AsB6xefj7kaJ1at3it9HdMdC2XeXwPNbhmZ5r",
  "key1": "2ZAJcDaC1hE1mJH8YZJ3HsshjKYS2gfXVs2vZTnomdxgKPWTpX5dzfv4sM5w7BVzoYkW1jHXHkgCcnZAd55XESdK",
  "key2": "9eEvhdy3a1Now3MWUazEu2u3dxeVFDaSyqRK8PhDhJ4wJ9wtcLrRfmpWvWru7Q1REBma4ByHb1VSPU8EjfYUbF7",
  "key3": "64sFKLGq7KQ5UoiHE6Cuq1eJVyo1GZRrXvEtSAQxqcMF4MqorGrpn4f9uLE33uf7Wo5BB3i9xtNB5ZE7CYP3cu6h",
  "key4": "PbwgqxgrBX8KaFuQWzQmeAVBRP2qj4yRKnUmFgAEto8gEYgmfBr4qC8MvNiduAZS6nu86CRavDKebFcgagg56RH",
  "key5": "3TPTbY9iztWzyV3aFhxsS7K4zbNkEHZNfactci3kxVqHzTQECupH4aNrBVLD6gCxJzodHg4zwXFbz8upHbRoAvDy",
  "key6": "5nJV4ua54eb5ZfKnyFAuDcxS8YBBL3LfTr92UpZyWm3kANEmmCz6rdSjzBXXzL2hpQY9ayECx1NjVsCobLXP6MFY",
  "key7": "3tUq5PyzGi4rpeCipoFXYjxan2KgfB4RrD2uGtawMqgr6jzth2nfCZq3qqkRvTQivCp1rZiX6GmxKrJSL4bPW3A5",
  "key8": "t6UBTJ8hYfHhDUrftyoXMoPvCVtJqyjeu7oXdJRYiYqwb83577LyDEx6a1PQviryn6rQk6ScUa5u8yotv1f8hoa",
  "key9": "2FRS6hAxf8f2MuGwVdTBvPH6Ce6wEcuJ3dkyxptNTKXf9C1MKDYfG8nS4rDUBXTDoAQwo99WhZ7aME2RGcmjh3a7",
  "key10": "57bWNgSevWU9Fdcm4rz3gaBcz39mDJstvEuixZpLiLeLoV1Pw2jZ8xfJ1UvKRA4dSprKVuwF9asXvR1Mafwz9APD",
  "key11": "37NRPnkiELJ8SCWnmQysMMeQpBNUeZRPKGLYvuFoKAQA7ss8jM8FqjXBjQGt9WJjekXvxUWfakjR32iqbdBXaifW",
  "key12": "4n6tma6hrjzCgndWf5f6KRje6PmRfFmNNFLdQqqksM4eoWkhPSUhZvZoXjVBG7wEWtNUUbxfb8RE1LAqcJxb3ApF",
  "key13": "492h9EBkwhJUEhctsTLMQ5YFSLbqwszohVhM58NHJm7GefeHgYycs2wJQqDkxTvvFadijfMC5kRYEWBt2eHYawfj",
  "key14": "3wKhYX2P6UCzQHFRUgw1Xp55ckMSgkMcw9b7hyr3pKxBgirTW5bju3q5NpgKwZyARQ1hW4Ebg22ks4GZ25NEd7jC",
  "key15": "5oW25ZbpUVrFzDxCV9oRvoe3mn3pXoZyJuqXujgPoVWoJLnU4ke8zoB47DNSFxAZscAhjTmaZ5wMhZd3phMbYBmw",
  "key16": "43sMUCr1CAKNcoph653Lxi6WzPYhRHHDfi3UYrS2x2TC7C3caCjxcAtLSmKCQsbjPZt2qksxM7ifpKK4jScGCWMh",
  "key17": "nrzenXKyxYChXVdnVYvfnrLZyqSEe7QYQVPaAG5XKmgiZMBfbKpUv1k6VG5yTZSQWM9urU9GYjXphQHg4fxrEFy",
  "key18": "4fxEdXNiK6Z6mxaRdBs1szNAMqj4WpFwPDjBWJN9vuCJZZ1at18Ma7jgrGVgRkrnbQUD5CdPywXc3MjdqNPXVKWJ",
  "key19": "roQjqyrNNAPrcVebJ6Zv28ZpMj5DY6cV8iHKSXQzgTDDYSuxmnUnDEKpjTLSLaG59gLgS6RDrtRZ3htpetaV25b",
  "key20": "28rhqJzbzKtTYT91MuXZzjrncPWWu8d2peb8KBph6qeSZ6WjEQQGcMSuufq3Y1LQg9fYMQfzwyAtsqVZ9Jx51apU",
  "key21": "4bAQ2phrc837giiaue2X9nVc4q7ji2qZuuWY4mwtRHomFJhb49aLqfZ8cPSoxBD4PvEdARjjWV5pdQt4gwUWHjwS",
  "key22": "5F4276WQgH5oKCjXmeZFeybNnP9sDr256S91CU8fiZ6xqDJmJuZFgV6nvZdneU245xyNiGfoue1qFnPKiwH9rddu",
  "key23": "3gdK1HKePPLeac13qqtSDPZrdyawseJzhASLRFVAD3Kkgf7XSMuin1c6TWWGMdqNChA4mDZYLPA668dugopQVAUT",
  "key24": "4wcBQBMqbgtzgApAtrDs1LvdTNZcXw8Jwxq2Ehr1qwqHdTb7uaSHv9zmCogi8yG3rhMqhTUVKYR1AwTrgMmmD37n",
  "key25": "616hkGZnnbKiV4uie5ct63JY6Abi8xTzX82x6gXofFTunDwNak7irySM7c5wjkLmg8bqZWDdJfHSzoq9qN4uSmBr",
  "key26": "47fAYtrzS2Sin5pZcPeFePrYtH9LHzbdaNHTmyakfrWDnEBjGtzGxYSNxnB8qVpr7aqwhAUKohmmoZuUrz8Zm3vR",
  "key27": "4mj1qYzssM2YmwqqAEvydnDi8iRa7SuReoWUZ47sCFvCzkzJ4JzLd1apMCt44nnY454AZVGmRq6aEqu1JCot1hRm",
  "key28": "42n1ZRWaH1Tc8zSaCU6u7yibnN3moki1pqDQ3KyvgZNjQrTZybSK3DsxLjoJcXYHMbyMbC1hBtrD9qEyEvaN2iK9",
  "key29": "3ecD3r5AfG3yJLPDAvA54XH3sydjH91qbt4PwH9hqk4jPR5HN79KQfEVegMj62PvCtB8sMdNg4kBRHwHXZPWy4AE",
  "key30": "5PLgSYZ2HVa1cfGPNCa9LyRFfJzn6rzfqhGPBC77VL3JVk9kT2YqESUmeEKX2JL69rc6iuKLsrXKSSL99up3w5qF"
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
