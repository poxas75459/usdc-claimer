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
    "58tr7UJ177NZcvV4U61G5ogrHecdSzo1JMw3uypXApHrn7qVme6fXXryC9mXFoUoZPde5JLYCQvNCs7Fp1YjfUXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43cAkoTtjoqiEqz9xoUYQZTYthBxR16pLvNDR4Eepw6PqFQUUj6S1ciwTUib7nokvNVDWeHu5yyPuKZN2VoDzv1g",
  "key1": "4SXKTXcXLX5Tq4d5uHvPPRcbhk6juSnTPkYnyofX72d8hnkFRHsMpSXRMYSQJAuYCu891yDSPbJampY5grs19rrh",
  "key2": "3dkUxFD5bJsB27FznR6hbfKzU7XvqLe9n6oh9FFmm5dQewuU4FVgvrD2GUbLa48HdetPnCUSZBPEs4VxneSPtNb4",
  "key3": "3JbmbTjbM7EhopGaf6oxxexu4rAe5ga41JGxo3nj38TnijjGxdduRUb3Fp4SBCW1Y8WTo1S15nvuTCbcvU587SBh",
  "key4": "48PeVtMwRYcpJ7hag4qhnQbWbM8Ws4b45jr8hx3PMjn61t8fhFZRo51JdBsWtTMLPgUcjhFV8jwgUj26JEAVcBS3",
  "key5": "fqYNpmonn8o1trqpPEMT6a6rdrNUnHz2BHvffcM1LDVwdpsx9a8gbCNCEYXjU8Nxgi7EtoA3sgq2C5V7SRUrAJn",
  "key6": "2orrTqVvjrPzdpS32DUwbB7uKjG2eeTpxV7Gpayat7SDgqA89Lwr8B5mJ6PTM6wEdvwkHkyreUQsEdVJHY4KPXAD",
  "key7": "ztHXYGM3rkSgcxardjLaWpLrRZyxgh2WLCZFdXqmCyxDJyEzRX2TU5EUzFU5rYQdYQoW4AkGd7189uxKWReQ4Gf",
  "key8": "34HZ1xLrVd7TuJ9mwDDAZ25LyvfhAaBUuvmafnQtkYC9jGgYLSd66DtNjtXCuyYUgdKd4NyrGtWnJEadaFnNcZAf",
  "key9": "2fdJhyJidgXbbPjCBjmc1cJK9R3Bmr6No57kc5yGTXoboU9JrhTdLs7Y2tHNPG4i9hmJ2FiKqXnngqevzFzQ4qJe",
  "key10": "66TxeCwbXjjYbqmH9Hni1v1GgZNNJpevwLaVsjfragHTs618qaoqEVMhK1cEBc4kWuBk7WVTe5TMPV37srDJJAbS",
  "key11": "PDwg5XsLa5ttNfaSENE1NR8k3P9ZWtoYuGu9o7DPvpDTnGsf6HeouYH8rLR69Fcjtva3hVtKvu6u2FbeywqMChQ",
  "key12": "45awJpwyA3U8c8t19Kp4j9neFL6sFuLHXsioYJgpLkzmPHEfeEGjeMm3Sr7kDPx2JQEaxtsmAMZ7MPgeSPUUnEq4",
  "key13": "5Qb3iK18VMXEq56iTuKFim968Ud5rfSFD8hvzfAYCHvmtXDLLJDbaxmEo8yix5uSF7Urb1go7zWbQ1UCXHTV8U85",
  "key14": "34xsHcJ8z7TmS48nweDLfjpvzEUiwQnXdBNDmAmTMXtqS9Lwv1eU1CdyQy7pbpT65G2qj4r2vsM6dJAL2nQYRuy4",
  "key15": "3L96tEZSKScrcqxrih461RJAupuXQMVLgubNFNspUQKZ48gjGsZcjbGv3WNJvjkgKHWzX2JhKdVmvwEeiaMQxBmn",
  "key16": "G7BZx69X9X6jhdJLMzrhHBG8fHufcjRqDjt9aNAgVwA7mdjiranqTbuv62B6XEdDLkXB1FKRmYXqFLA5KuZdiks",
  "key17": "Zu2prKyFtD7jpCTJnLQ6vfzgS2HEmkkREchvG2j5mcpAuc8Ua2ugDStb51qkrqtdzzcjbEPswVQjHKzeco1Wncb",
  "key18": "46EGxJYo4XdSkNFCNVqM4vGCfMg4hteNLixphZzbSc3NryndJux7Hd8zCczWbS1ouXY89nRteRbJxcxm8vNtAnja",
  "key19": "4j6rHghFcLqbvsuMNpUmePeonzN6WnA53tr4GaTfNpaAj7PrYbM3tguuKGHDZCfJ6BH1vmRzQWAa63u9gtoo3hdn",
  "key20": "DT3U5iYTFmstMokvA6vKJEcMdT22emSKNwENt9aqYrmxZQ9W9gMCdbGCRnxDU2ZFK4Jx1eR9TfqPgVq1rdnmBHs",
  "key21": "eX17Lmv52Z1zWcPPY95iY5iCZmfRwsZwErkT7CBLFqoWVQpMhmAp2HsWdoViywfCz4khMw6UneQDdqVcQxmFdf6",
  "key22": "44RDAENFUDYv6SGiHM2Q9m4HubmcNiaMPhT6xq8vgwQQBzECQuYofkvs8UgpeMjbbG8M6jkksyuaxQ6ptNEQe5eF",
  "key23": "38A1jGb9A43AKZw7GyppEnTKEb8w3SmPDNJP7JigyYwkFzbBH5qqsRfmzYCyws69z5AsmqncSLsW4fEFKXaCKnkr",
  "key24": "2RKJsiHHpWZP71f69nu9B92diJXDLh3CqXdZSZsdZ9aq1kHYrbxdBH6wG8zXtVskv4vm3eAX66ZLhbDV1jTErebu",
  "key25": "2MQ3QBjUsD2w6WyZW817gQtUkw9P7rWfdtH9E4Reg74ssZSJp2eDZpQmHJwq7KLyCinriBwo4QuxQaMGf72tz2sC",
  "key26": "2fHkdUYaN6iZ2U3ucCTm1YAA21Gk5hDK6pHrgq8EWL38oHaDYswmcPrsBRY1sA4FeJuBzu96iXWnV6CKqRK5mWqR",
  "key27": "4RJXEJdh3xhhtXyUrsmf1kZVrPxYaTeznHmhsCtnLfbnkwNLuSZB2p1L8jk2wADzf5gmuM5F1QrVKmCXAELJFVBF",
  "key28": "2RahaV5eBwPdzd6kVs7MJHpAQes7x98k9NdPZfowzHJ67E5qiZTBchiw8hGH9M3FZM5ESed8cJvHyi4nnrhTgmq9",
  "key29": "65k7vDMQ1RQS59YS1zFRm6uzDsfrcgVtWdQBD3RfKQcNT1zZxKgfLs4sKMmAQ1ShmJtDjMsbZ8x171kQQUUjVXh7",
  "key30": "4ZQmwkqpQrVwehYZQzaoMkMmidkAThzFfMFQfJbc3QcKidGSPr6ag2Ut17hUJqgsmYBDCkDJwyrDcvAvmomc9P9y",
  "key31": "4fefVhdRJEEqCa1G3yXGfLuTtnLiCdgFP1SCGKD321oxQDTyTZnZZXvBWP1n69MEabmcjG6TVrFZzaKLBg6neJpk",
  "key32": "5Gcp9M73wbiZNPSfv5K7Hf85AxTQRrXLSjm2o5aCUBEx57Vo9bZpGRwA7beDzG7Sym6d3UZsFQV8qKjKMeJ6q6HT",
  "key33": "5HhjVCdzGLJCS1KVetJto3AWXvNdYyZWLEBKtPfsbuZroN6zLhn1nBLa1DmiFzbjU2yb9ydXuBacugvfriLgjwh7",
  "key34": "5AABPu6g5CCn5Ww9HRtrybNd6YZJKtzFCi6LTxGu5yPhvQ9GSsxdPCaTdzCaUNuogjPj9kxZ4p1NeVR8Tk1w9sv2",
  "key35": "5FAbEEXohFzkHFgpLHpUevudiqDZeRbX5wvPYpMrSx9EgLBvRui9k4CAQbfSya6tcTGFR6w6Vi5WsEVfReTVcj7U",
  "key36": "RoopYwgrpgwgUuUXeEo8yDP4nBiNBYsUKCXF1Voz1evfqAdQ2MXDdJB5VHnaX2G9MSEnSp9QJdj7yPQZ67gW6G7",
  "key37": "3QWtYhDKHZi63b3AhuuVhMoyB4RDsZc8BWYUQsUyJuuuD5kBWC1vK8fERSaTZjMkPjbemwSNxVhebmbe1EN7EWSB",
  "key38": "26TyoovJc1FPHzLzLfDncZRVVGdYULdcFBvksaJ4v46pd8FqqtxFumtuqbwXgYam1CMJeSQjpfawpaoqbbvJHuG6",
  "key39": "mXDHwscivBf4GTVrhM9URaTqHJuAiv2SArcRLKppcgJBH5HfkwKjyMUauBXGkvMVry4wv696898PiNqjjbqDmwm",
  "key40": "3JhAUf3z58BZwijS4pjjJGcWV6KeqCMEXjusPnmiwPEqncMgcqHvWcc2GYBUgxnPP3DPu6WmDSUGWAFQMZ1BVY1v",
  "key41": "47fqm1d6R5NR1b5yQPNncyvLXDzSSN7iPPnBMVAqFeEvCWaSZFhUEjaHZwjbFmhLwKMTS5UJ564KLguCs9VBZhhi"
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
