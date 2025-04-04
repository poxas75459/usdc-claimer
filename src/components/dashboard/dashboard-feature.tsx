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
    "ffx3ksM6QYatqTk9Ft7TKveoqFh9QLbw2Jqj7RQV8noZWFMhovSPXvN3HHEF7SLdkJSbLJXi59G5JfXvRjKhrje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28MctVZgFEv9BybPqq1TXfBnMhnTewCTTQtL4CxU4i8Zu2MeVuxmQV5AUAtebgKsRuQmiENmuFVwC11VvY4pnjXd",
  "key1": "2KPqkqZMHjAUJkDLTRqZdTdEfV1o5eRBtPnKYHCXymQi9hCNmD6dLpvf3qCbbAZ3inZLJQbD3KdMUxpkVGuiTDuN",
  "key2": "64YMx6SYaM22sqzkMRRBy2htf2RBayeUjdyb4HVQDnr8YNQeqaGQ6tcSkjS2cTrGmL9YQuELJS1rgnQGYdLY51WG",
  "key3": "3f3ptkRhnZFcon9yxzwj7dxzGDDPSxfoAbBL4qLnBRKbmpnce4maYGPFx6858XA337HBp9GsknKyKYqo4qkR4NDL",
  "key4": "61inb3Xg3JkiERqmYhWHnTSmziqDwkmqoeNZtsyBbH46iNWY37F8BF5cPxTEcmvTtZ2BdtaRMEoFy1xNevfnwkF1",
  "key5": "5Zwz8zKwmoXGDxzYMmbnjAtwMFNDoCqEMeJEt3QeGPycAp7dxWSuCaTswNxogtrD5Bz3Fwvkq51YG31k81jy6vez",
  "key6": "WcaytTiz2NPuffoJyNAkpZPeaYETttHu6XFGi6VvraemyCgbhhxgb5E8zMca6nfTSFMEwnwyaZbMwDj8vDqnHH5",
  "key7": "gVh9evKNzDUKb8Nc6YgfJokTSKbGUoRWuLZiYRVw3vsxTFukMTstRG9pfk4F1rUeztB2isC49qJ93Wmt37wUATh",
  "key8": "3TjXG6GdHNxZzqYJ5d2oiciAmyrqiBD6Ni1DfLub7H2CtcrEpUvRt1YhbkaciCfhk5xzudzYaYCu5FohWjeqqDyH",
  "key9": "srguj4JaD88BS5ihgdMBupPVGEXrk2fBhrxrFLGkbJsawy5ULSnFmtGBhhbaN1CpTe3yXHbUfpE1oWGUwnXF3i3",
  "key10": "qrDeCASgDaKFfeLhzXaEcSjrgcLtTJm4e6aCBV43QRwaXMTMgtMfCWy6Jt9TEfrS9JnxAq52S2D7Zy6D8GC3buA",
  "key11": "R24ururHLbWcrViU4jh44uEALnTLsbv8WrTxJ2KuVufELZMsok9b4imiMC5MEqJc5CLAkg6hBX2tyJ7PNgQ9Fi3",
  "key12": "3KjLSMoYHo8iz9iATdH9VKViDuod6gqMsF65WSgTzUkFrrZ8pczV2mi742teT5GJpos8uKKp6CxsG3HaDC4wCNEB",
  "key13": "4mC8Vb159cKDp95dL9qdBYqzdqFfZBKpHPz3y27wdcxE2FUxJc817WZJ9HtjHSHz8S4PUJP7PV35d6t2juZbUEud",
  "key14": "2NSPXJjBZuzfs3f7srQSps59FU6vDaq7sh2s6UTRW94cyDtfMTomo6PFWdjF4TecAPsWmnSghPH8ZnjMUhWM7YCF",
  "key15": "28y3LfyjK6yjxv47d7KqFb5FJHVghAChK2niAMrqXo2CEa3RD9T8UwEwMcFAPJzwPkQa7LYdmYDR5dmf8FwZpQyJ",
  "key16": "4dz8QJMuMi6EqPiuDJohX3vjZ59Dgs3UuvgsPxixWtYfcdo26H9ZqmGFPLjrrR4JmvXMuSZkGABNJihgeEJTQWM4",
  "key17": "5eo4UogB5ikuH65KctSQ6d1JPCqEb3NqvYQLLWwr9zU5MEz1qiiZ1p1AuRJ7mrctnEt5zDjhRaG7nHG726kcX5Nc",
  "key18": "42Sn4a6kfndVkWKpgvranTeK7QjXFtaFexDNWpttobd6N7wZdYzYuVmbUHPmcH7o2VQo9aGeeGa6GNWdKtJLtq4s",
  "key19": "5xsk2FWuPC8QyodQuNZnkmzTuRnvdUdcjV9CBY1eR9TyePLFJat8o2wXwnhsdr1bAoiGEXBSScWZXkgU9dMPT5sk",
  "key20": "2T3ujfzFP2S2WmC83Jg8JnPRg1V8onqGCQ1eAkg82NAvQ44d6bjWaSEvAK1K7xGfWqQGx9gbUgDgDEdd9e5R3mV4",
  "key21": "FW1YzVUhSpM7uU2riBYknwjyXRfH4rCAur7hqVehoxeXJgTViQRsFXsVnghFAVhH6Bg7NRtckjoCq4LyNDLHr19",
  "key22": "4yavGbRimtCYdrM4E5z5qxjoFRqTVopjaGX2cVk6FDDN2Aqdw6i5iQW1z3RUXEtGQyHjPo9aaueMVKAJppcf9os8",
  "key23": "B9hNVVqK9xtLKHYjiXX1ro4saxdMW4VbYhufsieqLL2fhDfnjepkgicLVufpZnqHJJ7q1uuBzHaeuz8rcGji8yb",
  "key24": "3v3JmHXuMQb8bq5QNWHNzN4Aysxud591xeJ9uGQKY3XkZU5j874JkWKc86LKVUdcKC7DE1BiW92E5vQpjtm39bmY",
  "key25": "GiN4qrkMswPUYq7KQaNDnMAbC1q7Ws5EXMqocWS1uiYRWcUBqYfuvFiGRyz6nXZzqo7SKddv3zJkEgzMDJKyhiT",
  "key26": "5fYJna2sJsYZD1rdFEcNtrh8uFDeJWxkUmSNRSAH8zvJYWgB3dHfzFxKumuVuPasfUxZBaQoZh4kg1ismbi8mKtJ",
  "key27": "2vY9zcuJEyx8jcwGNMvVRHmXnmC3MkKGLWdSXmSq1xJ2CLDKT5r6rtpYad2ApDFHaqSGKt81U7bGi4H5q5RXxbMA",
  "key28": "mP2cqwK35cA3BowtZQJnoDMMqwTZCqvpYuTyhV1Bc8UvbpxwkNswGtD8TZkBQLDcVggbfSE7UKfaJVZqME7Cabh",
  "key29": "5MPu4DLcTUsvwUhM5tuU92fzVK6vwBNqNtSKtAvuzswyBa8rQYKnPiqRct8Kk8n7AB4jcrtgEtK2KNEGjiVaiUz8",
  "key30": "2d8NQgqEzZrpWkQ2uhyf2mMf1VyyRzNh4Vx1ENCAUYcjdPCicrpMvGBJU2fD131Uay7JbHjHCV4gK5viq1cRa9mF",
  "key31": "28qMFiXwvUjSAEAEVLSxt5y4dYoQ4bww2KwbgnRa4aFnjEQH523AEhUuMmgoKvQ8YhSBu2J56BC8krTjZ4VY1tE7",
  "key32": "5sZFRA6iLNE3zz4WFJoXEHTwqBMTPnt333rCRstQ7zXEqmcCrXXuEmJgaNM1nctaBSrLSbehsNqXjBJjagTQW79",
  "key33": "4Adm3XVfszsqSt1sRA6sK5tN2JgRUizV3PUukrJcZCva7B7AM2BHLvK3dmh8zuxu3zSFRwReC5aGJeXLAxs7P8pQ",
  "key34": "xKo2uFxBc4rWgywUVhSu5cnxbs8MFQN9hV3FQgjKukaRPUyVuRS7cL6CVQNy3nLdRhGwtwDFGEn2txd7MzWtyD1",
  "key35": "3WtSDFzFEaEksEniitfSSCdQRndBKV1g6TBw2GeuAnZoFyzMVe2WzuA3woBqxQeeWKbPFXaA1yvPYQoWGKB46pfF",
  "key36": "4wqNjEjU1me77PoSde5tAUQoNjrx5ugwTsZehKo5zgWToHQbkn3fut3kNeaPddowD8MvPuaw6fabETA1jJ3bw6Qb",
  "key37": "2QT3iikEyBBCV3pKjikkUATaRvQHBzHJjTXw7h6RRYBfZxLcr2UV8t9WRwGgjWsjupUPAFFuMhSSNDPnzeiKFtXb",
  "key38": "5SAdgUqgmhmyh7CGF4WdE7qTAs1gjTpg36YGLuUb8zsrAfXD5oXhY2DT54fx6ZViTAf73P2Kw8JamYqWCcjDeEz9",
  "key39": "no26Rct4n164rZ6mwCDW8L5LMXd84fWCMspAU8QwrLd1f1AQegHQJfWbd38EjVRzHqKhK1RcNF3AxYuoQkxc5t3",
  "key40": "3WxTnrfv55ibmpBjX8VjibKdhGGFGzCq9bWG6ggTd55L6qY6CFkZfBxJPHkJ7yP2U9HYTQLV2erA1kB3Jr3VehL3",
  "key41": "5dKkvQ4wQcVLXQdJsY1xtHKKHPWoEzgp3vUmBGrzqPVB54EiQEqDFFgMNh1oUYYm24o12qNZvqUk49wcdTBCnN6u",
  "key42": "2WGqYQXWsBYuvzr6qsEUDUSHpvxxS8ASathwDaMe82itTrjErhspPGoxHEQjhAXCe7dd8DEgFvTMgmvZ2XrZfYkZ"
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
