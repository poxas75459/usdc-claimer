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
    "4UeuLbEwYawSZ7mLu5DFR9BaKJXN3qwzCHKj6ArJCpkR4x1a31Lr5KbEkgjNBxJByziaDt9EFV6E55T8hKFoYFSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YDUQ5jZpY2rxFSamDbRVP5koaF31b9UK7GVxVNz3cjcKSgsT4gHQMxq5myzEy38miaBip5HLfFFh1UZzx1ZiVhv",
  "key1": "4vVz9XDw3KkXw1BVdVZYSZEz77zpQ71xHAfBRi993pYApgGAbPNUXBK7bpm568fEN8QYSY6RwqB15zbNPy7BpAyE",
  "key2": "2sqXiujF9RpH8ZX7N6FJ3tY6BWBWQpV4qoagkqa36u2QEwDzf1noMqQzmMKBT53enYWfnhsgJKMHPDDKc9589iR7",
  "key3": "2KsCV9SeW5SfqzaBCBBaJmEfamzzZsf2KvSpQJZsm1zNgcZUvFGXi8yhg8T1cU4ZvwhGuTWTiCz4E2iFmBF1BRzY",
  "key4": "4HZXzwu9z1RQuufK5LLxBcrfhwekPdqAS2FxpSyW4Vz54zXFRyY8TWK9oZRQ4Mnk9pLiTMma86Wn99iAUNRCWJUy",
  "key5": "chv1dxPtkwy4ewRGLap8cTCcAGKAhrj4uDfjLS9SuK7xFQiqjVfunF9pWFNbuWnh28xK8kN9BFM8VZ4dBg3Tjd2",
  "key6": "49ppR8cC2QRNoB9gMmJELxt3EjAvixjcZr7cu9tyD7Zcm4oFofbTaR3kZbjdWqLV4mh34oAT9M7pNzF3RUuZnnFy",
  "key7": "5DiHpdyWDT53VbhJiDJkeTzQohZ3ehdT4cDn61zVTfotkCUHLyAALjCDH8XTbcqYMNAdWCfMBtooK6nwFPNdUNzo",
  "key8": "ub6vTJ3BdhypKZiGaWEGnYh4iDPXUr8jJLAeS4cwZG1SpvppEv8fnESU5NB7E4xSEH19jPr4ktYDkrc5taHSe8r",
  "key9": "fyLf7gvVKd73UbZcYPFTecYa9cHmRW6h6XwfWECvijKtGFwrnJfs127tszkiqjbYS3bwZ3e3qDmoWxfgu3zeQHo",
  "key10": "8i2h3rj4JQDt4Y8jULWs2HcZvy2YF2xVD76yUqRJ3BSrbqEFdSNCJ63NPGLb7HU31EKERMyKJNeC71y8ZM19yAE",
  "key11": "Mq71N3J23sZrJrXpTQvFpScn6xkPit41AcJe7ABxxTUwmLLedX56nAUe85FeamydBzAjJFGooESauf1Q2szHziM",
  "key12": "kaDVCKSqpQuE9oYU4i8NgjRYVmGSaFxgHanMEy9Rn4SvSwsixXvhob5bG3tjhpdDeLz45RsHZSWSPaa39AKzDUy",
  "key13": "4wqQU7nJWYAL1s5WsbLArqLnCzyLomEJPpKaCqFCJRRxSE4KCvLTaVyGnXofXP1k9QPbjt9gQBxcgAqDr4nLSx68",
  "key14": "3Bwj5oQ2kKQV2iipTdBmPLLuR7bfZWsiDDEvxHphAptM8tjTA7PRfPfNXCDWQ6DeKQ6WZBk8zYjPm2GJsURrVwSo",
  "key15": "5XNwXLsiqPd3UWhM2vmH4sxyEFpQJr2ZU6k6ksytwHsQZZfGzJBKKRx45R3BnAqKDZzLevbE9xfQRJuoGASEhPjK",
  "key16": "3qvSWiY3uWHrLH8J9HuMwu8MPahEudyyPcYgXpQM7wGgZYeivpgw9n7YS5LCvzZStdJ1Sw7Bytri2rCJQUQVx7n4",
  "key17": "3kZwJpkoWmkLtSETtUHSEaHJJR3rYnpB9sy7qYfW3KqakRhnNzHcEjUYQnLKUdhFE1GScigRDzWkkAaDBtJuP3AG",
  "key18": "5GexuKHru3wueRnx1mXnri8W4CpuQLb42rMa1B4V9KV3jTRLjs2HdDkLFexqJfqrd68gdicLoxXFmgiygDTdXcPh",
  "key19": "tDuAoA9yeWSpzKBVNy18abGmMiXzyTEACq5cJz1x4CsPm1x9TASLGPaqfHgUytG7on6jDryEsqm2f1u48H28AdG",
  "key20": "3nQj3jxb5RVByQrS585FwW6DYRASg3WB4AdqefAyMxrKupZJ5uuMTRPEGFJFZgZGjK7gAfkguGD7UJL2m9WDVGei",
  "key21": "5ApYJU49CEyBjmSQSgksXWZ1JmNLBJMkGDgRRvE78LnUz65XgXg36M5GGdetjkwDbWzquLqGJvgn1fJAAadeVtBn",
  "key22": "5r3Um2rqCbLN8Mw7zZY7hPT5Dm55xANgtVBS7Zi2h6VPG4kv5y4jDN5tccJAQQ8QZHJXntKWeg5mMtm7Ztxp6dw7",
  "key23": "4PDAZLCn5j51hFgN1NnHy9ScwAAg1oPjAHRhp7JZv6GsX2kAtaDm4wunHRtv8SfxbQXAFifXJEm7Hat5EbMbWDrh",
  "key24": "2rwtcH4YPE9fect8neas37Rg5DSGGmttNZeruhd92ejfeteacjeFY2k5p7mjriFAneeNqUnQnYxA5k8UiRKscfT5",
  "key25": "2TK2SrKCri2GWxy91KV1qvmF8VBjzEp133HfSwjfknBK1gttrPr6acj9rZQsndSw9B5ypLwsqhmFHmXu5EcLLSJo",
  "key26": "oTe3tXNFoFmc1ceMQNujryC8P2TyVmmYAM4C4oPAoRcDy4XhQ3yFjzC1XiuGxdcDiy6aFJAuyoP8FAkoKvHzyW6",
  "key27": "2juXq5gDKrdwVypr8YyFAex1FqpkPTPrt6YN8GccTFSNWBzpQ4WAY7RdauQAgKqznfYX5Udhyvm4sVcQos42zSKR",
  "key28": "5wxsdrXLHv1A4ze8KGFUmE4evTnCgsL442r2uaq1U2KQL7tBH2bsaA9gEhSAX6JzqqKNdcn7QSk2UorwrnG6USt",
  "key29": "2y7VoRrij5qJRr88vWndybrNtm5PdJ5AFUbz8kUzVQLWvFe3k4XMTf1tV6oMDXNb2fT2ZDdnwcjiZ6xDmsjFcrzP",
  "key30": "36JAp5ogfVj8SGDwjB4dLubedL2Bjd83axjW61vXbDPbMDYU5BQjctWRuZyHbMeiWxGobjhnztDF3yYBvnt65Qfz",
  "key31": "3Ka7QWAjmRW25dEVYEBfuhDk15yKRi58RdRjwxeVkBq9PFG6xfAkRCQhEadhHErhKwAk5fY8KCDdtZV2SftrSEfd",
  "key32": "65rx2Wqci5rshzkNY45p9cCjzPXj9eqWad6ffQ6htwJ8gk6qzNEvYvBziutBXbb3Q7SejWyMD5VKypdW3wy5BQMv",
  "key33": "457h7Ebh1bkkGERsVUvLQKiAqQQRgctpB1eHXtqrERGxsNri2a2Ft97LKw6tc5VjmN5WfckGshMinV9xfLNb8tb1",
  "key34": "XMvE7wWLM6qnviotMrq8spjWjVjT3nRgNK4M5KAi5t8RpsAAPn5GooJriWALtXSqehqaMXYE21DicNpkfnk4Wmz",
  "key35": "4fA2u7sZ1Z7mfe9xLb7uxMQmGUFqXJV8uKDYYWtUZtbBQmw9yHi4YaTQRUsVB7gEjW2VBGy4ro4p8qEyG5AdVdsV"
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
