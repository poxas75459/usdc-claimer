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
    "2xPHup5AMigrmjccZ6c3bygbqzr7cRLJqCEMCRwtGhpAyhFCx1xAc4RCQPpgm812wjeytCwJPEFhFzuPjGcShRGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UBozLa25vB7FYpLFRpqA9Q6KkuixV3NwX72AyEGMN2K9CAhaw4TVQa2c3ggQWcbQ5PyVYqgP9Y8igKdcCvJVohJ",
  "key1": "58PU7pjNwCvoURFTaHNmAYKqtQKMAYGJFPnhWz4xuhnC1cLucXXg7VbxhYbXQDBxvhmBuxGzW2hfsj4sB3yVJTK9",
  "key2": "2tw6jDVdzYWjpRKkuuTR2weYFWksv7AYg7RYnxhh7mjkNMvzMYfJoUGGEfhvDD7NYc2ttzVTsevLjjM3ns4HnisW",
  "key3": "4NzFZuDfWH2rytfQ5pNjN8moYLJ6eLC2dv6hU5fZnBscxVKbFKoPKCdU6swTg91XJkfxxTzoVkuuy4W2BmBVGjU5",
  "key4": "4R9KghFj47ZgKmSzo9a4mm72Kdyk2tskduGirrAxtv4PEpuJ64XLk9b2wUTostDiQoY14RyDWztozjkM3rcmcrww",
  "key5": "6ykXSUwp1nhiDagn2utGFWw9yC9rPN7yqFm5t6xXthDRsCYMefhUfvyRHoUEftEDcE78euo4KPp47fxDexdF8Mq",
  "key6": "3nbwPKDvuWvWoco5BhW68xeJGY5yLpqwzfMK9Jba46yjvMRQQqHgSJt7EWQP7UgvrdsjwtQosVeT3W8ftRQhKysM",
  "key7": "5gwsoLs7ZjMQWuWhwmCXZZWWUVYwz5eQnKKxHaDERPUWdvbde9N5ZMEEFCioWuc4FoRYv3XpYU9oAbv77FgNE3fu",
  "key8": "232sdDiDxzYjUR9NKbN5bXFoQoMhmuJMqx6QKKiuJWCVfsQ2epXco8CcgtLMAmp5BrifGNyAJSW7q3rBMJLigmX5",
  "key9": "2EdzpHHSWBoRQFZkSGVj9z7MBQXkhgKgzzvw45vCV8p4xcH1JJhCfqAHd9j6XgopK5Wsb9jzQaBBy6GULU9fJRZx",
  "key10": "4b4pMPsMUqYPaeQFUzzuYBDXKGYDrffYeNzBMoQf48gNTQZaWXhH8j1SQqBbfWYjMePRMsh2FNK1mCPr4K2WDjLC",
  "key11": "4UhYUZQ7vbjrkEEf7oVnTTuHr5rnKTd4hj7StADyXMuLSLtZymM7gDKP4nQLGAaPZqVFPK3YqZfPhBW2cF2VFYCs",
  "key12": "5MjduBH5cff3u7kpcddTfrstkD4LTvbH2jFmApYfMn71QH3Qd6TKwEbVpxs5ZU5jvCLPv3wigZfC4uUXv2j7zq7g",
  "key13": "5JUyn1EFL4zCqfwMRB4X4muACVYMFEu2Q2KtgeqDoPk1FbuycYyAisDPF9Xtr9DJo8LHD3eRSmWCQ1o4KzGFELku",
  "key14": "3m4e3327KBLmgdAQv4CkjCGra9pqqS7RjuhD5i1GEk1UzNoy48ureZe6QSQ5ztt28zEevZap8iurJsLLX4qrBZYj",
  "key15": "4XctD3U4YUzV3hb4ybDdL7GKhYu7xwaKRF4UUJj5nMqZux5ee4nrbSaqmch1nDrqivczwpYvDfMFWGSD4FHGnnNL",
  "key16": "4KZFszjJgZX9JXDYiGTiRtRKAnTvwnGHvfUdEuX4xhK8YDSQ7pUBGL1DVdRMwx2naaskmL71YYygJShpvXbBU62s",
  "key17": "4NYCfnVhdZJFEtepjWckSndmFYx5XkxMarKNJaUPS5CKiqGWmQCQUvstLW7N18ET5tviPzpEaXgBkpszkFKGd7oh",
  "key18": "4qH4anZrP9pMMXBQseq4AorkWFdoZvb9WeKjD2jMxAe9Wwe5Hq19BhLghzb2K2nZdCqanh144ahcsjS2GY1V1aPg",
  "key19": "2ANPxbCH815DfxcKh6WJgGw6iAyRooci2d7YbA2nc9EPq5bvuEAJP3mUYBPhSs9AAnFrJuobeK6STAif8RC5AB6S",
  "key20": "2S14QkF4DNyZaGGrchkkJ2ASFyxL4LUv5Sszx2y9DKTNHX3DKc3UCWbaeMZxthQ8TaMkmp2bDLybTidRJfMyhnfX",
  "key21": "4s7M5NdcGpHSfPMUKSoJSzdJa8RrkyzQBwuJgiSpVm2CzCACCSnzCCAWsnUZGwb5kASap3V85Ua1TckHJbUjwh8b",
  "key22": "5cy8oCY5e5tHmEGgtFQiq2zBKM4sfxEmsLYXVvCudp1ZeSsDnE5UzQVnYpc5AufjymZoPLJsmmWqHNgFgYS4qv1",
  "key23": "L7VDNJ4qDBfm9rxDpHhqfBWKQceJtZH1gyiF6ksvQMvs2WVM4fECsrz6raKJPfPj8nRMfbMA9iNKV9aqKum1GCd",
  "key24": "3FrwQyJs8YNYxc9HCTrb4KTFnDQgL7uHr9kVLRotN6yRc6s5TrqB1XYzWG1XdUfRvNsZc5uTjoLdg8WubmNkByQ3",
  "key25": "H3Tby5QjzwETUUMWEXUUdX3BsY1MnNBfLKvvY2DdD73KfLYZgH566WaCXujm11gue98EaWKfvPtH1yViUa9SXXd",
  "key26": "3dWoi4uyytGawuBvjAJLtTVynvm64gARn4EVMjyifuxwGKQSN3wUdcZBarWT96yNK6hiXBYhUqFAdZd37tk3PSJv",
  "key27": "5vGPwTwCW2wQi9MHuBrVisKtKnTtiULMgKYJwLRw4JytHeTdhDfRuNK2SZbwe4mXHGJ1LTbY3LbawNZRP91UaGLS",
  "key28": "3LJc5tBbchcPLm95eiFZAp8DaVeYiMnrcJVB7u7oE8qrzZPxXJR3biUrhXvMUMKZ8Ub1uo8WomjSux6b2GXVCTFd",
  "key29": "56NL6fFUnKzLmkxRKxYMwoe1VBPYXCna4LyL3q3518dBiiizfxGMrKRiSypnTcZjKRThQxvUkLrvVoTHUX3NVAuf",
  "key30": "3q7R1APJrJYeyKjY4iKgQGvw4zQv1sihWj6gnX6dbCfcQrwXLtnGX8oA81YZh8UqHHCPoqPncu4T2VmYAXPs7TTk",
  "key31": "Cik5PY777xbkRPqbWNFaCbqfZyfW7J4gjb64V9RoFi2FaYka9gyumCeofLdtX8joKN21gebvRQPFKSK4rzqBcnG",
  "key32": "27D6eStjfGwZzjiDRTqM6jZtQJhwTt8WrLJ7rSwyLguzAozKQppuG533pVo14fRFnPuNSHWG5NT7D8hwW47ZspPF",
  "key33": "5i5wb7ZqQyZ6PCFUzWYGdN7zSL4maa6J3WaCnDPta5R52qVCoBbDC9TmJTqp23LiGkH37zwo3Kn8venGN8uzmfMA",
  "key34": "52ge5vQkwGaopu7sur21pXkJqRFXGwhA9wSknm1tZwtDQPQABiAkVab7d2mBsvkmJVbu3JU9LkGRW3g6Jrmt3GVH",
  "key35": "2GBaQUoBoJKWPjubzEgyw3ZsaCj4NpTK7Zjvubw8pPjEGeLZwkg21QvKJUGtMfGW4C39R9rENJ1Gk4653dXvpqiu",
  "key36": "2NqoVhYL6eK9VrdRBmrjxyT6cR8gZAKofoqRP7bCLAtw514j4ZWP4iwhiMPPZkLgsYXNurjmv9UHeZFk41cgAary",
  "key37": "2ZvANhxsefaCiyeHgknNi6QzfttQSSfHqntqQ2sLPGr6E2e1MHY44rejxbUoSQ3Sa29wgLUqi5uKiFyZjZz4cXg2",
  "key38": "hr8jmiHhFjD7zBmrnwotN4DNkqY9162bSdZfZeWSa8KQtuWXwHJjgWcoDFW46yNmF41hPyJmUJReSkp85EDH9ZX",
  "key39": "3N7trNevbwdyiArg1FJ4MC8grGJkZZWVFxgzGsyWXTy6caWkyhnno6YdYGwgMFqD6iCgsbXc618WqoN7p6t9B9Vb",
  "key40": "yKb1imDmNwqp8XrD5ECc23bf54JGpff1uNP9jpf1JoKfvXtZ5qANxv4QrRHoRxHMLoPZG7tAkNf8tW9MuB7MdXx",
  "key41": "2oG1QFwFNQdLLQRqSovdb97w69cNS6kAAp34e6nsXqoMn3cCGoWahhuCE21L27hiCNF4cYnwbyeU9BUSDHsjyUFs"
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
