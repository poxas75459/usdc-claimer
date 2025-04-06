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
    "5ioegqbpoG2xTjCbG5V3VWgQi4eSrp76jENTXGFvpze6BZMzCnkeTfHxK5vAQYVfeJHhRamNBRFy59hu5YgCYcyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22cmcmyY2TsewBsKyvuFTGn6MDTvakPHgyAyK8pPyPNY8fAdbK8LFnu6X7ZWspSeRddb6tr7NkgrSQxjbL1ruF6b",
  "key1": "5gwepmKP3P5t6s8gjNJTvA4j8CeWbN7DT3dw47Ja6FxNA5NRGVU2KwqhU8KQgNctwaZ5gPjujDcY1nZGVT9bXpV3",
  "key2": "T8mLdb9LYkBddD7siGkpKuqqdrxq8cZGQhexLG8jfVYMoB8j99Q492t5MctYwQB7DcRBdSQiRRAfxXK7stXMcj5",
  "key3": "49zXJVokdXWWcUuuD3syecdwznaNmLyJvKQ7CxHL8eBYUtY8hDkfykkMMCdWiGFFMbMqzLNBEkgovd2cw9PkSePg",
  "key4": "3XArs57qnoXRdDf1LQFXwrzEqjT3LhEtbU5jheyMSiVmFF4MSgJumd77FK8x4LszHp5dikp7dShSes1sdEaXcPPR",
  "key5": "3yUtXzzYha6ujW6XobHEjzP2Z3GrdyU6P9xZtHFyNh45GoCUVpQf4i8eTBhLiLTJeoo66xLJdeMV9pr86s5thxJN",
  "key6": "2jqJD7AqukGcKReQxRE5d5fieHK5agVbhUkY8Wg8dAsmc9Q5p1kwjUoDVMpDTVvetftzR6n53vtkA4WFxmBs4Vzp",
  "key7": "3pooAcWwQ84KfB8JsYjpvTJruzXiWnZEfARqQS4shPaQYqRr6cYwoKFmUcPUGkzHbRWDZpoxYBviSoQMYeEnu5LD",
  "key8": "3dJCkb4qYsyaV7oAGkmMzWCWZYhnFR7cvTHoxRGDHHUozZPfEKNHwLqjEGKJh1GiJi3fxjYPJyexX3gjd3ykbXh9",
  "key9": "3oXwiLhG5QMYMAnasj3HKnuH2zmWcuJSUBfj6WvjtEyGsn5hwDYmS192cin76DLJRr1ZdCqYugV8Qf4wFtWzVK1E",
  "key10": "4hWZ3NeWc6P9vNZeSJt4kD431nd9bNC7Q4d49cQ33KzZtnhCeULCNYSNBPVwaHaL4GxSmBBbmwTRWQdxKAFfU4mp",
  "key11": "4QpWbPGTvohfymUnyMHr1332oHbNTL3iGpXJf2Zb71YTysGYY4DtQAqtEmJ99oZYd8L9BcwLYgohpH9xar7nF3ch",
  "key12": "2tBWL2bXMBTwjuq9J8Ex9iArN2kiDAn1ZVyDPrnYCb5tmUuUBCAvWjPqbTFb93vH3nPGcjznJ8BUzDd8YGBmLwvg",
  "key13": "55PtuqZkAX3WHVxaDF5EjP9aQoXRCX9vmmwYVpcTAdQoHEBQH2LGvHAb825WazW4gcZriJXT7NA1TfzUVQ5b7E6P",
  "key14": "2cit2Q9FuASZWh2UkF9dW72YYjdLScnkcBVjoiMXGkcMnPC6weMDE5hZXhKdTwFRNFiqmgzKZDc6kW1gfQQVFhYt",
  "key15": "4mEd1jd7pSz9Ho3vBWLPKrFsHteXgmzoEh77wVXcoP4ctULDWkyPpLwcpFP3mFTbBmd5JbddHFeRv4L4ZoVJ5Zus",
  "key16": "44JkewZhE133JUSyhQ6ezBkdUNBGwnehaSDjMY18Z16Ld4SuRZM1VocQJFUbCpjGfJctKdrmEK5pgJRLQgRSQQUn",
  "key17": "3XZ8jymApz7ccAuU36qkC8RMqDJy5vZNq9vB18axcQ3J381zLgUyLmSDrBdU9crfY8ZH8QAYzhzigkUfFiWxFhLN",
  "key18": "GrcN8SVNb4Pd6LPdfht4oJeV7cWWgCRgCCxoeFVfKrbtLSHU2q3qFLNfSiZtgJUE6sVifw6FfcGxcUT3Tzti6zG",
  "key19": "2gDfYDjLcjoRZnQCNX6hVbGL1G5Baz2e1q4cBsExeZbh7urEKtkSpLMoASs9TCmLPbs92tSmMynGN2bwUmGdCABU",
  "key20": "2YcJ7nzrx8BbnLhCsrQZLCEkjS7Zgs3agg8HsQoDWA8yBt55VenugiXfCNPk3aRwuEfoaVaSyo8mmU7Ao652ZvbX",
  "key21": "59S4oxSgSRaKby3Bpc44kGUDHTiYnud15ynuGM43ZfSZgEaqqArfe4Pe6XBHkbsKWZJjmzMx5phZMcQVaVeEiNFC",
  "key22": "2TAfg6Z2rT19Jk5zD8r1dqZJcZcDJ98pPKUUcfqeLnk4qvFMjRWM77m9rw1vHxAEL6sb4kEofmqazVFoJP7WF639",
  "key23": "4ZUVRWGogWm1U3wDcEAWzWh1X1Qc3xd6tcTTFLCHAYPQTWGxYwnsciukXsRfhd6FsA4R9Ag5qicC1BcFBhqHeakx",
  "key24": "3WxaJ91iZAFAYYHJEmhFKf6HDWKYtERzA4s5Wojsf78Lau3xeyKEWEnVKgWH1qLaztQvnNr5sKeGs5hnmogETvyA",
  "key25": "4b92vAMhrP8Uj1toNJx9GsiFCa8yFjxpuYAR8QK3TRsXchPBEwY5Rt15nbUTS8ecXJHNagNWtZVHxMUFrMUjVdvK",
  "key26": "55wHfj6Xg81VAwoP3JKzW5MEm6EfV4gpZccYRiuo9uZut5vKX6qAABJFoJZKBAuuy7g732NzDBGsqFXpZXghghpy",
  "key27": "K93YNpfyxngFKxmsEnsnLFtS5LkVpryjoV1CyfxDeujdacuWVpHZUdQthHUZ7TgRB5vzf2YGgF43bHrnoBNFz5j",
  "key28": "5Qcb6RUZ2hgBdUEYSsJqMpBa5t4dmBaVVzoDFXdrsL4Mw5NYLjA6zJp75vkRAYK6RHo6NNYzGcDbAfGfcpkQrnrm",
  "key29": "yi48cTjTupE6RNicivckhBY7nZ86F7oPsTPW6kwrMBRk6L3ZjPpRBwpTYkB6eU3UBYYNSBHk2PecgNXWnHo4JVL",
  "key30": "4ajNdDSV4boqERwXF7zNBZzH6oawMEJorbpvad3u6Bg58L4n4Wyt38ed5jtUKGDswn6aPRGbmVU3AQVfw3s6qP7s",
  "key31": "55Sh9VJXSGMSgwiQoH8SdgNGsqG9d4HpyDuEcymeeStgHuHmiDvUhQ2btGkWcjEUi1VyzCh33cFGyiUrtUZnrJE3",
  "key32": "4KYZi7Xd3rDSG7GyR9neKsgzjBEqebh8ykMQKpEd7DbSDCpEbi5sQFyjReTgjkhNm97gxeHw2iX8aSHYQj8uv7F7",
  "key33": "2v1dSrTDekRHnSbV6gDzsNAKmu6eToQuP83dBw7h4ESJxUHxbHgxUHBGwV8kBFgMoxgULp4RcWkDuc6xL8nj3o5a",
  "key34": "5cXqFFS8Qox4znvM7NeKCNXQGuXxwfU1aXTCEUGRi2KKX4eJM8e6w2QgEY71XHiKwuSMu19ckzvxHy4emeAotuHj",
  "key35": "VkVrBrnwqHfUosaifjSNQ8iZ165fh7dXaXKNfs6qjjmvEtEYJyygMEdQec8X7stbsBfrtXsXq4KxFCSUKpzjpxq",
  "key36": "5Cd9gaEDd1zGLSwWxYcaTtprMUxsaWtnRVccWKgftB3Erh9NEkM7UKgJ7tNhDJDdp9NGarH73F6QgoQjKChnTEMF",
  "key37": "617fF7p3gLYhXhxRXFbdsjPNNoUsTzymTu69wuADY7S6FUbtMUvzzYYWABt8Rv8ABpYM8KJfY866v7GBevjqgKR1",
  "key38": "621X8Q3bMRfjB7HfBasFgsn8sxsXrJYGgvVrnvaczg7pY7Wz6zgkGq2udHYX7xHZtvDy7wxzL9JwPxr7k95kDGLU",
  "key39": "4gV6UFiMbepsxKRWtm7X2bfEm7o2js1awV3z3c5uwepXVJU4A6MHqongQgWwnZ2A9SfwJ9q9RYKofJcZy8UefHMJ",
  "key40": "2TVuSAvrVDcovWxCDBJHhh2uVjR3RL8gvjZbD5nxALAgeU8qzpqRaM2Uk4HLLfz25gwYPSPLaGk14gUcYKrqPkF8",
  "key41": "41bMCBF9LUpc5RvZijMVyDyx4i6aN6DXoZE3G3nHomY5Rzm39XDxWkatYMBDBKJAcB2AmZvChSMfPSTHLKtyo8g8",
  "key42": "4oMsKGA49pt5exkxodfGFs8u5QXLrybbbrhZUTXKCJzxdDHS642vBT2KQvE9oz7BhpRtfE5pw31zGFQUdTun5qgU",
  "key43": "62Cw2PiBwDTRbxKbzz8exF5gWHC7w5P7ZTZz4Ne6Pi5oiDNnKekCC7KNJseJCW9sFSSKVcw53K4aBJVsm3CG74sj",
  "key44": "2sc8oFygwmbk17yPjnbLPF8QVGjM8Mxe2tAJUFk7Zwn124cHDqXsra1zzrqw1HeDYYd6tfJCh7PMKnex4F6NJ7Xe",
  "key45": "5Yz5JtL7cqbqHZtM6VBF9uAj9H7uEjCegX7v4LGUdGr2XB2hKRSKfxj6x4mwaVsRR9D4HXMq6PR6r3jsb3HoFDuS",
  "key46": "66J8QdEPpSr3bcPNGZGMnYvhsWpJwz93fPnsCmZfPjSjsw1u2jcVoTZUVvsSSqGreYYrBeTVgPg3vy3Fo8u9mn2y",
  "key47": "3iHtYZnHpMfAByrV554ya7rMYqPvMJt18DJ7tMjsfBSjnvzJw15P4sxcERGXv4hdQRrWfXy8kJZs3bQkgRLum6Zq"
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
