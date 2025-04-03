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
    "3pWpoiCTj4eCFYXRXewotHMFGk9KWzSaJLiCEHxyFeCi7h8bBkzvDUrf3uTMXj7Ba8WQc9DThz8dKLhBQ9dQNz7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43UbJqCNvCptTqWnBBGu8NjxYfw9XuzH3QCkJZArVkxGpgsfKjD5dT54ecEnPnRyW1d777ZP4q5fdL1sU94xoM22",
  "key1": "2CLmkj5Q7nNnWxEj9c9pyKqAsuvTv9vxXxjecFtgivb3QcnD1N6kqbz24798hHbhBXueAw6RG4tS1C4AjoMsGgD8",
  "key2": "RxD5mo4v7Mpnk2QRDdjTTBg7qBzkPVPGPPfeNymjJcvi4ZoYK471B3eQNqSFjXRxywfArvxjPrBe6Zm1VXVAhQx",
  "key3": "4PHsypGPWpCzDhdGWXEKhUgXHt3nFewxFQWcKqLfVfDhKWBxocaamMPnoP2zzvTUUetc5Yw2WtRo1Bmdop6KQW8g",
  "key4": "3hEtPnydGZiciqzQJiHQqsfUcmquM7fQWhhHAJu7h5jQZmfkk8fggZUvu4kai6GYSyXy9CyAhWChsxRJmGupX4QS",
  "key5": "5NhsuaeBM3f62vqs3Bx3LNMHtapeR65ooVX6iZN8q1CX4KSgyRn2RAh2fnrQQXqdUmBRvCWGAnPscogpNjzWi1wr",
  "key6": "25fjWmuvcKDQ5dXEDJ2DdZADWbwP3R8pFxNSf5zKa33nwGxgsyuDZbrK5YnsZL1w2B2Npk9TL8yc4crY4bAB46aX",
  "key7": "SBoWvhB1ACRHqMvy4tJtHuuhuDdsmcZj6ioNfoEG1xkmKfUx9XjSVj4oeHKPh2oHNixRa9fnCgrwo1eznpgJ1Dg",
  "key8": "3cXBVravoYP69awL3Q3gYZe13eBnRHYR3QsTsCiAQG59xR2phyBxStUYkEQbxYwLBokXUoK3DE3EVKcREEw6Yvuq",
  "key9": "3YzVoXzBMF3du2WzFcYHSa5d2ZtTdpvcMFxixR192pzzC6oqSNvWrZrUEhuGpmxrFdXby8YPevgdvZgvYxvHPMLz",
  "key10": "LEwnhSrfV59JPfo3Nk5Jc9BsA36MqTW1f7P4RntLsnE75sW9cJnCgMV5t8jyhX2D9uZX8mqkfKwXiZvb883bN7t",
  "key11": "4rAsjENYjXmYS5pEndTs3xosp3mQVRxUFCjYWBF2HdkogoEbLxLhCSsQE4LqT6LZKpGSjSYQc9dhyEaJeQ449jP7",
  "key12": "4nzrxWj4heQPGEin3qM2T54zoZfcecUxioWSLRpX6JhbCeceBkkoMip2M43ytqn4DpGfvk39BdE2Rcb8EMk5xZuj",
  "key13": "5XpSxuMuwQYEwZJXnZC3uZAySJZM5KY4u8jrC645AksevkwLuYjVcvvZgJ3P6NCa6nAMbwJPtWjK1Mmbh8Wd86yu",
  "key14": "38jeyiUuTAPdk4JSaNBhhA6X3EbEjkq5yX4de1f1N6XFTZkqPWMqvGBuKpKcRfH2QdMDBFttuYNZ2GaX38CJTjGf",
  "key15": "2uffWwfF7yx7AqLnWDXfcWvTSFhUxjcRprBstGKjngwHep3gpSppQyk74ZYDa9G94HePou1erHduSibuXwU3ByfP",
  "key16": "EHZESgBXEenpJvj49rVmQEMFeAiHe7vyqorhufhDeBShDPgRVfGVbH7kCmcht8CMuUjGACvhgG8PhezuaFDDDfq",
  "key17": "SbN1iiV9r6wh53jRvN8xhk6YH7htGKgrCg7RPNmfBcJNnLnyvbvNrPWNbzdc1Jeh2Lgn4rXrziHJGmmqwPaqdGy",
  "key18": "4oHrn9A8evGX2Div1dr8eaQGjurs3UKSU4QQD3hhxdeazrKmhwJMfHt4TEmKjAHLiAtCpBoqnZ3G6GbkAfnMWgfW",
  "key19": "2ThJRWJPeivM7RE9tRV24Bg9KU18RfisuY7QbbQTWMDzgGhswd85TRJXrNzKwQ4VvwYorC4Jx9H2HngpX7h639kc",
  "key20": "YxJLUFMEpwsQtSwb4kB32iE9EqHPzoqveiW1zbALxPL9DBDZJz6BVGd3B2AijmgqPtA8WxNsRdcCCSZVZV6xwA2",
  "key21": "3XSBf2W8xcsgCpfsd1XdrSWu7MebXWuYzx4rwYm6nRnZRBQizs8oM8MhZXGq11pT2LURmAaFpjskKSvqFT86Hc7x",
  "key22": "MA2wV8BNZq4RCJ7uASP81PoHDhPjLWVBPVdAQo3Lh7gnV5JbfVK9j7NhbboQ7U7tKycaDFnTQdWeHCpbr4WaLnr",
  "key23": "4HFpi3iJoqh675V9otphGKPNLdTbmc7R91pNccYGFRtYwTksZQVDboyZanE5heHmuX1EAU96Few6uk8WvYJQMtmT",
  "key24": "51XTpZ7PZqpLDJHKS59qcaN5XXFjmoH72CdefvYa1hqsE6zfYTDCxXEwQugmCRXbZpfdGJEc1BZrcYFvCLJ5B6G1"
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
