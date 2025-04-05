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
    "5JbLgQ4jgG1Vx86LZj39NDcwuvwXz16AsVgN4PER8gCwoN6kdH9wJ3rfFquQUyytqWLppY1TdGrnf3UY6sUYryWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7aZBmNSh1HAiycTdgJPngBTEMsQRUU4X9QJAazbPZAynwZi4BhYbwACrqn7TgzLtZvKooazsYA5pCg3Zexmco4N",
  "key1": "3K61EVdJVFS5TVydBidKUfXAXBbTqd3kmuUNzk58cu8biGJgs4M5vavyhfGo4YoJmVzJAW8vzPNJMW4eFPdgUuae",
  "key2": "3ELkVbpu2n5mPEyh1Tu65dfmchpwHbqpGZJ8s89ucaLoA5z9dxWvnZTyZMF4H66W5HZkmZnrhmCKdjRYLaHTHVVG",
  "key3": "4uM8asN9aLipCdBAzF8TbrJXCKTEGsiHQZXGSvtvjuqmG9row7TiJNr3ex56ncHoDoByJCVno8Bd29JNU7irbUBF",
  "key4": "2fANfBeNgNKPMKrDA9crC3dXDiinejoQNctGGgRyq1WLu3rtHnW4wVGgkV1drYAR9eMuHbLoYtfP3nE7U98HaVsp",
  "key5": "4NJVgWJmj7Ud8cUoug73ycvbWt8J7h58kUVz6LBTgDifAkAP6UbD1LEerN6h7qDgybU1zj9p6F1Ky5Z2GafwUNiS",
  "key6": "5J3KHmYxY6jFcNkkg4jLxCXYeJeSaV7q3f3pzzEVnByptAj7Azbyb8RWw6gBaevXrgqgLWsmyqgbJpZCBaFvNxWs",
  "key7": "4XNwZE4SHFx2Ju8j2MAN6iqeu8kikaY7S7fCzY5ZWA985mrMxTue9Y5obJU36x9ENbbA1n6hB5U71txgJmtRVmjf",
  "key8": "2sYd8WKBTpNt6fBZCg4HyPdPE3tnjDLBWfL4QKDR2fEgv2htURwk5HPzfmRGNhy1p1rJbDG7JrKxPvW5J3meb3Zk",
  "key9": "3XTuRo8hTXKV1CmyNyGaphMRd23mH8vyZ8LpUqNcSVF6REjZopf9TgKsvCKHji4s7i3LYWoh97qzxCfFfpnvxC8T",
  "key10": "TYujSBQ3kEqmaSGR5jEwErEwMZZGwL8iVwRra7QNP2DCXJPJjMn7fcoPsEdDXY8AS3P5pe3Are1Fwdor3Kephx1",
  "key11": "wiLAGeSuXQQ5zv7caN3177DfBgxL5ntYYFjDjLxkwfvE5PPVMrGcWYZvFtwuY6pSkgNqkEcFFbALjksRmS67cF6",
  "key12": "3NWEyp4KdXSWiCjZrQHkka6fQXsRY79ZqoqGnTJQZdBGuLpRupsPZj6fUVc3Umcod9WBGD4huKUakyx7gCrb3DJF",
  "key13": "5yjHfSHAP5udhBjpJ2WEHuAx5zQaqsaUtnutmR3DNfeJX323HpuM1b3vis2R1KiQsU2v9k8vVXF74uNeuBCDp2Hw",
  "key14": "XA2a6xFXX2zPSvCpmBQSGTdqddHUT7H2LjuAcF2bwL52WfMp5TUDZu1i5uLDNffCT7Qh1GH46SfAxfrWApTND9D",
  "key15": "565pTTpinagyUu2MGR9xfktR4nJhEaJLiXTqQcAJFzH2qD7KKKoQhkwKGYRu44xEdb4Q76P3zcMnAHHyjvjeTuWY",
  "key16": "2aghTfeqNktaCqGaqWZEQUhP6oorD7Rj1QsVF3XFLWLtSYXojJ7RPRt1897Y6hPhxCynJWTtSK5SEJk3amENweuE",
  "key17": "21i3zNxKoUNnNraMKm6ZwVG9R5FEs1ZGVSZSjLYatqUAKGeBmwLx73QYMZvQSisky3xWJfcTreo473S6JsWqNTTD",
  "key18": "261BotvV2tLXQuASxpzEu5jVd5kpRsqWVUSPEuSBVaHc6CUyRqphe7oM7yeY41tg9sKQuG7EydDMGCzsX5VSR8GH",
  "key19": "4WyNnr9MXCP4757gw7ziWjqS8k9bmGZG8yZxuYAswo8b4CtwLC2VbQ7RsDKweksQikrj3daxVqgKgiU3dLtd6mTd",
  "key20": "2ZDhx1DBZeyNb29S6kp53bRCLYYugX7QYt4mL9tG4Bupp79GZXGnXhueA8cdXmj71dZ1v9yZtmpL57FLjxCmMATx",
  "key21": "5J3sJ58nfgADZMQurzbMjwYhB4AEoZjwdQ1qjp86EJn5yun7NZVJTucfxg7squ7JoYdZgopiUGfguepMPEdnpZjN",
  "key22": "wztH1xk6VWGkvzuFYmHDEZ79j2z3QLdJCH8XnTFYN34qKnVXRxvHjn42kNDHpKGiSMwM5u2uZBYPXWbaNPGw6hD",
  "key23": "xLZW8e42G9urKYtrq61aZd7uuwmpKbd1RfCvaV4aEjQhUDhLoCw6Nz8ZHG6dcR2Gdtg7cVXhx5kximtm4KZkfRw",
  "key24": "ntKNHTjc8H9Jc96AFykbHKcvDM41hwXeTuXhXzWgfwRCkQ9G1LMap7K6pcPcm5mGBMkL5uSN8u7HHUWZzaxexZ8",
  "key25": "3Vi3dhBBxb8jbEii6NTpPR5C1JNNqyHoqZ52SXu4vvNWjidn3QBTFLosXnwX6tTdBVfjU3itXpxE1LX9qSFQqmpy",
  "key26": "67hrCm8KTveJU9FcL6kDoEWMKvshP2Lqf5gMkga3ts8g9rHmDtfbnG4toY6gTPfB9f5xRnAKCkq6rywG7p2DqC4J",
  "key27": "2jyH7B2vitS7Vc4FZtjEQm8ueU7DmhrDLqNUpyCESwcpn6teY9Cpft6PwqxSXT3HUzV3qzUeLZDE7R3hemCoZ9ZW",
  "key28": "4yDm6m1pqpCRy1ADQRX6ZoHnpEcTJrJyZjK1NiKzya8fDBJWAQz9XCFAP6aNwBmuEs2j2VZJEMFTT6vvZjVGeyRt",
  "key29": "a1Sq1mfxXegmPhqV596JJcwnRcbrRghvSdowAiR4vDAY67hny2o4F2QBtWEtqqV46D1p1Wbx8yi9odrZGW4Jrq9",
  "key30": "49KFnvCphSs9wUTtJjgLEDnb6KVmAFS8A61ozAz7SNTWCi9bJ9hLSTuD4KfHbXxeYS8iP7swngGE3GAqxVC6KjEj",
  "key31": "5X784TyMhMYaJP8mP1szL27dMuFYHKrKupAFMSqDfoF7CHSrC7cFz6ikPXy58e2eSNUSo9H8LqB2LL5MdswU6C4P",
  "key32": "55CZC3jB9BCeVkRyBNEP3ZKM8ZbmrdVHVxQLpcxLbzW6NnTGafwfS2K6mfChwVJQmuKmKhqgz4kUBX4SVvyCzpvr",
  "key33": "3QGNtvc8RtcngTKviPqnbPPWShbzYk8HuT4dek9TJd1G9ik9ixR5uAJdHyUzA1AsYbVwSnkVP9dC8fs2RNn3JesE",
  "key34": "LUhsanSNxkEKj2axCctVvGvCNpDSp4FRUGeHhiAciJrN5DPyKzuJiqUZWeCMJvAZv444jd6vgq12r1hp8uKScj7",
  "key35": "51uPBgGEhzR3UUyaMaXH4fVQNVnGFFwMpa75y5tHLkeLMp8niAasSDPQzAb1LqXzzKCLJ6zdhu5RUiq4pqMdrqV5",
  "key36": "5yqirHaFa8B6YijWQMj7T1GjwCamPghNC8mCHzhBf3GDhgqtSo7Kze44WXffseSTuYUhdh1dRrqCd8AL6WfCF9qM",
  "key37": "NqMzbutAftBHYvFuDFFotTHLpU2K9s2XWwiAZNcWSx9F9LqsXLe9r7ihdnaxiWiUUuaXQ9pp8QQSHKDiwiYyGzS",
  "key38": "5ERpXr48wECiJb7gUeLC82wpYZhwvHk91Lr94RMDnGF1zxLRYfvcZjAJjpA6ehb2UzpMKtyFkWtyxJgZhLztKtbw",
  "key39": "25z2JVCh3fp8eEdgzPWhQEMGeEr8A8ZPva6wddQRCZdFBWEpiXRLV8BvL7QFS8LL3fgkhChCf4rNaeuvTrrPU6uX",
  "key40": "4EhWAkuv2Q7GfDzDxsNzMjRAh5fUDGKtKQaAsnNF2KFJsct113A26CfTvyGNX83b6bmyBDizyj8Gr9WLKUD7ojWF",
  "key41": "3KeQkYoPxpgu8DLQcoXTCk8Y7Bme1xfKLiVDMoAoYRoXnvriTpCqMmWW5TR96C4sJ5AWhw4E5BFcngJwisBnGbzH",
  "key42": "4t565cb5uuYwv627tWf6Hfa4dg5Hfodt8U7Sk9TuFup8mgwDp9Vx8DEvoeGkjkqpm7Hw1YLMVakLLWaGvx9Bb3W9",
  "key43": "5DZfxfMrMaV3uqJW2PrnEYTRNv1ubi3W6o4YzDpccH9wXwi4RHpC6Rymn52U2rHbf6AuWWukqxMtJBZWdfab9Cun",
  "key44": "2cGvgtXti42myLD39AJcJFBgf76uVoNjn7qTHoe1HD3KGVnbMRfLeDUWR2YwAqka7bWeTZjcBycQ3XV7Z39LXh9r"
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
