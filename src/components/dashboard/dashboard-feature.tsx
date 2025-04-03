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
    "3ycxPgAWpKfNiMW5so5GasN9tZpBJFc5gB7McabYdu1JkSxqrXvUyNMbcGjX9mmTYcY1rSBtC9ZXxxkuQBJux4j4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EZshoLY2hmG8ot475dqZ6Ut8oA9YhAdCrTNkJGBtMUPBc8KyAYnvDp5D4yWfWdUyz1D5jJGvEF7aBsG1jpL9cxm",
  "key1": "5eU9Qy49vnPdD6fH2YXQ2tCM22GaGAmzWcJ8nSXd8JThL3MmmmaMEesmGzbNpFmfvU9smZ1RQQBVZR9dxANTJq35",
  "key2": "3RSQf4X5qgbZCcDEv23aTeipb5CWyddS1yTQXHLhXgcfDD2yNvdhp2r3EfcbkWcmRNxAGe57f44WxfHxKx7WS7fw",
  "key3": "4sBbAZpsZBHzWBXpUzwD8WgEfX8Pea1sWzMaSn5zoc1Z7LdLshQr3nk85ceRKLe7mkUBsTsMWgpg3tB8htCbzsu5",
  "key4": "4kowhjjcdQTKM41xokA2hxyySdLKZUKyQm4K8AHy14Bifa2eiM9V526tcnYnx9yvAZk8WAcD35Q5ApWxwfqont37",
  "key5": "25u1hFwyrM9MEkTaVxwu6px8ykZWV7R2sq9dJnwpKh5xhocTTdPRrkHjLPCpYxytDq9xW2pR8oQLnLxKmuPf2Jbe",
  "key6": "xFUe66foxNrPm8SPQpK3P7h3uuAMwyysgSHnJ8BCbRUcSUg9ACiBQ4CoAZvTV4YKG4y8tKKAkNkGcc2zTAzWaLE",
  "key7": "5FFeLrYN8Fawm84WGbETUqXemUXMYFwFYBfXzW5jnPcBG1oK9t5rQxFDZ1vMN3EPkwWFtD5387XgVMDivpGebcQN",
  "key8": "3mEncsABuUg3jFzvJbqKiWPHrQsfK1vKHT7xHBQMJhUXmwwHhpXmaTyaxEt3wwLiyzNERGpxNTNYVze5SwLNuHJU",
  "key9": "gcosPuWuCzBH8Tb5ZJd67HoMt5eE8THQyVkmmizDjJfgWVja6ypGorqwgnnn4JyFzJhSU7kdb1EpnYwr6pMB41i",
  "key10": "5GwRpqJjf8v6xpVEkYjK65v3G3hZEt5ZXRPaG7wkYBRHvqSzzxZHkbZEoTLqdFp422jqDaL5Y2WohcvRkWM9Sghz",
  "key11": "3GZxhG73ac1KL5SwXwtkz4HtCxftd3Zh4ogt8iEWAvZxM6YVsAMWwCTQoiZiNVgrzq784Uj4Sqgya3opeXYznnj",
  "key12": "BKEaBc9niKRApPB7HLqdNnJjDmrVVSMVJ2DEvHoA2Wo1d3rUAo6WWPkefLULo3wgzNZjK6PqrzhNavrVyGapmdN",
  "key13": "5qr66uZGLn2BY9FrXREQJoEgw9nqZQ398SkinvghtxVUw94eBnBWjnfzycMEpbatfJTULc1xDRAo7xwp1W2aqYEP",
  "key14": "3QbZJgZ3XEbsWPrW2vDH6dPxTzwDYJbemsk2D5ueRGjbmNSJ7ZHC2HqCcr3Px79VuaDeqkibsGgt6R8q2mE78G2Y",
  "key15": "2psptjCAgCBexFkztVXHxACTrTaLA3Zq4CRPUUdjde7iXCQRX7ETysjnuqN6s5ox89157C5sgM2vVUAQP1WhgjtZ",
  "key16": "38z72At3nxhnLaCENb1EBqVh35vT5iAGvE4kr8F5wHhKJnR46Mb77yqARbYvmPmATa1F6mVP6j7WY8tmwbpMB1cf",
  "key17": "4HsTKkV75jNYuAbGAqdEJQhPDPJumY9uLPUAMU4Sg1c3gbDZ67iVGXdk9G4mKHKcCoMTTct1SveJc2JhtFwjankb",
  "key18": "5T5gsnJLkYkMQZueBHsnnoiRuzji8XfkNzkJryUizo79pvcp1efZoFCtst6ju2BVDzFeqDoWdsjQGoLgChbmfuqB",
  "key19": "Fcu94mkhhE8zGAgWUnZSTqcDjQgzuvDKRC45ZVHE89syJrZEzHAwB7A9k9Nrjo6tWVJNeDnvjGGwzkmfRqegT1n",
  "key20": "3G3Zyv5kDFQwBoa9EhT9psvVGLZioXx3NET5FzH2zyUY8MqtVZ2WTjaPa8SqpK3bvfzSn9iZybzrvPz9UFihUrh8",
  "key21": "feUwZxp8ZTA19P5qsgYy81TaS5TbYhcTHyYjGu2EWDchFAog7pkwpUJasT9ZwPR5c3R6eXr6aqRcdgxCoSGeoXL",
  "key22": "4W1YjjDiYJoJ3EJoNRfVRYAJ5uuEyoUryomQAEk73NGH71UrzZAWcYdg6n7cuFBVLzwCX7cptaBciNv8vLQBNSfg",
  "key23": "52yvryKjbw7G8PFsKmysaoqrc27ATcqeMULBdko7X92i9wjt9CKnuFm9JwxVh4N3LqP4XNgtHuqSivfYKNrQonVo",
  "key24": "5WNvLNM8cSKdBsp8WvzR5uSsBbW7r3zE2uV9aTvdPzUum5nGwUv2nzR1PmEoVPSY36fnuha1cw6nBBrb2EUH7yka",
  "key25": "52skiJ1r63F1vJfBFxUWJsQL8TnLfEYKA6GGktrUcjch9LF2TiBsNN43GR4fcii8ZGHGZWVkXLiszDsGLKoZvADd",
  "key26": "5sVbwUP6WExDmrkFmXEnkPaaDoV3E2p2pMSJCMbDLqGAz6maTCEw5cbTbdFXKQCbChjpvZGuqmVvzmsyuic2nZ3r",
  "key27": "5mFNxYHLyLvNmcyHc3BfRwSFnotFVNY4Am64BGbafhssKfLys22R8XiNiY725aoxC8XHKTKa5AnS68RDFKgDCMbj",
  "key28": "4nBcSSQz4niAq3w7RjM6FZP486MwbnHiYs7JcB8odUm6wXEnPUPmdKG7wE8oVj4gxv8hAfYfFLYU8h1XBK5bbuTD",
  "key29": "5qsSN3mknDvpjJBcSWLPQFRGZD2ydHxyJCrHpucS4bbRu4t62FtJ4D3SRBT5JW7P9LKTXAUywU1xdf7ADA1wxKvQ",
  "key30": "2CYKgpdX1R6bzUwGPN5saFuW4w2Yzre3UsfJLFGiLbvDrmHTjxiZzsD2iuu8DhCqDzGRqstzZJQ4eioEdnLTVisQ",
  "key31": "3t6k7S9HfWsKoSwLCQArF9xCFin3hiinxFYxh2ueJTLMrGZGt9rJ8QnKEcwSWmjBaTbkeXfoU6VEh7qursWb696e"
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
