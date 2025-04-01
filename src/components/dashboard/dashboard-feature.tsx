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
    "4NyGXkRF9wwrVFXzBukbwuv1rw5DDSatCtG9H8j8RJCGEodH9ZtadD8ZAMo47sxSTsn6RqLCrogWeDuuJJRYuUCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5StXfMq6frM2AD2eZKLrAekWHzrCZN6Svb3WEhZ7C5BHKGd42VnnzxSfvK7v4MZ3uMngPwh1dCR1FrpqCYSci4gR",
  "key1": "2XfwmP3nmvuoKXEyzPN9pChPTq5e3qXrd6775NZ39Fk7DU6WZ7FJsusZKrE8axqaEpU5L7dHFL9vMSokmJGRUxPD",
  "key2": "3rHogf5KtLj4yxXwY3dj6r8PNP8K1nkXCe1e5qJHaiyc74w7PvVQMeDX1V8LQRSc7K1DSc6LHw9NHyJfbiJpReFR",
  "key3": "5nyN9DVsGNre3TsHVGyCV1spUNr6bTSzuuM4mYkFLLuM6vbrYrkDtN5oV7K9RxbRyC2fJgYAThmCvJ8HpAaMdvrM",
  "key4": "4rP34ysxrLUp3KUDj9zYoiA1YDxVJoqGtaoCoHnYNHbCk7yNXxptzcYmwprsYYxdeLEBvfWmVSau3Fhi2ddpcQ6o",
  "key5": "29myKHbdbaWneWCgL5ZrUUmFNWwtwpBtPZ9W6bmcZUMpXBpZbsVhatYVeLJcnFHUASnNduiLvwnrwtjUNs89NmK5",
  "key6": "5EeGWywveEQuXr2Yw9ZiZzhiw1QEyKsbwgdcH36yxP5MCrstuUjWvkwpPRJhaftwJPwTqFQmzpfeEdEHa8ZNSMZA",
  "key7": "4R5C4D6ZkrfrUPrdMT2Ggx61abEfonRBYnZJHZ2XNf8BWYRbDcDAa93BwFBhBdpGdERdumJrTCzCLixB6D9LLdfw",
  "key8": "32XvqzK2Y63YEXEakND4ooRbwMA8ZB5ocXjVw9LTTAX1eq7uSnKzHbvA2LGv8z5V2PsfdKr2c7QabjV912u5Lphz",
  "key9": "J7bVdSWV7y59jMYCx54HrVXgguoqouXFz2z6GLSJWWQTqY8D5rEpWMRMAJwtz6GiUBVqcpHCZkmrNXtQi4yxpeU",
  "key10": "29wZ1BUs9ooLun3UYd8ep24hj9rsHdeHLQQQy5rfLPt4BvEbFuN3a81DDsBJY9pcHugP4NZ1Lmo5T1M3XR1YxrCK",
  "key11": "2cMHu8jJ7ExuEKGYxEmbdju8VG9i3k5JJVVEMeG37ET1FZREtKMXap1TWRTtDSnH5om341eC3YJP7zqYEPaizRwa",
  "key12": "368sBQaXoNvG7Buq3LLKo9FxV7wjR24rMtHGFEenreTeFnrgc6J6X3UiPSe3cJ4yubiCAtcGiNAAcghduiqypNYt",
  "key13": "63o7vacFNwgCubXW9kq94MkWDwoRnyAd6p5D6QmKAkc7HMDEtFGZPbkJyHUEYKg2Qx1GqHZ2Beqot2pBF4W3zXWP",
  "key14": "3XU34fCATKuqf6tGe68pKnXtKTqyD3nS52a4PQYJ3QSEptTFziHyKrRTvT6jNppUdpPWsJLvFztAVkvzx9xZ5SSG",
  "key15": "3gbooPsjP9feARUeZtc9knKkh9X6dxWsjn8wSVBbHUYqQiRb6xMP5sjULjmiSXMhgXTyuX9QnzYdYowp1i64du1W",
  "key16": "3QGSeTbEPBBn2dBmqk3VrR7xyaEmCTczD95fXRvcoVxvQ6raZSDh1u6v6ppxmuCumTGXiJnBgjAnoPTAxhRUUWap",
  "key17": "4aWB5e42SgpzQ3XqGaMHhv9cziu1FBBiT1dDYWqaVcA3LLiMrr2DYjxSmSWP4RVkjTi4uu9yKxEeK27JAZPQ5cX1",
  "key18": "TnyaMtrkk5c7rovkgA1TnPuafJVnXZiDip64MF1LLpHtyGnZJrPnKQwR2qq6DSmg74KvSA4m1QUNRcLxDibMqDA",
  "key19": "2J8YvPMmebbXNrsb9oGDLMTjpXwgkDjwgvvPTq2bcGaWiidTHVSDYtwAKPeAsGp4b3ZohZajuNkPGR28EQZ7aPuz",
  "key20": "3WBmxw5eKRJcQPFMCshfczhozqSki3bBsxqGtFXVPKSjHPMXA8sZ3uArGni1jRasQZQCpAmoWHu42hC7aHG8dJeL",
  "key21": "2Vzb2fSqKQNYNDsFcdiA4T5YkmmmWMm4JajUUGATzhoQvRHRLY9PjH6EYsi8ei8vDbGL8qtQe4tRgbiirNK4U41P",
  "key22": "4327w7ceqsDeDnaXJZx1Lqb3Zhp1KHsw9SSWPUw3C8gfUyWq5WLQRRxZEJzmRWhXXbdURYXkgABToTLktZQBzMpb",
  "key23": "VGLMVnc3gUHyfM8kdQUYRe2MLuNY7TDwzoa1Kv38mmepoJQAb7Hj75TcaJN4uXKMEuGnxRnGjzqRTV73zAgYk6X",
  "key24": "ruxw8ziJvKqyAgr4wxc5c2a1hkqxWE6Wzw1q3WhGjSYq4csX3HyUDQapBi2hZ5o6k6vJx4JjnMgTYbg2q4tGQH8",
  "key25": "NPzrRRpEQzcnh65Gzh9RLqif5uFXmYFm5cbXyGy4fiXmNCPF8aAnvVu1fkpvXKQK1TR8VgyQoThg9U1FHnkLcGb",
  "key26": "TpP3BCTu7z9rvS3YBVW8yjvPCWttKp4gep8o4Dn27K1xiRpJad1qi6nHLEfCEv6PBeaSm3y8Vw7q3tymJymxAxk",
  "key27": "yLsC66pHtfL3JWBGA1DEeWhgNJhjn2ZNDwjjRuEEfdhKyKTdR3SNSjqWwB8YrVpkuUVs4odiETcLvrZpFgdBYkg",
  "key28": "5mMKu4q3ZEcHsEmpyxLSR3bTo1AztkTnbRQDnGXQ2NykFjuEDFCbWcvrFT8ajYHXogEjDWy8uZFLKpZxQXdtnkAG",
  "key29": "3Tx2zaFFdoRvydctvB7t5xhg5sqoHHhrof2FNUfGkCyY468VRZp6GveTUKaLijCMkUMqh4GCFYZykKTjsQSW9yKm",
  "key30": "3MqA56zLrgJZ3QCGDSQLFWYVm1zj3Y1pFAYqTqB8mgeR6diMfbkGKBJs4x3dkNviSKerYHsyD7JccpyTe6WP3CUJ",
  "key31": "3aDGCLDW7dsLHgbp2RUZWNgDX9DetjGv9tCjqdgNfg55mYLU9uuSJ3uziZkK7iZ2pPAd19m9abySnxnwTuSdnW2U",
  "key32": "g2Q13fSBNNjxyMwJAX1oss4PmMdYLSWJx9vcFhT73EEJK7iMXjac6YpifMaSuDNpkJA2mywv3ntnA8QFfyS4ZhL",
  "key33": "4iJU52XimiXMi3KNuTjbnCCbJmyHEcqo1pB7oZjvLdxwVWkZsaBLfBH51giNRB2U6reiBZ16PqLgDWsQHBdMpk36",
  "key34": "3JTmVikLrP5eezZyDjChRNmueYUe4aPS1DbkNba3dWkNW4iqx5GsmjjKTpk4AFecdSH75Cca98xStG4rkz3AYV2y",
  "key35": "4zAsxxuDnmMKC1qb2xzGw6eFW7BRvsofsy7e8nj5PBZnfxKDoMYTKTW4hHvhnnJZ385JpmByhHQUMicjpUNigf6Q",
  "key36": "BkrCpma1YL9FGAvkSNePqQST7wU7KY7Kioh3PPMs1uGqYDfpn48AV6BHYUj3YLsJoe28Zm64w57yaKHQPxhg7WT",
  "key37": "2y67go1rSTu6TEC62ArvzoCZoySxRQz2cmbRCmbFTXPbPMeTFEcDB4XeYFS8gQVNkvzeU3Nhr1ecvC6wcFRTf97z",
  "key38": "4xKxk2eiGwbAxXUBnYfiDhxSHeapUfxaijatX6d8pLRdmmLiVhw3A3pY6z2rLX3LwwDrwJVi1Re5bxzr4oKuLAAJ",
  "key39": "2Z2CeHpLMzZFzxmnNiKtkzM6GqcYErASMnfg3g5uUyr7HXcb1c4sSEGcFgAJfysmuGU58Q9u9Ga3pPACvxqpWzbp"
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
