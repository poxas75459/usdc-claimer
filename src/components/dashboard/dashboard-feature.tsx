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
    "4Y28b85Dy5yxaxAP8v8tqGbD7C7fos1UZMDUEvZxXZtNwzgNaX84bUngT7n6kYBTDc6pdCMLb3NzHtrKnH3ebzBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sJycF54teWErx2ZnYqts2zTzKpCW4zxuxy1KsP88xXcbJHqebgrpL4MoBZjQ5PWbZyLG65aG2a2T1tnyFmq6uVA",
  "key1": "391cqyShSKq9S94uMSQa1oKyniYR2EhvDHmimp525mfJt36mjMKvHXCAQZ4xSzUQTDqpMEyMpVzitDdJwhDi74Az",
  "key2": "5YceFUqB6Qjis3T16y991vXjNTTkV91QRhQQbkXXs7EfcFi4cpBQHtHcEQhUKLQmQfPN3jbrMSihZzep8PRNtZJY",
  "key3": "343dzQTutJqnaztBTmAWige5UggPJCQXnqvgFVX7t3oZoLJTqPHVmm5gboBCWtedL5RpEkFNQx61pdoE49jr8tB6",
  "key4": "5vyiGPhxErTRo5XdN4aRCp2ysS9vDVuuSni7AdPCmtj9s9NN88sFfsmrvBgPb1HNz8kCKrtD8zzFpQzMeCxrCrrF",
  "key5": "3uMkLPCdB8g8jcMbh6Lpz5cRP6MdFDtte99ej9AJSWFS68kiRFHw1WgT6SAWTcBNLLBTS9Hh6DHyRFoQt654HCBW",
  "key6": "x8pXXvebBqwpVK8MxspD41UTWtqEikXek4cjvQxaNYJiF6hHNESMoJmM4W6cfMEYAGngSELYhaPsU8EKhaJyofw",
  "key7": "4kDe68x3Kam5qZnKf9dkMsfKrit31JzE4jubMpfoVMyxy8HgDN5PGrBc1MaGDqBeoMNNGtofEHWpcgUnJecHWKGX",
  "key8": "5knbozdjBPQ8mxRuCq67PcqmoMYQhyRbE6v1VDFYjxhiS6suDwHKXS1fuKazStMfCW8V6TJ66ttNfwbdPqdcgCYE",
  "key9": "5g77vKBN3Tb2CzzjhU5szR3BxX1HUhcfGwJVsRRBh7fb49Lu7bBhMrNAczpdgCBhRDb8K68NiJykSPPfosUJfP8U",
  "key10": "5WH6vk3KYyk9hs8uBTENaYX5fKdvCd4Z2X7bjiZPvEa8PpyRJbrCYRNWxFYRr7QLHxDvncoLseZPePtxdPgv4WSE",
  "key11": "4rm34xf7UGdbNL9dJpYNJnSBVrFkQ3LhF3PXWrVm8UJZmMxmpAd3MdyUwnGdorvwg8nZFoNSRc7bC5QaEGPShXrH",
  "key12": "5j8oGjmTupx97etndkW2v7xyA1jAieoqJPAbgqh3EUPNBJWyoVLBMHShmKM2CRnPpcSWiQuRvP9jTaH2V76bnghe",
  "key13": "5uNAbZHkr2HxmzE5J8qCyRVyYv3ugFLdKKze5ZubD6puP77vLWPK9W2BNAQUw5Ei3UDZK4YcofH1p6CtWC4u88hL",
  "key14": "5kfW5mriSKj7kVQsaQ1wCfYqxPkTxVE4YWB8EFg2e8YxHmZHMiWunfdvh2XNbdTHnswqunf9dxpMcPDH6JH7dWJj",
  "key15": "VwB8V58xGQHNEsDyJAk7dSJ8XnU5nxStoY8XJurNZe1ngLcxLBCjNnNfg1RzJRYbSqAkruJThj6G95ANbVdDR16",
  "key16": "9qpnpB8Vp3nG7ZEi2HUaxvPN66QkzYqq6t6Cc3qT23soBYv4VKtwS2gPztcefEF17peABdEaT86TFwTJLiBn6yu",
  "key17": "o7qhTYzXwNmqA4Cib9TWaER3AVdAh7VwX929Kk3rXbEbXfqF9ZyFRQ1rRFQiZruQVRdSxAjafqeAVJTpP7VzZz1",
  "key18": "5nSE48ibDAsHiHAgo4XUYKVEfyjmUYfTqCEde7yUuM4N345HGVp5unp6rCRaN7Z3kzF4xd9MbjkzyxdS1H3EhPZ6",
  "key19": "5bfS6S54agbybN2owyUFF4cnZy8DMSBz8pEahztUhHANW97TavLKpZRsH2aRBgaRzvGrsfwvfW3AZgiEiVGimgZt",
  "key20": "LYyxMXQegRTv7MSX31b5f7KuA2S11Xn2biP5aJbE8EEhneCjxYr53BqRQzS9WG7pBsSB3yjEGvtDaNBF93MQEQF",
  "key21": "5uQaxawR9cqvFmK1yS7Fj53j1Vdyz9ApCGe4zcy4VfHCZZpK7nV3aXBpriYvsGjbXcFcMJHNBHQpovUjb8aAq5Bu",
  "key22": "65xcTFjT4YcjdE2TMn5XvPWSkf8wZh6kKfNz3Y8JAEeyY95Lav7Lf2Nr5PYnYL2e9UM6pfX89hS2JSwPouprSAWK",
  "key23": "LqLTPWMxmmkzbQP8QCL1GBAJv6waY9eAEuDNgDJXDSNHKhQLLA3WpXMjjaCFwhjdom27wFgTLzLyxKRAdQvZ3Hb",
  "key24": "5NAcP4JT2veNopbvzahTFCaqN61QZHE1jfGVGzvMLMadDG7t8mb4Z9B8omQPNzSwJ6Qn1waSukNigSB6LgZtmp5k",
  "key25": "4YEPTPumvSwjomNeyr6jtRrDPgb3aP4C9aA9nUipMMdU61KDXYyEPALcgL5KLsrkZiQL8tuA8LEh4DXLiNdU1FCX",
  "key26": "4QXqFbxA7FTq59CAHk3n2eqxz4yE4UMkwxizC7BEqz1mpvstqALtwBav5JURACWn9V2SbJqQQwZKuG1kyNuL6jxv",
  "key27": "3gtVUMHZxAu3AjbF3wPQRdfDWYxRWERm2PZEKU4iWVnwMKesv6f2HBEKVkd4f5z2mJLvpKjNAQKsUcJZU4MnLuqG",
  "key28": "4xdcFgD5JgEnj6TF2ia8SxLeebJ1t8Ni7exPoJbqjRWcrad2vHbggWgdLB99Yg5dmRtWrL3tT245V658vP3fXP5D",
  "key29": "4UdYUMfa3bvTtdkg6HxjKsTdeJqxRhA2eRtdvAGqk4kkroEccM7Cu4jmJU2z6rde6tR2BVdetqkLLDYFSrqPHAvP",
  "key30": "49dHrHRx61dUcM11rfahzxhHiE5oEZWRGbg2H4VfH4Fu3vdw2ZQsjQm4Va432Dfjxd4rbrci8Szd6ureJz5EqrVE",
  "key31": "29nrPgXwZrjSWvJTVHXLuXdicqjU9xupr9ToFhSEVwmFPMiU9oiuUDQ9BdPBd6yNjYbLF5kwFRU2jL67Q7jf4e4g"
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
