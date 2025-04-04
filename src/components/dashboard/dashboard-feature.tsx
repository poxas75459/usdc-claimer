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
    "Nxxn8qgyGNoZFiKeJVF3AXwi8ZKyYiByt7HYGHGYtq28gQAK5DAytUCkwPEWpypp326tHMSFTFagwwrZXkrj9wB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JR7Gy9kKRguUK3Kufvw4XBkozpP4pPp1j3srdzrVrovS1NNzBrAjmE49AHsr4XvpDSR59u2RgwbLWVRuPa6Qm9e",
  "key1": "HgTzuCjzdFHYMieEbycqC9iRxuEs8LgjGvgjNLzQVYx36faWBtCiUY1sKxMKjE7zCnnbeQDEVTaiPF2tkwT4rpL",
  "key2": "5WGruaryusuZ5Y7HEwb2aKwAiavBnfK1DHGkJpuu5qKcdpi77pMczYF3ge8o4RKmSL1emTKzkLmYi23a1Jj9SdLh",
  "key3": "5iWhxEDDkBmUQrryV2HbwVnf5DNC6tvPfc3py3FNv8xzsa1ovbP6QSiPQhchzxtePwePp9FMpXurwXNeMwtPh4uf",
  "key4": "vaZKjkaAt1igR9Dj7cwBFtERHUsLELuWdFLrio4CHe5cqqJsfmVfp9Env2ttG25Gge39WTa3sh29Us77LjfN4Mt",
  "key5": "33qgt91FpW34GnJ7H51SGepr1zhmoATUpUYUnG3PM9Bvk31ntt6Nu3Re4VoUwD8caGorRxcNW1wwECuHm3vnagAg",
  "key6": "59J5pCayTvXARhCoct5bsvuzFueitfcNffR37jn5gRs8J67DvGaPd7FN4ndSF6qbmxYzeXqgVcaGpQwnet2pWn65",
  "key7": "34Gvz3GeJRFxzv8KgQ4U9HBsgcvcAq6T3ykTkUGVA6KYQ2XmCvkbYX3JEWbTjbwbGF8tk3jC7ReBAi3pnpasESQJ",
  "key8": "2buh6P3EQUWha9xyaupWQGY3xcK9QUcxjkWgrN3F3uQ5LRoQc7quAuG8CxQkbBT7GL5aVpSXM2rKAKUPSGmyKJqK",
  "key9": "62Ej6fM9oMgz12tL1wHxskErFrQquotXwt5eAijcdwtTnUFzmZPqCPFCC7RYJ3B4x6EwKrPEBcfL5wk5YNbU3oMN",
  "key10": "5JTuPSbLyEGswbN7pV6uUVC2FsPoJPi7suDvxf3X4MJAzDqenigVPwR4w3inG6p9zmzu14zQGzzzKjudoVucCsuk",
  "key11": "4nfYQ7YvY4VuUVyHawJ39RjeAHWxgo957oBAntJ1NWAWSwH66zAi8V65rugYyyggLmAvxCLzZ65TRqebEGVV3cXR",
  "key12": "2Emy2nqixCin5cse7NtuWauu9QGuRGGuR62MZbRsuTnTqhDZpSwfevPbz7eEz1hHW4EHYqKViNzqXZYnHm3YaRLw",
  "key13": "anfovmvktQ1QDM7jVsUmmXXQQLLYrZEMB53kzLqc7C7GQac5dD7qrf9nhiTE5KaV2TciqGfu6yT1PvpzbZLTtvg",
  "key14": "4NuJ59nJwYtuw3PjfJeTewW7T5CTkySWU4SSEG5kTDfoYWRFXXzPbU1CHsYP7154coB7Wc4DmD4X3sNK9XfAQgYk",
  "key15": "27yR71DhcnEVBsYDd8rYhPPaYufmMyCgCJawD3iaAdGdP8XY8cZumena6gy8pGXTPVAKFZxm3AegZSuXSM21ZMQN",
  "key16": "64D2puZmeiidEF29GUcy7XuH9c2fG1iTSRekWLaQZ5mHCagHhZdYA6d8x4sVwBTK9SxboKKdnSgFbaGvrMoABDuj",
  "key17": "4qVscoE6C9RzpZ9boCXXPkydMzaG7QWHE1TwJ7K9sJEYsSR9ZWiXMxFrR6XEUZ8QdTytAV9Xr6m6pHiBiLirzxMp",
  "key18": "5mXtG2gxgkKotdZZ7GEEvFDQKr1bpNHZSqcYJwaYyZgRji1WNqSBRMhaNnEUXhCDXvjGZApPZkfpF3tQ7xKDL4CN",
  "key19": "22DZPXWRcdZypVjBLwBrJj1q7SZm6gNGS9rSAhCR3P3Rd6tUMZDgqKsp9dC4CrL2LwxdMrECrgTA2r1Z9F5Nr7MY",
  "key20": "4jfmT3N1aftPbeXZMAj9XKj8GLjySHhWcq5YL8oXTuysinz8J8xeBMd9sg7AF2eutehEVpifCTDZf4ybJMLMhGxK",
  "key21": "5PEmUKw255xRP8LkrxntzpSyfaXg8PXzrqKy3V3AqJiDZupfTjQHf5DCEr2Vo4g5mBAFK7koPqtCTLRkAbfLQv4z",
  "key22": "3uJU6EzVNpatgjrmKYj9awiYM6ik8DbNyxeU7NgZivPaFFgB2kFikET7FZAiF9AYzjBHi7aQEhf1AZoLy6QkXKuM",
  "key23": "29FgvHTsxVxcXEQf9HQf95R7eX4gy9fVPj8bTebgbfKLhcEwezDH6kPAVE4GdFiVruyh2rVaNa7cPA4HqsuQarjU",
  "key24": "kK33fhbhwTRy6XcT7K4kcKbtFU1FxrrCjC9XbSRDw8tTc2o2RvHWVH6LURyjNX3jzYL41Wj6H58XofisJDVzznU",
  "key25": "2TX9eso33fun42m7k4GcNDHQSWkguBHL5fDK8hgUMVfyb6s6qHkJQiBs3mZZcLoeFhxaijuF9n7sbGA1MMJrXEdZ",
  "key26": "5mPFyZhkLJtzSAmkYAN5SrpEcEkhw4UbK8a3T97R7XdZcP1Ez7KSDwU4KNcgZodbFoDi7tXrF5TYssKDZkyazzs3",
  "key27": "3QuR7YjJMFBVKgUhXwFK9pxmANZJXrjC6AZjRUanMqXfqB1qc5ykUZpjkuNtnLzgDYusAKa5Gx19jPwJDhJUQQLN",
  "key28": "3Kboa5Bg5xzDezAxiU7jW3x5yja8DRrd4JKgtZn5bead9NFR1mwdiGZGuDYRhh69QxAKb6oVEv73V8zwPzZrkzbj",
  "key29": "2peoAayvJqGbH3R7K2YFcNS5sHkyMjP4JkRtmVGqQjfTx6o6XRBkHD8EJRFz7sKFJXnia3yK6zdVJ2LdA3Z2nPEH",
  "key30": "2JFYqpw5RwNFGrcgUxrJTLNvRS1nQB4Cvbnz95BXEpJn26EAgVR5xGdfZEEF1qN9ZJ8Erru47D7cYXrtQKHMiQzy",
  "key31": "2CerkfjFTpA4Tqw1rdxHk6Nd7SNrgrpJ6WpDuwABxypbTFviAxamKqJ52LxMMJVyCBZKYQVciTdxaykFg8rCsDQT",
  "key32": "EH2gNX9Gtjz5Ggj5CKhmBEp3d6Cs5EzBEVXoaTDQXE957DdEFxGZQvv47oYR4uxr493hjfEp6riXbcs7kxk6UAs",
  "key33": "H3LijkVtpoP8UzfBCX1GqdeCLvm9hf3gTynSQw5NSNrJX2aZqKUMNQuNH7Jf4dNYuWeySFjx1YQpLaggtypE7Tb",
  "key34": "29c7nxZ4PRcegn9tJR82SrwMS8RymLr6mWa3VT8cscSs1woeGtwWY7yP3iGMh7QNL3zhXj3n8N1faFqZkxqjWf7n"
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
