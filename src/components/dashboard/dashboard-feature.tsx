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
    "5FhANQs13nMx8i2pYf1tCj2qWt6rs1uSjmU1fMGuBb9QbCEU9fWGtASctUYA6Bpo9ANLsa1S6hHmWPAFB76FQfd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aVkHU9A6iwwv2qpQHMYKEv8fi25EfLvhGXYafUGS52zxL1NPMUj5ZKS1yiJmjbFgGtV2fuM2TcfbKJUvTrXk7Y4",
  "key1": "5Neq9icx9n3q2pz2UmkzV8EhZun62NbpFAXoPErhSsbijEWLkbYTsNwvcSgAcNcbWwvZpc8LxbD29pST1xJ7YG7e",
  "key2": "3bvTe2gpTGLQoGXF88Dyd6UtZCVC8Xpho25docNsrGCJB82yf7ZKNy38wFrBVrXq6tkaeaLwauwxdJgAtYQ7UxNH",
  "key3": "3mDm9hwUnFm7pcpa7ZxFU8VHAnTrPuJhtdTAGvrn7UDMnSGZ4XCSU7og5NmWVgEoxgubfM1cbs9we1zB8yw5LxUs",
  "key4": "2sWNY2175fgwdxH1HAQ6QJ4mSWNrq1N9wpHTacQagur3779PgWc9Bv3enU7ZvgqpavkHr4Lt7kZ7TavAsSMhjkPT",
  "key5": "Az78BDGDoxXeDkTbPjngQQDXtjvfSdJRYLSABWJXsA3vPTvTVxCad8RKJCM3HPh9Kuvag1BKkrMeGsFgQwriur5",
  "key6": "aDrABoDe5E15oc4FQGStBF3RZGSxLZFDesRxUGMimvCKJnwsYJnDti692PLRtgztxjrNPmqmHcZSDKDdE9kMib9",
  "key7": "5hn9Ue2ymWZLMcYxEYvGXZyYn1uAfyfmRte2Ru4RCt4WUv2MMjgc8Xb4pKYwtCmWtf2LYqRdWziTyVcUvqbaiiqe",
  "key8": "2sGiyweBhs58F5Fw7DeZXGf3KUYKmmZxU4HY72yJZNwyKrJZRLno4Y8pQVkRTvFUL1GnMVA4FbFzLDqC1TUcZAUV",
  "key9": "56Q1JPDKUaDZu2QBnxtm6UtEpp37N91y2rL7mzTBhT25aZxHDAi34mhp8DXYdyN2FdMBfbwBXwPYa7BATPB9UYjn",
  "key10": "tqv2tmDyxRGAXPQgLEq8cVRbi6GWdNDzZmSi4w1HPAZ3WhPERDKVccbTXW5CkFBRNP3KWRs5JsnVnnrq7kKRibc",
  "key11": "2fWteqcqh3kwJcnY2Bj23auNkg6pZ6SB71TWsW96KHGLC2mpAbycJ8w8tevHeqw5xq5ggZ2VREUbZtQuwLfQqFXb",
  "key12": "55Mud8Qa6vZMQHziX1SNonX7ZRHcC8ZMaEYASmNbhNv4HVoLkoUqyiHGhGkhsL6UkWTPT49nVhFY1kJRef8b69Tg",
  "key13": "5z8RF9gBGj1h62T8Yhp4YBZSznwNCEDKnN98Mkr5eoRUbzLdwTfc6A3bE7HsnjHLzZoh7kUa3ziGWeAynxypcarA",
  "key14": "vhdjr3nVYiXJJJVWCxWQYhCMchiYWmSjQm8fnSekrLh96xofAC38QKjc38Qgr2fJVxdvi6tiJJb8fuwUjMSNQ1B",
  "key15": "5BCUoZCGzf5E1BSpqYJNaav5YdKB2a34eqQgXdqwU6sBKeDZd1KzWnk6qRZqHH7nudYYXNVdqqpkY48uBFi3yaAM",
  "key16": "3fRgjjGGLojhRE1x9QVh3F7iQ7PhAXyKeW9EUu2zWzRT3zWiz6vLRd3XyxwUiJVEMzwz1VFBXaMbL8NTnH4tQafM",
  "key17": "vX5nc51w4utRVfK4oS52azsttqgX5VvsJyj8wbRAqxsv5hWLGjdv5VBCb1wnTGGg3bbB9wVEA1daxfaqkugTDZg",
  "key18": "2s235DqUvFbaJoJ1M27UdhjsUA2a44BSE7Sov9mRuiEWR3miBGDCKFJ3HbUU8qK8MtxTgejtYanUpK8NXhMXG29S",
  "key19": "2fY2zoPXsD2YyAiDqfQwmkU81PpztWZ8FMz9UYcVEEAwULiP7WNQBqbuwXvANzGfWtU347MZUd7rGUtpT7NDPpvo",
  "key20": "4N5oFBepe7wpLnH4iquSsMrg4RHm1WXNeQ4E7BYLYZcdbeTStfipVKUevQkLmS2AeKq75Qcguq6C5zuXS68esH7X",
  "key21": "4yeMYfzJo7ane9RDsTehW9XMABJa1f1DePX8775YGH1sG7bcFxGp7jBHQGphp85yGWXA6nqCocCn8oRaQMSZKjra",
  "key22": "2cGxwmJASjY9F3At5nXbMn9PbZnyCs8GnQiLLDfWT2z7a3g3UsTtyUv7BgHftqfgKNhSvXKfreN2CF1fTqy82rDp",
  "key23": "5Aytrc4EyKEwqHMXCJXecqFKrMxL91CscQUWhSneHPc6wuX1YxJ2EgnXb7XYnwBEG5MZxaFaeBTmWLvFugT56HuH",
  "key24": "4FrLJdnCSuvfs4vvMGe6mTrimeWJgduuJ1zf28AYsKFJoZc8W2b7YmR5ShYfrwQCrfwFGThmPV9xPBPSEm6Jf3HB",
  "key25": "3vkSnvwivNpJKFRvJdzgb2pBBScVV7vZ94DuktLcCQ9e1c4KeZhJSR2zYtHaLqVDXXorfYCoiTwP5z2xREQMGZL4",
  "key26": "2FLP5KTKTRYyKJmRfaqVQ3iAV2rUsMiVjQ38qWErrHiAAUru1neZcH5ABWMHbcnBfCiSwA99w5mo3wADBRoH8Ai8",
  "key27": "65vbANLkBGga9U9roKdg7u4pV3k66QWtgZkjqZ79Spxc1PU1vMC99AtYDMyyg1tSLLRX6pc9r8ewtqycdWV2skeQ",
  "key28": "4Hq97H7hSGBvtC4JTg3xr8jkh4y8infTUEnuGexfnT51nNs31jfePFET2FC6dHBU64GxbNp4QwMf5AmVHpm9Fd9P",
  "key29": "2PF2aWFLztQcE1Nk5HvFbAhSfBEi6vYcmGLHexY9F4DtngrrB31p6aDQ5zZWoo35FrnerLWfqCSJ9Nw57Em7d98B",
  "key30": "fWqfySmG9Kp4HjHm2QWEkE7ZcaiYpZ9UWZB7mvMqyWa67GU8cowWUgumywD1nNCDD4ypF3N2Dq8wmtQE215hZGx",
  "key31": "4ubMaTSayLUBLvBoBLyStqgQCYbvkrkhtjXFWgWwcdMefKdAjbJ16ubMVRcWv99P6DQfwBdBXWiJDWTEmyrigxWz",
  "key32": "37ZYNXHKvKvPEQsuCnb9gQDN7f7nx6zAgERnnve8qdizgsrwSJjBvcvtfBsijGFQZCboWv8B37bep86gc2KLmqdS",
  "key33": "5AmPGrjqWp6JHkyZ9rCruisRxQTf76bYcemLBxsk3GGDMwEiZCV2xqoLstdS8sJQ1Ntt7aCum3b9pEEALjnUytPn",
  "key34": "3doxPYkKjz3GeAoZMYnoXJuwh3ZrxpHELZGJBfoQxREem46Tu3kttroFnN1Hb4mSGg7a9VNcmnhj6eSP6FmeiGu8",
  "key35": "yg18ceTj12hCF4FjvMD3pfxuPXvv8KA6p3K4byazm5qSDxzxGoFYpkh2RLQsfuNMF75Te9svazRJJD7TkjSQvwg",
  "key36": "25kgiJTm4niMNsqhv7hXiZrw1eDCuuNKHCs6pkNT6fEhkfJRV6yUEKKLMrXd2cPuyWV5TzdS5riCnViPm8T6gf5P",
  "key37": "2GS1bqWhNRMAintmjKhCedMn7vqSuftmDGVppawn1sm19aRUiuVEGF2ZJeBcmLmfhstVHLGuQFoL7sXXwFgHMZK7",
  "key38": "28bTXhkvon9SoMKxj8AMpBuGiQZ6A6AZEAD8ai4f1QTaxFMMXHmALbzhQCwrqZfwLFkWMamDLb7nyF7qxkAtA2dp",
  "key39": "3e2eUyn8rjdQfUzxzJAXtDPUH31Wt8rBPzM32BYF56j7bWYovQBXes4TEhF98Y6VipTPDHqi2gZJ4hNPmyEp2B1h",
  "key40": "34B1tMeiNZNNLzz8TQJyvMNN9KkxTxkgUNX6B2wJv8jWPBJCD9mAj2Ao6yoh7XLqAEJSCkwt9dkQphHg27ri1VBb"
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
