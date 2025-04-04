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
    "5VvXHaZWLr1VoNdRpyuAQrcpPgHUAYXhHPov4PTLi65ayuAZYW9GLtUNCH6AaarbG1bUZBRF2AQRtUMocrqJ3AE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KbM3ShjoHX7ymuPeRi69C1r7YXmbcVQGr5F3d3zcJairwatoiJU1ptLVeTkJzVwuPDkTSAmCeeGWxKj2ezxnjwH",
  "key1": "4RReEvdKzGuy44KQqk3KQ6fna3wa81G9DibwAQ9JMMsmCkNoXEoHVnQFr4RkXXjRKwaZNqfurq36kgxU8qDo5vrw",
  "key2": "4LkrmdJXcfXdNwTBVmnT8JiX2LmbDA5TPAiobb9PdKapeCn1Dfp5UT8KZQ1z61LFDLz7AH7jSJzWFKABT1PsfBfC",
  "key3": "m2BRGFBgwbwysbjTNnGsBhjy8VPMzZpb4kvYczXQnonbN1Vq18hoy51z3XUQz449aQmohTAikNBPnEzzToJWL85",
  "key4": "4azxCSn8aw6neuYS78YVAETyhrfRMQ3yePoY4JzoHgqiHh6LdNyS95PQaHPnYi4ZXhbGaQZivd4m3wdm19QZwSCL",
  "key5": "Y8aFrMwQACocJxNMajszNeyMRcsiW91CB5Gn44vZAeBajDSSQ87np5u5BPKyriBCkaXM1TaxtTJZAKCU2Zptm6T",
  "key6": "2DscddhVEsYgevFVjwiuXEyh9XQfrszc2iKnKn3Tmh9Gp6tgnTzz9HckJ5HLwHH7e5ZcQZkakJ6CknZJSGYFy6we",
  "key7": "2dxUBHF5vataMiaNb157CoLdLMFpT2muppHrddnDw9kJum7G9zdFxzUHrQpeG2EJFWEZ6t1AoD8n8MiMnP2XBou",
  "key8": "aUATDhGcTWA364fS4sYUw7xtpZaCMNRw7DJ3xbBtzkhthyJgVaFbZYjxnPFj7k65M2Qhy1Db7w5V2p767UYEj2G",
  "key9": "233ar3c3dczGuKPgZprKZZaUST1FhqwGAh3KnyaDixQm9wUSg2qDGsgbQMAF2XK1HTUvUL1uvjxWjaTM6QV8b2Jn",
  "key10": "5ULF7M1amMjA6PbS3oorm7Zb4RM6vENeG9H7tP6KcGNEYiqvZwY3ef1NA3Dt9WZs2VuVBoC9C4o9W2JPQLjeh6kk",
  "key11": "3FURN7sNr8u8aXH695X4QYjBK9tZMygbWqGtYdN9J4ukiqEcaBH9MbGVUoBdfE6CWepQPB1XWqLY1kyvwiGAizCS",
  "key12": "2KudzBybU8nGe3FiqsSgyD2hqiRyr6oZZc2zEwYUhcJbbcEx1b8QbiRdXYDsEKWgMEwuAu9ua6ErtcHnSuWuQnD1",
  "key13": "4h4R3QTN9girWBkJi5ecLv9g2gDVQGtPYHPENVnaBo9Jk2jjktZayU2FJkkWVdvSaX6ry8aK5o4RzAibrGGoB74Y",
  "key14": "4enejT68Q7CASyKXR3e2dDLgockf61xF5HeXSphUZeXGjrW68HT4SVVwR57YKrUvPwStrzfTS1x2ZWg7ZGqJ6aB3",
  "key15": "3yofC5R5LQ3TP85qL6EyAA1WDuEy5e9CFs8YW7adcasE5zE141aXXwUXxYPEttuccgvUhn4GosiY27h6xKuXccP8",
  "key16": "38y7SpWCSQwC9pWK2jKXCD3pNWmjYsNFxhXLW2vVxQAEdUTxjz3qoJNe4HavoNHhTzxAJtWgE84zGUiEUryhLpwd",
  "key17": "3kfQ3DRqgUr3415KZzgeJ9K5cjymTvaeeZUK8t2ycVYUdnrcNED55xGpxpg83rEwdCBqdQKRJfRbinCghdNPSAHQ",
  "key18": "2jnUYN7uBj5BnRD9HEPeiApqjAY2A2gMbP8wwcHhrEBYGaVSaVDvyRWABcDTU9c9bn9UUQ38qhtTVn3KiJU2fRYP",
  "key19": "4Ggh1ozY2JgzyfuojyLyBPb6jFYVdFPoaRkPrqzedZeiZszVoYHnRCVhUgDuHegDEgG2vhuRYwUHCvMn6w18V2g",
  "key20": "38jm8MS5TT2KgFrjjHQa4ZBmp3WQPzR3WPhgEjV6tQJT7N1TqvxWuXw98TevFdpPTbLrxVMjXa8GYSQGysmbH5yt",
  "key21": "3MKA2ZPz7PNGBzH91fD2kud1EcEo4Hcqj3FNLLGrsJ7ZkagTkECFbd9YkGshDqhUyAruwPwLk1tiC8bdjnJGkWni",
  "key22": "4RH8fHB1EVEvEKDCbDrthes7aKdbXqEzxc6vPapT2o55Rw1H38DARk6Wxrsgettj4YTFq9nYKAkbz7UtpmPf9JrX",
  "key23": "5ACzCzqmJbuBaY4dYKNGXz5U2ocBhRHkPv6q9f8vyJ8YvQkaoSW419pKQw8uxpcAzsfcQqg8UZspoanZDaJBLpjy",
  "key24": "4TkpxoDqKseWEwzyq8BcQm9ngzceAhQx6KHaQNfnw9p2wSiscLfp5VMwN8dtfANUPr9YWtBwPJLTQKpwRXGHj9iP",
  "key25": "5EDhFzQe6T1YRM1gFwLoHHmcsVQpJJAA2zqGAvMP15XmDgA6dk2FnB2wg9GfjeJGMMa4GzEcUSWCBVibeNSoZEh3",
  "key26": "4vL9U5Ahrvfc7bEV1JJ4a4vq3Fd2JHriyCmhoVqBHgrB2LohwX4HcVkU7g9aFxxib6niaW8tQeuUt5bJigvUzWC3",
  "key27": "5q6PNycJb81zqTwcQgoNWE6tA7v8Mb9cwVUrYnCGMXud4Hzy4D6sK5HHfMxt8YxttwhRLMEmuscUvbxK4ggw2MtT",
  "key28": "ZyKdu23yBmJ8VroaXC9CnaB5JzqMHTabQrkRKa25yYwoUrtK4MQ1NvuGc5WHgon4Dpi9PS2ErQ7rNHoFjNcRMQJ",
  "key29": "7pBZdaEfMFvz11MiGHCQcYVt2RYjoJFDSgJpykuJbuWuSts1ReeDT95xFX9RKrxhPKaN9U6mmB74cToWY1SajxU",
  "key30": "2avTH1TsWKUyEuyQQLfMMu1tuBVngoEHJpG3zg4cAB7RkRKRqo19jBUkfffhcX1dGApaBGWCjgbxQSAT75tXYRMQ",
  "key31": "2Qpk2ktPBRpMAY9R5cCukHw4K5xRZij72NCmemHMHoYVn2C1q4PKkEQzdoCVVQKJLGpKvsq5CTFafXnF7y5CYjRz",
  "key32": "5mLYQds1KwrWmoNNxP7Yq6Nm6rNm2GdS7whig3jaZLsF2bsxhTgpidTNw9JBK3ScWVg55znUnUXQuqYBvccBL4pg",
  "key33": "2X6MUvPhdevo7gSTFfr9XHbH1fkwr9g48dBk7eKn1JYa2Dz1mQrPgKcr5ZTLmDcCR2Vo9JL2FtNQVuMiYcQn2tLN",
  "key34": "npZ5bW5Ys5sNR3Du1ZJozfboLsSDYSyQmXPsihNwxyVdqvTFzBAfyx2rp8j2sKSguX5i2rxKiTDMHWN9iv1gEij",
  "key35": "3nGVuMzwQ8iuwmudjyk52vnwdHbCzxtra9PqDUCX1QtPBrKQazSDcsVhM9HiX6x24nE74ybVh1xEFeC3nV5n18L"
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
