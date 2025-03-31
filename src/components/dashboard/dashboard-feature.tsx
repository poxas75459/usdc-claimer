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
    "61aPPxynu4A3guY1HijTCptSqnUm6RUhTcSAtXSM1x96iN9NnaobZ5qP1pbxFG62hK1EEbD7b69TdRas9r8JVsZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zn24NDwZspAre7CJV6tCEHkhAtStKa9Che7dgx1kXfwYbwNim9sQRShuniW95h1WD4n8kNScfqq8eQWnkLChKWr",
  "key1": "4gMjDsBNRXJG9eTFzPnAq2GaYxRgAXJ3GVREqTiS7yhn5KD4TmWAeUK6dSh3gpgHxbpmHSpf73L62oLDU2ZYbgUw",
  "key2": "4BwgZHpt9Y183pZHxEMbYc86ewt2zdqEvF5vKcUE6FsFKzsQGWuu7WsHDbPsg1JFTjEYRt2PcxHC4k8bqGg1tMx1",
  "key3": "5ysvNCKMpzbXfVQZ2Yosz9S5uxYdmBvYXPQduReayn4RCABVuxPLMuyVoGYgYdg6KgEKa6gCeFdWrqFpw2ddUYFo",
  "key4": "4dhaj7aax7sJzwspngqK1LWVkhKzvTYfoDBXZ59egxxFB81e2BbjoHDyax2Lxq8gG5ePK4aby8J5TRQo2p9eSkXv",
  "key5": "3Kb6XUbwhsasmbGzkXz353ReTUKZS16KT8PUg8uM6Y5EbNqigeit6DYp3r5fRNwhsNT6DshGJVYLkb3Lo782Hmu7",
  "key6": "3t6jWFo3vJk4qN5EXCERpjPoSSqCnThFkTWFzG6RaoXCsCTDxxZPGKCg9zosDEGam9FGNejRSzTgCeHSzXEULVj5",
  "key7": "3Zrqr2YqeYA1xC7YANZbM353RonvGwvbGTjpT7oC6WRk6WUUEZ9g7VDeJ5EXAX9rn4k3fvuXeeH8zrw14zqsmqub",
  "key8": "21Fuw2bAxsHxcK5Z18e52MBPJdUnmF95cudheDmDhcTekYFJLBSZKBGuzsZSRY8xqCno966c36bHQxe7cYcZPZgF",
  "key9": "3fyEayNbbVrxvR4GRUh4KQ8LFbAJEdvjZdWKRu15PejPZVjhoYocwypdiRntWuq3TYmpF55ZakB5bYrtwjZyBxew",
  "key10": "2CGF5JgNrGFYdCip1ST48C1PUr5JswqBQ9cxcabvzjnWUD1iiqCqeG7xhiq419bxGZnUG9LCBC5EstKBBtiVroCy",
  "key11": "5iNZGYQQncKDDZGV22mPaMt6UGEEWA2L7eMqjM3Qd6N4bvWjs5ufhxsr3v5MrGPeVi1nNwznssSXYToE4aCzjf9Y",
  "key12": "2jnUTiAKKMnHrJeLYxeqPFqD91JnGRjKYRiM6UPpTbXcqj9MgWj2pwyDLoGXP3mYCf2FYtmhf8wnvrF3xVF9uBCT",
  "key13": "3UNNgi5r9SHhB5ykBW26oWqwN3hbkMFnkYZJpRb6ixfN9kqisi8eFsFV2NuB8T5ZrvXkGEG8NAn4EkCvipUT8Juy",
  "key14": "uZhMjLKQs4a6GLExtH47EHwMNwnnaPx8vkB2VgVLW1s84scyF3MJXw49pqkkePrUtXQVBJJ9oDL94B3tSEwbUX3",
  "key15": "2pDLcFbcAmLHbvnUzQAp1PnnukvKGvdtdMwxjbN7unXv5TiaegGxKJGjEa8Axi7X5vAXLzsDos8ueJ95waaRa3vh",
  "key16": "46njXWWYzdCfcQfEphipww4ib6XsJW8UpvajHp9NTXAvzR8Toyn1ioc34qDXdSK8JpYz4BVN4UiQQsxKxEw5PHoP",
  "key17": "3fWKBky9wybJy2BvvWnkAr5TxxJijePmUXeoNEKxzUsaKzG7qrG932NnvE9k3qVd5ZSxw4JyyK7BMrj98jT8yct2",
  "key18": "3X2FxYNNUMdYrmjQKnExkWCojBdMd3zfdojWxJfAy6W6Na7CHuNPfqynBFvkNAowq6o6xbBRuDzcPD7rMD3py9Yb",
  "key19": "VbTQE25qgCJGwuSrjkj1DuQyQXw8eRWSJ77AALzeB7hnMo3GGAPygfYyrPPaEscQLWztXEa5TzxVho9ywFcdrAo",
  "key20": "5DSK6j3u11cnurxhYHZ6DihBPeEo1fXBndvvDNueLRdB3eQeS9PGupjjxEDx6pbyTyeishrkXxJmxYdzvju4RRgC",
  "key21": "5BSfWPEUiXEoh6JKQxP4RKc6tGSRpLYXU45guouoZXtLNezb1p4x7Si62WHTwc1uz9fvRdkFLTnpeKn4BQf6rE1e",
  "key22": "3pFTV7NFCj2YHd54TmHndeUDqz89GiiAQkaSdoXSSMy7kMN9hEkb2SR9BvwfiEsMsDD7MN7erNzmmsSaeHPJPxhY",
  "key23": "ok3xLDwFBn1eUPBzKVXb7exYNuApMuEQWFjBwEGaMqr1pxUeKYPZbCrzZq7xecdyj1TgaBtAVt9FHnNAZa71HuC",
  "key24": "4FBCQLg3M17jge3mvsp9kVjXQkUX8sk5RJQnn82EmLEZrbEgt7QpVWGqEd1fdvE6Ag8BiAJVZhzkQxcvddHDG2KJ",
  "key25": "33nwhAEMAs7vHyFcit893fW7kj4PrDArEXfQzqTkNmkZftiahfKFwDf1nokUXf1DX91dNW8kvuLzCW3mSkJ4bm3i",
  "key26": "KfdNP7K6f7xSB8TQFxUoSncCD953DQGJKN5utpLmB9PMBiioqvrFihdrZZFTR6qa2PQ2fKNY2T87dcL9hdFnjvN",
  "key27": "5R8YEJDL92DT5hcB4cogF7RfcLEWRCp79gnwrxyPh9b3jjKhwX12TQ1Q388Q39ZRMMvfB9xTJcXAQiBtqQ4G3quK",
  "key28": "oZuxZinHyCyWRU9whvUnHi2aFtwTnuJk6753LYSnSeYHsv6FwALSEYhvYa6SsySQYRbtnWCSHS4MQU9hmMU9ZY6",
  "key29": "67LzeDUk6uSznhffLhXuEDHZGLPVNZKddXX8ESwbVsk3XD46pn9j6EeHv5jrcExSaEM7kmaD2FUjJPUdgdqtD2yj",
  "key30": "4KR6oaSa9AH2Dh141rYHPTWPyrmK66mHU7Ag6C5ksqRhsMsK6D7MKNtoor5B9ohwSUkbKJ4YKtv85UzW7nPwALrG",
  "key31": "53KsSviQu2ErfKrKDSzERxBKv9FzuwCHCP94aNtn1xRbP4DPsGNbDmK3ufzSRGgFZVdjjoHDjP8MhDnS7qhTRnk6",
  "key32": "46PDKdCtv2uJJbzQyAw5jXAZxyMGzJpWtDyR9w6pJuQrPMjDZCdY8qA62szNSJNTJmmdiqy5MMeHuDeQi5Gzh7TR",
  "key33": "2fZNZMYSRaDribeCaXn6DH42pmsjPW1jdLj1mHCxDcSa3YjDAzgtXqxd6Dkq35VruDP9TxbKYuViy1fmhv6GRJ1Y",
  "key34": "5z4avjsWKP9PcBqDQA8XpqdCdWoUGSZJfkBffAosn8EZPdcaWRj3FBhPeiF6X4nGs7eMJHr4PaPmHTPq22kjEzgk",
  "key35": "RfrDuhb69uGjSJQV81v28cE5XDUB5Ww4K5RJEAQotdQg1xxxocPuH7iMQ7mTS6uvcNLrqoqor4ZMcn68MpEJd6M",
  "key36": "dkqZB7pyUgoHpiCrEccqKNQoa7xNMHHyZu82bSBt1ZwaqrXn7C84fGLtpBysaUY3wUNnhddX113EcYaBp8aQxWx",
  "key37": "2AaBWuL3C8AWUHZa9hKZkfDBBLMiezvrrBKewjV4yF6xzocfSGUc6g3wK4euNwjuRDX95RUocWmNpLAmcExDXnm5"
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
